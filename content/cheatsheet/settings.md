---
layout: cheats/cheat
section: Settings
description: |
  The default settings of Cuttlebelle can be changed by adding a `cuttlebelle` object to your `package.json` file.

  All below examples show the default values.
cheats:
  - headline: folder.content
    description: The folder in which your content lives. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "content": "content/"
          }
        }
      }
      ```
  - headline: folder.code
    description: The folder in which your layout components live. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "code": "code/"
          }
        }
      }
      ```
  - headline: folder.site
    description: The folder in which your site content is supposed to be generated into. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "site": "site/"
          }
        }
      }
      ```
  - headline: folder.docs
    description: The folder in which your layout documentation is supposed to be generated into. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "docs": "docs/"
          }
        }
      }
      ```
  - headline: folder.index
    description: The name of the YAML file that describes the partials of a page.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "index": "index"
          }
        }
      }
      ```
  - headline: folder.homepage
    description: The name of the homepage folder.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "folder": {
            "homepage": "index"
          }
        }
      }
      ```
  - headline: layouts.page
    description: |
      The name and location of the default page layout. Path relative to your `code` folder.

      The `.js` extension should be omitted.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "layouts": {
            "page": "page"
          }
        }
      }
      ```
  - headline: layouts.partial
    description: |
      The name and location of the default partial layout. Path relative to your `code` folder.

      The `.js` extension should be omitted.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "layouts": {
            "partial": "partial"
          }
        }
      }
      ```
  - headline: site.root
    description: What should cuttlebelle append to links?
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "site": {
            "root": "/"
          }
        }
      }
      ```
  - headline: site.doctype
    description: Because react does not allow you to change the doctype of an HTML page, this is where you can declare your own custom doctype.
    example: |
      ```
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
  - headline: site.redirectReact
    description: You can disable redirecting `import` calls to the locally installed react instance of cuttlebelle rather than your local folder.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "site": {
            "redirectReact": true
          }
        }
      }
      ```
  - headline: site.markdownRenderer
    description: |
      The path to a file that `module.exports` an Marked.Renderer() object. Learn more about it in the
      [marked documentation](https://github.com/chjj/marked#renderer).

      The only Cuttlebelle addition is the `preparse` key that will be run before we go into the markdown parsing.
      Path relative to your `package.json` file.
    example: |
      ```
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
  - headline: site.watchTimeout
    description: This is the time in milliseconds the watch waits to detect a double saves action.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "site": {
            "watchTimeout": 400
          }
        }
      }
      ```
  - headline: docs.root
    description: What is the root folder called where all categories are generated in.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "docs": {
            "root": "files/"
          }
        }
      }
      ```
  - headline: docs.index
    description: The path to the index layout file. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "docs": {
            "index": ".template/docs/layout/index.js"
          }
        }
      }
      ```
  - headline: docs.category
    description: The path to the category layout file. Path relative to your `package.json` file.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "docs": {
            "category": ".template/docs/layout/category.js"
          }
        }
      }
      ```
  - headline: docs.IDProp
    description: |
      To allow us to auto-build the docs we need to fill the default props with some examples.

      This is the `_ID` sample data.
    example: |
      ```
      {
        "name": "your site",
        "version": "1.0.0",
        "description": "",
        "cuttlebelle": {
          "docs": {
            "IDProp": "page2"
          }
        }
      }
      ```
  - headline: docs.navProp
    description: |
      To allow us to auto-build the docs we need to fill the default props with some examples.

      This is the `_nav` sample data.
    example: |
      ```
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
  - headline: docs.pagesProp
    description: |
      To allow us to auto-build the docs we need to fill the default props with some examples.

      This is the `_pages` sample data.
    example: |
      ```
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
---
