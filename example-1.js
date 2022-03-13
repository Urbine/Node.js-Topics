const amount = 17;

if (amount < 20) {
  console.log('Small number');
} else {
  console.log('Large Number');
}

console.log(' This is my first example of a Node.js app');

// __dirname -> The path to current directory
// __filename -> File name
// require -> A function to use modules (as it is used in CommonJS)
// module -> Info about the currnt file (module)
// process -> Environment information (where the program is being executed)

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  console.log('Running');
}, 1000); // Also setTimeout
