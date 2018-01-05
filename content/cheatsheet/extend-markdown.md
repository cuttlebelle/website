---
layout: cheats/cheat
section: Extend Markdown
description: |
  You can extend the [built-in markdown parser](https://github.com/chjj/marked#renderer) by defining a `markdownRenderer` file inside your `site`
  settings.

  Read more about how to set this up in the settings section.
cheats:
  - headline: How to
    description: |
      To extend the built-in markdown parser you have to create a file and add the path to that file to your `cuttlebelle.site.markdownRenderer` setting inside
      your `package.json` file.
    example: |
      ```js
      // export a function called `renderer`
      module.exports = exports = function renderer({
        Marked,      // The MArked instance you want to extend
        _ID,         // The ID of the current page
        _parents,    // An array of all parent pages IDs
        _storeSet,   // The store setter
        _store,      // The store getter
        _nav,        // A nested object of your site structure
        _relativeURL // A helper function to make an absolute URL relative
      }) {

        // extend one of the listed methods here
        Marked.hr = () => {
          return `<hr />`;
        };

        // and remember to return the Marked instance
        return Marked;
      };
      ```
      So if you want to extend two or more methods you add them all before the export call in the end:
      ```js
      module.exports = exports = function renderer({ Marked, _ID }) {

        Marked.hr = () => {
          return `<hr />`;
        };

        Marked.blockquote = ( quote ) => {
          return `<blockquote>${ quote }</blockquote>`;
        };

        return Marked;
      };
      ```

  - headline: code
    description: code
    example: |
      ```js
      code(string code, string language)
      ```
  - headline: blockquote
    description: blockquote
    example: |
      ```js
      blockquote(string quote)
      ```
  - headline: html
    description: html
    example: |
      ```js
      html(string html)
      ```
  - headline: heading
    description: heading
    example: |
      ```js
      heading(string text, number level)
      ```
  - headline: hr
    description: hr
    example: |
      ```js
      hr()
      ```
  - headline: list
    description: list
    example: |
      ```js
      list(string body, boolean ordered)
      ```
  - headline: listitem
    description: listitem
    example: |
      ```js
      listitem(string text)
      ```
  - headline: paragraph
    description: paragraph
    example: |
      ```js
      paragraph(string text)
      ```
  - headline: table
    description: table
    example: |
      ```js
      table(string header, string body)
      ```
  - headline: tablerow
    description: tablerow
    example: |
      ```js
      tablerow(string content)
      ```
  - headline: tablecell
    description: tablecell
    example: |
      ```js
      {
        header: true || false,
        align: 'center' || 'left' || 'right'
      }
      ```
      thing
      ```js
      tablecell(string content, object flags)
      ```
  - headline: strong
    description: strong
    example: |
      ```js
      strong(string text)
      ```
  - headline: em
    description: em
    example: |
      ```js
      em(string text)
      ```
  - headline: codespan
    description: codespan
    example: |
      ```js
      codespan(string code)
      ```
  - headline: br
    description: br
    example: |
      ```js
      br()
      ```
  - headline: del
    description: del
    example: |
      ```js
      del(string text)
      ```
  - headline: link
    description: link
    example: |
      ```js
      link(string href, string title, string text)
      ```
  - headline: image
    description: image
    example: |
      ```js
      image(string href, string title, string text)
      ```

  - headline: Html entities
    description: Encode HTML entities so content authors don’t have to worry about that.
    example: |
      ```js
      module.exports = exports = function renderer({ Marked, _ID }) {

        Marked.preparse = ( markdown ) => {
          return markdown
            .replace(/\™/g, '<span class="markdown-trademark">&trade;</span>')
            .replace(/\’/g, '<span class="markdown-quote">&rsquo;</span>')
            .replace(/\—/g, '<span class="markdown-mdash">&mdash;</span>')
            .replace(/\–/g, '<span class="markdown-ndash">&ndash;</span>')
            .replace(/\.\.\./g, '<span class="markdown-ellipsis">&hellip;</span>');
        };

        return Marked;
      };
      ```
  - headline: External links
    description: The script below will add `rel="external"` to external links.
    example: |
      ```js
      module.exports = exports = function renderer({ Marked, _ID }) {

        Marked.link = ( href, title, text ) => {
          let attr = '';
          if( href.startsWith('http://') || href.startsWith('https://') ) {
            attr = ` `rel="external"``;
          }

          return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
        };

        return Marked;
      };
      ```
  - headline: Headlines with classes
    description: |
      Sometimes you want to split the semantic value and the look of a headline. The below script will let your content author use the new markdown syntax:
      `# [2]headline` which will render `<h1 class="display-2">headline</h1>` or `# [3]headline` which will render `<h1 class="display-3">headline</h1>`.
    example: |
      ```js
      module.exports = exports = function renderer({ Marked, _ID }) {

        const headingLevels = {
          1: 'display-1',
          2: 'display-2',
          3: 'display-3',
          4: 'display-4',
          5: 'display-5',
          6: 'display-6',
        };

        Marked.heading = ( text, level ) => {
          let display;

          if( text.startsWith('[') ) {
            const displayText = text.split(']');
            display = displayText[ 0 ].substring( 1 );

            text = displayText.splice( 1 ).join(']');
          }
          else {
            display = Object.keys( headingLevels ).reverse()[ level ];
          }

          return `<h${ level }${ headingLevels[ display ] ? ` class="${ headingLevels[ display ] }"` : `` }>${ text }</h${ level }>`;
        };

        return Marked;
      };
      ```
---
