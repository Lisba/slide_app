module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'ft-flow',
    'jest',
  ],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
    'no-console': 'error',
    eqeqeq: 'error',
  },
};
