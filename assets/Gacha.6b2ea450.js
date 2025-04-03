import{H as I,L as M,r as h,o as s,c as l,b as r,w as y,F as u,d as t,h as a,e as m,t as c,f as g,n as E,Z as T}from"./app.629cbf06.js";import{A as B}from"./Admin.23626adf.js";import{F as N,f as L,o as O,N as S,V as A,r as V}from"./Category.256bffab.js";import{G as z}from"./GachaButtons.a6a7b37b.js";import{P as G}from"./Pagination.4a6dd981.js";import{_ as P}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as F}from"./ExclamationTriangleIcon.5d756df7.js";import"./useConfirm.801861ec.js";import"./PlayIcon.ec0921ce.js";import"./ChevronRightIcon.a24b120a.js";import"./EllipsisHorizontalIcon.589a31e3.js";const H={components:{Head:I,AppLayout:B,Footer:N,Link:M,GachaButtons:z,Pagination:G,TransitionRoot:L,TransitionChild:O,Dialog:S,DialogOverlay:A,XMarkIcon:V,ExclamationTriangleIcon:F},props:{errors:Object,gacha:Object,category_share:Object,gacha_log:Array,is_admin:Boolean,search_cond:Object,total:Number,offset:Number},data(){return{products:[this.gacha.products.filter(i=>i.rank==1),this.gacha.products.filter(i=>i.rank==2),this.gacha.products.filter(i=>i.rank==3),this.gacha.products.filter(i=>i.rank==4)],last_product:this.gacha.products.filter(i=>i.is_last==1),isDialogMessage:!1,dialogMessage:"",image:""}},methods:{format_number(i){return String(i).replace(/(.)(?=(\d{3})+$)/g,"$1,")},openImage(i){this.image=i,this.isDialogMessage=!0}},computed:{progress_value(){return Math.round(this.gacha.count_rest*100/this.gacha.count_card)+"%"},progress_background_width(){return this.gacha.count_rest==0?"100%":Math.round(this.gacha.count_card*100/this.gacha.count_rest)+"%"}}},X={key:0,class:"w-full min-h-full"},R={class:"md:w-[680px] w-full mx-auto bg-white"},U={class:"mx-auto relative"},Z=["src"],q=["src"],J={class:"flex justify-center items-center flex-col w-full mx-auto px-2 font-[mplus2] py-6"},K={key:0,class:"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-12 w-full md:w-4/5 mx-auto",role:"alert"},Q={class:"flex font-bold pb-1 items-center gap-2"},W={class:"leading-6 md:leading-6 text-xs md:text-sm font-normal"},Y=t("br",null,null,-1),$=t("br",null,null,-1),tt=t("br",null,null,-1),et=t("br",null,null,-1),st={key:1,src:"/images/no1.jpg",class:"w-[50%] max-w-sm"},lt={key:2,class:"flex flex-wrap justify-center w-full my-4"},at=["onClick"],ot=["src"],nt=["src","alt"],ct={key:1,src:"/images/shipping_only.png",class:"absolute bottom-1.5 left-1.5 w-14 md:w-16"},it={key:2,class:"absolute bottom-2 right-2 bg-neutral-600 text-white px-2 py-0.5 min-w-16 font-[mplus2] flex justify-center"},rt={key:3,src:"/images/no2.jpg",class:"w-[50%] max-w-sm"},_t={key:4,class:"flex flex-wrap justify-center w-full my-4"},dt=["onClick"],mt=["src"],ut=["src","alt"],ht={key:1,src:"/images/shipping_only.png",class:"absolute bottom-1.5 left-1.5 w-11 md:w-14"},gt={key:2,class:"absolute bottom-2 right-2 bg-neutral-600 text-white px-2 py-0.5 min-w-16 font-[mplus2] flex justify-center"},pt={key:5,src:"/images/no3.jpg",class:"w-[50%] max-w-sm"},ft={key:6,class:"flex flex-wrap justify-center w-full my-4"},xt=["onClick"],yt=["src"],bt=["src","alt"],wt={key:1,src:"/images/shipping_only.png",class:"absolute bottom-1.5 left-1.5 w-11 md:w-12"},kt={key:2,class:"absolute bottom-2 right-2 bg-neutral-600 text-white px-2 py-0.5 min-w-16 font-[mplus2] flex justify-center"},vt={key:7,class:"text-xl font-bold text-green-500"},jt={key:8,class:"flex flex-wrap justify-center w-full my-4"},Ct=["onClick"],Dt=["src"],It=["src","alt"],Mt={key:1,src:"/images/shipping_only.png",class:"absolute bottom-1.5 left-1.5 w-11 md:w-12"},Et={key:2,class:"absolute bottom-2 right-2 bg-neutral-600 text-white px-2 py-0.5 min-w-16 font-[mplus2] flex justify-center"},Tt={key:9,src:"/images/last.jpg",class:"w-[50%] max-w-sm"},Bt={key:10,class:"flex flex-wrap justify-center w-full my-4"},Nt=["onClick"],Lt=["src"],Ot=["src","alt"],St={key:1,class:"absolute bottom-2 right-2 bg-neutral-600 text-white px-2 py-0.5 min-w-16 font-[mplus2] flex justify-center"},At=t("span",{class:"mt-8 mb-4 text-2xl font-bold"},"\u305D\u306E\u4ED6",-1),Vt=t("span",{class:"mb-4"},"\u30FB\u305D\u306E\u4ED6\u30AB\u30FC\u30C9\u3042\u308A",-1),zt=t("div",{class:"w-full md:w-[760px] mx-auto px-3 md:px-4 text-[9px] md:text-[11px] mb-8"},[t("div",{class:"leading-5"},[t("p",{class:"leading-8 text-xs md:text-sm font-bold text-center"},"\u30A4\u30D6\u30AC\u30C1\u30E3 \u30AA\u30F3\u30E9\u30A4\u30F3\u30AA\u30EA\u30D1 \u6CE8\u610F\u4E8B\u9805"),t("p",{class:"py-1"},"\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u3054\u5229\u7528\u3044\u305F\u3060\u304F\u524D\u306B\u3001\u4EE5\u4E0B\u306E\u6CE8\u610F\u4E8B\u9805\u3092\u5FC5\u305A\u304A\u8AAD\u307F\u304F\u3060\u3055\u3044\u3002\u8CFC\u5165\u3092\u3082\u3063\u3066\u3001\u3059\u3079\u3066\u306E\u4E8B\u9805\u306B\u540C\u610F\u3044\u305F\u3060\u3044\u305F\u3082\u306E\u3068\u307F\u306A\u3057\u307E\u3059\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"1. \u50B7\u3084\u6C5A\u308C\u306E\u3042\u308B\u30AB\u30FC\u30C9\u30FB\u30B1\u30FC\u30B9\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u30AA\u30F3\u30E9\u30A4\u30F3\u30AA\u30EA\u30D1\u306B\u542B\u307E\u308C\u308B\u30AB\u30FC\u30C9\u306B\u306F\u3001\u521D\u671F\u50B7\u3084\u7D4C\u5E74\u52A3\u5316\u306B\u3088\u308B\u50B7\u30FB\u6C5A\u308C\u304C\u3042\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002\u5546\u54C1\u753B\u50CF\u306F\u30A4\u30E1\u30FC\u30B8\u3067\u3042\u308A\u3001\u5B9F\u969B\u306E\u30AB\u30FC\u30C9\u306E\u72B6\u614B\u3084\u6392\u51FA\u5185\u5BB9\u3092\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u63B2\u8F09\u3055\u308C\u3066\u3044\u306A\u3044\u30AB\u30FC\u30C9\u3082\u6392\u51FA\u3055\u308C\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002"),t("p",{class:"py-1"},"\u30FB\u9451\u5B9A\u6E08\u307F\u30AB\u30FC\u30C9\uFF08PSA\u7B49\uFF09\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u9451\u5B9A\u6E08\u307F\u30AB\u30FC\u30C9\u306F\u3001\u9451\u5B9A\u6A5F\u95A2\u304C\u5B9A\u3081\u305F\u30B0\u30EC\u30FC\u30C9\u3092\u57FA\u306B\u8CA9\u58F2\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u30B1\u30FC\u30B9\u5185\u90E8\u306B\u78BA\u8A8D\u3067\u304D\u308B\u50B7\u3084\u7570\u7269\u306B\u3064\u3044\u3066\u306E\u30AF\u30EC\u30FC\u30E0\u3001\u8FD4\u54C1\u30FB\u4EA4\u63DB\u306B\u306F\u5BFE\u5FDC\u3044\u305F\u3057\u304B\u306D\u307E\u3059\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"2. \u672A\u958B\u5C01\u54C1\u306E\u72B6\u614B\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u672A\u958B\u5C01\u54C1\u3067\u3042\u3063\u3066\u3082\u3001\u5916\u88C5\u306B\u8EFD\u5FAE\u306A\u50B7\u3084\u51F9\u307F\u3001\u30B7\u30E5\u30EA\u30F3\u30AF\u306E\u7834\u308C\u3001\u30B7\u30FC\u30EB\u75D5\u306A\u3069\u304C\u3042\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002\u307E\u305F\u3001BOX\u306E\u518D\u30B7\u30E5\u30EA\u30F3\u30AF\u306E\u53EF\u80FD\u6027\u3092\u5B8C\u5168\u306B\u6392\u9664\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"),t("p",{class:"py-1"},"\u30FB\u5F53\u793E\u3067\u306F\u672A\u958B\u5C01\u54C1\u306B\u5BFE\u3057\u3066\u5165\u5FF5\u306A\u691C\u54C1\u3092\u884C\u3063\u3066\u304A\u308A\u307E\u3059\u304C\u3001\u4E07\u304C\u4E00\u306E\u305F\u3081\u3001\u5546\u54C1\u5230\u7740\u304B\u3089\u958B\u5C01\u307E\u3067\u306E\u52D5\u753B\u64AE\u5F71\u3092\u63A8\u5968\u3044\u305F\u3057\u307E\u3059\u3002\u52D5\u753B\u5185\u3067\u507D\u9020\u54C1\u3068\u78BA\u8A8D\u3067\u304D\u305F\u5834\u5408\u306B\u9650\u308A\u3001\u8FD4\u54C1\u30FB\u4EA4\u63DB\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3059\u3002"),t("p",{class:"py-1"},"\u30FB\u52D5\u753B\u64AE\u5F71\u306E\u969B\u306F\u3001\u3059\u3079\u3066\u306E\u68B1\u5305\u7269\u304C\u753B\u9762\u5185\u306B\u6620\u308B\u3088\u3046\u306B\u3054\u914D\u616E\u304F\u3060\u3055\u3044\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"3. \u7DCF\u9084\u5143\u7387\u304A\u3088\u3073\u62BD\u9078\u7D50\u679C\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u7DCF\u9084\u5143\u7387\u306F\u3001\u30AA\u30EA\u30D1\u3092\u5168\u3066\u5F15\u3044\u305F\u5834\u5408\u306E\u7406\u8AD6\u5024\u306B\u57FA\u3065\u3044\u3066\u7B97\u51FA\u3055\u308C\u3066\u304A\u308A\u307E\u3059\u3002\u305F\u3060\u3057\u3001\u500B\u5225\u306E\u62BD\u9078\u7D50\u679C\u306B\u3088\u3063\u3066\u5F97\u3089\u308C\u308B\u30AB\u30FC\u30C9\u306E\u8A2D\u5B9A\u30B3\u30A4\u30F3\u984D\u306F\u30E9\u30F3\u30C0\u30E0\u3067\u3042\u308A\u3001\u3059\u3079\u3066\u306E\u62BD\u9078\u30671\u53E3\u3042\u305F\u308A\u306E\u8A2D\u5B9A\u91D1\u984D\u3092\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"4. \u8FD4\u54C1\u30FB\u4EA4\u63DB\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED5\u69D8\u4E0A\u3001\u5546\u54C1\u306E\u4EA4\u63DB\u30FB\u8FD4\u91D1\u306F\u4E00\u5207\u3067\u304D\u307E\u305B\u3093\u3002"),t("p",{class:"py-1"},"\u30FB\u305F\u3060\u3057\u3001\u5546\u54C1\u304C\u507D\u9020\u54C1\u3067\u3042\u308B\u3053\u3068\u304C\u52D5\u753B\u306B\u3088\u3063\u3066\u8A3C\u660E\u3055\u308C\u305F\u5834\u5408\u306B\u9650\u308A\u3001\u8FD4\u54C1\u30FB\u4EA4\u63DB\u3092\u53D7\u3051\u4ED8\u3051\u307E\u3059\uFF08\u8A73\u7D30\u306F\u300C\u672A\u958B\u5C01\u54C1\u306E\u72B6\u614B\u306B\u3064\u3044\u3066\u300D\u3092\u3054\u53C2\u7167\u304F\u3060\u3055\u3044\uFF09\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"5. \u8CA9\u58F2\u7D42\u4E86\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u5546\u54C1\u306F\u4E88\u544A\u306A\u304F\u8CA9\u58F2\u3092\u7D42\u4E86\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"6. \u5546\u54C1\u753B\u50CF\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u63B2\u8F09\u3055\u308C\u3066\u3044\u308B\u5546\u54C1\u753B\u50CF\u306F\u3042\u304F\u307E\u3067\u30A4\u30E1\u30FC\u30B8\u3067\u3042\u308A\u3001\u5B9F\u969B\u306E\u30AB\u30FC\u30C9\u306E\u72B6\u614B\u3084\u6392\u51FA\u72B6\u6CC1\u3092\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u307E\u305F\u3001\u63B2\u8F09\u753B\u50CF\u306B\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u30AB\u30FC\u30C9\u304C\u6392\u51FA\u3055\u308C\u308B\u5834\u5408\u3082\u3054\u3056\u3044\u307E\u3059\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"7. \u30A8\u30C7\u30A3\u30B7\u30E7\u30F3\u306B\u3064\u3044\u3066\uFF081st Edition / Unlimited\uFF09"),t("p",{class:"py-1"},"\u30FB1st Edition\uFF081ED\uFF09\u304C\u5B58\u5728\u3059\u308B\u30AB\u30FC\u30C9\u306B\u95A2\u3057\u3066\u3001\u5546\u54C1\u30BF\u30A4\u30C8\u30EB\u306B\u30A8\u30C7\u30A3\u30B7\u30E7\u30F3\u8868\u8A18\u304C\u306A\u3044\u5834\u5408\u30011ED\u307E\u305F\u306F\u30A2\u30F3\u30EA\u30DF\u30C6\u30C3\u30C9\uFF081ED\u8868\u8A18\u306A\u3057\uFF09\u3092\u9078\u629E\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u5546\u54C1\u753B\u50CF\u304C1ED\u306E\u3082\u306E\u3067\u3042\u3063\u3066\u3082\u3001\u5546\u54C1\u30BF\u30A4\u30C8\u30EB\u306B\u30A8\u30C7\u30A3\u30B7\u30E7\u30F3\u306E\u8A18\u8F09\u304C\u306A\u3051\u308C\u3070\u3001\u3069\u3061\u3089\u304C\u6392\u51FA\u3055\u308C\u308B\u304B\u306F\u4FDD\u8A3C\u3067\u304D\u307E\u305B\u3093\u306E\u3067\u3001\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"),t("p",{class:"leading-8 font-semibold pt-2"},"8. \u62BD\u9078\u6F14\u51FA\u52D5\u753B\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u6F14\u51FA\u52D5\u753B\u306F\u3001\u96FB\u6CE2\u72B6\u6CC1\u3084\u7AEF\u672B\u3001OS\u306E\u4ED5\u69D8\u306B\u3088\u308A\u9069\u5207\u306B\u8868\u793A\u3055\u308C\u306A\u3044\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u3067\u3082\u3001\u666F\u54C1\u306E\u6392\u51FA\u306B\u306F\u5F71\u97FF\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u307E\u305F\u3001\u6F14\u51FA\u7D50\u679C\u306F\u7B49\u7D1A\u3092\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u306A\u304F\u3001\u5229\u7528\u3057\u305F\u30B3\u30A4\u30F3\u306E\u518D\u4ED8\u4E0E\u30FB\u5546\u54C1\u3078\u306E\u4EA4\u63DB\u30FB\u8FD4\u91D1\u5BFE\u5FDC\u306B\u306F\u5BFE\u5FDC\u3044\u305F\u3057\u304B\u306D\u307E\u3059\u3002"),m(" \u4EE5\u4E0A\u306E\u5185\u5BB9\u3092\u3054\u78BA\u8A8D\u306E\u3046\u3048\u3001\u3054\u4E86\u627F\u3044\u305F\u3060\u3044\u305F\u65B9\u306E\u307F\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002. "),t("p",{class:"leading-8 font-semibold pt-2"},"9. \u30E9\u30F3\u30AF\u30DD\u30A4\u30F3\u30C8\u304A\u3088\u3073\u30AC\u30C1\u30E3\u30E9\u30F3\u30AD\u30F3\u30B0\u306B\u3064\u3044\u3066"),t("p",{class:"py-1"},"\u30FB\u9084\u5143\u7387101%\u3092\u8D85\u3048\u308B\u30AC\u30C1\u30E3\u3001\u30ED\u30B0\u30A4\u30F3\u30AA\u30EA\u30D1\u3001\u9650\u5B9A\u30AC\u30C1\u30E3\u306A\u3069\u306F\u3001\u30E9\u30F3\u30AF\u30DD\u30A4\u30F3\u30C8\u304A\u3088\u3073\u30AC\u30C1\u30E3\u30E9\u30F3\u30AD\u30F3\u30B0\u306E\u5897\u6E1B\u5BFE\u8C61\u306B\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002")])],-1),Gt={class:"w-full bg-neutral-700 sticky bottom-0 mt-4"},Pt={class:"mx-auto md:max-w-md px-1 py-2"},Ft={class:"w-full flex flex-col justify-center flex-1"},Ht={class:"text-white font-[mplus2]"},Xt={class:"flex justify-between items-center pt-2 w-full"},Rt={class:"flex items-end gap-1.5 w-[45%] px-3"},Ut=t("img",{src:"/images/icon_cash.png",class:"h-5 mb-1"},null,-1),Zt={class:"text-white text-base md:text-xl font-bold"},qt=t("span",{class:"text-gray-300 text-xs pb-0.5 text-nowrap"},"/1\u56DE",-1),Jt={class:"flex-1 flex flex-col items-end gap-1.5 pr-2"},Kt={key:0,class:"text-white text-sm pr-1"},Qt={key:1,class:"flex items-center"},Wt=t("span",{class:"font-semibold pr-2"},"- / -",-1),Yt=[Wt],$t={class:"w-full mb-2.5"},te={class:"w-full h-2.5 rounded-full overflow-hidden flex bg-neutral-800"},ee={key:1,class:"w-full"},se={class:"flex flex-wrap justify-between items-center px-4 py-3 sticky top-[79px] bg-white"},le=t("h3",{class:"underline underline-offset-4 text-lg"},"\u6392\u51FA\u5C65\u6B74",-1),ae={class:"overflow-auto px-1"},oe={class:"min-w-full"},ne={class:"border-b border-collapse text-nowrap"},ce=t("th",{class:"text-center py-2 px-2"},"\u756A\u53F7",-1),ie=t("th",{class:"text-center py-2 px-2"},"\u540D\u524D",-1),re=t("th",{class:"text-center py-2 px-2"},"\u753B\u50CF",-1),_e=t("th",{class:"text-center py-2 px-2"},"\u30EC\u30A2\u5EA6",-1),de=t("th",{class:"text-center py-2 px-2"},"\u30DD\u30A4\u30F3\u30C8",-1),me=t("th",{class:"text-center py-2 px-2"},"\u30E6\u30FC\u30B6\u30FC",-1),ue=t("th",{class:"text-center py-2 px-2"},"\u6642\u9593",-1),he={class:"border-b border-collapse text-sm"},ge={class:"text-center py-2 px-2"},pe={class:"text-center py-2 px-2"},fe={class:"text-center py-1 px-2 flex justify-center min-w-20 items-center"},xe=["src"],ye={class:"text-center py-2 px-2"},be={class:"text-center py-2 px-2"},we={class:"text-center py-2 px-2"},ke={class:"text-center py-2 px-2"},ve=["src"];function je(i,f,o,Ce,n,_){const w=h("Head"),k=h("ExclamationTriangleIcon"),p=h("XMarkIcon"),v=h("GachaButtons"),j=h("Pagination"),b=h("TransitionChild"),C=h("TransitionRoot"),D=h("AppLayout");return s(),l(u,null,[r(w,{title:"\u30AC\u30C1\u30E3"}),r(D,null,{default:y(()=>[o.gacha_log.length==0?(s(),l("div",X,[t("div",R,[t("div",U,[o.gacha.image!=""?(s(),l("img",{key:0,src:o.gacha.image,class:"block w-full"},null,8,Z)):a("",!0),o.gacha.image==""?(s(),l("img",{key:1,src:o.gacha.thumbnail,class:"block w-full md:w-4/5 mx-auto"},null,8,q)):a("",!0),t("div",J,[o.gacha.spin_limit>0?(s(),l("div",K,[t("p",Q,[r(k,{class:"w-7 h-7"}),m(" \u6CE8\u610F")]),t("p",W,[m(" \u5F53\u30AC\u30C1\u30E3\u306F\u591A\u304F\u306E\u65B9\u3078\u9084\u5143\u3059\u308B\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3066\u304A\u308A\u307E\u3059\u3002"),Y,m(" \u304A\u3072\u3068\u308A\u69D8\u5F53\u305F\u308A"+c(o.gacha.spin_limit.toLocaleString())+"\u53E3\u6570\u5236\u9650\u3092\u8A2D\u5B9A\u3055\u305B\u3066\u3044\u3066\u304A\u308A\u307E\u3059\u3002",1),$,m(" \u4E88\u3081\u3054\u4E86\u627F\u4E0B\u306E\u4E0A\u3001\u3054\u8CFC\u5165\u304F\u3060\u3055\u3044\u3002"),tt,m(" \u306A\u304A\u53E3\u6570\u5236\u9650\u306F\u6BCE\u65E518\u6642\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002"),et])])):a("",!0),n.products[0].length>0?(s(),l("img",st)):a("",!0),n.products[0].length>0?(s(),l("div",lt,[(s(!0),l(u,null,g(n.products[0],(e,d)=>(s(),l("button",{key:d,onClick:x=>_.openImage(e.image),class:"w-1/2 p-2 relative"},[t("img",{src:e.image,class:"w-full"},null,8,ot),e.badge?(s(),l("img",{key:0,src:e.badge,class:"absolute top-2.5 right-2.5 w-12 md:w-14",alt:e.badge},null,8,nt)):a("",!0),e.lost_type?(s(),l("img",ct)):a("",!0),e.marks>0?(s(),l("span",it,[r(p,{class:"w-5"}),m(" "+c(e.marks),1)])):a("",!0)],8,at))),128))])):a("",!0),n.products[1].length>0?(s(),l("img",rt)):a("",!0),n.products[1].length>0?(s(),l("div",_t,[(s(!0),l(u,null,g(n.products[1],(e,d)=>(s(),l("button",{key:d,onClick:x=>_.openImage(e.image),class:"w-1/3 p-2 relative"},[t("img",{src:e.image,class:"w-full"},null,8,mt),e.badge?(s(),l("img",{key:0,src:e.badge,class:"absolute top-2.5 right-2.5 w-10 md:w-12",alt:e.badge},null,8,ut)):a("",!0),e.lost_type?(s(),l("img",ht)):a("",!0),e.marks>0?(s(),l("span",gt,[r(p,{class:"w-5"}),m(" "+c(e.marks),1)])):a("",!0)],8,dt))),128))])):a("",!0),n.products[2].length>0?(s(),l("img",pt)):a("",!0),n.products[2].length>0?(s(),l("div",ft,[(s(!0),l(u,null,g(n.products[2],(e,d)=>(s(),l("button",{key:d,onClick:x=>_.openImage(e.image),class:"w-1/4 p-2 relative"},[t("img",{src:e.image,class:"w-full"},null,8,yt),e.badge?(s(),l("img",{key:0,src:e.badge,class:"absolute top-2.5 right-2.5 w-10 md:w-11",alt:e.badge},null,8,bt)):a("",!0),e.lost_type?(s(),l("img",wt)):a("",!0),e.marks>0?(s(),l("span",kt,[r(p,{class:"w-5"}),m(" "+c(e.marks),1)])):a("",!0)],8,xt))),128))])):a("",!0),n.products[3].length>0?(s(),l("span",vt,"( 4\u7B49 )")):a("",!0),n.products[3].length>0?(s(),l("div",jt,[(s(!0),l(u,null,g(n.products[3],(e,d)=>(s(),l("button",{key:d,onClick:x=>_.openImage(e.image),class:"w-1/4 p-2 relative"},[t("img",{src:e.image,class:"w-full"},null,8,Dt),e.badge?(s(),l("img",{key:0,src:e.badge,class:"absolute top-2.5 right-2.5 w-10 md:w-11",alt:e.badge},null,8,It)):a("",!0),e.lost_type?(s(),l("img",Mt)):a("",!0),e.marks>0?(s(),l("span",Et,[r(p,{class:"w-5"}),m(" "+c(e.marks),1)])):a("",!0)],8,Ct))),128))])):a("",!0),n.last_product.length>0?(s(),l("img",Tt)):a("",!0),n.last_product.length>0?(s(),l("div",Bt,[(s(!0),l(u,null,g(n.last_product,(e,d)=>(s(),l("button",{key:d,onClick:x=>_.openImage(e.image),class:"w-1/3 p-2 relative"},[t("img",{src:e.image,class:"w-full"},null,8,Lt),e.badge?(s(),l("img",{key:0,src:e.badge,class:"absolute top-2.5 right-2.5 w-10 md:w-12",alt:e.badge},null,8,Ot)):a("",!0),e.marks>0?(s(),l("span",St,[r(p,{class:"w-5"}),m(" "+c(e.marks),1)])):a("",!0)],8,Nt))),128))])):a("",!0),At,Vt])])]),zt,t("div",Gt,[t("div",Pt,[t("div",Ft,[t("div",Ht,[t("div",Xt,[t("div",Rt,[Ut,t("span",Zt,c(_.format_number(o.gacha.point)),1),qt]),t("div",Jt,[o.gacha.count_card>0?(s(),l("span",Kt," \u306E\u3053\u308A "+c(_.format_number(o.gacha.count_rest))+" / "+c(_.format_number(o.gacha.count_card)),1)):(s(),l("div",Qt,Yt)),t("div",$t,[t("div",te,[t("div",{class:E(["h-full rounded-full border-neutral-800",{"bg-gradient-to-r from-[#dd422d] via-[#fae94e] to-[#02ec0e]":o.gacha.count_card>0,"bg-[#02ec0e] w-full":o.gacha.count_card==0}]),style:T(o.gacha.count_card>0?{width:_.progress_value,backgroundSize:_.progress_background_width}:{})},null,6)])])])])])]),r(v,{gacha:o.gacha},null,8,["gacha"])])])])):(s(),l("div",ee,[t("div",se,[le,r(j,{search_cond:{...o.search_cond,id:o.gacha.id},route_name:"user.gacha",total:o.total},null,8,["search_cond","total"])]),t("div",ae,[t("table",oe,[t("thead",null,[t("tr",ne,[ce,ie,re,_e,o.is_admin?(s(),l(u,{key:0},[de,me,ue],64)):a("",!0)])]),t("tbody",null,[(s(!0),l(u,null,g(o.gacha_log,(e,d)=>(s(),l("tr",he,[t("td",ge,c(o.offset+d+1),1),t("td",pe,c(e.name),1),t("td",fe,[t("img",{class:"w-16",src:e.image},null,8,xe)]),t("td",ye,c(e.rare),1),o.is_admin?(s(),l(u,{key:0},[t("td",be,c(_.format_number(e.point)),1),t("td",we,c(e.email),1),t("td",ke,c(e.gacha_time),1)],64)):a("",!0)]))),256))])])])])),r(C,{show:n.isDialogMessage,class:"h-full fixed inset-0 z-40 top-0"},{default:y(()=>[r(b,{enter:"transition ease-in-out duration-100 transform","enter-from":"scale-50","enter-to":"scale-100",leave:"transition ease-in-out duration-200 transform","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:y(()=>[t("div",{class:"relative z-20 w-full mx-auto md:w-[768px] h-screen flex items-center",onClick:f[0]||(f[0]=e=>n.isDialogMessage=!1)},[t("img",{src:n.image,class:"mx-auto max-h-[80%] max-w-[80%] w-full object-contain"},null,8,ve)])]),_:1}),r(b,{enter:"transition-opacity ease-linear duration-100","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-100","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:y(()=>[t("div",{class:"fixed inset-0 bg-white h-full",onClick:f[1]||(f[1]=e=>n.isDialogMessage=!1)})]),_:1})]),_:1},8,["show"])]),_:1})],64)}const Ve=P(H,[["render",je]]);export{Ve as default};
