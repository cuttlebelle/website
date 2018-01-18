---
layout: docs/content
---

To start using Cuttlebelle make sure you got [NodeJs](https://nodejs.org/en/) installed.

**Install Cuttlebelle** so that the `cuttlebelle` command is available to you globally.

```shell
npm install cuttlebelle -g
```

Run the `init` command now to get you started with a bunch of files and a minimum layout.

💡 Make sure you run this in an empty folder

```shell
cuttlebelle init
```

This command will create the below files and compile them for you into the `site` folder.

```shell
.
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
│   └── index
│       ├── body.md
│       └── index.yml
└── site
    ├── assets
    │   └── css
    │       └── site.css
    └── index.html

9 directories, 9 files
```

Now running the watch command will open the browser for you and show you what you got so far.

```shell
cuttlebelle watch
```

The address the server will listen on starts at http://localhost:8080/ and increase it’s port number depending on what ports are available on your machine.
So the address you put in your browser could be http://localhost:8081/ or http://localhost:8085/ etc.

![A screenshot of a browser showing an almost empty star page that welcomes you to your new Cuttlebelle site](/assets/img/website.jpg)
