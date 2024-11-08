import{y as V,k as O,L as z,u as k,E as j,r as S,o as a,c as n,d as e,n as y,b as v,w as p,g as l,t as c,e as h,F as B,Z as F}from"./app.f08f81c3.js";import{G}from"./GachaButtons.1cca58a8.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as H}from"./PlayIcon.8f5b7f4a.js";/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const _=1e3,m=60*_,f=60*m,E=24*f,C="abort",I="end",N="progress",T="start",L="visibilitychange";var q=V({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:s=>s>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:s=>s>=0},transform:{type:Function,default:s=>s}},emits:[C,I,N,T],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/E)},hours(){return Math.floor(this.totalMilliseconds%E/f)},minutes(){return Math.floor(this.totalMilliseconds%f/m)},seconds(){return Math.floor(this.totalMilliseconds%m/_)},milliseconds(){return Math.floor(this.totalMilliseconds%_)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/f)},totalMinutes(){return Math.floor(this.totalMilliseconds/m)},totalSeconds(){return Math.floor(this.totalMilliseconds/_)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(L,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(L,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(T),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const s=Math.min(this.totalMilliseconds,this.interval);if(s>0){let i,t;const u=r=>{i||(i=r),t||(t=r);const o=r-i;o>=s||o+(r-t)/2>=s?this.progress():this.requestId=requestAnimationFrame(u),t=r};this.requestId=requestAnimationFrame(u)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){!this.counting||(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(N,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){!this.counting||(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(C))},end(){!this.counting||(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(I))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return O(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const R={components:{Link:z,PlayIcon:H,VueCountdown:q,GachaButtons:G},props:{gacha:Object,url_edit:String,openCopyModal:Function},data(){return{category_share:k().props.value.category_share,url_card:"",url_10gacha:"",url_1gacha:"",str_gacha10:"",point_10gacha:0,countdown:!0,user:k().props.value.auth.user}},computed:{progress_value(){return Math.round(this.gacha.count_rest*100/this.gacha.count_card)+"%"},progress_background_width(){return this.gacha.count_rest==0?"100%":Math.round(this.gacha.count_card*100/this.gacha.count_rest)+"%"}},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},getImageClass(s){return"url('"+s+"')"},clickCard(){this.url_edit||(window.location.href=this.url_card)},destroyGacha(s){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&j.Inertia.delete(route("admin.gacha.destroy",{id:s}))},transform(s){return Object.entries(s).forEach(([i,t])=>{const u=t<10&&i!="days"?`0${t}`:t;t<2&&i.replace(/s$/,""),s[i]=`${u}`}),s}},mounted(){console.log(this.gacha),this.gacha.count_rest<10?(this.str_gacha10="\u5168\u3066",this.point_10gacha=this.gacha.count_rest*this.gacha.point):(this.str_gacha10="10\u9023",this.point_10gacha=10*this.gacha.point),this.url_edit||(this.url_card=route("user.gacha",this.gacha.id)+this.category_share.cat_route_appendix)}},U={class:"bg-neutral-700 h-full flex flex-col rounded-md overflow-hidden relative"},P=["data-src"],Y={key:0,class:"absolute inset-0 flex items-center"},Z={class:"w-full bg-neutral-900/90 hover:bg-neutral-900 py-1"},J={class:"py-2 border-y"},K={key:0},Q={key:1},W={class:"text-center"},X={class:"bg-gradient-to-r from-sky-400 to-purple-400 via-green-400 bg-clip-text text-transparent font-black text-3xl font-[mplus2]"},$={key:0,class:"mr-3"},tt={key:0,class:"absolute z-10 top-0 left-0 items-center px-2 py-1 bg-green-500 border border-transparent rounded-sm font-semibold text-sm text-white tracking-widest"},et={key:1,class:"absolute z-10 top-0 left-0 items-center px-2 py-1 bg-neutral-500 border border-transparent rounded-sm font-semibold text-sm text-white tracking-widest"},st={class:"absolute z-10 top-0 right-0 flex flex-col gap-1"},it={key:1,class:"absolute w-full h-full z-10 flex flex-col justify-center items-center gap-8"},at={class:"text-white text-5xl w-full bg-neutral-900/80 text-center font-black pb-2 font-[mplus2]"},nt={key:2,class:"absolute bottom-0 w-full h-full bg-opacity-70 z-10 bg-neutral-900 flex flex-col justify-center items-center gap-4"},ot=e("div",{class:"text-white text-xl w-full text-center font-black"},"\u30E9\u30F3\u30AF\u5236\u9650",-1),rt=e("div",{class:"text-white text-sm w-full text-center font-black"},null,-1),lt=[ot,rt],ct={class:"w-full flex flex-col justify-center flex-1"},dt={class:"text-white font-[mplus2]"},ut={class:"flex justify-between items-center pt-2 w-full"},ht={class:"flex items-end gap-1.5 w-[45%] px-3"},_t=e("img",{src:"/images/icon_cash.png",class:"h-5 mb-1"},null,-1),mt={class:"text-white text-xl font-bold"},ft=e("span",{class:"text-gray-300 text-xs pb-0.5 text-nowrap"},"/1\u56DE",-1),gt={class:"flex-1 flex flex-col items-end gap-1.5 pr-2"},xt={key:0,class:"text-white text-sm pr-1"},bt={key:1,class:"flex items-center"},yt=e("span",{class:"font-semibold pr-2"},"- / -",-1),vt=[yt],pt={class:"w-full mb-2.5"},wt={class:"w-full h-2.5 rounded-full overflow-hidden flex bg-neutral-800"},Mt={key:3,class:"flex items-center"},kt={key:0},St={key:1},Et={class:"text-center"},Ct={class:"bg-rose-400 bg-clip-text text-transparent font-extrabold text-xl font-[mplus2]"},It={key:0,class:"mr-3"};function Nt(s,i,t,u,r,o){var M;const w=S("vue-countdown"),D=S("Link");return a(),n("div",{class:y(["cursor-pointer w-full overflow-hidden border rounded-md shadow-[0_4px_8px_0px_rgba(0,0,0,0.3)] p-1 bg-sky-100",{"cursor-pointer hover:shadow-[0_4px_8px_3px_rgba(0,0,0,0.3)]":!t.url_edit&&t.gacha.count_rest,"grayscale-[80%]":!t.url_edit&&t.gacha.count_rest==0}])},[e("div",U,[e("div",{onClick:i[1]||(i[1]=d=>o.clickCard()),class:y(["relative",{"grayscale-[80%]":t.url_edit&&t.gacha.count_rest==0}])},[e("img",{"data-src":t.gacha.thumbnail,class:"lazy"},null,8,P),r.countdown&&t.gacha.remaining>0&&t.gacha.timeStatus==0?(a(),n("div",Y,[e("div",Z,[e("div",J,[v(w,{time:t.gacha.remaining*1e3,transform:o.transform,class:"text-gray-100 flex flex-wrap items-center justify-around px-2 py-0.5 w-full text-xl font-semibold",onEnd:i[0]||(i[0]=d=>r.countdown=!1)},{default:p(({days:d,hours:g,minutes:x,seconds:b})=>[t.gacha.timeStatus==0?(a(),n("span",K,"\u767A\u58F2\u307E\u3067")):l("",!0),t.gacha.timeStatus==1?(a(),n("span",Q,"\u7D42\u4E86\u307E\u3067")):l("",!0),e("span",W,[e("span",X,[d>0?(a(),n("span",$,c(d)+"\u65E5",1)):l("",!0),h(c(g)+":"+c(x)+":"+c(b),1)])])]),_:1},8,["time","transform"])])])])):l("",!0)],2),t.url_edit?(a(),n(B,{key:0},[t.gacha.status==1?(a(),n("div",tt," \u516C\u958B ")):(a(),n("div",et," \u975E\u516C\u958B ")),e("div",st,[v(D,{href:t.url_edit,class:"items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-sm font-semibold text-sm text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"},{default:p(()=>[h(" \u7DE8\u96C6\u3059\u308B ")]),_:1},8,["href"]),e("button",{onClick:i[2]||(i[2]=d=>o.destroyGacha(t.gacha.id)),class:"px-4 py-2 bg-red-500 hover:bg-red-600 text-sm text-neutral-50"}," \u524A\u9664 ")])],64)):l("",!0),t.gacha.count_rest==0&&!t.url_edit?(a(),n("div",it,[e("div",at,[h(" SOLD OUT "),e("button",{class:"text-base font-normal text-white border border-neutral-300 w-fit rounded-full min-w-[40%] px-5 py-1 hover:bg-white hover:text-black",onClick:i[3]||(i[3]=d=>o.clickCard())},"\u6392\u51FA\u5C65\u6B74")])])):l("",!0),t.gacha.rank_limit>((M=r.user)==null?void 0:M.current_rank)&&!t.url_edit?(a(),n("div",nt,lt)):l("",!0),e("div",ct,[e("div",dt,[e("div",ut,[e("div",ht,[_t,e("span",mt,c(o.format_number(t.gacha.point)),1),ft]),e("div",gt,[t.gacha.count_card>0?(a(),n("span",xt," \u306E\u3053\u308A "+c(o.format_number(t.gacha.count_rest))+" / "+c(o.format_number(t.gacha.count_card)),1)):(a(),n("div",bt,vt)),e("div",pt,[e("div",wt,[e("div",{class:y(["h-full rounded-full border-neutral-800",{"bg-gradient-to-r from-[#dd422d] via-[#fae94e] to-[#02ec0e]":t.gacha.count_card>0,"bg-[#02ec0e] w-full":t.gacha.count_card==0}]),style:F(t.gacha.count_card>0?{width:o.progress_value,backgroundSize:o.progress_background_width}:{})},null,6)])])])])])]),r.countdown&&t.gacha.remaining>0&&t.gacha.timeStatus==1&&t.gacha.count_rest>0?(a(),n("div",Mt,[v(w,{time:t.gacha.remaining*1e3,transform:o.transform,class:"text-gray-100 flex items-center justify-around px-2 pb-1 w-full font-semibold",onEnd:i[4]||(i[4]=d=>r.countdown=!1)},{default:p(({days:d,hours:g,minutes:x,seconds:b})=>[t.gacha.timeStatus==0?(a(),n("span",kt,"\u767A\u58F2\u307E\u3067")):l("",!0),t.gacha.timeStatus==1?(a(),n("span",St,"\u7D42\u4E86\u307E\u3067")):l("",!0),e("span",Et,[e("span",Ct,[d>0?(a(),n("span",It,c(d)+"\u65E5",1)):l("",!0),h(c(g)+":"+c(x)+":"+c(b),1)])])]),_:1},8,["time","transform"])])):l("",!0)])],2)}const Ot=A(R,[["render",Nt]]);export{Ot as G};