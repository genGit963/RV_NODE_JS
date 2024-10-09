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
    console.log("Given inputs are equal !!");
  }
});

// emit once: one-time listener
emitter.once("onceEmit", () => {
  console.log("This will run only one time");
});

// ------ Preparing Removers ------
const listenerFunc = () => {
  console.log("This will be removed");
  // do removal execution
  console.log("Transaction completed");
  console.log("Removed successfully !!");
};
emitter.on("removeableEvent", listenerFunc);

// Emit an event
emitter.emit("event");
console.log("checking if its in async processes !!");

// Emit args event
emitter.emit("event_with_args", 3, 3);

// Emit once
emitter.emit("onceEmit");

// remove
emitter.removeListener("removeableEvent", listenerFunc);

console.log("\n----------------------------------------------------------");
