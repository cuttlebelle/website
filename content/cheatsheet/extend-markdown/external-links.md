---
layout: cheats/item
headline: External links
---

The script below will add `rel="external"` to external links.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree ) => {
    visit( tree, 'link', node => {
      if( node.url.startsWith('http://') || node.url.startsWith('https://') ) {
        let data = node.data || ( node.data = {} );
        let hProperties = data.hProperties || ( data.hProperties = {} );
        node.data.hProperties.rel = 'external';
      }
    } );
  };

  return transformer;
};

module.exports = attacher;
```
