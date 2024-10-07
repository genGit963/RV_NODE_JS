/**
 * https://nodejs.org/docs/latest-v22.x/api/console.html#class-console
 * 
 * Class: Console
        new Console(stdout[, stderr][, ignoreErrors])
        new Console(options)
            console.assert(value[, ...message])
            console.clear()
            console.count([label])
            console.countReset([label])
            console.debug(data[, ...args])
            console.dir(obj[, options])
            console.dirxml(...data)
            console.error([data][, ...args])
            console.group([...label])
            console.groupCollapsed()
            console.groupEnd()
            console.info([data][, ...args])
            console.log([data][, ...args])
            console.table(tabularData[, properties])
            console.time([label])
            console.timeEnd([label])
            console.timeLog([label][, ...data])
            console.trace([message][, ...args])
            console.warn([data][, ...args])

Inspector only methods
            console.profile([label])
            console.profileEnd([label])
            console.timeStamp([label])
 */

/*
 * Console provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

    "node:console" module exports two specific components:
        1.  A Console class with methods such as 
            console.log(), console.error(), and console.warn() 
            that can be used to write to any "Node.js stream".

        2.  A global console instance configured to write 
            to process.stdout and process.stderr. 
            The global console can be used without calling require('node:console').
 */

console.log("hello world");
// Prints: hello world, to stdout
console.log("hello %s", "world");
// Prints: hello world, to stdout
console.error(new Error("Whoops, something bad happened"));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

const name1 = "Will Robinson";
console.warn(`Danger ${name1}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr

// const output = createWriteStream("./stdout.log");
// const errorOutput = createWriteStream("./stderr.log");
// defining our own logger
// const logger = new Console({ stdout: output, stderr: errorOutput });
// use it like console
// const count = 5;
// logger.log("count: %d", count);
// In stdout.log: count 5

console.assert(false, "this will assert");
console.clear();
console.count([2, 4, 5, 5, 3]);
// console.countReset([label])
// console.debug(data[, ...args])
// console.dir(obj[, options])
// console.dirxml(...data)
// console.error([data][, ...args])
// console.group([...label])
// console.groupCollapsed()
// console.groupEnd()
// console.info([data][, ...args])
// console.log([data][, ...args])
// console.table(tabularData[, properties])
// console.time([label])
// console.timeEnd([label])
// console.timeLog([label][, ...data])
// console.trace([message][, ...args])
// console.warn([data][, ...args])

console.log("----------------------------------------------------------");
