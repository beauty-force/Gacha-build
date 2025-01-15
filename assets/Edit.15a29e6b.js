import{H as y,G as v,r as _,o as n,c as a,b as x,w as k,F as p,d as t,I as w,J as u,K as c,t as l,g as i,M as V,f as U,e as m}from"./app.d2ac83f6.js";import{A as j}from"./Admin.733a8560.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.14726aad.js";const O={components:{Head:y,AppLayout:j},props:{errors:Object,auth:Object,category_share:Object,product:Object,productStatusTxt:Object},data(){return{url:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.form.post(route("admin.dp.update"))},previewImage(d){const e=d.target.files[0];this.url=URL.createObjectURL(e)}},setup(d){return{form:v({id:d.product.id,name:d.product.name,dp:d.product.dp,marks:d.product.marks,image:"",category_id:d.product.category_id,rare:d.product.rare,product_type:d.product.product_type,status_product:d.product.status_product})}},mounted(){this.url=this.product.image}},A={class:"pt-6 md:px-6 px-4"},C=t("h1",{class:"mb-2 text-lg font-bold"},"\u4EA4\u63DB\u30A2\u30A4\u30C6\u30E0 \u7DE8\u96C6",-1),H=t("hr",{class:"mb-8"},null,-1),I={class:"mb-4"},M=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30BF\u30A4\u30C8\u30EB\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),t("span",{class:"text-red-500"},"*")],-1),N={key:0,class:"text-red-500 text-sm mt-1"},S={class:"mb-4"},B=t("label",{for:"dp",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("EP\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),E={key:0,class:"text-red-500 text-sm mt-1"},F={class:"mb-4"},T=t("label",{for:"marks",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u6B8B\u308A\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),D={key:0,class:"text-red-500 text-sm mt-1"},R={class:"mb-8"},G=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"),t("span",{class:"text-red-500"},"*")],-1),J={class:"text-center w-full"},K=["src"],P={key:0,class:"text-red-500 text-sm mt-1"},q={class:"mb-4"},z=t("label",{for:"select0",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30AB\u30C6\u30B4\u30EA\u30FC"),t("span",{class:"text-red-500"},"*")],-1),Q=["value"],W={class:"mb-4"},X=t("label",{for:"text3",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30EC\u30A2\u30EA\u30C6\u30A3",-1),Y={key:0,class:"text-red-500 text-sm mt-1"},Z={class:"mb-4"},$=t("label",{for:"text4",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u5546\u54C1\u306E\u72B6\u614B",-1),tt={key:0,class:"text-red-500 text-sm mt-1"},et=t("div",{class:"mb-8 text-center"},[t("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function rt(d,e,s,o,b,f){const g=_("Head"),h=_("AppLayout");return n(),a(p,null,[x(g,{title:"\u4EA4\u63DB\u30A2\u30A4\u30C6\u30E0 \u7DE8\u96C6"}),x(h,null,{default:k(()=>[t("div",A,[C,H,t("form",{onSubmit:e[7]||(e[7]=w(r=>f.submit(),["prevent"]))},[t("div",I,[M,u(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>o.form.name=r),id:"text1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,o.form.name]]),s.errors.name?(n(),a("div",N,l(s.errors.name),1)):i("",!0)]),t("div",S,[B,u(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>o.form.dp=r),id:"dp",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,o.form.dp]]),s.errors.dp?(n(),a("div",E,l(s.errors.dp),1)):i("",!0)]),t("div",F,[T,u(t("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>o.form.marks=r),id:"marks",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,o.form.marks]]),s.errors.marks?(n(),a("div",D,l(s.errors.marks),1)):i("",!0)]),t("div",R,[G,t("div",J,[b.url?(n(),a("img",{key:0,src:b.url,class:"inline-block mt-4 h-24"},null,8,K)):i("",!0)]),t("input",{onChange:e[3]||(e[3]=(...r)=>f.previewImage&&f.previewImage(...r)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),s.errors.image?(n(),a("div",P,l(s.errors.image),1)):i("",!0)]),t("div",q,[z,u(t("select",{id:"select0","onUpdate:modelValue":e[4]||(e[4]=r=>o.form.category_id=r),class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),a(p,null,U(s.category_share.categories.data,(r,st)=>(n(),a("option",{value:r.id},l(r.title)+" \u30AB\u30FC\u30C9",9,Q))),256))],512),[[V,o.form.category_id]])]),t("div",W,[X,u(t("input",{"onUpdate:modelValue":e[5]||(e[5]=r=>o.form.rare=r),id:"text3",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,o.form.rare]]),s.errors.rare?(n(),a("div",Y,l(s.errors.rare),1)):i("",!0)]),t("div",Z,[$,u(t("input",{"onUpdate:modelValue":e[6]||(e[6]=r=>o.form.product_type=r),id:"text4",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,o.form.product_type]]),s.errors.product_type?(n(),a("div",tt,l(s.errors.product_type),1)):i("",!0)]),et],32)])]),_:1})],64)}const lt=L(O,[["render",rt]]);export{lt as default};