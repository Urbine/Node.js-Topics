// Streams 
// Writable => Write data sequentially
// Readable => Read data sequentially
// Duplex => Both read/write data sequentially
// Transform => Modify data while reading or writing.

// Streams also extends the EventEmitter class.

const { createReadStream } = require('fs');

const stream = createReadStream('./content/subfolder/big.txt',
  { highWaterMark: 90000 }, { encoding: 'utf8' }
);

// Reading data in chunks.
// default 64kb
// Last buffer - remainder
// highWaterMark - Control size
// encoding - display
stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => {
  console.log(err);
});