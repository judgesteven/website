import React from 'react';

const ApiPage = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">API Documentation</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://editor.swagger.io/?url=https://glapidocs.blob.core.windows.net/apidocs/gamelayer.yaml"
            className="w-full"
            style={{ 
              height: 'calc(100vh - 200px)',
              border: 'none',
              minHeight: '600px'
            }}
            title="API Documentation"
            sandbox="allow-scripts allow-same-origin allow-forms"
          />
        </div>
      </div>
    </div>
  );
};

export default ApiPage; 