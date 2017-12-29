---
layout: cheats/cheat
section: Extend Markdown
description: |
  You can extend the [built-in markdown parser](https://github.com/chjj/marked#renderer) by defining a `markdownRenderer` file inside your `site`
  settings.

  Read more about how to set this up in the settings section.
cheats:
  - headline: Html entities
    description: Encode HTML entities so content authors don’t have to worry about that.
    example: |
      ```js
      const Marked = require(`marked`);
      const renderer = new Marked.Renderer();

      renderer.preparse = ( markdown ) => {
        return markdown
          .replace(/\™/g, '<span class="markdown-trademark">&trade;</span>')
          .replace(/\’/g, '<span class="markdown-quote">&rsquo;</span>')
          .replace(/\—/g, '<span class="markdown-mdash">&mdash;</span>')
          .replace(/\–/g, '<span class="markdown-ndash">&ndash;</span>')
          .replace(/\.\.\./g, '<span class="markdown-ellipsis">&hellip;</span>');
      };

      module.exports = renderer;
      ```
  - headline: External links
    description: The script below will add `rel="external"` to external links.
    example: |
      ```js
      const Marked = require(`marked`);
      const renderer = new Marked.Renderer();

      renderer.link = ( href, title, text ) => {
        let attr = '';
        if( href.startsWith('http://') || href.startsWith('https://') ) {
          attr = ` `rel="external"``;
        }

        return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
      };

      module.exports = renderer;
      ```
  - headline: Headlines with classes
    description: |
      Sometimes you want to split the semantic value and the look of a headline. The below script will let your content author use the new markdown syntax:
      `# [2]headline` which will render `<h1 class="display-2">headline</h1>` or `# [3]headline` which will render `<h1 class="display-3">headline</h1>`.
    example: |
      ```js
      const Marked = require(`marked`);
      const renderer = new Marked.Renderer();

      const headingLevels = {
        1: 'display-1',
        2: 'display-2',
        3: 'display-3',
        4: 'display-4',
        5: 'display-5',
        6: 'display-6',
      };

      renderer.heading = ( text, level ) => {
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

      module.exports = renderer;
      ```
---
