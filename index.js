module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community/eslint-config',
  ],
  plugins: ['react', 'react-hooks', 'react-native', 'import', 'redux-saga'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    mocha: true,
    jest: true,
  },
  rules: {
    // General

    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    'eol-last': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'no-console': 0,
    'no-debugger': 1,
    'no-trailing-spaces': 0,
    'no-underscore-dangle': 2,
    'no-useless-escape': 1,
    'no-var': 2,
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],

    // Experimental

    curly: ['error', 'multi-line'], // multiline
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'max-classes-per-file': ['error', 1],
    'no-case-declarations': 'off',
    'no-empty': 'off',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    'no-loop-func': 'error',
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
      'error',
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-await': 'warn',
    'no-self-assign': [
      'warn',
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-useless-concat': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'require-await': 'off',
    'require-unicode-regexp': 'off',

    // React

    'react/default-props-match-prop-types': 1,
    'react/display-name': [1, { ignoreTranspilerName: false }],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': 1,
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-indent-props': 0,
    'react/jsx-key': 1,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 1,
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': ['off', 'always'],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-deprecated': ['warn'],
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 0,
    'react/no-render-return-value': 'error',
    'react/no-set-state': 0,
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/no-will-update-set-state': 'warn',
    'react/prefer-es6-class': 1,
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 1,
    'react/require-render-return': 'error',
    'react/self-closing-comp': 1,
    'react/sort-comp': [
      1,
      {
        order: [
          'propTypes',
          'defaultProps',
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
    'react/sort-prop-types': [
      0,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
        noSortAlphabetically: false,
      },
    ],
    'react/jsx-sort-default-props': [
      0,
      {
        ignoreCase: true,
      },
    ],
    'react/no-children-prop': 0,

    // React Hooks

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,

    // React Native

    // "react-native/no-single-element-style-arrays": 1,
    'react-native/no-unused-styles': 1,
    'react-native/sort-styles': [
      1,
      'asc',
      { ignoreClassNames: false, ignoreStyleProperties: false },
    ],

    // Redux

    'redux-saga/yield-effects': 1,
    // "redux-saga/no-unhandled-errors": 1,

    // Imports

    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-self-import': 'error',
    'import/no-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        android: 'never',
        ios: 'never',
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-duplicates': 'error',
    'import/first': 'error',
    'import/export': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
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
