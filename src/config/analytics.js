// Analytics Configuration
export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: process.env.REACT_APP_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID',
  
  // Event Categories
  EVENT_CATEGORIES: {
    USER_ENGAGEMENT: 'user_engagement',
    AI_ASSISTANT: 'ai_assistant',
    GAMIFICATION_FEATURES: 'gamification_features',
    CONVERSIONS: 'conversions',
    NAVIGATION: 'navigation'
  },
  
  // Event Names
  EVENTS: {
    PAGE_VIEW: 'page_view',
    AI_INTERACTION: 'ai_assistant_interaction',
    FEATURE_USAGE: 'feature_usage',
    CONVERSION: 'conversion',
    BUTTON_CLICK: 'button_click',
    FORM_SUBMIT: 'form_submit',
    SCROLL_DEPTH: 'scroll_depth',
    TIME_ON_PAGE: 'time_on_page'
  },
  
  // Custom Parameters
  CUSTOM_PARAMETERS: {
    AI_ASSISTANT_USAGE: 'ai_assistant_usage',
    GAMIFICATION_FEATURES: 'gamification_features',
    GAMELAYER_AI: 'gamelayer_ai',
    GAMELAYER_CONVERSION: 'gamelayer_conversion'
  },
  
  // Feature Names for Tracking
  FEATURES: {
    AI_CHAT: 'ai_chat',
    HERO_SECTION: 'hero_section',
    FEATURES_SECTION: 'features_section',
    PRICING_SECTION: 'pricing_section',
    REFERENCES_SECTION: 'references_section',
    API_DOCS: 'api_docs',
    DASHBOARD: 'dashboard'
  },
  
  // Conversion Types
  CONVERSIONS: {
    AI_CHAT_START: 'ai_chat_start',
    API_DOCS_VIEW: 'api_docs_view',
    DASHBOARD_ACCESS: 'dashboard_access',
    CONTACT_FORM: 'contact_form',
    PRICING_VIEW: 'pricing_view'
  }
};

// Helper function to check if analytics is enabled
export const isAnalyticsEnabled = () => {
  return process.env.NODE_ENV === 'production' && 
         ANALYTICS_CONFIG.GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID';
};

// Helper function to get GA measurement ID
export const getGAMeasurementId = () => {
  return ANALYTICS_CONFIG.GA_MEASUREMENT_ID;
}; 