import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as l,o as n}from"./app-DkeRO-t7.js";const a={};function r(o,t){return n(),i("div",null,t[0]||(t[0]=[l('<h1 id="前端工程化" tabindex="-1"><a class="header-anchor" href="#前端工程化"><span>前端工程化</span></a></h1><h2 id="传统开发的弊端" tabindex="-1"><a class="header-anchor" href="#传统开发的弊端"><span>传统开发的弊端</span></a></h2><blockquote><p>指在 html 直接编写页面和样式，直接写入或引入外部 js</p></blockquote><ul><li>可能存在同名的变量声明，引起变量冲突</li><li>引入多个资源文件时，无法快速找到变量是在哪里声明的，大型项目难以维护</li><li>问题无法轻松预先感知，很依赖开发人员人工定位</li><li>代码缺乏分割，如一个工具函数库，几乎需要整包引入到 HTML 里，只用到其中一两个方法</li><li>大文件中 script 的加载从上到下，容易阻塞页面渲染</li><li>不同页面的资源引用需要手动管理，容易造成依赖混乱，难以维护</li><li>压缩 CSS 、混淆 JS 代码，需要大量人力手动操作</li></ul><h2 id="工程化的优势" tabindex="-1"><a class="header-anchor" href="#工程化的优势"><span>工程化的优势</span></a></h2><blockquote><p>借助工具来解决人工层面的繁琐事情</p></blockquote><ul><li>引入了模块化和包的概念，作用域隔离，解决了代码冲突的问题</li><li>按需导出和导入机制，让编码过程更容易定位问题</li><li>自动化的代码检测流程，有问题的代码在开发过程中就可以被发现</li><li>编译打包机制可以让你使用开发效率更高的编码方式，比如 Vue 组件、 CSS 的各种预处理器</li><li>引入了代码兼容处理的方案（ 如 Babel ），可以让你自由使用更先进的 JavaScript 语句，而无需顾忌浏览器兼容性，因为最终会帮你转换为浏览器兼容的实现版本</li><li>引入了 Tree Shaking 机制，清理没有用到的代码，减少项目构建后的体积</li></ul><h3 id="如何实践工程化" tabindex="-1"><a class="header-anchor" href="#如何实践工程化"><span>如何实践工程化</span></a></h3><p>基于 Vue 3 的项目，最主流的工程化组合拳有以下两种：</p><table><thead><tr><th>常用方案</th><th>Runtime</th><th>构建工具</th><th>框架</th></tr></thead><tbody><tr><td>方案一</td><td>Node</td><td>Webpack</td><td>Vue</td></tr><tr><td>方案二</td><td>Node</td><td>Vite</td><td>Vue</td></tr></tbody></table>',10)]))}const c=e(a,[["render",r],["__file","Engineering.html.vue"]]),s=JSON.parse(`{"path":"/docs/learning/frontend/Engineering.html","title":"前端工程化","lang":"zh-CN","frontmatter":{"description":"前端工程化 传统开发的弊端 指在 html 直接编写页面和样式，直接写入或引入外部 js 可能存在同名的变量声明，引起变量冲突 引入多个资源文件时，无法快速找到变量是在哪里声明的，大型项目难以维护 问题无法轻松预先感知，很依赖开发人员人工定位 代码缺乏分割，如一个工具函数库，几乎需要整包引入到 HTML 里，只用到其中一两个方法 大文件中 script...","head":[["meta",{"property":"og:url","content":"https://XiaoSheBRO.github.io/docs/learning/frontend/Engineering.html"}],["meta",{"property":"og:site_name","content":"Shaw's Book"}],["meta",{"property":"og:title","content":"前端工程化"}],["meta",{"property":"og:description","content":"前端工程化 传统开发的弊端 指在 html 直接编写页面和样式，直接写入或引入外部 js 可能存在同名的变量声明，引起变量冲突 引入多个资源文件时，无法快速找到变量是在哪里声明的，大型项目难以维护 问题无法轻松预先感知，很依赖开发人员人工定位 代码缺乏分割，如一个工具函数库，几乎需要整包引入到 HTML 里，只用到其中一两个方法 大文件中 script..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端工程化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoSheBRO\\"}]}"]]},"headers":[{"level":2,"title":"传统开发的弊端","slug":"传统开发的弊端","link":"#传统开发的弊端","children":[]},{"level":2,"title":"工程化的优势","slug":"工程化的优势","link":"#工程化的优势","children":[{"level":3,"title":"如何实践工程化","slug":"如何实践工程化","link":"#如何实践工程化","children":[]}]}],"git":{},"readingTime":{"minutes":2.38,"words":475},"filePathRelative":"docs/learning/frontend/Engineering.md","autoDesc":true,"excerpt":"\\n<h2>传统开发的弊端</h2>\\n<blockquote>\\n<p>指在 html 直接编写页面和样式，直接写入或引入外部 js</p>\\n</blockquote>\\n<ul>\\n<li>可能存在同名的变量声明，引起变量冲突</li>\\n<li>引入多个资源文件时，无法快速找到变量是在哪里声明的，大型项目难以维护</li>\\n<li>问题无法轻松预先感知，很依赖开发人员人工定位</li>\\n<li>代码缺乏分割，如一个工具函数库，几乎需要整包引入到 HTML 里，只用到其中一两个方法</li>\\n<li>大文件中 script 的加载从上到下，容易阻塞页面渲染</li>\\n<li>不同页面的资源引用需要手动管理，容易造成依赖混乱，难以维护</li>\\n<li>压缩 CSS 、混淆 JS 代码，需要大量人力手动操作</li>\\n</ul>"}`);export{c as comp,s as data};
