import{H as g,G as y,r as _,o as r,c as l,b as p,w as v,F as w,d as e,I as k,J as f,K as h,t as m,g as i,M as I,e as d}from"./app.ae475ae1.js";import{A as L}from"./Admin.a23d5804.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.f59e4cdb.js";const V={components:{Head:g,AppLayout:L},props:{errors:Object,auth:Object,category_share:Object},data(){return{url:null,url1:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.$refs.photo1&&(this.form.thumbnail=this.$refs.photo1.files[0]),this.form.lost_product_type=="1"&&(this.form.count_card=0),this.form.post(route("admin.gacha.store"))},previewImage(a){const t=a.target.files[0];this.url=URL.createObjectURL(t)},previewImage1(a){const t=a.target.files[0];this.url1=URL.createObjectURL(t)}},setup(a){return{form:y({point:"",count_card:"",lost_product_type:"0",thumbnail:"",image:"",category_id:a.category_share.cat_id})}}},C={class:"pt-6 md:px-6 px-4"},j=e("h1",{class:"mb-2 text-lg font-bold"},"\u30AC\u30C1\u30E3 \u8FFD\u52A0",-1),O=e("hr",{class:"mb-8"},null,-1),A={class:"mb-4"},H=e("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[d("\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),e("span",{class:"text-red-500"},"*")],-1),M={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},R=e("label",{for:"type",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[d("\u7A2E\u985E "),e("span",{class:"text-red-500"},"*")],-1),B=e("option",{value:0},"\u9650\u5B9A\u30AB\u30FC\u30C9",-1),F=e("option",{value:1},"\u7121\u9650\u30AC\u30C1\u30E3",-1),S=[B,F],D={key:0,class:"mb-4"},T=e("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},[d("\u7DCF\u30AB\u30FC\u30C9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),E={key:0,class:"text-red-500 text-sm mt-1"},G={class:"mb-4"},J=e("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[d("\u30B5\u30E0\u30CD\u30A4\u30EB "),e("span",{class:"text-red-500"},"*")],-1),K={class:"text-center w-full"},q=["src"],z={key:0,class:"text-red-500 text-sm mt-1"},P={class:"mb-8"},Q=e("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[d("\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF "),e("span",{class:"text-red-500"},"*")],-1),W={class:"text-center w-full"},X=["src"],Y={key:0,class:"text-red-500 text-sm mt-1"},Z=e("div",{class:"mb-8 text-center"},[e("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function $(a,t,o,n,u,c){const b=_("Head"),x=_("AppLayout");return r(),l(w,null,[p(b,{title:"\u30AC\u30C1\u30E3 \u8FFD\u52A0"}),p(x,null,{default:v(()=>[e("div",C,[j,O,e("form",{onSubmit:t[5]||(t[5]=k(s=>c.submit(),["prevent"]))},[e("div",A,[H,f(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>n.form.point=s),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[h,n.form.point]]),o.errors.point?(r(),l("div",M,m(o.errors.point),1)):i("",!0)]),e("div",N,[R,f(e("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>n.form.lost_product_type=s),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},S,512),[[I,n.form.lost_product_type]])]),n.form.lost_product_type=="0"?(r(),l("div",D,[T,f(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>n.form.count_card=s),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[h,n.form.count_card]]),o.errors.count_card?(r(),l("div",E,m(o.errors.count_card),1)):i("",!0)])):i("",!0),e("div",G,[J,e("div",K,[u.url1?(r(),l("img",{key:0,src:u.url1,class:"inline-block mt-4 h-52"},null,8,q)):i("",!0)]),e("input",{onChange:t[3]||(t[3]=(...s)=>c.previewImage1&&c.previewImage1(...s)),ref:"photo1",id:"file1",type:"file",class:"w-full"},null,544),o.errors.thumbnail?(r(),l("div",z,m(o.errors.thumbnail),1)):i("",!0)]),e("div",P,[Q,e("div",W,[u.url?(r(),l("img",{key:0,src:u.url,class:"inline-block mt-4 h-52"},null,8,X)):i("",!0)]),e("input",{onChange:t[4]||(t[4]=(...s)=>c.previewImage&&c.previewImage(...s)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),o.errors.image?(r(),l("div",Y,m(o.errors.image),1)):i("",!0)]),Z],32)])]),_:1})],64)}const re=U(V,[["render",$]]);export{re as default};
