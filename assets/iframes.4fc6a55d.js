var m=Object.defineProperty;var n=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(a,t,e)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,c=(a,t)=>{for(var e in t||(t={}))l.call(t,e)&&f(a,e,t[e]);if(n)for(var e of n(t))g.call(t,e)&&f(a,e,t[e]);return a};import{x as p,D as h,a as v,A as w,o as _,b as R,t as b,g as y,n as B,a1 as L,f as V,h as k,w as x,i as d}from"./vendor.445db117.js";var u=p({name:"layoutIfameView",props:{meta:{type:Object,default:()=>{}}},setup(a,{emit:t}){const{proxy:e}=y(),s=h(),o=v({iframeLoading:!0,iframeUrl:""}),i=()=>{B(()=>{o.iframeLoading=!0;const r=document.getElementById("iframe");if(!r)return!1;r.onload=()=>{o.iframeLoading=!1}})};return w(()=>{o.iframeUrl=a.meta.isLink,e.mittBus.on("onTagsViewRefreshRouterView",r=>{if(s.path!==r)return!1;t("getCurrentRouteMeta")})}),_(()=>{i()}),R(()=>{e.mittBus.off("onTagsViewRefreshRouterView",()=>{})}),c({},b(o))}});const I={class:"layout-scrollbar"},U={class:"layout-view-bg-white flex h100"};function $(a,t,e,s,o,i){const r=L("loading");return V(),k("div",I,[x(d("div",U,[d("iframe",{src:a.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,["src"])],512),[[r,a.iframeLoading]])])}u.render=$;export default u;
