---
layout: docs/content
---

Cuttlebelle comes with some default settings you can find below:

```js
"cuttlebelle": {                  // The cuttlebelle object
  "folder": {                     // Where we can adjust folder/file names
    "content": "content/",        // Where does your content live?
    "code": "code/",              // Where do your react layouts live?
    "assets": "assets/",          // Where do your assets live?
    "site": "site/",              // Where do you want to generate your static site to?
    "docs": "docs",               // Where do you want to generate the docs to?
    "index": "index",             // What is the name of the file we look for to generate pages?
    "homepage": "index"           // What should the index folder be named?
  },
  "layouts": {                    // Your layout settings
    "page": "page",               // What is the default layout for pages?
    "partial": "partial"          // What is the default layout for partials?
  },
  "site": {                       // General settings
    "root": "/",                  // What should cuttlebelle append to links?
    "doctype": "<!DOCTYPE html>", // What doctype string do you want to add?
    "redirectReact": true,        // You can disable redirecting `import` calls to the locally
                                  // installed react instance of cuttlebelle rather than your
                                  // local folder.
    "markdownRenderer": "",       // A path to a file that `module.exports` an Marked.Renderer()
                                  // object. Learn more about it here:
                                  // https://github.com/chjj/marked#renderer
                                  // The only addition is the `preparse` key that will be run
                                  // before we go into the markdown parsing
    "watchTimeout": 400           // This is the time in milliseconds the watch waits
                                  // to detect a double saves action
    "browserSync": {}             // You can overwrite the browserSync options here
                                  // https://www.browsersync.io/docs/options
    "globalProp": {}              // A global prop that can be set here accessible for all pages
  },
  "docs": {                                          // Docs settings
    "root": "files/",                                // What is the root folder called where all
                                                     // categories are generated in
    "index": ".template/docs/layout/index.js",       // The path to the index layout file
    "category": ".template/docs/layout/category.js", // The path to the category layout file
                                                     // All following settings are the default props
                                                     // each component is given for the example

                                                     // The following props are important so we
                                                     // can generate the docs example:
    "IDProp": "page2",                               // The _ID prop
    "selfProp": "body.md",                           // The _self prop
    "navProp": {                                     // The _nav prop
      "index": {
        "page1": "page1",
        "page2": {
          "page2/nested": "page2/nested"
        },
        "page3": "page3"
      }
    },
    "pagesProp": {                                   // The _pages prop
      "page1": {
        "_url": "/page1",
        "title": "Page 1"
      },
      "page2": {
        "_url": "/page2",
        "title": "Page 2"
      },
      "page2/nested": {
        "_url": "/page2/nested",
        "title": "Nested in page 2"
      },
      "page3": {
        "_url": "/page3",
        "title": "Page 3"
      },
      "index": {
        "_url": "/",
        "title": "Homepage"
      }
    }
  }
}
```

To change any of the settings Cuttlebelle looks into your local `package.json` file for the `cuttlebelle` object.
Let’s take the default `package.json` content:

```diff
{
  "name": "your name",
  "version": "1.0.0",
  "description": "Your description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

And just make a change to the site folder like so:

```diff
{
  "name": "your name",
  "version": "1.0.0",
  "description": "Your description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
+ "cuttlebelle": {
+   "folder": {
+     "site": "anotherfolder"
+   }
+ },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Run Cuttlebelle and see your pages generate into the `anotherfolder/` folder.
A complete list of all settings can be found in our [cheat-sheet](/cheatsheet/).
