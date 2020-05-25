---
layout: docs/content
---

You may find yourself in need to extend the [built in markdown parser](https://github.com/remarkjs/remark). You may just want to add a class or you may want to add more complex logic. No matter what your requirements are, we got you covered.

You can either install an existing Remark plugin from NPM or create your own.

Either way, to extend markdown you will have to add the path to that plugin into your settings object inside your `package.json`.

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
+         "node_modules/remark-plugin-from-npm"
+         "code/markdown/your-plugin.js",
+       ]
+     }
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Installing an existing Remark plugin from NPM

Add the Remark plugin you want to install via `npm`. The example we are using here is [`remark-toc`](https://github.com/remarkjs/remark-toc).

```shell
npm install --save-dev remark-toc
```

#### Adding a Remark plugin from NPM without options

If you don't need to set any options on the plugin that you have installed from NPM, then all you have to do is add the plugin to your `package.json`, similar to the above. You must specify the path it was installed to relative to the root of your project directory, usually this is `node_modules/…`.

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
+         "node_modules/remark-toc"
+       ]
+     }
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

If Cuttlebelle has problems finding the plugin, you may need to specify the path to the main file of the plugin, like `node_modules/remark-toc/index.js`, but this is usually not necessary.

#### Specifying options for the Remark plugin from NPM

Many Remark plugins allow you to set options. To do this you will need to create a file that will pass those options along to Cuttlebelle, along with the plugin.

Again, we will use the `remark-toc` plugin as an example. First, install the plugin using `npm` as usual. Then we will create a new javascript file in `code/markdown/remark-toc-with-options.js`. This file will export an array. The first item in the array will be the plugin function, and the second will be an object containing the plugin options.

```js
const toc = require('remark-toc');

module.exports = [
  toc, // this is plugin function
  {
    maxDepth: 2,
    tight: true
  } // this is the object containing the plugin options
];
````

Then we will add this file to your list of plugins in `package.json`. There is no need to also specify the `remark-toc` plugin location as it has been required within the file above.

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
+         "code/markdown/remark-toc-with-options.js"
+       ]
+     }
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Creating your own custom plugin

Inside a new `code/markdown/your-plugin.js` file make sure you export an `attacher` function, it can be called anything you like, but must itself return a `transformer` function which contains your transformations.
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
[destruct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) them inside your `attacher` function, making them available to any code it contains.

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

Finally, add this file to your list of plugins in `package.json`.

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
+         "code/markdown/your-plugin.js"
+       ]
+     }
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
