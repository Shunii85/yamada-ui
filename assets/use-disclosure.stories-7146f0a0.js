import{j as a,F as l,a as o}from"./jsx-runtime-b08f8875.js";import{u as p}from"./index-e5038766.js";import{D as B}from"./dialog-4e0bb246.js";import{B as m}from"./button-1f60b64e.js";import{T as x}from"./text-c614df96.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./factory-7bddb6ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./theme-provider-9d5cd644.js";import"./component-911fdb88.js";import"./slide-0e22f8ca.js";import"./index-709acde9.js";import"./motion-5447b2d8.js";import"./utils-d6e32cfb.js";import"./forward-ref-cf7188bd.js";import"./fade-9c78fb6d.js";import"./close-button-556a1745.js";import"./use-component-style-873f0974.js";import"./icon-2893f38a.js";import"./index-96d7938f.js";import"./container-portal-cbcbc808.js";import"./index-8bf7f4ad.js";import"./extends-90dea224.js";import"./slide-fade-59db38c9.js";import"./scale-fade-63d4c582.js";import"./loading-66c4e6ca.js";const Z={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:n}=p();return a(l,{children:[o(m,{onClick:s,children:"Open Dialog"}),o(B,{isOpen:e,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[o(m,{onClick:s,children:"Please Click"}),e?o(x,{children:"Hey!"}):null]})},t=()=>{const{isOpen:e,onOpen:s,onClose:n}=p({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return a(l,{children:[o(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),o(B,{isOpen:e,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header="孫悟空" cancel="わけない" onCancel={onClose} success="わける" onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var d,h,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,D,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure({
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    },
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={() => onClose("This is arg")} header="孫悟空" cancel="わけない" onCancel={() => onClose("This is arg")} success="わける" onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const $=["basic","useToggle","withChain"];export{$ as __namedExportsOrder,r as basic,Z as default,i as useToggle,t as withChain};
//# sourceMappingURL=use-disclosure.stories-7146f0a0.js.map