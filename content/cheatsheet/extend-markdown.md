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
        Marked,      // The Marked instance you want to extend
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
      And if you want to extend two or more methods you add them all onto the `Marked` method.
      ```js
      module.exports = exports = function renderer({ Marked }) {

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
    description: The `code` default function.
    example: |
      ```js
      Marked.code = ( code, language ) => {
        if( !language ) {
          return `<pre><code>${ code }\n</code></pre>`;
        }

        return `<pre class="language-${ language }"><code>${ code }\n</code></pre>\n`;
      }
      ```
  - headline: blockquote
    description: The `blockquote` default function.
    example: |
      ```js
      Marked.blockquote = ( quote ) => {
        return `<blockquote>\n${ + quote + }</blockquote>\n`;
      }
      ```
  - headline: html
    description: The `html` default function.
    example: |
      ```js
      Marked.html = ( html ) => {
        return html;
      }
      ```
  - headline: heading
    description: The `heading` default function.
    example: |
      ```js
      Marked.heading = ( text, level ) => {
        return `<h${ level } id="${ text.toLowerCase().replace(/[^\w]+/g, '-') }">${ text }</h${ level }>\n`;
      }
      ```
  - headline: hr
    description: The `hr` default function.
    example: |
      ```js
      Marked.hr = () => {
        return `<hr>\n`;
      }
      ```
  - headline: list
    description: The `list` default function.
    example: |
      ```js
      Marked.list = ( body, ordered ) => {
        const type = ordered ? 'ol' : 'ul';

        return `<${ type }>\n${ body }</${ type }>\n`;
      }
      ```
  - headline: listitem
    description: The `listitem` default function.
    example: |
      ```js
      Marked.listitem = ( text ) => {
        return `<li>${ text }</li>\n`;
      }
      ```
  - headline: paragraph
    description: The `paragraph` default function.
    example: |
      ```js
      Marked.paragraph = ( text ) => {
        return `<p>${ text }</p>\n`;
      }
      ```
  - headline: table
    description: The `table` default function.
    example: |
      ```js
      Marked.table = ( header, body ) => {
        return `<table>\n<thead>\n${ header }</thead>\n<tbody>\n${ body }</tbody>\n</table>\n`;
      }
      ```
  - headline: tablerow
    description: The `tablerow` default function.
    example: |
      ```js
      Marked.tablerow = ( content ) => {
        return `<tr>\n${ content }</tr>\n`;
      }
      ```
  - headline: tablecell
    description: The `tablecell` default function.
    example: |
      ```js
      Marked.tablecell = ( content, flags ) => {
        const type = flags.header ? 'th' : 'td';
        const tag = flags.align
          ? `<${ type } style="text-align:${ flags.align }">`
          : `<${ type }>`;

        return `${ tag }${ content }</${ type }>\n`;
      }
      ```
      The `flag` option can be:
      ```js
      {
        header: true || false,
        align: 'center' || 'left' || 'right',
      }
      ```
  - headline: strong
    description: The `strong` default function.
    example: |
      ```js
      Marked.strong = ( text ) => {
        return `<strong>${ text }</strong>`;
      }
      ```
  - headline: em
    description: The `em` default function.
    example: |
      ```js
      Marked.em = ( text ) => {
        return `<em>${ text }</em>`;
      }
      ```
  - headline: codespan
    description: The `codespan` default function.
    example: |
      ```js
      Marked.codespan = ( code ) => {
        return `<code>${ text }</code>`;
      }
      ```
  - headline: br
    description: The `br` default function.
    example: |
      ```js
      Marked.br = () => {
        return `<br>`;
      }
      ```
  - headline: del
    description: The `del` default function.
    example: |
      ```js
      Marked.del = ( text ) => {
        return `<del>${ text }</del>`;
      }
      ```
  - headline: link
    description: The `link` default function.
    example: |
      ```js
      Marked.link = ( href, title, text ) => {
        let out = `<a href="${ href }"`;

        if( title ) {
          out += ` title="${ title }"`;
        }

        out += `>${ text }</a>`;

        return out;
      }
      ```
  - headline: image
    description: The `image` default function.
    example: |
      ```js
      Marked.image = ( href, title, text ) => {
        let out = `<img src="${ href }" alt="${ text }"`;

        if( title ) {
          out += ` title="${ title }"`;
        }

        out += '>';

        return out;
      }
      ```
  - headline: text
    description: The `text` default function.
    example: |
      ```js
      Marked.text = ( text ) => {
        return text;
      }
      ```
  - headline: preparse
    description: |
      The `preparse` default function.

      _Cuttlebelle let’s you run code on the content of markdown before it goes into the markdown renderer via the `preparse` function._
    example: |
      ```js
      Marked.preparse = ( markdown ) => {
        return markdown;
      };
      ```
  - headline: Html entities
    description: Encode HTML entities so content authors don’t have to worry about that.
    example: |
      ```js
      module.exports = exports = function renderer({ Marked }) {

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
  - headline: Relative links
    description: The script below will make all links relative to your current page.
    example: |
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
  - headline: External links
    description: The script below will add `rel="external"` to external links.
    example: |
      ```js
      module.exports = exports = function renderer({ Marked }) {

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
      module.exports = exports = function renderer({ Marked }) {

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
