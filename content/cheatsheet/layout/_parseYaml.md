---
layout: cheats/item
headline: _parseYaml
---

A helper function to parse YAML into an javascript object.

```js
const yamlString = `
  test:
    - one
    - two
`;

_parseYaml( yamlString );
```

The output would be `[ 'one', 'two' ]`.
