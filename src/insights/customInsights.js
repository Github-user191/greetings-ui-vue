import appInsights from './appInsights.js';

const trackCustomEvent = (eventName, eventData = {}) => {
    appInsights.trackEvent({
      name: eventName,
      properties: {
        ...eventData,
        timestamp: new Date().toISOString()
      }
    });
  };

  
  const trackError = (error, source) => {
    appInsights.trackException({
        exception: error,
        properties: {
            source: source,
            timestamp: new Date().toISOString()
        }
    });
  };


  export { trackError, trackCustomEvent}