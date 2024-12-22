import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    loggingLevelConsole: 2,
    instrumentationKey: import.meta.env.VITE_APP_INSIGHTS_INSTRUMENTATION_KEY, // Replace with your Application Insights key
    enableAutoRouteTracking: true, // Automatically track route changes
  },
});

appInsights.loadAppInsights();

// Export the appInsights instance for use in other parts of your app
export default appInsights;
