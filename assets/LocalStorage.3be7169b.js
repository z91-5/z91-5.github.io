import{a3 as ge,$ as K,r as R,c as $,w as se,d as pe,a4 as he,j as we,k as ye,a as ze,n as _e,m as E,g as be,a5 as Ae,a6 as Me,A as Ee}from"./index.bff00e5f.js";function Fe(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),ge.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}let X=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,X=e.scrollLeft>=0,e.remove()}const b=1e3,qe=["start","center","end","start-force","center-force","end-force"],ae=Array.prototype.filter,xe=window.getComputedStyle(document.body).overflowAnchor===void 0?K:function(e,t){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const u=e.children||[];ae.call(u,d=>d.dataset&&d.dataset.qVsAnchor!==void 0).forEach(d=>{delete d.dataset.qVsAnchor});const l=u[t];l&&l.dataset&&(l.dataset.qVsAnchor="")}))};function B(e,t){return e+t}function Q(e,t,u,l,d,n,z,A){const w=e===window?document.scrollingElement||document.documentElement:e,_=d===!0?"offsetWidth":"offsetHeight",i={scrollStart:0,scrollViewSize:-z-A,scrollMaxSize:0,offsetStart:-z,offsetEnd:-A};if(d===!0?(e===window?(i.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,i.scrollViewSize+=document.documentElement.clientWidth):(i.scrollStart=w.scrollLeft,i.scrollViewSize+=w.clientWidth),i.scrollMaxSize=w.scrollWidth,n===!0&&(i.scrollStart=(X===!0?i.scrollMaxSize-i.scrollViewSize:0)-i.scrollStart)):(e===window?(i.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,i.scrollViewSize+=document.documentElement.clientHeight):(i.scrollStart=w.scrollTop,i.scrollViewSize+=w.clientHeight),i.scrollMaxSize=w.scrollHeight),u!==null)for(let m=u.previousElementSibling;m!==null;m=m.previousElementSibling)m.classList.contains("q-virtual-scroll--skip")===!1&&(i.offsetStart+=m[_]);if(l!==null)for(let m=l.nextElementSibling;m!==null;m=m.nextElementSibling)m.classList.contains("q-virtual-scroll--skip")===!1&&(i.offsetEnd+=m[_]);if(t!==e){const m=w.getBoundingClientRect(),p=t.getBoundingClientRect();d===!0?(i.offsetStart+=p.left-m.left,i.offsetEnd-=p.width):(i.offsetStart+=p.top-m.top,i.offsetEnd-=p.height),e!==window&&(i.offsetStart+=i.scrollStart),i.offsetEnd+=i.scrollMaxSize-i.offsetStart}return i}function ce(e,t,u,l){t==="end"&&(t=(e===window?document.body:e)[u===!0?"scrollWidth":"scrollHeight"]),e===window?u===!0?(l===!0&&(t=(X===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-t),window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t):u===!0?(l===!0&&(t=(X===!0?e.scrollWidth-e.offsetWidth:0)-t),e.scrollLeft=t):e.scrollTop=t}function j(e,t,u,l){if(u>=l)return 0;const d=t.length,n=Math.floor(u/b),z=Math.floor((l-1)/b)+1;let A=e.slice(n,z).reduce(B,0);return u%b!==0&&(A-=t.slice(n*b,u).reduce(B,0)),l%b!==0&&l!==d&&(A-=t.slice(l,z*b).reduce(B,0)),A}const Re={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},je={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Re};function Ne({virtualScrollLength:e,getVirtualScrollTarget:t,getVirtualScrollEl:u,virtualScrollItemSizeComputed:l}){const d=be(),{props:n,emit:z,proxy:A}=d,{$q:w}=A;let _,i,m,p=[],S;const q=R(0),V=R(0),H=R({}),T=R(null),F=R(null),k=R(null),g=R({from:0,to:0}),Z=$(()=>n.tableColspan!==void 0?n.tableColspan:100);l===void 0&&(l=$(()=>n.virtualScrollItemSize));const ee=$(()=>l.value+";"+n.virtualScrollHorizontal),fe=$(()=>ee.value+";"+n.virtualScrollSliceRatioBefore+";"+n.virtualScrollSliceRatioAfter);se(fe,()=>{O()}),se(ee,Y);function Y(){U(i,!0)}function te(o){U(o===void 0?i:o)}function N(o,r){const s=t();if(s==null||s.nodeType===8)return;const v=Q(s,u(),T.value,F.value,n.virtualScrollHorizontal,w.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd);m!==v.scrollViewSize&&O(v.scrollViewSize),C(s,v,Math.min(e.value-1,Math.max(0,parseInt(o,10)||0)),0,qe.indexOf(r)>-1?r:i>-1&&o>i?"end":"start")}function de(){const o=t();if(o==null||o.nodeType===8)return;const r=Q(o,u(),T.value,F.value,n.virtualScrollHorizontal,w.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd),s=e.value-1,v=r.scrollMaxSize-r.offsetStart-r.offsetEnd-V.value;if(_===r.scrollStart)return;if(r.scrollMaxSize<=0){C(o,r,0,0);return}m!==r.scrollViewSize&&O(r.scrollViewSize),J(g.value.from);const h=Math.floor(r.scrollMaxSize-Math.max(r.scrollViewSize,r.offsetEnd)-Math.min(S[s],r.scrollViewSize/2));if(h>0&&Math.ceil(r.scrollStart)>=h){C(o,r,s,r.scrollMaxSize-r.offsetEnd-p.reduce(B,0));return}let f=0,a=r.scrollStart-r.offsetStart,y=a;if(a<=v&&a+r.scrollViewSize>=q.value)a-=q.value,f=g.value.from,y=a;else for(let c=0;a>=p[c]&&f<s;c++)a-=p[c],f+=b;for(;a>0&&f<s;)a-=S[f],a>-r.scrollViewSize?(f++,y=a):y=S[f]+a;C(o,r,f,y)}function C(o,r,s,v,h){const f=typeof h=="string"&&h.indexOf("-force")>-1,a=f===!0?h.replace("-force",""):h,y=a!==void 0?a:"start";let c=Math.max(0,s-H.value[y]),M=c+H.value.total;M>e.value&&(M=e.value,c=Math.max(0,M-H.value.total)),_=r.scrollStart;const P=c!==g.value.from||M!==g.value.to;if(P===!1&&a===void 0){oe(s);return}const{activeElement:ie}=document,x=k.value;P===!0&&x!==null&&x!==ie&&x.contains(ie)===!0&&(x.addEventListener("focusout",le),setTimeout(()=>{x!==null&&x.removeEventListener("focusout",le)})),xe(x,s-c);const ve=a!==void 0?S.slice(c,s).reduce(B,0):0;if(P===!0){const W=M>=g.value.from&&c<=g.value.to?g.value.to:M;g.value={from:c,to:W},q.value=j(p,S,0,c),V.value=j(p,S,M,e.value),requestAnimationFrame(()=>{g.value.to!==M&&_===r.scrollStart&&(g.value={from:g.value.from,to:M},V.value=j(p,S,M,e.value))})}requestAnimationFrame(()=>{if(_!==r.scrollStart)return;P===!0&&J(c);const W=S.slice(c,s).reduce(B,0),L=W+r.offsetStart+q.value,ne=L+S[s];let D=L+v;if(a!==void 0){const me=W-ve,G=r.scrollStart+me;D=f!==!0&&G<L&&ne<G+r.scrollViewSize?G:a==="end"?ne-r.scrollViewSize:L-(a==="start"?0:Math.round((r.scrollViewSize-S[s])/2))}_=D,ce(o,D,n.virtualScrollHorizontal,w.lang.rtl),oe(s)})}function J(o){const r=k.value;if(r){const s=ae.call(r.children,c=>c.classList&&c.classList.contains("q-virtual-scroll--skip")===!1),v=s.length,h=n.virtualScrollHorizontal===!0?c=>c.getBoundingClientRect().width:c=>c.offsetHeight;let f=o,a,y;for(let c=0;c<v;){for(a=h(s[c]),c++;c<v&&s[c].classList.contains("q-virtual-scroll--with-prev")===!0;)a+=h(s[c]),c++;y=a-S[f],y!==0&&(S[f]+=y,p[Math.floor(f/b)]+=y),f++}}}function le(){k.value!==null&&k.value!==void 0&&k.value.focus()}function U(o,r){const s=1*l.value;(r===!0||Array.isArray(S)===!1)&&(S=[]);const v=S.length;S.length=e.value;for(let f=e.value-1;f>=v;f--)S[f]=s;const h=Math.floor((e.value-1)/b);p=[];for(let f=0;f<=h;f++){let a=0;const y=Math.min((f+1)*b,e.value);for(let c=f*b;c<y;c++)a+=S[c];p.push(a)}i=-1,_=void 0,q.value=j(p,S,0,g.value.from),V.value=j(p,S,g.value.to,e.value),o>=0?(J(g.value.from),_e(()=>{N(o)})):I()}function O(o){if(o===void 0&&typeof window!="undefined"){const a=t();a!=null&&a.nodeType!==8&&(o=Q(a,u(),T.value,F.value,n.virtualScrollHorizontal,w.lang.rtl,n.virtualScrollStickySizeStart,n.virtualScrollStickySizeEnd).scrollViewSize)}m=o;const r=parseFloat(n.virtualScrollSliceRatioBefore)||0,s=parseFloat(n.virtualScrollSliceRatioAfter)||0,v=1+r+s,h=o===void 0||o<=0?1:Math.ceil(o/l.value),f=Math.max(1,h,Math.ceil((n.virtualScrollSliceSize>0?n.virtualScrollSliceSize:10)/v));H.value={total:Math.ceil(f*v),start:Math.ceil(f*r),center:Math.ceil(f*(.5+r)),end:Math.ceil(f*(1+r)),view:h}}function Se(o,r){const s=n.virtualScrollHorizontal===!0?"width":"height",v={["--q-virtual-scroll-item-"+s]:l.value+"px"};return[o==="tbody"?E(o,{class:"q-virtual-scroll__padding",key:"before",ref:T},[E("tr",[E("td",{style:{[s]:`${q.value}px`,...v},colspan:Z.value})])]):E(o,{class:"q-virtual-scroll__padding",key:"before",ref:T,style:{[s]:`${q.value}px`,...v}}),E(o,{class:"q-virtual-scroll__content",key:"content",ref:k,tabindex:-1},r.flat()),o==="tbody"?E(o,{class:"q-virtual-scroll__padding",key:"after",ref:F},[E("tr",[E("td",{style:{[s]:`${V.value}px`,...v},colspan:Z.value})])]):E(o,{class:"q-virtual-scroll__padding",key:"after",ref:F,style:{[s]:`${V.value}px`,...v}})]}function oe(o){i!==o&&(n.onVirtualScroll!==void 0&&z("virtualScroll",{index:o,from:g.value.from,to:g.value.to-1,direction:o<i?"decrease":"increase",ref:A}),i=o)}O();const I=pe(de,w.platform.is.ios===!0?120:35);he(()=>{O()});let re=!1;return we(()=>{re=!0}),ye(()=>{if(re!==!0)return;const o=t();_!==void 0&&o!==void 0&&o!==null&&o.nodeType!==8?ce(o,_,n.virtualScrollHorizontal,w.lang.rtl):N(i)}),ze(()=>{I.cancel()}),Object.assign(A,{scrollTo:N,reset:Y,refresh:te}),{virtualScrollSliceRange:g,virtualScrollSliceSizeComputed:H,setVirtualScrollSize:O,onVirtualScrollEvt:I,localResetVirtualScroll:U,padVirtualScroll:Se,scrollTo:N,reset:Y,refresh:te}}function Ce(e,t,u){return u<=t?t:Math.min(u,Math.max(t,e))}function Pe(e,t,u){if(u<=t)return t;const l=u-t+1;let d=t+(e-t)%l;return d<t&&(d=l+d),d===0?0:d}function Ve(e){return Ae(e)===!0?"__q_date|"+e.toUTCString():Me(e)===!0?"__q_expr|"+e.source:typeof e=="number"?"__q_numb|"+e:typeof e=="boolean"?"__q_bool|"+(e?"1":"0"):typeof e=="string"?"__q_strn|"+e:typeof e=="function"?"__q_strn|"+e.toString():e===Object(e)?"__q_objt|"+JSON.stringify(e):e}function ke(e){if(e.length<9)return e;const u=e.substring(0,8),l=e.substring(9);switch(u){case"__q_date":return new Date(l);case"__q_expr":return new RegExp(l);case"__q_numb":return Number(l);case"__q_bool":return Boolean(l==="1");case"__q_strn":return""+l;case"__q_objt":return JSON.parse(l);default:return e}}function Oe(){const e=()=>null;return{has:()=>!1,getLength:()=>0,getItem:e,getIndex:e,getKey:e,getAll:()=>{},getAllKeys:()=>[],set:K,remove:K,clear:K,isEmpty:()=>!0}}function Be(e){const t=window[e+"Storage"],u=l=>{const d=t.getItem(l);return d?ke(d):null};return{has:l=>t.getItem(l)!==null,getLength:()=>t.length,getItem:u,getIndex:l=>l<t.length?u(t.key(l)):null,getKey:l=>l<t.length?t.key(l):null,getAll:()=>{let l;const d={},n=t.length;for(let z=0;z<n;z++)l=t.key(z),d[l]=u(l);return d},getAllKeys:()=>{const l=[],d=t.length;for(let n=0;n<d;n++)l.push(t.key(n));return l},set:(l,d)=>{t.setItem(l,Ve(d))},remove:l=>{t.removeItem(l)},clear:()=>{t.clear()},isEmpty:()=>t.length===0}}const ue=Ee.has.webStorage===!1?Oe():Be("local"),He={install({$q:e}){e.localStorage=ue}};Object.assign(He,ue);export{He as P,Ne as a,Ce as b,Fe as c,Pe as n,je as u};