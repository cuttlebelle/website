---
layout: cheats/item
headline: _globalProp
---

A prop that can be set globally from the `package.json`

```diff
{
  "name": "your name",
  "version": "1.0.0",
  "description": "Your description",
  "main": "index.js",
+ "cuttlebelle": {
+   "site": {
+     "globalProp": "dev"
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

And inside your components:

```js
import React from 'react';

const Thing = ({ _globalProp }) => (
  <div>Global: { _globalProp }</div>
);

export default Thing;
```
