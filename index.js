module.exports = {
  plugins: ["import", "react", "react-hooks"],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  // https://github.com/benmosher/eslint-plugin-import/blob/master/config/errors.js
  extends: ["plugin:import/errors"],
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    "react/jsx-no-comment-textnodes": "warn",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    "react/jsx-no-target-blank": "warn",
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-no-undef": "error",
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/jsx-uses-vars": "warn",
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-danger-with-children": "warn",
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    "react/style-prop-object": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    "react/no-deprecated": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    "react/no-unescaped-entities": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/no-unknown-property": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
    "react/void-dom-elements-no-children": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    "react/jsx-curly-brace-presence": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-key": "warn",
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
    "react/jsx-no-useless-fragment": "warn",
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
