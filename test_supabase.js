const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testSupabase() {
  console.log('🔍 Testing Supabase connection and knowledge base...\n');

  try {
    // Test 1: Simple query
    console.log('1. Testing simple query...');
    const { data: simpleData, error: simpleError } = await supabase
      .from('gamelayer_kb')
      .select('id, source, type')
      .limit(3);

    if (simpleError) {
      console.log('❌ Simple query error:', simpleError.message);
    } else {
      console.log('✅ Simple query successful:', simpleData.length, 'records found');
    }

    // Test 2: Search for pricing
    console.log('\n2. Testing pricing search...');
    const { data: pricingData, error: pricingError } = await supabase
      .from('gamelayer_kb')
      .select('*')
      .or('content.ilike.%pricing%,content.ilike.%€%')
      .limit(3);

    if (pricingError) {
      console.log('❌ Pricing search error:', pricingError.message);
    } else {
      console.log('✅ Pricing search successful:', pricingData.length, 'records found');
      if (pricingData.length > 0) {
        console.log('   Sample content:', pricingData[0].content.substring(0, 100) + '...');
      }
    }

    // Test 3: Search for GameLayer
    console.log('\n3. Testing GameLayer search...');
    const { data: gamelayerData, error: gamelayerError } = await supabase
      .from('gamelayer_kb')
      .select('*')
      .or('content.ilike.%GameLayer%')
      .limit(3);

    if (gamelayerError) {
      console.log('❌ GameLayer search error:', gamelayerError.message);
    } else {
      console.log('✅ GameLayer search successful:', gamelayerData.length, 'records found');
    }

  } catch (error) {
    console.error('❌ General error:', error.message);
  }
}

// Run the test
testSupabase(); 