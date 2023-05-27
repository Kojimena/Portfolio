module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: ['react-refresh'],
  rules: {
    'semi': ['error', 'never'],
    'max-len': ['error', {
      'code': 120
    }],
    'prefer-arrow-callback': 'error',
    'quotes': ['error', 'double'],
    'react/function-component-definition': 'off'
  }
};