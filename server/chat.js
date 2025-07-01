const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const router = express.Router();

// Add CORS middleware to the router
router.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ASSISTANT_ID = process.env.ASSISTANT_ID || "asst_lzs07OeXOmexQ1zNiohi1lPB";

router.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.' 
      });
    }

    // Create thread
    const threadRes = await axios.post('https://api.openai.com/v1/threads', {}, {
      headers: { Authorization: `Bearer ${OPENAI_API_KEY}` }
    });
    const threadId = threadRes.data.id;

    // Post message to thread
    await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/messages`,
      { role: 'user', content: userMessage },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    // Run assistant on thread
    const run = await axios.post(
      `https://api.openai.com/v1/threads/${threadId}/runs`,
      { assistant_id: ASSISTANT_ID },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    // Wait for completion
    let status, result;
    do {
      await new Promise((r) => setTimeout(r, 2000));
      result = await axios.get(
        `https://api.openai.com/v1/threads/${threadId}/runs/${run.data.id}`,
        { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
      );
      status = result.data.status;
    } while (status !== 'completed');

    // Get final messages
    const messages = await axios.get(
      `https://api.openai.com/v1/threads/${threadId}/messages`,
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );

    const reply = messages.data.data.find(m => m.role === 'assistant');
    res.json({ reply: reply?.content[0]?.text?.value || "No reply." });
  } catch (err) {
    console.error('Error talking to assistant:', err);
    
    // Provide fallback response on any error
    const fallbackResponse = 'GameLayer\'s API provides powerful gamification tools for building engaging user experiences. The API includes features for missions, achievements, leaderboards, rewards, and more. For implementation guidance, check the GameLayer documentation or contact their support team.';
    
    res.json({ 
      reply: fallbackResponse,
      note: 'Using fallback response due to API error. Please try again later.'
    });
  }
});

module.exports = router; 