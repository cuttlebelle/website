---
layout: docs/content
---

You may find yourself in need to extend the [built in markdown parser](https://github.com/chjj/marked). You may just want to add a class or you may want to add
more complex logic. No matter what your requirements are, we got you covered.

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
+     "markdownRenderer": "yourextension.js"
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Inside `yourextension.js` file make sure you export a function called `renderer` and return the passed in `Marked` object.
See the boilerplate below:

```js
module.exports = exports = function renderer({ Marked }) {

  // this is where you add your markdown extension

  return Marked;
};
```

Cuttlebelle actually passes a bunch of props to you that you may find helpful. You can
[destruct](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) them inside your `renderer` function.

```js
module.exports = exports = function renderer({
  Marked,      // The Marked instance you want to extend
  _ID,         // The ID of the current page
  _parents,    // An array of all parent pages IDs
  _storeSet,   // The store setter
  _store,      // The store getter
  _nav,        // A nested object of your site structure
  _relativeURL // A helper function to make an absolute URL relative
}) {

  // this is where you add your markdown extension

  return Marked;
};
```

Now add one or more of the methods you want to overwrite. See a complete list in our [cheat-sheet](/cheatsheet/).

```js
module.exports = exports = function renderer({
  Marked,
  _ID,
  _parents,
  _storeSet,
  _store,
  _nav,
  _relativeURL
}) {

  // adding a class
  Marked.hr = () => {
    return `<hr class="my-custom-class">\n`;
  }

  // making all links relative
  Marked.link = ( href, title, text ) => {
    if(
      !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !href.startsWith('#') &&
      typeof _relativeURL === 'function'
    ) {
      href = _relativeURL( href, _ID );
    }

    return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }>${ text }</a>`;
  };

  return Marked;
};
```
