import{H as k,L as v,G as y,r as u,o as r,c as l,b as f,w,F as _,d as e,h,I as C,f as j,t as m,e as A,J as p,a2 as x,n as V}from"./app.d1d77031.js";import{A as z}from"./UserLayout.39229af5.js";import{u as L}from"./useConfirm.801861ec.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as F}from"./PlayIcon.9ad234e3.js";import"./Category.e6f31134.js";import"./index.17902c99.js";const{confirm:H}=L(),N={components:{Head:k,AppLayout:z,Link:v,PlayIcon:F},props:{errors:Object,auth:Object,category_share:Object,products:Object,token:String,show_review:Boolean},data(){return{isCheckAll:!1}},setup(t){let o={},i;for(i=0;i<t.products.data.length;i++)o["id"+t.products.data[i].id]=!1;return{form:y({checks:o,token:t.token})}},methods:{format_number(t){return String(t).replace(/(.)(?=(\d{3})+$)/g,"$1,")},submit(){let t,o=0;var i=0;for(t=0;t<this.products.data.length;t++)this.form.checks["id"+this.products.data[t].id]&&(o++,i=i+parseInt(this.products.data[t].point));let n="";i>0?n="\u9078\u629E\u3057\u305F"+o+"\u70B9\u306E\u5546\u54C1\u3092"+i+"pt\u3068\u4EA4\u63DB\u3057\u307E\u3059\u3002":n="\u5168\u3066\u306E\u5546\u54C1\u304C\u300C\u7372\u5F97\u6E08\u307F\u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002",H(n).then(c=>{c&&this.form.post(route("user.gacha.result.exchange"),{onFinish:()=>{}})})},checkall(){let t;for(t=0;t<this.products.data.length;t++)this.form.checks["id"+this.products.data[t].id]=this.isCheckAll},checkone(){this.isCheckAll=this.products.data.length>0,this.products.data.forEach(t=>{this.form.checks["id"+t.id]!=!0&&(this.isCheckAll=!1)})}}},O={class:"md:w-[760px] m-auto items-center px-2 h-full flex flex-col justify-center"},S=e("div",{class:"sticky top-20 z-20 bg-neutral-800 w-full pt-4 md:pt-6 pb-2 md:pb-3"},[e("h1",{class:"text-neutral-100 text-lg underline underline-offset-8 text-center font-bold"},"\xA0\xA0\xA0\u30AC\u30C1\u30E3 \u2013 \u7D50\u679C\xA0\xA0\xA0")],-1),I=["href"],U=e("div",{class:"bg-theme bg-theme-hover px-3 py-2 rounded-md text-center text-white"},[e("div",{class:"text-base font-bold"},"\u30AC\u30C1\u30E3\u6F14\u51FA\u3092\u3082\u3046\u4E00\u5EA6\u898B\u308B")],-1),D=[U],E={class:"mb-3 pt-4 flex flex-wrap justify-center w-full gap-x-6 md:gap-x-4 gap-y-4"},M={class:"relative max-w-40 w-4/5"},P=["for"],T={class:"text-center p-0 relative mb-1"},G=["src"],J=["src","alt"],R={class:"text-white truncate text-center text-md px-4",style:{"line-height":"1.3"}},q={class:"text-neutral-300 text-md truncate mb-1 text-center px-4",style:{"line-height":"1.3"}},K={class:"flex justify-center items-center w-fit mx-auto text-white relative rounded-full text-sm text-center px-3 bg-red-500",style:{"line-height":"1.5"}},Q=e("span",{class:"text-white"},"\xA0PT",-1),W={class:"absolute -top-3.5 -right-2"},X=["id","onUpdate:modelValue"],Y={key:0,class:"absolute top-0 left-0 z-0 w-full h-full flex justify-center items-center"},Z=e("img",{src:"/images/sparking_star.png",style:{"max-width":"200%"}},null,-1),$=[Z],ee={class:"sticky bottom-16 z-10 bg-neutral-800 py-4"},te={class:"text-center text-neutral-50 mb-3 relative"},se={class:"cursor-pointer flex items-center justify-center"},oe=e("span",{class:"ml-2 text-sm md:text-base font-bold"},"\u5168\u3066\u3092\u9078\u629E\u3059\u308B",-1),ie={class:"text-center text-neutral-50 relative"},ne=["disabled"],re=e("div",{class:"pb-6 pt-4 text-center text-xs md:text-sm font-semibold text-neutral-200 z-10"}," \u203B\u9078\u629E\u3055\u308C\u306A\u304B\u3063\u305F\u5546\u54C1\u306F\u300C\u7372\u5F97\u6E08\u307F \u5546\u54C1\u4E00\u89A7\u300D\u306B\u79FB\u52D5\u3055\u308C\u307E\u3059\u3002 ",-1);function le(t,o,i,n,c,a){const b=u("Head"),g=u("AppLayout");return r(),l(_,null,[f(b,{title:"\u30AC\u30C1\u30E3\u2013\u7D50\u679C"}),f(g,{is_home:!0},{default:w(()=>[e("div",O,[S,i.show_review?(r(),l("a",{key:0,class:"w-full px-3 md:px-6 my-2",href:t.route("user.gacha.video",{token:i.token})},D,8,I)):h("",!0),e("form",{onSubmit:o[3]||(o[3]=C(s=>a.submit(),["prevent"]))},[e("div",E,[(r(!0),l(_,null,j(i.products.data,(s,ae)=>(r(),l("div",M,[e("label",{for:"checkbox"+s.id,class:"z-10 block cursor-pointer text-center justify-center relative rounded-sm"},[e("div",T,[e("img",{class:"inline-block w-full",src:s.image},null,8,G),s.badge?(r(),l("img",{key:0,src:s.badge,class:"absolute bottom-0.5 right-0.5 w-[25%]",alt:s.badge},null,8,J)):h("",!0)]),e("div",R,m(s.name),1),e("div",q,m(s.rare),1),e("div",K,[A(m(a.format_number(s.point)),1),Q]),e("div",W,[p(e("input",{id:"checkbox"+s.id,type:"checkbox","onUpdate:modelValue":d=>n.form.checks["id"+s.id]=d,onChange:o[0]||(o[0]=(...d)=>a.checkone&&a.checkone(...d)),class:"h-5 w-5 cursor-pointer rounded border-yellow-400 text-yellow-400 shadow-sm focus:ring-yellow-500"},null,40,X),[[x,n.form.checks["id"+s.id]]])])],8,P),s.is_last?(r(),l("div",Y,$)):h("",!0)]))),256))]),e("div",ee,[e("div",te,[e("label",se,[p(e("input",{type:"checkbox","onUpdate:modelValue":o[1]||(o[1]=s=>c.isCheckAll=s),onChange:o[2]||(o[2]=s=>a.checkall()),class:"h-5 w-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"},null,544),[[x,c.isCheckAll]]),oe])]),e("div",ie,[e("button",{type:"submit",class:V([{"opacity-25":n.form.processing},"inline-block items-center px-8 py-2 rounded-md font-semibold text-sm md:text-base text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150"]),disabled:n.form.processing}," \u9078\u629E\u3057\u305F\u5546\u54C1\u3092\u30DD\u30A4\u30F3\u30C8\u306B\u5909\u63DB ",10,ne)])]),re],32)])]),_:1})],64)}const pe=B(N,[["render",le]]);export{pe as default};
