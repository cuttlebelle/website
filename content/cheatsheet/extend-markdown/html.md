---
layout: cheats/item
headline: html
---

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'html', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
