File system module in Node.js, focusing on the use of Promises, Callbacks, and synchronous examples for handling files.

### 1. **Promise Example**

Promises in Node.js are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never.

```js
const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });
```

### 2. **Callback Example**

Callbacks are functions that are passed as arguments to other functions and are executed after the completion of an asynchronous operation.

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(data);
  }
});
```

### 3. **Synchronous Example**

Synchronous file operations block the execution of the code until the operation is complete.

```js
const fs = require("fs");

try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error("Error reading file:", err);
}
```

### 4. **Promises API**

The Promises API provides a set of methods for working with asynchronous operations in a more manageable way. Here are a few key methods and examples using the `fs.promises` module.

#### **FileHandle Example**

To work with file handles, you'll often use `fs.promises.open()` to obtain a handle to a file. Here are a few examples:

- **filehandle.appendFile()**

```js
const fs = require("fs").promises;

async function appendData() {
  const fileHandle = await fs.open("example.txt", "a");
  await fileHandle.appendFile("New data");
  await fileHandle.close();
}
appendData().catch(console.error);
```

- **filehandle.chmod()**

```js
const fs = require("fs").promises;

async function changePermission() {
  const fileHandle = await fs.open("example.txt", "r+");
  await fileHandle.chmod(0o644);
  await fileHandle.close();
}
changePermission().catch(console.error);
```

- **filehandle.close()**

```js
const fs = require("fs").promises;

async function closeFile() {
  const fileHandle = await fs.open("example.txt", "r");
  await fileHandle.close();
}
closeFile().catch(console.error);
```

- **filehandle.readFile()**

```js
const fs = require("fs").promises;

async function readFile() {
  const fileHandle = await fs.open("example.txt", "r");
  const data = await fileHandle.readFile("utf8");
  console.log(data);
  await fileHandle.close();
}
readFile().catch(console.error);
```

#### **fsPromises Examples**

The `fs.promises` module provides a modern way to work with files in an asynchronous manner using promises.

- **fsPromises.access()**

```js
const fs = require("fs").promises;

fs.access("example.txt")
  .then(() => console.log("File exists"))
  .catch(() => console.error("File does not exist"));
```

- **fsPromises.appendFile()**

```js
const fs = require("fs").promises;

fs.appendFile("example.txt", "New data to append\n")
  .then(() => console.log("Data appended"))
  .catch((err) => console.error("Error appending data:", err));
```

- **fsPromises.mkdir()**

```js
const fs = require("fs").promises;

fs.mkdir("newDirectory")
  .then(() => console.log("Directory created"))
  .catch((err) => console.error("Error creating directory:", err));
```

- **fsPromises.readFile()**

```js
const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error("Error reading file:", err));
```

- **fsPromises.writeFile()**

```js
const fs = require("fs").promises;

fs.writeFile("example.txt", "New file content")
  .then(() => console.log("File written successfully"))
  .catch((err) => console.error("Error writing file:", err));
```
