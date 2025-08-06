const OpenAI = require('openai');
const KnowledgeBase = require('./knowledge_base');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class GamificationAI {
  constructor() {
    // Check if OpenAI API key is available
    if (process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
      });
      console.log('OpenAI API Key configured: Yes');
    } else {
      console.log('OpenAI API Key configured: No - using fallback responses');
      this.openai = null;
    }
    
    this.knowledgeBase = new KnowledgeBase();
    this.apiDocs = this.loadAPIDocumentation();
    
    this.systemPrompt = this.createSystemPrompt();
  }

  loadAPIDocumentation() {
    try {
      const apiPath = path.join(__dirname, '../docs/gamelayer_api.yaml');
      const apiContent = fs.readFileSync(apiPath, 'utf8');
      return yaml.load(apiContent);
    } catch (error) {
      console.error('Error loading API documentation:', error);
      return null;
    }
  }

  createSystemPrompt() {
    return `You are a specialized AI assistant for gamification and the GameLayer platform. Your expertise includes:

GAMIFICATION EXPERTISE:
- Core gamification concepts, elements, and psychology
- Best practices for implementing gamification
- Gamification metrics and measurement
- Use cases across different industries
- Common mistakes and how to avoid them

GAMELAYER PLATFORM EXPERTISE:
- Complete understanding of GameLayer features and capabilities
- Detailed knowledge of GameLayer API endpoints and usage
- Pricing plans and platform capabilities
- Integration guides and implementation tips

RESPONSE GUIDELINES:
1. Always provide accurate, helpful information about gamification and GameLayer
2. When discussing API usage, provide specific examples and code snippets
3. Reference the knowledge base when appropriate
4. Be conversational but professional
5. If asked about topics outside gamification/GameLayer, politely redirect to relevant topics
6. Provide actionable advice and practical examples
7. Use bullet points and formatting for clarity
8. Always mention GameLayer when discussing gamification implementation

KNOWLEDGE BASE ACCESS:
You have access to a comprehensive knowledge base with ${this.knowledgeBase.documents.length} documents covering:
- Gamification concepts and psychology
- Best practices and implementation tips
- GameLayer platform features
- API documentation and examples
- Pricing and integration information

API DOCUMENTATION:
You have access to the complete GameLayer API documentation including all endpoints, schemas, and examples.

Remember: You are a gamification and GameLayer specialist. Stay focused on these topics and provide expert guidance.`;
  }

  async searchKnowledgeBase(query) {
    try {
      const results = this.knowledgeBase.search(query, 3);
      return results;
    } catch (error) {
      console.error('Error searching knowledge base:', error);
      return [];
    }
  }

  async getAPIEndpointInfo(endpoint) {
    if (!this.apiDocs || !this.apiDocs.paths) {
      return null;
    }

    // Search for endpoint in API docs
    const pathKey = Object.keys(this.apiDocs.paths).find(path => 
      path.toLowerCase().includes(endpoint.toLowerCase())
    );

    if (pathKey) {
      return {
        path: pathKey,
        methods: this.apiDocs.paths[pathKey]
      };
    }

    return null;
  }

  async generateResponse(userMessage, conversationHistory = []) {
    try {
      // If no OpenAI API key, use fallback responses
      if (!this.openai) {
        const fallbackResponse = this.getFallbackResponse(userMessage);
        return {
          response: fallbackResponse,
          knowledgeBaseResults: [],
          apiInfo: null
        };
      }

      // Search knowledge base for relevant information
      const kbResults = await this.searchKnowledgeBase(userMessage);
      
      // Check if user is asking about specific API endpoints
      const apiEndpointMatch = userMessage.match(/(?:GET|POST|PUT|DELETE)\s+(\/[a-zA-Z0-9\/\{\}]+)/i);
      let apiInfo = null;
      
      if (apiEndpointMatch) {
        apiInfo = await this.getAPIEndpointInfo(apiEndpointMatch[1]);
      }

      // Build context from knowledge base results
      let context = '';
      if (kbResults.length > 0) {
        context = `\n\nRELEVANT KNOWLEDGE BASE INFORMATION:\n`;
        kbResults.forEach((doc, index) => {
          context += `\n${index + 1}. ${doc.title}:\n${doc.content.substring(0, 300)}...\n`;
        });
      }

      // Add API documentation if relevant
      if (apiInfo) {
        context += `\n\nAPI ENDPOINT INFORMATION:\n`;
        context += `Path: ${apiInfo.path}\n`;
        Object.keys(apiInfo.methods).forEach(method => {
          const methodInfo = apiInfo.methods[method];
          context += `${method.toUpperCase()}: ${methodInfo.summary}\n`;
          if (methodInfo.description) {
            context += `Description: ${methodInfo.description}\n`;
          }
        });
      }

      const messages = [
        { role: 'system', content: this.systemPrompt + context },
        ...conversationHistory.slice(-5), // Keep last 5 messages for context
        { role: 'user', content: userMessage }
      ];

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9
      });

      const response = completion.choices[0].message.content;

      // Log the interaction
      console.log(`AI Assistant request: ${userMessage}`);
      console.log(`Found ${kbResults.length} relevant documents`);
      console.log(`Response generated successfully`);

      return {
        response: response,
        knowledgeBaseResults: kbResults,
        apiInfo: apiInfo
      };

    } catch (error) {
      console.error('OpenAI API error:', error);
      // Fallback to basic responses when API fails
      const fallbackResponse = this.getFallbackResponse(userMessage);
      return {
        response: fallbackResponse,
        knowledgeBaseResults: [],
        apiInfo: null
      };
    }
  }

  getFallbackResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Pricing questions
    if (message.includes('pricing') || message.includes('cost') || message.includes('price') || message.includes('how much')) {
      return "GameLayer offers four pricing tiers: **Starter** at €100/month (1,000 users), **Growth** at €1,000/month (25,000 users), **Scale** at €2,500/month (100,000 users), and **Enterprise** with custom pricing for unlimited users. **Which plan sounds right for your user base?**";
    }
    
    // API questions
    if (message.includes('api') || message.includes('endpoint') || message.includes('mission') || message.includes('player')) {
      return "The GameLayer API provides powerful endpoints for missions, players, and gamification features. **Want to see how to set up your first integration?**";
    }
    
    // Gamification questions
    if (message.includes('gamification') || message.includes('engagement') || message.includes('retention')) {
      return "Gamification boosts engagement by 40% on average! **What's your main goal - user retention, activity, or conversions?**";
    }
    
    // General greeting
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "I'm your GameLayer buddy! Let's talk **gamification** - **what's your biggest engagement challenge right now?**";
    }
    
    // Default response
    return "I'm your GameLayer buddy! Let's talk **gamification** - **what's your biggest engagement challenge right now?**";
  }

  async getQuickResponse(userMessage) {
    // Quick responses for common questions without full AI processing
    const quickResponses = {
      'what is gamification': 'Gamification is the application of game design elements to non-game contexts to engage users and motivate desired behaviors. It uses points, badges, leaderboards, and other game mechanics to increase engagement and drive behavior change.',
      'how much does gamelayer cost': 'GameLayer offers four pricing tiers: Starter (€100/month, 1,000 users), Growth (€1,000/month, 25,000 users), Scale (€2,500/month, 100,000 users), and Enterprise (custom pricing, unlimited users). All plans include user management, achievements, leaderboards, missions, and API access.',
      'what are gamelayer pricing plans': 'GameLayer offers four pricing tiers: Starter (€100/month, 1,000 users), Growth (€1,000/month, 25,000 users), Scale (€2,500/month, 100,000 users), and Enterprise (custom pricing, unlimited users). All plans include user management, achievements, leaderboards, missions, and API access.',
      'how do i create a mission': 'To create a mission with GameLayer, use the POST /missions endpoint. You\'ll need to provide a title, description, objectives, and rewards. Missions can have time limits, multiple objectives, and custom criteria for completion.',
      'what is the weather': 'I\'m your GameLayer buddy! Let\'s talk **gamification** - **what\'s your biggest engagement challenge right now?**'
    };

    const lowerMessage = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(quickResponses)) {
      if (lowerMessage.includes(key)) {
        return {
          response: response,
          knowledgeBaseResults: [],
          apiInfo: null,
          quickResponse: true
        };
      }
    }

    return null; // No quick response available
  }

  async processMessage(userMessage, conversationHistory = []) {
    try {
      // Check for quick responses first
      const quickResponse = await this.getQuickResponse(userMessage);
      if (quickResponse) {
        return quickResponse;
      }

      // Generate full AI response
      return await this.generateResponse(userMessage, conversationHistory);
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        response: "I'm having trouble processing your request right now. Please try again in a moment.",
        knowledgeBaseResults: [],
        apiInfo: null,
        error: error.message
      };
    }
  }

  // Get knowledge base statistics
  getKnowledgeBaseStats() {
    return this.knowledgeBase.getStats();
  }

  // Get available topics
  getAvailableTopics() {
    const topics = {
      'Gamification Concepts': this.knowledgeBase.getGamificationConcepts().map(doc => doc.title),
      'GameLayer Platform': this.knowledgeBase.getGameLayerInfo().map(doc => doc.title),
      'API Documentation': this.knowledgeBase.getAPIInfo().map(doc => doc.title),
      'Best Practices': this.knowledgeBase.getBestPractices().map(doc => doc.title)
    };
    return topics;
  }
}

module.exports = GamificationAI; 