import{H as g,L as k,G as y,r as m,o as r,c as a,b as u,w as v,F as h,d as t,I as w,f as j,t as c,e as C,J as f,a2 as p,g as A,n as z}from"./app.d61ad275.js";import{A as V}from"./UserLayout.b1bedaaf.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as F}from"./PlayIcon.64870d1f.js";import"./toastify.eb9b9840.js";const H={components:{Head:g,AppLayout:V,Link:k,PlayIcon:F},props:{errors:Object,auth:Object,category_share:Object,products:Object,token:String},data(){return{isCheckAll:!1}},setup(e){let o={},i;for(i=0;i<e.products.data.length;i++)o["id"+e.products.data[i].id]=!1;return{form:y({checks:o,token:e.token})}},methods:{format_number(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")},submit(){let e,o=0;var i=0;for(e=0;e<this.products.data.length;e++)this.form.checks["id"+this.products.data[e].id]&&(o++,i=i+parseInt(this.products.data[e].point));let n=!1;i>0?confirm("\u4EA4\u63DB\u3057\u307E\u3059\u304B\uFF1F \u9078\u629E\u3057\u305F"+o+"\u70B9\u306E\u5546\u54C1\u3092"+i+"pt\u3068\u4EA4\u63DB\u3057\u307E\u3059\u3002")&&(n=!0):confirm("\u5168\u3066\u306E\u5546\u54C1\u304C\u300C\u7372\u5F97\u6E08\u307F\u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002")&&(n=!0),n&&this.form.post(route("user.gacha.result.exchange"),{onFinish:()=>{}})},checkall(){let e;for(e=0;e<this.products.data.length;e++)this.form.checks["id"+this.products.data[e].id]=this.isCheckAll}}},N={class:"md:w-[760px] m-auto items-center px-2 h-full flex flex-col justify-center"},O=t("h1",{class:"mb-2 text-neutral-100 text-lg underline underline-offset-8 py-8 text-center font-bold"},"\xA0\xA0\xA0\u30AC\u30C1\u30E3 \u2013 \u7D50\u679C\xA0\xA0\xA0",-1),S={class:"mb-3 pt-4 flex flex-wrap justify-center w-full gap-x-6 md:gap-x-4 gap-y-4"},B={class:"relative max-w-40 w-1/2"},I=["for"],U={class:"text-center p-0 relative mb-1"},D=["src"],M={class:"text-white truncate text-center text-md px-4",style:{"line-height":"1.3"}},P={class:"text-neutral-300 text-md truncate mb-1 text-center px-4",style:{"line-height":"1.3"}},T={class:"flex justify-center items-center w-fit mx-auto text-white relative rounded-full text-sm text-center px-3 bg-red-500",style:{"line-height":"1.5"}},E=t("span",{class:"text-white"},"\xA0PT",-1),G={class:"absolute -top-3.5 -right-2"},J=["id","onUpdate:modelValue"],R={key:0,class:"absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center"},q=t("img",{src:"/images/sparking_star.png",style:{"max-width":"200%"}},null,-1),K=[q],Q={class:"sticky bottom-0 z-10 bg-neutral-800 py-4"},W={class:"text-center text-neutral-50 mb-3 z-10 relative"},X={class:"cursor-pointer flex items-center justify-center"},Y=t("span",{class:"ml-2 text-sm md:text-base font-bold"},"\u5168\u3066\u3092\u9078\u629E\u3059\u308B",-1),Z={class:"text-center text-neutral-50 z-10 relative"},$=["disabled"],tt=t("div",{class:"pb-6 pt-4 text-center text-xs md:text-sm font-semibold text-neutral-200 z-10"}," \u203B\u9078\u629E\u3055\u308C\u306A\u304B\u3063\u305F\u5546\u54C1\u306F\u300C\u7372\u5F97\u6E08\u307F \u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3055\u308C\u307E\u3059\u3002 ",-1);function et(e,o,i,n,d,l){const _=m("Head"),x=m("AppLayout");return r(),a(h,null,[u(_,{title:"\u30AC\u30C1\u30E3\u2013\u7D50\u679C"}),u(x,{is_home:!0},{default:v(()=>[t("div",N,[O,t("form",{onSubmit:o[2]||(o[2]=w(s=>l.submit(),["prevent"]))},[t("div",S,[(r(!0),a(h,null,j(i.products.data,(s,st)=>(r(),a("div",B,[t("label",{for:"checkbox"+s.id,class:"z-10 block cursor-pointer text-center justify-center relative rounded-sm"},[t("div",U,[t("img",{class:"inline-block w-full",src:s.image},null,8,D)]),t("div",M,c(s.name),1),t("div",P,c(s.rare),1),t("div",T,[C(c(l.format_number(s.point)),1),E]),t("div",G,[f(t("input",{id:"checkbox"+s.id,type:"checkbox","onUpdate:modelValue":b=>n.form.checks["id"+s.id]=b,class:"h-5 w-5 cursor-pointer rounded border-yellow-300 text-sky-600 shadow-sm focus:ring-sky-500"},null,8,J),[[p,n.form.checks["id"+s.id]]])])],8,I),s.is_last?(r(),a("div",R,K)):A("",!0)]))),256))]),t("div",Q,[t("div",W,[t("label",X,[f(t("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=s=>d.isCheckAll=s),onChange:o[1]||(o[1]=s=>l.checkall()),class:"h-5 w-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"},null,544),[[p,d.isCheckAll]]),Y])]),t("div",Z,[t("button",{type:"submit",class:z([{"opacity-25":n.form.processing},"inline-block items-center px-8 py-2 rounded-md font-semibold text-sm md:text-base text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150"]),disabled:n.form.processing}," \u9078\u629E\u3057\u305F\u5546\u54C1\u3092\u30DD\u30A4\u30F3\u30C8\u306B\u5909\u63DB ",10,$)])]),tt],32)])]),_:1})],64)}const lt=L(H,[["render",et]]);export{lt as default};