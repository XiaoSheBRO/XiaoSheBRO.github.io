import theme from './theme.js'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  theme,
  lang: 'zh-CN',
  title: "Shaw's Book",
  description: 'Shaw === XiaoSheBRO',

  base: '/',
  port: 8848,

  head: [
    // font
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100..900&display=swap',
        rel: 'stylesheet'
      }
    ],
    ['link', { rel: 'preconnect', href: 'https://static.zeoseven.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://static.zeoseven.com/zsft/92/main/result.css',
        rel: 'stylesheet'
      }
    ]
  ],
  // markdown-it 内置扩展设置
  markdown: {
    emoji: false
  },
  // 路径别名
  alias: {
    '@demo': path.resolve(__dirname, '../docs/_demo')
  }
})
