const { createClient } = require('@supabase/supabase-js');

// Configuration
const SUPABASE_URL = "https://nhhbgzxwfcribhupblct.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oaGJnenh3ZmNyaWJodXBibGN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTI5NjEsImV4cCI6MjA2OTk4ODk2MX0.awWuymtkU2gqCoFaNOC4qwatyjDTcX7y4E-WMV8R3nE";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkDatabase() {
  console.log('🔍 Checking GameLayer database status...\n');

  try {
    // Check if the table exists
    console.log('1. Checking if gamelayer_kb table exists...');
    const { data: tableData, error: tableError } = await supabase
      .from('gamelayer_kb')
      .select('count')
      .limit(1);

    if (tableError) {
      console.log('❌ Table does not exist or error:', tableError.message);
      console.log('\n📋 You need to create the table manually in Supabase dashboard');
    } else {
      console.log('✅ gamelayer_kb table exists!');
      
      // Check how many records are in the table
      const { count, error: countError } = await supabase
        .from('gamelayer_kb')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        console.log('⚠️  Could not count records:', countError.message);
      } else {
        console.log(`📊 Found ${count} records in the knowledge base`);
      }
    }

    // Check if we can query the table
    console.log('\n2. Testing knowledge base query...');
    const { data: sampleData, error: queryError } = await supabase
      .from('gamelayer_kb')
      .select('id, source, type')
      .limit(5);

    if (queryError) {
      console.log('❌ Query error:', queryError.message);
    } else if (sampleData && sampleData.length > 0) {
      console.log('✅ Knowledge base is working! Sample records:');
      sampleData.forEach((record, index) => {
        console.log(`   ${index + 1}. ${record.id} (${record.type})`);
      });
    } else {
      console.log('⚠️  Table exists but is empty');
    }

  } catch (error) {
    console.error('❌ Error checking database:', error.message);
  }
}

// Run the check
checkDatabase(); 