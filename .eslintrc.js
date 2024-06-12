module.exports = {
  root: true,
  extends: '@react-native',
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
