#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎮 GameLayer Setup Script');
console.log('========================\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('✅ .env file already exists');
} else {
  console.log('📝 Creating .env file...');
  
  const envContent = `# OpenAI API Configuration
# Get your API key from: https://platform.openai.com/account/api-keys
OPENAI_API_KEY=your_openai_api_key_here

# Email Configuration (for access requests)
# For Gmail, you'll need to create an App Password: https://support.google.com/accounts/answer/185833
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here

# Server Configuration
PORT=3001
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully');
}

console.log('\n📋 Next Steps:');
console.log('1. Edit the .env file and add your OpenAI API key');
console.log('2. Get your API key from: https://platform.openai.com/account/api-keys');
console.log('3. Run: npm start (for React app)');
console.log('4. Run: node server.js (for backend server)');
console.log('\n💡 The AI assistant will work with fallback responses even without an API key!'); 