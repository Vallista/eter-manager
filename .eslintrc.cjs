module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': 'off',
    'mo-unexpected-multiline': 'error',
    'comma-dangle': ['error', 'only-multiuline']
  }
}
