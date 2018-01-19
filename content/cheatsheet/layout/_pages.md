---
layout: cheats/item
headline: _pages
---

An object of all pages and their props; with `_ID` as their key. Each page also get the `_url` prop automatically attached.

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```

Given the structure above; this is what the `_pages` object would look like:

```js
{
  "overview": { /* all props and data etc */ },
  "products": {},
  "products/product1": {},
  "products/product1/detail": {}
  "index": {},
}
```
