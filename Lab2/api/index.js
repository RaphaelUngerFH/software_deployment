const appInsights = require('applicationinsights');
appInsights.setup(process.env.APPINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .setAutoDependencyCorrelation(true)
  .start();

const { app } = require('@azure/functions');

app.setup({
    enableHttpStream: true,
});