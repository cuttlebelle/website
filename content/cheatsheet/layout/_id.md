---
layout: cheats/item
headline: _ID
---

The `_ID` of the current page. IDs in cuttlebelle point to a page and a derived from their relative url. They are therefor unique to each page.

The exception is the index page. This page will be named `index` by default and can be changed in the settings.

```shell
/foo/bar/ => foo/bar
/foo/     => foo
/         => index
```
