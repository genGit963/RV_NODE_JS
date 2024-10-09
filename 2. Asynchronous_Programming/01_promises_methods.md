# Promise Powerful methods

Promise allows you to work with multiple promises more effectively. These methods provide powerful ways to manage multiple asynchronous operations and can greatly simplify your code.

## 1. `Promise.all()`

`Promise.all()` <br>takes an iterable of promises (like an array) and returns a single Promise that resolves when all of the promises in the iterable have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.

#### Example:

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42; // This is not a promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [3, 42, 'foo']
  })
  .catch((error) => {
    console.error("One of the promises failed:", error);
  });
```

## 2. `Promise.allSettled()`

`Promise.allSettled()` returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.

#### Example:

```javascript
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error");
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled with value:", result.value);
    } else {
      console.error("Rejected with reason:", result.reason);
    }
  });
});
```

## 3. `Promise.any()`

`Promise.any()` takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise. If no promises in the iterable fulfill (i.e., all of the given promises are rejected), then the returned promise is rejected with an `AggregateError`, a special error that groups together individual errors.

#### Example:

```javascript
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 100, "Success!");
});

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Output: 'Success!'
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  });
```

## 4. `Promise.race()`

`Promise.race()` takes an iterable of promises and returns a single promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

#### Example:

```javascript
const promise1 = new Promise((resolve) => {
  setTimeout(resolve, 500, "First");
});
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 100, "Second");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value); // Output: 'Second' (the first one to resolve)
  })
  .catch((error) => {
    console.error("Race error:", error);
  });
```

## Summary

- **`Promise.all()`**: Waits for all promises to resolve, or rejects if any promise rejects.
- **`Promise.allSettled()`**: Waits for all promises to settle (resolve or reject) and returns the outcome of each.
- **`Promise.any()`**: Resolves as soon as one promise fulfills; rejects if all promises are rejected.
- **`Promise.race()`**: Resolves or rejects as soon as the first promise resolves or rejects.
