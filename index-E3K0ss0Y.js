const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AboutView-w4rtm-Y2.js","./AboutView-DhlS7raN.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Oa(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const nt={},rr=[],Sn=()=>{},Vu=()=>!1,Zs=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Fa=n=>n.startsWith("onUpdate:"),St=Object.assign,Ba=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zh=Object.prototype.hasOwnProperty,Je=(n,e)=>Zh.call(n,e),Be=Array.isArray,sr=n=>es(n)==="[object Map]",ku=n=>es(n)==="[object Set]",El=n=>es(n)==="[object Date]",He=n=>typeof n=="function",dt=n=>typeof n=="string",hn=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Wu=n=>(et(n)||He(n))&&He(n.then)&&He(n.catch),Xu=Object.prototype.toString,es=n=>Xu.call(n),Jh=n=>es(n).slice(8,-1),qu=n=>es(n)==="[object Object]",za=n=>dt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Js=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qh=/-\w/g,ai=Js(n=>n.replace(Qh,e=>e.slice(1).toUpperCase())),ed=/\B([A-Z])/g,Ui=Js(n=>n.replace(ed,"-$1").toLowerCase()),ju=Js(n=>n.charAt(0).toUpperCase()+n.slice(1)),mo=Js(n=>n?`on${ju(n)}`:""),ri=(n,e)=>!Object.is(n,e),go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},td=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let yl;const Qs=()=>yl||(yl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ha(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=dt(i)?sd(i):Ha(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(dt(n)||et(n))return n}const nd=/;(?![^(]*\))/g,id=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function sd(n){const e={};return n.replace(rd,"").split(nd).forEach(t=>{if(t){const i=t.split(id);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ga(n){let e="";if(dt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=Ga(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=Oa(od);function $u(n){return!!n||n===""}function ld(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Va(n[i],e[i]);return t}function Va(n,e){if(n===e)return!0;let t=El(n),i=El(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=hn(n),i=hn(e),t||i)return n===e;if(t=Be(n),i=Be(e),t||i)return t&&i?ld(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Va(n[a],e[a]))return!1}}return String(n)===String(e)}const Ku=n=>!!(n&&n.__v_isRef===!0),Dr=n=>dt(n)?n:n==null?"":Be(n)||et(n)&&(n.toString===Xu||!He(n.toString))?Ku(n)?Dr(n.value):JSON.stringify(n,Zu,2):String(n),Zu=(n,e)=>Ku(e)?Zu(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[_o(i,s)+" =>"]=r,t),{})}:ku(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_o(t))}:hn(e)?_o(e):et(e)&&!Be(e)&&!qu(e)?String(e):e,_o=(n,e="")=>{var t;return hn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Ft;class Ju{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ft,!e&&Ft&&(this.index=(Ft.scopes||(Ft.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ft;try{return Ft=this,e()}finally{Ft=t}}}on(){++this._on===1&&(this.prevScope=Ft,Ft=this)}off(){this._on>0&&--this._on===0&&(Ft=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cd(n){return new Ju(n)}function ud(){return Ft}let tt;const vo=new WeakSet;class Qu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ft&&Ft.active&&Ft.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vo.has(this)&&(vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Tl(this),nf(this);const e=tt,t=un;tt=this,un=!0;try{return this.fn()}finally{rf(this),tt=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xa(e);this.deps=this.depsTail=void 0,Tl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ca(this)&&this.run()}get dirty(){return ca(this)}}let ef=0,Or,Fr;function tf(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Or,Or=n}function ka(){ef++}function Wa(){if(--ef>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Or;){let e=Or;for(Or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Xa(i),fd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ca(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wr)||(n.globalVersion=Wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ca(n))))return;n.flags|=2;const e=n.dep,t=tt,i=un;tt=n,un=!0;try{nf(n);const r=n.fn(n._value);(e.version===0||ri(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{tt=t,un=i,rf(n),n.flags&=-3}}function Xa(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Xa(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const of=[];function Vn(){of.push(un),un=!1}function kn(){const n=of.pop();un=n===void 0?!0:n}function Tl(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=tt;tt=void 0;try{e()}finally{tt=t}}}let Wr=0;class hd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!tt||!un||tt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==tt)t=this.activeLink=new hd(tt,this),tt.deps?(t.prevDep=tt.depsTail,tt.depsTail.nextDep=t,tt.depsTail=t):tt.deps=tt.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=tt.depsTail,t.nextDep=void 0,tt.depsTail.nextDep=t,tt.depsTail=t,tt.deps===t&&(tt.deps=i)}return t}trigger(e){this.version++,Wr++,this.notify(e)}notify(e){ka();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Wa()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const ua=new WeakMap,Ti=Symbol(""),fa=Symbol(""),Xr=Symbol("");function bt(n,e,t){if(un&&tt){let i=ua.get(n);i||ua.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new qa),r.map=i,r.key=t),r.track()}}function Fn(n,e,t,i,r,s){const a=ua.get(n);if(!a){Wr++;return}const o=l=>{l&&l.trigger()};if(ka(),e==="clear")a.forEach(o);else{const l=Be(n),c=l&&za(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Xr||!hn(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Xr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ti)),sr(n)&&o(a.get(fa)));break;case"delete":l||(o(a.get(Ti)),sr(n)&&o(a.get(fa)));break;case"set":sr(n)&&o(a.get(Ti));break}}Wa()}function Ni(n){const e=Ze(n);return e===n?e:(bt(e,"iterate",Xr),fn(n)?e:e.map(Wn))}function ja(n){return bt(n=Ze(n),"iterate",Xr),n}function Jn(n,e){return li(n)?qr(or(n)?Wn(e):e):Wn(e)}const dd={__proto__:null,[Symbol.iterator](){return xo(this,Symbol.iterator,n=>Jn(this,n))},concat(...n){return Ni(this).concat(...n.map(e=>Be(e)?Ni(e):e))},entries(){return xo(this,"entries",n=>(n[1]=Jn(this,n[1]),n))},every(n,e){return An(this,"every",n,e,void 0,arguments)},filter(n,e){return An(this,"filter",n,e,t=>t.map(i=>Jn(this,i)),arguments)},find(n,e){return An(this,"find",n,e,t=>Jn(this,t),arguments)},findIndex(n,e){return An(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return An(this,"findLast",n,e,t=>Jn(this,t),arguments)},findLastIndex(n,e){return An(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return An(this,"forEach",n,e,void 0,arguments)},includes(...n){return Mo(this,"includes",n)},indexOf(...n){return Mo(this,"indexOf",n)},join(n){return Ni(this).join(n)},lastIndexOf(...n){return Mo(this,"lastIndexOf",n)},map(n,e){return An(this,"map",n,e,void 0,arguments)},pop(){return yr(this,"pop")},push(...n){return yr(this,"push",n)},reduce(n,...e){return bl(this,"reduce",n,e)},reduceRight(n,...e){return bl(this,"reduceRight",n,e)},shift(){return yr(this,"shift")},some(n,e){return An(this,"some",n,e,void 0,arguments)},splice(...n){return yr(this,"splice",n)},toReversed(){return Ni(this).toReversed()},toSorted(n){return Ni(this).toSorted(n)},toSpliced(...n){return Ni(this).toSpliced(...n)},unshift(...n){return yr(this,"unshift",n)},values(){return xo(this,"values",n=>Jn(this,n))}};function xo(n,e,t){const i=ja(n),r=i[e]();return i!==n&&!fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const pd=Array.prototype;function An(n,e,t,i,r,s){const a=ja(n),o=a!==n&&!fn(n),l=a[e];if(l!==pd[e]){const f=l.apply(n,s);return o?Wn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Jn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function bl(n,e,t,i){const r=ja(n);let s=t;return r!==n&&(fn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Jn(n,o),l,n)}),r[e](s,...i)}function Mo(n,e,t){const i=Ze(n);bt(i,"iterate",Xr);const r=i[e](...t);return(r===-1||r===!1)&&Ka(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function yr(n,e,t=[]){Vn(),ka();const i=Ze(n)[e].apply(n,t);return Wa(),kn(),i}const md=Oa("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hn));function gd(n){hn(n)||(n=String(n));const e=Ze(this);return bt(e,"has",n),e.hasOwnProperty(n)}class cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ad:df:s?hf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Be(e);if(!r){let l;if(a&&(l=dd[t]))return l;if(t==="hasOwnProperty")return gd}const o=Reflect.get(e,t,At(e)?e:i);if((hn(t)?lf.has(t):md(t))||(r||bt(e,"get",t),s))return o;if(At(o)){const l=a&&za(t)?o:o.value;return r&&et(l)?da(l):l}return et(o)?r?da(o):eo(o):o}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Be(e)&&za(t);if(!this._isShallow){const c=li(s);if(!fn(i)&&!li(i)&&(s=Ze(s),i=Ze(i)),!a&&At(s)&&!At(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Je(e,t),l=Reflect.set(e,t,i,At(e)?e:r);return e===Ze(r)&&(o?ri(i,s)&&Fn(e,"set",t,i):Fn(e,"add",t,i)),l}deleteProperty(e,t){const i=Je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Fn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!hn(t)||!lf.has(t))&&bt(e,"has",t),i}ownKeys(e){return bt(e,"iterate",Be(e)?"length":Ti),Reflect.ownKeys(e)}}class _d extends cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vd=new uf,xd=new _d,Md=new uf(!0);const ha=n=>n,cs=n=>Reflect.getPrototypeOf(n);function Sd(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=sr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ha:e?qr:Wn;return!e&&bt(s,"iterate",l?fa:Ti),St(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function us(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ed(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(ri(r,o)&&bt(a,"get",r),bt(a,"get",o));const{has:l}=cs(a),c=e?ha:n?qr:Wn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&bt(Ze(r),"iterate",Ti),r.size},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(ri(r,o)&&bt(a,"has",r),bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?ha:n?qr:Wn;return!n&&bt(l,"iterate",Ti),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return St(t,n?{add:us("add"),set:us("set"),delete:us("delete"),clear:us("clear")}:{add(r){!e&&!fn(r)&&!li(r)&&(r=Ze(r));const s=Ze(this);return cs(s).has.call(s,r)||(s.add(r),Fn(s,"add",r,r)),this},set(r,s){!e&&!fn(s)&&!li(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=cs(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?ri(s,u)&&Fn(a,"set",r,s):Fn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=cs(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Fn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&Fn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sd(r,n,e)}),t}function Ya(n,e){const t=Ed(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Je(t,r)&&r in i?t:i,r,s)}const yd={get:Ya(!1,!1)},Td={get:Ya(!1,!0)},bd={get:Ya(!0,!1)};const ff=new WeakMap,hf=new WeakMap,df=new WeakMap,Ad=new WeakMap;function wd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rd(n){return n.__v_skip||!Object.isExtensible(n)?0:wd(Jh(n))}function eo(n){return li(n)?n:$a(n,!1,vd,yd,ff)}function pf(n){return $a(n,!1,Md,Td,hf)}function da(n){return $a(n,!0,xd,bd,df)}function $a(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Rd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function or(n){return li(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function li(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function Ka(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function mf(n){return!Je(n,"__v_skip")&&Object.isExtensible(n)&&Yu(n,"__v_skip",!0),n}const Wn=n=>et(n)?eo(n):n,qr=n=>et(n)?da(n):n;function At(n){return n?n.__v_isRef===!0:!1}function Br(n){return gf(n,!1)}function Cd(n){return gf(n,!0)}function gf(n,e){return At(n)?n:new Pd(n,e)}class Pd{constructor(e,t){this.dep=new qa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:Wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||li(e);e=i?e:Ze(e),ri(e,t)&&(this._rawValue=e,this._value=i?e:Wn(e),this.dep.trigger())}}function ar(n){return At(n)?n.value:n}const Ld={get:(n,e,t)=>e==="__v_raw"?n:ar(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return At(r)&&!At(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _f(n){return or(n)?n:new Proxy(n,Ld)}class Dd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new qa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&tt!==this)return tf(this,!0),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ud(n,e,t=!1){let i,r;return He(n)?i=n:(i=n.get,r=n.set),new Dd(i,r,t)}const fs={},Gs=new WeakMap;let xi;function Id(n,e=!1,t=xi){if(t){let i=Gs.get(t);i||Gs.set(t,i=[]),i.push(n)}}function Nd(n,e,t=nt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=T=>r?T:fn(T)||r===!1||r===0?ti(T,1):ti(T);let u,f,h,p,v=!1,_=!1;if(At(n)?(f=()=>n.value,v=fn(n)):or(n)?(f=()=>c(n),v=!0):Be(n)?(_=!0,v=n.some(T=>or(T)||fn(T)),f=()=>n.map(T=>{if(At(T))return T.value;if(or(T))return c(T);if(He(T))return l?l(T,2):T()})):He(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Vn();try{h()}finally{kn()}}const T=xi;xi=u;try{return l?l(n,3,[p]):n(p)}finally{xi=T}}:f=Sn,e&&r){const T=f,b=r===!0?1/0:r;f=()=>ti(T(),b)}const m=ud(),d=()=>{u.stop(),m&&m.active&&Ba(m.effects,u)};if(s&&e){const T=e;e=(...b)=>{T(...b),d()}}let y=_?new Array(n.length).fill(fs):fs;const x=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(e){const b=u.run();if(r||v||(_?b.some((D,P)=>ri(D,y[P])):ri(b,y))){h&&h();const D=xi;xi=u;try{const P=[b,y===fs?void 0:_&&y[0]===fs?[]:y,p];y=b,l?l(e,3,P):e(...P)}finally{xi=D}}}else u.run()};return o&&o(x),u=new Qu(f),u.scheduler=a?()=>a(x,!1):x,p=T=>Id(T,!1,u),h=u.onStop=()=>{const T=Gs.get(u);if(T){if(l)l(T,4);else for(const b of T)b();Gs.delete(u)}},e?i?x(!0):y=u.run():a?a(x.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ti(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,At(n))ti(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)ti(n[i],e,t);else if(ku(n)||sr(n))n.forEach(i=>{ti(i,e,t)});else if(qu(n)){for(const i in n)ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ti(n[i],e,t)}return n}function ts(n,e,t,i){try{return i?n(...i):n()}catch(r){to(r,e,t)}}function En(n,e,t,i){if(He(n)){const r=ts(n,e,t,i);return r&&Wu(r)&&r.catch(s=>{to(s,e,t)}),r}if(Be(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function to(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||nt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Vn(),ts(s,null,10,[n,l,c]),kn();return}}Od(n,t,r,i,a)}function Od(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ut=[];let _n=-1;const lr=[];let Qn=null,er=0;const vf=Promise.resolve();let Vs=null;function xf(n){const e=Vs||vf;return n?e.then(this?n.bind(this):n):e}function Fd(n){let e=_n+1,t=Ut.length;for(;e<t;){const i=e+t>>>1,r=Ut[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Za(n){if(!(n.flags&1)){const e=jr(n),t=Ut[Ut.length-1];!t||!(n.flags&2)&&e>=jr(t)?Ut.push(n):Ut.splice(Fd(e),0,n),n.flags|=1,Mf()}}function Mf(){Vs||(Vs=vf.then(Ef))}function Bd(n){Be(n)?lr.push(...n):Qn&&n.id===-1?Qn.splice(er+1,0,n):n.flags&1||(lr.push(n),n.flags|=1),Mf()}function Al(n,e,t=_n+1){for(;t<Ut.length;t++){const i=Ut[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ut.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sf(n){if(lr.length){const e=[...new Set(lr)].sort((t,i)=>jr(t)-jr(i));if(lr.length=0,Qn){Qn.push(...e);return}for(Qn=e,er=0;er<Qn.length;er++){const t=Qn[er];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qn=null,er=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ef(n){try{for(_n=0;_n<Ut.length;_n++){const e=Ut[_n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ts(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_n<Ut.length;_n++){const e=Ut[_n];e&&(e.flags&=-2)}_n=-1,Ut.length=0,Sf(),Vs=null,(Ut.length||lr.length)&&Ef()}}let Bt=null,yf=null;function ks(n){const e=Bt;return Bt=n,yf=n&&n.type.__scopeId||null,e}function Tt(n,e=Bt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&qs(-1);const s=ks(e);let a;try{a=n(...r)}finally{ks(s),i._d&&qs(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function di(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Vn(),En(l,t,8,[n.el,o,n,e]),kn())}}function Os(n,e){if(Nt){let t=Nt.provides;const i=Nt.parent&&Nt.parent.provides;i===t&&(t=Nt.provides=Object.create(i)),t[n]=e}}function Hn(n,e,t=!1){const i=Fp();if(i||ur){let r=ur?ur._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}const zd=Symbol.for("v-scx"),Hd=()=>Hn(zd);function Fs(n,e,t){return Tf(n,e,t)}function Tf(n,e,t=nt){const{immediate:i,deep:r,flush:s,once:a}=t,o=St({},t),l=e&&i||!e&&s!=="post";let c;if(Kr){if(s==="sync"){const p=Hd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Sn,p.resume=Sn,p.pause=Sn,p}}const u=Nt;o.call=(p,v,_)=>En(p,u,v,_);let f=!1;s==="post"?o.scheduler=p=>{Ot(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():Za(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Nd(n,e,o);return Kr&&(c?c.push(h):l&&h()),h}function Gd(n,e,t){const i=this.proxy,r=dt(n)?n.includes(".")?bf(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const a=is(this),o=Tf(r,s.bind(i),t);return a(),o}function bf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vd=Symbol("_vte"),kd=n=>n.__isTeleport,Wd=Symbol("_leaveCb");function Ja(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ja(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ns(n,e){return He(n)?St({name:n.name},e,{setup:n}):n}function Af(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function wl(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ws=new WeakMap;function zr(n,e,t,i,r=!1){if(Be(n)){n.forEach((_,m)=>zr(_,e&&(Be(e)?e[m]:e),t,i,r));return}if(cr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?il(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===nt?o.refs={}:o.refs,f=o.setupState,h=Ze(f),p=f===nt?Vu:_=>wl(u,_)?!1:Je(h,_),v=(_,m)=>!(m&&wl(u,m));if(c!=null&&c!==l){if(Rl(e),dt(c))u[c]=null,p(c)&&(f[c]=null);else if(At(c)){const _=e;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(He(l))ts(l,o,12,[a,u]);else{const _=dt(l),m=At(l);if(_||m){const d=()=>{if(n.f){const y=_?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)Be(y)&&Ba(y,s);else if(Be(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const x=[s];v(l,n.k)&&(l.value=x),n.k&&(u[n.k]=x)}}else _?(u[l]=a,p(l)&&(f[l]=a)):m&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const y=()=>{d(),Ws.delete(n)};y.id=-1,Ws.set(n,y),Ot(y,t)}else Rl(n),d()}}}function Rl(n){const e=Ws.get(n);e&&(e.flags|=8,Ws.delete(n))}Qs().requestIdleCallback;Qs().cancelIdleCallback;const cr=n=>!!n.type.__asyncLoader,wf=n=>n.type.__isKeepAlive;function Xd(n,e){Rf(n,"a",e)}function qd(n,e){Rf(n,"da",e)}function Rf(n,e,t=Nt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(no(e,i,t),t){let r=t.parent;for(;r&&r.parent;)wf(r.parent.vnode)&&jd(i,e,t,r),r=r.parent}}function jd(n,e,t,i){const r=no(e,n,i,!0);Qa(()=>{Ba(i[e],r)},t)}function no(n,e,t=Nt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Vn();const o=is(t),l=En(e,t,n,a);return o(),kn(),l});return i?r.unshift(s):r.push(s),s}}const qn=n=>(e,t=Nt)=>{(!Kr||n==="sp")&&no(n,(...i)=>e(...i),t)},Yd=qn("bm"),Cf=qn("m"),$d=qn("bu"),Kd=qn("u"),Zd=qn("bum"),Qa=qn("um"),Jd=qn("sp"),Qd=qn("rtg"),ep=qn("rtc");function tp(n,e=Nt){no("ec",n,e)}const np=Symbol.for("v-ndc");function So(n,e,t={},i,r){if(Bt.ce||Bt.parent&&cr(Bt.parent)&&Bt.parent.ce){const c=Object.keys(t).length>0;return e!=="default"&&(t.name=e),Ht(),js(Xt,null,[it("slot",t,i)],c?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),Ht();const a=s&&Pf(s(t)),o=t.key||a&&a.key,l=js(Xt,{key:(o&&!hn(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Pf(n){return n.some(e=>$r(e)?!(e.type===Xn||e.type===Xt&&!Pf(e.children)):!0)?n:null}const pa=n=>n?Kf(n)?il(n):pa(n.parent):null,Hr=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pa(n.parent),$root:n=>pa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Df(n),$forceUpdate:n=>n.f||(n.f=()=>{Za(n.update)}),$nextTick:n=>n.n||(n.n=xf.bind(n.proxy)),$watch:n=>Gd.bind(n)}),Eo=(n,e)=>n!==nt&&!n.__isScriptSetup&&Je(n,e),ip={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Eo(i,e))return a[e]=1,i[e];if(r!==nt&&Je(r,e))return a[e]=2,r[e];if(Je(s,e))return a[e]=3,s[e];if(t!==nt&&Je(t,e))return a[e]=4,t[e];ma&&(a[e]=0)}}const c=Hr[e];let u,f;if(c)return e==="$attrs"&&bt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==nt&&Je(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Je(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Eo(r,e)?(r[e]=t,!0):i!==nt&&Je(i,e)?(i[e]=t,!0):Je(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==nt&&o[0]!=="$"&&Je(n,o)||Eo(e,o)||Je(s,o)||Je(i,o)||Je(Hr,o)||Je(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Je(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cl(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ma=!0;function rp(n){const e=Df(n),t=n.proxy,i=n.ctx;ma=!1,e.beforeCreate&&Pl(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:x,unmounted:T,render:b,renderTracked:D,renderTriggered:P,errorCaptured:V,serverPrefetch:S,expose:R,inheritAttrs:J,components:ue,directives:N,filters:X}=e;if(c&&sp(c,i,null),a)for(const q in a){const j=a[q];He(j)&&(i[q]=j.bind(t))}if(r){const q=r.call(t,t);et(q)&&(n.data=eo(q))}if(ma=!0,s)for(const q in s){const j=s[q],fe=He(j)?j.bind(t,t):He(j.get)?j.get.bind(t,t):Sn,he=!He(j)&&He(j.set)?j.set.bind(t):Sn,H=an({get:fe,set:he});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>H.value,set:Z=>H.value=Z})}if(o)for(const q in o)Lf(o[q],i,t,q);if(l){const q=He(l)?l.call(t):l;Reflect.ownKeys(q).forEach(j=>{Os(j,q[j])})}u&&Pl(u,n,"c");function se(q,j){Be(j)?j.forEach(fe=>q(fe.bind(t))):j&&q(j.bind(t))}if(se(Yd,f),se(Cf,h),se($d,p),se(Kd,v),se(Xd,_),se(qd,m),se(tp,V),se(ep,D),se(Qd,P),se(Zd,y),se(Qa,T),se(Jd,S),Be(R))if(R.length){const q=n.exposed||(n.exposed={});R.forEach(j=>{Object.defineProperty(q,j,{get:()=>t[j],set:fe=>t[j]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===Sn&&(n.render=b),J!=null&&(n.inheritAttrs=J),ue&&(n.components=ue),N&&(n.directives=N),S&&Af(n)}function sp(n,e,t=Sn){Be(n)&&(n=ga(n));for(const i in n){const r=n[i];let s;et(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),At(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Pl(n,e,t){En(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lf(n,e,t,i){let r=i.includes(".")?bf(t,i):()=>t[i];if(dt(n)){const s=e[n];He(s)&&Fs(r,s)}else if(He(n))Fs(r,n.bind(t));else if(et(n))if(Be(n))n.forEach(s=>Lf(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Fs(r,s,n)}}function Df(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Xs(l,c,a,!0)),Xs(l,e,a)),et(e)&&s.set(e,l),l}function Xs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Xs(n,s,t,!0),r&&r.forEach(a=>Xs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=op[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const op={data:Ll,props:Dl,emits:Dl,methods:Ur,computed:Ur,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ur,directives:Ur,watch:lp,provide:Ll,inject:ap};function Ll(n,e){return e?n?function(){return St(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function ap(n,e){return Ur(ga(n),ga(e))}function ga(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ct(n,e){return n?[...new Set([].concat(n,e))]:e}function Ur(n,e){return n?St(Object.create(null),n,e):e}function Dl(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:St(Object.create(null),Cl(n),Cl(e??{})):e}function lp(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Ct(n[i],e[i]);return t}function Uf(){return{app:null,config:{isNativeTag:Vu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cp=0;function up(n,e){return function(i,r=null){He(i)||(i=St({},i)),r!=null&&!et(r)&&(r=null);const s=Uf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:cp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&He(u.install)?(a.add(u),u.install(c,...f)):He(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||it(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,il(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(En(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ur;ur=c;try{return u()}finally{ur=f}}};return c}}let ur=null;const fp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ai(e)}Modifiers`]||n[`${Ui(e)}Modifiers`];function hp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||nt;let r=t;const s=e.startsWith("update:"),a=s&&fp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>dt(u)?u.trim():u)),a.number&&(r=t.map(td)));let o,l=i[o=mo(e)]||i[o=mo(ai(e))];!l&&s&&(l=i[o=mo(Ui(e))]),l&&En(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(c,n,6,r)}}const dp=new WeakMap;function If(n,e,t=!1){const i=t?dp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!He(n)){const l=c=>{const u=If(c,e,!0);u&&(o=!0,St(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Be(s)?s.forEach(l=>a[l]=null):St(a,s),et(n)&&i.set(n,a),a)}function io(n,e){return!n||!Zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Je(n,e[0].toLowerCase()+e.slice(1))||Je(n,Ui(e))||Je(n,e))}function Ul(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:_}=n,m=ks(n);let d,y;try{if(t.shapeFlag&4){const T=r||i,b=T;d=vn(c.call(b,T,u,f,p,h,v)),y=o}else{const T=e;d=vn(T.length>1?T(f,{attrs:o,slots:a,emit:l}):T(f,null)),y=e.props?o:pp(o)}}catch(T){Gr.length=0,to(T,n,1),d=it(Xn)}let x=d;if(y&&_!==!1){const T=Object.keys(y),{shapeFlag:b}=x;T.length&&b&7&&(s&&T.some(Fa)&&(y=mp(y,s)),x=dr(x,y,!1,!0))}return t.dirs&&(x=dr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Ja(x,t.transition),d=x,ks(m),d}const pp=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zs(t))&&((e||(e={}))[t]=n[t]);return e},mp=(n,e)=>{const t={};for(const i in n)(!Fa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Il(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Nf(a,i,h)&&!io(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Il(i,a,c):!0:!!a;return!1}function Il(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Nf(e,n,s)&&!io(t,s))return!0}return!1}function Nf(n,e,t){const i=n[t],r=e[t];return t==="style"&&et(i)&&et(r)?!Va(i,r):i!==r}function _p({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Of={},Ff=()=>Object.create(Of),Bf=n=>Object.getPrototypeOf(n)===Of;function vp(n,e,t,i=!1){const r={},s=Ff();n.propsDefaults=Object.create(null),zf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:pf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function xp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(io(n.emitsOptions,h))continue;const p=e[h];if(l)if(Je(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=ai(h);r[v]=_a(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{zf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Je(e,f)&&((u=Ui(f))===f||!Je(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=_a(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Je(e,f))&&(delete s[f],c=!0)}c&&Fn(n.attrs,"set","")}function zf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Nr(l))continue;const c=e[l];let u;r&&Je(r,u=ai(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:io(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||nt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=_a(r,l,f,c[f],n,!Je(c,f))}}return a}function _a(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Je(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&He(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=is(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ui(t))&&(i=!0))}return i}const Mp=new WeakMap;function Hf(n,e,t=!1){const i=t?Mp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,p]=Hf(f,e,!0);St(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,rr),rr;if(Be(s))for(let u=0;u<s.length;u++){const f=ai(s[u]);Nl(f)&&(a[f]=nt)}else if(s)for(const u in s){const f=ai(u);if(Nl(f)){const h=s[u],p=a[f]=Be(h)||He(h)?{type:h}:St({},h),v=p.type;let _=!1,m=!0;if(Be(v))for(let d=0;d<v.length;++d){const y=v[d],x=He(y)&&y.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(m=!1)}else _=He(v)&&v.name==="Boolean";p[0]=_,p[1]=m,(_||Je(p,"default"))&&o.push(f)}}const c=[a,o];return et(n)&&i.set(n,c),c}function Nl(n){return n[0]!=="$"&&!Nr(n)}const el=n=>n==="_"||n==="_ctx"||n==="$stable",tl=n=>Be(n)?n.map(vn):[vn(n)],Sp=(n,e,t)=>{if(e._n)return e;const i=Tt((...r)=>tl(e(...r)),t);return i._c=!1,i},Gf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(el(r))continue;const s=n[r];if(He(s))e[r]=Sp(r,s,i);else if(s!=null){const a=tl(s);e[r]=()=>a}}},Vf=(n,e)=>{const t=tl(e);n.slots.default=()=>t},kf=(n,e,t)=>{for(const i in e)(t||!el(i))&&(n[i]=e[i])},Ep=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const r=e._;r?(kf(i,e,t),t&&Yu(i,"_",r,!0)):Gf(e,i)}else e&&Vf(n,e)},yp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=nt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:kf(r,e,t):(s=!e.$stable,Gf(e,r)),a=e}else e&&(Vf(n,e),a={default:1});if(s)for(const o in r)!el(o)&&a[o]==null&&delete r[o]},Ot=Rp;function Tp(n){return bp(n)}function bp(n,e){const t=Qs();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Sn,insertStaticContent:v}=n,_=(g,C,L,O=null,z=null,Y=null,ce=void 0,ne=null,le=!!C.dynamicChildren)=>{if(g===C)return;g&&!Tr(g,C)&&(O=G(g),Z(g,z,Y,!0),g=null),C.patchFlag===-2&&(le=!1,C.dynamicChildren=null);const{type:ie,ref:we,shapeFlag:E}=C;switch(ie){case ro:m(g,C,L,O);break;case Xn:d(g,C,L,O);break;case To:g==null&&y(C,L,O,ce);break;case Xt:ue(g,C,L,O,z,Y,ce,ne,le);break;default:E&1?b(g,C,L,O,z,Y,ce,ne,le):E&6?N(g,C,L,O,z,Y,ce,ne,le):(E&64||E&128)&&ie.process(g,C,L,O,z,Y,ce,ne,le,be)}we!=null&&z?zr(we,g&&g.ref,Y,C||g,!C):we==null&&g&&g.ref!=null&&zr(g.ref,null,Y,g,!0)},m=(g,C,L,O)=>{if(g==null)i(C.el=o(C.children),L,O);else{const z=C.el=g.el;C.children!==g.children&&c(z,C.children)}},d=(g,C,L,O)=>{g==null?i(C.el=l(C.children||""),L,O):C.el=g.el},y=(g,C,L,O)=>{[g.el,g.anchor]=v(g.children,C,L,O,g.el,g.anchor)},x=({el:g,anchor:C},L,O)=>{let z;for(;g&&g!==C;)z=h(g),i(g,L,O),g=z;i(C,L,O)},T=({el:g,anchor:C})=>{let L;for(;g&&g!==C;)L=h(g),r(g),g=L;r(C)},b=(g,C,L,O,z,Y,ce,ne,le)=>{if(C.type==="svg"?ce="svg":C.type==="math"&&(ce="mathml"),g==null)D(C,L,O,z,Y,ce,ne,le);else{const ie=g.el&&g.el._isVueCE?g.el:null;try{ie&&ie._beginPatch(),S(g,C,z,Y,ce,ne,le)}finally{ie&&ie._endPatch()}}},D=(g,C,L,O,z,Y,ce,ne)=>{let le,ie;const{props:we,shapeFlag:E,transition:M,dirs:I}=g;if(le=g.el=a(g.type,Y,we&&we.is,we),E&8?u(le,g.children):E&16&&V(g.children,le,null,O,z,yo(g,Y),ce,ne),I&&di(g,null,O,"created"),P(le,g,g.scopeId,ce,O),we){for(const oe in we)oe!=="value"&&!Nr(oe)&&s(le,oe,null,we[oe],Y,O);"value"in we&&s(le,"value",null,we.value,Y),(ie=we.onVnodeBeforeMount)&&gn(ie,O,g)}I&&di(g,null,O,"beforeMount");const Q=Ap(z,M);Q&&M.beforeEnter(le),i(le,C,L),((ie=we&&we.onVnodeMounted)||Q||I)&&Ot(()=>{ie&&gn(ie,O,g),Q&&M.enter(le),I&&di(g,null,O,"mounted")},z)},P=(g,C,L,O,z)=>{if(L&&p(g,L),O)for(let Y=0;Y<O.length;Y++)p(g,O[Y]);if(z){let Y=z.subTree;if(C===Y||jf(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const ce=z.vnode;P(g,ce,ce.scopeId,ce.slotScopeIds,z.parent)}}},V=(g,C,L,O,z,Y,ce,ne,le=0)=>{for(let ie=le;ie<g.length;ie++){const we=g[ie]=ne?On(g[ie]):vn(g[ie]);_(null,we,C,L,O,z,Y,ce,ne)}},S=(g,C,L,O,z,Y,ce)=>{const ne=C.el=g.el;let{patchFlag:le,dynamicChildren:ie,dirs:we}=C;le|=g.patchFlag&16;const E=g.props||nt,M=C.props||nt;let I;if(L&&pi(L,!1),(I=M.onVnodeBeforeUpdate)&&gn(I,L,C,g),we&&di(C,g,L,"beforeUpdate"),L&&pi(L,!0),(E.innerHTML&&M.innerHTML==null||E.textContent&&M.textContent==null)&&u(ne,""),ie?R(g.dynamicChildren,ie,ne,L,O,yo(C,z),Y):ce||j(g,C,ne,null,L,O,yo(C,z),Y,!1),le>0){if(le&16)J(ne,E,M,L,z);else if(le&2&&E.class!==M.class&&s(ne,"class",null,M.class,z),le&4&&s(ne,"style",E.style,M.style,z),le&8){const Q=C.dynamicProps;for(let oe=0;oe<Q.length;oe++){const w=Q[oe],re=E[w],de=M[w];(de!==re||w==="value")&&s(ne,w,re,de,z,L)}}le&1&&g.children!==C.children&&u(ne,C.children)}else!ce&&ie==null&&J(ne,E,M,L,z);((I=M.onVnodeUpdated)||we)&&Ot(()=>{I&&gn(I,L,C,g),we&&di(C,g,L,"updated")},O)},R=(g,C,L,O,z,Y,ce)=>{for(let ne=0;ne<C.length;ne++){const le=g[ne],ie=C[ne],we=le.el&&(le.type===Xt||!Tr(le,ie)||le.shapeFlag&198)?f(le.el):L;_(le,ie,we,null,O,z,Y,ce,!0)}},J=(g,C,L,O,z)=>{if(C!==L){if(C!==nt)for(const Y in C)!Nr(Y)&&!(Y in L)&&s(g,Y,C[Y],null,z,O);for(const Y in L){if(Nr(Y))continue;const ce=L[Y],ne=C[Y];ce!==ne&&Y!=="value"&&s(g,Y,ne,ce,z,O)}"value"in L&&s(g,"value",C.value,L.value,z)}},ue=(g,C,L,O,z,Y,ce,ne,le)=>{const ie=C.el=g?g.el:o(""),we=C.anchor=g?g.anchor:o("");let{patchFlag:E,dynamicChildren:M,slotScopeIds:I}=C;I&&(ne=ne?ne.concat(I):I),g==null?(i(ie,L,O),i(we,L,O),V(C.children||[],L,we,z,Y,ce,ne,le)):E>0&&E&64&&M&&g.dynamicChildren&&g.dynamicChildren.length===M.length?(R(g.dynamicChildren,M,L,z,Y,ce,ne),(C.key!=null||z&&C===z.subTree)&&Wf(g,C,!0)):j(g,C,L,we,z,Y,ce,ne,le)},N=(g,C,L,O,z,Y,ce,ne,le)=>{C.slotScopeIds=ne,g==null?C.shapeFlag&512?z.ctx.activate(C,L,O,ce,le):X(C,L,O,z,Y,ce,le):$(g,C,le)},X=(g,C,L,O,z,Y,ce)=>{const ne=g.component=Op(g,O,z);if(wf(g)&&(ne.ctx.renderer=be),Bp(ne,!1,ce),ne.asyncDep){if(z&&z.registerDep(ne,se,ce),!g.el){const le=ne.subTree=it(Xn);d(null,le,C,L),g.placeholder=le.el}}else se(ne,g,C,L,z,Y,ce)},$=(g,C,L)=>{const O=C.component=g.component;if(gp(g,C,L))if(O.asyncDep&&!O.asyncResolved){q(O,C,L);return}else O.next=C,O.update();else C.el=g.el,O.vnode=C},se=(g,C,L,O,z,Y,ce)=>{const ne=()=>{if(g.isMounted){let{next:E,bu:M,u:I,parent:Q,vnode:oe}=g;{const ye=Xf(g);if(ye){E&&(E.el=oe.el,q(g,E,ce)),ye.asyncDep.then(()=>{Ot(()=>{g.isUnmounted||ie()},z)});return}}let w=E,re;pi(g,!1),E?(E.el=oe.el,q(g,E,ce)):E=oe,M&&go(M),(re=E.props&&E.props.onVnodeBeforeUpdate)&&gn(re,Q,E,oe),pi(g,!0);const de=Ul(g),W=g.subTree;g.subTree=de,_(W,de,f(W.el),G(W),g,z,Y),E.el=de.el,w===null&&_p(g,de.el),I&&Ot(I,z),(re=E.props&&E.props.onVnodeUpdated)&&Ot(()=>gn(re,Q,E,oe),z)}else{let E;const{el:M,props:I}=C,{bm:Q,m:oe,parent:w,root:re,type:de}=g,W=cr(C);pi(g,!1),Q&&go(Q),!W&&(E=I&&I.onVnodeBeforeMount)&&gn(E,w,C),pi(g,!0);{re.ce&&re.ce._hasShadowRoot()&&re.ce._injectChildStyle(de);const ye=g.subTree=Ul(g);_(null,ye,L,O,g,z,Y),C.el=ye.el}if(oe&&Ot(oe,z),!W&&(E=I&&I.onVnodeMounted)){const ye=C;Ot(()=>gn(E,w,ye),z)}(C.shapeFlag&256||w&&cr(w.vnode)&&w.vnode.shapeFlag&256)&&g.a&&Ot(g.a,z),g.isMounted=!0,C=L=O=null}};g.scope.on();const le=g.effect=new Qu(ne);g.scope.off();const ie=g.update=le.run.bind(le),we=g.job=le.runIfDirty.bind(le);we.i=g,we.id=g.uid,le.scheduler=()=>Za(we),pi(g,!0),ie()},q=(g,C,L)=>{C.component=g;const O=g.vnode.props;g.vnode=C,g.next=null,xp(g,C.props,O,L),yp(g,C.children,L),Vn(),Al(g),kn()},j=(g,C,L,O,z,Y,ce,ne,le=!1)=>{const ie=g&&g.children,we=g?g.shapeFlag:0,E=C.children,{patchFlag:M,shapeFlag:I}=C;if(M>0){if(M&128){he(ie,E,L,O,z,Y,ce,ne,le);return}else if(M&256){fe(ie,E,L,O,z,Y,ce,ne,le);return}}I&8?(we&16&&Re(ie,z,Y),E!==ie&&u(L,E)):we&16?I&16?he(ie,E,L,O,z,Y,ce,ne,le):Re(ie,z,Y,!0):(we&8&&u(L,""),I&16&&V(E,L,O,z,Y,ce,ne,le))},fe=(g,C,L,O,z,Y,ce,ne,le)=>{g=g||rr,C=C||rr;const ie=g.length,we=C.length,E=Math.min(ie,we);let M;for(M=0;M<E;M++){const I=C[M]=le?On(C[M]):vn(C[M]);_(g[M],I,L,null,z,Y,ce,ne,le)}ie>we?Re(g,z,Y,!0,!1,E):V(C,L,O,z,Y,ce,ne,le,E)},he=(g,C,L,O,z,Y,ce,ne,le)=>{let ie=0;const we=C.length;let E=g.length-1,M=we-1;for(;ie<=E&&ie<=M;){const I=g[ie],Q=C[ie]=le?On(C[ie]):vn(C[ie]);if(Tr(I,Q))_(I,Q,L,null,z,Y,ce,ne,le);else break;ie++}for(;ie<=E&&ie<=M;){const I=g[E],Q=C[M]=le?On(C[M]):vn(C[M]);if(Tr(I,Q))_(I,Q,L,null,z,Y,ce,ne,le);else break;E--,M--}if(ie>E){if(ie<=M){const I=M+1,Q=I<we?C[I].el:O;for(;ie<=M;)_(null,C[ie]=le?On(C[ie]):vn(C[ie]),L,Q,z,Y,ce,ne,le),ie++}}else if(ie>M)for(;ie<=E;)Z(g[ie],z,Y,!0),ie++;else{const I=ie,Q=ie,oe=new Map;for(ie=Q;ie<=M;ie++){const Me=C[ie]=le?On(C[ie]):vn(C[ie]);Me.key!=null&&oe.set(Me.key,ie)}let w,re=0;const de=M-Q+1;let W=!1,ye=0;const Pe=new Array(de);for(ie=0;ie<de;ie++)Pe[ie]=0;for(ie=I;ie<=E;ie++){const Me=g[ie];if(re>=de){Z(Me,z,Y,!0);continue}let Ee;if(Me.key!=null)Ee=oe.get(Me.key);else for(w=Q;w<=M;w++)if(Pe[w-Q]===0&&Tr(Me,C[w])){Ee=w;break}Ee===void 0?Z(Me,z,Y,!0):(Pe[Ee-Q]=ie+1,Ee>=ye?ye=Ee:W=!0,_(Me,C[Ee],L,null,z,Y,ce,ne,le),re++)}const Le=W?wp(Pe):rr;for(w=Le.length-1,ie=de-1;ie>=0;ie--){const Me=Q+ie,Ee=C[Me],De=C[Me+1],We=Me+1<we?De.el||qf(De):O;Pe[ie]===0?_(null,Ee,L,We,z,Y,ce,ne,le):W&&(w<0||ie!==Le[w]?H(Ee,L,We,2):w--)}}},H=(g,C,L,O,z=null)=>{const{el:Y,type:ce,transition:ne,children:le,shapeFlag:ie}=g;if(ie&6){H(g.component.subTree,C,L,O);return}if(ie&128){g.suspense.move(C,L,O);return}if(ie&64){ce.move(g,C,L,be);return}if(ce===Xt){i(Y,C,L);for(let E=0;E<le.length;E++)H(le[E],C,L,O);i(g.anchor,C,L);return}if(ce===To){x(g,C,L);return}if(O!==2&&ie&1&&ne)if(O===0)ne.beforeEnter(Y),i(Y,C,L),Ot(()=>ne.enter(Y),z);else{const{leave:E,delayLeave:M,afterLeave:I}=ne,Q=()=>{g.ctx.isUnmounted?r(Y):i(Y,C,L)},oe=()=>{Y._isLeaving&&Y[Wd](!0),E(Y,()=>{Q(),I&&I()})};M?M(Y,Q,oe):oe()}else i(Y,C,L)},Z=(g,C,L,O=!1,z=!1)=>{const{type:Y,props:ce,ref:ne,children:le,dynamicChildren:ie,shapeFlag:we,patchFlag:E,dirs:M,cacheIndex:I}=g;if(E===-2&&(z=!1),ne!=null&&(Vn(),zr(ne,null,L,g,!0),kn()),I!=null&&(C.renderCache[I]=void 0),we&256){C.ctx.deactivate(g);return}const Q=we&1&&M,oe=!cr(g);let w;if(oe&&(w=ce&&ce.onVnodeBeforeUnmount)&&gn(w,C,g),we&6)ve(g.component,L,O);else{if(we&128){g.suspense.unmount(L,O);return}Q&&di(g,null,C,"beforeUnmount"),we&64?g.type.remove(g,C,L,be,O):ie&&!ie.hasOnce&&(Y!==Xt||E>0&&E&64)?Re(ie,C,L,!1,!0):(Y===Xt&&E&384||!z&&we&16)&&Re(le,C,L),O&&_e(g)}(oe&&(w=ce&&ce.onVnodeUnmounted)||Q)&&Ot(()=>{w&&gn(w,C,g),Q&&di(g,null,C,"unmounted")},L)},_e=g=>{const{type:C,el:L,anchor:O,transition:z}=g;if(C===Xt){ge(L,O);return}if(C===To){T(g);return}const Y=()=>{r(L),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(g.shapeFlag&1&&z&&!z.persisted){const{leave:ce,delayLeave:ne}=z,le=()=>ce(L,Y);ne?ne(g.el,Y,le):le()}else Y()},ge=(g,C)=>{let L;for(;g!==C;)L=h(g),r(g),g=L;r(C)},ve=(g,C,L)=>{const{bum:O,scope:z,job:Y,subTree:ce,um:ne,m:le,a:ie}=g;Ol(le),Ol(ie),O&&go(O),z.stop(),Y&&(Y.flags|=8,Z(ce,g,C,L)),ne&&Ot(ne,C),Ot(()=>{g.isUnmounted=!0},C)},Re=(g,C,L,O=!1,z=!1,Y=0)=>{for(let ce=Y;ce<g.length;ce++)Z(g[ce],C,L,O,z)},G=g=>{if(g.shapeFlag&6)return G(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const C=h(g.anchor||g.el),L=C&&C[Vd];return L?h(L):C};let ae=!1;const pe=(g,C,L)=>{let O;g==null?C._vnode&&(Z(C._vnode,null,null,!0),O=C._vnode.component):_(C._vnode||null,g,C,null,null,null,L),C._vnode=g,ae||(ae=!0,Al(O),Sf(),ae=!1)},be={p:_,um:Z,m:H,r:_e,mt:X,mc:V,pc:j,pbc:R,n:G,o:n};return{render:pe,hydrate:void 0,createApp:up(pe)}}function yo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ap(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Wf(n,e,t=!1){const i=n.children,r=e.children;if(Be(i)&&Be(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=On(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Wf(a,o)),o.type===ro&&(o.patchFlag===-1&&(o=r[s]=On(o)),o.el=a.el),o.type===Xn&&!o.el&&(o.el=a.el)}}function wp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Xf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xf(e)}function Ol(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function qf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?qf(e.subTree):null}const jf=n=>n.__isSuspense;function Rp(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):Bd(n)}const Xt=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),Gr=[];let qt=null;function Ht(n=!1){Gr.push(qt=n?null:[])}function Cp(){Gr.pop(),qt=Gr[Gr.length-1]||null}let Yr=1;function qs(n,e=!1){Yr+=n,n<0&&qt&&e&&(qt.hasOnce=!0)}function Yf(n){return n.dynamicChildren=Yr>0?qt||rr:null,Cp(),Yr>0&&qt&&qt.push(n),n}function yn(n,e,t,i,r,s){return Yf(Ie(n,e,t,i,r,s,!0))}function js(n,e,t,i,r){return Yf(it(n,e,t,i,r,!0))}function $r(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const $f=({key:n})=>n??null,Bs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?dt(n)||At(n)||He(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,r=null,s=n===Xt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&$f(e),ref:e&&Bs(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return o?(nl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=dt(t)?8:16),Yr>0&&!a&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const it=Pp;function Pp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===np)&&(n=Xn),$r(n)){const o=dr(n,e,!0);return t&&nl(o,t),Yr>0&&!s&&qt&&(o.shapeFlag&6?qt[qt.indexOf(n)]=o:qt.push(o)),o.patchFlag=-2,o}if(Vp(n)&&(n=n.__vccOpts),e){e=Lp(e);let{class:o,style:l}=e;o&&!dt(o)&&(e.class=Ga(o)),et(l)&&(Ka(l)&&!Be(l)&&(l=St({},l)),e.style=Ha(l))}const a=dt(n)?1:jf(n)?128:kd(n)?64:et(n)?4:He(n)?2:0;return Ie(n,e,t,i,r,a,s,!0)}function Lp(n){return n?Ka(n)||Bf(n)?St({},n):n:null}function dr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Up(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&$f(c),ref:e&&e.ref?t&&s?Be(s)?s.concat(Bs(e)):[s,Bs(e)]:Bs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Xt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dr(n.ssContent),ssFallback:n.ssFallback&&dr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ja(u,l.clone(u)),u}function $e(n=" ",e=0){return it(ro,null,n,e)}function Dp(n="",e=!1){return e?(Ht(),js(Xn,null,n)):it(Xn,null,n)}function vn(n){return n==null||typeof n=="boolean"?it(Xn):Be(n)?it(Xt,null,n.slice()):$r(n)?On(n):it(ro,null,String(n))}function On(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dr(n)}function nl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Bf(e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),i&64?(t=16,e=[$e(e)]):t=8);n.children=e,n.shapeFlag|=t}function Up(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ga([e.class,i.class]));else if(r==="style")e.style=Ha([e.style,i.style]);else if(Zs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Be(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function gn(n,e,t,i=null){En(n,e,7,[t,i])}const Ip=Uf();let Np=0;function Op(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Ip,s={uid:Np++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hf(i,r),emitsOptions:If(i,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:i.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=hp.bind(null,s),n.ce&&n.ce(s),s}let Nt=null;const Fp=()=>Nt||Bt;let Ys,va;{const n=Qs(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ys=e("__VUE_INSTANCE_SETTERS__",t=>Nt=t),va=e("__VUE_SSR_SETTERS__",t=>Kr=t)}const is=n=>{const e=Nt;return Ys(n),n.scope.on(),()=>{n.scope.off(),Ys(e)}},Fl=()=>{Nt&&Nt.scope.off(),Ys(null)};function Kf(n){return n.vnode.shapeFlag&4}let Kr=!1;function Bp(n,e=!1,t=!1){e&&va(e);const{props:i,children:r}=n.vnode,s=Kf(n);vp(n,i,s,e),Ep(n,r,t||e);const a=s?zp(n,e):void 0;return e&&va(!1),a}function zp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ip);const{setup:i}=t;if(i){Vn();const r=n.setupContext=i.length>1?Gp(n):null,s=is(n),a=ts(i,n,0,[n.props,r]),o=Wu(a);if(kn(),s(),(o||n.sp)&&!cr(n)&&Af(n),o){if(a.then(Fl,Fl),e)return a.then(l=>{Bl(n,l)}).catch(l=>{to(l,n,0)});n.asyncDep=a}else Bl(n,a)}else Zf(n)}function Bl(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=_f(e)),Zf(n)}function Zf(n,e,t){const i=n.type;n.render||(n.render=i.render||Sn);{const r=is(n);Vn();try{rp(n)}finally{kn(),r()}}}const Hp={get(n,e){return bt(n,"get",""),n[e]}};function Gp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Hp),slots:n.slots,emit:n.emit,expose:e}}function il(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_f(mf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Hr)return Hr[t](n)},has(e,t){return t in e||t in Hr}})):n.proxy}function Vp(n){return He(n)&&"__vccOpts"in n}const an=(n,e)=>Ud(n,e,Kr);function Jf(n,e,t){try{qs(-1);const i=arguments.length;return i===2?et(e)&&!Be(e)?$r(e)?it(n,null,[e]):it(n,e):it(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&$r(t)&&(t=[t]),it(n,e,t))}finally{qs(1)}}const kp="3.5.29";let xa;const zl=typeof window<"u"&&window.trustedTypes;if(zl)try{xa=zl.createPolicy("vue",{createHTML:n=>n})}catch{}const Qf=xa?n=>xa.createHTML(n):n=>n,Wp="http://www.w3.org/2000/svg",Xp="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Hl=Nn&&Nn.createElement("template"),qp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Nn.createElementNS(Wp,n):e==="mathml"?Nn.createElementNS(Xp,n):t?Nn.createElement(n,{is:t}):Nn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Nn.createTextNode(n),createComment:n=>Nn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Nn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hl.innerHTML=Qf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Hl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},jp=Symbol("_vtc");function Yp(n,e,t){const i=n[jp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gl=Symbol("_vod"),$p=Symbol("_vsh"),Kp=Symbol(""),Zp=/(?:^|;)\s*display\s*:/;function Jp(n,e,t){const i=n.style,r=dt(t);let s=!1;if(t&&!r){if(e)if(dt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&zs(i,o,"")}else for(const a in e)t[a]==null&&zs(i,a,"");for(const a in t)a==="display"&&(s=!0),zs(i,a,t[a])}else if(r){if(e!==t){const a=i[Kp];a&&(t+=";"+a),i.cssText=t,s=Zp.test(t)}}else e&&n.removeAttribute("style");Gl in n&&(n[Gl]=s?i.display:"",n[$p]&&(i.display="none"))}const Vl=/\s*!important$/;function zs(n,e,t){if(Be(t))t.forEach(i=>zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Qp(n,e);Vl.test(t)?n.setProperty(Ui(i),t.replace(Vl,""),"important"):n[i]=t}}const kl=["Webkit","Moz","ms"],bo={};function Qp(n,e){const t=bo[e];if(t)return t;let i=ai(e);if(i!=="filter"&&i in n)return bo[e]=i;i=ju(i);for(let r=0;r<kl.length;r++){const s=kl[r]+i;if(s in n)return bo[e]=s}return e}const Wl="http://www.w3.org/1999/xlink";function Xl(n,e,t,i,r,s=ad(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Wl,e.slice(6,e.length)):n.setAttributeNS(Wl,e,t):t==null||s&&!$u(t)?n.removeAttribute(e):n.setAttribute(e,s?"":hn(t)?String(t):t)}function ql(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Qf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=$u(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function em(n,e,t,i){n.addEventListener(e,t,i)}function tm(n,e,t,i){n.removeEventListener(e,t,i)}const jl=Symbol("_vei");function nm(n,e,t,i,r=null){const s=n[jl]||(n[jl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=im(e);if(i){const c=s[e]=om(i,r);em(n,o,c,l)}else a&&(tm(n,o,a,l),s[e]=void 0)}}const Yl=/(?:Once|Passive|Capture)$/;function im(n){let e;if(Yl.test(n)){e={};let i;for(;i=n.match(Yl);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ui(n.slice(2)),e]}let Ao=0;const rm=Promise.resolve(),sm=()=>Ao||(rm.then(()=>Ao=0),Ao=Date.now());function om(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(am(i,t.value),e,5,[i])};return t.value=n,t.attached=sm(),t}function am(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $l=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,lm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Yp(n,i,a):e==="style"?Jp(n,t,i):Zs(e)?Fa(e)||nm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cm(n,e,i,a))?(ql(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xl(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!dt(i))?ql(n,ai(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Xl(n,e,i,a))};function cm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&$l(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $l(e)&&dt(t)?!1:e in n}const um=St({patchProp:lm},qp);let Kl;function fm(){return Kl||(Kl=Tp(um))}const hm=((...n)=>{const e=fm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=pm(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,dm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function dm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pm(n){return dt(n)?document.querySelector(n):n}const mm=Symbol();var Zl;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Zl||(Zl={}));function gm(){const n=cd(!0),e=n.run(()=>Br({}));let t=[],i=[];const r=mf({install(s){r._a=s,s.provide(mm,r),s.config.globalProperties.$pinia=r,i.forEach(a=>t.push(a)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const rl="154",Oi={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_m=0,Jl=1,vm=2,eh=1,xm=2,In=3,ci=0,zt=1,Mn=2,si=0,fr=1,Ql=2,ec=3,tc=4,Mm=5,tr=100,Sm=101,Em=102,nc=103,ic=104,ym=200,Tm=201,bm=202,Am=203,th=204,nh=205,wm=206,Rm=207,Cm=208,Pm=209,Lm=210,Dm=0,Um=1,Im=2,Ma=3,Nm=4,Om=5,Fm=6,Bm=7,sl=0,zm=1,Hm=2,Gn=0,Gm=1,Vm=2,km=3,Wm=4,Xm=5,ih=300,pr=301,mr=302,Sa=303,Ea=304,so=306,ya=1e3,ln=1001,Ta=1002,Dt=1003,rc=1004,wo=1005,Zt=1006,qm=1007,Zr=1008,oi=1009,jm=1010,Ym=1011,ol=1012,rh=1013,ni=1014,ii=1015,Jr=1016,sh=1017,oh=1018,bi=1020,$m=1021,cn=1023,Km=1024,Zm=1025,Ai=1026,gr=1027,Jm=1028,ah=1029,Qm=1030,lh=1031,ch=1033,Ro=33776,Co=33777,Po=33778,Lo=33779,sc=35840,oc=35841,ac=35842,lc=35843,eg=36196,cc=37492,uc=37496,fc=37808,hc=37809,dc=37810,pc=37811,mc=37812,gc=37813,_c=37814,vc=37815,xc=37816,Mc=37817,Sc=37818,Ec=37819,yc=37820,Tc=37821,Do=36492,tg=36283,bc=36284,Ac=36285,wc=36286,uh=3e3,wi=3001,ng=3200,ig=3201,fh=0,rg=1,Ri="",ke="srgb",Tn="srgb-linear",hh="display-p3",Uo=7680,sg=519,og=512,ag=513,lg=514,cg=515,ug=516,fg=517,hg=518,dg=519,Rc=35044,Cc="300 es",ba=1035,Bn=2e3,$s=2001;class Ii{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Aa=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function pg(n,e){return(n%e+e)%e}function No(n,e,t){return(1-t)*n+t*e}function Pc(n){return(n&n-1)===0&&n!==0}function wa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],_=r[0],m=r[3],d=r[6],y=r[1],x=r[4],T=r[7],b=r[2],D=r[5],P=r[8];return s[0]=a*_+o*y+l*b,s[3]=a*m+o*x+l*D,s[6]=a*d+o*T+l*P,s[1]=c*_+u*y+f*b,s[4]=c*m+u*x+f*D,s[7]=c*d+u*T+f*P,s[2]=h*_+p*y+v*b,s[5]=h*m+p*x+v*D,s[8]=h*d+p*T+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Xe;function dh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Lc={};function Vr(n){n in Lc||(Lc[n]=!0,console.warn(n))}function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const mg=new Xe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gg=new Xe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function _g(n){return n.convertSRGBToLinear().applyMatrix3(gg)}function vg(n){return n.applyMatrix3(mg).convertLinearToSRGB()}const xg={[Tn]:n=>n,[ke]:n=>n.convertSRGBToLinear(),[hh]:_g},Mg={[Tn]:n=>n,[ke]:n=>n.convertLinearToSRGB(),[hh]:vg},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Tn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=xg[e],r=Mg[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Bi;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Ks("canvas")),Bi.width=e.width,Bi.height=e.height;const i=Bi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sg=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=rs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Bo(r[a].image)):s.push(Bo(r[a]))}else s=Bo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ph.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;class jt extends Ii{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=ln,r=ln,s=Zt,a=Zr,o=cn,l=oi,c=jt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=rs(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===wi?ke:Ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?wi:uh}set encoding(e){Vr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wi?ke:Ri}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=ih;jt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(p+1)/2,b=(d+1)/2,D=(u+h)/4,P=(f+_)/4,V=(v+m)/4;return x>T&&x>b?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=D/i,s=P/i):T>b?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=D/r,s=V/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=V/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-v)*(m-v)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends Ii{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Vr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wi?ke:Ri),this.texture=new jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gh extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yg extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==v){let m=1-o;const d=l*h+c*p+u*v+f*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),D=Math.atan2(b,d*y);m=Math.sin(m*D)/b,o=Math.sin(o*D)/b}const T=o*y;if(l=l*m+h*T,c=c*m+p*T,u=u*m+v*T,f=f*m+_*T,m===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zo.copy(this).projectOnVector(e),this.sub(zo)}reflect(e){return this.sub(zo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new B,Dc=new Pi;class ss{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),zi.copy(e.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Rn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else r.boundingBox===null&&r.computeBoundingBox(),zi.copy(r.boundingBox),zi.applyMatrix4(e.matrixWorld),this.union(zi)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ds.subVectors(this.max,br),Hi.subVectors(e.a,br),Gi.subVectors(e.b,br),Vi.subVectors(e.c,br),jn.subVectors(Gi,Hi),Yn.subVectors(Vi,Gi),mi.subVectors(Hi,Vi);let t=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-mi.z,mi.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,mi.z,0,-mi.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-mi.y,mi.x,0];return!Ho(t,Hi,Gi,Vi,ds)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Hi,Gi,Vi,ds))?!1:(ps.crossVectors(jn,Yn),t=[ps.x,ps.y,ps.z],Ho(t,Hi,Gi,Vi,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new B,new B,new B,new B,new B,new B,new B,new B],Rn=new B,zi=new ss,Hi=new B,Gi=new B,Vi=new B,jn=new B,Yn=new B,mi=new B,br=new B,ds=new B,ps=new B,gi=new B;function Ho(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){gi.fromArray(n,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=i.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Tg=new ss,Ar=new B,Go=new B;class oo{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Tg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Go)),this.expandByPoint(Ar.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new B,Vo=new B,ms=new B,$n=new B,ko=new B,gs=new B,Wo=new B;class al{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vo.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Vo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=$n.dot(this.direction),l=-$n.dot(ms),c=$n.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vo).addScaledVector(ms,h),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){ko.subVectors(t,e),gs.subVectors(i,e),Wo.crossVectors(ko,gs);let a=this.direction.dot(Wo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const l=o*this.direction.dot(gs.crossVectors($n,gs));if(l<0)return null;const c=o*this.direction.dot(ko.cross($n));if(c<0||l+c>a)return null;const u=-o*$n.dot(Wo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,_,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,_,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,_=c*f;t[0]=h+_*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,_=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Ag)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Kn.crossVectors(i,kt),Kn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Kn.crossVectors(i,kt)),Kn.normalize(),_s.crossVectors(kt,Kn),r[0]=Kn.x,r[4]=_s.x,r[8]=kt.x,r[1]=Kn.y,r[5]=_s.y,r[9]=kt.y,r[2]=Kn.z,r[6]=_s.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],_=i[6],m=i[10],d=i[14],y=i[3],x=i[7],T=i[11],b=i[15],D=r[0],P=r[4],V=r[8],S=r[12],R=r[1],J=r[5],ue=r[9],N=r[13],X=r[2],$=r[6],se=r[10],q=r[14],j=r[3],fe=r[7],he=r[11],H=r[15];return s[0]=a*D+o*R+l*X+c*j,s[4]=a*P+o*J+l*$+c*fe,s[8]=a*V+o*ue+l*se+c*he,s[12]=a*S+o*N+l*q+c*H,s[1]=u*D+f*R+h*X+p*j,s[5]=u*P+f*J+h*$+p*fe,s[9]=u*V+f*ue+h*se+p*he,s[13]=u*S+f*N+h*q+p*H,s[2]=v*D+_*R+m*X+d*j,s[6]=v*P+_*J+m*$+d*fe,s[10]=v*V+_*ue+m*se+d*he,s[14]=v*S+_*N+m*q+d*H,s[3]=y*D+x*R+T*X+b*j,s[7]=y*P+x*J+T*$+b*fe,s[11]=y*V+x*ue+T*se+b*he,s[15]=y*S+x*N+T*q+b*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],_=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+_*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],_=e[13],m=e[14],d=e[15],y=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,x=v*h*c-u*m*c-v*l*p+a*m*p+u*l*d-a*h*d,T=u*_*c-v*f*c+v*o*p-a*_*p-u*o*d+a*f*d,b=v*f*l-u*_*l-v*o*h+a*_*h+u*o*m-a*f*m,D=t*y+i*x+r*T+s*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=y*P,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*P,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*P,e[4]=x*P,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*P,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*P,e[8]=T*P,e[9]=(v*f*s-u*_*s-v*i*p+t*_*p+u*i*d-t*f*d)*P,e[10]=(a*_*s-v*o*s+v*i*c-t*_*c-a*i*d+t*o*d)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*P,e[12]=b*P,e[13]=(u*_*r-v*f*r+v*i*h-t*_*h-u*i*m+t*f*m)*P,e[14]=(v*o*r-a*_*r-v*i*l+t*_*l+a*i*m-t*o*m)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,_=a*u,m=a*f,d=o*f,y=l*c,x=l*u,T=l*f,b=i.x,D=i.y,P=i.z;return r[0]=(1-(_+d))*b,r[1]=(p+T)*b,r[2]=(v-x)*b,r[3]=0,r[4]=(p-T)*D,r[5]=(1-(h+d))*D,r[6]=(m+y)*D,r[7]=0,r[8]=(v+x)*P,r[9]=(m-y)*P,r[10]=(1-(h+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ki.set(r[0],r[1],r[2]).length();const a=ki.set(r[4],r[5],r[6]).length(),o=ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Bn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(o===Bn)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===$s)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Bn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,p=(i+r)*u;let v,_;if(o===Bn)v=(a+s)*f,_=-2*f;else if(o===$s)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ki=new B,nn=new ft,bg=new B(0,0,0),Ag=new B(1,1,1),Kn=new B,_s=new B,kt=new B,Uc=new ft,Ic=new Pi;class os{constructor(e=0,t=0,i=0,r=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wg=0;const Nc=new B,Wi=new Pi,Pn=new ft,vs=new B,wr=new B,Rg=new B,Cg=new Pi,Oc=new B(1,0,0),Fc=new B(0,1,0),Bc=new B(0,0,1),Pg={type:"added"},zc={type:"removed"};class Mt extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new B,t=new os,i=new Pi,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Xe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(Fc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Nc.copy(e).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(Fc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vs.copy(e):vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(wr,vs,this.up):Pn.lookAt(vs,wr,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Pn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(zc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new B(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new B,Ln=new B,Xo=new B,Dn=new B,Xi=new B,qi=new B,Hc=new B,qo=new B,jo=new B,Yo=new B;let xs=!1;class on{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Ln.subVectors(i,t),Xo.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Ln),l=rn.dot(Xo),c=Ln.dot(Ln),u=Ln.dot(Xo),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dn),Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getUV(e,t,i,r,s,a,o,l){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Dn),l.setScalar(0),l.addScaledVector(s,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Ln.subVectors(e,t),rn.cross(Ln).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),rn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return xs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xs=!0),on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Xi.subVectors(r,i),qi.subVectors(s,i),qo.subVectors(e,i);const l=Xi.dot(qo),c=qi.dot(qo);if(l<=0&&c<=0)return t.copy(i);jo.subVectors(e,r);const u=Xi.dot(jo),f=qi.dot(jo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Xi,a);Yo.subVectors(e,s);const p=Xi.dot(Yo),v=qi.dot(Yo);if(v>=0&&p<=v)return t.copy(s);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(qi,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return Hc.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(Hc,o);const d=1/(m+_+h);return a=_*d,o=h*d,t.copy(i).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lg=0;class Mr extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=fr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function $o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tn.workingColorSpace){return this.r=e,this.g=t,this.b=i,tn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tn.workingColorSpace){if(e=pg(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=$o(a,s,e+1/3),this.g=$o(a,s,e),this.b=$o(a,s,e-1/3)}return tn.toWorkingColorSpace(this,r),this}setStyle(e,t=ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Fo(e.r),this.g=Fo(e.g),this.b=Fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return tn.fromWorkingColorSpace(yt.copy(this),e),Math.round(It(yt.r*255,0,255))*65536+Math.round(It(yt.g*255,0,255))*256+Math.round(It(yt.b*255,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,r=yt.g,s=yt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=ke){tn.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,r=yt.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Ms);const i=No(sn.h,Ms.h,t),r=No(sn.s,Ms.s,t),s=No(sn.l,Ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Qe;Qe.NAMES=_h;class vh extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new B,Ss=new Fe;class Yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Rc,this.updateRange={offset:0,count:-1},this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class xh extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Mh extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dg=0;const Kt=new ft,Ko=new Mt,ji=new B,Wt=new ss,Rr=new ss,vt=new B;class Qt extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dh(e)?Mh:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Wt.min,Rr.min),Wt.expandByPoint(vt),vt.addVectors(Wt.max,Rr.max),Wt.expandByPoint(vt)):(Wt.expandByPoint(Rr.min),Wt.expandByPoint(Rr.max))}Wt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),vt.add(ji)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new B,u[R]=new B;const f=new B,h=new B,p=new B,v=new Fe,_=new Fe,m=new Fe,d=new B,y=new B;function x(R,J,ue){f.fromArray(r,R*3),h.fromArray(r,J*3),p.fromArray(r,ue*3),v.fromArray(a,R*2),_.fromArray(a,J*2),m.fromArray(a,ue*2),h.sub(f),p.sub(f),_.sub(v),m.sub(v);const N=1/(_.x*m.y-m.x*_.y);isFinite(N)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(N),y.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(N),c[R].add(d),c[J].add(d),c[ue].add(d),u[R].add(y),u[J].add(y),u[ue].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let R=0,J=T.length;R<J;++R){const ue=T[R],N=ue.start,X=ue.count;for(let $=N,se=N+X;$<se;$+=3)x(i[$+0],i[$+1],i[$+2])}const b=new B,D=new B,P=new B,V=new B;function S(R){P.fromArray(s,R*3),V.copy(P);const J=c[R];b.copy(J),b.sub(P.multiplyScalar(P.dot(J))).normalize(),D.crossVectors(V,J);const N=D.dot(u[R])<0?-1:1;l[R*4]=b.x,l[R*4+1]=b.y,l[R*4+2]=b.z,l[R*4+3]=N}for(let R=0,J=T.length;R<J;++R){const ue=T[R],N=ue.start,X=ue.count;for(let $=N,se=N+X;$<se;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new Yt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new ft,_i=new al,Es=new oo,Vc=new B,Yi=new B,$i=new B,Ki=new B,Zo=new B,ys=new B,Ts=new Fe,bs=new Fe,As=new Fe,kc=new B,Wc=new B,Xc=new B,ws=new B,Rs=new B;class zn extends Mt{constructor(e=new Qt,t=new vh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Zo.fromBufferAttribute(f,e),a?ys.addScaledVector(Zo,u):ys.addScaledVector(Zo.sub(t),u))}t.add(ys)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere),Es.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Es.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Es,Vc)===null||_i.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,b=x;T<b;T+=3){const D=o.getX(T),P=o.getX(T+1),V=o.getX(T+2);r=Cs(this,d,e,i,c,u,f,D,P,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const y=o.getX(m),x=o.getX(m+1),T=o.getX(m+2);r=Cs(this,a,e,i,c,u,f,y,x,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=h.length;v<_;v++){const m=h[v],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=y,b=x;T<b;T+=3){const D=T,P=T+1,V=T+2;r=Cs(this,d,e,i,c,u,f,D,P,V),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){const y=m,x=m+1,T=m+2;r=Cs(this,a,e,i,c,u,f,y,x,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ug(n,e,t,i,r,s,a,o){let l;if(e.side===zt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ci,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Yi),n.getVertexPosition(l,$i),n.getVertexPosition(c,Ki);const u=Ug(n,e,t,i,Yi,$i,Ki,ws);if(u){r&&(Ts.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),u.uv=on.getInterpolation(ws,Yi,$i,Ki,Ts,bs,As,new Fe)),s&&(Ts.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),u.uv1=on.getInterpolation(ws,Yi,$i,Ki,Ts,bs,As,new Fe),u.uv2=u.uv1),a&&(kc.fromBufferAttribute(a,o),Wc.fromBufferAttribute(a,l),Xc.fromBufferAttribute(a,c),u.normal=on.getInterpolation(ws,Yi,$i,Ki,kc,Wc,Xc,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};on.getNormal(Yi,$i,Ki,f.normal),u.face=f}return u}class Li extends Qt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2));function v(_,m,d,y,x,T,b,D,P,V,S){const R=T/P,J=b/V,ue=T/2,N=b/2,X=D/2,$=P+1,se=V+1;let q=0,j=0;const fe=new B;for(let he=0;he<se;he++){const H=he*J-N;for(let Z=0;Z<$;Z++){const _e=Z*R-ue;fe[_]=_e*y,fe[m]=H*x,fe[d]=X,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[d]=D>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Z/P),f.push(1-he/V),q+=1}}for(let he=0;he<V;he++)for(let H=0;H<P;H++){const Z=h+H+$*he,_e=h+H+$*(he+1),ge=h+(H+1)+$*(he+1),ve=h+(H+1)+$*he;l.push(Z,_e,ve),l.push(_e,ge,ve),j+=6}o.addGroup(p,j,S),p+=j,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=_r(n[t]);for(const r in i)e[r]=i[r]}return e}function Ig(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sh(n){return n.getRenderTarget()===null?n.outputColorSpace:Tn}const Ng={clone:_r,merge:Pt};var Og=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Og,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Eh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zi=-90,Ji=1;class Bg extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Jt(Zi,Ji,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Zi,Ji,e,t);s.layers=this.layers,this.add(s);const a=new Jt(Zi,Ji,e,t);a.layers=this.layers,this.add(a);const o=new Jt(Zi,Ji,e,t);o.layers=this.layers,this.add(o);const l=new Jt(Zi,Ji,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class yh extends jt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:pr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zg extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Vr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wi?ke:Ri),this.texture=new yh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Li(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:_r(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:si});s.uniforms.tEquirect.value=t;const a=new zn(r,s),o=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Zt),new Bg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Jo=new B,Hg=new B,Gg=new Xe;class Mi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jo.subVectors(i,t).cross(Hg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gg.getNormalMatrix(e),r=this.coplanarPoint(Jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new oo,Ps=new B;class cl{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],_=r[10],m=r[11],d=r[12],y=r[13],x=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,m-p,T-d).normalize(),i[1].setComponents(l+s,h+c,m+p,T+d).normalize(),i[2].setComponents(l+a,h+u,m+v,T+y).normalize(),i[3].setComponents(l-a,h-u,m-v,T-y).normalize(),i[4].setComponents(l-o,h-f,m-_,T-x).normalize(),t===Bn)i[5].setComponents(l+o,h+f,m+_,T+x).normalize();else if(t===$s)i[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Vg(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ao extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],_=[],m=[];for(let d=0;d<u;d++){const y=d*h-a;for(let x=0;x<c;x++){const T=x*f-s;v.push(T,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const x=y+c*d,T=y+c*(d+1),b=y+1+c*(d+1),D=y+1+c*d;p.push(x,T,D),p.push(T,b,D)}this.setIndex(p),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$g=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,H_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,j_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ev=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,av=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:kg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:qg,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:$g,aomap_pars_fragment:Kg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:Qg,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:o_,color_pars_fragment:a_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:h_,displacementmap_pars_vertex:d_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:E_,envmap_physical_pars_fragment:I_,envmap_vertex:y_,fog_vertex:T_,fog_pars_vertex:b_,fog_fragment:A_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:D_,lights_pars_begin:U_,lights_toon_fragment:N_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:H_,lights_fragment_begin:G_,lights_fragment_maps:V_,lights_fragment_end:k_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:j_,map_fragment:Y_,map_pars_fragment:$_,map_particle_fragment:K_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:r0,normal_fragment_maps:s0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:v0,dithering_pars_fragment:x0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:y0,shadowmap_vertex:T0,shadowmask_pars_fragment:b0,skinbase_vertex:A0,skinning_pars_vertex:w0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:U0,transmission_fragment:I0,transmission_pars_fragment:N0,uv_pars_fragment:O0,uv_pars_vertex:F0,uv_vertex:B0,worldpos_vertex:z0,background_vert:H0,background_frag:G0,backgroundCube_vert:V0,backgroundCube_frag:k0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:j0,distanceRGBA_vert:Y0,distanceRGBA_frag:$0,equirect_vert:K0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:Q0,meshbasic_vert:ev,meshbasic_frag:tv,meshlambert_vert:nv,meshlambert_frag:iv,meshmatcap_vert:rv,meshmatcap_frag:sv,meshnormal_vert:ov,meshnormal_frag:av,meshphong_vert:lv,meshphong_frag:cv,meshphysical_vert:uv,meshphysical_frag:fv,meshtoon_vert:hv,meshtoon_frag:dv,points_vert:pv,points_frag:mv,shadow_vert:gv,shadow_frag:_v,sprite_vert:vv,sprite_frag:xv},xe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},xn={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xn.physical={uniforms:Pt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Ls={r:0,b:0,g:0};function Mv(n,e,t,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let y=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0),n.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),y=!0;break}(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===so)?(u===void 0&&(u=new zn(new Li(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:_r(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==ke,(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new zn(new ao(2,2),new Di({name:"BackgroundMaterial",uniforms:_r(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==ke,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Ls,Sh(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:v}}function Sv(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(X,$,se,q,j){let fe=!1;if(a){const he=_(q,se,$);c!==he&&(c=he,p(c.object)),fe=d(X,q,se,j),fe&&y(X,q,se,j)}else{const he=$.wireframe===!0;(c.geometry!==q.id||c.program!==se.id||c.wireframe!==he)&&(c.geometry=q.id,c.program=se.id,c.wireframe=he,fe=!0)}j!==null&&t.update(j,n.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,V(X,$,se,q),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(X){return i.isWebGL2?n.bindVertexArray(X):s.bindVertexArrayOES(X)}function v(X){return i.isWebGL2?n.deleteVertexArray(X):s.deleteVertexArrayOES(X)}function _(X,$,se){const q=se.wireframe===!0;let j=o[X.id];j===void 0&&(j={},o[X.id]=j);let fe=j[$.id];fe===void 0&&(fe={},j[$.id]=fe);let he=fe[q];return he===void 0&&(he=m(h()),fe[q]=he),he}function m(X){const $=[],se=[],q=[];for(let j=0;j<r;j++)$[j]=0,se[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:se,attributeDivisors:q,object:X,attributes:{},index:null}}function d(X,$,se,q){const j=c.attributes,fe=$.attributes;let he=0;const H=se.getAttributes();for(const Z in H)if(H[Z].location>=0){const ge=j[Z];let ve=fe[Z];if(ve===void 0&&(Z==="instanceMatrix"&&X.instanceMatrix&&(ve=X.instanceMatrix),Z==="instanceColor"&&X.instanceColor&&(ve=X.instanceColor)),ge===void 0||ge.attribute!==ve||ve&&ge.data!==ve.data)return!0;he++}return c.attributesNum!==he||c.index!==q}function y(X,$,se,q){const j={},fe=$.attributes;let he=0;const H=se.getAttributes();for(const Z in H)if(H[Z].location>=0){let ge=fe[Z];ge===void 0&&(Z==="instanceMatrix"&&X.instanceMatrix&&(ge=X.instanceMatrix),Z==="instanceColor"&&X.instanceColor&&(ge=X.instanceColor));const ve={};ve.attribute=ge,ge&&ge.data&&(ve.data=ge.data),j[Z]=ve,he++}c.attributes=j,c.attributesNum=he,c.index=q}function x(){const X=c.newAttributes;for(let $=0,se=X.length;$<se;$++)X[$]=0}function T(X){b(X,0)}function b(X,$){const se=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;se[X]=1,q[X]===0&&(n.enableVertexAttribArray(X),q[X]=1),j[X]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,$),j[X]=$)}function D(){const X=c.newAttributes,$=c.enabledAttributes;for(let se=0,q=$.length;se<q;se++)$[se]!==X[se]&&(n.disableVertexAttribArray(se),$[se]=0)}function P(X,$,se,q,j,fe,he){he===!0?n.vertexAttribIPointer(X,$,se,j,fe):n.vertexAttribPointer(X,$,se,q,j,fe)}function V(X,$,se,q){if(i.isWebGL2===!1&&(X.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=q.attributes,fe=se.getAttributes(),he=$.defaultAttributeValues;for(const H in fe){const Z=fe[H];if(Z.location>=0){let _e=j[H];if(_e===void 0&&(H==="instanceMatrix"&&X.instanceMatrix&&(_e=X.instanceMatrix),H==="instanceColor"&&X.instanceColor&&(_e=X.instanceColor)),_e!==void 0){const ge=_e.normalized,ve=_e.itemSize,Re=t.get(_e);if(Re===void 0)continue;const G=Re.buffer,ae=Re.type,pe=Re.bytesPerElement,be=i.isWebGL2===!0&&(ae===n.INT||ae===n.UNSIGNED_INT||_e.gpuType===rh);if(_e.isInterleavedBufferAttribute){const Se=_e.data,g=Se.stride,C=_e.offset;if(Se.isInstancedInterleavedBuffer){for(let L=0;L<Z.locationSize;L++)b(Z.location+L,Se.meshPerAttribute);X.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let L=0;L<Z.locationSize;L++)T(Z.location+L);n.bindBuffer(n.ARRAY_BUFFER,G);for(let L=0;L<Z.locationSize;L++)P(Z.location+L,ve/Z.locationSize,ae,ge,g*pe,(C+ve/Z.locationSize*L)*pe,be)}else{if(_e.isInstancedBufferAttribute){for(let Se=0;Se<Z.locationSize;Se++)b(Z.location+Se,_e.meshPerAttribute);X.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Se=0;Se<Z.locationSize;Se++)T(Z.location+Se);n.bindBuffer(n.ARRAY_BUFFER,G);for(let Se=0;Se<Z.locationSize;Se++)P(Z.location+Se,ve/Z.locationSize,ae,ge,ve*pe,ve/Z.locationSize*Se*pe,be)}}else if(he!==void 0){const ge=he[H];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(Z.location,ge);break;case 3:n.vertexAttrib3fv(Z.location,ge);break;case 4:n.vertexAttrib4fv(Z.location,ge);break;default:n.vertexAttrib1fv(Z.location,ge)}}}}D()}function S(){ue();for(const X in o){const $=o[X];for(const se in $){const q=$[se];for(const j in q)v(q[j].object),delete q[j];delete $[se]}delete o[X]}}function R(X){if(o[X.id]===void 0)return;const $=o[X.id];for(const se in $){const q=$[se];for(const j in q)v(q[j].object),delete q[j];delete $[se]}delete o[X.id]}function J(X){for(const $ in o){const se=o[$];if(se[X.id]===void 0)continue;const q=se[X.id];for(const j in q)v(q[j].object),delete q[j];delete se[X.id]}}function ue(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ue,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:J,initAttributes:x,enableAttribute:T,disableUnusedAttributes:D}}function Ev(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function yv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,T=a||e.has("OES_texture_float"),b=x&&T,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:D}}function Tv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Mi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,x=y*4;let T=d.clippingState||null;l.value=T,T=u(v,h,x,p);for(let b=0;b!==x;++b)T[b]=t[b];d.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const d=p+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,T=p;x!==_;++x,T+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bv(n){let e=new WeakMap;function t(a,o){return o===Sa?a.mapping=pr:o===Ea&&(a.mapping=mr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Sa||o===Ea)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new zg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bh extends Eh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,qc=[.125,.215,.35,.446,.526,.582],Ei=20,Qo=new bh,jc=new Qe;let ea=null;const Si=(1+Math.sqrt(5))/2,Qi=1/Si,Yc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Si,Qi),new B(0,Si,-Qi),new B(Qi,0,Si),new B(-Qi,0,Si),new B(Si,Qi,0),new B(-Si,Qi,0)];class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ea=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea),e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Jr,format:cn,colorSpace:Tn,depthBuffer:!1},r=Kc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(s)),this._blurMaterial=wv(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,i,r){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(jc),u.toneMapping=Gn,u.autoClear=!1;const p=new vh({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),v=new zn(new Li,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(jc),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Ds(r,y*x,d>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new zn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yc[(r-1)%Yc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new zn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),_=s/v,m=isFinite(s)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const d=[];let y=0;for(let P=0;P<Ei;++P){const V=P/_,S=Math.exp(-V*V/2);d.push(S),P===0?y+=S:P<m&&(y+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const T=this._sizeLods[r],b=3*T*(r>x-ir?r-x+ir:0),D=4*(this._cubeSize-T);Ds(t,b,D,3*T,2*T),l.setRenderTarget(t),l.render(f,Qo)}}function Av(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+qc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ir?l=qc[a-n+ir-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,_=3,m=2,d=1,y=new Float32Array(_*v*p),x=new Float32Array(m*v*p),T=new Float32Array(d*v*p);for(let D=0;D<p;D++){const P=D%3*2/3-1,V=D>2?0:-1,S=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];y.set(S,_*v*D),x.set(h,m*v*D);const R=[D,D,D,D,D,D];T.set(R,d*v*D)}const b=new Qt;b.setAttribute("position",new Yt(y,_)),b.setAttribute("uv",new Yt(x,m)),b.setAttribute("faceIndex",new Yt(T,d)),e.push(b),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kc(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wv(n,e,t){const i=new Float32Array(Ei),r=new B(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Zc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Jc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Sa||l===Ea,u=l===pr||l===mr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new $c(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new $c(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Cv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Pv(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const _=h.morphAttributes[v];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const _=p[v];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,T=y.length;x<T;x+=3){const b=y[x+0],D=y[x+1],P=y[x+2];h.push(b,D,D,P,P,b)}}else{const y=v.array;_=v.version;for(let x=0,T=y.length/3-1;x<T;x+=3){const b=x+0,D=x+1,P=x+2;h.push(b,D,D,P,P,b)}}const m=new(dh(h)?Mh:xh)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Lv(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*l),t.update(p,s,1)}function f(h,p,v){if(v===0)return;let _,m;if(r)_=n,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,h*l,v),t.update(p,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Dv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Uv(n,e){return n[0]-e[0]}function Iv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nv(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new xt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==v){let X=function(){ue.dispose(),s.delete(u),u.removeEventListener("dispose",X)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let V=0;y===!0&&(V=1),x===!0&&(V=2),T===!0&&(V=3);let S=u.attributes.position.count*V,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const J=new Float32Array(S*R*4*v),ue=new gh(J,S,R,v);ue.type=ii,ue.needsUpdate=!0;const N=V*4;for(let $=0;$<v;$++){const se=b[$],q=D[$],j=P[$],fe=S*R*4*$;for(let he=0;he<se.count;he++){const H=he*N;y===!0&&(a.fromBufferAttribute(se,he),J[fe+H+0]=a.x,J[fe+H+1]=a.y,J[fe+H+2]=a.z,J[fe+H+3]=0),x===!0&&(a.fromBufferAttribute(q,he),J[fe+H+4]=a.x,J[fe+H+5]=a.y,J[fe+H+6]=a.z,J[fe+H+7]=0),T===!0&&(a.fromBufferAttribute(j,he),J[fe+H+8]=a.x,J[fe+H+9]=a.y,J[fe+H+10]=a.z,J[fe+H+11]=j.itemSize===4?a.w:1)}}_={count:v,texture:ue,size:new Fe(S,R)},s.set(u,_),u.addEventListener("dispose",X)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(n,"morphTargetBaseInfluence",d),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let x=0;x<p;x++)v[x]=[x,0];i[u.id]=v}for(let x=0;x<p;x++){const T=v[x];T[0]=x,T[1]=h[x]}v.sort(Iv);for(let x=0;x<8;x++)x<p&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Uv);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const T=o[x],b=T[0],D=T[1];b!==Number.MAX_SAFE_INTEGER&&D?(_&&u.getAttribute("morphTarget"+x)!==_[b]&&u.setAttribute("morphTarget"+x,_[b]),m&&u.getAttribute("morphNormal"+x)!==m[b]&&u.setAttribute("morphNormal"+x,m[b]),r[x]=D,d+=D):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Ov(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ah=new jt,wh=new gh,Rh=new yg,Ch=new yh,Qc=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qc[r];if(s===void 0&&(s=new Float32Array(r),Qc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function lo(n,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Fv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2fv(this.addr,e),mt(t,e)}}function zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;n.uniform3fv(this.addr,e),mt(t,e)}}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4fv(this.addr,e),mt(t,e)}}function Gv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;iu.set(i),n.uniformMatrix2fv(this.addr,!1,iu),mt(t,i)}}function Vv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;nu.set(i),n.uniformMatrix3fv(this.addr,!1,nu),mt(t,i)}}function kv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,i))return;tu.set(i),n.uniformMatrix4fv(this.addr,!1,tu),mt(t,i)}}function Wv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2iv(this.addr,e),mt(t,e)}}function qv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3iv(this.addr,e),mt(t,e)}}function jv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4iv(this.addr,e),mt(t,e)}}function Yv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;n.uniform2uiv(this.addr,e),mt(t,e)}}function Kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;n.uniform3uiv(this.addr,e),mt(t,e)}}function Zv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;n.uniform4uiv(this.addr,e),mt(t,e)}}function Jv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ah,r)}function Qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Rh,r)}function ex(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ch,r)}function tx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wh,r)}function nx(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return Hv;case 35674:return Gv;case 35675:return Vv;case 35676:return kv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return jv;case 5125:return Yv;case 36294:return $v;case 36295:return Kv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(n,e){n.uniform1fv(this.addr,e)}function rx(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function sx(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function ox(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function ax(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function lx(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function cx(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ux(n,e){n.uniform1iv(this.addr,e)}function fx(n,e){n.uniform2iv(this.addr,e)}function hx(n,e){n.uniform3iv(this.addr,e)}function dx(n,e){n.uniform4iv(this.addr,e)}function px(n,e){n.uniform1uiv(this.addr,e)}function mx(n,e){n.uniform2uiv(this.addr,e)}function gx(n,e){n.uniform3uiv(this.addr,e)}function _x(n,e){n.uniform4uiv(this.addr,e)}function vx(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ah,s[a])}function xx(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Rh,s[a])}function Mx(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ch,s[a])}function Sx(n,e,t){const i=this.cache,r=e.length,s=lo(t,r);pt(i,s)||(n.uniform1iv(this.addr,s),mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||wh,s[a])}function Ex(n){switch(n){case 5126:return ix;case 35664:return rx;case 35665:return sx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}class yx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=nx(t.type)}}class Tx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Ex(t.type)}}class bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function ru(n,e){n.seq.push(e),n.map[e.id]=e}function Ax(n,e,t){const i=n.name,r=i.length;for(ta.lastIndex=0;;){const s=ta.exec(i),a=ta.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ru(t,c===void 0?new yx(o,n,e):new Tx(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new bx(o),ru(t,f)),t=f}}}class Hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ax(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function su(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let wx=0;function Rx(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Cx(n){switch(n){case Tn:return["Linear","( value )"];case ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function ou(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Rx(n.getShaderSource(e),a)}else return r}function Px(n,e){const t=Cx(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lx(n,e){let t;switch(e){case Gm:t="Linear";break;case Vm:t="Reinhard";break;case km:t="OptimizedCineon";break;case Wm:t="ACESFilmic";break;case Xm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function Ux(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ix(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ir(n){return n!==""}function au(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(n){return n.replace(Nx,Fx)}const Ox=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fx(n,e){let t=Ve[e];if(t===void 0){const i=Ox.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ra(t)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(n){return n.replace(Bx,zx)}function zx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function Gx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===mr&&(e="ENVMAP_MODE_REFRACTION"),e}function kx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sl:e="ENVMAP_BLENDING_MULTIPLY";break;case zm:e="ENVMAP_BLENDING_MIX";break;case Hm:e="ENVMAP_BLENDING_ADD";break}return e}function Wx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Xx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Hx(t),c=Gx(t),u=Vx(t),f=kx(t),h=Wx(t),p=t.isWebGL2?"":Dx(t),v=Ux(s),_=r.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ir).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(m=[uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[p,uu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ra(a),a=au(a,t),a=lu(a,t),o=Ra(o),o=au(o,t),o=lu(o,t),a=cu(a),o=cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+a,T=y+d+o,b=su(r,r.VERTEX_SHADER,x),D=su(r,r.FRAGMENT_SHADER,T);if(r.attachShader(_,b),r.attachShader(_,D),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(b).trim(),J=r.getShaderInfoLog(D).trim();let ue=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,D);else{const X=ou(r,b,"vertex"),$=ou(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+X+`
`+$)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||J==="")&&(N=!1);N&&(this.diagnostics={runnable:ue,programLog:S,vertexShader:{log:R,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(b),r.deleteShader(D);let P;this.getUniforms=function(){return P===void 0&&(P=new Hs(r,_)),P};let V;return this.getAttributes=function(){return V===void 0&&(V=Ix(r,_)),V},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=D,this}let qx=0;class jx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yx(e),t.set(e,i)),i}}class Yx{constructor(e){this.id=qx++,this.code=e,this.usedTimes=0}}function $x(n,e,t,i,r,s,a){const o=new ll,l=new jx,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,R,J,ue,N){const X=ue.fog,$=N.geometry,se=S.isMeshStandardMaterial?ue.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||se),j=q&&q.mapping===so?q.image.height:null,fe=v[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const he=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,H=he!==void 0?he.length:0;let Z=0;$.morphAttributes.position!==void 0&&(Z=1),$.morphAttributes.normal!==void 0&&(Z=2),$.morphAttributes.color!==void 0&&(Z=3);let _e,ge,ve,Re;if(fe){const pn=xn[fe];_e=pn.vertexShader,ge=pn.fragmentShader}else _e=S.vertexShader,ge=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),Re=l.getFragmentShaderID(S);const G=n.getRenderTarget(),ae=N.isInstancedMesh===!0,pe=!!S.map,be=!!S.matcap,Se=!!q,g=!!S.aoMap,C=!!S.lightMap,L=!!S.bumpMap,O=!!S.normalMap,z=!!S.displacementMap,Y=!!S.emissiveMap,ce=!!S.metalnessMap,ne=!!S.roughnessMap,le=S.anisotropy>0,ie=S.clearcoat>0,we=S.iridescence>0,E=S.sheen>0,M=S.transmission>0,I=le&&!!S.anisotropyMap,Q=ie&&!!S.clearcoatMap,oe=ie&&!!S.clearcoatNormalMap,w=ie&&!!S.clearcoatRoughnessMap,re=we&&!!S.iridescenceMap,de=we&&!!S.iridescenceThicknessMap,W=E&&!!S.sheenColorMap,ye=E&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Le=!!S.specularColorMap,Me=!!S.specularIntensityMap,Ee=M&&!!S.transmissionMap,De=M&&!!S.thicknessMap,We=!!S.gradientMap,U=!!S.alphaMap,Te=S.alphaTest>0,K=!!S.alphaHash,me=!!S.extensions,Ae=!!$.attributes.uv1,Ye=!!$.attributes.uv2,rt=!!$.attributes.uv3;return{isWebGL2:u,shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:_e,fragmentShader:ge,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:Re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:ae,instancingColor:ae&&N.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tn,map:pe,matcap:be,envMap:Se,envMapMode:Se&&q.mapping,envMapCubeUVHeight:j,aoMap:g,lightMap:C,bumpMap:L,normalMap:O,displacementMap:h&&z,emissiveMap:Y,normalMapObjectSpace:O&&S.normalMapType===rg,normalMapTangentSpace:O&&S.normalMapType===fh,metalnessMap:ce,roughnessMap:ne,anisotropy:le,anisotropyMap:I,clearcoat:ie,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:w,iridescence:we,iridescenceMap:re,iridescenceThicknessMap:de,sheen:E,sheenColorMap:W,sheenRoughnessMap:ye,specularMap:Pe,specularColorMap:Le,specularIntensityMap:Me,transmission:M,transmissionMap:Ee,thicknessMap:De,gradientMap:We,opaque:S.transparent===!1&&S.blending===fr,alphaMap:U,alphaTest:Te,alphaHash:K,combine:S.combine,mapUv:pe&&_(S.map.channel),aoMapUv:g&&_(S.aoMap.channel),lightMapUv:C&&_(S.lightMap.channel),bumpMapUv:L&&_(S.bumpMap.channel),normalMapUv:O&&_(S.normalMap.channel),displacementMapUv:z&&_(S.displacementMap.channel),emissiveMapUv:Y&&_(S.emissiveMap.channel),metalnessMapUv:ce&&_(S.metalnessMap.channel),roughnessMapUv:ne&&_(S.roughnessMap.channel),anisotropyMapUv:I&&_(S.anisotropyMap.channel),clearcoatMapUv:Q&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:w&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:W&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:Le&&_(S.specularColorMap.channel),specularIntensityMapUv:Me&&_(S.specularIntensityMap.channel),transmissionMapUv:Ee&&_(S.transmissionMap.channel),thicknessMapUv:De&&_(S.thicknessMap.channel),alphaMapUv:U&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(O||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ye,vertexUv3s:rt,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(pe||U),fog:!!X,useFog:S.fog===!0,fogExp2:X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&J.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:Gn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mn,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)R.push(J),R.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(y(R,S),x(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function y(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function x(S,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),S.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),S.push(o.mask)}function T(S){const R=v[S.type];let J;if(R){const ue=xn[R];J=Ng.clone(ue.uniforms)}else J=S.uniforms;return J}function b(S,R){let J;for(let ue=0,N=c.length;ue<N;ue++){const X=c[ue];if(X.cacheKey===R){J=X,++J.usedTimes;break}}return J===void 0&&(J=new Xx(n,R,S,s),c.push(J)),J}function D(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:b,releaseProgram:D,releaseShaderCache:P,programs:c,dispose:V}}function Kx(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,v,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function o(f,h,p,v,_,m){const d=a(f,h,p,v,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,_,m){const d=a(f,h,p,v,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Zx),i.length>1&&i.sort(h||fu),r.length>1&&r.sort(h||fu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Jx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new hu,n.set(i,[a])):r>=s.length?(a=new hu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Qx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function eM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tM=0;function nM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iM(n,e){const t=new Qx,i=eM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new B);const s=new B,a=new ft,o=new ft;function l(u,f){let h=0,p=0,v=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,T=0,b=0,D=0,P=0,V=0;u.sort(nM);const S=f===!0?Math.PI:1;for(let J=0,ue=u.length;J<ue;J++){const N=u[J],X=N.color,$=N.intensity,se=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=X.r*$*S,p+=X.g*$*S,v+=X.b*$*S;else if(N.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],$);else if(N.isDirectionalLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const fe=N.shadow,he=i.get(N);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,r.directionalShadow[_]=he,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=N.shadow.matrix,T++}r.directional[_]=j,_++}else if(N.isSpotLight){const j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(X).multiplyScalar($*S),j.distance=se,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[d]=j;const fe=N.shadow;if(N.map&&(r.spotLightMap[P]=N.map,P++,fe.updateMatrices(N),N.castShadow&&V++),r.spotLightMatrix[d]=fe.matrix,N.castShadow){const he=i.get(N);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,r.spotShadow[d]=he,r.spotShadowMap[d]=q,D++}d++}else if(N.isRectAreaLight){const j=t.get(N);j.color.copy(X).multiplyScalar($),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[y]=j,y++}else if(N.isPointLight){const j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*S),j.distance=N.distance,j.decay=N.decay,N.castShadow){const fe=N.shadow,he=i.get(N);he.shadowBias=fe.bias,he.shadowNormalBias=fe.normalBias,he.shadowRadius=fe.radius,he.shadowMapSize=fe.mapSize,he.shadowCameraNear=fe.camera.near,he.shadowCameraFar=fe.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=N.shadow.matrix,b++}r.point[m]=j,m++}else if(N.isHemisphereLight){const j=t.get(N);j.skyColor.copy(N.color).multiplyScalar($*S),j.groundColor.copy(N.groundColor).multiplyScalar($*S),r.hemi[x]=j,x++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==y||R.hemiLength!==x||R.numDirectionalShadows!==T||R.numPointShadows!==b||R.numSpotShadows!==D||R.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=D+P-V,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=V,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=y,R.hemiLength=x,R.numDirectionalShadows=T,R.numPointShadows=b,R.numSpotShadows=D,R.numSpotMaps=P,r.version=tM++)}function c(u,f){let h=0,p=0,v=0,_=0,m=0;const d=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const T=u[y];if(T.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(T.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),v++}else if(T.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function du(n,e){const t=new iM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function rM(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new du(n,e),t.set(s,[l])):a>=o.length?(l=new du(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class sM extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oM extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cM(n,e,t){let i=new cl;const r=new Fe,s=new Fe,a=new xt,o=new sM({depthPacking:ig}),l=new oM,c={},u=t.maxTextureSize,f={[ci]:zt,[zt]:ci,[Mn]:Mn},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:aM,fragmentShader:lM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Qt;v.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let d=this.type;this.render=function(b,D,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const V=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),J=n.state;J.setBlending(si),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ue=d!==In&&this.type===In,N=d===In&&this.type!==In;for(let X=0,$=b.length;X<$;X++){const se=b[X],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const j=q.getFrameExtents();if(r.multiply(j),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,q.mapSize.y=s.y)),q.map===null||ue===!0||N===!0){const he=this.type!==In?{minFilter:Dt,magFilter:Dt}:{};q.map!==null&&q.map.dispose(),q.map=new Ci(r.x,r.y,he),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const fe=q.getViewportCount();for(let he=0;he<fe;he++){const H=q.getViewport(he);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),J.viewport(a),q.updateMatrices(se,he),i=q.getFrustum(),T(D,P,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===In&&y(q,P),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(V,S,R)};function y(b,D){const P=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ci(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(D,null,P,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(D,null,P,p,_,null)}function x(b,D,P,V){let S=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const J=S.uuid,ue=D.uuid;let N=c[J];N===void 0&&(N={},c[J]=N);let X=N[ue];X===void 0&&(X=S.clone(),N[ue]=X),S=X}if(S.visible=D.visible,S.wireframe=D.wireframe,V===In?S.side=D.shadowSide!==null?D.shadowSide:D.side:S.side=D.shadowSide!==null?D.shadowSide:f[D.side],S.alphaMap=D.alphaMap,S.alphaTest=D.alphaTest,S.map=D.map,S.clipShadows=D.clipShadows,S.clippingPlanes=D.clippingPlanes,S.clipIntersection=D.clipIntersection,S.displacementMap=D.displacementMap,S.displacementScale=D.displacementScale,S.displacementBias=D.displacementBias,S.wireframeLinewidth=D.wireframeLinewidth,S.linewidth=D.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=n.properties.get(S);J.light=P}return S}function T(b,D,P,V,S){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===In)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const ue=e.update(b),N=b.material;if(Array.isArray(N)){const X=ue.groups;for(let $=0,se=X.length;$<se;$++){const q=X[$],j=N[q.materialIndex];if(j&&j.visible){const fe=x(b,j,V,S);n.renderBufferDirect(P,null,ue,fe,b,q)}}}else if(N.visible){const X=x(b,N,V,S);n.renderBufferDirect(P,null,ue,X,b,null)}}const J=b.children;for(let ue=0,N=J.length;ue<N;ue++)T(J[ue],D,P,V,S)}}function uM(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const Te=new xt;let K=null;const me=new xt(0,0,0,0);return{setMask:function(Ae){K!==Ae&&!U&&(n.colorMask(Ae,Ae,Ae,Ae),K=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Ye,rt,gt,pn){pn===!0&&(Ae*=gt,Ye*=gt,rt*=gt),Te.set(Ae,Ye,rt,gt),me.equals(Te)===!1&&(n.clearColor(Ae,Ye,rt,gt),me.copy(Te))},reset:function(){U=!1,K=null,me.set(-1,0,0,0)}}}function s(){let U=!1,Te=null,K=null,me=null;return{setTest:function(Ae){Ae?G(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Ae){Te!==Ae&&!U&&(n.depthMask(Ae),Te=Ae)},setFunc:function(Ae){if(K!==Ae){switch(Ae){case Dm:n.depthFunc(n.NEVER);break;case Um:n.depthFunc(n.ALWAYS);break;case Im:n.depthFunc(n.LESS);break;case Ma:n.depthFunc(n.LEQUAL);break;case Nm:n.depthFunc(n.EQUAL);break;case Om:n.depthFunc(n.GEQUAL);break;case Fm:n.depthFunc(n.GREATER);break;case Bm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){me!==Ae&&(n.clearDepth(Ae),me=Ae)},reset:function(){U=!1,Te=null,K=null,me=null}}}function a(){let U=!1,Te=null,K=null,me=null,Ae=null,Ye=null,rt=null,gt=null,pn=null;return{setTest:function(st){U||(st?G(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(st){Te!==st&&!U&&(n.stencilMask(st),Te=st)},setFunc:function(st,mn,wt){(K!==st||me!==mn||Ae!==wt)&&(n.stencilFunc(st,mn,wt),K=st,me=mn,Ae=wt)},setOp:function(st,mn,wt){(Ye!==st||rt!==mn||gt!==wt)&&(n.stencilOp(st,mn,wt),Ye=st,rt=mn,gt=wt)},setLocked:function(st){U=st},setClear:function(st){pn!==st&&(n.clearStencil(st),pn=st)},reset:function(){U=!1,Te=null,K=null,me=null,Ae=null,Ye=null,rt=null,gt=null,pn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,_=[],m=null,d=!1,y=null,x=null,T=null,b=null,D=null,P=null,V=null,S=!1,R=null,J=null,ue=null,N=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,q=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),se=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),se=q>=2);let fe=null,he={};const H=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),_e=new xt().fromArray(H),ge=new xt().fromArray(Z);function ve(U,Te,K,me){const Ae=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(U,Ye),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<K;rt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(Te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Te+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ye}const Re={};Re[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(n.DEPTH_TEST),l.setFunc(Ma),z(!1),Y(Jl),G(n.CULL_FACE),L(si);function G(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ae(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function pe(U,Te){return p[U]!==Te?(n.bindFramebuffer(U,Te),p[U]=Te,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Te),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Te)),!0):!1}function be(U,Te){let K=_,me=!1;if(U)if(K=v.get(Te),K===void 0&&(K=[],v.set(Te,K)),U.isWebGLMultipleRenderTargets){const Ae=U.texture;if(K.length!==Ae.length||K[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,rt=Ae.length;Ye<rt;Ye++)K[Ye]=n.COLOR_ATTACHMENT0+Ye;K.length=Ae.length,me=!0}}else K[0]!==n.COLOR_ATTACHMENT0&&(K[0]=n.COLOR_ATTACHMENT0,me=!0);else K[0]!==n.BACK&&(K[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Se(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const g={[tr]:n.FUNC_ADD,[Sm]:n.FUNC_SUBTRACT,[Em]:n.FUNC_REVERSE_SUBTRACT};if(i)g[nc]=n.MIN,g[ic]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(g[nc]=U.MIN_EXT,g[ic]=U.MAX_EXT)}const C={[ym]:n.ZERO,[Tm]:n.ONE,[bm]:n.SRC_COLOR,[th]:n.SRC_ALPHA,[Lm]:n.SRC_ALPHA_SATURATE,[Cm]:n.DST_COLOR,[wm]:n.DST_ALPHA,[Am]:n.ONE_MINUS_SRC_COLOR,[nh]:n.ONE_MINUS_SRC_ALPHA,[Pm]:n.ONE_MINUS_DST_COLOR,[Rm]:n.ONE_MINUS_DST_ALPHA};function L(U,Te,K,me,Ae,Ye,rt,gt){if(U===si){d===!0&&(ae(n.BLEND),d=!1);return}if(d===!1&&(G(n.BLEND),d=!0),U!==Mm){if(U!==y||gt!==S){if((x!==tr||D!==tr)&&(n.blendEquation(n.FUNC_ADD),x=tr,D=tr),gt)switch(U){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.ONE,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ec:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,b=null,P=null,V=null,y=U,S=gt}return}Ae=Ae||Te,Ye=Ye||K,rt=rt||me,(Te!==x||Ae!==D)&&(n.blendEquationSeparate(g[Te],g[Ae]),x=Te,D=Ae),(K!==T||me!==b||Ye!==P||rt!==V)&&(n.blendFuncSeparate(C[K],C[me],C[Ye],C[rt]),T=K,b=me,P=Ye,V=rt),y=U,S=!1}function O(U,Te){U.side===Mn?ae(n.CULL_FACE):G(n.CULL_FACE);let K=U.side===zt;Te&&(K=!K),z(K),U.blending===fr&&U.transparent===!1?L(si):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const me=U.stencilWrite;c.setTest(me),me&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(U){R!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),R=U)}function Y(U){U!==_m?(G(n.CULL_FACE),U!==J&&(U===Jl?n.cullFace(n.BACK):U===vm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),J=U}function ce(U){U!==ue&&(se&&n.lineWidth(U),ue=U)}function ne(U,Te,K){U?(G(n.POLYGON_OFFSET_FILL),(N!==Te||X!==K)&&(n.polygonOffset(Te,K),N=Te,X=K)):ae(n.POLYGON_OFFSET_FILL)}function le(U){U?G(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function ie(U){U===void 0&&(U=n.TEXTURE0+$-1),fe!==U&&(n.activeTexture(U),fe=U)}function we(U,Te,K){K===void 0&&(fe===null?K=n.TEXTURE0+$-1:K=fe);let me=he[K];me===void 0&&(me={type:void 0,texture:void 0},he[K]=me),(me.type!==U||me.texture!==Te)&&(fe!==K&&(n.activeTexture(K),fe=K),n.bindTexture(U,Te||Re[U]),me.type=U,me.texture=Te)}function E(){const U=he[fe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function w(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){_e.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function Me(U){ge.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function Ee(U,Te){let K=f.get(Te);K===void 0&&(K=new WeakMap,f.set(Te,K));let me=K.get(U);me===void 0&&(me=n.getUniformBlockIndex(Te,U.name),K.set(U,me))}function De(U,Te){const me=f.get(Te).get(U);u.get(Te)!==me&&(n.uniformBlockBinding(Te,me,U.__bindingPointIndex),u.set(Te,me))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},fe=null,he={},p={},v=new WeakMap,_=[],m=null,d=!1,y=null,x=null,T=null,b=null,D=null,P=null,V=null,S=!1,R=null,J=null,ue=null,N=null,X=null,_e.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:G,disable:ae,bindFramebuffer:pe,drawBuffers:be,useProgram:Se,setBlending:L,setMaterial:O,setFlipSided:z,setCullFace:Y,setLineWidth:ce,setPolygonOffset:ne,setScissorTest:le,activeTexture:ie,bindTexture:we,unbindTexture:E,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:ye,texImage3D:Pe,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:de,texStorage3D:W,texSubImage2D:Q,texSubImage3D:oe,compressedTexSubImage2D:w,compressedTexSubImage3D:re,scissor:Le,viewport:Me,reset:We}}function fM(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,M){return d?new OffscreenCanvas(E,M):Ks("canvas")}function x(E,M,I,Q){let oe=1;if((E.width>Q||E.height>Q)&&(oe=Q/Math.max(E.width,E.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const w=M?wa:Math.floor,re=w(oe*E.width),de=w(oe*E.height);_===void 0&&(_=y(re,de));const W=I?y(re,de):_;return W.width=re,W.height=de,W.getContext("2d").drawImage(E,0,0,re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+re+"x"+de+")."),W}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function T(E){return Pc(E.width)&&Pc(E.height)}function b(E){return o?!1:E.wrapS!==ln||E.wrapT!==ln||E.minFilter!==Dt&&E.minFilter!==Zt}function D(E,M){return E.generateMipmaps&&M&&E.minFilter!==Dt&&E.minFilter!==Zt}function P(E){n.generateMipmap(E)}function V(E,M,I,Q,oe=!1){if(o===!1)return M;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let w=M;return M===n.RED&&(I===n.FLOAT&&(w=n.R32F),I===n.HALF_FLOAT&&(w=n.R16F),I===n.UNSIGNED_BYTE&&(w=n.R8)),M===n.RG&&(I===n.FLOAT&&(w=n.RG32F),I===n.HALF_FLOAT&&(w=n.RG16F),I===n.UNSIGNED_BYTE&&(w=n.RG8)),M===n.RGBA&&(I===n.FLOAT&&(w=n.RGBA32F),I===n.HALF_FLOAT&&(w=n.RGBA16F),I===n.UNSIGNED_BYTE&&(w=Q===ke&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(w=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(w=n.RGB5_A1)),(w===n.R16F||w===n.R32F||w===n.RG16F||w===n.RG32F||w===n.RGBA16F||w===n.RGBA32F)&&e.get("EXT_color_buffer_float"),w}function S(E,M,I){return D(E,I)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==Zt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function R(E){return E===Dt||E===rc||E===wo?n.NEAREST:n.LINEAR}function J(E){const M=E.target;M.removeEventListener("dispose",J),N(M),M.isVideoTexture&&v.delete(M)}function ue(E){const M=E.target;M.removeEventListener("dispose",ue),$(M)}function N(E){const M=i.get(E);if(M.__webglInit===void 0)return;const I=E.source,Q=m.get(I);if(Q){const oe=Q[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&X(E),Object.keys(Q).length===0&&m.delete(I)}i.remove(E)}function X(E){const M=i.get(E);n.deleteTexture(M.__webglTexture);const I=E.source,Q=m.get(I);delete Q[M.__cacheKey],a.memory.textures--}function $(E){const M=E.texture,I=i.get(E),Q=i.get(M);if(Q.__webglTexture!==void 0&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(I.__webglFramebuffer[oe]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let oe=0;oe<I.__webglColorRenderbuffer.length;oe++)I.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[oe]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let oe=0,w=M.length;oe<w;oe++){const re=i.get(M[oe]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(E)}let se=0;function q(){se=0}function j(){const E=se;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),se+=1,E}function fe(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function he(E,M){const I=i.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(I,E,M);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+M)}function H(E,M){const I=i.get(E);if(E.version>0&&I.__version!==E.version){pe(I,E,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+M)}function Z(E,M){const I=i.get(E);if(E.version>0&&I.__version!==E.version){pe(I,E,M);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+M)}function _e(E,M){const I=i.get(E);if(E.version>0&&I.__version!==E.version){be(I,E,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+M)}const ge={[ya]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},ve={[Dt]:n.NEAREST,[rc]:n.NEAREST_MIPMAP_NEAREST,[wo]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[qm]:n.LINEAR_MIPMAP_NEAREST,[Zr]:n.LINEAR_MIPMAP_LINEAR},Re={[og]:n.NEVER,[dg]:n.ALWAYS,[ag]:n.LESS,[cg]:n.LEQUAL,[lg]:n.EQUAL,[hg]:n.GEQUAL,[ug]:n.GREATER,[fg]:n.NOTEQUAL};function G(E,M,I){if(I?(n.texParameteri(E,n.TEXTURE_WRAP_S,ge[M.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ge[M.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ge[M.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ve[M.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ve[M.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==ln||M.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,R(M.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==Dt&&M.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Dt||M.minFilter!==wo&&M.minFilter!==Zr||M.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Jr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ae(E,M){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",J));const Q=M.source;let oe=m.get(Q);oe===void 0&&(oe={},m.set(Q,oe));const w=fe(M);if(w!==E.__cacheKey){oe[w]===void 0&&(oe[w]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),oe[w].usedTimes++;const re=oe[E.__cacheKey];re!==void 0&&(oe[E.__cacheKey].usedTimes--,re.usedTimes===0&&X(M)),E.__cacheKey=w,E.__webglTexture=oe[w].texture}return I}function pe(E,M,I){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const oe=ae(E,M),w=M.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+I);const re=i.get(w);if(w.version!==re.__version||oe===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const de=b(M)&&T(M.image)===!1;let W=x(M.image,de,!1,u);W=we(M,W);const ye=T(W)||o,Pe=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Me=V(M.internalFormat,Pe,Le,M.colorSpace);G(Q,M,ye);let Ee;const De=M.mipmaps,We=o&&M.isVideoTexture!==!0,U=re.__version===void 0||oe===!0,Te=S(M,W,ye);if(M.isDepthTexture)Me=n.DEPTH_COMPONENT,o?M.type===ii?Me=n.DEPTH_COMPONENT32F:M.type===ni?Me=n.DEPTH_COMPONENT24:M.type===bi?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:M.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ai&&Me===n.DEPTH_COMPONENT&&M.type!==ol&&M.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ni,Le=s.convert(M.type)),M.format===gr&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,M.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=bi,Le=s.convert(M.type))),U&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,W.width,W.height):t.texImage2D(n.TEXTURE_2D,0,Me,W.width,W.height,0,Pe,Le,null));else if(M.isDataTexture)if(De.length>0&&ye){We&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Me,De[0].width,De[0].height);for(let K=0,me=De.length;K<me;K++)Ee=De[K],We?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Pe,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,K,Me,Ee.width,Ee.height,0,Pe,Le,Ee.data);M.generateMipmaps=!1}else We?(U&&t.texStorage2D(n.TEXTURE_2D,Te,Me,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,W.width,W.height,Pe,Le,W.data)):t.texImage2D(n.TEXTURE_2D,0,Me,W.width,W.height,0,Pe,Le,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Me,De[0].width,De[0].height,W.depth);for(let K=0,me=De.length;K<me;K++)Ee=De[K],M.format!==cn?Pe!==null?We?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,W.depth,Pe,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Me,Ee.width,Ee.height,W.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Ee.width,Ee.height,W.depth,Pe,Le,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Me,Ee.width,Ee.height,W.depth,0,Pe,Le,Ee.data)}else{We&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Me,De[0].width,De[0].height);for(let K=0,me=De.length;K<me;K++)Ee=De[K],M.format!==cn?Pe!==null?We?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee.width,Ee.height,Pe,Le,Ee.data):t.texImage2D(n.TEXTURE_2D,K,Me,Ee.width,Ee.height,0,Pe,Le,Ee.data)}else if(M.isDataArrayTexture)We?(U&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Me,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Pe,Le,W.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,W.width,W.height,W.depth,0,Pe,Le,W.data);else if(M.isData3DTexture)We?(U&&t.texStorage3D(n.TEXTURE_3D,Te,Me,W.width,W.height,W.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Pe,Le,W.data)):t.texImage3D(n.TEXTURE_3D,0,Me,W.width,W.height,W.depth,0,Pe,Le,W.data);else if(M.isFramebufferTexture){if(U)if(We)t.texStorage2D(n.TEXTURE_2D,Te,Me,W.width,W.height);else{let K=W.width,me=W.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,K,me,0,Pe,Le,null),K>>=1,me>>=1}}else if(De.length>0&&ye){We&&U&&t.texStorage2D(n.TEXTURE_2D,Te,Me,De[0].width,De[0].height);for(let K=0,me=De.length;K<me;K++)Ee=De[K],We?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe,Le,Ee):t.texImage2D(n.TEXTURE_2D,K,Me,Pe,Le,Ee);M.generateMipmaps=!1}else We?(U&&t.texStorage2D(n.TEXTURE_2D,Te,Me,W.width,W.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Le,W)):t.texImage2D(n.TEXTURE_2D,0,Me,Pe,Le,W);D(M,ye)&&P(Q),re.__version=w.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function be(E,M,I){if(M.image.length!==6)return;const Q=ae(E,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const w=i.get(oe);if(oe.version!==w.__version||Q===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const re=M.isCompressedTexture||M.image[0].isCompressedTexture,de=M.image[0]&&M.image[0].isDataTexture,W=[];for(let K=0;K<6;K++)!re&&!de?W[K]=x(M.image[K],!1,!0,c):W[K]=de?M.image[K].image:M.image[K],W[K]=we(M,W[K]);const ye=W[0],Pe=T(ye)||o,Le=s.convert(M.format,M.colorSpace),Me=s.convert(M.type),Ee=V(M.internalFormat,Le,Me,M.colorSpace),De=o&&M.isVideoTexture!==!0,We=w.__version===void 0||Q===!0;let U=S(M,ye,Pe);G(n.TEXTURE_CUBE_MAP,M,Pe);let Te;if(re){De&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ee,ye.width,ye.height);for(let K=0;K<6;K++){Te=W[K].mipmaps;for(let me=0;me<Te.length;me++){const Ae=Te[me];M.format!==cn?Le!==null?De?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Ee,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ae.width,Ae.height,Le,Me,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Ee,Ae.width,Ae.height,0,Le,Me,Ae.data)}}}else{Te=M.mipmaps,De&&We&&(Te.length>0&&U++,t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ee,W[0].width,W[0].height));for(let K=0;K<6;K++)if(de){De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,W[K].width,W[K].height,Le,Me,W[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,W[K].width,W[K].height,0,Le,Me,W[K].data);for(let me=0;me<Te.length;me++){const Ye=Te[me].image[K].image;De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Ye.width,Ye.height,Le,Me,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Ee,Ye.width,Ye.height,0,Le,Me,Ye.data)}}else{De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,Me,W[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ee,Le,Me,W[K]);for(let me=0;me<Te.length;me++){const Ae=Te[me];De?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,Le,Me,Ae.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Ee,Le,Me,Ae.image[K])}}}D(M,Pe)&&P(n.TEXTURE_CUBE_MAP),w.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Se(E,M,I,Q,oe){const w=s.convert(I.format,I.colorSpace),re=s.convert(I.type),de=V(I.internalFormat,w,re,I.colorSpace);i.get(M).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,de,M.width,M.height,M.depth,0,w,re,null):t.texImage2D(oe,0,de,M.width,M.height,0,w,re,null)),t.bindFramebuffer(n.FRAMEBUFFER,E),le(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,oe,i.get(I).__webglTexture,0,ne(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,oe,i.get(I).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(E,M,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let Q=n.DEPTH_COMPONENT16;if(I||le(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ii?Q=n.DEPTH_COMPONENT32F:oe.type===ni&&(Q=n.DEPTH_COMPONENT24));const w=ne(M);le(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,w,Q,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,w,Q,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,Q,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){const Q=ne(M);I&&le(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,M.width,M.height):le(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<Q.length;oe++){const w=Q[oe],re=s.convert(w.format,w.colorSpace),de=s.convert(w.type),W=V(w.internalFormat,re,de,w.colorSpace),ye=ne(M);I&&le(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,W,M.width,M.height):le(M)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,W,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,W,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),he(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,oe=ne(M);if(M.depthTexture.format===Ai)le(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(M.depthTexture.format===gr)le(M)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function L(E){const M=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");C(M.__webglFramebuffer,E)}else if(I){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=n.createRenderbuffer(),g(M.__webglDepthbuffer[Q],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),g(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function O(E,M,I){const Q=i.get(E);M!==void 0&&Se(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),I!==void 0&&L(E)}function z(E){const M=E.texture,I=i.get(E),Q=i.get(M);E.addEventListener("dispose",ue),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,a.memory.textures++);const oe=E.isWebGLCubeRenderTarget===!0,w=E.isWebGLMultipleRenderTargets===!0,re=T(E)||o;if(oe){I.__webglFramebuffer=[];for(let de=0;de<6;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),w)if(r.drawBuffers){const de=E.texture;for(let W=0,ye=de.length;W<ye;W++){const Pe=i.get(de[W]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&le(E)===!1){const de=w?M:[M];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let W=0;W<de.length;W++){const ye=de[W];I.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[W]);const Pe=s.convert(ye.format,ye.colorSpace),Le=s.convert(ye.type),Me=V(ye.internalFormat,Pe,Le,ye.colorSpace,E.isXRRenderTarget===!0),Ee=ne(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Me,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+W,n.RENDERBUFFER,I.__webglColorRenderbuffer[W])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),g(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),G(n.TEXTURE_CUBE_MAP,M,re);for(let de=0;de<6;de++)Se(I.__webglFramebuffer[de],E,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de);D(M,re)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){const de=E.texture;for(let W=0,ye=de.length;W<ye;W++){const Pe=de[W],Le=i.get(Pe);t.bindTexture(n.TEXTURE_2D,Le.__webglTexture),G(n.TEXTURE_2D,Pe,re),Se(I.__webglFramebuffer,E,Pe,n.COLOR_ATTACHMENT0+W,n.TEXTURE_2D),D(Pe,re)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?de=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,Q.__webglTexture),G(de,M,re),Se(I.__webglFramebuffer,E,M,n.COLOR_ATTACHMENT0,de),D(M,re)&&P(de),t.unbindTexture()}E.depthBuffer&&L(E)}function Y(E){const M=T(E)||o,I=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,oe=I.length;Q<oe;Q++){const w=I[Q];if(D(w,M)){const re=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(w).__webglTexture;t.bindTexture(re,de),P(re),t.unbindTexture()}}}function ce(E){if(o&&E.samples>0&&le(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],I=E.width,Q=E.height;let oe=n.COLOR_BUFFER_BIT;const w=[],re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(E),W=E.isWebGLMultipleRenderTargets===!0;if(W)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){w.push(n.COLOR_ATTACHMENT0+ye),E.depthBuffer&&w.push(re);const Pe=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Pe===!1&&(E.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),W&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ye]),Pe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[re])),W){const Le=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,I,Q,0,0,I,Q,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),W)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,de.__webglColorRenderbuffer[ye]);const Pe=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function ne(E){return Math.min(f,E.samples)}function le(E){const M=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(E){const M=a.render.frame;v.get(E)!==M&&(v.set(E,M),E.update())}function we(E,M){const I=E.colorSpace,Q=E.format,oe=E.type;return E.isCompressedTexture===!0||E.format===ba||I!==Tn&&I!==Ri&&(I===ke?o===!1?e.has("EXT_sRGB")===!0&&Q===cn?(E.format=ba,E.minFilter=Zt,E.generateMipmaps=!1):M=ph.sRGBToLinear(M):(Q!==cn||oe!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=he,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=_e,this.rebindTextures=O,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=le}function hM(n,e,t){const i=t.isWebGL2;function r(s,a=Ri){let o;if(s===oi)return n.UNSIGNED_BYTE;if(s===sh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===oh)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jm)return n.BYTE;if(s===Ym)return n.SHORT;if(s===ol)return n.UNSIGNED_SHORT;if(s===rh)return n.INT;if(s===ni)return n.UNSIGNED_INT;if(s===ii)return n.FLOAT;if(s===Jr)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===$m)return n.ALPHA;if(s===cn)return n.RGBA;if(s===Km)return n.LUMINANCE;if(s===Zm)return n.LUMINANCE_ALPHA;if(s===Ai)return n.DEPTH_COMPONENT;if(s===gr)return n.DEPTH_STENCIL;if(s===ba)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jm)return n.RED;if(s===ah)return n.RED_INTEGER;if(s===Qm)return n.RG;if(s===lh)return n.RG_INTEGER;if(s===ch)return n.RGBA_INTEGER;if(s===Ro||s===Co||s===Po||s===Lo)if(a===ke)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Co)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sc||s===oc||s===ac||s===lc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===sc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ac)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===eg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cc||s===uc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===cc)return a===ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fc||s===hc||s===dc||s===pc||s===mc||s===gc||s===_c||s===vc||s===xc||s===Mc||s===Sc||s===Ec||s===yc||s===Tc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===fc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_c)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ec)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tc)return a===ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Do)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Do)return a===ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===tg||s===bc||s===Ac||s===wc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Do)return o.COMPRESSED_RED_RGTC1_EXT;if(s===bc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ac)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class dM extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class mM extends jt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ai,u!==Ai&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ai&&(i=ni),i===void 0&&u===gr&&(i=bi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gM extends Ii{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],x=[],T=new Jt;T.layers.enable(1),T.viewport=new xt;const b=new Jt;b.layers.enable(2),b.viewport=new xt;const D=[T,b],P=new dM;P.layers.enable(1),P.layers.enable(2);let V=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=y[H];return Z===void 0&&(Z=new na,y[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=y[H];return Z===void 0&&(Z=new na,y[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=y[H];return Z===void 0&&(Z=new na,y[H]=Z),Z.getHandSpace()};function R(H){const Z=x.indexOf(H.inputSource);if(Z===-1)return;const _e=y[Z];_e!==void 0&&(_e.update(H.inputSource,H.frame,c||a),_e.dispatchEvent({type:H.type,data:H.inputSource}))}function J(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ue);for(let H=0;H<y.length;H++){const Z=x[H];Z!==null&&(x[H]=null,y[H].disconnect(Z))}V=null,S=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,he.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ue),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),d=new Ci(p.framebufferWidth,p.framebufferHeight,{format:cn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,_e=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?gr:Ai,_e=_.stencil?bi:ni);const ve={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),d=new Ci(h.textureWidth,h.textureHeight,{format:cn,type:oi,depthTexture:new mM(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ue(H){for(let Z=0;Z<H.removed.length;Z++){const _e=H.removed[Z],ge=x.indexOf(_e);ge>=0&&(x[ge]=null,y[ge].disconnect(_e))}for(let Z=0;Z<H.added.length;Z++){const _e=H.added[Z];let ge=x.indexOf(_e);if(ge===-1){for(let Re=0;Re<y.length;Re++)if(Re>=x.length){x.push(_e),ge=Re;break}else if(x[Re]===null){x[Re]=_e,ge=Re;break}if(ge===-1)break}const ve=y[ge];ve&&ve.connect(_e)}}const N=new B,X=new B;function $(H,Z,_e){N.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(_e.matrixWorld);const ge=N.distanceTo(X),ve=Z.projectionMatrix.elements,Re=_e.projectionMatrix.elements,G=ve[14]/(ve[10]-1),ae=ve[14]/(ve[10]+1),pe=(ve[9]+1)/ve[5],be=(ve[9]-1)/ve[5],Se=(ve[8]-1)/ve[0],g=(Re[8]+1)/Re[0],C=G*Se,L=G*g,O=ge/(-Se+g),z=O*-Se;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(z),H.translateZ(O),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Y=G+O,ce=ae+O,ne=C-z,le=L+(ge-z),ie=pe*ae/ce*Y,we=be*ae/ce*Y;H.projectionMatrix.makePerspective(ne,le,ie,we,Y,ce),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function se(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;P.near=b.near=T.near=H.near,P.far=b.far=T.far=H.far,(V!==P.near||S!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,S=P.far);const Z=H.parent,_e=P.cameras;se(P,Z);for(let ge=0;ge<_e.length;ge++)se(_e[ge],Z);_e.length===2?$(P,T,b):P.projectionMatrix.copy(T.projectionMatrix),q(H,P,Z)};function q(H,Z,_e){_e===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(_e.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const ge=H.children;for(let ve=0,Re=ge.length;ve<Re;ve++)ge[ve].updateMatrixWorld(!0);H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Aa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let j=null;function fe(H,Z){if(u=Z.getViewerPose(c||a),v=Z,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ge=!1;_e.length!==P.cameras.length&&(P.cameras.length=0,ge=!0);for(let ve=0;ve<_e.length;ve++){const Re=_e[ve];let G=null;if(p!==null)G=p.getViewport(Re);else{const pe=f.getViewSubImage(h,Re);G=pe.viewport,ve===0&&(e.setRenderTargetTextures(d,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(d))}let ae=D[ve];ae===void 0&&(ae=new Jt,ae.layers.enable(ve),ae.viewport=new xt,D[ve]=ae),ae.matrix.fromArray(Re.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Re.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(G.x,G.y,G.width,G.height),ve===0&&(P.matrix.copy(ae.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),ge===!0&&P.cameras.push(ae)}}for(let _e=0;_e<y.length;_e++){const ge=x[_e],ve=y[_e];ge!==null&&ve!==void 0&&ve.update(ge,Z,c||a)}j&&j(H,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const he=new Th;he.setAnimationLoop(fe),this.setAnimationLoop=function(H){j=H},this.dispose=function(){}}}function _M(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Sh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,x,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const T=x.program;i.uniformBlockBinding(y,T)}function c(y,x){let T=r[y.id];T===void 0&&(v(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",m));const b=x.program;i.updateUBOMapping(y,b);const D=e.render.frame;s[y.id]!==D&&(h(y),s[y.id]=D)}function u(y){const x=f();y.__bindingPointIndex=x;const T=n.createBuffer(),b=y.__size,D=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,b,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=r[y.id],T=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let D=0,P=T.length;D<P;D++){const V=T[D];if(p(V,D,b)===!0){const S=V.__offset,R=Array.isArray(V.value)?V.value:[V.value];let J=0;for(let ue=0;ue<R.length;ue++){const N=R[ue],X=_(N);typeof N=="number"?(V.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,S+J,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=N.elements[0],V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=N.elements[0],V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=N.elements[0]):(N.toArray(V.__data,J),J+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,V.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,x,T){const b=y.value;if(T[x]===void 0){if(typeof b=="number")T[x]=b;else{const D=Array.isArray(b)?b:[b],P=[];for(let V=0;V<D.length;V++)P.push(D[V].clone());T[x]=P}return!0}else if(typeof b=="number"){if(T[x]!==b)return T[x]=b,!0}else{const D=Array.isArray(T[x])?T[x]:[T[x]],P=Array.isArray(b)?b:[b];for(let V=0;V<D.length;V++){const S=D[V];if(S.equals(P[V])===!1)return S.copy(P[V]),!0}}return!1}function v(y){const x=y.uniforms;let T=0;const b=16;let D=0;for(let P=0,V=x.length;P<V;P++){const S=x[P],R={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let ue=0,N=J.length;ue<N;ue++){const X=J[ue],$=_(X);R.boundary+=$.boundary,R.storage+=$.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=T,P>0){D=T%b;const ue=b-D;D!==0&&ue-R.boundary<0&&(T+=b-D,S.__offset=T)}T+=R.storage}return D=T%b,D>0&&(T+=b-D),y.__size=T,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}function xM(){const n=Ks("canvas");return n.style.display="block",n}class Ph{constructor(e={}){const{canvas:t=xM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let _=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ke,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let T=!1,b=0,D=0,P=null,V=-1,S=null;const R=new xt,J=new xt;let ue=null;const N=new Qe(0);let X=0,$=t.width,se=t.height,q=1,j=null,fe=null;const he=new xt(0,0,$,se),H=new xt(0,0,$,se);let Z=!1;const _e=new cl;let ge=!1,ve=!1,Re=null;const G=new ft,ae=new Fe,pe=new B,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return P===null?q:1}let g=i;function C(A,k){for(let ee=0;ee<A.length;ee++){const F=A[ee],te=t.getContext(F,k);if(te!==null)return te}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",me,!1),g===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),g=C(k,A),g===null)throw C(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let L,O,z,Y,ce,ne,le,ie,we,E,M,I,Q,oe,w,re,de,W,ye,Pe,Le,Me,Ee,De;function We(){L=new Cv(g),O=new yv(g,L,e),L.init(O),Me=new hM(g,L,O),z=new uM(g,L,O),Y=new Dv(g),ce=new Kx,ne=new fM(g,L,z,ce,O,Me,Y),le=new bv(x),ie=new Rv(x),we=new Vg(g,O),Ee=new Sv(g,L,we,O),E=new Pv(g,we,Y,Ee),M=new Ov(g,E,we,Y),ye=new Nv(g,O,ne),re=new Tv(ce),I=new $x(x,le,ie,L,O,Ee,re),Q=new _M(x,ce),oe=new Jx,w=new rM(L,O),W=new Mv(x,le,ie,z,M,h,l),de=new cM(x,M,O),De=new vM(g,Y,O,z),Pe=new Ev(g,L,Y,O),Le=new Lv(g,L,Y,O),Y.programs=I.programs,x.capabilities=O,x.extensions=L,x.properties=ce,x.renderLists=oe,x.shadowMap=de,x.state=z,x.info=Y}We();const U=new gM(x,g);this.xr=U,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const A=L.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=L.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize($,se,!1))},this.getSize=function(A){return A.set($,se)},this.setSize=function(A,k,ee=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,se=k,t.width=Math.floor(A*q),t.height=Math.floor(k*q),ee===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set($*q,se*q).floor()},this.setDrawingBufferSize=function(A,k,ee){$=A,se=k,q=ee,t.width=Math.floor(A*ee),t.height=Math.floor(k*ee),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,k,ee,F){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,k,ee,F),z.viewport(R.copy(he).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(H)},this.setScissor=function(A,k,ee,F){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,k,ee,F),z.scissor(J.copy(H).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){z.setScissorTest(Z=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(A=!0,k=!0,ee=!0){let F=0;if(A){let te=!1;if(P!==null){const Ce=P.texture.format;te=Ce===ch||Ce===lh||Ce===ah}if(te){const Ce=P.texture.type,Ue=Ce===oi||Ce===ni||Ce===ol||Ce===bi||Ce===sh||Ce===oh,Ne=W.getClearColor(),Oe=W.getClearAlpha(),qe=Ne.r,ze=Ne.g,Ge=Ne.b;Ue?(p[0]=qe,p[1]=ze,p[2]=Ge,p[3]=Oe,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=qe,v[1]=ze,v[2]=Ge,v[3]=Oe,g.clearBufferiv(g.COLOR,0,v))}else F|=g.COLOR_BUFFER_BIT}k&&(F|=g.DEPTH_BUFFER_BIT),ee&&(F|=g.STENCIL_BUFFER_BIT),g.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",me,!1),oe.dispose(),w.dispose(),ce.dispose(),le.dispose(),ie.dispose(),M.dispose(),Ee.dispose(),De.dispose(),I.dispose(),U.dispose(),U.removeEventListener("sessionstart",st),U.removeEventListener("sessionend",mn),Re&&(Re.dispose(),Re=null),wt.stop()};function Te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Y.autoReset,k=de.enabled,ee=de.autoUpdate,F=de.needsUpdate,te=de.type;We(),Y.autoReset=A,de.enabled=k,de.autoUpdate=ee,de.needsUpdate=F,de.type=te}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ae(A){const k=A.target;k.removeEventListener("dispose",Ae),Ye(k)}function Ye(A){rt(A),ce.remove(A)}function rt(A){const k=ce.get(A).programs;k!==void 0&&(k.forEach(function(ee){I.releaseProgram(ee)}),A.isShaderMaterial&&I.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,ee,F,te,Ce){k===null&&(k=be);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Ne=jh(A,k,ee,F,te);z.setMaterial(F,Ue);let Oe=ee.index,qe=1;F.wireframe===!0&&(Oe=E.getWireframeAttribute(ee),qe=2);const ze=ee.drawRange,Ge=ee.attributes.position;let ot=ze.start*qe,lt=(ze.start+ze.count)*qe;Ce!==null&&(ot=Math.max(ot,Ce.start*qe),lt=Math.min(lt,(Ce.start+Ce.count)*qe)),Oe!==null?(ot=Math.max(ot,0),lt=Math.min(lt,Oe.count)):Ge!=null&&(ot=Math.max(ot,0),lt=Math.min(lt,Ge.count));const en=lt-ot;if(en<0||en===1/0)return;Ee.setup(te,F,Ne,ee,Oe);let bn,ct=Pe;if(Oe!==null&&(bn=we.get(Oe),ct=Le,ct.setIndex(bn)),te.isMesh)F.wireframe===!0?(z.setLineWidth(F.wireframeLinewidth*Se()),ct.setMode(g.LINES)):ct.setMode(g.TRIANGLES);else if(te.isLine){let je=F.linewidth;je===void 0&&(je=1),z.setLineWidth(je*Se()),te.isLineSegments?ct.setMode(g.LINES):te.isLineLoop?ct.setMode(g.LINE_LOOP):ct.setMode(g.LINE_STRIP)}else te.isPoints?ct.setMode(g.POINTS):te.isSprite&&ct.setMode(g.TRIANGLES);if(te.isInstancedMesh)ct.renderInstances(ot,en,te.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,uo=Math.min(ee.instanceCount,je);ct.renderInstances(ot,en,uo)}else ct.render(ot,en)},this.compile=function(A,k){function ee(F,te,Ce){F.transparent===!0&&F.side===Mn&&F.forceSinglePass===!1?(F.side=zt,F.needsUpdate=!0,ls(F,te,Ce),F.side=ci,F.needsUpdate=!0,ls(F,te,Ce),F.side=Mn):ls(F,te,Ce)}m=w.get(A),m.init(),y.push(m),A.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(x.useLegacyLights),A.traverse(function(F){const te=F.material;if(te)if(Array.isArray(te))for(let Ce=0;Ce<te.length;Ce++){const Ue=te[Ce];ee(Ue,A,F)}else ee(te,A,F)}),y.pop(),m=null};let gt=null;function pn(A){gt&&gt(A)}function st(){wt.stop()}function mn(){wt.start()}const wt=new Th;wt.setAnimationLoop(pn),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){gt=A,U.setAnimationLoop(A),A===null?wt.stop():wt.start()},U.addEventListener("sessionstart",st),U.addEventListener("sessionend",mn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(k),k=U.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,P),m=w.get(A,y.length),m.init(),y.push(m),G.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),_e.setFromProjectionMatrix(G),ve=this.localClippingEnabled,ge=re.init(this.clippingPlanes,ve),_=oe.get(A,d.length),_.init(),d.push(_),gl(A,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(j,fe),this.info.render.frame++,ge===!0&&re.beginShadows();const ee=m.state.shadowsArray;if(de.render(ee,A,k),ge===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(_,A),m.setupLights(x.useLegacyLights),k.isArrayCamera){const F=k.cameras;for(let te=0,Ce=F.length;te<Ce;te++){const Ue=F[te];_l(_,A,Ue,Ue.viewport)}}else _l(_,A,k);P!==null&&(ne.updateMultisampleRenderTarget(P),ne.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,k),Ee.resetDefaultState(),V=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function gl(A,k,ee,F){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_e.intersectsSprite(A)){F&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Ue=M.update(A),Ne=A.material;Ne.visible&&_.push(A,Ue,Ne,ee,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_e.intersectsObject(A))){const Ue=M.update(A),Ne=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),pe.copy(Ue.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(Ne)){const Oe=Ue.groups;for(let qe=0,ze=Oe.length;qe<ze;qe++){const Ge=Oe[qe],ot=Ne[Ge.materialIndex];ot&&ot.visible&&_.push(A,Ue,ot,ee,pe.z,Ge)}}else Ne.visible&&_.push(A,Ue,Ne,ee,pe.z,null)}}const Ce=A.children;for(let Ue=0,Ne=Ce.length;Ue<Ne;Ue++)gl(Ce[Ue],k,ee,F)}function _l(A,k,ee,F){const te=A.opaque,Ce=A.transmissive,Ue=A.transparent;m.setupLightsView(ee),ge===!0&&re.setGlobalState(x.clippingPlanes,ee),Ce.length>0&&qh(te,Ce,k,ee),F&&z.viewport(R.copy(F)),te.length>0&&as(te,k,ee),Ce.length>0&&as(Ce,k,ee),Ue.length>0&&as(Ue,k,ee),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function qh(A,k,ee,F){const te=O.isWebGL2;Re===null&&(Re=new Ci(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?Jr:oi,minFilter:Zr,samples:te?4:0})),x.getDrawingBufferSize(ae),te?Re.setSize(ae.x,ae.y):Re.setSize(wa(ae.x),wa(ae.y));const Ce=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor(N),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=Gn,as(A,ee,F),ne.updateMultisampleRenderTarget(Re),ne.updateRenderTargetMipmap(Re);let Ne=!1;for(let Oe=0,qe=k.length;Oe<qe;Oe++){const ze=k[Oe],Ge=ze.object,ot=ze.geometry,lt=ze.material,en=ze.group;if(lt.side===Mn&&Ge.layers.test(F.layers)){const bn=lt.side;lt.side=zt,lt.needsUpdate=!0,vl(Ge,ee,F,ot,lt,en),lt.side=bn,lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(ne.updateMultisampleRenderTarget(Re),ne.updateRenderTargetMipmap(Re)),x.setRenderTarget(Ce),x.setClearColor(N,X),x.toneMapping=Ue}function as(A,k,ee){const F=k.isScene===!0?k.overrideMaterial:null;for(let te=0,Ce=A.length;te<Ce;te++){const Ue=A[te],Ne=Ue.object,Oe=Ue.geometry,qe=F===null?Ue.material:F,ze=Ue.group;Ne.layers.test(ee.layers)&&vl(Ne,k,ee,Oe,qe,ze)}}function vl(A,k,ee,F,te,Ce){A.onBeforeRender(x,k,ee,F,te,Ce),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(x,k,ee,F,A,Ce),te.transparent===!0&&te.side===Mn&&te.forceSinglePass===!1?(te.side=zt,te.needsUpdate=!0,x.renderBufferDirect(ee,k,F,te,A,Ce),te.side=ci,te.needsUpdate=!0,x.renderBufferDirect(ee,k,F,te,A,Ce),te.side=Mn):x.renderBufferDirect(ee,k,F,te,A,Ce),A.onAfterRender(x,k,ee,F,te,Ce)}function ls(A,k,ee){k.isScene!==!0&&(k=be);const F=ce.get(A),te=m.state.lights,Ce=m.state.shadowsArray,Ue=te.state.version,Ne=I.getParameters(A,te.state,Ce,k,ee),Oe=I.getProgramCacheKey(Ne);let qe=F.programs;F.environment=A.isMeshStandardMaterial?k.environment:null,F.fog=k.fog,F.envMap=(A.isMeshStandardMaterial?ie:le).get(A.envMap||F.environment),qe===void 0&&(A.addEventListener("dispose",Ae),qe=new Map,F.programs=qe);let ze=qe.get(Oe);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===Ue)return xl(A,Ne),ze}else Ne.uniforms=I.getUniforms(A),A.onBuild(ee,Ne,x),A.onBeforeCompile(Ne,x),ze=I.acquireProgram(Ne,Oe),qe.set(Oe,ze),F.uniforms=Ne.uniforms;const Ge=F.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=re.uniform),xl(A,Ne),F.needsLights=$h(A),F.lightsStateVersion=Ue,F.needsLights&&(Ge.ambientLightColor.value=te.state.ambient,Ge.lightProbe.value=te.state.probe,Ge.directionalLights.value=te.state.directional,Ge.directionalLightShadows.value=te.state.directionalShadow,Ge.spotLights.value=te.state.spot,Ge.spotLightShadows.value=te.state.spotShadow,Ge.rectAreaLights.value=te.state.rectArea,Ge.ltc_1.value=te.state.rectAreaLTC1,Ge.ltc_2.value=te.state.rectAreaLTC2,Ge.pointLights.value=te.state.point,Ge.pointLightShadows.value=te.state.pointShadow,Ge.hemisphereLights.value=te.state.hemi,Ge.directionalShadowMap.value=te.state.directionalShadowMap,Ge.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ge.spotShadowMap.value=te.state.spotShadowMap,Ge.spotLightMatrix.value=te.state.spotLightMatrix,Ge.spotLightMap.value=te.state.spotLightMap,Ge.pointShadowMap.value=te.state.pointShadowMap,Ge.pointShadowMatrix.value=te.state.pointShadowMatrix);const ot=ze.getUniforms(),lt=Hs.seqWithValue(ot.seq,Ge);return F.currentProgram=ze,F.uniformsList=lt,ze}function xl(A,k){const ee=ce.get(A);ee.outputColorSpace=k.outputColorSpace,ee.instancing=k.instancing,ee.skinning=k.skinning,ee.morphTargets=k.morphTargets,ee.morphNormals=k.morphNormals,ee.morphColors=k.morphColors,ee.morphTargetsCount=k.morphTargetsCount,ee.numClippingPlanes=k.numClippingPlanes,ee.numIntersection=k.numClipIntersection,ee.vertexAlphas=k.vertexAlphas,ee.vertexTangents=k.vertexTangents,ee.toneMapping=k.toneMapping}function jh(A,k,ee,F,te){k.isScene!==!0&&(k=be),ne.resetTextureUnits();const Ce=k.fog,Ue=F.isMeshStandardMaterial?k.environment:null,Ne=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Tn,Oe=(F.isMeshStandardMaterial?ie:le).get(F.envMap||Ue),qe=F.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ze=!!ee.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ge=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,lt=!!ee.morphAttributes.color,en=F.toneMapped?x.toneMapping:Gn,bn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ct=bn!==void 0?bn.length:0,je=ce.get(F),uo=m.state.lights;if(ge===!0&&(ve===!0||A!==S)){const Gt=A===S&&F.id===V;re.setState(F,A,Gt)}let _t=!1;F.version===je.__version?(je.needsLights&&je.lightsStateVersion!==uo.state.version||je.outputColorSpace!==Ne||te.isInstancedMesh&&je.instancing===!1||!te.isInstancedMesh&&je.instancing===!0||te.isSkinnedMesh&&je.skinning===!1||!te.isSkinnedMesh&&je.skinning===!0||je.envMap!==Oe||F.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==re.numPlanes||je.numIntersection!==re.numIntersection)||je.vertexAlphas!==qe||je.vertexTangents!==ze||je.morphTargets!==Ge||je.morphNormals!==ot||je.morphColors!==lt||je.toneMapping!==en||O.isWebGL2===!0&&je.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,je.__version=F.version);let fi=je.currentProgram;_t===!0&&(fi=ls(F,k,te));let Ml=!1,Er=!1,fo=!1;const Rt=fi.getUniforms(),hi=je.uniforms;if(z.useProgram(fi.program)&&(Ml=!0,Er=!0,fo=!0),F.id!==V&&(V=F.id,Er=!0),Ml||S!==A){if(Rt.setValue(g,"projectionMatrix",A.projectionMatrix),O.logarithmicDepthBuffer&&Rt.setValue(g,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,Er=!0,fo=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Gt=Rt.map.cameraPosition;Gt!==void 0&&Gt.setValue(g,pe.setFromMatrixPosition(A.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Rt.setValue(g,"isOrthographic",A.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||te.isSkinnedMesh)&&Rt.setValue(g,"viewMatrix",A.matrixWorldInverse)}if(te.isSkinnedMesh){Rt.setOptional(g,te,"bindMatrix"),Rt.setOptional(g,te,"bindMatrixInverse");const Gt=te.skeleton;Gt&&(O.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Rt.setValue(g,"boneTexture",Gt.boneTexture,ne),Rt.setValue(g,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ho=ee.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0&&O.isWebGL2===!0)&&ye.update(te,ee,fi),(Er||je.receiveShadow!==te.receiveShadow)&&(je.receiveShadow=te.receiveShadow,Rt.setValue(g,"receiveShadow",te.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(hi.envMap.value=Oe,hi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Er&&(Rt.setValue(g,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Yh(hi,fo),Ce&&F.fog===!0&&Q.refreshFogUniforms(hi,Ce),Q.refreshMaterialUniforms(hi,F,q,se,Re),Hs.upload(g,je.uniformsList,hi,ne)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Hs.upload(g,je.uniformsList,hi,ne),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Rt.setValue(g,"center",te.center),Rt.setValue(g,"modelViewMatrix",te.modelViewMatrix),Rt.setValue(g,"normalMatrix",te.normalMatrix),Rt.setValue(g,"modelMatrix",te.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Gt=F.uniformsGroups;for(let po=0,Kh=Gt.length;po<Kh;po++)if(O.isWebGL2){const Sl=Gt[po];De.update(Sl,fi),De.bind(Sl,fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fi}function Yh(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function $h(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,ee){ce.get(A.texture).__webglTexture=k,ce.get(A.depthTexture).__webglTexture=ee;const F=ce.get(A);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=ee===void 0,F.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const ee=ce.get(A);ee.__webglFramebuffer=k,ee.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,ee=0){P=A,b=k,D=ee;let F=!0,te=null,Ce=!1,Ue=!1;if(A){const Oe=ce.get(A);Oe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(g.FRAMEBUFFER,null),F=!1):Oe.__webglFramebuffer===void 0?ne.setupRenderTarget(A):Oe.__hasExternalTextures&&ne.rebindTextures(A,ce.get(A.texture).__webglTexture,ce.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const ze=ce.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(te=ze[k],Ce=!0):O.isWebGL2&&A.samples>0&&ne.useMultisampledRTT(A)===!1?te=ce.get(A).__webglMultisampledFramebuffer:te=ze,R.copy(A.viewport),J.copy(A.scissor),ue=A.scissorTest}else R.copy(he).multiplyScalar(q).floor(),J.copy(H).multiplyScalar(q).floor(),ue=Z;if(z.bindFramebuffer(g.FRAMEBUFFER,te)&&O.drawBuffers&&F&&z.drawBuffers(A,te),z.viewport(R),z.scissor(J),z.setScissorTest(ue),Ce){const Oe=ce.get(A.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+k,Oe.__webglTexture,ee)}else if(Ue){const Oe=ce.get(A.texture),qe=k||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,qe)}V=-1},this.readRenderTargetPixels=function(A,k,ee,F,te,Ce,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ce.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){z.bindFramebuffer(g.FRAMEBUFFER,Ne);try{const Oe=A.texture,qe=Oe.format,ze=Oe.type;if(qe!==cn&&Me.convert(qe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=ze===Jr&&(L.has("EXT_color_buffer_half_float")||O.isWebGL2&&L.has("EXT_color_buffer_float"));if(ze!==oi&&Me.convert(ze)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===ii&&(O.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-F&&ee>=0&&ee<=A.height-te&&g.readPixels(k,ee,F,te,Me.convert(qe),Me.convert(ze),Ce)}finally{const Oe=P!==null?ce.get(P).__webglFramebuffer:null;z.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(A,k,ee=0){const F=Math.pow(2,-ee),te=Math.floor(k.image.width*F),Ce=Math.floor(k.image.height*F);ne.setTexture2D(k,0),g.copyTexSubImage2D(g.TEXTURE_2D,ee,0,0,A.x,A.y,te,Ce),z.unbindTexture()},this.copyTextureToTexture=function(A,k,ee,F=0){const te=k.image.width,Ce=k.image.height,Ue=Me.convert(ee.format),Ne=Me.convert(ee.type);ne.setTexture2D(ee,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,ee.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,ee.unpackAlignment),k.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,F,A.x,A.y,te,Ce,Ue,Ne,k.image.data):k.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,F,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ue,k.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,F,A.x,A.y,Ue,Ne,k.image),F===0&&ee.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(A,k,ee,F,te=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=A.max.x-A.min.x+1,Ue=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Oe=Me.convert(F.format),qe=Me.convert(F.type);let ze;if(F.isData3DTexture)ne.setTexture3D(F,0),ze=g.TEXTURE_3D;else if(F.isDataArrayTexture)ne.setTexture2DArray(F,0),ze=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,F.unpackAlignment);const Ge=g.getParameter(g.UNPACK_ROW_LENGTH),ot=g.getParameter(g.UNPACK_IMAGE_HEIGHT),lt=g.getParameter(g.UNPACK_SKIP_PIXELS),en=g.getParameter(g.UNPACK_SKIP_ROWS),bn=g.getParameter(g.UNPACK_SKIP_IMAGES),ct=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ct.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ct.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,A.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,A.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?g.texSubImage3D(ze,te,k.x,k.y,k.z,Ce,Ue,Ne,Oe,qe,ct.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(ze,te,k.x,k.y,k.z,Ce,Ue,Ne,Oe,ct.data)):g.texSubImage3D(ze,te,k.x,k.y,k.z,Ce,Ue,Ne,Oe,qe,ct),g.pixelStorei(g.UNPACK_ROW_LENGTH,Ge),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ot),g.pixelStorei(g.UNPACK_SKIP_PIXELS,lt),g.pixelStorei(g.UNPACK_SKIP_ROWS,en),g.pixelStorei(g.UNPACK_SKIP_IMAGES,bn),te===0&&F.generateMipmaps&&g.generateMipmap(ze),z.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ne.setTextureCube(A,0):A.isData3DTexture?ne.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ne.setTexture2DArray(A,0):ne.setTexture2D(A,0),z.unbindTexture()},this.resetState=function(){b=0,D=0,P=null,z.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?wi:uh}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wi?ke:Tn}}class MM extends Ph{}MM.prototype.isWebGL1Renderer=!0;class SM extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ca extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pu=new ft,Pa=new al,Is=new oo,Ns=new B;class mu extends Mt{constructor(e=new Qt,t=new Ca){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;pu.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,_=p;v<_;v++){const m=c.getX(v);Ns.fromBufferAttribute(f,m),gu(Ns,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,_=p;v<_;v++)Ns.fromBufferAttribute(f,v),gu(Ns,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gu(n,e,t,i,r,s,a){const o=Pa.distanceSqToPoint(n);if(o<t){const l=new B;Pa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class fl extends Qt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let v=0;const _=[],m=i/2;let d=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2));function y(){const T=new B,b=new B;let D=0;const P=(t-e)/i;for(let V=0;V<=s;V++){const S=[],R=V/s,J=R*(t-e)+e;for(let ue=0;ue<=r;ue++){const N=ue/r,X=N*l+o,$=Math.sin(X),se=Math.cos(X);b.x=J*$,b.y=-R*i+m,b.z=J*se,f.push(b.x,b.y,b.z),T.set($,P,se).normalize(),h.push(T.x,T.y,T.z),p.push(N,1-R),S.push(v++)}_.push(S)}for(let V=0;V<r;V++)for(let S=0;S<s;S++){const R=_[S][V],J=_[S+1][V],ue=_[S+1][V+1],N=_[S][V+1];u.push(R,J,N),u.push(J,ue,N),D+=6}c.addGroup(d,D,0),d+=D}function x(T){const b=v,D=new Fe,P=new B;let V=0;const S=T===!0?e:t,R=T===!0?1:-1;for(let ue=1;ue<=r;ue++)f.push(0,m*R,0),h.push(0,R,0),p.push(.5,.5),v++;const J=v;for(let ue=0;ue<=r;ue++){const X=ue/r*l+o,$=Math.cos(X),se=Math.sin(X);P.x=S*se,P.y=m*R,P.z=S*$,f.push(P.x,P.y,P.z),h.push(0,R,0),D.x=$*.5+.5,D.y=se*.5*R+.5,p.push(D.x,D.y),v++}for(let ue=0;ue<r;ue++){const N=b+ue,X=J+ue;T===!0?u.push(X,X+1,N):u.push(X+1,X,N),V+=3}c.addGroup(d,V,T===!0?1:2),d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hl extends Qt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],v=[],_=[],m=[];for(let d=0;d<=i;d++){const y=[],x=d/i;let T=0;d===0&&a===0?T=.5/t:d===i&&l===Math.PI&&(T=-.5/t);for(let b=0;b<=t;b++){const D=b/t;f.x=-e*Math.cos(r+D*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+D*s)*Math.sin(a+x*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(D+T,1-x),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){const x=u[d][y+1],T=u[d][y],b=u[d+1][y],D=u[d+1][y+1];(d!==0||a>0)&&p.push(x,T,D),(d!==i-1||l<Math.PI)&&p.push(T,b,D)}this.setIndex(p),this.setAttribute("position",new $t(v,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Cr extends Mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lh extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ia=new ft,_u=new B,vu=new B;class EM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yM extends EM{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends Lh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new yM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TM extends Lh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Dh{constructor(e,t,i=0,r=1/0){this.ray=new al(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return La(e,this,i,t),i.sort(Mu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)La(e[r],this,i,t);return i.sort(Mu),i}}function Mu(n,e){return n.distance-e.distance}function La(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)La(r[s],e,t,!0)}}class Su{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const Eu={type:"change"},ra={type:"start"},yu={type:"end"};class bM extends Ii{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oi.ROTATE,MIDDLE:Oi.DOLLY,RIGHT:Oi.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",le),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",le),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Eu),i.update(),s=r.NONE},this.update=(function(){const w=new B,re=new Pi().setFromUnitVectors(e.up,new B(0,1,0)),de=re.clone().invert(),W=new B,ye=new Pi,Pe=new B,Le=2*Math.PI;return function(){const Ee=i.object.position;w.copy(Ee).sub(i.target),w.applyQuaternion(re),o.setFromVector3(w),i.autoRotate&&s===r.NONE&&S(P()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let De=i.minAzimuthAngle,We=i.maxAzimuthAngle;return isFinite(De)&&isFinite(We)&&(De<-Math.PI?De+=Le:De>Math.PI&&(De-=Le),We<-Math.PI?We+=Le:We>Math.PI&&(We-=Le),De<=We?o.theta=Math.max(De,Math.min(We,o.theta)):o.theta=o.theta>(De+We)/2?Math.max(De,o.theta):Math.min(We,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),w.setFromSpherical(o),w.applyQuaternion(de),Ee.copy(i.target).add(w),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||W.distanceToSquared(i.object.position)>a||8*(1-ye.dot(i.object.quaternion))>a||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(Eu),W.copy(i.object.position),ye.copy(i.object.quaternion),Pe.copy(i.target),f=!1,!0):!1}})(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",E),i.domElement.removeEventListener("pointerdown",L),i.domElement.removeEventListener("pointercancel",z),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",z),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",le),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Su,l=new Su;let c=1;const u=new B;let f=!1;const h=new Fe,p=new Fe,v=new Fe,_=new Fe,m=new Fe,d=new Fe,y=new Fe,x=new Fe,T=new Fe,b=[],D={};function P(){return 2*Math.PI/60/60*i.autoRotateSpeed}function V(){return Math.pow(.95,i.zoomSpeed)}function S(w){l.theta-=w}function R(w){l.phi-=w}const J=(function(){const w=new B;return function(de,W){w.setFromMatrixColumn(W,0),w.multiplyScalar(-de),u.add(w)}})(),ue=(function(){const w=new B;return function(de,W){i.screenSpacePanning===!0?w.setFromMatrixColumn(W,1):(w.setFromMatrixColumn(W,0),w.crossVectors(i.object.up,w)),w.multiplyScalar(de),u.add(w)}})(),N=(function(){const w=new B;return function(de,W){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;w.copy(Pe).sub(i.target);let Le=w.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),J(2*de*Le/ye.clientHeight,i.object.matrix),ue(2*W*Le/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(J(de*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),ue(W*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}})();function X(w){i.object.isPerspectiveCamera?c/=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*w)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(w){i.object.isPerspectiveCamera?c*=w:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/w)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(w){h.set(w.clientX,w.clientY)}function q(w){y.set(w.clientX,w.clientY)}function j(w){_.set(w.clientX,w.clientY)}function fe(w){p.set(w.clientX,w.clientY),v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const re=i.domElement;S(2*Math.PI*v.x/re.clientHeight),R(2*Math.PI*v.y/re.clientHeight),h.copy(p),i.update()}function he(w){x.set(w.clientX,w.clientY),T.subVectors(x,y),T.y>0?X(V()):T.y<0&&$(V()),y.copy(x),i.update()}function H(w){m.set(w.clientX,w.clientY),d.subVectors(m,_).multiplyScalar(i.panSpeed),N(d.x,d.y),_.copy(m),i.update()}function Z(w){w.deltaY<0?$(V()):w.deltaY>0&&X(V()),i.update()}function _e(w){let re=!1;switch(w.code){case i.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?S(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?S(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):N(-i.keyPanSpeed,0),re=!0;break}re&&(w.preventDefault(),i.update())}function ge(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),re=.5*(b[0].pageY+b[1].pageY);h.set(w,re)}}function ve(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const w=.5*(b[0].pageX+b[1].pageX),re=.5*(b[0].pageY+b[1].pageY);_.set(w,re)}}function Re(){const w=b[0].pageX-b[1].pageX,re=b[0].pageY-b[1].pageY,de=Math.sqrt(w*w+re*re);y.set(0,de)}function G(){i.enableZoom&&Re(),i.enablePan&&ve()}function ae(){i.enableZoom&&Re(),i.enableRotate&&ge()}function pe(w){if(b.length==1)p.set(w.pageX,w.pageY);else{const de=oe(w),W=.5*(w.pageX+de.x),ye=.5*(w.pageY+de.y);p.set(W,ye)}v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const re=i.domElement;S(2*Math.PI*v.x/re.clientHeight),R(2*Math.PI*v.y/re.clientHeight),h.copy(p)}function be(w){if(b.length===1)m.set(w.pageX,w.pageY);else{const re=oe(w),de=.5*(w.pageX+re.x),W=.5*(w.pageY+re.y);m.set(de,W)}d.subVectors(m,_).multiplyScalar(i.panSpeed),N(d.x,d.y),_.copy(m)}function Se(w){const re=oe(w),de=w.pageX-re.x,W=w.pageY-re.y,ye=Math.sqrt(de*de+W*W);x.set(0,ye),T.set(0,Math.pow(x.y/y.y,i.zoomSpeed)),X(T.y),y.copy(x)}function g(w){i.enableZoom&&Se(w),i.enablePan&&be(w)}function C(w){i.enableZoom&&Se(w),i.enableRotate&&pe(w)}function L(w){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(w.pointerId),i.domElement.addEventListener("pointermove",O),i.domElement.addEventListener("pointerup",z)),M(w),w.pointerType==="touch"?ie(w):Y(w))}function O(w){i.enabled!==!1&&(w.pointerType==="touch"?we(w):ce(w))}function z(w){I(w),b.length===0&&(i.domElement.releasePointerCapture(w.pointerId),i.domElement.removeEventListener("pointermove",O),i.domElement.removeEventListener("pointerup",z)),i.dispatchEvent(yu),s=r.NONE}function Y(w){let re;switch(w.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Oi.DOLLY:if(i.enableZoom===!1)return;q(w),s=r.DOLLY;break;case Oi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enablePan===!1)return;j(w),s=r.PAN}else{if(i.enableRotate===!1)return;se(w),s=r.ROTATE}break;case Oi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(i.enableRotate===!1)return;se(w),s=r.ROTATE}else{if(i.enablePan===!1)return;j(w),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ra)}function ce(w){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;fe(w);break;case r.DOLLY:if(i.enableZoom===!1)return;he(w);break;case r.PAN:if(i.enablePan===!1)return;H(w);break}}function ne(w){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(w.preventDefault(),i.dispatchEvent(ra),Z(w),i.dispatchEvent(yu))}function le(w){i.enabled===!1||i.enablePan===!1||_e(w)}function ie(w){switch(Q(w),b.length){case 1:switch(i.touches.ONE){case Fi.ROTATE:if(i.enableRotate===!1)return;ge(),s=r.TOUCH_ROTATE;break;case Fi.PAN:if(i.enablePan===!1)return;ve(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Fi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(),s=r.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ae(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ra)}function we(w){switch(Q(w),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;pe(w),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(w),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;g(w),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;C(w),i.update();break;default:s=r.NONE}}function E(w){i.enabled!==!1&&w.preventDefault()}function M(w){b.push(w)}function I(w){delete D[w.pointerId];for(let re=0;re<b.length;re++)if(b[re].pointerId==w.pointerId){b.splice(re,1);return}}function Q(w){let re=D[w.pointerId];re===void 0&&(re=new Fe,D[w.pointerId]=re),re.set(w.pageX,w.pageY)}function oe(w){const re=w.pointerId===b[0].pointerId?b[1]:b[0];return D[re.pointerId]}i.domElement.addEventListener("contextmenu",E),i.domElement.addEventListener("pointerdown",L),i.domElement.addEventListener("pointercancel",z),i.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}function AM(n,e){const t=e.getBoundingClientRect();return new Fe((n.clientX-t.left)/t.width*2-1,-((n.clientY-t.top)/t.height)*2+1)}function wM(n,e){const t=e.getBoundingClientRect();return n.clientX>=t.left&&n.clientX<=t.right&&n.clientY>=t.top&&n.clientY<=t.bottom}class RM{constructor(e,t){this.scene=new SM,this.scene.background=new Qe(t?.scene?.background||15790320);const i=t?.scene?.width||window.innerWidth,r=t?.scene?.height||window.innerHeight;this.camera=new Jt(t?.camera?.fov||75,i/r,t?.camera?.near||.1,t?.camera?.far||1e3),this.camera.position.z=t?.camera?.position?.z||5,t?.camera?.position&&this.camera.position.set(t.camera.position.x||0,t.camera.position.y||0,t.camera.position.z||5),this.renderer=new Ph({antialias:!0}),this.renderer.setSize(i,r),this.renderer.shadowMap.enabled=!0,e.appendChild(this.renderer.domElement),this.controls=new bM(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=10,this.controls.enablePan=!1,this.gameObjects=[],this.raycaster=new Dh,this.raycaster.params.Points.threshold=.01,this.raycaster.params.Line.threshold=.01,this.mouse=new Fe,this.addLights(t?.light),this.bindEvents(),this.startAnimation()}addLights(e){const t=new TM(e?.ambient?.color||16777215,e?.ambient?.intensity||.5);if(this.scene.add(t),e?.directional){const i=new xu(e.directional.color,e.directional.intensity);i.position.copy(e.directional.position),i.castShadow=!0,this.scene.add(i)}else{const i=new xu(16777215,.8);i.position.set(5,10,7.5),i.castShadow=!0,this.scene.add(i)}}bindEvents(){window.addEventListener("mousemove",e=>{if(!wM(e,this.renderer.domElement)){this.gameObjects.forEach(i=>{i.onMouseOut?.()});return}this.mouse=AM(e,this.renderer.domElement),this.raycaster.setFromCamera(this.mouse,this.camera);const t=this.raycaster.intersectObjects(this.gameObjects.map(i=>i.mesh),!0);this.gameObjects.forEach(i=>{t.some(s=>s.object===i.mesh||i.mesh.children.includes(s.object))?i.onMouseOver?.():i.onMouseOut?.()})}),window.addEventListener("resize",()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)})}addGameObject(e){this.gameObjects.push(e),this.scene.add(e.mesh)}removeGameObject(e){const t=this.gameObjects.findIndex(i=>i===e);t!==-1&&(this.gameObjects.splice(t,1),this.scene.remove(e.mesh))}startAnimation(){const e=t=>{this.animationId=requestAnimationFrame(e);const i=(t-this.lastTime)/1e3;this.lastTime=t,this.controls.update(),this.gameObjects.forEach(r=>{r.update?.(i)}),this.renderer.render(this.scene,this.camera)};this.lastTime=performance.now(),this.animationId=requestAnimationFrame(e)}dispose(){this.animationId&&cancelAnimationFrame(this.animationId),this.controls.dispose(),this.renderer.dispose(),this.gameObjects.forEach(e=>{this.scene.remove(e.mesh)}),this.gameObjects=[]}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}}class Tu{constructor(e,t,i){this.mesh=new zn(e,t),i?.position&&this.mesh.position.copy(i.position),i?.rotation&&this.mesh.rotation.copy(i.rotation),i?.scale&&this.mesh.scale.copy(i.scale),this.update=i?.update,this.onMouseOver=i?.onMouseOver,this.onMouseOut=i?.onMouseOut}}const ui=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},CM={class:"game-container"},PM={class:"score-container"},LM={key:0,class:"game-over-overlay"},DM={class:"game-over-panel"},UM={__name:"ThreeDemo",setup(n){const e=Br(0),t=Br(1),i=Br(!1),r=[];let s=null,a=null,o=null;Cf(()=>{const m=document.getElementById("three-container");if(!m)return;s=new RM(m,{scene:{background:15790320,width:window.innerWidth,height:window.innerHeight*.8},camera:{fov:75,position:new B(0,2,5)},light:{ambient:{color:16777215,intensity:.5},directional:{color:16777215,intensity:.8,position:new B(5,10,7.5)}}});const d=new ao(10,10),y=new Cr({color:13421772,side:Mn}),x=new Tu(d,y,{position:new B(0,0,0),rotation:new os(-Math.PI/2,0,0)});s.addGameObject(x),l(),c(),m.addEventListener("click",f),p()});function l(){if(!s)return;const m=new Qt,d=1e3,y=new Float32Array(d*3);for(let T=0;T<d*3;T++)y[T]=(Math.random()-.5)*20;m.setAttribute("position",new Yt(y,3));const x=new Ca({size:.02,color:65280});a=new mu(m,x),s.getScene().add(a)}function c(){for(let m=0;m<5;m++)u()}function u(){if(!s)return;const m=Math.floor(Math.random()*3);let d,y;const x=new B((Math.random()-.5)*8,.5,(Math.random()-.5)*8);switch(m){case 0:d=new Li(1,1,1),y=new Cr({color:65280,transparent:!0,opacity:.8});break;case 1:d=new hl(.5,32,32),y=new Cr({color:255,transparent:!0,opacity:.8});break;case 2:d=new fl(.5,.5,1,32),y=new Cr({color:16776960,transparent:!0,opacity:.8});break;default:d=new Li(1,1,1),y=new Cr({color:65280,transparent:!0,opacity:.8})}const T=new Tu(d,y,{position:x,update:b=>{T.mesh.rotation.x+=.5*b*t.value,T.mesh.rotation.y+=.5*b*t.value},onMouseOver:()=>{T.mesh.material.color.set(16711680)},onMouseOut:()=>{const b=T.mesh.material;switch(m){case 0:b.color.set(65280);break;case 1:b.color.set(255);break;case 2:b.color.set(16776960);break}}});r.push(T),s.addGameObject(T)}function f(m){if(!s||i.value)return;const y=s.getRenderer().domElement.getBoundingClientRect(),x=(m.clientX-y.left)/y.width*2-1,T=-((m.clientY-y.top)/y.height)*2+1,b=new Dh;b.setFromCamera(new Fe(x,T),s.getCamera());const D=b.intersectObjects(r.map(P=>P.mesh),!0);if(D.length>0){const P=D[0].object,V=r.find(S=>S.mesh===P||S.mesh.children.includes(P));if(V){e.value++,h(V.mesh.position),s.removeGameObject(V);const S=r.indexOf(V);S!==-1&&r.splice(S,1),u(),e.value%10===0&&t.value++}}}function h(m){if(!s)return;const d=new Qt,y=50,x=new Float32Array(y*3),T=new Float32Array(y*3);for(let S=0;S<y*3;S+=3)x[S]=m.x,x[S+1]=m.y,x[S+2]=m.z,T[S]=(Math.random()-.5)*2,T[S+1]=Math.random()*2,T[S+2]=(Math.random()-.5)*2;d.setAttribute("position",new Yt(x,3)),d.setAttribute("velocity",new Yt(T,3));const b=new Ca({size:.05,color:16711680,transparent:!0,opacity:1}),D=new mu(d,b);s.getScene().add(D);const P=performance.now(),V=()=>{const R=(performance.now()-P)/1e3;if(R<1){requestAnimationFrame(V);const J=d.attributes.position.array,ue=d.attributes.velocity.array;for(let N=0;N<J.length;N+=3)J[N]+=ue[N]*.1,J[N+1]+=ue[N+1]*.1-.05,J[N+2]+=ue[N+2]*.1;d.attributes.position.needsUpdate=!0,b.opacity=1-R}else s?.getScene().remove(D),d.dispose(),b.dispose()};V()}function p(){const m=()=>{if(a&&(a.rotation.y+=.001),r.length>10){v();return}o=requestAnimationFrame(m)};o=requestAnimationFrame(m)}function v(){i.value=!0,o&&cancelAnimationFrame(o)}function _(){s&&(r.forEach(m=>{s?.removeGameObject(m)}),r.length=0,e.value=0,t.value=1,i.value=!1,c(),p())}return Qa(()=>{s&&s.dispose(),r.length=0,o&&cancelAnimationFrame(o)}),(m,d)=>(Ht(),yn("div",CM,[Ie("div",PM,[Ie("h2",null,"分数: "+Dr(e.value),1),Ie("h3",null,"等级: "+Dr(t.value),1),d[0]||(d[0]=Ie("p",null,"点击物体来增加你的分数!",-1))]),d[2]||(d[2]=Ie("div",{id:"three-container",class:"three-container"},null,-1)),d[3]||(d[3]=Ie("div",{class:"instructions"},[Ie("h3",null,"游戏说明:"),Ie("ul",null,[Ie("li",null,"将鼠标移到物体上，它们会变成红色"),Ie("li",null,"点击物体来收集它们并增加你的分数"),Ie("li",null,"新的物体会自动出现"),Ie("li",null,"使用鼠标拖动来旋转相机"),Ie("li",null,"使用鼠标滚轮来放大/缩小")])],-1)),i.value?(Ht(),yn("div",LM,[Ie("div",DM,[d[1]||(d[1]=Ie("h1",null,"游戏结束!",-1)),Ie("h2",null,"最终分数: "+Dr(e.value),1),Ie("h3",null,"达到等级: "+Dr(t.value),1),Ie("button",{onClick:_,class:"restart-button"},"重新开始")])])):Dp("",!0)]))}},IM=ui(UM,[["__scopeId","data-v-228969b2"]]),NM=ns({__name:"App",setup(n){return(e,t)=>(Ht(),js(IM))}}),OM=ui(NM,[["__scopeId","data-v-1a13369d"]]),FM="modulepreload",BM=function(n,e){return new URL(n,e).href},bu={},zM=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=c(t.map(u=>{if(u=BM(u,i),u in bu)return;bu[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(i)for(let v=a.length-1;v>=0;v--){const _=a[v];if(_.href===u&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const p=document.createElement("link");if(p.rel=f?"stylesheet":FM,f||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),f)return new Promise((v,_)=>{p.addEventListener("load",v),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};const nr=typeof document<"u";function Uh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function HM(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Uh(n.default)}const Ke=Object.assign;function sa(n,e){const t={};for(const i in e){const r=e[i];t[i]=dn(r)?r.map(n):n(r)}return t}const kr=()=>{},dn=Array.isArray;function Au(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}let at=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Ih=Symbol("");at.MATCHER_NOT_FOUND+"",at.NAVIGATION_GUARD_REDIRECT+"",at.NAVIGATION_ABORTED+"",at.NAVIGATION_CANCELLED+"",at.NAVIGATION_DUPLICATED+"";function vr(n,e){return Ke(new Error,{type:n,[Ih]:!0},e)}function Un(n,e){return n instanceof Error&&Ih in n&&(e==null||!!(n.type&e))}const GM=["params","query","hash"];function VM(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of GM)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}const kM=Symbol(""),wu=Symbol(""),dl=Symbol(""),Nh=Symbol(""),Da=Symbol("");const Oh=/#/g,WM=/&/g,XM=/\//g,qM=/=/g,jM=/\?/g,Fh=/\+/g,YM=/%5B/g,$M=/%5D/g,Bh=/%5E/g,KM=/%60/g,zh=/%7B/g,ZM=/%7C/g,Hh=/%7D/g,JM=/%20/g;function pl(n){return n==null?"":encodeURI(""+n).replace(ZM,"|").replace(YM,"[").replace($M,"]")}function QM(n){return pl(n).replace(zh,"{").replace(Hh,"}").replace(Bh,"^")}function Ua(n){return pl(n).replace(Fh,"%2B").replace(JM,"+").replace(Oh,"%23").replace(WM,"%26").replace(KM,"`").replace(zh,"{").replace(Hh,"}").replace(Bh,"^")}function eS(n){return Ua(n).replace(qM,"%3D")}function tS(n){return pl(n).replace(Oh,"%23").replace(jM,"%3F")}function nS(n){return tS(n).replace(XM,"%2F")}function Qr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const iS=/\/$/,rS=n=>n.replace(iS,"");function oa(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=lS(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:Qr(a)}}function sS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Ru(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function oS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&xr(e.matched[i],t.matched[r])&&Gh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function xr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Gh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!aS(n[t],e[t]))return!1;return!0}function aS(n,e){return dn(n)?Cu(n,e):dn(e)?Cu(e,n):(n&&n.valueOf())===(e&&e.valueOf())}function Cu(n,e){return dn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function lS(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ia=(function(n){return n.pop="pop",n.push="push",n})({}),aa=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function cS(n){if(!n)if(nr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),rS(n)}const uS=/^[^#]+#/;function fS(n,e){return n.replace(uS,"#")+e}function hS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const co=()=>({left:window.scrollX,top:window.scrollY});function dS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=hS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Pu(n,e){return(history.state?history.state.position-e:-1)+n}const Na=new Map;function pS(n,e){Na.set(n,e)}function mS(n){const e=Na.get(n);return Na.delete(n),e}function gS(n){return typeof n=="string"||n&&typeof n=="object"}function Vh(n){return typeof n=="string"||typeof n=="symbol"}function _S(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Fh," "),s=r.indexOf("="),a=Qr(s<0?r:r.slice(0,s)),o=s<0?null:Qr(r.slice(s+1));if(a in e){let l=e[a];dn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Lu(n){let e="";for(let t in n){const i=n[t];if(t=eS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(dn(i)?i.map(r=>r&&Ua(r)):[i&&Ua(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function vS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}function Pr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ei(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(vr(at.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):gS(h)?l(vr(at.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function la(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Uh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ei(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=HM(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&ei(h,t,i,a,o,r)()}))}}return s}function xS(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>xr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>xr(c,l))||r.push(l))}return[t,i,r]}let MS=()=>location.protocol+"//"+location.host;function kh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Ru(o,"")}return Ru(t,n)+i+r}function SS(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=kh(n,location),v=t.value,_=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===v){a=null;return}m=_?h.position-_.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:Ia.pop,direction:m?m>0?aa.forward:aa.back:aa.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Ke({},h.state,{scroll:co()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Du(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?co():null}}function ES(n){const{history:e,location:t}=window,i={value:kh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:MS()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){s(l,Ke({},e.state,Du(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=Ke({},r.value,e.state,{forward:l,scroll:co()});s(u.current,u,!0),s(l,Ke({},Du(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function yS(n){n=cS(n);const e=ES(n),t=SS(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ke({location:"",base:n,go:i,createHref:fS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let yi=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var ht=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(ht||{});const TS={type:yi.Static,value:""},bS=/[a-zA-Z0-9_]/;function AS(n){if(!n)return[[]];if(n==="/")return[[TS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=ht.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===ht.Static?s.push({type:yi.Static,value:c}):t===ht.Param||t===ht.ParamRegExp||t===ht.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:yi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==ht.ParamRegExp){i=t,t=ht.EscapeNext;continue}switch(t){case ht.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=ht.Param):h();break;case ht.EscapeNext:h(),t=i;break;case ht.Param:l==="("?t=ht.ParamRegExp:bS.test(l)?h():(f(),t=ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case ht.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=ht.ParamRegExpEnd:u+=l;break;case ht.ParamRegExpEnd:f(),t=ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===ht.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const Uu="[^/]+?",wS={sensitive:!1,strict:!1,start:!0,end:!0};var Lt=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(Lt||{});const RS=/[.+*?^${}()[\]/\\]/g;function CS(n,e){const t=Ke({},wS,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Lt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=Lt.Segment+(t.sensitive?Lt.BonusCaseSensitive:0);if(h.type===yi.Static)f||(r+="/"),r+=h.value.replace(RS,"\\$&"),p+=Lt.Static;else if(h.type===yi.Param){const{value:v,repeatable:_,optional:m,regexp:d}=h;s.push({name:v,repeatable:_,optional:m});const y=d||Uu;if(y!==Uu){p+=Lt.BonusCustomRegExp;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${y}): `+T.message)}}let x=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=Lt.Dynamic,m&&(p+=Lt.BonusOptional),_&&(p+=Lt.BonusRepeatable),y===".*"&&(p+=Lt.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Lt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===yi.Static)u+=p.value;else if(p.type===yi.Param){const{value:v,repeatable:_,optional:m}=p,d=v in c?c[v]:"";if(dn(d)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const y=dn(d)?d.join("/"):d;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function PS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Lt.Static+Lt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Lt.Static+Lt.Segment?1:-1:0}function Wh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=PS(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Iu(i))return 1;if(Iu(r))return-1}return r.length-i.length}function Iu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const LS={strict:!1,end:!0,sensitive:!1};function DS(n,e,t){const i=CS(AS(n.path),t),r=Ke(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function US(n,e){const t=[],i=new Map;e=Au(LS,e);function r(f){return i.get(f)}function s(f,h,p){const v=!p,_=Ou(f);_.aliasOf=p&&p.record;const m=Au(e,f),d=[_];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of T)d.push(Ou(Ke({},_,{components:p?p.record.components:_.components,path:b,aliasOf:p?p.record:_})))}let y,x;for(const T of d){const{path:b}=T;if(h&&b[0]!=="/"){const D=h.record.path,P=D[D.length-1]==="/"?"":"/";T.path=h.record.path+(b&&P+b)}if(y=DS(T,h,m),p?p.alias.push(y):(x=x||y,x!==y&&x.alias.push(y),v&&f.name&&!Fu(y)&&a(f.name)),Xh(y)&&l(y),_.children){const D=_.children;for(let P=0;P<D.length;P++)s(D[P],y,p&&p.children[P])}p=p||y}return x?()=>{a(x)}:kr}function a(f){if(Vh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=OS(f,t);t.splice(h,0,f),f.record.name&&!Fu(f)&&i.set(f.record.name,f)}function c(f,h){let p,v={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw vr(at.MATCHER_NOT_FOUND,{location:f});m=p.record.name,v=Ke(Nu(h.params,p.keys.filter(x=>!x.optional).concat(p.parent?p.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&Nu(f.params,p.keys.map(x=>x.name))),_=p.stringify(v)}else if(f.path!=null)_=f.path,p=t.find(x=>x.re.test(_)),p&&(v=p.parse(_),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(x=>x.re.test(h.path)),!p)throw vr(at.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,v=Ke({},h.params,f.params),_=p.stringify(v)}const d=[];let y=p;for(;y;)d.unshift(y.record),y=y.parent;return{name:m,path:_,params:v,matched:d,meta:NS(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Nu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ou(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:IS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function IS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Fu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function NS(n){return n.reduce((e,t)=>Ke(e,t.meta),{})}function OS(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Wh(n,e[s])<0?i=s:t=s+1}const r=FS(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function FS(n){let e=n;for(;e=e.parent;)if(Xh(e)&&Wh(n,e)===0)return e}function Xh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Bu(n){const e=Hn(dl),t=Hn(Nh),i=an(()=>{const l=ar(n.to);return e.resolve(l)}),r=an(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(xr.bind(null,u));if(h>-1)return h;const p=zu(l[c-2]);return c>1&&zu(u)===p&&f[f.length-1].path!==p?f.findIndex(xr.bind(null,l[c-2])):h}),s=an(()=>r.value>-1&&VS(t.params,i.value.params)),a=an(()=>r.value>-1&&r.value===t.matched.length-1&&Gh(t.params,i.value.params));function o(l={}){if(GS(l)){const c=e[ar(n.replace)?"replace":"push"](ar(n.to)).catch(kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:an(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function BS(n){return n.length===1?n[0]:n}const zS=ns({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Bu,setup(n,{slots:e}){const t=eo(Bu(n)),{options:i}=Hn(dl),r=an(()=>({[Hu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Hu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&BS(e.default(t));return n.custom?s:Jf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),HS=zS;function GS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function VS(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!dn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function zu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Hu=(n,e,t)=>n??e??t,kS=ns({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Hn(Da),r=an(()=>n.route||i.value),s=Hn(wu,0),a=an(()=>{let c=ar(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=an(()=>r.value.matched[a.value]);Os(wu,an(()=>a.value+1)),Os(kM,o),Os(Da,r);const l=Br();return Fs(()=>[l.value,o.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!xr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Gu(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Jf(h,Ke({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gu(t.default,{Component:m,route:c})||m}}});function Gu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const WS=kS;function XS(n){const e=US(n.routes,n),t=n.parseQuery||_S,i=n.stringifyQuery||Lu,r=n.history,s=Pr(),a=Pr(),o=Pr(),l=Cd(Zn);let c=Zn;nr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sa.bind(null,G=>""+G),f=sa.bind(null,nS),h=sa.bind(null,Qr);function p(G,ae){let pe,be;return Vh(G)?(pe=e.getRecordMatcher(G),be=ae):be=G,e.addRoute(be,pe)}function v(G){const ae=e.getRecordMatcher(G);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(G=>G.record)}function m(G){return!!e.getRecordMatcher(G)}function d(G,ae){if(ae=Ke({},ae||l.value),typeof G=="string"){const L=oa(t,G,ae.path),O=e.resolve({path:L.path},ae),z=r.createHref(L.fullPath);return Ke(L,O,{params:h(O.params),hash:Qr(L.hash),redirectedFrom:void 0,href:z})}let pe;if(G.path!=null)pe=Ke({},G,{path:oa(t,G.path,ae.path).path});else{const L=Ke({},G.params);for(const O in L)L[O]==null&&delete L[O];pe=Ke({},G,{params:f(L)}),ae.params=f(ae.params)}const be=e.resolve(pe,ae),Se=G.hash||"";be.params=u(h(be.params));const g=sS(i,Ke({},G,{hash:QM(Se),path:be.path})),C=r.createHref(g);return Ke({fullPath:g,hash:Se,query:i===Lu?vS(G.query):G.query||{}},be,{redirectedFrom:void 0,href:C})}function y(G){return typeof G=="string"?oa(t,G,l.value.path):Ke({},G)}function x(G,ae){if(c!==G)return vr(at.NAVIGATION_CANCELLED,{from:ae,to:G})}function T(G){return P(G)}function b(G){return T(Ke(y(G),{replace:!0}))}function D(G,ae){const pe=G.matched[G.matched.length-1];if(pe&&pe.redirect){const{redirect:be}=pe;let Se=typeof be=="function"?be(G,ae):be;return typeof Se=="string"&&(Se=Se.includes("?")||Se.includes("#")?Se=y(Se):{path:Se},Se.params={}),Ke({query:G.query,hash:G.hash,params:Se.path!=null?{}:G.params},Se)}}function P(G,ae){const pe=c=d(G),be=l.value,Se=G.state,g=G.force,C=G.replace===!0,L=D(pe,be);if(L)return P(Ke(y(L),{state:typeof L=="object"?Ke({},Se,L.state):Se,force:g,replace:C}),ae||pe);const O=pe;O.redirectedFrom=ae;let z;return!g&&oS(i,be,pe)&&(z=vr(at.NAVIGATION_DUPLICATED,{to:O,from:be}),H(be,be,!0,!1)),(z?Promise.resolve(z):R(O,be)).catch(Y=>Un(Y)?Un(Y,at.NAVIGATION_GUARD_REDIRECT)?Y:he(Y):j(Y,O,be)).then(Y=>{if(Y){if(Un(Y,at.NAVIGATION_GUARD_REDIRECT))return P(Ke({replace:C},y(Y.to),{state:typeof Y.to=="object"?Ke({},Se,Y.to.state):Se,force:g}),ae||O)}else Y=ue(O,be,!0,C,Se);return J(O,be,Y),Y})}function V(G,ae){const pe=x(G,ae);return pe?Promise.reject(pe):Promise.resolve()}function S(G){const ae=ge.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(G):G()}function R(G,ae){let pe;const[be,Se,g]=xS(G,ae);pe=la(be.reverse(),"beforeRouteLeave",G,ae);for(const L of be)L.leaveGuards.forEach(O=>{pe.push(ei(O,G,ae))});const C=V.bind(null,G,ae);return pe.push(C),Re(pe).then(()=>{pe=[];for(const L of s.list())pe.push(ei(L,G,ae));return pe.push(C),Re(pe)}).then(()=>{pe=la(Se,"beforeRouteUpdate",G,ae);for(const L of Se)L.updateGuards.forEach(O=>{pe.push(ei(O,G,ae))});return pe.push(C),Re(pe)}).then(()=>{pe=[];for(const L of g)if(L.beforeEnter)if(dn(L.beforeEnter))for(const O of L.beforeEnter)pe.push(ei(O,G,ae));else pe.push(ei(L.beforeEnter,G,ae));return pe.push(C),Re(pe)}).then(()=>(G.matched.forEach(L=>L.enterCallbacks={}),pe=la(g,"beforeRouteEnter",G,ae,S),pe.push(C),Re(pe))).then(()=>{pe=[];for(const L of a.list())pe.push(ei(L,G,ae));return pe.push(C),Re(pe)}).catch(L=>Un(L,at.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function J(G,ae,pe){o.list().forEach(be=>S(()=>be(G,ae,pe)))}function ue(G,ae,pe,be,Se){const g=x(G,ae);if(g)return g;const C=ae===Zn,L=nr?history.state:{};pe&&(be||C?r.replace(G.fullPath,Ke({scroll:C&&L&&L.scroll},Se)):r.push(G.fullPath,Se)),l.value=G,H(G,ae,pe,C),he()}let N;function X(){N||(N=r.listen((G,ae,pe)=>{if(!ve.listening)return;const be=d(G),Se=D(be,ve.currentRoute.value);if(Se){P(Ke(Se,{replace:!0,force:!0}),be).catch(kr);return}c=be;const g=l.value;nr&&pS(Pu(g.fullPath,pe.delta),co()),R(be,g).catch(C=>Un(C,at.NAVIGATION_ABORTED|at.NAVIGATION_CANCELLED)?C:Un(C,at.NAVIGATION_GUARD_REDIRECT)?(P(Ke(y(C.to),{force:!0}),be).then(L=>{Un(L,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&!pe.delta&&pe.type===Ia.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(pe.delta&&r.go(-pe.delta,!1),j(C,be,g))).then(C=>{C=C||ue(be,g,!1),C&&(pe.delta&&!Un(C,at.NAVIGATION_CANCELLED)?r.go(-pe.delta,!1):pe.type===Ia.pop&&Un(C,at.NAVIGATION_ABORTED|at.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),J(be,g,C)}).catch(kr)}))}let $=Pr(),se=Pr(),q;function j(G,ae,pe){he(G);const be=se.list();return be.length?be.forEach(Se=>Se(G,ae,pe)):console.error(G),Promise.reject(G)}function fe(){return q&&l.value!==Zn?Promise.resolve():new Promise((G,ae)=>{$.add([G,ae])})}function he(G){return q||(q=!G,X(),$.list().forEach(([ae,pe])=>G?pe(G):ae()),$.reset()),G}function H(G,ae,pe,be){const{scrollBehavior:Se}=n;if(!nr||!Se)return Promise.resolve();const g=!pe&&mS(Pu(G.fullPath,0))||(be||!pe)&&history.state&&history.state.scroll||null;return xf().then(()=>Se(G,ae,g)).then(C=>C&&dS(C)).catch(C=>j(C,G,ae))}const Z=G=>r.go(G);let _e;const ge=new Set,ve={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:d,options:n,push:T,replace:b,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:se.add,isReady:fe,install(G){G.component("RouterLink",HS),G.component("RouterView",WS),G.config.globalProperties.$router=ve,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>ar(l)}),nr&&!_e&&l.value===Zn&&(_e=!0,T(r.location).catch(be=>{}));const ae={};for(const be in Zn)Object.defineProperty(ae,be,{get:()=>l.value[be],enumerable:!0});G.provide(dl,ve),G.provide(Nh,pf(ae)),G.provide(Da,l);const pe=G.unmount;ge.add(G),G.unmount=function(){ge.delete(G),ge.size<1&&(c=Zn,N&&N(),N=null,l.value=Zn,_e=!1,q=!1),pe()}}};function Re(G){return G.reduce((ae,pe)=>ae.then(()=>S(pe)),Promise.resolve())}return ve}const qS={},jS={class:"item"},YS={class:"details"};function $S(n,e){return Ht(),yn("div",jS,[Ie("i",null,[So(n.$slots,"icon",{},void 0)]),Ie("div",YS,[Ie("h3",null,[So(n.$slots,"heading",{},void 0)]),So(n.$slots,"default",{},void 0)])])}const Lr=ui(qS,[["render",$S],["__scopeId","data-v-fd0742eb"]]),KS={},ZS={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function JS(n,e){return Ht(),yn("svg",ZS,[...e[0]||(e[0]=[Ie("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)])])}const QS=ui(KS,[["render",JS]]),eE={},tE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function nE(n,e){return Ht(),yn("svg",tE,[...e[0]||(e[0]=[Ie("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)])])}const iE=ui(eE,[["render",nE]]),rE={},sE={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function oE(n,e){return Ht(),yn("svg",sE,[...e[0]||(e[0]=[Ie("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)])])}const aE=ui(rE,[["render",oE]]),lE={},cE={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function uE(n,e){return Ht(),yn("svg",cE,[...e[0]||(e[0]=[Ie("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)])])}const fE=ui(lE,[["render",uE]]),hE={},dE={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function pE(n,e){return Ht(),yn("svg",dE,[...e[0]||(e[0]=[Ie("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)])])}const mE=ui(hE,[["render",pE]]),gE=ns({__name:"TheWelcome",setup(n){const e=()=>fetch("/__open-in-editor?file=README.md");return(t,i)=>(Ht(),yn(Xt,null,[it(Lr,null,{icon:Tt(()=>[it(QS)]),heading:Tt(()=>[...i[0]||(i[0]=[$e("Documentation",-1)])]),default:Tt(()=>[i[1]||(i[1]=$e(" Vue’s ",-1)),i[2]||(i[2]=Ie("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),i[3]||(i[3]=$e(" provides you with all information you need to get started. ",-1))]),_:1}),it(Lr,null,{icon:Tt(()=>[it(iE)]),heading:Tt(()=>[...i[4]||(i[4]=[$e("Tooling",-1)])]),default:Tt(()=>[i[6]||(i[6]=$e(" This project is served and bundled with ",-1)),i[7]||(i[7]=Ie("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),i[8]||(i[8]=$e(". The recommended IDE setup is ",-1)),i[9]||(i[9]=Ie("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),i[10]||(i[10]=$e(" + ",-1)),i[11]||(i[11]=Ie("a",{href:"https://github.com/vuejs/language-tools",target:"_blank",rel:"noopener"},"Vue - Official",-1)),i[12]||(i[12]=$e(". If you need to test your components and web pages, check out ",-1)),i[13]||(i[13]=Ie("a",{href:"https://vitest.dev/",target:"_blank",rel:"noopener"},"Vitest",-1)),i[14]||(i[14]=$e(" and ",-1)),i[15]||(i[15]=Ie("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),i[16]||(i[16]=$e(" / ",-1)),i[17]||(i[17]=Ie("a",{href:"https://playwright.dev/",target:"_blank",rel:"noopener"},"Playwright",-1)),i[18]||(i[18]=$e(". ",-1)),i[19]||(i[19]=Ie("br",null,null,-1)),i[20]||(i[20]=$e(" More instructions are available in ",-1)),Ie("a",{href:"javascript:void(0)",onClick:e},[...i[5]||(i[5]=[Ie("code",null,"README.md",-1)])]),i[21]||(i[21]=$e(". ",-1))]),_:1}),it(Lr,null,{icon:Tt(()=>[it(aE)]),heading:Tt(()=>[...i[22]||(i[22]=[$e("Ecosystem",-1)])]),default:Tt(()=>[i[23]||(i[23]=$e(" Get official tools and libraries for your project: ",-1)),i[24]||(i[24]=Ie("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),i[25]||(i[25]=$e(", ",-1)),i[26]||(i[26]=Ie("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),i[27]||(i[27]=$e(", ",-1)),i[28]||(i[28]=Ie("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),i[29]||(i[29]=$e(", and ",-1)),i[30]||(i[30]=Ie("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),i[31]||(i[31]=$e(". If you need more resources, we suggest paying ",-1)),i[32]||(i[32]=Ie("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),i[33]||(i[33]=$e(" a visit. ",-1))]),_:1}),it(Lr,null,{icon:Tt(()=>[it(fE)]),heading:Tt(()=>[...i[34]||(i[34]=[$e("Community",-1)])]),default:Tt(()=>[i[35]||(i[35]=$e(" Got stuck? Ask your question on ",-1)),i[36]||(i[36]=Ie("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),i[37]||(i[37]=$e(" (our official Discord server), or ",-1)),i[38]||(i[38]=Ie("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),i[39]||(i[39]=$e(". You should also follow the official ",-1)),i[40]||(i[40]=Ie("a",{href:"https://bsky.app/profile/vuejs.org",target:"_blank",rel:"noopener"},"@vuejs.org",-1)),i[41]||(i[41]=$e(" Bluesky account or the ",-1)),i[42]||(i[42]=Ie("a",{href:"https://x.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),i[43]||(i[43]=$e(" X account for latest news in the Vue world. ",-1))]),_:1}),it(Lr,null,{icon:Tt(()=>[it(mE)]),heading:Tt(()=>[...i[44]||(i[44]=[$e("Support Vue",-1)])]),default:Tt(()=>[i[45]||(i[45]=$e(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ",-1)),i[46]||(i[46]=Ie("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),i[47]||(i[47]=$e(". ",-1))]),_:1})],64))}}),_E=ns({__name:"HomeView",setup(n){return(e,t)=>(Ht(),yn("main",null,[it(gE)]))}}),vE=XS({history:yS("./"),routes:[{path:"/",name:"home",component:_E},{path:"/about",name:"about",component:()=>zM(()=>import("./AboutView-w4rtm-Y2.js"),__vite__mapDeps([0,1]),import.meta.url)}]}),ml=hm(OM);ml.use(gm());ml.use(vE);ml.mount("#app");export{ui as _,Ie as a,yn as c,Ht as o};
