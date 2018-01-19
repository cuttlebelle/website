---
layout: cheats/item
headline: Headlines with classes
---

Sometimes you want to split the semantic value and the look of a headline. The below script will let your content author use the new markdown syntax:
`# [2]headline` which will render `<h1 class="display-2">headline</h1>` or `# [3]headline` which will render `<h1 class="display-3">headline</h1>`.

```js
module.exports = exports = function renderer({ Marked }) {

  const headingLevels = {
    1: 'display-1',
    2: 'display-2',
    3: 'display-3',
    4: 'display-4',
    5: 'display-5',
    6: 'display-6',
  };

  Marked.heading = ( text, level ) => {
    let display;

    if( text.startsWith('[') ) {
      const displayText = text.split(']');
      display = displayText[ 0 ].substring( 1 );

      text = displayText.splice( 1 ).join(']');
    }
    else {
      display = Object.keys( headingLevels ).reverse()[ level ];
    }

    return `<h${ level }${ headingLevels[ display ] ? ` class="${ headingLevels[ display ] }"` : `` }>${ text }</h${ level }>`;
  };

  return Marked;
};
```
