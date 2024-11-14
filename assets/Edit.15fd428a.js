import{L as S,H as R,E as T,G as y,r as p,o as i,c as a,b as f,w as g,F as x,d as t,n as k,I as j,J as _,K as h,t as d,g as u,M as V,f as P,e as m}from"./app.84fa7d66.js";import{A as H}from"./Admin.a3a57f6d.js";import{B as N}from"./main.832c5b0f.js";import{_ as q}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as B,e as A,U as E,o as z,f as X,r as Y}from"./Category.6a8a666e.js";import{r as G}from"./ExclamationTriangleIcon.734d3459.js";import"./toastify.7aab60f1.js";import"./isNativeReflectConstruct.8f2fcece.js";const J={components:{Link:S,Head:R,AppLayout:H,Dialog:B,DialogPanel:A,DialogTitle:E,TransitionChild:z,TransitionRoot:X,ExclamationTriangleIcon:G,XMarkIcon:Y,VueDatePicker:N},props:{errors:Object,gacha:Object,category_share:Object,product_last:Object,products:Object,productsLostSetting:Object,videos:Object,titles:Object,ranks:Object},data(){return{url:null,url1:null,url2:null,open:!1,sorting:"point_up"}},methods:{addVideo(){this.form.videos.push({level:1,point:0})},deleteVideo(s){this.form.videos=this.form.videos.filter((e,r)=>r!=s)},destroy_product_last(s){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&T.Inertia.delete(route("admin.gacha.product_last.destroy",{id:s}))},modalProductLastOpen(){this.product_last.name?(this.form_last.last_name=this.product_last.name,this.form_last.last_point=this.product_last.point,this.form_last.last_rare=this.product_last.rare,this.form_last.last_image="",this.form_last.is_update=1,this.url2=this.product_last.image):(this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_image="",this.form_last.is_update=0,this.url2=""),this.form_last.is_last=1,this.form_last.last_marks=0,this.open=!0},modalProductOpen(s){s?(this.form_last.last_id=s.id,this.form_last.last_name=s.name,this.form_last.last_point=s.point,this.form_last.last_rare=s.rare,this.form_last.last_marks=parseFloat((s.marks*this.count_step).toFixed(7)),this.form_last.last_order=s.order,this.form_last.last_image="",this.form_last.is_update=1,this.url2=s.image):(this.form_last.last_id="",this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_marks=0,this.form_last.last_order=0,this.form_last.last_image="",this.form_last.is_update=0,this.url2=""),this.form_last.is_last=0,this.open=!0},closeModal(){this.open=!1},submit_last(){if(this.form_last.is_last==1)this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.post(route("admin.gacha.product_last.create"),{preserveScroll:!0,onFinish:()=>{}});else{if(this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.last_order>0&&this.form_last.last_marks!=1){alert("\u6392\u51FA\u9806\u5E8F\u306F\u70B9\u6570\u306E\u5024\u304C1\u306E\u5834\u5408\u306B\u306E\u307F\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002");return}if(this.form_last.last_order>0&&this.form_last.last_order<=this.gacha.count){alert("\u3053\u306E\u30AC\u30C1\u30E3\u306F\u3059\u3067\u306B "+this.gacha.count+" \u56DE\u56DE\u3055\u308C\u3066\u3044\u307E\u3059\u3002 "+this.gacha.count+" \u4EE5\u4E0A\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002");return}if(this.form_last.last_order>0&&this.products.data.find(e=>e.order==this.form_last.last_order)){alert("\u3053\u306E\u6392\u51FA\u9806\u5E8F\u306F\u3059\u3067\u306B\u4F7F\u7528\u3057\u307E\u3057\u305F\u3002");return}let s=y(this.form_last.data());s.last_marks/=this.count_step,s.post(route("admin.gacha.product.create"),{onFinish:()=>{},preserveScroll:!0})}},submit(){let s=this.form.count_card-this.gacha.count;var e=0;let r;for(r=0;r<this.form.lostProducts.length;r++)this.form.lostProducts[r].key&&(e=e+this.form.lostProducts[r].count);let n=0;for(r=0;r<this.products.data.length;r++)(this.form.lost_product_type!="1"||this.products.data[r].order==0)&&(n=n+this.products.data[r].marks*this.count_step);this.form.lost_product_type=="1"&&(this.form.count_card=0);let c=e+n;c=parseFloat(c.toFixed(7));let l="";this.form.lost_product_type=="1"?l=c==100?"\u30AB\u30FC\u30C9\u6392\u51FA\u7387\u306E\u5408\u8A08\u304C\u6B63\u78BA\u3067\u3059\u3002":`\u30AB\u30FC\u30C9\u6392\u51FA\u7387\u306E\u5408\u8A08\u306F100\uFF05\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u73FE\u5728${c}%\u3067\u3059\u3002`:l=c==s?"\u6B8B\u308A\u53E3\u6570 "+s+" = \u5F53\u305F\u308A\u30AB\u30FC\u30C9\u306E\u6B8B\u308A\u6570 "+n+" + \u30AB\u30FC\u30C9\u6307\u5B9A\u306E\u6B8B\u308A\u6570 "+e+"  \u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F":"\u6B8B\u308A\u53E3\u6570 "+s+" \u2260 \u5F53\u305F\u308A\u30AB\u30FC\u30C9\u306E\u6B8B\u308A\u6570 "+n+" + \u30AB\u30FC\u30C9\u6307\u5B9A\u306E\u6B8B\u308A\u6570 "+e+"  \u5927\u4E08\u592B\u3067\u3059\u304B\uFF1F",confirm(l)&&(this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.$refs.photo1&&(this.form.thumbnail=this.$refs.photo1.files[0]),y({...this.form.data(),lostProducts:this.form.lostProducts.map(w=>({...w,count:w.count/this.count_step}))}).post(route("admin.gacha.update"),{preserveScroll:!0}))},previewImage(s){const e=s.target.files[0];this.url=URL.createObjectURL(e)},previewImage1(s){const e=s.target.files[0];this.url1=URL.createObjectURL(e)},previewImage2(s){const e=s.target.files[0];this.url2=URL.createObjectURL(e)},previewVideo(s,e){const r=s.target.files[0];this.urls[e]=URL.createObjectURL(r);var n=this.form.ids.indexOf(e);n==-1?(this.form.ids.push(e),this.form.videos.push(r)):this.form.videos[n]=r},toPublic(s){this.form_to_public.to_status=s,this.form_to_public.post(route("admin.gacha.to_public"),{onFinish:()=>{},preserveScroll:!0})},gachaLimit(s){this.form_to_limit.to_status=s,this.form_to_limit.post(route("admin.gacha.gacha_limit"),{onFinish:()=>{},preserveScroll:!0})},addLostProduct(){let s=0,e;for(e=0;e<this.form.lostProducts.length;e++)s<this.form.lostProducts[e].key&&(s=this.form.lostProducts[e].key);s=s+1,this.form.lostProducts.push({id:0,point:0,count:0,key:s})},deleteLostProduct(s){let e;for(e=0;e<this.form.lostProducts.length;e++)if(s==this.form.lostProducts[e].key){this.form.lostProducts[e].key=0;break}}},setup(s){const e=y({id:s.gacha.id,point:s.gacha.point,count_card:s.gacha.count_card,count:s.gacha.count,lost_product_type:s.gacha.lost_product_type,thumbnail:"",image:"",category_id:s.category_share.cat_id,lostProducts:[],spin_limit:s.gacha.spin_limit,ids:[],videos:s.videos,start_time:s.gacha.start_time,end_time:s.gacha.end_time,rank_limit:s.gacha.rank_limit});let r={last_id:"",last_name:"",last_point:"",last_rare:"",last_marks:"",last_image:"",last_order:"",is_last:0,gacha_id:s.gacha.id,is_update:0};const n=y(r),c=y({gacha_id:s.gacha.id,to_status:1}),l=y({gacha_id:s.gacha.id,to_status:1});return{form:e,form_last:n,form_to_public:c,form_to_limit:l}},mounted(){this.url=this.gacha.image,this.url1=this.gacha.thumbnail,this.form.lostProducts=[];let s;for(s=0;s<this.productsLostSetting.length;s++){let e=this.productsLostSetting[s];this.form.lostProducts.push({id:e.id,count:parseFloat((e.count*this.count_step).toFixed(7)),point:e.point,key:e.id})}},computed:{count_step(){return this.form.lost_product_type=="1"?.01:1},sortedProducts(){let s=this.products.data;return this.sorting=="point_up"&&s.sort((e,r)=>e.point-r.point),this.sorting=="point_down"&&s.sort((e,r)=>r.point-e.point),this.sorting=="count_up"&&s.sort((e,r)=>e.marks-r.marks),this.sorting=="count_down"&&s.sort((e,r)=>r.marks-e.marks),s}}},K={class:"pt-6 md:px-6 px-4"},Q={class:"flex flex-wrap justify-between mb-4 gap-2"},W={class:"text-right"},Z=["disabled"],$=["disabled"],tt=["disabled"],et=["disabled"],ot={class:"mb-4"},st=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),t("span",{class:"text-red-500"},"*")],-1),rt={key:0,class:"text-red-500 text-sm mt-1"},nt={class:"mb-4"},lt=t("label",{for:"type",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[m("\u7A2E\u985E "),t("span",{class:"text-red-500"},"*")],-1),it=t("option",{value:"0"},"\u9650\u5B9A\u30AB\u30FC\u30C9",-1),at=t("option",{value:"1"},"\u7121\u9650\u30AC\u30C1\u30E3",-1),dt=[it,at],ct={key:0,class:"mb-4"},ut=t("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u7DCF\u30AB\u30FC\u30C9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),mt={key:0,class:"text-red-500 text-sm mt-1"},_t={class:"mb-4"},ft=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30AC\u30C1\u30E3\u5236\u9650\u56DE\u6570 "),t("span",{class:"text-red-500"},"*")],-1),ht={key:0,class:"text-red-500 text-sm mt-1"},bt={class:"mb-4"},pt=t("label",{for:"rank_limit",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30E9\u30F3\u30AF\u5236\u9650",-1),gt=t("option",{value:0},"\u5236\u9650\u306A\u3057",-1),xt=["value"],vt={class:"mb-4"},yt=t("label",{class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u958B\u59CB\u6642\u523B",-1),wt={class:"w-full flex flex-wrap gap-3 items-center"},kt={class:"mb-4"},Pt=t("label",{class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u7D42\u4E86\u6642\u523B",-1),Vt={class:"w-full flex flex-wrap gap-3 items-center"},Ut={class:"mb-4"},Ct=t("label",{for:"cards",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u30CF\u30BA\u30EC\u30AB\u30FC\u30C9\u767B\u9332\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),Lt={key:0,class:"w-full flex flex-row items-center mb-3"},jt={class:"flex-1 flex items-center"},Ot={class:"flex-1 inline-block pr-1"},Ft=["onUpdate:modelValue"],It=t("span",{class:"pl-1 pr-3"},"PT : ",-1),Mt={class:"flex-1 inline-block pr-1"},Dt=["onUpdate:modelValue","step"],St={class:"px-2"},Rt={class:"w-10 shrink h-10"},Tt=["onClick"],Ht={class:"text-center pt-2"},Nt={class:"mb-4"},qt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30B5\u30E0\u30CD\u30A4\u30EB "),t("span",{class:"text-red-500"},"*")],-1),Bt={class:"text-center w-full"},At=["src"],Et={key:0,class:"text-red-500 text-sm mt-1"},zt={class:"mb-8"},Xt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF "),t("span",{class:"text-red-500"},"*")],-1),Yt={class:"text-center w-full"},Gt=["src"],Jt={key:0,class:"text-red-500 text-sm mt-1"},Kt={class:"mb-8"},Qt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u52D5\u753B\u8A2D\u5B9A"),t("span",{class:"text-red-500"},"*")],-1),Wt={class:"flex items-center gap-3 py-1"},Zt=t("span",null,"\u52D5\u753B",-1),$t=["onUpdate:modelValue"],te=["onUpdate:modelValue"],ee={class:"w-32"},oe={class:"w-10 shrink h-10"},se=["onClick"],re={class:"text-center pt-2"},ne={class:"mb-8 text-center flex gap-2 justify-center sticky bottom-5"},le=t("button",{type:"submit",class:"inline-block items-center flex-1 max-w-60 py-2 bg-green-500 rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ",-1),ie=t("h3",{class:"mb-2 font-bold"},"\u30E9\u30B9\u30C8\u30EF\u30F3\u8CDE \u767B\u9332",-1),ae=t("hr",null,null,-1),de={class:"mb-6 py-2 border-neutral-200 border-b flex flex-wrap justify-center items-center gap-2"},ce={key:0,class:"flex-1 flex border-neutral-200 items-center"},ue=["src"],me={class:"flex flex-col justify-evenly text-sm py-1 px-2"},_e={class:"text-red-500"},fe={class:"flex flex-wrap gap-2 justify-center"},he={class:"flex flex-wrap justify-between mb-4 gap-2"},be=t("h3",{class:"font-bold pt-1"},"\u5F53\u305F\u308A\u30AB\u30FC\u30C9 \u767B\u9332",-1),pe={class:"flex items-center gap-2"},ge=t("label",{for:"sorting",class:"block font-medium text-sm text-neutral-700 text-nowrap"},"\u30BD\u30FC\u30C8",-1),xe=t("option",{value:"point_up"},"\u30DD\u30A4\u30F3\u30C8\u6607\u9806",-1),ve=t("option",{value:"point_down"},"\u30DD\u30A4\u30F3\u30C8\u964D\u9806",-1),ye={value:"count_up"},we={value:"count_down"},ke=t("hr",{class:"mb-2"},null,-1),Pe={class:"mb-2 pb-2 border-neutral-200 border-b flex items-center justify-between flex-wrap"},Ve={class:"flex border-neutral-200 items-center"},Ue=["src"],Ce={class:"flex-1 inline-block text-sm py-1 px-2"},Le={key:0},je={class:"text-red-500"},Oe={class:"text-center flex flex-wrap gap-2"},Fe=["onClick"],Ie=["onClick"],Me={class:"flex justify-center text-center my-4"},De=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Se={class:"fixed inset-0 z-10 overflow-y-auto"},Re={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},Te={class:"mb-4"},He=t("label",{for:"text1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u540D\u524D"),t("span",{class:"text-red-500"},"*")],-1),Ne={class:"text-red-500 text-sm mt-1"},qe={class:"mb-4"},Be=t("label",{for:"text1-2",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u5909\u63DB\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),Ae={class:"text-red-500 text-sm mt-1"},Ee={class:"mb-4"},ze=t("label",{for:"text1-3",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u30EC\u30A2\u5EA6"),t("span",{class:"text-red-500"},"*")],-1),Xe={class:"text-red-500 text-sm mt-1"},Ye={key:0,class:"mb-4"},Ge={for:"text1-4",class:"block font-medium text-sm text-neutral-700 mb-1"},Je=t("span",{class:"text-red-500"},"*",-1),Ke=["step"],Qe={class:"text-red-500 text-sm mt-1"},We={key:1,class:"mb-4"},Ze=t("label",{for:"text1-4",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u6392\u51FA\u9806\u5E8F",-1),$e={class:"text-red-500 text-sm mt-1"},to={class:"mb-4"},eo=t("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[m("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9 "),t("span",{class:"text-red-500"},"*")],-1),oo={class:"text-center w-full"},so=["src"],ro={class:"text-red-500 text-sm mt-1"},no={class:"mb-6 text-center"},lo=t("button",{type:"submit",class:"inline-block items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u4FDD\u5B58 ",-1);function io(s,e,r,n,c,l){const U=p("Head"),w=p("VueDatePicker"),C=p("XMarkIcon"),O=p("Link"),L=p("TransitionChild"),F=p("DialogPanel"),I=p("Dialog"),M=p("TransitionRoot"),D=p("AppLayout");return i(),a(x,null,[f(U,{title:"\u30AC\u30C1\u30E3 \u7DE8\u96C6"}),f(D,{closeModal:l.closeModal},{default:g(()=>[t("div",K,[t("div",Q,[t("div",W,[r.gacha.status==1?(i(),a("button",{key:0,type:"button",onClick:e[0]||(e[0]=o=>l.toPublic(0)),class:k([{"opacity-25":n.form_to_public.processing},"inline w-44 py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"]),disabled:n.form_to_public.processing}," \u975E\u516C\u958B\u306B\u3059\u308B ",10,Z)):(i(),a("button",{key:1,type:"button",onClick:e[1]||(e[1]=o=>l.toPublic(1)),class:k([{"opacity-25":n.form_to_public.processing},"inline w-44 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"]),disabled:n.form_to_public.processing}," \u516C\u958B\u306B\u3059\u308B ",10,$))]),t("div",null,[r.gacha.gacha_limit_on_setting==1?(i(),a("button",{key:0,type:"button",onClick:e[2]||(e[2]=o=>l.gachaLimit(0)),class:k([{"opacity-25":n.form_to_limit.processing},"inline w-44 py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"]),disabled:n.form_to_limit.processing}," 1\u65E51\u56DE\u5236\u9650\u30AD\u30E3\u30F3\u30BB\u30EB ",10,tt)):(i(),a("button",{key:1,type:"button",onClick:e[3]||(e[3]=o=>l.gachaLimit(1)),class:k([{"opacity-25":n.form_to_limit.processing},"inline w-44 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"]),disabled:n.form_to_limit.processing}," 1\u65E51\u56DE\u5236\u9650\u8A2D\u5B9A ",10,et))])]),t("form",{onSubmit:e[15]||(e[15]=j(o=>l.submit(),["prevent"]))},[t("div",ot,[st,_(t("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.form.point=o),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[h,n.form.point]]),r.errors.point?(i(),a("div",rt,d(r.errors.point),1)):u("",!0)]),t("div",nt,[lt,_(t("select",{"onUpdate:modelValue":e[5]||(e[5]=o=>n.form.lost_product_type=o),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},dt,512),[[V,n.form.lost_product_type]])]),n.form.lost_product_type=="0"?(i(),a("div",ct,[ut,_(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.form.count_card=o),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[h,n.form.count_card]]),r.errors.count_card?(i(),a("div",mt,d(r.errors.count_card),1)):u("",!0)])):u("",!0),t("div",_t,[ft,_(t("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>n.form.spin_limit=o),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[h,n.form.spin_limit]]),r.errors.spin_limit?(i(),a("div",ht,d(r.errors.spin_limit),1)):u("",!0)]),t("div",bt,[pt,_(t("select",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.form.rank_limit=o),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[gt,(i(!0),a(x,null,P(r.ranks,(o,v)=>(i(),a("option",{value:o.rank},d(o.title),9,xt))),256))],512),[[V,n.form.rank_limit]])]),t("div",vt,[yt,t("div",wt,[f(w,{modelValue:n.form.start_time,"onUpdate:modelValue":e[9]||(e[9]=o=>n.form.start_time=o),format:"Y-MM-dd HH:mm",class:"flex-1"},null,8,["modelValue"])])]),t("div",kt,[Pt,t("div",Vt,[f(w,{modelValue:n.form.end_time,"onUpdate:modelValue":e[10]||(e[10]=o=>n.form.end_time=o),format:"Y-MM-dd HH:mm",class:"flex-1"},null,8,["modelValue"])])]),t("div",Ut,[Ct,(i(!0),a(x,null,P(n.form.lostProducts,(o,v)=>(i(),a(x,null,[o.key?(i(),a("div",Lt,[t("div",jt,[t("div",Ot,[_(t("input",{"onUpdate:modelValue":b=>o.point=b,type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5909\u63DBpt"},null,8,Ft),[[h,o.point]])]),It,t("div",Mt,[_(t("input",{"onUpdate:modelValue":b=>o.count=b,type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u679A\u6570",step:l.count_step},null,8,Dt),[[h,o.count]])]),t("span",St,d(l.count_step==1?"\u679A":"%"),1)]),t("div",Rt,[t("button",{type:"button",onClick:b=>l.deleteLostProduct(o.key),class:"h-full w-10 text-center"},[f(C,{class:"h-5 w-5 inline-block"})],8,Tt)])])):u("",!0)],64))),256)),t("div",Ht,[t("button",{type:"button",onClick:e[11]||(e[11]=o=>l.addLostProduct()),class:"inline-block items-center max-w-60 w-full mx-auto py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 mr-2"}," \u30AB\u30FC\u30C9\u8FFD\u52A0 ")])]),t("div",Nt,[qt,t("div",Bt,[c.url1?(i(),a("img",{key:0,src:c.url1,class:"inline-block mt-4 h-52"},null,8,At)):u("",!0)]),t("input",{onChange:e[12]||(e[12]=(...o)=>l.previewImage1&&l.previewImage1(...o)),ref:"photo1",id:"file1",type:"file",class:"w-full"},null,544),r.errors.thumbnail?(i(),a("div",Et,d(r.errors.thumbnail),1)):u("",!0)]),t("div",zt,[Xt,t("div",Yt,[c.url?(i(),a("img",{key:0,src:c.url,class:"inline-block mt-4 h-52"},null,8,Gt)):u("",!0)]),t("input",{onChange:e[13]||(e[13]=(...o)=>l.previewImage&&l.previewImage(...o)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),r.errors.image?(i(),a("div",Jt,d(r.errors.image),1)):u("",!0)]),t("div",Kt,[Qt,(i(!0),a(x,null,P(n.form.videos,(o,v)=>(i(),a("div",Wt,[Zt,_(t("input",{type:"number",class:"h-9 w-24 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300","onUpdate:modelValue":b=>o.level=b},null,8,$t),[[h,o.level]]),m(" : "),_(t("input",{type:"number",class:"h-9 w-32 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300","onUpdate:modelValue":b=>o.point=b},null,8,te),[[h,o.point]]),m("pt \xA0\xA0~ "),t("span",ee,d(v+1<n.form.videos.length?n.form.videos[v+1].point-1+" pt":""),1),t("div",oe,[t("button",{type:"button",onClick:b=>l.deleteVideo(v),class:"h-full w-10 text-center"},[f(C,{class:"h-5 w-5 inline-block"})],8,se)])]))),256)),t("div",re,[t("button",{type:"button",onClick:e[14]||(e[14]=o=>l.addVideo()),class:"inline-block items-center px-8 py-2 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 mr-2"}," \u8FFD\u52A0 ")])]),t("div",ne,[le,f(O,{href:s.route("admin.gacha",{cat_id:r.gacha.category_id}),as:"button",class:"inline-block items-center flex-1 max-w-60 py-2 bg-rose-500 rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-rose-700 active:bg-rose-700 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150"},{default:g(()=>[m(" \u623B\u308B ")]),_:1},8,["href"])])],32),n.form.lost_product_type=="0"?(i(),a(x,{key:0},[ie,ae,t("div",de,[r.product_last.id?(i(),a("div",ce,[t("img",{src:r.product_last.image,class:"w-20 h-20 inline-block object-contain"},null,8,ue),t("div",me,[t("div",null,d(r.product_last.name),1),t("div",null,d(r.product_last.rare),1),t("div",_e,d(r.product_last.point)+"pt",1)])])):u("",!0),t("div",fe,[r.product_last.name?(i(),a("button",{key:0,type:"button",onClick:e[16]||(e[16]=o=>l.modalProductLastOpen()),class:"items-center flex-1 min-w-16 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u7DE8\u96C6 ")):(i(),a("button",{key:1,type:"button",onClick:e[17]||(e[17]=o=>l.modalProductLastOpen()),class:"items-center flex-1 max-w-60 py-2 my-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u8FFD\u52A0 ")),r.product_last.name?(i(),a("button",{key:2,onClick:e[18]||(e[18]=o=>s.destroy_product(r.product_last.id)),type:"button",class:"items-center flex-1 min-w-16 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ")):u("",!0)])])],64)):u("",!0),t("div",he,[be,t("div",pe,[ge,_(t("select",{"onUpdate:modelValue":e[19]||(e[19]=o=>c.sorting=o),id:"sorting",class:"text-sm w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[xe,ve,t("option",ye,d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387\u6607\u9806":"\u30AB\u30FC\u30C9\u679A\u6570\u6607\u9806"),1),t("option",we,d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387\u964D\u9806":"\u30AB\u30FC\u30C9\u679A\u6570\u964D\u9806"),1)],512),[[V,c.sorting]])])]),ke,(i(!0),a(x,null,P(l.sortedProducts,(o,v)=>(i(),a("div",Pe,[t("div",Ve,[t("img",{src:o.image,class:"w-20 h-20 inline-block object-contain"},null,8,Ue),t("div",Ce,[t("div",null,d(o.name),1),t("div",null,d(o.rare),1),t("div",null,[m(d(parseFloat((o.marks*l.count_step).toFixed(7))),1),o.order?(i(),a("span",Le,"("+d(o.order)+"\u756A)",1)):u("",!0)]),t("div",je,d(o.point)+"pt",1)])]),t("div",Oe,[t("button",{type:"button",onClick:b=>l.modalProductOpen(o),class:"inline-block items-center flex-1 min-w-16 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u7DE8\u96C6 ",8,Fe),t("button",{type:"button",onClick:b=>l.destroy_product_last(o.id),class:"inline-block items-center flex-1 min-w-16 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ",8,Ie)])]))),256)),t("div",Me,[t("button",{type:"button",onClick:e[20]||(e[20]=o=>l.modalProductOpen(0)),class:"inline-block items-center flex-1 max-w-60 py-2 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150"}," \u8FFD\u52A0 ")])]),t("template",null,[f(M,{as:"template",show:c.open},{default:g(()=>[f(I,{as:"div",class:"relative z-20",onClose:e[29]||(e[29]=o=>c.open=!1)},{default:g(()=>[f(L,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:g(()=>[De]),_:1}),t("div",Se,[t("div",Re,[f(L,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:g(()=>[f(F,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:g(()=>[t("form",{onSubmit:e[28]||(e[28]=j(o=>l.submit_last(),["prevent"]))},[t("div",Te,[He,_(t("input",{"onUpdate:modelValue":e[21]||(e[21]=o=>n.form_last.last_name=o),id:"text1-1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[h,n.form_last.last_name]]),t("div",Ne,d(r.errors.last_name),1)]),t("div",qe,[Be,_(t("input",{"onUpdate:modelValue":e[22]||(e[22]=o=>n.form_last.last_point=o),id:"text1-2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[h,n.form_last.last_point]]),t("div",Ae,d(r.errors.last_point),1)]),t("div",Ee,[ze,_(t("input",{"onUpdate:modelValue":e[23]||(e[23]=o=>n.form_last.last_rare=o),id:"text1-3",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[h,n.form_last.last_rare]]),t("div",Xe,d(r.errors.last_rare),1)]),n.form_last.is_last==0?(i(),a("div",Ye,[t("label",Ge,[m(d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387 (%)":"\u679A\u6570")+"\uFF08\u534A\u89D2\u6570\u5B57\uFF09",1),Je]),_(t("input",{"onUpdate:modelValue":e[24]||(e[24]=o=>n.form_last.last_marks=o),id:"text1-4",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",step:l.count_step,required:""},null,8,Ke),[[h,n.form_last.last_marks]]),t("div",Qe,d(r.errors.last_marks),1)])):u("",!0),n.form_last.is_last==0&&n.form.lost_product_type!="1"?(i(),a("div",We,[Ze,_(t("input",{"onUpdate:modelValue":e[25]||(e[25]=o=>n.form_last.last_order=o),id:"text1-4",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u6392\u51FA\u8A2D\u5B9A\u304C\u306A\u3044\u5834\u5408\u306F\u30010\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",required:""},null,512),[[h,n.form_last.last_order]]),t("div",$e,d(r.errors.last_order),1)])):u("",!0),t("div",to,[eo,t("div",oo,[c.url2?(i(),a("img",{key:0,src:c.url2,class:"inline-block mt-4 h-24"},null,8,so)):u("",!0)]),t("input",{onChange:e[26]||(e[26]=(...o)=>l.previewImage2&&l.previewImage2(...o)),ref:"photo2",id:"file1-1",type:"file",class:"w-full"},null,544),t("div",ro,d(r.errors.last_image),1)]),t("div",no,[lo,t("button",{type:"button",onClick:e[27]||(e[27]=o=>c.open=!1),class:"inline-block items-center px-8 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const po=q(J,[["render",io]]);export{po as default};
