import{f as oe,r as u,g as C,h as y,i as Ce,n as Oe,j as Me,k as he,w as J,l as we,m as h,F as ye,q as g,_ as je,o as K,s as Se,t as Q,u as Ne,v as Z,b as Le,c as Ee,x as Ie,a as be}from"./index--9SYMf3o.js";/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const d={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},xe={itemsToShow:{default:d.itemsToShow,type:Number},itemsToScroll:{default:d.itemsToScroll,type:Number},wrapAround:{default:d.wrapAround,type:Boolean},throttle:{default:d.throttle,type:Number},snapAlign:{default:d.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:d.transition,type:Number},breakpoints:{default:d.breakpoints,type:Object},autoplay:{default:d.autoplay,type:Number},pauseAutoplayOnHover:{default:d.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:d.mouseDrag,type:Boolean},touchDrag:{default:d.touchDrag,type:Boolean},dir:{default:d.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:d.i18n,type:Object},settings:{default(){return{}},type:Object}};function De({config:e,slidesCount:a}){const{snapAlign:t,wrapAround:r,itemsToShow:l=1}=e;if(r)return Math.max(a-1,0);let i;switch(t){case"start":i=a-l;break;case"end":i=a-1;break;case"center":case"center-odd":i=a-Math.ceil((l-.5)/2);break;case"center-even":i=a-Math.ceil(l/2);break;default:i=0;break}return Math.max(i,0)}function Be({config:e,slidesCount:a}){const{wrapAround:t,snapAlign:r,itemsToShow:l=1}=e;let i=0;if(t||l>a)return i;switch(r){case"start":i=0;break;case"end":i=l-1;break;case"center":case"center-odd":i=Math.floor((l-1)/2);break;case"center-even":i=Math.floor((l-2)/2);break;default:i=0;break}return i}function ee({val:e,max:a,min:t}){return a<t?e:Math.min(Math.max(e,t),a)}function Re({config:e,currentSlide:a,slidesCount:t}){const{snapAlign:r,wrapAround:l,itemsToShow:i=1}=e;let p=a;switch(r){case"center":case"center-odd":p-=(i-1)/2;break;case"center-even":p-=(i-2)/2;break;case"end":p-=i-1;break}return l?p:ee({val:p,max:t-i,min:0})}function _e(e){return e?e.reduce((a,t)=>{var r;return t.type===ye?[...a,..._e(t.children)]:((r=t.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...a,t]:a},[]):[]}function te({val:e,max:a,min:t=0}){return e>a?te({val:e-(a+1),max:a,min:t}):e<t?te({val:e+(a+1),max:a,min:t}):e}function Pe(e,a){let t;return a?function(...r){const l=this;t||(e.apply(l,r),t=!0,setTimeout(()=>t=!1,a))}:e}function Ve(e,a){let t;return function(...r){t&&clearTimeout(t),t=setTimeout(()=>{e(...r),t=null},a)}}function Xe(e="",a={}){return Object.entries(a).reduce((t,[r,l])=>t.replace(`{${r}}`,String(l)),e)}var $e=oe({name:"ARIA",setup(){const e=g("config",C(Object.assign({},d))),a=g("currentSlide",u(0)),t=g("slidesCount",u(0));return()=>h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Xe(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:t.value}))}}),ze=oe({name:"Carousel",props:xe,setup(e,{slots:a,emit:t,expose:r}){var l;const i=u(null),p=u([]),w=u(0),v=u(0),o=C(Object.assign({},d));let m=Object.assign({},d),b;const s=u((l=e.modelValue)!==null&&l!==void 0?l:0),O=u(0),E=u(0),_=u(0),j=u(0);let M,V;y("config",o),y("slidesCount",v),y("currentSlide",s),y("maxSlide",_),y("minSlide",j),y("slideWidth",w);function X(){b=Object.assign({},e.breakpoints),m=Object.assign(Object.assign(Object.assign({},m),e),{i18n:Object.assign(Object.assign({},m.i18n),e.i18n),breakpoints:void 0}),re(m)}function I(){if(!b||!Object.keys(b).length)return;const n=Object.keys(b).map(c=>Number(c)).sort((c,x)=>+x-+c);let f=Object.assign({},m);n.some(c=>{const x=window.matchMedia(`(min-width: ${c}px)`).matches;return x&&(f=Object.assign(Object.assign({},f),b[c])),x}),re(f)}function re(n){Object.entries(n).forEach(([f,c])=>o[f]=c)}const ie=Ve(()=>{I(),N()},16);function N(){if(!i.value)return;const n=i.value.getBoundingClientRect();w.value=n.width/o.itemsToShow}function $(){v.value<=0||(E.value=Math.ceil((v.value-1)/2),_.value=De({config:o,slidesCount:v.value}),j.value=Be({config:o,slidesCount:v.value}),o.wrapAround||(s.value=ee({val:s.value,max:_.value,min:j.value})))}Ce(()=>{Oe(()=>N()),setTimeout(()=>N(),1e3),I(),ce(),window.addEventListener("resize",ie,{passive:!0}),t("init")}),Me(()=>{V&&clearTimeout(V),M&&clearInterval(M),window.removeEventListener("resize",ie,{passive:!0})});let S=!1;const D={x:0,y:0},B={x:0,y:0},T=C({x:0,y:0}),R=u(!1),z=u(!1),Te=()=>{R.value=!0},Ae=()=>{R.value=!1};function le(n){["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||(S=n.type==="touchstart",S||n.preventDefault(),!(!S&&n.button!==0||A.value)&&(D.x=S?n.touches[0].clientX:n.clientX,D.y=S?n.touches[0].clientY:n.clientY,document.addEventListener(S?"touchmove":"mousemove",se,!0),document.addEventListener(S?"touchend":"mouseup",ue,!0)))}const se=Pe(n=>{z.value=!0,B.x=S?n.touches[0].clientX:n.clientX,B.y=S?n.touches[0].clientY:n.clientY;const f=B.x-D.x,c=B.y-D.y;T.y=c,T.x=f},o.throttle);function ue(){const n=o.dir==="rtl"?-1:1,f=Math.sign(T.x)*.4,c=Math.round(T.x/w.value+f)*n;if(c&&!S){const x=W=>{W.stopPropagation(),window.removeEventListener("click",x,!0)};window.addEventListener("click",x,!0)}k(s.value-c),T.x=0,T.y=0,z.value=!1,document.removeEventListener(S?"touchmove":"mousemove",se,!0),document.removeEventListener(S?"touchend":"mouseup",ue,!0)}function ce(){!o.autoplay||o.autoplay<=0||(M=setInterval(()=>{o.pauseAutoplayOnHover&&R.value||P()},o.autoplay))}function de(){M&&(clearInterval(M),M=null),ce()}const A=u(!1);function k(n){const f=o.wrapAround?n:ee({val:n,max:_.value,min:j.value});s.value===f||A.value||(t("slide-start",{slidingToIndex:n,currentSlideIndex:s.value,prevSlideIndex:O.value,slidesCount:v.value}),A.value=!0,O.value=s.value,s.value=f,V=setTimeout(()=>{if(o.wrapAround){const c=te({val:f,max:_.value,min:0});c!==s.value&&(s.value=c,t("loop",{currentSlideIndex:s.value,slidingToIndex:n}))}t("update:modelValue",s.value),t("slide-end",{currentSlideIndex:s.value,prevSlideIndex:O.value,slidesCount:v.value}),A.value=!1,de()},o.transition))}function P(){k(s.value+o.itemsToScroll)}function U(){k(s.value-o.itemsToScroll)}const ve={slideTo:k,next:P,prev:U};y("nav",ve),y("isSliding",A);const fe=he(()=>Re({config:o,currentSlide:s.value,slidesCount:v.value}));y("slidesToScroll",fe);const ke=he(()=>{const n=o.dir==="rtl"?-1:1,f=fe.value*w.value*n;return{transform:`translateX(${T.x-f}px)`,transition:`${A.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${v.value*w.value}px`:"",width:"100%"}});function pe(){X(),I(),$(),N(),de()}Object.keys(xe).forEach(n=>{["modelValue"].includes(n)||J(()=>e[n],pe)}),J(()=>e.modelValue,n=>{n!==s.value&&k(Number(n))}),J(v,$),t("before-init"),X();const me={config:o,slidesCount:v,slideWidth:w,next:P,prev:U,slideTo:k,currentSlide:s,maxSlide:_,minSlide:j,middleSlide:E};r({updateBreakpointsConfigs:I,updateSlidesData:$,updateSlideWidth:N,initDefaultConfigs:X,restartCarousel:pe,slideTo:k,next:P,prev:U,nav:ve,data:me});const Y=a.default||a.slides,H=a.addons,ge=C(me);return()=>{const n=_e(Y==null?void 0:Y(ge)),f=(H==null?void 0:H(ge))||[];n.forEach((F,G)=>F.props.index=G);let c=n;if(o.wrapAround){const F=n.map((q,L)=>we(q,{index:-n.length+L,isClone:!0,key:`clone-before-${L}`})),G=n.map((q,L)=>we(q,{index:n.length+L,isClone:!0,key:`clone-after-${L}`}));c=[...F,...n,...G]}p.value=n,v.value=Math.max(n.length,1);const x=h("ol",{class:"carousel__track",style:ke.value,onMousedownCapture:o.mouseDrag?le:null,onTouchstartPassiveCapture:o.touchDrag?le:null},c),W=h("div",{class:"carousel__viewport"},x);return h("section",{ref:i,class:{carousel:!0,"is-sliding":A.value,"is-dragging":z.value,"is-hover":R.value,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":o.i18n.ariaGallery,tabindex:"0",onMouseenter:Te,onMouseleave:Ae},[W,f,h($e)])}}}),ne;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ne||(ne={}));const Ue={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function Ye(e){return e in ne}const ae=e=>{const a=g("config",C(Object.assign({},d))),t=String(e.name),r=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!Ye(t))return;const l=Ue[t],i=h("path",{d:l}),p=a.i18n[r]||e.title||t,w=h("title",p);return h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":p},[w,i])};ae.props={name:String,title:String};const He=(e,{slots:a,attrs:t})=>{const{next:r,prev:l}=a||{},i=g("config",C(Object.assign({},d))),p=g("maxSlide",u(1)),w=g("minSlide",u(1)),v=g("currentSlide",u(1)),o=g("nav",{}),{dir:m,wrapAround:b,i18n:s}=i,O=m==="rtl",E=h("button",{type:"button",class:["carousel__prev",!b&&v.value<=w.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":s.ariaPreviousSlide,onClick:o.prev},(l==null?void 0:l())||h(ae,{name:O?"arrowRight":"arrowLeft"})),_=h("button",{type:"button",class:["carousel__next",!b&&v.value>=p.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":s.ariaNextSlide,onClick:o.next},(r==null?void 0:r())||h(ae,{name:O?"arrowLeft":"arrowRight"}));return[E,_]};var We=oe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=g("config",C(Object.assign({},d))),r=g("currentSlide",u(0)),l=g("slidesToScroll",u(0)),i=g("isSliding",u(!1)),p=()=>e.index===r.value,w=()=>e.index===r.value-1,v=()=>e.index===r.value+1,o=()=>{const m=Math.floor(l.value),b=Math.ceil(l.value+t.itemsToShow-1);return e.index>=m&&e.index<=b};return()=>{var m;return h("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":p(),"carousel__slide--prev":w(),"carousel__slide--next":v(),"carousel__slide--sliding":i.value},"aria-hidden":!o()},(m=a.default)===null||m===void 0?void 0:m.call(a))}}});const Fe={class:"carousel__item"},Ge=["src"],qe={__name:"Carousel",props:{imgs:{type:Array,required:!0},settings:{type:Object,default:()=>({itemsToShow:1,snapAlign:"start"})},breakpoints:{type:Object,default:()=>({414:{itemsToShow:3},768:{itemsToShow:4},1024:{itemsToShow:7}})}},setup(e){return(a,t)=>(K(),Se(Z(ze),Ne(e.settings,{breakpoints:e.breakpoints}),{addons:Q(()=>[Le(Z(He))]),default:Q(()=>[(K(!0),Ee(ye,null,Ie(e.imgs,r=>(K(),Se(Z(We),{key:r},{default:Q(()=>[be("div",Fe,[be("img",{src:r,alt:""},null,8,Ge)])]),_:2},1024))),128))]),_:1},16,["breakpoints"]))}},Ke=je(qe,[["__scopeId","data-v-7385da53"]]);export{Ke as C};
