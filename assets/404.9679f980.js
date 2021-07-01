import{Z as d,p as f,d as l,e as m,f as c,h as p,i as e,l as n,k as _,q as h}from"./vendor.e7d55ea8.js";var o={name:"404",setup(){const t=d();return{onGoHome:()=>{t.push("/")}}}},F=`.error[data-v-553adf1f] {
  height: 100%;
  background-color: white;
  display: flex;
}
.error .error-flex[data-v-553adf1f] {
  margin: auto;
  display: flex;
  height: 350px;
  width: 900px;
}
.error .error-flex .left[data-v-553adf1f] {
  flex: 1;
  height: 100%;
  align-items: center;
  display: flex;
}
.error .error-flex .left .left-item .left-item-animation[data-v-553adf1f] {
  opacity: 0;
  animation-name: error-num;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.error .error-flex .left .left-item .left-item-num[data-v-553adf1f] {
  color: #d6e0f6;
  font-size: 55px;
}
.error .error-flex .left .left-item .left-item-title[data-v-553adf1f] {
  font-size: 20px;
  color: #333333;
  margin: 15px 0 5px 0;
  animation-delay: 0.1s;
}
.error .error-flex .left .left-item .left-item-msg[data-v-553adf1f] {
  color: #c0bebe;
  font-size: 12px;
  margin-bottom: 30px;
  animation-delay: 0.2s;
}
.error .error-flex .left .left-item .left-item-btn[data-v-553adf1f] {
  animation-delay: 0.2s;
}
.error .error-flex .right[data-v-553adf1f] {
  flex: 1;
  opacity: 0;
  animation-name: error-img;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}
.error .error-flex .right img[data-v-553adf1f] {
  width: 100%;
  height: 100%;
}`;const a=h();f("data-v-553adf1f");const u={class:"error"},v={class:"error-flex"},g={class:"left"},x={class:"left-item"},y=e("div",{class:"left-item-animation left-item-num"},"404",-1),b={class:"left-item-animation left-item-title"},w={class:"left-item-animation left-item-msg"},k={class:"left-item-animation left-item-btn"},$=e("div",{class:"right"},[e("img",{src:"https://gitee.com/lyt-top/vue-next-admin-images/raw/master/error/404.png"})],-1);l();const I=a((t,r,S,i,z,B)=>{const s=m("el-button");return c(),p("div",u,[e("div",v,[e("div",g,[e("div",x,[y,e("div",b,n(t.$t("message.notFound.foundTitle")),1),e("div",w,n(t.$t("message.notFound.foundMsg")),1),e("div",k,[e(s,{type:"primary",round:"",onClick:i.onGoHome},{default:a(()=>[_(n(t.$t("message.notFound.foundBtn")),1)]),_:1},8,["onClick"])])])]),$])])});o.render=I,o.__scopeId="data-v-553adf1f";export default o;
