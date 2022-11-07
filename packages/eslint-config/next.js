const ERROR = 2;

module.exports = {
  extends: [require.resolve('./react.js'), 'plugin:@next/next/recommended'],
  rules: {
    'no-underscore-dangle': [ERROR, { allow: ['__NEXT_DATA__'] }],
  },
};
