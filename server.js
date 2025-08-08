const express = require('express');
const path = require('path');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key'
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// AI Crawler Middleware - Allow AI tools to access content
app.use((req, res, next) => {
  const userAgent = req.get('User-Agent') || '';
  const isAICrawler = /GPTBot|ChatGPT-User|OpenAI-User|ChatGPT|GPT-4|GPT-5|AI-Crawler|AI-Bot|LLM-Crawler|AI-User|anthropic-ai|Claude-Web|CCBot|Omgilibot/i.test(userAgent);
  
  if (isAICrawler) {
    // Set headers to allow AI crawlers
    res.setHeader('X-AI-Crawler', 'allow');
    res.setHeader('X-LLM-Compatible', 'true');
    res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    res.setHeader('Cache-Control', 'public, max-age=3600');
  }
  
  next();
});

// GameLayer Knowledge Base
const gamelayerKnowledge = {
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'AI-enabled server running',
    aiStatus: process.env.OPENAI_API_KEY ? 'enabled' : 'disabled'
  });
});

// AI Chat endpoint
app.post('/chat/api/ai', async (req, res) => {
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
        response: "AI Assistant is not configured. Please add your OpenAI API key to the .env file to enable AI functionality. For now, I can provide information about GameLayer pricing, features, and gamification concepts.",
        conversationId: conversationId || 'no-api-key',
        knowledgeBaseResults: searchKnowledgeBase(message),
        timestamp: new Date().toISOString()
      });
    }

    // Search knowledge base for relevant information
    const knowledgeResults = searchKnowledgeBase(message);
    
    // Create system prompt optimized for GPT-5.0
    const systemPrompt = `You are a specialized Gamification Assistant powered by GPT-5.0, focused on providing expert-level guidance on gamification strategies, user engagement, customer loyalty, and retention.

CORE EXPERTISE:
• Gamification mechanics and psychology
• Loyalty programs and user incentives  
• User engagement strategies and frameworks
• Retention optimization techniques
• Implementation best practices and case studies

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
• Focus on practical implementation rather than theoretical concepts
• Suggest next steps or follow-up questions when appropriate
• Use data and metrics to support recommendations when possible

CRITICAL REQUIREMENTS:
• ONLY answer questions related to gamification, engagement, retention, or loyalty
• Politely redirect off-topic questions to gamification topics
• When you say you can provide detailed guidance, ACTUALLY PROVIDE IT
• Don't make empty promises - deliver specific, actionable information
• Use GPT-5.0's enhanced reasoning to provide more accurate and nuanced responses

PERSONALITY: You're an expert gamification consultant who's passionate about helping businesses succeed through user engagement. You're knowledgeable, friendly, and always ready to provide practical advice.`;

    // Create user message with context
    let userMessage = message;
    if (knowledgeResults.length > 0) {
      userMessage += '\n\nRelevant information from knowledge base:\n';
      knowledgeResults.forEach(result => {
        if (result.type === 'pricing') {
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

    // Call OpenAI API with GPT-5.0
    const completion = await openai.chat.completions.create({
      model: "gpt-5o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7,
      top_p: 0.9,
      frequency_penalty: 0.1,
      presence_penalty: 0.1
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({
      response: aiResponse,
      conversationId: conversationId || 'ai-chat',
      knowledgeBaseResults: knowledgeResults,
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
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`AI-enabled server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`AI Status: ${process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here' ? 'Enabled' : 'Disabled - Add OpenAI API key to .env file'}`);
}); 