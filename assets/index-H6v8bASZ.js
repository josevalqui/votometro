(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var mh={exports:{}},sa={},gh={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function V_(){if(Gp)return Te;Gp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),D=Symbol.iterator;function U(O){return O===null||typeof O!="object"?null:(O=D&&O[D]||O["@@iterator"],typeof O=="function"?O:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,Z={};function Y(O,j,ae){this.props=O,this.context=j,this.refs=Z,this.updater=ae||J}Y.prototype.isReactComponent={},Y.prototype.setState=function(O,j){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,j,"setState")},Y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function Ee(){}Ee.prototype=Y.prototype;function me(O,j,ae){this.props=O,this.context=j,this.refs=Z,this.updater=ae||J}var ge=me.prototype=new Ee;ge.constructor=me,q(ge,Y.prototype),ge.isPureReactComponent=!0;var we=Array.isArray,He=Object.prototype.hasOwnProperty,Se={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(O,j,ae){var ye,ve={},Re=null,De=null;if(j!=null)for(ye in j.ref!==void 0&&(De=j.ref),j.key!==void 0&&(Re=""+j.key),j)He.call(j,ye)&&!x.hasOwnProperty(ye)&&(ve[ye]=j[ye]);var Oe=arguments.length-2;if(Oe===1)ve.children=ae;else if(1<Oe){for(var Fe=Array(Oe),dt=0;dt<Oe;dt++)Fe[dt]=arguments[dt+2];ve.children=Fe}if(O&&O.defaultProps)for(ye in Oe=O.defaultProps,Oe)ve[ye]===void 0&&(ve[ye]=Oe[ye]);return{$$typeof:i,type:O,key:Re,ref:De,props:ve,_owner:Se.current}}function A(O,j){return{$$typeof:i,type:O.type,key:j,ref:O.ref,props:O.props,_owner:O._owner}}function C(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function w(O){var j={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return j[ae]})}var R=/\/+/g;function T(O,j){return typeof O=="object"&&O!==null&&O.key!=null?w(""+O.key):j.toString(36)}function Ve(O,j,ae,ye,ve){var Re=typeof O;(Re==="undefined"||Re==="boolean")&&(O=null);var De=!1;if(O===null)De=!0;else switch(Re){case"string":case"number":De=!0;break;case"object":switch(O.$$typeof){case i:case e:De=!0}}if(De)return De=O,ve=ve(De),O=ye===""?"."+T(De,0):ye,we(ve)?(ae="",O!=null&&(ae=O.replace(R,"$&/")+"/"),Ve(ve,j,ae,"",function(dt){return dt})):ve!=null&&(C(ve)&&(ve=A(ve,ae+(!ve.key||De&&De.key===ve.key?"":(""+ve.key).replace(R,"$&/")+"/")+O)),j.push(ve)),1;if(De=0,ye=ye===""?".":ye+":",we(O))for(var Oe=0;Oe<O.length;Oe++){Re=O[Oe];var Fe=ye+T(Re,Oe);De+=Ve(Re,j,ae,Fe,ve)}else if(Fe=U(O),typeof Fe=="function")for(O=Fe.call(O),Oe=0;!(Re=O.next()).done;)Re=Re.value,Fe=ye+T(Re,Oe++),De+=Ve(Re,j,ae,Fe,ve);else if(Re==="object")throw j=String(O),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return De}function We(O,j,ae){if(O==null)return O;var ye=[],ve=0;return Ve(O,ye,"","",function(Re){return j.call(ae,Re,ve++)}),ye}function st(O){if(O._status===-1){var j=O._result;j=j(),j.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=j)}if(O._status===1)return O._result.default;throw O._result}var pe={current:null},Q={transition:null},le={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:Q,ReactCurrentOwner:Se};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Te.Children={map:We,forEach:function(O,j,ae){We(O,function(){j.apply(this,arguments)},ae)},count:function(O){var j=0;return We(O,function(){j++}),j},toArray:function(O){return We(O,function(j){return j})||[]},only:function(O){if(!C(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Te.Component=Y,Te.Fragment=n,Te.Profiler=a,Te.PureComponent=me,Te.StrictMode=s,Te.Suspense=y,Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Te.act=ee,Te.cloneElement=function(O,j,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ye=q({},O.props),ve=O.key,Re=O.ref,De=O._owner;if(j!=null){if(j.ref!==void 0&&(Re=j.ref,De=Se.current),j.key!==void 0&&(ve=""+j.key),O.type&&O.type.defaultProps)var Oe=O.type.defaultProps;for(Fe in j)He.call(j,Fe)&&!x.hasOwnProperty(Fe)&&(ye[Fe]=j[Fe]===void 0&&Oe!==void 0?Oe[Fe]:j[Fe])}var Fe=arguments.length-2;if(Fe===1)ye.children=ae;else if(1<Fe){Oe=Array(Fe);for(var dt=0;dt<Fe;dt++)Oe[dt]=arguments[dt+2];ye.children=Oe}return{$$typeof:i,type:O.type,key:ve,ref:Re,props:ye,_owner:De}},Te.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},Te.createElement=S,Te.createFactory=function(O){var j=S.bind(null,O);return j.type=O,j},Te.createRef=function(){return{current:null}},Te.forwardRef=function(O){return{$$typeof:g,render:O}},Te.isValidElement=C,Te.lazy=function(O){return{$$typeof:P,_payload:{_status:-1,_result:O},_init:st}},Te.memo=function(O,j){return{$$typeof:E,type:O,compare:j===void 0?null:j}},Te.startTransition=function(O){var j=Q.transition;Q.transition={};try{O()}finally{Q.transition=j}},Te.unstable_act=ee,Te.useCallback=function(O,j){return pe.current.useCallback(O,j)},Te.useContext=function(O){return pe.current.useContext(O)},Te.useDebugValue=function(){},Te.useDeferredValue=function(O){return pe.current.useDeferredValue(O)},Te.useEffect=function(O,j){return pe.current.useEffect(O,j)},Te.useId=function(){return pe.current.useId()},Te.useImperativeHandle=function(O,j,ae){return pe.current.useImperativeHandle(O,j,ae)},Te.useInsertionEffect=function(O,j){return pe.current.useInsertionEffect(O,j)},Te.useLayoutEffect=function(O,j){return pe.current.useLayoutEffect(O,j)},Te.useMemo=function(O,j){return pe.current.useMemo(O,j)},Te.useReducer=function(O,j,ae){return pe.current.useReducer(O,j,ae)},Te.useRef=function(O){return pe.current.useRef(O)},Te.useState=function(O){return pe.current.useState(O)},Te.useSyncExternalStore=function(O,j,ae){return pe.current.useSyncExternalStore(O,j,ae)},Te.useTransition=function(){return pe.current.useTransition()},Te.version="18.3.1",Te}var Qp;function Zh(){return Qp||(Qp=1,gh.exports=V_()),gh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function L_(){if(Xp)return sa;Xp=1;var i=Zh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(g,y,E){var P,D={},U=null,J=null;E!==void 0&&(U=""+E),y.key!==void 0&&(U=""+y.key),y.ref!==void 0&&(J=y.ref);for(P in y)s.call(y,P)&&!c.hasOwnProperty(P)&&(D[P]=y[P]);if(g&&g.defaultProps)for(P in y=g.defaultProps,y)D[P]===void 0&&(D[P]=y[P]);return{$$typeof:e,type:g,key:U,ref:J,props:D,_owner:a.current}}return sa.Fragment=n,sa.jsx=d,sa.jsxs=d,sa}var Yp;function M_(){return Yp||(Yp=1,mh.exports=L_()),mh.exports}var z=M_(),Gt=Zh(),ql={},yh={exports:{}},qt={},vh={exports:{}},_h={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function b_(){return Jp||(Jp=1,function(i){function e(Q,le){var ee=Q.length;Q.push(le);e:for(;0<ee;){var O=ee-1>>>1,j=Q[O];if(0<a(j,le))Q[O]=le,Q[ee]=j,ee=O;else break e}}function n(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var le=Q[0],ee=Q.pop();if(ee!==le){Q[0]=ee;e:for(var O=0,j=Q.length,ae=j>>>1;O<ae;){var ye=2*(O+1)-1,ve=Q[ye],Re=ye+1,De=Q[Re];if(0>a(ve,ee))Re<j&&0>a(De,ve)?(Q[O]=De,Q[Re]=ee,O=Re):(Q[O]=ve,Q[ye]=ee,O=ye);else if(Re<j&&0>a(De,ee))Q[O]=De,Q[Re]=ee,O=Re;else break e}}return le}function a(Q,le){var ee=Q.sortIndex-le.sortIndex;return ee!==0?ee:Q.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,g=d.now();i.unstable_now=function(){return d.now()-g}}var y=[],E=[],P=1,D=null,U=3,J=!1,q=!1,Z=!1,Y=typeof setTimeout=="function"?setTimeout:null,Ee=typeof clearTimeout=="function"?clearTimeout:null,me=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ge(Q){for(var le=n(E);le!==null;){if(le.callback===null)s(E);else if(le.startTime<=Q)s(E),le.sortIndex=le.expirationTime,e(y,le);else break;le=n(E)}}function we(Q){if(Z=!1,ge(Q),!q)if(n(y)!==null)q=!0,st(He);else{var le=n(E);le!==null&&pe(we,le.startTime-Q)}}function He(Q,le){q=!1,Z&&(Z=!1,Ee(S),S=-1),J=!0;var ee=U;try{for(ge(le),D=n(y);D!==null&&(!(D.expirationTime>le)||Q&&!w());){var O=D.callback;if(typeof O=="function"){D.callback=null,U=D.priorityLevel;var j=O(D.expirationTime<=le);le=i.unstable_now(),typeof j=="function"?D.callback=j:D===n(y)&&s(y),ge(le)}else s(y);D=n(y)}if(D!==null)var ae=!0;else{var ye=n(E);ye!==null&&pe(we,ye.startTime-le),ae=!1}return ae}finally{D=null,U=ee,J=!1}}var Se=!1,x=null,S=-1,A=5,C=-1;function w(){return!(i.unstable_now()-C<A)}function R(){if(x!==null){var Q=i.unstable_now();C=Q;var le=!0;try{le=x(!0,Q)}finally{le?T():(Se=!1,x=null)}}else Se=!1}var T;if(typeof me=="function")T=function(){me(R)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,We=Ve.port2;Ve.port1.onmessage=R,T=function(){We.postMessage(null)}}else T=function(){Y(R,0)};function st(Q){x=Q,Se||(Se=!0,T())}function pe(Q,le){S=Y(function(){Q(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Q){Q.callback=null},i.unstable_continueExecution=function(){q||J||(q=!0,st(He))},i.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<Q?Math.floor(1e3/Q):5},i.unstable_getCurrentPriorityLevel=function(){return U},i.unstable_getFirstCallbackNode=function(){return n(y)},i.unstable_next=function(Q){switch(U){case 1:case 2:case 3:var le=3;break;default:le=U}var ee=U;U=le;try{return Q()}finally{U=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Q,le){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var ee=U;U=Q;try{return le()}finally{U=ee}},i.unstable_scheduleCallback=function(Q,le,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,Q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,Q={id:P++,callback:le,priorityLevel:Q,startTime:ee,expirationTime:j,sortIndex:-1},ee>O?(Q.sortIndex=ee,e(E,Q),n(y)===null&&Q===n(E)&&(Z?(Ee(S),S=-1):Z=!0,pe(we,ee-O))):(Q.sortIndex=j,e(y,Q),q||J||(q=!0,st(He))),Q},i.unstable_shouldYield=w,i.unstable_wrapCallback=function(Q){var le=U;return function(){var ee=U;U=le;try{return Q.apply(this,arguments)}finally{U=ee}}}}(_h)),_h}var Zp;function F_(){return Zp||(Zp=1,vh.exports=b_()),vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function U_(){if(em)return qt;em=1;var i=Zh(),e=F_();function n(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)s.add(r[t])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},D={};function U(t){return y.call(D,t)?!0:y.call(P,t)?!1:E.test(t)?D[t]=!0:(P[t]=!0,!1)}function J(t,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q(t,r,o,u){if(r===null||typeof r>"u"||J(t,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Z(t,r,o,u,h,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=t,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Y[t]=new Z(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];Y[r]=new Z(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Y[t]=new Z(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Y[t]=new Z(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Y[t]=new Z(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Y[t]=new Z(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Y[t]=new Z(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Y[t]=new Z(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Y[t]=new Z(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ee=/[\-:]([a-z])/g;function me(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(Ee,me);Y[r]=new Z(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(Ee,me);Y[r]=new Z(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(Ee,me);Y[r]=new Z(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Y[t]=new Z(t,1,!1,t.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new Z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Y[t]=new Z(t,1,!1,t.toLowerCase(),null,!0,!0)});function ge(t,r,o,u){var h=Y.hasOwnProperty(r)?Y[r]:null;(h!==null?h.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,o,h,u)&&(o=null),u||h===null?U(r)&&(o===null?t.removeAttribute(r):t.setAttribute(r,""+o)):h.mustUseProperty?t[h.propertyName]=o===null?h.type===3?!1:"":o:(r=h.attributeName,u=h.attributeNamespace,o===null?t.removeAttribute(r):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?t.setAttributeNS(u,r,o):t.setAttribute(r,o))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),Se=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),w=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),Q=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,O;function j(t){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var ae=!1;function ye(t,r){if(!t||ae)return"";ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(b){var u=b}Reflect.construct(t,[],r)}else{try{r.call()}catch(b){u=b}t.call(r.prototype)}else{try{throw Error()}catch(b){u=b}t()}}catch(b){if(b&&u&&typeof b.stack=="string"){for(var h=b.stack.split(`
`),p=u.stack.split(`
`),v=h.length-1,I=p.length-1;1<=v&&0<=I&&h[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(h[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||h[v]!==p[I]){var k=`
`+h[v].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=v&&0<=I);break}}}finally{ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?j(t):""}function ve(t){switch(t.tag){case 5:return j(t.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return t=ye(t.type,!1),t;case 11:return t=ye(t.type.render,!1),t;case 1:return t=ye(t.type,!0),t;default:return""}}function Re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case x:return"Fragment";case Se:return"Portal";case A:return"Profiler";case S:return"StrictMode";case T:return"Suspense";case Ve:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case R:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case We:return r=t.displayName||null,r!==null?r:Re(t.type)||"Memo";case st:r=t._payload,t=t._init;try{return Re(t(r))}catch{}}return null}function De(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Re(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Oe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function dt(t){var r=Fe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),u=""+t[r];if(!t.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(t,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Jn(t){t._valueTracker||(t._valueTracker=dt(t))}function Zi(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return t&&(u=Fe(t)?t.checked?"true":"false":t.value),t=u,t!==o?(r.setValue(t),!0):!1}function Rr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hi(t,r){var o=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function es(t,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Oe(r.value!=null?r.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function co(t,r){r=r.checked,r!=null&&ge(t,"checked",r,!1)}function ho(t,r){co(t,r);var o=Oe(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ts(t,r.type,o):r.hasOwnProperty("defaultValue")&&ts(t,r.type,Oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Da(t,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,o||r===t.value||(t.value=r),t.defaultValue=r}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ts(t,r,o){(r!=="number"||Rr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Zn=Array.isArray;function er(t,r,o,u){if(t=t.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<t.length;o++)h=r.hasOwnProperty("$"+t[o].value),t[o].selected!==h&&(t[o].selected=h),h&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Oe(o),r=null,h=0;h<t.length;h++){if(t[h].value===o){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function fo(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(n(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ns(t,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(n(92));if(Zn(o)){if(1<o.length)throw Error(n(93));o=o[0]}r=o}r==null&&(r=""),o=r}t._wrapperState={initialValue:Oe(o)}}function rs(t,r){var o=Oe(r.value),u=Oe(r.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),r.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function po(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function ot(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?ot(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tr,mo=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,h){MSApp.execUnsafeLocalFunction(function(){return t(r,o,u,h)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Cr(t,r){if(r){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=r;return}}t.textContent=r}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fi=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(t){fi.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),di[r]=di[t]})});function go(t,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||di.hasOwnProperty(t)&&di[t]?(""+r).trim():r+"px"}function yo(t,r){t=t.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=go(o,r[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,h):t[o]=h}}var vo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(t,r){if(r){if(vo[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(n(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(n(61))}if(r.style!=null&&typeof r.style!="object")throw Error(n(62))}}function Eo(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pi=null;function is(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ss=null,on=null,Ln=null;function os(t){if(t=Ho(t)){if(typeof ss!="function")throw Error(n(280));var r=t.stateNode;r&&(r=ll(r),ss(t.stateNode,t.type,r))}}function Mn(t){on?Ln?Ln.push(t):Ln=[t]:on=t}function wo(){if(on){var t=on,r=Ln;if(Ln=on=null,os(t),r)for(t=0;t<r.length;t++)os(r[t])}}function mi(t,r){return t(r)}function To(){}var nr=!1;function Io(t,r,o){if(nr)return t(r,o);nr=!0;try{return mi(t,r,o)}finally{nr=!1,(on!==null||Ln!==null)&&(To(),wo())}}function et(t,r){var o=t.stateNode;if(o===null)return null;var u=ll(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,r,typeof o));return o}var as=!1;if(g)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){as=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{as=!1}function gi(t,r,o,u,h,p,v,I,k){var b=Array.prototype.slice.call(arguments,3);try{r.apply(o,b)}catch(H){this.onError(H)}}var yi=!1,ls=null,vn=!1,So=null,$u={onError:function(t){yi=!0,ls=t}};function us(t,r,o,u,h,p,v,I,k){yi=!1,ls=null,gi.apply($u,arguments)}function Oa(t,r,o,u,h,p,v,I,k){if(us.apply(this,arguments),yi){if(yi){var b=ls;yi=!1,ls=null}else throw Error(n(198));vn||(vn=!0,So=b)}}function _n(t){var r=t,o=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(o=r.return),t=r.return;while(t)}return r.tag===3?o:null}function vi(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function En(t){if(_n(t)!==t)throw Error(n(188))}function Va(t){var r=t.alternate;if(!r){if(r=_n(t),r===null)throw Error(n(188));return r!==t?null:t}for(var o=t,u=r;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return En(h),t;if(p===u)return En(h),r;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=h,u=p;else{for(var v=!1,I=h.child;I;){if(I===o){v=!0,o=h,u=p;break}if(I===u){v=!0,u=h,o=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===o){v=!0,o=p,u=h;break}if(I===u){v=!0,u=p,o=h;break}I=I.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:r}function Ao(t){return t=Va(t),t!==null?cs(t):null}function cs(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=cs(t);if(r!==null)return r;t=t.sibling}return null}var hs=e.unstable_scheduleCallback,ko=e.unstable_cancelCallback,La=e.unstable_shouldYield,Hu=e.unstable_requestPaint,Ue=e.unstable_now,Ma=e.unstable_getCurrentPriorityLevel,_i=e.unstable_ImmediatePriority,Pr=e.unstable_UserBlockingPriority,an=e.unstable_NormalPriority,Ro=e.unstable_LowPriority,ba=e.unstable_IdlePriority,Ei=null,Jt=null;function Fa(t){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ei,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:ja,Co=Math.log,Ua=Math.LN2;function ja(t){return t>>>=0,t===0?32:31-(Co(t)/Ua|0)|0}var ds=64,fs=4194304;function Nr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wi(t,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,p=t.pingedLanes,v=o&268435455;if(v!==0){var I=v&~h;I!==0?u=Nr(I):(p&=v,p!==0&&(u=Nr(p)))}else v=o&~h,v!==0?u=Nr(v):p!==0&&(u=Nr(p));if(u===0)return 0;if(r!==0&&r!==u&&(r&h)===0&&(h=u&-u,p=r&-r,h>=p||h===16&&(p&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=u;0<r;)o=31-Mt(r),h=1<<o,u|=t[o],r&=~h;return u}function Wu(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rr(t,r){for(var o=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,p=t.pendingLanes;0<p;){var v=31-Mt(p),I=1<<v,k=h[v];k===-1?((I&o)===0||(I&u)!==0)&&(h[v]=Wu(I,r)):k<=r&&(t.expiredLanes|=I),p&=~I}}function Zt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ti(){var t=ds;return ds<<=1,(ds&4194240)===0&&(ds=64),t}function xr(t){for(var r=[],o=0;31>o;o++)r.push(t);return r}function Dr(t,r,o){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Mt(r),t[r]=o}function be(t,r){var o=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var h=31-Mt(o),p=1<<h;r[h]=0,u[h]=-1,t[h]=-1,o&=~p}}function Or(t,r){var o=t.entangledLanes|=r;for(t=t.entanglements;o;){var u=31-Mt(o),h=1<<u;h&r|t[u]&r&&(t[u]|=r),o&=~h}}var ke=0;function Vr(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var za,ps,Ba,$a,Ha,Po=!1,bn=[],Et=null,wn=null,Tn=null,Lr=new Map,ln=new Map,Fn=[],Ku="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(t,r){switch(t){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Lr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(r.pointerId)}}function jt(t,r,o,u,h,p){return t===null||t.nativeEvent!==p?(t={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},r!==null&&(r=Ho(r),r!==null&&ps(r)),t):(t.eventSystemFlags|=u,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function qu(t,r,o,u,h){switch(r){case"focusin":return Et=jt(Et,t,r,o,u,h),!0;case"dragenter":return wn=jt(wn,t,r,o,u,h),!0;case"mouseover":return Tn=jt(Tn,t,r,o,u,h),!0;case"pointerover":var p=h.pointerId;return Lr.set(p,jt(Lr.get(p)||null,t,r,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,ln.set(p,jt(ln.get(p)||null,t,r,o,u,h)),!0}return!1}function Ka(t){var r=Ri(t.target);if(r!==null){var o=_n(r);if(o!==null){if(r=o.tag,r===13){if(r=vi(o),r!==null){t.blockedOn=r,Ha(t.priority,function(){Ba(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ir(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var o=ms(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);pi=u,o.target.dispatchEvent(u),pi=null}else return r=Ho(o),r!==null&&ps(r),t.blockedOn=o,!1;r.shift()}return!0}function Ii(t,r,o){ir(t)&&o.delete(r)}function qa(){Po=!1,Et!==null&&ir(Et)&&(Et=null),wn!==null&&ir(wn)&&(wn=null),Tn!==null&&ir(Tn)&&(Tn=null),Lr.forEach(Ii),ln.forEach(Ii)}function In(t,r){t.blockedOn===r&&(t.blockedOn=null,Po||(Po=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qa)))}function Sn(t){function r(h){return In(h,t)}if(0<bn.length){In(bn[0],t);for(var o=1;o<bn.length;o++){var u=bn[o];u.blockedOn===t&&(u.blockedOn=null)}}for(Et!==null&&In(Et,t),wn!==null&&In(wn,t),Tn!==null&&In(Tn,t),Lr.forEach(r),ln.forEach(r),o=0;o<Fn.length;o++)u=Fn[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Fn.length&&(o=Fn[0],o.blockedOn===null);)Ka(o),o.blockedOn===null&&Fn.shift()}var sr=we.ReactCurrentBatchConfig,Mr=!0;function Ke(t,r,o,u){var h=ke,p=sr.transition;sr.transition=null;try{ke=1,No(t,r,o,u)}finally{ke=h,sr.transition=p}}function Gu(t,r,o,u){var h=ke,p=sr.transition;sr.transition=null;try{ke=4,No(t,r,o,u)}finally{ke=h,sr.transition=p}}function No(t,r,o,u){if(Mr){var h=ms(t,r,o,u);if(h===null)sc(t,r,u,Si,o),Wa(t,u);else if(qu(h,t,r,o,u))u.stopPropagation();else if(Wa(t,u),r&4&&-1<Ku.indexOf(t)){for(;h!==null;){var p=Ho(h);if(p!==null&&za(p),p=ms(t,r,o,u),p===null&&sc(t,r,u,Si,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else sc(t,r,u,null,o)}}var Si=null;function ms(t,r,o,u){if(Si=null,t=is(u),t=Ri(t),t!==null)if(r=_n(t),r===null)t=null;else if(o=r.tag,o===13){if(t=vi(r),t!==null)return t;t=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Si=t,null}function xo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ma()){case _i:return 1;case Pr:return 4;case an:case Ro:return 16;case ba:return 536870912;default:return 16}default:return 16}}var en=null,gs=null,zt=null;function Do(){if(zt)return zt;var t,r=gs,o=r.length,u,h="value"in en?en.value:en.textContent,p=h.length;for(t=0;t<o&&r[t]===h[t];t++);var v=o-t;for(u=1;u<=v&&r[o-u]===h[p-u];u++);return zt=h.slice(t,1<u?1-u:void 0)}function ys(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Un(){return!0}function Oo(){return!1}function wt(t){function r(o,u,h,p,v){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Un:Oo,this.isPropagationStopped=Oo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),r}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=wt(An),jn=ee({},An,{view:0,detail:0}),Qu=wt(jn),_s,or,br,Ai=ee({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zn,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==br&&(br&&t.type==="mousemove"?(_s=t.screenX-br.screenX,or=t.screenY-br.screenY):or=_s=0,br=t),_s)},movementY:function(t){return"movementY"in t?t.movementY:or}}),Es=wt(Ai),Vo=ee({},Ai,{dataTransfer:0}),Ga=wt(Vo),ws=ee({},jn,{relatedTarget:0}),Ts=wt(ws),Qa=ee({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),ar=wt(Qa),Xa=ee({},An,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ya=wt(Xa),Ja=ee({},An,{data:0}),Lo=wt(Ja),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Za={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function el(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Za[t])?!!r[t]:!1}function zn(){return el}var l=ee({},jn,{key:function(t){if(t.key){var r=Is[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zn,charCode:function(t){return t.type==="keypress"?ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f=wt(l),m=ee({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_=wt(m),V=ee({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zn}),F=wt(V),X=ee({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),Le=wt(X),lt=ee({},Ai,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ce=wt(lt),ft=[9,13,27,32],nt=g&&"CompositionEvent"in window,un=null;g&&"documentMode"in document&&(un=document.documentMode);var tn=g&&"TextEvent"in window&&!un,ki=g&&(!nt||un&&8<un&&11>=un),Ss=" ",zd=!1;function Bd(t,r){switch(t){case"keyup":return ft.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $d(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function xv(t,r){switch(t){case"compositionend":return $d(r);case"keypress":return r.which!==32?null:(zd=!0,Ss);case"textInput":return t=r.data,t===Ss&&zd?null:t;default:return null}}function Dv(t,r){if(As)return t==="compositionend"||!nt&&Bd(t,r)?(t=Do(),zt=gs=en=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ki&&r.locale!=="ko"?null:r.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Ov[t.type]:r==="textarea"}function Wd(t,r,o,u){Mn(u),r=sl(r,"onChange"),0<r.length&&(o=new vs("onChange","change",null,o,u),t.push({event:o,listeners:r}))}var Mo=null,bo=null;function Vv(t){cf(t,0)}function tl(t){var r=Ns(t);if(Zi(r))return t}function Lv(t,r){if(t==="change")return r}var Kd=!1;if(g){var Xu;if(g){var Yu="oninput"in document;if(!Yu){var qd=document.createElement("div");qd.setAttribute("oninput","return;"),Yu=typeof qd.oninput=="function"}Xu=Yu}else Xu=!1;Kd=Xu&&(!document.documentMode||9<document.documentMode)}function Gd(){Mo&&(Mo.detachEvent("onpropertychange",Qd),bo=Mo=null)}function Qd(t){if(t.propertyName==="value"&&tl(bo)){var r=[];Wd(r,bo,t,is(t)),Io(Vv,r)}}function Mv(t,r,o){t==="focusin"?(Gd(),Mo=r,bo=o,Mo.attachEvent("onpropertychange",Qd)):t==="focusout"&&Gd()}function bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tl(bo)}function Fv(t,r){if(t==="click")return tl(r)}function Uv(t,r){if(t==="input"||t==="change")return tl(r)}function jv(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var kn=typeof Object.is=="function"?Object.is:jv;function Fo(t,r){if(kn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var o=Object.keys(t),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!y.call(r,h)||!kn(t[h],r[h]))return!1}return!0}function Xd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yd(t,r){var o=Xd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=r&&u>=r)return{node:o,offset:r-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function Jd(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Jd(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Zd(){for(var t=window,r=Rr();r instanceof t.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)t=r.contentWindow;else break;r=Rr(t.document)}return r}function Ju(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function zv(t){var r=Zd(),o=t.focusedElem,u=t.selectionRange;if(r!==o&&o&&o.ownerDocument&&Jd(o.ownerDocument.documentElement,o)){if(u!==null&&Ju(o)){if(r=u.start,t=u.end,t===void 0&&(t=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(t,o.value.length);else if(t=(r=o.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var h=o.textContent.length,p=Math.min(u.start,h);u=u.end===void 0?p:Math.min(u.end,h),!t.extend&&p>u&&(h=u,u=p,p=h),h=Yd(o,p);var v=Yd(o,u);h&&v&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(h.node,h.offset),t.removeAllRanges(),p>u?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=o;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)t=r[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=g&&"documentMode"in document&&11>=document.documentMode,ks=null,Zu=null,Uo=null,ec=!1;function ef(t,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ec||ks==null||ks!==Rr(u)||(u=ks,"selectionStart"in u&&Ju(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Uo&&Fo(Uo,u)||(Uo=u,u=sl(Zu,"onSelect"),0<u.length&&(r=new vs("onSelect","select",null,r,o),t.push({event:r,listeners:u}),r.target=ks)))}function nl(t,r){var o={};return o[t.toLowerCase()]=r.toLowerCase(),o["Webkit"+t]="webkit"+r,o["Moz"+t]="moz"+r,o}var Rs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},tc={},tf={};g&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function rl(t){if(tc[t])return tc[t];if(!Rs[t])return t;var r=Rs[t],o;for(o in r)if(r.hasOwnProperty(o)&&o in tf)return tc[t]=r[o];return t}var nf=rl("animationend"),rf=rl("animationiteration"),sf=rl("animationstart"),of=rl("transitionend"),af=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,r){af.set(t,r),c(r,[t])}for(var nc=0;nc<lf.length;nc++){var rc=lf[nc],$v=rc.toLowerCase(),Hv=rc[0].toUpperCase()+rc.slice(1);Fr($v,"on"+Hv)}Fr(nf,"onAnimationEnd"),Fr(rf,"onAnimationIteration"),Fr(sf,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(of,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function uf(t,r,o){var u=t.type||"unknown-event";t.currentTarget=o,Oa(u,r,void 0,t),t.currentTarget=null}function cf(t,r){r=(r&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],h=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var I=u[v],k=I.instance,b=I.currentTarget;if(I=I.listener,k!==p&&h.isPropagationStopped())break e;uf(h,I,b),p=k}else for(v=0;v<u.length;v++){if(I=u[v],k=I.instance,b=I.currentTarget,I=I.listener,k!==p&&h.isPropagationStopped())break e;uf(h,I,b),p=k}}}if(vn)throw t=So,vn=!1,So=null,t}function Be(t,r){var o=r[hc];o===void 0&&(o=r[hc]=new Set);var u=t+"__bubble";o.has(u)||(hf(r,t,2,!1),o.add(u))}function ic(t,r,o){var u=0;r&&(u|=4),hf(o,t,u,r)}var il="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[il]){t[il]=!0,s.forEach(function(o){o!=="selectionchange"&&(Wv.has(o)||ic(o,!1,t),ic(o,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[il]||(r[il]=!0,ic("selectionchange",!1,r))}}function hf(t,r,o,u){switch(xo(r)){case 1:var h=Ke;break;case 4:h=Gu;break;default:h=No}o=h.bind(null,r,o,t),h=void 0,!as||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(r,o,{capture:!0,passive:h}):t.addEventListener(r,o,!0):h!==void 0?t.addEventListener(r,o,{passive:h}):t.addEventListener(r,o,!1)}function sc(t,r,o,u,h){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var I=u.stateNode.containerInfo;if(I===h||I.nodeType===8&&I.parentNode===h)break;if(v===4)for(v=u.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;v=v.return}for(;I!==null;){if(v=Ri(I),v===null)return;if(k=v.tag,k===5||k===6){u=p=v;continue e}I=I.parentNode}}u=u.return}Io(function(){var b=p,H=is(o),W=[];e:{var $=af.get(t);if($!==void 0){var te=vs,re=t;switch(t){case"keypress":if(ys(o)===0)break e;case"keydown":case"keyup":te=f;break;case"focusin":re="focus",te=Ts;break;case"focusout":re="blur",te=Ts;break;case"beforeblur":case"afterblur":te=Ts;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=Ga;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=F;break;case nf:case rf:case sf:te=ar;break;case of:te=Le;break;case"scroll":te=Qu;break;case"wheel":te=Ce;break;case"copy":case"cut":case"paste":te=Ya;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=_}var ie=(r&4)!==0,tt=!ie&&t==="scroll",L=ie?$!==null?$+"Capture":null:$;ie=[];for(var N=b,M;N!==null;){M=N;var G=M.stateNode;if(M.tag===5&&G!==null&&(M=G,L!==null&&(G=et(N,L),G!=null&&ie.push(Bo(N,G,M)))),tt)break;N=N.return}0<ie.length&&($=new te($,re,null,o,H),W.push({event:$,listeners:ie}))}}if((r&7)===0){e:{if($=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",$&&o!==pi&&(re=o.relatedTarget||o.fromElement)&&(Ri(re)||re[lr]))break e;if((te||$)&&($=H.window===H?H:($=H.ownerDocument)?$.defaultView||$.parentWindow:window,te?(re=o.relatedTarget||o.toElement,te=b,re=re?Ri(re):null,re!==null&&(tt=_n(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(te=null,re=b),te!==re)){if(ie=Es,G="onMouseLeave",L="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(ie=_,G="onPointerLeave",L="onPointerEnter",N="pointer"),tt=te==null?$:Ns(te),M=re==null?$:Ns(re),$=new ie(G,N+"leave",te,o,H),$.target=tt,$.relatedTarget=M,G=null,Ri(H)===b&&(ie=new ie(L,N+"enter",re,o,H),ie.target=M,ie.relatedTarget=tt,G=ie),tt=G,te&&re)t:{for(ie=te,L=re,N=0,M=ie;M;M=Cs(M))N++;for(M=0,G=L;G;G=Cs(G))M++;for(;0<N-M;)ie=Cs(ie),N--;for(;0<M-N;)L=Cs(L),M--;for(;N--;){if(ie===L||L!==null&&ie===L.alternate)break t;ie=Cs(ie),L=Cs(L)}ie=null}else ie=null;te!==null&&df(W,$,te,ie,!1),re!==null&&tt!==null&&df(W,tt,re,ie,!0)}}e:{if($=b?Ns(b):window,te=$.nodeName&&$.nodeName.toLowerCase(),te==="select"||te==="input"&&$.type==="file")var oe=Lv;else if(Hd($))if(Kd)oe=Uv;else{oe=bv;var ue=Mv}else(te=$.nodeName)&&te.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(oe=Fv);if(oe&&(oe=oe(t,b))){Wd(W,oe,o,H);break e}ue&&ue(t,$,b),t==="focusout"&&(ue=$._wrapperState)&&ue.controlled&&$.type==="number"&&ts($,"number",$.value)}switch(ue=b?Ns(b):window,t){case"focusin":(Hd(ue)||ue.contentEditable==="true")&&(ks=ue,Zu=b,Uo=null);break;case"focusout":Uo=Zu=ks=null;break;case"mousedown":ec=!0;break;case"contextmenu":case"mouseup":case"dragend":ec=!1,ef(W,o,H);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":ef(W,o,H)}var ce;if(nt)e:{switch(t){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else As?Bd(t,o)&&(de="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(ki&&o.locale!=="ko"&&(As||de!=="onCompositionStart"?de==="onCompositionEnd"&&As&&(ce=Do()):(en=H,gs="value"in en?en.value:en.textContent,As=!0)),ue=sl(b,de),0<ue.length&&(de=new Lo(de,t,null,o,H),W.push({event:de,listeners:ue}),ce?de.data=ce:(ce=$d(o),ce!==null&&(de.data=ce)))),(ce=tn?xv(t,o):Dv(t,o))&&(b=sl(b,"onBeforeInput"),0<b.length&&(H=new Lo("onBeforeInput","beforeinput",null,o,H),W.push({event:H,listeners:b}),H.data=ce))}cf(W,r)})}function Bo(t,r,o){return{instance:t,listener:r,currentTarget:o}}function sl(t,r){for(var o=r+"Capture",u=[];t!==null;){var h=t,p=h.stateNode;h.tag===5&&p!==null&&(h=p,p=et(t,o),p!=null&&u.unshift(Bo(t,p,h)),p=et(t,r),p!=null&&u.push(Bo(t,p,h))),t=t.return}return u}function Cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,r,o,u,h){for(var p=r._reactName,v=[];o!==null&&o!==u;){var I=o,k=I.alternate,b=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&b!==null&&(I=b,h?(k=et(o,p),k!=null&&v.unshift(Bo(o,k,I))):h||(k=et(o,p),k!=null&&v.push(Bo(o,k,I)))),o=o.return}v.length!==0&&t.push({event:r,listeners:v})}var Kv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function ff(t){return(typeof t=="string"?t:""+t).replace(Kv,`
`).replace(qv,"")}function ol(t,r,o){if(r=ff(r),ff(t)!==r&&o)throw Error(n(425))}function al(){}var oc=null,ac=null;function lc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(t){return pf.resolve(null).then(t).catch(Xv)}:uc;function Xv(t){setTimeout(function(){throw t})}function cc(t,r){var o=r,u=0;do{var h=o.nextSibling;if(t.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){t.removeChild(h),Sn(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Sn(r)}function Ur(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function mf(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return t;r--}else o==="/$"&&r++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Bn="__reactFiber$"+Ps,$o="__reactProps$"+Ps,lr="__reactContainer$"+Ps,hc="__reactEvents$"+Ps,Yv="__reactListeners$"+Ps,Jv="__reactHandles$"+Ps;function Ri(t){var r=t[Bn];if(r)return r;for(var o=t.parentNode;o;){if(r=o[lr]||o[Bn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(t=mf(t);t!==null;){if(o=t[Bn])return o;t=mf(t)}return r}t=o,o=t.parentNode}return null}function Ho(t){return t=t[Bn]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ll(t){return t[$o]||null}var dc=[],xs=-1;function jr(t){return{current:t}}function $e(t){0>xs||(t.current=dc[xs],dc[xs]=null,xs--)}function je(t,r){xs++,dc[xs]=t.current,t.current=r}var zr={},Ct=jr(zr),Bt=jr(!1),Ci=zr;function Ds(t,r){var o=t.type.contextTypes;if(!o)return zr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var h={},p;for(p in o)h[p]=r[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=h),h}function $t(t){return t=t.childContextTypes,t!=null}function ul(){$e(Bt),$e(Ct)}function gf(t,r,o){if(Ct.current!==zr)throw Error(n(168));je(Ct,r),je(Bt,o)}function yf(t,r,o){var u=t.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in r))throw Error(n(108,De(t)||"Unknown",h));return ee({},o,u)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Ci=Ct.current,je(Ct,t),je(Bt,Bt.current),!0}function vf(t,r,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=yf(t,r,Ci),u.__reactInternalMemoizedMergedChildContext=t,$e(Bt),$e(Ct),je(Ct,t)):$e(Bt),je(Bt,o)}var ur=null,hl=!1,fc=!1;function _f(t){ur===null?ur=[t]:ur.push(t)}function Zv(t){hl=!0,_f(t)}function Br(){if(!fc&&ur!==null){fc=!0;var t=0,r=ke;try{var o=ur;for(ke=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}ur=null,hl=!1}catch(h){throw ur!==null&&(ur=ur.slice(t+1)),hs(_i,Br),h}finally{ke=r,fc=!1}}return null}var Os=[],Vs=0,dl=null,fl=0,cn=[],hn=0,Pi=null,cr=1,hr="";function Ni(t,r){Os[Vs++]=fl,Os[Vs++]=dl,dl=t,fl=r}function Ef(t,r,o){cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Pi,Pi=t;var u=cr;t=hr;var h=32-Mt(u)-1;u&=~(1<<h),o+=1;var p=32-Mt(r)+h;if(30<p){var v=h-h%5;p=(u&(1<<v)-1).toString(32),u>>=v,h-=v,cr=1<<32-Mt(r)+h|o<<h|u,hr=p+t}else cr=1<<p|o<<h|u,hr=t}function pc(t){t.return!==null&&(Ni(t,1),Ef(t,1,0))}function mc(t){for(;t===dl;)dl=Os[--Vs],Os[Vs]=null,fl=Os[--Vs],Os[Vs]=null;for(;t===Pi;)Pi=cn[--hn],cn[hn]=null,hr=cn[--hn],cn[hn]=null,cr=cn[--hn],cn[hn]=null}var nn=null,rn=null,qe=!1,Rn=null;function wf(t,r){var o=mn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=t,r=t.deletions,r===null?(t.deletions=[o],t.flags|=16):r.push(o)}function Tf(t,r){switch(t.tag){case 5:var o=t.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,nn=t,rn=Ur(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,nn=t,rn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Pi!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mn(18,null,null,0),o.stateNode=r,o.return=t,t.child=o,nn=t,rn=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(qe){var r=rn;if(r){var o=r;if(!Tf(t,r)){if(gc(t))throw Error(n(418));r=Ur(o.nextSibling);var u=nn;r&&Tf(t,r)?wf(u,o):(t.flags=t.flags&-4097|2,qe=!1,nn=t)}}else{if(gc(t))throw Error(n(418));t.flags=t.flags&-4097|2,qe=!1,nn=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function pl(t){if(t!==nn)return!1;if(!qe)return If(t),qe=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!lc(t.type,t.memoizedProps)),r&&(r=rn)){if(gc(t))throw Sf(),Error(n(418));for(;r;)wf(t,r),r=Ur(r.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(r===0){rn=Ur(t.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}t=t.nextSibling}rn=null}}else rn=nn?Ur(t.stateNode.nextSibling):null;return!0}function Sf(){for(var t=rn;t;)t=Ur(t.nextSibling)}function Ls(){rn=nn=null,qe=!1}function vc(t){Rn===null?Rn=[t]:Rn.push(t)}var e_=we.ReactCurrentBatchConfig;function Wo(t,r,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var h=u,p=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=h.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function ml(t,r){throw t=Object.prototype.toString.call(r),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Af(t){var r=t._init;return r(t._payload)}function kf(t){function r(L,N){if(t){var M=L.deletions;M===null?(L.deletions=[N],L.flags|=16):M.push(N)}}function o(L,N){if(!t)return null;for(;N!==null;)r(L,N),N=N.sibling;return null}function u(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function h(L,N){return L=Xr(L,N),L.index=0,L.sibling=null,L}function p(L,N,M){return L.index=M,t?(M=L.alternate,M!==null?(M=M.index,M<N?(L.flags|=2,N):M):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return t&&L.alternate===null&&(L.flags|=2),L}function I(L,N,M,G){return N===null||N.tag!==6?(N=uh(M,L.mode,G),N.return=L,N):(N=h(N,M),N.return=L,N)}function k(L,N,M,G){var oe=M.type;return oe===x?H(L,N,M.props.children,G,M.key):N!==null&&(N.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===st&&Af(oe)===N.type)?(G=h(N,M.props),G.ref=Wo(L,N,M),G.return=L,G):(G=Ul(M.type,M.key,M.props,null,L.mode,G),G.ref=Wo(L,N,M),G.return=L,G)}function b(L,N,M,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==M.containerInfo||N.stateNode.implementation!==M.implementation?(N=ch(M,L.mode,G),N.return=L,N):(N=h(N,M.children||[]),N.return=L,N)}function H(L,N,M,G,oe){return N===null||N.tag!==7?(N=Fi(M,L.mode,G,oe),N.return=L,N):(N=h(N,M),N.return=L,N)}function W(L,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return N=uh(""+N,L.mode,M),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case He:return M=Ul(N.type,N.key,N.props,null,L.mode,M),M.ref=Wo(L,null,N),M.return=L,M;case Se:return N=ch(N,L.mode,M),N.return=L,N;case st:var G=N._init;return W(L,G(N._payload),M)}if(Zn(N)||le(N))return N=Fi(N,L.mode,M,null),N.return=L,N;ml(L,N)}return null}function $(L,N,M,G){var oe=N!==null?N.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return oe!==null?null:I(L,N,""+M,G);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case He:return M.key===oe?k(L,N,M,G):null;case Se:return M.key===oe?b(L,N,M,G):null;case st:return oe=M._init,$(L,N,oe(M._payload),G)}if(Zn(M)||le(M))return oe!==null?null:H(L,N,M,G,null);ml(L,M)}return null}function te(L,N,M,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number")return L=L.get(M)||null,I(N,L,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case He:return L=L.get(G.key===null?M:G.key)||null,k(N,L,G,oe);case Se:return L=L.get(G.key===null?M:G.key)||null,b(N,L,G,oe);case st:var ue=G._init;return te(L,N,M,ue(G._payload),oe)}if(Zn(G)||le(G))return L=L.get(M)||null,H(N,L,G,oe,null);ml(N,G)}return null}function re(L,N,M,G){for(var oe=null,ue=null,ce=N,de=N=0,gt=null;ce!==null&&de<M.length;de++){ce.index>de?(gt=ce,ce=null):gt=ce.sibling;var xe=$(L,ce,M[de],G);if(xe===null){ce===null&&(ce=gt);break}t&&ce&&xe.alternate===null&&r(L,ce),N=p(xe,N,de),ue===null?oe=xe:ue.sibling=xe,ue=xe,ce=gt}if(de===M.length)return o(L,ce),qe&&Ni(L,de),oe;if(ce===null){for(;de<M.length;de++)ce=W(L,M[de],G),ce!==null&&(N=p(ce,N,de),ue===null?oe=ce:ue.sibling=ce,ue=ce);return qe&&Ni(L,de),oe}for(ce=u(L,ce);de<M.length;de++)gt=te(ce,L,de,M[de],G),gt!==null&&(t&&gt.alternate!==null&&ce.delete(gt.key===null?de:gt.key),N=p(gt,N,de),ue===null?oe=gt:ue.sibling=gt,ue=gt);return t&&ce.forEach(function(Yr){return r(L,Yr)}),qe&&Ni(L,de),oe}function ie(L,N,M,G){var oe=le(M);if(typeof oe!="function")throw Error(n(150));if(M=oe.call(M),M==null)throw Error(n(151));for(var ue=oe=null,ce=N,de=N=0,gt=null,xe=M.next();ce!==null&&!xe.done;de++,xe=M.next()){ce.index>de?(gt=ce,ce=null):gt=ce.sibling;var Yr=$(L,ce,xe.value,G);if(Yr===null){ce===null&&(ce=gt);break}t&&ce&&Yr.alternate===null&&r(L,ce),N=p(Yr,N,de),ue===null?oe=Yr:ue.sibling=Yr,ue=Yr,ce=gt}if(xe.done)return o(L,ce),qe&&Ni(L,de),oe;if(ce===null){for(;!xe.done;de++,xe=M.next())xe=W(L,xe.value,G),xe!==null&&(N=p(xe,N,de),ue===null?oe=xe:ue.sibling=xe,ue=xe);return qe&&Ni(L,de),oe}for(ce=u(L,ce);!xe.done;de++,xe=M.next())xe=te(ce,L,de,xe.value,G),xe!==null&&(t&&xe.alternate!==null&&ce.delete(xe.key===null?de:xe.key),N=p(xe,N,de),ue===null?oe=xe:ue.sibling=xe,ue=xe);return t&&ce.forEach(function(O_){return r(L,O_)}),qe&&Ni(L,de),oe}function tt(L,N,M,G){if(typeof M=="object"&&M!==null&&M.type===x&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case He:e:{for(var oe=M.key,ue=N;ue!==null;){if(ue.key===oe){if(oe=M.type,oe===x){if(ue.tag===7){o(L,ue.sibling),N=h(ue,M.props.children),N.return=L,L=N;break e}}else if(ue.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===st&&Af(oe)===ue.type){o(L,ue.sibling),N=h(ue,M.props),N.ref=Wo(L,ue,M),N.return=L,L=N;break e}o(L,ue);break}else r(L,ue);ue=ue.sibling}M.type===x?(N=Fi(M.props.children,L.mode,G,M.key),N.return=L,L=N):(G=Ul(M.type,M.key,M.props,null,L.mode,G),G.ref=Wo(L,N,M),G.return=L,L=G)}return v(L);case Se:e:{for(ue=M.key;N!==null;){if(N.key===ue)if(N.tag===4&&N.stateNode.containerInfo===M.containerInfo&&N.stateNode.implementation===M.implementation){o(L,N.sibling),N=h(N,M.children||[]),N.return=L,L=N;break e}else{o(L,N);break}else r(L,N);N=N.sibling}N=ch(M,L.mode,G),N.return=L,L=N}return v(L);case st:return ue=M._init,tt(L,N,ue(M._payload),G)}if(Zn(M))return re(L,N,M,G);if(le(M))return ie(L,N,M,G);ml(L,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,N!==null&&N.tag===6?(o(L,N.sibling),N=h(N,M),N.return=L,L=N):(o(L,N),N=uh(M,L.mode,G),N.return=L,L=N),v(L)):o(L,N)}return tt}var Ms=kf(!0),Rf=kf(!1),gl=jr(null),yl=null,bs=null,_c=null;function Ec(){_c=bs=yl=null}function wc(t){var r=gl.current;$e(gl),t._currentValue=r}function Tc(t,r,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),t===o)break;t=t.return}}function Fs(t,r){yl=t,_c=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Ht=!0),t.firstContext=null)}function dn(t){var r=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:r,next:null},bs===null){if(yl===null)throw Error(n(308));bs=t,yl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return r}var xi=null;function Ic(t){xi===null?xi=[t]:xi.push(t)}function Cf(t,r,o,u){var h=r.interleaved;return h===null?(o.next=o,Ic(r)):(o.next=h.next,h.next=o),r.interleaved=o,dr(t,u)}function dr(t,r){t.lanes|=r;var o=t.alternate;for(o!==null&&(o.lanes|=r),o=t,t=t.return;t!==null;)t.childLanes|=r,o=t.alternate,o!==null&&(o.childLanes|=r),o=t,t=t.return;return o.tag===3?o.stateNode:null}var $r=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Hr(t,r,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,dr(t,o)}return h=u.interleaved,h===null?(r.next=r,Ic(u)):(r.next=h.next,h.next=r),u.interleaved=r,dr(t,o)}function vl(t,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Or(t,o)}}function Nf(t,r){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?h=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?h=p=r:p=p.next=r}else h=p=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=r:t.next=r,o.lastBaseUpdate=r}function _l(t,r,o,u){var h=t.updateQueue;$r=!1;var p=h.firstBaseUpdate,v=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var k=I,b=k.next;k.next=null,v===null?p=b:v.next=b,v=k;var H=t.alternate;H!==null&&(H=H.updateQueue,I=H.lastBaseUpdate,I!==v&&(I===null?H.firstBaseUpdate=b:I.next=b,H.lastBaseUpdate=k))}if(p!==null){var W=h.baseState;v=0,H=b=k=null,I=p;do{var $=I.lane,te=I.eventTime;if((u&$)===$){H!==null&&(H=H.next={eventTime:te,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var re=t,ie=I;switch($=r,te=o,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){W=re.call(te,W,$);break e}W=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,$=typeof re=="function"?re.call(te,W,$):re,$==null)break e;W=ee({},W,$);break e;case 2:$r=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,$=h.effects,$===null?h.effects=[I]:$.push(I))}else te={eventTime:te,lane:$,tag:I.tag,payload:I.payload,callback:I.callback,next:null},H===null?(b=H=te,k=W):H=H.next=te,v|=$;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;$=I,I=$.next,$.next=null,h.lastBaseUpdate=$,h.shared.pending=null}}while(!0);if(H===null&&(k=W),h.baseState=k,h.firstBaseUpdate=b,h.lastBaseUpdate=H,r=h.shared.interleaved,r!==null){h=r;do v|=h.lane,h=h.next;while(h!==r)}else p===null&&(h.shared.lanes=0);Vi|=v,t.lanes=v,t.memoizedState=W}}function xf(t,r,o){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var u=t[r],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ko={},$n=jr(Ko),qo=jr(Ko),Go=jr(Ko);function Di(t){if(t===Ko)throw Error(n(174));return t}function Ac(t,r){switch(je(Go,r),je(qo,t),je($n,Ko),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:at(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=at(r,t)}$e($n),je($n,r)}function Us(){$e($n),$e(qo),$e(Go)}function Df(t){Di(Go.current);var r=Di($n.current),o=at(r,t.type);r!==o&&(je(qo,t),je($n,o))}function kc(t){qo.current===t&&($e($n),$e(qo))}var Qe=jr(0);function El(t){for(var r=t;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Rc=[];function Cc(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var wl=we.ReactCurrentDispatcher,Pc=we.ReactCurrentBatchConfig,Oi=0,Xe=null,ut=null,pt=null,Tl=!1,Qo=!1,Xo=0,t_=0;function Pt(){throw Error(n(321))}function Nc(t,r){if(r===null)return!1;for(var o=0;o<r.length&&o<t.length;o++)if(!kn(t[o],r[o]))return!1;return!0}function xc(t,r,o,u,h,p){if(Oi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,wl.current=t===null||t.memoizedState===null?s_:o_,t=o(u,h),Qo){p=0;do{if(Qo=!1,Xo=0,25<=p)throw Error(n(301));p+=1,pt=ut=null,r.updateQueue=null,wl.current=a_,t=o(u,h)}while(Qo)}if(wl.current=Al,r=ut!==null&&ut.next!==null,Oi=0,pt=ut=Xe=null,Tl=!1,r)throw Error(n(300));return t}function Dc(){var t=Xo!==0;return Xo=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Xe.memoizedState=pt=t:pt=pt.next=t,pt}function fn(){if(ut===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var r=pt===null?Xe.memoizedState:pt.next;if(r!==null)pt=r,ut=t;else{if(t===null)throw Error(n(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?Xe.memoizedState=pt=t:pt=pt.next=t}return pt}function Yo(t,r){return typeof r=="function"?r(t):r}function Oc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=ut,h=u.baseQueue,p=o.pending;if(p!==null){if(h!==null){var v=h.next;h.next=p.next,p.next=v}u.baseQueue=h=p,o.pending=null}if(h!==null){p=h.next,u=u.baseState;var I=v=null,k=null,b=p;do{var H=b.lane;if((Oi&H)===H)k!==null&&(k=k.next={lane:0,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null}),u=b.hasEagerState?b.eagerState:t(u,b.action);else{var W={lane:H,action:b.action,hasEagerState:b.hasEagerState,eagerState:b.eagerState,next:null};k===null?(I=k=W,v=u):k=k.next=W,Xe.lanes|=H,Vi|=H}b=b.next}while(b!==null&&b!==p);k===null?v=u:k.next=I,kn(u,r.memoizedState)||(Ht=!0),r.memoizedState=u,r.baseState=v,r.baseQueue=k,o.lastRenderedState=u}if(t=o.interleaved,t!==null){h=t;do p=h.lane,Xe.lanes|=p,Vi|=p,h=h.next;while(h!==t)}else h===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Vc(t){var r=fn(),o=r.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,h=o.pending,p=r.memoizedState;if(h!==null){o.pending=null;var v=h=h.next;do p=t(p,v.action),v=v.next;while(v!==h);kn(p,r.memoizedState)||(Ht=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function Of(){}function Vf(t,r){var o=Xe,u=fn(),h=r(),p=!kn(u.memoizedState,h);if(p&&(u.memoizedState=h,Ht=!0),u=u.queue,Lc(bf.bind(null,o,u,t),[t]),u.getSnapshot!==r||p||pt!==null&&pt.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Mf.bind(null,o,u,h,r),void 0,null),mt===null)throw Error(n(349));(Oi&30)!==0||Lf(o,r,h)}return h}function Lf(t,r,o){t.flags|=16384,t={getSnapshot:r,value:o},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[t]):(o=r.stores,o===null?r.stores=[t]:o.push(t))}function Mf(t,r,o,u){r.value=o,r.getSnapshot=u,Ff(r)&&Uf(t)}function bf(t,r,o){return o(function(){Ff(r)&&Uf(t)})}function Ff(t){var r=t.getSnapshot;t=t.value;try{var o=r();return!kn(t,o)}catch{return!0}}function Uf(t){var r=dr(t,1);r!==null&&xn(r,t,1,-1)}function jf(t){var r=Hn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},r.queue=t,t=t.dispatch=i_.bind(null,Xe,t),[r.memoizedState,t]}function Jo(t,r,o,u){return t={tag:t,create:r,destroy:o,deps:u,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=t.next=t):(o=r.lastEffect,o===null?r.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,r.lastEffect=t)),t}function zf(){return fn().memoizedState}function Il(t,r,o,u){var h=Hn();Xe.flags|=t,h.memoizedState=Jo(1|r,o,void 0,u===void 0?null:u)}function Sl(t,r,o,u){var h=fn();u=u===void 0?null:u;var p=void 0;if(ut!==null){var v=ut.memoizedState;if(p=v.destroy,u!==null&&Nc(u,v.deps)){h.memoizedState=Jo(r,o,p,u);return}}Xe.flags|=t,h.memoizedState=Jo(1|r,o,p,u)}function Bf(t,r){return Il(8390656,8,t,r)}function Lc(t,r){return Sl(2048,8,t,r)}function $f(t,r){return Sl(4,2,t,r)}function Hf(t,r){return Sl(4,4,t,r)}function Wf(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Kf(t,r,o){return o=o!=null?o.concat([t]):null,Sl(4,4,Wf.bind(null,r,t),o)}function Mc(){}function qf(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Nc(r,u[1])?u[0]:(o.memoizedState=[t,r],t)}function Gf(t,r){var o=fn();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&Nc(r,u[1])?u[0]:(t=t(),o.memoizedState=[t,r],t)}function Qf(t,r,o){return(Oi&21)===0?(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=o):(kn(o,r)||(o=Ti(),Xe.lanes|=o,Vi|=o,t.baseState=!0),r)}function n_(t,r){var o=ke;ke=o!==0&&4>o?o:4,t(!0);var u=Pc.transition;Pc.transition={};try{t(!1),r()}finally{ke=o,Pc.transition=u}}function Xf(){return fn().memoizedState}function r_(t,r,o){var u=Gr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Yf(t))Jf(r,o);else if(o=Cf(t,r,o,u),o!==null){var h=Ut();xn(o,t,u,h),Zf(o,r,u)}}function i_(t,r,o){var u=Gr(t),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yf(t))Jf(r,h);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,o);if(h.hasEagerState=!0,h.eagerState=I,kn(I,v)){var k=r.interleaved;k===null?(h.next=h,Ic(r)):(h.next=k.next,k.next=h),r.interleaved=h;return}}catch{}finally{}o=Cf(t,r,h,u),o!==null&&(h=Ut(),xn(o,t,u,h),Zf(o,r,u))}}function Yf(t){var r=t.alternate;return t===Xe||r!==null&&r===Xe}function Jf(t,r){Qo=Tl=!0;var o=t.pending;o===null?r.next=r:(r.next=o.next,o.next=r),t.pending=r}function Zf(t,r,o){if((o&4194240)!==0){var u=r.lanes;u&=t.pendingLanes,o|=u,r.lanes=o,Or(t,o)}}var Al={readContext:dn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},s_={readContext:dn,useCallback:function(t,r){return Hn().memoizedState=[t,r===void 0?null:r],t},useContext:dn,useEffect:Bf,useImperativeHandle:function(t,r,o){return o=o!=null?o.concat([t]):null,Il(4194308,4,Wf.bind(null,r,t),o)},useLayoutEffect:function(t,r){return Il(4194308,4,t,r)},useInsertionEffect:function(t,r){return Il(4,2,t,r)},useMemo:function(t,r){var o=Hn();return r=r===void 0?null:r,t=t(),o.memoizedState=[t,r],t},useReducer:function(t,r,o){var u=Hn();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},u.queue=t,t=t.dispatch=r_.bind(null,Xe,t),[u.memoizedState,t]},useRef:function(t){var r=Hn();return t={current:t},r.memoizedState=t},useState:jf,useDebugValue:Mc,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=jf(!1),r=t[0];return t=n_.bind(null,t[1]),Hn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,o){var u=Xe,h=Hn();if(qe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=r(),mt===null)throw Error(n(349));(Oi&30)!==0||Lf(u,r,o)}h.memoizedState=o;var p={value:o,getSnapshot:r};return h.queue=p,Bf(bf.bind(null,u,p,t),[t]),u.flags|=2048,Jo(9,Mf.bind(null,u,p,o,r),void 0,null),o},useId:function(){var t=Hn(),r=mt.identifierPrefix;if(qe){var o=hr,u=cr;o=(u&~(1<<32-Mt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=t_++,r=":"+r+"r"+o.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},o_={readContext:dn,useCallback:qf,useContext:dn,useEffect:Lc,useImperativeHandle:Kf,useInsertionEffect:$f,useLayoutEffect:Hf,useMemo:Gf,useReducer:Oc,useRef:zf,useState:function(){return Oc(Yo)},useDebugValue:Mc,useDeferredValue:function(t){var r=fn();return Qf(r,ut.memoizedState,t)},useTransition:function(){var t=Oc(Yo)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Of,useSyncExternalStore:Vf,useId:Xf,unstable_isNewReconciler:!1},a_={readContext:dn,useCallback:qf,useContext:dn,useEffect:Lc,useImperativeHandle:Kf,useInsertionEffect:$f,useLayoutEffect:Hf,useMemo:Gf,useReducer:Vc,useRef:zf,useState:function(){return Vc(Yo)},useDebugValue:Mc,useDeferredValue:function(t){var r=fn();return ut===null?r.memoizedState=t:Qf(r,ut.memoizedState,t)},useTransition:function(){var t=Vc(Yo)[0],r=fn().memoizedState;return[t,r]},useMutableSource:Of,useSyncExternalStore:Vf,useId:Xf,unstable_isNewReconciler:!1};function Cn(t,r){if(t&&t.defaultProps){r=ee({},r),t=t.defaultProps;for(var o in t)r[o]===void 0&&(r[o]=t[o]);return r}return r}function bc(t,r,o,u){r=t.memoizedState,o=o(u,r),o=o==null?r:ee({},r,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var kl={isMounted:function(t){return(t=t._reactInternals)?_n(t)===t:!1},enqueueSetState:function(t,r,o){t=t._reactInternals;var u=Ut(),h=Gr(t),p=fr(u,h);p.payload=r,o!=null&&(p.callback=o),r=Hr(t,p,h),r!==null&&(xn(r,t,h,u),vl(r,t,h))},enqueueReplaceState:function(t,r,o){t=t._reactInternals;var u=Ut(),h=Gr(t),p=fr(u,h);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Hr(t,p,h),r!==null&&(xn(r,t,h,u),vl(r,t,h))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var o=Ut(),u=Gr(t),h=fr(o,u);h.tag=2,r!=null&&(h.callback=r),r=Hr(t,h,u),r!==null&&(xn(r,t,u,o),vl(r,t,u))}};function ep(t,r,o,u,h,p,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Fo(o,u)||!Fo(h,p):!0}function tp(t,r,o){var u=!1,h=zr,p=r.contextType;return typeof p=="object"&&p!==null?p=dn(p):(h=$t(r)?Ci:Ct.current,u=r.contextTypes,p=(u=u!=null)?Ds(t,h):zr),r=new r(o,p),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=kl,t.stateNode=r,r._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=p),r}function np(t,r,o,u){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==t&&kl.enqueueReplaceState(r,r.state,null)}function Fc(t,r,o,u){var h=t.stateNode;h.props=o,h.state=t.memoizedState,h.refs={},Sc(t);var p=r.contextType;typeof p=="object"&&p!==null?h.context=dn(p):(p=$t(r)?Ci:Ct.current,h.context=Ds(t,p)),h.state=t.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(bc(t,r,p,o),h.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(r=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),r!==h.state&&kl.enqueueReplaceState(h,h.state,null),_l(t,o,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,r){try{var o="",u=r;do o+=ve(u),u=u.return;while(u);var h=o}catch(p){h=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:r,stack:h,digest:null}}function Uc(t,r,o){return{value:t,source:null,stack:o??null,digest:r??null}}function jc(t,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function rp(t,r,o){o=fr(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){Ol||(Ol=!0,th=u),jc(t,r)},o}function ip(t,r,o){o=fr(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;o.payload=function(){return u(h)},o.callback=function(){jc(t,r)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){jc(t,r),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),o}function sp(t,r,o){var u=t.pingCache;if(u===null){u=t.pingCache=new l_;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(h.add(o),t=T_.bind(null,t,r,o),r.then(t,t))}function op(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function ap(t,r,o,u,h){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=fr(-1,1),r.tag=2,Hr(o,r,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var u_=we.ReactCurrentOwner,Ht=!1;function Ft(t,r,o,u){r.child=t===null?Rf(r,null,o,u):Ms(r,t.child,o,u)}function lp(t,r,o,u,h){o=o.render;var p=r.ref;return Fs(r,h),u=xc(t,r,o,u,p,h),o=Dc(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,pr(t,r,h)):(qe&&o&&pc(r),r.flags|=1,Ft(t,r,u,h),r.child)}function up(t,r,o,u,h){if(t===null){var p=o.type;return typeof p=="function"&&!lh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=p,cp(t,r,p,u,h)):(t=Ul(o.type,null,u,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(p=t.child,(t.lanes&h)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(v,u)&&t.ref===r.ref)return pr(t,r,h)}return r.flags|=1,t=Xr(p,u),t.ref=r.ref,t.return=r,r.child=t}function cp(t,r,o,u,h){if(t!==null){var p=t.memoizedProps;if(Fo(p,u)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=u=p,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Ht=!0);else return r.lanes=t.lanes,pr(t,r,h)}return zc(t,r,o,u,h)}function hp(t,r,o){var u=r.pendingProps,h=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Bs,sn),sn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,je(Bs,sn),sn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,je(Bs,sn),sn|=u}else p!==null?(u=p.baseLanes|o,r.memoizedState=null):u=o,je(Bs,sn),sn|=u;return Ft(t,r,h,o),r.child}function dp(t,r){var o=r.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function zc(t,r,o,u,h){var p=$t(o)?Ci:Ct.current;return p=Ds(r,p),Fs(r,h),o=xc(t,r,o,u,p,h),u=Dc(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~h,pr(t,r,h)):(qe&&u&&pc(r),r.flags|=1,Ft(t,r,o,h),r.child)}function fp(t,r,o,u,h){if($t(o)){var p=!0;cl(r)}else p=!1;if(Fs(r,h),r.stateNode===null)Cl(t,r),tp(r,o,u),Fc(r,o,u,h),u=!0;else if(t===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var k=v.context,b=o.contextType;typeof b=="object"&&b!==null?b=dn(b):(b=$t(o)?Ci:Ct.current,b=Ds(r,b));var H=o.getDerivedStateFromProps,W=typeof H=="function"||typeof v.getSnapshotBeforeUpdate=="function";W||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==u||k!==b)&&np(r,v,u,b),$r=!1;var $=r.memoizedState;v.state=$,_l(r,u,v,h),k=r.memoizedState,I!==u||$!==k||Bt.current||$r?(typeof H=="function"&&(bc(r,o,H,u),k=r.memoizedState),(I=$r||ep(r,o,I,u,$,k,b))?(W||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=k),v.props=u,v.state=k,v.context=b,u=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{v=r.stateNode,Pf(t,r),I=r.memoizedProps,b=r.type===r.elementType?I:Cn(r.type,I),v.props=b,W=r.pendingProps,$=v.context,k=o.contextType,typeof k=="object"&&k!==null?k=dn(k):(k=$t(o)?Ci:Ct.current,k=Ds(r,k));var te=o.getDerivedStateFromProps;(H=typeof te=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==W||$!==k)&&np(r,v,u,k),$r=!1,$=r.memoizedState,v.state=$,_l(r,u,v,h);var re=r.memoizedState;I!==W||$!==re||Bt.current||$r?(typeof te=="function"&&(bc(r,o,te,u),re=r.memoizedState),(b=$r||ep(r,o,b,u,$,re,k)||!1)?(H||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(u,re,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(u,re,k)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=re),v.props=u,v.state=re,v.context=k,u=b):(typeof v.componentDidUpdate!="function"||I===t.memoizedProps&&$===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&$===t.memoizedState||(r.flags|=1024),u=!1)}return Bc(t,r,o,u,p,h)}function Bc(t,r,o,u,h,p){dp(t,r);var v=(r.flags&128)!==0;if(!u&&!v)return h&&vf(r,o,!1),pr(t,r,p);u=r.stateNode,u_.current=r;var I=v&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,t!==null&&v?(r.child=Ms(r,t.child,null,p),r.child=Ms(r,null,I,p)):Ft(t,r,I,p),r.memoizedState=u.state,h&&vf(r,o,!0),r.child}function pp(t){var r=t.stateNode;r.pendingContext?gf(t,r.pendingContext,r.pendingContext!==r.context):r.context&&gf(t,r.context,!1),Ac(t,r.containerInfo)}function mp(t,r,o,u,h){return Ls(),vc(h),r.flags|=256,Ft(t,r,o,u),r.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function gp(t,r,o){var u=r.pendingProps,h=Qe.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=t!==null&&t.memoizedState===null?!1:(h&2)!==0),I?(p=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),je(Qe,h&1),t===null)return yc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=u.children,t=u.fallback,p?(u=r.mode,p=r.child,v={mode:"hidden",children:v},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=jl(v,u,0,null),t=Fi(t,u,o,null),p.return=r,t.return=r,p.sibling=t,r.child=p,r.child.memoizedState=Hc(o),r.memoizedState=$c,t):Wc(r,v));if(h=t.memoizedState,h!==null&&(I=h.dehydrated,I!==null))return c_(t,r,v,u,I,h,o);if(p){p=u.fallback,v=r.mode,h=t.child,I=h.sibling;var k={mode:"hidden",children:u.children};return(v&1)===0&&r.child!==h?(u=r.child,u.childLanes=0,u.pendingProps=k,r.deletions=null):(u=Xr(h,k),u.subtreeFlags=h.subtreeFlags&14680064),I!==null?p=Xr(I,p):(p=Fi(p,v,o,null),p.flags|=2),p.return=r,u.return=r,u.sibling=p,r.child=u,u=p,p=r.child,v=t.child.memoizedState,v=v===null?Hc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=t.childLanes&~o,r.memoizedState=$c,u}return p=t.child,t=p.sibling,u=Xr(p,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,t!==null&&(o=r.deletions,o===null?(r.deletions=[t],r.flags|=16):o.push(t)),r.child=u,r.memoizedState=null,u}function Wc(t,r){return r=jl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Rl(t,r,o,u){return u!==null&&vc(u),Ms(r,t.child,null,o),t=Wc(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function c_(t,r,o,u,h,p,v){if(o)return r.flags&256?(r.flags&=-257,u=Uc(Error(n(422))),Rl(t,r,v,u)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(p=u.fallback,h=r.mode,u=jl({mode:"visible",children:u.children},h,0,null),p=Fi(p,h,v,null),p.flags|=2,u.return=r,p.return=r,u.sibling=p,r.child=u,(r.mode&1)!==0&&Ms(r,t.child,null,v),r.child.memoizedState=Hc(v),r.memoizedState=$c,p);if((r.mode&1)===0)return Rl(t,r,v,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var I=u.dgst;return u=I,p=Error(n(419)),u=Uc(p,u,void 0),Rl(t,r,v,u)}if(I=(v&t.childLanes)!==0,Ht||I){if(u=mt,u!==null){switch(v&-v){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|v))!==0?0:h,h!==0&&h!==p.retryLane&&(p.retryLane=h,dr(t,h),xn(u,t,h,-1))}return ah(),u=Uc(Error(n(421))),Rl(t,r,v,u)}return h.data==="$?"?(r.flags|=128,r.child=t.child,r=I_.bind(null,t),h._reactRetry=r,null):(t=p.treeContext,rn=Ur(h.nextSibling),nn=r,qe=!0,Rn=null,t!==null&&(cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Pi,cr=t.id,hr=t.overflow,Pi=r),r=Wc(r,u.children),r.flags|=4096,r)}function yp(t,r,o){t.lanes|=r;var u=t.alternate;u!==null&&(u.lanes|=r),Tc(t.return,r,o)}function Kc(t,r,o,u,h){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function vp(t,r,o){var u=r.pendingProps,h=u.revealOrder,p=u.tail;if(Ft(t,r,u.children,o),u=Qe.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,o,r);else if(t.tag===19)yp(t,o,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(je(Qe,u),(r.mode&1)===0)r.memoizedState=null;else switch(h){case"forwards":for(o=r.child,h=null;o!==null;)t=o.alternate,t!==null&&El(t)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),Kc(r,!1,h,o,p);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&El(t)===null){r.child=h;break}t=h.sibling,h.sibling=o,o=h,h=t}Kc(r,!0,o,null,p);break;case"together":Kc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Cl(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function pr(t,r,o){if(t!==null&&(r.dependencies=t.dependencies),Vi|=r.lanes,(o&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(n(153));if(r.child!==null){for(t=r.child,o=Xr(t,t.pendingProps),r.child=o,o.return=r;t.sibling!==null;)t=t.sibling,o=o.sibling=Xr(t,t.pendingProps),o.return=r;o.sibling=null}return r.child}function h_(t,r,o){switch(r.tag){case 3:pp(r),Ls();break;case 5:Df(r);break;case 1:$t(r.type)&&cl(r);break;case 4:Ac(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,h=r.memoizedProps.value;je(gl,u._currentValue),u._currentValue=h;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(je(Qe,Qe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?gp(t,r,o):(je(Qe,Qe.current&1),t=pr(t,r,o),t!==null?t.sibling:null);je(Qe,Qe.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(t.flags&128)!==0){if(u)return vp(t,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),je(Qe,Qe.current),u)break;return null;case 22:case 23:return r.lanes=0,hp(t,r,o)}return pr(t,r,o)}var _p,qc,Ep,wp;_p=function(t,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},qc=function(){},Ep=function(t,r,o,u){var h=t.memoizedProps;if(h!==u){t=r.stateNode,Di($n.current);var p=null;switch(o){case"input":h=hi(t,h),u=hi(t,u),p=[];break;case"select":h=ee({},h,{value:void 0}),u=ee({},u,{value:void 0}),p=[];break;case"textarea":h=fo(t,h),u=fo(t,u),p=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=al)}_o(o,u);var v;o=null;for(b in h)if(!u.hasOwnProperty(b)&&h.hasOwnProperty(b)&&h[b]!=null)if(b==="style"){var I=h[b];for(v in I)I.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else b!=="dangerouslySetInnerHTML"&&b!=="children"&&b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(a.hasOwnProperty(b)?p||(p=[]):(p=p||[]).push(b,null));for(b in u){var k=u[b];if(I=h!=null?h[b]:void 0,u.hasOwnProperty(b)&&k!==I&&(k!=null||I!=null))if(b==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(o||(o={}),o[v]=k[v])}else o||(p||(p=[]),p.push(b,o)),o=k;else b==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(p=p||[]).push(b,k)):b==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(b,""+k):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&(a.hasOwnProperty(b)?(k!=null&&b==="onScroll"&&Be("scroll",t),p||I===k||(p=[])):(p=p||[]).push(b,k))}o&&(p=p||[]).push("style",o);var b=p;(r.updateQueue=b)&&(r.flags|=4)}},wp=function(t,r,o,u){o!==u&&(r.flags|=4)};function Zo(t,r){if(!qe)switch(t.tailMode){case"hidden":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Nt(t){var r=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(r)for(var h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=o,r}function d_(t,r,o){var u=r.pendingProps;switch(mc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(r),null;case 1:return $t(r.type)&&ul(),Nt(r),null;case 3:return u=r.stateNode,Us(),$e(Bt),$e(Ct),Cc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(pl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Rn!==null&&(ih(Rn),Rn=null))),qc(t,r),Nt(r),null;case 5:kc(r);var h=Di(Go.current);if(o=r.type,t!==null&&r.stateNode!=null)Ep(t,r,o,u,h),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(n(166));return Nt(r),null}if(t=Di($n.current),pl(r)){u=r.stateNode,o=r.type;var p=r.memoizedProps;switch(u[Bn]=r,u[$o]=p,t=(r.mode&1)!==0,o){case"dialog":Be("cancel",u),Be("close",u);break;case"iframe":case"object":case"embed":Be("load",u);break;case"video":case"audio":for(h=0;h<jo.length;h++)Be(jo[h],u);break;case"source":Be("error",u);break;case"img":case"image":case"link":Be("error",u),Be("load",u);break;case"details":Be("toggle",u);break;case"input":es(u,p),Be("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Be("invalid",u);break;case"textarea":ns(u,p),Be("invalid",u)}_o(o,p),h=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?u.textContent!==I&&(p.suppressHydrationWarning!==!0&&ol(u.textContent,I,t),h=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&ol(u.textContent,I,t),h=["children",""+I]):a.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Be("scroll",u)}switch(o){case"input":Jn(u),Da(u,p,!0);break;case"textarea":Jn(u),po(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=al)}u=h,r.updateQueue=u,u!==null&&(r.flags|=4)}else{v=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ot(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=v.createElement(o,{is:u.is}):(t=v.createElement(o),o==="select"&&(v=t,u.multiple?v.multiple=!0:u.size&&(v.size=u.size))):t=v.createElementNS(t,o),t[Bn]=r,t[$o]=u,_p(t,r,!1,!1),r.stateNode=t;e:{switch(v=Eo(o,u),o){case"dialog":Be("cancel",t),Be("close",t),h=u;break;case"iframe":case"object":case"embed":Be("load",t),h=u;break;case"video":case"audio":for(h=0;h<jo.length;h++)Be(jo[h],t);h=u;break;case"source":Be("error",t),h=u;break;case"img":case"image":case"link":Be("error",t),Be("load",t),h=u;break;case"details":Be("toggle",t),h=u;break;case"input":es(t,u),h=hi(t,u),Be("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=ee({},u,{value:void 0}),Be("invalid",t);break;case"textarea":ns(t,u),h=fo(t,u),Be("invalid",t);break;default:h=u}_o(o,h),I=h;for(p in I)if(I.hasOwnProperty(p)){var k=I[p];p==="style"?yo(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&mo(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Cr(t,k):typeof k=="number"&&Cr(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Be("scroll",t):k!=null&&ge(t,p,k,v))}switch(o){case"input":Jn(t),Da(t,u,!1);break;case"textarea":Jn(t),po(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Oe(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?er(t,!!u.multiple,p,!1):u.defaultValue!=null&&er(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=al)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Nt(r),null;case 6:if(t&&r.stateNode!=null)wp(t,r,t.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(n(166));if(o=Di(Go.current),Di($n.current),pl(r)){if(u=r.stateNode,o=r.memoizedProps,u[Bn]=r,(p=u.nodeValue!==o)&&(t=nn,t!==null))switch(t.tag){case 3:ol(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(u.nodeValue,o,(t.mode&1)!==0)}p&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Bn]=r,r.stateNode=u}return Nt(r),null;case 13:if($e(Qe),u=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qe&&rn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sf(),Ls(),r.flags|=98560,p=!1;else if(p=pl(r),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Bn]=r}else Ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Nt(r),p=!1}else Rn!==null&&(ih(Rn),Rn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(Qe.current&1)!==0?ct===0&&(ct=3):ah())),r.updateQueue!==null&&(r.flags|=4),Nt(r),null);case 4:return Us(),qc(t,r),t===null&&zo(r.stateNode.containerInfo),Nt(r),null;case 10:return wc(r.type._context),Nt(r),null;case 17:return $t(r.type)&&ul(),Nt(r),null;case 19:if($e(Qe),p=r.memoizedState,p===null)return Nt(r),null;if(u=(r.flags&128)!==0,v=p.rendering,v===null)if(u)Zo(p,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(v=El(t),v!==null){for(r.flags|=128,Zo(p,!1),u=v.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)p=o,t=u,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,t=v.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return je(Qe,Qe.current&1|2),r.child}t=t.sibling}p.tail!==null&&Ue()>$s&&(r.flags|=128,u=!0,Zo(p,!1),r.lanes=4194304)}else{if(!u)if(t=El(v),t!==null){if(r.flags|=128,u=!0,o=t.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!qe)return Nt(r),null}else 2*Ue()-p.renderingStartTime>$s&&o!==1073741824&&(r.flags|=128,u=!0,Zo(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(o=p.last,o!==null?o.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=Ue(),r.sibling=null,o=Qe.current,je(Qe,u?o&1|2:o&1),r):(Nt(r),null);case 22:case 23:return oh(),u=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(sn&1073741824)!==0&&(Nt(r),r.subtreeFlags&6&&(r.flags|=8192)):Nt(r),null;case 24:return null;case 25:return null}throw Error(n(156,r.tag))}function f_(t,r){switch(mc(r),r.tag){case 1:return $t(r.type)&&ul(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Us(),$e(Bt),$e(Ct),Cc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return kc(r),null;case 13:if($e(Qe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(n(340));Ls()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return $e(Qe),null;case 4:return Us(),null;case 10:return wc(r.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Pl=!1,xt=!1,p_=typeof WeakSet=="function"?WeakSet:Set,ne=null;function zs(t,r){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Ye(t,r,u)}else o.current=null}function Gc(t,r,o){try{o()}catch(u){Ye(t,r,u)}}var Tp=!1;function m_(t,r){if(oc=Mr,t=Zd(),Ju(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,I=-1,k=-1,b=0,H=0,W=t,$=null;t:for(;;){for(var te;W!==o||h!==0&&W.nodeType!==3||(I=v+h),W!==p||u!==0&&W.nodeType!==3||(k=v+u),W.nodeType===3&&(v+=W.nodeValue.length),(te=W.firstChild)!==null;)$=W,W=te;for(;;){if(W===t)break t;if($===o&&++b===h&&(I=v),$===p&&++H===u&&(k=v),(te=W.nextSibling)!==null)break;W=$,$=W.parentNode}W=te}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(ac={focusedElem:t,selectionRange:o},Mr=!1,ne=r;ne!==null;)if(r=ne,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ne=t;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,tt=re.memoizedState,L=r.stateNode,N=L.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Cn(r.type,ie),tt);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var M=r.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(G){Ye(r,r.return,G)}if(t=r.sibling,t!==null){t.return=r.return,ne=t;break}ne=r.return}return re=Tp,Tp=!1,re}function ea(t,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var p=h.destroy;h.destroy=void 0,p!==void 0&&Gc(r,o,p)}h=h.next}while(h!==u)}}function Nl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Qc(t){var r=t.ref;if(r!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof r=="function"?r(t):r.current=t}}function Ip(t){var r=t.alternate;r!==null&&(t.alternate=null,Ip(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Bn],delete r[$o],delete r[hc],delete r[Yv],delete r[Jv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sp(t){return t.tag===5||t.tag===3||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(t,r):o.insertBefore(t,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(t,o)):(r=o,r.appendChild(t)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=al));else if(u!==4&&(t=t.child,t!==null))for(Xc(t,r,o),t=t.sibling;t!==null;)Xc(t,r,o),t=t.sibling}function Yc(t,r,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,r?o.insertBefore(t,r):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(Yc(t,r,o),t=t.sibling;t!==null;)Yc(t,r,o),t=t.sibling}var Tt=null,Pn=!1;function Wr(t,r,o){for(o=o.child;o!==null;)kp(t,r,o),o=o.sibling}function kp(t,r,o){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ei,o)}catch{}switch(o.tag){case 5:xt||zs(o,r);case 6:var u=Tt,h=Pn;Tt=null,Wr(t,r,o),Tt=u,Pn=h,Tt!==null&&(Pn?(t=Tt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Tt.removeChild(o.stateNode));break;case 18:Tt!==null&&(Pn?(t=Tt,o=o.stateNode,t.nodeType===8?cc(t.parentNode,o):t.nodeType===1&&cc(t,o),Sn(t)):cc(Tt,o.stateNode));break;case 4:u=Tt,h=Pn,Tt=o.stateNode.containerInfo,Pn=!0,Wr(t,r,o),Tt=u,Pn=h;break;case 0:case 11:case 14:case 15:if(!xt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var p=h,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Gc(o,r,v),h=h.next}while(h!==u)}Wr(t,r,o);break;case 1:if(!xt&&(zs(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Ye(o,r,I)}Wr(t,r,o);break;case 21:Wr(t,r,o);break;case 22:o.mode&1?(xt=(u=xt)||o.memoizedState!==null,Wr(t,r,o),xt=u):Wr(t,r,o);break;default:Wr(t,r,o)}}function Rp(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new p_),r.forEach(function(u){var h=S_.bind(null,t,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Nn(t,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var p=t,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:Tt=I.stateNode,Pn=!1;break e;case 3:Tt=I.stateNode.containerInfo,Pn=!0;break e;case 4:Tt=I.stateNode.containerInfo,Pn=!0;break e}I=I.return}if(Tt===null)throw Error(n(160));kp(p,v,h),Tt=null,Pn=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(b){Ye(h,r,b)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Cp(r,t),r=r.sibling}function Cp(t,r){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(r,t),Wn(t),u&4){try{ea(3,t,t.return),Nl(3,t)}catch(ie){Ye(t,t.return,ie)}try{ea(5,t,t.return)}catch(ie){Ye(t,t.return,ie)}}break;case 1:Nn(r,t),Wn(t),u&512&&o!==null&&zs(o,o.return);break;case 5:if(Nn(r,t),Wn(t),u&512&&o!==null&&zs(o,o.return),t.flags&32){var h=t.stateNode;try{Cr(h,"")}catch(ie){Ye(t,t.return,ie)}}if(u&4&&(h=t.stateNode,h!=null)){var p=t.memoizedProps,v=o!==null?o.memoizedProps:p,I=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&co(h,p),Eo(I,v);var b=Eo(I,p);for(v=0;v<k.length;v+=2){var H=k[v],W=k[v+1];H==="style"?yo(h,W):H==="dangerouslySetInnerHTML"?mo(h,W):H==="children"?Cr(h,W):ge(h,H,W,b)}switch(I){case"input":ho(h,p);break;case"textarea":rs(h,p);break;case"select":var $=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!p.multiple;var te=p.value;te!=null?er(h,!!p.multiple,te,!1):$!==!!p.multiple&&(p.defaultValue!=null?er(h,!!p.multiple,p.defaultValue,!0):er(h,!!p.multiple,p.multiple?[]:"",!1))}h[$o]=p}catch(ie){Ye(t,t.return,ie)}}break;case 6:if(Nn(r,t),Wn(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,p=t.memoizedProps;try{h.nodeValue=p}catch(ie){Ye(t,t.return,ie)}}break;case 3:if(Nn(r,t),Wn(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Sn(r.containerInfo)}catch(ie){Ye(t,t.return,ie)}break;case 4:Nn(r,t),Wn(t);break;case 13:Nn(r,t),Wn(t),h=t.child,h.flags&8192&&(p=h.memoizedState!==null,h.stateNode.isHidden=p,!p||h.alternate!==null&&h.alternate.memoizedState!==null||(eh=Ue())),u&4&&Rp(t);break;case 22:if(H=o!==null&&o.memoizedState!==null,t.mode&1?(xt=(b=xt)||H,Nn(r,t),xt=b):Nn(r,t),Wn(t),u&8192){if(b=t.memoizedState!==null,(t.stateNode.isHidden=b)&&!H&&(t.mode&1)!==0)for(ne=t,H=t.child;H!==null;){for(W=ne=H;ne!==null;){switch($=ne,te=$.child,$.tag){case 0:case 11:case 14:case 15:ea(4,$,$.return);break;case 1:zs($,$.return);var re=$.stateNode;if(typeof re.componentWillUnmount=="function"){u=$,o=$.return;try{r=u,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Ye(u,o,ie)}}break;case 5:zs($,$.return);break;case 22:if($.memoizedState!==null){xp(W);continue}}te!==null?(te.return=$,ne=te):xp(W)}H=H.sibling}e:for(H=null,W=t;;){if(W.tag===5){if(H===null){H=W;try{h=W.stateNode,b?(p=h.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=W.stateNode,k=W.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=go("display",v))}catch(ie){Ye(t,t.return,ie)}}}else if(W.tag===6){if(H===null)try{W.stateNode.nodeValue=b?"":W.memoizedProps}catch(ie){Ye(t,t.return,ie)}}else if((W.tag!==22&&W.tag!==23||W.memoizedState===null||W===t)&&W.child!==null){W.child.return=W,W=W.child;continue}if(W===t)break e;for(;W.sibling===null;){if(W.return===null||W.return===t)break e;H===W&&(H=null),W=W.return}H===W&&(H=null),W.sibling.return=W.return,W=W.sibling}}break;case 19:Nn(r,t),Wn(t),u&4&&Rp(t);break;case 21:break;default:Nn(r,t),Wn(t)}}function Wn(t){var r=t.flags;if(r&2){try{e:{for(var o=t.return;o!==null;){if(Sp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Cr(h,""),u.flags&=-33);var p=Ap(t);Yc(t,p,h);break;case 3:case 4:var v=u.stateNode.containerInfo,I=Ap(t);Xc(t,I,v);break;default:throw Error(n(161))}}catch(k){Ye(t,t.return,k)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function g_(t,r,o){ne=t,Pp(t)}function Pp(t,r,o){for(var u=(t.mode&1)!==0;ne!==null;){var h=ne,p=h.child;if(h.tag===22&&u){var v=h.memoizedState!==null||Pl;if(!v){var I=h.alternate,k=I!==null&&I.memoizedState!==null||xt;I=Pl;var b=xt;if(Pl=v,(xt=k)&&!b)for(ne=h;ne!==null;)v=ne,k=v.child,v.tag===22&&v.memoizedState!==null?Dp(h):k!==null?(k.return=v,ne=k):Dp(h);for(;p!==null;)ne=p,Pp(p),p=p.sibling;ne=h,Pl=I,xt=b}Np(t)}else(h.subtreeFlags&8772)!==0&&p!==null?(p.return=h,ne=p):Np(t)}}function Np(t){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xt||Nl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!xt)if(o===null)u.componentDidMount();else{var h=r.elementType===r.type?o.memoizedProps:Cn(r.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&xf(r,p,u);break;case 3:var v=r.updateQueue;if(v!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}xf(r,v,o)}break;case 5:var I=r.stateNode;if(o===null&&r.flags&4){o=I;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var b=r.alternate;if(b!==null){var H=b.memoizedState;if(H!==null){var W=H.dehydrated;W!==null&&Sn(W)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}xt||r.flags&512&&Qc(r)}catch($){Ye(r,r.return,$)}}if(r===t){ne=null;break}if(o=r.sibling,o!==null){o.return=r.return,ne=o;break}ne=r.return}}function xp(t){for(;ne!==null;){var r=ne;if(r===t){ne=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ne=o;break}ne=r.return}}function Dp(t){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Nl(4,r)}catch(k){Ye(r,o,k)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var h=r.return;try{u.componentDidMount()}catch(k){Ye(r,h,k)}}var p=r.return;try{Qc(r)}catch(k){Ye(r,p,k)}break;case 5:var v=r.return;try{Qc(r)}catch(k){Ye(r,v,k)}}}catch(k){Ye(r,r.return,k)}if(r===t){ne=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ne=I;break}ne=r.return}}var y_=Math.ceil,xl=we.ReactCurrentDispatcher,Jc=we.ReactCurrentOwner,pn=we.ReactCurrentBatchConfig,Ne=0,mt=null,rt=null,It=0,sn=0,Bs=jr(0),ct=0,ta=null,Vi=0,Dl=0,Zc=0,na=null,Wt=null,eh=0,$s=1/0,mr=null,Ol=!1,th=null,Kr=null,Vl=!1,qr=null,Ll=0,ra=0,nh=null,Ml=-1,bl=0;function Ut(){return(Ne&6)!==0?Ue():Ml!==-1?Ml:Ml=Ue()}function Gr(t){return(t.mode&1)===0?1:(Ne&2)!==0&&It!==0?It&-It:e_.transition!==null?(bl===0&&(bl=Ti()),bl):(t=ke,t!==0||(t=window.event,t=t===void 0?16:xo(t.type)),t)}function xn(t,r,o,u){if(50<ra)throw ra=0,nh=null,Error(n(185));Dr(t,o,u),((Ne&2)===0||t!==mt)&&(t===mt&&((Ne&2)===0&&(Dl|=o),ct===4&&Qr(t,It)),Kt(t,u),o===1&&Ne===0&&(r.mode&1)===0&&($s=Ue()+500,hl&&Br()))}function Kt(t,r){var o=t.callbackNode;rr(t,r);var u=wi(t,t===mt?It:0);if(u===0)o!==null&&ko(o),t.callbackNode=null,t.callbackPriority=0;else if(r=u&-u,t.callbackPriority!==r){if(o!=null&&ko(o),r===1)t.tag===0?Zv(Vp.bind(null,t)):_f(Vp.bind(null,t)),Qv(function(){(Ne&6)===0&&Br()}),o=null;else{switch(Vr(u)){case 1:o=_i;break;case 4:o=Pr;break;case 16:o=an;break;case 536870912:o=ba;break;default:o=an}o=Bp(o,Op.bind(null,t))}t.callbackPriority=r,t.callbackNode=o}}function Op(t,r){if(Ml=-1,bl=0,(Ne&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Hs()&&t.callbackNode!==o)return null;var u=wi(t,t===mt?It:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||r)r=Fl(t,u);else{r=u;var h=Ne;Ne|=2;var p=Mp();(mt!==t||It!==r)&&(mr=null,$s=Ue()+500,Mi(t,r));do try{E_();break}catch(I){Lp(t,I)}while(!0);Ec(),xl.current=p,Ne=h,rt!==null?r=0:(mt=null,It=0,r=ct)}if(r!==0){if(r===2&&(h=Zt(t),h!==0&&(u=h,r=rh(t,h))),r===1)throw o=ta,Mi(t,0),Qr(t,u),Kt(t,Ue()),o;if(r===6)Qr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!v_(h)&&(r=Fl(t,u),r===2&&(p=Zt(t),p!==0&&(u=p,r=rh(t,p))),r===1))throw o=ta,Mi(t,0),Qr(t,u),Kt(t,Ue()),o;switch(t.finishedWork=h,t.finishedLanes=u,r){case 0:case 1:throw Error(n(345));case 2:bi(t,Wt,mr);break;case 3:if(Qr(t,u),(u&130023424)===u&&(r=eh+500-Ue(),10<r)){if(wi(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Ut(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=uc(bi.bind(null,t,Wt,mr),r);break}bi(t,Wt,mr);break;case 4:if(Qr(t,u),(u&4194240)===u)break;for(r=t.eventTimes,h=-1;0<u;){var v=31-Mt(u);p=1<<v,v=r[v],v>h&&(h=v),u&=~p}if(u=h,u=Ue()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*y_(u/1960))-u,10<u){t.timeoutHandle=uc(bi.bind(null,t,Wt,mr),u);break}bi(t,Wt,mr);break;case 5:bi(t,Wt,mr);break;default:throw Error(n(329))}}}return Kt(t,Ue()),t.callbackNode===o?Op.bind(null,t):null}function rh(t,r){var o=na;return t.current.memoizedState.isDehydrated&&(Mi(t,r).flags|=256),t=Fl(t,r),t!==2&&(r=Wt,Wt=o,r!==null&&ih(r)),t}function ih(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function v_(t){for(var r=t;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!kn(p(),h))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(t,r){for(r&=~Zc,r&=~Dl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var o=31-Mt(r),u=1<<o;t[o]=-1,r&=~u}}function Vp(t){if((Ne&6)!==0)throw Error(n(327));Hs();var r=wi(t,0);if((r&1)===0)return Kt(t,Ue()),null;var o=Fl(t,r);if(t.tag!==0&&o===2){var u=Zt(t);u!==0&&(r=u,o=rh(t,u))}if(o===1)throw o=ta,Mi(t,0),Qr(t,r),Kt(t,Ue()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,bi(t,Wt,mr),Kt(t,Ue()),null}function sh(t,r){var o=Ne;Ne|=1;try{return t(r)}finally{Ne=o,Ne===0&&($s=Ue()+500,hl&&Br())}}function Li(t){qr!==null&&qr.tag===0&&(Ne&6)===0&&Hs();var r=Ne;Ne|=1;var o=pn.transition,u=ke;try{if(pn.transition=null,ke=1,t)return t()}finally{ke=u,pn.transition=o,Ne=r,(Ne&6)===0&&Br()}}function oh(){sn=Bs.current,$e(Bs)}function Mi(t,r){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Gv(o)),rt!==null)for(o=rt.return;o!==null;){var u=o;switch(mc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ul();break;case 3:Us(),$e(Bt),$e(Ct),Cc();break;case 5:kc(u);break;case 4:Us();break;case 13:$e(Qe);break;case 19:$e(Qe);break;case 10:wc(u.type._context);break;case 22:case 23:oh()}o=o.return}if(mt=t,rt=t=Xr(t.current,null),It=sn=r,ct=0,ta=null,Zc=Dl=Vi=0,Wt=na=null,xi!==null){for(r=0;r<xi.length;r++)if(o=xi[r],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,p=o.pending;if(p!==null){var v=p.next;p.next=h,u.next=v}o.pending=u}xi=null}return t}function Lp(t,r){do{var o=rt;try{if(Ec(),wl.current=Al,Tl){for(var u=Xe.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Tl=!1}if(Oi=0,pt=ut=Xe=null,Qo=!1,Xo=0,Jc.current=null,o===null||o.return===null){ct=1,ta=r,rt=null;break}e:{var p=t,v=o.return,I=o,k=r;if(r=It,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var b=k,H=I,W=H.tag;if((H.mode&1)===0&&(W===0||W===11||W===15)){var $=H.alternate;$?(H.updateQueue=$.updateQueue,H.memoizedState=$.memoizedState,H.lanes=$.lanes):(H.updateQueue=null,H.memoizedState=null)}var te=op(v);if(te!==null){te.flags&=-257,ap(te,v,I,p,r),te.mode&1&&sp(p,b,r),r=te,k=b;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(k),r.updateQueue=ie}else re.add(k);break e}else{if((r&1)===0){sp(p,b,r),ah();break e}k=Error(n(426))}}else if(qe&&I.mode&1){var tt=op(v);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),ap(tt,v,I,p,r),vc(js(k,I));break e}}p=k=js(k,I),ct!==4&&(ct=2),na===null?na=[p]:na.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var L=rp(p,k,r);Nf(p,L);break e;case 1:I=k;var N=p.type,M=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Kr===null||!Kr.has(M)))){p.flags|=65536,r&=-r,p.lanes|=r;var G=ip(p,I,r);Nf(p,G);break e}}p=p.return}while(p!==null)}Fp(o)}catch(oe){r=oe,rt===o&&o!==null&&(rt=o=o.return);continue}break}while(!0)}function Mp(){var t=xl.current;return xl.current=Al,t===null?Al:t}function ah(){(ct===0||ct===3||ct===2)&&(ct=4),mt===null||(Vi&268435455)===0&&(Dl&268435455)===0||Qr(mt,It)}function Fl(t,r){var o=Ne;Ne|=2;var u=Mp();(mt!==t||It!==r)&&(mr=null,Mi(t,r));do try{__();break}catch(h){Lp(t,h)}while(!0);if(Ec(),Ne=o,xl.current=u,rt!==null)throw Error(n(261));return mt=null,It=0,ct}function __(){for(;rt!==null;)bp(rt)}function E_(){for(;rt!==null&&!La();)bp(rt)}function bp(t){var r=zp(t.alternate,t,sn);t.memoizedProps=t.pendingProps,r===null?Fp(t):rt=r,Jc.current=null}function Fp(t){var r=t;do{var o=r.alternate;if(t=r.return,(r.flags&32768)===0){if(o=d_(o,r,sn),o!==null){rt=o;return}}else{if(o=f_(o,r),o!==null){o.flags&=32767,rt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,rt=null;return}}if(r=r.sibling,r!==null){rt=r;return}rt=r=t}while(r!==null);ct===0&&(ct=5)}function bi(t,r,o){var u=ke,h=pn.transition;try{pn.transition=null,ke=1,w_(t,r,o,u)}finally{pn.transition=h,ke=u}return null}function w_(t,r,o,u){do Hs();while(qr!==null);if((Ne&6)!==0)throw Error(n(327));o=t.finishedWork;var h=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(be(t,p),t===mt&&(rt=mt=null,It=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Vl||(Vl=!0,Bp(an,function(){return Hs(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=pn.transition,pn.transition=null;var v=ke;ke=1;var I=Ne;Ne|=4,Jc.current=null,m_(t,o),Cp(o,t),zv(ac),Mr=!!oc,ac=oc=null,t.current=o,g_(o),Hu(),Ne=I,ke=v,pn.transition=p}else t.current=o;if(Vl&&(Vl=!1,qr=t,Ll=h),p=t.pendingLanes,p===0&&(Kr=null),Fa(o.stateNode),Kt(t,Ue()),r!==null)for(u=t.onRecoverableError,o=0;o<r.length;o++)h=r[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Ol)throw Ol=!1,t=th,th=null,t;return(Ll&1)!==0&&t.tag!==0&&Hs(),p=t.pendingLanes,(p&1)!==0?t===nh?ra++:(ra=0,nh=t):ra=0,Br(),null}function Hs(){if(qr!==null){var t=Vr(Ll),r=pn.transition,o=ke;try{if(pn.transition=null,ke=16>t?16:t,qr===null)var u=!1;else{if(t=qr,qr=null,Ll=0,(Ne&6)!==0)throw Error(n(331));var h=Ne;for(Ne|=4,ne=t.current;ne!==null;){var p=ne,v=p.child;if((ne.flags&16)!==0){var I=p.deletions;if(I!==null){for(var k=0;k<I.length;k++){var b=I[k];for(ne=b;ne!==null;){var H=ne;switch(H.tag){case 0:case 11:case 15:ea(8,H,p)}var W=H.child;if(W!==null)W.return=H,ne=W;else for(;ne!==null;){H=ne;var $=H.sibling,te=H.return;if(Ip(H),H===b){ne=null;break}if($!==null){$.return=te,ne=$;break}ne=te}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var tt=ie.sibling;ie.sibling=null,ie=tt}while(ie!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ne=v;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ea(9,p,p.return)}var L=p.sibling;if(L!==null){L.return=p.return,ne=L;break e}ne=p.return}}var N=t.current;for(ne=N;ne!==null;){v=ne;var M=v.child;if((v.subtreeFlags&2064)!==0&&M!==null)M.return=v,ne=M;else e:for(v=N;ne!==null;){if(I=ne,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Nl(9,I)}}catch(oe){Ye(I,I.return,oe)}if(I===v){ne=null;break e}var G=I.sibling;if(G!==null){G.return=I.return,ne=G;break e}ne=I.return}}if(Ne=h,Br(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ei,t)}catch{}u=!0}return u}finally{ke=o,pn.transition=r}}return!1}function Up(t,r,o){r=js(o,r),r=rp(t,r,1),t=Hr(t,r,1),r=Ut(),t!==null&&(Dr(t,1,r),Kt(t,r))}function Ye(t,r,o){if(t.tag===3)Up(t,t,o);else for(;r!==null;){if(r.tag===3){Up(r,t,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){t=js(o,t),t=ip(r,t,1),r=Hr(r,t,1),t=Ut(),r!==null&&(Dr(r,1,t),Kt(r,t));break}}r=r.return}}function T_(t,r,o){var u=t.pingCache;u!==null&&u.delete(r),r=Ut(),t.pingedLanes|=t.suspendedLanes&o,mt===t&&(It&o)===o&&(ct===4||ct===3&&(It&130023424)===It&&500>Ue()-eh?Mi(t,0):Zc|=o),Kt(t,r)}function jp(t,r){r===0&&((t.mode&1)===0?r=1:(r=fs,fs<<=1,(fs&130023424)===0&&(fs=4194304)));var o=Ut();t=dr(t,r),t!==null&&(Dr(t,r,o),Kt(t,o))}function I_(t){var r=t.memoizedState,o=0;r!==null&&(o=r.retryLane),jp(t,o)}function S_(t,r){var o=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(r),jp(t,o)}var zp;zp=function(t,r,o){if(t!==null)if(t.memoizedProps!==r.pendingProps||Bt.current)Ht=!0;else{if((t.lanes&o)===0&&(r.flags&128)===0)return Ht=!1,h_(t,r,o);Ht=(t.flags&131072)!==0}else Ht=!1,qe&&(r.flags&1048576)!==0&&Ef(r,fl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Cl(t,r),t=r.pendingProps;var h=Ds(r,Ct.current);Fs(r,o),h=xc(null,r,u,t,h,o);var p=Dc();return r.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$t(u)?(p=!0,cl(r)):p=!1,r.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Sc(r),h.updater=kl,r.stateNode=h,h._reactInternals=r,Fc(r,u,t,o),r=Bc(null,r,u,!0,p,o)):(r.tag=0,qe&&p&&pc(r),Ft(null,r,h,o),r=r.child),r;case 16:u=r.elementType;e:{switch(Cl(t,r),t=r.pendingProps,h=u._init,u=h(u._payload),r.type=u,h=r.tag=k_(u),t=Cn(u,t),h){case 0:r=zc(null,r,u,t,o);break e;case 1:r=fp(null,r,u,t,o);break e;case 11:r=lp(null,r,u,t,o);break e;case 14:r=up(null,r,u,Cn(u.type,t),o);break e}throw Error(n(306,u,""))}return r;case 0:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),zc(t,r,u,h,o);case 1:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),fp(t,r,u,h,o);case 3:e:{if(pp(r),t===null)throw Error(n(387));u=r.pendingProps,p=r.memoizedState,h=p.element,Pf(t,r),_l(r,u,null,o);var v=r.memoizedState;if(u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){h=js(Error(n(423)),r),r=mp(t,r,u,o,h);break e}else if(u!==h){h=js(Error(n(424)),r),r=mp(t,r,u,o,h);break e}else for(rn=Ur(r.stateNode.containerInfo.firstChild),nn=r,qe=!0,Rn=null,o=Rf(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ls(),u===h){r=pr(t,r,o);break e}Ft(t,r,u,o)}r=r.child}return r;case 5:return Df(r),t===null&&yc(r),u=r.type,h=r.pendingProps,p=t!==null?t.memoizedProps:null,v=h.children,lc(u,h)?v=null:p!==null&&lc(u,p)&&(r.flags|=32),dp(t,r),Ft(t,r,v,o),r.child;case 6:return t===null&&yc(r),null;case 13:return gp(t,r,o);case 4:return Ac(r,r.stateNode.containerInfo),u=r.pendingProps,t===null?r.child=Ms(r,null,u,o):Ft(t,r,u,o),r.child;case 11:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),lp(t,r,u,h,o);case 7:return Ft(t,r,r.pendingProps,o),r.child;case 8:return Ft(t,r,r.pendingProps.children,o),r.child;case 12:return Ft(t,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,h=r.pendingProps,p=r.memoizedProps,v=h.value,je(gl,u._currentValue),u._currentValue=v,p!==null)if(kn(p.value,v)){if(p.children===h.children&&!Bt.current){r=pr(t,r,o);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=fr(-1,o&-o),k.tag=2;var b=p.updateQueue;if(b!==null){b=b.shared;var H=b.pending;H===null?k.next=k:(k.next=H.next,H.next=k),b.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),Tc(p.return,o,r),I.lanes|=o;break}k=k.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(n(341));v.lanes|=o,I=v.alternate,I!==null&&(I.lanes|=o),Tc(v,o,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Ft(t,r,h.children,o),r=r.child}return r;case 9:return h=r.type,u=r.pendingProps.children,Fs(r,o),h=dn(h),u=u(h),r.flags|=1,Ft(t,r,u,o),r.child;case 14:return u=r.type,h=Cn(u,r.pendingProps),h=Cn(u.type,h),up(t,r,u,h,o);case 15:return cp(t,r,r.type,r.pendingProps,o);case 17:return u=r.type,h=r.pendingProps,h=r.elementType===u?h:Cn(u,h),Cl(t,r),r.tag=1,$t(u)?(t=!0,cl(r)):t=!1,Fs(r,o),tp(r,u,h),Fc(r,u,h,o),Bc(null,r,u,!0,t,o);case 19:return vp(t,r,o);case 22:return hp(t,r,o)}throw Error(n(156,r.tag))};function Bp(t,r){return hs(t,r)}function A_(t,r,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,r,o,u){return new A_(t,r,o,u)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function k_(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===R)return 11;if(t===We)return 14}return 2}function Xr(t,r){var o=t.alternate;return o===null?(o=mn(t.tag,r,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=r,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,r=t.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ul(t,r,o,u,h,p){var v=2;if(u=t,typeof t=="function")lh(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case x:return Fi(o.children,h,p,r);case S:v=8,h|=8;break;case A:return t=mn(12,o,r,h|2),t.elementType=A,t.lanes=p,t;case T:return t=mn(13,o,r,h),t.elementType=T,t.lanes=p,t;case Ve:return t=mn(19,o,r,h),t.elementType=Ve,t.lanes=p,t;case pe:return jl(o,h,p,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:v=10;break e;case w:v=9;break e;case R:v=11;break e;case We:v=14;break e;case st:v=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return r=mn(v,o,r,h),r.elementType=t,r.type=u,r.lanes=p,r}function Fi(t,r,o,u){return t=mn(7,t,u,r),t.lanes=o,t}function jl(t,r,o,u){return t=mn(22,t,u,r),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function uh(t,r,o){return t=mn(6,t,null,r),t.lanes=o,t}function ch(t,r,o){return r=mn(4,t.children!==null?t.children:[],t.key,r),r.lanes=o,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function R_(t,r,o,u,h){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xr(0),this.expirationTimes=xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xr(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function hh(t,r,o,u,h,p,v,I,k){return t=new R_(t,r,o,I,k),r===1?(r=1,p===!0&&(r|=8)):r=0,p=mn(3,null,null,r),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(p),t}function C_(t,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:u==null?null:""+u,children:t,containerInfo:r,implementation:o}}function $p(t){if(!t)return zr;t=t._reactInternals;e:{if(_n(t)!==t||t.tag!==1)throw Error(n(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if($t(o))return yf(t,o,r)}return r}function Hp(t,r,o,u,h,p,v,I,k){return t=hh(o,u,!0,t,h,p,v,I,k),t.context=$p(null),o=t.current,u=Ut(),h=Gr(o),p=fr(u,h),p.callback=r??null,Hr(o,p,h),t.current.lanes=h,Dr(t,h,u),Kt(t,u),t}function zl(t,r,o,u){var h=r.current,p=Ut(),v=Gr(h);return o=$p(o),r.context===null?r.context=o:r.pendingContext=o,r=fr(p,v),r.payload={element:t},u=u===void 0?null:u,u!==null&&(r.callback=u),t=Hr(h,r,v),t!==null&&(xn(t,h,v,p),vl(t,h,v)),v}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<r?o:r}}function dh(t,r){Wp(t,r),(t=t.alternate)&&Wp(t,r)}function P_(){return null}var Kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}$l.prototype.render=fh.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(n(409));zl(t,r,null,null)},$l.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Li(function(){zl(null,t,null,null)}),r[lr]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var r=$a();t={blockedOn:null,target:t,priority:r};for(var o=0;o<Fn.length&&r!==0&&r<Fn[o].priority;o++);Fn.splice(o,0,t),o===0&&Ka(t)}};function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function N_(t,r,o,u,h){if(h){if(typeof u=="function"){var p=u;u=function(){var b=Bl(v);p.call(b)}}var v=Hp(r,u,t,0,null,!1,!1,"",qp);return t._reactRootContainer=v,t[lr]=v.current,zo(t.nodeType===8?t.parentNode:t),Li(),v}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var I=u;u=function(){var b=Bl(k);I.call(b)}}var k=hh(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=k,t[lr]=k.current,zo(t.nodeType===8?t.parentNode:t),Li(function(){zl(r,k,o,u)}),k}function Wl(t,r,o,u,h){var p=o._reactRootContainer;if(p){var v=p;if(typeof h=="function"){var I=h;h=function(){var k=Bl(v);I.call(k)}}zl(r,v,t,h)}else v=N_(o,r,t,h,u);return Bl(v)}za=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var o=Nr(r.pendingLanes);o!==0&&(Or(r,o|1),Kt(r,Ue()),(Ne&6)===0&&($s=Ue()+500,Br()))}break;case 13:Li(function(){var u=dr(t,1);if(u!==null){var h=Ut();xn(u,t,1,h)}}),dh(t,1)}},ps=function(t){if(t.tag===13){var r=dr(t,134217728);if(r!==null){var o=Ut();xn(r,t,134217728,o)}dh(t,134217728)}},Ba=function(t){if(t.tag===13){var r=Gr(t),o=dr(t,r);if(o!==null){var u=Ut();xn(o,t,r,u)}dh(t,r)}},$a=function(){return ke},Ha=function(t,r){var o=ke;try{return ke=t,r()}finally{ke=o}},ss=function(t,r,o){switch(r){case"input":if(ho(t,o),r=o.name,o.type==="radio"&&r!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==t&&u.form===t.form){var h=ll(u);if(!h)throw Error(n(90));Zi(u),ho(u,h)}}}break;case"textarea":rs(t,o);break;case"select":r=o.value,r!=null&&er(t,!!o.multiple,r,!1)}},mi=sh,To=Li;var x_={usingClientEntryPoint:!1,Events:[Ho,Ns,ll,Mn,wo,sh]},ia={findFiberByHostInstance:Ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ao(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||P_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Ei=Kl.inject(D_),Jt=Kl}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x_,qt.createPortal=function(t,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(r))throw Error(n(200));return C_(t,r,null,o)},qt.createRoot=function(t,r){if(!ph(t))throw Error(n(299));var o=!1,u="",h=Kp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),r=hh(t,1,!1,null,null,o,!1,u,h),t[lr]=r.current,zo(t.nodeType===8?t.parentNode:t),new fh(r)},qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ao(r),t=t===null?null:t.stateNode,t},qt.flushSync=function(t){return Li(t)},qt.hydrate=function(t,r,o){if(!Hl(r))throw Error(n(200));return Wl(null,t,r,!0,o)},qt.hydrateRoot=function(t,r,o){if(!ph(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,h=!1,p="",v=Kp;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),r=Hp(r,null,t,1,o??null,h,!1,p,v),t[lr]=r.current,zo(t),u)for(t=0;t<u.length;t++)o=u[t],h=o._getVersion,h=h(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,h]:r.mutableSourceEagerHydrationData.push(o,h);return new $l(r)},qt.render=function(t,r,o){if(!Hl(r))throw Error(n(200));return Wl(null,t,r,!1,o)},qt.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(n(40));return t._reactRootContainer?(Li(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1},qt.unstable_batchedUpdates=sh,qt.unstable_renderSubtreeIntoContainer=function(t,r,o,u){if(!Hl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wl(t,r,o,!1,u)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var tm;function j_(){if(tm)return yh.exports;tm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),yh.exports=U_(),yh.exports}var nm;function z_(){if(nm)return ql;nm=1;var i=j_();return ql.createRoot=i.createRoot,ql.hydrateRoot=i.hydrateRoot,ql}var B_=z_();const $_=()=>{};var rm={};/**
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
 */const Tg=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},H_=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const a=i[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const c=i[n++];e[s++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=i[n++],d=i[n++],g=i[n++],y=((a&7)<<18|(c&63)<<12|(d&63)<<6|g&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const c=i[n++],d=i[n++];e[s++]=String.fromCharCode((a&15)<<12|(c&63)<<6|d&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const c=i[a],d=a+1<i.length,g=d?i[a+1]:0,y=a+2<i.length,E=y?i[a+2]:0,P=c>>2,D=(c&3)<<4|g>>4;let U=(g&15)<<2|E>>6,J=E&63;y||(J=64,d||(U=64)),s.push(n[P],n[D],n[U],n[J])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Tg(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):H_(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const c=n[i.charAt(a++)],g=a<i.length?n[i.charAt(a)]:0;++a;const E=a<i.length?n[i.charAt(a)]:64;++a;const D=a<i.length?n[i.charAt(a)]:64;if(++a,c==null||g==null||E==null||D==null)throw new W_;const U=c<<2|g>>4;if(s.push(U),E!==64){const J=g<<4&240|E>>2;if(s.push(J),D!==64){const q=E<<6&192|D;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class W_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const K_=function(i){const e=Tg(i);return ed.encodeByteArray(e,!0)},cu=function(i){return K_(i).replace(/\./g,"")},Ig=function(i){try{return ed.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const q_=()=>Sg().__FIREBASE_DEFAULTS__,G_=()=>{if(typeof process>"u"||typeof rm>"u")return;const i=rm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Q_=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Ig(i[1]);return e&&JSON.parse(e)},Pu=()=>{try{return $_()||q_()||G_()||Q_()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Ag=i=>{var e,n;return(n=(e=Pu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[i]},X_=i=>{const e=Ag(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kg=()=>{var i;return(i=Pu())===null||i===void 0?void 0:i.config},Rg=i=>{var e;return(e=Pu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class fa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Y_(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},i);return[cu(JSON.stringify(n)),cu(JSON.stringify(d)),""].join(".")}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function Z_(){var i;const e=(i=Pu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function t0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function n0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function r0(){const i=Lt();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function i0(){return!Z_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function td(){try{return typeof indexedDB=="object"}catch{return!1}}function s0(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var c;e(((c=a.error)===null||c===void 0?void 0:c.message)||"")}}catch(n){e(n)}})}/**
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
 */const o0="FirebaseError";class kr extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=o0,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,c=this.errors[e],d=c?a0(c,s):"Error",g=`${this.serviceName}: ${d} (${a}).`;return new kr(a,g,s)}}function a0(i,e){return i.replace(l0,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const l0=/\{\$([^}]+)}/g;function u0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Wi(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const c=i[a],d=e[a];if(im(c)&&im(d)){if(!Wi(c,d))return!1}else if(c!==d)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function im(i){return i!==null&&typeof i=="object"}/**
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
 */function Ta(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function c0(i,e){const n=new h0(i,e);return n.subscribe.bind(n)}class h0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let a;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");d0(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:s},a.next===void 0&&(a.next=Eh),a.error===void 0&&(a.error=Eh),a.complete===void 0&&(a.complete=Eh);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d0(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Eh(){}/**
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
 */const f0=1e3,p0=2,m0=4*60*60*1e3,g0=.5;function y0(i,e=f0,n=p0){const s=e*Math.pow(n,i),a=Math.round(g0*s*(Math.random()-.5)*2);return Math.min(m0,s+a)}/**
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
 */function gn(i){return i&&i._delegate?i._delegate:i}class Tr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class v0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new fa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(a)return null;throw c}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E0(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:a});s.resolve(c)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,d]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(c);s===g&&d.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),c=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(a,c);const d=this.instances.get(a);return d&&e(d,a),()=>{c.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _0(i){return i===Ui?void 0:i}function E0(i){return i.instantiationMode==="EAGER"}/**
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
 */class w0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ae;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ae||(Ae={}));const T0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},I0=Ae.INFO,S0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},A0=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=S0[e];if(a)console[a](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=I0,this._logHandler=A0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const k0=(i,e)=>e.some(n=>i instanceof n);let sm,om;function R0(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function C0(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Dh=new WeakMap,Pg=new WeakMap,wh=new WeakMap,nd=new WeakMap;function P0(i){const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("success",c),i.removeEventListener("error",d)},c=()=>{n(ri(i.result)),a()},d=()=>{s(i.error),a()};i.addEventListener("success",c),i.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,i)}).catch(()=>{}),nd.set(e,i),e}function N0(i){if(Dh.has(i))return;const e=new Promise((n,s)=>{const a=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",d),i.removeEventListener("abort",d)},c=()=>{n(),a()},d=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",c),i.addEventListener("error",d),i.addEventListener("abort",d)});Dh.set(i,e)}let Oh={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return Dh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Pg.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function x0(i){Oh=i(Oh)}function D0(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Th(this),e,...n);return Pg.set(s,e.sort?e.sort():[e]),ri(s)}:C0().includes(i)?function(...e){return i.apply(Th(this),e),ri(Cg.get(this))}:function(...e){return ri(i.apply(Th(this),e))}}function O0(i){return typeof i=="function"?D0(i):(i instanceof IDBTransaction&&N0(i),k0(i,R0())?new Proxy(i,Oh):i)}function ri(i){if(i instanceof IDBRequest)return P0(i);if(wh.has(i))return wh.get(i);const e=O0(i);return e!==i&&(wh.set(i,e),nd.set(e,i)),e}const Th=i=>nd.get(i);function V0(i,e,{blocked:n,upgrade:s,blocking:a,terminated:c}={}){const d=indexedDB.open(i,e),g=ri(d);return s&&d.addEventListener("upgradeneeded",y=>{s(ri(d.result),y.oldVersion,y.newVersion,ri(d.transaction),y)}),n&&d.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{c&&y.addEventListener("close",()=>c()),a&&y.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}const L0=["get","getKey","getAll","getAllKeys","count"],M0=["put","add","delete","clear"],Ih=new Map;function am(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ih.get(e))return Ih.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=M0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||L0.includes(n)))return;const c=async function(d,...g){const y=this.transaction(d,a?"readwrite":"readonly");let E=y.store;return s&&(E=E.index(g.shift())),(await Promise.all([E[n](...g),a&&y.done]))[0]};return Ih.set(e,c),c}x0(i=>({...i,get:(e,n,s)=>am(e,n)||i.get(e,n,s),has:(e,n)=>!!am(e,n)||i.has(e,n)}));/**
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
 */class b0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(F0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function F0(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",lm="0.11.2";/**
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
 */const Ir=new Nu("@firebase/app"),U0="@firebase/app-compat",j0="@firebase/analytics-compat",z0="@firebase/analytics",B0="@firebase/app-check-compat",$0="@firebase/app-check",H0="@firebase/auth",W0="@firebase/auth-compat",K0="@firebase/database",q0="@firebase/data-connect",G0="@firebase/database-compat",Q0="@firebase/functions",X0="@firebase/functions-compat",Y0="@firebase/installations",J0="@firebase/installations-compat",Z0="@firebase/messaging",eE="@firebase/messaging-compat",tE="@firebase/performance",nE="@firebase/performance-compat",rE="@firebase/remote-config",iE="@firebase/remote-config-compat",sE="@firebase/storage",oE="@firebase/storage-compat",aE="@firebase/firestore",lE="@firebase/vertexai",uE="@firebase/firestore-compat",cE="firebase",hE="11.4.0";/**
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
 */const Lh="[DEFAULT]",dE={[Vh]:"fire-core",[U0]:"fire-core-compat",[z0]:"fire-analytics",[j0]:"fire-analytics-compat",[$0]:"fire-app-check",[B0]:"fire-app-check-compat",[H0]:"fire-auth",[W0]:"fire-auth-compat",[K0]:"fire-rtdb",[q0]:"fire-data-connect",[G0]:"fire-rtdb-compat",[Q0]:"fire-fn",[X0]:"fire-fn-compat",[Y0]:"fire-iid",[J0]:"fire-iid-compat",[Z0]:"fire-fcm",[eE]:"fire-fcm-compat",[tE]:"fire-perf",[nE]:"fire-perf-compat",[rE]:"fire-rc",[iE]:"fire-rc-compat",[sE]:"fire-gcs",[oE]:"fire-gcs-compat",[aE]:"fire-fst",[uE]:"fire-fst-compat",[lE]:"fire-vertex","fire-js":"fire-js",[cE]:"fire-js-all"};/**
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
 */const hu=new Map,fE=new Map,Mh=new Map;function um(i,e){try{i.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function oi(i){const e=i.name;if(Mh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,i);for(const n of hu.values())um(n,i);for(const n of fE.values())um(n,i);return!0}function Ia(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function qn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const pE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new so("app","Firebase",pE);/**
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
 */class mE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const oo=hE;function Ng(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Lh,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw ii.create("bad-app-name",{appName:String(a)});if(n||(n=kg()),!n)throw ii.create("no-options");const c=hu.get(a);if(c){if(Wi(n,c.options)&&Wi(s,c.config))return c;throw ii.create("duplicate-app",{appName:a})}const d=new w0(a);for(const y of Mh.values())d.addComponent(y);const g=new mE(n,s,d);return hu.set(a,g),g}function rd(i=Lh){const e=hu.get(i);if(!e&&i===Lh&&kg())return Ng();if(!e)throw ii.create("no-app",{appName:i});return e}function _r(i,e,n){var s;let a=(s=dE[i])!==null&&s!==void 0?s:i;n&&(a+=`-${n}`);const c=a.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const g=[`Unable to register library "${a}" with version "${e}":`];c&&g.push(`library name "${a}" contains illegal characters (whitespace or "/")`),c&&d&&g.push("and"),d&&g.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(g.join(" "));return}oi(new Tr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const gE="firebase-heartbeat-database",yE=1,pa="firebase-heartbeat-store";let Sh=null;function xg(){return Sh||(Sh=V0(gE,yE,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(i=>{throw ii.create("idb-open",{originalErrorMessage:i.message})})),Sh}async function vE(i){try{const n=(await xg()).transaction(pa),s=await n.objectStore(pa).get(Dg(i));return await n.done,s}catch(e){if(e instanceof kr)Ir.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function cm(i,e){try{const s=(await xg()).transaction(pa,"readwrite");await s.objectStore(pa).put(e,Dg(i)),await s.done}catch(n){if(n instanceof kr)Ir.warn(n.message);else{const s=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(s.message)}}}function Dg(i){return`${i.name}!${i.options.appId}`}/**
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
 */const _E=1024,EE=30;class wE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new IE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=hm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>EE){const d=SE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hm(),{heartbeatsToSend:s,unsentEntries:a}=TE(this._heartbeatsCache.heartbeats),c=cu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return Ir.warn(n),""}}}function hm(){return new Date().toISOString().substring(0,10)}function TE(i,e=_E){const n=[];let s=i.slice();for(const a of i){const c=n.find(d=>d.agent===a.agent);if(c){if(c.dates.push(a.date),dm(n)>e){c.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),dm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class IE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return td()?s0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function dm(i){return cu(JSON.stringify({version:2,heartbeats:i})).length}function SE(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function AE(i){oi(new Tr("platform-logger",e=>new b0(e),"PRIVATE")),oi(new Tr("heartbeat",e=>new wE(e),"PRIVATE")),_r(Vh,lm,i),_r(Vh,lm,"esm2017"),_r("fire-js","")}AE("");var kE="firebase",RE="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(kE,RE,"app");var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var id;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function A(){}A.prototype=S.prototype,x.D=S.prototype,x.prototype=new A,x.prototype.constructor=x,x.C=function(C,w,R){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return S.prototype[w].apply(C,T)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(x,S,A){A||(A=0);var C=Array(16);if(typeof S=="string")for(var w=0;16>w;++w)C[w]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(w=0;16>w;++w)C[w]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=x.g[0],A=x.g[1],w=x.g[2];var R=x.g[3],T=S+(R^A&(w^R))+C[0]+3614090360&4294967295;S=A+(T<<7&4294967295|T>>>25),T=R+(w^S&(A^w))+C[1]+3905402710&4294967295,R=S+(T<<12&4294967295|T>>>20),T=w+(A^R&(S^A))+C[2]+606105819&4294967295,w=R+(T<<17&4294967295|T>>>15),T=A+(S^w&(R^S))+C[3]+3250441966&4294967295,A=w+(T<<22&4294967295|T>>>10),T=S+(R^A&(w^R))+C[4]+4118548399&4294967295,S=A+(T<<7&4294967295|T>>>25),T=R+(w^S&(A^w))+C[5]+1200080426&4294967295,R=S+(T<<12&4294967295|T>>>20),T=w+(A^R&(S^A))+C[6]+2821735955&4294967295,w=R+(T<<17&4294967295|T>>>15),T=A+(S^w&(R^S))+C[7]+4249261313&4294967295,A=w+(T<<22&4294967295|T>>>10),T=S+(R^A&(w^R))+C[8]+1770035416&4294967295,S=A+(T<<7&4294967295|T>>>25),T=R+(w^S&(A^w))+C[9]+2336552879&4294967295,R=S+(T<<12&4294967295|T>>>20),T=w+(A^R&(S^A))+C[10]+4294925233&4294967295,w=R+(T<<17&4294967295|T>>>15),T=A+(S^w&(R^S))+C[11]+2304563134&4294967295,A=w+(T<<22&4294967295|T>>>10),T=S+(R^A&(w^R))+C[12]+1804603682&4294967295,S=A+(T<<7&4294967295|T>>>25),T=R+(w^S&(A^w))+C[13]+4254626195&4294967295,R=S+(T<<12&4294967295|T>>>20),T=w+(A^R&(S^A))+C[14]+2792965006&4294967295,w=R+(T<<17&4294967295|T>>>15),T=A+(S^w&(R^S))+C[15]+1236535329&4294967295,A=w+(T<<22&4294967295|T>>>10),T=S+(w^R&(A^w))+C[1]+4129170786&4294967295,S=A+(T<<5&4294967295|T>>>27),T=R+(A^w&(S^A))+C[6]+3225465664&4294967295,R=S+(T<<9&4294967295|T>>>23),T=w+(S^A&(R^S))+C[11]+643717713&4294967295,w=R+(T<<14&4294967295|T>>>18),T=A+(R^S&(w^R))+C[0]+3921069994&4294967295,A=w+(T<<20&4294967295|T>>>12),T=S+(w^R&(A^w))+C[5]+3593408605&4294967295,S=A+(T<<5&4294967295|T>>>27),T=R+(A^w&(S^A))+C[10]+38016083&4294967295,R=S+(T<<9&4294967295|T>>>23),T=w+(S^A&(R^S))+C[15]+3634488961&4294967295,w=R+(T<<14&4294967295|T>>>18),T=A+(R^S&(w^R))+C[4]+3889429448&4294967295,A=w+(T<<20&4294967295|T>>>12),T=S+(w^R&(A^w))+C[9]+568446438&4294967295,S=A+(T<<5&4294967295|T>>>27),T=R+(A^w&(S^A))+C[14]+3275163606&4294967295,R=S+(T<<9&4294967295|T>>>23),T=w+(S^A&(R^S))+C[3]+4107603335&4294967295,w=R+(T<<14&4294967295|T>>>18),T=A+(R^S&(w^R))+C[8]+1163531501&4294967295,A=w+(T<<20&4294967295|T>>>12),T=S+(w^R&(A^w))+C[13]+2850285829&4294967295,S=A+(T<<5&4294967295|T>>>27),T=R+(A^w&(S^A))+C[2]+4243563512&4294967295,R=S+(T<<9&4294967295|T>>>23),T=w+(S^A&(R^S))+C[7]+1735328473&4294967295,w=R+(T<<14&4294967295|T>>>18),T=A+(R^S&(w^R))+C[12]+2368359562&4294967295,A=w+(T<<20&4294967295|T>>>12),T=S+(A^w^R)+C[5]+4294588738&4294967295,S=A+(T<<4&4294967295|T>>>28),T=R+(S^A^w)+C[8]+2272392833&4294967295,R=S+(T<<11&4294967295|T>>>21),T=w+(R^S^A)+C[11]+1839030562&4294967295,w=R+(T<<16&4294967295|T>>>16),T=A+(w^R^S)+C[14]+4259657740&4294967295,A=w+(T<<23&4294967295|T>>>9),T=S+(A^w^R)+C[1]+2763975236&4294967295,S=A+(T<<4&4294967295|T>>>28),T=R+(S^A^w)+C[4]+1272893353&4294967295,R=S+(T<<11&4294967295|T>>>21),T=w+(R^S^A)+C[7]+4139469664&4294967295,w=R+(T<<16&4294967295|T>>>16),T=A+(w^R^S)+C[10]+3200236656&4294967295,A=w+(T<<23&4294967295|T>>>9),T=S+(A^w^R)+C[13]+681279174&4294967295,S=A+(T<<4&4294967295|T>>>28),T=R+(S^A^w)+C[0]+3936430074&4294967295,R=S+(T<<11&4294967295|T>>>21),T=w+(R^S^A)+C[3]+3572445317&4294967295,w=R+(T<<16&4294967295|T>>>16),T=A+(w^R^S)+C[6]+76029189&4294967295,A=w+(T<<23&4294967295|T>>>9),T=S+(A^w^R)+C[9]+3654602809&4294967295,S=A+(T<<4&4294967295|T>>>28),T=R+(S^A^w)+C[12]+3873151461&4294967295,R=S+(T<<11&4294967295|T>>>21),T=w+(R^S^A)+C[15]+530742520&4294967295,w=R+(T<<16&4294967295|T>>>16),T=A+(w^R^S)+C[2]+3299628645&4294967295,A=w+(T<<23&4294967295|T>>>9),T=S+(w^(A|~R))+C[0]+4096336452&4294967295,S=A+(T<<6&4294967295|T>>>26),T=R+(A^(S|~w))+C[7]+1126891415&4294967295,R=S+(T<<10&4294967295|T>>>22),T=w+(S^(R|~A))+C[14]+2878612391&4294967295,w=R+(T<<15&4294967295|T>>>17),T=A+(R^(w|~S))+C[5]+4237533241&4294967295,A=w+(T<<21&4294967295|T>>>11),T=S+(w^(A|~R))+C[12]+1700485571&4294967295,S=A+(T<<6&4294967295|T>>>26),T=R+(A^(S|~w))+C[3]+2399980690&4294967295,R=S+(T<<10&4294967295|T>>>22),T=w+(S^(R|~A))+C[10]+4293915773&4294967295,w=R+(T<<15&4294967295|T>>>17),T=A+(R^(w|~S))+C[1]+2240044497&4294967295,A=w+(T<<21&4294967295|T>>>11),T=S+(w^(A|~R))+C[8]+1873313359&4294967295,S=A+(T<<6&4294967295|T>>>26),T=R+(A^(S|~w))+C[15]+4264355552&4294967295,R=S+(T<<10&4294967295|T>>>22),T=w+(S^(R|~A))+C[6]+2734768916&4294967295,w=R+(T<<15&4294967295|T>>>17),T=A+(R^(w|~S))+C[13]+1309151649&4294967295,A=w+(T<<21&4294967295|T>>>11),T=S+(w^(A|~R))+C[4]+4149444226&4294967295,S=A+(T<<6&4294967295|T>>>26),T=R+(A^(S|~w))+C[11]+3174756917&4294967295,R=S+(T<<10&4294967295|T>>>22),T=w+(S^(R|~A))+C[2]+718787259&4294967295,w=R+(T<<15&4294967295|T>>>17),T=A+(R^(w|~S))+C[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(w+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+w&4294967295,x.g[3]=x.g[3]+R&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var A=S-this.blockSize,C=this.B,w=this.h,R=0;R<S;){if(w==0)for(;R<=A;)a(this,x,R),R+=this.blockSize;if(typeof x=="string"){for(;R<S;)if(C[w++]=x.charCodeAt(R++),w==this.blockSize){a(this,C),w=0;break}}else for(;R<S;)if(C[w++]=x[R++],w==this.blockSize){a(this,C),w=0;break}}this.h=w,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var A=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=A&255,A/=256;for(this.u(x),x=Array(16),S=A=0;4>S;++S)for(var C=0;32>C;C+=8)x[A++]=this.g[S]>>>C&255;return x};function c(x,S){var A=g;return Object.prototype.hasOwnProperty.call(A,x)?A[x]:A[x]=S(x)}function d(x,S){this.h=S;for(var A=[],C=!0,w=x.length-1;0<=w;w--){var R=x[w]|0;C&&R==S||(A[w]=R,C=!1)}this.g=A}var g={};function y(x){return-128<=x&&128>x?c(x,function(S){return new d([S|0],0>S?-1:0)}):new d([x|0],0>x?-1:0)}function E(x){if(isNaN(x)||!isFinite(x))return D;if(0>x)return Y(E(-x));for(var S=[],A=1,C=0;x>=A;C++)S[C]=x/A|0,A*=4294967296;return new d(S,0)}function P(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return Y(P(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=E(Math.pow(S,8)),C=D,w=0;w<x.length;w+=8){var R=Math.min(8,x.length-w),T=parseInt(x.substring(w,w+R),S);8>R?(R=E(Math.pow(S,R)),C=C.j(R).add(E(T))):(C=C.j(A),C=C.add(E(T)))}return C}var D=y(0),U=y(1),J=y(16777216);i=d.prototype,i.m=function(){if(Z(this))return-Y(this).m();for(var x=0,S=1,A=0;A<this.g.length;A++){var C=this.i(A);x+=(0<=C?C:4294967296+C)*S,S*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(q(this))return"0";if(Z(this))return"-"+Y(this).toString(x);for(var S=E(Math.pow(x,6)),A=this,C="";;){var w=we(A,S).g;A=Ee(A,w.j(S));var R=((0<A.g.length?A.g[0]:A.h)>>>0).toString(x);if(A=w,q(A))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function q(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function Z(x){return x.h==-1}i.l=function(x){return x=Ee(this,x),Z(x)?-1:q(x)?0:1};function Y(x){for(var S=x.g.length,A=[],C=0;C<S;C++)A[C]=~x.g[C];return new d(A,~x.h).add(U)}i.abs=function(){return Z(this)?Y(this):this},i.add=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],C=0,w=0;w<=S;w++){var R=C+(this.i(w)&65535)+(x.i(w)&65535),T=(R>>>16)+(this.i(w)>>>16)+(x.i(w)>>>16);C=T>>>16,R&=65535,T&=65535,A[w]=T<<16|R}return new d(A,A[A.length-1]&-2147483648?-1:0)};function Ee(x,S){return x.add(Y(S))}i.j=function(x){if(q(this)||q(x))return D;if(Z(this))return Z(x)?Y(this).j(Y(x)):Y(Y(this).j(x));if(Z(x))return Y(this.j(Y(x)));if(0>this.l(J)&&0>x.l(J))return E(this.m()*x.m());for(var S=this.g.length+x.g.length,A=[],C=0;C<2*S;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var w=0;w<x.g.length;w++){var R=this.i(C)>>>16,T=this.i(C)&65535,Ve=x.i(w)>>>16,We=x.i(w)&65535;A[2*C+2*w]+=T*We,me(A,2*C+2*w),A[2*C+2*w+1]+=R*We,me(A,2*C+2*w+1),A[2*C+2*w+1]+=T*Ve,me(A,2*C+2*w+1),A[2*C+2*w+2]+=R*Ve,me(A,2*C+2*w+2)}for(C=0;C<S;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=S;C<2*S;C++)A[C]=0;return new d(A,0)};function me(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function ge(x,S){this.g=x,this.h=S}function we(x,S){if(q(S))throw Error("division by zero");if(q(x))return new ge(D,D);if(Z(x))return S=we(Y(x),S),new ge(Y(S.g),Y(S.h));if(Z(S))return S=we(x,Y(S)),new ge(Y(S.g),S.h);if(30<x.g.length){if(Z(x)||Z(S))throw Error("slowDivide_ only works with positive integers.");for(var A=U,C=S;0>=C.l(x);)A=He(A),C=He(C);var w=Se(A,1),R=Se(C,1);for(C=Se(C,2),A=Se(A,2);!q(C);){var T=R.add(C);0>=T.l(x)&&(w=w.add(A),R=T),C=Se(C,1),A=Se(A,1)}return S=Ee(x,w.j(S)),new ge(w,S)}for(w=D;0<=x.l(S);){for(A=Math.max(1,Math.floor(x.m()/S.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=E(A),T=R.j(S);Z(T)||0<T.l(x);)A-=C,R=E(A),T=R.j(S);q(R)&&(R=U),w=w.add(R),x=Ee(x,T)}return new ge(w,x)}i.A=function(x){return we(this,x).h},i.and=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)&x.i(C);return new d(A,this.h&x.h)},i.or=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)|x.i(C);return new d(A,this.h|x.h)},i.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),A=[],C=0;C<S;C++)A[C]=this.i(C)^x.i(C);return new d(A,this.h^x.h)};function He(x){for(var S=x.g.length+1,A=[],C=0;C<S;C++)A[C]=x.i(C)<<1|x.i(C-1)>>>31;return new d(A,x.h)}function Se(x,S){var A=S>>5;S%=32;for(var C=x.g.length-A,w=[],R=0;R<C;R++)w[R]=0<S?x.i(R+A)>>>S|x.i(R+A+1)<<32-S:x.i(R+A);return new d(w,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=E,d.fromString=P,id=d}).apply(typeof fm<"u"?fm:typeof self<"u"?self:typeof window<"u"?window:{});var Gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Og,aa,Vg,nu,bh,Lg,Mg,bg;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gl=="object"&&Gl];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function a(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var V=l[_];if(!(V in m))break e;m=m[V]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function c(l,f){l instanceof String&&(l+="");var m=0,_=!1,V={next:function(){if(!_&&m<l.length){var F=m++;return{value:f(F,l[F]),done:!1}}return _=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}a("Array.prototype.values",function(l){return l||function(){return c(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},g=this||self;function y(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function E(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function P(l,f,m){return l.call.apply(l.bind,arguments)}function D(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,_),l.apply(f,V)}}return function(){return l.apply(f,arguments)}}function U(l,f,m){return U=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:D,U.apply(null,arguments)}function J(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function q(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,V,F){for(var X=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)X[Le-2]=arguments[Le];return f.prototype[V].apply(_,X)}}function Z(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function Y(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(y(_)){const V=l.length||0,F=_.length||0;l.length=V+F;for(let X=0;X<F;X++)l[V+X]=_[X]}else l.push(_)}}class Ee{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function me(l){return/^[\s\xa0]*$/.test(l)}function ge(){var l=g.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var He=ge().indexOf("Gecko")!=-1&&!(ge().toLowerCase().indexOf("webkit")!=-1&&ge().indexOf("Edge")==-1)&&!(ge().indexOf("Trident")!=-1||ge().indexOf("MSIE")!=-1)&&ge().indexOf("Edge")==-1;function Se(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function x(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function S(l){const f={};for(const m in l)f[m]=l[m];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let m,_;for(let V=1;V<arguments.length;V++){_=arguments[V];for(m in _)l[m]=_[m];for(let F=0;F<A.length;F++)m=A[F],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function w(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function R(l){g.setTimeout(()=>{throw l},0)}function T(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ve{constructor(){this.h=this.g=null}add(f,m){const _=We.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var We=new Ee(()=>new st,l=>l.reset());class st{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,Q=!1,le=new Ve,ee=()=>{const l=g.Promise.resolve(void 0);pe=()=>{l.then(O)}};var O=()=>{for(var l;l=T();){try{l.h.call(l.g)}catch(m){R(m)}var f=We;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Q=!1};function j(){this.s=this.s,this.C=this.C}j.prototype.s=!1,j.prototype.ma=function(){this.s||(this.s=!0,this.N())},j.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};g.addEventListener("test",m,f),g.removeEventListener("test",m,f)}catch{}return l}();function ve(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(He){e:{try{we(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Re[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ve.aa.h.call(this)}}q(ve,ae);var Re={2:"touch",3:"pen",4:"mouse"};ve.prototype.h=function(){ve.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Oe=0;function Fe(l,f,m,_,V){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=V,this.key=++Oe,this.da=this.fa=!1}function dt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Jn(l){this.src=l,this.g={},this.h=0}Jn.prototype.add=function(l,f,m,_,V){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var X=Rr(l,f,_,V);return-1<X?(f=l[X],m||(f.fa=!1)):(f=new Fe(f,this.src,F,!!_,V),f.fa=m,l.push(f)),f};function Zi(l,f){var m=f.type;if(m in l.g){var _=l.g[m],V=Array.prototype.indexOf.call(_,f,void 0),F;(F=0<=V)&&Array.prototype.splice.call(_,V,1),F&&(dt(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Rr(l,f,m,_){for(var V=0;V<l.length;++V){var F=l[V];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==_)return V}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),es={};function co(l,f,m,_,V){if(Array.isArray(f)){for(var F=0;F<f.length;F++)co(l,f[F],m,_,V);return null}return m=po(m),l&&l[De]?l.K(f,m,E(_)?!!_.capture:!1,V):ho(l,f,m,!1,_,V)}function ho(l,f,m,_,V,F){if(!f)throw Error("Invalid event type");var X=E(V)?!!V.capture:!!V,Le=ns(l);if(Le||(l[hi]=Le=new Jn(l)),m=Le.add(f,m,_,X,F),m.proxy)return m;if(_=Da(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)ye||(V=X),V===void 0&&(V=!1),l.addEventListener(f.toString(),_,V);else if(l.attachEvent)l.attachEvent(er(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Da(){function l(m){return f.call(l.src,l.listener,m)}const f=fo;return l}function ts(l,f,m,_,V){if(Array.isArray(f))for(var F=0;F<f.length;F++)ts(l,f[F],m,_,V);else _=E(_)?!!_.capture:!!_,m=po(m),l&&l[De]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],m=Rr(F,m,_,V),-1<m&&(dt(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=ns(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Rr(f,m,_,V)),(m=-1<l?f[l]:null)&&Zn(m))}function Zn(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[De])Zi(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(er(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=ns(f))?(Zi(m,l),m.h==0&&(m.src=null,f[hi]=null)):dt(l)}}}function er(l){return l in es?es[l]:es[l]="on"+l}function fo(l,f){if(l.da)l=!0;else{f=new ve(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&Zn(l),l=m.call(_,f)}return l}function ns(l){return l=l[hi],l instanceof Jn?l:null}var rs="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(l){return typeof l=="function"?l:(l[rs]||(l[rs]=function(f){return l.handleEvent(f)}),l[rs])}function ot(){j.call(this),this.i=new Jn(this),this.M=this,this.F=null}q(ot,j),ot.prototype[De]=!0,ot.prototype.removeEventListener=function(l,f,m,_){ts(this,l,f,m,_)};function at(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var V=f;f=new ae(_,l),C(f,V)}if(V=!0,m)for(var F=m.length-1;0<=F;F--){var X=f.g=m[F];V=tr(X,_,!0,f)&&V}if(X=f.g=l,V=tr(X,_,!0,f)&&V,V=tr(X,_,!1,f)&&V,m)for(F=0;F<m.length;F++)X=f.g=m[F],V=tr(X,_,!1,f)&&V}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)dt(m[_]);delete l.g[f],l.h--}}this.F=null},ot.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},ot.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function tr(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,F=0;F<f.length;++F){var X=f[F];if(X&&!X.da&&X.capture==m){var Le=X.listener,lt=X.ha||X.src;X.fa&&Zi(l.i,X),V=Le.call(lt,_)!==!1&&V}}return V&&!_.defaultPrevented}function mo(l,f,m){if(typeof l=="function")m&&(l=U(l,m));else if(l&&typeof l.handleEvent=="function")l=U(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:g.setTimeout(l,f||0)}function Cr(l){l.g=mo(()=>{l.g=null,l.i&&(l.i=!1,Cr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class di extends j{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Cr(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(l){j.call(this),this.h=l,this.g={}}q(fi,j);var go=[];function yo(l){Se(l.g,function(f,m){this.g.hasOwnProperty(m)&&Zn(f)},l),l.g={}}fi.prototype.N=function(){fi.aa.N.call(this),yo(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vo=g.JSON.stringify,_o=g.JSON.parse,Eo=class{stringify(l){return g.JSON.stringify(l,void 0)}parse(l){return g.JSON.parse(l,void 0)}};function pi(){}pi.prototype.h=null;function is(l){return l.h||(l.h=l.i())}function ss(){}var on={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ln(){ae.call(this,"d")}q(Ln,ae);function os(){ae.call(this,"c")}q(os,ae);var Mn={},wo=null;function mi(){return wo=wo||new ot}Mn.La="serverreachability";function To(l){ae.call(this,Mn.La,l)}q(To,ae);function nr(l){const f=mi();at(f,new To(f))}Mn.STAT_EVENT="statevent";function Io(l,f){ae.call(this,Mn.STAT_EVENT,l),this.stat=f}q(Io,ae);function et(l){const f=mi();at(f,new Io(f,l))}Mn.Ma="timingevent";function as(l,f){ae.call(this,Mn.Ma,l),this.size=f}q(as,ae);function yn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){l()},f)}function gi(){this.g=!0}gi.prototype.xa=function(){this.g=!1};function yi(l,f,m,_,V,F){l.info(function(){if(l.g)if(F)for(var X="",Le=F.split("&"),lt=0;lt<Le.length;lt++){var Ce=Le[lt].split("=");if(1<Ce.length){var ft=Ce[0];Ce=Ce[1];var nt=ft.split("_");X=2<=nt.length&&nt[1]=="type"?X+(ft+"="+Ce+"&"):X+(ft+"=redacted&")}}else X=null;else X=F;return"XMLHTTP REQ ("+_+") [attempt "+V+"]: "+f+`
`+m+`
`+X})}function ls(l,f,m,_,V,F,X){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+V+"]: "+f+`
`+m+`
`+F+" "+X})}function vn(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+$u(l,m)+(_?" "+_:"")})}function So(l,f){l.info(function(){return"TIMEOUT: "+f})}gi.prototype.info=function(){};function $u(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var V=_[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var X=1;X<V.length;X++)V[X]=""}}}}return vo(m)}catch{return f}}var us={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_n;function vi(){}q(vi,pi),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},_n=new vi;function En(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Va}function Va(){this.i=null,this.g="",this.h=!1}var Ao={},cs={};function hs(l,f,m){l.L=1,l.v=Or(Zt(f)),l.m=m,l.P=!0,ko(l,null)}function ko(l,f){l.F=Date.now(),Ue(l),l.A=Zt(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Lr(m.i,"t",_),l.C=0,m=l.j.J,l.h=new Va,l.g=Ja(l.j,m?f:null,!l.m),0<l.O&&(l.M=new di(U(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(go[0]=V.toString()),V=go);for(var F=0;F<V.length;F++){var X=co(m,V[F],_||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),nr(),yi(l.i,l.u,l.A,l.l,l.R,l.m)}En.prototype.ca=function(l){l=l.target;const f=this.M;f&&zt(l)==3?f.j():this.Y(l)},En.prototype.Y=function(l){try{if(l==this.g)e:{const nt=zt(this.g);var f=this.g.Ba();const un=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Do(this.g)))){this.J||nt!=4||f==7||(f==8||0>=un?nr(3):nr(2)),_i(this);var m=this.g.Z();this.X=m;t:if(La(this)){var _=Do(this.g);l="";var V=_.length,F=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),Pr(this);var X="";break t}this.h.i=new g.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(F&&f==V-1)});_.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=m==200,ls(this.i,this.u,this.A,this.l,this.R,nt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,lt=this.g;if((Le=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!me(Le)){var Ce=Le;break t}}Ce=null}if(m=Ce)vn(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ro(this,m);else{this.o=!1,this.s=3,et(12),an(this),Pr(this);break e}}if(this.P){m=!0;let tn;for(;!this.J&&this.C<X.length;)if(tn=Hu(this,X),tn==cs){nt==4&&(this.s=4,et(14),m=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Ao){this.s=4,et(15),vn(this.i,this.l,X,"[Invalid Chunk]"),m=!1;break}else vn(this.i,this.l,tn,null),Ro(this,tn);if(La(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||X.length!=0||this.h.h||(this.s=1,et(16),m=!1),this.o=this.o&&m,!m)vn(this.i,this.l,X,"[Invalid Chunked Response]"),an(this),Pr(this);else if(0<X.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Vo(ft),ft.M=!0,et(11))}}else vn(this.i,this.l,X,null),Ro(this,X);nt==4&&an(this),this.o&&!this.J&&(nt==4?Ts(this.j,this):(this.o=!1,Ue(this)))}else ys(this.g),m==400&&0<X.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),an(this),Pr(this)}}}catch{}finally{}};function La(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Hu(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?cs:(m=Number(f.substring(m,_)),isNaN(m)?Ao:(_+=1,_+m>f.length?cs:(f=f.slice(_,_+m),l.C=_+m,f)))}En.prototype.cancel=function(){this.J=!0,an(this)};function Ue(l){l.S=Date.now()+l.I,Ma(l,l.I)}function Ma(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=yn(U(l.ba,l),f)}function _i(l){l.B&&(g.clearTimeout(l.B),l.B=null)}En.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(So(this.i,this.A),this.L!=2&&(nr(),et(17)),an(this),this.s=2,Pr(this)):Ma(this,this.S-l)};function Pr(l){l.j.G==0||l.J||Ts(l.j,l)}function an(l){_i(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,yo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Ro(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Mt(m.h,l))){if(!l.K&&Mt(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var V=_;if(V[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)ws(m),An(m);else break e;Es(m),et(18)}}else m.za=V[1],0<m.za-m.T&&37500>V[2]&&m.F&&m.v==0&&!m.C&&(m.C=yn(U(m.Za,m),6e3));if(1>=Fa(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ar(m,11)}else if((l.K||m.g==l)&&ws(m),!me(f))for(V=m.Da.g.parse(f),f=0;f<V.length;f++){let Ce=V[f];if(m.T=Ce[0],Ce=Ce[1],m.G==2)if(Ce[0]=="c"){m.K=Ce[1],m.ia=Ce[2];const ft=Ce[3];ft!=null&&(m.la=ft,m.j.info("VER="+m.la));const nt=Ce[4];nt!=null&&(m.Aa=nt,m.j.info("SVER="+m.Aa));const un=Ce[5];un!=null&&typeof un=="number"&&0<un&&(_=1.5*un,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const tn=l.g;if(tn){const ki=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ki){var F=_.h;F.g||ki.indexOf("spdy")==-1&&ki.indexOf("quic")==-1&&ki.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Co(F,F.h),F.h=null))}if(_.D){const Ss=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ss&&(_.ya=Ss,be(_.I,_.D,Ss))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var X=l;if(_.qa=Ya(_,_.J?_.ia:null,_.W),X.K){Ua(_.h,X);var Le=X,lt=_.L;lt&&(Le.I=lt),Le.B&&(_i(Le),Ue(Le)),_.g=X}else Ai(_);0<m.i.length&&jn(m)}else Ce[0]!="stop"&&Ce[0]!="close"||ar(m,7);else m.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?ar(m,7):wt(m):Ce[0]!="noop"&&m.l&&m.l.ta(Ce),m.v=0)}}nr(4)}catch{}}var ba=class{constructor(l,f){this.g=l,this.map=f}};function Ei(l){this.l=l||10,g.PerformanceNavigationTiming?(l=g.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Fa(l){return l.h?1:l.g?l.g.size:0}function Mt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Co(l,f){l.g?l.g.add(f):l.h=f}function Ua(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ei.prototype.cancel=function(){if(this.i=ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ja(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return Z(l.i)}function ds(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function fs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function Nr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=fs(l),_=ds(l),V=_.length,F=0;F<V;F++)f.call(void 0,_[F],m&&m[F],l)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wu(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),V=null;if(0<=_){var F=l[m].substring(0,_);V=l[m].substring(_+1)}else F=l[m];f(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rr){this.h=l.h,Ti(this,l.j),this.o=l.o,this.g=l.g,xr(this,l.s),this.l=l.l;var f=l.i,m=new bn;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),Dr(this,m),this.m=l.m}else l&&(f=String(l).match(wi))?(this.h=!1,Ti(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),xr(this,f[4]),this.l=ke(f[5]||"",!0),Dr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}rr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Vr(f,ps,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Vr(f,ps,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Vr(m,m.charAt(0)=="/"?$a:Ba,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Vr(m,Po)),l.join("")};function Zt(l){return new rr(l)}function Ti(l,f,m){l.j=m?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Dr(l,f,m){f instanceof bn?(l.i=f,Fn(l.i,l.h)):(m||(f=Vr(f,Ha)),l.i=new bn(f,l.h))}function be(l,f,m){l.i.set(f,m)}function Or(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Vr(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,za),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function za(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ps=/[#\/\?@]/g,Ba=/[#\?:]/g,$a=/[#\?]/g,Ha=/[#\?@]/g,Po=/#/g;function bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&Wu(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}i=bn.prototype,i.add=function(l,f){Et(this),this.i=null,l=ln(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function wn(l,f){Et(l),f=ln(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Tn(l,f){return Et(l),f=ln(l,f),l.g.has(f)}i.forEach=function(l,f){Et(this),this.g.forEach(function(m,_){m.forEach(function(V){l.call(f,V,_,this)},this)},this)},i.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const V=l[_];for(let F=0;F<V.length;F++)m.push(f[_])}return m},i.V=function(l){Et(this);let f=[];if(typeof l=="string")Tn(this,l)&&(f=f.concat(this.g.get(ln(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},i.set=function(l,f){return Et(this),this.i=null,l=ln(this,l),Tn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Lr(l,f,m){wn(l,f),0<m.length&&(l.i=null,l.g.set(ln(l,f),Z(m)),l.h+=m.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const F=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var V=F;X[_]!==""&&(V+="="+encodeURIComponent(String(X[_]))),l.push(V)}}return this.i=l.join("&")};function ln(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Fn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(m,_){var V=_.toLowerCase();_!=V&&(wn(this,_),Lr(this,V,m))},l)),l.j=f}function Ku(l,f){const m=new gi;if(g.Image){const _=new Image;_.onload=J(jt,m,"TestLoadImage: loaded",!0,f,_),_.onerror=J(jt,m,"TestLoadImage: error",!1,f,_),_.onabort=J(jt,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=J(jt,m,"TestLoadImage: timeout",!1,f,_),g.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function Wa(l,f){const m=new gi,_=new AbortController,V=setTimeout(()=>{_.abort(),jt(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(F=>{clearTimeout(V),F.ok?jt(m,"TestPingServer: ok",!0,f):jt(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),jt(m,"TestPingServer: error",!1,f)})}function jt(l,f,m,_,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),_(m)}catch{}}function qu(){this.g=new Eo}function Ka(l,f,m){const _=m||"";try{Nr(l,function(V,F){let X=V;E(V)&&(X=vo(V)),f.push(_+F+"="+encodeURIComponent(X))})}catch(V){throw f.push(_+"type="+encodeURIComponent("_badmap")),V}}function ir(l){this.l=l.Ub||null,this.j=l.eb||!1}q(ir,pi),ir.prototype.g=function(){return new Ii(this.l,this.j)},ir.prototype.i=function(l){return function(){return l}}({});function Ii(l,f){ot.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Ii,ot),i=Ii.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Sn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||g).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,In(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qa(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function qa(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?In(this):Sn(this),this.readyState==3&&qa(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,In(this))},i.Qa=function(l){this.g&&(this.response=l,In(this))},i.ga=function(){this.g&&In(this)};function In(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Sn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Sn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function sr(l){let f="";return Se(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Mr(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=sr(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):be(l,f,m))}function Ke(l){ot.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ke,ot);var Gu=/^https?$/i,No=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_n.g(),this.v=this.o?is(this.o):is(_n),this.g.onreadystatechange=U(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Si(this,F);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var V in _)m.set(V,_[V]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const F of _.keys())m.set(F,_.get(F));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),V=g.FormData&&l instanceof g.FormData,!(0<=Array.prototype.indexOf.call(No,f,void 0))||_||V||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,X]of m)this.g.setRequestHeader(F,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gs(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Si(this,F)}};function Si(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ms(l),en(l)}function ms(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,at(this,"complete"),at(this,"abort"),en(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?xo(this):this.bb())},i.bb=function(){xo(this)};function xo(l){if(l.h&&typeof d<"u"&&(!l.v[1]||zt(l)!=4||l.Z()!=2)){if(l.u&&zt(l)==4)mo(l.Ea,0,l);else if(at(l,"readystatechange"),zt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=X===0){var V=String(l.D).match(wi)[1]||null;!V&&g.self&&g.self.location&&(V=g.self.location.protocol.slice(0,-1)),_=!Gu.test(V?V.toLowerCase():"")}m=_}if(m)at(l,"complete"),at(l,"success");else{l.m=6;try{var F=2<zt(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",ms(l)}}finally{en(l)}}}}function en(l,f){if(l.g){gs(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||at(l,"ready");try{m.onreadystatechange=_}catch{}}}function gs(l){l.I&&(g.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function zt(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),_o(f)}};function Do(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function ys(l){const f={};l=(l.g&&2<=zt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(me(l[_]))continue;var m=w(l[_]);const V=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[V]||[];f[V]=F,F.push(m)}x(f,function(_){return _.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Un(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function Oo(l){this.Aa=0,this.i=[],this.j=new gi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Un("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Un("baseRetryDelayMs",5e3,l),this.cb=Un("retryDelaySeedMs",1e4,l),this.Wa=Un("forwardChannelMaxRetries",2,l),this.wa=Un("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(l&&l.concurrentRequestLimit),this.Da=new qu,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Oo.prototype,i.la=8,i.G=1,i.connect=function(l,f,m,_){et(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=Ya(this,null,this.W),jn(this)};function wt(l){if(vs(l),l.G==3){var f=l.U++,m=Zt(l.I);if(be(m,"SID",l.K),be(m,"RID",f),be(m,"TYPE","terminate"),or(l,m),f=new En(l,l.j,f),f.L=2,f.v=Or(Zt(m)),m=!1,g.navigator&&g.navigator.sendBeacon)try{m=g.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&g.Image&&(new Image().src=f.v,m=!0),m||(f.g=Ja(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ue(f)}Xa(l)}function An(l){l.g&&(Vo(l),l.g.cancel(),l.g=null)}function vs(l){An(l),l.u&&(g.clearTimeout(l.u),l.u=null),ws(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&g.clearTimeout(l.s),l.s=null)}function jn(l){if(!Jt(l.h)&&!l.s){l.s=!0;var f=l.Ga;pe||ee(),Q||(pe(),Q=!0),le.add(f,l),l.B=0}}function Qu(l,f){return Fa(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=yn(U(l.Ga,l,f),Qa(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new En(this,this.j,l);let F=this.o;if(this.S&&(F?(F=S(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=br(this,V,f),m=Zt(this.I),be(m,"RID",l),be(m,"CVER",22),this.D&&be(m,"X-HTTP-Session-Id",this.D),or(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(sr(F)))+"&"+f:this.m&&Mr(m,this.m,F)),Co(this.h,V),this.Ua&&be(m,"TYPE","init"),this.P?(be(m,"$req",f),be(m,"SID","null"),V.T=!0,hs(V,m,null)):hs(V,m,f),this.G=2}}else this.G==3&&(l?_s(this,l):this.i.length==0||Jt(this.h)||_s(this))};function _s(l,f){var m;f?m=f.l:m=l.U++;const _=Zt(l.I);be(_,"SID",l.K),be(_,"RID",m),be(_,"AID",l.T),or(l,_),l.m&&l.o&&Mr(_,l.m,l.o),m=new En(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=br(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Co(l.h,m),hs(m,_,f)}function or(l,f){l.H&&Se(l.H,function(m,_){be(f,_,m)}),l.l&&Nr({},function(m,_){be(f,_,m)})}function br(l,f,m){m=Math.min(l.i.length,m);var _=l.l?U(l.l.Na,l.l,l):null;e:{var V=l.i;let F=-1;for(;;){const X=["count="+m];F==-1?0<m?(F=V[0].g,X.push("ofs="+F)):F=0:X.push("ofs="+F);let Le=!0;for(let lt=0;lt<m;lt++){let Ce=V[lt].g;const ft=V[lt].map;if(Ce-=F,0>Ce)F=Math.max(0,V[lt].g-100),Le=!1;else try{Ka(ft,X,"req"+Ce+"_")}catch{_&&_(ft)}}if(Le){_=X.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function Ai(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;pe||ee(),Q||(pe(),Q=!0),le.add(f,l),l.v=0}}function Es(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=yn(U(l.Fa,l),Qa(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,Ga(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=yn(U(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),An(this),Ga(this))};function Vo(l){l.A!=null&&(g.clearTimeout(l.A),l.A=null)}function Ga(l){l.g=new En(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zt(l.qa);be(f,"RID","rpc"),be(f,"SID",l.K),be(f,"AID",l.T),be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(f,"TO",l.ja),be(f,"TYPE","xmlhttp"),or(l,f),l.m&&l.o&&Mr(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Or(Zt(f)),m.m=null,m.P=!0,ko(m,l)}i.Za=function(){this.C!=null&&(this.C=null,An(this),Es(this),et(19))};function ws(l){l.C!=null&&(g.clearTimeout(l.C),l.C=null)}function Ts(l,f){var m=null;if(l.g==f){ws(l),Vo(l),l.g=null;var _=2}else if(Mt(l.h,f))m=f.D,Ua(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var V=l.B;_=mi(),at(_,new as(_,m)),jn(l)}else Ai(l);else if(V=f.s,V==3||V==0&&0<f.X||!(_==1&&Qu(l,f)||_==2&&Es(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),V){case 1:ar(l,5);break;case 4:ar(l,10);break;case 3:ar(l,6);break;default:ar(l,2)}}}function Qa(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function ar(l,f){if(l.j.info("Error code "+f),f==2){var m=U(l.fb,l),_=l.Xa;const V=!_;_=new rr(_||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||Ti(_,"https"),Or(_),V?Ku(_.toString(),m):Wa(_.toString(),m)}else et(2);l.G=0,l.l&&l.l.sa(f),Xa(l),vs(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Xa(l){if(l.G=0,l.ka=[],l.l){const f=ja(l.h);(f.length!=0||l.i.length!=0)&&(Y(l.ka,f),Y(l.ka,l.i),l.h.i.length=0,Z(l.i),l.i.length=0),l.l.ra()}}function Ya(l,f,m){var _=m instanceof rr?Zt(m):new rr(m);if(_.g!="")f&&(_.g=f+"."+_.g),xr(_,_.s);else{var V=g.location;_=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var F=new rr(null);_&&Ti(F,_),f&&(F.g=f),V&&xr(F,V),m&&(F.l=m),_=F}return m=l.D,f=l.ya,m&&f&&be(_,m,f),be(_,"VER",l.la),or(l,_),_}function Ja(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new ir({eb:m})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lo(){}i=Lo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Is(){}Is.prototype.g=function(l,f){return new bt(l,f)};function bt(l,f){ot.call(this),this.g=new Oo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!me(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!me(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new zn(this)}q(bt,ot),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){wt(this.g)},bt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=vo(l),l=m);f.i.push(new ba(f.Ya++,l)),f.G==3&&jn(f)},bt.prototype.N=function(){this.g.l=null,delete this.j,wt(this.g),delete this.g,bt.aa.N.call(this)};function Za(l){Ln.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}q(Za,Ln);function el(){os.call(this),this.status=1}q(el,os);function zn(l){this.g=l}q(zn,Lo),zn.prototype.ua=function(){at(this.g,"a")},zn.prototype.ta=function(l){at(this.g,new Za(l))},zn.prototype.sa=function(l){at(this.g,new el)},zn.prototype.ra=function(){at(this.g,"b")},Is.prototype.createWebChannel=Is.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,bg=function(){return new Is},Mg=function(){return mi()},Lg=Mn,bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},us.NO_ERROR=0,us.TIMEOUT=8,us.HTTP_ERROR=6,nu=us,Oa.COMPLETE="complete",Vg=Oa,ss.EventType=on,on.OPEN="a",on.CLOSE="b",on.ERROR="c",on.MESSAGE="d",ot.prototype.listen=ot.prototype.K,aa=ss,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Og=Ke}).apply(typeof Gl<"u"?Gl:typeof self<"u"?self:typeof window<"u"?window:{});const pm="@firebase/firestore",mm="4.7.9";/**
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
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let ao="11.4.0";/**
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
 */const Ki=new Nu("@firebase/firestore");function Ws(){return Ki.logLevel}function se(i,...e){if(Ki.logLevel<=Ae.DEBUG){const n=e.map(sd);Ki.debug(`Firestore (${ao}): ${i}`,...n)}}function qi(i,...e){if(Ki.logLevel<=Ae.ERROR){const n=e.map(sd);Ki.error(`Firestore (${ao}): ${i}`,...n)}}function xu(i,...e){if(Ki.logLevel<=Ae.WARN){const n=e.map(sd);Ki.warn(`Firestore (${ao}): ${i}`,...n)}}function sd(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Ie(i="Unexpected state"){const e=`FIRESTORE (${ao}) INTERNAL ASSERTION FAILED: `+i;throw qi(e),new Error(e)}function Ze(i,e){i||Ie()}function ze(i,e){return i}/**
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
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends kr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Fg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class PE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NE{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ze(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let c=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Bi,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const y=c;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},g=y=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(y=>g(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Bi)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ze(typeof s.accessToken=="string"),new Fg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string"),new Ot(e)}}class xE{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DE{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new xE(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class OE{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,qn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ze(this.o===void 0);const s=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.R;return this.R=c.token,se("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const a=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?a(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new gm(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ze(typeof n.token=="string"),this.R=n.token,new gm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Ug{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=VE(40);for(let c=0;c<a.length;++c)s.length<20&&a[c]<n&&(s+=e.charAt(a[c]%62))}return s}}function Me(i,e){return i<e?-1:i>e?1:0}function Zs(i,e,n){return i.length===e.length&&i.every((s,a)=>n(s,e[a]))}/**
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
 */const ym=-62135596800,vm=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*vm);return new _t(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ym)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vm}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ym;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ge{static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new _t(0,0))}static max(){return new Ge(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _m="__name__";class Kn{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ie(),s===void 0?s=e.length-n:s>e.length-n&&Ie(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const c=Kn.compareSegments(e.get(a),n.get(a));if(c!==0)return c}return Math.sign(e.length-n.length)}static compareSegments(e,n){const s=Kn.isNumericId(e),a=Kn.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?Kn.extractNumericId(e).compare(Kn.extractNumericId(n)):e<n?-1:e>n?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return id.fromString(e.substring(4,e.length-2))}}class Je extends Kn{construct(e,n,s){return new Je(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const LE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Kn{construct(e,n,s){return new kt(e,n,s)}static isValidIdentifier(e){return LE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_m}static keyField(){return new kt([_m])}static fromServerFormat(e){const n=[];let s="",a=0;const c=()=>{if(s.length===0)throw new he(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let d=!1;for(;a<e.length;){const g=e[a];if(g==="\\"){if(a+1===e.length)throw new he(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new he(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else g==="`"?(d=!d,a++):g!=="."||d?(s+=g,a++):(c(),a++)}if(c(),d)throw new he(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(Je.fromString(e))}static fromName(e){return new _e(Je.fromString(e).popFirst(5))}static empty(){return new _e(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new Je(e.slice()))}}/**
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
 */const ma=-1;function ME(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=Ge.fromTimestamp(s===1e9?new _t(n+1,0):new _t(n,s));return new ai(a,_e.empty(),e)}function bE(i){return new ai(i.readTime,i.key,ma)}class ai{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ai(Ge.min(),_e.empty(),ma)}static max(){return new ai(Ge.max(),_e.empty(),ma)}}function FE(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(i.documentKey,e.documentKey),n!==0?n:Me(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function od(i){if(i.code!==K.FAILED_PRECONDITION||i.message!==UE)throw i;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ie(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((s,a)=>{this.nextCallback=c=>{this.wrapSuccess(e,c).next(s,a)},this.catchCallback=c=>{this.wrapFailure(n,c).next(s,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,s)=>{n(e)})}static reject(e){return new B((n,s)=>{s(e)})}static waitFor(e){return new B((n,s)=>{let a=0,c=0,d=!1;e.forEach(g=>{++a,g.next(()=>{++c,d&&c===a&&n()},y=>s(y))}),d=!0,c===a&&n()})}static or(e){let n=B.resolve(!1);for(const s of e)n=n.next(a=>a?B.resolve(a):s());return n}static forEach(e,n){const s=[];return e.forEach((a,c)=>{s.push(n.call(this,a,c))}),this.waitFor(s)}static mapArray(e,n){return new B((s,a)=>{const c=e.length,d=new Array(c);let g=0;for(let y=0;y<c;y++){const E=y;n(e[E]).next(P=>{d[E]=P,++g,g===c&&s(d)},P=>a(P))}})}static doWhile(e,n){return new B((s,a)=>{const c=()=>{e()===!0?n().next(()=>{c()},a):s()};c()})}}function zE(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Sa(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class ad{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ad.ae=-1;/**
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
 */const ld=-1;function ud(i){return i==null}function du(i){return i===0&&1/i==-1/0}function BE(i){return typeof i=="number"&&Number.isInteger(i)&&!du(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const jg="";function $E(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=Em(e)),e=HE(i.get(n),e);return Em(e)}function HE(i,e){let n=e;const s=i.length;for(let a=0;a<s;a++){const c=i.charAt(a);switch(c){case"\0":n+="";break;case jg:n+="";break;default:n+=c}}return n}function Em(i){return i+jg+""}/**
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
 */function wm(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function lo(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function zg(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Yt{constructor(e,n){this.comparator=e,this.root=n||St.EMPTY}insert(e,n){return new Yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ql(this.root,e,this.comparator,!0)}}class Ql{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let c=1;for(;!e.isEmpty();)if(c=n?s(e.key,n):1,n&&a&&(c*=-1),c<0)e=this.isReverse?e.left:e.right;else{if(c===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,n,s,a,c){this.key=e,this.value=n,this.color=s??St.RED,this.left=a??St.EMPTY,this.right=c??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,c){return new St(e??this.key,n??this.value,s??this.color,a??this.left,c??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const c=s(e,a.key);return a=c<0?a.copy(null,null,null,a.left.insert(e,n,s),null):c===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return St.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ie();const e=this.left.check();if(e!==this.right.check())throw Ie();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie()}get value(){throw Ie()}get color(){throw Ie()}get left(){throw Ie()}get right(){throw Ie()}copy(e,n,s,a,c){return this}insert(e,n,s){return new St(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Rt{constructor(e){this.comparator=e,this.data=new Yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tm(this.data.getIterator())}getIteratorFrom(e){return new Tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,c=s.getNext().key;if(this.comparator(a,c)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Rt(this.comparator);return n.data=e,n}}class Tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Vn([])}unionWith(e){let n=new Rt(kt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class WE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new WE("Invalid base64 string: "+c):c}}(e);return new Xn(n)}static fromUint8Array(e){const n=function(a){let c="";for(let d=0;d<a.length;++d)c+=String.fromCharCode(a[d]);return c}(e);return new Xn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xn.EMPTY_BYTE_STRING=new Xn("");const KE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gi(i){if(Ze(!!i),typeof i=="string"){let e=0;const n=KE.exec(i);if(Ze(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(i.seconds),nanos:At(i.nanos)}}function At(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function eo(i){return typeof i=="string"?Xn.fromBase64String(i):Xn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="server_timestamp",$g="__type__",Hg="__previous_value__",Wg="__local_write_time__";function cd(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[$g])===null||n===void 0?void 0:n.stringValue)===Bg}function hd(i){const e=i.mapValue.fields[Hg];return cd(e)?hd(e):e}function fu(i){const e=Gi(i.mapValue.fields[Wg].timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class qE{constructor(e,n,s,a,c,d,g,y,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=c,this.forceLongPolling=d,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=E}}const pu="(default)";class mu{constructor(e,n){this.projectId=e,this.database=n||pu}static empty(){return new mu("","")}get isDefaultDatabase(){return this.database===pu}isEqual(e){return e instanceof mu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="__type__",GE="__max__",Xl={mapValue:{}},qg="__vector__",Fh="value";function Qi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?cd(i)?4:XE(i)?9007199254740991:QE(i)?10:11:Ie()}function Yn(i,e){if(i===e)return!0;const n=Qi(i);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return fu(i).isEqual(fu(e));case 3:return function(a,c){if(typeof a.timestampValue=="string"&&typeof c.timestampValue=="string"&&a.timestampValue.length===c.timestampValue.length)return a.timestampValue===c.timestampValue;const d=Gi(a.timestampValue),g=Gi(c.timestampValue);return d.seconds===g.seconds&&d.nanos===g.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,c){return eo(a.bytesValue).isEqual(eo(c.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,c){return At(a.geoPointValue.latitude)===At(c.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(c.geoPointValue.longitude)}(i,e);case 2:return function(a,c){if("integerValue"in a&&"integerValue"in c)return At(a.integerValue)===At(c.integerValue);if("doubleValue"in a&&"doubleValue"in c){const d=At(a.doubleValue),g=At(c.doubleValue);return d===g?du(d)===du(g):isNaN(d)&&isNaN(g)}return!1}(i,e);case 9:return Zs(i.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(a,c){const d=a.mapValue.fields||{},g=c.mapValue.fields||{};if(wm(d)!==wm(g))return!1;for(const y in d)if(d.hasOwnProperty(y)&&(g[y]===void 0||!Yn(d[y],g[y])))return!1;return!0}(i,e);default:return Ie()}}function ga(i,e){return(i.values||[]).find(n=>Yn(n,e))!==void 0}function to(i,e){if(i===e)return 0;const n=Qi(i),s=Qi(e);if(n!==s)return Me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(i.booleanValue,e.booleanValue);case 2:return function(c,d){const g=At(c.integerValue||c.doubleValue),y=At(d.integerValue||d.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1}(i,e);case 3:return Im(i.timestampValue,e.timestampValue);case 4:return Im(fu(i),fu(e));case 5:return Me(i.stringValue,e.stringValue);case 6:return function(c,d){const g=eo(c),y=eo(d);return g.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(c,d){const g=c.split("/"),y=d.split("/");for(let E=0;E<g.length&&E<y.length;E++){const P=Me(g[E],y[E]);if(P!==0)return P}return Me(g.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(c,d){const g=Me(At(c.latitude),At(d.latitude));return g!==0?g:Me(At(c.longitude),At(d.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Sm(i.arrayValue,e.arrayValue);case 10:return function(c,d){var g,y,E,P;const D=c.fields||{},U=d.fields||{},J=(g=D[Fh])===null||g===void 0?void 0:g.arrayValue,q=(y=U[Fh])===null||y===void 0?void 0:y.arrayValue,Z=Me(((E=J==null?void 0:J.values)===null||E===void 0?void 0:E.length)||0,((P=q==null?void 0:q.values)===null||P===void 0?void 0:P.length)||0);return Z!==0?Z:Sm(J,q)}(i.mapValue,e.mapValue);case 11:return function(c,d){if(c===Xl.mapValue&&d===Xl.mapValue)return 0;if(c===Xl.mapValue)return 1;if(d===Xl.mapValue)return-1;const g=c.fields||{},y=Object.keys(g),E=d.fields||{},P=Object.keys(E);y.sort(),P.sort();for(let D=0;D<y.length&&D<P.length;++D){const U=Me(y[D],P[D]);if(U!==0)return U;const J=to(g[y[D]],E[P[D]]);if(J!==0)return J}return Me(y.length,P.length)}(i.mapValue,e.mapValue);default:throw Ie()}}function Im(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Me(i,e);const n=Gi(i),s=Gi(e),a=Me(n.seconds,s.seconds);return a!==0?a:Me(n.nanos,s.nanos)}function Sm(i,e){const n=i.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const c=to(n[a],s[a]);if(c)return c}return Me(n.length,s.length)}function no(i){return Uh(i)}function Uh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=Gi(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return eo(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return _e.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",a=!0;for(const c of n.values||[])a?a=!1:s+=",",s+=Uh(c);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let a="{",c=!0;for(const d of s)c?c=!1:a+=",",a+=`${d}:${Uh(n.fields[d])}`;return a+"}"}(i.mapValue):Ie()}function ru(i){switch(Qi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hd(i);return e?16+ru(e):16;case 5:return 2*i.stringValue.length;case 6:return eo(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,c)=>a+ru(c),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return lo(s.fields,(c,d)=>{a+=c.length+ru(d)}),a}(i.mapValue);default:throw Ie()}}function jh(i){return!!i&&"integerValue"in i}function dd(i){return!!i&&"arrayValue"in i}function iu(i){return!!i&&"mapValue"in i}function QE(i){var e,n;return((n=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Kg])===null||n===void 0?void 0:n.stringValue)===qg}function la(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return lo(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=la(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=la(i.arrayValue.values[n]);return e}return Object.assign({},i)}function XE(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===GE}/**
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
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=la(n)}setAll(e){let n=kt.emptyPath(),s={},a=[];e.forEach((d,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=g.popLast()}d?s[g.lastSegment()]=la(d):a.push(g.lastSegment())});const c=this.getFieldsMap(n);this.applyChanges(c,s,a)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];iu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){lo(n,(a,c)=>e[a]=c);for(const a of s)delete e[a]}clone(){return new On(la(this.value))}}function Gg(i){const e=[];return lo(i.fields,(n,s)=>{const a=new kt([n]);if(iu(s)){const c=Gg(s.mapValue).fields;if(c.length===0)e.push(a);else for(const d of c)e.push(a.child(d))}else e.push(a)}),new Vn(e)}/**
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
 */class Dn{constructor(e,n,s,a,c,d,g){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=c,this.data=d,this.documentState=g}static newInvalidDocument(e){return new Dn(e,0,Ge.min(),Ge.min(),Ge.min(),On.empty(),0)}static newFoundDocument(e,n,s,a){return new Dn(e,1,n,Ge.min(),s,a,0)}static newNoDocument(e,n){return new Dn(e,2,n,Ge.min(),Ge.min(),On.empty(),0)}static newUnknownDocument(e,n){return new Dn(e,3,n,Ge.min(),Ge.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gu{constructor(e,n){this.position=e,this.inclusive=n}}function Am(i,e,n){let s=0;for(let a=0;a<i.position.length;a++){const c=e[a],d=i.position[a];if(c.field.isKeyField()?s=_e.comparator(_e.fromName(d.referenceValue),n.key):s=to(d,n.data.field(c.field)),c.dir==="desc"&&(s*=-1),s!==0)break}return s}function km(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Yn(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function YE(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Qg{}class vt extends Qg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ZE(e,n,s):n==="array-contains"?new nw(e,s):n==="in"?new rw(e,s):n==="not-in"?new iw(e,s):n==="array-contains-any"?new sw(e,s):new vt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ew(e,s):new tw(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(to(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(to(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends Qg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new li(e,n)}matches(e){return Xg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Xg(i){return i.op==="and"}function Yg(i){return JE(i)&&Xg(i)}function JE(i){for(const e of i.filters)if(e instanceof li)return!1;return!0}function zh(i){if(i instanceof vt)return i.field.canonicalString()+i.op.toString()+no(i.value);if(Yg(i))return i.filters.map(e=>zh(e)).join(",");{const e=i.filters.map(n=>zh(n)).join(",");return`${i.op}(${e})`}}function Jg(i,e){return i instanceof vt?function(s,a){return a instanceof vt&&s.op===a.op&&s.field.isEqual(a.field)&&Yn(s.value,a.value)}(i,e):i instanceof li?function(s,a){return a instanceof li&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((c,d,g)=>c&&Jg(d,a.filters[g]),!0):!1}(i,e):void Ie()}function Zg(i){return i instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${no(n.value)}`}(i):i instanceof li?function(n){return n.op.toString()+" {"+n.getFilters().map(Zg).join(" ,")+"}"}(i):"Filter"}class ZE extends vt{constructor(e,n,s){super(e,n,s),this.key=_e.fromName(s.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class ew extends vt{constructor(e,n){super(e,"in",n),this.keys=ey("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tw extends vt{constructor(e,n){super(e,"not-in",n),this.keys=ey("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ey(i,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>_e.fromName(s.referenceValue))}class nw extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dd(n)&&ga(n.arrayValue,this.value)}}class rw extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ga(this.value.arrayValue,n)}}class iw extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ga(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ga(this.value.arrayValue,n)}}class sw extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ga(this.value.arrayValue,s))}}/**
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
 */class ow{constructor(e,n=null,s=[],a=[],c=null,d=null,g=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=c,this.startAt=d,this.endAt=g,this.le=null}}function Rm(i,e=null,n=[],s=[],a=null,c=null,d=null){return new ow(i,e,n,s,a,c,d)}function fd(i){const e=ze(i);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>zh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(c){return c.field.canonicalString()+c.dir}(s)).join(","),ud(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>no(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>no(s)).join(",")),e.le=n}return e.le}function pd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!YE(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!Jg(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!km(i.startAt,e.startAt)&&km(i.endAt,e.endAt)}/**
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
 */class Du{constructor(e,n=null,s=[],a=[],c=null,d="F",g=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=c,this.limitType=d,this.startAt=g,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function aw(i,e,n,s,a,c,d,g){return new Du(i,e,n,s,a,c,d,g)}function lw(i){return new Du(i)}function Cm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function uw(i){return i.collectionGroup!==null}function ua(i){const e=ze(i);if(e.he===null){e.he=[];const n=new Set;for(const c of e.explicitOrderBy)e.he.push(c),n.add(c.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(d){let g=new Rt(kt.comparator);return d.filters.forEach(y=>{y.getFlattenedFilters().forEach(E=>{E.isInequality()&&(g=g.add(E.field))})}),g})(e).forEach(c=>{n.has(c.canonicalString())||c.isKeyField()||e.he.push(new yu(c,s))}),n.has(kt.keyField().canonicalString())||e.he.push(new yu(kt.keyField(),s))}return e.he}function $i(i){const e=ze(i);return e.Pe||(e.Pe=cw(e,ua(i))),e.Pe}function cw(i,e){if(i.limitType==="F")return Rm(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const c=a.dir==="desc"?"asc":"desc";return new yu(a.field,c)});const n=i.endAt?new gu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new gu(i.startAt.position,i.startAt.inclusive):null;return Rm(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Bh(i,e,n){return new Du(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function ty(i,e){return pd($i(i),$i(e))&&i.limitType===e.limitType}function ny(i){return`${fd($i(i))}|lt:${i.limitType}`}function oa(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(a=>Zg(a)).join(", ")}]`),ud(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(a=>function(d){return`${d.field.canonicalString()} (${d.dir})`}(a)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(a=>no(a)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(a=>no(a)).join(",")),`Target(${s})`}($i(i))}; limitType=${i.limitType})`}function md(i,e){return e.isFoundDocument()&&function(s,a){const c=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(c):_e.isDocumentKey(s.path)?s.path.isEqual(c):s.path.isImmediateParentOf(c)}(i,e)&&function(s,a){for(const c of ua(s))if(!c.field.isKeyField()&&a.data.field(c.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const c of s.filters)if(!c.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(d,g,y){const E=Am(d,g,y);return d.inclusive?E<=0:E<0}(s.startAt,ua(s),a)||s.endAt&&!function(d,g,y){const E=Am(d,g,y);return d.inclusive?E>=0:E>0}(s.endAt,ua(s),a))}(i,e)}function hw(i){return(e,n)=>{let s=!1;for(const a of ua(i)){const c=dw(a,e,n);if(c!==0)return c;s=s||a.field.isKeyField()}return 0}}function dw(i,e,n){const s=i.field.isKeyField()?_e.comparator(e.key,n.key):function(c,d,g){const y=d.data.field(c),E=g.data.field(c);return y!==null&&E!==null?to(y,E):Ie()}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ie()}}/**
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
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,c]of s)if(this.equalsFn(a,e))return c}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let c=0;c<a.length;c++)if(this.equalsFn(a[c][0],e))return void(a[c]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){lo(this.inner,(n,s)=>{for(const[a,c]of s)e(a,c)})}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
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
 */const fw=new Yt(_e.comparator);function vu(){return fw}const ry=new Yt(_e.comparator);function Yl(...i){let e=ry;for(const n of i)e=e.insert(n.key,n);return e}function iy(i){let e=ry;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ji(){return ca()}function sy(){return ca()}function ca(){return new Yi(i=>i.toString(),(i,e)=>i.isEqual(e))}const pw=new Yt(_e.comparator),mw=new Rt(_e.comparator);function Vt(...i){let e=mw;for(const n of i)e=e.add(n);return e}const gw=new Rt(Me);function yw(){return gw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:du(e)?"-0":e}}function oy(i){return{integerValue:""+i}}function vw(i,e){return BE(e)?oy(e):gd(i,e)}/**
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
 */class Ou{constructor(){this._=void 0}}function _w(i,e,n){return i instanceof _u?function(a,c){const d={fields:{[$g]:{stringValue:Bg},[Wg]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return c&&cd(c)&&(c=hd(c)),c&&(d.fields[Hg]=c),{mapValue:d}}(n,e):i instanceof ya?ly(i,e):i instanceof va?uy(i,e):function(a,c){const d=ay(a,c),g=Pm(d)+Pm(a.Ie);return jh(d)&&jh(a.Ie)?oy(g):gd(a.serializer,g)}(i,e)}function Ew(i,e,n){return i instanceof ya?ly(i,e):i instanceof va?uy(i,e):n}function ay(i,e){return i instanceof Eu?function(s){return jh(s)||function(c){return!!c&&"doubleValue"in c}(s)}(e)?e:{integerValue:0}:null}class _u extends Ou{}class ya extends Ou{constructor(e){super(),this.elements=e}}function ly(i,e){const n=cy(e);for(const s of i.elements)n.some(a=>Yn(a,s))||n.push(s);return{arrayValue:{values:n}}}class va extends Ou{constructor(e){super(),this.elements=e}}function uy(i,e){let n=cy(e);for(const s of i.elements)n=n.filter(a=>!Yn(a,s));return{arrayValue:{values:n}}}class Eu extends Ou{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Pm(i){return At(i.integerValue||i.doubleValue)}function cy(i){return dd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ww(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof ya&&a instanceof ya||s instanceof va&&a instanceof va?Zs(s.elements,a.elements,Yn):s instanceof Eu&&a instanceof Eu?Yn(s.Ie,a.Ie):s instanceof _u&&a instanceof _u}(i.transform,e.transform)}class Tw{constructor(e,n){this.version=e,this.transformResults=n}}class Er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function su(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Vu{}function hy(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new fy(i.key,Er.none()):new Aa(i.key,i.data,Er.none());{const n=i.data,s=On.empty();let a=new Rt(kt.comparator);for(let c of e.fields)if(!a.has(c)){let d=n.field(c);d===null&&c.length>1&&(c=c.popLast(),d=n.field(c)),d===null?s.delete(c):s.set(c,d),a=a.add(c)}return new Ji(i.key,s,new Vn(a.toArray()),Er.none())}}function Iw(i,e,n){i instanceof Aa?function(a,c,d){const g=a.value.clone(),y=xm(a.fieldTransforms,c,d.transformResults);g.setAll(y),c.convertToFoundDocument(d.version,g).setHasCommittedMutations()}(i,e,n):i instanceof Ji?function(a,c,d){if(!su(a.precondition,c))return void c.convertToUnknownDocument(d.version);const g=xm(a.fieldTransforms,c,d.transformResults),y=c.data;y.setAll(dy(a)),y.setAll(g),c.convertToFoundDocument(d.version,y).setHasCommittedMutations()}(i,e,n):function(a,c,d){c.convertToNoDocument(d.version).setHasCommittedMutations()}(0,e,n)}function ha(i,e,n,s){return i instanceof Aa?function(c,d,g,y){if(!su(c.precondition,d))return g;const E=c.value.clone(),P=Dm(c.fieldTransforms,y,d);return E.setAll(P),d.convertToFoundDocument(d.version,E).setHasLocalMutations(),null}(i,e,n,s):i instanceof Ji?function(c,d,g,y){if(!su(c.precondition,d))return g;const E=Dm(c.fieldTransforms,y,d),P=d.data;return P.setAll(dy(c)),P.setAll(E),d.convertToFoundDocument(d.version,P).setHasLocalMutations(),g===null?null:g.unionWith(c.fieldMask.fields).unionWith(c.fieldTransforms.map(D=>D.field))}(i,e,n,s):function(c,d,g){return su(c.precondition,d)?(d.convertToNoDocument(d.version).setHasLocalMutations(),null):g}(i,e,n)}function Sw(i,e){let n=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),c=ay(s.transform,a||null);c!=null&&(n===null&&(n=On.empty()),n.set(s.field,c))}return n||null}function Nm(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Zs(s,a,(c,d)=>ww(c,d))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Aa extends Vu{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ji extends Vu{constructor(e,n,s,a,c=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=c,this.type=1}getFieldMask(){return this.fieldMask}}function dy(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function xm(i,e,n){const s=new Map;Ze(i.length===n.length);for(let a=0;a<n.length;a++){const c=i[a],d=c.transform,g=e.data.field(c.field);s.set(c.field,Ew(d,g,n[a]))}return s}function Dm(i,e,n){const s=new Map;for(const a of i){const c=a.transform,d=n.data.field(a.field);s.set(a.field,_w(c,d,e))}return s}class fy extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aw extends Vu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class kw{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const c=this.mutations[a];c.key.isEqual(e.key)&&Iw(c,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ha(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ha(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=sy();return this.mutations.forEach(a=>{const c=e.get(a.key),d=c.overlayedDocument;let g=this.applyToLocalView(d,c.mutatedFields);g=n.has(a.key)?null:g;const y=hy(d,g);y!==null&&s.set(a.key,y),d.isValidDocument()||d.convertToNoDocument(Ge.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Vt())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,s)=>Nm(n,s))&&Zs(this.baseMutations,e.baseMutations,(n,s)=>Nm(n,s))}}class yd{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){Ze(e.mutations.length===s.length);let a=function(){return pw}();const c=e.mutations;for(let d=0;d<c.length;d++)a=a.insert(c[d].key,s[d].version);return new yd(e,n,s,a)}}/**
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
 */class Rw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var it,Pe;function Cw(i){switch(i){case K.OK:return Ie();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Ie()}}function Pw(i){if(i===void 0)return qi("GRPC error has no .code"),K.UNKNOWN;switch(i){case it.OK:return K.OK;case it.CANCELLED:return K.CANCELLED;case it.UNKNOWN:return K.UNKNOWN;case it.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case it.INTERNAL:return K.INTERNAL;case it.UNAVAILABLE:return K.UNAVAILABLE;case it.UNAUTHENTICATED:return K.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case it.NOT_FOUND:return K.NOT_FOUND;case it.ALREADY_EXISTS:return K.ALREADY_EXISTS;case it.PERMISSION_DENIED:return K.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case it.ABORTED:return K.ABORTED;case it.OUT_OF_RANGE:return K.OUT_OF_RANGE;case it.UNIMPLEMENTED:return K.UNIMPLEMENTED;case it.DATA_LOSS:return K.DATA_LOSS;default:return Ie()}}(Pe=it||(it={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new id([4294967295,4294967295],0);class Nw{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Dw(i,e){return $h(i,e.toTimestamp())}function Qs(i){return Ze(!!i),Ge.fromTimestamp(function(n){const s=Gi(n);return new _t(s.seconds,s.nanos)}(i))}function py(i,e){return Hh(i,e).canonicalString()}function Hh(i,e){const n=function(a){return new Je(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?n:n.child(e)}function Ow(i){const e=Je.fromString(i);return Ze(zw(e)),e}function Wh(i,e){return py(i.databaseId,e.path)}function Vw(i){const e=Ow(i);return e.length===4?Je.emptyPath():Mw(e)}function Lw(i){return new Je(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Mw(i){return Ze(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Om(i,e,n){return{name:Wh(i,e),fields:n.value.mapValue.fields}}function bw(i,e){let n;if(e instanceof Aa)n={update:Om(i,e.key,e.value)};else if(e instanceof fy)n={delete:Wh(i,e.key)};else if(e instanceof Ji)n={update:Om(i,e.key,e.data),updateMask:jw(e.fieldMask)};else{if(!(e instanceof Aw))return Ie();n={verify:Wh(i,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(c,d){const g=d.transform;if(g instanceof _u)return{fieldPath:d.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof ya)return{fieldPath:d.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof va)return{fieldPath:d.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof Eu)return{fieldPath:d.field.canonicalString(),increment:g.Ie};throw Ie()}(0,s))),e.precondition.isNone||(n.currentDocument=function(a,c){return c.updateTime!==void 0?{updateTime:Dw(a,c.updateTime)}:c.exists!==void 0?{exists:c.exists}:Ie()}(i,e.precondition)),n}function Fw(i,e){return i&&i.length>0?(Ze(e!==void 0),i.map(n=>function(a,c){let d=a.updateTime?Qs(a.updateTime):Qs(c);return d.isEqual(Ge.min())&&(d=Qs(c)),new Tw(d,a.transformResults||[])}(n,e))):[]}function Uw(i){let e=Vw(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){Ze(s===1);const P=n.from[0];P.allDescendants?a=P.collectionId:e=e.child(P.collectionId)}let c=[];n.where&&(c=function(D){const U=my(D);return U instanceof li&&Yg(U)?U.getFilters():[U]}(n.where));let d=[];n.orderBy&&(d=function(D){return D.map(U=>function(q){return new yu(Ks(q.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(U))}(n.orderBy));let g=null;n.limit&&(g=function(D){let U;return U=typeof D=="object"?D.value:D,ud(U)?null:U}(n.limit));let y=null;n.startAt&&(y=function(D){const U=!!D.before,J=D.values||[];return new gu(J,U)}(n.startAt));let E=null;return n.endAt&&(E=function(D){const U=!D.before,J=D.values||[];return new gu(J,U)}(n.endAt)),aw(e,a,d,c,g,"F",y,E)}function my(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ks(n.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ks(n.unaryFilter.field);return vt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const c=Ks(n.unaryFilter.field);return vt.create(c,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const d=Ks(n.unaryFilter.field);return vt.create(d,"!=",{nullValue:"NULL_VALUE"});default:return Ie()}}(i):i.fieldFilter!==void 0?function(n){return vt.create(Ks(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ie()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return li.create(n.compositeFilter.filters.map(s=>my(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Ie()}}(n.compositeFilter.op))}(i):Ie()}function Ks(i){return kt.fromServerFormat(i.fieldPath)}function jw(i){const e=[];return i.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Bw{constructor(e){this.Tt=e}}function $w(i){const e=Uw({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class Hw{constructor(){this.Tn=new Ww}addToCollectionParentIndex(e,n){return this.Tn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(ai.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(ai.min())}updateCollectionGroup(e,n,s){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Ww{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new Rt(Je.comparator),c=!a.has(s);return this.index[n]=a.add(s),c}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Rt(Je.comparator)).toArray()}}/**
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
 */const Vm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gy=41943040;class Qt{static withCacheSize(e){return new Qt(e,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Qt.DEFAULT_COLLECTION_PERCENTILE=10,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Qt.DEFAULT=new Qt(gy,Qt.DEFAULT_COLLECTION_PERCENTILE,Qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Qt.DISABLED=new Qt(-1,0,0);/**
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
 */class ro{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ro(0)}static Un(){return new ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="LruGarbageCollector",Kw=1048576;function Mm([i,e],[n,s]){const a=Me(i,n);return a===0?Me(e,s):a}class qw{constructor(e){this.Hn=e,this.buffer=new Rt(Mm),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Mm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Gw{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){se(Lm,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Sa(n)?se(Lm,"Ignoring IndexedDB error during garbage collection: ",n):await od(n)}await this.er(3e5)})}}class Qw{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return B.resolve(ad.ae);const s=new qw(n);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(se("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Vm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(se("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vm):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,a,c,d,g,y,E;const P=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(D=>(D>this.params.maximumSequenceNumbersToCollect?(se("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${D}`),a=this.params.maximumSequenceNumbersToCollect):a=D,d=Date.now(),this.nthSequenceNumber(e,a))).next(D=>(s=D,g=Date.now(),this.removeTargets(e,s,n))).next(D=>(c=D,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(D=>(E=Date.now(),Ws()<=Ae.DEBUG&&se("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${d-P}ms
	Determined least recently used ${a} in `+(g-d)+`ms
	Removed ${c} targets in `+(y-g)+`ms
	Removed ${D} documents in `+(E-y)+`ms
Total Duration: ${E-P}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:c,documentsRemoved:D})))}}function Xw(i,e){return new Qw(i,e)}/**
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
 */class Yw{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?B.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Zw{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(s!==null&&ha(s.mutation,a,Vn.empty(),_t.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Vt()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Vt()){const a=ji();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,s).next(c=>{let d=Yl();return c.forEach((g,y)=>{d=d.insert(g,y.overlayedDocument)}),d}))}getOverlayedDocuments(e,n){const s=ji();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Vt()))}populateOverlays(e,n,s){const a=[];return s.forEach(c=>{n.has(c)||a.push(c)}),this.documentOverlayCache.getOverlays(e,a).next(c=>{c.forEach((d,g)=>{n.set(d,g)})})}computeViews(e,n,s,a){let c=vu();const d=ca(),g=function(){return ca()}();return n.forEach((y,E)=>{const P=s.get(E.key);a.has(E.key)&&(P===void 0||P.mutation instanceof Ji)?c=c.insert(E.key,E):P!==void 0?(d.set(E.key,P.mutation.getFieldMask()),ha(P.mutation,E,P.mutation.getFieldMask(),_t.now())):d.set(E.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,c).next(y=>(y.forEach((E,P)=>d.set(E,P)),n.forEach((E,P)=>{var D;return g.set(E,new Jw(P,(D=d.get(E))!==null&&D!==void 0?D:null))}),g))}recalculateAndSaveOverlays(e,n){const s=ca();let a=new Yt((d,g)=>d-g),c=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(d=>{for(const g of d)g.keys().forEach(y=>{const E=n.get(y);if(E===null)return;let P=s.get(y)||Vn.empty();P=g.applyToLocalView(E,P),s.set(y,P);const D=(a.get(g.batchId)||Vt()).add(y);a=a.insert(g.batchId,D)})}).next(()=>{const d=[],g=a.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),E=y.key,P=y.value,D=sy();P.forEach(U=>{if(!c.has(U)){const J=hy(n.get(U),s.get(U));J!==null&&D.set(U,J),c=c.add(U)}}),d.push(this.documentOverlayCache.saveOverlays(e,E,D))}return B.waitFor(d)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,a){return function(d){return _e.isDocumentKey(d.path)&&d.collectionGroup===null&&d.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next(c=>{const d=a-c.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-c.size):B.resolve(ji());let g=ma,y=c;return d.next(E=>B.forEach(E,(P,D)=>(g<D.largestBatchId&&(g=D.largestBatchId),c.get(P)?B.resolve():this.remoteDocumentCache.getEntry(e,P).next(U=>{y=y.insert(P,U)}))).next(()=>this.populateOverlays(e,E,c)).next(()=>this.computeViews(e,y,E,Vt())).next(P=>({batchId:g,changes:iy(P)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(s=>{let a=Yl();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const c=n.collectionGroup;let d=Yl();return this.indexManager.getCollectionParents(e,c).next(g=>B.forEach(g,y=>{const E=function(D,U){return new Du(U,null,D.explicitOrderBy.slice(),D.filters.slice(),D.limit,D.limitType,D.startAt,D.endAt)}(n,y.child(c));return this.getDocumentsMatchingCollectionQuery(e,E,s,a).next(P=>{P.forEach((D,U)=>{d=d.insert(D,U)})})}).next(()=>d))}getDocumentsMatchingCollectionQuery(e,n,s,a){let c;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(d=>(c=d,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,c,a))).next(d=>{c.forEach((y,E)=>{const P=E.getKey();d.get(P)===null&&(d=d.insert(P,Dn.newInvalidDocument(P)))});let g=Yl();return d.forEach((y,E)=>{const P=c.get(y);P!==void 0&&ha(P.mutation,E,Vn.empty(),_t.now()),md(n,E)&&(g=g.insert(y,E))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return B.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:Qs(a.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(a){return{name:a.name,query:$w(a.bundledQuery),readTime:Qs(a.readTime)}}(n)),B.resolve()}}/**
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
 */class tT{constructor(){this.overlays=new Yt(_e.comparator),this.Rr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ji();return B.forEach(n,a=>this.getOverlay(e,a).next(c=>{c!==null&&s.set(a,c)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((a,c)=>{this.Et(e,n,c)}),B.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(c=>this.overlays=this.overlays.remove(c)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,n,s){const a=ji(),c=n.length+1,d=new _e(n.child("")),g=this.overlays.getIteratorFrom(d);for(;g.hasNext();){const y=g.getNext().value,E=y.getKey();if(!n.isPrefixOf(E.path))break;E.path.length===c&&y.largestBatchId>s&&a.set(y.getKey(),y)}return B.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let c=new Yt((E,P)=>E-P);const d=this.overlays.getIterator();for(;d.hasNext();){const E=d.getNext().value;if(E.getKey().getCollectionGroup()===n&&E.largestBatchId>s){let P=c.get(E.largestBatchId);P===null&&(P=ji(),c=c.insert(E.largestBatchId,P)),P.set(E.getKey(),E)}}const g=ji(),y=c.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((E,P)=>g.set(E,P)),!(g.size()>=a)););return B.resolve(g)}Et(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const d=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,d)}this.overlays=this.overlays.insert(s.key,new Rw(n,s));let c=this.Rr.get(n);c===void 0&&(c=Vt(),this.Rr.set(n,c)),this.Rr.set(n,c.add(s.key))}}/**
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
 */class nT{constructor(){this.sessionToken=Xn.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class vd{constructor(){this.Vr=new Rt(yt.mr),this.gr=new Rt(yt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new yt(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new yt(e,n))}br(e,n){e.forEach(s=>this.removeReference(s,n))}Sr(e){const n=new _e(new Je([])),s=new yt(n,e),a=new yt(n,e+1),c=[];return this.gr.forEachInRange([s,a],d=>{this.wr(d),c.push(d.key)}),c}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new _e(new Je([])),s=new yt(n,e),a=new yt(n,e+1);let c=Vt();return this.gr.forEachInRange([s,a],d=>{c=c.add(d.key)}),c}containsKey(e){const n=new yt(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class yt{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return _e.comparator(e.key,n.key)||Me(e.Cr,n.Cr)}static pr(e,n){return Me(e.Cr,n.Cr)||_e.comparator(e.key,n.key)}}/**
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
 */class rT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Rt(yt.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const c=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const d=new kw(c,n,s,a);this.mutationQueue.push(d);for(const g of a)this.Mr=this.Mr.add(new yt(g.key,c)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return B.resolve(d)}lookupMutationBatch(e,n){return B.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Nr(s),c=a<0?0:a;return B.resolve(this.mutationQueue.length>c?this.mutationQueue[c]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?ld:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new yt(n,0),a=new yt(n,Number.POSITIVE_INFINITY),c=[];return this.Mr.forEachInRange([s,a],d=>{const g=this.Or(d.Cr);c.push(g)}),B.resolve(c)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Rt(Me);return n.forEach(a=>{const c=new yt(a,0),d=new yt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([c,d],g=>{s=s.add(g.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let c=s;_e.isDocumentKey(c)||(c=c.child(""));const d=new yt(new _e(c),0);let g=new Rt(Me);return this.Mr.forEachWhile(y=>{const E=y.key.path;return!!s.isPrefixOf(E)&&(E.length===a&&(g=g.add(y.Cr)),!0)},d),B.resolve(this.Br(g))}Br(e){const n=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){Ze(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(n.mutations,a=>{const c=new yt(a.key,n.batchId);return s=s.delete(c),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new yt(n,0),a=this.Mr.firstAfterOrEqual(s);return B.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class iT{constructor(e){this.kr=e,this.docs=function(){return new Yt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),c=a?a.size:0,d=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:d}),this.size+=d-c,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return B.resolve(s?s.document.mutableCopy():Dn.newInvalidDocument(n))}getEntries(e,n){let s=vu();return n.forEach(a=>{const c=this.docs.get(a);s=s.insert(a,c?c.document.mutableCopy():Dn.newInvalidDocument(a))}),B.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let c=vu();const d=n.path,g=new _e(d.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:E,value:{document:P}}=y.getNext();if(!d.isPrefixOf(E.path))break;E.path.length>d.length+1||FE(bE(P),s)<=0||(a.has(P.key)||md(n,P))&&(c=c.insert(P.key,P.mutableCopy()))}return B.resolve(c)}getAllFromCollectionGroup(e,n,s,a){Ie()}qr(e,n){return B.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sT(this)}getSize(e){return B.resolve(this.size)}}class sT extends Yw{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?n.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),B.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class oT{constructor(e){this.persistence=e,this.Qr=new Yi(n=>fd(n),pd),this.lastRemoteSnapshotVersion=Ge.min(),this.highestTargetId=0,this.$r=0,this.Kr=new vd,this.targetCount=0,this.Ur=ro.Kn()}forEachTarget(e,n){return this.Qr.forEach((s,a)=>n(a)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),B.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ur=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.zn(n),B.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Kr.Sr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,s){let a=0;const c=[];return this.Qr.forEach((d,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.Qr.delete(d),c.push(this.removeMatchingKeysForTargetId(e,g.targetId)),a++)}),B.waitFor(c).next(()=>a)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return B.resolve(s)}addMatchingKeys(e,n,s){return this.Kr.yr(n,s),B.resolve()}removeMatchingKeys(e,n,s){this.Kr.br(n,s);const a=this.persistence.referenceDelegate,c=[];return a&&n.forEach(d=>{c.push(a.markPotentiallyOrphaned(e,d))}),B.waitFor(c)}removeMatchingKeysForTargetId(e,n){return this.Kr.Sr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Kr.vr(n);return B.resolve(s)}containsKey(e,n){return B.resolve(this.Kr.containsKey(n))}}/**
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
 */class yy{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ad(0),this.zr=!1,this.zr=!0,this.jr=new nT,this.referenceDelegate=e(this),this.Hr=new oT(this),this.indexManager=new Hw,this.remoteDocumentCache=function(a){return new iT(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Bw(n),this.Yr=new eT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new rT(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){se("MemoryPersistence","Starting transaction:",e);const a=new aT(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(c=>this.referenceDelegate.Xr(a).next(()=>c)).toPromise().then(c=>(a.raiseOnCommittedEvent(),c))}ei(e,n){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class aT extends jE{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.ti=new vd,this.ni=null}static ri(e){return new _d(e)}get ii(){if(this.ni)return this.ni;throw Ie()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),B.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),B.resolve()}removeTarget(e,n){this.ti.Sr(n.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(c=>this.ii.add(c.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const a=_e.fromPath(s);return this.si(e,a).next(c=>{c||n.removeEntry(a,Ge.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return B.or([()=>B.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class wu{constructor(e,n){this.persistence=e,this.oi=new Yi(s=>$E(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=Xw(this,n)}static ri(e,n){return new wu(e,n)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(a=>s+a))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return B.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(c=>c?B.resolve():n(a)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),c=a.newChangeBuffer();return a.qr(e,d=>this.ar(e,d,n).next(g=>{g||(s++,c.removeEntry(d,Ge.min()))})).next(()=>c.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),B.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ru(e.data.value)),n}ar(e,n,s){return B.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.oi.get(n);return B.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ed{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=a}static Yi(e,n){let s=Vt(),a=Vt();for(const c of n.docChanges)switch(c.type){case 0:s=s.add(c.doc.key);break;case 1:a=a.add(c.doc.key)}return new Ed(e,n.fromCache,s,a)}}/**
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
 */class lT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uT{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return i0()?8:zE(Lt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,a){const c={result:null};return this.rs(e,n).next(d=>{c.result=d}).next(()=>{if(!c.result)return this.ss(e,n,a,s).next(d=>{c.result=d})}).next(()=>{if(c.result)return;const d=new lT;return this._s(e,n,d).next(g=>{if(c.result=g,this.Xi)return this.us(e,n,d,g.size)})}).next(()=>c.result)}us(e,n,s,a){return s.documentReadCount<this.es?(Ws()<=Ae.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",oa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Ws()<=Ae.DEBUG&&se("QueryEngine","Query:",oa(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(Ws()<=Ae.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",oa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$i(n))):B.resolve())}rs(e,n){if(Cm(n))return B.resolve(null);let s=$i(n);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Bh(n,null,"F"),s=$i(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(c=>{const d=Vt(...c);return this.ns.getDocuments(e,d).next(g=>this.indexManager.getMinOffset(e,s).next(y=>{const E=this.cs(n,g);return this.ls(n,E,d,y.readTime)?this.rs(e,Bh(n,null,"F")):this.hs(e,E,n,y)}))})))}ss(e,n,s,a){return Cm(n)||a.isEqual(Ge.min())?B.resolve(null):this.ns.getDocuments(e,s).next(c=>{const d=this.cs(n,c);return this.ls(n,d,s,a)?B.resolve(null):(Ws()<=Ae.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),oa(n)),this.hs(e,d,n,ME(a,ma)).next(g=>g))})}cs(e,n){let s=new Rt(hw(e));return n.forEach((a,c)=>{md(e,c)&&(s=s.add(c))}),s}ls(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const c=e.limitType==="F"?n.last():n.first();return!!c&&(c.hasPendingWrites||c.version.compareTo(a)>0)}_s(e,n,s){return Ws()<=Ae.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",oa(n)),this.ns.getDocumentsMatchingQuery(e,n,ai.min(),s)}hs(e,n,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(c=>(n.forEach(d=>{c=c.insert(d.key,d)}),c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="LocalStore";class hT{constructor(e,n,s,a){this.persistence=e,this.Ps=n,this.serializer=a,this.Ts=new Yt(Me),this.Is=new Yi(c=>fd(c),pd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zw(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function dT(i,e,n,s){return new hT(i,e,n,s)}async function vy(i,e){const n=ze(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next(c=>(a=c,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(c=>{const d=[],g=[];let y=Vt();for(const E of a){d.push(E.batchId);for(const P of E.mutations)y=y.add(P.key)}for(const E of c){g.push(E.batchId);for(const P of E.mutations)y=y.add(P.key)}return n.localDocuments.getDocuments(s,y).next(E=>({Rs:E,removedBatchIds:d,addedBatchIds:g}))})})}function fT(i,e){const n=ze(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),c=n.ds.newChangeBuffer({trackRemovals:!0});return function(g,y,E,P){const D=E.batch,U=D.keys();let J=B.resolve();return U.forEach(q=>{J=J.next(()=>P.getEntry(y,q)).next(Z=>{const Y=E.docVersions.get(q);Ze(Y!==null),Z.version.compareTo(Y)<0&&(D.applyToRemoteDocument(Z,E),Z.isValidDocument()&&(Z.setReadTime(E.commitVersion),P.addEntry(Z)))})}),J.next(()=>g.mutationQueue.removeMutationBatch(y,D))}(n,s,e,c).next(()=>c.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let y=Vt();for(let E=0;E<g.mutationResults.length;++E)g.mutationResults[E].transformResults.length>0&&(y=y.add(g.batch.mutations[E].key));return y}(e))).next(()=>n.localDocuments.getDocuments(s,a))})}function pT(i){const e=ze(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function mT(i,e){const n=ze(i);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=ld),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class bm{constructor(){this.activeTargetIds=yw()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gT{constructor(){this.ho=new bm,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new bm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yT{To(e){}shutdown(){}}/**
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
 */const Fm="ConnectivityMonitor";class Um{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){se(Fm,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){se(Fm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jl=null;function Kh(){return Jl===null?Jl=function(){return 268435456+Math.round(2147483648*Math.random())}():Jl++,"0x"+Jl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="RestConnection",vT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _T{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===pu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}bo(e,n,s,a,c){const d=Kh(),g=this.So(e,n.toUriEncodedString());se(Ah,`Sending RPC '${e}' ${d}:`,g,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,a,c),this.vo(e,g,y,s).then(E=>(se(Ah,`Received RPC '${e}' ${d}: `,E),E),E=>{throw xu(Ah,`RPC '${e}' ${d} failed with error: `,E,"url: ",g,"request:",s),E})}Co(e,n,s,a,c,d){return this.bo(e,n,s,a,c)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,c)=>e[c]=a),s&&s.headers.forEach((a,c)=>e[c]=a)}So(e,n){const s=vT[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class ET{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Dt="WebChannelConnection";class wT extends _T{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,a){const c=Kh();return new Promise((d,g)=>{const y=new Og;y.setWithCredentials(!0),y.listenOnce(Vg.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case nu.NO_ERROR:const P=y.getResponseJson();se(Dt,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(P)),d(P);break;case nu.TIMEOUT:se(Dt,`RPC '${e}' ${c} timed out`),g(new he(K.DEADLINE_EXCEEDED,"Request time out"));break;case nu.HTTP_ERROR:const D=y.getStatus();if(se(Dt,`RPC '${e}' ${c} failed with status:`,D,"response text:",y.getResponseText()),D>0){let U=y.getResponseJson();Array.isArray(U)&&(U=U[0]);const J=U==null?void 0:U.error;if(J&&J.status&&J.message){const q=function(Y){const Ee=Y.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(Ee)>=0?Ee:K.UNKNOWN}(J.status);g(new he(q,J.message))}else g(new he(K.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new he(K.UNAVAILABLE,"Connection failed."));break;default:Ie()}}finally{se(Dt,`RPC '${e}' ${c} completed.`)}});const E=JSON.stringify(a);se(Dt,`RPC '${e}' ${c} sending request:`,a),y.send(n,"POST",E,s,15)})}Wo(e,n,s){const a=Kh(),c=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],d=bg(),g=Mg(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},E=this.longPollingOptions.timeoutSeconds;E!==void 0&&(y.longPollingTimeout=Math.round(1e3*E)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const P=c.join("");se(Dt,`Creating RPC '${e}' stream ${a}: ${P}`,y);const D=d.createWebChannel(P,y);let U=!1,J=!1;const q=new ET({Fo:Y=>{J?se(Dt,`Not sending because RPC '${e}' stream ${a} is closed:`,Y):(U||(se(Dt,`Opening RPC '${e}' stream ${a} transport.`),D.open(),U=!0),se(Dt,`RPC '${e}' stream ${a} sending:`,Y),D.send(Y))},Mo:()=>D.close()}),Z=(Y,Ee,me)=>{Y.listen(Ee,ge=>{try{me(ge)}catch(we){setTimeout(()=>{throw we},0)}})};return Z(D,aa.EventType.OPEN,()=>{J||(se(Dt,`RPC '${e}' stream ${a} transport opened.`),q.Qo())}),Z(D,aa.EventType.CLOSE,()=>{J||(J=!0,se(Dt,`RPC '${e}' stream ${a} transport closed`),q.Ko())}),Z(D,aa.EventType.ERROR,Y=>{J||(J=!0,xu(Dt,`RPC '${e}' stream ${a} transport errored:`,Y),q.Ko(new he(K.UNAVAILABLE,"The operation could not be completed")))}),Z(D,aa.EventType.MESSAGE,Y=>{var Ee;if(!J){const me=Y.data[0];Ze(!!me);const ge=me,we=(ge==null?void 0:ge.error)||((Ee=ge[0])===null||Ee===void 0?void 0:Ee.error);if(we){se(Dt,`RPC '${e}' stream ${a} received error:`,we);const He=we.status;let Se=function(A){const C=it[A];if(C!==void 0)return Pw(C)}(He),x=we.message;Se===void 0&&(Se=K.INTERNAL,x="Unknown error status: "+He+" with message "+we.message),J=!0,q.Ko(new he(Se,x)),D.close()}else se(Dt,`RPC '${e}' stream ${a} received:`,me),q.Uo(me)}}),Z(g,Lg.STAT_EVENT,Y=>{Y.stat===bh.PROXY?se(Dt,`RPC '${e}' stream ${a} detected buffering proxy`):Y.stat===bh.NOPROXY&&se(Dt,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{q.$o()},0),q}}function kh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(i){return new Nw(i,!0)}/**
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
 */class _y{constructor(e,n,s=1e3,a=1.5,c=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=a,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,n-s);a>0&&se("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const jm="PersistentStream";class TT{constructor(e,n,s,a,c,d,g,y){this.Ti=e,this.n_=s,this.r_=a,this.connection=c,this.authCredentialsProvider=d,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new _y(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===K.RESOURCE_EXHAUSTED?(qi(n.toString()),qi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===n&&this.V_(s,a)},s=>{e(()=>{const a=new he(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return se(jm,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(se(jm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IT extends TT{constructor(e,n,s,a,c,d){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,d),this.serializer=c}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ze(!!e.streamToken),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=Fw(e.writeResults,e.commitTime),s=Qs(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=Lw(this.serializer),this.I_(e)}S_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>bw(this.serializer,s))};this.I_(n)}}/**
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
 */class ST{}class AT extends ST{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,n,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.bo(e,Hh(n,s),a,c,d)).catch(c=>{throw c.name==="FirebaseError"?(c.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(K.UNKNOWN,c.toString())})}Co(e,n,s,a,c){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([d,g])=>this.connection.Co(e,Hh(n,s),a,d,g,c)).catch(d=>{throw d.name==="FirebaseError"?(d.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),d):new he(K.UNKNOWN,d.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class kT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(qi(n),this.N_=!1):se("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ka="RemoteStore";class RT{constructor(e,n,s,a,c){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=c,this.z_.To(d=>{s.enqueueAndForget(async()=>{Ca(this)&&(se(ka,"Restarting streams for network reachability change."),await async function(y){const E=ze(y);E.W_.add(4),await Ra(E),E.j_.set("Unknown"),E.W_.delete(4),await Mu(E)}(this))})}),this.j_=new kT(s,a)}}async function Mu(i){if(Ca(i))for(const e of i.G_)await e(!0)}async function Ra(i){for(const e of i.G_)await e(!1)}function Ca(i){return ze(i).W_.size===0}async function Ey(i,e,n){if(!Sa(e))throw e;i.W_.add(1),await Ra(i),i.j_.set("Offline"),n||(n=()=>pT(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{se(ka,"Retrying IndexedDB access"),await n(),i.W_.delete(1),await Mu(i)})}function wy(i,e){return e().catch(n=>Ey(i,n,e))}async function bu(i){const e=ze(i),n=ui(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:ld;for(;CT(e);)try{const a=await mT(e.localStore,s);if(a===null){e.K_.length===0&&n.P_();break}s=a.batchId,PT(e,a)}catch(a){await Ey(e,a)}Ty(e)&&Iy(e)}function CT(i){return Ca(i)&&i.K_.length<10}function PT(i,e){i.K_.push(e);const n=ui(i);n.c_()&&n.b_&&n.S_(e.mutations)}function Ty(i){return Ca(i)&&!ui(i).u_()&&i.K_.length>0}function Iy(i){ui(i).start()}async function NT(i){ui(i).C_()}async function xT(i){const e=ui(i);for(const n of i.K_)e.S_(n.mutations)}async function DT(i,e,n){const s=i.K_.shift(),a=yd.from(s,e,n);await wy(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await bu(i)}async function OT(i,e){e&&ui(i).b_&&await async function(s,a){if(function(d){return Cw(d)&&d!==K.ABORTED}(a.code)){const c=s.K_.shift();ui(s).h_(),await wy(s,()=>s.remoteSyncer.rejectFailedWrite(c.batchId,a)),await bu(s)}}(i,e),Ty(i)&&Iy(i)}async function zm(i,e){const n=ze(i);n.asyncQueue.verifyOperationInProgress(),se(ka,"RemoteStore received new credentials");const s=Ca(n);n.W_.add(3),await Ra(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await Mu(n)}async function VT(i,e){const n=ze(i);e?(n.W_.delete(2),await Mu(n)):e||(n.W_.add(2),await Ra(n),n.j_.set("Unknown"))}function ui(i){return i.Y_||(i.Y_=function(n,s,a){const c=ze(n);return c.M_(),new IT(s,c.connection,c.authCredentials,c.appCheckCredentials,c.serializer,a)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:NT.bind(null,i),Lo:OT.bind(null,i),D_:xT.bind(null,i),v_:DT.bind(null,i)}),i.G_.push(async e=>{e?(i.Y_.h_(),await bu(i)):(await i.Y_.stop(),i.K_.length>0&&(se(ka,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
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
 */class wd{constructor(e,n,s,a,c){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=c,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,c){const d=Date.now()+s,g=new wd(e,n,d,a,c);return g.start(s),g}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sy(i,e){if(qi("AsyncQueue",`${e}: ${i}`),Sa(i))return new he(K.UNAVAILABLE,`${e}: ${i}`);throw i}class LT{constructor(){this.queries=Bm(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const a=ze(n),c=a.queries;a.queries=Bm(),c.forEach((d,g)=>{for(const y of g.ta)y.onError(s)})})(this,new he(K.ABORTED,"Firestore shutting down"))}}function Bm(){return new Yi(i=>ny(i),ty)}function MT(i){i.ia.forEach(e=>{e.next()})}var $m,Hm;(Hm=$m||($m={}))._a="default",Hm.Cache="cache";const bT="SyncEngine";class FT{constructor(e,n,s,a,c,d){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=c,this.maxConcurrentLimboResolutions=d,this.La={},this.ka=new Yi(g=>ny(g),ty),this.qa=new Map,this.Qa=new Set,this.$a=new Yt(_e.comparator),this.Ka=new Map,this.Ua=new vd,this.Wa={},this.Ga=new Map,this.za=ro.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function UT(i,e,n){const s=$T(i);try{const a=await function(d,g){const y=ze(d),E=_t.now(),P=g.reduce((J,q)=>J.add(q.key),Vt());let D,U;return y.persistence.runTransaction("Locally write mutations","readwrite",J=>{let q=vu(),Z=Vt();return y.ds.getEntries(J,P).next(Y=>{q=Y,q.forEach((Ee,me)=>{me.isValidDocument()||(Z=Z.add(Ee))})}).next(()=>y.localDocuments.getOverlayedDocuments(J,q)).next(Y=>{D=Y;const Ee=[];for(const me of g){const ge=Sw(me,D.get(me.key).overlayedDocument);ge!=null&&Ee.push(new Ji(me.key,ge,Gg(ge.value.mapValue),Er.exists(!0)))}return y.mutationQueue.addMutationBatch(J,E,Ee,g)}).next(Y=>{U=Y;const Ee=Y.applyToLocalDocumentSet(D,Z);return y.documentOverlayCache.saveOverlays(J,Y.batchId,Ee)})}).then(()=>({batchId:U.batchId,changes:iy(D)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(d,g,y){let E=d.Wa[d.currentUser.toKey()];E||(E=new Yt(Me)),E=E.insert(g,y),d.Wa[d.currentUser.toKey()]=E}(s,a.batchId,n),await Fu(s,a.changes),await bu(s.remoteStore)}catch(a){const c=Sy(a,"Failed to persist write");n.reject(c)}}function Wm(i,e,n){const s=ze(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.ka.forEach((c,d)=>{const g=d.view.sa(e);g.snapshot&&a.push(g.snapshot)}),function(d,g){const y=ze(d);y.onlineState=g;let E=!1;y.queries.forEach((P,D)=>{for(const U of D.ta)U.sa(g)&&(E=!0)}),E&&MT(y)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jT(i,e){const n=ze(i),s=e.batch.batchId;try{const a=await fT(n.localStore,e);ky(n,s,null),Ay(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fu(n,a)}catch(a){await od(a)}}async function zT(i,e,n){const s=ze(i);try{const a=await function(d,g){const y=ze(d);return y.persistence.runTransaction("Reject batch","readwrite-primary",E=>{let P;return y.mutationQueue.lookupMutationBatch(E,g).next(D=>(Ze(D!==null),P=D.keys(),y.mutationQueue.removeMutationBatch(E,D))).next(()=>y.mutationQueue.performConsistencyCheck(E)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(E,P,g)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(E,P)).next(()=>y.localDocuments.getDocuments(E,P))})}(s.localStore,e);ky(s,e,n),Ay(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Fu(s,a)}catch(a){await od(a)}}function Ay(i,e){(i.Ga.get(e)||[]).forEach(n=>{n.resolve()}),i.Ga.delete(e)}function ky(i,e,n){const s=ze(i);let a=s.Wa[s.currentUser.toKey()];if(a){const c=a.get(e);c&&(n?c.reject(n):c.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}async function Fu(i,e,n){const s=ze(i),a=[],c=[],d=[];s.ka.isEmpty()||(s.ka.forEach((g,y)=>{d.push(s.Ha(y,e,n).then(E=>{var P;if((E||n)&&s.isPrimaryClient){const D=E?!E.fromCache:(P=void 0)===null||P===void 0?void 0:P.current;s.sharedClientState.updateQueryState(y.targetId,D?"current":"not-current")}if(E){a.push(E);const D=Ed.Yi(y.targetId,E);c.push(D)}}))}),await Promise.all(d),s.La.p_(a),await async function(y,E){const P=ze(y);try{await P.persistence.runTransaction("notifyLocalViewChanges","readwrite",D=>B.forEach(E,U=>B.forEach(U.Hi,J=>P.persistence.referenceDelegate.addReference(D,U.targetId,J)).next(()=>B.forEach(U.Ji,J=>P.persistence.referenceDelegate.removeReference(D,U.targetId,J)))))}catch(D){if(!Sa(D))throw D;se(cT,"Failed to update sequence numbers: "+D)}for(const D of E){const U=D.targetId;if(!D.fromCache){const J=P.Ts.get(U),q=J.snapshotVersion,Z=J.withLastLimboFreeSnapshotVersion(q);P.Ts=P.Ts.insert(U,Z)}}}(s.localStore,c))}async function BT(i,e){const n=ze(i);if(!n.currentUser.isEqual(e)){se(bT,"User change. New user:",e.toKey());const s=await vy(n.localStore,e);n.currentUser=e,function(c,d){c.Ga.forEach(g=>{g.forEach(y=>{y.reject(new he(K.CANCELLED,d))})}),c.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Fu(n,s.Rs)}}function $T(i){const e=ze(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zT.bind(null,e),e}class Tu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lu(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return dT(this.persistence,new uT,e.initialUser,this.serializer)}Xa(e){return new yy(_d.ri,this.serializer)}Za(e){return new gT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tu.provider={build:()=>new Tu};class HT extends Tu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ze(this.persistence.referenceDelegate instanceof wu);const s=this.persistence.referenceDelegate.garbageCollector;return new Gw(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Qt.withCacheSize(this.cacheSizeBytes):Qt.DEFAULT;return new yy(s=>wu.ri(s,n),this.serializer)}}class qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BT.bind(null,this.syncEngine),await VT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LT}()}createDatastore(e){const n=Lu(e.databaseInfo.databaseId),s=function(c){return new wT(c)}(e.databaseInfo);return function(c,d,g,y){return new AT(c,d,g,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,a,c,d,g){return new RT(s,a,c,d,g)}(this.localStore,this.datastore,e.asyncQueue,n=>Wm(this.syncEngine,n,0),function(){return Um.D()?new Um:new yT}())}createSyncEngine(e,n){return function(a,c,d,g,y,E,P){const D=new FT(a,c,d,g,y,E);return P&&(D.ja=!0),D}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const c=ze(a);se(ka,"RemoteStore shutting down."),c.W_.add(5),await Ra(c),c.z_.shutdown(),c.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qh.provider={build:()=>new qh};/**
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
 */const ci="FirestoreClient";class WT{constructor(e,n,s,a,c){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=Ot.UNAUTHENTICATED,this.clientId=Ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=c,this.authCredentials.start(s,async d=>{se(ci,"Received user=",d.uid),await this.authCredentialListener(d),this.user=d}),this.appCheckCredentials.start(s,d=>(se(ci,"Received new app check token=",d),this.appCheckCredentialListener(d,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sy(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Rh(i,e){i.asyncQueue.verifyOperationInProgress(),se(ci,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await vy(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Km(i,e){i.asyncQueue.verifyOperationInProgress();const n=await KT(i);se(ci,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>zm(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>zm(e.remoteStore,a)),i._onlineComponents=e}async function KT(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){se(ci,"Using user provided OfflineComponentProvider");try{await Rh(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===K.FAILED_PRECONDITION||a.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;xu("Error using user provided cache. Falling back to memory cache: "+n),await Rh(i,new Tu)}}else se(ci,"Using default OfflineComponentProvider"),await Rh(i,new HT(void 0));return i._offlineComponents}async function qT(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(se(ci,"Using user provided OnlineComponentProvider"),await Km(i,i._uninitializedComponentsProvider._online)):(se(ci,"Using default OnlineComponentProvider"),await Km(i,new qh))),i._onlineComponents}function GT(i){return qT(i).then(e=>e.syncEngine)}/**
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
 */function Ry(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=new Map;/**
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
 */function Cy(i,e,n){if(!n)throw new he(K.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function QT(i,e,n,s){if(e===!0&&s===!0)throw new he(K.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Gm(i){if(!_e.isDocumentKey(i))throw new he(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Qm(i){if(_e.isDocumentKey(i))throw new he(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Td(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ie()}function Py(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Td(i);throw new he(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="firestore.googleapis.com",Xm=!0;class Ym{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new he(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ny,this.ssl=Xm}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Xm;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Kw)throw new he(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ry((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new he(K.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uu{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ym({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ym(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new CE;switch(s.type){case"firstParty":return new DE(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=qm.get(n);s&&(se("ComponentProvider","Removing Datastore"),qm.delete(n),s.terminate())}(this),Promise.resolve()}}function XT(i,e,n,s={}){var a;const c=(i=Py(i,Uu))._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${n}`;c.host!==Ny&&c.host!==g&&xu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},c),{host:g,ssl:!1,emulatorOptions:s});if(!Wi(y,d)&&(i._setSettings(y),s.mockUserToken)){let E,P;if(typeof s.mockUserToken=="string")E=s.mockUserToken,P=Ot.MOCK_USER;else{E=Y_(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new he(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");P=new Ot(D)}i._authCredentials=new PE(new Fg(E,P))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Id(this.firestore,e,this._query)}}class wr{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wr(this.firestore,e,this._key)}}class si extends Id{constructor(e,n,s){super(e,n,lw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wr(this.firestore,null,new _e(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function YT(i,e,...n){if(i=gn(i),Cy("collection","path",e),i instanceof Uu){const s=Je.fromString(e,...n);return Qm(s),new si(i,null,s)}{if(!(i instanceof wr||i instanceof si))throw new he(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...n));return Qm(s),new si(i.firestore,null,s)}}function JT(i,e,...n){if(i=gn(i),arguments.length===1&&(e=Ug.newId()),Cy("doc","path",e),i instanceof Uu){const s=Je.fromString(e,...n);return Gm(s),new wr(i,null,new _e(s))}{if(!(i instanceof wr||i instanceof si))throw new he(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Je.fromString(e,...n));return Gm(s),new wr(i.firestore,i instanceof si?i.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="AsyncQueue";class Zm{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new _y(this,"async_queue_retry"),this.bu=()=>{const s=kh();s&&se(Jm,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const n=kh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Bi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Sa(e))throw e;se(Jm,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(d){let g=d.message||"";return d.stack&&(g=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),g}(s);throw qi("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.Su=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const a=wd.createAndSchedule(this,e,n,s,c=>this.Fu(c));return this.fu.push(a),a}Du(){this.gu&&Ie()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class xy extends Uu{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new Zm,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zm(e),this._firestoreClient=void 0,await e}}}function ZT(i,e){const n=typeof i=="object"?i:rd(),s=typeof i=="string"?i:pu,a=Ia(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const c=X_("firestore");c&&XT(a,...c)}return a}function eI(i){if(i._terminated)throw new he(K.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||tI(i),i._firestoreClient}function tI(i){var e,n,s;const a=i._freezeSettings(),c=function(g,y,E,P){return new qE(g,y,E,P.host,P.ssl,P.experimentalForceLongPolling,P.experimentalAutoDetectLongPolling,Ry(P.experimentalLongPollingOptions),P.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new WT(i._authCredentials,i._appCheckCredentials,i._queue,c,i._componentsProvider&&function(g){const y=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(y),_online:y}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _a(Xn.fromBase64String(e))}catch(n){throw new he(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _a(Xn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this._methodName=e}}/**
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
 */class Vy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class Ly{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==a[c])return!1;return!0}(this._values,e._values)}}/**
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
 */const nI=/^__.*__$/;class rI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}function My(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie()}}class Sd{constructor(e,n,s,a,c,d){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,c===void 0&&this.Bu(),this.fieldTransforms=c||[],this.fieldMask=d||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Sd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Ku(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Iu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(My(this.Lu)&&nI.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class iI{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Lu(e)}ju(e,n,s,a=!1){return new Sd({Lu:e,methodName:n,zu:s,path:kt.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sI(i){const e=i._freezeSettings(),n=Lu(i._databaseId);return new iI(i._databaseId,!!e.ignoreUndefinedProperties,n)}function oI(i,e,n,s,a,c={}){const d=i.ju(c.merge||c.mergeFields?2:0,e,n,a);jy("Data must be an object, but it was:",d,s);const g=Fy(s,d);let y,E;if(c.merge)y=new Vn(d.fieldMask),E=d.fieldTransforms;else if(c.mergeFields){const P=[];for(const D of c.mergeFields){const U=aI(e,D,n);if(!d.contains(U))throw new he(K.INVALID_ARGUMENT,`Field '${U}' is specified in your field mask but missing from your input data.`);cI(P,U)||P.push(U)}y=new Vn(P),E=d.fieldTransforms.filter(D=>y.covers(D.field))}else y=null,E=d.fieldTransforms;return new rI(new On(g),y,E)}function by(i,e){if(Uy(i=gn(i)))return jy("Unsupported field value:",e,i),Fy(i,e);if(i instanceof Oy)return function(s,a){if(!My(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const c=s._toFieldTransform(a);c&&a.fieldTransforms.push(c)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const c=[];let d=0;for(const g of s){let y=by(g,a.Uu(d));y==null&&(y={nullValue:"NULL_VALUE"}),c.push(y),d++}return{arrayValue:{values:c}}}(i,e)}return function(s,a){if((s=gn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vw(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const c=_t.fromDate(s);return{timestampValue:$h(a.serializer,c)}}if(s instanceof _t){const c=new _t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:$h(a.serializer,c)}}if(s instanceof Vy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _a)return{bytesValue:xw(a.serializer,s._byteString)};if(s instanceof wr){const c=a.databaseId,d=s.firestore._databaseId;if(!d.isEqual(c))throw a.Wu(`Document reference is for database ${d.projectId}/${d.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:py(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Ly)return function(d,g){return{mapValue:{fields:{[Kg]:{stringValue:qg},[Fh]:{arrayValue:{values:d.toArray().map(E=>{if(typeof E!="number")throw g.Wu("VectorValues must only contain numeric values.");return gd(g.serializer,E)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${Td(s)}`)}(i,e)}function Fy(i,e){const n={};return zg(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):lo(i,(s,a)=>{const c=by(a,e.qu(s));c!=null&&(n[s]=c)}),{mapValue:{fields:n}}}function Uy(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof _t||i instanceof Vy||i instanceof _a||i instanceof wr||i instanceof Oy||i instanceof Ly)}function jy(i,e,n){if(!Uy(n)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(n)){const s=Td(n);throw s==="an object"?e.Wu(i+" a custom object"):e.Wu(i+" "+s)}}function aI(i,e,n){if((e=gn(e))instanceof Dy)return e._internalPath;if(typeof e=="string")return uI(i,e);throw Iu("Field path arguments must be of type string or ",i,!1,void 0,n)}const lI=new RegExp("[~\\*/\\[\\]]");function uI(i,e,n){if(e.search(lI)>=0)throw Iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new Dy(...e.split("."))._internalPath}catch{throw Iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Iu(i,e,n,s,a){const c=s&&!s.isEmpty(),d=a!==void 0;let g=`Function ${e}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(c||d)&&(y+=" (found",c&&(y+=` in field ${s}`),d&&(y+=` in document ${a}`),y+=")"),new he(K.INVALID_ARGUMENT,g+i+y)}function cI(i,e){return i.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(i,e,n){let s;return s=i?i.toFirestore(e):e,s}function dI(i,e){const n=Py(i.firestore,xy),s=JT(i),a=hI(i.converter,e);return fI(n,[oI(sI(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,Er.exists(!1))]).then(()=>s)}function fI(i,e){return function(s,a){const c=new Bi;return s.asyncQueue.enqueueAndForget(async()=>UT(await GT(s),a,c)),c.promise}(eI(i),e)}(function(e,n=!0){(function(a){ao=a})(oo),oi(new Tr("firestore",(s,{instanceIdentifier:a,options:c})=>{const d=s.getProvider("app").getImmediate(),g=new xy(new NE(s.getProvider("auth-internal")),new OE(d,s.getProvider("app-check-internal")),function(E,P){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new he(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mu(E.options.projectId,P)}(d,a),d);return c=Object.assign({useFetchStreams:n},c),g._setSettings(c),g},"PUBLIC").setMultipleInstances(!0)),_r(pm,mm,e),_r(pm,mm,"esm2017")})();function Ad(i,e){var n={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(n[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(n[s[a]]=i[s[a]]);return n}function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pI=zy,By=new so("auth","Firebase",zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Nu("@firebase/auth");function mI(i,...e){Su.logLevel<=Ae.WARN&&Su.warn(`Auth (${oo}): ${i}`,...e)}function ou(i,...e){Su.logLevel<=Ae.ERROR&&Su.error(`Auth (${oo}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i,...e){throw kd(i,...e)}function Gn(i,...e){return kd(i,...e)}function $y(i,e,n){const s=Object.assign(Object.assign({},pI()),{[e]:n});return new so("auth","Firebase",s).create(e,{appName:i.name})}function Hi(i){return $y(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kd(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return By.create(i,...e)}function fe(i,e,...n){if(!i)throw kd(e,...n)}function gr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw ou(e),new Error(e)}function Ar(i,e){i||gr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function gI(){return eg()==="http:"||eg()==="https:"}function eg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gI()||t0()||"connection"in navigator)?navigator.onLine:!0}function vI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=J_()||n0()}get(){return yI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(i,e){Ar(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=new Pa(3e4,6e4);function Cd(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function uo(i,e,n,s,a={}){return Wy(i,a,async()=>{let c={},d={};s&&(e==="GET"?d=s:c={body:JSON.stringify(s)});const g=Ta(Object.assign({key:i.config.apiKey},d)).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const E=Object.assign({method:e,headers:y},c);return e0()||(E.referrerPolicy="no-referrer"),Hy.fetch()(Ky(i,i.config.apiHost,n,g),E)})}async function Wy(i,e,n){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},_I),e);try{const a=new TI(i),c=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await c.json();if("needConfirmation"in d)throw Zl(i,"account-exists-with-different-credential",d);if(c.ok&&!("errorMessage"in d))return d;{const g=c.ok?d.errorMessage:d.error.message,[y,E]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zl(i,"credential-already-in-use",d);if(y==="EMAIL_EXISTS")throw Zl(i,"email-already-in-use",d);if(y==="USER_DISABLED")throw Zl(i,"user-disabled",d);const P=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw $y(i,P,E);Sr(i,P)}}catch(a){if(a instanceof kr)throw a;Sr(i,"network-request-failed",{message:String(a)})}}async function wI(i,e,n,s,a={}){const c=await uo(i,e,n,s,a);return"mfaPendingCredential"in c&&Sr(i,"multi-factor-auth-required",{_serverResponse:c}),c}function Ky(i,e,n,s){const a=`${e}${n}?${s}`;return i.config.emulator?Rd(i.config,a):`${i.config.apiScheme}://${a}`}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gn(this.auth,"network-request-failed")),EI.get())})}}function Zl(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const a=Gn(i,e,s);return a.customData._tokenResponse=n,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(i,e){return uo(i,"POST","/v1/accounts:delete",e)}async function qy(i,e){return uo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SI(i,e=!1){const n=gn(i),s=await n.getIdToken(e),a=Pd(s);fe(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const c=typeof a.firebase=="object"?a.firebase:void 0,d=c==null?void 0:c.sign_in_provider;return{claims:a,token:s,authTime:da(Ch(a.auth_time)),issuedAtTime:da(Ch(a.iat)),expirationTime:da(Ch(a.exp)),signInProvider:d||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Ch(i){return Number(i)*1e3}function Pd(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return ou("JWT malformed, contained fewer than 3 sections"),null;try{const a=Ig(n);return a?JSON.parse(a):(ou("Failed to decode base64 JWT payload"),null)}catch(a){return ou("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function tg(i){const e=Pd(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof kr&&AI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function AI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=da(this.lastLoginAt),this.creationTime=da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Au(i){var e;const n=i.auth,s=await i.getIdToken(),a=await Ea(i,qy(n,{idToken:s}));fe(a==null?void 0:a.users.length,n,"internal-error");const c=a.users[0];i._notifyReloadListener(c);const d=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?Gy(c.providerUserInfo):[],g=CI(i.providerData,d),y=i.isAnonymous,E=!(i.email&&c.passwordHash)&&!(g!=null&&g.length),P=y?E:!1,D={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:g,metadata:new Qh(c.createdAt,c.lastLoginAt),isAnonymous:P};Object.assign(i,D)}async function RI(i){const e=gn(i);await Au(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CI(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Gy(i){return i.map(e=>{var{providerId:n}=e,s=Ad(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(i,e){const n=await Wy(i,{},async()=>{const s=Ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:c}=i.config,d=Ky(i,a,"/v1/token",`key=${c}`),g=await i._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",Hy.fetch()(d,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NI(i,e){return uo(i,"POST","/v2/accounts:revokeToken",Cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=tg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:a,expiresIn:c}=await PI(e,n);this.updateTokensAndExpiration(s,a,Number(c))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:a,expirationTime:c}=n,d=new Xs;return s&&(fe(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),a&&(fe(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),c&&(fe(typeof c=="number","internal-error",{appName:e}),d.expirationTime=c),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xs,this.toJSON())}_performRefresh(){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:n,auth:s,stsTokenManager:a}=e,c=Ad(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Qh(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const n=await Ea(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SI(this,e)}reload(){return RI(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Au(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject(Hi(this.auth));const e=await this.getIdToken();return await Ea(this,II(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,a,c,d,g,y,E,P;const D=(s=n.displayName)!==null&&s!==void 0?s:void 0,U=(a=n.email)!==null&&a!==void 0?a:void 0,J=(c=n.phoneNumber)!==null&&c!==void 0?c:void 0,q=(d=n.photoURL)!==null&&d!==void 0?d:void 0,Z=(g=n.tenantId)!==null&&g!==void 0?g:void 0,Y=(y=n._redirectEventId)!==null&&y!==void 0?y:void 0,Ee=(E=n.createdAt)!==null&&E!==void 0?E:void 0,me=(P=n.lastLoginAt)!==null&&P!==void 0?P:void 0,{uid:ge,emailVerified:we,isAnonymous:He,providerData:Se,stsTokenManager:x}=n;fe(ge&&x,e,"internal-error");const S=Xs.fromJSON(this.name,x);fe(typeof ge=="string",e,"internal-error"),Jr(D,e.name),Jr(U,e.name),fe(typeof we=="boolean",e,"internal-error"),fe(typeof He=="boolean",e,"internal-error"),Jr(J,e.name),Jr(q,e.name),Jr(Z,e.name),Jr(Y,e.name),Jr(Ee,e.name),Jr(me,e.name);const A=new yr({uid:ge,auth:e,email:U,emailVerified:we,displayName:D,isAnonymous:He,photoURL:q,phoneNumber:J,tenantId:Z,stsTokenManager:S,createdAt:Ee,lastLoginAt:me});return Se&&Array.isArray(Se)&&(A.providerData=Se.map(C=>Object.assign({},C))),Y&&(A._redirectEventId=Y),A}static async _fromIdTokenResponse(e,n,s=!1){const a=new Xs;a.updateFromServerResponse(n);const c=new yr({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Au(c),c}static async _fromGetAccountInfoResponse(e,n,s){const a=n.users[0];fe(a.localId!==void 0,"internal-error");const c=a.providerUserInfo!==void 0?Gy(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(c!=null&&c.length),g=new Xs;g.updateFromIdToken(s);const y=new yr({uid:a.localId,auth:e,stsTokenManager:g,isAnonymous:d}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:c,metadata:new Qh(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(c!=null&&c.length)};return Object.assign(y,E),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Map;function vr(i){Ar(i instanceof Function,"Expected a class definition");let e=ng.get(i);return e?(Ar(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,ng.set(i,e),e)}/**
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
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const rg=Qy;/**
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
 */function au(i,e,n){return`firebase:${i}:${e}:${n}`}class Ys{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:a,name:c}=this.auth;this.fullUserKey=au(this.userKey,a.apiKey,c),this.fullPersistenceKey=au("persistence",a.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ys(vr(rg),e,s);const a=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=a[0]||vr(rg);const d=au(s,e.config.apiKey,e.name);let g=null;for(const E of n)try{const P=await E._get(d);if(P){const D=yr._fromJSON(e,P);E!==c&&(g=D),c=E;break}}catch{}const y=a.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!y.length?new Ys(c,e,s):(c=y[0],g&&await c._set(d,g.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(d)}catch{}})),new Ys(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Jy(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Xy(i=Lt()){return/firefox\//i.test(i)}function Yy(i=Lt()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jy(i=Lt()){return/crios\//i.test(i)}function Zy(i=Lt()){return/iemobile/i.test(i)}function ev(i=Lt()){return/android/i.test(i)}function tv(i=Lt()){return/blackberry/i.test(i)}function nv(i=Lt()){return/webos/i.test(i)}function Nd(i=Lt()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function xI(i=Lt()){var e;return Nd(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return r0()&&document.documentMode===10}function rv(i=Lt()){return Nd(i)||ev(i)||nv(i)||tv(i)||/windows phone/i.test(i)||Zy(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(i,e=[]){let n;switch(i){case"Browser":n=ig(Lt());break;case"Worker":n=`${ig(Lt())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${oo}/${s}`}/**
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
 */class OI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=c=>new Promise((d,g)=>{try{const y=e(c);d(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function VI(i,e={}){return uo(i,"GET","/v2/passwordPolicy",Cd(i,e))}/**
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
 */const LI=6;class MI{constructor(e){var n,s,a,c;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:LI,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,a,c,d,g;const y={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,y),this.validatePasswordCharacterOptions(e,y),y.isValid&&(y.isValid=(n=y.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),y.isValid&&(y.isValid=(s=y.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),y.isValid&&(y.isValid=(a=y.containsLowercaseLetter)!==null&&a!==void 0?a:!0),y.isValid&&(y.isValid=(c=y.containsUppercaseLetter)!==null&&c!==void 0?c:!0),y.isValid&&(y.isValid=(d=y.containsNumericCharacter)!==null&&d!==void 0?d:!0),y.isValid&&(y.isValid=(g=y.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),y}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,a,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,s,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sg(this),this.idTokenSubscription=new sg(this),this.beforeStateQueue=new OI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vr(n)),this._initializationPromise=this.queue(async()=>{var s,a;if(!this._deleted&&(this.persistenceManager=await Ys.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qy(this,{idToken:e}),s=await yr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=a==null?void 0:a._redirectEventId,y=await this.tryRedirectSignIn(e);(!d||d===g)&&(y!=null&&y.user)&&(a=y.user,c=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Au(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject(Hi(this));const n=e?gn(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject(Hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject(Hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VI(this),n=new MI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await NI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vr(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Ys.create(this,[vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,a){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let d=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(g,this,"internal-error"),g.then(()=>{d||c(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,a);return()=>{d=!0,y()}}else{const y=e.addObserver(n);return()=>{d=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xd(i){return gn(i)}class sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c0(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(i){Dd=i}function UI(i){return Dd.loadJS(i)}function jI(){return Dd.gapiScript}function zI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(i,e){const n=Ia(i,"auth");if(n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(Wi(c,e??{}))return a;Sr(a,"already-initialized")}return n.initialize({options:e})}function $I(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(vr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HI(i,e,n){const s=xd(i);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,c=sv(e),{host:d,port:g}=WI(e),y=g===null?"":`:${g}`,E={url:`${c}//${d}${y}/`},P=Object.freeze({host:d,port:g,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Wi(E,s.config.emulator)&&Wi(P,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=P,s.settings.appVerificationDisabledForTesting=!0,KI()}function sv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function WI(i){const e=sv(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const c=a[1];return{host:c,port:og(s.substr(c.length+1))}}else{const[c,d]=s.split(":");return{host:c,port:og(d)}}}function og(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function KI(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gr("not implemented")}_getIdTokenResponse(e){return gr("not implemented")}_linkToIdToken(e,n){return gr("not implemented")}_getReauthenticationResolver(e){return gr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(i,e){return wI(i,"POST","/v1/accounts:signInWithIdp",Cd(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="http://localhost";class Xi extends ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=n,c=Ad(n,["providerId","signInMethod"]);if(!s||!a)return null;const d=new Xi(s,a);return d.idToken=c.idToken||void 0,d.accessToken=c.accessToken||void 0,d.secret=c.secret,d.nonce=c.nonce,d.pendingToken=c.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:qI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ta(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Na extends av{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Na{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Na{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xi._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ei.credential(n,s)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Na{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Na{constructor(){super("twitter.com")}static credential(e,n){return Xi._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ni.credential(n,s)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,a=!1){const c=await yr._fromIdTokenResponse(e,s,a),d=ag(s);return new io({user:c,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const a=ag(s);return new io({user:e,providerId:a,_tokenResponse:s,operationType:n})}}function ag(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends kr{constructor(e,n,s,a){var c;super(n.code,n.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,ku.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,a){return new ku(e,n,s,a)}}function lv(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?ku._fromErrorAndOperation(i,c,e,s):c})}async function GI(i,e,n=!1){const s=await Ea(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return io._forOperation(i,"link",s)}/**
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
 */async function QI(i,e,n=!1){const{auth:s}=i;if(qn(s.app))return Promise.reject(Hi(s));const a="reauthenticate";try{const c=await Ea(i,lv(s,a,e,i),n);fe(c.idToken,s,"internal-error");const d=Pd(c.idToken);fe(d,s,"internal-error");const{sub:g}=d;return fe(i.uid===g,s,"user-mismatch"),io._forOperation(i,a,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Sr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(i,e,n=!1){if(qn(i.app))return Promise.reject(Hi(i));const s="signIn",a=await lv(i,s,e),c=await io._fromIdTokenResponse(i,s,a);return n||await i._updateCurrentUser(c.user),c}function YI(i,e,n,s){return gn(i).onIdTokenChanged(e,n,s)}function JI(i,e,n){return gn(i).beforeAuthStateChanged(e,n)}const Ru="__sak";/**
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
 */class uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=1e3,eS=10;class cv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),a=this.localCache[n];s!==a&&e(n,a,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,g,y)=>{this.notifyListeners(d,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},c=this.storage.getItem(s);DI()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,eS):a()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const tS=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hv.type="SESSION";const dv=hv;/**
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
 */function nS(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const s=new ju(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:a,data:c}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const g=Array.from(d).map(async E=>E(n.origin,c)),y=await nS(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class rS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let c,d;return new Promise((g,y)=>{const E=Od("",20);a.port1.start();const P=setTimeout(()=>{y(new Error("unsupported_event"))},s);d={messageChannel:a,onMessage(D){const U=D;if(U.data.eventId===E)switch(U.data.status){case"ack":clearTimeout(P),c=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),g(U.data.response);break;default:clearTimeout(P),clearTimeout(c),y(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function iS(i){Qn().location.href=i}/**
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
 */function fv(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function sS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function aS(){return fv()?self:null}/**
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
 */const pv="firebaseLocalStorageDb",lS=1,Cu="firebaseLocalStorage",mv="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zu(i,e){return i.transaction([Cu],e?"readwrite":"readonly").objectStore(Cu)}function uS(){const i=indexedDB.deleteDatabase(pv);return new xa(i).toPromise()}function Xh(){const i=indexedDB.open(pv,lS);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Cu,{keyPath:mv})}catch(a){n(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Cu)?e(s):(s.close(),await uS(),e(await Xh()))})})}async function lg(i,e,n){const s=zu(i,!0).put({[mv]:e,value:n});return new xa(s).toPromise()}async function cS(i,e){const n=zu(i,!1).get(e),s=await new xa(n).toPromise();return s===void 0?null:s.value}function ug(i,e){const n=zu(i,!0).delete(e);return new xa(n).toPromise()}const hS=800,dS=3;class gv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xh();return await lg(e,Ru,"1"),await ug(e,Ru),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>lg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>cS(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ug(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const c=zu(a,!1).getAll();return new xa(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:c}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(c)&&(this.notifyListeners(a,c),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gv.type="LOCAL";const fS=gv;new Pa(3e4,6e4);/**
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
 */function pS(i,e){return e?vr(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Vd extends ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mS(i){return XI(i.auth,new Vd(i),i.bypassAuthState)}function gS(i){const{auth:e,user:n}=i;return fe(n,e,"internal-error"),QI(n,new Vd(i),i.bypassAuthState)}async function yS(i){const{auth:e,user:n}=i;return fe(n,e,"internal-error"),GI(n,new Vd(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,s,a,c=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:a,tenantId:c,error:d,type:g}=e;if(d){this.reject(d);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mS;case"linkViaPopup":case"linkViaRedirect":return yS;case"reauthViaPopup":case"reauthViaRedirect":return gS;default:Sr(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=new Pa(2e3,1e4);class qs extends yv{constructor(e,n,s,a,c){super(e,n,a,c),this.provider=s,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vS.get())};e()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="pendingRedirect",lu=new Map;class ES extends yv{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lu.get(this.auth._key());if(!e){try{const s=await wS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lu.set(this.auth._key(),e)}return this.bypassAuthState||lu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wS(i,e){const n=SS(e),s=IS(i);if(!await s._isAvailable())return!1;const a=await s._get(n)==="true";return await s._remove(n),a}function TS(i,e){lu.set(i._key(),e)}function IS(i){return vr(i._redirectPersistence)}function SS(i){return au(_S,i.config.apiKey,i.name)}async function AS(i,e,n=!1){if(qn(i.app))return Promise.reject(Hi(i));const s=xd(i),a=pS(s,e),d=await new ES(s,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=10*60*1e3;class RS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vv(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kS&&this.cachedEventUids.clear(),this.cachedEventUids.has(cg(e))}saveEventToCache(e){this.cachedEventUids.add(cg(e)),this.lastProcessedEventTime=Date.now()}}function cg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function vv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CS(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vv(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(i,e={}){return uo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xS=/^https?/;async function DS(i){if(i.config.emulator)return;const{authorizedDomains:e}=await PS(i);for(const n of e)try{if(OS(n))return}catch{}Sr(i,"unauthorized-domain")}function OS(i){const e=Gh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const d=new URL(i);return d.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!xS.test(n))return!1;if(NS.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const VS=new Pa(3e4,6e4);function hg(){const i=Qn().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function LS(i){return new Promise((e,n)=>{var s,a,c;function d(){hg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hg(),n(Gn(i,"network-request-failed"))},timeout:VS.get()})}if(!((a=(s=Qn().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((c=Qn().gapi)===null||c===void 0)&&c.load)d();else{const g=zI("iframefcb");return Qn()[g]=()=>{gapi.load?d():n(Gn(i,"network-request-failed"))},UI(`${jI()}?onload=${g}`).catch(y=>n(y))}}).catch(e=>{throw uu=null,e})}let uu=null;function MS(i){return uu=uu||LS(i),uu}/**
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
 */const bS=new Pa(5e3,15e3),FS="__/auth/iframe",US="emulator/auth/iframe",jS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BS(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Rd(e,US):`https://${i.config.authDomain}/${FS}`,s={apiKey:e.apiKey,appName:i.name,v:oo},a=zS.get(i.config.apiHost);a&&(s.eid=a);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Ta(s).slice(1)}`}async function $S(i){const e=await MS(i),n=Qn().gapi;return fe(n,i,"internal-error"),e.open({where:document.body,url:BS(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jS,dontclear:!0},s=>new Promise(async(a,c)=>{await s.restyle({setHideOnLeave:!1});const d=Gn(i,"network-request-failed"),g=Qn().setTimeout(()=>{c(d)},bS.get());function y(){Qn().clearTimeout(g),a(s)}s.ping(y).then(y,()=>{c(d)})}))}/**
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
 */const HS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WS=500,KS=600,qS="_blank",GS="http://localhost";class dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QS(i,e,n,s=WS,a=KS){const c=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y=Object.assign(Object.assign({},HS),{width:s.toString(),height:a.toString(),top:c,left:d}),E=Lt().toLowerCase();n&&(g=Jy(E)?qS:n),Xy(E)&&(e=e||GS,y.scrollbars="yes");const P=Object.entries(y).reduce((U,[J,q])=>`${U}${J}=${q},`,"");if(xI(E)&&g!=="_self")return XS(e||"",g),new dg(null);const D=window.open(e||"",g,P);fe(D,i,"popup-blocked");try{D.focus()}catch{}return new dg(D)}function XS(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const YS="__/auth/handler",JS="emulator/auth/handler",ZS=encodeURIComponent("fac");async function fg(i,e,n,s,a,c){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const d={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:oo,eventId:a};if(e instanceof av){e.setDefaultLanguage(i.languageCode),d.providerId=e.providerId||"",u0(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[P,D]of Object.entries({}))d[P]=D}if(e instanceof Na){const P=e.getScopes().filter(D=>D!=="");P.length>0&&(d.scopes=P.join(","))}i.tenantId&&(d.tid=i.tenantId);const g=d;for(const P of Object.keys(g))g[P]===void 0&&delete g[P];const y=await i._getAppCheckToken(),E=y?`#${ZS}=${encodeURIComponent(y)}`:"";return`${eA(i)}?${Ta(g).slice(1)}${E}`}function eA({config:i}){return i.emulator?Rd(i,JS):`https://${i.authDomain}/${YS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="webStorageSupport";class tA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=AS,this._overrideRedirectResult=TS}async _openPopup(e,n,s,a){var c;Ar((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const d=await fg(e,n,s,Gh(),a);return QS(e,d,Od())}async _openRedirect(e,n,s,a){await this._originValidation(e);const c=await fg(e,n,s,Gh(),a);return iS(c),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:c}=this.eventManagers[n];return a?Promise.resolve(a):(Ar(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $S(e),s=new RS(e);return n.register("authEvent",a=>(fe(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ph,{type:Ph},a=>{var c;const d=(c=a==null?void 0:a[0])===null||c===void 0?void 0:c[Ph];d!==void 0&&n(!!d),Sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||Yy()||Nd()}}const nA=tA;var pg="@firebase/auth",mg="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sA(i){oi(new Tr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:d,authDomain:g}=s.options;fe(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:d,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iv(i)},E=new bI(s,a,c,y);return $I(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),oi(new Tr("auth-internal",e=>{const n=xd(e.getProvider("auth").getImmediate());return(s=>new rA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(pg,mg,iA(i)),_r(pg,mg,"esm2017")}/**
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
 */const oA=5*60,aA=Rg("authIdTokenMaxAge")||oA;let gg=null;const lA=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>aA)return;const a=n==null?void 0:n.token;gg!==a&&(gg=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function uA(i=rd()){const e=Ia(i,"auth");if(e.isInitialized())return e.getImmediate();const n=BI(i,{popupRedirectResolver:nA,persistence:[fS,tS,dv]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const d=lA(c.toString());JI(n,d,()=>d(n.currentUser)),YI(n,g=>d(g))}}const a=Ag("auth");return a&&HI(n,`http://${a}`),n}function cA(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}FI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const c=Gn("internal-error");c.customData=a,n(c)},s.type="text/javascript",s.charset="UTF-8",cA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sA("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map,_v={activated:!1,tokenObservers:[]},hA={initialized:!1,enabled:!1};function ht(i){return Yh.get(i)||Object.assign({},_v)}function dA(i,e){return Yh.set(i,e),Yh.get(i)}function Bu(){return hA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="https://content-firebaseappcheck.googleapis.com/v1",fA="exchangeRecaptchaV3Token",pA="exchangeDebugToken",yg={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},mA=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n,s,a,c){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=a,this.upperBound=c,this.pending=null,this.nextErrorWaitInterval=a,a>c)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new fa,this.pending.promise.catch(n=>{}),await yA(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new fa,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function yA(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Xt=new so("appCheck","AppCheck",vA);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(i=!1){var e;return i?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Ld(i){if(!ht(i).activated)throw Xt.create("use-before-activation",{appName:i.name})}function wv(i){const e=Math.round(i/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),a=Math.floor((e-n*3600*24-s*3600)/60),c=e-n*3600*24-s*3600-a*60;let d="";return n&&(d+=eu(n)+"d:"),s&&(d+=eu(s)+"h:"),d+=eu(a)+"m:"+eu(c)+"s",d}function eu(i){return i===0?"00":i>=10?i.toString():"0"+i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Md({url:i,body:e},n){const s={"Content-Type":"application/json"},a=n.getImmediate({optional:!0});if(a){const D=await a.getHeartbeatsHeader();D&&(s["X-Firebase-Client"]=D)}const c={method:"POST",body:JSON.stringify(e),headers:s};let d;try{d=await fetch(i,c)}catch(D){throw Xt.create("fetch-network-error",{originalErrorMessage:D==null?void 0:D.message})}if(d.status!==200)throw Xt.create("fetch-status-error",{httpStatus:d.status});let g;try{g=await d.json()}catch(D){throw Xt.create("fetch-parse-error",{originalErrorMessage:D==null?void 0:D.message})}const y=g.ttl.match(/^([\d.]+)(s)$/);if(!y||!y[2]||isNaN(Number(y[1])))throw Xt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${g.ttl}`});const E=Number(y[1])*1e3,P=Date.now();return{token:g.token,expireTimeMillis:P+E,issuedAtTimeMillis:P}}function _A(i,e){const{projectId:n,appId:s,apiKey:a}=i.options;return{url:`${Ev}/projects/${n}/apps/${s}:${fA}?key=${a}`,body:{recaptcha_v3_token:e}}}function Tv(i,e){const{projectId:n,appId:s,apiKey:a}=i.options;return{url:`${Ev}/projects/${n}/apps/${s}:${pA}?key=${a}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="firebase-app-check-database",wA=1,wa="firebase-app-check-store",Iv="debug-token";let tu=null;function Sv(){return tu||(tu=new Promise((i,e)=>{try{const n=indexedDB.open(EA,wA);n.onsuccess=s=>{i(s.target.result)},n.onerror=s=>{var a;e(Xt.create("storage-open",{originalErrorMessage:(a=s.target.error)===null||a===void 0?void 0:a.message}))},n.onupgradeneeded=s=>{const a=s.target.result;switch(s.oldVersion){case 0:a.createObjectStore(wa,{keyPath:"compositeKey"})}}}catch(n){e(Xt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),tu)}function TA(i){return kv(Rv(i))}function IA(i,e){return Av(Rv(i),e)}function SA(i){return Av(Iv,i)}function AA(){return kv(Iv)}async function Av(i,e){const s=(await Sv()).transaction(wa,"readwrite"),c=s.objectStore(wa).put({compositeKey:i,value:e});return new Promise((d,g)=>{c.onsuccess=y=>{d()},s.onerror=y=>{var E;g(Xt.create("storage-set",{originalErrorMessage:(E=y.target.error)===null||E===void 0?void 0:E.message}))}})}async function kv(i){const n=(await Sv()).transaction(wa,"readonly"),a=n.objectStore(wa).get(i);return new Promise((c,d)=>{a.onsuccess=g=>{const y=g.target.result;c(y?y.value:void 0)},n.onerror=g=>{var y;d(Xt.create("storage-get",{originalErrorMessage:(y=g.target.error)===null||y===void 0?void 0:y.message}))}})}function Rv(i){return`${i.options.appId}-${i.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new Nu("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(i){if(td()){let e;try{e=await TA(i)}catch(n){zi.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Nh(i,e){return td()?IA(i,e).catch(n=>{zi.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function RA(){let i;try{i=await AA()}catch{}if(i)return i;{const e=crypto.randomUUID();return SA(e).catch(n=>zi.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(){return Bu().enabled}async function Fd(){const i=Bu();if(i.enabled&&i.token)return i.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function CA(){const i=Sg(),e=Bu();if(e.initialized=!0,typeof i.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&i.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new fa;e.token=n,typeof i.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(i.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(RA())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA={error:"UNKNOWN_ERROR"};function NA(i){return ed.encodeString(JSON.stringify(i),!1)}async function Jh(i,e=!1){const n=i.app;Ld(n);const s=ht(n);let a=s.token,c;if(a&&!Gs(a)&&(s.token=void 0,a=void 0),!a){const y=await s.cachedTokenPromise;y&&(Gs(y)?a=y:await Nh(n,void 0))}if(!e&&a&&Gs(a))return{token:a.token};let d=!1;if(bd())try{s.exchangeTokenPromise||(s.exchangeTokenPromise=Md(Tv(n,await Fd()),i.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),d=!0);const y=await s.exchangeTokenPromise;return await Nh(n,y),s.token=y,{token:y.token}}catch(y){return y.code==="appCheck/throttled"?zi.warn(y.message):zi.error(y),xh(y)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),d=!0),a=await ht(n).exchangeTokenPromise}catch(y){y.code==="appCheck/throttled"?zi.warn(y.message):zi.error(y),c=y}let g;return a?c?Gs(a)?g={token:a.token,internalError:c}:g=xh(c):(g={token:a.token},s.token=a,await Nh(n,a)):g=xh(c),d&&Nv(n,g),g}async function xA(i){const e=i.app;Ld(e);const{provider:n}=ht(e);if(bd()){const s=await Fd(),{token:a}=await Md(Tv(e,s),i.heartbeatServiceProvider);return{token:a}}else{const{token:s}=await n.getToken();return{token:s}}}function Cv(i,e,n,s){const{app:a}=i,c=ht(a),d={next:n,error:s,type:e};if(c.tokenObservers=[...c.tokenObservers,d],c.token&&Gs(c.token)){const g=c.token;Promise.resolve().then(()=>{n({token:g.token}),_g(i)}).catch(()=>{})}c.cachedTokenPromise.then(()=>_g(i))}function Pv(i,e){const n=ht(i),s=n.tokenObservers.filter(a=>a.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function _g(i){const{app:e}=i,n=ht(e);let s=n.tokenRefresher;s||(s=DA(i),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function DA(i){const{app:e}=i;return new gA(async()=>{const n=ht(e);let s;if(n.token?s=await Jh(i,!0):s=await Jh(i),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=ht(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const a=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,a),Math.max(0,s-Date.now())}else return 0},yg.RETRIAL_MIN_WAIT,yg.RETRIAL_MAX_WAIT)}function Nv(i,e){const n=ht(i).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Gs(i){return i.expireTimeMillis-Date.now()>0}function xh(i){return{token:NA(PA),error:i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=ht(this.app);for(const n of e)Pv(this.app,n.next);return Promise.resolve()}}function VA(i,e){return new OA(i,e)}function LA(i){return{getToken:e=>Jh(i,e),getLimitedUseToken:()=>xA(i),addTokenListener:e=>Cv(i,"INTERNAL",e),removeTokenListener:e=>Pv(i.app,e)}}const MA="@firebase/app-check",bA="0.8.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA="https://www.google.com/recaptcha/api.js";function UA(i,e){const n=new fa,s=ht(i);s.reCAPTCHAState={initialized:n};const a=jA(i),c=vg(!1);return c?Eg(i,e,c,a,n):$A(()=>{const d=vg(!1);if(!d)throw new Error("no recaptcha");Eg(i,e,d,a,n)}),n.promise}function Eg(i,e,n,s,a){n.ready(()=>{BA(i,e,n,s),a.resolve(n)})}function jA(i){const e=`fire_app_check_${i.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function zA(i){Ld(i);const n=await ht(i).reCAPTCHAState.initialized.promise;return new Promise((s,a)=>{const c=ht(i).reCAPTCHAState;n.ready(()=>{s(n.execute(c.widgetId,{action:"fire_app_check"}))})})}function BA(i,e,n,s){const a=n.render(s,{sitekey:e,size:"invisible",callback:()=>{ht(i).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ht(i).reCAPTCHAState.succeeded=!1}}),c=ht(i);c.reCAPTCHAState=Object.assign(Object.assign({},c.reCAPTCHAState),{widgetId:a})}function $A(i){const e=document.createElement("script");e.src=FA,e.onload=i,document.head.appendChild(e)}/**
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
 */class Ud{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,s;WA(this._throttleData);const a=await zA(this._app).catch(d=>{throw Xt.create("recaptcha-error")});if(!(!((e=ht(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Xt.create("recaptcha-error");let c;try{c=await Md(_A(this._app,a),this._heartbeatServiceProvider)}catch(d){throw!((n=d.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=HA(Number((s=d.customData)===null||s===void 0?void 0:s.httpStatus),this._throttleData),Xt.create("throttled",{time:wv(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):d}return this._throttleData=null,c}initialize(e){this._app=e,this._heartbeatServiceProvider=Ia(e,"heartbeat"),UA(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ud?this._siteKey===e._siteKey:!1}}function HA(i,e){if(i===404||i===403)return{backoffCount:1,allowRequestsAfter:Date.now()+mA,httpStatus:i};{const n=e?e.backoffCount:0,s=y0(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:i}}}function WA(i){if(i&&Date.now()-i.allowRequestsAfter<=0)throw Xt.create("throttled",{time:wv(i.allowRequestsAfter-Date.now()),httpStatus:i.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(i=rd(),e){i=gn(i);const n=Ia(i,"app-check");if(Bu().initialized||CA(),bd()&&Fd().then(a=>console.log(`App Check debug token: ${a}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const a=n.getImmediate(),c=n.getOptions();if(c.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&c.provider.isEqual(e.provider))return a;throw Xt.create("already-initialized",{appName:i.name})}const s=n.initialize({options:e});return qA(i,e.provider,e.isTokenAutoRefreshEnabled),ht(i).isTokenAutoRefreshEnabled&&Cv(s,"INTERNAL",()=>{}),s}function qA(i,e,n){const s=dA(i,Object.assign({},_v));s.activated=!0,s.provider=e,s.cachedTokenPromise=kA(i).then(a=>(a&&Gs(a)&&(s.token=a,Nv(i,{token:a.token})),a)),s.isTokenAutoRefreshEnabled=n===void 0?i.automaticDataCollectionEnabled:n,s.provider.initialize(i)}const GA="app-check",wg="app-check-internal";function QA(){oi(new Tr(GA,i=>{const e=i.getProvider("app").getImmediate(),n=i.getProvider("heartbeat");return VA(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,e,n)=>{i.getProvider(wg).initialize()})),oi(new Tr(wg,i=>{const e=i.getProvider("app-check").getImmediate();return LA(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),_r(MA,bA)}QA();const XA={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.firebasestorage.app",messagingSenderId:"410453365556",appId:"1:410453365556:web:670182c618218ca1220b61"},jd=Ng(XA),YA=ZT(jd);uA(jd);KA(jd,{provider:new Ud("6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi")});function JA(){const[i,e]=Gt.useState([]),[n,s]=Gt.useState([]),[a,c]=Gt.useState(0),[d,g]=Gt.useState([]),[y,E]=Gt.useState([]),[P,D]=Gt.useState(null),[U,J]=Gt.useState(null),[q,Z]=Gt.useState({}),[Y,Ee]=Gt.useState(null),[me,ge]=Gt.useState(!1);Gt.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/questions.json").then(w=>w.json()).then(w=>{console.log("Fetched questions:",w),Array.isArray(w)&&w.length>0?(e(w),g(Array(w.length).fill(null))):console.error("Invalid questions data:",w)}).catch(w=>console.error("Error fetching questions:",w))},[]),Gt.useEffect(()=>{fetch("https://josevalqui.github.io/votometro/question_details.json").then(w=>w.json()).then(w=>{console.log("Fetched question details:",w),s(w)}).catch(w=>console.error("Error fetching question details:",w))},[]),Gt.useEffect(()=>{i.length&&E(Array(i.length).fill(3))},[i]);const we=w=>{g(R=>{const T=[...R];return T[a]=w,T}),a<i.length-1&&c(a+1)},He=()=>{a<i.length-1&&c(a+1)},Se=()=>{a>0&&c(a-1)},x=()=>{console.log("Submitted answers:",i.map((w,R)=>({id:w.id,question:w.question,answer:d[R]||"Sin respuesta",weight:y[R]})))},S=async()=>{const w={userId:localStorage.getItem("userId")||Date.now(),answers:d,createdAt:new Date};localStorage.setItem("userId",w.userId);try{const R=await dI(YT(YA,"quizAnswers"),w);console.log("Document written with ID:",R.id)}catch(R){console.error("Error adding document:",R)}},A=()=>{x(),S(),J(null),ge(!1),c(i.length);const w={},R={Sí:1,"No tengo una opinión sobre este tema":.5,No:0};i.forEach((T,Ve)=>{const We=d[Ve]||"No tengo una opinión sobre este tema";w[T.id]={answer:R[We]||.5,weight:y[Ve]}}),fetch("https://josevalqui.github.io/votometro/processed_votes.json").then(T=>T.json()).then(T=>{const Ve=T.candidates.map(pe=>{let Q=0,le=0;Object.entries(pe.votes).forEach(([O,j])=>{if(j===null)return;const ae=O.split("_")[0];if(w[ae]){const{answer:ye,weight:ve}=w[ae];Q+=Math.abs(ye-j)*ve,le+=ve}});const ee=le>0?Math.round((1-Q/le)*100):0;return{name:pe.name,party:pe.party,similarity_score:ee}});Ve.sort((pe,Q)=>Q.similarity_score-pe.similarity_score);const We={};Ve.forEach(pe=>{We[pe.party]||(We[pe.party]={total:0,count:0}),We[pe.party].total+=pe.similarity_score,We[pe.party].count+=1});const st=Object.entries(We).map(([pe,Q])=>({party:pe,average_similarity_score:Math.round(Q.total/Q.count)}));st.sort((pe,Q)=>Q.average_similarity_score-pe.average_similarity_score),D({individual_results:Ve,party_results:st})}).catch(T=>console.error("Error fetching processed votes:",T))},C=(w,R)=>{J(w),fetch("https://josevalqui.github.io/votometro/vote_details.json").then(T=>T.json()).then(T=>{R==="individual"?Z(T.candidates[w.name]||{}):R==="party"&&Z({party_meta:T.party_meta[w.party]||{},details:T.parties[w.party]||[]})}).catch(T=>console.error("Error fetching vote details:",T))};return z.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",minHeight:"90vh",width:"100vw",overflowY:"auto",padding:"20px"},children:z.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"1100px"},children:i.length===0?z.jsx("h2",{children:"Loading..."}):a<i.length?z.jsxs(z.Fragment,{children:[z.jsx("div",{style:{marginBottom:"10px"},children:z.jsxs("h3",{children:[a+1," / ",i.length]})}),z.jsxs("div",{style:{marginBottom:"20px"},children:[z.jsx("label",{children:"Importancia de este tema:"}),z.jsx("br",{}),z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[z.jsx("span",{style:{fontSize:"14px"},children:"Poca"}),z.jsx("input",{type:"range",min:"1",max:"5",value:y[a]!==void 0?y[a]:3,onChange:w=>{const R=[...y];R[a]=Number(w.target.value),E(R)},style:{flexGrow:1}}),z.jsx("span",{style:{fontSize:"14px"},children:"Mucha"})]})]}),z.jsx("h2",{children:i[a].question}),i[a].options.map((w,R)=>z.jsx("button",{onClick:()=>we(w),onMouseEnter:()=>Ee(w),onMouseLeave:()=>Ee(null),style:{margin:"10px",padding:"10px 40px",fontSize:"16px",cursor:"pointer",display:"block",width:"100%",backgroundColor:d[a]===w||Y===w?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px"},children:w},R)),z.jsxs("div",{style:{marginTop:"20px"},children:[z.jsx("button",{onClick:Se,disabled:a===0,style:{marginRight:"10px",padding:"10px 20px",fontSize:"16px",cursor:a===0?"not-allowed":"pointer",opacity:a===0?.5:1},children:"Volver"}),z.jsx("button",{onClick:()=>{a===i.length-1?A():He()},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer"},children:a===i.length-1?"Terminar encuesta":"Saltar"})]}),z.jsxs("div",{style:{marginTop:"20px"},children:[z.jsx("h3",{children:"Current Answers:"}),z.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:d.map((w,R)=>z.jsxs("li",{children:[z.jsxs("strong",{children:["Q",R+1,":"]})," ",w||"Sin respuesta"]},R))})]})]}):z.jsxs(z.Fragment,{children:[z.jsx("div",{id:"recaptcha-container"}),z.jsx("h2",{children:"Completaste el Votómetro!"}),z.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"flex-start",width:"100%"},children:[z.jsx("button",{onClick:()=>ge(!1),onMouseEnter:w=>{w.target.style.backgroundColor="black",w.target.style.color="white"},onMouseLeave:w=>{w.target.style.backgroundColor=me?"darkslategrey":"black"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:me?"darkslategrey":"black",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Partidos políticos"}),z.jsx("button",{onClick:()=>ge(!0),onMouseEnter:w=>{w.target.style.backgroundColor="black",w.target.style.color="white"},onMouseLeave:w=>{w.target.style.backgroundColor=me?"black":"darkslategrey"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:me?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Congresistas"})]}),z.jsxs("div",{style:{display:"flex",width:"100%"},children:[z.jsx("div",{style:{flex:1},children:P&&z.jsx("div",{style:{marginTop:"20px",width:"100%"},children:me?z.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",maxHeight:"40vh",overflowY:"auto"},children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[z.jsx("span",{children:"Congresista"}),z.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),P.individual_results.map((w,R)=>{var T;return z.jsxs("li",{style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:()=>C(w,"individual"),children:[z.jsxs("span",{children:[((T=w.names)==null?void 0:T.join(", "))||w.name," (",w.party,")"]}),z.jsxs("span",{style:{marginLeft:"auto",fontWeight:"bold",paddingRight:"15px"},children:[w.similarity_score,"%"]})]},R)})]}):z.jsxs(z.Fragment,{children:[z.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[z.jsx("span",{children:"Partido"}),z.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),z.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",width:"100%"},children:P.party_results.map((w,R)=>z.jsx("li",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"5px 0"},onClick:()=>C(w,"party"),children:z.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[z.jsx("span",{children:z.jsx("strong",{children:w.party})}),z.jsxs("span",{style:{fontWeight:"bold",paddingRight:"15px"},children:[w.average_similarity_score,"%"]})]})},R))})]})})}),z.jsx("div",{style:{width:"50%",padding:"0px 0px 0px 15px",borderLeft:"1px solid #ccc",overflowY:"auto",maxHeight:"45vh",textAlign:"left"},children:U?z.jsxs(z.Fragment,{children:[z.jsx("h2",{style:{margin:"2px 0"},children:U.name?U.name:U.party}),q.candidate_meta&&z.jsx("div",{style:{marginBottom:"4px"},children:z.jsxs("p",{style:{margin:"2px 0"},children:[z.jsx("strong",{children:"Edad (2024):"})," ",q.candidate_meta.age,z.jsx("br",{}),z.jsx("strong",{children:"Sentencia penal:"})," ",q.candidate_meta.sentencia_penal,z.jsx("br",{}),z.jsx("strong",{children:"Partido:"})," ",q.candidate_meta.party,z.jsx("br",{}),z.jsx("strong",{children:"Asistencia:"})," ",q.candidate_meta.attendance||"N/A",z.jsx("br",{}),z.jsx("br",{})]})}),q.party_meta&&z.jsxs("div",{style:{marginBottom:"4px"},children:[z.jsxs("p",{style:{margin:"2px 0"},children:[z.jsx("strong",{children:"Edad promedio:"})," ",q.party_meta.average_age,z.jsx("br",{}),z.jsx("strong",{children:"Asistencia promedio:"})," ",q.party_meta.average_attendance_percentage||"N/A","%",z.jsx("br",{}),z.jsx("strong",{children:"Sentencia penal:"})," ",q.party_meta.sentencia_penal.yes,"/",q.party_meta.sentencia_penal.total," congresistas",z.jsx("br",{})]}),z.jsx("br",{})]}),q.details&&q.details.length>0?n.length>0?n.map((w,R)=>{let T=q.details.find(Ve=>Ve.id===w.id)||{};return z.jsxs("div",{style:{marginBottom:"2px",lineHeight:"1.2"},children:[z.jsxs("p",{style:{margin:"2px 0"},children:[z.jsx("strong",{children:"Statement:"})," ",w.question," ",z.jsx("br",{}),z.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[z.jsx("strong",{children:"Proyecto de ley:"})," ",w.law?w.law:"N/A"]})]}),z.jsxs("p",{style:{margin:"2px 0"},children:[z.jsx("strong",{children:"Fecha de la votación:"})," ",T.date||"N/A"," ",z.jsx("br",{}),q.party_meta?z.jsxs(z.Fragment,{children:[z.jsx("strong",{children:"Voto más común:"})," ",T.vote||"N/A"," ",z.jsx("br",{})]}):z.jsxs(z.Fragment,{children:[z.jsx("strong",{children:"Voto:"})," ",T.vote||"N/A"," ",z.jsx("br",{})]})]}),z.jsxs("p",{style:{margin:"2px 0"},children:[z.jsx("strong",{children:"Documento y noticias:"})," ",w.source?z.jsxs(z.Fragment,{children:[z.jsx("a",{href:w.pdf_link,target:"_blank",rel:"noopener noreferrer",children:"Documento"})," ","|"," ",z.jsx("a",{href:w.source,target:"_blank",rel:"noopener noreferrer",children:new URL(w.source).hostname.replace("www.","")+"/..."})]}):"N/A"]}),z.jsx("br",{})]},R)}):z.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):z.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]}):z.jsx("p",{children:" "})})]}),z.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left"},children:[z.jsx("strong",{children:"Tus respuestas:"}),d.map((w,R)=>{var T;return z.jsxs("li",{children:[(T=i[R])==null?void 0:T.question,": ",w||"Sin respuesta"]},R)})]}),z.jsx("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:z.jsx("button",{onClick:()=>c(i.length-1),onMouseEnter:w=>w.target.style.backgroundColor="black",onMouseLeave:w=>w.target.style.backgroundColor="darkslategrey",style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})})})}B_.createRoot(document.getElementById("root")).render(z.jsx(Gt.StrictMode,{children:z.jsx(JA,{})}));
