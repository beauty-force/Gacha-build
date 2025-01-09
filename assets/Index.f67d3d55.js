import{H as j,L as V,G as g,r as m,o as c,c as d,b as k,w,F as h,d as e,f as b,h as D,e as H,t as o,n as x,J as f,K as v,g as _,a2 as y}from"./app.509c113c.js";import{A as O}from"./Admin.d2b7b418.js";import{P}from"./Pagination.78495fea.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";import{a as B}from"./toastify.ba563aa9.js";import{r as F}from"./ChevronRightIcon.c1812360.js";import{r as I}from"./EllipsisHorizontalIcon.49426ee6.js";const N={components:{Head:j,AppLayout:O,Link:V,ChevronLeftIcon:B,ChevronRightIcon:F,EllipsisHorizontalIcon:I,Pagination:P},props:{errors:Object,gacha:Object,category_share:Object,products:Object,search_cond:Object},data(){return{hasCheck:!1,main_tab:[{title:"\u672A\u767A\u9001",route_url:route("admin.delivery"),is_active:!0},{title:"\u767A\u9001\u6E08\u307F",route_url:route("admin.delivery.completed"),is_active:!1}],page_step:0,is_busy:!1,profile:{},user_products:[],user:{},hasCheck:!1,isCheckAll:!1}},setup(n){const t=g(n.search_cond);return{form:g({user_id:0,checks:{},tracking_number:""}),form_search:t}},methods:{changeCheck(){let n,t=!1;for(this.isCheckAll=this.user_products.length>0,n=0;n<this.user_products.length;n++)this.form.checks["id"+this.user_products[n].id]?t=!0:this.isCheckAll=!1;this.hasCheck=t},showProductDetail(n){this.is_busy=!0;const t={user_id:n};axios.post(route("admin.delivery.product_data"),t).then(i=>{if((i.status==201||i.status==200)&&i.data.status){this.profile=i.data.profile,this.user=i.data.user,this.user_products=i.data.products,this.page_step=1,this.form.user_id=this.user.id,this.form.checks={},this.hasCheck=this.isCheckAll=!1;let l;for(l=0;l<this.user_products.length;l++)this.form.checks["id"+this.user_products[l].id]=!1}this.is_busy=!1}).catch(i=>{this.is_busy=!0})},backToList(){this.page_step=0},submit(){this.hasCheck&&confirm("\u9078\u629E\u3057\u305F\u5546\u54C1\u3092\u767A\u9001\u3057\u307E\u3059\u304B?")&&this.form.post(route("admin.delivery.post"),{onFinish:()=>{this.page_step=0}})},search(){this.form_search.get(route("admin.delivery"))},checkall(){let n;for(this.hasCheck=!1,n=0;n<this.user_products.length;n++)this.form.checks["id"+this.user_products[n].id]=this.isCheckAll,this.hasCheck=this.isCheckAll}}},T={key:0,class:"pt-6 md:px-6 px-4 mb-6"},z=e("h1",{class:"mb-2 text-lg font-bold"},"\u914D\u9001\u5546\u54C1",-1),E=e("hr",{class:"mb-3"},null,-1),M={class:"w-full text-neutral-400 mb-3"},G={class:"flex items-center gap-2 w-full flex-wrap mb-2 py-2 justify-between text-sm"},J={class:"flex items-center gap-2 flex-1"},K=e("label",{class:"px-4 text-right"},"\u540D\u524D",-1),R={class:"mb-6 grid grid-cols-1 md:grid-cols-2"},S={key:0,class:"-mx-4 my-2 col-span-1 md:col-span-2"},q=["onClick"],Q=["onClick"],W=["src"],X={class:"cursor-pointer h-20 flex items-center justify-between flex-1 text-xs py-1 px-2 my-0.5"},Y={class:"text-left"},Z={class:"text-red-500"},$={key:1,class:"pt-6 md:px-6 px-4 mb-6"},ee={class:"flex justify-between items-center"},se=e("h2",{class:"mb-2 text-lg font-bold"},"\u914D\u9001\u5546\u54C1\u8A73\u7D30",-1),te={class:"text-center"},oe={class:"cursor-pointer flex items-center"},re=e("span",{class:"ml-2"},"\u5168\u3066\u3092\u9078\u629E\u3059\u308B",-1),le=e("hr",{class:"mb-3"},null,-1),ne={class:"mb-6 grid grid-cols-1 md:grid-cols-2"},ie={class:"flex items-center"},ce=["for"],de=["src"],ae={class:"cursor-pointer h-20 flex items-center justify-between flex-1 text-xs py-1 px-2 my-0.5"},ue={class:"text-left"},he={class:"text-red-500"},_e=["id","onUpdate:modelValue"],pe=e("div",{class:"mb-1 text-base font-semibold"},"\u914D\u9001\u5148\u60C5\u5831",-1),fe=e("hr",{class:"mb-3"},null,-1),me={class:"w-full mb-6"},be={class:"w-full text-sm"},xe=e("td",{class:"p-1 w-2/5 font-bold"},"\u30A2\u30C9\u30EC\u30B9",-1),ge={class:"p-1 w-3/5"},ke=e("td",{class:"p-1 w-2/5 font-bold"},"\u540D\u524D",-1),we={class:"p-1 w-3/5"},ve=e("td",{class:"p-1 w-2/5 font-bold"},"\u540D\u524D(\u30AB\u30CA)",-1),ye={class:"p-1 w-3/5"},Ce=e("td",{class:"p-1 w-2/5 font-bold"},"\u90F5\u4FBF\u756A\u53F7",-1),Ae={class:"p-1 w-3/5"},Le=e("td",{class:"p-1 w-2/5 font-bold"},"\u90FD\u9053\u5E9C\u770C",-1),je={class:"p-1 w-3/5"},Ve=e("td",{class:"p-1 w-2/5 font-bold"},"\u4F4F\u6240",-1),De={class:"p-1 w-3/5"},He=e("td",{class:"p-1 w-2/5 font-bold"},"\u96FB\u8A71\u756A\u53F7",-1),Oe={class:"p-1 w-3/5"},Pe=e("td",{class:"p-1 w-2/5 font-bold"},"\u8FFD\u8DE1\u756A\u53F7",-1),Ue={class:"p-1 w-3/5"},Be={class:"mb-6 w-full text-center"},Fe=["disabled"],Ie=["disabled"];function Ne(n,t,i,l,r,a){const C=m("Head"),A=m("Link"),L=m("AppLayout");return c(),d(h,null,[k(C,{title:"\u914D\u9001\u5546\u54C1"}),k(L,null,{default:w(()=>[r.page_step==0?(c(),d("div",T,[z,E,e("div",M,[(c(!0),d(h,null,b(r.main_tab,(s,u)=>(c(),D(A,{href:s.route_url,class:x(["inline-block px-4 py-1.5",{"border-b-2 border-red-600 text-red-600":s.is_active}])},{default:w(()=>[H(o(s.title),1)]),_:2},1032,["href","class"]))),256))]),e("div",G,[e("div",J,[K,f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>l.form_search.name=s),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[v,l.form_search.name]])]),e("button",{type:"button",onClick:t[1]||(t[1]=(...s)=>a.search&&a.search(...s)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u691C\u7D22")]),e("div",R,[(c(!0),d(h,null,b(i.products.data,(s,u)=>(c(),d(h,null,[u>0&&i.products.data[u-1].user_id!=s.user_id?(c(),d("hr",S)):_("",!0),u==0||i.products.data[u-1].user_id!=s.user_id?(c(),d("button",{key:1,onClick:p=>a.showProductDetail(s.user_id),class:"flex border-neutral-600 border-l-8 border-b border items-center w-full py-3 px-4 my-1 -ml-1 hover:bg-slate-100 col-span-1 md:col-span-2 shadow"},o(s.user_name)+" ( "+o(s.email)+" ) ",9,q)):_("",!0),e("button",{onClick:p=>a.showProductDetail(s.user_id),class:"flex border-neutral-200 items-center w-full hover:bg-slate-100 py-0.5"},[e("img",{src:s.image,class:"w-20 h-20 inline-block object-contain"},null,8,W),e("div",X,[e("div",Y,[e("div",null,o(s.name),1),e("div",null,o(s.rare),1),e("div",Z,o(s.point)+"pt",1),e("div",null,o(s.updated_at),1),e("div",null,o(s.address),1)])])],8,Q)],64))),256))])])):_("",!0),r.page_step==1?(c(),d("div",$,[e("div",ee,[se,e("div",te,[e("label",oe,[f(e("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=s=>r.isCheckAll=s),onChange:t[3]||(t[3]=s=>a.checkall()),class:"h-5 w-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"},null,544),[[y,r.isCheckAll]]),re])])]),le,e("div",ne,[(c(!0),d(h,null,b(r.user_products,(s,u)=>(c(),d("div",ie,[e("label",{for:"checkbox"+s.id,class:"flex border-neutral-200 items-center w-full hover:bg-slate-100 py-0.5"},[e("img",{src:s.image,class:"w-20 h-20 inline-block object-contain"},null,8,de),e("div",ae,[e("div",ue,[e("div",null,o(s.name),1),e("div",null,o(s.rare),1),e("div",he,o(s.point)+"pt",1),e("div",null,o(s.updated_at),1)])]),f(e("input",{id:"checkbox"+s.id,"onUpdate:modelValue":p=>l.form.checks["id"+s.id]=p,type:"checkbox",onChange:t[4]||(t[4]=p=>a.changeCheck()),class:"cursor-pointer rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500 m-1"},null,40,_e),[[y,l.form.checks["id"+s.id]]])],8,ce)]))),256))]),pe,fe,e("div",me,[e("table",be,[e("tr",null,[xe,e("td",ge,o(r.user.email),1)]),r.profile?(c(),d(h,{key:0},[e("tr",null,[ke,e("td",we,o(r.profile.first_name)+" "+o(r.profile.last_name),1)]),e("tr",null,[ve,e("td",ye,o(r.profile.first_name_gana)+" "+o(r.profile.last_name_gana),1)]),e("tr",null,[Ce,e("td",Ae,o(r.profile.postal_code),1)]),e("tr",null,[Le,e("td",je,o(r.profile.prefecture),1)]),e("tr",null,[Ve,e("td",De,o(r.profile.address),1)]),e("tr",null,[He,e("td",Oe,o(r.profile.phone),1)]),e("tr",null,[Pe,e("td",Ue,[f(e("input",{type:"text",id:"tracking_number","onUpdate:modelValue":t[5]||(t[5]=s=>l.form.tracking_number=s),class:"h-10 rounded-sm w-full px-3 py-1 border border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"},null,512),[[v,l.form.tracking_number]])])])],64)):_("",!0)])]),e("div",Be,[e("button",{type:"button",onClick:t[6]||(t[6]=s=>a.backToList()),class:x([{"opacity-25":l.form.processing},"inline-block items-center px-8 py-2.5 bg-neutral-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 m-1"]),disabled:l.form.processing}," \u30EA\u30B9\u30C8\u3078 ",10,Fe),e("button",{type:"button",onClick:t[7]||(t[7]=s=>a.submit()),class:x([{"opacity-25":l.form.processing},"inline-block items-center px-8 py-2.5 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 m-1"]),disabled:l.form.processing}," \u914D\u9001\u6E08\u307F\u306B\u3059\u308B ",10,Ie)])])):_("",!0)]),_:1})],64)}const Re=U(N,[["render",Ne]]);export{Re as default};