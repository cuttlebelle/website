---
layout: homepage/examples
headline: Separate content and code
examples:
  - headline: Modularize each page into partials
    text: |
      Each section of your page becomes a markdown file with front-matter. The content can be written in [YAML](http://yaml.org/) or
      [markdown](https://github.com/chjj/marked). A layout is nominated per partial.
    example: |
      ```yaml
      -- -
      layout: cta
      link: Buy our product now
      url: http://your-product.com
      -- -
      
      # Look at our range of products
      
      We have **many** of them.
      ```
  - headline: Write your layout in react
    text: |
      The layout is written in [JSX](https://facebook.github.io/jsx/) as a react component. Each variable in your front-matter becomes a prop of the layout.
    example: |
      ```jsx
      import React, { Fragment } from 'react';
      import PropTypes from 'prop-types';

      /**
       * The Cta component
       */
      const Cta = ({ link, url, _body }) => (
        <section className="cta">
          { _body }
          
          <a className="btn" href={ url }>{ link }</a>
        </section>
      );

      export default Cta;
      ```
---
