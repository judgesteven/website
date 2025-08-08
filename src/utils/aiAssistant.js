// Enhanced AI Assistant for GameLayer - ChatGPT-like experience
// Expert-level knowledge on gamification, user engagement, loyalty, retention, and GameLayer platform

const gamelayerKnowledge = {
  // Comprehensive gamification knowledge
  gamification: {
    core: {
      definition: "Gamification is the strategic application of game-design elements and principles in non-game contexts to engage users and drive desired behaviors.",
      psychology: "Leverages human psychology: achievement, competition, collaboration, and progression to drive engagement and behavior change.",
      elements: [
        "Points & Rewards - Tangible recognition for actions",
        "Badges & Achievements - Visual milestones and accomplishments",
        "Leaderboards - Competitive social comparison",
        "Streaks - Daily engagement through habit formation",
        "Levels & Progression - Clear advancement paths",
        "Challenges & Missions - Time-limited goals",
        "Social Features - Community and peer interaction"
      ]
    },
    benefits: {
      engagement: "40-60% increase in user engagement",
      retention: "25-40% improvement in user retention",
      loyalty: "Significant boost in customer lifetime value",
      satisfaction: "Higher user satisfaction and brand affinity",
      data: "Rich behavioral insights for optimization"
    },
    implementation: {
      phases: [
        "Phase 1: Foundation - Points, basic achievements, simple rewards",
        "Phase 2: Social - Leaderboards, sharing, community features",
        "Phase 3: Advanced - Challenges, missions, personalization",
        "Phase 4: Optimization - Analytics, A/B testing, refinement"
      ],
      bestPractices: [
        "Start simple - don't overwhelm users initially",
        "Make rewards meaningful and achievable",
        "Use data to iterate and improve continuously",
        "Ensure mobile-first design and accessibility",
        "Test with real users before scaling",
        "Align with business objectives and user goals",
        "Maintain balance between fun and functionality"
      ],
      metrics: [
        "Daily/Monthly Active Users (DAU/MAU)",
        "Engagement Rate and Session Duration",
        "Retention Rate (1-day, 7-day, 30-day)",
        "Completion Rate for challenges/missions",
        "Social Sharing and Referral Rates",
        "Revenue per User (RPU) and Lifetime Value (LTV)"
      ]
    }
  },

  // Detailed loyalty program strategies
  loyalty: {
    strategies: [
      "Tier-based rewards - Bronze, Silver, Gold with escalating benefits and exclusivity",
      "Points multipliers - Bonus points for premium actions and high-value behaviors",
      "Exclusive access - Early access, VIP events, special content, beta features",
      "Personalization - Tailored rewards based on user behavior and preferences",
      "Gamified challenges - Monthly/seasonal competitions with leaderboards",
      "Referral programs - Reward users for bringing friends and expanding the community"
    ],
    examples: {
      starbucks: "Starbucks Rewards - Stars for purchases, free drinks, birthday rewards, exclusive member events",
      sephora: "Sephora Beauty Insider - Points, birthday gifts, exclusive events, early access to sales",
      nike: "Nike Run Club - Challenges, achievements, social sharing, community challenges"
    },
    metrics: [
      "Customer Lifetime Value (CLV) and Average Order Value (AOV)",
      "Retention rate improvements and churn reduction",
      "Engagement frequency and participation rates",
      "Referral conversion rates and viral coefficient",
      "Redemption rates and reward utilization",
      "Member satisfaction and Net Promoter Score (NPS)"
    ]
  },

  // User engagement techniques
  engagement: {
    techniques: [
      "Daily check-ins with streak tracking and milestone celebrations",
      "Progressive challenges that increase in difficulty and complexity",
      "Social features like team competitions and collaborative goals",
      "Personalized content and recommendations based on user behavior",
      "Real-time feedback and notifications for immediate gratification",
      "Community features and user-generated content sharing"
    ],
    psychology: "Leverages FOMO (Fear of Missing Out), social proof, and immediate feedback loops to drive consistent engagement."
  },

  // Comprehensive GameLayer platform knowledge
  gamelayer: {
    overview: "GameLayer is a comprehensive gamification platform that enables businesses to implement sophisticated engagement systems quickly and efficiently.",
    features: {
      core: [
        "Player Management - Create, update, and track user profiles with rich metadata",
        "Achievement System - Custom badges and milestone tracking with flexible criteria",
        "Leaderboards - Competitive rankings and social comparison with multiple timeframes",
        "Points & Rewards - Flexible scoring and redemption system with custom rules",
        "Challenges & Missions - Time-limited goals and objectives with progress tracking",
        "Analytics Dashboard - Real-time engagement metrics and behavioral insights",
        "API Integration - Easy implementation with existing platforms and workflows"
      ],
      advanced: [
        "White-label Solutions - Custom branding and theming options",
        "Multi-platform Support - Web, mobile, desktop, and IoT integration",
        "Real-time Notifications - Instant feedback and engagement triggers",
        "A/B Testing Framework - Optimize gamification elements",
        "Advanced Analytics - Deep behavioral insights and predictive modeling"
      ]
    },
    api: {
      endpoints: {
        players: {
          create: "POST /players - Create new player profiles",
          update: "PUT /players/{id} - Update player information",
          get: "GET /players/{id} - Retrieve player details",
          list: "GET /players - List players with filtering"
        },
        achievements: {
          award: "POST /achievements - Award achievements to players",
          list: "GET /achievements - List available achievements",
          player: "GET /players/{id}/achievements - Get player achievements"
        },
        leaderboards: {
          get: "GET /leaderboards - Retrieve competitive rankings",
          create: "POST /leaderboards - Create custom leaderboards",
          update: "PUT /leaderboards/{id} - Update leaderboard settings"
        },
        points: {
          award: "POST /points - Award or deduct points from players",
          balance: "GET /players/{id}/points - Get player point balance",
          history: "GET /players/{id}/points/history - Get point transaction history"
        },
        challenges: {
          create: "POST /challenges - Create time-limited missions",
          list: "GET /challenges - List available challenges",
          join: "POST /challenges/{id}/join - Join a challenge",
          progress: "GET /challenges/{id}/progress - Get challenge progress"
        },
        events: {
          track: "POST /events - Track user actions and behaviors",
          analytics: "GET /events/analytics - Get event analytics and insights"
        }
      },
      integration: {
        setup: [
          "1. Create GameLayer account and obtain API keys",
          "2. Install SDK or configure REST API client",
          "3. Initialize with your app's configuration and settings",
          "4. Start tracking user actions and behaviors",
          "5. Monitor analytics and optimize based on insights"
        ],
        sdks: "Available for JavaScript, React, React Native, iOS, Android, Python, Node.js",
        webhooks: "Real-time notifications for achievements, level-ups, milestones, and custom events"
      }
    },
    pricing: {
      starter: {
        title: "Starter",
        users: "Up to 1,000 users",
        price: "€100",
        period: "per month",
        features: [
          "Up to 1,000 active users",
          "All core gamification features",
          "Unlimited elements and components",
          "Email support with 24-hour response",
          "Basic analytics and reporting",
          "API access and SDK integration"
        ],
        bestFor: "Small apps, MVPs, and startups testing gamification"
      },
      growth: {
        title: "Growth",
        users: "Up to 25,000 users",
        price: "€1,000",
        period: "per month",
        features: [
          "Up to 25,000 active users",
          "All gamification mechanics and features",
          "Unlimited elements and advanced customization",
          "Priority support with 8-hour response",
          "Advanced analytics and behavioral insights",
          "A/B testing framework and optimization tools"
        ],
        bestFor: "Growing apps with proven engagement and scaling needs"
      },
      scale: {
        title: "Scale",
        users: "Up to 100,000 users",
        price: "€2,500",
        period: "per month",
        features: [
          "Up to 100,000 active users",
          "All gamification mechanics and advanced features",
          "Unlimited elements and enterprise customization",
          "Advanced support with 4-hour response",
          "Advanced reporting and predictive analytics",
          "White-label solutions and custom branding"
        ],
        bestFor: "Established apps with high engagement and enterprise needs"
      },
      enterprise: {
        title: "Enterprise",
        users: "Above 100,000 users",
        price: "Contact us",
        period: "",
        features: [
          "Unlimited active users",
          "All gamification mechanics and enterprise features",
          "Unlimited elements and full customization",
          "Custom SLA and dedicated support",
          "Advanced reporting and custom analytics",
          "On-premise deployment options available"
        ],
        bestFor: "Large-scale applications requiring enterprise-grade solutions"
      }
    }
  },

  // Industry-specific use cases
  useCases: {
    fitness: {
      description: "Transform fitness apps with gamified workout tracking, achievement systems, and social challenges",
      features: ["Workout tracking and progress visualization", "Achievement badges for milestones", "Social challenges and team competitions", "Progress sharing and community support"],
      examples: ["Nike Run Club", "Strava", "Fitbit", "MyFitnessPal"],
      implementation: "Track workouts, award points for consistency, create challenges, show progress, enable social sharing"
    },
    ecommerce: {
      description: "Boost customer loyalty and repeat purchases with sophisticated reward systems",
      features: ["Loyalty program with tier system", "Points for purchases and actions", "Referral rewards and social sharing", "Seasonal events and limited-time offers"],
      examples: ["Starbucks", "Sephora", "Amazon", "Target"],
      implementation: "Points for purchases, tier benefits, referral system, seasonal campaigns, exclusive access"
    },
    education: {
      description: "Make learning engaging and addictive with gamified educational experiences",
      features: ["Progress tracking and skill badges", "Study streaks and consistency rewards", "Peer competitions and leaderboards", "Achievement system for milestones"],
      examples: ["Duolingo", "Khan Academy", "Coursera", "Codecademy"],
      implementation: "Track learning progress, award skill badges, create study challenges, enable peer competition"
    },
    gaming: {
      description: "Enhance gaming experiences with sophisticated progression and social systems",
      features: ["Player progression and level systems", "Achievement system with unlocks", "Social features and team play", "Seasonal events and limited content"],
      examples: ["Mobile games", "Console games", "PC games", "Social games"],
      implementation: "Level progression, achievement unlocks, social features, seasonal content, community challenges"
    },
    health: {
      description: "Promote healthy habits and wellness through gamified tracking and community support",
      features: ["Wellness tracking and habit formation", "Community support and challenges", "Milestone rewards and celebrations", "Progress visualization"],
      examples: ["Headspace", "Calm", "MyFitnessPal", "Noom"],
      implementation: "Track wellness activities, form healthy habits, community challenges, milestone rewards"
    }
  },

  // Common questions and expert answers
  faq: {
    "how to start": "Start with GameLayer's Starter plan (€100/month) - perfect for testing gamification. Create an account, get API keys, implement basic points and achievements, then scale based on user engagement and business growth.",
    "implementation time": "Basic implementation takes 1-2 days for simple setup. Full gamification system: 1-2 weeks. Enterprise deployment: 2-4 weeks. Timeline depends on complexity, existing infrastructure, and customization requirements.",
    "technical requirements": "REST API or SDK integration. Works with any platform: web, mobile, desktop, IoT. No special infrastructure needed - cloud-based solution with 99.9% uptime SLA.",
    "data security": "GameLayer follows GDPR, SOC 2, and ISO 27001 compliance. Data is encrypted in transit and at rest. We never share your user data and provide data export capabilities.",
    "customization": "Highly customizable: custom badges, leaderboards, challenges, branding, and white-label options. API-first approach allows full integration with existing systems.",
    "support": "Email support for Starter, priority support for Growth+, dedicated support for Enterprise. Comprehensive documentation, tutorials, and community forums available."
  }
};

// Conversation context for intelligent follow-up handling
let conversationContext = {
  lastTopic: null,
  lastQuestion: null,
  userGoals: null,
  industry: null,
  plan: null,
  conversationHistory: [],
  userType: null
};

function generateExpertResponse(message) {
  const lowerMessage = message.toLowerCase();
  conversationContext.lastQuestion = message;
  conversationContext.conversationHistory.push(message);

  // Handle follow-up questions based on context
  const contextualResponse = generateContextualResponse(message, conversationContext);
  if (contextualResponse) {
    return contextualResponse;
  }

  // Enhanced expert-level responses for different topics
  if (lowerMessage.includes('what is gamelayer') || lowerMessage.includes('what is game layer') || 
      (lowerMessage.includes('what is') && lowerMessage.includes('gamelayer'))) {
    conversationContext.lastTopic = 'overview';
    return {
      message: "GameLayer is a comprehensive gamification platform that helps businesses boost user engagement, customer loyalty, and employee retention through game-like mechanics.\n\nKey Benefits:\n• Increase user engagement by 40-60%\n• Improve customer retention by 25-40%\n• Boost customer lifetime value\n• Provide rich behavioral insights\n\nPerfect for e-commerce, mobile apps, fitness platforms, educational apps, and employee engagement programs.\n\nI can also search the web for the latest information about GameLayer and gamification trends. What specific aspect would you like to explore?",
      type: "overview"
    };
  }

  if (lowerMessage.includes('gamelayer') && (lowerMessage.includes('help') || lowerMessage.includes('can') || lowerMessage.includes('do'))) {
    conversationContext.lastTopic = 'capabilities';
    return {
      message: "GameLayer is a comprehensive gamification platform that can transform your user engagement strategy.\n\nWe provide everything from basic points and achievements to sophisticated loyalty programs, social features, and advanced analytics.\n\nOur API-first approach makes integration seamless, and our platform scales from startups to enterprise.\n\nWhat specific aspect of gamification are you looking to implement? I can provide detailed guidance on gamification strategies, implementation best practices, and user engagement techniques.",
      type: "capabilities"
    };
  }

  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || 
      lowerMessage.includes('price') || lowerMessage.includes('costs') || lowerMessage.includes('fee')) {
    conversationContext.lastTopic = 'pricing';
    return {
      message: "GameLayer offers flexible pricing designed to scale with your business.\n\nPricing Plans:\n\n• Starter Plan: €100/month\n  - Up to 1,000 active users\n  - All gamification features\n  - Unlimited elements\n  - Email support\n  - Basic analytics\n\n• Growth Plan: €1,000/month\n  - Up to 25,000 active users\n  - All gamification mechanics\n  - Unlimited elements\n  - Priority support\n  - Advanced analytics\n\n• Scale Plan: €2,500/month\n  - Up to 100,000 active users\n  - All gamification mechanics\n  - Unlimited elements\n  - Advanced support\n  - Advanced reporting\n\n• Enterprise Plan: Custom pricing\n  - Unlimited active users\n  - All gamification mechanics\n  - Unlimited elements\n  - Custom SLA and support\n  - Advanced reporting\n\nAll plans include full gamification features, API access, and support. Which plan aligns with your current user base and growth projections?",
      type: "pricing"
    };
  }

  if (lowerMessage.includes('implement') || lowerMessage.includes('setup') || lowerMessage.includes('start')) {
    conversationContext.lastTopic = 'implementation';
    return {
      message: "Implementation with GameLayer is straightforward and developer-friendly.\n\nStart by creating an account and obtaining your API keys.\n\nOur SDKs are available for JavaScript, React, React Native, iOS, and Android, or you can use our REST API.\n\nBasic integration takes 1-2 days: create account, get API keys, initialize SDK, start tracking user actions.\n\nFull gamification system: 1-2 weeks.\n\nWe provide comprehensive documentation, code examples, and support throughout the process.\n\nWhat's your current tech stack? I can provide specific implementation guidance.",
      type: "implementation"
    };
  }

  if (lowerMessage.includes('gamification') && lowerMessage.includes('what')) {
    conversationContext.lastTopic = 'gamification';
    return {
      message: "Gamification is the strategic application of game-design elements in non-game contexts to engage users and drive desired behaviors.\n\nIt leverages human psychology - our natural desire for achievement, competition, collaboration, and progression.\n\nKey elements include:\n• Points, badges, and leaderboards\n• Streaks, levels, and challenges\n• Social features and community interaction\n\nThe goal is to make everyday activities more engaging and rewarding, leading to increased user engagement (40-60% improvement), higher retention rates (25-40% boost), and improved customer loyalty.\n\nWhat specific aspect of gamification would you like to explore?",
      type: "gamification"
    };
  }

  if (lowerMessage.includes('retention') || lowerMessage.includes('keep users')) {
    conversationContext.lastTopic = 'retention';
    return {
      message: "User retention is one of the biggest challenges in digital products, and gamification is a proven solution. Effective retention strategies include daily streaks to build habits, achievement systems to provide progress feedback, social features to create community, and personalized challenges to maintain interest. GameLayer's platform provides tools for all these strategies, with analytics to measure their effectiveness. The key is creating a progression system that feels meaningful and rewarding. What's your current retention rate and what specific retention challenges are you facing?",
      type: "retention"
    };
  }

  if (lowerMessage.includes('engagement') || lowerMessage.includes('active users')) {
    conversationContext.lastTopic = 'engagement';
    return {
      message: "User engagement is about creating meaningful interactions that keep users coming back. Gamification drives engagement through immediate feedback (points, badges), social competition (leaderboards), progress visualization (levels, streaks), and community features. GameLayer's platform provides all these tools with real-time analytics to measure engagement metrics like DAU/MAU, session duration, and feature adoption. The key is understanding your users' motivations and designing experiences that align with their goals. What's your current engagement strategy and what metrics are you trying to improve?",
      type: "engagement"
    };
  }

  if (lowerMessage.includes('loyalty') || lowerMessage.includes('customer')) {
    conversationContext.lastTopic = 'loyalty';
    return {
      message: "Customer loyalty programs are essential for long-term business success, and gamification makes them more engaging and effective. Modern loyalty programs go beyond simple points - they create emotional connections through tier systems, exclusive access, personalized rewards, and community features. GameLayer's platform supports sophisticated loyalty strategies with flexible reward systems, social features, and advanced analytics. Successful programs like Starbucks Rewards and Sephora Beauty Insider show how gamification can drive repeat purchases and increase customer lifetime value. What type of loyalty program are you considering?",
      type: "loyalty"
    };
  }

  if (lowerMessage.includes('use case') || lowerMessage.includes('use cases') || lowerMessage.includes('examples')) {
    conversationContext.lastTopic = 'useCases';
    return {
      message: "Here are detailed use cases for GameLayer gamification:\n\nE-commerce & Retail:\n• Loyalty points for purchases and actions\n• Tier-based reward systems (Bronze, Silver, Gold)\n• Referral programs with bonus rewards\n• Seasonal challenges and limited-time events\n• Benefits: Increase customer lifetime value by 30-50%\n\nFitness & Wellness:\n• Workout tracking and progress visualization\n• Achievement badges for milestones\n• Social challenges and team competitions\n• Streak tracking for consistency\n• Benefits: Increase workout consistency by 40-60%\n\nEducation & Learning:\n• Progress tracking and skill badges\n• Study streaks and consistency rewards\n• Peer competitions and leaderboards\n• Benefits: Increase study time by 45%\n\nEmployee Engagement:\n• Performance tracking and recognition\n• Team challenges and competitions\n• Skill development and certification badges\n• Benefits: Increase employee satisfaction by 40%\n\nWhich use case interests you most? I can provide specific implementation details.",
      type: "useCases"
    };
  }

  if (lowerMessage.includes('implementation') || lowerMessage.includes('how to implement') || lowerMessage.includes('phases')) {
    conversationContext.lastTopic = 'implementation';
    return {
      message: "Here's the detailed implementation approach for GameLayer:\n\nPhase 1: Foundation (1-2 weeks)\n• Basic points system and simple achievements\n• User profiles and basic analytics\n• Start with core gamification elements\n\nPhase 2: Social Features (2-3 weeks)\n• Leaderboards and social sharing\n• Community features and team challenges\n• Add social elements to increase engagement\n\nPhase 3: Advanced Mechanics (3-4 weeks)\n• Complex challenges and personalization\n• Advanced analytics and A/B testing\n• Implement sophisticated mechanics\n\nPhase 4: Optimization (Ongoing)\n• Performance optimization and advanced reporting\n• Custom integrations and white-label options\n• Continuously optimize based on user behavior\n\nBest Practices:\n• Start simple - don't overwhelm users initially\n• Make rewards meaningful and achievable\n• Use data to iterate and improve continuously\n• Ensure mobile-first design and accessibility\n\nWhat specific phase would you like to focus on?",
      type: "implementation"
    };
  }

  // Industry-specific responses
  if (lowerMessage.includes('fitness') || lowerMessage.includes('workout')) {
    conversationContext.lastTopic = 'useCase';
    conversationContext.industry = 'fitness';
    return {
      message: "Fitness apps are perfect for gamification - they naturally align with goal-setting, progress tracking, and social motivation. Successful fitness apps like Nike Run Club and Strava use gamification to drive engagement through workout tracking, achievement badges, social challenges, and progress visualization. GameLayer's platform provides all the tools needed: points for workouts, achievement systems for milestones, leaderboards for competition, and social features for community support. The key is making fitness feel like a game while maintaining authenticity. What specific fitness app features are you looking to gamify?",
      type: "useCase"
    };
  }

  if (lowerMessage.includes('ecommerce') || lowerMessage.includes('shopping')) {
    conversationContext.lastTopic = 'useCase';
    conversationContext.industry = 'ecommerce';
    return {
      message: "E-commerce gamification is about creating emotional connections and driving repeat purchases. Successful programs like Starbucks Rewards and Sephora Beauty Insider use tier systems, points multipliers, exclusive access, and social features to build loyalty. GameLayer's platform supports sophisticated e-commerce gamification with flexible reward systems, referral programs, seasonal challenges, and advanced analytics. The key is making shopping feel rewarding beyond just the purchase. What specific e-commerce challenges are you looking to solve with gamification?",
      type: "useCase"
    };
  }

  // API-specific questions
  if (lowerMessage.includes('api') && lowerMessage.includes('player')) {
    conversationContext.lastTopic = 'api';
    return {
      message: "GameLayer's player management API is comprehensive and flexible. Use POST /players to create new player profiles with metadata like preferences, demographics, and custom fields. GET /players/{id} retrieves player details, PUT /players/{id} updates information, and GET /players lists players with filtering options. The API supports rich player profiles with custom attributes, making it easy to personalize experiences. What specific player management features do you need?",
      type: "api"
    };
  }

  if (lowerMessage.includes('api') && lowerMessage.includes('achievement')) {
    conversationContext.lastTopic = 'api';
    return {
      message: "GameLayer's achievement system is highly customizable. Use POST /achievements to award achievements to players with custom criteria and metadata. GET /achievements lists available achievements, and GET /players/{id}/achievements shows player progress. Achievements can be based on points, actions, time, or custom criteria. The system supports automatic and manual achievement awarding, with real-time notifications. What type of achievements are you planning to implement?",
      type: "api"
    };
  }

  // Default expert response with more personality
  return {
    message: "I'm your gamification and GameLayer expert! I can help you with user engagement strategies, loyalty programs, retention optimization, implementation guidance, API integration, pricing, and industry-specific use cases. What would you like to explore? I can provide detailed, actionable insights to help you succeed with gamification.",
    type: "general"
  };
}

function generateContextualResponse(message, context) {
  const lowerMessage = message.toLowerCase();
  
  // Handle follow-up questions based on context
  if (context.lastTopic === 'pricing' && (lowerMessage.includes('starter') || lowerMessage.includes('€100'))) {
    return {
      message: "The Starter plan (€100/month) is ideal for small apps and MVPs testing gamification. It includes up to 1,000 active users, all core gamification features, unlimited elements, email support, basic analytics, and full API access. This plan is perfect for validating gamification concepts before scaling. You can upgrade to Growth plan when you reach 1,000 users or need advanced features like A/B testing and priority support.",
      type: "pricing_detail"
    };
  }
  
  if (context.lastTopic === 'pricing' && (lowerMessage.includes('growth') || lowerMessage.includes('€1,000'))) {
    return {
      message: "The Growth plan (€1,000/month) is designed for apps with proven engagement and scaling needs. It supports up to 25,000 users with all gamification mechanics, unlimited elements, advanced customization, priority support (8-hour response), advanced analytics, behavioral insights, and A/B testing framework. This plan is perfect for apps that have validated gamification and are ready to scale their engagement strategy.",
      type: "pricing_detail"
    };
  }
  
  if (context.lastTopic === 'api' && lowerMessage.includes('implementation')) {
    return {
      message: "API implementation is straightforward. Start with our SDKs (JavaScript, React, React Native, iOS, Android) or use our REST API directly. Basic integration takes 1-2 days: create account, get API keys, initialize SDK, start tracking user actions. Full gamification system: 1-2 weeks. We provide comprehensive documentation, code examples, and support. What's your current tech stack? I can provide specific implementation guidance.",
      type: "implementation"
    };
  }
  
  if (context.lastTopic === 'useCase' && context.industry) {
    const useCase = gamelayerKnowledge.useCases[context.industry];
    if (useCase && lowerMessage.includes('implement')) {
      return {
        message: `For ${context.industry} apps: ${useCase.implementation}. Start with basic tracking, add features gradually using our ${useCase.features.join(', ')}. Successful examples include ${useCase.examples.join(', ')}. The key is making the experience feel natural and rewarding. What specific ${context.industry} features are you looking to gamify?`,
        type: "implementation_detail"
      };
    }
  }
  
  return null;
}

export const clientSideAI = {
  sendMessage: async (message, conversationId) => {
    // Simulate API delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const result = generateExpertResponse(message);
    
    return {
      response: result.message,
      conversationId: conversationId || 'client-side',
      timestamp: new Date().toISOString(),
      type: result.type || 'general'
    };
  }
}; 