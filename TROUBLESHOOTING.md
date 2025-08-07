# GameLayer Website Troubleshooting Guide

## Current Status: AI Functionality Enabled

**Note**: AI assistant functionality is now enabled with restricted scope focused on gamification topics and GameLayer platform questions.

## Server Status

✅ **AI-Enabled Server**: Running on port 3001  
✅ **React Frontend**: Available on port 3000  
✅ **Health Check**: Available at `/api/health`  
✅ **AI Assistant**: Enabled with restricted scope  

## Quick Start

1. **Start the server**:
   ```bash
   npm run server
   ```

2. **Start the React app** (in another terminal):
   ```bash
   npm start
   ```

3. **Or run both together**:
   ```bash
   npm run dev
   ```

## Health Check

Test if the server is running:
```bash
curl http://localhost:3001/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-08-07T04:32:00.667Z",
  "message": "Static file server running"
}
```

## Chat Endpoint

The AI chat endpoint is now active and responds to gamification and GameLayer questions:
```bash
curl -X POST http://localhost:3001/chat/api/ai \
  -H "Content-Type: application/json" \
  -d '{"message": "What are GameLayer pricing plans?"}'
```

Expected response:
```json
{
  "response": "GameLayer offers four pricing tiers...",
  "conversationId": "ai-chat",
  "knowledgeBaseResults": [...],
  "timestamp": "2025-08-07T04:32:04.552Z"
}
```

## UI Features

The website UI is fully functional and includes:
- ✅ Landing page with GameLayer information
- ✅ Features and pricing sections
- ✅ API documentation
- ✅ Contact forms
- ✅ AI Chat interface (fully functional)

## AI Implementation

The AI assistant is now active and includes:
- GameLayer pricing and plan information
- API documentation and code examples
- Gamification strategy guidance
- Implementation best practices
- User engagement, customer loyalty, and employee retention topics

## Contact Support

For immediate assistance with GameLayer:
- Email: steve@gamelayer.co
- Website: https://gamelayer.co

## Common Issues

### Port Already in Use
If you get "EADDRINUSE" errors:
```bash
# Kill existing processes
pkill -f "node server.js"
pkill -f "react-scripts"

# Then restart
npm run dev
```

### React App Won't Start
If the React app fails to start:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Server Won't Start
If the server fails to start:
```bash
# Check if port 3001 is available
lsof -i :3001

# Kill any processes using the port
kill -9 <PID>

# Restart server
npm run server
``` 