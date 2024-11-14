import{H as b,L as v,r as c,o,c as r,b as d,w as u,F as p,d as e,e as _,f as h,n as y,t as i,g as k}from"./app.84fa7d66.js";import{A as w}from"./UserLayout.55f2707c.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.6a8a666e.js";import"./toastify.7aab60f1.js";const L={components:{Head:b,AppLayout:w,Link:v},props:{},data(){return{period:"",users:[],loading:!1,periods:[{title:"\u672C\u65E5",period:"daily"},{title:"\u9031\u9593",period:"weekly"},{title:"\u6708\u9593",period:"monthly"},{title:"\u5168\u671F\u9593",period:"total"}]}},setup(n){},mounted(){this.onPeriodSelection("daily")},methods:{onPeriodSelection(n){this.period!=n&&(this.loading=!0,this.users=[],this.period=n,axios.get(route("ranking.data",{period:this.period})).then(l=>{this.loading=!1,this.users=l.data.users}).catch(l=>{}))}}},j={class:"h-full flex flex-col"},H={class:"px-4 pt-4 pb-1"},A=e("h1",{class:"md:text-center text-lg font-bold"},"\u30E9\u30F3\u30AD\u30F3\u30B0",-1),B={class:"pt-2 w-full"},N={class:"w-full text-neutral-500 space-x-1 border-b-4 border-sky-500 px-4 flex justify-center"},S=["onClick"],V={class:"flex-1 relative"},z={key:0,class:"absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-neutral-300/75 z-[20]"},E=e("div",{class:"w-16 h-16 bg-white p-4 rounded-full shadow-lg"},[e("svg",{class:"animate-spin h-8 w-8 text-sky-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})])],-1),P=[E],F={class:"p-3"},D={key:0,class:"flex justify-center flex-col items-center gap-1 py-2 border-b"},M={class:"relative flex justify-center w-full pb-4"},R=["src"],T=e("img",{src:"/images/top_one.svg",class:"w-28 absolute bottom-0"},null,-1),q={class:"flex font-bold text-base"},G={class:"flex gap-1 items-center justify-center text-sm"},I=e("img",{src:"/images/icon_cash.png",class:"w-4 h-4"},null,-1),J={key:1,class:"flex items-center gap-2.5 border-b py-2"},K={class:"w-8 text-center text-xl font-[mplus2]"},O=["src"],Q={class:"space-y-0.5"},U={class:"flex font-bold text-base"},W={class:"flex gap-1 items-center text-sm"},X=e("img",{src:"/images/icon_cash.png",class:"w-4 h-4"},null,-1);function Y(n,l,Z,$,t,f){const m=c("Head"),g=c("Link"),x=c("AppLayout");return o(),r(p,null,[d(m,{title:"\u30E9\u30F3\u30AD\u30F3\u30B0"}),d(x,null,{default:u(()=>[e("div",j,[e("div",H,[A,d(g,{href:n.route("ranking.about"),class:"text-sm border border-sky-500 rounded-full px-3 py-1 hover:text-white hover:bg-sky-500 absolute top-4 right-3"},{default:u(()=>[_(" \u5831\u916C\u306B\u3064\u3044\u3066 ")]),_:1},8,["href"])]),e("div",B,[e("div",N,[(o(!0),r(p,null,h(t.periods,(s,a)=>(o(),r("button",{onClick:ee=>f.onPeriodSelection(s.period),class:y(["-mb-[1px] flex-1 inline-block text-center py-1.5 rounded-t-md border-sky-500 border-x border-t",{"bg-sky-500 text-white":s.period==t.period,"hover:bg-sky-400 hover:text-white":s.period!=t.period}])},i(s.title),11,S))),256))])]),e("div",V,[t.loading?(o(),r("div",z,P)):k("",!0),e("div",F,[(o(!0),r(p,null,h(t.users,(s,a)=>(o(),r("div",null,[s.total_points==t.users[0].total_points?(o(),r("div",D,[e("div",M,[e("img",{src:t.users[0].avatar?"/images/avatars/"+t.users[0].avatar:"/images/icon_user.png",class:"w-24 h-24 rounded-full border-[#EE4444] border-2"},null,8,R),T]),e("span",q,i(t.users[0].name),1),e("span",G,[I,_(" "+i(t.users[0].total_points),1)])])):(o(),r("div",J,[e("span",K,i(t.users[a-1].total_points!=s.total_points?a+1:""),1),e("img",{src:s.avatar?"/images/avatars/"+s.avatar:"/images/icon_user.png",class:"w-14 h-14 rounded-full border"},null,8,O),e("div",Q,[e("span",U,i(s.name),1),e("span",W,[X,_(" "+i(s.total_points),1)])])]))]))),256))])])])]),_:1})],64)}const ne=C(L,[["render",Y]]);export{ne as default};
