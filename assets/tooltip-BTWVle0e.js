import{j as n}from"./jsx-runtime-X2b_N9AH.js";import{u as le}from"./index-BDungtGN.js";import{u as p}from"./index-eirgXVfp.js";import{u as ae}from"./index-39UQ4XYx.js";import{u as ue}from"./index-C5-qRgl_.js";import{r as t}from"./index-uCp2LrAq.js";import{A as me}from"./index-DSHhgXSs.js";import{P as fe}from"./container-portal-DUjfKwAM.js";import{m as pe}from"./motion-BNFRb361.js";import{s as d}from"./slide-fade-Fj4MfLsk.js";import{s as de}from"./scale-fade-DfTmt9WP.js";import{f as ve}from"./forward-ref-Dr5Hqd9a.js";import{u as xe}from"./use-component-style-CKVmhMoE.js";import{o as he}from"./theme-provider-CElU3JB-.js";import{z as j,A as R,a as Pe,h as m,u as I,c as ge}from"./factory-DvGXL-YE.js";const Ce=(l="scale",v)=>{const i={reverse:!0,duration:v,enter:{visibility:"visible"},transitionEnd:{exit:{visibility:"hidden"}}};switch(l){case"scale":return{...de,custom:{...i,scale:.95}};case"top":return{...d,custom:{...i,offsetY:-16}};case"right":return{...d,custom:{...i,offsetX:16}};case"left":return{...d,custom:{...i,offsetX:-16}};case"bottom":return{...d,custom:{...i,offsetY:16}}}},We=ve(({closeOnPointerDown:l,z:v,zIndex:i,portalProps:z,withPortal:F=!0,...A},N)=>{let[{z:W,zIndex:B,...S},X]=xe("Tooltip",A);const{className:Y,children:h,label:P,placement:_,modifiers:K,gutter:L,offset:M,openDelay:g=0,closeDelay:C=0,isDisabled:O,closeOnClick:b,closeOnScroll:Z,closeOnMouseDown:q,closeOnEsc:G=!0,animation:T,duration:H,isOpen:J,defaultIsOpen:Q,onOpen:U,onClose:V,...$}=he(X);l=q;const{isOpen:o,onOpen:k,onClose:y}=le({isOpen:J,defaultIsOpen:Q,onOpen:U,onClose:V}),s=t.useRef(null),c=t.useRef(),a=t.useRef(),{referenceRef:w,getPopperProps:ee,transformOrigin:oe}=ue({enabled:o,placement:_,modifiers:K,gutter:L,offset:M}),u=t.useCallback(()=>{a.current&&(clearTimeout(a.current),a.current=void 0),y()},[y]),f=t.useCallback(()=>{if(!O&&!c.current){o&&u();const e=j(s.current);c.current=e.setTimeout(k,g)}},[O,o,g,u,k]),r=t.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=void 0);const e=j(s.current);a.current=e.setTimeout(u,C)},[C,u]),D=t.useCallback(()=>o&&b?r():void 0,[o,b,r]),E=t.useCallback(()=>o&&l?r():void 0,[o,l,r]),te=t.useCallback(e=>o&&e.key==="Escape"?r():void 0,[o,r]);p(()=>R(s.current),"keydown",e=>G?te(e):void 0),p(()=>R(s.current),"scroll",()=>o&&Z?u():void 0),p(()=>s.current,"pointerleave",e=>{e.pointerType!=="touch"&&r()}),p(()=>s.current,"touchstart",()=>{o?r():f()},{passive:!0}),ae({ref:s,handler:()=>{r()}}),t.useEffect(()=>()=>{clearTimeout(c.current),clearTimeout(a.current)},[]);const re=t.useCallback((e={},ce=null)=>({...e,ref:Pe(s,ce,w),onPointerEnter:m(e.onPointerEnter,f),onClick:m(e.onClick,D),onPointerDown:m(e.onPointerDown,E),onFocus:m(e.onFocus,f),onBlur:m(e.onBlur,r)}),[w,D,E,f,r]),x=t.Children.only(h),se=t.cloneElement(x,re(x.props,x.ref)),ne={position:"relative",...S};if(!P)return n.jsx(n.Fragment,{children:h});const ie=i??v??B??W;return n.jsxs(n.Fragment,{children:[se,n.jsx(me,{children:o?n.jsx(fe,{isDisabled:!F,...z,children:n.jsx(I.div,{...ee(),zIndex:ie,pointerEvents:"none",children:n.jsx(I.div,{as:pe.div,ref:N,className:ge("ui-tooltip",Y),style:{transformOrigin:oe},...T!=="none"?Ce(T,H):{},initial:"exit",animate:o?"enter":"exit",exit:"exit",__css:ne,...$,children:P})})}):null})]})});export{We as T};
