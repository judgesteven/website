import fetch from 'node-fetch';

async function testAIAssistant() {
  console.log('🧪 Testing GameLayer AI Assistant...\n');

  const testQuestions = [
    "What are GameLayer's pricing plans?",
    "How do I implement user achievements?",
    "Tell me about the API endpoints",
    "What gamification mechanics are available?"
  ];

  for (let i = 0; i < testQuestions.length; i++) {
    const question = testQuestions[i];
    console.log(`\n${i + 1}. Testing: "${question}"`);
    
    try {
      const response = await fetch('http://localhost:3001/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          context: 'Testing AI assistant with knowledge base'
        })
      });

      const data = await response.json();
      
      if (data.response) {
        console.log('✅ Response received:');
        console.log(`   ${data.response.substring(0, 200)}...`);
      } else if (data.error) {
        console.log('❌ Error:', data.error);
      } else {
        console.log('⚠️  No response received');
      }
    } catch (error) {
      console.log('❌ Network error:', error.message);
    }
    
    // Wait a bit between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n🎉 AI Assistant testing completed!');
  console.log('\n📋 To test manually:');
  console.log('1. Open your browser to: http://localhost:3000');
  console.log('2. Scroll down to the AI Assistant section');
  console.log('3. Try asking the same questions');
}

// Run the test
testAIAssistant(); 