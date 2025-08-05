const { getEnhancedResponse } = require('../server/knowledge_base');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get enhanced response with knowledge base context
    const gptResponse = await getEnhancedResponse(message);

    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error calling enhanced GPT-4o-mini:', error);
    
    // Provide fallback response on any error
    const fallbackResponse = 'I\'m a GameLayer gamification expert! I can help you with GameLayer\'s platform, API, or gamification strategies. **What would you like to know about GameLayer\'s gamification solutions?**';
    
    res.json({ 
      response: fallbackResponse,
      note: 'Using fallback response due to API error. Please try again later.'
    });
  }
}; 