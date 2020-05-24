---
layout: cheats/item
headline: Html entities
---

Encode HTML entities so content authors don’t have to worry about that.

```js
const visit = require( 'unist-util-visit' );

const attacher = () => {
  const transformer = ( tree ) => {
    // Unicode object keys?… that's alright I guess…
    const entities = {
      '™': {
        pattern: '\\™',
        encoded: '<span class="markdown-trademark">&trade;</span>'
      },
      '\’': {
        pattern: '\\’',
        encoded: '<span class="markdown-quote">&rsquo;</span>'
      },
      '—': {
        pattern: '\\—',
        encoded: '<span class="markdown-mdash">&mdash;</span>'
      },
      '–': {
        pattern: '\\–',
        encoded: '<span class="markdown-ndash">&ndash;</span>'
      },
      '...': {
        pattern: '\\.\\.\\.',
        encoded: '<span class="markdown-ellipsis">&hellip;</span>'
      }
    };
    const entitiesJoined = Object.values(entities).map(entity => entity.pattern).join('|');
    const entitiesTest = new RegExp(`(${entitiesJoined})`);
    const entitiesSplit = new RegExp( entitiesTest.source, entitiesTest.flags + 'g' );

    visit( tree, 'text', ( node, _index, parent ) => {
      if( [ 'code', 'inlineCode' ].includes( parent.type ) ) {
        return;
      }

      if( !node.value ) {
        return;
      }

      if( !entitiesTest.test( node.value ) ) {
        return;
      }

      const newChildren = [];
      parent.children.forEach(child => {
        if (child !== node || !child.value ) {
          if( child.position ) {
            delete child.position;
          }
          newChildren.push( child );
          return;
        }

        child.value.split( entitiesSplit ).forEach(part => {
          if( Object.keys( entities ).includes( part ) ) {
            newChildren.push( {
              type: 'html',
              value: entities[part].encoded
            } );
          }
          else {
            newChildren.push( {
              type: 'text',
              value: part
            } );
          }
        });
      });

      parent.children = newChildren;
    } );
  };

  return transformer;
};

module.exports = attacher;

```
