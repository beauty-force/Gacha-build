import{H as b,L as y,r as i,o as r,c as n,b as d,w as _,F as p,d as e,f as w,n as h,g as k,t as m}from"./app.190bf80c.js";import{A as v,B as L}from"./UserLayout.88414be3.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.99241c7a.js";const z={components:{Head:b,AppLayout:v,Link:y,Branch:L},props:{errors:Object,auth:Object,category_share:Object,products:Object},methods:{format_number(o){return String(o).replace(/(.)(?=(\d{3})+$)/g,"$1,")},initializeLazyLoading(){const o=document.querySelectorAll("img.lazy"),f={root:null,rootMargin:"0px",threshold:.1},l=s=>{s.src=s.dataset.src},u=new IntersectionObserver((s,c)=>{s.forEach(a=>{a.isIntersecting&&(l(a.target),c.unobserve(a.target))})},f);o.forEach(s=>{u.observe(s)})}},mounted(){this.initializeLazyLoading()}},O={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-3 pt-4 pb-8 px-4 sm:gap-x-3"},A={key:0,class:"w-full absolute z-10 bg-neutral-900/50 h-full flex items-center"},B=e("span",{class:"w-full text-white text-3xl font-black font-[mplus2]"},"SOLD OUT",-1),E=[B],H={class:"flex bg-white justify-center items-end"},C=e("span",{class:"text-sm leading-relaxed"},"\u6B8B\u308A\xA0",-1),S=e("span",{class:"text-sm leading-relaxed"},"\xA0\u679A",-1),$={class:"text-center w-full h-full bg-white flex p-2 justify-center"},D=["data-src"],I={class:"flex-1 bg-gradient-to-l to-sky-600 from-sky-400 py-1.5 flex flex-col gap-1"},N={class:"text-sm px-3 flex items-center text-white justify-center font-bold font-[mplus2]"},V={class:"text-white"},F={class:"rounded-full px-4 py-0.5 bg-white text-neutral-800 w-[100px] text-sm font-bold font-[mplus2]"};function P(o,f,l,u,s,c){const a=i("Head"),x=i("Link"),g=i("AppLayout");return r(),n(p,null,[d(a,{title:"EP\u4EA4\u63DB\u6240"}),d(g,{is_home:!0},{default:_(()=>[e("div",O,[(r(!0),n(p,null,w(l.products.data,(t,q)=>(r(),n("div",{class:h(["w-full flex",{grayscale:t.marks==0}])},[d(x,{href:t.marks>0?o.route("user.dp.detail",{id:t.id}):"",class:"text-center relative rounded-lg shadow-md border-2 border-gray-200 overflow-hidden flex flex-col"},{default:_(()=>[t.marks==0?(r(),n("div",A,E)):k("",!0),e("div",H,[C,e("span",{class:h(["font-semibold text-2xl",{"text-rose-500":t.marks<=5}])},m(t.marks),3),S]),e("div",$,[e("img",{class:"h-full object-contain lazy","data-src":t.image},null,8,D)]),e("div",I,[e("div",N,m(t.name),1),e("div",V,[e("span",F,m(c.format_number(t.dp))+"EP ",1)])])]),_:2},1032,["href"])],2))),256))])]),_:1})],64)}const J=j(z,[["render",P]]);export{J as default};