---
layout: cheats/item
headline: Relative image urls
---

The script below will make all your relative image urls relative to your current page.

```js
const visit = require( 'unist-util-visit' );

const attacher = ({
  _ID = null,          // The ID of the current page
  _relativeURL = null, // A helper function to make an absolute URL relative
} = {}) => {
  const transformer = ( tree ) => {
    visit( tree, 'link', node => {
      if(
        !node.url.startsWith('http://') &&
        !node.url.startsWith('https://') &&
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
