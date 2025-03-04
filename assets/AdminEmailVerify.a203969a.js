import{A as c}from"./UserLayout.2f9190a5.js";import{_ as p,a as f}from"./TextInput.81fa5273.js";import{_ as u}from"./InputLabel.f6e2facd.js";import{H as _,L as b,G as x,r,o as h,i as y,w as g,b as i,d as e,I as w,J as v,K as k,n as I}from"./app.03e3decc.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.0ce548fa.js";import"./index.7f6dc427.js";const A={components:{Head:_,AppLayout:c,InputError:p,InputLabel:u,TextInput:f,Link:b},data:()=>({is_processing:!1,data:{}}),props:{email:String,errors:Object},methods:{submit(){this.form.post(route("admin.email.verify"),{onFinish:()=>{}})}},setup(n){return{form:x({code:"",email:n.email})}},mounted(){}},E={class:"pt-6 px-4 mx-4"},H=e("h2",{class:"underline underline-offset-8 mb-10 text-center text-lg font-bold"},"\xA0\xA0\xA0\u8A8D\u8A3C\u30B3\u30FC\u30C9\u5165\u529B\xA0\xA0",-1),V={class:"mb-8"},B=e("label",{for:"code",class:"block text-base pl-2 mb-2"},"\u767B\u9332\u3057\u305F\u30E1\u30FC\u30EB\u306B\u9001\u4FE1\u3055\u308C\u305F6\u884C\u306E\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",-1),C={class:"mb-8 text-center border border-yellow-600 rounded-full p-0.5 w-fit mx-auto"},F=["disabled"];function M(n,o,N,t,S,a){const l=r("Head"),m=r("InputError"),d=r("AppLayout");return h(),y(d,null,{default:g(()=>[i(l,{title:"\u7BA1\u7406\u8005\u78BA\u8A8D"}),e("div",E,[e("form",{onSubmit:o[1]||(o[1]=w((...s)=>a.submit&&a.submit(...s),["prevent"]))},[H,e("div",null,[e("div",V,[B,v(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.form.code=s),id:"code",type:"tel",class:"w-full text-neutral-700 border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm",placeholder:"\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[k,t.form.code]]),i(m,{class:"mt-2",message:t.form.errors.code},null,8,["message"])]),e("div",C,[e("button",{type:"submit",class:I([{"opacity-50":t.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:t.form.processing}," \u6B21\u3078 ",10,F)])])],32)])]),_:1})}const O=L(A,[["render",M]]);export{O as default};
