// I can create a server using the Event Emitter API

const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();

// Emits request event
// Subscribe to it / Lister for it / Respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);