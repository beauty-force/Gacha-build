import{H as y,E as w,G as k,r,o as d,c,b as n,w as i,F as p,d as e,f as C,t as D,h as T,I as j,J as N,K as V,e as A}from"./app.8d754d61.js";import{A as H}from"./Admin.dd41774e.js";import{u as L}from"./useConfirm.801861ec.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as O,e as B,U as F,o as P,f as R}from"./Category.e5921053.js";const{confirm:S}=L(),U={components:{Head:y,AppLayout:H,Dialog:O,DialogPanel:B,DialogTitle:F,TransitionChild:P,TransitionRoot:R},props:{errors:Object,auth:Object,category_share:Object,videos:Object},data(){return{open:!1}},methods:{submit(){this.$refs.video.files.length>0?this.form.video=this.$refs.video.files[0]:this.form.video="",this.form.post(route("admin.video.store"))},open_form(o){this.form.id=o?o.id:0,this.form.gacha_id=o?o.gacha_id:0,this.form.level=o?o.level:this.videos.length>0?this.videos[this.videos.length-1].level+1:1,this.open=!0},destroy(o){S("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F","","error").then(t=>{t&&w.Inertia.delete(route("admin.video.destroy",{id:o}),{preserveScroll:!0})})}},setup(o){return{form:k({id:0,gacha_id:0,level:o.videos.length,video:""})}}},z={class:"pt-6 md:px-6 px-4"},E={class:"max-w-48 px-2"},I={class:"max-w-32"},q=["src"],G={class:"flex-1 justify-end flex gap-2"},J=["onClick"],K=["onClick"],Q=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),W={class:"fixed inset-0 z-20 overflow-y-auto"},X={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},Y={class:"mb-4"},Z=e("label",{for:"level",class:"block font-medium text-sm text-neutral-700 mb-1"},[A("\u540D\u524D"),e("span",{class:"text-red-500"},"*")],-1),$=e("label",{for:"video",class:"block font-medium text-neutral-700 mb-2"},"\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u9078\u629E ",-1),ee={id:"video",ref:"video",type:"file",class:"w-full"},te={class:"text-center"},oe=e("button",{type:"submit",class:"inline-block items-center px-8 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u767B\u9332 ",-1);function se(o,t,f,m,l,a){const _=r("Head"),u=r("TransitionChild"),h=r("DialogPanel"),v=r("Dialog"),b=r("TransitionRoot"),g=r("AppLayout");return d(),c(p,null,[n(_,{title:"\u30AC\u30C1\u30E3\u6F14\u51FA\u52D5\u753B\u8A2D\u5B9A"}),n(g,{hide_cat_bar:1,closeModal:()=>{l.open=!1}},{default:i(()=>[e("div",z,[e("button",{onClick:t[0]||(t[0]=()=>{a.open_form(null)}),class:"rounded-lg bg-rose-500 hover:bg-rose-400 text-sm text-white px-4 py-1 mb-3"},"\u767B\u9332"),(d(!0),c(p,null,C(f.videos,(s,x)=>(d(),c("div",{class:"mb-4 flex items-center flex-wrap gap-2",key:x},[e("div",E," \u300C"+D(s.level)+"\u300D \u52D5\u753B : ",1),e("div",I,[s.file?(d(),c("video",{key:0,class:"inline-block max-h-96",src:s.file,type:"video/mp4",controls:""},null,8,q)):T("",!0)]),e("div",G,[e("button",{onClick:()=>{a.open_form(s)},class:"rounded-lg bg-yellow-500 hover:bg-yellow-400 text-sm text-white px-4 py-1"},"\u7DE8\u96C6",8,J),e("button",{onClick:ne=>a.destroy(s.id),class:"rounded-lg px-3 py-1 bg-red-500 text-sm text-neutral-50"}," \u524A\u9664 ",8,K)])]))),128))]),e("template",null,[n(b,{as:"template",show:l.open},{default:i(()=>[n(v,{as:"div",class:"relative z-20",onClose:t[4]||(t[4]=s=>l.open=!1),open:l.open},{default:i(()=>[n(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[Q]),_:1}),e("div",W,[e("div",X,[n(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:i(()=>[n(h,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"},{default:i(()=>[e("form",{onSubmit:t[3]||(t[3]=j(s=>a.submit(),["prevent"]))},[e("div",Y,[Z,N(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>m.form.level=s),id:"level",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[V,m.form.level]]),$,e("input",ee,null,512)]),e("div",te,[oe,e("button",{type:"button",onClick:t[2]||(t[2]=s=>l.open=!1),class:"inline-block items-center px-8 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1},8,["open"])]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const ce=M(U,[["render",se]]);export{ce as default};
