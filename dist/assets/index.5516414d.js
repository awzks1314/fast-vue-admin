import{u as e,g as t,_ as a}from"./index.5984ac80.js";import{k as o,l as s,o as i,n,p as u,r as d,a as l,c as r,q as m}from"./vendor.bc41add3.js";var f={name:"Layout",components:{Defaults:o((()=>a((()=>import("./defaults.5a6f47dd.js")),["/freeVue/assets/defaults.5a6f47dd.js","/freeVue/assets/defaults.401d81b6.css","/freeVue/assets/vendor.bc41add3.js","/freeVue/assets/index.5984ac80.js","/freeVue/assets/index.ae9b2042.css"])))},setup(){const{proxy:a}=u(),o=e(),d=s((()=>o.state.themeConfig.themeConfig)),l=()=>{const e=document.body.clientWidth;e<1e3?(d.value.isCollapse=!1,a.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:e})):a.mittBus.emit("layoutMobileResize",{layout:t("oldLayout")?t("oldLayout"):"defaults",clientWidth:e})};return i((()=>{l(),window.addEventListener("resize",l)})),n((()=>{window.removeEventListener("resize",l)})),{getThemeConfig:d}}};f.render=function(e,t,a,o,s,i){const n=d("Defaults");return"defaults"===o.getThemeConfig.layout?(l(),r(n,{key:0})):m("",!0)};export default f;