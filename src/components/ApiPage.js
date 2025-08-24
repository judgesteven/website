import React, { useEffect, useRef } from 'react';
import SEOHead from './SEOHead';

const ApiPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load RapiDoc script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/rapidoc@9.3.8/dist/rapidoc-min.js';
    
    script.onload = () => {
      // Create the rapi-doc element after script loads
      if (containerRef.current) {
        const rapiDoc = document.createElement('rapi-doc');
        rapiDoc.setAttribute('spec-url', 'https://glapidocs.blob.core.windows.net/apidocs/gamelayer.yaml');
        rapiDoc.setAttribute('theme', 'light');
        rapiDoc.setAttribute('render-style', 'read');
        rapiDoc.setAttribute('show-header', 'false');
        rapiDoc.setAttribute('show-info', 'true');
        rapiDoc.setAttribute('show-components', 'true');
        rapiDoc.setAttribute('show-authentication', 'true');
        rapiDoc.setAttribute('allow-spec-file-download', 'true');
        rapiDoc.setAttribute('allow-server-selection', 'true');
        rapiDoc.setAttribute('schema-style', 'table');
        rapiDoc.setAttribute('schema-expand-level', '3');
        rapiDoc.setAttribute('default-schema-tab', 'example');
        rapiDoc.setAttribute('default-api-server', 'production');
        rapiDoc.setAttribute('use-path-in-nav-bar', 'true');
        rapiDoc.setAttribute('show-method-in-nav-bar', 'as-colored-block');
        rapiDoc.setAttribute('update-route', 'false');
        rapiDoc.setAttribute('layout', 'column');
        rapiDoc.setAttribute('regular-font', 'montserrat');
        rapiDoc.setAttribute('nav-item-spacing', 'relaxed');
        rapiDoc.setAttribute('nav-bg-color', '#f5f5f5');
        rapiDoc.setAttribute('primary-color', '#4A90E2');
        rapiDoc.style.width = '100%';
        rapiDoc.style.height = 'calc(100vh - 64px)';
        
        containerRef.current.appendChild(rapiDoc);
      }
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-16">
      <SEOHead title="API Documentation" description="Detailed API documentation for the GameLayer platform." />
      <div ref={containerRef} className="w-full h-screen">
        {/* RapiDoc will be inserted here */}
      </div>
    </div>
  );
};

export default ApiPage; 