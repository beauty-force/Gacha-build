import{H as h,L as f,G as b,r as n,o as c,c as l,b as d,w as x,F as _,d as t,t as e,f as y}from"./app.ae475ae1.js";import{A as g}from"./Admin.a23d5804.js";import{P as L}from"./Pagination.c9ad1933.js";import{G as v}from"./GachaCard.e8e6037e.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.f59e4cdb.js";import"./ChevronRightIcon.39b29568.js";import"./EllipsisHorizontalIcon.3bce211c.js";import"./GachaButtons.ad6d6f79.js";import"./PlayIcon.c1b71566.js";const k={components:{Head:h,AppLayout:g,Link:f,GachaCard:v,Pagination:L},props:{errors:Object,payments:Object,search_cond:Object,total:Number,total_amount:Number,total_point:Number,id:Number},mounted(){console.log(this.payments)},methods:{search(){this.form_search.get(route("admin.users.purchase_log"))},format_number(a){return String(a).replace(/(.)(?=(\d{3})+$)/g,"$1,")}},setup(a){return{form_search:b(a.search_cond)}}},w={class:"md:px-1 px-2"},P={class:"border-b w-full p-2 mb-2 font-semibold flex gap-4 items-center"},A=t("h3",{class:"flex-1"},"\u8CFC\u5165\u5C65\u6B74",-1),H=t("span",null,"\u5408\u8A08:",-1),j={class:"w-full flex flex-col gap-4"},B={class:"w-full table-auto"},C=t("thead",null,[t("tr",{class:"border-b border-collapse"},[t("td",{class:"text-center py-2"},"\u30AA\u30FC\u30C0\u30FCID"),t("td",{class:"text-center py-2"},"\u53D6\u5F15ID"),t("td",{class:"text-center py-2"},"\u91D1\u984D"),t("td",{class:"text-center py-2"},"\u30DD\u30A4\u30F3\u30C8"),t("td",{class:"text-center py-2"},"\u66F4\u65B0\u65E5\u6642")])],-1),D={class:"text-sm"},F={class:"border border-sky-50 divide-x-2 divide-sky-50"},G={class:"text-center py-2"},O={class:"text-center py-2"},I={class:"text-center py-2"},S={class:"text-center py-2"},V={class:"text-center py-2"};function E(a,i,s,q,z,r){const m=n("Head"),u=n("Pagination"),p=n("AppLayout");return c(),l(_,null,[d(m,{title:"\u8CFC\u5165\u5C65\u6B74"}),d(p,null,{default:x(()=>[t("div",w,[t("div",P,[A,H,t("span",null,e(r.format_number(s.total_amount))+"\u5186",1),t("span",null,e(r.format_number(s.total_point))+"pt",1)]),t("div",j,[t("table",B,[C,t("tbody",D,[(c(!0),l(_,null,y(s.payments,o=>(c(),l("tr",F,[t("td",G,e(o.order_id),1),t("td",O,e(o.payment_intent),1),t("td",I,e(r.format_number(o.amount)),1),t("td",S,e(r.format_number(o.point))+" pt",1),t("td",V,e(o.updated_at),1)]))),256))])]),d(u,{search_cond:{...s.search_cond,id:s.id},route_name:"admin.users.purchase_log",total:s.total},null,8,["search_cond","total"])])])]),_:1})],64)}const Z=N(k,[["render",E]]);export{Z as default};
