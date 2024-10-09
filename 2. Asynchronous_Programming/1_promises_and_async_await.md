# Promises

A **Promise** is an object representing the <strong style="color:gray"><u>eventual completion or failure of an asynchronous operation</u></strong>. It allows you to write asynchronous code in a more readable way and handle the `success` or `failure` of an operation cleanly.

### Promise State

A Promise can be in one of three states:

1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

### Promise Methods

1. **`then()`**: Executes when the promise is fulfilled, and you get the result.
   ```javascript
   promise.then((result) => {
     // handle the result
   });
   ```
2. **`catch()`**: Executes when the promise is rejected, and you get the error.
   ```javascript
   promise.catch((error) => {
     // handle the error
   });
   ```
3. **`finally()`**: Executes regardless of the promise's outcome (fulfilled or rejected).
   ```javascript
   promise.finally(() => {
     // execute code whether promise is resolved or rejected
   });
   ```

#### Example: Creating a Promise

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate a success scenario
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data.");
    }
  }, 2000); // Simulates a 2-second delay
});

fetchData
  .then((result) => {
    console.log(result); // Output: 'Data fetched successfully!'
  })
  .catch((error) => {
    console.error(error); // If failed, this will handle the error
  })
  .finally(() => {
    console.log("Operation completed"); // Runs regardless of the outcome
  });
```

### Async/Await in JavaScript and Node.js

**Async/await** is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a synchronous-like manner. It makes code easier to read and understand.

#### Key Concepts

- **`async`**: Declares an asynchronous function that automatically returns a promise.
- **`await`**: Pauses the execution of the async function and waits for the promise to resolve or reject.

#### Example: Using Async/Await

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate a success scenario
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000); // Simulates a 2-second delay
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result); // Output: 'Data fetched successfully!'
  } catch (error) {
    console.error(error); // If failed, this will handle the error
  } finally {
    console.log("Operation completed"); // Runs regardless of the outcome
  }
};

getData();
```

### Key Differences Between Promises and Async/Await

1. **Readability**: `async/await` makes the code more readable by removing the need for chained `.then()` and `.catch()` methods.
2. **Error Handling**: You can handle errors using the `try...catch` block in `async/await`, making the error-handling code cleaner.
3. **Control Flow**: `await` pauses the execution of the function until the promise is resolved, creating a synchronous-like flow.

### When to Use

- **Use Promises** when you need more control over the flow or when you're dealing with multiple asynchronous operations.
- **Use Async/Await** when you want cleaner, more readable code and easier error handling.

These examples should help you understand how to use Promises and async/await effectively for handling asynchronous operations in JavaScript and Node.js.
