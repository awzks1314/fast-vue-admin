import{u as m}from"./index.d89cbfe3.js";import p from"./index.5f4fd10b.js";import _ from"./tagsView.e7d3bd70.js";import{z as u,p as f,d as b,e as a,f as r,h as n,i as l,E as h,q as w}from"./vendor.e37295fd.js";import"./index.025ab48b.js";import"./user.607e0afe.js";import"./screenfull.ef113de4.js";import"./userNews.d1900057.js";import"./search.320b2c0f.js";import"./breadcrumb.9f4f7643.js";import"./horizontal.b9a8c30c.js";import"./contextmenu.1bdb2bbd.js";var s={name:"LayoutNavBars",components:{BreadcrumbIndex:p,TagsView:_},setup(){const o=m();return{setShowTagsView:u(()=>{const{layout:t,isTagsview:e}=o.state.themeConfig.themeConfig;return t!=="classic"&&e})}}},L=`.layout-navbars-container[data-v-336d1806] {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;const v=w();f("data-v-336d1806");const x={class:"layout-navbars-container"};b();const g=v((o,c,t,e,j,V)=>{const d=a("BreadcrumbIndex"),i=a("TagsView");return r(),n("div",x,[l(d),e.setShowTagsView?(r(),n(i,{key:0})):h("",!0)])});s.render=g,s.__scopeId="data-v-336d1806";export default s;
