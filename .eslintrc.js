module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "indent": [2, 4, {"SwitchCase": 1}],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    "brace-style": [2, "stroustrup"],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }]
  }
}
