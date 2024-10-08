//         5. Modules: ECMAScript modules – Get familiar with ES6 modules (`import/export`).

/**
 *ECMAScript modules (ESM) 
        are the standard for modular JavaScript, 
        providing structure through import/export syntax. 
        
        Node.js supports both ESM and CommonJS, 
        differentiated by file extensions "(.mjs for ESM, .cjs for CommonJS)"
        or by package.json settings. ("type":"module")

        Imports use three specifiers: 
            1. relative, 
            2. absolute, 
            3. bare. 
        
        Dynamic imports with `import()` and `import.meta` provide flexibility. 
        
        ESM and CommonJS have differences like the absence of `require()` in ESM.

        Additional features include support for "JSON, Wasm modules, and top-level await". 
        Modules use "URLs for resolution", and "loaders customize their behavior".
 */

// Full contents

/**
 * Modules: ECMAScript modules
 
Introduction

Enabling

Packages

import Specifiers
    Terminology
    Mandatory file extensions
    URLs
        file: URLs
        data: imports
        node: imports

Import attributes

Built-in modules

import() expressions

import.meta
    import.meta.dirname
    import.meta.filename
    import.meta.url
    import.meta.resolve(specifier)

Interoperability with CommonJS
    import statements
    require
    CommonJS Namespaces
    Differences between ES modules and CommonJS
        No require, exports, or module.exports
        No __filename or __dirname
        No Addon Loading
        No require.resolve
        No NODE_PATH
        No require.extensions
        No require.cache

JSON modules

Wasm modules

Top-level await

Loaders

Resolution and loading algorithm
    Features
    Resolution algorithm
    Resolution Algorithm Specification
    Customizing ESM specifier resolution algorithm

*/

/**
 * 1. Introduction
        ES modules (.mjs) are the standard format for 
        packaging JavaScript code for reuse. 

        They use import and export statements to 
        include functionality from other files.
*/

// Example:

// addTwo.mjs
export function addTwo(num) {
  return num + 2;
}
// app.mjs
import { addTwo } from "./addTwo.mjs";
console.log(addTwo(4)); // Output: 6

/**
 * 2. Enabling
        Node.js identifies ES modules by 
        using the .mjs file extension, 
        or by specifying "type": "module" in package.json.
*/

/**
 * 3. Packages
        Packages can use the "exports" field in package.json 
        to define which modules they export, 
        affecting how they are imported in other code.
*/
