const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("event", () => {
  console.log({ data: "Here will be data" });
});

// Arguments taker Listener
emitter.on("event_with_args", (arg1, arg2) => {
  if (arg1 !== arg2) {
    console.log("Given inputs are not equal !!");
  } else {
    console.log("Given inputs are equal");
  }
});

// Emit an event
emitter.emit("event");

// Emit args event
emitter.emit("event_with_args", 2, 3);
