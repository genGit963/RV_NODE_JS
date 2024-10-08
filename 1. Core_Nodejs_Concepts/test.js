const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("event", () => {
  console.log("An event occurred!");
});

// Emit an event
emitter.emit("event");
