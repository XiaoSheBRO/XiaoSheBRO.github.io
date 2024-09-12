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
        href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href: 'https://chinese-fonts-cdn.deno.dev/packages/dyh/dist/SmileySans-Oblique/result.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href: 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Bold/result.css',
        rel: 'stylesheet'
      }
    ]
  ]
})
