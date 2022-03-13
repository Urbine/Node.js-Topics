// CommonJS, every file is as module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./module-names');

const greet = require('./module-greet');

const person = require('./alt-flavor');

require('./example-2');

greet(names.urbine);
greet(names.gabriel);
greet('visitor');

console.log(person);
