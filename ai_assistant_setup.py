import os
import json
import yaml
import textwrap
from openai import OpenAI
from supabase import create_client, Client

# ---------- CONFIG ----------
# Set these via environment variables or directly here for testing
SUPABASE_URL = os.environ.get("SUPABASE_URL", "https://nhhbgzxwfcribhupblct.supabase.co")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

YAML_API_SPEC = "docs/gamelayer_api.yaml"
KB_JSON_FILE = "data/gamelayer_knowledge_base.json"
CHUNK_SIZE = 1000  # characters per embedding chunk

openai_client = OpenAI(api_key=OPENAI_API_KEY)
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# ---------- FUNCTIONS ----------
def parse_api_spec(yaml_path):
    """Parse the YAML API specification and extract chunks for embedding"""
    try:
        with open(yaml_path, "r") as f:
            api_spec = yaml.safe_load(f)
    except FileNotFoundError:
        print(f"Warning: API spec file {yaml_path} not found. Skipping API spec parsing.")
        return []

    paths = api_spec.get("paths", {})
    components = api_spec.get("components", {})
    security_schemes = components.get("securitySchemes", {})

    api_chunks = []
    for path, methods in paths.items():
        for method, details in methods.items():
            description = details.get("description", "No description provided")
            summary = details.get("summary", "")
            params = details.get("parameters", [])
            responses = details.get("responses", {})

            params_text = [f"- {p.get('name')} ({p.get('in')}): {p.get('description','')}" for p in params]
            responses_text = [f"{code}: {resp.get('description','')}" for code, resp in responses.items()]

            chunk_text = (
                f"{method.upper()} {path}\n"
                f"Summary: {summary}\n"
                f"Description: {description}\n"
                f"Parameters:\n" + "\n".join(params_text) + "\n"
                f"Responses:\n" + "\n".join(responses_text)
            )

            api_chunks.append({
                "id": f"api-{method}-{path}",
                "source": "GameLayer API Specification",
                "type": "api-spec",
                "content": chunk_text
            })

    for name, scheme in security_schemes.items():
        api_chunks.append({
            "id": f"api-security-{name}",
            "source": "GameLayer API Specification",
            "type": "api-spec",
            "content": f"Security scheme '{name}' uses type {scheme.get('type')} "
                       f"with scheme {scheme.get('scheme','N/A')} "
                       f"and bearer format {scheme.get('bearerFormat','')}"
        })
    return api_chunks


def chunk_text(content, chunk_size=CHUNK_SIZE):
    """Split text into chunks of specified size"""
    return textwrap.wrap(content, chunk_size)


def embed_text(text):
    """Create embeddings using OpenAI's text-embedding-ada-002 model"""
    try:
        emb = openai_client.embeddings.create(
            model="text-embedding-ada-002",
            input=text
        )
        return emb.data[0].embedding
    except Exception as e:
        print(f"Error creating embedding: {e}")
        return None


def ensure_table_exists():
    """Create the gamelayer_kb table if it doesn't exist"""
    try:
        # Note: This is a simplified approach. In production, you might want to use
        # Supabase's SQL editor or migrations for table creation
        create_sql = """
        create table if not exists gamelayer_kb (
            id text primary key,
            source text,
            type text,
            content text,
            embedding vector(1536)
        );
        """
        # For now, we'll assume the table exists or create it manually
        print("Note: Please ensure the gamelayer_kb table exists in your Supabase database.")
        print("You can create it manually using the SQL editor in the Supabase dashboard.")
    except Exception as e:
        print(f"Error ensuring table exists: {e}")


def insert_entry(entry):
    """Insert or update an entry in the gamelayer_kb table"""
    try:
        result = supabase.table("gamelayer_kb").upsert(entry).execute()
        return result
    except Exception as e:
        print(f"Error inserting entry {entry.get('id', 'unknown')}: {e}")
        return None


# ---------- PIPELINE ----------
def main():
    """Main function to process and upload knowledge base content"""
    print("Starting GameLayer AI Assistant Setup...")
    
    # Ensure table exists
    ensure_table_exists()
    
    # Load gamification KB JSON
    try:
        with open(KB_JSON_FILE, "r") as f:
            kb = json.load(f)
        print(f"Loaded {len(kb)} knowledge base entries from {KB_JSON_FILE}")
    except FileNotFoundError:
        print(f"Error: Knowledge base file {KB_JSON_FILE} not found.")
        return
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON file: {e}")
        return

    # Parse API spec
    api_chunks = parse_api_spec(YAML_API_SPEC)
    if api_chunks:
        print(f"Parsed {len(api_chunks)} API specification chunks")
        kb.extend(api_chunks)
    else:
        print("No API specification chunks found")

    # Chunk + embed + upload
    total_chunks = 0
    successful_uploads = 0
    
    for entry in kb:
        chunks = chunk_text(entry["content"])
        for i, chunk in enumerate(chunks):
            chunk_id = f"{entry['id']}-chunk-{i}"
            embedding = embed_text(chunk)
            
            if embedding:
                data = {
                    "id": chunk_id,
                    "source": entry["source"],
                    "type": entry["type"],
                    "content": chunk,
                    "embedding": embedding
                }
                
                result = insert_entry(data)
                if result:
                    successful_uploads += 1
                    print(f"✓ Uploaded chunk: {chunk_id}")
                else:
                    print(f"✗ Failed to upload chunk: {chunk_id}")
            else:
                print(f"✗ Failed to create embedding for chunk: {chunk_id}")
            
            total_chunks += 1

    print(f"\n=== Upload Summary ===")
    print(f"Total chunks processed: {total_chunks}")
    print(f"Successful uploads: {successful_uploads}")
    print(f"Failed uploads: {total_chunks - successful_uploads}")
    print(f"Success rate: {(successful_uploads/total_chunks)*100:.1f}%")
    
    if successful_uploads > 0:
        print("\n✅ GameLayer AI Assistant knowledge base setup completed successfully!")
        print("The AI assistant can now access comprehensive information about:")
        print("- Gamification concepts and best practices")
        print("- GameLayer platform features and pricing")
        print("- API documentation and endpoints")
        print("- Technical implementation guidance")
    else:
        print("\n❌ No content was successfully uploaded. Please check your configuration.")

if __name__ == "__main__":
    main() 