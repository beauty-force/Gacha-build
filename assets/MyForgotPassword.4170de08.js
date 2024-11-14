import{A as f}from"./UserLayout.d64ee008.js";import{a as _,_ as b}from"./TextInput.f2b28d99.js";import{_ as h}from"./InputLabel.6a6c37fe.js";import{_ as x}from"./PrimaryButton.94116c41.js";import{H as y,L as g,G as w,r as n,o as r,h as v,w as k,b as L,d as t,c as m,t as d,g as l,I as B,J as A,K as C,n as F}from"./app.743f8b50.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.18430f1d.js";const I={components:{Head:y,AppLayout:f,InputError:_,InputLabel:h,TextInput:b,Link:g,PrimaryButton:x},data:()=>({passwordFieldType:"password"}),props:{status:String},methods:{submit(){this.form.post(route("password.email"),{onFinish:()=>{}})}},setup(){return{form:w({email:""})}},mounted(){}},V={class:"pt-6 md:px-20 px-4"},M=t("h1",{class:"mb-10 text-xl text-center font-bold"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8",-1),N={key:0,class:"mb-4 font-medium text-sm w-full text-center text-green-600"},S=t("div",{class:"pl-4 mb-2 font-semibold text-gray-600"}," \u767B\u9332\u6642\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01 ",-1),T={class:"mb-6"},D={key:0,class:"text-red-500 text-sm mt-1"},E={class:"flex items-center justify-center mt-4 pb-7"},P=["disabled"];function j(c,s,a,e,z,i){const p=n("Head"),u=n("AppLayout");return r(),v(u,null,{default:k(()=>[L(p,{title:"\u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8"}),t("div",V,[M,a.status?(r(),m("div",N,d(a.status),1)):l("",!0),S,t("form",{onSubmit:s[1]||(s[1]=B((...o)=>i.submit&&i.submit(...o),["prevent"]))},[t("div",T,[A(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.email=o),id:"email",type:"email",class:"h-12 w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@eve-gacha.com"},null,512),[[C,e.form.email]]),e.form.errors.email?(r(),m("div",D,d(e.form.errors.email),1)):l("",!0)]),t("div",E,[t("button",{type:"submit",class:F([{"opacity-25":e.form.processing},"inline-block items-center px-10 py-2.5 rounded-md font-semibold text-sm text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150"]),disabled:e.form.processing}," \u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30E1\u30FC\u30EB\u3092\u9001\u4FE1 ",10,P)])],32)])]),_:1})}const R=H(I,[["render",j]]);export{R as default};