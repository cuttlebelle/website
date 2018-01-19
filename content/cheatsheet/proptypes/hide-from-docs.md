---
layout: cheats/item
headline: Hide from docs
---

You can hide a layout for the documentation when you think it would just confuse the content author or when it’s just used as a code component.

Place the `@disable-docs` string anywhere into your component.

```jsx
import PropTypes from 'prop-types';
import React from 'react';

/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body }) => (
  <div className="body">{ _body }</div>
);

Partial.propTypes = {
  /**
   * _body: (partials)(4)
   */
  _body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
```
