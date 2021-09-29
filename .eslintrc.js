module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    node: true,
    jest: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    eqeqeq: 'warn',
    'prettier/prettier': 'warn',
    'no-unused-vars': ['error', { args: 'none' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  ignorePatterns: 'dist/*'
};
