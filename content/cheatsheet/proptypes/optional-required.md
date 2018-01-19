---
layout: cheats/item
headline: Optional / required
---

Tell your content authors that a certain prop is optional or required.

```js
Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired, // This prop is required

  /**
   * subtitle: The place to be
   */
  subtitle: PropTypes.string,         // This prop is optional
}
```
