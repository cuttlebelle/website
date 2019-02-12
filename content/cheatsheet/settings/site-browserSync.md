---
layout: cheats/item
headline: site.browserSync
---

You can overwrite some browser sync settings. For full options check out the [documentation for BrowserSync](https://github.com/chjj/marked#renderer)

```json
{
  "name": "your site",
  "version": "1.0.0",
  "description": "",
  "cuttlebelle": {
    "site": {
      "browserSync": {
        "port": 1337,
        "open": false
      }
    }
  }
}
```
