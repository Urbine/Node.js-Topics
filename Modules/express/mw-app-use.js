const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

// Use middleware in all routes unless a certain
// route is passed in as a path parameter in app.use()
// Order does matter. Middleware functions first. 
// app.use('/api', logger); I could add '/api' in order to such routes.

// For adding functions is possible by using an array.
// Execution is in order. 

// Express also provides third party middlewares.

//app.use([logger, authorize]);

// Insert middleware
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

// Middleware can be passed in if I do not need this functinality
// in other functions.
app.get('/api/items', [logger, authorize] ,(req, res) => {
  res.send('Items');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});



