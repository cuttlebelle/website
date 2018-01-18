---
layout: docs/content
---

Cuttlebelle is designed to make it easy to change content. Even without prior knowledge of code.
To make changes to content all you have to do it find the partial that contains the content and change it. But as usual it’s not quite as easy.

First it’s important to understand how a page is constructed. Each folder inside your `content/` folder that contains an `index.yml` file becomes a page.

![An animation of how partials add content blocks to your browser](/assets/img/filesystem.gif)

Let’s assume the below folder structure:

```shell
.
├── _shared
│   ├── footer.md
│   └── header.md
├── index
│   ├── body.md
│   └── index.yml
├── page1
│   ├── body.md
│   ├── cta.md
│   ├── index.yml
│   ├── subpage1
│   │   ├── docs.md
│   │   ├── index.yml
│   │   └── main.md
│   └── table.md
└── page2
    ├── body.md
    ├── index.yml
    └── products.md

5 directories, 14 files
```

Such a structure would generate below web pages:

```shell
.
├── index.html
├── page1
│   ├── index.html
│   ├── subpage1
│       └── index.html
└── page2
    └── index.html
```

Note how we don’t have a `_shared` web page. That’s because it did not contain an `index.yml` file.

Each of those `index.yml` files contains each section of the web page. We call them partials.

```yaml
title: My homepage

partials:
  - /_shared/header.md
  - cta.md
  - body.md
  - table.md
  - /_shared/footer.md
```

We use [YAML](http://yaml.org/) to write this file. When an item ends with `.md` and that file actually exists in your folders relative to your `index.yml` it
will be replaced as a partial. Items that begin with `/` resolve relative to the root content folder. That way you don’t have to rewrite the path every time you
include the same partial in a different location.

A partial file is a markdown file that can optionally have front matter. Front matter is the top section of a markdown file that is separated by `---`.
Let’s have a look at a markdown file *without* front matter.

```markdown
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at saepe
reprehenderit debitis, quibusdam consectetur. Expedita modi sed consequuntur
delectus accusantium obcaecati eligendi aut facere iure. Illo, quae, delectus!
```

And a markdown file *with* front matter.

```yaml
---
layout: products
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at saepe
reprehenderit debitis, quibusdam consectetur. Expedita modi sed consequuntur
delectus accusantium obcaecati eligendi aut facere iure. Illo, quae, delectus!
```
