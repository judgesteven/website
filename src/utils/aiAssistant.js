// Client-side AI Assistant for GameLayer
// Enhanced with conversation context, detailed domain knowledge, and follow-up question handling

const gamelayerKnowledge = {
  // Core gamification concepts with detailed explanations
  gamification: {
    mechanics: [
      "Points & Rewards - Users earn points for actions, redeem for rewards",
      "Badges & Achievements - Visual recognition for milestones and accomplishments", 
      "Leaderboards - Competitive element to drive engagement",
      "Streaks - Daily engagement through consecutive activity tracking",
      "Levels & Progression - Clear advancement path with increasing challenges",
      "Challenges & Missions - Time-limited goals to boost activity",
      "Social Features - Team challenges, sharing achievements, peer recognition"
    ],
    benefits: [
      "Increased user engagement by 40-60%",
      "Higher retention rates through habit formation",
      "Boosted customer loyalty and lifetime value",
      "Improved user satisfaction and brand affinity",
      "Data-driven insights into user behavior patterns"
    ],
    implementation: {
      phases: [
        "Phase 1: Start with points and basic achievements",
        "Phase 2: Add leaderboards and social features", 
        "Phase 3: Implement challenges and missions",
        "Phase 4: Advanced analytics and personalization"
      ],
      bestPractices: [
        "Keep it simple initially - don't overwhelm users",
        "Make rewards meaningful and achievable",
        "Use data to iterate and improve",
        "Ensure mobile-first design",
        "Test with real users before scaling"
      ]
    }
  },

  // Loyalty program strategies with detailed examples
  loyalty: {
    strategies: [
      "Tier-based rewards - Bronze, Silver, Gold with escalating benefits",
      "Points multipliers - Bonus points for premium actions",
      "Exclusive access - Early access, VIP events, special content",
      "Personalization - Tailored rewards based on user behavior",
      "Gamified challenges - Monthly/seasonal competitions",
      "Referral programs - Reward users for bringing friends"
    ],
    examples: [
      "Starbucks Rewards - Stars for purchases, free drinks, birthday rewards",
      "Sephora Beauty Insider - Points, birthday gifts, exclusive events",
      "Nike Run Club - Challenges, achievements, social sharing"
    ],
    metrics: [
      "Customer Lifetime Value (CLV)",
      "Retention rate improvements",
      "Engagement frequency",
      "Referral conversion rates",
      "Redemption rates"
    ]
  },

  // User engagement techniques with implementation details
  engagement: [
    "Daily check-ins with streak tracking",
    "Progressive challenges that increase in difficulty",
    "Social features like team competitions",
    "Personalized content and recommendations",
    "Real-time feedback and notifications",
    "Community features and user-generated content"
  ],

  // GameLayer specific features with detailed API information
  gamelayerFeatures: {
    core: [
      "Player Management - Create, update, and track user profiles",
      "Achievement System - Custom badges and milestone tracking",
      "Leaderboards - Competitive rankings and social comparison",
      "Points & Rewards - Flexible scoring and redemption system",
      "Challenges & Missions - Time-limited goals and objectives",
      "Analytics Dashboard - Real-time engagement metrics",
      "API Integration - Easy implementation with existing platforms"
    ],
    api: {
      players: {
        endpoint: "POST /players",
        description: "Create new player profiles",
        payload: "{ id, name, description, metadata }",
        response: "Player object with unique ID"
      },
      achievements: {
        endpoint: "POST /achievements", 
        description: "Award achievements to players",
        payload: "{ playerId, achievementType, metadata }",
        response: "Achievement confirmation"
      },
      leaderboards: {
        endpoint: "GET /leaderboards",
        description: "Retrieve competitive rankings",
        params: "timeframe, category, limit",
        response: "Ranked player list"
      },
      points: {
        endpoint: "POST /points",
        description: "Award or deduct points from players",
        payload: "{ playerId, points, reason, metadata }",
        response: "Updated player points"
      },
      challenges: {
        endpoint: "POST /challenges",
        description: "Create time-limited missions",
        payload: "{ title, description, duration, rewards }",
        response: "Challenge object"
      },
      events: {
        endpoint: "POST /events",
        description: "Track user actions and behaviors",
        payload: "{ playerId, eventType, data, timestamp }",
        response: "Event confirmation"
      }
    },
    integration: {
      setup: [
        "1. Create GameLayer account and get API keys",
        "2. Install SDK or use REST API",
        "3. Initialize with your app's configuration",
        "4. Start tracking user actions",
        "5. Monitor analytics and optimize"
      ],
      sdk: "Available for JavaScript, React, React Native, iOS, and Android",
      webhooks: "Real-time notifications for achievements, level-ups, and milestones"
    }
  },

  // GameLayer pricing information
  pricing: {
    starter: {
      title: "Starter",
      users: "Up to 1,000 users",
      price: "€100",
      description: "per month",
      features: [
        "Up to 1,000 active users",
        "All gamification features",
        "Unlimited elements",
        "Email support",
        "Basic analytics"
      ],
      bestFor: "Small apps and MVPs"
    },
    growth: {
      title: "Growth",
      users: "Up to 25,000 users",
      price: "€1,000",
      description: "per month",
      features: [
        "Up to 25,000 active users",
        "All gamification mechanics",
        "Unlimited elements",
        "Priority support",
        "Advanced Analytics"
      ],
      bestFor: "Growing apps with proven engagement"
    },
    scale: {
      title: "Scale",
      users: "Up to 100,000 users",
      price: "€2,500",
      description: "per month",
      features: [
        "Up to 100,000 active users",
        "All gamification mechanics",
        "Unlimited elements",
        "Advanced support",
        "Advanced reporting"
      ],
      bestFor: "Established apps with high engagement"
    },
    enterprise: {
      title: "Enterprise",
      users: "Above 100,000 users",
      price: "Contact us",
      description: "",
      features: [
        "Unlimited active users",
        "All gamification mechanics",
        "Unlimited elements",
        "Custom SLA and support",
        "Advanced reporting"
      ],
      bestFor: "Large-scale applications"
    }
  },

  // Industry use cases with detailed implementation
  useCases: {
    fitness: {
      description: "Daily workout streaks, achievement badges, social challenges, progress tracking",
      features: ["Workout tracking", "Achievement badges", "Social challenges", "Progress visualization"],
      examples: ["Nike Run Club", "Strava", "Fitbit"],
      implementation: "Track workouts, award points, create challenges, show progress"
    },
    ecommerce: {
      description: "Loyalty points, tier benefits, referral rewards, seasonal challenges",
      features: ["Loyalty program", "Tier system", "Referral rewards", "Seasonal events"],
      examples: ["Starbucks", "Sephora", "Amazon"],
      implementation: "Points for purchases, tier benefits, referral system, seasonal campaigns"
    },
    education: {
      description: "Learning progress, skill badges, study streaks, peer competitions",
      features: ["Progress tracking", "Skill badges", "Study streaks", "Peer competitions"],
      examples: ["Duolingo", "Khan Academy", "Coursera"],
      implementation: "Track learning progress, award skill badges, create study challenges"
    },
    gaming: {
      description: "Player progression, achievement systems, social features, seasonal events",
      features: ["Player progression", "Achievement system", "Social features", "Seasonal events"],
      examples: ["Mobile games", "Console games", "PC games"],
      implementation: "Level progression, achievement unlocks, social features, seasonal content"
    },
    health: {
      description: "Wellness tracking, habit formation, community support, milestone rewards",
      features: ["Wellness tracking", "Habit formation", "Community support", "Milestone rewards"],
      examples: ["Headspace", "Calm", "MyFitnessPal"],
      implementation: "Track wellness activities, form healthy habits, community challenges"
    }
  },

  // Common questions and their detailed answers
  faq: {
    "how to start": "Start with GameLayer's Starter plan (€100/month). Create an account, get API keys, and begin with basic points and achievements. Scale up as you grow!",
    "implementation time": "Basic implementation takes 1-2 days. Full gamification system: 1-2 weeks. Depends on your app's complexity and requirements.",
    "technical requirements": "REST API or SDK integration. Works with any platform: web, mobile, desktop. No special infrastructure needed.",
    "data security": "GameLayer follows GDPR and SOC 2 compliance. Data is encrypted and secure. We never share your user data.",
    "customization": "Highly customizable: custom badges, leaderboards, challenges, and branding. White-label options available.",
    "support": "Email support for Starter, priority support for Growth+, dedicated support for Enterprise. Documentation and tutorials available."
  }
};

// Conversation context to handle follow-up questions
let conversationContext = {
  lastTopic: null,
  lastQuestion: null,
  userGoals: null,
  industry: null,
  plan: null
};

function searchKnowledgeBase(query) {
  const lowerQuery = query.toLowerCase();
  
  // Check for specific topics
  if (lowerQuery.includes('gamification') || lowerQuery.includes('game mechanics')) {
    return gamelayerKnowledge.gamification;
  }
  
  if (lowerQuery.includes('loyalty') || lowerQuery.includes('retention')) {
    return gamelayerKnowledge.loyalty;
  }
  
  if (lowerQuery.includes('engagement') || lowerQuery.includes('user activity')) {
    return gamelayerKnowledge.engagement;
  }
  
  if (lowerQuery.includes('gamelayer') || lowerQuery.includes('api') || lowerQuery.includes('platform')) {
    return gamelayerKnowledge.gamelayerFeatures;
  }
  
  if (lowerQuery.includes('pricing') || lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('costs')) {
    return gamelayerKnowledge.pricing;
  }
  
  if (lowerQuery.includes('fitness') || lowerQuery.includes('workout')) {
    return { useCase: gamelayerKnowledge.useCases.fitness };
  }
  
  if (lowerQuery.includes('ecommerce') || lowerQuery.includes('shopping') || lowerQuery.includes('retail')) {
    return { useCase: gamelayerKnowledge.useCases.ecommerce };
  }
  
  if (lowerQuery.includes('education') || lowerQuery.includes('learning')) {
    return { useCase: gamelayerKnowledge.useCases.education };
  }
  
  if (lowerQuery.includes('health') || lowerQuery.includes('wellness')) {
    return { useCase: gamelayerKnowledge.useCases.health };
  }
  
  return null;
}

function detectFollowUpQuestion(message, context) {
  const lowerMessage = message.toLowerCase();
  
  // Follow-up indicators
  const followUpIndicators = [
    'what about', 'how about', 'and', 'also', 'what if', 'can you', 'tell me more',
    'explain', 'elaborate', 'details', 'specific', 'example', 'instance'
  ];
  
  // Check if this is likely a follow-up
  const isFollowUp = followUpIndicators.some(indicator => lowerMessage.includes(indicator));
  
  if (isFollowUp && context.lastTopic) {
    return true;
  }
  
  return false;
}

function generateContextualResponse(message, context) {
  const lowerMessage = message.toLowerCase();
  
  // Handle follow-up questions based on context
  if (context.lastTopic === 'pricing' && (lowerMessage.includes('starter') || lowerMessage.includes('€100'))) {
    return {
      message: "Starter plan (€100/month) is perfect for small apps and MVPs. Includes 1,000 users, all gamification features, unlimited elements, email support, and basic analytics. Great starting point! 🚀",
      type: "pricing_detail"
    };
  }
  
  if (context.lastTopic === 'pricing' && (lowerMessage.includes('growth') || lowerMessage.includes('€1,000'))) {
    return {
      message: "Growth plan (€1,000/month) is ideal for growing apps. Includes 25,000 users, all mechanics, unlimited elements, priority support, and advanced analytics. Perfect for scaling! 📈",
      type: "pricing_detail"
    };
  }
  
  if (context.lastTopic === 'api' && lowerMessage.includes('implementation')) {
    return {
      message: "Implementation takes 1-2 days for basic setup. Create account, get API keys, integrate SDK/REST API, start tracking actions. Full system: 1-2 weeks. We provide documentation and support! ⚡",
      type: "implementation"
    };
  }
  
  if (context.lastTopic === 'useCase' && context.industry) {
    const useCase = gamelayerKnowledge.useCases[context.industry];
    if (useCase && lowerMessage.includes('implement')) {
      return {
        message: `For ${context.industry}: ${useCase.implementation}. Start with basic tracking, add features gradually, use our ${useCase.features.join(', ')}. Examples: ${useCase.examples.join(', ')}! 🎯`,
        type: "implementation_detail"
      };
    }
  }
  
  return null;
}

function generateResponse(message) {
  const lowerMessage = message.toLowerCase();
  const knowledge = searchKnowledgeBase(message);
  
  // Update conversation context
  conversationContext.lastQuestion = message;
  
  // Check for follow-up questions first
  const contextualResponse = generateContextualResponse(message, conversationContext);
  if (contextualResponse) {
    return contextualResponse;
  }
  
  // Questions about GameLayer's capabilities and help
  if (lowerMessage.includes('gamelayer can help') || 
      lowerMessage.includes('gamelayer help') ||
      lowerMessage.includes('can gamelayer help') ||
      lowerMessage.includes('gamelayer api can help') ||
      lowerMessage.includes('gamelayer api help') ||
      lowerMessage.includes('can gamelayer api help')) {
    conversationContext.lastTopic = 'capabilities';
    return {
      message: "Absolutely! GameLayer can help with gamification, user engagement, loyalty programs, and retention. Our API provides points, badges, leaderboards, challenges, and analytics. What's your specific goal? 🚀",
      type: "capabilities"
    };
  }
  
  // Questions about what GameLayer can do
  if (lowerMessage.includes('what can gamelayer') || 
      lowerMessage.includes('gamelayer can do') ||
      lowerMessage.includes('gamelayer features') ||
      lowerMessage.includes('gamelayer capabilities')) {
    conversationContext.lastTopic = 'features';
    return {
      message: "GameLayer provides: Player management, achievement systems, leaderboards, points & rewards, challenges & missions, analytics dashboard, and easy API integration. Perfect for boosting engagement! 🎮",
      type: "features"
    };
  }
  
  // Questions about GameLayer's API capabilities
  if (lowerMessage.includes('gamelayer api') && 
      (lowerMessage.includes('can') || lowerMessage.includes('help') || lowerMessage.includes('do'))) {
    conversationContext.lastTopic = 'api';
    return {
      message: "GameLayer's API can: Create players, award achievements, manage leaderboards, track points, create challenges, and monitor engagement. Ready to implement gamification! 🔧",
      type: "api_capabilities"
    };
  }
  
  // Pricing questions
  if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('costs') || lowerMessage.includes('how much')) {
    conversationContext.lastTopic = 'pricing';
    return {
      message: "GameLayer pricing: Starter €100/month (1K users), Growth €1,000/month (25K users), Scale €2,500/month (100K users), Enterprise (contact us). All plans include full gamification features! 💰",
      type: "pricing"
    };
  }
  
  // Implementation questions
  if (lowerMessage.includes('implement') || lowerMessage.includes('setup') || lowerMessage.includes('start') || lowerMessage.includes('begin')) {
    conversationContext.lastTopic = 'implementation';
    return {
      message: "Implementation is straightforward: 1) Create GameLayer account, 2) Get API keys, 3) Install SDK or use REST API, 4) Start tracking user actions, 5) Monitor analytics. Takes 1-2 days for basic setup! ⚡",
      type: "implementation"
    };
  }
  
  // API-specific questions
  if (lowerMessage.includes('api') && (lowerMessage.includes('player') || lowerMessage.includes('create'))) {
    conversationContext.lastTopic = 'api';
    return {
      message: "For creating players, use POST /players with JSON payload: { id, name, description }. Need a sample request?",
      type: "api_help"
    };
  }
  
  if (lowerMessage.includes('api') && lowerMessage.includes('achievement')) {
    conversationContext.lastTopic = 'api';
    return {
      message: "Award achievements with POST /achievements. Send player ID and achievement type. Want the exact endpoint?",
      type: "api_help"
    };
  }
  
  if (lowerMessage.includes('api') && lowerMessage.includes('leaderboard')) {
    conversationContext.lastTopic = 'api';
    return {
      message: "Get leaderboards with GET /leaderboards. Can filter by time period, category, or player group.",
      type: "api_help"
    };
  }
  
  // Gamification mechanics
  if (lowerMessage.includes('retention') || lowerMessage.includes('keep users')) {
    conversationContext.lastTopic = 'retention';
    return {
      message: "Boost retention with daily streaks + XP rewards. Add badges for milestones. Gamify the routine! 💪",
      type: "strategy"
    };
  }
  
  if (lowerMessage.includes('engagement') || lowerMessage.includes('active users')) {
    conversationContext.lastTopic = 'engagement';
    return {
      message: "Drive engagement with challenges, leaderboards, and social features. Make it competitive and shareable! 🏆",
      type: "strategy"
    };
  }
  
  if (lowerMessage.includes('loyalty') || lowerMessage.includes('customer')) {
    conversationContext.lastTopic = 'loyalty';
    return {
      message: "Build loyalty with tier-based rewards, exclusive access, and personalized experiences. Points + perks = happy customers! ⭐",
      type: "strategy"
    };
  }
  
  // Use case specific
  if (lowerMessage.includes('fitness') || lowerMessage.includes('workout')) {
    conversationContext.lastTopic = 'useCase';
    conversationContext.industry = 'fitness';
    return {
      message: "Fitness apps: Daily workout streaks, achievement badges, social challenges, progress tracking. Turn sweat into wins! 💪",
      type: "use_case"
    };
  }
  
  if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shopping')) {
    conversationContext.lastTopic = 'useCase';
    conversationContext.industry = 'ecommerce';
    return {
      message: "E-commerce: Loyalty points, tier benefits, referral rewards, seasonal challenges. Shop + earn = repeat customers! 🛒",
      type: "use_case"
    };
  }
  
  if (lowerMessage.includes('education') || lowerMessage.includes('learning')) {
    conversationContext.lastTopic = 'useCase';
    conversationContext.industry = 'education';
    return {
      message: "Education: Learning progress, skill badges, study streaks, peer competitions. Make learning fun and engaging! 📚",
      type: "use_case"
    };
  }
  
  // General gamification
  if (knowledge && knowledge.mechanics) {
    conversationContext.lastTopic = 'gamification';
    const mechanics = knowledge.mechanics.slice(0, 3).join(", ");
    return {
      message: `Key gamification mechanics: ${mechanics}. Start with one, measure impact, then scale! 🎮`,
      type: "mechanics"
    };
  }
  
  if (knowledge && knowledge.strategies) {
    conversationContext.lastTopic = 'loyalty';
    const strategies = knowledge.strategies.slice(0, 2).join(" + ");
    return {
      message: `Loyalty strategy: ${strategies}. Combine for maximum impact! 🎯`,
      type: "strategy"
    };
  }
  
  if (knowledge && knowledge.useCase) {
    conversationContext.lastTopic = 'useCase';
    return {
      message: `Perfect use case: ${knowledge.useCase}. Ready to implement with GameLayer! 🚀`,
      type: "use_case"
    };
  }
  
  if (knowledge && knowledge.starter) {
    conversationContext.lastTopic = 'pricing';
    return {
      message: "GameLayer pricing: Starter €100/month (1K users), Growth €1,000/month (25K users), Scale €2,500/month (100K users), Enterprise (contact us). All plans include full gamification features! 💰",
      type: "pricing"
    };
  }
  
  // Default response for gamification focus
  return {
    message: "I'm your gamification expert! Ask me about user engagement, loyalty programs, retention strategies, GameLayer's API, or pricing. What's your goal? 🎮",
    type: "general"
  };
}

export const clientSideAI = {
  sendMessage: async (message, conversationId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const result = generateResponse(message);
    
    return {
      response: result.message,
      conversationId: conversationId || 'client-side',
      timestamp: new Date().toISOString(),
      type: result.type || 'general'
    };
  }
}; 