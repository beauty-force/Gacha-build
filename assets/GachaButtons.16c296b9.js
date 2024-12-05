import{L as g,u as p,G as d,o as n,c as r,d as t,n as h,t as o,g as l}from"./app.d61ad275.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as m}from"./PlayIcon.64870d1f.js";const x={components:{Link:g,PlayIcon:m},props:{gacha:Object},data(){return{category_share:p().props.value.category_share,str_gacha10:"",str_gacha50:"",str_gacha100:"",str_gacha500:"",point_10gacha:0,point_100gacha:0,point_500gacha:0,processing:!1}},methods:{format_number(c){return String(c).replace(/(.)(?=(\d{3})+$)/g,"$1,")},clickgacha(c){this.processing=!0,!this.url_edit&&d({id:this.gacha.id,number:c}).post(route("user.gacha.start_post"),{onFinish:()=>{this.processing=!1}})}},mounted(){this.gacha.count_rest<=10?(this.str_gacha10="\u5168\u3066",this.point_10gacha=this.gacha.count_rest*this.gacha.point):(this.str_gacha10="10\u9023",this.point_10gacha=10*this.gacha.point),this.gacha.count_rest<=100?(this.str_gacha100="\u5168\u3066",this.point_100gacha=this.gacha.count_rest*this.gacha.point):(this.str_gacha100="100\u9023",this.point_100gacha=100*this.gacha.point),this.gacha.count_rest<=500?(this.str_gacha500="\u5168\u3066",this.point_500gacha=this.gacha.count_rest*this.gacha.point):(this.str_gacha500="500\u9023",this.point_500gacha=500*this.gacha.point),this.url_edit||(this.url_card=route("user.gacha",this.gacha.id)+this.category_share.cat_route_appendix)}},f={key:0,class:"w-full mx-auto flex flex-col justify-center py-1 px-1 gap-2",style:{"max-width":"430px"}},b={class:"flex font-[mplus2] gap-2 flex-wrap"},y=["disabled"],w={class:"text-nowrap flex items-center justify-center"},v=t("span",{class:"font-extrabold text-[15px]"},"1\u56DE",-1),k=t("span",{class:"font-semibold text-[11px]"},"\u30AC\u30C1\u30E3",-1),j=t("img",{src:"/images/icon_cash.png",class:"ml-2 h-4"},null,-1),B={class:"font-semibold text-[13px]"},C=["disabled"],G={class:"text-nowrap flex items-center justify-center"},F={class:"font-extrabold text-[15px]"},L=t("span",{class:"font-semibold text-[11px]"},"\u30AC\u30C1\u30E3",-1),N=t("img",{src:"/images/icon_cash.png",class:"ml-2 h-4"},null,-1),P={class:"font-semibold text-[13px]"},S={class:"flex font-[mplus2] gap-1 flex-wrap"},V=["disabled"],z={class:"text-nowrap flex items-center justify-center"},D={class:"font-extrabold text-[15px]"},E=t("span",{class:"font-semibold text-[11px]"},"\u30AC\u30C1\u30E3",-1),I=t("img",{src:"/images/icon_cash.png",class:"ml-2 h-4"},null,-1),O={class:"font-semibold text-[13px]"};function q(c,e,i,A,s,a){return i.gacha.count_rest>0?(n(),r("div",f,[t("div",b,[t("button",{onClick:e[0]||(e[0]=_=>a.clickgacha(1)),class:h([{"opacity-50":s.processing},"cursor-pointer rounded-md bg-gradient-to-br border border-yellow-400/50 from-neutral-500 to-neutral-700 hover:from-neutral-600 hover:to-neutral-800 text-white flex-1 text-center space-y-1 pt-1.5 pb-2"]),disabled:s.processing},[t("div",w,[v,k,j,t("span",B,o(a.format_number(i.gacha.point)),1)])],10,y),i.gacha.count_rest>1?(n(),r("button",{key:0,onClick:e[1]||(e[1]=_=>a.clickgacha(10)),class:h([{"opacity-50":s.processing},"cursor-pointer rounded-md bg-gradient-to-br border border-yellow-400/50 from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white flex-1 text-center space-y-1 pt-1.5 pb-2"]),disabled:s.processing},[t("div",G,[t("span",F,o(s.str_gacha10),1),L,N,t("span",P,o(a.format_number(s.point_10gacha)),1)])],10,C)):l("",!0)]),t("div",S,[i.gacha.count_rest>10?(n(),r("button",{key:0,onClick:e[2]||(e[2]=_=>a.clickgacha(100)),class:h([{"opacity-50":s.processing},"cursor-pointer rounded-md bg-gradient-to-br border border-yellow-400/50 all_button text-white flex-1 text-center space-y-1 pt-1.5 pb-2"]),disabled:s.processing},[t("div",z,[t("span",D,o(s.str_gacha100),1),E,I,t("span",O,o(a.format_number(s.point_100gacha)),1)])],10,V)):l("",!0)])])):l("",!0)}const M=u(x,[["render",q]]);export{M as G};