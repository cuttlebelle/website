---
layout: cheats/item
headline: inline code
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'inlineCode', node => {
      // transform the node here
    } );

    // access to the parent node is possible as well
    visit( tree, 'inlineCode', ( node, index, parent ) => {
      // transform the node or parent here
    } );
  };

  return transformer;
};
```
