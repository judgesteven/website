import React, { useEffect } from 'react';

const ApiPage = () => {
  useEffect(() => {
    // Load RapiDoc script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/rapidoc@9.3.8/dist/rapidoc-min.js';
    document.head.appendChild(script);

    // Add CSS to fix RapiDoc positioning issues
    const style = document.createElement('style');
    style.textContent = `
      rapi-doc {
        position: relative !important;
        height: auto !important;
        min-height: 100vh !important;
        max-height: none !important;
        overflow: visible !important;
        top: auto !important;
        left: auto !important;
        right: auto !important;
        bottom: auto !important;
        z-index: auto !important;
      }
      
      rapi-doc * {
        position: relative !important;
        height: auto !important;
        max-height: none !important;
        overflow: visible !important;
      }
      
      body {
        overflow-y: auto !important;
        height: auto !important;
        position: relative !important;
      }
      
      html {
        overflow-y: auto !important;
        height: auto !important;
        position: relative !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="pt-16" style={{ position: 'relative', height: 'auto', overflow: 'visible' }}>
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
        update-route="false"
        layout="column"
        regular-font="montserrat"
        nav-item-spacing="relaxed"
        nav-bg-color="#f5f5f5"
        primary-color="#4A90E2"
      />
    </div>
  );
};

export default ApiPage; 