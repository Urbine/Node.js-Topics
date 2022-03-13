// We have a couple of ways of interacting with the file system:
// Asynchronously (non-blocking) or Synchronously (blocking)

const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs')
// fs.readFileSync()

console.log('start');

// This is used to read a file. 
const first = readFileSync('./Content/first.txt', 'utf-8');
const second = readFileSync('./Content/second.txt', 'utf-8');

console.log(first);
console.log(second);

// Creating a file.
writeFileSync(
  './Content/result-sync.txt',
  `Here is the result: "${first}" and "${second}"`,
  // Creates a new value.
  { flag: 'a' }
);

console.log('Done with the task');
console.log('Starting the next one');


