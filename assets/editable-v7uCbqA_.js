import{j as _}from"./jsx-runtime-Nms4Y4qS.js";import{u as ne}from"./index-B1R8nN76.js";import{u as se}from"./index-CN1syZ-B.js";import{r as s}from"./index-BwDkhjyp.js";import{u as oe,f as L}from"./form-control-VTiS_GWM.js";import{k as ae,B as ie,u as T,c as O,Q as B,j as le,b as re,e as ue,T as Q,a as k,h as d,S as G}from"./factory-DB2JyeD8.js";import{f as K}from"./forward-ref-BmTAT9U5.js";import{a as ce}from"./use-component-style-eZPQMXFE.js";import{o as de}from"./theme-provider-CVa4tFyh.js";const fe=f=>{const{id:r,placeholder:i,defaultValue:b,required:u,disabled:o,readOnly:c,startWithEditView:W,isPreviewFocusable:x=!0,submitOnBlur:v=!0,selectAllOnFocus:y=!0,...t}=oe(f);t.onEdit=le(t.onEdit);const[a,w]=s.useState(!!W&&!o),[l,p]=ne({defaultValue:b||"",value:t.value,onChange:t.onChange}),h=!a&&!o,D=l.length===0,[S,F]=s.useState(l),m=s.useRef(null),H=s.useRef(null),q=s.useRef(null),N=s.useRef(null),z=s.useRef(null);se({ref:m,enabled:a,elements:[N,z]}),re(()=>{var e,n;a&&((e=m.current)==null||e.focus(),y&&((n=m.current)==null||n.select()))},[]),ue(()=>{var e,n,E,j;if(!a){(e=q.current)==null||e.focus();return}(n=m.current)==null||n.focus(),y&&((E=m.current)==null||E.select()),(j=t.onEdit)==null||j.call(t)},[a,t.onEdit,y]),s.useEffect(()=>{if(a)return;const e=m.current;(e==null?void 0:e.ownerDocument.activeElement)===e&&(e==null||e.blur())},[a]);const V=s.useCallback(e=>p(e.currentTarget.value),[p]),P=s.useCallback(()=>F(l),[l]),R=s.useCallback(()=>{h&&w(!0)},[h]),C=s.useCallback(()=>{var e;w(!1),p(S),(e=t.onCancel)==null||e.call(t,S)},[S,t,p]),g=s.useCallback(()=>{var e;w(!1),F(l),(e=t.onSubmit)==null||e.call(t,l)},[t,l]),M=s.useCallback(e=>{if(!(e.key!=="Escape"&&e.key!=="Enter"))if(e.preventDefault(),e.key==="Escape")C();else{const{shiftKey:n,metaKey:E}=e;!n&&!E&&g()}},[C,g]),U=s.useCallback(e=>{e.key==="Escape"&&(e.preventDefault(),C())},[C]),I=s.useCallback(e=>{if(!a)return;const n=e.currentTarget.ownerDocument,E=e.relatedTarget??n.activeElement,j=Q(N.current,E),te=Q(z.current,E);!j&&!te&&(v?g():C())},[a,v,g,C]),J=s.useCallback((e={},n=null)=>({...e,ref:k(n,H),hidden:a,tabIndex:h&&x?0:void 0,children:D?i:l,onFocus:d(e.onFocus,R,P)}),[a,h,x,D,R,P,i,l]),X=s.useCallback((e={},n=null)=>({...G(t,L),...e,ref:k(n,m),id:r,placeholder:i,hidden:!a,value:l,required:u,disabled:o,readOnly:c,onBlur:d(e.onBlur,I),onChange:d(e.onChange,V),onKeyDown:d(e.onKeyDown,M),onFocus:d(e.onFocus,P)}),[o,r,a,I,V,M,P,i,c,u,t,l]),Y=s.useCallback((e={},n=null)=>({...G(t,L),...e,ref:k(n,m),id:r,placeholder:i,hidden:!a,value:l,required:u,disabled:o,readOnly:c,onBlur:d(e.onBlur,I),onChange:d(e.onChange,V),onKeyDown:d(e.onKeyDown,U),onFocus:d(e.onFocus,P)}),[o,r,a,I,V,U,P,i,c,u,t,l]),Z=s.useCallback((e={},n=null)=>({...e,...B(t,["value","onChange","onCancel","onSubmit","onEdit"]),ref:k(n,q),type:"button",disabled:o,readOnly:c,onClick:d(e.onClick,R)}),[o,R,c,t]),$=s.useCallback((e={},n=null)=>({...e,...B(t,["value","onChange","onCancel","onSubmit","onEdit"]),ref:k(z,n),type:"button",disabled:o,readOnly:c,onClick:d(e.onClick,g)}),[o,g,c,t]),ee=s.useCallback((e={},n=null)=>({...e,...B(t,["value","onChange","onCancel","onSubmit","onEdit"]),ref:k(N,n),type:"button",disabled:o,readOnly:c,onClick:d(e.onClick,C)}),[o,C,c,t]);return{isEditing:a,value:l,onEdit:R,onCancel:C,onSubmit:g,getPreviewProps:J,getInputProps:X,getTextareaProps:Y,getEditProps:Z,getSubmitProps:$,getCancelProps:ee}},ye=()=>{const{isEditing:f,getEditProps:r,getCancelProps:i,getSubmitProps:b}=A();return{isEditing:f,getEditProps:r,getCancelProps:i,getSubmitProps:b}},[be,A]=ae({name:"EditableContext",errorMessage:"useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"}),we=K(({focusBorderColor:f,errorBorderColor:r,...i},b)=>{const[u,o]=ce("Editable",{focusBorderColor:f,errorBorderColor:r,...i}),{className:c,children:W,...x}=de(o),{isEditing:v,getPreviewProps:y,getInputProps:t,getTextareaProps:a,getEditProps:w,getCancelProps:l,getSubmitProps:p,onSubmit:h,onCancel:D,onEdit:S}=fe(x),F=ie(W,{isEditing:v,onSubmit:h,onCancel:D,onEdit:S}),m={...u.container};return _.jsx(be,{value:{isEditing:v,getPreviewProps:y,getInputProps:t,getTextareaProps:a,getEditProps:w,getCancelProps:l,getSubmitProps:p,styles:u},children:_.jsx(T.div,{ref:b,className:O("ui-editable",c),...B(x,["placeholder","value","defaultValue","isInvalid","isReadOnly","isRequired","isDisabled","startWithEditView","isPreviewFocusable","submitOnBlur","selectAllOnFocus","onChange","onCancel","onSubmit","onEdit"]),__css:m,children:F})})}),Se=K(({className:f,...r},i)=>{const{styles:b,getPreviewProps:u}=A(),o={cursor:"text",display:"inline-block",fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.preview};return _.jsx(T.span,{className:O("ui-editable__preview",f),...u(r,i),__css:o})}),Re=K(({className:f,...r},i)=>{const{styles:b,getInputProps:u}=A(),o={outline:0,fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.input};return _.jsx(T.input,{className:O("ui-editable__input",f),...u(r,i),__css:o})}),_e=K(({className:f,...r},i)=>{const{styles:b,getTextareaProps:u}=A(),o={outline:0,fontSize:"inherit",fontWeight:"inherit",textAlign:"inherit",bg:"transparent",...b.textarea};return _.jsx(T.textarea,{className:O("ui-editable__textarea",f),...u(r,i),__css:o})});export{we as E,Se as a,Re as b,_e as c,ye as u};
