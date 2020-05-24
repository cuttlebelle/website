---
layout: cheats/item
headline: blockquote
---

A `blockquote` node will usually contain children with type `paragraph`.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'blockquote', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
