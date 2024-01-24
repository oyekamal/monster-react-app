# React + TypeScript + Monster api

- [monster GET](https://jsonplaceholder.typicode.com/users)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

# monster-react-app

## display: flex

# justity-content

1. flex-start (items align to the left side of the container)
2. flex-end (items align to the right side of the container)
3. center (items align at the center of the container)
4. space-between (items display with spaces between them)
5. space-around (items display with equal spaces around them)

# align-times/align-self

1. flex-start (items align at the top of the container)
2. flex-end (items align at the bottom of the container)
3. center (items align at the center of the container)
4. baseline (items align at the baseline of the container)
5. stretch (items align at the stretch of the container)

# flex-direction

1. row (items are placed the same as the text direction)
2. row-reverse (items are placed opposite of the text direction)
3. column (items are placed top to bottom)
4. column-reverse (items are placed bottom to top)

# flex-wrap

1. nowrap (Every item is fit to single line)
2. wrap (items are around to additional lines)
3. wrap- reverse (items wrap around to additional lines in reverse)

# flex-direction and flex-wrap are used so often together that the shorthand property flex-flow

1.  flex-flow: row wrap

# align-content

1. flex-start: Lines are packed at the top of the container.
2. flex-end: Lines are packed at the bottom of the container.
3. center: Lines are packed at the vertical center of the container.
4. space-between: Lines display with equal spacing between them.
5. space-around: Lines display with equal spacing around them.
6. stretch: Lines are stretched to fit the container.

This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.
