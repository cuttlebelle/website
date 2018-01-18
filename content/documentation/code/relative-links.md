---
layout: docs/content
---

Because you’re generating a static site, relative links are important so that if you move your site to another root folder, all links still work.
To help you manage this problem, Cuttlebelle exposes a default prop called `_relativeURL()`. This function takes two parameters: The URL you want to link to
and your current ID of the page.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _body, _relativeURL, _ID }) => (
  <Fragment>
    Relatively speaking the page I want to send you to is at:
    { _relativeURL( '/some/page/deep/within', _ID) }
  </Fragment>
);

export default Test;
```

This will render a different path depending on what page you’re on.
Try using this as much as you can including when you reference stylesheets or other resources.

Our [cheat-sheet](/cheatsheet/) has even a custom render function that will apply this function to all markdown links as well.

```js
module.exports = exports = function renderer({ Marked, _relativeURL, _ID }) {

  Marked.link = ( href, title, text ) => {
    if(
      !href.startsWith('http://') &&
      !href.startsWith('https://') &&
      !href.startsWith('#') &&
      typeof _relativeURL === 'function'
    ) {
      href = _relativeURL( href, _ID );
    }

    return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }>${ text }</a>`;
  };

  return Marked;
};
```

More on [how to extend markdown](#extend-markdown) a little further below.
