import{C as e,p as o,w as s,a as t,d as n,N as r}from"./p-ccfcf823.js";const a="undefined"!=typeof Deno,c=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),p=(a&&Deno,c?process:a&&Deno,c?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?t():__sc_import_peculiar("./p-0ad0b6e8.js").then(()=>(o.o=s.__cssshim)?(!1).i():0)),i=()=>{o.o=s.__cssshim;const e=Array.from(n.querySelectorAll("script")).find(e=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===r),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href,l(a.resourcesUrl,e),s.customElements?t(a):__sc_import_peculiar("./p-3d1015c2.js").then(()=>a))},l=(e,o)=>{const t="__sc_import_"+r.replace(/\s|-/g,"_");try{s[t]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;s[t]=a=>{const c=new URL(a,e).href;let p=r.get(c);if(!p){const e=n.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${t}.m = m;`],{type:"application/javascript"})),p=new Promise(o=>{e.onload=()=>{o(s[t].m),e.remove()}}),r.set(c,p),n.head.appendChild(e)}return p}}};export{p as a,i as p}