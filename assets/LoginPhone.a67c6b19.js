import{A as y}from"./UserLayout.aaf67104.js";import{H as w,L as k,G as v,r as n,o as i,h as g,w as l,b as d,d as e,I as L,J as u,K as F,c as p,t as f,g as h,a3 as V,n as T,e as b}from"./app.ea0fe4fa.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.3d495f8c.js";const C={components:{Head:w,UserLayout:y,Link:k},data:()=>({passwordFieldType:"password"}),props:{errors:Object},methods:{submit(){this.form.post(route("login"),{preserveScroll:!0,onFinish:()=>{this.form.reset("password")}})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:v({email:"",password:""})}},mounted(){}},U={class:"pt-6 px-4 mx-4"},j=e("h1",{class:"underline underline-offset-8 mb-10 text-center text-lg font-bold"},"\xA0\xA0\xA0\u30ED\u30B0\u30A4\u30F3\xA0\xA0\xA0",-1),H={class:"mb-6"},N=e("label",{for:"text1",class:"block text-base font-bold pl-2 mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1),D={key:0,class:"text-red-500 text-sm mt-1"},M={class:"mb-6"},S=e("label",{for:"text2",class:"block text-base font-bold pl-2 mb-2"},"\u30D1\u30B9\u30EF\u30FC\u30C9",-1),A=["type"],q={key:0,class:"text-red-500 text-sm mt-1"},z={class:"block mb-8 px-2"},E={class:"flex items-center cursor-pointer gap-2"},G=e("span",{class:"text-base"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),I={class:"mb-8 text-center border border-[#00B1FF] rounded-full p-0.5 w-fit mx-auto"},J=["disabled"],K={class:"flex flex-wrap gap-x-6 gap-y-4 justify-center text-sm pt-2 pb-10"},O={class:"flex items-center justify-center"},P={class:"flex items-center justify-center"};function Q(r,s,a,t,R,c){const x=n("Head"),m=n("Link"),_=n("UserLayout");return i(),g(_,null,{default:l(()=>[d(x,{title:"\u30ED\u30B0\u30A4\u30F3"}),e("div",U,[j,e("form",{onSubmit:s[3]||(s[3]=L(o=>c.submit(),["prevent"]))},[e("div",H,[N,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.form.email=o),id:"text1",type:"email",class:"w-full h-10 text-neutral-700 border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@torevegas.com"},null,512),[[F,t.form.email]]),a.errors.email?(i(),p("div",D,f(a.errors.email),1)):h("",!0)]),e("div",M,[S,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.form.password=o),id:"text2",type:r.passwordFieldType,class:"w-full h-10 text-neutral-700 shadow-xs border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,A),[[V,t.form.password]]),a.errors.password?(i(),p("div",q,f(a.errors.password),1)):h("",!0)]),e("div",z,[e("label",E,[e("input",{type:"checkbox",onClick:s[2]||(s[2]=o=>c.switchVisibility()),class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),G])]),e("div",I,[e("button",{type:"submit",class:T([{"opacity-50":t.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:t.form.processing}," \u30ED\u30B0\u30A4\u30F3 ",10,J)]),e("div",K,[e("div",O,[d(m,{href:r.route("password.request"),class:"underline underline-offset-4 text-neutral-600 hover:text-sky-500"},{default:l(()=>[b("\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u305F\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])]),e("div",P,[d(m,{href:r.route("register"),class:"underline underline-offset-4 text-neutral-600 hover:text-sky-500"},{default:l(()=>[b("\u65B0\u898F\u4F1A\u54E1\u767B\u9332\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])])],32)])]),_:1})}const $=B(C,[["render",Q]]);export{$ as default};
