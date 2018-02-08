---
layout: docs/content
---

All default props begin with an underscore `_` to avoid overwriting possible user settings.


| prop name      | description                                                                           
|----------------|---------------------------------------------------------------------------------------
| `_ID`          | The ID of the current page
| `_self`        | The relative path to the content file; can be md or yaml file
| `_isDocs`      | A boolean value, `true` in docs context only
| `_parents`     | An array of all parent pages IDs
| `_body`        | The body of your markdown file (empty for `index.yml` files)
| `_pages`       | An object of all pages and their props; with ID as key
| `_nav`         | A nested object of your site structure
| `_storeSet`    | You can set data to persist between react components by setting them with this helper
| `_store`       | To get that data just call this prop function
| `_relativeURL` | A helper function to make an absolute URL relative
| `_parseMD`     | A helper function to parse markdown into HTML
| `_parseYaml`   | A helper function to parse yaml into an object
| `_parseReact`  | A helper function to parse a react component into a string


---

### `_ID`

The `_ID` of the current page. IDs in cuttlebelle point to a page and a derived from their relative url. They are therefor unique to each page.

The exception is the index page. This page will be named `index` by default and can be changed in the settings.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _ID }) => (
  <Fragment>
    { _ID }
  </Fragment>
);

export default Test;
```

This could output:

```
/foo/bar/ => foo/bar
/foo/     => foo
/         => index
```

---

### `_self`

`_self` is the relative path of the current partial markdown or index.yml.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _self }) => (
  <Fragment>
    { _self }
  </Fragment>
);

export default Test;
```

This could output:

```
page2/index.yml
page1/partial1.md
page4/subpage/partial-x.md
```


---

### `_isDocs`

`_isDocs` is a boolean that let’s you know if your layout is running in docs content or not. In the docs you may not have all variables available to you so
this comes in handy to write alternative logic so your automated documentation is still spot on.

The value will be `false` when compiling with `cuttlebelle` but true when you compile your layouts with `cuttlebelle docs`.

---

### `_parents`

This is an array of all parent pages IDs of the current page. The `index` page is always the absolute last parent.

```jsx
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * A test component
 */
const Test = ({ _parents }) => (
  <Fragment>
    { JSON.stringify( _parents ) }
  </Fragment>
);

export default Test;
```

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```

If we had the above pages and we are on the detail page we would get:

```
[
  "products/product1/detail"
  "products/product1",
  "products",
  "index",
]
```

---

### `_body`

The parsed HTML of your markdown file _(This prob is empty for all `index.yml` files)_.

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

Let’s assume a markdown file like below:

```markdown
---
layout: test
---

Hi there **world**.
```

Then our output would be:

```html
<div>Hi there <strong>world</strong>.<div>
```

---

### `_pages`

This is an object of all pages and their props; with `_ID` as their key.
Each page also get the `_url` prop automatically attached.

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```

Given the structure above; this is what the `_pages` object would look like:

```js
{
  "overview": { /* all props and data etc of this page */ },
  "products": { /* all props and data etc of this page */ },
  "products/product1": { /* all props and data etc of this page */ },
  "products/product1/detail": { /* all props and data etc of this page */ }
  "index": { /* all props and data etc of this page */ },
}
```

The object for a single page `_pages[ 'index' ]` could look something like this depending on what you pass in:

```js
{
  "title": "Homepage",
  "header": ["/_shared/header.md"],
  "main": ["body.md"],
  "footer": ["/_shared/footer.md"],
  "_url": "/"
}
```

---

### `_nav`

This is a nested object of your site structure with the IDs as keys and values.

```shell
.
├── overview
├── products
│   └── product1
│       └── detail
└── index
```

Given the structure above; this is what the `_nav` object would look like:

```js
{
  "overview": "overview",
  "products": {
    "product1": {
      "detail": "detail"
    }
  },
  "index": "index"
}
```

You can use those IDs to look more data up via the `_pages` prop.

```js
Object.keys( _nav ).map( ( page, i ) => (
  console.log( _pages[ page ]._url );
));
```

---

### `_storeSet`

You can set data to persist between partials by setting them with this helper.
This can be helpful if you want to let a layout know something has happened.
The data will be added one partial at the time. So if you add the data in one partial, the next will have access to it.

```js
_storeSet({ variable: "value" });
```

If you call `_store()` inside another partial that was included below the above partial then you get:

```js
{ variable: "value" }
```

---

### `_store`

To get the data set by `_storeSet` just call this helper function.

```js
console.log( _store() );
```

---

### `_relativeURL`

A helper function to make an absolute URL relative. First argument is the target, second is the base.

```js
_relativeURL( '/foo/bar', '/foo' );
```

This would give us `'bar'`. In Cuttlebelle, use it with the page `_ID`

```js
_relativeURL( '/foo/bar', _ID )
```

If `_ID` is e.g. `/foobar` then the output of above will be: `'../foo/bar'`.

---

### `_parseMD`

A helper function to parse markdown into HTML.

```js
const markdownString = 'Hello **World**';

_parseMD( markdownString );
```

The output would be `'Hello <strong>World</strong>'`.

---

### `_parseYaml`

A helper function to parse YAML into an javascript object.

```js
const yamlString = `
  test:
    - one
    - two
`;

_parseYaml( yamlString );
```
The output would be `[ 'one', 'two' ]`.

---

### `_parseReact`

A helper function to parse a react component into a string

```js
import Card from './cards';

_parseReact( <Card name="Card name" shadow={ true } /> );
```
The output would be whatever your component renders out as a string.

You can use it via `dangerouslySetInnerHTML` but you might as well use it directly then.
