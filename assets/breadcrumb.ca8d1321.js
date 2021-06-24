var I=Object.defineProperty;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(a,e,r)=>e in a?I(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,_=(a,e)=>{for(var r in e||(e={}))L.call(e,r)&&v(a,r,e[r]);if(C)for(var r of C(e))T.call(e,r)&&v(a,r,e[r]);return a};import{D as w,X as F,a as R,z as j,o as z,Y as D,t as M,g as N,p as V,d as $,e as y,w as q,v as E,f as c,h as u,i as p,a0 as G,F as U,W,E as S,k,l as B,j as X,q as Y}from"./vendor.445db117.js";import{u as A}from"./index.70b52c15.js";var f={name:"LayoutBreadcrumb",setup(){const{proxy:a}=N(),e=A(),r=w(),n=F(),t=R({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),h=j(()=>e.state.themeConfig.themeConfig),b=s=>{const{redirect:i,path:g}=s;i?n.push(i):n.push(g)},m=()=>{a.mittBus.emit("onMenuClick"),e.state.themeConfig.themeConfig.isCollapse=!e.state.themeConfig.themeConfig.isCollapse},o=s=>{s.map(i=>{t.routeSplit.map((g,O,x)=>{t.routeSplitFirst===i.path&&(t.routeSplitFirst+=`/${x[t.routeSplitIndex]}`,t.breadcrumbList.push(i),t.routeSplitIndex++,i.children&&o(i.children))})}),console.log(t.breadcrumbList)},l=s=>{if(!e.state.themeConfig.themeConfig.isBreadcrumb)return!1;t.breadcrumbList=[],t.routeSplit=s.split("/"),t.routeSplit.shift(),t.routeSplitFirst=`/${t.routeSplit[0]}`,t.routeSplitIndex=1,o(e.state.routesList.routesList)};return z(()=>{l(r.path)}),D(s=>{l(s.path)}),_({onThemeConfigChange:m,onBreadcrumbClick:b,getThemeConfig:h},M(t))}},ee=`.layout-navbars-breadcrumb[data-v-7c537efc] {
  flex: 1;
  height: inherit;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-icon[data-v-7c537efc] {
  cursor: pointer;
  font-size: 18px;
  margin-right: 15px;
  color: var(--bg-topBarColor);
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-span[data-v-7c537efc] {
  opacity: 0.7;
  color: var(--bg-topBarColor);
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-iconfont[data-v-7c537efc] {
  font-size: 14px;
  margin-right: 5px;
}
.layout-navbars-breadcrumb[data-v-7c537efc] .el-breadcrumb__separator {
  opacity: 0.7;
  color: var(--bg-topBarColor);
}`;const d=Y();V("data-v-7c537efc");const H={class:"layout-navbars-breadcrumb"},J={key:0,class:"layout-navbars-breadcrumb-span"};$();const K=d((a,e,r,n,t,h)=>{const b=y("el-breadcrumb-item"),m=y("el-breadcrumb");return q((c(),u("div",H,[p("i",{class:["layout-navbars-breadcrumb-icon",n.getThemeConfig.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"],onClick:e[1]||(e[1]=(...o)=>n.onThemeConfigChange&&n.onThemeConfigChange(...o))},null,2),p(m,{class:"layout-navbars-breadcrumb-hide"},{default:d(()=>[p(G,{name:"breadcrumb",mode:"out-in"},{default:d(()=>[(c(!0),u(U,null,W(a.breadcrumbList,(o,l)=>(c(),u(b,{key:o.meta.title},{default:d(()=>[l==a.breadcrumbList.length-1?(c(),u("span",J,[n.getThemeConfig.isBreadcrumbIcon?(c(),u("i",{key:0,class:["layout-navbars-breadcrumb-iconfont",o.meta.icon]},null,2)):S("",!0),k(B(a.$t(o.meta.title)),1)])):(c(),u("a",{key:1,onClick:X(s=>n.onBreadcrumbClick(o),["prevent"])},[n.getThemeConfig.isBreadcrumbIcon?(c(),u("i",{key:0,class:["layout-navbars-breadcrumb-iconfont",o.meta.icon]},null,2)):S("",!0),k(B(a.$t(o.meta.title)),1)],8,["onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})],512)),[[E,n.getThemeConfig.isBreadcrumb]])});f.render=K,f.__scopeId="data-v-7c537efc";export default f;
