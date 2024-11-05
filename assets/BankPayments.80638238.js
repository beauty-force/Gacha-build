import{H as k,L as w,a as L,r as l,o as a,c as n,b as r,w as c,F as p,d as t,n as b,e as u,f as g,t as e}from"./app.ea0fe4fa.js";import{A as v}from"./Admin.fd448540.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.3d495f8c.js";const A={components:{Head:k,AppLayout:v,Link:w},props:{payments:Object,status:Number},data(){return{_payments:this.payments}},methods:{Confirm(d){confirm("\u3068\u3044\u3046\u8A8D\u8B58\u3067\u9593\u9055\u3044\u306A\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F")&&L.post(route("admin.update_bank_payment"),{id:d,status:this.status}).then(_=>{_.data.result=="success"&&(this._payments=this._payments.filter(o=>o.id!=d))})}}},B={class:"px-3 fixed w-full bg-white pt-3"},H={class:"w-full text-neutral-400 mb-3"},N={class:"mx-2 pt-[60px]"},D={class:"overflow-auto w-full"},V={class:"border-collapse table-auto w-full text-sm"},F=t("thead",null,[t("tr",{class:"border-b dark:border-slate-600 font-medium"},[t("th",{class:"border p-3 text-left"},"ID"),t("th",{class:"border p-3 text-left"},"UserID"),t("th",{class:"border p-3 text-left"},"\u53E3\u5EA7\u540D"),t("th",{class:"border p-3 text-left"},"\u9280\u884C\u540D"),t("th",{class:"border p-3 text-left"},"Point"),t("th",{class:"border p-3 text-left"},"\u91D1\u984D"),t("th",{class:"border p-3 text-left"},"\u5272\u5F15\u7387"),t("th",{class:"border p-3 text-left"},"\u65E5\u4ED8"),t("th",{class:"border p-3 text-left"},"\u78BA\u8A8D")])],-1),I={class:"bg-white dark:bg-slate-800"},P={class:"border-b border-slate-100 text-slate-500"},j={class:"px-3 py-2 border"},z={class:"px-3 py-2 border"},E={class:"px-3 py-2 border"},O={class:"px-3 py-2 border"},S={class:"px-3 py-2 border"},T={class:"px-3 py-2 border"},U={class:"px-3 py-2 border"},q={class:"px-3 py-2 border"},G={class:"px-3 py-2 border"},J=["onClick"],K={key:0},M={key:1};function Q(d,_,o,R,h,m){const x=l("Head"),i=l("Link"),f=l("AppLayout");return a(),n(p,null,[r(x,{title:"\u30DD\u30A4\u30F3\u30C8\u8A2D\u5B9A"}),r(f,null,{default:c(()=>[t("div",B,[t("div",H,[r(i,{href:"/admin/bank_payments?status=0",class:b(["inline-block md:px-8 px-4 py-1.5",{"bg-blue-900 text-white":o.status==0}])},{default:c(()=>[u(" \u672A\u632F\u8FBC ")]),_:1},8,["class"]),r(i,{href:"/admin/bank_payments?status=1",class:b(["inline-block md:px-8 px-4 py-1.5",{"bg-blue-900 text-white":o.status==1}])},{default:c(()=>[u(" \u632F\u8FBC\u6E08\u307F ")]),_:1},8,["class"])])]),t("div",N,[t("div",D,[t("table",V,[F,t("tbody",I,[(a(!0),n(p,null,g(h._payments,(s,y)=>(a(),n("tr",P,[t("td",j,e(y+1),1),t("td",z,e(s.user_id),1),t("td",E,e(s.account),1),t("td",O,e(s.bank_name),1),t("td",S,e(s.point*(100+s.pt_rate)/100),1),t("td",T,e(s.amount*(100-s.discount_rate)/100),1),t("td",U,e(s.discount_rate)+"%",1),t("td",q,e(s.updated_at),1),t("td",G,[t("button",{class:"border-b",onClick:W=>m.Confirm(s.id)},[o.status==0?(a(),n("span",K,"\u78BA\u8A8D")):(a(),n("span",M,"\u524A\u9664"))],8,J)])]))),256))])])])])]),_:1})],64)}const tt=C(A,[["render",Q]]);export{tt as default};
