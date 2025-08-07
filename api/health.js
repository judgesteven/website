export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const hasOpenAIKey = process.env.OPENAI_API_KEY && 
                      process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' &&
                      process.env.OPENAI_API_KEY.length > 0;

  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Vercel API server running',
    aiStatus: hasOpenAIKey ? 'enabled' : 'disabled',
    environment: process.env.NODE_ENV || 'development',
    hasOpenAIKey: hasOpenAIKey
  });
} 