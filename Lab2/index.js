/*const appInsights = require('applicationinsights');
appInsights.setup(process.env.APPINSIGHTS_CONNECTION_STRING)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  .setAutoDependencyCorrelation(true)
  .start();*/


const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (_, res) => {
  res.send('Hello World!');
});

// Only listen on execution and not for tests
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}`);
    });
}

module.exports = app;