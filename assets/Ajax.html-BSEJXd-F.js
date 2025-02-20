import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,f as l,o as e}from"./app-DkeRO-t7.js";const o={};function p(t,s){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax"><span>Ajax</span></a></h1><h2 id="http-hyper-text-transfer-protocol-超文本传输协议" tabindex="-1"><a class="header-anchor" href="#http-hyper-text-transfer-protocol-超文本传输协议"><span>Http (<em>Hyper Text Transfer Protocol 超文本传输协议</em>)</span></a></h2><p>基于 TCP/IP 通信协议来传递数据</p><h3 id="https-hypertext-transfer-protocol-secure-超文本传输安全协议" tabindex="-1"><a class="header-anchor" href="#https-hypertext-transfer-protocol-secure-超文本传输安全协议"><span>HTTPS (<em>HyperText Transfer Protocol Secure 超文本传输安全协议</em>)</span></a></h3><p>经由 HTTP 进行通信，利用 SSL/TLS 来加密数据包<br> 供对网站服务器的身份认证，保护交换资料的隐私与完整性<br> HTTP 默认使用端口 80，而 HTTPS 默认使用端口 443</p><h3 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求"><span>http 请求</span></a></h3><p>其中 HTTP 1.0 定义了三种请求方法： <code>GET</code>, <code>POST</code> 和 <code>HEAD</code> 方法。<br> HTTP 1.1 新增了五种请求方法：<code>OPTIONS</code>, <code>PUT</code>, <code>DELETE</code>, <code>TRACE</code> 和 <code>CONNECT</code> 方法。</p><ul><li>get</li><li>post</li><li>put</li><li>delete</li></ul><p>http 请求本身不会进行操作，具体操作由后端服务器实现与响应，请求方法名只是约定</p><blockquote><p>http 请求的异同 ？</p></blockquote><h3 id="http-请求状态码" tabindex="-1"><a class="header-anchor" href="#http-请求状态码"><span>http 请求状态码</span></a></h3><ul><li>200：请求成功</li><li>301：资源被永久转移到其它 URL</li><li>404：请求的资源（网页等）不存在</li><li>500：内部服务器错误</li></ul><h2 id="ajax-1" tabindex="-1"><a class="header-anchor" href="#ajax-1"><span>ajax</span></a></h2><p>按需加载数据，异步数据，数据格式通常为 json(<em>js 对象表示法</em>)</p><h3 id="readystate" tabindex="-1"><a class="header-anchor" href="#readystate"><span>readyState</span></a></h3><ul><li>0 : 请求未初始化</li><li>1 ：服务器链接已建立</li><li>2 ：请求已接受</li><li>3 ：请求处理中</li><li>4 ：请求已完成，响应已就绪</li></ul><h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios"><span>axios</span></a></h2><p>封装 ajax</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282A36;color:#f6f6f4;"><pre class="shiki dracula-soft vp-code"><code><span class="line"><span style="color:#F6F6F4;">axios.</span><span style="color:#62E884;">get</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">url</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">res</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(res.data)</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">axios.</span><span style="color:#62E884;">post</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">url</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, { params }).</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">((</span><span style="color:#FFB86C;font-style:italic;">res</span><span style="color:#F6F6F4;">) </span><span style="color:#F286C4;">=&gt;</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">  console.</span><span style="color:#62E884;">log</span><span style="color:#F6F6F4;">(res.data)</span></span>
<span class="line"><span style="color:#F6F6F4;">})</span></span></code></pre></div><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域"><span>跨域</span></a></h2><blockquote><p>同源请求：相同 IP、端口；默认无法使用 ajax</p></blockquote><h3 id="jsonp-原理" tabindex="-1"><a class="header-anchor" href="#jsonp-原理"><span>jsonp 原理</span></a></h3><p>利用 <code>&lt;script&gt;</code> 标签跨域引入 js 文件<br> 并不是 ajax，实质是 get 请求</p><blockquote><p>koa (第三方封装)</p><p>后端：引入 jsonp<br> 前端：jquery 设置 <code>dataType:&quot;jsonp&quot;</code></p></blockquote><h3 id="设置响应头" tabindex="-1"><a class="header-anchor" href="#设置响应头"><span><strong>设置响应头</strong></span></a></h3><p>后端：设置服务器响应头信息 <code>ctx.set(&#39;Access-Control-Allow-Origin&#39;, &#39;url&#39;)</code> (_url 为<code>_</code>则允许所有_)<br> 由于存在安全问题，一般开发环境(前后端分离)设置，部署生产环境则不跨域</p><div class="language-js" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282A36;color:#f6f6f4;"><pre class="shiki dracula-soft vp-code"><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> xhr </span><span style="color:#F286C4;">=</span><span style="color:#F286C4;font-weight:bold;"> new</span><span style="color:#62E884;"> XMLHttpRequest</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">xhr.</span><span style="color:#62E884;">open</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">post</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/url</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">) </span><span style="color:#7B7F8B;">//请求类型;路径</span></span>
<span class="line"><span style="color:#F6F6F4;">xhr.</span><span style="color:#62E884;">send</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">xhr.</span><span style="color:#62E884;">onreadystatechange</span><span style="color:#F286C4;"> =</span><span style="color:#F286C4;"> function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#7B7F8B;">  // 监听onreadystatechange事件变化</span></span>
<span class="line"><span style="color:#F286C4;">  if</span><span style="color:#F6F6F4;"> (xhr.readyState </span><span style="color:#F286C4;">===</span><span style="color:#BF9EEE;"> 4</span><span style="color:#F286C4;"> &amp;&amp;</span><span style="color:#F6F6F4;"> xhr.state </span><span style="color:#F286C4;">==</span><span style="color:#BF9EEE;"> 200</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#62E884;">    alert</span><span style="color:#F6F6F4;">(xhr.responseText)</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;">// 封装ajax方法</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#62E884;"> myAjax1</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">method</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">url</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">next</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F286C4;">  let</span><span style="color:#F6F6F4;"> xhr </span><span style="color:#F286C4;">=</span><span style="color:#F286C4;font-weight:bold;"> new</span><span style="color:#62E884;"> XMLHttpRequest</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  xhr.</span><span style="color:#62E884;">open</span><span style="color:#F6F6F4;">(method, url) </span><span style="color:#7B7F8B;">//请求类型;路径</span></span>
<span class="line"><span style="color:#F6F6F4;">  xhr.</span><span style="color:#62E884;">send</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">  xhr.</span><span style="color:#62E884;">onreadystatechange</span><span style="color:#F286C4;"> =</span><span style="color:#F286C4;"> function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#7B7F8B;">    // 监听onreadystatechange事件变化</span></span>
<span class="line"><span style="color:#F286C4;">    if</span><span style="color:#F6F6F4;"> (xhr.readyState </span><span style="color:#F286C4;">===</span><span style="color:#BF9EEE;"> 4</span><span style="color:#F286C4;"> &amp;&amp;</span><span style="color:#F6F6F4;"> xhr.state </span><span style="color:#F286C4;">==</span><span style="color:#BF9EEE;"> 200</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#7B7F8B;">      // 异步获取结果</span></span>
<span class="line"><span style="color:#62E884;">      next</span><span style="color:#F6F6F4;">(xhr.responseText) </span><span style="color:#7B7F8B;">// 回调函数方式，不能大量使用，很难维护，不建议使用</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"><span style="color:#7B7F8B;">// 回调一个promise</span></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#62E884;"> myAjax2</span><span style="color:#F6F6F4;">(</span><span style="color:#FFB86C;font-style:italic;">method</span><span style="color:#F6F6F4;">, </span><span style="color:#FFB86C;font-style:italic;">url</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F286C4;">  return</span><span style="color:#F286C4;font-weight:bold;"> new</span><span style="color:#97E1F1;font-style:italic;"> Promise</span><span style="color:#F6F6F4;">(</span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> (</span><span style="color:#FFB86C;font-style:italic;">resolve</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#F286C4;">    let</span><span style="color:#F6F6F4;"> xhr </span><span style="color:#F286C4;">=</span><span style="color:#F286C4;font-weight:bold;"> new</span><span style="color:#62E884;"> XMLHttpRequest</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">open</span><span style="color:#F6F6F4;">(method, url) </span><span style="color:#7B7F8B;">//请求类型;路径</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">send</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">    xhr.</span><span style="color:#62E884;">onreadystatechange</span><span style="color:#F286C4;"> =</span><span style="color:#F286C4;"> function</span><span style="color:#F6F6F4;"> () {</span></span>
<span class="line"><span style="color:#7B7F8B;">      // 监听onreadystatechange事件变化</span></span>
<span class="line"><span style="color:#F286C4;">      if</span><span style="color:#F6F6F4;"> (xhr.readyState </span><span style="color:#F286C4;">===</span><span style="color:#BF9EEE;"> 4</span><span style="color:#F286C4;"> &amp;&amp;</span><span style="color:#F6F6F4;"> xhr.state </span><span style="color:#F286C4;">==</span><span style="color:#BF9EEE;"> 200</span><span style="color:#F6F6F4;">) {</span></span>
<span class="line"><span style="color:#7B7F8B;">        // 异步获取结果</span></span>
<span class="line"><span style="color:#62E884;">        resolve</span><span style="color:#F6F6F4;">(xhr.responseText)</span></span>
<span class="line"><span style="color:#F6F6F4;">      }</span></span>
<span class="line"><span style="color:#F6F6F4;">    }</span></span>
<span class="line"><span style="color:#F6F6F4;">  })</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#62E884;">myAjax2</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">get</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">, </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">/data</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">).</span><span style="color:#62E884;">then</span><span style="color:#F6F6F4;">(</span><span style="color:#62E884;">alert</span><span style="color:#F6F6F4;">(res))</span></span></code></pre></div>`,27)]))}const F=a(o,[["render",p],["__file","Ajax.html.vue"]]),y=JSON.parse(`{"path":"/docs/learning/frontend/Ajax.html","title":"Ajax","lang":"zh-CN","frontmatter":{"description":"Ajax Http (Hyper Text Transfer Protocol 超文本传输协议) 基于 TCP/IP 通信协议来传递数据 HTTPS (HyperText Transfer Protocol Secure 超文本传输安全协议) 经由 HTTP 进行通信，利用 SSL/TLS 来加密数据包 供对网站服务器的身份认证，保护交换资料的隐私与完...","head":[["meta",{"property":"og:url","content":"https://XiaoSheBRO.github.io/docs/learning/frontend/Ajax.html"}],["meta",{"property":"og:site_name","content":"Shaw's Book"}],["meta",{"property":"og:title","content":"Ajax"}],["meta",{"property":"og:description","content":"Ajax Http (Hyper Text Transfer Protocol 超文本传输协议) 基于 TCP/IP 通信协议来传递数据 HTTPS (HyperText Transfer Protocol Secure 超文本传输安全协议) 经由 HTTP 进行通信，利用 SSL/TLS 来加密数据包 供对网站服务器的身份认证，保护交换资料的隐私与完..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ajax\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoSheBRO\\"}]}"]]},"headers":[{"level":2,"title":"Http (Hyper Text Transfer Protocol 超文本传输协议)","slug":"http-hyper-text-transfer-protocol-超文本传输协议","link":"#http-hyper-text-transfer-protocol-超文本传输协议","children":[{"level":3,"title":"HTTPS (HyperText Transfer Protocol Secure 超文本传输安全协议)","slug":"https-hypertext-transfer-protocol-secure-超文本传输安全协议","link":"#https-hypertext-transfer-protocol-secure-超文本传输安全协议","children":[]},{"level":3,"title":"http 请求","slug":"http-请求","link":"#http-请求","children":[]},{"level":3,"title":"http 请求状态码","slug":"http-请求状态码","link":"#http-请求状态码","children":[]}]},{"level":2,"title":"ajax","slug":"ajax-1","link":"#ajax-1","children":[{"level":3,"title":"readyState","slug":"readystate","link":"#readystate","children":[]}]},{"level":2,"title":"axios","slug":"axios","link":"#axios","children":[]},{"level":2,"title":"跨域","slug":"跨域","link":"#跨域","children":[{"level":3,"title":"jsonp 原理","slug":"jsonp-原理","link":"#jsonp-原理","children":[]},{"level":3,"title":"设置响应头","slug":"设置响应头","link":"#设置响应头","children":[]}]}],"git":{},"readingTime":{"minutes":3.01,"words":601},"filePathRelative":"docs/learning/frontend/Ajax.md","autoDesc":true,"excerpt":"\\n<h2>Http (<em>Hyper Text Transfer Protocol 超文本传输协议</em>)</h2>\\n<p>基于 TCP/IP 通信协议来传递数据</p>\\n<h3>HTTPS (<em>HyperText Transfer Protocol Secure 超文本传输安全协议</em>)</h3>\\n<p>经由 HTTP 进行通信，利用 SSL/TLS 来加密数据包<br>\\n供对网站服务器的身份认证，保护交换资料的隐私与完整性<br>\\nHTTP 默认使用端口 80，而 HTTPS 默认使用端口 443</p>\\n<h3>http 请求</h3>\\n<p>其中 HTTP 1.0 定义了三种请求方法： <code>GET</code>, <code>POST</code> 和 <code>HEAD</code> 方法。<br>\\nHTTP 1.1 新增了五种请求方法：<code>OPTIONS</code>, <code>PUT</code>, <code>DELETE</code>, <code>TRACE</code> 和 <code>CONNECT</code> 方法。</p>"}`);export{F as comp,y as data};
