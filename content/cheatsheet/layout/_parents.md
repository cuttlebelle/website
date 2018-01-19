---
layout: cheats/item
headline: _parents
---
An array of all parent pages IDs

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```
Taking the above file structure into account, the parents for the page `product/product1/detail` would be:
```js
[
  "products/product1/detail"
  "products/product1",
  "products",
  "index",
]
```
