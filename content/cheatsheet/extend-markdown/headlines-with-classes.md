---
layout: cheats/item
headline: Headlines with classes
---

Sometimes you want to split the semantic value and the look of a headline. The below script will let your content author use the new markdown syntax:
`# [2]headline` which will render `<h1 class="display-2">headline</h1>` or `# [3]headline` which will render `<h1 class="display-3">headline</h1>`.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, _file ) => {
    const headingLevels = {
      1: 'display-1',
      2: 'display-2',
      3: 'display-3',
      4: 'display-4',
      5: 'display-5',
      6: 'display-6',
    };

    // Set all headings one way first
    visit( tree, 'heading', node => {
      let newClass = Object.keys( headingLevels ).reverse()[ node.depth ];

      if( newClass ) {
        let data = node.data || ( node.data = {} );
        let hProperties = data.hProperties || ( data.hProperties = {} );
        node.data.hProperties.class = headingLevels[ newClass ];
      }
    } );

    // Then selectively change them where required
    visit( tree, 'linkReference', ( node, _index, parent ) => {
      if( !parent.type || parent.type !== 'heading' ) {
        return;
      }

      if( node !== parent.children[0] ) {
        return;
      }

      if( !node.label || ! /[0-9]+/.test( node.label ) ) {
        return;
      }

      let data = parent.data || ( parent.data = {} );
      let hProperties = data.hProperties || ( data.hProperties = {} );

      let newClass = headingLevels[ node.label ];
      if( newClass ) {
        parent.data.hProperties.class = newClass;
        parent.children.shift();
      }
    } );
  }

  return transformer;
};

module.exports = attacher;
```
