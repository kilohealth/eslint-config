const restrictedGlobals = require('eslint-restricted-globals');
const extensions = require('./extensions');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

const NO_UNUSED_VARS_OPTIONS = {
  argsIgnorePattern: '^_',
  caughtErrorsIgnorePattern: '^_',
};

// Taken from Jest's default "testMatch" config
const TEST_PATTERNS = [
  '**/__tests__/**/*.[jt]s?(x)',
  '**/?(*.)+(spec|test).[tj]s?(x)',
];

module.exports = {
  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'import'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': [ERROR, 'as-needed'],
    'arrow-parens': [WARNING, 'as-needed'],
    'block-spacing': ERROR,
    'brace-style': ERROR,
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': ERROR,
    'computed-property-spacing': ERROR,
    curly: [ERROR, 'multi-line'],
    'default-case': [WARNING, { commentPattern: '^no default$' }],
    'eol-last': ERROR,
    'func-style': [ERROR, 'declaration', { allowArrowFunctions: true }],
    'import/order': [
      ERROR,
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/export': ERROR,
    'import/extensions': OFF,
    'import/first': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-default-export': OFF,
    'import/no-duplicates': ERROR,
    'import/no-dynamic-require': OFF,
    'import/no-named-as-default-member': OFF,
    'import/no-relative-parent-imports': OFF,
    'import/no-self-import': ERROR,
    'import/no-useless-path-segments': ERROR,
    'import/prefer-default-export': OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': ERROR,
    'max-classes-per-file': [ERROR, WARNING],
    'no-case-declarations': OFF,
    'no-console': OFF,
    'no-debugger': WARNING,
    'no-empty-pattern': ERROR,
    'no-empty': OFF,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-label': ERROR,
    'no-floating-decimal': ERROR,
    'no-global-assign': [ERROR, { exceptions: [] }],
    'no-implied-eval': ERROR,
    'no-invalid-this': OFF,
    'no-labels': [ERROR, { allowLoop: false, allowSwitch: false }],
    'no-loop-func': ERROR,
    'no-lone-blocks': ERROR,
    'no-multi-spaces': [
      ERROR,
      {
        ignoreEOLComments: false,
      },
    ],
    'no-nested-ternary': WARNING,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-new': ERROR,
    'no-redeclare': ERROR,
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'no-restricted-properties': [
      ERROR,
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
    'no-restricted-syntax': [ERROR, 'WithStatement'],
    'no-return-await': WARNING,
    'no-self-assign': [
      WARNING,
      {
        props: true,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': WARNING,
    'no-underscore-dangle': ERROR,
    'no-useless-concat': 'error',
    'no-useless-escape': WARNING,
    'no-var': ERROR,
    'no-with': 'error',
    'object-curly-spacing': [ERROR, 'always'],
    'padded-blocks': [ERROR, 'never'],
    'padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'prefer-object-spread': WARNING,
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prettier/prettier': ERROR,
    'promise/prefer-await-to-then': WARNING,
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: true, avoidEscape: true },
    ],
    'require-await': OFF,
    'require-unicode-regexp': OFF,
    'sort-imports': [
      ERROR,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: '@babel/eslint-parser',
      extends: [],
      settings: {
        'import/extensions': [...extensions.JS, ...extensions.TS],
        'import/resolver': {
          node: {
            extensions: [...extensions.JS, ...extensions.TS],
          },
        },
      },
      rules: {
        'no-unused-vars': [ERROR, NO_UNUSED_VARS_OPTIONS],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: ['plugin:@typescript-eslint/recommended'],
      settings: {
        'import/extensions': [...extensions.TS, ...extensions.JS],
        'import/parsers': {
          '@typescript-eslint/parser': extensions.TS,
        },
        'import/resolver': {
          node: {
            extensions: [...extensions.TS, ...extensions.JS],
          },
        },
      },
      rules: {
        '@typescript-eslint/ban-types': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/no-explicit-any': WARNING,
        '@typescript-eslint/no-non-null-assertion': ERROR,
        '@typescript-eslint/no-unused-vars': WARNING,
        '@typescript-eslint/no-use-before-define': OFF,
        '@typescript-eslint/prefer-optional-chain': ERROR,
        'no-dupe-class-members': OFF,
        'no-unused-vars': OFF,
      },
    },
    {
      files: TEST_PATTERNS,
      env: {
        jest: true,
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
  ],
};
