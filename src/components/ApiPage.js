import React, { useEffect } from 'react';

const ApiPage = () => {
  useEffect(() => {
    // Load RapiDoc script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/rapidoc@9.3.8/dist/rapidoc-min.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white pt-16" style={{ height: 'auto', overflow: 'visible' }}>
      {/* RapiDoc component with extensive configuration options */}
      <rapi-doc
        spec-url="https://glapidocs.blob.core.windows.net/apidocs/gamelayer.yaml"
        theme="light"
        render-style="read"  
        show-header="false" 
        show-info="true"    
        show-components="true" 
        show-authentication="true" 
        allow-spec-file-download="true" 
        allow-server-selection="true" 
        schema-style="table"
        schema-expand-level="3" 
        default-schema-tab="example"      
        default-api-server="production" 
        use-path-in-nav-bar="true"        
        show-method-in-nav-bar="as-colored-block" 
        update-route="true"    
        layout="column"   
        regular-font="montserrat"
        nav-item-spacing="relaxed"
        nav-bg-color="#f5f5f5" 
        primary-color="#4A90E2"
        style={{ height: 'auto', overflow: 'visible' }}
      ></rapi-doc>
    </div>
  );
};

export default ApiPage; 