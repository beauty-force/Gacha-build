import{H as B,L as k,r as u,o as r,c as i,b as m,w as _,F as l,d as a,f as g,h as f,g as y}from"./app.7fb56541.js";import{A as x,B as z}from"./UserLayout.e7efd030.js";import{G as C}from"./GachaCard.ab035fcf.js";import{_ as G}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.d9665883.js";import"./toastify.8cfcbf9b.js";import"./GachaButtons.054c7894.js";import"./PlayIcon.1458eb84.js";const A={components:{Head:B,AppLayout:x,Link:k,Branch:z,GachaCard:C},props:{errors:Object,auth:Object,gachas:Object,category_share:Object},data(){return{orderBy:"order"}},computed:{sortedGachas(){let o=this.gachas.data;return this.orderBy=="point_up"&&o.sort((t,e)=>t.status!=e.status?t.status-e.status:t.point-e.point),this.orderBy=="point_down"&&o.sort((t,e)=>t.status!=e.status?t.status-e.status:e.point-t.point),this.orderBy=="order"&&o.sort((t,e)=>t.status!=e.status?t.status-e.status:t.order_level==e.order_level?e.id-t.id:e.order_level-t.order_level),o}},mounted(){this.initializeLazyLoading()},methods:{initializeLazyLoading(){const o=document.querySelectorAll("img.lazy"),t={root:null,rootMargin:"0px",threshold:.1},e=s=>{s.src=s.dataset.src},p=new IntersectionObserver((s,d)=>{s.forEach(n=>{n.isIntersecting&&(e(n.target),d.unobserve(n.target))})},t);o.forEach(s=>{p.observe(s)})},orderChanged(){this.$nextTick(()=>{this.initializeLazyLoading()})}}},H=a("title",null,"\u30DB\u30FC\u30E0",-1),O=a("meta",{name:"description",content:"eve-gacha"},null,-1),j=a("meta",{property:"og:url",content:"https://eve-gacha.com/"},null,-1),w=a("meta",{property:"og:title",content:"eve-gacha\uFF01"},null,-1),b=a("meta",{property:"og:description",content:"eve-gacha"},null,-1),E={class:"sm:px-4 px-4 mb-8 grid sm:grid-cols-2 grid-cols-1 gap-4 pt-4 pb-8"};function I(o,t,e,p,s,d){const n=u("Head"),h=u("GachaCard"),v=u("AppLayout");return r(),i(l,null,[m(n,null,{default:_(()=>[H,O,j,w,b]),_:1}),m(v,{is_home:!0},{default:_(()=>[a("div",E,[(r(!0),i(l,null,g(d.sortedGachas,(c,L)=>(r(),i(l,null,[c.count_rest?(r(),f(h,{key:0,gacha:c},null,8,["gacha"])):y("",!0)],64))),256)),(r(!0),i(l,null,g(d.sortedGachas,(c,L)=>(r(),i(l,null,[c.count_rest?y("",!0):(r(),f(h,{key:0,gacha:c},null,8,["gacha"]))],64))),256))])]),_:1})],64)}const D=G(A,[["render",I]]);export{D as default};