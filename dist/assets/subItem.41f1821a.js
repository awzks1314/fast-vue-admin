import{z as _,e as r,f as t,h as n,F as a,W as f,S as c,i,l as o,k}from"./vendor.e37295fd.js";var u={name:"NavMenuSubItem",props:{chil:{type:Array,default:()=>[]}},setup(s){return{chils:_(()=>s.chil)}}};function y(s,l,m,b,$,x){const d=r("sub-item",!0),p=r("el-submenu"),h=r("el-menu-item");return t(),n("div",null,[(t(!0),n(a,null,f(m.chil,e=>(t(),n(a,null,[e.children&&e.children.length>0?(t(),n(p,{index:e.path,key:e.path},{title:c(()=>[i("i",{class:e.meta.icon},null,2),i("span",null,o(s.$t(e.meta.title)),1)]),default:c(()=>[i(d,{chil:e.children},null,8,["chil"])]),_:2},1032,["index"])):(t(),n(h,{index:e.path,key:e.path},{default:c(()=>[!e.meta.isLink||e.meta.isLink&&e.meta.isIframe?(t(),n(a,{key:0},[i("i",{class:e.meta.icon?e.meta.icon:""},null,2),i("span",null,o(s.$t(e.meta.title)),1)],64)):(t(),n("a",{key:1,href:e.meta.isLink,target:"_blank"},[i("i",{class:e.meta.icon?e.meta.icon:""},null,2),k(" "+o(s.$t(e.meta.title)),1)],8,["href"]))]),_:2},1032,["index"]))],64))),256))])}u.render=y;export default u;
