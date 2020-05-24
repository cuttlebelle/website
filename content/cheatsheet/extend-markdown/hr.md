---
layout: cheats/item
headline: hr (thematicBreak)
---

An `hr` tag in Remark is called a `thematicBreak`.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'thematicBreak', node => {
      // transform the node here
    } );
  };

  return transformer;
};
```
