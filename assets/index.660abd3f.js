var d=Object.defineProperty;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))p.call(t,a)&&r(e,a,t[a]);return e};import{a as u,Y as _,t as v,p as f,d as h,w as y,v as m,f as g,h as w,i as o,l as c,q as D}from"./vendor.445db117.js";var s={name:"LayoutFooter",setup(){const e=u({isDelayFooter:!0});return _(()=>{e.isDelayFooter=!1,setTimeout(()=>{e.isDelayFooter=!0},800)}),i({},v(e))}},j=`.layout-footer[data-v-6c6a5a9e] {
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 60px;
}
.layout-footer-warp[data-v-6c6a5a9e] {
  margin: auto;
  color: #9e9e9e;
  text-align: center;
  animation: logoAnimation 0.3s ease-in-out;
}`;const x=D();f("data-v-6c6a5a9e");const F={class:"layout-footer"},I={class:"layout-footer-warp"},S={class:"mt5"};h();const $=x((e,t,a,B,k,R)=>y((g(),w("div",F,[o("div",I,[o("div",null,"freeVue\uFF0C\u4E00\u4E2A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F "+c("<(*\uFFE3\u25BD\uFFE3*)/"),1),o("div",S,c(e.$t("message.copyright.one5")),1)])],512)),[[m,e.isDelayFooter]]));s.render=$,s.__scopeId="data-v-6c6a5a9e";export default s;
