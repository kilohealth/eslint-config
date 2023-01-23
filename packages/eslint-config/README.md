# @kilohealth/eslint-config

Kilo.Health ESLint config for React and Node.js.

## Getting started

### Install the package

```bash
# yarn
yarn add -D @kilohealth/eslint-config

# npm
npm install @kilohealth/eslint-config --save-dev
```

### Install dependencies

```bash
# yarn
yarn add -D eslint

# npm
npm install eslint --save-dev
```

## Usage

Extend your eslint config in your `.eslintrc`:

### Node

```json
{
  "extends": ["@kilohealth"]
}
```

### React

```json
{
  "extends": ["@kilohealth/eslint-config/react"]
}
```

## See also

For redux-saga eslint config see:
[@kilohealth/eslint-config-redux-saga](https://npm.im/@kilohealth/eslint-config-redux-saga)

For Next.js eslint config see:
[@kilohealth/eslint-config-next](https://npm.im/@kilohealth/eslint-config-next)

For React Native eslint config see:
[@kilohealth/eslint-config-react-native](https://npm.im/@kilohealth/eslint-config-react-native)
