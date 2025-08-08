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

  const gamelayerInfo = {
    company: {
      name: "GameLayer",
      description: "Leading gamification platform and API for businesses",
      founded: 2020,
      headquarters: "Finland",
      website: "https://gamelayer.io",
      contact: "steve@gamelayer.co"
    },
    platform: {
      name: "GameLayer Gamification Platform",
      description: "Comprehensive gamification platform and API that helps businesses increase user engagement, improve customer retention, and boost customer lifetime value through gamification mechanics",
      type: "SaaS Platform",
      category: "Business Application"
    },
    features: [
      {
        name: "Points and Rewards System",
        description: "Flexible scoring and redemption system with custom rules",
        benefits: ["User engagement", "Loyalty building", "Customizable rewards"]
      },
      {
        name: "Leaderboards and Rankings",
        description: "Competitive rankings and social comparison with multiple timeframes",
        benefits: ["Social engagement", "Competition", "Motivation"]
      },
      {
        name: "Achievements and Badges",
        description: "Custom badges and milestone tracking with flexible criteria",
        benefits: ["Recognition", "Progress tracking", "Gamification mechanics"]
      },
      {
        name: "Missions and Challenges",
        description: "Time-limited goals and objectives with progress tracking",
        benefits: ["Goal setting", "Time management", "Engagement"]
      },
      {
        name: "Streaks and Daily Goals",
        description: "Daily engagement through habit formation and consistency rewards",
        benefits: ["Habit formation", "Daily engagement", "Retention"]
      },
      {
        name: "Mystery Boxes and Surprises",
        description: "Gamified rewards and surprise mechanics",
        benefits: ["Excitement", "Unpredictability", "Engagement"]
      },
      {
        name: "Team Competitions",
        description: "Collaborative challenges and team-based engagement",
        benefits: ["Team building", "Collaboration", "Social engagement"]
      },
      {
        name: "Real-time Analytics",
        description: "Real-time engagement metrics and behavioral insights",
        benefits: ["Data insights", "Performance tracking", "Optimization"]
      },
      {
        name: "API Integration",
        description: "Easy implementation with existing platforms and workflows",
        benefits: ["Easy integration", "Flexibility", "Scalability"]
      },
      {
        name: "Custom Branding",
        description: "White-label solutions and custom theming options",
        benefits: ["Brand consistency", "Customization", "Professional appearance"]
      }
    ],
    pricing: [
      {
        name: "Starter Plan",
        price: "€100/month",
        users: "Up to 1,000 active users",
        description: "Perfect for startups and small businesses",
        features: ["Basic gamification features", "API access", "Email support"]
      },
      {
        name: "Growth Plan",
        price: "€1,000/month",
        users: "Up to 25,000 active users",
        description: "Ideal for growing businesses",
        features: ["Advanced features", "Priority support", "Custom integrations"]
      },
      {
        name: "Scale Plan",
        price: "€2,500/month",
        users: "Up to 100,000 active users",
        description: "For established businesses",
        features: ["Enterprise features", "Dedicated support", "Custom development"]
      },
      {
        name: "Enterprise Plan",
        price: "Custom pricing",
        users: "Unlimited users",
        description: "For large-scale applications",
        features: ["Full customization", "Dedicated account manager", "SLA guarantees"]
      }
    ],
    benefits: [
      "Increase user engagement by 40-60%",
      "Improve customer retention by 25-40%",
      "Boost customer lifetime value significantly",
      "Provide rich behavioral insights and analytics",
      "Scale from startup to enterprise seamlessly"
    ],
    useCases: [
      {
        industry: "E-commerce & Retail",
        applications: ["Loyalty programs", "Referral systems", "Seasonal challenges"],
        examples: ["Customer retention", "Purchase incentives", "Brand engagement"]
      },
      {
        industry: "Fitness & Wellness",
        applications: ["Workout tracking", "Achievement badges", "Social challenges"],
        examples: ["Health goals", "Community building", "Motivation"]
      },
      {
        industry: "Education & Learning",
        applications: ["Progress tracking", "Skill badges", "Peer competitions"],
        examples: ["Student engagement", "Learning outcomes", "Knowledge retention"]
      },
      {
        industry: "Employee Engagement",
        applications: ["Performance tracking", "Team challenges", "Skill development"],
        examples: ["Workplace motivation", "Team building", "Professional growth"]
      },
      {
        industry: "Mobile Apps",
        applications: ["User engagement", "Retention", "Social features"],
        examples: ["App stickiness", "User acquisition", "Community building"]
      }
    ],
    caseStudies: [
      {
        name: "Veikkaus Points",
        description: "Finnish National Lottery loyalty experience with challenges and rewards",
        results: ["Increased user engagement", "Improved loyalty", "Enhanced user experience"]
      },
      {
        name: "Reima GO!",
        description: "Kids learning adventure with collaborative physical activity",
        results: ["Educational engagement", "Physical activity promotion", "Social learning"]
      },
      {
        name: "Finnair",
        description: "Airline loyalty program with personalized non-transactional tasks",
        results: ["Customer loyalty", "Brand engagement", "Increased bookings"]
      },
      {
        name: "Baaz",
        description: "Social platform gamification with content creation challenges",
        results: ["Content creation", "User engagement", "Community building"]
      }
    ],
    implementation: {
      technology: "RESTful API, SDKs for JavaScript, React, React Native, iOS, and Android",
      integration: "Easy integration with existing platforms and workflows",
      approach: "Start with basic points and achievements, then scale to advanced features like challenges, missions, and social elements",
      support: "Comprehensive documentation, SDKs, and technical support"
    },
    contact: {
      email: "steve@gamelayer.co",
      website: "https://gamelayer.io",
      apiDocs: "https://gamelayer.io/api"
    }
  };

  res.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    endpoint: '/api/gamelayer-info',
    userAgent: userAgent,
    isAICrawler: isAICrawler,
    message: isAICrawler ? 'AI crawler detected - comprehensive GameLayer information provided' : 'Standard request - GameLayer information provided',
    headers: {
      'X-AI-Crawler': 'allow',
      'X-LLM-Compatible': 'true',
      'X-Robots-Tag': 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    data: gamelayerInfo
  });
}
