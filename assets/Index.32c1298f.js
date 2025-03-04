import{H as M,E as H,G as j,r as f,o as c,c as u,b as m,w as _,F as x,d as e,f as S,t as l,Z as U,I as W,J as b,K as p,h as g,n as V,e as a}from"./app.03e3decc.js";import{A as D}from"./Admin.7586ef1d.js";import{_ as I}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as P,e as O,U as R,o as q,f as N}from"./Category.0ce548fa.js";const z={components:{Head:M,AppLayout:D,Dialog:P,DialogPanel:O,DialogTitle:R,TransitionChild:q,TransitionRoot:N},props:{errors:Object,ranks:Object},data(){return{url1:null,url2:null,open:!1}},methods:{destroy_rank(s){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&H.Inertia.delete(route("admin.rank.destroy",{id:s}))},modalOpen(s){s?(this.form.id=s.id,this.form.rank=s.rank,this.form.title=s.title,this.form.limit=s.limit,this.form.bonus=s.bonus,this.form.pt_rate=s.pt_rate,this.form.dp_rate=s.dp_rate,this.form.image="",this.form.badge="",this.url1=s.image,this.url2=s.badge):(this.form.id=0,this.form.rank="",this.form.title="",this.form.limit="",this.form.bonus="",this.form.pt_rate=0,this.form.dp_rate=1,this.form.image="",this.form.badge="",this.url1="",this.url2=""),this.open=!0},closeModal(){this.open=!1},submit(){this.$refs.photo1.files[0]&&(this.form.image=this.$refs.photo1.files[0]),this.$refs.photo2.files[0]&&(this.form.badge=this.$refs.photo2.files[0]),this.form.post(route("admin.rank.store"),{preserveScroll:!0,onFinish:()=>{}})},previewImage1(s){const o=s.target.files[0];this.url1=URL.createObjectURL(o)},previewImage2(s){const o=s.target.files[0];this.url2=URL.createObjectURL(o)},pt_rate_string(s){return s.rank==1?'<span class="text-[1.5em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${s.pt_rate}%\u4ED8\u4E0E<br/>(\u8CFC\u5165\u6642PT\u306E)`},format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},bonus_pt_string(s){return s.rank==1?'<span class="text-[1.5em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${this.format_number(s.bonus)}PT`}},setup(s){return{form:j({id:"",rank:"",title:"",limit:"",bonus:"",pt_rate:"",dp_rate:"",image:"",badge:""})}},mounted(){}},A={class:"pt-4 px-5 py-2"},F=e("h1",{class:"mb-2 text-lg font-bold"},"\u30E9\u30F3\u30AF\u7279\u5178\u8A2D\u5B9A",-1),B=e("hr",{class:"mb-2"},null,-1),E={class:"flex flex-wrap border-neutral-200 items-center gap-[0.8em]"},G={class:"w-[1em]"},J=["src"],K={class:"flex-1 flex bg-neutral-200 rounded-lg justify-center relative"},Z=["src"],Q={class:"absolute top-0 bottom-0 left-0 right-0 flex items-center"},X={class:"text-center text-[0.9em] text-black font-black w-[30%] h-full flex flex-col items-center justify-center relative"},Y=["innerHTML"],$=["innerHTML"],ee=e("div",{class:"h-full w-[0.3em] bg-white"},null,-1),te={class:"text-center text-[0.8em] font-bold text-white w-[40%] h-full flex items-center justify-center"},se={class:"text-center flex gap-[0.4em] items-end h-full"},oe={class:"relative flex justify-center text-[1em]"},re={class:"absolute leading-[1.2em]"},ne=e("div",{class:"h-full w-[0.3em] bg-white"},null,-1),le={class:"w-[30%] flex divide-x-[0.3em] divide-white h-full relative"},ie={class:"text-center text-[0.9em] text-black font-black w-[40%] h-full flex items-center justify-center"},ae=["innerHTML"],de=["innerHTML"],ce={class:"text-center text-[0.9em] text-black font-black w-[60%] h-full flex items-center justify-center relative"},ue=["innerHTML"],me=["innerHTML"],fe={class:"flex items-center justify-between"},_e={key:0,class:"text-sm"},be={key:1},pe={class:"my-2 text-center"},he=["onClick"],xe=["onClick"],ge={class:"text-center mb-6"},ve=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),ye={class:"fixed inset-0 z-20 overflow-y-auto"},we={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},ke={class:"mb-4"},Te=e("label",{for:"rank",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u30E9\u30F3\u30AF\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),Ce={class:"text-red-500 text-sm mt-1"},Le={class:"mb-4"},Me=e("label",{for:"title",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u30E9\u30F3\u30AF\u540D"),e("span",{class:"text-red-500"},"*")],-1),He={class:"text-red-500 text-sm mt-1"},je={class:"mb-4"},Se=e("label",{for:"limit",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u6D88\u8CBB\u57FA\u6E96\u91CF\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),Ue={class:"text-red-500 text-sm mt-1"},We={class:"mb-4"},Ve=e("label",{for:"bonus",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u30DC\u30FC\u30CA\u30B9PT\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),e("span",{class:"text-red-500"},"*")],-1),De={class:"text-red-500 text-sm mt-1"},Ie={class:"mb-4"},Pe=e("label",{for:"pt_rate",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u8CFC\u5165\u6642PT\u4ED8\u4E0E\u7279\u5178 (%)"),e("span",{class:"text-red-500"},"*")],-1),Oe={class:"text-red-500 text-sm mt-1"},Re={class:"mb-4"},qe=e("label",{for:"dp_rate",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("EP\u4ED8\u4E0E\u7387 (%)"),e("span",{class:"text-red-500"},"*")],-1),Ne={class:"text-red-500 text-sm mt-1"},ze={class:"mb-4"},Ae=e("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u30E9\u30F3\u30AF\u30D0\u30FC\u753B\u50CF "),e("span",{class:"text-red-500"},"*")],-1),Fe={class:"text-center w-full"},Be=["src"],Ee={class:"text-red-500 text-sm mt-1"},Ge={class:"mb-4"},Je=e("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[a("\u30E9\u30F3\u30AF\u30AB\u30FC\u30C9\u753B\u50CF "),e("span",{class:"text-red-500"},"*")],-1),Ke={class:"text-center w-full"},Ze=["src"],Qe={class:"text-red-500 text-sm mt-1"},Xe={class:"mb-6 text-center"},Ye=["disabled"];function $e(s,o,i,r,d,n){const v=f("Head"),h=f("TransitionChild"),y=f("DialogPanel"),w=f("Dialog"),k=f("TransitionRoot"),T=f("AppLayout");return c(),u(x,null,[m(v,{title:"\u30E9\u30F3\u30AF\u7279\u5178\u8A2D\u5B9A"}),m(T,{closeModal:n.closeModal},{default:_(()=>[e("div",A,[F,B,(c(!0),u(x,null,S(i.ranks,(t,C)=>(c(),u("div",{class:"my-2 text-[0.6em] md:text-[1em] sm:text-[0.8em]",key:C},[e("div",E,[e("div",G,l(t.rank),1),e("img",{src:t.badge,class:"h-[8.5vw] max-h-[80px] inline-block object-contain"},null,8,J),e("div",K,[e("img",{src:t.image,class:"h-[8.5vw] max-h-[80px]"},null,8,Z),e("div",Q,[e("div",X,[e("span",{class:"leading-[1.4em]",innerHTML:n.pt_rate_string(t),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,Y),e("span",{class:"absolute leading-[1.4em]",innerHTML:n.pt_rate_string(t)},null,8,$)]),ee,e("div",te,[e("div",se,[e("div",oe,[e("span",{class:"leading-[1.2em]",style:U({WebkitTextStrokeColor:"black",WebkitTextStrokeWidth:"2.5px"})},"( "+l(t.title)+" )",5),e("span",re,"( "+l(t.title)+" )",1)])])]),ne,e("div",le,[e("div",ie,[e("span",{innerHTML:t.dp_rate>0?t.dp_rate+"%":"<span class='text-[1.2em]'>???</span>",style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,ae),e("span",{class:"absolute",innerHTML:t.dp_rate>0?t.dp_rate+"%":"<span class='text-[1.2em]'>???</span>"},null,8,de)]),e("div",ce,[e("span",{class:"leading-[1.4em]",innerHTML:n.bonus_pt_string(t),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,ue),e("span",{class:"absolute leading-[1.4em]",innerHTML:n.bonus_pt_string(t)},null,8,me)])])])])]),e("div",fe,[t.limit>0?(c(),u("span",_e,"\u6D88\u8CBB\u57FA\u6E96\u91CF: "+l(n.format_number(t.limit))+" PT",1)):(c(),u("span",be)),e("div",pe,[e("button",{type:"button",onClick:L=>n.modalOpen(t),class:"inline-block items-center px-6 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"}," \u7DE8\u96C6 ",8,he),e("button",{type:"button",onClick:L=>n.destroy_rank(t.id),class:"inline-block items-center px-6 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ",8,xe)])])]))),128)),e("div",ge,[e("button",{type:"button",onClick:o[0]||(o[0]=t=>n.modalOpen(0)),class:"inline-block items-center px-10 py-2.5 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150 mr-2"}," \u8FFD\u52A0 ")])]),e("template",null,[m(k,{as:"template",show:d.open},{default:_(()=>[m(w,{as:"div",class:"relative z-20",onClose:o[11]||(o[11]=t=>d.open=!1)},{default:_(()=>[m(h,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:_(()=>[ve]),_:1}),e("div",ye,[e("div",we,[m(h,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:_(()=>[m(y,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:_(()=>[e("form",{onSubmit:o[10]||(o[10]=W(t=>n.submit(),["prevent"]))},[e("div",ke,[Te,b(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>r.form.rank=t),id:"rank",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.rank]]),e("div",Ce,l(i.errors.rank),1)]),e("div",Le,[Me,b(e("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>r.form.title=t),id:"title",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.title]]),e("div",He,l(i.errors.title),1)]),e("div",je,[Se,b(e("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>r.form.limit=t),id:"limit",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.limit]]),e("div",Ue,l(i.errors.limit),1)]),e("div",We,[Ve,b(e("input",{"onUpdate:modelValue":o[4]||(o[4]=t=>r.form.bonus=t),id:"bonus",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.bonus]]),e("div",De,l(i.errors.bonus),1)]),e("div",Ie,[Pe,b(e("input",{"onUpdate:modelValue":o[5]||(o[5]=t=>r.form.pt_rate=t),id:"pt_rate",type:"number",min:"0",step:"0.01",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.pt_rate]]),e("div",Oe,l(i.errors.pt_rate),1)]),e("div",Re,[qe,b(e("input",{"onUpdate:modelValue":o[6]||(o[6]=t=>r.form.dp_rate=t),id:"dp_rate",type:"number",min:"0",step:"0.01",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",required:""},null,512),[[p,r.form.dp_rate]]),e("div",Ne,l(i.errors.dp_rate),1)]),e("div",ze,[Ae,e("div",Fe,[d.url1?(c(),u("img",{key:0,src:d.url1,class:"inline-block mt-4 h-24"},null,8,Be)):g("",!0)]),e("input",{onChange:o[7]||(o[7]=(...t)=>n.previewImage1&&n.previewImage1(...t)),ref:"photo1",id:"file1-1",type:"file",class:"w-full"},null,544),e("div",Ee,l(i.errors.image),1)]),e("div",Ge,[Je,e("div",Ke,[d.url2?(c(),u("img",{key:0,src:d.url2,class:"inline-block mt-4 h-24"},null,8,Ze)):g("",!0)]),e("input",{onChange:o[8]||(o[8]=(...t)=>n.previewImage2&&n.previewImage2(...t)),ref:"photo2",id:"file1-1",type:"file",class:"w-full"},null,544),e("div",Qe,l(i.errors.badge),1)]),e("div",Xe,[e("button",{type:"submit",class:V([{"opacity-25":r.form.processing},"inline-block items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"]),disabled:r.form.processing}," \u4FDD\u5B58 ",10,Ye),e("button",{type:"button",onClick:o[9]||(o[9]=t=>d.open=!1),class:"inline-block items-center px-8 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const rt=I(z,[["render",$e]]);export{rt as default};
