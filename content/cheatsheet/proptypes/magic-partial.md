---
layout: cheats/item
headline: Magic partial
---

You can use the magic string `(partials)(2)` to fill your documentation with a partial blocks. The number inside the `()` defines how many
partial blocks will be rendered for you in the documentation.

```js
Page.propTypes = {
  /**
   * _body: (partials)(4)
   */
  _body: PropTypes.node.isRequired,
}
```
