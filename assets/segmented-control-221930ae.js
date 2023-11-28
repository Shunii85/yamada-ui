import{a as b,j as q}from"./jsx-runtime-b08f8875.js";import{u as ne}from"./index-fb6972ca.js";import{c as ae}from"./index-a49dfc79.js";import{t as oe}from"./index-0a4d4100.js";import{u as le}from"./index-420b16fc.js";import{r as s}from"./index-8ee6c85d.js";import{k as re,R as ie,b as ce,A as $,x as L,s as h,t as N,v as x,p as de,d as y,e as G}from"./factory-7bddb6ec.js";import{f as H}from"./forward-ref-cf7188bd.js";import{a as ue}from"./use-component-style-873f0974.js";import{o as fe}from"./theme-provider-9d5cd644.js";const{DescendantsContextProvider:ge,useDescendants:me,useDescendant:he}=ae(),[be,pe]=re({strict:!1,name:"SegmentedControlContext"}),Ve=H((V,w)=>{const[p,k]=ue("SegmentedControl",V);let{className:R,id:f,name:C,isReadOnly:r,isDisabled:a,children:F,items:_=[],...i}=fe(k);const O=ie();f??(f=s.useId()),C??(C=`segmented-control-${s.useId()}`),i.onChange=ce(i.onChange);const v=me(),[g,m]=s.useState(-1),[S,J]=s.useState(!1),[P,K]=le(),D=s.useRef(null),M=s.useRef(new Map),[c,A]=ne({value:i.value,defaultValue:i.defaultValue,onChange:i.onChange}),j=s.useCallback(()=>{const t={width:0,height:0,x:0,y:0},e=M.current.get(c);if(!e||!D.current||!P.current)return t;const{paddingLeft:o,paddingTop:n}=getComputedStyle(D.current),l=parseFloat(o)||0,d=parseFloat(n)||0;let{width:u,height:B}=e.getBoundingClientRect();return t.x=e.offsetLeft-l,t.y=e.offsetTop-d,t.width=u*(e.offsetWidth/u)||0,t.height=B*(e.offsetWidth/u)||0,t},[P,c]),[z,Q]=s.useState(j),E=s.useCallback(t=>{if(a||r){t.preventDefault();return}A(t.target.value)},[a,r,A]),T=s.useCallback((t,e)=>{if(!a)if(e){const o=v.enabledNextValue(t);o&&m(o.index)}else m(t)},[v,a]),W=s.useCallback(()=>m(-1),[]),U=s.useCallback((t={},e=null)=>({...$(i,["value","defaultValue","onChange"]),...t,ref:L(D,P,e),id:f,"aria-disabled":h(a),"aria-readonly":h(r),onBlur:N(t.onBlur,W)}),[f,a,r,P,W,i]),Z=s.useCallback((t={},e=null)=>{const{width:o,height:n,x:l,y:d}=z;return{...t,ref:e,style:{position:"absolute",zIndex:1,width:o,height:n,transform:`translate(${l}px, ${d}px)`}}},[z]),ee=s.useCallback(({index:t,...e}={},o=null)=>{const n=e.disabled??e.isDisabled??a,l=e.readOnly??e.isReadOnly??r,d=e.value===c;return{...$(e,["isDisabled","isReadOnly"]),ref:o,id:`${f}-${t}`,type:"radio",name:C,disabled:n||l,readOnly:l,checked:d,"aria-disabled":h(n),"aria-readonly":h(l),"data-checked":x(d),"data-focus":x(t===g),style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:N(e.onChange,u=>!n&&!l?E(u):{})}},[a,r,c,f,C,g,E]),te=s.useCallback(({index:t,...e}={},o=null)=>{const n=e.disabled??e.isDisabled??a,l=e.readOnly??e.isReadOnly??r,d=e.value===c,u=t===g;return{props:e,ref:L(B=>M.current.set(e.value,B),o),"aria-disabled":h(n),"aria-readonly":h(l),"data-checked":x(d),"data-focus":x(u),"data-focus-visible":x(u&&S),onFocus:N(e.onFocus,()=>T(t,n||l)),...n||l?{_hover:{},_active:{},_focus:{},_invalid:{},_focusVisible:{}}:{},style:{position:"relative",zIndex:2}}},[g,a,S,r,T,c]);s.useEffect(()=>oe(J),[]),s.useEffect(()=>{Q(j())},[g,K,c,j]);const se={position:"relative",display:"inline-flex",alignItems:"center",...p.container},X=de(F);let I=[];if(!X.length&&_.length?I=_.map(({label:t,value:e,...o},n)=>b(Y,{value:e,...o,children:t},n)):I=X,c==null&&i.defaultValue==null)for(const t of I){if(t.type!==Y)continue;const e=t.props.value;A(e);break}return b(ge,{value:v,children:b(be,{value:{getInputProps:ee,getLabelProps:te,styles:p},children:q(y.div,{...U({},w),className:G("ui-segmented-control",R),__css:se,children:[O.current?b(y.span,{className:"ui-segmented-control__active",...Z(),__css:p.active}):null,I]})})})}),Y=H(({className:V,disabled:w,readOnly:p,isDisabled:k,isReadOnly:R,value:f,onChange:C,children:r,...a},F)=>{const{getInputProps:_,getLabelProps:i,styles:O}=pe(),{index:v,register:g}=he({disabled:k||R}),m={index:v,value:f,onChange:C,disabled:w,readOnly:p,isDisabled:k,isReadOnly:R},S={cursor:"pointer",flex:"1 1 0%",display:"inline-flex",justifyContent:"center",alignItems:"center",...O.button};return q(y.label,{...i($(m,["onChange"])),className:G("ui-segmented-control__button",V),__css:S,...a,children:[b(y.input,{..._(m,L(g,F))}),b(y.span,{children:r})]})});export{Ve as S,Y as a};
//# sourceMappingURL=segmented-control-221930ae.js.map