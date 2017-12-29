---
layout: cheats/cheat
section: Markdown
description: |
  Cuttlebelles [markdown](https://github.com/chjj/marked) is a text-to-HTML conversion tool for content authors. Markdown allows you to write using an
  easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML.
cheats:
  - headline: Paragraph/line break
    description: To create a paragraph simply add a line of text. To add a line break add an empty line.
    example: |
      ```markdown
      One paragraph
      Still the same paragraph

      New paragraph
      ```
  - headline: Headline
    description: To add a headline add the `#` symbol in-front of your line. The amount of hashes represents the headline level.
    example: |
      <pre><code class="lang-markdown">&#35; A headline level 1
      &#35;&#35; A headline level 2
      &#35;&#35;&#35; A headline level 3</code></pre>
  - headline: Link
    description: To link to another page just us the `[text](link)` notation.
    example: |
      ```markdown
      A [link](/checkout) inside text.

      Another [link](https://dominik-wilkowski.com) could be to another site.
      ```
  - headline: Image
    description: Adding an image should be done with a proper layout but if you want inline images you can use the notation below.
    example: |
      ```markdown
      ![image alt text](/assets/logo.png)
      ```
  - headline: Italic
    description: Making some text italic only requires you to use `*`.
    example: |
      ```markdown
      Text with a single *italic* word.
      ```
  - headline: Bold
    description: Making some text bold only requires you to use `**`.
    example: |
      ```markdown
      Text with a single **bold** word.
      ```
  - headline: Code
    description: Mark a word as code with the `` ` character.
    example: |
      ```markdown
      Sometimes we talk `code`.
      ```
  - headline: Code block
    description: If you have a block of code you should us ```` `.
    example: |
      <pre><code class="lang-markdown">```
      <br>code block<br>
      ```
      </code></pre>
---
