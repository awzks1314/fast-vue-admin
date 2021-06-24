import{u as h}from"./index.70b52c15.js";import{z as r,g as c,p as u,d as C,f as t,h as a,E as m,i as p,l as f,q as y}from"./vendor.445db117.js";var i={name:"layoutLogo",setup(){const{proxy:s}=c(),e=h(),l=r(()=>e.state.themeConfig.themeConfig);return{setShowLogo:r(()=>{let{isCollapse:g,layout:n}=e.state.themeConfig.themeConfig;return console.log(n),!g||n==="classic"||n==="transverse"||document.body.clientWidth<1e3}),getThemeConfig:l,onThemeConfigChange:()=>{if(e.state.themeConfig.themeConfig.layout==="transverse")return!1;s.mittBus.emit("onMenuClick"),e.state.themeConfig.themeConfig.isCollapse=!e.state.themeConfig.themeConfig.isCollapse}}}},b=`.divider[data-v-407035a4] {
  margin: 8px 0 !important;
}
.layout-logo[data-v-407035a4] {
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 21, 41, 0.02) 0px 1px 4px;
  color: var(--color-primary);
  font-size: 20px;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;
}
.layout-logo:hover span[data-v-407035a4] {
  color: var(--color-primary-light-2);
}
.layout-logo-medium-img[data-v-407035a4] {
  width: 20px;
  margin-right: 5px;
}
.layout-logo-size[data-v-407035a4] {
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;
}
.layout-logo-size-img[data-v-407035a4] {
  width: 20px;
  margin: auto;
}
.layout-logo-size:hover img[data-v-407035a4] {
  animation: logoAnimation 0.3s ease-in-out;
}`;const v=y();u("data-v-407035a4");const x={class:"borderNone"};C();const _=v((s,e,l,o,d,g)=>(t(),a("div",x,[o.setShowLogo?(t(),a("div",{key:0,class:"layout-logo",onClick:e[1]||(e[1]=(...n)=>o.onThemeConfigChange&&o.onThemeConfigChange(...n))},[o.getThemeConfig.layout!=="columns"?(t(),a("img",{key:0,src:o.getThemeConfig.globalLogo,class:"layout-logo-medium-img"},null,8,["src"])):m("",!0),p("span",null,f(o.getThemeConfig.globalTitle),1)])):(t(),a("div",{key:1,class:"layout-logo-size",onClick:e[2]||(e[2]=(...n)=>o.onThemeConfigChange&&o.onThemeConfigChange(...n))},[o.getThemeConfig.layout!=="columns"?(t(),a("img",{key:0,src:o.getThemeConfig.globalLogo,class:"layout-logo-size-img"},null,8,["src"])):m("",!0)]))])));i.render=_,i.__scopeId="data-v-407035a4";export default i;
