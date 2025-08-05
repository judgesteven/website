-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create the gamelayer_kb table if it doesn't exist
CREATE TABLE IF NOT EXISTS gamelayer_kb (
    id TEXT PRIMARY KEY,
    source TEXT,
    type TEXT,
    content TEXT,
    embedding VECTOR(1536)
);

-- Create a function for similarity search
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

-- Create an index for better performance
CREATE INDEX IF NOT EXISTS gamelayer_kb_embedding_idx ON gamelayer_kb USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100); 