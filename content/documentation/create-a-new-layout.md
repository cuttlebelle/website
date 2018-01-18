---
layout: docs/content
---

Now let’s get fancy and create a new layout. Adding a blob of text to your website won’t cut it for very long. You want designs that require your content to be
placed into wrapping HTML elements and CSS to shape it.

Let’s create a new file inside the `code/` folder called `book.js` with below content.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Our new book component
 */
const Book = ({ _body }) => (
  <Fragment>{ _body }</Fragment>
);

export default Book;
```

Now give our `content/page1/body.md` file this layout by adding below top to the file so that it looks like this:

```readme
---
layout: book
---

The year 1866 was signalised by a remarkable incident, a mysterious and puzzling
phenomenon, which doubtless no one has yet forgotten. Not to mention rumours
which agitated the maritime population and excited the public mind, even in the
interior of continents, seafaring men were particularly excited. Merchants,
common sailors, captains of vessels, skippers, both of Europe and America, naval
officers of all countries, and the Governments of several States on the two
continents, were deeply interested in the matter.

For some time past vessels had been met by "an enormous thing," a long object,
spindle-shaped, occasionally phosphorescent, and infinitely larger and more
rapid in its movements than a whale.

Excerpt from *Twenty Thousand Leagues Under the Sea* by **Jules Verne**
```

Saving both files won’t change much in the browser. But now we can add some special information to this content file that the layout file can digest.

```readme
---
layout: book
book: Twenty Thousand Leagues Under the Sea
image: https://goo.gl/KResEh
alt: The cover of the book "Twenty Thousand Leagues Under the Sea"
link: https://en.wikipedia.org/wiki/Twenty_Thousand_Leagues_Under_the_Sea
---

The year 1866 was signalised by a remarkable incident, a mysterious and puzzling
phenomenon, which doubtless no one has yet forgotten. Not to mention rumours
which agitated the maritime population and excited the public mind, even in the
interior of continents, seafaring men were particularly excited. Merchants,
common sailors, captains of vessels, skippers, both of Europe and America, naval
officers of all countries, and the Governments of several States on the two
continents, were deeply interested in the matter.

For some time past vessels had been met by "an enormous thing," a long object,
spindle-shaped, occasionally phosphorescent, and infinitely larger and more
rapid in its movements than a whale.

Excerpt from *Twenty Thousand Leagues Under the Sea* by **Jules Verne**
```

Those variables we just added are now available in our layout via react props:

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * Our new book component
 */
const Book = ({ _body, book, image, alt, link }) => (
  <article className="partial" style={{ overflow: 'hidden' }}>
    <img src={ image } alt={ alt } style={{ float: 'left', width: '30%' }} />
    <div style={{ float: 'left', width: '68%', margin: '0 0 0 2%' }}>
      { _body }
      <a href={ link } style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
        Read about { book }
      </a>
    </div>
  </article>
);

export default Book;
```

_(I personally would use a proper CSS file here but that is out of scope for this quick basics intro)_

![A screenshot of a browser showing the new layout with the image on the left](/assets/img/website-layout.jpg)
