---
layout: cheats/item
headline: Html entities
---

Encode HTML entities so content authors don’t have to worry about that.

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
