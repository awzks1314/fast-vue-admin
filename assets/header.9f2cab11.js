import{u as c}from"./index.6243c594.js";import d from"./index.16713dd8.js";import{z as m,e as r,f as p,h as u,S as h,i as f}from"./vendor.445db117.js";import"./index.c68d320d.js";import"./index.1bd1a64b.js";import"./user.ea276fb5.js";import"./screenfull.23c35388.js";import"./userNews.b377e347.js";import"./search.571cc864.js";import"./breadcrumb.2da6624b.js";import"./horizontal.5abd9ca4.js";import"./tagsView.0700d323.js";import"./contextmenu.1ee0d478.js";var o={name:"LayoutHeader",components:{NavBarsIndex:d},setup(){const t=c();return{setHeaderHeight:m(()=>{const{isTagsview:s,layout:e}=t.state.themeConfig.themeConfig;return s&&e!=="classic"?"84px":"50px"})}}};function l(t,a,s,e,_,j){const n=r("NavBarsIndex"),i=r("el-header");return p(),u(i,{class:"layout-header",height:e.setHeaderHeight},{default:h(()=>[f(n)]),_:1},8,["height"])}o.render=l;export default o;