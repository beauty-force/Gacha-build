import{H as f,L as x,r as s,o,c as r,b as c,w as i,F as l,d as t,f as b,h as g,t as a}from"./app.ae475ae1.js";import{A as v}from"./UserLayout.77c564b5.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as k}from"./ChevronRightIcon.39b29568.js";import"./toastify.f59e4cdb.js";const L={components:{Head:f,AppLayout:v,Link:x,ChevronRightIcon:k},props:{errors:Object,auth:Object,category_share:Object,products:Object},data(){return{}},methods:{format_number(n){return String(n).replace(/(.)(?=(\d{3})+$)/g,"$1,")}}},j={class:"md:px-6 px-4 pt-4"},w=t("h1",{class:"underline underline-offset-8 mb-8 text-center text-lg font-bold"},"\xA0\xA0\xA0\u304A\u6C17\u306B\u5165\u308A\u4E00\u89A7\xA0\xA0\xA0",-1),C={key:0,class:"mb-8 grid md:grid-cols-2 gap-2"},A=["src"],B={class:"flex-1 text-sm px-2 flex flex-col justify-evenly h-24 items-start"},H={class:"text-base font-bold px-3"},O={class:"text-sm px-3"},F={class:"py-0.5 bg-red-500 text-white rounded-full text-center mx-3 min-w-24 px-3 md:px-4"},I={class:"text-neutral-500"},R={key:1,class:"mb-8"};function $(n,E,d,N,S,p){const _=s("Head"),u=s("ChevronRightIcon"),m=s("Link"),h=s("AppLayout");return o(),r(l,null,[c(_,{title:"\u304A\u6C17\u306B\u5165\u308A\u4E00\u89A7"}),c(h,null,{default:i(()=>[t("div",j,[w,d.products.data.length?(o(),r("div",C,[(o(!0),r(l,null,b(d.products.data,(e,V)=>(o(),g(m,{href:n.route("user.dp.detail",{id:e.product.id}),class:"py-2 px-3 border rounded-md hover:bg-slate-100 flex items-center justify-between mb-1 h-max"},{default:i(()=>[t("img",{src:e.product.image,class:"h-24 object-contain"},null,8,A),t("div",B,[t("div",H,a(e.product.name),1),t("div",O,a(e.product.rare),1),t("div",F,a(p.format_number(e.product.dp))+" EP",1)]),t("div",I,[c(u,{class:"w-5"})])]),_:2},1032,["href"]))),256))])):(o(),r("div",R," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const J=y(L,[["render",$]]);export{J as default};
