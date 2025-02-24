import path from 'path'
import directoryTree from 'directory-tree' // 读取目录tree的模块
import { t } from './t.js'

// 拼接文档目录 __dirname 为当前目录绝对路径，而 ./ 为工作区路径
// const __dirname = getDirname(import.meta.url)
const rootDir = path.join(path.resolve('./src'))

function directoryCallback(item) {
  // 文件夹
  if (item.path.split('/').at(-2) === 'docs') {
    item.link = `docs/${item.name}/`
    item.prefix = `docs/${item.name}/`
  } else {
    item.link = `${item.name}/`
    item.prefix = `${item.name}/`
  }
  item.text = t(item.name)
  item.collapsible = true
  // 去除原有多余字段
  delete item.name
  delete item.type
  delete item.path
}

function fileCallback(item) {
  // md文件
  item.text = t(item.name.split('.md')[0])
  item.link = `${item.name}`
  // 去除原有多余字段
  delete item.name
  delete item.type
  delete item.path
}

export function fileTreeToRoutes() {
  const rowTree = directoryTree(
    rootDir,
    {
      exclude: /(resume|_resources|assets|\.vuepress|utils|README\.md$)/, // 排除项
      extensions: /\.md$/, // 只匹配md
      normalizePath: true, // 路径符转换(\ => /)
      attributes: ['type'] // 可选字段
    },
    fileCallback, // 文件回调
    directoryCallback // 目录回调
  )
  const docsTree = rowTree.children.find((element) => element.text === 'docs') // 取出docs目录
  const exDocs = rowTree.children.filter((element) => element.text !== 'docs')
  const result = { '/': [...docsTree.children, ...exDocs] } // 使docs下的与外层同级
  // console.log(JSON.stringify(rowTree, null, 2))
  // console.log(result)
  return result
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
