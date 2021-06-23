import{u as h}from"./index.6243c594.js";import{z as m,g as c,p,d as u,f as t,h as i,i as a,l as C,q as f}from"./vendor.445db117.js";var s={name:"layoutLogo",setup(){const{proxy:l}=c(),o=h(),g=m(()=>o.state.themeConfig.themeConfig);return{setShowLogo:m(()=>{let{isCollapse:r,layout:n}=o.state.themeConfig.themeConfig;return!r||n==="classic"||document.body.clientWidth<1e3}),getThemeConfig:g,onThemeConfigChange:()=>{if(o.state.themeConfig.themeConfig.layout==="transverse")return!1;l.mittBus.emit("onMenuClick"),o.state.themeConfig.themeConfig.isCollapse=!o.state.themeConfig.themeConfig.isCollapse}}}},S=`.layout-logo[data-v-651d8400] {
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 21, 41, 0.02) 0px 1px 4px;
  color: var(--color-primary);
  font-size: 16px;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;
}
.layout-logo:hover span[data-v-651d8400] {
  color: var(--color-primary-light-2);
}
.layout-logo-medium-img[data-v-651d8400] {
  width: 20px;
  margin-right: 5px;
}
.layout-logo-size[data-v-651d8400] {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  animation: logoAnimation 0.3s ease-in-out;
}
.layout-logo-size-img[data-v-651d8400] {
  width: 20px;
  margin: auto;
}
.layout-logo-size:hover img[data-v-651d8400] {
  animation: logoAnimation 0.3s ease-in-out;
}`;const y=f();p("data-v-651d8400");const v=a("img",{src:"https://gitee.com/lyt-top/vue-next-admin-images/raw/master/logo/logo-mini.svg",class:"layout-logo-medium-img"},null,-1),x=a("img",{src:"https://gitee.com/lyt-top/vue-next-admin-images/raw/master/logo/logo-mini.svg",class:"layout-logo-size-img"},null,-1);u();const _=y((l,o,g,e,d,r)=>(t(),i("div",null,[e.setShowLogo?(t(),i("div",{key:0,class:"layout-logo",onClick:o[1]||(o[1]=(...n)=>e.onThemeConfigChange&&e.onThemeConfigChange(...n))},[v,a("span",null,C(e.getThemeConfig.globalTitle),1)])):(t(),i("div",{key:1,class:"layout-logo-size",onClick:o[2]||(o[2]=(...n)=>e.onThemeConfigChange&&e.onThemeConfigChange(...n))},[x]))])));s.render=_,s.__scopeId="data-v-651d8400";export default s;
