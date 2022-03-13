// Asynchronously (non-blocking)

const { readFile, writeFile } = require('fs');

console.log('Start task');

// It works asynchronously by using a callback functions.  
readFile('./Content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./Content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./Content/result-sync.txt',
      `Here is the result: "${first}" and "${second}"`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Done with this task');
      });
  });
});
console.log('Starting next one');
