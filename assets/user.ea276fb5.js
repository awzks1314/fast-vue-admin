var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var z=(e,s,t)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,B=(e,s)=>{for(var t in s||(s={}))P.call(s,t)&&z(e,t,s[t]);if(N)for(var t of N(s))j.call(s,t)&&z(e,t,s[t]);return e};import{y as x,X as E,r as $,a as D,z as S,o as R,t as F,s as T,H as M,g as H,p as q,d as V,e as m,f as A,h as X,i as n,T as G,w as J,v as K,k as d,l as f,q as Q}from"./vendor.445db117.js";import{s as O}from"./screenfull.23c35388.js";import{u as W,L as p,S as Y,r as Z}from"./index.6243c594.js";import ee from"./userNews.b377e347.js";import ne from"./search.571cc864.js";var k={name:"layoutBreadcrumbUser",components:{UserNews:ee,Search:ne},setup(){const{t:e}=x(),{proxy:s}=H(),t=E(),a=W(),h=$(),u=D({isScreenfull:!1,isShowUserNewsPopover:!1,disabledI18n:!1}),l=S(()=>a.state.userInfos.userInfos),b=S(()=>a.state.themeConfig.themeConfig),g=S(()=>{let{layout:i,isClassicSplitMenu:y}=b.value,c="";return i==="defaults"||i==="classic"&&!y||i==="columns"?c=1:c=null,c}),v=()=>{if(!O.isEnabled)return T.warning("\u6682\u4E0D\u4E0D\u652F\u6301\u5168\u5C4F"),!1;O.toggle(),u.isScreenfull=!u.isScreenfull},w=()=>{s.mittBus.emit("openSetingsDrawer")},_=i=>{i==="logOut"?M({closeOnClickModal:!1,closeOnPressEscape:!1,title:e("message.user.logOutTitle"),message:e("message.user.logOutMessage"),showCancelButton:!0,confirmButtonText:e("message.user.logOutConfirm"),cancelButtonText:e("message.user.logOutCancel"),beforeClose:(y,c,U)=>{y==="confirm"?(c.confirmButtonLoading=!0,c.confirmButtonText=e("message.user.logOutExit"),setTimeout(()=>{U(),setTimeout(()=>{c.confirmButtonLoading=!1},300)},700)):U()}}).then(()=>{Y.clear(),Z(),t.push("/login"),setTimeout(()=>{T.success(e("message.user.logOutSuccess"))},300)}).catch(()=>{}):t.push(i)},C=()=>{h.value.openSearch()},r=i=>{p.remove("themeConfig"),b.value.globalI18n=i,p.set("themeConfig",b.value),s.$i18n.locale=i,I()},I=()=>{switch(p.get("themeConfig").globalI18n){case"zh-cn":u.disabledI18n="zh-cn";break;case"en":u.disabledI18n="en";break;case"zh-tw":u.disabledI18n="zh-tw";break}};return R(()=>{p.get("themeConfig")&&I()}),B({getUserInfos:l,onLayoutSetingClick:w,onHandleCommandClick:_,onScreenfullClick:v,onSearchClick:C,onLanguageChange:r,searchRef:h,layoutUserFlexNum:g},F(u))}},pe=`.layout-navbars-breadcrumb-user[data-v-1b1d5fda] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.layout-navbars-breadcrumb-user-link[data-v-1b1d5fda] {
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.layout-navbars-breadcrumb-user-link-photo[data-v-1b1d5fda] {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}
.layout-navbars-breadcrumb-user-icon[data-v-1b1d5fda] {
  padding: 0 10px;
  cursor: pointer;
  color: var(--bg-topBarColor);
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
}
.layout-navbars-breadcrumb-user-icon[data-v-1b1d5fda]:hover {
  background: rgba(0, 0, 0, 0.04);
}
.layout-navbars-breadcrumb-user-icon:hover i[data-v-1b1d5fda] {
  display: inline-block;
  animation: logoAnimation 0.3s ease-in-out;
}
.layout-navbars-breadcrumb-user[data-v-1b1d5fda] .el-dropdown {
  color: var(--bg-topBarColor);
}
.layout-navbars-breadcrumb-user[data-v-1b1d5fda] .el-badge {
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
}
.layout-navbars-breadcrumb-user[data-v-1b1d5fda] .el-badge__content.is-fixed {
  top: 12px;
}`;const o=Q();q("data-v-1b1d5fda");const se={class:"layout-navbars-breadcrumb-user-icon"},oe=d("\u7B80\u4F53\u4E2D\u6587"),ae=d("English"),te=d("\u7E41\u9AD4\u4E2D\u6587"),re={class:"layout-navbars-breadcrumb-user-icon"},le={class:"layout-navbars-breadcrumb-user-link"},ie=n("i",{class:"el-icon-arrow-down el-icon--right"},null,-1);V();const de=o((e,s,t,a,h,u)=>{const l=m("el-dropdown-item"),b=m("el-dropdown-menu"),g=m("el-dropdown"),v=m("el-badge"),w=m("UserNews"),_=m("el-popover"),C=m("Search");return A(),X("div",{class:"layout-navbars-breadcrumb-user",style:{flex:a.layoutUserFlexNum}},[n(g,{"show-timeout":70,"hide-timeout":50,trigger:"click",onCommand:a.onLanguageChange},{dropdown:o(()=>[n(b,null,{default:o(()=>[n(l,{command:"zh-cn",disabled:e.disabledI18n==="zh-cn"},{default:o(()=>[oe]),_:1},8,["disabled"]),n(l,{command:"en",disabled:e.disabledI18n==="en"},{default:o(()=>[ae]),_:1},8,["disabled"]),n(l,{command:"zh-tw",disabled:e.disabledI18n==="zh-tw"},{default:o(()=>[te]),_:1},8,["disabled"])]),_:1})]),default:o(()=>[n("div",se,[n("i",{class:["iconfont",e.disabledI18n==="en"?"icon-fuhao-yingwen":"icon-fuhao-zhongwen"],title:e.$t("message.user.title1")},null,10,["title"])])]),_:1},8,["onCommand"]),n("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:s[1]||(s[1]=(...r)=>a.onSearchClick&&a.onSearchClick(...r))},[n("i",{class:"el-icon-search",title:e.$t("message.user.title2")},null,8,["title"])]),n("div",{class:"layout-navbars-breadcrumb-user-icon",onClick:s[2]||(s[2]=(...r)=>a.onLayoutSetingClick&&a.onLayoutSetingClick(...r))},[n("i",{class:"icon-skin iconfont",title:e.$t("message.user.title3")},null,8,["title"])]),n("div",re,[n(_,{placement:"bottom",trigger:"click",visible:e.isShowUserNewsPopover,"onUpdate:visible":s[4]||(s[4]=r=>e.isShowUserNewsPopover=r),width:300,"popper-class":"el-popover-pupop-user-news"},{reference:o(()=>[n(v,{"is-dot":!0,onClick:s[3]||(s[3]=r=>e.isShowUserNewsPopover=!e.isShowUserNewsPopover)},{default:o(()=>[n("i",{class:"el-icon-bell",title:e.$t("message.user.title4")},null,8,["title"])]),_:1})]),default:o(()=>[n(G,{name:"el-zoom-in-top"},{default:o(()=>[J(n(w,null,null,512),[[K,e.isShowUserNewsPopover]])]),_:1})]),_:1},8,["visible"])]),n("div",{class:"layout-navbars-breadcrumb-user-icon mr10",onClick:s[5]||(s[5]=(...r)=>a.onScreenfullClick&&a.onScreenfullClick(...r))},[n("i",{class:["iconfont",e.isScreenfull?"icon-tuichuquanping":"icon-fullscreen"],title:e.isScreenfull?e.$t("message.user.title5"):e.$t("message.user.title6")},null,10,["title"])]),n(g,{"show-timeout":70,"hide-timeout":50,onCommand:a.onHandleCommandClick},{dropdown:o(()=>[n(b,null,{default:o(()=>[n(l,{command:"/home"},{default:o(()=>[d(f(e.$t("message.user.dropdown1")),1)]),_:1}),n(l,{command:"/404"},{default:o(()=>[d(f(e.$t("message.user.dropdown3")),1)]),_:1}),n(l,{command:"/401"},{default:o(()=>[d(f(e.$t("message.user.dropdown4")),1)]),_:1}),n(l,{divided:"",command:"logOut"},{default:o(()=>[d(f(e.$t("message.user.dropdown5")),1)]),_:1})]),_:1})]),default:o(()=>[n("span",le,[n("img",{src:a.getUserInfos.photo,class:"layout-navbars-breadcrumb-user-link-photo mr5"},null,8,["src"]),d(" "+f(a.getUserInfos.userName===""?"test":a.getUserInfos.userName)+" ",1),ie])]),_:1},8,["onCommand"]),n(C,{ref:"searchRef"},null,512)],4)});k.render=de,k.__scopeId="data-v-1b1d5fda";export default k;
