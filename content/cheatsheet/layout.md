---
layout: cheats/cheat
section: Layout
description: |
  Each layout has some default props it inherits from Cuttlebelle. Those props begin with an underscore and are described below.
cheats:
  - headline: _ID
    description: |
      The `_ID` of the current page. IDs in cuttlebelle point to a page and a derived from their relative url. They are therefor unique to each page.

      The exception is the index page. This page will be named `index` by default and can be changed in the settings.
    example: |
      ```
      /foo/bar/ => foo/bar
      /foo/     => foo
      /         => index
      ```
  - headline: _parents
    description: An array of all parent pages IDs
    example: |
      ```
      .
      ├── overview
      ├── products
      │   └── product1
      │       └── detail
      └── index

      parents for product/product1/detail
      =>
      [
        "index",
        "products",
        "products/product1",
        "products/product1/detail"
      ]
      ```
  - headline: _storeSet
    description: You can set data to persist between react components by setting them with this helper.
    example: |
      ```
      In one partial:
      _storeSet({ variable: "value" });

      in another partial below it:
      _store()
      =>
      { variable: "value" }
      ```
  - headline: _store
    description: To get the data set by `_storeSet` just call this helper function
    example: |
      ```
      _store()
      =>
      { variable: "value" }
      ```
  - headline: _pages
    description: An object of all pages and their props; with `_ID` as their key.
    example: |
      ```
      .
      ├── overview
      ├── products
      │   └── product1
      │       └── detail
      └── index

      _pages
      =>
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
      ```
      .
      ├── overview
      ├── products
      │   └── product1
      │       └── detail
      └── index

      _nav
      =>
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
      ```
      const markdownString = 'Hello **World**';

      _parseMD( markdownString )
      =>
      'Hello <strong>World</strong>'
      ```
  - headline: _relativeURL
    description: A helper function to make an absolute URL relative. First argument is the target, second is the base.
    example: |
      ```
      _relativeURL( '/foo/bar', '/foo' )
      =>
      'bar'

      In Cuttlebelle use it with the page _ID:
      _relativeURL( '/foo/bar', _ID )

      If _ID is e.g. '/foobar' then the output of above will be:
      '../foo/bar'
      ```
  - headline: _body
    description: The body of your markdown file (empty for `index.yml` files).
    example: |
      ```
      _body
      =>
      Whatever has been saved below the three dashes
      ```
---
