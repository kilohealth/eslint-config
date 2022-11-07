module.exports = {
  extends: [require.resolve('./react.js'), 'plugin:@next/next/recommended'],
  rules: {
    'no-underscore-dangle': [error, { allow: ['__NEXT_DATA__'] }],
  },
};
