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
      category: 'Gaming & Lottery',
      details: 'Implemented points system, daily challenges, and reward redemption. Increased user engagement by 45% and retention by 30%.'
    },
    {
      title: 'Reima GO!',
      description: 'Kids learning adventure with collaborative physical activity',
      category: 'Kids & Education',
      details: 'Created team-based challenges, achievement badges, and progress tracking. Boosted daily active users by 60% and learning completion rates by 40%.'
    },
    {
      title: 'Finnair',
      description: 'Airline loyalty program with personalized non-transactional tasks',
      category: 'Travel & Aviation',
      details: 'Developed personalized missions, tier-based rewards, and social features. Improved customer loyalty scores by 35% and repeat bookings by 25%.'
    },
    {
      title: 'Baaz',
      description: 'Social platform gamification with content creation challenges',
      category: 'Social Media',
      details: 'Implemented content creation challenges, community leaderboards, and creator rewards. Increased content creation by 50% and user engagement by 40%.'
    }
  ],
  useCases: {
    ecommerce: {
      title: 'E-commerce & Retail',
      description: 'Boost customer loyalty and repeat purchases',
      implementation: [
        'Loyalty points for purchases and actions',
        'Tier-based reward systems (Bronze, Silver, Gold)',
        'Referral programs with bonus rewards',
        'Seasonal challenges and limited-time events',
        'Personalized recommendations based on behavior',
        'Social sharing and community features'
      ],
      benefits: [
        'Increase customer lifetime value by 30-50%',
        'Boost repeat purchase rates by 25-40%',
        'Improve customer retention by 35%',
        'Increase average order value by 20%'
      ],
      examples: ['Starbucks Rewards', 'Sephora Beauty Insider', 'Amazon Prime']
    },
    fitness: {
      title: 'Fitness & Wellness',
      description: 'Drive user engagement and habit formation',
      implementation: [
        'Workout tracking and progress visualization',
        'Achievement badges for milestones',
        'Social challenges and team competitions',
        'Streak tracking for consistency',
        'Progress sharing and community support',
        'Personalized workout recommendations'
      ],
      benefits: [
        'Increase workout consistency by 40-60%',
        'Improve user retention by 50%',
        'Boost social engagement by 70%',
        'Increase premium subscriptions by 30%'
      ],
      examples: ['Nike Run Club', 'Strava', 'Fitbit', 'MyFitnessPal']
    },
    education: {
      title: 'Education & Learning',
      description: 'Make learning engaging and addictive',
      implementation: [
        'Progress tracking and skill badges',
        'Study streaks and consistency rewards',
        'Peer competitions and leaderboards',
        'Achievement system for milestones',
        'Personalized learning paths',
        'Community challenges and group study'
      ],
      benefits: [
        'Increase study time by 45%',
        'Improve course completion rates by 60%',
        'Boost knowledge retention by 35%',
        'Increase user satisfaction by 50%'
      ],
      examples: ['Duolingo', 'Khan Academy', 'Coursera', 'Codecademy']
    },
    employee: {
      title: 'Employee Engagement',
      description: 'Improve workplace satisfaction and productivity',
      implementation: [
        'Performance tracking and recognition',
        'Team challenges and competitions',
        'Skill development and certification badges',
        'Peer recognition and social features',
        'Wellness challenges and health tracking',
        'Career progression and level systems'
      ],
      benefits: [
        'Increase employee satisfaction by 40%',
        'Improve productivity by 25%',
        'Reduce turnover by 30%',
        'Boost team collaboration by 50%'
      ],
      examples: ['Microsoft Viva', 'Slack integrations', 'HR platforms']
    }
  },
  implementation: {
    phases: [
      {
        phase: 'Phase 1: Foundation',
        duration: '1-2 weeks',
        features: ['Basic points system', 'Simple achievements', 'User profiles', 'Basic analytics'],
        description: 'Start with core gamification elements to establish user engagement patterns.'
      },
      {
        phase: 'Phase 2: Social Features',
        duration: '2-3 weeks',
        features: ['Leaderboards', 'Social sharing', 'Community features', 'Team challenges'],
        description: 'Add social elements to increase engagement and create community.'
      },
      {
        phase: 'Phase 3: Advanced Mechanics',
        duration: '3-4 weeks',
        features: ['Complex challenges', 'Personalization', 'Advanced analytics', 'A/B testing'],
        description: 'Implement sophisticated mechanics and optimization features.'
      },
      {
        phase: 'Phase 4: Optimization',
        duration: 'Ongoing',
        features: ['Performance optimization', 'Advanced reporting', 'Custom integrations', 'White-label options'],
        description: 'Continuously optimize based on user behavior and business goals.'
      }
    ],
    bestPractices: [
      'Start simple - don\'t overwhelm users initially',
      'Make rewards meaningful and achievable',
      'Use data to iterate and improve continuously',
      'Ensure mobile-first design and accessibility',
      'Test with real users before scaling',
      'Align with business objectives and user goals',
      'Maintain balance between fun and functionality',
      'Provide clear progression paths',
      'Include social elements for community building',
      'Measure success through engagement metrics'
    ]
  },
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
  
  // Search pricing information - enhanced to catch more variations
  const pricingKeywords = [
    'pricing', 'price', 'cost', 'how much', 'costs', 'prices', 'fee', 'fees',
    'subscription', 'plan', 'plans', 'tier', 'tiers', 'starter', 'growth', 'scale', 'enterprise'
  ];
  
  const hasPricingQuery = pricingKeywords.some(keyword => lowerQuery.includes(keyword));
  
  if (hasPricingQuery || lowerQuery.includes('how much') || lowerQuery.includes('cost')) {
    // Return all pricing plans for comprehensive pricing questions
    Object.keys(gamelayerKnowledge.pricing).forEach(tier => {
      const plan = gamelayerKnowledge.pricing[tier];
      results.push({
        type: 'pricing',
        tier: tier,
        data: plan
      });
    });
  } else {
    // Check for specific plan mentions
    Object.keys(gamelayerKnowledge.pricing).forEach(tier => {
      const plan = gamelayerKnowledge.pricing[tier];
      if (lowerQuery.includes(tier) || lowerQuery.includes(plan.title.toLowerCase())) {
        results.push({
          type: 'pricing',
          tier: tier,
          data: plan
        });
      }
    });
  }
  
  // Search features
  gamelayerKnowledge.features.forEach(feature => {
    if (lowerQuery.includes(feature.toLowerCase())) {
      results.push({
        type: 'feature',
        data: feature
      });
    }
  });
  
  // Search case studies with enhanced details
  gamelayerKnowledge.caseStudies.forEach(study => {
    if (lowerQuery.includes(study.title.toLowerCase()) || 
        lowerQuery.includes(study.category.toLowerCase()) ||
        lowerQuery.includes('case study') || lowerQuery.includes('case studies')) {
      results.push({
        type: 'caseStudy',
        data: study
      });
    }
  });
  
  // Search use cases
  Object.keys(gamelayerKnowledge.useCases).forEach(useCaseKey => {
    const useCase = gamelayerKnowledge.useCases[useCaseKey];
    if (lowerQuery.includes(useCase.title.toLowerCase()) ||
        lowerQuery.includes(useCaseKey) ||
        lowerQuery.includes('use case') || lowerQuery.includes('use cases') ||
        lowerQuery.includes('implementation') || lowerQuery.includes('examples')) {
      results.push({
        type: 'useCase',
        key: useCaseKey,
        data: useCase
      });
    }
  });
  
  // Search implementation guidance
  if (lowerQuery.includes('implementation') || lowerQuery.includes('phases') || 
      lowerQuery.includes('best practices') || lowerQuery.includes('how to implement')) {
    results.push({
      type: 'implementation',
      data: gamelayerKnowledge.implementation
    });
  }
  
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
    
    // Enhanced context building for GPT-5.0
    let contextMessage = `User Query: ${message}\n\n`;
    
    // Add conversation context if available
    if (req.body.conversationHistory && req.body.conversationHistory.length > 0) {
      const recentHistory = req.body.conversationHistory.slice(-3); // Last 3 messages
      contextMessage += `Recent conversation context:\n`;
      recentHistory.forEach(msg => {
        contextMessage += `${msg.role}: ${msg.content}\n`;
      });
      contextMessage += '\n';
    }
    
    // Add local knowledge base results with enhanced structure
    if (knowledgeResults.length > 0) {
      contextMessage += 'Relevant knowledge base information:\n';
      knowledgeResults.forEach(result => {
        if (result.type === 'overview') {
          contextMessage += `• GameLayer Overview: ${result.data.what}\n`;
          contextMessage += `• Purpose: ${result.data.purpose}\n`;
          contextMessage += `• Key Benefits: ${result.data.keyBenefits.join(', ')}\n`;
        } else if (result.type === 'pricing') {
          contextMessage += `• ${result.data.title} plan: ${result.data.price} ${result.data.description} for ${result.data.users}\n`;
          contextMessage += `  Features: ${result.data.features.join(', ')}\n`;
        } else if (result.type === 'feature') {
          contextMessage += `• Feature: ${result.data}\n`;
        } else if (result.type === 'caseStudy') {
          contextMessage += `• Case Study: ${result.data.title} (${result.data.category}) - ${result.data.details || result.data.description}\n`;
        } else if (result.type === 'useCase') {
          contextMessage += `• Use Case: ${result.data.title}\n`;
          contextMessage += `  Description: ${result.data.description}\n`;
          contextMessage += `  Implementation: ${result.data.implementation.join(', ')}\n`;
          contextMessage += `  Benefits: ${result.data.benefits.join(', ')}\n`;
          contextMessage += `  Examples: ${result.data.examples.join(', ')}\n`;
        } else if (result.type === 'implementation') {
          contextMessage += `• Implementation Phases:\n`;
          result.data.phases.forEach(phase => {
            contextMessage += `  Phase ${phase.phase}: ${phase.duration}\n`;
            contextMessage += `    Features: ${phase.features.join(', ')}\n`;
            contextMessage += `    Description: ${phase.description}\n`;
          });
          contextMessage += `• Best Practices: ${result.data.bestPractices.join(', ')}\n`;
        }
      });
      contextMessage += '\n';
    }
    
    // Add web search results with enhanced formatting
    if (webResults.length > 0) {
      contextMessage += 'Recent web search results:\n';
      webResults.forEach((result, index) => {
        contextMessage += `• ${result.title}: ${result.content}\n`;
        if (result.url) {
          contextMessage += `  Source: ${result.url}\n`;
        }
        if (index < webResults.length - 1) contextMessage += '\n';
      });
      contextMessage += '\n';
    }

    // Create system prompt optimized for GPT-5.0 capabilities
    const systemPrompt = `You are a specialized Gamification Assistant powered by GPT-5.0, focused on providing expert-level guidance on gamification strategies, user engagement, customer loyalty, and retention.

CORE EXPERTISE:
• Gamification mechanics and psychology
• Loyalty programs and user incentives  
• User engagement strategies and frameworks
• Retention optimization techniques
• Implementation best practices and case studies

TARGET AUDIENCE:
• Product Managers - strategic use cases and feature ideas
• Marketing Managers - engagement and loyalty opportunities  
• Developers - implementation guidance and best practices

CONVERSATION STYLE:
• Short, punchy, and actionable responses
• Friendly and helpful tone (Slack-savvy sidekick, not corporate chatbot)
• Jargon-light unless speaking to developers
• Conversational and engaging
• Maximum 4-5 sentences for most answers
• Use bullet points (•) for lists and key points
• Add line breaks between sections for readability

RESPONSE GUIDELINES:
• Be specific and actionable - provide concrete advice, not just general statements
• Reference real-world examples and case studies when relevant
• Incorporate web search results when available (cite sources briefly)
• Focus on practical implementation rather than theoretical concepts
• Suggest next steps or follow-up questions when appropriate
• Use data and metrics to support recommendations when possible

FORMATTING RULES:
• Use bullet points (•) for lists
• Add line breaks between sections
• Keep paragraphs short and readable
• Use clear headings when appropriate
• When citing sources, mention briefly: "According to [source]..."

CRITICAL REQUIREMENTS:
• ONLY answer questions related to gamification, engagement, retention, or loyalty
• Politely redirect off-topic questions to gamification topics
• When you say you can provide detailed guidance, ACTUALLY PROVIDE IT
• Don't make empty promises - deliver specific, actionable information
• Use GPT-5.0's enhanced reasoning to provide more accurate and nuanced responses

PERSONALITY: You're an expert gamification consultant who's passionate about helping businesses succeed through user engagement. You're knowledgeable, friendly, and always ready to provide practical advice. You leverage GPT-5.0's advanced capabilities to deliver the most accurate, helpful, and actionable guidance possible.`;

    // Create user message with enhanced context
    const userMessage = contextMessage;

    // Call OpenAI API with enhanced parameters for GPT-5.0
    const completion = await openai.chat.completions.create({
      model: "gpt-5o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user", 
          content: userMessage
        }
      ],
      max_tokens: 2000,
      temperature: 0.7,
      top_p: 0.9,
      frequency_penalty: 0.1,
      presence_penalty: 0.1,
      response_format: { type: "text" }
    });

    // Enhanced response processing for GPT-5.0
    let aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble processing your request right now. Please try again.';
    
    // Post-process response for better formatting
    aiResponse = aiResponse.trim();
    
    // Ensure response follows our formatting guidelines
    if (!aiResponse.includes('•') && (aiResponse.includes('features') || aiResponse.includes('benefits') || aiResponse.includes('steps'))) {
      // Convert dashes to bullet points if needed
      aiResponse = aiResponse.replace(/^- /gm, '• ');
    }
    
    // Add follow-up suggestions for better engagement
    const followUpSuggestions = [
      "Would you like me to elaborate on any of these points?",
      "What specific aspect would you like to explore further?",
      "How can I help you implement this in your project?",
      "Would you like to see some real-world examples?"
    ];
    
    // Only add follow-up if response is substantial and doesn't already have one
    if (aiResponse.length > 200 && !aiResponse.includes('Would you like') && !aiResponse.includes('What specific')) {
      const randomSuggestion = followUpSuggestions[Math.floor(Math.random() * followUpSuggestions.length)];
      aiResponse += `\n\n${randomSuggestion}`;
    }

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