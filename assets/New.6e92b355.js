import{H as U,L,u as M,G as N,r as _,o as i,c as l,b,w as x,F as p,d as t,I as O,J as m,K as f,t as a,g as d,M as A,f as h,e as c}from"./app.ea0fe4fa.js";import{A as D}from"./Admin.fd448540.js";import{B as H}from"./main.16e53f93.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.3d495f8c.js";import"./isNativeReflectConstruct.8f2fcece.js";const B={components:{Head:U,AppLayout:D,Link:L,VueDatePicker:H},props:{errors:Object,auth:Object,coupon:Object,editing:Object,types:Object,points:Array},methods:{submit(){this.form.post(route("admin.coupon.store"))}},computed:{flash(){return M().props.value.flash}},watch:{flash:function(o,r){o.data&&(this.form.title=o.data.title,this.form.type=o.data.type,this.form.code=o.data.code,this.form.point=o.data.point,this.form.discount_rate=o.data.discount_rate,this.form.expiration=o.data.expiration,this.form.user_limit=o.data.user_limit)}},setup(o){return{form:N({id:o.coupon.id,title:o.coupon.title,type:o.coupon.type,code:o.coupon.code,point:o.coupon.point,discount_rate:o.coupon.discount_rate.map(e=>e.rate),expiration:o.coupon.expiration,user_limit:o.coupon.user_limit})}}},C={class:"pt-6 md:px-6 px-4"},P={key:0,class:"mb-2 text-lg font-bold"},S={key:1,class:"mb-2 text-lg font-bold"},F=t("hr",{class:"mb-8"},null,-1),T={class:"mb-6"},I=t("label",{for:"title",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u304A\u540D\u524D (\u30C6\u30AD\u30B9\u30C8) "),t("span",{class:"text-red-500"},"*")],-1),E={key:0,class:"text-red-500 text-sm mt-1"},G={class:"mb-6"},J=t("label",{for:"code",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u30B3\u30FC\u30C9(\u30C6\u30AD\u30B9\u30C8) "),t("span",{class:"text-red-500"},"*")],-1),K={key:0,class:"text-red-500 text-sm mt-1"},R={class:"mb-6"},Y=t("label",{for:"type",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u7A2E\u985E "),t("span",{class:"text-red-500"},"*")],-1),q=["value"],z={key:0,class:"mb-6"},Q=t("label",{for:"point",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u30DD\u30A4\u30F3\u30C8 (\u534A\u89D2\u6570\u5B57) "),t("span",{class:"text-red-500"},"*")],-1),W={key:0,class:"text-red-500 text-sm mt-1"},X={key:1,class:"text-red-500 text-sm mt-1"},Z={class:"mb-6"},$=["for"],tt=t("span",{class:"text-red-500"},"*",-1),et=["onUpdate:modelValue","id"],ot={key:0,class:"text-red-500 text-sm mt-1"},rt={class:"mb-6"},st=t("label",{for:"expiration",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u6709\u52B9\u671F\u9650 "),t("span",{class:"text-red-500"},"*")],-1),nt={key:0,class:"text-red-500 text-sm mt-1"},it={class:"mb-6"},lt=t("label",{for:"user_limit",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c("\u4EBA\u6570\u4E0A\u9650 (\u534A\u89D2\u6570\u5B57) "),t("span",{class:"text-red-500"},"*")],-1),at={key:0,class:"text-red-500 text-sm mt-1"},dt={class:"flex gap-4 mb-4"},ut=t("div",{class:"w-1/2"},[t("button",{type:"submit",class:"inline-block items-center w-full py-2.5 bg-teal-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-700 active:bg-green-700 transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1),ct={class:"w-1/2"};function mt(o,r,e,s,ft,y){const g=_("Head"),v=_("VueDatePicker"),k=_("Link"),w=_("AppLayout");return i(),l(p,null,[b(g,{title:e.editing?"\u30AF\u30FC\u30DD\u30F3\u7DE8\u96C6":"\u30AF\u30FC\u30DD\u30F3\u8FFD\u52A0"},null,8,["title"]),b(w,null,{default:x(()=>[t("div",C,[e.editing?(i(),l("h1",P,"\u30AF\u30FC\u30DD\u30F3\u7DE8\u96C6")):(i(),l("h1",S,"\u30AF\u30FC\u30DD\u30F3\u8FFD\u52A0")),F,t("form",{onSubmit:r[7]||(r[7]=O(n=>y.submit(),["prevent"]))},[m(t("input",{"onUpdate:modelValue":r[0]||(r[0]=n=>s.form.id=n),class:"hidden"},null,512),[[f,s.form.id]]),t("div",T,[I,m(t("input",{"onUpdate:modelValue":r[1]||(r[1]=n=>s.form.title=n),id:"title",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[f,s.form.title]]),e.errors.title?(i(),l("div",E,a(e.errors.title),1)):d("",!0)]),t("div",G,[J,m(t("input",{"onUpdate:modelValue":r[2]||(r[2]=n=>s.form.code=n),id:"code",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[f,s.form.code]]),e.errors.code?(i(),l("div",K,a(e.errors.code),1)):d("",!0)]),t("div",R,[Y,m(t("select",{"onUpdate:modelValue":r[3]||(r[3]=n=>s.form.type=n),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[(i(!0),l(p,null,h(e.types,(n,u)=>(i(),l("option",{value:u},a(n),9,q))),256))],512),[[A,s.form.type]])]),s.form.type=="NORMAL"?(i(),l("div",z,[Q,m(t("input",{"onUpdate:modelValue":r[4]||(r[4]=n=>s.form.point=n),id:"point",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[f,s.form.point]]),e.errors.point?(i(),l("div",W,a(e.errors.point),1)):d("",!0)])):d("",!0),e.errors.discount_rate?(i(),l("div",X,a(e.errors.discount_rate),1)):d("",!0),s.form.type=="DISCOUNT"?(i(!0),l(p,{key:2},h(e.points,(n,u)=>(i(),l("div",Z,[t("label",{for:"discount_rate"+u,class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[c(a(n.point)+" pt - \u5272\u5F15\u7387 (\u534A\u89D2\u6570\u5B57) ",1),tt],8,$),m(t("input",{"onUpdate:modelValue":V=>s.form.discount_rate[u]=V,id:"discount_rate"+u,type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,8,et),[[f,s.form.discount_rate[u]]]),e.errors[`discount_rate.${u}`]?(i(),l("div",ot,a(e.errors[`discount_rate.${u}`]),1)):d("",!0)]))),256)):d("",!0),t("div",rt,[st,b(v,{modelValue:s.form.expiration,"onUpdate:modelValue":r[5]||(r[5]=n=>s.form.expiration=n),format:"Y-MM-dd HH:mm"},null,8,["modelValue"]),e.errors.expiration?(i(),l("div",nt,a(e.errors.expiration),1)):d("",!0)]),t("div",it,[lt,m(t("input",{"onUpdate:modelValue":r[6]||(r[6]=n=>s.form.user_limit=n),id:"user_limit",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[f,s.form.user_limit]]),e.errors.user_limit?(i(),l("div",at,a(e.errors.user_limit),1)):d("",!0)]),t("div",dt,[ut,t("div",ct,[b(k,{href:o.route("admin.coupon"),class:"text-center inline-block items-center w-full py-2.5 bg-cyan-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 transition ease-in-out duration-150",as:"button"},{default:x(()=>[c(" \u623B\u308B ")]),_:1},8,["href"])])])],32)])]),_:1})],64)}const gt=j(B,[["render",mt]]);export{gt as default};
