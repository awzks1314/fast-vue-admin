var x=Object.defineProperty;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var S=(t,n,o)=>n in t?x(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,y=(t,n)=>{for(var o in n||(n={}))M.call(n,o)&&S(t,o,n[o]);if(b)for(var o of b(n))T.call(n,o)&&S(t,o,n[o]);return t};import{u as B}from"./index.5e7889b2.js";import{x as U,D as w,a as F,z as C,$ as j,t as k,g as R,e as d,f,h,U as a,F as W,S as z,i as r,l as L,a0 as q,B as $,A as D,b as N,E as A}from"./vendor.e7d55ea8.js";import{b as O,c as E}from"./main.8d0d1594.js";var I=U({name:"navMenuVertical",components:{SubItem:O},props:{menuList:{type:Array,default:()=>[]}},setup(t){const{proxy:n}=R(),o=B(),l=w(),p=F({defaultActive:l.path}),g=C(()=>t.menuList),i=C(()=>o.state.themeConfig.themeConfig),c=C(()=>document.body.clientWidth<1e3?!1:i.value.isCollapse);return j(m=>{p.defaultActive=m.path,n.mittBus.emit("onMenuClick"),document.body.clientWidth<1e3&&(i.value.isCollapse=!1)}),y({menuLists:g,getThemeConfig:i,setIsCollapse:c},k(p))}});function H(t,n,o,l,p,g){const i=d("SubItem"),c=d("el-submenu"),m=d("el-menu-item"),s=d("el-menu");return f(),h(s,{router:"","default-active":t.defaultActive,"background-color":"transparent",collapse:t.setIsCollapse,"unique-opened":t.getThemeConfig.isUniqueOpened,"collapse-transition":!1},{default:a(()=>[(f(!0),h(W,null,z(t.menuLists,e=>(f(),h(W,null,[e.children&&e.children.length>0?(f(),h(c,{index:e.path,key:e.path},{title:a(()=>[r("i",{class:e.meta.icon?e.meta.icon:""},null,2),r("span",null,L(t.$t(e.meta.title)),1)]),default:a(()=>[r(i,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(f(),h(m,{index:e.path,key:e.path},q({default:a(()=>[r("i",{class:e.meta.icon?e.meta.icon:""},null,2)]),_:2},[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?{name:"title",fn:a(()=>[r("span",null,L(t.$t(e.meta.title)),1)])}:{name:"title",fn:a(()=>[r("a",{href:e.meta.isLink,target:"_blank"},L(t.$t(e.meta.title)),9,["href"])])}]),1032,["index"]))],64))),256))]),_:1},8,["default-active","collapse","unique-opened"])}I.render=H;var V={name:"layoutAside",components:{Logo:E,Vertical:I},setup(){const{proxy:t}=R(),n=B();w();const o=F({menuList:[],clientWidth:""}),l=C(()=>n.state.themeConfig.themeConfig),p=C(()=>{let{layout:s,isCollapse:e,menuBar:u}=n.state.themeConfig.themeConfig,_=u==="#FFFFFF"||u==="#FFF"||u==="#fff"||u==="#ffffff"?"layout-el-aside-br-color":"";return s==="columns"?e?["layout-aside-width1",_]:["layout-aside-width-default",_]:e?["layout-aside-width64",_]:["layout-aside-width-default",_]}),g=C(()=>{let{layout:s,isShowLogo:e}=n.state.themeConfig.themeConfig;return e&&s==="defaults"||e&&s==="columns"}),i=()=>{if(n.state.themeConfig.themeConfig.layout==="columns")return!1;o.menuList=c(n.state.routesList.routesList)},c=s=>s.filter(e=>!e.meta.isHide).map(e=>(e=Object.assign({},e),e.children&&(e.children=c(e.children)),e)),m=s=>{o.clientWidth=s};return $(n.state.themeConfig.themeConfig,s=>{if(s.isShowLogoChange!==s.isShowLogo){if(!t.$refs.layoutAsideScrollbarRef)return!1;t.$refs.layoutAsideScrollbarRef.update()}}),$(n.state,s=>{if(s.routesList.routesList.length===o.menuList.length)return!1;let{layout:e,isClassicSplitMenu:u}=s.themeConfig.themeConfig;if(e==="classic"&&u)return!1;i()}),D(()=>{m(document.body.clientWidth),i(),t.mittBus.on("setSendColumnsChildren",s=>{o.menuList=s.children}),t.mittBus.on("setSendClassicChildren",s=>{let{layout:e,isClassicSplitMenu:u}=n.state.themeConfig.themeConfig;e==="classic"&&u&&(o.menuList=[],o.menuList=s.children)}),t.mittBus.on("getBreadcrumbIndexSetFilterRoutes",()=>{i()}),t.mittBus.on("layoutMobileResize",s=>{m(s.clientWidth)})}),N(()=>{t.mittBus.off("setSendColumnsChildren"),t.mittBus.off("setSendClassicChildren"),t.mittBus.off("getBreadcrumbIndexSetFilterRoutes"),t.mittBus.off("layoutMobileResize")}),y({setCollapseWidth:p,setShowLogo:g,getThemeConfig:l},k(o))}};function G(t,n,o,l,p,g){const i=d("Logo"),c=d("Vertical"),m=d("el-scrollbar"),s=d("el-aside"),e=d("el-drawer");return t.clientWidth>1e3?(f(),h(s,{key:0,class:["layout-aside",l.setCollapseWidth]},{default:a(()=>[l.setShowLogo?(f(),h(i,{key:0})):A("",!0),r(m,{class:"flex-sub",ref:"layoutAsideScrollbarRef"},{default:a(()=>[r(c,{menuList:t.menuList,class:l.setCollapseWidth},null,8,["menuList","class"])]),_:1},512)]),_:1},8,["class"])):(f(),h(e,{key:1,modelValue:l.getThemeConfig.isCollapse,"onUpdate:modelValue":n[1]||(n[1]=u=>l.getThemeConfig.isCollapse=u),"with-header":!1,direction:"ltr",size:"220px"},{default:a(()=>[r(s,{class:"layout-aside w100 h100"},{default:a(()=>[l.setShowLogo?(f(),h(i,{key:0})):A("",!0),r(m,{class:"flex-sub",ref:"layoutAsideScrollbarRef"},{default:a(()=>[r(c,{menuList:t.menuList},null,8,["menuList"])]),_:1},512)]),_:1})]),_:1},8,["modelValue"]))}V.render=G;export{V as _};
