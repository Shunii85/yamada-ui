import{r as u}from"./index-4g5l5LRQ.js";import{u as f}from"./theme-provider-bBWP4weD.js";import{r as k}from"./factory-d4qha7R6.js";const d=()=>{const{theme:r}=f();if(!r)throw Error("useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const t=r.__breakpoints;if(!t)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const o=u.useMemo(()=>t.queries.map(({breakpoint:n,minMaxQuery:e})=>({breakpoint:n,query:(e==null?void 0:e.replace("@media screen and ",""))??""})),[t]),[i,p]=u.useState(()=>{if(!k())return"base";for(const{breakpoint:e,query:s}of o)if(window.matchMedia(s).matches)return e});return u.useEffect(()=>{const n=o.map(({breakpoint:e,query:s})=>{const a=window.matchMedia(s),c=m=>{m.matches&&p(e)};return typeof a.addEventListener=="function"&&a.addEventListener("change",c),()=>{typeof a.removeEventListener=="function"&&a.removeEventListener("change",c)}});return()=>{n.forEach(e=>e())}},[o]),i},E=r=>{const{theme:t}=f(),o=d();return h(r)(t,o)},h=r=>(t,o)=>{var n;if(!t)throw Error("useBreakpoint: `theme` is undefined. Seems you forgot to wrap your app in `<UIProvider />`");const i=(n=t.__breakpoints)==null?void 0:n.keys;if(!i)throw Error("useBreakpoint: `breakpoints` is undefined. Seems you forgot to put theme in `breakpoints`");const p=i.indexOf(o);for(let e=p;0<e;e--){const s=i[e];if(r.hasOwnProperty(s))return r[s]}return r.base};export{d as a,E as u};