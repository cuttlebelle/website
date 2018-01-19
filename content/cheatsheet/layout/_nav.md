---
layout: cheats/item
headline: _nav
---

A nested object of your site structure.

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```

Given the structure above; this is what the `_nav` object would look like:

```js
{
  "overview": "overview",
  "products": {
    "product1": {
      "detail": "detail"
    }
  },
  "index": "index"
}
```
