export default function handler(req, res) {
  // Enable CORS for AI crawlers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, User-Agent');
  
  // AI crawler specific headers - Updated for comprehensive AI tool support
  res.setHeader('X-AI-Crawler', 'allow');
  res.setHeader('X-LLM-Compatible', 'true');
  res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const hasOpenAIKey = process.env.OPENAI_API_KEY && 
                      process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' &&
                      process.env.OPENAI_API_KEY.length > 0;

  const userAgent = req.headers['user-agent'] || '';
  const isAICrawler = /GPTBot|ChatGPT-User|OpenAI-User|ChatGPT|GPT-4|GPT-5|AI-Crawler|AI-Bot|LLM-Crawler|AI-User|anthropic-ai|Claude-Web|CCBot|Omgilibot/i.test(userAgent);

  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Vercel API server running with AI crawler support',
    aiStatus: hasOpenAIKey ? 'enabled' : 'disabled',
    environment: process.env.NODE_ENV || 'development',
    hasOpenAIKey: hasOpenAIKey,
    aiCrawlerTest: {
      userAgent: userAgent,
      isAICrawler: isAICrawler,
      message: isAICrawler ? 'AI crawler detected - access granted' : 'Standard request',
      headers: {
        'X-AI-Crawler': 'allow',
        'X-LLM-Compatible': 'true',
        'X-Robots-Tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      }
    }
  });
} 