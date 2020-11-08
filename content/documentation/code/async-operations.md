---
layout: docs/content
---

Sometimes you need to run an async method like fetching data from an API or something on I/O. Since we're rendering react on the server (node context) we won’t
have access to any of the life cycle hooks react offers.
So running something in `async UNSAFE_componentWillMount()` won’t do us any good as the tainting of the method name already hints at.
And running `useEffect` and `componentWillMount()` won’t ever execute.
So much like [NextJS](https://nextjs.org/), Cuttlebelle has a method you can run that will be executed before we generate the HTML.
Declare a method on your functional component or a static method called `getInitialProps` in your class component component and whatever is returned
will be added to your props.

💡 Make sure you return an object from `getInitialProps` or the props will get mashed together.

A typical case in a functional component could look like this:

```jsx
export default function GetData( props ) {
  return (
    <div>
      My Data: { props.data }
    </div>
  );
}

GetData.getInitialProps = async function( props ) {
  const data = await FetchMyDataFromSomewhere( props._ID );
  return { data };
}
```

And what it looks like in a class component:

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

The `getInitialProps` method will get all [default props](/documentation/code/#default-props) passed in.
