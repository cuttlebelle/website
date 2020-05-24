---
layout: cheats/item
headline: text
---

`text` nodes are where your content is. It would be strange to find any children attached to a `text` node.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'text', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
