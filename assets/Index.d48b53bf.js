import{H as x,L as h,r as c,o,c as r,b as i,w as b,F as d,d as e,f as y,t as a,g as l,e as u}from"./app.e942467d.js";import{A as g}from"./UserLayout.d45ddc82.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.63cf126b.js";const w={components:{Head:x,UserLayout:g,Link:h},data(){return{is_busy:!1,is_admin:!1,purchase_uri:"user.point.purchase"}},props:{errors:Object,auth:Object,category_share:Object,points:Object,rank:Object,coupon_id:Number},methods:{format_number(n){return String(n).replace(/(.)(?=(\d{3})+$)/g,"$1,")}},mounted(){this.auth.user&&this.auth.user.type==1&&(this.is_admin=!0,this.purchase_uri="test.user.point.purchase")}},j={class:"md:px-4 px-2 text-neutral-600"},v=e("h1",{class:"my-6 font-bold text-center text-lg underline underline-offset-8"},"\xA0\xA0\xA0\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165\xA0\xA0\xA0",-1),L={class:"grid sm:grid-cols-3 grid-cols-2 md:px-4 px-2 justify-center md:gap-3 gap-2 pb-8"},N=["href"],O={class:"text-center flex justify-center"},H=["src"],V={key:0,class:"absolute -left-8 -top-1.5 bg-rose-500 font-bold text-sm text-white w-24 pt-4 pb-1 -rotate-45"},B={class:"flex-1 flex py-1.5 md:py-2.5 px-1.5 md:px-2 justify-between items-center relative bg-gradient-to-l from-sky-600 to-sky-400",style:{"z-index":"1"}},C={class:"rounded-full py-0.5 h-fit bg-white px-3 md:px-4 font-bold text-xs md:text-base"},U={class:"text-xs md:text-base flex flex-col items-center justify-center text-white font-bold"},A={key:0,class:"text-yellow-300 leading-5"},F=e("span",{class:"text-[9px]"},"\u30DC\u30FC\u30CA\u30B9",-1);function S(n,z,s,D,_,p){const f=c("Head"),m=c("UserLayout");return o(),r(d,null,[i(f,{title:"\u30DD\u30A4\u30F3\u30C8\u3092\u8CFC\u5165\u3059\u308B"}),i(m,null,{default:b(()=>[e("div",j,[v,e("div",L,[(o(!0),r(d,null,y(s.points.data,(t,E)=>(o(),r("a",{href:n.route(_.purchase_uri,{id:t.id,coupon_id:s.coupon_id}),class:"flex flex-col cursor-pointer border-2 border-solid border-sky-500 bg-white/30 text-center relative rounded-lg shadow-md overflow-hidden hover:shadow-[0_5px_10px_5px_#53ccff55] bg-slate-50"},[e("div",O,[e("img",{class:"inline-block w-full object-contain aspect-[1.2]",src:t.image},null,8,H)]),t.discount_rate>0?(o(),r("span",V,"-"+a(t.discount_rate)+"%",1)):l("",!0),e("div",B,[e("button",C," \xA5\xA0"+a(t.amount_str),1),e("span",U,[u(a(t.title)+" ",1),s.rank&&s.rank.pt_rate>0?(o(),r("span",A,[u("+ "+a(p.format_number(t.point*s.rank.pt_rate/100))+" ",1),F])):l("",!0)])])],8,N))),256))])])]),_:1})],64)}const J=k(w,[["render",S]]);export{J as default};