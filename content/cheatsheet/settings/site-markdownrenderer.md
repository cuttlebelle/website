---
layout: cheats/item
headline: site.markdownRenderer
---

The path to a file that `module.exports` an Marked.Renderer() object. Learn more about it in the
[marked documentation](https://github.com/chjj/marked#renderer).

The only Cuttlebelle addition is the `preparse` key that will be run before we go into the markdown parsing.
Path relative to your `package.json` file.

```json
{
  "name": "your site",
  "version": "1.0.0",
  "description": "",
  "cuttlebelle": {
    "site": {
      "markdownRenderer": ""
    }
  }
}
```
