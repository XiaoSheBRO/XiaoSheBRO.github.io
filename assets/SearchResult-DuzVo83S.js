import{l as K,v as X,x as O,y as Z,z as ee,A as se,B as le,p as A,m as R,D as l,E as te,w as ae,F as re,R as I,G as ie,H as ne,J as ue,K as oe,L as ce,M as $,N as b,O as de,Q as me,S as he,t as ve,T as ye,U as pe,V as ge,W as fe,X as P,Y as Se,Z as x}from"./app-wDZCJc65.js";const He=["/PlayAround.html","/","/TODO.html","/docs/","/docs/demo/CSS-1-Carousel.html","/docs/demo/CSS-2-DiyRadio.html","/docs/demo/CSS-3-ScrollBarStyle.html","/docs/demo/CSS-4-Font.html","/docs/demo/HTML-1-Table.html","/docs/demo/SVG-1-Demo.html","/docs/resources/yupi.html","/docs/journey/Coding.html","/docs/journey/","/docs/learning/Archive.html","/docs/learning/DevOps.html","/docs/learning/Projects.html","/docs/resume/202207.html","/docs/resume/202209.html","/docs/resume/2025S1.html","/docs/resume/Q_A.html","/docs/learning/algorithm/Starter.html","/docs/learning/frontend/Ajax.html","/docs/learning/frontend/Browser.html","/docs/learning/frontend/CSS.html","/docs/learning/frontend/Engineering.html","/docs/learning/frontend/H5C3.html","/docs/learning/frontend/HTML.html","/docs/learning/frontend/JavaScript.html","/docs/learning/frontend/Node.js.html","/docs/learning/frontend/SVG.html","/docs/learning/frontend/Scss.html","/docs/learning/frontend/Vue2.x.html","/docs/learning/frontend/Vue3.x.html","/docs/learning/tools/Git.html","/404.html","/docs/demo/","/docs/resources/","/docs/learning/","/docs/resume/","/docs/learning/algorithm/","/docs/learning/frontend/","/docs/learning/tools/"],Ce="SLIMSEARCH_QUERY_HISTORY",p=P(Ce,[]),Re=()=>{const{queryHistoryCount:a}=x;return{enabled:a>0,queryHistories:p,addQueryHistory:n=>{p.value=Array.from(new Set([n,...p.value.slice(0,a-1)]))},removeQueryHistory:n=>{p.value=[...p.value.slice(0,n),...p.value.slice(n+1)]}}},T=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:M}=x,g=P(xe,[]),Qe=()=>({enabled:M>0,resultHistories:g,addResultHistory:i=>{{const n={link:T(i),display:i.display};"header"in i&&(n.header=i.header),g.value=[n,...g.value.slice(0,M-1)]}},removeResultHistory:i=>{g.value=[...g.value.slice(0,i),...g.value.slice(i+1)]}}),ke=a=>{const i=de(),n=O(),Q=me(),u=A(0),f=R(()=>u.value>0),d=he([]);return ve(()=>{const{search:k,terminate:h}=ye(),S=ge(v=>{const{resultsFilter:w=t=>t,querySplitter:y,suggestionsFilter:j,...r}=i.value;v?(u.value+=1,k(v,n.value,r).then(t=>w(t,v,n.value,Q.value)).then(t=>{u.value-=1,d.value=t}).catch(t=>{console.warn(t),u.value-=1,u.value||(d.value=[])})):d.value=[]},x.searchDelay-x.suggestDelay,{maxWait:5e3});pe([a,n],([v])=>S(v.join(" "))),fe(()=>{h()})}),{isSearching:f,results:d}};var qe=K({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:i}){const n=X(),Q=O(),u=Z(ee),{addQueryHistory:f,queryHistories:d,removeQueryHistory:k}=Re(),{resultHistories:h,addResultHistory:S,removeResultHistory:v}=Qe(),w=se(a,"queries"),{results:y,isSearching:j}=ke(w),r=le({isQuery:!0,index:0}),t=A(0),m=A(0),E=R(()=>d.value.length>0||h.value.length>0),q=R(()=>y.value.length>0),D=R(()=>y.value[t.value]||null),V=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?h.value.length-1:d.value.length-1):r.index=s-1},U=()=>{const{isQuery:e,index:s}=r;s===(e?d.value.length-1:h.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},_=()=>{t.value=t.value>0?t.value-1:y.value.length-1,m.value=D.value.contents.length-1},B=()=>{t.value=t.value<y.value.length-1?t.value+1:0,m.value=0},G=()=>{m.value<D.value.contents.length-1?m.value+=1:B()},Y=()=>{m.value>0?m.value-=1:_()},L=e=>e.map(s=>Se(s)?s:l(s[0],s[1])),J=e=>{if(e.type==="customField"){const s=oe[e.index]||"$content",[o,C=""]=ce(s)?s[Q.value].split("$content"):s.split("$content");return e.display.map(c=>l("div",L([o,...c,C])))}return e.display.map(s=>l("div",L(s)))},H=()=>{t.value=0,m.value=0,i("updateQuery",""),i("close")},N=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},u.value.queryHistory),d.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{i("updateQuery",e)}},[l($,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:b,onClick:o=>{o.preventDefault(),o.stopPropagation(),k(s)}})]))])),W=()=>l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},u.value.resultHistory),h.value.map((e,s)=>l(I,{to:e.link,class:["slimsearch-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{H()}},()=>[l($,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(o=>L(o)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:b,onClick:o=>{o.preventDefault(),o.stopPropagation(),v(s)}})]))]));return te("keydown",e=>{if(a.isFocusing){if(q.value){if(e.key==="ArrowUp")Y();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const s=D.value.contents[m.value];f(a.queries.join(" ")),S(s),n.push(T(s)),H()}}else if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")U();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(i("updateQuery",d.value[s]),e.preventDefault()):(n.push(h.value[s].link),H())}}}),ae([t,m],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:a.queries.length?!q.value:!E.value}],id:"slimsearch-results"},a.queries.length?j.value?l(re,{hint:u.value.searching}):q.value?l("ul",{class:"slimsearch-result-list"},y.value.map(({title:e,contents:s},o)=>{const C=t.value===o;return l("li",{class:["slimsearch-result-list-item",{active:C}]},[l("div",{class:"slimsearch-result-title"},e||u.value.defaultTitle),s.map((c,z)=>{const F=C&&m.value===z;return l(I,{to:T(c),class:["slimsearch-result-item",{active:F,"aria-selected":F}],onClick:()=>{f(a.queries.join(" ")),S(c),H()}},()=>[c.type==="text"?null:l(c.type==="title"?ie:c.type==="heading"?ne:ue,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[c.type==="text"&&c.header?l("div",{class:"content-header"},c.header):null,l("div",J(c))])])})])})):u.value.emptyResult:E.value?[N(),W()]:u.value.emptyHistory)}});export{qe as default};
