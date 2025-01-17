module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['react', 'react-hooks'],
    env: {
      browser: true,
      node: true,
      es6: true,
      jest: true
    },
    settings: {
      react: {
        version: 'detect'
      },
      linkComponents: [
        'Hyperlink',
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' }
      ]
    },
    rules: {
      curly: 2,
      eqeqeq: 2,
      indent: 'off',
      'comma-dangle': 0,
      'linebreak-style': 0,
      'no-unused-vars': 'warn',
      'no-console': 1,
      'consistent-return': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'no-unused-expressions': [
        2,
        {
          allowTernary: true
        }
      ],
      'no-alert': 1,
      'no-else-return': 1,
      'no-empty-function': 1,
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/no-empty-interface': 'off'
    }
  };
