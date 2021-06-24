var k=Object.defineProperty;var b=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var I=(e,n,t)=>n in e?k(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))y.call(n,t)&&I(e,t,n[t]);if(b)for(var t of b(n))F.call(n,t)&&I(e,t,n[t]);return e};import{x as S,y as C,D as q,X as V,a as $,z as B,t as L,s as N,g as A,p as P,d as R,e as u,f as T,h as D,i as o,l as U,q as j}from"./vendor.445db117.js";import{u as z,S as v,i as E,a as M,f as X}from"./index.70b52c15.js";var g=S({name:"Login",setup(){const{t:e}=C(),{proxy:n}=A(),t=z();q();const h=V(),l=$({ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),m=B(()=>X(new Date)),d=async()=>{l.loading.signIn=!0;let a=[],i=[];const p=["admin"],f=["btn.add","btn.del","btn.edit","btn.link"],c=["test"],x=["btn.add","btn.link"];l.ruleForm.userName==="admin"?(a=p,i=f):(a=c,i=x);const _={userName:l.ruleForm.userName,photo:l.ruleForm.userName==="admin"?"https://q1.qlogo.cn/g?b=qq&nk=1401452384&s=100":"https://q1.qlogo.cn/g?b=qq&nk=54187454&s=100",time:new Date().getTime(),authPageList:a,authBtnList:i};v.set("token",Math.random().toString(36).substr(0)),v.set("userInfo",_),t.dispatch("userInfos/setUserInfos",_),t.state.themeConfig.themeConfig.isRequestRoutes?(await M(),r()):(await E(),r())},r=()=>{const a=m.value;h.push("/"),setTimeout(()=>{l.loading.signIn=!0;const i=e("message.signInText");N.success(`${a}\uFF0C${i}`),n.mittBus.emit("onSignInClick")},300)};return w({currentTime:m,onSignIn:d},L(l))}}),Q=`.login-content-form[data-v-e92b58fe] {
  margin-top: 20px;
}
.login-content-form .login-content-code[data-v-e92b58fe] {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.login-content-form .login-content-code .login-content-code-img[data-v-e92b58fe] {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  color: #333;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 5px;
  text-indent: 5px;
  text-align: center;
  cursor: pointer;
  transition: all ease 0.2s;
  border-radius: 4px;
  user-select: none;
}
.login-content-form .login-content-code .login-content-code-img[data-v-e92b58fe]:hover {
  border-color: #c0c4cc;
  transition: all ease 0.2s;
}
.login-content-form .login-content-submit[data-v-e92b58fe] {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
}`;const s=j();P("data-v-e92b58fe");const G=o("div",{class:"login-content-code"},[o("span",{class:"login-content-code-img"},"1234")],-1);R();const H=s((e,n,t,h,l,m)=>{const d=u("el-input"),r=u("el-form-item"),a=u("el-col"),i=u("el-row"),p=u("el-button"),f=u("el-form");return T(),D(f,{class:"login-content-form"},{default:s(()=>[o(r,null,{default:s(()=>[o(d,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:e.ruleForm.userName,"onUpdate:modelValue":n[1]||(n[1]=c=>e.ruleForm.userName=c),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),o(r,null,{default:s(()=>[o(d,{type:"password",placeholder:e.$t("message.account.accountPlaceholder2"),"prefix-icon":"el-icon-lock",modelValue:e.ruleForm.password,"onUpdate:modelValue":n[2]||(n[2]=c=>e.ruleForm.password=c),autocomplete:"off","show-password":""},null,8,["placeholder","modelValue"])]),_:1}),o(r,null,{default:s(()=>[o(i,{gutter:15},{default:s(()=>[o(a,{span:16},{default:s(()=>[o(d,{type:"text",maxlength:"4",placeholder:e.$t("message.account.accountPlaceholder3"),"prefix-icon":"el-icon-position",modelValue:e.ruleForm.code,"onUpdate:modelValue":n[3]||(n[3]=c=>e.ruleForm.code=c),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),o(a,{span:8},{default:s(()=>[G]),_:1})]),_:1})]),_:1}),o(r,null,{default:s(()=>[o(p,{type:"primary",class:"login-content-submit",round:"",onClick:e.onSignIn,loading:e.loading.signIn},{default:s(()=>[o("span",null,U(e.$t("message.account.accountBtnText")),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})});g.render=H,g.__scopeId="data-v-e92b58fe";export default g;
