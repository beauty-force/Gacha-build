import{u as m,q as v,o as r,c as a,d as t,e as s,t as i,D as c,F as b,f as w,h as y}from"./app.bacb2fce.js";import{i as k}from"./index.e0e1a5f3.js";const C=t("h2",{class:"text-lg font-medium"},"\u53CB\u4EBA\u62DB\u5F85",-1),S={class:"text-sm mt-2 leading-7"},$=t("br",null,null,-1),j=t("br",null,null,-1),I=t("br",null,null,-1),A={class:"mt-2 border-4 border-dotted flex flex-col items-center justify-center rounded-lg py-2 gap-2 bg-neutral-50"},L=t("p",{class:"text-sm"},"\u3042\u306A\u305F\u306E\u62DB\u5F85\u30B3\u30FC\u30C9",-1),N={class:"flex flex-wrap justify-center gap-2 py-6"},P=["href"],B=t("img",{src:"/images/twitter-x.svg",class:"h-4"},null,-1),F=t("span",null,"(twitter)\u3067\u30B7\u30A7\u30A2\u3059\u308B",-1),V=[B,F],D=["href"],E=t("img",{src:"/images/line.png",class:"h-5"},null,-1),R=t("span",null,"LINE\u3067\u9001\u308B",-1),T=[E,R],U={class:"space-y-1"},q={class:"flex justify-between items-center"},M={class:"px-2 text-sm"},z={class:"flex flex-wrap items-center px-2"},G={class:"flex-1"},Q={__name:"InviteFriend",props:{invitations:Array,invite_url:String,invite_bonus:String,invited_bonus:String,line_invite_text:String,twitter_invite_text:String},setup(e){const n=e,u=m().props.value.auth.user,o=v({status:!1}),h=()=>{o.value.status=!o.value.status},d=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),p=encodeURIComponent(n.line_invite_text),_=encodeURIComponent(n.twitter_invite_text),x=d?`twitter://post?text=${_}&url=${n.invite_url}`:`https://twitter.com/intent/tweet?text=${_}&url=${n.invite_url}`,f=d?`line://msg/text/${p}`:`https://social-plugins.line.me/lineit/share?url=${n.invite_url}`,g=()=>{navigator.clipboard.writeText(u.invite_code).then(()=>{k("\u62DB\u5F85\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F\u3002",{autoClose:2e3})})};return(H,J)=>(r(),a("section",null,[t("header",null,[C,t("p",S,[s(" \u53CB\u9054\u3092\u7D39\u4ECB\u3057\u3066\u30DD\u30A4\u30F3\u30C8\u3092\u3082\u3089\u3044\u307E\u3057\u3087\u3046\u3002"),$,s(" \u30E6\u30FC\u30B6\u30FC\u767B\u9332\u6642\u306B\u3042\u306A\u305F\u306E\u62DB\u5F85\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3059\u308B\u3060\u3051\u3067\u3059\u3002"),j,s(" \u53CB\u9054\u3092\u7D39\u4ECB\u3059\u308B\u3068"),t("strong",null,i(e.invite_bonus),1),s("\u30DD\u30A4\u30F3\u30C8\u30D7\u30EC\u30BC\u30F3\u30C8\uFF01"),I,s(" \u53CB\u9054\u3082"),t("strong",null,i(e.invited_bonus),1),s("\u30DD\u30A4\u30F3\u30C8\u30D7\u30EC\u30BC\u30F3\u30C8\uFF01 ")])]),t("div",A,[L,t("span",{class:"text-4xl font-bold font-[mplus2] px-2 leading-8 cursor-pointer",onClick:g},i(c(u).invite_code),1)]),t("div",N,[t("a",{href:c(x),target:"_blank",class:"text-nowrap flex-1 flex gap-1 rounded-full border px-12 py-2 justify-center items-center font-semibold hover:bg-neutral-100"},V,8,P),t("a",{href:c(f),target:"_blank",class:"text-nowrap flex-1 flex gap-1 rounded-full border px-12 py-2 justify-center items-center font-semibold hover:bg-neutral-100"},T,8,D)]),t("div",U,[t("p",q,[t("span",M,i(e.invitations.length?e.invitations.length+"\u4EBA\u306E\u53CB\u9054\u7D39\u4ECB":""),1),t("button",{onClick:h,class:"px-3 py-1 rounded-full border text-sm"},"\u53CB\u9054\u30EA\u30B9\u30C8\u8868\u793A")]),o.value.status?(r(!0),a(b,{key:0},w(e.invitations,l=>(r(),a("div",z,[t("span",G,i(l.email+" ("+l.first_name+l.last_name+")"),1)]))),256)):y("",!0)])]))}};export{Q as default};
