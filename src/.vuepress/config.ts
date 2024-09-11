import theme from './theme.js'
import { defineUserConfig } from 'vuepress'

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
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap',
        rel: 'stylesheet'
      }
    ]
  ]
})
