var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var x=(r,t,o)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,d=(r,t)=>{for(var o in t||(t={}))j.call(t,o)&&x(r,o,t[o]);if(y)for(var o of y(t))w.call(t,o)&&x(r,o,t[o]);return r};import{D as k,a as R,z as l,B as $,o as z,b as F,t as H,g as M,p as U,d as D,e as m,f,h as p,E as b,i as N,q as T}from"./vendor.445db117.js";import{u as V}from"./index.70b52c15.js";import q from"./index.1cf1fa5a.js";import E from"./user.1d1bf956.js";import O from"./breadcrumb.ca8d1321.js";import P from"./horizontal.d03789b4.js";import"./screenfull.23c35388.js";import"./userNews.b377e347.js";import"./search.3285671c.js";import"./subItem.bde88858.js";var L={name:"LayoutBreadcrumbIndex",components:{Logo:q,Breadcrumb:O,Horizontal:P,User:E},setup(){const{proxy:r}=M(),t=V(),o=k(),n=R({menuList:[]}),C=l(()=>t.state.themeConfig.themeConfig),S=l(()=>{let{isShowLogo:s,layout:e}=t.state.themeConfig.themeConfig;return s&&e==="classic"||s&&e==="transverse"}),h=l(()=>{let{layout:s,isClassicSplitMenu:e}=t.state.themeConfig.themeConfig;return s==="transverse"?!1:!(s==="classic"&&e)}),_=l(()=>{let{layout:s,isClassicSplitMenu:e}=t.state.themeConfig.themeConfig;return s==="transverse"||e&&s==="classic"}),c=()=>{let{layout:s,isClassicSplitMenu:e}=t.state.themeConfig.themeConfig;if(s==="classic"&&e){n.menuList=g(u(t.state.routesList.routesList));const a=B(o.path);r.mittBus.emit("setSendClassicChildren",a)}else n.menuList=u(t.state.routesList.routesList)},g=s=>(s.map(e=>{e.children&&delete e.children}),s),u=s=>s.filter(e=>!e.meta.isHide).map(e=>(e=Object.assign({},e),e.children&&(e.children=u(e.children)),e)),B=s=>{const e=s.split("/");let a={};return u(t.state.routesList.routesList).map((i,v)=>{i.path===`/${e[1]}`&&(i.k=v,a.item=[d({},i)],a.children=[d({},i)],i.children&&(a.children=i.children))}),a};return $(t.state,s=>{if(s.routesList.routesList.length===n.menuList.length)return!1;c()}),z(()=>{c(),r.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{c()})}),F(()=>{r.mittBus.off("getBreadcrumbIndexSetFilterRoutes")}),d({getThemeConfig:C,setIsShowLogo:S,isShowBreadcrumb:h,isLayoutTransverse:_},H(n))}},ne=`.layout-navbars-breadcrumb-index[data-v-c06dc49a] {
  height: 60px;
  display: flex;
  align-items: center;
  padding-right: 15px;
  background: var(--bg-topBar);
  overflow: hidden;
  border-bottom: 1px solid #f1f2f3;
}`;const A=T();U("data-v-c06dc49a");const G={class:"layout-navbars-breadcrumb-index"};D();const J=A((r,t,o,n,C,S)=>{const h=m("Logo"),_=m("Breadcrumb"),c=m("Horizontal"),g=m("User");return f(),p("div",G,[n.setIsShowLogo?(f(),p(h,{key:0})):b("",!0),n.isShowBreadcrumb?(f(),p(_,{key:1})):b("",!0),n.isLayoutTransverse?(f(),p(c,{key:2,menuList:r.menuList},null,8,["menuList"])):b("",!0),N(g)])});L.render=J,L.__scopeId="data-v-c06dc49a";export default L;
