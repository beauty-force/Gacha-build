import{H as w,L as k,u as b,a as v,G as F,r as n,o as l,h as V,w as _,b as i,d as e,I as L,t as B,c as m,J as d,K as p,n as f,g as u,a3 as T,e as h}from"./app.ae475ae1.js";import{_ as C}from"./Checkbox.ccafbb65.js";import{A as I}from"./UserLayout.77c564b5.js";import{_ as E,a as A}from"./TextInput.c2c2a11e.js";import{_ as H}from"./InputLabel.def1eb73.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.f59e4cdb.js";const U={components:{Checkbox:C,Head:w,AppLayout:I,InputError:E,InputLabel:H,TextInput:A,Link:k},data:()=>({passwordFieldType:"password",step_integer:0,step_titles:["\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332","\u8A8D\u8A3C\u30B3\u30FC\u30C9\u5165\u529B","\u3054\u672C\u4EBA\u8A8D\u8A3C"],is_processing:!1,data:{}}),props:{errors:Object},methods:{submit(){this.step_integer==0?this.form.post(route("register.email.send"),{onFinish:()=>{this.data=b().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=1)}}):this.step_integer==1?this.form.post(route("register.email.verify"),{onFinish:()=>{this.data=b().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=2)}}):this.form.post(route("register.phone.register"),{onFinish:()=>{}})},submit_phone(){const o={phone:this.form.phone};this.is_processing=!0,v.post(route("register.phone.send"),o).then(t=>{t.status==201||t.status==200,this.is_processing=!1}).catch(t=>{this.is_processing=!1})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:F({phone:"",code:"",email:"",password:""})}},mounted(){}},D={class:"pt-6 px-4 mx-4"},M={class:"underline underline-offset-8 mb-10 text-center text-lg font-bold"},j={key:0,class:"flex flex-col items-center"},S={class:"mb-10 w-full"},z=e("label",{for:"email",class:"block text-base font-bold pl-2 mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1),G=["disabled"],J=e("div",{class:"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"}," \u8A8D\u8A3C\u3078\u9032\u3080 ",-1),K=[J],O={key:1},P={class:"mb-8"},R=e("label",{for:"code",class:"block text-base pl-2 mb-2"},"\u767B\u9332\u3057\u305F\u30E1\u30FC\u30EB\u306B\u9001\u4FE1\u3055\u308C\u305F4\u884C\u306E\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",-1),q={class:"mb-8 text-center border border-[#00B1FF] rounded-full p-0.5 w-fit mx-auto"},Q=["disabled"],W={key:2},X={class:"mb-6"},Y=e("label",{for:"phone",class:"block text-base font-bold pl-2 mb-2"},[h(" \u96FB\u8A71\u756A\u53F7 "),e("span",{class:"text-red-500"},"*")],-1),Z={class:"mb-6"},$=e("label",{for:"password",class:"block text-base font-bold pl-2 mb-2"},[h(" \u30D1\u30B9\u30EF\u30FC\u30C9 "),e("span",{class:"text-red-500"},"*")],-1),ee=["type"],se={class:"block mb-8 px-2"},te={class:"flex items-center cursor-pointer gap-2"},oe=e("span",{class:"text-base"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),re={class:"mb-8 text-center border border-[#00B1FF] rounded-full p-0.5 w-fit mx-auto"},ie=["disabled"],ae={class:"flex items-center justify-center text-sm my-4"};function ne(o,t,le,s,de,c){const g=n("Head"),a=n("InputError"),y=n("Link"),x=n("AppLayout");return l(),V(x,null,{default:_(()=>[i(g,{title:"\u65B0\u898F\u767B\u9332"}),e("div",D,[e("form",{onSubmit:t[5]||(t[5]=L((...r)=>c.submit&&c.submit(...r),["prevent"]))},[e("h2",M,"\xA0\xA0\xA0"+B(o.step_titles[o.step_integer])+"\xA0\xA0",1),o.step_integer==0?(l(),m("div",j,[e("div",S,[z,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.email=r),id:"email",type:"email",class:"w-full text-neutral-700 border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[p,s.form.email]]),i(a,{class:"mt-2",message:s.form.errors.email},null,8,["message"])]),e("button",{type:"submit",class:f([{"opacity-50":s.form.processing},"inline-block items-center mb-8 text-center border border-[#00B1FF] rounded-full p-0.5 w-fit mx-auto hover:scale-105"]),disabled:s.form.processing},K,10,G)])):u("",!0),o.step_integer==1?(l(),m("div",O,[e("div",P,[R,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.code=r),id:"code",type:"tel",class:"w-full text-neutral-700 border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",placeholder:"\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[p,s.form.code]]),i(a,{class:"mt-2",message:s.form.errors.code},null,8,["message"])]),e("div",q,[e("button",{type:"submit",class:f([{"opacity-50":s.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:s.form.processing}," \u6B21\u3078 ",10,Q)])])):u("",!0),o.step_integer==2?(l(),m("div",W,[e("div",X,[Y,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.phone=r),id:"phone",type:"tel",class:"text-neutral-700 h-10 w-full border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",placeholder:"\u534A\u89D2\u6570\u5B57\u306E\u307F\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[p,s.form.phone]]),i(a,{class:"mt-2",message:s.form.errors.phone},null,8,["message"])]),e("div",Z,[$,d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=r=>s.form.password=r),id:"password",type:o.passwordFieldType,class:"text-neutral-700 h-10 w-full border-sky-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,ee),[[T,s.form.password]]),i(a,{class:"mt-2",message:s.form.errors.password},null,8,["message"])]),e("div",se,[e("label",te,[e("input",{type:"checkbox",onClick:t[4]||(t[4]=r=>c.switchVisibility()),class:"w-5 h-5 rounded border-sky-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),oe])]),e("div",re,[e("button",{type:"submit",class:f([{"opacity-50":s.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:s.form.processing}," \u767B\u9332 ",10,ie)])])):u("",!0),e("div",ae,[i(y,{href:o.route("login"),class:"underline underline-offset-4 text-neutral-600 hover:text-sky-500"},{default:_(()=>[h("\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])],32)])]),_:1})}const _e=N(U,[["render",ne]]);export{_e as default};
