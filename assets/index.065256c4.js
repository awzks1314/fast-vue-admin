import{u as m}from"./index.70b52c15.js";import p from"./index.50d689c6.js";import _ from"./tagsView.9fa0aa08.js";import{z as u,p as f,d as l,e as o,f as r,h as n,i as h,E as w,q as b}from"./vendor.445db117.js";import"./index.1cf1fa5a.js";import"./user.1d1bf956.js";import"./screenfull.23c35388.js";import"./userNews.b377e347.js";import"./search.3285671c.js";import"./breadcrumb.ca8d1321.js";import"./horizontal.d03789b4.js";import"./subItem.bde88858.js";import"./contextmenu.1ee0d478.js";var s={name:"LayoutNavBars",components:{BreadcrumbIndex:p,TagsView:_},setup(){const a=m();return{setShowTagsView:u(()=>{const{layout:t,isTagsview:e}=a.state.themeConfig.themeConfig;return t!=="classic"&&e})}}},A=`.layout-navbars-container[data-v-dae38dca] {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;const v=b();f("data-v-dae38dca");const j={class:"layout-navbars-container"};l();const x=v((a,c,t,e,g,I)=>{const d=o("BreadcrumbIndex"),i=o("TagsView");return r(),n("div",j,[h(d),e.setShowTagsView?(r(),n(i,{key:0})):w("",!0)])});s.render=x,s.__scopeId="data-v-dae38dca";export default s;
