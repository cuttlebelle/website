---
layout: cheats/item
headline: strong
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'strong', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
