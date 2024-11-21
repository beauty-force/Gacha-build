import{H as y,G as v,r as _,o as n,c as a,b as x,w as k,F as p,d as e,I as w,J as i,K as u,t as l,g as d,M as V,f as U,e as m}from"./app.d27d6154.js";import{A as L}from"./Admin.22343e83.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.878c9c89.js";import"./toastify.a44c2487.js";const C={components:{Head:y,AppLayout:L},props:{errors:Object,auth:Object,category_share:Object,productStatusTxt:Object},data(){return{url:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.form.post(route("admin.dp.store"))},previewImage(c){const t=c.target.files[0];this.url=URL.createObjectURL(t)}},setup(c){return{form:v({name:"",dp:"0",marks:"0",image:"",category_id:c.category_share.cat_id,rare:"",product_type:"",status_product:"S+"})}}},O={class:"pt-6 md:px-6 px-4"},S=e("h1",{class:"mb-2 text-lg font-bold"},"\u4EA4\u63DB\u30A2\u30A4\u30C6\u30E0 \u8FFD\u52A0",-1),A=e("hr",{class:"mb-8"},null,-1),H={class:"mb-4"},I=e("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30BF\u30A4\u30C8\u30EB\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),e("span",{class:"text-red-500"},"*")],-1),M={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},B=e("label",{for:"dp",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("EP\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),F={key:0,class:"text-red-500 text-sm mt-1"},T={class:"mb-4"},D=e("label",{for:"marks",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u6B8B\u308A\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),E={key:0,class:"text-red-500 text-sm mt-1"},R={class:"mb-8"},G=e("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"),e("span",{class:"text-red-500"},"*")],-1),J={class:"text-center w-full"},K=["src"],P={key:0,class:"text-red-500 text-sm mt-1"},q={class:"mb-4"},z=e("label",{for:"select0",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30AB\u30C6\u30B4\u30EA\u30FC"),e("span",{class:"text-red-500"},"*")],-1),Q=["value"],W={class:"mb-4"},X=e("label",{for:"text3",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30EC\u30A2\u30EA\u30C6\u30A3",-1),Y={key:0,class:"text-red-500 text-sm mt-1"},Z={class:"mb-4"},$=e("label",{for:"text4",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u5546\u54C1\u306E\u72B6\u614B",-1),ee={key:0,class:"text-red-500 text-sm mt-1"},te=e("div",{class:"mb-8 text-center"},[e("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function se(c,t,r,o,b,f){const g=_("Head"),h=_("AppLayout");return n(),a(p,null,[x(g,{title:"\u4EA4\u63DB\u30A2\u30A4\u30C6\u30E0 \u8FFD\u52A0"}),x(h,null,{default:k(()=>[e("div",O,[S,A,e("form",{onSubmit:t[7]||(t[7]=w(s=>f.submit(),["prevent"]))},[e("div",H,[I,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.form.name=s),id:"text1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[u,o.form.name]]),r.errors.name?(n(),a("div",M,l(r.errors.name),1)):d("",!0)]),e("div",N,[B,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.form.dp=s),id:"dp",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[u,o.form.dp]]),r.errors.dp?(n(),a("div",F,l(r.errors.dp),1)):d("",!0)]),e("div",T,[D,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.form.marks=s),id:"marks",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[u,o.form.marks]]),r.errors.marks?(n(),a("div",E,l(r.errors.marks),1)):d("",!0)]),e("div",R,[G,e("div",J,[b.url?(n(),a("img",{key:0,src:b.url,class:"inline-block mt-4 h-24"},null,8,K)):d("",!0)]),e("input",{onChange:t[3]||(t[3]=(...s)=>f.previewImage&&f.previewImage(...s)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),r.errors.image?(n(),a("div",P,l(r.errors.image),1)):d("",!0)]),e("div",q,[z,i(e("select",{id:"select0","onUpdate:modelValue":t[4]||(t[4]=s=>o.form.category_id=s),class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(n(!0),a(p,null,U(r.category_share.categories.data,(s,re)=>(n(),a("option",{value:s.id},l(s.title)+" \u30AB\u30FC\u30C9",9,Q))),256))],512),[[V,o.form.category_id]])]),e("div",W,[X,i(e("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>o.form.rare=s),id:"text3",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[u,o.form.rare]]),r.errors.rare?(n(),a("div",Y,l(r.errors.rare),1)):d("",!0)]),e("div",Z,[$,i(e("input",{"onUpdate:modelValue":t[6]||(t[6]=s=>o.form.product_type=s),id:"text4",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[u,o.form.product_type]]),r.errors.product_type?(n(),a("div",ee,l(r.errors.product_type),1)):d("",!0)]),te],32)])]),_:1})],64)}const ie=j(C,[["render",se]]);export{ie as default};