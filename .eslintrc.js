module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'react-app',
  ],
  plugins: [
    'react'
  ],
  rules: {
    // typescript-eslint
    '@typescript-eslint/no-unused-vars': ['error'],

    // eslint
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error',
      {
        'beforeColon': false
      }
    ],
    'comma-spacing': ['error',
      {
        'before': false,
        'after': true
      }
    ],
    'padded-blocks': ['error',
      {
        'blocks': 'never'
      }
    ],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error',
      {
        'max': 1
      }
    ],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always'],

    // react eslint
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-one-expression-per-line': ['error',
      {
        'allow': 'none'
      }
    ],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/self-closing-comp': 'error'
  }
}
