const path = require('path');

// path.sep is a platform specific separator 
console.log(path.sep);

// path.join joins a sequence of path segments using the plaform
// specific separator. It also returns a normalised resulting path.

const filePath = path.join('/Content', 'Subfolder', 'text.txt');
console.log(filePath);

// This returns the last part of the path.
const base = path.basename(filePath);
console.log(base);

// path.resolve returns an absolute path.
const absolute = path.resolve(__dirname, 'Content', 'Subfolder', 'text.txt');
console.log(absolute);