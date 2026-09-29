const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: ['dist/**', 'seerr/**', 'tailwind.config.js', 'metro.config.js'],
  },
  ...compat.config({
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsx-a11y/recommended',
      'expo',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'jsx-a11y/no-noninteractive-tabindex': 0,
      'arrow-parens': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'no-console': 1,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/array-type': ['error', { default: 'array' }],
      'jsx-a11y/no-onchange': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        { allowSameFolder: true },
      ],
    },
    overrides: [
      {
        files: ['**/*.tsx'],
        rules: {
          'react/prop-types': 'off',
        },
      },
    ],
    plugins: ['jsx-a11y', 'react-hooks', 'no-relative-import-paths'],
  }),
];
