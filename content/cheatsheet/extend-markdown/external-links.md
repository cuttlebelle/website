---
layout: cheats/item
headline: External links
---

The script below will add `rel="external"` to external links.

```js
module.exports = exports = function renderer({ Marked }) {

  Marked.link = ( href, title, text ) => {
    let attr = '';
    if( href.startsWith('http://') || href.startsWith('https://') ) {
      attr = ` `rel="external"``;
    }

    return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
  };

  return Marked;
};
```
