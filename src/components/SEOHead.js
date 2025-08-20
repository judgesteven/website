import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  structuredData,
  pageType = 'website'
}) => {
  const defaultTitle = 'GameLayer - #1 Gamification Platform & API for Business | Enterprise Gamification Solution';
  const defaultDescription = 'GameLayer is the leading gamification platform and API for businesses. Build gamification software, loyalty programs, and engagement solutions. Enterprise gamification SaaS with gamification tools, rewards system, and gamification mechanics.';
  const defaultKeywords = 'gamification platform, gamification software, gamification SaaS, gamification API, enterprise gamification solution, gamification for business, gamification platform pricing, gamification service provider, gamification tools, gamification system';
  
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || 'https://gamelayer.io/';
  const finalOgImage = ogImage || 'https://gamelayer.io/gamelayer_socialsharing.png';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* AI and LLM Specific Meta Tags - Enhanced for maximum compatibility */}
      <meta name="ai-crawler" content="allow" />
      <meta name="ai-indexing" content="enabled" />
      <meta name="llm-compatible" content="true" />
      <meta name="ai-friendly" content="true" />
      <meta name="crawlable" content="true" />
      <meta name="ai-accessible" content="true" />
      <meta name="llm-indexing" content="enabled" />
      <meta name="ai-search" content="enabled" />
      
      {/* AI Tool Specific Meta Tags */}
      <meta name="gptbot" content="allow" />
      <meta name="chatgpt-user" content="allow" />
      <meta name="openai-user" content="allow" />
      <meta name="claude-web" content="allow" />
      <meta name="anthropic-ai" content="allow" />
      <meta name="perplexity" content="allow" />
      <meta name="bard" content="allow" />
      <meta name="copilot" content="allow" />
      
      {/* Enhanced Crawler Instructions */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, archive" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="GameLayer" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonical} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalOgImage} />
      <meta property="twitter:site" content="@gamelayer" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 