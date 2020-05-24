---
layout: cheats/item
headline: br
---

There are no `br` nodes in Remark. You can access `br` through `text` nodes by identifying the line breaks within them.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree, file ) => {
    visit( tree, 'text', ( node, index, parent ) => {
      if( [ 'code', 'inlineCode' ].includes( parent.type ) ) {
        return;
      }

      if( !node.value ) {
        return;
      }

      if( ! /\n/.test( node.value ) ) {
        return;
      }

      const newChildren = [];
      parent.children.forEach(child => {
        if( child !== node ) {
          if( child.position ) {
            delete child.position;
            newChildren.push(child);
          }
        }

        child.split(/(\n)/g).forEach(part => {
          if( part === '\n' ) {
            newChildren.push( {
              type: 'html',
              value: ' <span>This is the end of the line 🚂</span><br />'
            } );
          }
          else {
            newChildren.push( {
              type: 'text',
              value: part
            } );
          }
        } );
      } );
    } );
  };

  return transformer;
};
```
