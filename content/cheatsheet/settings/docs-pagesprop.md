---
layout: cheats/item
headline: docs.pagesProp
---

To allow us to auto-build the docs we need to fill the default props with some examples.

This is the `_pages` sample data.

```json
{
  "name": "your site",
  "version": "1.0.0",
  "description": "",
  "cuttlebelle": {
    "docs": {
      "pagesProp": {
        "page1": {
          "url": "/page1",
          "title": "Page 1"
        },
        "page2": {
          "url": "/page2",
          "title": "Page 2"
        },
        "page2/nested": {
          "url": "/page2/nested",
          "title": "Nested in page 2"
        },
        "page3": {
          "url": "/page3",
          "title": "Page 3"
        },
        "index": {
          "url": "/",
          "title": "Homepage"
        }
      }
    }
  }
}
```
