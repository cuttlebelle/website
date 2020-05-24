---
layout: cheats/item
headline: table
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'table', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
