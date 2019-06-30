---
layout: cheats/item
headline: Class component
---

A quick class component. Use this when you have additional methods you want to run or when you want to fetch async data via the [`getInitialProps`](/documentation/code/#async-operations) method.

```jsx
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * The ClassComponent description
 */
class ClassComponent extends Component {
  constructor({ title, partials }) {
    super();
    this.title = title;
    this.partials = partials;
  }

  render() {
    return (
      <Fragment>
        <span>{ this.title }</span>
        <div>{ partials }</div>
      </Fragment>
    );
  }
};

ClassComponent.propTypes = {
  /**
   * title: Our example title
   */
  title: PropTypes.string,

  /**
   * partials: (partials)(3)
   */
  partials: PropTypes.node.isRequired,
};

ClassComponent.defaultProps = {};

export default ClassComponent;
```
