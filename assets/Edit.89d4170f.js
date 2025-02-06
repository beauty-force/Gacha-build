import{L as S,H as T,E as R,G as v,r as p,o as l,c as i,b as h,w as x,F as g,d as t,n as V,I as j,J as m,K as b,t as d,g as u,M as y,f as k,e as f}from"./app.cde0afa9.js";import{A as H}from"./Admin.7eff2fff.js";import{B as E}from"./main.94457cb8.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as B,e as q,U as A,o as z,f as X,r as Y}from"./toastify.41e3799e.js";import{r as G}from"./ExclamationTriangleIcon.0248a99b.js";import"./isNativeReflectConstruct.8f2fcece.js";const J={components:{Link:S,Head:T,AppLayout:H,Dialog:B,DialogPanel:q,DialogTitle:A,TransitionChild:z,TransitionRoot:X,ExclamationTriangleIcon:G,XMarkIcon:Y,VueDatePicker:E},props:{errors:Object,gacha:Object,category_share:Object,product_last:Object,products:Object,productsLostSetting:Object,videos:Object,titles:Object,ranks:Object,lost_types:Object,video_names:Object},data(){return{url:null,url1:null,url2:null,open:!1,sorting:"point_down"}},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},addVideo(){if(this.video_names.length==0){alert("\u767B\u9332\u3055\u308C\u305F\u52D5\u753B\u304C\u3042\u308A\u307E\u305B\u3093\u3002");return}this.form.videos.push({level:this.video_names[0],point:0})},deleteVideo(s){this.form.videos=this.form.videos.filter((e,r)=>r!=s)},destroy_product_last(s){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&R.Inertia.delete(route("admin.gacha.product_last.destroy",{id:s}))},modalProductLastOpen(){this.product_last.name?(this.form_last.last_name=this.product_last.name,this.form_last.last_point=this.product_last.point,this.form_last.last_rare=this.product_last.rare,this.form_last.last_image="",this.form_last.is_update=1,this.url2=this.product_last.image):(this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_image="",this.form_last.is_update=0,this.url2=""),this.form_last.is_last=1,this.form_last.last_marks=0,this.open=!0},modalProductOpen(s){s?(this.form_last.last_id=s.id,this.form_last.last_name=s.name,this.form_last.last_point=s.point,this.form_last.last_rare=s.rare,this.form_last.last_marks=parseFloat((s.marks*this.count_step).toFixed(7)),this.form_last.last_order=s.order,this.form_last.last_image="",this.form_last.is_update=1,this.url2=s.image,this.form_last.rank=s.rank):(this.form_last.last_id="",this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_marks=0,this.form_last.last_order=0,this.form_last.last_image="",this.form_last.is_update=0,this.url2="",this.form_last.rank=0),this.form_last.is_last=0,this.open=!0},closeModal(){this.open=!1},submit_last(){if(this.form_last.is_last==1)this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.post(route("admin.gacha.product_last.create"),{preserveScroll:!0,onFinish:()=>{}});else{if(this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.last_order>0&&this.form_last.last_marks!=1){alert("\u6392\u51FA\u9806\u5E8F\u306F\u70B9\u6570\u306E\u5024\u304C1\u306E\u5834\u5408\u306B\u306E\u307F\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002");return}if(this.form_last.last_order>0&&this.form_last.last_order<=this.gacha.count){alert("\u3053\u306E\u30AC\u30C1\u30E3\u306F\u3059\u3067\u306B "+this.gacha.count+" \u56DE\u56DE\u3055\u308C\u3066\u3044\u307E\u3059\u3002 "+this.gacha.count+" \u4EE5\u4E0A\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002");return}if(this.form_last.last_order>0&&this.products.data.find(e=>e.order==this.form_last.last_order&&e.id!=this.form_last.last_id)){alert("\u3053\u306E\u6392\u51FA\u9806\u5E8F\u306F\u3059\u3067\u306B\u4F7F\u7528\u3057\u307E\u3057\u305F\u3002");return}let s=v(this.form_last.data());s.last_marks/=this.count_step,s.post(route("admin.gacha.product.create"),{onFinish:()=>{},preserveScroll:!0})}},submit(){let s=this.form.count_card-this.gacha.count;var e=0;let r;for(r=0;r<this.form.lostProducts.length;r++)this.form.lostProducts[r].key&&(e=e+this.form.lostProducts[r].count);let n=0;for(r=0;r<this.products.data.length;r++)(this.form.lost_product_type!="1"||this.products.data[r].order==0)&&(n=n+this.products.data[r].marks*this.count_step);this.form.lost_product_type=="1"&&(this.form.count_card=0);let c=e+n;c=parseFloat(c.toFixed(7));let a="";this.form.lost_product_type=="1"?a=c==100?"\u30AB\u30FC\u30C9\u6392\u51FA\u7387\u306E\u5408\u8A08\u304C\u6B63\u78BA\u3067\u3059\u3002":`\u30AB\u30FC\u30C9\u6392\u51FA\u7387\u306E\u5408\u8A08\u306F100\uFF05\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002\u73FE\u5728${c}%\u3067\u3059\u3002`:a=c==s?"\u6B8B\u308A\u53E3\u6570 "+s+" = \u5F53\u305F\u308A\u30AB\u30FC\u30C9\u306E\u6B8B\u308A\u6570 "+n+" + \u30AB\u30FC\u30C9\u6307\u5B9A\u306E\u6B8B\u308A\u6570 "+e+"  \u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F":"\u6B8B\u308A\u53E3\u6570 "+s+" \u2260 \u5F53\u305F\u308A\u30AB\u30FC\u30C9\u306E\u6B8B\u308A\u6570 "+n+" + \u30AB\u30FC\u30C9\u6307\u5B9A\u306E\u6B8B\u308A\u6570 "+e+"  \u5927\u4E08\u592B\u3067\u3059\u304B\uFF1F",confirm(a)&&(this.$refs.photo&&(this.form.image=this.$refs.photo.files[0]),this.$refs.photo1&&(this.form.thumbnail=this.$refs.photo1.files[0]),v({...this.form.data(),lostProducts:this.form.lostProducts.map(w=>({...w,count:w.count/this.count_step}))}).post(route("admin.gacha.update"),{preserveScroll:!0}))},previewImage(s){const e=s.target.files[0];this.url=URL.createObjectURL(e)},previewImage1(s){const e=s.target.files[0];this.url1=URL.createObjectURL(e)},previewImage2(s){const e=s.target.files[0];this.url2=URL.createObjectURL(e)},toPublic(s){this.form_to_public.to_status=s,this.form_to_public.post(route("admin.gacha.to_public"),{onFinish:()=>{},preserveScroll:!0})},gachaLimit(s){this.form_to_limit.to_status=s,this.form_to_limit.post(route("admin.gacha.gacha_limit"),{onFinish:()=>{},preserveScroll:!0})},addLostProduct(){let s=0,e;for(e=0;e<this.form.lostProducts.length;e++)s<this.form.lostProducts[e].key&&(s=this.form.lostProducts[e].key);s=s+1,this.form.lostProducts.push({id:0,point:0,count:0,key:s})},deleteLostProduct(s){let e;for(e=0;e<this.form.lostProducts.length;e++)if(s==this.form.lostProducts[e].key){this.form.lostProducts[e].key=0;break}}},setup(s){const e=v({id:s.gacha.id,point:s.gacha.point,count_card:s.gacha.count_card,count:s.gacha.count,lost_product_type:s.gacha.lost_product_type,thumbnail:"",image:"",category_id:s.category_share.cat_id,lostProducts:[],spin_limit:s.gacha.spin_limit,ids:[],videos:s.videos,start_time:s.gacha.start_time,end_time:s.gacha.end_time,rank_limit:s.gacha.rank_limit});let r={last_id:"",last_name:"",last_point:"",last_rare:"",last_marks:"",last_image:"",last_order:"",is_last:0,gacha_id:s.gacha.id,is_update:0,rank:0};const n=v(r),c=v({gacha_id:s.gacha.id,to_status:1}),a=v({gacha_id:s.gacha.id,to_status:1});return{form:e,form_last:n,form_to_public:c,form_to_limit:a}},mounted(){this.url=this.gacha.image,this.url1=this.gacha.thumbnail,this.form.lostProducts=[];let s;for(s=0;s<this.productsLostSetting.length;s++){let e=this.productsLostSetting[s];this.form.lostProducts.push({id:e.id,count:parseFloat((e.count*this.count_step).toFixed(7)),point:e.point,key:e.id})}},computed:{count_step(){return this.form.lost_product_type=="1"?.01:1},sortedProducts(){let s=this.products.data;return this.sorting=="point_up"&&s.sort((e,r)=>e.point-r.point),this.sorting=="point_down"&&s.sort((e,r)=>r.point-e.point),this.sorting=="count_up"&&s.sort((e,r)=>e.marks-r.marks),this.sorting=="count_down"&&s.sort((e,r)=>r.marks-e.marks),s},point_rate(){let s=this.form.point*(this.form.count_card-this.gacha.count);this.form.lost_product_type=="1"&&(s=this.form.point*1e4);let e=0;return this.form.lostProducts.forEach(r=>{e+=r.point*r.count/this.count_step}),this.products.data.forEach(r=>{e+=r.point*r.marks/this.count_step}),(e*100/s).toFixed(2)}}},K={class:"pt-6 md:px-6 px-4"},Q={class:"flex flex-wrap justify-between mb-4 gap-2"},W={class:"text-right"},Z=["disabled"],$=["disabled"],tt=["disabled"],et=["disabled"],ot={class:"mb-4"},st=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u6D88\u8CBB\u30DD\u30A4\u30F3\u30C8\uFF08\u30C6\u30AD\u30B9\u30C8\uFF09"),t("span",{class:"text-red-500"},"*")],-1),rt={key:0,class:"text-red-500 text-sm mt-1"},nt={class:"mb-4"},lt=t("label",{for:"type",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},[f("\u7A2E\u985E "),t("span",{class:"text-red-500"},"*")],-1),it=t("option",{value:"0"},"\u9650\u5B9A\u30AB\u30FC\u30C9",-1),at=t("option",{value:"1"},"\u7121\u9650\u30AC\u30C1\u30E3",-1),dt=[it,at],ct={key:0,class:"mb-4"},ut=t("label",{for:"text2",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u7DCF\u30AB\u30FC\u30C9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),mt={key:0,class:"text-red-500 text-sm mt-1"},_t={class:"mb-4"},ft=t("label",{for:"text1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u30AC\u30C1\u30E3\u5236\u9650\u56DE\u6570 "),t("span",{class:"text-red-500"},"*")],-1),ht={key:0,class:"text-red-500 text-sm mt-1"},bt={class:"mb-4"},pt=t("label",{for:"rank_limit",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30E9\u30F3\u30AF\u5236\u9650",-1),gt=t("option",{value:0},"\u5236\u9650\u306A\u3057",-1),xt=["value"],vt={class:"mb-4"},yt=t("label",{class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u958B\u59CB\u6642\u523B",-1),kt={class:"w-full flex flex-wrap gap-3 items-center"},wt={class:"mb-4"},Pt=t("label",{class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u7D42\u4E86\u6642\u523B",-1),Vt={class:"w-full flex flex-wrap gap-3 items-center"},Ct={class:"mb-4"},Ut=t("label",{for:"cards",class:"block font-medium text-sm text-neutral-700 mb-2 ml-1"},"\u30CF\u30BA\u30EC\u30AB\u30FC\u30C9\u767B\u9332\uFF08\u534A\u89D2\u6570\u5B57\uFF09",-1),Lt={key:0,class:"w-full flex flex-row items-center mb-3"},jt={class:"flex-1 flex items-center"},Ot={class:"flex-1 inline-block pr-1"},Ft=["onUpdate:modelValue"],It=t("span",{class:"pl-1 pr-3"},"PT : ",-1),Mt={class:"flex-1 inline-block pr-1"},Dt=["onUpdate:modelValue","step"],St={class:"px-2"},Tt={class:"w-10 shrink h-10"},Rt=["onClick"],Ht={class:"text-center pt-2"},Et={class:"mb-4"},Nt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u30B5\u30E0\u30CD\u30A4\u30EB "),t("span",{class:"text-red-500"},"*")],-1),Bt={class:"text-center w-full"},qt=["src"],At={key:0,class:"text-red-500 text-sm mt-1"},zt={class:"mb-8"},Xt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u8A73\u7D30\u30DA\u30FC\u30B8\u753B\u50CF "),t("span",{class:"text-red-500"},"*")],-1),Yt={class:"text-center w-full"},Gt=["src"],Jt={key:0,class:"text-red-500 text-sm mt-1"},Kt={class:"mb-8"},Qt=t("label",{for:"file1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u52D5\u753B\u8A2D\u5B9A"),t("span",{class:"text-red-500"},"*")],-1),Wt={class:"flex items-center gap-3 py-1"},Zt=["onUpdate:modelValue"],$t=["onUpdate:modelValue"],te=["value"],ee={class:"w-10 shrink h-10"},oe=["onClick"],se={class:"text-center pt-2"},re={class:"mb-8 text-center flex gap-2 justify-center sticky bottom-5"},ne=t("button",{type:"submit",class:"inline-block items-center flex-1 max-w-60 py-2 bg-green-500 rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u4FDD\u5B58 ",-1),le=t("h3",{class:"mb-2 font-bold"},"\u30E9\u30B9\u30C8\u30EF\u30F3\u8CDE \u767B\u9332",-1),ie=t("hr",null,null,-1),ae={class:"mb-6 py-2 border-neutral-200 border-b flex flex-wrap justify-center items-center gap-2"},de={key:0,class:"flex-1 flex border-neutral-200 items-center"},ce=["src"],ue={class:"flex flex-col justify-evenly text-sm py-1 px-2"},me={class:"text-red-500"},_e={class:"flex-1 flex flex-wrap gap-2 justify-center"},fe={class:"flex flex-wrap justify-between mb-4 gap-2"},he=t("h3",{class:"font-bold pt-1"},"\u5F53\u305F\u308A\u30AB\u30FC\u30C9 \u767B\u9332",-1),be={class:"flex items-center gap-2"},pe=t("label",{for:"sorting",class:"block font-medium text-sm text-neutral-700 text-nowrap"},"\u30BD\u30FC\u30C8",-1),ge=t("option",{value:"point_up"},"\u30DD\u30A4\u30F3\u30C8\u6607\u9806",-1),xe=t("option",{value:"point_down"},"\u30DD\u30A4\u30F3\u30C8\u964D\u9806",-1),ve={value:"count_up"},ye={value:"count_down"},ke=t("hr",{class:"mb-2"},null,-1),we={class:"mb-2 pb-2 border-neutral-200 border-b flex items-center justify-between flex-wrap"},Pe={class:"flex border-neutral-200 items-center"},Ve=["src"],Ce={class:"flex-1 inline-block text-sm py-1 px-2"},Ue={key:0},Le={class:"text-red-500"},je={class:"text-center flex flex-wrap gap-2"},Oe=["onClick"],Fe=["onClick"],Ie={class:"flex justify-between text-center my-6 items-center gap-4"},Me=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),De={class:"fixed inset-0 z-10 overflow-y-auto"},Se={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},Te={class:"mb-4"},Re=t("label",{for:"text1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u540D\u524D"),t("span",{class:"text-red-500"},"*")],-1),He={class:"text-red-500 text-sm mt-1"},Ee={class:"mb-4"},Ne=t("label",{for:"text1-2",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u5909\u63DB\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),Be={class:"text-red-500 text-sm mt-1"},qe={key:0,class:"mb-4"},Ae=t("label",{for:"last_rare",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u7A2E\u985E",-1),ze=["value"],Xe={key:1,class:"mb-4"},Ye=t("label",{for:"rank",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u30AB\u30FC\u30C9\u30E9\u30F3\u30AF",-1),Ge=t("option",{value:"0"},"\u305D\u306E\u4ED6",-1),Je=t("option",{value:"1"},"1\u7B49",-1),Ke=t("option",{value:"2"},"2\u7B49",-1),Qe=t("option",{value:"3"},"3\u7B49",-1),We=t("option",{value:"4"},"4\u7B49",-1),Ze=[Ge,Je,Ke,Qe,We],$e={key:2,class:"mb-4"},to={for:"text1-4",class:"block font-medium text-sm text-neutral-700 mb-1"},eo=t("span",{class:"text-red-500"},"*",-1),oo=["step"],so={class:"text-red-500 text-sm mt-1"},ro={key:3,class:"mb-4"},no=t("label",{for:"text1-4",class:"block font-medium text-sm text-neutral-700 mb-1"},"\u6392\u51FA\u9806\u5E8F",-1),lo={class:"text-red-500 text-sm mt-1"},io={class:"mb-4"},ao=t("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[f("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9 "),t("span",{class:"text-red-500"},"*")],-1),co={class:"text-center w-full"},uo=["src"],mo={class:"text-red-500 text-sm mt-1"},_o={class:"mb-6 text-center"},fo=t("button",{type:"submit",class:"inline-block items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u4FDD\u5B58 ",-1);function ho(s,e,r,n,c,a){const C=p("Head"),w=p("VueDatePicker"),U=p("XMarkIcon"),O=p("Link"),L=p("TransitionChild"),F=p("DialogPanel"),I=p("Dialog"),M=p("TransitionRoot"),D=p("AppLayout");return l(),i(g,null,[h(C,{title:"\u30AC\u30C1\u30E3 \u7DE8\u96C6"}),h(D,{closeModal:a.closeModal},{default:x(()=>[t("div",K,[t("div",Q,[t("div",W,[r.gacha.status==1?(l(),i("button",{key:0,type:"button",onClick:e[0]||(e[0]=o=>a.toPublic(0)),class:V([{"opacity-25":n.form_to_public.processing},"inline w-44 py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"]),disabled:n.form_to_public.processing}," \u975E\u516C\u958B\u306B\u3059\u308B ",10,Z)):(l(),i("button",{key:1,type:"button",onClick:e[1]||(e[1]=o=>a.toPublic(1)),class:V([{"opacity-25":n.form_to_public.processing},"inline w-44 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"]),disabled:n.form_to_public.processing}," \u516C\u958B\u306B\u3059\u308B ",10,$))]),t("div",null,[r.gacha.gacha_limit_on_setting==1?(l(),i("button",{key:0,type:"button",onClick:e[2]||(e[2]=o=>a.gachaLimit(0)),class:V([{"opacity-25":n.form_to_limit.processing},"inline w-44 py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"]),disabled:n.form_to_limit.processing}," 1\u65E51\u56DE\u5236\u9650\u30AD\u30E3\u30F3\u30BB\u30EB ",10,tt)):(l(),i("button",{key:1,type:"button",onClick:e[3]||(e[3]=o=>a.gachaLimit(1)),class:V([{"opacity-25":n.form_to_limit.processing},"inline w-44 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"]),disabled:n.form_to_limit.processing}," 1\u65E51\u56DE\u5236\u9650\u8A2D\u5B9A ",10,et))])]),t("form",{onSubmit:e[15]||(e[15]=j(o=>a.submit(),["prevent"]))},[t("div",ot,[st,m(t("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>n.form.point=o),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[b,n.form.point]]),r.errors.point?(l(),i("div",rt,d(r.errors.point),1)):u("",!0)]),t("div",nt,[lt,m(t("select",{"onUpdate:modelValue":e[5]||(e[5]=o=>n.form.lost_product_type=o),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},dt,512),[[y,n.form.lost_product_type]])]),n.form.lost_product_type=="0"?(l(),i("div",ct,[ut,m(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.form.count_card=o),id:"text2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[b,n.form.count_card]]),r.errors.count_card?(l(),i("div",mt,d(r.errors.count_card),1)):u("",!0)])):u("",!0),t("div",_t,[ft,m(t("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>n.form.spin_limit=o),id:"text1",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[b,n.form.spin_limit]]),r.errors.spin_limit?(l(),i("div",ht,d(r.errors.spin_limit),1)):u("",!0)]),t("div",bt,[pt,m(t("select",{"onUpdate:modelValue":e[8]||(e[8]=o=>n.form.rank_limit=o),id:"type",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[gt,(l(!0),i(g,null,k(r.ranks,(o,P)=>(l(),i("option",{value:o.rank},d(o.title),9,xt))),256))],512),[[y,n.form.rank_limit]])]),t("div",vt,[yt,t("div",kt,[h(w,{modelValue:n.form.start_time,"onUpdate:modelValue":e[9]||(e[9]=o=>n.form.start_time=o),format:"Y-MM-dd HH:mm",class:"flex-1"},null,8,["modelValue"])])]),t("div",wt,[Pt,t("div",Vt,[h(w,{modelValue:n.form.end_time,"onUpdate:modelValue":e[10]||(e[10]=o=>n.form.end_time=o),format:"Y-MM-dd HH:mm",class:"flex-1"},null,8,["modelValue"])])]),t("div",Ct,[Ut,(l(!0),i(g,null,k(n.form.lostProducts,(o,P)=>(l(),i(g,null,[o.key?(l(),i("div",Lt,[t("div",jt,[t("div",Ot,[m(t("input",{"onUpdate:modelValue":_=>o.point=_,type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5909\u63DBpt"},null,8,Ft),[[b,o.point]])]),It,t("div",Mt,[m(t("input",{"onUpdate:modelValue":_=>o.count=_,type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u679A\u6570",step:a.count_step},null,8,Dt),[[b,o.count]])]),t("span",St,d(a.count_step==1?"\u679A":"%"),1)]),t("div",Tt,[t("button",{type:"button",onClick:_=>a.deleteLostProduct(o.key),class:"h-full w-10 text-center"},[h(U,{class:"h-5 w-5 inline-block"})],8,Rt)])])):u("",!0)],64))),256)),t("div",Ht,[t("button",{type:"button",onClick:e[11]||(e[11]=o=>a.addLostProduct()),class:"inline-block items-center max-w-60 w-full mx-auto py-2.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 mr-2"}," \u30AB\u30FC\u30C9\u8FFD\u52A0 ")])]),t("div",Et,[Nt,t("div",Bt,[c.url1?(l(),i("img",{key:0,src:c.url1,class:"inline-block mt-4 h-52"},null,8,qt)):u("",!0)]),t("input",{onChange:e[12]||(e[12]=(...o)=>a.previewImage1&&a.previewImage1(...o)),ref:"photo1",id:"file1",type:"file",class:"w-full"},null,544),r.errors.thumbnail?(l(),i("div",At,d(r.errors.thumbnail),1)):u("",!0)]),t("div",zt,[Xt,t("div",Yt,[c.url?(l(),i("img",{key:0,src:c.url,class:"inline-block mt-4 h-52"},null,8,Gt)):u("",!0)]),t("input",{onChange:e[13]||(e[13]=(...o)=>a.previewImage&&a.previewImage(...o)),ref:"photo",id:"file1",type:"file",class:"w-full"},null,544),r.errors.image?(l(),i("div",Jt,d(r.errors.image),1)):u("",!0)]),t("div",Kt,[Qt,(l(!0),i(g,null,k(n.form.videos,(o,P)=>(l(),i("div",Wt,[m(t("input",{type:"number",class:"h-9 w-32 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300","onUpdate:modelValue":_=>o.point=_},null,8,Zt),[[b,o.point]]),f("\u4EE5\u4E0A\xA0\xA0\xA0=\xA0\xA0\xA0 "),m(t("select",{"onUpdate:modelValue":_=>o.level=_,class:"w-32 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[(l(!0),i(g,null,k(r.video_names,(_,bo)=>(l(),i("option",{value:_},d(_),9,te))),256))],8,$t),[[y,o.level]]),t("div",ee,[t("button",{type:"button",onClick:_=>a.deleteVideo(P),class:"h-full w-10 text-center"},[h(U,{class:"h-5 w-5 inline-block"})],8,oe)])]))),256)),t("div",se,[t("button",{type:"button",onClick:e[14]||(e[14]=o=>a.addVideo()),class:"inline-block items-center px-8 py-2 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 mr-2"}," \u8FFD\u52A0 ")])]),t("div",re,[ne,h(O,{href:s.route("admin.gacha",{cat_id:r.gacha.category_id}),as:"button",class:"inline-block items-center flex-1 max-w-60 py-2 bg-rose-500 rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-rose-700 active:bg-rose-700 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150"},{default:x(()=>[f(" \u623B\u308B ")]),_:1},8,["href"])])],32),n.form.lost_product_type=="0"?(l(),i(g,{key:0},[le,ie,t("div",ae,[r.product_last.id?(l(),i("div",de,[t("img",{src:r.product_last.image,class:"w-20 h-20 inline-block object-contain"},null,8,ce),t("div",ue,[t("div",null,d(r.product_last.name),1),t("div",null,d(r.product_last.rare),1),t("div",me,d(r.product_last.point)+"pt",1)])])):u("",!0),t("div",_e,[r.product_last.name?(l(),i("button",{key:0,type:"button",onClick:e[16]||(e[16]=o=>a.modalProductLastOpen()),class:"items-center flex-1 min-w-16 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u7DE8\u96C6 ")):(l(),i("button",{key:1,type:"button",onClick:e[17]||(e[17]=o=>a.modalProductLastOpen()),class:"items-center flex-1 max-w-60 py-2 my-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u8FFD\u52A0 ")),r.product_last.name?(l(),i("button",{key:2,onClick:e[18]||(e[18]=o=>a.destroy_product_last(r.product_last.id)),type:"button",class:"items-center flex-1 min-w-16 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ")):u("",!0)])])],64)):u("",!0),t("div",fe,[he,t("div",be,[pe,m(t("select",{"onUpdate:modelValue":e[19]||(e[19]=o=>c.sorting=o),id:"sorting",class:"text-sm w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},[ge,xe,t("option",ve,d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387\u6607\u9806":"\u30AB\u30FC\u30C9\u679A\u6570\u6607\u9806"),1),t("option",ye,d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387\u964D\u9806":"\u30AB\u30FC\u30C9\u679A\u6570\u964D\u9806"),1)],512),[[y,c.sorting]])])]),ke,(l(!0),i(g,null,k(a.sortedProducts,(o,P)=>(l(),i("div",we,[t("div",Pe,[t("img",{src:o.image,class:"w-20 h-20 inline-block object-contain"},null,8,Ve),t("div",Ce,[t("div",null,"ID: "+d(o.id)+" "+d(o.rank?`(${o.rank}\u7B49)`:""),1),t("div",null,d(o.name),1),t("div",null,d(o.rare),1),t("div",null,[f(d(parseFloat((o.marks*a.count_step).toFixed(7))),1),o.order?(l(),i("span",Ue,"("+d(o.order)+"\u756A)",1)):u("",!0)]),t("div",Le,d(a.format_number(o.point))+"pt",1)])]),t("div",je,[t("button",{type:"button",onClick:_=>a.modalProductOpen(o),class:"inline-block items-center flex-1 min-w-16 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u7DE8\u96C6 ",8,Oe),t("button",{type:"button",onClick:_=>a.destroy_product_last(o.id),class:"inline-block items-center flex-1 min-w-16 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ",8,Fe)])]))),256)),t("div",Ie,[t("span",null,"\u9084\u5143\u7387: "+d(a.point_rate)+"%",1),t("button",{type:"button",onClick:e[20]||(e[20]=o=>a.modalProductOpen(0)),class:"inline-block items-center flex-1 max-w-48 py-2 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150"}," \u8FFD\u52A0 ")])]),t("template",null,[h(M,{as:"template",show:c.open},{default:x(()=>[h(I,{as:"div",class:"relative z-20",onClose:e[30]||(e[30]=o=>c.open=!1)},{default:x(()=>[h(L,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:x(()=>[Me]),_:1}),t("div",De,[t("div",Se,[h(L,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:x(()=>[h(F,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:x(()=>[t("form",{onSubmit:e[29]||(e[29]=j(o=>a.submit_last(),["prevent"]))},[t("div",Te,[Re,m(t("input",{"onUpdate:modelValue":e[21]||(e[21]=o=>n.form_last.last_name=o),id:"text1-1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[b,n.form_last.last_name]]),t("div",He,d(r.errors.last_name),1)]),t("div",Ee,[Ne,m(t("input",{"onUpdate:modelValue":e[22]||(e[22]=o=>n.form_last.last_point=o),id:"text1-2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[b,n.form_last.last_point]]),t("div",Be,d(r.errors.last_point),1)]),n.form_last.is_last==0?(l(),i("div",qe,[Ae,m(t("select",{"onUpdate:modelValue":e[23]||(e[23]=o=>n.form_last.last_rare=o),id:"last_rare",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(l(!0),i(g,null,k(r.lost_types,(o,P)=>(l(),i("option",{value:o},d(o),9,ze))),256))],512),[[y,n.form_last.last_rare]])])):u("",!0),n.form_last.is_last==0?(l(),i("div",Xe,[Ye,m(t("select",{"onUpdate:modelValue":e[24]||(e[24]=o=>n.form_last.rank=o),id:"rank",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm"},Ze,512),[[y,n.form_last.rank]])])):u("",!0),n.form_last.is_last==0?(l(),i("div",$e,[t("label",to,[f(d(n.form.lost_product_type=="1"?"\u6392\u51FA\u7387 (%)":"\u679A\u6570")+"\uFF08\u534A\u89D2\u6570\u5B57\uFF09",1),eo]),m(t("input",{"onUpdate:modelValue":e[25]||(e[25]=o=>n.form_last.last_marks=o),id:"text1-4",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",step:a.count_step,required:""},null,8,oo),[[b,n.form_last.last_marks]]),t("div",so,d(r.errors.last_marks),1)])):u("",!0),n.form_last.is_last==0&&n.form.lost_product_type!="1"?(l(),i("div",ro,[no,m(t("input",{"onUpdate:modelValue":e[26]||(e[26]=o=>n.form_last.last_order=o),id:"text1-4",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u6392\u51FA\u8A2D\u5B9A\u304C\u306A\u3044\u5834\u5408\u306F\u30010\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",required:""},null,512),[[b,n.form_last.last_order]]),t("div",lo,d(r.errors.last_order),1)])):u("",!0),t("div",io,[ao,t("div",co,[c.url2?(l(),i("img",{key:0,src:c.url2,class:"inline-block mt-4 h-24"},null,8,uo)):u("",!0)]),t("input",{onChange:e[27]||(e[27]=(...o)=>a.previewImage2&&a.previewImage2(...o)),ref:"photo2",id:"file1-1",type:"file",class:"w-full"},null,544),t("div",mo,d(r.errors.last_image),1)]),t("div",_o,[fo,t("button",{type:"button",onClick:e[28]||(e[28]=o=>c.open=!1),class:"inline-block items-center px-8 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const Po=N(J,[["render",ho]]);export{Po as default};
