const OFF = 0;
const WARNING = 1;

module.exports = {
  extends: [
    '@kilohealth/eslint-config-node',
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
  ],
  rules: {
    '@shopify/jsx-no-complex-expressions': OFF,
    '@shopify/jsx-no-hardcoded-content': OFF,
    'react/react-in-jsx-scope': OFF,
    'react/jsx-uses-react': OFF,
    'react/no-did-mount-set-state': WARNING,
    'react/prefer-stateless-function': [
      WARNING,
      { ignorePureComponents: true },
    ],
    'react/no-multi-comp': [WARNING, { ignoreStateless: true }],
    'react/no-typos': WARNING,
    'react/sort-comp': [
      WARNING,
      {
        order: [
          'propTypes',
          'defaultProps',
          'static-variables',
          'static-methods',
          'state',
          '/^.+Ref|Refs$/',
          '/^animated.+$/',
          '/^interval|tabButtons|animationDuration$/',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
};
