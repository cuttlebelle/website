---
layout: docs/content
---

Cuttlebelle's watch tries hard to only render what you changed. But that can sometimes fail and it does less work than required. If you ever change something
and it doesn’t appear in your browser, chances are Cuttlebelle was a bit over-eager to save time. For those cases you have the double-save.
If you save your document or your layout twice in a row, just like a double click, Cuttlebelle will render all pages for you again.

![A screenshot of the watch showing that at first generating all pages took 10s but subsequent saves took only 0.009s](/assets/img/watch.png)

Note from the screenshot above the time it took to generate all pages (~ 10s) vs the time it took to save only one (~ 0.009s).

This can be really handy when adding content and developing layouts while keeping the default render time as low as possible.
