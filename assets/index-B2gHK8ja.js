(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(l){if(l.ep)return;l.ep=!0;const h=i(l);fetch(l.href,h)}})();var Pf={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function ET(){if(fy)return Xo;fy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,h){var d=null;if(h!==void 0&&(d=""+h),l.key!==void 0&&(d=""+l.key),"key"in l){h={};for(var y in l)y!=="key"&&(h[y]=l[y])}else h=l;return l=h.ref,{$$typeof:s,type:a,key:d,ref:l!==void 0?l:null,props:h}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var dy;function TT(){return dy||(dy=1,Pf.exports=ET()),Pf.exports}var G=TT(),zf={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function AT(){if(gy)return vt;gy=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),d=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),k=Symbol.iterator;function B(D){return D===null||typeof D!="object"?null:(D=k&&D[k]||D["@@iterator"],typeof D=="function"?D:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,lt={};function et(D,Q,st){this.props=D,this.context=Q,this.refs=lt,this.updater=st||$}et.prototype.isReactComponent={},et.prototype.setState=function(D,Q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Q,"setState")},et.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function At(){}At.prototype=et.prototype;function ht(D,Q,st){this.props=D,this.context=Q,this.refs=lt,this.updater=st||$}var yt=ht.prototype=new At;yt.constructor=ht,X(yt,et.prototype),yt.isPureReactComponent=!0;var Pt=Array.isArray,gt={H:null,A:null,T:null,S:null},Ct=Object.prototype.hasOwnProperty;function V(D,Q,st,J,tt,pt){return st=pt.ref,{$$typeof:s,type:D,key:Q,ref:st!==void 0?st:null,props:pt}}function R(D,Q){return V(D.type,Q,void 0,void 0,void 0,D.props)}function S(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function C(D){var Q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(st){return Q[st]})}var A=/\/+/g;function O(D,Q){return typeof D=="object"&&D!==null&&D.key!=null?C(""+D.key):Q.toString(36)}function b(){}function Ht(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(b,b):(D.status="pending",D.then(function(Q){D.status==="pending"&&(D.status="fulfilled",D.value=Q)},function(Q){D.status==="pending"&&(D.status="rejected",D.reason=Q)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function qt(D,Q,st,J,tt){var pt=typeof D;(pt==="undefined"||pt==="boolean")&&(D=null);var _t=!1;if(D===null)_t=!0;else switch(pt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(D.$$typeof){case s:case e:_t=!0;break;case I:return _t=D._init,qt(_t(D._payload),Q,st,J,tt)}}if(_t)return tt=tt(D),_t=J===""?"."+O(D,0):J,Pt(tt)?(st="",_t!=null&&(st=_t.replace(A,"$&/")+"/"),qt(tt,Q,st,"",function(te){return te})):tt!=null&&(S(tt)&&(tt=R(tt,st+(tt.key==null||D&&D.key===tt.key?"":(""+tt.key).replace(A,"$&/")+"/")+_t)),Q.push(tt)),1;_t=0;var ue=J===""?".":J+":";if(Pt(D))for(var kt=0;kt<D.length;kt++)J=D[kt],pt=ue+O(J,kt),_t+=qt(J,Q,st,pt,tt);else if(kt=B(D),typeof kt=="function")for(D=kt.call(D),kt=0;!(J=D.next()).done;)J=J.value,pt=ue+O(J,kt++),_t+=qt(J,Q,st,pt,tt);else if(pt==="object"){if(typeof D.then=="function")return qt(Ht(D),Q,st,J,tt);throw Q=String(D),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return _t}function W(D,Q,st){if(D==null)return D;var J=[],tt=0;return qt(D,J,"","",function(pt){return Q.call(st,pt,tt++)}),J}function nt(D){if(D._status===-1){var Q=D._result;Q=Q(),Q.then(function(st){(D._status===0||D._status===-1)&&(D._status=1,D._result=st)},function(st){(D._status===0||D._status===-1)&&(D._status=2,D._result=st)}),D._status===-1&&(D._status=0,D._result=Q)}if(D._status===1)return D._result.default;throw D._result}var it=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Dt(){}return vt.Children={map:W,forEach:function(D,Q,st){W(D,function(){Q.apply(this,arguments)},st)},count:function(D){var Q=0;return W(D,function(){Q++}),Q},toArray:function(D){return W(D,function(Q){return Q})||[]},only:function(D){if(!S(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},vt.Component=et,vt.Fragment=i,vt.Profiler=l,vt.PureComponent=ht,vt.StrictMode=a,vt.Suspense=_,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=gt,vt.act=function(){throw Error("act(...) is not supported in production builds of React.")},vt.cache=function(D){return function(){return D.apply(null,arguments)}},vt.cloneElement=function(D,Q,st){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=X({},D.props),tt=D.key,pt=void 0;if(Q!=null)for(_t in Q.ref!==void 0&&(pt=void 0),Q.key!==void 0&&(tt=""+Q.key),Q)!Ct.call(Q,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&Q.ref===void 0||(J[_t]=Q[_t]);var _t=arguments.length-2;if(_t===1)J.children=st;else if(1<_t){for(var ue=Array(_t),kt=0;kt<_t;kt++)ue[kt]=arguments[kt+2];J.children=ue}return V(D.type,tt,void 0,void 0,pt,J)},vt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:h,_context:D},D},vt.createElement=function(D,Q,st){var J,tt={},pt=null;if(Q!=null)for(J in Q.key!==void 0&&(pt=""+Q.key),Q)Ct.call(Q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(tt[J]=Q[J]);var _t=arguments.length-2;if(_t===1)tt.children=st;else if(1<_t){for(var ue=Array(_t),kt=0;kt<_t;kt++)ue[kt]=arguments[kt+2];tt.children=ue}if(D&&D.defaultProps)for(J in _t=D.defaultProps,_t)tt[J]===void 0&&(tt[J]=_t[J]);return V(D,pt,void 0,void 0,null,tt)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(D){return{$$typeof:y,render:D}},vt.isValidElement=S,vt.lazy=function(D){return{$$typeof:I,_payload:{_status:-1,_result:D},_init:nt}},vt.memo=function(D,Q){return{$$typeof:v,type:D,compare:Q===void 0?null:Q}},vt.startTransition=function(D){var Q=gt.T,st={};gt.T=st;try{var J=D(),tt=gt.S;tt!==null&&tt(st,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Dt,it)}catch(pt){it(pt)}finally{gt.T=Q}},vt.unstable_useCacheRefresh=function(){return gt.H.useCacheRefresh()},vt.use=function(D){return gt.H.use(D)},vt.useActionState=function(D,Q,st){return gt.H.useActionState(D,Q,st)},vt.useCallback=function(D,Q){return gt.H.useCallback(D,Q)},vt.useContext=function(D){return gt.H.useContext(D)},vt.useDebugValue=function(){},vt.useDeferredValue=function(D,Q){return gt.H.useDeferredValue(D,Q)},vt.useEffect=function(D,Q){return gt.H.useEffect(D,Q)},vt.useId=function(){return gt.H.useId()},vt.useImperativeHandle=function(D,Q,st){return gt.H.useImperativeHandle(D,Q,st)},vt.useInsertionEffect=function(D,Q){return gt.H.useInsertionEffect(D,Q)},vt.useLayoutEffect=function(D,Q){return gt.H.useLayoutEffect(D,Q)},vt.useMemo=function(D,Q){return gt.H.useMemo(D,Q)},vt.useOptimistic=function(D,Q){return gt.H.useOptimistic(D,Q)},vt.useReducer=function(D,Q,st){return gt.H.useReducer(D,Q,st)},vt.useRef=function(D){return gt.H.useRef(D)},vt.useState=function(D){return gt.H.useState(D)},vt.useSyncExternalStore=function(D,Q,st){return gt.H.useSyncExternalStore(D,Q,st)},vt.useTransition=function(){return gt.H.useTransition()},vt.version="19.0.0",vt}var my;function Sd(){return my||(my=1,zf.exports=AT()),zf.exports}var en=Sd(),jf={exports:{}},$o={},Bf={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function ST(){return py||(py=1,function(s){function e(W,nt){var it=W.length;W.push(nt);t:for(;0<it;){var Dt=it-1>>>1,D=W[Dt];if(0<l(D,nt))W[Dt]=nt,W[it]=D,it=Dt;else break t}}function i(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var nt=W[0],it=W.pop();if(it!==nt){W[0]=it;t:for(var Dt=0,D=W.length,Q=D>>>1;Dt<Q;){var st=2*(Dt+1)-1,J=W[st],tt=st+1,pt=W[tt];if(0>l(J,it))tt<D&&0>l(pt,J)?(W[Dt]=pt,W[tt]=it,Dt=tt):(W[Dt]=J,W[st]=it,Dt=st);else if(tt<D&&0>l(pt,it))W[Dt]=pt,W[tt]=it,Dt=tt;else break t}}return nt}function l(W,nt){var it=W.sortIndex-nt.sortIndex;return it!==0?it:W.id-nt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var d=Date,y=d.now();s.unstable_now=function(){return d.now()-y}}var _=[],v=[],I=1,k=null,B=3,$=!1,X=!1,lt=!1,et=typeof setTimeout=="function"?setTimeout:null,At=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function yt(W){for(var nt=i(v);nt!==null;){if(nt.callback===null)a(v);else if(nt.startTime<=W)a(v),nt.sortIndex=nt.expirationTime,e(_,nt);else break;nt=i(v)}}function Pt(W){if(lt=!1,yt(W),!X)if(i(_)!==null)X=!0,Ht();else{var nt=i(v);nt!==null&&qt(Pt,nt.startTime-W)}}var gt=!1,Ct=-1,V=5,R=-1;function S(){return!(s.unstable_now()-R<V)}function C(){if(gt){var W=s.unstable_now();R=W;var nt=!0;try{t:{X=!1,lt&&(lt=!1,At(Ct),Ct=-1),$=!0;var it=B;try{e:{for(yt(W),k=i(_);k!==null&&!(k.expirationTime>W&&S());){var Dt=k.callback;if(typeof Dt=="function"){k.callback=null,B=k.priorityLevel;var D=Dt(k.expirationTime<=W);if(W=s.unstable_now(),typeof D=="function"){k.callback=D,yt(W),nt=!0;break e}k===i(_)&&a(_),yt(W)}else a(_);k=i(_)}if(k!==null)nt=!0;else{var Q=i(v);Q!==null&&qt(Pt,Q.startTime-W),nt=!1}}break t}finally{k=null,B=it,$=!1}nt=void 0}}finally{nt?A():gt=!1}}}var A;if(typeof ht=="function")A=function(){ht(C)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,b=O.port2;O.port1.onmessage=C,A=function(){b.postMessage(null)}}else A=function(){et(C,0)};function Ht(){gt||(gt=!0,A())}function qt(W,nt){Ct=et(function(){W(s.unstable_now())},nt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){X||$||(X=!0,Ht())},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return i(_)},s.unstable_next=function(W){switch(B){case 1:case 2:case 3:var nt=3;break;default:nt=B}var it=B;B=nt;try{return W()}finally{B=it}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,nt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var it=B;B=W;try{return nt()}finally{B=it}},s.unstable_scheduleCallback=function(W,nt,it){var Dt=s.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?Dt+it:Dt):it=Dt,W){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=it+D,W={id:I++,callback:nt,priorityLevel:W,startTime:it,expirationTime:D,sortIndex:-1},it>Dt?(W.sortIndex=it,e(v,W),i(_)===null&&W===i(v)&&(lt?(At(Ct),Ct=-1):lt=!0,qt(Pt,it-Dt))):(W.sortIndex=D,e(_,W),X||$||(X=!0,Ht())),W},s.unstable_shouldYield=S,s.unstable_wrapCallback=function(W){var nt=B;return function(){var it=B;B=nt;try{return W.apply(this,arguments)}finally{B=it}}}}(Hf)),Hf}var yy;function bT(){return yy||(yy=1,Bf.exports=ST()),Bf.exports}var qf={exports:{}},Be={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function wT(){if(_y)return Be;_y=1;var s=Sd();function e(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)v+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(_,v,I){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:k==null?null:""+k,children:_,containerInfo:v,implementation:I}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Be.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Be.createPortal=function(_,v){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(e(299));return h(_,v,null,I)},Be.flushSync=function(_){var v=d.T,I=a.p;try{if(d.T=null,a.p=2,_)return _()}finally{d.T=v,a.p=I,a.d.f()}},Be.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,a.d.C(_,v))},Be.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},Be.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var I=v.as,k=y(I,v.crossOrigin),B=typeof v.integrity=="string"?v.integrity:void 0,$=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;I==="style"?a.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:k,integrity:B,fetchPriority:$}):I==="script"&&a.d.X(_,{crossOrigin:k,integrity:B,fetchPriority:$,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Be.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var I=y(v.as,v.crossOrigin);a.d.M(_,{crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&a.d.M(_)},Be.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var I=v.as,k=y(I,v.crossOrigin);a.d.L(_,I,{crossOrigin:k,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Be.preloadModule=function(_,v){if(typeof _=="string")if(v){var I=y(v.as,v.crossOrigin);a.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:I,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else a.d.m(_)},Be.requestFormReset=function(_){a.d.r(_)},Be.unstable_batchedUpdates=function(_,v){return _(v)},Be.useFormState=function(_,v,I){return d.H.useFormState(_,v,I)},Be.useFormStatus=function(){return d.H.useHostTransitionStatus()},Be.version="19.0.0",Be}var vy;function RT(){if(vy)return qf.exports;vy=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),qf.exports=wT(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ey;function CT(){if(Ey)return $o;Ey=1;var s=bT(),e=Sd(),i=RT();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var h=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),$=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),lt=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),yt=Symbol.for("react.offscreen"),Pt=Symbol.for("react.memo_cache_sentinel"),gt=Symbol.iterator;function Ct(t){return t===null||typeof t!="object"?null:(t=gt&&t[gt]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function R(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _:return"Fragment";case y:return"Portal";case I:return"Profiler";case v:return"StrictMode";case lt:return"Suspense";case et:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case X:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return n=t.displayName||null,n!==null?n:R(t.type)||"Memo";case ht:n=t._payload,t=t._init;try{return R(t(n))}catch{}}return null}var S=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.assign,A,O;function b(t){if(A===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||"",O=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+A+t+O}var Ht=!1;function qt(t,n){if(!t||Ht)return"";Ht=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(j){var P=j}Reflect.construct(t,[],K)}else{try{K.call()}catch(j){P=j}t.call(K.prototype)}}else{try{throw Error()}catch(j){P=j}(K=t())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(j){if(j&&P&&typeof j.stack=="string")return[j.stack,P.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),p=f[0],E=f[1];if(p&&E){var w=p.split(`
`),M=E.split(`
`);for(c=o=0;o<w.length&&!w[o].includes("DetermineComponentFrameRoot");)o++;for(;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;if(o===w.length||c===M.length)for(o=w.length-1,c=M.length-1;1<=o&&0<=c&&w[o]!==M[c];)c--;for(;1<=o&&0<=c;o--,c--)if(w[o]!==M[c]){if(o!==1||c!==1)do if(o--,c--,0>c||w[o]!==M[c]){var H=`
`+w[o].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=o&&0<=c);break}}}finally{Ht=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?b(r):""}function W(t){switch(t.tag){case 26:case 27:case 5:return b(t.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 15:return t=qt(t.type,!1),t;case 11:return t=qt(t.type.render,!1),t;case 1:return t=qt(t.type,!0),t;default:return""}}function nt(t){try{var n="";do n+=W(t),t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function it(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function Dt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function D(t){if(it(t)!==t)throw Error(a(188))}function Q(t){var n=t.alternate;if(!n){if(n=it(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var c=r.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){r=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===r)return D(c),t;if(f===o)return D(c),n;f=f.sibling}throw Error(a(188))}if(r.return!==o.return)r=c,o=f;else{for(var p=!1,E=c.child;E;){if(E===r){p=!0,r=c,o=f;break}if(E===o){p=!0,o=c,r=f;break}E=E.sibling}if(!p){for(E=f.child;E;){if(E===r){p=!0,r=f,o=c;break}if(E===o){p=!0,o=f,r=c;break}E=E.sibling}if(!p)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function st(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=st(t),n!==null)return n;t=t.sibling}return null}var J=Array.isArray,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},_t=[],ue=-1;function kt(t){return{current:t}}function te(t){0>ue||(t.current=_t[ue],_t[ue]=null,ue--)}function jt(t,n){ue++,_t[ue]=t.current,t.current=n}var Ke=kt(null),li=kt(null),dn=kt(null),Ki=kt(null);function Qi(t,n){switch(jt(dn,n),jt(li,t),jt(Ke,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Bp(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=Bp(t),n=Hp(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}te(Ke),jt(Ke,n)}function ui(){te(Ke),te(li),te(dn)}function qa(t){t.memoizedState!==null&&jt(Ki,t);var n=Ke.current,r=Hp(n,t.type);n!==r&&(jt(li,t),jt(Ke,r))}function ks(t){li.current===t&&(te(Ke),te(li)),Ki.current===t&&(te(Ki),Go._currentValue=pt)}var xs=Object.prototype.hasOwnProperty,Hr=s.unstable_scheduleCallback,Us=s.unstable_cancelCallback,zc=s.unstable_shouldYield,Ga=s.unstable_requestPaint,We=s.unstable_now,Sl=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,Te=s.unstable_UserBlockingPriority,ci=s.unstable_NormalPriority,bl=s.unstable_LowPriority,Fa=s.unstable_IdlePriority,jc=s.log,qr=s.unstable_setDisableYieldValue,Yi=null,ze=null;function Ka(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Yi,t,void 0,(t.current.flags&128)===128)}catch{}}function jn(t){if(typeof jc=="function"&&qr(t),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(Yi,t)}catch{}}var Qe=Math.clz32?Math.clz32:Rl,Qa=Math.log,wl=Math.LN2;function Rl(t){return t>>>=0,t===0?32:31-(Qa(t)/wl|0)|0}var Bn=128,Xi=4194304;function Nn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gn(t,n){var r=t.pendingLanes;if(r===0)return 0;var o=0,c=t.suspendedLanes,f=t.pingedLanes,p=t.warmLanes;t=t.finishedLanes!==0;var E=r&134217727;return E!==0?(r=E&~c,r!==0?o=Nn(r):(f&=E,f!==0?o=Nn(f):t||(p=E&~p,p!==0&&(o=Nn(p))))):(E=r&~c,E!==0?o=Nn(E):f!==0?o=Nn(f):t||(p=r&~p,p!==0&&(o=Nn(p)))),o===0?0:n!==0&&n!==o&&(n&c)===0&&(c=o&-o,p=n&-n,c>=p||c===32&&(p&4194176)!==0)?n:o}function $i(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ls(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ya(){var t=Bn;return Bn<<=1,(Bn&4194176)===0&&(Bn=128),t}function Zi(){var t=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),t}function Ps(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function oe(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cl(t,n,r,o,c,f){var p=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var E=t.entanglements,w=t.expirationTimes,M=t.hiddenUpdates;for(r=p&~r;0<r;){var H=31-Qe(r),K=1<<H;E[H]=0,w[H]=-1;var P=M[H];if(P!==null)for(M[H]=null,H=0;H<P.length;H++){var j=P[H];j!==null&&(j.lane&=-536870913)}r&=~K}o!==0&&Wi(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(p&~n))}function Wi(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Qe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&4194218}function Ji(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Qe(r),c=1<<o;c&n|t[o]&n&&(t[o]|=n),r&=~c}}function Il(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Dl(){var t=tt.p;return t!==0?t:(t=window.event,t===void 0?32:ay(t.type))}function tr(t,n){var r=tt.p;try{return tt.p=t,n()}finally{tt.p=r}}var Hn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+Hn,me="__reactProps$"+Hn,hi="__reactContainer$"+Hn,Gr="__reactEvents$"+Hn,zs="__reactListeners$"+Hn,qn="__reactHandles$"+Hn,Xa="__reactResources$"+Hn,er="__reactMarker$"+Hn;function Fr(t){delete t[Ae],delete t[me],delete t[Gr],delete t[zs],delete t[qn]}function Mn(t){var n=t[Ae];if(n)return n;for(var r=t.parentNode;r;){if(n=r[hi]||r[Ae]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=Fp(t);t!==null;){if(r=t[Ae])return r;t=Fp(t)}return n}t=r,r=t.parentNode}return null}function fi(t){if(t=t[Ae]||t[hi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function nr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function ir(t){var n=t[Xa];return n||(n=t[Xa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Zt(t){t[er]=!0}var $a=new Set,js={};function an(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(js[t]=n,t=0;t<n.length;t++)$a.add(n[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Za={},Wa={};function Ol(t){return xs.call(Wa,t)?!0:xs.call(Za,t)?!1:Bc.test(t)?Wa[t]=!0:(Za[t]=!0,!1)}function rr(t,n,r){if(Ol(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function sr(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function mn(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Nl(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hc(t){var n=Nl(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(p){o=""+p,f.call(this,p)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(p){o=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Kr(t){t._valueTracker||(t._valueTracker=Hc(t))}function Ja(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Nl(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Bs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var di=/[\n"\\]/g;function ee(t){return t.replace(di,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ar(t,n,r,o,c,f,p,E){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ye(n)):t.value!==""+Ye(n)&&(t.value=""+Ye(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?Hs(t,p,Ye(n)):r!=null?Hs(t,p,Ye(r)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ye(E):t.removeAttribute("name")}function Qr(t,n,r,o,c,f,p,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Ye(r):"",n=n!=null?""+Ye(n):r,E||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function Hs(t,n,r){n==="number"&&Bs(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function xt(t,n,r,o){if(t=t.options,n){n={};for(var c=0;c<r.length;c++)n["$"+r[c]]=!0;for(r=0;r<t.length;r++)c=n.hasOwnProperty("$"+t[r].value),t[r].selected!==c&&(t[r].selected=c),c&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Ye(r),n=null,c=0;c<t.length;c++){if(t[c].value===r){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Yr(t,n,r){if(n!=null&&(n=""+Ye(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Ye(r):""}function or(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(J(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Ye(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o)}function pn(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var qc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function to(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||qc.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Ml(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&r[c]!==o&&to(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&to(t,f,n[f])}function eo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gn(t){return Fc.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yn=null;function qs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gi=null,mi=null;function pi(t){var n=fi(t);if(n&&(t=n.stateNode)){var r=t[me]||null;t:switch(t=n.stateNode,n.type){case"input":if(ar(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ee(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var c=o[me]||null;if(!c)throw Error(a(90));ar(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Ja(o)}break t;case"textarea":Yr(t,r.value,r.defaultValue);break t;case"select":n=r.value,n!=null&&xt(t,!!r.multiple,n,!1)}}}var no=!1;function Vl(t,n,r){if(no)return t(n,r);no=!0;try{var o=t(n);return o}finally{if(no=!1,(gi!==null||mi!==null)&&(bu(),gi&&(n=gi,t=mi,mi=gi=null,pi(n),t)))for(n=0;n<t.length;n++)pi(t[n])}}function Xr(t,n){var r=t.stateNode;if(r===null)return null;var o=r[me]||null;if(o===null)return null;r=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var _n=!1;if(on)try{var $r={};Object.defineProperty($r,"passive",{get:function(){_n=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{_n=!1}var Fn=null,lr=null,yi=null;function io(){if(yi)return yi;var t,n=lr,r=n.length,o,c="value"in Fn?Fn.value:Fn.textContent,f=c.length;for(t=0;t<r&&n[t]===c[t];t++);var p=r-t;for(o=1;o<=p&&n[r-o]===c[f-o];o++);return yi=c.slice(t,1<o?1-o:void 0)}function Kn(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Qn(){return!0}function ro(){return!1}function Se(t){function n(r,o,c,f,p){this._reactName=r,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(r=t[E],this[E]=r?r(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qn:ro,this.isPropagationStopped=ro,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=Se(zt),Zr=C({},zt,{view:0,detail:0}),kl=Se(Zr),Fs,Ks,Yn,Wr=C({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yn&&(Yn&&t.type==="mousemove"?(Fs=t.screenX-Yn.screenX,Ks=t.screenY-Yn.screenY):Ks=Fs=0,Yn=t),Fs)},movementY:function(t){return"movementY"in t?t.movementY:Ks}}),vn=Se(Wr),xl=C({},Wr,{dataTransfer:0}),Kc=Se(xl),Jr=C({},Zr,{relatedTarget:0}),Qs=Se(Jr),so=C({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ys=Se(so),Ul=C({},zt,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xs=Se(Ul),Qc=C({},zt,{data:0}),ao=Se(Qc),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ll={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oo(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Pl[t])?!!n[t]:!1}function es(){return oo}var zl=C({},Zr,{key:function(t){if(t.key){var n=ts[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Kn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ll[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(t){return t.type==="keypress"?Kn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$s=Se(zl),jl=C({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lo=Se(jl),_i=C({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Bl=Se(_i),Hl=C({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ql=Se(Hl),Gl=C({},Wr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zs=Se(Gl),Xe=C({},zt,{newState:0,oldState:0}),Fl=Se(Xe),Kl=[9,13,27,32],Xn=on&&"CompositionEvent"in window,u=null;on&&"documentMode"in document&&(u=document.documentMode);var g=on&&"TextEvent"in window&&!u,m=on&&(!Xn||u&&8<u&&11>=u),T=" ",U=!1;function z(t,n){switch(t){case"keyup":return Kl.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ot=!1;function pe(t,n){switch(t){case"compositionend":return Z(n);case"keypress":return n.which!==32?null:(U=!0,T);case"textInput":return t=n.data,t===T&&U?null:t;default:return null}}function Nt(t,n){if(Ot)return t==="compositionend"||!Xn&&z(t,n)?(t=io(),yi=lr=Fn=null,Ot=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return m&&n.locale!=="ko"?null:n.data;default:return null}}var be={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ye(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!be[t.type]:n==="textarea"}function vi(t,n,r,o){gi?mi?mi.push(o):mi=[o]:gi=o,n=Du(n,"onChange"),0<n.length&&(r=new Gs("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var Ne=null,$n=null;function uo(t){Up(t,0)}function Ql(t){var n=nr(t);if(Ja(n))return t}function hg(t,n){if(t==="change")return n}var fg=!1;if(on){var Yc;if(on){var Xc="oninput"in document;if(!Xc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Xc=typeof dg.oninput=="function"}Yc=Xc}else Yc=!1;fg=Yc&&(!document.documentMode||9<document.documentMode)}function gg(){Ne&&(Ne.detachEvent("onpropertychange",mg),$n=Ne=null)}function mg(t){if(t.propertyName==="value"&&Ql($n)){var n=[];vi(n,$n,t,qs(t)),Vl(uo,n)}}function $0(t,n,r){t==="focusin"?(gg(),Ne=n,$n=r,Ne.attachEvent("onpropertychange",mg)):t==="focusout"&&gg()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql($n)}function W0(t,n){if(t==="click")return Ql(n)}function J0(t,n){if(t==="input"||t==="change")return Ql(n)}function tE(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ln=typeof Object.is=="function"?Object.is:tE;function co(t,n){if(ln(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var c=r[o];if(!xs.call(n,c)||!ln(t[c],n[c]))return!1}return!0}function pg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yg(t,n){var r=pg(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=pg(r)}}function _g(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?_g(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function vg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Bs(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Bs(t.document)}return n}function $c(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function eE(t,n){var r=vg(n);n=t.focusedElem;var o=t.selectionRange;if(r!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(o!==null&&$c(n)){if(t=o.start,r=o.end,r===void 0&&(r=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(r,n.value.length);else if(r=(t=n.ownerDocument||document)&&t.defaultView||window,r.getSelection){r=r.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!r.extend&&f>o&&(c=o,o=f,f=c),c=yg(n,f);var p=yg(n,o);c&&p&&(r.rangeCount!==1||r.anchorNode!==c.node||r.anchorOffset!==c.offset||r.focusNode!==p.node||r.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),r.removeAllRanges(),f>o?(r.addRange(t),r.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),r.addRange(t)))}}for(t=[],r=n;r=r.parentNode;)r.nodeType===1&&t.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)r=t[n],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var nE=on&&"documentMode"in document&&11>=document.documentMode,Ws=null,Zc=null,ho=null,Wc=!1;function Eg(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wc||Ws==null||Ws!==Bs(o)||(o=Ws,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&co(ho,o)||(ho=o,o=Du(Zc,"onSelect"),0<o.length&&(n=new Gs("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Ws)))}function ns(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var Js={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},Jc={},Tg={};on&&(Tg=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function is(t){if(Jc[t])return Jc[t];if(!Js[t])return t;var n=Js[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in Tg)return Jc[t]=n[r];return t}var Ag=is("animationend"),Sg=is("animationiteration"),bg=is("animationstart"),iE=is("transitionrun"),rE=is("transitionstart"),sE=is("transitioncancel"),wg=is("transitionend"),Rg=new Map,Cg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Vn(t,n){Rg.set(t,n),an(n,[t])}var En=[],ta=0,th=0;function Yl(){for(var t=ta,n=th=ta=0;n<t;){var r=En[n];En[n++]=null;var o=En[n];En[n++]=null;var c=En[n];En[n++]=null;var f=En[n];if(En[n++]=null,o!==null&&c!==null){var p=o.pending;p===null?c.next=c:(c.next=p.next,p.next=c),o.pending=c}f!==0&&Ig(r,c,f)}}function Xl(t,n,r,o){En[ta++]=t,En[ta++]=n,En[ta++]=r,En[ta++]=o,th|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function eh(t,n,r,o){return Xl(t,n,r,o),$l(t)}function ur(t,n){return Xl(t,null,null,n),$l(t)}function Ig(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var c=!1,f=t.return;f!==null;)f.childLanes|=r,o=f.alternate,o!==null&&(o.childLanes|=r),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-Qe(r),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=r|536870912)}function $l(t){if(50<Lo)throw Lo=0,lf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ea={},Dg=new WeakMap;function Tn(t,n){if(typeof t=="object"&&t!==null){var r=Dg.get(t);return r!==void 0?r:(n={value:t,source:n,stack:nt(n)},Dg.set(t,n),n)}return{value:t,source:n,stack:nt(n)}}var na=[],ia=0,Zl=null,Wl=0,An=[],Sn=0,rs=null,Ei=1,Ti="";function ss(t,n){na[ia++]=Wl,na[ia++]=Zl,Zl=t,Wl=n}function Og(t,n,r){An[Sn++]=Ei,An[Sn++]=Ti,An[Sn++]=rs,rs=t;var o=Ei;t=Ti;var c=32-Qe(o)-1;o&=~(1<<c),r+=1;var f=32-Qe(n)+c;if(30<f){var p=c-c%5;f=(o&(1<<p)-1).toString(32),o>>=p,c-=p,Ei=1<<32-Qe(n)+c|r<<c|o,Ti=f+t}else Ei=1<<f|r<<c|o,Ti=t}function nh(t){t.return!==null&&(ss(t,1),Og(t,1,0))}function ih(t){for(;t===Zl;)Zl=na[--ia],na[ia]=null,Wl=na[--ia],na[ia]=null;for(;t===rs;)rs=An[--Sn],An[Sn]=null,Ti=An[--Sn],An[Sn]=null,Ei=An[--Sn],An[Sn]=null}var $e=null,Me=null,Ut=!1,kn=null,Zn=!1,rh=Error(a(519));function as(t){var n=Error(a(418,""));throw mo(Tn(n,t)),rh}function Ng(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[Ae]=t,n[me]=o,r){case"dialog":It("cancel",n),It("close",n);break;case"iframe":case"object":case"embed":It("load",n);break;case"video":case"audio":for(r=0;r<zo.length;r++)It(zo[r],n);break;case"source":It("error",n);break;case"img":case"image":case"link":It("error",n),It("load",n);break;case"details":It("toggle",n);break;case"input":It("invalid",n),Qr(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Kr(n);break;case"select":It("invalid",n);break;case"textarea":It("invalid",n),or(n,o.value,o.defaultValue,o.children),Kr(n)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||jp(n.textContent,r)?(o.popover!=null&&(It("beforetoggle",n),It("toggle",n)),o.onScroll!=null&&It("scroll",n),o.onScrollEnd!=null&&It("scrollend",n),o.onClick!=null&&(n.onclick=Ou),n=!0):n=!1,n||as(t)}function Mg(t){for($e=t.return;$e;)switch($e.tag){case 3:case 27:Zn=!0;return;case 5:case 13:Zn=!1;return;default:$e=$e.return}}function fo(t){if(t!==$e)return!1;if(!Ut)return Mg(t),Ut=!0,!1;var n=!1,r;if((r=t.tag!==3&&t.tag!==27)&&((r=t.tag===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||wf(t.type,t.memoizedProps)),r=!r),r&&(n=!0),n&&Me&&as(t),Mg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(r=t.data,r==="/$"){if(n===0){Me=Un(t.nextSibling);break t}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;t=t.nextSibling}Me=null}}else Me=$e?Un(t.stateNode.nextSibling):null;return!0}function go(){Me=$e=null,Ut=!1}function mo(t){kn===null?kn=[t]:kn.push(t)}var po=Error(a(460)),Vg=Error(a(474)),sh={then:function(){}};function kg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jl(){}function xg(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Jl,Jl),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===po?Error(a(483)):t;default:if(typeof n.status=="string")n.then(Jl,Jl);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===po?Error(a(483)):t}throw yo=n,po}}var yo=null;function Ug(){if(yo===null)throw Error(a(459));var t=yo;return yo=null,t}var ra=null,_o=0;function tu(t){var n=_o;return _o+=1,ra===null&&(ra=[]),xg(ra,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function eu(t,n){throw n.$$typeof===h?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Lg(t){var n=t._init;return n(t._payload)}function Pg(t){function n(x,N){if(t){var L=x.deletions;L===null?(x.deletions=[N],x.flags|=16):L.push(N)}}function r(x,N){if(!t)return null;for(;N!==null;)n(x,N),N=N.sibling;return null}function o(x){for(var N=new Map;x!==null;)x.key!==null?N.set(x.key,x):N.set(x.index,x),x=x.sibling;return N}function c(x,N){return x=Tr(x,N),x.index=0,x.sibling=null,x}function f(x,N,L){return x.index=L,t?(L=x.alternate,L!==null?(L=L.index,L<N?(x.flags|=33554434,N):L):(x.flags|=33554434,N)):(x.flags|=1048576,N)}function p(x){return t&&x.alternate===null&&(x.flags|=33554434),x}function E(x,N,L,q){return N===null||N.tag!==6?(N=Jh(L,x.mode,q),N.return=x,N):(N=c(N,L),N.return=x,N)}function w(x,N,L,q){var rt=L.type;return rt===_?H(x,N,L.props.children,q,L.key):N!==null&&(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ht&&Lg(rt)===N.type)?(N=c(N,L.props),vo(N,L),N.return=x,N):(N=vu(L.type,L.key,L.props,null,x.mode,q),vo(N,L),N.return=x,N)}function M(x,N,L,q){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=tf(L,x.mode,q),N.return=x,N):(N=c(N,L.children||[]),N.return=x,N)}function H(x,N,L,q,rt){return N===null||N.tag!==7?(N=ps(L,x.mode,q,rt),N.return=x,N):(N=c(N,L),N.return=x,N)}function K(x,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Jh(""+N,x.mode,L),N.return=x,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case d:return L=vu(N.type,N.key,N.props,null,x.mode,L),vo(L,N),L.return=x,L;case y:return N=tf(N,x.mode,L),N.return=x,N;case ht:var q=N._init;return N=q(N._payload),K(x,N,L)}if(J(N)||Ct(N))return N=ps(N,x.mode,L,null),N.return=x,N;if(typeof N.then=="function")return K(x,tu(N),L);if(N.$$typeof===$)return K(x,pu(x,N),L);eu(x,N)}return null}function P(x,N,L,q){var rt=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return rt!==null?null:E(x,N,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case d:return L.key===rt?w(x,N,L,q):null;case y:return L.key===rt?M(x,N,L,q):null;case ht:return rt=L._init,L=rt(L._payload),P(x,N,L,q)}if(J(L)||Ct(L))return rt!==null?null:H(x,N,L,q,null);if(typeof L.then=="function")return P(x,N,tu(L),q);if(L.$$typeof===$)return P(x,N,pu(x,L),q);eu(x,L)}return null}function j(x,N,L,q,rt){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return x=x.get(L)||null,E(N,x,""+q,rt);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case d:return x=x.get(q.key===null?L:q.key)||null,w(N,x,q,rt);case y:return x=x.get(q.key===null?L:q.key)||null,M(N,x,q,rt);case ht:var St=q._init;return q=St(q._payload),j(x,N,L,q,rt)}if(J(q)||Ct(q))return x=x.get(L)||null,H(N,x,q,rt,null);if(typeof q.then=="function")return j(x,N,L,tu(q),rt);if(q.$$typeof===$)return j(x,N,L,pu(N,q),rt);eu(N,q)}return null}function ot(x,N,L,q){for(var rt=null,St=null,ut=N,ct=N=0,Ce=null;ut!==null&&ct<L.length;ct++){ut.index>ct?(Ce=ut,ut=null):Ce=ut.sibling;var Lt=P(x,ut,L[ct],q);if(Lt===null){ut===null&&(ut=Ce);break}t&&ut&&Lt.alternate===null&&n(x,ut),N=f(Lt,N,ct),St===null?rt=Lt:St.sibling=Lt,St=Lt,ut=Ce}if(ct===L.length)return r(x,ut),Ut&&ss(x,ct),rt;if(ut===null){for(;ct<L.length;ct++)ut=K(x,L[ct],q),ut!==null&&(N=f(ut,N,ct),St===null?rt=ut:St.sibling=ut,St=ut);return Ut&&ss(x,ct),rt}for(ut=o(ut);ct<L.length;ct++)Ce=j(ut,x,ct,L[ct],q),Ce!==null&&(t&&Ce.alternate!==null&&ut.delete(Ce.key===null?ct:Ce.key),N=f(Ce,N,ct),St===null?rt=Ce:St.sibling=Ce,St=Ce);return t&&ut.forEach(function(Ir){return n(x,Ir)}),Ut&&ss(x,ct),rt}function mt(x,N,L,q){if(L==null)throw Error(a(151));for(var rt=null,St=null,ut=N,ct=N=0,Ce=null,Lt=L.next();ut!==null&&!Lt.done;ct++,Lt=L.next()){ut.index>ct?(Ce=ut,ut=null):Ce=ut.sibling;var Ir=P(x,ut,Lt.value,q);if(Ir===null){ut===null&&(ut=Ce);break}t&&ut&&Ir.alternate===null&&n(x,ut),N=f(Ir,N,ct),St===null?rt=Ir:St.sibling=Ir,St=Ir,ut=Ce}if(Lt.done)return r(x,ut),Ut&&ss(x,ct),rt;if(ut===null){for(;!Lt.done;ct++,Lt=L.next())Lt=K(x,Lt.value,q),Lt!==null&&(N=f(Lt,N,ct),St===null?rt=Lt:St.sibling=Lt,St=Lt);return Ut&&ss(x,ct),rt}for(ut=o(ut);!Lt.done;ct++,Lt=L.next())Lt=j(ut,x,ct,Lt.value,q),Lt!==null&&(t&&Lt.alternate!==null&&ut.delete(Lt.key===null?ct:Lt.key),N=f(Lt,N,ct),St===null?rt=Lt:St.sibling=Lt,St=Lt);return t&&ut.forEach(function(vT){return n(x,vT)}),Ut&&ss(x,ct),rt}function re(x,N,L,q){if(typeof L=="object"&&L!==null&&L.type===_&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case d:t:{for(var rt=L.key;N!==null;){if(N.key===rt){if(rt=L.type,rt===_){if(N.tag===7){r(x,N.sibling),q=c(N,L.props.children),q.return=x,x=q;break t}}else if(N.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ht&&Lg(rt)===N.type){r(x,N.sibling),q=c(N,L.props),vo(q,L),q.return=x,x=q;break t}r(x,N);break}else n(x,N);N=N.sibling}L.type===_?(q=ps(L.props.children,x.mode,q,L.key),q.return=x,x=q):(q=vu(L.type,L.key,L.props,null,x.mode,q),vo(q,L),q.return=x,x=q)}return p(x);case y:t:{for(rt=L.key;N!==null;){if(N.key===rt)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){r(x,N.sibling),q=c(N,L.children||[]),q.return=x,x=q;break t}else{r(x,N);break}else n(x,N);N=N.sibling}q=tf(L,x.mode,q),q.return=x,x=q}return p(x);case ht:return rt=L._init,L=rt(L._payload),re(x,N,L,q)}if(J(L))return ot(x,N,L,q);if(Ct(L)){if(rt=Ct(L),typeof rt!="function")throw Error(a(150));return L=rt.call(L),mt(x,N,L,q)}if(typeof L.then=="function")return re(x,N,tu(L),q);if(L.$$typeof===$)return re(x,N,pu(x,L),q);eu(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(r(x,N.sibling),q=c(N,L),q.return=x,x=q):(r(x,N),q=Jh(L,x.mode,q),q.return=x,x=q),p(x)):r(x,N)}return function(x,N,L,q){try{_o=0;var rt=re(x,N,L,q);return ra=null,rt}catch(ut){if(ut===po)throw ut;var St=Cn(29,ut,null,x.mode);return St.lanes=q,St.return=x,St}finally{}}}var os=Pg(!0),zg=Pg(!1),sa=kt(null),nu=kt(0);function jg(t,n){t=Mi,jt(nu,t),jt(sa,n),Mi=t|n.baseLanes}function ah(){jt(nu,Mi),jt(sa,sa.current)}function oh(){Mi=nu.current,te(sa),te(nu)}var bn=kt(null),Wn=null;function cr(t){var n=t.alternate;jt(_e,_e.current&1),jt(bn,t),Wn===null&&(n===null||sa.current!==null||n.memoizedState!==null)&&(Wn=t)}function Bg(t){if(t.tag===22){if(jt(_e,_e.current),jt(bn,t),Wn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Wn=t)}}else hr()}function hr(){jt(_e,_e.current),jt(bn,bn.current)}function Ai(t){te(bn),Wn===t&&(Wn=null),te(_e)}var _e=kt(0);function iu(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var aE=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},oE=s.unstable_scheduleCallback,lE=s.unstable_NormalPriority,ve={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lh(){return{controller:new aE,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&oE(lE,function(){t.controller.abort()})}var To=null,uh=0,aa=0,oa=null;function uE(t,n){if(To===null){var r=To=[];uh=0,aa=pf(),oa={status:"pending",value:void 0,then:function(o){r.push(o)}}}return uh++,n.then(Hg,Hg),n}function Hg(){if(--uh===0&&To!==null){oa!==null&&(oa.status="fulfilled");var t=To;To=null,aa=0,oa=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function cE(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(c){r.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<r.length;c++)(0,r[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<r.length;c++)(0,r[c])(void 0)}),o}var qg=S.S;S.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&uE(t,n),qg!==null&&qg(t,n)};var ls=kt(null);function ch(){var t=ls.current;return t!==null?t:Qt.pooledCache}function ru(t,n){n===null?jt(ls,ls.current):jt(ls,n.pool)}function Gg(){var t=ch();return t===null?null:{parent:ve._currentValue,pool:t}}var fr=0,Tt=null,Gt=null,ce=null,su=!1,la=!1,us=!1,au=0,Ao=0,ua=null,hE=0;function le(){throw Error(a(321))}function hh(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!ln(t[r],n[r]))return!1;return!0}function fh(t,n,r,o,c,f){return fr=f,Tt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=t===null||t.memoizedState===null?cs:dr,us=!1,f=r(o,c),us=!1,la&&(f=Kg(n,r,o,c)),Fg(t),f}function Fg(t){S.H=Jn;var n=Gt!==null&&Gt.next!==null;if(fr=0,ce=Gt=Tt=null,su=!1,Ao=0,ua=null,n)throw Error(a(300));t===null||we||(t=t.dependencies,t!==null&&mu(t)&&(we=!0))}function Kg(t,n,r,o){Tt=t;var c=0;do{if(la&&(ua=null),Ao=0,la=!1,25<=c)throw Error(a(301));if(c+=1,ce=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}S.H=hs,f=n(r,o)}while(la);return f}function fE(){var t=S.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(Tt.flags|=1024),n}function dh(){var t=au!==0;return au=0,t}function gh(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function mh(t){if(su){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}su=!1}fr=0,ce=Gt=Tt=null,la=!1,Ao=au=0,ua=null}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Tt.memoizedState=ce=t:ce=ce.next=t,ce}function he(){if(Gt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=ce===null?Tt.memoizedState:ce.next;if(n!==null)ce=n,Gt=t;else{if(t===null)throw Tt.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},ce===null?Tt.memoizedState=ce=t:ce=ce.next=t}return ce}var ou;ou=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function So(t){var n=Ao;return Ao+=1,ua===null&&(ua=[]),t=xg(ua,t,n),n=Tt,(ce===null?n.memoizedState:ce.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?cs:dr),t}function lu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===$)return je(t)}throw Error(a(438,String(t)))}function ph(t){var n=null,r=Tt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=Tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=ou(),Tt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=Pt;return n.index++,r}function Si(t,n){return typeof n=="function"?n(t):n}function uu(t){var n=he();return yh(n,Gt,t)}function yh(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var p=c.next;c.next=f.next,f.next=p}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=p=null,w=null,M=n,H=!1;do{var K=M.lane&-536870913;if(K!==M.lane?(Mt&K)===K:(fr&K)===K){var P=M.revertLane;if(P===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),K===aa&&(H=!0);else if((fr&P)===P){M=M.next,P===aa&&(H=!0);continue}else K={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(E=w=K,p=f):w=w.next=K,Tt.lanes|=P,Ar|=P;K=M.action,us&&r(f,K),f=M.hasEagerState?M.eagerState:r(f,K)}else P={lane:K,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(E=w=P,p=f):w=w.next=P,Tt.lanes|=K,Ar|=K;M=M.next}while(M!==null&&M!==n);if(w===null?p=f:w.next=E,!ln(f,t.memoizedState)&&(we=!0,H&&(r=oa,r!==null)))throw r;t.memoizedState=f,t.baseState=p,t.baseQueue=w,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function _h(t){var n=he(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,c=r.pending,f=n.memoizedState;if(c!==null){r.pending=null;var p=c=c.next;do f=t(f,p.action),p=p.next;while(p!==c);ln(f,n.memoizedState)||(we=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,o]}function Qg(t,n,r){var o=Tt,c=he(),f=Ut;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var p=!ln((Gt||c).memoizedState,r);if(p&&(c.memoizedState=r,we=!0),c=c.queue,Th($g.bind(null,o,c,t),[t]),c.getSnapshot!==n||p||ce!==null&&ce.memoizedState.tag&1){if(o.flags|=2048,ca(9,Xg.bind(null,o,c,r,n),{destroy:void 0},null),Qt===null)throw Error(a(349));f||(fr&60)!==0||Yg(o,n,r)}return r}function Yg(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=Tt.updateQueue,n===null?(n=ou(),Tt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Xg(t,n,r,o){n.value=r,n.getSnapshot=o,Zg(n)&&Wg(t)}function $g(t,n,r){return r(function(){Zg(n)&&Wg(t)})}function Zg(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!ln(t,r)}catch{return!0}}function Wg(t){var n=ur(t,2);n!==null&&Ze(n,t,2)}function vh(t){var n=tn();if(typeof t=="function"){var r=t;if(t=r(),us){jn(!0);try{r()}finally{jn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:t},n}function Jg(t,n,r,o){return t.baseState=r,yh(t,Gt,typeof o=="function"?o:Si)}function dE(t,n,r,o,c){if(fu(t))throw Error(a(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};S.T!==null?r(!0):f.isTransition=!1,o(f),r=n.pending,r===null?(f.next=n.pending=f,tm(n,f)):(f.next=r.next,n.pending=r.next=f)}}function tm(t,n){var r=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=S.T,p={};S.T=p;try{var E=r(c,o),w=S.S;w!==null&&w(p,E),em(t,n,E)}catch(M){Eh(t,n,M)}finally{S.T=f}}else try{f=r(c,o),em(t,n,f)}catch(M){Eh(t,n,M)}}function em(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){nm(t,n,o)},function(o){return Eh(t,n,o)}):nm(t,n,r)}function nm(t,n,r){n.status="fulfilled",n.value=r,im(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,tm(t,r)))}function Eh(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,im(n),n=n.next;while(n!==o)}t.action=null}function im(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rm(t,n){return n}function sm(t,n){if(Ut){var r=Qt.formState;if(r!==null){t:{var o=Tt;if(Ut){if(Me){e:{for(var c=Me,f=Zn;c.nodeType!==8;){if(!f){c=null;break e}if(c=Un(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Me=Un(c.nextSibling),o=c.data==="F!";break t}}as(o)}o=!1}o&&(n=r[0])}}return r=tn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},r.queue=o,r=Sm.bind(null,Tt,o),o.dispatch=r,o=vh(!1),f=Rh.bind(null,Tt,!1,o.queue),o=tn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,r=dE.bind(null,Tt,c,f,r),c.dispatch=r,o.memoizedState=t,[n,r,!1]}function am(t){var n=he();return om(n,Gt,t)}function om(t,n,r){n=yh(t,n,rm)[0],t=uu(Si)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?So(n):n;var o=he(),c=o.queue,f=c.dispatch;return r!==o.memoizedState&&(Tt.flags|=2048,ca(9,gE.bind(null,c,r),{destroy:void 0},null)),[n,f,t]}function gE(t,n){t.action=n}function lm(t){var n=he(),r=Gt;if(r!==null)return om(n,r,t);he(),n=n.memoizedState,r=he();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ca(t,n,r,o){return t={tag:t,create:n,inst:r,deps:o,next:null},n=Tt.updateQueue,n===null&&(n=ou(),Tt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function um(){return he().memoizedState}function cu(t,n,r,o){var c=tn();Tt.flags|=t,c.memoizedState=ca(1|n,r,{destroy:void 0},o===void 0?null:o)}function hu(t,n,r,o){var c=he();o=o===void 0?null:o;var f=c.memoizedState.inst;Gt!==null&&o!==null&&hh(o,Gt.memoizedState.deps)?c.memoizedState=ca(n,r,f,o):(Tt.flags|=t,c.memoizedState=ca(1|n,r,f,o))}function cm(t,n){cu(8390656,8,t,n)}function Th(t,n){hu(2048,8,t,n)}function hm(t,n){return hu(4,2,t,n)}function fm(t,n){return hu(4,4,t,n)}function dm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gm(t,n,r){r=r!=null?r.concat([t]):null,hu(4,4,dm.bind(null,n,t),r)}function Ah(){}function mm(t,n){var r=he();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&hh(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function pm(t,n){var r=he();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&hh(n,o[1]))return o[0];if(o=t(),us){jn(!0);try{t()}finally{jn(!1)}}return r.memoizedState=[o,n],o}function Sh(t,n,r){return r===void 0||(fr&1073741824)!==0?t.memoizedState=n:(t.memoizedState=r,t=_p(),Tt.lanes|=t,Ar|=t,r)}function ym(t,n,r,o){return ln(r,n)?r:sa.current!==null?(t=Sh(t,r,o),ln(t,n)||(we=!0),t):(fr&42)===0?(we=!0,t.memoizedState=r):(t=_p(),Tt.lanes|=t,Ar|=t,n)}function _m(t,n,r,o,c){var f=tt.p;tt.p=f!==0&&8>f?f:8;var p=S.T,E={};S.T=E,Rh(t,!1,n,r);try{var w=c(),M=S.S;if(M!==null&&M(E,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=cE(w,o);bo(t,n,H,fn(t))}else bo(t,n,o,fn(t))}catch(K){bo(t,n,{then:function(){},status:"rejected",reason:K},fn())}finally{tt.p=f,S.T=p}}function mE(){}function bh(t,n,r,o){if(t.tag!==5)throw Error(a(476));var c=vm(t).queue;_m(t,c,n,pt,r===null?mE:function(){return Em(t),r(o)})}function vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:pt},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Em(t){var n=vm(t).next.queue;bo(t,n,{},fn())}function wh(){return je(Go)}function Tm(){return he().memoizedState}function Am(){return he().memoizedState}function pE(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=fn();t=pr(r);var o=yr(n,t,r);o!==null&&(Ze(o,n,r),Co(o,n,r)),n={cache:lh()},t.payload=n;return}n=n.return}}function yE(t,n,r){var o=fn();r={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},fu(t)?bm(n,r):(r=eh(t,n,r,o),r!==null&&(Ze(r,t,o),wm(r,n,o)))}function Sm(t,n,r){var o=fn();bo(t,n,r,o)}function bo(t,n,r,o){var c={lane:o,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(fu(t))bm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,E=f(p,r);if(c.hasEagerState=!0,c.eagerState=E,ln(E,p))return Xl(t,n,c,0),Qt===null&&Yl(),!1}catch{}finally{}if(r=eh(t,n,c,o),r!==null)return Ze(r,t,o),wm(r,n,o),!0}return!1}function Rh(t,n,r,o){if(o={lane:2,revertLane:pf(),action:o,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(n)throw Error(a(479))}else n=eh(t,r,o,2),n!==null&&Ze(n,t,2)}function fu(t){var n=t.alternate;return t===Tt||n!==null&&n===Tt}function bm(t,n){la=su=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function wm(t,n,r){if((r&4194176)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ji(t,r)}}var Jn={readContext:je,use:lu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le};Jn.useCacheRefresh=le,Jn.useMemoCache=le,Jn.useHostTransitionStatus=le,Jn.useFormState=le,Jn.useActionState=le,Jn.useOptimistic=le;var cs={readContext:je,use:lu,useCallback:function(t,n){return tn().memoizedState=[t,n===void 0?null:n],t},useContext:je,useEffect:cm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,cu(4194308,4,dm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return cu(4194308,4,t,n)},useInsertionEffect:function(t,n){cu(4,2,t,n)},useMemo:function(t,n){var r=tn();n=n===void 0?null:n;var o=t();if(us){jn(!0);try{t()}finally{jn(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=tn();if(r!==void 0){var c=r(n);if(us){jn(!0);try{r(n)}finally{jn(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=yE.bind(null,Tt,t),[o.memoizedState,t]},useRef:function(t){var n=tn();return t={current:t},n.memoizedState=t},useState:function(t){t=vh(t);var n=t.queue,r=Sm.bind(null,Tt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:Ah,useDeferredValue:function(t,n){var r=tn();return Sh(r,t,n)},useTransition:function(){var t=vh(!1);return t=_m.bind(null,Tt,t.queue,!0,!1),tn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=Tt,c=tn();if(Ut){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Qt===null)throw Error(a(349));(Mt&60)!==0||Yg(o,n,r)}c.memoizedState=r;var f={value:r,getSnapshot:n};return c.queue=f,cm($g.bind(null,o,f,t),[t]),o.flags|=2048,ca(9,Xg.bind(null,o,f,r,n),{destroy:void 0},null),r},useId:function(){var t=tn(),n=Qt.identifierPrefix;if(Ut){var r=Ti,o=Ei;r=(o&~(1<<32-Qe(o)-1)).toString(32)+r,n=":"+n+"R"+r,r=au++,0<r&&(n+="H"+r.toString(32)),n+=":"}else r=hE++,n=":"+n+"r"+r.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return tn().memoizedState=pE.bind(null,Tt)}};cs.useMemoCache=ph,cs.useHostTransitionStatus=wh,cs.useFormState=sm,cs.useActionState=sm,cs.useOptimistic=function(t){var n=tn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Rh.bind(null,Tt,!0,r),r.dispatch=n,[t,n]};var dr={readContext:je,use:lu,useCallback:mm,useContext:je,useEffect:Th,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:pm,useReducer:uu,useRef:um,useState:function(){return uu(Si)},useDebugValue:Ah,useDeferredValue:function(t,n){var r=he();return ym(r,Gt.memoizedState,t,n)},useTransition:function(){var t=uu(Si)[0],n=he().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Qg,useId:Tm};dr.useCacheRefresh=Am,dr.useMemoCache=ph,dr.useHostTransitionStatus=wh,dr.useFormState=am,dr.useActionState=am,dr.useOptimistic=function(t,n){var r=he();return Jg(r,Gt,t,n)};var hs={readContext:je,use:lu,useCallback:mm,useContext:je,useEffect:Th,useImperativeHandle:gm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:pm,useReducer:_h,useRef:um,useState:function(){return _h(Si)},useDebugValue:Ah,useDeferredValue:function(t,n){var r=he();return Gt===null?Sh(r,t,n):ym(r,Gt.memoizedState,t,n)},useTransition:function(){var t=_h(Si)[0],n=he().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:Qg,useId:Tm};hs.useCacheRefresh=Am,hs.useMemoCache=ph,hs.useHostTransitionStatus=wh,hs.useFormState=lm,hs.useActionState=lm,hs.useOptimistic=function(t,n){var r=he();return Gt!==null?Jg(r,Gt,t,n):(r.baseState=t,[t,r.queue.dispatch])};function Ch(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:C({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ih={isMounted:function(t){return(t=t._reactInternals)?it(t)===t:!1},enqueueSetState:function(t,n,r){t=t._reactInternals;var o=fn(),c=pr(o);c.payload=n,r!=null&&(c.callback=r),n=yr(t,c,o),n!==null&&(Ze(n,t,o),Co(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=fn(),c=pr(o);c.tag=1,c.payload=n,r!=null&&(c.callback=r),n=yr(t,c,o),n!==null&&(Ze(n,t,o),Co(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=fn(),o=pr(r);o.tag=2,n!=null&&(o.callback=n),n=yr(t,o,r),n!==null&&(Ze(n,t,r),Co(n,t,r))}};function Rm(t,n,r,o,c,f,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,p):n.prototype&&n.prototype.isPureReactComponent?!co(r,o)||!co(c,f):!0}function Cm(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&Ih.enqueueReplaceState(n,n.state,null)}function fs(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=C({},r));for(var c in t)r[c]===void 0&&(r[c]=t[c])}return r}var du=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Im(t){du(t)}function Dm(t){console.error(t)}function Om(t){du(t)}function gu(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Nm(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Dh(t,n,r){return r=pr(r),r.tag=3,r.payload={element:null},r.callback=function(){gu(t,n)},r}function Mm(t){return t=pr(t),t.tag=3,t}function Vm(t,n,r,o){var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Nm(n,r,o)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Nm(n,r,o),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function _E(t,n,r,o,c){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Ro(n,r,c,!0),r=bn.current,r!==null){switch(r.tag){case 13:return Wn===null?hf():r.alternate===null&&ie===0&&(ie=3),r.flags&=-257,r.flags|=65536,r.lanes=c,o===sh?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),df(t,o,c)),!1;case 22:return r.flags|=65536,o===sh?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),df(t,o,c)),!1}throw Error(a(435,r.tag))}return df(t,o,c),hf(),!1}if(Ut)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==rh&&(t=Error(a(422),{cause:o}),mo(Tn(t,r)))):(o!==rh&&(n=Error(a(423),{cause:o}),mo(Tn(n,r))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Tn(o,r),c=Dh(t.stateNode,o,c),Gh(t,c),ie!==4&&(ie=2)),!1;var f=Error(a(520),{cause:o});if(f=Tn(f,r),xo===null?xo=[f]:xo.push(f),ie!==4&&(ie=2),n===null)return!0;o=Tn(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=c&-c,r.lanes|=t,t=Dh(r.stateNode,o,t),Gh(r,t),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sr===null||!Sr.has(f))))return r.flags|=65536,c&=-c,r.lanes|=c,c=Mm(c),Vm(c,t,r,o),Gh(r,c),!1}r=r.return}while(r!==null);return!1}var km=Error(a(461)),we=!1;function Ve(t,n,r,o){n.child=t===null?zg(n,null,r,o):os(n,t.child,r,o)}function xm(t,n,r,o,c){r=r.render;var f=n.ref;if("ref"in o){var p={};for(var E in o)E!=="ref"&&(p[E]=o[E])}else p=o;return gs(n),o=fh(t,n,r,p,f,c),E=dh(),t!==null&&!we?(gh(t,n,c),bi(t,n,c)):(Ut&&E&&nh(n),n.flags|=1,Ve(t,n,o,c),n.child)}function Um(t,n,r,o,c){if(t===null){var f=r.type;return typeof f=="function"&&!Wh(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,Lm(t,n,f,o,c)):(t=vu(r.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ph(t,c)){var p=f.memoizedProps;if(r=r.compare,r=r!==null?r:co,r(p,o)&&t.ref===n.ref)return bi(t,n,c)}return n.flags|=1,t=Tr(f,o),t.ref=n.ref,t.return=n,n.child=t}function Lm(t,n,r,o,c){if(t!==null){var f=t.memoizedProps;if(co(f,o)&&t.ref===n.ref)if(we=!1,n.pendingProps=o=f,Ph(t,c))(t.flags&131072)!==0&&(we=!0);else return n.lanes=t.lanes,bi(t,n,c)}return Oh(t,n,r,o,c)}function Pm(t,n,r){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,p=t!==null?t.memoizedState:null;if(wo(t,n),o.mode==="hidden"||f){if((n.flags&128)!==0){if(o=p!==null?p.baseLanes|r:r,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return zm(t,n,o,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(n,p!==null?p.cachePool:null),p!==null?jg(n,p):ah(),Bg(n);else return n.lanes=n.childLanes=536870912,zm(t,n,p!==null?p.baseLanes|r:r,r)}else p!==null?(ru(n,p.cachePool),jg(n,p),hr(),n.memoizedState=null):(t!==null&&ru(n,null),ah(),hr());return Ve(t,n,c,r),n.child}function zm(t,n,r,o){var c=ch();return c=c===null?null:{parent:ve._currentValue,pool:c},n.memoizedState={baseLanes:r,cachePool:c},t!==null&&ru(n,null),ah(),Bg(n),t!==null&&Ro(t,n,o,!0),null}function wo(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=2097664)}}function Oh(t,n,r,o,c){return gs(n),r=fh(t,n,r,o,void 0,c),o=dh(),t!==null&&!we?(gh(t,n,c),bi(t,n,c)):(Ut&&o&&nh(n),n.flags|=1,Ve(t,n,r,c),n.child)}function jm(t,n,r,o,c,f){return gs(n),n.updateQueue=null,r=Kg(n,o,r,c),Fg(t),o=dh(),t!==null&&!we?(gh(t,n,f),bi(t,n,f)):(Ut&&o&&nh(n),n.flags|=1,Ve(t,n,r,f),n.child)}function Bm(t,n,r,o,c){if(gs(n),n.stateNode===null){var f=ea,p=r.contextType;typeof p=="object"&&p!==null&&(f=je(p)),f=new r(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ih,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hh(n),p=r.contextType,f.context=typeof p=="object"&&p!==null?je(p):ea,f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(Ch(n,r,p,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&Ih.enqueueReplaceState(f,f.state,null),Do(n,o,f,c),Io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,w=fs(r,E);f.props=w;var M=f.context,H=r.contextType;p=ea,typeof H=="object"&&H!==null&&(p=je(H));var K=r.getDerivedStateFromProps;H=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,H||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||M!==p)&&Cm(n,f,o,p),mr=!1;var P=n.memoizedState;f.state=P,Do(n,o,f,c),Io(),M=n.memoizedState,E||P!==M||mr?(typeof K=="function"&&(Ch(n,r,K,o),M=n.memoizedState),(w=mr||Rm(n,r,w,o,P,M,p))?(H||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=M),f.props=o,f.state=M,f.context=p,o=w):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,qh(t,n),p=n.memoizedProps,H=fs(r,p),f.props=H,K=n.pendingProps,P=f.context,M=r.contextType,w=ea,typeof M=="object"&&M!==null&&(w=je(M)),E=r.getDerivedStateFromProps,(M=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==K||P!==w)&&Cm(n,f,o,w),mr=!1,P=n.memoizedState,f.state=P,Do(n,o,f,c),Io();var j=n.memoizedState;p!==K||P!==j||mr||t!==null&&t.dependencies!==null&&mu(t.dependencies)?(typeof E=="function"&&(Ch(n,r,E,o),j=n.memoizedState),(H=mr||Rm(n,r,H,o,P,j,w)||t!==null&&t.dependencies!==null&&mu(t.dependencies))?(M||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,j,w),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,j,w)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===t.memoizedProps&&P===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&P===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=j),f.props=o,f.state=j,f.context=w,o=H):(typeof f.componentDidUpdate!="function"||p===t.memoizedProps&&P===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&P===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,wo(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=os(n,t.child,null,c),n.child=os(n,null,r,c)):Ve(t,n,r,c),n.memoizedState=f.state,t=n.child):t=bi(t,n,c),t}function Hm(t,n,r,o){return go(),n.flags|=256,Ve(t,n,r,o),n.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:Gg()}}function Vh(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=In),t}function qm(t,n,r){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=t!==null&&t.memoizedState===null?!1:(_e.current&2)!==0),p&&(c=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ut){if(c?cr(n):hr(),Ut){var E=Me,w;if(w=E){t:{for(w=E,E=Zn;w.nodeType!==8;){if(!E){E=null;break t}if(w=Un(w.nextSibling),w===null){E=null;break t}}E=w}E!==null?(n.memoizedState={dehydrated:E,treeContext:rs!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912},w=Cn(18,null,null,0),w.stateNode=E,w.return=n,n.child=w,$e=n,Me=null,w=!0):w=!1}w||as(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return E.data==="$!"?n.lanes=16:n.lanes=536870912,null;Ai(n)}return E=o.children,o=o.fallback,c?(hr(),c=n.mode,E=xh({mode:"hidden",children:E},c),o=ps(o,c,r,null),E.return=n,o.return=n,E.sibling=o,n.child=E,c=n.child,c.memoizedState=Mh(r),c.childLanes=Vh(t,p,r),n.memoizedState=Nh,o):(cr(n),kh(n,E))}if(w=t.memoizedState,w!==null&&(E=w.dehydrated,E!==null)){if(f)n.flags&256?(cr(n),n.flags&=-257,n=Uh(t,n,r)):n.memoizedState!==null?(hr(),n.child=t.child,n.flags|=128,n=null):(hr(),c=o.fallback,E=n.mode,o=xh({mode:"visible",children:o.children},E),c=ps(c,E,r,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,os(n,t.child,null,r),o=n.child,o.memoizedState=Mh(r),o.childLanes=Vh(t,p,r),n.memoizedState=Nh,n=c);else if(cr(n),E.data==="$!"){if(p=E.nextSibling&&E.nextSibling.dataset,p)var M=p.dgst;p=M,o=Error(a(419)),o.stack="",o.digest=p,mo({value:o,source:null,stack:null}),n=Uh(t,n,r)}else if(we||Ro(t,n,r,!1),p=(r&t.childLanes)!==0,we||p){if(p=Qt,p!==null){if(o=r&-r,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(p.suspendedLanes|r))!==0?0:o,o!==0&&o!==w.retryLane)throw w.retryLane=o,ur(t,o),Ze(p,t,o),km}E.data==="$?"||hf(),n=Uh(t,n,r)}else E.data==="$?"?(n.flags|=128,n.child=t.child,n=VE.bind(null,t),E._reactRetry=n,n=null):(t=w.treeContext,Me=Un(E.nextSibling),$e=n,Ut=!0,kn=null,Zn=!1,t!==null&&(An[Sn++]=Ei,An[Sn++]=Ti,An[Sn++]=rs,Ei=t.id,Ti=t.overflow,rs=n),n=kh(n,o.children),n.flags|=4096);return n}return c?(hr(),c=o.fallback,E=n.mode,w=t.child,M=w.sibling,o=Tr(w,{mode:"hidden",children:o.children}),o.subtreeFlags=w.subtreeFlags&31457280,M!==null?c=Tr(M,c):(c=ps(c,E,r,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,E=t.child.memoizedState,E===null?E=Mh(r):(w=E.cachePool,w!==null?(M=ve._currentValue,w=w.parent!==M?{parent:M,pool:M}:w):w=Gg(),E={baseLanes:E.baseLanes|r,cachePool:w}),c.memoizedState=E,c.childLanes=Vh(t,p,r),n.memoizedState=Nh,o):(cr(n),r=t.child,t=r.sibling,r=Tr(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=r,n.memoizedState=null,r)}function kh(t,n){return n=xh({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function xh(t,n){return mp(t,n,0,null)}function Uh(t,n,r){return os(n,t.child,null,r),t=kh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Gm(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),jh(t.return,n,r)}function Lh(t,n,r,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=r,f.tailMode=c)}function Fm(t,n,r){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(Ve(t,n,o.children,r),o=_e.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gm(t,r,n);else if(t.tag===19)Gm(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(jt(_e,o),c){case"forwards":for(r=n.child,c=null;r!==null;)t=r.alternate,t!==null&&iu(t)===null&&(c=r),r=r.sibling;r=c,r===null?(c=n.child,n.child=null):(c=r.sibling,r.sibling=null),Lh(n,!1,c,r,f);break;case"backwards":for(r=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&iu(t)===null){n.child=c;break}t=c.sibling,c.sibling=r,r=c,c=t}Lh(n,!0,r,null,f);break;case"together":Lh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bi(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Ar|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Ro(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=Tr(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=Tr(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Ph(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&mu(t)))}function vE(t,n,r){switch(n.tag){case 3:Qi(n,n.stateNode.containerInfo),gr(n,ve,t.memoizedState.cache),go();break;case 27:case 5:qa(n);break;case 4:Qi(n,n.stateNode.containerInfo);break;case 10:gr(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(cr(n),n.flags|=128,null):(r&n.child.childLanes)!==0?qm(t,n,r):(cr(n),t=bi(t,n,r),t!==null?t.sibling:null);cr(n);break;case 19:var c=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Ro(t,n,r,!1),o=(r&n.childLanes)!==0),c){if(o)return Fm(t,n,r);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),jt(_e,_e.current),o)break;return null;case 22:case 23:return n.lanes=0,Pm(t,n,r);case 24:gr(n,ve,t.memoizedState.cache)}return bi(t,n,r)}function Km(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)we=!0;else{if(!Ph(t,r)&&(n.flags&128)===0)return we=!1,vE(t,n,r);we=(t.flags&131072)!==0}else we=!1,Ut&&(n.flags&1048576)!==0&&Og(n,Wl,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Wh(o)?(t=fs(o,t),n.tag=1,n=Bm(null,n,o,t,r)):(n.tag=0,n=Oh(null,n,o,t,r));else{if(o!=null){if(c=o.$$typeof,c===X){n.tag=11,n=xm(null,n,o,t,r);break t}else if(c===At){n.tag=14,n=Um(null,n,o,t,r);break t}}throw n=R(o)||o,Error(a(306,n,""))}}return n;case 0:return Oh(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,c=fs(o,n.pendingProps),Bm(t,n,o,c,r);case 3:t:{if(Qi(n,n.stateNode.containerInfo),t===null)throw Error(a(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,qh(t,n),Do(n,f,null,r);var p=n.memoizedState;if(f=p.cache,gr(n,ve,f),f!==c.cache&&Bh(n,[ve],r,!0),Io(),f=p.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=Hm(t,n,f,r);break t}else if(f!==o){o=Tn(Error(a(424)),n),mo(o),n=Hm(t,n,f,r);break t}else for(Me=Un(n.stateNode.containerInfo.firstChild),$e=n,Ut=!0,kn=null,Zn=!0,r=zg(n,null,f,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(go(),f===o){n=bi(t,n,r);break t}Ve(t,n,f,r)}n=n.child}return n;case 26:return wo(t,n),t===null?(r=Xp(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ut||(r=n.type,t=n.pendingProps,o=Nu(dn.current).createElement(r),o[Ae]=n,o[me]=t,ke(o,r,t),Zt(o),n.stateNode=o):n.memoizedState=Xp(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qa(n),t===null&&Ut&&(o=n.stateNode=Kp(n.type,n.pendingProps,dn.current),$e=n,Zn=!0,Me=Un(o.firstChild)),o=n.pendingProps.children,t!==null||Ut?Ve(t,n,o,r):n.child=os(n,null,o,r),wo(t,n),n.child;case 5:return t===null&&Ut&&((c=o=Me)&&(o=XE(o,n.type,n.pendingProps,Zn),o!==null?(n.stateNode=o,$e=n,Me=Un(o.firstChild),Zn=!1,c=!0):c=!1),c||as(n)),qa(n),c=n.type,f=n.pendingProps,p=t!==null?t.memoizedProps:null,o=f.children,wf(c,f)?o=null:p!==null&&wf(c,p)&&(n.flags|=32),n.memoizedState!==null&&(c=fh(t,n,fE,null,null,r),Go._currentValue=c),wo(t,n),Ve(t,n,o,r),n.child;case 6:return t===null&&Ut&&((t=r=Me)&&(r=$E(r,n.pendingProps,Zn),r!==null?(n.stateNode=r,$e=n,Me=null,t=!0):t=!1),t||as(n)),null;case 13:return qm(t,n,r);case 4:return Qi(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=os(n,null,o,r):Ve(t,n,o,r),n.child;case 11:return xm(t,n,n.type,n.pendingProps,r);case 7:return Ve(t,n,n.pendingProps,r),n.child;case 8:return Ve(t,n,n.pendingProps.children,r),n.child;case 12:return Ve(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,gr(n,n.type,o.value),Ve(t,n,o.children,r),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,gs(n),c=je(c),o=o(c),n.flags|=1,Ve(t,n,o,r),n.child;case 14:return Um(t,n,n.type,n.pendingProps,r);case 15:return Lm(t,n,n.type,n.pendingProps,r);case 19:return Fm(t,n,r);case 22:return Pm(t,n,r);case 24:return gs(n),o=je(ve),t===null?(c=ch(),c===null&&(c=Qt,f=lh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=r),c=f),n.memoizedState={parent:o,cache:c},Hh(n),gr(n,ve,c)):((t.lanes&r)!==0&&(qh(t,n),Do(n,null,null,r),Io()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),gr(n,ve,o)):(o=f.cache,gr(n,ve,o),o!==c.cache&&Bh(n,[ve],r,!0))),Ve(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}var zh=kt(null),ds=null,wi=null;function gr(t,n,r){jt(zh,n._currentValue),n._currentValue=r}function Ri(t){t._currentValue=zh.current,te(zh)}function jh(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function Bh(t,n,r,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var p=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var w=0;w<n.length;w++)if(E.context===n[w]){f.lanes|=r,E=f.alternate,E!==null&&(E.lanes|=r),jh(f.return,r,t),o||(p=null);break t}f=E.next}}else if(c.tag===18){if(p=c.return,p===null)throw Error(a(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),jh(p,r,t),p=null}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}}function Ro(t,n,r,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var p=c.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var E=c.type;ln(c.pendingProps.value,p.value)||(t!==null?t.push(E):t=[E])}}else if(c===Ki.current){if(p=c.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}c=c.return}t!==null&&Bh(n,t,r,o),n.flags|=262144}function mu(t){for(t=t.firstContext;t!==null;){if(!ln(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){ds=t,wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function je(t){return Qm(ds,t)}function pu(t,n){return ds===null&&gs(t),Qm(t,n)}function Qm(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},wi===null){if(t===null)throw Error(a(308));wi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else wi=wi.next=n;return r}var mr=!1;function Hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yr(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Jt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=$l(t),Ig(t,null,r),n}return Xl(t,o,n,r),$l(t)}function Co(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194176)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Ji(t,r)}}function Gh(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var c=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?c=f=p:f=f.next=p,r=r.next}while(r!==null);f===null?c=f=n:f=f.next=n}else c=f=n;r={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var Fh=!1;function Io(){if(Fh){var t=oa;if(t!==null)throw t}}function Do(t,n,r,o){Fh=!1;var c=t.updateQueue;mr=!1;var f=c.firstBaseUpdate,p=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var w=E,M=w.next;w.next=null,p===null?f=M:p.next=M,p=w;var H=t.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==p&&(E===null?H.firstBaseUpdate=M:E.next=M,H.lastBaseUpdate=w))}if(f!==null){var K=c.baseState;p=0,H=M=w=null,E=f;do{var P=E.lane&-536870913,j=P!==E.lane;if(j?(Mt&P)===P:(o&P)===P){P!==0&&P===aa&&(Fh=!0),H!==null&&(H=H.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var ot=t,mt=E;P=n;var re=r;switch(mt.tag){case 1:if(ot=mt.payload,typeof ot=="function"){K=ot.call(re,K,P);break t}K=ot;break t;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=mt.payload,P=typeof ot=="function"?ot.call(re,K,P):ot,P==null)break t;K=C({},K,P);break t;case 2:mr=!0}}P=E.callback,P!==null&&(t.flags|=64,j&&(t.flags|=8192),j=c.callbacks,j===null?c.callbacks=[P]:j.push(P))}else j={lane:P,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(M=H=j,w=K):H=H.next=j,p|=P;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;j=E,E=j.next,j.next=null,c.lastBaseUpdate=j,c.shared.pending=null}}while(!0);H===null&&(w=K),c.baseState=w,c.firstBaseUpdate=M,c.lastBaseUpdate=H,f===null&&(c.shared.lanes=0),Ar|=p,t.lanes=p,t.memoizedState=K}}function Ym(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function Xm(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Ym(r[t],n)}function Oo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var c=o.next;r=c;do{if((r.tag&t)===t){o=void 0;var f=r.create,p=r.inst;o=f(),p.destroy=o}r=r.next}while(r!==c)}}catch(E){Kt(n,n.return,E)}}function _r(t,n,r){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var p=o.inst,E=p.destroy;if(E!==void 0){p.destroy=void 0,c=n;var w=r;try{E()}catch(M){Kt(c,w,M)}}}o=o.next}while(o!==f)}}catch(M){Kt(n,n.return,M)}}function $m(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{Xm(n,r)}catch(o){Kt(t,t.return,o)}}}function Zm(t,n,r){r.props=fs(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Kt(t,n,o)}}function ms(t,n){try{var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof r=="function"?t.refCleanup=r(c):r.current=c}}catch(f){Kt(t,n,f)}}function un(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(c){Kt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(c){Kt(t,n,c)}else r.current=null}function Wm(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break t;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(c){Kt(t,t.return,c)}}function Jm(t,n,r){try{var o=t.stateNode;GE(o,t.type,r,n),o[me]=n}catch(c){Kt(t,t.return,c)}}function tp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Kh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qh(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.nodeType===8?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(r.nodeType===8?(n=r.parentNode,n.insertBefore(t,r)):(n=r,n.appendChild(t)),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Ou));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(Qh(t,n,r),t=t.sibling;t!==null;)Qh(t,n,r),t=t.sibling}function yu(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(yu(t,n,r),t=t.sibling;t!==null;)yu(t,n,r),t=t.sibling}var Ci=!1,ne=!1,Yh=!1,ep=typeof WeakSet=="function"?WeakSet:Set,Re=null,np=!1;function EE(t,n){if(t=t.containerInfo,Sf=Lu,t=vg(t),$c(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break t}var p=0,E=-1,w=-1,M=0,H=0,K=t,P=null;e:for(;;){for(var j;K!==r||c!==0&&K.nodeType!==3||(E=p+c),K!==f||o!==0&&K.nodeType!==3||(w=p+o),K.nodeType===3&&(p+=K.nodeValue.length),(j=K.firstChild)!==null;)P=K,K=j;for(;;){if(K===t)break e;if(P===r&&++M===c&&(E=p),P===f&&++H===o&&(w=p),(j=K.nextSibling)!==null)break;K=P,P=K.parentNode}K=j}r=E===-1||w===-1?null:{start:E,end:w}}else r=null}r=r||{start:0,end:0}}else r=null;for(bf={focusedElem:t,selectionRange:r},Lu=!1,Re=n;Re!==null;)if(n=Re,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Re=t;else for(;Re!==null;){switch(n=Re,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,r=n,c=f.memoizedProps,f=f.memoizedState,o=r.stateNode;try{var ot=fs(r.type,c,r.elementType===r.type);t=o.getSnapshotBeforeUpdate(ot,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(mt){Kt(r,r.return,mt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)If(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":If(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Re=t;break}Re=n.return}return ot=np,np=!1,ot}function ip(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:Di(t,r),o&4&&Oo(5,r);break;case 1:if(Di(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(E){Kt(r,r.return,E)}else{var c=fs(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Kt(r,r.return,E)}}o&64&&$m(r),o&512&&ms(r,r.return);break;case 3:if(Di(t,r),o&64&&(o=r.updateQueue,o!==null)){if(t=null,r.child!==null)switch(r.child.tag){case 27:case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}try{Xm(o,t)}catch(E){Kt(r,r.return,E)}}break;case 26:Di(t,r),o&512&&ms(r,r.return);break;case 27:case 5:Di(t,r),n===null&&o&4&&Wm(r),o&512&&ms(r,r.return);break;case 12:Di(t,r);break;case 13:Di(t,r),o&4&&ap(t,r);break;case 22:if(c=r.memoizedState!==null||Ci,!c){n=n!==null&&n.memoizedState!==null||ne;var f=Ci,p=ne;Ci=c,(ne=n)&&!p?vr(t,r,(r.subtreeFlags&8772)!==0):Di(t,r),Ci=f,ne=p}o&512&&(r.memoizedProps.mode==="manual"?ms(r,r.return):un(r,r.return));break;default:Di(t,r)}}function rp(t){var n=t.alternate;n!==null&&(t.alternate=null,rp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fe=null,cn=!1;function Ii(t,n,r){for(r=r.child;r!==null;)sp(t,n,r),r=r.sibling}function sp(t,n,r){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Yi,r)}catch{}switch(r.tag){case 26:ne||un(r,n),Ii(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:ne||un(r,n);var o=fe,c=cn;for(fe=r.stateNode,Ii(t,n,r),r=r.stateNode,n=r.attributes;n.length;)r.removeAttributeNode(n[0]);Fr(r),fe=o,cn=c;break;case 5:ne||un(r,n);case 6:c=fe;var f=cn;if(fe=null,Ii(t,n,r),fe=c,cn=f,fe!==null)if(cn)try{t=fe,o=r.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(p){Kt(r,n,p)}else try{fe.removeChild(r.stateNode)}catch(p){Kt(r,n,p)}break;case 18:fe!==null&&(cn?(n=fe,r=r.stateNode,n.nodeType===8?Cf(n.parentNode,r):n.nodeType===1&&Cf(n,r),Yo(n)):Cf(fe,r.stateNode));break;case 4:o=fe,c=cn,fe=r.stateNode.containerInfo,cn=!0,Ii(t,n,r),fe=o,cn=c;break;case 0:case 11:case 14:case 15:ne||_r(2,r,n),ne||_r(4,r,n),Ii(t,n,r);break;case 1:ne||(un(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Zm(r,n,o)),Ii(t,n,r);break;case 21:Ii(t,n,r);break;case 22:ne||un(r,n),ne=(o=ne)||r.memoizedState!==null,Ii(t,n,r),ne=o;break;default:Ii(t,n,r)}}function ap(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Yo(t)}catch(r){Kt(n,n.return,r)}}function TE(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ep),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ep),n;default:throw Error(a(435,t.tag))}}function Xh(t,n){var r=TE(t);n.forEach(function(o){var c=kE.bind(null,t,o);r.has(o)||(r.add(o),o.then(c,c))})}function wn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var c=r[o],f=t,p=n,E=p;t:for(;E!==null;){switch(E.tag){case 27:case 5:fe=E.stateNode,cn=!1;break t;case 3:fe=E.stateNode.containerInfo,cn=!0;break t;case 4:fe=E.stateNode.containerInfo,cn=!0;break t}E=E.return}if(fe===null)throw Error(a(160));sp(f,p,c),fe=null,cn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)op(n,t),n=n.sibling}var xn=null;function op(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:wn(n,t),Rn(t),o&4&&(_r(3,t,t.return),Oo(3,t),_r(5,t,t.return));break;case 1:wn(n,t),Rn(t),o&512&&(ne||r===null||un(r,r.return)),o&64&&Ci&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var c=xn;if(wn(n,t),Rn(t),o&512&&(ne||r===null||un(r,r.return)),o&4){var f=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){t:{o=t.type,r=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[er]||f[Ae]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),ke(f,o,r),f[Ae]=t,Zt(f),o=f;break t;case"link":var p=Wp("link","href",c).get(o+(r.href||""));if(p){for(var E=0;E<p.length;E++)if(f=p[E],f.getAttribute("href")===(r.href==null?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(E,1);break e}}f=c.createElement(o),ke(f,o,r),c.head.appendChild(f);break;case"meta":if(p=Wp("meta","content",c).get(o+(r.content||""))){for(E=0;E<p.length;E++)if(f=p[E],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(E,1);break e}}f=c.createElement(o),ke(f,o,r),c.head.appendChild(f);break;default:throw Error(a(468,o))}f[Ae]=t,Zt(f),o=f}t.stateNode=o}else Jp(c,t.type,t.stateNode);else t.stateNode=Zp(c,o,t.memoizedProps);else f!==o?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,o===null?Jp(c,t.type,t.stateNode):Zp(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Jm(t,t.memoizedProps,r.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var w=c.firstChild;w;){var M=w.nextSibling,H=w.nodeName;w[er]||H==="HEAD"||H==="BODY"||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&w.rel.toLowerCase()==="stylesheet"||c.removeChild(w),w=M}for(var K=t.type,P=c.attributes;P.length;)c.removeAttributeNode(P[0]);ke(c,K,f),c[Ae]=t,c[me]=f}catch(ot){Kt(t,t.return,ot)}}case 5:if(wn(n,t),Rn(t),o&512&&(ne||r===null||un(r,r.return)),t.flags&32){c=t.stateNode;try{pn(c,"")}catch(ot){Kt(t,t.return,ot)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Jm(t,c,r!==null?r.memoizedProps:c)),o&1024&&(Yh=!0);break;case 6:if(wn(n,t),Rn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(ot){Kt(t,t.return,ot)}}break;case 3:if(ku=null,c=xn,xn=Mu(n.containerInfo),wn(n,t),xn=c,Rn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{Yo(n.containerInfo)}catch(ot){Kt(t,t.return,ot)}Yh&&(Yh=!1,lp(t));break;case 4:o=xn,xn=Mu(t.stateNode.containerInfo),wn(n,t),Rn(t),xn=o;break;case 12:wn(n,t),Rn(t);break;case 13:wn(n,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(sf=We()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xh(t,o)));break;case 22:if(o&512&&(ne||r===null||un(r,r.return)),w=t.memoizedState!==null,M=r!==null&&r.memoizedState!==null,H=Ci,K=ne,Ci=H||w,ne=K||M,wn(n,t),ne=K,Ci=H,Rn(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=w?n._visibility&-2:n._visibility|1,w&&(n=Ci||ne,r===null||M||n||ha(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(r=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(r===null){M=r=n;try{if(c=M.stateNode,w)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{p=M.stateNode,E=M.memoizedProps.style;var j=E!=null&&E.hasOwnProperty("display")?E.display:null;p.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ot){Kt(M,M.return,ot)}}}else if(n.tag===6){if(r===null){M=n;try{M.stateNode.nodeValue=w?"":M.memoizedProps}catch(ot){Kt(M,M.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Xh(t,r))));break;case 19:wn(n,t),Rn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xh(t,o)));break;case 21:break;default:wn(n,t),Rn(t)}}function Rn(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var r=t.return;r!==null;){if(tp(r)){var o=r;break t}r=r.return}throw Error(a(160))}switch(o.tag){case 27:var c=o.stateNode,f=Kh(t);yu(t,f,c);break;case 5:var p=o.stateNode;o.flags&32&&(pn(p,""),o.flags&=-33);var E=Kh(t);yu(t,E,p);break;case 3:case 4:var w=o.stateNode.containerInfo,M=Kh(t);Qh(t,M,w);break;default:throw Error(a(161))}}}catch(H){Kt(t,t.return,H)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lp(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Di(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ip(t,n.alternate,n),n=n.sibling}function ha(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_r(4,n,n.return),ha(n);break;case 1:un(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Zm(n,n.return,r),ha(n);break;case 26:case 27:case 5:un(n,n.return),ha(n);break;case 22:un(n,n.return),n.memoizedState===null&&ha(n);break;default:ha(n)}t=t.sibling}}function vr(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:vr(c,f,r),Oo(4,f);break;case 1:if(vr(c,f,r),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(M){Kt(o,o.return,M)}if(o=f,c=o.updateQueue,c!==null){var E=o.stateNode;try{var w=c.shared.hiddenCallbacks;if(w!==null)for(c.shared.hiddenCallbacks=null,c=0;c<w.length;c++)Ym(w[c],E)}catch(M){Kt(o,o.return,M)}}r&&p&64&&$m(f),ms(f,f.return);break;case 26:case 27:case 5:vr(c,f,r),r&&o===null&&p&4&&Wm(f),ms(f,f.return);break;case 12:vr(c,f,r);break;case 13:vr(c,f,r),r&&p&4&&ap(c,f);break;case 22:f.memoizedState===null&&vr(c,f,r),ms(f,f.return);break;default:vr(c,f,r)}n=n.sibling}}function $h(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Eo(r))}function Zh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t))}function Er(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)up(t,n,r,o),n=n.sibling}function up(t,n,r,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Er(t,n,r,o),c&2048&&Oo(9,n);break;case 3:Er(t,n,r,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t)));break;case 12:if(c&2048){Er(t,n,r,o),t=n.stateNode;try{var f=n.memoizedProps,p=f.id,E=f.onPostCommit;typeof E=="function"&&E(p,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(w){Kt(n,n.return,w)}}else Er(t,n,r,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Er(t,n,r,o):No(t,n):f._visibility&4?Er(t,n,r,o):(f._visibility|=4,fa(t,n,r,o,(n.subtreeFlags&10256)!==0)),c&2048&&$h(n.alternate,n);break;case 24:Er(t,n,r,o),c&2048&&Zh(n.alternate,n);break;default:Er(t,n,r,o)}}function fa(t,n,r,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,p=n,E=r,w=o,M=p.flags;switch(p.tag){case 0:case 11:case 15:fa(f,p,E,w,c),Oo(8,p);break;case 23:break;case 22:var H=p.stateNode;p.memoizedState!==null?H._visibility&4?fa(f,p,E,w,c):No(f,p):(H._visibility|=4,fa(f,p,E,w,c)),c&&M&2048&&$h(p.alternate,p);break;case 24:fa(f,p,E,w,c),c&&M&2048&&Zh(p.alternate,p);break;default:fa(f,p,E,w,c)}n=n.sibling}}function No(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,c=o.flags;switch(o.tag){case 22:No(r,o),c&2048&&$h(o.alternate,o);break;case 24:No(r,o),c&2048&&Zh(o.alternate,o);break;default:No(r,o)}n=n.sibling}}var Mo=8192;function da(t){if(t.subtreeFlags&Mo)for(t=t.child;t!==null;)cp(t),t=t.sibling}function cp(t){switch(t.tag){case 26:da(t),t.flags&Mo&&t.memoizedState!==null&&uT(xn,t.memoizedState,t.memoizedProps);break;case 5:da(t);break;case 3:case 4:var n=xn;xn=Mu(t.stateNode.containerInfo),da(t),xn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Mo,Mo=16777216,da(t),Mo=n):da(t));break;default:da(t)}}function hp(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Re=o,dp(o,t)}hp(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fp(t),t=t.sibling}function fp(t){switch(t.tag){case 0:case 11:case 15:Vo(t),t.flags&2048&&_r(9,t,t.return);break;case 3:Vo(t);break;case 12:Vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,_u(t)):Vo(t);break;default:Vo(t)}}function _u(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Re=o,dp(o,t)}hp(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_r(8,n,n.return),_u(n);break;case 22:r=n.stateNode,r._visibility&4&&(r._visibility&=-5,_u(n));break;default:_u(n)}t=t.sibling}}function dp(t,n){for(;Re!==null;){var r=Re;switch(r.tag){case 0:case 11:case 15:_r(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Eo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Re=o;else t:for(r=t;Re!==null;){o=Re;var c=o.sibling,f=o.return;if(rp(o),o===r){Re=null;break t}if(c!==null){c.return=f,Re=c;break t}Re=f}}}function AE(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,n,r,o){return new AE(t,n,r,o)}function Wh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tr(t,n){var r=t.alternate;return r===null?(r=Cn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&31457280,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function gp(t,n){t.flags&=31457282;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vu(t,n,r,o,c,f){var p=0;if(o=t,typeof t=="function")Wh(t)&&(p=1);else if(typeof t=="string")p=oT(t,r,Ke.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case _:return ps(r.children,c,f,n);case v:p=8,c|=24;break;case I:return t=Cn(12,r,n,c|2),t.elementType=I,t.lanes=f,t;case lt:return t=Cn(13,r,n,c),t.elementType=lt,t.lanes=f,t;case et:return t=Cn(19,r,n,c),t.elementType=et,t.lanes=f,t;case yt:return mp(r,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:case $:p=10;break t;case B:p=9;break t;case X:p=11;break t;case At:p=14;break t;case ht:p=16,o=null;break t}p=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Cn(p,r,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ps(t,n,r,o){return t=Cn(7,t,o,n),t.lanes=r,t}function mp(t,n,r,o){t=Cn(22,t,o,n),t.elementType=yt,t.lanes=r;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)===0){var p=ur(f,2);p!==null&&(c._pendingVisibility|=2,Ze(p,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(a(456));if((c._pendingVisibility&2)!==0){var p=ur(f,2);p!==null&&(c._pendingVisibility&=-3,Ze(p,f,2))}}};return t.stateNode=c,t}function Jh(t,n,r){return t=Cn(6,t,null,n),t.lanes=r,t}function tf(t,n,r){return n=Cn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Oi(t){t.flags|=4}function pp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ty(n)){if(n=bn.current,n!==null&&((Mt&4194176)===Mt?Wn!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||n!==Wn))throw yo=sh,Vg;t.flags|=8192}}function Eu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Zi():536870912,t.lanes|=n,ma|=n)}function ko(t,n){if(!Ut)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)r|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function SE(t,n,r){var o=n.pendingProps;switch(ih(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ri(ve),ui(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fo(n)?Oi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,kn!==null&&(uf(kn),kn=null))),Wt(n),null;case 26:return r=n.memoizedState,t===null?(Oi(n),r!==null?(Wt(n),pp(n,r)):(Wt(n),n.flags&=-16777217)):r?r!==t.memoizedState?(Oi(n),Wt(n),pp(n,r)):(Wt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Oi(n),Wt(n),n.flags&=-16777217),null;case 27:ks(n),r=dn.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Wt(n),null}t=Ke.current,fo(n)?Ng(n):(t=Kp(c,o,r),n.stateNode=t,Oi(n))}return Wt(n),null;case 5:if(ks(n),r=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Wt(n),null}if(t=Ke.current,fo(n))Ng(n);else{switch(c=Nu(dn.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(r,{is:o.is}):c.createElement(r)}}t[Ae]=n,t[me]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(ke(t,r,o),r){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Oi(n)}}return Wt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Oi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=dn.current,fo(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,c=$e,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[Ae]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||jp(t.nodeValue,r)),t||as(n)}else t=Nu(t).createTextNode(o),t[Ae]=n,n.stateNode=t}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=fo(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(a(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Ae]=n}else go(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),c=!1}else kn!==null&&(uf(kn),kn=null),c=!0;if(!c)return n.flags&256?(Ai(n),n):(Ai(n),null)}if(Ai(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=o!==null,t=t!==null&&t.memoizedState!==null,r){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return r!==t&&r&&(n.child.flags|=8192),Eu(n,n.updateQueue),Wt(n),null;case 4:return ui(),t===null&&Ef(n.stateNode.containerInfo),Wt(n),null;case 10:return Ri(n.type),Wt(n),null;case 19:if(te(_e),c=n.memoizedState,c===null)return Wt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)ko(c,!1);else{if(ie!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=iu(t),f!==null){for(n.flags|=128,ko(c,!1),t=f.updateQueue,n.updateQueue=t,Eu(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)gp(r,t),r=r.sibling;return jt(_e,_e.current&1|2),n.child}t=t.sibling}c.tail!==null&&We()>Tu&&(n.flags|=128,o=!0,ko(c,!1),n.lanes=4194304)}else{if(!o)if(t=iu(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Eu(n,t),ko(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ut)return Wt(n),null}else 2*We()-c.renderingStartTime>Tu&&r!==536870912&&(n.flags|=128,o=!0,ko(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=We(),n.sibling=null,t=_e.current,jt(_e,o?t&1|2:t&1),n):(Wt(n),null);case 22:case 23:return Ai(n),oh(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),r=n.updateQueue,r!==null&&Eu(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&te(ls),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ri(ve),Wt(n),null;case 25:return null}throw Error(a(156,n.tag))}function bE(t,n){switch(ih(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ri(ve),ui(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ks(n),null;case 13:if(Ai(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));go()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return te(_e),null;case 4:return ui(),null;case 10:return Ri(n.type),null;case 22:case 23:return Ai(n),oh(),t!==null&&te(ls),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ri(ve),null;case 25:return null;default:return null}}function yp(t,n){switch(ih(n),n.tag){case 3:Ri(ve),ui();break;case 26:case 27:case 5:ks(n);break;case 4:ui();break;case 13:Ai(n);break;case 19:te(_e);break;case 10:Ri(n.type);break;case 22:case 23:Ai(n),oh(),t!==null&&te(ls);break;case 24:Ri(ve)}}var wE={getCacheForType:function(t){var n=je(ve),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r}},RE=typeof WeakMap=="function"?WeakMap:Map,Jt=0,Qt=null,bt=null,Mt=0,Yt=0,hn=null,Ni=!1,ga=!1,ef=!1,Mi=0,ie=0,Ar=0,ys=0,nf=0,In=0,ma=0,xo=null,ti=null,rf=!1,sf=0,Tu=1/0,Au=null,Sr=null,Su=!1,_s=null,Uo=0,af=0,of=null,Lo=0,lf=null;function fn(){if((Jt&2)!==0&&Mt!==0)return Mt&-Mt;if(S.T!==null){var t=aa;return t!==0?t:pf()}return Dl()}function _p(){In===0&&(In=(Mt&536870912)===0||Ut?Ya():536870912);var t=bn.current;return t!==null&&(t.flags|=32),In}function Ze(t,n,r){(t===Qt&&Yt===2||t.cancelPendingCommit!==null)&&(pa(t,0),Vi(t,Mt,In,!1)),oe(t,r),((Jt&2)===0||t!==Qt)&&(t===Qt&&((Jt&2)===0&&(ys|=r),ie===4&&Vi(t,Mt,In,!1)),ei(t))}function vp(t,n,r){if((Jt&6)!==0)throw Error(a(327));var o=!r&&(n&60)===0&&(n&t.expiredLanes)===0||$i(t,n),c=o?DE(t,n):ff(t,n,!0),f=o;do{if(c===0){ga&&!o&&Vi(t,n,0,!1);break}else if(c===6)Vi(t,n,0,!Ni);else{if(r=t.current.alternate,f&&!CE(r)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var E=t;c=xo;var w=E.current.memoizedState.isDehydrated;if(w&&(pa(E,p).flags|=256),p=ff(E,p,!1),p!==2){if(ef&&!w){E.errorRecoveryDisabledLanes|=f,ys|=f,c=4;break t}f=ti,ti=c,f!==null&&uf(f)}c=p}if(f=!1,c!==2)continue}}if(c===1){pa(t,0),Vi(t,n,0,!0);break}t:{switch(o=t,c){case 0:case 1:throw Error(a(345));case 4:if((n&4194176)===n){Vi(o,n,In,!Ni);break t}break;case 2:ti=null;break;case 3:case 5:break;default:throw Error(a(329))}if(o.finishedWork=r,o.finishedLanes=n,(n&62914560)===n&&(f=sf+300-We(),10<f)){if(Vi(o,n,In,!Ni),gn(o,0)!==0)break t;o.timeoutHandle=qp(Ep.bind(null,o,r,ti,Au,rf,n,In,ys,ma,Ni,2,-0,0),f);break t}Ep(o,r,ti,Au,rf,n,In,ys,ma,Ni,0,-0,0)}}break}while(!0);ei(t)}function uf(t){ti===null?ti=t:ti.push.apply(ti,t)}function Ep(t,n,r,o,c,f,p,E,w,M,H,K,P){var j=n.subtreeFlags;if((j&8192||(j&16785408)===16785408)&&(qo={stylesheets:null,count:0,unsuspend:lT},cp(n),n=cT(),n!==null)){t.cancelPendingCommit=n(Cp.bind(null,t,r,o,c,p,E,w,1,K,P)),Vi(t,f,p,!M);return}Cp(t,r,o,c,p,E,w,H,K,P)}function CE(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var c=r[o],f=c.getSnapshot;c=c.value;try{if(!ln(f(),c))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Vi(t,n,r,o){n&=~nf,n&=~ys,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Qe(c),p=1<<f;o[f]=-1,c&=~p}r!==0&&Wi(t,r,n)}function bu(){return(Jt&6)===0?(Po(0),!1):!0}function cf(){if(bt!==null){if(Yt===0)var t=bt.return;else t=bt,wi=ds=null,mh(t),ra=null,_o=0,t=bt;for(;t!==null;)yp(t.alternate,t),t=t.return;bt=null}}function pa(t,n){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,KE(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),cf(),Qt=t,bt=r=Tr(t.current,null),Mt=n,Yt=0,hn=null,Ni=!1,ga=$i(t,n),ef=!1,ma=In=nf=ys=Ar=ie=0,ti=xo=null,rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Qe(o),f=1<<c;n|=t[c],o&=~f}return Mi=n,Yl(),r}function Tp(t,n){Tt=null,S.H=Jn,n===po?(n=Ug(),Yt=3):n===Vg?(n=Ug(),Yt=4):Yt=n===km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hn=n,bt===null&&(ie=1,gu(t,Tn(n,t.current)))}function Ap(){var t=S.H;return S.H=Jn,t===null?Jn:t}function Sp(){var t=S.A;return S.A=wE,t}function hf(){ie=4,Ni||(Mt&4194176)!==Mt&&bn.current!==null||(ga=!0),(Ar&134217727)===0&&(ys&134217727)===0||Qt===null||Vi(Qt,Mt,In,!1)}function ff(t,n,r){var o=Jt;Jt|=2;var c=Ap(),f=Sp();(Qt!==t||Mt!==n)&&(Au=null,pa(t,n)),n=!1;var p=ie;t:do try{if(Yt!==0&&bt!==null){var E=bt,w=hn;switch(Yt){case 8:cf(),p=6;break t;case 3:case 2:case 6:bn.current===null&&(n=!0);var M=Yt;if(Yt=0,hn=null,ya(t,E,w,M),r&&ga){p=0;break t}break;default:M=Yt,Yt=0,hn=null,ya(t,E,w,M)}}IE(),p=ie;break}catch(H){Tp(t,H)}while(!0);return n&&t.shellSuspendCounter++,wi=ds=null,Jt=o,S.H=c,S.A=f,bt===null&&(Qt=null,Mt=0,Yl()),p}function IE(){for(;bt!==null;)bp(bt)}function DE(t,n){var r=Jt;Jt|=2;var o=Ap(),c=Sp();Qt!==t||Mt!==n?(Au=null,Tu=We()+500,pa(t,n)):ga=$i(t,n);t:do try{if(Yt!==0&&bt!==null){n=bt;var f=hn;e:switch(Yt){case 1:Yt=0,hn=null,ya(t,n,f,1);break;case 2:if(kg(f)){Yt=0,hn=null,wp(n);break}n=function(){Yt===2&&Qt===t&&(Yt=7),ei(t)},f.then(n,n);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:kg(f)?(Yt=0,hn=null,wp(n)):(Yt=0,hn=null,ya(t,n,f,7));break;case 5:var p=null;switch(bt.tag){case 26:p=bt.memoizedState;case 5:case 27:var E=bt;if(!p||ty(p)){Yt=0,hn=null;var w=E.sibling;if(w!==null)bt=w;else{var M=E.return;M!==null?(bt=M,wu(M)):bt=null}break e}}Yt=0,hn=null,ya(t,n,f,5);break;case 6:Yt=0,hn=null,ya(t,n,f,6);break;case 8:cf(),ie=6;break t;default:throw Error(a(462))}}OE();break}catch(H){Tp(t,H)}while(!0);return wi=ds=null,S.H=o,S.A=c,Jt=r,bt!==null?0:(Qt=null,Mt=0,Yl(),ie)}function OE(){for(;bt!==null&&!zc();)bp(bt)}function bp(t){var n=Km(t.alternate,t,Mi);t.memoizedProps=t.pendingProps,n===null?wu(t):bt=n}function wp(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=jm(r,n,n.pendingProps,n.type,void 0,Mt);break;case 11:n=jm(r,n,n.pendingProps,n.type.render,n.ref,Mt);break;case 5:mh(n);default:yp(r,n),n=bt=gp(n,Mi),n=Km(r,n,Mi)}t.memoizedProps=t.pendingProps,n===null?wu(t):bt=n}function ya(t,n,r,o){wi=ds=null,mh(n),ra=null,_o=0;var c=n.return;try{if(_E(t,c,n,r,Mt)){ie=1,gu(t,Tn(r,t.current)),bt=null;return}}catch(f){if(c!==null)throw bt=c,f;ie=1,gu(t,Tn(r,t.current)),bt=null;return}n.flags&32768?(Ut||o===1?t=!0:ga||(Mt&536870912)!==0?t=!1:(Ni=t=!0,(o===2||o===3||o===6)&&(o=bn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Rp(n,t)):wu(n)}function wu(t){var n=t;do{if((n.flags&32768)!==0){Rp(n,Ni);return}t=n.return;var r=SE(n.alternate,n,Mi);if(r!==null){bt=r;return}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);ie===0&&(ie=5)}function Rp(t,n){do{var r=bE(t.alternate,t);if(r!==null){r.flags&=32767,bt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){bt=t;return}bt=t=r}while(t!==null);ie=6,bt=null}function Cp(t,n,r,o,c,f,p,E,w,M){var H=S.T,K=tt.p;try{tt.p=2,S.T=null,NE(t,n,r,o,K,c,f,p,E,w,M)}finally{S.T=H,tt.p=K}}function NE(t,n,r,o,c,f,p,E){do _a();while(_s!==null);if((Jt&6)!==0)throw Error(a(327));var w=t.finishedWork;if(o=t.finishedLanes,w===null)return null;if(t.finishedWork=null,t.finishedLanes=0,w===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var M=w.lanes|w.childLanes;if(M|=th,Cl(t,o,M,f,p,E),t===Qt&&(bt=Qt=null,Mt=0),(w.subtreeFlags&10256)===0&&(w.flags&10256)===0||Su||(Su=!0,af=M,of=r,xE(ci,function(){return _a(),null})),r=(w.flags&15990)!==0,(w.subtreeFlags&15990)!==0||r?(r=S.T,S.T=null,f=tt.p,tt.p=2,p=Jt,Jt|=4,EE(t,w),op(w,t),eE(bf,t.containerInfo),Lu=!!Sf,bf=Sf=null,t.current=w,ip(t,w.alternate,w),Ga(),Jt=p,tt.p=f,S.T=r):t.current=w,Su?(Su=!1,_s=t,Uo=o):Ip(t,M),M=t.pendingLanes,M===0&&(Sr=null),Ka(w.stateNode),ei(t),n!==null)for(c=t.onRecoverableError,w=0;w<n.length;w++)M=n[w],c(M.value,{componentStack:M.stack});return(Uo&3)!==0&&_a(),M=t.pendingLanes,(o&4194218)!==0&&(M&42)!==0?t===lf?Lo++:(Lo=0,lf=t):Lo=0,Po(0),null}function Ip(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Eo(n)))}function _a(){if(_s!==null){var t=_s,n=af;af=0;var r=Il(Uo),o=S.T,c=tt.p;try{if(tt.p=32>r?32:r,S.T=null,_s===null)var f=!1;else{r=of,of=null;var p=_s,E=Uo;if(_s=null,Uo=0,(Jt&6)!==0)throw Error(a(331));var w=Jt;if(Jt|=4,fp(p.current),up(p,p.current,E,r),Jt=w,Po(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Yi,p)}catch{}f=!0}return f}finally{tt.p=c,S.T=o,Ip(t,n)}}return!1}function Dp(t,n,r){n=Tn(r,n),n=Dh(t.stateNode,n,2),t=yr(t,n,2),t!==null&&(oe(t,2),ei(t))}function Kt(t,n,r){if(t.tag===3)Dp(t,t,r);else for(;n!==null;){if(n.tag===3){Dp(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Sr===null||!Sr.has(o))){t=Tn(r,t),r=Mm(2),o=yr(n,r,2),o!==null&&(Vm(r,o,n,t),oe(o,2),ei(o));break}}n=n.return}}function df(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new RE;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(r)||(ef=!0,c.add(r),t=ME.bind(null,t,n,r),n.then(t,t))}function ME(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Qt===t&&(Mt&r)===r&&(ie===4||ie===3&&(Mt&62914560)===Mt&&300>We()-sf?(Jt&2)===0&&pa(t,0):nf|=r,ma===Mt&&(ma=0)),ei(t)}function Op(t,n){n===0&&(n=Zi()),t=ur(t,n),t!==null&&(oe(t,n),ei(t))}function VE(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),Op(t,r)}function kE(t,n){var r=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(r=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),Op(t,r)}function xE(t,n){return Hr(t,n)}var Ru=null,va=null,gf=!1,Cu=!1,mf=!1,vs=0;function ei(t){t!==va&&t.next===null&&(va===null?Ru=va=t:va=va.next=t),Cu=!0,gf||(gf=!0,LE(UE))}function Po(t,n){if(!mf&&Cu){mf=!0;do for(var r=!1,o=Ru;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var p=o.suspendedLanes,E=o.pingedLanes;f=(1<<31-Qe(42|t)+1)-1,f&=c&~(p&~E),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(r=!0,Vp(o,f))}else f=Mt,f=gn(o,o===Qt?f:0),(f&3)===0||$i(o,f)||(r=!0,Vp(o,f));o=o.next}while(r);mf=!1}}function UE(){Cu=gf=!1;var t=0;vs!==0&&(FE()&&(t=vs),vs=0);for(var n=We(),r=null,o=Ru;o!==null;){var c=o.next,f=Np(o,n);f===0?(o.next=null,r===null?Ru=c:r.next=c,c===null&&(va=r)):(r=o,(t!==0||(f&3)!==0)&&(Cu=!0)),o=c}Po(t)}function Np(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var p=31-Qe(f),E=1<<p,w=c[p];w===-1?((E&r)===0||(E&o)!==0)&&(c[p]=Ls(E,n)):w<=n&&(t.expiredLanes|=E),f&=~E}if(n=Qt,r=Mt,r=gn(t,t===n?r:0),o=t.callbackNode,r===0||t===n&&Yt===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Us(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||$i(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Us(o),Il(r)){case 2:case 8:r=Te;break;case 32:r=ci;break;case 268435456:r=Fa;break;default:r=ci}return o=Mp.bind(null,t),r=Hr(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Us(o),t.callbackPriority=2,t.callbackNode=null,2}function Mp(t,n){var r=t.callbackNode;if(_a()&&t.callbackNode!==r)return null;var o=Mt;return o=gn(t,t===Qt?o:0),o===0?null:(vp(t,o,n),Np(t,We()),t.callbackNode!=null&&t.callbackNode===r?Mp.bind(null,t):null)}function Vp(t,n){if(_a())return null;vp(t,n,!0)}function LE(t){QE(function(){(Jt&6)!==0?Hr(ge,t):t()})}function pf(){return vs===0&&(vs=Ya()),vs}function kp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gn(""+t)}function xp(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function PE(t,n,r,o,c){if(n==="submit"&&r&&r.stateNode===c){var f=kp((c[me]||null).action),p=o.submitter;p&&(n=(n=p[me]||null)?kp(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var E=new Gs("action","action",null,o,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vs!==0){var w=p?xp(c,p):new FormData(c);bh(r,{pending:!0,data:w,method:c.method,action:f},null,w)}}else typeof f=="function"&&(E.preventDefault(),w=p?xp(c,p):new FormData(c),bh(r,{pending:!0,data:w,method:c.method,action:f},f,w))},currentTarget:c}]})}}for(var yf=0;yf<Cg.length;yf++){var _f=Cg[yf],zE=_f.toLowerCase(),jE=_f[0].toUpperCase()+_f.slice(1);Vn(zE,"on"+jE)}Vn(Ag,"onAnimationEnd"),Vn(Sg,"onAnimationIteration"),Vn(bg,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(iE,"onTransitionRun"),Vn(rE,"onTransitionStart"),Vn(sE,"onTransitionCancel"),Vn(wg,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),an("onBeforeInput",["compositionend","keypress","textInput","paste"]),an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Up(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var p=o.length-1;0<=p;p--){var E=o[p],w=E.instance,M=E.currentTarget;if(E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=M;try{f(c)}catch(H){du(H)}c.currentTarget=null,f=w}else for(p=0;p<o.length;p++){if(E=o[p],w=E.instance,M=E.currentTarget,E=E.listener,w!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=M;try{f(c)}catch(H){du(H)}c.currentTarget=null,f=w}}}}function It(t,n){var r=n[Gr];r===void 0&&(r=n[Gr]=new Set);var o=t+"__bubble";r.has(o)||(Lp(n,t,2,!1),r.add(o))}function vf(t,n,r){var o=0;n&&(o|=4),Lp(r,t,o,n)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Iu]){t[Iu]=!0,$a.forEach(function(r){r!=="selectionchange"&&(BE.has(r)||vf(r,!1,t),vf(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Iu]||(n[Iu]=!0,vf("selectionchange",!1,n))}}function Lp(t,n,r,o){switch(ay(n)){case 2:var c=dT;break;case 8:c=gT;break;default:c=Vf}r=c.bind(null,n,r,t),c=void 0,!_n||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,r,{capture:!0,passive:c}):t.addEventListener(n,r,!0):c!==void 0?t.addEventListener(n,r,{passive:c}):t.addEventListener(n,r,!1)}function Tf(t,n,r,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var E=o.stateNode.containerInfo;if(E===c||E.nodeType===8&&E.parentNode===c)break;if(p===4)for(p=o.return;p!==null;){var w=p.tag;if((w===3||w===4)&&(w=p.stateNode.containerInfo,w===c||w.nodeType===8&&w.parentNode===c))return;p=p.return}for(;E!==null;){if(p=Mn(E),p===null)return;if(w=p.tag,w===5||w===6||w===26||w===27){o=f=p;continue t}E=E.parentNode}}o=o.return}Vl(function(){var M=f,H=qs(r),K=[];t:{var P=Rg.get(t);if(P!==void 0){var j=Gs,ot=t;switch(t){case"keypress":if(Kn(r)===0)break t;case"keydown":case"keyup":j=$s;break;case"focusin":ot="focus",j=Qs;break;case"focusout":ot="blur",j=Qs;break;case"beforeblur":case"afterblur":j=Qs;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Bl;break;case Ag:case Sg:case bg:j=Ys;break;case wg:j=ql;break;case"scroll":case"scrollend":j=kl;break;case"wheel":j=Zs;break;case"copy":case"cut":case"paste":j=Xs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=lo;break;case"toggle":case"beforetoggle":j=Fl}var mt=(n&4)!==0,re=!mt&&(t==="scroll"||t==="scrollend"),x=mt?P!==null?P+"Capture":null:P;mt=[];for(var N=M,L;N!==null;){var q=N;if(L=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||L===null||x===null||(q=Xr(N,x),q!=null&&mt.push(jo(N,q,L))),re)break;N=N.return}0<mt.length&&(P=new j(P,ot,null,r,H),K.push({event:P,listeners:mt}))}}if((n&7)===0){t:{if(P=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",P&&r!==yn&&(ot=r.relatedTarget||r.fromElement)&&(Mn(ot)||ot[hi]))break t;if((j||P)&&(P=H.window===H?H:(P=H.ownerDocument)?P.defaultView||P.parentWindow:window,j?(ot=r.relatedTarget||r.toElement,j=M,ot=ot?Mn(ot):null,ot!==null&&(re=it(ot),mt=ot.tag,ot!==re||mt!==5&&mt!==27&&mt!==6)&&(ot=null)):(j=null,ot=M),j!==ot)){if(mt=vn,q="onMouseLeave",x="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(mt=lo,q="onPointerLeave",x="onPointerEnter",N="pointer"),re=j==null?P:nr(j),L=ot==null?P:nr(ot),P=new mt(q,N+"leave",j,r,H),P.target=re,P.relatedTarget=L,q=null,Mn(H)===M&&(mt=new mt(x,N+"enter",ot,r,H),mt.target=L,mt.relatedTarget=re,q=mt),re=q,j&&ot)e:{for(mt=j,x=ot,N=0,L=mt;L;L=Ea(L))N++;for(L=0,q=x;q;q=Ea(q))L++;for(;0<N-L;)mt=Ea(mt),N--;for(;0<L-N;)x=Ea(x),L--;for(;N--;){if(mt===x||x!==null&&mt===x.alternate)break e;mt=Ea(mt),x=Ea(x)}mt=null}else mt=null;j!==null&&Pp(K,P,j,mt,!1),ot!==null&&re!==null&&Pp(K,re,ot,mt,!0)}}t:{if(P=M?nr(M):window,j=P.nodeName&&P.nodeName.toLowerCase(),j==="select"||j==="input"&&P.type==="file")var rt=hg;else if(ye(P))if(fg)rt=J0;else{rt=Z0;var St=$0}else j=P.nodeName,!j||j.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?M&&eo(M.elementType)&&(rt=hg):rt=W0;if(rt&&(rt=rt(t,M))){vi(K,rt,r,H);break t}St&&St(t,P,M),t==="focusout"&&M&&P.type==="number"&&M.memoizedProps.value!=null&&Hs(P,"number",P.value)}switch(St=M?nr(M):window,t){case"focusin":(ye(St)||St.contentEditable==="true")&&(Ws=St,Zc=M,ho=null);break;case"focusout":ho=Zc=Ws=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Eg(K,r,H);break;case"selectionchange":if(nE)break;case"keydown":case"keyup":Eg(K,r,H)}var ut;if(Xn)t:{switch(t){case"compositionstart":var ct="onCompositionStart";break t;case"compositionend":ct="onCompositionEnd";break t;case"compositionupdate":ct="onCompositionUpdate";break t}ct=void 0}else Ot?z(t,r)&&(ct="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(ct="onCompositionStart");ct&&(m&&r.locale!=="ko"&&(Ot||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ot&&(ut=io()):(Fn=H,lr="value"in Fn?Fn.value:Fn.textContent,Ot=!0)),St=Du(M,ct),0<St.length&&(ct=new ao(ct,t,null,r,H),K.push({event:ct,listeners:St}),ut?ct.data=ut:(ut=Z(r),ut!==null&&(ct.data=ut)))),(ut=g?pe(t,r):Nt(t,r))&&(ct=Du(M,"onBeforeInput"),0<ct.length&&(St=new ao("onBeforeInput","beforeinput",null,r,H),K.push({event:St,listeners:ct}),St.data=ut)),PE(K,t,M,r,H)}Up(K,n)})}function jo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function Du(t,n){for(var r=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Xr(t,r),c!=null&&o.unshift(jo(t,c,f)),c=Xr(t,n),c!=null&&o.push(jo(t,c,f))),t=t.return}return o}function Ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Pp(t,n,r,o,c){for(var f=n._reactName,p=[];r!==null&&r!==o;){var E=r,w=E.alternate,M=E.stateNode;if(E=E.tag,w!==null&&w===o)break;E!==5&&E!==26&&E!==27||M===null||(w=M,c?(M=Xr(r,f),M!=null&&p.unshift(jo(r,M,w))):c||(M=Xr(r,f),M!=null&&p.push(jo(r,M,w)))),r=r.return}p.length!==0&&t.push({event:n,listeners:p})}var HE=/\r\n?/g,qE=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(HE,`
`).replace(qE,"")}function jp(t,n){return n=zp(n),zp(t)===n}function Ou(){}function Ft(t,n,r,o,c,f){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":sr(t,"class",o);break;case"tabIndex":sr(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":sr(t,r,o);break;case"style":Ml(t,o,f);break;case"data":if(n!=="object"){sr(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Gn(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&Ft(t,n,"name",c.name,c,null),Ft(t,n,"formEncType",c.formEncType,c,null),Ft(t,n,"formMethod",c.formMethod,c,null),Ft(t,n,"formTarget",c.formTarget,c,null)):(Ft(t,n,"encType",c.encType,c,null),Ft(t,n,"method",c.method,c,null),Ft(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=Gn(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Ou);break;case"onScroll":o!=null&&It("scroll",t);break;case"onScrollEnd":o!=null&&It("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=Gn(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":It("beforetoggle",t),It("toggle",t),rr(t,"popover",o);break;case"xlinkActuate":mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":mn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":mn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":mn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":mn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":rr(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Gc.get(r)||r,rr(t,r,o))}}function Af(t,n,r,o,c,f){switch(r){case"style":Ml(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(c.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&It("scroll",t);break;case"onScrollEnd":o!=null&&It("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ou);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!js.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(c=r.endsWith("Capture"),n=r.slice(2,c?r.length-7:void 0),f=t[me]||null,f=f!=null?f[r]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,c);break t}r in t?t[r]=o:o===!0?t.setAttribute(r,""):rr(t,r,o)}}}function ke(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":It("error",t),It("load",t);var o=!1,c=!1,f;for(f in r)if(r.hasOwnProperty(f)){var p=r[f];if(p!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(t,n,f,p,r,null)}}c&&Ft(t,n,"srcSet",r.srcSet,r,null),o&&Ft(t,n,"src",r.src,r,null);return;case"input":It("invalid",t);var E=f=p=c=null,w=null,M=null;for(o in r)if(r.hasOwnProperty(o)){var H=r[o];if(H!=null)switch(o){case"name":c=H;break;case"type":p=H;break;case"checked":w=H;break;case"defaultChecked":M=H;break;case"value":f=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Ft(t,n,o,H,r,null)}}Qr(t,f,E,w,M,p,c,!1),Kr(t);return;case"select":It("invalid",t),o=p=f=null;for(c in r)if(r.hasOwnProperty(c)&&(E=r[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":p=E;break;case"multiple":o=E;default:Ft(t,n,c,E,r,null)}n=f,r=p,t.multiple=!!o,n!=null?xt(t,!!o,n,!1):r!=null&&xt(t,!!o,r,!0);return;case"textarea":It("invalid",t),f=c=o=null;for(p in r)if(r.hasOwnProperty(p)&&(E=r[p],E!=null))switch(p){case"value":o=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Ft(t,n,p,E,r,null)}or(t,o,c,f),Kr(t);return;case"option":for(w in r)if(r.hasOwnProperty(w)&&(o=r[w],o!=null))switch(w){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ft(t,n,w,o,r,null)}return;case"dialog":It("cancel",t),It("close",t);break;case"iframe":case"object":It("load",t);break;case"video":case"audio":for(o=0;o<zo.length;o++)It(zo[o],t);break;case"image":It("error",t),It("load",t);break;case"details":It("toggle",t);break;case"embed":case"source":case"link":It("error",t),It("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in r)if(r.hasOwnProperty(M)&&(o=r[M],o!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Ft(t,n,M,o,r,null)}return;default:if(eo(n)){for(H in r)r.hasOwnProperty(H)&&(o=r[H],o!==void 0&&Af(t,n,H,o,r,void 0));return}}for(E in r)r.hasOwnProperty(E)&&(o=r[E],o!=null&&Ft(t,n,E,o,r,null))}function GE(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,p=null,E=null,w=null,M=null,H=null;for(j in r){var K=r[j];if(r.hasOwnProperty(j)&&K!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":w=K;default:o.hasOwnProperty(j)||Ft(t,n,j,null,o,K)}}for(var P in o){var j=o[P];if(K=r[P],o.hasOwnProperty(P)&&(j!=null||K!=null))switch(P){case"type":f=j;break;case"name":c=j;break;case"checked":M=j;break;case"defaultChecked":H=j;break;case"value":p=j;break;case"defaultValue":E=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(a(137,n));break;default:j!==K&&Ft(t,n,P,j,o,K)}}ar(t,p,E,w,M,H,f,c);return;case"select":j=p=E=P=null;for(f in r)if(w=r[f],r.hasOwnProperty(f)&&w!=null)switch(f){case"value":break;case"multiple":j=w;default:o.hasOwnProperty(f)||Ft(t,n,f,null,o,w)}for(c in o)if(f=o[c],w=r[c],o.hasOwnProperty(c)&&(f!=null||w!=null))switch(c){case"value":P=f;break;case"defaultValue":E=f;break;case"multiple":p=f;default:f!==w&&Ft(t,n,c,f,o,w)}n=E,r=p,o=j,P!=null?xt(t,!!r,P,!1):!!o!=!!r&&(n!=null?xt(t,!!r,n,!0):xt(t,!!r,r?[]:"",!1));return;case"textarea":j=P=null;for(E in r)if(c=r[E],r.hasOwnProperty(E)&&c!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ft(t,n,E,null,o,c)}for(p in o)if(c=o[p],f=r[p],o.hasOwnProperty(p)&&(c!=null||f!=null))switch(p){case"value":P=c;break;case"defaultValue":j=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(a(91));break;default:c!==f&&Ft(t,n,p,c,o,f)}Yr(t,P,j);return;case"option":for(var ot in r)if(P=r[ot],r.hasOwnProperty(ot)&&P!=null&&!o.hasOwnProperty(ot))switch(ot){case"selected":t.selected=!1;break;default:Ft(t,n,ot,null,o,P)}for(w in o)if(P=o[w],j=r[w],o.hasOwnProperty(w)&&P!==j&&(P!=null||j!=null))switch(w){case"selected":t.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ft(t,n,w,P,o,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var mt in r)P=r[mt],r.hasOwnProperty(mt)&&P!=null&&!o.hasOwnProperty(mt)&&Ft(t,n,mt,null,o,P);for(M in o)if(P=o[M],j=r[M],o.hasOwnProperty(M)&&P!==j&&(P!=null||j!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,n));break;default:Ft(t,n,M,P,o,j)}return;default:if(eo(n)){for(var re in r)P=r[re],r.hasOwnProperty(re)&&P!==void 0&&!o.hasOwnProperty(re)&&Af(t,n,re,void 0,o,P);for(H in o)P=o[H],j=r[H],!o.hasOwnProperty(H)||P===j||P===void 0&&j===void 0||Af(t,n,H,P,o,j);return}}for(var x in r)P=r[x],r.hasOwnProperty(x)&&P!=null&&!o.hasOwnProperty(x)&&Ft(t,n,x,null,o,P);for(K in o)P=o[K],j=r[K],!o.hasOwnProperty(K)||P===j||P==null&&j==null||Ft(t,n,K,P,o,j)}var Sf=null,bf=null;function Nu(t){return t.nodeType===9?t:t.ownerDocument}function Bp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hp(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function FE(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var qp=typeof setTimeout=="function"?setTimeout:void 0,KE=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,QE=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(YE)}:qp;function YE(t){setTimeout(function(){throw t})}function Cf(t,n){var r=n,o=0;do{var c=r.nextSibling;if(t.removeChild(r),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(o===0){t.removeChild(c),Yo(n);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=c}while(r);Yo(n)}function If(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":If(r),Fr(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function XE(t,n,r,o){for(;t.nodeType===1;){var c=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[er])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Un(t.nextSibling),t===null)break}return null}function $E(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Un(t.nextSibling),t===null))return null;return t}function Un(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function Fp(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return t;n--}else r==="/$"&&n++}t=t.previousSibling}return null}function Kp(t,n,r){switch(n=Nu(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}var Dn=new Map,Qp=new Set;function Mu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ki=tt.d;tt.d={f:ZE,r:WE,D:JE,C:tT,L:eT,m:nT,X:rT,S:iT,M:sT};function ZE(){var t=ki.f(),n=bu();return t||n}function WE(t){var n=fi(t);n!==null&&n.tag===5&&n.type==="form"?Em(n):ki.r(t)}var Ta=typeof document>"u"?null:document;function Yp(t,n,r){var o=Ta;if(o&&typeof n=="string"&&n){var c=ee(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof r=="string"&&(c+='[crossorigin="'+r+'"]'),Qp.has(c)||(Qp.add(c),t={rel:t,crossOrigin:r,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),ke(n,"link",t),Zt(n),o.head.appendChild(n)))}}function JE(t){ki.D(t),Yp("dns-prefetch",t,null)}function tT(t,n){ki.C(t,n),Yp("preconnect",t,n)}function eT(t,n,r){ki.L(t,n,r);var o=Ta;if(o&&t&&n){var c='link[rel="preload"][as="'+ee(n)+'"]';n==="image"&&r&&r.imageSrcSet?(c+='[imagesrcset="'+ee(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(c+='[imagesizes="'+ee(r.imageSizes)+'"]')):c+='[href="'+ee(t)+'"]';var f=c;switch(n){case"style":f=Aa(t);break;case"script":f=Sa(t)}Dn.has(f)||(t=C({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),Dn.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),ke(n,"link",t),Zt(n),o.head.appendChild(n)))}}function nT(t,n){ki.m(t,n);var r=Ta;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+ee(o)+'"][href="'+ee(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sa(t)}if(!Dn.has(f)&&(t=C({rel:"modulepreload",href:t},n),Dn.set(f,t),r.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ho(f)))return}o=r.createElement("link"),ke(o,"link",t),Zt(o),r.head.appendChild(o)}}}function iT(t,n,r){ki.S(t,n,r);var o=Ta;if(o&&t){var c=ir(o).hoistableStyles,f=Aa(t);n=n||"default";var p=c.get(f);if(!p){var E={loading:0,preload:null};if(p=o.querySelector(Bo(f)))E.loading=5;else{t=C({rel:"stylesheet",href:t,"data-precedence":n},r),(r=Dn.get(f))&&Df(t,r);var w=p=o.createElement("link");Zt(w),ke(w,"link",t),w._p=new Promise(function(M,H){w.onload=M,w.onerror=H}),w.addEventListener("load",function(){E.loading|=1}),w.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vu(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:E},c.set(f,p)}}}function rT(t,n){ki.X(t,n);var r=Ta;if(r&&t){var o=ir(r).hoistableScripts,c=Sa(t),f=o.get(c);f||(f=r.querySelector(Ho(c)),f||(t=C({src:t,async:!0},n),(n=Dn.get(c))&&Of(t,n),f=r.createElement("script"),Zt(f),ke(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function sT(t,n){ki.M(t,n);var r=Ta;if(r&&t){var o=ir(r).hoistableScripts,c=Sa(t),f=o.get(c);f||(f=r.querySelector(Ho(c)),f||(t=C({src:t,async:!0,type:"module"},n),(n=Dn.get(c))&&Of(t,n),f=r.createElement("script"),Zt(f),ke(f,"link",t),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Xp(t,n,r,o){var c=(c=dn.current)?Mu(c):null;if(!c)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Aa(r.href),r=ir(c).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Aa(r.href);var f=ir(c).hoistableStyles,p=f.get(t);if(p||(c=c.ownerDocument||c,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,p),(f=c.querySelector(Bo(t)))&&!f._p&&(p.instance=f,p.state.loading=5),Dn.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Dn.set(t,r),f||aT(c,t,r,p.state))),n&&o===null)throw Error(a(528,""));return p}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sa(r),r=ir(c).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Aa(t){return'href="'+ee(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function $p(t){return C({},t,{"data-precedence":t.precedence,precedence:null})}function aT(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),ke(n,"link",r),Zt(n),t.head.appendChild(n))}function Sa(t){return'[src="'+ee(t)+'"]'}function Ho(t){return"script[async]"+t}function Zp(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+ee(r.href)+'"]');if(o)return n.instance=o,Zt(o),o;var c=C({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Zt(o),ke(o,"style",c),Vu(o,r.precedence,t),n.instance=o;case"stylesheet":c=Aa(r.href);var f=t.querySelector(Bo(c));if(f)return n.state.loading|=4,n.instance=f,Zt(f),f;o=$p(r),(c=Dn.get(c))&&Df(o,c),f=(t.ownerDocument||t).createElement("link"),Zt(f);var p=f;return p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),ke(f,"link",o),n.state.loading|=4,Vu(f,r.precedence,t),n.instance=f;case"script":return f=Sa(r.src),(c=t.querySelector(Ho(f)))?(n.instance=c,Zt(c),c):(o=r,(c=Dn.get(f))&&(o=C({},r),Of(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),Zt(c),ke(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Vu(o,r.precedence,t));return n.instance}function Vu(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,p=0;p<o.length;p++){var E=o[p];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ku=null;function Wp(t,n,r){if(ku===null){var o=new Map,c=ku=new Map;c.set(r,o)}else c=ku,o=c.get(r),o||(o=new Map,c.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),c=0;c<r.length;c++){var f=r[c];if(!(f[er]||f[Ae]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=t+p;var E=o.get(p);E?E.push(f):o.set(p,[f])}}return o}function Jp(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function oT(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ty(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var qo=null;function lT(){}function uT(t,n,r){if(qo===null)throw Error(a(475));var o=qo;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Aa(r.href),f=t.querySelector(Bo(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=xu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,Zt(f);return}f=t.ownerDocument||t,r=$p(r),(c=Dn.get(c))&&Df(r,c),f=f.createElement("link"),Zt(f);var p=f;p._p=new Promise(function(E,w){p.onload=E,p.onerror=w}),ke(f,"link",r),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=xu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function cT(){if(qo===null)throw Error(a(475));var t=qo;return t.stylesheets&&t.count===0&&Nf(t,t.stylesheets),0<t.count?function(n){var r=setTimeout(function(){if(t.stylesheets&&Nf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r)}}:null}function xu(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Uu=null;function Nf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Uu=new Map,n.forEach(hT,t),Uu=null,xu.call(t))}function hT(t,n){if(!(n.state.loading&4)){var r=Uu.get(t);if(r)var o=r.get(null);else{r=new Map,Uu.set(t,r);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var p=c[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),o=p)}o&&r.set(null,o)}c=n.instance,p=c.getAttribute("data-precedence"),f=r.get(p)||o,f===o&&r.set(null,c),r.set(p,c),this.count++,o=xu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:$,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function fT(t,n,r,o,c,f,p,E){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ps(0),this.hiddenUpdates=Ps(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function ey(t,n,r,o,c,f,p,E,w,M,H,K){return t=new fT(t,n,r,p,E,w,M,K),n=1,f===!0&&(n|=24),f=Cn(3,null,null,n),t.current=f,f.stateNode=t,n=lh(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:r,cache:n},Hh(f),t}function ny(t){return t?(t=ea,t):ea}function iy(t,n,r,o,c,f){c=ny(c),o.context===null?o.context=c:o.pendingContext=c,o=pr(n),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=yr(t,o,n),r!==null&&(Ze(r,t,n),Co(r,t,n))}function ry(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function Mf(t,n){ry(t,n),(t=t.alternate)&&ry(t,n)}function sy(t){if(t.tag===13){var n=ur(t,67108864);n!==null&&Ze(n,t,67108864),Mf(t,67108864)}}var Lu=!0;function dT(t,n,r,o){var c=S.T;S.T=null;var f=tt.p;try{tt.p=2,Vf(t,n,r,o)}finally{tt.p=f,S.T=c}}function gT(t,n,r,o){var c=S.T;S.T=null;var f=tt.p;try{tt.p=8,Vf(t,n,r,o)}finally{tt.p=f,S.T=c}}function Vf(t,n,r,o){if(Lu){var c=kf(o);if(c===null)Tf(t,n,o,Pu,r),oy(t,o);else if(pT(c,t,n,r,o))o.stopPropagation();else if(oy(t,o),n&4&&-1<mT.indexOf(t)){for(;c!==null;){var f=fi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Nn(f.pendingLanes);if(p!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;p;){var w=1<<31-Qe(p);E.entanglements[1]|=w,p&=~w}ei(f),(Jt&6)===0&&(Tu=We()+500,Po(0))}}break;case 13:E=ur(f,2),E!==null&&Ze(E,f,2),bu(),Mf(f,2)}if(f=kf(o),f===null&&Tf(t,n,o,Pu,r),f===c)break;c=f}c!==null&&o.stopPropagation()}else Tf(t,n,o,null,r)}}function kf(t){return t=qs(t),xf(t)}var Pu=null;function xf(t){if(Pu=null,t=Mn(t),t!==null){var n=it(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=Dt(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Pu=t,null}function ay(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sl()){case ge:return 2;case Te:return 8;case ci:case bl:return 32;case Fa:return 268435456;default:return 32}default:return 32}}var Uf=!1,br=null,wr=null,Rr=null,Fo=new Map,Ko=new Map,Cr=[],mT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function oy(t,n){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Fo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,r,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=fi(n),n!==null&&sy(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function pT(t,n,r,o,c){switch(n){case"focusin":return br=Qo(br,t,n,r,o,c),!0;case"dragenter":return wr=Qo(wr,t,n,r,o,c),!0;case"mouseover":return Rr=Qo(Rr,t,n,r,o,c),!0;case"pointerover":var f=c.pointerId;return Fo.set(f,Qo(Fo.get(f)||null,t,n,r,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ko.set(f,Qo(Ko.get(f)||null,t,n,r,o,c)),!0}return!1}function ly(t){var n=Mn(t.target);if(n!==null){var r=it(n);if(r!==null){if(n=r.tag,n===13){if(n=Dt(r),n!==null){t.blockedOn=n,tr(t.priority,function(){if(r.tag===13){var o=fn(),c=ur(r,o);c!==null&&Ze(c,r,o),Mf(r,o)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=kf(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);yn=o,r.target.dispatchEvent(o),yn=null}else return n=fi(r),n!==null&&sy(n),t.blockedOn=r,!1;n.shift()}return!0}function uy(t,n,r){zu(t)&&r.delete(n)}function yT(){Uf=!1,br!==null&&zu(br)&&(br=null),wr!==null&&zu(wr)&&(wr=null),Rr!==null&&zu(Rr)&&(Rr=null),Fo.forEach(uy),Ko.forEach(uy)}function ju(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yT)))}var Bu=null;function cy(t){Bu!==t&&(Bu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Bu===t&&(Bu=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(xf(o||r)===null)continue;break}var f=fi(r);f!==null&&(t.splice(n,3),n-=3,bh(f,{pending:!0,data:c,method:r.method,action:o},o,c))}}))}function Yo(t){function n(w){return ju(w,t)}br!==null&&ju(br,t),wr!==null&&ju(wr,t),Rr!==null&&ju(Rr,t),Fo.forEach(n),Ko.forEach(n);for(var r=0;r<Cr.length;r++){var o=Cr[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Cr.length&&(r=Cr[0],r.blockedOn===null);)ly(r),r.blockedOn===null&&Cr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var c=r[o],f=r[o+1],p=c[me]||null;if(typeof f=="function")p||cy(r);else if(p){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,p=f[me]||null)E=p.formAction;else if(xf(c)!==null)continue}else E=p.action;typeof E=="function"?r[o+1]=E:(r.splice(o,3),o-=3),cy(r)}}}function Lf(t){this._internalRoot=t}Hu.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=fn();iy(r,o,t,n,null,null)},Hu.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&_a(),iy(t.current,2,null,t,null,null),bu(),n[hi]=null}};function Hu(t){this._internalRoot=t}Hu.prototype.unstable_scheduleHydration=function(t){if(t){var n=Dl();t={blockedOn:null,target:t,priority:n};for(var r=0;r<Cr.length&&n!==0&&n<Cr[r].priority;r++);Cr.splice(r,0,t),r===0&&ly(t)}};var hy=e.version;if(hy!=="19.0.0")throw Error(a(527,hy,"19.0.0"));tt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=Q(n),t=t!==null?st(t):null,t=t===null?null:t.stateNode,t};var _T={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Mn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Yi=qu.inject(_T),ze=qu}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",c=Im,f=Dm,p=Om,E=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=ey(t,1,!1,null,null,r,o,c,f,p,E,null),t[hi]=n.current,Ef(t.nodeType===8?t.parentNode:t),new Lf(n)},$o.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,c="",f=Im,p=Dm,E=Om,w=null,M=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(w=r.unstable_transitionCallbacks),r.formState!==void 0&&(M=r.formState)),n=ey(t,1,!0,n,r??null,o,c,f,p,E,w,M),n.context=ny(null),r=n.current,o=fn(),c=pr(o),c.callback=null,yr(r,c,o),n.current.lanes=o,oe(n,o),ei(n),t[hi]=n.current,Ef(t),new Hu(n)},$o.version="19.0.0",$o}var Ty;function IT(){if(Ty)return jf.exports;Ty=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),jf.exports=CT(),jf.exports}var DT=IT();const OT=()=>{};var Ay={};/**
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
 */const B_=function(s){const e=[];let i=0;for(let a=0;a<s.length;a++){let l=s.charCodeAt(a);l<128?e[i++]=l:l<2048?(e[i++]=l>>6|192,e[i++]=l&63|128):(l&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++a)&1023),e[i++]=l>>18|240,e[i++]=l>>12&63|128,e[i++]=l>>6&63|128,e[i++]=l&63|128):(e[i++]=l>>12|224,e[i++]=l>>6&63|128,e[i++]=l&63|128)}return e},NT=function(s){const e=[];let i=0,a=0;for(;i<s.length;){const l=s[i++];if(l<128)e[a++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[i++];e[a++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[i++],d=s[i++],y=s[i++],_=((l&7)<<18|(h&63)<<12|(d&63)<<6|y&63)-65536;e[a++]=String.fromCharCode(55296+(_>>10)),e[a++]=String.fromCharCode(56320+(_&1023))}else{const h=s[i++],d=s[i++];e[a++]=String.fromCharCode((l&15)<<12|(h&63)<<6|d&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let l=0;l<s.length;l+=3){const h=s[l],d=l+1<s.length,y=d?s[l+1]:0,_=l+2<s.length,v=_?s[l+2]:0,I=h>>2,k=(h&3)<<4|y>>4;let B=(y&15)<<2|v>>6,$=v&63;_||($=64,d||(B=64)),a.push(i[I],i[k],i[B],i[$])}return a.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(B_(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):NT(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let l=0;l<s.length;){const h=i[s.charAt(l++)],y=l<s.length?i[s.charAt(l)]:0;++l;const v=l<s.length?i[s.charAt(l)]:64;++l;const k=l<s.length?i[s.charAt(l)]:64;if(++l,h==null||y==null||v==null||k==null)throw new MT;const B=h<<2|y>>4;if(a.push(B),v!==64){const $=y<<4&240|v>>2;if(a.push($),k!==64){const X=v<<6&192|k;a.push(X)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class MT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VT=function(s){const e=B_(s);return bd.encodeByteArray(e,!0)},ac=function(s){return VT(s).replace(/\./g,"")},H_=function(s){try{return bd.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kT=()=>q_().__FIREBASE_DEFAULTS__,xT=()=>{if(typeof process>"u"||typeof Ay>"u")return;const s=Ay.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},UT=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&H_(s[1]);return e&&JSON.parse(e)},wc=()=>{try{return OT()||kT()||xT()||UT()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},G_=s=>{var e,i;return(i=(e=wc())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[s]},LT=s=>{const e=G_(s);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),a]:[e.substring(0,i),a]},F_=()=>{var s;return(s=wc())===null||s===void 0?void 0:s.config},K_=s=>{var e;return(e=wc())===null||e===void 0?void 0:e[`_${s}`]};/**
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
 */class rl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,a))}}}/**
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
 */function PT(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=e||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},s);return[ac(JSON.stringify(i)),ac(JSON.stringify(d)),""].join(".")}/**
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
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function jT(){var s;const e=(s=wc())===null||s===void 0?void 0:s.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GT(){const s=Fe();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function FT(){return!jT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wd(){try{return typeof indexedDB=="object"}catch{return!1}}function KT(){return new Promise((s,e)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(a);l.onsuccess=()=>{l.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},l.onupgradeneeded=()=>{i=!1},l.onerror=()=>{var h;e(((h=l.error)===null||h===void 0?void 0:h.message)||"")}}catch(i){e(i)}})}/**
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
 */const QT="FirebaseError";class Fi extends Error{constructor(e,i,a){super(i),this.code=e,this.customData=a,this.name=QT,Object.setPrototypeOf(this,Fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,i,a){this.service=e,this.serviceName=i,this.errors=a}create(e,...i){const a=i[0]||{},l=`${this.service}/${e}`,h=this.errors[e],d=h?YT(h,a):"Error",y=`${this.serviceName}: ${d} (${l}).`;return new Fi(l,y,a)}}function YT(s,e){return s.replace(XT,(i,a)=>{const l=e[a];return l!=null?String(l):`<${a}?>`})}const XT=/\{\$([^}]+)}/g;function $T(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function Rs(s,e){if(s===e)return!0;const i=Object.keys(s),a=Object.keys(e);for(const l of i){if(!a.includes(l))return!1;const h=s[l],d=e[l];if(Sy(h)&&Sy(d)){if(!Rs(h,d))return!1}else if(h!==d)return!1}for(const l of a)if(!i.includes(l))return!1;return!0}function Sy(s){return s!==null&&typeof s=="object"}/**
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
 */function dl(s){const e=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(l=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function ZT(s,e){const i=new WT(s,e);return i.subscribe.bind(i)}class WT{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,a){let l;if(e===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");JT(e,["next","error","complete"])?l=e:l={next:e,error:i,complete:a},l.next===void 0&&(l.next=Gf),l.error===void 0&&(l.error=Gf),l.complete===void 0&&(l.complete=Gf);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JT(s,e){if(typeof s!="object"||s===null)return!1;for(const i of e)if(i in s&&typeof s[i]=="function")return!0;return!1}function Gf(){}/**
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
 */const tA=1e3,eA=2,nA=4*60*60*1e3,iA=.5;function rA(s,e=tA,i=eA){const a=e*Math.pow(i,s),l=Math.round(iA*a*(Math.random()-.5)*2);return Math.min(nA,a+l)}/**
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
 */function On(s){return s&&s._delegate?s._delegate:s}class Bi{constructor(e,i,a){this.name=e,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class sA{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const a=new rl;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:i});l&&a.resolve(l)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(l)return null;throw h}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);try{const h=this.getOrInitializeService({instanceIdentifier:l});a.resolve(h)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[h,d]of this.instancesDeferred.entries()){const y=this.normalizeInstanceIdentifier(h);a===y&&d.resolve(l)}return l}onInit(e,i){var a;const l=this.normalizeInstanceIdentifier(i),h=(a=this.onInitCallbacks.get(l))!==null&&a!==void 0?a:new Set;h.add(e),this.onInitCallbacks.set(l,h);const d=this.instances.get(l);return d&&e(d,l),()=>{h.delete(e)}}invokeOnInitCallbacks(e,i){const a=this.onInitCallbacks.get(i);if(a)for(const l of a)try{l(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:aA(e),options:i}),this.instances.set(e,a),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aA(s){return s===Es?void 0:s}function oA(s){return s.instantiationMode==="EAGER"}/**
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
 */class lA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new sA(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Rt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Rt||(Rt={}));const uA={debug:Rt.DEBUG,verbose:Rt.VERBOSE,info:Rt.INFO,warn:Rt.WARN,error:Rt.ERROR,silent:Rt.SILENT},cA=Rt.INFO,hA={[Rt.DEBUG]:"log",[Rt.VERBOSE]:"log",[Rt.INFO]:"info",[Rt.WARN]:"warn",[Rt.ERROR]:"error"},fA=(s,e,...i)=>{if(e<s.logLevel)return;const a=new Date().toISOString(),l=hA[e];if(l)console[l](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rc{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=fA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Rt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Rt.DEBUG,...e),this._logHandler(this,Rt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Rt.VERBOSE,...e),this._logHandler(this,Rt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Rt.INFO,...e),this._logHandler(this,Rt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Rt.WARN,...e),this._logHandler(this,Rt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Rt.ERROR,...e),this._logHandler(this,Rt.ERROR,...e)}}const dA=(s,e)=>e.some(i=>s instanceof i);let by,wy;function gA(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mA(){return wy||(wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q_=new WeakMap,nd=new WeakMap,Y_=new WeakMap,Ff=new WeakMap,Rd=new WeakMap;function pA(s){const e=new Promise((i,a)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",d)},h=()=>{i(kr(s.result)),l()},d=()=>{a(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",d)});return e.then(i=>{i instanceof IDBCursor&&Q_.set(i,s)}).catch(()=>{}),Rd.set(e,s),e}function yA(s){if(nd.has(s))return;const e=new Promise((i,a)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",d),s.removeEventListener("abort",d)},h=()=>{i(),l()},d=()=>{a(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",d),s.addEventListener("abort",d)});nd.set(s,e)}let id={get(s,e,i){if(s instanceof IDBTransaction){if(e==="done")return nd.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Y_.get(s);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return kr(s[e])},set(s,e,i){return s[e]=i,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function _A(s){id=s(id)}function vA(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const a=s.call(Kf(this),e,...i);return Y_.set(a,e.sort?e.sort():[e]),kr(a)}:mA().includes(s)?function(...e){return s.apply(Kf(this),e),kr(Q_.get(this))}:function(...e){return kr(s.apply(Kf(this),e))}}function EA(s){return typeof s=="function"?vA(s):(s instanceof IDBTransaction&&yA(s),dA(s,gA())?new Proxy(s,id):s)}function kr(s){if(s instanceof IDBRequest)return pA(s);if(Ff.has(s))return Ff.get(s);const e=EA(s);return e!==s&&(Ff.set(s,e),Rd.set(e,s)),e}const Kf=s=>Rd.get(s);function TA(s,e,{blocked:i,upgrade:a,blocking:l,terminated:h}={}){const d=indexedDB.open(s,e),y=kr(d);return a&&d.addEventListener("upgradeneeded",_=>{a(kr(d.result),_.oldVersion,_.newVersion,kr(d.transaction),_)}),i&&d.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),y.then(_=>{h&&_.addEventListener("close",()=>h()),l&&_.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),y}const AA=["get","getKey","getAll","getAllKeys","count"],SA=["put","add","delete","clear"],Qf=new Map;function Ry(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Qf.get(e))return Qf.get(e);const i=e.replace(/FromIndex$/,""),a=e!==i,l=SA.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(l||AA.includes(i)))return;const h=async function(d,...y){const _=this.transaction(d,l?"readwrite":"readonly");let v=_.store;return a&&(v=v.index(y.shift())),(await Promise.all([v[i](...y),l&&_.done]))[0]};return Qf.set(e,h),h}_A(s=>({...s,get:(e,i,a)=>Ry(e,i)||s.get(e,i,a),has:(e,i)=>!!Ry(e,i)||s.has(e,i)}));/**
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
 */class bA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(wA(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function wA(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rd="@firebase/app",Cy="0.11.2";/**
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
 */const Hi=new Rc("@firebase/app"),RA="@firebase/app-compat",CA="@firebase/analytics-compat",IA="@firebase/analytics",DA="@firebase/app-check-compat",OA="@firebase/app-check",NA="@firebase/auth",MA="@firebase/auth-compat",VA="@firebase/database",kA="@firebase/data-connect",xA="@firebase/database-compat",UA="@firebase/functions",LA="@firebase/functions-compat",PA="@firebase/installations",zA="@firebase/installations-compat",jA="@firebase/messaging",BA="@firebase/messaging-compat",HA="@firebase/performance",qA="@firebase/performance-compat",GA="@firebase/remote-config",FA="@firebase/remote-config-compat",KA="@firebase/storage",QA="@firebase/storage-compat",YA="@firebase/firestore",XA="@firebase/vertexai",$A="@firebase/firestore-compat",ZA="firebase",WA="11.4.0";/**
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
 */const sd="[DEFAULT]",JA={[rd]:"fire-core",[RA]:"fire-core-compat",[IA]:"fire-analytics",[CA]:"fire-analytics-compat",[OA]:"fire-app-check",[DA]:"fire-app-check-compat",[NA]:"fire-auth",[MA]:"fire-auth-compat",[VA]:"fire-rtdb",[kA]:"fire-data-connect",[xA]:"fire-rtdb-compat",[UA]:"fire-fn",[LA]:"fire-fn-compat",[PA]:"fire-iid",[zA]:"fire-iid-compat",[jA]:"fire-fcm",[BA]:"fire-fcm-compat",[HA]:"fire-perf",[qA]:"fire-perf-compat",[GA]:"fire-rc",[FA]:"fire-rc-compat",[KA]:"fire-gcs",[QA]:"fire-gcs-compat",[YA]:"fire-fst",[$A]:"fire-fst-compat",[XA]:"fire-vertex","fire-js":"fire-js",[ZA]:"fire-js-all"};/**
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
 */const oc=new Map,tS=new Map,ad=new Map;function Iy(s,e){try{s.container.addComponent(e)}catch(i){Hi.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,i)}}function Lr(s){const e=s.name;if(ad.has(e))return Hi.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,s);for(const i of oc.values())Iy(i,s);for(const i of tS.values())Iy(i,s);return!0}function gl(s,e){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(e)}function ii(s){return s==null?!1:s.settings!==void 0}/**
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
 */const eS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Pa("app","Firebase",eS);/**
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
 */class nS{constructor(e,i,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const za=WA;function X_(s,e={}){let i=s;typeof e!="object"&&(e={name:e});const a=Object.assign({name:sd,automaticDataCollectionEnabled:!1},e),l=a.name;if(typeof l!="string"||!l)throw xr.create("bad-app-name",{appName:String(l)});if(i||(i=F_()),!i)throw xr.create("no-options");const h=oc.get(l);if(h){if(Rs(i,h.options)&&Rs(a,h.config))return h;throw xr.create("duplicate-app",{appName:l})}const d=new lA(l);for(const _ of ad.values())d.addComponent(_);const y=new nS(i,a,d);return oc.set(l,y),y}function Cd(s=sd){const e=oc.get(s);if(!e&&s===sd&&F_())return X_();if(!e)throw xr.create("no-app",{appName:s});return e}function Pi(s,e,i){var a;let l=(a=JA[s])!==null&&a!==void 0?a:s;i&&(l+=`-${i}`);const h=l.match(/\s|\//),d=e.match(/\s|\//);if(h||d){const y=[`Unable to register library "${l}" with version "${e}":`];h&&y.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&d&&y.push("and"),d&&y.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hi.warn(y.join(" "));return}Lr(new Bi(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
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
 */const iS="firebase-heartbeat-database",rS=1,sl="firebase-heartbeat-store";let Yf=null;function $_(){return Yf||(Yf=TA(iS,rS,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(sl)}catch(i){console.warn(i)}}}}).catch(s=>{throw xr.create("idb-open",{originalErrorMessage:s.message})})),Yf}async function sS(s){try{const i=(await $_()).transaction(sl),a=await i.objectStore(sl).get(Z_(s));return await i.done,a}catch(e){if(e instanceof Fi)Hi.warn(e.message);else{const i=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hi.warn(i.message)}}}async function Dy(s,e){try{const a=(await $_()).transaction(sl,"readwrite");await a.objectStore(sl).put(e,Z_(s)),await a.done}catch(i){if(i instanceof Fi)Hi.warn(i.message);else{const a=xr.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Hi.warn(a.message)}}}function Z_(s){return`${s.name}!${s.options.appId}`}/**
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
 */const aS=1024,oS=30;class lS{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new cS(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,i;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Oy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(d=>d.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>oS){const d=hS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Hi.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Oy(),{heartbeatsToSend:a,unsentEntries:l}=uS(this._heartbeatsCache.heartbeats),h=ac(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(i){return Hi.warn(i),""}}}function Oy(){return new Date().toISOString().substring(0,10)}function uS(s,e=aS){const i=[];let a=s.slice();for(const l of s){const h=i.find(d=>d.agent===l.agent);if(h){if(h.dates.push(l.date),Ny(i)>e){h.dates.pop();break}}else if(i.push({agent:l.agent,dates:[l.date]}),Ny(i)>e){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class cS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wd()?KT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await sS(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Dy(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const l=await this.read();return Dy(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Ny(s){return ac(JSON.stringify({version:2,heartbeats:s})).length}function hS(s){if(s.length===0)return-1;let e=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,e=a);return e}/**
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
 */function fS(s){Lr(new Bi("platform-logger",e=>new bA(e),"PRIVATE")),Lr(new Bi("heartbeat",e=>new lS(e),"PRIVATE")),Pi(rd,Cy,s),Pi(rd,Cy,"esm2017"),Pi("fire-js","")}fS("");var dS="firebase",gS="11.4.0";/**
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
 */Pi(dS,gS,"app");var My=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Id;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,R){function S(){}S.prototype=R.prototype,V.D=R.prototype,V.prototype=new S,V.prototype.constructor=V,V.C=function(C,A,O){for(var b=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)b[Ht-2]=arguments[Ht];return R.prototype[A].apply(C,b)}}function i(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,i),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(V,R,S){S||(S=0);var C=Array(16);if(typeof R=="string")for(var A=0;16>A;++A)C[A]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(A=0;16>A;++A)C[A]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=V.g[0],S=V.g[1],A=V.g[2];var O=V.g[3],b=R+(O^S&(A^O))+C[0]+3614090360&4294967295;R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[1]+3905402710&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[2]+606105819&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[3]+3250441966&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[4]+4118548399&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[5]+1200080426&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[6]+2821735955&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[7]+4249261313&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[8]+1770035416&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[9]+2336552879&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[10]+4294925233&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[11]+2304563134&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(O^S&(A^O))+C[12]+1804603682&4294967295,R=S+(b<<7&4294967295|b>>>25),b=O+(A^R&(S^A))+C[13]+4254626195&4294967295,O=R+(b<<12&4294967295|b>>>20),b=A+(S^O&(R^S))+C[14]+2792965006&4294967295,A=O+(b<<17&4294967295|b>>>15),b=S+(R^A&(O^R))+C[15]+1236535329&4294967295,S=A+(b<<22&4294967295|b>>>10),b=R+(A^O&(S^A))+C[1]+4129170786&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[6]+3225465664&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[11]+643717713&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[0]+3921069994&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[5]+3593408605&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[10]+38016083&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[15]+3634488961&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[4]+3889429448&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[9]+568446438&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[14]+3275163606&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[3]+4107603335&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[8]+1163531501&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(A^O&(S^A))+C[13]+2850285829&4294967295,R=S+(b<<5&4294967295|b>>>27),b=O+(S^A&(R^S))+C[2]+4243563512&4294967295,O=R+(b<<9&4294967295|b>>>23),b=A+(R^S&(O^R))+C[7]+1735328473&4294967295,A=O+(b<<14&4294967295|b>>>18),b=S+(O^R&(A^O))+C[12]+2368359562&4294967295,S=A+(b<<20&4294967295|b>>>12),b=R+(S^A^O)+C[5]+4294588738&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[8]+2272392833&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[11]+1839030562&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[14]+4259657740&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[1]+2763975236&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[4]+1272893353&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[7]+4139469664&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[10]+3200236656&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[13]+681279174&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[0]+3936430074&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[3]+3572445317&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[6]+76029189&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(S^A^O)+C[9]+3654602809&4294967295,R=S+(b<<4&4294967295|b>>>28),b=O+(R^S^A)+C[12]+3873151461&4294967295,O=R+(b<<11&4294967295|b>>>21),b=A+(O^R^S)+C[15]+530742520&4294967295,A=O+(b<<16&4294967295|b>>>16),b=S+(A^O^R)+C[2]+3299628645&4294967295,S=A+(b<<23&4294967295|b>>>9),b=R+(A^(S|~O))+C[0]+4096336452&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[7]+1126891415&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[14]+2878612391&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[5]+4237533241&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[12]+1700485571&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[3]+2399980690&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[10]+4293915773&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[1]+2240044497&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[8]+1873313359&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[15]+4264355552&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[6]+2734768916&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[13]+1309151649&4294967295,S=A+(b<<21&4294967295|b>>>11),b=R+(A^(S|~O))+C[4]+4149444226&4294967295,R=S+(b<<6&4294967295|b>>>26),b=O+(S^(R|~A))+C[11]+3174756917&4294967295,O=R+(b<<10&4294967295|b>>>22),b=A+(R^(O|~S))+C[2]+718787259&4294967295,A=O+(b<<15&4294967295|b>>>17),b=S+(O^(A|~R))+C[9]+3951481745&4294967295,V.g[0]=V.g[0]+R&4294967295,V.g[1]=V.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,V.g[2]=V.g[2]+A&4294967295,V.g[3]=V.g[3]+O&4294967295}a.prototype.u=function(V,R){R===void 0&&(R=V.length);for(var S=R-this.blockSize,C=this.B,A=this.h,O=0;O<R;){if(A==0)for(;O<=S;)l(this,V,O),O+=this.blockSize;if(typeof V=="string"){for(;O<R;)if(C[A++]=V.charCodeAt(O++),A==this.blockSize){l(this,C),A=0;break}}else for(;O<R;)if(C[A++]=V[O++],A==this.blockSize){l(this,C),A=0;break}}this.h=A,this.o+=R},a.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var R=1;R<V.length-8;++R)V[R]=0;var S=8*this.o;for(R=V.length-8;R<V.length;++R)V[R]=S&255,S/=256;for(this.u(V),V=Array(16),R=S=0;4>R;++R)for(var C=0;32>C;C+=8)V[S++]=this.g[R]>>>C&255;return V};function h(V,R){var S=y;return Object.prototype.hasOwnProperty.call(S,V)?S[V]:S[V]=R(V)}function d(V,R){this.h=R;for(var S=[],C=!0,A=V.length-1;0<=A;A--){var O=V[A]|0;C&&O==R||(S[A]=O,C=!1)}this.g=S}var y={};function _(V){return-128<=V&&128>V?h(V,function(R){return new d([R|0],0>R?-1:0)}):new d([V|0],0>V?-1:0)}function v(V){if(isNaN(V)||!isFinite(V))return k;if(0>V)return et(v(-V));for(var R=[],S=1,C=0;V>=S;C++)R[C]=V/S|0,S*=4294967296;return new d(R,0)}function I(V,R){if(V.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(V.charAt(0)=="-")return et(I(V.substring(1),R));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(R,8)),C=k,A=0;A<V.length;A+=8){var O=Math.min(8,V.length-A),b=parseInt(V.substring(A,A+O),R);8>O?(O=v(Math.pow(R,O)),C=C.j(O).add(v(b))):(C=C.j(S),C=C.add(v(b)))}return C}var k=_(0),B=_(1),$=_(16777216);s=d.prototype,s.m=function(){if(lt(this))return-et(this).m();for(var V=0,R=1,S=0;S<this.g.length;S++){var C=this.i(S);V+=(0<=C?C:4294967296+C)*R,R*=4294967296}return V},s.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(X(this))return"0";if(lt(this))return"-"+et(this).toString(V);for(var R=v(Math.pow(V,6)),S=this,C="";;){var A=Pt(S,R).g;S=At(S,A.j(R));var O=((0<S.g.length?S.g[0]:S.h)>>>0).toString(V);if(S=A,X(S))return O+C;for(;6>O.length;)O="0"+O;C=O+C}},s.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function X(V){if(V.h!=0)return!1;for(var R=0;R<V.g.length;R++)if(V.g[R]!=0)return!1;return!0}function lt(V){return V.h==-1}s.l=function(V){return V=At(this,V),lt(V)?-1:X(V)?0:1};function et(V){for(var R=V.g.length,S=[],C=0;C<R;C++)S[C]=~V.g[C];return new d(S,~V.h).add(B)}s.abs=function(){return lt(this)?et(this):this},s.add=function(V){for(var R=Math.max(this.g.length,V.g.length),S=[],C=0,A=0;A<=R;A++){var O=C+(this.i(A)&65535)+(V.i(A)&65535),b=(O>>>16)+(this.i(A)>>>16)+(V.i(A)>>>16);C=b>>>16,O&=65535,b&=65535,S[A]=b<<16|O}return new d(S,S[S.length-1]&-2147483648?-1:0)};function At(V,R){return V.add(et(R))}s.j=function(V){if(X(this)||X(V))return k;if(lt(this))return lt(V)?et(this).j(et(V)):et(et(this).j(V));if(lt(V))return et(this.j(et(V)));if(0>this.l($)&&0>V.l($))return v(this.m()*V.m());for(var R=this.g.length+V.g.length,S=[],C=0;C<2*R;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<V.g.length;A++){var O=this.i(C)>>>16,b=this.i(C)&65535,Ht=V.i(A)>>>16,qt=V.i(A)&65535;S[2*C+2*A]+=b*qt,ht(S,2*C+2*A),S[2*C+2*A+1]+=O*qt,ht(S,2*C+2*A+1),S[2*C+2*A+1]+=b*Ht,ht(S,2*C+2*A+1),S[2*C+2*A+2]+=O*Ht,ht(S,2*C+2*A+2)}for(C=0;C<R;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=R;C<2*R;C++)S[C]=0;return new d(S,0)};function ht(V,R){for(;(V[R]&65535)!=V[R];)V[R+1]+=V[R]>>>16,V[R]&=65535,R++}function yt(V,R){this.g=V,this.h=R}function Pt(V,R){if(X(R))throw Error("division by zero");if(X(V))return new yt(k,k);if(lt(V))return R=Pt(et(V),R),new yt(et(R.g),et(R.h));if(lt(R))return R=Pt(V,et(R)),new yt(et(R.g),R.h);if(30<V.g.length){if(lt(V)||lt(R))throw Error("slowDivide_ only works with positive integers.");for(var S=B,C=R;0>=C.l(V);)S=gt(S),C=gt(C);var A=Ct(S,1),O=Ct(C,1);for(C=Ct(C,2),S=Ct(S,2);!X(C);){var b=O.add(C);0>=b.l(V)&&(A=A.add(S),O=b),C=Ct(C,1),S=Ct(S,1)}return R=At(V,A.j(R)),new yt(A,R)}for(A=k;0<=V.l(R);){for(S=Math.max(1,Math.floor(V.m()/R.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),O=v(S),b=O.j(R);lt(b)||0<b.l(V);)S-=C,O=v(S),b=O.j(R);X(O)&&(O=B),A=A.add(O),V=At(V,b)}return new yt(A,V)}s.A=function(V){return Pt(this,V).h},s.and=function(V){for(var R=Math.max(this.g.length,V.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)&V.i(C);return new d(S,this.h&V.h)},s.or=function(V){for(var R=Math.max(this.g.length,V.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)|V.i(C);return new d(S,this.h|V.h)},s.xor=function(V){for(var R=Math.max(this.g.length,V.g.length),S=[],C=0;C<R;C++)S[C]=this.i(C)^V.i(C);return new d(S,this.h^V.h)};function gt(V){for(var R=V.g.length+1,S=[],C=0;C<R;C++)S[C]=V.i(C)<<1|V.i(C-1)>>>31;return new d(S,V.h)}function Ct(V,R){var S=R>>5;R%=32;for(var C=V.g.length-S,A=[],O=0;O<C;O++)A[O]=0<R?V.i(O+S)>>>R|V.i(O+S+1)<<32-R:V.i(O+S);return new d(A,V.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=v,d.fromString=I,Id=d}).apply(typeof My<"u"?My:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var W_,Wo,J_,Wu,od,tv,ev,nv;(function(){var s,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,g,m){return u==Array.prototype||u==Object.prototype||(u[g]=m.value),u};function i(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var g=0;g<u.length;++g){var m=u[g];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var a=i(this);function l(u,g){if(g)t:{var m=a;u=u.split(".");for(var T=0;T<u.length-1;T++){var U=u[T];if(!(U in m))break t;m=m[U]}u=u[u.length-1],T=m[u],g=g(T),g!=T&&g!=null&&e(m,u,{configurable:!0,writable:!0,value:g})}}function h(u,g){u instanceof String&&(u+="");var m=0,T=!1,U={next:function(){if(!T&&m<u.length){var z=m++;return{value:g(z,u[z]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}l("Array.prototype.values",function(u){return u||function(){return h(this,function(g,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},y=this||self;function _(u){var g=typeof u;return g=g!="object"?g:u?Array.isArray(u)?"array":g:"null",g=="array"||g=="object"&&typeof u.length=="number"}function v(u){var g=typeof u;return g=="object"&&u!=null||g=="function"}function I(u,g,m){return u.call.apply(u.bind,arguments)}function k(u,g,m){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,T),u.apply(g,U)}}return function(){return u.apply(g,arguments)}}function B(u,g,m){return B=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:k,B.apply(null,arguments)}function $(u,g){var m=Array.prototype.slice.call(arguments,1);return function(){var T=m.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function X(u,g){function m(){}m.prototype=g.prototype,u.aa=g.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(T,U,z){for(var Z=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)Z[Ot-2]=arguments[Ot];return g.prototype[U].apply(T,Z)}}function lt(u){const g=u.length;if(0<g){const m=Array(g);for(let T=0;T<g;T++)m[T]=u[T];return m}return[]}function et(u,g){for(let m=1;m<arguments.length;m++){const T=arguments[m];if(_(T)){const U=u.length||0,z=T.length||0;u.length=U+z;for(let Z=0;Z<z;Z++)u[U+Z]=T[Z]}else u.push(T)}}class At{constructor(g,m){this.i=g,this.j=m,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function ht(u){return/^[\s\xa0]*$/.test(u)}function yt(){var u=y.navigator;return u&&(u=u.userAgent)?u:""}function Pt(u){return Pt[" "](u),u}Pt[" "]=function(){};var gt=yt().indexOf("Gecko")!=-1&&!(yt().toLowerCase().indexOf("webkit")!=-1&&yt().indexOf("Edge")==-1)&&!(yt().indexOf("Trident")!=-1||yt().indexOf("MSIE")!=-1)&&yt().indexOf("Edge")==-1;function Ct(u,g,m){for(const T in u)g.call(m,u[T],T,u)}function V(u,g){for(const m in u)g.call(void 0,u[m],m,u)}function R(u){const g={};for(const m in u)g[m]=u[m];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,g){let m,T;for(let U=1;U<arguments.length;U++){T=arguments[U];for(m in T)u[m]=T[m];for(let z=0;z<S.length;z++)m=S[z],Object.prototype.hasOwnProperty.call(T,m)&&(u[m]=T[m])}}function A(u){var g=1;u=u.split(":");const m=[];for(;0<g&&u.length;)m.push(u.shift()),g--;return u.length&&m.push(u.join(":")),m}function O(u){y.setTimeout(()=>{throw u},0)}function b(){var u=Dt;let g=null;return u.g&&(g=u.g,u.g=u.g.next,u.g||(u.h=null),g.next=null),g}class Ht{constructor(){this.h=this.g=null}add(g,m){const T=qt.get();T.set(g,m),this.h?this.h.next=T:this.g=T,this.h=T}}var qt=new At(()=>new W,u=>u.reset());class W{constructor(){this.next=this.g=this.h=null}set(g,m){this.h=g,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,it=!1,Dt=new Ht,D=()=>{const u=y.Promise.resolve(void 0);nt=()=>{u.then(Q)}};var Q=()=>{for(var u;u=b();){try{u.h.call(u.g)}catch(m){O(m)}var g=qt;g.j(u),100>g.h&&(g.h++,u.next=g.g,g.g=u)}it=!1};function st(){this.s=this.s,this.C=this.C}st.prototype.s=!1,st.prototype.ma=function(){this.s||(this.s=!0,this.N())},st.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(u,g){this.type=u,this.g=this.target=g,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var tt=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var u=!1,g=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};y.addEventListener("test",m,g),y.removeEventListener("test",m,g)}catch{}return u}();function pt(u,g){if(J.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=g,g=u.relatedTarget){if(gt){t:{try{Pt(g.nodeName);var U=!0;break t}catch{}U=!1}U||(g=null)}}else m=="mouseover"?g=u.fromElement:m=="mouseout"&&(g=u.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:_t[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&pt.aa.h.call(this)}}X(pt,J);var _t={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),kt=0;function te(u,g,m,T,U){this.listener=u,this.proxy=null,this.src=g,this.type=m,this.capture=!!T,this.ha=U,this.key=++kt,this.da=this.fa=!1}function jt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Ke(u){this.src=u,this.g={},this.h=0}Ke.prototype.add=function(u,g,m,T,U){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var Z=dn(u,g,T,U);return-1<Z?(g=u[Z],m||(g.fa=!1)):(g=new te(g,this.src,z,!!T,U),g.fa=m,u.push(g)),g};function li(u,g){var m=g.type;if(m in u.g){var T=u.g[m],U=Array.prototype.indexOf.call(T,g,void 0),z;(z=0<=U)&&Array.prototype.splice.call(T,U,1),z&&(jt(g),u.g[m].length==0&&(delete u.g[m],u.h--))}}function dn(u,g,m,T){for(var U=0;U<u.length;++U){var z=u[U];if(!z.da&&z.listener==g&&z.capture==!!m&&z.ha==T)return U}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Qi={};function ui(u,g,m,T,U){if(Array.isArray(g)){for(var z=0;z<g.length;z++)ui(u,g[z],m,T,U);return null}return m=Sl(m),u&&u[ue]?u.K(g,m,v(T)?!!T.capture:!1,U):qa(u,g,m,!1,T,U)}function qa(u,g,m,T,U,z){if(!g)throw Error("Invalid event type");var Z=v(U)?!!U.capture:!!U,Ot=Ga(u);if(Ot||(u[Ki]=Ot=new Ke(u)),m=Ot.add(g,m,T,Z,z),m.proxy)return m;if(T=ks(),m.proxy=T,T.src=u,T.listener=m,u.addEventListener)tt||(U=Z),U===void 0&&(U=!1),u.addEventListener(g.toString(),T,U);else if(u.attachEvent)u.attachEvent(Us(g.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ks(){function u(m){return g.call(u.src,u.listener,m)}const g=zc;return u}function xs(u,g,m,T,U){if(Array.isArray(g))for(var z=0;z<g.length;z++)xs(u,g[z],m,T,U);else T=v(T)?!!T.capture:!!T,m=Sl(m),u&&u[ue]?(u=u.i,g=String(g).toString(),g in u.g&&(z=u.g[g],m=dn(z,m,T,U),-1<m&&(jt(z[m]),Array.prototype.splice.call(z,m,1),z.length==0&&(delete u.g[g],u.h--)))):u&&(u=Ga(u))&&(g=u.g[g.toString()],u=-1,g&&(u=dn(g,m,T,U)),(m=-1<u?g[u]:null)&&Hr(m))}function Hr(u){if(typeof u!="number"&&u&&!u.da){var g=u.src;if(g&&g[ue])li(g.i,u);else{var m=u.type,T=u.proxy;g.removeEventListener?g.removeEventListener(m,T,u.capture):g.detachEvent?g.detachEvent(Us(m),T):g.addListener&&g.removeListener&&g.removeListener(T),(m=Ga(g))?(li(m,u),m.h==0&&(m.src=null,g[Ki]=null)):jt(u)}}}function Us(u){return u in Qi?Qi[u]:Qi[u]="on"+u}function zc(u,g){if(u.da)u=!0;else{g=new pt(g,this);var m=u.listener,T=u.ha||u.src;u.fa&&Hr(u),u=m.call(T,g)}return u}function Ga(u){return u=u[Ki],u instanceof Ke?u:null}var We="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sl(u){return typeof u=="function"?u:(u[We]||(u[We]=function(g){return u.handleEvent(g)}),u[We])}function ge(){st.call(this),this.i=new Ke(this),this.M=this,this.F=null}X(ge,st),ge.prototype[ue]=!0,ge.prototype.removeEventListener=function(u,g,m,T){xs(this,u,g,m,T)};function Te(u,g){var m,T=u.F;if(T)for(m=[];T;T=T.F)m.push(T);if(u=u.M,T=g.type||g,typeof g=="string")g=new J(g,u);else if(g instanceof J)g.target=g.target||u;else{var U=g;g=new J(T,u),C(g,U)}if(U=!0,m)for(var z=m.length-1;0<=z;z--){var Z=g.g=m[z];U=ci(Z,T,!0,g)&&U}if(Z=g.g=u,U=ci(Z,T,!0,g)&&U,U=ci(Z,T,!1,g)&&U,m)for(z=0;z<m.length;z++)Z=g.g=m[z],U=ci(Z,T,!1,g)&&U}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var u=this.i,g;for(g in u.g){for(var m=u.g[g],T=0;T<m.length;T++)jt(m[T]);delete u.g[g],u.h--}}this.F=null},ge.prototype.K=function(u,g,m,T){return this.i.add(String(u),g,!1,m,T)},ge.prototype.L=function(u,g,m,T){return this.i.add(String(u),g,!0,m,T)};function ci(u,g,m,T){if(g=u.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,z=0;z<g.length;++z){var Z=g[z];if(Z&&!Z.da&&Z.capture==m){var Ot=Z.listener,pe=Z.ha||Z.src;Z.fa&&li(u.i,Z),U=Ot.call(pe,T)!==!1&&U}}return U&&!T.defaultPrevented}function bl(u,g,m){if(typeof u=="function")m&&(u=B(u,m));else if(u&&typeof u.handleEvent=="function")u=B(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:y.setTimeout(u,g||0)}function Fa(u){u.g=bl(()=>{u.g=null,u.i&&(u.i=!1,Fa(u))},u.l);const g=u.h;u.h=null,u.m.apply(null,g)}class jc extends st{constructor(g,m){super(),this.m=g,this.l=m,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:Fa(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(u){st.call(this),this.h=u,this.g={}}X(qr,st);var Yi=[];function ze(u){Ct(u.g,function(g,m){this.g.hasOwnProperty(m)&&Hr(g)},u),u.g={}}qr.prototype.N=function(){qr.aa.N.call(this),ze(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ka=y.JSON.stringify,jn=y.JSON.parse,Qe=class{stringify(u){return y.JSON.stringify(u,void 0)}parse(u){return y.JSON.parse(u,void 0)}};function Qa(){}Qa.prototype.h=null;function wl(u){return u.h||(u.h=u.i())}function Rl(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xi(){J.call(this,"d")}X(Xi,J);function Nn(){J.call(this,"c")}X(Nn,J);var gn={},$i=null;function Ls(){return $i=$i||new ge}gn.La="serverreachability";function Ya(u){J.call(this,gn.La,u)}X(Ya,J);function Zi(u){const g=Ls();Te(g,new Ya(g))}gn.STAT_EVENT="statevent";function Ps(u,g){J.call(this,gn.STAT_EVENT,u),this.stat=g}X(Ps,J);function oe(u){const g=Ls();Te(g,new Ps(g,u))}gn.Ma="timingevent";function Cl(u,g){J.call(this,gn.Ma,u),this.size=g}X(Cl,J);function Wi(u,g){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){u()},g)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function Il(u,g,m,T,U,z){u.info(function(){if(u.g)if(z)for(var Z="",Ot=z.split("&"),pe=0;pe<Ot.length;pe++){var Nt=Ot[pe].split("=");if(1<Nt.length){var be=Nt[0];Nt=Nt[1];var ye=be.split("_");Z=2<=ye.length&&ye[1]=="type"?Z+(be+"="+Nt+"&"):Z+(be+"=redacted&")}}else Z=null;else Z=z;return"XMLHTTP REQ ("+T+") [attempt "+U+"]: "+g+`
`+m+`
`+Z})}function Dl(u,g,m,T,U,z,Z){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+U+"]: "+g+`
`+m+`
`+z+" "+Z})}function tr(u,g,m,T){u.info(function(){return"XMLHTTP TEXT ("+g+"): "+Ae(u,m)+(T?" "+T:"")})}function Hn(u,g){u.info(function(){return"TIMEOUT: "+g})}Ji.prototype.info=function(){};function Ae(u,g){if(!u.g)return g;if(!g)return null;try{var m=JSON.parse(g);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var T=m[u];if(!(2>T.length)){var U=T[1];if(Array.isArray(U)&&!(1>U.length)){var z=U[0];if(z!="noop"&&z!="stop"&&z!="close")for(var Z=1;Z<U.length;Z++)U[Z]=""}}}}return Ka(m)}catch{return g}}var me={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gr;function zs(){}X(zs,Qa),zs.prototype.g=function(){return new XMLHttpRequest},zs.prototype.i=function(){return{}},Gr=new zs;function qn(u,g,m,T){this.j=u,this.i=g,this.l=m,this.R=T||1,this.U=new qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var er={},Fr={};function Mn(u,g,m){u.L=1,u.v=Yr(ee(g)),u.m=m,u.P=!0,fi(u,null)}function fi(u,g){u.F=Date.now(),Zt(u),u.A=ee(u.v);var m=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),mi(m.i,"t",T),u.C=0,m=u.j.J,u.h=new Xa,u.g=ql(u.j,m?g:null,!u.m),0<u.O&&(u.M=new jc(B(u.Y,u,u.g),u.O)),g=u.U,m=u.g,T=u.ca;var U="readystatechange";Array.isArray(U)||(U&&(Yi[0]=U.toString()),U=Yi);for(var z=0;z<U.length;z++){var Z=ui(m,U[z],T||g.handleEvent,!1,g.h||g);if(!Z)break;g.g[Z.key]=Z}g=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,g)):(u.u="GET",u.g.ea(u.A,u.u,null,g)),Zi(),Il(u.i,u.u,u.A,u.l,u.R,u.m)}qn.prototype.ca=function(u){u=u.target;const g=this.M;g&&vn(u)==3?g.j():this.Y(u)},qn.prototype.Y=function(u){try{if(u==this.g)t:{const ye=vn(this.g);var g=this.g.Ba();const vi=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||xl(this.g)))){this.J||ye!=4||g==7||(g==8||0>=vi?Zi(3):Zi(2)),js(this);var m=this.g.Z();this.X=m;e:if(nr(this)){var T=xl(this.g);u="";var U=T.length,z=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),an(this);var Z="";break e}this.h.i=new y.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,u+=this.h.i.decode(T[g],{stream:!(z&&g==U-1)});T.length=0,this.h.g+=u,this.C=0,Z=this.h.g}else Z=this.g.oa();if(this.o=m==200,Dl(this.i,this.u,this.A,this.l,this.R,ye,m),this.o){if(this.T&&!this.K){e:{if(this.g){var Ot,pe=this.g;if((Ot=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ht(Ot)){var Nt=Ot;break e}}Nt=null}if(m=Nt)tr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,on(this,m);else{this.o=!1,this.s=3,oe(12),Je(this),an(this);break t}}if(this.P){m=!0;let Ne;for(;!this.J&&this.C<Z.length;)if(Ne=ir(this,Z),Ne==Fr){ye==4&&(this.s=4,oe(14),m=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==er){this.s=4,oe(15),tr(this.i,this.l,Z,"[Invalid Chunk]"),m=!1;break}else tr(this.i,this.l,Ne,null),on(this,Ne);if(nr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||Z.length!=0||this.h.h||(this.s=1,oe(16),m=!1),this.o=this.o&&m,!m)tr(this.i,this.l,Z,"[Invalid Chunked Response]"),Je(this),an(this);else if(0<Z.length&&!this.W){this.W=!0;var be=this.j;be.g==this&&be.ba&&!be.M&&(be.j.info("Great, no buffering proxy detected. Bytes received: "+Z.length),es(be),be.M=!0,oe(11))}}else tr(this.i,this.l,Z,null),on(this,Z);ye==4&&Je(this),this.o&&!this.J&&(ye==4?jl(this.j,this):(this.o=!1,Zt(this)))}else Kc(this.g),m==400&&0<Z.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Je(this),an(this)}}}catch{}finally{}};function nr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function ir(u,g){var m=u.C,T=g.indexOf(`
`,m);return T==-1?Fr:(m=Number(g.substring(m,T)),isNaN(m)?er:(T+=1,T+m>g.length?Fr:(g=g.slice(T,T+m),u.C=T+m,g)))}qn.prototype.cancel=function(){this.J=!0,Je(this)};function Zt(u){u.S=Date.now()+u.I,$a(u,u.I)}function $a(u,g){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wi(B(u.ba,u),g)}function js(u){u.B&&(y.clearTimeout(u.B),u.B=null)}qn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Hn(this.i,this.A),this.L!=2&&(Zi(),oe(17)),Je(this),this.s=2,an(this)):$a(this,this.S-u)};function an(u){u.j.G==0||u.J||jl(u.j,u)}function Je(u){js(u);var g=u.M;g&&typeof g.ma=="function"&&g.ma(),u.M=null,ze(u.U),u.g&&(g=u.g,u.g=null,g.abort(),g.ma())}function on(u,g){try{var m=u.j;if(m.G!=0&&(m.g==u||rr(m.h,u))){if(!u.K&&rr(m.h,u)&&m.G==3){try{var T=m.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var U=T;if(U[0]==0){t:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)$s(m),Ys(m);else break t;oo(m),oe(18)}}else m.za=U[1],0<m.za-m.T&&37500>U[2]&&m.F&&m.v==0&&!m.C&&(m.C=Wi(B(m.Za,m),6e3));if(1>=Ol(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else _i(m,11)}else if((u.K||m.g==u)&&$s(m),!ht(g))for(U=m.Da.g.parse(g),g=0;g<U.length;g++){let Nt=U[g];if(m.T=Nt[0],Nt=Nt[1],m.G==2)if(Nt[0]=="c"){m.K=Nt[1],m.ia=Nt[2];const be=Nt[3];be!=null&&(m.la=be,m.j.info("VER="+m.la));const ye=Nt[4];ye!=null&&(m.Aa=ye,m.j.info("SVER="+m.Aa));const vi=Nt[5];vi!=null&&typeof vi=="number"&&0<vi&&(T=1.5*vi,m.L=T,m.j.info("backChannelRequestTimeoutMs_="+T)),T=m;const Ne=u.g;if(Ne){const $n=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($n){var z=T.h;z.g||$n.indexOf("spdy")==-1&&$n.indexOf("quic")==-1&&$n.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(sr(z,z.h),z.h=null))}if(T.D){const uo=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;uo&&(T.ya=uo,xt(T.I,T.D,uo))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),T=m;var Z=u;if(T.qa=Hl(T,T.J?T.ia:null,T.W),Z.K){mn(T.h,Z);var Ot=Z,pe=T.L;pe&&(Ot.I=pe),Ot.B&&(js(Ot),Zt(Ot)),T.g=Z}else Pl(T);0<m.i.length&&Xs(m)}else Nt[0]!="stop"&&Nt[0]!="close"||_i(m,7);else m.G==3&&(Nt[0]=="stop"||Nt[0]=="close"?Nt[0]=="stop"?_i(m,7):so(m):Nt[0]!="noop"&&m.l&&m.l.ta(Nt),m.v=0)}}Zi(4)}catch{}}var Bc=class{constructor(u,g){this.g=u,this.map=g}};function Za(u){this.l=u||10,y.PerformanceNavigationTiming?(u=y.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wa(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ol(u){return u.h?1:u.g?u.g.size:0}function rr(u,g){return u.h?u.h==g:u.g?u.g.has(g):!1}function sr(u,g){u.g?u.g.add(g):u.h=g}function mn(u,g){u.h&&u.h==g?u.h=null:u.g&&u.g.has(g)&&u.g.delete(g)}Za.prototype.cancel=function(){if(this.i=Ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ye(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let g=u.i;for(const m of u.g.values())g=g.concat(m.D);return g}return lt(u.i)}function Nl(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(_(u)){for(var g=[],m=u.length,T=0;T<m;T++)g.push(u[T]);return g}g=[],m=0;for(T in u)g[m++]=u[T];return g}function Hc(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(_(u)||typeof u=="string"){var g=[];u=u.length;for(var m=0;m<u;m++)g.push(m);return g}g=[],m=0;for(const T in u)g[m++]=T;return g}}}function Kr(u,g){if(u.forEach&&typeof u.forEach=="function")u.forEach(g,void 0);else if(_(u)||typeof u=="string")Array.prototype.forEach.call(u,g,void 0);else for(var m=Hc(u),T=Nl(u),U=T.length,z=0;z<U;z++)g.call(void 0,T[z],m&&m[z],u)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bs(u,g){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var T=u[m].indexOf("="),U=null;if(0<=T){var z=u[m].substring(0,T);U=u[m].substring(T+1)}else z=u[m];g(z,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function di(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof di){this.h=u.h,ar(this,u.j),this.o=u.o,this.g=u.g,Qr(this,u.s),this.l=u.l;var g=u.i,m=new Gn;m.i=g.i,g.g&&(m.g=new Map(g.g),m.h=g.h),Hs(this,m),this.m=u.m}else u&&(g=String(u).match(Ja))?(this.h=!1,ar(this,g[1]||"",!0),this.o=or(g[2]||""),this.g=or(g[3]||"",!0),Qr(this,g[4]),this.l=or(g[5]||"",!0),Hs(this,g[6]||"",!0),this.m=or(g[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}di.prototype.toString=function(){var u=[],g=this.j;g&&u.push(pn(g,to,!0),":");var m=this.g;return(m||g=="file")&&(u.push("//"),(g=this.o)&&u.push(pn(g,to,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(pn(m,m.charAt(0)=="/"?eo:Ml,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",pn(m,Fc)),u.join("")};function ee(u){return new di(u)}function ar(u,g,m){u.j=m?or(g,!0):g,u.j&&(u.j=u.j.replace(/:$/,""))}function Qr(u,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);u.s=g}else u.s=null}function Hs(u,g,m){g instanceof Gn?(u.i=g,no(u.i,u.h)):(m||(g=pn(g,Gc)),u.i=new Gn(g,u.h))}function xt(u,g,m){u.i.set(g,m)}function Yr(u){return xt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function or(u,g){return u?g?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function pn(u,g,m){return typeof u=="string"?(u=encodeURI(u).replace(g,qc),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function qc(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var to=/[#\/\?@]/g,Ml=/[#\?:]/g,eo=/[#\?]/g,Gc=/[#\?@]/g,Fc=/#/g;function Gn(u,g){this.h=this.g=null,this.i=u||null,this.j=!!g}function yn(u){u.g||(u.g=new Map,u.h=0,u.i&&Bs(u.i,function(g,m){u.add(decodeURIComponent(g.replace(/\+/g," ")),m)}))}s=Gn.prototype,s.add=function(u,g){yn(this),this.i=null,u=pi(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(g),this.h+=1,this};function qs(u,g){yn(u),g=pi(u,g),u.g.has(g)&&(u.i=null,u.h-=u.g.get(g).length,u.g.delete(g))}function gi(u,g){return yn(u),g=pi(u,g),u.g.has(g)}s.forEach=function(u,g){yn(this),this.g.forEach(function(m,T){m.forEach(function(U){u.call(g,U,T,this)},this)},this)},s.na=function(){yn(this);const u=Array.from(this.g.values()),g=Array.from(this.g.keys()),m=[];for(let T=0;T<g.length;T++){const U=u[T];for(let z=0;z<U.length;z++)m.push(g[T])}return m},s.V=function(u){yn(this);let g=[];if(typeof u=="string")gi(this,u)&&(g=g.concat(this.g.get(pi(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)g=g.concat(u[m])}return g},s.set=function(u,g){return yn(this),this.i=null,u=pi(this,u),gi(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[g]),this.h+=1,this},s.get=function(u,g){return u?(u=this.V(u),0<u.length?String(u[0]):g):g};function mi(u,g,m){qs(u,g),0<m.length&&(u.i=null,u.g.set(pi(u,g),lt(m)),u.h+=m.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],g=Array.from(this.g.keys());for(var m=0;m<g.length;m++){var T=g[m];const z=encodeURIComponent(String(T)),Z=this.V(T);for(T=0;T<Z.length;T++){var U=z;Z[T]!==""&&(U+="="+encodeURIComponent(String(Z[T]))),u.push(U)}}return this.i=u.join("&")};function pi(u,g){return g=String(g),u.j&&(g=g.toLowerCase()),g}function no(u,g){g&&!u.j&&(yn(u),u.i=null,u.g.forEach(function(m,T){var U=T.toLowerCase();T!=U&&(qs(this,T),mi(this,U,m))},u)),u.j=g}function Vl(u,g){const m=new Ji;if(y.Image){const T=new Image;T.onload=$(_n,m,"TestLoadImage: loaded",!0,g,T),T.onerror=$(_n,m,"TestLoadImage: error",!1,g,T),T.onabort=$(_n,m,"TestLoadImage: abort",!1,g,T),T.ontimeout=$(_n,m,"TestLoadImage: timeout",!1,g,T),y.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else g(!1)}function Xr(u,g){const m=new Ji,T=new AbortController,U=setTimeout(()=>{T.abort(),_n(m,"TestPingServer: timeout",!1,g)},1e4);fetch(u,{signal:T.signal}).then(z=>{clearTimeout(U),z.ok?_n(m,"TestPingServer: ok",!0,g):_n(m,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),_n(m,"TestPingServer: error",!1,g)})}function _n(u,g,m,T,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),T(m)}catch{}}function $r(){this.g=new Qe}function Fn(u,g,m){const T=m||"";try{Kr(u,function(U,z){let Z=U;v(U)&&(Z=Ka(U)),g.push(T+z+"="+encodeURIComponent(Z))})}catch(U){throw g.push(T+"type="+encodeURIComponent("_badmap")),U}}function lr(u){this.l=u.Ub||null,this.j=u.eb||!1}X(lr,Qa),lr.prototype.g=function(){return new yi(this.l,this.j)},lr.prototype.i=function(u){return function(){return u}}({});function yi(u,g){ge.call(this),this.D=u,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(yi,ge),s=yi.prototype,s.open=function(u,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=g,this.readyState=1,Qn(this)},s.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(g.body=u),(this.D||y).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kn(this)),this.readyState=0},s.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;io(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function io(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}s.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var g=u.value?u.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!u.done}))&&(this.response=this.responseText+=g)}u.done?Kn(this):Qn(this),this.readyState==3&&io(this)}},s.Ra=function(u){this.g&&(this.response=this.responseText=u,Kn(this))},s.Qa=function(u){this.g&&(this.response=u,Kn(this))},s.ga=function(){this.g&&Kn(this)};function Kn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Qn(u)}s.setRequestHeader=function(u,g){this.u.append(u,g)},s.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],g=this.h.entries();for(var m=g.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=g.next();return u.join(`\r
`)};function Qn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(yi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ro(u){let g="";return Ct(u,function(m,T){g+=T,g+=":",g+=m,g+=`\r
`}),g}function Se(u,g,m){t:{for(T in m){var T=!1;break t}T=!0}T||(m=ro(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):xt(u,g,m))}function zt(u){ge.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(zt,ge);var Gs=/^https?$/i,Zr=["POST","PUT"];s=zt.prototype,s.Ha=function(u){this.J=u},s.ea=function(u,g,m,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);g=g?g.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gr.g(),this.v=this.o?wl(this.o):wl(Gr),this.g.onreadystatechange=B(this.Ea,this);try{this.B=!0,this.g.open(g,String(u),!0),this.B=!1}catch(z){kl(this,z);return}if(u=m||"",m=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var U in T)m.set(U,T[U]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const z of T.keys())m.set(z,T.get(z));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(m.keys()).find(z=>z.toLowerCase()=="content-type"),U=y.FormData&&u instanceof y.FormData,!(0<=Array.prototype.indexOf.call(Zr,g,void 0))||T||U||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,Z]of m)this.g.setRequestHeader(z,Z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wr(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){kl(this,z)}};function kl(u,g){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=g,u.m=5,Fs(u),Yn(u)}function Fs(u){u.A||(u.A=!0,Te(u,"complete"),Te(u,"error"))}s.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Te(this,"complete"),Te(this,"abort"),Yn(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),zt.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Ks(this):this.bb())},s.bb=function(){Ks(this)};function Ks(u){if(u.h&&typeof d<"u"&&(!u.v[1]||vn(u)!=4||u.Z()!=2)){if(u.u&&vn(u)==4)bl(u.Ea,0,u);else if(Te(u,"readystatechange"),vn(u)==4){u.h=!1;try{const Z=u.Z();t:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var m;if(!(m=g)){var T;if(T=Z===0){var U=String(u.D).match(Ja)[1]||null;!U&&y.self&&y.self.location&&(U=y.self.location.protocol.slice(0,-1)),T=!Gs.test(U?U.toLowerCase():"")}m=T}if(m)Te(u,"complete"),Te(u,"success");else{u.m=6;try{var z=2<vn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Fs(u)}}finally{Yn(u)}}}}function Yn(u,g){if(u.g){Wr(u);const m=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,g||Te(u,"ready");try{m.onreadystatechange=T}catch{}}}function Wr(u){u.I&&(y.clearTimeout(u.I),u.I=null)}s.isActive=function(){return!!this.g};function vn(u){return u.g?u.g.readyState:0}s.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.Oa=function(u){if(this.g){var g=this.g.responseText;return u&&g.indexOf(u)==0&&(g=g.substring(u.length)),jn(g)}};function xl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Kc(u){const g={};u=(u.g&&2<=vn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(ht(u[T]))continue;var m=A(u[T]);const U=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const z=g[U]||[];g[U]=z,z.push(m)}V(g,function(T){return T.join(", ")})}s.Ba=function(){return this.m},s.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(u,g,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||g}function Qs(u){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,u),this.cb=Jr("retryDelaySeedMs",1e4,u),this.Wa=Jr("forwardChannelMaxRetries",2,u),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Za(u&&u.concurrentRequestLimit),this.Da=new $r,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}s=Qs.prototype,s.la=8,s.G=1,s.connect=function(u,g,m,T){oe(0),this.W=u,this.H=g||{},m&&T!==void 0&&(this.H.OSID=m,this.H.OAID=T),this.F=this.X,this.I=Hl(this,null,this.W),Xs(this)};function so(u){if(Ul(u),u.G==3){var g=u.U++,m=ee(u.I);if(xt(m,"SID",u.K),xt(m,"RID",g),xt(m,"TYPE","terminate"),ts(u,m),g=new qn(u,u.j,g),g.L=2,g.v=Yr(ee(m)),m=!1,y.navigator&&y.navigator.sendBeacon)try{m=y.navigator.sendBeacon(g.v.toString(),"")}catch{}!m&&y.Image&&(new Image().src=g.v,m=!0),m||(g.g=ql(g.j,null),g.g.ea(g.v)),g.F=Date.now(),Zt(g)}Bl(u)}function Ys(u){u.g&&(es(u),u.g.cancel(),u.g=null)}function Ul(u){Ys(u),u.u&&(y.clearTimeout(u.u),u.u=null),$s(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&y.clearTimeout(u.s),u.s=null)}function Xs(u){if(!Wa(u.h)&&!u.s){u.s=!0;var g=u.Ga;nt||D(),it||(nt(),it=!0),Dt.add(g,u),u.B=0}}function Qc(u,g){return Ol(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=g.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wi(B(u.Ga,u,g),lo(u,u.B)),u.B++,!0)}s.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const U=new qn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=R(z),C(z,this.S)):z=this.S),this.m!==null||this.O||(U.H=z,z=null),this.P)t:{for(var g=0,m=0;m<this.i.length;m++){e:{var T=this.i[m];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=m;break t}if(g===4096||m===this.i.length-1){g=m+1;break t}}g=1e3}else g=1e3;g=Ll(this,U,g),m=ee(this.I),xt(m,"RID",u),xt(m,"CVER",22),this.D&&xt(m,"X-HTTP-Session-Id",this.D),ts(this,m),z&&(this.O?g="headers="+encodeURIComponent(String(ro(z)))+"&"+g:this.m&&Se(m,this.m,z)),sr(this.h,U),this.Ua&&xt(m,"TYPE","init"),this.P?(xt(m,"$req",g),xt(m,"SID","null"),U.T=!0,Mn(U,m,null)):Mn(U,m,g),this.G=2}}else this.G==3&&(u?ao(this,u):this.i.length==0||Wa(this.h)||ao(this))};function ao(u,g){var m;g?m=g.l:m=u.U++;const T=ee(u.I);xt(T,"SID",u.K),xt(T,"RID",m),xt(T,"AID",u.T),ts(u,T),u.m&&u.o&&Se(T,u.m,u.o),m=new qn(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),g&&(u.i=g.D.concat(u.i)),g=Ll(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),sr(u.h,m),Mn(m,T,g)}function ts(u,g){u.H&&Ct(u.H,function(m,T){xt(g,T,m)}),u.l&&Kr({},function(m,T){xt(g,T,m)})}function Ll(u,g,m){m=Math.min(u.i.length,m);var T=u.l?B(u.l.Na,u.l,u):null;t:{var U=u.i;let z=-1;for(;;){const Z=["count="+m];z==-1?0<m?(z=U[0].g,Z.push("ofs="+z)):z=0:Z.push("ofs="+z);let Ot=!0;for(let pe=0;pe<m;pe++){let Nt=U[pe].g;const be=U[pe].map;if(Nt-=z,0>Nt)z=Math.max(0,U[pe].g-100),Ot=!1;else try{Fn(be,Z,"req"+Nt+"_")}catch{T&&T(be)}}if(Ot){T=Z.join("&");break t}}}return u=u.i.splice(0,m),g.D=u,T}function Pl(u){if(!u.g&&!u.u){u.Y=1;var g=u.Fa;nt||D(),it||(nt(),it=!0),Dt.add(g,u),u.v=0}}function oo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wi(B(u.Fa,u),lo(u,u.v)),u.v++,!0)}s.Fa=function(){if(this.u=null,zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wi(B(this.ab,this),u)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oe(10),Ys(this),zl(this))};function es(u){u.A!=null&&(y.clearTimeout(u.A),u.A=null)}function zl(u){u.g=new qn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var g=ee(u.qa);xt(g,"RID","rpc"),xt(g,"SID",u.K),xt(g,"AID",u.T),xt(g,"CI",u.F?"0":"1"),!u.F&&u.ja&&xt(g,"TO",u.ja),xt(g,"TYPE","xmlhttp"),ts(u,g),u.m&&u.o&&Se(g,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=Yr(ee(g)),m.m=null,m.P=!0,fi(m,u)}s.Za=function(){this.C!=null&&(this.C=null,Ys(this),oo(this),oe(19))};function $s(u){u.C!=null&&(y.clearTimeout(u.C),u.C=null)}function jl(u,g){var m=null;if(u.g==g){$s(u),es(u),u.g=null;var T=2}else if(rr(u.h,g))m=g.D,mn(u.h,g),T=1;else return;if(u.G!=0){if(g.o)if(T==1){m=g.m?g.m.length:0,g=Date.now()-g.F;var U=u.B;T=Ls(),Te(T,new Cl(T,m)),Xs(u)}else Pl(u);else if(U=g.s,U==3||U==0&&0<g.X||!(T==1&&Qc(u,g)||T==2&&oo(u)))switch(m&&0<m.length&&(g=u.h,g.i=g.i.concat(m)),U){case 1:_i(u,5);break;case 4:_i(u,10);break;case 3:_i(u,6);break;default:_i(u,2)}}}function lo(u,g){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*g}function _i(u,g){if(u.j.info("Error code "+g),g==2){var m=B(u.fb,u),T=u.Xa;const U=!T;T=new di(T||"//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||ar(T,"https"),Yr(T),U?Vl(T.toString(),m):Xr(T.toString(),m)}else oe(2);u.G=0,u.l&&u.l.sa(g),Bl(u),Ul(u)}s.fb=function(u){u?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function Bl(u){if(u.G=0,u.ka=[],u.l){const g=Ye(u.h);(g.length!=0||u.i.length!=0)&&(et(u.ka,g),et(u.ka,u.i),u.h.i.length=0,lt(u.i),u.i.length=0),u.l.ra()}}function Hl(u,g,m){var T=m instanceof di?ee(m):new di(m);if(T.g!="")g&&(T.g=g+"."+T.g),Qr(T,T.s);else{var U=y.location;T=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var z=new di(null);T&&ar(z,T),g&&(z.g=g),U&&Qr(z,U),m&&(z.l=m),T=z}return m=u.D,g=u.ya,m&&g&&xt(T,m,g),xt(T,"VER",u.la),ts(u,T),T}function ql(u,g,m){if(g&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=u.Ca&&!u.pa?new zt(new lr({eb:m})):new zt(u.pa),g.Ha(u.J),g}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gl(){}s=Gl.prototype,s.ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){};function Zs(){}Zs.prototype.g=function(u,g){return new Xe(u,g)};function Xe(u,g){ge.call(this),this.g=new Qs(g),this.l=u,this.h=g&&g.messageUrlParams||null,u=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(u?u["X-WebChannel-Content-Type"]=g.messageContentType:u={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(u?u["X-WebChannel-Client-Profile"]=g.va:u={"X-WebChannel-Client-Profile":g.va}),this.g.S=u,(u=g&&g.Sb)&&!ht(u)&&(this.g.m=u),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!ht(g)&&(this.g.D=g,u=this.h,u!==null&&g in u&&(u=this.h,g in u&&delete u[g])),this.j=new Xn(this)}X(Xe,ge),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){so(this.g)},Xe.prototype.o=function(u){var g=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=Ka(u),u=m);g.i.push(new Bc(g.Ya++,u)),g.G==3&&Xs(g)},Xe.prototype.N=function(){this.g.l=null,delete this.j,so(this.g),delete this.g,Xe.aa.N.call(this)};function Fl(u){Xi.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var g=u.__sm__;if(g){t:{for(const m in g){u=m;break t}u=void 0}(this.i=u)&&(u=this.i,g=g!==null&&u in g?g[u]:void 0),this.data=g}else this.data=u}X(Fl,Xi);function Kl(){Nn.call(this),this.status=1}X(Kl,Nn);function Xn(u){this.g=u}X(Xn,Gl),Xn.prototype.ua=function(){Te(this.g,"a")},Xn.prototype.ta=function(u){Te(this.g,new Fl(u))},Xn.prototype.sa=function(u){Te(this.g,new Kl)},Xn.prototype.ra=function(){Te(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,nv=function(){return new Zs},ev=function(){return Ls()},tv=gn,od={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,Wu=me,hi.COMPLETE="complete",J_=hi,Rl.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Wo=Rl,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,W_=zt}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});const Vy="@firebase/firestore",ky="4.7.9";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let ja="11.4.0";/**
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
 */const Cs=new Rc("@firebase/firestore");function ba(){return Cs.logLevel}function at(s,...e){if(Cs.logLevel<=Rt.DEBUG){const i=e.map(Dd);Cs.debug(`Firestore (${ja}): ${s}`,...i)}}function Is(s,...e){if(Cs.logLevel<=Rt.ERROR){const i=e.map(Dd);Cs.error(`Firestore (${ja}): ${s}`,...i)}}function Cc(s,...e){if(Cs.logLevel<=Rt.WARN){const i=e.map(Dd);Cs.warn(`Firestore (${ja}): ${s}`,...i)}}function Dd(s){if(typeof s=="string")return s;try{/**
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
 */function wt(s="Unexpected state"){const e=`FIRESTORE (${ja}) INTERNAL ASSERTION FAILED: `+s;throw Is(e),new Error(e)}function ae(s,e){s||wt()}function Xt(s,e){return s}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends Fi{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ss{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
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
 */class iv{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(qe.UNAUTHENTICATED))}shutdown(){}}class pS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class yS{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){ae(this.o===void 0);let a=this.i;const l=_=>this.i!==a?(a=this.i,i(_)):Promise.resolve();let h=new Ss;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Ss,e.enqueueRetryable(()=>l(this.currentUser))};const d=()=>{const _=h;e.enqueueRetryable(async()=>{await _.promise,await l(this.currentUser)})},y=_=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(_=>y(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?y(_):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Ss)}},0),d()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(a=>this.i!==e?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(ae(typeof a.accessToken=="string"),new iv(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new qe(e)}}class _S{constructor(e,i,a){this.l=e,this.h=i,this.P=a,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class vS{constructor(e,i,a){this.l=e,this.h=i,this.P=a}getToken(){return Promise.resolve(new _S(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ES{constructor(e,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ii(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,i){ae(this.o===void 0);const a=h=>{h.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const d=h.token!==this.R;return this.R=h.token,at("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?i(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>a(h))};const l=h=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(h=>l(h)),setTimeout(()=>{if(!this.appCheck){const h=this.A.getImmediate({optional:!0});h?l(h):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new xy(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(ae(typeof i.token=="string"),this.R=i.token,new xy(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TS(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),i=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(i);else for(let a=0;a<s;a++)i[a]=Math.floor(256*Math.random());return i}/**
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
 */class rv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const l=TS(40);for(let h=0;h<l.length;++h)a.length<20&&l[h]<i&&(a+=e.charAt(l[h]%62))}return a}}function Bt(s,e){return s<e?-1:s>e?1:0}function Ma(s,e,i){return s.length===e.length&&s.every((a,l)=>i(a,e[l]))}/**
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
 */const Uy=-62135596800,Ly=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const i=Math.floor(e/1e3),a=Math.floor((e-1e3*i)*Ly);return new Oe(i,a)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0)throw new ft(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(i>=1e9)throw new ft(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<Uy)throw new ft(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ft(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ly}_compareTo(e){return this.seconds===e.seconds?Bt(this.nanoseconds,e.nanoseconds):Bt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Uy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class $t{static fromTimestamp(e){return new $t(e)}static min(){return new $t(new Oe(0,0))}static max(){return new $t(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Py="__name__";class ni{constructor(e,i,a){i===void 0?i=0:i>e.length&&wt(),a===void 0?a=e.length-i:a>e.length-i&&wt(),this.segments=e,this.offset=i,this.len=a}get length(){return this.len}isEqual(e){return ni.comparator(this,e)===0}child(e){const i=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach(a=>{i.push(a)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,a=this.limit();i<a;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){const a=Math.min(e.length,i.length);for(let l=0;l<a;l++){const h=ni.compareSegments(e.get(l),i.get(l));if(h!==0)return h}return Math.sign(e.length-i.length)}static compareSegments(e,i){const a=ni.isNumericId(e),l=ni.isNumericId(i);return a&&!l?-1:!a&&l?1:a&&l?ni.extractNumericId(e).compare(ni.extractNumericId(i)):e<i?-1:e>i?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Id.fromString(e.substring(4,e.length-2))}}class se extends ni{construct(e,i,a){return new se(e,i,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const i=[];for(const a of e){if(a.indexOf("//")>=0)throw new ft(Y.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);i.push(...a.split("/").filter(l=>l.length>0))}return new se(i)}static emptyPath(){return new se([])}}const AS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends ni{construct(e,i,a){return new Le(e,i,a)}static isValidIdentifier(e){return AS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Py}static keyField(){return new Le([Py])}static fromServerFormat(e){const i=[];let a="",l=0;const h=()=>{if(a.length===0)throw new ft(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(a),a=""};let d=!1;for(;l<e.length;){const y=e[l];if(y==="\\"){if(l+1===e.length)throw new ft(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ft(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=_,l+=2}else y==="`"?(d=!d,l++):y!=="."||d?(a+=y,l++):(h(),l++)}if(h(),d)throw new ft(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(i)}static emptyPath(){return new Le([])}}/**
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
 */class Et{constructor(e){this.path=e}static fromPath(e){return new Et(se.fromString(e))}static fromName(e){return new Et(se.fromString(e).popFirst(5))}static empty(){return new Et(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,i){return se.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Et(new se(e.slice()))}}/**
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
 */const al=-1;function SS(s,e){const i=s.toTimestamp().seconds,a=s.toTimestamp().nanoseconds+1,l=$t.fromTimestamp(a===1e9?new Oe(i+1,0):new Oe(i,a));return new Pr(l,Et.empty(),e)}function bS(s){return new Pr(s.readTime,s.key,al)}class Pr{constructor(e,i,a){this.readTime=e,this.documentKey=i,this.largestBatchId=a}static min(){return new Pr($t.min(),Et.empty(),al)}static max(){return new Pr($t.max(),Et.empty(),al)}}function wS(s,e){let i=s.readTime.compareTo(e.readTime);return i!==0?i:(i=Et.comparator(s.documentKey,e.documentKey),i!==0?i:Bt(s.largestBatchId,e.largestBatchId))}/**
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
 */const RS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Od(s){if(s.code!==Y.FAILED_PRECONDITION||s.message!==RS)throw s;at("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(i=>{this.isDone=!0,this.result=i,this.nextCallback&&this.nextCallback(i)},i=>{this.isDone=!0,this.error=i,this.catchCallback&&this.catchCallback(i)})}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&wt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new F((a,l)=>{this.nextCallback=h=>{this.wrapSuccess(e,h).next(a,l)},this.catchCallback=h=>{this.wrapFailure(i,h).next(a,l)}})}toPromise(){return new Promise((e,i)=>{this.next(e,i)})}wrapUserFunction(e){try{const i=e();return i instanceof F?i:F.resolve(i)}catch(i){return F.reject(i)}}wrapSuccess(e,i){return e?this.wrapUserFunction(()=>e(i)):F.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction(()=>e(i)):F.reject(i)}static resolve(e){return new F((i,a)=>{i(e)})}static reject(e){return new F((i,a)=>{a(e)})}static waitFor(e){return new F((i,a)=>{let l=0,h=0,d=!1;e.forEach(y=>{++l,y.next(()=>{++h,d&&h===l&&i()},_=>a(_))}),d=!0,h===l&&i()})}static or(e){let i=F.resolve(!1);for(const a of e)i=i.next(l=>l?F.resolve(l):a());return i}static forEach(e,i){const a=[];return e.forEach((l,h)=>{a.push(i.call(this,l,h))}),this.waitFor(a)}static mapArray(e,i){return new F((a,l)=>{const h=e.length,d=new Array(h);let y=0;for(let _=0;_<h;_++){const v=_;i(e[v]).next(I=>{d[v]=I,++y,y===h&&a(d)},I=>l(I))}})}static doWhile(e,i){return new F((a,l)=>{const h=()=>{e()===!0?i().next(()=>{h()},l):a()};h()})}}function IS(s){const e=s.match(/Android ([\d.]+)/i),i=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(i)}function ml(s){return s.name==="IndexedDbTransactionError"}/**
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
 */class Nd{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=a=>this.oe(a),this._e=a=>i.writeSequenceNumber(a))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Nd.ae=-1;/**
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
 */const Md=-1;function Vd(s){return s==null}function lc(s){return s===0&&1/s==-1/0}function DS(s){return typeof s=="number"&&Number.isInteger(s)&&!lc(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
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
 */const sv="";function OS(s){let e="";for(let i=0;i<s.length;i++)e.length>0&&(e=zy(e)),e=NS(s.get(i),e);return zy(e)}function NS(s,e){let i=e;const a=s.length;for(let l=0;l<a;l++){const h=s.charAt(l);switch(h){case"\0":i+="";break;case sv:i+="";break;default:i+=h}}return i}function zy(s){return s+sv+""}/**
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
 */function jy(s){let e=0;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e++;return e}function Ba(s,e){for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e(i,s[i])}function av(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
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
 */class sn{constructor(e,i){this.comparator=e,this.root=i||xe.EMPTY}insert(e,i){return new sn(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new sn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return i.value;a<0?i=i.left:a>0&&(i=i.right)}return null}indexOf(e){let i=0,a=this.root;for(;!a.isEmpty();){const l=this.comparator(e,a.key);if(l===0)return i+a.left.size;l<0?a=a.left:(i+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((i,a)=>(e(i,a),!1))}toString(){const e=[];return this.inorderTraversal((i,a)=>(e.push(`${i}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,i,a,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!e.isEmpty();)if(h=i?a(e.key,i):1,i&&l&&(h*=-1),h<0)e=this.isReverse?e.left:e.right;else{if(h===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,i,a,l,h){this.key=e,this.value=i,this.color=a??xe.RED,this.left=l??xe.EMPTY,this.right=h??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,a,l,h){return new xe(e??this.key,i??this.value,a??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,a){let l=this;const h=a(e,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(e,i,a),null):h===0?l.copy(null,i,null,null,null):l.copy(null,null,null,null,l.right.insert(e,i,a)),l.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,i){let a,l=this;if(i(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,i),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),i(e,l.key)===0){if(l.right.isEmpty())return xe.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,i))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw wt();const e=this.left.check();if(e!==this.right.check())throw wt();return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw wt()}get value(){throw wt()}get color(){throw wt()}get left(){throw wt()}get right(){throw wt()}copy(e,i,a,l,h){return this}insert(e,i,a){return new xe(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new sn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((i,a)=>(e(i),!1))}forEachInRange(e,i){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const l=a.getNext();if(this.comparator(l.key,e[1])>=0)return;i(l.key)}}forEachWhile(e,i){let a;for(a=i!==void 0?this.data.getIteratorFrom(i):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new By(this.data.getIterator())}getIteratorFrom(e){return new By(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach(a=>{i=i.add(a)}),i}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const i=this.data.getIterator(),a=e.data.getIterator();for(;i.hasNext();){const l=i.getNext().key,h=a.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(i=>{e.push(i)}),e}toString(){const e=[];return this.forEach(i=>e.push(i)),"SortedSet("+e.toString()+")"}copy(e){const i=new Pe(this.comparator);return i.data=e,i}}class By{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zn{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new zn([])}unionWith(e){let i=new Pe(Le.comparator);for(const a of this.fields)i=i.add(a);for(const a of e)i=i.add(a);return new zn(i.toArray())}covers(e){for(const i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return Ma(this.fields,e.fields,(i,a)=>i.isEqual(a))}}/**
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
 */class MS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ai{constructor(e){this.binaryString=e}static fromBase64String(e){const i=function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new MS("Invalid base64 string: "+h):h}}(e);return new ai(i)}static fromUint8Array(e){const i=function(l){let h="";for(let d=0;d<l.length;++d)h+=String.fromCharCode(l[d]);return h}(e);return new ai(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(i){return btoa(i)}(this.binaryString)}toUint8Array(){return function(i){const a=new Uint8Array(i.length);for(let l=0;l<i.length;l++)a[l]=i.charCodeAt(l);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Bt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ai.EMPTY_BYTE_STRING=new ai("");const VS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(s){if(ae(!!s),typeof s=="string"){let e=0;const i=VS.exec(s);if(ae(!!i),i[1]){let l=i[1];l=(l+"000000000").substr(0,9),e=Number(l)}const a=new Date(s);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:Ue(s.seconds),nanos:Ue(s.nanos)}}function Ue(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function Va(s){return typeof s=="string"?ai.fromBase64String(s):ai.fromUint8Array(s)}/**
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
 */const ov="server_timestamp",lv="__type__",uv="__previous_value__",cv="__local_write_time__";function kd(s){var e,i;return((i=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[lv])===null||i===void 0?void 0:i.stringValue)===ov}function xd(s){const e=s.mapValue.fields[uv];return kd(e)?xd(e):e}function uc(s){const e=Ds(s.mapValue.fields[cv].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class kS{constructor(e,i,a,l,h,d,y,_,v){this.databaseId=e,this.appId=i,this.persistenceKey=a,this.host=l,this.ssl=h,this.forceLongPolling=d,this.autoDetectLongPolling=y,this.longPollingOptions=_,this.useFetchStreams=v}}const cc="(default)";class hc{constructor(e,i){this.projectId=e,this.database=i||cc}static empty(){return new hc("","")}get isDefaultDatabase(){return this.database===cc}isEqual(e){return e instanceof hc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hv="__type__",xS="__max__",Ku={mapValue:{}},fv="__vector__",ld="value";function Os(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?kd(s)?4:LS(s)?9007199254740991:US(s)?10:11:wt()}function oi(s,e){if(s===e)return!0;const i=Os(s);if(i!==Os(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return uc(s).isEqual(uc(e));case 3:return function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const d=Ds(l.timestampValue),y=Ds(h.timestampValue);return d.seconds===y.seconds&&d.nanos===y.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(l,h){return Va(l.bytesValue).isEqual(Va(h.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(l,h){return Ue(l.geoPointValue.latitude)===Ue(h.geoPointValue.latitude)&&Ue(l.geoPointValue.longitude)===Ue(h.geoPointValue.longitude)}(s,e);case 2:return function(l,h){if("integerValue"in l&&"integerValue"in h)return Ue(l.integerValue)===Ue(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const d=Ue(l.doubleValue),y=Ue(h.doubleValue);return d===y?lc(d)===lc(y):isNaN(d)&&isNaN(y)}return!1}(s,e);case 9:return Ma(s.arrayValue.values||[],e.arrayValue.values||[],oi);case 10:case 11:return function(l,h){const d=l.mapValue.fields||{},y=h.mapValue.fields||{};if(jy(d)!==jy(y))return!1;for(const _ in d)if(d.hasOwnProperty(_)&&(y[_]===void 0||!oi(d[_],y[_])))return!1;return!0}(s,e);default:return wt()}}function ol(s,e){return(s.values||[]).find(i=>oi(i,e))!==void 0}function ka(s,e){if(s===e)return 0;const i=Os(s),a=Os(e);if(i!==a)return Bt(i,a);switch(i){case 0:case 9007199254740991:return 0;case 1:return Bt(s.booleanValue,e.booleanValue);case 2:return function(h,d){const y=Ue(h.integerValue||h.doubleValue),_=Ue(d.integerValue||d.doubleValue);return y<_?-1:y>_?1:y===_?0:isNaN(y)?isNaN(_)?0:-1:1}(s,e);case 3:return Hy(s.timestampValue,e.timestampValue);case 4:return Hy(uc(s),uc(e));case 5:return Bt(s.stringValue,e.stringValue);case 6:return function(h,d){const y=Va(h),_=Va(d);return y.compareTo(_)}(s.bytesValue,e.bytesValue);case 7:return function(h,d){const y=h.split("/"),_=d.split("/");for(let v=0;v<y.length&&v<_.length;v++){const I=Bt(y[v],_[v]);if(I!==0)return I}return Bt(y.length,_.length)}(s.referenceValue,e.referenceValue);case 8:return function(h,d){const y=Bt(Ue(h.latitude),Ue(d.latitude));return y!==0?y:Bt(Ue(h.longitude),Ue(d.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return qy(s.arrayValue,e.arrayValue);case 10:return function(h,d){var y,_,v,I;const k=h.fields||{},B=d.fields||{},$=(y=k[ld])===null||y===void 0?void 0:y.arrayValue,X=(_=B[ld])===null||_===void 0?void 0:_.arrayValue,lt=Bt(((v=$==null?void 0:$.values)===null||v===void 0?void 0:v.length)||0,((I=X==null?void 0:X.values)===null||I===void 0?void 0:I.length)||0);return lt!==0?lt:qy($,X)}(s.mapValue,e.mapValue);case 11:return function(h,d){if(h===Ku.mapValue&&d===Ku.mapValue)return 0;if(h===Ku.mapValue)return 1;if(d===Ku.mapValue)return-1;const y=h.fields||{},_=Object.keys(y),v=d.fields||{},I=Object.keys(v);_.sort(),I.sort();for(let k=0;k<_.length&&k<I.length;++k){const B=Bt(_[k],I[k]);if(B!==0)return B;const $=ka(y[_[k]],v[I[k]]);if($!==0)return $}return Bt(_.length,I.length)}(s.mapValue,e.mapValue);default:throw wt()}}function Hy(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Bt(s,e);const i=Ds(s),a=Ds(e),l=Bt(i.seconds,a.seconds);return l!==0?l:Bt(i.nanos,a.nanos)}function qy(s,e){const i=s.values||[],a=e.values||[];for(let l=0;l<i.length&&l<a.length;++l){const h=ka(i[l],a[l]);if(h)return h}return Bt(i.length,a.length)}function xa(s){return ud(s)}function ud(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(i){const a=Ds(i);return`time(${a.seconds},${a.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(i){return Va(i).toBase64()}(s.bytesValue):"referenceValue"in s?function(i){return Et.fromName(i).toString()}(s.referenceValue):"geoPointValue"in s?function(i){return`geo(${i.latitude},${i.longitude})`}(s.geoPointValue):"arrayValue"in s?function(i){let a="[",l=!0;for(const h of i.values||[])l?l=!1:a+=",",a+=ud(h);return a+"]"}(s.arrayValue):"mapValue"in s?function(i){const a=Object.keys(i.fields||{}).sort();let l="{",h=!0;for(const d of a)h?h=!1:l+=",",l+=`${d}:${ud(i.fields[d])}`;return l+"}"}(s.mapValue):wt()}function Ju(s){switch(Os(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xd(s);return e?16+Ju(e):16;case 5:return 2*s.stringValue.length;case 6:return Va(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((l,h)=>l+Ju(h),0)}(s.arrayValue);case 10:case 11:return function(a){let l=0;return Ba(a.fields,(h,d)=>{l+=h.length+Ju(d)}),l}(s.mapValue);default:throw wt()}}function cd(s){return!!s&&"integerValue"in s}function Ud(s){return!!s&&"arrayValue"in s}function tc(s){return!!s&&"mapValue"in s}function US(s){var e,i;return((i=(((e=s==null?void 0:s.mapValue)===null||e===void 0?void 0:e.fields)||{})[hv])===null||i===void 0?void 0:i.stringValue)===fv}function Jo(s){if(s.geoPointValue)return{geoPointValue:Object.assign({},s.geoPointValue)};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:Object.assign({},s.timestampValue)};if(s.mapValue){const e={mapValue:{fields:{}}};return Ba(s.mapValue.fields,(i,a)=>e.mapValue.fields[i]=Jo(a)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let i=0;i<(s.arrayValue.values||[]).length;++i)e.arrayValue.values[i]=Jo(s.arrayValue.values[i]);return e}return Object.assign({},s)}function LS(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===xS}/**
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
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let a=0;a<e.length-1;++a)if(i=(i.mapValue.fields||{})[e.get(a)],!tc(i))return null;return i=(i.mapValue.fields||{})[e.lastSegment()],i||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(i)}setAll(e){let i=Le.emptyPath(),a={},l=[];e.forEach((d,y)=>{if(!i.isImmediateParentOf(y)){const _=this.getFieldsMap(i);this.applyChanges(_,a,l),a={},l=[],i=y.popLast()}d?a[y.lastSegment()]=Jo(d):l.push(y.lastSegment())});const h=this.getFieldsMap(i);this.applyChanges(h,a,l)}delete(e){const i=this.field(e.popLast());tc(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return oi(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let a=0;a<e.length;++a){let l=i.mapValue.fields[e.get(a)];tc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},i.mapValue.fields[e.get(a)]=l),i=l}return i.mapValue.fields}applyChanges(e,i,a){Ba(i,(l,h)=>e[l]=h);for(const l of a)delete e[l]}clone(){return new Pn(Jo(this.value))}}function dv(s){const e=[];return Ba(s.fields,(i,a)=>{const l=new Le([i]);if(tc(a)){const h=dv(a.mapValue).fields;if(h.length===0)e.push(l);else for(const d of h)e.push(l.child(d))}else e.push(l)}),new zn(e)}/**
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
 */class Ln{constructor(e,i,a,l,h,d,y){this.key=e,this.documentType=i,this.version=a,this.readTime=l,this.createTime=h,this.data=d,this.documentState=y}static newInvalidDocument(e){return new Ln(e,0,$t.min(),$t.min(),$t.min(),Pn.empty(),0)}static newFoundDocument(e,i,a,l){return new Ln(e,1,i,$t.min(),a,l,0)}static newNoDocument(e,i){return new Ln(e,2,i,$t.min(),$t.min(),Pn.empty(),0)}static newUnknownDocument(e,i){return new Ln(e,3,i,$t.min(),$t.min(),Pn.empty(),2)}convertToFoundDocument(e,i){return!this.createTime.isEqual($t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$t.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,i){this.position=e,this.inclusive=i}}function Gy(s,e,i){let a=0;for(let l=0;l<s.position.length;l++){const h=e[l],d=s.position[l];if(h.field.isKeyField()?a=Et.comparator(Et.fromName(d.referenceValue),i.key):a=ka(d,i.data.field(h.field)),h.dir==="desc"&&(a*=-1),a!==0)break}return a}function Fy(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let i=0;i<s.position.length;i++)if(!oi(s.position[i],e.position[i]))return!1;return!0}/**
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
 */class dc{constructor(e,i="asc"){this.field=e,this.dir=i}}function PS(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
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
 */class gv{}class De extends gv{constructor(e,i,a){super(),this.field=e,this.op=i,this.value=a}static create(e,i,a){return e.isKeyField()?i==="in"||i==="not-in"?this.createKeyFieldInFilter(e,i,a):new jS(e,i,a):i==="array-contains"?new qS(e,a):i==="in"?new GS(e,a):i==="not-in"?new FS(e,a):i==="array-contains-any"?new KS(e,a):new De(e,i,a)}static createKeyFieldInFilter(e,i,a){return i==="in"?new BS(e,a):new HS(e,a)}matches(e){const i=e.data.field(this.field);return this.op==="!="?i!==null&&this.matchesComparison(ka(i,this.value)):i!==null&&Os(this.value)===Os(i)&&this.matchesComparison(ka(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return wt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends gv{constructor(e,i){super(),this.filters=e,this.op=i,this.ce=null}static create(e,i){return new zr(e,i)}matches(e){return mv(this)?this.filters.find(i=>!i.matches(e))===void 0:this.filters.find(i=>i.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,i)=>e.concat(i.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function mv(s){return s.op==="and"}function pv(s){return zS(s)&&mv(s)}function zS(s){for(const e of s.filters)if(e instanceof zr)return!1;return!0}function hd(s){if(s instanceof De)return s.field.canonicalString()+s.op.toString()+xa(s.value);if(pv(s))return s.filters.map(e=>hd(e)).join(",");{const e=s.filters.map(i=>hd(i)).join(",");return`${s.op}(${e})`}}function yv(s,e){return s instanceof De?function(a,l){return l instanceof De&&a.op===l.op&&a.field.isEqual(l.field)&&oi(a.value,l.value)}(s,e):s instanceof zr?function(a,l){return l instanceof zr&&a.op===l.op&&a.filters.length===l.filters.length?a.filters.reduce((h,d,y)=>h&&yv(d,l.filters[y]),!0):!1}(s,e):void wt()}function _v(s){return s instanceof De?function(i){return`${i.field.canonicalString()} ${i.op} ${xa(i.value)}`}(s):s instanceof zr?function(i){return i.op.toString()+" {"+i.getFilters().map(_v).join(" ,")+"}"}(s):"Filter"}class jS extends De{constructor(e,i,a){super(e,i,a),this.key=Et.fromName(a.referenceValue)}matches(e){const i=Et.comparator(e.key,this.key);return this.matchesComparison(i)}}class BS extends De{constructor(e,i){super(e,"in",i),this.keys=vv("in",i)}matches(e){return this.keys.some(i=>i.isEqual(e.key))}}class HS extends De{constructor(e,i){super(e,"not-in",i),this.keys=vv("not-in",i)}matches(e){return!this.keys.some(i=>i.isEqual(e.key))}}function vv(s,e){var i;return(((i=e.arrayValue)===null||i===void 0?void 0:i.values)||[]).map(a=>Et.fromName(a.referenceValue))}class qS extends De{constructor(e,i){super(e,"array-contains",i)}matches(e){const i=e.data.field(this.field);return Ud(i)&&ol(i.arrayValue,this.value)}}class GS extends De{constructor(e,i){super(e,"in",i)}matches(e){const i=e.data.field(this.field);return i!==null&&ol(this.value.arrayValue,i)}}class FS extends De{constructor(e,i){super(e,"not-in",i)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const i=e.data.field(this.field);return i!==null&&!ol(this.value.arrayValue,i)}}class KS extends De{constructor(e,i){super(e,"array-contains-any",i)}matches(e){const i=e.data.field(this.field);return!(!Ud(i)||!i.arrayValue.values)&&i.arrayValue.values.some(a=>ol(this.value.arrayValue,a))}}/**
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
 */class QS{constructor(e,i=null,a=[],l=[],h=null,d=null,y=null){this.path=e,this.collectionGroup=i,this.orderBy=a,this.filters=l,this.limit=h,this.startAt=d,this.endAt=y,this.le=null}}function Ky(s,e=null,i=[],a=[],l=null,h=null,d=null){return new QS(s,e,i,a,l,h,d)}function Ld(s){const e=Xt(s);if(e.le===null){let i=e.path.canonicalString();e.collectionGroup!==null&&(i+="|cg:"+e.collectionGroup),i+="|f:",i+=e.filters.map(a=>hd(a)).join(","),i+="|ob:",i+=e.orderBy.map(a=>function(h){return h.field.canonicalString()+h.dir}(a)).join(","),Vd(e.limit)||(i+="|l:",i+=e.limit),e.startAt&&(i+="|lb:",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(a=>xa(a)).join(",")),e.endAt&&(i+="|ub:",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(a=>xa(a)).join(",")),e.le=i}return e.le}function Pd(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<s.orderBy.length;i++)if(!PS(s.orderBy[i],e.orderBy[i]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let i=0;i<s.filters.length;i++)if(!yv(s.filters[i],e.filters[i]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Fy(s.startAt,e.startAt)&&Fy(s.endAt,e.endAt)}/**
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
 */class Ic{constructor(e,i=null,a=[],l=[],h=null,d="F",y=null,_=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=a,this.filters=l,this.limit=h,this.limitType=d,this.startAt=y,this.endAt=_,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function YS(s,e,i,a,l,h,d,y){return new Ic(s,e,i,a,l,h,d,y)}function XS(s){return new Ic(s)}function Qy(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function $S(s){return s.collectionGroup!==null}function tl(s){const e=Xt(s);if(e.he===null){e.he=[];const i=new Set;for(const h of e.explicitOrderBy)e.he.push(h),i.add(h.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let y=new Pe(Le.comparator);return d.filters.forEach(_=>{_.getFlattenedFilters().forEach(v=>{v.isInequality()&&(y=y.add(v.field))})}),y})(e).forEach(h=>{i.has(h.canonicalString())||h.isKeyField()||e.he.push(new dc(h,a))}),i.has(Le.keyField().canonicalString())||e.he.push(new dc(Le.keyField(),a))}return e.he}function bs(s){const e=Xt(s);return e.Pe||(e.Pe=ZS(e,tl(s))),e.Pe}function ZS(s,e){if(s.limitType==="F")return Ky(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(l=>{const h=l.dir==="desc"?"asc":"desc";return new dc(l.field,h)});const i=s.endAt?new fc(s.endAt.position,s.endAt.inclusive):null,a=s.startAt?new fc(s.startAt.position,s.startAt.inclusive):null;return Ky(s.path,s.collectionGroup,e,s.filters,s.limit,i,a)}}function fd(s,e,i){return new Ic(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,i,s.startAt,s.endAt)}function Ev(s,e){return Pd(bs(s),bs(e))&&s.limitType===e.limitType}function Tv(s){return`${Ld(bs(s))}|lt:${s.limitType}`}function Zo(s){return`Query(target=${function(i){let a=i.path.canonicalString();return i.collectionGroup!==null&&(a+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(a+=`, filters: [${i.filters.map(l=>_v(l)).join(", ")}]`),Vd(i.limit)||(a+=", limit: "+i.limit),i.orderBy.length>0&&(a+=`, orderBy: [${i.orderBy.map(l=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(l)).join(", ")}]`),i.startAt&&(a+=", startAt: ",a+=i.startAt.inclusive?"b:":"a:",a+=i.startAt.position.map(l=>xa(l)).join(",")),i.endAt&&(a+=", endAt: ",a+=i.endAt.inclusive?"a:":"b:",a+=i.endAt.position.map(l=>xa(l)).join(",")),`Target(${a})`}(bs(s))}; limitType=${s.limitType})`}function zd(s,e){return e.isFoundDocument()&&function(a,l){const h=l.key.path;return a.collectionGroup!==null?l.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(h):Et.isDocumentKey(a.path)?a.path.isEqual(h):a.path.isImmediateParentOf(h)}(s,e)&&function(a,l){for(const h of tl(a))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0}(s,e)&&function(a,l){for(const h of a.filters)if(!h.matches(l))return!1;return!0}(s,e)&&function(a,l){return!(a.startAt&&!function(d,y,_){const v=Gy(d,y,_);return d.inclusive?v<=0:v<0}(a.startAt,tl(a),l)||a.endAt&&!function(d,y,_){const v=Gy(d,y,_);return d.inclusive?v>=0:v>0}(a.endAt,tl(a),l))}(s,e)}function WS(s){return(e,i)=>{let a=!1;for(const l of tl(s)){const h=JS(l,e,i);if(h!==0)return h;a=a||l.field.isKeyField()}return 0}}function JS(s,e,i){const a=s.field.isKeyField()?Et.comparator(e.key,i.key):function(h,d,y){const _=d.data.field(h),v=y.data.field(h);return _!==null&&v!==null?ka(_,v):wt()}(s.field,e,i);switch(s.dir){case"asc":return a;case"desc":return-1*a;default:return wt()}}/**
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
 */class Ms{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a!==void 0){for(const[l,h]of a)if(this.equalsFn(l,e))return h}}has(e){return this.get(e)!==void 0}set(e,i){const a=this.mapKeyFn(e),l=this.inner[a];if(l===void 0)return this.inner[a]=[[e,i]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],e))return void(l[h]=[e,i]);l.push([e,i]),this.innerSize++}delete(e){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return a.length===1?delete this.inner[i]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(e){Ba(this.inner,(i,a)=>{for(const[l,h]of a)e(l,h)})}isEmpty(){return av(this.inner)}size(){return this.innerSize}}/**
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
 */const tb=new sn(Et.comparator);function gc(){return tb}const Av=new sn(Et.comparator);function Qu(...s){let e=Av;for(const i of s)e=e.insert(i.key,i);return e}function Sv(s){let e=Av;return s.forEach((i,a)=>e=e.insert(i,a.overlayedDocument)),e}function Ts(){return el()}function bv(){return el()}function el(){return new Ms(s=>s.toString(),(s,e)=>s.isEqual(e))}const eb=new sn(Et.comparator),nb=new Pe(Et.comparator);function Ge(...s){let e=nb;for(const i of s)e=e.add(i);return e}const ib=new Pe(Bt);function rb(){return ib}/**
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
 */function jd(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lc(e)?"-0":e}}function wv(s){return{integerValue:""+s}}function sb(s,e){return DS(e)?wv(e):jd(s,e)}/**
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
 */class Dc{constructor(){this._=void 0}}function ab(s,e,i){return s instanceof mc?function(l,h){const d={fields:{[lv]:{stringValue:ov},[cv]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&kd(h)&&(h=xd(h)),h&&(d.fields[uv]=h),{mapValue:d}}(i,e):s instanceof ll?Cv(s,e):s instanceof ul?Iv(s,e):function(l,h){const d=Rv(l,h),y=Yy(d)+Yy(l.Ie);return cd(d)&&cd(l.Ie)?wv(y):jd(l.serializer,y)}(s,e)}function ob(s,e,i){return s instanceof ll?Cv(s,e):s instanceof ul?Iv(s,e):i}function Rv(s,e){return s instanceof pc?function(a){return cd(a)||function(h){return!!h&&"doubleValue"in h}(a)}(e)?e:{integerValue:0}:null}class mc extends Dc{}class ll extends Dc{constructor(e){super(),this.elements=e}}function Cv(s,e){const i=Dv(e);for(const a of s.elements)i.some(l=>oi(l,a))||i.push(a);return{arrayValue:{values:i}}}class ul extends Dc{constructor(e){super(),this.elements=e}}function Iv(s,e){let i=Dv(e);for(const a of s.elements)i=i.filter(l=>!oi(l,a));return{arrayValue:{values:i}}}class pc extends Dc{constructor(e,i){super(),this.serializer=e,this.Ie=i}}function Yy(s){return Ue(s.integerValue||s.doubleValue)}function Dv(s){return Ud(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function lb(s,e){return s.field.isEqual(e.field)&&function(a,l){return a instanceof ll&&l instanceof ll||a instanceof ul&&l instanceof ul?Ma(a.elements,l.elements,oi):a instanceof pc&&l instanceof pc?oi(a.Ie,l.Ie):a instanceof mc&&l instanceof mc}(s.transform,e.transform)}class ub{constructor(e,i){this.version=e,this.transformResults=i}}class zi{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new zi}static exists(e){return new zi(void 0,e)}static updateTime(e){return new zi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ec(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class Oc{}function Ov(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Mv(s.key,zi.none()):new pl(s.key,s.data,zi.none());{const i=s.data,a=Pn.empty();let l=new Pe(Le.comparator);for(let h of e.fields)if(!l.has(h)){let d=i.field(h);d===null&&h.length>1&&(h=h.popLast(),d=i.field(h)),d===null?a.delete(h):a.set(h,d),l=l.add(h)}return new Vs(s.key,a,new zn(l.toArray()),zi.none())}}function cb(s,e,i){s instanceof pl?function(l,h,d){const y=l.value.clone(),_=$y(l.fieldTransforms,h,d.transformResults);y.setAll(_),h.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(s,e,i):s instanceof Vs?function(l,h,d){if(!ec(l.precondition,h))return void h.convertToUnknownDocument(d.version);const y=$y(l.fieldTransforms,h,d.transformResults),_=h.data;_.setAll(Nv(l)),_.setAll(y),h.convertToFoundDocument(d.version,_).setHasCommittedMutations()}(s,e,i):function(l,h,d){h.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,i)}function nl(s,e,i,a){return s instanceof pl?function(h,d,y,_){if(!ec(h.precondition,d))return y;const v=h.value.clone(),I=Zy(h.fieldTransforms,_,d);return v.setAll(I),d.convertToFoundDocument(d.version,v).setHasLocalMutations(),null}(s,e,i,a):s instanceof Vs?function(h,d,y,_){if(!ec(h.precondition,d))return y;const v=Zy(h.fieldTransforms,_,d),I=d.data;return I.setAll(Nv(h)),I.setAll(v),d.convertToFoundDocument(d.version,I).setHasLocalMutations(),y===null?null:y.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map(k=>k.field))}(s,e,i,a):function(h,d,y){return ec(h.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):y}(s,e,i)}function hb(s,e){let i=null;for(const a of s.fieldTransforms){const l=e.data.field(a.field),h=Rv(a.transform,l||null);h!=null&&(i===null&&(i=Pn.empty()),i.set(a.field,h))}return i||null}function Xy(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(a,l){return a===void 0&&l===void 0||!(!a||!l)&&Ma(a,l,(h,d)=>lb(h,d))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class pl extends Oc{constructor(e,i,a,l=[]){super(),this.key=e,this.value=i,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class Vs extends Oc{constructor(e,i,a,l,h=[]){super(),this.key=e,this.data=i,this.fieldMask=a,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function Nv(s){const e=new Map;return s.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){const a=s.data.field(i);e.set(i,a)}}),e}function $y(s,e,i){const a=new Map;ae(s.length===i.length);for(let l=0;l<i.length;l++){const h=s[l],d=h.transform,y=e.data.field(h.field);a.set(h.field,ob(d,y,i[l]))}return a}function Zy(s,e,i){const a=new Map;for(const l of s){const h=l.transform,d=i.data.field(l.field);a.set(l.field,ab(h,d,e))}return a}class Mv extends Oc{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fb extends Oc{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class db{constructor(e,i,a,l){this.batchId=e,this.localWriteTime=i,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(e,i){const a=i.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(e.key)&&cb(h,e,a[l])}}applyToLocalView(e,i){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(i=nl(a,e,i,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(i=nl(a,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){const a=bv();return this.mutations.forEach(l=>{const h=e.get(l.key),d=h.overlayedDocument;let y=this.applyToLocalView(d,h.mutatedFields);y=i.has(l.key)?null:y;const _=Ov(d,y);_!==null&&a.set(l.key,_),d.isValidDocument()||d.convertToNoDocument($t.min())}),a}keys(){return this.mutations.reduce((e,i)=>e.add(i.key),Ge())}isEqual(e){return this.batchId===e.batchId&&Ma(this.mutations,e.mutations,(i,a)=>Xy(i,a))&&Ma(this.baseMutations,e.baseMutations,(i,a)=>Xy(i,a))}}class Bd{constructor(e,i,a,l){this.batch=e,this.commitVersion=i,this.mutationResults=a,this.docVersions=l}static from(e,i,a){ae(e.mutations.length===a.length);let l=function(){return eb}();const h=e.mutations;for(let d=0;d<h.length;d++)l=l.insert(h[d].key,a[d].version);return new Bd(e,i,a,l)}}/**
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
 */class gb{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var de,Vt;function mb(s){switch(s){case Y.OK:return wt();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return wt()}}function pb(s){if(s===void 0)return Is("GRPC error has no .code"),Y.UNKNOWN;switch(s){case de.OK:return Y.OK;case de.CANCELLED:return Y.CANCELLED;case de.UNKNOWN:return Y.UNKNOWN;case de.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case de.INTERNAL:return Y.INTERNAL;case de.UNAVAILABLE:return Y.UNAVAILABLE;case de.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case de.NOT_FOUND:return Y.NOT_FOUND;case de.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case de.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case de.ABORTED:return Y.ABORTED;case de.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case de.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case de.DATA_LOSS:return Y.DATA_LOSS;default:return wt()}}(Vt=de||(de={}))[Vt.OK=0]="OK",Vt[Vt.CANCELLED=1]="CANCELLED",Vt[Vt.UNKNOWN=2]="UNKNOWN",Vt[Vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Vt[Vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Vt[Vt.NOT_FOUND=5]="NOT_FOUND",Vt[Vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Vt[Vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Vt[Vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Vt[Vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Vt[Vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Vt[Vt.ABORTED=10]="ABORTED",Vt[Vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Vt[Vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Vt[Vt.INTERNAL=13]="INTERNAL",Vt[Vt.UNAVAILABLE=14]="UNAVAILABLE",Vt[Vt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Id([4294967295,4294967295],0);class yb{constructor(e,i){this.databaseId=e,this.useProto3Json=i}}function dd(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _b(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function vb(s,e){return dd(s,e.toTimestamp())}function Ia(s){return ae(!!s),$t.fromTimestamp(function(i){const a=Ds(i);return new Oe(a.seconds,a.nanos)}(s))}function Vv(s,e){return gd(s,e).canonicalString()}function gd(s,e){const i=function(l){return new se(["projects",l.projectId,"databases",l.database])}(s).child("documents");return e===void 0?i:i.child(e)}function Eb(s){const e=se.fromString(s);return ae(Ib(e)),e}function md(s,e){return Vv(s.databaseId,e.path)}function Tb(s){const e=Eb(s);return e.length===4?se.emptyPath():Sb(e)}function Ab(s){return new se(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Sb(s){return ae(s.length>4&&s.get(4)==="documents"),s.popFirst(5)}function Wy(s,e,i){return{name:md(s,e),fields:i.value.mapValue.fields}}function bb(s,e){let i;if(e instanceof pl)i={update:Wy(s,e.key,e.value)};else if(e instanceof Mv)i={delete:md(s,e.key)};else if(e instanceof Vs)i={update:Wy(s,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof fb))return wt();i={verify:md(s,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(a=>function(h,d){const y=d.transform;if(y instanceof mc)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(y instanceof ll)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:y.elements}};if(y instanceof ul)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:y.elements}};if(y instanceof pc)return{fieldPath:d.field.canonicalString(),increment:y.Ie};throw wt()}(0,a))),e.precondition.isNone||(i.currentDocument=function(l,h){return h.updateTime!==void 0?{updateTime:vb(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:wt()}(s,e.precondition)),i}function wb(s,e){return s&&s.length>0?(ae(e!==void 0),s.map(i=>function(l,h){let d=l.updateTime?Ia(l.updateTime):Ia(h);return d.isEqual($t.min())&&(d=Ia(h)),new ub(d,l.transformResults||[])}(i,e))):[]}function Rb(s){let e=Tb(s.parent);const i=s.structuredQuery,a=i.from?i.from.length:0;let l=null;if(a>0){ae(a===1);const I=i.from[0];I.allDescendants?l=I.collectionId:e=e.child(I.collectionId)}let h=[];i.where&&(h=function(k){const B=kv(k);return B instanceof zr&&pv(B)?B.getFilters():[B]}(i.where));let d=[];i.orderBy&&(d=function(k){return k.map(B=>function(X){return new dc(wa(X.field),function(et){switch(et){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(B))}(i.orderBy));let y=null;i.limit&&(y=function(k){let B;return B=typeof k=="object"?k.value:k,Vd(B)?null:B}(i.limit));let _=null;i.startAt&&(_=function(k){const B=!!k.before,$=k.values||[];return new fc($,B)}(i.startAt));let v=null;return i.endAt&&(v=function(k){const B=!k.before,$=k.values||[];return new fc($,B)}(i.endAt)),YS(e,l,d,h,y,"F",_,v)}function kv(s){return s.unaryFilter!==void 0?function(i){switch(i.unaryFilter.op){case"IS_NAN":const a=wa(i.unaryFilter.field);return De.create(a,"==",{doubleValue:NaN});case"IS_NULL":const l=wa(i.unaryFilter.field);return De.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=wa(i.unaryFilter.field);return De.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=wa(i.unaryFilter.field);return De.create(d,"!=",{nullValue:"NULL_VALUE"});default:return wt()}}(s):s.fieldFilter!==void 0?function(i){return De.create(wa(i.fieldFilter.field),function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wt()}}(i.fieldFilter.op),i.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(i){return zr.create(i.compositeFilter.filters.map(a=>kv(a)),function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return wt()}}(i.compositeFilter.op))}(s):wt()}function wa(s){return Le.fromServerFormat(s.fieldPath)}function Cb(s){const e=[];return s.fields.forEach(i=>e.push(i.canonicalString())),{fieldPaths:e}}function Ib(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
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
 */class Db{constructor(e){this.Tt=e}}function Ob(s){const e=Rb({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?fd(e,e.limit,"L"):e}/**
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
 */class Nb{constructor(){this.Tn=new Mb}addToCollectionParentIndex(e,i){return this.Tn.add(i),F.resolve()}getCollectionParents(e,i){return F.resolve(this.Tn.getEntries(i))}addFieldIndex(e,i){return F.resolve()}deleteFieldIndex(e,i){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,i){return F.resolve()}getDocumentsMatchingTarget(e,i){return F.resolve(null)}getIndexType(e,i){return F.resolve(0)}getFieldIndexes(e,i){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,i){return F.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,i){return F.resolve(Pr.min())}updateCollectionGroup(e,i,a){return F.resolve()}updateIndexEntries(e,i){return F.resolve()}}class Mb{constructor(){this.index={}}add(e){const i=e.lastSegment(),a=e.popLast(),l=this.index[i]||new Pe(se.comparator),h=!l.has(a);return this.index[i]=l.add(a),h}has(e){const i=e.lastSegment(),a=e.popLast(),l=this.index[i];return l&&l.has(a)}getEntries(e){return(this.index[e]||new Pe(se.comparator)).toArray()}}/**
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
 */const Jy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xv=41943040;class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=a}}/**
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
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(xv,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
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
 */class Ua{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Ua(0)}static Un(){return new Ua(-1)}}/**
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
 */const t_="LruGarbageCollector",Vb=1048576;function e_([s,e],[i,a]){const l=Bt(s,i);return l===0?Bt(e,a):l}class kb{constructor(e){this.Hn=e,this.buffer=new Pe(e_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const i=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(i);else{const a=this.buffer.last();e_(i,a)<0&&(this.buffer=this.buffer.delete(a).add(i))}}get maxValue(){return this.buffer.last()[0]}}class xb{constructor(e,i,a){this.garbageCollector=e,this.asyncQueue=i,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){at(t_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(i){ml(i)?at(t_,"Ignoring IndexedDB error during garbage collection: ",i):await Od(i)}await this.er(3e5)})}}class Ub{constructor(e,i){this.tr=e,this.params=i}calculateTargetCount(e,i){return this.tr.nr(e).next(a=>Math.floor(i/100*a))}nthSequenceNumber(e,i){if(i===0)return F.resolve(Nd.ae);const a=new kb(i);return this.tr.forEachTarget(e,l=>a.Zn(l.sequenceNumber)).next(()=>this.tr.rr(e,l=>a.Zn(l))).next(()=>a.maxValue)}removeTargets(e,i,a){return this.tr.removeTargets(e,i,a)}removeOrphanedDocuments(e,i){return this.tr.removeOrphanedDocuments(e,i)}collect(e,i){return this.params.cacheSizeCollectionThreshold===-1?(at("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Jy)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(at("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jy):this.ir(e,i))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,i){let a,l,h,d,y,_,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(k=>(k>this.params.maximumSequenceNumbersToCollect?(at("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),l=this.params.maximumSequenceNumbersToCollect):l=k,d=Date.now(),this.nthSequenceNumber(e,l))).next(k=>(a=k,y=Date.now(),this.removeTargets(e,a,i))).next(k=>(h=k,_=Date.now(),this.removeOrphanedDocuments(e,a))).next(k=>(v=Date.now(),ba()<=Rt.DEBUG&&at("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-I}ms
	Determined least recently used ${l} in `+(y-d)+`ms
	Removed ${h} targets in `+(_-y)+`ms
	Removed ${k} documents in `+(v-_)+`ms
Total Duration: ${v-I}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:k})))}}function Lb(s,e){return new Ub(s,e)}/**
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
 */class Pb{constructor(){this.changes=new Ms(e=>e.toString(),(e,i)=>e.isEqual(i)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,Ln.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();const a=this.changes.get(i);return a!==void 0?F.resolve(a):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zb{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}}/**
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
 */class jb{constructor(e,i,a,l){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=a,this.indexManager=l}getDocument(e,i){let a=null;return this.documentOverlayCache.getOverlay(e,i).next(l=>(a=l,this.remoteDocumentCache.getEntry(e,i))).next(l=>(a!==null&&nl(a.mutation,l,zn.empty(),Oe.now()),l))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next(a=>this.getLocalViewOfDocuments(e,a,Ge()).next(()=>a))}getLocalViewOfDocuments(e,i,a=Ge()){const l=Ts();return this.populateOverlays(e,l,i).next(()=>this.computeViews(e,i,l,a).next(h=>{let d=Qu();return h.forEach((y,_)=>{d=d.insert(y,_.overlayedDocument)}),d}))}getOverlayedDocuments(e,i){const a=Ts();return this.populateOverlays(e,a,i).next(()=>this.computeViews(e,i,a,Ge()))}populateOverlays(e,i,a){const l=[];return a.forEach(h=>{i.has(h)||l.push(h)}),this.documentOverlayCache.getOverlays(e,l).next(h=>{h.forEach((d,y)=>{i.set(d,y)})})}computeViews(e,i,a,l){let h=gc();const d=el(),y=function(){return el()}();return i.forEach((_,v)=>{const I=a.get(v.key);l.has(v.key)&&(I===void 0||I.mutation instanceof Vs)?h=h.insert(v.key,v):I!==void 0?(d.set(v.key,I.mutation.getFieldMask()),nl(I.mutation,v,I.mutation.getFieldMask(),Oe.now())):d.set(v.key,zn.empty())}),this.recalculateAndSaveOverlays(e,h).next(_=>(_.forEach((v,I)=>d.set(v,I)),i.forEach((v,I)=>{var k;return y.set(v,new zb(I,(k=d.get(v))!==null&&k!==void 0?k:null))}),y))}recalculateAndSaveOverlays(e,i){const a=el();let l=new sn((d,y)=>d-y),h=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next(d=>{for(const y of d)y.keys().forEach(_=>{const v=i.get(_);if(v===null)return;let I=a.get(_)||zn.empty();I=y.applyToLocalView(v,I),a.set(_,I);const k=(l.get(y.batchId)||Ge()).add(_);l=l.insert(y.batchId,k)})}).next(()=>{const d=[],y=l.getReverseIterator();for(;y.hasNext();){const _=y.getNext(),v=_.key,I=_.value,k=bv();I.forEach(B=>{if(!h.has(B)){const $=Ov(i.get(B),a.get(B));$!==null&&k.set(B,$),h=h.add(B)}}),d.push(this.documentOverlayCache.saveOverlays(e,v,k))}return F.waitFor(d)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,i,a,l){return function(d){return Et.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(i)?this.getDocumentsMatchingDocumentQuery(e,i.path):$S(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,a,l):this.getDocumentsMatchingCollectionQuery(e,i,a,l)}getNextDocuments(e,i,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,a,l).next(h=>{const d=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,a.largestBatchId,l-h.size):F.resolve(Ts());let y=al,_=h;return d.next(v=>F.forEach(v,(I,k)=>(y<k.largestBatchId&&(y=k.largestBatchId),h.get(I)?F.resolve():this.remoteDocumentCache.getEntry(e,I).next(B=>{_=_.insert(I,B)}))).next(()=>this.populateOverlays(e,v,h)).next(()=>this.computeViews(e,_,v,Ge())).next(I=>({batchId:y,changes:Sv(I)})))})}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new Et(i)).next(a=>{let l=Qu();return a.isFoundDocument()&&(l=l.insert(a.key,a)),l})}getDocumentsMatchingCollectionGroupQuery(e,i,a,l){const h=i.collectionGroup;let d=Qu();return this.indexManager.getCollectionParents(e,h).next(y=>F.forEach(y,_=>{const v=function(k,B){return new Ic(B,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)}(i,_.child(h));return this.getDocumentsMatchingCollectionQuery(e,v,a,l).next(I=>{I.forEach((k,B)=>{d=d.insert(k,B)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,i,a,l){let h;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,a.largestBatchId).next(d=>(h=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,a,h,l))).next(d=>{h.forEach((_,v)=>{const I=v.getKey();d.get(I)===null&&(d=d.insert(I,Ln.newInvalidDocument(I)))});let y=Qu();return d.forEach((_,v)=>{const I=h.get(_);I!==void 0&&nl(I.mutation,v,zn.empty(),Oe.now()),zd(i,v)&&(y=y.insert(_,v))}),y})}}/**
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
 */class Bb{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,i){return F.resolve(this.dr.get(i))}saveBundleMetadata(e,i){return this.dr.set(i.id,function(l){return{id:l.id,version:l.version,createTime:Ia(l.createTime)}}(i)),F.resolve()}getNamedQuery(e,i){return F.resolve(this.Ar.get(i))}saveNamedQuery(e,i){return this.Ar.set(i.name,function(l){return{name:l.name,query:Ob(l.bundledQuery),readTime:Ia(l.readTime)}}(i)),F.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new sn(Et.comparator),this.Rr=new Map}getOverlay(e,i){return F.resolve(this.overlays.get(i))}getOverlays(e,i){const a=Ts();return F.forEach(i,l=>this.getOverlay(e,l).next(h=>{h!==null&&a.set(l,h)})).next(()=>a)}saveOverlays(e,i,a){return a.forEach((l,h)=>{this.Et(e,i,h)}),F.resolve()}removeOverlaysForBatchId(e,i,a){const l=this.Rr.get(a);return l!==void 0&&(l.forEach(h=>this.overlays=this.overlays.remove(h)),this.Rr.delete(a)),F.resolve()}getOverlaysForCollection(e,i,a){const l=Ts(),h=i.length+1,d=new Et(i.child("")),y=this.overlays.getIteratorFrom(d);for(;y.hasNext();){const _=y.getNext().value,v=_.getKey();if(!i.isPrefixOf(v.path))break;v.path.length===h&&_.largestBatchId>a&&l.set(_.getKey(),_)}return F.resolve(l)}getOverlaysForCollectionGroup(e,i,a,l){let h=new sn((v,I)=>v-I);const d=this.overlays.getIterator();for(;d.hasNext();){const v=d.getNext().value;if(v.getKey().getCollectionGroup()===i&&v.largestBatchId>a){let I=h.get(v.largestBatchId);I===null&&(I=Ts(),h=h.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const y=Ts(),_=h.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach((v,I)=>y.set(v,I)),!(y.size()>=l)););return F.resolve(y)}Et(e,i,a){const l=this.overlays.get(a.key);if(l!==null){const d=this.Rr.get(l.largestBatchId).delete(a.key);this.Rr.set(l.largestBatchId,d)}this.overlays=this.overlays.insert(a.key,new gb(i,a));let h=this.Rr.get(i);h===void 0&&(h=Ge(),this.Rr.set(i,h)),this.Rr.set(i,h.add(a.key))}}/**
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
 */class qb{constructor(){this.sessionToken=ai.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,F.resolve()}}/**
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
 */class Hd{constructor(){this.Vr=new Pe(Ie.mr),this.gr=new Pe(Ie.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,i){const a=new Ie(e,i);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(e,i){e.forEach(a=>this.addReference(a,i))}removeReference(e,i){this.wr(new Ie(e,i))}br(e,i){e.forEach(a=>this.removeReference(a,i))}Sr(e){const i=new Et(new se([])),a=new Ie(i,e),l=new Ie(i,e+1),h=[];return this.gr.forEachInRange([a,l],d=>{this.wr(d),h.push(d.key)}),h}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const i=new Et(new se([])),a=new Ie(i,e),l=new Ie(i,e+1);let h=Ge();return this.gr.forEachInRange([a,l],d=>{h=h.add(d.key)}),h}containsKey(e){const i=new Ie(e,0),a=this.Vr.firstAfterOrEqual(i);return a!==null&&e.isEqual(a.key)}}class Ie{constructor(e,i){this.key=e,this.Cr=i}static mr(e,i){return Et.comparator(e.key,i.key)||Bt(e.Cr,i.Cr)}static pr(e,i){return Bt(e.Cr,i.Cr)||Et.comparator(e.key,i.key)}}/**
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
 */class Gb{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.Fr=1,this.Mr=new Pe(Ie.mr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,i,a,l){const h=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new db(h,i,a,l);this.mutationQueue.push(d);for(const y of l)this.Mr=this.Mr.add(new Ie(y.key,h)),this.indexManager.addToCollectionParentIndex(e,y.key.path.popLast());return F.resolve(d)}lookupMutationBatch(e,i){return F.resolve(this.Or(i))}getNextMutationBatchAfterBatchId(e,i){const a=i+1,l=this.Nr(a),h=l<0?0:l;return F.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Md:this.Fr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){const a=new Ie(i,0),l=new Ie(i,Number.POSITIVE_INFINITY),h=[];return this.Mr.forEachInRange([a,l],d=>{const y=this.Or(d.Cr);h.push(y)}),F.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(e,i){let a=new Pe(Bt);return i.forEach(l=>{const h=new Ie(l,0),d=new Ie(l,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([h,d],y=>{a=a.add(y.Cr)})}),F.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(e,i){const a=i.path,l=a.length+1;let h=a;Et.isDocumentKey(h)||(h=h.child(""));const d=new Ie(new Et(h),0);let y=new Pe(Bt);return this.Mr.forEachWhile(_=>{const v=_.key.path;return!!a.isPrefixOf(v)&&(v.length===l&&(y=y.add(_.Cr)),!0)},d),F.resolve(this.Br(y))}Br(e){const i=[];return e.forEach(a=>{const l=this.Or(a);l!==null&&i.push(l)}),i}removeMutationBatch(e,i){ae(this.Lr(i.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return F.forEach(i.mutations,l=>{const h=new Ie(l.key,i.batchId);return a=a.delete(h),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)}).next(()=>{this.Mr=a})}qn(e){}containsKey(e,i){const a=new Ie(i,0),l=this.Mr.firstAfterOrEqual(a);return F.resolve(i.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Lr(e,i){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const i=this.Nr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}}/**
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
 */class Fb{constructor(e){this.kr=e,this.docs=function(){return new sn(Et.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){const a=i.key,l=this.docs.get(a),h=l?l.size:0,d=this.kr(i);return this.docs=this.docs.insert(a,{document:i.mutableCopy(),size:d}),this.size+=d-h,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){const a=this.docs.get(i);return F.resolve(a?a.document.mutableCopy():Ln.newInvalidDocument(i))}getEntries(e,i){let a=gc();return i.forEach(l=>{const h=this.docs.get(l);a=a.insert(l,h?h.document.mutableCopy():Ln.newInvalidDocument(l))}),F.resolve(a)}getDocumentsMatchingQuery(e,i,a,l){let h=gc();const d=i.path,y=new Et(d.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(y);for(;_.hasNext();){const{key:v,value:{document:I}}=_.getNext();if(!d.isPrefixOf(v.path))break;v.path.length>d.length+1||wS(bS(I),a)<=0||(l.has(I.key)||zd(i,I))&&(h=h.insert(I.key,I.mutableCopy()))}return F.resolve(h)}getAllFromCollectionGroup(e,i,a,l){wt()}qr(e,i){return F.forEach(this.docs,a=>i(a))}newChangeBuffer(e){return new Kb(this)}getSize(e){return F.resolve(this.size)}}class Kb extends Pb{constructor(e){super(),this.Ir=e}applyChanges(e){const i=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?i.push(this.Ir.addEntry(e,l)):this.Ir.removeEntry(a)}),F.waitFor(i)}getFromCache(e,i){return this.Ir.getEntry(e,i)}getAllFromCache(e,i){return this.Ir.getEntries(e,i)}}/**
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
 */class Qb{constructor(e){this.persistence=e,this.Qr=new Ms(i=>Ld(i),Pd),this.lastRemoteSnapshotVersion=$t.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Hd,this.targetCount=0,this.Ur=Ua.Kn()}forEachTarget(e,i){return this.Qr.forEach((a,l)=>i(l)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,i,a){return a&&(this.lastRemoteSnapshotVersion=a),i>this.$r&&(this.$r=i),F.resolve()}zn(e){this.Qr.set(e.target,e);const i=e.targetId;i>this.highestTargetId&&(this.Ur=new Ua(i),this.highestTargetId=i),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,i){return this.zn(i),this.targetCount+=1,F.resolve()}updateTargetData(e,i){return this.zn(i),F.resolve()}removeTargetData(e,i){return this.Qr.delete(i.target),this.Kr.Sr(i.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,i,a){let l=0;const h=[];return this.Qr.forEach((d,y)=>{y.sequenceNumber<=i&&a.get(y.targetId)===null&&(this.Qr.delete(d),h.push(this.removeMatchingKeysForTargetId(e,y.targetId)),l++)}),F.waitFor(h).next(()=>l)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,i){const a=this.Qr.get(i)||null;return F.resolve(a)}addMatchingKeys(e,i,a){return this.Kr.yr(i,a),F.resolve()}removeMatchingKeys(e,i,a){this.Kr.br(i,a);const l=this.persistence.referenceDelegate,h=[];return l&&i.forEach(d=>{h.push(l.markPotentiallyOrphaned(e,d))}),F.waitFor(h)}removeMatchingKeysForTargetId(e,i){return this.Kr.Sr(i),F.resolve()}getMatchingKeysForTargetId(e,i){const a=this.Kr.vr(i);return F.resolve(a)}containsKey(e,i){return F.resolve(this.Kr.containsKey(i))}}/**
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
 */class Uv{constructor(e,i){this.Wr={},this.overlays={},this.Gr=new Nd(0),this.zr=!1,this.zr=!0,this.jr=new qb,this.referenceDelegate=e(this),this.Hr=new Qb(this),this.indexManager=new Nb,this.remoteDocumentCache=function(l){return new Fb(l)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new Db(i),this.Yr=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new Hb,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let a=this.Wr[e.toKey()];return a||(a=new Gb(i,this.referenceDelegate),this.Wr[e.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,i,a){at("MemoryPersistence","Starting transaction:",e);const l=new Yb(this.Gr.next());return this.referenceDelegate.Zr(),a(l).next(h=>this.referenceDelegate.Xr(l).next(()=>h)).toPromise().then(h=>(l.raiseOnCommittedEvent(),h))}ei(e,i){return F.or(Object.values(this.Wr).map(a=>()=>a.containsKey(e,i)))}}class Yb extends CS{constructor(e){super(),this.currentSequenceNumber=e}}class qd{constructor(e){this.persistence=e,this.ti=new Hd,this.ni=null}static ri(e){return new qd(e)}get ii(){if(this.ni)return this.ni;throw wt()}addReference(e,i,a){return this.ti.addReference(a,i),this.ii.delete(a.toString()),F.resolve()}removeReference(e,i,a){return this.ti.removeReference(a,i),this.ii.add(a.toString()),F.resolve()}markPotentiallyOrphaned(e,i){return this.ii.add(i.toString()),F.resolve()}removeTarget(e,i){this.ti.Sr(i.targetId).forEach(l=>this.ii.add(l.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,i.targetId).next(l=>{l.forEach(h=>this.ii.add(h.toString()))}).next(()=>a.removeTargetData(e,i))}Zr(){this.ni=new Set}Xr(e){const i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.ii,a=>{const l=Et.fromPath(a);return this.si(e,l).next(h=>{h||i.removeEntry(l,$t.min())})}).next(()=>(this.ni=null,i.apply(e)))}updateLimboDocument(e,i){return this.si(e,i).next(a=>{a?this.ii.delete(i.toString()):this.ii.add(i.toString())})}Jr(e){return 0}si(e,i){return F.or([()=>F.resolve(this.ti.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.ei(e,i)])}}class yc{constructor(e,i){this.persistence=e,this.oi=new Ms(a=>OS(a.path),(a,l)=>a.isEqual(l)),this.garbageCollector=Lb(this,i)}static ri(e,i){return new yc(e,i)}Zr(){}Xr(e){return F.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}nr(e){const i=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>i.next(l=>a+l))}sr(e){let i=0;return this.rr(e,a=>{i++}).next(()=>i)}rr(e,i){return F.forEach(this.oi,(a,l)=>this.ar(e,a,l).next(h=>h?F.resolve():i(l)))}removeTargets(e,i,a){return this.persistence.getTargetCache().removeTargets(e,i,a)}removeOrphanedDocuments(e,i){let a=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.qr(e,d=>this.ar(e,d,i).next(y=>{y||(a++,h.removeEntry(d,$t.min()))})).next(()=>h.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,i){return this.oi.set(i,e.currentSequenceNumber),F.resolve()}removeTarget(e,i){const a=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,i,a){return this.oi.set(a,e.currentSequenceNumber),F.resolve()}removeReference(e,i,a){return this.oi.set(a,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,i){return this.oi.set(i,e.currentSequenceNumber),F.resolve()}Jr(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=Ju(e.data.value)),i}ar(e,i,a){return F.or([()=>this.persistence.ei(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{const l=this.oi.get(i);return F.resolve(l!==void 0&&l>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Gd{constructor(e,i,a,l){this.targetId=e,this.fromCache=i,this.Hi=a,this.Ji=l}static Yi(e,i){let a=Ge(),l=Ge();for(const h of i.docChanges)switch(h.type){case 0:a=a.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new Gd(e,i.fromCache,a,l)}}/**
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
 */class Xb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $b{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return FT()?8:IS(Fe())>0?6:4}()}initialize(e,i){this.ns=e,this.indexManager=i,this.Zi=!0}getDocumentsMatchingQuery(e,i,a,l){const h={result:null};return this.rs(e,i).next(d=>{h.result=d}).next(()=>{if(!h.result)return this.ss(e,i,l,a).next(d=>{h.result=d})}).next(()=>{if(h.result)return;const d=new Xb;return this._s(e,i,d).next(y=>{if(h.result=y,this.Xi)return this.us(e,i,d,y.size)})}).next(()=>h.result)}us(e,i,a,l){return a.documentReadCount<this.es?(ba()<=Rt.DEBUG&&at("QueryEngine","SDK will not create cache indexes for query:",Zo(i),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),F.resolve()):(ba()<=Rt.DEBUG&&at("QueryEngine","Query:",Zo(i),"scans",a.documentReadCount,"local documents and returns",l,"documents as results."),a.documentReadCount>this.ts*l?(ba()<=Rt.DEBUG&&at("QueryEngine","The SDK decides to create cache indexes for query:",Zo(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bs(i))):F.resolve())}rs(e,i){if(Qy(i))return F.resolve(null);let a=bs(i);return this.indexManager.getIndexType(e,a).next(l=>l===0?null:(i.limit!==null&&l===1&&(i=fd(i,null,"F"),a=bs(i)),this.indexManager.getDocumentsMatchingTarget(e,a).next(h=>{const d=Ge(...h);return this.ns.getDocuments(e,d).next(y=>this.indexManager.getMinOffset(e,a).next(_=>{const v=this.cs(i,y);return this.ls(i,v,d,_.readTime)?this.rs(e,fd(i,null,"F")):this.hs(e,v,i,_)}))})))}ss(e,i,a,l){return Qy(i)||l.isEqual($t.min())?F.resolve(null):this.ns.getDocuments(e,a).next(h=>{const d=this.cs(i,h);return this.ls(i,d,a,l)?F.resolve(null):(ba()<=Rt.DEBUG&&at("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Zo(i)),this.hs(e,d,i,SS(l,al)).next(y=>y))})}cs(e,i){let a=new Pe(WS(e));return i.forEach((l,h)=>{zd(e,h)&&(a=a.add(h))}),a}ls(e,i,a,l){if(e.limit===null)return!1;if(a.size!==i.size)return!0;const h=e.limitType==="F"?i.last():i.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}_s(e,i,a){return ba()<=Rt.DEBUG&&at("QueryEngine","Using full collection scan to execute query:",Zo(i)),this.ns.getDocumentsMatchingQuery(e,i,Pr.min(),a)}hs(e,i,a,l){return this.ns.getDocumentsMatchingQuery(e,a,l).next(h=>(i.forEach(d=>{h=h.insert(d.key,d)}),h))}}/**
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
 */const Zb="LocalStore";class Wb{constructor(e,i,a,l){this.persistence=e,this.Ps=i,this.serializer=l,this.Ts=new sn(Bt),this.Is=new Ms(h=>Ld(h),Pd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(a)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jb(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>e.collect(i,this.Ts))}}function Jb(s,e,i,a){return new Wb(s,e,i,a)}async function Lv(s,e){const i=Xt(s);return await i.persistence.runTransaction("Handle user change","readonly",a=>{let l;return i.mutationQueue.getAllMutationBatches(a).next(h=>(l=h,i.As(e),i.mutationQueue.getAllMutationBatches(a))).next(h=>{const d=[],y=[];let _=Ge();for(const v of l){d.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}for(const v of h){y.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}return i.localDocuments.getDocuments(a,_).next(v=>({Rs:v,removedBatchIds:d,addedBatchIds:y}))})})}function tw(s,e){const i=Xt(s);return i.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const l=e.batch.keys(),h=i.ds.newChangeBuffer({trackRemovals:!0});return function(y,_,v,I){const k=v.batch,B=k.keys();let $=F.resolve();return B.forEach(X=>{$=$.next(()=>I.getEntry(_,X)).next(lt=>{const et=v.docVersions.get(X);ae(et!==null),lt.version.compareTo(et)<0&&(k.applyToRemoteDocument(lt,v),lt.isValidDocument()&&(lt.setReadTime(v.commitVersion),I.addEntry(lt)))})}),$.next(()=>y.mutationQueue.removeMutationBatch(_,k))}(i,a,e,h).next(()=>h.apply(a)).next(()=>i.mutationQueue.performConsistencyCheck(a)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(a,l,e.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(y){let _=Ge();for(let v=0;v<y.mutationResults.length;++v)y.mutationResults[v].transformResults.length>0&&(_=_.add(y.batch.mutations[v].key));return _}(e))).next(()=>i.localDocuments.getDocuments(a,l))})}function ew(s){const e=Xt(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",i=>e.Hr.getLastRemoteSnapshotVersion(i))}function nw(s,e){const i=Xt(s);return i.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=Md),i.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}class n_{constructor(){this.activeTargetIds=rb()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iw{constructor(){this.ho=new n_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,a){}addLocalQueryTarget(e,i=!0){return i&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,i,a){this.Po[e]=i}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new n_,Promise.resolve()}handleUserChange(e,i,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rw{To(e){}shutdown(){}}/**
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
 */const i_="ConnectivityMonitor";class r_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){at(i_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){at(i_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yu=null;function pd(){return Yu===null?Yu=function(){return 268435456+Math.round(2147483648*Math.random())}():Yu++,"0x"+Yu.toString(16)}/**
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
 */const Xf="RestConnection",sw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aw{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.po=i+"://"+e.host,this.yo=`projects/${a}/databases/${l}`,this.wo=this.databaseId.database===cc?`project_id=${a}`:`project_id=${a}&database_id=${l}`}bo(e,i,a,l,h){const d=pd(),y=this.So(e,i.toUriEncodedString());at(Xf,`Sending RPC '${e}' ${d}:`,y,a);const _={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(_,l,h),this.vo(e,y,_,a).then(v=>(at(Xf,`Received RPC '${e}' ${d}: `,v),v),v=>{throw Cc(Xf,`RPC '${e}' ${d} failed with error: `,v,"url: ",y,"request:",a),v})}Co(e,i,a,l,h,d){return this.bo(e,i,a,l,h)}Do(e,i,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ja}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>e[h]=l),a&&a.headers.forEach((l,h)=>e[h]=l)}So(e,i){const a=sw[e];return`${this.po}/v1/${i}:${a}`}terminate(){}}/**
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
 */class ow{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const He="WebChannelConnection";class lw extends aw{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,i,a,l){const h=pd();return new Promise((d,y)=>{const _=new W_;_.setWithCredentials(!0),_.listenOnce(J_.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case Wu.NO_ERROR:const I=_.getResponseJson();at(He,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(I)),d(I);break;case Wu.TIMEOUT:at(He,`RPC '${e}' ${h} timed out`),y(new ft(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Wu.HTTP_ERROR:const k=_.getStatus();if(at(He,`RPC '${e}' ${h} failed with status:`,k,"response text:",_.getResponseText()),k>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const $=B==null?void 0:B.error;if($&&$.status&&$.message){const X=function(et){const At=et.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(At)>=0?At:Y.UNKNOWN}($.status);y(new ft(X,$.message))}else y(new ft(Y.UNKNOWN,"Server responded with status "+_.getStatus()))}else y(new ft(Y.UNAVAILABLE,"Connection failed."));break;default:wt()}}finally{at(He,`RPC '${e}' ${h} completed.`)}});const v=JSON.stringify(l);at(He,`RPC '${e}' ${h} sending request:`,l),_.send(i,"POST",v,a,15)})}Wo(e,i,a){const l=pd(),h=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=nv(),y=ev(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Do(_.initMessageHeaders,i,a),_.encodeInitMessageHeaders=!0;const I=h.join("");at(He,`Creating RPC '${e}' stream ${l}: ${I}`,_);const k=d.createWebChannel(I,_);let B=!1,$=!1;const X=new ow({Fo:et=>{$?at(He,`Not sending because RPC '${e}' stream ${l} is closed:`,et):(B||(at(He,`Opening RPC '${e}' stream ${l} transport.`),k.open(),B=!0),at(He,`RPC '${e}' stream ${l} sending:`,et),k.send(et))},Mo:()=>k.close()}),lt=(et,At,ht)=>{et.listen(At,yt=>{try{ht(yt)}catch(Pt){setTimeout(()=>{throw Pt},0)}})};return lt(k,Wo.EventType.OPEN,()=>{$||(at(He,`RPC '${e}' stream ${l} transport opened.`),X.Qo())}),lt(k,Wo.EventType.CLOSE,()=>{$||($=!0,at(He,`RPC '${e}' stream ${l} transport closed`),X.Ko())}),lt(k,Wo.EventType.ERROR,et=>{$||($=!0,Cc(He,`RPC '${e}' stream ${l} transport errored:`,et),X.Ko(new ft(Y.UNAVAILABLE,"The operation could not be completed")))}),lt(k,Wo.EventType.MESSAGE,et=>{var At;if(!$){const ht=et.data[0];ae(!!ht);const yt=ht,Pt=(yt==null?void 0:yt.error)||((At=yt[0])===null||At===void 0?void 0:At.error);if(Pt){at(He,`RPC '${e}' stream ${l} received error:`,Pt);const gt=Pt.status;let Ct=function(S){const C=de[S];if(C!==void 0)return pb(C)}(gt),V=Pt.message;Ct===void 0&&(Ct=Y.INTERNAL,V="Unknown error status: "+gt+" with message "+Pt.message),$=!0,X.Ko(new ft(Ct,V)),k.close()}else at(He,`RPC '${e}' stream ${l} received:`,ht),X.Uo(ht)}}),lt(y,tv.STAT_EVENT,et=>{et.stat===od.PROXY?at(He,`RPC '${e}' stream ${l} detected buffering proxy`):et.stat===od.NOPROXY&&at(He,`RPC '${e}' stream ${l} detected no buffering proxy`)}),setTimeout(()=>{X.$o()},0),X}}function $f(){return typeof document<"u"?document:null}/**
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
 */function Nc(s){return new yb(s,!0)}/**
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
 */class Pv{constructor(e,i,a=1e3,l=1.5,h=6e4){this.Ti=e,this.timerId=i,this.Go=a,this.zo=l,this.jo=h,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const i=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),l=Math.max(0,i-a);l>0&&at("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,l,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const s_="PersistentStream";class uw{constructor(e,i,a,l,h,d,y,_){this.Ti=e,this.n_=a,this.r_=l,this.connection=h,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=y,this.listener=_,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Pv(e,i)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,i){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():i&&i.code===Y.RESOURCE_EXHAUSTED?(Is(i.toString()),Is("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):i&&i.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(i)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),i=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,l])=>{this.i_===i&&this.V_(a,l)},a=>{e(()=>{const l=new ft(Y.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(l)})})}V_(e,i){const a=this.R_(this.i_);this.stream=this.f_(e,i),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(l=>{a(()=>this.m_(l))}),this.stream.onMessage(l=>{a(()=>++this.__==1?this.g_(l):this.onNext(l))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return at(s_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return i=>{this.Ti.enqueueAndForget(()=>this.i_===e?i():(at(s_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cw extends uw{constructor(e,i,a,l,h,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,l,d),this.serializer=h}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,i){return this.connection.Wo("Write",e,i)}g_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const i=wb(e.writeResults,e.commitTime),a=Ia(e.commitTime);return this.listener.v_(a,i)}C_(){const e={};e.database=Ab(this.serializer),this.I_(e)}S_(e){const i={streamToken:this.lastStreamToken,writes:e.map(a=>bb(this.serializer,a))};this.I_(i)}}/**
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
 */class hw{}class fw extends hw{constructor(e,i,a,l){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=a,this.serializer=l,this.F_=!1}M_(){if(this.F_)throw new ft(Y.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.bo(e,gd(i,a),l,h,d)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ft(Y.UNKNOWN,h.toString())})}Co(e,i,a,l,h){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,y])=>this.connection.Co(e,gd(i,a),l,d,y,h)).catch(d=>{throw d.name==="FirebaseError"?(d.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new ft(Y.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class dw{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const i=`Could not reach Cloud Firestore backend. ${e}
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
 */const yl="RemoteStore";class gw{constructor(e,i,a,l,h){this.localStore=e,this.datastore=i,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=h,this.z_.To(d=>{a.enqueueAndForget(async()=>{vl(this)&&(at(yl,"Restarting streams for network reachability change."),await async function(_){const v=Xt(_);v.W_.add(4),await _l(v),v.j_.set("Unknown"),v.W_.delete(4),await Mc(v)}(this))})}),this.j_=new dw(a,l)}}async function Mc(s){if(vl(s))for(const e of s.G_)await e(!0)}async function _l(s){for(const e of s.G_)await e(!1)}function vl(s){return Xt(s).W_.size===0}async function zv(s,e,i){if(!ml(e))throw e;s.W_.add(1),await _l(s),s.j_.set("Offline"),i||(i=()=>ew(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{at(yl,"Retrying IndexedDB access"),await i(),s.W_.delete(1),await Mc(s)})}function jv(s,e){return e().catch(i=>zv(s,i,e))}async function Vc(s){const e=Xt(s),i=jr(e);let a=e.K_.length>0?e.K_[e.K_.length-1].batchId:Md;for(;mw(e);)try{const l=await nw(e.localStore,a);if(l===null){e.K_.length===0&&i.P_();break}a=l.batchId,pw(e,l)}catch(l){await zv(e,l)}Bv(e)&&Hv(e)}function mw(s){return vl(s)&&s.K_.length<10}function pw(s,e){s.K_.push(e);const i=jr(s);i.c_()&&i.b_&&i.S_(e.mutations)}function Bv(s){return vl(s)&&!jr(s).u_()&&s.K_.length>0}function Hv(s){jr(s).start()}async function yw(s){jr(s).C_()}async function _w(s){const e=jr(s);for(const i of s.K_)e.S_(i.mutations)}async function vw(s,e,i){const a=s.K_.shift(),l=Bd.from(a,e,i);await jv(s,()=>s.remoteSyncer.applySuccessfulWrite(l)),await Vc(s)}async function Ew(s,e){e&&jr(s).b_&&await async function(a,l){if(function(d){return mb(d)&&d!==Y.ABORTED}(l.code)){const h=a.K_.shift();jr(a).h_(),await jv(a,()=>a.remoteSyncer.rejectFailedWrite(h.batchId,l)),await Vc(a)}}(s,e),Bv(s)&&Hv(s)}async function a_(s,e){const i=Xt(s);i.asyncQueue.verifyOperationInProgress(),at(yl,"RemoteStore received new credentials");const a=vl(i);i.W_.add(3),await _l(i),a&&i.j_.set("Unknown"),await i.remoteSyncer.handleCredentialChange(e),i.W_.delete(3),await Mc(i)}async function Tw(s,e){const i=Xt(s);e?(i.W_.delete(2),await Mc(i)):e||(i.W_.add(2),await _l(i),i.j_.set("Unknown"))}function jr(s){return s.Y_||(s.Y_=function(i,a,l){const h=Xt(i);return h.M_(),new cw(a,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)}(s.datastore,s.asyncQueue,{xo:()=>Promise.resolve(),No:yw.bind(null,s),Lo:Ew.bind(null,s),D_:_w.bind(null,s),v_:vw.bind(null,s)}),s.G_.push(async e=>{e?(s.Y_.h_(),await Vc(s)):(await s.Y_.stop(),s.K_.length>0&&(at(yl,`Stopping write stream with ${s.K_.length} pending writes`),s.K_=[]))})),s.Y_}/**
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
 */class Fd{constructor(e,i,a,l,h){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=a,this.op=l,this.removalCallback=h,this.deferred=new Ss,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,a,l,h){const d=Date.now()+a,y=new Fd(e,i,d,l,h);return y.start(a),y}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ft(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qv(s,e){if(Is("AsyncQueue",`${e}: ${s}`),ml(s))return new ft(Y.UNAVAILABLE,`${e}: ${s}`);throw s}class Aw{constructor(){this.queries=o_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(i,a){const l=Xt(i),h=l.queries;l.queries=o_(),h.forEach((d,y)=>{for(const _ of y.ta)_.onError(a)})})(this,new ft(Y.ABORTED,"Firestore shutting down"))}}function o_(){return new Ms(s=>Tv(s),Ev)}function Sw(s){s.ia.forEach(e=>{e.next()})}var l_,u_;(u_=l_||(l_={}))._a="default",u_.Cache="cache";const bw="SyncEngine";class ww{constructor(e,i,a,l,h,d){this.localStore=e,this.remoteStore=i,this.eventManager=a,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Ms(y=>Tv(y),Ev),this.qa=new Map,this.Qa=new Set,this.$a=new sn(Et.comparator),this.Ka=new Map,this.Ua=new Hd,this.Wa={},this.Ga=new Map,this.za=Ua.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Rw(s,e,i){const a=Ow(s);try{const l=await function(d,y){const _=Xt(d),v=Oe.now(),I=y.reduce(($,X)=>$.add(X.key),Ge());let k,B;return _.persistence.runTransaction("Locally write mutations","readwrite",$=>{let X=gc(),lt=Ge();return _.ds.getEntries($,I).next(et=>{X=et,X.forEach((At,ht)=>{ht.isValidDocument()||(lt=lt.add(At))})}).next(()=>_.localDocuments.getOverlayedDocuments($,X)).next(et=>{k=et;const At=[];for(const ht of y){const yt=hb(ht,k.get(ht.key).overlayedDocument);yt!=null&&At.push(new Vs(ht.key,yt,dv(yt.value.mapValue),zi.exists(!0)))}return _.mutationQueue.addMutationBatch($,v,At,y)}).next(et=>{B=et;const At=et.applyToLocalDocumentSet(k,lt);return _.documentOverlayCache.saveOverlays($,et.batchId,At)})}).then(()=>({batchId:B.batchId,changes:Sv(k)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(l.batchId),function(d,y,_){let v=d.Wa[d.currentUser.toKey()];v||(v=new sn(Bt)),v=v.insert(y,_),d.Wa[d.currentUser.toKey()]=v}(a,l.batchId,i),await kc(a,l.changes),await Vc(a.remoteStore)}catch(l){const h=qv(l,"Failed to persist write");i.reject(h)}}function c_(s,e,i){const a=Xt(s);if(a.isPrimaryClient&&i===0||!a.isPrimaryClient&&i===1){const l=[];a.ka.forEach((h,d)=>{const y=d.view.sa(e);y.snapshot&&l.push(y.snapshot)}),function(d,y){const _=Xt(d);_.onlineState=y;let v=!1;_.queries.forEach((I,k)=>{for(const B of k.ta)B.sa(y)&&(v=!0)}),v&&Sw(_)}(a.eventManager,e),l.length&&a.La.p_(l),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function Cw(s,e){const i=Xt(s),a=e.batch.batchId;try{const l=await tw(i.localStore,e);Fv(i,a,null),Gv(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),await kc(i,l)}catch(l){await Od(l)}}async function Iw(s,e,i){const a=Xt(s);try{const l=await function(d,y){const _=Xt(d);return _.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let I;return _.mutationQueue.lookupMutationBatch(v,y).next(k=>(ae(k!==null),I=k.keys(),_.mutationQueue.removeMutationBatch(v,k))).next(()=>_.mutationQueue.performConsistencyCheck(v)).next(()=>_.documentOverlayCache.removeOverlaysForBatchId(v,I,y)).next(()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I)).next(()=>_.localDocuments.getDocuments(v,I))})}(a.localStore,e);Fv(a,e,i),Gv(a,e),a.sharedClientState.updateMutationState(e,"rejected",i),await kc(a,l)}catch(l){await Od(l)}}function Gv(s,e){(s.Ga.get(e)||[]).forEach(i=>{i.resolve()}),s.Ga.delete(e)}function Fv(s,e,i){const a=Xt(s);let l=a.Wa[a.currentUser.toKey()];if(l){const h=l.get(e);h&&(i?h.reject(i):h.resolve(),l=l.remove(e)),a.Wa[a.currentUser.toKey()]=l}}async function kc(s,e,i){const a=Xt(s),l=[],h=[],d=[];a.ka.isEmpty()||(a.ka.forEach((y,_)=>{d.push(a.Ha(_,e,i).then(v=>{var I;if((v||i)&&a.isPrimaryClient){const k=v?!v.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;a.sharedClientState.updateQueryState(_.targetId,k?"current":"not-current")}if(v){l.push(v);const k=Gd.Yi(_.targetId,v);h.push(k)}}))}),await Promise.all(d),a.La.p_(l),await async function(_,v){const I=Xt(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",k=>F.forEach(v,B=>F.forEach(B.Hi,$=>I.persistence.referenceDelegate.addReference(k,B.targetId,$)).next(()=>F.forEach(B.Ji,$=>I.persistence.referenceDelegate.removeReference(k,B.targetId,$)))))}catch(k){if(!ml(k))throw k;at(Zb,"Failed to update sequence numbers: "+k)}for(const k of v){const B=k.targetId;if(!k.fromCache){const $=I.Ts.get(B),X=$.snapshotVersion,lt=$.withLastLimboFreeSnapshotVersion(X);I.Ts=I.Ts.insert(B,lt)}}}(a.localStore,h))}async function Dw(s,e){const i=Xt(s);if(!i.currentUser.isEqual(e)){at(bw,"User change. New user:",e.toKey());const a=await Lv(i.localStore,e);i.currentUser=e,function(h,d){h.Ga.forEach(y=>{y.forEach(_=>{_.reject(new ft(Y.CANCELLED,d))})}),h.Ga.clear()}(i,"'waitForPendingWrites' promise is rejected due to a user change."),i.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await kc(i,a.Rs)}}function Ow(s){const e=Xt(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Iw.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,i){return null}nu(e,i){return null}eu(e){return Jb(this.persistence,new $b,e.initialUser,this.serializer)}Xa(e){return new Uv(qd.ri,this.serializer)}Za(e){return new iw}async terminate(){var e,i;(e=this.gcScheduler)===null||e===void 0||e.stop(),(i=this.indexBackfillerScheduler)===null||i===void 0||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class Nw extends _c{constructor(e){super(),this.cacheSizeBytes=e}tu(e,i){ae(this.persistence.referenceDelegate instanceof yc);const a=this.persistence.referenceDelegate.garbageCollector;return new xb(a,e.asyncQueue,i)}Xa(e){const i=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Uv(a=>yc.ri(a,i),this.serializer)}}class yd{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>c_(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dw.bind(null,this.syncEngine),await Tw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Aw}()}createDatastore(e){const i=Nc(e.databaseInfo.databaseId),a=function(h){return new lw(h)}(e.databaseInfo);return function(h,d,y,_){return new fw(h,d,y,_)}(e.authCredentials,e.appCheckCredentials,a,i)}createRemoteStore(e){return function(a,l,h,d,y){return new gw(a,l,h,d,y)}(this.localStore,this.datastore,e.asyncQueue,i=>c_(this.syncEngine,i,0),function(){return r_.D()?new r_:new rw}())}createSyncEngine(e,i){return function(l,h,d,y,_,v,I){const k=new ww(l,h,d,y,_,v);return I&&(k.ja=!0),k}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await async function(l){const h=Xt(l);at(yl,"RemoteStore shutting down."),h.W_.add(5),await _l(h),h.z_.shutdown(),h.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(i=this.eventManager)===null||i===void 0||i.terminate()}}yd.provider={build:()=>new yd};/**
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
 */const Br="FirestoreClient";class Mw{constructor(e,i,a,l,h){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=a,this.databaseInfo=l,this.user=qe.UNAUTHENTICATED,this.clientId=rv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(a,async d=>{at(Br,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(a,d=>(at(Br,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ss;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){const a=qv(i,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Zf(s,e){s.asyncQueue.verifyOperationInProgress(),at(Br,"Initializing OfflineComponentProvider");const i=s.configuration;await e.initialize(i);let a=i.initialUser;s.setCredentialChangeListener(async l=>{a.isEqual(l)||(await Lv(e.localStore,l),a=l)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function h_(s,e){s.asyncQueue.verifyOperationInProgress();const i=await Vw(s);at(Br,"Initializing OnlineComponentProvider"),await e.initialize(i,s.configuration),s.setCredentialChangeListener(a=>a_(e.remoteStore,a)),s.setAppCheckTokenChangeListener((a,l)=>a_(e.remoteStore,l)),s._onlineComponents=e}async function Vw(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){at(Br,"Using user provided OfflineComponentProvider");try{await Zf(s,s._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!function(l){return l.name==="FirebaseError"?l.code===Y.FAILED_PRECONDITION||l.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11}(i))throw i;Cc("Error using user provided cache. Falling back to memory cache: "+i),await Zf(s,new _c)}}else at(Br,"Using default OfflineComponentProvider"),await Zf(s,new Nw(void 0));return s._offlineComponents}async function kw(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(at(Br,"Using user provided OnlineComponentProvider"),await h_(s,s._uninitializedComponentsProvider._online)):(at(Br,"Using default OnlineComponentProvider"),await h_(s,new yd))),s._onlineComponents}function xw(s){return kw(s).then(e=>e.syncEngine)}/**
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
 */function Kv(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
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
 */const f_=new Map;/**
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
 */function Qv(s,e,i){if(!i)throw new ft(Y.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Uw(s,e,i,a){if(e===!0&&a===!0)throw new ft(Y.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}function d_(s){if(!Et.isDocumentKey(s))throw new ft(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function g_(s){if(Et.isDocumentKey(s))throw new ft(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Kd(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":wt()}function Yv(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new ft(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Kd(s);throw new ft(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return s}/**
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
 */const Xv="firestore.googleapis.com",m_=!0;class p_{constructor(e){var i,a;if(e.host===void 0){if(e.ssl!==void 0)throw new ft(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xv,this.ssl=m_}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:m_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Vb)throw new ft(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Uw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kv((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(h){if(h.timeoutSeconds!==void 0){if(isNaN(h.timeoutSeconds))throw new ft(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (must not be NaN)`);if(h.timeoutSeconds<5)throw new ft(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (minimum allowed value is 5)`);if(h.timeoutSeconds>30)throw new ft(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${h.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,l){return a.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xc{constructor(e,i,a,l){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new p_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ft(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ft(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new p_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new mS;switch(a.type){case"firstParty":return new vS(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new ft(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const a=f_.get(i);a&&(at("ComponentProvider","Removing Datastore"),f_.delete(i),a.terminate())}(this),Promise.resolve()}}function Lw(s,e,i,a={}){var l;const h=(s=Yv(s,xc))._getSettings(),d=Object.assign(Object.assign({},h),{emulatorOptions:s._getEmulatorOptions()}),y=`${e}:${i}`;h.host!==Xv&&h.host!==y&&Cc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:y,ssl:!1,emulatorOptions:a});if(!Rs(_,d)&&(s._setSettings(_),a.mockUserToken)){let v,I;if(typeof a.mockUserToken=="string")v=a.mockUserToken,I=qe.MOCK_USER;else{v=PT(a.mockUserToken,(l=s._app)===null||l===void 0?void 0:l.options.projectId);const k=a.mockUserToken.sub||a.mockUserToken.user_id;if(!k)throw new ft(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new qe(k)}s._authCredentials=new pS(new iv(v,I))}}/**
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
 */class Qd{constructor(e,i,a){this.converter=i,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Qd(this.firestore,e,this._query)}}class ji{constructor(e,i,a){this.converter=i,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ji(this.firestore,e,this._key)}}class Ur extends Qd{constructor(e,i,a){super(e,i,XS(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ji(this.firestore,null,new Et(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function Pw(s,e,...i){if(s=On(s),Qv("collection","path",e),s instanceof xc){const a=se.fromString(e,...i);return g_(a),new Ur(s,null,a)}{if(!(s instanceof ji||s instanceof Ur))throw new ft(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(e,...i));return g_(a),new Ur(s.firestore,null,a)}}function zw(s,e,...i){if(s=On(s),arguments.length===1&&(e=rv.newId()),Qv("doc","path",e),s instanceof xc){const a=se.fromString(e,...i);return d_(a),new ji(s,null,new Et(a))}{if(!(s instanceof ji||s instanceof Ur))throw new ft(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=s._path.child(se.fromString(e,...i));return d_(a),new ji(s.firestore,s instanceof Ur?s.converter:null,new Et(a))}}/**
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
 */const y_="AsyncQueue";class __{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Pv(this,"async_queue_retry"),this.bu=()=>{const a=$f();a&&at(y_,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.Su=e;const i=$f();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const i=$f();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Ss;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ml(e))throw e;at(y_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const i=this.Su.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const l=function(d){let y=d.message||"";return d.stack&&(y=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),y}(a);throw Is("INTERNAL UNHANDLED ERROR: ",l),a}).then(a=>(this.pu=!1,a))));return this.Su=i,i}enqueueAfterDelay(e,i,a){this.Du(),this.wu.indexOf(e)>-1&&(i=0);const l=Fd.createAndSchedule(this,e,i,a,h=>this.Fu(h));return this.fu.push(l),l}Du(){this.gu&&wt()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const i of this.fu)if(i.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((i,a)=>i.targetTimeMs-a.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const i=this.fu.indexOf(e);this.fu.splice(i,1)}}class $v extends xc{constructor(e,i,a,l){super(e,i,a,l),this.type="firestore",this._queue=new __,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new __(e),this._firestoreClient=void 0,await e}}}function jw(s,e){const i=typeof s=="object"?s:Cd(),a=typeof s=="string"?s:cc,l=gl(i,"firestore").getImmediate({identifier:a});if(!l._initialized){const h=LT("firestore");h&&Lw(l,...h)}return l}function Bw(s){if(s._terminated)throw new ft(Y.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||Hw(s),s._firestoreClient}function Hw(s){var e,i,a;const l=s._freezeSettings(),h=function(y,_,v,I){return new kS(y,_,v,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Kv(I.experimentalLongPollingOptions),I.useFetchStreams)}(s._databaseId,((e=s._app)===null||e===void 0?void 0:e.options.appId)||"",s._persistenceKey,l);s._componentsProvider||!((i=l.localCache)===null||i===void 0)&&i._offlineComponentProvider&&(!((a=l.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(s._componentsProvider={_offline:l.localCache._offlineComponentProvider,_online:l.localCache._onlineComponentProvider}),s._firestoreClient=new Mw(s._authCredentials,s._appCheckCredentials,s._queue,h,s._componentsProvider&&function(y){const _=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(_),_online:_}}(s._componentsProvider))}/**
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
 */class cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cl(ai.fromBase64String(e))}catch(i){throw new ft(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e){return new cl(ai.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zv{constructor(...e){for(let i=0;i<e.length;++i)if(e[i].length===0)throw new ft(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wv{constructor(e){this._methodName=e}}/**
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
 */class Jv{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new ft(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new ft(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Bt(this._lat,e._lat)||Bt(this._long,e._long)}}/**
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
 */class t0{constructor(e){this._values=(e||[]).map(i=>i)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,l){if(a.length!==l.length)return!1;for(let h=0;h<a.length;++h)if(a[h]!==l[h])return!1;return!0}(this._values,e._values)}}/**
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
 */const qw=/^__.*__$/;class Gw{constructor(e,i,a){this.data=e,this.fieldMask=i,this.fieldTransforms=a}toMutation(e,i){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,i,this.fieldTransforms):new pl(e,this.data,i,this.fieldTransforms)}}function e0(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wt()}}class Yd{constructor(e,i,a,l,h,d){this.settings=e,this.databaseId=i,this.serializer=a,this.ignoreUndefinedProperties=l,h===void 0&&this.Bu(),this.fieldTransforms=h||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.ku({path:a,Qu:!1});return l.$u(e),l}Ku(e){var i;const a=(i=this.path)===null||i===void 0?void 0:i.child(e),l=this.ku({path:a,Qu:!1});return l.Bu(),l}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return vc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(i=>e.isPrefixOf(i))!==void 0||this.fieldTransforms.find(i=>e.isPrefixOf(i.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(e0(this.Lu)&&qw.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Fw{constructor(e,i,a){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=a||Nc(e)}ju(e,i,a,l=!1){return new Yd({Lu:e,methodName:i,zu:a,path:Le.emptyPath(),Qu:!1,Gu:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kw(s){const e=s._freezeSettings(),i=Nc(s._databaseId);return new Fw(s._databaseId,!!e.ignoreUndefinedProperties,i)}function Qw(s,e,i,a,l,h={}){const d=s.ju(h.merge||h.mergeFields?2:0,e,i,l);s0("Data must be an object, but it was:",d,a);const y=i0(a,d);let _,v;if(h.merge)_=new zn(d.fieldMask),v=d.fieldTransforms;else if(h.mergeFields){const I=[];for(const k of h.mergeFields){const B=Yw(e,k,i);if(!d.contains(B))throw new ft(Y.INVALID_ARGUMENT,`Field '${B}' is specified in your field mask but missing from your input data.`);Zw(I,B)||I.push(B)}_=new zn(I),v=d.fieldTransforms.filter(k=>_.covers(k.field))}else _=null,v=d.fieldTransforms;return new Gw(new Pn(y),_,v)}function n0(s,e){if(r0(s=On(s)))return s0("Unsupported field value:",e,s),i0(s,e);if(s instanceof Wv)return function(a,l){if(!e0(l.Lu))throw l.Wu(`${a._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Wu(`${a._methodName}() is not currently supported inside arrays`);const h=a._toFieldTransform(l);h&&l.fieldTransforms.push(h)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(a,l){const h=[];let d=0;for(const y of a){let _=n0(y,l.Uu(d));_==null&&(_={nullValue:"NULL_VALUE"}),h.push(_),d++}return{arrayValue:{values:h}}}(s,e)}return function(a,l){if((a=On(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return sb(l.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const h=Oe.fromDate(a);return{timestampValue:dd(l.serializer,h)}}if(a instanceof Oe){const h=new Oe(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:dd(l.serializer,h)}}if(a instanceof Jv)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof cl)return{bytesValue:_b(l.serializer,a._byteString)};if(a instanceof ji){const h=l.databaseId,d=a.firestore._databaseId;if(!d.isEqual(h))throw l.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:Vv(a.firestore._databaseId||l.databaseId,a._key.path)}}if(a instanceof t0)return function(d,y){return{mapValue:{fields:{[hv]:{stringValue:fv},[ld]:{arrayValue:{values:d.toArray().map(v=>{if(typeof v!="number")throw y.Wu("VectorValues must only contain numeric values.");return jd(y.serializer,v)})}}}}}}(a,l);throw l.Wu(`Unsupported field value: ${Kd(a)}`)}(s,e)}function i0(s,e){const i={};return av(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ba(s,(a,l)=>{const h=n0(l,e.qu(a));h!=null&&(i[a]=h)}),{mapValue:{fields:i}}}function r0(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Oe||s instanceof Jv||s instanceof cl||s instanceof ji||s instanceof Wv||s instanceof t0)}function s0(s,e,i){if(!r0(i)||!function(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}(i)){const a=Kd(i);throw a==="an object"?e.Wu(s+" a custom object"):e.Wu(s+" "+a)}}function Yw(s,e,i){if((e=On(e))instanceof Zv)return e._internalPath;if(typeof e=="string")return $w(s,e);throw vc("Field path arguments must be of type string or ",s,!1,void 0,i)}const Xw=new RegExp("[~\\*/\\[\\]]");function $w(s,e,i){if(e.search(Xw)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,i);try{return new Zv(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,i)}}function vc(s,e,i,a,l){const h=a&&!a.isEmpty(),d=l!==void 0;let y=`Function ${e}() called with invalid data`;i&&(y+=" (via `toFirestore()`)"),y+=". ";let _="";return(h||d)&&(_+=" (found",h&&(_+=` in field ${a}`),d&&(_+=` in document ${l}`),_+=")"),new ft(Y.INVALID_ARGUMENT,y+s+_)}function Zw(s,e){return s.some(i=>i.isEqual(e))}/**
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
 */function Ww(s,e,i){let a;return a=s?s.toFirestore(e):e,a}function Jw(s,e){const i=Yv(s.firestore,$v),a=zw(s),l=Ww(s.converter,e);return tR(i,[Qw(Kw(s.firestore),"addDoc",a._key,l,s.converter!==null,{}).toMutation(a._key,zi.exists(!1))]).then(()=>a)}function tR(s,e){return function(a,l){const h=new Ss;return a.asyncQueue.enqueueAndForget(async()=>Rw(await xw(a),l,h)),h.promise}(Bw(s),e)}(function(e,i=!0){(function(l){ja=l})(za),Lr(new Bi("firestore",(a,{instanceIdentifier:l,options:h})=>{const d=a.getProvider("app").getImmediate(),y=new $v(new yS(a.getProvider("auth-internal")),new ES(d,a.getProvider("app-check-internal")),function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ft(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(v.options.projectId,I)}(d,l),d);return h=Object.assign({useFetchStreams:i},h),y._setSettings(h),y},"PUBLIC").setMultipleInstances(!0)),Pi(Vy,ky,e),Pi(Vy,ky,"esm2017")})();function Xd(s,e){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&e.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(s);l<a.length;l++)e.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(s,a[l])&&(i[a[l]]=s[a[l]]);return i}function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eR=a0,o0=new Pa("auth","Firebase",a0());/**
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
 */const Ec=new Rc("@firebase/auth");function nR(s,...e){Ec.logLevel<=Rt.WARN&&Ec.warn(`Auth (${za}): ${s}`,...e)}function nc(s,...e){Ec.logLevel<=Rt.ERROR&&Ec.error(`Auth (${za}): ${s}`,...e)}/**
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
 */function qi(s,...e){throw $d(s,...e)}function ri(s,...e){return $d(s,...e)}function l0(s,e,i){const a=Object.assign(Object.assign({},eR()),{[e]:i});return new Pa("auth","Firebase",a).create(e,{appName:s.name})}function ws(s){return l0(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $d(s,...e){if(typeof s!="string"){const i=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return o0.create(s,...e)}function dt(s,e,...i){if(!s)throw $d(e,...i)}function xi(s){const e="INTERNAL ASSERTION FAILED: "+s;throw nc(e),new Error(e)}function Gi(s,e){s||xi(e)}/**
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
 */function _d(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function iR(){return v_()==="http:"||v_()==="https:"}function v_(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
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
 */function rR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iR()||HT()||"connection"in navigator)?navigator.onLine:!0}function sR(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
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
 */class El{constructor(e,i){this.shortDelay=e,this.longDelay=i,Gi(i>e,"Short delay should be less than long delay!"),this.isMobile=zT()||qT()}get(){return rR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(s,e){Gi(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class u0{static initialize(e,i,a){this.fetchImpl=e,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oR=new El(3e4,6e4);function Wd(s,e){return s.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:s.tenantId}):e}async function Ha(s,e,i,a,l={}){return c0(s,l,async()=>{let h={},d={};a&&(e==="GET"?d=a:h={body:JSON.stringify(a)});const y=dl(Object.assign({key:s.config.apiKey},d)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const v=Object.assign({method:e,headers:_},h);return BT()||(v.referrerPolicy="no-referrer"),u0.fetch()(h0(s,s.config.apiHost,i,y),v)})}async function c0(s,e,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},aR),e);try{const l=new uR(s),h=await Promise.race([i(),l.promise]);l.clearNetworkTimeout();const d=await h.json();if("needConfirmation"in d)throw Xu(s,"account-exists-with-different-credential",d);if(h.ok&&!("errorMessage"in d))return d;{const y=h.ok?d.errorMessage:d.error.message,[_,v]=y.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(s,"credential-already-in-use",d);if(_==="EMAIL_EXISTS")throw Xu(s,"email-already-in-use",d);if(_==="USER_DISABLED")throw Xu(s,"user-disabled",d);const I=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw l0(s,I,v);qi(s,I)}}catch(l){if(l instanceof Fi)throw l;qi(s,"network-request-failed",{message:String(l)})}}async function lR(s,e,i,a,l={}){const h=await Ha(s,e,i,a,l);return"mfaPendingCredential"in h&&qi(s,"multi-factor-auth-required",{_serverResponse:h}),h}function h0(s,e,i,a){const l=`${e}${i}?${a}`;return s.config.emulator?Zd(s.config,l):`${s.config.apiScheme}://${l}`}class uR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(ri(this.auth,"network-request-failed")),oR.get())})}}function Xu(s,e,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const l=ri(s,e,a);return l.customData._tokenResponse=i,l}/**
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
 */async function cR(s,e){return Ha(s,"POST","/v1/accounts:delete",e)}async function f0(s,e){return Ha(s,"POST","/v1/accounts:lookup",e)}/**
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
 */function il(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hR(s,e=!1){const i=On(s),a=await i.getIdToken(e),l=Jd(a);dt(l&&l.exp&&l.auth_time&&l.iat,i.auth,"internal-error");const h=typeof l.firebase=="object"?l.firebase:void 0,d=h==null?void 0:h.sign_in_provider;return{claims:l,token:a,authTime:il(Wf(l.auth_time)),issuedAtTime:il(Wf(l.iat)),expirationTime:il(Wf(l.exp)),signInProvider:d||null,signInSecondFactor:(h==null?void 0:h.sign_in_second_factor)||null}}function Wf(s){return Number(s)*1e3}function Jd(s){const[e,i,a]=s.split(".");if(e===void 0||i===void 0||a===void 0)return nc("JWT malformed, contained fewer than 3 sections"),null;try{const l=H_(i);return l?JSON.parse(l):(nc("Failed to decode base64 JWT payload"),null)}catch(l){return nc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function E_(s){const e=Jd(s);return dt(e,"internal-error"),dt(typeof e.exp<"u","internal-error"),dt(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hl(s,e,i=!1){if(i)return e;try{return await e}catch(a){throw a instanceof Fi&&fR(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function fR({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
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
 */class dR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const l=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vd{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Tc(s){var e;const i=s.auth,a=await s.getIdToken(),l=await hl(s,f0(i,{idToken:a}));dt(l==null?void 0:l.users.length,i,"internal-error");const h=l.users[0];s._notifyReloadListener(h);const d=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?d0(h.providerUserInfo):[],y=mR(s.providerData,d),_=s.isAnonymous,v=!(s.email&&h.passwordHash)&&!(y!=null&&y.length),I=_?v:!1,k={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:y,metadata:new vd(h.createdAt,h.lastLoginAt),isAnonymous:I};Object.assign(s,k)}async function gR(s){const e=On(s);await Tc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mR(s,e){return[...s.filter(a=>!e.some(l=>l.providerId===a.providerId)),...e]}function d0(s){return s.map(e=>{var{providerId:i}=e,a=Xd(e,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function pR(s,e){const i=await c0(s,{},async()=>{const a=dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:h}=s.config,d=h0(s,l,"/v1/token",`key=${h}`),y=await s._getAdditionalHeaders();return y["Content-Type"]="application/x-www-form-urlencoded",u0.fetch()(d,{method:"POST",headers:y,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function yR(s,e){return Ha(s,"POST","/v2/accounts:revokeToken",Wd(s,e))}/**
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
 */class Da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){dt(e.idToken,"internal-error"),dt(typeof e.idToken<"u","internal-error"),dt(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){dt(e.length!==0,"internal-error");const i=E_(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(dt(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:a,refreshToken:l,expiresIn:h}=await pR(e,i);this.updateTokensAndExpiration(a,l,Number(h))}updateTokensAndExpiration(e,i,a){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,i){const{refreshToken:a,accessToken:l,expirationTime:h}=i,d=new Da;return a&&(dt(typeof a=="string","internal-error",{appName:e}),d.refreshToken=a),l&&(dt(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),h&&(dt(typeof h=="number","internal-error",{appName:e}),d.expirationTime=h),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Da,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
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
 */function Dr(s,e){dt(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Ui{constructor(e){var{uid:i,auth:a,stsTokenManager:l}=e,h=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new vd(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const i=await hl(this,this.stsTokenManager.getToken(this.auth,e));return dt(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return hR(this,e)}reload(){return gR(this)}_assign(e){this!==e&&(dt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){dt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),i&&await Tc(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ii(this.auth.app))return Promise.reject(ws(this.auth));const e=await this.getIdToken();return await hl(this,cR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var a,l,h,d,y,_,v,I;const k=(a=i.displayName)!==null&&a!==void 0?a:void 0,B=(l=i.email)!==null&&l!==void 0?l:void 0,$=(h=i.phoneNumber)!==null&&h!==void 0?h:void 0,X=(d=i.photoURL)!==null&&d!==void 0?d:void 0,lt=(y=i.tenantId)!==null&&y!==void 0?y:void 0,et=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,At=(v=i.createdAt)!==null&&v!==void 0?v:void 0,ht=(I=i.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:yt,emailVerified:Pt,isAnonymous:gt,providerData:Ct,stsTokenManager:V}=i;dt(yt&&V,e,"internal-error");const R=Da.fromJSON(this.name,V);dt(typeof yt=="string",e,"internal-error"),Dr(k,e.name),Dr(B,e.name),dt(typeof Pt=="boolean",e,"internal-error"),dt(typeof gt=="boolean",e,"internal-error"),Dr($,e.name),Dr(X,e.name),Dr(lt,e.name),Dr(et,e.name),Dr(At,e.name),Dr(ht,e.name);const S=new Ui({uid:yt,auth:e,email:B,emailVerified:Pt,displayName:k,isAnonymous:gt,photoURL:X,phoneNumber:$,tenantId:lt,stsTokenManager:R,createdAt:At,lastLoginAt:ht});return Ct&&Array.isArray(Ct)&&(S.providerData=Ct.map(C=>Object.assign({},C))),et&&(S._redirectEventId=et),S}static async _fromIdTokenResponse(e,i,a=!1){const l=new Da;l.updateFromServerResponse(i);const h=new Ui({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a});return await Tc(h),h}static async _fromGetAccountInfoResponse(e,i,a){const l=i.users[0];dt(l.localId!==void 0,"internal-error");const h=l.providerUserInfo!==void 0?d0(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!(h!=null&&h.length),y=new Da;y.updateFromIdToken(a);const _=new Ui({uid:l.localId,auth:e,stsTokenManager:y,isAnonymous:d}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new vd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(h!=null&&h.length)};return Object.assign(_,v),_}}/**
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
 */const T_=new Map;function Li(s){Gi(s instanceof Function,"Expected a class definition");let e=T_.get(s);return e?(Gi(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,T_.set(s,e),e)}/**
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
 */class g0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}g0.type="NONE";const A_=g0;/**
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
 */function ic(s,e,i){return`firebase:${s}:${e}:${i}`}class Oa{constructor(e,i,a){this.persistence=e,this.auth=i,this.userKey=a;const{config:l,name:h}=this.auth;this.fullUserKey=ic(this.userKey,l.apiKey,h),this.fullPersistenceKey=ic("persistence",l.apiKey,h),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,a="authUser"){if(!i.length)return new Oa(Li(A_),e,a);const l=(await Promise.all(i.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let h=l[0]||Li(A_);const d=ic(a,e.config.apiKey,e.name);let y=null;for(const v of i)try{const I=await v._get(d);if(I){const k=Ui._fromJSON(e,I);v!==h&&(y=k),h=v;break}}catch{}const _=l.filter(v=>v._shouldAllowMigration);return!h._shouldAllowMigration||!_.length?new Oa(h,e,a):(h=_[0],y&&await h._set(d,y.toJSON()),await Promise.all(i.map(async v=>{if(v!==h)try{await v._remove(d)}catch{}})),new Oa(h,e,a))}}/**
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
 */function S_(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(T0(e))return"Webos";if(p0(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(v0(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function m0(s=Fe()){return/firefox\//i.test(s)}function p0(s=Fe()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(s=Fe()){return/crios\//i.test(s)}function _0(s=Fe()){return/iemobile/i.test(s)}function v0(s=Fe()){return/android/i.test(s)}function E0(s=Fe()){return/blackberry/i.test(s)}function T0(s=Fe()){return/webos/i.test(s)}function tg(s=Fe()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function _R(s=Fe()){var e;return tg(s)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vR(){return GT()&&document.documentMode===10}function A0(s=Fe()){return tg(s)||v0(s)||T0(s)||E0(s)||/windows phone/i.test(s)||_0(s)}/**
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
 */function S0(s,e=[]){let i;switch(s){case"Browser":i=S_(Fe());break;case"Worker":i=`${S_(Fe())}-${s}`;break;default:i=s}const a=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${za}/${a}`}/**
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
 */class ER{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const a=h=>new Promise((d,y)=>{try{const _=e(h);d(_)}catch(_){y(_)}});a.onAbort=i,this.queue.push(a);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const a of this.queue)await a(e),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const l of i)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function TR(s,e={}){return Ha(s,"GET","/v2/passwordPolicy",Wd(s,e))}/**
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
 */const AR=6;class SR{constructor(e){var i,a,l,h;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=d.minPasswordLength)!==null&&i!==void 0?i:AR,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(h=e.forceUpgradeOnSignin)!==null&&h!==void 0?h:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,a,l,h,d,y;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,_),this.validatePasswordCharacterOptions(e,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(a=_.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(l=_.containsLowercaseLetter)!==null&&l!==void 0?l:!0),_.isValid&&(_.isValid=(h=_.containsUppercaseLetter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(d=_.containsNumericCharacter)!==null&&d!==void 0?d:!0),_.isValid&&(_.isValid=(y=_.containsNonAlphanumericCharacter)!==null&&y!==void 0?y:!0),_}validatePasswordLengthOptions(e,i){const a=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=e.length>=a),l&&(i.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let l=0;l<e.length;l++)a=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,i,a,l,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
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
 */class bR{constructor(e,i,a,l){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new ER(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=Li(i)),this._initializationPromise=this.queue(async()=>{var a,l;if(!this._deleted&&(this.persistenceManager=await Oa.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await f0(this,{idToken:e}),a=await Ui._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ii(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(y=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(y,y))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let l=a,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,y=l==null?void 0:l._redirectEventId,_=await this.tryRedirectSignIn(e);(!d||d===y)&&(_!=null&&_.user)&&(l=_.user,h=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(l)}catch(d){l=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return dt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Tc(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ii(this.app))return Promise.reject(ws(this));const i=e?On(e):null;return i&&dt(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&dt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ii(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ii(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Li(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TR(this),i=new SR(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pa("auth","Firebase",e())}onAuthStateChanged(e,i,a){return this.registerStateListener(this.authStateSubscription,e,i,a)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,a){return this.registerStateListener(this.idTokenSubscription,e,i,a)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await yR(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const a=await this.getOrInitRedirectPersistenceManager(i);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&Li(e)||this._popupRedirectResolver;dt(i,this,"argument-error"),this.redirectPersistenceManager=await Oa.create(this,[Li(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,a,l){if(this._deleted)return()=>{};const h=typeof i=="function"?i:i.next.bind(i);let d=!1;const y=this._isInitialized?Promise.resolve():this._initializationPromise;if(dt(y,this,"internal-error"),y.then(()=>{d||h(this.currentUser)}),typeof i=="function"){const _=e.addObserver(i,a,l);return()=>{d=!0,_()}}else{const _=e.addObserver(i);return()=>{d=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return dt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const l=await this._getAppCheckToken();return l&&(i["X-Firebase-AppCheck"]=l),i}async _getAppCheckToken(){var e;if(ii(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&nR(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function eg(s){return On(s)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZT(i=>this.observer=i)}get next(){return dt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ng={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wR(s){ng=s}function RR(s){return ng.loadJS(s)}function CR(){return ng.gapiScript}function IR(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DR(s,e){const i=gl(s,"auth");if(i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(Rs(h,e??{}))return l;qi(l,"already-initialized")}return i.initialize({options:e})}function OR(s,e){const i=(e==null?void 0:e.persistence)||[],a=(Array.isArray(i)?i:[i]).map(Li);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function NR(s,e,i){const a=eg(s);dt(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const l=!1,h=b0(e),{host:d,port:y}=MR(e),_=y===null?"":`:${y}`,v={url:`${h}//${d}${_}/`},I=Object.freeze({host:d,port:y,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!a._canInitEmulator){dt(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),dt(Rs(v,a.config.emulator)&&Rs(I,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=v,a.emulatorConfig=I,a.settings.appVerificationDisabledForTesting=!0,VR()}function b0(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function MR(s){const e=b0(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(a);if(l){const h=l[1];return{host:h,port:w_(a.substr(h.length+1))}}else{const[h,d]=a.split(":");return{host:h,port:w_(d)}}}function w_(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function VR(){function s(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
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
 */class w0{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return xi("not implemented")}_getIdTokenResponse(e){return xi("not implemented")}_linkToIdToken(e,i){return xi("not implemented")}_getReauthenticationResolver(e){return xi("not implemented")}}/**
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
 */async function Na(s,e){return lR(s,"POST","/v1/accounts:signInWithIdp",Wd(s,e))}/**
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
 */const kR="http://localhost";class Ns extends w0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):qi("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:l}=i,h=Xd(i,["providerId","signInMethod"]);if(!a||!l)return null;const d=new Ns(a,l);return d.idToken=h.idToken||void 0,d.accessToken=h.accessToken||void 0,d.secret=h.secret,d.nonce=h.nonce,d.pendingToken=h.pendingToken||null,d}_getIdTokenResponse(e){const i=this.buildRequest();return Na(e,i)}_linkToIdToken(e,i){const a=this.buildRequest();return a.idToken=i,Na(e,a)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,Na(e,i)}buildRequest(){const e={requestUri:kR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=dl(i)}return e}}/**
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
 */class R0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Tl extends R0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Or extends Tl{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.FACEBOOK_SIGN_IN_METHOD="facebook.com";Or.PROVIDER_ID="facebook.com";/**
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
 */class Nr extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Ns._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:a}=e;if(!i&&!a)return null;try{return Nr.credential(i,a)}catch{return null}}}Nr.GOOGLE_SIGN_IN_METHOD="google.com";Nr.PROVIDER_ID="google.com";/**
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
 */class Mr extends Tl{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mr.credential(e.oauthAccessToken)}catch{return null}}}Mr.GITHUB_SIGN_IN_METHOD="github.com";Mr.PROVIDER_ID="github.com";/**
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
 */class Vr extends Tl{constructor(){super("twitter.com")}static credential(e,i){return Ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=e;if(!i||!a)return null;try{return Vr.credential(i,a)}catch{return null}}}Vr.TWITTER_SIGN_IN_METHOD="twitter.com";Vr.PROVIDER_ID="twitter.com";/**
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
 */class La{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,a,l=!1){const h=await Ui._fromIdTokenResponse(e,a,l),d=R_(a);return new La({user:h,providerId:d,_tokenResponse:a,operationType:i})}static async _forOperation(e,i,a){await e._updateTokensIfNecessary(a,!0);const l=R_(a);return new La({user:e,providerId:l,_tokenResponse:a,operationType:i})}}function R_(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
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
 */class Ac extends Fi{constructor(e,i,a,l){var h;super(i.code,i.message),this.operationType=a,this.user=l,Object.setPrototypeOf(this,Ac.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,i,a,l){return new Ac(e,i,a,l)}}function C0(s,e,i,a){return(e==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?Ac._fromErrorAndOperation(s,h,e,a):h})}async function xR(s,e,i=!1){const a=await hl(s,e._linkToIdToken(s.auth,await s.getIdToken()),i);return La._forOperation(s,"link",a)}/**
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
 */async function UR(s,e,i=!1){const{auth:a}=s;if(ii(a.app))return Promise.reject(ws(a));const l="reauthenticate";try{const h=await hl(s,C0(a,l,e,s),i);dt(h.idToken,a,"internal-error");const d=Jd(h.idToken);dt(d,a,"internal-error");const{sub:y}=d;return dt(s.uid===y,a,"user-mismatch"),La._forOperation(s,l,h)}catch(h){throw(h==null?void 0:h.code)==="auth/user-not-found"&&qi(a,"user-mismatch"),h}}/**
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
 */async function LR(s,e,i=!1){if(ii(s.app))return Promise.reject(ws(s));const a="signIn",l=await C0(s,a,e),h=await La._fromIdTokenResponse(s,a,l);return i||await s._updateCurrentUser(h.user),h}function PR(s,e,i,a){return On(s).onIdTokenChanged(e,i,a)}function zR(s,e,i){return On(s).beforeAuthStateChanged(e,i)}const Sc="__sak";/**
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
 */class I0{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(Sc,"1"),this.storage.removeItem(Sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const jR=1e3,BR=10;class D0 extends I0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),l=this.localCache[i];a!==l&&e(i,l,a)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((d,y,_)=>{this.notifyListeners(d,_)});return}const a=e.key;i?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(a);!i&&this.localCache[a]===d||this.notifyListeners(a,d)},h=this.storage.getItem(a);vR()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,BR):l()}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:a}),!0)})},jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}D0.type="LOCAL";const HR=D0;/**
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
 */class O0 extends I0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}O0.type="SESSION";const N0=O0;/**
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
 */function qR(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(l=>l.isListeningto(e));if(i)return i;const a=new Uc(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:a,eventType:l,data:h}=i.data,d=this.handlersMap[l];if(!(d!=null&&d.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:l});const y=Array.from(d).map(async v=>v(i.origin,h)),_=await qR(y);i.ports[0].postMessage({status:"done",eventId:a,eventType:l,response:_})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
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
 */function ig(s="",e=10){let i="";for(let a=0;a<e;a++)i+=Math.floor(Math.random()*10);return s+i}/**
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
 */class GR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,a=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let h,d;return new Promise((y,_)=>{const v=ig("",20);l.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},a);d={messageChannel:l,onMessage(k){const B=k;if(B.data.eventId===v)switch(B.data.status){case"ack":clearTimeout(I),h=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),y(B.data.response);break;default:clearTimeout(I),clearTimeout(h),_(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:v,data:i},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
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
 */function si(){return window}function FR(s){si().location.href=s}/**
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
 */function M0(){return typeof si().WorkerGlobalScope<"u"&&typeof si().importScripts=="function"}async function KR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function YR(){return M0()?self:null}/**
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
 */const V0="firebaseLocalStorageDb",XR=1,bc="firebaseLocalStorage",k0="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Lc(s,e){return s.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function $R(){const s=indexedDB.deleteDatabase(V0);return new Al(s).toPromise()}function Ed(){const s=indexedDB.open(V0,XR);return new Promise((e,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(bc,{keyPath:k0})}catch(l){i(l)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(bc)?e(a):(a.close(),await $R(),e(await Ed()))})})}async function C_(s,e,i){const a=Lc(s,!0).put({[k0]:e,value:i});return new Al(a).toPromise()}async function ZR(s,e){const i=Lc(s,!1).get(e),a=await new Al(i).toPromise();return a===void 0?null:a.value}function I_(s,e){const i=Lc(s,!0).delete(e);return new Al(i).toPromise()}const WR=800,JR=3;class x0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ed(),this.db)}async _withRetries(e){let i=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(i++>JR)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(YR()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await KR(),!this.activeServiceWorker)return;this.sender=new GR(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ed();return await C_(e,Sc,"1"),await I_(e,Sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>C_(a,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(a=>ZR(a,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>I_(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const h=Lc(l,!1).getAll();return new Al(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(e.length!==0)for(const{fbase_key:l,value:h}of e)a.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(h)&&(this.notifyListeners(l,h),i.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!a.has(l)&&(this.notifyListeners(l,null),i.push(l));return i}notifyListeners(e,i){this.localCache[e]=i;const a=this.listeners[e];if(a)for(const l of Array.from(a))l(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x0.type="LOCAL";const t1=x0;new El(3e4,6e4);/**
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
 */function e1(s,e){return e?Li(e):(dt(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
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
 */class rg extends w0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Na(e,this._buildIdpRequest())}_linkToIdToken(e,i){return Na(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return Na(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function n1(s){return LR(s.auth,new rg(s),s.bypassAuthState)}function i1(s){const{auth:e,user:i}=s;return dt(i,e,"internal-error"),UR(i,new rg(s),s.bypassAuthState)}async function r1(s){const{auth:e,user:i}=s;return dt(i,e,"internal-error"),xR(i,new rg(s),s.bypassAuthState)}/**
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
 */class U0{constructor(e,i,a,l,h=!1){this.auth=e,this.resolver=a,this.user=l,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:a,postBody:l,tenantId:h,error:d,type:y}=e;if(d){this.reject(d);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:h||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(y)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n1;case"linkViaPopup":case"linkViaRedirect":return r1;case"reauthViaPopup":case"reauthViaRedirect":return i1;default:qi(this.auth,"internal-error")}}resolve(e){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s1=new El(2e3,1e4);class Ra extends U0{constructor(e,i,a,l,h){super(e,i,l,h),this.provider=a,this.authWindow=null,this.pollId=null,Ra.currentPopupAction&&Ra.currentPopupAction.cancel(),Ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return dt(e,this.auth,"internal-error"),e}async onExecution(){Gi(this.filter.length===1,"Popup operations only handle one event");const e=ig();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ri(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s1.get())};e()}}Ra.currentPopupAction=null;/**
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
 */const a1="pendingRedirect",rc=new Map;class o1 extends U0{constructor(e,i,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const a=await l1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(i){e=()=>Promise.reject(i)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l1(s,e){const i=h1(e),a=c1(s);if(!await a._isAvailable())return!1;const l=await a._get(i)==="true";return await a._remove(i),l}function u1(s,e){rc.set(s._key(),e)}function c1(s){return Li(s._redirectPersistence)}function h1(s){return ic(a1,s.config.apiKey,s.name)}async function f1(s,e,i=!1){if(ii(s.app))return Promise.reject(ws(s));const a=eg(s),l=e1(a,e),d=await new o1(a,l,i).execute();return d&&!i&&(delete d.user._redirectEventId,await a._persistUserIfCurrent(d.user),await a._setRedirectUser(null,e)),d}/**
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
 */const d1=10*60*1e3;class g1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(i=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m1(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var a;if(e.error&&!L0(e)){const l=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(ri(this.auth,l))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const a=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=d1&&this.cachedEventUids.clear(),this.cachedEventUids.has(D_(e))}saveEventToCache(e){this.cachedEventUids.add(D_(e)),this.lastProcessedEventTime=Date.now()}}function D_(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function L0({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m1(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L0(s);default:return!1}}/**
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
 */async function p1(s,e={}){return Ha(s,"GET","/v1/projects",e)}/**
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
 */const y1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_1=/^https?/;async function v1(s){if(s.config.emulator)return;const{authorizedDomains:e}=await p1(s);for(const i of e)try{if(E1(i))return}catch{}qi(s,"unauthorized-domain")}function E1(s){const e=_d(),{protocol:i,hostname:a}=new URL(e);if(s.startsWith("chrome-extension://")){const d=new URL(s);return d.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&d.hostname===a}if(!_1.test(i))return!1;if(y1.test(s))return a===s;const l=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(a)}/**
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
 */const T1=new El(3e4,6e4);function O_(){const s=si().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function A1(s){return new Promise((e,i)=>{var a,l,h;function d(){O_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{O_(),i(ri(s,"network-request-failed"))},timeout:T1.get()})}if(!((l=(a=si().gapi)===null||a===void 0?void 0:a.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((h=si().gapi)===null||h===void 0)&&h.load)d();else{const y=IR("iframefcb");return si()[y]=()=>{gapi.load?d():i(ri(s,"network-request-failed"))},RR(`${CR()}?onload=${y}`).catch(_=>i(_))}}).catch(e=>{throw sc=null,e})}let sc=null;function S1(s){return sc=sc||A1(s),sc}/**
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
 */const b1=new El(5e3,15e3),w1="__/auth/iframe",R1="emulator/auth/iframe",C1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D1(s){const e=s.config;dt(e.authDomain,s,"auth-domain-config-required");const i=e.emulator?Zd(e,R1):`https://${s.config.authDomain}/${w1}`,a={apiKey:e.apiKey,appName:s.name,v:za},l=I1.get(s.config.apiHost);l&&(a.eid=l);const h=s._getFrameworks();return h.length&&(a.fw=h.join(",")),`${i}?${dl(a).slice(1)}`}async function O1(s){const e=await S1(s),i=si().gapi;return dt(i,s,"internal-error"),e.open({where:document.body,url:D1(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C1,dontclear:!0},a=>new Promise(async(l,h)=>{await a.restyle({setHideOnLeave:!1});const d=ri(s,"network-request-failed"),y=si().setTimeout(()=>{h(d)},b1.get());function _(){si().clearTimeout(y),l(a)}a.ping(_).then(_,()=>{h(d)})}))}/**
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
 */const N1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M1=500,V1=600,k1="_blank",x1="http://localhost";class N_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function U1(s,e,i,a=M1,l=V1){const h=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-a)/2,0).toString();let y="";const _=Object.assign(Object.assign({},N1),{width:a.toString(),height:l.toString(),top:h,left:d}),v=Fe().toLowerCase();i&&(y=y0(v)?k1:i),m0(v)&&(e=e||x1,_.scrollbars="yes");const I=Object.entries(_).reduce((B,[$,X])=>`${B}${$}=${X},`,"");if(_R(v)&&y!=="_self")return L1(e||"",y),new N_(null);const k=window.open(e||"",y,I);dt(k,s,"popup-blocked");try{k.focus()}catch{}return new N_(k)}function L1(s,e){const i=document.createElement("a");i.href=s,i.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
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
 */const P1="__/auth/handler",z1="emulator/auth/handler",j1=encodeURIComponent("fac");async function M_(s,e,i,a,l,h){dt(s.config.authDomain,s,"auth-domain-config-required"),dt(s.config.apiKey,s,"invalid-api-key");const d={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:za,eventId:l};if(e instanceof R0){e.setDefaultLanguage(s.languageCode),d.providerId=e.providerId||"",$T(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,k]of Object.entries({}))d[I]=k}if(e instanceof Tl){const I=e.getScopes().filter(k=>k!=="");I.length>0&&(d.scopes=I.join(","))}s.tenantId&&(d.tid=s.tenantId);const y=d;for(const I of Object.keys(y))y[I]===void 0&&delete y[I];const _=await s._getAppCheckToken(),v=_?`#${j1}=${encodeURIComponent(_)}`:"";return`${B1(s)}?${dl(y).slice(1)}${v}`}function B1({config:s}){return s.emulator?Zd(s,z1):`https://${s.authDomain}/${P1}`}/**
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
 */const Jf="webStorageSupport";class H1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N0,this._completeRedirectFn=f1,this._overrideRedirectResult=u1}async _openPopup(e,i,a,l){var h;Gi((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const d=await M_(e,i,a,_d(),l);return U1(e,d,ig())}async _openRedirect(e,i,a,l){await this._originValidation(e);const h=await M_(e,i,a,_d(),l);return FR(h),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:l,promise:h}=this.eventManagers[i];return l?Promise.resolve(l):(Gi(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(e);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(e){const i=await O1(e),a=new g1(e);return i.register("authEvent",l=>(dt(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:a.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=i,a}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(Jf,{type:Jf},l=>{var h;const d=(h=l==null?void 0:l[0])===null||h===void 0?void 0:h[Jf];d!==void 0&&i(!!d),qi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=v1(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return A0()||p0()||tg()}}const q1=H1;var V_="@firebase/auth",k_="1.9.1";/**
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
 */class G1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){dt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F1(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K1(s){Lr(new Bi("auth",(e,{options:i})=>{const a=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:d,authDomain:y}=a.options;dt(d&&!d.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:d,authDomain:y,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S0(s)},v=new bR(a,l,h,_);return OR(v,i),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,a)=>{e.getProvider("auth-internal").initialize()})),Lr(new Bi("auth-internal",e=>{const i=eg(e.getProvider("auth").getImmediate());return(a=>new G1(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pi(V_,k_,F1(s)),Pi(V_,k_,"esm2017")}/**
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
 */const Q1=5*60,Y1=K_("authIdTokenMaxAge")||Q1;let x_=null;const X1=s=>async e=>{const i=e&&await e.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>Y1)return;const l=i==null?void 0:i.token;x_!==l&&(x_=l,await fetch(s,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function $1(s=Cd()){const e=gl(s,"auth");if(e.isInitialized())return e.getImmediate();const i=DR(s,{popupRedirectResolver:q1,persistence:[t1,HR,N0]}),a=K_("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(a,location.origin);if(location.origin===h.origin){const d=X1(h.toString());zR(i,d,()=>d(i.currentUser)),PR(i,y=>d(y))}}const l=G_("auth");return l&&NR(i,`http://${l}`),i}function Z1(){var s,e;return(e=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:document}wR({loadJS(s){return new Promise((e,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=e,a.onerror=l=>{const h=ri("internal-error");h.customData=l,i(h)},a.type="text/javascript",a.charset="UTF-8",Z1().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K1("Browser");/**
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
 */const Td=new Map,P0={activated:!1,tokenObservers:[]},W1={initialized:!1,enabled:!1};function Ee(s){return Td.get(s)||Object.assign({},P0)}function J1(s,e){return Td.set(s,e),Td.get(s)}function Pc(){return W1}/**
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
 */const z0="https://content-firebaseappcheck.googleapis.com/v1",tC="exchangeRecaptchaV3Token",eC="exchangeDebugToken",U_={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},nC=24*60*60*1e3;/**
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
 */class iC{constructor(e,i,a,l,h){if(this.operation=e,this.retryPolicy=i,this.getWaitDuration=a,this.lowerBound=l,this.upperBound=h,this.pending=null,this.nextErrorWaitInterval=l,l>h)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new rl,this.pending.promise.catch(i=>{}),await rC(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new rl,this.pending.promise.catch(i=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(i){this.retryPolicy(i)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const i=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),i}}}function rC(s){return new Promise(e=>{setTimeout(e,s)})}/**
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
 */const sC={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},rn=new Pa("appCheck","AppCheck",sC);/**
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
 */function L_(s=!1){var e;return s?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function sg(s){if(!Ee(s).activated)throw rn.create("use-before-activation",{appName:s.name})}function j0(s){const e=Math.round(s/1e3),i=Math.floor(e/(3600*24)),a=Math.floor((e-i*3600*24)/3600),l=Math.floor((e-i*3600*24-a*3600)/60),h=e-i*3600*24-a*3600-l*60;let d="";return i&&(d+=$u(i)+"d:"),a&&(d+=$u(a)+"h:"),d+=$u(l)+"m:"+$u(h)+"s",d}function $u(s){return s===0?"00":s>=10?s.toString():"0"+s}/**
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
 */async function ag({url:s,body:e},i){const a={"Content-Type":"application/json"},l=i.getImmediate({optional:!0});if(l){const k=await l.getHeartbeatsHeader();k&&(a["X-Firebase-Client"]=k)}const h={method:"POST",body:JSON.stringify(e),headers:a};let d;try{d=await fetch(s,h)}catch(k){throw rn.create("fetch-network-error",{originalErrorMessage:k==null?void 0:k.message})}if(d.status!==200)throw rn.create("fetch-status-error",{httpStatus:d.status});let y;try{y=await d.json()}catch(k){throw rn.create("fetch-parse-error",{originalErrorMessage:k==null?void 0:k.message})}const _=y.ttl.match(/^([\d.]+)(s)$/);if(!_||!_[2]||isNaN(Number(_[1])))throw rn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${y.ttl}`});const v=Number(_[1])*1e3,I=Date.now();return{token:y.token,expireTimeMillis:I+v,issuedAtTimeMillis:I}}function aC(s,e){const{projectId:i,appId:a,apiKey:l}=s.options;return{url:`${z0}/projects/${i}/apps/${a}:${tC}?key=${l}`,body:{recaptcha_v3_token:e}}}function B0(s,e){const{projectId:i,appId:a,apiKey:l}=s.options;return{url:`${z0}/projects/${i}/apps/${a}:${eC}?key=${l}`,body:{debug_token:e}}}/**
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
 */const oC="firebase-app-check-database",lC=1,fl="firebase-app-check-store",H0="debug-token";let Zu=null;function q0(){return Zu||(Zu=new Promise((s,e)=>{try{const i=indexedDB.open(oC,lC);i.onsuccess=a=>{s(a.target.result)},i.onerror=a=>{var l;e(rn.create("storage-open",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))},i.onupgradeneeded=a=>{const l=a.target.result;switch(a.oldVersion){case 0:l.createObjectStore(fl,{keyPath:"compositeKey"})}}}catch(i){e(rn.create("storage-open",{originalErrorMessage:i==null?void 0:i.message}))}}),Zu)}function uC(s){return F0(K0(s))}function cC(s,e){return G0(K0(s),e)}function hC(s){return G0(H0,s)}function fC(){return F0(H0)}async function G0(s,e){const a=(await q0()).transaction(fl,"readwrite"),h=a.objectStore(fl).put({compositeKey:s,value:e});return new Promise((d,y)=>{h.onsuccess=_=>{d()},a.onerror=_=>{var v;y(rn.create("storage-set",{originalErrorMessage:(v=_.target.error)===null||v===void 0?void 0:v.message}))}})}async function F0(s){const i=(await q0()).transaction(fl,"readonly"),l=i.objectStore(fl).get(s);return new Promise((h,d)=>{l.onsuccess=y=>{const _=y.target.result;h(_?_.value:void 0)},i.onerror=y=>{var _;d(rn.create("storage-get",{originalErrorMessage:(_=y.target.error)===null||_===void 0?void 0:_.message}))}})}function K0(s){return`${s.options.appId}-${s.name}`}/**
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
 */const As=new Rc("@firebase/app-check");/**
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
 */async function dC(s){if(wd()){let e;try{e=await uC(s)}catch(i){As.warn(`Failed to read token from IndexedDB. Error: ${i}`)}return e}}function td(s,e){return wd()?cC(s,e).catch(i=>{As.warn(`Failed to write token to IndexedDB. Error: ${i}`)}):Promise.resolve()}async function gC(){let s;try{s=await fC()}catch{}if(s)return s;{const e=crypto.randomUUID();return hC(e).catch(i=>As.warn(`Failed to persist debug token to IndexedDB. Error: ${i}`)),e}}/**
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
 */function og(){return Pc().enabled}async function lg(){const s=Pc();if(s.enabled&&s.token)return s.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function mC(){const s=q_(),e=Pc();if(e.initialized=!0,typeof s.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&s.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const i=new rl;e.token=i,typeof s.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?i.resolve(s.FIREBASE_APPCHECK_DEBUG_TOKEN):i.resolve(gC())}/**
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
 */const pC={error:"UNKNOWN_ERROR"};function yC(s){return bd.encodeString(JSON.stringify(s),!1)}async function Ad(s,e=!1){const i=s.app;sg(i);const a=Ee(i);let l=a.token,h;if(l&&!Ca(l)&&(a.token=void 0,l=void 0),!l){const _=await a.cachedTokenPromise;_&&(Ca(_)?l=_:await td(i,void 0))}if(!e&&l&&Ca(l))return{token:l.token};let d=!1;if(og())try{a.exchangeTokenPromise||(a.exchangeTokenPromise=ag(B0(i,await lg()),s.heartbeatServiceProvider).finally(()=>{a.exchangeTokenPromise=void 0}),d=!0);const _=await a.exchangeTokenPromise;return await td(i,_),a.token=_,{token:_.token}}catch(_){return _.code==="appCheck/throttled"?As.warn(_.message):As.error(_),ed(_)}try{a.exchangeTokenPromise||(a.exchangeTokenPromise=a.provider.getToken().finally(()=>{a.exchangeTokenPromise=void 0}),d=!0),l=await Ee(i).exchangeTokenPromise}catch(_){_.code==="appCheck/throttled"?As.warn(_.message):As.error(_),h=_}let y;return l?h?Ca(l)?y={token:l.token,internalError:h}:y=ed(h):(y={token:l.token},a.token=l,await td(i,l)):y=ed(h),d&&X0(i,y),y}async function _C(s){const e=s.app;sg(e);const{provider:i}=Ee(e);if(og()){const a=await lg(),{token:l}=await ag(B0(e,a),s.heartbeatServiceProvider);return{token:l}}else{const{token:a}=await i.getToken();return{token:a}}}function Q0(s,e,i,a){const{app:l}=s,h=Ee(l),d={next:i,error:a,type:e};if(h.tokenObservers=[...h.tokenObservers,d],h.token&&Ca(h.token)){const y=h.token;Promise.resolve().then(()=>{i({token:y.token}),P_(s)}).catch(()=>{})}h.cachedTokenPromise.then(()=>P_(s))}function Y0(s,e){const i=Ee(s),a=i.tokenObservers.filter(l=>l.next!==e);a.length===0&&i.tokenRefresher&&i.tokenRefresher.isRunning()&&i.tokenRefresher.stop(),i.tokenObservers=a}function P_(s){const{app:e}=s,i=Ee(e);let a=i.tokenRefresher;a||(a=vC(s),i.tokenRefresher=a),!a.isRunning()&&i.isTokenAutoRefreshEnabled&&a.start()}function vC(s){const{app:e}=s;return new iC(async()=>{const i=Ee(e);let a;if(i.token?a=await Ad(s,!0):a=await Ad(s),a.error)throw a.error;if(a.internalError)throw a.internalError},()=>!0,()=>{const i=Ee(e);if(i.token){let a=i.token.issuedAtTimeMillis+(i.token.expireTimeMillis-i.token.issuedAtTimeMillis)*.5+3e5;const l=i.token.expireTimeMillis-5*60*1e3;return a=Math.min(a,l),Math.max(0,a-Date.now())}else return 0},U_.RETRIAL_MIN_WAIT,U_.RETRIAL_MAX_WAIT)}function X0(s,e){const i=Ee(s).tokenObservers;for(const a of i)try{a.type==="EXTERNAL"&&e.error!=null?a.error(e.error):a.next(e)}catch{}}function Ca(s){return s.expireTimeMillis-Date.now()>0}function ed(s){return{token:yC(pC),error:s}}/**
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
 */class EC{constructor(e,i){this.app=e,this.heartbeatServiceProvider=i}_delete(){const{tokenObservers:e}=Ee(this.app);for(const i of e)Y0(this.app,i.next);return Promise.resolve()}}function TC(s,e){return new EC(s,e)}function AC(s){return{getToken:e=>Ad(s,e),getLimitedUseToken:()=>_C(s),addTokenListener:e=>Q0(s,"INTERNAL",e),removeTokenListener:e=>Y0(s.app,e)}}const SC="@firebase/app-check",bC="0.8.12";/**
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
 */const wC="https://www.google.com/recaptcha/api.js";function RC(s,e){const i=new rl,a=Ee(s);a.reCAPTCHAState={initialized:i};const l=CC(s),h=L_(!1);return h?z_(s,e,h,l,i):OC(()=>{const d=L_(!1);if(!d)throw new Error("no recaptcha");z_(s,e,d,l,i)}),i.promise}function z_(s,e,i,a,l){i.ready(()=>{DC(s,e,i,a),l.resolve(i)})}function CC(s){const e=`fire_app_check_${s.name}`,i=document.createElement("div");return i.id=e,i.style.display="none",document.body.appendChild(i),e}async function IC(s){sg(s);const i=await Ee(s).reCAPTCHAState.initialized.promise;return new Promise((a,l)=>{const h=Ee(s).reCAPTCHAState;i.ready(()=>{a(i.execute(h.widgetId,{action:"fire_app_check"}))})})}function DC(s,e,i,a){const l=i.render(a,{sitekey:e,size:"invisible",callback:()=>{Ee(s).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ee(s).reCAPTCHAState.succeeded=!1}}),h=Ee(s);h.reCAPTCHAState=Object.assign(Object.assign({},h.reCAPTCHAState),{widgetId:l})}function OC(s){const e=document.createElement("script");e.src=wC,e.onload=s,document.head.appendChild(e)}/**
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
 */class ug{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,i,a;MC(this._throttleData);const l=await IC(this._app).catch(d=>{throw rn.create("recaptcha-error")});if(!(!((e=Ee(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw rn.create("recaptcha-error");let h;try{h=await ag(aC(this._app,l),this._heartbeatServiceProvider)}catch(d){throw!((i=d.code)===null||i===void 0)&&i.includes("fetch-status-error")?(this._throttleData=NC(Number((a=d.customData)===null||a===void 0?void 0:a.httpStatus),this._throttleData),rn.create("throttled",{time:j0(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):d}return this._throttleData=null,h}initialize(e){this._app=e,this._heartbeatServiceProvider=gl(e,"heartbeat"),RC(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof ug?this._siteKey===e._siteKey:!1}}function NC(s,e){if(s===404||s===403)return{backoffCount:1,allowRequestsAfter:Date.now()+nC,httpStatus:s};{const i=e?e.backoffCount:0,a=rA(i,1e3,2);return{backoffCount:i+1,allowRequestsAfter:Date.now()+a,httpStatus:s}}}function MC(s){if(s&&Date.now()-s.allowRequestsAfter<=0)throw rn.create("throttled",{time:j0(s.allowRequestsAfter-Date.now()),httpStatus:s.httpStatus})}/**
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
 */function VC(s=Cd(),e){s=On(s);const i=gl(s,"app-check");if(Pc().initialized||mC(),og()&&lg().then(l=>console.log(`App Check debug token: ${l}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),i.isInitialized()){const l=i.getImmediate(),h=i.getOptions();if(h.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&h.provider.isEqual(e.provider))return l;throw rn.create("already-initialized",{appName:s.name})}const a=i.initialize({options:e});return kC(s,e.provider,e.isTokenAutoRefreshEnabled),Ee(s).isTokenAutoRefreshEnabled&&Q0(a,"INTERNAL",()=>{}),a}function kC(s,e,i){const a=J1(s,Object.assign({},P0));a.activated=!0,a.provider=e,a.cachedTokenPromise=dC(s).then(l=>(l&&Ca(l)&&(a.token=l,X0(s,{token:l.token})),l)),a.isTokenAutoRefreshEnabled=i===void 0?s.automaticDataCollectionEnabled:i,a.provider.initialize(s)}const xC="app-check",j_="app-check-internal";function UC(){Lr(new Bi(xC,s=>{const e=s.getProvider("app").getImmediate(),i=s.getProvider("heartbeat");return TC(e,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((s,e,i)=>{s.getProvider(j_).initialize()})),Lr(new Bi(j_,s=>{const e=s.getProvider("app-check").getImmediate();return AC(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Pi(SC,bC)}UC();const LC={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.appspot.com",appId:"1:410453365556:web:670182c618218ca1220b61"},cg=X_(LC),PC=jw(cg);$1(cg);VC(cg,{provider:new ug("6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi")});function zC(){const[s,e]=en.useState([]),[i,a]=en.useState([]),[l,h]=en.useState(0),[d,y]=en.useState([]),[_,v]=en.useState([]),[I,k]=en.useState(null),[B,$]=en.useState(null),[X,lt]=en.useState({}),[et,At]=en.useState(null),[ht,yt]=en.useState(!1);en.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/questions.json").then(A=>A.json()).then(A=>{console.log("Fetched questions:",A),Array.isArray(A)&&A.length>0?(e(A),y(Array(A.length).fill(null))):console.error("Invalid questions data:",A)}).catch(A=>console.error("Error fetching questions:",A))},[]),en.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/question_details.json").then(A=>A.json()).then(A=>{console.log("Fetched question details:",A),a(A)}).catch(A=>console.error("Error fetching question details:",A))},[]),en.useEffect(()=>{s.length&&v(Array(s.length).fill(3))},[s]);const Pt=A=>{y(O=>{const b=[...O];return b[l]=A,b}),l<s.length-1&&h(l+1)},gt=()=>{l<s.length-1&&h(l+1)},Ct=()=>{l>0&&h(l-1)},V=()=>{console.log("Submitted answers:",s.map((A,O)=>({id:A.id,question:A.question,answer:d[O]||"Sin respuesta",weight:_[O]})))},R=async()=>{const A={userId:localStorage.getItem("userId")||Date.now(),answers:d,createdAt:new Date};localStorage.setItem("userId",A.userId);try{const O=await Jw(Pw(PC,"quizAnswers"),A);console.log("Document written with ID:",O.id)}catch(O){console.error("Error adding document:",O)}},S=()=>{V(),R(),$(null),yt(!1),h(s.length);const A={},O={Sí:1,"No tengo una opinión sobre este tema":.5,No:0};s.forEach((b,Ht)=>{const qt=d[Ht]||"No tengo una opinión sobre este tema";A[b.id]={answer:O[qt]||.5,weight:_[Ht]}}),fetch("https://josevalqui.github.io/votometro/processed_votes.json").then(b=>b.json()).then(b=>{const Ht=b.candidates.map(nt=>{let it=0,Dt=0;Object.entries(nt.votes).forEach(([Q,st])=>{if(st===null)return;const J=Q.split("_")[0];if(A[J]){const{answer:tt,weight:pt}=A[J];it+=Math.abs(tt-st)*pt,Dt+=pt}});const D=Dt>0?Math.round((1-it/Dt)*100):0;return{name:nt.name,party:nt.party,similarity_score:D}});Ht.sort((nt,it)=>it.similarity_score-nt.similarity_score);const qt={};Ht.forEach(nt=>{qt[nt.party]||(qt[nt.party]={total:0,count:0}),qt[nt.party].total+=nt.similarity_score,qt[nt.party].count+=1});const W=Object.entries(qt).map(([nt,it])=>({party:nt,average_similarity_score:Math.round(it.total/it.count)}));W.sort((nt,it)=>it.average_similarity_score-nt.average_similarity_score),k({individual_results:Ht,party_results:W})}).catch(b=>console.error("Error fetching processed votes:",b))},C=(A,O)=>{$(A),fetch("https://josevalqui.github.io/votometro/vote_details.json").then(b=>b.json()).then(b=>{O==="individual"?lt(b.candidates[A.name]||{}):O==="party"&&lt({party_meta:b.party_meta[A.party]||{},details:b.parties[A.party]||[]})}).catch(b=>console.error("Error fetching vote details:",b))};return G.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",minHeight:"90vh",width:"100vw",overflowY:"auto",padding:"20px"},children:G.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"1100px"},children:s.length===0?G.jsx("h2",{children:"Loading..."}):l<s.length?G.jsxs(G.Fragment,{children:[G.jsx("div",{style:{marginBottom:"10px"},children:G.jsxs("h3",{children:[l+1," / ",s.length]})}),G.jsxs("div",{style:{marginBottom:"20px"},children:[G.jsx("label",{children:"Importancia de este tema:"}),G.jsx("br",{}),G.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[G.jsx("span",{style:{fontSize:"14px"},children:"Poca"}),G.jsx("input",{type:"range",min:"1",max:"5",value:_[l]!==void 0?_[l]:3,onChange:A=>{const O=[..._];O[l]=Number(A.target.value),v(O)},style:{flexGrow:1}}),G.jsx("span",{style:{fontSize:"14px"},children:"Mucha"})]})]}),G.jsx("h2",{children:s[l].question}),s[l].options.map((A,O)=>G.jsx("button",{onClick:()=>Pt(A),onMouseEnter:()=>At(A),onMouseLeave:()=>At(null),style:{margin:"10px",padding:"10px 40px",fontSize:"16px",cursor:"pointer",display:"block",width:"100%",backgroundColor:d[l]===A||et===A?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px"},children:A},O)),G.jsxs("div",{style:{marginTop:"20px"},children:[G.jsx("button",{onClick:Ct,disabled:l===0,style:{marginRight:"10px",padding:"10px 20px",fontSize:"16px",cursor:l===0?"not-allowed":"pointer",opacity:l===0?.5:1},children:"Volver"}),G.jsx("button",{onClick:()=>{l===s.length-1?S():gt()},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer"},children:l===s.length-1?"Terminar encuesta":"Saltar"})]}),G.jsxs("div",{style:{marginTop:"20px"},children:[G.jsx("h3",{children:"Current Answers:"}),G.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:d.map((A,O)=>G.jsxs("li",{children:[G.jsxs("strong",{children:["Q",O+1,":"]})," ",A||"Sin respuesta"]},O))})]})]}):G.jsxs(G.Fragment,{children:[G.jsx("h2",{children:"Completaste el Votómetro!"}),G.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"flex-start",width:"100%"},children:[G.jsx("button",{onClick:()=>yt(!1),onMouseEnter:A=>{A.target.style.backgroundColor="black",A.target.style.color="white"},onMouseLeave:A=>{A.target.style.backgroundColor=ht?"darkslategrey":"black"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:ht?"darkslategrey":"black",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Partidos políticos"}),G.jsx("button",{onClick:()=>yt(!0),onMouseEnter:A=>{A.target.style.backgroundColor="black",A.target.style.color="white"},onMouseLeave:A=>{A.target.style.backgroundColor=ht?"black":"darkslategrey"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:ht?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Congresistas"})]}),G.jsxs("div",{style:{display:"flex",width:"100%"},children:[G.jsx("div",{style:{flex:1},children:I&&G.jsx("div",{style:{marginTop:"20px",width:"100%"},children:ht?G.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",maxHeight:"40vh",overflowY:"auto"},children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[G.jsx("span",{children:"Congresista"}),G.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),I.individual_results.map((A,O)=>{var b;return G.jsxs("li",{style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:()=>C(A,"individual"),children:[G.jsxs("span",{children:[((b=A.names)==null?void 0:b.join(", "))||A.name," (",A.party,")"]}),G.jsxs("span",{style:{marginLeft:"auto",fontWeight:"bold",paddingRight:"15px"},children:[A.similarity_score,"%"]})]},O)})]}):G.jsxs(G.Fragment,{children:[G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[G.jsx("span",{children:"Partido"}),G.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),G.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",width:"100%"},children:I.party_results.map((A,O)=>G.jsx("li",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"5px 0"},onClick:()=>C(A,"party"),children:G.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[G.jsx("span",{children:G.jsx("strong",{children:A.party})}),G.jsxs("span",{style:{fontWeight:"bold",paddingRight:"15px"},children:[A.average_similarity_score,"%"]})]})},O))})]})})}),G.jsx("div",{style:{width:"50%",padding:"0px 0px 0px 15px",borderLeft:"1px solid #ccc",overflowY:"auto",maxHeight:"45vh",textAlign:"left"},children:B?G.jsxs(G.Fragment,{children:[G.jsx("h2",{style:{margin:"2px 0"},children:B.name?B.name:B.party}),X.candidate_meta&&G.jsx("div",{style:{marginBottom:"4px"},children:G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Edad (2024):"})," ",X.candidate_meta.age,G.jsx("br",{}),G.jsx("strong",{children:"Sentencia penal:"})," ",X.candidate_meta.sentencia_penal,G.jsx("br",{}),G.jsx("strong",{children:"Partido:"})," ",X.candidate_meta.party,G.jsx("br",{}),G.jsx("strong",{children:"Asistencia:"})," ",X.candidate_meta.attendance||"N/A",G.jsx("br",{}),G.jsx("br",{})]})}),X.party_meta&&G.jsxs("div",{style:{marginBottom:"4px"},children:[G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Edad promedio:"})," ",X.party_meta.average_age,G.jsx("br",{}),G.jsx("strong",{children:"Asistencia promedio:"})," ",X.party_meta.average_attendance_percentage||"N/A","%",G.jsx("br",{}),G.jsx("strong",{children:"Sentencia penal:"})," ",X.party_meta.sentencia_penal.yes,"/",X.party_meta.sentencia_penal.total," congresistas",G.jsx("br",{})]}),G.jsx("br",{})]}),X.details&&X.details.length>0?i.length>0?i.map((A,O)=>{let b=X.details.find(Ht=>Ht.id===A.id)||{};return G.jsxs("div",{style:{marginBottom:"2px",lineHeight:"1.2"},children:[G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Statement:"})," ",A.question," ",G.jsx("br",{}),G.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[G.jsx("strong",{children:"Proyecto de ley:"})," ",A.law?A.law:"N/A"]})]}),G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Fecha de la votación:"})," ",b.date||"N/A"," ",G.jsx("br",{}),X.party_meta?G.jsxs(G.Fragment,{children:[G.jsx("strong",{children:"Voto más común:"})," ",b.vote||"N/A"," ",G.jsx("br",{})]}):G.jsxs(G.Fragment,{children:[G.jsx("strong",{children:"Voto:"})," ",b.vote||"N/A"," ",G.jsx("br",{})]})]}),G.jsxs("p",{style:{margin:"2px 0"},children:[G.jsx("strong",{children:"Documento y noticias:"})," ",A.source?G.jsxs(G.Fragment,{children:[G.jsx("a",{href:A.pdf_link,target:"_blank",rel:"noopener noreferrer",children:"Documento"})," ","|"," ",G.jsx("a",{href:A.source,target:"_blank",rel:"noopener noreferrer",children:new URL(A.source).hostname.replace("www.","")+"/..."})]}):"N/A"]}),G.jsx("br",{})]},O)}):G.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):G.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]}):G.jsx("p",{children:" "})})]}),G.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:[G.jsx("strong",{children:"Tus respuestas:"}),d.map((A,O)=>{var b;return G.jsxs("li",{children:[(b=s[O])==null?void 0:b.question,": ",A||"Sin respuesta"]},O)})]}),G.jsx("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:G.jsx("button",{onClick:()=>h(s.length-1),onMouseEnter:A=>A.target.style.backgroundColor="black",onMouseLeave:A=>A.target.style.backgroundColor="darkslategrey",style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})})})}DT.createRoot(document.getElementById("root")).render(G.jsx(en.StrictMode,{children:G.jsx(zC,{})}));
