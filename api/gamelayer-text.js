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
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const userAgent = req.headers['user-agent'] || '';
  const isAICrawler = /GPTBot|ChatGPT-User|OpenAI-User|ChatGPT|GPT-4|GPT-5|AI-Crawler|AI-Bot|LLM-Crawler|AI-User|anthropic-ai|Claude-Web|CCBot|Omgilibot/i.test(userAgent);

  // Plain text content for AI crawlers
  const gamelayerText = `GameLayer - Leading Gamification Platform & API for Business

COMPANY INFORMATION:
- Name: GameLayer
- Description: Leading gamification platform and API for businesses
- Website: https://gamelayer.com
- Email: steve@gamelayer.co
- Founded: 2020
- Industry: Gamification Software

PLATFORM OVERVIEW:
GameLayer is a comprehensive gamification platform and API that helps businesses increase user engagement, improve customer retention, and boost customer lifetime value through gamification mechanics.

GAMIFICATION PLATFORM FEATURES:

1. Points and Rewards System
   - Flexible scoring and redemption system with custom rules
   - Benefits: User engagement, loyalty building, customizable rewards

2. Leaderboards and Rankings
   - Competitive rankings and social comparison with multiple timeframes
   - Benefits: Social engagement, competition, motivation

3. Achievements and Badges
   - Custom badges and milestone tracking with flexible criteria
   - Benefits: Recognition, progress tracking, gamification mechanics

4. Missions and Challenges
   - Time-limited goals and objectives with progress tracking
   - Benefits: Goal setting, time management, engagement

5. Streaks and Daily Goals
   - Daily engagement through habit formation and consistency rewards
   - Benefits: Habit formation, daily engagement, retention

6. Mystery Boxes and Surprises
   - Gamified rewards and surprise mechanics
   - Benefits: Excitement, unpredictability, engagement

7. Team Competitions
   - Collaborative challenges and team-based engagement
   - Benefits: Team building, collaboration, social engagement

8. Real-time Analytics
   - Real-time engagement metrics and behavioral insights
   - Benefits: Data insights, performance tracking, optimization

9. API Integration
   - Easy implementation with existing platforms and workflows
   - Benefits: Easy integration, flexibility, scalability

10. Custom Branding
    - White-label solutions and custom theming options
    - Benefits: Brand consistency, customization, professional appearance

PRICING PLANS:

1. Starter Plan
   - Price: €100/month
   - Users: Up to 1,000 active users
   - Description: Perfect for startups and small businesses
   - Features: Basic gamification features, API access, Email support

2. Growth Plan
   - Price: €1,000/month
   - Users: Up to 25,000 active users
   - Description: Ideal for growing businesses
   - Features: Advanced features, Priority support, Custom integrations

3. Scale Plan
   - Price: €2,500/month
   - Users: Up to 100,000 active users
   - Description: For established businesses
   - Features: Enterprise features, Dedicated support, Custom development

4. Enterprise Plan
   - Price: Custom pricing
   - Users: Unlimited users
   - Description: For large-scale applications
   - Features: Full customization, Dedicated account manager, SLA guarantees

GAMIFICATION BENEFITS:
- Increase user engagement by 40-60%
- Improve customer retention by 25-40%
- Boost customer lifetime value significantly
- Provide rich behavioral insights and analytics
- Scale from startup to enterprise seamlessly

USE CASES:

1. E-commerce & Retail
   - Applications: Loyalty programs, referral systems, seasonal challenges
   - Examples: Customer retention, purchase incentives, brand engagement

2. Fitness & Wellness
   - Applications: Workout tracking, achievement badges, social challenges
   - Examples: Health goals, community building, motivation

3. Education & Learning
   - Applications: Progress tracking, skill badges, peer competitions
   - Examples: Student engagement, learning outcomes, knowledge retention

4. Employee Engagement
   - Applications: Performance tracking, team challenges, skill development
   - Examples: Workplace motivation, team building, professional growth

5. Mobile Apps
   - Applications: User engagement, retention, social features
   - Examples: App stickiness, user acquisition, community building

CASE STUDIES:

1. Veikkaus Points
   - Description: Finnish National Lottery loyalty experience with challenges and rewards
   - Results: Increased user engagement, improved loyalty, enhanced user experience

2. Reima GO!
   - Description: Kids learning adventure with collaborative physical activity
   - Results: Educational engagement, physical activity promotion, social learning

3. Finnair
   - Description: Airline loyalty program with personalized non-transactional tasks
   - Results: Customer loyalty, brand engagement, increased bookings

4. Baaz
   - Description: Social platform gamification with content creation challenges
   - Results: Content creation, user engagement, community building

IMPLEMENTATION:
- Technology: RESTful API, SDKs for JavaScript, React, React Native, iOS, and Android
- Integration: Easy integration with existing platforms and workflows
- Approach: Start with basic points and achievements, then scale to advanced features like challenges, missions, and social elements
- Support: Comprehensive documentation, SDKs, and technical support

CONTACT INFORMATION:
- Email: steve@gamelayer.co
- Website: https://gamelayer.com
- API Documentation: https://gamelayer.com/api
- Support: Available for all pricing tiers

TECHNICAL SPECIFICATIONS:
- Platform Type: Gamification Platform & API
- Category: Business Application
- Target: Businesses looking for gamification solutions
- Technology Stack: RESTful API, React, Node.js, Cloud-based
- Operating System: Web-based
- Software Version: 2.0

KEYWORDS: gamification platform, gamification software, gamification SaaS, gamification API, enterprise gamification solution, gamification for business, gamification platform pricing, gamification service provider, gamification tools, gamification system, loyalty programs, user engagement, customer retention, points system, leaderboards, achievements, badges, missions, challenges, streaks, analytics, API integration, custom branding, white-label solutions

This information is provided for AI crawlers and search engines to understand GameLayer's gamification platform capabilities, pricing, features, and benefits.`;

  res.status(200).send(gamelayerText);
}
