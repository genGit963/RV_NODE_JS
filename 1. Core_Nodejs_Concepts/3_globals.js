//         3. Globals – Understand Node.js global objects (like `__dirname`, `process`, etc.).

// --------------- Classified by Functionality---------------
/*
Global Objects Classified by Functionality

1. Abort and Signal Management
    - AbortController
        - abortController.abort([reason]): Cancels an ongoing operation.
        - abortController.signal: Provides an AbortSignal associated with the controller.
    - AbortSignal
        - Static method: AbortSignal.abort([reason]): Creates a new abort signal that is already set to abort.
        - Static method: AbortSignal.timeout(delay): Creates a signal that aborts after a specific delay.
        - Static method: AbortSignal.any(signals): Returns a signal that aborts as soon as any of the given signals aborts.
        - abortSignal.aborted: A boolean indicating whether the signal has been aborted.
        - abortSignal.onabort: An event handler that is called when the abort signal is triggered.
        - abortSignal.reason: Provides the reason why the operation was aborted.
        - abortSignal.throwIfAborted(): Throws an exception if the signal has been aborted.

2. Data Handling
    - Blob: Represents immutable, raw data.
    - Buffer: Used for handling binary data directly in Node.js.
    - FormData: A way to construct a set of key/value pairs representing form fields and their values.
    - StructuredClone(value[, options]): Creates a deep copy of a value.

3. Streams and Queuing Strategies
    - ByteLengthQueuingStrategy: Controls the queue for streams based on byte length.
    - CountQueuingStrategy: Controls the queue for streams based on a count of items.
    - ReadableStream: Represents a readable stream.
    - ReadableByteStreamController: Controls a readable byte stream.
    - ReadableStreamBYOBReader: A reader for readable streams with a "bring your own buffer" strategy.
    - ReadableStreamBYOBRequest: Represents a request for a readable stream using a "bring your own buffer" strategy.
    - ReadableStreamDefaultController: Controls a default readable stream.
    - ReadableStreamDefaultReader: A reader for a default readable stream.
    - TransformStream: A stream that can transform data as it is read or written.
    - TransformStreamDefaultController: Controls a default transform stream.
    - WritableStream: Represents a writable stream.
    - WritableStreamDefaultController: Controls a default writable stream.
    - WritableStreamDefaultWriter: A writer for a default writable stream.

4. Networking and Communication
    - fetch: A method to make network requests similar to XMLHttpRequest.
    - Response: Represents the response to a network request.
    - Request: Represents a network request.
    - BroadcastChannel: Allows communication between different contexts (like iframes, tabs, or workers).
    - MessageChannel: Allows two-way communication between different contexts (like iframes, tabs, or workers).
    - MessageEvent: Represents an event sent through the MessageChannel.
    - MessagePort: Represents one end of a MessageChannel.
    - WebSocket: A protocol for full-duplex communication channels over a single TCP connection.

5. Performance and Monitoring
    - PerformanceEntry: Represents a performance-related entry.
    - PerformanceMark: Represents a custom mark in the Performance API.
    - PerformanceMeasure: Represents a measure of performance in the Performance API.
    - PerformanceObserver: Observes performance-related events.
    - PerformanceObserverEntryList: A list of entries observed by a PerformanceObserver.
    - PerformanceResourceTiming: Provides timing information for resources.
    - performance: Provides access to performance-related information.

6. Cryptography
    - Crypto: Provides cryptographic functionality (includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions).
    - CryptoKey: Represents a cryptographic key.
    - SubtleCrypto: Provides low-level cryptographic operations.

7. Error Handling
    - DOMException: Represents an error that occurs in the Document Object Model.

8. Console and Logging
    - console: Standard output for logging information and debugging.

9. Global Scope and Environment
    - global: The global context in which Node.js runs.
    - process: Provides information and control over the current Node.js process.
    - __dirname: Directory name of the current module.
    - __filename: File name of the current module.
    - module: The current module in Node.js.

10. Timers and Scheduling
    - setImmediate(callback[, ...args]): Executes a single callback after the current event loop.
    - setInterval(callback, delay[, ...args]): Repeatedly calls a function at specified intervals.
    - setTimeout(callback, delay[, ...args]): Executes a function after a specified delay.
    - clearImmediate(immediateObject): Cancels an immediate action.
    - clearInterval(intervalObject): Stops a function from being called repeatedly.
    - clearTimeout(timeoutObject): Stops a function from being executed after a delay.

11. Encoding and Decoding
    - atob(data): Decodes a base-64 encoded string.
    - btoa(data): Creates a base-64 encoded ASCII string.
    - TextDecoder: Decodes a text from a stream of bytes.
    - TextDecoderStream: A stream that decodes text using a TextDecoder.
    - TextEncoder: Encodes a string into a stream of bytes.
    - TextEncoderStream: A stream that encodes text using a TextEncoder.

12. Storage and Caching
    - localStorage: Provides access to a storage object for storing data in a web browser.
    - sessionStorage: Provides access to a storage object for storing data for the duration of the page session.

13. URL Handling
    - URL: Represents an object providing a standardized way to parse and manipulate URLs.
    - URLSearchParams: Provides utility methods to work with the query string of a URL.

14. Events and Event Handling
    - Event: Represents an event in the event-driven model.
    - EventTarget: The base class for objects that can receive events.
    - CustomEvent: A way to create custom events.

15. Navigator and User Environment
    - Navigator: Provides information about the application and its environment.
    - navigator: The global object providing access to the browser's Navigator interface.
    - navigator.hardwareConcurrency: The number of logical processor cores available.
    - navigator.language: The preferred language of the user.
    - navigator.languages: An array of preferred languages for the user.
    - navigator.platform: The platform the browser is running on.
    - navigator.userAgent: The user-agent string for the current browser.
*/

// --------------- Alphabetical Order ---------------
/*
Global Objects and Their Uses

1. AbortController
    - abortController.abort([reason]): Cancels an ongoing operation.
    - abortController.signal: Provides an AbortSignal associated with the controller.

2. AbortSignal
    - Static method: AbortSignal.abort([reason]): Creates a new abort signal that is already set to abort.
    - Static method: AbortSignal.timeout(delay): Creates a signal that aborts after a specific delay.
    - Static method: AbortSignal.any(signals): Returns a signal that aborts as soon as any of the given signals aborts.
    - abortSignal.aborted: A boolean indicating whether the signal has been aborted.
    - abortSignal.onabort: An event handler that is called when the abort signal is triggered.
    - abortSignal.reason: Provides the reason why the operation was aborted.
    - abortSignal.throwIfAborted(): Throws an exception if the signal has been aborted.

3. Blob: Represents immutable, raw data.

4. Buffer: Used for handling binary data directly in Node.js.

5. ByteLengthQueuingStrategy: Controls the queue for streams based on byte length.

6. Globals
    - __dirname: Directory name of the current module.
    - __filename: File name of the current module.
    - atob(data): Decodes a base-64 encoded string.
    - BroadcastChannel: Allows communication between different contexts (like iframes, tabs, or workers).
    - btoa(data): Creates a base-64 encoded ASCII string.
    - clearImmediate(immediateObject): Cancels an immediate action.
    - clearInterval(intervalObject): Stops a function from being called repeatedly.
    - clearTimeout(timeoutObject): Stops a function from being executed after a delay.

7. CompressionStream: Provides a way to compress data streams.

8. console: Standard output for logging information and debugging.

9. CountQueuingStrategy: Controls the queue for streams based on a count of items.

10. Crypto
    - crypto: Provides cryptographic functionality (includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions).

11. CryptoKey: Represents a cryptographic key.

12. CustomEvent: A way to create custom events.

13. DecompressionStream: Provides a way to decompress data streams.

14. Event: Represents an event in the event-driven model.

15. EventTarget: The base class for objects that can receive events.

16. exports: Used to export modules in Node.js.

17. fetch: A method to make network requests similar to XMLHttpRequest.

18. File: Represents file objects.

19. FormData: A way to construct a set of key/value pairs representing form fields and their values.

20. global: The global context in which Node.js runs.

21. Headers: Represents HTTP headers.

22. localStorage: Provides access to a storage object for storing data in a web browser.

23. MessageChannel: Allows two-way communication between different contexts (like iframes, tabs, or workers).

24. MessageEvent: Represents an event sent through the MessageChannel.

25. MessagePort: Represents one end of a MessageChannel.

26. module: The current module in Node.js.

27. Navigator: Provides information about the application and its environment.

28. navigator: The global object providing access to the browser's Navigator interface.

29. navigator.hardwareConcurrency: The number of logical processor cores available.

30. navigator.language: The preferred language of the user.

31. navigator.languages: An array of preferred languages for the user.

32. navigator.platform: The platform the browser is running on.

33. navigator.userAgent: The user-agent string for the current browser.

34. PerformanceEntry: Represents a performance-related entry.

35. PerformanceMark: Represents a custom mark in the Performance API.

36. PerformanceMeasure: Represents a measure of performance in the Performance API.

37. PerformanceObserver: Observes performance-related events.

38. PerformanceObserverEntryList: A list of entries observed by a PerformanceObserver.

39. PerformanceResourceTiming: Provides timing information for resources.

40. performance: Provides access to performance-related information.

41. process: Provides information and control over the current Node.js process.

42. queueMicrotask(callback): Schedules a microtask to be executed.

43. ReadableByteStreamController: Controls a readable byte stream.

44. ReadableStream: Represents a readable stream.

45. ReadableStreamBYOBReader: A reader for readable streams with a "bring your own buffer" strategy.

46. ReadableStreamBYOBRequest: Represents a request for a readable stream using a "bring your own buffer" strategy.

47. ReadableStreamDefaultController: Controls a default readable stream.

48. ReadableStreamDefaultReader: A reader for a default readable stream.

49. require(): A function to include modules in Node.js.

50. Response: Represents the response to a network request.

51. Request: Represents a network request.

52. sessionStorage: Provides access to a storage object for storing data for the duration of the page session.

53. setImmediate(callback[, ...args]): Executes a single callback after the current event loop.

54. setInterval(callback, delay[, ...args]): Repeatedly calls a function at specified intervals.

55. setTimeout(callback, delay[, ...args]): Executes a function after a specified delay.

56. Storage: Represents a storage object for managing data.

57. structuredClone(value[, options]): Creates a deep copy of a value.

58. SubtleCrypto: Provides low-level cryptographic operations.

59. DOMException: Represents an error that occurs in the Document Object Model.

60. TextDecoder: Decodes a text from a stream of bytes.

61. TextDecoderStream: A stream that decodes text using a TextDecoder.

62. TextEncoder: Encodes a string into a stream of bytes.

63. TextEncoderStream: A stream that encodes text using a TextEncoder.

64. TransformStream: A stream that can transform data as it is read or written.

65. TransformStreamDefaultController: Controls a default transform stream.

66. URL: Represents an object providing a standardized way to parse and manipulate URLs.

67. URLSearchParams: Provides utility methods to work with the query string of a URL.

68. WebAssembly: A low-level bytecode format for executing code on the web.

69. WebSocket: A protocol for full-duplex communication channels over a single TCP connection.

70. WritableStream: Represents a writable stream.

71. WritableStreamDefaultController: Controls a default writable stream.

72. WritableStreamDefaultWriter: A writer for a default writable stream.
*/

console.log("--dirname : ", __dirname);
console.log("--filename : ", __filename);

console.log(Object);
console.log(globalThis);

// performance
console.log(Performance);
console.log("PerformanceResourceTiming: ", PerformanceResourceTiming);
console.log("----------------------------------------------------------\n");

// navigator
console.log("navigator.language: ", navigator.language);
console.log("navigator.userAgent: ", navigator.userAgent);
console.log("navigator.userAgent: ", navigator.platform);

console.log("----------------------------------------------------------");

// process and streams
// console.log("process :", process);
// console.log("ReadableStream: ", ReadableStream);

console.log("----------------------------------------------------------");

// request and response
console.log("Request: ", Request);
console.log("Response: ", Response);

console.log("\n----------------------------------------------------------");
