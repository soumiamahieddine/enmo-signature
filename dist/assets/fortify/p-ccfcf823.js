const e="peculiar";let t,n,l,o=!1,s=!1,i=!1,r=!1,c=0,f=!1;const a="undefined"!=typeof window?window:{},u=a.CSS,p=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},$=(()=>(p.head.attachShadow+"").indexOf("[native")>-1)(),y=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=e,i=b(t,o),r=w(n);d.ael(s,l,i,r),(t.o=t.o||[]).push(()=>d.rel(s,l,i,r))})},b=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},w=e=>0!=(2&e),g="http://www.w3.org/1999/xlink",v=new WeakMap,k=e=>"sc-"+e.u,j={},_=e=>"object"==(e=typeof e)||"function"===e,O="undefined"!=typeof Deno,M=!(O||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),S=(O&&Deno,M?process:O&&Deno,M?process:O&&Deno,(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!_(l))&&(l+=""),i&&r?c[c.length-1].p+=l:c.push(i?x(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,C);const a=x(e,null);return a.$=t,c.length>0&&(a.m=c),a.h=o,a.g=s,a}),x=(e,t)=>({t:0,v:e,p:t,k:null,m:null,$:null,h:null,g:null}),D={},C={forEach:(e,t)=>e.map(R).forEach(t),map:(e,t)=>e.map(R).map(t).map(T)},R=e=>({vattrs:e.$,vchildren:e.m,vkey:e.h,vname:e.g,vtag:e.v,vtext:e.p}),T=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),S(e.vtag,t,...e.vchildren||[])}const t=x(e.vtag,e.vtext);return t.$=e.vattrs,t.m=e.vchildren,t.h=e.vkey,t.g=e.vname,t},U=(e,t,n,l,o,s)=>{if(n!==l){let r=ye(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=L(n),s=L(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const f=_(l);if((r||f&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(i){}let a=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,a=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(g,t):e.removeAttribute(t)):(!r||4&s||o)&&!f&&(l=!0===l?"":l,a?e.setAttributeNS(g,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ye(a,c)?c.slice(2):c[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},E=/\s/,L=e=>e?e.split(E):[],P=(e,t,n,l)=>{const o=11===t.k.nodeType&&t.k.host?t.k.host:t.k,s=e&&e.$||j,i=t.$||j;for(l in s)l in i||U(o,l,s[l],void 0,n,t.t);for(l in i)U(o,l,s[l],i[l],n,t.t)},N=(e,s,c,f)=>{let a,u,d,$=s.m[c],y=0;if(o||(i=!0,"slot"===$.v&&(t&&f.classList.add(t+"-s"),$.t|=$.m?2:1)),null!==$.p)a=$.k=p.createTextNode($.p);else if(1&$.t)a=$.k=p.createTextNode("");else{if(r||(r="svg"===$.v),a=$.k=p.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.v),r&&"foreignObject"===$.v&&(r=!1),P(null,$,r),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),$.m)for(y=0;y<$.m.length;++y)u=N(e,$,y,a),u&&a.appendChild(u);"svg"===$.v?r=!1:"foreignObject"===a.tagName&&(r=!0)}return a["s-hn"]=l,3&$.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=$.g||"",d=e&&e.m&&e.m[c],d&&d.v===$.v&&e.k&&W(e.k,!1)),a},W=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(V(e).insertBefore(e,H(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&W(e,t)}d.t&=-2},q=(e,t,n,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=N(null,n,s,e),r&&(o[s].k=r,c.insertBefore(r,H(t))))},A=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.k,K(l),s=!0,o["s-ol"]?o["s-ol"].remove():W(o,!0),o.remove())},F=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),H=e=>e&&e["s-ol"]||e,V=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.k=e.k,l=e.m,o=t.m,s=t.v,i=t.p;let c;null===i?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||P(e,t,r),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],p=t[a],d=l.length-1,$=l[0],y=l[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==p)p=t[--a];else if(null==$)$=l[++r];else if(null==y)y=l[--d];else if(F(u,$))z(u,$),u=t[++i],$=l[++r];else if(F(p,y))z(p,y),p=t[--a],y=l[--d];else if(F(u,y))"slot"!==u.v&&"slot"!==y.v||W(u.k.parentNode,!1),z(u,y),e.insertBefore(u.k,p.k.nextSibling),u=t[++i],y=l[--d];else if(F(p,$))"slot"!==u.v&&"slot"!==y.v||W(p.k.parentNode,!1),z(p,$),e.insertBefore(p.k,u.k),p=t[--a],$=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===$.h){c=f;break}c>=0?(s=t[c],s.v!==$.v?o=N(t&&t[r],n,c,e):(z(s,$),t[c]=void 0,o=s.k),$=l[++r]):(o=N(t&&t[r],n,r,e),$=l[++r]),o&&V(u.k).insertBefore(o,H(u.k))}i>a?q(e,null==l[d+1]?null:l[d+1].k,n,l,r,d):r>d&&A(t,i,a)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),q(n,null,t,o,0,o.length-1)):null!==l&&A(l,0,l.length-1),r&&"svg"===s&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.p!==i&&(n.data=i)},B=e=>{let t,n,l,o,s,i,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}B(t)}},G=[],I=e=>{let t,n,l,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(J(n,o)?(i=G.find(e=>e.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,i?i._=t:G.push({_:t,j:n}),n["s-sr"]&&G.map(e=>{J(e.j,n["s-sn"])&&(i=G.find(e=>e.j===n),i&&!e._&&(e._=i._))})):G.some(e=>e.j===n)||G.push({j:n}));1===t.nodeType&&I(t)}},J=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,K=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(K)},Q=e=>pe(e).O,X=(e,t,n)=>{const l=Q(e);return{emit:e=>Y(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},Y=(e,t,n)=>{const l=d.ce(t,n);return e.dispatchEvent(l),l},Z=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},ee=(e,t)=>{if(e.t|=16,!(4&e.t))return Z(e,e.S),Se(()=>te(e,t));e.t|=512},te=(e,t)=>{const n=e.s;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>ie(n,e,t)),e.i=null),l=ie(n,"componentWillLoad")),re(l,()=>ne(e,n,t))},ne=(e,r,c)=>{const f=e.O,a=f["s-rc"];c&&(e=>{const t=e.D,n=e.O,l=t.t,o=((e,t)=>{let n=k(t),l=we.get(n);if(e=11===e.nodeType?e:p,l)if("string"==typeof l){let t,o=v.get(e=e.head||e);o||v.set(e,o=new Set),o.has(n)||(t=p.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})($&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);((e,r)=>{const c=e.O,f=e.D,a=e.C||x(null,null),u=(e=>e&&e.v===D)(r)?r:S(null,null,r);if(l=c.tagName,f.R&&(u.$=u.$||{},f.R.map(([e,t])=>u.$[t]=c[e])),u.v=null,u.t|=4,e.C=u,u.k=a.k=c.shadowRoot||c,t=c["s-sc"],n=c["s-cr"],o=$&&0!=(1&f.t),s=!1,z(a,u),d.t|=1,i){let e,t,n,l,o,s;I(u.k);let i=0;for(;i<G.length;i++)e=G[i],t=e.j,t["s-ol"]||(n=p.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<G.length;i++)if(e=G[i],t=e.j,e._){for(l=e._.parentNode,o=e._.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&B(u.k),d.t&=-2,G.length=0})(e,le(e,r)),a&&(a.map(e=>e()),f["s-rc"]=void 0);{const t=f["s-p"],n=()=>oe(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},le=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){me(n)}return t},oe=e=>{const t=e.O,n=e.s,l=e.S;64&e.t?ie(n,"componentDidUpdate"):(e.t|=64,ce(t),ie(n,"componentDidLoad"),e.T(t),l||se()),e.M&&(e.M(),e.M=void 0),512&e.t&&Me(()=>ee(e,!1)),e.t&=-517},se=()=>{ce(p.documentElement),d.t|=2,Me(()=>Y(a,"appload",{detail:{namespace:"peculiar"}}))},ie=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){me(l)}},re=(e,t)=>e&&e.then?e.then(t):t(),ce=e=>e.classList.add("hydrated"),fe=(e,t,n)=>{if(t.U){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.U),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>pe(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=pe(e),s=o.P.get(t),i=o.t,r=o.s;if(n=((e,t)=>null==e||_(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.U[t][0]),!(8&i&&void 0!==s||n===s)&&(o.P.set(t,n),r)){if(l.L&&128&i){const e=l.L[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){me(l)}})}2==(18&i)&&ee(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){d.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o})}}return e},ae=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=p.head,i=s.querySelector("meta[charset]"),r=p.createElement("style"),c=[];let f,u=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",p.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],U:t[2],N:t[3]};s.U=t[2],s.N=t[3],s.R=[],s.L={},!$&&1&s.t&&(s.t|=8);const i=s.u,r=class extends HTMLElement{constructor(e){super(e),$e(e=this,s),1&s.t&&($?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),u?c.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=pe(e),n=t.D,l=()=>{};if(1&t.t)h(e,t,n.N);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=p.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Z(t,t.S=n);break}}n.U&&Object.entries(n.U).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),Me(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=be(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.L=o.watchers,fe(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){me(r)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=k(n);if(!we.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_peculiar("./p-4b7cd42f.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=we.get(e);m&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,we.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.S,i=()=>ee(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=pe(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),ie(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=pe(this);e.O.isConnected&&2==(18&e.t)&&ee(e,!1)}})()}componentOnReady(){return pe(this).W}};s.q=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,fe(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),u=!1,c.length?c.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(se,30))},ue=new WeakMap,pe=e=>ue.get(e),de=(e,t)=>ue.set(t.s=e,t),$e=(e,t)=>{const n={t:0,O:e,D:t,P:new Map};return n.W=new Promise(e=>n.T=e),e["s-p"]=[],e["s-rc"]=[],h(e,n,t.N),ue.set(e,n)},ye=(e,t)=>t in e,me=e=>console.error(e),he=new Map,be=e=>{const t=e.u.replace(/-/g,"_"),n=e.q,l=he.get(n);return l?l[t]:__sc_import_peculiar(`./${n}.entry.js`).then(e=>(he.set(n,e),e[t]),me)},we=new Map,ge=[],ve=[],ke=[],je=(e,t)=>n=>{e.push(n),f||(f=!0,t&&4&d.t?Me(Oe):d.raf(Oe))},_e=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){me(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},Oe=()=>{c++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){me(t)}e.length=0})(ge);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*c):1/0;_e(ve,e),_e(ke,e),ve.length>0&&(ke.push(...ve),ve.length=0),(f=ge.length+ve.length+ke.length>0)?d.raf(Oe):c=0}},Me=e=>y().then(e),Se=je(ve,!0);export{u as C,D as H,e as N,y as a,ae as b,X as c,p as d,Q as g,S as h,d as p,de as r,a as w}