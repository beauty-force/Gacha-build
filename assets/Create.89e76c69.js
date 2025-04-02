import{H as g,G as y,r as h,o as l,c as n,b,w as v,F as w,d as t,I as k,J as m,K as _,t as d,h as i,M as U,e as f}from"./app.a88236bf.js";import{A as V}from"./Admin.709de508.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.da6bcaee.js";const L={components:{Head:g,AppLayout:V},props:{errors:Object,auth:Object,category_share:Object},data(){return{url:null,url1:null}},methods:{submit(){this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.$refs.photo1&&(this.form.thumbnail=this.$refs.photo1.files[0]),this.form.lost_product_type=="1"&&(this.form.count_card=0),this.form.post(route("admin.gacha.store"))},previewImage(a){const e=a.target.files[0];this.url=URL.createObjectURL(e)},previewImage1(a){const e=a.target.files[0];this.url1=URL.createObjectURL(e)}},setup(a){return{form:y({title:"",point:"",count_card:"",lost_product_type:"0",thumbnail:"",image:"",category_id:a.category_share.cat_id})}}},C={class:"pt-6 md:px-6 px-4"},j=t("h1",{class:"mb-2 text-lg font-bold"},"\u30AC\u30C1\u30E3 \u8FFD\u52A0",-1),O=t("hr",{class:"mb-8"},null,-1),A={class:"mb-4"},H=t("label",{for:"title",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30BF\u30A4\u30C8\u30EB",-1),M={key:0,class:"text-red-500 text-sm mt-1"},N={class:"mb-4"},R=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),t("span",{class:"text-red-500"},"*")],-1),B={key:0,class:"text-red-500 text-sm mt-1"},F={class:"mb-4"},S=t("label",{for:"type",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[f("\u7A2E\u985E "),t("span",{class:"text-red-500"},"*")],-1),D=t("option",{value:0},"\u9650\u5B9A\u30AB\u30FC\u30C9",-1),T=t("option",{value:1},"\u7121\u9650\u30AC\u30C1\u30E3",-1),E=[D,T],G={key:0,class:"mb-4"},J=t("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u7DCF\u30AB\u30FC\u30C9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),K={key:0,class:"text-red-500 text-sm mt-1"},q={class:"mb-4"},z=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u30B5\u30E0\u30CD\u30A4\u30EB "),t("span",{class:"text-red-500"},"*")],-1),P={class:"text-center w-full"},Q=["src"],W={key:0,class:"text-red-500 text-sm mt-1"},X={class:"mb-8"},Y=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF ",-1),Z={class:"text-center w-full"},$=["src"],tt={key:0,class:"text-red-500 text-sm mt-1"},et=t("div",{class:"mb-8 text-center"},[t("button",{type:"submit",class:"inline-block items-center px-14 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ")],-1);function ot(a,e,s,r,u,c){const p=h("Head"),x=h("AppLayout");return l(),n(w,null,[b(p,{title:"\u30AC\u30C1\u30E3 \u8FFD\u52A0"}),b(x,null,{default:v(()=>[t("div",C,[j,O,t("form",{onSubmit:e[6]||(e[6]=k(o=>c.submit(),["prevent"]))},[t("div",A,[H,m(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.form.title=o),id:"title",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,r.form.title]]),s.errors.title?(l(),n("div",M,d(s.errors.title),1)):i("",!0)]),t("div",N,[R,m(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>r.form.point=o),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,r.form.point]]),s.errors.point?(l(),n("div",B,d(s.errors.point),1)):i("",!0)]),t("div",F,[S,m(t("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.form.lost_product_type=o),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},E,512),[[U,r.form.lost_product_type]])]),r.form.lost_product_type=="0"?(l(),n("div",G,[J,m(t("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.form.count_card=o),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[_,r.form.count_card]]),s.errors.count_card?(l(),n("div",K,d(s.errors.count_card),1)):i("",!0)])):i("",!0),t("div",q,[z,t("div",P,[u.url1?(l(),n("img",{key:0,src:u.url1,class:"inline-block mt-4 h-52"},null,8,Q)):i("",!0)]),t("input",{onChange:e[4]||(e[4]=(...o)=>c.previewImage1&&c.previewImage1(...o)),ref:"photo1",id:"file1",type:"file",class:"w-full"},null,544),s.errors.thumbnail?(l(),n("div",W,d(s.errors.thumbnail),1)):i("",!0)]),t("div",X,[Y,t("div",Z,[u.url?(l(),n("img",{key:0,src:u.url,class:"inline-block mt-4 h-52"},null,8,$)):i("",!0)]),t("input",{onChange:e[5]||(e[5]=(...o)=>c.previewImage&&c.previewImage(...o)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),s.errors.image?(l(),n("div",tt,d(s.errors.image),1)):i("",!0)]),et],32)])]),_:1})],64)}const it=I(L,[["render",ot]]);export{it as default};
