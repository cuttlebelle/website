---
layout: cheats/cheat
section: YAML
description: |
  Cuttlebelle uses [YAML](http://yaml.org/) to describe a page and more complex layouts. For YAML whitespace and indentation is very important so make sure you
  indent with two spaces consistently.
cheats:
  - headline: Comments
    description: Commenting your work helps your future self.
    example: |
      ```
      thing: hello  # this is the thing we need for x
      open: false   # and thing needs to be closed
      ```
  - headline: String
    description: |
      Strings don’t need to be quoted unless you’re using special characters. For multi-line strings use the `|` character.
      Best for strings you want to parse through markdown later.
    example: |
      ```
      thing: hello
      special: '# headline'
      multi-line: |
        line 1
        line 2
      ```
  - headline: Array
    description: Use arrays for lists of data that can be extended by the content author.
    example: |
      ```
      reasons:
        - because
        - duh
        - anyway
      ```
  - headline: Boolean
    description: A boolean value is best used for binary choices. From the content authors perspective it’s best to either have it or don’t declare it at all.
    example: |
      ```
      thing: true
      thing: false
      ```
  - headline: Object
    description: Objects are more explicit for editing. The content author can see what is declared where.
    example: |
      ```
      cta:
        text: Buy now
        url: /buy
      ```
  - headline: Array - object
    description: Sometimes you need n items of something. Like a link list.
    example: |
      ```
      linklist:
        - text: Install the thing
          url: /install
        - text: Use the thing
          url: /docs
        - text: Enhance the thing
          url: /contribute
      ```
  - headline: Object - array
    description: And sometimes one of your objects has n number of items attached to it.
    example: |
      ```
      select:
        label: Please select a state
        selected: NSW
        choices:
          - VIC
          - WA
          - NT
          - NSW
          - QL
          - ACT
          - SA
          - TAS
      ```
---
