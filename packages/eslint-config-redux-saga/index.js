const WARNING = 1;

module.exports = {
  env: {
    browser: true,
  },
  plugins: ['redux-saga'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'redux-saga/yield-effects': WARNING,
  },
};
