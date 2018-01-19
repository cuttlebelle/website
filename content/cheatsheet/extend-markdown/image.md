---
layout: cheats/item
headline: image
---

The `image` default function.

```js
Marked.image = ( href, title, text ) => {
  let out = `<img src="${ href }" alt="${ text }"`;

  if( title ) {
    out += ` title="${ title }"`;
  }

  out += '>';

  return out;
}
```
