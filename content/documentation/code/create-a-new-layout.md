---
layout: docs/content
---

Creating a new layout is as easy as adding a new javascript file to your  `code` folder and exporting a default react component.

💡 You can’t use multiple named exports in a single file.

So a file named `code/test.js` will be available to front-matter as `layout: test`. You don’t need to include the extension or the code folder as all layout
paths are relative to that code folder.

See below the smallest layout component I can think of:

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _body }) => (
  <Fragment>
    { _body }
  </Fragment>
);

export default Test;
```
