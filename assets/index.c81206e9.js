import{u,L as a,_ as l}from"./index.d89cbfe3.js";import{Q as d,z as c,A as m,b as f,g as p,e as _,f as y,h as g,E as v}from"./vendor.e37295fd.js";var r={name:"Layout",components:{Defaults:d(()=>l(()=>import("./defaults.257c1439.js"),["/assets/defaults.257c1439.js","/assets/vendor.e37295fd.js","/assets/index.d89cbfe3.js","/assets/index.cfc0df5a.css","/assets/aside.37509cca.js","/assets/vertical.5e49951d.js","/assets/subItem.41f1821a.js","/assets/index.025ab48b.js","/assets/index.c1142635.css","/assets/header.a379bd20.js","/assets/index.c08f4196.js","/assets/index.a6286eea.css","/assets/index.5f4fd10b.js","/assets/index.876f0dfd.css","/assets/user.607e0afe.js","/assets/user.33850220.css","/assets/screenfull.ef113de4.js","/assets/userNews.d1900057.js","/assets/userNews.049c41bb.css","/assets/search.320b2c0f.js","/assets/search.57dee1b3.css","/assets/breadcrumb.9f4f7643.js","/assets/breadcrumb.10d3f29b.css","/assets/horizontal.b9a8c30c.js","/assets/tagsView.e7d3bd70.js","/assets/tagsView.5ab50fcf.css","/assets/contextmenu.1bdb2bbd.js","/assets/contextmenu.c94c3df7.css","/assets/main.b8c8e533.js","/assets/index.0b42a348.js","/assets/index.c2603551.css","/assets/parent.c4b8e609.js","/assets/link.acb98597.js","/assets/iframes.7cb7af7f.js"]))},setup(){const{proxy:o}=p(),n=u(),s=c(()=>n.state.themeConfig.themeConfig),e=()=>{const t=document.body.clientWidth;t<1e3?(s.value.isCollapse=!1,o.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:t})):o.mittBus.emit("layoutMobileResize",{layout:a.get("oldLayout")?a.get("oldLayout"):"defaults",clientWidth:t})};return m(()=>{e(),window.addEventListener("resize",e)}),f(()=>{window.removeEventListener("resize",e)}),{getThemeConfig:s}}};function C(o,n,s,e,t,L){const i=_("Defaults");return e.getThemeConfig.layout==="defaults"?(y(),g(i,{key:0})):v("",!0)}r.render=C;export default r;
