---
layout: cheats/item
headline: getInitialProps
---

To run an async function in your layout to e.g. fetch an API, declare a static method called `getInitialProps` inside your layout.
After you got the data from your async operation, make sure you return the data in an object with a key so the data can be merged back into the props for your
`constructor` or `render` method.


```jsx
import React, { Component } from 'react';

class GetData extends Component {
  static async getInitialProps({ _ID }) {
    const data = await FetchMyDataFromSomewhere( _ID );
    return { data };
  }

  constructor({ data }) {
    super();
    this.data = data || 'no data';
  }

  render() {
    return (
      <div>
        My Data: { this.data }
      </div>
    );
  }
};

export default GetData;
```

The `getInitialProps` method gets all default props passed.
