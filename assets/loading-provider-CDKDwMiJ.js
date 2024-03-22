import{j as s}from"./jsx-runtime-CKrituN3.js";import{u as F}from"./index-CKo3gv6y.js";import{r}from"./index-CBqU2yxZ.js";import{R as T}from"./Combination-DlzjZhkT.js";import{L as _}from"./loading-BxQYss10.js";import{M}from"./motion-C1gM6QUe.js";import{m as U}from"./motion-JgkBPv6g.js";import{u as N,b as d,d as q,i as G,e as H}from"./factory-D1MzC1Q2.js";import{A as J}from"./index-_tcQm2Fk.js";import{P as K}from"./container-portal-CAcQI922.js";const I=r.createContext({}),g=()=>({isLoading:r.createRef(),start:r.createRef(),finish:r.createRef(),update:r.createRef(),force:r.createRef()}),j=e=>({isLoading:()=>{var t,n;return((n=(t=e.current.isLoading).current)==null?void 0:n.call(t))??!1},start:t=>{var n,o;return(o=(n=e.current.start).current)==null?void 0:o.call(n,t)},finish:()=>{var t,n;return(n=(t=e.current.finish).current)==null?void 0:n.call(t)},update:t=>{var n,o;return(o=(n=e.current.update).current)==null?void 0:o.call(n,t)},force:t=>{var n,o;return(o=(n=e.current.force).current)==null?void 0:o.call(n,t)}}),Q=e=>e+1,X=e=>e===0?e:e-1,ce=({screen:e,page:t,background:n,custom:o,children:l})=>{const i=r.useRef(g()),a=r.useRef(g()),p=r.useRef(g()),f=r.useRef(g()),h=j(i),u=j(a),R=j(p),L=j(f),v={screen:h,page:u,background:R,custom:L};return s.jsxs(I.Provider,{value:v,children:[l,s.jsx(C,{controlRefs:i,...e,component:(e==null?void 0:e.component)??(c=>s.jsx(O,{...c}))}),s.jsx(C,{controlRefs:a,...t,component:(t==null?void 0:t.component)??(c=>s.jsx(E,{...c}))}),s.jsx(C,{controlRefs:p,...n,blockScrollOnMount:(n==null?void 0:n.blockScrollOnMount)??!1,component:(n==null?void 0:n.component)??(c=>s.jsx(W,{...c}))}),s.jsx(C,{controlRefs:f,blockScrollOnMount:(n==null?void 0:n.blockScrollOnMount)??!1,...o,component:o==null?void 0:o.component})]})},C=({controlRefs:e,appendToParentPortal:t,containerRef:n,allowPinchZoom:o=!1,blockScrollOnMount:l=!0,initialState:i,duration:a=null,icon:p,text:f,component:h})=>{const u=r.useRef(!1),[{loadingCount:R,message:L,duration:v},c]=r.useState({loadingCount:i?1:0,message:void 0,duration:a}),{isLoading:A,start:B,finish:z,update:D,force:P}=r.useMemo(()=>({isLoading:()=>u.current,start:({message:m,duration:x=a}={})=>{u.current=!0,c(({loadingCount:y})=>({loadingCount:Q(y),message:m,duration:x}))},update:m=>c(x=>({...x,...m})),finish:()=>{u.current=!1,c(({loadingCount:m})=>({loadingCount:X(m),message:void 0,duration:a}))},force:({loadingCount:m=0,message:x,duration:y=a})=>{u.current=!!m,c({loadingCount:m,message:x,duration:y})}}),[a]);d(e.current.isLoading,A),d(e.current.start,B),d(e.current.finish,z),d(e.current.update,D),d(e.current.force,P);const V={initialState:i,icon:p,text:f,message:L,duration:v,onFinish:z};return q(()=>{(i||G(a))&&c({loadingCount:i?1:0,message:void 0,duration:a})},[i,a]),s.jsx(J,{initial:!1,children:R?s.jsx(K,{appendToParentPortal:t,containerRef:n,children:s.jsx(T,{allowPinchZoom:o,enabled:l,forwardProps:!0,children:s.jsx(r.Fragment,{children:s.jsx(Y,{component:h,...V})})})}):null})},Y=({component:e,...t})=>typeof e=="function"?e(t):s.jsx(s.Fragment,{}),S=({message:e,...t})=>e?H(e)?e:s.jsx(N.p,{...t,children:e}):null,Z=(e="fade")=>({initial:{opacity:0,scale:e==="scaleFade"?.95:void 0},animate:{opacity:1,scale:e==="scaleFade"?1:void 0,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:e==="scaleFade"?.95:void 0,transition:{duration:.4,ease:[.4,0,1,1]}}}),w=(e="fill")=>({position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999,bg:e==="fill"?["#fbfbfb","#141414"]:"rgba(0, 0, 0, 0.48)",w:"100vw",h:"100dvh",p:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}),b=(e,t="fade")=>({initial:e?!1:"initial",animate:"animate",exit:"exit",variants:Z(t)}),O=r.memo(({initialState:e,icon:t,text:n,message:o,duration:l,onFinish:i})=>{const a={maxW:"24rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.5rem"};return F(i,l),s.jsx(M,{className:"ui-loading-screen",...b(e),__css:w(),children:s.jsxs(N.div,{__css:a,children:[s.jsx(_,{size:"6xl",...t}),s.jsx(S,{message:o,lineClamp:3,...n})]})})});O.displayName="ScreenComponent";const E=r.memo(({initialState:e,icon:t,text:n,message:o,duration:l,onFinish:i})=>{const a={bg:["#fbfbfb","#141414"],maxW:"24rem",p:"1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0.5rem",rounded:"0.375rem",boxShadow:["0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)"]};return F(i,l),s.jsx(M,{className:"ui-loading-page",...b(e),__css:w("transparent"),children:s.jsxs(N.div,{as:U.div,className:"ui-loading-page__inner",...b(e,"scaleFade"),__css:a,children:[s.jsx(_,{size:"6xl",...t}),s.jsx(S,{message:o,lineClamp:3,...n})]})})});E.displayName="PageComponent";const W=r.memo(({initialState:e,icon:t,text:n,message:o,duration:l,onFinish:i})=>{const a={position:"fixed",right:"1rem",bottom:"1rem",zIndex:9999,bg:["#fbfbfb","#141414"],maxW:"20rem",p:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",rounded:"0.375rem",boxShadow:["0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25)","0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)"]};return F(i,l),s.jsxs(M,{className:"ui-loading-background",...b(e,"scaleFade"),__css:a,children:[s.jsx(_,{size:"xl",...t}),s.jsx(S,{message:o,fontSize:"sm",lineClamp:1,...n})]})});W.displayName="BackgroundComponent";const le=()=>{const{screen:e,page:t,background:n,custom:o}=r.useContext(I);return{screen:e,page:t,background:n,custom:o}};export{ce as L,le as u};