module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'standard'
  ],
  // add your custom rules here
  rules: {
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'vue/html-closing-bracket-spacing': 0,
    'vue/no-v-html': 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'arrow-parens': 0
  }
}
