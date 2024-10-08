Promise API, including the subtopics related to the `FileHandle` class and the `fsPromises` methods.

### Promises API in Node.js File System

The Promises API provides a way to handle asynchronous file system operations using promises, which allows for more readable code compared to callbacks. This API includes several methods available under the `FileHandle` class and the `fsPromises` module.

#### Class: **FileHandle**

The `FileHandle` class is used to interact with files directly through file handles. Below are the main methods associated with it:

1. **filehandle.appendFile(data, [options])**
   Appends data to the file associated with the file handle.

   ```js
   const fs = require("fs").promises;

   async function appendData() {
     const fileHandle = await fs.open("example.txt", "a");
     await fileHandle.appendFile("This is new data\n");
     await fileHandle.close();
   }

   appendData().catch(console.error);
   ```

2. **filehandle.chmod(mode)**
   Changes the file permissions.

   ```js
   const fs = require("fs").promises;

   async function changePermission() {
     const fileHandle = await fs.open("example.txt", "r+");
     await fileHandle.chmod(0o755); // Sets permissions to rwxr-xr-x
     await fileHandle.close();
   }

   changePermission().catch(console.error);
   ```

3. **filehandle.chown(uid, gid)**
   Changes the ownership of the file.

   ```js
   const fs = require("fs").promises;

   async function changeOwnership() {
     const fileHandle = await fs.open("example.txt", "r+");
     await fileHandle.chown(1000, 1000); // Change to specific user and group IDs
     await fileHandle.close();
   }

   changeOwnership().catch(console.error);
   ```

4. **filehandle.close()**
   Closes the file handle.

   ```js
   const fs = require("fs").promises;

   async function closeFile() {
     const fileHandle = await fs.open("example.txt", "r");
     await fileHandle.close();
   }

   closeFile().catch(console.error);
   ```

5. **filehandle.read(buffer, offset, length, position)**
   Reads data from the file into a buffer.

   ```js
   const fs = require("fs").promises;

   async function readFileData() {
     const fileHandle = await fs.open("example.txt", "r");
     const buffer = Buffer.alloc(100);
     await fileHandle.read(buffer, 0, 100, 0);
     console.log(buffer.toString());
     await fileHandle.close();
   }

   readFileData().catch(console.error);
   ```

6. **filehandle.readFile([options])**
   Reads the entire file into memory.

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

7. **filehandle.write(buffer, offset, length, position)**
   Writes a buffer to the file.

   ```js
   const fs = require("fs").promises;

   async function writeFileData() {
     const fileHandle = await fs.open("example.txt", "r+");
     const buffer = Buffer.from("Hello, World!");
     await fileHandle.write(buffer, 0, buffer.length, 0);
     await fileHandle.close();
   }

   writeFileData().catch(console.error);
   ```

8. **filehandle.truncate(len)**
   Truncates the file to a specified length.

   ```js
   const fs = require("fs").promises;

   async function truncateFile() {
     const fileHandle = await fs.open("example.txt", "r+");
     await fileHandle.truncate(10); // Truncate file to 10 bytes
     await fileHandle.close();
   }

   truncateFile().catch(console.error);
   ```

#### **fsPromises Module**

The `fsPromises` module provides an alternative set of file system methods that return promises instead of using callbacks.

1. **fsPromises.access(path, [mode])**
   Checks if the file or directory at the specified path is accessible.

   ```js
   const fs = require("fs").promises;

   fs.access("example.txt")
     .then(() => console.log("File is accessible"))
     .catch(() => console.error("File is not accessible"));
   ```

2. **fsPromises.appendFile(path, data, [options])**
   Appends data to a file at the specified path.

   ```js
   const fs = require("fs").promises;

   fs.appendFile("example.txt", "Appended data\n")
     .then(() => console.log("Data appended successfully"))
     .catch(console.error);
   ```

3. **fsPromises.mkdir(path, [options])**
   Creates a new directory at the specified path.

   ```js
   const fs = require("fs").promises;

   fs.mkdir("newDirectory")
     .then(() => console.log("Directory created successfully"))
     .catch(console.error);
   ```

4. **fsPromises.readFile(path, [options])**
   Reads the entire contents of a file.

   ```js
   const fs = require("fs").promises;

   fs.readFile("example.txt", "utf8")
     .then((data) => console.log(data))
     .catch(console.error);
   ```

5. **fsPromises.writeFile(file, data, [options])**
   Writes data to a file, replacing the file if it already exists.

   ```js
   const fs = require("fs").promises;

   fs.writeFile("example.txt", "New file content")
     .then(() => console.log("File written successfully"))
     .catch(console.error);
   ```

6. **fsPromises.copyFile(src, dest, [mode])**
   Copies a file from the source path to the destination path.

   ```js
   const fs = require("fs").promises;

   fs.copyFile("source.txt", "destination.txt")
     .then(() => console.log("File copied successfully"))
     .catch(console.error);
   ```

7. **fsPromises.rename(oldPath, newPath)**
   Renames or moves a file or directory.

   ```js
   const fs = require("fs").promises;

   fs.rename("oldName.txt", "newName.txt")
     .then(() => console.log("File renamed successfully"))
     .catch(console.error);
   ```

8. **fsPromises.unlink(path)**
   Deletes a file.

   ```js
   const fs = require("fs").promises;

   fs.unlink("example.txt")
     .then(() => console.log("File deleted successfully"))
     .catch(console.error);
   ```

9. **fsPromises.rmdir(path, [options])**
   Removes a directory.

   ```js
   const fs = require("fs").promises;

   fs.rmdir("directoryToDelete")
     .then(() => console.log("Directory removed successfully"))
     .catch(console.error);
   ```
