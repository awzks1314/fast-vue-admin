import u from"./aside.2a0e1d1c.js";import j from"./header.a9e13d0d.js";import b from"./main.2c069da0.js";import g from"./tagsView.9fa0aa08.js";import{u as h}from"./index.70b52c15.js";import{z as x,e,f as s,h as n,S as r,i as t,E as C}from"./vendor.445db117.js";import"./index.1cf1fa5a.js";import"./vertical.aa2dc5ab.js";import"./subItem.bde88858.js";import"./index.065256c4.js";import"./index.50d689c6.js";import"./user.1d1bf956.js";import"./screenfull.23c35388.js";import"./userNews.b377e347.js";import"./search.3285671c.js";import"./breadcrumb.ca8d1321.js";import"./horizontal.d03789b4.js";import"./contextmenu.1ee0d478.js";import"./index.660abd3f.js";import"./parent.58a3135d.js";import"./link.e0fbc04b.js";import"./iframes.4fc6a55d.js";var i={name:"LayoutClassic",components:{Aside:u,Header:j,Main:b,TagsView:g},setup(){const o=h();return{getThemeConfig:x(()=>o.state.themeConfig.themeConfig)}}};const k={class:"flex-center layout-backtop"};function w(o,c,T,m,$,v){const p=e("Header"),d=e("Aside"),_=e("TagsView"),f=e("Main"),a=e("el-container"),l=e("el-backtop");return s(),n(a,{class:"layout-container flex-center"},{default:r(()=>[t(p),t(a,{class:"layout-mian-height-50"},{default:r(()=>[t(d),t("div",k,[m.getThemeConfig.isTagsview?(s(),n(_,{key:0})):C("",!0),t(f)])]),_:1}),t(l,{target:".layout-backtop .el-main .el-scrollbar__wrap"})]),_:1})}i.render=w;export default i;
