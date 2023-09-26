module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'string-quotes': 'single',
    'at-rule-no-unknown': null,
    'function-url-quotes': 'always',
    'hue-degree-notation': 'number',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
  },
};
