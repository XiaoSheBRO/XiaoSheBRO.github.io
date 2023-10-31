import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'

export default hopeTheme(
  {
    hotReload: true, // 开发实时完整热更新
    hostname: 'https://XiaoSheBRO.github.io', // 部署域名
    docsDir: 'src/docs/', // 文档目录
    author: {
      name: 'XiaoSheBRO',
      // url: 'https://example.com',s
      // email: string;
    },
    // favicon: string  //站点图标
    logo: '/logo.svg',
    repo: 'XiaoSheBRO/XiaoSheBRO.github.io',

    // navbarAutoHide: "always" | "mobile" | "none", // 向下滚动时自动隐藏导航栏
    navbar, // 顶部链接
    sidebar, // 侧边栏
    themeColor: true, // 主题色选择器
    // sidebarSorter: 'date', // 侧边栏排序器

    displayFooter: true, //页脚
    footer: 'powered by <a href="https://theme-hope.vuejs.press/zh/">vuepress-theme-hope</a>',

    iconAssets: 'fontawesome-with-brands',

    // 加密文章
    encrypt: {
      config: {},
    },

    // 文章信息
    pageInfo: ['Author', 'Date', 'Category', 'Tag', 'Word', 'ReadingTime'],
    // 文章数据
    editLink: false,
    contributors: false,
    metaLocales: {
      // editLink: '在 GitHub 上编辑此页',
      lastUpdated: '更新于',
    },

    plugins: {
      readingTime: {
        wordPerMinute: 200,
      },
      // You should generate and use your own comment service
      comment: {
        comment: false,
        provider: 'Giscus',
        // repo: 'vuepress-theme-hope/giscus-discussions',
        // repoId: 'R_kgDOG_Pt2A',
        // category: 'Announcements',
        // categoryId: 'DIC_kwDOG_Pt2M4COD69',
      },

      // All features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        chart: true,
        codetabs: true,
        demo: true,
        echarts: true,
        figure: true,
        flowchart: true,
        gfm: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        katex: true,
        mark: true,
        mermaid: true,
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
        playground: {
          presets: ['ts', 'vue'],
        },
        revealJs: true,
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended',
                }
            },
          },
        ],
      },

      // uncomment these if you want a pwa
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true }
)
