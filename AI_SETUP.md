# AI Assistant Setup Guide

## Current Status: ✅ AI Assistant Enabled

The AI assistant is now fully functional with a restricted scope focused on gamification topics and GameLayer platform questions.

## Features

### ✅ What the AI Assistant Can Answer:
- **Gamification Topics**: user engagement, customer loyalty, employee retention
- **GameLayer Platform**: pricing, features, API documentation, case studies
- **Implementation Guidance**: best practices, strategies, examples

### ❌ What the AI Assistant Will NOT Answer:
- General questions outside gamification scope
- Technical questions unrelated to GameLayer
- Questions about other platforms or services

## Setup Instructions

### 1. Basic Setup (No API Key Required)
The AI assistant works immediately with knowledge base responses:
```bash
npm install
npm run dev
```

### 2. Full AI Setup (With OpenAI API Key)
For enhanced AI responses, add your OpenAI API key:

1. **Get an OpenAI API Key**:
   - Visit: https://platform.openai.com/account/api-keys
   - Create a new API key

2. **Configure the Environment**:
   ```bash
   # Edit the .env file
   OPENAI_API_KEY=your_actual_api_key_here
   ```

3. **Restart the Server**:
   ```bash
   npm run server
   ```

## Testing the AI Assistant

### Health Check
```bash
curl http://localhost:3001/api/health
```

### Test AI Chat
```bash
curl -X POST http://localhost:3001/chat/api/ai \
  -H "Content-Type: application/json" \
  -d '{"message": "What are GameLayer pricing plans?"}'
```

### Example Questions to Try:
- "How can gamification improve customer loyalty?"
- "What are GameLayer's pricing plans?"
- "How do I implement employee retention with gamification?"
- "Tell me about GameLayer case studies"
- "What gamification features does GameLayer offer?"

## Knowledge Base

The AI assistant has access to:
- **GameLayer Pricing**: All four tiers (Starter, Growth, Scale, Enterprise)
- **Features**: Points, leaderboards, achievements, missions, etc.
- **Case Studies**: Veikkaus, Reima GO!, Finnair, Baaz, Dubbz
- **Gamification Concepts**: User engagement, customer loyalty, employee retention
- **Best Practices**: Implementation strategies and guidelines

## Troubleshooting

### AI Not Responding
1. Check if the server is running: `curl http://localhost:3001/api/health`
2. Verify your OpenAI API key in the `.env` file
3. Check server logs for errors

### Knowledge Base Not Working
The knowledge base search works independently of the OpenAI API. If you're not getting relevant results, try rephrasing your question.

### Performance Issues
- The AI uses GPT-4o-mini for fast responses
- Knowledge base searches are performed locally
- Responses are limited to 500 tokens for quick interactions

## Contact Support

For issues with the AI assistant:
- Email: steve@gamelayer.co
- Website: https://gamelayer.co 