require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testKnowledgeBaseSearch() {
  console.log('🔍 Testing knowledge base search...\n');
  
  const testQueries = [
    'What are GameLayer pricing plans?',
    'How do I use the GameLayer API?',
    'What is gamification?',
    'Show me Mission API examples'
  ];
  
  for (const query of testQueries) {
    console.log(`📝 Query: "${query}"`);
    
    try {
      // Simple text search - search for key terms
      const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
      let searchQuery = supabase.from('gamelayer_kb').select('*');
      
      if (searchTerms.length > 0) {
        const orConditions = searchTerms.map(term => `content.ilike.%${term}%`).join(',');
        searchQuery = searchQuery.or(orConditions);
      }
      
      const { data, error } = await searchQuery.limit(3);

      if (error) {
        console.error('❌ Error:', error);
        continue;
      }

      console.log(`✅ Found ${data?.length || 0} relevant documents:`);
      
      if (data && data.length > 0) {
        data.forEach((doc, index) => {
          console.log(`   ${index + 1}. ID: ${doc.id}`);
          console.log(`      Type: ${doc.type}`);
          console.log(`      Content: ${doc.content.substring(0, 150)}...`);
          console.log('');
        });
      } else {
        console.log('   No relevant documents found');
      }
      
      console.log('---\n');
    } catch (error) {
      console.error('❌ Error searching knowledge base:', error);
    }
  }
}

testKnowledgeBaseSearch(); 