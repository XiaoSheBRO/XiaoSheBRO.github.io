import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as l,j as d,o as i}from"./app-B5WVqPsC.js";const c={};function a(t,e){return i(),l("div",null,e[0]||(e[0]=[d('<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css"><span>CSS</span></a></h1><p>CSS: <code>Cascading Style Sheets</code> 层叠样式表，用于定义网页的样式。</p><p>css规则 = 选择器 + 声明块</p><blockquote><p>声明块： <code>{</code> <code>}</code> 中, 包含多个声明（<em>属性</em>），每个声明（<em>属性</em>）表达了某一方面的样式。</p></blockquote><h2 id="css-代码位置" tabindex="-1"><a class="header-anchor" href="#css-代码位置"><span>CSS 代码位置</span></a></h2><ul><li>内部样式：写在<code>&lt;style&gt;</code>元素中，通常放在head元素中，保证浏览器最先加载样式。 <ul><li>样式很少时，放在内部样式中用来性能优化；浏览器只读取一个文件，提高网页的加载速度。</li></ul></li><li>内联样式：直接写在元素的style属性中。</li><li>外部样式表：将样式表放在单独的css文件中，通过link元素引入，通常放在head元素中。 <ul><li>可以解决多页面样式复用的问题。</li><li>有利于浏览器缓存，提高网站的加载速度。</li><li>有利于代码分离，便于维护。</li></ul></li></ul><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器"><span>选择器</span></a></h2><p>用于选中元素（<em>样式应用的范围</em>）</p><h3 id="简单选择器" tabindex="-1"><a class="header-anchor" href="#简单选择器"><span>简单选择器</span></a></h3><ul><li>元素选择器：选中对应名称的所有元素 <code>div</code></li><li>ID选择器：选中对应id值的元素 <code>#id</code></li><li>类选择器：选中对应class值的元素 <code>.class</code></li><li>通配符选择器：<code>*</code> 选择所有元素</li><li>属性选择器：选择具有特定属性的元素 <ul><li><code>[attr]</code>: 选择具有以 <code>attr</code> 命名属性的元素</li><li><code>[attr=value]</code>: 选择具有 <code>attr</code> 命名的属性且属性值等于 <code>value</code> 的元素</li><li><code>[attr~=value]</code>: 选择带有以 <code>attr</code> 命名的属性的元素，且属性值是一个以空格分隔的列表，其中至少有一个值为 <code>value</code></li><li><code>[attr*=value]</code>: 选择带有以 <code>attr</code> 命名的属性的元素，且属性值包含 <code>value</code> 字符</li></ul></li><li>伪类选择器：选中某些元素的某种状态 <ul><li><code>:link</code>: 超链接未访问过的状态</li><li><code>:visited</code>: 超链接已访问过的状态</li><li><code>:hover</code>: 鼠标悬停</li><li><code>:active</code>: 激活状态，鼠标按下</li><li><strong>注意多个伪类的书写顺序</strong>，<em>爱恨法则(按以上顺序)</em></li></ul></li><li>伪元素选择器：定位 HTML 中未包含的实体以及无法以其他方式定位的内容部分（<em>伪元素：文档树中不存在的抽象元素</em>） <ul><li><code>::before</code>: <em>创建一个伪元素</em>，它是所选元素的第一个子元素。</li><li><code>::after</code>: <em>创建一个伪元素</em>，它是所选元素的最后一个子元素。</li></ul></li></ul><h3 id="选择器的组合" tabindex="-1"><a class="header-anchor" href="#选择器的组合"><span>选择器的组合</span></a></h3><ol><li>并且 <code>selector1selector2</code><ul><li><code>a:hover</code></li><li><code>div::after</code></li><li><code>p.class-1</code></li><li><code>a[href=&quot;http://www.example.com&quot;]</code></li></ul></li><li>后代选择：选择选中元素的后代元素中的某些元素 <code>selector1 selector2</code><ul><li><code>div ul</code></li><li><code>.red li</code></li><li><code>.class *</code>: <em>选择所后代</em></li></ul></li><li>子元素选择：选择选中元素的直接子元素 <code>selector1 &gt; selector2</code></li><li>相邻兄弟选择：选择选中同一个父元素下的下一个<strong>紧跟</strong>选中的兄弟元素 <code>selector1 + selector2</code></li><li>兄弟选择：选择选中元素后的<strong>所有</strong>符合的兄弟元素 <code>selector1 ~ selector2</code></li></ol><h3 id="选择器的并列" tabindex="-1"><a class="header-anchor" href="#选择器的并列"><span>选择器的并列</span></a></h3><p>多个选择器可以用逗号 <code>,</code> 分隔</p><h2 id="常用属性" tabindex="-1"><a class="header-anchor" href="#常用属性"><span>常用属性</span></a></h2><ul><li><code>width</code>: 元素的宽度</li><li><code>height</code>: 元素的高度</li><li><code>color</code>: 元素内部文字的颜色</li><li><code>background-color</code>: 元素的背景颜色</li><li><code>font-size</code>: 字体尺寸大小，可以简单理解为文字的高度</li><li><code>font-weight</code>: 字体粗细程度，需要字体适配 <ul><li>默认值：<code>normal</code> = 400</li><li><code>bold</code> = 700</li></ul></li><li><code>font-family</code>: 字体，可以使用多个字体以匹配不同环境 <ul><li><code>sans-serif</code>: 无衬线字体，操作系统自动选择</li></ul></li><li><code>font-style</code>: 字体样式，通常用于设置斜体 <ul><li><code>normal</code>: 正常</li><li><code>italic</code>: 斜体</li></ul></li><li><code>text-align</code>: 文本对齐方式</li><li><code>text-decoration</code>: 文本修饰，如下划线、删除线等</li><li><code>text-indent</code>: 首行文本缩进</li><li><code>line-height</code>: 每行文本的高度，值越大每行距离越大 <ul><li>直接设置数字值：表示相对于当前元素的字体大小，一般用于多行文字</li><li><code>line-height</code> = <code>height</code> 单行文本垂直居中</li></ul></li><li><code>letter-spacing</code>:文字间距</li><li><code>text-align</code>: 元素内部文字的水平排列方式</li></ul><h3 id="简写属性" tabindex="-1"><a class="header-anchor" href="#简写属性"><span>简写属性</span></a></h3><ul><li><code>font</code>: <code>font-style</code> <code>font-variant</code> <code>font-weight</code> <code>font-size</code>/<code>line-height</code> <code>font-family</code></li><li><code>padding</code> / <code>margin</code><ul><li><code>-top</code> <code>-right</code> <code>-bottom</code> <code>-left</code></li><li><code>-top</code> <code>-left &amp; -right</code> <code>-bottom</code></li><li><code>-top &amp; -bottom</code> <code>-left &amp; -right</code></li><li><code>-top &amp; -right &amp; -bottom &amp; -left</code></li></ul></li><li><code>border</code></li><li><code>border-width</code></li><li><code>border-style</code></li><li><code>border-color</code></li></ul><h3 id="颜色表示" tabindex="-1"><a class="header-anchor" href="#颜色表示"><span>颜色表示</span></a></h3><ul><li>预设值：定义好的单词，如 <code>red</code></li><li>三原色（<em>红、绿、蓝</em>）色值：每个取值范围是 0~255 <ul><li>RGB (<em>十进制</em>): <code>rgb(255, 0, 0)</code></li><li>hex (<em>十六进制</em>): <code>#000000</code> ~ <code>#ffffff</code>，如果每种颜色两位相同，可以简写为 <code>#000</code></li></ul></li></ul><h3 id="尺寸单位" tabindex="-1"><a class="header-anchor" href="#尺寸单位"><span>尺寸单位</span></a></h3><ul><li><code>px</code>: 像素</li><li><code>em</code>: <em>相对单位</em>，相对于父元素的字体大小的倍数， <ul><li>每个元素必须有字体大小，如果一个元素没有声明字体大小，则会继承其父元素；如果没有父元素，则使用基准字号（<em>浏览器设置的默认字号</em>，通常是16px）。</li></ul></li></ul><h3 id="特殊取值" tabindex="-1"><a class="header-anchor" href="#特殊取值"><span>特殊取值</span></a></h3><ul><li>强制继承：<code>inherit</code> ，也可使不能继承的属性强制使用父元素的值。</li><li>初始值：<code>initial</code> 将该属性设置为默认值</li></ul><p>生效时间：<strong>在层叠时确定值为特殊值，并不会使用后续步骤</strong></p><h2 id="层叠" tabindex="-1"><a class="header-anchor" href="#层叠"><span>层叠</span></a></h2><p><em>声明冲突</em>：同一个样式多次应用到同一个元素</p><p>层叠（<em>权重计算</em>）：解决声明冲突的过程（<em>由浏览器处理</em>）</p><ol><li>比较重要性</li><li>比较特殊性</li><li>比较源次序</li></ol><h3 id="重要性" tabindex="-1"><a class="header-anchor" href="#重要性"><span>重要性</span></a></h3><p>作者样式表中的 <code>!important</code> 样式 &gt; 作者样式表中的普通样式 &gt; 浏览器默认样式表中的样式</p><blockquote><p><em>作者样式表：开发者书写的样式</em></p></blockquote><h3 id="特殊性" tabindex="-1"><a class="header-anchor" href="#特殊性"><span>特殊性</span></a></h3><p>总体规则：选择器选中的范围越窄越特殊</p><p><strong>具体规则</strong>：通过选择器计算出一个4位数的权重（<em>满256进位</em>）</p><ol><li>千位：如果是内联样式则记 <code>1</code> 否则记 <code>0</code></li><li>百位：所有ID选择器的数量</li><li>十位：所有类选择器、属性选择器、伪类选择器的数量</li><li>个位：所有元素选择器、伪元素选择器的数量</li></ol><h3 id="源次序" tabindex="-1"><a class="header-anchor" href="#源次序"><span>源次序</span></a></h3><p>源代码中书写顺序靠后的覆盖代码书写顺序靠前的样式</p><h3 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用"><span>实际应用</span></a></h3><ul><li>重置样式表：书写一个（<em>通用</em>）作者样式表，覆盖浏览器默认样式</li><li><em>爱恨法则</em>：特殊性相同，按照交互逻辑的效果，利用源次序来达到想要的效果</li></ul><blockquote><p>常用的CSS重置样式表： <a href="https://github.com/necolas/normalize.css/" target="_blank" rel="noopener noreferrer">normalize.css</a> <a href="https://www.joshwcomeau.com/css/custom-css-reset/" target="_blank" rel="noopener noreferrer">reset.css</a> <a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank" rel="noopener noreferrer">meyer.css</a></p></blockquote><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>子元素会继承父元素的<strong>某些</strong>属性，通常和字体、文字内容相关的属性都会被继承。</p><h2 id="属性值的计算过程" tabindex="-1"><a class="header-anchor" href="#属性值的计算过程"><span>属性值的计算过程</span></a></h2><ul><li>浏览器渲染页面时，按照页面文档的树型目录结构，从上到下，从左到右依次渲染</li><li>浏览器渲染每个元素的前提条件：该元素的<strong>所有css属性</strong>都必须有值</li></ul><p>一个元素从所有css属性都没有值到全部有值的过程叫属性值的<strong>计算过程</strong></p><ol><li>确定声明值：将样式表（<em>作者样式表，浏览器样式表</em>）中<strong>没有声明冲突</strong>的声明，作为CSS属性的值</li><li>层叠冲突：对样式表中<strong>有声明冲突</strong>的声明，按<strong>层叠</strong>规则，确定CSS的属性值</li><li>继承：对仍然没有值的CSS属性，若可以继承，则<strong>继承</strong>父元素的属性值</li><li>使用默认值：如果仍然没有值，则使用默认值(<em>每个CSS属性都有默认值</em>)</li></ol><h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型"><span>盒模型</span></a></h2><p>box(<em>CSS3 概念</em>): 盒子，每个元素在页面中都会生成一个矩形区域（盒子）</p><p>盒模型：规定单个盒子的规则</p><h3 id="盒子类型" tabindex="-1"><a class="header-anchor" href="#盒子类型"><span>盒子类型</span></a></h3><ol><li>行盒：<code>display: inline</code> 的元素，在页面中不换行</li><li>块盒：<code>display: block</code> 的元素，在页面中独占一行</li></ol><ul><li><code>display</code> 属性默认值为 <code>inline</code></li><li>浏览器默认样式表设置为块盒的元素：<code>容器元素</code>、<code>&lt;H1&gt;~&lt;H6&gt;</code>、<code>&lt;p&gt;</code></li><li>浏览器默认样式表设置为行盒的元素：<code>&lt;span&gt;</code>、<code>&lt;a&gt;</code>、<code>&lt;img&gt;</code>、<code>多媒体元素</code></li></ul><h3 id="盒子的组成部分" tabindex="-1"><a class="header-anchor" href="#盒子的组成部分"><span>盒子的组成部分</span></a></h3><p>无论是行盒还是块盒，都由下面几个部分组成，从内到外分别是：</p><ol><li>内容 <em>content</em><ul><li><code>width</code> 和 <code>height</code> 设置内容的宽高</li><li>通常叫做整个盒子的<strong>内容盒</strong> （<em>content-box</em>）</li></ul></li><li>填充 <em>padding</em>：盒子边框到盒子内容的距离 <ul><li><code>padding</code> 设置内边距</li><li>填充区 + 内容区 = <strong>填充盒</strong> （<em>padding-box</em>）</li></ul></li><li>边框 <em>border</em><ul><li><code>border</code> : <code>border-width</code> <code>border-style</code> <code>border-color</code></li><li>边框颜色默认为字体颜色</li><li>边框区 + 填充区 + 内容区 = <strong>边框盒</strong> （<em>border-box</em>）</li></ul></li><li>外边距 <em>margin</em>：边框到其他盒子的距离 <ul><li><code>margin</code> 设置外边距</li></ul></li></ol><h3 id="盒模型的应用" tabindex="-1"><a class="header-anchor" href="#盒模型的应用"><span>盒模型的应用</span></a></h3><h4 id="改变宽高范围" tabindex="-1"><a class="header-anchor" href="#改变宽高范围"><span>改变宽高范围</span></a></h4><p>默认情况下，<code>width</code> 和 <code>height</code> 设置的是内容盒的宽高，但衡量设计稿是往往是边框盒的宽高。</p><p>解决方案：</p><ol><li>精确计算</li><li>(<em>CSS3中</em>)可以使用 <code>box-sizing</code> 属性改变宽高的影响范围 <ul><li><code>box-sizing:content-box</code> (<em>默认值</em>)，宽高影响内容盒</li><li><code>box-sizing:border-box</code> 改变宽高的影响范围为边框盒</li></ul></li></ol><h4 id="改变背景覆盖范围" tabindex="-1"><a class="header-anchor" href="#改变背景覆盖范围"><span>改变背景覆盖范围</span></a></h4><p>默认情况下，背景覆盖边框盒。</p><p>(<em>CSS3中</em>)通过 <code>background-clip</code> 属性可以改变背景覆盖范围。</p><ul><li><code>background-clip:border-box</code> (<em>默认值</em>) 背景覆盖边框盒</li><li><code>background-clip:padding-box</code> 背景覆盖填充盒</li><li><code>background-clip:content-box</code> 背景覆盖内容盒</li></ul><h4 id="溢出处理" tabindex="-1"><a class="header-anchor" href="#溢出处理"><span>溢出处理</span></a></h4><p>当设置宽高时，内容超出盒子范围时默认可见，(<em>CSS3中</em>)可以通过 <code>overflow</code> 属性（<em>简写属性</em>）设置溢出处理。</p><ul><li><code>overflow:visible</code> (<em>默认值</em>) 超出内容可见</li><li><code>overflow:hidden</code> 超出内容隐藏</li><li><code>overflow:scroll</code> 生成滚动条</li><li><code>overflow:auto</code> 自动生成滚动条</li></ul><blockquote><p>网站标题为图片时，<code>H1</code> 元素的伪元素中用文字填写标题内容，再利用 <code>overflow:hidden</code> 隐藏文字，即实现了语义化，优化了SEO，又不影响图片的显示。</p></blockquote><h4 id="断词规则" tabindex="-1"><a class="header-anchor" href="#断词规则"><span>断词规则</span></a></h4><p>(<em>CSS3中</em>) <code>word-break</code> 属性影响文字在<strong>什么位置</strong>被截断换行</p><ul><li><code>word-break:normal</code> (<em>默认值</em>) 对于 <code>CJK</code> 字符在文字截断，非 <code>CJK</code> 字符在单词截断</li><li><code>word-break:break-all</code> 截断所有；对于所有字符都在文字截断</li><li><code>word-break:keep-all</code> 保持所有；所有字符都在单词截断</li></ul><h4 id="空白处理" tabindex="-1"><a class="header-anchor" href="#空白处理"><span>空白处理</span></a></h4><p>(<em>CSS3中</em>) <code>white-space</code> 属性控制元素内的空白字符（<em>空格、换行符等</em>）的处理规则</p><ul><li><code>white-space:normal</code> (<em>默认值</em>)</li><li><code>white-space:nowrap</code> 不换行 <ul><li>与 <code>overflow:hidden; text-overflow:ellipsis;</code> 结合使用，可以实现<strong>单行文本溢出显示省略号</strong></li></ul></li></ul><blockquote><p><code>pre</code> 元素的 <code>white-space</code> 属性值为 <code>pre</code>，禁止空白折叠</p></blockquote><h3 id="行盒盒模型的特点" tabindex="-1"><a class="header-anchor" href="#行盒盒模型的特点"><span>行盒盒模型的特点</span></a></h3><ol><li>盒子沿着内容延伸</li><li>宽高由内容决定，直接设置的宽高无效；如果需要调整盒子宽高，需要通过<code>font-size</code>, <code>line-height</code>, <code>font-family</code> 等属性间接设置</li><li>水平方向上，盒子的左右边界由内容决定，不受 <code>padding</code> 影响；垂直方向上，盒子的上下边界由内容决定，不受 <code>border</code> 影响</li><li>对于内边距（<em>填充区</em>），设置水平方向有效，垂直方向仅会影响背景，不会占据实际空间</li><li>边框同上</li><li>外边距同上</li></ol><h3 id="行块盒模型的特点" tabindex="-1"><a class="header-anchor" href="#行块盒模型的特点"><span>行块盒模型的特点</span></a></h3><p><code>display: inline-block</code> 的盒子</p><ol><li>不独占一行</li><li>盒模型中所有尺寸直接设置都有效</li></ol><h3 id="行盒的空白折叠" tabindex="-1"><a class="header-anchor" href="#行盒的空白折叠"><span>行盒的空白折叠</span></a></h3><p>空白折叠发生在行盒（含行块盒）内部或行盒（含行块盒）之间，无法消除</p><blockquote><p>除非源代码紧连在一起</p></blockquote><h3 id="可替换元素和非可替换元素" tabindex="-1"><a class="header-anchor" href="#可替换元素和非可替换元素"><span>可替换元素和非可替换元素</span></a></h3><ul><li>非可替换元素：大部分元素，页面上显示的结果，取决于元素的内容</li><li>可替换元素：少部分元素，显示结果取决于元素属性 <ul><li>如 <code>&lt;img&gt;</code>, <code>video</code>, <code>audio</code>, <code>input</code>, <code>button</code></li><li>绝大部分可替换元素是行盒，但效果类似于行块盒，<strong>所有盒模型中所有尺寸设置都有效</strong></li></ul></li></ul><h4 id="object-fit-调整图片适应盒子的方式" tabindex="-1"><a class="header-anchor" href="#object-fit-调整图片适应盒子的方式"><span><code>object-fit</code> 调整图片适应盒子的方式</span></a></h4><ul><li><code>object-fit:fill</code> <em>默认值</em></li></ul><h2 id="视觉格式化模型" tabindex="-1"><a class="header-anchor" href="#视觉格式化模型"><span>视觉格式化模型</span></a></h2><p>视觉格式化模型（布局规则）：页面中多个盒子的排列规则，大体分为三种：</p><ul><li>常规流</li><li>浮动</li><li>定位</li></ul><h3 id="常规流" tabindex="-1"><a class="header-anchor" href="#常规流"><span>常规流</span></a></h3><p>又叫文档流、普通文档流、常规文档流</p><ul><li>所有元素默认属于常规流布局</li><li>总体规则：块盒独占一行，行盒水平依次排列</li></ul><p><strong>包含块</strong>（<em>containing block</em>）：每个盒子都有它的包含块，包含块决定了盒子的排列区域。</p><ul><li>绝大部分情况下，一个盒子的包含块为其父元素的内容盒</li></ul><h4 id="块盒规则" tabindex="-1"><a class="header-anchor" href="#块盒规则"><span>块盒规则</span></a></h4><ol><li>每个块盒的盒子总宽度，<strong>必须</strong>刚好等于其包含块的宽度 <ul><li><code>width:auto</code> <em>默认值</em>，将剩余空间吸收；<code>width</code> 吸收能力强于 <code>margin</code></li><li>水平方向上，若 <code>width</code>, <code>border</code>, <code>padding</code>, <code>margin</code> 计算后仍有剩余空间，该剩余空间被 <code>margin-right</code> 全部吸收</li></ul></li><li>每个块盒垂直方向上 <ul><li><code>height:auto</code> <em>默认值</em>，高度由<strong>内容</strong>决定</li><li><code>margin:auto</code> 垂直方向 <code>margin</code> 为 <code>0</code></li></ul></li><li><a href="#%E7%99%BE%E5%88%86%E6%AF%94%E5%8F%96%E5%80%BC">百分比取值</a></li><li><em>外边距合并</em>：两个常规流块盒（<em>兄弟，父子</em>），<strong>上下</strong>外边距<strong>相邻</strong>，两个外边距会合并，取最大值。</li></ol><ul><li>在常规流中，块盒在包含块内水平居中：定宽且左右 <code>margin</code> 为 <code>auto</code></li><li>左右 <code>margin</code> 为负数，宽度 <code>auto</code> 可以实现超出父元素</li></ul><h4 id="百分比取值" tabindex="-1"><a class="header-anchor" href="#百分比取值"><span>百分比取值</span></a></h4><p><code>padding</code>, <code>margin</code>, <code>width</code> 所有百分比（<strong>所有方向</strong>）相对于<strong>包含块</strong>的宽度</p><p><code>height</code> 的百分比：</p><ol><li>包含块的高度取决于子元素，设置高度百分比无效</li><li>包含块的高度不取决于子元素，高度百分比相对于父元素高度</li></ol>',103)]))}const s=o(c,[["render",a],["__file","CSS.html.vue"]]),h=JSON.parse(`{"path":"/docs/learning/frontend/CSS.html","title":"CSS","lang":"zh-CN","frontmatter":{"description":"CSS CSS: Cascading Style Sheets 层叠样式表，用于定义网页的样式。 css规则 = 选择器 + 声明块 声明块： { } 中, 包含多个声明（属性），每个声明（属性）表达了某一方面的样式。 CSS 代码位置 内部样式：写在<style>元素中，通常放在head元素中，保证浏览器最先加载样式。 样式很少时，放在内部样式中用来...","head":[["meta",{"property":"og:url","content":"https://XiaoSheBRO.github.io/docs/learning/frontend/CSS.html"}],["meta",{"property":"og:site_name","content":"Shaw's Book"}],["meta",{"property":"og:title","content":"CSS"}],["meta",{"property":"og:description","content":"CSS CSS: Cascading Style Sheets 层叠样式表，用于定义网页的样式。 css规则 = 选择器 + 声明块 声明块： { } 中, 包含多个声明（属性），每个声明（属性）表达了某一方面的样式。 CSS 代码位置 内部样式：写在<style>元素中，通常放在head元素中，保证浏览器最先加载样式。 样式很少时，放在内部样式中用来..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoSheBRO\\"}]}"]]},"git":{},"readingTime":{"minutes":17.16,"words":3432},"filePathRelative":"docs/learning/frontend/CSS.md","autoDesc":true,"excerpt":"\\n<p>CSS: <code>Cascading Style Sheets</code> 层叠样式表，用于定义网页的样式。</p>\\n<p>css规则 = 选择器 + 声明块</p>\\n<blockquote>\\n<p>声明块： <code>{</code> <code>}</code> 中, 包含多个声明（<em>属性</em>），每个声明（<em>属性</em>）表达了某一方面的样式。</p>\\n</blockquote>\\n<h2>CSS 代码位置</h2>\\n<ul>\\n<li>内部样式：写在<code>&lt;style&gt;</code>元素中，通常放在head元素中，保证浏览器最先加载样式。\\n<ul>\\n<li>样式很少时，放在内部样式中用来性能优化；浏览器只读取一个文件，提高网页的加载速度。</li>\\n</ul>\\n</li>\\n<li>内联样式：直接写在元素的style属性中。</li>\\n<li>外部样式表：将样式表放在单独的css文件中，通过link元素引入，通常放在head元素中。\\n<ul>\\n<li>可以解决多页面样式复用的问题。</li>\\n<li>有利于浏览器缓存，提高网站的加载速度。</li>\\n<li>有利于代码分离，便于维护。</li>\\n</ul>\\n</li>\\n</ul>"}`);export{s as comp,h as data};
