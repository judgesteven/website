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
  const finalCanonical = canonical || 'https://gamelayer.com/';
  const finalOgImage = ogImage || 'https://gamelayer.com/gamelayer_socialsharing.png';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="GameLayer" />
      <meta property="og:locale" content="en_US" />
      
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