const OFF = 0;
const WARNING = 1;

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
    'react/prefer-stateless-function': [
      WARNING,
      { ignorePureComponents: true },
    ],
    'react/no-multi-comp': [WARNING, { ignoreStateless: true }],
    'react/no-typos': WARNING,
  },
};
