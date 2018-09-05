module.exports = {
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  rules: {
    'no-unused-vars': 1,
    'no-new': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ]
}
