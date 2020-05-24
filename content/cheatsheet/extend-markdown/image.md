---
layout: cheats/item
headline: image
---

The `image` node holds the `src` value in the `url` property.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'image', node => {
      // transform the node here
      let src = node.url;
    } );
  };

  return transformer;
};
```
