---
layout: cheats/item
headline: list
---

A `list` node will usually contain children with type `listItem`.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'list', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
