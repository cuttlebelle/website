---
layout: cheats/item
headline: paragraph
---

The `paragraph` itself does not contain any text, you need to search the children of the node for the contents. Beware, the children can contain other inline nodes apart from text — like `link`, `html`, or other formated nodes.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'paragraph', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
