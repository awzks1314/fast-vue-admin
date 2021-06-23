var I=Object.defineProperty;var C=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&v(t,r,e[r]);if(C)for(var r of C(e))T.call(e,r)&&v(t,r,e[r]);return t};import{D as w,X as F,a as R,z as j,o as z,Y as D,t as M,g as N,p as V,d as $,e as y,w as q,v as E,f as u,h as c,i as p,a0 as G,F as U,W,E as S,k,l as B,j as X,q as Y}from"./vendor.e37295fd.js";import{u as A}from"./index.d89cbfe3.js";var f={name:"LayoutBreadcrumb",setup(){const{proxy:t}=N(),e=A(),r=w(),n=F(),a=R({breadcrumbList:[],routeSplit:[],routeSplitFirst:"",routeSplitIndex:1}),h=j(()=>e.state.themeConfig.themeConfig),b=s=>{const{redirect:i,path:g}=s;i?n.push(i):n.push(g)},m=()=>{t.mittBus.emit("onMenuClick"),e.state.themeConfig.themeConfig.isCollapse=!e.state.themeConfig.themeConfig.isCollapse},o=s=>{s.map(i=>{a.routeSplit.map((g,O,x)=>{a.routeSplitFirst===i.path&&(a.routeSplitFirst+=`/${x[a.routeSplitIndex]}`,a.breadcrumbList.push(i),a.routeSplitIndex++,i.children&&o(i.children))})})},l=s=>{if(!e.state.themeConfig.themeConfig.isBreadcrumb)return!1;a.breadcrumbList=[e.state.routesList.routesList[0]],a.routeSplit=s.split("/"),a.routeSplit.shift(),a.routeSplitFirst=`/${a.routeSplit[0]}`,a.routeSplitIndex=1,o(e.state.routesList.routesList)};return z(()=>{l(r.path)}),D(s=>{l(s.path)}),_({onThemeConfigChange:m,onBreadcrumbClick:b,getThemeConfig:h},M(a))}},ee=`.layout-navbars-breadcrumb[data-v-1d356014] {
  flex: 1;
  height: inherit;
  display: flex;
  align-items: center;
  padding-left: 15px;
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-icon[data-v-1d356014] {
  cursor: pointer;
  font-size: 18px;
  margin-right: 15px;
  color: var(--bg-topBarColor);
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-span[data-v-1d356014] {
  opacity: 0.7;
  color: var(--bg-topBarColor);
}
.layout-navbars-breadcrumb .layout-navbars-breadcrumb-iconfont[data-v-1d356014] {
  font-size: 14px;
  margin-right: 5px;
}
.layout-navbars-breadcrumb[data-v-1d356014] .el-breadcrumb__separator {
  opacity: 0.7;
  color: var(--bg-topBarColor);
}`;const d=Y();V("data-v-1d356014");const H={class:"layout-navbars-breadcrumb"},J={key:0,class:"layout-navbars-breadcrumb-span"};$();const K=d((t,e,r,n,a,h)=>{const b=y("el-breadcrumb-item"),m=y("el-breadcrumb");return q((u(),c("div",H,[p("i",{class:["layout-navbars-breadcrumb-icon",n.getThemeConfig.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"],onClick:e[1]||(e[1]=(...o)=>n.onThemeConfigChange&&n.onThemeConfigChange(...o))},null,2),p(m,{class:"layout-navbars-breadcrumb-hide"},{default:d(()=>[p(G,{name:"breadcrumb",mode:"out-in"},{default:d(()=>[(u(!0),c(U,null,W(t.breadcrumbList,(o,l)=>(u(),c(b,{key:o.meta.title},{default:d(()=>[l==t.breadcrumbList.length-1?(u(),c("span",J,[n.getThemeConfig.isBreadcrumbIcon?(u(),c("i",{key:0,class:["layout-navbars-breadcrumb-iconfont",o.meta.icon]},null,2)):S("",!0),k(B(t.$t(o.meta.title)),1)])):(u(),c("a",{key:1,onClick:X(s=>n.onBreadcrumbClick(o),["prevent"])},[n.getThemeConfig.isBreadcrumbIcon?(u(),c("i",{key:0,class:["layout-navbars-breadcrumb-iconfont",o.meta.icon]},null,2)):S("",!0),k(B(t.$t(o.meta.title)),1)],8,["onClick"]))]),_:2},1024))),128))]),_:1})]),_:1})],512)),[[E,n.getThemeConfig.isBreadcrumb]])});f.render=K,f.__scopeId="data-v-1d356014";export default f;
