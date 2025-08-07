# Vercel Deployment Guide for GameLayer AI Assistant

## Overview
This guide explains how to deploy the GameLayer website with AI assistant functionality to Vercel.

## Prerequisites
- Vercel account
- OpenAI API key
- GitHub repository with the code

## Setup Steps

### 1. Environment Variables
In your Vercel project settings, add these environment variables:

```
OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 2. Build Configuration
The project is configured to work with Vercel's serverless functions:

- **Static Build**: React app builds to `/build` directory
- **API Functions**: Serverless functions in `/api` directory
- **Routing**: Vercel handles both static files and API routes

### 3. Deployment
1. Connect your GitHub repository to Vercel
2. Set the build command: `npm run build`
3. Set the output directory: `build`
4. Deploy

## API Endpoints

### AI Chat Endpoint
- **URL**: `/api/chat/ai`
- **Method**: POST
- **Body**: 
  ```json
  {
    "message": "Your question here",
    "conversationId": "unique-id"
  }
  ```

### Health Check
- **URL**: `/api/health`
- **Method**: GET

## Troubleshooting

### AI Assistant Not Working
1. **Check Environment Variables**: Ensure `OPENAI_API_KEY` is set in Vercel
2. **Check API Routes**: Verify `/api/chat/ai` is accessible
3. **Check CORS**: API routes include CORS headers for cross-origin requests

### Common Issues
- **"AI Assistant is not configured"**: Missing or invalid OpenAI API key
- **"Method not allowed"**: Using GET instead of POST for chat endpoint
- **CORS errors**: API routes include proper CORS headers

## Local Development vs Production

### Local Development
- Uses `/chat/api/ai` endpoint (proxied to local server)
- Server runs on port 3001
- React app runs on port 3000

### Production (Vercel)
- Uses `/api/chat/ai` endpoint (serverless function)
- Static files served from `/build`
- API functions run on Vercel's serverless platform

## Testing
After deployment, test the AI assistant at:
- Home page: `https://your-domain.vercel.app/#/`
- Chat page: `https://your-domain.vercel.app/#/chat`

## Support
For issues with the AI assistant functionality, check:
1. Vercel function logs
2. Browser console for errors
3. Network tab for API request failures 