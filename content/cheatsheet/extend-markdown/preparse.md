---
layout: cheats/item
headline: preparse
---

The `preparse` default function.

_Cuttlebelle lets you run code on the content of markdown before it goes into the markdown renderer via the `preparse` function._

```js
Marked.preparse = ( markdown ) => {
  return markdown;
};
```
