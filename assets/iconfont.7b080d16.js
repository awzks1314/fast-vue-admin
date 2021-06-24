var x=Object.defineProperty;var _=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var h=(n,o,e)=>o in n?x(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,v=(n,o)=>{for(var e in o||(o={}))g.call(o,e)&&h(n,e,o[e]);if(_)for(var e of _(o))I.call(o,e)&&h(n,e,o[e]);return n};import{i as S}from"./getStyleSheets.9949edbe.js";import{y as k,a as C,o as L,t as $,C as j,s as w,p as B,d as F,e as l,f as d,h as p,i as t,F as T,W as q,l as z,q as D}from"./vendor.445db117.js";var f={name:"IconIocnfont",setup(){const{t:n}=k(),o=C({sheetsIconList:[]}),e=()=>{S.ali().then(s=>o.sheetsIconList=s)},r=s=>{const a=new j(".copy",{text:()=>s});a.on("success",()=>{w.success(n("message.layout.copyTextSuccess")),a.destroy()}),a.on("error",()=>{w.error(n("message.layout.copyTextError")),a.destroy()})};return L(()=>{e()}),v({copy:r},$(o))}},K=`.iconfont-container .iconfont-row[data-v-9e53a5ac] {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
}
.iconfont-container .iconfont-row .iconfont-warp[data-v-9e53a5ac] {
  text-align: center;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  height: 120px;
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease;
}
.iconfont-container .iconfont-row .iconfont-warp[data-v-9e53a5ac]:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.iconfont-container .iconfont-row .iconfont-warp:hover .iconfont-warp-value i[data-v-9e53a5ac] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.iconfont-container .iconfont-row .iconfont-warp:hover .iconfont-warp-label[data-v-9e53a5ac] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.iconfont-container .iconfont-row .iconfont-warp .iconfont-warp-value i[data-v-9e53a5ac] {
  color: #606266;
  font-size: 32px;
  transition: all 0.3s ease;
}
.iconfont-container .iconfont-row .iconfont-warp .iconfont-warp-label[data-v-9e53a5ac] {
  color: #99a9bf;
  transition: all 0.3s ease;
}`;const c=D();B("data-v-9e53a5ac");const E={class:"iconfont-container"},G={class:"iconfont-warp"},J={class:"flex-margin"},M={class:"iconfont-warp-value"},N={class:"iconfont-warp-label mt10"};F();const R=c((n,o,e,r,s,a)=>{const u=l("el-col"),m=l("el-row"),y=l("el-card");return d(),p("div",E,[t(y,{shadow:"hover",header:`iconfont \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${n.sheetsIconList.length}\u4E2A`},{default:c(()=>[t(m,{class:"iconfont-row"},{default:c(()=>[(d(!0),p(T,null,q(n.sheetsIconList,(i,b)=>(d(),p(u,{xs:12,sm:8,md:6,lg:4,xl:2,key:b,onClick:V=>r.copy(i),class:"copy"},{default:c(()=>[t("div",G,[t("div",J,[t("div",M,[t("i",{class:[i,"iconfont"]},null,2)]),t("div",N,z(i),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["header"])])});f.render=R,f.__scopeId="data-v-9e53a5ac";export default f;
