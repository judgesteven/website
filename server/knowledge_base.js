const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Check if OpenAI API key is configured
if (!OPENAI_API_KEY) {
  console.error('OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.');
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// Create embedding for search query
async function createEmbedding(text) {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error('Error creating embedding:', error);
    return null;
  }
}

// Search knowledge base for relevant content
async function searchKnowledgeBase(query, limit = 5) {
  try {
    console.log('Searching knowledge base for:', query);
    
    // Enhanced search with better matching
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
    let searchQuery = supabase.from('gamelayer_kb').select('*');
    
    // Priority search for GameLayer-specific terms
    const gamelayerTerms = ['gamelayer', 'api', 'pricing', 'mission', 'achievement', 'leaderboard', 'points'];
    const apiTerms = ['api', 'endpoint', 'curl', 'http', 'get', 'post', 'put', 'delete', 'authentication', 'token', 'bearer'];
    const hasGamelayerTerms = gamelayerTerms.some(term => query.toLowerCase().includes(term));
    const hasApiTerms = apiTerms.some(term => query.toLowerCase().includes(term));
    
    if (hasApiTerms) {
      // For API-specific queries, prioritize API documentation
      searchQuery = searchQuery.in('type', ['api']);
    } else if (hasGamelayerTerms) {
      // For GameLayer-specific queries, prioritize platform, pricing, and technical content
      searchQuery = searchQuery.in('type', ['platform', 'pricing', 'technical', 'api']);
    }
    
    if (searchTerms.length > 0) {
      // Use more specific search patterns
      const searchPatterns = searchTerms.map(term => `content.ilike.%${term}%`);
      
      // Add exact phrase matching for better relevance
      if (query.toLowerCase().includes('gamelayer')) {
        searchPatterns.push("content.ilike.%GameLayer%");
      }
      if (query.toLowerCase().includes('api')) {
        searchPatterns.push("content.ilike.%API%");
      }
      if (query.toLowerCase().includes('pricing')) {
        searchPatterns.push("content.ilike.%pricing%");
        searchPatterns.push("content.ilike.%€%");
      }
      
      const orConditions = searchPatterns.join(',');
      searchQuery = searchQuery.or(orConditions);
    }
    
    const { data, error } = await searchQuery.limit(limit);

    if (error) {
      console.error('Error searching knowledge base:', error);
      return [];
    }

    console.log('Found', data?.length || 0, 'relevant documents');
    
    // Sort results by relevance (prioritize GameLayer-specific content)
    if (data && data.length > 0) {
      data.sort((a, b) => {
        const aScore = getRelevanceScore(a, query);
        const bScore = getRelevanceScore(b, query);
        return bScore - aScore;
      });
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in knowledge base search:', error);
    return [];
  }
}

// Helper function to calculate relevance score
function getRelevanceScore(doc, query) {
  let score = 0;
  const queryLower = query.toLowerCase();
  const contentLower = doc.content.toLowerCase();
  
  // Higher score for GameLayer-specific content
  if (contentLower.includes('gamelayer')) score += 10;
  if (contentLower.includes('api')) score += 8;
  if (contentLower.includes('pricing')) score += 5;
  if (contentLower.includes('€')) score += 3;
  
  // Score based on type
  if (doc.type === 'platform') score += 8;
  if (doc.type === 'pricing') score += 8;
  if (doc.type === 'technical') score += 6;
  if (doc.type === 'api') score += 15; // Higher priority for API content
  
  // Score for exact matches
  if (queryLower.includes('gamelayer') && contentLower.includes('gamelayer')) score += 15;
  if (queryLower.includes('pricing') && contentLower.includes('pricing')) score += 15;
  if (queryLower.includes('api') && contentLower.includes('api')) score += 20; // Higher priority for API queries
  if (queryLower.includes('mission') && contentLower.includes('mission')) score += 15;
  if (queryLower.includes('endpoint') && contentLower.includes('endpoint')) score += 15;
  if (queryLower.includes('curl') && contentLower.includes('curl')) score += 15;
  
  return score;
}

// Enhanced GPT response with knowledge base context
async function getEnhancedResponse(userMessage) {
  try {
    // Search knowledge base for relevant information
    const relevantDocs = await searchKnowledgeBase(userMessage, 3);
    
    // Build context from knowledge base
    let context = "";
    if (relevantDocs.length > 0) {
      context = "Relevant information from GameLayer knowledge base:\n\n";
      relevantDocs.forEach((doc, index) => {
        context += `${index + 1}. ${doc.content}\n\n`;
      });
    }

    // Create enhanced system prompt
    const systemPrompt = `You are a friendly GameLayer gamification expert! Keep responses SHORT, CONVERSATIONAL, and always ask follow-up questions.

${context}

CRITICAL RULES:
1. **ONLY answer GameLayer/gamification questions** - Redirect others politely
2. **Keep answers SHORT** - 1-2 sentences max
3. **ALWAYS ask a follow-up question** to keep conversation flowing
4. **Be conversational and friendly** - like chatting with a helpful friend
5. Use **bold** for key terms and \`code\` for technical stuff

RESPONSE STYLE:
- Quick, helpful answer
- Natural follow-up question
- Friendly tone

EXAMPLES:
- "GameLayer starts at **€99/month** for up to 1,000 users with all gamification features included. **Which plan sounds right for your user base?**"

- "The \`/missions\` endpoint lets you create engaging challenges instantly! **Want to see how to set up your first mission?**"

- "Gamification boosts engagement by 40% on average! **What's your main goal - user retention, activity, or conversions?**"

If off-topic: "I'm your GameLayer buddy! Let's talk gamification - **what's your biggest engagement challenge right now?**"`;

    // Get response from OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 150,
      temperature: 0.8
    });

    return response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error('Error getting enhanced response:', error);
    return "I'm having trouble accessing the knowledge base right now. Please try again in a moment.";
  }
}

module.exports = {
  searchKnowledgeBase,
  getEnhancedResponse,
  createEmbedding
}; 