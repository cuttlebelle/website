---
layout: cheats/item
headline: Magic text
---

You can use the magic string `(text)[2]` to fill your documentation with some placeholder text. The number inside the `[]` defines how many
sentences will be rendered for you in the documentation.

```js
Page.propTypes = {
  /**
   * description: (text)(2)
   */
  description: PropTypes.node.isRequired,
}
```
