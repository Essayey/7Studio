module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  globals: {
    __IS_DEV__: 'readonly'
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'airbnb', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 4, {
      SwitchCase: 1
    }],
    '@typescript-eslint/indent': [2, 4, {
      ignoredNodes: ['TSTypeParameterInstantiation'],
      SwitchCase: 1
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-indent': [2, 4],
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', 'tsx']
    }],
    'react/jsx-indent-props': [2, 4],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'linebreak-style': ['error', 'windows'],
    'arrow-body-style': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-return-await': 'warn',

    'no-param-reassign': 'off',
    'max-len': ['error', { code: 120 }],
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'react/jsx-no-useless-fragment': 'off'
  }
};
