// Test the knowledge base module directly
const { getEnhancedResponse } = require('./server/knowledge_base');

async function testKBModule() {
  console.log('🧪 Testing knowledge base module...\n');

  try {
    const response = await getEnhancedResponse("What are GameLayer's pricing plans?");
    console.log('✅ Response received:');
    console.log(response.substring(0, 300) + '...');
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

testKBModule(); 