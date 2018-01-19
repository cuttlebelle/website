---
layout: cheats/item
headline: link
---

The `link` default function.

```js
Marked.link = ( href, title, text ) => {
  let out = `<a href="${ href }"`;

  if( title ) {
    out += ` title="${ title }"`;
  }

  out += `>${ text }</a>`;

  return out;
}
```
