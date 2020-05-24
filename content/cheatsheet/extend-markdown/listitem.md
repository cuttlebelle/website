---
layout: cheats/item
headline: listItem
---

The `listItem` node will usually have a `list` as the parent.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'listItem', ( node, index, parent ) => {
      // transform the node or parent here
    } );
  };

  return transformer;
};
```
