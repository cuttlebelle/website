---
layout: docs/content
---

The `assets/` folder will be copied as is into your `site/` folder on compile time. This means you can organize it the way you want. It also means you may not
want to add your Sass files or unminified js files in there.

Typically it helps if you keep your source files out of this folder and compile them into it. Cuttlebelles watch will notice the new file and move it into it’s
appropriate place inside the `site/` folder.

A setup could look like this:

```shell
.
├── assets               # this is your assets folder
│   ├── css              # it contains some compiled css
│   │   └── site.min.css
│   └── js               # and some minified javascript
│       └── script.min.js
│
├── code                 # this is your code folder
│   ├── page.js          # with a page layout
│   └── partial.js       # and a partial layout
│
├── content              # we also got your content folder
│   └── index            # with a single page
│       ├── body.md
│       └── index.yml
│
├── js                   # this folder is ignored by Cuttlebelle
│   └── script.js        # you can have your source js here
│                        # that uglifies into your assets folder
│
└── sass                 # the same with your sass
    └── style.scss       # it can compile from here into
                         # your assets folder
```

Now all you need is to watch your source files and run the appropriate task.
See below an example `package.json` with some npm scripts.

```js
{
  "name": "Cuttlebelle-test-site",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "docs": "cuttlebelle docs",
    "build:site": "cuttlebelle",
    "build:sass": "node-sass --output-style compressed -o assets/css sass/style.scss",
    "build:js": "uglifyjs js/script.js --compress --output assets/js/script.js",
    "build": "npm run build:sass && npm run build:js && npm run build:site",
    "watch:sass": "onchange 'sass/**/*.scss' -- npm run build:sass",
    "watch:js": "onchange 'js/**/*.js' -- npm run build:js",
    "watch:site": "cuttlebelle watch -n",
    "watch": "npm run build && npm run watch:sass | npm run watch:js | npm run watch:site"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "onchange": "^3.3.0"
  },
  "dependencies": {
    "node-sass": "^4.7.2",
    "uglify-js": "^3.3.7"
  }
}
```

It will compile your Sass into `assets/css/style.css` and uglify your javascript into `assets/js/script.js` and watch for changes in all files.
