---
layout: docs/content
---

Each folder inside the `content` folder with an `index.yml` file represents a web page. Inside those folders you keep what Cuttlebelle call `partials`.
Each partial has a part of the content of your page. It is all glued together by the `index.yml` file. This file lists all the partials in the order you want
them to appear on the page.

If we look at the folder inside `content` now you will notice two folders.

```shell
.
├── _shared
│   ├── footer.md
│   └── header.md
└── index
    ├── body.md
    └── index.yml
```

The `index` folder is special. It represents the root of your website. It will compile to `yourwebsite.com/`.
Note that the `_shared` folder does not have an `index.yml` file. That means this folder won’t be generating any web pages.

Now let’s add a new page. Create a folder inside `content` called `page1`. Inside there add a file called `index.yml`.
Your folder structure should now look like this:

```shell
├── assets
│   └── css
│       └── site.css
├── code
│   ├── page.js
│   └── partial.js
├── content
│   ├── _shared
│   │   ├── footer.md
│   │   └── header.md
│   ├── index
│   │   ├── body.md
│   │   └── index.yml
│   └── page1           # <-- Our new folder
│       └── index.yml
└── site
    ├── assets
    │   └── css
    │       └── site.css
    └── index.html

10 directories, 10 files
```

Inside the `index.yml` copy / paste the below content.

```yaml
title: Homepage

main:
  - body.md
```

Now in your browser append `/page1` to your URL. You should now see the new site.

TODO: image

Let’s have a look at this `index.yml` file again.

The `title: Homepage` is just the title of this page. It should be visible in the header of your browser.

The `- Hello world` bit is the main body part of this page. It should just read `Hello world` in the browser.
But `Hello world` is not really a lot of content nor is it particular helpful.
Let’s imagine we want to add a whole sentence or even a paragraph here. Adding all that content into the `index.yml` will be hard to follow so let’s create
our first partial.

Create a new file called `body.md` inside the `page1/` folder and put some paragraphs inside of it. See example below.
_(An excerpt from the 1870 novel `Twenty Thousand Leagues Under the Sea` by `Jules Verne`)_

```markdown
The year 1866 was signalised by a remarkable incident, a mysterious and puzzling
phenomenon, which doubtless no one has yet forgotten. Not to mention rumours
which agitated the maritime population and excited the public mind, even in the
interior of continents, seafaring men were particularly excited. Merchants,
common sailors, captains of vessels, skippers, both of Europe and America, naval
officers of all countries, and the Governments of several States on the two
continents, were deeply interested in the matter.

For some time past vessels had been met by "an enormous thing," a long object,
spindle-shaped, occasionally phosphorescent, and infinitely larger and more
rapid in its movements than a whale.
```

And now replace your `Hello world` string inside the `page1/index.yml` with `body.md` so that it looks like this:

```yaml
title: Homepage

main:
  - body.md
```

Your browser should refresh automatically and you see the new content.

You’ve done it. You created a new page.
