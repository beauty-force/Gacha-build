import{H as b,L as g,r as _,o as a,c as o,b as l,w as y,F as n,d as t,t as s,e as h,g as i,f as w}from"./app.d61ad275.js";import{A as v}from"./Admin.6f6add82.js";import{F as k}from"./toastify.eb9b9840.js";import{G as j}from"./GachaButtons.16c296b9.js";import{P as B}from"./Pagination.907c5ca2.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./PlayIcon.64870d1f.js";import"./ChevronRightIcon.fa635e4d.js";import"./EllipsisHorizontalIcon.2487c521.js";const N={components:{Head:b,AppLayout:v,Footer:k,Link:g,GachaButtons:j,Pagination:B},props:{errors:Object,gachas:Object,category_share:Object,gacha_log:Array,is_admin:Boolean,search_cond:Object,total:Number,offset:Number},data(){return{}},methods:{format_number(d){return String(d).replace(/(.)(?=(\d{3})+$)/g,"$1,")}}},A={class:"w-full overflow-y-auto"},G={class:"md:w-[450px] w-full mx-auto bg-white"},P={class:"mx-auto relative"},F={class:"flex justify-end p-6 absolute top-0 w-full"},H={class:"rounded-full py-0.5 w-fit px-4 text-sm border-2 border-white bg-white items-center flex align-center"},O=t("span",{class:"text-sm"},"\u6B8B\xA0\xA0",-1),V={class:"font-semibold text-base"},C={class:"text-sm"},S=t("img",{src:"/images/icon_cash.png",class:"h-4"},null,-1),T={class:"font-semibold text-base"},D=t("span",null,"PT",-1),E=["src"],q={class:"w-full md:w-[760px] fixed flex justify-center bottom-4"},z={key:1,class:"w-full"},I={class:"flex flex-wrap justify-between items-center px-4 py-3 sticky top-[79px] bg-white"},J=t("h3",{class:"underline underline-offset-4 text-lg"},"\u6392\u51FA\u5C65\u6B74",-1),K={class:"overflow-auto px-1"},M={class:"min-w-full"},Q={class:"border-b border-collapse text-nowrap"},R=t("th",{class:"text-center py-2 px-2"},"\u756A\u53F7",-1),U=t("th",{class:"text-center py-2 px-2"},"\u540D\u524D",-1),W=t("th",{class:"text-center py-2 px-2"},"\u753B\u50CF",-1),X=t("th",{class:"text-center py-2 px-2"},"\u30EC\u30A2\u5EA6",-1),Y=t("th",{class:"text-center py-2 px-2"},"\u30DD\u30A4\u30F3\u30C8",-1),Z=t("th",{class:"text-center py-2 px-2"},"\u30E6\u30FC\u30B6\u30FC",-1),$=t("th",{class:"text-center py-2 px-2"},"\u6642\u9593",-1),tt={class:"border-b border-collapse text-sm"},et={class:"text-center py-2 px-2"},st={class:"text-center py-2 px-2"},at={class:"text-center py-1 px-2 flex justify-center min-w-20 items-center"},ot=["src"],ct={class:"text-center py-2 px-2"},nt={class:"text-center py-2 px-2"},rt={class:"text-center py-2 px-2"},_t={class:"text-center py-2 px-2"};function lt(d,it,e,dt,ht,r){const m=_("Head"),u=_("GachaButtons"),x=_("Pagination"),p=_("AppLayout");return a(),o(n,null,[l(m,{title:"\u30AC\u30C1\u30E3"}),l(p,null,{default:y(()=>[e.gacha_log.length==0?(a(),o(n,{key:0},[t("div",A,[t("div",G,[t("div",P,[t("div",F,[t("button",H,[e.gachas.data[0].count_card>0?(a(),o(n,{key:0},[O,t("span",V,s(r.format_number(e.gachas.data[0].count_rest)),1),t("span",C,"/"+s(r.format_number(e.gachas.data[0].count_card)),1),h(" \xA0\xA0\xA0\xA0 ")],64)):i("",!0),S,h("\xA0\xA0 "),t("span",T,s(r.format_number(e.gachas.data[0].point)),1),D])]),t("img",{src:e.gachas.data[0].image,class:"block w-full pb-48"},null,8,E)])])]),t("div",q,[l(u,{gacha:e.gachas.data[0]},null,8,["gacha"])])],64)):(a(),o("div",z,[t("div",I,[J,l(x,{search_cond:{...e.search_cond,id:e.gachas.data[0].id},route_name:"user.gacha",total:e.total},null,8,["search_cond","total"])]),t("div",K,[t("table",M,[t("thead",null,[t("tr",Q,[R,U,W,X,e.is_admin?(a(),o(n,{key:0},[Y,Z,$],64)):i("",!0)])]),t("tbody",null,[(a(!0),o(n,null,w(e.gacha_log,(c,f)=>(a(),o("tr",tt,[t("td",et,s(e.offset+f+1),1),t("td",st,s(c.name),1),t("td",at,[t("img",{class:"w-16",src:c.image},null,8,ot)]),t("td",ct,s(c.rare),1),e.is_admin?(a(),o(n,{key:0},[t("td",nt,s(r.format_number(c.point)),1),t("td",rt,s(c.email),1),t("td",_t,s(c.gacha_time),1)],64)):i("",!0)]))),256))])])])]))]),_:1})],64)}const vt=L(N,[["render",lt]]);export{vt as default};
