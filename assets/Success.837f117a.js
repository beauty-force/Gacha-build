import{H as c,L as p,u as d,r as e,o as l,c as m,b as o,w as s,F as u,d as t,e as _}from"./app.84fa7d66.js";import{A as h}from"./UserLayout.55f2707c.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./Category.6a8a666e.js";import"./toastify.7aab60f1.js";const f={components:{Head:c,UserLayout:h,Link:p},props:{errors:Object,auth:Object,category_share:Object,points:Object},data(){return{point_link:route("user.point")}},methods:{redirection(){window.location.href=this.point_link}},mounted(){d().props.value.auth.user.type==1&&(this.point_link=route("test.user.point")),setTimeout(this.redirection,5e3)}},b={class:"pt-6 md:px-6 px-4 text-neutral-700"},k=t("h1",{class:"mb-2 text-base md:text-lg font-bold text-center"},"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165\u5B8C\u4E86",-1),L=t("hr",{class:"mb-8"},null,-1),g=t("div",{class:"mb-4 text-sm md:text-base text-center"}," \u30DD\u30A4\u30F3\u30C8\u8CFC\u5165\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002 ",-1),y={class:"text-center"};function v(w,j,H,O,n,B){const r=e("Head"),a=e("Link"),i=e("UserLayout");return l(),m(u,null,[o(r,{title:"\u30DD\u30A4\u30F3\u30C8\u8CFC\u5165\u5B8C\u4E86"}),o(i,null,{default:s(()=>[t("div",b,[k,L,g,t("div",y,[o(a,{href:n.point_link,class:"inline-flex items-center px-16 py-2.5 rounded-md font-semibold text-sm text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150"},{default:s(()=>[_(" \u8CFC\u5165\u30DA\u30FC\u30B8\u3078 ")]),_:1},8,["href"])])])]),_:1})],64)}const C=x(f,[["render",v]]);export{C as default};
