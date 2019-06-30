---
layout: docs/content
---

Sometimes you need to run an async method like fetching data from an API or something on I/O. Since we're rendering react on the server (node context) we won’t
have access to any of the life cycle hooks react offers. So running something in `async UNSAFE_componentWillMount()` won’t do us any good as the tainting of
the method name already hints at. And running `componentWillMount()` won’t ever execute.
So much like [NextJS](https://nextjs.org/), Cuttlebelle has a method you can run that will be executed before we generate the HTML.
Declare the static method `getInitialProps` in your component and and whatever is returned will be added to your props.

💡 Make sure you return an object from `getInitialProps` or the props will get mashed together.

A typical case could look like this:

```jsx
import React, { Component } from 'react';

class GetData extends Component {
  static async getInitialProps( props ) {
    const data = await FetchMyDataFromSomewhere( props._ID );
    return { data };
  }

  render() {
    return (
      <div>
        My Data: { this.props.data }
      </div>
    );
  }
}

export default GetData;
```

Inside your render method you now have access to whatever was returned from `getInitialProps`.
In this case an object with the key `data`.

The `getInitialProps` method will get all [default props](http://localhost:8080/documentation/code/#default-props) passed in.
