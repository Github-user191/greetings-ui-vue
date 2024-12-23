import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_APPLICATIONINSIGHTS_CONNECTION_STRING,
    loggingLevelConsole: 2,
    enableAutoRouteTracking: true, // Automatically track route changes
  },
});

appInsights.loadAppInsights();
appInsights.trackPageView();

export default appInsights;
