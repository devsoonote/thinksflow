module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'airbnb'],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-param-reassign': 0,
    'consistent-return': 'off',
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 'off',
    'react/no-array-index-key': 'off',
    'prefer-destructuring': 'off',
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'camelcase': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
