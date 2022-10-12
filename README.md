# eslint-config-react-minimal

A very minimal set of rules to help you get started writing React.

## Usage

Install ESLint and this config as devDependencies:

```shell
npm install -D eslint eslint-config-react-minimal
```

Then create an `.eslintrc.json` file:

```json
{
  "extends": ["eslint:recommended", "react-minimal"]
}
```

This will enable the (optional) recommended default ESLint rules for normal JavaScript, plus the React specific rules from this config.

## "Real" applications

If you're building a "real" thing (i.e. not just for learning) you may want a more complete linting setup. I'd recommend using the [Create React App config](https://www.npmjs.com/package/eslint-config-react-app) even if you aren't using CRA. It's maintained by the React team and is more comprehensive than mine.

## What's included?

1. [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): Ensures your imports/exports are valid and won't result in errors
1. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): helps catch common React mistakes
1. [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ensures you're using hooks correctly

## Philosophy

`eslint-plugin-react` has a _ton_ of rules, some of which are either questionably useful or designed to help enforce certain patterns in large projects.

If you're just starting out in React all you really need are simple rules to help correct typos, ensure your imports are correct, and remind you of certain React conventions.

This config is an alternative to figuring out which of the 50+ `eslint-plugin-react` rules to disable 🙃.

## Rules

Look in [`index.js`](./index.js) for a full list of all the enabled rules. There are comments linking to the documentation for each rule if you're curious what they do.

You can see failing code for each rule in `examples/failures.jsx`.
