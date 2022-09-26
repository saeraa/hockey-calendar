(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function md(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const CE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OE=md(CE);function Ev(t){return!!t||t===""}function Rt(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=tt(i)?ME(i):Rt(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(tt(t))return t;if(je(t))return t}}const NE=/;(?![^(]*\))/g,xE=/:(.+)/;function ME(t){const e={};return t.split(NE).forEach(n=>{if(n){const i=n.split(xE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Oe(t){let e="";if(tt(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const i=Oe(t[n]);i&&(e+=i+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function xm(t){if(!t)return null;let{class:e,style:n}=t;return e&&!tt(e)&&(t.class=Oe(e)),n&&(t.style=Rt(n)),t}const pe=t=>tt(t)?t:t==null?"":ae(t)||je(t)&&(t.toString===Av||!fe(t.toString))?JSON.stringify(t,Tv,2):String(t),Tv=(t,e)=>e&&e.__v_isRef?Tv(t,e.value):Er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Sv(e)?{[`Set(${e.size})`]:[...e.values()]}:je(e)&&!ae(e)&&!kv(e)?String(e):e,Ve={},Ir=[],En=()=>{},RE=()=>!1,PE=/^on[^a-z]/,Ic=t=>PE.test(t),pd=t=>t.startsWith("onUpdate:"),gt=Object.assign,gd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},LE=Object.prototype.hasOwnProperty,be=(t,e)=>LE.call(t,e),ae=Array.isArray,Er=t=>Ec(t)==="[object Map]",Sv=t=>Ec(t)==="[object Set]",fe=t=>typeof t=="function",tt=t=>typeof t=="string",vd=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Dv=t=>je(t)&&fe(t.then)&&fe(t.catch),Av=Object.prototype.toString,Ec=t=>Av.call(t),VE=t=>Ec(t).slice(8,-1),kv=t=>Ec(t)==="[object Object]",yd=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kl=md(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FE=/-(\w)/g,Gn=Tc(t=>t.replace(FE,(e,n)=>n?n.toUpperCase():"")),$E=/\B([A-Z])/g,Ys=Tc(t=>t.replace($E,"-$1").toLowerCase()),Sc=Tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ou=Tc(t=>t?`on${Sc(t)}`:""),ia=(t,e)=>!Object.is(t,e),Nu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$l=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cv=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mm;const UE=()=>Mm||(Mm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nn;class Ov{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Nn&&(this.parent=Nn,this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Nn;try{return Nn=this,e()}finally{Nn=n}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this.active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function Nv(t){return new Ov(t)}function BE(t,e=Nn){e&&e.active&&e.effects.push(t)}const wd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xv=t=>(t.w&Ri)>0,Mv=t=>(t.n&Ri)>0,jE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ri},qE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];xv(s)&&!Mv(s)?s.delete(t):e[n++]=s,s.w&=~Ri,s.n&=~Ri}e.length=n}},uh=new WeakMap;let xo=0,Ri=1;const hh=30;let _n;const Ss=Symbol(""),dh=Symbol("");class _d{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,BE(this,i)}run(){if(!this.active)return this.fn();let e=_n,n=Ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_n,_n=this,Ci=!0,Ri=1<<++xo,xo<=hh?jE(this):Rm(this),this.fn()}finally{xo<=hh&&qE(this),Ri=1<<--xo,_n=this.parent,Ci=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_n===this?this.deferStop=!0:this.active&&(Rm(this),this.onStop&&this.onStop(),this.active=!1)}}function Rm(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ci=!0;const Rv=[];function Qs(){Rv.push(Ci),Ci=!1}function Js(){const t=Rv.pop();Ci=t===void 0?!0:t}function ln(t,e,n){if(Ci&&_n){let i=uh.get(t);i||uh.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=wd()),Pv(s)}}function Pv(t,e){let n=!1;xo<=hh?Mv(t)||(t.n|=Ri,n=!xv(t)):n=!t.has(_n),n&&(t.add(_n),_n.deps.push(t))}function ai(t,e,n,i,s,r){const o=uh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ae(t))o.forEach((l,c)=>{(c==="length"||c>=i)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ae(t)?yd(n)&&a.push(o.get("length")):(a.push(o.get(Ss)),Er(t)&&a.push(o.get(dh)));break;case"delete":ae(t)||(a.push(o.get(Ss)),Er(t)&&a.push(o.get(dh)));break;case"set":Er(t)&&a.push(o.get(Ss));break}if(a.length===1)a[0]&&fh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fh(wd(l))}}function fh(t,e){const n=ae(t)?t:[...t];for(const i of n)i.computed&&Pm(i);for(const i of n)i.computed||Pm(i)}function Pm(t,e){(t!==_n||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const HE=md("__proto__,__v_isRef,__isVue"),Lv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vd)),WE=bd(),GE=bd(!1,!0),KE=bd(!0),Lm=zE();function zE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=ye(this);for(let r=0,o=this.length;r<o;r++)ln(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(ye)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qs();const i=ye(this)[e].apply(this,n);return Js(),i}}),t}function bd(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(t?e?u0:Bv:e?Uv:$v).get(i))return i;const o=ae(i);if(!t&&o&&be(Lm,s))return Reflect.get(Lm,s,r);const a=Reflect.get(i,s,r);return(vd(s)?Lv.has(s):HE(s))||(t||ln(i,"get",s),e)?a:$e(a)?o&&yd(s)?a:a.value:je(a)?t?jv(a):Xs(a):a}}const YE=Vv(),QE=Vv(!0);function Vv(t=!1){return function(n,i,s,r){let o=n[i];if(Mr(o)&&$e(o)&&!$e(s))return!1;if(!t&&(!Ul(s)&&!Mr(s)&&(o=ye(o),s=ye(s)),!ae(n)&&$e(o)&&!$e(s)))return o.value=s,!0;const a=ae(n)&&yd(i)?Number(i)<n.length:be(n,i),l=Reflect.set(n,i,s,r);return n===ye(r)&&(a?ia(s,o)&&ai(n,"set",i,s):ai(n,"add",i,s)),l}}function JE(t,e){const n=be(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&ai(t,"delete",e,void 0),i}function XE(t,e){const n=Reflect.has(t,e);return(!vd(e)||!Lv.has(e))&&ln(t,"has",e),n}function ZE(t){return ln(t,"iterate",ae(t)?"length":Ss),Reflect.ownKeys(t)}const Fv={get:WE,set:YE,deleteProperty:JE,has:XE,ownKeys:ZE},e0={get:KE,set(t,e){return!0},deleteProperty(t,e){return!0}},t0=gt({},Fv,{get:GE,set:QE}),Id=t=>t,Dc=t=>Reflect.getPrototypeOf(t);function dl(t,e,n=!1,i=!1){t=t.__v_raw;const s=ye(t),r=ye(e);n||(e!==r&&ln(s,"get",e),ln(s,"get",r));const{has:o}=Dc(s),a=i?Id:n?Sd:sa;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function fl(t,e=!1){const n=this.__v_raw,i=ye(n),s=ye(t);return e||(t!==s&&ln(i,"has",t),ln(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ml(t,e=!1){return t=t.__v_raw,!e&&ln(ye(t),"iterate",Ss),Reflect.get(t,"size",t)}function Vm(t){t=ye(t);const e=ye(this);return Dc(e).has.call(e,t)||(e.add(t),ai(e,"add",t,t)),this}function Fm(t,e){e=ye(e);const n=ye(this),{has:i,get:s}=Dc(n);let r=i.call(n,t);r||(t=ye(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?ia(e,o)&&ai(n,"set",t,e):ai(n,"add",t,e),this}function $m(t){const e=ye(this),{has:n,get:i}=Dc(e);let s=n.call(e,t);s||(t=ye(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&ai(e,"delete",t,void 0),r}function Um(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&ai(t,"clear",void 0,void 0),n}function pl(t,e){return function(i,s){const r=this,o=r.__v_raw,a=ye(o),l=e?Id:t?Sd:sa;return!t&&ln(a,"iterate",Ss),o.forEach((c,u)=>i.call(s,l(c),l(u),r))}}function gl(t,e,n){return function(...i){const s=this.__v_raw,r=ye(s),o=Er(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Id:e?Sd:sa;return!e&&ln(r,"iterate",l?dh:Ss),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function wi(t){return function(...e){return t==="delete"?!1:this}}function n0(){const t={get(r){return dl(this,r)},get size(){return ml(this)},has:fl,add:Vm,set:Fm,delete:$m,clear:Um,forEach:pl(!1,!1)},e={get(r){return dl(this,r,!1,!0)},get size(){return ml(this)},has:fl,add:Vm,set:Fm,delete:$m,clear:Um,forEach:pl(!1,!0)},n={get(r){return dl(this,r,!0)},get size(){return ml(this,!0)},has(r){return fl.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:pl(!0,!1)},i={get(r){return dl(this,r,!0,!0)},get size(){return ml(this,!0)},has(r){return fl.call(this,r,!0)},add:wi("add"),set:wi("set"),delete:wi("delete"),clear:wi("clear"),forEach:pl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=gl(r,!1,!1),n[r]=gl(r,!0,!1),e[r]=gl(r,!1,!0),i[r]=gl(r,!0,!0)}),[t,n,e,i]}const[i0,s0,r0,o0]=n0();function Ed(t,e){const n=e?t?o0:r0:t?s0:i0;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(be(n,s)&&s in i?n:i,s,r)}const a0={get:Ed(!1,!1)},l0={get:Ed(!1,!0)},c0={get:Ed(!0,!1)},$v=new WeakMap,Uv=new WeakMap,Bv=new WeakMap,u0=new WeakMap;function h0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function d0(t){return t.__v_skip||!Object.isExtensible(t)?0:h0(VE(t))}function Xs(t){return Mr(t)?t:Td(t,!1,Fv,a0,$v)}function f0(t){return Td(t,!1,t0,l0,Uv)}function jv(t){return Td(t,!0,e0,c0,Bv)}function Td(t,e,n,i,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=d0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Oi(t){return Mr(t)?Oi(t.__v_raw):!!(t&&t.__v_isReactive)}function Mr(t){return!!(t&&t.__v_isReadonly)}function Ul(t){return!!(t&&t.__v_isShallow)}function qv(t){return Oi(t)||Mr(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function Ns(t){return $l(t,"__v_skip",!0),t}const sa=t=>je(t)?Xs(t):t,Sd=t=>je(t)?jv(t):t;function Hv(t){Ci&&_n&&(t=ye(t),Pv(t.dep||(t.dep=wd())))}function Wv(t,e){t=ye(t),t.dep&&fh(t.dep)}function $e(t){return!!(t&&t.__v_isRef===!0)}function mn(t){return m0(t,!1)}function m0(t,e){return $e(t)?t:new p0(t,e)}class p0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:sa(e)}get value(){return Hv(this),this._value}set value(e){const n=this.__v_isShallow||Ul(e)||Mr(e);e=n?e:ye(e),ia(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:sa(e),Wv(this))}}function J(t){return $e(t)?t.value:t}const g0={get:(t,e,n)=>J(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Gv(t){return Oi(t)?t:new Proxy(t,g0)}function v0(t){const e=ae(t)?new Array(t.length):{};for(const n in t)e[n]=Mn(t,n);return e}class y0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Mn(t,e,n){const i=t[e];return $e(i)?i:new y0(t,e,n)}var Kv;class w0{constructor(e,n,i,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Kv]=!1,this._dirty=!0,this.effect=new _d(e,()=>{this._dirty||(this._dirty=!0,Wv(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=i}get value(){const e=ye(this);return Hv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Kv="__v_isReadonly";function _0(t,e,n=!1){let i,s;const r=fe(t);return r?(i=t,s=En):(i=t.get,s=t.set),new w0(i,s,r||!s,n)}const Uo=[];function zv(t,...e){Qs();const n=Uo.length?Uo[Uo.length-1].component:null,i=n&&n.appContext.config.warnHandler,s=b0();if(i)ri(i,n,11,[t+e.join(""),n&&n.proxy,s.map(({vnode:r})=>`at <${Ty(n,r.type)}>`).join(`
`),s]);else{const r=[`[Vue warn]: ${t}`,...e];s.length&&r.push(`
`,...I0(s)),console.warn(...r)}Js()}function b0(){let t=Uo[Uo.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function I0(t){const e=[];return t.forEach((n,i)=>{e.push(...i===0?[]:[`
`],...E0(n))}),e}function E0({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=t.component?t.component.parent==null:!1,s=` at <${Ty(t.component,t.type,i)}`,r=">"+n;return t.props?[s,...T0(t.props),r]:[s+r]}function T0(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(i=>{e.push(...Yv(i,t[i]))}),n.length>3&&e.push(" ..."),e}function Yv(t,e,n){return tt(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:$e(e)?(e=Yv(t,ye(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):fe(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=ye(e),n?e:[`${t}=`,e])}function ri(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){Ac(r,e,n)}return s}function pn(t,e,n,i){if(fe(t)){const r=ri(t,e,n,i);return r&&Dv(r)&&r.catch(o=>{Ac(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(pn(t[r],e,n,i));return s}function Ac(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ri(l,null,10,[t,o,a]);return}}S0(t,n,s,i)}function S0(t,e,n,i=!0){console.error(t)}let ra=!1,mh=!1;const Pt=[];let Rn=0;const Tr=[];let Zn=null,hs=0;const Qv=Promise.resolve();let Dd=null;function ws(t){const e=Dd||Qv;return t?e.then(this?t.bind(this):t):e}function D0(t){let e=Rn+1,n=Pt.length;for(;e<n;){const i=e+n>>>1;oa(Pt[i])<t?e=i+1:n=i}return e}function Ad(t){(!Pt.length||!Pt.includes(t,ra&&t.allowRecurse?Rn+1:Rn))&&(t.id==null?Pt.push(t):Pt.splice(D0(t.id),0,t),Jv())}function Jv(){!ra&&!mh&&(mh=!0,Dd=Qv.then(Zv))}function A0(t){const e=Pt.indexOf(t);e>Rn&&Pt.splice(e,1)}function k0(t){ae(t)?Tr.push(...t):(!Zn||!Zn.includes(t,t.allowRecurse?hs+1:hs))&&Tr.push(t),Jv()}function Bm(t,e=ra?Rn+1:0){for(;e<Pt.length;e++){const n=Pt[e];n&&n.pre&&(Pt.splice(e,1),e--,n())}}function Xv(t){if(Tr.length){const e=[...new Set(Tr)];if(Tr.length=0,Zn){Zn.push(...e);return}for(Zn=e,Zn.sort((n,i)=>oa(n)-oa(i)),hs=0;hs<Zn.length;hs++)Zn[hs]();Zn=null,hs=0}}const oa=t=>t.id==null?1/0:t.id,C0=(t,e)=>{const n=oa(t)-oa(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zv(t){mh=!1,ra=!0,Pt.sort(C0);const e=En;try{for(Rn=0;Rn<Pt.length;Rn++){const n=Pt[Rn];n&&n.active!==!1&&ri(n,null,14)}}finally{Rn=0,Pt.length=0,Xv(),ra=!1,Dd=null,(Pt.length||Tr.length)&&Zv()}}function O0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Ve;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[u]||Ve;d&&(s=n.map(f=>f.trim())),h&&(s=n.map(Cv))}let a,l=i[a=Ou(e)]||i[a=Ou(Gn(e))];!l&&r&&(l=i[a=Ou(Ys(e))]),l&&pn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pn(c,t,6,s)}}function ey(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=ey(c,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(je(t)&&i.set(t,null),null):(ae(r)?r.forEach(l=>o[l]=null):gt(o,r),je(t)&&i.set(t,o),o)}function kc(t,e){return!t||!Ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Ys(e))||be(t,e))}let Ht=null,ty=null;function Bl(t){const e=Ht;return Ht=t,ty=t&&t.type.__scopeId||null,e}function Ie(t,e=Ht,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Xm(-1);const r=Bl(e),o=t(...s);return Bl(r),i._d&&Xm(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function xu(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=t;let S,x;const G=Bl(t);try{if(n.shapeFlag&4){const O=s||i;S=xn(u.call(O,O,h,r,f,d,g)),x=l}else{const O=e;S=xn(O.length>1?O(r,{attrs:l,slots:a,emit:c}):O(r,null)),x=e.props?l:N0(l)}}catch(O){jo.length=0,Ac(O,t,1),S=ee(gn)}let D=S;if(x&&_!==!1){const O=Object.keys(x),{shapeFlag:$}=D;O.length&&$&7&&(o&&O.some(pd)&&(x=x0(x,o)),D=Pi(D,x))}return n.dirs&&(D=Pi(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),S=D,Bl(G),S}const N0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ic(n))&&((e||(e={}))[n]=t[n]);return e},x0=(t,e)=>{const n={};for(const i in t)(!pd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function M0(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?jm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!kc(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jm(i,o,c):!0:!!o;return!1}function jm(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!kc(n,r))return!0}return!1}function R0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const P0=t=>t.__isSuspense;function L0(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):k0(t)}function kd(t,e){if(dt){let n=dt.provides;const i=dt.parent&&dt.parent.provides;i===n&&(n=dt.provides=Object.create(i)),n[t]=e}}function Sr(t,e,n=!1){const i=dt||Ht;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(i.proxy):e}}function V0(t,e){return Cd(t,null,e)}const qm={};function tn(t,e,n){return Cd(t,e,n)}function Cd(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=Ve){const a=dt;let l,c=!1,u=!1;if($e(t)?(l=()=>t.value,c=Ul(t)):Oi(t)?(l=()=>t,i=!0):ae(t)?(u=!0,c=t.some(x=>Oi(x)||Ul(x)),l=()=>t.map(x=>{if($e(x))return x.value;if(Oi(x))return yr(x);if(fe(x))return ri(x,a,2)})):fe(t)?e?l=()=>ri(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),pn(t,a,3,[d])}:l=En,e&&i){const x=l;l=()=>yr(x())}let h,d=x=>{h=S.onStop=()=>{ri(x,a,4)}};if(ua)return d=En,e?n&&pn(e,a,3,[l(),u?[]:void 0,d]):l(),En;let f=u?[]:qm;const g=()=>{if(!!S.active)if(e){const x=S.run();(i||c||(u?x.some((G,D)=>ia(G,f[D])):ia(x,f)))&&(h&&h(),pn(e,a,3,[x,f===qm?void 0:f,d]),f=x)}else S.run()};g.allowRecurse=!!e;let _;s==="sync"?_=g:s==="post"?_=()=>Qt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),_=()=>Ad(g));const S=new _d(l,_);return e?n?g():f=S.run():s==="post"?Qt(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&gd(a.scope.effects,S)}}function F0(t,e,n){const i=this.proxy,s=tt(t)?t.includes(".")?ny(i,t):()=>i[t]:t.bind(i,i);let r;fe(e)?r=e:(r=e.handler,n=e);const o=dt;Rr(this);const a=Cd(s,r.bind(i),n);return o?Rr(o):Ds(),a}function ny(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function yr(t,e){if(!je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))yr(t.value,e);else if(ae(t))for(let n=0;n<t.length;n++)yr(t[n],e);else if(Sv(t)||Er(t))t.forEach(n=>{yr(n,e)});else if(kv(t))for(const n in t)yr(t[n],e);return t}function iy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xc(()=>{t.isMounted=!0}),Mc(()=>{t.isUnmounting=!0}),t}const hn=[Function,Array],$0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},setup(t,{slots:e}){const n=Xr(),i=iy();let s;return()=>{const r=e.default&&Od(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==gn){o=_;break}}const a=ye(t),{mode:l}=a;if(i.isLeaving)return Mu(o);const c=Hm(o);if(!c)return Mu(o);const u=aa(c,a,i,n);la(c,u);const h=n.subTree,d=h&&Hm(h);let f=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();s===void 0?s=_:_!==s&&(s=_,f=!0)}if(d&&d.type!==gn&&(!ds(c,d)||f)){const _=aa(d,a,i,n);if(la(d,_),l==="out-in")return i.isLeaving=!0,_.afterLeave=()=>{i.isLeaving=!1,n.update()},Mu(o);l==="in-out"&&c.type!==gn&&(_.delayLeave=(S,x,G)=>{const D=ry(i,d);D[String(d.key)]=d,S._leaveCb=()=>{x(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=G})}return o}}},sy=$0;function ry(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function aa(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:_,onAppear:S,onAfterAppear:x,onAppearCancelled:G}=e,D=String(t.key),O=ry(n,t),$=(M,X)=>{M&&pn(M,i,9,X)},B=(M,X)=>{const ne=X[1];$(M,X),ae(M)?M.every(ie=>ie.length<=1)&&ne():M.length<=1&&ne()},U={mode:r,persisted:o,beforeEnter(M){let X=a;if(!n.isMounted)if(s)X=_||a;else return;M._leaveCb&&M._leaveCb(!0);const ne=O[D];ne&&ds(t,ne)&&ne.el._leaveCb&&ne.el._leaveCb(),$(X,[M])},enter(M){let X=l,ne=c,ie=u;if(!n.isMounted)if(s)X=S||l,ne=x||c,ie=G||u;else return;let q=!1;const ve=M._enterCb=Le=>{q||(q=!0,Le?$(ie,[M]):$(ne,[M]),U.delayedLeave&&U.delayedLeave(),M._enterCb=void 0)};X?B(X,[M,ve]):ve()},leave(M,X){const ne=String(t.key);if(M._enterCb&&M._enterCb(!0),n.isUnmounting)return X();$(h,[M]);let ie=!1;const q=M._leaveCb=ve=>{ie||(ie=!0,X(),ve?$(g,[M]):$(f,[M]),M._leaveCb=void 0,O[ne]===t&&delete O[ne])};O[ne]=t,d?B(d,[M,q]):q()},clone(M){return aa(M,e,n,i)}};return U}function Mu(t){if(Oc(t))return t=Pi(t),t.children=null,t}function Hm(t){return Oc(t)?t.children?t.children[0]:void 0:t}function la(t,e){t.shapeFlag&6&&t.component?la(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Od(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===De?(o.patchFlag&128&&s++,i=i.concat(Od(o.children,e,a))):(e||o.type!==gn)&&i.push(a!=null?Pi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Cc(t){return fe(t)?{setup:t,name:t.name}:t}const Bo=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function U0(t,e){oy(t,"a",e)}function B0(t,e){oy(t,"da",e)}function oy(t,e,n=dt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nc(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&j0(i,e,n,s),s=s.parent}}function j0(t,e,n,i){const s=Nc(e,t,i,!0);Nd(()=>{gd(i[e],s)},n)}function Nc(t,e,n=dt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qs(),Rr(n);const a=pn(e,n,t,o);return Ds(),Js(),a});return i?s.unshift(r):s.push(r),r}}const hi=t=>(e,n=dt)=>(!ua||t==="sp")&&Nc(t,e,n),q0=hi("bm"),xc=hi("m"),H0=hi("bu"),ay=hi("u"),Mc=hi("bum"),Nd=hi("um"),W0=hi("sp"),G0=hi("rtg"),K0=hi("rtc");function z0(t,e=dt){Nc("ec",t,e)}function ns(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Qs(),pn(l,n,8,[t.el,a,t,e]),Js())}}const xd="components";function xe(t,e){return cy(xd,t,!0,e)||t}const ly=Symbol();function Rc(t){return tt(t)?cy(xd,t,!1)||t:t||ly}function cy(t,e,n=!0,i=!1){const s=Ht||dt;if(s){const r=s.type;if(t===xd){const a=Ey(r,!1);if(a&&(a===e||a===Gn(e)||a===Sc(Gn(e))))return r}const o=Wm(s[t]||r[t],e)||Wm(s.appContext[t],e);return!o&&i?r:o}}function Wm(t,e){return t&&(t[e]||t[Gn(e)]||t[Sc(Gn(e))])}function Lt(t,e,n,i){let s;const r=n&&n[i];if(ae(t)||tt(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,r&&r[a])}}else s=[];return n&&(n[i]=s),s}function ph(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(ae(i))for(let s=0;s<i.length;s++)t[i[s].name]=i[s].fn;else i&&(t[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r.key=i.key,r}:i.fn)}return t}function ke(t,e,n={},i,s){if(Ht.isCE||Ht.parent&&Bo(Ht.parent)&&Ht.parent.isCE)return ee("slot",e==="default"?null:{name:e},i&&i());let r=t[e];r&&r._c&&(r._d=!1),C();const o=r&&uy(r(n)),a=ft(De,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function uy(t){return t.some(e=>Hl(e)?!(e.type===gn||e.type===De&&!uy(e.children)):!0)?t:null}const gh=t=>t?by(t)?Vd(t)||t.proxy:gh(t.parent):null,jl=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gh(t.parent),$root:t=>gh(t.root),$emit:t=>t.emit,$options:t=>Md(t),$forceUpdate:t=>t.f||(t.f=()=>Ad(t.update)),$nextTick:t=>t.n||(t.n=ws.bind(t.proxy)),$watch:t=>F0.bind(t)}),Y0={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(i!==Ve&&be(i,e))return o[e]=1,i[e];if(s!==Ve&&be(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&be(c,e))return o[e]=3,r[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];vh&&(o[e]=0)}}const u=jl[e];let h,d;if(u)return e==="$attrs"&&ln(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,be(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return s!==Ve&&be(s,e)?(s[e]=n,!0):i!==Ve&&be(i,e)?(i[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!n[o]||t!==Ve&&be(t,o)||e!==Ve&&be(e,o)||(a=r[0])&&be(a,o)||be(i,o)||be(jl,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let vh=!0;function Q0(t){const e=Md(t),n=t.proxy,i=t.ctx;vh=!1,e.beforeCreate&&Gm(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:S,beforeDestroy:x,beforeUnmount:G,destroyed:D,unmounted:O,render:$,renderTracked:B,renderTriggered:U,errorCaptured:M,serverPrefetch:X,expose:ne,inheritAttrs:ie,components:q,directives:ve,filters:Le}=e;if(c&&J0(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const we=o[ge];fe(we)&&(i[ge]=we.bind(n))}if(s){const ge=s.call(n,n);je(ge)&&(t.data=Xs(ge))}if(vh=!0,r)for(const ge in r){const we=r[ge],zt=fe(we)?we.bind(n,n):fe(we.get)?we.get.bind(n,n):En,yi=!fe(we)&&fe(we.set)?we.set.bind(n):En,Nt=st({get:zt,set:yi});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Ut=>Nt.value=Ut})}if(a)for(const ge in a)hy(a[ge],i,n,ge);if(l){const ge=fe(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(we=>{kd(we,ge[we])})}u&&Gm(u,t,"c");function Ce(ge,we){ae(we)?we.forEach(zt=>ge(zt.bind(n))):we&&ge(we.bind(n))}if(Ce(q0,h),Ce(xc,d),Ce(H0,f),Ce(ay,g),Ce(U0,_),Ce(B0,S),Ce(z0,M),Ce(K0,B),Ce(G0,U),Ce(Mc,G),Ce(Nd,O),Ce(W0,X),ae(ne))if(ne.length){const ge=t.exposed||(t.exposed={});ne.forEach(we=>{Object.defineProperty(ge,we,{get:()=>n[we],set:zt=>n[we]=zt})})}else t.exposed||(t.exposed={});$&&t.render===En&&(t.render=$),ie!=null&&(t.inheritAttrs=ie),q&&(t.components=q),ve&&(t.directives=ve)}function J0(t,e,n=En,i=!1){ae(t)&&(t=yh(t));for(const s in t){const r=t[s];let o;je(r)?"default"in r?o=Sr(r.from||s,r.default,!0):o=Sr(r.from||s):o=Sr(r),$e(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Gm(t,e,n){pn(ae(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,i){const s=i.includes(".")?ny(n,i):()=>n[i];if(tt(t)){const r=e[t];fe(r)&&tn(s,r)}else if(fe(t))tn(s,t.bind(n));else if(je(t))if(ae(t))t.forEach(r=>hy(r,e,n,i));else{const r=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(r)&&tn(s,r,t)}}function Md(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ql(l,c,o,!0)),ql(l,e,o)),je(e)&&r.set(e,l),l}function ql(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ql(t,r,n,!0),s&&s.forEach(o=>ql(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=X0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const X0={data:Km,props:as,emits:as,methods:as,computed:as,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:as,directives:as,watch:eT,provide:Km,inject:Z0};function Km(t,e){return e?t?function(){return gt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Z0(t,e){return as(yh(t),yh(e))}function yh(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function as(t,e){return t?gt(gt(Object.create(null),t),e):e}function eT(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const i in e)n[i]=Bt(t[i],e[i]);return n}function tT(t,e,n,i=!1){const s={},r={};$l(r,Pc,1),t.propsDefaults=Object.create(null),dy(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:f0(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function nT(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ye(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(kc(t.emitsOptions,d))continue;const f=e[d];if(l)if(be(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Gn(d);s[g]=wh(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{dy(t,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!be(e,h)&&((u=Ys(h))===h||!be(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wh(l,a,h,void 0,t,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!be(e,h)&&!0)&&(delete r[h],c=!0)}c&&ai(t,"set","$attrs")}function dy(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(kl(l))continue;const c=e[l];let u;s&&be(s,u=Gn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:kc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ye(n),c=a||Ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=wh(s,l,h,c[h],t,!be(c,h))}}return o}function wh(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=be(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&fe(l)){const{propsDefaults:c}=s;n in c?i=c[n]:(Rr(s),i=c[n]=l.call(null,e),Ds())}else i=l}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ys(n))&&(i=!0))}return i}function fy(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=fy(h,e,!0);gt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return je(t)&&i.set(t,Ir),Ir;if(ae(r))for(let u=0;u<r.length;u++){const h=Gn(r[u]);zm(h)&&(o[h]=Ve)}else if(r)for(const u in r){const h=Gn(u);if(zm(h)){const d=r[u],f=o[h]=ae(d)||fe(d)?{type:d}:d;if(f){const g=Jm(Boolean,f.type),_=Jm(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||be(f,"default"))&&a.push(h)}}}const c=[o,a];return je(t)&&i.set(t,c),c}function zm(t){return t[0]!=="$"}function Ym(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Qm(t,e){return Ym(t)===Ym(e)}function Jm(t,e){return ae(e)?e.findIndex(n=>Qm(n,t)):fe(e)&&Qm(e,t)?0:-1}const my=t=>t[0]==="_"||t==="$stable",Rd=t=>ae(t)?t.map(xn):[xn(t)],iT=(t,e,n)=>{if(e._n)return e;const i=Ie((...s)=>Rd(e(...s)),n);return i._c=!1,i},py=(t,e,n)=>{const i=t._ctx;for(const s in t){if(my(s))continue;const r=t[s];if(fe(r))e[s]=iT(s,r,i);else if(r!=null){const o=Rd(r);e[s]=()=>o}}},gy=(t,e)=>{const n=Rd(e);t.slots.default=()=>n},sT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),$l(e,"_",n)):py(e,t.slots={})}else t.slots={},e&&gy(t,e);$l(t.slots,Pc,1)},rT=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Ve;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(gt(s,e),!n&&a===1&&delete s._):(r=!e.$stable,py(e,s)),o=e}else e&&(gy(t,e),o={default:1});if(r)for(const a in s)!my(a)&&!(a in o)&&delete s[a]};function vy(){return{app:null,config:{isNativeTag:RE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oT=0;function aT(t,e){return function(i,s=null){fe(i)||(i=Object.assign({},i)),s!=null&&!je(s)&&(s=null);const r=vy(),o=new Set;let a=!1;const l=r.app={_uid:oT++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ST,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=ee(i,s);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Vd(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function _h(t,e,n,i,s=!1){if(ae(t)){t.forEach((d,f)=>_h(d,e&&(ae(e)?e[f]:e),n,i,s));return}if(Bo(i)&&!s)return;const r=i.shapeFlag&4?Vd(i.component)||i.component.proxy:i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,be(h,c)&&(h[c]=null)):$e(c)&&(c.value=null)),fe(l))ri(l,a,12,[o,u]);else{const d=tt(l),f=$e(l);if(d||f){const g=()=>{if(t.f){const _=d?u[l]:l.value;s?ae(_)&&gd(_,r):ae(_)?_.includes(r)||_.push(r):d?(u[l]=[r],be(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,be(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Qt(g,n)):g()}}}const Qt=L0;function lT(t){return cT(t)}function cT(t,e){const n=UE();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=En,cloneNode:g,insertStaticContent:_}=t,S=(m,y,E,p=null,v=null,T=null,k=!1,b=null,P=!!y.dynamicChildren)=>{if(m===y)return;m&&!ds(m,y)&&(p=Yt(m),W(m,v,T,!0),m=null),y.patchFlag===-2&&(P=!1,y.dynamicChildren=null);const{type:N,ref:Q,shapeFlag:K}=y;switch(N){case Pd:x(m,y,E,p);break;case gn:G(m,y,E,p);break;case Ru:m==null&&D(y,E,p,k);break;case De:ve(m,y,E,p,v,T,k,b,P);break;default:K&1?B(m,y,E,p,v,T,k,b,P):K&6?Le(m,y,E,p,v,T,k,b,P):(K&64||K&128)&&N.process(m,y,E,p,v,T,k,b,P,kn)}Q!=null&&v&&_h(Q,m&&m.ref,T,y||m,!y)},x=(m,y,E,p)=>{if(m==null)i(y.el=a(y.children),E,p);else{const v=y.el=m.el;y.children!==m.children&&c(v,y.children)}},G=(m,y,E,p)=>{m==null?i(y.el=l(y.children||""),E,p):y.el=m.el},D=(m,y,E,p)=>{[m.el,m.anchor]=_(m.children,y,E,p,m.el,m.anchor)},O=({el:m,anchor:y},E,p)=>{let v;for(;m&&m!==y;)v=d(m),i(m,E,p),m=v;i(y,E,p)},$=({el:m,anchor:y})=>{let E;for(;m&&m!==y;)E=d(m),s(m),m=E;s(y)},B=(m,y,E,p,v,T,k,b,P)=>{k=k||y.type==="svg",m==null?U(y,E,p,v,T,k,b,P):ne(m,y,v,T,k,b,P)},U=(m,y,E,p,v,T,k,b)=>{let P,N;const{type:Q,props:K,shapeFlag:Y,transition:le,patchFlag:me,dirs:Re}=m;if(m.el&&g!==void 0&&me===-1)P=m.el=g(m.el);else{if(P=m.el=o(m.type,T,K&&K.is,K),Y&8?u(P,m.children):Y&16&&X(m.children,P,null,p,v,T&&Q!=="foreignObject",k,b),Re&&ns(m,null,p,"created"),K){for(const Ue in K)Ue!=="value"&&!kl(Ue)&&r(P,Ue,null,K[Ue],T,m.children,p,v,xt);"value"in K&&r(P,"value",null,K.value),(N=K.onVnodeBeforeMount)&&On(N,p,m)}M(P,m,m.scopeId,k,p)}Re&&ns(m,null,p,"beforeMount");const Pe=(!v||v&&!v.pendingBranch)&&le&&!le.persisted;Pe&&le.beforeEnter(P),i(P,y,E),((N=K&&K.onVnodeMounted)||Pe||Re)&&Qt(()=>{N&&On(N,p,m),Pe&&le.enter(P),Re&&ns(m,null,p,"mounted")},v)},M=(m,y,E,p,v)=>{if(E&&f(m,E),p)for(let T=0;T<p.length;T++)f(m,p[T]);if(v){let T=v.subTree;if(y===T){const k=v.vnode;M(m,k,k.scopeId,k.slotScopeIds,v.parent)}}},X=(m,y,E,p,v,T,k,b,P=0)=>{for(let N=P;N<m.length;N++){const Q=m[N]=b?Ti(m[N]):xn(m[N]);S(null,Q,y,E,p,v,T,k,b)}},ne=(m,y,E,p,v,T,k)=>{const b=y.el=m.el;let{patchFlag:P,dynamicChildren:N,dirs:Q}=y;P|=m.patchFlag&16;const K=m.props||Ve,Y=y.props||Ve;let le;E&&is(E,!1),(le=Y.onVnodeBeforeUpdate)&&On(le,E,y,m),Q&&ns(y,m,E,"beforeUpdate"),E&&is(E,!0);const me=v&&y.type!=="foreignObject";if(N?ie(m.dynamicChildren,N,b,E,p,me,T):k||zt(m,y,b,null,E,p,me,T,!1),P>0){if(P&16)q(b,y,K,Y,E,p,v);else if(P&2&&K.class!==Y.class&&r(b,"class",null,Y.class,v),P&4&&r(b,"style",K.style,Y.style,v),P&8){const Re=y.dynamicProps;for(let Pe=0;Pe<Re.length;Pe++){const Ue=Re[Pe],yn=K[Ue],ur=Y[Ue];(ur!==yn||Ue==="value")&&r(b,Ue,yn,ur,v,m.children,E,p,xt)}}P&1&&m.children!==y.children&&u(b,y.children)}else!k&&N==null&&q(b,y,K,Y,E,p,v);((le=Y.onVnodeUpdated)||Q)&&Qt(()=>{le&&On(le,E,y,m),Q&&ns(y,m,E,"updated")},p)},ie=(m,y,E,p,v,T,k)=>{for(let b=0;b<y.length;b++){const P=m[b],N=y[b],Q=P.el&&(P.type===De||!ds(P,N)||P.shapeFlag&70)?h(P.el):E;S(P,N,Q,null,p,v,T,k,!0)}},q=(m,y,E,p,v,T,k)=>{if(E!==p){for(const b in p){if(kl(b))continue;const P=p[b],N=E[b];P!==N&&b!=="value"&&r(m,b,N,P,k,y.children,v,T,xt)}if(E!==Ve)for(const b in E)!kl(b)&&!(b in p)&&r(m,b,E[b],null,k,y.children,v,T,xt);"value"in p&&r(m,"value",E.value,p.value)}},ve=(m,y,E,p,v,T,k,b,P)=>{const N=y.el=m?m.el:a(""),Q=y.anchor=m?m.anchor:a("");let{patchFlag:K,dynamicChildren:Y,slotScopeIds:le}=y;le&&(b=b?b.concat(le):le),m==null?(i(N,E,p),i(Q,E,p),X(y.children,E,Q,v,T,k,b,P)):K>0&&K&64&&Y&&m.dynamicChildren?(ie(m.dynamicChildren,Y,E,v,T,k,b),(y.key!=null||v&&y===v.subTree)&&yy(m,y,!0)):zt(m,y,E,Q,v,T,k,b,P)},Le=(m,y,E,p,v,T,k,b,P)=>{y.slotScopeIds=b,m==null?y.shapeFlag&512?v.ctx.activate(y,E,p,k,P):Te(y,E,p,v,T,k,P):Ce(m,y,P)},Te=(m,y,E,p,v,T,k)=>{const b=m.component=vT(m,p,v);if(Oc(m)&&(b.ctx.renderer=kn),yT(b),b.asyncDep){if(v&&v.registerDep(b,ge),!m.el){const P=b.subTree=ee(gn);G(null,P,y,E)}return}ge(b,m,y,E,v,T,k)},Ce=(m,y,E)=>{const p=y.component=m.component;if(M0(m,y,E))if(p.asyncDep&&!p.asyncResolved){we(p,y,E);return}else p.next=y,A0(p.update),p.update();else y.el=m.el,p.vnode=y},ge=(m,y,E,p,v,T,k)=>{const b=()=>{if(m.isMounted){let{next:Q,bu:K,u:Y,parent:le,vnode:me}=m,Re=Q,Pe;is(m,!1),Q?(Q.el=me.el,we(m,Q,k)):Q=me,K&&Nu(K),(Pe=Q.props&&Q.props.onVnodeBeforeUpdate)&&On(Pe,le,Q,me),is(m,!0);const Ue=xu(m),yn=m.subTree;m.subTree=Ue,S(yn,Ue,h(yn.el),Yt(yn),m,v,T),Q.el=Ue.el,Re===null&&R0(m,Ue.el),Y&&Qt(Y,v),(Pe=Q.props&&Q.props.onVnodeUpdated)&&Qt(()=>On(Pe,le,Q,me),v)}else{let Q;const{el:K,props:Y}=y,{bm:le,m:me,parent:Re}=m,Pe=Bo(y);if(is(m,!1),le&&Nu(le),!Pe&&(Q=Y&&Y.onVnodeBeforeMount)&&On(Q,Re,y),is(m,!0),K&&go){const Ue=()=>{m.subTree=xu(m),go(K,m.subTree,m,v,null)};Pe?y.type.__asyncLoader().then(()=>!m.isUnmounted&&Ue()):Ue()}else{const Ue=m.subTree=xu(m);S(null,Ue,E,p,m,v,T),y.el=Ue.el}if(me&&Qt(me,v),!Pe&&(Q=Y&&Y.onVnodeMounted)){const Ue=y;Qt(()=>On(Q,Re,Ue),v)}(y.shapeFlag&256||Re&&Bo(Re.vnode)&&Re.vnode.shapeFlag&256)&&m.a&&Qt(m.a,v),m.isMounted=!0,y=E=p=null}},P=m.effect=new _d(b,()=>Ad(N),m.scope),N=m.update=()=>P.run();N.id=m.uid,is(m,!0),N()},we=(m,y,E)=>{y.component=m;const p=m.vnode.props;m.vnode=y,m.next=null,nT(m,y.props,p,E),rT(m,y.children,E),Qs(),Bm(),Js()},zt=(m,y,E,p,v,T,k,b,P=!1)=>{const N=m&&m.children,Q=m?m.shapeFlag:0,K=y.children,{patchFlag:Y,shapeFlag:le}=y;if(Y>0){if(Y&128){Nt(N,K,E,p,v,T,k,b,P);return}else if(Y&256){yi(N,K,E,p,v,T,k,b,P);return}}le&8?(Q&16&&xt(N,v,T),K!==N&&u(E,K)):Q&16?le&16?Nt(N,K,E,p,v,T,k,b,P):xt(N,v,T,!0):(Q&8&&u(E,""),le&16&&X(K,E,p,v,T,k,b,P))},yi=(m,y,E,p,v,T,k,b,P)=>{m=m||Ir,y=y||Ir;const N=m.length,Q=y.length,K=Math.min(N,Q);let Y;for(Y=0;Y<K;Y++){const le=y[Y]=P?Ti(y[Y]):xn(y[Y]);S(m[Y],le,E,null,v,T,k,b,P)}N>Q?xt(m,v,T,!0,!1,K):X(y,E,p,v,T,k,b,P,K)},Nt=(m,y,E,p,v,T,k,b,P)=>{let N=0;const Q=y.length;let K=m.length-1,Y=Q-1;for(;N<=K&&N<=Y;){const le=m[N],me=y[N]=P?Ti(y[N]):xn(y[N]);if(ds(le,me))S(le,me,E,null,v,T,k,b,P);else break;N++}for(;N<=K&&N<=Y;){const le=m[K],me=y[Y]=P?Ti(y[Y]):xn(y[Y]);if(ds(le,me))S(le,me,E,null,v,T,k,b,P);else break;K--,Y--}if(N>K){if(N<=Y){const le=Y+1,me=le<Q?y[le].el:p;for(;N<=Y;)S(null,y[N]=P?Ti(y[N]):xn(y[N]),E,me,v,T,k,b,P),N++}}else if(N>Y)for(;N<=K;)W(m[N],v,T,!0),N++;else{const le=N,me=N,Re=new Map;for(N=me;N<=Y;N++){const sn=y[N]=P?Ti(y[N]):xn(y[N]);sn.key!=null&&Re.set(sn.key,N)}let Pe,Ue=0;const yn=Y-me+1;let ur=!1,Cm=0;const vo=new Array(yn);for(N=0;N<yn;N++)vo[N]=0;for(N=le;N<=K;N++){const sn=m[N];if(Ue>=yn){W(sn,v,T,!0);continue}let Cn;if(sn.key!=null)Cn=Re.get(sn.key);else for(Pe=me;Pe<=Y;Pe++)if(vo[Pe-me]===0&&ds(sn,y[Pe])){Cn=Pe;break}Cn===void 0?W(sn,v,T,!0):(vo[Cn-me]=N+1,Cn>=Cm?Cm=Cn:ur=!0,S(sn,y[Cn],E,null,v,T,k,b,P),Ue++)}const Om=ur?uT(vo):Ir;for(Pe=Om.length-1,N=yn-1;N>=0;N--){const sn=me+N,Cn=y[sn],Nm=sn+1<Q?y[sn+1].el:p;vo[N]===0?S(null,Cn,E,Nm,v,T,k,b,P):ur&&(Pe<0||N!==Om[Pe]?Ut(Cn,E,Nm,2):Pe--)}}},Ut=(m,y,E,p,v=null)=>{const{el:T,type:k,transition:b,children:P,shapeFlag:N}=m;if(N&6){Ut(m.component.subTree,y,E,p);return}if(N&128){m.suspense.move(y,E,p);return}if(N&64){k.move(m,y,E,kn);return}if(k===De){i(T,y,E);for(let K=0;K<P.length;K++)Ut(P[K],y,E,p);i(m.anchor,y,E);return}if(k===Ru){O(m,y,E);return}if(p!==2&&N&1&&b)if(p===0)b.beforeEnter(T),i(T,y,E),Qt(()=>b.enter(T),v);else{const{leave:K,delayLeave:Y,afterLeave:le}=b,me=()=>i(T,y,E),Re=()=>{K(T,()=>{me(),le&&le()})};Y?Y(T,me,Re):Re()}else i(T,y,E)},W=(m,y,E,p=!1,v=!1)=>{const{type:T,props:k,ref:b,children:P,dynamicChildren:N,shapeFlag:Q,patchFlag:K,dirs:Y}=m;if(b!=null&&_h(b,null,E,m,!0),Q&256){y.ctx.deactivate(m);return}const le=Q&1&&Y,me=!Bo(m);let Re;if(me&&(Re=k&&k.onVnodeBeforeUnmount)&&On(Re,y,m),Q&6)po(m.component,E,p);else{if(Q&128){m.suspense.unmount(E,p);return}le&&ns(m,null,y,"beforeUnmount"),Q&64?m.type.remove(m,y,E,v,kn,p):N&&(T!==De||K>0&&K&64)?xt(N,y,E,!1,!0):(T===De&&K&384||!v&&Q&16)&&xt(P,y,E),p&&Ne(m)}(me&&(Re=k&&k.onVnodeUnmounted)||le)&&Qt(()=>{Re&&On(Re,y,m),le&&ns(m,null,y,"unmounted")},E)},Ne=m=>{const{type:y,el:E,anchor:p,transition:v}=m;if(y===De){It(E,p);return}if(y===Ru){$(m);return}const T=()=>{s(E),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(m.shapeFlag&1&&v&&!v.persisted){const{leave:k,delayLeave:b}=v,P=()=>k(E,T);b?b(m.el,T,P):P()}else T()},It=(m,y)=>{let E;for(;m!==y;)E=d(m),s(m),m=E;s(y)},po=(m,y,E)=>{const{bum:p,scope:v,update:T,subTree:k,um:b}=m;p&&Nu(p),v.stop(),T&&(T.active=!1,W(k,m,y,E)),b&&Qt(b,y),Qt(()=>{m.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},xt=(m,y,E,p=!1,v=!1,T=0)=>{for(let k=T;k<m.length;k++)W(m[k],y,E,p,v)},Yt=m=>m.shapeFlag&6?Yt(m.component.subTree):m.shapeFlag&128?m.suspense.next():d(m.anchor||m.el),An=(m,y,E)=>{m==null?y._vnode&&W(y._vnode,null,null,!0):S(y._vnode||null,m,y,null,null,null,E),Bm(),Xv(),y._vnode=m},kn={p:S,um:W,m:Ut,r:Ne,mt:Te,mc:X,pc:zt,pbc:ie,n:Yt,o:t};let cr,go;return e&&([cr,go]=e(kn)),{render:An,hydrate:cr,createApp:aT(An,cr)}}function is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yy(t,e,n=!1){const i=t.children,s=e.children;if(ae(i)&&ae(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ti(s[r]),a.el=o.el),n||yy(o,a))}}function uT(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const hT=t=>t.__isTeleport,De=Symbol(void 0),Pd=Symbol(void 0),gn=Symbol(void 0),Ru=Symbol(void 0),jo=[];let bn=null;function C(t=!1){jo.push(bn=t?null:[])}function dT(){jo.pop(),bn=jo[jo.length-1]||null}let ca=1;function Xm(t){ca+=t}function wy(t){return t.dynamicChildren=ca>0?bn||Ir:null,dT(),ca>0&&bn&&bn.push(t),t}function V(t,e,n,i,s,r){return wy(A(t,e,n,i,s,r,!0))}function ft(t,e,n,i,s){return wy(ee(t,e,n,i,s,!0))}function Hl(t){return t?t.__v_isVNode===!0:!1}function ds(t,e){return t.type===e.type&&t.key===e.key}const Pc="__vInternal",_y=({key:t})=>t!=null?t:null,Cl=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||$e(t)||fe(t)?{i:Ht,r:t,k:e,f:!!n}:t:null;function A(t,e=null,n=null,i=0,s=null,r=t===De?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_y(e),ref:e&&Cl(e),scopeId:ty,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ld(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),ca>0&&!o&&bn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bn.push(l),l}const ee=fT;function fT(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===ly)&&(t=gn),Hl(t)){const a=Pi(t,e,!0);return n&&Ld(a,n),ca>0&&!r&&bn&&(a.shapeFlag&6?bn[bn.indexOf(t)]=a:bn.push(a)),a.patchFlag|=-2,a}if(TT(t)&&(t=t.__vccOpts),e){e=mT(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=Oe(a)),je(l)&&(qv(l)&&!ae(l)&&(l=gt({},l)),e.style=Rt(l))}const o=tt(t)?1:P0(t)?128:hT(t)?64:je(t)?4:fe(t)?2:0;return A(t,e,n,i,s,o,r,!0)}function mT(t){return t?qv(t)||Pc in t?gt({},t):t:null}function Pi(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,a=e?bh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_y(a),ref:e&&e.ref?n&&s?ae(s)?s.concat(Cl(e)):[s,Cl(e)]:Cl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),el:t.el,anchor:t.anchor}}function Tt(t=" ",e=0){return ee(Pd,null,t,e)}function re(t="",e=!1){return e?(C(),ft(gn,null,t)):ee(gn,null,t)}function xn(t){return t==null||typeof t=="boolean"?ee(gn):ae(t)?ee(De,null,t.slice()):typeof t=="object"?Ti(t):ee(Pd,null,String(t))}function Ti(t){return t.el===null||t.memo?t:Pi(t)}function Ld(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ld(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Pc in e)?e._ctx=Ht:s===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),i&64?(n=16,e=[Tt(e)]):n=8);t.children=e,t.shapeFlag|=n}function bh(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Oe([e.class,i.class]));else if(s==="style")e.style=Rt([e.style,i.style]);else if(Ic(s)){const r=e[s],o=i[s];o&&r!==o&&!(ae(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(t,e,n,i=null){pn(t,e,7,[n,i])}const pT=vy();let gT=0;function vT(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||pT,r={uid:gT++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ov(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fy(i,s),emitsOptions:ey(i,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:i.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=O0.bind(null,r),t.ce&&t.ce(r),r}let dt=null;const Xr=()=>dt||Ht,Rr=t=>{dt=t,t.scope.on()},Ds=()=>{dt&&dt.scope.off(),dt=null};function by(t){return t.vnode.shapeFlag&4}let ua=!1;function yT(t,e=!1){ua=e;const{props:n,children:i}=t.vnode,s=by(t);tT(t,n,s,e),sT(t,i);const r=s?wT(t,e):void 0;return ua=!1,r}function wT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ns(new Proxy(t.ctx,Y0));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?bT(t):null;Rr(t),Qs();const r=ri(i,t,0,[t.props,s]);if(Js(),Ds(),Dv(r)){if(r.then(Ds,Ds),e)return r.then(o=>{Zm(t,o,e)}).catch(o=>{Ac(o,t,0)});t.asyncDep=r}else Zm(t,r,e)}else Iy(t,e)}function Zm(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=Gv(e)),Iy(t,n)}let ep;function Iy(t,e,n){const i=t.type;if(!t.render){if(!e&&ep&&!i.render){const s=i.template||Md(t).template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=gt(gt({isCustomElement:r,delimiters:a},o),l);i.render=ep(s,c)}}t.render=i.render||En}Rr(t),Qs(),Q0(t),Js(),Ds()}function _T(t){return new Proxy(t.attrs,{get(e,n){return ln(t,"get","$attrs"),e[n]}})}function bT(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=_T(t))},slots:t.slots,emit:t.emit,expose:e}}function Vd(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gv(Ns(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jl)return jl[n](t)}}))}const IT=/(?:^|[-_])(\w)/g,ET=t=>t.replace(IT,e=>e.toUpperCase()).replace(/[-_]/g,"");function Ey(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Ty(t,e,n=!1){let i=Ey(e);if(!i&&e.__file){const s=e.__file.match(/([^/\\]+)\.\w+$/);s&&(i=s[1])}if(!i&&t&&t.parent){const s=r=>{for(const o in r)if(r[o]===e)return o};i=s(t.components||t.parent.type.components)||s(t.appContext.components)}return i?ET(i):n?"App":"Anonymous"}function TT(t){return fe(t)&&"__vccOpts"in t}const st=(t,e)=>_0(t,e,ua);function ha(t,e,n){const i=arguments.length;return i===2?je(e)&&!ae(e)?Hl(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Hl(n)&&(n=[n]),ee(t,e,n))}const ST="3.2.39",DT="http://www.w3.org/2000/svg",fs=typeof document<"u"?document:null,tp=fs&&fs.createElement("template"),AT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?fs.createElementNS(DT,t):fs.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>fs.createTextNode(t),createComment:t=>fs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{tp.innerHTML=i?`<svg>${t}</svg>`:t;const a=tp.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kT(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function CT(t,e,n){const i=t.style,s=tt(n);if(n&&!s){for(const r in n)Ih(i,r,n[r]);if(e&&!tt(e))for(const r in e)n[r]==null&&Ih(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const np=/\s*!important$/;function Ih(t,e,n){if(ae(n))n.forEach(i=>Ih(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=OT(t,e);np.test(n)?t.setProperty(Ys(i),n.replace(np,""),"important"):t[i]=n}}const ip=["Webkit","Moz","ms"],Pu={};function OT(t,e){const n=Pu[e];if(n)return n;let i=Gn(e);if(i!=="filter"&&i in t)return Pu[e]=i;i=Sc(i);for(let s=0;s<ip.length;s++){const r=ip[s]+i;if(r in t)return Pu[e]=r}return e}const sp="http://www.w3.org/1999/xlink";function NT(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sp,e.slice(6,e.length)):t.setAttributeNS(sp,e,n);else{const r=OE(e);n==null||r&&!Ev(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function xT(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ev(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Sy,MT]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Eh=0;const RT=Promise.resolve(),PT=()=>{Eh=0},LT=()=>Eh||(RT.then(PT),Eh=Sy());function VT(t,e,n,i){t.addEventListener(e,n,i)}function FT(t,e,n,i){t.removeEventListener(e,n,i)}function $T(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=UT(e);if(i){const c=r[e]=BT(i,s);VT(t,a,c,l)}else o&&(FT(t,a,o,l),r[e]=void 0)}}const rp=/(?:Once|Passive|Capture)$/;function UT(t){let e;if(rp.test(t)){e={};let i;for(;i=t.match(rp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ys(t.slice(2)),e]}function BT(t,e){const n=i=>{const s=i.timeStamp||Sy();(MT||s>=n.attached-1)&&pn(jT(i,n.value),e,5,[i])};return n.value=t,n.attached=LT(),n}function jT(t,e){if(ae(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const op=/^on[a-z]/,qT=(t,e,n,i,s=!1,r,o,a,l)=>{e==="class"?kT(t,i,s):e==="style"?CT(t,n,i):Ic(e)?pd(e)||$T(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):HT(t,e,i,s))?xT(t,e,i,r,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),NT(t,e,i,s))};function HT(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&op.test(e)&&fe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||op.test(e)&&tt(n)?!1:e in t}const _i="transition",yo="animation",Pr=(t,{slots:e})=>ha(sy,Ay(t),e);Pr.displayName="Transition";const Dy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},WT=Pr.props=gt({},sy.props,Dy),ss=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},ap=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function Ay(t){const e={};for(const q in t)q in Dy||(e[q]=t[q]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=GT(s),_=g&&g[0],S=g&&g[1],{onBeforeEnter:x,onEnter:G,onEnterCancelled:D,onLeave:O,onLeaveCancelled:$,onBeforeAppear:B=x,onAppear:U=G,onAppearCancelled:M=D}=e,X=(q,ve,Le)=>{Ei(q,ve?u:a),Ei(q,ve?c:o),Le&&Le()},ne=(q,ve)=>{q._isLeaving=!1,Ei(q,h),Ei(q,f),Ei(q,d),ve&&ve()},ie=q=>(ve,Le)=>{const Te=q?U:G,Ce=()=>X(ve,q,Le);ss(Te,[ve,Ce]),lp(()=>{Ei(ve,q?l:r),Jn(ve,q?u:a),ap(Te)||cp(ve,i,_,Ce)})};return gt(e,{onBeforeEnter(q){ss(x,[q]),Jn(q,r),Jn(q,o)},onBeforeAppear(q){ss(B,[q]),Jn(q,l),Jn(q,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(q,ve){q._isLeaving=!0;const Le=()=>ne(q,ve);Jn(q,h),Cy(),Jn(q,d),lp(()=>{!q._isLeaving||(Ei(q,h),Jn(q,f),ap(O)||cp(q,i,S,Le))}),ss(O,[q,Le])},onEnterCancelled(q){X(q,!1),ss(D,[q])},onAppearCancelled(q){X(q,!0),ss(M,[q])},onLeaveCancelled(q){ne(q),ss($,[q])}})}function GT(t){if(t==null)return null;if(je(t))return[Lu(t.enter),Lu(t.leave)];{const e=Lu(t);return[e,e]}}function Lu(t){return Cv(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ei(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let KT=0;function cp(t,e,n,i){const s=t._endId=++KT,r=()=>{s===t._endId&&i()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=ky(t,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function ky(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),s=i(_i+"Delay"),r=i(_i+"Duration"),o=up(s,r),a=i(yo+"Delay"),l=i(yo+"Duration"),c=up(a,l);let u=null,h=0,d=0;e===_i?o>0&&(u=_i,h=o,d=r.length):e===yo?c>0&&(u=yo,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?_i:yo:null,d=u?u===_i?r.length:l.length:0);const f=u===_i&&/\b(transform|all)(,|$)/.test(n[_i+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>hp(n)+hp(t[i])))}function hp(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Cy(){return document.body.offsetHeight}const Oy=new WeakMap,Ny=new WeakMap,zT={name:"TransitionGroup",props:gt({},WT,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Xr(),i=iy();let s,r;return ay(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!ZT(s[0].el,n.vnode.el,o))return;s.forEach(QT),s.forEach(JT);const a=s.filter(XT);Cy(),a.forEach(l=>{const c=l.el,u=c.style;Jn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c._moveCb=null,Ei(c,o))};c.addEventListener("transitionend",h)})}),()=>{const o=ye(t),a=Ay(o);let l=o.tag||De;s=r,r=e.default?Od(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&la(u,aa(u,a,i,n))}if(s)for(let c=0;c<s.length;c++){const u=s[c];la(u,aa(u,a,i,n)),Oy.set(u,u.el.getBoundingClientRect())}return ee(l,null,r)}}},YT=zT;function QT(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function JT(t){Ny.set(t,t.el.getBoundingClientRect())}function XT(t){const e=Oy.get(t),n=Ny.get(t),i=e.left-n.left,s=e.top-n.top;if(i||s){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",t}}function ZT(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:r}=ky(i);return s.removeChild(i),r}const eS=["ctrl","shift","alt","meta"],tS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eS.some(n=>t[`${n}Key`]&&!e.includes(n))},ht=(t,e)=>(n,...i)=>{for(let s=0;s<e.length;s++){const r=tS[e[s]];if(r&&r(n,e))return}return t(n,...i)},nS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dp=(t,e)=>n=>{if(!("key"in n))return;const i=Ys(n.key);if(e.some(s=>s===i||nS[s]===i))return t(n)},iS=gt({patchProp:qT},AT);let fp;function sS(){return fp||(fp=lT(iS))}const rS=(...t)=>{const e=sS().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=oS(i);if(!s)return;const r=e._component;!fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function oS(t){return tt(t)?document.querySelector(t):t}var aS=!1;/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let xy;const Lc=t=>xy=t,My=Symbol();function Th(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var qo;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qo||(qo={}));function lS(){const t=Nv(!0),e=t.run(()=>mn({}));let n=[],i=[];const s=Ns({install(r){Lc(s),s._a=r,r.provide(My,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return!this._a&&!aS?i.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ry=()=>{};function mp(t,e,n,i=Ry){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&Xr()&&Nd(s),s}function hr(t,...e){t.slice().forEach(n=>{n(...e)})}function Sh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Th(s)&&Th(i)&&t.hasOwnProperty(n)&&!$e(i)&&!Oi(i)?t[n]=Sh(s,i):t[n]=i}return t}const cS=Symbol();function uS(t){return!Th(t)||!t.hasOwnProperty(cS)}const{assign:ei}=Object;function hS(t){return!!($e(t)&&t.effect)}function dS(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=v0(n.state.value[t]);return ei(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=Ns(st(()=>{Lc(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=Py(t,c,e,n,i,!0),l.$reset=function(){const h=s?s():{};this.$patch(d=>{ei(d,h)})},l}function Py(t,e,n={},i,s,r){let o;const a=ei({actions:{}},n),l={deep:!0};let c,u,h=Ns([]),d=Ns([]),f;const g=i.state.value[t];!r&&!g&&(i.state.value[t]={}),mn({});let _;function S(U){let M;c=u=!1,typeof U=="function"?(U(i.state.value[t]),M={type:qo.patchFunction,storeId:t,events:f}):(Sh(i.state.value[t],U),M={type:qo.patchObject,payload:U,storeId:t,events:f});const X=_=Symbol();ws().then(()=>{_===X&&(c=!0)}),u=!0,hr(h,M,i.state.value[t])}const x=Ry;function G(){o.stop(),h=[],d=[],i._s.delete(t)}function D(U,M){return function(){Lc(i);const X=Array.from(arguments),ne=[],ie=[];function q(Te){ne.push(Te)}function ve(Te){ie.push(Te)}hr(d,{args:X,name:U,store:$,after:q,onError:ve});let Le;try{Le=M.apply(this&&this.$id===t?this:$,X)}catch(Te){throw hr(ie,Te),Te}return Le instanceof Promise?Le.then(Te=>(hr(ne,Te),Te)).catch(Te=>(hr(ie,Te),Promise.reject(Te))):(hr(ne,Le),Le)}}const O={_p:i,$id:t,$onAction:mp.bind(null,d),$patch:S,$reset:x,$subscribe(U,M={}){const X=mp(h,U,M.detached,()=>ne()),ne=o.run(()=>tn(()=>i.state.value[t],ie=>{(M.flush==="sync"?u:c)&&U({storeId:t,type:qo.direct,events:f},ie)},ei({},l,M)));return X},$dispose:G},$=Xs(ei({},O));i._s.set(t,$);const B=i._e.run(()=>(o=Nv(),o.run(()=>e())));for(const U in B){const M=B[U];if($e(M)&&!hS(M)||Oi(M))r||(g&&uS(M)&&($e(M)?M.value=g[U]:Sh(M,g[U])),i.state.value[t][U]=M);else if(typeof M=="function"){const X=D(U,M);B[U]=X,a.actions[U]=M}}return ei($,B),ei(ye($),B),Object.defineProperty($,"$state",{get:()=>i.state.value[t],set:U=>{S(M=>{ei(M,U)})}}),i._p.forEach(U=>{ei($,o.run(()=>U({store:$,app:i._a,pinia:i,options:a})))}),g&&r&&n.hydrate&&n.hydrate($.$state,g),c=!0,u=!0,$}function Vc(t,e,n){let i,s;const r=typeof e=="function";typeof t=="string"?(i=t,s=r?n:e):(s=t,i=t.id);function o(a,l){const c=Xr();return a=a||c&&Sr(My),a&&Lc(a),a=xy,a._s.has(i)||(r?Py(i,e,s,a):dS(i,s,a)),a._s.get(i)}return o.$id=i,o}let fS="Store";function Ly(...t){return t.reduce((e,n)=>(e[n.$id+fS]=function(){return n(this.$pinia)},e),{})}function Vy(t,e){return Array.isArray(e)?e.reduce((n,i)=>(n[i]=function(){return t(this.$pinia)[i]},n),{}):Object.keys(e).reduce((n,i)=>(n[i]=function(){const s=t(this.$pinia),r=e[i];return typeof r=="function"?r.call(this,s):s[r]},n),{})}function Fd(t,e){return Array.isArray(e)?e.reduce((n,i)=>(n[i]=function(...s){return t(this.$pinia)[i](...s)},n),{}):Object.keys(e).reduce((n,i)=>(n[i]=function(...s){return t(this.$pinia)[e[i]](...s)},n),{})}function $d(t,e){return Array.isArray(e)?e.reduce((n,i)=>(n[i]={get(){return t(this.$pinia)[i]},set(s){return t(this.$pinia)[i]=s}},n),{}):Object.keys(e).reduce((n,i)=>(n[i]={get(){return t(this.$pinia)[e[i]]},set(s){return t(this.$pinia)[e[i]]=s}},n),{})}/**
  * vee-validate v4.6.7
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */function xs(t){return typeof t=="function"}function Ho(t){return t==null}const Ms=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function Fy(t){return Number(t)>=0}function mS(t){const e=parseFloat(t);return isNaN(e)?t:e}const $y={};function wn(t,e){gS(t,e),$y[t]=e}function pS(t){return $y[t]}function gS(t,e){if(!xs(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const Zs=Symbol("vee-validate-form"),vS=Symbol("vee-validate-field-instance"),Wl=Symbol("Default empty value");function Dh(t){return xs(t)&&!!t.__locatorRef}function Wo(t){return!!t&&xs(t.validate)}function Lr(t){return t==="checkbox"||t==="radio"}function yS(t){return Ms(t)||Array.isArray(t)}function Uy(t){return Array.isArray(t)?t.length===0:Ms(t)&&Object.keys(t).length===0}function Fc(t){return/^\[.+\]$/i.test(t)}function wS(t){return By(t)&&t.multiple}function By(t){return t.tagName==="SELECT"}function _S(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function bS(t,e){return!_S(t,e)&&e.type!=="file"&&!Lr(e.type)}function jy(t){return Ud(t)&&t.target&&"submit"in t.target}function Ud(t){return t?!!(typeof Event<"u"&&xs(Event)&&t instanceof Event||t&&t.srcElement):!1}function pp(t,e){return e in t&&t[e]!==Wl}var gp=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,s,r;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(s=i;s--!==0;)if(!t(e[s],n[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(r=Object.keys(e),i=r.length,i!==Object.keys(n).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,r[s]))return!1;for(s=i;s--!==0;){var o=r[s];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};function Bd(t){return Fc(t)?t.replace(/\[|\]/gi,""):t}function Xe(t,e,n){return t?Fc(e)?t[Bd(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s,r)=>yS(s)&&r in s?s[r]:n,t):n}function ls(t,e,n){if(Fc(e)){t[Bd(e)]=n;return}const i=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let r=0;r<i.length;r++){if(r===i.length-1){s[i[r]]=n;return}(!(i[r]in s)||Ho(s[i[r]]))&&(s[i[r]]=Fy(i[r+1])?[]:{}),s=s[i[r]]}}function Vu(t,e){if(Array.isArray(t)&&Fy(e)){t.splice(Number(e),1);return}Ms(t)&&delete t[e]}function Fu(t,e){if(Fc(e)){delete t[Bd(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let r=0;r<n.length;r++){if(r===n.length-1){Vu(i,n[r]);break}if(!(n[r]in i)||Ho(i[n[r]]))break;i=i[n[r]]}const s=n.map((r,o)=>Xe(t,n.slice(0,o).join(".")));for(let r=s.length-1;r>=0;r--)if(!!Uy(s[r])){if(r===0){Vu(t,n[0]);continue}Vu(s[r-1],n[r-1])}}function Mt(t){return Object.keys(t)}function $a(t,e=void 0){const n=Xr();return(n==null?void 0:n.provides[t])||Sr(t,e)}function $u(t){zv(`[vee-validate]: ${t}`)}function Ah(t,e,n){if(Array.isArray(t)){const i=[...t],s=i.findIndex(r=>gp(r,e));return s>=0?i.splice(s,1):i.push(e),i}return gp(t,e)?n:e}function vp(t,e=0){let n=null,i=[];return function(...s){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const r=t(...s);i.forEach(o=>o(r)),i=[]},e),new Promise(r=>i.push(r))}}function IS(t,e){return Ms(e)&&e.number?mS(t):t}function kh(t,e){let n;return async function(...s){const r=t(...s);n=r;const o=await r;return r!==n||(n=void 0,e(o,s)),o}}const $c=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var i,s;return(s=(i=e.slots).default)===null||s===void 0?void 0:s.call(i,n())}}:e.slots.default;function Uu(t){if(qy(t))return t._value}function qy(t){return"_value"in t}function jd(t){if(!Ud(t))return t;const e=t.target;if(Lr(e.type)&&qy(e))return Uu(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(wS(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Uu);if(By(e)){const n=Array.from(e.options).find(i=>i.selected);return n?Uu(n):e.value}return e.value}function Hy(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Ms(t)&&t._$$isNormalized?t:Ms(t)?Object.keys(t).reduce((n,i)=>{const s=ES(t[i]);return t[i]!==!1&&(n[i]=yp(s)),n},e):typeof t!="string"?e:t.split("|").reduce((n,i)=>{const s=TS(i);return s.name&&(n[s.name]=yp(s.params)),n},e):e}function ES(t){return t===!0?[]:Array.isArray(t)||Ms(t)?t:[t]}function yp(t){const e=n=>typeof n=="string"&&n[0]==="@"?SS(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,i)=>(n[i]=e(t[i]),n),{})}const TS=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function SS(t){const e=n=>Xe(n,t)||n[t];return e.__locatorRef=t,e}function DS(t){return Array.isArray(t)?t.filter(Dh):Mt(t).filter(e=>Dh(t[e])).map(e=>t[e])}const AS={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Ch=Object.assign({},AS);const qd=()=>Ch,kS=t=>{Ch=Object.assign(Object.assign({},Ch),t)},CS=kS;async function Wy(t,e,n={}){const i=n==null?void 0:n.bails,s={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:i!=null?i:!0,formData:(n==null?void 0:n.values)||{}},o=(await OS(s,t)).errors;return{errors:o,valid:!o.length}}async function OS(t,e){if(Wo(t.rules))return NS(e,t.rules,{bails:t.bails});if(xs(t.rules)||Array.isArray(t.rules)){const o={field:t.name,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(typeof d!="string"&&d)continue;const g=typeof d=="string"?d:Gy(o);if(c.push(g),t.bails)return{errors:c}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:Hy(t.rules)}),i=[],s=Object.keys(n.rules),r=s.length;for(let o=0;o<r;o++){const a=s[o],l=await xS(n,e,{name:a,params:n.rules[a]});if(l.error&&(i.push(l.error),t.bails))return{errors:i}}return{errors:i}}async function NS(t,e,n){var i;return{errors:await e.validate(t,{abortEarly:(i=n.bails)!==null&&i!==void 0?i:!0}).then(()=>[]).catch(r=>{if(r.name==="ValidationError")return r.errors;throw r})}}async function xS(t,e,n){const i=pS(n.name);if(!i)throw new Error(`No such validator '${n.name}' exists.`);const s=MS(n.params,t.formData),r={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:s})},o=await i(e,s,r);return typeof o=="string"?{error:o}:{error:o?void 0:Gy(r)}}function Gy(t){const e=qd().generateMessage;return e?e(t):"Field is invalid"}function MS(t,e){const n=i=>Dh(i)?i(e):i;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((i,s)=>(i[s]=n(t[s]),i),{})}async function RS(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(r=>{if(r.name!=="ValidationError")throw r;return r.inner||[]}),i={},s={};for(const r of n){const o=r.errors;i[r.path]={valid:!o.length,errors:o},o.length&&(s[r.path]=o[0])}return{valid:!n.length,results:i,errors:s}}async function PS(t,e,n){const s=Mt(t).map(async c=>{var u,h,d;const f=await Wy(Xe(e,c),t[c],{name:((u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c])||c,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},f),{path:c})});let r=!0;const o=await Promise.all(s),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(r=!1,l[c.path]=c.errors[0]);return{valid:r,results:a,errors:l}}function wp(t,e,n){typeof n.value=="object"&&(n.value=it(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function it(t){if(typeof t!="object")return t;var e=0,n,i,s,r=Object.prototype.toString.call(t);if(r==="[object Object]"?s=Object.create(t.__proto__||null):r==="[object Array]"?s=Array(t.length):r==="[object Set]"?(s=new Set,t.forEach(function(o){s.add(it(o))})):r==="[object Map]"?(s=new Map,t.forEach(function(o,a){s.set(it(a),it(o))})):r==="[object Date]"?s=new Date(+t):r==="[object RegExp]"?s=new RegExp(t.source,t.flags):r==="[object DataView]"?s=new t.constructor(it(t.buffer)):r==="[object ArrayBuffer]"?s=t.slice(0):r.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(i=Object.getOwnPropertySymbols(t);e<i.length;e++)wp(s,i[e],Object.getOwnPropertyDescriptor(t,i[e]));for(e=0,i=Object.getOwnPropertyNames(t);e<i.length;e++)Object.hasOwnProperty.call(s,n=i[e])&&s[n]===t[n]||wp(s,n,Object.getOwnPropertyDescriptor(t,n))}return s||t}var qn=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,s,r;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(s=i;s--!==0;)if(!t(e[s],n[s]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(s of e.entries())if(!n.has(s[0]))return!1;for(s of e.entries())if(!t(s[1],n.get(s[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(s of e.entries())if(!n.has(s[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(i=e.length,i!=n.length)return!1;for(s=i;s--!==0;)if(e[s]!==n[s])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(r=Object.keys(e),i=r.length,i!==Object.keys(n).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,r[s]))return!1;for(s=i;s--!==0;){var o=r[s];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let _p=0;function LS(t,e){const{value:n,initialValue:i,setInitialValue:s}=Ky(t,e.modelValue,!e.standalone),{errorMessage:r,errors:o,setErrors:a}=FS(t,!e.standalone),l=VS(n,i,o),c=_p>=Number.MAX_SAFE_INTEGER?0:++_p;function u(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(l.touched=(d=h.touched)!==null&&d!==void 0?d:l.touched),"initialValue"in h&&s(h.initialValue)}return{id:c,path:t,value:n,initialValue:i,meta:l,errors:o,errorMessage:r,setState:u}}function Ky(t,e,n=!0){const i=n===!0?$a(Zs,void 0):void 0,s=mn(J(e));function r(){return i?Xe(i.meta.value.initialValues,J(t),J(s)):J(s)}function o(u){if(!i){s.value=u;return}i.stageInitialValue(J(t),u,!0)}const a=st(r);if(!i)return{value:mn(r()),initialValue:a,setInitialValue:o};const l=e?J(e):Xe(i.values,J(t),J(a));return i.stageInitialValue(J(t),l,!0),{value:st({get(){return Xe(i.values,J(t))},set(u){i.setFieldValue(J(t),u)}}),initialValue:a,setInitialValue:o}}function VS(t,e,n){const i=Xs({touched:!1,pending:!1,valid:!0,validated:!!J(n).length,initialValue:st(()=>J(e)),dirty:st(()=>!qn(J(t),J(e)))});return tn(n,s=>{i.valid=!s.length},{immediate:!0,flush:"sync"}),i}function FS(t,e){const n=e?$a(Zs,void 0):void 0;function i(r){return r?Array.isArray(r)?r:[r]:[]}if(!n){const r=mn([]);return{errors:r,errorMessage:st(()=>r.value[0]),setErrors:o=>{r.value=i(o)}}}const s=st(()=>n.errorBag.value[J(t)]||[]);return{errors:s,errorMessage:st(()=>s.value[0]),setErrors:r=>{n.setFieldErrorBag(J(t),i(r))}}}function $S(t,e,n){return Lr(n==null?void 0:n.type)?jS(t,e,n):zy(t,e,n)}function zy(t,e,n){const{initialValue:i,validateOnMount:s,bails:r,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,standalone:h,keepValueOnUnmount:d,modelPropName:f,syncVModel:g}=US(J(t),n),_=h?void 0:$a(Zs);let S=!1;const{id:x,value:G,initialValue:D,meta:O,setState:$,errors:B,errorMessage:U}=LS(t,{modelValue:i,standalone:h});g&&qS({value:G,prop:f,handleChange:Le});const M=()=>{O.touched=!0},X=st(()=>{let W=J(e);const Ne=J(_==null?void 0:_.schema);return Ne&&!Wo(Ne)&&(W=BS(Ne,J(t))||W),Wo(W)||xs(W)||Array.isArray(W)?W:Hy(W)});async function ne(W){var Ne,It;return _!=null&&_.validateSchema?(Ne=(await _.validateSchema(W)).results[J(t)])!==null&&Ne!==void 0?Ne:{valid:!0,errors:[]}:Wy(G.value,X.value,{name:J(l)||J(t),values:(It=_==null?void 0:_.values)!==null&&It!==void 0?It:{},bails:r})}const ie=kh(async()=>(O.pending=!0,O.validated=!0,ne("validated-only")),W=>(S&&(W.valid=!0,W.errors=[]),$({errors:W.errors}),O.pending=!1,W)),q=kh(async()=>ne("silent"),W=>(S&&(W.valid=!0),O.valid=W.valid,W));function ve(W){return(W==null?void 0:W.mode)==="silent"?q():ie()}function Le(W,Ne=!0){const It=jd(W);G.value=It,!c&&Ne&&ie()}xc(()=>{if(s)return ie();(!_||!_.validateSchema)&&q()});function Te(W){O.touched=W}let Ce;function ge(){Ce=tn(G,(W,Ne)=>{if(qn(W,Ne))return;(c?ie:q)()},{deep:!0})}ge();function we(W){var Ne;Ce==null||Ce();const It=W&&"value"in W?W.value:D.value;$({value:it(It),initialValue:it(It),touched:(Ne=W==null?void 0:W.touched)!==null&&Ne!==void 0?Ne:!1,errors:(W==null?void 0:W.errors)||[]}),O.pending=!1,O.validated=!1,q(),ws(()=>{ge()})}function zt(W){G.value=W}function yi(W){$({errors:Array.isArray(W)?W:[W]})}const Nt={id:x,name:t,label:l,value:G,meta:O,errors:B,errorMessage:U,type:o,checkedValue:a,uncheckedValue:u,bails:r,keepValueOnUnmount:d,resetField:we,handleReset:()=>we(),validate:ve,handleChange:Le,handleBlur:M,setState:$,setTouched:Te,setErrors:yi,setValue:zt};if(kd(vS,Nt),$e(e)&&typeof J(e)!="function"&&tn(e,(W,Ne)=>{qn(W,Ne)||(O.validated?ie():q())},{deep:!0}),!_)return Nt;_.register(Nt),Mc(()=>{S=!0,_.unregister(Nt)});const Ut=st(()=>{const W=X.value;return!W||xs(W)||Wo(W)||Array.isArray(W)?{}:Object.keys(W).reduce((Ne,It)=>{const po=DS(W[It]).map(xt=>xt.__locatorRef).reduce((xt,Yt)=>{const An=Xe(_.values,Yt)||_.values[Yt];return An!==void 0&&(xt[Yt]=An),xt},{});return Object.assign(Ne,po),Ne},{})});return tn(Ut,(W,Ne)=>{if(!Object.keys(W).length)return;!qn(W,Ne)&&(O.validated?ie():q())}),Nt}function US(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1,keepValueOnUnmount:void 0,modelPropName:"modelValue",syncVModel:!0});if(!e)return n();const i="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:i})}function BS(t,e){if(!!t)return t[e]}function jS(t,e,n){const i=n!=null&&n.standalone?void 0:$a(Zs),s=n==null?void 0:n.checkedValue,r=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=st(()=>{const h=J(a.value),d=J(s);return Array.isArray(h)?h.findIndex(f=>qn(f,d))>=0:qn(d,h)});function u(h,d=!0){var f;if(c.value===((f=h==null?void 0:h.target)===null||f===void 0?void 0:f.checked))return;let g=jd(h);i||(g=Ah(J(a.value),J(s),J(r))),l(g,d)}return Object.assign(Object.assign({},a),{checked:c,checkedValue:s,uncheckedValue:r,handleChange:u})}return o(zy(t,e,n))}function qS({prop:t,value:e,handleChange:n}){const i=Xr();if(!i)return;const s=t||"modelValue",r=`update:${s}`;s in i.props&&(tn(e,o=>{qn(o,bp(i,s))||i.emit(r,o)}),tn(()=>bp(i,s),o=>{if(o===Wl&&e.value===void 0)return;const a=o===Wl?void 0:o;qn(a,IS(e.value,i.props.modelModifiers))||n(a)}))}function bp(t,e){return t.props[e]}const HS=Cc({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>qd().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Wl},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=Mn(t,"rules"),i=Mn(t,"name"),s=Mn(t,"label"),r=Mn(t,"uncheckedValue"),o=Mn(t,"keepValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:h,handleBlur:d,setTouched:f,resetField:g,handleReset:_,meta:S,checked:x,setErrors:G}=$S(i,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:GS(t,e),checkedValue:e.attrs.value,uncheckedValue:r,label:s,validateOnValueUpdate:!1,keepValueOnUnmount:o}),D=function(X,ne=!0){h(X,ne),e.emit("update:modelValue",l.value)},O=M=>{Lr(e.attrs.type)||(l.value=jd(M))},$=function(X){O(X),e.emit("update:modelValue",l.value)},B=st(()=>{const{validateOnInput:M,validateOnChange:X,validateOnBlur:ne,validateOnModelUpdate:ie}=WS(t),q=[d,e.attrs.onBlur,ne?u:void 0].filter(Boolean),ve=[ge=>D(ge,M),e.attrs.onInput].filter(Boolean),Le=[ge=>D(ge,X),e.attrs.onChange].filter(Boolean),Te={name:t.name,onBlur:q,onInput:ve,onChange:Le};Te["onUpdate:modelValue"]=ge=>D(ge,ie),Lr(e.attrs.type)&&x&&(Te.checked=x.value);const Ce=Ip(t,e);return bS(Ce,e.attrs)&&(Te.value=l.value),Te});function U(){return{field:B.value,value:l.value,meta:S,errors:a.value,errorMessage:c.value,validate:u,resetField:g,handleChange:D,handleInput:$,handleReset:_,handleBlur:d,setTouched:f,setErrors:G}}return e.expose({setErrors:G,setTouched:f,reset:g,validate:u,handleChange:h}),()=>{const M=Rc(Ip(t,e)),X=$c(M,e,U);return M?ha(M,Object.assign(Object.assign({},e.attrs),B.value),X):X}}});function Ip(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function WS(t){var e,n,i,s;const{validateOnInput:r,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=qd();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:r,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(i=t.validateOnBlur)!==null&&i!==void 0?i:a,validateOnModelUpdate:(s=t.validateOnModelUpdate)!==null&&s!==void 0?s:l}}function GS(t,e){return Lr(e.attrs.type)?pp(t,"modelValue")?t.modelValue:void 0:pp(t,"modelValue")?t.modelValue:e.attrs.value}const KS=HS;let zS=0;function YS(t){var e;const n=zS++;let i=!1;const s=mn({}),r=mn(!1),o=mn(0),a=[],l=Xs(it(J(t==null?void 0:t.initialValues)||{})),{errorBag:c,setErrorBag:u,setFieldErrorBag:h}=XS(t==null?void 0:t.initialErrors),d=st(()=>Mt(c.value).reduce((p,v)=>{const T=c.value[v];return T&&T.length&&(p[v]=T[0]),p},{}));function f(p){const v=s.value[p];return Array.isArray(v)?v[0]:v}function g(p){return!!s.value[p]}const _=st(()=>Mt(s.value).reduce((p,v)=>{const T=f(v);return T&&(p[v]=J(T.label||T.name)||""),p},{})),S=st(()=>Mt(s.value).reduce((p,v)=>{var T;const k=f(v);return k&&(p[v]=(T=k.bails)!==null&&T!==void 0?T:!0),p},{})),x=Object.assign({},(t==null?void 0:t.initialErrors)||{}),G=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:D,originalInitialValues:O,setInitialValues:$}=JS(s,l,t==null?void 0:t.initialValues),B=QS(s,l,O,d),U=t==null?void 0:t.validationSchema,M=vp(y,5),X=vp(y,5),ne=kh(async p=>await p==="silent"?M():X(),(p,[v])=>{const T=ie.fieldsByPath.value||{},k=Mt(ie.errorBag.value);return[...new Set([...Mt(p.results),...Mt(T),...k])].reduce((P,N)=>{const Q=T[N],K=(p.results[N]||{errors:[]}).errors,Y={errors:K,valid:!K.length};if(P.results[N]=Y,Y.valid||(P.errors[N]=Y.errors[0]),!Q)return Te(N,K),P;if(ve(Q,me=>me.meta.valid=Y.valid),v==="silent")return P;const le=Array.isArray(Q)?Q.some(me=>me.meta.validated):Q.meta.validated;return v==="validated-only"&&!le||ve(Q,me=>me.setState({errors:Y.errors})),P},{valid:p.valid,results:{},errors:{}})}),ie={formId:n,fieldsByPath:s,values:l,errorBag:c,errors:d,schema:U,submitCount:o,meta:B,isSubmitting:r,fieldArrays:a,keepValuesOnUnmount:G,validateSchema:J(U)?ne:void 0,validate:Yt,register:po,unregister:xt,setFieldErrorBag:h,validateField:An,setFieldValue:ge,setValues:we,setErrors:Ce,setFieldError:Te,setFieldTouched:Nt,setTouched:Ut,resetForm:W,handleSubmit:kn,stageInitialValue:m,unsetInitialValue:go,setFieldInitialValue:cr,useFieldModel:yi};function q(p){return Array.isArray(p)}function ve(p,v){return Array.isArray(p)?p.forEach(v):v(p)}function Le(p){Object.values(s.value).forEach(v=>{!v||ve(v,p)})}function Te(p,v){h(p,v)}function Ce(p){u(p)}function ge(p,v,{force:T}={force:!1}){var k;const b=s.value[p],P=it(v);if(!b){ls(l,p,P);return}if(q(b)&&((k=b[0])===null||k===void 0?void 0:k.type)==="checkbox"&&!Array.isArray(v)){const Q=it(Ah(Xe(l,p)||[],v,void 0));ls(l,p,Q);return}let N=v;!q(b)&&b.type==="checkbox"&&!T&&!i&&(N=it(Ah(Xe(l,p),v,J(b.uncheckedValue)))),ls(l,p,N)}function we(p){Mt(l).forEach(v=>{delete l[v]}),Mt(p).forEach(v=>{ge(v,p[v])}),a.forEach(v=>v&&v.reset())}function zt(p){const{value:v}=Ky(p);return tn(v,()=>{g(J(p))||Yt({mode:"validated-only"})},{deep:!0}),v}function yi(p){return Array.isArray(p)?p.map(zt):zt(p)}function Nt(p,v){const T=s.value[p];T&&ve(T,k=>k.setTouched(v))}function Ut(p){Mt(p).forEach(v=>{Nt(v,!!p[v])})}function W(p){i=!0,p!=null&&p.values?($(p.values),we(p==null?void 0:p.values)):($(O.value),we(O.value)),Le(v=>v.resetField()),p!=null&&p.touched&&Ut(p.touched),Ce((p==null?void 0:p.errors)||{}),o.value=(p==null?void 0:p.submitCount)||0,ws(()=>{i=!1})}function Ne(p,v){const T=Ns(p),k=v;if(!s.value[k]){s.value[k]=T;return}const b=s.value[k];b&&!Array.isArray(b)&&(s.value[k]=[b]),s.value[k]=[...s.value[k],T]}function It(p,v){const T=v,k=s.value[T];if(!!k){if(!q(k)&&p.id===k.id){delete s.value[T];return}if(q(k)){const b=k.findIndex(P=>P.id===p.id);if(b===-1)return;k.splice(b,1),k.length||delete s.value[T]}}}function po(p){const v=J(p.name);Ne(p,v),$e(p.name)&&tn(p.name,async(k,b)=>{await ws(),It(p,b),Ne(p,k),(d.value[b]||d.value[k])&&(Te(b,void 0),An(k)),await ws(),g(b)||Fu(l,b)});const T=J(p.errorMessage);T&&(x==null?void 0:x[v])!==T&&An(v),delete x[v]}function xt(p){const v=J(p.name),T=s.value[v],k=!!T&&q(T);It(p,v),ws(()=>{var b;const P=(b=J(p.keepValueOnUnmount))!==null&&b!==void 0?b:J(G),N=Xe(l,v);if(k&&(T===s.value[v]||!s.value[v])&&Array.isArray(N)&&!P){const K=N.findIndex(Y=>qn(Y,J(p.checkedValue)));if(K>-1){const Y=[...N];Y.splice(K,1),ge(v,Y,{force:!0})}}if(!g(v)){if(Te(v,void 0),P||k&&!Uy(Xe(l,v)))return;Fu(l,v)}})}async function Yt(p){if(Le(b=>b.meta.validated=!0),ie.validateSchema)return ie.validateSchema((p==null?void 0:p.mode)||"force");const v=await Promise.all(Object.values(s.value).map(b=>{const P=Array.isArray(b)?b[0]:b;return P?P.validate(p).then(N=>({key:J(P.name),valid:N.valid,errors:N.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),T={},k={};for(const b of v)T[b.key]={valid:b.valid,errors:b.errors},b.errors.length&&(k[b.key]=b.errors[0]);return{valid:v.every(b=>b.valid),results:T,errors:k}}async function An(p){const v=s.value[p];return v?Array.isArray(v)?v.map(T=>T.validate())[0]:v.validate():(zv(`field with name ${p} was not found`),Promise.resolve({errors:[],valid:!0}))}function kn(p,v){return function(k){return k instanceof Event&&(k.preventDefault(),k.stopPropagation()),Ut(Mt(s.value).reduce((b,P)=>(b[P]=!0,b),{})),r.value=!0,o.value++,Yt().then(b=>{if(b.valid&&typeof p=="function")return p(it(l),{evt:k,setErrors:Ce,setFieldError:Te,setTouched:Ut,setFieldTouched:Nt,setValues:we,setFieldValue:ge,resetForm:W});!b.valid&&typeof v=="function"&&v({values:it(l),evt:k,errors:b.errors,results:b.results})}).then(b=>(r.value=!1,b),b=>{throw r.value=!1,b})}}function cr(p,v){ls(D.value,p,it(v))}function go(p){Fu(D.value,p)}function m(p,v,T=!1){ls(l,p,v),cr(p,v),T&&!(t!=null&&t.initialValues)&&ls(O.value,p,it(v))}async function y(){const p=J(U);return p?Wo(p)?await RS(p,l):await PS(p,l,{names:_.value,bailsMap:S.value}):{valid:!0,results:{},errors:{}}}const E=kn((p,{evt:v})=>{jy(v)&&v.target.submit()});return xc(()=>{if(t!=null&&t.initialErrors&&Ce(t.initialErrors),t!=null&&t.initialTouched&&Ut(t.initialTouched),t!=null&&t.validateOnMount){Yt();return}ie.validateSchema&&ie.validateSchema("silent")}),$e(U)&&tn(U,()=>{var p;(p=ie.validateSchema)===null||p===void 0||p.call(ie,"validated-only")}),kd(Zs,ie),{errors:d,meta:B,values:l,isSubmitting:r,submitCount:o,validate:Yt,validateField:An,handleReset:()=>W(),resetForm:W,handleSubmit:kn,submitForm:E,setFieldError:Te,setErrors:Ce,setFieldValue:ge,setValues:we,setFieldTouched:Nt,setTouched:Ut,useFieldModel:yi}}function QS(t,e,n,i){const s={touched:"some",pending:"some",valid:"every"},r=st(()=>!qn(e,J(n)));function o(){const l=Object.values(t.value).flat(1).filter(Boolean);return Mt(s).reduce((c,u)=>{const h=s[u];return c[u]=l[h](d=>d.meta[u]),c},{})}const a=Xs(o());return V0(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),st(()=>Object.assign(Object.assign({initialValues:J(n)},a),{valid:a.valid&&!Mt(i.value).length,dirty:r.value}))}function JS(t,e,n){const i=mn(it(J(n))||{}),s=mn(it(J(n))||{});function r(o,a=!1){i.value=it(o),s.value=it(o),a&&Mt(t.value).forEach(l=>{const c=t.value[l],u=Array.isArray(c)?c.some(d=>d.meta.touched):c==null?void 0:c.meta.touched;if(!c||u)return;const h=Xe(i.value,l);ls(e,l,it(h))})}return $e(n)&&tn(n,o=>{r(o,!0)},{deep:!0}),{initialValues:i,originalInitialValues:s,setInitialValues:r}}function XS(t){const e=mn({});function n(r){return Array.isArray(r)?r:r?[r]:[]}function i(r,o){if(!o){delete e.value[r];return}e.value[r]=n(o)}function s(r){e.value=Mt(r).reduce((o,a)=>{const l=r[a];return l&&(o[a]=n(l)),o},{})}return t&&s(t),{errorBag:e,setErrorBag:s,setFieldErrorBag:i}}const ZS=Cc({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=Mn(t,"initialValues"),i=Mn(t,"validationSchema"),s=Mn(t,"keepValues"),{errors:r,values:o,meta:a,isSubmitting:l,submitCount:c,validate:u,validateField:h,handleReset:d,resetForm:f,handleSubmit:g,setErrors:_,setFieldError:S,setFieldValue:x,setValues:G,setFieldTouched:D,setTouched:O}=YS({validationSchema:i.value?i:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:s}),$=g((ne,{evt:ie})=>{jy(ie)&&ie.target.submit()},t.onInvalidSubmit),B=t.onSubmit?g(t.onSubmit,t.onInvalidSubmit):$;function U(ne){Ud(ne)&&ne.preventDefault(),d(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function M(ne,ie){return g(typeof ne=="function"&&!ie?ne:ie,t.onInvalidSubmit)(ne)}function X(){return{meta:a.value,errors:r.value,values:o,isSubmitting:l.value,submitCount:c.value,validate:u,validateField:h,handleSubmit:M,handleReset:d,submitForm:$,setErrors:_,setFieldError:S,setFieldValue:x,setValues:G,setFieldTouched:D,setTouched:O,resetForm:f}}return e.expose({setFieldError:S,setErrors:_,setFieldValue:x,setValues:G,setFieldTouched:D,setTouched:O,resetForm:f,validate:u,validateField:h}),function(){const ie=t.as==="form"?t.as:Rc(t.as),q=$c(ie,e,X);if(!t.as)return q;const ve=t.as==="form"?{novalidate:!0}:{};return ha(ie,Object.assign(Object.assign(Object.assign({},ve),e.attrs),{onSubmit:B,onReset:U}),q)}}}),eD=ZS;function tD(t){const e=$a(Zs,void 0),n=mn([]),i=()=>{},s={fields:n,remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i,move:i};if(!e)return $u("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!J(t))return $u("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;const r=e.fieldArrays.find(D=>J(D.path)===J(t));if(r)return r;let o=0;function a(){const D=Xe(e==null?void 0:e.values,J(t),[])||[];n.value=D.map(c),l()}a();function l(){const D=n.value.length;for(let O=0;O<D;O++){const $=n.value[O];$.isFirst=O===0,$.isLast=O===D-1}}function c(D){const O=o++;return{key:O,value:st({get(){const B=Xe(e==null?void 0:e.values,J(t),[])||[],U=n.value.findIndex(M=>M.key===O);return U===-1?D:B[U]},set(B){const U=n.value.findIndex(M=>M.key===O);if(U===-1){$u("Attempting to update a non-existent array item");return}_(U,B)}}),isFirst:!1,isLast:!1}}function u(D){const O=J(t),$=Xe(e==null?void 0:e.values,O);if(!$||!Array.isArray($))return;const B=[...$];B.splice(D,1),e==null||e.unsetInitialValue(O+`[${D}]`),e==null||e.setFieldValue(O,B),n.value.splice(D,1),l()}function h(D){const O=J(t),$=Xe(e==null?void 0:e.values,O),B=Ho($)?[]:$;if(!Array.isArray(B))return;const U=[...B];U.push(D),e==null||e.stageInitialValue(O+`[${U.length-1}]`,D),e==null||e.setFieldValue(O,U),n.value.push(c(D)),l()}function d(D,O){const $=J(t),B=Xe(e==null?void 0:e.values,$);if(!Array.isArray(B)||!(D in B)||!(O in B))return;const U=[...B],M=[...n.value],X=U[D];U[D]=U[O],U[O]=X;const ne=M[D];M[D]=M[O],M[O]=ne,e==null||e.setFieldValue($,U),n.value=M,l()}function f(D,O){const $=J(t),B=Xe(e==null?void 0:e.values,$);if(!Array.isArray(B)||B.length<D)return;const U=[...B],M=[...n.value];U.splice(D,0,O),M.splice(D,0,c(O)),e==null||e.setFieldValue($,U),n.value=M,l()}function g(D){const O=J(t);e==null||e.setFieldValue(O,D),a()}function _(D,O){const $=J(t),B=Xe(e==null?void 0:e.values,$);!Array.isArray(B)||B.length-1<D||e==null||e.setFieldValue(`${$}[${D}]`,O)}function S(D){const O=J(t),$=Xe(e==null?void 0:e.values,O),B=Ho($)?[]:$;if(!Array.isArray(B))return;const U=[D,...B];e==null||e.stageInitialValue(O+`[${U.length-1}]`,D),e==null||e.setFieldValue(O,U),n.value.unshift(c(D)),l()}function x(D,O){const $=J(t),B=Xe(e==null?void 0:e.values,$),U=Ho(B)?[]:[...B];if(!Array.isArray(B)||!(D in B)||!(O in B))return;const M=[...n.value],X=M[D];M.splice(D,1),M.splice(O,0,X);const ne=U[D];U.splice(D,1),U.splice(O,0,ne),e==null||e.setFieldValue($,U),n.value=M,l()}const G={fields:n,remove:u,push:h,swap:d,insert:f,update:_,replace:g,prepend:S,move:x};return e.fieldArrays.push(Object.assign({path:t,reset:a},G)),Mc(()=>{const D=e.fieldArrays.findIndex(O=>J(O.path)===J(t));D>=0&&e.fieldArrays.splice(D,1)}),G}Cc({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:i,swap:s,insert:r,replace:o,update:a,prepend:l,move:c,fields:u}=tD(Mn(t,"name"));function h(){return{fields:u.value,push:n,remove:i,swap:s,insert:r,update:a,replace:o,prepend:l,move:c}}return e.expose({push:n,remove:i,swap:s,insert:r,update:a,replace:o,prepend:l,move:c}),()=>$c(void 0,e,h)}});const nD=Cc({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Sr(Zs,void 0),i=st(()=>n==null?void 0:n.errors.value[t.name]);function s(){return{message:i.value}}return()=>{if(!i.value)return;const r=t.as?Rc(t.as):t.as,o=$c(r,e,s),a=Object.assign({role:"alert"},e.attrs);return!r&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?ha(r||"span",a,i.value):ha(r,a,o)}}}),iD=nD;/**
  * vee-validate v4.6.7
  * (c) 2022 Abdelrahman Awad
  * @license MIT
  */const vl={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},sD=t=>{if(!!t)return Array.isArray(t)?t[0]:t.locale};function Ua(t,e){return Array.isArray(t)?t[0]:t[e]}function Ki(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const Yy=(t,e)=>{if(Ki(t))return!0;const n=sD(e);if(Array.isArray(t))return t.every(s=>Yy(s,{locale:n}));const i=String(t);return n?(vl[n]||vl.en).test(i):Object.keys(vl).some(s=>vl[s].test(i))},rD=(t,e)=>{const n=Ua(e,"target");return String(t)===String(n)},oD=t=>{if(Ki(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(n=>e.test(String(n))):e.test(String(t))};function aD(t){return t==null}function lD(t){return Array.isArray(t)&&t.length===0}const Qy=(t,e)=>{if(Ki(t))return!0;const n=Ua(e,"length");return Array.isArray(t)?t.every(i=>Qy(i,{length:n})):String(t).length<=Number(n)},Jy=(t,e)=>{if(Ki(t))return!0;const n=Ua(e,"max");return Array.isArray(t)?t.length>0&&t.every(i=>Jy(i,{max:n})):Number(t)<=Number(n)},Xy=(t,e)=>{if(Ki(t))return!0;const n=Ua(e,"length");return Array.isArray(t)?t.every(i=>Xy(i,{length:n})):String(t).length>=Number(n)},Zy=(t,e)=>{if(Ki(t))return!0;const n=Ua(e,"min");return Array.isArray(t)?t.length>0&&t.every(i=>Zy(i,{min:n})):Number(t)>=Number(n)},ew=(t,e)=>Ki(t)?!0:Array.isArray(t)?t.every(n=>ew(n,e)):Array.from(e).some(n=>n==t),Ep=(t,e)=>Ki(t)?!0:!ew(t,e),Tp=t=>aD(t)||lD(t)||t===!1?!1:!!String(t).trim().length,cD={install(t){t.component("VeeForm",eD),t.component("VeeField",KS),t.component("ErrorMessage",iD),wn("required",Tp),wn("tos",Tp),wn("min",Xy),wn("max",Qy),wn("alpha_spaces",Yy),wn("email",oD),wn("min_value",Zy),wn("max_value",Jy),wn("passwords_mismatch",rD),wn("excluded",Ep),wn("country_excluded",Ep),CS({generateMessage:e=>{const n={required:`The field ${e.field} is required.`,min:`The field ${e.field} is too short.`,max:`The field ${e.field} is too long.`,alpha_spaces:`The field ${e.field} may only contain alphabetic characters and spaces.`,email:`The field ${e.field} must be a valid email.`,min_value:`The field ${e.field} is too low.`,max_value:`The field ${e.field} is too high.`,passwords_mismatch:"The passwords don't match.",excluded:`You are not allowed to use this value for the field ${e.field}.`,country_excluded:"Due to restrictions, we do not allow users from this location.",tos:"You must accept the Terms of Service."};return n[e.rule.name]?n[e.rule.name]:`The field ${e.field} is invalid.`},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uD=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},nw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uD(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const g=c<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hD=function(t){const e=tw(t);return nw.encodeByteArray(e,!0)},Gl=function(t){return hD(t).replace(/\./g,"")},dD=function(t){try{return nw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Kl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!fD(n)||(t[n]=Kl(t[n],e[n]));return t}function fD(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gl(JSON.stringify(n)),Gl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Hd(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vD(){return typeof self=="object"&&self.self===self}function iw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sw(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yD(){return!Hd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function da(){return typeof indexedDB=="object"}function wD(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="FirebaseError";class Gt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=_D,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?bD(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,i)}}function bD(t,e){return t.replace(ID,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ID=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ED(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Oh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Dp(r)&&Dp(o)){if(!Oh(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Dp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function wr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Mo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rw(t,e){const n=new TD(t,e);return n.subscribe.bind(n)}class TD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");SD(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Bu),s.error===void 0&&(s.error=Bu),s.complete===void 0&&(s.complete=Bu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){return t&&t._delegate?t._delegate:t}class Kn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mD;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kD(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AD(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AD(t){return t===cs?void 0:t}function kD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=[];var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const ow={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},OD=Se.INFO,ND={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},xD=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ND[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Uc{constructor(e){this.name=e,this._logLevel=OD,this._logHandler=xD,this._userLogHandler=null,Gd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ow[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}function MD(t){Gd.forEach(e=>{e.setLogLevel(t)})}function RD(t,e){for(const n of Gd){let i=null;e&&e.level&&(i=ow[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(s,r,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");r>=(i!=null?i:s.logLevel)&&t({level:Se[r].toLowerCase(),message:a,args:o,type:s.name})}}}const PD=(t,e)=>e.some(n=>t instanceof n);let Ap,kp;function LD(){return Ap||(Ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VD(){return kp||(kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aw=new WeakMap,Nh=new WeakMap,lw=new WeakMap,ju=new WeakMap,Kd=new WeakMap;function FD(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ni(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&aw.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function $D(t){if(Nh.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ni(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UD(t){xh=t(xh)}function BD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(qu(this),e,...n);return lw.set(i,e.sort?e.sort():[e]),Ni(i)}:VD().includes(t)?function(...e){return t.apply(qu(this),e),Ni(aw.get(this))}:function(...e){return Ni(t.apply(qu(this),e))}}function jD(t){return typeof t=="function"?BD(t):(t instanceof IDBTransaction&&$D(t),PD(t,LD())?new Proxy(t,xh):t)}function Ni(t){if(t instanceof IDBRequest)return FD(t);if(ju.has(t))return ju.get(t);const e=jD(t);return e!==t&&(ju.set(t,e),Kd.set(e,t)),e}const qu=t=>Kd.get(t);function qD(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=Ni(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ni(o.result),l.oldVersion,l.newVersion,Ni(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const HD=["get","getKey","getAll","getAllKeys","count"],WD=["put","add","delete","clear"],Hu=new Map;function Cp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hu.get(e))return Hu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=WD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||HD.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Hu.set(e,r),r}UD(t=>({...t,get:(e,n,i)=>Cp(e,n)||t.get(e,n,i),has:(e,n)=>!!Cp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function KD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",Op="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new Uc("@firebase/app"),zD="@firebase/app-compat",YD="@firebase/analytics-compat",QD="@firebase/analytics",JD="@firebase/app-check-compat",XD="@firebase/app-check",ZD="@firebase/auth",eA="@firebase/auth-compat",tA="@firebase/database",nA="@firebase/database-compat",iA="@firebase/functions",sA="@firebase/functions-compat",rA="@firebase/installations",oA="@firebase/installations-compat",aA="@firebase/messaging",lA="@firebase/messaging-compat",cA="@firebase/performance",uA="@firebase/performance-compat",hA="@firebase/remote-config",dA="@firebase/remote-config-compat",fA="@firebase/storage",mA="@firebase/storage-compat",pA="@firebase/firestore",gA="@firebase/firestore-compat",vA="firebase",yA="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]",wA={[Mh]:"fire-core",[zD]:"fire-core-compat",[QD]:"fire-analytics",[YD]:"fire-analytics-compat",[XD]:"fire-app-check",[JD]:"fire-app-check-compat",[ZD]:"fire-auth",[eA]:"fire-auth-compat",[tA]:"fire-rtdb",[nA]:"fire-rtdb-compat",[iA]:"fire-fn",[sA]:"fire-fn-compat",[rA]:"fire-iid",[oA]:"fire-iid-compat",[aA]:"fire-fcm",[lA]:"fire-fcm-compat",[cA]:"fire-perf",[uA]:"fire-perf-compat",[hA]:"fire-rc",[dA]:"fire-rc-compat",[fA]:"fire-gcs",[mA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat","fire-js":"fire-js",[vA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Map,fa=new Map;function zl(t,e){try{t.container.addComponent(e)}catch(n){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cw(t,e){t.container.addOrOverwriteComponent(e)}function Vi(t){const e=t.name;if(fa.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,t);for(const n of Li.values())zl(n,t);return!0}function uw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _A(t,e,n=Ps){uw(t,e).clearInstance(n)}function bA(){fa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Fi=new er("app","Firebase",IA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=yA;function hw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ps,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw Fi.create("bad-app-name",{appName:String(i)});const s=Li.get(i);if(s){if(Oh(t,s.options)&&Oh(n,s.config))return s;throw Fi.create("duplicate-app",{appName:i})}const r=new CD(i);for(const a of fa.values())r.addComponent(a);const o=new EA(t,n,r);return Li.set(i,o),o}function TA(t=Ps){const e=Li.get(t);if(!e)throw Fi.create("no-app",{appName:t});return e}function SA(){return Array.from(Li.values())}async function dw(t){const e=t.name;Li.has(e)&&(Li.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Tn(t,e,n){var i;let s=(i=wA[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(a.join(" "));return}Vi(new Kn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function fw(t,e){if(t!==null&&typeof t!="function")throw Fi.create("invalid-log-argument");RD(t,e)}function mw(t){MD(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="firebase-heartbeat-database",AA=1,ma="firebase-heartbeat-store";let Wu=null;function pw(){return Wu||(Wu=qD(DA,AA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ma)}}}).catch(t=>{throw Fi.create("idb-open",{originalErrorMessage:t.message})})),Wu}async function kA(t){var e;try{return(await pw()).transaction(ma).objectStore(ma).get(gw(t))}catch(n){if(n instanceof Gt)Rs.warn(n.message);else{const i=Fi.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Rs.warn(i.message)}}}async function Np(t,e){var n;try{const s=(await pw()).transaction(ma,"readwrite");return await s.objectStore(ma).put(e,gw(t)),s.done}catch(i){if(i instanceof Gt)Rs.warn(i.message);else{const s=Fi.create("idb-set",{originalErrorMessage:(n=i)===null||n===void 0?void 0:n.message});Rs.warn(s.message)}}}function gw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=1024,OA=30*24*60*60*1e3;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MA(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=OA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xp(),{heartbeatsToSend:n,unsentEntries:i}=xA(this._heartbeatsCache.heartbeats),s=Gl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xp(){return new Date().toISOString().substring(0,10)}function xA(t,e=CA){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Mp(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class MA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?wD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mp(t){return Gl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){Vi(new Kn("platform-logger",e=>new GD(e),"PRIVATE")),Vi(new Kn("heartbeat",e=>new NA(e),"PRIVATE")),Tn(Mh,Op,t),Tn(Mh,Op,"esm2017"),Tn("fire-js","")}RA("");const PA=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:tr,_DEFAULT_ENTRY_NAME:Ps,_addComponent:zl,_addOrOverwriteComponent:cw,_apps:Li,_clearComponents:bA,_components:fa,_getProvider:uw,_registerComponent:Vi,_removeServiceInstance:_A,deleteApp:dw,getApp:TA,getApps:SA,initializeApp:hw,onLog:fw,registerVersion:Tn,setLogLevel:mw,FirebaseError:Gt},Symbol.toStringTag,{value:"Module"}));var LA="firebase",VA="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(LA,VA,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this._delegate=e,this.firebase=n,zl(e,new Kn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),dw(this._delegate)))}_getService(e,n=Ps){var i;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((i=s.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:n})}_removeServiceInstance(e,n=Ps){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zl(this._delegate,e)}_addOrOverwriteComponent(e){cw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rp=new er("app-compat","Firebase",$A);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){const e={},n={__esModule:!0,initializeApp:r,app:s,registerVersion:Tn,setLogLevel:mw,onLog:fw,apps:null,SDK_VERSION:tr,INTERNAL:{registerComponent:a,removeApp:i,useAsService:l,modularAPIs:PA}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(c){delete e[c]}function s(c){if(c=c||Ps,!Sp(e,c))throw Rp.create("no-app",{appName:c});return e[c]}s.App=t;function r(c,u={}){const h=hw(c,u);if(Sp(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,h=u.replace("-compat","");if(Vi(c)&&c.type==="PUBLIC"){const d=(f=s())=>{if(typeof f[h]!="function")throw Rp.create("invalid-app-argument",{appName:u});return f[h]()};c.serviceProps!==void 0&&Kl(d,c.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,c.multipleInstances?f:[])}}return c.type==="PUBLIC"?n[h]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(){const t=UA(FA);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:vw,extendNamespace:e,createSubscribe:rw,ErrorFactory:er,deepExtend:Kl});function e(n){Kl(t,n)}return t}const BA=vw();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Uc("@firebase/app-compat"),jA="@firebase/app-compat",qA="0.1.34";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){Tn(jA,qA,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(vD()&&self.firebase!==void 0){Pp.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Pp.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const zi=BA;HA();function zd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}const wo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},dr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function yw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GA=WA,KA=yw,ww=new er("auth","Firebase",yw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Uc("@firebase/auth");function Ol(t,...e){Lp.logLevel<=Se.ERROR&&Lp.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw Yd(t,...e)}function At(t,...e){return Yd(t,...e)}function _w(t,e,n){const i=Object.assign(Object.assign({},KA()),{[e]:n});return new er("auth","Firebase",i).create(e,{appName:t.name})}function eo(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Ct(t,"argument-error"),_w(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Yd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ww.create(t,...e)}function F(t,e,...n){if(!t)throw Yd(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ol(e),new Error(e)}function Dn(t,e){t||Un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=new Map;function on(t){Dn(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}function zA(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qd(){return Fp()==="http:"||Fp()==="https:"}function Fp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qd()||iw()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=gD()||Wd()}get(){return YA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Ba(3e4,6e4);function lt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wt(t,e,n,i,s={}){return Iw(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bw.fetch()(Ew(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Iw(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},JA),e);try{const s=new ZA(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ro(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _w(t,u,c);Ct(t,u)}}catch(s){if(s instanceof Gt)throw s;Ct(t,"network-request-failed")}}async function di(t,e,n,i,s={}){const r=await wt(t,e,n,i,s);return"mfaPendingCredential"in r&&Ct(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ew(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?Jd(t.config,s):`${t.config.apiScheme}://${s}`}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(At(this.auth,"network-request-failed")),XA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ro(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=At(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){return wt(t,"POST","/v1/accounts:delete",e)}async function tk(t,e){return wt(t,"POST","/v1/accounts:update",e)}async function nk(t,e){return wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=te(t),i=await n.getIdToken(e),s=Bc(i);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Go(Gu(s.auth_time)),issuedAtTime:Go(Gu(s.iat)),expirationTime:Go(Gu(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gu(t){return Number(t)*1e3}function Bc(t){var e;const[n,i,s]=t.split(".");if(n===void 0||i===void 0||s===void 0)return Ol("JWT malformed, contained fewer than 3 sections"),null;try{const r=dD(i);return r?JSON.parse(r):(Ol("Failed to decode base64 JWT payload"),null)}catch(r){return Ol("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}function sk(t){const e=Bc(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Gt&&rk(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function rk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Go(this.lastLoginAt),this.creationTime=Go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const n=t.auth,i=await t.getIdToken(),s=await li(t,nk(n,{idToken:i}));F(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ck(r.providerUserInfo):[],a=lk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Tw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ak(t){const e=te(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lk(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function ck(t){return t.map(e=>{var{providerId:n}=e,i=zd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){const n=await Iw(t,{},async()=>{const i=Zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Ew(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bw.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await uk(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new va;return i&&(F(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(F(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new va,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class As{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Tw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new As(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,l,c,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,G=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:O,isAnonymous:$,providerData:B,stsTokenManager:U}=n;F(D&&U,e,"internal-error");const M=va.fromJSON(this.name,U);F(typeof D=="string",e,"internal-error"),bi(h,e.name),bi(d,e.name),F(typeof O=="boolean",e,"internal-error"),F(typeof $=="boolean",e,"internal-error"),bi(f,e.name),bi(g,e.name),bi(_,e.name),bi(S,e.name),bi(x,e.name),bi(G,e.name);const X=new As({uid:D,auth:e,email:d,emailVerified:O,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:M,createdAt:x,lastLoginAt:G});return B&&Array.isArray(B)&&(X.providerData=B.map(ne=>Object.assign({},ne))),S&&(X._redirectEventId=S),X}static async _fromIdTokenResponse(e,n,i=!1){const s=new va;s.updateFromServerResponse(n);const r=new As({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ga(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sw.type="NONE";const Vr=Sw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ks(this.userKey,s.apiKey,r),this.fullPersistenceKey=ks("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?As._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Dr(on(Vr),e,i);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||on(Vr);const o=ks(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=As._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Dr(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Dr(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cw(e))return"Blackberry";if(Ow(e))return"Webos";if(Xd(e))return"Safari";if((e.includes("chrome/")||Aw(e))&&!e.includes("edge/"))return"Chrome";if(ja(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Dw(t=ze()){return/firefox\//i.test(t)}function Xd(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Aw(t=ze()){return/crios\//i.test(t)}function kw(t=ze()){return/iemobile/i.test(t)}function ja(t=ze()){return/android/i.test(t)}function Cw(t=ze()){return/blackberry/i.test(t)}function Ow(t=ze()){return/webos/i.test(t)}function to(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hk(t=ze()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function dk(t=ze()){var e;return to(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fk(){return sw()&&document.documentMode===10}function Nw(t=ze()){return to(t)||ja(t)||Ow(t)||Cw(t)||/windows phone/i.test(t)||kw(t)}function mk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e=[]){let n;switch(t){case"Browser":n=$p(ze());break;case"Worker":n=`${$p(ze())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=s)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.beforeStateQueue=new pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ww,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ga(e)}catch(i){if(((n=i)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?te(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function vt(t){return te(t)}class Up{constructor(e){this.auth=e,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vk(t,e,n){const i=vt(t);F(i._canInitEmulator,i,"emulator-config-failed"),F(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=Mw(e),{host:o,port:a}=yk(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wk()}function Mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yk(t){const e=Mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Bp(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Bp(o)}}}function Bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e){return wt(t,"POST","/v1/accounts:resetPassword",lt(t,e))}async function Pw(t,e){return wt(t,"POST","/v1/accounts:update",e)}async function _k(t,e){return wt(t,"POST","/v1/accounts:update",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bk(t,e){return di(t,"POST","/v1/accounts:signInWithPassword",lt(t,e))}async function jc(t,e){return wt(t,"POST","/v1/accounts:sendOobCode",lt(t,e))}async function Ik(t,e){return jc(t,e)}async function Ek(t,e){return jc(t,e)}async function Tk(t,e){return jc(t,e)}async function Sk(t,e){return jc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",lt(t,e))}async function Ak(t,e){return di(t,"POST","/v1/accounts:signInWithEmailLink",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends no{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ya(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ya(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return bk(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dk(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Pw(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ak(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e){return di(t,"POST","/v1/accounts:signInWithIdp",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="http://localhost";class zn extends no{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=zd(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new zn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}buildRequest(){const e={requestUri:kk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(t,e){return wt(t,"POST","/v1/accounts:sendVerificationCode",lt(t,e))}async function Ok(t,e){return di(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,e))}async function Nk(t,e){const n=await di(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,e));if(n.temporaryProof)throw Ro(t,"account-exists-with-different-credential",n);return n}const xk={USER_NOT_FOUND:"user-not-found"};async function Mk(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return di(t,"POST","/v1/accounts:signInWithPhoneNumber",lt(t,n),xk)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends no{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Cs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Cs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ok(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Nk(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Mk(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r}=e;return!i&&!n&&!s&&!r?null:new Cs({verificationId:n,verificationCode:i,phoneNumber:s,temporaryProof:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pk(t){const e=wr(Mo(t)).link,n=e?wr(Mo(e)).deep_link_id:null,i=wr(Mo(t)).deep_link_id;return(i?wr(Mo(i)).link:null)||i||n||e||t}class qc{constructor(e){var n,i,s,r,o,a;const l=wr(Mo(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=Rk((s=l.mode)!==null&&s!==void 0?s:null);F(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Pk(e);try{return new qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,n){return ya._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=qc.parseLink(n);return F(i,"argument-error"),ya._fromEmailAndCode(e,i.code,i.tenantId)}}Yi.PROVIDER_ID="password";Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ar extends io{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return F("providerId"in n&&"signInMethod"in n,"argument-error"),zn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),zn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ar.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ar.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:a}=e;if(!i&&!s&&!n&&!r||!a)return null;try{return new Ar(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends io{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ln.credential(n,i)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends io{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="http://localhost";class Fr extends no{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return oi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,oi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oi(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,pendingToken:r}=n;return!i||!s||!r||i!==s?null:new Fr(i,r)}static _create(e,n){return new Fr(e,n)}buildRequest(){return{requestUri:Lk,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="saml.";class Yl extends fi{constructor(e){F(e.startsWith(Vk),"argument-error"),super(e)}static credentialFromResult(e){return Yl.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yl.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Fr.fromJSON(e);return F(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return Fr._create(i,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends io{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Fn.credential(n,i)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(t,e){return di(t,"POST","/v1/accounts:signUp",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await As._fromIdTokenResponse(e,i,s),o=jp(i);return new vn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=jp(i);return new vn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fk(t){var e;const n=vt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Lw(n,{returnSecureToken:!0}),s=await vn._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends Gt{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ql.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ql(e,n,i,s)}}function Vw(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ql._fromErrorAndOperation(t,r,e,i):r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){const n=te(t);await Hc(!0,n,e);const{providerUserInfo:i}=await tk(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Fw(i||[]);return n.providerData=n.providerData.filter(r=>s.has(r.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Zd(t,e,n=!1){const i=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",i)}async function Hc(t,e,n){await ga(e);const i=Fw(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";F(i.has(n)===t,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(t,e,n=!1){var i;const{auth:s}=t,r="reauthenticate";try{const o=await li(t,Vw(s,r,e,t),n);F(o.idToken,s,"internal-error");const a=Bc(o.idToken);F(a,s,"internal-error");const{sub:l}=a;return F(t.uid===l,s,"user-mismatch"),vn._forOperation(t,r,o)}catch(o){throw((i=o)===null||i===void 0?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uw(t,e,n=!1){const i="signIn",s=await Vw(t,i,e),r=await vn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Wc(t,e){return Uw(vt(t),e)}async function Bw(t,e){const n=te(t);return await Hc(!1,n,e.providerId),Zd(n,e)}async function jw(t,e){return $w(te(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e){return di(t,"POST","/v1/accounts:signInWithCustomToken",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(t,e){const n=vt(t),i=await Uk(n,{token:e,returnSecureToken:!0}),s=await vn._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ef._fromServerResponse(e,n):Ct(e,"internal-error")}}class ef extends Gc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ef(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t,e,n){var i;F(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),F(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(F(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(F(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e,n){const i=te(t),s={requestType:"PASSWORD_RESET",email:e};n&&Kc(i,s,n),await Ek(i,s)}async function qk(t,e,n){await Rw(te(t),{oobCode:e,newPassword:n})}async function Hk(t,e){await _k(te(t),{oobCode:e})}async function qw(t,e){const n=te(t),i=await Rw(n,{oobCode:e}),s=i.requestType;switch(F(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(i.mfaInfo,n,"internal-error");default:F(i.email,n,"internal-error")}let r=null;return i.mfaInfo&&(r=Gc._fromServerResponse(vt(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function Wk(t,e){const{data:n}=await qw(te(t),e);return n.email}async function Gk(t,e,n){const i=vt(t),s=await Lw(i,{returnSecureToken:!0,email:e,password:n}),r=await vn._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Kk(t,e,n){return Wc(te(t),Yi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(t,e,n){const i=te(t),s={requestType:"EMAIL_SIGNIN",email:e};F(n.handleCodeInApp,i,"argument-error"),n&&Kc(i,s,n),await Tk(i,s)}function Yk(t,e){const n=qc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Qk(t,e,n){const i=te(t),s=Yi.credentialWithLink(e,n||pa());return F(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Wc(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(t,e){return wt(t,"POST","/v1/accounts:createAuthUri",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){const n=Qd()?pa():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:s}=await Jk(te(t),i);return s||[]}async function Zk(t,e){const n=te(t),i=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};e&&Kc(n.auth,s,e);const{email:r}=await Ik(n.auth,s);r!==t.email&&await t.reload()}async function eC(t,e,n){const i=te(t),s=await t.getIdToken(),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Kc(i.auth,r,n);const{email:o}=await Sk(i.auth,r);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){return wt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=te(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await li(i,tC(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function iC(t,e){return Hw(te(t),e,null)}function sC(t,e){return Hw(te(t),null,e)}async function Hw(t,e,n){const{auth:i}=t,r={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(r.email=e),n&&(r.password=n);const o=await li(t,Pw(i,r));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){var e,n;if(!t)return null;const{providerId:i}=t,s=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t==null?void 0:t.idToken)){const o=(n=(e=Bc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new kr(r,a)}}if(!i)return null;switch(i){case"facebook.com":return new oC(r,s);case"github.com":return new aC(r,s);case"google.com":return new lC(r,s);case"twitter.com":return new cC(r,s,t.screenName||null);case"custom":case"anonymous":return new kr(r,null);default:return new kr(r,i,s)}}class kr{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class Ww extends kr{constructor(e,n,i,s){super(e,n,i),this.username=s}}class oC extends kr{constructor(e,n){super(e,"facebook.com",n)}}class aC extends Ww{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lC extends kr{constructor(e,n){super(e,"google.com",n)}}class cC extends Ww{constructor(e,n,i){super(e,"twitter.com",n,i)}}function uC(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:rC(n)}class _s{constructor(e,n,i){this.type=e,this.credential=n,this.auth=i}static _fromIdtoken(e,n){return new _s("enroll",e,n)}static _fromMfaPendingCredential(e){return new _s("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _s._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return _s._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=vt(e),s=n.customData._serverResponse,r=(s.mfaInfo||[]).map(a=>Gc._fromServerResponse(i,a));F(s.mfaPendingCredential,i,"internal-error");const o=_s._fromMfaPendingCredential(s.mfaPendingCredential);return new tf(o,r,async a=>{const l=await a._process(i,o);delete s.mfaInfo,delete s.mfaPendingCredential;const c=Object.assign(Object.assign({},s),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await vn._fromIdTokenResponse(i,n.operationType,c);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return F(n.user,i,"internal-error"),vn._forOperation(n.user,n.operationType,c);default:Ct(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function hC(t,e){var n;const i=te(t),s=e;return F(e.customData.operationType,i,"argument-error"),F((n=s.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),tf._fromError(i,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:start",lt(t,e))}function fC(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:finalize",lt(t,e))}function mC(t,e){return wt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",lt(t,e))}class nf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>Gc._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new nf(e)}async getSession(){return _s._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const i=e,s=await this.getSession(),r=await li(this.user,i._process(this.user.auth,s,n));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){var n;const i=typeof e=="string"?e:e.uid,s=await this.user.getIdToken(),r=await li(this.user,mC(this.user.auth,{idToken:s,mfaEnrollmentId:i}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==i),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Ku=new WeakMap;function pC(t){const e=te(t);return Ku.has(e)||Ku.set(e,nf._fromUser(e)),Ku.get(e)}const Jl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(){const t=ze();return Xd(t)||to(t)}const vC=1e3,yC=10;class Kw extends Gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gC()&&mk(),this.fallbackToPolling=Nw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);fk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yC):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},vC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const sf=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw extends Gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zw.type="SESSION";const Ls=zw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new zc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await wC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=qa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function bC(t){ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function IC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TC(){return rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebaseLocalStorageDb",SC=1,Xl="firebaseLocalStorage",Qw="fbase_key";class Ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([Xl],e?"readwrite":"readonly").objectStore(Xl)}function DC(){const t=indexedDB.deleteDatabase(Yw);return new Ha(t).toPromise()}function Rh(){const t=indexedDB.open(Yw,SC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Xl,{keyPath:Qw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Xl)?e(i):(i.close(),await DC(),e(await Rh()))})})}async function qp(t,e,n){const i=Yc(t,!0).put({[Qw]:e,value:n});return new Ha(i).toPromise()}async function AC(t,e){const n=Yc(t,!1).get(e),i=await new Ha(n).toPromise();return i===void 0?null:i.value}function Hp(t,e){const n=Yc(t,!0).delete(e);return new Ha(n).toPromise()}const kC=800,CC=3;class Jw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>CC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zc._getInstance(TC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IC(),!this.activeServiceWorker)return;this.sender=new _C(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rh();return await qp(e,Jl,"1"),await Hp(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>qp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>AC(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Yc(s,!1).getAll();return new Ha(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jw.type="LOCAL";const wa=Jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t,e){return wt(t,"POST","/v2/accounts/mfaSignIn:start",lt(t,e))}function NC(t,e){return wt(t,"POST","/v2/accounts/mfaSignIn:finalize",lt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(t){return(await wt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Xw(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=At("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",MC().appendChild(i)})}function Zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=500,PC=6e4,yl=1e12;class LC{constructor(e){this.auth=e,this.counter=yl,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new VC(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||yl;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||yl;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||yl;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class VC{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;F(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=FC(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},PC)},RC))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function FC(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=Zw("rcb"),$C=new Ba(3e4,6e4),UC="https://www.google.com/recaptcha/api.js?";class BC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ot().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return F(jC(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(ot().grecaptcha):new Promise((i,s)=>{const r=ot().setTimeout(()=>{s(At(e,"network-request-failed"))},$C.get());ot()[zu]=()=>{ot().clearTimeout(r),delete ot()[zu];const a=ot().grecaptcha;if(!a){s(At(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const h=l(c,u);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${UC}?${Zr({onload:zu,render:"explicit",hl:n})}`;Xw(o).catch(()=>{clearTimeout(r),s(At(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ot().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class qC{async load(e){return new LC(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="recaptcha",HC={theme:"light",type:"image"};class WC{constructor(e,n=Object.assign({},HC),i){this.parameters=n,this.type=e_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=vt(i),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;F(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new qC:new BC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(s=>{const r=o=>{!o||(this.tokenChangeListeners.delete(r),s(o))};this.tokenChangeListeners.add(r),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=ot()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(Qd()&&!rf(),this.auth,"internal-error"),await GC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xC(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function GC(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Cs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function KC(t,e,n){const i=vt(t),s=await Qc(i,e,te(n));return new of(s,r=>Wc(i,r))}async function zC(t,e,n){const i=te(t);await Hc(!1,i,"phone");const s=await Qc(i.auth,e,te(n));return new of(s,r=>Bw(i,r))}async function YC(t,e,n){const i=te(t),s=await Qc(i.auth,e,te(n));return new of(s,r=>jw(i,r))}async function Qc(t,e,n){var i;const s=await n.verify();try{F(typeof s=="string",t,"argument-error"),F(n.type===e_,t,"argument-error");let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const o=r.session;if("phoneNumber"in r)return F(o.type==="enroll",t,"internal-error"),(await dC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{F(o.type==="signin",t,"internal-error");const a=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;return F(a,t,"missing-multi-factor-info"),(await OC(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Ck(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return o}}finally{n._reset()}}async function QC(t,e){await Zd(te(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.providerId=Sn.PROVIDER_ID,this.auth=vt(e)}verifyPhoneNumber(e,n){return Qc(this.auth,e,te(n))}static credential(e,n){return Cs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Sn.credentialFromTaggedObject(n)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Cs._fromTokenResponse(n,i):null}}Sn.PROVIDER_ID="phone";Sn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){return e?on(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends no{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JC(t){return Uw(t.auth,new af(t),t.bypassAuthState)}function XC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),$w(n,new af(t),t.bypassAuthState)}async function ZC(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Zd(n,new af(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JC;case"linkViaPopup":case"linkViaRedirect":return ZC;case"reauthViaPopup":case"reauthViaRedirect":return XC;default:Ct(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=new Ba(2e3,1e4);async function t1(t,e,n){const i=vt(t);eo(t,e,fi);const s=nr(i,n);return new ni(i,"signInViaPopup",e,s).executeNotNull()}async function n1(t,e,n){const i=te(t);eo(i.auth,e,fi);const s=nr(i.auth,n);return new ni(i.auth,"reauthViaPopup",e,s,i).executeNotNull()}async function i1(t,e,n){const i=te(t);eo(i.auth,e,fi);const s=nr(i.auth,n);return new ni(i.auth,"linkViaPopup",e,s,i).executeNotNull()}class ni extends t_{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ni.currentPopupAction&&ni.currentPopupAction.cancel(),ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,e1.get())};e()}}ni.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="pendingRedirect",Ko=new Map;class r1 extends t_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ko.get(this.auth._key());if(!e){try{const i=await o1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ko.set(this.auth._key(),e)}return this.bypassAuthState||Ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o1(t,e){const n=i_(e),i=n_(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function lf(t,e){return n_(t)._set(i_(e),"true")}function a1(){Ko.clear()}function cf(t,e){Ko.set(t._key(),e)}function n_(t){return on(t._redirectPersistence)}function i_(t){return ks(s1,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e,n){return c1(t,e,n)}async function c1(t,e,n){const i=vt(t);eo(t,e,fi);const s=nr(i,n);return await lf(s,i),s._openRedirect(i,e,"signInViaRedirect")}function u1(t,e,n){return h1(t,e,n)}async function h1(t,e,n){const i=te(t);eo(i.auth,e,fi);const s=nr(i.auth,n);await lf(s,i.auth);const r=await s_(i);return s._openRedirect(i.auth,e,"reauthViaRedirect",r)}function d1(t,e,n){return f1(t,e,n)}async function f1(t,e,n){const i=te(t);eo(i.auth,e,fi);const s=nr(i.auth,n);await Hc(!1,i,e.providerId),await lf(s,i.auth);const r=await s_(i);return s._openRedirect(i.auth,e,"linkViaRedirect",r)}async function m1(t,e){return await vt(t)._initializationPromise,Jc(t,e,!1)}async function Jc(t,e,n=!1){const i=vt(t),s=nr(i,e),o=await new r1(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function s_(t){const e=qa(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=10*60*1e3;class r_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!o_(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(At(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wp(e))}saveEventToCache(e){this.cachedEventUids.add(Wp(e)),this.lastProcessedEventTime=Date.now()}}function Wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a_(t,e={}){return wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,y1=/^https?/;async function w1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await a_(t);for(const n of e)try{if(_1(n))return}catch{}Ct(t,"unauthorized-domain")}function _1(t){const e=pa(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!y1.test(n))return!1;if(v1.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new Ba(3e4,6e4);function Gp(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var i,s,r;function o(){Gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gp(),n(At(t,"network-request-failed"))},timeout:b1.get()})}if(!((s=(i=ot().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ot().gapi)===null||r===void 0)&&r.load)o();else{const a=Zw("iframefcb");return ot()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},Xw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function E1(t){return Nl=Nl||I1(t),Nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new Ba(5e3,15e3),S1="__/auth/iframe",D1="emulator/auth/iframe",A1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jd(e,D1):`https://${t.config.authDomain}/${S1}`,i={apiKey:e.apiKey,appName:t.name,v:tr},s=k1.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${Zr(i).slice(1)}`}async function O1(t){const e=await E1(t),n=ot().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:C1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A1,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=ot().setTimeout(()=>{r(o)},T1.get());function l(){ot().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x1=500,M1=600,R1="_blank",P1="http://localhost";class Kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function L1(t,e,n,i=x1,s=M1){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},N1),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ze().toLowerCase();n&&(a=Aw(c)?R1:n),Dw(c)&&(e=e||P1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(dk(c)&&a!=="_self")return V1(e||"",a),new Kp(null);const h=window.open(e||"",a,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Kp(h)}function V1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="__/auth/handler",$1="emulator/auth/handler";function Ph(t,e,n,i,s,r){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:tr,eventId:s};if(e instanceof fi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ED(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof io){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${U1(t)}?${Zr(a).slice(1)}`}function U1({config:t}){return t.emulator?Jd(t,$1):`https://${t.authDomain}/${F1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class B1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ls,this._completeRedirectFn=Jc,this._overrideRedirectResult=cf}async _openPopup(e,n,i,s){var r;Dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Ph(e,n,i,pa(),s);return L1(e,o,qa())}async _openRedirect(e,n,i,s){return await this._originValidation(e),bC(Ph(e,n,i,pa(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await O1(e),i=new r_(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Yu];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nw()||Xd()||to()}}const j1=B1;class q1{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return Un("unexpected MultiFactorSessionType")}}}class uf extends q1{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new uf(e)}_finalizeEnroll(e,n,i){return fC(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return NC(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class l_{constructor(){}static assertion(e){return uf._fromCredential(e)}}l_.FACTOR_ID="phone";var zp="@firebase/auth",Yp="0.20.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function G1(t){Vi(new Kn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=i.options;return((a,l)=>{F(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xw(t)},u=new gk(a,l,c);return zA(u,n),u})(i,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vi(new Kn("auth-internal",e=>{const n=vt(e.getProvider("auth").getImmediate());return(i=>new H1(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(zp,Yp,W1(t)),Tn(zp,Yp,"esm2017")}G1("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=2e3;async function z1(t,e,n){var i;const{BuildInfo:s}=Vs();Dn(e.sessionId,"AuthEvent did not contain a session ID");const r=await Z1(e.sessionId),o={};return to()?o.ibi=s.packageName:ja()?o.apn=s.packageName:Ct(t,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=r,Ph(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function Y1(t){const{BuildInfo:e}=Vs(),n={};to()?n.iosBundleId=e.packageName:ja()?n.androidPackageName=e.packageName:Ct(t,"operation-not-supported-in-this-environment"),await a_(t,n)}function Q1(t){const{cordova:e}=Vs();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let s=null;i?e.plugins.browsertab.openUrl(t):s=e.InAppBrowser.open(t,hk()?"_blank":"_system","location=yes"),n(s)})})}async function J1(t,e,n){const{cordova:i}=Vs();let s=()=>{};try{await new Promise((r,o)=>{let a=null;function l(){var h;r();const d=(h=i.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(At(t,"redirect-cancelled-by-user"))},K1))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),ja()&&document.addEventListener("visibilitychange",u,!1),s=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{s()}}function X1(t){var e,n,i,s,r,o,a,l,c,u;const h=Vs();F(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),F(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),F(typeof((r=(s=(i=h==null?void 0:h.cordova)===null||i===void 0?void 0:i.plugins)===null||s===void 0?void 0:s.browsertab)===null||r===void 0?void 0:r.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((l=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),F(typeof((u=(c=h==null?void 0:h.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Z1(t){const e=eO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function eO(t){if(Dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=20;class nO extends r_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function iO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:oO(),postBody:null,tenantId:t.tenantId,error:At(t,"no-auth-event")}}function sO(t,e){return Lh()._set(Vh(t),e)}async function Qp(t){const e=await Lh()._get(Vh(t));return e&&await Lh()._remove(Vh(t)),e}function rO(t,e){var n,i;const s=lO(e);if(s.includes("/__/auth/callback")){const r=xl(s),o=r.firebaseError?aO(decodeURIComponent(r.firebaseError)):null,a=(i=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],l=a?At(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:s,postBody:null}}return null}function oO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<tO;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function Lh(){return on(sf)}function Vh(t){return ks("authEvent",t.config.apiKey,t.name)}function aO(t){try{return JSON.parse(t)}catch{return null}}function lO(t){const e=xl(t),n=e.link?decodeURIComponent(e.link):void 0,i=xl(n).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return xl(s).link||s||i||n||t}function xl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return wr(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=500;class uO{constructor(){this._redirectPersistence=Ls,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Jc,this._overrideRedirectResult=cf}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new nO(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Ct(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,s){X1(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),a1(),await this._originValidation(e);const o=iO(e,i,s);await sO(e,o);const a=await z1(e,o,n),l=await Q1(a);return J1(e,r,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y1(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:s,BuildInfo:r}=Vs(),o=setTimeout(async()=>{await Qp(e),n.onEvent(Jp())},cO),a=async u=>{clearTimeout(o);const h=await Qp(e);let d=null;h&&(u==null?void 0:u.url)&&(d=rO(h,u.url)),n.onEvent(d||Jp())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const l=s,c=`${r.packageName.toLowerCase()}://`;Vs().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(h){console.error(h)}}}}const hO=uO;function Jp(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:At("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t,e){vt(t)._logFramework(e)}var fO="@firebase/auth-compat",mO="0.2.20";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=1e3;function zo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function gO(){return zo()==="http:"||zo()==="https:"}function c_(t=ze()){return!!((zo()==="file:"||zo()==="ionic:"||zo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function vO(){return Wd()||Hd()}function yO(){return sw()&&(document==null?void 0:document.documentMode)===11}function wO(t=ze()){return/Edge\/\d+/.test(t)}function _O(t=ze()){return yO()||wO(t)}function u_(){try{const t=self.localStorage,e=qa();if(t)return t.setItem(e,"1"),t.removeItem(e),_O()?da():!0}catch{return hf()&&da()}return!1}function hf(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Qu(){return(gO()||iw()||c_())&&!vO()&&u_()&&!hf()}function h_(){return c_()&&typeof document<"u"}async function bO(){return h_()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},pO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function IO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={LOCAL:"local",NONE:"none",SESSION:"session"},_o=F,d_="persistence";function EO(t,e){if(_o(Object.values(rn).includes(e),t,"invalid-persistence-type"),Wd()){_o(e!==rn.SESSION,t,"unsupported-persistence-type");return}if(Hd()){_o(e===rn.NONE,t,"unsupported-persistence-type");return}if(hf()){_o(e===rn.NONE||e===rn.LOCAL&&da(),t,"unsupported-persistence-type");return}_o(e===rn.NONE||u_(),t,"unsupported-persistence-type")}async function Fh(t){await t._initializationPromise;const e=f_(),n=ks(d_,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function TO(t,e){const n=f_();if(!n)return[];const i=ks(d_,t,e);switch(n.getItem(i)){case rn.NONE:return[Vr];case rn.LOCAL:return[wa,Ls];case rn.SESSION:return[Ls];default:return[]}}function f_(){var t;try{return((t=IO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=F;class Ai{constructor(){this.browserResolver=on(j1),this.cordovaResolver=on(hO),this.underlyingResolver=null,this._redirectPersistence=Ls,this._completeRedirectFn=Jc,this._overrideRedirectResult=cf}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,s)}async _openRedirect(e,n,i,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,s)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return h_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return SO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await bO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){return t.unwrap()}function DO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t){return p_(t)}function kO(t,e){var n,i;const s=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((i=e)===null||i===void 0?void 0:i.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new CO(t,hC(t,e))}else if(s){const r=p_(e),o=e;r&&(o.credential=r,o.tenantId=s.tenantId||void 0,o.email=s.email||void 0,o.phoneNumber=s.phoneNumber||void 0)}}function p_(t){const{_tokenResponse:e}=t instanceof Gt?t.customData:t;if(!e)return null;if(!(t instanceof Gt)&&"temporaryProof"in e&&"phoneNumber"in e)return Sn.credentialFromResult(t);const n=e.providerId;if(!n||n===wo.PASSWORD)return null;let i;switch(n){case wo.GOOGLE:i=Ln;break;case wo.FACEBOOK:i=Pn;break;case wo.GITHUB:i=Vn;break;case wo.TWITTER:i=Fn;break;default:const{oauthIdToken:s,oauthAccessToken:r,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!r&&!o&&!s&&!a?null:a?n.startsWith("saml.")?Fr._create(n,a):zn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:s,accessToken:r}):new Ar(n).credential({idToken:s,accessToken:r,rawNonce:l})}return t instanceof Gt?i.credentialFromError(t):i.credentialFromResult(t)}function Jt(t,e){return e.catch(n=>{throw n instanceof Gt&&kO(t,n),n}).then(n=>{const i=n.operationType,s=n.user;return{operationType:i,credential:AO(n),additionalUserInfo:uC(n),user:ii.getOrCreate(s)}})}async function $h(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>Jt(t,n.confirm(i))}}class CO{constructor(e,n){this.resolver=n,this.auth=DO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Jt(m_(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._delegate=e,this.multiFactor=pC(e)}static getOrCreate(e){return ii.USER_MAP.has(e)||ii.USER_MAP.set(e,new ii(e)),ii.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Jt(this.auth,Bw(this._delegate,e))}async linkWithPhoneNumber(e,n){return $h(this.auth,zC(this._delegate,e,n))}async linkWithPopup(e){return Jt(this.auth,i1(this._delegate,e,Ai))}async linkWithRedirect(e){return await Fh(vt(this.auth)),d1(this._delegate,e,Ai)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Jt(this.auth,jw(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return $h(this.auth,YC(this._delegate,e,n))}reauthenticateWithPopup(e){return Jt(this.auth,n1(this._delegate,e,Ai))}async reauthenticateWithRedirect(e){return await Fh(vt(this.auth)),u1(this._delegate,e,Ai)}sendEmailVerification(e){return Zk(this._delegate,e)}async unlink(e){return await $k(this._delegate,e),this}updateEmail(e){return iC(this._delegate,e)}updatePassword(e){return sC(this._delegate,e)}updatePhoneNumber(e){return QC(this._delegate,e)}updateProfile(e){return nC(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return eC(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ii.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=F;class Uh{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;bo(i,"invalid-api-key",{appName:e.name}),bo(i,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?Ai:void 0;this._delegate=n.initialize({options:{persistence:OO(i,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(GA),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ii.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){vk(this._delegate,e,n)}applyActionCode(e){return Hk(this._delegate,e)}checkActionCode(e){return qw(this._delegate,e)}confirmPasswordReset(e,n){return qk(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Jt(this._delegate,Gk(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Xk(this._delegate,e)}isSignInWithEmailLink(e){return Yk(this._delegate,e)}async getRedirectResult(){bo(Qu(),this._delegate,"operation-not-supported-in-this-environment");const e=await m1(this._delegate,Ai);return e?Jt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){dO(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:s,error:r,complete:o}=Xp(e,n,i);return this._delegate.onAuthStateChanged(s,r,o)}onIdTokenChanged(e,n,i){const{next:s,error:r,complete:o}=Xp(e,n,i);return this._delegate.onIdTokenChanged(s,r,o)}sendSignInLinkToEmail(e,n){return zk(this._delegate,e,n)}sendPasswordResetEmail(e,n){return jk(this._delegate,e,n||void 0)}async setPersistence(e){EO(this._delegate,e);let n;switch(e){case rn.SESSION:n=Ls;break;case rn.LOCAL:n=await on(wa)._isAvailable()?wa:sf;break;case rn.NONE:n=Vr;break;default:return Ct("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Jt(this._delegate,Fk(this._delegate))}signInWithCredential(e){return Jt(this._delegate,Wc(this._delegate,e))}signInWithCustomToken(e){return Jt(this._delegate,Bk(this._delegate,e))}signInWithEmailAndPassword(e,n){return Jt(this._delegate,Kk(this._delegate,e,n))}signInWithEmailLink(e,n){return Jt(this._delegate,Qk(this._delegate,e,n))}signInWithPhoneNumber(e,n){return $h(this._delegate,KC(this._delegate,e,n))}async signInWithPopup(e){return bo(Qu(),this._delegate,"operation-not-supported-in-this-environment"),Jt(this._delegate,t1(this._delegate,e,Ai))}async signInWithRedirect(e){return bo(Qu(),this._delegate,"operation-not-supported-in-this-environment"),await Fh(this._delegate),l1(this._delegate,e,Ai)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Wk(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Uh.Persistence=rn;function Xp(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const s=i;return{next:o=>s(o&&ii.getOrCreate(o)),error:e,complete:n}}function OO(t,e){const n=TO(t,e);if(typeof self<"u"&&!n.includes(wa)&&n.push(wa),typeof window<"u")for(const i of[sf,Ls])n.includes(i)||n.push(i);return n.includes(Vr)||n.push(Vr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.providerId="phone",this._delegate=new Sn(m_(zi.auth()))}static credential(e,n){return Sn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}df.PHONE_SIGN_IN_METHOD=Sn.PHONE_SIGN_IN_METHOD;df.PROVIDER_ID=Sn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=F;class xO{constructor(e,n,i=zi.app()){var s;NO((s=i.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new WC(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="auth-compat";function RO(t){t.INTERNAL.registerComponent(new Kn(MO,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Uh(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:dr.EMAIL_SIGNIN,PASSWORD_RESET:dr.PASSWORD_RESET,RECOVER_EMAIL:dr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:dr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:dr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:dr.VERIFY_EMAIL}},EmailAuthProvider:Yi,FacebookAuthProvider:Pn,GithubAuthProvider:Vn,GoogleAuthProvider:Ln,OAuthProvider:Ar,SAMLAuthProvider:Yl,PhoneAuthProvider:df,PhoneMultiFactorGenerator:l_,RecaptchaVerifier:xO,TwitterAuthProvider:Fn,Auth:Uh,AuthCredential:no,Error:Gt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(fO,mO)}RO(zi);var PO="firebase",LO="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zi.registerVersion(PO,LO,"app-compat");var VO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Z,ff=ff||{},ce=VO||self;function Zl(){}function Xc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function FO(t){return Object.prototype.hasOwnProperty.call(t,Ju)&&t[Ju]||(t[Ju]=++$O)}var Ju="closure_uid_"+(1e9*Math.random()>>>0),$O=0;function UO(t,e,n){return t.call.apply(t.bind,arguments)}function BO(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Vt=UO:Vt=BO,Vt.apply(null,arguments)}function wl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Ot(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Qi(){this.s=this.s,this.o=this.o}var jO=0;Qi.prototype.s=!1;Qi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),jO!=0)&&FO(this)};Qi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const g_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mf(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Zp(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Xc(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function Ft(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ft.prototype.h=function(){this.defaultPrevented=!0};var qO=function(){if(!ce.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ce.addEventListener("test",Zl,e),ce.removeEventListener("test",Zl,e)}catch{}return t}();function ec(t){return/^[\s\xa0]*$/.test(t)}var eg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xu(t,e){return t<e?-1:t>e?1:0}function Zc(){var t=ce.navigator;return t&&(t=t.userAgent)?t:""}function $n(t){return Zc().indexOf(t)!=-1}function pf(t){return pf[" "](t),t}pf[" "]=Zl;function HO(t){var e=KO;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WO=$n("Opera"),$r=$n("Trident")||$n("MSIE"),v_=$n("Edge"),Bh=v_||$r,y_=$n("Gecko")&&!(Zc().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge"))&&!($n("Trident")||$n("MSIE"))&&!$n("Edge"),GO=Zc().toLowerCase().indexOf("webkit")!=-1&&!$n("Edge");function w_(){var t=ce.document;return t?t.documentMode:void 0}var tc;e:{var Zu="",eh=function(){var t=Zc();if(y_)return/rv:([^\);]+)(\)|;)/.exec(t);if(v_)return/Edge\/([\d\.]+)/.exec(t);if($r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(GO)return/WebKit\/(\S+)/.exec(t);if(WO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(eh&&(Zu=eh?eh[1]:""),$r){var th=w_();if(th!=null&&th>parseFloat(Zu)){tc=String(th);break e}}tc=Zu}var KO={};function zO(){return HO(function(){let t=0;const e=eg(String(tc)).split("."),n=eg("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;t=Xu(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Xu(s[2].length==0,r[2].length==0)||Xu(s[2],r[2]),s=s[3],r=r[3]}while(t==0)}return 0<=t})}var jh;if(ce.document&&$r){var tg=w_();jh=tg||parseInt(tc,10)||void 0}else jh=void 0;var YO=jh;function _a(t,e){if(Ft.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y_){e:{try{pf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:QO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_a.X.h.call(this)}}Ot(_a,Ft);var QO={2:"touch",3:"pen",4:"mouse"};_a.prototype.h=function(){_a.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ga="closure_listenable_"+(1e6*Math.random()|0),JO=0;function XO(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++JO,this.ba=this.ea=!1}function eu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gf(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function __(t){const e={};for(const n in t)e[n]=t[n];return e}const ng="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b_(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<ng.length;r++)n=ng[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function tu(t){this.src=t,this.g={},this.h=0}tu.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Hh(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new XO(e,this.src,r,!!i,s),e.ea=n,t.push(e)),e};function qh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=g_(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(eu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hh(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}var vf="closure_lm_"+(1e6*Math.random()|0),nh={};function I_(t,e,n,i,s){if(i&&i.once)return T_(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)I_(t,e[r],n,i,s);return null}return n=_f(n),t&&t[Ga]?t.N(e,n,Wa(i)?!!i.capture:!!i,s):E_(t,e,n,!1,i,s)}function E_(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Wa(s)?!!s.capture:!!s,a=wf(t);if(a||(t[vf]=a=new tu(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=ZO(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)qO||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(D_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZO(){function t(n){return e.call(t.src,t.listener,n)}const e=eN;return t}function T_(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)T_(t,e[r],n,i,s);return null}return n=_f(n),t&&t[Ga]?t.O(e,n,Wa(i)?!!i.capture:!!i,s):E_(t,e,n,!0,i,s)}function S_(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)S_(t,e[r],n,i,s);else i=Wa(i)?!!i.capture:!!i,n=_f(n),t&&t[Ga]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Hh(r,n,i,s),-1<n&&(eu(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=wf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hh(e,n,i,s)),(n=-1<t?e[t]:null)&&yf(n))}function yf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ga])qh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(D_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=wf(e))?(qh(n,t),n.h==0&&(n.src=null,e[vf]=null)):eu(t)}}}function D_(t){return t in nh?nh[t]:nh[t]="on"+t}function eN(t,e){if(t.ba)t=!0;else{e=new _a(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&yf(t),t=n.call(i,e)}return t}function wf(t){return t=t[vf],t instanceof tu?t:null}var ih="__closure_events_fn_"+(1e9*Math.random()>>>0);function _f(t){return typeof t=="function"?t:(t[ih]||(t[ih]=function(e){return t.handleEvent(e)}),t[ih])}function yt(){Qi.call(this),this.i=new tu(this),this.P=this,this.I=null}Ot(yt,Qi);yt.prototype[Ga]=!0;yt.prototype.removeEventListener=function(t,e,n,i){S_(this,t,e,n,i)};function kt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new Ft(e,t);else if(e instanceof Ft)e.target=e.target||t;else{var s=e;e=new Ft(i,t),b_(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=_l(o,i,!0,e)&&s}if(o=e.g=t,s=_l(o,i,!0,e)&&s,s=_l(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=_l(o,i,!1,e)&&s}yt.prototype.M=function(){if(yt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)eu(n[i]);delete t.g[e],t.h--}}this.I=null};yt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};yt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function _l(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&qh(t.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var bf=ce.JSON.stringify;function tN(){var t=C_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nN{constructor(){this.h=this.g=null}add(e,n){const i=A_.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var A_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iN,t=>t.reset());class iN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function sN(t){ce.setTimeout(()=>{throw t},0)}function k_(t,e){Wh||rN(),Gh||(Wh(),Gh=!0),C_.add(t,e)}var Wh;function rN(){var t=ce.Promise.resolve(void 0);Wh=function(){t.then(oN)}}var Gh=!1,C_=new nN;function oN(){for(var t;t=tN();){try{t.h.call(t.g)}catch(n){sN(n)}var e=A_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gh=!1}function nu(t,e){yt.call(this),this.h=t||1,this.g=e||ce,this.j=Vt(this.kb,this),this.l=Date.now()}Ot(nu,yt);Z=nu.prototype;Z.ca=!1;Z.R=null;Z.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),kt(this,"tick"),this.ca&&(If(this),this.start()))}};Z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function If(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}Z.M=function(){nu.X.M.call(this),If(this),delete this.g};function Ef(t,e,n){if(typeof t=="function")n&&(t=Vt(t,n));else if(t&&typeof t.handleEvent=="function")t=Vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ce.setTimeout(t,e||0)}function O_(t){t.g=Ef(()=>{t.g=null,t.i&&(t.i=!1,O_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aN extends Qi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:O_(this)}M(){super.M(),this.g&&(ce.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ba(t){Qi.call(this),this.h=t,this.g={}}Ot(ba,Qi);var ig=[];function N_(t,e,n,i){Array.isArray(n)||(n&&(ig[0]=n.toString()),n=ig);for(var s=0;s<n.length;s++){var r=I_(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function x_(t){gf(t.g,function(e,n){this.g.hasOwnProperty(n)&&yf(e)},t),t.g={}}ba.prototype.M=function(){ba.X.M.call(this),x_(this)};ba.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function iu(){this.g=!0}iu.prototype.Aa=function(){this.g=!1};function lN(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function cN(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function _r(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hN(t,n)+(i?" "+i:"")})}function uN(t,e){t.info(function(){return"TIMEOUT: "+e})}iu.prototype.info=function(){};function hN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return bf(n)}catch{return e}}var ir={},sg=null;function su(){return sg=sg||new yt}ir.Oa="serverreachability";function M_(t){Ft.call(this,ir.Oa,t)}Ot(M_,Ft);function Ia(t){const e=su();kt(e,new M_(e))}ir.STAT_EVENT="statevent";function R_(t,e){Ft.call(this,ir.STAT_EVENT,t),this.stat=e}Ot(R_,Ft);function Wt(t){const e=su();kt(e,new R_(e,t))}ir.Pa="timingevent";function P_(t,e){Ft.call(this,ir.Pa,t),this.size=e}Ot(P_,Ft);function Ka(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ce.setTimeout(function(){t()},e)}var ru={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},L_={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tf(){}Tf.prototype.h=null;function rg(t){return t.h||(t.h=t.i())}function V_(){}var za={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Sf(){Ft.call(this,"d")}Ot(Sf,Ft);function Df(){Ft.call(this,"c")}Ot(Df,Ft);var Kh;function ou(){}Ot(ou,Tf);ou.prototype.g=function(){return new XMLHttpRequest};ou.prototype.i=function(){return{}};Kh=new ou;function Ya(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new ba(this),this.O=dN,t=Bh?125:void 0,this.T=new nu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new F_}function F_(){this.i=null,this.g="",this.h=!1}var dN=45e3,zh={},nc={};Z=Ya.prototype;Z.setTimeout=function(t){this.O=t};function Yh(t,e,n){t.K=1,t.v=lu(ci(e)),t.s=n,t.P=!0,$_(t,null)}function $_(t,e){t.F=Date.now(),Qa(t),t.A=ci(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),K_(n.i,"t",i),t.C=0,n=t.l.H,t.h=new F_,t.g=mb(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aN(Vt(t.Ka,t,t.g),t.N)),N_(t.S,t.g,"readystatechange",t.hb),e=t.H?__(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ia(),lN(t.j,t.u,t.A,t.m,t.U,t.s)}Z.hb=function(t){t=t.target;const e=this.L;e&&si(t)==3?e.l():this.Ka(t)};Z.Ka=function(t){try{if(t==this.g)e:{const u=si(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Bh||this.g&&(this.h.h||this.g.fa()||cg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ia(3):Ia(2)),au(this);var n=this.g.aa();this.Y=n;t:if(U_(this)){var i=cg(this.g);t="";var s=i.length,r=si(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bs(this),Yo(this);var o="";break t}this.h.i=new ce.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,cN(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ec(a)){var c=a;break t}}c=null}if(n=c)_r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Qh(this,n);else{this.i=!1,this.o=3,Wt(12),bs(this),Yo(this);break e}}this.P?(B_(this,u,o),Bh&&this.i&&u==3&&(N_(this.S,this.T,"tick",this.gb),this.T.start())):(_r(this.j,this.m,o,null),Qh(this,o)),u==4&&bs(this),this.i&&!this.I&&(u==4?ub(this.l,this):(this.i=!1,Qa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Wt(12)):(this.o=0,Wt(13)),bs(this),Yo(this)}}}catch{}finally{}};function U_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function B_(t,e,n){let i=!0,s;for(;!t.I&&t.C<n.length;)if(s=fN(t,n),s==nc){e==4&&(t.o=4,Wt(14),i=!1),_r(t.j,t.m,null,"[Incomplete Response]");break}else if(s==zh){t.o=4,Wt(15),_r(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else _r(t.j,t.m,s,null),Qh(t,s);U_(t)&&s!=nc&&s!=zh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Wt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mf(e),e.K=!0,Wt(11))):(_r(t.j,t.m,n,"[Invalid Chunked Response]"),bs(t),Yo(t))}Z.gb=function(){if(this.g){var t=si(this.g),e=this.g.fa();this.C<e.length&&(au(this),B_(this,t,e),this.i&&t!=4&&Qa(this))}};function fN(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?nc:(n=Number(e.substring(n,i)),isNaN(n)?zh:(i+=1,i+n>e.length?nc:(e=e.substr(i,n),t.C=i+n,e)))}Z.cancel=function(){this.I=!0,bs(this)};function Qa(t){t.V=Date.now()+t.O,j_(t,t.O)}function j_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ka(Vt(t.fb,t),e)}function au(t){t.B&&(ce.clearTimeout(t.B),t.B=null)}Z.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(uN(this.j,this.A),this.K!=2&&(Ia(),Wt(17)),bs(this),this.o=2,Yo(this)):j_(this,this.V-t)};function Yo(t){t.l.G==0||t.I||ub(t.l,t)}function bs(t){au(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,If(t.T),x_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Qh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jh(n.h,t))){if(!t.J&&Jh(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)rc(n),hu(n);else break e;xf(n),Wt(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ka(Vt(n.bb,n),6e3));if(1>=Q_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Is(n,11)}else if((t.J||n.g==t)&&rc(n),!ec(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=i.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Af(r,r.h),r.h=null))}if(i.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(i.za=_,qe(i.F,i.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=fb(i,i.H?i.ka:null,i.V),o.J){J_(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(au(a),Qa(a)),i.g=o}else lb(i);0<n.i.length&&du(n)}else c[0]!="stop"&&c[0]!="close"||Is(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Is(n,7):Nf(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Ia(4)}catch{}}function mN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Xc(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function pN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Xc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function q_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Xc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=pN(t),i=mN(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var H_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Os(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Os){this.h=e!==void 0?e:t.h,ic(this,t.j),this.s=t.s,this.g=t.g,sc(this,t.m),this.l=t.l,e=t.i;var n=new Ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),og(this,n),this.o=t.o}else t&&(n=String(t).match(H_))?(this.h=!!e,ic(this,n[1]||"",!0),this.s=Po(n[2]||""),this.g=Po(n[3]||"",!0),sc(this,n[4]),this.l=Po(n[5]||"",!0),og(this,n[6]||"",!0),this.o=Po(n[7]||"")):(this.h=!!e,this.i=new Ea(null,this.h))}Os.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lo(e,ag,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lo(e,ag,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lo(n,n.charAt(0)=="/"?wN:yN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lo(n,bN)),t.join("")};function ci(t){return new Os(t)}function ic(t,e,n){t.j=n?Po(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function og(t,e,n){e instanceof Ea?(t.i=e,IN(t.i,t.h)):(n||(e=Lo(e,_N)),t.i=new Ea(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function lu(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Po(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,vN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ag=/[#\/\?@]/g,yN=/[#\?:]/g,wN=/[#\?]/g,_N=/[#\?@]/g,bN=/#/g;function Ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ji(t){t.g||(t.g=new Map,t.h=0,t.i&&gN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Z=Ea.prototype;Z.add=function(t,e){Ji(this),this.i=null,t=so(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function W_(t,e){Ji(t),e=so(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function G_(t,e){return Ji(t),e=so(t,e),t.g.has(e)}Z.forEach=function(t,e){Ji(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};Z.oa=function(){Ji(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};Z.W=function(t){Ji(this);let e=[];if(typeof t=="string")G_(this,t)&&(e=e.concat(this.g.get(so(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};Z.set=function(t,e){return Ji(this),this.i=null,t=so(this,t),G_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Z.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function K_(t,e,n){W_(t,e),0<n.length&&(t.i=null,t.g.set(so(t,e),mf(n)),t.h+=n.length)}Z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function so(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function IN(t,e){e&&!t.j&&(Ji(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(W_(this,i),K_(this,s,n))},t)),t.j=e}var EN=class{constructor(t,e){this.h=t,this.g=e}};function z_(t){this.l=t||TN,ce.PerformanceNavigationTiming?(t=ce.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ce.g&&ce.g.Ga&&ce.g.Ga()&&ce.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var TN=10;function Y_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Q_(t){return t.h?1:t.g?t.g.size:0}function Jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Af(t,e){t.g?t.g.add(e):t.h=e}function J_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}z_.prototype.cancel=function(){if(this.i=X_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function X_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mf(t.i)}function kf(){}kf.prototype.stringify=function(t){return ce.JSON.stringify(t,void 0)};kf.prototype.parse=function(t){return ce.JSON.parse(t,void 0)};function SN(){this.g=new kf}function DN(t,e,n){const i=n||"";try{q_(t,function(s,r){let o=s;Wa(s)&&(o=bf(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function AN(t,e){const n=new iu;if(ce.Image){const i=new Image;i.onload=wl(bl,n,i,"TestLoadImage: loaded",!0,e),i.onerror=wl(bl,n,i,"TestLoadImage: error",!1,e),i.onabort=wl(bl,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=wl(bl,n,i,"TestLoadImage: timeout",!1,e),ce.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function bl(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Ja(t){this.l=t.$b||null,this.j=t.ib||!1}Ot(Ja,Tf);Ja.prototype.g=function(){return new cu(this.l,this.j)};Ja.prototype.i=function(t){return function(){return t}}({});function cu(t,e){yt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Cf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ot(cu,yt);var Cf=0;Z=cu.prototype;Z.open=function(t,e){if(this.readyState!=Cf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ta(this)};Z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ce).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};Z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xa(this)),this.readyState=Cf};Z.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ta(this)),this.g&&(this.readyState=3,Ta(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof ce.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Z_(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function Z_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}Z.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xa(this):Ta(this),this.readyState==3&&Z_(this)}};Z.Ua=function(t){this.g&&(this.response=this.responseText=t,Xa(this))};Z.Ta=function(t){this.g&&(this.response=t,Xa(this))};Z.ga=function(){this.g&&Xa(this)};function Xa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ta(t)}Z.setRequestHeader=function(t,e){this.v.append(t,e)};Z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var kN=ce.JSON.parse;function rt(t){yt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=eb,this.K=this.L=!1}Ot(rt,yt);var eb="",CN=/^https?$/i,ON=["POST","PUT"];Z=rt.prototype;Z.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Kh.g(),this.C=this.u?rg(this.u):rg(Kh),this.g.onreadystatechange=Vt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){lg(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=ce.FormData&&t instanceof ce.FormData,!(0<=g_(ON,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ib(this),0<this.B&&((this.K=NN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Vt(this.qa,this)):this.A=Ef(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){lg(this,r)}};function NN(t){return $r&&zO()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}Z.qa=function(){typeof ff<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function lg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tb(t),uu(t)}function tb(t){t.D||(t.D=!0,kt(t,"complete"),kt(t,"error"))}Z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,kt(this,"complete"),kt(this,"abort"),uu(this))};Z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uu(this,!0)),rt.X.M.call(this)};Z.Ha=function(){this.s||(this.F||this.v||this.l?nb(this):this.eb())};Z.eb=function(){nb(this)};function nb(t){if(t.h&&typeof ff<"u"&&(!t.C[1]||si(t)!=4||t.aa()!=2)){if(t.v&&si(t)==4)Ef(t.Ha,0,t);else if(kt(t,"readystatechange"),si(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var s=String(t.H).match(H_)[1]||null;if(!s&&ce.self&&ce.self.location){var r=ce.self.location.protocol;s=r.substr(0,r.length-1)}i=!CN.test(s?s.toLowerCase():"")}n=i}if(n)kt(t,"complete"),kt(t,"success");else{t.m=6;try{var o=2<si(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",tb(t)}}finally{uu(t)}}}}function uu(t,e){if(t.g){ib(t);const n=t.g,i=t.C[0]?Zl:null;t.g=null,t.C=null,e||kt(t,"ready");try{n.onreadystatechange=i}catch{}}}function ib(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ce.clearTimeout(t.A),t.A=null)}function si(t){return t.g?t.g.readyState:0}Z.aa=function(){try{return 2<si(this)?this.g.status:-1}catch{return-1}};Z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};Z.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),kN(e)}};function cg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case eb:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Z.Ea=function(){return this.m};Z.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function sb(t){let e="";return gf(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Of(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=sb(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):qe(t,e,n))}function Io(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rb(t){this.Ca=0,this.i=[],this.j=new iu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Io("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Io("baseRetryDelayMs",5e3,t),this.ab=Io("retryDelaySeedMs",1e4,t),this.Za=Io("forwardChannelMaxRetries",2,t),this.ta=Io("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new z_(t&&t.concurrentRequestLimit),this.Fa=new SN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}Z=rb.prototype;Z.ma=8;Z.G=1;function Nf(t){if(ob(t),t.G==3){var e=t.U++,n=ci(t.F);qe(n,"SID",t.I),qe(n,"RID",e),qe(n,"TYPE","terminate"),Za(t,n),e=new Ya(t,t.j,e,void 0),e.K=2,e.v=lu(ci(n)),n=!1,ce.navigator&&ce.navigator.sendBeacon&&(n=ce.navigator.sendBeacon(e.v.toString(),"")),!n&&ce.Image&&(new Image().src=e.v,n=!0),n||(e.g=mb(e.l,null),e.g.da(e.v)),e.F=Date.now(),Qa(e)}db(t)}function hu(t){t.g&&(Mf(t),t.g.cancel(),t.g=null)}function ob(t){hu(t),t.u&&(ce.clearTimeout(t.u),t.u=null),rc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ce.clearTimeout(t.m),t.m=null)}function du(t){Y_(t.h)||t.m||(t.m=!0,k_(t.Ja,t),t.C=0)}function xN(t,e){return Q_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=Ka(Vt(t.Ja,t,e),hb(t,t.C)),t.C++,!0)}Z.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Ya(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=__(r),b_(r,this.S)):r=this.S),this.o!==null||this.N||(s.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ab(this,s,e),n=ci(this.F),qe(n,"RID",t),qe(n,"CVER",22),this.D&&qe(n,"X-HTTP-Session-Id",this.D),Za(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(sb(r)))+"&"+e:this.o&&Of(n,this.o,r)),Af(this.h,s),this.Xa&&qe(n,"TYPE","init"),this.O?(qe(n,"$req",e),qe(n,"SID","null"),s.Z=!0,Yh(s,n,null)):Yh(s,n,e),this.G=2}}else this.G==3&&(t?ug(this,t):this.i.length==0||Y_(this.h)||ug(this))};function ug(t,e){var n;e?n=e.m:n=t.U++;const i=ci(t.F);qe(i,"SID",t.I),qe(i,"RID",n),qe(i,"AID",t.T),Za(t,i),t.o&&t.s&&Of(i,t.o,t.s),n=new Ya(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ab(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Af(t.h,n),Yh(n,i,e)}function Za(t,e){t.ia&&gf(t.ia,function(n,i){qe(e,i,n)}),t.l&&q_({},function(n,i){qe(e,i,n)})}function ab(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Vt(t.l.Qa,t.l,t):null;e:{var s=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{DN(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function lb(t){t.g||t.u||(t.Z=1,k_(t.Ia,t),t.A=0)}function xf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ka(Vt(t.Ia,t),hb(t,t.A)),t.A++,!0)}Z.Ia=function(){if(this.u=null,cb(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ka(Vt(this.cb,this),t)}};Z.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Wt(10),hu(this),cb(this))};function Mf(t){t.B!=null&&(ce.clearTimeout(t.B),t.B=null)}function cb(t){t.g=new Ya(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ci(t.sa);qe(e,"RID","rpc"),qe(e,"SID",t.I),qe(e,"CI",t.L?"0":"1"),qe(e,"AID",t.T),qe(e,"TYPE","xmlhttp"),Za(t,e),t.o&&t.s&&Of(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=lu(ci(e)),n.s=null,n.P=!0,$_(n,t)}Z.bb=function(){this.v!=null&&(this.v=null,hu(this),xf(this),Wt(19))};function rc(t){t.v!=null&&(ce.clearTimeout(t.v),t.v=null)}function ub(t,e){var n=null;if(t.g==e){rc(t),Mf(t),t.g=null;var i=2}else if(Jh(t.h,e))n=e.D,J_(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;i=su(),kt(i,new P_(i,n)),du(t)}else lb(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(i==1&&xN(t,e)||i==2&&xf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Is(t,5);break;case 4:Is(t,10);break;case 3:Is(t,6);break;default:Is(t,2)}}}function hb(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Is(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=Vt(t.jb,t);n||(n=new Os("//www.google.com/images/cleardot.gif"),ce.location&&ce.location.protocol=="http"||ic(n,"https"),lu(n)),AN(n.toString(),i)}else Wt(2);t.G=0,t.l&&t.l.va(e),db(t),ob(t)}Z.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function db(t){if(t.G=0,t.la=[],t.l){const e=X_(t.h);(e.length!=0||t.i.length!=0)&&(Zp(t.la,e),Zp(t.la,t.i),t.h.i.length=0,mf(t.i),t.i.length=0),t.l.ua()}}function fb(t,e,n){var i=n instanceof Os?ci(n):new Os(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),sc(i,i.m);else{var s=ce.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Os(null,void 0);i&&ic(r,i),e&&(r.g=e),s&&sc(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&qe(i,n,e),qe(i,"VER",t.ma),Za(t,i),i}function mb(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new rt(new Ja({ib:!0})):new rt(t.ra),e.L=t.H,e}function pb(){}Z=pb.prototype;Z.xa=function(){};Z.wa=function(){};Z.va=function(){};Z.ua=function(){};Z.Qa=function(){};function oc(){if($r&&!(10<=Number(YO)))throw Error("Environmental error: no available transport.")}oc.prototype.g=function(t,e){return new cn(t,e)};function cn(t,e){yt.call(this),this.g=new rb(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!ec(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ec(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ro(this)}Ot(cn,yt);cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Wt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=fb(t,null,t.V),du(t)};cn.prototype.close=function(){Nf(this.g)};cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bf(t),t=n);e.i.push(new EN(e.$a++,t)),e.G==3&&du(e)};cn.prototype.M=function(){this.g.l=null,delete this.j,Nf(this.g),delete this.g,cn.X.M.call(this)};function gb(t){Sf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ot(gb,Sf);function vb(){Df.call(this),this.status=1}Ot(vb,Df);function ro(t){this.g=t}Ot(ro,pb);ro.prototype.xa=function(){kt(this.g,"a")};ro.prototype.wa=function(t){kt(this.g,new gb(t))};ro.prototype.va=function(t){kt(this.g,new vb)};ro.prototype.ua=function(){kt(this.g,"b")};oc.prototype.createWebChannel=oc.prototype.g;cn.prototype.send=cn.prototype.u;cn.prototype.open=cn.prototype.m;cn.prototype.close=cn.prototype.close;ru.NO_ERROR=0;ru.TIMEOUT=8;ru.HTTP_ERROR=6;L_.COMPLETE="complete";V_.EventType=za;za.OPEN="a";za.CLOSE="b";za.ERROR="c";za.MESSAGE="d";yt.prototype.listen=yt.prototype.N;rt.prototype.listenOnce=rt.prototype.O;rt.prototype.getLastError=rt.prototype.Na;rt.prototype.getLastErrorCode=rt.prototype.Ea;rt.prototype.getStatus=rt.prototype.aa;rt.prototype.getResponseJson=rt.prototype.Ra;rt.prototype.getResponseText=rt.prototype.fa;rt.prototype.send=rt.prototype.da;var MN=function(){return new oc},RN=function(){return su()},sh=ru,PN=L_,LN=ir,hg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},VN=Ja,Il=V_,FN=rt;const dg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=new Uc("@firebase/firestore");function Xh(){return $i.logLevel}function $N(t){$i.setLogLevel(t)}function L(t,...e){if($i.logLevel<=Se.DEBUG){const n=e.map(Rf);$i.debug(`Firestore (${oo}): ${t}`,...n)}}function Ze(t,...e){if($i.logLevel<=Se.ERROR){const n=e.map(Rf);$i.error(`Firestore (${oo}): ${t}`,...n)}}function Ur(t,...e){if($i.logLevel<=Se.WARN){const n=e.map(Rf);$i.warn(`Firestore (${oo}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+t;throw Ze(e),new Error(e)}function oe(t,e){t||z()}function UN(t,e){t||z()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class jN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qN{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let r=new mt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new mt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new mt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(oe(typeof i.accessToken=="string"),new yb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new ut(e)}}class HN{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class WN{constructor(e,n,i,s){this.h=e,this.l=n,this.m=i,this.g=s}getToken(){return Promise.resolve(new HN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=r=>{r.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?s(r):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string"),this.A=n.token,new GN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=zN(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function he(t,e){return t<e?-1:t>e?1:0}function Br(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}function _b(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new We(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new We(0,0))}static max(){return new se(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,i){n===void 0?n=0:n>e.length&&z(),i===void 0?i=e.length-n:i>e.length-n&&z(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sa?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Sa{construct(e,n,i){return new Ee(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const YN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Sa{construct(e,n,i){return new et(e,n,i)}static isValidIdentifier(e){return YN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new R(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ee.fromString(e))}static fromName(e){return new j(Ee.fromString(e).popFirst(5))}static empty(){return new j(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ee(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e,n,i,s){this.indexId=e,this.collectionGroup=n,this.fields=i,this.indexState=s}}function Zh(t){return t.fields.find(e=>e.kind===2)}function us(t){return t.fields.filter(e=>e.kind!==2)}bb.UNKNOWN_ID=-1;class QN{constructor(e,n){this.fieldPath=e,this.kind=n}}class ac{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new ac(0,un.min())}}function Ib(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(i===1e9?new We(n+1,0):new We(n,i));return new un(s,j.empty(),e)}function Eb(t){return new un(t.readTime,t.key,-1)}class un{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new un(se.min(),j.empty(),-1)}static max(){return new un(se.max(),j.empty(),-1)}}function Pf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Tb)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,i)=>{n(e)})}static reject(e){return new w((n,i)=>{i(e)})}static waitFor(e){return new w((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},l=>i(l))}),o=!0,r===s&&n()})}static or(e){let n=w.resolve(!1);for(const i of e)n=n.next(s=>s?w.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new w((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new w((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new mt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Qo(e,n.error)):this.P.resolve()},this.transaction.onerror=i=>{const s=Lf(i.target.error);this.P.reject(new Qo(e,s))}}static open(e,n,i,s){try{return new fu(n,e.transaction(s,i))}catch(r){throw new Qo(n,r)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(L("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new XN(n)}}class In{constructor(e,n,i){this.name=e,this.version=n,this.S=i,In.D(ze())===12.2&&Ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return L("SimpleDb","Removing database:",e),ms(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!da())return!1;if(In.N())return!0;const e=ze(),n=In.D(e),i=0<n&&n<10,s=In.k(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||r)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static k(e){const n=e.match(/Android ([\d.]+)/i),i=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async F(e){return this.db||(L("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const o=r.target.result;n(o)},s.onblocked=()=>{i(new Qo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const o=r.target.error;o.name==="VersionError"?i(new R(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new R(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new Qo(e,o))},s.onupgradeneeded=r=>{L("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.S.$(o,s.transaction,r.oldVersion,this.version).next(()=>{L("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,i,s){const r=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=fu.open(this.db,e,r?"readonly":"readwrite",i),l=s(a).next(c=>(a.V(),c)).catch(c=>(a.abort(c),w.reject(c))).toPromise();return l.catch(()=>{}),await a.v,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(L("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class JN{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return ms(this.U.delete())}}class Qo extends R{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Zi(t){return t.name==="IndexedDbTransactionError"}class XN{constructor(e){this.store=e}put(e,n){let i;return n!==void 0?(L("SimpleDb","PUT",this.store.name,e,n),i=this.store.put(n,e)):(L("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),ms(i)}add(e){return L("SimpleDb","ADD",this.store.name,e,e),ms(this.store.add(e))}get(e){return ms(this.store.get(e)).next(n=>(n===void 0&&(n=null),L("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return L("SimpleDb","DELETE",this.store.name,e),ms(this.store.delete(e))}count(){return L("SimpleDb","COUNT",this.store.name),ms(this.store.count())}W(e,n){const i=this.options(e,n);if(i.index||typeof this.store.getAll!="function"){const s=this.cursor(i),r=[];return this.H(s,(o,a)=>{r.push(a)}).next(()=>r)}{const s=this.store.getAll(i.range);return new w((r,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{r(a.target.result)}})}}J(e,n){const i=this.store.getAll(e,n===null?void 0:n);return new w((s,r)=>{i.onerror=o=>{r(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}Y(e,n){L("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,n);i.X=!1;const s=this.cursor(i);return this.H(s,(r,o,a)=>a.delete())}Z(e,n){let i;n?i=e:(i={},n=e);const s=this.cursor(i);return this.H(s,n)}tt(e){const n=this.cursor({});return new w((i,s)=>{n.onerror=r=>{const o=Lf(r.target.error);s(o)},n.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}H(e,n){const i=[];return new w((s,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new JN(a),c=n(a.primaryKey,a.value,l);if(c instanceof w){const u=c.catch(h=>(l.done(),w.reject(h)));i.push(u)}l.isDone?s():l.G===null?a.continue():a.continue(l.G)}}).next(()=>w.waitFor(i))}options(e,n){let i;return e!==void 0&&(typeof e=="string"?i=e:n=e),{index:i,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const i=this.store.index(e.index);return e.X?i.openKeyCursor(e.range,n):i.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ms(t){return new w((e,n)=>{t.onsuccess=i=>{const s=i.target.result;e(s)},t.onerror=i=>{const s=Lf(i.target.error);n(s)}})}let fg=!1;function Lf(t){const e=In.D(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const i=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fg||(fg=!0,setTimeout(()=>{throw i},0)),i}}return t}class ZN{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){L("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{L("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Zi(n)?L("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Xi(n)}await this.nt(6e4)})}}class ex{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const i=new Set;let s=n,r=!0;return w.doWhile(()=>r===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!i.has(o))return L("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,i.add(o)});r=!1})).next(()=>n-s)}rt(e,n,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,i).next(r=>{const o=r.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,r)).next(a=>(L("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let i=e;return n.changes.forEach((s,r)=>{const o=Eb(r);Pf(o,i)>0&&(i=o)}),new un(i.readTime,i.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Db(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.at=-1;class Qe{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:Et.RED,this.left=s!=null?s:Et.EMPTY,this.right=r!=null?r:Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Et(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,i,s){return this}insert(t,e,n){return new Et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pg(this.data.getIterator())}getIteratorFrom(e){return new pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fr(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new an([])}unionWith(e){let n=new Me(et.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const nx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ui(t){if(oe(!!t),typeof t=="string"){let e=0;const n=nx.exec(t);if(oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fs(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ab(t){const e=t.mapValue.fields.__previous_value__;return Vf(e)?Ab(e):e}function Da(t){const e=Ui(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,i,s,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}function el(t){return t==null}function Aa(t){return t===0&&1/t==-1/0}function kb(t){return typeof t=="number"&&Number.isInteger(t)&&!Aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ml={nullValue:"NULL_VALUE"};function $s(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vf(t)?4:Cb(t)?9007199254740991:10:z()}function Yn(t,e){if(t===e)return!0;const n=$s(t);if(n!==$s(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Da(t).isEqual(Da(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=Ui(i.timestampValue),o=Ui(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fs(i.bytesValue).isEqual(Fs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ye(i.geoPointValue.latitude)===Ye(s.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ye(i.integerValue)===Ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=Ye(i.doubleValue),o=Ye(s.doubleValue);return r===o?Aa(r)===Aa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Br(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(mg(r)!==mg(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Yn(r[a],o[a])))return!1;return!0}(t,e);default:return z()}}function ka(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=$s(t),i=$s(e);if(n!==i)return he(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=Ye(s.integerValue||s.doubleValue),a=Ye(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return gg(t.timestampValue,e.timestampValue);case 4:return gg(Da(t),Da(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,r){const o=Fs(s),a=Fs(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=he(o[l],a[l]);if(c!==0)return c}return he(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=he(Ye(s.latitude),Ye(r.latitude));return o!==0?o:he(Ye(s.longitude),Ye(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ji(o[l],a[l]);if(c)return c}return he(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===ki.mapValue&&r===ki.mapValue)return 0;if(s===ki.mapValue)return 1;if(r===ki.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=he(a[u],c[u]);if(h!==0)return h;const d=ji(o[a[u]],l[c[u]]);if(d!==0)return d}return he(a.length,c.length)}(t.mapValue,e.mapValue);default:throw z()}}function gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Ui(t),i=Ui(e),s=he(n.seconds,i.seconds);return s!==0?s:he(n.nanos,i.nanos)}function Cr(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=Ui(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=ed(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${ed(i.fields[a])}`;return r+"}"}(t.mapValue):z();var e,n}function Us(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function td(t){return!!t&&"integerValue"in t}function Ca(t){return!!t&&"arrayValue"in t}function vg(t){return!!t&&"nullValue"in t}function yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function Jo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Jo(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Cb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function sx(t){return"nullValue"in t?Ml:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Us(Bi.empty(),j.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:z()}function rx(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Us(Bi.empty(),j.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?ki:z()}function wg(t,e){const n=ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function _g(t,e){const n=ji(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(n)}setAll(e){let n=et.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Jo(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Rl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){sr(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new St(Jo(this.value))}}function Ob(t){const e=[];return sr(t.fields,(n,i)=>{const s=new et([n]);if(Rl(i)){const r=Ob(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new an(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,i,s,r,o){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new Fe(e,0,se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,n,i){return new Fe(e,1,n,se.min(),i,0)}static newNoDocument(e,n){return new Fe(e,2,n,se.min(),St.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,se.min(),St.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ht=null}}function bg(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ox(t,e,n,i,s,r,o)}function Bs(t){const e=H(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>{return(s=i).field.canonicalString()+s.op.toString()+Cr(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),el(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Cr(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Cr(i)).join(",")),e.ht=n}return e.ht}function ax(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(i=n).field.canonicalString()} ${i.op} ${Cr(i.value)}`;var i}).join(", ")}]`),el(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cr(n)).join(",")),`Target(${e})`}function tl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!px(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Yn(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function lc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cc(t,e){return t.filters.filter(n=>n instanceof Dt&&n.field.isEqual(e))}function Ig(t,e,n){let i=Ml,s=!0;for(const r of cc(t,e)){let o=Ml,a=!0;switch(r.op){case"<":case"<=":o=sx(r.value);break;case"==":case"in":case">=":o=r.value;break;case">":o=r.value,a=!1;break;case"!=":case"not-in":o=Ml}wg({value:i,inclusive:s},{value:o,inclusive:a})<0&&(i=o,s=a)}if(n!==null){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const o=n.position[r];wg({value:i,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(i=o,s=n.inclusive);break}}return{value:i,inclusive:s}}function Eg(t,e,n){let i=ki,s=!0;for(const r of cc(t,e)){let o=ki,a=!0;switch(r.op){case">=":case">":o=rx(r.value),a=!1;break;case"==":case"in":case"<=":o=r.value;break;case"<":o=r.value,a=!1;break;case"!=":case"not-in":o=ki}_g({value:i,inclusive:s},{value:o,inclusive:a})>0&&(i=o,s=a)}if(n!==null){for(let r=0;r<t.orderBy.length;++r)if(t.orderBy[r].field.isEqual(e)){const o=n.position[r];_g({value:i,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(i=o,s=n.inclusive);break}}return{value:i,inclusive:s}}class Dt extends class{}{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,i):new lx(e,n,i):n==="array-contains"?new hx(e,i):n==="in"?new dx(e,i):n==="not-in"?new fx(e,i):n==="array-contains-any"?new mx(e,i):new Dt(e,n,i)}static lt(e,n,i){return n==="in"?new cx(e,i):new ux(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ji(n,this.value)):n!==null&&$s(this.value)===$s(n)&&this.ft(ji(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class lx extends Dt{constructor(e,n,i){super(e,n,i),this.key=j.fromName(i.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class cx extends Dt{constructor(e,n){super(e,"in",n),this.keys=Nb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ux extends Dt{constructor(e,n){super(e,"not-in",n),this.keys=Nb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nb(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>j.fromName(i.referenceValue))}class hx extends Dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ca(n)&&ka(n.arrayValue,this.value)}}class dx extends Dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class fx extends Dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class mx extends Dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ca(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>ka(this.value.arrayValue,i))}}class qi{constructor(e,n){this.position=e,this.inclusive=n}}class Or{constructor(e,n="asc"){this.field=e,this.dir=n}}function px(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Tg(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=j.comparator(j.fromName(o.referenceValue),n.key):i=ji(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function xb(t,e,n,i,s,r,o,a){return new mi(t,e,n,i,s,r,o,a)}function ao(t){return new mi(t)}function Dg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ff(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $f(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Uf(t){return t.collectionGroup!==null}function jr(t){const e=H(t);if(e._t===null){e._t=[];const n=$f(e),i=Ff(e);if(n!==null&&i===null)n.isKeyField()||e._t.push(new Or(n)),e._t.push(new Or(et.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Or(et.keyField(),r))}}}return e._t}function nn(t){const e=H(t);if(!e.wt)if(e.limitType==="F")e.wt=bg(e.path,e.collectionGroup,jr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of jr(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Or(r.field,o))}const i=e.endAt?new qi(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new qi(e.startAt.position,e.startAt.inclusive):null;e.wt=bg(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e.wt}function uc(t,e,n){return new mi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nl(t,e){return tl(nn(t),nn(e))&&t.limitType===e.limitType}function Mb(t){return`${Bs(nn(t))}|lt:${t.limitType}`}function nd(t){return`Query(target=${ax(nn(t))}; limitType=${t.limitType})`}function Bf(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=Tg(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,jr(n),i)||n.endAt&&!function(s,r,o){const a=Tg(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,jr(n),i))}(t,e)}function Rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pb(t){return(e,n)=>{let i=!1;for(const s of jr(t)){const r=gx(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function gx(t,e,n){const i=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?ji(a,l):z()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Aa(e)?"-0":e}}function Vb(t){return{integerValue:""+t}}function Fb(t,e){return kb(e)?Vb(e):Lb(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this._=void 0}}function vx(t,e,n){return t instanceof qr?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof js?Ub(t,e):t instanceof qs?Bb(t,e):function(i,s){const r=$b(i,s),o=Ag(r)+Ag(i.yt);return td(r)&&td(i.yt)?Vb(o):Lb(i.It,o)}(t,e)}function yx(t,e,n){return t instanceof js?Ub(t,e):t instanceof qs?Bb(t,e):n}function $b(t,e){return t instanceof Hr?td(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class qr extends mu{}class js extends mu{constructor(e){super(),this.elements=e}}function Ub(t,e){const n=jb(e);for(const i of t.elements)n.some(s=>Yn(s,i))||n.push(i);return{arrayValue:{values:n}}}class qs extends mu{constructor(e){super(),this.elements=e}}function Bb(t,e){let n=jb(e);for(const i of t.elements)n=n.filter(s=>!Yn(s,i));return{arrayValue:{values:n}}}class Hr extends mu{constructor(e,n){super(),this.It=e,this.yt=n}}function Ag(t){return Ye(t.integerValue||t.doubleValue)}function jb(t){return Ca(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.field=e,this.transform=n}}function wx(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof js&&i instanceof js||n instanceof qs&&i instanceof qs?Br(n.elements,i.elements,Yn):n instanceof Hr&&i instanceof Hr?Yn(n.yt,i.yt):n instanceof qr&&i instanceof qr}(t.transform,e.transform)}class _x{constructor(e,n){this.version=e,this.transformResults=n}}class He{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pu{}function qb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new co(t.key,He.none()):new lo(t.key,t.data,He.none());{const n=t.data,i=St.empty();let s=new Me(et.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new pi(t.key,i,new an(s.toArray()),He.none())}}function bx(t,e,n){t instanceof lo?function(i,s,r){const o=i.value.clone(),a=Cg(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pi?function(i,s,r){if(!Pl(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Cg(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Hb(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,i){return t instanceof lo?function(s,r,o,a){if(!Pl(s.precondition,r))return o;const l=s.value.clone(),c=Og(s.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,i):t instanceof pi?function(s,r,o,a){if(!Pl(s.precondition,r))return o;const l=Og(s.fieldTransforms,a,r),c=r.data;return c.setAll(Hb(s)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return Pl(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Ix(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=$b(i.transform,s||null);r!=null&&(n===null&&(n=St.empty()),n.set(i.field,r))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Br(n,i,(s,r)=>wx(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends pu{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pi extends pu{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Hb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Cg(t,e,n){const i=new Map;oe(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,yx(o,a,n[s]))}return i}function Og(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,vx(r,o,e))}return i}class co extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jf extends pu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,_e;function Wb(t){switch(t){default:return z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Gb(t){if(t===void 0)return Ze("GRPC error has no .code"),I.UNKNOWN;switch(t){case nt.OK:return I.OK;case nt.CANCELLED:return I.CANCELLED;case nt.UNKNOWN:return I.UNKNOWN;case nt.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case nt.INTERNAL:return I.INTERNAL;case nt.UNAVAILABLE:return I.UNAVAILABLE;case nt.UNAUTHENTICATED:return I.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case nt.NOT_FOUND:return I.NOT_FOUND;case nt.ALREADY_EXISTS:return I.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return I.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case nt.ABORTED:return I.ABORTED;case nt.OUT_OF_RANGE:return I.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return I.UNIMPLEMENTED;case nt.DATA_LOSS:return I.DATA_LOSS;default:return z()}}(_e=nt||(nt={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Db(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new Qe(j.comparator);function en(){return Tx}const Kb=new Qe(j.comparator);function Vo(...t){let e=Kb;for(const n of t)e=e.insert(n.key,n);return e}function zb(t){let e=Kb;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Bn(){return Zo()}function Yb(){return Zo()}function Zo(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sx=new Qe(j.comparator),Dx=new Me(j.comparator);function de(...t){let e=Dx;for(const n of t)e=e.add(n);return e}const Ax=new Me(he);function gu(){return Ax}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n,i,s,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n){const i=new Map;return i.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n)),new sl(se.min(),i,gu(),en(),de())}}class rl{constructor(e,n,i,s,r){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n){return new rl(at.EMPTY_BYTE_STRING,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,i,s){this.Tt=e,this.removedTargetIds=n,this.key=i,this.Et=s}}class Qb{constructor(e,n){this.targetId=e,this.At=n}}class Jb{constructor(e,n,i=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Ng{constructor(){this.Rt=0,this.bt=Mg(),this.Pt=at.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=de(),n=de(),i=de();return this.bt.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:z()}}),new rl(this.Pt,this.vt,e,n,i)}Nt(){this.Vt=!1,this.bt=Mg()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class kx{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=en(),this.qt=xg(),this.Kt=new Me(he)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const i=this.zt(n);switch(e.state){case 0:this.Ht(n)&&i.Ct(e.resumeToken);break;case 1:i.Ft(),i.St||i.Nt(),i.Ct(e.resumeToken);break;case 2:i.Ft(),i.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(i.$t(),i.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),i.Ct(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((i,s)=>{this.Ht(s)&&n(s)})}Yt(e){const n=e.targetId,i=e.At.count,s=this.Xt(n);if(s){const r=s.target;if(lc(r))if(i===0){const o=new j(r.path);this.jt(n,o,Fe.newNoDocument(o,se.min()))}else oe(i===1);else this.Zt(n)!==i&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&lc(a.target)){const l=new j(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Fe.newNoDocument(l,e))}r.Dt&&(n.set(o,r.xt()),r.Nt())}});let i=de();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Xt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(e));const s=new sl(e,n,this.Kt,this.Ut,i);return this.Ut=en(),this.qt=xg(),this.Kt=new Me(he),s}Qt(e,n){if(!this.Ht(e))return;const i=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,i),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,i){if(!this.Ht(e))return;const s=this.zt(e);this.ee(e,n)?s.kt(n,1):s.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),i&&(this.Ut=this.Ut.insert(n,i))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new Ng,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Me(he),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ng),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function xg(){return new Qe(j.comparator)}function Mg(){return new Qe(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Ox=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Nx{constructor(e,n){this.databaseId=e,this.gt=n}}function Oa(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xb(t,e){return t.gt?e.toBase64():e.toUint8Array()}function xx(t,e){return Oa(t,e.toTimestamp())}function pt(t){return oe(!!t),se.fromTimestamp(function(e){const n=Ui(e);return new We(n.seconds,n.nanos)}(t))}function qf(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Zb(t){const e=Ee.fromString(t);return oe(aI(e)),e}function Na(t,e){return qf(t.databaseId,e.path)}function Hn(t,e){const n=Zb(e);if(n.get(1)!==t.databaseId.projectId)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(tI(n))}function id(t,e){return qf(t.databaseId,e)}function eI(t){const e=Zb(t);return e.length===4?Ee.emptyPath():tI(e)}function xa(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tI(t){return oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rg(t,e,n){return{name:Na(t,e),fields:n.value.mapValue.fields}}function nI(t,e,n){const i=Hn(t,e.name),s=pt(e.updateTime),r=new St({mapValue:{fields:e.fields}}),o=Fe.newFoundDocument(i,s,r);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Mx(t,e){return"found"in e?function(n,i){oe(!!i.found),i.found.name,i.found.updateTime;const s=Hn(n,i.found.name),r=pt(i.found.updateTime),o=new St({mapValue:{fields:i.found.fields}});return Fe.newFoundDocument(s,r,o)}(t,e):"missing"in e?function(n,i){oe(!!i.missing),oe(!!i.readTime);const s=Hn(n,i.missing),r=pt(i.readTime);return Fe.newNoDocument(s,r)}(t,e):z()}function Rx(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.gt?(oe(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(oe(c===void 0||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?I.UNKNOWN:Gb(l.code);return new R(c,l.message||"")}(o);n=new Jb(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Hn(t,i.document.name),r=pt(i.document.updateTime),o=new St({mapValue:{fields:i.document.fields}}),a=Fe.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];n=new Ll(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Hn(t,i.document),r=i.readTime?pt(i.readTime):se.min(),o=Fe.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Ll([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Hn(t,i.document),r=i.removedTargetIds||[];n=new Ll([],r,s,null)}else{if(!("filter"in e))return z();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new Ex(s),o=i.targetId;n=new Qb(o,r)}}return n}function Ma(t,e){let n;if(e instanceof lo)n={update:Rg(t,e.key,e.value)};else if(e instanceof co)n={delete:Na(t,e.key)};else if(e instanceof pi)n={update:Rg(t,e.key,e.data),updateMask:Bx(e.fieldMask)};else{if(!(e instanceof jf))return z();n={verify:Na(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof qr)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof js)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof qs)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Hr)return{fieldPath:r.field.canonicalString(),increment:o.yt};throw z()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:xx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:z()}(t,e.precondition)),n}function sd(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?He.updateTime(pt(s.updateTime)):s.exists!==void 0?He.exists(s.exists):He.none()}(e.currentDocument):He.none(),i=e.updateTransforms?e.updateTransforms.map(s=>function(r,o){let a=null;if("setToServerValue"in o)oe(o.setToServerValue==="REQUEST_TIME"),a=new qr;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new js(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new qs(c)}else"increment"in o?a=new Hr(r,o.increment):z();const l=et.fromServerFormat(o.fieldPath);return new il(l,a)}(t,s)):[];if(e.update){e.update.name;const s=Hn(t,e.update.name),r=new St({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const l=a.fieldPaths||[];return new an(l.map(c=>et.fromServerFormat(c)))}(e.updateMask);return new pi(s,r,o,n,i)}return new lo(s,r,n,i)}if(e.delete){const s=Hn(t,e.delete);return new co(s,n)}if(e.verify){const s=Hn(t,e.verify);return new jf(s,n)}return z()}function Px(t,e){return t&&t.length>0?(oe(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?pt(i.updateTime):pt(s);return r.isEqual(se.min())&&(r=pt(s)),new _x(r,i.transformResults||[])}(n,e))):[]}function iI(t,e){return{documents:[id(t,e.path)]}}function sI(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=id(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=id(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(l){if(l.length===0)return;const c=l.map(u=>function(h){if(h.op==="=="){if(yg(h.value))return{unaryFilter:{field:mr(h.field),op:"IS_NAN"}};if(vg(h.value))return{unaryFilter:{field:mr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(yg(h.value))return{unaryFilter:{field:mr(h.field),op:"IS_NOT_NAN"}};if(vg(h.value))return{unaryFilter:{field:mr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(h.field),op:Fx(h.op),value:h.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:mr(u.field),direction:Vx(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.gt||el(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function rI(t){let e=eI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){oe(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=oI(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Or(br(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,el(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new qi(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new qi(d,h)}(n.endAt)),xb(e,s,o,r,a,"F",l,c)}function Lx(t,e){const n=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function oI(t){return t?t.unaryFilter!==void 0?[Ux(t)]:t.fieldFilter!==void 0?[$x(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>oI(e)).reduce((e,n)=>e.concat(n)):z():[]}function Vx(t){return Cx[t]}function Fx(t){return Ox[t]}function mr(t){return{fieldPath:t.canonicalString()}}function br(t){return et.fromServerFormat(t.fieldPath)}function $x(t){return Dt.create(br(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}function Ux(t){switch(t.unaryFilter.op){case"IS_NAN":const e=br(t.unaryFilter.field);return Dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=br(t.unaryFilter.field);return Dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=br(t.unaryFilter.field);return Dt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=br(t.unaryFilter.field);return Dt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return z()}}function Bx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pg(e)),e=jx(t.get(n),e);return Pg(e)}function jx(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const r=t.charAt(s);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Pg(t){return t+""}function jn(t){const e=t.length;if(oe(e>=2),e===2)return oe(t.charAt(0)===""&&t.charAt(1)===""),Ee.emptyPath();const n=e-2,i=[];let s="";for(let r=0;r<e;){const o=t.indexOf("",r);switch((o<0||o>n)&&z(),t.charAt(o+1)){case"":const a=t.substring(r,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),i.push(l);break;case"":s+=t.substring(r,o),s+="\0";break;case"":s+=t.substring(r,o+1);break;default:z()}r=o+2}return new Ee(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e){return[t,Kt(e)]}function lI(t,e,n){return[t,Kt(e),n]}const qx={},Hx=["prefixPath","collectionGroup","readTime","documentId"],Wx=["prefixPath","collectionGroup","documentId"],Gx=["collectionGroup","readTime","prefixPath","documentId"],Kx=["canonicalId","targetId"],zx=["targetId","path"],Yx=["path","targetId"],Qx=["collectionId","parent"],Jx=["indexId","uid"],Xx=["uid","sequenceNumber"],Zx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],eM=["indexId","uid","orderedDocumentKey"],tM=["userId","collectionPath","documentId"],nM=["userId","collectionPath","largestBatchId"],iM=["userId","collectionGroup","largestBatchId"],cI=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sM=[...cI,"documentOverlays"],uI=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hI=uI,rM=[...hI,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends Sb{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function _t(t,e){const n=H(t);return In.O(n.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&bx(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Xo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Xo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Yb();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const l=qb(o,a);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,(n,i)=>kg(n,i))&&Br(this.baseMutations,e.baseMutations,(n,i)=>kg(n,i))}}class Wf{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){oe(e.mutations.length===i.length);let s=Sx;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Wf(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n,i,s,r=se.min(),o=se.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.re=e}}function oM(t,e){let n;if(e.document)n=nI(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=j.fromSegments(e.noDocument.path),s=Ws(e.noDocument.readTime);n=Fe.newNoDocument(i,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return z();{const i=j.fromSegments(e.unknownDocument.path),s=Ws(e.unknownDocument.version);n=Fe.newUnknownDocument(i,s)}}return e.readTime&&n.setReadTime(function(i){const s=new We(i[0],i[1]);return se.fromTimestamp(s)}(e.readTime)),n}function Vg(t,e){const n=e.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:hc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(s,r){return{name:Na(s,r.key),fields:r.data.value.mapValue.fields,updateTime:Oa(s,r.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:Hs(e.version)};else{if(!e.isUnknownDocument())return z();i.unknownDocument={path:n.path.toArray(),version:Hs(e.version)}}return i}function hc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Hs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ws(t){const e=new We(t.seconds,t.nanoseconds);return se.fromTimestamp(e)}function ps(t,e){const n=(e.baseMutations||[]).map(r=>sd(t.re,r));for(let r=0;r<e.mutations.length-1;++r){const o=e.mutations[r];if(r+1<e.mutations.length&&e.mutations[r+1].transform!==void 0){const a=e.mutations[r+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(r+1,1),++r}}const i=e.mutations.map(r=>sd(t.re,r)),s=We.fromMillis(e.localWriteTimeMs);return new Hf(e.batchId,s,n,i)}function Fo(t){const e=Ws(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ws(t.lastLimboFreeSnapshotVersion):se.min();let i;var s;return t.query.documents!==void 0?(oe((s=t.query).documents.length===1),i=nn(ao(eI(s.documents[0])))):i=function(r){return nn(rI(r))}(t.query),new xi(i,t.targetId,0,t.lastListenSequenceNumber,e,n,at.fromBase64String(t.resumeToken))}function fI(t,e){const n=Hs(e.snapshotVersion),i=Hs(e.lastLimboFreeSnapshotVersion);let s;s=lc(e.target)?iI(t.re,e.target):sI(t.re,e.target);const r=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Bs(e.target),readTime:n,resumeToken:r,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:s}}function Kf(t){const e=rI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uc(e,e.limit,"L"):e}function rh(t,e){return new Gf(e.largestBatchId,sd(t.re,e.overlayMutation))}function Fg(t,e){const n=e.path.lastSegment();return[t,Kt(e.path.popLast()),n]}function $g(t,e,n,i){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Hs(i.readTime),documentKey:Kt(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{getBundleMetadata(e,n){return Ug(e).get(n).next(i=>{if(i)return{id:(s=i).bundleId,createTime:Ws(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return Ug(e).put({bundleId:(i=n).id,createTime:Hs(pt(i.createTime)),version:i.version});var i}getNamedQuery(e,n){return Bg(e).get(n).next(i=>{if(i)return{name:(s=i).name,query:Kf(s.bundledQuery),readTime:Ws(s.readTime)};var s})}saveNamedQuery(e,n){return Bg(e).put(function(i){return{name:i.name,readTime:Hs(pt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Ug(t){return _t(t,"bundles")}function Bg(t){return _t(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const i=n.uid||"";return new vu(e,i)}getOverlay(e,n){return Eo(e).get(Fg(this.userId,n)).next(i=>i?rh(this.It,i):null)}getOverlays(e,n){const i=Bn();return w.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){const s=[];return i.forEach((r,o)=>{const a=new Gf(n,o);s.push(this.ue(e,a))}),w.waitFor(s)}removeOverlaysForBatchId(e,n,i){const s=new Set;n.forEach(o=>s.add(Kt(o.getCollectionPath())));const r=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,i],[this.userId,o,i+1],!1,!0);r.push(Eo(e).Y("collectionPathOverlayIndex",a))}),w.waitFor(r)}getOverlaysForCollection(e,n,i){const s=Bn(),r=Kt(n),o=IDBKeyRange.bound([this.userId,r,i],[this.userId,r,Number.POSITIVE_INFINITY],!0);return Eo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=rh(this.It,l);s.set(c.getKey(),c)}return s})}getOverlaysForCollectionGroup(e,n,i,s){const r=Bn();let o;const a=IDBKeyRange.bound([this.userId,n,i],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Eo(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,c,u)=>{const h=rh(this.It,c);r.size()<s||h.largestBatchId===o?(r.set(h.getKey(),h),o=h.largestBatchId):u.done()}).next(()=>r)}ue(e,n){return Eo(e).put(function(i,s,r){const[o,a,l]=Fg(s,r.mutation.key);return{userId:s,collectionPath:a,documentId:l,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:Ma(i.re,r.mutation)}}(this.It,this.userId,n))}}function Eo(t){return _t(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(Ye(e.integerValue));else if("doubleValue"in e){const i=Ye(e.doubleValue);isNaN(i)?this.le(n,13):(this.le(n,15),Aa(i)?n.fe(0):n.fe(i))}else if("timestampValue"in e){const i=e.timestampValue;this.le(n,20),typeof i=="string"?n.de(i):(n.de(`${i.seconds||""}`),n.fe(i.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Fs(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const i=e.geoPointValue;this.le(n,45),n.fe(i.latitude||0),n.fe(i.longitude||0)}else"mapValue"in e?Cb(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):z()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const i=e.fields||{};this.le(n,55);for(const s of Object.keys(i))this._e(s,n),this.ae(i[s],n)}pe(e,n){const i=e.values||[];this.le(n,50);for(const s of i)this.ae(s,n)}ge(e,n){this.le(n,37),j.fromName(e).path.forEach(i=>{this.le(n,60),this.Ie(i,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}gs.Te=new gs;function lM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function jg(t){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const r=lM(255&n[s]);if(i+=r,r!==8)break}return i}(t);return Math.ceil(e/8)}class cM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.Ae(i.value),i=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.Pe(i.value),i=n.next();this.ve()}Ve(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.Ae(i);else if(i<2048)this.Ae(960|i>>>6),this.Ae(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i);else{const s=n.codePointAt(0);this.Ae(240|s>>>18),this.Ae(128|63&s>>>12),this.Ae(128|63&s>>>6),this.Ae(128|63&s)}}this.Re()}Se(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.Pe(i);else if(i<2048)this.Pe(960|i>>>6),this.Pe(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i);else{const s=n.codePointAt(0);this.Pe(240|s>>>18),this.Pe(128|63&s>>>12),this.Pe(128|63&s>>>6),this.Pe(128|63&s)}}this.ve()}De(e){const n=this.Ce(e),i=jg(n);this.xe(1+i),this.buffer[this.position++]=255&i;for(let s=n.length-i;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Ne(e){const n=this.Ce(e),i=jg(n);this.xe(1+i),this.buffer[this.position++]=~(255&i);for(let s=n.length-i;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}ke(){this.Me(255),this.Me(255)}Oe(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(s){const r=new DataView(new ArrayBuffer(8));return r.setFloat64(0,s,!1),new Uint8Array(r.buffer)}(e),i=(128&n[0])!=0;n[0]^=i?255:128;for(let s=1;s<n.length;++s)n[s]^=i?255:0;return n}Ae(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Me(0),this.Me(1)}ve(){this.Fe(0),this.Fe(1)}Me(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let i=2*this.buffer.length;i<n&&(i=n);const s=new Uint8Array(i);s.set(this.buffer),this.buffer=s}}class uM{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class hM{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Oe()}}class To{constructor(){this.Be=new cM,this.Le=new uM(this.Be),this.Ue=new hM(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n,i,s){this.indexId=e,this.documentKey=n,this.arrayValue=i,this.directionalValue=s}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(n);return i.set(this.directionalValue,0),n!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new vs(this.indexId,this.documentKey,this.arrayValue,i)}}function rs(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=qg(t.arrayValue,e.arrayValue),n!==0?n:(n=qg(t.directionalValue,e.directionalValue),n!==0?n:j.comparator(t.documentKey,e.documentKey)))}function qg(t,e){for(let n=0;n<t.length&&n<e.length;++n){const i=t[n]-e[n];if(i!==0)return i}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const i=n;i.dt()?this.je=i:this.Qe.push(i)}}We(e){const n=Zh(e);if(n!==void 0&&!this.ze(n))return!1;const i=us(e);let s=0,r=0;for(;s<i.length&&this.ze(i[s]);++s);if(s===i.length)return!0;if(this.je!==void 0){const o=i[s];if(!this.He(this.je,o)||!this.Je(this.Ge[r++],o))return!1;++s}for(;s<i.length;++s){const o=i[s];if(r>=this.Ge.length||!this.Je(this.Ge[r++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===i}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{constructor(){this.Ye=new zf}addToCollectionParentIndex(e,n){return this.Ye.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(un.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(un.min())}updateCollectionGroup(e,n,i){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class zf{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Me(Ee.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Me(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Uint8Array(0);class mM{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new zf,this.Ze=new es(i=>Bs(i),(i,s)=>tl(i,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const i=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const r={collectionId:i,parent:Kt(s)};return Hg(e).put(r)}return w.resolve()}getCollectionParents(e,n){const i=[],s=IDBKeyRange.bound([n,""],[_b(n),""],!1,!0);return Hg(e).W(s).next(r=>{for(const o of r){if(o.collectionId!==n)break;i.push(jn(o.parent))}return i})}addFieldIndex(e,n){const i=Sl(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const r=i.add(s);if(n.indexState){const o=Do(e);return r.next(a=>{o.put($g(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return r.next()}deleteFieldIndex(e,n){const i=Sl(e),s=Do(e),r=So(e);return i.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const i=So(e);let s=!0;const r=new Map;return w.forEach(this.tn(n),o=>this.en(e,o).next(a=>{s&&(s=!!a),r.set(o,a)})).next(()=>{if(s){let o=de();const a=[];return w.forEach(r,(l,c)=>{var u;L("IndexedDbIndexManager",`Using index ${u=l,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${Bs(n)}`);const h=function(D,O){const $=Zh(O);if($===void 0)return null;for(const B of cc(D,$.fieldPath))switch(B.op){case"array-contains-any":return B.value.arrayValue.values||[];case"array-contains":return[B.value]}return null}(c,l),d=function(D,O){const $=new Map;for(const B of us(O))for(const U of cc(D,B.fieldPath))switch(U.op){case"==":case"in":$.set(B.fieldPath.canonicalString(),U.value);break;case"not-in":case"!=":return $.set(B.fieldPath.canonicalString(),U.value),Array.from($.values())}return null}(c,l),f=function(D,O){const $=[];let B=!0;for(const U of us(O)){const M=U.kind===0?Ig(D,U.fieldPath,D.startAt):Eg(D,U.fieldPath,D.startAt);$.push(M.value),B&&(B=M.inclusive)}return new qi($,B)}(c,l),g=function(D,O){const $=[];let B=!0;for(const U of us(O)){const M=U.kind===0?Eg(D,U.fieldPath,D.endAt):Ig(D,U.fieldPath,D.endAt);$.push(M.value),B&&(B=M.inclusive)}return new qi($,B)}(c,l),_=this.nn(l,c,f),S=this.nn(l,c,g),x=this.sn(l,c,d),G=this.rn(l.indexId,h,_,f.inclusive,S,g.inclusive,x);return w.forEach(G,D=>i.J(D,n.limit).next(O=>{O.forEach($=>{const B=j.fromSegments($.documentKey);o.has(B)||(o=o.add(B),a.push(B))})}))}).next(()=>a)}return w.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,i,s,r,o,a){const l=(n!=null?n.length:1)*Math.max(i.length,r.length),c=l/(n!=null?n.length:1),u=[];for(let h=0;h<l;++h){const d=n?this.on(n[h/c]):Tl,f=this.un(e,d,i[h%c],s),g=this.cn(e,d,r[h%c],o),_=a.map(S=>this.un(e,d,S,!0));u.push(...this.createRange(f,g,_))}return u}un(e,n,i,s){const r=new vs(e,j.empty(),n,i);return s?r:r.Ke()}cn(e,n,i,s){const r=new vs(e,j.empty(),n,i);return s?r.Ke():r}en(e,n){const i=new dM(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(r=>{let o=null;for(const a of r)i.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let i=2;return w.forEach(this.tn(n),s=>this.en(e,s).next(r=>{r?i!==0&&r.fields.length<function(o){let a=new Me(et.comparator),l=!1;for(const c of o.filters){const u=c;u.field.isKeyField()||(u.op==="array-contains"||u.op==="array-contains-any"?l=!0:a=a.add(u.field))}for(const c of o.orderBy)c.field.isKeyField()||(a=a.add(c.field));return a.size+(l?1:0)}(s)&&(i=1):i=0})).next(()=>i)}an(e,n){const i=new To;for(const s of us(e)){const r=n.data.field(s.fieldPath);if(r==null)return null;const o=i.qe(s.kind);gs.Te.ce(r,o)}return i.$e()}on(e){const n=new To;return gs.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const i=new To;return gs.Te.ce(Us(this.databaseId,n),i.qe(function(s){const r=us(s);return r.length===0?0:r[r.length-1].kind}(e))),i.$e()}sn(e,n,i){if(i===null)return[];let s=[];s.push(new To);let r=0;for(const o of us(e)){const a=i[r++];for(const l of s)if(this.ln(n,o.fieldPath)&&Ca(a))s=this.fn(s,o,a);else{const c=l.qe(o.kind);gs.Te.ce(a,c)}}return this.dn(s)}nn(e,n,i){return this.sn(e,n,i.position)}dn(e){const n=[];for(let i=0;i<e.length;++i)n[i]=e[i].$e();return n}fn(e,n,i){const s=[...e],r=[];for(const o of i.arrayValue.values||[])for(const a of s){const l=new To;l.seed(a.$e()),gs.Te.ce(o,l.qe(n.kind)),r.push(l)}return r}ln(e,n){return!!e.filters.find(i=>i instanceof Dt&&i.field.isEqual(n)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,n){const i=Sl(e),s=Do(e);return(n?i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):i.W()).next(r=>{const o=[];return w.forEach(r,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(c,u){const h=u?new ac(u.sequenceNumber,new un(Ws(u.readTime),new j(jn(u.documentKey)),u.largestBatchId)):ac.empty(),d=c.fields.map(([f,g])=>new QN(et.fromServerFormat(f),g));return new bb(c.indexId,c.collectionGroup,d,h)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((i,s)=>{const r=i.indexState.sequenceNumber-s.indexState.sequenceNumber;return r!==0?r:he(i.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,i){const s=Sl(e),r=Do(e);return this._n(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>r.put($g(l.indexId,this.user,o,i)))))}updateIndexEntries(e,n){const i=new Map;return w.forEach(n,(s,r)=>{const o=i.get(s.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(i.set(s.collectionGroup,a),w.forEach(a,l=>this.wn(e,s,l).next(c=>{const u=this.mn(r,l);return c.isEqual(u)?w.resolve():this.gn(e,r,l,c,u)}))))})}yn(e,n,i,s){return So(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.hn(i,n.key),documentKey:n.key.path.toArray()})}pn(e,n,i,s){return So(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.hn(i,n.key),n.key.path.toArray()])}wn(e,n,i){const s=So(e);let r=new Me(rs);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.hn(i,n)])},(o,a)=>{r=r.add(new vs(i.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>r)}mn(e,n){let i=new Me(rs);const s=this.an(n,e);if(s==null)return i;const r=Zh(n);if(r!=null){const o=e.data.field(r.fieldPath);if(Ca(o))for(const a of o.arrayValue.values||[])i=i.add(new vs(n.indexId,e.key,this.on(a),s))}else i=i.add(new vs(n.indexId,e.key,Tl,s));return i}gn(e,n,i,s,r){L("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,l,c,u,h){const d=a.getIterator(),f=l.getIterator();let g=fr(d),_=fr(f);for(;g||_;){let S=!1,x=!1;if(g&&_){const G=c(g,_);G<0?x=!0:G>0&&(S=!0)}else g!=null?x=!0:S=!0;S?(u(_),_=fr(f)):x?(h(g),g=fr(d)):(g=fr(d),_=fr(f))}}(s,r,rs,a=>{o.push(this.yn(e,n,i,a))},a=>{o.push(this.pn(e,n,i,a))}),w.waitFor(o)}_n(e){let n=1;return Do(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,s,r)=>{r.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,i){i=i.sort((o,a)=>rs(o,a)).filter((o,a,l)=>!a||rs(o,l[a-1])!==0);const s=[];s.push(e);for(const o of i){const a=rs(o,e),l=rs(o,n);if(a===0)s[0]=e.Ke();else if(a>0&&l<0)s.push(o),s.push(o.Ke());else if(l>0)break}s.push(n);const r=[];for(let o=0;o<s.length;o+=2)r.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Tl,[]],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Tl,[]]));return r}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Wg)}getMinOffset(e,n){return w.mapArray(this.tn(n),i=>this.en(e,i).next(s=>s||z())).next(Wg)}}function Hg(t){return _t(t,"collectionParents")}function So(t){return _t(t,"indexEntries")}function Sl(t){return _t(t,"indexConfiguration")}function Do(t){return _t(t,"indexState")}function Wg(t){oe(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let i=1;i<t.length;i++){const s=t[i].indexState.offset;Pf(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new un(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e,n){const i=t.store("mutations"),s=t.store("documentMutations"),r=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=i.Z({range:o},(u,h,d)=>(a++,d.delete()));r.push(l.next(()=>{oe(a===1)}));const c=[];for(const u of n.mutations){const h=lI(e,u.key.path,n.batchId);r.push(s.delete(h)),c.push(u.key)}return w.waitFor(r).next(()=>c)}function dc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw z();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);class yu{constructor(e,n,i,s){this.userId=e,this.It=n,this.indexManager=i,this.referenceDelegate=s,this.In={}}static oe(e,n,i,s){oe(e.uid!=="");const r=e.isAuthenticated()?e.uid:"";return new yu(r,n,i,s)}checkEmpty(e){let n=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ii(e).Z({index:"userMutationsIndex",range:i},(s,r,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,i,s){const r=vr(e),o=Ii(e);return o.add({}).next(a=>{oe(typeof a=="number");const l=new Hf(a,n,i,s),c=function(d,f,g){const _=g.baseMutations.map(x=>Ma(d.re,x)),S=g.mutations.map(x=>Ma(d.re,x));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:_,mutations:S}}(this.It,this.userId,l),u=[];let h=new Me((d,f)=>he(d.canonicalString(),f.canonicalString()));for(const d of s){const f=lI(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(c)),u.push(r.put(f,qx))}return h.forEach(d=>{u.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=l.keys()}),w.waitFor(u).next(()=>l)})}lookupMutationBatch(e,n){return Ii(e).get(n).next(i=>i?(oe(i.userId===this.userId),ps(this.It,i)):null)}Tn(e,n){return this.In[n]?w.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(i=>{if(i){const s=i.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=IDBKeyRange.lowerBound([this.userId,i]);let r=null;return Ii(e).Z({index:"userMutationsIndex",range:s},(o,a,l)=>{a.userId===this.userId&&(oe(a.batchId>=i),r=ps(this.It,a)),l.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Ii(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,r,o)=>{i=r.batchId,o.done()}).next(()=>i)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ii(e).W("userMutationsIndex",n).next(i=>i.map(s=>ps(this.It,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const i=Vl(this.userId,n.path),s=IDBKeyRange.lowerBound(i),r=[];return vr(e).Z({range:s},(o,a,l)=>{const[c,u,h]=o,d=jn(u);if(c===this.userId&&n.path.isEqual(d))return Ii(e).get(h).next(f=>{if(!f)throw z();oe(f.userId===this.userId),r.push(ps(this.It,f))});l.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Me(he);const s=[];return n.forEach(r=>{const o=Vl(this.userId,r.path),a=IDBKeyRange.lowerBound(o),l=vr(e).Z({range:a},(c,u,h)=>{const[d,f,g]=c,_=jn(f);d===this.userId&&r.path.isEqual(_)?i=i.add(g):h.done()});s.push(l)}),w.waitFor(s).next(()=>this.En(e,i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1,r=Vl(this.userId,i),o=IDBKeyRange.lowerBound(r);let a=new Me(he);return vr(e).Z({range:o},(l,c,u)=>{const[h,d,f]=l,g=jn(d);h===this.userId&&i.isPrefixOf(g)?g.length===s&&(a=a.add(f)):u.done()}).next(()=>this.En(e,a))}En(e,n){const i=[],s=[];return n.forEach(r=>{s.push(Ii(e).get(r).next(o=>{if(o===null)throw z();oe(o.userId===this.userId),i.push(ps(this.It,o))}))}),w.waitFor(s).next(()=>i)}removeMutationBatch(e,n){return mI(e.ie,this.userId,n).next(i=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),w.forEach(i,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const i=IDBKeyRange.lowerBound([this.userId]),s=[];return vr(e).Z({range:i},(r,o,a)=>{if(r[0]===this.userId){const l=jn(r[1]);s.push(l)}else a.done()}).next(()=>{oe(s.length===0)})})}containsKey(e,n){return pI(e,this.userId,n)}Rn(e){return gI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function pI(t,e,n){const i=Vl(e,n.path),s=i[1],r=IDBKeyRange.lowerBound(i);let o=!1;return vr(t).Z({range:r,X:!0},(a,l,c)=>{const[u,h,d]=a;u===e&&h===s&&(o=!0),c.done()}).next(()=>o)}function Ii(t){return _t(t,"mutations")}function vr(t){return _t(t,"documentMutations")}function gI(t){return _t(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Gs(0)}static vn(){return new Gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const i=new Gs(n.highestTargetId);return n.highestTargetId=i.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>se.fromTimestamp(new We(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,i){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,i&&(s.lastRemoteSnapshotVersion=i.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(i=>(i.targetCount+=1,this.Cn(n,i),this.Sn(e,i))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>pr(e).delete(n.targetId)).next(()=>this.Vn(e)).next(i=>(oe(i.targetCount>0),i.targetCount-=1,this.Sn(e,i)))}removeTargets(e,n,i){let s=0;const r=[];return pr(e).Z((o,a)=>{const l=Fo(a);l.sequenceNumber<=n&&i.get(l.targetId)===null&&(s++,r.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(r)).next(()=>s)}forEachTarget(e,n){return pr(e).Z((i,s)=>{const r=Fo(s);n(r)})}Vn(e){return Kg(e).get("targetGlobalKey").next(n=>(oe(n!==null),n))}Sn(e,n){return Kg(e).put("targetGlobalKey",n)}Dn(e,n){return pr(e).put(fI(this.It,n))}Cn(e,n){let i=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,i=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const i=Bs(n),s=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let r=null;return pr(e).Z({range:s,index:"queryTargetsIndex"},(o,a,l)=>{const c=Fo(a);tl(n,c.target)&&(r=c,l.done())}).next(()=>r)}addMatchingKeys(e,n,i){const s=[],r=Si(e);return n.forEach(o=>{const a=Kt(o.path);s.push(r.put({targetId:i,path:a})),s.push(this.referenceDelegate.addReference(e,i,o))}),w.waitFor(s)}removeMatchingKeys(e,n,i){const s=Si(e);return w.forEach(n,r=>{const o=Kt(r.path);return w.waitFor([s.delete([i,o]),this.referenceDelegate.removeReference(e,i,r)])})}removeMatchingKeysForTargetId(e,n){const i=Si(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return i.delete(s)}getMatchingKeysForTargetId(e,n){const i=IDBKeyRange.bound([n],[n+1],!1,!0),s=Si(e);let r=de();return s.Z({range:i,X:!0},(o,a,l)=>{const c=jn(o[1]),u=new j(c);r=r.add(u)}).next(()=>r)}containsKey(e,n){const i=Kt(n.path),s=IDBKeyRange.bound([i],[_b(i)],!1,!0);let r=0;return Si(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],l,c)=>{o!==0&&(r++,c.done())}).next(()=>r>0)}se(e,n){return pr(e).get(n).next(i=>i?Fo(i):null)}}function pr(t){return _t(t,"targets")}function Kg(t){return _t(t,"targetGlobal")}function Si(t){return _t(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg([t,e],[n,i]){const s=he(t,n);return s===0?he(e,i):s}class gM{constructor(e){this.xn=e,this.buffer=new Me(zg),this.Nn=0}kn(){return++this.Nn}Mn(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();zg(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vM{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}Fn(e){L("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zi(n)?L("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Xi(n)}await this.Fn(3e5)})}}class yM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return w.resolve(Zt.at);const i=new gM(n);return this.$n.forEachTarget(e,s=>i.Mn(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>i.Mn(s))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.$n.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Gg)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gg):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let i,s,r,o,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(i=h,a=Date.now(),this.removeTargets(e,i,n))).next(h=>(r=h,l=Date.now(),this.removeOrphanedDocuments(e,i))).next(h=>(c=Date.now(),Xh()<=Se.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${r} targets in `+(l-a)+`ms
	Removed ${h} documents in `+(c-l)+`ms
Total Duration: ${c-u}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e,n){this.db=e,this.garbageCollector=function(i,s){return new yM(i,s)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(i=>n.next(s=>i+s))}qn(e){let n=0;return this.Ln(e,i=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(i,s)=>n(s))}addReference(e,n,i){return Dl(e,i)}removeReference(e,n,i){return Dl(e,i)}removeTargets(e,n,i){return this.db.getTargetCache().removeTargets(e,n,i)}markPotentiallyOrphaned(e,n){return Dl(e,n)}Gn(e,n){return function(i,s){let r=!1;return gI(i).tt(o=>pI(i,o,s).next(a=>(a&&(r=!0),w.resolve(!a)))).next(()=>r)}(e,n)}removeOrphanedDocuments(e,n){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let r=0;return this.Kn(e,(o,a)=>{if(a<=n){const l=this.Gn(e,o).next(c=>{if(!c)return r++,i.getEntry(e,o).next(()=>(i.removeEntry(o,se.min()),Si(e).delete([0,Kt(o.path)])))});s.push(l)}}).next(()=>w.waitFor(s)).next(()=>i.apply(e)).next(()=>r)}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,n){return Dl(e,n)}Kn(e,n){const i=Si(e);let s,r=Zt.at;return i.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(r!==Zt.at&&n(new j(jn(s)),r),r=c,s=l):r=Zt.at}).next(()=>{r!==Zt.at&&n(new j(jn(s)),r)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Dl(t,e){return Si(t).put(function(n,i){return{targetId:0,path:Kt(n.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?w.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,i){return os(e).put(i)}removeEntry(e,n,i){return os(e).delete(function(s,r){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],hc(r),o[o.length-1]]}(n,i))}updateMetadata(e,n){return this.getMetadata(e).next(i=>(i.byteSize+=n,this.Qn(e,i)))}getEntry(e,n){let i=Fe.newInvalidDocument(n);return os(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ao(n))},(s,r)=>{i=this.jn(n,r)}).next(()=>i)}Wn(e,n){let i={size:0,document:Fe.newInvalidDocument(n)};return os(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ao(n))},(s,r)=>{i={document:this.jn(n,r),size:dc(r)}}).next(()=>i)}getEntries(e,n){let i=en();return this.zn(e,n,(s,r)=>{const o=this.jn(s,r);i=i.insert(s,o)}).next(()=>i)}Hn(e,n){let i=en(),s=new Qe(j.comparator);return this.zn(e,n,(r,o)=>{const a=this.jn(r,o);i=i.insert(r,a),s=s.insert(r,dc(o))}).next(()=>({documents:i,Jn:s}))}zn(e,n,i){if(n.isEmpty())return w.resolve();let s=new Me(Jg);n.forEach(l=>s=s.add(l));const r=IDBKeyRange.bound(Ao(s.first()),Ao(s.last())),o=s.getIterator();let a=o.getNext();return os(e).Z({index:"documentKeyIndex",range:r},(l,c,u)=>{const h=j.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Jg(a,h)<0;)i(a,null),a=o.getNext();a&&a.isEqual(h)&&(i(a,c),a=o.hasNext()?o.getNext():null),a?u.j(Ao(a)):u.done()}).next(()=>{for(;a;)i(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,i){const s=[n.popLast().toArray(),n.lastSegment(),hc(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],r=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return os(e).W(IDBKeyRange.bound(s,r,!0)).next(o=>{let a=en();for(const l of o){const c=this.jn(j.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);a=a.insert(c.key,c)}return a})}getAllFromCollectionGroup(e,n,i,s){let r=en();const o=Qg(n,i),a=Qg(n,un.max());return os(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,u)=>{const h=this.jn(j.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);r=r.insert(h.key,h),r.size===s&&u.done()}).next(()=>r)}newChangeBuffer(e){return new bM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Yg(e).get("remoteDocumentGlobalKey").next(n=>(oe(!!n),n))}Qn(e,n){return Yg(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const i=oM(this.It,n);if(!(i.isNoDocument()&&i.version.isEqual(se.min())))return i}return Fe.newInvalidDocument(e)}}function yI(t){return new _M(t)}class bM extends vI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new es(i=>i.toString(),(i,s)=>i.isEqual(s))}applyChanges(e){const n=[];let i=0,s=new Me((r,o)=>he(r.canonicalString(),o.canonicalString()));return this.changes.forEach((r,o)=>{const a=this.Xn.get(r);if(n.push(this.Yn.removeEntry(e,r,a.readTime)),o.isValidDocument()){const l=Vg(this.Yn.It,o);s=s.add(r.path.popLast()),i+=dc(l)-a.size,n.push(this.Yn.addEntry(e,r,l))}else if(i-=a.size,this.trackRemovals){const l=Vg(this.Yn.It,o.convertToNoDocument(se.min()));n.push(this.Yn.addEntry(e,r,l))}}),s.forEach(r=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,r))}),n.push(this.Yn.updateMetadata(e,i)),w.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(i=>(this.Xn.set(n,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:i,Jn:s})=>(s.forEach((r,o)=>{this.Xn.set(r,{size:o,readTime:i.get(r).readTime})}),i))}}function Yg(t){return _t(t,"remoteDocumentGlobal")}function os(t){return _t(t,"remoteDocumentsV14")}function Ao(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qg(t,e){const n=e.documentKey.path.toArray();return[t,hc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Jg(t,e){const n=t.path.toArray(),i=e.path.toArray();let s=0;for(let r=0;r<n.length-2&&r<i.length-2;++r)if(s=he(n[r],i[r]),s)return s;return s=he(n.length,i.length),s||(s=he(n[n.length-2],i[i.length-2]),s||he(n[n.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.getBaseDocument(e,n,i))).next(s=>(i!==null&&Xo(i.mutation,s,an.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,de()).next(()=>i))}getLocalViewOfDocuments(e,n,i=de()){const s=Bn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Vo();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Bn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,de()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=en();const o=Zo(),a=Zo();return n.forEach((l,c)=>{const u=i.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof pi)?r=r.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),Xo(u.mutation,c,u.mutation.getFieldMask(),We.now()))}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new IM(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Zo();let s=new Qe((o,a)=>o-a),r=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=i.get(l)||an.empty();u=a.applyToLocalView(c,u),i.set(l,u);const h=(s.get(a.batchId)||de()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Yb();u.forEach(d=>{if(!r.has(d)){const f=qb(n.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return w.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Uf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):w.resolve(Bn());let a=-1,l=r;return o.next(c=>w.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?w.resolve():this.getBaseDocument(e,u,h).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,de())).next(u=>({batchId:a,changes:zb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(i=>{let s=Vo();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Vo();return this.indexManager.getCollectionParents(e,s).next(o=>w.forEach(o,a=>{const l=function(c,u){return new mi(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,i).next(r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Fe.newInvalidDocument(c)))});let o=Vo();return s.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Xo(c.mutation,l,an.empty(),We.now()),Bf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,i){return i===null||i.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):w.resolve(Fe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:pt(i.createTime)}),w.resolve()}getNamedQuery(e,n){return w.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(i){return{name:i.name,query:Kf(i.bundledQuery),readTime:pt(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.overlays=new Qe(j.comparator),this.es=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Bn();return w.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.ue(e,n,r)}),w.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.es.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(i)),w.resolve()}getOverlaysForCollection(e,n,i){const s=Bn(),r=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return w.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new Qe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let u=r.get(c.largestBatchId);u===null&&(u=Bn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Bn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return w.resolve(a)}ue(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(i.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Gf(n,i));let r=this.es.get(n);r===void 0&&(r=de(),this.es.set(n,r)),this.es.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.ns=new Me(ct.ss),this.rs=new Me(ct.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const i=new ct(e,n);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.cs(new ct(e,n))}hs(e,n){e.forEach(i=>this.removeReference(i,n))}ls(e){const n=new j(new Ee([])),i=new ct(n,e),s=new ct(n,e+1),r=[];return this.rs.forEachInRange([i,s],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new Ee([])),i=new ct(n,e),s=new ct(n,e+1);let r=de();return this.rs.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new ct(e,0),i=this.ns.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ct{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||he(e._s,n._s)}static os(e,n){return he(e._s,n._s)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Me(ct.ss)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hf(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new ct(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.ps(i),r=s<0?0:s;return w.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([i,s],o=>{const a=this.ys(o._s);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Me(he);return n.forEach(s=>{const r=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{i=i.add(a._s)})}),w.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;j.isDocumentKey(r)||(r=r.child(""));const o=new ct(new j(r),0);let a=new Me(he);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l._s)),!0)},o),w.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(i=>{const s=this.ys(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return w.forEach(n.mutations,s=>{const r=new ct(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=i})}An(e){}containsKey(e,n){const i=new ct(n,0),s=this.gs.firstAfterOrEqual(i);return w.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e){this.Es=e,this.docs=new Qe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return w.resolve(i?i.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let i=en();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Fe.newInvalidDocument(s))}),w.resolve(i)}getAllFromCollection(e,n,i){let s=en();const r=new j(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Pf(Eb(l),i)<=0||(s=s.insert(l.key,l.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,i,s){z()}As(e,n){return w.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new AM(this)}getSize(e){return w.resolve(this.size)}}class AM extends vI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(i)}),w.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.persistence=e,this.Rs=new es(n=>Bs(n),tl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Yf,this.targetCount=0,this.vs=Gs.Pn()}forEachTarget(e,n){return this.Rs.forEach((i,s)=>n(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.bs&&(this.bs=n),w.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.Dn(n),w.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(r).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const i=this.Rs.get(n)||null;return w.resolve(i)}addMatchingKeys(e,n,i){return this.Ps.us(n,i),w.resolve()}removeMatchingKeys(e,n,i){this.Ps.hs(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ps.ds(n);return w.resolve(i)}containsKey(e,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Zt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new kM(this),this.indexManager=new fM,this.remoteDocumentCache=function(i){return new DM(i)}(i=>this.referenceDelegate.xs(i)),this.It=new dI(n),this.Ns=new EM(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Vs[e.toKey()];return i||(i=new SM(n,this.referenceDelegate),this.Vs[e.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,i){L("MemoryPersistence","Starting transaction:",e);const s=new CM(this.Ss.next());return this.referenceDelegate.ks(),i(s).next(r=>this.referenceDelegate.Ms(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Os(e,n){return w.or(Object.values(this.Vs).map(i=>()=>i.containsKey(e,n)))}}class CM extends Sb{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.Fs=new Yf,this.$s=null}static Bs(e){return new wu(e)}get Ls(){if(this.$s)return this.$s;throw z()}addReference(e,n,i){return this.Fs.addReference(i,n),this.Ls.delete(i.toString()),w.resolve()}removeReference(e,n,i){return this.Fs.removeReference(i,n),this.Ls.add(i.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ls.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,i=>{const s=j.fromPath(i);return this.Us(e,s).next(r=>{r||n.removeEntry(s,se.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(i=>{i?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(e){this.It=e}$(e,n,i,s){const r=new fu("createOrUpgrade",n);i<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lg,{unique:!0}),a.createObjectStore("documentMutations")}(e),Xg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return i<3&&s>=3&&(i!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Xg(e)),o=o.next(()=>function(a){const l=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:se.min().toTimestamp(),targetCount:0};return l.put("targetGlobalKey",c)}(r))),i<4&&s>=4&&(i!==0&&(o=o.next(()=>function(a,l){return l.store("mutations").W().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lg,{unique:!0});const u=l.store("mutations"),h=c.map(d=>u.put(d));return w.waitFor(h)})}(e,r))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&s>=5&&(o=o.next(()=>this.qs(r))),i<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(r)))),i<7&&s>=7&&(o=o.next(()=>this.Gs(r))),i<8&&s>=8&&(o=o.next(()=>this.Qs(e,r))),i<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&s>=10&&(o=o.next(()=>this.js(r))),i<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&s>=12&&(o=o.next(()=>{(function(a){const l=a.createObjectStore("documentOverlays",{keyPath:tM});l.createIndex("collectionPathOverlayIndex",nM,{unique:!1}),l.createIndex("collectionGroupOverlayIndex",iM,{unique:!1})})(e)})),i<13&&s>=13&&(o=o.next(()=>function(a){const l=a.createObjectStore("remoteDocumentsV14",{keyPath:Hx});l.createIndex("documentKeyIndex",Wx),l.createIndex("collectionGroupIndex",Gx)}(e)).next(()=>this.Ws(e,r)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&s>=14&&(o=o.next(()=>this.zs(e,r))),i<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Jx}).createIndex("sequenceNumberIndex",Xx,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Zx}).createIndex("documentKeyIndex",eM,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((i,s)=>{n+=dc(s)}).next(()=>{const i={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}qs(e){const n=e.store("mutationQueues"),i=e.store("mutations");return n.W().next(s=>w.forEach(s,r=>{const o=IDBKeyRange.bound([r.userId,-1],[r.userId,r.lastAcknowledgedBatchId]);return i.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{oe(l.userId===r.userId);const c=ps(this.It,l);return mI(e,r.userId,c).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const r=[];return i.Z((o,a)=>{const l=new Ee(o),c=function(u){return[0,Kt(u)]}(l);r.push(n.get(c).next(u=>u?w.resolve():(h=>n.put({targetId:0,path:Kt(h),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(r))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:Qx});const i=n.store("collectionParents"),s=new zf,r=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return i.put({collectionId:a,parent:Kt(l)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const l=new Ee(o);return r(l.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,l],c)=>{const u=jn(a);return r(u.popLast())}))}js(e){const n=e.store("targets");return n.Z((i,s)=>{const r=Fo(s),o=fI(this.It,r);return n.put(o)})}Ws(e,n){const i=n.store("remoteDocuments"),s=[];return i.Z((r,o)=>{const a=n.store("remoteDocumentsV14"),l=(c=o,c.document?new j(Ee.fromString(c.document.name).popFirst(5)):c.noDocument?j.fromSegments(c.noDocument.path):c.unknownDocument?j.fromSegments(c.unknownDocument.path):z()).path.toArray();var c;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>w.waitFor(s))}zs(e,n){const i=n.store("mutations"),s=yI(this.It),r=new _I(wu.Bs,this.It.re);return i.W().next(o=>{const a=new Map;return o.forEach(l=>{var c;let u=(c=a.get(l.userId))!==null&&c!==void 0?c:de();ps(this.It,l).keys().forEach(h=>u=u.add(h)),a.set(l.userId,u)}),w.forEach(a,(l,c)=>{const u=new ut(c),h=vu.oe(this.It,u),d=r.getIndexManager(u),f=yu.oe(u,this.It,d,r.referenceDelegate);return new wI(s,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new rd(n,Zt.at),l).next()})})}}function Xg(t){t.createObjectStore("targetDocuments",{keyPath:zx}).createIndex("documentTargetsIndex",Yx,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Kx,{unique:!0}),t.createObjectStore("targetGlobal")}const oh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Qf{constructor(e,n,i,s,r,o,a,l,c,u,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=i,this.Hs=r,this.window=o,this.document=a,this.Js=c,this.Ys=u,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Qf.C())throw new R(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new wM(this,s),this.ii=n+"main",this.It=new dI(l),this.ri=new In(this.ii,this.Xs,new OM(this.It)),this.Cs=new pM(this.referenceDelegate,this.It),this.remoteDocumentCache=yI(this.It),this.Ns=new aM,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,u===!1&&Ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,oh);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Zt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Al(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Zi(e))return L("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return L("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return ko(e).get("owner").next(n=>w.resolve(this.mi(n)))}gi(e){return Al(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const i=_t(n,"clientMetadata");return i.W().next(s=>{const r=this.Ii(s,18e5),o=s.filter(a=>r.indexOf(a)===-1);return w.forEach(o,a=>i.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?w.resolve(!0):ko(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new R(I.FAILED_PRECONDITION,oh);return!1}}return!(!this.networkEnabled||!this.inForeground)||Al(e).W().next(i=>this.Ii(i,5e3).find(s=>{if(this.clientId!==s.clientId){const r=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(r||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&L("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new rd(e,Zt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(i=>this.pi(i.updateTimeMs,n)&&!this.Ei(i.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Al(e).W().next(n=>this.Ii(n,18e5).map(i=>i.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return yu.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new mM(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return vu.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,i){L("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",r=(o=this.Xs)===15?rM:o===14?hI:o===13?uI:o===12?sM:o===11?cI:void z();var o;let a;return this.ri.runTransaction(e,s,r,l=>(a=new rd(l,this.Ss?this.Ss.next():Zt.at),n==="readwrite-primary"?this.fi(a).next(c=>!!c||this.di(a)).next(c=>{if(!c)throw Ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new R(I.FAILED_PRECONDITION,Tb);return i(a)}).next(c=>this.wi(a).next(()=>c)):this.Vi(a).next(()=>i(a)))).then(l=>(a.raiseOnCommittedEvent(),l))}Vi(e){return ko(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(I.FAILED_PRECONDITION,oh)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ko(e).put("owner",n)}static C(){return In.C()}_i(e){const n=ko(e);return n.get("owner").next(i=>this.mi(i)?(L("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}pi(e,n){const i=Date.now();return!(e<i-n)&&(!(e>i)||(Ze(`Detected an update time that is in the future: ${e} > ${i}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),yD()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const i=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return L("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Ze("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ze("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ko(t){return _t(t,"owner")}function Al(t){return _t(t,"clientMetadata")}function Jf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Si=i,this.Di=s}static Ci(e,n){let i=de(),s=de();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Xf(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.ki(e,n).next(r=>r||this.Mi(e,n,s,i)).next(r=>r||this.Oi(e,n))}ki(e,n){if(Dg(n))return w.resolve(null);let i=nn(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uc(n,null,"F"),i=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=de(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,uc(n,null,"F")):this.Bi(e,c,n,l)}))})))}Mi(e,n,i,s){return Dg(n)||s.isEqual(se.min())?this.Oi(e,n):this.Ni.getDocuments(e,i).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,i,s)?this.Oi(e,n):(Xh()<=Se.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),nd(n)),this.Bi(e,o,n,Ib(s,-1)))})}Fi(e,n){let i=new Me(Pb(e));return n.forEach((s,r)=>{Bf(e,r)&&(i=i.add(r))}),i}$i(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Oi(e,n){return Xh()<=Se.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",nd(n)),this.Ni.getDocumentsMatchingQuery(e,n,un.min())}Bi(e,n,i,s){return this.Ni.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n,i,s){this.persistence=e,this.Li=n,this.It=s,this.Ui=new Qe(he),this.qi=new es(r=>Bs(r),tl),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(i)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function II(t,e,n,i){return new NM(t,e,n,i)}async function EI(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let l=de();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(i,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function xM(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=w.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(g=>{const _=l.docVersions.get(f);oe(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=de();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function TI(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function MM(t,e){const n=H(t),i=e.snapshotVersion;let s=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.Ui;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(at.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(g,_,S){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=en(),c=de();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(SI(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!i.isEqual(se.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.Ui=s,r))}function SI(t,e,n){let i=de(),s=de();return n.forEach(r=>i=i.add(r)),e.getEntries(t,i).next(r=>{let o=en();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:s}})}function RM(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Wr(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return n.Cs.getTargetData(i,e).next(r=>r?(s=r,w.resolve(s)):n.Cs.allocateTargetId(i).next(o=>(s=new xi(e,o,0,i.currentSequenceNumber),n.Cs.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=n.Ui.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(i.targetId,i),n.qi.set(e,i.targetId)),i})}async function Gr(t,e,n){const i=H(t),s=i.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zi(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.Ui=i.Ui.remove(e),i.qi.delete(s.target)}function fc(t,e,n){const i=H(t);let s=se.min(),r=de();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=H(a),h=u.qi.get(c);return h!==void 0?w.resolve(u.Ui.get(h)):u.Cs.getTargetData(l,c)}(i,o,nn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Li.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?r:de())).next(a=>(kI(i,Rb(e),a),{documents:a,Hi:r})))}function DI(t,e){const n=H(t),i=H(n.Cs),s=n.Ui.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",r=>i.se(r,e).next(o=>o?o.target:null))}function AI(t,e){const n=H(t),i=n.Ki.get(e)||se.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.Gi.getAllFromCollectionGroup(s,e,Ib(i,-1),Number.MAX_SAFE_INTEGER)).then(s=>(kI(n,e,s),s))}function kI(t,e,n){let i=se.min();n.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),t.Ki.set(e,i)}async function PM(t,e,n,i){const s=H(t);let r=de(),o=en();for(const c of n){const u=e.Ji(c.metadata.name);c.document&&(r=r.add(u));const h=e.Yi(c);h.setReadTime(e.Xi(c.metadata.readTime)),o=o.insert(u,h)}const a=s.Gi.newChangeBuffer({trackRemovals:!0}),l=await Wr(s,function(c){return nn(ao(Ee.fromString(`__bundle__/docs/${c}`)))}(i));return s.persistence.runTransaction("Apply bundle documents","readwrite",c=>SI(c,a,o).next(u=>(a.apply(c),u)).next(u=>s.Cs.removeMatchingKeysForTargetId(c,l.targetId).next(()=>s.Cs.addMatchingKeys(c,r,l.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(c,u.Wi,u.zi)).next(()=>u.Wi)))}async function LM(t,e,n=de()){const i=await Wr(t,nn(Kf(e.bundledQuery))),s=H(t);return s.persistence.runTransaction("Save named query","readwrite",r=>{const o=pt(e.readTime);if(i.snapshotVersion.compareTo(o)>=0)return s.Ns.saveNamedQuery(r,e);const a=i.withResumeToken(at.EMPTY_BYTE_STRING,o);return s.Ui=s.Ui.insert(a.targetId,a),s.Cs.updateTargetData(r,a).next(()=>s.Cs.removeMatchingKeysForTargetId(r,i.targetId)).next(()=>s.Cs.addMatchingKeys(r,n,i.targetId)).next(()=>s.Ns.saveNamedQuery(r,e))})}function Zg(t,e){return`firestore_clients_${t}_${e}`}function ev(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function ah(t,e){return`firestore_targets_${t}_${e}`}class mc{constructor(e,n,i,s){this.user=e,this.batchId=n,this.state=i,this.error=s}static Zi(e,n,i){const s=JSON.parse(i);let r,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(r=new R(s.error.code,s.error.message))),o?new mc(e,n,s.state,r):(Ze("SharedClientState",`Failed to parse mutation state for ID '${n}': ${i}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ea{constructor(e,n,i){this.targetId=e,this.state=n,this.error=i}static Zi(e,n){const i=JSON.parse(n);let s,r=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return r&&i.error&&(r=typeof i.error.message=="string"&&typeof i.error.code=="string",r&&(s=new R(i.error.code,i.error.message))),r?new ea(e,i.state,s):(Ze("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class pc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const i=JSON.parse(n);let s=typeof i=="object"&&i.activeTargetIds instanceof Array,r=gu();for(let o=0;s&&o<i.activeTargetIds.length;++o)s=kb(i.activeTargetIds[o]),r=r.add(i.activeTargetIds[o]);return s?new pc(e,r):(Ze("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Zf{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Zf(n.clientId,n.onlineState):(Ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class od{constructor(){this.activeTargetIds=gu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lh{constructor(e,n,i,s,r){this.window=e,this.Hs=n,this.persistenceKey=i,this.sr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Qe(he),this.started=!1,this.cr=[];const o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.ar=Zg(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new od),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const i of e){if(i===this.sr)continue;const s=this.getItem(Zg(this.persistenceKey,i));if(s){const r=pc.Zi(i,s);r&&(this.ur=this.ur.insert(r.clientId,r))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const i=this.yr(n);i&&this.pr(i)}for(const i of this.cr)this.rr(i);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((i,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,i){this.Tr(e,n,i),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(ah(this.persistenceKey,e));if(i){const s=ea.Zi(e,i);s&&(n=s.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ah(this.persistenceKey,e))}updateQueryState(e,n,i){this.Rr(e,n,i)}handleUserChange(e,n,i){n.forEach(s=>{this.Er(s)}),this.currentUser=e,i.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return L("SharedClientState","READ",e,n),n}setItem(e,n){L("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){L("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(L("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const i=this.vr(n.key);return this.Vr(i,null)}{const i=this.Sr(n.key,n.newValue);if(i)return this.Vr(i.clientId,i)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const i=this.Dr(n.key,n.newValue);if(i)return this.Cr(i)}}else if(this._r.test(n.key)){if(n.newValue!==null){const i=this.Nr(n.key,n.newValue);if(i)return this.kr(i)}}else if(n.key===this.wr){if(n.newValue!==null){const i=this.yr(n.newValue);if(i)return this.pr(i)}}else if(n.key===this.hr){const i=function(s){let r=Zt.at;if(s!=null)try{const o=JSON.parse(s);oe(typeof o=="number"),r=o}catch(o){Ze("SharedClientState","Failed to read sequence number from WebStorage",o)}return r}(n.newValue);i!==Zt.at&&this.sequenceNumberHandler(i)}else if(n.key===this.mr){const i=this.Mr(n.newValue);await Promise.all(i.map(s=>this.syncEngine.Or(s)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,i){const s=new mc(this.currentUser,e,n,i),r=ev(this.persistenceKey,this.currentUser,e);this.setItem(r,s.tr())}Er(e){const n=ev(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,i){const s=ah(this.persistenceKey,e),r=new ea(e,n,i);this.setItem(s,r.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const i=this.vr(e);return pc.Zi(i,n)}Dr(e,n){const i=this.dr.exec(e),s=Number(i[1]),r=i[2]!==void 0?i[2]:null;return mc.Zi(new ut(r),s,n)}Nr(e,n){const i=this._r.exec(e),s=Number(i[1]);return ea.Zi(s,n)}yr(e){return Zf.Zi(e)}Mr(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);L("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const i=n?this.ur.insert(e,n):this.ur.remove(e),s=this.Ir(this.ur),r=this.Ir(i),o=[],a=[];return r.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{r.has(l)||a.push(l)}),this.syncEngine.Br(o,a).then(()=>{this.ur=i})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=gu();return e.forEach((i,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class CI{constructor(){this.Lr=new od,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,i){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new od,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,i,s,r){const o=this.ao(e,n);L("RestConnection","Sending: ",o,i);const a={};return this.ho(a,s,r),this.lo(e,o,a,i).then(l=>(L("RestConnection","Received: ",l),l),l=>{throw Ur("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}fo(e,n,i,s,r,o){return this.co(e,n,i,s,r)}ho(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+oo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}ao(e,n){const i=FM[e];return`${this.oo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,i,s){return new Promise((r,o)=>{const a=new FN;a.listenOnce(PN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case sh.NO_ERROR:const c=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(c)),r(c);break;case sh.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new R(I.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const u=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(h.status);o(new R(d,h.message))}else o(new R(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(I.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,i,15)})}_o(e,n,i){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=MN(),o=RN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new VN({})),this.ho(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const l=s.join("");L("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new $M({Hr:g=>{h?L("Connection","Not sending because WebChannel is closed:",g):(u||(L("Connection","Opening WebChannel transport."),c.open(),u=!0),L("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),f=(g,_,S)=>{g.listen(_,x=>{try{S(x)}catch(G){setTimeout(()=>{throw G},0)}})};return f(c,Il.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),f(c,Il.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),d.io())}),f(c,Il.EventType.ERROR,g=>{h||(h=!0,Ur("Connection","WebChannel transport errored:",g),d.io(new R(I.UNAVAILABLE,"The operation could not be completed")))}),f(c,Il.EventType.MESSAGE,g=>{var _;if(!h){const S=g.data[0];oe(!!S);const x=S,G=x.error||((_=x[0])===null||_===void 0?void 0:_.error);if(G){L("Connection","WebChannel received error:",G);const D=G.status;let O=function(B){const U=nt[B];if(U!==void 0)return Gb(U)}(D),$=G.message;O===void 0&&(O=I.INTERNAL,$="Unknown error status: "+D+" with message "+G.message),h=!0,d.io(new R(O,$)),c.close()}else L("Connection","WebChannel received:",S),d.ro(S)}}),f(o,LN.STAT_EVENT,g=>{g.stat===hg.PROXY?L("Connection","Detected buffering proxy"):g.stat===hg.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){return typeof window<"u"?window:null}function Fl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){return new Nx(t,!0)}class em{constructor(e,n,i=1e3,s=1.5,r=6e4){this.Hs=e,this.timerId=n,this.wo=i,this.mo=s,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),i=Math.max(0,Date.now()-this.To),s=Math.max(0,n-i);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,i,s,r,o,a,l){this.Hs=e,this.Po=i,this.vo=s,this.Vo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new em(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Ze(n.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.So===n&&this.Go(i,s)},i=>{e(()=>{const s=new R(I.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(s)})})}Go(e,n){const i=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{i(()=>this.Qo(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BM extends NI{constructor(e,n,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,o),this.It=r}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=Rx(this.It,e),i=function(s){if(!("targetChange"in s))return se.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?se.min():r.readTime?pt(r.readTime):se.min()}(e);return this.listener.Wo(n,i)}zo(e){const n={};n.database=xa(this.It),n.addTarget=function(s,r){let o;const a=r.target;return o=lc(a)?{documents:iI(s,a)}:{query:sI(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Xb(s,r.resumeToken):r.snapshotVersion.compareTo(se.min())>0&&(o.readTime=Oa(s,r.snapshotVersion.toTimestamp())),o}(this.It,e);const i=Lx(this.It,e);i&&(n.labels=i),this.Bo(n)}Ho(e){const n={};n.database=xa(this.It),n.removeTarget=e,this.Bo(n)}}class jM extends NI{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.It=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Px(e.writeResults,e.commitTime),i=pt(e.commitTime);return this.listener.Zo(i,n)}return oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=xa(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Ma(this.It,i))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=i,this.It=s,this.nu=!1}su(){if(this.nu)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.Vo.co(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(I.UNKNOWN,s.toString())})}fo(e,n,i,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.Vo.fo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new R(I.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class HM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ze(n),this.ou=!1):L("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr(o=>{i.enqueueAndForget(async()=>{ts(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l._u.add(4),await uo(l),l.gu.set("Unknown"),l._u.delete(4),await al(l)}(this))})}),this.gu=new HM(i,s)}}async function al(t){if(ts(t))for(const e of t.wu)await e(!0)}async function uo(t){for(const e of t.wu)await e(!1)}function _u(t,e){const n=H(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),im(n)?nm(n):fo(n).ko()&&tm(n,e))}function Ra(t,e){const n=H(t),i=fo(n);n.du.delete(e),i.ko()&&xI(n,e),n.du.size===0&&(i.ko()?i.Fo():ts(n)&&n.gu.set("Unknown"))}function tm(t,e){t.yu.Ot(e.targetId),fo(t).zo(e)}function xI(t,e){t.yu.Ot(e),fo(t).Ho(e)}function nm(t){t.yu=new kx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),fo(t).start(),t.gu.uu()}function im(t){return ts(t)&&!fo(t).No()&&t.du.size>0}function ts(t){return H(t)._u.size===0}function MI(t){t.yu=void 0}async function GM(t){t.du.forEach((e,n)=>{tm(t,e)})}async function KM(t,e){MI(t),im(t)?(t.gu.hu(e),nm(t)):t.gu.set("Unknown")}async function zM(t,e,n){if(t.gu.set("Online"),e instanceof Jb&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.du.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.du.delete(o),i.yu.removeTarget(o))}(t,e)}catch(i){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await gc(t,i)}else if(e instanceof Ll?t.yu.Gt(e):e instanceof Qb?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(se.min()))try{const i=await TI(t.localStore);n.compareTo(i)>=0&&await function(s,r){const o=s.yu.te(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.du.get(l);c&&s.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.du.get(a);if(!l)return;s.du.set(a,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),xI(s,a);const c=new xi(l.target,a,1,l.sequenceNumber);tm(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){L("RemoteStore","Failed to raise snapshot:",i),await gc(t,i)}}async function gc(t,e,n){if(!Zi(e))throw e;t._u.add(1),await uo(t),t.gu.set("Offline"),n||(n=()=>TI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await al(t)})}function RI(t,e){return e().catch(n=>gc(t,n,e))}async function ho(t){const e=H(t),n=Hi(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;YM(e);)try{const s=await RM(e.localStore,i);if(s===null){e.fu.length===0&&n.Fo();break}i=s.batchId,QM(e,s)}catch(s){await gc(e,s)}PI(e)&&LI(e)}function YM(t){return ts(t)&&t.fu.length<10}function QM(t,e){t.fu.push(e);const n=Hi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function PI(t){return ts(t)&&!Hi(t).No()&&t.fu.length>0}function LI(t){Hi(t).start()}async function JM(t){Hi(t).eu()}async function XM(t){const e=Hi(t);for(const n of t.fu)e.Xo(n.mutations)}async function ZM(t,e,n){const i=t.fu.shift(),s=Wf.from(i,e,n);await RI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ho(t)}async function eR(t,e){e&&Hi(t).Yo&&await async function(n,i){if(s=i.code,Wb(s)&&s!==I.ABORTED){const r=n.fu.shift();Hi(n).Oo(),await RI(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await ho(n)}var s}(t,e),PI(t)&&LI(t)}async function nv(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const i=ts(n);n._u.add(3),await uo(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await al(n)}async function ad(t,e){const n=H(t);e?(n._u.delete(2),await al(n)):e||(n._u.add(2),await uo(n),n.gu.set("Unknown"))}function fo(t){return t.pu||(t.pu=function(e,n,i){const s=H(e);return s.su(),new BM(n,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,i)}(t.datastore,t.asyncQueue,{Yr:GM.bind(null,t),Zr:KM.bind(null,t),Wo:zM.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),im(t)?nm(t):t.gu.set("Unknown")):(await t.pu.stop(),MI(t))})),t.pu}function Hi(t){return t.Iu||(t.Iu=function(e,n,i){const s=H(e);return s.su(),new jM(n,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,i)}(t.datastore,t.asyncQueue,{Yr:JM.bind(null,t),Zr:eR.bind(null,t),tu:XM.bind(null,t),Zo:ZM.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await ho(t)):(await t.Iu.stop(),t.fu.length>0&&(L("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new mt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new sm(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(t,e){if(Ze("AsyncQueue",`${e}: ${t}`),Zi(t))return new R(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.comparator=e?(n,i)=>e(n,i)||j.comparator(n.key,i.key):(n,i)=>j.comparator(n.key,i.key),this.keyedMap=Vo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Nr;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.Tu=new Qe(j.comparator)}track(e){const n=e.doc.key,i=this.Tu.get(n);i?e.type!==0&&i.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&i.type!==1?this.Tu=this.Tu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Tu=this.Tu.remove(n):e.type===1&&i.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):z():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Kr{constructor(e,n,i,s,r,o,a,l){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,i,s){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Kr(e,n,Nr.emptySet(n),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.Au=void 0,this.listeners=[]}}class nR{constructor(){this.queries=new es(e=>Mb(e),nl),this.onlineState="Unknown",this.Ru=new Set}}async function rm(t,e){const n=H(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new tR),s)try{r.Au=await n.onListen(i)}catch(o){const a=mo(o,`Initialization of query '${nd(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&am(n)}async function om(t,e){const n=H(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function iR(t,e){const n=H(t);let i=!1;for(const s of e){const r=s.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(s)&&(i=!0);o.Au=s}}i&&am(n)}function sR(t,e,n){const i=H(t),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(n);i.queries.delete(e)}function am(t){t.Ru.forEach(e=>{e.next()})}class lm{constructor(e,n,i){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}Pu(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Kr(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Nu||!i)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.payload=e,this.byteLength=n}ku(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.It=e}Ji(e){return Hn(this.It,e)}Yi(e){return e.metadata.exists?nI(this.It,e.document,!1):Fe.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return pt(e)}}class oR{constructor(e,n,i){this.Mu=e,this.localStore=n,this.It=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=VI(e)}Ou(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n;const i=Ee.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Fu(e){const n=new Map,i=new sv(this.It);for(const s of e)if(s.metadata.queries){const r=i.Ji(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||de()).add(r);n.set(o,a)}}return n}async complete(){const e=await PM(this.localStore,new sv(this.It),this.documents,this.Mu.id),n=this.Fu(this.documents);for(const i of this.queries)await LM(this.localStore,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,$u:this.collectionGroups,Bu:e}}}function VI(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.key=e}}class $I{constructor(e){this.key=e}}class UI{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=de(),this.mutatedKeys=de(),this.Ku=Pb(e),this.Gu=new Nr(this.Ku)}get Qu(){return this.Lu}ju(e,n){const i=n?n.Wu:new iv,s=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Bf(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let S=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(i.track({type:3,doc:f}),S=!0):this.zu(d,f)||(i.track({type:2,doc:f}),S=!0,(l&&this.Ku(f,l)>0||c&&this.Ku(f,c)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),S=!0):d&&!f&&(i.track({type:1,doc:d}),S=!0,(l||c)&&(a=!0)),S&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Gu:o,Wu:i,$i:a,mutatedKeys:r}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.Wu.Eu();r.sort((c,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return f(h)-f(d)}(c.type,u.type)||this.Ku(c.doc,u.doc)),this.Hu(i);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new Kr(this.query,e.Gu,s,r,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new iv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=de(),this.Gu.forEach(i=>{this.Xu(i.key)&&(this.qu=this.qu.add(i.key))});const n=[];return e.forEach(i=>{this.qu.has(i)||n.push(new $I(i))}),this.qu.forEach(i=>{e.has(i)||n.push(new FI(i))}),n}Zu(e){this.Lu=e.Hi,this.qu=de();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return Kr.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class aR{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class lR{constructor(e){this.key=e,this.ec=!1}}class cR{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new es(a=>Mb(a),nl),this.ic=new Map,this.rc=new Set,this.oc=new Qe(j.comparator),this.uc=new Map,this.cc=new Yf,this.ac={},this.hc=new Map,this.lc=Gs.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function uR(t,e){const n=fm(t);let i,s;const r=n.sc.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.tc();else{const o=await Wr(n.localStore,nn(e));n.isPrimaryClient&&_u(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await cm(n,e,i,a==="current")}return s}async function cm(t,e,n,i){t.dc=(u,h,d)=>async function(f,g,_,S){let x=g.view.ju(_);x.$i&&(x=await fc(f.localStore,g.query,!1).then(({documents:O})=>g.view.ju(O,x)));const G=S&&S.targetChanges.get(g.targetId),D=g.view.applyChanges(x,f.isPrimaryClient,G);return ld(f,g.targetId,D.Yu),D.snapshot}(t,u,h,d);const s=await fc(t.localStore,e,!0),r=new UI(e,s.Hi),o=r.ju(s.documents),a=rl.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline"),l=r.applyChanges(o,t.isPrimaryClient,a);ld(t,n,l.Yu);const c=new aR(e,n,r);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function hR(t,e){const n=H(t),i=n.sc.get(e),s=n.ic.get(i.targetId);if(s.length>1)return n.ic.set(i.targetId,s.filter(r=>!nl(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Gr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),Ra(n.remoteStore,i.targetId),zr(n,i.targetId)}).catch(Xi)):(zr(n,i.targetId),await Gr(n.localStore,i.targetId,!0))}async function dR(t,e,n){const i=mm(t);try{const s=await function(r,o){const a=H(r),l=We.now(),c=o.reduce((d,f)=>d.add(f.key),de());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=en(),g=de();return a.Gi.getEntries(d,c).next(_=>{f=_,f.forEach((S,x)=>{x.isValidDocument()||(g=g.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const S=[];for(const x of o){const G=Ix(x,u.get(x.key).overlayedDocument);G!=null&&S.push(new pi(x.key,G,Ob(G.value.mapValue),He.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,S,o)}).next(_=>{h=_;const S=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,S)})}).then(()=>({batchId:h.batchId,changes:zb(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.ac[r.currentUser.toKey()];l||(l=new Qe(he)),l=l.insert(o,a),r.ac[r.currentUser.toKey()]=l}(i,s.batchId,n),await gi(i,s.changes),await ho(i.remoteStore)}catch(s){const r=mo(s,"Failed to persist write");n.reject(r)}}async function BI(t,e){const n=H(t);try{const i=await MM(n.localStore,e);e.targetChanges.forEach((s,r)=>{const o=n.uc.get(r);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?oe(o.ec):s.removedDocuments.size>0&&(oe(o.ec),o.ec=!1))}),await gi(n,i,e)}catch(i){await Xi(i)}}function rv(t,e,n){const i=H(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.sc.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=H(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&am(a)}(i.eventManager,e),s.length&&i.nc.Wo(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function fR(t,e,n){const i=H(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.uc.get(e),r=s&&s.key;if(r){let o=new Qe(j.comparator);o=o.insert(r,Fe.newNoDocument(r,se.min()));const a=de().add(r),l=new sl(se.min(),new Map,new Me(he),o,a);await BI(i,l),i.oc=i.oc.remove(r),i.uc.delete(e),dm(i)}else await Gr(i.localStore,e,!1).then(()=>zr(i,e,n)).catch(Xi)}async function mR(t,e){const n=H(t),i=e.batch.batchId;try{const s=await xM(n.localStore,e);hm(n,i,null),um(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await gi(n,s)}catch(s){await Xi(s)}}async function pR(t,e,n){const i=H(t);try{const s=await function(r,o){const a=H(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(oe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(i.localStore,e);hm(i,e,n),um(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await gi(i,s)}catch(s){await Xi(s)}}async function gR(t,e){const n=H(t);ts(n.remoteStore)||L("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(r){const o=H(r);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(i===-1)return void e.resolve();const s=n.hc.get(i)||[];s.push(e),n.hc.set(i,s)}catch(i){const s=mo(i,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function um(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function hm(t,e,n){const i=H(t);let s=i.ac[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.ac[i.currentUser.toKey()]=s}}function zr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc._c(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(i=>{t.cc.containsKey(i)||jI(t,i)})}function jI(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Ra(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),dm(t))}function ld(t,e,n){for(const i of n)i instanceof FI?(t.cc.addReference(i.key,e),vR(t,i)):i instanceof $I?(L("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||jI(t,i.key)):z()}function vR(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(L("SyncEngine","New document in limbo: "+n),t.rc.add(i),dm(t))}function dm(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(Ee.fromString(e)),i=t.lc.next();t.uc.set(i,new lR(n)),t.oc=t.oc.insert(n,i),_u(t.remoteStore,new xi(nn(ao(n.path)),i,2,Zt.at))}}async function gi(t,e,n){const i=H(t),s=[],r=[],o=[];i.sc.isEmpty()||(i.sc.forEach((a,l)=>{o.push(i.dc(l,e,n).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Xf.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.nc.Wo(s),await async function(a,l){const c=H(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(l,h=>w.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>w.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!Zi(u))throw u;L("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);c.Ui=c.Ui.insert(h,g)}}}(i.localStore,r))}async function yR(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const i=await EI(n.localStore,e);n.currentUser=e,function(s,r){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new R(I.CANCELLED,r))})}),s.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await gi(n,i.ji)}}function wR(t,e){const n=H(t),i=n.uc.get(e);if(i&&i.ec)return de().add(i.key);{let s=de();const r=n.ic.get(e);if(!r)return s;for(const o of r){const a=n.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}async function _R(t,e){const n=H(t),i=await fc(n.localStore,e.query,!0),s=e.view.Zu(i);return n.isPrimaryClient&&ld(n,e.targetId,s.Yu),s}async function bR(t,e){const n=H(t);return AI(n.localStore,e).then(i=>gi(n,i))}async function IR(t,e,n,i){const s=H(t),r=await function(o,a){const l=H(o),c=H(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",u=>c.Tn(u,a).next(h=>h?l.localDocuments.getDocuments(u,h):w.resolve(null)))}(s.localStore,e);r!==null?(n==="pending"?await ho(s.remoteStore):n==="acknowledged"||n==="rejected"?(hm(s,e,i||null),um(s,e),function(o,a){H(H(o).mutationQueue).An(a)}(s.localStore,e)):z(),await gi(s,r)):L("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ER(t,e){const n=H(t);if(fm(n),mm(n),e===!0&&n.fc!==!0){const i=n.sharedClientState.getAllActiveQueryTargets(),s=await ov(n,i.toArray());n.fc=!0,await ad(n.remoteStore,!0);for(const r of s)_u(n.remoteStore,r)}else if(e===!1&&n.fc!==!1){const i=[];let s=Promise.resolve();n.ic.forEach((r,o)=>{n.sharedClientState.isLocalQueryTarget(o)?i.push(o):s=s.then(()=>(zr(n,o),Gr(n.localStore,o,!0))),Ra(n.remoteStore,o)}),await s,await ov(n,i),function(r){const o=H(r);o.uc.forEach((a,l)=>{Ra(o.remoteStore,l)}),o.cc.fs(),o.uc=new Map,o.oc=new Qe(j.comparator)}(n),n.fc=!1,await ad(n.remoteStore,!1)}}async function ov(t,e,n){const i=H(t),s=[],r=[];for(const o of e){let a;const l=i.ic.get(o);if(l&&l.length!==0){a=await Wr(i.localStore,nn(l[0]));for(const c of l){const u=i.sc.get(c),h=await _R(i,u);h.snapshot&&r.push(h.snapshot)}}else{const c=await DI(i.localStore,o);a=await Wr(i.localStore,c),await cm(i,qI(c),o,!1)}s.push(a)}return i.nc.Wo(r),s}function qI(t){return xb(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function TR(t){const e=H(t);return H(H(e.localStore).persistence).vi()}async function SR(t,e,n,i){const s=H(t);if(s.fc)return void L("SyncEngine","Ignoring unexpected query state notification.");const r=s.ic.get(e);if(r&&r.length>0)switch(n){case"current":case"not-current":{const o=await AI(s.localStore,Rb(r[0])),a=sl.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await gi(s,o,a);break}case"rejected":await Gr(s.localStore,e,!0),zr(s,e,i);break;default:z()}}async function DR(t,e,n){const i=fm(t);if(i.fc){for(const s of e){if(i.ic.has(s)){L("SyncEngine","Adding an already active target "+s);continue}const r=await DI(i.localStore,s),o=await Wr(i.localStore,r);await cm(i,qI(r),o.targetId,!1),_u(i.remoteStore,o)}for(const s of n)i.ic.has(s)&&await Gr(i.localStore,s,!1).then(()=>{Ra(i.remoteStore,s),zr(i,s)}).catch(Xi)}}function fm(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fR.bind(null,e),e.nc.Wo=iR.bind(null,e.eventManager),e.nc._c=sR.bind(null,e.eventManager),e}function mm(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pR.bind(null,e),e}function AR(t,e,n){const i=H(t);(async function(s,r,o){try{const a=await r.getMetadata();if(await function(h,d){const f=H(h),g=pt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",_=>f.Ns.getBundleMetadata(_,d.id)).then(_=>!!_&&_.createTime.compareTo(g)>=0)}(s.localStore,a))return await r.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(VI(a));const l=new oR(a,s.localStore,r.It);let c=await r.wc();for(;c;){const h=await l.Ou(c);h&&o._updateProgress(h),c=await r.wc()}const u=await l.complete();return await gi(s,u.Bu,void 0),await function(h,d){const f=H(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ns.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(u.progress),Promise.resolve(u.$u)}catch(a){return Ur("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(i,e,n).then(s=>{i.sharedClientState.notifyBundleLoaded(s)})}class HI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ol(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return II(this.persistence,new bI,e.initialUser,this.It)}gc(e){return new _I(wu.Bs,this.It)}mc(e){return new CI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WI extends HI{constructor(e,n,i){super(),this.Ec=e,this.cacheSizeBytes=n,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ec.initialize(this,e),await mm(this.Ec.syncEngine),await ho(this.Ec.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}yc(e){return II(this.persistence,new bI,e.initialUser,this.It)}Ic(e,n){const i=this.persistence.referenceDelegate.garbageCollector;return new vM(i,e.asyncQueue,n)}Tc(e,n){const i=new ex(n,this.persistence);return new ZN(e.asyncQueue,i)}gc(e){const n=Jf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new Qf(this.synchronizeTabs,n,e.clientId,i,e.asyncQueue,OI(),Fl(),this.It,this.sharedClientState,!!this.forceOwnership)}mc(e){return new CI}}class kR extends WI{constructor(e,n){super(e,n,!1),this.Ec=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ec.syncEngine;this.sharedClientState instanceof lh&&(this.sharedClientState.syncEngine={Fr:IR.bind(null,n),$r:SR.bind(null,n),Br:DR.bind(null,n),vi:TR.bind(null,n),Or:bR.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async i=>{await ER(this.Ec.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}mc(e){const n=OI();if(!lh.C(n))throw new R(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=Jf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new lh(n,e.asyncQueue,i,e.clientId,e.initialUser)}}class pm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>rv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yR.bind(null,this.syncEngine),await ad(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nR}createDatastore(e){const n=ol(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new UM(s));var s;return function(r,o,a,l){return new qM(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>rv(this.syncEngine,a,0),o=tv.C()?new tv:new VM,new WM(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,l,c){const u=new cR(i,s,r,o,a,l);return c&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);L("RemoteStore","RemoteStore shutting down."),n._u.add(5),await uo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Ze("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.bc=e,this.It=n,this.metadata=new mt,this.buffer=new Uint8Array,this.Pc=new TextDecoder("utf-8"),this.vc().then(i=>{i&&i.ku()?this.metadata.resolve(i.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.payload)}`))},i=>this.metadata.reject(i))}close(){return this.bc.cancel()}async getMetadata(){return this.metadata.promise}async wc(){return await this.getMetadata(),this.vc()}async vc(){const e=await this.Vc();if(e===null)return null;const n=this.Pc.decode(e),i=Number(n);isNaN(i)&&this.Sc(`length string (${n}) is not valid number`);const s=await this.Dc(i);return new rR(JSON.parse(s),e.length+i)}Cc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Vc(){for(;this.Cc()<0&&!await this.xc(););if(this.buffer.length===0)return null;const e=this.Cc();e<0&&this.Sc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Dc(e){for(;this.buffer.length<e;)await this.xc()&&this.Sc("Reached the end of bundle when more is expected.");const n=this.Pc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Sc(e){throw this.bc.cancel(),new Error(`Invalid bundle format: ${e}`)}async xc(){const e=await this.bc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const r=H(i),o=xa(r.It)+"/documents",a={documents:s.map(h=>Na(r.It,h))},l=await r.fo("BatchGetDocuments",o,a,s.length),c=new Map;l.forEach(h=>{const d=Mx(r.It,h);c.set(d.key.toString(),d)});const u=[];return s.forEach(h=>{const d=c.get(h.toString());oe(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new co(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const s=j.fromPath(i);this.mutations.push(new jf(s,this.precondition(s)))}),await async function(n,i){const s=H(n),r=xa(s.It)+"/documents",o={writes:i.map(a=>Ma(s.It,a))};await s.co("Commit",r,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw z();n=se.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new R(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?He.exists(!1):He.updateTime(n):He.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new R(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return He.updateTime(n)}return He.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,i,s,r){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=s,this.deferred=r,this.Nc=i.maxAttempts,this.xo=new em(this.asyncQueue,"transaction_retry")}run(){this.Nc-=1,this.kc()}kc(){this.xo.Ao(async()=>{const e=new OR(this.datastore),n=this.Mc(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(s=>{this.Oc(s)}))}).catch(i=>{this.Oc(i)})})}Mc(e){try{const n=this.updateFunction(e);return!el(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Oc(e){this.Nc>0&&this.Fc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget(()=>(this.kc(),Promise.resolve()))):this.deferred.reject(e)}Fc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!Wb(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=wb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{L("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(L("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=mo(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function GI(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await EI(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function KI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await gm(t);L("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>nv(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>nv(e.remoteStore,r)),t.onlineComponents=e}async function gm(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await GI(t,new HI)),t.offlineComponents}async function Iu(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await KI(t,new pm)),t.onlineComponents}function zI(t){return gm(t).then(e=>e.persistence)}function vm(t){return gm(t).then(e=>e.localStore)}function YI(t){return Iu(t).then(e=>e.remoteStore)}function ym(t){return Iu(t).then(e=>e.syncEngine)}async function Yr(t){const e=await Iu(t),n=e.eventManager;return n.onListen=uR.bind(null,e.syncEngine),n.onUnlisten=hR.bind(null,e.syncEngine),n}function MR(t){return t.asyncQueue.enqueue(async()=>{const e=await zI(t),n=await YI(t);return e.setNetworkEnabled(!0),function(i){const s=H(i);return s._u.delete(0),al(s)}(n)})}function RR(t){return t.asyncQueue.enqueue(async()=>{const e=await zI(t),n=await YI(t);return e.setNetworkEnabled(!1),async function(i){const s=H(i);s._u.add(0),await uo(s),s.gu.set("Offline")}(n)})}function PR(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await function(a,l){const c=H(a);return c.persistence.runTransaction("read document","readonly",u=>c.localDocuments.getDocument(u,l))}(i,s);o.isFoundDocument()?r.resolve(o):o.isNoDocument()?r.resolve(null):r.reject(new R(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=mo(o,`Failed to get document '${s} from cache`);r.reject(a)}}(await vm(t),e,n)),n.promise}function QI(t,e,n={}){const i=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new bu({next:h=>{r.enqueueAndForget(()=>om(s,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new R(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new R(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new lm(ao(o.path),c,{includeMetadataChanges:!0,Nu:!0});return rm(s,u)}(await Yr(t),t.asyncQueue,e,n,i)),i.promise}function LR(t,e){const n=new mt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,r){try{const o=await fc(i,s,!0),a=new UI(s,o.Hi),l=a.ju(o.documents),c=a.applyChanges(l,!1);r.resolve(c.snapshot)}catch(o){const a=mo(o,`Failed to execute query '${s} against cache`);r.reject(a)}}(await vm(t),e,n)),n.promise}function JI(t,e,n={}){const i=new mt;return t.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new bu({next:h=>{r.enqueueAndForget(()=>om(s,u)),h.fromCache&&a.source==="server"?l.reject(new R(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new lm(o,c,{includeMetadataChanges:!0,Nu:!0});return rm(s,u)}(await Yr(t),t.asyncQueue,e,n,i)),i.promise}function VR(t,e){const n=new bu(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Ru.add(s),s.next()}(await Yr(t),n)),()=>{n.Rc(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){H(i).Ru.delete(s)}(await Yr(t),n))}}function FR(t,e,n){const i=new mt;return t.asyncQueue.enqueueAndForget(async()=>{const s=await function(r){return Iu(r).then(o=>o.datastore)}(t);new NR(t.asyncQueue,s,n,e,i).run()}),i.promise}function $R(t,e,n,i){const s=function(r,o){let a;return a=typeof r=="string"?new TextEncoder().encode(r):r,function(l,c){return new CR(l,c)}(function(l,c){if(l instanceof Uint8Array)return av(l,c);if(l instanceof ArrayBuffer)return av(new Uint8Array(l),c);if(l instanceof ReadableStream)return l.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,ol(e));t.asyncQueue.enqueueAndForget(async()=>{AR(await ym(t),s,i)})}function UR(t,e){return t.asyncQueue.enqueue(async()=>function(n,i){const s=H(n);return s.persistence.runTransaction("Get named query","readonly",r=>s.Ns.getNamedQuery(r,i))}(await vm(t),e))}const lv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e,n){if(!n)throw new R(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XI(t,e,n,i){if(e===!0&&i===!0)throw new R(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cv(t){if(!j.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uv(t){if(j.isDocumentKey(t))throw new R(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Eu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function Ae(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eu(t);throw new R(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZI(t,e){if(e<=0)throw new R(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,XI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BN;switch(n.type){case"gapi":const i=n.client;return new WN(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new R(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lv.get(e);n&&(L("ComponentProvider","Removing Datastore"),lv.delete(e),n.terminate())}(this),Promise.resolve()}}function BR(t,e,n,i={}){var s;const r=(t=Ae(t,ll))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&Ur("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ut.MOCK_USER;else{o=pD(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new R(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(l)}t._authCredentials=new jN(new yb(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class $t{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $t(this.firestore,e,this._query)}}class Wn extends $t{constructor(e,n,i){super(e,n,ao(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new j(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function xr(t,e,...n){if(t=te(t),wm("collection","path",e),t instanceof ll){const i=Ee.fromString(e,...n);return uv(i),new Wn(t,null,i)}{if(!(t instanceof Be||t instanceof Wn))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ee.fromString(e,...n));return uv(i),new Wn(t.firestore,null,i)}}function jR(t,e){if(t=Ae(t,ll),wm("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new $t(t,null,function(n){return new mi(Ee.emptyPath(),n)}(e))}function vc(t,e,...n){if(t=te(t),arguments.length===1&&(e=wb.R()),wm("doc","path",e),t instanceof ll){const i=Ee.fromString(e,...n);return cv(i),new Be(t,null,new j(i))}{if(!(t instanceof Be||t instanceof Wn))throw new R(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ee.fromString(e,...n));return cv(i),new Be(t.firestore,t instanceof Wn?t.converter:null,new j(i))}}function eE(t,e){return t=te(t),e=te(e),(t instanceof Be||t instanceof Wn)&&(e instanceof Be||e instanceof Wn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function tE(t,e){return t=te(t),e=te(e),t instanceof $t&&e instanceof $t&&t.firestore===e.firestore&&nl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new em(this,"async_queue_retry"),this.jc=()=>{const n=Fl();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Fl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Fl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new mt;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Zi(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(i=>{this.qc=i,this.Kc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw Ze("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Kc=!1,i))));return this.$c=n,n}enqueueAfterDelay(e,n,i){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const s=sm.createAndSchedule(this,e,n,i,r=>this.Jc(r));return this.Uc.push(s),s}Wc(){this.qc&&z()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function cd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class HR{constructor(){this._progressObserver={},this._taskCompletionResolver=new mt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,i){this._progressObserver={next:e,error:n,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=-1;class Je extends ll{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new qR,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nE(this),this._firestoreClient.terminate()}}function bt(t){return t._firestoreClient||nE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nE(t){var e;const n=t._freezeSettings(),i=function(s,r,o,a){return new ix(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xR(t._authCredentials,t._appCheckCredentials,t._queue,i)}function GR(t,e){sE(t=Ae(t,Je));const n=bt(t),i=t._freezeSettings(),s=new pm;return iE(n,s,new WI(s,i.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function KR(t){sE(t=Ae(t,Je));const e=bt(t),n=t._freezeSettings(),i=new pm;return iE(e,i,new kR(i,n.cacheSizeBytes))}function iE(t,e,n){const i=new mt;return t.asyncQueue.enqueue(async()=>{try{await GI(t,n),await KI(t,e),i.resolve()}catch(s){const r=s;if(!function(o){return o.name==="FirebaseError"?o.code===I.FAILED_PRECONDITION||o.code===I.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(r))throw r;Ur("Error enabling offline persistence. Falling back to persistence disabled: "+r),i.reject(r)}}).then(()=>i.promise)}function zR(t){if(t._initialized&&!t._terminated)throw new R(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new mt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!In.C())return Promise.resolve();const i=n+"main";await In.delete(i)}(Jf(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function YR(t){return function(e){const n=new mt;return e.asyncQueue.enqueueAndForget(async()=>gR(await ym(e),n)),n.promise}(bt(t=Ae(t,Je)))}function QR(t){return MR(bt(t=Ae(t,Je)))}function JR(t){return RR(bt(t=Ae(t,Je)))}function XR(t,e){const n=bt(t=Ae(t,Je)),i=new HR;return $R(n,t._databaseId,e,i),i}function ZR(t,e){return UR(bt(t=Ae(t,Je)),e).then(n=>n?new $t(t,null,n.query):null)}function sE(t){if(t._initialized||t._terminated)throw new R(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(at.fromBase64String(e))}catch(n){throw new R(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^__.*__$/;class tP{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}class rE{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new pi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class Su{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.It=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ea(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.sa({path:i,ra:!1});return s.oa(e),s}ua(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.sa({path:i,ra:!1});return s.ea(),s}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return yc(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(oE(this.na)&&eP.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class nP{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=i||ol(e)}fa(e,n,i,s=!1){return new Su({na:e,methodName:n,la:i,path:et.emptyPath(),ra:!1,ha:s},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function or(t){const e=t._freezeSettings(),n=ol(t._databaseId);return new nP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Du(t,e,n,i,s,r={}){const o=t.fa(r.merge||r.mergeFields?2:0,e,n,s);Em("Data must be an object, but it was:",o,i);const a=cE(i,o);let l,c;if(r.merge)l=new an(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=ud(e,h,n);if(!o.contains(d))throw new R(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hE(u,d)||u.push(d)}l=new an(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new tP(new St(a),l,c)}class cl extends rr{_toFieldTransform(e){if(e.na!==2)throw e.na===1?e.aa(`${this._methodName}() can only appear at the top level of your update data`):e.aa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cl}}function aE(t,e,n){return new Su({na:3,la:e.settings.la,methodName:t._methodName,ra:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class _m extends rr{_toFieldTransform(e){return new il(e.path,new qr)}isEqual(e){return e instanceof _m}}class iP extends rr{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=aE(this,e,!0),i=this.da.map(r=>ar(r,n)),s=new js(i);return new il(e.path,s)}isEqual(e){return this===e}}class sP extends rr{constructor(e,n){super(e),this.da=n}_toFieldTransform(e){const n=aE(this,e,!0),i=this.da.map(r=>ar(r,n)),s=new qs(i);return new il(e.path,s)}isEqual(e){return this===e}}class rP extends rr{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=new Hr(e.It,Fb(e.It,this._a));return new il(e.path,n)}isEqual(e){return this===e}}function bm(t,e,n,i){const s=t.fa(1,e,n);Em("Data must be an object, but it was:",s,i);const r=[],o=St.empty();sr(i,(l,c)=>{const u=Tm(e,l,n);c=te(c);const h=s.ua(u);if(c instanceof cl)r.push(u);else{const d=ar(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new an(r);return new rE(o,a,s.fieldTransforms)}function Im(t,e,n,i,s,r){const o=t.fa(1,e,n),a=[ud(e,i,n)],l=[s];if(r.length%2!=0)throw new R(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(ud(e,r[d])),l.push(r[d+1]);const c=[],u=St.empty();for(let d=a.length-1;d>=0;--d)if(!hE(c,a[d])){const f=a[d];let g=l[d];g=te(g);const _=o.ua(f);if(g instanceof cl)c.push(f);else{const S=ar(g,_);S!=null&&(c.push(f),u.set(f,S))}}const h=new an(c);return new rE(u,h,o.fieldTransforms)}function lE(t,e,n,i=!1){return ar(n,t.fa(i?4:3,e))}function ar(t,e){if(uE(t=te(t)))return Em("Unsupported field value:",e,t),cE(t,e);if(t instanceof rr)return function(n,i){if(!oE(i.na))throw i.aa(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.aa(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=ar(o,i.ca(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Fb(i.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=We.fromDate(n);return{timestampValue:Oa(i.It,s)}}if(n instanceof We){const s=new We(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Oa(i.It,s)}}if(n instanceof Tu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Qn)return{bytesValue:Xb(i.It,n._byteString)};if(n instanceof Be){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i.aa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qf(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.aa(`Unsupported field value: ${Eu(n)}`)}(t,e)}function cE(t,e){const n={};return Db(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(i,s)=>{const r=ar(s,e.ia(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function uE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Tu||t instanceof Qn||t instanceof Be||t instanceof rr)}function Em(t,e,n){if(!uE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Eu(n);throw i==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+i)}}function ud(t,e,n){if((e=te(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return Tm(t,e);throw yc("Field path arguments must be of type string or ",t,!1,void 0,n)}const oP=new RegExp("[~\\*/\\[\\]]");function Tm(t,e,n){if(e.search(oP)>=0)throw yc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wi(...e.split("."))._internalPath}catch{throw yc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yc(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new R(I.INVALID_ARGUMENT,a+t+l)}function hE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Au("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class aP extends Pa{data(){return super.data()}}function Au(t,e){return typeof e=="string"?Tm(t,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ui extends Pa{constructor(e,n,i,s,r,o){super(e,n,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Au("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class ta extends ui{data(e={}){return super.data(e)}}class Gi{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Es(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new ta(this._firestore,this._userDataWriter,i.key,i,new Es(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new ta(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Es(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ta(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Es(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:lP(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}function dE(t,e){return t instanceof ui&&e instanceof ui?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Gi&&e instanceof Gi&&t._firestore===e._firestore&&tE(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new R(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ul{}function Xn(t,...e){for(const n of e)t=n._apply(t);return t}class cP extends ul{constructor(e,n,i){super(),this.wa=e,this.ma=n,this.ga=i,this.type="where"}_apply(e){const n=or(e.firestore),i=function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new R(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){fv(u,c);const f=[];for(const g of u)f.push(dv(a,s,g));h={arrayValue:{values:f}}}else h=dv(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||fv(u,c),h=lE(o,r,u,c==="in"||c==="not-in");const d=Dt.create(l,c,h);return function(f,g){if(g.dt()){const S=$f(f);if(S!==null&&!S.isEqual(g.field))throw new R(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${S.toString()}' and '${g.field.toString()}'`);const x=Ff(f);x!==null&&wE(f,g.field,x)}const _=function(S,x){for(const G of S.filters)if(x.indexOf(G.op)>=0)return G.op;return null}(f,function(S){switch(S){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(_!==null)throw _===g.op?new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new R(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${_.toString()}' filters.`)}(s,d),d}(e._query,"where",n,e.firestore._databaseId,this.wa,this.ma,this.ga);return new $t(e.firestore,e.converter,function(s,r){const o=s.filters.concat([r]);return new mi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function mE(t,e,n){const i=e,s=Au("where",t);return new cP(s,i,n)}class uP extends ul{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(i,s,r){if(i.startAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new R(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Or(s,r);return function(a,l){if(Ff(a)===null){const c=$f(a);c!==null&&wE(a,c,l.field)}}(i,o),o}(e._query,this.wa,this.ya);return new $t(e.firestore,e.converter,function(i,s){const r=i.explicitOrderBy.concat([s]);return new mi(i.path,i.collectionGroup,r,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hP(t,e="asc"){const n=e,i=Au("orderBy",t);return new uP(i,n)}class pE extends ul{constructor(e,n,i){super(),this.type=e,this.pa=n,this.Ia=i}_apply(e){return new $t(e.firestore,e.converter,uc(e._query,this.pa,this.Ia))}}function dP(t){return ZI("limit",t),new pE("limit",t,"F")}function fP(t){return ZI("limitToLast",t),new pE("limitToLast",t,"L")}class gE extends ul{constructor(e,n,i){super(),this.type=e,this.Ta=n,this.Ea=i}_apply(e){const n=yE(e,this.type,this.Ta,this.Ea);return new $t(e.firestore,e.converter,function(i,s){return new mi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function mP(...t){return new gE("startAt",t,!0)}function pP(...t){return new gE("startAfter",t,!1)}class vE extends ul{constructor(e,n,i){super(),this.type=e,this.Ta=n,this.Ea=i}_apply(e){const n=yE(e,this.type,this.Ta,this.Ea);return new $t(e.firestore,e.converter,function(i,s){return new mi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function gP(...t){return new vE("endBefore",t,!1)}function vP(...t){return new vE("endAt",t,!0)}function yE(t,e,n,i){if(n[0]=te(n[0]),n[0]instanceof Pa)return function(s,r,o,a,l){if(!a)throw new R(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const u of jr(s))if(u.field.isKeyField())c.push(Us(r,a.key));else{const h=a.data.field(u.field);if(Vf(h))throw new R(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(h)}return new qi(c,l)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const s=or(t.firestore);return function(r,o,a,l,c,u){const h=r.explicitOrderBy;if(c.length>h.length)throw new R(I.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<c.length;f++){const g=c[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new R(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof g}`);if(!Uf(r)&&g.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${g}' contains a slash.`);const _=r.path.child(Ee.fromString(g));if(!j.isDocumentKey(_))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${_}' is not because it contains an odd number of segments.`);const S=new j(_);d.push(Us(o,S))}else{const _=lE(a,l,g);d.push(_)}}return new qi(d,u)}(t._query,t.firestore._databaseId,s,e,n,i)}}function dv(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new R(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uf(e)&&n.indexOf("/")!==-1)throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(Ee.fromString(n));if(!j.isDocumentKey(i))throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Us(t,new j(i))}if(n instanceof Be)return Us(t,n._key);throw new R(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eu(n)}.`)}function fv(t,e){if(!Array.isArray(t)||t.length===0)throw new R(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function wE(t,e,n){if(!n.isEqual(e))throw new R(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{convertValue(e,n="none"){switch($s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const i={};return sr(e.fields,(s,r)=>{i[s]=this.convertValue(r,n)}),i}convertGeoPoint(e){return new Tu(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ab(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const n=Ui(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ee.fromString(e);oe(aI(i));const s=new Bi(i.get(1),i.get(3)),r=new j(i.popFirst(5));return s.isEqual(n)||Ze(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class wP extends Sm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=or(e)}set(e,n,i){this._verifyNotCommitted();const s=Di(e,this._firestore),r=ku(s.converter,n,i),o=Du(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,He.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const r=Di(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof Wi?Im(this._dataReader,"WriteBatch.update",r._key,n,i,s):bm(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(o.toMutation(r._key,He.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Di(e,this._firestore);return this._mutations=this._mutations.concat(new co(n._key,He.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Di(t,e){if((t=te(t)).firestore!==e)throw new R(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){t=Ae(t,Be);const e=Ae(t.firestore,Je);return QI(bt(e),t._key).then(n=>Dm(e,t,n))}class lr extends Sm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,n)}}function IP(t){t=Ae(t,Be);const e=Ae(t.firestore,Je),n=bt(e),i=new lr(e);return PR(n,t._key).then(s=>new ui(e,i,t._key,s,new Es(s!==null&&s.hasLocalMutations,!0),t.converter))}function EP(t){t=Ae(t,Be);const e=Ae(t.firestore,Je);return QI(bt(e),t._key,{source:"server"}).then(n=>Dm(e,t,n))}function wc(t){t=Ae(t,$t);const e=Ae(t.firestore,Je),n=bt(e),i=new lr(e);return fE(t._query),JI(n,t._query).then(s=>new Gi(e,i,t,s))}function TP(t){t=Ae(t,$t);const e=Ae(t.firestore,Je),n=bt(e),i=new lr(e);return LR(n,t._query).then(s=>new Gi(e,i,t,s))}function SP(t){t=Ae(t,$t);const e=Ae(t.firestore,Je),n=bt(e),i=new lr(e);return JI(n,t._query,{source:"server"}).then(s=>new Gi(e,i,t,s))}function mv(t,e,n){t=Ae(t,Be);const i=Ae(t.firestore,Je),s=ku(t.converter,e,n);return hl(i,[Du(or(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,He.none())])}function pv(t,e,n,...i){t=Ae(t,Be);const s=Ae(t.firestore,Je),r=or(s);let o;return o=typeof(e=te(e))=="string"||e instanceof Wi?Im(r,"updateDoc",t._key,e,n,i):bm(r,"updateDoc",t._key,e),hl(s,[o.toMutation(t._key,He.exists(!0))])}function DP(t){return hl(Ae(t.firestore,Je),[new co(t._key,He.none())])}function _E(t,e){const n=Ae(t.firestore,Je),i=vc(t),s=ku(t.converter,e);return hl(n,[Du(or(t.firestore),"addDoc",i._key,s,t.converter!==null,{}).toMutation(i._key,He.exists(!1))]).then(()=>i)}function bE(t,...e){var n,i,s;t=te(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||cd(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(cd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof Be)c=Ae(t.firestore,Je),u=ao(t._key.path),l={next:h=>{e[o]&&e[o](Dm(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ae(t,$t);c=Ae(h.firestore,Je),u=h._query;const d=new lr(c);l={next:f=>{e[o]&&e[o](new Gi(c,d,h,f))},error:e[o+1],complete:e[o+2]},fE(t._query)}return function(h,d,f,g){const _=new bu(g),S=new lm(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>rm(await Yr(h),S)),()=>{_.Rc(),h.asyncQueue.enqueueAndForget(async()=>om(await Yr(h),S))}}(bt(c),u,a,l)}function AP(t,e){return VR(bt(t=Ae(t,Je)),cd(e)?e:{next:e})}function hl(t,e){return function(n,i){const s=new mt;return n.asyncQueue.enqueueAndForget(async()=>dR(await ym(n),i,s)),s.promise}(bt(t),e)}function Dm(t,e,n){const i=n.docs.get(e._key),s=new lr(t);return new ui(t,s,e._key,i,new Es(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=or(e)}get(e){const n=Di(e,this._firestore),i=new wP(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return z();const r=s[0];if(r.isFoundDocument())return new Pa(this._firestore,i,r.key,r,n.converter);if(r.isNoDocument())return new Pa(this._firestore,i,n._key,null,n.converter);throw z()})}set(e,n,i){const s=Di(e,this._firestore),r=ku(s.converter,n,i),o=Du(this._dataReader,"Transaction.set",s._key,r,s.converter!==null,i);return this._transaction.set(s._key,o),this}update(e,n,i,...s){const r=Di(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof Wi?Im(this._dataReader,"Transaction.update",r._key,n,i,s):bm(this._dataReader,"Transaction.update",r._key,n),this._transaction.update(r._key,o),this}delete(e){const n=Di(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Di(e,this._firestore),i=new lr(this._firestore);return super.get(e).then(s=>new ui(this._firestore,i,n._key,s._document,new Es(!1,!1),n.converter))}}function CP(t,e,n){t=Ae(t,Je);const i=Object.assign(Object.assign({},yP),n);return function(s){if(s.maxAttempts<1)throw new R(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),FR(bt(t),s=>e(new kP(t,s)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){return new cl("deleteField")}function NP(){return new _m("serverTimestamp")}function xP(...t){return new iP("arrayUnion",t)}function MP(...t){return new sP("arrayRemove",t)}function RP(t){return new rP("increment",t)}(function(t,e=!0){(function(n){oo=n})(tr),Vi(new Kn("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Je(new qN(n.getProvider("auth-internal")),new KN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(a.options.projectId,l)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Tn(dg,"3.5.0",t),Tn(dg,"3.5.0","esm2017")})();const PP="@firebase/firestore-compat",LP="0.1.25";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(){if(typeof Uint8Array>"u")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function vv(){if(!tx())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class La{constructor(e){this._delegate=e}static fromBase64String(e){return vv(),new La(Qn.fromBase64String(e))}static fromUint8Array(e){return gv(),new La(Qn.fromUint8Array(e))}toBase64(){return vv(),this._delegate.toBase64()}toUint8Array(){return gv(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(t){return VP(t,["next","error","complete"])}function VP(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{enableIndexedDbPersistence(e,n){return GR(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return KR(e._delegate)}clearIndexedDbPersistence(e){return zR(e._delegate)}}class IE{constructor(e,n,i){this._delegate=n,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Bi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ur("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,i={}){BR(this._delegate,e,n,i)}enableNetwork(){return QR(this._delegate)}disableNetwork(){return JR(this._delegate)}enablePersistence(e){let n=!1,i=!1;return e&&(n=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,XI("synchronizeTabs",n,"experimentalForceOwningTab",i)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return YR(this._delegate)}onSnapshotsInSync(e){return AP(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qr(this,xr(this._delegate,e))}catch(n){throw qt(n,"collection()","Firestore.collection()")}}doc(e){try{return new fn(this,vc(this._delegate,e))}catch(n){throw qt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new jt(this,jR(this._delegate,e))}catch(n){throw qt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return CP(this._delegate,n=>e(new EE(this,n)))}batch(){return bt(this._delegate),new TE(new _P(this._delegate,e=>hl(this._delegate,e)))}loadBundle(e){return XR(this._delegate,e)}namedQuery(e){return ZR(this._delegate,e).then(n=>n?new jt(this,n):null)}}class Cu extends Sm{constructor(e){super(),this.firestore=e}convertBytes(e){return new La(new Qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return fn.forKey(n,this.firestore,null)}}function $P(t){$N(t)}class EE{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Cu(e)}get(e){const n=Ts(e);return this._delegate.get(n).then(i=>new Va(this._firestore,new ui(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,n.converter)))}set(e,n,i){const s=Ts(e);return i?(Am("Transaction.set",i),this._delegate.set(s,n,i)):this._delegate.set(s,n),this}update(e,n,i,...s){const r=Ts(e);return arguments.length===2?this._delegate.update(r,n):this._delegate.update(r,n,i,...s),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}}class TE{constructor(e){this._delegate=e}set(e,n,i){const s=Ts(e);return i?(Am("WriteBatch.set",i),this._delegate.set(s,n,i)):this._delegate.set(s,n),this}update(e,n,i,...s){const r=Ts(e);return arguments.length===2?this._delegate.update(r,n):this._delegate.update(r,n,i,...s),this}delete(e){const n=Ts(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Ks{constructor(e,n,i){this._firestore=e,this._userDataWriter=n,this._delegate=i}fromFirestore(e,n){const i=new ta(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Fa(this._firestore,i),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const i=Ks.INSTANCES;let s=i.get(e);s||(s=new WeakMap,i.set(e,s));let r=s.get(n);return r||(r=new Ks(e,new Cu(e),n),s.set(n,r)),r}}Ks.INSTANCES=new WeakMap;class fn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Cu(e)}static forPath(e,n,i){if(e.length%2!==0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new fn(n,new Be(n._delegate,i,new j(e)))}static forKey(e,n,i){return new fn(n,new Be(n._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new Qr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qr(this.firestore,xr(this._delegate,e))}catch(n){throw qt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof Be?eE(this._delegate,e):!1}set(e,n){n=Am("DocumentReference.set",n);try{return n?mv(this._delegate,e,n):mv(this._delegate,e)}catch(i){throw qt(i,"setDoc()","DocumentReference.set()")}}update(e,n,...i){try{return arguments.length===1?pv(this._delegate,e):pv(this._delegate,e,n,...i)}catch(s){throw qt(s,"updateDoc()","DocumentReference.update()")}}delete(){return DP(this._delegate)}onSnapshot(...e){const n=SE(e),i=DE(e,s=>new Va(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return bE(this._delegate,n,i)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=IP(this._delegate):(e==null?void 0:e.source)==="server"?n=EP(this._delegate):n=bP(this._delegate),n.then(i=>new Va(this.firestore,new ui(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new fn(this.firestore,e?this._delegate.withConverter(Ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function qt(t,e,n){return t.message=t.message.replace(e,n),t}function SE(t){for(const e of t)if(typeof e=="object"&&!hd(e))return e;return{}}function DE(t,e){var n,i;let s;return hd(t[0])?s=t[0]:hd(t[1])?s=t[1]:typeof t[0]=="function"?s={next:t[0],error:t[1],complete:t[2]}:s={next:t[1],error:t[2],complete:t[3]},{next:r=>{s.next&&s.next(e(r))},error:(n=s.error)===null||n===void 0?void 0:n.bind(s),complete:(i=s.complete)===null||i===void 0?void 0:i.bind(s)}}class Va{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new fn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return dE(this._delegate,e._delegate)}}class Fa extends Va{data(e){const n=this._delegate.data(e);return UN(n!==void 0),n}}class jt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Cu(e)}where(e,n,i){try{return new jt(this.firestore,Xn(this._delegate,mE(e,n,i)))}catch(s){throw qt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new jt(this.firestore,Xn(this._delegate,hP(e,n)))}catch(i){throw qt(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new jt(this.firestore,Xn(this._delegate,dP(e)))}catch(n){throw qt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new jt(this.firestore,Xn(this._delegate,fP(e)))}catch(n){throw qt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new jt(this.firestore,Xn(this._delegate,mP(...e)))}catch(n){throw qt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new jt(this.firestore,Xn(this._delegate,pP(...e)))}catch(n){throw qt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new jt(this.firestore,Xn(this._delegate,gP(...e)))}catch(n){throw qt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new jt(this.firestore,Xn(this._delegate,vP(...e)))}catch(n){throw qt(n,"endAt()","Query.endAt()")}}isEqual(e){return tE(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=TP(this._delegate):(e==null?void 0:e.source)==="server"?n=SP(this._delegate):n=wc(this._delegate),n.then(i=>new dd(this.firestore,new Gi(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const n=SE(e),i=DE(e,s=>new dd(this.firestore,new Gi(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return bE(this._delegate,n,i)}withConverter(e){return new jt(this.firestore,e?this._delegate.withConverter(Ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class UP{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Fa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class dd{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new jt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Fa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new UP(this._firestore,n))}forEach(e,n){this._delegate.forEach(i=>{e.call(n,new Fa(this._firestore,i))})}isEqual(e){return dE(this._delegate,e._delegate)}}class Qr extends jt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new fn(this.firestore,e):null}doc(e){try{return e===void 0?new fn(this.firestore,vc(this._delegate)):new fn(this.firestore,vc(this._delegate,e))}catch(n){throw qt(n,"doc()","CollectionReference.doc()")}}add(e){return _E(this._delegate,e).then(n=>new fn(this.firestore,n))}isEqual(e){return eE(this._delegate,e._delegate)}withConverter(e){return new Qr(this.firestore,e?this._delegate.withConverter(Ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ts(t){return Ae(t,Be)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(...e){this._delegate=new Wi(...e)}static documentId(){return new km(et.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof Wi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._delegate=e}static serverTimestamp(){const e=NP();return e._methodName="FieldValue.serverTimestamp",new ys(e)}static delete(){const e=OP();return e._methodName="FieldValue.delete",new ys(e)}static arrayUnion(...e){const n=xP(...e);return n._methodName="FieldValue.arrayUnion",new ys(n)}static arrayRemove(...e){const n=MP(...e);return n._methodName="FieldValue.arrayRemove",new ys(n)}static increment(e){const n=RP(e);return n._methodName="FieldValue.increment",new ys(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP={Firestore:IE,GeoPoint:Tu,Timestamp:We,Blob:La,Transaction:EE,WriteBatch:TE,DocumentReference:fn,DocumentSnapshot:Va,Query:jt,QueryDocumentSnapshot:Fa,QuerySnapshot:dd,CollectionReference:Qr,FieldPath:km,FieldValue:ys,setLogLevel:$P,CACHE_SIZE_UNLIMITED:WR};function jP(t,e){t.INTERNAL.registerComponent(new Kn("firestore-compat",n=>{const i=n.getProvider("app-compat").getImmediate(),s=n.getProvider("firestore").getImmediate();return e(i,s)},"PUBLIC").setServiceProps(Object.assign({},BP)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){jP(t,(e,n)=>new IE(e,n,new FP)),t.registerVersion(PP,LP)}qP(zi);const HP={apiKey:"AIzaSyAYe2WPx-gq70RKSkTjHrOqySSyydHJbGM",authDomain:"calendar-5c731.firebaseapp.com",projectId:"calendar-5c731",storageBucket:"calendar-5c731.appspot.com",messagingSenderId:"494783663095",appId:"1:494783663095:web:ead547d5187a0226a13cf2"};zi.initializeApp(HP);const na=zi.auth(),Mi=zi.firestore(),WP=Mi.collection("users");Mi.collection("teams");Mi.collection("games");const zs=Vc("user",{state:()=>({userLoggedIn:!1}),actions:{async register(t){console.log(t);const e=await na.createUserWithEmailAndPassword(t.email,t.password);await WP.doc(e.user.uid).set({name:t.name,email:t.email,age:t.age,country:t.country}),await e.user.updateProfile({displayName:t.name}),this.userLoggedIn=!0},async authenticate(t){await na.signInWithEmailAndPassword(t.email,t.password),this.userLoggedIn=!0},async signOut(){await na.signOut(),this.userLoggedIn=!1}}}),_c=Vc("modal",{state:()=>({isOpen:!1}),getters:{hiddenClass(t){return t.isOpen?"":"hidden"}}}),vi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},GP={data(){return{openMenu:!1}},computed:{...$d(zs,["userLoggedIn"]),...Ly(_c,zs)},methods:{toggleMenu(){this.openMenu=!this.openMenu},toggleAuthModal(){this.modalStore.isOpen=!this.modalStore.isOpen}}},KP={class:"container"};function zP(t,e,n,i,s,r){return C(),V("div",KP,[A("div",{class:Oe(["menu-toggle",{open:s.openMenu}]),onClick:e[0]||(e[0]=(...o)=>r.toggleMenu&&r.toggleMenu(...o))},[A("span",{class:Oe(["fa fas",{"fa-xmark fa-solid":s.openMenu,"fa-bars":!s.openMenu}])},null,2)],2),A("div",{class:Oe(["menu-line",{open:s.openMenu}])},[A("div",{class:"btn-app",onClick:e[2]||(e[2]=ht((...o)=>r.toggleMenu&&r.toggleMenu(...o),["prevent"]))},[A("div",{class:"",onClick:e[1]||(e[1]=ht(o=>t.$emit("toggleAuth",o),["prevent"]))}," Login / Register")]),A("div",{class:"btn-app",onClick:e[4]||(e[4]=ht((...o)=>r.toggleMenu&&r.toggleMenu(...o),["prevent"]))},[A("div",{class:"",onClick:e[3]||(e[3]=ht(o=>t.$emit("addNewTeam",o),["prevent"]))}," Add New Team")]),A("div",{class:"btn-app",onClick:e[6]||(e[6]=ht((...o)=>r.toggleMenu&&r.toggleMenu(...o),["prevent"]))},[A("div",{class:"",onClick:e[5]||(e[5]=ht(o=>t.$emit("addNewGame",o),["prevent"]))}," Add New Game")])],2)])}const YP=vi(GP,[["render",zP]]),fd=Vc("team",{state:()=>({teams:[]}),actions:{async getTeams(){return(await wc(xr(Mi,"teams"))).forEach(e=>{this.teams.find(i=>i.name===e.data().name)||this.teams.push({...e.data(),abbr:e.id})}),this.teams},async addTeam(t){Mi.collection("teams").doc(t.name).set({name:t.nameLong,city:t.city,league:t.league}).then(()=>{console.log("Document successfully written!")}).catch(e=>{console.error("Error writing document: ",e)})}}}),QP={setup(){return{teamStore:fd()}},name:"AddTeamForm",data(){return{addTeamSchema:{name:"required|min:3|max:4",nameLong:"required|min:3|max:100",league:"required|min:2|max:5|alpha_spaces",city:"required|min:3|max:100|alpha_spaces"},addTeam_in_submission:!1,addTeam_show_alert:!1,addTeam_alert_variant:"bg-blue-500",addTeam_alert_msg:"Please wait! We are logging you in."}},methods:{check(t){t.target.value?t.target.classList.add("notEmptyInput"):t.target.classList.remove("notEmptyInput")},...Fd(fd,["addTeam"]),async submitAddTeam(t,{resetForm:e}){this.addTeam_show_alert=!0,this.addTeam_in_submission=!0,this.addTeam_alert_variant="bg-blue-500 dark:bg-blue-700",this.addTeam_alert_msg="Please wait! Submitting team information ..";try{await this.teamStore.addTeam(t)}catch(n){console.log(n),this.addTeam_in_submission=!1,this.addTeam_alert_variant="bg-red-500 dark:bg-red-700",this.addTeam_alert_msg="Something went wrong.";return}this.addTeam_alert_variant="bg-green-500 dark:bg-green-700",this.addTeam_alert_msg="Success! Team added to database.",this.addTeam_in_submission=!0,e(),this.addTeam_in_submission=!1}}},JP={class:"modal"},XP={class:"login-top"},ZP=A("h2",null,"Add New Team",-1),eL={class:"input"},tL=A("label",{class:"input-label"},"Name, abbreviated",-1),nL={class:"input"},iL=A("label",{class:"input-label"},"Name, long",-1),sL={class:"input"},rL=A("option",{value:"",disabled:""},null,-1),oL=A("option",{value:"SHL"},"SHL",-1),aL=A("option",{value:"CHL"},"CHL",-1),lL=A("option",{value:"other"},"Other",-1),cL=A("option",{value:"HA"},"HA",-1),uL=A("label",{class:"input-label"},"League",-1),hL={class:"input"},dL=A("label",{class:"input-label"},"City",-1),fL=["disabled"],mL={key:0},pL={key:1},gL=A("i",{class:"fas fa-duotone fa-spinner animate-spin-slow mr-2"},null,-1),vL=Tt(" Submitting team ..."),yL=[gL,vL];function wL(t,e,n,i,s,r){const o=xe("ErrorMessage"),a=xe("vee-field"),l=xe("vee-form");return C(),V("div",JP,[A("div",XP,[ZP,A("div",null,[A("i",{class:"fas fa-times",onClick:e[0]||(e[0]=ht(c=>t.$emit("closeTeam",c),["prevent"]))})])]),ee(l,{onSubmit:r.submitAddTeam,"validation-schema":s.addTeamSchema},{default:Ie(()=>[s.addTeam_show_alert?(C(),V("div",{key:0,class:Oe(s.addTeam_alert_variant)},pe(s.addTeam_alert_msg),3)):re("",!0),A("div",eL,[ee(o,{name:"name",class:"error"}),ee(a,{type:"name",name:"name",class:"input-field",onInput:r.check},null,8,["onInput"]),tL]),A("div",nL,[ee(o,{name:"nameLong",class:"error"}),ee(a,{type:"nameLong",name:"nameLong",class:"input-field",onInput:r.check},null,8,["onInput"]),iL]),A("div",sL,[ee(o,{name:"league",class:"error"}),ee(a,{name:"league",class:"input-field",onInput:r.check,as:"select"},{default:Ie(()=>[rL,oL,aL,lL,cL]),_:1},8,["onInput"]),uL]),A("div",hL,[ee(o,{name:"city",class:"error"}),ee(a,{type:"city",name:"city",class:"input-field",onInput:r.check},null,8,["onInput"]),dL]),A("button",{type:"submit",disabled:s.addTeam_in_submission},[s.addTeam_in_submission?(C(),V("span",pL,yL)):(C(),V("span",mL,"Add New Team"))],8,fL)]),_:1},8,["onSubmit","validation-schema"])])}const _L=vi(QP,[["render",wL]]),bc=Vc("game",{state:()=>({games:null}),getters:{getGameByDate:t=>e=>t.games.filter(n=>n.date===e)},actions:{async addGame(t){const e=await _E(xr(Mi,"games"),{date:t.date,league:t.league,nameAway:t.nameAway,nameHome:t.nameHome,time:t.time});console.log("Document written with ID: ",e.id)},async updateGame(){},async getAllGames(){return this.$reset(),this.games=new Array,this.games.pop(),(await wc(xr(Mi,"games"))).forEach(e=>{this.games.push(e.data())}),this.games},async getGamesByDate(t){const e=Xn(xr(Mi,"games"),mE("date","==",t));(await wc(e)).forEach(i=>{console.log(i.id," => ",i.data())})}}}),bL={setup(){const t=bc(),e=[];return{gameStore:t,getGameByDate:t.getGameByDate,games:e}},name:"SelectedDay",data(){return{gamesToday:[]}},props:{day:Date},methods:{},created(){const t=this.formattedDate;this.gameStore.getGameByDate(t).forEach(n=>this.games.push({nameHome:n.nameHome,nameAway:n.nameAway,league:n.league,time:n.time,date:n.date}))},beforeUpdate(){this.games=[];const t=this.formattedDate;this.gameStore.getGameByDate(t).forEach(n=>this.games.push({nameHome:n.nameHome,nameAway:n.nameAway,league:n.league,time:n.time,date:n.date}))},computed:{...Vy(bc,["games"]),date(){const t={weekday:"long",year:"numeric",month:"long",day:"numeric"};return this.day.toLocaleDateString("en-GB",t)},formattedDate(){let t=this.day.getDate(),e=this.day.getMonth()+1,n=this.day.getFullYear();return e<10&&(e="0"+e),t<10&&(t="0"+t),n+"-"+e+"-"+t}}},IL={key:0},EL={class:"time"},TL={class:"league"},SL={class:"team"},DL=A("span",{class:"vs"},"vs",-1),AL={class:"team"},kL={key:1,class:"game"};function CL(t,e,n,i,s,r){return C(),V(De,null,[A("h2",{onClick:e[0]||(e[0]=ht(o=>t.getGamesByDate(r.date),["prevent"]))},pe(r.date),1),this.games.length>0?(C(),V("div",IL,[(C(!0),V(De,null,Lt(i.games,(o,a,l)=>(C(),V("div",{key:l,class:"game"},[A("h3",EL,pe(o.time),1),A("span",TL,pe(o.league),1),A("span",SL,pe(o.nameHome),1),DL,A("span",AL,pe(o.nameAway),1)]))),128))])):(C(),V("div",kL,"Sorry, no games on this date. \u{1F622}"))],64)}const OL=vi(bL,[["render",CL]]),NL={setup(){const t=bc(),e=fd();return{gameStore:t,teamStore:e}},name:"AddEventForm",data(){return{teams:[],addEventSchema:{nameHome:"required",nameAway:"required",league:"required|min:2|max:5|alpha_spaces",time:"required",date:"required"},addEvent_in_submission:!1,addEvent_show_alert:!1,addEvent_alert_variant:"bg-blue-500",addEvent_alert_msg:"Please wait! We are logging you in."}},beforeCreate:async function(){},created:async function(){(await this.teamStore.getTeams()).forEach(e=>{this.teams.push(e)})},methods:{async getTeams(){this.teamStore.getTeams(),console.log(this.teamStore.teams)},check(t){t.target.value?t.target.classList.add("notEmptyInput"):t.target.classList.remove("notEmptyInput")},async submitAddEvent(t,{resetForm:e}){console.log(t),this.addEvent_show_alert=!0,this.addEvent_in_submission=!0,this.addEvent_alert_variant="bg-blue-500 dark:bg-blue-700",this.addEvent_alert_msg="Please wait! Submitting team information ..";try{await this.gameStore.addGame(t)}catch(n){console.log(n),this.addEvent_in_submission=!1,this.addEvent_alert_variant="bg-red-500 dark:bg-red-700",this.addEvent_alert_msg="Something went wrong.";return}this.addEvent_alert_variant="bg-green-500 dark:bg-green-700",this.addEvent_alert_msg="Success! Team added to database.",this.addEvent_in_submission=!0,e(),this.addEvent_in_submission=!1}}},xL={class:"modal"},ML={class:"login-top"},RL={class:"input"},PL=A("option",{value:"",disabled:""},null,-1),LL=["value"],VL=A("label",{class:"input-label"},"Home Team",-1),FL={class:"input"},$L=A("option",{value:"",disabled:""},null,-1),UL=["value"],BL=A("label",{class:"input-label"},"Away Team ",-1),jL={class:"input"},qL=A("option",{value:"",disabled:""},null,-1),HL=A("option",{value:"SHL"},"SHL",-1),WL=A("option",{value:"CHL"},"CHL",-1),GL=A("option",{value:"other"},"Other",-1),KL=A("option",{value:"HA"},"HA",-1),zL=A("label",{class:"input-label"},"League ",-1),YL={class:"input"},QL={class:"dateTime"},JL=A("label",{class:"input-label"},"Time ",-1),XL={class:"dateTime"},ZL=A("label",{class:"input-label"},"Date ",-1),eV=["disabled"],tV={key:0},nV={key:1},iV=A("i",{class:"fas fa-duotone fa-spinner animate-spin-slow mr-2"},null,-1),sV=Tt(" Submitting team ..."),rV=[iV,sV];function oV(t,e,n,i,s,r){const o=xe("ErrorMessage"),a=xe("vee-field"),l=xe("vee-form");return C(),V("div",xL,[A("div",ML,[A("h2",{onClick:e[0]||(e[0]=ht((...c)=>r.getTeams&&r.getTeams(...c),["prevent"]))},"Add New Game"),A("div",null,[A("i",{class:"fas fa-times",onClick:e[1]||(e[1]=ht(c=>t.$emit("closeGame",c),["prevent"]))})])]),ee(l,{onSubmit:r.submitAddEvent,"validation-schema":s.addEventSchema},{default:Ie(()=>[s.addEvent_show_alert?(C(),V("div",{key:0,class:Oe(s.addEvent_alert_variant)},pe(s.addEvent_alert_msg),3)):re("",!0),A("div",RL,[ee(o,{name:"nameHome",class:"error"}),ee(a,{name:"nameHome",class:"input-field",onInput:r.check,as:"select"},{default:Ie(()=>[PL,(C(!0),V(De,null,Lt(this.teams,c=>(C(),V("option",{key:c.abbr,value:c.abbr},pe(c.abbr),9,LL))),128))]),_:1},8,["onInput"]),VL]),A("div",FL,[ee(o,{name:"nameAway",class:"error"}),ee(a,{name:"nameAway",class:"input-field",onInput:r.check,as:"select"},{default:Ie(()=>[$L,(C(!0),V(De,null,Lt(this.teams,c=>(C(),V("option",{key:c.abbr,value:c.abbr},pe(c.abbr),9,UL))),128))]),_:1},8,["onInput"]),BL]),A("div",jL,[ee(o,{name:"league",class:"error"}),ee(a,{name:"league",class:"input-field",onInput:r.check,as:"select"},{default:Ie(()=>[qL,HL,WL,GL,KL]),_:1},8,["onInput"]),zL]),A("div",YL,[A("div",QL,[ee(o,{name:"time",class:"error"}),JL,ee(a,{type:"time",name:"time",class:"input-field",onInput:r.check},null,8,["onInput"])]),A("div",XL,[ee(o,{name:"date",class:"error"}),ZL,ee(a,{type:"date",name:"date",class:"input-field",onInput:r.check},null,8,["onInput"])])]),A("button",{type:"submit",disabled:s.addEvent_in_submission},[s.addEvent_in_submission?(C(),V("span",nV,rV)):(C(),V("span",tV,"Add New Game"))],8,eV)]),_:1},8,["onSubmit","validation-schema"])])}const aV=vi(NL,[["render",oV]]),lV="modulepreload",cV=function(t){return"/"+t},yv={},ue=function(e,n,i){return!n||n.length===0?e():Promise.all(n.map(s=>{if(s=cV(s),s in yv)return;yv[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":lV,r||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),r)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};var uV=Object.defineProperty,hV=(t,e,n)=>e in t?uV(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ti=(t,e,n)=>(hV(t,typeof e!="symbol"?e+"":e,n),n);/**
  * vue-cal v4.8.0
  * (c) 2022 Antoni Andre <antoniandre.web@gmail.com>
  * @license MIT
  */let Co,wv,_v,dn,Oo={},gr={};class dV{constructor(e){ti(this,"_vuecal",null),ti(this,"selectCell",(n=!1,i,s)=>{this._vuecal.$emit("cell-click",s?{date:i,split:s}:i),this._vuecal.clickToNavigate||n?this._vuecal.switchToNarrowerView():this._vuecal.dblclickToNavigate&&"ontouchstart"in window&&(this._vuecal.domEvents.dblTapACell.taps++,setTimeout(()=>this._vuecal.domEvents.dblTapACell.taps=0,this._vuecal.domEvents.dblTapACell.timeout),this._vuecal.domEvents.dblTapACell.taps>=2&&(this._vuecal.domEvents.dblTapACell.taps=0,this._vuecal.switchToNarrowerView(),this._vuecal.$emit("cell-dblclick",s?{date:i,split:s}:i)))}),ti(this,"keyPressEnterCell",(n,i)=>{this._vuecal.$emit("cell-keypress-enter",i?{date:n,split:i}:n),this._vuecal.switchToNarrowerView()}),ti(this,"getPosition",n=>{const{left:i,top:s}=this._vuecal.cellsEl.getBoundingClientRect(),{clientX:r,clientY:o}="ontouchstart"in window&&n.touches?n.touches[0]:n;return{x:r-i,y:o-s}}),ti(this,"minutesAtCursor",n=>{let i=0,s={x:0,y:0};const{timeStep:r,timeCellHeight:o,timeFrom:a}=this._vuecal.$props;return typeof n=="number"?i=n:typeof n=="object"&&(s=this.getPosition(n),i=Math.round(s.y*r/parseInt(o)+a)),{minutes:Math.max(Math.min(i,1440),0),cursorCoords:s}}),this._vuecal=e}}let Ge,Ke,ch;class fV{constructor(e,n){ti(this,"_vuecal",null),ti(this,"eventDefaults",{_eid:null,start:"",startTimeMinutes:0,end:"",endTimeMinutes:0,title:"",content:"",background:!1,allDay:!1,segments:null,repeat:null,daysCount:1,deletable:!0,deleting:!1,titleEditable:!0,resizable:!0,resizing:!1,draggable:!0,dragging:!1,draggingStatic:!1,focused:!1,class:""}),this._vuecal=e,Ge=n}createAnEvent(e,n,i){if(typeof e=="string"&&(e=Ge.stringToDate(e)),!(e instanceof Date))return!1;const s=Ge.dateToMinutes(e),r=s+(n=1*n||120),o=Ge.addMinutes(new Date(e),n);i.end&&(typeof i.end=="string"&&(i.end=Ge.stringToDate(i.end)),i.endTimeMinutes=Ge.dateToMinutes(i.end));const a={...this.eventDefaults,_eid:`${this._vuecal._.uid}_${this._vuecal.eventIdIncrement++}`,start:e,startTimeMinutes:s,end:o,endTimeMinutes:r,segments:null,...i};return typeof this._vuecal.onEventCreate!="function"||this._vuecal.onEventCreate(a,()=>this.deleteAnEvent(a))?(a.startDateF!==a.endDateF&&(a.daysCount=Ge.countDays(a.start,a.end)),this._vuecal.mutableEvents.push(a),this._vuecal.addEventsToView([a]),this._vuecal.emitWithEvent("event-create",a),this._vuecal.$emit("event-change",{event:this._vuecal.cleanupEvent(a),originalEvent:null}),a):void 0}addEventSegment(e){e.segments||(e.segments={},e.segments[Ge.formatDateLite(e.start)]={start:e.start,startTimeMinutes:e.startTimeMinutes,endTimeMinutes:1440,isFirstDay:!0,isLastDay:!1});const n=e.segments[Ge.formatDateLite(e.end)];n&&(n.isLastDay=!1,n.endTimeMinutes=1440);const i=Ge.addDays(e.end,1),s=Ge.formatDateLite(i);return i.setHours(0,0,0,0),e.segments[s]={start:i,startTimeMinutes:0,endTimeMinutes:e.endTimeMinutes,isFirstDay:!1,isLastDay:!0},e.end=Ge.addMinutes(i,e.endTimeMinutes),e.daysCount=Object.keys(e.segments).length,s}removeEventSegment(e){let n=Object.keys(e.segments).length;if(n<=1)return Ge.formatDateLite(e.end);delete e.segments[Ge.formatDateLite(e.end)],n--;const i=Ge.subtractDays(e.end,1),s=Ge.formatDateLite(i),r=e.segments[s];return n?r&&(r.isLastDay=!0,r.endTimeMinutes=e.endTimeMinutes):e.segments=null,e.daysCount=n||1,e.end=i,s}createEventSegments(e,n,i){const s=n.getTime(),r=i.getTime();let o,a,l,c=e.start.getTime(),u=e.end.getTime(),h=!1;for(e.end.getHours()||e.end.getMinutes()||(u-=1e3),e.segments={},e.repeat?(o=s,a=Math.min(r,e.repeat.until?Ge.stringToDate(e.repeat.until).getTime():r)):(o=Math.max(s,c),a=Math.min(r,u));o<=a;){let d=!1;const f=Ge.addDays(new Date(o),1).setHours(0,0,0,0);let g,_,S,x;if(e.repeat){const G=new Date(o),D=Ge.formatDateLite(G);(h||e.occurrences&&e.occurrences[D])&&(h||(c=e.occurrences[D].start,l=new Date(c).setHours(0,0,0,0),u=e.occurrences[D].end),h=!0,d=!0),g=o===l,_=D===Ge.formatDateLite(new Date(u)),S=new Date(g?c:o),x=Ge.formatDateLite(S),_&&(h=!1)}else d=!0,g=o===c,_=a===u&&f>a,S=g?e.start:new Date(o),x=Ge.formatDateLite(g?e.start:S);d&&(e.segments[x]={start:S,startTimeMinutes:g?e.startTimeMinutes:0,endTimeMinutes:_?e.endTimeMinutes:1440,isFirstDay:g,isLastDay:_}),o=f}return e}deleteAnEvent(e){this._vuecal.emitWithEvent("event-delete",e),this._vuecal.mutableEvents=this._vuecal.mutableEvents.filter(n=>n._eid!==e._eid),this._vuecal.view.events=this._vuecal.view.events.filter(n=>n._eid!==e._eid)}checkCellOverlappingEvents(e,n){ch=e.slice(0),Ke={},e.forEach(s=>{ch.shift(),Ke[s._eid]||(Ke[s._eid]={overlaps:[],start:s.start,position:0}),Ke[s._eid].position=0,ch.forEach(r=>{Ke[r._eid]||(Ke[r._eid]={overlaps:[],start:r.start,position:0});const o=this.eventInRange(r,s.start,s.end),a=n.overlapsPerTimeStep?Ge.datesInSameTimeStep(s.start,r.start,n.timeStep):1;if(s.background||s.allDay||r.background||r.allDay||!o||!a){let l,c;(l=(Ke[s._eid]||{overlaps:[]}).overlaps.indexOf(r._eid))>-1&&Ke[s._eid].overlaps.splice(l,1),(c=(Ke[r._eid]||{overlaps:[]}).overlaps.indexOf(s._eid))>-1&&Ke[r._eid].overlaps.splice(c,1),Ke[r._eid].position--}else Ke[s._eid].overlaps.push(r._eid),Ke[s._eid].overlaps=[...new Set(Ke[s._eid].overlaps)],Ke[r._eid].overlaps.push(s._eid),Ke[r._eid].overlaps=[...new Set(Ke[r._eid].overlaps)],Ke[r._eid].position++})});let i=0;for(const s in Ke){const r=Ke[s],o=r.overlaps.map(a=>({id:a,start:Ke[a].start}));o.push({id:s,start:r.start}),o.sort((a,l)=>a.start<l.start?-1:a.start>l.start?1:a.id>l.id?-1:1),r.position=o.findIndex(a=>a.id===s),i=Math.max(this.getOverlapsStreak(r,Ke),i)}return[Ke,i]}getOverlapsStreak(e,n={}){let i=e.overlaps.length+1,s=[];return e.overlaps.forEach(r=>{s.includes(r)||e.overlaps.filter(o=>o!==r).forEach(o=>{n[o].overlaps.includes(r)||s.push(o)})}),s=[...new Set(s)],i-=s.length,i}eventInRange(e,n,i){if(e.allDay||!this._vuecal.time){const o=new Date(e.start).setHours(0,0,0,0);return new Date(e.end).setHours(23,59,0,0)>=new Date(n).setHours(0,0,0,0)&&o<=new Date(i).setHours(0,0,0,0)}const s=e.start.getTime(),r=e.end.getTime();return s<i.getTime()&&r>n.getTime()}}const mV={class:"vuecal__flex vuecal__weekdays-headings"},pV=["onClick"],gV={class:"vuecal__flex weekday-label",grow:""},vV={class:"full"},yV={class:"small"},wV={class:"xsmall"},_V={key:0},bV={key:0,class:"vuecal__flex vuecal__split-days-headers",grow:""},Jr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},AE=Jr({inject:["vuecal","utils","view"],props:{transitionDirection:{type:String,default:"right"},weekDays:{type:Array,default:()=>[]},switchToNarrowerView:{type:Function,default:()=>{}}},methods:{selectCell(t,e){t.getTime()!==this.view.selectedDate.getTime()&&(this.view.selectedDate=t),this.utils.cell.selectCell(!1,t,e)},cleanupHeading:t=>({label:t.full,date:t.date,...t.today?{today:t.today}:{}})},computed:{headings(){if(!["month","week"].includes(this.view.id))return[];let t=!1;return this.weekDays.map((e,n)=>{const i=this.utils.date.addDays(this.view.startDate,this.vuecal.startWeekOnSunday?n-1:n);return{hide:e.hide,full:e.label,small:e.short||e.label.substr(0,3),xsmall:e.short||e.label.substr(0,1),...this.view.id==="week"?{dayOfMonth:i.getDate(),date:i,today:!t&&this.utils.date.isToday(i)&&!t++}:{}}})},cellWidth(){return 100/(7-this.weekDays.reduce((t,e)=>t+e.hide,0))},weekdayCellStyles(){return{...this.vuecal.hideWeekdays.length?{width:`${this.cellWidth}%`}:{}}},cellHeadingsClickable(){return this.view.id==="week"&&(this.vuecal.clickToNavigate||this.vuecal.dblclickToNavigate)}}},[["render",function(t,e,n,i,s,r){return C(),V("div",mV,[(C(!0),V(De,null,Lt(r.headings,(o,a)=>(C(),V(De,{key:a},[o.hide?re("",!0):(C(),V("div",{key:0,class:Oe(["vuecal__flex vuecal__heading",{today:o.today,clickable:r.cellHeadingsClickable}]),style:Rt(r.weekdayCellStyles),onClick:l=>r.view.id==="week"&&r.selectCell(o.date,l),onDblclick:e[0]||(e[0]=l=>r.view.id==="week"&&r.vuecal.dblclickToNavigate&&n.switchToNarrowerView())},[ee(Pr,{name:`slide-fade--${n.transitionDirection}`,appear:r.vuecal.transitions},{default:Ie(()=>[(C(),V("div",{class:"vuecal__flex",column:"",key:!!r.vuecal.transitions&&`${a}-${o.dayOfMonth}`},[A("div",gV,[ke(t.$slots,"weekday-heading",{heading:r.cleanupHeading(o),view:r.view},()=>[A("span",vV,pe(o.full),1),A("span",yV,pe(o.small),1),A("span",wV,pe(o.xsmall),1),o.dayOfMonth?(C(),V("span",_V,"\xA0"+pe(o.dayOfMonth),1)):re("",!0)])]),r.vuecal.hasSplits&&r.vuecal.stickySplitLabels?(C(),V("div",bV,[(C(!0),V(De,null,Lt(r.vuecal.daySplits,(l,c)=>(C(),V("div",{class:Oe(["day-split-header",l.class||!1]),key:c},[ke(t.$slots,"split-label",{split:l,view:r.view},()=>[Tt(pe(l.label),1)])],2))),128))])):re("",!0)]))]),_:2},1032,["name","appear"])],46,pV))],64))),128))])}]]),IV={class:"vuecal__header"},EV={key:0,class:"vuecal__flex vuecal__menu",role:"tablist","aria-label":"Calendar views navigation"},TV=["onDragenter","onDragleave","onClick","aria-label"],SV={key:1,class:"vuecal__title-bar"},DV=["aria-label"],AV={class:"vuecal__flex vuecal__title",grow:""},kV=["aria-label"],CV={key:0,class:"vuecal__flex vuecal__split-days-headers"},OV=Jr({inject:["vuecal","previous","next","switchView","updateSelectedDate","modules","view"],components:{WeekdaysHeadings:AE},props:{options:{type:Object,default:()=>({})},editEvents:{type:Object,required:!0},hasSplits:{type:[Boolean,Number],default:!1},daySplits:{type:Array,default:()=>[]},viewProps:{type:Object,default:()=>({})},weekDays:{type:Array,default:()=>[]},switchToNarrowerView:{type:Function,default:()=>{}}},data:()=>({highlightedControl:null}),methods:{goToToday(){this.updateSelectedDate(new Date(new Date().setHours(0,0,0,0)))},switchToBroaderView(){this.transitionDirection="left",this.broaderView&&this.switchView(this.broaderView)}},computed:{transitionDirection:{get(){return this.vuecal.transitionDirection},set(t){this.vuecal.transitionDirection=t}},broaderView(){const{enabledViews:t}=this.vuecal;return t[t.indexOf(this.view.id)-1]},showDaySplits(){return this.view.id==="day"&&this.hasSplits&&this.options.stickySplitLabels&&!this.options.minSplitWidth},dnd(){return this.modules.dnd}}},[["render",function(t,e,n,i,s,r){const o=xe("weekdays-headings");return C(),V("div",IV,[n.options.hideViewSelector?re("",!0):(C(),V("div",EV,[(C(!0),V(De,null,Lt(n.viewProps.views,(a,l)=>(C(),V(De,{key:l},[a.enabled?(C(),V("button",{key:0,class:Oe(["vuecal__view-btn",{"vuecal__view-btn--active":r.view.id===l,"vuecal__view-btn--highlighted":t.highlightedControl===l}]),type:"button",onDragenter:c=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragEnter(c,l,t.$data),onDragleave:c=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragLeave(c,l,t.$data),onClick:c=>r.switchView(l,null,!0),"aria-label":`${a.label} view`},pe(a.label),43,TV)):re("",!0)],64))),128))])),n.options.hideTitleBar?re("",!0):(C(),V("div",SV,[A("button",{class:Oe(["vuecal__arrow vuecal__arrow--prev",{"vuecal__arrow--highlighted":t.highlightedControl==="previous"}]),type:"button",onClick:e[0]||(e[0]=(...a)=>r.previous&&r.previous(...a)),onDragenter:e[1]||(e[1]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragEnter(a,"previous",t.$data)),onDragleave:e[2]||(e[2]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragLeave(a,"previous",t.$data)),"aria-label":`Previous ${r.view.id}`},[ke(t.$slots,"arrow-prev")],42,DV),A("div",AV,[ee(Pr,{name:n.options.transitions?`slide-fade--${r.transitionDirection}`:""},{default:Ie(()=>[(C(),ft(Rc(r.broaderView?"button":"span"),{type:!!r.broaderView&&"button",key:`${r.view.id}${r.view.startDate.toString()}`,onClick:e[3]||(e[3]=a=>!!r.broaderView&&r.switchToBroaderView()),"aria-label":!!r.broaderView&&`Go to ${r.broaderView} view`},{default:Ie(()=>[ke(t.$slots,"title")]),_:3},8,["type","aria-label"]))]),_:3},8,["name"])]),n.options.todayButton?(C(),V("button",{key:0,class:Oe(["vuecal__today-btn",{"vuecal__today-btn--highlighted":t.highlightedControl==="today"}]),type:"button",onClick:e[4]||(e[4]=(...a)=>r.goToToday&&r.goToToday(...a)),onDragenter:e[5]||(e[5]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragEnter(a,"today",t.$data)),onDragleave:e[6]||(e[6]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragLeave(a,"today",t.$data)),"aria-label":"Today"},[ke(t.$slots,"today-button")],34)):re("",!0),A("button",{class:Oe(["vuecal__arrow vuecal__arrow--next",{"vuecal__arrow--highlighted":t.highlightedControl==="next"}]),type:"button",onClick:e[7]||(e[7]=(...a)=>r.next&&r.next(...a)),onDragenter:e[8]||(e[8]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragEnter(a,"next",t.$data)),onDragleave:e[9]||(e[9]=a=>n.editEvents.drag&&r.dnd&&r.dnd.viewSelectorDragLeave(a,"next",t.$data)),"aria-label":`Next ${r.view.id}`},[ke(t.$slots,"arrow-next")],42,kV)])),n.viewProps.weekDaysInHeader?(C(),ft(o,{key:2,"week-days":n.weekDays,"transition-direction":r.transitionDirection,"switch-to-narrower-view":n.switchToNarrowerView},ph({_:2},[t.$slots["weekday-heading"]?{name:"weekday-heading",fn:Ie(({heading:a,view:l})=>[ke(t.$slots,"weekday-heading",{heading:a,view:l})])}:void 0,t.$slots["split-label"]?{name:"split-label",fn:Ie(({split:a})=>[ke(t.$slots,"split-label",{split:a,view:r.view})])}:void 0]),1032,["week-days","transition-direction","switch-to-narrower-view"])):re("",!0),ee(Pr,{name:`slide-fade--${r.transitionDirection}`},{default:Ie(()=>[r.showDaySplits?(C(),V("div",CV,[(C(!0),V(De,null,Lt(n.daySplits,(a,l)=>(C(),V("div",{class:Oe(["day-split-header",a.class||!1]),key:l},[ke(t.$slots,"split-label",{split:a,view:r.view.id},()=>[Tt(pe(a.label),1)])],2))),128))])):re("",!0)]),_:3},8,["name"])])}]]),NV=["draggable"],xV={inject:["vuecal","utils","modules","view","domEvents","editEvents"],props:{cellFormattedDate:{type:String,default:""},event:{type:Object,default:()=>({})},cellEvents:{type:Array,default:()=>[]},overlaps:{type:Array,default:()=>[]},eventPosition:{type:Number,default:0},overlapsStreak:{type:Number,default:0},allDay:{type:Boolean,default:!1}},data:()=>({touch:{dragThreshold:30,startX:0,startY:0,dragged:!1}}),methods:{onMouseDown(t,e=!1){if("ontouchstart"in window&&!e)return!1;const{clickHoldAnEvent:n,focusAnEvent:i,resizeAnEvent:s,dragAnEvent:r}=this.domEvents;if(i._eid===this.event._eid&&n._eid===this.event._eid)return!0;this.focusEvent(),n._eid=null,this.vuecal.editEvents.delete&&this.event.deletable&&(n.timeoutId=setTimeout(()=>{s._eid||r._eid||(n._eid=this.event._eid,this.event.deleting=!0)},n.timeout))},onMouseUp(t){this.domEvents.focusAnEvent._eid!==this.event._eid||this.touch.dragged||(this.domEvents.focusAnEvent.mousedUp=!0),this.touch.dragged=!1},onMouseEnter(t){t.preventDefault(),this.vuecal.emitWithEvent("event-mouse-enter",this.event)},onMouseLeave(t){t.preventDefault(),this.vuecal.emitWithEvent("event-mouse-leave",this.event)},onTouchMove(t){if(typeof this.vuecal.onEventClick!="function")return;const{clientX:e,clientY:n}=t.touches[0],{startX:i,startY:s,dragThreshold:r}=this.touch;(Math.abs(e-i)>r||Math.abs(n-s)>r)&&(this.touch.dragged=!0)},onTouchStart(t){this.touch.startX=t.touches[0].clientX,this.touch.startY=t.touches[0].clientY,this.onMouseDown(t,!0)},onEnterKeypress(t){if(typeof this.vuecal.onEventClick=="function")return this.vuecal.onEventClick(this.event,t)},onDblClick(t){if(typeof this.vuecal.onEventDblclick=="function")return this.vuecal.onEventDblclick(this.event,t)},onDragStart(t){this.dnd&&this.dnd.eventDragStart(t,this.event)},onDragEnd(){this.dnd&&this.dnd.eventDragEnd(this.event)},onResizeHandleMouseDown(){this.focusEvent(),this.domEvents.dragAnEvent._eid=null,this.domEvents.resizeAnEvent=Object.assign(this.domEvents.resizeAnEvent,{_eid:this.event._eid,start:(this.segment||this.event).start,split:this.event.split||null,segment:!!this.segment&&this.utils.date.formatDateLite(this.segment.start),originalEnd:new Date((this.segment||this.event).end),originalEndTimeMinutes:this.event.endTimeMinutes}),this.event.resizing=!0},deleteEvent(t=!1){if("ontouchstart"in window&&!t)return!1;this.utils.event.deleteAnEvent(this.event)},touchDeleteEvent(t){this.deleteEvent(!0)},cancelDeleteEvent(){this.event.deleting=!1},focusEvent(){const{focusAnEvent:t}=this.domEvents,e=t._eid;if(e!==this.event._eid){if(e){const n=this.view.events.find(i=>i._eid===e);n&&(n.focused=!1)}this.vuecal.cancelDelete(),this.vuecal.emitWithEvent("event-focus",this.event),t._eid=this.event._eid,this.event.focused=!0}}},computed:{eventDimensions(){const{startTimeMinutes:t,endTimeMinutes:e}=this.segment||this.event;let n=t-this.vuecal.timeFrom;const i=Math.max(Math.round(n*this.vuecal.timeCellHeight/this.vuecal.timeStep),0);n=Math.min(e,this.vuecal.timeTo)-this.vuecal.timeFrom;const s=Math.round(n*this.vuecal.timeCellHeight/this.vuecal.timeStep);return{top:i,height:Math.max(s-i,5)}},eventStyles(){if(this.event.allDay||!this.vuecal.time||!this.event.endTimeMinutes||this.view.id==="month"||this.allDay)return{};let t=100/Math.min(this.overlaps.length+1,this.overlapsStreak),e=100/(this.overlaps.length+1)*this.eventPosition;this.vuecal.minEventWidth&&t<this.vuecal.minEventWidth&&(t=this.vuecal.minEventWidth,e=(100-this.vuecal.minEventWidth)/this.overlaps.length*this.eventPosition);const{top:n,height:i}=this.eventDimensions;return{top:`${n}px`,height:`${i}px`,width:`${t}%`,left:this.event.left&&`${this.event.left}px`||`${e}%`}},eventClasses(){const{isFirstDay:t,isLastDay:e}=this.segment||{};return{[this.event.class]:!!this.event.class,"vuecal__event--focus":this.event.focused,"vuecal__event--resizing":this.event.resizing,"vuecal__event--background":this.event.background,"vuecal__event--deletable":this.event.deleting,"vuecal__event--all-day":this.event.allDay,"vuecal__event--dragging":!this.event.draggingStatic&&this.event.dragging,"vuecal__event--static":this.event.dragging&&this.event.draggingStatic,"vuecal__event--multiple-days":!!this.segment,"event-start":this.segment&&t&&!e,"event-middle":this.segment&&!t&&!e,"event-end":this.segment&&e&&!t}},segment(){return this.event.segments&&this.event.segments[this.cellFormattedDate]||null},draggable(){const{draggable:t,background:e,daysCount:n}=this.event;return this.vuecal.editEvents.drag&&t&&!e&&n===1},resizable(){const{editEvents:t,time:e}=this.vuecal;return t.resize&&this.event.resizable&&e&&!this.allDay&&(!this.segment||this.segment&&this.segment.isLastDay)&&this.view.id!=="month"},dnd(){return this.modules.dnd}}},MV=["data-split","aria-label","onTouchstart","onMousedown","onDragover","onDrop"],RV={key:0,class:"cell-time-labels"},PV=["innerHTML"],LV={key:2,class:"vuecal__cell-events"},VV=["title"],kE=Jr({inject:["vuecal","utils","modules","view","domEvents"],components:{Event:Jr(xV,[["render",function(t,e,n,i,s,r){return C(),V("div",{class:Oe(["vuecal__event",r.eventClasses]),style:Rt(r.eventStyles),tabindex:"0",onFocus:e[4]||(e[4]=(...o)=>r.focusEvent&&r.focusEvent(...o)),onKeypress:e[5]||(e[5]=dp(ht((...o)=>r.onEnterKeypress&&r.onEnterKeypress(...o),["stop"]),["enter"])),onMouseenter:e[6]||(e[6]=(...o)=>r.onMouseEnter&&r.onMouseEnter(...o)),onMouseleave:e[7]||(e[7]=(...o)=>r.onMouseLeave&&r.onMouseLeave(...o)),onTouchstart:e[8]||(e[8]=ht((...o)=>r.onTouchStart&&r.onTouchStart(...o),["stop"])),onMousedown:e[9]||(e[9]=o=>r.onMouseDown(o)),onMouseup:e[10]||(e[10]=(...o)=>r.onMouseUp&&r.onMouseUp(...o)),onTouchend:e[11]||(e[11]=(...o)=>r.onMouseUp&&r.onMouseUp(...o)),onTouchmove:e[12]||(e[12]=(...o)=>r.onTouchMove&&r.onTouchMove(...o)),onDblclick:e[13]||(e[13]=(...o)=>r.onDblClick&&r.onDblClick(...o)),draggable:r.draggable,onDragstart:e[14]||(e[14]=o=>r.draggable&&r.onDragStart(o)),onDragend:e[15]||(e[15]=o=>r.draggable&&r.onDragEnd())},[r.vuecal.editEvents.delete&&n.event.deletable?(C(),V("div",{key:0,class:"vuecal__event-delete",onClick:e[0]||(e[0]=ht((...o)=>r.deleteEvent&&r.deleteEvent(...o),["stop"])),onTouchstart:e[1]||(e[1]=ht((...o)=>r.touchDeleteEvent&&r.touchDeleteEvent(...o),["stop"]))},pe(r.vuecal.texts.deleteEvent),33)):re("",!0),ke(t.$slots,"event",{event:n.event,view:r.view.id}),r.resizable?(C(),V("div",{key:1,class:"vuecal__event-resize-handle",contenteditable:"false",onMousedown:e[2]||(e[2]=ht((...o)=>r.onResizeHandleMouseDown&&r.onResizeHandleMouseDown(...o),["stop","prevent"])),onTouchstart:e[3]||(e[3]=ht((...o)=>r.onResizeHandleMouseDown&&r.onResizeHandleMouseDown(...o),["stop","prevent"]))},null,32)):re("",!0)],46,NV)}]])},props:{options:{type:Object,default:()=>({})},editEvents:{type:Object,required:!0},data:{type:Object,required:!0},cellSplits:{type:Array,default:()=>[]},minTimestamp:{type:[Number,null],default:null},maxTimestamp:{type:[Number,null],default:null},cellWidth:{type:[Number,Boolean],default:!1},allDay:{type:Boolean,default:!1}},data:()=>({cellOverlaps:{},cellOverlapsStreak:1,timeAtCursor:null,highlighted:!1,highlightedSplit:null}),methods:{getSplitAtCursor({target:t}){let e=t.classList.contains("vuecal__cell-split")?t:this.vuecal.findAncestor(t,"vuecal__cell-split");return e&&(e=e.attributes["data-split"].value,parseInt(e).toString()===e.toString()&&(e=parseInt(e))),e||null},splitClasses(t){return{"vuecal__cell-split":!0,"vuecal__cell-split--highlighted":this.highlightedSplit===t.id,[t.class]:!!t.class}},checkCellOverlappingEvents(){this.options.time&&this.eventsCount&&!this.splitsCount&&(this.eventsCount===1?(this.cellOverlaps=[],this.cellOverlapsStreak=1):[this.cellOverlaps,this.cellOverlapsStreak]=this.utils.event.checkCellOverlappingEvents(this.events,this.options))},isDOMElementAnEvent(t){return this.vuecal.isDOMElementAnEvent(t)},selectCell(t,e=!1){const n=this.splitsCount?this.getSplitAtCursor(t):null;this.utils.cell.selectCell(e,this.timeAtCursor,n),this.timeAtCursor=null},onCellkeyPressEnter(t){this.isSelected||this.onCellFocus(t);const e=this.splitsCount?this.getSplitAtCursor(t):null;this.utils.cell.keyPressEnterCell(this.timeAtCursor,e),this.timeAtCursor=null},onCellFocus(t){if(!this.isSelected&&!this.isDisabled){this.isSelected=this.data.startDate;const e=this.splitsCount?this.getSplitAtCursor(t):null,n=this.timeAtCursor||this.data.startDate;this.vuecal.$emit("cell-focus",e?{date:n,split:e}:n)}},onCellMouseDown(t,e=null,n=!1){if("ontouchstart"in window&&!n)return!1;this.isSelected||this.onCellFocus(t);const{clickHoldACell:i,focusAnEvent:s}=this.domEvents;this.domEvents.cancelClickEventCreation=!1,i.eventCreated=!1,this.timeAtCursor=new Date(this.data.startDate);const{minutes:r,cursorCoords:{y:o}}=this.vuecal.minutesAtCursor(t);this.timeAtCursor.setMinutes(r);const a=this.isDOMElementAnEvent(t.target);!a&&s._eid&&((this.view.events.find(l=>l._eid===s._eid)||{}).focused=!1),this.editEvents.create&&!a&&this.setUpEventCreation(t,o)},setUpEventCreation(t,e){if(this.options.dragToCreateEvent&&["week","day"].includes(this.view.id)){const{dragCreateAnEvent:n}=this.domEvents;if(n.startCursorY=e,n.split=this.splitsCount?this.getSplitAtCursor(t):null,n.start=this.timeAtCursor,this.options.snapToTime){let i=60*this.timeAtCursor.getHours()+this.timeAtCursor.getMinutes();const s=i+this.options.snapToTime/2;i=s-s%this.options.snapToTime,n.start.setHours(0,i,0,0)}}else this.options.cellClickHold&&["month","week","day"].includes(this.view.id)&&this.setUpCellHoldTimer(t)},setUpCellHoldTimer(t){const{clickHoldACell:e}=this.domEvents;e.cellId=`${this.vuecal._.uid}_${this.data.formattedDate}`,e.split=this.splitsCount?this.getSplitAtCursor(t):null,e.timeoutId=setTimeout(()=>{if(e.cellId&&!this.domEvents.cancelClickEventCreation){const{_eid:n}=this.utils.event.createAnEvent(this.timeAtCursor,null,e.split?{split:e.split}:{});e.eventCreated=n}},e.timeout)},onCellTouchStart(t,e=null){this.onCellMouseDown(t,e,!0)},onCellClick(t){this.isDOMElementAnEvent(t.target)||this.selectCell(t)},onCellDblClick(t){const e=new Date(this.data.startDate);e.setMinutes(this.vuecal.minutesAtCursor(t).minutes);const n=this.splitsCount?this.getSplitAtCursor(t):null;this.vuecal.$emit("cell-dblclick",n?{date:e,split:n}:e),this.options.dblclickToNavigate&&this.vuecal.switchToNarrowerView()},onCellContextMenu(t){t.stopPropagation(),t.preventDefault();const e=new Date(this.data.startDate),{cursorCoords:n,minutes:i}=this.vuecal.minutesAtCursor(t);e.setMinutes(i);const s=this.splitsCount?this.getSplitAtCursor(t):null;this.vuecal.$emit("cell-contextmenu",{date:e,...n,...s||{},e:t})}},computed:{dnd(){return this.modules.dnd},nowInMinutes(){return this.utils.date.dateToMinutes(this.vuecal.now)},isBeforeMinDate(){return this.minTimestamp!==null&&this.minTimestamp>this.data.endDate.getTime()},isAfterMaxDate(){return this.maxTimestamp&&this.maxTimestamp<this.data.startDate.getTime()},isDisabled(){const{disableDays:t}=this.options,{isYearsOrYearView:e}=this.vuecal;return!(!t.length||!t.includes(this.data.formattedDate)||e)||this.isBeforeMinDate||this.isAfterMaxDate},isSelected:{get(){let t=!1;const{selectedDate:e}=this.view;return t=this.view.id==="years"?e.getFullYear()===this.data.startDate.getFullYear():this.view.id==="year"?e.getFullYear()===this.data.startDate.getFullYear()&&e.getMonth()===this.data.startDate.getMonth():e.getTime()===this.data.startDate.getTime(),t},set(t){this.view.selectedDate=t,this.vuecal.$emit("update:selected-date",this.view.selectedDate)}},isWeekOrDayView(){return["week","day"].includes(this.view.id)},transitionDirection(){return this.vuecal.transitionDirection},specialHours(){return this.data.specialHours.map(t=>{let{from:e,to:n}=t;return e=Math.max(e,this.options.timeFrom),n=Math.min(n,this.options.timeTo),{...t,height:(n-e)*this.timeScale,top:(e-this.options.timeFrom)*this.timeScale}})},events(){const{startDate:t,endDate:e}=this.data;let n=[];if(!["years","year"].includes(this.view.id)||this.options.eventsCountOnYearView){if(n=this.view.events.slice(0),this.view.id==="month"&&n.push(...this.view.outOfScopeEvents),n=n.filter(i=>this.utils.event.eventInRange(i,t,e)),this.options.showAllDayEvents&&this.view.id!=="month"&&(n=n.filter(i=>!!i.allDay===this.allDay)),this.options.time&&this.isWeekOrDayView&&!this.allDay){const{timeFrom:i,timeTo:s}=this.options;n=n.filter(r=>{const o=r.daysCount>1&&r.segments[this.data.formattedDate]||{},a=r.daysCount===1&&r.startTimeMinutes<s&&r.endTimeMinutes>i,l=r.daysCount>1&&o.startTimeMinutes<s&&o.endTimeMinutes>i;return r.allDay||a||l||!1})}!this.options.time||!this.isWeekOrDayView||this.options.showAllDayEvents&&this.allDay||n.sort((i,s)=>i.start<s.start?-1:1),this.cellSplits.length||this.$nextTick(this.checkCellOverlappingEvents)}return n},eventsCount(){return this.events.length},splits(){return this.cellSplits.map((t,e)=>{const n=this.events.filter(r=>r.split===t.id),[i,s]=this.utils.event.checkCellOverlappingEvents(n.filter(r=>!r.background&&!r.allDay),this.options);return{...t,overlaps:i,overlapsStreak:s,events:n}})},splitsCount(){return this.splits.length},cellClasses(){return{[this.data.class]:!!this.data.class,"vuecal__cell--current":this.data.current,"vuecal__cell--today":this.data.today,"vuecal__cell--out-of-scope":this.data.outOfScope,"vuecal__cell--before-min":this.isDisabled&&this.isBeforeMinDate,"vuecal__cell--after-max":this.isDisabled&&this.isAfterMaxDate,"vuecal__cell--disabled":this.isDisabled,"vuecal__cell--selected":this.isSelected,"vuecal__cell--highlighted":this.highlighted,"vuecal__cell--has-splits":this.splitsCount,"vuecal__cell--has-events":this.eventsCount}},cellStyles(){return{...this.cellWidth?{width:`${this.cellWidth}%`}:{}}},timelineVisible(){const{time:t,timeTo:e}=this.options;return this.data.today&&this.isWeekOrDayView&&t&&!this.allDay&&this.nowInMinutes<=e},todaysTimePosition(){if(!this.data.today||!this.options.time)return;const t=this.nowInMinutes-this.options.timeFrom;return Math.round(t*this.timeScale)},timeScale(){return this.options.timeCellHeight/this.options.timeStep}}},[["render",function(t,e,n,i,s,r){const o=xe("event");return C(),ft(YT,{class:Oe(["vuecal__cell",r.cellClasses]),name:`slide-fade--${r.transitionDirection}`,tag:"div",appear:n.options.transitions,style:Rt(r.cellStyles)},{default:Ie(()=>[(C(!0),V(De,null,Lt(r.splitsCount?r.splits:1,(a,l)=>(C(),V("div",{class:Oe(["vuecal__flex vuecal__cell-content",r.splitsCount&&r.splitClasses(a)]),key:n.options.transitions?`${r.view.id}-${n.data.content}-${l}`:l,"data-split":!!r.splitsCount&&a.id,column:"",tabindex:"0","aria-label":n.data.content,onFocus:e[0]||(e[0]=c=>r.onCellFocus(c)),onKeypress:e[1]||(e[1]=dp(c=>r.onCellkeyPressEnter(c),["enter"])),onTouchstart:c=>!r.isDisabled&&r.onCellTouchStart(c,r.splitsCount?a.id:null),onMousedown:c=>!r.isDisabled&&r.onCellMouseDown(c,r.splitsCount?a.id:null),onClick:e[2]||(e[2]=c=>!r.isDisabled&&r.onCellClick(c)),onDblclick:e[3]||(e[3]=c=>!r.isDisabled&&r.onCellDblClick(c)),onContextmenu:e[4]||(e[4]=c=>!r.isDisabled&&n.options.cellContextmenu&&r.onCellContextMenu(c)),onDragenter:e[5]||(e[5]=c=>!r.isDisabled&&n.editEvents.drag&&r.dnd&&r.dnd.cellDragEnter(c,t.$data,n.data.startDate)),onDragover:c=>!r.isDisabled&&n.editEvents.drag&&r.dnd&&r.dnd.cellDragOver(c,t.$data,n.data.startDate,r.splitsCount?a.id:null),onDragleave:e[6]||(e[6]=c=>!r.isDisabled&&n.editEvents.drag&&r.dnd&&r.dnd.cellDragLeave(c,t.$data,n.data.startDate)),onDrop:c=>!r.isDisabled&&n.editEvents.drag&&r.dnd&&r.dnd.cellDragDrop(c,t.$data,n.data.startDate,r.splitsCount?a.id:null)},[n.options.showTimeInCells&&n.options.time&&r.isWeekOrDayView&&!n.allDay?(C(),V("div",RV,[(C(!0),V(De,null,Lt(r.vuecal.timeCells,(c,u)=>(C(),V("span",{class:"cell-time-label",key:u},pe(c.label),1))),128))])):re("",!0),r.isWeekOrDayView&&!n.allDay&&r.specialHours.length?(C(!0),V(De,{key:1},Lt(r.specialHours,(c,u)=>(C(),V("div",{class:Oe(["vuecal__special-hours",`vuecal__special-hours--day${c.day} ${c.class}`]),style:Rt(`height: ${c.height}px;top: ${c.top}px`)},[c.label?(C(),V("div",{key:0,class:"special-hours-label",innerHTML:c.label},null,8,PV)):re("",!0)],6))),256)):re("",!0),ke(t.$slots,"cell-content",{events:r.events,selectCell:c=>r.selectCell(c,!0),split:!!r.splitsCount&&a}),r.eventsCount&&(r.isWeekOrDayView||r.view.id==="month"&&n.options.eventsOnMonthView)?(C(),V("div",LV,[(C(!0),V(De,null,Lt(r.splitsCount?a.events:r.events,(c,u)=>(C(),ft(o,{key:u,"cell-formatted-date":n.data.formattedDate,event:c,"all-day":n.allDay,"cell-events":r.splitsCount?a.events:r.events,overlaps:((r.splitsCount?a.overlaps[c._eid]:t.cellOverlaps[c._eid])||[]).overlaps,"event-position":((r.splitsCount?a.overlaps[c._eid]:t.cellOverlaps[c._eid])||[]).position,"overlaps-streak":r.splitsCount?a.overlapsStreak:t.cellOverlapsStreak},{event:Ie(({event:h,view:d})=>[ke(t.$slots,"event",{view:d,event:h})]),_:2},1032,["cell-formatted-date","event","all-day","cell-events","overlaps","event-position","overlaps-streak"]))),128))])):re("",!0)],42,MV))),128)),r.timelineVisible?(C(),V("div",{class:"vuecal__now-line",style:Rt(`top: ${r.todaysTimePosition}px`),key:n.options.transitions?`${r.view.id}-now-line`:"now-line",title:r.utils.date.formatTime(r.vuecal.now)},null,12,VV)):re("",!0)]),_:3},8,["class","name","appear","style"])}]]),FV={key:0,class:"vuecal__all-day-text",style:{width:"3em"}},$V=Jr({inject:["vuecal","view","editEvents"],components:{"vuecal-cell":kE},props:{options:{type:Object,required:!0},cells:{type:Array,required:!0},label:{type:String,required:!0},daySplits:{type:Array,default:()=>[]},shortEvents:{type:Boolean,default:!0},height:{type:String,default:""},cellOrSplitMinWidth:{type:Number,default:null}},computed:{hasCellOrSplitWidth(){return!!(this.options.minCellWidth||this.daySplits.length&&this.options.minSplitWidth)}}},[["render",function(t,e,n,i,s,r){const o=xe("vuecal-cell");return C(),V("div",{class:"vuecal__flex vuecal__all-day",style:Rt(n.cellOrSplitMinWidth&&{height:n.height})},[n.cellOrSplitMinWidth?re("",!0):(C(),V("div",FV,[A("span",null,pe(n.label),1)])),A("div",{class:Oe(["vuecal__flex vuecal__cells",`${r.view.id}-view`]),grow:"",style:Rt(n.cellOrSplitMinWidth?`min-width: ${n.cellOrSplitMinWidth}px`:"")},[(C(!0),V(De,null,Lt(n.cells,(a,l)=>(C(),ft(o,{key:l,options:n.options,"edit-events":r.editEvents,data:a,"all-day":!0,"cell-width":n.options.hideWeekdays.length&&(r.vuecal.isWeekView||r.vuecal.isMonthView)&&r.vuecal.cellWidth,"min-timestamp":n.options.minTimestamp,"max-timestamp":n.options.maxTimestamp,"cell-splits":n.daySplits},{event:Ie(({event:c,view:u})=>[ke(t.$slots,"event",{view:u,event:c})]),_:2},1032,["options","edit-events","data","cell-width","min-timestamp","max-timestamp","cell-splits"]))),128))],6)],4)}]]),UV=["lang"],BV=Tt("\xA0"),jV=A("i",{class:"angle"},null,-1),qV=Tt("\xA0"),HV=Tt("\xA0"),WV=A("i",{class:"angle"},null,-1),GV=Tt("\xA0"),KV={class:"default"},zV={key:0,class:"vuecal__flex vuecal__body",grow:""},YV=["onBlur","innerHTML"],QV=["innerHTML"],JV=["innerHTML"],XV={class:"vuecal__flex",row:"",grow:""},ZV={key:0,class:"vuecal__time-column"},eF=A("span",{class:"vuecal__time-cell-line"},null,-1),tF={class:"vuecal__time-cell-label"},nF={key:1,class:"vuecal__flex vuecal__week-numbers",column:""},iF=["wrap","column"],sF=["onBlur","innerHTML"],rF=["innerHTML"],oF=["innerHTML"],aF=["wrap"],lF=["innerHTML"],cF=["innerHTML"],uF={key:2,class:"vuecal__cell-events-count"},hF={key:3,class:"vuecal__no-event"},dF=["onBlur","innerHTML"],fF=["innerHTML"],mF={key:2,class:"vuecal__event-time"},pF={key:0},gF={key:1,class:"days-to-end"},vF=["innerHTML"],yF={key:0,class:"vuecal__scrollbar-check"},wF=[A("div",null,null,-1)],$o={weekDays:Array(7).fill(""),weekDaysShort:[],months:Array(12).fill(""),years:"",year:"",month:"",week:"",day:"",today:"",noEvent:"",allDay:"",deleteEvent:"",createEvent:"",dateFormat:"dddd MMMM D, YYYY",am:"am",pm:"pm"},bv=["years","year","month","week","day"],Iv=new class{constructor(t,e=!1){ti(this,"texts",{}),ti(this,"dateToMinutes",n=>60*n.getHours()+n.getMinutes()),dn=this,this._texts=t,e||!Date||Date.prototype.addDays||this._initDatePrototypes()}_initDatePrototypes(){Date.prototype.addDays=function(t){return dn.addDays(this,t)},Date.prototype.subtractDays=function(t){return dn.subtractDays(this,t)},Date.prototype.addHours=function(t){return dn.addHours(this,t)},Date.prototype.subtractHours=function(t){return dn.subtractHours(this,t)},Date.prototype.addMinutes=function(t){return dn.addMinutes(this,t)},Date.prototype.subtractMinutes=function(t){return dn.subtractMinutes(this,t)},Date.prototype.getWeek=function(){return dn.getWeek(this)},Date.prototype.isToday=function(){return dn.isToday(this)},Date.prototype.isLeapYear=function(){return dn.isLeapYear(this)},Date.prototype.format=function(t="YYYY-MM-DD"){return dn.formatDate(this,t)},Date.prototype.formatTime=function(t="HH:mm"){return dn.formatTime(this,t)}}removePrototypes(){delete Date.prototype.addDays,delete Date.prototype.subtractDays,delete Date.prototype.addHours,delete Date.prototype.subtractHours,delete Date.prototype.addMinutes,delete Date.prototype.subtractMinutes,delete Date.prototype.getWeek,delete Date.prototype.isToday,delete Date.prototype.isLeapYear,delete Date.prototype.format,delete Date.prototype.formatTime}updateTexts(t){this._texts=t}_todayFormatted(){return wv!==new Date().getDate()&&(Co=new Date,wv=Co.getDate(),_v=`${Co.getFullYear()}-${Co.getMonth()}-${Co.getDate()}`),_v}addDays(t,e){const n=new Date(t.valueOf());return n.setDate(n.getDate()+e),n}subtractDays(t,e){const n=new Date(t.valueOf());return n.setDate(n.getDate()-e),n}addHours(t,e){const n=new Date(t.valueOf());return n.setHours(n.getHours()+e),n}subtractHours(t,e){const n=new Date(t.valueOf());return n.setHours(n.getHours()-e),n}addMinutes(t,e){const n=new Date(t.valueOf());return n.setMinutes(n.getMinutes()+e),n}subtractMinutes(t,e){const n=new Date(t.valueOf());return n.setMinutes(n.getMinutes()-e),n}getWeek(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),n=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-n);const i=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-i)/864e5+1)/7)}isToday(t){return`${t.getFullYear()}-${t.getMonth()}-${t.getDate()}`===this._todayFormatted()}isLeapYear(t){const e=t.getFullYear();return!(e%400)||e%100&&!(e%4)}getPreviousFirstDayOfWeek(t=null,e){const n=t&&new Date(t.valueOf())||new Date,i=e?7:6;return n.setDate(n.getDate()-(n.getDay()+i)%7),n}stringToDate(t){return t instanceof Date?t:(t.length===10&&(t+=" 00:00"),new Date(t.replace(/-/g,"/")))}countDays(t,e){typeof t=="string"&&(t=t.replace(/-/g,"/")),typeof e=="string"&&(e=e.replace(/-/g,"/")),t=new Date(t).setHours(0,0,0,0),e=new Date(e).setHours(0,0,1,0);const n=60*(new Date(e).getTimezoneOffset()-new Date(t).getTimezoneOffset())*1e3;return Math.ceil((e-t-n)/864e5)}datesInSameTimeStep(t,e,n){return Math.abs(t.getTime()-e.getTime())<=60*n*1e3}formatDate(t,e="YYYY-MM-DD",n=null){if(n||(n=this._texts),e||(e="YYYY-MM-DD"),e==="YYYY-MM-DD")return this.formatDateLite(t);Oo={},gr={};const i={YYYY:()=>this._hydrateDateObject(t,n).YYYY,YY:()=>this._hydrateDateObject(t,n).YY(),M:()=>this._hydrateDateObject(t,n).M,MM:()=>this._hydrateDateObject(t,n).MM(),MMM:()=>this._hydrateDateObject(t,n).MMM(),MMMM:()=>this._hydrateDateObject(t,n).MMMM(),MMMMG:()=>this._hydrateDateObject(t,n).MMMMG(),D:()=>this._hydrateDateObject(t,n).D,DD:()=>this._hydrateDateObject(t,n).DD(),S:()=>this._hydrateDateObject(t,n).S(),d:()=>this._hydrateDateObject(t,n).d,dd:()=>this._hydrateDateObject(t,n).dd(),ddd:()=>this._hydrateDateObject(t,n).ddd(),dddd:()=>this._hydrateDateObject(t,n).dddd(),HH:()=>this._hydrateTimeObject(t,n).HH,H:()=>this._hydrateTimeObject(t,n).H,hh:()=>this._hydrateTimeObject(t,n).hh,h:()=>this._hydrateTimeObject(t,n).h,am:()=>this._hydrateTimeObject(t,n).am,AM:()=>this._hydrateTimeObject(t,n).AM,mm:()=>this._hydrateTimeObject(t,n).mm,m:()=>this._hydrateTimeObject(t,n).m};return e.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g,(s,r)=>{const o=i[r.replace(/\{|\}/g,"")];return o!==void 0?o():r})}formatDateLite(t){const e=t.getMonth()+1,n=t.getDate();return`${t.getFullYear()}-${e<10?"0":""}${e}-${n<10?"0":""}${n}`}formatTime(t,e="HH:mm",n=null,i=!1){let s=!1;if(i){const[a,l,c]=[t.getHours(),t.getMinutes(),t.getSeconds()];a+l+c===141&&(s=!0)}if(t instanceof Date&&e==="HH:mm")return s?"24:00":this.formatTimeLite(t);gr={},n||(n=this._texts);const r=this._hydrateTimeObject(t,n),o=e.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g,(a,l)=>{const c=r[l.replace(/\{|\}/g,"")];return c!==void 0?c:l});return s?o.replace("23:59","24:00"):o}formatTimeLite(t){const e=t.getHours(),n=t.getMinutes();return`${(e<10?"0":"")+e}:${(n<10?"0":"")+n}`}_nth(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}_hydrateDateObject(t,e){if(Oo.D)return Oo;const n=t.getFullYear(),i=t.getMonth()+1,s=t.getDate(),r=(t.getDay()-1+7)%7;return Oo={YYYY:n,YY:()=>n.toString().substring(2),M:i,MM:()=>(i<10?"0":"")+i,MMM:()=>e.months[i-1].substring(0,3),MMMM:()=>e.months[i-1],MMMMG:()=>(e.monthsGenitive||e.months)[i-1],D:s,DD:()=>(s<10?"0":"")+s,S:()=>this._nth(s),d:r+1,dd:()=>e.weekDays[r][0],ddd:()=>e.weekDays[r].substr(0,3),dddd:()=>e.weekDays[r]},Oo}_hydrateTimeObject(t,e){if(gr.am)return gr;let n,i;t instanceof Date?(n=t.getHours(),i=t.getMinutes()):(n=Math.floor(t/60),i=Math.floor(t%60));const s=n%12?n%12:12,r=(e||{am:"am",pm:"pm"})[n===24||n<12?"am":"pm"];return gr={H:n,h:s,HH:(n<10?"0":"")+n,hh:(s<10?"0":"")+s,am:r,AM:r.toUpperCase(),m:i,mm:(i<10?"0":"")+i},gr}}($o),_F={name:"vue-cal",components:{"vuecal-cell":kE,"vuecal-header":OV,WeekdaysHeadings:AE,AllDayBar:$V},provide(){return{vuecal:this,utils:this.utils,modules:this.modules,previous:this.previous,next:this.next,switchView:this.switchView,updateSelectedDate:this.updateSelectedDate,editEvents:this.editEvents,view:this.view,domEvents:this.domEvents}},props:{activeView:{type:String,default:"week"},allDayBarHeight:{type:[String,Number],default:"25px"},cellClickHold:{type:Boolean,default:!0},cellContextmenu:{type:Boolean,default:!1},clickToNavigate:{type:Boolean,default:!1},dblclickToNavigate:{type:Boolean,default:!0},disableDatePrototypes:{type:Boolean,default:!1},disableDays:{type:Array,default:()=>[]},disableViews:{type:Array,default:()=>[]},dragToCreateEvent:{type:Boolean,default:!0},dragToCreateThreshold:{type:Number,default:15},editableEvents:{type:[Boolean,Object],default:!1},events:{type:Array,default:()=>[]},eventsCountOnYearView:{type:Boolean,default:!1},eventsOnMonthView:{type:[Boolean,String],default:!1},hideBody:{type:Boolean,default:!1},hideTitleBar:{type:Boolean,default:!1},hideViewSelector:{type:Boolean,default:!1},hideWeekdays:{type:Array,default:()=>[]},hideWeekends:{type:Boolean,default:!1},locale:{type:[String,Object],default:"en"},maxDate:{type:[String,Date],default:""},minCellWidth:{type:Number,default:0},minDate:{type:[String,Date],default:""},minEventWidth:{type:Number,default:0},minSplitWidth:{type:Number,default:0},onEventClick:{type:[Function,null],default:null},onEventCreate:{type:[Function,null],default:null},onEventDblclick:{type:[Function,null],default:null},overlapsPerTimeStep:{type:Boolean,default:!1},resizeX:{type:Boolean,default:!1},selectedDate:{type:[String,Date],default:""},showAllDayEvents:{type:[Boolean,String],default:!1},showTimeInCells:{type:Boolean,default:!1},showWeekNumbers:{type:[Boolean,String],default:!1},snapToTime:{type:Number,default:0},small:{type:Boolean,default:!1},specialHours:{type:Object,default:()=>({})},splitDays:{type:Array,default:()=>[]},startWeekOnSunday:{type:Boolean,default:!1},stickySplitLabels:{type:Boolean,default:!1},time:{type:Boolean,default:!0},timeCellHeight:{type:Number,default:40},timeFormat:{type:String,default:""},timeFrom:{type:Number,default:0},timeStep:{type:Number,default:60},timeTo:{type:Number,default:1440},todayButton:{type:Boolean,default:!1},transitions:{type:Boolean,default:!0},twelveHour:{type:Boolean,default:!1},watchRealTime:{type:Boolean,default:!1},xsmall:{type:Boolean,default:!1}},data(){return{ready:!1,texts:{...$o},utils:{date:!!this.disableDatePrototypes&&Iv.removePrototypes()||Iv,cell:null,event:null},modules:{dnd:null},cellsEl:null,view:{id:"",title:"",startDate:null,endDate:null,firstCellDate:null,lastCellDate:null,selectedDate:null,events:[]},eventIdIncrement:1,now:new Date,timeTickerIds:[null,null],domEvents:{resizeAnEvent:{_eid:null,start:null,split:null,segment:null,originalEndTimeMinutes:0,originalEnd:null,end:null,startCell:null,endCell:null},dragAnEvent:{_eid:null},dragCreateAnEvent:{startCursorY:null,start:null,split:null,event:null},focusAnEvent:{_eid:null,mousedUp:!1},clickHoldAnEvent:{_eid:null,timeout:1200,timeoutId:null},dblTapACell:{taps:0,timeout:500},clickHoldACell:{cellId:null,split:null,timeout:1200,timeoutId:null,eventCreated:!1},cancelClickEventCreation:!1},mutableEvents:[],transitionDirection:"right"}},methods:{async loadLocale(t){if(typeof this.locale=="object")return this.texts=Object.assign({},$o,t),void this.utils.date.updateTexts(this.texts);if(this.locale==="en"){const e=await ue(()=>import("./en.es.9c697555.js"),[]);this.texts=Object.assign({},$o,e)}else((e,n)=>{const i=e[n];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((s,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+n)))})})(Object.assign({"./i18n/ar.json":()=>ue(()=>import("./ar.es.2d0c98a4.js"),[]),"./i18n/bg.json":()=>ue(()=>import("./bg.es.33e03a3e.js"),[]),"./i18n/bn.json":()=>ue(()=>import("./bn.es.843603bf.js"),[]),"./i18n/bs.json":()=>ue(()=>import("./bs.es.7224c510.js"),[]),"./i18n/ca.json":()=>ue(()=>import("./ca.es.2d2c467f.js"),[]),"./i18n/cs.json":()=>ue(()=>import("./cs.es.11a87998.js"),[]),"./i18n/da.json":()=>ue(()=>import("./da.es.a5530d64.js"),[]),"./i18n/de.json":()=>ue(()=>import("./de.es.37f754a1.js"),[]),"./i18n/el.json":()=>ue(()=>import("./el.es.efdee881.js"),[]),"./i18n/en.json":()=>ue(()=>import("./en.es.9c697555.js"),[]),"./i18n/es.json":()=>ue(()=>import("./es.es.0ad8e9c3.js"),[]),"./i18n/et.json":()=>ue(()=>import("./et.es.802f58b4.js"),[]),"./i18n/fa.json":()=>ue(()=>import("./fa.es.d8ee573b.js"),[]),"./i18n/fr.json":()=>ue(()=>import("./fr.es.065fe3b6.js"),[]),"./i18n/he.json":()=>ue(()=>import("./he.es.4b0b5ca5.js"),[]),"./i18n/hr.json":()=>ue(()=>import("./hr.es.4dfdeda0.js"),[]),"./i18n/hu.json":()=>ue(()=>import("./hu.es.736bf2b1.js"),[]),"./i18n/id.json":()=>ue(()=>import("./id.es.6c32644e.js"),[]),"./i18n/is.json":()=>ue(()=>import("./is.es.43a1f054.js"),[]),"./i18n/it.json":()=>ue(()=>import("./it.es.87e08518.js"),[]),"./i18n/ja.json":()=>ue(()=>import("./ja.es.3671a4b5.js"),[]),"./i18n/ka.json":()=>ue(()=>import("./ka.es.a0981a69.js"),[]),"./i18n/ko.json":()=>ue(()=>import("./ko.es.f0081794.js"),[]),"./i18n/lt.json":()=>ue(()=>import("./lt.es.5f26a174.js"),[]),"./i18n/mn.json":()=>ue(()=>import("./mn.es.2d7e3a9c.js"),[]),"./i18n/nl.json":()=>ue(()=>import("./nl.es.98284dc7.js"),[]),"./i18n/no.json":()=>ue(()=>import("./no.es.60a9d071.js"),[]),"./i18n/pl.json":()=>ue(()=>import("./pl.es.7421f389.js"),[]),"./i18n/pt-br.json":()=>ue(()=>import("./pt-br.es.f0860dd5.js"),[]),"./i18n/ro.json":()=>ue(()=>import("./ro.es.40c54903.js"),[]),"./i18n/ru.json":()=>ue(()=>import("./ru.es.c2526480.js"),[]),"./i18n/sk.json":()=>ue(()=>import("./sk.es.51cb3e73.js"),[]),"./i18n/sl.json":()=>ue(()=>import("./sl.es.588c15ba.js"),[]),"./i18n/sq.json":()=>ue(()=>import("./sq.es.ef35cbe9.js"),[]),"./i18n/sr.json":()=>ue(()=>import("./sr.es.83bfaae8.js"),[]),"./i18n/sv.json":()=>ue(()=>import("./sv.es.17b31c17.js"),[]),"./i18n/tr.json":()=>ue(()=>import("./tr.es.1933856e.js"),[]),"./i18n/uk.json":()=>ue(()=>import("./uk.es.2d44f56e.js"),[]),"./i18n/vi.json":()=>ue(()=>import("./vi.es.9b5c85df.js"),[]),"./i18n/zh-cn.json":()=>ue(()=>import("./zh-cn.es.b57b2643.js"),[]),"./i18n/zh-hk.json":()=>ue(()=>import("./zh-hk.es.fa79873a.js"),[])}),`./i18n/${t}.json`).then(e=>{this.texts=Object.assign({},$o,e.default),this.utils.date.updateTexts(this.texts)})},loadDragAndDrop(){ue(()=>import("./drag-and-drop.es.6dfab19f.js"),[]).then(t=>{const{DragAndDrop:e}=t;this.modules.dnd=new e(this)}).catch(()=>console.warn("Vue Cal: Missing drag & drop module."))},validateView(t){return bv.includes(t)||(console.error(`Vue Cal: invalid active-view parameter provided: "${t}".
A valid view must be one of: ${bv.join(", ")}.`),t="week"),this.enabledViews.includes(t)||(console.warn(`Vue Cal: the provided active-view "${t}" is disabled. Using the "${this.enabledViews[0]}" view instead.`),t=this.enabledViews[0]),t},switchToNarrowerView(t=null){this.transitionDirection="right";const e=this.enabledViews[this.enabledViews.indexOf(this.view.id)+1];e&&this.switchView(e,t)},switchView(t,e=null,n=!1){t=this.validateView(t);const i=this.utils.date,s=this.view.startDate&&this.view.startDate.getTime();if(this.transitions&&n){if(this.view.id===t)return;const a=this.enabledViews;this.transitionDirection=a.indexOf(this.view.id)>a.indexOf(t)?"left":"right"}const r=this.view.id;switch(this.view.events=[],this.view.id=t,this.view.firstCellDate=null,this.view.lastCellDate=null,e||(e=this.view.selectedDate||this.view.startDate),t){case"years":this.view.startDate=new Date(25*Math.floor(e.getFullYear()/25)||2e3,0,1),this.view.endDate=new Date(this.view.startDate.getFullYear()+25,0,1),this.view.endDate.setSeconds(-1);break;case"year":this.view.startDate=new Date(e.getFullYear(),0,1),this.view.endDate=new Date(e.getFullYear()+1,0,1),this.view.endDate.setSeconds(-1);break;case"month":{this.view.startDate=new Date(e.getFullYear(),e.getMonth(),1),this.view.endDate=new Date(e.getFullYear(),e.getMonth()+1,1),this.view.endDate.setSeconds(-1);let a=new Date(this.view.startDate);if(a.getDay()!==(this.startWeekOnSunday?0:1)&&(a=i.getPreviousFirstDayOfWeek(a,this.startWeekOnSunday)),this.view.firstCellDate=a,this.view.lastCellDate=i.addDays(a,41),this.view.lastCellDate.setHours(23,59,59,0),this.hideWeekends){if([0,6].includes(this.view.firstCellDate.getDay())){const l=this.view.firstCellDate.getDay()!==6||this.startWeekOnSunday?1:2;this.view.firstCellDate=i.addDays(this.view.firstCellDate,l)}if([0,6].includes(this.view.startDate.getDay())){const l=this.view.startDate.getDay()===6?2:1;this.view.startDate=i.addDays(this.view.startDate,l)}if([0,6].includes(this.view.lastCellDate.getDay())){const l=this.view.lastCellDate.getDay()!==0||this.startWeekOnSunday?1:2;this.view.lastCellDate=i.subtractDays(this.view.lastCellDate,l)}if([0,6].includes(this.view.endDate.getDay())){const l=this.view.endDate.getDay()===0?2:1;this.view.endDate=i.subtractDays(this.view.endDate,l)}}break}case"week":{e=i.getPreviousFirstDayOfWeek(e,this.startWeekOnSunday);const a=this.hideWeekends?5:7;this.view.startDate=this.hideWeekends&&this.startWeekOnSunday?i.addDays(e,1):e,this.view.startDate.setHours(0,0,0,0),this.view.endDate=i.addDays(e,a),this.view.endDate.setSeconds(-1);break}case"day":this.view.startDate=e,this.view.startDate.setHours(0,0,0,0),this.view.endDate=new Date(e),this.view.endDate.setHours(23,59,59,0)}this.addEventsToView();const o=this.view.startDate&&this.view.startDate.getTime();if((r!==t||o!==s)&&(this.$emit("update:activeView",t),this.ready)){const a=this.view.startDate,l={view:t,startDate:a,endDate:this.view.endDate,...this.isMonthView?{firstCellDate:this.view.firstCellDate,lastCellDate:this.view.lastCellDate,outOfScopeEvents:this.view.outOfScopeEvents.map(this.cleanupEvent)}:{},events:this.view.events.map(this.cleanupEvent),...this.isWeekView?{week:i.getWeek(this.startWeekOnSunday?i.addDays(a,1):a)}:{}};this.$emit("view-change",l)}},previous(){this.previousNext(!1)},next(){this.previousNext()},previousNext(t=!0){const e=this.utils.date;this.transitionDirection=t?"right":"left";const n=t?1:-1;let i=null;const{startDate:s,id:r}=this.view;switch(r){case"years":i=new Date(s.getFullYear()+25*n,0,1);break;case"year":i=new Date(s.getFullYear()+1*n,1,1);break;case"month":i=new Date(s.getFullYear(),s.getMonth()+1*n,1);break;case"week":i=e[t?"addDays":"subtractDays"](e.getPreviousFirstDayOfWeek(s,this.startWeekOnSunday),7);break;case"day":i=e[t?"addDays":"subtractDays"](s,1);const o=i.getDay(),a=this.startWeekOnSunday?o:(o||7)-1;if(this.weekDays[a].hide){const l=this.weekDays.map((u,h)=>({...u,i:h}));let c=0;t?([...l.slice(a),...l].find(u=>(c++,!u.hide)).i,c--):[...l,...l.slice(0,a)].reverse().find(u=>(c++,!u.hide)).i,i=e[t?"addDays":"subtractDays"](i,c)}}i&&this.switchView(r,i)},addEventsToView(t=[]){const e=this.utils.event,{startDate:n,endDate:i,firstCellDate:s,lastCellDate:r}=this.view;if(t.length||(this.view.events=[]),!(t=t.length?t:[...this.mutableEvents])||this.isYearsOrYearView&&!this.eventsCountOnYearView)return;let o=t.filter(a=>e.eventInRange(a,n,i));this.isYearsOrYearView||this.isMonthView&&!this.eventsOnMonthView||(o=o.map(a=>a.daysCount>1?e.createEventSegments(a,s||n,r||i):a)),this.view.events.push(...o),this.isMonthView&&(this.view.outOfScopeEvents=[],t.forEach(a=>{(e.eventInRange(a,s,n)||e.eventInRange(a,i,r))&&(this.view.events.some(l=>l._eid===a._eid)||this.view.outOfScopeEvents.push(a))}))},findAncestor(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t},isDOMElementAnEvent(t){return t.classList.contains("vuecal__event")||this.findAncestor(t,"vuecal__event")},onMouseMove(t){const{resizeAnEvent:e,dragAnEvent:n,dragCreateAnEvent:i}=this.domEvents;(e._eid!==null||n._eid!==null||i.start)&&(t.preventDefault(),e._eid?this.eventResizing(t):this.dragToCreateEvent&&i.start&&this.eventDragCreation(t))},onMouseUp(t){const{focusAnEvent:e,resizeAnEvent:n,clickHoldAnEvent:i,clickHoldACell:s,dragCreateAnEvent:r}=this.domEvents,{_eid:o}=i,{_eid:a}=n;let l=!1;const{event:c,start:u}=r,h=this.isDOMElementAnEvent(t.target),d=e.mousedUp;if(e.mousedUp=!1,h&&(this.domEvents.cancelClickEventCreation=!0),s.eventCreated)return;if(a){const{originalEnd:g,originalEndTimeMinutes:_,endTimeMinutes:S}=n,x=this.view.events.find(G=>G._eid===n._eid);if(l=S&&S!==_,x&&x.end.getTime()!==g.getTime()){const G=this.mutableEvents.find($=>$._eid===n._eid);G.endTimeMinutes=x.endTimeMinutes,G.end=x.end;const D=this.cleanupEvent(x),O={...this.cleanupEvent(x),end:g,endTimeMinutes:x.originalEndTimeMinutes};this.$emit("event-duration-change",{event:D,oldDate:n.originalEnd,originalEvent:O}),this.$emit("event-change",{event:D,originalEvent:O})}x&&(x.resizing=!1),n._eid=null,n.start=null,n.split=null,n.segment=null,n.originalEndTimeMinutes=null,n.originalEnd=null,n.endTimeMinutes=null,n.startCell=null,n.endCell=null}else u&&(c&&(this.emitWithEvent("event-drag-create",c),r.event.resizing=!1),r.start=null,r.split=null,r.event=null);h||a||this.unfocusEvent(),i.timeoutId&&!o&&(clearTimeout(i.timeoutId),i.timeoutId=null),s.timeoutId&&(clearTimeout(s.timeoutId),s.timeoutId=null);const f=typeof this.onEventClick=="function";if(d&&!l&&!o&&!c&&f){let g=this.view.events.find(_=>_._eid===e._eid);return!g&&this.isMonthView&&(g=this.view.outOfScopeEvents.find(_=>_._eid===e._eid)),g&&this.onEventClick(g,t)}},onKeyUp(t){t.keyCode===27&&this.cancelDelete()},eventResizing(t){const{resizeAnEvent:e}=this.domEvents,n=this.view.events.find(c=>c._eid===e._eid)||{segments:{}},{minutes:i,cursorCoords:s}=this.minutesAtCursor(t),r=n.segments&&n.segments[e.segment],{date:o,event:a}=this.utils,l=Math.max(i,this.timeFrom+1,(r||n).startTimeMinutes+1);if(n.endTimeMinutes=e.endTimeMinutes=l,this.snapToTime){const c=n.endTimeMinutes+this.snapToTime/2;n.endTimeMinutes=c-c%this.snapToTime}if(r&&(r.endTimeMinutes=n.endTimeMinutes),n.end.setHours(0,n.endTimeMinutes,n.endTimeMinutes===1440?-1:0,0),this.resizeX&&this.isWeekView){n.daysCount=o.countDays(n.start,n.end);const c=this.cellsEl,u=c.offsetWidth/c.childElementCount,h=Math.floor(s.x/u);if(e.startCell===null&&(e.startCell=h-(n.daysCount-1)),e.endCell!==h){e.endCell=h;const d=o.addDays(n.start,h-e.startCell),f=Math.max(o.countDays(n.start,d),1);if(f!==n.daysCount){let g=null;g=f>n.daysCount?a.addEventSegment(n):a.removeEventSegment(n),e.segment=g,n.endTimeMinutes+=.001}}}this.$emit("event-resizing",{_eid:n._eid,end:n.end,endTimeMinutes:n.endTimeMinutes})},eventDragCreation(t){const{dragCreateAnEvent:e}=this.domEvents,{start:n,startCursorY:i,split:s}=e,r=new Date(n),{minutes:o,cursorCoords:{y:a}}=this.minutesAtCursor(t);if(e.event||!(Math.abs(i-a)<this.dragToCreateThreshold))if(e.event){if(r.setHours(0,o,o===1440?-1:0,0),this.snapToTime){let u=60*r.getHours()+r.getMinutes();const h=u+this.snapToTime/2;u=h-h%this.snapToTime,r.setHours(0,u,0,0)}const l=n<r,{event:c}=e;c.start=l?n:r,c.end=l?r:n,c.startTimeMinutes=60*c.start.getHours()+c.start.getMinutes(),c.endTimeMinutes=60*c.end.getHours()+c.end.getMinutes()}else{if(e.event=this.utils.event.createAnEvent(n,1,{split:s}),!e.event)return e.start=null,e.split=null,void(e.event=null);e.event.resizing=!0}},unfocusEvent(){const{focusAnEvent:t,clickHoldAnEvent:e}=this.domEvents,n=this.view.events.find(i=>i._eid===(t._eid||e._eid));t._eid=null,e._eid=null,n&&(n.focused=!1,n.deleting=!1)},cancelDelete(){const{clickHoldAnEvent:t}=this.domEvents;if(t._eid){const e=this.view.events.find(n=>n._eid===t._eid);e&&(e.deleting=!1),t._eid=null,t.timeoutId=null}},onEventTitleBlur(t,e){if(e.title===t.target.innerHTML)return;const n=e.title;e.title=t.target.innerHTML;const i=this.cleanupEvent(e);this.$emit("event-title-change",{event:i,oldTitle:n}),this.$emit("event-change",{event:i,originalEvent:{...i,title:n}})},updateMutableEvents(){const t=this.utils.date;this.mutableEvents=[],this.events.forEach(e=>{const n=typeof e.start=="string"?t.stringToDate(e.start):e.start,i=t.formatDateLite(n),s=t.dateToMinutes(n);let r=null;typeof e.end=="string"&&e.end.includes("24:00")?(r=new Date(e.end.replace(" 24:00","")),r.setHours(23,59,59,0)):r=typeof e.end=="string"?t.stringToDate(e.end):e.end;let o=t.formatDateLite(r),a=t.dateToMinutes(r);a&&a!==1440||(!this.time||typeof e.end=="string"&&e.end.length===10?r.setHours(23,59,59,0):r.setSeconds(r.getSeconds()-1),o=t.formatDateLite(r),a=1440);const l=i!==o;e=Object.assign({...this.utils.event.eventDefaults},e,{_eid:`${this._.uid}_${this.eventIdIncrement++}`,segments:l?{}:null,start:n,startTimeMinutes:s,end:r,endTimeMinutes:a,daysCount:l?t.countDays(n,r):1,class:e.class}),this.mutableEvents.push(e)})},minutesAtCursor(t){return this.utils.cell.minutesAtCursor(t)},createEvent(t,e,n={}){return this.utils.event.createAnEvent(t,e,n)},cleanupEvent(t){return t={...t},["segments","deletable","deleting","titleEditable","resizable","resizing","draggable","dragging","draggingStatic","focused"].forEach(e=>{e in t&&delete t[e]}),t.repeat||delete t.repeat,t},emitWithEvent(t,e){this.$emit(t,this.cleanupEvent(e))},updateSelectedDate(t){if((t=t&&typeof t=="string"?this.utils.date.stringToDate(t):new Date(t))&&t instanceof Date){const{selectedDate:e}=this.view;e&&(this.transitionDirection=e.getTime()>t.getTime()?"left":"right"),t.setHours(0,0,0,0),e&&e.getTime()===t.getTime()||(this.view.selectedDate=t),this.switchView(this.view.id)}this.$emit("update:selected-date",this.view.selectedDate)},getWeekNumber(t){const e=this.utils.date,n=this.firstCellDateWeekNumber+t,i=this.startWeekOnSunday?1:0;return n>52?e.getWeek(e.addDays(this.view.firstCellDate,7*t+i)):n},timeTick(){this.now=new Date,this.timeTickerIds[1]=setTimeout(this.timeTick,6e4)},updateDateTexts(){this.utils.date.updateTexts(this.texts)},alignWithScrollbar(){if(document.getElementById("vuecal-align-with-scrollbar"))return;const t=this.$refs.vuecal.getElementsByClassName("vuecal__scrollbar-check")[0],e=t.offsetWidth-t.children[0].offsetWidth;if(e){const n=document.createElement("style");n.id="vuecal-align-with-scrollbar",n.type="text/css",n.innerHTML=`.vuecal--view-with-time .vuecal__weekdays-headings,.vuecal--view-with-time .vuecal__all-day {padding-right: ${e}px}`,document.head.appendChild(n)}},cellOrSplitHasEvents:(t,e=null)=>t.length&&(!e&&t.length||e&&t.some(n=>n.split===e.id))},created(){this.utils.cell=new dV(this),this.utils.event=new fV(this,this.utils.date),this.loadLocale(this.locale),this.editEvents.drag&&this.loadDragAndDrop(),this.updateMutableEvents(this.events),this.view.id=this.currentView,this.selectedDate?this.updateSelectedDate(this.selectedDate):(this.view.selectedDate=new Date,this.switchView(this.currentView)),this.time&&this.watchRealTime&&(this.timeTickerIds[0]=setTimeout(this.timeTick,1e3*(60-this.now.getSeconds())))},mounted(){const t=this.utils.date,e="ontouchstart"in window,{resize:n,drag:i,create:s,delete:r,title:o}=this.editEvents,a=this.onEventClick&&typeof this.onEventClick=="function";(n||i||s||r||o||a)&&window.addEventListener(e?"touchend":"mouseup",this.onMouseUp),(n||i||s&&this.dragToCreateEvent)&&window.addEventListener(e?"touchmove":"mousemove",this.onMouseMove,{passive:!1}),o&&window.addEventListener("keyup",this.onKeyUp),e&&(this.$refs.vuecal.oncontextmenu=function(u){u.preventDefault(),u.stopPropagation()}),this.hideBody||this.alignWithScrollbar();const l=this.view.startDate,c={view:this.view.id,startDate:l,endDate:this.view.endDate,...this.isMonthView?{firstCellDate:this.view.firstCellDate,lastCellDate:this.view.lastCellDate}:{},events:this.view.events.map(this.cleanupEvent),...this.isWeekView?{week:t.getWeek(this.startWeekOnSunday?t.addDays(l,1):l)}:{}};this.$emit("ready",c),this.ready=!0},beforeUnmount(){const t="ontouchstart"in window;window.removeEventListener(t?"touchmove":"mousemove",this.onMouseMove,{passive:!1}),window.removeEventListener(t?"touchend":"mouseup",this.onMouseUp),window.removeEventListener("keyup",this.onKeyUp),this.timeTickerIds[0]&&clearTimeout(this.timeTickerIds[0]),this.timeTickerIds[1]&&clearTimeout(this.timeTickerIds[1]),this.timeTickerIds=[null,null]},computed:{editEvents(){return this.editableEvents&&typeof this.editableEvents=="object"?{title:!!this.editableEvents.title,drag:!!this.editableEvents.drag,resize:!!this.editableEvents.resize,create:!!this.editableEvents.create,delete:!!this.editableEvents.delete}:{title:!!this.editableEvents,drag:!!this.editableEvents,resize:!!this.editableEvents,create:!!this.editableEvents,delete:!!this.editableEvents}},views(){return{years:{label:this.texts.years,enabled:!this.disableViews.includes("years")},year:{label:this.texts.year,enabled:!this.disableViews.includes("year")},month:{label:this.texts.month,enabled:!this.disableViews.includes("month")},week:{label:this.texts.week,enabled:!this.disableViews.includes("week")},day:{label:this.texts.day,enabled:!this.disableViews.includes("day")}}},currentView(){return this.validateView(this.activeView)},enabledViews(){return Object.keys(this.views).filter(t=>this.views[t].enabled)},hasTimeColumn(){return this.time&&this.isWeekOrDayView},isShortMonthView(){return this.isMonthView&&this.eventsOnMonthView==="short"},firstCellDateWeekNumber(){const t=this.utils.date,e=this.view.firstCellDate;return t.getWeek(this.startWeekOnSunday?t.addDays(e,1):e)},timeCells(){const t=[];for(let e=this.timeFrom,n=this.timeTo;e<n;e+=this.timeStep)t.push({hours:Math.floor(e/60),minutes:e%60,label:this.utils.date.formatTime(e,this.TimeFormat),value:e});return t},TimeFormat(){return this.timeFormat||(this.twelveHour?"h:mm{am}":"HH:mm")},daySplits(){return(this.splitDays.filter(t=>!t.hide)||[]).map((t,e)=>({...t,id:t.id||e+1}))},hasSplits(){return this.daySplits.length&&this.isWeekOrDayView},hasShortEvents(){return this.showAllDayEvents==="short"},cellOrSplitMinWidth(){let t=null;return this.hasSplits&&this.minSplitWidth?t=this.visibleDaysCount*this.minSplitWidth*this.daySplits.length:this.minCellWidth&&this.isWeekView&&(t=this.visibleDaysCount*this.minCellWidth),t},allDayBar(){let t=this.allDayBarHeight||null;return t&&!isNaN(t)&&(t+="px"),{cells:this.viewCells,options:this.$props,label:this.texts.allDay,shortEvents:this.hasShortEvents,daySplits:this.hasSplits&&this.daySplits||[],cellOrSplitMinWidth:this.cellOrSplitMinWidth,height:t}},minTimestamp(){let t=null;return this.minDate&&typeof this.minDate=="string"?t=this.utils.date.stringToDate(this.minDate):this.minDate&&this.minDate instanceof Date&&(t=this.minDate),t?t.getTime():null},maxTimestamp(){let t=null;return this.maxDate&&typeof this.maxDate=="string"?t=this.utils.date.stringToDate(this.maxDate):this.maxDate&&this.minDate instanceof Date&&(t=this.maxDate),t?t.getTime():null},weekDays(){let{weekDays:t,weekDaysShort:e=[]}=this.texts;return t=t.slice(0).map((n,i)=>({label:n,...e.length?{short:e[i]}:{},hide:this.hideWeekends&&i>=5||this.hideWeekdays.length&&this.hideWeekdays.includes(i+1)})),this.startWeekOnSunday&&t.unshift(t.pop()),t},weekDaysInHeader(){return this.isMonthView||this.isWeekView&&!this.minCellWidth&&!(this.hasSplits&&this.minSplitWidth)},months(){return this.texts.months.map(t=>({label:t}))},specialDayHours(){return this.specialHours&&Object.keys(this.specialHours).length?Array(7).fill("").map((t,e)=>{let n=this.specialHours[e+1]||[];return Array.isArray(n)||(n=[n]),t=[],n.forEach(({from:i,to:s,class:r,label:o},a)=>{t[a]={day:e+1,from:[null,void 0].includes(i)?null:1*i,to:[null,void 0].includes(s)?null:1*s,class:r||"",label:o||""}}),t}):{}},viewTitle(){const t=this.utils.date;let e="";const n=this.view.startDate,i=n.getFullYear(),s=n.getMonth();switch(this.view.id){case"years":e=this.texts.years;break;case"year":e=i;break;case"month":e=`${this.months[s].label} ${i}`;break;case"week":{const r=this.view.endDate,o=n.getFullYear();let a=this.texts.months[n.getMonth()];this.xsmall&&(a=a.substring(0,3));let l=`${a} ${o}`;if(r.getMonth()!==n.getMonth()){const c=r.getFullYear();let u=this.texts.months[r.getMonth()];this.xsmall&&(u=u.substring(0,3)),l=o===c?`${a} - ${u} ${o}`:this.small?`${a.substring(0,3)} ${o} - ${u.substring(0,3)} ${c}`:`${a} ${o} - ${u} ${c}`}e=`${this.texts.week} ${t.getWeek(this.startWeekOnSunday?t.addDays(n,1):n)} (${l})`;break}case"day":e=this.utils.date.formatDate(n,this.texts.dateFormat,this.texts)}return e},viewCells(){const t=this.utils.date;let e=[],n=null,i=!1;this.watchRealTime||(this.now=new Date);const s=this.now;switch(this.view.id){case"years":n=this.view.startDate.getFullYear(),e=Array.apply(null,Array(25)).map((r,o)=>{const a=new Date(n+o,0,1),l=new Date(n+o+1,0,1);return l.setSeconds(-1),{startDate:a,formattedDate:t.formatDateLite(a),endDate:l,content:n+o,current:n+o===s.getFullYear()}});break;case"year":n=this.view.startDate.getFullYear(),e=Array.apply(null,Array(12)).map((r,o)=>{const a=new Date(n,o,1),l=new Date(n,o+1,1);return l.setSeconds(-1),{startDate:a,formattedDate:t.formatDateLite(a),endDate:l,content:this.xsmall?this.months[o].label.substr(0,3):this.months[o].label,current:o===s.getMonth()&&n===s.getFullYear()}});break;case"month":{const r=this.view.startDate.getMonth(),o=new Date(this.view.firstCellDate);i=!1,e=Array.apply(null,Array(42)).map((a,l)=>{const c=t.addDays(o,l),u=new Date(c);u.setHours(23,59,59,0);const h=!i&&t.isToday(c)&&!i++;return{startDate:c,formattedDate:t.formatDateLite(c),endDate:u,content:c.getDate(),today:h,outOfScope:c.getMonth()!==r,class:`vuecal__cell--day${c.getDay()||7}`}}),(this.hideWeekends||this.hideWeekdays.length)&&(e=e.filter(a=>{const l=a.startDate.getDay()||7;return!(this.hideWeekends&&l>=6||this.hideWeekdays.length&&this.hideWeekdays.includes(l))}));break}case"week":{i=!1;const r=this.view.startDate,o=this.weekDays;e=o.map((a,l)=>{const c=t.addDays(r,this.startWeekOnSunday?l-1:l),u=new Date(c);u.setHours(23,59,59,0);const h=(c.getDay()||7)-1;return{startDate:c,formattedDate:t.formatDateLite(c),endDate:u,today:!i&&t.isToday(c)&&!i++,specialHours:this.specialDayHours[h]||[]}}).filter((a,l)=>!o[l].hide);break}case"day":{const r=this.view.startDate,o=new Date(this.view.startDate);o.setHours(23,59,59,0);const a=(r.getDay()||7)-1;e=[{startDate:r,formattedDate:t.formatDateLite(r),endDate:o,today:t.isToday(r),specialHours:this.specialDayHours[a]||[]}];break}}return e},visibleDaysCount(){return this.isDayView?1:7-this.weekDays.reduce((t,e)=>t+e.hide,0)},cellWidth(){return 100/this.visibleDaysCount},cssClasses(){const{resizeAnEvent:t,dragAnEvent:e,dragCreateAnEvent:n}=this.domEvents;return{[`vuecal--${this.view.id}-view`]:!0,[`vuecal--${this.locale}`]:this.locale,"vuecal--no-time":!this.time,"vuecal--view-with-time":this.hasTimeColumn,"vuecal--week-numbers":this.showWeekNumbers&&this.isMonthView,"vuecal--twelve-hour":this.twelveHour,"vuecal--click-to-navigate":this.clickToNavigate,"vuecal--hide-weekends":this.hideWeekends,"vuecal--split-days":this.hasSplits,"vuecal--sticky-split-labels":this.hasSplits&&this.stickySplitLabels,"vuecal--overflow-x":this.minCellWidth&&this.isWeekView||this.hasSplits&&this.minSplitWidth,"vuecal--small":this.small,"vuecal--xsmall":this.xsmall,"vuecal--resizing-event":t._eid,"vuecal--drag-creating-event":n.event,"vuecal--dragging-event":e._eid,"vuecal--events-on-month-view":this.eventsOnMonthView,"vuecal--short-events":this.isMonthView&&this.eventsOnMonthView==="short","vuecal--has-touch":typeof window<"u"&&"ontouchstart"in window}},isYearsOrYearView(){return["years","year"].includes(this.view.id)},isYearsView(){return this.view.id==="years"},isYearView(){return this.view.id==="year"},isMonthView(){return this.view.id==="month"},isWeekOrDayView(){return["week","day"].includes(this.view.id)},isWeekView(){return this.view.id==="week"},isDayView(){return this.view.id==="day"}},watch:{events:{handler(t,e){this.updateMutableEvents(t),this.addEventsToView()},deep:!0},locale(t){this.loadLocale(t)},selectedDate(t){this.updateSelectedDate(t)},activeView(t){this.switchView(t)}}},bF=Jr(_F,[["render",function(t,e,n,i,s,r){const o=xe("vuecal-header"),a=xe("all-day-bar"),l=xe("weekdays-headings"),c=xe("vuecal-cell");return C(),V("div",{class:Oe(["vuecal__flex vuecal",r.cssClasses]),column:"",ref:"vuecal",lang:n.locale},[ee(o,{options:t.$props,"edit-events":r.editEvents,"view-props":{views:r.views,weekDaysInHeader:r.weekDaysInHeader},"week-days":r.weekDays,"has-splits":r.hasSplits,"day-splits":r.daySplits,"switch-to-narrower-view":r.switchToNarrowerView},ph({"arrow-prev":Ie(()=>[ke(t.$slots,"arrow-prev",{},()=>[BV,jV,qV])]),"arrow-next":Ie(()=>[ke(t.$slots,"arrow-next",{},()=>[HV,WV,GV])]),"today-button":Ie(()=>[ke(t.$slots,"today-button",{},()=>[A("span",KV,pe(s.texts.today),1)])]),title:Ie(()=>[ke(t.$slots,"title",{title:r.viewTitle,view:s.view},()=>[Tt(pe(r.viewTitle),1)])]),_:2},[t.$slots["weekday-heading"]?{name:"weekday-heading",fn:Ie(({heading:u,view:h})=>[ke(t.$slots,"weekday-heading",{heading:u,view:h})])}:void 0,t.$slots["split-label"]?{name:"split-label",fn:Ie(({split:u})=>[ke(t.$slots,"split-label",{split:u,view:s.view.id})])}:void 0]),1032,["options","edit-events","view-props","week-days","has-splits","day-splits","switch-to-narrower-view"]),n.hideBody?re("",!0):(C(),V("div",zV,[ee(Pr,{name:`slide-fade--${s.transitionDirection}`,appear:n.transitions},{default:Ie(()=>[(C(),V("div",{class:"vuecal__flex",style:{"min-width":"100%"},key:!!n.transitions&&s.view.id,column:""},[n.showAllDayEvents&&r.hasTimeColumn&&(!r.cellOrSplitMinWidth||r.isDayView&&!n.minSplitWidth)?(C(),ft(a,xm(bh({key:0},r.allDayBar)),{event:Ie(({event:u,view:h})=>[ke(t.$slots,"event",{view:h,event:u},()=>[r.editEvents.title&&u.titleEditable?(C(),V("div",{key:0,class:"vuecal__event-title vuecal__event-title--edit",contenteditable:"",onBlur:d=>r.onEventTitleBlur(d,u),innerHTML:u.title},null,40,YV)):u.title?(C(),V("div",{key:1,class:"vuecal__event-title",innerHTML:u.title},null,8,QV)):re("",!0),!u.content||r.hasShortEvents||r.isShortMonthView?re("",!0):(C(),V("div",{key:2,class:"vuecal__event-content",innerHTML:u.content},null,8,JV))])]),_:3},16)):re("",!0),A("div",{class:Oe(["vuecal__bg",{vuecal__flex:!r.hasTimeColumn}]),column:""},[A("div",XV,[r.hasTimeColumn?(C(),V("div",ZV,[n.showAllDayEvents&&r.cellOrSplitMinWidth&&(!r.isDayView||n.minSplitWidth)?(C(),V("div",{key:0,class:"vuecal__all-day-text",style:Rt({height:r.allDayBar.height})},[A("span",null,pe(s.texts.allDay),1)],4)):re("",!0),(C(!0),V(De,null,Lt(r.timeCells,(u,h)=>(C(),V("div",{class:"vuecal__time-cell",key:h,style:Rt(`height: ${n.timeCellHeight}px`)},[ke(t.$slots,"time-cell",{hours:u.hours,minutes:u.minutes},()=>[eF,A("span",tF,pe(u.label),1)])],4))),128))])):re("",!0),n.showWeekNumbers&&r.isMonthView?(C(),V("div",nF,[(C(),V(De,null,Lt(6,u=>A("div",{class:"vuecal__flex vuecal__week-number-cell",key:u,grow:""},[ke(t.$slots,"week-number-cell",{week:r.getWeekNumber(u-1)},()=>[Tt(pe(r.getWeekNumber(u-1)),1)])])),64))])):re("",!0),A("div",{class:Oe(["vuecal__flex vuecal__cells",`${s.view.id}-view`]),grow:"",wrap:!r.cellOrSplitMinWidth||!r.isWeekView,column:!!r.cellOrSplitMinWidth},[r.cellOrSplitMinWidth&&r.isWeekView?(C(),ft(l,{key:0,"transition-direction":s.transitionDirection,"week-days":r.weekDays,"switch-to-narrower-view":r.switchToNarrowerView,style:Rt(r.cellOrSplitMinWidth?`min-width: ${r.cellOrSplitMinWidth}px`:"")},ph({_:2},[t.$slots["weekday-heading"]?{name:"weekday-heading",fn:Ie(({heading:u,view:h})=>[ke(t.$slots,"weekday-heading",{heading:u,view:h})])}:void 0,t.$slots["split-label"]?{name:"split-label",fn:Ie(({split:u})=>[ke(t.$slots,"split-label",{split:u,view:s.view.id})])}:void 0]),1032,["transition-direction","week-days","switch-to-narrower-view","style"])):r.hasSplits&&n.stickySplitLabels&&n.minSplitWidth?(C(),V("div",{key:1,class:"vuecal__flex vuecal__split-days-headers",style:Rt(r.cellOrSplitMinWidth?`min-width: ${r.cellOrSplitMinWidth}px`:"")},[(C(!0),V(De,null,Lt(r.daySplits,(u,h)=>(C(),V("div",{class:Oe(["day-split-header",u.class||!1]),key:h},[ke(t.$slots,"split-label",{split:u,view:s.view.id},()=>[Tt(pe(u.label),1)])],2))),128))],4)):re("",!0),n.showAllDayEvents&&r.hasTimeColumn&&(r.isWeekView&&r.cellOrSplitMinWidth||r.isDayView&&r.hasSplits&&n.minSplitWidth)?(C(),ft(a,xm(bh({key:2},r.allDayBar)),{event:Ie(({event:u,view:h})=>[ke(t.$slots,"event",{view:h,event:u},()=>[r.editEvents.title&&u.titleEditable?(C(),V("div",{key:0,class:"vuecal__event-title vuecal__event-title--edit",contenteditable:"",onBlur:d=>r.onEventTitleBlur(d,u),innerHTML:u.title},null,40,sF)):u.title?(C(),V("div",{key:1,class:"vuecal__event-title",innerHTML:u.title},null,8,rF)):re("",!0),!u.content||r.hasShortEvents||r.isShortMonthView?re("",!0):(C(),V("div",{key:2,class:"vuecal__event-content",innerHTML:u.content},null,8,oF))])]),_:3},16)):re("",!0),A("div",{class:"vuecal__flex",ref:u=>s.cellsEl=u,grow:"",wrap:!r.cellOrSplitMinWidth||!r.isWeekView,style:Rt(r.cellOrSplitMinWidth?`min-width: ${r.cellOrSplitMinWidth}px`:"")},[(C(!0),V(De,null,Lt(r.viewCells,(u,h)=>(C(),ft(c,{key:h,options:t.$props,"edit-events":r.editEvents,data:u,"cell-width":n.hideWeekdays.length&&(r.isWeekView||r.isMonthView)&&r.cellWidth,"min-timestamp":r.minTimestamp,"max-timestamp":r.maxTimestamp,"cell-splits":r.hasSplits&&r.daySplits||[]},{"cell-content":Ie(({events:d,split:f,selectCell:g})=>[ke(t.$slots,"cell-content",{cell:u,view:s.view,goNarrower:g,events:d},()=>[f&&!n.stickySplitLabels?(C(),V("div",{key:0,class:"split-label",innerHTML:f.label},null,8,lF)):re("",!0),u.content?(C(),V("div",{key:1,class:"vuecal__cell-date",innerHTML:u.content},null,8,cF)):re("",!0),(r.isMonthView&&!n.eventsOnMonthView||r.isYearsOrYearView&&n.eventsCountOnYearView)&&d.length?(C(),V("div",uF,[ke(t.$slots,"events-count",{view:s.view,events:d},()=>[Tt(pe(d.length),1)])])):re("",!0),!r.cellOrSplitHasEvents(d,f)&&r.isWeekOrDayView?(C(),V("div",hF,[ke(t.$slots,"no-event",{},()=>[Tt(pe(s.texts.noEvent),1)])])):re("",!0)])]),event:Ie(({event:d,view:f})=>[ke(t.$slots,"event",{view:f,event:d},()=>[r.editEvents.title&&d.titleEditable?(C(),V("div",{key:0,class:"vuecal__event-title vuecal__event-title--edit",contenteditable:"",onBlur:g=>r.onEventTitleBlur(g,d),innerHTML:d.title},null,40,dF)):d.title?(C(),V("div",{key:1,class:"vuecal__event-title",innerHTML:d.title},null,8,fF)):re("",!0),!n.time||d.allDay||r.isMonthView&&(d.allDay||n.showAllDayEvents==="short")||r.isShortMonthView?re("",!0):(C(),V("div",mF,[Tt(pe(s.utils.date.formatTime(d.start,r.TimeFormat)),1),d.endTimeMinutes?(C(),V("span",pF,"\xA0- "+pe(s.utils.date.formatTime(d.end,r.TimeFormat,null,!0)),1)):re("",!0),d.daysCount>1&&(d.segments[u.formattedDate]||{}).isFirstDay?(C(),V("small",gF,"\xA0+"+pe(d.daysCount-1)+pe((s.texts.day[0]||"").toLowerCase()),1)):re("",!0)])),!d.content||r.isMonthView&&d.allDay&&n.showAllDayEvents==="short"||r.isShortMonthView?re("",!0):(C(),V("div",{key:3,class:"vuecal__event-content",innerHTML:d.content},null,8,vF))])]),"no-event":Ie(()=>[ke(t.$slots,"no-event",{},()=>[Tt(pe(s.texts.noEvent),1)])]),_:2},1032,["options","edit-events","data","cell-width","min-timestamp","max-timestamp","cell-splits"]))),128))],12,aF)],10,iF)])],2)]))]),_:3},8,["name","appear"]),s.ready?re("",!0):(C(),V("div",yF,wF))]))],10,UV)}]]);const IF={data(){return{events:[]}},setup(){return{gameStore:bc()}},name:"Calendar",components:{VueCal:bF},methods:{customEventsCount:(t,e)=>t?t.filter(n=>n.class===e).length:0,onEventClick(t){console.log("event selected ",t)},logEvents(t,e){console.log(e)}},async beforeMount(){console.log(this.gameStore.games);const t=await this.gameStore.getAllGames();console.log("events ",this.events),t.forEach(e=>{this.events.push({start:e.date,end:e.date,nameHome:e.nameHome,league:e.league,nameAway:e.nameAway,class:e.league.toUpperCase()})})}},EF=A("i",{class:"fa fa-crosshairs"},null,-1),TF={key:0,class:"vuecal__cell-events-count shl"},SF={key:1,class:"vuecal__cell-events-count chl"},DF={key:2,class:"vuecal__cell-events-count other"},AF={key:3,class:"vuecal__cell-events-count ha"};function kF(t,e,n,i,s,r){const o=xe("vue-cal");return C(),ft(o,{"disable-views":["years","year","week","day"],class:"",locale:"en","active-view":"month","hide-view-selector":"","on-event-click":r.onEventClick,"today-button":"",onCellClick:e[0]||(e[0]=a=>(r.logEvents("cell-click",a),t.$emit("date-selected",a))),events:s.events},{"today-button":Ie(()=>[EF]),"events-count":Ie(({events:a})=>[r.customEventsCount(a,"SHL")?(C(),V("span",TF,pe(r.customEventsCount(a,"SHL")),1)):re("",!0),r.customEventsCount(a,"CHL")?(C(),V("span",SF,pe(r.customEventsCount(a,"CHL")),1)):re("",!0),r.customEventsCount(a,"other")?(C(),V("span",DF,pe(r.customEventsCount(a,"other")),1)):re("",!0),r.customEventsCount(a,"HA")?(C(),V("span",AF,pe(r.customEventsCount(a,"HA")),1)):re("",!0)]),_:1},8,["on-event-click","events"])}const CF=vi(IF,[["render",kF]]),OF={name:"LoginForm",data(){return{hidePassword:!0,loginSchema:{email:"required|min:3|max:100|email",password:"required|min:9|max:100|excluded:password"},login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-blue-500",login_alert_msg:"Please wait! We are logging you in."}},methods:{check(t){t.target.value?t.target.classList.add("notEmptyInput"):t.target.classList.remove("notEmptyInput")},...Fd(zs,["authenticate"]),async login(t){this.login_show_alert=!0,this.login_in_submission=!0,this.login_alert_variant="bg-blue-500 dark:bg-blue-700",this.login_alert_msg="Please wait! We are logging you in.";try{await this.authenticate(t)}catch{this.login_in_submission=!1,this.login_alert_variant="bg-red-500 dark:bg-red-700",this.login_alert_msg="Invalid login details.";return}this.login_alert_variant="bg-green-500 dark:bg-green-700",this.login_alert_msg="Success! You are now logged in.",this.login_in_submission=!0,setTimeout(()=>{window.location.reload()},1e3)},revealPassword(t){this.hidePassword?(t.target.classList.remove("fa-eye-slash"),t.target.classList.add("fa-eye"),t.target.previousElementSibling.type="password",this.hidePassword=!1):(t.target.classList.add("fa-eye-slash"),t.target.classList.remove("fa-eye"),t.target.previousElementSibling.type="text",this.hidePassword=!0)}}},NF=A("input",{autocomplete:"off",name:"hidden",type:"text",style:{display:"none"}},null,-1),xF={class:"input"},MF=A("label",{class:"input-label"},"Email ",-1),RF={class:"input"},PF=A("label",{class:"input-label"},"Password",-1),LF=["disabled"],VF={key:0},FF={key:1},$F=A("i",{class:"fas fa-duotone fa-spinner animate-spin-slow mr-2"},null,-1),UF=Tt(" Logging in ..."),BF=[$F,UF];function jF(t,e,n,i,s,r){const o=xe("ErrorMessage"),a=xe("vee-field"),l=xe("vee-form");return C(),ft(l,{onSubmit:r.login,"validation-schema":s.loginSchema,autocomplete:"off"},{default:Ie(()=>[NF,s.login_show_alert?(C(),V("div",{key:0,class:Oe(s.login_alert_variant)},pe(s.login_alert_msg),3)):re("",!0),A("div",xF,[ee(o,{name:"email",class:"error"}),ee(a,{type:"email",name:"email",class:"input-field",onInput:r.check,autocomplete:"off",value:" "},null,8,["onInput"]),MF]),A("div",RF,[ee(o,{name:"password",class:"error"}),ee(a,{type:"password",name:"password",class:"input-field",onInput:r.check},null,8,["onInput"]),A("i",{class:"fas fa-solid fa-eye eye-icon",onClick:e[0]||(e[0]=(...c)=>r.revealPassword&&r.revealPassword(...c))}),PF]),A("button",{type:"submit",disabled:s.login_in_submission},[s.login_in_submission?(C(),V("span",FF,BF)):(C(),V("span",VF,"Login"))],8,LF)]),_:1},8,["onSubmit","validation-schema"])}const qF=vi(OF,[["render",jF]]),HF={setup(){return{userStore:zs()}},name:"RegisterForm",data(){return{hidePassword:!0,schema:{name:"required|min:3|max:100|alpha_spaces",email:"required|min:3|max:100|email",password:"required|min:9|max:100|excluded:password",confirm_password:"passwords_mismatch:@password"},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Your account is being created."}},computed:{},methods:{check(t){t.target.value?t.target.classList.add("notEmptyInput"):t.target.classList.remove("notEmptyInput")},...Fd(zs,{createUser:"register"}),async register(t){this.reg_show_alert=!0,this.reg_in_submission=!0,this.reg_alert_variant="bg-blue-500 dark:bg-blue-700",this.reg_alert_msg="Please wait! Your account is being created.";try{console.log("trying to register"),console.log(this.userStore),await this.userStore.register(t)}catch{this.reg_in_submission=!1,this.reg_alert_variant="bg-red-700",this.reg_alert_msg="An unexpected error occurred! Please try again later.";return}this.reg_alert_variant="bg-green-500 dark:bg-green-700",this.reg_alert_msg="Success! Your account has been created!",setTimeout(()=>{window.location.reload()},800)},revealPassword(t){this.hidePassword?(t.target.classList.remove("fa-eye-slash"),t.target.classList.add("fa-eye"),t.target.previousElementSibling.type="password",this.hidePassword=!1):(t.target.classList.add("fa-eye-slash"),t.target.classList.remove("fa-eye"),t.target.previousElementSibling.type="text",this.hidePassword=!0)}}},WF={class:"input"},GF=A("label",{class:"input-label"},"Name",-1),KF={class:"input"},zF=A("label",{class:"input-label"},"Email",-1),YF={class:"input"},QF=A("label",{class:"input-label"}," Password ",-1),JF={class:"input"},XF=A("label",{class:"input-label"},"Confirm Password",-1),ZF=["disabled"];function e$(t,e,n,i,s,r){const o=xe("ErrorMessage"),a=xe("vee-field"),l=xe("vee-form");return C(),ft(l,{"validation-schema":s.schema,onSubmit:r.register},{default:Ie(()=>[s.reg_show_alert?(C(),V("div",{key:0,class:Oe(s.reg_alert_variant)},pe(s.reg_alert_msg),3)):re("",!0),A("div",WF,[ee(o,{class:"error",name:"name"}),ee(a,{onInput:r.check,class:"input-field",type:"text",name:"name"},null,8,["onInput"]),GF]),A("div",KF,[ee(o,{name:"email",class:"error"}),ee(a,{onInput:r.check,type:"email",name:"email",class:"input-field"},null,8,["onInput"]),zF]),A("div",YF,[ee(o,{name:"confirm_password",class:"error"}),ee(a,{onInput:r.check,name:"password",type:"password",class:"input-field password-field"},null,8,["onInput"]),A("i",{class:"fas fa-solid fa-eye eye-icon",onClick:e[0]||(e[0]=(...c)=>r.revealPassword&&r.revealPassword(...c))}),QF]),A("div",JF,[ee(o,{name:"confirm_password",class:"error"}),ee(a,{onInput:r.check,name:"confirm_password",type:"password",class:"input-field password-field"},null,8,["onInput"]),A("i",{class:"fas fa-solid fa-eye eye-icon",onClick:e[1]||(e[1]=(...c)=>r.revealPassword&&r.revealPassword(...c))}),XF]),A("button",{type:"submit",class:"submit-btn",disabled:s.reg_in_submission}," Register new account ",8,ZF)]),_:1},8,["validation-schema","onSubmit"])}const t$=vi(HF,[["render",e$]]),n$={name:"AppAuth",components:{LoginForm:qF,RegisterForm:t$},data(){return{tab:"login"}},methods:{},computed:{...Vy(_c,["hiddenClass"]),...$d(_c,{modalVisibility:"isOpen"})}},i$={class:"login-top"},s$=A("h2",null,"Your Account",-1),r$=A("i",{class:"fas fa-times"},null,-1),o$=[r$],a$={class:"login-top"};function l$(t,e,n,i,s,r){const o=xe("LoginForm"),a=xe("RegisterForm");return C(),V("div",{class:Oe([t.hiddenClass,"modal"])},[A("div",i$,[s$,A("div",{onClick:e[0]||(e[0]=l=>t.modalVisibility=!1)},o$)]),A("div",a$,[A("ul",null,[A("li",null,[A("a",{onClick:e[1]||(e[1]=ht(l=>s.tab="login",["prevent"])),class:Oe({"hover:text-white text-white bg-blue-600 dark:bg-orange-700":s.tab==="login","hover:text-blue-600 dark:hover:text-orange-600":s.tab==="register"}),href:"#"},"Login",2)]),A("li",null,[A("a",{onClick:e[2]||(e[2]=ht(l=>s.tab="register",["prevent"])),class:Oe({"hover:text-white text-white bg-blue-600 dark:bg-orange-700":s.tab==="register","hover:text-blue-600 dark:hover:text-orange-600":s.tab==="login"}),href:"#"},"Register",2)])])]),s.tab==="login"?(C(),ft(o,{key:0})):(C(),ft(a,{key:1}))],2)}const c$=vi(n$,[["render",l$]]),u$={name:"App",data(){return{addNewTeamToggle:!1,addNewGameToggle:!1,selectedDay:new Date}},components:{Menu:YP,Calendar:CF,AppAuth:c$,AddTeamForm:_L,AddEventForm:aV,SelectedDay:OL},computed:{...$d(zs,["userLoggedIn"]),...Ly(_c,zs)},created(){na.currentUser&&(this.userLoggedIn=!0)},methods:{addNewTeam(t){console.log("addNewTeam"),console.log(this.addNewTeamToggle),this.addNewTeamToggle=!this.addNewTeamToggle,this.addNewTeamToggle&&this.addNewGameToggle&&(this.addNewGameToggle=!this.addNewGameToggle),this.modalStore.isOpen&&(this.modalStore.isOpen=!1)},addNewGame(t){console.log("addNewGame"),console.log(this.addNewGameToggle),this.addNewGameToggle=!this.addNewGameToggle,this.addNewTeamToggle&&this.addNewGameToggle&&(this.addNewTeamToggle=!this.addNewTeamToggle),this.modalStore.isOpen&&(this.modalStore.isOpen=!1)},dateSelected(t){console.log(t),this.selectedDay=t},toggleAuthModal(){console.log("hi"),(this.addNewTeamToggle||this.addNewGameToggle)&&(this.addNewTeamToggle=!1,this.addNewGameToggle=!1),this.modalStore.isOpen=!this.modalStore.isOpen},signOut(){this.userStore.signOut()}}},h$={class:"day"};function d$(t,e,n,i,s,r){const o=xe("Menu"),a=xe("AppAuth"),l=xe("AddEventForm"),c=xe("AddTeamForm"),u=xe("Calendar"),h=xe("SelectedDay");return C(),V(De,null,[ee(o,{onAddNewTeam:r.addNewTeam,onAddNewGame:r.addNewGame,onToggleAuth:r.toggleAuthModal},null,8,["onAddNewTeam","onAddNewGame","onToggleAuth"]),ee(a),A("div",null,[s.addNewGameToggle?(C(),ft(l,{key:0,class:"modal",onCloseGame:r.addNewGame},null,8,["onCloseGame"])):re("",!0)]),A("div",null,[s.addNewTeamToggle?(C(),ft(c,{key:0,class:"modal",onCloseTeam:r.addNewTeam},null,8,["onCloseTeam"])):re("",!0)]),A("main",null,[A("div",null,[ee(u,{onDateSelected:r.dateSelected},null,8,["onDateSelected"])]),A("div",h$,[ee(h,{day:s.selectedDay},null,8,["day"])])])],64)}const f$=vi(u$,[["render",d$]]);let No;na.onAuthStateChanged(()=>{No||(No=rS(f$),No.use(lS()),No.use(cD),No.mount("#app"))});
