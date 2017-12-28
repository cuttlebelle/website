---
layout: cheats/cheat
section: Auto-documentation
description: |
  We use [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) to tell Cuttlebelle know what each layout needs. It then can generate component
  documentation for you all automatically.

  Cuttlebelle reads the comment right above your PropType declaration for sample data for the documentation site.
cheats:
  - headline: Magic partial
    description: |
      You can use the magic string `(partial)[2]` to fill your documentation with a partial block. The number inside the `[]` defines how many
      partial blocks will be rendered for you in the documentation.
    example: |
      ```
      Page.propTypes = {
        /**
         * _body: (partials)(4)
         */
        _body: PropTypes.node.isRequired,
      }
      ```
  - headline: Magic text
    description: |
      You can use the magic string `(text)[2]` to fill your documentation with some placeholder text. The number inside the `[]` defines how many
      sentences will be rendered for you in the documentation.
    example: |
      ```
      Page.propTypes = {
        /**
         * description: (text)(2)
         */
        description: PropTypes.node.isRequired,
      }
      ```
  - headline: Optional / required
    description: Tell your content authors that a certain prop is optional or required.
    example: |
      ```
      Page.propTypes = {
        /**
         * title: Homepage
         */
        title: PropTypes.string.isRequired, // This prop is required

        /**
         * subtitle: The place to be
         */
        subtitle: PropTypes.string,         // This prop is optional
      }
      ```
  - headline: String
    description: Define your prop as a string and warn if the type is mismatched.
    example: |
      ```
      Page.propTypes = {
        /**
         * title: Homepage
         */
        title: PropTypes.string,
      }
      ```
  - headline: Array
    description: A list of strings.
    example: |
      ```
      Page.propTypes = {
        /**
         * list:
         *   - one
         *   - two
         *   - three
         */
        list: PropTypes.array,
      }
      ```
  - headline: Object
    description: An object of things. This is often more content author friendly.
    example: |
      ```
      Page.propTypes = {
        /**
         * link:
         *   text: Homepage
         *   url: /
         */
        link: PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        }),
      }
      ```
  - headline: Array - object
    description: A list of objects. Some values are marked as required here just as an example.
    example: |
      ```
      /**
       * linklist:
       *   - text: Install the thing
       *     url: /install
       *   - text: Use the thing
       *     url: /docs
       *   - text: Enhance the thing
       *     url: /contribute
       */
      linklist: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string.isRequired,
        })
      ).isRequired,
      ```
  - headline: Object - array
    description: bla bla
    example: |
      ```
      Page.propTypes = {
        /**
         * select:
         *   label: Please select a state
         *   selected: NSW
         *   choices:
         *     - VIC
         *     - WA
         *     - NT
         *     - NSW
         *     - QL
         *     - ACT
         *     - SA
         *     - TAS
         */
        select: PropTypes.shape({
          label: PropTypes.string,
          selected: PropTypes.string,
          choices: PropTypes.array,
        }),
      }
      ```
  - headline: Hide from docs
    description: |
      You can hide a layout for the documentation when you think it would just confuse the content author or when it’s just used a code component.

      Please the `@disable-docs` anywhere into your component.
    example: |
      ```
      import PropTypes from 'prop-types';
      import React from 'react';

      /**
       * The partial component
       *
       * @disable-docs
       */
      const Partial = ({ _body }) => (
        <div className="body">{ _body }</div>
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
---
