const fs = require("fs");
const yaml = require("js-yaml");
const { createClient } = require("@supabase/supabase-js");
const OpenAI = require("openai");

// ---------- CONFIG ----------
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const SUPABASE_URL = "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY || "";

// Check if OpenAI API key is configured
if (!OPENAI_API_KEY) {
  console.error('OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.');
}

// ---------- INIT ----------
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------- LOAD YAML ----------
let apiSpec = {};
try {
  const apiSpecPath = "./docs/gamelayer_api.yaml";
  if (fs.existsSync(apiSpecPath)) {
    const apiSpecRaw = fs.readFileSync(apiSpecPath, "utf8");
    apiSpec = yaml.load(apiSpecRaw);
  } else {
    console.log("API spec file not found, using empty spec");
  }
} catch (error) {
  console.error("Error loading API spec:", error);
}

// ---------- FUNCTIONS ----------
async function searchKnowledgeBase(query) {
  try {
    // Search your Supabase vector DB for gamification-related content
    const { data, error } = await supabase.rpc("match_documents", {
      query_text: query,
      match_count: 3
    });
    
    if (error) {
      console.error("Supabase search error:", error);
      // Fallback to regular search if RPC doesn't exist
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('gamelayer_kb')
        .select('content')
        .ilike('content', `%${query}%`)
        .limit(3);
      
      if (fallbackError) {
        console.error("Fallback search error:", fallbackError);
        return "";
      }
      
      return fallbackData.map(d => d.content).join("\n\n");
    }
    
    return data.map(d => d.content).join("\n\n");
  } catch (error) {
    console.error("Knowledge base search error:", error);
    return "";
  }
}

async function askOpenAI(userQuestion, kbContext) {
  try {
    if (!OPENAI_API_KEY) {
      return "I'm sorry, the AI assistant is not properly configured. Please contact support.";
    }

    const apiContext = JSON.stringify(apiSpec, null, 2).slice(0, 3000); // limit context size
    const systemPrompt = `
You are a GameLayer gamification expert assistant. Keep responses SHORT, CONVERSATIONAL, and always ask follow-up questions.

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

If off-topic: "I'm your GameLayer buddy! Let's talk gamification - **what's your biggest engagement challenge right now?**"

Only use information from:
1) Gamification knowledge from the provided context
2) GameLayer API specification
`;

    const userPrompt = `
User question: ${userQuestion}

Gamification KB Context:
${kbContext}

API Spec Context:
${apiContext}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      temperature: 0.8,
      max_tokens: 150
    });

    return completion.choices[0].message?.content || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    return "I'm having trouble accessing the knowledge base right now. Please try again in a moment.";
  }
}

// Main function to get AI response
async function getAIResponse(userQuestion) {
  try {
    const kbContext = await searchKnowledgeBase(userQuestion);
    const answer = await askOpenAI(userQuestion, kbContext);
    return answer;
  } catch (error) {
    console.error("Error in getAIResponse:", error);
    return "I'm sorry, I encountered an error. Please try again.";
  }
}

module.exports = {
  getAIResponse,
  searchKnowledgeBase,
  askOpenAI
}; 