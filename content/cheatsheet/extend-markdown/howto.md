---
layout: cheats/item
headline: How to
---

To extend the built-in markdown parser you have to create one (or more) plugin files and add the path to those file to your `cuttlebelle.site.markdown.plugins` setting inside
your `package.json` file.

```js
const visit = require( 'unist-util-visit' );

const attacher = ({
  _ID = null,           // The ID of the current page
  _relativeURL = null   // A helper function to make an absolute URL relative
} = {}) => {
  const transformer = ( tree, file ) => {
    // extend one or more of the listed node types here
    
    visit( tree, 'thematicBreak', node => {
      // transform the <hr> element here
    } );

    visit( tree, 'link', node => {
      // transform the <a> element here
    } );
  };

  return transformer;
};
```
