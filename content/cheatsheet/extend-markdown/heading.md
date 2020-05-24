---
layout: cheats/item
headline: heading
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'heading', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
