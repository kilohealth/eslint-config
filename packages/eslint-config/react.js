const OFF = 0;

module.exports = {
  extends: [
    require.resolve('./node.js'),
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
  ],
  plugins: ['redux-saga'],
  rules: {
    '@shopify/jsx-no-complex-expressions': OFF,
    '@shopify/jsx-no-hardcoded-content': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-uses-react': OFF,
  },
};
