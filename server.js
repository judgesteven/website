const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Import and use the chat route
const chatRouter = require('./server/chat');
app.use('/', chatRouter);

// OpenAI Assistant API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_ID = "asst_lzs07OeXOmexQ1zNiohi1lPB";

// OpenAI API endpoint using Assistant API
app.post('/api/gpt', async (req, res) => {
  try {
    const { message, context } = req.body;
    
    if (!OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.' 
      });
    }

    // Create a new thread
    const thread = await axios.post(
      "https://api.openai.com/v1/threads",
      {},
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    const thread_id = thread.data.id;

    // Add the user message to the thread
    await axios.post(
      `https://api.openai.com/v1/threads/${thread_id}/messages`,
      {
        role: "user",
        content: message,
      },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    // Run the assistant
    const run = await axios.post(
      `https://api.openai.com/v1/threads/${thread_id}/runs`,
      {
        assistant_id: ASSISTANT_ID,
      },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    // Poll for completion
    let run_status = null;
    do {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second between polls
      run_status = await axios.get(
        `https://api.openai.com/v1/threads/${thread_id}/runs/${run.data.id}`,
        { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
      );
    } while (run_status.data.status !== "completed");

    // Get the assistant's response
    const messages = await axios.get(
      `https://api.openai.com/v1/threads/${thread_id}/messages`,
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    const reply = messages.data.data.find(msg => msg.role === "assistant");
    const gptResponse = reply?.content[0]?.text?.value || "No response received.";

    res.json({ response: gptResponse });
  } catch (error) {
    console.error('Error calling OpenAI Assistant API:', error);
    
    // Provide fallback response on any error
    const fallbackResponse = 'GameLayer\'s API provides powerful gamification tools for building engaging user experiences. The API includes features for missions, achievements, leaderboards, rewards, and more. For implementation guidance, check the GameLayer documentation or contact their support team.';
    
    res.json({ 
      response: fallbackResponse,
      note: 'Using fallback response due to API error. Please try again later.'
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
  console.log(`GameLayer API Guru Assistant ID: ${ASSISTANT_ID}`);
  console.log(`Assistant API mode: Active`);
}); 