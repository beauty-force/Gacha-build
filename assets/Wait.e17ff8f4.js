import{H as h,L as x,r as a,o as s,c as o,b as n,w as i,F as c,d as t,f as d,h as b,e as y,t as r,n as v,g}from"./app.84fa7d66.js";import{A as k}from"./UserLayout.55f2707c.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.6a8a666e.js";import"./toastify.7aab60f1.js";const j={components:{Head:h,AppLayout:k,Link:x},props:{errors:Object,gacha:Object,category_share:Object,products:Object},data(){return{main_tab:[{title:"\u672A\u9078\u629E",route_url:route("user.products"),is_active:!1},{title:"\u767A\u9001\u5F85\u3061",route_url:route("user.products.wait"),is_active:!0},{title:"\u767A\u9001\u6E08\u307F",route_url:route("user.products.delivered"),is_active:!1}]}}},L={class:"p-4 md:p-6 w-full"},A=t("h1",{class:"underline underline-offset-8 mb-6 text-center text-lg font-bold"},"\xA0\xA0\xA0\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7\xA0\xA0\xA0",-1),B={class:"w-full text-neutral-500 mb-3 space-x-1 border-b-4 border-sky-500 px-4 flex justify-center"},C={key:0,class:"grid md:grid-cols-2 gap-1"},H={class:"mt-1 py-2 px-3 border rounded-md hover:bg-slate-100"},N={class:"flex border-neutral-200 items-start w-full"},O=["for"],V=["src"],F={class:"h-24 ml-2 flex flex-col justify-evenly"},T={class:"text-sm px-3"},z={class:"text-sm px-3"},D={key:0,class:"flex bg-red-500 justify-center items-center rounded-full px-3 mx-3 py-0.5 text-white w-fit"},E=t("img",{src:"/images/icon_cash.png",class:"h-4 mr-1"},null,-1),P={key:1,class:"mb-6"};function S(W,$,l,q,_,G){const u=a("Head"),p=a("Link"),f=a("AppLayout");return s(),o(c,null,[n(u,{title:"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7"}),n(f,null,{default:i(()=>[t("div",L,[A,t("div",B,[(s(!0),o(c,null,d(_.main_tab,(e,m)=>(s(),b(p,{href:e.route_url,class:v(["-mb-[1px] flex-1 inline-block text-center py-1.5 rounded-t-md border-sky-500 border-x border-t",{"bg-sky-500 text-white":e.is_active,"hover:bg-sky-400 hover:text-white":!e.is_active}])},{default:i(()=>[y(r(e.title),1)]),_:2},1032,["href","class"]))),256))]),l.products.data.length?(s(),o("div",C,[(s(!0),o(c,null,d(l.products.data,(e,m)=>(s(),o("div",H,[t("div",N,[t("label",{for:"checkbox"+e.id,class:"flex-1 cursor-pointer flex items-start text-sm py-1 px-2"},[t("img",{src:e.image,class:"h-24 object-contain"},null,8,V),t("div",F,[t("div",T,r(e.name),1),t("div",z,r(e.rare),1),e.is_lost_product!=2?(s(),o("div",D,[E,t("span",null,r(e.point)+"\xA0PT",1)])):g("",!0)])],8,O)])]))),256))])):(s(),o("div",P," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const R=w(j,[["render",S]]);export{R as default};
