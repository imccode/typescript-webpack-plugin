module.exports = {
  root: true,
  env: {
    node: true
  },
  // 使用 ESLint 解析 TypeScript 语法
  parser: '@typescript-eslint/parser',
  // 该插件可用于配置 TypeScript 校验规则
  plugins: ['@typescript-eslint'],
  extends: [
    // ESlint 的推荐规则
    'eslint:recommended',
    // TypeScript 推荐校验规则
    'plugin:@typescript-eslint/recommended',
    // 用于关闭 ESLint 相关的格式规则集  具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
    // 用于关闭 @typescript-eslint/eslint-plugin 插件相关的格式规则集，具体可查看 https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
    'prettier/@typescript-eslint'
  ]
}
