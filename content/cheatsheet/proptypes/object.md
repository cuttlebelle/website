---
layout: cheats/item
headline: Object
---

An object of things. This is often more content author friendly as it is more explicit.

```js
Page.propTypes = {
  /**
   * link:
   *   text: Homepage
   *   url: /
   */
  link: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string,
  }),
}
```
