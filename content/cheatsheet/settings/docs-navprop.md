---
layout: cheats/item
headline: docs.navProp
---

To allow us to auto-build the docs we need to fill the default props with some examples.

This is the `_nav` sample data.

```json
{
  "name": "your site",
  "version": "1.0.0",
  "description": "",
  "cuttlebelle": {
    "docs": {
      "navProp": {
        "index": {
          "page1": "page1",
          "page2": {
            "page2/nested": "page2/nested"
          },
          "page3": "page3"
        }
      }
    }
  }
}
```
