import { clientSideAI } from './aiAssistant';

// API endpoint configuration for different environments
const getApiEndpoint = () => {
  // Check if we're in development (localhost) or production (Vercel)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Local development - use the proxy endpoint
    return '/chat/api/ai';
  } else {
    // Production (Vercel) - use the simplified API route
    return '/api/chat-ai';
  }
};

export const sendMessage = async (message, conversationId) => {
  const endpoint = getApiEndpoint();
  
  console.log('Sending message to:', endpoint);
  console.log('Current hostname:', window.location.hostname);
  console.log('Current URL:', window.location.href);
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        conversationId
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      
      // Special handling for 404 errors
      if (response.status === 404) {
        console.log('API endpoint not found, using client-side AI as fallback');
        return await clientSideAI.sendMessage(message, conversationId);
      }
      
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API Call Error:', error);
    
    // Use client-side AI as fallback for any errors
    console.log('Using client-side AI as fallback due to API error');
    return await clientSideAI.sendMessage(message, conversationId);
  }
}; 