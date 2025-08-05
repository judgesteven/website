const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');

// Configuration
const SUPABASE_URL = "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function debugServer() {
  console.log('🔍 Debugging server and knowledge base integration...\n');

  try {
    // Test 1: Supabase connection
    console.log('1. Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('gamelayer_kb')
      .select('id')
      .limit(1);

    if (testError) {
      console.log('❌ Supabase error:', testError.message);
      return;
    } else {
      console.log('✅ Supabase connection successful');
    }

    // Test 2: Knowledge base search
    console.log('\n2. Testing knowledge base search...');
    const query = "pricing";
    const { data: searchData, error: searchError } = await supabase
      .from('gamelayer_kb')
      .select('*')
      .or(`content.ilike.%${query}%`)
      .limit(3);

    if (searchError) {
      console.log('❌ Search error:', searchError.message);
      return;
    } else {
      console.log('✅ Search successful, found', searchData.length, 'documents');
    }

    // Test 3: OpenAI connection
    console.log('\n3. Testing OpenAI connection...');
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "user", content: "Hello" }
        ],
        max_tokens: 10
      });
      console.log('✅ OpenAI connection successful');
    } catch (openaiError) {
      console.log('❌ OpenAI error:', openaiError.message);
      return;
    }

    // Test 4: Full integration test
    console.log('\n4. Testing full integration...');
    
    // Build context from knowledge base
    let context = "";
    if (searchData.length > 0) {
      context = "Relevant information from GameLayer knowledge base:\n\n";
      searchData.forEach((doc, index) => {
        context += `${index + 1}. ${doc.content}\n\n`;
      });
    }

    // Create enhanced system prompt
    const systemPrompt = `You are a GameLayer gamification expert assistant. You have access to comprehensive information about GameLayer's platform, API, and gamification best practices.

${context}

When answering questions:
1. Use the knowledge base information when relevant
2. Provide specific, actionable advice about GameLayer implementation
3. Reference specific features, pricing, or API endpoints when applicable
4. Be helpful and practical in your guidance
5. If you don't have specific information, suggest contacting GameLayer support

Focus on helping users understand and implement gamification features effectively.`;

    // Get response from OpenAI
    const userMessage = "What are GameLayer's pricing plans?";
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const gptResponse = response.choices[0]?.message?.content || "No response received.";
    console.log('✅ Full integration successful!');
    console.log('\n📝 Response preview:');
    console.log(gptResponse.substring(0, 200) + '...');

  } catch (error) {
    console.error('❌ General error:', error.message);
  }
}

// Run the debug
debugServer(); 