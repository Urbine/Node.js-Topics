const express = require('express');
const app = express();

// req => middleware => res
// The next function mut be there unless I send the definitive response
// from the middleware.
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

// Insert middleware
app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});


app.listen(5000, () => {
  console.log('Listening on port 5000');
});



