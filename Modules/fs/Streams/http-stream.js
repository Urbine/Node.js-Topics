var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/subfolder/big.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/subfolder/big.txt', 'utf-8');
    fileStream.on('open', () => {
      //  The pipe pushes from readStream to writeStream
      // Reading or writing can be made in chunks
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000);

