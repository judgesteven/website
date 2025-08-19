import React from 'react';

const ApiPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">API Documentation</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://gamelayer.io/api-docs.html"
            className="w-full"
            style={{ 
              height: '800px',
              border: 'none'
            }}
            title="GameLayer API Documentation"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
        <div className="mt-8 text-center">
          <a 
            href="/api-docs.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Open API Docs in New Window
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApiPage; 