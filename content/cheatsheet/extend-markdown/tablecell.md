---
layout: cheats/item
headline: tablecell
---

The `tablecell` default function.

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
