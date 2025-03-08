(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();var Bf={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function RT(){if(my)return $o;my=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var y in l)y!=="key"&&(h[y]=l[y])}else h=l;return l=h.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:h}}return $o.Fragment=t,$o.jsx=i,$o.jsxs=i,$o}var gy;function CT(){return gy||(gy=1,Bf.exports=RT()),Bf.exports}var G=CT(),Hf={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function IT(){if(py)return _t;py=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),V=Symbol.iterator;function B(D){return D===null||typeof D!="object"?null:(D=V&&D[V]||D["@@iterator"],typeof D=="function"?D:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,lt={};function et(D,Q,st){this.props=D,this.context=Q,this.refs=lt,this.updater=st||$}et.prototype.isReactComponent={},et.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},et.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function At(){}At.prototype=et.prototype;function ft(D,Q,st){this.props=D,this.context=Q,this.refs=lt,this.updater=st||$}var yt=ft.prototype=new At;yt.constructor=ft,X(yt,et.prototype),yt.isPureReactComponent=!0;var Pt=Array.isArray,mt={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function k(D,Q,st,J,tt,pt){return st=pt.ref,{$$typeof:s,type:D,key:Q,ref:st!==void 0?st:null,props:pt}}function R(D,Q){return k(D.type,Q,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function C(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(st){return Q[st]})}var A=/\/+/g;function O(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):Q.toString(36)}function b(){}function Ht(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(b,b):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function qt(D,Q,st,J,tt){var pt=typeof D;(pt==="undefined"||pt==="boolean")&&(D=null);var vt=!1;if(D===null)vt=!0;else switch(pt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(D.$$typeof){case s:case t:vt=!0;break;case I:return vt=D._init,qt(vt(D._payload),Q,st,J,tt)}}if(vt)return tt=tt(D),vt=J===""?"."+O(D,0):J,Pt(tt)?(st="",vt!=null&&(st=vt.replace(A,"$&/")+"/"),qt(tt,Q,st,"",function(te){return te})):tt!=null&&(S(tt)&&(tt=R(tt,st+(tt.key==null||D&&D.key===tt.key?"":(""+tt.key).replace(A,"$&/")+"/")+vt)),Q.push(tt)),1;vt=0;var ue=J===""?".":J+":";if(Pt(D))for(var Vt=0;Vt<D.length;Vt++)J=D[Vt],pt=ue+O(J,Vt),vt+=qt(J,Q,st,pt,tt);else if(Vt=B(D),typeof Vt=="function")for(D=Vt.call(D),Vt=0;!(J=D.next()).done;)J=J.value,pt=ue+O(J,Vt++),vt+=qt(J,Q,st,pt,tt);else if(pt==="object"){if(typeof D.then=="function")return qt(Ht(D),Q,st,J,tt);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return vt}function W(D,Q,st){if(D==null)return D;var J=[],tt=0;return qt(D,J,"","",function(pt){return Q.call(st,pt,tt++)}),J}function nt(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(st){(D._status===0||D._status===-1)&&(D._status=1,D._result=st)},function(st){(D._status===0||D._status===-1)&&(D._status=2,D._result=st)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var it=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Dt(){}return _t.Children={map:W,forEach:function(D,Q,st){W(D,function(){Q.apply(this,arguments)},st)},count:function(D){var Q=0;return W(D,function(){Q++}),Q},toArray:function(D){return W(D,function(Q){return Q})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},_t.Component=et,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=ft,_t.StrictMode=a,_t.Suspense=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mt,_t.act=function(){throw Error("act(...) is not supported in production builds of React.")},_t.cache=function(D){return function(){return D.apply(null,arguments)}},_t.cloneElement=function(D,Q,st){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=X({},D.props),tt=D.key,pt=void 0;if(Q!=null)for(vt in Q.ref!==void 0&&(pt=void 0),Q.key!==void 0&&(tt=""+Q.key),Q)!Ct.call(Q,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&Q.ref===void 0||(J[vt]=Q[vt]);var vt=arguments.length-2;if(vt===1)J.children=st;else if(1<vt){for(var ue=Array(vt),Vt=0;Vt<vt;Vt++)ue[Vt]=arguments[Vt+2];J.children=ue}return k(D.type,tt,void 0,void 0,pt,J)},_t.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:h,_context:D},D},_t.createElement=function(D,Q,st){var J,tt={},pt=null;if(Q!=null)for(J in Q.key!==void 0&&(pt=""+Q.key),Q)Ct.call(Q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(tt[J]=Q[J]);var vt=arguments.length-2;if(vt===1)tt.children=st;else if(1<vt){for(var ue=Array(vt),Vt=0;Vt<vt;Vt++)ue[Vt]=arguments[Vt+2];tt.children=ue}if(D&&D.defaultProps)for(J in vt=D.defaultProps,vt)tt[J]===void 0&&(tt[J]=vt[J]);return k(D,pt,void 0,void 0,null,tt)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(D){return{$$typeof:y,render:D}},_t.isValidElement=S,_t.lazy=function(D){return{$$typeof:I,_payload:{_status:-1,_result:D},_init:nt}},_t.memo=function(D,Q){return{$$typeof:_,type:D,compare:Q===void 0?null:Q}},_t.startTransition=function(D){var Q=mt.T,st={};mt.T=st;try{var J=D(),tt=mt.S;tt!==null&&tt(st,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Dt,it)}catch(pt){it(pt)}finally{mt.T=Q}},_t.unstable_useCacheRefresh=function(){return mt.H.useCacheRefresh()},_t.use=function(D){return mt.H.use(D)},_t.useActionState=function(D,Q,st){return mt.H.useActionState(D,Q,st)},_t.useCallback=function(D,Q){return mt.H.useCallback(D,Q)},_t.useContext=function(D){return mt.H.useContext(D)},_t.useDebugValue=function(){},_t.useDeferredValue=function(D,Q){return mt.H.useDeferredValue(D,Q)},_t.useEffect=function(D,Q){return mt.H.useEffect(D,Q)},_t.useId=function(){return mt.H.useId()},_t.useImperativeHandle=function(D,Q,st){return mt.H.useImperativeHandle(D,Q,st)},_t.useInsertionEffect=function(D,Q){return mt.H.useInsertionEffect(D,Q)},_t.useLayoutEffect=function(D,Q){return mt.H.useLayoutEffect(D,Q)},_t.useMemo=function(D,Q){return mt.H.useMemo(D,Q)},_t.useOptimistic=function(D,Q){return mt.H.useOptimistic(D,Q)},_t.useReducer=function(D,Q,st){return mt.H.useReducer(D,Q,st)},_t.useRef=function(D){return mt.H.useRef(D)},_t.useState=function(D){return mt.H.useState(D)},_t.useSyncExternalStore=function(D,Q,st){return mt.H.useSyncExternalStore(D,Q,st)},_t.useTransition=function(){return mt.H.useTransition()},_t.version="19.0.0",_t}var yy;function Cd(){return yy||(yy=1,Hf.exports=IT()),Hf.exports}var Je=Cd(),qf={exports:{}},Zo={},Gf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function DT(){return vy||(vy=1,function(s){function t(W,nt){var it=W.length;W.push(nt);t:for(;0<it;){var Dt=it-1>>>1,D=W[Dt];if(0<l(D,nt))W[Dt]=nt,W[it]=D,it=Dt;else break t}}function i(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var nt=W[0],it=W.pop();if(it!==nt){W[0]=it;t:for(var Dt=0,D=W.length,Q=D>>>1;Dt<Q;){var st=2*(Dt+1)-1,J=W[st],tt=st+1,pt=W[tt];if(0>l(J,it))tt<D&&0>l(pt,J)?(W[Dt]=pt,W[tt]=it,Dt=tt):(W[Dt]=J,W[st]=it,Dt=st);else if(tt<D&&0>l(pt,it))W[Dt]=pt,W[tt]=it,Dt=tt;else break t}}return nt}function l(W,nt){var it=W.sortIndex-nt.sortIndex;return it!==0?it:W.id-nt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,y=d.now();s.unstable_now=function(){return d.now()-y}}var v=[],_=[],I=1,V=null,B=3,$=!1,X=!1,lt=!1,et=typeof setTimeout=="function"?setTimeout:null,At=typeof clearTimeout=="function"?clearTimeout:null,ft=typeof setImmediate<"u"?setImmediate:null;function yt(W){for(var nt=i(_);nt!==null;){if(nt.callback===null)a(_);else if(nt.startTime<=W)a(_),nt.sortIndex=nt.expirationTime,t(v,nt);else break;nt=i(_)}}function Pt(W){if(lt=!1,yt(W),!X)if(i(v)!==null)X=!0,Ht();else{var nt=i(_);nt!==null&&qt(Pt,nt.startTime-W)}}var mt=!1,Ct=-1,k=5,R=-1;function S(){return!(s.unstable_now()-R<k)}function C(){if(mt){var W=s.unstable_now();R=W;var nt=!0;try{t:{X=!1,lt&&(lt=!1,At(Ct),Ct=-1),$=!0;var it=B;try{e:{for(yt(W),V=i(v);V!==null&&!(V.expirationTime>W&&S());){var Dt=V.callback;if(typeof Dt=="function"){V.callback=null,B=V.priorityLevel;var D=Dt(V.expirationTime<=W);if(W=s.unstable_now(),typeof D=="function"){V.callback=D,yt(W),nt=!0;break e}V===i(v)&&a(v),yt(W)}else a(v);V=i(v)}if(V!==null)nt=!0;else{var Q=i(_);Q!==null&&qt(Pt,Q.startTime-W),nt=!1}}break t}finally{V=null,B=it,$=!1}nt=void 0}}finally{nt?A():mt=!1}}}var A;if(typeof ft=="function")A=function(){ft(C)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,b=O.port2;O.port1.onmessage=C,A=function(){b.postMessage(null)}}else A=function(){et(C,0)};function Ht(){mt||(mt=!0,A())}function qt(W,nt){Ct=et(function(){W(s.unstable_now())},nt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){X||$||(X=!0,Ht())},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return i(v)},s.unstable_next=function(W){switch(B){case 1:case 2:case 3:var nt=3;break;default:nt=B}var it=B;B=nt;try{return W()}finally{B=it}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,nt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var it=B;B=W;try{return nt()}finally{B=it}},s.unstable_scheduleCallback=function(W,nt,it){var Dt=s.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Dt+it:Dt):it=Dt,W){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=it+D,W={id:I++,callback:nt,priorityLevel:W,startTime:it,expirationTime:D,sortIndex:-1},it>Dt?(W.sortIndex=it,t(_,W),i(v)===null&&W===i(_)&&(lt?(At(Ct),Ct=-1):lt=!0,qt(Pt,it-Dt))):(W.sortIndex=D,t(v,W),X||$||(X=!0,Ht())),W},s.unstable_shouldYield=S,s.unstable_wrapCallback=function(W){var nt=B;return function(){var it=B;B=nt;try{return W.apply(this,arguments)}finally{B=it}}}}(Ff)),Ff}var _y;function OT(){return _y||(_y=1,Gf.exports=DT()),Gf.exports}var Kf={exports:{}},He={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function NT(){if(Ey)return He;Ey=1;var s=Cd();function t(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)_+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(v,_,I){var V=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:V==null?null:""+V,children:v,containerInfo:_,implementation:I}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,He.createPortal=function(v,_){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return h(v,_,null,I)},He.flushSync=function(v){var _=d.T,I=a.p;try{if(d.T=null,a.p=2,v)return v()}finally{d.T=_,a.p=I,a.d.f()}},He.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,a.d.C(v,_))},He.prefetchDNS=function(v){typeof v=="string"&&a.d.D(v)},He.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var I=_.as,V=y(I,_.crossOrigin),B=typeof _.integrity=="string"?_.integrity:void 0,$=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;I==="style"?a.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:V,integrity:B,fetchPriority:$}):I==="script"&&a.d.X(v,{crossOrigin:V,integrity:B,fetchPriority:$,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},He.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var I=y(_.as,_.crossOrigin);a.d.M(v,{crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&a.d.M(v)},He.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var I=_.as,V=y(I,_.crossOrigin);a.d.L(v,I,{crossOrigin:V,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},He.preloadModule=function(v,_){if(typeof v=="string")if(_){var I=y(_.as,_.crossOrigin);a.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else a.d.m(v)},He.requestFormReset=function(v){a.d.r(v)},He.unstable_batchedUpdates=function(v,_){return v(_)},He.useFormState=function(v,_,I){return d.H.useFormState(v,_,I)},He.useFormStatus=function(){return d.H.useHostTransitionStatus()},He.version="19.0.0",He}var Ty;function MT(){if(Ty)return Kf.exports;Ty=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Kf.exports=NT(),Kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function kT(){if(Ay)return Zo;Ay=1;var s=OT(),t=Cd(),i=MT();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),$=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),yt=Symbol.for("react.offscreen"),Pt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Ct(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function R(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case v:return"Fragment";case y:return"Portal";case I:return"Profiler";case _:return"StrictMode";case lt:return"Suspense";case et:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case At:return n=e.displayName||null,n!==null?n:R(e.type)||"Memo";case ft:n=e._payload,e=e._init;try{return R(e(n))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,A,O;function b(e){if(A===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||"",O=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+A+e+O}var Ht=!1;function qt(e,n){if(!e||Ht)return"";Ht=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(j){var P=j}Reflect.construct(e,[],K)}else{try{K.call()}catch(j){P=j}e.call(K.prototype)}}else{try{throw Error()}catch(j){P=j}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(j){if(j&&P&&typeof j.stack=="string")return[j.stack,P.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),p=f[0],E=f[1];if(p&&E){var w=p.split(`
`),M=E.split(`
`);for(c=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;if(o===w.length||c===M.length)for(o=w.length-1,c=M.length-1;1<=o&&0<=c&&w[o]!==M[c];)c--;for(;1<=o&&0<=c;o--,c--)if(w[o]!==M[c]){if(o!==1||c!==1)do if(o--,c--,0>c||w[o]!==M[c]){var H=`
`+w[o].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=o&&0<=c);break}}}finally{Ht=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?b(r):""}function W(e){switch(e.tag){case 26:case 27:case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return e=qt(e.type,!1),e;case 11:return e=qt(e.type.render,!1),e;case 1:return e=qt(e.type,!0),e;default:return""}}function nt(e){try{var n="";do n+=W(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function it(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function Dt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function D(e){if(it(e)!==e)throw Error(a(188))}function Q(e){var n=e.alternate;if(!n){if(n=it(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,o=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return D(c),e;if(f===o)return D(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=f;else{for(var p=!1,E=c.child;E;){if(E===r){p=!0,r=c,o=f;break}if(E===o){p=!0,o=c,r=f;break}E=E.sibling}if(!p){for(E=f.child;E;){if(E===r){p=!0,r=f,o=c;break}if(E===o){p=!0,o=f,r=c;break}E=E.sibling}if(!p)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=st(e),n!==null)return n;e=e.sibling}return null}var J=Array.isArray,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},vt=[],ue=-1;function Vt(e){return{current:e}}function te(e){0>ue||(e.current=vt[ue],vt[ue]=null,ue--)}function jt(e,n){ue++,vt[ue]=e.current,e.current=n}var Qe=Vt(null),li=Vt(null),gn=Vt(null),Ki=Vt(null);function Qi(e,n){switch(jt(gn,n),jt(li,e),jt(Qe,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?qp(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=qp(e),n=Gp(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}te(Qe),jt(Qe,n)}function ui(){te(Qe),te(li),te(gn)}function Ga(e){e.memoizedState!==null&&jt(Ki,e);var n=Qe.current,r=Gp(n,e.type);n!==r&&(jt(li,e),jt(Qe,r))}function xs(e){li.current===e&&(te(Qe),te(li)),Ki.current===e&&(te(Ki),Fo._currentValue=pt)}var Us=Object.prototype.hasOwnProperty,Hr=s.unstable_scheduleCallback,Ls=s.unstable_cancelCallback,Hc=s.unstable_shouldYield,Fa=s.unstable_requestPaint,tn=s.unstable_now,Sl=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,Ae=s.unstable_UserBlockingPriority,ci=s.unstable_NormalPriority,bl=s.unstable_LowPriority,Ka=s.unstable_IdlePriority,qc=s.log,qr=s.unstable_setDisableYieldValue,Yi=null,je=null;function Qa(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Yi,e,void 0,(e.current.flags&128)===128)}catch{}}function Hn(e){if(typeof qc=="function"&&qr(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(Yi,e)}catch{}}var Ye=Math.clz32?Math.clz32:Rl,Ya=Math.log,wl=Math.LN2;function Rl(e){return e>>>=0,e===0?32:31-(Ya(e)/wl|0)|0}var qn=128,Xi=4194304;function kn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,n){var r=e.pendingLanes;if(r===0)return 0;var o=0,c=e.suspendedLanes,f=e.pingedLanes,p=e.warmLanes;e=e.finishedLanes!==0;var E=r&134217727;return E!==0?(r=E&~c,r!==0?o=kn(r):(f&=E,f!==0?o=kn(f):e||(p=E&~p,p!==0&&(o=kn(p))))):(E=r&~c,E!==0?o=kn(E):f!==0?o=kn(f):e||(p=r&~p,p!==0&&(o=kn(p)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,p=n&-n,c>=p||c===32&&(p&4194176)!==0)?n:o}function $i(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ps(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xa(){var e=qn;return qn<<=1,(qn&4194176)===0&&(qn=128),e}function Zi(){var e=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),e}function zs(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function oe(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Cl(e,n,r,o,c,f){var p=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var E=e.entanglements,w=e.expirationTimes,M=e.hiddenUpdates;for(r=p&~r;0<r;){var H=31-Ye(r),K=1<<H;E[H]=0,w[H]=-1;var P=M[H];if(P!==null)for(M[H]=null,H=0;H<P.length;H++){var j=P[H];j!==null&&(j.lane&=-536870913)}r&=~K}o!==0&&Wi(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function Wi(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ye(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|r&4194218}function Ji(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var o=31-Ye(r),c=1<<o;c&n|e[o]&n&&(e[o]|=n),r&=~c}}function Il(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dl(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:ly(e.type))}function tr(e,n){var r=tt.p;try{return tt.p=e,n()}finally{tt.p=r}}var Gn=Math.random().toString(36).slice(2),Se="__reactFiber$"+Gn,pe="__reactProps$"+Gn,hi="__reactContainer$"+Gn,Gr="__reactEvents$"+Gn,js="__reactListeners$"+Gn,Fn="__reactHandles$"+Gn,$a="__reactResources$"+Gn,er="__reactMarker$"+Gn;function Fr(e){delete e[Se],delete e[pe],delete e[Gr],delete e[js],delete e[Fn]}function Vn(e){var n=e[Se];if(n)return n;for(var r=e.parentNode;r;){if(n=r[hi]||r[Se]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Qp(e);e!==null;){if(r=e[Se])return r;e=Qp(e)}return n}e=r,r=e.parentNode}return null}function fi(e){if(e=e[Se]||e[hi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function nr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function ir(e){var n=e[$a];return n||(n=e[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Zt(e){e[er]=!0}var Za=new Set,Bs={};function on(e,n){en(e,n),en(e+"Capture",n)}function en(e,n){for(Bs[e]=n,e=0;e<n.length;e++)Za.add(n[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wa={},Ja={};function Ol(e){return Us.call(Ja,e)?!0:Us.call(Wa,e)?!1:Gc.test(e)?Ja[e]=!0:(Wa[e]=!0,!1)}function rr(e,n,r){if(Ol(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function sr(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function yn(e,n,r,o){if(o===null)e.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+o)}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Fc(e){var n=Nl(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(p){o=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Fc(e))}function to(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return e&&(o=Nl(e)?e.checked?"true":"false":e.value),e=o,e!==r?(n.setValue(e),!0):!1}function Hs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var di=/[\n"\\]/g;function ee(e){return e.replace(di,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ar(e,n,r,o,c,f,p,E){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xe(n)):e.value!==""+Xe(n)&&(e.value=""+Xe(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?qs(e,p,Xe(n)):r!=null?qs(e,p,Xe(r)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Xe(E):e.removeAttribute("name")}function Qr(e,n,r,o,c,f,p,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Xe(r):"",n=n!=null?""+Xe(n):r,E||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function qs(e,n,r){n==="number"&&Hs(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function xt(e,n,r,o){if(e=e.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<e.length;r++)c=n.hasOwnProperty("$"+e[r].value),e[r].selected!==c&&(e[r].selected=c),c&&o&&(e[r].defaultSelected=!0)}else{for(r=""+Xe(r),n=null,c=0;c<e.length;c++){if(e[c].value===r){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Yr(e,n,r){if(n!=null&&(n=""+Xe(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Xe(r):""}function or(e,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(J(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Xe(n),e.defaultValue=r,o=e.textContent,o===r&&o!==""&&o!==null&&(e.value=o)}function vn(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Kc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function eo(e,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,r):typeof r!="number"||r===0||Kc.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Ml(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&eo(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&eo(e,f,n[f])}function no(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Yc.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var _n=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mi=null,gi=null;function pi(e){var n=fi(e);if(n&&(e=n.stateNode)){var r=e[pe]||null;t:switch(e=n.stateNode,n.type){case"input":if(ar(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ee(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==e&&o.form===e.form){var c=o[pe]||null;if(!c)throw Error(a(90));ar(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===e.form&&to(o)}break t;case"textarea":Yr(e,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&xt(e,!!r.multiple,n,!1)}}}var io=!1;function kl(e,n,r){if(io)return e(n,r);io=!0;try{var o=e(n);return o}finally{if(io=!1,(mi!==null||gi!==null)&&(bu(),mi&&(n=mi,e=gi,gi=mi=null,pi(n),e)))for(n=0;n<e.length;n++)pi(e[n])}}function Xr(e,n){var r=e.stateNode;if(r===null)return null;var o=r[pe]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var En=!1;if(ln)try{var $r={};Object.defineProperty($r,"passive",{get:function(){En=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{En=!1}var Qn=null,lr=null,yi=null;function ro(){if(yi)return yi;var e,n=lr,r=n.length,o,c="value"in Qn?Qn.value:Qn.textContent,f=c.length;for(e=0;e<r&&n[e]===c[e];e++);var p=r-e;for(o=1;o<=p&&n[r-o]===c[f-o];o++);return yi=c.slice(e,1<o?1-o:void 0)}function Yn(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function so(){return!1}function be(e){function n(r,o,c,f,p){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(r=e[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xn:so,this.isPropagationStopped=so,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=be(zt),Zr=C({},zt,{view:0,detail:0}),Vl=be(Zr),Ks,Qs,$n,Wr=C({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Ks=e.screenX-$n.screenX,Qs=e.screenY-$n.screenY):Qs=Ks=0,$n=e),Ks)},movementY:function(e){return"movementY"in e?e.movementY:Qs}}),Tn=be(Wr),xl=C({},Wr,{dataTransfer:0}),Xc=be(xl),Jr=C({},Zr,{relatedTarget:0}),Ys=be(Jr),ao=C({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Xs=be(ao),Ul=C({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$s=be(Ul),$c=C({},zt,{data:0}),oo=be($c),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ll={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lo(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pl[e])?!!n[e]:!1}function es(){return lo}var zl=C({},Zr,{key:function(e){if(e.key){var n=ts[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ll[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zs=be(zl),jl=C({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=be(jl),vi=C({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Bl=be(vi),Hl=C({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ql=be(Hl),Gl=C({},Wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ws=be(Gl),$e=C({},zt,{newState:0,oldState:0}),Fl=be($e),Kl=[9,13,27,32],Zn=ln&&"CompositionEvent"in window,u=null;ln&&"documentMode"in document&&(u=document.documentMode);var m=ln&&"TextEvent"in window&&!u,g=ln&&(!Zn||u&&8<u&&11>=u),T=" ",U=!1;function z(e,n){switch(e){case"keyup":return Kl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function ye(e,n){switch(e){case"compositionend":return Z(n);case"keypress":return n.which!==32?null:(U=!0,T);case"textInput":return e=n.data,e===T&&U?null:e;default:return null}}function Nt(e,n){if(Ot)return e==="compositionend"||!Zn&&z(e,n)?(e=ro(),yi=lr=Qn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g&&n.locale!=="ko"?null:n.data;default:return null}}var we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ve(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!we[e.type]:n==="textarea"}function _i(e,n,r,o){mi?gi?gi.push(o):gi=[o]:mi=o,n=Du(n,"onChange"),0<n.length&&(r=new Fs("onChange","change",null,r,o),e.push({event:r,listeners:n}))}var Me=null,Wn=null;function co(e){Pp(e,0)}function Ql(e){var n=nr(e);if(to(n))return e}function dm(e,n){if(e==="change")return n}var mm=!1;if(ln){var Zc;if(ln){var Wc="oninput"in document;if(!Wc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Wc=typeof gm.oninput=="function"}Zc=Wc}else Zc=!1;mm=Zc&&(!document.documentMode||9<document.documentMode)}function pm(){Me&&(Me.detachEvent("onpropertychange",ym),Wn=Me=null)}function ym(e){if(e.propertyName==="value"&&Ql(Wn)){var n=[];_i(n,Wn,e,Gs(e)),kl(co,n)}}function nE(e,n,r){e==="focusin"?(pm(),Me=n,Wn=r,Me.attachEvent("onpropertychange",ym)):e==="focusout"&&pm()}function iE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Wn)}function rE(e,n){if(e==="click")return Ql(n)}function sE(e,n){if(e==="input"||e==="change")return Ql(n)}function aE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var un=typeof Object.is=="function"?Object.is:aE;function ho(e,n){if(un(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!Us.call(n,c)||!un(e[c],n[c]))return!1}return!0}function vm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _m(e,n){var r=vm(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=n&&o>=n)return{node:r,offset:n-e};e=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=vm(r)}}function Em(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Em(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Hs(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Hs(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function oE(e,n){var r=Tm(n);n=e.focusedElem;var o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Em(n.ownerDocument.documentElement,n)){if(o!==null&&Jc(n)){if(e=o.start,r=o.end,r===void 0&&(r=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(r,n.value.length);else if(r=(e=n.ownerDocument||document)&&e.defaultView||window,r.getSelection){r=r.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!r.extend&&f>o&&(c=o,o=f,f=c),c=_m(n,f);var p=_m(n,o);c&&p&&(r.rangeCount!==1||r.anchorNode!==c.node||r.anchorOffset!==c.offset||r.focusNode!==p.node||r.focusOffset!==p.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),r.removeAllRanges(),f>o?(r.addRange(e),r.extend(p.node,p.offset)):(e.setEnd(p.node,p.offset),r.addRange(e)))}}for(e=[],r=n;r=r.parentNode;)r.nodeType===1&&e.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)r=e[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var lE=ln&&"documentMode"in document&&11>=document.documentMode,Js=null,th=null,fo=null,eh=!1;function Am(e,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;eh||Js==null||Js!==Hs(o)||(o=Js,"selectionStart"in o&&Jc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&ho(fo,o)||(fo=o,o=Du(th,"onSelect"),0<o.length&&(n=new Fs("onSelect","select",null,n,r),e.push({event:n,listeners:o}),n.target=Js)))}function ns(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var ta={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},nh={},Sm={};ln&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function is(e){if(nh[e])return nh[e];if(!ta[e])return e;var n=ta[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Sm)return nh[e]=n[r];return e}var bm=is("animationend"),wm=is("animationiteration"),Rm=is("animationstart"),uE=is("transitionrun"),cE=is("transitionstart"),hE=is("transitioncancel"),Cm=is("transitionend"),Im=new Map,Dm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function xn(e,n){Im.set(e,n),on(n,[e])}var An=[],ea=0,ih=0;function Yl(){for(var e=ea,n=ih=ea=0;n<e;){var r=An[n];An[n++]=null;var o=An[n];An[n++]=null;var c=An[n];An[n++]=null;var f=An[n];if(An[n++]=null,o!==null&&c!==null){var p=o.pending;p===null?c.next=c:(c.next=p.next,p.next=c),o.pending=c}f!==0&&Om(r,c,f)}}function Xl(e,n,r,o){An[ea++]=e,An[ea++]=n,An[ea++]=r,An[ea++]=o,ih|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function rh(e,n,r,o){return Xl(e,n,r,o),$l(e)}function ur(e,n){return Xl(e,null,null,n),$l(e)}function Om(e,n,r){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r);for(var c=!1,f=e.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Ye(r),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=r|536870912)}function $l(e){if(50<Po)throw Po=0,hf=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var na={},Nm=new WeakMap;function Sn(e,n){if(typeof e=="object"&&e!==null){var r=Nm.get(e);return r!==void 0?r:(n={value:e,source:n,stack:nt(n)},Nm.set(e,n),n)}return{value:e,source:n,stack:nt(n)}}var ia=[],ra=0,Zl=null,Wl=0,bn=[],wn=0,rs=null,Ei=1,Ti="";function ss(e,n){ia[ra++]=Wl,ia[ra++]=Zl,Zl=e,Wl=n}function Mm(e,n,r){bn[wn++]=Ei,bn[wn++]=Ti,bn[wn++]=rs,rs=e;var o=Ei;e=Ti;var c=32-Ye(o)-1;o&=~(1<<c),r+=1;var f=32-Ye(n)+c;if(30<f){var p=c-c%5;f=(o&(1<<p)-1).toString(32),o>>=p,c-=p,Ei=1<<32-Ye(n)+c|r<<c|o,Ti=f+e}else Ei=1<<f|r<<c|o,Ti=e}function sh(e){e.return!==null&&(ss(e,1),Mm(e,1,0))}function ah(e){for(;e===Zl;)Zl=ia[--ra],ia[ra]=null,Wl=ia[--ra],ia[ra]=null;for(;e===rs;)rs=bn[--wn],bn[wn]=null,Ti=bn[--wn],bn[wn]=null,Ei=bn[--wn],bn[wn]=null}var Ze=null,ke=null,Ut=!1,Un=null,Jn=!1,oh=Error(a(519));function as(e){var n=Error(a(418,""));throw po(Sn(n,e)),oh}function km(e){var n=e.stateNode,r=e.type,o=e.memoizedProps;switch(n[Se]=e,n[pe]=o,r){case"dialog":It("cancel",n),It("close",n);break;case"iframe":case"object":case"embed":It("load",n);break;case"video":case"audio":for(r=0;r<jo.length;r++)It(jo[r],n);break;case"source":It("error",n);break;case"img":case"image":case"link":It("error",n),It("load",n);break;case"details":It("toggle",n);break;case"input":It("invalid",n),Qr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Kr(n);break;case"select":It("invalid",n);break;case"textarea":It("invalid",n),or(n,o.value,o.defaultValue,o.children),Kr(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||Hp(n.textContent,r)?(o.popover!=null&&(It("beforetoggle",n),It("toggle",n)),o.onScroll!=null&&It("scroll",n),o.onScrollEnd!=null&&It("scrollend",n),o.onClick!=null&&(n.onclick=Ou),n=!0):n=!1,n||as(e)}function Vm(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 3:case 27:Jn=!0;return;case 5:case 13:Jn=!1;return;default:Ze=Ze.return}}function mo(e){if(e!==Ze)return!1;if(!Ut)return Vm(e),Ut=!0,!1;var n=!1,r;if((r=e.tag!==3&&e.tag!==27)&&((r=e.tag===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||If(e.type,e.memoizedProps)),r=!r),r&&(n=!0),n&&ke&&as(e),Vm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){ke=Pn(e.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}ke=null}}else ke=Ze?Pn(e.stateNode.nextSibling):null;return!0}function go(){ke=Ze=null,Ut=!1}function po(e){Un===null?Un=[e]:Un.push(e)}var yo=Error(a(460)),xm=Error(a(474)),lh={then:function(){}};function Um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jl(){}function Lm(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(Jl,Jl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===yo?Error(a(483)):e;default:if(typeof n.status=="string")n.then(Jl,Jl);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===yo?Error(a(483)):e}throw vo=n,yo}}var vo=null;function Pm(){if(vo===null)throw Error(a(459));var e=vo;return vo=null,e}var sa=null,_o=0;function tu(e){var n=_o;return _o+=1,sa===null&&(sa=[]),Lm(sa,e,n)}function Eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function eu(e,n){throw n.$$typeof===h?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zm(e){var n=e._init;return n(e._payload)}function jm(e){function n(x,N){if(e){var L=x.deletions;L===null?(x.deletions=[N],x.flags|=16):L.push(N)}}function r(x,N){if(!e)return null;for(;N!==null;)n(x,N),N=N.sibling;return null}function o(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function c(x,N){return x=Tr(x,N),x.index=0,x.sibling=null,x}function f(x,N,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<N?(x.flags|=33554434,N):L):(x.flags|=33554434,N)):(x.flags|=1048576,N)}function p(x){return e&&x.alternate===null&&(x.flags|=33554434),x}function E(x,N,L,q){return N===null||N.tag!==6?(N=nf(L,x.mode,q),N.return=x,N):(N=c(N,L),N.return=x,N)}function w(x,N,L,q){var rt=L.type;return rt===v?H(x,N,L.props.children,q,L.key):N!==null&&(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ft&&zm(rt)===N.type)?(N=c(N,L.props),Eo(N,L),N.return=x,N):(N=_u(L.type,L.key,L.props,null,x.mode,q),Eo(N,L),N.return=x,N)}function M(x,N,L,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=rf(L,x.mode,q),N.return=x,N):(N=c(N,L.children||[]),N.return=x,N)}function H(x,N,L,q,rt){return N===null||N.tag!==7?(N=ps(L,x.mode,q,rt),N.return=x,N):(N=c(N,L),N.return=x,N)}function K(x,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=nf(""+N,x.mode,L),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case d:return L=_u(N.type,N.key,N.props,null,x.mode,L),Eo(L,N),L.return=x,L;case y:return N=rf(N,x.mode,L),N.return=x,N;case ft:var q=N._init;return N=q(N._payload),K(x,N,L)}if(J(N)||Ct(N))return N=ps(N,x.mode,L,null),N.return=x,N;if(typeof N.then=="function")return K(x,tu(N),L);if(N.$$typeof===$)return K(x,pu(x,N),L);eu(x,N)}return null}function P(x,N,L,q){var rt=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return rt!==null?null:E(x,N,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case d:return L.key===rt?w(x,N,L,q):null;case y:return L.key===rt?M(x,N,L,q):null;case ft:return rt=L._init,L=rt(L._payload),P(x,N,L,q)}if(J(L)||Ct(L))return rt!==null?null:H(x,N,L,q,null);if(typeof L.then=="function")return P(x,N,tu(L),q);if(L.$$typeof===$)return P(x,N,pu(x,L),q);eu(x,L)}return null}function j(x,N,L,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return x=x.get(L)||null,E(N,x,""+q,rt);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return x=x.get(q.key===null?L:q.key)||null,w(N,x,q,rt);case y:return x=x.get(q.key===null?L:q.key)||null,M(N,x,q,rt);case ft:var St=q._init;return q=St(q._payload),j(x,N,L,q,rt)}if(J(q)||Ct(q))return x=x.get(L)||null,H(N,x,q,rt,null);if(typeof q.then=="function")return j(x,N,L,tu(q),rt);if(q.$$typeof===$)return j(x,N,L,pu(N,q),rt);eu(N,q)}return null}function ot(x,N,L,q){for(var rt=null,St=null,ct=N,ht=N=0,Ie=null;ct!==null&&ht<L.length;ht++){ct.index>ht?(Ie=ct,ct=null):Ie=ct.sibling;var Lt=P(x,ct,L[ht],q);if(Lt===null){ct===null&&(ct=Ie);break}e&&ct&&Lt.alternate===null&&n(x,ct),N=f(Lt,N,ht),St===null?rt=Lt:St.sibling=Lt,St=Lt,ct=Ie}if(ht===L.length)return r(x,ct),Ut&&ss(x,ht),rt;if(ct===null){for(;ht<L.length;ht++)ct=K(x,L[ht],q),ct!==null&&(N=f(ct,N,ht),St===null?rt=ct:St.sibling=ct,St=ct);return Ut&&ss(x,ht),rt}for(ct=o(ct);ht<L.length;ht++)Ie=j(ct,x,ht,L[ht],q),Ie!==null&&(e&&Ie.alternate!==null&&ct.delete(Ie.key===null?ht:Ie.key),N=f(Ie,N,ht),St===null?rt=Ie:St.sibling=Ie,St=Ie);return e&&ct.forEach(function(Ir){return n(x,Ir)}),Ut&&ss(x,ht),rt}function gt(x,N,L,q){if(L==null)throw Error(a(151));for(var rt=null,St=null,ct=N,ht=N=0,Ie=null,Lt=L.next();ct!==null&&!Lt.done;ht++,Lt=L.next()){ct.index>ht?(Ie=ct,ct=null):Ie=ct.sibling;var Ir=P(x,ct,Lt.value,q);if(Ir===null){ct===null&&(ct=Ie);break}e&&ct&&Ir.alternate===null&&n(x,ct),N=f(Ir,N,ht),St===null?rt=Ir:St.sibling=Ir,St=Ir,ct=Ie}if(Lt.done)return r(x,ct),Ut&&ss(x,ht),rt;if(ct===null){for(;!Lt.done;ht++,Lt=L.next())Lt=K(x,Lt.value,q),Lt!==null&&(N=f(Lt,N,ht),St===null?rt=Lt:St.sibling=Lt,St=Lt);return Ut&&ss(x,ht),rt}for(ct=o(ct);!Lt.done;ht++,Lt=L.next())Lt=j(ct,x,ht,Lt.value,q),Lt!==null&&(e&&Lt.alternate!==null&&ct.delete(Lt.key===null?ht:Lt.key),N=f(Lt,N,ht),St===null?rt=Lt:St.sibling=Lt,St=Lt);return e&&ct.forEach(function(wT){return n(x,wT)}),Ut&&ss(x,ht),rt}function re(x,N,L,q){if(typeof L=="object"&&L!==null&&L.type===v&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case d:t:{for(var rt=L.key;N!==null;){if(N.key===rt){if(rt=L.type,rt===v){if(N.tag===7){r(x,N.sibling),q=c(N,L.props.children),q.return=x,x=q;break t}}else if(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ft&&zm(rt)===N.type){r(x,N.sibling),q=c(N,L.props),Eo(q,L),q.return=x,x=q;break t}r(x,N);break}else n(x,N);N=N.sibling}L.type===v?(q=ps(L.props.children,x.mode,q,L.key),q.return=x,x=q):(q=_u(L.type,L.key,L.props,null,x.mode,q),Eo(q,L),q.return=x,x=q)}return p(x);case y:t:{for(rt=L.key;N!==null;){if(N.key===rt)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){r(x,N.sibling),q=c(N,L.children||[]),q.return=x,x=q;break t}else{r(x,N);break}else n(x,N);N=N.sibling}q=rf(L,x.mode,q),q.return=x,x=q}return p(x);case ft:return rt=L._init,L=rt(L._payload),re(x,N,L,q)}if(J(L))return ot(x,N,L,q);if(Ct(L)){if(rt=Ct(L),typeof rt!="function")throw Error(a(150));return L=rt.call(L),gt(x,N,L,q)}if(typeof L.then=="function")return re(x,N,tu(L),q);if(L.$$typeof===$)return re(x,N,pu(x,L),q);eu(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(r(x,N.sibling),q=c(N,L),q.return=x,x=q):(r(x,N),q=nf(L,x.mode,q),q.return=x,x=q),p(x)):r(x,N)}return function(x,N,L,q){try{_o=0;var rt=re(x,N,L,q);return sa=null,rt}catch(ct){if(ct===yo)throw ct;var St=Dn(29,ct,null,x.mode);return St.lanes=q,St.return=x,St}finally{}}}var os=jm(!0),Bm=jm(!1),aa=Vt(null),nu=Vt(0);function Hm(e,n){e=Mi,jt(nu,e),jt(aa,n),Mi=e|n.baseLanes}function uh(){jt(nu,Mi),jt(aa,aa.current)}function ch(){Mi=nu.current,te(aa),te(nu)}var Rn=Vt(null),ti=null;function cr(e){var n=e.alternate;jt(_e,_e.current&1),jt(Rn,e),ti===null&&(n===null||aa.current!==null||n.memoizedState!==null)&&(ti=e)}function qm(e){if(e.tag===22){if(jt(_e,_e.current),jt(Rn,e),ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(ti=e)}}else hr()}function hr(){jt(_e,_e.current),jt(Rn,Rn.current)}function Ai(e){te(Rn),ti===e&&(ti=null),te(_e)}var _e=Vt(0);function iu(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},dE=s.unstable_scheduleCallback,mE=s.unstable_NormalPriority,Ee={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hh(){return{controller:new fE,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&dE(mE,function(){e.controller.abort()})}var Ao=null,fh=0,oa=0,la=null;function gE(e,n){if(Ao===null){var r=Ao=[];fh=0,oa=_f(),la={status:"pending",value:void 0,then:function(o){r.push(o)}}}return fh++,n.then(Gm,Gm),n}function Gm(){if(--fh===0&&Ao!==null){la!==null&&(la.status="fulfilled");var e=Ao;Ao=null,oa=0,la=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function pE(e,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var Fm=S.S;S.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gE(e,n),Fm!==null&&Fm(e,n)};var ls=Vt(null);function dh(){var e=ls.current;return e!==null?e:Qt.pooledCache}function ru(e,n){n===null?jt(ls,ls.current):jt(ls,n.pool)}function Km(){var e=dh();return e===null?null:{parent:Ee._currentValue,pool:e}}var fr=0,Tt=null,Gt=null,ce=null,su=!1,ua=!1,us=!1,au=0,So=0,ca=null,yE=0;function le(){throw Error(a(321))}function mh(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!un(e[r],n[r]))return!1;return!0}function gh(e,n,r,o,c,f){return fr=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=e===null||e.memoizedState===null?cs:dr,us=!1,f=r(o,c),us=!1,ua&&(f=Ym(n,r,o,c)),Qm(e),f}function Qm(e){S.H=ei;var n=Gt!==null&&Gt.next!==null;if(fr=0,ce=Gt=Tt=null,su=!1,So=0,ca=null,n)throw Error(a(300));e===null||Re||(e=e.dependencies,e!==null&&gu(e)&&(Re=!0))}function Ym(e,n,r,o){Tt=e;var c=0;do{if(ua&&(ca=null),So=0,ua=!1,25<=c)throw Error(a(301));if(c+=1,ce=Gt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}S.H=hs,f=n(r,o)}while(ua);return f}function vE(){var e=S.H,n=e.useState()[0];return n=typeof n.then=="function"?bo(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(Tt.flags|=1024),n}function ph(){var e=au!==0;return au=0,e}function yh(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function vh(e){if(su){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}su=!1}fr=0,ce=Gt=Tt=null,ua=!1,So=au=0,ca=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Tt.memoizedState=ce=e:ce=ce.next=e,ce}function he(){if(Gt===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=ce===null?Tt.memoizedState:ce.next;if(n!==null)ce=n,Gt=e;else{if(e===null)throw Tt.alternate===null?Error(a(467)):Error(a(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},ce===null?Tt.memoizedState=ce=e:ce=ce.next=e}return ce}var ou;ou=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bo(e){var n=So;return So+=1,ca===null&&(ca=[]),e=Lm(ca,e,n),n=Tt,(ce===null?n.memoizedState:ce.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?cs:dr),e}function lu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bo(e);if(e.$$typeof===$)return Be(e)}throw Error(a(438,String(e)))}function _h(e){var n=null,r=Tt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=ou(),Tt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),o=0;o<e;o++)r[o]=Pt;return n.index++,r}function Si(e,n){return typeof n=="function"?n(e):n}function uu(e){var n=he();return Eh(n,Gt,e)}function Eh(e,n,r){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var p=c.next;c.next=f.next,f.next=p}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=p=null,w=null,M=n,H=!1;do{var K=M.lane&-536870913;if(K!==M.lane?(Mt&K)===K:(fr&K)===K){var P=M.revertLane;if(P===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),K===oa&&(H=!0);else if((fr&P)===P){M=M.next,P===oa&&(H=!0);continue}else K={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(E=w=K,p=f):w=w.next=K,Tt.lanes|=P,Ar|=P;K=M.action,us&&r(f,K),f=M.hasEagerState?M.eagerState:r(f,K)}else P={lane:K,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(E=w=P,p=f):w=w.next=P,Tt.lanes|=K,Ar|=K;M=M.next}while(M!==null&&M!==n);if(w===null?p=f:w.next=E,!un(f,e.memoizedState)&&(Re=!0,H&&(r=la,r!==null)))throw r;e.memoizedState=f,e.baseState=p,e.baseQueue=w,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Th(e){var n=he(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var o=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var p=c=c.next;do f=e(f,p.action),p=p.next;while(p!==c);un(f,n.memoizedState)||(Re=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Xm(e,n,r){var o=Tt,c=he(),f=Ut;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var p=!un((Gt||c).memoizedState,r);if(p&&(c.memoizedState=r,Re=!0),c=c.queue,bh(Wm.bind(null,o,c,e),[e]),c.getSnapshot!==n||p||ce!==null&&ce.memoizedState.tag&1){if(o.flags|=2048,ha(9,Zm.bind(null,o,c,r,n),{destroy:void 0},null),Qt===null)throw Error(a(349));f||(fr&60)!==0||$m(o,n,r)}return r}function $m(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=Tt.updateQueue,n===null?(n=ou(),Tt.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Zm(e,n,r,o){n.value=r,n.getSnapshot=o,Jm(n)&&tg(e)}function Wm(e,n,r){return r(function(){Jm(n)&&tg(e)})}function Jm(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!un(e,r)}catch{return!0}}function tg(e){var n=ur(e,2);n!==null&&We(n,e,2)}function Ah(e){var n=nn();if(typeof e=="function"){var r=e;if(e=r(),us){Hn(!0);try{r()}finally{Hn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},n}function eg(e,n,r,o){return e.baseState=r,Eh(e,Gt,typeof o=="function"?o:Si)}function _E(e,n,r,o,c){if(fu(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};S.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,ng(n,f)):(f.next=r.next,n.pending=r.next=f)}}function ng(e,n){var r=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=S.T,p={};S.T=p;try{var E=r(c,o),w=S.S;w!==null&&w(p,E),ig(e,n,E)}catch(M){Sh(e,n,M)}finally{S.T=f}}else try{f=r(c,o),ig(e,n,f)}catch(M){Sh(e,n,M)}}function ig(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){rg(e,n,o)},function(o){return Sh(e,n,o)}):rg(e,n,r)}function rg(e,n,r){n.status="fulfilled",n.value=r,sg(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,ng(e,r)))}function Sh(e,n,r){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,sg(n),n=n.next;while(n!==o)}e.action=null}function sg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ag(e,n){return n}function og(e,n){if(Ut){var r=Qt.formState;if(r!==null){t:{var o=Tt;if(Ut){if(ke){e:{for(var c=ke,f=Jn;c.nodeType!==8;){if(!f){c=null;break e}if(c=Pn(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){ke=Pn(c.nextSibling),o=c.data==="F!";break t}}as(o)}o=!1}o&&(n=r[0])}}return r=nn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:n},r.queue=o,r=wg.bind(null,Tt,o),o.dispatch=r,o=Ah(!1),f=Dh.bind(null,Tt,!1,o.queue),o=nn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,r=_E.bind(null,Tt,c,f,r),c.dispatch=r,o.memoizedState=e,[n,r,!1]}function lg(e){var n=he();return ug(n,Gt,e)}function ug(e,n,r){n=Eh(e,n,ag)[0],e=uu(Si)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?bo(n):n;var o=he(),c=o.queue,f=c.dispatch;return r!==o.memoizedState&&(Tt.flags|=2048,ha(9,EE.bind(null,c,r),{destroy:void 0},null)),[n,f,e]}function EE(e,n){e.action=n}function cg(e){var n=he(),r=Gt;if(r!==null)return ug(n,r,e);he(),n=n.memoizedState,r=he();var o=r.queue.dispatch;return r.memoizedState=e,[n,o,!1]}function ha(e,n,r,o){return e={tag:e,create:n,inst:r,deps:o,next:null},n=Tt.updateQueue,n===null&&(n=ou(),Tt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,n.lastEffect=e),e}function hg(){return he().memoizedState}function cu(e,n,r,o){var c=nn();Tt.flags|=e,c.memoizedState=ha(1|n,r,{destroy:void 0},o===void 0?null:o)}function hu(e,n,r,o){var c=he();o=o===void 0?null:o;var f=c.memoizedState.inst;Gt!==null&&o!==null&&mh(o,Gt.memoizedState.deps)?c.memoizedState=ha(n,r,f,o):(Tt.flags|=e,c.memoizedState=ha(1|n,r,f,o))}function fg(e,n){cu(8390656,8,e,n)}function bh(e,n){hu(2048,8,e,n)}function dg(e,n){return hu(4,2,e,n)}function mg(e,n){return hu(4,4,e,n)}function gg(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function pg(e,n,r){r=r!=null?r.concat([e]):null,hu(4,4,gg.bind(null,n,e),r)}function wh(){}function yg(e,n){var r=he();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&mh(n,o[1])?o[0]:(r.memoizedState=[e,n],e)}function vg(e,n){var r=he();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&mh(n,o[1]))return o[0];if(o=e(),us){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[o,n],o}function Rh(e,n,r){return r===void 0||(fr&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Ep(),Tt.lanes|=e,Ar|=e,r)}function _g(e,n,r,o){return un(r,n)?r:aa.current!==null?(e=Rh(e,r,o),un(e,n)||(Re=!0),e):(fr&42)===0?(Re=!0,e.memoizedState=r):(e=Ep(),Tt.lanes|=e,Ar|=e,n)}function Eg(e,n,r,o,c){var f=tt.p;tt.p=f!==0&&8>f?f:8;var p=S.T,E={};S.T=E,Dh(e,!1,n,r);try{var w=c(),M=S.S;if(M!==null&&M(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=pE(w,o);wo(e,n,H,dn(e))}else wo(e,n,o,dn(e))}catch(K){wo(e,n,{then:function(){},status:"rejected",reason:K},dn())}finally{tt.p=f,S.T=p}}function TE(){}function Ch(e,n,r,o){if(e.tag!==5)throw Error(a(476));var c=Tg(e).queue;Eg(e,c,n,pt,r===null?TE:function(){return Ag(e),r(o)})}function Tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:pt},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ag(e){var n=Tg(e).next.queue;wo(e,n,{},dn())}function Ih(){return Be(Fo)}function Sg(){return he().memoizedState}function bg(){return he().memoizedState}function AE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=dn();e=pr(r);var o=yr(n,e,r);o!==null&&(We(o,n,r),Io(o,n,r)),n={cache:hh()},e.payload=n;return}n=n.return}}function SE(e,n,r){var o=dn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},fu(e)?Rg(n,r):(r=rh(e,n,r,o),r!==null&&(We(r,e,o),Cg(r,n,o)))}function wg(e,n,r){var o=dn();wo(e,n,r,o)}function wo(e,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(fu(e))Rg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,E=f(p,r);if(c.hasEagerState=!0,c.eagerState=E,un(E,p))return Xl(e,n,c,0),Qt===null&&Yl(),!1}catch{}finally{}if(r=rh(e,n,c,o),r!==null)return We(r,e,o),Cg(r,n,o),!0}return!1}function Dh(e,n,r,o){if(o={lane:2,revertLane:_f(),action:o,hasEagerState:!1,eagerState:null,next:null},fu(e)){if(n)throw Error(a(479))}else n=rh(e,r,o,2),n!==null&&We(n,e,2)}function fu(e){var n=e.alternate;return e===Tt||n!==null&&n===Tt}function Rg(e,n){ua=su=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Cg(e,n,r){if((r&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ji(e,r)}}var ei={readContext:Be,use:lu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le};ei.useCacheRefresh=le,ei.useMemoCache=le,ei.useHostTransitionStatus=le,ei.useFormState=le,ei.useActionState=le,ei.useOptimistic=le;var cs={readContext:Be,use:lu,useCallback:function(e,n){return nn().memoizedState=[e,n===void 0?null:n],e},useContext:Be,useEffect:fg,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,cu(4194308,4,gg.bind(null,n,e),r)},useLayoutEffect:function(e,n){return cu(4194308,4,e,n)},useInsertionEffect:function(e,n){cu(4,2,e,n)},useMemo:function(e,n){var r=nn();n=n===void 0?null:n;var o=e();if(us){Hn(!0);try{e()}finally{Hn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(e,n,r){var o=nn();if(r!==void 0){var c=r(n);if(us){Hn(!0);try{r(n)}finally{Hn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=SE.bind(null,Tt,e),[o.memoizedState,e]},useRef:function(e){var n=nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ah(e);var n=e.queue,r=wg.bind(null,Tt,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(e,n){var r=nn();return Rh(r,e,n)},useTransition:function(){var e=Ah(!1);return e=Eg.bind(null,Tt,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var o=Tt,c=nn();if(Ut){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Qt===null)throw Error(a(349));(Mt&60)!==0||$m(o,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,fg(Wm.bind(null,o,f,e),[e]),o.flags|=2048,ha(9,Zm.bind(null,o,f,r,n),{destroy:void 0},null),r},useId:function(){var e=nn(),n=Qt.identifierPrefix;if(Ut){var r=Ti,o=Ei;r=(o&~(1<<32-Ye(o)-1)).toString(32)+r,n=":"+n+"R"+r,r=au++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=yE++,n=":"+n+"r"+r.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return nn().memoizedState=AE.bind(null,Tt)}};cs.useMemoCache=_h,cs.useHostTransitionStatus=Ih,cs.useFormState=og,cs.useActionState=og,cs.useOptimistic=function(e){var n=nn();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Dh.bind(null,Tt,!0,r),r.dispatch=n,[e,n]};var dr={readContext:Be,use:lu,useCallback:yg,useContext:Be,useEffect:bh,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:mg,useMemo:vg,useReducer:uu,useRef:hg,useState:function(){return uu(Si)},useDebugValue:wh,useDeferredValue:function(e,n){var r=he();return _g(r,Gt.memoizedState,e,n)},useTransition:function(){var e=uu(Si)[0],n=he().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Xm,useId:Sg};dr.useCacheRefresh=bg,dr.useMemoCache=_h,dr.useHostTransitionStatus=Ih,dr.useFormState=lg,dr.useActionState=lg,dr.useOptimistic=function(e,n){var r=he();return eg(r,Gt,e,n)};var hs={readContext:Be,use:lu,useCallback:yg,useContext:Be,useEffect:bh,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:mg,useMemo:vg,useReducer:Th,useRef:hg,useState:function(){return Th(Si)},useDebugValue:wh,useDeferredValue:function(e,n){var r=he();return Gt===null?Rh(r,e,n):_g(r,Gt.memoizedState,e,n)},useTransition:function(){var e=Th(Si)[0],n=he().memoizedState;return[typeof e=="boolean"?e:bo(e),n]},useSyncExternalStore:Xm,useId:Sg};hs.useCacheRefresh=bg,hs.useMemoCache=_h,hs.useHostTransitionStatus=Ih,hs.useFormState=cg,hs.useActionState=cg,hs.useOptimistic=function(e,n){var r=he();return Gt!==null?eg(r,Gt,e,n):(r.baseState=e,[e,r.queue.dispatch])};function Oh(e,n,r,o){n=e.memoizedState,r=r(o,n),r=r==null?n:C({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Nh={isMounted:function(e){return(e=e._reactInternals)?it(e)===e:!1},enqueueSetState:function(e,n,r){e=e._reactInternals;var o=dn(),c=pr(o);c.payload=n,r!=null&&(c.callback=r),n=yr(e,c,o),n!==null&&(We(n,e,o),Io(n,e,o))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var o=dn(),c=pr(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=yr(e,c,o),n!==null&&(We(n,e,o),Io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=dn(),o=pr(r);o.tag=2,n!=null&&(o.callback=n),n=yr(e,o,r),n!==null&&(We(n,e,r),Io(n,e,r))}};function Ig(e,n,r,o,c,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,p):n.prototype&&n.prototype.isPureReactComponent?!ho(r,o)||!ho(c,f):!0}function Dg(e,n,r,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==e&&Nh.enqueueReplaceState(n,n.state,null)}function fs(e,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(e=e.defaultProps){r===n&&(r=C({},r));for(var c in e)r[c]===void 0&&(r[c]=e[c])}return r}var du=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Og(e){du(e)}function Ng(e){console.error(e)}function Mg(e){du(e)}function mu(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function kg(e,n,r){try{var o=e.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mh(e,n,r){return r=pr(r),r.tag=3,r.payload={element:null},r.callback=function(){mu(e,n)},r}function Vg(e){return e=pr(e),e.tag=3,e}function xg(e,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){kg(n,r,o)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){kg(n,r,o),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function bE(e,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Co(n,r,c,!0),r=Rn.current,r!==null){switch(r.tag){case 13:return ti===null?mf():r.alternate===null&&ie===0&&(ie=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===lh?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),pf(e,o,c)),!1;case 22:return r.flags|=65536,o===lh?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),pf(e,o,c)),!1}throw Error(a(435,r.tag))}return pf(e,o,c),mf(),!1}if(Ut)return n=Rn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==oh&&(e=Error(a(422),{cause:o}),po(Sn(e,r)))):(o!==oh&&(n=Error(a(423),{cause:o}),po(Sn(n,r))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Sn(o,r),c=Mh(e.stateNode,o,c),Qh(e,c),ie!==4&&(ie=2)),!1;var f=Error(a(520),{cause:o});if(f=Sn(f,r),Uo===null?Uo=[f]:Uo.push(f),ie!==4&&(ie=2),n===null)return!0;o=Sn(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=c&-c,r.lanes|=e,e=Mh(r.stateNode,o,e),Qh(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sr===null||!Sr.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Vg(c),xg(c,e,r,o),Qh(r,c),!1}r=r.return}while(r!==null);return!1}var Ug=Error(a(461)),Re=!1;function Ve(e,n,r,o){n.child=e===null?Bm(n,null,r,o):os(n,e.child,r,o)}function Lg(e,n,r,o,c){r=r.render;var f=n.ref;if("ref"in o){var p={};for(var E in o)E!=="ref"&&(p[E]=o[E])}else p=o;return ms(n),o=gh(e,n,r,p,f,c),E=ph(),e!==null&&!Re?(yh(e,n,c),bi(e,n,c)):(Ut&&E&&sh(n),n.flags|=1,Ve(e,n,o,c),n.child)}function Pg(e,n,r,o,c){if(e===null){var f=r.type;return typeof f=="function"&&!ef(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,zg(e,n,f,o,c)):(e=_u(r.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Bh(e,c)){var p=f.memoizedProps;if(r=r.compare,r=r!==null?r:ho,r(p,o)&&e.ref===n.ref)return bi(e,n,c)}return n.flags|=1,e=Tr(f,o),e.ref=n.ref,e.return=n,n.child=e}function zg(e,n,r,o,c){if(e!==null){var f=e.memoizedProps;if(ho(f,o)&&e.ref===n.ref)if(Re=!1,n.pendingProps=o=f,Bh(e,c))(e.flags&131072)!==0&&(Re=!0);else return n.lanes=e.lanes,bi(e,n,c)}return kh(e,n,r,o,c)}function jg(e,n,r){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,p=e!==null?e.memoizedState:null;if(Ro(e,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=p!==null?p.baseLanes|r:r,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bg(e,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ru(n,p!==null?p.cachePool:null),p!==null?Hm(n,p):uh(),qm(n);else return n.lanes=n.childLanes=536870912,Bg(e,n,p!==null?p.baseLanes|r:r,r)}else p!==null?(ru(n,p.cachePool),Hm(n,p),hr(),n.memoizedState=null):(e!==null&&ru(n,null),uh(),hr());return Ve(e,n,c,r),n.child}function Bg(e,n,r,o){var c=dh();return c=c===null?null:{parent:Ee._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},e!==null&&ru(n,null),uh(),qm(n),e!==null&&Co(e,n,o,!0),null}function Ro(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=2097664)}}function kh(e,n,r,o,c){return ms(n),r=gh(e,n,r,o,void 0,c),o=ph(),e!==null&&!Re?(yh(e,n,c),bi(e,n,c)):(Ut&&o&&sh(n),n.flags|=1,Ve(e,n,r,c),n.child)}function Hg(e,n,r,o,c,f){return ms(n),n.updateQueue=null,r=Ym(n,o,r,c),Qm(e),o=ph(),e!==null&&!Re?(yh(e,n,f),bi(e,n,f)):(Ut&&o&&sh(n),n.flags|=1,Ve(e,n,r,f),n.child)}function qg(e,n,r,o,c){if(ms(n),n.stateNode===null){var f=na,p=r.contextType;typeof p=="object"&&p!==null&&(f=Be(p)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fh(n),p=r.contextType,f.context=typeof p=="object"&&p!==null?Be(p):na,f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Oh(n,r,p,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Nh.enqueueReplaceState(f,f.state,null),Oo(n,o,f,c),Do(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,w=fs(r,E);f.props=w;var M=f.context,H=r.contextType;p=na,typeof H=="object"&&H!==null&&(p=Be(H));var K=r.getDerivedStateFromProps;H=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,H||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||M!==p)&&Dg(n,f,o,p),gr=!1;var P=n.memoizedState;f.state=P,Oo(n,o,f,c),Do(),M=n.memoizedState,E||P!==M||gr?(typeof K=="function"&&(Oh(n,r,K,o),M=n.memoizedState),(w=gr||Ig(n,r,w,o,P,M,p))?(H||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=M),f.props=o,f.state=M,f.context=p,o=w):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Kh(e,n),p=n.memoizedProps,H=fs(r,p),f.props=H,K=n.pendingProps,P=f.context,M=r.contextType,w=na,typeof M=="object"&&M!==null&&(w=Be(M)),E=r.getDerivedStateFromProps,(M=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==K||P!==w)&&Dg(n,f,o,w),gr=!1,P=n.memoizedState,f.state=P,Oo(n,o,f,c),Do();var j=n.memoizedState;p!==K||P!==j||gr||e!==null&&e.dependencies!==null&&gu(e.dependencies)?(typeof E=="function"&&(Oh(n,r,E,o),j=n.memoizedState),(H=gr||Ig(n,r,H,o,P,j,w)||e!==null&&e.dependencies!==null&&gu(e.dependencies))?(M||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,j,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,j,w)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=w,o=H):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Ro(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=os(n,e.child,null,c),n.child=os(n,null,r,c)):Ve(e,n,r,c),n.memoizedState=f.state,e=n.child):e=bi(e,n,c),e}function Gg(e,n,r,o){return go(),n.flags|=256,Ve(e,n,r,o),n.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function xh(e){return{baseLanes:e,cachePool:Km()}}function Uh(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=On),e}function Fg(e,n,r){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),p&&(c=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ut){if(c?cr(n):hr(),Ut){var E=ke,w;if(w=E){t:{for(w=E,E=Jn;w.nodeType!==8;){if(!E){E=null;break t}if(w=Pn(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(n.memoizedState={dehydrated:E,treeContext:rs!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912},w=Dn(18,null,null,0),w.stateNode=E,w.return=n,n.child=w,Ze=n,ke=null,w=!0):w=!1}w||as(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ai(n)}return E=o.children,o=o.fallback,c?(hr(),c=n.mode,E=Ph({mode:"hidden",children:E},c),o=ps(o,c,r,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=xh(r),c.childLanes=Uh(e,p,r),n.memoizedState=Vh,o):(cr(n),Lh(n,E))}if(w=e.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)n.flags&256?(cr(n),n.flags&=-257,n=zh(e,n,r)):n.memoizedState!==null?(hr(),n.child=e.child,n.flags|=128,n=null):(hr(),c=o.fallback,E=n.mode,o=Ph({mode:"visible",children:o.children},E),c=ps(c,E,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,os(n,e.child,null,r),o=n.child,o.memoizedState=xh(r),o.childLanes=Uh(e,p,r),n.memoizedState=Vh,n=c);else if(cr(n),E.data==="$!"){if(p=E.nextSibling&&E.nextSibling.dataset,p)var M=p.dgst;p=M,o=Error(a(419)),o.stack="",o.digest=p,po({value:o,source:null,stack:null}),n=zh(e,n,r)}else if(Re||Co(e,n,r,!1),p=(r&e.childLanes)!==0,Re||p){if(p=Qt,p!==null){if(o=r&-r,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(p.suspendedLanes|r))!==0?0:o,o!==0&&o!==w.retryLane)throw w.retryLane=o,ur(e,o),We(p,e,o),Ug}E.data==="$?"||mf(),n=zh(e,n,r)}else E.data==="$?"?(n.flags|=128,n.child=e.child,n=zE.bind(null,e),E._reactRetry=n,n=null):(e=w.treeContext,ke=Pn(E.nextSibling),Ze=n,Ut=!0,Un=null,Jn=!1,e!==null&&(bn[wn++]=Ei,bn[wn++]=Ti,bn[wn++]=rs,Ei=e.id,Ti=e.overflow,rs=n),n=Lh(n,o.children),n.flags|=4096);return n}return c?(hr(),c=o.fallback,E=n.mode,w=e.child,M=w.sibling,o=Tr(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&31457280,M!==null?c=Tr(M,c):(c=ps(c,E,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=e.child.memoizedState,E===null?E=xh(r):(w=E.cachePool,w!==null?(M=Ee._currentValue,w=w.parent!==M?{parent:M,pool:M}:w):w=Km(),E={baseLanes:E.baseLanes|r,cachePool:w}),c.memoizedState=E,c.childLanes=Uh(e,p,r),n.memoizedState=Vh,o):(cr(n),r=e.child,e=r.sibling,r=Tr(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=r,n.memoizedState=null,r)}function Lh(e,n){return n=Ph({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ph(e,n){return yp(e,n,0,null)}function zh(e,n,r){return os(n,e.child,null,r),e=Lh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Kg(e,n,r){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),qh(e.return,n,r)}function jh(e,n,r,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=c)}function Qg(e,n,r){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Ve(e,n,o.children,r),o=_e.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,r,n);else if(e.tag===19)Kg(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(jt(_e,o),c){case"forwards":for(r=n.child,c=null;r!==null;)e=r.alternate,e!==null&&iu(e)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),jh(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&iu(e)===null){n.child=c;break}e=c.sibling,c.sibling=r,r=c,c=e}jh(n,!0,r,null,f);break;case"together":jh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bi(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Ar|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(Co(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=Tr(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=Tr(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function Bh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gu(e)))}function wE(e,n,r){switch(n.tag){case 3:Qi(n,n.stateNode.containerInfo),mr(n,Ee,e.memoizedState.cache),go();break;case 27:case 5:Ga(n);break;case 4:Qi(n,n.stateNode.containerInfo);break;case 10:mr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(cr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Fg(e,n,r):(cr(n),e=bi(e,n,r),e!==null?e.sibling:null);cr(n);break;case 19:var c=(e.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Co(e,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Qg(e,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),jt(_e,_e.current),o)break;return null;case 22:case 23:return n.lanes=0,jg(e,n,r);case 24:mr(n,Ee,e.memoizedState.cache)}return bi(e,n,r)}function Yg(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Re=!0;else{if(!Bh(e,r)&&(n.flags&128)===0)return Re=!1,wE(e,n,r);Re=(e.flags&131072)!==0}else Re=!1,Ut&&(n.flags&1048576)!==0&&Mm(n,Wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")ef(o)?(e=fs(o,e),n.tag=1,n=qg(null,n,o,e,r)):(n.tag=0,n=kh(null,n,o,e,r));else{if(o!=null){if(c=o.$$typeof,c===X){n.tag=11,n=Lg(null,n,o,e,r);break t}else if(c===At){n.tag=14,n=Pg(null,n,o,e,r);break t}}throw n=R(o)||o,Error(a(306,n,""))}}return n;case 0:return kh(e,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=fs(o,n.pendingProps),qg(e,n,o,c,r);case 3:t:{if(Qi(n,n.stateNode.containerInfo),e===null)throw Error(a(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Kh(e,n),Oo(n,f,null,r);var p=n.memoizedState;if(f=p.cache,mr(n,Ee,f),f!==c.cache&&Gh(n,[Ee],r,!0),Do(),f=p.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Gg(e,n,f,r);break t}else if(f!==o){o=Sn(Error(a(424)),n),po(o),n=Gg(e,n,f,r);break t}else for(ke=Pn(n.stateNode.containerInfo.firstChild),Ze=n,Ut=!0,Un=null,Jn=!0,r=Bm(n,null,f,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(go(),f===o){n=bi(e,n,r);break t}Ve(e,n,f,r)}n=n.child}return n;case 26:return Ro(e,n),e===null?(r=Zp(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ut||(r=n.type,e=n.pendingProps,o=Nu(gn.current).createElement(r),o[Se]=n,o[pe]=e,xe(o,r,e),Zt(o),n.stateNode=o):n.memoizedState=Zp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ga(n),e===null&&Ut&&(o=n.stateNode=Yp(n.type,n.pendingProps,gn.current),Ze=n,Jn=!0,ke=Pn(o.firstChild)),o=n.pendingProps.children,e!==null||Ut?Ve(e,n,o,r):n.child=os(n,null,o,r),Ro(e,n),n.child;case 5:return e===null&&Ut&&((c=o=ke)&&(o=eT(o,n.type,n.pendingProps,Jn),o!==null?(n.stateNode=o,Ze=n,ke=Pn(o.firstChild),Jn=!1,c=!0):c=!1),c||as(n)),Ga(n),c=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,o=f.children,If(c,f)?o=null:p!==null&&If(c,p)&&(n.flags|=32),n.memoizedState!==null&&(c=gh(e,n,vE,null,null,r),Fo._currentValue=c),Ro(e,n),Ve(e,n,o,r),n.child;case 6:return e===null&&Ut&&((e=r=ke)&&(r=nT(r,n.pendingProps,Jn),r!==null?(n.stateNode=r,Ze=n,ke=null,e=!0):e=!1),e||as(n)),null;case 13:return Fg(e,n,r);case 4:return Qi(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=os(n,null,o,r):Ve(e,n,o,r),n.child;case 11:return Lg(e,n,n.type,n.pendingProps,r);case 7:return Ve(e,n,n.pendingProps,r),n.child;case 8:return Ve(e,n,n.pendingProps.children,r),n.child;case 12:return Ve(e,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,mr(n,n.type,o.value),Ve(e,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,ms(n),c=Be(c),o=o(c),n.flags|=1,Ve(e,n,o,r),n.child;case 14:return Pg(e,n,n.type,n.pendingProps,r);case 15:return zg(e,n,n.type,n.pendingProps,r);case 19:return Qg(e,n,r);case 22:return jg(e,n,r);case 24:return ms(n),o=Be(Ee),e===null?(c=dh(),c===null&&(c=Qt,f=hh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:o,cache:c},Fh(n),mr(n,Ee,c)):((e.lanes&r)!==0&&(Kh(e,n),Oo(n,null,null,r),Do()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),mr(n,Ee,o)):(o=f.cache,mr(n,Ee,o),o!==c.cache&&Gh(n,[Ee],r,!0))),Ve(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var Hh=Vt(null),ds=null,wi=null;function mr(e,n,r){jt(Hh,n._currentValue),n._currentValue=r}function Ri(e){e._currentValue=Hh.current,te(Hh)}function qh(e,n,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===r)break;e=e.return}}function Gh(e,n,r,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var p=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var w=0;w<n.length;w++)if(E.context===n[w]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),qh(f.return,r,e),o||(p=null);break t}f=E.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(a(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),qh(p,r,e),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===e){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function Co(e,n,r,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var E=c.type;un(c.pendingProps.value,p.value)||(e!==null?e.push(E):e=[E])}}else if(c===Ki.current){if(p=c.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}c=c.return}e!==null&&Gh(n,e,r,o),n.flags|=262144}function gu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ms(e){ds=e,wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return Xg(ds,e)}function pu(e,n){return ds===null&&ms(e),Xg(e,n)}function Xg(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},wi===null){if(e===null)throw Error(a(308));wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else wi=wi.next=n;return r}var gr=!1;function Fh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function pr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yr(e,n,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Jt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=$l(e),Om(e,null,r),n}return Xl(e,o,n,r),$l(e)}function Io(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,r|=o,n.lanes=r,Ji(e,r)}}function Qh(e,n){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=p:f=f.next=p,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Yh=!1;function Do(){if(Yh){var e=la;if(e!==null)throw e}}function Oo(e,n,r,o){Yh=!1;var c=e.updateQueue;gr=!1;var f=c.firstBaseUpdate,p=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var w=E,M=w.next;w.next=null,p===null?f=M:p.next=M,p=w;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==p&&(E===null?H.firstBaseUpdate=M:E.next=M,H.lastBaseUpdate=w))}if(f!==null){var K=c.baseState;p=0,H=M=w=null,E=f;do{var P=E.lane&-536870913,j=P!==E.lane;if(j?(Mt&P)===P:(o&P)===P){P!==0&&P===oa&&(Yh=!0),H!==null&&(H=H.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ot=e,gt=E;P=n;var re=r;switch(gt.tag){case 1:if(ot=gt.payload,typeof ot=="function"){K=ot.call(re,K,P);break t}K=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=gt.payload,P=typeof ot=="function"?ot.call(re,K,P):ot,P==null)break t;K=C({},K,P);break t;case 2:gr=!0}}P=E.callback,P!==null&&(e.flags|=64,j&&(e.flags|=8192),j=c.callbacks,j===null?c.callbacks=[P]:j.push(P))}else j={lane:P,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(M=H=j,w=K):H=H.next=j,p|=P;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;j=E,E=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);H===null&&(w=K),c.baseState=w,c.firstBaseUpdate=M,c.lastBaseUpdate=H,f===null&&(c.shared.lanes=0),Ar|=p,e.lanes=p,e.memoizedState=K}}function $g(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function Zg(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)$g(r[e],n)}function No(e,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&e)===e){o=void 0;var f=r.create,p=r.inst;o=f(),p.destroy=o}r=r.next}while(r!==c)}}catch(E){Kt(n,n.return,E)}}function vr(e,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var p=o.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,c=n;var w=r;try{E()}catch(M){Kt(c,w,M)}}}o=o.next}while(o!==f)}}catch(M){Kt(n,n.return,M)}}function Wg(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{Zg(n,r)}catch(o){Kt(e,e.return,o)}}}function Jg(e,n,r){r.props=fs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(o){Kt(e,n,o)}}function gs(e,n){try{var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(f){Kt(e,n,f)}}function cn(e,n){var r=e.ref,o=e.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Kt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Kt(e,n,c)}else r.current=null}function tp(e){var n=e.type,r=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Kt(e,e.return,c)}}function ep(e,n,r){try{var o=e.stateNode;$E(o,e.type,r,n),o[pe]=n}catch(c){Kt(e,e.return,c)}}function np(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||np(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $h(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(e,n):r.insertBefore(e,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(e,r)):(n=r,n.appendChild(e)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ou));else if(o!==4&&o!==27&&(e=e.child,e!==null))for($h(e,n,r),e=e.sibling;e!==null;)$h(e,n,r),e=e.sibling}function yu(e,n,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(yu(e,n,r),e=e.sibling;e!==null;)yu(e,n,r),e=e.sibling}var Ci=!1,ne=!1,Zh=!1,ip=typeof WeakSet=="function"?WeakSet:Set,Ce=null,rp=!1;function RE(e,n){if(e=e.containerInfo,Rf=Lu,e=Tm(e),Jc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break t}var p=0,E=-1,w=-1,M=0,H=0,K=e,P=null;e:for(;;){for(var j;K!==r||c!==0&&K.nodeType!==3||(E=p+c),K!==f||o!==0&&K.nodeType!==3||(w=p+o),K.nodeType===3&&(p+=K.nodeValue.length),(j=K.firstChild)!==null;)P=K,K=j;for(;;){if(K===e)break e;if(P===r&&++M===c&&(E=p),P===f&&++H===o&&(w=p),(j=K.nextSibling)!==null)break;K=P,P=K.parentNode}K=j}r=E===-1||w===-1?null:{start:E,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(Cf={focusedElem:e,selectionRange:r},Lu=!1,Ce=n;Ce!==null;)if(n=Ce,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ce=e;else for(;Ce!==null;){switch(n=Ce,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var ot=fs(r.type,c,r.elementType===r.type);e=o.getSnapshotBeforeUpdate(ot,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(gt){Kt(r,r.return,gt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)Nf(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Nf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ce=e;break}Ce=n.return}return ot=rp,rp=!1,ot}function sp(e,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Di(e,r),o&4&&No(5,r);break;case 1:if(Di(e,r),o&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(E){Kt(r,r.return,E)}else{var c=fs(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Kt(r,r.return,E)}}o&64&&Wg(r),o&512&&gs(r,r.return);break;case 3:if(Di(e,r),o&64&&(o=r.updateQueue,o!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{Zg(o,e)}catch(E){Kt(r,r.return,E)}}break;case 26:Di(e,r),o&512&&gs(r,r.return);break;case 27:case 5:Di(e,r),n===null&&o&4&&tp(r),o&512&&gs(r,r.return);break;case 12:Di(e,r);break;case 13:Di(e,r),o&4&&lp(e,r);break;case 22:if(c=r.memoizedState!==null||Ci,!c){n=n!==null&&n.memoizedState!==null||ne;var f=Ci,p=ne;Ci=c,(ne=n)&&!p?_r(e,r,(r.subtreeFlags&8772)!==0):Di(e,r),Ci=f,ne=p}o&512&&(r.memoizedProps.mode==="manual"?gs(r,r.return):cn(r,r.return));break;default:Di(e,r)}}function ap(e){var n=e.alternate;n!==null&&(e.alternate=null,ap(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var fe=null,hn=!1;function Ii(e,n,r){for(r=r.child;r!==null;)op(e,n,r),r=r.sibling}function op(e,n,r){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Yi,r)}catch{}switch(r.tag){case 26:ne||cn(r,n),Ii(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ne||cn(r,n);var o=fe,c=hn;for(fe=r.stateNode,Ii(e,n,r),r=r.stateNode,n=r.attributes;n.length;)r.removeAttributeNode(n[0]);Fr(r),fe=o,hn=c;break;case 5:ne||cn(r,n);case 6:c=fe;var f=hn;if(fe=null,Ii(e,n,r),fe=c,hn=f,fe!==null)if(hn)try{e=fe,o=r.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(p){Kt(r,n,p)}else try{fe.removeChild(r.stateNode)}catch(p){Kt(r,n,p)}break;case 18:fe!==null&&(hn?(n=fe,r=r.stateNode,n.nodeType===8?Of(n.parentNode,r):n.nodeType===1&&Of(n,r),Xo(n)):Of(fe,r.stateNode));break;case 4:o=fe,c=hn,fe=r.stateNode.containerInfo,hn=!0,Ii(e,n,r),fe=o,hn=c;break;case 0:case 11:case 14:case 15:ne||vr(2,r,n),ne||vr(4,r,n),Ii(e,n,r);break;case 1:ne||(cn(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Jg(r,n,o)),Ii(e,n,r);break;case 21:Ii(e,n,r);break;case 22:ne||cn(r,n),ne=(o=ne)||r.memoizedState!==null,Ii(e,n,r),ne=o;break;default:Ii(e,n,r)}}function lp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xo(e)}catch(r){Kt(n,n.return,r)}}function CE(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ip),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ip),n;default:throw Error(a(435,e.tag))}}function Wh(e,n){var r=CE(e);n.forEach(function(o){var c=jE.bind(null,e,o);r.has(o)||(r.add(o),o.then(c,c))})}function Cn(e,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=e,p=n,E=p;t:for(;E!==null;){switch(E.tag){case 27:case 5:fe=E.stateNode,hn=!1;break t;case 3:fe=E.stateNode.containerInfo,hn=!0;break t;case 4:fe=E.stateNode.containerInfo,hn=!0;break t}E=E.return}if(fe===null)throw Error(a(160));op(f,p,c),fe=null,hn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)up(n,e),n=n.sibling}var Ln=null;function up(e,n){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Cn(n,e),In(e),o&4&&(vr(3,e,e.return),No(3,e),vr(5,e,e.return));break;case 1:Cn(n,e),In(e),o&512&&(ne||r===null||cn(r,r.return)),o&64&&Ci&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=Ln;if(Cn(n,e),In(e),o&512&&(ne||r===null||cn(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=e.memoizedState,r===null)if(o===null)if(e.stateNode===null){t:{o=e.type,r=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[Se]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),xe(f,o,r),f[Se]=e,Zt(f),o=f;break t;case"link":var p=ty("link","href",c).get(o+(r.href||""));if(p){for(var E=0;E<p.length;E++)if(f=p[E],f.getAttribute("href")===(r.href==null?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(E,1);break e}}f=c.createElement(o),xe(f,o,r),c.head.appendChild(f);break;case"meta":if(p=ty("meta","content",c).get(o+(r.content||""))){for(E=0;E<p.length;E++)if(f=p[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(E,1);break e}}f=c.createElement(o),xe(f,o,r),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[Se]=e,Zt(f),o=f}e.stateNode=o}else ey(c,e.type,e.stateNode);else e.stateNode=Jp(c,o,e.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?ey(c,e.type,e.stateNode):Jp(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ep(e,e.memoizedProps,r.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var w=c.firstChild;w;){var M=w.nextSibling,H=w.nodeName;w[er]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&w.rel.toLowerCase()==="stylesheet"||c.removeChild(w),w=M}for(var K=e.type,P=c.attributes;P.length;)c.removeAttributeNode(P[0]);xe(c,K,f),c[Se]=e,c[pe]=f}catch(ot){Kt(e,e.return,ot)}}case 5:if(Cn(n,e),In(e),o&512&&(ne||r===null||cn(r,r.return)),e.flags&32){c=e.stateNode;try{vn(c,"")}catch(ot){Kt(e,e.return,ot)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,ep(e,c,r!==null?r.memoizedProps:c)),o&1024&&(Zh=!0);break;case 6:if(Cn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,r=e.stateNode;try{r.nodeValue=o}catch(ot){Kt(e,e.return,ot)}}break;case 3:if(Vu=null,c=Ln,Ln=Mu(n.containerInfo),Cn(n,e),Ln=c,In(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Xo(n.containerInfo)}catch(ot){Kt(e,e.return,ot)}Zh&&(Zh=!1,cp(e));break;case 4:o=Ln,Ln=Mu(e.stateNode.containerInfo),Cn(n,e),In(e),Ln=o;break;case 12:Cn(n,e),In(e);break;case 13:Cn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(lf=tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wh(e,o)));break;case 22:if(o&512&&(ne||r===null||cn(r,r.return)),w=e.memoizedState!==null,M=r!==null&&r.memoizedState!==null,H=Ci,K=ne,Ci=H||w,ne=K||M,Cn(n,e),ne=K,Ci=H,In(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=w?n._visibility&-2:n._visibility|1,w&&(n=Ci||ne,r===null||M||n||fa(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(r=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(r===null){M=r=n;try{if(c=M.stateNode,w)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=M.stateNode,E=M.memoizedProps.style;var j=E!=null&&E.hasOwnProperty("display")?E.display:null;p.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ot){Kt(M,M.return,ot)}}}else if(n.tag===6){if(r===null){M=n;try{M.stateNode.nodeValue=w?"":M.memoizedProps}catch(ot){Kt(M,M.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Wh(e,r))));break;case 19:Cn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Wh(e,o)));break;case 21:break;default:Cn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var r=e.return;r!==null;){if(np(r)){var o=r;break t}r=r.return}throw Error(a(160))}switch(o.tag){case 27:var c=o.stateNode,f=Xh(e);yu(e,f,c);break;case 5:var p=o.stateNode;o.flags&32&&(vn(p,""),o.flags&=-33);var E=Xh(e);yu(e,E,p);break;case 3:case 4:var w=o.stateNode.containerInfo,M=Xh(e);$h(e,M,w);break;default:throw Error(a(161))}}}catch(H){Kt(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;cp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Di(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)sp(e,n.alternate,n),n=n.sibling}function fa(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:vr(4,n,n.return),fa(n);break;case 1:cn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Jg(n,n.return,r),fa(n);break;case 26:case 27:case 5:cn(n,n.return),fa(n);break;case 22:cn(n,n.return),n.memoizedState===null&&fa(n);break;default:fa(n)}e=e.sibling}}function _r(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:_r(c,f,r),No(4,f);break;case 1:if(_r(c,f,r),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(M){Kt(o,o.return,M)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)$g(w[c],E)}catch(M){Kt(o,o.return,M)}}r&&p&64&&Wg(f),gs(f,f.return);break;case 26:case 27:case 5:_r(c,f,r),r&&o===null&&p&4&&tp(f),gs(f,f.return);break;case 12:_r(c,f,r);break;case 13:_r(c,f,r),r&&p&4&&lp(c,f);break;case 22:f.memoizedState===null&&_r(c,f,r),gs(f,f.return);break;default:_r(c,f,r)}n=n.sibling}}function Jh(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&To(r))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e))}function Er(e,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hp(e,n,r,o),n=n.sibling}function hp(e,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Er(e,n,r,o),c&2048&&No(9,n);break;case 3:Er(e,n,r,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&To(e)));break;case 12:if(c&2048){Er(e,n,r,o),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,E=f.onPostCommit;typeof E=="function"&&E(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Kt(n,n.return,w)}}else Er(e,n,r,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Er(e,n,r,o):Mo(e,n):f._visibility&4?Er(e,n,r,o):(f._visibility|=4,da(e,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&Jh(n.alternate,n);break;case 24:Er(e,n,r,o),c&2048&&tf(n.alternate,n);break;default:Er(e,n,r,o)}}function da(e,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,E=r,w=o,M=p.flags;switch(p.tag){case 0:case 11:case 15:da(f,p,E,w,c),No(8,p);break;case 23:break;case 22:var H=p.stateNode;p.memoizedState!==null?H._visibility&4?da(f,p,E,w,c):Mo(f,p):(H._visibility|=4,da(f,p,E,w,c)),c&&M&2048&&Jh(p.alternate,p);break;case 24:da(f,p,E,w,c),c&&M&2048&&tf(p.alternate,p);break;default:da(f,p,E,w,c)}n=n.sibling}}function Mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,o=n,c=o.flags;switch(o.tag){case 22:Mo(r,o),c&2048&&Jh(o.alternate,o);break;case 24:Mo(r,o),c&2048&&tf(o.alternate,o);break;default:Mo(r,o)}n=n.sibling}}var ko=8192;function ma(e){if(e.subtreeFlags&ko)for(e=e.child;e!==null;)fp(e),e=e.sibling}function fp(e){switch(e.tag){case 26:ma(e),e.flags&ko&&e.memoizedState!==null&&gT(Ln,e.memoizedState,e.memoizedProps);break;case 5:ma(e);break;case 3:case 4:var n=Ln;Ln=Mu(e.stateNode.containerInfo),ma(e),Ln=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ko,ko=16777216,ma(e),ko=n):ma(e));break;default:ma(e)}}function dp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Ce=o,gp(o,e)}dp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mp(e),e=e.sibling}function mp(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&vr(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,vu(e)):Vo(e);break;default:Vo(e)}}function vu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Ce=o,gp(o,e)}dp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:vr(8,n,n.return),vu(n);break;case 22:r=n.stateNode,r._visibility&4&&(r._visibility&=-5,vu(n));break;default:vu(n)}e=e.sibling}}function gp(e,n){for(;Ce!==null;){var r=Ce;switch(r.tag){case 0:case 11:case 15:vr(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Ce=o;else t:for(r=e;Ce!==null;){o=Ce;var c=o.sibling,f=o.return;if(ap(o),o===r){Ce=null;break t}if(c!==null){c.return=f,Ce=c;break t}Ce=f}}}function IE(e,n,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,n,r,o){return new IE(e,n,r,o)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tr(e,n){var r=e.alternate;return r===null?(r=Dn(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&31457280,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function pp(e,n){e.flags&=31457282;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _u(e,n,r,o,c,f){var p=0;if(o=e,typeof e=="function")ef(e)&&(p=1);else if(typeof e=="string")p=dT(e,r,Qe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case v:return ps(r.children,c,f,n);case _:p=8,c|=24;break;case I:return e=Dn(12,r,n,c|2),e.elementType=I,e.lanes=f,e;case lt:return e=Dn(13,r,n,c),e.elementType=lt,e.lanes=f,e;case et:return e=Dn(19,r,n,c),e.elementType=et,e.lanes=f,e;case yt:return yp(r,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case V:case $:p=10;break t;case B:p=9;break t;case X:p=11;break t;case At:p=14;break t;case ft:p=16,o=null;break t}p=29,r=Error(a(130,e===null?"null":typeof e,"")),o=null}return n=Dn(p,r,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function ps(e,n,r,o){return e=Dn(7,e,o,n),e.lanes=r,e}function yp(e,n,r,o){e=Dn(22,e,o,n),e.elementType=yt,e.lanes=r;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)===0){var p=ur(f,2);p!==null&&(c._pendingVisibility|=2,We(p,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)!==0){var p=ur(f,2);p!==null&&(c._pendingVisibility&=-3,We(p,f,2))}}};return e.stateNode=c,e}function nf(e,n,r){return e=Dn(6,e,null,n),e.lanes=r,e}function rf(e,n,r){return n=Dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Oi(e){e.flags|=4}function vp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ny(n)){if(n=Rn.current,n!==null&&((Mt&4194176)===Mt?ti!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==ti))throw vo=lh,xm;e.flags|=8192}}function Eu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Zi():536870912,e.lanes|=n,pa|=n)}function xo(e,n){if(!Ut)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(n)for(var c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=r,n}function DE(e,n,r){var o=n.pendingProps;switch(ah(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return r=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ri(Ee),ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mo(n)?Oi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Un!==null&&(ff(Un),Un=null))),Wt(n),null;case 26:return r=n.memoizedState,e===null?(Oi(n),r!==null?(Wt(n),vp(n,r)):(Wt(n),n.flags&=-16777217)):r?r!==e.memoizedState?(Oi(n),Wt(n),vp(n,r)):(Wt(n),n.flags&=-16777217):(e.memoizedProps!==o&&Oi(n),Wt(n),n.flags&=-16777217),null;case 27:xs(n),r=gn.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Wt(n),null}e=Qe.current,mo(n)?km(n):(e=Yp(c,o,r),n.stateNode=e,Oi(n))}return Wt(n),null;case 5:if(xs(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Wt(n),null}if(e=Qe.current,mo(n))km(n);else{switch(c=Nu(gn.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}e[Se]=n,e[pe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(xe(e,r,o),r){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Oi(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Oi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(e=gn.current,mo(n)){if(e=n.stateNode,r=n.memoizedProps,o=null,c=Ze,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Se]=n,e=!!(e.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||Hp(e.nodeValue,r)),e||as(n)}else e=Nu(e).createTextNode(o),e[Se]=n,n.stateNode=e}return Wt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=mo(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Se]=n}else go(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else Un!==null&&(ff(Un),Un=null),c=!0;if(!c)return n.flags&256?(Ai(n),n):(Ai(n),null)}if(Ai(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,e=e!==null&&e.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Eu(n,n.updateQueue),Wt(n),null;case 4:return ui(),e===null&&Sf(n.stateNode.containerInfo),Wt(n),null;case 10:return Ri(n.type),Wt(n),null;case 19:if(te(_e),c=n.memoizedState,c===null)return Wt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)xo(c,!1);else{if(ie!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=iu(e),f!==null){for(n.flags|=128,xo(c,!1),e=f.updateQueue,n.updateQueue=e,Eu(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)pp(r,e),r=r.sibling;return jt(_e,_e.current&1|2),n.child}e=e.sibling}c.tail!==null&&tn()>Tu&&(n.flags|=128,o=!0,xo(c,!1),n.lanes=4194304)}else{if(!o)if(e=iu(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Eu(n,e),xo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ut)return Wt(n),null}else 2*tn()-c.renderingStartTime>Tu&&r!==536870912&&(n.flags|=128,o=!0,xo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=tn(),n.sibling=null,e=_e.current,jt(_e,o?e&1|2:e&1),n):(Wt(n),null);case 22:case 23:return Ai(n),ch(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),r=n.updateQueue,r!==null&&Eu(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),e!==null&&te(ls),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ri(Ee),Wt(n),null;case 25:return null}throw Error(a(156,n.tag))}function OE(e,n){switch(ah(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ri(Ee),ui(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return xs(n),null;case 13:if(Ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));go()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return te(_e),null;case 4:return ui(),null;case 10:return Ri(n.type),null;case 22:case 23:return Ai(n),ch(),e!==null&&te(ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ri(Ee),null;case 25:return null;default:return null}}function _p(e,n){switch(ah(n),n.tag){case 3:Ri(Ee),ui();break;case 26:case 27:case 5:xs(n);break;case 4:ui();break;case 13:Ai(n);break;case 19:te(_e);break;case 10:Ri(n.type);break;case 22:case 23:Ai(n),ch(),e!==null&&te(ls);break;case 24:Ri(Ee)}}var NE={getCacheForType:function(e){var n=Be(Ee),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},ME=typeof WeakMap=="function"?WeakMap:Map,Jt=0,Qt=null,bt=null,Mt=0,Yt=0,fn=null,Ni=!1,ga=!1,sf=!1,Mi=0,ie=0,Ar=0,ys=0,af=0,On=0,pa=0,Uo=null,ni=null,of=!1,lf=0,Tu=1/0,Au=null,Sr=null,Su=!1,vs=null,Lo=0,uf=0,cf=null,Po=0,hf=null;function dn(){if((Jt&2)!==0&&Mt!==0)return Mt&-Mt;if(S.T!==null){var e=oa;return e!==0?e:_f()}return Dl()}function Ep(){On===0&&(On=(Mt&536870912)===0||Ut?Xa():536870912);var e=Rn.current;return e!==null&&(e.flags|=32),On}function We(e,n,r){(e===Qt&&Yt===2||e.cancelPendingCommit!==null)&&(ya(e,0),ki(e,Mt,On,!1)),oe(e,r),((Jt&2)===0||e!==Qt)&&(e===Qt&&((Jt&2)===0&&(ys|=r),ie===4&&ki(e,Mt,On,!1)),ii(e))}function Tp(e,n,r){if((Jt&6)!==0)throw Error(a(327));var o=!r&&(n&60)===0&&(n&e.expiredLanes)===0||$i(e,n),c=o?xE(e,n):gf(e,n,!0),f=o;do{if(c===0){ga&&!o&&ki(e,n,0,!1);break}else if(c===6)ki(e,n,0,!Ni);else{if(r=e.current.alternate,f&&!kE(r)){c=gf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var E=e;c=Uo;var w=E.current.memoizedState.isDehydrated;if(w&&(ya(E,p).flags|=256),p=gf(E,p,!1),p!==2){if(sf&&!w){E.errorRecoveryDisabledLanes|=f,ys|=f,c=4;break t}f=ni,ni=c,f!==null&&ff(f)}c=p}if(f=!1,c!==2)continue}}if(c===1){ya(e,0),ki(e,n,0,!0);break}t:{switch(o=e,c){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){ki(o,n,On,!Ni);break t}break;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if(o.finishedWork=r,o.finishedLanes=n,(n&62914560)===n&&(f=lf+300-tn(),10<f)){if(ki(o,n,On,!Ni),pn(o,0)!==0)break t;o.timeoutHandle=Fp(Ap.bind(null,o,r,ni,Au,of,n,On,ys,pa,Ni,2,-0,0),f);break t}Ap(o,r,ni,Au,of,n,On,ys,pa,Ni,0,-0,0)}}break}while(!0);ii(e)}function ff(e){ni===null?ni=e:ni.push.apply(ni,e)}function Ap(e,n,r,o,c,f,p,E,w,M,H,K,P){var j=n.subtreeFlags;if((j&8192||(j&16785408)===16785408)&&(Go={stylesheets:null,count:0,unsuspend:mT},fp(n),n=pT(),n!==null)){e.cancelPendingCommit=n(Dp.bind(null,e,r,o,c,p,E,w,1,K,P)),ki(e,f,p,!M);return}Dp(e,r,o,c,p,E,w,H,K,P)}function kE(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot;c=c.value;try{if(!un(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ki(e,n,r,o){n&=~af,n&=~ys,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Ye(c),p=1<<f;o[f]=-1,c&=~p}r!==0&&Wi(e,r,n)}function bu(){return(Jt&6)===0?(zo(0),!1):!0}function df(){if(bt!==null){if(Yt===0)var e=bt.return;else e=bt,wi=ds=null,vh(e),sa=null,_o=0,e=bt;for(;e!==null;)_p(e.alternate,e),e=e.return;bt=null}}function ya(e,n){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,WE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),df(),Qt=e,bt=r=Tr(e.current,null),Mt=n,Yt=0,fn=null,Ni=!1,ga=$i(e,n),sf=!1,pa=On=af=ys=Ar=ie=0,ni=Uo=null,of=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ye(o),f=1<<c;n|=e[c],o&=~f}return Mi=n,Yl(),r}function Sp(e,n){Tt=null,S.H=ei,n===yo?(n=Pm(),Yt=3):n===xm?(n=Pm(),Yt=4):Yt=n===Ug?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fn=n,bt===null&&(ie=1,mu(e,Sn(n,e.current)))}function bp(){var e=S.H;return S.H=ei,e===null?ei:e}function wp(){var e=S.A;return S.A=NE,e}function mf(){ie=4,Ni||(Mt&4194176)!==Mt&&Rn.current!==null||(ga=!0),(Ar&134217727)===0&&(ys&134217727)===0||Qt===null||ki(Qt,Mt,On,!1)}function gf(e,n,r){var o=Jt;Jt|=2;var c=bp(),f=wp();(Qt!==e||Mt!==n)&&(Au=null,ya(e,n)),n=!1;var p=ie;t:do try{if(Yt!==0&&bt!==null){var E=bt,w=fn;switch(Yt){case 8:df(),p=6;break t;case 3:case 2:case 6:Rn.current===null&&(n=!0);var M=Yt;if(Yt=0,fn=null,va(e,E,w,M),r&&ga){p=0;break t}break;default:M=Yt,Yt=0,fn=null,va(e,E,w,M)}}VE(),p=ie;break}catch(H){Sp(e,H)}while(!0);return n&&e.shellSuspendCounter++,wi=ds=null,Jt=o,S.H=c,S.A=f,bt===null&&(Qt=null,Mt=0,Yl()),p}function VE(){for(;bt!==null;)Rp(bt)}function xE(e,n){var r=Jt;Jt|=2;var o=bp(),c=wp();Qt!==e||Mt!==n?(Au=null,Tu=tn()+500,ya(e,n)):ga=$i(e,n);t:do try{if(Yt!==0&&bt!==null){n=bt;var f=fn;e:switch(Yt){case 1:Yt=0,fn=null,va(e,n,f,1);break;case 2:if(Um(f)){Yt=0,fn=null,Cp(n);break}n=function(){Yt===2&&Qt===e&&(Yt=7),ii(e)},f.then(n,n);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:Um(f)?(Yt=0,fn=null,Cp(n)):(Yt=0,fn=null,va(e,n,f,7));break;case 5:var p=null;switch(bt.tag){case 26:p=bt.memoizedState;case 5:case 27:var E=bt;if(!p||ny(p)){Yt=0,fn=null;var w=E.sibling;if(w!==null)bt=w;else{var M=E.return;M!==null?(bt=M,wu(M)):bt=null}break e}}Yt=0,fn=null,va(e,n,f,5);break;case 6:Yt=0,fn=null,va(e,n,f,6);break;case 8:df(),ie=6;break t;default:throw Error(a(462))}}UE();break}catch(H){Sp(e,H)}while(!0);return wi=ds=null,S.H=o,S.A=c,Jt=r,bt!==null?0:(Qt=null,Mt=0,Yl(),ie)}function UE(){for(;bt!==null&&!Hc();)Rp(bt)}function Rp(e){var n=Yg(e.alternate,e,Mi);e.memoizedProps=e.pendingProps,n===null?wu(e):bt=n}function Cp(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=Hg(r,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=Hg(r,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:vh(n);default:_p(r,n),n=bt=pp(n,Mi),n=Yg(r,n,Mi)}e.memoizedProps=e.pendingProps,n===null?wu(e):bt=n}function va(e,n,r,o){wi=ds=null,vh(n),sa=null,_o=0;var c=n.return;try{if(bE(e,c,n,r,Mt)){ie=1,mu(e,Sn(r,e.current)),bt=null;return}}catch(f){if(c!==null)throw bt=c,f;ie=1,mu(e,Sn(r,e.current)),bt=null;return}n.flags&32768?(Ut||o===1?e=!0:ga||(Mt&536870912)!==0?e=!1:(Ni=e=!0,(o===2||o===3||o===6)&&(o=Rn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ip(n,e)):wu(n)}function wu(e){var n=e;do{if((n.flags&32768)!==0){Ip(n,Ni);return}e=n.return;var r=DE(n.alternate,n,Mi);if(r!==null){bt=r;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=e}while(n!==null);ie===0&&(ie=5)}function Ip(e,n){do{var r=OE(e.alternate,e);if(r!==null){r.flags&=32767,bt=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){bt=e;return}bt=e=r}while(e!==null);ie=6,bt=null}function Dp(e,n,r,o,c,f,p,E,w,M){var H=S.T,K=tt.p;try{tt.p=2,S.T=null,LE(e,n,r,o,K,c,f,p,E,w,M)}finally{S.T=H,tt.p=K}}function LE(e,n,r,o,c,f,p,E){do _a();while(vs!==null);if((Jt&6)!==0)throw Error(a(327));var w=e.finishedWork;if(o=e.finishedLanes,w===null)return null;if(e.finishedWork=null,e.finishedLanes=0,w===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var M=w.lanes|w.childLanes;if(M|=ih,Cl(e,o,M,f,p,E),e===Qt&&(bt=Qt=null,Mt=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||Su||(Su=!0,uf=M,cf=r,BE(ci,function(){return _a(),null})),r=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||r?(r=S.T,S.T=null,f=tt.p,tt.p=2,p=Jt,Jt|=4,RE(e,w),up(w,e),oE(Cf,e.containerInfo),Lu=!!Rf,Cf=Rf=null,e.current=w,sp(e,w.alternate,w),Fa(),Jt=p,tt.p=f,S.T=r):e.current=w,Su?(Su=!1,vs=e,Lo=o):Op(e,M),M=e.pendingLanes,M===0&&(Sr=null),Qa(w.stateNode),ii(e),n!==null)for(c=e.onRecoverableError,w=0;w<n.length;w++)M=n[w],c(M.value,{componentStack:M.stack});return(Lo&3)!==0&&_a(),M=e.pendingLanes,(o&4194218)!==0&&(M&42)!==0?e===hf?Po++:(Po=0,hf=e):Po=0,zo(0),null}function Op(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,To(n)))}function _a(){if(vs!==null){var e=vs,n=uf;uf=0;var r=Il(Lo),o=S.T,c=tt.p;try{if(tt.p=32>r?32:r,S.T=null,vs===null)var f=!1;else{r=cf,cf=null;var p=vs,E=Lo;if(vs=null,Lo=0,(Jt&6)!==0)throw Error(a(331));var w=Jt;if(Jt|=4,mp(p.current),hp(p,p.current,E,r),Jt=w,zo(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Yi,p)}catch{}f=!0}return f}finally{tt.p=c,S.T=o,Op(e,n)}}return!1}function Np(e,n,r){n=Sn(r,n),n=Mh(e.stateNode,n,2),e=yr(e,n,2),e!==null&&(oe(e,2),ii(e))}function Kt(e,n,r){if(e.tag===3)Np(e,e,r);else for(;n!==null;){if(n.tag===3){Np(n,e,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sr===null||!Sr.has(o))){e=Sn(r,e),r=Vg(2),o=yr(n,r,2),o!==null&&(xg(r,o,n,e),oe(o,2),ii(o));break}}n=n.return}}function pf(e,n,r){var o=e.pingCache;if(o===null){o=e.pingCache=new ME;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(sf=!0,c.add(r),e=PE.bind(null,e,n,r),n.then(e,e))}function PE(e,n,r){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Qt===e&&(Mt&r)===r&&(ie===4||ie===3&&(Mt&62914560)===Mt&&300>tn()-lf?(Jt&2)===0&&ya(e,0):af|=r,pa===Mt&&(pa=0)),ii(e)}function Mp(e,n){n===0&&(n=Zi()),e=ur(e,n),e!==null&&(oe(e,n),ii(e))}function zE(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),Mp(e,r)}function jE(e,n){var r=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Mp(e,r)}function BE(e,n){return Hr(e,n)}var Ru=null,Ea=null,yf=!1,Cu=!1,vf=!1,_s=0;function ii(e){e!==Ea&&e.next===null&&(Ea===null?Ru=Ea=e:Ea=Ea.next=e),Cu=!0,yf||(yf=!0,qE(HE))}function zo(e,n){if(!vf&&Cu){vf=!0;do for(var r=!1,o=Ru;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var p=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Ye(42|e)+1)-1,f&=c&~(p&~E),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(r=!0,xp(o,f))}else f=Mt,f=pn(o,o===Qt?f:0),(f&3)===0||$i(o,f)||(r=!0,xp(o,f));o=o.next}while(r);vf=!1}}function HE(){Cu=yf=!1;var e=0;_s!==0&&(ZE()&&(e=_s),_s=0);for(var n=tn(),r=null,o=Ru;o!==null;){var c=o.next,f=kp(o,n);f===0?(o.next=null,r===null?Ru=c:r.next=c,c===null&&(Ea=r)):(r=o,(e!==0||(f&3)!==0)&&(Cu=!0)),o=c}zo(e)}function kp(e,n){for(var r=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Ye(f),E=1<<p,w=c[p];w===-1?((E&r)===0||(E&o)!==0)&&(c[p]=Ps(E,n)):w<=n&&(e.expiredLanes|=E),f&=~E}if(n=Qt,r=Mt,r=pn(e,e===n?r:0),o=e.callbackNode,r===0||e===n&&Yt===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ls(o),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||$i(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(o!==null&&Ls(o),Il(r)){case 2:case 8:r=Ae;break;case 32:r=ci;break;case 268435456:r=Ka;break;default:r=ci}return o=Vp.bind(null,e),r=Hr(r,o),e.callbackPriority=n,e.callbackNode=r,n}return o!==null&&o!==null&&Ls(o),e.callbackPriority=2,e.callbackNode=null,2}function Vp(e,n){var r=e.callbackNode;if(_a()&&e.callbackNode!==r)return null;var o=Mt;return o=pn(e,e===Qt?o:0),o===0?null:(Tp(e,o,n),kp(e,tn()),e.callbackNode!=null&&e.callbackNode===r?Vp.bind(null,e):null)}function xp(e,n){if(_a())return null;Tp(e,n,!0)}function qE(e){JE(function(){(Jt&6)!==0?Hr(ge,e):e()})}function _f(){return _s===0&&(_s=Xa()),_s}function Up(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function Lp(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function GE(e,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var f=Up((c[pe]||null).action),p=o.submitter;p&&(n=(n=p[pe]||null)?Up(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var E=new Fs("action","action",null,o,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var w=p?Lp(c,p):new FormData(c);Ch(r,{pending:!0,data:w,method:c.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=p?Lp(c,p):new FormData(c),Ch(r,{pending:!0,data:w,method:c.method,action:f},f,w))},currentTarget:c}]})}}for(var Ef=0;Ef<Dm.length;Ef++){var Tf=Dm[Ef],FE=Tf.toLowerCase(),KE=Tf[0].toUpperCase()+Tf.slice(1);xn(FE,"on"+KE)}xn(bm,"onAnimationEnd"),xn(wm,"onAnimationIteration"),xn(Rm,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(uE,"onTransitionRun"),xn(cE,"onTransitionStart"),xn(hE,"onTransitionCancel"),xn(Cm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),on("onBeforeInput",["compositionend","keypress","textInput","paste"]),on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Pp(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var p=o.length-1;0<=p;p--){var E=o[p],w=E.instance,M=E.currentTarget;if(E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=M;try{f(c)}catch(H){du(H)}c.currentTarget=null,f=w}else for(p=0;p<o.length;p++){if(E=o[p],w=E.instance,M=E.currentTarget,E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=M;try{f(c)}catch(H){du(H)}c.currentTarget=null,f=w}}}}function It(e,n){var r=n[Gr];r===void 0&&(r=n[Gr]=new Set);var o=e+"__bubble";r.has(o)||(zp(n,e,2,!1),r.add(o))}function Af(e,n,r){var o=0;n&&(o|=4),zp(r,e,o,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Iu]){e[Iu]=!0,Za.forEach(function(r){r!=="selectionchange"&&(QE.has(r)||Af(r,!1,e),Af(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,Af("selectionchange",!1,n))}}function zp(e,n,r,o){switch(ly(n)){case 2:var c=_T;break;case 8:c=ET;break;default:c=Uf}r=c.bind(null,n,r,e),c=void 0,!En||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,r,{capture:!0,passive:c}):e.addEventListener(n,r,!0):c!==void 0?e.addEventListener(n,r,{passive:c}):e.addEventListener(n,r,!1)}function bf(e,n,r,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var E=o.stateNode.containerInfo;if(E===c||E.nodeType===8&&E.parentNode===c)break;if(p===4)for(p=o.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;p=p.return}for(;E!==null;){if(p=Vn(E),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){o=f=p;continue t}E=E.parentNode}}o=o.return}kl(function(){var M=f,H=Gs(r),K=[];t:{var P=Im.get(e);if(P!==void 0){var j=Fs,ot=e;switch(e){case"keypress":if(Yn(r)===0)break t;case"keydown":case"keyup":j=Zs;break;case"focusin":ot="focus",j=Ys;break;case"focusout":ot="blur",j=Ys;break;case"beforeblur":case"afterblur":j=Ys;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Tn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Bl;break;case bm:case wm:case Rm:j=Xs;break;case Cm:j=ql;break;case"scroll":case"scrollend":j=Vl;break;case"wheel":j=Ws;break;case"copy":case"cut":case"paste":j=$s;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=uo;break;case"toggle":case"beforetoggle":j=Fl}var gt=(n&4)!==0,re=!gt&&(e==="scroll"||e==="scrollend"),x=gt?P!==null?P+"Capture":null:P;gt=[];for(var N=M,L;N!==null;){var q=N;if(L=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||L===null||x===null||(q=Xr(N,x),q!=null&&gt.push(Bo(N,q,L))),re)break;N=N.return}0<gt.length&&(P=new j(P,ot,null,r,H),K.push({event:P,listeners:gt}))}}if((n&7)===0){t:{if(P=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",P&&r!==_n&&(ot=r.relatedTarget||r.fromElement)&&(Vn(ot)||ot[hi]))break t;if((j||P)&&(P=H.window===H?H:(P=H.ownerDocument)?P.defaultView||P.parentWindow:window,j?(ot=r.relatedTarget||r.toElement,j=M,ot=ot?Vn(ot):null,ot!==null&&(re=it(ot),gt=ot.tag,ot!==re||gt!==5&&gt!==27&&gt!==6)&&(ot=null)):(j=null,ot=M),j!==ot)){if(gt=Tn,q="onMouseLeave",x="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(gt=uo,q="onPointerLeave",x="onPointerEnter",N="pointer"),re=j==null?P:nr(j),L=ot==null?P:nr(ot),P=new gt(q,N+"leave",j,r,H),P.target=re,P.relatedTarget=L,q=null,Vn(H)===M&&(gt=new gt(x,N+"enter",ot,r,H),gt.target=L,gt.relatedTarget=re,q=gt),re=q,j&&ot)e:{for(gt=j,x=ot,N=0,L=gt;L;L=Ta(L))N++;for(L=0,q=x;q;q=Ta(q))L++;for(;0<N-L;)gt=Ta(gt),N--;for(;0<L-N;)x=Ta(x),L--;for(;N--;){if(gt===x||x!==null&&gt===x.alternate)break e;gt=Ta(gt),x=Ta(x)}gt=null}else gt=null;j!==null&&jp(K,P,j,gt,!1),ot!==null&&re!==null&&jp(K,re,ot,gt,!0)}}t:{if(P=M?nr(M):window,j=P.nodeName&&P.nodeName.toLowerCase(),j==="select"||j==="input"&&P.type==="file")var rt=dm;else if(ve(P))if(mm)rt=sE;else{rt=iE;var St=nE}else j=P.nodeName,!j||j.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?M&&no(M.elementType)&&(rt=dm):rt=rE;if(rt&&(rt=rt(e,M))){_i(K,rt,r,H);break t}St&&St(e,P,M),e==="focusout"&&M&&P.type==="number"&&M.memoizedProps.value!=null&&qs(P,"number",P.value)}switch(St=M?nr(M):window,e){case"focusin":(ve(St)||St.contentEditable==="true")&&(Js=St,th=M,fo=null);break;case"focusout":fo=th=Js=null;break;case"mousedown":eh=!0;break;case"contextmenu":case"mouseup":case"dragend":eh=!1,Am(K,r,H);break;case"selectionchange":if(lE)break;case"keydown":case"keyup":Am(K,r,H)}var ct;if(Zn)t:{switch(e){case"compositionstart":var ht="onCompositionStart";break t;case"compositionend":ht="onCompositionEnd";break t;case"compositionupdate":ht="onCompositionUpdate";break t}ht=void 0}else Ot?z(e,r)&&(ht="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ht="onCompositionStart");ht&&(g&&r.locale!=="ko"&&(Ot||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Ot&&(ct=ro()):(Qn=H,lr="value"in Qn?Qn.value:Qn.textContent,Ot=!0)),St=Du(M,ht),0<St.length&&(ht=new oo(ht,e,null,r,H),K.push({event:ht,listeners:St}),ct?ht.data=ct:(ct=Z(r),ct!==null&&(ht.data=ct)))),(ct=m?ye(e,r):Nt(e,r))&&(ht=Du(M,"onBeforeInput"),0<ht.length&&(St=new oo("onBeforeInput","beforeinput",null,r,H),K.push({event:St,listeners:ht}),St.data=ct)),GE(K,e,M,r,H)}Pp(K,n)})}function Bo(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Du(e,n){for(var r=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xr(e,r),c!=null&&o.unshift(Bo(e,c,f)),c=Xr(e,n),c!=null&&o.push(Bo(e,c,f))),e=e.return}return o}function Ta(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jp(e,n,r,o,c){for(var f=n._reactName,p=[];r!==null&&r!==o;){var E=r,w=E.alternate,M=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||M===null||(w=M,c?(M=Xr(r,f),M!=null&&p.unshift(Bo(r,M,w))):c||(M=Xr(r,f),M!=null&&p.push(Bo(r,M,w)))),r=r.return}p.length!==0&&e.push({event:n,listeners:p})}var YE=/\r\n?/g,XE=/\u0000|\uFFFD/g;function Bp(e){return(typeof e=="string"?e:""+e).replace(YE,`
`).replace(XE,"")}function Hp(e,n){return n=Bp(n),Bp(e)===n}function Ou(){}function Ft(e,n,r,o,c,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&vn(e,""+o);break;case"className":sr(e,"class",o);break;case"tabIndex":sr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(e,r,o);break;case"style":Ml(e,o,f);break;case"data":if(n!=="object"){sr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Kn(""+o),e.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ft(e,n,"name",c.name,c,null),Ft(e,n,"formEncType",c.formEncType,c,null),Ft(e,n,"formMethod",c.formMethod,c,null),Ft(e,n,"formTarget",c.formTarget,c,null)):(Ft(e,n,"encType",c.encType,c,null),Ft(e,n,"method",c.method,c,null),Ft(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(r);break}o=Kn(""+o),e.setAttribute(r,o);break;case"onClick":o!=null&&(e.onclick=Ou);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}r=Kn(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""+o):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":o===!0?e.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(r,o):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(r,o):e.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(r):e.setAttribute(r,o);break;case"popover":It("beforetoggle",e),It("toggle",e),rr(e,"popover",o);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":rr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Qc.get(r)||r,rr(e,r,o))}}function wf(e,n,r,o,c,f){switch(r){case"style":Ml(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof o=="string"?vn(e,o):(typeof o=="number"||typeof o=="bigint")&&vn(e,""+o);break;case"onScroll":o!=null&&It("scroll",e);break;case"onScrollEnd":o!=null&&It("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ou);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bs.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=e[pe]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,o,c);break t}r in e?e[r]=o:o===!0?e.setAttribute(r,""):rr(e,r,o)}}}function xe(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",e),It("load",e);var o=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var p=r[f];if(p!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(e,n,f,p,r,null)}}c&&Ft(e,n,"srcSet",r.srcSet,r,null),o&&Ft(e,n,"src",r.src,r,null);return;case"input":It("invalid",e);var E=f=p=c=null,w=null,M=null;for(o in r)if(r.hasOwnProperty(o)){var H=r[o];if(H!=null)switch(o){case"name":c=H;break;case"type":p=H;break;case"checked":w=H;break;case"defaultChecked":M=H;break;case"value":f=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Ft(e,n,o,H,r,null)}}Qr(e,f,E,w,M,p,c,!1),Kr(e);return;case"select":It("invalid",e),o=p=f=null;for(c in r)if(r.hasOwnProperty(c)&&(E=r[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":p=E;break;case"multiple":o=E;default:Ft(e,n,c,E,r,null)}n=f,r=p,e.multiple=!!o,n!=null?xt(e,!!o,n,!1):r!=null&&xt(e,!!o,r,!0);return;case"textarea":It("invalid",e),f=c=o=null;for(p in r)if(r.hasOwnProperty(p)&&(E=r[p],E!=null))switch(p){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ft(e,n,p,E,r,null)}or(e,o,c,f),Kr(e);return;case"option":for(w in r)if(r.hasOwnProperty(w)&&(o=r[w],o!=null))switch(w){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ft(e,n,w,o,r,null)}return;case"dialog":It("cancel",e),It("close",e);break;case"iframe":case"object":It("load",e);break;case"video":case"audio":for(o=0;o<jo.length;o++)It(jo[o],e);break;case"image":It("error",e),It("load",e);break;case"details":It("toggle",e);break;case"embed":case"source":case"link":It("error",e),It("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(o=r[M],o!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(e,n,M,o,r,null)}return;default:if(no(n)){for(H in r)r.hasOwnProperty(H)&&(o=r[H],o!==void 0&&wf(e,n,H,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&Ft(e,n,E,o,r,null))}function $E(e,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,p=null,E=null,w=null,M=null,H=null;for(j in r){var K=r[j];if(r.hasOwnProperty(j)&&K!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=K;default:o.hasOwnProperty(j)||Ft(e,n,j,null,o,K)}}for(var P in o){var j=o[P];if(K=r[P],o.hasOwnProperty(P)&&(j!=null||K!=null))switch(P){case"type":f=j;break;case"name":c=j;break;case"checked":M=j;break;case"defaultChecked":H=j;break;case"value":p=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:j!==K&&Ft(e,n,P,j,o,K)}}ar(e,p,E,w,M,H,f,c);return;case"select":j=p=E=P=null;for(f in r)if(w=r[f],r.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":j=w;default:o.hasOwnProperty(f)||Ft(e,n,f,null,o,w)}for(c in o)if(f=o[c],w=r[c],o.hasOwnProperty(c)&&(f!=null||w!=null))switch(c){case"value":P=f;break;case"defaultValue":E=f;break;case"multiple":p=f;default:f!==w&&Ft(e,n,c,f,o,w)}n=E,r=p,o=j,P!=null?xt(e,!!r,P,!1):!!o!=!!r&&(n!=null?xt(e,!!r,n,!0):xt(e,!!r,r?[]:"",!1));return;case"textarea":j=P=null;for(E in r)if(c=r[E],r.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ft(e,n,E,null,o,c)}for(p in o)if(c=o[p],f=r[p],o.hasOwnProperty(p)&&(c!=null||f!=null))switch(p){case"value":P=c;break;case"defaultValue":j=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Ft(e,n,p,c,o,f)}Yr(e,P,j);return;case"option":for(var ot in r)if(P=r[ot],r.hasOwnProperty(ot)&&P!=null&&!o.hasOwnProperty(ot))switch(ot){case"selected":e.selected=!1;break;default:Ft(e,n,ot,null,o,P)}for(w in o)if(P=o[w],j=r[w],o.hasOwnProperty(w)&&P!==j&&(P!=null||j!=null))switch(w){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ft(e,n,w,P,o,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in r)P=r[gt],r.hasOwnProperty(gt)&&P!=null&&!o.hasOwnProperty(gt)&&Ft(e,n,gt,null,o,P);for(M in o)if(P=o[M],j=r[M],o.hasOwnProperty(M)&&P!==j&&(P!=null||j!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Ft(e,n,M,P,o,j)}return;default:if(no(n)){for(var re in r)P=r[re],r.hasOwnProperty(re)&&P!==void 0&&!o.hasOwnProperty(re)&&wf(e,n,re,void 0,o,P);for(H in o)P=o[H],j=r[H],!o.hasOwnProperty(H)||P===j||P===void 0&&j===void 0||wf(e,n,H,P,o,j);return}}for(var x in r)P=r[x],r.hasOwnProperty(x)&&P!=null&&!o.hasOwnProperty(x)&&Ft(e,n,x,null,o,P);for(K in o)P=o[K],j=r[K],!o.hasOwnProperty(K)||P===j||P==null&&j==null||Ft(e,n,K,P,o,j)}var Rf=null,Cf=null;function Nu(e){return e.nodeType===9?e:e.ownerDocument}function qp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Df=null;function ZE(){var e=window.event;return e&&e.type==="popstate"?e===Df?!1:(Df=e,!0):(Df=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,WE=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(e){return Kp.resolve(null).then(e).catch(tT)}:Fp;function tT(e){setTimeout(function(){throw e})}function Of(e,n){var r=n,o=0;do{var c=r.nextSibling;if(e.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(o===0){e.removeChild(c),Xo(n);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=c}while(r);Xo(n)}function Nf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Nf(r),Fr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function eT(e,n,r,o){for(;e.nodeType===1;){var c=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function nT(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Pn(e.nextSibling),e===null))return null;return e}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Qp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Yp(e,n,r){switch(n=Nu(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Nn=new Map,Xp=new Set;function Mu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Vi=tt.d;tt.d={f:iT,r:rT,D:sT,C:aT,L:oT,m:lT,X:cT,S:uT,M:hT};function iT(){var e=Vi.f(),n=bu();return e||n}function rT(e){var n=fi(e);n!==null&&n.tag===5&&n.type==="form"?Ag(n):Vi.r(e)}var Aa=typeof document>"u"?null:document;function $p(e,n,r){var o=Aa;if(o&&typeof n=="string"&&n){var c=ee(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Xp.has(c)||(Xp.add(c),e={rel:e,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),xe(n,"link",e),Zt(n),o.head.appendChild(n)))}}function sT(e){Vi.D(e),$p("dns-prefetch",e,null)}function aT(e,n){Vi.C(e,n),$p("preconnect",e,n)}function oT(e,n,r){Vi.L(e,n,r);var o=Aa;if(o&&e&&n){var c='link[rel="preload"][as="'+ee(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+ee(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+ee(r.imageSizes)+'"]')):c+='[href="'+ee(e)+'"]';var f=c;switch(n){case"style":f=Sa(e);break;case"script":f=ba(e)}Nn.has(f)||(e=C({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Nn.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(qo(f))||(n=o.createElement("link"),xe(n,"link",e),Zt(n),o.head.appendChild(n)))}}function lT(e,n){Vi.m(e,n);var r=Aa;if(r&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ee(o)+'"][href="'+ee(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ba(e)}if(!Nn.has(f)&&(e=C({rel:"modulepreload",href:e},n),Nn.set(f,e),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(qo(f)))return}o=r.createElement("link"),xe(o,"link",e),Zt(o),r.head.appendChild(o)}}}function uT(e,n,r){Vi.S(e,n,r);var o=Aa;if(o&&e){var c=ir(o).hoistableStyles,f=Sa(e);n=n||"default";var p=c.get(f);if(!p){var E={loading:0,preload:null};if(p=o.querySelector(Ho(f)))E.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Nn.get(f))&&Mf(e,r);var w=p=o.createElement("link");Zt(w),xe(w,"link",e),w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ku(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:E},c.set(f,p)}}}function cT(e,n){Vi.X(e,n);var r=Aa;if(r&&e){var o=ir(r).hoistableScripts,c=ba(e),f=o.get(c);f||(f=r.querySelector(qo(c)),f||(e=C({src:e,async:!0},n),(n=Nn.get(c))&&kf(e,n),f=r.createElement("script"),Zt(f),xe(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function hT(e,n){Vi.M(e,n);var r=Aa;if(r&&e){var o=ir(r).hoistableScripts,c=ba(e),f=o.get(c);f||(f=r.querySelector(qo(c)),f||(e=C({src:e,async:!0,type:"module"},n),(n=Nn.get(c))&&kf(e,n),f=r.createElement("script"),Zt(f),xe(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Zp(e,n,r,o){var c=(c=gn.current)?Mu(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Sa(r.href),r=ir(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Sa(r.href);var f=ir(c).hoistableStyles,p=f.get(e);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=c.querySelector(Ho(e)))&&!f._p&&(p.instance=f,p.state.loading=5),Nn.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Nn.set(e,r),f||fT(c,e,r,p.state))),n&&o===null)throw Error(a(528,""));return p}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ba(r),r=ir(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Sa(e){return'href="'+ee(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Wp(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function fT(e,n,r,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),xe(n,"link",r),Zt(n),e.head.appendChild(n))}function ba(e){return'[src="'+ee(e)+'"]'}function qo(e){return"script[async]"+e}function Jp(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ee(r.href)+'"]');if(o)return n.instance=o,Zt(o),o;var c=C({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Zt(o),xe(o,"style",c),ku(o,r.precedence,e),n.instance=o;case"stylesheet":c=Sa(r.href);var f=e.querySelector(Ho(c));if(f)return n.state.loading|=4,n.instance=f,Zt(f),f;o=Wp(r),(c=Nn.get(c))&&Mf(o,c),f=(e.ownerDocument||e).createElement("link"),Zt(f);var p=f;return p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),xe(f,"link",o),n.state.loading|=4,ku(f,r.precedence,e),n.instance=f;case"script":return f=ba(r.src),(c=e.querySelector(qo(f)))?(n.instance=c,Zt(c),c):(o=r,(c=Nn.get(f))&&(o=C({},r),kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Zt(c),xe(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ku(o,r.precedence,e));return n.instance}function ku(e,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,p=0;p<o.length;p++){var E=o[p];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function Mf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vu=null;function ty(e,n,r){if(Vu===null){var o=new Map,c=Vu=new Map;c.set(r,o)}else c=Vu,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(e))return o;for(o.set(e,null),r=r.getElementsByTagName(e),c=0;c<r.length;c++){var f=r[c];if(!(f[er]||f[Se]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var E=o.get(p);E?E.push(f):o.set(p,[f])}}return o}function ey(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function dT(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ny(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Go=null;function mT(){}function gT(e,n,r){if(Go===null)throw Error(a(475));var o=Go;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Sa(r.href),f=e.querySelector(Ho(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=xu.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,Zt(f);return}f=e.ownerDocument||e,r=Wp(r),(c=Nn.get(c))&&Mf(r,c),f=f.createElement("link"),Zt(f);var p=f;p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),xe(f,"link",r),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=xu.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function pT(){if(Go===null)throw Error(a(475));var e=Go;return e.stylesheets&&e.count===0&&Vf(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&Vf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)Vf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uu=null;function Vf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uu=new Map,n.forEach(yT,e),Uu=null,xu.call(e))}function yT(e,n){if(!(n.state.loading&4)){var r=Uu.get(e);if(r)var o=r.get(null);else{r=new Map,Uu.set(e,r);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var p=c[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),o=p)}o&&r.set(null,o)}c=n.instance,p=c.getAttribute("data-precedence"),f=r.get(p)||o,f===o&&r.set(null,c),r.set(p,c),this.count++,o=xu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:$,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function vT(e,n,r,o,c,f,p,E){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.hiddenUpdates=zs(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function iy(e,n,r,o,c,f,p,E,w,M,H,K){return e=new vT(e,n,r,p,E,w,M,K),n=1,f===!0&&(n|=24),f=Dn(3,null,null,n),e.current=f,f.stateNode=e,n=hh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Fh(f),e}function ry(e){return e?(e=na,e):na}function sy(e,n,r,o,c,f){c=ry(c),o.context===null?o.context=c:o.pendingContext=c,o=pr(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=yr(e,o,n),r!==null&&(We(r,e,n),Io(r,e,n))}function ay(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function xf(e,n){ay(e,n),(e=e.alternate)&&ay(e,n)}function oy(e){if(e.tag===13){var n=ur(e,67108864);n!==null&&We(n,e,67108864),xf(e,67108864)}}var Lu=!0;function _T(e,n,r,o){var c=S.T;S.T=null;var f=tt.p;try{tt.p=2,Uf(e,n,r,o)}finally{tt.p=f,S.T=c}}function ET(e,n,r,o){var c=S.T;S.T=null;var f=tt.p;try{tt.p=8,Uf(e,n,r,o)}finally{tt.p=f,S.T=c}}function Uf(e,n,r,o){if(Lu){var c=Lf(o);if(c===null)bf(e,n,o,Pu,r),uy(e,o);else if(AT(c,e,n,r,o))o.stopPropagation();else if(uy(e,o),n&4&&-1<TT.indexOf(e)){for(;c!==null;){var f=fi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=kn(f.pendingLanes);if(p!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var w=1<<31-Ye(p);E.entanglements[1]|=w,p&=~w}ii(f),(Jt&6)===0&&(Tu=tn()+500,zo(0))}}break;case 13:E=ur(f,2),E!==null&&We(E,f,2),bu(),xf(f,2)}if(f=Lf(o),f===null&&bf(e,n,o,Pu,r),f===c)break;c=f}c!==null&&o.stopPropagation()}else bf(e,n,o,null,r)}}function Lf(e){return e=Gs(e),Pf(e)}var Pu=null;function Pf(e){if(Pu=null,e=Vn(e),e!==null){var n=it(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=Dt(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Pu=e,null}function ly(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sl()){case ge:return 2;case Ae:return 8;case ci:case bl:return 32;case Ka:return 268435456;default:return 32}default:return 32}}var zf=!1,br=null,wr=null,Rr=null,Ko=new Map,Qo=new Map,Cr=[],TT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uy(e,n){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Yo(e,n,r,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fi(n),n!==null&&oy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function AT(e,n,r,o,c){switch(n){case"focusin":return br=Yo(br,e,n,r,o,c),!0;case"dragenter":return wr=Yo(wr,e,n,r,o,c),!0;case"mouseover":return Rr=Yo(Rr,e,n,r,o,c),!0;case"pointerover":var f=c.pointerId;return Ko.set(f,Yo(Ko.get(f)||null,e,n,r,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Qo.set(f,Yo(Qo.get(f)||null,e,n,r,o,c)),!0}return!1}function cy(e){var n=Vn(e.target);if(n!==null){var r=it(n);if(r!==null){if(n=r.tag,n===13){if(n=Dt(r),n!==null){e.blockedOn=n,tr(e.priority,function(){if(r.tag===13){var o=dn(),c=ur(r,o);c!==null&&We(c,r,o),xf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=Lf(e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);_n=o,r.target.dispatchEvent(o),_n=null}else return n=fi(r),n!==null&&oy(n),e.blockedOn=r,!1;n.shift()}return!0}function hy(e,n,r){zu(e)&&r.delete(n)}function ST(){zf=!1,br!==null&&zu(br)&&(br=null),wr!==null&&zu(wr)&&(wr=null),Rr!==null&&zu(Rr)&&(Rr=null),Ko.forEach(hy),Qo.forEach(hy)}function ju(e,n){e.blockedOn===n&&(e.blockedOn=null,zf||(zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ST)))}var Bu=null;function fy(e){Bu!==e&&(Bu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Bu===e&&(Bu=null);for(var n=0;n<e.length;n+=3){var r=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Pf(o||r)===null)continue;break}var f=fi(r);f!==null&&(e.splice(n,3),n-=3,Ch(f,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Xo(e){function n(w){return ju(w,e)}br!==null&&ju(br,e),wr!==null&&ju(wr,e),Rr!==null&&ju(Rr,e),Ko.forEach(n),Qo.forEach(n);for(var r=0;r<Cr.length;r++){var o=Cr[r];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Cr.length&&(r=Cr[0],r.blockedOn===null);)cy(r),r.blockedOn===null&&Cr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],f=r[o+1],p=c[pe]||null;if(typeof f=="function")p||fy(r);else if(p){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,p=f[pe]||null)E=p.formAction;else if(Pf(c)!==null)continue}else E=p.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),fy(r)}}}function jf(e){this._internalRoot=e}Hu.prototype.render=jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=dn();sy(r,o,e,n,null,null)},Hu.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&_a(),sy(e.current,2,null,e,null,null),bu(),n[hi]=null}};function Hu(e){this._internalRoot=e}Hu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dl();e={blockedOn:null,target:e,priority:n};for(var r=0;r<Cr.length&&n!==0&&n<Cr[r].priority;r++);Cr.splice(r,0,e),r===0&&cy(e)}};var dy=t.version;if(dy!=="19.0.0")throw Error(a(527,dy,"19.0.0"));tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=Q(n),e=e!==null?st(e):null,e=e===null?null:e.stateNode,e};var bT={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Vn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Yi=qu.inject(bT),je=qu}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(a(299));var r=!1,o="",c=Og,f=Ng,p=Mg,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=iy(e,1,!1,null,null,r,o,c,f,p,E,null),e[hi]=n.current,Sf(e.nodeType===8?e.parentNode:e),new jf(n)},Zo.hydrateRoot=function(e,n,r){if(!l(e))throw Error(a(299));var o=!1,c="",f=Og,p=Ng,E=Mg,w=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),n=iy(e,1,!0,n,r??null,o,c,f,p,E,w,M),n.context=ry(null),r=n.current,o=dn(),c=pr(o),c.callback=null,yr(r,c,o),n.current.lanes=o,oe(n,o),ii(n),e[hi]=n.current,Sf(e),new Hu(n)},Zo.version="19.0.0",Zo}var Sy;function VT(){if(Sy)return qf.exports;Sy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qf.exports=kT(),qf.exports}var xT=VT();const UT=()=>{};var by={};/**
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
 */const Gv=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);l<128?t[i++]=l:l<2048?(t[i++]=l>>6|192,t[i++]=l&63|128):(l&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=l>>18|240,t[i++]=l>>12&63|128,t[i++]=l>>6&63|128,t[i++]=l&63|128):(t[i++]=l>>12|224,t[i++]=l>>6&63|128,t[i++]=l&63|128)}return t},LT=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const l=s[i++];if(l<128)t[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[i++];t[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[i++],d=s[i++],y=s[i++],v=((l&7)<<18|(h&63)<<12|(d&63)<<6|y&63)-65536;t[a++]=String.fromCharCode(55296+(v>>10)),t[a++]=String.fromCharCode(56320+(v&1023))}else{const h=s[i++],d=s[i++];t[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return t.join("")},Id={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<s.length;l+=3){const h=s[l],d=l+1<s.length,y=d?s[l+1]:0,v=l+2<s.length,_=v?s[l+2]:0,I=h>>2,V=(h&3)<<4|y>>4;let B=(y&15)<<2|_>>6,$=_&63;v||($=64,d||(B=64)),a.push(i[I],i[V],i[B],i[$])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Gv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):LT(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<s.length;){const h=i[s.charAt(l++)],y=l<s.length?i[s.charAt(l)]:0;++l;const _=l<s.length?i[s.charAt(l)]:64;++l;const V=l<s.length?i[s.charAt(l)]:64;if(++l,h==null||y==null||_==null||V==null)throw new PT;const B=h<<2|y>>4;if(a.push(B),_!==64){const $=y<<4&240|_>>2;if(a.push($),V!==64){const X=_<<6&192|V;a.push(X)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class PT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zT=function(s){const t=Gv(s);return Id.encodeByteArray(t,!0)},oc=function(s){return zT(s).replace(/\./g,"")},Fv=function(s){try{return Id.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jT=()=>Kv().__FIREBASE_DEFAULTS__,BT=()=>{if(typeof process>"u"||typeof by>"u")return;const s=by.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},HT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&Fv(s[1]);return t&&JSON.parse(t)},Rc=()=>{try{return UT()||jT()||BT()||HT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Qv=s=>{var t,i;return(i=(t=Rc())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},qT=s=>{const t=Qv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},Yv=()=>{var s;return(s=Rc())===null||s===void 0?void 0:s.config},Xv=s=>{var t;return(t=Rc())===null||t===void 0?void 0:t[`_${s}`]};/**
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
 */class sl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
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
 */function GT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},s);return[oc(JSON.stringify(i)),oc(JSON.stringify(d)),""].join(".")}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function KT(){var s;const t=(s=Rc())===null||s===void 0?void 0:s.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function XT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $T(){const s=Ke();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function ZT(){return!KT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dd(){try{return typeof indexedDB=="object"}catch{return!1}}function WT(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var h;t(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(i){t(i)}})}/**
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
 */const JT="FirebaseError";class Fi extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=JT,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},l=`${this.service}/${t}`,h=this.errors[t],d=h?tA(h,a):"Error",y=`${this.serviceName}: ${d} (${l}).`;return new Fi(l,y,a)}}function tA(s,t){return s.replace(eA,(i,a)=>{const l=t[a];return l!=null?String(l):`<${a}?>`})}const eA=/\{\$([^}]+)}/g;function nA(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Rs(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const l of i){if(!a.includes(l))return!1;const h=s[l],d=t[l];if(wy(h)&&wy(d)){if(!Rs(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function wy(s){return s!==null&&typeof s=="object"}/**
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
 */function ja(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(l=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function iA(s,t){const i=new rA(s,t);return i.subscribe.bind(i)}class rA{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let l;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");sA(t,["next","error","complete"])?l=t:l={next:t,error:i,complete:a},l.next===void 0&&(l.next=Qf),l.error===void 0&&(l.error=Qf),l.complete===void 0&&(l.complete=Qf);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sA(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function Qf(){}/**
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
 */const aA=1e3,oA=2,lA=4*60*60*1e3,uA=.5;function cA(s,t=aA,i=oA){const a=t*Math.pow(i,s),l=Math.round(uA*a*(Math.random()-.5)*2);return Math.min(lA,a+l)}/**
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
 */function Mn(s){return s&&s._delegate?s._delegate:s}class Bi{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class hA{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new sl;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),l=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dA(t))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(t=Es){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Es){return this.instances.has(t)}getOptions(t=Es){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(h);a===y&&d.resolve(l)}return l}onInit(t,i){var a;const l=this.normalizeInstanceIdentifier(i),h=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;h.add(t),this.onInitCallbacks.set(l,h);const d=this.instances.get(l);return d&&t(d,l),()=>{h.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:fA(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Es){return this.component?this.component.multipleInstances?t:Es:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fA(s){return s===Es?void 0:s}function dA(s){return s.instantiationMode==="EAGER"}/**
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
 */class mA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new hA(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Rt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Rt||(Rt={}));const gA={debug:Rt.DEBUG,verbose:Rt.VERBOSE,info:Rt.INFO,warn:Rt.WARN,error:Rt.ERROR,silent:Rt.SILENT},pA=Rt.INFO,yA={[Rt.DEBUG]:"log",[Rt.VERBOSE]:"log",[Rt.INFO]:"info",[Rt.WARN]:"warn",[Rt.ERROR]:"error"},vA=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),l=yA[t];if(l)console[l](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Cc{constructor(t){this.name=t,this._logLevel=pA,this._logHandler=vA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Rt.DEBUG,...t),this._logHandler(this,Rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Rt.VERBOSE,...t),this._logHandler(this,Rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Rt.INFO,...t),this._logHandler(this,Rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Rt.WARN,...t),this._logHandler(this,Rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Rt.ERROR,...t),this._logHandler(this,Rt.ERROR,...t)}}const _A=(s,t)=>t.some(i=>s instanceof i);let Ry,Cy;function EA(){return Ry||(Ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TA(){return Cy||(Cy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,ad=new WeakMap,Zv=new WeakMap,Yf=new WeakMap,Od=new WeakMap;function AA(s){const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(Vr(s.result)),l()},d=()=>{a(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",d)});return t.then(i=>{i instanceof IDBCursor&&$v.set(i,s)}).catch(()=>{}),Od.set(t,s),t}function SA(s){if(ad.has(s))return;const t=new Promise((i,a)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});ad.set(s,t)}let od={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return ad.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Zv.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Vr(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function bA(s){od=s(od)}function wA(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(Xf(this),t,...i);return Zv.set(a,t.sort?t.sort():[t]),Vr(a)}:TA().includes(s)?function(...t){return s.apply(Xf(this),t),Vr($v.get(this))}:function(...t){return Vr(s.apply(Xf(this),t))}}function RA(s){return typeof s=="function"?wA(s):(s instanceof IDBTransaction&&SA(s),_A(s,EA())?new Proxy(s,od):s)}function Vr(s){if(s instanceof IDBRequest)return AA(s);if(Yf.has(s))return Yf.get(s);const t=RA(s);return t!==s&&(Yf.set(s,t),Od.set(t,s)),t}const Xf=s=>Od.get(s);function CA(s,t,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(s,t),y=Vr(d);return a&&d.addEventListener("upgradeneeded",v=>{a(Vr(d.result),v.oldVersion,v.newVersion,Vr(d.transaction),v)}),i&&d.addEventListener("blocked",v=>i(v.oldVersion,v.newVersion,v)),y.then(v=>{h&&v.addEventListener("close",()=>h()),l&&v.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),y}const IA=["get","getKey","getAll","getAllKeys","count"],DA=["put","add","delete","clear"],$f=new Map;function Iy(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if($f.get(t))return $f.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,l=DA.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||IA.includes(i)))return;const h=async function(d,...y){const v=this.transaction(d,l?"readwrite":"readonly");let _=v.store;return a&&(_=_.index(y.shift())),(await Promise.all([_[i](...y),l&&v.done]))[0]};return $f.set(t,h),h}bA(s=>({...s,get:(t,i,a)=>Iy(t,i)||s.get(t,i,a),has:(t,i)=>!!Iy(t,i)||s.has(t,i)}));/**
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
 */class OA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(NA(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function NA(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ld="@firebase/app",Dy="0.11.2";/**
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
 */const Hi=new Cc("@firebase/app"),MA="@firebase/app-compat",kA="@firebase/analytics-compat",VA="@firebase/analytics",xA="@firebase/app-check-compat",UA="@firebase/app-check",LA="@firebase/auth",PA="@firebase/auth-compat",zA="@firebase/database",jA="@firebase/data-connect",BA="@firebase/database-compat",HA="@firebase/functions",qA="@firebase/functions-compat",GA="@firebase/installations",FA="@firebase/installations-compat",KA="@firebase/messaging",QA="@firebase/messaging-compat",YA="@firebase/performance",XA="@firebase/performance-compat",$A="@firebase/remote-config",ZA="@firebase/remote-config-compat",WA="@firebase/storage",JA="@firebase/storage-compat",tS="@firebase/firestore",eS="@firebase/vertexai",nS="@firebase/firestore-compat",iS="firebase",rS="11.4.0";/**
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
 */const ud="[DEFAULT]",sS={[ld]:"fire-core",[MA]:"fire-core-compat",[VA]:"fire-analytics",[kA]:"fire-analytics-compat",[UA]:"fire-app-check",[xA]:"fire-app-check-compat",[LA]:"fire-auth",[PA]:"fire-auth-compat",[zA]:"fire-rtdb",[jA]:"fire-data-connect",[BA]:"fire-rtdb-compat",[HA]:"fire-fn",[qA]:"fire-fn-compat",[GA]:"fire-iid",[FA]:"fire-iid-compat",[KA]:"fire-fcm",[QA]:"fire-fcm-compat",[YA]:"fire-perf",[XA]:"fire-perf-compat",[$A]:"fire-rc",[ZA]:"fire-rc-compat",[WA]:"fire-gcs",[JA]:"fire-gcs-compat",[tS]:"fire-fst",[nS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[iS]:"fire-js-all"};/**
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
 */const lc=new Map,aS=new Map,cd=new Map;function Oy(s,t){try{s.container.addComponent(t)}catch(i){Hi.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Lr(s){const t=s.name;if(cd.has(t))return Hi.debug(`There were multiple attempts to register component ${t}.`),!1;cd.set(t,s);for(const i of lc.values())Oy(i,s);for(const i of aS.values())Oy(i,s);return!0}function ml(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function si(s){return s==null?!1:s.settings!==void 0}/**
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
 */const oS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new za("app","Firebase",oS);/**
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
 */class lS{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ba=rS;function Wv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:ud,automaticDataCollectionEnabled:!1},t),l=a.name;if(typeof l!="string"||!l)throw xr.create("bad-app-name",{appName:String(l)});if(i||(i=Yv()),!i)throw xr.create("no-options");const h=lc.get(l);if(h){if(Rs(i,h.options)&&Rs(a,h.config))return h;throw xr.create("duplicate-app",{appName:l})}const d=new mA(l);for(const v of cd.values())d.addComponent(v);const y=new lS(i,a,d);return lc.set(l,y),y}function Nd(s=ud){const t=lc.get(s);if(!t&&s===ud&&Yv())return Wv();if(!t)throw xr.create("no-app",{appName:s});return t}function Pi(s,t,i){var a;let l=(a=sS[s])!==null&&a!==void 0?a:s;i&&(l+=`-${i}`);const h=l.match(/\s|\//),d=t.match(/\s|\//);if(h||d){const y=[`Unable to register library "${l}" with version "${t}":`];h&&y.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&d&&y.push("and"),d&&y.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hi.warn(y.join(" "));return}Lr(new Bi(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
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
 */const uS="firebase-heartbeat-database",cS=1,al="firebase-heartbeat-store";let Zf=null;function Jv(){return Zf||(Zf=CA(uS,cS,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(al)}catch(i){console.warn(i)}}}}).catch(s=>{throw xr.create("idb-open",{originalErrorMessage:s.message})})),Zf}async function hS(s){try{const i=(await Jv()).transaction(al),a=await i.objectStore(al).get(t_(s));return await i.done,a}catch(t){if(t instanceof Fi)Hi.warn(t.message);else{const i=xr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hi.warn(i.message)}}}async function Ny(s,t){try{const a=(await Jv()).transaction(al,"readwrite");await a.objectStore(al).put(t,t_(s)),await a.done}catch(i){if(i instanceof Fi)Hi.warn(i.message);else{const a=xr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Hi.warn(a.message)}}}function t_(s){return`${s.name}!${s.options.appId}`}/**
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
 */const fS=1024,dS=30;class mS{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new pS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=My();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>dS){const d=yS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Hi.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=My(),{heartbeatsToSend:a,unsentEntries:l}=gS(this._heartbeatsCache.heartbeats),h=oc(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Hi.warn(i),""}}}function My(){return new Date().toISOString().substring(0,10)}function gS(s,t=fS){const i=[];let a=s.slice();for(const l of s){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),ky(i)>t){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),ky(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class pS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dd()?WT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await hS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function ky(s){return oc(JSON.stringify({version:2,heartbeats:s})).length}function yS(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
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
 */function vS(s){Lr(new Bi("platform-logger",t=>new OA(t),"PRIVATE")),Lr(new Bi("heartbeat",t=>new mS(t),"PRIVATE")),Pi(ld,Dy,s),Pi(ld,Dy,"esm2017"),Pi("fire-js","")}vS("");var _S="firebase",ES="11.4.0";/**
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
 */Pi(_S,ES,"app");var Vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Md;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(k,R){function S(){}S.prototype=R.prototype,k.D=R.prototype,k.prototype=new S,k.prototype.constructor=k,k.C=function(C,A,O){for(var b=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)b[Ht-2]=arguments[Ht];return R.prototype[A].apply(C,b)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(k,R,S){S||(S=0);var C=Array(16);if(typeof R=="string")for(var A=0;16>A;++A)C[A]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(A=0;16>A;++A)C[A]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=k.g[0],S=k.g[1],A=k.g[2];var O=k.g[3],b=R+(O^S&(A^O))+C[0]+3614090360&4294967295;R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[1]+3905402710&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[2]+606105819&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[3]+3250441966&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[4]+4118548399&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[5]+1200080426&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[6]+2821735955&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[7]+4249261313&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[8]+1770035416&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[9]+2336552879&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[10]+4294925233&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[11]+2304563134&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[12]+1804603682&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[13]+4254626195&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[14]+2792965006&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[15]+1236535329&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(A^O&(S^A))+C[1]+4129170786&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[6]+3225465664&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[11]+643717713&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[0]+3921069994&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[5]+3593408605&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[10]+38016083&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[15]+3634488961&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[4]+3889429448&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[9]+568446438&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[14]+3275163606&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[3]+4107603335&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[8]+1163531501&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[13]+2850285829&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[2]+4243563512&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[7]+1735328473&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[12]+2368359562&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(S^A^O)+C[5]+4294588738&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[8]+2272392833&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[11]+1839030562&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[14]+4259657740&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[1]+2763975236&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[4]+1272893353&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[7]+4139469664&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[10]+3200236656&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[13]+681279174&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[0]+3936430074&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[3]+3572445317&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[6]+76029189&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[9]+3654602809&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[12]+3873151461&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[15]+530742520&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[2]+3299628645&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(A^(S|~O))+C[0]+4096336452&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[7]+1126891415&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[14]+2878612391&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[5]+4237533241&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[12]+1700485571&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[3]+2399980690&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[10]+4293915773&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[1]+2240044497&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[8]+1873313359&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[15]+4264355552&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[6]+2734768916&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[13]+1309151649&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[4]+4149444226&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[11]+3174756917&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[2]+718787259&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[9]+3951481745&4294967295,k.g[0]=k.g[0]+R&4294967295,k.g[1]=k.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,k.g[2]=k.g[2]+A&4294967295,k.g[3]=k.g[3]+O&4294967295}a.prototype.u=function(k,R){R===void 0&&(R=k.length);for(var S=R-this.blockSize,C=this.B,A=this.h,O=0;O<R;){if(A==0)for(;O<=S;)l(this,k,O),O+=this.blockSize;if(typeof k=="string"){for(;O<R;)if(C[A++]=k.charCodeAt(O++),A==this.blockSize){l(this,C),A=0;break}}else for(;O<R;)if(C[A++]=k[O++],A==this.blockSize){l(this,C),A=0;break}}this.h=A,this.o+=R},a.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var R=1;R<k.length-8;++R)k[R]=0;var S=8*this.o;for(R=k.length-8;R<k.length;++R)k[R]=S&255,S/=256;for(this.u(k),k=Array(16),R=S=0;4>R;++R)for(var C=0;32>C;C+=8)k[S++]=this.g[R]>>>C&255;return k};function h(k,R){var S=y;return Object.prototype.hasOwnProperty.call(S,k)?S[k]:S[k]=R(k)}function d(k,R){this.h=R;for(var S=[],C=!0,A=k.length-1;0<=A;A--){var O=k[A]|0;C&&O==R||(S[A]=O,C=!1)}this.g=S}var y={};function v(k){return-128<=k&&128>k?h(k,function(R){return new d([R|0],0>R?-1:0)}):new d([k|0],0>k?-1:0)}function _(k){if(isNaN(k)||!isFinite(k))return V;if(0>k)return et(_(-k));for(var R=[],S=1,C=0;k>=S;C++)R[C]=k/S|0,S*=4294967296;return new d(R,0)}function I(k,R){if(k.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k.charAt(0)=="-")return et(I(k.substring(1),R));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=_(Math.pow(R,8)),C=V,A=0;A<k.length;A+=8){var O=Math.min(8,k.length-A),b=parseInt(k.substring(A,A+O),R);8>O?(O=_(Math.pow(R,O)),C=C.j(O).add(_(b))):(C=C.j(S),C=C.add(_(b)))}return C}var V=v(0),B=v(1),$=v(16777216);s=d.prototype,s.m=function(){if(lt(this))return-et(this).m();for(var k=0,R=1,S=0;S<this.g.length;S++){var C=this.i(S);k+=(0<=C?C:4294967296+C)*R,R*=4294967296}return k},s.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(X(this))return"0";if(lt(this))return"-"+et(this).toString(k);for(var R=_(Math.pow(k,6)),S=this,C="";;){var A=Pt(S,R).g;S=At(S,A.j(R));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(k);if(S=A,X(S))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},s.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function X(k){if(k.h!=0)return!1;for(var R=0;R<k.g.length;R++)if(k.g[R]!=0)return!1;return!0}function lt(k){return k.h==-1}s.l=function(k){return k=At(this,k),lt(k)?-1:X(k)?0:1};function et(k){for(var R=k.g.length,S=[],C=0;C<R;C++)S[C]=~k.g[C];return new d(S,~k.h).add(B)}s.abs=function(){return lt(this)?et(this):this},s.add=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],C=0,A=0;A<=R;A++){var O=C+(this.i(A)&65535)+(k.i(A)&65535),b=(O>>>16)+(this.i(A)>>>16)+(k.i(A)>>>16);C=b>>>16,O&=65535,b&=65535,S[A]=b<<16|O}return new d(S,S[S.length-1]&-2147483648?-1:0)};function At(k,R){return k.add(et(R))}s.j=function(k){if(X(this)||X(k))return V;if(lt(this))return lt(k)?et(this).j(et(k)):et(et(this).j(k));if(lt(k))return et(this.j(et(k)));if(0>this.l($)&&0>k.l($))return _(this.m()*k.m());for(var R=this.g.length+k.g.length,S=[],C=0;C<2*R;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<k.g.length;A++){var O=this.i(C)>>>16,b=this.i(C)&65535,Ht=k.i(A)>>>16,qt=k.i(A)&65535;S[2*C+2*A]+=b*qt,ft(S,2*C+2*A),S[2*C+2*A+1]+=O*qt,ft(S,2*C+2*A+1),S[2*C+2*A+1]+=b*Ht,ft(S,2*C+2*A+1),S[2*C+2*A+2]+=O*Ht,ft(S,2*C+2*A+2)}for(C=0;C<R;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=R;C<2*R;C++)S[C]=0;return new d(S,0)};function ft(k,R){for(;(k[R]&65535)!=k[R];)k[R+1]+=k[R]>>>16,k[R]&=65535,R++}function yt(k,R){this.g=k,this.h=R}function Pt(k,R){if(X(R))throw Error("division by zero");if(X(k))return new yt(V,V);if(lt(k))return R=Pt(et(k),R),new yt(et(R.g),et(R.h));if(lt(R))return R=Pt(k,et(R)),new yt(et(R.g),R.h);if(30<k.g.length){if(lt(k)||lt(R))throw Error("slowDivide_ only works with positive integers.");for(var S=B,C=R;0>=C.l(k);)S=mt(S),C=mt(C);var A=Ct(S,1),O=Ct(C,1);for(C=Ct(C,2),S=Ct(S,2);!X(C);){var b=O.add(C);0>=b.l(k)&&(A=A.add(S),O=b),C=Ct(C,1),S=Ct(S,1)}return R=At(k,A.j(R)),new yt(A,R)}for(A=V;0<=k.l(R);){for(S=Math.max(1,Math.floor(k.m()/R.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=_(S),b=O.j(R);lt(b)||0<b.l(k);)S-=C,O=_(S),b=O.j(R);X(O)&&(O=B),A=A.add(O),k=At(k,b)}return new yt(A,k)}s.A=function(k){return Pt(this,k).h},s.and=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)&k.i(C);return new d(S,this.h&k.h)},s.or=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)|k.i(C);return new d(S,this.h|k.h)},s.xor=function(k){for(var R=Math.max(this.g.length,k.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)^k.i(C);return new d(S,this.h^k.h)};function mt(k){for(var R=k.g.length+1,S=[],C=0;C<R;C++)S[C]=k.i(C)<<1|k.i(C-1)>>>31;return new d(S,k.h)}function Ct(k,R){var S=R>>5;R%=32;for(var C=k.g.length-S,A=[],O=0;O<C;O++)A[O]=0<R?k.i(O+S)>>>R|k.i(O+S+1)<<32-R:k.i(O+S);return new d(A,k.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=_,d.fromString=I,Md=d}).apply(typeof Vy<"u"?Vy:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var e_,Jo,n_,Ju,hd,i_,r_,s_;(function(){var s,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,g){return u==Array.prototype||u==Object.prototype||(u[m]=g.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var m=0;m<u.length;++m){var g=u[m];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var a=i(this);function l(u,m){if(m)t:{var g=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in g))break t;g=g[U]}u=u[u.length-1],T=g[u],m=m(T),m!=T&&m!=null&&t(g,u,{configurable:!0,writable:!0,value:m})}}function h(u,m){u instanceof String&&(u+="");var g=0,T=!1,U={next:function(){if(!T&&g<u.length){var z=g++;return{value:m(z,u[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return h(this,function(m,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},y=this||self;function v(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function _(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function I(u,m,g){return u.call.apply(u.bind,arguments)}function V(u,m,g){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(m,U)}}return function(){return u.apply(m,arguments)}}function B(u,m,g){return B=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:V,B.apply(null,arguments)}function $(u,m){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function X(u,m){function g(){}g.prototype=m.prototype,u.aa=m.prototype,u.prototype=new g,u.prototype.constructor=u,u.Qb=function(T,U,z){for(var Z=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)Z[Ot-2]=arguments[Ot];return m.prototype[U].apply(T,Z)}}function lt(u){const m=u.length;if(0<m){const g=Array(m);for(let T=0;T<m;T++)g[T]=u[T];return g}return[]}function et(u,m){for(let g=1;g<arguments.length;g++){const T=arguments[g];if(v(T)){const U=u.length||0,z=T.length||0;u.length=U+z;for(let Z=0;Z<z;Z++)u[U+Z]=T[Z]}else u.push(T)}}class At{constructor(m,g){this.i=m,this.j=g,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function ft(u){return/^[\s\xa0]*$/.test(u)}function yt(){var u=y.navigator;return u&&(u=u.userAgent)?u:""}function Pt(u){return Pt[" "](u),u}Pt[" "]=function(){};var mt=yt().indexOf("Gecko")!=-1&&!(yt().toLowerCase().indexOf("webkit")!=-1&&yt().indexOf("Edge")==-1)&&!(yt().indexOf("Trident")!=-1||yt().indexOf("MSIE")!=-1)&&yt().indexOf("Edge")==-1;function Ct(u,m,g){for(const T in u)m.call(g,u[T],T,u)}function k(u,m){for(const g in u)m.call(void 0,u[g],g,u)}function R(u){const m={};for(const g in u)m[g]=u[g];return m}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,m){let g,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(g in T)u[g]=T[g];for(let z=0;z<S.length;z++)g=S[z],Object.prototype.hasOwnProperty.call(T,g)&&(u[g]=T[g])}}function A(u){var m=1;u=u.split(":");const g=[];for(;0<m&&u.length;)g.push(u.shift()),m--;return u.length&&g.push(u.join(":")),g}function O(u){y.setTimeout(()=>{throw u},0)}function b(){var u=Dt;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ht{constructor(){this.h=this.g=null}add(m,g){const T=qt.get();T.set(m,g),this.h?this.h.next=T:this.g=T,this.h=T}}var qt=new At(()=>new W,u=>u.reset());class W{constructor(){this.next=this.g=this.h=null}set(m,g){this.h=m,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,it=!1,Dt=new Ht,D=()=>{const u=y.Promise.resolve(void 0);nt=()=>{u.then(Q)}};var Q=()=>{for(var u;u=b();){try{u.h.call(u.g)}catch(g){O(g)}var m=qt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}it=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var tt=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const g=()=>{};y.addEventListener("test",g,m),y.removeEventListener("test",g,m)}catch{}return u}();function pt(u,m){if(J.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var g=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(mt){t:{try{Pt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else g=="mouseover"?m=u.fromElement:g=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:vt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&pt.aa.h.call(this)}}X(pt,J);var vt={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),Vt=0;function te(u,m,g,T,U){this.listener=u,this.proxy=null,this.src=m,this.type=g,this.capture=!!T,this.ha=U,this.key=++Vt,this.da=this.fa=!1}function jt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Qe(u){this.src=u,this.g={},this.h=0}Qe.prototype.add=function(u,m,g,T,U){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=gn(u,m,T,U);return-1<Z?(m=u[Z],g||(m.fa=!1)):(m=new te(m,this.src,z,!!T,U),m.fa=g,u.push(m)),m};function li(u,m){var g=m.type;if(g in u.g){var T=u.g[g],U=Array.prototype.indexOf.call(T,m,void 0),z;(z=0<=U)&&Array.prototype.splice.call(T,U,1),z&&(jt(m),u.g[g].length==0&&(delete u.g[g],u.h--))}}function gn(u,m,g,T){for(var U=0;U<u.length;++U){var z=u[U];if(!z.da&&z.listener==m&&z.capture==!!g&&z.ha==T)return U}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Qi={};function ui(u,m,g,T,U){if(Array.isArray(m)){for(var z=0;z<m.length;z++)ui(u,m[z],g,T,U);return null}return g=Sl(g),u&&u[ue]?u.K(m,g,_(T)?!!T.capture:!1,U):Ga(u,m,g,!1,T,U)}function Ga(u,m,g,T,U,z){if(!m)throw Error("Invalid event type");var Z=_(U)?!!U.capture:!!U,Ot=Fa(u);if(Ot||(u[Ki]=Ot=new Qe(u)),g=Ot.add(m,g,T,Z,z),g.proxy)return g;if(T=xs(),g.proxy=T,T.src=u,T.listener=g,u.addEventListener)tt||(U=Z),U===void 0&&(U=!1),u.addEventListener(m.toString(),T,U);else if(u.attachEvent)u.attachEvent(Ls(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xs(){function u(g){return m.call(u.src,u.listener,g)}const m=Hc;return u}function Us(u,m,g,T,U){if(Array.isArray(m))for(var z=0;z<m.length;z++)Us(u,m[z],g,T,U);else T=_(T)?!!T.capture:!!T,g=Sl(g),u&&u[ue]?(u=u.i,m=String(m).toString(),m in u.g&&(z=u.g[m],g=gn(z,g,T,U),-1<g&&(jt(z[g]),Array.prototype.splice.call(z,g,1),z.length==0&&(delete u.g[m],u.h--)))):u&&(u=Fa(u))&&(m=u.g[m.toString()],u=-1,m&&(u=gn(m,g,T,U)),(g=-1<u?m[u]:null)&&Hr(g))}function Hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ue])li(m.i,u);else{var g=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(g,T,u.capture):m.detachEvent?m.detachEvent(Ls(g),T):m.addListener&&m.removeListener&&m.removeListener(T),(g=Fa(m))?(li(g,u),g.h==0&&(g.src=null,m[Ki]=null)):jt(u)}}}function Ls(u){return u in Qi?Qi[u]:Qi[u]="on"+u}function Hc(u,m){if(u.da)u=!0;else{m=new pt(m,this);var g=u.listener,T=u.ha||u.src;u.fa&&Hr(u),u=g.call(T,m)}return u}function Fa(u){return u=u[Ki],u instanceof Qe?u:null}var tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sl(u){return typeof u=="function"?u:(u[tn]||(u[tn]=function(m){return u.handleEvent(m)}),u[tn])}function ge(){st.call(this),this.i=new Qe(this),this.M=this,this.F=null}X(ge,st),ge.prototype[ue]=!0,ge.prototype.removeEventListener=function(u,m,g,T){Us(this,u,m,g,T)};function Ae(u,m){var g,T=u.F;if(T)for(g=[];T;T=T.F)g.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new J(m,u);else if(m instanceof J)m.target=m.target||u;else{var U=m;m=new J(T,u),C(m,U)}if(U=!0,g)for(var z=g.length-1;0<=z;z--){var Z=m.g=g[z];U=ci(Z,T,!0,m)&&U}if(Z=m.g=u,U=ci(Z,T,!0,m)&&U,U=ci(Z,T,!1,m)&&U,g)for(z=0;z<g.length;z++)Z=m.g=g[z],U=ci(Z,T,!1,m)&&U}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var g=u.g[m],T=0;T<g.length;T++)jt(g[T]);delete u.g[m],u.h--}}this.F=null},ge.prototype.K=function(u,m,g,T){return this.i.add(String(u),m,!1,g,T)},ge.prototype.L=function(u,m,g,T){return this.i.add(String(u),m,!0,g,T)};function ci(u,m,g,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,z=0;z<m.length;++z){var Z=m[z];if(Z&&!Z.da&&Z.capture==g){var Ot=Z.listener,ye=Z.ha||Z.src;Z.fa&&li(u.i,Z),U=Ot.call(ye,T)!==!1&&U}}return U&&!T.defaultPrevented}function bl(u,m,g){if(typeof u=="function")g&&(u=B(u,g));else if(u&&typeof u.handleEvent=="function")u=B(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:y.setTimeout(u,m||0)}function Ka(u){u.g=bl(()=>{u.g=null,u.i&&(u.i=!1,Ka(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class qc extends st{constructor(m,g){super(),this.m=m,this.l=g,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Ka(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(u){st.call(this),this.h=u,this.g={}}X(qr,st);var Yi=[];function je(u){Ct(u.g,function(m,g){this.g.hasOwnProperty(g)&&Hr(m)},u),u.g={}}qr.prototype.N=function(){qr.aa.N.call(this),je(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qa=y.JSON.stringify,Hn=y.JSON.parse,Ye=class{stringify(u){return y.JSON.stringify(u,void 0)}parse(u){return y.JSON.parse(u,void 0)}};function Ya(){}Ya.prototype.h=null;function wl(u){return u.h||(u.h=u.i())}function Rl(){}var qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xi(){J.call(this,"d")}X(Xi,J);function kn(){J.call(this,"c")}X(kn,J);var pn={},$i=null;function Ps(){return $i=$i||new ge}pn.La="serverreachability";function Xa(u){J.call(this,pn.La,u)}X(Xa,J);function Zi(u){const m=Ps();Ae(m,new Xa(m))}pn.STAT_EVENT="statevent";function zs(u,m){J.call(this,pn.STAT_EVENT,u),this.stat=m}X(zs,J);function oe(u){const m=Ps();Ae(m,new zs(m,u))}pn.Ma="timingevent";function Cl(u,m){J.call(this,pn.Ma,u),this.size=m}X(Cl,J);function Wi(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){u()},m)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function Il(u,m,g,T,U,z){u.info(function(){if(u.g)if(z)for(var Z="",Ot=z.split("&"),ye=0;ye<Ot.length;ye++){var Nt=Ot[ye].split("=");if(1<Nt.length){var we=Nt[0];Nt=Nt[1];var ve=we.split("_");Z=2<=ve.length&&ve[1]=="type"?Z+(we+"="+Nt+"&"):Z+(we+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+m+`
`+g+`
`+Z})}function Dl(u,m,g,T,U,z,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+m+`
`+g+`
`+z+" "+Z})}function tr(u,m,g,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Se(u,g)+(T?" "+T:"")})}function Gn(u,m){u.info(function(){return"TIMEOUT: "+m})}Ji.prototype.info=function(){};function Se(u,m){if(!u.g)return m;if(!m)return null;try{var g=JSON.parse(m);if(g){for(u=0;u<g.length;u++)if(Array.isArray(g[u])){var T=g[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var z=U[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<U.length;Z++)U[Z]=""}}}}return Qa(g)}catch{return m}}var pe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gr;function js(){}X(js,Ya),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},Gr=new js;function Fn(u,m,g,T){this.j=u,this.i=m,this.l=g,this.R=T||1,this.U=new qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $a}function $a(){this.i=null,this.g="",this.h=!1}var er={},Fr={};function Vn(u,m,g){u.L=1,u.v=Yr(ee(m)),u.m=g,u.P=!0,fi(u,null)}function fi(u,m){u.F=Date.now(),Zt(u),u.A=ee(u.v);var g=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),gi(g.i,"t",T),u.C=0,g=u.j.J,u.h=new $a,u.g=ql(u.j,g?m:null,!u.m),0<u.O&&(u.M=new qc(B(u.Y,u,u.g),u.O)),m=u.U,g=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Yi[0]=U.toString()),U=Yi);for(var z=0;z<U.length;z++){var Z=ui(g,U[z],T||m.handleEvent,!1,m.h||m);if(!Z)break;m.g[Z.key]=Z}m=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Zi(),Il(u.i,u.u,u.A,u.l,u.R,u.m)}Fn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Tn(u)==3?m.j():this.Y(u)},Fn.prototype.Y=function(u){try{if(u==this.g)t:{const ve=Tn(this.g);var m=this.g.Ba();const _i=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||xl(this.g)))){this.J||ve!=4||m==7||(m==8||0>=_i?Zi(3):Zi(2)),Bs(this);var g=this.g.Z();this.X=g;e:if(nr(this)){var T=xl(this.g);u="";var U=T.length,z=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),on(this);var Z="";break e}this.h.i=new y.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(z&&m==U-1)});T.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=g==200,Dl(this.i,this.u,this.A,this.l,this.R,ve,g),this.o){if(this.T&&!this.K){e:{if(this.g){var Ot,ye=this.g;if((Ot=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ft(Ot)){var Nt=Ot;break e}}Nt=null}if(g=Nt)tr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ln(this,g);else{this.o=!1,this.s=3,oe(12),en(this),on(this);break t}}if(this.P){g=!0;let Me;for(;!this.J&&this.C<Z.length;)if(Me=ir(this,Z),Me==Fr){ve==4&&(this.s=4,oe(14),g=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==er){this.s=4,oe(15),tr(this.i,this.l,Z,"[Invalid Chunk]"),g=!1;break}else tr(this.i,this.l,Me,null),ln(this,Me);if(nr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||Z.length!=0||this.h.h||(this.s=1,oe(16),g=!1),this.o=this.o&&g,!g)tr(this.i,this.l,Z,"[Invalid Chunked Response]"),en(this),on(this);else if(0<Z.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),es(we),we.M=!0,oe(11))}}else tr(this.i,this.l,Z,null),ln(this,Z);ve==4&&en(this),this.o&&!this.J&&(ve==4?jl(this.j,this):(this.o=!1,Zt(this)))}else Xc(this.g),g==400&&0<Z.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),en(this),on(this)}}}catch{}finally{}};function nr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ir(u,m){var g=u.C,T=m.indexOf(`
`,g);return T==-1?Fr:(g=Number(m.substring(g,T)),isNaN(g)?er:(T+=1,T+g>m.length?Fr:(m=m.slice(T,T+g),u.C=T+g,m)))}Fn.prototype.cancel=function(){this.J=!0,en(this)};function Zt(u){u.S=Date.now()+u.I,Za(u,u.I)}function Za(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wi(B(u.ba,u),m)}function Bs(u){u.B&&(y.clearTimeout(u.B),u.B=null)}Fn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Gn(this.i,this.A),this.L!=2&&(Zi(),oe(17)),en(this),this.s=2,on(this)):Za(this,this.S-u)};function on(u){u.j.G==0||u.J||jl(u.j,u)}function en(u){Bs(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,je(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ln(u,m){try{var g=u.j;if(g.G!=0&&(g.g==u||rr(g.h,u))){if(!u.K&&rr(g.h,u)&&g.G==3){try{var T=g.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){t:if(!g.u){if(g.g)if(g.g.F+3e3<u.F)Zs(g),Xs(g);else break t;lo(g),oe(18)}}else g.za=U[1],0<g.za-g.T&&37500>U[2]&&g.F&&g.v==0&&!g.C&&(g.C=Wi(B(g.Za,g),6e3));if(1>=Ol(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else vi(g,11)}else if((u.K||g.g==u)&&Zs(g),!ft(m))for(U=g.Da.g.parse(m),m=0;m<U.length;m++){let Nt=U[m];if(g.T=Nt[0],Nt=Nt[1],g.G==2)if(Nt[0]=="c"){g.K=Nt[1],g.ia=Nt[2];const we=Nt[3];we!=null&&(g.la=we,g.j.info("VER="+g.la));const ve=Nt[4];ve!=null&&(g.Aa=ve,g.j.info("SVER="+g.Aa));const _i=Nt[5];_i!=null&&typeof _i=="number"&&0<_i&&(T=1.5*_i,g.L=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Me=u.g;if(Me){const Wn=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wn){var z=T.h;z.g||Wn.indexOf("spdy")==-1&&Wn.indexOf("quic")==-1&&Wn.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(sr(z,z.h),z.h=null))}if(T.D){const co=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(T.ya=co,xt(T.I,T.D,co))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-u.F,g.j.info("Handshake RTT: "+g.R+"ms")),T=g;var Z=u;if(T.qa=Hl(T,T.J?T.ia:null,T.W),Z.K){yn(T.h,Z);var Ot=Z,ye=T.L;ye&&(Ot.I=ye),Ot.B&&(Bs(Ot),Zt(Ot)),T.g=Z}else Pl(T);0<g.i.length&&$s(g)}else Nt[0]!="stop"&&Nt[0]!="close"||vi(g,7);else g.G==3&&(Nt[0]=="stop"||Nt[0]=="close"?Nt[0]=="stop"?vi(g,7):ao(g):Nt[0]!="noop"&&g.l&&g.l.ta(Nt),g.v=0)}}Zi(4)}catch{}}var Gc=class{constructor(u,m){this.g=u,this.map=m}};function Wa(u){this.l=u||10,y.PerformanceNavigationTiming?(u=y.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ja(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ol(u){return u.h?1:u.g?u.g.size:0}function rr(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function sr(u,m){u.g?u.g.add(m):u.h=m}function yn(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Wa.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Xe(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const g of u.g.values())m=m.concat(g.D);return m}return lt(u.i)}function Nl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(v(u)){for(var m=[],g=u.length,T=0;T<g;T++)m.push(u[T]);return m}m=[],g=0;for(T in u)m[g++]=u[T];return m}function Fc(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(v(u)||typeof u=="string"){var m=[];u=u.length;for(var g=0;g<u;g++)m.push(g);return m}m=[],g=0;for(const T in u)m[g++]=T;return m}}}function Kr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(v(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var g=Fc(u),T=Nl(u),U=T.length,z=0;z<U;z++)m.call(void 0,T[z],g&&g[z],u)}var to=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hs(u,m){if(u){u=u.split("&");for(var g=0;g<u.length;g++){var T=u[g].indexOf("="),U=null;if(0<=T){var z=u[g].substring(0,T);U=u[g].substring(T+1)}else z=u[g];m(z,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function di(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof di){this.h=u.h,ar(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var m=u.i,g=new Kn;g.i=m.i,m.g&&(g.g=new Map(m.g),g.h=m.h),qs(this,g),this.m=u.m}else u&&(m=String(u).match(to))?(this.h=!1,ar(this,m[1]||"",!0),this.o=or(m[2]||""),this.g=or(m[3]||"",!0),Qr(this,m[4]),this.l=or(m[5]||"",!0),qs(this,m[6]||"",!0),this.m=or(m[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}di.prototype.toString=function(){var u=[],m=this.j;m&&u.push(vn(m,eo,!0),":");var g=this.g;return(g||m=="file")&&(u.push("//"),(m=this.o)&&u.push(vn(m,eo,!0),"@"),u.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&u.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&u.push("/"),u.push(vn(g,g.charAt(0)=="/"?no:Ml,!0))),(g=this.i.toString())&&u.push("?",g),(g=this.m)&&u.push("#",vn(g,Yc)),u.join("")};function ee(u){return new di(u)}function ar(u,m,g){u.j=g?or(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function qs(u,m,g){m instanceof Kn?(u.i=m,io(u.i,u.h)):(g||(m=vn(m,Qc)),u.i=new Kn(m,u.h))}function xt(u,m,g){u.i.set(m,g)}function Yr(u){return xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function or(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function vn(u,m,g){return typeof u=="string"?(u=encodeURI(u).replace(m,Kc),g&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Kc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var eo=/[#\/\?@]/g,Ml=/[#\?:]/g,no=/[#\?]/g,Qc=/[#\?@]/g,Yc=/#/g;function Kn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function _n(u){u.g||(u.g=new Map,u.h=0,u.i&&Hs(u.i,function(m,g){u.add(decodeURIComponent(m.replace(/\+/g," ")),g)}))}s=Kn.prototype,s.add=function(u,m){_n(this),this.i=null,u=pi(this,u);var g=this.g.get(u);return g||this.g.set(u,g=[]),g.push(m),this.h+=1,this};function Gs(u,m){_n(u),m=pi(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function mi(u,m){return _n(u),m=pi(u,m),u.g.has(m)}s.forEach=function(u,m){_n(this),this.g.forEach(function(g,T){g.forEach(function(U){u.call(m,U,T,this)},this)},this)},s.na=function(){_n(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),g=[];for(let T=0;T<m.length;T++){const U=u[T];for(let z=0;z<U.length;z++)g.push(m[T])}return g},s.V=function(u){_n(this);let m=[];if(typeof u=="string")mi(this,u)&&(m=m.concat(this.g.get(pi(this,u))));else{u=Array.from(this.g.values());for(let g=0;g<u.length;g++)m=m.concat(u[g])}return m},s.set=function(u,m){return _n(this),this.i=null,u=pi(this,u),mi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},s.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function gi(u,m,g){Gs(u,m),0<g.length&&(u.i=null,u.g.set(pi(u,m),lt(g)),u.h+=g.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var g=0;g<m.length;g++){var T=m[g];const z=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var U=z;Z[T]!==""&&(U+="="+encodeURIComponent(String(Z[T]))),u.push(U)}}return this.i=u.join("&")};function pi(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function io(u,m){m&&!u.j&&(_n(u),u.i=null,u.g.forEach(function(g,T){var U=T.toLowerCase();T!=U&&(Gs(this,T),gi(this,U,g))},u)),u.j=m}function kl(u,m){const g=new Ji;if(y.Image){const T=new Image;T.onload=$(En,g,"TestLoadImage: loaded",!0,m,T),T.onerror=$(En,g,"TestLoadImage: error",!1,m,T),T.onabort=$(En,g,"TestLoadImage: abort",!1,m,T),T.ontimeout=$(En,g,"TestLoadImage: timeout",!1,m,T),y.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Xr(u,m){const g=new Ji,T=new AbortController,U=setTimeout(()=>{T.abort(),En(g,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(U),z.ok?En(g,"TestPingServer: ok",!0,m):En(g,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),En(g,"TestPingServer: error",!1,m)})}function En(u,m,g,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(g)}catch{}}function $r(){this.g=new Ye}function Qn(u,m,g){const T=g||"";try{Kr(u,function(U,z){let Z=U;_(U)&&(Z=Qa(U)),m.push(T+z+"="+encodeURIComponent(Z))})}catch(U){throw m.push(T+"type="+encodeURIComponent("_badmap")),U}}function lr(u){this.l=u.Ub||null,this.j=u.eb||!1}X(lr,Ya),lr.prototype.g=function(){return new yi(this.l,this.j)},lr.prototype.i=function(u){return function(){return u}}({});function yi(u,m){ge.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(yi,ge),s=yi.prototype,s.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Xn(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||y).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},s.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ro(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ro(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}s.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Yn(this):Xn(this),this.readyState==3&&ro(this)}},s.Ra=function(u){this.g&&(this.response=this.responseText=u,Yn(this))},s.Qa=function(u){this.g&&(this.response=u,Yn(this))},s.ga=function(){this.g&&Yn(this)};function Yn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Xn(u)}s.setRequestHeader=function(u,m){this.u.append(u,m)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var g=m.next();!g.done;)g=g.value,u.push(g[0]+": "+g[1]),g=m.next();return u.join(`\r
`)};function Xn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function so(u){let m="";return Ct(u,function(g,T){m+=T,m+=":",m+=g,m+=`\r
`}),m}function be(u,m,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=so(g),typeof u=="string"?g!=null&&encodeURIComponent(String(g)):xt(u,m,g))}function zt(u){ge.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(zt,ge);var Fs=/^https?$/i,Zr=["POST","PUT"];s=zt.prototype,s.Ha=function(u){this.J=u},s.ea=function(u,m,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gr.g(),this.v=this.o?wl(this.o):wl(Gr),this.g.onreadystatechange=B(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(z){Vl(this,z);return}if(u=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)g.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())g.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(z=>z.toLowerCase()=="content-type"),U=y.FormData&&u instanceof y.FormData,!(0<=Array.prototype.indexOf.call(Zr,m,void 0))||T||U||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of g)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wr(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Vl(this,z)}};function Vl(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ks(u),$n(u)}function Ks(u){u.A||(u.A=!0,Ae(u,"complete"),Ae(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ae(this,"complete"),Ae(this,"abort"),$n(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$n(this,!0)),zt.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Qs(this):this.bb())},s.bb=function(){Qs(this)};function Qs(u){if(u.h&&typeof d<"u"&&(!u.v[1]||Tn(u)!=4||u.Z()!=2)){if(u.u&&Tn(u)==4)bl(u.Ea,0,u);else if(Ae(u,"readystatechange"),Tn(u)==4){u.h=!1;try{const Z=u.Z();t:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var g;if(!(g=m)){var T;if(T=Z===0){var U=String(u.D).match(to)[1]||null;!U&&y.self&&y.self.location&&(U=y.self.location.protocol.slice(0,-1)),T=!Fs.test(U?U.toLowerCase():"")}g=T}if(g)Ae(u,"complete"),Ae(u,"success");else{u.m=6;try{var z=2<Tn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Ks(u)}}finally{$n(u)}}}}function $n(u,m){if(u.g){Wr(u);const g=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||Ae(u,"ready");try{g.onreadystatechange=T}catch{}}}function Wr(u){u.I&&(y.clearTimeout(u.I),u.I=null)}s.isActive=function(){return!!this.g};function Tn(u){return u.g?u.g.readyState:0}s.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Hn(m)}};function xl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xc(u){const m={};u=(u.g&&2<=Tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ft(u[T]))continue;var g=A(u[T]);const U=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const z=m[U]||[];m[U]=z,z.push(g)}k(m,function(T){return T.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(u,m,g){return g&&g.internalChannelParams&&g.internalChannelParams[u]||m}function Ys(u){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,u),this.cb=Jr("retryDelaySeedMs",1e4,u),this.Wa=Jr("forwardChannelMaxRetries",2,u),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Wa(u&&u.concurrentRequestLimit),this.Da=new $r,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Ys.prototype,s.la=8,s.G=1,s.connect=function(u,m,g,T){oe(0),this.W=u,this.H=m||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.I=Hl(this,null,this.W),$s(this)};function ao(u){if(Ul(u),u.G==3){var m=u.U++,g=ee(u.I);if(xt(g,"SID",u.K),xt(g,"RID",m),xt(g,"TYPE","terminate"),ts(u,g),m=new Fn(u,u.j,m),m.L=2,m.v=Yr(ee(g)),g=!1,y.navigator&&y.navigator.sendBeacon)try{g=y.navigator.sendBeacon(m.v.toString(),"")}catch{}!g&&y.Image&&(new Image().src=m.v,g=!0),g||(m.g=ql(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Zt(m)}Bl(u)}function Xs(u){u.g&&(es(u),u.g.cancel(),u.g=null)}function Ul(u){Xs(u),u.u&&(y.clearTimeout(u.u),u.u=null),Zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&y.clearTimeout(u.s),u.s=null)}function $s(u){if(!Ja(u.h)&&!u.s){u.s=!0;var m=u.Ga;nt||D(),it||(nt(),it=!0),Dt.add(m,u),u.B=0}}function $c(u,m){return Ol(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wi(B(u.Ga,u,m),uo(u,u.B)),u.B++,!0)}s.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new Fn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=R(z),C(z,this.S)):z=this.S),this.m!==null||this.O||(U.H=z,z=null),this.P)t:{for(var m=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=g;break t}if(m===4096||g===this.i.length-1){m=g+1;break t}}m=1e3}else m=1e3;m=Ll(this,U,m),g=ee(this.I),xt(g,"RID",u),xt(g,"CVER",22),this.D&&xt(g,"X-HTTP-Session-Id",this.D),ts(this,g),z&&(this.O?m="headers="+encodeURIComponent(String(so(z)))+"&"+m:this.m&&be(g,this.m,z)),sr(this.h,U),this.Ua&&xt(g,"TYPE","init"),this.P?(xt(g,"$req",m),xt(g,"SID","null"),U.T=!0,Vn(U,g,null)):Vn(U,g,m),this.G=2}}else this.G==3&&(u?oo(this,u):this.i.length==0||Ja(this.h)||oo(this))};function oo(u,m){var g;m?g=m.l:g=u.U++;const T=ee(u.I);xt(T,"SID",u.K),xt(T,"RID",g),xt(T,"AID",u.T),ts(u,T),u.m&&u.o&&be(T,u.m,u.o),g=new Fn(u,u.j,g,u.B+1),u.m===null&&(g.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Ll(u,g,1e3),g.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sr(u.h,g),Vn(g,T,m)}function ts(u,m){u.H&&Ct(u.H,function(g,T){xt(m,T,g)}),u.l&&Kr({},function(g,T){xt(m,T,g)})}function Ll(u,m,g){g=Math.min(u.i.length,g);var T=u.l?B(u.l.Na,u.l,u):null;t:{var U=u.i;let z=-1;for(;;){const Z=["count="+g];z==-1?0<g?(z=U[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let Ot=!0;for(let ye=0;ye<g;ye++){let Nt=U[ye].g;const we=U[ye].map;if(Nt-=z,0>Nt)z=Math.max(0,U[ye].g-100),Ot=!1;else try{Qn(we,Z,"req"+Nt+"_")}catch{T&&T(we)}}if(Ot){T=Z.join("&");break t}}}return u=u.i.splice(0,g),m.D=u,T}function Pl(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;nt||D(),it||(nt(),it=!0),Dt.add(m,u),u.v=0}}function lo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wi(B(u.Fa,u),uo(u,u.v)),u.v++,!0)}s.Fa=function(){if(this.u=null,zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wi(B(this.ab,this),u)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),Xs(this),zl(this))};function es(u){u.A!=null&&(y.clearTimeout(u.A),u.A=null)}function zl(u){u.g=new Fn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=ee(u.qa);xt(m,"RID","rpc"),xt(m,"SID",u.K),xt(m,"AID",u.T),xt(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&xt(m,"TO",u.ja),xt(m,"TYPE","xmlhttp"),ts(u,m),u.m&&u.o&&be(m,u.m,u.o),u.L&&(u.g.I=u.L);var g=u.g;u=u.ia,g.L=1,g.v=Yr(ee(m)),g.m=null,g.P=!0,fi(g,u)}s.Za=function(){this.C!=null&&(this.C=null,Xs(this),lo(this),oe(19))};function Zs(u){u.C!=null&&(y.clearTimeout(u.C),u.C=null)}function jl(u,m){var g=null;if(u.g==m){Zs(u),es(u),u.g=null;var T=2}else if(rr(u.h,m))g=m.D,yn(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){g=m.m?m.m.length:0,m=Date.now()-m.F;var U=u.B;T=Ps(),Ae(T,new Cl(T,g)),$s(u)}else Pl(u);else if(U=m.s,U==3||U==0&&0<m.X||!(T==1&&$c(u,m)||T==2&&lo(u)))switch(g&&0<g.length&&(m=u.h,m.i=m.i.concat(g)),U){case 1:vi(u,5);break;case 4:vi(u,10);break;case 3:vi(u,6);break;default:vi(u,2)}}}function uo(u,m){let g=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(g*=2),g*m}function vi(u,m){if(u.j.info("Error code "+m),m==2){var g=B(u.fb,u),T=u.Xa;const U=!T;T=new di(T||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||ar(T,"https"),Yr(T),U?kl(T.toString(),g):Xr(T.toString(),g)}else oe(2);u.G=0,u.l&&u.l.sa(m),Bl(u),Ul(u)}s.fb=function(u){u?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const m=Xe(u.h);(m.length!=0||u.i.length!=0)&&(et(u.ka,m),et(u.ka,u.i),u.h.i.length=0,lt(u.i),u.i.length=0),u.l.ra()}}function Hl(u,m,g){var T=g instanceof di?ee(g):new di(g);if(T.g!="")m&&(T.g=m+"."+T.g),Qr(T,T.s);else{var U=y.location;T=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var z=new di(null);T&&ar(z,T),m&&(z.g=m),U&&Qr(z,U),g&&(z.l=g),T=z}return g=u.D,m=u.ya,g&&m&&xt(T,g,m),xt(T,"VER",u.la),ts(u,T),T}function ql(u,m,g){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new zt(new lr({eb:g})):new zt(u.pa),m.Ha(u.J),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}s=Gl.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Ws(){}Ws.prototype.g=function(u,m){return new $e(u,m)};function $e(u,m){ge.call(this),this.g=new Ys(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!ft(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!ft(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Zn(this)}X($e,ge),$e.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){ao(this.g)},$e.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var g={};g.__data__=u,u=g}else this.u&&(g={},g.__data__=Qa(u),u=g);m.i.push(new Gc(m.Ya++,u)),m.G==3&&$s(m)},$e.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,$e.aa.N.call(this)};function Fl(u){Xi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){t:{for(const g in m){u=g;break t}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}X(Fl,Xi);function Kl(){kn.call(this),this.status=1}X(Kl,kn);function Zn(u){this.g=u}X(Zn,Gl),Zn.prototype.ua=function(){Ae(this.g,"a")},Zn.prototype.ta=function(u){Ae(this.g,new Fl(u))},Zn.prototype.sa=function(u){Ae(this.g,new Kl)},Zn.prototype.ra=function(){Ae(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,s_=function(){return new Ws},r_=function(){return Ps()},i_=pn,hd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pe.NO_ERROR=0,pe.TIMEOUT=8,pe.HTTP_ERROR=6,Ju=pe,hi.COMPLETE="complete",n_=hi,Rl.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Jo=Rl,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,e_=zt}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});const xy="@firebase/firestore",Uy="4.7.9";/**
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
 */class Ge{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Ha="11.4.0";/**
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
 */const Cs=new Cc("@firebase/firestore");function wa(){return Cs.logLevel}function at(s,...t){if(Cs.logLevel<=Rt.DEBUG){const i=t.map(kd);Cs.debug(`Firestore (${Ha}): ${s}`,...i)}}function Is(s,...t){if(Cs.logLevel<=Rt.ERROR){const i=t.map(kd);Cs.error(`Firestore (${Ha}): ${s}`,...i)}}function Ic(s,...t){if(Cs.logLevel<=Rt.WARN){const i=t.map(kd);Cs.warn(`Firestore (${Ha}): ${s}`,...i)}}function kd(s){if(typeof s=="string")return s;try{/**
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
*/return function(i){return JSON.stringify(i)}(s)}catch{return s}}/**
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
 */function wt(s="Unexpected state"){const t=`FIRESTORE (${Ha}) INTERNAL ASSERTION FAILED: `+s;throw Is(t),new Error(t)}function ae(s,t){s||wt()}function Xt(s,t){return s}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class dt extends Fi{constructor(t,i){super(t,i),this.code=t,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ss{constructor(){this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}}/**
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
 */class a_{constructor(t,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class TS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,i){t.enqueueRetryable(()=>i(Ge.UNAUTHENTICATED))}shutdown(){}}class AS{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,i){this.changeListener=i,t.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class SS{constructor(t){this.t=t,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,i){ae(this.o===void 0);let a=this.i;const l=v=>this.i!==a?(a=this.i,i(v)):Promise.resolve();let h=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Ss,t.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const v=h;t.enqueueRetryable(async()=>{await v.promise,await l(this.currentUser)})},y=v=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(v=>y(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?y(v):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Ss)}},0),d()}getToken(){const t=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==t?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ae(typeof a.accessToken=="string"),new a_(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ae(t===null||typeof t=="string"),new Ge(t)}}class bS{constructor(t,i,a){this.l=t,this.h=i,this.P=a,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class wS{constructor(t,i,a){this.l=t,this.h=i,this.P=a}getToken(){return Promise.resolve(new bS(this.l,this.h,this.P))}start(t,i){t.enqueueRetryable(()=>i(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ly{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RS{constructor(t,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,si(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,i){ae(this.o===void 0);const a=h=>{h.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.R;return this.R=h.token,at("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{t.enqueueRetryable(()=>a(h))};const l=h=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?l(h):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Ly(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(i=>i?(ae(typeof i.token=="string"),this.R=i.token,new Ly(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function CS(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class o_{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=CS(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=t.charAt(l[h]%62))}return a}}function Bt(s,t){return s<t?-1:s>t?1:0}function ka(s,t,i){return s.length===t.length&&s.every((a,l)=>i(a,t[l]))}/**
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
 */const Py=-62135596800,zy=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(t){return Ne.fromMillis(t.getTime())}static fromMillis(t){const i=Math.floor(t/1e3),a=Math.floor((t-1e3*i)*zy);return new Ne(i,a)}constructor(t,i){if(this.seconds=t,this.nanoseconds=i,i<0)throw new dt(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new dt(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(t<Py)throw new dt(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new dt(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zy}_compareTo(t){return this.seconds===t.seconds?Bt(this.nanoseconds,t.nanoseconds):Bt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Py;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class $t{static fromTimestamp(t){return new $t(t)}static min(){return new $t(new Ne(0,0))}static max(){return new $t(new Ne(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jy="__name__";class ri{constructor(t,i,a){i===void 0?i=0:i>t.length&&wt(),a===void 0?a=t.length-i:a>t.length-i&&wt(),this.segments=t,this.offset=i,this.len=a}get length(){return this.len}isEqual(t){return ri.comparator(this,t)===0}child(t){const i=this.segments.slice(this.offset,this.limit());return t instanceof ri?t.forEach(a=>{i.push(a)}):i.push(t),this.construct(i)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==t.get(i))return!1;return!0}forEach(t){for(let i=this.offset,a=this.limit();i<a;i++)t(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,i){const a=Math.min(t.length,i.length);for(let l=0;l<a;l++){const h=ri.compareSegments(t.get(l),i.get(l));if(h!==0)return h}return Math.sign(t.length-i.length)}static compareSegments(t,i){const a=ri.isNumericId(t),l=ri.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ri.extractNumericId(t).compare(ri.extractNumericId(i)):t<i?-1:t>i?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Md.fromString(t.substring(4,t.length-2))}}class se extends ri{construct(t,i,a){return new se(t,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const i=[];for(const a of t){if(a.indexOf("//")>=0)throw new dt(Y.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new se(i)}static emptyPath(){return new se([])}}const IS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends ri{construct(t,i,a){return new Pe(t,i,a)}static isValidIdentifier(t){return IS.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jy}static keyField(){return new Pe([jy])}static fromServerFormat(t){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new dt(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<t.length;){const y=t[l];if(y==="\\"){if(l+1===t.length)throw new dt(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const v=t[l+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new dt(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=v,l+=2}else y==="`"?(d=!d,l++):y!=="."||d?(a+=y,l++):(h(),l++)}if(h(),d)throw new dt(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pe(i)}static emptyPath(){return new Pe([])}}/**
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
 */class Et{constructor(t){this.path=t}static fromPath(t){return new Et(se.fromString(t))}static fromName(t){return new Et(se.fromString(t).popFirst(5))}static empty(){return new Et(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&se.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,i){return se.comparator(t.path,i.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Et(new se(t.slice()))}}/**
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
 */const ol=-1;function DS(s,t){const i=s.toTimestamp().seconds,a=s.toTimestamp().nanoseconds+1,l=$t.fromTimestamp(a===1e9?new Ne(i+1,0):new Ne(i,a));return new Pr(l,Et.empty(),t)}function OS(s){return new Pr(s.readTime,s.key,ol)}class Pr{constructor(t,i,a){this.readTime=t,this.documentKey=i,this.largestBatchId=a}static min(){return new Pr($t.min(),Et.empty(),ol)}static max(){return new Pr($t.max(),Et.empty(),ol)}}function NS(s,t){let i=s.readTime.compareTo(t.readTime);return i!==0?i:(i=Et.comparator(s.documentKey,t.documentKey),i!==0?i:Bt(s.largestBatchId,t.largestBatchId))}/**
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
 */const MS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Vd(s){if(s.code!==Y.FAILED_PRECONDITION||s.message!==MS)throw s;at("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(t){return this.next(void 0,t)}next(t,i){return this.callbackAttached&&wt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(t,this.result):new F((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(t,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}})}toPromise(){return new Promise((t,i)=>{this.next(t,i)})}wrapUserFunction(t){try{const i=t();return i instanceof F?i:F.resolve(i)}catch(i){return F.reject(i)}}wrapSuccess(t,i){return t?this.wrapUserFunction(()=>t(i)):F.resolve(i)}wrapFailure(t,i){return t?this.wrapUserFunction(()=>t(i)):F.reject(i)}static resolve(t){return new F((i,a)=>{i(t)})}static reject(t){return new F((i,a)=>{a(t)})}static waitFor(t){return new F((i,a)=>{let l=0,h=0,d=!1;t.forEach(y=>{++l,y.next(()=>{++h,d&&h===l&&i()},v=>a(v))}),d=!0,h===l&&i()})}static or(t){let i=F.resolve(!1);for(const a of t)i=i.next(l=>l?F.resolve(l):a());return i}static forEach(t,i){const a=[];return t.forEach((l,h)=>{a.push(i.call(this,l,h))}),this.waitFor(a)}static mapArray(t,i){return new F((a,l)=>{const h=t.length,d=new Array(h);let y=0;for(let v=0;v<h;v++){const _=v;i(t[_]).next(I=>{d[_]=I,++y,y===h&&a(d)},I=>l(I))}})}static doWhile(t,i){return new F((a,l)=>{const h=()=>{t()===!0?i().next(()=>{h()},l):a()};h()})}}function VS(s){const t=s.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function gl(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class xd{constructor(t,i){this.previousValue=t,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}xd.ae=-1;/**
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
 */const Ud=-1;function Ld(s){return s==null}function uc(s){return s===0&&1/s==-1/0}function xS(s){return typeof s=="number"&&Number.isInteger(s)&&!uc(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const l_="";function US(s){let t="";for(let i=0;i<s.length;i++)t.length>0&&(t=By(t)),t=LS(s.get(i),t);return By(t)}function LS(s,t){let i=t;const a=s.length;for(let l=0;l<a;l++){const h=s.charAt(l);switch(h){case"\0":i+="";break;case l_:i+="";break;default:i+=h}}return i}function By(s){return s+l_+""}/**
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
 */function Hy(s){let t=0;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t++;return t}function qa(s,t){for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&t(i,s[i])}function u_(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
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
 */class an{constructor(t,i){this.comparator=t,this.root=i||Ue.EMPTY}insert(t,i){return new an(this.comparator,this.root.insert(t,i,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(t){return new an(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(t){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(t,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(t){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(t,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((i,a)=>(t(i,a),!1))}toString(){const t=[];return this.inorderTraversal((i,a)=>(t.push(`${i}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fu(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fu(this.root,t,this.comparator,!0)}}class Fu{constructor(t,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!t.isEmpty();)if(h=i?a(t.key,i):1,i&&l&&(h*=-1),h<0)t=this.isReverse?t.left:t.right;else{if(h===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const i={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ue{constructor(t,i,a,l,h){this.key=t,this.value=i,this.color=a??Ue.RED,this.left=l??Ue.EMPTY,this.right=h??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,i,a,l,h){return new Ue(t??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let l=this;const h=a(t,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(t,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(t,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,i){let a,l=this;if(i(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(t,l.key)===0){if(l.right.isEmpty())return Ue.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw wt();const t=this.left.check();if(t!==this.right.check())throw wt();return t+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw wt()}get value(){throw wt()}get color(){throw wt()}get left(){throw wt()}get right(){throw wt()}copy(t,i,a,l,h){return this}insert(t,i,a){return new Ue(t,i)}remove(t,i){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(t){this.comparator=t,this.data=new an(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((i,a)=>(t(i),!1))}forEachInRange(t,i){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,t[1])>=0)return;i(l.key)}}forEachWhile(t,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const i=this.data.getIteratorFrom(t);return i.hasNext()?i.getNext().key:null}getIterator(){return new qy(this.data.getIterator())}getIteratorFrom(t){return new qy(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let i=this;return i.size<t.size&&(i=t,t=this),t.forEach(a=>{i=i.add(a)}),i}isEqual(t){if(!(t instanceof ze)||this.size!==t.size)return!1;const i=this.data.getIterator(),a=t.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(i=>{t.push(i)}),t}toString(){const t=[];return this.forEach(i=>t.push(i)),"SortedSet("+t.toString()+")"}copy(t){const i=new ze(this.comparator);return i.data=t,i}}class qy{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bn{constructor(t){this.fields=t,t.sort(Pe.comparator)}static empty(){return new Bn([])}unionWith(t){let i=new ze(Pe.comparator);for(const a of this.fields)i=i.add(a);for(const a of t)i=i.add(a);return new Bn(i.toArray())}covers(t){for(const i of this.fields)if(i.isPrefixOf(t))return!0;return!1}isEqual(t){return ka(this.fields,t.fields,(i,a)=>i.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ai{constructor(t){this.binaryString=t}static fromBase64String(t){const i=function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new PS("Invalid base64 string: "+h):h}}(t);return new ai(i)}static fromUint8Array(t){const i=function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h}(t);return new ai(i)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Bt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ai.EMPTY_BYTE_STRING=new ai("");const zS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(s){if(ae(!!s),typeof s=="string"){let t=0;const i=zS.exec(s);if(ae(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),t=Number(l)}const a=new Date(s);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:Le(s.seconds),nanos:Le(s.nanos)}}function Le(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Va(s){return typeof s=="string"?ai.fromBase64String(s):ai.fromUint8Array(s)}/**
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
 */const c_="server_timestamp",h_="__type__",f_="__previous_value__",d_="__local_write_time__";function Pd(s){var t,i;return((i=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{})[h_])===null||i===void 0?void 0:i.stringValue)===c_}function zd(s){const t=s.mapValue.fields[f_];return Pd(t)?zd(t):t}function cc(s){const t=Ds(s.mapValue.fields[d_].timestampValue);return new Ne(t.seconds,t.nanos)}/**
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
 */class jS{constructor(t,i,a,l,h,d,y,v,_){this.databaseId=t,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=y,this.longPollingOptions=v,this.useFetchStreams=_}}const hc="(default)";class fc{constructor(t,i){this.projectId=t,this.database=i||hc}static empty(){return new fc("","")}get isDefaultDatabase(){return this.database===hc}isEqual(t){return t instanceof fc&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const m_="__type__",BS="__max__",Ku={mapValue:{}},g_="__vector__",fd="value";function Os(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Pd(s)?4:qS(s)?9007199254740991:HS(s)?10:11:wt()}function oi(s,t){if(s===t)return!0;const i=Os(s);if(i!==Os(t))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return cc(s).isEqual(cc(t));case 3:return function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=Ds(l.timestampValue),y=Ds(h.timestampValue);return d.seconds===y.seconds&&d.nanos===y.nanos}(s,t);case 5:return s.stringValue===t.stringValue;case 6:return function(l,h){return Va(l.bytesValue).isEqual(Va(h.bytesValue))}(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return function(l,h){return Le(l.geoPointValue.latitude)===Le(h.geoPointValue.latitude)&&Le(l.geoPointValue.longitude)===Le(h.geoPointValue.longitude)}(s,t);case 2:return function(l,h){if("integerValue"in l&&"integerValue"in h)return Le(l.integerValue)===Le(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=Le(l.doubleValue),y=Le(h.doubleValue);return d===y?uc(d)===uc(y):isNaN(d)&&isNaN(y)}return!1}(s,t);case 9:return ka(s.arrayValue.values||[],t.arrayValue.values||[],oi);case 10:case 11:return function(l,h){const d=l.mapValue.fields||{},y=h.mapValue.fields||{};if(Hy(d)!==Hy(y))return!1;for(const v in d)if(d.hasOwnProperty(v)&&(y[v]===void 0||!oi(d[v],y[v])))return!1;return!0}(s,t);default:return wt()}}function ll(s,t){return(s.values||[]).find(i=>oi(i,t))!==void 0}function xa(s,t){if(s===t)return 0;const i=Os(s),a=Os(t);if(i!==a)return Bt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Bt(s.booleanValue,t.booleanValue);case 2:return function(h,d){const y=Le(h.integerValue||h.doubleValue),v=Le(d.integerValue||d.doubleValue);return y<v?-1:y>v?1:y===v?0:isNaN(y)?isNaN(v)?0:-1:1}(s,t);case 3:return Gy(s.timestampValue,t.timestampValue);case 4:return Gy(cc(s),cc(t));case 5:return Bt(s.stringValue,t.stringValue);case 6:return function(h,d){const y=Va(h),v=Va(d);return y.compareTo(v)}(s.bytesValue,t.bytesValue);case 7:return function(h,d){const y=h.split("/"),v=d.split("/");for(let _=0;_<y.length&&_<v.length;_++){const I=Bt(y[_],v[_]);if(I!==0)return I}return Bt(y.length,v.length)}(s.referenceValue,t.referenceValue);case 8:return function(h,d){const y=Bt(Le(h.latitude),Le(d.latitude));return y!==0?y:Bt(Le(h.longitude),Le(d.longitude))}(s.geoPointValue,t.geoPointValue);case 9:return Fy(s.arrayValue,t.arrayValue);case 10:return function(h,d){var y,v,_,I;const V=h.fields||{},B=d.fields||{},$=(y=V[fd])===null||y===void 0?void 0:y.arrayValue,X=(v=B[fd])===null||v===void 0?void 0:v.arrayValue,lt=Bt(((_=$==null?void 0:$.values)===null||_===void 0?void 0:_.length)||0,((I=X==null?void 0:X.values)===null||I===void 0?void 0:I.length)||0);return lt!==0?lt:Fy($,X)}(s.mapValue,t.mapValue);case 11:return function(h,d){if(h===Ku.mapValue&&d===Ku.mapValue)return 0;if(h===Ku.mapValue)return 1;if(d===Ku.mapValue)return-1;const y=h.fields||{},v=Object.keys(y),_=d.fields||{},I=Object.keys(_);v.sort(),I.sort();for(let V=0;V<v.length&&V<I.length;++V){const B=Bt(v[V],I[V]);if(B!==0)return B;const $=xa(y[v[V]],_[I[V]]);if($!==0)return $}return Bt(v.length,I.length)}(s.mapValue,t.mapValue);default:throw wt()}}function Gy(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return Bt(s,t);const i=Ds(s),a=Ds(t),l=Bt(i.seconds,a.seconds);return l!==0?l:Bt(i.nanos,a.nanos)}function Fy(s,t){const i=s.values||[],a=t.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=xa(i[l],a[l]);if(h)return h}return Bt(i.length,a.length)}function Ua(s){return dd(s)}function dd(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(i){const a=Ds(i);return`time(${a.seconds},${a.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(i){return Va(i).toBase64()}(s.bytesValue):"referenceValue"in s?function(i){return Et.fromName(i).toString()}(s.referenceValue):"geoPointValue"in s?function(i){return`geo(${i.latitude},${i.longitude})`}(s.geoPointValue):"arrayValue"in s?function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=dd(h);return a+"]"}(s.arrayValue):"mapValue"in s?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${dd(i.fields[d])}`;return l+"}"}(s.mapValue):wt()}function tc(s){switch(Os(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zd(s);return t?16+tc(t):16;case 5:return 2*s.stringValue.length;case 6:return Va(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,h)=>l+tc(h),0)}(s.arrayValue);case 10:case 11:return function(a){let l=0;return qa(a.fields,(h,d)=>{l+=h.length+tc(d)}),l}(s.mapValue);default:throw wt()}}function md(s){return!!s&&"integerValue"in s}function jd(s){return!!s&&"arrayValue"in s}function ec(s){return!!s&&"mapValue"in s}function HS(s){var t,i;return((i=(((t=s==null?void 0:s.mapValue)===null||t===void 0?void 0:t.fields)||{})[m_])===null||i===void 0?void 0:i.stringValue)===g_}function tl(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const t={mapValue:{fields:{}}};return qa(s.mapValue.fields,(i,a)=>t.mapValue.fields[i]=tl(a)),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let i=0;i<(s.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=tl(s.arrayValue.values[i]);return t}return Object.assign({},s)}function qS(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===BS}/**
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
 */class jn{constructor(t){this.value=t}static empty(){return new jn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let i=this.value;for(let a=0;a<t.length-1;++a)if(i=(i.mapValue.fields||{})[t.get(a)],!ec(i))return null;return i=(i.mapValue.fields||{})[t.lastSegment()],i||null}}set(t,i){this.getFieldsMap(t.popLast())[t.lastSegment()]=tl(i)}setAll(t){let i=Pe.emptyPath(),a={},l=[];t.forEach((d,y)=>{if(!i.isImmediateParentOf(y)){const v=this.getFieldsMap(i);this.applyChanges(v,a,l),a={},l=[],i=y.popLast()}d?a[y.lastSegment()]=tl(d):l.push(y.lastSegment())});const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(t){const i=this.field(t.popLast());ec(i)&&i.mapValue.fields&&delete i.mapValue.fields[t.lastSegment()]}isEqual(t){return oi(this.value,t.value)}getFieldsMap(t){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<t.length;++a){let l=i.mapValue.fields[t.get(a)];ec(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[t.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(t,i,a){qa(i,(l,h)=>t[l]=h);for(const l of a)delete t[l]}clone(){return new jn(tl(this.value))}}function p_(s){const t=[];return qa(s.fields,(i,a)=>{const l=new Pe([i]);if(ec(a)){const h=p_(a.mapValue).fields;if(h.length===0)t.push(l);else for(const d of h)t.push(l.child(d))}else t.push(l)}),new Bn(t)}/**
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
 */class zn{constructor(t,i,a,l,h,d,y){this.key=t,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=y}static newInvalidDocument(t){return new zn(t,0,$t.min(),$t.min(),$t.min(),jn.empty(),0)}static newFoundDocument(t,i,a,l){return new zn(t,1,i,$t.min(),a,l,0)}static newNoDocument(t,i){return new zn(t,2,i,$t.min(),$t.min(),jn.empty(),0)}static newUnknownDocument(t,i){return new zn(t,3,i,$t.min(),$t.min(),jn.empty(),2)}convertToFoundDocument(t,i){return!this.createTime.isEqual($t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof zn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class dc{constructor(t,i){this.position=t,this.inclusive=i}}function Ky(s,t,i){let a=0;for(let l=0;l<s.position.length;l++){const h=t[l],d=s.position[l];if(h.field.isKeyField()?a=Et.comparator(Et.fromName(d.referenceValue),i.key):a=xa(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function Qy(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let i=0;i<s.position.length;i++)if(!oi(s.position[i],t.position[i]))return!1;return!0}/**
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
 */class mc{constructor(t,i="asc"){this.field=t,this.dir=i}}function GS(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
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
 */class y_{}class Oe extends y_{constructor(t,i,a){super(),this.field=t,this.op=i,this.value=a}static create(t,i,a){return t.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(t,i,a):new KS(t,i,a):i==="array-contains"?new XS(t,a):i==="in"?new $S(t,a):i==="not-in"?new ZS(t,a):i==="array-contains-any"?new WS(t,a):new Oe(t,i,a)}static createKeyFieldInFilter(t,i,a){return i==="in"?new QS(t,a):new YS(t,a)}matches(t){const i=t.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(xa(i,this.value)):i!==null&&Os(this.value)===Os(i)&&this.matchesComparison(xa(i,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return wt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends y_{constructor(t,i){super(),this.filters=t,this.op=i,this.ce=null}static create(t,i){return new zr(t,i)}matches(t){return v_(this)?this.filters.find(i=>!i.matches(t))===void 0:this.filters.find(i=>i.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,i)=>t.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function v_(s){return s.op==="and"}function __(s){return FS(s)&&v_(s)}function FS(s){for(const t of s.filters)if(t instanceof zr)return!1;return!0}function gd(s){if(s instanceof Oe)return s.field.canonicalString()+s.op.toString()+Ua(s.value);if(__(s))return s.filters.map(t=>gd(t)).join(",");{const t=s.filters.map(i=>gd(i)).join(",");return`${s.op}(${t})`}}function E_(s,t){return s instanceof Oe?function(a,l){return l instanceof Oe&&a.op===l.op&&a.field.isEqual(l.field)&&oi(a.value,l.value)}(s,t):s instanceof zr?function(a,l){return l instanceof zr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((h,d,y)=>h&&E_(d,l.filters[y]),!0):!1}(s,t):void wt()}function T_(s){return s instanceof Oe?function(i){return`${i.field.canonicalString()} ${i.op} ${Ua(i.value)}`}(s):s instanceof zr?function(i){return i.op.toString()+" {"+i.getFilters().map(T_).join(" ,")+"}"}(s):"Filter"}class KS extends Oe{constructor(t,i,a){super(t,i,a),this.key=Et.fromName(a.referenceValue)}matches(t){const i=Et.comparator(t.key,this.key);return this.matchesComparison(i)}}class QS extends Oe{constructor(t,i){super(t,"in",i),this.keys=A_("in",i)}matches(t){return this.keys.some(i=>i.isEqual(t.key))}}class YS extends Oe{constructor(t,i){super(t,"not-in",i),this.keys=A_("not-in",i)}matches(t){return!this.keys.some(i=>i.isEqual(t.key))}}function A_(s,t){var i;return(((i=t.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>Et.fromName(a.referenceValue))}class XS extends Oe{constructor(t,i){super(t,"array-contains",i)}matches(t){const i=t.data.field(this.field);return jd(i)&&ll(i.arrayValue,this.value)}}class $S extends Oe{constructor(t,i){super(t,"in",i)}matches(t){const i=t.data.field(this.field);return i!==null&&ll(this.value.arrayValue,i)}}class ZS extends Oe{constructor(t,i){super(t,"not-in",i)}matches(t){if(ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=t.data.field(this.field);return i!==null&&!ll(this.value.arrayValue,i)}}class WS extends Oe{constructor(t,i){super(t,"array-contains-any",i)}matches(t){const i=t.data.field(this.field);return!(!jd(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>ll(this.value.arrayValue,a))}}/**
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
 */class JS{constructor(t,i=null,a=[],l=[],h=null,d=null,y=null){this.path=t,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=y,this.le=null}}function Yy(s,t=null,i=[],a=[],l=null,h=null,d=null){return new JS(s,t,i,a,l,h,d)}function Bd(s){const t=Xt(s);if(t.le===null){let i=t.path.canonicalString();t.collectionGroup!==null&&(i+="|cg:"+t.collectionGroup),i+="|f:",i+=t.filters.map(a=>gd(a)).join(","),i+="|ob:",i+=t.orderBy.map(a=>function(h){return h.field.canonicalString()+h.dir}(a)).join(","),Ld(t.limit)||(i+="|l:",i+=t.limit),t.startAt&&(i+="|lb:",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Ua(a)).join(",")),t.endAt&&(i+="|ub:",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Ua(a)).join(",")),t.le=i}return t.le}function Hd(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<s.orderBy.length;i++)if(!GS(s.orderBy[i],t.orderBy[i]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let i=0;i<s.filters.length;i++)if(!E_(s.filters[i],t.filters[i]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!Qy(s.startAt,t.startAt)&&Qy(s.endAt,t.endAt)}/**
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
 */class Dc{constructor(t,i=null,a=[],l=[],h=null,d="F",y=null,v=null){this.path=t,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=y,this.endAt=v,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function tb(s,t,i,a,l,h,d,y){return new Dc(s,t,i,a,l,h,d,y)}function eb(s){return new Dc(s)}function Xy(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function nb(s){return s.collectionGroup!==null}function el(s){const t=Xt(s);if(t.he===null){t.he=[];const i=new Set;for(const h of t.explicitOrderBy)t.he.push(h),i.add(h.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(d){let y=new ze(Pe.comparator);return d.filters.forEach(v=>{v.getFlattenedFilters().forEach(_=>{_.isInequality()&&(y=y.add(_.field))})}),y})(t).forEach(h=>{i.has(h.canonicalString())||h.isKeyField()||t.he.push(new mc(h,a))}),i.has(Pe.keyField().canonicalString())||t.he.push(new mc(Pe.keyField(),a))}return t.he}function bs(s){const t=Xt(s);return t.Pe||(t.Pe=ib(t,el(s))),t.Pe}function ib(s,t){if(s.limitType==="F")return Yy(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map(l=>{const h=l.dir==="desc"?"asc":"desc";return new mc(l.field,h)});const i=s.endAt?new dc(s.endAt.position,s.endAt.inclusive):null,a=s.startAt?new dc(s.startAt.position,s.startAt.inclusive):null;return Yy(s.path,s.collectionGroup,t,s.filters,s.limit,i,a)}}function pd(s,t,i){return new Dc(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,i,s.startAt,s.endAt)}function S_(s,t){return Hd(bs(s),bs(t))&&s.limitType===t.limitType}function b_(s){return`${Bd(bs(s))}|lt:${s.limitType}`}function Wo(s){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>T_(l)).join(", ")}]`),Ld(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>Ua(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>Ua(l)).join(",")),`Target(${a})`}(bs(s))}; limitType=${s.limitType})`}function qd(s,t){return t.isFoundDocument()&&function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):Et.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)}(s,t)&&function(a,l){for(const h of el(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0}(s,t)&&function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0}(s,t)&&function(a,l){return!(a.startAt&&!function(d,y,v){const _=Ky(d,y,v);return d.inclusive?_<=0:_<0}(a.startAt,el(a),l)||a.endAt&&!function(d,y,v){const _=Ky(d,y,v);return d.inclusive?_>=0:_>0}(a.endAt,el(a),l))}(s,t)}function rb(s){return(t,i)=>{let a=!1;for(const l of el(s)){const h=sb(l,t,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function sb(s,t,i){const a=s.field.isKeyField()?Et.comparator(t.key,i.key):function(h,d,y){const v=d.data.field(h),_=y.data.field(h);return v!==null&&_!==null?xa(v,_):wt()}(s.field,t,i);switch(s.dir){case"asc":return a;case"desc":return-1*a;default:return wt()}}/**
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
 */class Ms{constructor(t,i){this.mapKeyFn=t,this.equalsFn=i,this.inner={},this.innerSize=0}get(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,t))return h}}has(t){return this.get(t)!==void 0}set(t,i){const a=this.mapKeyFn(t),l=this.inner[a];if(l===void 0)return this.inner[a]=[[t,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],t))return void(l[h]=[t,i]);l.push([t,i]),this.innerSize++}delete(t){const i=this.mapKeyFn(t),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],t))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(t){qa(this.inner,(i,a)=>{for(const[l,h]of a)t(l,h)})}isEmpty(){return u_(this.inner)}size(){return this.innerSize}}/**
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
 */const ab=new an(Et.comparator);function gc(){return ab}const w_=new an(Et.comparator);function Qu(...s){let t=w_;for(const i of s)t=t.insert(i.key,i);return t}function R_(s){let t=w_;return s.forEach((i,a)=>t=t.insert(i,a.overlayedDocument)),t}function Ts(){return nl()}function C_(){return nl()}function nl(){return new Ms(s=>s.toString(),(s,t)=>s.isEqual(t))}const ob=new an(Et.comparator),lb=new ze(Et.comparator);function Fe(...s){let t=lb;for(const i of s)t=t.add(i);return t}const ub=new ze(Bt);function cb(){return ub}/**
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
 */function Gd(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(t)?"-0":t}}function I_(s){return{integerValue:""+s}}function hb(s,t){return xS(t)?I_(t):Gd(s,t)}/**
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
 */class Oc{constructor(){this._=void 0}}function fb(s,t,i){return s instanceof pc?function(l,h){const d={fields:{[h_]:{stringValue:c_},[d_]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&Pd(h)&&(h=zd(h)),h&&(d.fields[f_]=h),{mapValue:d}}(i,t):s instanceof ul?O_(s,t):s instanceof cl?N_(s,t):function(l,h){const d=D_(l,h),y=$y(d)+$y(l.Ie);return md(d)&&md(l.Ie)?I_(y):Gd(l.serializer,y)}(s,t)}function db(s,t,i){return s instanceof ul?O_(s,t):s instanceof cl?N_(s,t):i}function D_(s,t){return s instanceof yc?function(a){return md(a)||function(h){return!!h&&"doubleValue"in h}(a)}(t)?t:{integerValue:0}:null}class pc extends Oc{}class ul extends Oc{constructor(t){super(),this.elements=t}}function O_(s,t){const i=M_(t);for(const a of s.elements)i.some(l=>oi(l,a))||i.push(a);return{arrayValue:{values:i}}}class cl extends Oc{constructor(t){super(),this.elements=t}}function N_(s,t){let i=M_(t);for(const a of s.elements)i=i.filter(l=>!oi(l,a));return{arrayValue:{values:i}}}class yc extends Oc{constructor(t,i){super(),this.serializer=t,this.Ie=i}}function $y(s){return Le(s.integerValue||s.doubleValue)}function M_(s){return jd(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function mb(s,t){return s.field.isEqual(t.field)&&function(a,l){return a instanceof ul&&l instanceof ul||a instanceof cl&&l instanceof cl?ka(a.elements,l.elements,oi):a instanceof yc&&l instanceof yc?oi(a.Ie,l.Ie):a instanceof pc&&l instanceof pc}(s.transform,t.transform)}class gb{constructor(t,i){this.version=t,this.transformResults=i}}class zi{constructor(t,i){this.updateTime=t,this.exists=i}static none(){return new zi}static exists(t){return new zi(void 0,t)}static updateTime(t){return new zi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function nc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Nc{}function k_(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new x_(s.key,zi.none()):new pl(s.key,s.data,zi.none());{const i=s.data,a=jn.empty();let l=new ze(Pe.comparator);for(let h of t.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new ks(s.key,a,new Bn(l.toArray()),zi.none())}}function pb(s,t,i){s instanceof pl?function(l,h,d){const y=l.value.clone(),v=Wy(l.fieldTransforms,h,d.transformResults);y.setAll(v),h.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(s,t,i):s instanceof ks?function(l,h,d){if(!nc(l.precondition,h))return void h.convertToUnknownDocument(d.version);const y=Wy(l.fieldTransforms,h,d.transformResults),v=h.data;v.setAll(V_(l)),v.setAll(y),h.convertToFoundDocument(d.version,v).setHasCommittedMutations()}(s,t,i):function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()}(0,t,i)}function il(s,t,i,a){return s instanceof pl?function(h,d,y,v){if(!nc(h.precondition,d))return y;const _=h.value.clone(),I=Jy(h.fieldTransforms,v,d);return _.setAll(I),d.convertToFoundDocument(d.version,_).setHasLocalMutations(),null}(s,t,i,a):s instanceof ks?function(h,d,y,v){if(!nc(h.precondition,d))return y;const _=Jy(h.fieldTransforms,v,d),I=d.data;return I.setAll(V_(h)),I.setAll(_),d.convertToFoundDocument(d.version,I).setHasLocalMutations(),y===null?null:y.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map(V=>V.field))}(s,t,i,a):function(h,d,y){return nc(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):y}(s,t,i)}function yb(s,t){let i=null;for(const a of s.fieldTransforms){const l=t.data.field(a.field),h=D_(a.transform,l||null);h!=null&&(i===null&&(i=jn.empty()),i.set(a.field,h))}return i||null}function Zy(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&ka(a,l,(h,d)=>mb(h,d))}(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class pl extends Nc{constructor(t,i,a,l=[]){super(),this.key=t,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class ks extends Nc{constructor(t,i,a,l,h=[]){super(),this.key=t,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function V_(s){const t=new Map;return s.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=s.data.field(i);t.set(i,a)}}),t}function Wy(s,t,i){const a=new Map;ae(s.length===i.length);for(let l=0;l<i.length;l++){const h=s[l],d=h.transform,y=t.data.field(h.field);a.set(h.field,db(d,y,i[l]))}return a}function Jy(s,t,i){const a=new Map;for(const l of s){const h=l.transform,d=i.data.field(l.field);a.set(l.field,fb(h,d,t))}return a}class x_ extends Nc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vb extends Nc{constructor(t,i){super(),this.key=t,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _b{constructor(t,i,a,l){this.batchId=t,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(t,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(t.key)&&pb(h,t,a[l])}}applyToLocalView(t,i){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(i=il(a,t,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(i=il(a,t,i,this.localWriteTime));return i}applyToLocalDocumentSet(t,i){const a=C_();return this.mutations.forEach(l=>{const h=t.get(l.key),d=h.overlayedDocument;let y=this.applyToLocalView(d,h.mutatedFields);y=i.has(l.key)?null:y;const v=k_(d,y);v!==null&&a.set(l.key,v),d.isValidDocument()||d.convertToNoDocument($t.min())}),a}keys(){return this.mutations.reduce((t,i)=>t.add(i.key),Fe())}isEqual(t){return this.batchId===t.batchId&&ka(this.mutations,t.mutations,(i,a)=>Zy(i,a))&&ka(this.baseMutations,t.baseMutations,(i,a)=>Zy(i,a))}}class Fd{constructor(t,i,a,l){this.batch=t,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(t,i,a){ae(t.mutations.length===a.length);let l=function(){return ob}();const h=t.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new Fd(t,i,a,l)}}/**
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
 */class Eb{constructor(t,i){this.largestBatchId=t,this.mutation=i}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var de,kt;function Tb(s){switch(s){case Y.OK:return wt();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return wt()}}function Ab(s){if(s===void 0)return Is("GRPC error has no .code"),Y.UNKNOWN;switch(s){case de.OK:return Y.OK;case de.CANCELLED:return Y.CANCELLED;case de.UNKNOWN:return Y.UNKNOWN;case de.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case de.INTERNAL:return Y.INTERNAL;case de.UNAVAILABLE:return Y.UNAVAILABLE;case de.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case de.NOT_FOUND:return Y.NOT_FOUND;case de.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case de.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case de.ABORTED:return Y.ABORTED;case de.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case de.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case de.DATA_LOSS:return Y.DATA_LOSS;default:return wt()}}(kt=de||(de={}))[kt.OK=0]="OK",kt[kt.CANCELLED=1]="CANCELLED",kt[kt.UNKNOWN=2]="UNKNOWN",kt[kt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",kt[kt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",kt[kt.NOT_FOUND=5]="NOT_FOUND",kt[kt.ALREADY_EXISTS=6]="ALREADY_EXISTS",kt[kt.PERMISSION_DENIED=7]="PERMISSION_DENIED",kt[kt.UNAUTHENTICATED=16]="UNAUTHENTICATED",kt[kt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",kt[kt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",kt[kt.ABORTED=10]="ABORTED",kt[kt.OUT_OF_RANGE=11]="OUT_OF_RANGE",kt[kt.UNIMPLEMENTED=12]="UNIMPLEMENTED",kt[kt.INTERNAL=13]="INTERNAL",kt[kt.UNAVAILABLE=14]="UNAVAILABLE",kt[kt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Md([4294967295,4294967295],0);class Sb{constructor(t,i){this.databaseId=t,this.useProto3Json=i}}function yd(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bb(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function wb(s,t){return yd(s,t.toTimestamp())}function Da(s){return ae(!!s),$t.fromTimestamp(function(i){const a=Ds(i);return new Ne(a.seconds,a.nanos)}(s))}function U_(s,t){return vd(s,t).canonicalString()}function vd(s,t){const i=function(l){return new se(["projects",l.projectId,"databases",l.database])}(s).child("documents");return t===void 0?i:i.child(t)}function Rb(s){const t=se.fromString(s);return ae(Vb(t)),t}function _d(s,t){return U_(s.databaseId,t.path)}function Cb(s){const t=Rb(s);return t.length===4?se.emptyPath():Db(t)}function Ib(s){return new se(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Db(s){return ae(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function tv(s,t,i){return{name:_d(s,t),fields:i.value.mapValue.fields}}function Ob(s,t){let i;if(t instanceof pl)i={update:tv(s,t.key,t.value)};else if(t instanceof x_)i={delete:_d(s,t.key)};else if(t instanceof ks)i={update:tv(s,t.key,t.data),updateMask:kb(t.fieldMask)};else{if(!(t instanceof vb))return wt();i={verify:_d(s,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(a=>function(h,d){const y=d.transform;if(y instanceof pc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(y instanceof ul)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:y.elements}};if(y instanceof cl)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:y.elements}};if(y instanceof yc)return{fieldPath:d.field.canonicalString(),increment:y.Ie};throw wt()}(0,a))),t.precondition.isNone||(i.currentDocument=function(l,h){return h.updateTime!==void 0?{updateTime:wb(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:wt()}(s,t.precondition)),i}function Nb(s,t){return s&&s.length>0?(ae(t!==void 0),s.map(i=>function(l,h){let d=l.updateTime?Da(l.updateTime):Da(h);return d.isEqual($t.min())&&(d=Da(h)),new gb(d,l.transformResults||[])}(i,t))):[]}function Mb(s){let t=Cb(s.parent);const i=s.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ae(a===1);const I=i.from[0];I.allDescendants?l=I.collectionId:t=t.child(I.collectionId)}let h=[];i.where&&(h=function(V){const B=L_(V);return B instanceof zr&&__(B)?B.getFilters():[B]}(i.where));let d=[];i.orderBy&&(d=function(V){return V.map(B=>function(X){return new mc(Ra(X.field),function(et){switch(et){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(B))}(i.orderBy));let y=null;i.limit&&(y=function(V){let B;return B=typeof V=="object"?V.value:V,Ld(B)?null:B}(i.limit));let v=null;i.startAt&&(v=function(V){const B=!!V.before,$=V.values||[];return new dc($,B)}(i.startAt));let _=null;return i.endAt&&(_=function(V){const B=!V.before,$=V.values||[];return new dc($,B)}(i.endAt)),tb(t,l,d,h,y,"F",v,_)}function L_(s){return s.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=Ra(i.unaryFilter.field);return Oe.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=Ra(i.unaryFilter.field);return Oe.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=Ra(i.unaryFilter.field);return Oe.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Ra(i.unaryFilter.field);return Oe.create(d,"!=",{nullValue:"NULL_VALUE"});default:return wt()}}(s):s.fieldFilter!==void 0?function(i){return Oe.create(Ra(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wt()}}(i.fieldFilter.op),i.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(i){return zr.create(i.compositeFilter.filters.map(a=>L_(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return wt()}}(i.compositeFilter.op))}(s):wt()}function Ra(s){return Pe.fromServerFormat(s.fieldPath)}function kb(s){const t=[];return s.fields.forEach(i=>t.push(i.canonicalString())),{fieldPaths:t}}function Vb(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class xb{constructor(t){this.Tt=t}}function Ub(s){const t=Mb({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?pd(t,t.limit,"L"):t}/**
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
 */class Lb{constructor(){this.Tn=new Pb}addToCollectionParentIndex(t,i){return this.Tn.add(i),F.resolve()}getCollectionParents(t,i){return F.resolve(this.Tn.getEntries(i))}addFieldIndex(t,i){return F.resolve()}deleteFieldIndex(t,i){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,i){return F.resolve()}getDocumentsMatchingTarget(t,i){return F.resolve(null)}getIndexType(t,i){return F.resolve(0)}getFieldIndexes(t,i){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,i){return F.resolve(Pr.min())}getMinOffsetFromCollectionGroup(t,i){return F.resolve(Pr.min())}updateCollectionGroup(t,i,a){return F.resolve()}updateIndexEntries(t,i){return F.resolve()}}class Pb{constructor(){this.index={}}add(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i]||new ze(se.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(t){const i=t.lastSegment(),a=t.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(t){return(this.index[t]||new ze(se.comparator)).toArray()}}/**
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
 */const ev={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P_=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,i,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(P_,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
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
 */class La{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new La(0)}static Un(){return new La(-1)}}/**
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
 */const nv="LruGarbageCollector",zb=1048576;function iv([s,t],[i,a]){const l=Bt(s,i);return l===0?Bt(t,a):l}class jb{constructor(t){this.Hn=t,this.buffer=new ze(iv),this.Jn=0}Yn(){return++this.Jn}Zn(t){const i=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();iv(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class Bb{constructor(t,i,a){this.garbageCollector=t,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){at(nv,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){gl(i)?at(nv,"Ignoring IndexedDB error during garbage collection: ",i):await Vd(i)}await this.er(3e5)})}}class Hb{constructor(t,i){this.tr=t,this.params=i}calculateTargetCount(t,i){return this.tr.nr(t).next(a=>Math.floor(i/100*a))}nthSequenceNumber(t,i){if(i===0)return F.resolve(xd.ae);const a=new jb(i);return this.tr.forEachTarget(t,l=>a.Zn(l.sequenceNumber)).next(()=>this.tr.rr(t,l=>a.Zn(l))).next(()=>a.maxValue)}removeTargets(t,i,a){return this.tr.removeTargets(t,i,a)}removeOrphanedDocuments(t,i){return this.tr.removeOrphanedDocuments(t,i)}collect(t,i){return this.params.cacheSizeCollectionThreshold===-1?(at("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(ev)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ev):this.ir(t,i))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,i){let a,l,h,d,y,v,_;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(V=>(V>this.params.maximumSequenceNumbersToCollect?(at("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${V}`),l=this.params.maximumSequenceNumbersToCollect):l=V,d=Date.now(),this.nthSequenceNumber(t,l))).next(V=>(a=V,y=Date.now(),this.removeTargets(t,a,i))).next(V=>(h=V,v=Date.now(),this.removeOrphanedDocuments(t,a))).next(V=>(_=Date.now(),wa()<=Rt.DEBUG&&at("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-I}ms
	Determined least recently used ${l} in `+(y-d)+`ms
	Removed ${h} targets in `+(v-y)+`ms
	Removed ${V} documents in `+(_-v)+`ms
Total Duration: ${_-I}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:V})))}}function qb(s,t){return new Hb(s,t)}/**
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
 */class Gb{constructor(){this.changes=new Ms(t=>t.toString(),(t,i)=>t.isEqual(i)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,i){this.assertNotApplied(),this.changes.set(t,zn.newInvalidDocument(t).setReadTime(i))}getEntry(t,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?F.resolve(a):this.getFromCache(t,i)}getEntries(t,i){return this.getAllFromCache(t,i)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Fb{constructor(t,i){this.overlayedDocument=t,this.mutatedFields=i}}/**
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
 */class Kb{constructor(t,i,a,l){this.remoteDocumentCache=t,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(t,i){let a=null;return this.documentOverlayCache.getOverlay(t,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(t,i))).next(l=>(a!==null&&il(a.mutation,l,Bn.empty(),Ne.now()),l))}getDocuments(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.getLocalViewOfDocuments(t,a,Fe()).next(()=>a))}getLocalViewOfDocuments(t,i,a=Fe()){const l=Ts();return this.populateOverlays(t,l,i).next(()=>this.computeViews(t,i,l,a).next(h=>{let d=Qu();return h.forEach((y,v)=>{d=d.insert(y,v.overlayedDocument)}),d}))}getOverlayedDocuments(t,i){const a=Ts();return this.populateOverlays(t,a,i).next(()=>this.computeViews(t,i,a,Fe()))}populateOverlays(t,i,a){const l=[];return a.forEach(h=>{i.has(h)||l.push(h)}),this.documentOverlayCache.getOverlays(t,l).next(h=>{h.forEach((d,y)=>{i.set(d,y)})})}computeViews(t,i,a,l){let h=gc();const d=nl(),y=function(){return nl()}();return i.forEach((v,_)=>{const I=a.get(_.key);l.has(_.key)&&(I===void 0||I.mutation instanceof ks)?h=h.insert(_.key,_):I!==void 0?(d.set(_.key,I.mutation.getFieldMask()),il(I.mutation,_,I.mutation.getFieldMask(),Ne.now())):d.set(_.key,Bn.empty())}),this.recalculateAndSaveOverlays(t,h).next(v=>(v.forEach((_,I)=>d.set(_,I)),i.forEach((_,I)=>{var V;return y.set(_,new Fb(I,(V=d.get(_))!==null&&V!==void 0?V:null))}),y))}recalculateAndSaveOverlays(t,i){const a=nl();let l=new an((d,y)=>d-y),h=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,i).next(d=>{for(const y of d)y.keys().forEach(v=>{const _=i.get(v);if(_===null)return;let I=a.get(v)||Bn.empty();I=y.applyToLocalView(_,I),a.set(v,I);const V=(l.get(y.batchId)||Fe()).add(v);l=l.insert(y.batchId,V)})}).next(()=>{const d=[],y=l.getReverseIterator();for(;y.hasNext();){const v=y.getNext(),_=v.key,I=v.value,V=C_();I.forEach(B=>{if(!h.has(B)){const $=k_(i.get(B),a.get(B));$!==null&&V.set(B,$),h=h.add(B)}}),d.push(this.documentOverlayCache.saveOverlays(t,_,V))}return F.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,i){return this.remoteDocumentCache.getEntries(t,i).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,i,a,l){return function(d){return Et.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(t,i.path):nb(i)?this.getDocumentsMatchingCollectionGroupQuery(t,i,a,l):this.getDocumentsMatchingCollectionQuery(t,i,a,l)}getNextDocuments(t,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,i,a,l).next(h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,i,a.largestBatchId,l-h.size):F.resolve(Ts());let y=ol,v=h;return d.next(_=>F.forEach(_,(I,V)=>(y<V.largestBatchId&&(y=V.largestBatchId),h.get(I)?F.resolve():this.remoteDocumentCache.getEntry(t,I).next(B=>{v=v.insert(I,B)}))).next(()=>this.populateOverlays(t,_,h)).next(()=>this.computeViews(t,v,_,Fe())).next(I=>({batchId:y,changes:R_(I)})))})}getDocumentsMatchingDocumentQuery(t,i){return this.getDocument(t,new Et(i)).next(a=>{let l=Qu();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(t,i,a,l){const h=i.collectionGroup;let d=Qu();return this.indexManager.getCollectionParents(t,h).next(y=>F.forEach(y,v=>{const _=function(V,B){return new Dc(B,null,V.explicitOrderBy.slice(),V.filters.slice(),V.limit,V.limitType,V.startAt,V.endAt)}(i,v.child(h));return this.getDocumentsMatchingCollectionQuery(t,_,a,l).next(I=>{I.forEach((V,B)=>{d=d.insert(V,B)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(t,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(t,i.path,a.largestBatchId).next(d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(t,i,a,h,l))).next(d=>{h.forEach((v,_)=>{const I=_.getKey();d.get(I)===null&&(d=d.insert(I,zn.newInvalidDocument(I)))});let y=Qu();return d.forEach((v,_)=>{const I=h.get(v);I!==void 0&&il(I.mutation,_,Bn.empty(),Ne.now()),qd(i,_)&&(y=y.insert(v,_))}),y})}}/**
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
 */class Qb{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,i){return F.resolve(this.dr.get(i))}saveBundleMetadata(t,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Da(l.createTime)}}(i)),F.resolve()}getNamedQuery(t,i){return F.resolve(this.Ar.get(i))}saveNamedQuery(t,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:Ub(l.bundledQuery),readTime:Da(l.readTime)}}(i)),F.resolve()}}/**
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
 */class Yb{constructor(){this.overlays=new an(Et.comparator),this.Rr=new Map}getOverlay(t,i){return F.resolve(this.overlays.get(i))}getOverlays(t,i){const a=Ts();return F.forEach(i,l=>this.getOverlay(t,l).next(h=>{h!==null&&a.set(l,h)})).next(()=>a)}saveOverlays(t,i,a){return a.forEach((l,h)=>{this.Et(t,i,h)}),F.resolve()}removeOverlaysForBatchId(t,i,a){const l=this.Rr.get(a);return l!==void 0&&(l.forEach(h=>this.overlays=this.overlays.remove(h)),this.Rr.delete(a)),F.resolve()}getOverlaysForCollection(t,i,a){const l=Ts(),h=i.length+1,d=new Et(i.child("")),y=this.overlays.getIteratorFrom(d);for(;y.hasNext();){const v=y.getNext().value,_=v.getKey();if(!i.isPrefixOf(_.path))break;_.path.length===h&&v.largestBatchId>a&&l.set(v.getKey(),v)}return F.resolve(l)}getOverlaysForCollectionGroup(t,i,a,l){let h=new an((_,I)=>_-I);const d=this.overlays.getIterator();for(;d.hasNext();){const _=d.getNext().value;if(_.getKey().getCollectionGroup()===i&&_.largestBatchId>a){let I=h.get(_.largestBatchId);I===null&&(I=Ts(),h=h.insert(_.largestBatchId,I)),I.set(_.getKey(),_)}}const y=Ts(),v=h.getIterator();for(;v.hasNext()&&(v.getNext().value.forEach((_,I)=>y.set(_,I)),!(y.size()>=l)););return F.resolve(y)}Et(t,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Rr.get(l.largestBatchId).delete(a.key);this.Rr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new Eb(i,a));let h=this.Rr.get(i);h===void 0&&(h=Fe(),this.Rr.set(i,h)),this.Rr.set(i,h.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(){this.sessionToken=ai.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,i){return this.sessionToken=i,F.resolve()}}/**
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
 */class Kd{constructor(){this.Vr=new ze(De.mr),this.gr=new ze(De.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,i){const a=new De(t,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,i){t.forEach(a=>this.addReference(a,i))}removeReference(t,i){this.wr(new De(t,i))}br(t,i){t.forEach(a=>this.removeReference(a,i))}Sr(t){const i=new Et(new se([])),a=new De(i,t),l=new De(i,t+1),h=[];return this.gr.forEachInRange([a,l],d=>{this.wr(d),h.push(d.key)}),h}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const i=new Et(new se([])),a=new De(i,t),l=new De(i,t+1);let h=Fe();return this.gr.forEachInRange([a,l],d=>{h=h.add(d.key)}),h}containsKey(t){const i=new De(t,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&t.isEqual(a.key)}}class De{constructor(t,i){this.key=t,this.Cr=i}static mr(t,i){return Et.comparator(t.key,i.key)||Bt(t.Cr,i.Cr)}static pr(t,i){return Bt(t.Cr,i.Cr)||Et.comparator(t.key,i.key)}}/**
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
 */class $b{constructor(t,i){this.indexManager=t,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new ze(De.mr)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,i,a,l){const h=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new _b(h,i,a,l);this.mutationQueue.push(d);for(const y of l)this.Mr=this.Mr.add(new De(y.key,h)),this.indexManager.addToCollectionParentIndex(t,y.key.path.popLast());return F.resolve(d)}lookupMutationBatch(t,i){return F.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(t,i){const a=i+1,l=this.Nr(a),h=l<0?0:l;return F.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Ud:this.Fr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,i){const a=new De(i,0),l=new De(i,Number.POSITIVE_INFINITY),h=[];return this.Mr.forEachInRange([a,l],d=>{const y=this.Or(d.Cr);h.push(y)}),F.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(t,i){let a=new ze(Bt);return i.forEach(l=>{const h=new De(l,0),d=new De(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([h,d],y=>{a=a.add(y.Cr)})}),F.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,i){const a=i.path,l=a.length+1;let h=a;Et.isDocumentKey(h)||(h=h.child(""));const d=new De(new Et(h),0);let y=new ze(Bt);return this.Mr.forEachWhile(v=>{const _=v.key.path;return!!a.isPrefixOf(_)&&(_.length===l&&(y=y.add(v.Cr)),!0)},d),F.resolve(this.Br(y))}Br(t){const i=[];return t.forEach(a=>{const l=this.Or(a);l!==null&&i.push(l)}),i}removeMutationBatch(t,i){ae(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return F.forEach(i.mutations,l=>{const h=new De(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,i){const a=new De(i,0),l=this.Mr.firstAfterOrEqual(a);return F.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Lr(t,i){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const i=this.Nr(t);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class Zb{constructor(t){this.kr=t,this.docs=function(){return new an(Et.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const i=this.docs.get(t);i&&(this.docs=this.docs.remove(t),this.size-=i.size)}getEntry(t,i){const a=this.docs.get(i);return F.resolve(a?a.document.mutableCopy():zn.newInvalidDocument(i))}getEntries(t,i){let a=gc();return i.forEach(l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():zn.newInvalidDocument(l))}),F.resolve(a)}getDocumentsMatchingQuery(t,i,a,l){let h=gc();const d=i.path,y=new Et(d.child("__id-9223372036854775808__")),v=this.docs.getIteratorFrom(y);for(;v.hasNext();){const{key:_,value:{document:I}}=v.getNext();if(!d.isPrefixOf(_.path))break;_.path.length>d.length+1||NS(OS(I),a)<=0||(l.has(I.key)||qd(i,I))&&(h=h.insert(I.key,I.mutableCopy()))}return F.resolve(h)}getAllFromCollectionGroup(t,i,a,l){wt()}qr(t,i){return F.forEach(this.docs,a=>i(a))}newChangeBuffer(t){return new Wb(this)}getSize(t){return F.resolve(this.size)}}class Wb extends Gb{constructor(t){super(),this.Ir=t}applyChanges(t){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(t,l)):this.Ir.removeEntry(a)}),F.waitFor(i)}getFromCache(t,i){return this.Ir.getEntry(t,i)}getAllFromCache(t,i){return this.Ir.getEntries(t,i)}}/**
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
 */class Jb{constructor(t){this.persistence=t,this.Qr=new Ms(i=>Bd(i),Hd),this.lastRemoteSnapshotVersion=$t.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Kd,this.targetCount=0,this.Ur=La.Kn()}forEachTarget(t,i){return this.Qr.forEach((a,l)=>i(l)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),F.resolve()}zn(t){this.Qr.set(t.target,t);const i=t.targetId;i>this.highestTargetId&&(this.Ur=new La(i),this.highestTargetId=i),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,i){return this.zn(i),this.targetCount+=1,F.resolve()}updateTargetData(t,i){return this.zn(i),F.resolve()}removeTargetData(t,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,i,a){let l=0;const h=[];return this.Qr.forEach((d,y)=>{y.sequenceNumber<=i&&a.get(y.targetId)===null&&(this.Qr.delete(d),h.push(this.removeMatchingKeysForTargetId(t,y.targetId)),l++)}),F.waitFor(h).next(()=>l)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,i){const a=this.Qr.get(i)||null;return F.resolve(a)}addMatchingKeys(t,i,a){return this.Kr.yr(i,a),F.resolve()}removeMatchingKeys(t,i,a){this.Kr.br(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach(d=>{h.push(l.markPotentiallyOrphaned(t,d))}),F.waitFor(h)}removeMatchingKeysForTargetId(t,i){return this.Kr.Sr(i),F.resolve()}getMatchingKeysForTargetId(t,i){const a=this.Kr.vr(i);return F.resolve(a)}containsKey(t,i){return F.resolve(this.Kr.containsKey(i))}}/**
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
 */class z_{constructor(t,i){this.Wr={},this.overlays={},this.Gr=new xd(0),this.zr=!1,this.zr=!0,this.jr=new Xb,this.referenceDelegate=t(this),this.Hr=new Jb(this),this.indexManager=new Lb,this.remoteDocumentCache=function(l){return new Zb(l)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new xb(i),this.Yr=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let i=this.overlays[t.toKey()];return i||(i=new Yb,this.overlays[t.toKey()]=i),i}getMutationQueue(t,i){let a=this.Wr[t.toKey()];return a||(a=new $b(i,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,i,a){at("MemoryPersistence","Starting transaction:",t);const l=new tw(this.Gr.next());return this.referenceDelegate.Zr(),a(l).next(h=>this.referenceDelegate.Xr(l).next(()=>h)).toPromise().then(h=>(l.raiseOnCommittedEvent(),h))}ei(t,i){return F.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,i)))}}class tw extends kS{constructor(t){super(),this.currentSequenceNumber=t}}class Qd{constructor(t){this.persistence=t,this.ti=new Kd,this.ni=null}static ri(t){return new Qd(t)}get ii(){if(this.ni)return this.ni;throw wt()}addReference(t,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),F.resolve()}removeReference(t,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),F.resolve()}markPotentiallyOrphaned(t,i){return this.ii.add(i.toString()),F.resolve()}removeTarget(t,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,i.targetId).next(l=>{l.forEach(h=>this.ii.add(h.toString()))}).next(()=>a.removeTargetData(t,i))}Zr(){this.ni=new Set}Xr(t){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,a=>{const l=Et.fromPath(a);return this.si(t,l).next(h=>{h||i.removeEntry(l,$t.min())})}).next(()=>(this.ni=null,i.apply(t)))}updateLimboDocument(t,i){return this.si(t,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(t){return 0}si(t,i){return F.or([()=>F.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(t,i),()=>this.persistence.ei(t,i)])}}class vc{constructor(t,i){this.persistence=t,this.oi=new Ms(a=>US(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=qb(this,i)}static ri(t,i){return new vc(t,i)}Zr(){}Xr(t){return F.resolve()}forEachTarget(t,i){return this.persistence.getTargetCache().forEachTarget(t,i)}nr(t){const i=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>i.next(l=>a+l))}sr(t){let i=0;return this.rr(t,a=>{i++}).next(()=>i)}rr(t,i){return F.forEach(this.oi,(a,l)=>this.ar(t,a,l).next(h=>h?F.resolve():i(l)))}removeTargets(t,i,a){return this.persistence.getTargetCache().removeTargets(t,i,a)}removeOrphanedDocuments(t,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.qr(t,d=>this.ar(t,d,i).next(y=>{y||(a++,h.removeEntry(d,$t.min()))})).next(()=>h.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,i){return this.oi.set(i,t.currentSequenceNumber),F.resolve()}removeTarget(t,i){const a=i.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),F.resolve()}removeReference(t,i,a){return this.oi.set(a,t.currentSequenceNumber),F.resolve()}updateLimboDocument(t,i){return this.oi.set(i,t.currentSequenceNumber),F.resolve()}Jr(t){let i=t.key.toString().length;return t.isFoundDocument()&&(i+=tc(t.data.value)),i}ar(t,i,a){return F.or([()=>this.persistence.ei(t,i),()=>this.persistence.getTargetCache().containsKey(t,i),()=>{const l=this.oi.get(i);return F.resolve(l!==void 0&&l>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Yd{constructor(t,i,a,l){this.targetId=t,this.fromCache=i,this.Hi=a,this.Ji=l}static Yi(t,i){let a=Fe(),l=Fe();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new Yd(t,i.fromCache,a,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class nw{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ZT()?8:VS(Ke())>0?6:4}()}initialize(t,i){this.ns=t,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(t,i,a,l){const h={result:null};return this.rs(t,i).next(d=>{h.result=d}).next(()=>{if(!h.result)return this.ss(t,i,l,a).next(d=>{h.result=d})}).next(()=>{if(h.result)return;const d=new ew;return this._s(t,i,d).next(y=>{if(h.result=y,this.Xi)return this.us(t,i,d,y.size)})}).next(()=>h.result)}us(t,i,a,l){return a.documentReadCount<this.es?(wa()<=Rt.DEBUG&&at("QueryEngine","SDK will not create cache indexes for query:",Wo(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(wa()<=Rt.DEBUG&&at("QueryEngine","Query:",Wo(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ts*l?(wa()<=Rt.DEBUG&&at("QueryEngine","The SDK decides to create cache indexes for query:",Wo(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bs(i))):F.resolve())}rs(t,i){if(Xy(i))return F.resolve(null);let a=bs(i);return this.indexManager.getIndexType(t,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=pd(i,null,"F"),a=bs(i)),this.indexManager.getDocumentsMatchingTarget(t,a).next(h=>{const d=Fe(...h);return this.ns.getDocuments(t,d).next(y=>this.indexManager.getMinOffset(t,a).next(v=>{const _=this.cs(i,y);return this.ls(i,_,d,v.readTime)?this.rs(t,pd(i,null,"F")):this.hs(t,_,i,v)}))})))}ss(t,i,a,l){return Xy(i)||l.isEqual($t.min())?F.resolve(null):this.ns.getDocuments(t,a).next(h=>{const d=this.cs(i,h);return this.ls(i,d,a,l)?F.resolve(null):(wa()<=Rt.DEBUG&&at("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Wo(i)),this.hs(t,d,i,DS(l,ol)).next(y=>y))})}cs(t,i){let a=new ze(rb(t));return i.forEach((l,h)=>{qd(t,h)&&(a=a.add(h))}),a}ls(t,i,a,l){if(t.limit===null)return!1;if(a.size!==i.size)return!0;const h=t.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}_s(t,i,a){return wa()<=Rt.DEBUG&&at("QueryEngine","Using full collection scan to execute query:",Wo(i)),this.ns.getDocumentsMatchingQuery(t,i,Pr.min(),a)}hs(t,i,a,l){return this.ns.getDocumentsMatchingQuery(t,a,l).next(h=>(i.forEach(d=>{h=h.insert(d.key,d)}),h))}}/**
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
 */const iw="LocalStore";class rw{constructor(t,i,a,l){this.persistence=t,this.Ps=i,this.serializer=l,this.Ts=new an(Bt),this.Is=new Ms(h=>Bd(h),Hd),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Kb(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>t.collect(i,this.Ts))}}function sw(s,t,i,a){return new rw(s,t,i,a)}async function j_(s,t){const i=Xt(s);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(h=>(l=h,i.As(t),i.mutationQueue.getAllMutationBatches(a))).next(h=>{const d=[],y=[];let v=Fe();for(const _ of l){d.push(_.batchId);for(const I of _.mutations)v=v.add(I.key)}for(const _ of h){y.push(_.batchId);for(const I of _.mutations)v=v.add(I.key)}return i.localDocuments.getDocuments(a,v).next(_=>({Rs:_,removedBatchIds:d,addedBatchIds:y}))})})}function aw(s,t){const i=Xt(s);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=t.batch.keys(),h=i.ds.newChangeBuffer({trackRemovals:!0});return function(y,v,_,I){const V=_.batch,B=V.keys();let $=F.resolve();return B.forEach(X=>{$=$.next(()=>I.getEntry(v,X)).next(lt=>{const et=_.docVersions.get(X);ae(et!==null),lt.version.compareTo(et)<0&&(V.applyToRemoteDocument(lt,_),lt.isValidDocument()&&(lt.setReadTime(_.commitVersion),I.addEntry(lt)))})}),$.next(()=>y.mutationQueue.removeMutationBatch(v,V))}(i,a,t,h).next(()=>h.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(y){let v=Fe();for(let _=0;_<y.mutationResults.length;++_)y.mutationResults[_].transformResults.length>0&&(v=v.add(y.batch.mutations[_].key));return v}(t))).next(()=>i.localDocuments.getDocuments(a,l))})}function ow(s){const t=Xt(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",i=>t.Hr.getLastRemoteSnapshotVersion(i))}function lw(s,t){const i=Xt(s);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=Ud),i.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}class rv{constructor(){this.activeTargetIds=cb()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ss(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class uw{constructor(){this.ho=new rv,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,i,a){}addLocalQueryTarget(t,i=!0){return i&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,i,a){this.Po[t]=i}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new rv,Promise.resolve()}handleUserChange(t,i,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class cw{To(t){}shutdown(){}}/**
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
 */const sv="ConnectivityMonitor";class av{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){at(sv,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){at(sv,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function Ed(){return Yu===null?Yu=function(){return 268435456+Math.round(2147483648*Math.random())}():Yu++,"0x"+Yu.toString(16)}/**
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
 */const Wf="RestConnection",hw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fw{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+t.host,this.yo=`projects/${a}/databases/${l}`,this.wo=this.databaseId.database===hc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}bo(t,i,a,l,h){const d=Ed(),y=this.So(t,i.toUriEncodedString());at(Wf,`Sending RPC '${t}' ${d}:`,y,a);const v={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(v,l,h),this.vo(t,y,v,a).then(_=>(at(Wf,`Received RPC '${t}' ${d}: `,_),_),_=>{throw Ic(Wf,`RPC '${t}' ${d} failed with error: `,_,"url: ",y,"request:",a),_})}Co(t,i,a,l,h,d){return this.bo(t,i,a,l,h)}Do(t,i,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ha}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),a&&a.headers.forEach((l,h)=>t[h]=l)}So(t,i){const a=hw[t];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
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
 */class dw{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
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
 */const qe="WebChannelConnection";class mw extends fw{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,i,a,l){const h=Ed();return new Promise((d,y)=>{const v=new e_;v.setWithCredentials(!0),v.listenOnce(n_.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case Ju.NO_ERROR:const I=v.getResponseJson();at(qe,`XHR for RPC '${t}' ${h} received:`,JSON.stringify(I)),d(I);break;case Ju.TIMEOUT:at(qe,`RPC '${t}' ${h} timed out`),y(new dt(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Ju.HTTP_ERROR:const V=v.getStatus();if(at(qe,`RPC '${t}' ${h} failed with status:`,V,"response text:",v.getResponseText()),V>0){let B=v.getResponseJson();Array.isArray(B)&&(B=B[0]);const $=B==null?void 0:B.error;if($&&$.status&&$.message){const X=function(et){const At=et.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(At)>=0?At:Y.UNKNOWN}($.status);y(new dt(X,$.message))}else y(new dt(Y.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new dt(Y.UNAVAILABLE,"Connection failed."));break;default:wt()}}finally{at(qe,`RPC '${t}' ${h} completed.`)}});const _=JSON.stringify(l);at(qe,`RPC '${t}' ${h} sending request:`,l),v.send(i,"POST",_,a,15)})}Wo(t,i,a){const l=Ed(),h=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],d=s_(),y=r_(),v={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(v.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(v.useFetchStreams=!0),this.Do(v.initMessageHeaders,i,a),v.encodeInitMessageHeaders=!0;const I=h.join("");at(qe,`Creating RPC '${t}' stream ${l}: ${I}`,v);const V=d.createWebChannel(I,v);let B=!1,$=!1;const X=new dw({Fo:et=>{$?at(qe,`Not sending because RPC '${t}' stream ${l} is closed:`,et):(B||(at(qe,`Opening RPC '${t}' stream ${l} transport.`),V.open(),B=!0),at(qe,`RPC '${t}' stream ${l} sending:`,et),V.send(et))},Mo:()=>V.close()}),lt=(et,At,ft)=>{et.listen(At,yt=>{try{ft(yt)}catch(Pt){setTimeout(()=>{throw Pt},0)}})};return lt(V,Jo.EventType.OPEN,()=>{$||(at(qe,`RPC '${t}' stream ${l} transport opened.`),X.Qo())}),lt(V,Jo.EventType.CLOSE,()=>{$||($=!0,at(qe,`RPC '${t}' stream ${l} transport closed`),X.Ko())}),lt(V,Jo.EventType.ERROR,et=>{$||($=!0,Ic(qe,`RPC '${t}' stream ${l} transport errored:`,et),X.Ko(new dt(Y.UNAVAILABLE,"The operation could not be completed")))}),lt(V,Jo.EventType.MESSAGE,et=>{var At;if(!$){const ft=et.data[0];ae(!!ft);const yt=ft,Pt=(yt==null?void 0:yt.error)||((At=yt[0])===null||At===void 0?void 0:At.error);if(Pt){at(qe,`RPC '${t}' stream ${l} received error:`,Pt);const mt=Pt.status;let Ct=function(S){const C=de[S];if(C!==void 0)return Ab(C)}(mt),k=Pt.message;Ct===void 0&&(Ct=Y.INTERNAL,k="Unknown error status: "+mt+" with message "+Pt.message),$=!0,X.Ko(new dt(Ct,k)),V.close()}else at(qe,`RPC '${t}' stream ${l} received:`,ft),X.Uo(ft)}}),lt(y,i_.STAT_EVENT,et=>{et.stat===hd.PROXY?at(qe,`RPC '${t}' stream ${l} detected buffering proxy`):et.stat===hd.NOPROXY&&at(qe,`RPC '${t}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{X.$o()},0),X}}function Jf(){return typeof document<"u"?document:null}/**
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
 */function Mc(s){return new Sb(s,!0)}/**
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
 */class B_{constructor(t,i,a=1e3,l=1.5,h=6e4){this.Ti=t,this.timerId=i,this.Go=a,this.zo=l,this.jo=h,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-a);l>0&&at("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const ov="PersistentStream";class gw{constructor(t,i,a,l,h,d,y,v){this.Ti=t,this.n_=a,this.r_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=y,this.listener=v,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new B_(t,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():i&&i.code===Y.RESOURCE_EXHAUSTED?(Is(i.toString()),Is("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.i_===i&&this.V_(a,l)},a=>{t(()=>{const l=new dt(Y.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(l)})})}V_(t,i){const a=this.R_(this.i_);this.stream=this.f_(t,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{a(()=>this.m_(l))}),this.stream.onMessage(l=>{a(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return at(ov,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return i=>{this.Ti.enqueueAndForget(()=>this.i_===t?i():(at(ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pw extends gw{constructor(t,i,a,l,h,d){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(t,i){return this.connection.Wo("Write",t,i)}g_(t){return ae(!!t.streamToken),this.lastStreamToken=t.streamToken,ae(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){ae(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const i=Nb(t.writeResults,t.commitTime),a=Da(t.commitTime);return this.listener.v_(a,i)}C_(){const t={};t.database=Ib(this.serializer),this.I_(t)}S_(t){const i={streamToken:this.lastStreamToken,writes:t.map(a=>Ob(this.serializer,a))};this.I_(i)}}/**
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
 */class yw{}class vw extends yw{constructor(t,i,a,l){super(),this.authCredentials=t,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new dt(Y.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.bo(t,vd(i,a),l,h,d)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new dt(Y.UNKNOWN,h.toString())})}Co(t,i,a,l,h){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,y])=>this.connection.Co(t,vd(i,a),l,d,y,h)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new dt(Y.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class _w{constructor(t,i){this.asyncQueue=t,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const i=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Is(i),this.N_=!1):at("OnlineStateTracker",i)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const yl="RemoteStore";class Ew{constructor(t,i,a,l,h){this.localStore=t,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=h,this.z_.To(d=>{a.enqueueAndForget(async()=>{_l(this)&&(at(yl,"Restarting streams for network reachability change."),await async function(v){const _=Xt(v);_.W_.add(4),await vl(_),_.j_.set("Unknown"),_.W_.delete(4),await kc(_)}(this))})}),this.j_=new _w(a,l)}}async function kc(s){if(_l(s))for(const t of s.G_)await t(!0)}async function vl(s){for(const t of s.G_)await t(!1)}function _l(s){return Xt(s).W_.size===0}async function H_(s,t,i){if(!gl(t))throw t;s.W_.add(1),await vl(s),s.j_.set("Offline"),i||(i=()=>ow(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{at(yl,"Retrying IndexedDB access"),await i(),s.W_.delete(1),await kc(s)})}function q_(s,t){return t().catch(i=>H_(s,i,t))}async function Vc(s){const t=Xt(s),i=jr(t);let a=t.K_.length>0?t.K_[t.K_.length-1].batchId:Ud;for(;Tw(t);)try{const l=await lw(t.localStore,a);if(l===null){t.K_.length===0&&i.P_();break}a=l.batchId,Aw(t,l)}catch(l){await H_(t,l)}G_(t)&&F_(t)}function Tw(s){return _l(s)&&s.K_.length<10}function Aw(s,t){s.K_.push(t);const i=jr(s);i.c_()&&i.b_&&i.S_(t.mutations)}function G_(s){return _l(s)&&!jr(s).u_()&&s.K_.length>0}function F_(s){jr(s).start()}async function Sw(s){jr(s).C_()}async function bw(s){const t=jr(s);for(const i of s.K_)t.S_(i.mutations)}async function ww(s,t,i){const a=s.K_.shift(),l=Fd.from(a,t,i);await q_(s,()=>s.remoteSyncer.applySuccessfulWrite(l)),await Vc(s)}async function Rw(s,t){t&&jr(s).b_&&await async function(a,l){if(function(d){return Tb(d)&&d!==Y.ABORTED}(l.code)){const h=a.K_.shift();jr(a).h_(),await q_(a,()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l)),await Vc(a)}}(s,t),G_(s)&&F_(s)}async function lv(s,t){const i=Xt(s);i.asyncQueue.verifyOperationInProgress(),at(yl,"RemoteStore received new credentials");const a=_l(i);i.W_.add(3),await vl(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(t),i.W_.delete(3),await kc(i)}async function Cw(s,t){const i=Xt(s);t?(i.W_.delete(2),await kc(i)):t||(i.W_.add(2),await vl(i),i.j_.set("Unknown"))}function jr(s){return s.Y_||(s.Y_=function(i,a,l){const h=Xt(i);return h.M_(),new pw(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:Sw.bind(null,s),Lo:Rw.bind(null,s),D_:bw.bind(null,s),v_:ww.bind(null,s)}),s.G_.push(async t=>{t?(s.Y_.h_(),await Vc(s)):(await s.Y_.stop(),s.K_.length>0&&(at(yl,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
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
 */class Xd{constructor(t,i,a,l,h){this.asyncQueue=t,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,i,a,l,h){const d=Date.now()+a,y=new Xd(t,i,d,l,h);return y.start(a),y}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new dt(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function K_(s,t){if(Is("AsyncQueue",`${t}: ${s}`),gl(s))return new dt(Y.UNAVAILABLE,`${t}: ${s}`);throw s}class Iw{constructor(){this.queries=uv(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const l=Xt(i),h=l.queries;l.queries=uv(),h.forEach((d,y)=>{for(const v of y.ta)v.onError(a)})})(this,new dt(Y.ABORTED,"Firestore shutting down"))}}function uv(){return new Ms(s=>b_(s),S_)}function Dw(s){s.ia.forEach(t=>{t.next()})}var cv,hv;(hv=cv||(cv={}))._a="default",hv.Cache="cache";const Ow="SyncEngine";class Nw{constructor(t,i,a,l,h,d){this.localStore=t,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Ms(y=>b_(y),S_),this.qa=new Map,this.Qa=new Set,this.$a=new an(Et.comparator),this.Ka=new Map,this.Ua=new Kd,this.Wa={},this.Ga=new Map,this.za=La.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Mw(s,t,i){const a=Uw(s);try{const l=await function(d,y){const v=Xt(d),_=Ne.now(),I=y.reduce(($,X)=>$.add(X.key),Fe());let V,B;return v.persistence.runTransaction("Locally write mutations","readwrite",$=>{let X=gc(),lt=Fe();return v.ds.getEntries($,I).next(et=>{X=et,X.forEach((At,ft)=>{ft.isValidDocument()||(lt=lt.add(At))})}).next(()=>v.localDocuments.getOverlayedDocuments($,X)).next(et=>{V=et;const At=[];for(const ft of y){const yt=yb(ft,V.get(ft.key).overlayedDocument);yt!=null&&At.push(new ks(ft.key,yt,p_(yt.value.mapValue),zi.exists(!0)))}return v.mutationQueue.addMutationBatch($,_,At,y)}).next(et=>{B=et;const At=et.applyToLocalDocumentSet(V,lt);return v.documentOverlayCache.saveOverlays($,et.batchId,At)})}).then(()=>({batchId:B.batchId,changes:R_(V)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(l.batchId),function(d,y,v){let _=d.Wa[d.currentUser.toKey()];_||(_=new an(Bt)),_=_.insert(y,v),d.Wa[d.currentUser.toKey()]=_}(a,l.batchId,i),await xc(a,l.changes),await Vc(a.remoteStore)}catch(l){const h=K_(l,"Failed to persist write");i.reject(h)}}function fv(s,t,i){const a=Xt(s);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.ka.forEach((h,d)=>{const y=d.view.sa(t);y.snapshot&&l.push(y.snapshot)}),function(d,y){const v=Xt(d);v.onlineState=y;let _=!1;v.queries.forEach((I,V)=>{for(const B of V.ta)B.sa(y)&&(_=!0)}),_&&Dw(v)}(a.eventManager,t),l.length&&a.La.p_(l),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function kw(s,t){const i=Xt(s),a=t.batch.batchId;try{const l=await aw(i.localStore,t);Y_(i,a,null),Q_(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await xc(i,l)}catch(l){await Vd(l)}}async function Vw(s,t,i){const a=Xt(s);try{const l=await function(d,y){const v=Xt(d);return v.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let I;return v.mutationQueue.lookupMutationBatch(_,y).next(V=>(ae(V!==null),I=V.keys(),v.mutationQueue.removeMutationBatch(_,V))).next(()=>v.mutationQueue.performConsistencyCheck(_)).next(()=>v.documentOverlayCache.removeOverlaysForBatchId(_,I,y)).next(()=>v.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,I)).next(()=>v.localDocuments.getDocuments(_,I))})}(a.localStore,t);Y_(a,t,i),Q_(a,t),a.sharedClientState.updateMutationState(t,"rejected",i),await xc(a,l)}catch(l){await Vd(l)}}function Q_(s,t){(s.Ga.get(t)||[]).forEach(i=>{i.resolve()}),s.Ga.delete(t)}function Y_(s,t,i){const a=Xt(s);let l=a.Wa[a.currentUser.toKey()];if(l){const h=l.get(t);h&&(i?h.reject(i):h.resolve(),l=l.remove(t)),a.Wa[a.currentUser.toKey()]=l}}async function xc(s,t,i){const a=Xt(s),l=[],h=[],d=[];a.ka.isEmpty()||(a.ka.forEach((y,v)=>{d.push(a.Ha(v,t,i).then(_=>{var I;if((_||i)&&a.isPrimaryClient){const V=_?!_.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;a.sharedClientState.updateQueryState(v.targetId,V?"current":"not-current")}if(_){l.push(_);const V=Yd.Yi(v.targetId,_);h.push(V)}}))}),await Promise.all(d),a.La.p_(l),await async function(v,_){const I=Xt(v);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",V=>F.forEach(_,B=>F.forEach(B.Hi,$=>I.persistence.referenceDelegate.addReference(V,B.targetId,$)).next(()=>F.forEach(B.Ji,$=>I.persistence.referenceDelegate.removeReference(V,B.targetId,$)))))}catch(V){if(!gl(V))throw V;at(iw,"Failed to update sequence numbers: "+V)}for(const V of _){const B=V.targetId;if(!V.fromCache){const $=I.Ts.get(B),X=$.snapshotVersion,lt=$.withLastLimboFreeSnapshotVersion(X);I.Ts=I.Ts.insert(B,lt)}}}(a.localStore,h))}async function xw(s,t){const i=Xt(s);if(!i.currentUser.isEqual(t)){at(Ow,"User change. New user:",t.toKey());const a=await j_(i.localStore,t);i.currentUser=t,function(h,d){h.Ga.forEach(y=>{y.forEach(v=>{v.reject(new dt(Y.CANCELLED,d))})}),h.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await xc(i,a.Rs)}}function Uw(s){const t=Xt(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vw.bind(null,t),t}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Mc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,i){return null}nu(t,i){return null}eu(t){return sw(this.persistence,new nw,t.initialUser,this.serializer)}Xa(t){return new z_(Qd.ri,this.serializer)}Za(t){return new uw}async terminate(){var t,i;(t=this.gcScheduler)===null||t===void 0||t.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class Lw extends _c{constructor(t){super(),this.cacheSizeBytes=t}tu(t,i){ae(this.persistence.referenceDelegate instanceof vc);const a=this.persistence.referenceDelegate.garbageCollector;return new Bb(a,t.asyncQueue,i)}Xa(t){const i=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new z_(a=>vc.ri(a,i),this.serializer)}}class Td{async initialize(t,i){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>fv(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=xw.bind(null,this.syncEngine),await Cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Iw}()}createDatastore(t){const i=Mc(t.databaseInfo.databaseId),a=function(h){return new mw(h)}(t.databaseInfo);return function(h,d,y,v){return new vw(h,d,y,v)}(t.authCredentials,t.appCheckCredentials,a,i)}createRemoteStore(t){return function(a,l,h,d,y){return new Ew(a,l,h,d,y)}(this.localStore,this.datastore,t.asyncQueue,i=>fv(this.syncEngine,i,0),function(){return av.D()?new av:new cw}())}createSyncEngine(t,i){return function(l,h,d,y,v,_,I){const V=new Nw(l,h,d,y,v,_);return I&&(V.ja=!0),V}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,i)}async terminate(){var t,i;await async function(l){const h=Xt(l);at(yl,"RemoteStore shutting down."),h.W_.add(5),await vl(h),h.z_.shutdown(),h.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}Td.provider={build:()=>new Td};/**
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
 */const Br="FirestoreClient";class Pw{constructor(t,i,a,l,h){this.authCredentials=t,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=Ge.UNAUTHENTICATED,this.clientId=o_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,async d=>{at(Br,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(at(Br,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(i){const a=K_(i,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function td(s,t){s.asyncQueue.verifyOperationInProgress(),at(Br,"Initializing OfflineComponentProvider");const i=s.configuration;await t.initialize(i);let a=i.initialUser;s.setCredentialChangeListener(async l=>{a.isEqual(l)||(await j_(t.localStore,l),a=l)}),t.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=t}async function dv(s,t){s.asyncQueue.verifyOperationInProgress();const i=await zw(s);at(Br,"Initializing OnlineComponentProvider"),await t.initialize(i,s.configuration),s.setCredentialChangeListener(a=>lv(t.remoteStore,a)),s.setAppCheckTokenChangeListener((a,l)=>lv(t.remoteStore,l)),s._onlineComponents=t}async function zw(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){at(Br,"Using user provided OfflineComponentProvider");try{await td(s,s._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!function(l){return l.name==="FirebaseError"?l.code===Y.FAILED_PRECONDITION||l.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Ic("Error using user provided cache. Falling back to memory cache: "+i),await td(s,new _c)}}else at(Br,"Using default OfflineComponentProvider"),await td(s,new Lw(void 0));return s._offlineComponents}async function jw(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(at(Br,"Using user provided OnlineComponentProvider"),await dv(s,s._uninitializedComponentsProvider._online)):(at(Br,"Using default OnlineComponentProvider"),await dv(s,new Td))),s._onlineComponents}function Bw(s){return jw(s).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
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
 */const mv=new Map;/**
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
 */function $_(s,t,i){if(!i)throw new dt(Y.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function Hw(s,t,i,a){if(t===!0&&a===!0)throw new dt(Y.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function gv(s){if(!Et.isDocumentKey(s))throw new dt(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function pv(s){if(Et.isDocumentKey(s))throw new dt(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function $d(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":wt()}function Z_(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new dt(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=$d(s);throw new dt(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return s}/**
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
 */const W_="firestore.googleapis.com",yv=!0;class vv{constructor(t){var i,a;if(t.host===void 0){if(t.ssl!==void 0)throw new dt(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=W_,this.ssl=yv}else this.host=t.host,this.ssl=(i=t.ssl)!==null&&i!==void 0?i:yv;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=P_;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<zb)throw new dt(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hw("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X_((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new dt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new dt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new dt(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Uc{constructor(t,i,a,l){this._authCredentials=t,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new dt(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new dt(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new TS;switch(a.type){case"firstParty":return new wS(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new dt(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=mv.get(i);a&&(at("ComponentProvider","Removing Datastore"),mv.delete(i),a.terminate())}(this),Promise.resolve()}}function qw(s,t,i,a={}){var l;const h=(s=Z_(s,Uc))._getSettings(),d=Object.assign(Object.assign({},h),{emulatorOptions:s._getEmulatorOptions()}),y=`${t}:${i}`;h.host!==W_&&h.host!==y&&Ic("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:y,ssl:!1,emulatorOptions:a});if(!Rs(v,d)&&(s._setSettings(v),a.mockUserToken)){let _,I;if(typeof a.mockUserToken=="string")_=a.mockUserToken,I=Ge.MOCK_USER;else{_=GT(a.mockUserToken,(l=s._app)===null||l===void 0?void 0:l.options.projectId);const V=a.mockUserToken.sub||a.mockUserToken.user_id;if(!V)throw new dt(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new Ge(V)}s._authCredentials=new AS(new a_(_,I))}}/**
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
 */class Zd{constructor(t,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new Zd(this.firestore,t,this._query)}}class ji{constructor(t,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ji(this.firestore,t,this._key)}}class Ur extends Zd{constructor(t,i,a){super(t,i,eb(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ji(this.firestore,null,new Et(t))}withConverter(t){return new Ur(this.firestore,t,this._path)}}function Gw(s,t,...i){if(s=Mn(s),$_("collection","path",t),s instanceof Uc){const a=se.fromString(t,...i);return pv(a),new Ur(s,null,a)}{if(!(s instanceof ji||s instanceof Ur))throw new dt(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(t,...i));return pv(a),new Ur(s.firestore,null,a)}}function Fw(s,t,...i){if(s=Mn(s),arguments.length===1&&(t=o_.newId()),$_("doc","path",t),s instanceof Uc){const a=se.fromString(t,...i);return gv(a),new ji(s,null,new Et(a))}{if(!(s instanceof ji||s instanceof Ur))throw new dt(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(t,...i));return gv(a),new ji(s.firestore,s instanceof Ur?s.converter:null,new Et(a))}}/**
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
 */const _v="AsyncQueue";class Ev{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new B_(this,"async_queue_retry"),this.bu=()=>{const a=Jf();a&&at(_v,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=t;const i=Jf();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const i=Jf();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Ss;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!gl(t))throw t;at(_v,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const i=this.Su.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const l=function(d){let y=d.message||"";return d.stack&&(y=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),y}(a);throw Is("INTERNAL UNHANDLED ERROR: ",l),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(t,i,a){this.Du(),this.wu.indexOf(t)>-1&&(i=0);const l=Xd.createAndSchedule(this,t,i,a,h=>this.Fu(h));return this.fu.push(l),l}Du(){this.gu&&wt()}verifyOperationInProgress(){}async Mu(){let t;do t=this.Su,await t;while(t!==this.Su)}xu(t){for(const i of this.fu)if(i.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),t!=="all"&&i.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const i=this.fu.indexOf(t);this.fu.splice(i,1)}}class J_ extends Uc{constructor(t,i,a,l){super(t,i,a,l),this.type="firestore",this._queue=new Ev,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ev(t),this._firestoreClient=void 0,await t}}}function Kw(s,t){const i=typeof s=="object"?s:Nd(),a=typeof s=="string"?s:hc,l=ml(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=qT("firestore");h&&qw(l,...h)}return l}function Qw(s){if(s._terminated)throw new dt(Y.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Yw(s),s._firestoreClient}function Yw(s){var t,i,a;const l=s._freezeSettings(),h=function(y,v,_,I){return new jS(y,v,_,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,X_(I.experimentalLongPollingOptions),I.useFetchStreams)}(s._databaseId,((t=s._app)===null||t===void 0?void 0:t.options.appId)||"",s._persistenceKey,l);s._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),s._firestoreClient=new Pw(s._authCredentials,s._appCheckCredentials,s._queue,h,s._componentsProvider&&function(y){const v=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(v),_online:v}}(s._componentsProvider))}/**
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
 */class hl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new hl(ai.fromBase64String(t))}catch(i){throw new dt(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(t){return new hl(ai.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class t0{constructor(...t){for(let i=0;i<t.length;++i)if(t[i].length===0)throw new dt(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class e0{constructor(t){this._methodName=t}}/**
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
 */class n0{constructor(t,i){if(!isFinite(t)||t<-90||t>90)throw new dt(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(i)||i<-180||i>180)throw new dt(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=t,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Bt(this._lat,t._lat)||Bt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(t){this._values=(t||[]).map(i=>i)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0}(this._values,t._values)}}/**
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
 */const Xw=/^__.*__$/;class $w{constructor(t,i,a){this.data=t,this.fieldMask=i,this.fieldTransforms=a}toMutation(t,i){return this.fieldMask!==null?new ks(t,this.data,this.fieldMask,i,this.fieldTransforms):new pl(t,this.data,i,this.fieldTransforms)}}function r0(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt()}}class Wd{constructor(t,i,a,l,h,d){this.settings=t,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Bu(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Wd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.$u(t),l}Ku(t){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(t),l=this.ku({path:a,Qu:!1});return l.Bu(),l}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ec(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(i=>t.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>t.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(r0(this.Lu)&&Xw.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Zw{constructor(t,i,a){this.databaseId=t,this.ignoreUndefinedProperties=i,this.serializer=a||Mc(t)}ju(t,i,a,l=!1){return new Wd({Lu:t,methodName:i,zu:a,path:Pe.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ww(s){const t=s._freezeSettings(),i=Mc(s._databaseId);return new Zw(s._databaseId,!!t.ignoreUndefinedProperties,i)}function Jw(s,t,i,a,l,h={}){const d=s.ju(h.merge||h.mergeFields?2:0,t,i,l);l0("Data must be an object, but it was:",d,a);const y=a0(a,d);let v,_;if(h.merge)v=new Bn(d.fieldMask),_=d.fieldTransforms;else if(h.mergeFields){const I=[];for(const V of h.mergeFields){const B=tR(t,V,i);if(!d.contains(B))throw new dt(Y.INVALID_ARGUMENT,`Field '${B}' is specified in your field mask but missing from your input data.`);iR(I,B)||I.push(B)}v=new Bn(I),_=d.fieldTransforms.filter(V=>v.covers(V.field))}else v=null,_=d.fieldTransforms;return new $w(new jn(y),v,_)}function s0(s,t){if(o0(s=Mn(s)))return l0("Unsupported field value:",t,s),a0(s,t);if(s instanceof e0)return function(a,l){if(!r0(l.Lu))throw l.Wu(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)}(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,l){const h=[];let d=0;for(const y of a){let v=s0(y,l.Uu(d));v==null&&(v={nullValue:"NULL_VALUE"}),h.push(v),d++}return{arrayValue:{values:h}}}(s,t)}return function(a,l){if((a=Mn(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return hb(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=Ne.fromDate(a);return{timestampValue:yd(l.serializer,h)}}if(a instanceof Ne){const h=new Ne(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:yd(l.serializer,h)}}if(a instanceof n0)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof hl)return{bytesValue:bb(l.serializer,a._byteString)};if(a instanceof ji){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:U_(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof i0)return function(d,y){return{mapValue:{fields:{[m_]:{stringValue:g_},[fd]:{arrayValue:{values:d.toArray().map(_=>{if(typeof _!="number")throw y.Wu("VectorValues must only contain numeric values.");return Gd(y.serializer,_)})}}}}}}(a,l);throw l.Wu(`Unsupported field value: ${$d(a)}`)}(s,t)}function a0(s,t){const i={};return u_(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qa(s,(a,l)=>{const h=s0(l,t.qu(a));h!=null&&(i[a]=h)}),{mapValue:{fields:i}}}function o0(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Ne||s instanceof n0||s instanceof hl||s instanceof ji||s instanceof e0||s instanceof i0)}function l0(s,t,i){if(!o0(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const a=$d(i);throw a==="an object"?t.Wu(s+" a custom object"):t.Wu(s+" "+a)}}function tR(s,t,i){if((t=Mn(t))instanceof t0)return t._internalPath;if(typeof t=="string")return nR(s,t);throw Ec("Field path arguments must be of type string or ",s,!1,void 0,i)}const eR=new RegExp("[~\\*/\\[\\]]");function nR(s,t,i){if(t.search(eR)>=0)throw Ec(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,i);try{return new t0(...t.split("."))._internalPath}catch{throw Ec(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,i)}}function Ec(s,t,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let y=`Function ${t}() called with invalid data`;i&&(y+=" (via `toFirestore()`)"),y+=". ";let v="";return(h||d)&&(v+=" (found",h&&(v+=` in field ${a}`),d&&(v+=` in document ${l}`),v+=")"),new dt(Y.INVALID_ARGUMENT,y+s+v)}function iR(s,t){return s.some(i=>i.isEqual(t))}/**
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
 */function rR(s,t,i){let a;return a=s?s.toFirestore(t):t,a}function sR(s,t){const i=Z_(s.firestore,J_),a=Fw(s),l=rR(s.converter,t);return aR(i,[Jw(Ww(s.firestore),"addDoc",a._key,l,s.converter!==null,{}).toMutation(a._key,zi.exists(!1))]).then(()=>a)}function aR(s,t){return function(a,l){const h=new Ss;return a.asyncQueue.enqueueAndForget(async()=>Mw(await Bw(a),l,h)),h.promise}(Qw(s),t)}(function(t,i=!0){(function(l){Ha=l})(Ba),Lr(new Bi("firestore",(a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),y=new J_(new SS(a.getProvider("auth-internal")),new RS(d,a.getProvider("app-check-internal")),function(_,I){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new dt(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fc(_.options.projectId,I)}(d,l),d);return h=Object.assign({useFetchStreams:i},h),y._setSettings(h),y},"PUBLIC").setMultipleInstances(!0)),Pi(xy,Uy,t),Pi(xy,Uy,"esm2017")})();/**
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
 */const Ad=new Map,u0={activated:!1,tokenObservers:[]},oR={initialized:!1,enabled:!1};function Te(s){return Ad.get(s)||Object.assign({},u0)}function lR(s,t){return Ad.set(s,t),Ad.get(s)}function Lc(){return oR}/**
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
 */const c0="https://content-firebaseappcheck.googleapis.com/v1",uR="exchangeRecaptchaV3Token",cR="exchangeDebugToken",Tv={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},hR=24*60*60*1e3;/**
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
 */class fR{constructor(t,i,a,l,h){if(this.operation=t,this.retryPolicy=i,this.getWaitDuration=a,this.lowerBound=l,this.upperBound=h,this.pending=null,this.nextErrorWaitInterval=l,l>h)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new sl,this.pending.promise.catch(i=>{}),await dR(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new sl,this.pending.promise.catch(i=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(i){this.retryPolicy(i)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const i=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),i}}}function dR(s){return new Promise(t=>{setTimeout(t,s)})}/**
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
 */const mR={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},sn=new za("appCheck","AppCheck",mR);/**
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
 */function Av(s=!1){var t;return s?(t=self.grecaptcha)===null||t===void 0?void 0:t.enterprise:self.grecaptcha}function Jd(s){if(!Te(s).activated)throw sn.create("use-before-activation",{appName:s.name})}function h0(s){const t=Math.round(s/1e3),i=Math.floor(t/(3600*24)),a=Math.floor((t-i*3600*24)/3600),l=Math.floor((t-i*3600*24-a*3600)/60),h=t-i*3600*24-a*3600-l*60;let d="";return i&&(d+=Xu(i)+"d:"),a&&(d+=Xu(a)+"h:"),d+=Xu(l)+"m:"+Xu(h)+"s",d}function Xu(s){return s===0?"00":s>=10?s.toString():"0"+s}/**
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
 */async function tm({url:s,body:t},i){const a={"Content-Type":"application/json"},l=i.getImmediate({optional:!0});if(l){const V=await l.getHeartbeatsHeader();V&&(a["X-Firebase-Client"]=V)}const h={method:"POST",body:JSON.stringify(t),headers:a};let d;try{d=await fetch(s,h)}catch(V){throw sn.create("fetch-network-error",{originalErrorMessage:V==null?void 0:V.message})}if(d.status!==200)throw sn.create("fetch-status-error",{httpStatus:d.status});let y;try{y=await d.json()}catch(V){throw sn.create("fetch-parse-error",{originalErrorMessage:V==null?void 0:V.message})}const v=y.ttl.match(/^([\d.]+)(s)$/);if(!v||!v[2]||isNaN(Number(v[1])))throw sn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${y.ttl}`});const _=Number(v[1])*1e3,I=Date.now();return{token:y.token,expireTimeMillis:I+_,issuedAtTimeMillis:I}}function gR(s,t){const{projectId:i,appId:a,apiKey:l}=s.options;return{url:`${c0}/projects/${i}/apps/${a}:${uR}?key=${l}`,body:{recaptcha_v3_token:t}}}function f0(s,t){const{projectId:i,appId:a,apiKey:l}=s.options;return{url:`${c0}/projects/${i}/apps/${a}:${cR}?key=${l}`,body:{debug_token:t}}}/**
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
 */const pR="firebase-app-check-database",yR=1,fl="firebase-app-check-store",d0="debug-token";let $u=null;function m0(){return $u||($u=new Promise((s,t)=>{try{const i=indexedDB.open(pR,yR);i.onsuccess=a=>{s(a.target.result)},i.onerror=a=>{var l;t(sn.create("storage-open",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))},i.onupgradeneeded=a=>{const l=a.target.result;switch(a.oldVersion){case 0:l.createObjectStore(fl,{keyPath:"compositeKey"})}}}catch(i){t(sn.create("storage-open",{originalErrorMessage:i==null?void 0:i.message}))}}),$u)}function vR(s){return p0(y0(s))}function _R(s,t){return g0(y0(s),t)}function ER(s){return g0(d0,s)}function TR(){return p0(d0)}async function g0(s,t){const a=(await m0()).transaction(fl,"readwrite"),h=a.objectStore(fl).put({compositeKey:s,value:t});return new Promise((d,y)=>{h.onsuccess=v=>{d()},a.onerror=v=>{var _;y(sn.create("storage-set",{originalErrorMessage:(_=v.target.error)===null||_===void 0?void 0:_.message}))}})}async function p0(s){const i=(await m0()).transaction(fl,"readonly"),l=i.objectStore(fl).get(s);return new Promise((h,d)=>{l.onsuccess=y=>{const v=y.target.result;h(v?v.value:void 0)},i.onerror=y=>{var v;d(sn.create("storage-get",{originalErrorMessage:(v=y.target.error)===null||v===void 0?void 0:v.message}))}})}function y0(s){return`${s.options.appId}-${s.name}`}/**
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
 */const As=new Cc("@firebase/app-check");/**
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
 */async function AR(s){if(Dd()){let t;try{t=await vR(s)}catch(i){As.warn(`Failed to read token from IndexedDB. Error: ${i}`)}return t}}function ed(s,t){return Dd()?_R(s,t).catch(i=>{As.warn(`Failed to write token to IndexedDB. Error: ${i}`)}):Promise.resolve()}async function SR(){let s;try{s=await TR()}catch{}if(s)return s;{const t=crypto.randomUUID();return ER(t).catch(i=>As.warn(`Failed to persist debug token to IndexedDB. Error: ${i}`)),t}}/**
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
 */function em(){return Lc().enabled}async function nm(){const s=Lc();if(s.enabled&&s.token)return s.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function bR(){const s=Kv(),t=Lc();if(t.initialized=!0,typeof s.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&s.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const i=new sl;t.token=i,typeof s.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?i.resolve(s.FIREBASE_APPCHECK_DEBUG_TOKEN):i.resolve(SR())}/**
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
 */const wR={error:"UNKNOWN_ERROR"};function RR(s){return Id.encodeString(JSON.stringify(s),!1)}async function Sd(s,t=!1){const i=s.app;Jd(i);const a=Te(i);let l=a.token,h;if(l&&!Ca(l)&&(a.token=void 0,l=void 0),!l){const v=await a.cachedTokenPromise;v&&(Ca(v)?l=v:await ed(i,void 0))}if(!t&&l&&Ca(l))return{token:l.token};let d=!1;if(em())try{a.exchangeTokenPromise||(a.exchangeTokenPromise=tm(f0(i,await nm()),s.heartbeatServiceProvider).finally(()=>{a.exchangeTokenPromise=void 0}),d=!0);const v=await a.exchangeTokenPromise;return await ed(i,v),a.token=v,{token:v.token}}catch(v){return v.code==="appCheck/throttled"?As.warn(v.message):As.error(v),nd(v)}try{a.exchangeTokenPromise||(a.exchangeTokenPromise=a.provider.getToken().finally(()=>{a.exchangeTokenPromise=void 0}),d=!0),l=await Te(i).exchangeTokenPromise}catch(v){v.code==="appCheck/throttled"?As.warn(v.message):As.error(v),h=v}let y;return l?h?Ca(l)?y={token:l.token,internalError:h}:y=nd(h):(y={token:l.token},a.token=l,await ed(i,l)):y=nd(h),d&&E0(i,y),y}async function CR(s){const t=s.app;Jd(t);const{provider:i}=Te(t);if(em()){const a=await nm(),{token:l}=await tm(f0(t,a),s.heartbeatServiceProvider);return{token:l}}else{const{token:a}=await i.getToken();return{token:a}}}function v0(s,t,i,a){const{app:l}=s,h=Te(l),d={next:i,error:a,type:t};if(h.tokenObservers=[...h.tokenObservers,d],h.token&&Ca(h.token)){const y=h.token;Promise.resolve().then(()=>{i({token:y.token}),Sv(s)}).catch(()=>{})}h.cachedTokenPromise.then(()=>Sv(s))}function _0(s,t){const i=Te(s),a=i.tokenObservers.filter(l=>l.next!==t);a.length===0&&i.tokenRefresher&&i.tokenRefresher.isRunning()&&i.tokenRefresher.stop(),i.tokenObservers=a}function Sv(s){const{app:t}=s,i=Te(t);let a=i.tokenRefresher;a||(a=IR(s),i.tokenRefresher=a),!a.isRunning()&&i.isTokenAutoRefreshEnabled&&a.start()}function IR(s){const{app:t}=s;return new fR(async()=>{const i=Te(t);let a;if(i.token?a=await Sd(s,!0):a=await Sd(s),a.error)throw a.error;if(a.internalError)throw a.internalError},()=>!0,()=>{const i=Te(t);if(i.token){let a=i.token.issuedAtTimeMillis+(i.token.expireTimeMillis-i.token.issuedAtTimeMillis)*.5+3e5;const l=i.token.expireTimeMillis-5*60*1e3;return a=Math.min(a,l),Math.max(0,a-Date.now())}else return 0},Tv.RETRIAL_MIN_WAIT,Tv.RETRIAL_MAX_WAIT)}function E0(s,t){const i=Te(s).tokenObservers;for(const a of i)try{a.type==="EXTERNAL"&&t.error!=null?a.error(t.error):a.next(t)}catch{}}function Ca(s){return s.expireTimeMillis-Date.now()>0}function nd(s){return{token:RR(wR),error:s}}/**
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
 */class DR{constructor(t,i){this.app=t,this.heartbeatServiceProvider=i}_delete(){const{tokenObservers:t}=Te(this.app);for(const i of t)_0(this.app,i.next);return Promise.resolve()}}function OR(s,t){return new DR(s,t)}function NR(s){return{getToken:t=>Sd(s,t),getLimitedUseToken:()=>CR(s),addTokenListener:t=>v0(s,"INTERNAL",t),removeTokenListener:t=>_0(s.app,t)}}const MR="@firebase/app-check",kR="0.8.12";/**
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
 */const VR="https://www.google.com/recaptcha/api.js";function xR(s,t){const i=new sl,a=Te(s);a.reCAPTCHAState={initialized:i};const l=UR(s),h=Av(!1);return h?bv(s,t,h,l,i):zR(()=>{const d=Av(!1);if(!d)throw new Error("no recaptcha");bv(s,t,d,l,i)}),i.promise}function bv(s,t,i,a,l){i.ready(()=>{PR(s,t,i,a),l.resolve(i)})}function UR(s){const t=`fire_app_check_${s.name}`,i=document.createElement("div");return i.id=t,i.style.display="none",document.body.appendChild(i),t}async function LR(s){Jd(s);const i=await Te(s).reCAPTCHAState.initialized.promise;return new Promise((a,l)=>{const h=Te(s).reCAPTCHAState;i.ready(()=>{a(i.execute(h.widgetId,{action:"fire_app_check"}))})})}function PR(s,t,i,a){const l=i.render(a,{sitekey:t,size:"invisible",callback:()=>{Te(s).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Te(s).reCAPTCHAState.succeeded=!1}}),h=Te(s);h.reCAPTCHAState=Object.assign(Object.assign({},h.reCAPTCHAState),{widgetId:l})}function zR(s){const t=document.createElement("script");t.src=VR,t.onload=s,document.head.appendChild(t)}/**
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
 */class im{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var t,i,a;BR(this._throttleData);const l=await LR(this._app).catch(d=>{throw sn.create("recaptcha-error")});if(!(!((t=Te(this._app).reCAPTCHAState)===null||t===void 0)&&t.succeeded))throw sn.create("recaptcha-error");let h;try{h=await tm(gR(this._app,l),this._heartbeatServiceProvider)}catch(d){throw!((i=d.code)===null||i===void 0)&&i.includes("fetch-status-error")?(this._throttleData=jR(Number((a=d.customData)===null||a===void 0?void 0:a.httpStatus),this._throttleData),sn.create("throttled",{time:h0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):d}return this._throttleData=null,h}initialize(t){this._app=t,this._heartbeatServiceProvider=ml(t,"heartbeat"),xR(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof im?this._siteKey===t._siteKey:!1}}function jR(s,t){if(s===404||s===403)return{backoffCount:1,allowRequestsAfter:Date.now()+hR,httpStatus:s};{const i=t?t.backoffCount:0,a=cA(i,1e3,2);return{backoffCount:i+1,allowRequestsAfter:Date.now()+a,httpStatus:s}}}function BR(s){if(s&&Date.now()-s.allowRequestsAfter<=0)throw sn.create("throttled",{time:h0(s.allowRequestsAfter-Date.now()),httpStatus:s.httpStatus})}/**
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
 */function HR(s=Nd(),t){s=Mn(s);const i=ml(s,"app-check");if(Lc().initialized||bR(),em()&&nm().then(l=>console.log(`App Check debug token: ${l}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(h.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&h.provider.isEqual(t.provider))return l;throw sn.create("already-initialized",{appName:s.name})}const a=i.initialize({options:t});return qR(s,t.provider,t.isTokenAutoRefreshEnabled),Te(s).isTokenAutoRefreshEnabled&&v0(a,"INTERNAL",()=>{}),a}function qR(s,t,i){const a=lR(s,Object.assign({},u0));a.activated=!0,a.provider=t,a.cachedTokenPromise=AR(s).then(l=>(l&&Ca(l)&&(a.token=l,E0(s,{token:l.token})),l)),a.isTokenAutoRefreshEnabled=i===void 0?s.automaticDataCollectionEnabled:i,a.provider.initialize(s)}const GR="app-check",wv="app-check-internal";function FR(){Lr(new Bi(GR,s=>{const t=s.getProvider("app").getImmediate(),i=s.getProvider("heartbeat");return OR(t,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((s,t,i)=>{s.getProvider(wv).initialize()})),Lr(new Bi(wv,s=>{const t=s.getProvider("app-check").getImmediate();return NR(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Pi(MR,kR)}FR();const KR={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.firebasestorage.app",messagingSenderId:"410453365556",appId:"1:410453365556:web:670182c618218ca1220b61"},T0=Wv(KR),QR=Kw(T0);HR(T0,{provider:new im("6LeEke0qAAAAAKA11Yv12fIwBk5mPRu9wUJFixvx"),isTokenAutoRefreshEnabled:!0});function rm(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(s);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(s,a[l])&&(i[a[l]]=s[a[l]]);return i}function A0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YR=A0,S0=new za("auth","Firebase",A0());/**
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
 */const Tc=new Cc("@firebase/auth");function XR(s,...t){Tc.logLevel<=Rt.WARN&&Tc.warn(`Auth (${Ba}): ${s}`,...t)}function ic(s,...t){Tc.logLevel<=Rt.ERROR&&Tc.error(`Auth (${Ba}): ${s}`,...t)}/**
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
 */function qi(s,...t){throw sm(s,...t)}function mn(s,...t){return sm(s,...t)}function b0(s,t,i){const a=Object.assign(Object.assign({},YR()),{[t]:i});return new za("auth","Firebase",a).create(t,{appName:s.name})}function ws(s){return b0(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sm(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return S0.create(s,...t)}function ut(s,t,...i){if(!s)throw sm(t,...i)}function xi(s){const t="INTERNAL ASSERTION FAILED: "+s;throw ic(t),new Error(t)}function Gi(s,t){s||xi(t)}/**
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
 */function bd(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function w0(){return Rv()==="http:"||Rv()==="https:"}function Rv(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function $R(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(w0()||YT()||"connection"in navigator)?navigator.onLine:!0}function ZR(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class El{constructor(t,i){this.shortDelay=t,this.longDelay=i,Gi(i>t,"Short delay should be less than long delay!"),this.isMobile=FT()||XT()}get(){return $R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function am(s,t){Gi(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
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
 */class R0{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JR=new El(3e4,6e4);function om(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Vs(s,t,i,a,l={}){return C0(s,l,async()=>{let h={},d={};a&&(t==="GET"?d=a:h={body:JSON.stringify(a)});const y=ja(Object.assign({key:s.config.apiKey},d)).slice(1),v=await s._getAdditionalHeaders();v["Content-Type"]="application/json",s.languageCode&&(v["X-Firebase-Locale"]=s.languageCode);const _=Object.assign({method:t,headers:v},h);return QT()||(_.referrerPolicy="no-referrer"),R0.fetch()(I0(s,s.config.apiHost,i,y),_)})}async function C0(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},WR),t);try{const l=new e1(s),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Zu(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const y=h.ok?d.errorMessage:d.error.message,[v,_]=y.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(s,"credential-already-in-use",d);if(v==="EMAIL_EXISTS")throw Zu(s,"email-already-in-use",d);if(v==="USER_DISABLED")throw Zu(s,"user-disabled",d);const I=a[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw b0(s,I,_);qi(s,I)}}catch(l){if(l instanceof Fi)throw l;qi(s,"network-request-failed",{message:String(l)})}}async function t1(s,t,i,a,l={}){const h=await Vs(s,t,i,a,l);return"mfaPendingCredential"in h&&qi(s,"multi-factor-auth-required",{_serverResponse:h}),h}function I0(s,t,i,a){const l=`${t}${i}?${a}`;return s.config.emulator?am(s.config,l):`${s.config.apiScheme}://${l}`}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(mn(this.auth,"network-request-failed")),JR.get())})}}function Zu(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=mn(s,t,a);return l.customData._tokenResponse=i,l}/**
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
 */function Cv(s){return s!==void 0&&s.getResponse!==void 0}/**
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
 */async function n1(s){return(await Vs(s,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */async function i1(s,t){return Vs(s,"POST","/v1/accounts:delete",t)}async function D0(s,t){return Vs(s,"POST","/v1/accounts:lookup",t)}/**
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
 */function rl(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function r1(s,t=!1){const i=Mn(s),a=await i.getIdToken(t),l=lm(a);ut(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:rl(id(l.auth_time)),issuedAtTime:rl(id(l.iat)),expirationTime:rl(id(l.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function id(s){return Number(s)*1e3}function lm(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const l=Fv(i);return l?JSON.parse(l):(ic("Failed to decode base64 JWT payload"),null)}catch(l){return ic("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Iv(s){const t=lm(s);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function dl(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof Fi&&s1(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function s1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class a1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wd{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=rl(this.lastLoginAt),this.creationTime=rl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ac(s){var t;const i=s.auth,a=await s.getIdToken(),l=await dl(s,D0(i,{idToken:a}));ut(l==null?void 0:l.users.length,i,"internal-error");const h=l.users[0];s._notifyReloadListener(h);const d=!((t=h.providerUserInfo)===null||t===void 0)&&t.length?O0(h.providerUserInfo):[],y=l1(s.providerData,d),v=s.isAnonymous,_=!(s.email&&h.passwordHash)&&!(y!=null&&y.length),I=v?_:!1,V={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:y,metadata:new wd(h.createdAt,h.lastLoginAt),isAnonymous:I};Object.assign(s,V)}async function o1(s){const t=Mn(s);await Ac(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function l1(s,t){return[...s.filter(a=>!t.some(l=>l.providerId===a.providerId)),...t]}function O0(s){return s.map(t=>{var{providerId:i}=t,a=rm(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function u1(s,t){const i=await C0(s,{},async()=>{const a=ja({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:h}=s.config,d=I0(s,l,"/v1/token",`key=${h}`),y=await s._getAdditionalHeaders();return y["Content-Type"]="application/x-www-form-urlencoded",R0.fetch()(d,{method:"POST",headers:y,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function c1(s,t){return Vs(s,"POST","/v2/accounts:revokeToken",om(s,t))}/**
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
 */class Oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Iv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const i=Iv(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await u1(t,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new Oa;return a&&(ut(typeof a=="string","internal-error",{appName:t}),d.refreshToken=a),l&&(ut(typeof l=="string","internal-error",{appName:t}),d.accessToken=l),h&&(ut(typeof h=="number","internal-error",{appName:t}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oa,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
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
 */function Dr(s,t){ut(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Ui{constructor(t){var{uid:i,auth:a,stsTokenManager:l}=t,h=rm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new wd(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(t){const i=await dl(this,this.stsTokenManager.getToken(this.auth,t));return ut(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return r1(this,t)}reload(){return o1(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Ui(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await Ac(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(si(this.auth.app))return Promise.reject(ws(this.auth));const t=await this.getIdToken();return await dl(this,i1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,l,h,d,y,v,_,I;const V=(a=i.displayName)!==null&&a!==void 0?a:void 0,B=(l=i.email)!==null&&l!==void 0?l:void 0,$=(h=i.phoneNumber)!==null&&h!==void 0?h:void 0,X=(d=i.photoURL)!==null&&d!==void 0?d:void 0,lt=(y=i.tenantId)!==null&&y!==void 0?y:void 0,et=(v=i._redirectEventId)!==null&&v!==void 0?v:void 0,At=(_=i.createdAt)!==null&&_!==void 0?_:void 0,ft=(I=i.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:yt,emailVerified:Pt,isAnonymous:mt,providerData:Ct,stsTokenManager:k}=i;ut(yt&&k,t,"internal-error");const R=Oa.fromJSON(this.name,k);ut(typeof yt=="string",t,"internal-error"),Dr(V,t.name),Dr(B,t.name),ut(typeof Pt=="boolean",t,"internal-error"),ut(typeof mt=="boolean",t,"internal-error"),Dr($,t.name),Dr(X,t.name),Dr(lt,t.name),Dr(et,t.name),Dr(At,t.name),Dr(ft,t.name);const S=new Ui({uid:yt,auth:t,email:B,emailVerified:Pt,displayName:V,isAnonymous:mt,photoURL:X,phoneNumber:$,tenantId:lt,stsTokenManager:R,createdAt:At,lastLoginAt:ft});return Ct&&Array.isArray(Ct)&&(S.providerData=Ct.map(C=>Object.assign({},C))),et&&(S._redirectEventId=et),S}static async _fromIdTokenResponse(t,i,a=!1){const l=new Oa;l.updateFromServerResponse(i);const h=new Ui({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a});return await Ac(h),h}static async _fromGetAccountInfoResponse(t,i,a){const l=i.users[0];ut(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?O0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),y=new Oa;y.updateFromIdToken(a);const v=new Ui({uid:l.localId,auth:t,stsTokenManager:y,isAnonymous:d}),_={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new wd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(v,_),v}}/**
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
 */const Dv=new Map;function Li(s){Gi(s instanceof Function,"Expected a class definition");let t=Dv.get(s);return t?(Gi(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,Dv.set(s,t),t)}/**
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
 */class N0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}N0.type="NONE";const Ov=N0;/**
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
 */function rc(s,t,i){return`firebase:${s}:${t}:${i}`}class Na{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=rc(this.userKey,l.apiKey,h),this.fullPersistenceKey=rc("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ui._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Na(Li(Ov),t,a);const l=(await Promise.all(i.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let h=l[0]||Li(Ov);const d=rc(a,t.config.apiKey,t.name);let y=null;for(const _ of i)try{const I=await _._get(d);if(I){const V=Ui._fromJSON(t,I);_!==h&&(y=V),h=_;break}}catch{}const v=l.filter(_=>_._shouldAllowMigration);return!h._shouldAllowMigration||!v.length?new Na(h,t,a):(h=v[0],y&&await h._set(d,y.toJSON()),await Promise.all(i.map(async _=>{if(_!==h)try{await _._remove(d)}catch{}})),new Na(h,t,a))}}/**
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
 */function Nv(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(x0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(M0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(L0(t))return"Blackberry";if(P0(t))return"Webos";if(k0(t))return"Safari";if((t.includes("chrome/")||V0(t))&&!t.includes("edge/"))return"Chrome";if(U0(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function M0(s=Ke()){return/firefox\//i.test(s)}function k0(s=Ke()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function V0(s=Ke()){return/crios\//i.test(s)}function x0(s=Ke()){return/iemobile/i.test(s)}function U0(s=Ke()){return/android/i.test(s)}function L0(s=Ke()){return/blackberry/i.test(s)}function P0(s=Ke()){return/webos/i.test(s)}function um(s=Ke()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function h1(s=Ke()){var t;return um(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function f1(){return $T()&&document.documentMode===10}function z0(s=Ke()){return um(s)||U0(s)||P0(s)||L0(s)||/windows phone/i.test(s)||x0(s)}/**
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
 */function j0(s,t=[]){let i;switch(s){case"Browser":i=Nv(Ke());break;case"Worker":i=`${Nv(Ke())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ba}/${a}`}/**
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
 */class d1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=h=>new Promise((d,y)=>{try{const v=t(h);d(v)}catch(v){y(v)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(s,t={}){return Vs(s,"GET","/v2/passwordPolicy",om(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=6;class p1{constructor(t){var i,a,l,h;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:g1,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=t.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,l,h,d,y;const v={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,v),this.validatePasswordCharacterOptions(t,v),v.isValid&&(v.isValid=(i=v.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),v.isValid&&(v.isValid=(a=v.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),v.isValid&&(v.isValid=(l=v.containsLowercaseLetter)!==null&&l!==void 0?l:!0),v.isValid&&(v.isValid=(h=v.containsUppercaseLetter)!==null&&h!==void 0?h:!0),v.isValid&&(v.isValid=(d=v.containsNumericCharacter)!==null&&d!==void 0?d:!0),v.isValid&&(v.isValid=(y=v.containsNonAlphanumericCharacter)!==null&&y!==void 0?y:!0),v}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),l&&(i.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<t.length;l++)a=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=h))}}/**
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
 */class y1{constructor(t,i,a,l){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mv(this),this.idTokenSubscription=new Mv(this),this.beforeStateQueue=new d1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=Li(i)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await Na.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await D0(this,{idToken:t}),a=await Ui._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(si(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(y=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(y,y))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,h=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,y=l==null?void 0:l._redirectEventId,v=await this.tryRedirectSignIn(t);(!d||d===y)&&(v!=null&&v.user)&&(l=v.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Ac(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(si(this.app))return Promise.reject(ws(this));const i=t?Mn(t):null;return i&&ut(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return si(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return si(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await m1(this),i=new p1(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new za("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await c1(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&Li(t)||this._popupRedirectResolver;ut(i,this,"argument-error"),this.redirectPersistenceManager=await Na.create(this,[Li(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(y,this,"internal-error"),y.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const v=t.addObserver(i,a,l);return()=>{d=!0,v()}}else{const v=t.addObserver(i);return()=>{d=!0,v()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=j0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var t;if(si(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&XR(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Pc(s){return Mn(s)}class Mv{constructor(t){this.auth=t,this.observer=null,this.addObserver=iA(i=>this.observer=i)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v1(s){zc=s}function B0(s){return zc.loadJS(s)}function _1(){return zc.recaptchaV2Script}function E1(){return zc.gapiScript}function H0(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */const T1=500,A1=6e4,Wu=1e12;class S1{constructor(t){this.auth=t,this.counter=Wu,this._widgets=new Map}render(t,i){const a=this.counter;return this._widgets.set(a,new b1(t,this.auth.name,i||{})),this.counter++,a}reset(t){var i;const a=t||Wu;(i=this._widgets.get(a))===null||i===void 0||i.delete(),this._widgets.delete(a)}getResponse(t){var i;const a=t||Wu;return((i=this._widgets.get(a))===null||i===void 0?void 0:i.getResponse())||""}async execute(t){var i;const a=t||Wu;return(i=this._widgets.get(a))===null||i===void 0||i.execute(),""}}class b1{constructor(t,i,a){this.params=a,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const l=typeof t=="string"?document.getElementById(t):t;ut(l,"argument-error",{appName:i}),this.container=l,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=w1(50);const{callback:t,"expired-callback":i}=this.params;if(t)try{t(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,i)try{i()}catch{}this.isVisible&&this.execute()},A1)},T1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function w1(s){const t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<s;a++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}/**
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
 */function R1(s,t){const i=ml(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(Rs(h,t??{}))return l;qi(l,"already-initialized")}return i.initialize({options:t})}function C1(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(Li);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function I1(s,t,i){const a=Pc(s);ut(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const l=!1,h=q0(t),{host:d,port:y}=D1(t),v=y===null?"":`:${y}`,_={url:`${h}//${d}${v}/`},I=Object.freeze({host:d,port:y,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){ut(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),ut(Rs(_,a.config.emulator)&&Rs(I,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=_,a.emulatorConfig=I,a.settings.appVerificationDisabledForTesting=!0,O1()}function q0(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function D1(s){const t=q0(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:kv(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:kv(d)}}}function kv(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function O1(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class G0{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return xi("not implemented")}_getIdTokenResponse(t){return xi("not implemented")}_linkToIdToken(t,i){return xi("not implemented")}_getReauthenticationResolver(t){return xi("not implemented")}}/**
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
 */async function Ma(s,t){return t1(s,"POST","/v1/accounts:signInWithIdp",om(s,t))}/**
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
 */const N1="http://localhost";class Ns extends G0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Ns(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):qi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:l}=i,h=rm(i,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Ns(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(t){const i=this.buildRequest();return Ma(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Ma(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Ma(t,i)}buildRequest(){const t={requestUri:N1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ja(i)}return t}}/**
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
 */class F0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tl extends F0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Tl{constructor(){super("facebook.com")}static credential(t){return Ns._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Or.credential(t.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Nr extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Ns._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Nr.credentialFromTaggedObject(t)}static credentialFromError(t){return Nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return Nr.credential(i,a)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Tl{constructor(){super("github.com")}static credential(t){return Ns._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mr.credentialFromTaggedObject(t)}static credentialFromError(t){return Mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mr.credential(t.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class kr extends Tl{constructor(){super("twitter.com")}static credential(t,i){return Ns._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return kr.credentialFromTaggedObject(t)}static credentialFromError(t){return kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return kr.credential(i,a)}catch{return null}}}kr.TWITTER_SIGN_IN_METHOD="twitter.com";kr.PROVIDER_ID="twitter.com";/**
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
 */class Pa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,l=!1){const h=await Ui._fromIdTokenResponse(t,a,l),d=Vv(a);return new Pa({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const l=Vv(a);return new Pa({user:t,providerId:l,_tokenResponse:a,operationType:i})}}function Vv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Sc extends Fi{constructor(t,i,a,l){var h;super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:t.name,tenantId:(h=t.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,l){return new Sc(t,i,a,l)}}function K0(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(s,h,t,a):h})}async function M1(s,t,i=!1){const a=await dl(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Pa._forOperation(s,"link",a)}/**
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
 */async function k1(s,t,i=!1){const{auth:a}=s;if(si(a.app))return Promise.reject(ws(a));const l="reauthenticate";try{const h=await dl(s,K0(a,l,t,s),i);ut(h.idToken,a,"internal-error");const d=lm(h.idToken);ut(d,a,"internal-error");const{sub:y}=d;return ut(s.uid===y,a,"user-mismatch"),Pa._forOperation(s,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&qi(a,"user-mismatch"),h}}/**
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
 */async function V1(s,t,i=!1){if(si(s.app))return Promise.reject(ws(s));const a="signIn",l=await K0(s,a,t),h=await Pa._fromIdTokenResponse(s,a,l);return i||await s._updateCurrentUser(h.user),h}function x1(s,t,i,a){return Mn(s).onIdTokenChanged(t,i,a)}function U1(s,t,i){return Mn(s).beforeAuthStateChanged(t,i)}const bc="__sak";/**
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
 */class Q0{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const L1=1e3,P1=10;class Y0 extends Q0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=z0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&t(i,l,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((d,y,v)=>{this.notifyListeners(d,v)});return}const a=t.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);f1()&&h!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,P1):l()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},L1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}Y0.type="LOCAL";const z1=Y0;/**
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
 */class X0 extends Q0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}X0.type="SESSION";const $0=X0;/**
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
 */function j1(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(l=>l.isListeningto(t));if(i)return i;const a=new jc(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const y=Array.from(d).map(async _=>_(i.origin,h)),v=await j1(y);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:v})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
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
 */function cm(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class B1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((y,v)=>{const _=cm("",20);l.port1.start();const I=setTimeout(()=>{v(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(V){const B=V;if(B.data.eventId===_)switch(B.data.status){case"ack":clearTimeout(I),h=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),y(B.data.response);break;default:clearTimeout(I),clearTimeout(h),v(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:t,eventId:_,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function me(){return window}function H1(s){me().location.href=s}/**
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
 */function hm(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function F1(){return hm()?self:null}/**
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
 */const Z0="firebaseLocalStorageDb",K1=1,wc="firebaseLocalStorage",W0="fbase_key";class Al{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Bc(s,t){return s.transaction([wc],t?"readwrite":"readonly").objectStore(wc)}function Q1(){const s=indexedDB.deleteDatabase(Z0);return new Al(s).toPromise()}function Rd(){const s=indexedDB.open(Z0,K1);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(wc,{keyPath:W0})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(wc)?t(a):(a.close(),await Q1(),t(await Rd()))})})}async function xv(s,t,i){const a=Bc(s,!0).put({[W0]:t,value:i});return new Al(a).toPromise()}async function Y1(s,t){const i=Bc(s,!1).get(t),a=await new Al(i).toPromise();return a===void 0?null:a.value}function Uv(s,t){const i=Bc(s,!0).delete(t);return new Al(i).toPromise()}const X1=800,$1=3;class J0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rd(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>$1)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(F1()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await q1(),!this.activeServiceWorker)return;this.sender=new B1(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Rd();return await xv(t,bc,"1"),await Uv(t,bc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>xv(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>Y1(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Uv(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const h=Bc(l,!1).getAll();return new Al(h).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:l,value:h}of t)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}J0.type="LOCAL";const Z1=J0;/**
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
 */const rd=H0("rcb"),W1=new El(3e4,6e4);class J1{constructor(){var t;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((t=me().grecaptcha)===null||t===void 0)&&t.render)}load(t,i=""){return ut(tC(i),t,"argument-error"),this.shouldResolveImmediately(i)&&Cv(me().grecaptcha)?Promise.resolve(me().grecaptcha):new Promise((a,l)=>{const h=me().setTimeout(()=>{l(mn(t,"network-request-failed"))},W1.get());me()[rd]=()=>{me().clearTimeout(h),delete me()[rd];const y=me().grecaptcha;if(!y||!Cv(y)){l(mn(t,"internal-error"));return}const v=y.render;y.render=(_,I)=>{const V=v(_,I);return this.counter++,V},this.hostLanguage=i,a(y)};const d=`${_1()}?${ja({onload:rd,render:"explicit",hl:i})}`;B0(d).catch(()=>{clearTimeout(h),l(mn(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){var i;return!!(!((i=me().grecaptcha)===null||i===void 0)&&i.render)&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tC(s){return s.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(s)}class eC{async load(t){return new S1(t)}clearedOneInstance(){}}/**
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
 */const nC="recaptcha",iC={theme:"light",type:"image"};class rC{constructor(t,i,a=Object.assign({},iC)){this.parameters=a,this.type=nC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pc(t),this.isInvisible=this.parameters.size==="invisible",ut(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const l=typeof i=="string"?document.getElementById(i):i;ut(l,this.auth,"argument-error"),this.container=l,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eC:new J1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),i=this.getAssertedRecaptcha(),a=i.getResponse(t);return a||new Promise(l=>{const h=d=>{d&&(this.tokenChangeListeners.delete(h),l(d))};this.tokenChangeListeners.add(h),this.isInvisible&&i.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){ut(!this.parameters.sitekey,this.auth,"argument-error"),ut(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ut(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return i=>{if(this.tokenChangeListeners.forEach(a=>a(i)),typeof t=="function")t(i);else if(typeof t=="string"){const a=me()[t];typeof a=="function"&&a(i)}}}assertNotDestroyed(){ut(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const i=document.createElement("div");t.appendChild(i),t=i}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){ut(w0()&&!hm(),this.auth,"internal-error"),await sC(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await n1(this.auth);ut(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return ut(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function sC(){let s=null;return new Promise(t=>{if(document.readyState==="complete"){t();return}s=()=>t(),window.addEventListener("load",s)}).catch(t=>{throw s&&window.removeEventListener("load",s),t})}/**
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
 */function aC(s,t){return t?Li(t):(ut(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class fm extends G0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ma(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Ma(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Ma(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function oC(s){return V1(s.auth,new fm(s),s.bypassAuthState)}function lC(s){const{auth:t,user:i}=s;return ut(i,t,"internal-error"),k1(i,new fm(s),s.bypassAuthState)}async function uC(s){const{auth:t,user:i}=s;return ut(i,t,"internal-error"),M1(i,new fm(s),s.bypassAuthState)}/**
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
 */class tE{constructor(t,i,a,l,h=!1){this.auth=t,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:y}=t;if(d){this.reject(d);return}const v={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(v))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return oC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return lC;default:qi(this.auth,"internal-error")}}resolve(t){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cC=new El(2e3,1e4);class Ia extends tE{constructor(t,i,a,l,h){super(t,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Ia.currentPopupAction&&Ia.currentPopupAction.cancel(),Ia.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ut(t,this.auth,"internal-error"),t}async onExecution(){Gi(this.filter.length===1,"Popup operations only handle one event");const t=cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ia.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cC.get())};t()}}Ia.currentPopupAction=null;/**
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
 */const hC="pendingRedirect",sc=new Map;class fC extends tE{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=sc.get(this.auth._key());if(!t){try{const a=await dC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}sc.set(this.auth._key(),t)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dC(s,t){const i=pC(t),a=gC(s);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function mC(s,t){sc.set(s._key(),t)}function gC(s){return Li(s._redirectPersistence)}function pC(s){return rc(hC,s.config.apiKey,s.name)}async function yC(s,t,i=!1){if(si(s.app))return Promise.reject(ws(s));const a=Pc(s),l=aC(a,t),d=await new fC(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,t)),d}/**
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
 */const vC=10*60*1e3;class _C{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!EC(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!eE(t)){const l=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(mn(this.auth,l))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lv(t))}saveEventToCache(t){this.cachedEventUids.add(Lv(t)),this.lastProcessedEventTime=Date.now()}}function Lv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function eE({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function EC(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eE(s);default:return!1}}/**
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
 */async function TC(s,t={}){return Vs(s,"GET","/v1/projects",t)}/**
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
 */const AC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SC=/^https?/;async function bC(s){if(s.config.emulator)return;const{authorizedDomains:t}=await TC(s);for(const i of t)try{if(wC(i))return}catch{}qi(s,"unauthorized-domain")}function wC(s){const t=bd(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!SC.test(i))return!1;if(AC.test(s))return a===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const RC=new El(3e4,6e4);function Pv(){const s=me().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function CC(s){return new Promise((t,i)=>{var a,l,h;function d(){Pv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pv(),i(mn(s,"network-request-failed"))},timeout:RC.get()})}if(!((l=(a=me().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((h=me().gapi)===null||h===void 0)&&h.load)d();else{const y=H0("iframefcb");return me()[y]=()=>{gapi.load?d():i(mn(s,"network-request-failed"))},B0(`${E1()}?onload=${y}`).catch(v=>i(v))}}).catch(t=>{throw ac=null,t})}let ac=null;function IC(s){return ac=ac||CC(s),ac}/**
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
 */const DC=new El(5e3,15e3),OC="__/auth/iframe",NC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VC(s){const t=s.config;ut(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?am(t,NC):`https://${s.config.authDomain}/${OC}`,a={apiKey:t.apiKey,appName:s.name,v:Ba},l=kC.get(s.config.apiHost);l&&(a.eid=l);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${ja(a).slice(1)}`}async function xC(s){const t=await IC(s),i=me().gapi;return ut(i,s,"internal-error"),t.open({where:document.body,url:VC(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=mn(s,"network-request-failed"),y=me().setTimeout(()=>{h(d)},DC.get());function v(){me().clearTimeout(y),l(a)}a.ping(v).then(v,()=>{h(d)})}))}/**
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
 */const UC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LC=500,PC=600,zC="_blank",jC="http://localhost";class zv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BC(s,t,i,a=LC,l=PC){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let y="";const v=Object.assign(Object.assign({},UC),{width:a.toString(),height:l.toString(),top:h,left:d}),_=Ke().toLowerCase();i&&(y=V0(_)?zC:i),M0(_)&&(t=t||jC,v.scrollbars="yes");const I=Object.entries(v).reduce((B,[$,X])=>`${B}${$}=${X},`,"");if(h1(_)&&y!=="_self")return HC(t||"",y),new zv(null);const V=window.open(t||"",y,I);ut(V,s,"popup-blocked");try{V.focus()}catch{}return new zv(V)}function HC(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const qC="__/auth/handler",GC="emulator/auth/handler",FC=encodeURIComponent("fac");async function jv(s,t,i,a,l,h){ut(s.config.authDomain,s,"auth-domain-config-required"),ut(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:Ba,eventId:l};if(t instanceof F0){t.setDefaultLanguage(s.languageCode),d.providerId=t.providerId||"",nA(t.getCustomParameters())||(d.customParameters=JSON.stringify(t.getCustomParameters()));for(const[I,V]of Object.entries({}))d[I]=V}if(t instanceof Tl){const I=t.getScopes().filter(V=>V!=="");I.length>0&&(d.scopes=I.join(","))}s.tenantId&&(d.tid=s.tenantId);const y=d;for(const I of Object.keys(y))y[I]===void 0&&delete y[I];const v=await s._getAppCheckToken(),_=v?`#${FC}=${encodeURIComponent(v)}`:"";return`${KC(s)}?${ja(y).slice(1)}${_}`}function KC({config:s}){return s.emulator?am(s,GC):`https://${s.authDomain}/${qC}`}/**
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
 */const sd="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$0,this._completeRedirectFn=yC,this._overrideRedirectResult=mC}async _openPopup(t,i,a,l){var h;Gi((h=this.eventManagers[t._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const d=await jv(t,i,a,bd(),l);return BC(t,d,cm())}async _openRedirect(t,i,a,l){await this._originValidation(t);const h=await jv(t,i,a,bd(),l);return H1(h),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Gi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await xC(t),a=new _C(t);return i.register("authEvent",l=>(ut(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(sd,{type:sd},l=>{var h;const d=(h=l==null?void 0:l[0])===null||h===void 0?void 0:h[sd];d!==void 0&&i(!!d),qi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=bC(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return z0()||k0()||um()}}const YC=QC;var Bv="@firebase/auth",Hv="1.9.1";/**
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
 */class XC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZC(s){Lr(new Bi("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),h=t.getProvider("app-check-internal"),{apiKey:d,authDomain:y}=a.options;ut(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const v={apiKey:d,authDomain:y,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j0(s)},_=new y1(a,l,h,v);return C1(_,i),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Lr(new Bi("auth-internal",t=>{const i=Pc(t.getProvider("auth").getImmediate());return(a=>new XC(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pi(Bv,Hv,$C(s)),Pi(Bv,Hv,"esm2017")}/**
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
 */const WC=5*60,JC=Xv("authIdTokenMaxAge")||WC;let qv=null;const tI=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>JC)return;const l=i==null?void 0:i.token;qv!==l&&(qv=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function eI(s=Nd()){const t=ml(s,"auth");if(t.isInitialized())return t.getImmediate();const i=R1(s,{popupRedirectResolver:YC,persistence:[Z1,z1,$0]}),a=Xv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=tI(h.toString());U1(i,d,()=>d(i.currentUser)),x1(i,y=>d(y))}}const l=Qv("auth");return l&&I1(i,`http://${l}`),i}function nI(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}v1({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=l=>{const h=mn("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",nI().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZC("Browser");function iI(){const[s,t]=Je.useState([]),[i,a]=Je.useState([]),[l,h]=Je.useState(0),[d,y]=Je.useState([]),[v,_]=Je.useState([]),[I,V]=Je.useState(null),[B,$]=Je.useState(null),[X,lt]=Je.useState({}),[et,At]=Je.useState(null),[ft,yt]=Je.useState(!1);Je.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/questions.json").then(A=>A.json()).then(A=>{console.log("Fetched questions:",A),Array.isArray(A)&&A.length>0?(t(A),y(Array(A.length).fill(null))):console.error("Invalid questions data:",A)}).catch(A=>console.error("Error fetching questions:",A))},[]),Je.useEffect(()=>{const A=eI();window.recaptchaVerifier=new rC("recaptcha-container",{size:"invisible",callback:O=>{},"expired-callback":()=>{}},A)},[]),Je.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/question_details.json").then(A=>A.json()).then(A=>{console.log("Fetched question details:",A),a(A)}).catch(A=>console.error("Error fetching question details:",A))},[]),Je.useEffect(()=>{s.length&&_(Array(s.length).fill(3))},[s]);const Pt=A=>{y(O=>{const b=[...O];return b[l]=A,b}),l<s.length-1&&h(l+1)},mt=()=>{l<s.length-1&&h(l+1)},Ct=()=>{l>0&&h(l-1)},k=()=>{console.log("Submitted answers:",s.map((A,O)=>({id:A.id,question:A.question,answer:d[O]||"Sin respuesta",weight:v[O]})))},R=async()=>{const A={userId:localStorage.getItem("userId")||Date.now(),answers:d,createdAt:new Date};localStorage.setItem("userId",A.userId);try{const O=await sR(Gw(QR,"quizAnswers"),A);console.log("Document written with ID:",O.id)}catch(O){console.error("Error adding document:",O)}},S=()=>{k(),R(),$(null),yt(!1),h(s.length);const A={},O={Sí:1,"No tengo una opinión sobre este tema":.5,No:0};s.forEach((b,Ht)=>{const qt=d[Ht]||"No tengo una opinión sobre este tema";A[b.id]={answer:O[qt]||.5,weight:v[Ht]}}),fetch("https://josevalqui.github.io/votometro/processed_votes.json").then(b=>b.json()).then(b=>{const Ht=b.candidates.map(nt=>{let it=0,Dt=0;Object.entries(nt.votes).forEach(([Q,st])=>{if(st===null)return;const J=Q.split("_")[0];if(A[J]){const{answer:tt,weight:pt}=A[J];it+=Math.abs(tt-st)*pt,Dt+=pt}});const D=Dt>0?Math.round((1-it/Dt)*100):0;return{name:nt.name,party:nt.party,similarity_score:D}});Ht.sort((nt,it)=>it.similarity_score-nt.similarity_score);const qt={};Ht.forEach(nt=>{qt[nt.party]||(qt[nt.party]={total:0,count:0}),qt[nt.party].total+=nt.similarity_score,qt[nt.party].count+=1});const W=Object.entries(qt).map(([nt,it])=>({party:nt,average_similarity_score:Math.round(it.total/it.count)}));W.sort((nt,it)=>it.average_similarity_score-nt.average_similarity_score),V({individual_results:Ht,party_results:W})}).catch(b=>console.error("Error fetching processed votes:",b))},C=(A,O)=>{$(A),fetch("https://josevalqui.github.io/votometro/vote_details.json").then(b=>b.json()).then(b=>{O==="individual"?lt(b.candidates[A.name]||{}):O==="party"&&lt({party_meta:b.party_meta[A.party]||{},details:b.parties[A.party]||[]})}).catch(b=>console.error("Error fetching vote details:",b))};return G.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",minHeight:"90vh",width:"100vw",overflowY:"auto",padding:"20px"},children:G.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"1100px"},children:s.length===0?G.jsx("h2",{children:"Loading..."}):l<s.length?G.jsxs(G.Fragment,{children:[G.jsx("div",{style:{marginBottom:"10px"},children:G.jsxs("h3",{children:[l+1," / ",s.length]})}),G.jsxs("div",{style:{marginBottom:"20px"},children:[G.jsx("label",{children:"Importancia de este tema:"}),G.jsx("br",{}),G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[G.jsx("span",{style:{fontSize:"14px"},children:"Poca"}),G.jsx("input",{type:"range",min:"1",max:"5",value:v[l]!==void 0?v[l]:3,onChange:A=>{const O=[...v];O[l]=Number(A.target.value),_(O)},style:{flexGrow:1}}),G.jsx("span",{style:{fontSize:"14px"},children:"Mucha"})]})]}),G.jsx("h2",{children:s[l].question}),s[l].options.map((A,O)=>G.jsx("button",{onClick:()=>Pt(A),onMouseEnter:()=>At(A),onMouseLeave:()=>At(null),style:{margin:"10px",padding:"10px 40px",fontSize:"16px",cursor:"pointer",display:"block",width:"100%",backgroundColor:d[l]===A||et===A?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px"},children:A},O)),G.jsxs("div",{style:{marginTop:"20px"},children:[G.jsx("button",{onClick:Ct,disabled:l===0,style:{marginRight:"10px",padding:"10px 20px",fontSize:"16px",cursor:l===0?"not-allowed":"pointer",opacity:l===0?.5:1},children:"Volver"}),G.jsx("button",{onClick:()=>{l===s.length-1?S():mt()},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer"},children:l===s.length-1?"Terminar encuesta":"Saltar"})]}),G.jsxs("div",{style:{marginTop:"20px"},children:[G.jsx("h3",{children:"Current Answers:"}),G.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:d.map((A,O)=>G.jsxs("li",{children:[G.jsxs("strong",{children:["Q",O+1,":"]})," ",A||"Sin respuesta"]},O))})]})]}):G.jsxs(G.Fragment,{children:[G.jsx("div",{id:"recaptcha-container"}),G.jsx("h2",{children:"Completaste el Votómetro!"}),G.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"flex-start",width:"100%"},children:[G.jsx("button",{onClick:()=>yt(!1),onMouseEnter:A=>{A.target.style.backgroundColor="black",A.target.style.color="white"},onMouseLeave:A=>{A.target.style.backgroundColor=ft?"darkslategrey":"black"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:ft?"darkslategrey":"black",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Partidos políticos"}),G.jsx("button",{onClick:()=>yt(!0),onMouseEnter:A=>{A.target.style.backgroundColor="black",A.target.style.color="white"},onMouseLeave:A=>{A.target.style.backgroundColor=ft?"black":"darkslategrey"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:ft?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Congresistas"})]}),G.jsxs("div",{style:{display:"flex",width:"100%"},children:[G.jsx("div",{style:{flex:1},children:I&&G.jsx("div",{style:{marginTop:"20px",width:"100%"},children:ft?G.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",maxHeight:"40vh",overflowY:"auto"},children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[G.jsx("span",{children:"Congresista"}),G.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),I.individual_results.map((A,O)=>{var b;return G.jsxs("li",{style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:()=>C(A,"individual"),children:[G.jsxs("span",{children:[((b=A.names)==null?void 0:b.join(", "))||A.name," (",A.party,")"]}),G.jsxs("span",{style:{marginLeft:"auto",fontWeight:"bold",paddingRight:"15px"},children:[A.similarity_score,"%"]})]},O)})]}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[G.jsx("span",{children:"Partido"}),G.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),G.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",width:"100%"},children:I.party_results.map((A,O)=>G.jsx("li",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"5px 0"},onClick:()=>C(A,"party"),children:G.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[G.jsx("span",{children:G.jsx("strong",{children:A.party})}),G.jsxs("span",{style:{fontWeight:"bold",paddingRight:"15px"},children:[A.average_similarity_score,"%"]})]})},O))})]})})}),G.jsx("div",{style:{width:"50%",padding:"0px 0px 0px 15px",borderLeft:"1px solid #ccc",overflowY:"auto",maxHeight:"45vh",textAlign:"left"},children:B?G.jsxs(G.Fragment,{children:[G.jsx("h2",{style:{margin:"2px 0"},children:B.name?B.name:B.party}),X.candidate_meta&&G.jsx("div",{style:{marginBottom:"4px"},children:G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Edad (2024):"})," ",X.candidate_meta.age,G.jsx("br",{}),G.jsx("strong",{children:"Sentencia penal:"})," ",X.candidate_meta.sentencia_penal,G.jsx("br",{}),G.jsx("strong",{children:"Partido:"})," ",X.candidate_meta.party,G.jsx("br",{}),G.jsx("strong",{children:"Asistencia:"})," ",X.candidate_meta.attendance||"N/A",G.jsx("br",{}),G.jsx("br",{})]})}),X.party_meta&&G.jsxs("div",{style:{marginBottom:"4px"},children:[G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Edad promedio:"})," ",X.party_meta.average_age,G.jsx("br",{}),G.jsx("strong",{children:"Asistencia promedio:"})," ",X.party_meta.average_attendance_percentage||"N/A","%",G.jsx("br",{}),G.jsx("strong",{children:"Sentencia penal:"})," ",X.party_meta.sentencia_penal.yes,"/",X.party_meta.sentencia_penal.total," congresistas",G.jsx("br",{})]}),G.jsx("br",{})]}),X.details&&X.details.length>0?i.length>0?i.map((A,O)=>{let b=X.details.find(Ht=>Ht.id===A.id)||{};return G.jsxs("div",{style:{marginBottom:"2px",lineHeight:"1.2"},children:[G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Statement:"})," ",A.question," ",G.jsx("br",{}),G.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[G.jsx("strong",{children:"Proyecto de ley:"})," ",A.law?A.law:"N/A"]})]}),G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Fecha de la votación:"})," ",b.date||"N/A"," ",G.jsx("br",{}),X.party_meta?G.jsxs(G.Fragment,{children:[G.jsx("strong",{children:"Voto más común:"})," ",b.vote||"N/A"," ",G.jsx("br",{})]}):G.jsxs(G.Fragment,{children:[G.jsx("strong",{children:"Voto:"})," ",b.vote||"N/A"," ",G.jsx("br",{})]})]}),G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Documento y noticias:"})," ",A.source?G.jsxs(G.Fragment,{children:[G.jsx("a",{href:A.pdf_link,target:"_blank",rel:"noopener noreferrer",children:"Documento"})," ","|"," ",G.jsx("a",{href:A.source,target:"_blank",rel:"noopener noreferrer",children:new URL(A.source).hostname.replace("www.","")+"/..."})]}):"N/A"]}),G.jsx("br",{})]},O)}):G.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):G.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]}):G.jsx("p",{children:" "})})]}),G.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:[G.jsx("strong",{children:"Tus respuestas:"}),d.map((A,O)=>{var b;return G.jsxs("li",{children:[(b=s[O])==null?void 0:b.question,": ",A||"Sin respuesta"]},O)})]}),G.jsx("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:G.jsx("button",{onClick:()=>h(s.length-1),onMouseEnter:A=>A.target.style.backgroundColor="black",onMouseLeave:A=>A.target.style.backgroundColor="darkslategrey",style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})})})}xT.createRoot(document.getElementById("root")).render(G.jsx(Je.StrictMode,{children:G.jsx(iI,{})}));
