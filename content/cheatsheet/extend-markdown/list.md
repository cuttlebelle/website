---
layout: cheats/item
headline: list
---

The `list` default function.

```js
Marked.list = ( body, ordered ) => {
  const type = ordered ? 'ol' : 'ul';

  return `<${ type }>\n${ body }</${ type }>\n`;
}
```
