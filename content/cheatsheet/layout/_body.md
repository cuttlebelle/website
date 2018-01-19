---
layout: cheats/item
headline: _body
---

The body of your markdown file (empty for `index.yml` files).

Let’s assume a markdown file like below:

```markdown
Hi there **world**.
```

And a layout file like so:

```jsx
import PropTypes from 'prop-types';
import React from 'react';

const Thing = ({ _body }) => (
  <div className="body">{ _body }</div>
);

Thing.propTypes = {
  /**
   * _body: (partials)(3)
   */
  _body: PropTypes.node.isRequired,
};

export default Thing;
```

Then our output would be:

```html
<div class="body">Hi there <strong>world</strong>.<div>
```
