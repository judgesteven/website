// API endpoint configuration for different environments
const getApiEndpoint = () => {
  // Check if we're in development (localhost) or production (Vercel)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Local development - use the proxy endpoint
    return '/chat/api/ai';
  } else {
    // Production (Vercel) - use the API route
    return '/api/chat/ai';
  }
};

export const sendMessage = async (message, conversationId) => {
  const endpoint = getApiEndpoint();
  
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

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}; 