---
layout: cheats/item
headline: heading
---

The `heading` default function.

```js
Marked.heading = ( text, level ) => {
  return `<h${ level } id="${ text.toLowerCase().replace(/[^\w]+/g, '-') }">${ text }</h${ level }>\n`;
}
```
