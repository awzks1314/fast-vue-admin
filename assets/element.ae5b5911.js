var x=Object.defineProperty;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(n,e,o)=>e in n?x(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,m=(n,e)=>{for(var o in e||(e={}))g.call(e,o)&&h(n,o,e[o]);if(_)for(var o of _(e))I.call(e,o)&&h(n,o,e[o]);return n};import{i as S}from"./getStyleSheets.9949edbe.js";import{y as k,a as C,o as L,t as $,C as j,s as v,p as B,d as E,e as i,f as d,h as p,i as t,F,W as T,l as q,q as z}from"./vendor.445db117.js";var f={name:"IconElement",setup(){const{t:n}=k(),e=C({sheetsIconList:[]}),o=()=>{S.ele().then(s=>e.sheetsIconList=s)},c=s=>{const a=new j(".copy",{text:()=>s});a.on("success",()=>{v.success(n("message.layout.copyTextSuccess")),a.destroy()}),a.on("error",()=>{v.error(n("message.layout.copyTextError")),a.destroy()})};return L(()=>{o()}),m({copy:c},$(e))}},K=`.element-container .iconfont-row[data-v-5a88a5db] {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
}
.element-container .iconfont-row .el-col[data-v-5a88a5db]:nth-last-child(1),
.element-container .iconfont-row .el-col[data-v-5a88a5db]:nth-last-child(2) {
  display: none;
}
.element-container .iconfont-row .iconfont-warp[data-v-5a88a5db] {
  text-align: center;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  height: 120px;
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease;
}
.element-container .iconfont-row .iconfont-warp[data-v-5a88a5db]:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.element-container .iconfont-row .iconfont-warp:hover .iconfont-warp-value i[data-v-5a88a5db] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.element-container .iconfont-row .iconfont-warp:hover .iconfont-warp-label[data-v-5a88a5db] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.element-container .iconfont-row .iconfont-warp .iconfont-warp-value i[data-v-5a88a5db] {
  color: #606266;
  font-size: 32px;
  transition: all 0.3s ease;
}
.element-container .iconfont-row .iconfont-warp .iconfont-warp-label[data-v-5a88a5db] {
  color: #99a9bf;
  transition: all 0.3s ease;
}`;const r=z();B("data-v-5a88a5db");const D={class:"element-container"},G={class:"iconfont-warp"},J={class:"flex-margin"},M={class:"iconfont-warp-value"},N={class:"iconfont-warp-label mt10"};E();const R=r((n,e,o,c,s,a)=>{const w=i("el-col"),b=i("el-row"),u=i("el-card");return d(),p("div",D,[t(u,{shadow:"hover",header:`element plus \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${n.sheetsIconList.length-2}\u4E2A`},{default:r(()=>[t(b,{class:"iconfont-row"},{default:r(()=>[(d(!0),p(F,null,T(n.sheetsIconList,(l,y)=>(d(),p(w,{xs:12,sm:8,md:6,lg:4,xl:2,key:y,onClick:V=>c.copy(l),class:"copy"},{default:r(()=>[t("div",G,[t("div",J,[t("div",M,[t("i",{class:l},null,2)]),t("div",N,q(l),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["header"])])});f.render=R,f.__scopeId="data-v-5a88a5db";export default f;
