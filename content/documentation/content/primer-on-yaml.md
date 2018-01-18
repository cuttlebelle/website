---
layout: docs/content
---

[YAML](http://www.yaml.org/) (YAML Ain’t Markup) is a human friendly data serialization language.
CXuttlebelle uses YAML because it’s as close to plain English as data can get. It has no curly braces, it allows you to omit quotation marks for strings in most
cases, and it relies on indentation for structure, which makes it incredibly readable compared to other languages, such as JSON and XML.

For a more comprehensive guide to YAML syntax and functionality, refer to the [official specification](http://www.yaml.org/spec/), or the [YAML
Cookbook](http://yaml.org/YAML_for_ruby.html).

**Simple data**

```yaml
# Comments in YAML look like this.

# Simple variables as strings
key: value
another_key: Another value goes here.

# or as integers/numbers
a_number_value: 100
scientific_notation: 1e+12

# The number 1 will be interpreted as a number, not a boolean. if you want
# it to be interpreted as a boolean, use true
boolean: true
null_value: null
key with spaces: value

# Notice that strings don’t need to be quoted. However, they can be.
# You often end up quoting strings if they contain special characters
however: "A string, enclosed in quotes."
"Keys can be quoted too.": "Useful if you want to put a ':' in your key."

# Multiple-line strings can be written either as a 'literal block' (using |),
# or a 'folded block' (using '>').
literal_block: |
  This entire block of text will be the value of the 'literal_block' key,
  with line breaks being preserved.

  The literal continues until de-dented, and the leading indentation is
  stripped.

    Any lines that are 'more-indented' keep the rest of their indentation -
    these lines will be indented by 2 spaces.
folded_style: >
  This entire block of text will be the value of 'folded_style', but this
  time, all newlines will be replaced with a single space.

  Blank lines, like above, are converted to a newline character.

    'More-indented' lines keep their newlines, too -
    this text will appear over two lines.
```

**Collection data**

```yaml
# Nesting is achieved by indentation.
# Indent with two spaces only
a_nested_map:
  key: value
  another_key: Another Value
  another_nested_map:
    hello: hello

# Maps don’t have to have string keys.
0.25: a float key

# Keys can also be complex, like multi-line objects
# We use ? followed by a space to indicate the start of a complex key.
? |
    This is a key
    that has multiple lines
: and this is its value

# Sequences (equivalent to lists or arrays) look like this:
a_sequence:
  - Item 1
  - Item 2
  - 0.5 # sequences can contain disparate types.
  - Item 4
  - key: value
    another_key: another_value
  -
    - This is a sequence
    - inside another sequence

# Since YAML is a superset of JSON, you can also write JSON-style maps and
# sequences:
json_map: {"key": "value"}
json_seq: [3, 2, 1, "takeoff"]
```

**Extra YAML data**

```yaml
# Strings and numbers aren’t the only scalars that YAML can understand.
# ISO-formatted date and datetime literals are also parsed.
datetime: 2001-12-15T02:59:43.1Z
datetime_with_spaces: 2001-12-14 21:59:43.10 -5
date: 2002-12-14

# The !!binary tag indicates that a string is actually a base64-encoded
# representation of a binary blob.
gif_file: !!binary |
    R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5
    OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+
    +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC
    AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=
```

_([source](https://learnxinyminutes.com/docs/yaml/))_
