const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - Listen for a specific event
// emit - emit an event

customEmitter.on('response', (name, id) => {
  console.log(`Data received ${name} with ID ${id}`);
});

// I can have as many methods tied to the same event.
customEmitter.on('response', () => {
  console.log(`This is another method `);
});

// Emit order does matter
// I can also pass in parameters when I emit the event.
// If the other event does not have parameters it's okay.
// The app is not going to break.  

// Built in methods use Event Emitter. 
customEmitter.emit('response', 'gabriel', 24);

