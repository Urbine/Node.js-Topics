const express = require('express');
const app = express();
// File containing JSON objects
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1><br><a href="/api/products">Products</a>`);
});

// Here I handle a request to a specific end point.
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
})

app.listen(5000, () => {
  console.log('Listening on port 5000');
});

