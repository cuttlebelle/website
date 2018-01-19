---
layout: cheats/item
headline: site.doctype
---

Because react does not allow you to add [complex doctypes](https://github.com/facebook/react/issues/1035) to an HTML page,
this is where you can declare your own custom doctype.

```json
{
  "name": "your site",
  "version": "1.0.0",
  "description": "",
  "cuttlebelle": {
    "site": {
      "doctype": "<!DOCTYPE html>"
    }
  }
}
```
