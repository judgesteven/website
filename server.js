const express = require('express');
const cors = require('cors');
const path = require('path');
const OpenAI = require('openai');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:3001',
    'https://gamelayer-webapp.vercel.app',
    'https://gamelayer-webapp-git-main-judgesteven.vercel.app',
    'https://gamelayer-webapp-judgesteven.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Import and use the chat route
const chatRouter = require('./server/chat');
app.use('/chat', chatRouter);

// OpenAI configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Import knowledge base module
const { getEnhancedResponse } = require('./server/knowledge_base');

// Enhanced GPT API endpoint with knowledge base integration
app.post('/api/gpt', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    // OpenAI API key is handled in the knowledge base module

    // Get enhanced response with knowledge base context
    const gptResponse = await getEnhancedResponse(message);

    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error calling enhanced GPT-4o-mini:', error);
    
    // Provide fallback response on any error
    const fallbackResponse = 'GameLayer\'s API provides powerful gamification tools for building engaging user experiences. The API includes features for missions, achievements, leaderboards, rewards, and more. For implementation guidance, check the GameLayer documentation or contact their support team.';
    
    res.json({ 
      response: fallbackResponse,
      note: 'Using fallback response due to API error. Please try again later.'
    });
  }
});

// Email endpoint for access requests
app.post('/api/request-access', async (req, res) => {
  try {
    const { name, email, project } = req.body;
    
    // Validate required fields
    if (!name || !email || !project) {
      return res.status(400).json({ 
        error: 'All fields are required: name, email, and project' 
      });
    }

    // Create transporter (using Gmail for this example)
    // You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'steve@gamelayer.co',
      subject: 'New GameLayer Access Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Access Request</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #666; margin-top: 0;">Request Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              ${project.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This request was submitted from the GameLayer website access form.
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Access request sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send access request. Please try again later.' 
    });
  }
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`OpenAI API Key configured: ${OPENAI_API_KEY ? 'Yes' : 'No'}`);
  console.log(`GPT-4o-mini model: Active`);
  console.log(`Gamification & GameLayer Assistant: Ready`);
}); 