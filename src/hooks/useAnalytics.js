import { useCallback } from 'react';

// Analytics tracking hook
export const useAnalytics = () => {
  const trackEvent = useCallback((eventName, parameters = {}) => {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'user_engagement',
        event_label: parameters.label || 'gamelayer_interaction',
        value: parameters.value || 1,
        ...parameters
      });
    }
    
    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback((pageName, pagePath) => {
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-4T24BJP830', {
        page_title: pageName,
        page_location: pagePath
      });
    }
  }, []);

  const trackAIInteraction = useCallback((interactionType, messageLength = 0) => {
    trackEvent('ai_assistant_interaction', {
      event_category: 'ai_assistant',
      event_label: interactionType,
      value: messageLength,
      custom_parameter_1: interactionType,
      custom_parameter_2: 'gamelayer_ai'
    });
  }, [trackEvent]);

  const trackFeatureUsage = useCallback((featureName, action = 'view') => {
    trackEvent('feature_usage', {
      event_category: 'gamification_features',
      event_label: featureName,
      custom_parameter_1: featureName,
      custom_parameter_2: action
    });
  }, [trackEvent]);

  const trackConversion = useCallback((conversionType, value = 0) => {
    trackEvent('conversion', {
      event_category: 'conversions',
      event_label: conversionType,
      value: value,
      custom_parameter_1: conversionType,
      custom_parameter_2: 'gamelayer_conversion'
    });
  }, [trackEvent]);

  return {
    trackEvent,
    trackPageView,
    trackAIInteraction,
    trackFeatureUsage,
    trackConversion
  };
}; 