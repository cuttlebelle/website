---
layout: docs/content
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit repellat voluptates ipsa incidunt asperiores quae dolore illo provident corporis vero, recusandae, modi laboriosam harum! Commodi consequuntur blanditiis odio architecto culpa.

```shell
$ npm install cuttlebelle -g
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quae quia culpa laudantium repudiandae officiis qui, doloremque a nemo ducimus odio architecto similique atque impedit fugiat nihil hic dolorum eveniet.

```jsx
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body }) => (
  <div className="partial">{ _body }</div>
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
