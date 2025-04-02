import{H as w,L as v,G as _,E as j,r as c,o as d,c as i,b as l,w as u,F as p,d as e,J as m,K as h,f as k,t as x,e as L}from"./app.8d754d61.js";import{A as P}from"./Admin.dd41774e.js";import{P as C}from"./Pagination.6fcca157.js";import{u as E}from"./useConfirm.801861ec.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.e5921053.js";import"./ChevronRightIcon.acdd368c.js";import"./EllipsisHorizontalIcon.88ded4af.js";const{confirm:O}=E(),A={components:{Head:w,AppLayout:P,Link:v,Pagination:C,useForm:_},props:{errors:Object,auth:Object,category_share:Object,products:Object,search_cond:Object,total:Number},data(){return{}},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},destroyDp(s){O("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F","","error").then(r=>{r&&j.Inertia.delete(route("admin.dp.destroy",{id:s}),{preserveScroll:!0})})},search(){this.form_search.get(route("admin.dp"))},clear(){this.form_search.name="",this.form_search.min="",this.form_search.max="",this.search()}},setup(s){return{form_search:_(s.search_cond)}}},D={class:"pt-6 md:px-6 px-4"},H=e("h1",{class:"mb-2 text-lg font-bold"},"EP \u8A2D\u5B9A",-1),N={class:"flex items-center gap-2 w-full flex-wrap mb-2 justify-between border p-2 text-sm"},B={class:"flex flex-col gap-2 flex-1"},F={class:"flex items-center gap-2"},S=e("label",{class:"w-16 text-right"},"\u540D\u524D",-1),U={class:"flex items-center gap-2"},I=e("label",{class:"w-16 text-right"},"EP",-1),T=e("span",null,"~",-1),G={class:"flex flex-col gap-2"},J=e("hr",{class:"my-4"},null,-1),K={class:"flex flex-wrap justify-evenly"},M=e("div",{class:"rounded-full bg-green-500 text-3xl text-neutral-100 h-10 w-10"}," + ",-1),q={class:"mb-4 bg-white text-center relative rounded-lg shadow-md",style:{width:"160px",height:"220px"}},z={class:"text-center h-3/5 pt-2 px-1 flex justify-center",style:{height:"63%"}},Q=["src"],R={class:"text-sm px-3 flex items-center justify-center font-bold",style:{height:"20%"}},W={class:"p-1",style:{height:"17%"}},X={class:"rounded-full py-0.5 bg-neutral-800 text-neutral-100 w-[100px] text-xs h-5/6"},Y=["onClick"];function Z(s,r,n,o,$,a){const g=c("Head"),b=c("Pagination"),f=c("Link"),y=c("AppLayout");return d(),i(p,null,[l(g,{title:"EP \u8A2D\u5B9A"}),l(y,null,{default:u(()=>[e("div",D,[H,e("div",N,[e("div",B,[e("div",F,[S,m(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>o.form_search.name=t),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[h,o.form_search.name]])]),e("div",U,[I,m(e("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>o.form_search.min=t),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[h,o.form_search.min]]),T,m(e("input",{"onUpdate:modelValue":r[2]||(r[2]=t=>o.form_search.max=t),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[h,o.form_search.max]])])]),e("div",G,[e("button",{type:"button",onClick:r[3]||(r[3]=(...t)=>a.clear&&a.clear(...t)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u521D\u671F\u5316"),e("button",{type:"button",onClick:r[4]||(r[4]=(...t)=>a.search&&a.search(...t)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u691C\u7D22")])]),l(b,{search_cond:n.search_cond,route_name:"admin.dp",total:n.total},null,8,["search_cond","total"]),J,e("div",K,[l(f,{href:s.route("admin.dp.create")+n.category_share.cat_route_appendix,class:"mb-4 bg-white text-center relative rounded-lg shadow-md flex justify-center items-center",style:{width:"160px",height:"220px"}},{default:u(()=>[M]),_:1},8,["href"]),(d(!0),i(p,null,k(n.products.data,(t,ee)=>(d(),i("div",q,[e("div",z,[e("img",{class:"inline-block object-contain",src:t.image},null,8,Q)]),e("div",R,x(t.name),1),e("div",W,[e("button",X,x(a.format_number(t.dp))+"EP ",1)]),l(f,{href:s.route("admin.dp.edit",{id:t.id})+n.category_share.cat_route_appendix,class:"rounded absolute top-0 right-0 px-4 py-2 bg-green-500 text-xs text-neutral-50"},{default:u(()=>[L(" \u7DE8\u96C6\u3059\u308B ")]),_:2},1032,["href"]),e("button",{onClick:te=>a.destroyDp(t.id),class:"rounded absolute top-0 left-0 px-4 py-2 bg-red-500 text-xs text-neutral-50"}," \u524A\u9664 ",8,Y)]))),256))])])]),_:1})],64)}const ie=V(A,[["render",Z]]);export{ie as default};
