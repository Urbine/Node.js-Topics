const http = require('http');
const { readFileSync } = require('fs');

// Get files 
const homePage = readFileSync('./navbar/index.html');
const homeStyles = readFileSync('./navbar/styles.css');
const homeImage = readFileSync('./navbar/logo.svg');
const homeLogic = readFileSync('./navbar/browser-app.js');

const server = http.createServer((req, res) => {
  // console.log(req.method);
  const url = req.url;
  console.log(url);
  // Home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }); // MIME Type text/html
    res.write(homePage);
    res.end();
  }
  // Styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' }); // MIME Type is text/css
    res.write(homeStyles);
    res.end();
  }
  // Home Image
  else if (url == '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' }); // MIME Type is image/svg+xml
    res.write(homeImage);
    res.end();
  }
  // Logic
  else if (url == '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' }); // MIME Type is text/javascript
    res.write(homeLogic);
    res.end();
  }
  // 404- Not found
  else {
    res.writeHead(404, { 'content-type': 'text/html' }); // MIME Type text/html
    res.write('<h1 style="color:red">PAGE NOT FOUND</h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('Listening on port 5000');
});