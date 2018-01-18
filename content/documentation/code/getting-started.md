---
layout: docs/content
---

In short, front-matter variables become props in your react component. You can add react components for layouts or just code components that are reused
throughout your layouts. You can even use all modules npm has to offer.

```yaml
---
layout: react-component
test: hello world
---

markdown
```

Now inside your react component `code/react-component.js` you can import the data.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _body, test }) => (
  <ul>
    <li>test: { test }</li>
    <li>_body: { _body }</li>
  </ul>
);

export default Test;
```

Everything that applies to [JSX](https://facebook.github.io/jsx/) will apply to your layouts here to so make sure you pay attention to the console
and it’s warnings.
