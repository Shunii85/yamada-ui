import{j as e,a as v}from"./jsx-runtime-5BUNAZ9W.js";import{O as S,a as J,u as K,S as Q,b as U,c as W,d as X,e as Y}from"./option-VijlhObA.js";import{P as Z,a as $}from"./popover-content-_0GV_Krb.js";import{P as ee}from"./container-portal-0Gk-FyfS.js";import{f as I}from"./forward-ref-A-8Arhkk.js";import{u as se}from"./use-component-style-d9n8R3cE.js";import{o as re}from"./theme-provider-bBWP4weD.js";import{v as le,u as i,a as N}from"./factory-d4qha7R6.js";const he=I((a,c)=>{const[l,p]=se("Select",a);let{className:d,placeholder:s,defaultValue:m="",placeholderInOptions:r=!0,items:t=[],color:h,h:o,height:O,minH:_,minHeight:j,containerProps:H,listProps:T,iconProps:w,portalProps:D={isDisabled:!0},children:C,...F}=re(p);const b=le(C);let u=[];!b.length&&t.length&&(u=t.map((n,y)=>{if("value"in n){const{label:f,value:P,...g}=n;return e(S,{value:P,...g,children:f},y)}else if("items"in n){const{label:f,items:P=[],...g}=n;return e(J,{label:f??"",...g,children:P.map(({label:k,value:q,...z},A)=>e(S,{value:q,...z,children:k},A))},y)}}).filter(Boolean));const x=!b.length&&!u.length&&!(s&&r),{descendants:L,formControlProps:M,getPopoverProps:V,getContainerProps:B,getFieldProps:E,...G}=K({...F,placeholder:s,placeholderInOptions:r,defaultValue:m,isEmpty:x});o??(o=O),_??(_=j);const R={w:"100%",h:"fit-content",color:h,...l.container};return e(Q,{value:L,children:e(U,{value:{...G,placeholder:s,placeholderInOptions:r,styles:l},children:e(Z,{...V(),children:v(i.div,{className:N("ui-select",d),__css:R,...B(H),children:[v(i.div,{className:"ui-select__inner",__css:{position:"relative",...l.inner},children:[e($,{children:e(te,{h:o,minH:_,...E({},c)})}),e(W,{...w,...M})]}),x?null:e(ee,{...D,children:v(X,{...T,children:[s&&r?e(S,{children:s}):null,C??u]})})]})})})})}),te=I(({className:a,isTruncated:c=!0,lineClamp:l,h:p,minH:d,...s},m)=>{const{label:r,placeholder:t,styles:h}=Y(),o={pe:"2rem",h:p,minH:d,display:"flex",alignItems:"center",...h.field};return e(i.div,{ref:m,className:N("ui-select__field",a),__css:o,...s,children:e(i.span,{isTruncated:c,lineClamp:l,dangerouslySetInnerHTML:{__html:r??t??""}})})});export{he as S};