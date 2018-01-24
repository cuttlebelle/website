---
layout: cheats/item
headline: _isDocs
---

`_isDocs` is a boolean that let’s you know if your layout is running in docs content or not. In the docs you may not have all variables available to you so
this comes in handy to write alternative logic so your automated documentation is still spot on.

```js
console.log( _isDocs );
// false when compiling with `cuttlebelle`
// but true for `cuttlebelle docs`
```
