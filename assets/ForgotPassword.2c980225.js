import{G as c,o as i,h as d,w as r,b as t,C as s,H as u,c as _,t as f,g as p,d as a,e as g,n as b,I as x}from"./app.d61ad275.js";import{_ as w}from"./GuestLayout.fa789835.js";import{a as V,_ as h}from"./TextInput.f78ee48c.js";import{_ as v}from"./InputLabel.0ffa1e21.js";import{_ as y}from"./PrimaryButton.9d26c2ad.js";import"./ApplicationLogo.c1bd9f3b.js";import"./_plugin-vue_export-helper.cdc0426e.js";const k=a("div",{class:"mb-4 text-sm text-gray-600"}," \u767B\u9332\u6642\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01 ",-1),$={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"flex items-center justify-end mt-4"},D={__name:"ForgotPassword",props:{status:String},setup(o){const e=c({email:""}),l=()=>{e.post(route("password.email"))};return(N,m)=>(i(),d(w,null,{default:r(()=>[t(s(u),{title:"Forgot Password"}),k,o.status?(i(),_("div",$,f(o.status),1)):p("",!0),a("form",{onSubmit:x(l,["prevent"])},[a("div",null,[t(v,{for:"email",value:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"}),t(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":m[0]||(m[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",C,[t(y,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[g(" \u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30E1\u30FC\u30EB\u3092\u9001\u4FE1 ")]),_:1},8,["class","disabled"])])],40,B)]),_:1}))}};export{D as default};