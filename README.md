# eslint-config-react-minimal

A very minimal set of rules to help you get started writing React.

## Usage

ESLint requires anything this config depends on to be installed by the end-user (sorry).

```shell
npm install -D eslint eslint-config-react-minimal
```

Then create an `.eslintrc.json` file containing:

```json
{
  "extends": ["eslint:recommended", "react-minimal"]
}
```

This will enable the (optional) recommended default ESLint rules, plus the React specific rules from this config.

### What's included?

1. [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): Ensures your imports/exports are valid and won't result in errors
1. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): helps catch common React mistakes
1. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ensures you're using hooks correctly

## Philosophy

`eslint-plugin-react` has a _ton_ of rules, some of which are either questionably useful or designed to help enforce certain patterns in large projects.

If you're just starting out in React all you really need are simple rules to help correct typos, ensure your imports are correct and remind you of certain React conventions.

This config is an alternative to figuring out which of the 50+ `eslint-plugin-react` rules to disable 🙃.

## Config

There are a few bits of config you need to remember setting up ESLint, so these are set for you.

### Environments

ESLint doesn't know where your code is going to run, so it can't make assumptions about what may be available in the environment. This config sets browser & ES6 environments. This means the linter won't complain that globals like `fetch` are undefined, since it knows they're available on the global scope.

It also assumes you're working within an ES Module environment (e.g. using JS `import` rather than Node `require`).

## Rules

Look in [`index.js`](./index.js) for a full list of all the enabled rules. There are comments linking to the documentation for each rule if you're curious what they do.

Here are a few examples of problems this config will highlight:

### Bad imports

If you haven't used ES Modules much before you might confuse default/named imports/exports, or forget to export stuff from a file you're importing. You'll get a linter error for lots of these mistakes. For example:

```js
// src/button.js
export default function Button({ children }) {
  return <button>{children}</button>;
}

// src/index.js
import { Button } from "./button";
// error as Button was _default_ exported
// but is being _named_ imported
```
