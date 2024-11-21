import{H as V,L as U,G as j,r as i,o as m,c as _,b as r,w as a,F as g,d as e,e as b,f as D,h as L,I as T,J as n,a2 as l,n as M}from"./app.ae475ae1.js";import{A as G}from"./Admin.a23d5804.js";import{G as N}from"./GachaCard.e8e6037e.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as B,e as H,U as O,o as z,f as F}from"./toastify.f59e4cdb.js";import"./GachaButtons.ad6d6f79.js";import"./PlayIcon.c1b71566.js";const P={components:{Head:V,AppLayout:G,Link:U,GachaCard:N,Dialog:B,DialogPanel:H,DialogTitle:O,TransitionChild:z,TransitionRoot:F},props:{errors:Object,auth:Object,gachas:Object,category_share:Object},data(){return{open:!1}},methods:{openCopyModal(d){this.open=!0,this.form.gacha_id=d},submit_copy(){this.form.post(route("admin.gacha.copy"))}},setup(d){return{form:j({gacha_id:0,point:!0,count_card:!0,spin_limit:!0,cards:!0,thumbnail:!0,detail_image:!0,videos:!0,last_product:!0,rare_product:!0})}},mounted(){}},R={class:"text-center my-3 gap-3 flex justify-center"},I={class:"sm:px-4 px-6 mb-8 grid sm:grid-cols-2 grid-cols-1 gap-6"},E=e("span",{class:"rounded-full bg-green-500 flex items-center justify-center text-4xl text-neutral-100 h-12 sm:h-16 w-12 sm:w-16"}," + ",-1),J=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),S={class:"fixed inset-0 z-20 overflow-y-auto"},q={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},K=e("h1",{class:"mb-10 font-bold text-center text-lg underline underline-offset-8",style:{"margin-bottom":"1.5rem"}}," \u30B3\u30D4\u30FC\u9805\u76EE\u3092\u9078\u629E\u3057\u307E\u3059\u3002 ",-1),Q={class:"px-6 py-2 m-4 border rounded-lg"},W={class:"flex items-center cursor-pointer h-10"},X=e("span",{class:"ml-2 text-lg"},"\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8",-1),Y={class:"flex items-center cursor-pointer h-10"},Z=e("span",{class:"ml-2 text-lg"},"\u7DCF\u30AB\u30FC\u30C9\u6570",-1),$={class:"flex items-center cursor-pointer h-10"},ee=e("span",{class:"ml-2 text-lg"},"\u30AC\u30C1\u30E3\u5236\u9650\u56DE\u6570",-1),te={class:"flex items-center cursor-pointer h-10"},oe=e("span",{class:"ml-2 text-lg"},"\u30CF\u30BA\u30EC\u30AB\u30FC\u30C9",-1),se={class:"flex items-center cursor-pointer h-10"},re=e("span",{class:"ml-2 text-lg"},"\u30B5\u30E0\u30CD\u30A4\u30EB\u753B\u50CF",-1),ae={class:"flex items-center cursor-pointer h-10"},ne=e("span",{class:"ml-2 text-lg"},"\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF",-1),le={class:"flex items-center cursor-pointer h-10"},ie=e("span",{class:"ml-2 text-lg"},"\u30AC\u30C1\u30E3\u6F14\u51FA\u52D5\u753B\u8A2D\u5B9A",-1),de={class:"flex items-center cursor-pointer h-10"},ce=e("span",{class:"ml-2 text-lg"},"\u30E9\u30B9\u30C8\u30EF\u30F3\u8CDE",-1),ue={class:"flex items-center cursor-pointer h-10"},me=e("span",{class:"ml-2 text-lg"},"\u5F53\u305F\u308A\u30AB\u30FC\u30C9",-1),pe={class:"flex items-center justify-center"},he=["disabled"];function fe(d,t,c,s,p,h){const x=i("Head"),u=i("Link"),y=i("GachaCard"),w=i("AppLayout"),f=i("TransitionChild"),v=i("DialogPanel"),k=i("Dialog"),C=i("TransitionRoot");return m(),_(g,null,[r(x,{title:"\u30AC\u30C1\u30E3\u7BA1\u7406"}),r(w,null,{default:a(()=>[e("div",null,[e("div",R,[r(u,{href:d.route("admin.lost_product")+c.category_share.cat_route_appendix,class:"inline-block items-center w-36 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"},{default:a(()=>[b(" \u30AB\u30FC\u30C9\u7DE8\u96C6 ")]),_:1},8,["href"]),r(u,{href:d.route("admin.gacha.sorting")+c.category_share.cat_route_appendix,class:"inline-block items-center w-36 py-2.5 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150"},{default:a(()=>[b(" \u4E26\u3073\u66FF\u3048 ")]),_:1},8,["href"])]),e("div",I,[r(u,{href:d.route("admin.gacha.create")+c.category_share.cat_route_appendix,class:"rounded-lg border-2 border-green-500 shadow w-full flex items-center justify-center py-4 sm:min-h-80"},{default:a(()=>[E]),_:1},8,["href"]),(m(!0),_(g,null,D(c.gachas.data,(o,_e)=>(m(),L(y,{url_edit:d.route("admin.gacha.edit",o.id)+c.category_share.cat_route_appendix,gacha:o,openCopyModal:h.openCopyModal},null,8,["url_edit","gacha","openCopyModal"]))),256))])])]),_:1}),r(C,{as:"template",show:p.open},{default:a(()=>[r(k,{as:"div",class:"relative z-20",onClose:t[10]||(t[10]=o=>p.open=!1)},{default:a(()=>[r(f,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:a(()=>[J]),_:1}),e("div",S,[e("div",q,[r(f,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:a(()=>[r(v,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:a(()=>[e("form",{onSubmit:t[9]||(t[9]=T(o=>h.submit_copy(),["prevent"])),class:"py-3"},[K,e("div",Q,[e("label",W,[n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.point=o),id:"point",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.point]]),X]),e("label",Y,[n(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.count_card=o),id:"count_card",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.count_card]]),Z]),e("label",$,[n(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.spin_limit=o),id:"spin_limit",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.spin_limit]]),ee]),e("label",te,[n(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.form.cards=o),id:"cards",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.cards]]),oe]),e("label",se,[n(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.form.thumbnail=o),id:"thumbnail",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.thumbnail]]),re]),e("label",ae,[n(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>s.form.detail_image=o),id:"detail_image",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.detail_image]]),ne]),e("label",le,[n(e("input",{"onUpdate:modelValue":t[6]||(t[6]=o=>s.form.videos=o),id:"videos",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.videos]]),ie]),e("label",de,[n(e("input",{"onUpdate:modelValue":t[7]||(t[7]=o=>s.form.last_product=o),id:"last_product",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.last_product]]),ce]),e("label",ue,[n(e("input",{"onUpdate:modelValue":t[8]||(t[8]=o=>s.form.rare_product=o),id:"rare_product",type:"checkbox",class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500",checked:""},null,512),[[l,s.form.rare_product]]),me])]),e("div",pe,[e("button",{type:"submit",class:M([{"opacity-25":s.form.processing},"inline-block items-center px-10 py-1 bg-neutral-800 border border-transparent font-semibold text-md text-white uppercase tracking-widest hover:bg-neutral-600 active:bg-neutral-600"]),disabled:s.form.processing}," \u30B3\u30D4\u30FC ",10,he)])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}const Ce=A(P,[["render",fe]]);export{Ce as default};
