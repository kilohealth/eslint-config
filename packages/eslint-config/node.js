const restrictedGlobals = require('eslint-restricted-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// Taken from Jest's default "testMatch" config
const TEST_PATTERNS = [
  '**/__tests__/**/*.[jt]s?(x)',
  '**/?(*.)+(spec|test).[tj]s?(x)',
];

module.exports = {
  extends: [
    'plugin:@shopify/node',
    'plugin:@shopify/typescript',
    'plugin:@shopify/prettier',
  ],
  rules: {
    'arrow-body-style': [ERROR, 'as-needed'],
    curly: ERROR,
    'default-case': ERROR,
    'default-case-last': ERROR,
    'eol-last': ERROR,
    'func-style': [ERROR, 'declaration', { allowArrowFunctions: true }],
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
    'no-underscore-dangle': ERROR,
    'padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'sort-imports': [
      ERROR,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'promise/prefer-await-to-then': WARNING,
    'node/no-callback-literal': OFF,
    'node/no-unsupported-features/node-builtins': OFF,
    'no-warning-comments': OFF,
    'no-catch-shadow': OFF,
    'id-length': OFF,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            filter: {
              match: true,
              // Allow double underscores and React UNSAFE_ (for lifecycle hooks that are to be deprecated)
              regex: '^(__|UNSAFE_).+$',
            },
            format: null,
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
          {
            selector: 'typeParameter',
            format: ['PascalCase'],
            prefix: ['T'],
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
        ],
        '@shopify/typescript/prefer-pascal-case-enums': OFF,
      },
    },
    {
      files: TEST_PATTERNS,
      extends: ['plugin:@shopify/jest'],
    },
  ],
};
