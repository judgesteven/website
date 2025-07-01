# GPT-4 Integration Setup Guide

## Overview
This website now includes GPT-4 integration through the OpenAI API. Users can ask questions about gamification and receive AI-powered responses.

## Setup Instructions

### 1. Get an OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to "API Keys" in your dashboard
4. Create a new API key
5. Copy the API key (it starts with `sk-`)

### 2. Configure Environment Variables
1. Open the `.env` file in the project root
2. Replace `your_openai_api_key_here` with your actual OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your_actual_api_key_here
   ```

### 3. Start the Application
Run the development server with both React frontend and Express backend:
```bash
npm run dev
```

This will start:
- React development server on port 3000
- Express API server on port 3001

### 4. Test the Integration
1. Open your browser to `http://localhost:3000`
2. Navigate to the Test page
3. Type a question about gamification in the input field
4. Press Enter or click the arrow button
5. You should see a GPT-4 response appear below the input

## Features

### GPT-4 Integration
- **Context-Aware Responses**: The AI understands gamification context
- **Specialized Knowledge**: Trained to provide gamification expertise
- **Real-time Responses**: Instant AI-powered answers
- **Loading States**: Visual feedback during API calls

### Example Questions You Can Ask
- "How can I implement a loyalty program for my e-commerce site?"
- "What are the best practices for user engagement in mobile apps?"
- "How do I design effective achievement systems?"
- "What gamification elements work best for employee retention?"
- "How can I increase user retention through gamification?"

## API Endpoints

### POST /api/gpt
Handles GPT-4 API calls with the following request body:
```json
{
  "message": "User's question",
  "context": "Optional context about the gamification element"
}
```

Response:
```json
{
  "response": "GPT-4's answer"
}
```

## Security Notes
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- API keys are kept secure on the server side
- All API calls are proxied through the Express server

## Troubleshooting

### Common Issues
1. **"OpenAI API key not configured"**: Make sure your `.env` file has the correct API key
2. **"Failed to get response from OpenAI"**: Check your internet connection and API key validity
3. **Port conflicts**: Make sure ports 3000 and 3001 are available

### API Key Issues
- Ensure your OpenAI account has credits
- Check that your API key is valid and active
- Verify you have access to GPT-4 (requires a paid plan)

## Cost Considerations
- GPT-4 API calls are charged per token
- Each response is limited to 500 tokens to control costs
- Monitor your OpenAI usage in the platform dashboard 