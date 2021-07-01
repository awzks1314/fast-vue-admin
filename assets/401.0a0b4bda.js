import{Z as l,p as c,d as f,e as d,f as m,h as p,i as e,l as n,k as _,q as h}from"./vendor.e7d55ea8.js";import{S as v}from"./index.5e7889b2.js";var o={name:"401",setup(){const t=l();return{onSetAuth:()=>{v.clear(),t.push("/login")}}}},N=`.error[data-v-52355cfb] {
  height: 100%;
  background-color: white;
  display: flex;
}
.error .error-flex[data-v-52355cfb] {
  margin: auto;
  display: flex;
  height: 350px;
  width: 900px;
}
.error .error-flex .left[data-v-52355cfb] {
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
}
.error .error-flex .left .left-item .left-item-animation[data-v-52355cfb] {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.error .error-flex .left .left-item .left-item-num[data-v-52355cfb] {
  color: #d6e0f6;
  font-size: 55px;
}
.error .error-flex .left .left-item .left-item-title[data-v-52355cfb] {
  font-size: 20px;
  color: #333333;
  margin: 15px 0 5px 0;
  animation-delay: 0.1s;
}
.error .error-flex .left .left-item .left-item-msg[data-v-52355cfb] {
  color: #c0bebe;
  font-size: 12px;
  margin-bottom: 30px;
  animation-delay: 0.2s;
}
.error .error-flex .left .left-item .left-item-btn[data-v-52355cfb] {
  animation-delay: 0.2s;
}
.error .error-flex .right[data-v-52355cfb] {
  flex: 1;
  opacity: 0;
  animation-name: error-img;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
.error .error-flex .right img[data-v-52355cfb] {
  width: 100%;
  height: 100%;
}`;const r=h();c("data-v-52355cfb");const g={class:"error"},u={class:"error-flex"},x={class:"left"},b={class:"left-item"},y=e("div",{class:"left-item-animation left-item-num"},"401",-1),S={class:"left-item-animation left-item-title"},w={class:"left-item-animation left-item-msg"},k={class:"left-item-animation left-item-btn"},A=e("div",{class:"right"},[e("img",{src:"https://gitee.com/lyt-top/vue-next-admin-images/raw/master/error/401.png"})],-1);f();const $=r((t,a,I,i,z,B)=>{const s=d("el-button");return m(),p("div",g,[e("div",u,[e("div",x,[e("div",b,[y,e("div",S,n(t.$t("message.noAccess.accessTitle")),1),e("div",w,n(t.$t("message.noAccess.accessMsg")),1),e("div",k,[e(s,{type:"primary",round:"",onClick:i.onSetAuth},{default:r(()=>[_(n(t.$t("message.noAccess.accessBtn")),1)]),_:1},8,["onClick"])])])]),A])])});o.render=$,o.__scopeId="data-v-52355cfb";export default o;
