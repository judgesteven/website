const express = require('express');
const GamificationAI = require('./ai_assistant');

const router = express.Router();
const ai = new GamificationAI();

// Store conversation history (in production, use a database)
const conversations = new Map();

// Chat endpoint
router.post('/api/ai', async (req, res) => {
  try {
    const { message, conversationId = 'default' } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: 'Message is required'
      });
    }

    // Get conversation history
    let conversationHistory = conversations.get(conversationId) || [];
    
    // Add user message to history
    conversationHistory.push({
      role: 'user',
      content: message,
      timestamp: new Date()
    });

    // Process message with AI
    const aiResponse = await ai.processMessage(message, conversationHistory);

    // Add AI response to history
    conversationHistory.push({
      role: 'assistant',
      content: aiResponse.response,
      timestamp: new Date()
    });

    // Keep only last 10 messages to prevent context overflow
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    // Store updated conversation
    conversations.set(conversationId, conversationHistory);

    // Send response
    res.json({
      response: aiResponse.response,
      conversationId: conversationId,
      knowledgeBaseResults: aiResponse.knowledgeBaseResults || [],
      apiInfo: aiResponse.apiInfo || null,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process message'
    });
  }
});

// Get conversation history
router.get('/api/conversation/:conversationId', (req, res) => {
  try {
    const { conversationId } = req.params;
    const conversation = conversations.get(conversationId) || [];
    
    res.json({
      conversationId: conversationId,
      messages: conversation,
      messageCount: conversation.length
    });
  } catch (error) {
    console.error('Get conversation error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Clear conversation history
router.delete('/api/conversation/:conversationId', (req, res) => {
  try {
    const { conversationId } = req.params;
    conversations.delete(conversationId);
    
    res.json({
      message: 'Conversation cleared successfully',
      conversationId: conversationId
    });
  } catch (error) {
    console.error('Clear conversation error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Get available topics
router.get('/api/topics', (req, res) => {
  try {
    const topics = ai.getAvailableTopics();
    const stats = ai.getKnowledgeBaseStats();
    
    res.json({
      topics: topics,
      stats: stats,
      totalDocuments: stats.total_documents
    });
  } catch (error) {
    console.error('Get topics error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Search knowledge base directly
router.post('/api/search', async (req, res) => {
  try {
    const { query, limit = 5 } = req.body;

    if (!query || !query.trim()) {
      return res.status(400).json({
        error: 'Search query is required'
      });
    }

    const results = ai.knowledgeBase.search(query, limit);
    
    res.json({
      query: query,
      results: results,
      totalResults: results.length
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Get AI assistant status
router.get('/api/status', (req, res) => {
  try {
    const stats = ai.getKnowledgeBaseStats();
    
    res.json({
      status: 'active',
      knowledgeBase: {
        totalDocuments: stats.total_documents,
        categories: stats.categories,
        lastUpdated: new Date().toISOString()
      },
      apiDocs: ai.apiDocs ? 'loaded' : 'not available',
      model: 'gpt-4o-mini',
      specialization: 'Gamification & GameLayer Platform'
    });
  } catch (error) {
    console.error('Status error:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

module.exports = router; 