---
layout: docs/content
---

With front-matter we can add more complex data to our content than just blobs of text. Front-matter has to be on the top of the file and begins and ends with
three dashes `---`. Front-matter is completely optional and each content partial has `layout: partial` as the default variable.
You can overwrite that of course. `index.yml` files have `layout: page` as the default variable.

```markdown/yaml
---
# this is YAML front matter
variable: one
array:
  - one thing
  - two things
  - several things
# all of this data is available to our layout
---

This is _markdown_.
Even with dashes inside of it

---

Still **markdown** :)
```

💡 Make sure you save your files in `utf-8` encoding.

You can get really tricky and smart here as YAML supports many different forms of data. Read more what YAML can do in our [cheat-sheet](/cheatsheet/).
