const titleMapping = {
  // learning: '学习',
  algorithm: '算法',
  Starter: '入门',
  frontend: '前端',
  tools: '工具'
}

const pattern = Object.keys(titleMapping).map(escape).join('|')
const regex = new RegExp(pattern, 'g')

export function t(inputString) {
  return inputString.replace(regex, (match) => titleMapping[match])
}

// 将字符串中的特殊字符进行转义，以便在正则表达式中使用
function escape(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
