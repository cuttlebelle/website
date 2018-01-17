---
layout: docs/content
---

The difference of components that are just being used for it’s functionality but are not exposed as a layout is slim. You can put essentially anything inside
the `code/` folder. But layout components, those that can be references as `layout: x` must have a default export.

See below for an example of a code component being used inside a layout component.

```jsx
// this file is a code component and called util.js

import Slugify from 'slugify'; // you can import anything from node_modules you installed

export MakeSentenceCase = text => text.charAt( 0 ).toUpperCase() + text.slice( 1 ).toLowerCase();
export Handleize = text => Slugify( text );
```

```jsx
// this file is a layout component and called test.js

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Handleize } from './util.js';

/**
 * A test component
 */
const Test = ({ _body, _ID }) => (
  <div id={ Handleize( _ID ) }>
    { _body }
  </div>
);

export default Test;
```
