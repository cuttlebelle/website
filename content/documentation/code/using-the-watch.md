---
layout: docs/content
---

The watch tries hard to get out of the way and make it easy and quick for you to iterate over your pages. You may use it when developing layouts or when adding
content. As a rule it tries to only compile what is absolutely has to. That can sometimes not be 100% accurate but you can always run the
[double-save](/documentation/#using-the-double-save).

![A screenshot of the watch showing that at first generating all pages took 10s but subsequent saves took only 0.009s](/assets/img/watch.png)

_Note the time it took to save generate all pages (~10s) vs the time it took to save only one (~0.009s)._

Using the watch will create a local server, open the site for you in the browser and wait for any changes you make to the file to update the browser
automatically.

```shell
cuttlebelle watch
```

Stop the watch by terminating the process, typically the key combination [cmd] + [c].
