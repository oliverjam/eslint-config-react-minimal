// explicitly set all Prettier config to defaults (except trailing commas)
// should stop contributors' personal editor configs from changing anything
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  tabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5", // I'm not a savage
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
};