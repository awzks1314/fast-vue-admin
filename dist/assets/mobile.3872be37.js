var v=Object.defineProperty;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var c=(e,o,t)=>o in e?v(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,_=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&c(e,t,o[t]);if(i)for(var t of i(o))V.call(o,t)&&c(e,t,o[t]);return e};import{x as $,a as x,t as y,e as a,f as w,h as F,i as l,k as N,l as f,q as k}from"./vendor.e37295fd.js";var m=$({name:"Login",setup(){const e=x({ruleForm:{userName:"",code:""}});return _({},y(e))}}),j=`.login-content-form[data-v-0753bb15] {
  margin-top: 20px;
}
.login-content-form .login-content-submit[data-v-0753bb15] {
  width: 100%;
  letter-spacing: 2px;
  font-weight: 300;
  margin-top: 15px;
}`;const n=k(),I=n((e,o,t,T,B,C)=>{const p=a("el-input"),r=a("el-form-item"),u=a("el-col"),d=a("el-button"),b=a("el-row"),g=a("el-form");return w(),F(g,{class:"login-content-form"},{default:n(()=>[l(r,null,{default:n(()=>[l(p,{type:"text",placeholder:e.$t("message.mobile.placeholder1"),"prefix-icon":"el-icon-user",modelValue:e.ruleForm.userName,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ruleForm.userName=s),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),l(r,null,{default:n(()=>[l(b,{gutter:15},{default:n(()=>[l(u,{span:16},{default:n(()=>[l(p,{type:"text",maxlength:"4",placeholder:e.$t("message.mobile.placeholder2"),"prefix-icon":"el-icon-position",modelValue:e.ruleForm.code,"onUpdate:modelValue":o[2]||(o[2]=s=>e.ruleForm.code=s),clearable:"",autocomplete:"off"},null,8,["placeholder","modelValue"])]),_:1}),l(u,{span:8},{default:n(()=>[l(d,null,{default:n(()=>[N(f(e.$t("message.mobile.codeText")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(r,null,{default:n(()=>[l(d,{type:"primary",class:"login-content-submit",round:""},{default:n(()=>[l("span",null,f(e.$t("message.mobile.btnText")),1)]),_:1})]),_:1})]),_:1})});m.render=I,m.__scopeId="data-v-0753bb15";export default m;