var M=Object.defineProperty;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var k=(e,s,o)=>s in e?M(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,p=(e,s)=>{for(var o in s||(s={}))T.call(s,o)&&k(e,o,s[o]);if(S)for(var o of S(s))j.call(s,o)&&k(e,o,s[o]);return e};import{r as L,D,X as F,a as O,z as b,B as H,o as X,Y as q,t as N,n as P,g as U,p as V,d as W,e as Y,f,h,i as r,F as E,W as G,l as R,q as J}from"./vendor.445db117.js";import{u as K}from"./index.70b52c15.js";var C={name:"layoutColumnsAside",setup(){const e=L([]),s=L(),{proxy:o}=U(),l=K(),v=D(),g=F(),i=O({columnsAsideList:[],liIndex:0,difference:0,routeSplit:[]}),n=b(()=>l.state.themeConfig.themeConfig),d=b(()=>l.state.themeConfig.themeConfig.columnsAsideStyle),m=b(()=>l.state.themeConfig.themeConfig.columnsAsideLayout),A=t=>{i.liIndex=t,s.value.style.top=`${e.value[t].offsetTop+i.difference}px`},I=(t,a)=>{A(a);let{path:c,redirect:u}=t;u?g.push(u):g.push(c)},y=t=>{P(()=>{A(t)})},z=()=>{i.columnsAsideList=_(l.state.routesList.routesList);const t=x(v.path);if(Object.keys(t).length<=0)return!1;y(t.item[0].k),o.mittBus.emit("setSendColumnsChildren",t)},x=t=>{const a=t.split("/");let c={};return i.columnsAsideList.map((u,$)=>{u.path===`/${a[1]}`&&(u.k=$,c.item=[p({},u)],c.children=[p({},u)],u.children&&(c.children=u.children))}),c},_=t=>t.filter(a=>!a.meta.isHide).map(a=>(a=Object.assign({},a),a.children&&(a.children=_(a.children)),a)),B=t=>{i.routeSplit=t.split("/"),i.routeSplit.shift();const a=`/${i.routeSplit[0]}`,c=i.columnsAsideList.find(u=>u.path===a);if(!c)return!1;setTimeout(()=>{y(c.k)},0)};return H(l.state,t=>{t.themeConfig.themeConfig.columnsAsideStyle==="columnsRound"?i.difference=3:i.difference=0}),X(()=>{z()}),q(t=>{B(t.path),o.mittBus.emit("setSendColumnsChildren",x(t.path))}),p({getThemeConfig:n,columnsAsideOffsetTopRefs:e,columnsAsideActiveRef:s,onColumnsAsideDown:y,setColumnsAsideStyle:d,setColumnsAsidelayout:m,onColumnsAsideMenuClick:I},N(i))}},ae=`.layout-columns-logo[data-v-3a0273be] {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
}
.layout-columns-logo-img[data-v-3a0273be] {
  width: 30px;
  height: 30px;
}
.layout-columns-aside[data-v-3a0273be] {
  width: 100px;
  height: 100%;
  background: var(--bg-columnsMenuBar);
}
.layout-columns-aside ul[data-v-3a0273be] {
  position: relative;
}
.layout-columns-aside ul li[data-v-3a0273be] {
  color: var(--bg-columnsMenuBarColor);
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.layout-columns-aside ul li .columns-vertical[data-v-3a0273be] {
  margin: auto;
}
.layout-columns-aside ul li .columns-vertical .columns-vertical-title[data-v-3a0273be] {
  padding-top: 1px;
}
.layout-columns-aside ul li .columns-horizontal[data-v-3a0273be] {
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  padding: 0 0 0 10px;
}
.layout-columns-aside ul li .columns-horizontal i[data-v-3a0273be] {
  margin-right: 3px;
}
.layout-columns-aside ul li .columns-horizontal a[data-v-3a0273be] {
  display: flex;
}
.layout-columns-aside ul li .columns-horizontal a .columns-horizontal-title[data-v-3a0273be] {
  padding-top: 1px;
}
.layout-columns-aside ul li a[data-v-3a0273be] {
  text-decoration: none;
  color: var(--bg-columnsMenuBarColor);
}
.layout-columns-aside ul .layout-columns-active[data-v-3a0273be] {
  color: #ffffff;
  transition: 0.3s ease-in-out;
}
.layout-columns-aside ul .columns-round[data-v-3a0273be], .layout-columns-aside ul .columns-card[data-v-3a0273be] {
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
.layout-columns-aside ul .columns-card[data-v-3a0273be] {
  top: 0;
  height: 50px;
  width: 100%;
  border-radius: 0;
}
[class^=el-icon-][data-v-3a0273be] {
  font-size: 16px;
}`;const w=J();V("data-v-3a0273be");const Q={class:"layout-columns-aside"},Z={class:"layout-columns-logo"},ee={class:"columns-vertical-title font14"},te={class:"columns-vertical-title font14"};W();const ne=w((e,s,o,l,v,g)=>{const i=Y("el-scrollbar");return f(),h("div",Q,[r("div",Z,[r("img",{src:l.getThemeConfig.globalLogo,class:"layout-columns-logo-img"},null,8,["src"])]),r(i,null,{default:w(()=>[r("ul",null,[(f(!0),h(E,null,G(e.columnsAsideList,(n,d)=>(f(),h("li",{key:d,onClick:m=>l.onColumnsAsideMenuClick(n,d),ref:m=>{m&&(l.columnsAsideOffsetTopRefs[d]=m)},class:{"layout-columns-active":e.liIndex===d},title:e.$t(n.meta.title)},[!n.meta.isLink||n.meta.isLink&&n.meta.isIframe?(f(),h("div",{key:0,class:l.setColumnsAsidelayout},[r("i",{class:n.meta.icon},null,2),r("div",ee,R(e.$t(n.meta.title)&&e.$t(n.meta.title).length>=4?e.$t(n.meta.title).substr(0,(l.setColumnsAsidelayout==="columns-vertical",4)):e.$t(n.meta.title)),1)],2)):(f(),h("div",{key:1,class:l.setColumnsAsidelayout},[r("a",{href:n.meta.isLink,target:"_blank"},[r("i",{class:n.meta.icon},null,2),r("div",te,R(e.$t(n.meta.title)&&e.$t(n.meta.title).length>=4?e.$t(n.meta.title).substr(0,(l.setColumnsAsidelayout==="columns-vertical",4)):e.$t(n.meta.title)),1)],8,["href"])],2))],10,["onClick","title"]))),128)),r("div",{ref:"columnsAsideActiveRef",class:l.setColumnsAsideStyle},null,2)])]),_:1})])});C.render=ne,C.__scopeId="data-v-3a0273be";export default C;
