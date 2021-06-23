var x=Object.defineProperty;var w=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var _=(e,o,n)=>o in e?x(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,h=(e,o)=>{for(var n in o||(o={}))g.call(o,n)&&_(e,n,o[n]);if(w)for(var n of w(o))I.call(o,n)&&_(e,n,o[n]);return e};import{i as S}from"./getStyleSheets.9949edbe.js";import{y as k,a as C,o as L,t as $,C as j,s as m,p as B,d as F,e as i,f as l,h as d,i as t,F as T,W as q,l as z,q as A}from"./vendor.445db117.js";var p={name:"IconAwesome",setup(){const{t:e}=k(),o=C({sheetsIconList:[]}),n=()=>{S.awe().then(s=>o.sheetsIconList=s)};return L(()=>{n()}),h({copy:s=>{const a=new j(".copy",{text:()=>s});a.on("success",()=>{m.success(e("message.layout.copyTextSuccess")),a.destroy()}),a.on("error",()=>{m.error(e("message.layout.copyTextError")),a.destroy()})}},$(o))}},K=`.awesome-container .iconfont-row[data-v-690d0032] {
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
}
.awesome-container .iconfont-row .el-col[data-v-690d0032]:nth-child(-n+24) {
  display: none;
}
.awesome-container .iconfont-row .iconfont-warp[data-v-690d0032] {
  text-align: center;
  border-right: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  height: 120px;
  overflow: hidden;
  display: flex;
  transition: all 0.3s ease;
}
.awesome-container .iconfont-row .iconfont-warp[data-v-690d0032]:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}
.awesome-container .iconfont-row .iconfont-warp:hover .iconfont-warp-value i[data-v-690d0032] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.awesome-container .iconfont-row .iconfont-warp:hover .iconfont-warp-label[data-v-690d0032] {
  color: var(--color-primary);
  transition: all 0.3s ease;
}
.awesome-container .iconfont-row .iconfont-warp .iconfont-warp-value i[data-v-690d0032] {
  color: #606266;
  font-size: 32px;
  transition: all 0.3s ease;
}
.awesome-container .iconfont-row .iconfont-warp .iconfont-warp-label[data-v-690d0032] {
  color: #99a9bf;
  transition: all 0.3s ease;
}`;const r=A();B("data-v-690d0032");const D={class:"awesome-container"},E={class:"iconfont-warp"},G={class:"flex-margin"},J={class:"iconfont-warp-value"},M={class:"iconfont-warp-label mt10"};F();const N=r((e,o,n,f,s,a)=>{const v=i("el-col"),u=i("el-row"),y=i("el-card");return l(),d("div",D,[t(y,{shadow:"hover",header:`fontawesome \u5B57\u4F53\u56FE\u6807(\u81EA\u52A8\u8F7D\u5165)\uFF1A${e.sheetsIconList.length-24}\u4E2A`},{default:r(()=>[t(u,{class:"iconfont-row"},{default:r(()=>[(l(!0),d(T,null,q(e.sheetsIconList,(c,b)=>(l(),d(v,{xs:12,sm:8,md:6,lg:4,xl:2,key:b,onClick:R=>f.copy(c),class:"copy"},{default:r(()=>[t("div",E,[t("div",G,[t("div",J,[t("i",{class:[c,"fa"]},null,2)]),t("div",M,z(c),1)])])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["header"])])});p.render=N,p.__scopeId="data-v-690d0032";export default p;
