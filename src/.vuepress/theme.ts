import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme({
  author: {
    name: 'XiaoSheBRO'
    // url: 'https://example.com',
    // email: string;
  },
  // favicon: string  //站点图标
  logo: '/logo.svg',
  repo: 'XiaoSheBRO/XiaoSheBRO.github.io',

  hotReload: true, // 开发实时完整热更新
  hostname: 'https://XiaoSheBRO.github.io', // 部署域名
  docsDir: 'src/docs/', // 文档目录

  themeColor: true, // 主题色选择器
  iconAssets: 'fontawesome-with-brands',
  // navbarAutoHide: "always" | "mobile" | "none", // 向下滚动时自动隐藏导航栏
  navbar, // 顶部链接
  sidebar, // 侧边栏
  // sidebarSorter: 'date', // 侧边栏排序器
  displayFooter: true, //页脚
  footer: 'powered by <a href="https://theme-hope.vuejs.press/zh/">vuepress-theme-hope</a>',

  // 文章数据
  pageInfo: ['Author', 'Date', 'Category', 'Tag', 'Word', 'ReadingTime'],
  editLink: false,
  contributors: false,
  metaLocales: {
    // editLink: '在 GitHub 上编辑此页',
    lastUpdated: '更新于'
  },

  // 加密文章
  encrypt: {
    config: {}
  },

  plugins: {
    shiki: {
      theme: "dracula-soft",
    },
    searchPro: {
      indexContent: true // 索引全部内容
    },
    readingTime: {
      wordPerMinute: 200
    },
    mdEnhance: {
      gfm: true,
      mark: true,
      sub: true,
      sup: true,
      align: true,
      attrs: true,
      imgLazyload: true,
      imgSize: true,
      figure: true,
      include: true,

      revealJs: true,
      chart: true,
      echarts: true,
      flowchart: true,
      mermaid: true,
      katex: true,

      tabs: true,
      codetabs: true,
      demo: true,
      vPre: true,
      vuePlayground: true,
      playground: {
        presets: ['ts', 'vue']
      }
    }
  }
})
