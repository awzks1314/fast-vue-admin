var D=Object.defineProperty;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var w=(e,a,l)=>a in e?D(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l,v=(e,a)=>{for(var l in a||(a={}))O.call(a,l)&&w(e,l,a[l]);if(L)for(var l of L(a))N.call(a,l)&&w(e,l,a[l]);return e};import{u as R}from"./index.70ca9da6.js";import{_ as U}from"./aside.2b6ab02e.js";import{_ as V,a as q}from"./main.3909b6ef.js";import{r as M,D as E,Y as P,a as X,z as A,B as Y,o as Z,Z as G,t as J,n as K,g as Q,p as W,d as ee,e as m,f,h as p,i as o,F as te,S as ne,l as F,q as se,U as b,E as H}from"./vendor.2e5e5880.js";import"./parent.eee5787e.js";var k={name:"layoutColumnsAside",setup(){const e=M([]),a=M(),{proxy:l}=Q(),s=R(),x=E(),g=P(),i=X({columnsAsideList:[],liIndex:0,difference:0,routeSplit:[]}),n=A(()=>s.state.themeConfig.themeConfig),r=A(()=>s.state.themeConfig.themeConfig.columnsAsideStyle),h=A(()=>s.state.themeConfig.themeConfig.columnsAsideLayout),y=t=>{i.liIndex=t,a.value.style.top=`${e.value[t].offsetTop+i.difference}px`},C=(t,c)=>{y(c);let{path:u,redirect:d}=t;d?g.push(d):g.push(u)},_=t=>{K(()=>{y(t)})},B=()=>{i.columnsAsideList=$(s.state.routesList.routesList);const t=S(x.path);if(Object.keys(t).length<=0)return!1;_(t.item[0].k),l.mittBus.emit("setSendColumnsChildren",t)},S=t=>{const c=t.split("/");let u={};return i.columnsAsideList.map((d,T)=>{d.path===`/${c[1]}`&&(d.k=T,u.item=[v({},d)],u.children=[v({},d)],d.children&&(u.children=d.children))}),u},$=t=>t.filter(c=>!c.meta.isHide).map(c=>(c=Object.assign({},c),c.children&&(c.children=$(c.children)),c)),j=t=>{i.routeSplit=t.split("/"),i.routeSplit.shift();const c=`/${i.routeSplit[0]}`,u=i.columnsAsideList.find(d=>d.path===c);if(!u)return!1;setTimeout(()=>{_(u.k)},0)};return Y(s.state,t=>{t.themeConfig.themeConfig.columnsAsideStyle==="columnsRound"?i.difference=3:i.difference=0}),Z(()=>{B()}),G(t=>{j(t.path),l.mittBus.emit("setSendColumnsChildren",S(t.path))}),v({getThemeConfig:n,columnsAsideOffsetTopRefs:e,columnsAsideActiveRef:a,onColumnsAsideDown:_,setColumnsAsideStyle:r,setColumnsAsidelayout:h,onColumnsAsideMenuClick:C},J(i))}},ge=`.layout-columns-logo[data-v-7d8cda82] {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.layout-columns-logo-img[data-v-7d8cda82] {
  width: 30px;
  height: 30px;
}
.layout-columns-aside[data-v-7d8cda82] {
  width: 100px;
  height: 100%;
  background: var(--bg-columnsMenuBar);
}
.layout-columns-aside ul[data-v-7d8cda82] {
  position: relative;
}
.layout-columns-aside ul li[data-v-7d8cda82] {
  color: var(--bg-columnsMenuBarColor);
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.layout-columns-aside ul li .columns-vertical[data-v-7d8cda82] {
  margin: auto;
}
.layout-columns-aside ul li .columns-vertical .columns-vertical-title[data-v-7d8cda82] {
  padding-top: 1px;
}
.layout-columns-aside ul li .columns-horizontal[data-v-7d8cda82] {
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  padding: 0 0 0 10px;
}
.layout-columns-aside ul li .columns-horizontal i[data-v-7d8cda82] {
  margin-right: 3px;
}
.layout-columns-aside ul li .columns-horizontal a[data-v-7d8cda82] {
  display: flex;
}
.layout-columns-aside ul li .columns-horizontal a .columns-horizontal-title[data-v-7d8cda82] {
  padding-top: 1px;
}
.layout-columns-aside ul li a[data-v-7d8cda82] {
  text-decoration: none;
  color: var(--bg-columnsMenuBarColor);
}
.layout-columns-aside ul .layout-columns-active[data-v-7d8cda82] {
  color: #ffffff;
  transition: 0.3s ease-in-out;
}
.layout-columns-aside ul .columns-round[data-v-7d8cda82], .layout-columns-aside ul .columns-card[data-v-7d8cda82] {
  background: var(--color-primary);
  color: #ffffff;
  position: absolute;
  left: 50%;
  top: 2px;
  height: 44px;
  width: 65px;
  transform: translateX(-50%);
  z-index: 0;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
}
.layout-columns-aside ul .columns-card[data-v-7d8cda82] {
  top: 0;
  height: 50px;
  width: 100%;
  border-radius: 0;
}
[class^=el-icon-][data-v-7d8cda82] {
  font-size: 16px;
}`;const I=se();W("data-v-7d8cda82");const oe={class:"layout-columns-aside"},ae={class:"layout-columns-logo"},le={class:"columns-vertical-title font14"},ie={class:"columns-vertical-title font14"};ee();const ce=I((e,a,l,s,x,g)=>{const i=m("el-scrollbar");return f(),p("div",oe,[o("div",ae,[o("img",{src:s.getThemeConfig.globalLogo,class:"layout-columns-logo-img"},null,8,["src"])]),o(i,null,{default:I(()=>[o("ul",null,[(f(!0),p(te,null,ne(e.columnsAsideList,(n,r)=>(f(),p("li",{key:r,onClick:h=>s.onColumnsAsideMenuClick(n,r),ref:h=>{h&&(s.columnsAsideOffsetTopRefs[r]=h)},class:{"layout-columns-active":e.liIndex===r},title:e.$t(n.meta.title)},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?(f(),p("div",{key:0,class:s.setColumnsAsidelayout},[o("i",{class:n.meta.icon},null,2),o("div",le,F(e.$t(n.meta.title)&&e.$t(n.meta.title).length>=4?e.$t(n.meta.title).substr(0,(s.setColumnsAsidelayout==="columns-vertical",4)):e.$t(n.meta.title)),1)],2)):(f(),p("div",{key:1,class:s.setColumnsAsidelayout},[o("a",{href:n.meta.isLink,target:"_blank"},[o("i",{class:n.meta.icon},null,2),o("div",ie,F(e.$t(n.meta.title)&&e.$t(n.meta.title).length>=4?e.$t(n.meta.title).substr(0,(s.setColumnsAsidelayout==="columns-vertical",4)):e.$t(n.meta.title)),1)],8,["href"])],2))],10,["onClick","title"]))),128)),o("div",{ref:"columnsAsideActiveRef",class:s.setColumnsAsideStyle},null,2)])]),_:1})])});k.render=ce,k.__scopeId="data-v-7d8cda82";var z={name:"LayoutColumns",components:{Aside:U,Header:V,Main:q,ColumnsAside:k},setup(){const e=R();return{isFixedHeader:A(()=>e.state.themeConfig.themeConfig.isFixedHeader)}}};const de={class:"layout-columns-warp"};function re(e,a,l,s,x,g){const i=m("ColumnsAside"),n=m("Aside"),r=m("Header"),h=m("Main"),y=m("el-scrollbar"),C=m("el-container"),_=m("el-backtop");return f(),p(C,{class:"layout-container"},{default:b(()=>[o(i),o("div",de,[o(n),o(C,{class:"flex-center layout-backtop"},{default:b(()=>[s.isFixedHeader?(f(),p(r,{key:0})):H("",!0),o(y,null,{default:b(()=>[s.isFixedHeader?H("",!0):(f(),p(r,{key:0})),o(h)]),_:1})]),_:1})]),o(_,{target:".layout-backtop   .el-scrollbar__wrap"})]),_:1})}z.render=re;export default z;
