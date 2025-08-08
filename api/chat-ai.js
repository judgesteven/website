export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationId } = req.body;
    
    if (!message || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required'
      });
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      return res.json({
        response: "AI Assistant is not configured. Please add your OpenAI API key to the environment variables to enable AI functionality. For now, I can provide information about GameLayer pricing, features, and gamification concepts.",
        conversationId: conversationId || 'no-api-key',
        timestamp: new Date().toISOString()
      });
    }

    // For now, return a simple response to test the endpoint
    res.json({
      response: "AI Assistant is working! This is a test response from the new API endpoint.",
      conversationId: conversationId || 'test-chat',
      timestamp: new Date().toISOString(),
      endpoint: '/api/chat-ai'
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    
    res.json({
      response: "I'm having trouble connecting to the AI service right now. However, I can help you with GameLayer information. What would you like to know about our pricing, features, or gamification strategies?",
      conversationId: req.body.conversationId || 'error',
      timestamp: new Date().toISOString()
    });
  }
} 