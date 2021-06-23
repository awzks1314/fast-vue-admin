var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var n=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))p.call(t,o)&&n(e,o,t[o]);return e};import{a as u,Y as _,t as f,p as v,d as y,w as h,v as m,f as w,h as g,i as a,l as i,q as D}from"./vendor.445db117.js";var s={name:"LayoutFooter",setup(){const e=u({isDelayFooter:!0});return _(()=>{e.isDelayFooter=!1,setTimeout(()=>{e.isDelayFooter=!0},800)}),d({},f(e))}},j=`.layout-footer[data-v-3f2d1d9b] {
  width: 100%;
  display: flex;
}
.layout-footer-warp[data-v-3f2d1d9b] {
  margin: auto;
  color: #9e9e9e;
  text-align: center;
  animation: logoAnimation 0.3s ease-in-out;
}`;const b=D();v("data-v-3f2d1d9b");const F={class:"layout-footer mt15"},I={class:"layout-footer-warp"},S={class:"mt5"};y();const $=b((e,t,o,x,B,k)=>h((w(),g("div",F,[a("div",I,[a("div",null,"freeVue\uFF0C\u4E00\u4E2A\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\u6A21\u677F "+i("<(*\uFFE3\u25BD\uFFE3*)/"),1),a("div",S,i(e.$t("message.copyright.one5")),1)])],512)),[[m,e.isDelayFooter]]));s.render=$,s.__scopeId="data-v-3f2d1d9b";export default s;
