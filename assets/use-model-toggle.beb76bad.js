import{c as U,h as q,p as A}from"./QBtn.fd83605e.js";import{c as m,m as S,w as g,o as k,g as H,n as B}from"./index.bff00e5f.js";let p,f=0;const o=new Array(256);for(let e=0;e<256;e++)o[e]=(e+256).toString(16).substring(1);const T=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return r=>{const l=new Uint8Array(r);return e.getRandomValues(l),l}}return r=>{const l=[];for(let n=r;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),_=4096;function F(){(p===void 0||f+16>_)&&(f=0,p=T(_));const e=Array.prototype.slice.call(p,f,f+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,o[e[0]]+o[e[1]]+o[e[2]]+o[e[3]]+"-"+o[e[4]]+o[e[5]]+"-"+o[e[6]]+o[e[7]]+"-"+o[e[8]]+o[e[9]]+"-"+o[e[10]]+o[e[11]]+o[e[12]]+o[e[13]]+o[e[14]]+o[e[15]]}var L=U({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:r}){const l=m(()=>parseInt(e.lines,10)),n=m(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),d=m(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>S("div",{style:d.value,class:n.value},q(r.default))}});const Q={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},R=["beforeShow","show","beforeHide","hide"];function P({showing:e,canShow:r,hideOnRouteChange:l,handleShow:n,handleHide:d,processOnMount:M}){const b=H(),{props:a,emit:u,proxy:v}=b;let i;function I(t){e.value===!0?c(t):y(t)}function y(t){if(a.disable===!0||t!==void 0&&t.qAnchorHandled===!0||r!==void 0&&r(t)!==!0)return;const s=a["onUpdate:modelValue"]!==void 0;s===!0&&(u("update:modelValue",!0),i=t,B(()=>{i===t&&(i=void 0)})),(a.modelValue===null||s===!1)&&x(t)}function x(t){e.value!==!0&&(e.value=!0,u("beforeShow",t),n!==void 0?n(t):u("show",t))}function c(t){if(a.disable===!0)return;const s=a["onUpdate:modelValue"]!==void 0;s===!0&&(u("update:modelValue",!1),i=t,B(()=>{i===t&&(i=void 0)})),(a.modelValue===null||s===!1)&&V(t)}function V(t){e.value!==!1&&(e.value=!1,u("beforeHide",t),d!==void 0?d(t):u("hide",t))}function h(t){a.disable===!0&&t===!0?a["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):t===!0!==e.value&&(t===!0?x:V)(i)}g(()=>a.modelValue,h),l!==void 0&&A(b)===!0&&g(()=>v.$route.fullPath,()=>{l.value===!0&&e.value===!0&&c()}),M===!0&&k(()=>{h(a.modelValue)});const w={show:y,hide:c,toggle:I};return Object.assign(v,w),w}export{L as Q,Q as a,R as b,P as c,F as u};