import{L as C,H as L,E as A,G as p,r as a,o as c,c as u,b as l,w as g,F as h,d as t,I as _,J as m,K as b,t as f,h as I,f as D,n as U}from"./app.ed7c6fc5.js";import{A as V}from"./Admin.d1481a87.js";import{V as S,r as M,a as j}from"./ArrowLongUpIcon.c8432617.js";import{u as F}from"./useConfirm.801861ec.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.6b661bbe.js";const{confirm:N}=F(),B={components:{Link:C,Head:L,AppLayout:V,draggable:S,ArrowLongUpIcon:M,ArrowLongDownIcon:j},props:{errors:Object,auth:Object,categories:Object},methods:{log(){},submit(){this.new_form.post(route("admin.category.store"),{onSuccess:()=>this.new_form.reset(),preserveScroll:!0})},destroy(r){N("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F").then(e=>{e&&A.Inertia.delete(route("admin.category.destroy",r),{preserveScroll:!0})})},levelUp(r){let e;for(e=1;e<this.categories.data.length&&this.categories.data[e].id!=r;e++);e<this.categories.data.length&&this.arrayMove(e,e-1)},arrayMove(r,e){this.categories.data.splice(e,0,this.categories.data.splice(r,1)[0])},levelDown(r){let e;for(e=0;e<this.categories.data.length-1&&this.categories.data[e].id!=r;e++);e<this.categories.data.length-1&&this.arrayMove(e,e+1)},submit_order(){this.order_form.categories=this.categories,this.order_form.post(route("admin.category.sorting.store"),{preserveScroll:!0,onFinish:()=>{}})}},data(){return{open:!0,dragging:!1}},setup(r){const e=p({title:""}),s=p({categories:[]});return{new_form:e,order_form:s}},mounted(){}},O={class:"md:px-4 px-2"},q=t("div",{class:"border-b w-full p-2 my-2 font-semibold"},[t("h3",null,"\u30AB\u30C6\u30B4\u30EA\u30FC")],-1),E={class:""},z={class:"m-auto min-w-full text-sm font-medium"},G={class:"border-t"},J={class:"border-b border-r border-l"},K=t("td",{class:"bg-neutral-300 px-3 py-2 whitespace-nowrap border-r w-32"},"\u30AB\u30C6\u30B4\u30EA\u30FC",-1),T={class:"font-light p-1 whitespace-nowrap"},P={key:0,class:"text-red-600 mt-1 text-center"},Q=t("div",{class:"text-center py-2"},[t("button",{type:"submit",class:"w-32 bg-neutral-500 hover:bg-neutral-700 text-white text-sm font-normal py-2 px-5 rounded"}," \u767B\u9332 ")],-1),R=t("hr",{class:"my-4"},null,-1),W={class:"text-center pb-2"},X=t("div",{class:"border-b border-r border-l bg-neutral-300 p-2"}," \u30AB\u30C6\u30B4\u30EA\u30FC\u7DE8\u96C6 ",-1),Y={class:"flex mb-1"},Z={class:"px-2"},$={class:"flex-1 rounded-md text-left cursor-pointer border h-12 border-neutral-500 flex items-center hover:bg-neutral-100 focus:bg-neutral-100 gap-2"},ee={class:"flex-1 whitespace-nowrap h-full"},te=["onUpdate:modelValue"],oe={class:"align-middle h-full flex items-center gap-1"},re=["onClick"],se=["onClick"],ne=["onClick"],ae={class:"p-1 flex justify-center"},le=["disabled"],ie=t("div",{class:"inline-block"},"\u4FDD\u5B58\u3059\u308B",-1),de=[ie];function ce(r,e,s,i,ue,n){const v=a("Head"),x=a("ArrowLongUpIcon"),w=a("ArrowLongDownIcon"),y=a("draggable"),k=a("AppLayout");return c(),u(h,null,[l(v,{title:"\u30AB\u30C6\u30B4\u30EA\u30FC"}),l(k,null,{default:g(()=>[t("div",O,[q,t("div",E,[t("form",{onSubmit:e[1]||(e[1]=_(o=>n.submit(),["prevent"]))},[t("table",z,[t("tbody",G,[t("tr",J,[K,t("td",T,[m(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.new_form.title=o),type:"text",class:"bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg block px-2 py-1.5 w-full focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50",placeholder:"",required:""},null,512),[[b,i.new_form.title]]),s.errors.title?(c(),u("div",P,f(s.errors.title),1)):I("",!0)])])])]),Q],32)]),R,t("div",W,[X,t("div",Y,[l(y,{class:"w-full list-group",list:s.categories.data,onChange:n.log},{default:g(()=>[(c(!0),u(h,null,D(s.categories.data,o=>(c(),u("div",{class:"my-1 flex w-full items-center",key:o.id},[t("div",Z,f(o.id),1),t("div",$,[t("div",ee,[m(t("input",{"onUpdate:modelValue":d=>o.title=d,type:"text",class:"bg-neutral-50 text-neutral-900 text-sm rounded-l-md border-neutral-300 block px-2 h-full w-full focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50",placeholder:"",required:""},null,8,te),[[b,o.title]])]),t("div",oe,[t("button",{onClick:_(d=>n.levelUp(o.id),["prevent"]),class:"bg-neutral-700 rounded p-1 hover:bg-neutral-600"},[l(x,{class:"w-5 h-5 text-white block"})],8,re),t("button",{onClick:_(d=>n.levelDown(o.id),["prevent"]),class:"bg-neutral-700 rounded p-1 hover:bg-neutral-600"},[l(w,{class:"w-5 h-5 text-white block"})],8,se)]),t("button",{onClick:d=>n.destroy(o.id),class:"bg-red-500 hover:bg-red-700 text-white text-sm font-normal py-1 px-2 mr-2 rounded"},"\u524A\u9664",8,ne)])]))),128))]),_:1},8,["list","onChange"])]),t("div",ae,[t("button",{onClick:e[2]||(e[2]=_(o=>n.submit_order(),["prevent"])),class:U([{"opacity-25":i.order_form.processing},"w-32 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-normal py-2 px-3 inline-block rounded"]),disabled:i.order_form.processing},de,10,le)])])])]),_:1})],64)}const fe=H(B,[["render",ce]]);export{fe as default};
