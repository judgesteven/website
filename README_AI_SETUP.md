# GameLayer AI Assistant Setup

This directory contains the setup for an AI assistant that can provide comprehensive information about GameLayer's gamification platform, API, and best practices.

## Overview

The AI assistant uses:
- **OpenAI** for text embeddings and AI responses
- **Supabase** for vector storage and retrieval
- **Custom knowledge base** with GameLayer-specific information
- **API documentation** in YAML format

## Files Structure

```
├── ai_assistant_setup.py          # Main setup script
├── docs/
│   └── gamelayer_api.yaml        # API specification
├── data/
│   └── gamelayer_knowledge_base.json  # Knowledge base content
├── requirements.txt               # Python dependencies
└── README_AI_SETUP.md            # This file
```

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Set up your environment variables:

```bash
export SUPABASE_URL="https://nhhbgzxwfcribhupblct.supabase.co"
export SUPABASE_KEY="your_supabase_service_role_key"
export OPENAI_API_KEY="your_openai_api_key"
```

Or create a `.env` file:

```env
SUPABASE_URL=https://nhhbgzxwfcribhupblct.supabase.co
SUPABASE_KEY=your_supabase_service_role_key
OPENAI_API_KEY=your_openai_api_key
```

### 3. Create Supabase Table

In your Supabase dashboard, create the following table:

```sql
create table gamelayer_kb (
    id text primary key,
    source text,
    type text,
    content text,
    embedding vector(1536)
);
```

### 4. Run the Setup Script

```bash
python ai_assistant_setup.py
```

## Knowledge Base Content

The knowledge base includes:

### Gamification Concepts
- Overview and definition of gamification
- Core gamification mechanics (points, badges, leaderboards, etc.)
- Benefits and use cases
- Best practices and implementation guidance
- Psychological principles behind gamification

### GameLayer Platform
- Platform features and capabilities
- Pricing tiers and plans
- Integration options and APIs
- Analytics and reporting features
- Support and service levels

### Technical Information
- API documentation and endpoints
- Security and authentication
- Implementation examples
- Troubleshooting guides

## API Specification

The `docs/gamelayer_api.yaml` file contains a comprehensive OpenAPI 3.0 specification including:

- **Authentication endpoints** (login, register)
- **User management** (CRUD operations)
- **Achievement systems** (create, update, delete)
- **Leaderboards** (creation and management)
- **Missions and challenges**
- **Analytics endpoints**
- **Security schemes**

## Usage

After setup, the AI assistant can:

1. **Answer questions** about gamification concepts
2. **Provide guidance** on GameLayer platform features
3. **Explain API endpoints** and usage
4. **Offer best practices** for implementation
5. **Help with troubleshooting** common issues

## Configuration

### Chunk Size
The `CHUNK_SIZE` variable in `ai_assistant_setup.py` controls how content is split for embeddings. Default is 1000 characters.

### Embedding Model
Uses OpenAI's `text-embedding-3-large` model for creating vector embeddings.

### Vector Dimensions
The Supabase table is configured for 1536-dimensional vectors (matching the embedding model).

## Troubleshooting

### Common Issues

1. **Missing dependencies**: Install with `pip install -r requirements.txt`
2. **API key errors**: Verify your OpenAI and Supabase credentials
3. **Table not found**: Create the `gamelayer_kb` table in Supabase
4. **Rate limiting**: The script includes error handling for API limits

### Error Messages

- `FileNotFoundError`: Check that all required files exist
- `JSONDecodeError`: Verify the knowledge base JSON is valid
- `SupabaseError`: Check your Supabase credentials and table structure
- `OpenAIError`: Verify your OpenAI API key and quota

## Security Notes

- Store API keys securely using environment variables
- Use service role keys for Supabase (not anon keys)
- Regularly rotate API keys
- Monitor API usage and costs

## Support

For issues with the AI assistant setup:
- Check the troubleshooting section above
- Verify all dependencies are installed
- Ensure Supabase table exists and has correct schema
- Contact: steve@gamelayer.co

## License

This setup is proprietary to GameLayer Oy. All rights reserved. 