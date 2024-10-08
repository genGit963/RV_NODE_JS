### Explanation of `import.meta` Properties in Node.js

`import.meta` is a special object available in ES modules, providing metadata about the current module. Here are its key properties:

1. **`import.meta.url`**:

   - Provides the absolute URL of the current module file.
   - Useful for resolving file paths relative to the module.

   ```js
   console.log(import.meta.url); // Output: file:///path/to/your/module.mjs
   ```

2. **`import.meta.dirname`**:

   - Similar to `__dirname` in CommonJS, it gives the directory path of the current module.
   - This is only available in Node.js versions that explicitly support it.

   ```js
   import { dirname } from "path";
   import { fileURLToPath } from "url";

   const __dirname = dirname(fileURLToPath(import.meta.url));
   console.log(__dirname); // Output: /path/to/your/module/
   ```

3. **`import.meta.filename`**:

   - Equivalent to `__filename` in CommonJS, providing the absolute path to the module file.
   - Typically derived from the `import.meta.url`.

   ```js
   import { fileURLToPath } from "url";

   const __filename = fileURLToPath(import.meta.url);
   console.log(__filename); // Output: /path/to/your/module.mjs
   ```

4. **`import.meta.resolve(specifier)`**:
   - Resolves a module specifier relative to the current module.
   - Useful for determining the absolute URL of dependencies.
   ```js
   const resolvedUrl = import.meta.resolve("./anotherModule.mjs");
   console.log(resolvedUrl); // Output: file:///path/to/your/anotherModule.mjs
   ```

These properties allow you to work with file paths and module resolutions in ES modules, providing similar functionality to what was traditionally available in CommonJS.
