import{u as m}from"./index.6243c594.js";import p from"./index.c68d320d.js";import _ from"./tagsView.0700d323.js";import{z as u,p as l,d as f,e as a,f as r,h as n,i as h,E as w,q as b}from"./vendor.445db117.js";import"./index.1bd1a64b.js";import"./user.ea276fb5.js";import"./screenfull.23c35388.js";import"./userNews.b377e347.js";import"./search.571cc864.js";import"./breadcrumb.2da6624b.js";import"./horizontal.5abd9ca4.js";import"./contextmenu.1ee0d478.js";var s={name:"LayoutNavBars",components:{BreadcrumbIndex:p,TagsView:_},setup(){const o=m();return{setShowTagsView:u(()=>{const{layout:t,isTagsview:e}=o.state.themeConfig.themeConfig;return t!=="classic"&&e})}}},L=`.layout-navbars-container[data-v-336d1806] {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;const v=b();l("data-v-336d1806");const x={class:"layout-navbars-container"};f();const g=v((o,c,t,e,j,V)=>{const d=a("BreadcrumbIndex"),i=a("TagsView");return r(),n("div",x,[h(d),e.setShowTagsView?(r(),n(i,{key:0})):w("",!0)])});s.render=g,s.__scopeId="data-v-336d1806";export default s;
