import { ApplicationInsights } from '@microsoft/applicationinsights-web';



const appInsights = new ApplicationInsights({
  config: {
    connectionString: import.meta.env.VITE_APPLICATIONINSIGHTS_CONNECTION_STRING,
    instrumentationKey: import.meta.env.VITE_APPINSIGHTS_INSTRUMENTATIONKEY,
    enableAutoRouteTracking: true, // Automatically track route changes
  }
});

console.log(appInsights.config)


// Initialize the Application Insights
appInsights.loadAppInsights();
appInsights.trackPageView(); // Track the initial page view
export default appInsights;




