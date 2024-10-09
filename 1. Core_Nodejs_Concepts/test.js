const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("event", () => {
  console.log({ data: "Here will be data" });
});

// Emit an event
emitter.emit("event");
