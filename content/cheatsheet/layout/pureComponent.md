---
layout: cheats/item
headline: Pure component
---

A quick default pure component. 99% of the time this is what you want in your Cuttlebelle layouts:

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * The PureComponent description
 */
const PureComponent = ({ _body, title }) => (
  <Fragment>
    <span>{ title }</span>
    { _body }
  </Fragment>
);

PureComponent.propTypes = {
  /**
   * title: Our example title
   */
  title: PropTypes.string,

  /**
   * _body: (text)(5)
   */
  _body: PropTypes.node.isRequired,
};

PureComponent.defaultProps = {};

export default PureComponent;
```
