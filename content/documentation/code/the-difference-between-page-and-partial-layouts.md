---
layout: docs/content
---

There is almost no difference between layouts for partials and layouts for pages. You can use them interchangeably though typically page layouts carry the
broader HTML structure while the partial layouts have only local HTML.

The way you can organize them is to put them into a descriptive folder. that way your content authors will see the distinction more clearly.

An example of a **page layout**:

```jsx
import PropTypes from 'prop-types';
import React from 'react';

/**
 * The page layout component
 */
const Page = ({ title, main, _relativeURL, _ID }) => (
  <html>
  <head>
    <title>Cuttlebelle - { title }</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href={
      _relativeURL( `/assets/css/site.css`, _ID ) }
    />
  </head>
  <body>
    <div className="top">
      <main>
        { main }
      </main>
    </div>
  </body>
  </html>
);

export default Page;
```

An example of a **partial layout**:

```jsx
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * The partial component
 */
const Partial = ({ title, _body }) => (
  <article>
    <h2>{ title }</h2>

    { _body }
  </article>
);

export default Partial;

```
