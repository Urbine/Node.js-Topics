const express = require('express');
const app = express();
// File containing JSON objects
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1><br><a href="/api/products">Products</a>`);
});

// query can extract parameter provided by the user. 
// if there are no parameters, I should return the all the items.
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  // Whenever if blocks are used, the return keyword should be present.
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    return sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search')
    return res.status(200).json({ success: "true", data: [] });
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});



