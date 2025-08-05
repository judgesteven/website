const express = require('express');
const { getEnhancedResponse } = require('./server/knowledge_base');

const app = express();
app.use(express.json());

app.post('/test', async (req, res) => {
  try {
    console.log('Received request:', req.body.message);
    const response = await getEnhancedResponse(req.body.message);
    console.log('Response generated successfully');
    res.json({ response });
  } catch (error) {
    console.error('Error:', error.message);
    res.json({ error: error.message });
  }
});

app.listen(3002, () => {
  console.log('Test server running on port 3002');
}); 