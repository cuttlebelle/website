---
layout: cheats/item
headline: _relativeURL
---

A helper function to make an absolute URL relative. First argument is the target, second is the base.

```js
_relativeURL( '/foo/bar', '/foo' );
```

This would give us `'bar'`.

In Cuttlebelle, use it with the page `_ID`

```js
_relativeURL( '/foo/bar', _ID )
```

If `_ID` is e.g. `/foobar` then the output of above will be: `'../foo/bar'`.
