---
path: "/first-post"
date: "2020-07-05"
title: "First real post"
tags: ['that']
excerpt: "Today, we will take the opportunity to talk about..."
---

This is a placeholder for the first actual post after the initial introduction done yesterday.

Example of `code block`:

```jsx
// Example component
const MyComponent = () => (
  <div>
    <h1>Amazing</h1>
    <p>Explanation</p>
  </div>
);
```

Code block with highlight:

```javascript
// Another code example
const newArray = myArray.map(current => {
  return `new_${current}`;    // highlight-line
})
```

Code block with line numbers and highlight:

```jsx{numberLines: true}
const MyComponent = () => (
  <div>
    <h1>Amazing</h1>
    // highlight-next-line
    <p>This line is highlighted</p>
    <p>Explanation</p>
  </div>
);

console.log('This should not be hightlighted');

// The following is highlighted using start and end block
// highlight-start
const HighlightedComponent = () => (
  <div />
);
// highlight-end

// And the following two lines are highlighted using a range
/* highlight-range{1-2} */
// This is an important piece of information.
// This line is also important...
// But these fall ouside of such range
// so they are not highlighted

```

Code block with line numbers from a specific line:

```javascript{numberLines: 45}
// User data
userData: {
  name: 'Dave',
  last: 'Martinez',
  hobbies: [
    'Coding',
    'Video Games',
    'Music'
  ],
}
```

Code block with highlighted lines (the lines being highlighted are specified in the block next to the language being used):

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

`Shell-like` code block:

```shell{outputLines: 2}{promptUser: dave}{promptHost: dev.my-machine}
echo "Hello world!"
Hello world!
```

This will also serve as a test page to include some additional things.