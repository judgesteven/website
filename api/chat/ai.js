import OpenAI from 'openai';

// GameLayer Knowledge Base
const gamelayerKnowledge = {
  overview: {
    name: 'GameLayer',
    description: 'GameLayer is a comprehensive gamification platform that enables businesses to implement sophisticated engagement systems quickly and efficiently.',
    what: 'GameLayer is a powerful gamification platform that helps businesses boost user engagement, customer loyalty, and employee retention through game-like mechanics.',
    purpose: 'Transform your business with gamification - increase user engagement by 40-60%, improve retention by 25-40%, and build stronger customer relationships.',
    keyBenefits: [
      'Increase user engagement by 40-60%',
      'Improve customer retention by 25-40%',
      'Boost customer lifetime value',
      'Enhance employee satisfaction and productivity',
      'Provide rich behavioral insights',
      'Scale from startups to enterprise'
    ],
    targetUsers: [
      'E-commerce businesses seeking customer loyalty',
      'Mobile apps wanting user engagement',
      'Fitness and wellness platforms',
      'Educational applications',
      'Employee engagement programs',
      'Gaming and entertainment platforms'
    ]
  },
  pricing: {
    starter: {
      title: 'Starter',
      users: 'Up to 1,000 users',
      price: '€100',
      description: 'per month',
      features: [
        'Up to 1,000 active users',
        'All gamification features',
        'Unlimited elements',
        'Email support',
        'Basic analytics'
      ]
    },
    growth: {
      title: 'Growth',
      users: 'Up to 25,000 users',
      price: '€1,000',
      description: 'per month',
      features: [
        'Up to 25,000 active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Priority support',
        'Basic Analytics'
      ]
    },
    scale: {
      title: 'Scale',
      users: 'Up to 100,000 users',
      price: '€2,500',
      description: 'per month',
      features: [
        'Up to 100,000 active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Advanced support',
        'Advanced reporting'
      ]
    },
    enterprise: {
      title: 'Enterprise',
      users: 'Above 100,000 users',
      price: 'Contact us',
      description: '',
      features: [
        'Unlimited active users',
        'All gamification mechanics',
        'Unlimited elements',
        'Custom SLA and support',
        'Advanced reporting'
      ]
    }
  },
  features: [
    'Points and Rewards System',
    'Leaderboards and Rankings',
    'Achievements and Badges',
    'Missions and Challenges',
    'Streaks and Daily Goals',
    'Mystery Boxes and Surprises',
    'Team Competitions',
    'Real-time Analytics',
    'API Integration',
    'Custom Branding'
  ],
  caseStudies: [
    {
      title: 'Veikkaus Points',
      description: 'Finnish National Lottery loyalty experience with challenges and rewards',
      category: 'Gaming & Lottery'
    },
    {
      title: 'Reima GO!',
      description: 'Kids learning adventure with collaborative physical activity',
      category: 'Kids & Education'
    },
    {
      title: 'Finnair',
      description: 'Airline loyalty program with personalized non-transactional tasks',
      category: 'Travel & Aviation'
    },
    {
      title: 'Baaz',
      description: 'Social platform gamification with content creation challenges',
      category: 'Social Media'
    }
  ],
  apiEndpoints: [
    '/auth/login - User authentication',
    '/auth/register - User registration',
    '/users - User management',
    '/points - Points and rewards',
    '/leaderboards - Leaderboard management',
    '/achievements - Achievement system',
    '/missions - Mission and challenge creation',
    '/analytics - Performance analytics'
  ]
};

// Gamification Knowledge Base
const gamificationKnowledge = {
  concepts: {
    'user engagement': 'Techniques to increase user interaction and participation through gamification mechanics like points, badges, and challenges.',
    'customer loyalty': 'Strategies to build long-term customer relationships through reward systems, personalized experiences, and exclusive benefits.',
    'employee retention': 'Workplace gamification approaches to improve job satisfaction, productivity, and employee retention through recognition and achievement systems.',
    'gamification mechanics': 'Core elements like points, badges, leaderboards, challenges, and rewards that drive engagement.',
    'behavioral psychology': 'Understanding user motivation through autonomy, mastery, and purpose in gamification design.'
  },
  bestPractices: [
    'Start with clear objectives and user goals',
    'Design for intrinsic motivation, not just extrinsic rewards',
    'Provide immediate feedback and progress indicators',
    'Create meaningful challenges that match user skill levels',
    'Include social elements for community building',
    'Ensure transparency in reward systems',
    'Test and iterate based on user behavior data',
    'Balance competition with collaboration',
    'Maintain long-term engagement through evolving content',
    'Measure success through engagement metrics and business outcomes'
  ]
};

// Function to search knowledge base
function searchKnowledgeBase(query) {
  const results = [];
  const lowerQuery = query.toLowerCase();
  
  // Search for GameLayer overview queries
  if (lowerQuery.includes('what is gamelayer') || 
      lowerQuery.includes('what is game layer') ||
      lowerQuery.includes('gamelayer') ||
      lowerQuery.includes('game layer') ||
      lowerQuery.includes('what is') && lowerQuery.includes('gamelayer')) {
    results.push({
      type: 'overview',
      data: gamelayerKnowledge.overview
    });
  }
  
  // Search pricing information
  Object.keys(gamelayerKnowledge.pricing).forEach(tier => {
    const plan = gamelayerKnowledge.pricing[tier];
    if (lowerQuery.includes(tier) || lowerQuery.includes(plan.title.toLowerCase()) || 
        lowerQuery.includes('pricing') || lowerQuery.includes('price') || lowerQuery.includes('cost')) {
      results.push({
        type: 'pricing',
        tier: tier,
        data: plan
      });
    }
  });
  
  // Search features
  gamelayerKnowledge.features.forEach(feature => {
    if (lowerQuery.includes(feature.toLowerCase())) {
      results.push({
        type: 'feature',
        data: feature
      });
    }
  });
  
  // Search case studies
  gamelayerKnowledge.caseStudies.forEach(study => {
    if (lowerQuery.includes(study.title.toLowerCase()) || 
        lowerQuery.includes(study.category.toLowerCase())) {
      results.push({
        type: 'caseStudy',
        data: study
      });
    }
  });
  
  // Search gamification concepts
  Object.keys(gamificationKnowledge.concepts).forEach(concept => {
    if (lowerQuery.includes(concept)) {
      results.push({
        type: 'concept',
        concept: concept,
        data: gamificationKnowledge.concepts[concept]
      });
    }
  });
  
  return results;
}

// Enhanced web search function using multiple sources
async function searchWeb(query) {
  try {
    let searchResults = [];
    
    // Search using DuckDuckGo Instant Answer API
    try {
      const duckDuckGoUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
      const ddgResponse = await fetch(duckDuckGoUrl);
      const ddgData = await ddgResponse.json();
      
      if (ddgData.Abstract) {
        searchResults.push({
          title: ddgData.Heading || 'Search Result',
          content: ddgData.Abstract,
          url: ddgData.AbstractURL || '',
          source: 'DuckDuckGo'
        });
      }
      
      // Add related topics
      if (ddgData.RelatedTopics && ddgData.RelatedTopics.length > 0) {
        ddgData.RelatedTopics.slice(0, 2).forEach(topic => {
          if (topic.Text) {
            searchResults.push({
              title: topic.Text.split(' - ')[0] || 'Related Topic',
              content: topic.Text,
              url: topic.FirstURL || '',
              source: 'DuckDuckGo'
            });
          }
        });
      }
    } catch (error) {
      console.error('DuckDuckGo search error:', error);
    }
    
    // Search using Wikipedia API for additional context
    try {
      const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query.replace(/\s+/g, '_'))}`;
      const wikiResponse = await fetch(wikiUrl);
      const wikiData = await wikiResponse.json();
      
      if (wikiData.extract) {
        searchResults.push({
          title: wikiData.title || 'Wikipedia Result',
          content: wikiData.extract,
          url: wikiData.content_urls?.desktop?.page || '',
          source: 'Wikipedia'
        });
      }
    } catch (error) {
      console.error('Wikipedia search error:', error);
    }
    
    // Search for GameLayer-specific information
    if (query.toLowerCase().includes('gamelayer') || query.toLowerCase().includes('game layer')) {
      try {
        const gamelayerSearchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent('GameLayer gamification platform')}&format=json&no_html=1&skip_disambig=1`;
        const glResponse = await fetch(gamelayerSearchUrl);
        const glData = await glResponse.json();
        
        if (glData.Abstract) {
          searchResults.push({
            title: 'GameLayer Platform Information',
            content: glData.Abstract,
            url: glData.AbstractURL || '',
            source: 'GameLayer Search'
          });
        }
      } catch (error) {
        console.error('GameLayer search error:', error);
      }
    }
    
    return searchResults;
  } catch (error) {
    console.error('Web search error:', error);
    return [];
  }
}

// Enhanced search function that combines local knowledge and web search
async function enhancedSearch(query) {
  const results = {
    local: searchKnowledgeBase(query),
    web: await searchWeb(query)
  };
  
  return results;
}

export default async function handler(req, res) {
  // Enable CORS for Vercel
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
        knowledgeBaseResults: searchKnowledgeBase(message),
        timestamp: new Date().toISOString()
      });
    }

    // Initialize OpenAI
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    // Search knowledge base and web for relevant information
    const searchResults = await enhancedSearch(message);
    const knowledgeResults = searchResults.local;
    const webResults = searchResults.web;
    
    // Create system prompt with restricted scope and enhanced personality
    const systemPrompt = `You are a specialized Gamification Assistant focused on:

1. **Gamification Topics**: user engagement, customer loyalty, employee retention, and related strategies
2. **GameLayer Platform**: pricing, features, API documentation, case studies, and implementation guidance

You should ONLY answer questions related to these topics. If asked about other subjects, politely redirect to gamification or GameLayer topics.

IMPORTANT GUIDELINES:
- Keep responses conversational, helpful, and engaging
- Use bullet points when listing features or benefits
- Format responses in readable chunks with proper spacing
- Use line breaks to separate different sections
- Maximum 4-5 sentences for most answers
- Be specific and actionable in your advice
- Reference GameLayer features and capabilities when relevant
- Show enthusiasm for gamification and its benefits
- Use plain text only (no markdown formatting)
- If web search results are available, incorporate them into your response
- Always cite sources when using web search results
- Combine local knowledge with web search results for comprehensive answers

FORMATTING RULES:
- Use bullet points (•) for lists
- Add line breaks between sections
- Keep paragraphs short and readable
- Use clear headings when appropriate
- When citing web sources, mention the source briefly

PERSONALITY: You're an expert gamification consultant who's passionate about helping businesses succeed through user engagement. You're knowledgeable, friendly, and always ready to provide practical advice. You have access to both local knowledge and real-time web search results to provide the most up-to-date information.`;

    // Create user message with enhanced context
    let userMessage = message;
    
    // Add local knowledge base results
    if (knowledgeResults.length > 0) {
      userMessage += '\n\nRelevant information from knowledge base:\n';
      knowledgeResults.forEach(result => {
        if (result.type === 'overview') {
          userMessage += `- GameLayer Overview: ${result.data.what}\n`;
          userMessage += `- Purpose: ${result.data.purpose}\n`;
          userMessage += `- Key Benefits: ${result.data.keyBenefits.join(', ')}\n`;
        } else if (result.type === 'pricing') {
          userMessage += `- ${result.data.title} plan: ${result.data.price} ${result.data.description} for ${result.data.users}\n`;
        } else if (result.type === 'feature') {
          userMessage += `- Feature: ${result.data}\n`;
        } else if (result.type === 'caseStudy') {
          userMessage += `- Case Study: ${result.data.title} (${result.data.category})\n`;
        } else if (result.type === 'concept') {
          userMessage += `- ${result.concept}: ${result.data}\n`;
        }
      });
    }
    
    // Add web search results
    if (webResults.length > 0) {
      userMessage += '\n\nRecent web search results:\n';
      webResults.forEach(result => {
        userMessage += `- ${result.title}: ${result.content}\n`;
        if (result.url) {
          userMessage += `  Source: ${result.url}\n`;
        }
      });
    }

    // Call OpenAI API with enhanced parameters
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 200,
      temperature: 0.8,
      presence_penalty: 0.1,
      frequency_penalty: 0.1
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({
      response: aiResponse,
      conversationId: conversationId || 'ai-chat',
      knowledgeBaseResults: knowledgeResults,
      webSearchResults: webResults,
      searchSources: webResults.map(result => result.source),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Chat Error:', error);
    
    // Fallback response
    const fallbackResponse = "I'm having trouble connecting to the AI service right now. However, I can help you with GameLayer information. What would you like to know about our pricing, features, or gamification strategies?";
    
    res.json({
      response: fallbackResponse,
      conversationId: req.body.conversationId || 'error',
      knowledgeBaseResults: searchKnowledgeBase(req.body.message || ''),
      timestamp: new Date().toISOString()
    });
  }
}; 