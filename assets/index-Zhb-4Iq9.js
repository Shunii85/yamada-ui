import{u as b}from"./index-Du0-7Fls.js";import{u as v}from"./index-X30eDiIt.js";import{r as a}from"./index-BwDkhjyp.js";import{q as u,H as f,p as l,B as w,I as p,z as S}from"./factory-DB2JyeD8.js";import{u as A}from"./theme-provider-CVa4tFyh.js";const x=t=>{const{theme:n}=A();return u(t)?t.map(c=>f(c,n,p)).join(", "):f(t,n,p)},B=(t,n)=>{const{theme:c}=A(),e=a.useRef(l(n)?void 0:u(n)?n.map(String):String(n)),r=a.useRef(new Map),[m,d]=a.useState(()=>{for(const[s,o]of Object.entries(t)){if(r.current.has(s))return;u(o)?r.current.set(s,o.map(i=>f(i,c,p)).join(", ")):r.current.set(s,f(o,c,p))}return u(e.current)?e.current.map(s=>r.current.get(s)).join(", "):r.current.get(e.current??"")}),g=a.useCallback(s=>{const o=!l(e.current)&&u(t)?u(e.current)?e.current.map(Number):Number(e.current):e.current,i=w(s,o);e.current=u(i)?i.map(String):String(i),u(e.current)?d(e.current.map(h=>r.current.get(h)).join(", ")):d(r.current.get(e.current??""))},[t]);return[m,g]},I=({isOpen:t,ref:n})=>{const[c,e]=a.useState(t),[r,{on:m}]=b();return a.useEffect(()=>{r||(e(t),m())},[t,r,m]),v(()=>n.current,"animationend",()=>e(t)),{present:!(t?!1:!c),onAnimationComplete(){var o;const g=S(n.current),s=new g.CustomEvent("animationend",{bubbles:!0});(o=n.current)==null||o.dispatchEvent(s)}}};export{B as a,I as b,x as u};
