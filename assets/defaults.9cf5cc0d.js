import{D as x,z as y,B as k,g as h,e,f as o,h as r,U as s,i as t,E as d}from"./vendor.e7d55ea8.js";import{u as H}from"./index.5e7889b2.js";import{_ as C}from"./aside.ffac8e1e.js";import{_ as $,a as g}from"./main.8d0d1594.js";import"./parent.5b1c98d2.js";var p={name:"LayoutDefaults",components:{Aside:C,Header:$,Main:g},setup(){const{proxy:n}=h(),c=H(),l=x(),a=y(()=>c.state.themeConfig.themeConfig.isFixedHeader);return k(()=>l.path,()=>{n.$refs.layoutDefaultsScrollbarRef.wrap.scrollTop=0}),{isFixedHeader:a}}};function j(n,c,l,a,w,D){const m=e("Aside"),i=e("Header"),f=e("Main"),u=e("el-scrollbar"),_=e("el-container"),b=e("el-backtop");return o(),r(_,{class:"layout-container"},{default:s(()=>[t(m),t(_,{class:"flex-center layout-backtop"},{default:s(()=>[a.isFixedHeader?(o(),r(i,{key:0})):d("",!0),t(u,{ref:"layoutDefaultsScrollbarRef"},{default:s(()=>[a.isFixedHeader?d("",!0):(o(),r(i,{key:0})),t(f)]),_:1},512)]),_:1}),t(b,{target:"layout-container .layout-backtop  .el-scrollbar__wrap"})]),_:1})}p.render=j;export default p;