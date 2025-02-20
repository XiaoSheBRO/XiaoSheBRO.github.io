import directoryTree from 'directory-tree' // 读取目录tree的模块
import path from 'path'
// import { getDirname } from '@vuepress/utils'

// 拼接文档目录 __dirname 为当前目录绝对路径，而 ./ 为工作区路径
// const __dirname = getDirname(import.meta.url)
const rootDir = path.join(path.resolve('./src'))

function callback(item) {
  if (item.type === 'directory') {
    // 文件夹
    if (item.path.split('/').at(-2) === 'docs') {
      item.link = `docs/${item.name}/`
      item.prefix = `docs/${item.name}/`
    } else {
      item.link = `${item.name}/`
      item.prefix = `${item.name}/`
    }
    item.text = titleMatching(item.name)
    item.collapsible = true
  } else {
    // md文件
    item.text = titleMatching(item.name.split('.md')[0])
    item.link = `${item.name}`
  }
  // 去除原有多余字段
  delete item.name
  delete item.type
  delete item.path
}

export function readDocTree() {
  const rowTree = directoryTree(
    rootDir,
    {
      exclude: /(resume|assets|_resources|utils|README\.md|\.vuepress|\.git$)/, // 排除项
      extensions: /\.md$/, // 只匹配md
      normalizePath: true, // 路径符转换(\ => /)
      attributes: ['type'] //可选字段
    },
    callback,
    callback
  )
  const docsTree = rowTree.children.find((element) => element.text === 'docs') // 取出docs目录
  const exDocs = rowTree.children.filter((element) => element.text !== 'docs')
  const result = { '/': [...docsTree.children, ...exDocs] }
  // console.log(JSON.stringify(result, null, 2))
  return result //忽略首页
}

function titleMatching(inputString) {
  // 要替换的字符串对
  const textReplacements = {
    // learning: '学习',
    algorithm: '算法',
    Starter: '入门',
    frontend: '前端',
    tools: '工具'
  }
  // 构建正则表达式模式，将所有要替换的字符串连接成一个以|分隔的正则
  const pattern = Object.keys(textReplacements).map(escape).join('|')
  const regex = new RegExp(pattern, 'g') // 创建正则表达式对象
  const outputString = inputString.replace(regex, (match) => textReplacements[match]) // 使用正则表达式替换函数进行替换
  return outputString
}
// 将字符串中的特殊字符进行转义，以便在正则表达式中使用
function escape(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* {
  // 必要的，分组的标题文字
  text: "分组 1",
  // 可选的, 分组标题对应的链接
  link: "/foo/",
  // 可选的，会添加到每个 item 链接地址之前
  prefix: "/foo/",
  // 可选的, 设置分组是否可以折叠，默认值是 false,
  collapsible: true,
  // 必要的，分组的子项目
  children: [
    "README.md" /* /foo/index.html
  ],
}*/
