require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testDetailedContent() {
  console.log('🔍 Testing detailed knowledge base content...\n');
  
  // Look for specific GameLayer content
  const { data, error } = await supabase
    .from('gamelayer_kb')
    .select('*')
    .or('content.ilike.%GameLayer%,content.ilike.%pricing%,content.ilike.%API%,content.ilike.%€%')
    .limit(10);

  if (error) {
    console.error('❌ Error:', error);
    return;
  }

  console.log(`✅ Found ${data?.length || 0} GameLayer-related documents:\n`);
  
  if (data && data.length > 0) {
    data.forEach((doc, index) => {
      console.log(`${index + 1}. ID: ${doc.id}`);
      console.log(`   Type: ${doc.type}`);
      console.log(`   Content: ${doc.content}`);
      console.log('---\n');
    });
  }
}

testDetailedContent(); 