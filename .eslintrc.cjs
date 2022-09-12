/* eslint-disable no-undef */
module.exports = {
  root: true,
  env: {
    es2022: true,
    'shared-node-browser': true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['/node_modules/', '/dist/'],
}
