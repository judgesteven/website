const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function setupDatabase() {
  console.log('🚀 Setting up GameLayer AI Assistant database...\n');

  try {
    // Step 1: Enable vector extension
    console.log('1. Enabling vector extension...');
    const { error: extError } = await supabase.rpc('exec_sql', {
      sql: 'CREATE EXTENSION IF NOT EXISTS vector;'
    });
    
    if (extError) {
      console.log('⚠️  Vector extension setup (this might already exist):', extError.message);
    } else {
      console.log('✅ Vector extension enabled');
    }

    // Step 2: Create the table
    console.log('\n2. Creating gamelayer_kb table...');
    const { error: tableError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS gamelayer_kb (
          id TEXT PRIMARY KEY,
          source TEXT,
          type TEXT,
          content TEXT,
          embedding VECTOR(1536)
        );
      `
    });
    
    if (tableError) {
      console.log('⚠️  Table creation (this might already exist):', tableError.message);
    } else {
      console.log('✅ gamelayer_kb table created');
    }

    // Step 3: Create the search function
    console.log('\n3. Creating similarity search function...');
    const { error: funcError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE OR REPLACE FUNCTION match_documents(
          query_embedding VECTOR(1536),
          match_threshold FLOAT DEFAULT 0.7,
          match_count INT DEFAULT 5
        )
        RETURNS TABLE (
          id TEXT,
          source TEXT,
          type TEXT,
          content TEXT,
          similarity FLOAT
        )
        LANGUAGE plpgsql
        AS $$
        BEGIN
          RETURN QUERY
          SELECT
            gamelayer_kb.id,
            gamelayer_kb.source,
            gamelayer_kb.type,
            gamelayer_kb.content,
            1 - (gamelayer_kb.embedding <=> query_embedding) AS similarity
          FROM gamelayer_kb
          WHERE 1 - (gamelayer_kb.embedding <=> query_embedding) > match_threshold
          ORDER BY gamelayer_kb.embedding <=> query_embedding
          LIMIT match_count;
        END;
        $$;
      `
    });
    
    if (funcError) {
      console.log('⚠️  Function creation (this might already exist):', funcError.message);
    } else {
      console.log('✅ match_documents function created');
    }

    // Step 4: Create index
    console.log('\n4. Creating performance index...');
    const { error: indexError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE INDEX IF NOT EXISTS gamelayer_kb_embedding_idx 
        ON gamelayer_kb USING ivfflat (embedding vector_cosine_ops) 
        WITH (lists = 100);
      `
    });
    
    if (indexError) {
      console.log('⚠️  Index creation (this might already exist):', indexError.message);
    } else {
      console.log('✅ Performance index created');
    }

    console.log('\n🎉 Database setup completed!');
    console.log('\n📋 Next steps:');
    console.log('1. Run the Python setup script: python3 ai_assistant_setup.py');
    console.log('2. Start your server: npm start');
    console.log('3. Test the AI assistant on your website');

  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.log('\n🔧 Alternative: Use the Supabase dashboard manually');
    console.log('1. Go to: https://supabase.com/dashboard');
    console.log('2. Select your project');
    console.log('3. Go to SQL Editor');
    console.log('4. Run the commands from supabase_setup.sql');
  }
}

// Run the setup
setupDatabase(); 