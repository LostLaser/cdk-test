module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    semi: 'always',
  },
};
