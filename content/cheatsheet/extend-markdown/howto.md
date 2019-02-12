---
layout: cheats/item
headline: How to
---

To extend the built-in markdown parser you have to create a file and add the path to that file to your `cuttlebelle.site.markdownRenderer` setting inside
your `package.json` file.

```js
// export a function called `renderer`
module.exports = exports = function renderer({
  Marked,      // The Marked instance you want to extend
  _ID,         // The ID of the current page
  _parents,    // An array of all parent pages IDs
  _storeSet,   // The store setter
  _store,      // The store getter
  _nav,        // A nested object of your site structure
  _globalProp, // A prop that can be set globally from the `package.json`
  _relativeURL // A helper function to make an absolute URL relative
}) {

  // extend one of the listed methods here
  Marked.hr = () => {
    return `<hr />`;
  };

  // and remember to return the Marked instance
  return Marked;
};
```
And if you want to extend two or more methods you add them all onto the `Marked` method.

```js
module.exports = exports = function renderer({ Marked }) {

  Marked.hr = () => {
    return `<hr />`;
  };

  Marked.blockquote = ( quote ) => {
    return `<blockquote>${ quote }</blockquote>`;
  };

  return Marked;
};
```
