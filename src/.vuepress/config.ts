import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
// import { getDirname, path } from '@vuepress/utils'
import theme from './theme.js'
// const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: '/',
  //server
  port: 5000,

  lang: 'zh-CN',
  title: "Shaw's Book",
  description: 'Shaw is XiaoSheBRO',

  theme,

  //别名
  /* alias: {
    '@archive': path.resolve(__dirname, '../../archive'),
  }, */

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,

  head: [
    // 导入字体链接
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],
})
