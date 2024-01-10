module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    require.resolve('@umijs/fabric/dist/eslint'),
  ],
  plugins: ['unused-imports'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
  },
  // https://www.npmjs.com/package/@typescript-eslint/parser
  parserOptions: {
    project: [
      'tsconfig.json',
      'tsconfig.*.json',
      './packages/**/tsconfig.json',
      './examples/**/tsconfig.json',
    ],
  },
};
