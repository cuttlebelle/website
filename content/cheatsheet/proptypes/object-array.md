---
layout: cheats/item
headline: Object - array
---

Sometimes you need to define one part of an object with an unknown amount of options.

```js
Page.propTypes = {
  /**
   * select:
   *   label: Please select a state
   *   selected: NSW
   *   choices:
   *     - VIC
   *     - WA
   *     - NT
   *     - NSW
   *     - QL
   *     - ACT
   *     - SA
   *     - TAS
   */
  select: PropTypes.shape({
    label: PropTypes.string,
    selected: PropTypes.string,
    choices: PropTypes.array,
  }),
}
```
