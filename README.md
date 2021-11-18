# @kilohealth/eslint-config

Kilo.Health ESLint config for React Native, React and Node.js projects.

## Getting started

### Install the package

`yarn add @kilohealth/eslint-config`

### Install dependencies

`yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-react-native-a11y eslint-plugin-redux-saga eslint-restricted-globals prettier`

## Usage

Extend your eslint config in your `.eslintrc`:

### React Native

```
"extends": "@kilohealth"
```

### React

```
"extends": "@kilohealth/eslint-config/react"
```

### Node

```
"extends": "@kilohealth/eslint-config/node"
```
