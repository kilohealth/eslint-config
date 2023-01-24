const extensions = require('./extensions');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['@kilohealth/eslint-config-react', 'plugin:react-native-a11y/all'],
  env: {
    'react-native/react-native': true,
  },
  plugins: ['react-native'],
  rules: {
    'react-native/no-color-literals': WARNING,
    'react-native/no-inline-styles': WARNING,
    'react-native/no-unused-styles': ERROR,
    'react-native/sort-styles': [
      WARNING,
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],
    'react-native/split-platform-components': OFF,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/extensions': extensions.ALL,
        'import/resolver': {
          node: {
            extensions: extensions.ALL,
          },
        },
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/extensions': extensions.ALL,
        'import/parsers': {
          '@typescript-eslint/parser': [
            ...extensions.TS,
            ...extensions.TS_REACT_NATIVE,
          ],
        },
        'import/resolver': {
          node: {
            extensions: extensions.ALL,
          },
        },
      },
    },
  ],
  globals: {
    __DEV__: false,
    expect: false,
    element: false,
    device: false,
    by: false,
    brand: false,
    jest: false,
    width: false,
    height: false,
    hasNotch: false,
    isIOS: false,
    aspectRatio: false,
    isSmallScreen: false,
    isSmallHeight: false,
    localeId: false,
  },
};
