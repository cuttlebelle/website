---
layout: cheats/item
headline: link
---

The `link` node holds the `href` value in the `url` property.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'link', node => {
      // transform the node here
      let href = node.url;
    } );
  };

  return transformer;
};
```
