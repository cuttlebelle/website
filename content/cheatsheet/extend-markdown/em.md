---
layout: cheats/item
headline: em (emphasis)
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'emphasis', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
