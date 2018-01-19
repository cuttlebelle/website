---
layout: cheats/item
headline: table
---

The `table` default function.

```js
Marked.table = ( header, body ) => {
  return `<table>\n<thead>\n${ header }</thead>\n<tbody>\n${ body }</tbody>\n</table>\n`;
}
```
