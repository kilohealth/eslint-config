# @kilohealth/eslint-config

Kilo.Health ESLint config for React Native, React and Node.js projects.

## Getting started

### Install the package

```bash
yarn add -D @kilohealth/eslint-config
```

### Install dependencies

```bash
yarn add -D eslint
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

### React Native

```json
{
  "extends": ["@kilohealth/eslint-config/react-native"]
}
```

## See also

For redux-saga eslint config see:
[@kilohealth/eslint-config-redux-saga](https://npm.im/@kilohealth/eslint-config-redux-saga)

For Next.js eslint config see:
[@kilohealth/eslint-config-next](https://npm.im/@kilohealth/eslint-config-next)
