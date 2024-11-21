import{H as y,L as g,r as u,o as l,c as d,b as i,w as b,F as c,d as t,e as k,f as p,t as r}from"./app.ae475ae1.js";import{A as w}from"./UserLayout.77c564b5.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.f59e4cdb.js";const $={components:{Head:y,AppLayout:w,Link:g},props:{bonus:Object},data(){return{daily_bonus:[],weekly_bonus:[],monthly_bonus:[]}},mounted(){this.daily_bonus=this.getRankedOutput(this.bonus.daily),this.weekly_bonus=this.getRankedOutput(this.bonus.weekly),this.monthly_bonus=this.getRankedOutput(this.bonus.monthly)},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},getRankedOutput(s){const _=[];let a=0;for(let e=0;e<s.length;e++)if(e===s.length-1||s[e]!==s[e+1]){let o=e+1;o==s.length&&(o=10);let h=a+1===o?`${a+1}`:`${a+1} ~ ${o}`;_.push([h,this.format_number(s[e])]),a=e+1}return _}}},v={class:"h-full flex flex-col px-4 md:px-8 pb-10 md:items-center"},A={class:"pt-4 pb-4"},O=t("h1",{class:"md:text-center md:text-lg font-bold"},"\u30E9\u30F3\u30AD\u30F3\u30B0\u5831\u916C\u306B\u3064\u3044\u3066",-1),R=t("hr",{class:"w-full mb-2"},null,-1),H=t("h1",{class:"md:w-96 px-2 py-2 text-base font-bold"},"\u65E5\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),B={class:"w-full md:w-96"},N={class:"text-sm leading-8"},V={class:"border px-4"},C={class:"border px-4 font-bold"},F=t("tr",null,[t("td",{class:"border px-4"}," \u5831\u916C\u4ED8\u4E0E\u30BF\u30A4\u30DF\u30F3\u30B0 "),t("td",{class:"border px-4"}," \u7FCC\u65E5\u672A\u660E ")],-1),S=t("h1",{class:"md:w-96 pt-10 px-2 py-2 text-base font-bold"},"\u9031\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),j={class:"w-full md:w-96"},D={class:"text-sm leading-8"},E={class:"border px-4"},T={class:"border px-4 font-bold"},q=t("tr",null,[t("td",{class:"border px-4"}," \u5831\u916C\u4ED8\u4E0E\u30BF\u30A4\u30DF\u30F3\u30B0 "),t("td",{class:"border px-4"}," \u7FCC\u6708\u66DC\u65E5\u672A\u660E ")],-1),z=t("h1",{class:"md:w-96 pt-10 px-2 py-2 text-base font-bold"},"\u6708\u6B21\u30E9\u30F3\u30AD\u30F3\u30B0",-1),G={class:"w-full md:w-96"},I={class:"text-sm leading-8"},J={class:"border px-4"},K={class:"border px-4 font-bold"},M=t("tr",null,[t("td",{class:"border px-4"}," \u5831\u916C\u4ED8\u4E0E\u30BF\u30A4\u30DF\u30F3\u30B0 "),t("td",{class:"border px-4"}," \u7FCC\u6708\u672A\u660E ")],-1);function P(s,_,a,e,o,h){const m=u("Head"),x=u("Link"),f=u("AppLayout");return l(),d(c,null,[i(m,{title:"\u30E9\u30F3\u30AD\u30F3\u30B0\u5831\u916C\u306B\u3064\u3044\u3066"}),i(f,null,{default:b(()=>[t("div",v,[t("div",A,[O,i(x,{href:s.route("ranking"),class:"text-xs md:text-sm border border-sky-500 rounded-full px-3 py-1 hover:text-white hover:bg-sky-500 absolute top-4 right-3"},{default:b(()=>[k(" \u30AC\u30C1\u30E3\u30E9\u30F3\u30AD\u30F3\u30B0 ")]),_:1},8,["href"])]),R,H,t("table",B,[t("tbody",N,[(l(!0),d(c,null,p(o.daily_bonus,n=>(l(),d("tr",null,[t("td",V,r(n[0])+"\u4F4D ",1),t("td",C,r(n[1])+" coin ",1)]))),256)),F])]),S,t("table",j,[t("tbody",D,[(l(!0),d(c,null,p(o.weekly_bonus,n=>(l(),d("tr",null,[t("td",E,r(n[0])+"\u4F4D ",1),t("td",T,r(n[1])+" coin ",1)]))),256)),q])]),z,t("table",G,[t("tbody",I,[(l(!0),d(c,null,p(o.monthly_bonus,n=>(l(),d("tr",null,[t("td",J,r(n[0])+"\u4F4D ",1),t("td",K,r(n[1])+" coin ",1)]))),256)),M])])])]),_:1})],64)}const Y=L($,[["render",P]]);export{Y as default};
