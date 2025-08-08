export default function handler(req, res) {
  // Enable CORS for AI crawlers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, User-Agent');
  
  // AI crawler specific headers
  res.setHeader('X-AI-Crawler', 'allow');
  res.setHeader('X-LLM-Compatible', 'true');
  res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const userAgent = req.headers['user-agent'] || '';
  const isAICrawler = /GPTBot|ChatGPT-User|OpenAI-User|ChatGPT|GPT-4|GPT-5|AI-Crawler|AI-Bot|LLM-Crawler|AI-User|anthropic-ai|Claude-Web|CCBot|Omgilibot/i.test(userAgent);

  res.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    endpoint: '/api/ai-crawler-test',
    userAgent: userAgent,
    isAICrawler: isAICrawler,
    message: isAICrawler ? 'AI crawler detected - access granted' : 'Standard request',
    headers: {
      'X-AI-Crawler': 'allow',
      'X-LLM-Compatible': 'true',
      'X-Robots-Tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    }
  });
}
