const http = require('http');

const port_num = 5000;

// This is a basic example, however, requests are not tipically
// handled in this way. This is just illustrative.
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to my web page');
  }
  if (req.url === '/about') {
    res.end('This simple page is part of a demo web server with the Node.js technology');
  }
  // console.log(req) this will return a huge object in the console.
  // This file contains useful information. 
  res.end(`
    <h1>Sorry!</h1>
    <p> We are unable to process your request</p>
    <a href="localhost:${port_num}">Back to the home page</>
    `);
});

server.listen(port_num, () => {
  console.log(`Listening at port ${port_num}...`);
});