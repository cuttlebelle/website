---
layout: cheats/item
headline: Array - object
---

A list of objects. Some values are marked as required here just as an example.

```js
/**
 * linklist:
 *   - text: Install the thing
 *     url: /install
 *   - text: Use the thing
 *     url: /docs
 *   - text: Enhance the thing
 *     url: /contribute
 */
linklist: PropTypes.arrayOf(
  PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string.isRequired,
  })
).isRequired,
```
