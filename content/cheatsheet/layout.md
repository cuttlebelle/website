---
layout: cheats/cheat
section: Layout
description: |
  Each layout has some default props it inherits from Cuttlebelle.

  Those props begin with an underscore and are described below.
cheats:
  - headline: _ID
    description: |
      The `_ID` of the current page. IDs in cuttlebelle point to a page and a derived from their relative url. They are therefor unique to each page.

      The exception is the index page. This page will be named `index` by default and can be changed in the settings.
    example: |
      ```shell
      /foo/bar/ => foo/bar
      /foo/     => foo
      /         => index
      ```
  - headline: _parents
    description: An array of all parent pages IDs
    example: |
      ```shell
      .
      ├── overview
      ├── products
      │   └── product1
      │       └── detail
      └── index
      ```
      Taking the above file structure into account, the parents for the page `product/product1/detail` would be:
      ```js
      [
        "index",
        "products",
        "products/product1",
        "products/product1/detail"
      ]
      ```
  - headline: _storeSet
    description: You can set data to persist between partials by setting them with this helper.
    example: |
      In one partial:
      ```js
      _storeSet({ variable: "value" });
      ```
      And if you call `_store()` inside another partial below you get:
      ```js
      { variable: "value" }
      ```
  - headline: _store
    description: 'To get the data set by `_storeSet` just call this helper function:'
    example: |
      `partial1.js`:
      ```js
      _storeSet({ variable: "value" });
      ```
      `partial2.js`:
      ```js
      { variable: "value" }
      ```
  - headline: _pages
    description: An object of all pages and their props; with `_ID` as their key. Each page also get the `_url` prop automatically attached.
    example: |
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
        "overview": { /* all props and data etc */ },
        "products": {},
        "products/product1": {},
        "products/product1/detail": {}
        "index": {},
      }
      ```
  - headline: _nav
    description: A nested object of your site structure.
    example: |
      ```shell
      .
      ├── overview
      ├── products
      │   └── product1
      │       └── detail
      └── index
      ```
      Given the structure above; this is what the `_nav` object would look like.:
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
  - headline: _parseMD
    description: A helper function to parse markdown into HTML.
    example: |
      ```js
      const markdownString = 'Hello **World**';

      _parseMD( markdownString );
      ```
      The output would be `'Hello <strong>World</strong>'`.
  - headline: _relativeURL
    description: A helper function to make an absolute URL relative. First argument is the target, second is the base.
    example: |
      ```js
      _relativeURL( '/foo/bar', '/foo' );
      ```
      This would give us `'bar'`.

      In Cuttlebelle, use it with the page `_ID`
      ```js
      _relativeURL( '/foo/bar', _ID )
      ```
      If `_ID` is e.g. `/foobar` then the output of above will be: `'../foo/bar'`.
  - headline: _body
    description: The body of your markdown file (empty for `index.yml` files).
    example: |
      Let’s assume a markdown file like below:

      ```markdown
      Hi there **world**.
      ```

      And a layout file like so:

      ```jsx
      import PropTypes from 'prop-types';
      import React from 'react';

      const Thing = ({ _body }) => (
        <div className="body">{ _body }</div>
      );

      Thing.propTypes = {
        /**
         * _body: (partials)(3)
         */
        _body: PropTypes.node.isRequired,
      };

      export default Thing;
      ```

      Then our output would be:
      ```html
      <div class="body">Hi there <strong>world</strong>.<div>
      ```
---
