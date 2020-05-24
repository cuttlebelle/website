---
layout: cheats/item
headline: del (delete)
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'delete', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
