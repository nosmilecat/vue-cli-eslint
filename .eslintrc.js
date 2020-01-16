// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    "semi": 0,
    "no-new":0,
    "handle-callback-err": 0,
    "space-before-function-paren":0,
    "new-cap": 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  // 定义全局变量，处理为声明变量的规则
  globals: {
    'Vue': true,
    'VueRouter': true,
    'Vuex': true,
    'ELEMENT':true,
    'axios': true,
    'noCaptcha': true,
    '$': true
  }
}
