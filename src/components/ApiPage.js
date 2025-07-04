import React from 'react';

const ApiPage = () => {
  return (
    <div className="pt-16">
      <iframe
        src="/api-docs.html"
        className="w-full"
        style={{ 
          height: 'calc(100vh - 64px)',
          border: 'none'
        }}
        title="API Documentation"
      />
    </div>
  );
};

export default ApiPage; 