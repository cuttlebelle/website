---
layout: docs/content
---

You may find yourself in need to extend the [built in markdown parser](https://github.com/remarkjs/remark). You may just want to add a class or you may want to add more complex logic. No matter what your requirements are, we got you covered.

To extend markdown you will have to create a javascript file and add the path to that file into your settings object inside your `package.json`.

```diff
{
  "name": "your name",
  "version": "1.0.0",
  "description": "Your description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
+ "cuttlebelle": {
+   "site": {
+     "markdown": {
+       "plugins": [
+         "yourplugin.js"
+       ]
+     }
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Inside `yourplugin.js` file make sure you export an "attacher" function, it can be called anything you like, but must itself return a "transformer" function which contains your transformations.
See the boilerplate below:

```js
const attacher = () => {
  const transformer = ( tree, file ) => {
    // this is where you add your markdown transformations
  };

  return transformer;
};

module.exports = attacher;
```

Cuttlebelle actually passes a bunch of props to you that you may find helpful. You can
[destruct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) them inside your `renderer` function.

```js
const attacher = ({
  _ID = null,          // The ID of the current page
  _self = null,        // The relative path to the content file; can be md or yaml file
  _isDocs = false,     // A boolean value, true in docs context only
  _parents = null,     // An array of all parent pages IDs
  _pages = null,       // An object of all pages and their props; with ID as key
  _storeSet = null,    // The store setter
  _store = null,       // The store getter
  _nav = null,         // A nested object of your site structure
  _relativeURL = null, // A helper function to make an absolute URL relative
  _parseYaml = null,   // The YAML parsing function
  _parseReact = null,  // A function that parses React to static markup
  _globalProp = null   // A prop that can be set globally from the `package.json`
} = {}) => {
  const transformer = ( tree, file ) => {
    // this is where you add your markdown transformations
  };

  return transformer;
};

module.exports = attacher;
```

Now add one or more markdown transformations. See a complete list of node types in our [cheat-sheet](/cheatsheet/).

```js
const visit = require( 'unist-util-visit' );

const attacher = ({
  _ID = null,
  _relativeURL = null
} = {}) => {
  const transformer = ( tree, file ) => {
    // Add a class to all <hr> elements
    visit( tree, 'thematicBreak', node => {
      let data = node.data || ( node.data = {} );
      let hProperties = data.hProperties || ( data.hProperties = {} );
      node.data.hProperties.class = 'my-custom-class';
    } );

    // Make all links relative
    visit( tree, 'link', node => {
      if(
        !node.url.startsWith('http://') &&
        !node.url.startsWith('https://') &&
        !node.url.startsWith('#') &&
        _relativeURL &&
        typeof _relativeURL === 'function'
      ) {
        node.url = _relativeURL( node.url, _ID );
      }
    } );
  };

  return transformer;
};
```
