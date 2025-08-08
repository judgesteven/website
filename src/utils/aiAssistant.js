// Client-side AI Assistant for GameLayer
// Focused on gamification, user engagement, customer loyalty, and GameLayer platform

const gamelayerKnowledge = {
  // Core gamification concepts
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
    ]
  },

  // Loyalty program strategies
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
    ]
  },

  // User engagement techniques
  engagement: [
    "Daily check-ins with streak tracking",
    "Progressive challenges that increase in difficulty",
    "Social features like team competitions",
    "Personalized content and recommendations",
    "Real-time feedback and notifications",
    "Community features and user-generated content"
  ],

  // GameLayer specific features
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
      players: "POST /players - Create new player profiles",
      achievements: "POST /achievements - Award achievements to players", 
      leaderboards: "GET /leaderboards - Retrieve competitive rankings",
      points: "POST /points - Award or deduct points from players",
      challenges: "POST /challenges - Create time-limited missions",
      events: "POST /events - Track user actions and behaviors"
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
      ]
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
      ]
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
      ]
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
      ]
    }
  },

  // Industry use cases
  useCases: {
    fitness: "Daily workout streaks, achievement badges, social challenges, progress tracking",
    ecommerce: "Loyalty points, tier benefits, referral rewards, seasonal challenges",
    education: "Learning progress, skill badges, study streaks, peer competitions",
    gaming: "Player progression, achievement systems, social features, seasonal events",
    health: "Wellness tracking, habit formation, community support, milestone rewards"
  }
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

function generateResponse(message) {
  const lowerMessage = message.toLowerCase();
  const knowledge = searchKnowledgeBase(message);
  
  // Questions about GameLayer's capabilities and help
  if (lowerMessage.includes('gamelayer can help') || 
      lowerMessage.includes('gamelayer help') ||
      lowerMessage.includes('can gamelayer help') ||
      lowerMessage.includes('gamelayer api can help') ||
      lowerMessage.includes('gamelayer api help') ||
      lowerMessage.includes('can gamelayer api help')) {
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
    return {
      message: "GameLayer provides: Player management, achievement systems, leaderboards, points & rewards, challenges & missions, analytics dashboard, and easy API integration. Perfect for boosting engagement! 🎮",
      type: "features"
    };
  }
  
  // Questions about GameLayer's API capabilities
  if (lowerMessage.includes('gamelayer api') && 
      (lowerMessage.includes('can') || lowerMessage.includes('help') || lowerMessage.includes('do'))) {
    return {
      message: "GameLayer's API can: Create players, award achievements, manage leaderboards, track points, create challenges, and monitor engagement. Ready to implement gamification! 🔧",
      type: "api_capabilities"
    };
  }
  
  // Pricing questions
  if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('costs') || lowerMessage.includes('how much')) {
    return {
      message: "GameLayer pricing: Starter €100/month (1K users), Growth €1,000/month (25K users), Scale €2,500/month (100K users), Enterprise (contact us). All plans include full gamification features! 💰",
      type: "pricing"
    };
  }
  
  // API-specific questions
  if (lowerMessage.includes('api') && (lowerMessage.includes('player') || lowerMessage.includes('create'))) {
    return {
      message: "For creating players, use POST /players with JSON payload: { id, name, description }. Need a sample request?",
      type: "api_help"
    };
  }
  
  if (lowerMessage.includes('api') && lowerMessage.includes('achievement')) {
    return {
      message: "Award achievements with POST /achievements. Send player ID and achievement type. Want the exact endpoint?",
      type: "api_help"
    };
  }
  
  if (lowerMessage.includes('api') && lowerMessage.includes('leaderboard')) {
    return {
      message: "Get leaderboards with GET /leaderboards. Can filter by time period, category, or player group.",
      type: "api_help"
    };
  }
  
  // Gamification mechanics
  if (lowerMessage.includes('retention') || lowerMessage.includes('keep users')) {
    return {
      message: "Boost retention with daily streaks + XP rewards. Add badges for milestones. Gamify the routine! 💪",
      type: "strategy"
    };
  }
  
  if (lowerMessage.includes('engagement') || lowerMessage.includes('active users')) {
    return {
      message: "Drive engagement with challenges, leaderboards, and social features. Make it competitive and shareable! 🏆",
      type: "strategy"
    };
  }
  
  if (lowerMessage.includes('loyalty') || lowerMessage.includes('customer')) {
    return {
      message: "Build loyalty with tier-based rewards, exclusive access, and personalized experiences. Points + perks = happy customers! ⭐",
      type: "strategy"
    };
  }
  
  // Use case specific
  if (lowerMessage.includes('fitness') || lowerMessage.includes('workout')) {
    return {
      message: "Fitness apps: Daily workout streaks, achievement badges, social challenges, progress tracking. Turn sweat into wins! 💪",
      type: "use_case"
    };
  }
  
  if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shopping')) {
    return {
      message: "E-commerce: Loyalty points, tier benefits, referral rewards, seasonal challenges. Shop + earn = repeat customers! 🛒",
      type: "use_case"
    };
  }
  
  // General gamification
  if (knowledge && knowledge.mechanics) {
    const mechanics = knowledge.mechanics.slice(0, 3).join(", ");
    return {
      message: `Key gamification mechanics: ${mechanics}. Start with one, measure impact, then scale! 🎮`,
      type: "mechanics"
    };
  }
  
  if (knowledge && knowledge.strategies) {
    const strategies = knowledge.strategies.slice(0, 2).join(" + ");
    return {
      message: `Loyalty strategy: ${strategies}. Combine for maximum impact! 🎯`,
      type: "strategy"
    };
  }
  
  if (knowledge && knowledge.useCase) {
    return {
      message: `Perfect use case: ${knowledge.useCase}. Ready to implement with GameLayer! 🚀`,
      type: "use_case"
    };
  }
  
  if (knowledge && knowledge.starter) {
    return {
      message: "GameLayer pricing: Starter €100/month (1K users), Growth €1,000/month (25K users), Scale €2,500/month (100K users), Enterprise (contact us). All plans include full gamification features! 💰",
      type: "pricing"
    };
  }
  
  // Default response for gamification focus
  return {
    message: "I'm your gamification expert! Ask me about user engagement, loyalty programs, retention strategies, or GameLayer's API. What's your goal? 🎮",
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