var x=Object.defineProperty;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var b=(e,n,t)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,l=(e,n)=>{for(var t in n||(n={}))y.call(n,t)&&b(e,t,n[t]);if(c)for(var t of c(n))f.call(n,t)&&b(e,t,n[t]);return e};import{a as w,t as h,p as F,d as _,e as g,f as s,h as a,i as r,l as u,E as p,F as C,W as k,q as E}from"./vendor.e37295fd.js";var d={name:"LayoutBreadcrumbUserNews",setup(){const e=w({newsList:[{label:"\u5173\u4E8E\u7248\u672C\u53D1\u5E03\u7684\u901A\u77E5",value:"freeVue,\u57FA\u4E8E vue3 + CompositionAPI + typescript + vite + element plus\uFF0C\u6B63\u5F0F\u53D1\u5E03\u65F6\u95F4\uFF1A2021\u5E7402\u670828\u65E5\uFF01",time:"2020-12-08"},{label:"\u5173\u4E8E\u7248\u672C\u53D1\u5E03\u7684\u901A\u77E5",value:"freeVue,vue3 + CompositionAPI + typescript + vite + element plus\uFF0C\u6B63\u5F0F\u53D1\u5E03\u65F6\u95F4\uFF1A2021\u5E7402\u670828\u65E5\uFF01",time:"2020-12-08"}]});return l({onGoToGiteeClick:()=>{window.open("https://gitee.com/lyt-top/vue-next-admin")},onAllReadClick:()=>{e.newsList=[]}},h(e))}},$=`.layout-navbars-breadcrumb-user-news .head-box[data-v-15bf9c7d] {
  display: flex;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
  color: #333333;
  justify-content: space-between;
  height: 35px;
  align-items: center;
}
.layout-navbars-breadcrumb-user-news .head-box .head-box-btn[data-v-15bf9c7d] {
  color: var(--color-primary);
  font-size: 13px;
  cursor: pointer;
  opacity: 0.8;
}
.layout-navbars-breadcrumb-user-news .head-box .head-box-btn[data-v-15bf9c7d]:hover {
  opacity: 1;
}
.layout-navbars-breadcrumb-user-news .content-box[data-v-15bf9c7d] {
  font-size: 13px;
}
.layout-navbars-breadcrumb-user-news .content-box .content-box-item[data-v-15bf9c7d] {
  padding-top: 12px;
}
.layout-navbars-breadcrumb-user-news .content-box .content-box-item[data-v-15bf9c7d]:last-of-type {
  padding-bottom: 12px;
}
.layout-navbars-breadcrumb-user-news .content-box .content-box-item .content-box-msg[data-v-15bf9c7d] {
  color: #999999;
  margin-top: 5px;
  margin-bottom: 5px;
}
.layout-navbars-breadcrumb-user-news .content-box .content-box-item .content-box-time[data-v-15bf9c7d] {
  color: #999999;
}
.layout-navbars-breadcrumb-user-news .foot-box[data-v-15bf9c7d] {
  height: 35px;
  color: var(--color-primary);
  font-size: 13px;
  cursor: pointer;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ebeef5;
}
.layout-navbars-breadcrumb-user-news .foot-box[data-v-15bf9c7d]:hover {
  opacity: 1;
}
.layout-navbars-breadcrumb-user-news[data-v-15bf9c7d] .el-empty__description p {
  font-size: 13px;
}`;const A=E();F("data-v-15bf9c7d");const G={class:"layout-navbars-breadcrumb-user-news"},L={class:"head-box"},I={class:"head-box-title"},B={class:"content-box"},D={class:"content-box-msg"},z={class:"content-box-time"};_();const R=A((e,n,t,i,T,N)=>{const m=g("el-empty");return s(),a("div",G,[r("div",L,[r("div",I,u(e.$t("message.user.newTitle")),1),e.newsList.length>0?(s(),a("div",{key:0,class:"head-box-btn",onClick:n[1]||(n[1]=(...o)=>i.onAllReadClick&&i.onAllReadClick(...o))},u(e.$t("message.user.newBtn")),1)):p("",!0)]),r("div",B,[e.newsList.length>0?(s(!0),a(C,{key:0},k(e.newsList,(o,v)=>(s(),a("div",{class:"content-box-item",key:v},[r("div",null,u(o.label),1),r("div",D,u(o.value),1),r("div",z,u(o.time),1)]))),128)):(s(),a(m,{key:1,description:e.$t("message.user.newDesc")},null,8,["description"]))]),e.newsList.length>0?(s(),a("div",{key:0,class:"foot-box",onClick:n[2]||(n[2]=(...o)=>i.onGoToGiteeClick&&i.onGoToGiteeClick(...o))},u(e.$t("message.user.newGo")),1)):p("",!0)])});d.render=R,d.__scopeId="data-v-15bf9c7d";export default d;
