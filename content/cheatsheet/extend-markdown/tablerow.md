---
layout: cheats/item
headline: tableRow
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'tableRow', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
