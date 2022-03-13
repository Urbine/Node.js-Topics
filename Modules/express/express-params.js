const express = require('express');
const app = express();
// File containing JSON objects
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1><br><a href="/api/products">Products</a>`);
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// Route parameters
app.get('/api/products/:id', (req, res) => {
  const {id} = req.params 
  const singleProduct = products.find((product)=> product.id === Number(id))
  // If id is not found
  if (!id) {
    return res.status(404).send('Product does not exist.')
  }
  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});



