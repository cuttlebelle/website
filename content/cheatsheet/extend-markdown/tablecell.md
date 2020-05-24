---
layout: cheats/item
headline: tableCell
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'tableCell', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
