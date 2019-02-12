---
layout: docs/content
---

Markdown is a way to write content for the web. It’s written in what nerds like to call "plaintext", which is exactly the sort of text you’re used to writing
and seeing. Plaintext is just the regular alphabet, with a few familiar symbols, like asterisks `*` and backticks ```.

Unlike cumbersome word processing applications, text written in Markdown can be easily shared between computers, mobile phones, and people. It’s quickly
becoming the writing standard for academics, scientists, writers, and many more. Websites like [GitHub](https://github.com/) and
[reddit](https://www.reddit.com/) use Markdown to style their comments.

Formatting text in Markdown has a very gentle learning curve. It doesn’t do anything fancy like change the font size, color, or type. All you have control over
is the display of the text—stuff like making things bold, creating headers, and organizing lists.

```markdown
<!--
Comments in markdown look like this.
-->

<!--
Headings
-->
# This is an <h1>
## This is an <h2>
### This is an <h3>
#### This is an <h4>
##### This is an <h5>
###### This is an <h6>

This is an h1
=============

This is an h2
-------------

<!--
Paragraphs
-->
This is a paragraph. I’m typing in a paragraph isn’t this fun?

Now I’m in paragraph 2.
I’m still in paragraph 2 too!


I’m in paragraph three! The whitespace is ignored.

<!--
Text styles
-->
*This text is in italics.*
_And so is this text._

**This text is in bold.**
__And so is this text.__

***This text is in both.***
**_As is this!_**
*__And this!__*

~~This text is rendered with strikethrough.~~

<!--
Links
-->

[Click me!](http://test.com/)
[Click me!](http://test.com/ "with title")
[Go to music](/relative/path)

<!--
Images
-->
![This is the alt-attribute](http://imgur.com/myimage.jpg)
![This is the alt-attribute](http://imgur.com/myimage.jpg "An optional title")
![This is the alt-attribute](relative/path/image.jpg)

<!--
Block quotes
-->
> This is a block quote. You can either
> manually wrap your lines and put a ">" before every line or you can
> let your lines get really long and wrap on their own.
> It doesn't make a difference so long as they start with a ">".

> You can also use more than one level
>> of indentation?
> How neat is that?

<!--
Lists
-->
* Item
* Item
* Another item

or

+ Item
+ Item
+ One more item

or

- Item
- Item
- One last item

or

1. Item one
1. Item two
1. Item three

or

1. Item one
2. Item two
3. Item three
  * Sub-item
  * Sub-item
4. Item four

<!--
Horizontal rules
-->

---
- - -
****************

<!--
Tables
-->
| Col1         | Col2     | Col3          |
| :----------- | :------: | ------------: |
| Left-aligned | Centered | Right-aligned |
| blah         | blah     | blah          |

<!--
Other
-->
I want to type *this text surrounded by asterisks* but I don't want it to be
in italics, so I do this: \*this text surrounded by asterisks\*.
```

<pre class="language-markdown"><code>&lt;!--
Code blocks
--&gt;

```
This is code
So is this
```

```js
module.exports = exports = function renderer({ Marked }) {

&nbsp; Marked.preparse = ( markdown ) =&gt; {
&nbsp;   return markdown
&nbsp;     .replace(/\™/g, &#39;&lt;span class=&quot;markdown-trademark&quot;&gt;&amp;trade;&lt;/span&gt;&#39;)
&nbsp;     .replace(/\’/g, &#39;&lt;span class=&quot;markdown-quote&quot;&gt;&amp;rsquo;&lt;/span&gt;&#39;)
&nbsp;     .replace(/\—/g, &#39;&lt;span class=&quot;markdown-mdash&quot;&gt;&amp;mdash;&lt;/span&gt;&#39;)
&nbsp;     .replace(/\–/g, &#39;&lt;span class=&quot;markdown-ndash&quot;&gt;&amp;ndash;&lt;/span&gt;&#39;)
&nbsp;     .replace(/\.\.\./g, &#39;&lt;span class=&quot;markdown-ellipsis&quot;&gt;&amp;hellip;&lt;/span&gt;&#39;);
&nbsp; };

&nbsp; return Marked;
};
```
</code></pre>

_([source](https://learnxinyminutes.com/docs/markdown/))_
