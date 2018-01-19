---
layout: cheats/item
headline: Relative image urls
---

The script below will make all your relative image urls relative to your current page.

```js
module.exports = exports = function renderer({ Marked, _relativeURL, _ID }) {

  Marked.image = ( href, title, text ) => {
    let sourcePath = href;
    if( !sourcePath.startsWith('http://') && !sourcePath.startsWith('https://') ) {
      sourcePath = _relativeURL( href, _ID );
    }

    let out = `<img src="${ sourcePath }" alt="${ text }"`;

    if( title ) {
      out += ` title="${ title }"`;
    }

    out += '>';

    return out;
  }

  return Marked;
};
```
