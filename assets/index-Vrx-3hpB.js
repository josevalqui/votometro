import{r as Cl,a as ph}from"./vendor-B4Q6vpuu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var ji={exports:{}},Pn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa;function gh(){if(aa)return Pn;aa=1;var n=Cl(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(u,h,f){var _,I={},S=null,D=null;f!==void 0&&(S=""+f),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(D=h.ref);for(_ in h)r.call(h,_)&&!o.hasOwnProperty(_)&&(I[_]=h[_]);if(u&&u.defaultProps)for(_ in h=u.defaultProps,h)I[_]===void 0&&(I[_]=h[_]);return{$$typeof:e,type:u,key:S,ref:D,props:I,_owner:i.current}}return Pn.Fragment=t,Pn.jsx=a,Pn.jsxs=a,Pn}var la;function mh(){return la||(la=1,ji.exports=gh()),ji.exports}var R=mh(),Se=Cl(),Er={},ca;function _h(){if(ca)return Er;ca=1;var n=ph();return Er.createRoot=n.createRoot,Er.hydrateRoot=n.hydrateRoot,Er}var yh=_h();const vh=()=>{};var ua={};/**
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
 */const kl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Eh=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,f=h?n[i+2]:0,_=o>>2,I=(o&3)<<4|u>>4;let S=(u&15)<<2|f>>6,D=f&63;h||(D=64,a||(S=64)),r.push(t[_],t[I],t[S],t[D])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(kl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Eh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const f=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||f==null||I==null)throw new Th;const S=o<<2|u>>4;if(r.push(S),f!==64){const D=u<<4&240|f>>2;if(r.push(D),I!==64){const k=f<<6&192|I;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Th extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ih=function(n){const e=kl(n);return Es.encodeByteArray(e,!0)},Lr=function(n){return Ih(n).replace(/\./g,"")},Dl=function(n){try{return Es.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wh=()=>Nl().__FIREBASE_DEFAULTS__,Ah=()=>{if(typeof process>"u"||typeof ua>"u")return;const n=ua.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dl(n[1]);return e&&JSON.parse(e)},ni=()=>{try{return vh()||wh()||Ah()||Rh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ol=n=>{var e,t;return(t=(e=ni())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},bh=n=>{const e=Ol(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},xl=()=>{var n;return(n=ni())===null||n===void 0?void 0:n.config},Vl=n=>{var e;return(e=ni())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Mn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Sh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lr(JSON.stringify(t)),Lr(JSON.stringify(a)),""].join(".")}/**
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
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ph(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Ch(){var n;const e=(n=ni())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Oh(){const n=we();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xh(){return!Ch()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ts(){try{return typeof indexedDB=="object"}catch{return!1}}function Vh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mh="FirebaseError";class it extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mh,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Lh(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new it(i,u,r)}}function Lh(n,e){return n.replace(Uh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uh=/\{\$([^}]+)}/g;function Fh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(ha(o)&&ha(a)){if(!Mt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ha(n){return n!==null&&typeof n=="object"}/**
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
 */function qn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jh(n,e){const t=new Bh(n,e);return t.subscribe.bind(t)}class Bh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$h(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bi),i.error===void 0&&(i.error=Bi),i.complete===void 0&&(i.complete=Bi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $h(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bi(){}/**
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
 */const Hh=1e3,zh=2,qh=4*60*60*1e3,Wh=.5;function Gh(n,e=Hh,t=zh){const r=e*Math.pow(t,n),i=Math.round(Wh*r*(Math.random()-.5)*2);return Math.min(qh,r+i)}/**
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
 */function Ve(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class Kh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xh(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qh(n){return n===kt?void 0:n}function Xh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Kh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const Yh={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Zh=$.INFO,ed={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},td=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ed[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ri{constructor(e){this.name=e,this._logLevel=Zh,this._logHandler=td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const nd=(n,e)=>e.some(t=>n instanceof t);let da,fa;function rd(){return da||(da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function id(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ml=new WeakMap,Zi=new WeakMap,Ll=new WeakMap,$i=new WeakMap,Is=new WeakMap;function sd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(gt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ml.set(t,n)}).catch(()=>{}),Is.set(e,n),e}function od(n){if(Zi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Zi.set(n,e)}let es={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ll.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ad(n){es=n(es)}function ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Hi(this),e,...t);return Ll.set(r,e.sort?e.sort():[e]),gt(r)}:id().includes(n)?function(...e){return n.apply(Hi(this),e),gt(Ml.get(this))}:function(...e){return gt(n.apply(Hi(this),e))}}function cd(n){return typeof n=="function"?ld(n):(n instanceof IDBTransaction&&od(n),nd(n,rd())?new Proxy(n,es):n)}function gt(n){if(n instanceof IDBRequest)return sd(n);if($i.has(n))return $i.get(n);const e=cd(n);return e!==n&&($i.set(n,e),Is.set(e,n)),e}const Hi=n=>Is.get(n);function ud(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=gt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(gt(a.result),h.oldVersion,h.newVersion,gt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const hd=["get","getKey","getAll","getAllKeys","count"],dd=["put","add","delete","clear"],zi=new Map;function pa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(zi.get(e))return zi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=dd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[t](...u),i&&h.done]))[0]};return zi.set(e,o),o}ad(n=>({...n,get:(e,t,r)=>pa(e,t)||n.get(e,t,r),has:(e,t)=>!!pa(e,t)||n.has(e,t)}));/**
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
 */class fd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(pd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function pd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ts="@firebase/app",ga="0.11.2";/**
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
 */const tt=new ri("@firebase/app"),gd="@firebase/app-compat",md="@firebase/analytics-compat",_d="@firebase/analytics",yd="@firebase/app-check-compat",vd="@firebase/app-check",Ed="@firebase/auth",Td="@firebase/auth-compat",Id="@firebase/database",wd="@firebase/data-connect",Ad="@firebase/database-compat",Rd="@firebase/functions",bd="@firebase/functions-compat",Sd="@firebase/installations",Pd="@firebase/installations-compat",Cd="@firebase/messaging",kd="@firebase/messaging-compat",Dd="@firebase/performance",Nd="@firebase/performance-compat",Od="@firebase/remote-config",xd="@firebase/remote-config-compat",Vd="@firebase/storage",Md="@firebase/storage-compat",Ld="@firebase/firestore",Ud="@firebase/vertexai",Fd="@firebase/firestore-compat",jd="firebase",Bd="11.4.0";/**
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
 */const ns="[DEFAULT]",$d={[ts]:"fire-core",[gd]:"fire-core-compat",[_d]:"fire-analytics",[md]:"fire-analytics-compat",[vd]:"fire-app-check",[yd]:"fire-app-check-compat",[Ed]:"fire-auth",[Td]:"fire-auth-compat",[Id]:"fire-rtdb",[wd]:"fire-data-connect",[Ad]:"fire-rtdb-compat",[Rd]:"fire-fn",[bd]:"fire-fn-compat",[Sd]:"fire-iid",[Pd]:"fire-iid-compat",[Cd]:"fire-fcm",[kd]:"fire-fcm-compat",[Dd]:"fire-perf",[Nd]:"fire-perf-compat",[Od]:"fire-rc",[xd]:"fire-rc-compat",[Vd]:"fire-gcs",[Md]:"fire-gcs-compat",[Ld]:"fire-fst",[Fd]:"fire-fst-compat",[Ud]:"fire-vertex","fire-js":"fire-js",[jd]:"fire-js-all"};/**
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
 */const Ur=new Map,Hd=new Map,rs=new Map;function ma(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yt(n){const e=n.name;if(rs.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;rs.set(e,n);for(const t of Ur.values())ma(t,n);for(const t of Hd.values())ma(t,n);return!0}function Wn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new un("app","Firebase",zd);/**
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
 */class qd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const hn=Bd;function Ul(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ns,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=xl()),!t)throw mt.create("no-options");const o=Ur.get(i);if(o){if(Mt(t,o.options)&&Mt(r,o.config))return o;throw mt.create("duplicate-app",{appName:i})}const a=new Jh(i);for(const h of rs.values())a.addComponent(h);const u=new qd(t,r,a);return Ur.set(i,u),u}function ws(n=ns){const e=Ur.get(n);if(!e&&n===ns&&xl())return Ul();if(!e)throw mt.create("no-app",{appName:n});return e}function Je(n,e,t){var r;let i=(r=$d[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(u.join(" "));return}yt(new et(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Wd="firebase-heartbeat-database",Gd=1,Ln="firebase-heartbeat-store";let qi=null;function Fl(){return qi||(qi=ud(Wd,Gd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ln)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),qi}async function Kd(n){try{const t=(await Fl()).transaction(Ln),r=await t.objectStore(Ln).get(jl(n));return await t.done,r}catch(e){if(e instanceof it)tt.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function _a(n,e){try{const r=(await Fl()).transaction(Ln,"readwrite");await r.objectStore(Ln).put(e,jl(n)),await r.done}catch(t){if(t instanceof it)tt.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(r.message)}}}function jl(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Qd=1024,Xd=30;class Jd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zd(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ya();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>Xd){const a=ef(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ya(),{heartbeatsToSend:r,unsentEntries:i}=Yd(this._heartbeatsCache.heartbeats),o=Lr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return tt.warn(t),""}}}function ya(){return new Date().toISOString().substring(0,10)}function Yd(n,e=Qd){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),va(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),va(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Zd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ts()?Vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function va(n){return Lr(JSON.stringify({version:2,heartbeats:n})).length}function ef(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function tf(n){yt(new et("platform-logger",e=>new fd(e),"PRIVATE")),yt(new et("heartbeat",e=>new Jd(e),"PRIVATE")),Je(ts,ga,n),Je(ts,ga,"esm2017"),Je("fire-js","")}tf("");var nf="firebase",rf="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(nf,rf,"app");var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,v,w){for(var g=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)g[Ne-2]=arguments[Ne];return p.prototype[v].apply(y,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(v=0;16>v;++v)y[v]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],v=E.g[2];var w=E.g[3],g=p+(w^m&(v^w))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=w+(v^p&(m^v))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(m^w&(p^m))+y[2]+606105819&4294967295,v=w+(g<<17&4294967295|g>>>15),g=m+(p^v&(w^p))+y[3]+3250441966&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(w^m&(v^w))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(v^p&(m^v))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(m^w&(p^m))+y[6]+2821735955&4294967295,v=w+(g<<17&4294967295|g>>>15),g=m+(p^v&(w^p))+y[7]+4249261313&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(w^m&(v^w))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(v^p&(m^v))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(m^w&(p^m))+y[10]+4294925233&4294967295,v=w+(g<<17&4294967295|g>>>15),g=m+(p^v&(w^p))+y[11]+2304563134&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(w^m&(v^w))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=w+(v^p&(m^v))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(m^w&(p^m))+y[14]+2792965006&4294967295,v=w+(g<<17&4294967295|g>>>15),g=m+(p^v&(w^p))+y[15]+1236535329&4294967295,m=v+(g<<22&4294967295|g>>>10),g=p+(v^w&(m^v))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^v&(p^m))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(w^p))+y[11]+643717713&4294967295,v=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(v^w))+y[0]+3921069994&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(m^v))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^v&(p^m))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(w^p))+y[15]+3634488961&4294967295,v=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(v^w))+y[4]+3889429448&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(m^v))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^v&(p^m))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(w^p))+y[3]+4107603335&4294967295,v=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(v^w))+y[8]+1163531501&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(m^v))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=w+(m^v&(p^m))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^m&(w^p))+y[7]+1735328473&4294967295,v=w+(g<<14&4294967295|g>>>18),g=m+(w^p&(v^w))+y[12]+2368359562&4294967295,m=v+(g<<20&4294967295|g>>>12),g=p+(m^v^w)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^v)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^m)+y[11]+1839030562&4294967295,v=w+(g<<16&4294967295|g>>>16),g=m+(v^w^p)+y[14]+4259657740&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^w)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^v)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^m)+y[7]+4139469664&4294967295,v=w+(g<<16&4294967295|g>>>16),g=m+(v^w^p)+y[10]+3200236656&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^w)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^v)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^m)+y[3]+3572445317&4294967295,v=w+(g<<16&4294967295|g>>>16),g=m+(v^w^p)+y[6]+76029189&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(m^v^w)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=w+(p^m^v)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^m)+y[15]+530742520&4294967295,v=w+(g<<16&4294967295|g>>>16),g=m+(v^w^p)+y[2]+3299628645&4294967295,m=v+(g<<23&4294967295|g>>>9),g=p+(v^(m|~w))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~v))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~m))+y[14]+2878612391&4294967295,v=w+(g<<15&4294967295|g>>>17),g=m+(w^(v|~p))+y[5]+4237533241&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~w))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~v))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~m))+y[10]+4293915773&4294967295,v=w+(g<<15&4294967295|g>>>17),g=m+(w^(v|~p))+y[1]+2240044497&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~w))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~v))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~m))+y[6]+2734768916&4294967295,v=w+(g<<15&4294967295|g>>>17),g=m+(w^(v|~p))+y[13]+1309151649&4294967295,m=v+(g<<21&4294967295|g>>>11),g=p+(v^(m|~w))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=w+(m^(p|~v))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~m))+y[2]+718787259&4294967295,v=w+(g<<15&4294967295|g>>>17),g=m+(w^(v|~p))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,y=this.B,v=this.h,w=0;w<p;){if(v==0)for(;w<=m;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<p;)if(y[v++]=E.charCodeAt(w++),v==this.blockSize){i(this,y),v=0;break}}else for(;w<p;)if(y[v++]=E[w++],v==this.blockSize){i(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)E[m++]=this.g[p]>>>y&255;return E};function o(E,p){var m=u;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function a(E,p){this.h=p;for(var m=[],y=!0,v=E.length-1;0<=v;v--){var w=E[v]|0;y&&w==p||(m[v]=w,y=!1)}this.g=m}var u={};function h(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return x(f(-E));for(var p=[],m=1,y=0;E>=m;y++)p[y]=E/m|0,m*=4294967296;return new a(p,0)}function _(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return x(_(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=I,v=0;v<E.length;v+=8){var w=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var I=h(0),S=h(1),D=h(16777216);n=a.prototype,n.m=function(){if(U(this))return-x(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(U(this))return"-"+x(this).toString(E);for(var p=f(Math.pow(E,6)),m=this,y="";;){var v=q(m,p).g;m=K(m,v.j(p));var w=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=v,k(m))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function U(E){return E.h==-1}n.l=function(E){return E=K(this,E),U(E)?-1:k(E)?0:1};function x(E){for(var p=E.g.length,m=[],y=0;y<p;y++)m[y]=~E.g[y];return new a(m,~E.h).add(S)}n.abs=function(){return U(this)?x(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0,v=0;v<=p;v++){var w=y+(this.i(v)&65535)+(E.i(v)&65535),g=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);y=g>>>16,w&=65535,g&=65535,m[v]=g<<16|w}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(E,p){return E.add(x(p))}n.j=function(E){if(k(this)||k(E))return I;if(U(this))return U(E)?x(this).j(x(E)):x(x(this).j(E));if(U(E))return x(this.j(x(E)));if(0>this.l(D)&&0>E.l(D))return f(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<E.g.length;v++){var w=this.i(y)>>>16,g=this.i(y)&65535,Ne=E.i(v)>>>16,wt=E.i(v)&65535;m[2*y+2*v]+=g*wt,z(m,2*y+2*v),m[2*y+2*v+1]+=w*wt,z(m,2*y+2*v+1),m[2*y+2*v+1]+=g*Ne,z(m,2*y+2*v+1),m[2*y+2*v+2]+=w*Ne,z(m,2*y+2*v+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new a(m,0)};function z(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function G(E,p){this.g=E,this.h=p}function q(E,p){if(k(p))throw Error("division by zero");if(k(E))return new G(I,I);if(U(E))return p=q(x(E),p),new G(x(p.g),x(p.h));if(U(p))return p=q(E,x(p)),new G(x(p.g),p.h);if(30<E.g.length){if(U(E)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var m=S,y=p;0>=y.l(E);)m=Pe(m),y=Pe(y);var v=Y(m,1),w=Y(y,1);for(y=Y(y,2),m=Y(m,2);!k(y);){var g=w.add(y);0>=g.l(E)&&(v=v.add(m),w=g),y=Y(y,1),m=Y(m,1)}return p=K(E,v.j(p)),new G(v,p)}for(v=I;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(m),g=w.j(p);U(g)||0<g.l(E);)m-=y,w=f(m),g=w.j(p);k(w)&&(w=S),v=v.add(w),E=K(E,g)}return new G(v,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&E.i(y);return new a(m,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|E.i(y);return new a(m,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^E.i(y);return new a(m,this.h^E.h)};function Pe(E){for(var p=E.g.length+1,m=[],y=0;y<p;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(m,E.h)}function Y(E,p){var m=p>>5;p%=32;for(var y=E.g.length-m,v=[],w=0;w<y;w++)v[w]=0<p?E.i(w+m)>>>p|E.i(w+m+1)<<32-p:E.i(w+m);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=_,As=a}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});var Tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bl,kn,$l,Cr,is,Hl,zl,ql;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tr=="object"&&Tr];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break e;c=c[T]}s=s[s.length-1],d=c[s],l=l(d),l!=d&&l!=null&&e(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var A=c++;return{value:l(A,s[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function f(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function _(s,l,c){return s.call.apply(s.bind,arguments)}function I(s,l,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(l,T)}}return function(){return s.apply(l,arguments)}}function S(s,l,c){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:I,S.apply(null,arguments)}function D(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function k(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,A){for(var C=Array(arguments.length-2),J=2;J<arguments.length;J++)C[J-2]=arguments[J];return l.prototype[T].apply(d,C)}}function U(s){const l=s.length;if(0<l){const c=Array(l);for(let d=0;d<l;d++)c[d]=s[d];return c}return[]}function x(s,l){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,A=d.length||0;s.length=T+A;for(let C=0;C<A;C++)s[T+C]=d[C]}else s.push(d)}}class K{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function z(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function q(s){return q[" "](s),s}q[" "]=function(){};var Pe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(s,l,c){for(const d in s)l.call(c,s[d],d,s)}function E(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function p(s){const l={};for(const c in s)l[c]=s[c];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,l){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let A=0;A<m.length;A++)c=m[A],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function v(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function w(s){u.setTimeout(()=>{throw s},0)}function g(){var s=se;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class Ne{constructor(){this.h=this.g=null}add(l,c){const d=wt.get();d.set(l,c),this.h?this.h.next=d:this.g=d,this.h=d}}var wt=new K(()=>new N,s=>s.reset());class N{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let M,X=!1,se=new Ne,xe=()=>{const s=u.Promise.resolve(void 0);M=()=>{s.then(Ae)}};var Ae=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(c){w(c)}var l=wt;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}X=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function j(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}j.prototype.h=function(){this.defaultPrevented=!0};var st=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function ot(s,l){if(j.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(Pe){e:{try{q(l.nodeName);var T=!0;break e}catch{}T=!1}T||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:tr[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ot.aa.h.call(this)}}k(ot,j);var tr={2:"touch",3:"pen",4:"mouse"};ot.prototype.h=function(){ot.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),nr=0;function mi(s,l,c,d,T){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!d,this.ha=T,this.key=++nr,this.da=this.fa=!1}function At(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function rr(s){this.src=s,this.g={},this.h=0}rr.prototype.add=function(s,l,c,d,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=yi(s,l,d,T);return-1<C?(l=s[C],c||(l.fa=!1)):(l=new mi(l,this.src,A,!!d,T),l.fa=c,s.push(l)),l};function _i(s,l){var c=l.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,l,void 0),A;(A=0<=T)&&Array.prototype.splice.call(d,T,1),A&&(At(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function yi(s,l,c,d){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==l&&A.capture==!!c&&A.ha==d)return T}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),Ei={};function ao(s,l,c,d,T){if(Array.isArray(l)){for(var A=0;A<l.length;A++)ao(s,l[A],c,d,T);return null}return c=uo(c),s&&s[zt]?s.K(l,c,f(d)?!!d.capture:!1,T):Fu(s,l,c,!1,d,T)}function Fu(s,l,c,d,T,A){if(!l)throw Error("Invalid event type");var C=f(T)?!!T.capture:!!T,J=Ii(s);if(J||(s[vi]=J=new rr(s)),c=J.add(l,c,d,C,A),c.proxy)return c;if(d=ju(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)st||(T=C),T===void 0&&(T=!1),s.addEventListener(l.toString(),d,T);else if(s.attachEvent)s.attachEvent(co(l.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function ju(){function s(c){return l.call(s.src,s.listener,c)}const l=Bu;return s}function lo(s,l,c,d,T){if(Array.isArray(l))for(var A=0;A<l.length;A++)lo(s,l[A],c,d,T);else d=f(d)?!!d.capture:!!d,c=uo(c),s&&s[zt]?(s=s.i,l=String(l).toString(),l in s.g&&(A=s.g[l],c=yi(A,c,d,T),-1<c&&(At(A[c]),Array.prototype.splice.call(A,c,1),A.length==0&&(delete s.g[l],s.h--)))):s&&(s=Ii(s))&&(l=s.g[l.toString()],s=-1,l&&(s=yi(l,c,d,T)),(c=-1<s?l[s]:null)&&Ti(c))}function Ti(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[zt])_i(l.i,s);else{var c=s.type,d=s.proxy;l.removeEventListener?l.removeEventListener(c,d,s.capture):l.detachEvent?l.detachEvent(co(c),d):l.addListener&&l.removeListener&&l.removeListener(d),(c=Ii(l))?(_i(c,s),c.h==0&&(c.src=null,l[vi]=null)):At(s)}}}function co(s){return s in Ei?Ei[s]:Ei[s]="on"+s}function Bu(s,l){if(s.da)s=!0;else{l=new ot(l,this);var c=s.listener,d=s.ha||s.src;s.fa&&Ti(s),s=c.call(d,l)}return s}function Ii(s){return s=s[vi],s instanceof rr?s:null}var wi="__closure_events_fn_"+(1e9*Math.random()>>>0);function uo(s){return typeof s=="function"?s:(s[wi]||(s[wi]=function(l){return s.handleEvent(l)}),s[wi])}function _e(){he.call(this),this.i=new rr(this),this.M=this,this.F=null}k(_e,he),_e.prototype[zt]=!0,_e.prototype.removeEventListener=function(s,l,c,d){lo(this,s,l,c,d)};function Re(s,l){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=l.type||l,typeof l=="string")l=new j(l,s);else if(l instanceof j)l.target=l.target||s;else{var T=l;l=new j(d,s),y(l,T)}if(T=!0,c)for(var A=c.length-1;0<=A;A--){var C=l.g=c[A];T=ir(C,d,!0,l)&&T}if(C=l.g=s,T=ir(C,d,!0,l)&&T,T=ir(C,d,!1,l)&&T,c)for(A=0;A<c.length;A++)C=l.g=c[A],T=ir(C,d,!1,l)&&T}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],d=0;d<c.length;d++)At(c[d]);delete s.g[l],s.h--}}this.F=null},_e.prototype.K=function(s,l,c,d){return this.i.add(String(s),l,!1,c,d)},_e.prototype.L=function(s,l,c,d){return this.i.add(String(s),l,!0,c,d)};function ir(s,l,c,d){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var T=!0,A=0;A<l.length;++A){var C=l[A];if(C&&!C.da&&C.capture==c){var J=C.listener,de=C.ha||C.src;C.fa&&_i(s.i,C),T=J.call(de,d)!==!1&&T}}return T&&!d.defaultPrevented}function ho(s,l,c){if(typeof s=="function")c&&(s=S(s,c));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function fo(s){s.g=ho(()=>{s.g=null,s.i&&(s.i=!1,fo(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class $u extends he{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:fo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(s){he.call(this),this.h=s,this.g={}}k(gn,he);var po=[];function go(s){Y(s.g,function(l,c){this.g.hasOwnProperty(c)&&Ti(l)},s),s.g={}}gn.prototype.N=function(){gn.aa.N.call(this),go(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ai=u.JSON.stringify,Hu=u.JSON.parse,zu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ri(){}Ri.prototype.h=null;function mo(s){return s.h||(s.h=s.i())}function _o(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){j.call(this,"d")}k(bi,j);function Si(){j.call(this,"c")}k(Si,j);var Rt={},yo=null;function sr(){return yo=yo||new _e}Rt.La="serverreachability";function vo(s){j.call(this,Rt.La,s)}k(vo,j);function _n(s){const l=sr();Re(l,new vo(l))}Rt.STAT_EVENT="statevent";function Eo(s,l){j.call(this,Rt.STAT_EVENT,s),this.stat=l}k(Eo,j);function be(s){const l=sr();Re(l,new Eo(l,s))}Rt.Ma="timingevent";function To(s,l){j.call(this,Rt.Ma,s),this.size=l}k(To,j);function yn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function qu(s,l,c,d,T,A){s.info(function(){if(s.g)if(A)for(var C="",J=A.split("&"),de=0;de<J.length;de++){var W=J[de].split("=");if(1<W.length){var ye=W[0];W=W[1];var ve=ye.split("_");C=2<=ve.length&&ve[1]=="type"?C+(ye+"="+W+"&"):C+(ye+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+l+`
`+c+`
`+C})}function Wu(s,l,c,d,T,A,C){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+l+`
`+c+`
`+A+" "+C})}function qt(s,l,c,d){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ku(s,c)+(d?" "+d:"")})}function Gu(s,l){s.info(function(){return"TIMEOUT: "+l})}vn.prototype.info=function(){};function Ku(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return Ai(c)}catch{return l}}var or={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Io={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pi;function ar(){}k(ar,Ri),ar.prototype.g=function(){return new XMLHttpRequest},ar.prototype.i=function(){return{}},Pi=new ar;function at(s,l,c,d){this.j=s,this.i=l,this.l=c,this.R=d||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wo}function wo(){this.i=null,this.g="",this.h=!1}var Ao={},Ci={};function ki(s,l,c){s.L=1,s.v=hr(We(l)),s.m=c,s.P=!0,Ro(s,null)}function Ro(s,l){s.F=Date.now(),lr(s),s.A=We(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Fo(c.i,"t",d),s.C=0,c=s.j.J,s.h=new wo,s.g=ra(s.j,c?l:null,!s.m),0<s.O&&(s.M=new $u(S(s.Y,s,s.g),s.O)),l=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(po[0]=T.toString()),T=po);for(var A=0;A<T.length;A++){var C=ao(c,T[A],d||l.handleEvent,!1,l.h||l);if(!C)break;l.g[C.key]=C}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),_n(),qu(s.i,s.u,s.A,s.l,s.R,s.m)}at.prototype.ca=function(s){s=s.target;const l=this.M;l&&Ge(s)==3?l.j():this.Y(s)},at.prototype.Y=function(s){try{if(s==this.g)e:{const ve=Ge(this.g);var l=this.g.Ba();const Kt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||Wo(this.g)))){this.J||ve!=4||l==7||(l==8||0>=Kt?_n(3):_n(2)),Di(this);var c=this.g.Z();this.X=c;t:if(bo(this)){var d=Wo(this.g);s="";var T=d.length,A=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),En(this);var C="";break t}this.h.i=new u.TextDecoder}for(l=0;l<T;l++)this.h.h=!0,s+=this.h.i.decode(d[l],{stream:!(A&&l==T-1)});d.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=c==200,Wu(this.i,this.u,this.A,this.l,this.R,ve,c),this.o){if(this.T&&!this.K){t:{if(this.g){var J,de=this.g;if((J=de.g?de.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(J)){var W=J;break t}}W=null}if(c=W)qt(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ni(this,c);else{this.o=!1,this.s=3,be(12),bt(this),En(this);break e}}if(this.P){c=!0;let Me;for(;!this.J&&this.C<C.length;)if(Me=Qu(this,C),Me==Ci){ve==4&&(this.s=4,be(14),c=!1),qt(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==Ao){this.s=4,be(15),qt(this.i,this.l,C,"[Invalid Chunk]"),c=!1;break}else qt(this.i,this.l,Me,null),Ni(this,Me);if(bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||C.length!=0||this.h.h||(this.s=1,be(16),c=!1),this.o=this.o&&c,!c)qt(this.i,this.l,C,"[Invalid Chunked Response]"),bt(this),En(this);else if(0<C.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Ui(ye),ye.M=!0,be(11))}}else qt(this.i,this.l,C,null),Ni(this,C);ve==4&&bt(this),this.o&&!this.J&&(ve==4?Zo(this.j,this):(this.o=!1,lr(this)))}else dh(this.g),c==400&&0<C.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),bt(this),En(this)}}}catch{}finally{}};function bo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Qu(s,l){var c=s.C,d=l.indexOf(`
`,c);return d==-1?Ci:(c=Number(l.substring(c,d)),isNaN(c)?Ao:(d+=1,d+c>l.length?Ci:(l=l.slice(d,d+c),s.C=d+c,l)))}at.prototype.cancel=function(){this.J=!0,bt(this)};function lr(s){s.S=Date.now()+s.I,So(s,s.I)}function So(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=yn(S(s.ba,s),l)}function Di(s){s.B&&(u.clearTimeout(s.B),s.B=null)}at.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Gu(this.i,this.A),this.L!=2&&(_n(),be(17)),bt(this),this.s=2,En(this)):So(this,this.S-s)};function En(s){s.j.G==0||s.J||Zo(s.j,s)}function bt(s){Di(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,go(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Ni(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||Oi(c.h,s))){if(!s.K&&Oi(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(l)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)_r(c),gr(c);else break e;Li(c),be(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=yn(S(c.Za,c),6e3));if(1>=ko(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Pt(c,11)}else if((s.K||c.g==s)&&_r(c),!z(l))for(T=c.Da.g.parse(l),l=0;l<T.length;l++){let W=T[l];if(c.T=W[0],W=W[1],c.G==2)if(W[0]=="c"){c.K=W[1],c.ia=W[2];const ye=W[3];ye!=null&&(c.la=ye,c.j.info("VER="+c.la));const ve=W[4];ve!=null&&(c.Aa=ve,c.j.info("SVER="+c.Aa));const Kt=W[5];Kt!=null&&typeof Kt=="number"&&0<Kt&&(d=1.5*Kt,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const Me=s.g;if(Me){const vr=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var A=d.h;A.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(xi(A,A.h),A.h=null))}if(d.D){const Fi=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(d.ya=Fi,ee(d.I,d.D,Fi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var C=s;if(d.qa=na(d,d.J?d.ia:null,d.W),C.K){Do(d.h,C);var J=C,de=d.L;de&&(J.I=de),J.B&&(Di(J),lr(J)),d.g=C}else Jo(d);0<c.i.length&&mr(c)}else W[0]!="stop"&&W[0]!="close"||Pt(c,7);else c.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Pt(c,7):Mi(c):W[0]!="noop"&&c.l&&c.l.ta(W),c.v=0)}}_n(4)}catch{}}var Xu=class{constructor(s,l){this.g=s,this.map=l}};function Po(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Co(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ko(s){return s.h?1:s.g?s.g.size:0}function Oi(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function xi(s,l){s.g?s.g.add(l):s.h=l}function Do(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Po.prototype.cancel=function(){if(this.i=No(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function No(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return U(s.i)}function Ju(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,d=0;d<c;d++)l.push(s[d]);return l}l=[],c=0;for(d in s)l[c++]=s[d];return l}function Yu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const d in s)l[c++]=d;return l}}}function Oo(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=Yu(s),d=Ju(s),T=d.length,A=0;A<T;A++)l.call(void 0,d[A],c&&c[A],s)}var xo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zu(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var A=s[c].substring(0,d);T=s[c].substring(d+1)}else A=s[c];l(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function St(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof St){this.h=s.h,cr(this,s.j),this.o=s.o,this.g=s.g,ur(this,s.s),this.l=s.l;var l=s.i,c=new wn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Vo(this,c),this.m=s.m}else s&&(l=String(s).match(xo))?(this.h=!1,cr(this,l[1]||"",!0),this.o=Tn(l[2]||""),this.g=Tn(l[3]||"",!0),ur(this,l[4]),this.l=Tn(l[5]||"",!0),Vo(this,l[6]||"",!0),this.m=Tn(l[7]||"")):(this.h=!1,this.i=new wn(null,this.h))}St.prototype.toString=function(){var s=[],l=this.j;l&&s.push(In(l,Mo,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(In(l,Mo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(In(c,c.charAt(0)=="/"?nh:th,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",In(c,ih)),s.join("")};function We(s){return new St(s)}function cr(s,l,c){s.j=c?Tn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function ur(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Vo(s,l,c){l instanceof wn?(s.i=l,sh(s.i,s.h)):(c||(l=In(l,rh)),s.i=new wn(l,s.h))}function ee(s,l,c){s.i.set(l,c)}function hr(s){return ee(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Tn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function In(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,eh),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function eh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Mo=/[#\/\?@]/g,th=/[#\?:]/g,nh=/[#\?]/g,rh=/[#\?@]/g,ih=/#/g;function wn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function lt(s){s.g||(s.g=new Map,s.h=0,s.i&&Zu(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=wn.prototype,n.add=function(s,l){lt(this),this.i=null,s=Wt(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Lo(s,l){lt(s),l=Wt(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Uo(s,l){return lt(s),l=Wt(s,l),s.g.has(l)}n.forEach=function(s,l){lt(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(l,T,d,this)},this)},this)},n.na=function(){lt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let d=0;d<l.length;d++){const T=s[d];for(let A=0;A<T.length;A++)c.push(l[d])}return c},n.V=function(s){lt(this);let l=[];if(typeof s=="string")Uo(this,s)&&(l=l.concat(this.g.get(Wt(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return lt(this),this.i=null,s=Wt(this,s),Uo(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Fo(s,l,c){Lo(s,l),0<c.length&&(s.i=null,s.g.set(Wt(s,l),U(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var d=l[c];const A=encodeURIComponent(String(d)),C=this.V(d);for(d=0;d<C.length;d++){var T=A;C[d]!==""&&(T+="="+encodeURIComponent(String(C[d]))),s.push(T)}}return this.i=s.join("&")};function Wt(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function sh(s,l){l&&!s.j&&(lt(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(Lo(this,d),Fo(this,T,c))},s)),s.j=l}function oh(s,l){const c=new vn;if(u.Image){const d=new Image;d.onload=D(ct,c,"TestLoadImage: loaded",!0,l,d),d.onerror=D(ct,c,"TestLoadImage: error",!1,l,d),d.onabort=D(ct,c,"TestLoadImage: abort",!1,l,d),d.ontimeout=D(ct,c,"TestLoadImage: timeout",!1,l,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else l(!1)}function ah(s,l){const c=new vn,d=new AbortController,T=setTimeout(()=>{d.abort(),ct(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:d.signal}).then(A=>{clearTimeout(T),A.ok?ct(c,"TestPingServer: ok",!0,l):ct(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(T),ct(c,"TestPingServer: error",!1,l)})}function ct(s,l,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function lh(){this.g=new zu}function ch(s,l,c){const d=c||"";try{Oo(s,function(T,A){let C=T;f(T)&&(C=Ai(T)),l.push(d+A+"="+encodeURIComponent(C))})}catch(T){throw l.push(d+"type="+encodeURIComponent("_badmap")),T}}function dr(s){this.l=s.Ub||null,this.j=s.eb||!1}k(dr,Ri),dr.prototype.g=function(){return new fr(this.l,this.j)},dr.prototype.i=function(s){return function(){return s}}({});function fr(s,l){_e.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(fr,_e),n=fr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Rn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,An(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function jo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?An(this):Rn(this),this.readyState==3&&jo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,An(this))},n.Qa=function(s){this.g&&(this.response=s,An(this))},n.ga=function(){this.g&&An(this)};function An(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Rn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function Rn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Bo(s){let l="";return Y(s,function(c,d){l+=d,l+=":",l+=c,l+=`\r
`}),l}function Vi(s,l,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=Bo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):ee(s,l,c))}function ne(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ne,_e);var uh=/^https?$/i,hh=["POST","PUT"];n=ne.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pi.g(),this.v=this.o?mo(this.o):mo(Pi),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(A){$o(this,A);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())c.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(hh,l,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of c)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qo(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){$o(this,A)}};function $o(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Ho(s),pr(s)}function Ho(s){s.A||(s.A=!0,Re(s,"complete"),Re(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Re(this,"complete"),Re(this,"abort"),pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zo(this):this.bb())},n.bb=function(){zo(this)};function zo(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ge(s)!=4||s.Z()!=2)){if(s.u&&Ge(s)==4)ho(s.Ea,0,s);else if(Re(s,"readystatechange"),Ge(s)==4){s.h=!1;try{const C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var d;if(d=C===0){var T=String(s.D).match(xo)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!uh.test(T?T.toLowerCase():"")}c=d}if(c)Re(s,"complete"),Re(s,"success");else{s.m=6;try{var A=2<Ge(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Ho(s)}}finally{pr(s)}}}}function pr(s,l){if(s.g){qo(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Re(s,"ready");try{c.onreadystatechange=d}catch{}}}function qo(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ge(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Hu(l)}};function Wo(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function dh(s){const l={};s=(s.g&&2<=Ge(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(z(s[d]))continue;var c=v(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const A=l[T]||[];l[T]=A,A.push(c)}E(l,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bn(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function Go(s){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bn("baseRetryDelayMs",5e3,s),this.cb=bn("retryDelaySeedMs",1e4,s),this.Wa=bn("forwardChannelMaxRetries",2,s),this.wa=bn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Po(s&&s.concurrentRequestLimit),this.Da=new lh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Go.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,d){be(0),this.W=s,this.H=l||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=na(this,null,this.W),mr(this)};function Mi(s){if(Ko(s),s.G==3){var l=s.U++,c=We(s.I);if(ee(c,"SID",s.K),ee(c,"RID",l),ee(c,"TYPE","terminate"),Sn(s,c),l=new at(s,s.j,l),l.L=2,l.v=hr(We(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ra(l.j,null),l.g.ea(l.v)),l.F=Date.now(),lr(l)}ta(s)}function gr(s){s.g&&(Ui(s),s.g.cancel(),s.g=null)}function Ko(s){gr(s),s.u&&(u.clearTimeout(s.u),s.u=null),_r(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function mr(s){if(!Co(s.h)&&!s.s){s.s=!0;var l=s.Ga;M||xe(),X||(M(),X=!0),se.add(l,s),s.B=0}}function fh(s,l){return ko(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=yn(S(s.Ga,s,l),ea(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new at(this,this.j,s);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(l+=d,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=Xo(this,T,l),c=We(this.I),ee(c,"RID",s),ee(c,"CVER",22),this.D&&ee(c,"X-HTTP-Session-Id",this.D),Sn(this,c),A&&(this.O?l="headers="+encodeURIComponent(String(Bo(A)))+"&"+l:this.m&&Vi(c,this.m,A)),xi(this.h,T),this.Ua&&ee(c,"TYPE","init"),this.P?(ee(c,"$req",l),ee(c,"SID","null"),T.T=!0,ki(T,c,null)):ki(T,c,l),this.G=2}}else this.G==3&&(s?Qo(this,s):this.i.length==0||Co(this.h)||Qo(this))};function Qo(s,l){var c;l?c=l.l:c=s.U++;const d=We(s.I);ee(d,"SID",s.K),ee(d,"RID",c),ee(d,"AID",s.T),Sn(s,d),s.m&&s.o&&Vi(d,s.m,s.o),c=new at(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Xo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),xi(s.h,c),ki(c,d,l)}function Sn(s,l){s.H&&Y(s.H,function(c,d){ee(l,d,c)}),s.l&&Oo({},function(c,d){ee(l,d,c)})}function Xo(s,l,c){c=Math.min(s.i.length,c);var d=s.l?S(s.l.Na,s.l,s):null;e:{var T=s.i;let A=-1;for(;;){const C=["count="+c];A==-1?0<c?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let J=!0;for(let de=0;de<c;de++){let W=T[de].g;const ye=T[de].map;if(W-=A,0>W)A=Math.max(0,T[de].g-100),J=!1;else try{ch(ye,C,"req"+W+"_")}catch{d&&d(ye)}}if(J){d=C.join("&");break e}}}return s=s.i.splice(0,c),l.D=s,d}function Jo(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;M||xe(),X||(M(),X=!0),se.add(l,s),s.v=0}}function Li(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=yn(S(s.Fa,s),ea(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Yo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=yn(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),gr(this),Yo(this))};function Ui(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Yo(s){s.g=new at(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=We(s.qa);ee(l,"RID","rpc"),ee(l,"SID",s.K),ee(l,"AID",s.T),ee(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&ee(l,"TO",s.ja),ee(l,"TYPE","xmlhttp"),Sn(s,l),s.m&&s.o&&Vi(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=hr(We(l)),c.m=null,c.P=!0,Ro(c,s)}n.Za=function(){this.C!=null&&(this.C=null,gr(this),Li(this),be(19))};function _r(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Zo(s,l){var c=null;if(s.g==l){_r(s),Ui(s),s.g=null;var d=2}else if(Oi(s.h,l))c=l.D,Do(s.h,l),d=1;else return;if(s.G!=0){if(l.o)if(d==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var T=s.B;d=sr(),Re(d,new To(d,c)),mr(s)}else Jo(s);else if(T=l.s,T==3||T==0&&0<l.X||!(d==1&&fh(s,l)||d==2&&Li(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),T){case 1:Pt(s,5);break;case 4:Pt(s,10);break;case 3:Pt(s,6);break;default:Pt(s,2)}}}function ea(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function Pt(s,l){if(s.j.info("Error code "+l),l==2){var c=S(s.fb,s),d=s.Xa;const T=!d;d=new St(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||cr(d,"https"),hr(d),T?oh(d.toString(),c):ah(d.toString(),c)}else be(2);s.G=0,s.l&&s.l.sa(l),ta(s),Ko(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function ta(s){if(s.G=0,s.ka=[],s.l){const l=No(s.h);(l.length!=0||s.i.length!=0)&&(x(s.ka,l),x(s.ka,s.i),s.h.i.length=0,U(s.i),s.i.length=0),s.l.ra()}}function na(s,l,c){var d=c instanceof St?We(c):new St(c);if(d.g!="")l&&(d.g=l+"."+d.g),ur(d,d.s);else{var T=u.location;d=T.protocol,l=l?l+"."+T.hostname:T.hostname,T=+T.port;var A=new St(null);d&&cr(A,d),l&&(A.g=l),T&&ur(A,T),c&&(A.l=c),d=A}return c=s.D,l=s.ya,c&&l&&ee(d,c,l),ee(d,"VER",s.la),Sn(s,d),d}function ra(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ne(new dr({eb:c})):new ne(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ia(){}n=ia.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function yr(){}yr.prototype.g=function(s,l){return new Oe(s,l)};function Oe(s,l){_e.call(this),this.g=new Go(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!z(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!z(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Gt(this)}k(Oe,_e),Oe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Oe.prototype.close=function(){Mi(this.g)},Oe.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Ai(s),s=c);l.i.push(new Xu(l.Ya++,s)),l.G==3&&mr(l)},Oe.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,Oe.aa.N.call(this)};function sa(s){bi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const c in l){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}k(sa,bi);function oa(){Si.call(this),this.status=1}k(oa,Si);function Gt(s){this.g=s}k(Gt,ia),Gt.prototype.ua=function(){Re(this.g,"a")},Gt.prototype.ta=function(s){Re(this.g,new sa(s))},Gt.prototype.sa=function(s){Re(this.g,new oa)},Gt.prototype.ra=function(){Re(this.g,"b")},yr.prototype.createWebChannel=yr.prototype.g,Oe.prototype.send=Oe.prototype.o,Oe.prototype.open=Oe.prototype.m,Oe.prototype.close=Oe.prototype.close,ql=function(){return new yr},zl=function(){return sr()},Hl=Rt,is={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},or.NO_ERROR=0,or.TIMEOUT=8,or.HTTP_ERROR=6,Cr=or,Io.COMPLETE="complete",$l=Io,_o.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,kn=_o,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Bl=ne}).apply(typeof Tr<"u"?Tr:typeof self<"u"?self:typeof window<"u"?window:{});const Ta="@firebase/firestore",Ia="4.7.9";/**
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
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
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
 */let dn="11.4.0";/**
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
 */const Lt=new ri("@firebase/firestore");function Qt(){return Lt.logLevel}function O(n,...e){if(Lt.logLevel<=$.DEBUG){const t=e.map(Rs);Lt.debug(`Firestore (${dn}): ${n}`,...t)}}function Ut(n,...e){if(Lt.logLevel<=$.ERROR){const t=e.map(Rs);Lt.error(`Firestore (${dn}): ${n}`,...t)}}function ii(n,...e){if(Lt.logLevel<=$.WARN){const t=e.map(Rs);Lt.warn(`Firestore (${dn}): ${n}`,...t)}}function Rs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function B(n="Unexpected state"){const e=`FIRESTORE (${dn}) INTERNAL ASSERTION FAILED: `+n;throw Ut(e),new Error(e)}function ie(n,e){n||B()}function Z(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends it{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Wl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class of{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class af{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Wl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Te(e)}}class lf{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cf{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new lf(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uf{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Be(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new wa(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new wa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Gl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=hf(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function rn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Aa=-62135596800,Ra=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ra);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Aa)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ra}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Aa;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new ue(0,0))}static max(){return new te(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ba="__name__";class je{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(),r===void 0?r=e.length-t:r>e.length-t&&B(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof je?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=je.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=je.isNumericId(e),i=je.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?je.extractNumericId(e).compare(je.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return As.fromString(e.substring(4,e.length-2))}}class re extends je{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const df=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends je{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return df.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ba}static keyField(){return new ge([ba])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(re.fromString(e))}static fromName(e){return new F(re.fromString(e).popFirst(5))}static empty(){return new F(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new re(e.slice()))}}/**
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
 */const Un=-1;function ff(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new vt(i,F.empty(),e)}function pf(n){return new vt(n.readTime,n.key,Un)}class vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vt(te.min(),F.empty(),Un)}static max(){return new vt(te.max(),F.empty(),Un)}}function gf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bs(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==mf)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(_=>{a[f]=_,++u,u===o&&r(a)},_=>i(_))}})}static doWhile(e,t){return new b((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function yf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ss{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ss.ae=-1;/**
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
 */const Ps=-1;function Cs(n){return n==null}function Fr(n){return n===0&&1/n==-1/0}function vf(n){return typeof n=="number"&&Number.isInteger(n)&&!Fr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Kl="";function Ef(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Sa(e)),e=Tf(n.get(t),e);return Sa(e)}function Tf(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Kl:t+="";break;default:t+=o}}return t}function Sa(n){return n+Kl+""}/**
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
 */function Pa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function fn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ql(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class De{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new De(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ir(this.root,e,this.comparator,!0)}}class Ir{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??fe.RED,this.left=i??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new fe(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(e,t,r,i,o){return this}insert(e,t,r){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(e){return new Ca(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class Ca{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Fe([])}unionWith(e){let t=new me(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class If extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new If("Invalid base64 string: "+o):o}}(e);return new ze(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const wf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(ie(!!n),typeof n=="string"){let e=0;const t=wf.exec(n);if(ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function sn(n){return typeof n=="string"?ze.fromBase64String(n):ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl="server_timestamp",Jl="__type__",Yl="__previous_value__",Zl="__local_write_time__";function ks(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jl])===null||t===void 0?void 0:t.stringValue)===Xl}function Ds(n){const e=n.mapValue.fields[Yl];return ks(e)?Ds(e):e}function jr(n){const e=Ft(n.mapValue.fields[Zl].timestampValue);return new ue(e.seconds,e.nanos)}/**
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
 */class Af{constructor(e,t,r,i,o,a,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}const Br="(default)";class $r{constructor(e,t){this.projectId=e,this.database=t||Br}static empty(){return new $r("","")}get isDefaultDatabase(){return this.database===Br}isEqual(e){return e instanceof $r&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="__type__",Rf="__max__",wr={mapValue:{}},tc="__vector__",ss="value";function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ks(n)?4:Sf(n)?9007199254740991:bf(n)?10:11:B()}function qe(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Ft(i.timestampValue),u=Ft(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return sn(i.bytesValue).isEqual(sn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return pe(i.geoPointValue.latitude)===pe(o.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return pe(i.integerValue)===pe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=pe(i.doubleValue),u=pe(o.doubleValue);return a===u?Fr(a)===Fr(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return rn(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Pa(a)!==Pa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!qe(a[h],u[h])))return!1;return!0}(n,e);default:return B()}}function Fn(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function on(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=pe(o.integerValue||o.doubleValue),h=pe(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return ka(n.timestampValue,e.timestampValue);case 4:return ka(jr(n),jr(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(o,a){const u=sn(o),h=sn(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const _=Q(u[f],h[f]);if(_!==0)return _}return Q(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=Q(pe(o.latitude),pe(a.latitude));return u!==0?u:Q(pe(o.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Da(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,f,_;const I=o.fields||{},S=a.fields||{},D=(u=I[ss])===null||u===void 0?void 0:u.arrayValue,k=(h=S[ss])===null||h===void 0?void 0:h.arrayValue,U=Q(((f=D==null?void 0:D.values)===null||f===void 0?void 0:f.length)||0,((_=k==null?void 0:k.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:Da(D,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===wr.mapValue&&a===wr.mapValue)return 0;if(o===wr.mapValue)return 1;if(a===wr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),f=a.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let I=0;I<h.length&&I<_.length;++I){const S=Q(h[I],_[I]);if(S!==0)return S;const D=on(u[h[I]],f[_[I]]);if(D!==0)return D}return Q(h.length,_.length)}(n.mapValue,e.mapValue);default:throw B()}}function ka(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=Ft(n),r=Ft(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function Da(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=on(t[i],r[i]);if(o)return o}return Q(t.length,r.length)}function an(n){return os(n)}function os(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ft(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return F.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=os(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${os(t.fields[a])}`;return i+"}"}(n.mapValue):B()}function kr(n){switch(jt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ds(n);return e?16+kr(e):16;case 5:return 2*n.stringValue.length;case 6:return sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+kr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return fn(r.fields,(o,a)=>{i+=o.length+kr(a)}),i}(n.mapValue);default:throw B()}}function as(n){return!!n&&"integerValue"in n}function Ns(n){return!!n&&"arrayValue"in n}function Dr(n){return!!n&&"mapValue"in n}function bf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ec])===null||t===void 0?void 0:t.stringValue)===tc}function Dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return fn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Dn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Rf}/**
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
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Dr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dn(t)}setAll(e){let t=ge.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Dn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Dr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Dr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){fn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Ue(Dn(this.value))}}function nc(n){const e=[];return fn(n.fields,(t,r)=>{const i=new ge([t]);if(Dr(r)){const o=nc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Fe(e)}/**
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
 */class Le{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Le(e,0,te.min(),te.min(),te.min(),Ue.empty(),0)}static newFoundDocument(e,t,r,i){return new Le(e,1,t,te.min(),r,i,0)}static newNoDocument(e,t){return new Le(e,2,t,te.min(),te.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,te.min(),te.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,t){this.position=e,this.inclusive=t}}function Na(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=on(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class zr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Pf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rc{}class ce extends rc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kf(e,t,r):t==="array-contains"?new Of(e,r):t==="in"?new xf(e,r):t==="not-in"?new Vf(e,r):t==="array-contains-any"?new Mf(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Df(e,r):new Nf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(on(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(on(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends rc{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Et(e,t)}matches(e){return ic(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ic(n){return n.op==="and"}function sc(n){return Cf(n)&&ic(n)}function Cf(n){for(const e of n.filters)if(e instanceof Et)return!1;return!0}function ls(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+an(n.value);if(sc(n))return n.filters.map(e=>ls(e)).join(",");{const e=n.filters.map(t=>ls(t)).join(",");return`${n.op}(${e})`}}function oc(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&qe(r.value,i.value)}(n,e):n instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&oc(a,i.filters[u]),!0):!1}(n,e):void B()}function ac(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${an(t.value)}`}(n):n instanceof Et?function(t){return t.op.toString()+" {"+t.getFilters().map(ac).join(" ,")+"}"}(n):"Filter"}class kf extends ce{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Df extends ce{constructor(e,t){super(e,"in",t),this.keys=lc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Nf extends ce{constructor(e,t){super(e,"not-in",t),this.keys=lc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>F.fromName(r.referenceValue))}class Of extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ns(t)&&Fn(t.arrayValue,this.value)}}class xf extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fn(this.value.arrayValue,t)}}class Vf extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fn(this.value.arrayValue,t)}}class Mf extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ns(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Fn(this.value.arrayValue,r))}}/**
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
 */class Lf{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.le=null}}function xa(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Lf(n,e,t,r,i,o,a)}function Os(n){const e=Z(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ls(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>an(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>an(r)).join(",")),e.le=t}return e.le}function xs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Pf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!oc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oa(n.startAt,e.startAt)&&Oa(n.endAt,e.endAt)}/**
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
 */class si{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Uf(n,e,t,r,i,o,a,u){return new si(n,e,t,r,i,o,a,u)}function Ff(n){return new si(n)}function Va(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function jf(n){return n.collectionGroup!==null}function Nn(n){const e=Z(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new me(ge.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(u=u.add(f.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new zr(o,r))}),t.has(ge.keyField().canonicalString())||e.he.push(new zr(ge.keyField(),r))}return e.he}function xt(n){const e=Z(n);return e.Pe||(e.Pe=Bf(e,Nn(n))),e.Pe}function Bf(n,e){if(n.limitType==="F")return xa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new zr(i.field,o)});const t=n.endAt?new Hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hr(n.startAt.position,n.startAt.inclusive):null;return xa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function cs(n,e,t){return new si(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function cc(n,e){return xs(xt(n),xt(e))&&n.limitType===e.limitType}function uc(n){return`${Os(xt(n))}|lt:${n.limitType}`}function Cn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ac(i)).join(", ")}]`),Cs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>an(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>an(i)).join(",")),`Target(${r})`}(xt(n))}; limitType=${n.limitType})`}function Vs(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Nn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const f=Na(a,u,h);return a.inclusive?f<=0:f<0}(r.startAt,Nn(r),i)||r.endAt&&!function(a,u,h){const f=Na(a,u,h);return a.inclusive?f>=0:f>0}(r.endAt,Nn(r),i))}(n,e)}function $f(n){return(e,t)=>{let r=!1;for(const i of Nn(n)){const o=Hf(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Hf(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),f=u.data.field(o);return h!==null&&f!==null?on(h,f):B()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Ql(this.inner)}size(){return this.innerSize}}/**
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
 */const zf=new De(F.comparator);function qr(){return zf}const hc=new De(F.comparator);function Ar(...n){let e=hc;for(const t of n)e=e.insert(t.key,t);return e}function dc(n){let e=hc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Dt(){return On()}function fc(){return On()}function On(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const qf=new De(F.comparator),Wf=new me(F.comparator);function Ie(...n){let e=Wf;for(const t of n)e=e.add(t);return e}const Gf=new me(Q);function Kf(){return Gf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fr(e)?"-0":e}}function pc(n){return{integerValue:""+n}}function Qf(n,e){return vf(e)?pc(e):Ms(n,e)}/**
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
 */class oi{constructor(){this._=void 0}}function Xf(n,e,t){return n instanceof Wr?function(i,o){const a={fields:{[Jl]:{stringValue:Xl},[Zl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ks(o)&&(o=Ds(o)),o&&(a.fields[Yl]=o),{mapValue:a}}(t,e):n instanceof jn?mc(n,e):n instanceof Bn?_c(n,e):function(i,o){const a=gc(i,o),u=Ma(a)+Ma(i.Ie);return as(a)&&as(i.Ie)?pc(u):Ms(i.serializer,u)}(n,e)}function Jf(n,e,t){return n instanceof jn?mc(n,e):n instanceof Bn?_c(n,e):t}function gc(n,e){return n instanceof Gr?function(r){return as(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Wr extends oi{}class jn extends oi{constructor(e){super(),this.elements=e}}function mc(n,e){const t=yc(e);for(const r of n.elements)t.some(i=>qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Bn extends oi{constructor(e){super(),this.elements=e}}function _c(n,e){let t=yc(e);for(const r of n.elements)t=t.filter(i=>!qe(i,r));return{arrayValue:{values:t}}}class Gr extends oi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ma(n){return pe(n.integerValue||n.doubleValue)}function yc(n){return Ns(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Yf(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jn&&i instanceof jn||r instanceof Bn&&i instanceof Bn?rn(r.elements,i.elements,qe):r instanceof Gr&&i instanceof Gr?qe(r.Ie,i.Ie):r instanceof Wr&&i instanceof Wr}(n.transform,e.transform)}class Zf{constructor(e,t){this.version=e,this.transformResults=t}}class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ai{}function vc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Tc(n.key,Ye.none()):new Kn(n.key,n.data,Ye.none());{const t=n.data,r=Ue.empty();let i=new me(ge.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ht(n.key,r,new Fe(i.toArray()),Ye.none())}}function ep(n,e,t){n instanceof Kn?function(i,o,a){const u=i.value.clone(),h=Ua(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Ht?function(i,o,a){if(!Nr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ua(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ec(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function xn(n,e,t,r){return n instanceof Kn?function(o,a,u,h){if(!Nr(o.precondition,a))return u;const f=o.value.clone(),_=Fa(o.fieldTransforms,h,a);return f.setAll(_),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ht?function(o,a,u,h){if(!Nr(o.precondition,a))return u;const f=Fa(o.fieldTransforms,h,a),_=a.data;return _.setAll(Ec(o)),_.setAll(f),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,u){return Nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function tp(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=gc(r.transform,i||null);o!=null&&(t===null&&(t=Ue.empty()),t.set(r.field,o))}return t||null}function La(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rn(r,i,(o,a)=>Yf(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Kn extends ai{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ht extends ai{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ec(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ua(n,e,t){const r=new Map;ie(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Jf(a,u,t[i]))}return r}function Fa(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Xf(o,a,e))}return r}class Tc extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class np extends ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rp{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ep(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=xn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=xn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=fc();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=vc(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ie())}isEqual(e){return this.batchId===e.batchId&&rn(this.mutations,e.mutations,(t,r)=>La(t,r))&&rn(this.baseMutations,e.baseMutations,(t,r)=>La(t,r))}}class Ls{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ie(e.mutations.length===r.length);let i=function(){return qf}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ls(e,t,r,i)}}/**
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
 */class ip{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var oe,H;function sp(n){switch(n){case P.OK:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B()}}function op(n){if(n===void 0)return Ut("GRPC error has no .code"),P.UNKNOWN;switch(n){case oe.OK:return P.OK;case oe.CANCELLED:return P.CANCELLED;case oe.UNKNOWN:return P.UNKNOWN;case oe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case oe.INTERNAL:return P.INTERNAL;case oe.UNAVAILABLE:return P.UNAVAILABLE;case oe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case oe.NOT_FOUND:return P.NOT_FOUND;case oe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case oe.ABORTED:return P.ABORTED;case oe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case oe.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(H=oe||(oe={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new As([4294967295,4294967295],0);class ap{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function us(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function cp(n,e){return us(n,e.toTimestamp())}function Zt(n){return ie(!!n),te.fromTimestamp(function(t){const r=Ft(t);return new ue(r.seconds,r.nanos)}(n))}function Ic(n,e){return hs(n,e).canonicalString()}function hs(n,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function up(n){const e=re.fromString(n);return ie(yp(e)),e}function ds(n,e){return Ic(n.databaseId,e.path)}function hp(n){const e=up(n);return e.length===4?re.emptyPath():fp(e)}function dp(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fp(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ja(n,e,t){return{name:ds(n,e),fields:t.value.mapValue.fields}}function pp(n,e){let t;if(e instanceof Kn)t={update:ja(n,e.key,e.value)};else if(e instanceof Tc)t={delete:ds(n,e.key)};else if(e instanceof Ht)t={update:ja(n,e.key,e.data),updateMask:_p(e.fieldMask)};else{if(!(e instanceof np))return B();t={verify:ds(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Bn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Gr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw B()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:cp(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B()}(n,e.precondition)),t}function gp(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?Zt(i.updateTime):Zt(o);return a.isEqual(te.min())&&(a=Zt(o)),new Zf(a,i.transformResults||[])}(t,e))):[]}function mp(n){let e=hp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ie(r===1);const _=t.from[0];_.allDescendants?i=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=function(I){const S=wc(I);return S instanceof Et&&sc(S)?S.getFilters():[S]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(S=>function(k){return new zr(Xt(k.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(t.orderBy));let u=null;t.limit&&(u=function(I){let S;return S=typeof I=="object"?I.value:I,Cs(S)?null:S}(t.limit));let h=null;t.startAt&&(h=function(I){const S=!!I.before,D=I.values||[];return new Hr(D,S)}(t.startAt));let f=null;return t.endAt&&(f=function(I){const S=!I.before,D=I.values||[];return new Hr(D,S)}(t.endAt)),Uf(e,i,a,o,u,"F",h,f)}function wc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xt(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xt(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Xt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Xt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Et.create(t.compositeFilter.filters.map(r=>wc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(t.compositeFilter.op))}(n):B()}function Xt(n){return ge.fromServerFormat(n.fieldPath)}function _p(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function yp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class vp{constructor(e){this.Tt=e}}function Ep(n){const e=mp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cs(e,e.limit,"L"):e}/**
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
 */class Tp{constructor(){this.Tn=new Ip}addToCollectionParentIndex(e,t){return this.Tn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(vt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(vt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Ip{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new me(re.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(re.comparator)).toArray()}}/**
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
 */const Ba={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ac=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Ac,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
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
 */class ln{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ln(0)}static Un(){return new ln(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="LruGarbageCollector",wp=1048576;function Ha([n,e],[t,r]){const i=Q(n,t);return i===0?Q(e,r):i}class Ap{constructor(e){this.Hn=e,this.buffer=new me(Ha),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ha(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rp{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){O($a,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gn(t)?O($a,"Ignoring IndexedDB error during garbage collection: ",t):await bs(t)}await this.er(3e5)})}}class bp{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ss.ae);const r=new Ap(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Ba)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ba):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,o,a,u,h,f;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,a=Date.now(),this.nthSequenceNumber(e,i))).next(I=>(r=I,u=Date.now(),this.removeTargets(e,r,t))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(I=>(f=Date.now(),Qt()<=$.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${I} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Sp(n,e){return new bp(n,e)}/**
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
 */class Pp{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class kp{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&xn(r.mutation,i,Fe.empty(),ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Ie()){const i=Dt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ar();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Dt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Ie()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=qr();const a=On(),u=function(){return On()}();return t.forEach((h,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Ht)?o=o.insert(f.key,f):_!==void 0?(a.set(f.key,_.mutation.getFieldMask()),xn(_.mutation,f,_.mutation.getFieldMask(),ue.now())):a.set(f.key,Fe.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,_)=>a.set(f,_)),t.forEach((f,_)=>{var I;return u.set(f,new Cp(_,(I=a.get(f))!==null&&I!==void 0?I:null))}),u))}recalculateAndSaveOverlays(e,t){const r=On();let i=new De((a,u)=>a-u),o=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let _=r.get(h)||Fe.empty();_=u.applyToLocalView(f,_),r.set(h,_);const I=(i.get(u.batchId)||Ie()).add(h);i=i.insert(u.batchId,I)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),f=h.key,_=h.value,I=fc();_.forEach(S=>{if(!o.has(S)){const D=vc(t.get(S),r.get(S));D!==null&&I.set(S,D),o=o.add(S)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,I))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):jf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):b.resolve(Dt());let u=Un,h=o;return a.next(f=>b.forEach(f,(_,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(_)?b.resolve():this.remoteDocumentCache.getEntry(e,_).next(S=>{h=h.insert(_,S)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,Ie())).next(_=>({batchId:u,changes:dc(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next(r=>{let i=Ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Ar();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,h=>{const f=function(I,S){return new si(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,r,i).next(_=>{_.forEach((I,S)=>{a=a.insert(I,S)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,f)=>{const _=f.getKey();a.get(_)===null&&(a=a.insert(_,Le.newInvalidDocument(_)))});let u=Ar();return a.forEach((h,f)=>{const _=o.get(h);_!==void 0&&xn(_.mutation,f,Fe.empty(),ue.now()),Vs(t,f)&&(u=u.insert(h,f))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return b.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Zt(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:Ep(i.bundledQuery),readTime:Zt(i.readTime)}}(t)),b.resolve()}}/**
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
 */class Np{constructor(){this.overlays=new De(F.comparator),this.Rr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Dt();return b.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Et(e,t,o)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Dt(),o=t.length+1,a=new F(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new De((f,_)=>f-_);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Dt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const u=Dt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,_)=>u.set(f,_)),!(u.size()>=i)););return b.resolve(u)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ip(t,r));let o=this.Rr.get(t);o===void 0&&(o=Ie(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
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
 */class Op{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class Us{constructor(){this.Vr=new me(le.mr),this.gr=new me(le.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new le(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new le(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new F(new re([])),r=new le(t,e),i=new le(t,e+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new F(new re([])),r=new le(t,e),i=new le(t,e+1);let o=Ie();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new le(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return F.comparator(e.key,t.key)||Q(e.Cr,t.Cr)}static pr(e,t){return Q(e.Cr,t.Cr)||F.comparator(e.key,t.key)}}/**
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
 */class xp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new me(le.mr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new rp(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Mr=this.Mr.add(new le(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Ps:this.Fr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const u=this.Or(a.Cr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(Q);return t.forEach(i=>{const o=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],u=>{r=r.add(u.Cr)})}),b.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const a=new le(new F(o),0);let u=new me(Q);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(u=u.add(h.Cr)),!0)},a),b.resolve(this.Br(u))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ie(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return b.forEach(t.mutations,i=>{const o=new le(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new le(t,0),i=this.Mr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Vp{constructor(e){this.kr=e,this.docs=function(){return new De(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let r=qr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Le.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=qr();const a=t.path,u=new F(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||gf(pf(_),r)<=0||(i.has(_.key)||Vs(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,i){B()}qr(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Mp(this)}getSize(e){return b.resolve(this.size)}}class Mp extends Pp{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class Lp{constructor(e){this.persistence=e,this.Qr=new $t(t=>Os(t),xs),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Us,this.targetCount=0,this.Ur=ln.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),b.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.zn(t),b.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Qr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this.Kr.containsKey(t))}}/**
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
 */class Rc{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ss(0),this.zr=!1,this.zr=!0,this.jr=new Op,this.referenceDelegate=e(this),this.Hr=new Lp(this),this.indexManager=new Tp,this.remoteDocumentCache=function(i){return new Vp(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new vp(t),this.Yr=new Dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Np,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new xp(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const i=new Up(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(e,t){return b.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Up extends _f{constructor(e){super(),this.currentSequenceNumber=e}}class Fs{constructor(e){this.persistence=e,this.ti=new Us,this.ni=null}static ri(e){return new Fs(e)}get ii(){if(this.ni)return this.ni;throw B()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),b.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ii,r=>{const i=F.fromPath(r);return this.si(e,i).next(o=>{o||t.removeEntry(i,te.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return b.or([()=>b.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Kr{constructor(e,t){this.persistence=e,this.oi=new $t(r=>Ef(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Sp(this,t)}static ri(e,t){return new Kr(e,t)}Zr(){}Xr(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return b.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(o=>o?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(u=>{u||(r++,o.removeEntry(a,te.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),b.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=kr(e.data.value)),t}ar(e,t,r){return b.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class js{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=Ie(),i=Ie();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new js(e,t.fromCache,r,i)}}/**
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
 */class Fp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jp{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return xh()?8:yf(we())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.rs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Fp;return this._s(e,t,a).next(u=>{if(o.result=u,this.Xi)return this.us(e,t,a,u.size)})}).next(()=>o.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Qt()<=$.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),b.resolve()):(Qt()<=$.DEBUG&&O("QueryEngine","Query:",Cn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Qt()<=$.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xt(t))):b.resolve())}rs(e,t){if(Va(t))return b.resolve(null);let r=xt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=cs(t,null,"F"),r=xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Ie(...o);return this.ns.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const f=this.cs(t,u);return this.ls(t,f,a,h.readTime)?this.rs(e,cs(t,null,"F")):this.hs(e,f,t,h)}))})))}ss(e,t,r,i){return Va(t)||i.isEqual(te.min())?b.resolve(null):this.ns.getDocuments(e,r).next(o=>{const a=this.cs(t,o);return this.ls(t,a,r,i)?b.resolve(null):(Qt()<=$.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Cn(t)),this.hs(e,a,t,ff(i,Un)).next(u=>u))})}cs(e,t){let r=new me($f(e));return t.forEach((i,o)=>{Vs(e,o)&&(r=r.add(o))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(e,t,r){return Qt()<=$.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Cn(t)),this.ns.getDocumentsMatchingQuery(e,t,vt.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="LocalStore";class $p{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new De(Q),this.Is=new $t(o=>Os(o),xs),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kp(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Hp(n,e,t,r){return new $p(n,e,t,r)}async function bc(n,e){const t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Ie();for(const f of i){a.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){u.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:a,addedBatchIds:u}))})})}function zp(n,e){const t=Z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(u,h,f,_){const I=f.batch,S=I.keys();let D=b.resolve();return S.forEach(k=>{D=D.next(()=>_.getEntry(h,k)).next(U=>{const x=f.docVersions.get(k);ie(x!==null),U.version.compareTo(x)<0&&(I.applyToRemoteDocument(U,f),U.isValidDocument()&&(U.setReadTime(f.commitVersion),_.addEntry(U)))})}),D.next(()=>u.mutationQueue.removeMutationBatch(h,I))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Ie();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function qp(n){const e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Wp(n,e){const t=Z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ps),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class za{constructor(){this.activeTargetIds=Kf()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gp{constructor(){this.ho=new za,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new za,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kp{To(e){}shutdown(){}}/**
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
 */const qa="ConnectivityMonitor";class Wa{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){O(qa,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){O(qa,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rr=null;function fs(){return Rr===null?Rr=function(){return 268435456+Math.round(2147483648*Math.random())}():Rr++,"0x"+Rr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="RestConnection",Qp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xp{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Br?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,t,r,i,o){const a=fs(),u=this.So(e,t.toUriEncodedString());O(Wi,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,i,o),this.vo(e,u,h,r).then(f=>(O(Wi,`Received RPC '${e}' ${a}: `,f),f),f=>{throw ii(Wi,`RPC '${e}' ${a} failed with error: `,f,"url: ",u,"request:",r),f})}Co(e,t,r,i,o,a){return this.bo(e,t,r,i,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}So(e,t){const r=Qp[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Jp{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Ee="WebChannelConnection";class Yp extends Xp{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const o=fs();return new Promise((a,u)=>{const h=new Bl;h.setWithCredentials(!0),h.listenOnce($l.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Cr.NO_ERROR:const _=h.getResponseJson();O(Ee,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(_)),a(_);break;case Cr.TIMEOUT:O(Ee,`RPC '${e}' ${o} timed out`),u(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Cr.HTTP_ERROR:const I=h.getStatus();if(O(Ee,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const k=function(x){const K=x.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(K)>=0?K:P.UNKNOWN}(D.status);u(new V(k,D.message))}else u(new V(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new V(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{O(Ee,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);O(Ee,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",f,r,15)})}Wo(e,t,r){const i=fs(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ql(),u=zl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const _=o.join("");O(Ee,`Creating RPC '${e}' stream ${i}: ${_}`,h);const I=a.createWebChannel(_,h);let S=!1,D=!1;const k=new Jp({Fo:x=>{D?O(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(S||(O(Ee,`Opening RPC '${e}' stream ${i} transport.`),I.open(),S=!0),O(Ee,`RPC '${e}' stream ${i} sending:`,x),I.send(x))},Mo:()=>I.close()}),U=(x,K,z)=>{x.listen(K,G=>{try{z(G)}catch(q){setTimeout(()=>{throw q},0)}})};return U(I,kn.EventType.OPEN,()=>{D||(O(Ee,`RPC '${e}' stream ${i} transport opened.`),k.Qo())}),U(I,kn.EventType.CLOSE,()=>{D||(D=!0,O(Ee,`RPC '${e}' stream ${i} transport closed`),k.Ko())}),U(I,kn.EventType.ERROR,x=>{D||(D=!0,ii(Ee,`RPC '${e}' stream ${i} transport errored:`,x),k.Ko(new V(P.UNAVAILABLE,"The operation could not be completed")))}),U(I,kn.EventType.MESSAGE,x=>{var K;if(!D){const z=x.data[0];ie(!!z);const G=z,q=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(q){O(Ee,`RPC '${e}' stream ${i} received error:`,q);const Pe=q.status;let Y=function(m){const y=oe[m];if(y!==void 0)return op(y)}(Pe),E=q.message;Y===void 0&&(Y=P.INTERNAL,E="Unknown error status: "+Pe+" with message "+q.message),D=!0,k.Ko(new V(Y,E)),I.close()}else O(Ee,`RPC '${e}' stream ${i} received:`,z),k.Uo(z)}}),U(u,Hl.STAT_EVENT,x=>{x.stat===is.PROXY?O(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===is.NOPROXY&&O(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.$o()},0),k}}function Gi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){return new ap(n,!0)}/**
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
 */class Sc{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ga="PersistentStream";class Zp{constructor(e,t,r,i,o,a,u,h){this.Ti=e,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Sc(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new V(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return O(Ga,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(O(Ga,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eg extends Zp{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=gp(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=dp(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>pp(this.serializer,r))};this.I_(t)}}/**
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
 */class tg{}class ng extends tg{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.bo(e,hs(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(P.UNKNOWN,o.toString())})}Co(e,t,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Co(e,hs(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class rg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ut(t),this.N_=!1):O("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Qn="RemoteStore";class ig{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{Jn(this)&&(O(Qn,"Restarting streams for network reachability change."),await async function(h){const f=Z(h);f.W_.add(4),await Xn(f),f.j_.set("Unknown"),f.W_.delete(4),await ci(f)}(this))})}),this.j_=new rg(r,i)}}async function ci(n){if(Jn(n))for(const e of n.G_)await e(!0)}async function Xn(n){for(const e of n.G_)await e(!1)}function Jn(n){return Z(n).W_.size===0}async function Pc(n,e,t){if(!Gn(e))throw e;n.W_.add(1),await Xn(n),n.j_.set("Offline"),t||(t=()=>qp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O(Qn,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ci(n)})}function Cc(n,e){return e().catch(t=>Pc(n,t,e))}async function ui(n){const e=Z(n),t=Tt(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Ps;for(;sg(e);)try{const i=await Wp(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,og(e,i)}catch(i){await Pc(e,i)}kc(e)&&Dc(e)}function sg(n){return Jn(n)&&n.K_.length<10}function og(n,e){n.K_.push(e);const t=Tt(n);t.c_()&&t.b_&&t.S_(e.mutations)}function kc(n){return Jn(n)&&!Tt(n).u_()&&n.K_.length>0}function Dc(n){Tt(n).start()}async function ag(n){Tt(n).C_()}async function lg(n){const e=Tt(n);for(const t of n.K_)e.S_(t.mutations)}async function cg(n,e,t){const r=n.K_.shift(),i=Ls.from(r,e,t);await Cc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ui(n)}async function ug(n,e){e&&Tt(n).b_&&await async function(r,i){if(function(a){return sp(a)&&a!==P.ABORTED}(i.code)){const o=r.K_.shift();Tt(r).h_(),await Cc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await ui(r)}}(n,e),kc(n)&&Dc(n)}async function Ka(n,e){const t=Z(n);t.asyncQueue.verifyOperationInProgress(),O(Qn,"RemoteStore received new credentials");const r=Jn(t);t.W_.add(3),await Xn(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ci(t)}async function hg(n,e){const t=Z(n);e?(t.W_.delete(2),await ci(t)):e||(t.W_.add(2),await Xn(t),t.j_.set("Unknown"))}function Tt(n){return n.Y_||(n.Y_=function(t,r,i){const o=Z(t);return o.M_(),new eg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:ag.bind(null,n),Lo:ug.bind(null,n),D_:lg.bind(null,n),v_:cg.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ui(n)):(await n.Y_.stop(),n.K_.length>0&&(O(Qn,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class Bs{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new Bs(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nc(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),Gn(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}class dg{constructor(){this.queries=Qa(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=Z(t),o=i.queries;i.queries=Qa(),o.forEach((a,u)=>{for(const h of u.ta)h.onError(r)})})(this,new V(P.ABORTED,"Firestore shutting down"))}}function Qa(){return new $t(n=>uc(n),cc)}function fg(n){n.ia.forEach(e=>{e.next()})}var Xa,Ja;(Ja=Xa||(Xa={}))._a="default",Ja.Cache="cache";const pg="SyncEngine";class gg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new $t(u=>uc(u),cc),this.qa=new Map,this.Qa=new Set,this.$a=new De(F.comparator),this.Ka=new Map,this.Ua=new Us,this.Wa={},this.Ga=new Map,this.za=ln.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function mg(n,e,t){const r=Eg(n);try{const i=await function(a,u){const h=Z(a),f=ue.now(),_=u.reduce((D,k)=>D.add(k.key),Ie());let I,S;return h.persistence.runTransaction("Locally write mutations","readwrite",D=>{let k=qr(),U=Ie();return h.ds.getEntries(D,_).next(x=>{k=x,k.forEach((K,z)=>{z.isValidDocument()||(U=U.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(D,k)).next(x=>{I=x;const K=[];for(const z of u){const G=tp(z,I.get(z.key).overlayedDocument);G!=null&&K.push(new Ht(z.key,G,nc(G.value.mapValue),Ye.exists(!0)))}return h.mutationQueue.addMutationBatch(D,f,K,u)}).next(x=>{S=x;const K=x.applyToLocalDocumentSet(I,U);return h.documentOverlayCache.saveOverlays(D,x.batchId,K)})}).then(()=>({batchId:S.batchId,changes:dc(I)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let f=a.Wa[a.currentUser.toKey()];f||(f=new De(Q)),f=f.insert(u,h),a.Wa[a.currentUser.toKey()]=f}(r,i.batchId,t),await hi(r,i.changes),await ui(r.remoteStore)}catch(i){const o=Nc(i,"Failed to persist write");t.reject(o)}}function Ya(n,e,t){const r=Z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((o,a)=>{const u=a.view.sa(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=Z(a);h.onlineState=u;let f=!1;h.queries.forEach((_,I)=>{for(const S of I.ta)S.sa(u)&&(f=!0)}),f&&fg(h)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _g(n,e){const t=Z(n),r=e.batch.batchId;try{const i=await zp(t.localStore,e);xc(t,r,null),Oc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hi(t,i)}catch(i){await bs(i)}}async function yg(n,e,t){const r=Z(n);try{const i=await function(a,u){const h=Z(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let _;return h.mutationQueue.lookupMutationBatch(f,u).next(I=>(ie(I!==null),_=I.keys(),h.mutationQueue.removeMutationBatch(f,I))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_)).next(()=>h.localDocuments.getDocuments(f,_))})}(r.localStore,e);xc(r,e,t),Oc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hi(r,i)}catch(i){await bs(i)}}function Oc(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function xc(n,e,t){const r=Z(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}async function hi(n,e,t){const r=Z(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((u,h)=>{a.push(r.Ha(h,e,t).then(f=>{var _;if((f||t)&&r.isPrimaryClient){const I=f?!f.fromCache:(_=void 0)===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){i.push(f);const I=js.Yi(h.targetId,f);o.push(I)}}))}),await Promise.all(a),r.La.p_(i),await async function(h,f){const _=Z(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>b.forEach(f,S=>b.forEach(S.Hi,D=>_.persistence.referenceDelegate.addReference(I,S.targetId,D)).next(()=>b.forEach(S.Ji,D=>_.persistence.referenceDelegate.removeReference(I,S.targetId,D)))))}catch(I){if(!Gn(I))throw I;O(Bp,"Failed to update sequence numbers: "+I)}for(const I of f){const S=I.targetId;if(!I.fromCache){const D=_.Ts.get(S),k=D.snapshotVersion,U=D.withLastLimboFreeSnapshotVersion(k);_.Ts=_.Ts.insert(S,U)}}}(r.localStore,o))}async function vg(n,e){const t=Z(n);if(!t.currentUser.isEqual(e)){O(pg,"User change. New user:",e.toKey());const r=await bc(t.localStore,e);t.currentUser=e,function(o,a){o.Ga.forEach(u=>{u.forEach(h=>{h.reject(new V(P.CANCELLED,a))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hi(t,r.Rs)}}function Eg(n){const e=Z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_g.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yg.bind(null,e),e}class Qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=li(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Hp(this.persistence,new jp,e.initialUser,this.serializer)}Xa(e){return new Rc(Fs.ri,this.serializer)}Za(e){return new Gp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qr.provider={build:()=>new Qr};class Tg extends Qr{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ie(this.persistence.referenceDelegate instanceof Kr);const r=this.persistence.referenceDelegate.garbageCollector;return new Rp(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Rc(r=>Kr.ri(r,t),this.serializer)}}class ps{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ya(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vg.bind(null,this.syncEngine),await hg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dg}()}createDatastore(e){const t=li(e.databaseInfo.databaseId),r=function(o){return new Yp(o)}(e.databaseInfo);return function(o,a,u,h){return new ng(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new ig(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Ya(this.syncEngine,t,0),function(){return Wa.D()?new Wa:new Kp}())}createSyncEngine(e,t){return function(i,o,a,u,h,f,_){const I=new gg(i,o,a,u,h,f);return _&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=Z(i);O(Qn,"RemoteStore shutting down."),o.W_.add(5),await Xn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ps.provider={build:()=>new ps};/**
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
 */const It="FirestoreClient";class Ig{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=Gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{O(It,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(O(It,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Nc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ki(n,e){n.asyncQueue.verifyOperationInProgress(),O(It,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Za(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wg(n);O(It,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ka(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ka(e.remoteStore,i)),n._onlineComponents=e}async function wg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(It,"Using user provided OfflineComponentProvider");try{await Ki(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await Ki(n,new Qr)}}else O(It,"Using default OfflineComponentProvider"),await Ki(n,new Tg(void 0));return n._offlineComponents}async function Ag(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(It,"Using user provided OnlineComponentProvider"),await Za(n,n._uninitializedComponentsProvider._online)):(O(It,"Using default OnlineComponentProvider"),await Za(n,new ps))),n._onlineComponents}function Rg(n){return Ag(n).then(e=>e.syncEngine)}/**
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
 */function Vc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=new Map;/**
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
 */function Mc(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function bg(n,e,t,r){if(e===!0&&r===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tl(n){if(!F.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nl(n){if(F.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function $s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B()}function Lc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$s(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="firestore.googleapis.com",rl=!0;class il{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uc,this.ssl=rl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rl;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ac;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wp)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class di{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sf;switch(r.type){case"firstParty":return new cf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=el.get(t);r&&(O("ComponentProvider","Removing Datastore"),el.delete(t),r.terminate())}(this),Promise.resolve()}}function Sg(n,e,t,r={}){var i;const o=(n=Lc(n,di))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;o.host!==Uc&&o.host!==u&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Mt(h,a)&&(n._setSettings(h),r.mockUserToken)){let f,_;if(typeof r.mockUserToken=="string")f=r.mockUserToken,_=Te.MOCK_USER;else{f=Sh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Te(I)}n._authCredentials=new of(new Wl(f,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hs(this.firestore,e,this._query)}}class Ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}}class _t extends Hs{constructor(e,t,r){super(e,t,Ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new F(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function Pg(n,e,...t){if(n=Ve(n),Mc("collection","path",e),n instanceof di){const r=re.fromString(e,...t);return nl(r),new _t(n,null,r)}{if(!(n instanceof Ze||n instanceof _t))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return nl(r),new _t(n.firestore,null,r)}}function Cg(n,e,...t){if(n=Ve(n),arguments.length===1&&(e=Gl.newId()),Mc("doc","path",e),n instanceof di){const r=re.fromString(e,...t);return tl(r),new Ze(n,null,new F(r))}{if(!(n instanceof Ze||n instanceof _t))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return tl(r),new Ze(n.firestore,n instanceof _t?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="AsyncQueue";class ol{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Sc(this,"async_queue_retry"),this.bu=()=>{const r=Gi();r&&O(sl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=Gi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Gi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ot;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Gn(e))throw e;O(sl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=Bs.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&B()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Fc extends di{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ol,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ol(e),this._firestoreClient=void 0,await e}}}function kg(n,e){const t=typeof n=="object"?n:ws(),r=typeof n=="string"?n:Br,i=Wn(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=bh("firestore");o&&Sg(i,...o)}return i}function Dg(n){if(n._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ng(n),n._firestoreClient}function Ng(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,f,_){return new Af(u,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Vc(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Ig(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(ze.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $n(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this._methodName=e}}/**
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
 */class $c{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */class Hc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Og=/^__.*__$/;class xg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kn(e,this.data,t,this.fieldTransforms)}}function zc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class zs{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new zs(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xr(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zc(this.Lu)&&Og.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Vg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||li(e)}ju(e,t,r,i=!1){return new zs({Lu:e,methodName:t,zu:r,path:ge.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mg(n){const e=n._freezeSettings(),t=li(n._databaseId);return new Vg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Lg(n,e,t,r,i,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,e,t,i);Kc("Data must be an object, but it was:",a,r);const u=Wc(r,a);let h,f;if(o.merge)h=new Fe(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const I of o.mergeFields){const S=Ug(e,I,t);if(!a.contains(S))throw new V(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Bg(_,S)||_.push(S)}h=new Fe(_),f=a.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=a.fieldTransforms;return new xg(new Ue(u),h,f)}function qc(n,e){if(Gc(n=Ve(n)))return Kc("Unsupported field value:",e,n),Wc(n,e);if(n instanceof Bc)return function(r,i){if(!zc(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=qc(u,i.Uu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ue.fromDate(r);return{timestampValue:us(i.serializer,o)}}if(r instanceof ue){const o=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:us(i.serializer,o)}}if(r instanceof $c)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $n)return{bytesValue:lp(i.serializer,r._byteString)};if(r instanceof Ze){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ic(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Hc)return function(a,u){return{mapValue:{fields:{[ec]:{stringValue:tc},[ss]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw u.Wu("VectorValues must only contain numeric values.");return Ms(u.serializer,f)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${$s(r)}`)}(n,e)}function Wc(n,e){const t={};return Ql(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fn(n,(r,i)=>{const o=qc(i,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Gc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof $c||n instanceof $n||n instanceof Ze||n instanceof Bc||n instanceof Hc)}function Kc(n,e,t){if(!Gc(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=$s(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Ug(n,e,t){if((e=Ve(e))instanceof jc)return e._internalPath;if(typeof e=="string")return jg(n,e);throw Xr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fg=new RegExp("[~\\*/\\[\\]]");function jg(n,e,t){if(e.search(Fg)>=0)throw Xr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw Xr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xr(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new V(P.INVALID_ARGUMENT,u+n+h)}function Bg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function Hg(n,e){const t=Lc(n.firestore,Fc),r=Cg(n),i=$g(n.converter,e);return zg(t,[Lg(Mg(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ye.exists(!1))]).then(()=>r)}function zg(n,e){return function(r,i){const o=new Ot;return r.asyncQueue.enqueueAndForget(async()=>mg(await Rg(r),i,o)),o.promise}(Dg(n),e)}(function(e,t=!0){(function(i){dn=i})(hn),yt(new et("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Fc(new af(r.getProvider("auth-internal")),new uf(a,r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $r(f.options.projectId,_)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Je(Ta,Ia,e),Je(Ta,Ia,"esm2017")})();function qs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Qc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qg=Qc,Xc=new un("auth","Firebase",Qc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new ri("@firebase/auth");function Wg(n,...e){Jr.logLevel<=$.WARN&&Jr.warn(`Auth (${hn}): ${n}`,...e)}function Or(n,...e){Jr.logLevel<=$.ERROR&&Jr.error(`Auth (${hn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n,...e){throw Ws(n,...e)}function $e(n,...e){return Ws(n,...e)}function Jc(n,e,t){const r=Object.assign(Object.assign({},qg()),{[e]:t});return new un("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return Jc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ws(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Xc.create(n,...e)}function L(n,e,...t){if(!n)throw Ws(e,...t)}function Ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Or(e),new Error(e)}function rt(n,e){n||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gg(){return al()==="http:"||al()==="https:"}function al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gg()||Dh()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ph()||Nh()}get(){return Kg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Yn(3e4,6e4);function Ks(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function pn(n,e,t,r,i={}){return Zc(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=qn(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const f=Object.assign({method:e,headers:h},o);return kh()||(f.referrerPolicy="no-referrer"),Yc.fetch()(eu(n,n.config.apiHost,t,u),f)})}async function Zc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xg),e);try{const i=new Zg(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw br(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw br(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw br(n,"user-disabled",a);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Jc(n,_,f);nt(n,_)}}catch(i){if(i instanceof it)throw i;nt(n,"network-request-failed",{message:String(i)})}}async function Yg(n,e,t,r,i={}){const o=await pn(n,e,t,r,i);return"mfaPendingCredential"in o&&nt(n,"multi-factor-auth-required",{_serverResponse:o}),o}function eu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Gs(n.config,i):`${n.config.apiScheme}://${i}`}class Zg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Jg.get())})}}function br(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=$e(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(n,e){return pn(n,"POST","/v1/accounts:delete",e)}async function tu(n,e){return pn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tm(n,e=!1){const t=Ve(n),r=await t.getIdToken(e),i=Qs(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Vn(Qi(i.auth_time)),issuedAtTime:Vn(Qi(i.iat)),expirationTime:Vn(Qi(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Qi(n){return Number(n)*1e3}function Qs(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Or("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dl(t);return i?JSON.parse(i):(Or("Failed to decode base64 JWT payload"),null)}catch(i){return Or("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ll(n){const e=Qs(n);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof it&&nm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function nm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Hn(n,tu(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?nu(o.providerUserInfo):[],u=sm(n.providerData,a),h=n.isAnonymous,f=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),_=h?f:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ms(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(n,I)}async function im(n){const e=Ve(n);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nu(n){return n.map(e=>{var{providerId:t}=e,r=qs(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(n,e){const t=await Zc(n,{},async()=>{const r=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=eu(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Yc.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function am(n,e){return pn(n,"POST","/v2/accounts:revokeToken",Ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ll(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=ll(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await om(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new en;return r&&(L(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(L(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n,e){L(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ms(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tm(this,e)}reload(){return im(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Be(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Hn(this,em(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,f,_;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,S=(i=t.email)!==null&&i!==void 0?i:void 0,D=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(u=t.tenantId)!==null&&u!==void 0?u:void 0,x=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,K=(f=t.createdAt)!==null&&f!==void 0?f:void 0,z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:G,emailVerified:q,isAnonymous:Pe,providerData:Y,stsTokenManager:E}=t;L(G&&E,e,"internal-error");const p=en.fromJSON(this.name,E);L(typeof G=="string",e,"internal-error"),ut(I,e.name),ut(S,e.name),L(typeof q=="boolean",e,"internal-error"),L(typeof Pe=="boolean",e,"internal-error"),ut(D,e.name),ut(k,e.name),ut(U,e.name),ut(x,e.name),ut(K,e.name),ut(z,e.name);const m=new Qe({uid:G,auth:e,email:S,emailVerified:q,displayName:I,isAnonymous:Pe,photoURL:k,phoneNumber:D,tenantId:U,stsTokenManager:p,createdAt:K,lastLoginAt:z});return Y&&Array.isArray(Y)&&(m.providerData=Y.map(y=>Object.assign({},y))),x&&(m._redirectEventId=x),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new en;i.updateFromServerResponse(t);const o=new Qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];L(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?nu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new en;u.updateFromIdToken(r);const h=new Qe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ms(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map;function Xe(n){rt(n instanceof Function,"Expected a class definition");let e=cl.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,cl.set(n,e),e)}/**
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
 */class ru{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ru.type="NONE";const ul=ru;/**
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
 */function xr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,o),this.fullPersistenceKey=xr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Xe(ul),e,r);const i=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Xe(ul);const a=xr(r,e.config.apiKey,e.name);let u=null;for(const f of t)try{const _=await f._get(a);if(_){const I=Qe._fromJSON(e,_);f!==o&&(u=I),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new tn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async f=>{if(f!==o)try{await f._remove(a)}catch{}})),new tn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(au(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cu(e))return"Blackberry";if(uu(e))return"Webos";if(su(e))return"Safari";if((e.includes("chrome/")||ou(e))&&!e.includes("edge/"))return"Chrome";if(lu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iu(n=we()){return/firefox\//i.test(n)}function su(n=we()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ou(n=we()){return/crios\//i.test(n)}function au(n=we()){return/iemobile/i.test(n)}function lu(n=we()){return/android/i.test(n)}function cu(n=we()){return/blackberry/i.test(n)}function uu(n=we()){return/webos/i.test(n)}function Xs(n=we()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function lm(n=we()){var e;return Xs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cm(){return Oh()&&document.documentMode===10}function hu(n=we()){return Xs(n)||lu(n)||uu(n)||cu(n)||/windows phone/i.test(n)||au(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n,e=[]){let t;switch(n){case"Browser":t=hl(we());break;case"Worker":t=`${hl(we())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hn}/${r}`}/**
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
 */class um{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hm(n,e={}){return pn(n,"GET","/v2/passwordPolicy",Ks(n,e))}/**
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
 */const dm=6;class fm{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:dm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dl(this),this.idTokenSubscription=new dl(this),this.beforeStateQueue=new um(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tu(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Be(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Be(this.app))return Promise.reject(Vt(this));const t=e?Ve(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Be(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Be(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hm(this),t=new fm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await am(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=du(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Wg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Js(n){return Ve(n)}class dl{constructor(e){this.auth=e,this.observer=null,this.addObserver=jh(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gm(n){Ys=n}function mm(n){return Ys.loadJS(n)}function _m(){return Ys.gapiScript}function ym(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n,e){const t=Wn(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Mt(o,e??{}))return i;nt(i,"already-initialized")}return t.initialize({options:e})}function Em(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tm(n,e,t){const r=Js(n);L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=fu(e),{host:a,port:u}=Im(e),h=u===null?"":`:${u}`,f={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){L(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),L(Mt(f,r.config.emulator)&&Mt(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,wm()}function fu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Im(n){const e=fu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:fl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:fl(a)}}}function fl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e){return Yg(n,"POST","/v1/accounts:signInWithIdp",Ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="http://localhost";class Bt extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):nt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=qs(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Bt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:Am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zn extends gu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Zn{constructor(){super("facebook.com")}static credential(e){return Bt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Zn{constructor(){super("github.com")}static credential(e){return Bt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Zn{constructor(){super("twitter.com")}static credential(e,t){return Bt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Qe._fromIdTokenResponse(e,r,i),a=pl(r);return new cn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=pl(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function pl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends it{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Zr(e,t,r,i)}}function mu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(n,o,e,r):o})}async function Rm(n,e,t=!1){const r=await Hn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cn._forOperation(n,"link",r)}/**
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
 */async function bm(n,e,t=!1){const{auth:r}=n;if(Be(r.app))return Promise.reject(Vt(r));const i="reauthenticate";try{const o=await Hn(n,mu(r,i,e,n),t);L(o.idToken,r,"internal-error");const a=Qs(o.idToken);L(a,r,"internal-error");const{sub:u}=a;return L(n.uid===u,r,"user-mismatch"),cn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(n,e,t=!1){if(Be(n.app))return Promise.reject(Vt(n));const r="signIn",i=await mu(n,r,e),o=await cn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Pm(n,e,t,r){return Ve(n).onIdTokenChanged(e,t,r)}function Cm(n,e,t){return Ve(n).beforeAuthStateChanged(e,t)}const ei="__sak";/**
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
 */class _u{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ei,"1"),this.storage.removeItem(ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=1e3,Dm=10;class yu extends _u{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);cm()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yu.type="LOCAL";const Nm=yu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends _u{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vu.type="SESSION";const Eu=vu;/**
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
 */function Om(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new fi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async f=>f(t.origin,o)),h=await Om(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class xm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const f=Zs("",20);i.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(S.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function Vm(n){He().location.href=n}/**
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
 */function Tu(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Um(){return Tu()?self:null}/**
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
 */const Iu="firebaseLocalStorageDb",Fm=1,ti="firebaseLocalStorage",wu="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function pi(n,e){return n.transaction([ti],e?"readwrite":"readonly").objectStore(ti)}function jm(){const n=indexedDB.deleteDatabase(Iu);return new er(n).toPromise()}function _s(){const n=indexedDB.open(Iu,Fm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ti,{keyPath:wu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ti)?e(r):(r.close(),await jm(),e(await _s()))})})}async function gl(n,e,t){const r=pi(n,!0).put({[wu]:e,value:t});return new er(r).toPromise()}async function Bm(n,e){const t=pi(n,!1).get(e),r=await new er(t).toPromise();return r===void 0?null:r.value}function ml(n,e){const t=pi(n,!0).delete(e);return new er(t).toPromise()}const $m=800,Hm=3;class Au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _s(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fi._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Mm(),!this.activeServiceWorker)return;this.sender=new xm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _s();return await gl(e,ei,"1"),await ml(e,ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>gl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Bm(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=pi(i,!1).getAll();return new er(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Au.type="LOCAL";const zm=Au;new Yn(3e4,6e4);/**
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
 */function qm(n,e){return e?Xe(e):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class eo extends pu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Wm(n){return Sm(n.auth,new eo(n),n.bypassAuthState)}function Gm(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),bm(t,new eo(n),n.bypassAuthState)}async function Km(n){const{auth:e,user:t}=n;return L(t,e,"internal-error"),Rm(t,new eo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Wm;case"linkViaPopup":case"linkViaRedirect":return Km;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:nt(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=new Yn(2e3,1e4);class Jt extends Ru{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=Zs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qm.get())};e()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="pendingRedirect",Vr=new Map;class Jm extends Ru{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await Ym(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ym(n,e){const t=t_(e),r=e_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Zm(n,e){Vr.set(n._key(),e)}function e_(n){return Xe(n._redirectPersistence)}function t_(n){return xr(Xm,n.config.apiKey,n.name)}async function n_(n,e,t=!1){if(Be(n.app))return Promise.reject(Vt(n));const r=Js(n),i=qm(r,e),a=await new Jm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=10*60*1e3;class i_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($e(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r_&&this.cachedEventUids.clear(),this.cachedEventUids.has(_l(e))}saveEventToCache(e){this.cachedEventUids.add(_l(e)),this.lastProcessedEventTime=Date.now()}}function _l(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e={}){return pn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,l_=/^https?/;async function c_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await o_(n);for(const t of e)try{if(u_(t))return}catch{}nt(n,"unauthorized-domain")}function u_(n){const e=gs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!l_.test(t))return!1;if(a_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const h_=new Yn(3e4,6e4);function yl(){const n=He().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function d_(n){return new Promise((e,t)=>{var r,i,o;function a(){yl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yl(),t($e(n,"network-request-failed"))},timeout:h_.get()})}if(!((i=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=He().gapi)===null||o===void 0)&&o.load)a();else{const u=ym("iframefcb");return He()[u]=()=>{gapi.load?a():t($e(n,"network-request-failed"))},mm(`${_m()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function f_(n){return Mr=Mr||d_(n),Mr}/**
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
 */const p_=new Yn(5e3,15e3),g_="__/auth/iframe",m_="emulator/auth/iframe",__={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v_(n){const e=n.config;L(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gs(e,m_):`https://${n.config.authDomain}/${g_}`,r={apiKey:e.apiKey,appName:n.name,v:hn},i=y_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${qn(r).slice(1)}`}async function E_(n){const e=await f_(n),t=He().gapi;return L(t,n,"internal-error"),e.open({where:document.body,url:v_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:__,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=$e(n,"network-request-failed"),u=He().setTimeout(()=>{o(a)},p_.get());function h(){He().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const T_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I_=500,w_=600,A_="_blank",R_="http://localhost";class vl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b_(n,e,t,r=I_,i=w_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},T_),{width:r.toString(),height:i.toString(),top:o,left:a}),f=we().toLowerCase();t&&(u=ou(f)?A_:t),iu(f)&&(e=e||R_,h.scrollbars="yes");const _=Object.entries(h).reduce((S,[D,k])=>`${S}${D}=${k},`,"");if(lm(f)&&u!=="_self")return S_(e||"",u),new vl(null);const I=window.open(e||"",u,_);L(I,n,"popup-blocked");try{I.focus()}catch{}return new vl(I)}function S_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const P_="__/auth/handler",C_="emulator/auth/handler",k_=encodeURIComponent("fac");async function El(n,e,t,r,i,o){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hn,eventId:i};if(e instanceof gu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Fh(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,I]of Object.entries({}))a[_]=I}if(e instanceof Zn){const _=e.getScopes().filter(I=>I!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const h=await n._getAppCheckToken(),f=h?`#${k_}=${encodeURIComponent(h)}`:"";return`${D_(n)}?${qn(u).slice(1)}${f}`}function D_({config:n}){return n.emulator?Gs(n,C_):`https://${n.authDomain}/${P_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Eu,this._completeRedirectFn=n_,this._overrideRedirectResult=Zm}async _openPopup(e,t,r,i){var o;rt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await El(e,t,r,gs(),i);return b_(e,a,Zs())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await El(e,t,r,gs(),i);return Vm(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(rt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await E_(e),r=new i_(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xi,{type:Xi},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Xi];a!==void 0&&t(!!a),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hu()||su()||Xs()}}const O_=N_;var Tl="@firebase/auth",Il="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function M_(n){yt(new et("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;L(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:du(n)},f=new pm(r,i,o,h);return Em(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),yt(new et("auth-internal",e=>{const t=Js(e.getProvider("auth").getImmediate());return(r=>new x_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Tl,Il,V_(n)),Je(Tl,Il,"esm2017")}/**
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
 */const L_=5*60,U_=Vl("authIdTokenMaxAge")||L_;let wl=null;const F_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>U_)return;const i=t==null?void 0:t.token;wl!==i&&(wl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function j_(n=ws()){const e=Wn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vm(n,{popupRedirectResolver:O_,persistence:[zm,Nm,Eu]}),r=Vl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=F_(o.toString());Cm(t,a,()=>a(t.currentUser)),Pm(t,u=>a(u))}}const i=Ol("auth");return i&&Tm(t,`http://${i}`),t}function B_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}gm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=$e("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",B_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});M_("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Map,Su={activated:!1,tokenObservers:[]},$_={initialized:!1,enabled:!1};function ae(n){return ys.get(n)||Object.assign({},Su)}function H_(n,e){return ys.set(n,e),ys.get(n)}function gi(){return $_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="https://content-firebaseappcheck.googleapis.com/v1",z_="exchangeRecaptchaV3Token",q_="exchangeDebugToken",Al={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},W_=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,r,i,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Mn,this.pending.promise.catch(t=>{}),await K_(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Mn,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function K_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},ke=new un("appCheck","AppCheck",Q_);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function to(n){if(!ae(n).activated)throw ke.create("use-before-activation",{appName:n.name})}function Cu(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),o=e-t*3600*24-r*3600-i*60;let a="";return t&&(a+=Sr(t)+"d:"),r&&(a+=Sr(r)+"h:"),a+=Sr(i)+"m:"+Sr(o)+"s",a}function Sr(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const I=await i.getHeartbeatsHeader();I&&(r["X-Firebase-Client"]=I)}const o={method:"POST",body:JSON.stringify(e),headers:r};let a;try{a=await fetch(n,o)}catch(I){throw ke.create("fetch-network-error",{originalErrorMessage:I==null?void 0:I.message})}if(a.status!==200)throw ke.create("fetch-status-error",{httpStatus:a.status});let u;try{u=await a.json()}catch(I){throw ke.create("fetch-parse-error",{originalErrorMessage:I==null?void 0:I.message})}const h=u.ttl.match(/^([\d.]+)(s)$/);if(!h||!h[2]||isNaN(Number(h[1])))throw ke.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const f=Number(h[1])*1e3,_=Date.now();return{token:u.token,expireTimeMillis:_+f,issuedAtTimeMillis:_}}function X_(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Pu}/projects/${t}/apps/${r}:${z_}?key=${i}`,body:{recaptcha_v3_token:e}}}function ku(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${Pu}/projects/${t}/apps/${r}:${q_}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="firebase-app-check-database",Y_=1,zn="firebase-app-check-store",Du="debug-token";let Pr=null;function Nu(){return Pr||(Pr=new Promise((n,e)=>{try{const t=indexedDB.open(J_,Y_);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(ke.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(zn,{keyPath:"compositeKey"})}}}catch(t){e(ke.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Pr)}function Z_(n){return xu(Vu(n))}function ey(n,e){return Ou(Vu(n),e)}function ty(n){return Ou(Du,n)}function ny(){return xu(Du)}async function Ou(n,e){const r=(await Nu()).transaction(zn,"readwrite"),o=r.objectStore(zn).put({compositeKey:n,value:e});return new Promise((a,u)=>{o.onsuccess=h=>{a()},r.onerror=h=>{var f;u(ke.create("storage-set",{originalErrorMessage:(f=h.target.error)===null||f===void 0?void 0:f.message}))}})}async function xu(n){const t=(await Nu()).transaction(zn,"readonly"),i=t.objectStore(zn).get(n);return new Promise((o,a)=>{i.onsuccess=u=>{const h=u.target.result;o(h?h.value:void 0)},t.onerror=u=>{var h;a(ke.create("storage-get",{originalErrorMessage:(h=u.target.error)===null||h===void 0?void 0:h.message}))}})}function Vu(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new ri("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(n){if(Ts()){let e;try{e=await Z_(n)}catch(t){Nt.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Ji(n,e){return Ts()?ey(n,e).catch(t=>{Nt.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function iy(){let n;try{n=await ny()}catch{}if(n)return n;{const e=crypto.randomUUID();return ty(e).catch(t=>Nt.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){return gi().enabled}async function io(){const n=gi();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function sy(){const n=Nl(),e=gi();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Mn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(iy())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={error:"UNKNOWN_ERROR"};function ay(n){return Es.encodeString(JSON.stringify(n),!1)}async function vs(n,e=!1){const t=n.app;to(t);const r=ae(t);let i=r.token,o;if(i&&!Yt(i)&&(r.token=void 0,i=void 0),!i){const h=await r.cachedTokenPromise;h&&(Yt(h)?i=h:await Ji(t,void 0))}if(!e&&i&&Yt(i))return{token:i.token};let a=!1;if(ro())try{r.exchangeTokenPromise||(r.exchangeTokenPromise=no(ku(t,await io()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const h=await r.exchangeTokenPromise;return await Ji(t,h),r.token=h,{token:h.token}}catch(h){return h.code==="appCheck/throttled"?Nt.warn(h.message):Nt.error(h),Yi(h)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await ae(t).exchangeTokenPromise}catch(h){h.code==="appCheck/throttled"?Nt.warn(h.message):Nt.error(h),o=h}let u;return i?o?Yt(i)?u={token:i.token,internalError:o}:u=Yi(o):(u={token:i.token},r.token=i,await Ji(t,i)):u=Yi(o),a&&Uu(t,u),u}async function ly(n){const e=n.app;to(e);const{provider:t}=ae(e);if(ro()){const r=await io(),{token:i}=await no(ku(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function Mu(n,e,t,r){const{app:i}=n,o=ae(i),a={next:t,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&Yt(o.token)){const u=o.token;Promise.resolve().then(()=>{t({token:u.token}),bl(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>bl(n))}function Lu(n,e){const t=ae(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function bl(n){const{app:e}=n,t=ae(e);let r=t.tokenRefresher;r||(r=cy(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function cy(n){const{app:e}=n;return new G_(async()=>{const t=ae(e);let r;if(t.token?r=await vs(n,!0):r=await vs(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=ae(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Al.RETRIAL_MIN_WAIT,Al.RETRIAL_MAX_WAIT)}function Uu(n,e){const t=ae(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Yt(n){return n.expireTimeMillis-Date.now()>0}function Yi(n){return{token:ay(oy),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ae(this.app);for(const t of e)Lu(this.app,t.next);return Promise.resolve()}}function hy(n,e){return new uy(n,e)}function dy(n){return{getToken:e=>vs(n,e),getLimitedUseToken:()=>ly(n),addTokenListener:e=>Mu(n,"INTERNAL",e),removeTokenListener:e=>Lu(n.app,e)}}const fy="@firebase/app-check",py="0.8.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="https://www.google.com/recaptcha/api.js";function my(n,e){const t=new Mn,r=ae(n);r.reCAPTCHAState={initialized:t};const i=_y(n),o=Rl(!1);return o?Sl(n,e,o,i,t):Ey(()=>{const a=Rl(!1);if(!a)throw new Error("no recaptcha");Sl(n,e,a,i,t)}),t.promise}function Sl(n,e,t,r,i){t.ready(()=>{vy(n,e,t,r),i.resolve(t)})}function _y(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function yy(n){to(n);const t=await ae(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const o=ae(n).reCAPTCHAState;t.ready(()=>{r(t.execute(o.widgetId,{action:"fire_app_check"}))})})}function vy(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{ae(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ae(n).reCAPTCHAState.succeeded=!1}}),o=ae(n);o.reCAPTCHAState=Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}function Ey(n){const e=document.createElement("script");e.src=gy,e.onload=n,document.head.appendChild(e)}/**
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
 */class so{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,r;Iy(this._throttleData);const i=await yy(this._app).catch(a=>{throw ke.create("recaptcha-error")});if(!(!((e=ae(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw ke.create("recaptcha-error");let o;try{o=await no(X_(this._app,i),this._heartbeatServiceProvider)}catch(a){throw!((t=a.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=Ty(Number((r=a.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),ke.create("throttled",{time:Cu(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,o}initialize(e){this._app=e,this._heartbeatServiceProvider=Wn(e,"heartbeat"),my(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof so?this._siteKey===e._siteKey:!1}}function Ty(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+W_,httpStatus:n};{const t=e?e.backoffCount:0,r=Gh(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function Iy(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw ke.create("throttled",{time:Cu(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n=ws(),e){n=Ve(n);const t=Wn(n,"app-check");if(gi().initialized||sy(),ro()&&io().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return i;throw ke.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return Ay(n,e.provider,e.isTokenAutoRefreshEnabled),ae(n).isTokenAutoRefreshEnabled&&Mu(r,"INTERNAL",()=>{}),r}function Ay(n,e,t){const r=H_(n,Object.assign({},Su));r.activated=!0,r.provider=e,r.cachedTokenPromise=ry(n).then(i=>(i&&Yt(i)&&(r.token=i,Uu(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,r.provider.initialize(n)}const Ry="app-check",Pl="app-check-internal";function by(){yt(new et(Ry,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return hy(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Pl).initialize()})),yt(new et(Pl,n=>{const e=n.getProvider("app-check").getImmediate();return dy(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Je(fy,py)}by();const Sy={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.firebasestorage.app",messagingSenderId:"410453365556",appId:"1:410453365556:web:670182c618218ca1220b61"},oo=Ul(Sy),Py=kg(oo);j_(oo);wy(oo,{provider:new so("6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi")});const Cy={name:"peru",questionsURL:"https://josevalqui.github.io/votometro/combined_questions_peru_2026.json",votesURL:"https://josevalqui.github.io/votometro/combined_votes_peru_2026.json",processCandidateVote:n=>n,showLawInfo:!0,isPresidentialElection:!1},ky={name:"ecuador",questionsURL:"https://josevalqui.github.io/votometro/combined_questions_ecuador_2025.json",votesURL:"https://josevalqui.github.io/votometro/combined_votes_ecuador_2025.json",processCandidateVote:n=>typeof n=="string"?{"estoy de acuerdo":1,"no tengo una opinión sobre este tema":.5,"no estoy de acuerdo":0}[n.trim().toLowerCase()]??0:n,showLawInfo:!1,isPresidentialElection:!0},Ct={peru_parl_2026:Cy,ecuador_pres_2025:ky};function Dy(){const[n,e]=Se.useState([]),[t,r]=Se.useState([]),[i,o]=Se.useState(0),[a,u]=Se.useState([]),[h,f]=Se.useState([]),[_,I]=Se.useState(null),[S,D]=Se.useState(null),[k,U]=Se.useState({}),[x,K]=Se.useState(null),[z,G]=Se.useState(!1),[q,Pe]=Se.useState(null),Y=q?Ct[q]:{};Y.isPresidentialElection;const E={"Estoy de acuerdo":"A favor","No tengo una opinión sobre este tema":"Neutral","No estoy de acuerdo":"En contra"};Se.useEffect(()=>{if(!q)return;const N=Ct[q];fetch(N.questionsURL).then(M=>M.json()).then(M=>{Array.isArray(M)&&M.length>0?(e(M),u(Array(M.length).fill(null))):console.error("Invalid combined questions data:",M)}).catch(M=>console.error("Error fetching questions:",M))},[q]),Se.useEffect(()=>{n.length&&(f(Array(n.length).fill(3)),r(n))},[n]),Se.useEffect(()=>{if(_){const N=Ct[q],M=N.isPresidentialElection?_.individual_results:_.party_results;M&&M.length>0&&Ne(M[0],N.isPresidentialElection?"individual":"party")}},[_]);const p=N=>{u(M=>{const X=[...M];return X[i]=N,X}),i<n.length-1&&o(i+1)},m=()=>{i<n.length-1&&o(i+1)},y=()=>{i>0&&o(i-1)},v=()=>{console.log("Submitted answers:",n.map((N,M)=>({id:N.id,question:N.question,answer:a[M]||"Sin respuesta",weight:h[M]})))},w=async()=>{const N={userId:localStorage.getItem("userId")||Date.now(),answers:a,createdAt:new Date};localStorage.setItem("userId",N.userId);try{const M=await Hg(Pg(Py,"quizAnswers"),N);console.log("Document written with ID:",M.id)}catch(M){console.error("Error adding document:",M)}},g=()=>{v(),w(),D(null);const N=Ct[q];G(N.isPresidentialElection),o(n.length);const M={};n.forEach((X,se)=>{const xe=a[se]||"No tengo una opinión sobre este tema",Ae=xe.trim().toLowerCase();let j={"estoy de acuerdo":1,"no tengo una opinión sobre este tema":.5,"no estoy de acuerdo":0}[Ae];j===void 0&&(console.log(`Mapping failed for answer: "${xe}". Falling back to 0.5.`),j=.5),X.polarity==="-"&&(j=j===1?0:j===0?1:j),M[X.id]={answer:j,weight:h[se]}}),fetch(N.votesURL).then(X=>X.json()).then(X=>{const xe=Object.values(X.candidates.processed).map(Ae=>{let he=0,j=0;Object.entries(Ae.votes).forEach(([ot,tr])=>{if(tr===null)return;let zt=N.processCandidateVote(tr);const nr=N.name==="ecuador"?ot:ot.split("_").slice(0,-1).join("_");if(M[nr]){const{answer:mi,weight:At}=M[nr];he+=Math.abs(mi-zt)*At,j+=At}});const st=j>0?Math.round((1-he/j)*100):0;return{name:Ae.name,party:Ae.party,similarity_score:st}});if(xe.sort((Ae,he)=>he.similarity_score-Ae.similarity_score),N.isPresidentialElection)I({individual_results:xe,party_results:[]});else{const Ae={};xe.forEach(j=>{Ae[j.party]||(Ae[j.party]={total:0,count:0}),Ae[j.party].total+=j.similarity_score,Ae[j.party].count+=1});const he=Object.entries(Ae).map(([j,st])=>({party:j,average_similarity_score:Math.round(st.total/st.count)}));he.sort((j,st)=>st.average_similarity_score-j.average_similarity_score),I({individual_results:xe,party_results:he})}}).catch(X=>console.error("Error fetching combined votes:",X))},Ne=(N,M)=>{D(N);const X=Ct[q];fetch(X.votesURL).then(se=>se.json()).then(se=>{M==="individual"?U(se.candidates.details[N.name]||{}):M==="party"&&U({party_meta:se.parties.meta[N.party]||{},details:se.parties.details[N.party]||[]})}).catch(se=>console.error("Error fetching combined votes:",se))},wt=()=>{Pe(null),e([]),r([]),o(0),u([]),f([]),I(null),D(null),U({}),K(null),G(!1)};return R.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",minHeight:"90vh",width:"100vw",overflowY:"auto",padding:"20px"},children:q?R.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"1100px"},children:[q&&R.jsx("button",{onClick:wt,style:{position:"absolute",top:"10px",left:"10px",zIndex:1e3,padding:"5px 10px",fontSize:"14px",cursor:"pointer"},children:"Reiniciar"}),n.length===0?R.jsx("h2",{children:"Loading..."}):i<n.length?R.jsxs(R.Fragment,{children:[R.jsx("div",{style:{marginBottom:"10px"},children:R.jsxs("h3",{children:[i+1," / ",n.length]})}),R.jsxs("div",{style:{marginBottom:"20px"},children:[R.jsx("label",{children:"Qué tanto te importa este tema?"}),R.jsx("br",{}),R.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[R.jsx("span",{style:{fontSize:"14px"},children:"Poco"}),R.jsx("input",{type:"range",min:"1",max:"5",value:h[i]!==void 0?h[i]:3,onChange:N=>{const M=[...h];M[i]=Number(N.target.value),f(M)},style:{flexGrow:1.5}}),R.jsx("span",{style:{fontSize:"14px"},children:"Mucho"})]})]}),R.jsx("div",{style:{minHeight:"7em",display:"flex",alignItems:"center"},children:R.jsx("h2",{children:n[i].question})}),n[i].options.map((N,M)=>R.jsx("button",{onClick:()=>p(N),onMouseEnter:()=>K(N),onMouseLeave:()=>K(null),style:{margin:"10px",padding:"10px 40px",fontSize:"16px",cursor:"pointer",display:"block",width:"100%",backgroundColor:a[i]===N||x===N?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px"},children:N},M)),R.jsxs("div",{style:{marginTop:"20px"},children:[R.jsx("button",{onClick:y,disabled:i===0,style:{marginRight:"10px",padding:"10px 20px",fontSize:"16px",cursor:i===0?"not-allowed":"pointer",opacity:i===0?.5:1},children:"Volver"}),R.jsx("button",{onClick:()=>{i===n.length-1?g():m()},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer"},children:i===n.length-1?"Terminar encuesta":"Saltar"})]})]}):R.jsxs(R.Fragment,{children:[R.jsx("div",{id:"recaptcha-container"}),R.jsx("h2",{children:"Resultados"}),R.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"10px",justifyContent:"flex-start",width:"100%"},children:[!Ct[q].isPresidentialElection&&R.jsx("button",{onClick:()=>G(!1),onMouseEnter:N=>{N.target.style.backgroundColor="black",N.target.style.color="white"},onMouseLeave:N=>{N.target.style.backgroundColor=z?"darkslategrey":"black"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:z?"darkslategrey":"black",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Partidos políticos"}),!Y.isPresidentialElection&&R.jsx("button",{onClick:()=>G(!0),onMouseEnter:N=>{N.target.style.backgroundColor="black",N.target.style.color="white"},onMouseLeave:N=>{N.target.style.backgroundColor=z?"black":"darkslategrey"},style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:z?"black":"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out, color 0.2s ease-in-out"},children:"Candidatos"})]}),R.jsxs("div",{style:{display:"flex",width:"100%"},children:[R.jsx("div",{style:{flex:1},children:_&&R.jsx("div",{style:{marginTop:"20px",width:"100%"},children:z?R.jsxs("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",maxHeight:"60vh",overflowY:"auto"},children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[R.jsx("span",{children:"Candidato"}),R.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),_.individual_results.map((N,M)=>{var X;return R.jsxs("li",{style:{cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"},onClick:()=>Ne(N,"individual"),children:[R.jsx("span",{children:((X=N.names)==null?void 0:X.join(", "))||N.name}),R.jsxs("span",{style:{marginLeft:"auto",fontWeight:"bold",paddingRight:"15px"},children:[N.similarity_score,"%"]})]},M)})]}):R.jsxs(R.Fragment,{children:[R.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:"bold",paddingBottom:"5px",borderBottom:"1px solid #ccc",paddingRight:"10px"},children:[R.jsx("span",{children:"Partido"}),R.jsx("span",{style:{marginLeft:"auto",paddingRight:"10px"},children:"Similaridad"})]}),R.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",width:"100%"},children:_.party_results.map((N,M)=>R.jsx("li",{style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"flex-start",padding:"5px 0"},onClick:()=>Ne(N,"party"),children:R.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[R.jsx("span",{children:R.jsx("strong",{children:N.party})}),R.jsxs("span",{style:{fontWeight:"bold",paddingRight:"15px"},children:[N.average_similarity_score,"%"]})]})},M))})]})})}),R.jsx("div",{style:{width:"60%",padding:"0px 0px 0px 15px",borderLeft:"1px solid #ccc",overflowY:"auto",maxHeight:"60vh",textAlign:"left"},children:S?R.jsxs(R.Fragment,{children:[R.jsx("h2",{style:{margin:"2px 0"},children:S.name?S.name:S.party}),k.candidate_meta&&R.jsx("div",{style:{marginBottom:"4px"},children:R.jsxs("p",{style:{margin:"2px 0"},children:[R.jsx("strong",{children:"Edad:"})," ",k.candidate_meta.age,R.jsx("br",{}),!Ct[q].isPresidentialElection&&R.jsxs(R.Fragment,{children:[R.jsx("strong",{children:"Sentencia penal:"})," ",k.candidate_meta.sentencia_penal,R.jsx("br",{}),R.jsx("strong",{children:"Asistencia:"})," ",k.candidate_meta.attendance||"N/A",R.jsx("br",{})]}),R.jsx("strong",{children:"Partido:"})," ",k.candidate_meta.party,R.jsx("br",{}),R.jsx("br",{})]})}),k.party_meta&&R.jsxs("div",{style:{marginBottom:"4px"},children:[R.jsxs("p",{style:{margin:"2px 0"},children:[R.jsx("strong",{children:"Edad promedio:"})," ",k.party_meta.average_age,R.jsx("br",{}),R.jsx("strong",{children:"Asistencia promedio:"})," ",k.party_meta.average_attendance_percentage||"N/A","%",R.jsx("br",{}),R.jsx("strong",{children:"Sentencia penal:"})," ",k.party_meta.sentencia_penal.yes,"/",k.party_meta.sentencia_penal.total," congresistas",R.jsx("br",{})]}),R.jsx("br",{})]}),k.details&&k.details.length>0?t.length>0?t.map((N,M)=>{let X=k.details.find(xe=>xe.id===N.id)||{};const se=Y.name==="ecuador"?X.source:N.source;return R.jsxs("div",{style:{marginBottom:"2px",lineHeight:"1.2"},children:[R.jsxs("p",{style:{margin:"2px 0"},children:[R.jsx("strong",{children:"Statement:"})," ",N.question," ",R.jsx("br",{}),Y.showLawInfo&&N.law&&R.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[R.jsx("strong",{children:"Proyecto de ley:"})," ",N.law]})]}),Y.showLawInfo&&R.jsxs("p",{style:{margin:"2px 0"},children:[R.jsx("strong",{children:"Fecha de la votación:"})," ",X.date||"N/A"," ",R.jsx("br",{})]}),R.jsx("p",{style:{margin:"2px 0"},children:k.party_meta?R.jsxs(R.Fragment,{children:[R.jsx("strong",{children:"Voto más común del partido:"})," ",X.vote||"N/A"," ",R.jsx("br",{})]}):R.jsxs(R.Fragment,{children:[R.jsx("strong",{children:Y.name==="ecuador"?"Opinión del candidato:":"Opinión del congresista (basado en el voto):"})," ",X.vote||"N/A"," ",R.jsx("br",{})]})}),R.jsxs("p",{style:{margin:"2px 0"},children:[R.jsx("strong",{children:"Tu respuesta:"})," ",E[a[M]]||"Sin respuesta"]}),se&&R.jsx("p",{style:{margin:"2px 0"},children:Y.showLawInfo?R.jsxs(R.Fragment,{children:[R.jsx("strong",{children:"Documento y noticias:"})," ",R.jsx("a",{href:se,target:"_blank",rel:"noopener noreferrer",children:new URL(se).hostname.replace("www.","")+"/..."})]}):R.jsxs(R.Fragment,{children:[R.jsx("strong",{children:"Noticias:"})," ",R.jsx("a",{href:se,target:"_blank",rel:"noopener noreferrer",children:new URL(se).hostname.replace("www.","")+"/..."})]})}),R.jsx("br",{})]},M)}):R.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):R.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]}):R.jsx("p",{children:" "})})]}),R.jsx("div",{style:{marginTop:"20px",display:"flex",gap:"10px"},children:R.jsx("button",{onClick:()=>o(n.length-1),onMouseEnter:N=>N.target.style.backgroundColor="black",onMouseLeave:N=>N.target.style.backgroundColor="darkslategrey",style:{padding:"10px 20px",fontSize:"16px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid #ccc",borderRadius:"5px",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})]}):R.jsxs("div",{style:{textAlign:"center",marginTop:"50px",display:"flex",flexDirection:"column",gap:"10px"},children:[R.jsx("h2",{children:"Selecciona una elección"}),R.jsx("button",{onClick:()=>Pe("peru_parl_2026"),children:"Perú: Elección parlamentaria (12.04.2026)"}),R.jsx("button",{onClick:()=>Pe("ecuador_pres_2025"),children:"Ecuador: Elección presidencial (13.04.2025)"})]})})}yh.createRoot(document.getElementById("root")).render(R.jsx(Se.StrictMode,{children:R.jsx(Dy,{})}));
