---
path: "/first-post"
date: "2020-07-05"
title: "First real post"
tags: ['that']
excerpt: "Today, we will take the opportunity to talk about..."
---

This is a placeholder for the first actual post after the initial introduction done yesterday.

```jsx
// Example component
const MyComponent = () => (
  <div>
    <h1>Amazing</h1>
    <p>Explanation</p>
  </div>
);
```

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`, // highlight-line
      ]
    }
  }
]
```

```javascript{numberLines: 5}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```jsx{numberLines: true}
class FlavorForm extends React.Component {
  constructor(props) { // highlight-line
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

```shell{outputLines: 2}{promptUser: dave}{promptHost: dev.my-machine}
echo "Hola que tal"
Hola que tal
```

This will also serve as a test page to include some additional things.