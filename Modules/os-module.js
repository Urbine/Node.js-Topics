// OS Module
const { on } = require('events');
const os = require('os');

// Gathering information about current user.
const user = os.userInfo();
console.log(user);

// This method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime} in seconds and ${os.uptime() / 60} in hours`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

console.log(currentOS);