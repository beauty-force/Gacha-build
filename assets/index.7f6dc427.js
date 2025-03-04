import{C as F,z as W,b as u,x as at,a4 as g,S as b,a5 as ut,a6 as Tt,y as f,s as dt,B as ct,F as _t,q as $,l as D,v as z,k as At}from"./app.03e3decc.js";const H={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},M={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},m={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ht={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},pt={dangerouslyHTMLString:!1,multiple:!0,position:H.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},It={rtl:!1,newestOnTop:!1,toastClassName:""},ft={...pt,...It};({...pt,type:m.DEFAULT});var s=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(s||{}),Q=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(Q||{});const Nt={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},Lt={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},Ot={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},bt={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},rt="Toastify--animate Toastify__none-enter";function mt(t,e=!1){var n;let o=Nt;if(!t||typeof t=="string")switch(t){case"flip":o=bt;break;case"zoom":o=Ot;break;case"slide":o=Lt;break}else o=t;if(e)o.enter=rt;else if(o.enter===rt){const i=(n=o.exit.split("__")[1])==null?void 0:n.split("-")[0];o.enter=`Toastify--animate Toastify__${i}-enter`}return o}function Pt(t){return t.containerId||String(t.position)}const X="will-unmount";function qt(t=H.TOP_RIGHT){return!!document.querySelector(`.${s.CSS_NAMESPACE}__toast-container--${t}`)}function $t(t=H.TOP_RIGHT){return`${s.CSS_NAMESPACE}__toast-container--${t}`}function Bt(t,e,n=!1){const o=[`${s.CSS_NAMESPACE}__toast-container`,`${s.CSS_NAMESPACE}__toast-container--${t}`,n?`${s.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return B(e)?e({position:t,rtl:n,defaultClassName:o}):`${o} ${e||""}`}function Mt(t){var e;const{position:n,containerClassName:o,rtl:i=!1,style:a={}}=t,c=s.CSS_NAMESPACE,S=$t(n),l=document.querySelector(`.${c}`),C=document.querySelector(`.${S}`),y=!!C&&!((e=C.className)!=null&&e.includes(X)),A=l||document.createElement("div"),p=document.createElement("div");p.className=Bt(n,o,i),p.dataset.testid=`${s.CSS_NAMESPACE}__toast-container--${n}`,p.id=Pt(t);for(const T in a)if(Object.prototype.hasOwnProperty.call(a,T)){const h=a[T];p.style[T]=h}return l||(A.className=s.CSS_NAMESPACE,document.body.appendChild(A)),y||A.appendChild(p),p}function tt(t){var e,n,o;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),a=document.getElementById(i);a&&a.removeEventListener("animationend",tt,!1);try{x[i].unmount(),(o=document.getElementById(i))==null||o.remove(),delete x[i],delete d[i]}catch{}}const x=F({});function wt(t,e){const n=document.getElementById(String(e));n&&(x[n.id]=t)}function et(t,e=!0){const n=String(t);if(!x[n])return;const o=document.getElementById(n);o&&o.classList.add(X),e?(Rt(t),o&&o.addEventListener("animationend",tt,!1)):tt(n),_.items=_.items.filter(i=>i.containerId!==t)}function Ft(t){for(const e in x)et(e,t);_.items=[]}function vt(t,e){const n=document.getElementById(t.toastId);if(n){let o=t;o={...o,...mt(o.transition)};const i=o.appendPosition?`${o.exit}--${o.position}`:o.exit;n.className+=` ${i}`,e&&e(n)}}function Rt(t){for(const e in d)if(e===t)for(const n of d[e]||[])vt(n)}function Ut(t){const e=w().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function st(t){return document.getElementById(t)}function Dt(t){const e=st(t.containerId);return e&&e.classList.contains(X)}function lt(t){var e;const n=ut(t.content)?g(t.content.props):null;return n!=null?n:g((e=t.data)!=null?e:{})}function kt(t){return t?_.items.filter(e=>e.containerId===t).length>0:_.items.length>0}function xt(){if(_.items.length>0){const t=_.items.shift();j(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const d=F({}),_=F({items:[]});function w(){const t=g(d);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function Ht(t){return w().find(e=>e.toastId===t)}function j(t,e={}){if(Dt(e)){const n=st(e.containerId);n&&n.addEventListener("animationend",nt.bind(null,t,e),!1)}else nt(t,e)}function nt(t,e={}){const n=st(e.containerId);n&&n.removeEventListener("animationend",nt.bind(null,t,e),!1);const o=d[e.containerId]||[],i=o.length>0;if(!i&&!qt(e.position)){const a=Mt(e),c=Tt(re,e);c.mount(a),wt(c,a.id)}i&&!e.updateId&&(e.position=o[0].position),at(()=>{e.updateId?v.update(e):v.add(t,e)})}const v={add(t,e){const{containerId:n=""}=e;n&&(d[n]=d[n]||[],d[n].find(o=>o.toastId===e.toastId)||setTimeout(()=>{var o,i;e.newestOnTop?(o=d[n])==null||o.unshift(e):(i=d[n])==null||i.push(e),e.onOpen&&e.onOpen(lt(e))},e.delay||0))},remove(t){if(t){const e=Ut(t);if(e){const n=d[e];let o=n.find(i=>i.toastId===t);d[e]=n.filter(i=>i.toastId!==t),!d[e].length&&!kt(e)&&et(e,!1),xt(),at(()=>{o!=null&&o.onClose&&(o.onClose(lt(o)),o=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){d[e]=d[e]||[];const n=d[e].find(a=>a.toastId===t.toastId),o=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!o,updateId:void 0};v.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{r(i.content,i)},t.delay||0)}},clear(t,e=!0){t?et(t,e):Ft(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,o=document.getElementById(n);o&&(o.removeEventListener("animationend",v.dismissCallback,!1),setTimeout(()=>{v.remove(n)}))},dismiss(t){if(t){const e=w();for(const n of e)if(n.toastId===t){vt(n,o=>{o.addEventListener("animationend",v.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=w();for(const n of e)if(n.toastId===t){const o=document.getElementById(t);o&&(o.remove(),o.removeEventListener("animationend",v.dismissCallback,!1),v.remove(t));break}}}},yt=F({}),K=F({});function Et(){return Math.random().toString(36).substring(2,9)}function zt(t){return typeof t=="number"&&!isNaN(t)}function ot(t){return typeof t=="string"}function B(t){return typeof t=="function"}function Y(...t){return b(...t)}function G(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function jt(t={}){yt[`${s.CSS_NAMESPACE}-default-options`]=t}function Gt(){return yt[`${s.CSS_NAMESPACE}-default-options`]||ft}function Vt(){return document.documentElement.classList.contains("dark")?"dark":"light"}var V=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(V||{});const gt={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:H.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:M.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:m.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null}},Kt={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:m.DEFAULT},theme:{type:String,required:!1,default:M.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},Wt=W({name:"ProgressBar",props:Kt,setup(t,{attrs:e}){const n=$(),o=f(()=>t.hide?"true":"false"),i=f(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),a=f(()=>[`${s.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${s.CSS_NAMESPACE}__progress-bar--controlled`:`${s.CSS_NAMESPACE}__progress-bar--animated`,`${s.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${s.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),c=f(()=>`${a.value} ${(e==null?void 0:e.class)||""}`),S=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),S())},C=f(()=>t.controlledProgress?null:l),y=f(()=>t.controlledProgress?l:null);return z(()=>{n.value&&(S(),n.value.onanimationend=C.value,n.value.ontransitionend=y.value)}),()=>u("div",{ref:n,role:"progressbar","aria-hidden":o.value,"aria-label":"notification timer",class:c.value,style:i.value},null)}}),Xt=W({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:M.AUTO},type:{type:String,required:!1,default:M.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>u("button",{class:`${s.CSS_NAMESPACE}__close-button ${s.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[u("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[u("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Z=({theme:t,type:e,path:n,...o})=>u("svg",b({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},o),[u("path",{d:n},null)]);function Yt(t){return u(Z,b(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function Zt(t){return u(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function Jt(t){return u(Z,b(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function Qt(t){return u(Z,b(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function te(){return u("div",{class:`${s.CSS_NAMESPACE}__spinner`},null)}const it={info:Zt,warning:Yt,success:Jt,error:Qt,spinner:te},ee=t=>t in it;function ne({theme:t,type:e,isLoading:n,icon:o}){let i;const a={theme:t,type:e};return n?i=it.spinner():o===!1?i=void 0:G(o)?i=g(o):B(o)?i=o(a):ut(o)?i=At(o,a):ot(o)||zt(o)?i=o:ee(e)&&(i=it[e](a)),i}const oe=()=>{};function ie(t,e,n=s.COLLAPSE_DURATION){const{scrollHeight:o,style:i}=t,a=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=o+"px",i.transition=`all ${a}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,a)})})}function ae(t){const e=$(!1),n=$(!1),o=$(!1),i=$(V.Enter),a=F({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||s.COLLAPSE_DURATION}),c=a.done||oe,S=f(()=>a.appendPosition?`${a.enter}--${a.position}`:a.enter),l=f(()=>a.appendPosition?`${a.exit}--${a.position}`:a.exit),C=f(()=>t.pauseOnHover?{onMouseenter:N,onMouseleave:I}:{});function y(){const E=S.value.split(" ");p().addEventListener(Q.ENTRANCE_ANIMATION_END,I,{once:!0});const L=q=>{const U=p();q.target===U&&(U.dispatchEvent(new Event(Q.ENTRANCE_ANIMATION_END)),U.removeEventListener("animationend",L),U.removeEventListener("animationcancel",L),i.value===V.Enter&&q.type!=="animationcancel"&&U.classList.remove(...E))},O=()=>{const q=p();q.classList.add(...E),q.addEventListener("animationend",L),q.addEventListener("animationcancel",L)};t.pauseOnFocusLoss&&T(),O()}function A(){if(!p())return;const E=()=>{const O=p();O.removeEventListener("animationend",E),a.collapse?ie(O,c,a.collapseDuration):c()},L=()=>{const O=p();i.value=V.Exit,O&&(O.className+=` ${l.value}`,O.addEventListener("animationend",E))};n.value||(o.value?E():setTimeout(L))}function p(){return t.toastRef.value}function T(){document.hasFocus()||N(),window.addEventListener("focus",I),window.addEventListener("blur",N)}function h(){window.removeEventListener("focus",I),window.removeEventListener("blur",N)}function I(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function N(){e.value=!1}function R(E){E&&(E.stopPropagation(),E.preventDefault()),n.value=!1}return z(A),z(()=>{const E=w();n.value=E.findIndex(L=>L.toastId===a.toastId)>-1}),z(()=>{t.isLoading!==void 0&&(t.loading.value?N():I())}),dt(y),ct(()=>{t.pauseOnFocusLoss&&h()}),{isIn:n,isRunning:e,hideToast:R,eventHandlers:C}}const se=W({name:"ToastItem",inheritAttrs:!1,props:gt,setup(t){const e=$(),n=f(()=>!!t.isLoading),o=f(()=>t.progress!==void 0&&t.progress!==null),i=f(()=>ne(t)),a=f(()=>[`${s.CSS_NAMESPACE}__toast`,`${s.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${s.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${s.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:c,isIn:S,hideToast:l,eventHandlers:C}=ae({toastRef:e,loading:n,done:()=>{v.remove(t.toastId)},...mt(t.transition,t.disabledEnterTransition),...t});return()=>u("div",b({id:t.toastId,class:a.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:y=>{t.closeOnClick&&l(),t.onClick&&t.onClick(y)}},C.value),[u("div",{role:t.role,"data-testid":"toast-body",class:`${s.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&u("div",{"data-testid":`toast-icon-${t.type}`,class:[`${s.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${s.CSS_NAMESPACE}--animate-icon ${s.CSS_NAMESPACE}__zoom-enter`].join(" ")},[G(i.value)?D(g(i.value),{theme:t.theme,type:t.type}):B(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),t.contentProps?u("div",{"data-testid":"toast-content"},[D(g(t.content),{contentProps:t.contentProps})]):u("div",{"data-testid":"toast-content"},[G(t.content)?D(g(t.content),{toastProps:g(t),closeToast:l,data:t.data}):B(t.content)?t.content({toastProps:g(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?D("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&u(Xt,{theme:t.theme,closeToast:y=>{y.stopPropagation(),y.preventDefault(),l()}},null),G(t.closeButton)?D(g(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):B(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,u(Wt,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:S.value,type:t.type,hide:t.hideProgressBar,isRunning:c.value,autoClose:t.autoClose,controlledProgress:o.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let k=0;function St(){typeof window>"u"||(k&&window.cancelAnimationFrame(k),k=window.requestAnimationFrame(St),K.lastUrl!==window.location.href&&(K.lastUrl=window.location.href,v.clear()))}const re=W({name:"ToastifyContainer",inheritAttrs:!1,props:gt,setup(t){const e=f(()=>t.containerId),n=f(()=>d[e.value]||[]),o=f(()=>n.value.filter(i=>i.position===t.position));return dt(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(St)}),ct(()=>{typeof window<"u"&&k&&(window.cancelAnimationFrame(k),K.lastUrl="")}),()=>u(_t,null,[o.value.map(i=>{const{toastId:a=""}=i;return u(se,b({key:a},i),null)})])}});let J=!1;function Ct(){const t=[];return w().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(X)&&t.push(e)}),t}function le(t){const e=Ct().length,n=t!=null?t:0;return n>0&&e+_.items.length>=n}function ue(t){le(t.limit)&&!t.updateId&&_.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function P(t,e,n={}){if(J)return;n=Y(Gt(),{type:e},g(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Et()),n={...n,content:t,containerId:n.containerId||String(n.position)};const o=Number(n==null?void 0:n.progress);return o<0&&(n.progress=0),o>1&&(n.progress=1),n.theme==="auto"&&(n.theme=Vt()),ue(n),K.lastUrl=window.location.href,n.multiple?_.items.length?n.updateId&&j(t,n):j(t,n):(J=!0,r.clearAll(void 0,!1),setTimeout(()=>{j(t,n)},0),setTimeout(()=>{J=!1},390)),n.toastId}const r=(t,e)=>P(t,m.DEFAULT,e);r.info=(t,e)=>P(t,m.DEFAULT,{...e,type:m.INFO});r.error=(t,e)=>P(t,m.DEFAULT,{...e,type:m.ERROR});r.warning=(t,e)=>P(t,m.DEFAULT,{...e,type:m.WARNING});r.warn=r.warning;r.success=(t,e)=>P(t,m.DEFAULT,{...e,type:m.SUCCESS});r.loading=(t,e)=>P(t,m.DEFAULT,Y(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));r.dark=(t,e)=>P(t,m.DEFAULT,Y(e,{theme:M.DARK}));r.remove=t=>{t?v.dismiss(t):v.clear()};r.clearAll=(t,e)=>{at(()=>{v.clear(t,e)})};r.isActive=t=>{let e=!1;return e=Ct().findIndex(n=>n.toastId===t)>-1,e};r.update=(t,e={})=>{setTimeout(()=>{const n=Ht(t);if(n){const o=g(n),{content:i}=o,a={...o,...e,toastId:e.toastId||t,updateId:Et()},c=a.render||i;delete a.render,P(c,a.type,a)}},0)};r.done=t=>{r.update(t,{isLoading:!1,progress:1})};r.promise=de;function de(t,{pending:e,error:n,success:o},i){var a,c,S;let l;const C={...i||{},autoClose:!1};e&&(l=ot(e)?r.loading(e,C):r.loading(e.render,{...C,...e}));const y={autoClose:(a=i==null?void 0:i.autoClose)!=null?a:!0,closeOnClick:(c=i==null?void 0:i.closeOnClick)!=null?c:!0,closeButton:(S=i==null?void 0:i.autoClose)!=null?S:null,isLoading:void 0,draggable:null,delay:100},A=(T,h,I)=>{if(h==null){r.remove(l);return}const N={type:T,...y,...i,data:I},R=ot(h)?{render:h}:h;return l?r.update(l,{...N,...R,isLoading:!1}):r(R.render,{...N,...R,isLoading:!1}),I},p=B(t)?t():t;return p.then(T=>{A("success",o,T)}).catch(T=>{A("error",n,T)}),p}r.POSITION=H;r.THEME=M;r.TYPE=m;r.TRANSITIONS=ht;const ce={install(t,e={}){pe(e)}};typeof window<"u"&&(window.Vue3Toastify=ce);function pe(t={}){const e=Y(ft,t);jt(e)}export{r as i};
