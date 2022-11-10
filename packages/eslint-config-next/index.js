const ERROR = 2;

module.exports = {
  extends: ['@kilohealth/eslint-config/react', 'plugin:@next/next/recommended'],
  rules: {
    'no-underscore-dangle': [ERROR, { allow: ['__NEXT_DATA__'] }],
  },
};
