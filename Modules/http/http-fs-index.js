const http = require('http');
const { readFileSync } = require('fs');

// Get files 
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  // Home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }); // MIME Type
    res.write(homePage);
    res.end();
  }
  // About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' }); // MIME Type
    res.write('<h1>About Page</h1>');
    res.end();
  }
  // 404- Not found
  else {
    res.writeHead(404, { 'content-type': 'text/html' }); // MIME Type
    res.write('<h1 style="color:red">PAGE NOT FOUND</h1>');
    res.end();
  }
  // console.log('User hit the server');
});

server.listen(5000, () => {
  console.log('Listening on port 5000');
});