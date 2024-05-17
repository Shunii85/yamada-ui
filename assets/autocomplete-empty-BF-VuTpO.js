import{j as x}from"./jsx-runtime-X2b_N9AH.js";import{p as Ct,b as bt}from"./popover-content-D0i23Fqm.js";import{f as ee}from"./forward-ref-Dr5Hqd9a.js";import{l as gt,S as ht,_ as tt,$ as st,Q as vt,s as W,q as Qe,t as nt,a9 as yt,T as kt,f as Ce,R as It,a as De,h as K,d as le,y as Ye,af as At,ab as Pe,u as H,c as Q,j as _t,B as Xe}from"./factory-DvGXL-YE.js";import{u as jt}from"./index-DfTP5aZU.js";import{r as n}from"./index-uCp2LrAq.js";import{u as Et}from"./index-kpYE7fkF.js";import{c as Pt}from"./index-COFWkQGM.js";import{u as Dt}from"./index-BDungtGN.js";import{u as Ot}from"./index-39UQ4XYx.js";import{u as St,f as wt}from"./form-control-BS-ucNQf.js";import{c as Rt,a as Ft}from"./icon-BzEDtuLR.js";const Ze={ｶﾞ:"ガ",ｷﾞ:"ギ",ｸﾞ:"グ",ｹﾞ:"ゲ",ｺﾞ:"ゴ",ｻﾞ:"ザ",ｼﾞ:"ジ",ｽﾞ:"ズ",ｾﾞ:"ゼ",ｿﾞ:"ゾ",ﾀﾞ:"ダ",ﾁﾞ:"ヂ",ﾂﾞ:"ヅ",ﾃﾞ:"デ",ﾄﾞ:"ド",ﾊﾞ:"バ",ﾋﾞ:"ビ",ﾌﾞ:"ブ",ﾍﾞ:"ベ",ﾎﾞ:"ボ",ﾊﾟ:"パ",ﾋﾟ:"ピ",ﾌﾟ:"プ",ﾍﾟ:"ペ",ﾎﾟ:"ポ",ｳﾞ:"ヴ",ﾜﾞ:"ヷ",ｦﾞ:"ヺ",ｱ:"ア",ｲ:"イ",ｳ:"ウ",ｴ:"エ",ｵ:"オ",ｶ:"カ",ｷ:"キ",ｸ:"ク",ｹ:"ケ",ｺ:"コ",ｻ:"サ",ｼ:"シ",ｽ:"ス",ｾ:"セ",ｿ:"ソ",ﾀ:"タ",ﾁ:"チ",ﾂ:"ツ",ﾃ:"テ",ﾄ:"ト",ﾅ:"ナ",ﾆ:"ニ",ﾇ:"ヌ",ﾈ:"ネ",ﾉ:"ノ",ﾊ:"ハ",ﾋ:"ヒ",ﾌ:"フ",ﾍ:"ヘ",ﾎ:"ホ",ﾏ:"マ",ﾐ:"ミ",ﾑ:"ム",ﾒ:"メ",ﾓ:"モ",ﾔ:"ヤ",ﾕ:"ユ",ﾖ:"ヨ",ﾗ:"ラ",ﾘ:"リ",ﾙ:"ル",ﾚ:"レ",ﾛ:"ロ",ﾜ:"ワ",ｦ:"ヲ",ﾝ:"ン",ｧ:"ァ",ｨ:"ィ",ｩ:"ゥ",ｪ:"ェ",ｫ:"ォ",ｯ:"ッ",ｬ:"ャ",ｭ:"ュ",ｮ:"ョ","｡":"。","､":"、",ｰ:"ー","｢":"「","｣":"」","･":"・"},Tt=o=>{o=o.replace(/[！-～]/g,l=>String.fromCharCode(l.charCodeAt(0)-65248));const t=new RegExp("("+Object.keys(Ze).join("|")+")","g");return o=o.replace(t,l=>Ze[l]).replace(/ﾞ/g,"゛").replace(/ﾟ/g,"゜"),o=o.toUpperCase(),o},Nt=o=>{const t=l=>l.map(a=>{const{isDisabled:d,isFocusable:u}=a;if(!(d&&!u))return"items"in a?t(a.items??[]):a}).filter(Boolean);return t(o).flat(1/0)},Mt=o=>{var t;return At(o)&&!!((t=o==null?void 0:o.getAttribute("role"))!=null&&t.startsWith("autocomplete-item"))},{DescendantsContextProvider:rs,useDescendantsContext:ot,useDescendants:Lt,useDescendant:Ht}=Pt(),[us,R]=gt({name:"AutocompleteContext",errorMessage:`useAutocompleteContext returned is 'undefined'. Seems you forgot to wrap the components in "<Autocomplete />" or "<MultiAutocomplete />"`}),ds=({value:o,defaultValue:t,onChange:l,onCreate:a,onSearch:d,closeOnSelect:u=!0,omitSelectedValues:i=!1,maxSelectValues:m,closeOnBlur:v=!0,closeOnEsc:y=!0,allowCreate:f=!1,allowFree:C=!1,insertPositionItem:j="first",emptyMessage:E="No results found",format:k=Tt,placement:P="bottom-start",duration:F=.2,optionProps:T,placeholder:J,items:Oe,children:ie,isOpen:Y,defaultIsOpen:be,onOpen:Se,onClose:Ve,...D})=>{D=St(D);const{id:ge}=D,{"aria-readonly":lt,..._}=ht(D,wt),[ce,ae]=tt(vt(D,[...Ct,"onKeyDown","onFocus"]),st),b=Lt(),re=n.useRef(null),ue=n.useRef(null),O=n.useRef(null),U=n.useRef(new Set([])),de=n.useRef(!1),he=n.useRef(void 0),[te,it]=n.useState(Oe),[I,ve]=Et({value:o,defaultValue:t,onChange:l}),[we,ye]=n.useState(void 0),[S,se]=n.useState(""),[$,A]=n.useState(-1),[X,Be]=n.useState(!1),[ne,Ke]=n.useState(!0),{isOpen:g,onOpen:Ue,onClose:M}=Dt({isOpen:Y,defaultIsOpen:be,onOpen:Se,onClose:Ve}),pe=$>-1,Re=$===-2&&f,h=W(I),ke=h?!I.length:!I,[fe,$e]=n.useMemo(()=>W(j)?j:[j,"first"],[j]);f&&!Qe(ie)&&console.warn(`${h?"MultiAutocomplete":"Autocomplete"}: ${h?"MultiAutocomplete":"Autocomplete"} internally prefers 'children'. If 'allowCreate' is true, it will not be reflected correctly. If want to reflect, please set 'items' in props.`);const z=b.enabledValues(({node:e})=>h&&I.includes(e.dataset.value??"")).map(({index:e})=>e),V=b.enabledValues(({node:e,index:s})=>"target"in e.dataset&&!z.includes(s)),ct=nt(ie),Ie=te==null?void 0:te.map((e,s)=>{if("value"in e){const{label:r,value:c,...p}=e;return x.jsx(et,{value:c,...p,children:r},s)}else if("items"in e){const{label:r,items:c=[],...p}=e;return x.jsx(Gt,{label:r,...p,children:c.map(({label:B,value:N,...Le},xt)=>x.jsx(et,{value:N,...Le,children:B},xt))},s)}}),Z=!ct.length&&!(Ie!=null&&Ie.length),w=n.useCallback(()=>{_.disabled||_.readOnly||!f&&(Z||X)||(Ue(),O.current&&O.current.focus())},[f,_,X,Z,Ue]),oe=n.useCallback(()=>{const e=setTimeout(()=>{if(Z||X)return;const s=b.enabledFirstValue(({node:r})=>"target"in r.dataset);if(s)if(!h||!i)A(s.index);else if(z.includes(s.index)){const r=V[0];A(r.index)}else A(s.index)});U.current.add(e)},[b,V,X,Z,h,i,z]),Ae=n.useCallback(()=>{const e=setTimeout(()=>{if(Z||X)return;const s=b.enabledLastValue(({node:r})=>"target"in r.dataset);if(s)if(!h||!i)A(s.index);else if(z.includes(s.index)){const r=V.reverse()[0];A(r.index)}else A(s.index)});U.current.add(e)},[b,V,X,Z,h,i,z]),Fe=n.useCallback(()=>{const e=setTimeout(()=>{const r=b.enabledValues().find(({node:c})=>h?I.includes(c.dataset.value??""):c.dataset.value===I);r&&A(r.index)});U.current.add(e)},[b,h,I]),me=n.useCallback((e=$)=>{const s=setTimeout(()=>{const r=b.enabledNextValue(e,({node:c})=>"target"in c.dataset);if(r)if(!h||!i)A(r.index);else if(z.includes(r.index)){const c=V.find(({index:p})=>r.index<p)??V[0];A(c.index)}else A(r.index)});U.current.add(s)},[b,V,$,h,i,z]),Te=n.useCallback((e=$)=>{const s=setTimeout(()=>{const r=b.enabledPrevValue(e,({node:c})=>"target"in c.dataset);if(r)if(!h||!i)A(r.index);else if(z.includes(r.index)){const c=V.reverse().find(({index:p})=>p<r.index)??V[0];A(c.index)}else A(r.index)});U.current.add(s)},[b,V,$,h,i,z]),q=ke||i?oe:Fe,ze=ke||i?Ae:Fe,Ne=n.useCallback(e=>{const s=b.values();let r=!1,c=!1;s.forEach(({node:p,index:B})=>{if(k(p.textContent??"").includes(e)){r=!0;const N="disabled"in p.dataset;p.dataset.target="",!c&&!N&&(c=!0,A(B))}else delete p.dataset.target}),Ke(r)},[b,k]),G=n.useCallback((e=!0)=>{b.values().forEach(({node:r})=>{r.dataset.target=""}),e&&oe(),Ke(!0)},[b,oe]),_e=n.useCallback(e=>{const s=b.enabledValues();return(W(e)?e:[e]).map(p=>{const{node:B}=s.find(({node:N})=>N.dataset.value===p)??{};if(B){const N=Array.from(B.children).find(Le=>Le.getAttribute("data-label")!==null);return(N==null?void 0:N.textContent)??void 0}else return C?p:void 0}).filter(Boolean)},[C,b]),xe=n.useCallback((e,s=!0)=>{const r=_e(e);ye(c=>h?(r.forEach(p=>{W(c)&&c.includes(p??"")?s&&(c=W(c)?c.filter(N=>N!==p):void 0):c=[...W(c)?c:[],p]}),c):r[0])},[_e,h]),L=n.useCallback((e,s=!0)=>{ve(c=>{let p;return W(c)?c.includes(e)?p=c.filter(N=>N!==e):p=[...c,e]:p=e,he.current=p,p});const r=b.values().filter(({node:c})=>k(c.textContent??"").includes(e)).length>0;xe(e),(C||r)&&se(""),h&&s&&G(!1)},[C,h,xe,G,ve,b,k]),Me=n.useCallback(()=>{let e=b.value($);if("disabled"in((e==null?void 0:e.node.dataset)??{})&&(e=void 0),!e)return;const s=e.node.dataset.value??"";L(s),u&&M(),i&&me()},[u,b,$,i,L,M,me]),at=n.useCallback(e=>{g||w(),d==null||d(e);const s=e.target.value,r=k(s);r?Ne(r):G(),se(s)},[g,w,k,d,Ne,G]),rt=n.useCallback(()=>{de.current=!0},[]),ut=n.useCallback(()=>{de.current=!1},[]),je=n.useCallback(()=>{if(!ue.current)return;const e={label:S,value:S};let s=[];if(te&&(s=te),fe==="first")s=[e,...s];else if(fe==="last")s=[...s,e];else{const c=s.findIndex(({label:B})=>B===fe),p=s[c];c!==-1&&"items"in p?($e==="first"?p.items=[e,...p.items??[]]:p.items=[...p.items??[],e],s[c]=p):console.warn(`${h?"MultiAutocomplete":"Autocomplete"}: '${fe}' specified in insertPositionItem does not exist in the option group.`)}it(s),L(S),G(!1);const r=Nt(s).findIndex(({value:c})=>c===S);A(r),a==null||a(e,s)},[S,te,fe,L,G,a,$e,h]),Ge=n.useCallback(()=>{g?O.current&&O.current.focus():(w(),q())},[g,q,w]),Ee=n.useCallback(()=>{g||(w(),q())},[g,q,w]),We=n.useCallback(e=>{const s=yt(e);kt(re.current,s)||!v&&ne||(C&&S&&L(S,!1),se(""),g&&M())},[v,ne,g,S,C,M,L]),Je=n.useCallback(()=>{L(h?I[I.length-1]:""),g||Ee()},[h,g,L,Ee,I]),dt=n.useCallback(e=>{e.stopPropagation(),he.current=[],ve([]),ye(void 0),se(""),G(),g&&O.current&&O.current.focus()},[g,ye,se,ve,G]),qe=n.useCallback(e=>{if(e.key===" "&&(e.key=e.code),_.disabled||_.readOnly||de.current)return;const s=we===S||!S.length,c={ArrowDown:pe?()=>me():g?void 0:Pe(w,q),ArrowUp:pe?()=>Te():g?void 0:Pe(w,ze),Space:Re?je:pe?Me:g?void 0:Pe(w,q),Enter:Re?je:pe?Me:g?C&&h?()=>{S&&L(S),A(0)}:void 0:Pe(w,q),Home:g?oe:void 0,End:g?Ae:void 0,Escape:y?M:void 0,Backspace:!ke&&s?Je:void 0}[e.key];c&&(e.preventDefault(),e.stopPropagation(),c(e))},[C,_,we,S,w,pe,h,q,me,ze,Te,Re,je,Me,g,oe,Ae,y,M,ke,Je,L]);n.useEffect(()=>{if(!h||!i&&Qe(m))return;const e=I.length>0&&I.length===b.count(),s=I.length===m;e||s?(M(),Be(!0)):Be(!1)},[i,I,b,h,M,m]),n.useEffect(()=>{if(h){if(JSON.stringify(he.current??[])===JSON.stringify(I??[]))return;const e=_e(I);ye(e)}else{if(he.current===I)return;xe(I,!1)}},[h,I,xe,_e]),Ce(()=>{g||C||(A(-1),se(""))},[g]),Ce(()=>{ne||A(-2)},[ne]),It(()=>{U.current.forEach(e=>clearTimeout(e)),U.current.clear()}),Ot({ref:re,handler:M,enabled:g&&(v||!ne)});const pt=n.useCallback(e=>({matchWidth:!0,...D,...e,isOpen:g,onOpen:w,onClose:M,placement:P,duration:F,trigger:"never",closeOnButton:!1,closeOnBlur:v}),[F,v,g,M,w,P,D]),ft=n.useCallback((e={},s=null)=>({ref:De(re,s),...ce,...e,..._,onClick:K(e.onClick,D.onClick,Ge),onBlur:K(e.onBlur,D.onBlur,We)}),[ce,_,We,Ge,D]),mt=n.useCallback((e={},s=null)=>({ref:s,tabIndex:-1,...e,..._,placeholder:J,"data-active":le(g),"aria-expanded":le(g),onFocus:K(e.onFocus,D.onFocus,Ee),onKeyDown:K(e.onKeyDown,D.onKeyDown,qe)}),[_,J,g,D,Ee,qe]);return{id:ge,descendants:b,value:I,label:we,inputValue:S,isHit:ne,isEmpty:Z,computedChildren:Ie,focusedIndex:$,omitSelectedValues:i,closeOnSelect:u,allowCreate:f,allowFree:C,emptyMessage:E,isOpen:g,isAllSelected:X,listRef:ue,inputRef:O,optionProps:T,formControlProps:_,setFocusedIndex:A,onChangeLabel:xe,onChange:L,onSearch:at,onCreate:je,onClear:dt,onCompositionStart:rt,onCompositionEnd:ut,pickOptions:Ne,rebirthOptions:G,onOpen:w,onClose:M,onFocusFirst:oe,onFocusLast:Ae,onFocusSelected:Fe,onFocusNext:me,onFocusPrev:Te,getPopoverProps:pt,getContainerProps:ft,getFieldProps:mt,inputProps:ae}},ps=()=>{const{id:o,inputRef:t,onSearch:l,onCompositionStart:a,onCompositionEnd:d,isAllSelected:u,formControlProps:i,inputProps:m,isOpen:v}=R();return Ce(()=>{u&&t.current&&t.current.blur()},[u]),{getInputProps:n.useCallback((f={},C=null)=>({ref:De(t,C),...i,role:"combobox","aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":v,autoCapitalize:"none",autoComplete:"off",spellCheck:"false",...m,...f,id:o,cursor:i.readOnly?"default":"text",pointerEvents:i.disabled||u?"none":"auto",tabIndex:u?-1:0,onChange:K(f.onChange,l),onCompositionStart:K(f.onCompositionStart,m.onCompositionStart,a),onCompositionEnd:K(f.onCompositionEnd,m.onCompositionEnd,d)}),[v,m,t,i,o,u,l,a,d])}},Vt=()=>{const{focusedIndex:o,isOpen:t,listRef:l,rebirthOptions:a}=R(),d=ot(),u=n.useRef(-1),i=d.value(o),m=n.useCallback(()=>{t||a(!1)},[t,a]);return n.useEffect(()=>{if(!l.current||!i||u.current===i.index)return;const y=l.current,f=i.node,C=y.clientHeight,j=y.scrollTop,E=j+C,k=f.clientHeight,P=f.offsetTop,F=P+k,T=j<=P&&F<=E,J=u.current<i.index;T||(F<=C?l.current.scrollTo({top:0}):J?l.current.scrollTo({top:F-C}):l.current.scrollTo({top:P+1})),u.current=i.index},[l,i]),Ce(()=>{t||(u.current=-1)},[t]),{getListProps:n.useCallback((y={},f=null)=>({as:"ul",ref:De(l,f),role:"select",tabIndex:-1,...y,onAnimationComplete:K(y.onAnimationComplete,m)}),[l,m])}},Bt=({label:o,...t})=>{const{value:l,omitSelectedValues:a}=R(),d=W(l),u=ot(),i=u.values(),v=(d&&a?u.values(({node:k})=>l.includes(k.dataset.value??"")):[]).map(({index:k})=>k),f=!i.filter(({node:k,index:P})=>{var F;return((F=k.parentElement)==null?void 0:F.dataset.label)===o&&!v.includes(P)&&"target"in k.dataset}).length,C=tt(t,st),j=n.useCallback((k={},P=null)=>{const F={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:P,...k,...C[0],style:f?F:void 0,"data-label":o,role:"autocomplete-group-container"}},[C,f,o]),E=n.useCallback((k={},P=null)=>({ref:P,...k,...C[1],"data-label":o,role:"autocomplete-group"}),[C,o]);return{label:o,getContainerProps:j,getGroupProps:E}},Kt=o=>{var ue;const{value:t,omitSelectedValues:l,onChange:a,onChangeLabel:d,focusedIndex:u,setFocusedIndex:i,onClose:m,closeOnSelect:v,optionProps:y,inputRef:f,onFocusNext:C}=R();let{icon:j,isDisabled:E,isFocusable:k,closeOnSelect:P,children:F,value:T,...J}={...y,...o};const Oe=!!E&&!k,ie=n.useRef(null),{index:Y,register:be,descendants:Se}=Ht({disabled:Oe}),D=Se.values().slice(0,Y),ge=W(t),_=!(ge?!1:D.some(({node:O})=>O.dataset.value===(T??"")))&&(ge?t.includes(T??""):(T??"")===t),ce="target"in(((ue=ie.current)==null?void 0:ue.dataset)??{}),ae=Y===u,b=n.useCallback(O=>{if(O.stopPropagation(),E){f.current&&f.current.focus();return}if(!Mt(O.currentTarget)){f.current&&f.current.focus();return}i(Y),a(T??""),f.current&&f.current.focus(),(P??v)&&m(),l&&C(Y)},[C,l,E,T,i,Y,a,P,v,m,f]);Ce(()=>{_&&d(T??"",!1)},[T]);const re=n.useCallback((O={},U=null)=>{const de={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};return{ref:De(ie,U,be),...J,...O,role:"autocomplete-item",tabIndex:-1,style:!ce||l&&_?de:void 0,"data-target":le(!0),"data-value":T??"","data-focus":le(ae),"data-disabled":le(E),"aria-checked":Ye(_),"aria-disabled":Ye(E),onClick:K(J.onClick,O.onClick,b)}},[T,J,E,ae,_,ce,l,b,be]);return{isSelected:_,isFocused:ae,customIcon:j,children:F,getOptionProps:re}},Ut=()=>{const{isHit:o,onCreate:t}=R();return{getCreateProps:n.useCallback((a={},d=null)=>({ref:d,...a,tabIndex:-1,style:o?{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}:void 0,"data-focus":le(!o),onClick:K(a.onClick,t)}),[o,t])}},$t=()=>{const{isHit:o,isEmpty:t}=R();return{getEmptyProps:n.useCallback((a={},d=null)=>({ref:d,...a,tabIndex:-1,style:o&&!t?{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"}:void 0}),[o,t])}},zt=ee(({className:o,children:t,__css:l,...a},d)=>{const{styles:u}=R(),i={position:"absolute",top:"50%",transform:"translateY(-50%)",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",cursor:"pointer",...u.icon,...l},v=nt(t).map(y=>n.cloneElement(y,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em",color:"currentColor"}}));return x.jsx(H.div,{ref:d,className:Q("ui-autocomplete__icon",o),__css:i,...a,children:_t(t)?v:x.jsx(Rt,{})})}),fs=({className:o,children:t,...l})=>{const a=n.useRef(null),{styles:d}=R(),u=l.disabled,i=jt({ref:a,isDisabled:u,...l});return x.jsx(zt,{"aria-label":"Clear value",className:Q("ui-autocomplete__icon--clear",o),__css:d.clearIcon,...i,children:t??x.jsx(Ft,{w:"0.5em",h:"0.5em"})})},He=ee(({className:o,...t},l)=>{const{styles:a}=R(),d={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...a.itemIcon};return x.jsx(H.span,{ref:l,className:Q("ui-autocomplete__item__icon",o),__css:d,...t})}),ms=ee(({className:o,w:t,width:l,minW:a,minWidth:d,...u},i)=>{var f,C,j,E;const{styles:m}=R(),{getListProps:v}=Vt();t=t??l??((f=m.list)==null?void 0:f.w)??((C=m.list)==null?void 0:C.width),a=a??d??((j=m.list)==null?void 0:j.minW)??((E=m.list)==null?void 0:E.minWidth);const y={...m.list};return x.jsx(bt,{className:Q("ui-autocomplete__list",o),w:t,minW:a,__css:y,...v(u,i)})}),Gt=ee(({className:o,color:t,h:l,height:a,minH:d,minHeight:u,children:i,...m},v)=>{const{styles:y}=R(),{label:f,getContainerProps:C,getGroupProps:j}=Bt(m);return l??(l=a),d??(d=u),x.jsxs(H.li,{className:Q("ui-autocomplete__item","ui-autocomplete__item--group",o),__css:{w:"100%",h:"fit-content",color:t},...C(),children:[x.jsx(H.span,{className:"ui-autocomplete__item__group-label",__css:y.groupLabel,lineClamp:1,children:f}),x.jsx(H.ul,{...j({},v),className:"ui-autocomplete__item__group",__css:{h:l,minH:d,...y.group},children:i})]})}),et=ee(({className:o,icon:t,...l},a)=>{const{styles:d}=R(),{isSelected:u,customIcon:i,children:m,getOptionProps:v}=Kt(l);t??(t=i);const y={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...d.item};return x.jsxs(H.li,{className:Q("ui-autocomplete__item",o),__css:y,...v({},a),children:[t!==null?x.jsx(He,{opacity:u?1:0,children:t||x.jsx(Wt,{})}):null,x.jsx(H.span,{style:{flex:1},"data-label":!0,children:m})]})}),Wt=()=>x.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:x.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),xs=ee(({className:o,icon:t,children:l,...a},d)=>{const{inputValue:u,styles:i}=R(),{getCreateProps:m}=Ut();l??(l=u);const v={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...i.item};return x.jsxs(H.li,{className:Q("ui-autocomplete__item--create",o),__css:v,...m(a,d),children:[t!==null?x.jsx(He,{children:t||x.jsx(Jt,{})}):null,t?x.jsx(H.span,{style:{pointerEvents:"none",flex:1},lineClamp:1,children:Xe(l,u)}):Xe(l,u)]})}),Jt=()=>x.jsx("svg",{viewBox:"0 0 45.402 45.402",width:"1em",height:"1em",children:x.jsx("path",{fill:"currentColor",d:"M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141   c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27   c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435   c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"})}),Cs=ee(({className:o,icon:t,children:l,...a},d)=>{const{emptyMessage:u,styles:i}=R(),{getEmptyProps:m}=$t();l??(l=u);const v={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",pointerEvents:"none",...i.item};return x.jsxs(H.li,{className:Q("ui-autocomplete__item--empty",o),__css:v,...m(a,d),children:[t!==null?x.jsx(He,{children:t||x.jsx(qt,{})}):null,t?x.jsx(H.span,{style:{pointerEvents:"none",flex:1},lineClamp:1,children:l}):l]})}),qt=()=>x.jsx("svg",{viewBox:"0 0 448 512",width:"1em",height:"1em",children:x.jsx("path",{fill:"currentColor",d:"M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"})});export{rs as A,us as a,zt as b,ms as c,xs as d,Cs as e,R as f,ps as g,et as h,Gt as i,fs as j,ds as u};
