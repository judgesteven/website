// Client-side AI Assistant for GameLayer
// This provides responses when the backend API is not available

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
  ]
};

function searchKnowledgeBase(query) {
  const lowerQuery = query.toLowerCase();
  const results = [];

  // Search pricing
  Object.entries(gamelayerKnowledge.pricing).forEach(([key, plan]) => {
    if (lowerQuery.includes(plan.title.toLowerCase()) || 
        lowerQuery.includes('pricing') || 
        lowerQuery.includes('price') || 
        lowerQuery.includes('cost')) {
      results.push({ type: 'pricing', data: plan });
    }
  });

  // Search features
  gamelayerKnowledge.features.forEach(feature => {
    if (lowerQuery.includes(feature.toLowerCase())) {
      results.push({ type: 'feature', data: feature });
    }
  });

  // Search case studies
  gamelayerKnowledge.caseStudies.forEach(study => {
    if (lowerQuery.includes(study.title.toLowerCase()) || 
        lowerQuery.includes(study.category.toLowerCase())) {
      results.push({ type: 'caseStudy', data: study });
    }
  });

  return results;
}

function generateResponse(message) {
  const lowerMessage = message.toLowerCase();
  const knowledgeResults = searchKnowledgeBase(message);

  // Pricing questions
  if (lowerMessage.includes('pricing') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
    return {
      response: `GameLayer offers flexible pricing plans:

• Starter: €100/month for up to 1,000 users
• Growth: €1,000/month for up to 25,000 users  
• Scale: €2,500/month for up to 100,000 users
• Enterprise: Custom pricing for unlimited users

All plans include full gamification features, unlimited elements, and support.`,
      knowledgeBaseResults: knowledgeResults
    };
  }

  // Feature questions
  if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capabilities')) {
    return {
      response: `GameLayer includes powerful gamification features:

• Points and rewards system
• Leaderboards and rankings
• Achievements and badges
• Missions and challenges
• Streaks and daily goals
• Mystery boxes and surprises
• Team competitions
• Real-time analytics
• API integration
• Custom branding

Perfect for boosting user engagement and retention!`,
      knowledgeBaseResults: knowledgeResults
    };
  }

  // Case studies
  if (lowerMessage.includes('case study') || lowerMessage.includes('example') || lowerMessage.includes('success')) {
    return {
      response: `GameLayer has powered successful gamification programs:

• Veikkaus Points: Finnish lottery loyalty with challenges
• Reima GO!: Kids learning adventure platform
• Finnair: Airline loyalty with personalized tasks
• Baaz: Social platform content creation challenges

These show how gamification drives engagement across industries.`,
      knowledgeBaseResults: knowledgeResults
    };
  }

  // General gamification questions
  if (lowerMessage.includes('gamification') || lowerMessage.includes('what is')) {
    return {
      response: `Gamification uses game mechanics to boost engagement and motivation. GameLayer makes it easy to add:

• Points and rewards for actions
• Leaderboards to drive competition
• Badges for achievements
• Challenges to complete
• Progress tracking

This increases user retention, engagement, and loyalty.`,
      knowledgeBaseResults: knowledgeResults
    };
  }

  // Default response
  return {
    response: `I can help you with GameLayer information! Ask me about:

• Pricing plans and costs
• Gamification features
• Case studies and examples
• How gamification works
• Implementation guidance

What would you like to know?`,
    knowledgeBaseResults: knowledgeResults
  };
}

export const clientSideAI = {
  sendMessage: async (message, conversationId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const result = generateResponse(message);
    
    return {
      ...result,
      conversationId: conversationId || 'client-side',
      timestamp: new Date().toISOString()
    };
  }
}; 