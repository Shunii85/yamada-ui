import{a4 as S,a5 as y,a6 as l,a7 as p,a8 as b,I as w}from"./factory-DB2JyeD8.js";import{r as h}from"./index-BwDkhjyp.js";function g(n,t){if(n.inserted[t.name]===void 0)return n.insert("",t,n.sheet,!0)}function d(n,t,e){var i=[],o=y(n,i,e);return i.length<2?e:o+t(i)}var x=function(t){var e=S(t);e.sheet.speedy=function(f){this.isSpeedy=f},e.compat=!0;var i=function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];var c=l(a,e.registered,void 0);return p(e,c,!1),e.key+"-"+c.name},o=function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];var c=l(a,e.registered),v="animation-"+c.name;return g(e,{name:c.name,styles:"@keyframes "+v+"{"+c.styles+"}"}),v},u=function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];var c=l(a,e.registered);g(e,c)},m=function(){for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return d(e.registered,i,C(a))};return{css:i,cx:m,injectGlobal:u,keyframes:o,hydrate:function(s){s.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:y.bind(null,e.registered),merge:d.bind(null,e.registered,i)}},C=function n(t){for(var e="",i=0;i<t.length;i++){var o=t[i];if(o!=null){var u=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))u=n(o);else{u="";for(var m in o)o[m]&&m&&(u&&(u+=" "),u+=m)}break}default:u=o}u&&(e&&(e+=" "),e+=u)}}return e},E=x({key:"css"}),z=E.css;const I=(n={})=>{const t=h.useContext(b);return h.useMemo(()=>j(n)(t),[n,t])},j=(n={})=>t=>z(w(n)(t));export{j as g,I as u};
