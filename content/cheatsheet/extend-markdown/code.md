---
layout: cheats/item
headline: code
---

The `code` default function.

```js
Marked.code = ( code, language ) => {
  if( !language ) {
    return `<pre><code>${ code }\n</code></pre>`;
  }

  return `<pre class="language-${ language }"><code>${ code }\n</code></pre>\n`;
}
```
