import{H as x,E as w,G as k,r as i,o as d,c,b as n,w as r,F as p,d as e,f as C,t as D,g as T,I as j,J as N,K as V,e as A}from"./app.f08f81c3.js";import{A as H}from"./Admin.f2286084.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as M,e as O,U as B,o as F,f as P}from"./toastify.fd68d622.js";const R={components:{Head:x,AppLayout:H,Dialog:M,DialogPanel:O,DialogTitle:B,TransitionChild:F,TransitionRoot:P},props:{errors:Object,auth:Object,category_share:Object,videos:Object},data(){return{open:!1}},methods:{submit(){this.$refs.video.files.length>0?this.form.video=this.$refs.video.files[0]:this.form.video="",this.form.post(route("admin.video.store"))},open_form(t){this.form.id=t?t.id:0,this.form.gacha_id=t?t.gacha_id:0,this.form.level=t?t.level:this.videos.length>0?this.videos[this.videos.length-1].level+1:1,this.open=!0},destroy(t){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&w.Inertia.delete(route("admin.video.destroy",{id:t}),{preserveScroll:!0})}},setup(t){return{form:k({id:0,gacha_id:0,level:t.videos.length,video:""})}}},S={class:"pt-6 md:px-6 px-4"},U={class:"max-w-48 px-2"},z={class:"max-w-32"},E=["src"],I={class:"flex-1 justify-end flex gap-2"},q=["onClick"],G=["onClick"],J=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),K={class:"fixed inset-0 z-20 overflow-y-auto"},Q={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},W={class:"mb-4"},X=e("label",{for:"level",class:"block font-medium text-sm text-neutral-700 mb-1"},[A("\u756A\u53F7"),e("span",{class:"text-red-500"},"*")],-1),Y=e("label",{for:"video",class:"block font-medium text-neutral-700 mb-2"},"\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u9078\u629E ",-1),Z={id:"video",ref:"video",type:"file",class:"w-full"},$={class:"text-center"},ee=e("button",{type:"submit",class:"inline-block items-center px-8 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u767B\u9332 ",-1);function te(t,o,f,m,l,a){const _=i("Head"),u=i("TransitionChild"),h=i("DialogPanel"),v=i("Dialog"),b=i("TransitionRoot"),g=i("AppLayout");return d(),c(p,null,[n(_,{title:"\u30AC\u30C1\u30E3\u6F14\u51FA\u52D5\u753B\u8A2D\u5B9A"}),n(g,{hide_cat_bar:1,closeModal:()=>{l.open=!1}},{default:r(()=>[e("div",S,[e("button",{onClick:o[0]||(o[0]=()=>{a.open_form(null)}),class:"rounded-lg bg-rose-500 hover:bg-rose-400 text-sm text-white px-4 py-1 mb-3"},"\u767B\u9332"),(d(!0),c(p,null,C(f.videos,(s,y)=>(d(),c("div",{class:"mb-4 flex items-center flex-wrap gap-2",key:y},[e("div",U," \u52D5\u753B "+D(s.level)+" : ",1),e("div",z,[s.file?(d(),c("video",{key:0,class:"inline-block max-h-96",src:s.file,type:"video/mp4",controls:""},null,8,E)):T("",!0)]),e("div",I,[e("button",{onClick:()=>{a.open_form(s)},class:"rounded-lg bg-sky-500 hover:bg-sky-400 text-sm text-white px-4 py-1"},"\u7DE8\u96C6",8,q),e("button",{onClick:oe=>a.destroy(s.id),class:"rounded-lg px-3 py-1 bg-red-500 text-sm text-neutral-50"}," \u524A\u9664 ",8,G)])]))),128))]),e("template",null,[n(b,{as:"template",show:l.open},{default:r(()=>[n(v,{as:"div",class:"relative z-20",onClose:o[4]||(o[4]=s=>l.open=!1),open:l.open},{default:r(()=>[n(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[J]),_:1}),e("div",K,[e("div",Q,[n(u,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[n(h,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md"},{default:r(()=>[e("form",{onSubmit:o[3]||(o[3]=j(s=>a.submit(),["prevent"]))},[e("div",W,[X,N(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>m.form.level=s),id:"level",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[V,m.form.level]]),Y,e("input",Z,null,512)]),e("div",$,[ee,e("button",{type:"button",onClick:o[2]||(o[2]=s=>l.open=!1),class:"inline-block items-center px-8 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1},8,["open"])]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const le=L(R,[["render",te]]);export{le as default};