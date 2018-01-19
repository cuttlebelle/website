---
layout: cheats/item
headline: _storeSet
---

You can set data to persist between partials by setting them with this helper.

In one partial:

```js
_storeSet({ variable: "value" });
```

And if you call `_store()` inside another partial below you get:

```js
{ variable: "value" }
```
