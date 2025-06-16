import{r as dc,g as md,a as gd}from"./vendor-BtP0CW_r.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var os={exports:{}},Ln={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ma;function _d(){if(Ma)return Ln;Ma=1;var n=dc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(c,u,d){var m,v={},A=null,b=null;d!==void 0&&(A=""+d),u.key!==void 0&&(A=""+u.key),u.ref!==void 0&&(b=u.ref);for(m in u)r.call(u,m)&&!o.hasOwnProperty(m)&&(v[m]=u[m]);if(c&&c.defaultProps)for(m in u=c.defaultProps,u)v[m]===void 0&&(v[m]=u[m]);return{$$typeof:e,type:c,key:A,ref:b,props:v,_owner:i.current}}return Ln.Fragment=t,Ln.jsx=a,Ln.jsxs=a,Ln}var Fa;function yd(){return Fa||(Fa=1,os.exports=_d()),os.exports}var E=yd(),P=dc();const as=md(P);var Or={},Ua;function vd(){if(Ua)return Or;Ua=1;var n=gd();return Or.createRoot=n.createRoot,Or.hydrateRoot=n.hydrateRoot,Or}var Ed=vd();const Td={name:"peru",parlQuestionsFile:"combined_questions_peru_2026.json",parlVotesFile:"combined_votes_peru_2026.json",processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary"],resultTypes:["party","parliamentaryCandidates"]},wd={name:"chile",parlQuestionsFile:"combined_questions_chile_parl_2025.json",parlVotesFile:"combined_votes_chile_parl_2025.json",processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary"],resultTypes:["party","parliamentaryCandidates"]},Id={name:"chile_presidencial_2025",presVotesFile:"combined_votes_chile_pres_2025.json",processCandidateVote:n=>n,showLawInfo:!1,isPresidentialElection:!0,questionTypes:["presidential"],resultTypes:["presidentialCandidates"]},Ad={name:"chile_2025",parlQuestionsFile:"combined_questions_chile_parl_2025.json",parlVotesFile:"combined_votes_chile_parl_2025.json",presVotesFile:"combined_votes_chile_pres_2025.json",isPresidentialElection:!0,processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary","presidential"],resultTypes:["party","parliamentaryCandidates","presidentialCandidates"]},ja={peru_parl_2026:Td,chile_diputados_2025:wd,chile_presidencial_2025:Id,chile_2025:Ad},fc={questions:[],questionDetails:[],currentQuestionIndex:0,answers:[],weights:[],comparisonResults:null,selectedEntity:null,entityDetails:{},hoveredOption:null,showIndividualResults:!1};function Rd(n,e){switch(e.type){case"SET_QUESTIONS":return{...n,questions:e.payload,questionDetails:e.payload,answers:Array(e.payload.length).fill(null),weights:Array(e.payload.length).fill(3)};case"SET_CURRENT_QUESTION_INDEX":return{...n,currentQuestionIndex:e.payload};case"ANSWER":const t=[...n.answers];return t[e.index]=e.answer,{...n,answers:t};case"SET_WEIGHTS":const r=[...n.weights];return r[e.index]=e.weight,{...n,weights:r};case"SET_COMPARISON_RESULTS":return{...n,comparisonResults:e.payload};case"SET_SELECTED_ENTITY":return{...n,selectedEntity:e.payload};case"SET_ENTITY_DETAILS":return{...n,entityDetails:e.payload};case"SET_HOVERED_OPTION":return{...n,hoveredOption:e.payload};case"SET_SHOW_INDIVIDUAL_RESULTS":return{...n,showIndividualResults:e.payload};case"RESET":return fc;default:return n}}function bd(n){const e=P.useMemo(()=>n?ja[n]:{},[n]),[t,r]=P.useReducer(Rd,fc);return P.useEffect(()=>{if(!n)return;const i=e.questionTypes.includes("parliamentary")?fetch("/votometro/"+e.parlQuestionsFile).then(a=>a.json()):Promise.resolve([]),o=e.questionTypes.includes("presidential")?fetch("/votometro/"+e.presVotesFile).then(a=>a.json()).then(a=>{const c=Object.values(a.candidates)[0].votes;return Object.entries(c).map(([u,d])=>({id:u,question:d.question,options:["Estoy de acuerdo","No tengo una opinión sobre este tema","No estoy de acuerdo"],polarity:""}))}):Promise.resolve([]);Promise.all([i,o]).then(([a,c])=>r({type:"SET_QUESTIONS",payload:[...a,...c]})).catch(a=>console.error("Error loading questions:",a))},[n,e.questionsFile,e.votesFile,e.questionTypes]),{state:t,dispatch:r,config:e,electionConfigs:ja}}const Sd=()=>{};var Ba={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Cd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=o>>2,v=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,b=d&63;u||(b=64,a||(A=64)),r.push(t[m],t[v],t[A],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(pc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||v==null)throw new Pd;const A=o<<2|c>>4;if(r.push(A),d!==64){const b=c<<4&240|d>>2;if(r.push(b),v!==64){const S=d<<6&192|v;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kd=function(n){const e=pc(n);return zs.encodeByteArray(e,!0)},ti=function(n){return kd(n).replace(/\./g,"")},mc=function(n){try{return zs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xd=()=>gc().__FIREBASE_DEFAULTS__,Nd=()=>{if(typeof process>"u"||typeof Ba>"u")return;const n=Ba.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mc(n[1]);return e&&JSON.parse(e)},Ti=()=>{try{return Sd()||xd()||Nd()||Dd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_c=n=>{var e,t;return(t=(e=Ti())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Od=n=>{const e=_c(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},yc=()=>{var n;return(n=Ti())===null||n===void 0?void 0:n.config},vc=n=>{var e;return(e=Ti())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ti(JSON.stringify(t)),ti(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Md(){var n;const e=(n=Ti())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bd(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $d(){return!Md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ws(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="FirebaseError";class ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qd,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?zd(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ht(i,c,r)}}function zd(n,e){return n.replace(Wd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wd=/\{\$([^}]+)}/g;function Kd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if($a(o)&&$a(a)){if(!Bt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function $a(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gd(n,e){const t=new Qd(n,e);return t.subscribe.bind(t)}class Qd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ls),i.error===void 0&&(i.error=ls),i.complete===void 0&&(i.complete=ls);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ls(){}/**
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
 */const Jd=1e3,Yd=2,Zd=4*60*60*1e3,ef=.5;function tf(n,e=Jd,t=Yd){const r=e*Math.pow(t,n),i=Math.round(ef*r*(Math.random()-.5)*2);return Math.min(Zd,r+i)}/**
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
 */function Fe(n){return n&&n._delegate?n._delegate:n}class at{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class nf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Kn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(n){return n===Vt?void 0:n}function sf(n){return n.instantiationMode==="EAGER"}/**
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
 */class of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const af={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},lf=z.INFO,cf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},uf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=cf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wi{constructor(e){this.name=e,this._logLevel=lf,this._logHandler=uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?af[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const hf=(n,e)=>e.some(t=>n instanceof t);let Ha,qa;function df(){return Ha||(Ha=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ff(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ec=new WeakMap,ws=new WeakMap,Tc=new WeakMap,cs=new WeakMap,Ks=new WeakMap;function pf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Tt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ec.set(t,n)}).catch(()=>{}),Ks.set(e,n),e}function mf(n){if(ws.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ws.set(n,e)}let Is={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ws.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Tc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gf(n){Is=n(Is)}function _f(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(us(this),e,...t);return Tc.set(r,e.sort?e.sort():[e]),Tt(r)}:ff().includes(n)?function(...e){return n.apply(us(this),e),Tt(Ec.get(this))}:function(...e){return Tt(n.apply(us(this),e))}}function yf(n){return typeof n=="function"?_f(n):(n instanceof IDBTransaction&&mf(n),hf(n,df())?new Proxy(n,Is):n)}function Tt(n){if(n instanceof IDBRequest)return pf(n);if(cs.has(n))return cs.get(n);const e=yf(n);return e!==n&&(cs.set(n,e),Ks.set(e,n)),e}const us=n=>Ks.get(n);function vf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),c=Tt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Tt(a.result),u.oldVersion,u.newVersion,Tt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ef=["get","getKey","getAll","getAllKeys","count"],Tf=["put","add","delete","clear"],hs=new Map;function za(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(hs.get(e))return hs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Tf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ef.includes(t)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return hs.set(e,o),o}gf(n=>({...n,get:(e,t,r)=>za(e,t)||n.get(e,t,r),has:(e,t)=>!!za(e,t)||n.has(e,t)}));/**
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
 */class wf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(If(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function If(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",Wa="0.11.2";/**
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
 */const lt=new wi("@firebase/app"),Af="@firebase/app-compat",Rf="@firebase/analytics-compat",bf="@firebase/analytics",Sf="@firebase/app-check-compat",Cf="@firebase/app-check",Pf="@firebase/auth",kf="@firebase/auth-compat",xf="@firebase/database",Nf="@firebase/data-connect",Df="@firebase/database-compat",Of="@firebase/functions",Vf="@firebase/functions-compat",Lf="@firebase/installations",Mf="@firebase/installations-compat",Ff="@firebase/messaging",Uf="@firebase/messaging-compat",jf="@firebase/performance",Bf="@firebase/performance-compat",$f="@firebase/remote-config",Hf="@firebase/remote-config-compat",qf="@firebase/storage",zf="@firebase/storage-compat",Wf="@firebase/firestore",Kf="@firebase/vertexai",Gf="@firebase/firestore-compat",Qf="firebase",Xf="11.4.0";/**
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
 */const Rs="[DEFAULT]",Jf={[As]:"fire-core",[Af]:"fire-core-compat",[bf]:"fire-analytics",[Rf]:"fire-analytics-compat",[Cf]:"fire-app-check",[Sf]:"fire-app-check-compat",[Pf]:"fire-auth",[kf]:"fire-auth-compat",[xf]:"fire-rtdb",[Nf]:"fire-data-connect",[Df]:"fire-rtdb-compat",[Of]:"fire-fn",[Vf]:"fire-fn-compat",[Lf]:"fire-iid",[Mf]:"fire-iid-compat",[Ff]:"fire-fcm",[Uf]:"fire-fcm-compat",[jf]:"fire-perf",[Bf]:"fire-perf-compat",[$f]:"fire-rc",[Hf]:"fire-rc-compat",[qf]:"fire-gcs",[zf]:"fire-gcs-compat",[Wf]:"fire-fst",[Gf]:"fire-fst-compat",[Kf]:"fire-vertex","fire-js":"fire-js",[Qf]:"fire-js-all"};/**
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
 */const ni=new Map,Yf=new Map,bs=new Map;function Ka(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function At(n){const e=n.name;if(bs.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;bs.set(e,n);for(const t of ni.values())Ka(t,n);for(const t of Yf.values())Ka(t,n);return!0}function ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new gn("app","Firebase",Zf);/**
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
 */class ep{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new at("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const _n=Xf;function wc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(t||(t=yc()),!t)throw wt.create("no-options");const o=ni.get(i);if(o){if(Bt(t,o.options)&&Bt(r,o.config))return o;throw wt.create("duplicate-app",{appName:i})}const a=new of(i);for(const u of bs.values())a.addComponent(u);const c=new ep(t,r,a);return ni.set(i,c),c}function Gs(n=Rs){const e=ni.get(n);if(!e&&n===Rs&&yc())return wc();if(!e)throw wt.create("no-app",{appName:n});return e}function rt(n,e,t){var r;let i=(r=Jf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(c.join(" "));return}At(new at(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tp="firebase-heartbeat-database",np=1,Gn="firebase-heartbeat-store";let ds=null;function Ic(){return ds||(ds=vf(tp,np,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gn)}catch(t){console.warn(t)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),ds}async function rp(n){try{const t=(await Ic()).transaction(Gn),r=await t.objectStore(Gn).get(Ac(n));return await t.done,r}catch(e){if(e instanceof ht)lt.warn(e.message);else{const t=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}}async function Ga(n,e){try{const r=(await Ic()).transaction(Gn,"readwrite");await r.objectStore(Gn).put(e,Ac(n)),await r.done}catch(t){if(t instanceof ht)lt.warn(t.message);else{const r=wt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(r.message)}}}function Ac(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ip=1024,sp=30;class op{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Qa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>sp){const a=cp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qa(),{heartbeatsToSend:r,unsentEntries:i}=ap(this._heartbeatsCache.heartbeats),o=ti(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return lt.warn(t),""}}}function Qa(){return new Date().toISOString().substring(0,10)}function ap(n,e=ip){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Xa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Xa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ws()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xa(n){return ti(JSON.stringify({version:2,heartbeats:n})).length}function cp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function up(n){At(new at("platform-logger",e=>new wf(e),"PRIVATE")),At(new at("heartbeat",e=>new op(e),"PRIVATE")),rt(As,Wa,n),rt(As,Wa,"esm2017"),rt("fire-js","")}up("");var hp="firebase",dp="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt(hp,dp,"app");var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function y(){}y.prototype=_.prototype,I.D=_.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,p,w){for(var g=Array(arguments.length-2),re=2;re<arguments.length;re++)g[re-2]=arguments[re];return _.prototype[p].apply(T,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,y){y||(y=0);var T=Array(16);if(typeof _=="string")for(var p=0;16>p;++p)T[p]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(p=0;16>p;++p)T[p]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=I.g[0],y=I.g[1],p=I.g[2];var w=I.g[3],g=_+(w^y&(p^w))+T[0]+3614090360&4294967295;_=y+(g<<7&4294967295|g>>>25),g=w+(p^_&(y^p))+T[1]+3905402710&4294967295,w=_+(g<<12&4294967295|g>>>20),g=p+(y^w&(_^y))+T[2]+606105819&4294967295,p=w+(g<<17&4294967295|g>>>15),g=y+(_^p&(w^_))+T[3]+3250441966&4294967295,y=p+(g<<22&4294967295|g>>>10),g=_+(w^y&(p^w))+T[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=w+(p^_&(y^p))+T[5]+1200080426&4294967295,w=_+(g<<12&4294967295|g>>>20),g=p+(y^w&(_^y))+T[6]+2821735955&4294967295,p=w+(g<<17&4294967295|g>>>15),g=y+(_^p&(w^_))+T[7]+4249261313&4294967295,y=p+(g<<22&4294967295|g>>>10),g=_+(w^y&(p^w))+T[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=w+(p^_&(y^p))+T[9]+2336552879&4294967295,w=_+(g<<12&4294967295|g>>>20),g=p+(y^w&(_^y))+T[10]+4294925233&4294967295,p=w+(g<<17&4294967295|g>>>15),g=y+(_^p&(w^_))+T[11]+2304563134&4294967295,y=p+(g<<22&4294967295|g>>>10),g=_+(w^y&(p^w))+T[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=w+(p^_&(y^p))+T[13]+4254626195&4294967295,w=_+(g<<12&4294967295|g>>>20),g=p+(y^w&(_^y))+T[14]+2792965006&4294967295,p=w+(g<<17&4294967295|g>>>15),g=y+(_^p&(w^_))+T[15]+1236535329&4294967295,y=p+(g<<22&4294967295|g>>>10),g=_+(p^w&(y^p))+T[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=w+(y^p&(_^y))+T[6]+3225465664&4294967295,w=_+(g<<9&4294967295|g>>>23),g=p+(_^y&(w^_))+T[11]+643717713&4294967295,p=w+(g<<14&4294967295|g>>>18),g=y+(w^_&(p^w))+T[0]+3921069994&4294967295,y=p+(g<<20&4294967295|g>>>12),g=_+(p^w&(y^p))+T[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=w+(y^p&(_^y))+T[10]+38016083&4294967295,w=_+(g<<9&4294967295|g>>>23),g=p+(_^y&(w^_))+T[15]+3634488961&4294967295,p=w+(g<<14&4294967295|g>>>18),g=y+(w^_&(p^w))+T[4]+3889429448&4294967295,y=p+(g<<20&4294967295|g>>>12),g=_+(p^w&(y^p))+T[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=w+(y^p&(_^y))+T[14]+3275163606&4294967295,w=_+(g<<9&4294967295|g>>>23),g=p+(_^y&(w^_))+T[3]+4107603335&4294967295,p=w+(g<<14&4294967295|g>>>18),g=y+(w^_&(p^w))+T[8]+1163531501&4294967295,y=p+(g<<20&4294967295|g>>>12),g=_+(p^w&(y^p))+T[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=w+(y^p&(_^y))+T[2]+4243563512&4294967295,w=_+(g<<9&4294967295|g>>>23),g=p+(_^y&(w^_))+T[7]+1735328473&4294967295,p=w+(g<<14&4294967295|g>>>18),g=y+(w^_&(p^w))+T[12]+2368359562&4294967295,y=p+(g<<20&4294967295|g>>>12),g=_+(y^p^w)+T[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=w+(_^y^p)+T[8]+2272392833&4294967295,w=_+(g<<11&4294967295|g>>>21),g=p+(w^_^y)+T[11]+1839030562&4294967295,p=w+(g<<16&4294967295|g>>>16),g=y+(p^w^_)+T[14]+4259657740&4294967295,y=p+(g<<23&4294967295|g>>>9),g=_+(y^p^w)+T[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=w+(_^y^p)+T[4]+1272893353&4294967295,w=_+(g<<11&4294967295|g>>>21),g=p+(w^_^y)+T[7]+4139469664&4294967295,p=w+(g<<16&4294967295|g>>>16),g=y+(p^w^_)+T[10]+3200236656&4294967295,y=p+(g<<23&4294967295|g>>>9),g=_+(y^p^w)+T[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=w+(_^y^p)+T[0]+3936430074&4294967295,w=_+(g<<11&4294967295|g>>>21),g=p+(w^_^y)+T[3]+3572445317&4294967295,p=w+(g<<16&4294967295|g>>>16),g=y+(p^w^_)+T[6]+76029189&4294967295,y=p+(g<<23&4294967295|g>>>9),g=_+(y^p^w)+T[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=w+(_^y^p)+T[12]+3873151461&4294967295,w=_+(g<<11&4294967295|g>>>21),g=p+(w^_^y)+T[15]+530742520&4294967295,p=w+(g<<16&4294967295|g>>>16),g=y+(p^w^_)+T[2]+3299628645&4294967295,y=p+(g<<23&4294967295|g>>>9),g=_+(p^(y|~w))+T[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=w+(y^(_|~p))+T[7]+1126891415&4294967295,w=_+(g<<10&4294967295|g>>>22),g=p+(_^(w|~y))+T[14]+2878612391&4294967295,p=w+(g<<15&4294967295|g>>>17),g=y+(w^(p|~_))+T[5]+4237533241&4294967295,y=p+(g<<21&4294967295|g>>>11),g=_+(p^(y|~w))+T[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=w+(y^(_|~p))+T[3]+2399980690&4294967295,w=_+(g<<10&4294967295|g>>>22),g=p+(_^(w|~y))+T[10]+4293915773&4294967295,p=w+(g<<15&4294967295|g>>>17),g=y+(w^(p|~_))+T[1]+2240044497&4294967295,y=p+(g<<21&4294967295|g>>>11),g=_+(p^(y|~w))+T[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=w+(y^(_|~p))+T[15]+4264355552&4294967295,w=_+(g<<10&4294967295|g>>>22),g=p+(_^(w|~y))+T[6]+2734768916&4294967295,p=w+(g<<15&4294967295|g>>>17),g=y+(w^(p|~_))+T[13]+1309151649&4294967295,y=p+(g<<21&4294967295|g>>>11),g=_+(p^(y|~w))+T[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=w+(y^(_|~p))+T[11]+3174756917&4294967295,w=_+(g<<10&4294967295|g>>>22),g=p+(_^(w|~y))+T[2]+718787259&4294967295,p=w+(g<<15&4294967295|g>>>17),g=y+(w^(p|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(p+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+p&4294967295,I.g[3]=I.g[3]+w&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var y=_-this.blockSize,T=this.B,p=this.h,w=0;w<_;){if(p==0)for(;w<=y;)i(this,I,w),w+=this.blockSize;if(typeof I=="string"){for(;w<_;)if(T[p++]=I.charCodeAt(w++),p==this.blockSize){i(this,T),p=0;break}}else for(;w<_;)if(T[p++]=I[w++],p==this.blockSize){i(this,T),p=0;break}}this.h=p,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var y=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=y&255,y/=256;for(this.u(I),I=Array(16),_=y=0;4>_;++_)for(var T=0;32>T;T+=8)I[y++]=this.g[_]>>>T&255;return I};function o(I,_){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=_(I)}function a(I,_){this.h=_;for(var y=[],T=!0,p=I.length-1;0<=p;p--){var w=I[p]|0;T&&w==_||(y[p]=w,T=!1)}this.g=y}var c={};function u(I){return-128<=I&&128>I?o(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return k(d(-I));for(var _=[],y=1,T=0;I>=y;T++)_[T]=I/y|0,y*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return k(m(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(_,8)),T=v,p=0;p<I.length;p+=8){var w=Math.min(8,I.length-p),g=parseInt(I.substring(p,p+w),_);8>w?(w=d(Math.pow(_,w)),T=T.j(w).add(d(g))):(T=T.j(y),T=T.add(d(g)))}return T}var v=u(0),A=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();for(var I=0,_=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(O(this))return"-"+k(this).toString(I);for(var _=d(Math.pow(I,6)),y=this,T="";;){var p=B(y,_).g;y=N(y,p.j(_));var w=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=p,S(y))return w+T;for(;6>w.length;)w="0"+w;T=w+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=N(this,I),O(I)?-1:S(I)?0:1};function k(I){for(var _=I.g.length,y=[],T=0;T<_;T++)y[T]=~I.g[T];return new a(y,~I.h).add(A)}n.abs=function(){return O(this)?k(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0,p=0;p<=_;p++){var w=T+(this.i(p)&65535)+(I.i(p)&65535),g=(w>>>16)+(this.i(p)>>>16)+(I.i(p)>>>16);T=g>>>16,w&=65535,g&=65535,y[p]=g<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function N(I,_){return I.add(k(_))}n.j=function(I){if(S(this)||S(I))return v;if(O(this))return O(I)?k(this).j(k(I)):k(k(this).j(I));if(O(I))return k(this.j(k(I)));if(0>this.l(b)&&0>I.l(b))return d(this.m()*I.m());for(var _=this.g.length+I.g.length,y=[],T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var p=0;p<I.g.length;p++){var w=this.i(T)>>>16,g=this.i(T)&65535,re=I.i(p)>>>16,H=I.i(p)&65535;y[2*T+2*p]+=g*H,M(y,2*T+2*p),y[2*T+2*p+1]+=w*H,M(y,2*T+2*p+1),y[2*T+2*p+1]+=g*re,M(y,2*T+2*p+1),y[2*T+2*p+2]+=w*re,M(y,2*T+2*p+2)}for(T=0;T<_;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=_;T<2*_;T++)y[T]=0;return new a(y,0)};function M(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function L(I,_){this.g=I,this.h=_}function B(I,_){if(S(_))throw Error("division by zero");if(S(I))return new L(v,v);if(O(I))return _=B(k(I),_),new L(k(_.g),k(_.h));if(O(_))return _=B(I,k(_)),new L(k(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var y=A,T=_;0>=T.l(I);)y=X(y),T=X(T);var p=J(y,1),w=J(T,1);for(T=J(T,2),y=J(y,2);!S(T);){var g=w.add(T);0>=g.l(I)&&(p=p.add(y),w=g),T=J(T,1),y=J(y,1)}return _=N(I,p.j(_)),new L(p,_)}for(p=v;0<=I.l(_);){for(y=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),w=d(y),g=w.j(_);O(g)||0<g.l(I);)y-=T,w=d(y),g=w.j(_);S(w)&&(w=A),p=p.add(w),I=N(I,g)}return new L(p,I)}n.A=function(I){return B(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function X(I){for(var _=I.g.length+1,y=[],T=0;T<_;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function J(I,_){var y=_>>5;_%=32;for(var T=I.g.length-y,p=[],w=0;w<T;w++)p[w]=0<_?I.i(w+y)>>>_|I.i(w+y+1)<<32-_:I.i(w+y);return new a(p,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Qs=a}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rc,jn,bc,qr,Ss,Sc,Cc,Pc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var R=s[f];if(!(R in h))break e;h=h[R]}s=s[s.length-1],f=h[s],l=l(f),l!=f&&l!=null&&e(h,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var h=0,f=!1,R={next:function(){if(!f&&h<s.length){var C=h++;return{value:l(C,s[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,h){return s.call.apply(s.bind,arguments)}function v(s,l,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),s.apply(l,R)}}return function(){return s.apply(l,arguments)}}function A(s,l,h){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,A.apply(null,arguments)}function b(s,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function S(s,l){function h(){}h.prototype=l.prototype,s.aa=l.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,R,C){for(var V=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)V[Z-2]=arguments[Z];return l.prototype[R].apply(f,V)}}function O(s){const l=s.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=s[f];return h}return[]}function k(s,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const R=s.length||0,C=f.length||0;s.length=R+C;for(let V=0;V<C;V++)s[R+V]=f[V]}else s.push(f)}}class N{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(s){return/^[\s\xa0]*$/.test(s)}function L(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function B(s){return B[" "](s),s}B[" "]=function(){};var X=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function J(s,l,h){for(const f in s)l.call(h,s[f],f,s)}function I(s,l){for(const h in s)l.call(void 0,s[h],h,s)}function _(s){const l={};for(const h in s)l[h]=s[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(s,l){let h,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(h in f)s[h]=f[h];for(let C=0;C<y.length;C++)h=y[C],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function p(s){var l=1;s=s.split(":");const h=[];for(;0<l&&s.length;)h.push(s.shift()),l--;return s.length&&h.push(s.join(":")),h}function w(s){c.setTimeout(()=>{throw s},0)}function g(){var s=fe;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class re{constructor(){this.h=this.g=null}add(l,h){const f=H.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var H=new N(()=>new _e,s=>s.reset());class _e{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Y=!1,fe=new re,G=()=>{const s=c.Promise.resolve(void 0);Ie=()=>{s.then(ue)}};var ue=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){w(h)}var l=H;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}Y=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return s}();function Je(s,l){if(ie.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(X){e:{try{B(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=s.fromElement:h=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:kt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Je.aa.h.call(this)}}S(Je,ie);var kt={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Fh=0;function Uh(s,l,h,f,R){this.listener=s,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=R,this.key=++Fh,this.da=this.fa=!1}function gr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function _r(s){this.src=s,this.g={},this.h=0}_r.prototype.add=function(s,l,h,f,R){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var V=Fi(s,l,f,R);return-1<V?(l=s[V],h||(l.fa=!1)):(l=new Uh(l,this.src,C,!!f,R),l.fa=h,s.push(l)),l};function Mi(s,l){var h=l.type;if(h in s.g){var f=s.g[h],R=Array.prototype.indexOf.call(f,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(f,R,1),C&&(gr(l),s.g[h].length==0&&(delete s.g[h],s.h--))}}function Fi(s,l,h,f){for(var R=0;R<s.length;++R){var C=s[R];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==f)return R}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),ji={};function Fo(s,l,h,f,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Fo(s,l[C],h,f,R);return null}return h=Bo(h),s&&s[De]?s.K(l,h,d(f)?!!f.capture:!1,R):jh(s,l,h,!1,f,R)}function jh(s,l,h,f,R,C){if(!l)throw Error("Invalid event type");var V=d(R)?!!R.capture:!!R,Z=$i(s);if(Z||(s[Ui]=Z=new _r(s)),h=Z.add(l,h,f,V,C),h.proxy)return h;if(f=Bh(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)wn||(R=V),R===void 0&&(R=!1),s.addEventListener(l.toString(),f,R);else if(s.attachEvent)s.attachEvent(jo(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Bh(){function s(h){return l.call(s.src,s.listener,h)}const l=$h;return s}function Uo(s,l,h,f,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)Uo(s,l[C],h,f,R);else f=d(f)?!!f.capture:!!f,h=Bo(h),s&&s[De]?(s=s.i,l=String(l).toString(),l in s.g&&(C=s.g[l],h=Fi(C,h,f,R),-1<h&&(gr(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete s.g[l],s.h--)))):s&&(s=$i(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Fi(l,h,f,R)),(h=-1<s?l[s]:null)&&Bi(h))}function Bi(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[De])Mi(l.i,s);else{var h=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(h,f,s.capture):l.detachEvent?l.detachEvent(jo(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=$i(l))?(Mi(h,s),h.h==0&&(h.src=null,l[Ui]=null)):gr(s)}}}function jo(s){return s in ji?ji[s]:ji[s]="on"+s}function $h(s,l){if(s.da)s=!0;else{l=new Je(l,this);var h=s.listener,f=s.ha||s.src;s.fa&&Bi(s),s=h.call(f,l)}return s}function $i(s){return s=s[Ui],s instanceof _r?s:null}var Hi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(s){return typeof s=="function"?s:(s[Hi]||(s[Hi]=function(l){return s.handleEvent(l)}),s[Hi])}function Ae(){oe.call(this),this.i=new _r(this),this.M=this,this.F=null}S(Ae,oe),Ae.prototype[De]=!0,Ae.prototype.removeEventListener=function(s,l,h,f){Uo(this,s,l,h,f)};function xe(s,l){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new ie(l,s);else if(l instanceof ie)l.target=l.target||s;else{var R=l;l=new ie(f,s),T(l,R)}if(R=!0,h)for(var C=h.length-1;0<=C;C--){var V=l.g=h[C];R=yr(V,f,!0,l)&&R}if(V=l.g=s,R=yr(V,f,!0,l)&&R,R=yr(V,f,!1,l)&&R,h)for(C=0;C<h.length;C++)V=l.g=h[C],R=yr(V,f,!1,l)&&R}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var h=s.g[l],f=0;f<h.length;f++)gr(h[f]);delete s.g[l],s.h--}}this.F=null},Ae.prototype.K=function(s,l,h,f){return this.i.add(String(s),l,!1,h,f)},Ae.prototype.L=function(s,l,h,f){return this.i.add(String(s),l,!0,h,f)};function yr(s,l,h,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var V=l[C];if(V&&!V.da&&V.capture==h){var Z=V.listener,ye=V.ha||V.src;V.fa&&Mi(s.i,V),R=Z.call(ye,f)!==!1&&R}}return R&&!f.defaultPrevented}function $o(s,l,h){if(typeof s=="function")h&&(s=A(s,h));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Ho(s){s.g=$o(()=>{s.g=null,s.i&&(s.i=!1,Ho(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class Hh extends oe{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(s){oe.call(this),this.h=s,this.g={}}S(In,oe);var qo=[];function zo(s){J(s.g,function(l,h){this.g.hasOwnProperty(h)&&Bi(l)},s),s.g={}}In.prototype.N=function(){In.aa.N.call(this),zo(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=c.JSON.stringify,qh=c.JSON.parse,zh=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function zi(){}zi.prototype.h=null;function Wo(s){return s.h||(s.h=s.i())}function Ko(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wi(){ie.call(this,"d")}S(Wi,ie);function Ki(){ie.call(this,"c")}S(Ki,ie);var xt={},Go=null;function vr(){return Go=Go||new Ae}xt.La="serverreachability";function Qo(s){ie.call(this,xt.La,s)}S(Qo,ie);function Rn(s){const l=vr();xe(l,new Qo(l))}xt.STAT_EVENT="statevent";function Xo(s,l){ie.call(this,xt.STAT_EVENT,s),this.stat=l}S(Xo,ie);function Ne(s){const l=vr();xe(l,new Xo(l,s))}xt.Ma="timingevent";function Jo(s,l){ie.call(this,xt.Ma,s),this.size=l}S(Jo,ie);function bn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function Wh(s,l,h,f,R,C){s.info(function(){if(s.g)if(C)for(var V="",Z=C.split("&"),ye=0;ye<Z.length;ye++){var K=Z[ye].split("=");if(1<K.length){var Re=K[0];K=K[1];var be=Re.split("_");V=2<=be.length&&be[1]=="type"?V+(Re+"="+K+"&"):V+(Re+"=redacted&")}}else V=null;else V=C;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+l+`
`+h+`
`+V})}function Kh(s,l,h,f,R,C,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+l+`
`+h+`
`+C+" "+V})}function Jt(s,l,h,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Qh(s,h)+(f?" "+f:"")})}function Gh(s,l){s.info(function(){return"TIMEOUT: "+l})}Sn.prototype.info=function(){};function Qh(s,l){if(!s.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return qi(h)}catch{return l}}var Er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gi;function Tr(){}S(Tr,zi),Tr.prototype.g=function(){return new XMLHttpRequest},Tr.prototype.i=function(){return{}},Gi=new Tr;function ft(s,l,h,f){this.j=s,this.i=l,this.l=h,this.R=f||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zo}function Zo(){this.i=null,this.g="",this.h=!1}var ea={},Qi={};function Xi(s,l,h){s.L=1,s.v=Rr(Ye(l)),s.m=h,s.P=!0,ta(s,null)}function ta(s,l){s.F=Date.now(),wr(s),s.A=Ye(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ma(h.i,"t",f),s.C=0,h=s.j.J,s.h=new Zo,s.g=Da(s.j,h?l:null,!s.m),0<s.O&&(s.M=new Hh(A(s.Y,s,s.g),s.O)),l=s.U,h=s.g,f=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(qo[0]=R.toString()),R=qo);for(var C=0;C<R.length;C++){var V=Fo(h,R[C],f||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=s.H?_(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Rn(),Wh(s.i,s.u,s.A,s.l,s.R,s.m)}ft.prototype.ca=function(s){s=s.target;const l=this.M;l&&Ze(s)==3?l.j():this.Y(s)},ft.prototype.Y=function(s){try{if(s==this.g)e:{const be=Ze(this.g);var l=this.g.Ba();const en=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||be!=4||l==7||(l==8||0>=en?Rn(3):Rn(2)),Ji(this);var h=this.g.Z();this.X=h;t:if(na(this)){var f=wa(this.g);s="";var R=f.length,C=Ze(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nt(this),Cn(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(C&&l==R-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Kh(this.i,this.u,this.A,this.l,this.R,be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ye=this.g;if((Z=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Z)){var K=Z;break t}}K=null}if(h=K)Jt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yi(this,h);else{this.o=!1,this.s=3,Ne(12),Nt(this),Cn(this);break e}}if(this.P){h=!0;let Ue;for(;!this.J&&this.C<V.length;)if(Ue=Xh(this,V),Ue==Qi){be==4&&(this.s=4,Ne(14),h=!1),Jt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==ea){this.s=4,Ne(15),Jt(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else Jt(this.i,this.l,Ue,null),Yi(this,Ue);if(na(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||V.length!=0||this.h.h||(this.s=1,Ne(16),h=!1),this.o=this.o&&h,!h)Jt(this.i,this.l,V,"[Invalid Chunked Response]"),Nt(this),Cn(this);else if(0<V.length&&!this.W){this.W=!0;var Re=this.j;Re.g==this&&Re.ba&&!Re.M&&(Re.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),is(Re),Re.M=!0,Ne(11))}}else Jt(this.i,this.l,V,null),Yi(this,V);be==4&&Nt(this),this.o&&!this.J&&(be==4?Pa(this.j,this):(this.o=!1,wr(this)))}else fd(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Nt(this),Cn(this)}}}catch{}finally{}};function na(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Xh(s,l){var h=s.C,f=l.indexOf(`
`,h);return f==-1?Qi:(h=Number(l.substring(h,f)),isNaN(h)?ea:(f+=1,f+h>l.length?Qi:(l=l.slice(f,f+h),s.C=f+h,l)))}ft.prototype.cancel=function(){this.J=!0,Nt(this)};function wr(s){s.S=Date.now()+s.I,ra(s,s.I)}function ra(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=bn(A(s.ba,s),l)}function Ji(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ft.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Gh(this.i,this.A),this.L!=2&&(Rn(),Ne(17)),Nt(this),this.s=2,Cn(this)):ra(this,this.S-s)};function Cn(s){s.j.G==0||s.J||Pa(s.j,s)}function Nt(s){Ji(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,zo(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Yi(s,l){try{var h=s.j;if(h.G!=0&&(h.g==s||Zi(h.h,s))){if(!s.K&&Zi(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)xr(h),Pr(h);else break e;rs(h),Ne(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=bn(A(h.Za,h),6e3));if(1>=oa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((s.K||h.g==s)&&xr(h),!M(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let K=R[l];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const Re=K[3];Re!=null&&(h.la=Re,h.j.info("VER="+h.la));const be=K[4];be!=null&&(h.Aa=be,h.j.info("SVER="+h.Aa));const en=K[5];en!=null&&typeof en=="number"&&0<en&&(f=1.5*en,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ue=s.g;if(Ue){const Dr=Ue.g?Ue.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dr){var C=f.h;C.g||Dr.indexOf("spdy")==-1&&Dr.indexOf("quic")==-1&&Dr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(es(C,C.h),C.h=null))}if(f.D){const ss=Ue.g?Ue.g.getResponseHeader("X-HTTP-Session-Id"):null;ss&&(f.ya=ss,te(f.I,f.D,ss))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var V=s;if(f.qa=Na(f,f.J?f.ia:null,f.W),V.K){aa(f.h,V);var Z=V,ye=f.L;ye&&(Z.I=ye),Z.B&&(Ji(Z),wr(Z)),f.g=V}else Sa(f);0<h.i.length&&kr(h)}else K[0]!="stop"&&K[0]!="close"||Ot(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Ot(h,7):ns(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}Rn(4)}catch{}}var Jh=class{constructor(s,l){this.g=s,this.map=l}};function ia(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function oa(s){return s.h?1:s.g?s.g.size:0}function Zi(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function es(s,l){s.g?s.g.add(l):s.h=l}function aa(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}ia.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function la(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const h of s.g.values())l=l.concat(h.D);return l}return O(s.i)}function Yh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var l=[],h=s.length,f=0;f<h;f++)l.push(s[f]);return l}l=[],h=0;for(f in s)l[h++]=s[f];return l}function Zh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var l=[];s=s.length;for(var h=0;h<s;h++)l.push(h);return l}l=[],h=0;for(const f in s)l[h++]=f;return l}}}function ca(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var h=Zh(s),f=Yh(s),R=f.length,C=0;C<R;C++)l.call(void 0,f[C],h&&h[C],s)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ed(s,l){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),R=null;if(0<=f){var C=s[h].substring(0,f);R=s[h].substring(f+1)}else C=s[h];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Dt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Dt){this.h=s.h,Ir(this,s.j),this.o=s.o,this.g=s.g,Ar(this,s.s),this.l=s.l;var l=s.i,h=new xn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ha(this,h),this.m=s.m}else s&&(l=String(s).match(ua))?(this.h=!1,Ir(this,l[1]||"",!0),this.o=Pn(l[2]||""),this.g=Pn(l[3]||"",!0),Ar(this,l[4]),this.l=Pn(l[5]||"",!0),ha(this,l[6]||"",!0),this.m=Pn(l[7]||"")):(this.h=!1,this.i=new xn(null,this.h))}Dt.prototype.toString=function(){var s=[],l=this.j;l&&s.push(kn(l,da,!0),":");var h=this.g;return(h||l=="file")&&(s.push("//"),(l=this.o)&&s.push(kn(l,da,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(kn(h,h.charAt(0)=="/"?rd:nd,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",kn(h,sd)),s.join("")};function Ye(s){return new Dt(s)}function Ir(s,l,h){s.j=h?Pn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Ar(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function ha(s,l,h){l instanceof xn?(s.i=l,od(s.i,s.h)):(h||(l=kn(l,id)),s.i=new xn(l,s.h))}function te(s,l,h){s.i.set(l,h)}function Rr(s){return te(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Pn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function kn(s,l,h){return typeof s=="string"?(s=encodeURI(s).replace(l,td),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function td(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var da=/[#\/\?@]/g,nd=/[#\?:]/g,rd=/[#\?]/g,id=/[#\?@]/g,sd=/#/g;function xn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function pt(s){s.g||(s.g=new Map,s.h=0,s.i&&ed(s.i,function(l,h){s.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=xn.prototype,n.add=function(s,l){pt(this),this.i=null,s=Yt(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(l),this.h+=1,this};function fa(s,l){pt(s),l=Yt(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function pa(s,l){return pt(s),l=Yt(s,l),s.g.has(l)}n.forEach=function(s,l){pt(this),this.g.forEach(function(h,f){h.forEach(function(R){s.call(l,R,f,this)},this)},this)},n.na=function(){pt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const R=s[f];for(let C=0;C<R.length;C++)h.push(l[f])}return h},n.V=function(s){pt(this);let l=[];if(typeof s=="string")pa(this,s)&&(l=l.concat(this.g.get(Yt(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)l=l.concat(s[h])}return l},n.set=function(s,l){return pt(this),this.i=null,s=Yt(this,s),pa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function ma(s,l,h){fa(s,l),0<h.length&&(s.i=null,s.g.set(Yt(s,l),O(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const C=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var R=C;V[f]!==""&&(R+="="+encodeURIComponent(String(V[f]))),s.push(R)}}return this.i=s.join("&")};function Yt(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function od(s,l){l&&!s.j&&(pt(s),s.i=null,s.g.forEach(function(h,f){var R=f.toLowerCase();f!=R&&(fa(this,f),ma(this,R,h))},s)),s.j=l}function ad(s,l){const h=new Sn;if(c.Image){const f=new Image;f.onload=b(mt,h,"TestLoadImage: loaded",!0,l,f),f.onerror=b(mt,h,"TestLoadImage: error",!1,l,f),f.onabort=b(mt,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=b(mt,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function ld(s,l){const h=new Sn,f=new AbortController,R=setTimeout(()=>{f.abort(),mt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(C=>{clearTimeout(R),C.ok?mt(h,"TestPingServer: ok",!0,l):mt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),mt(h,"TestPingServer: error",!1,l)})}function mt(s,l,h,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(h)}catch{}}function cd(){this.g=new zh}function ud(s,l,h){const f=h||"";try{ca(s,function(R,C){let V=R;d(R)&&(V=qi(R)),l.push(f+C+"="+encodeURIComponent(V))})}catch(R){throw l.push(f+"type="+encodeURIComponent("_badmap")),R}}function br(s){this.l=s.Ub||null,this.j=s.eb||!1}S(br,zi),br.prototype.g=function(){return new Sr(this.l,this.j)},br.prototype.i=function(s){return function(){return s}}({});function Sr(s,l){Ae.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Sr,Ae),n=Sr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Dn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ga(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ga(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Nn(this):Dn(this),this.readyState==3&&ga(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Nn(this))},n.Qa=function(s){this.g&&(this.response=s,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Dn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=l.next();return s.join(`\r
`)};function Dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function _a(s){let l="";return J(s,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function ts(s,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=_a(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):te(s,l,h))}function ae(s){Ae.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ae,Ae);var hd=/^https?$/i,dd=["POST","PUT"];n=ae.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gi.g(),this.v=this.o?Wo(this.o):Wo(Gi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(C){ya(this,C);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)h.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(dd,l,void 0))||f||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of h)this.g.setRequestHeader(C,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ta(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){ya(this,C)}};function ya(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,va(s),Cr(s)}function va(s){s.A||(s.A=!0,xe(s,"complete"),xe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,xe(this,"complete"),xe(this,"abort"),Cr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ze(s)!=4||s.Z()!=2)){if(s.u&&Ze(s)==4)$o(s.Ea,0,s);else if(xe(s,"readystatechange"),Ze(s)==4){s.h=!1;try{const V=s.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=V===0){var R=String(s.D).match(ua)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),f=!hd.test(R?R.toLowerCase():"")}h=f}if(h)xe(s,"complete"),xe(s,"success");else{s.m=6;try{var C=2<Ze(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",va(s)}}finally{Cr(s)}}}}function Cr(s,l){if(s.g){Ta(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||xe(s,"ready");try{h.onreadystatechange=f}catch{}}}function Ta(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ze(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),qh(l)}};function wa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(s){const l={};s=(s.g&&2<=Ze(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(M(s[f]))continue;var h=p(s[f]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[R]||[];l[R]=C,C.push(h)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function On(s,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||l}function Ia(s){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=On("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=On("baseRetryDelayMs",5e3,s),this.cb=On("retryDelaySeedMs",1e4,s),this.Wa=On("forwardChannelMaxRetries",2,s),this.wa=On("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ia(s&&s.concurrentRequestLimit),this.Da=new cd,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ia.prototype,n.la=8,n.G=1,n.connect=function(s,l,h,f){Ne(0),this.W=s,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Na(this,null,this.W),kr(this)};function ns(s){if(Aa(s),s.G==3){var l=s.U++,h=Ye(s.I);if(te(h,"SID",s.K),te(h,"RID",l),te(h,"TYPE","terminate"),Vn(s,h),l=new ft(s,s.j,l),l.L=2,l.v=Rr(Ye(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Da(l.j,null),l.g.ea(l.v)),l.F=Date.now(),wr(l)}xa(s)}function Pr(s){s.g&&(is(s),s.g.cancel(),s.g=null)}function Aa(s){Pr(s),s.u&&(c.clearTimeout(s.u),s.u=null),xr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function kr(s){if(!sa(s.h)&&!s.s){s.s=!0;var l=s.Ga;Ie||G(),Y||(Ie(),Y=!0),fe.add(l,s),s.B=0}}function pd(s,l){return oa(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=bn(A(s.Ga,s,l),ka(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new ft(this,this.j,s);let C=this.o;if(this.S&&(C?(C=_(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ba(this,R,l),h=Ye(this.I),te(h,"RID",s),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),Vn(this,h),C&&(this.O?l="headers="+encodeURIComponent(String(_a(C)))+"&"+l:this.m&&ts(h,this.m,C)),es(this.h,R),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),R.T=!0,Xi(R,h,null)):Xi(R,h,l),this.G=2}}else this.G==3&&(s?Ra(this,s):this.i.length==0||sa(this.h)||Ra(this))};function Ra(s,l){var h;l?h=l.l:h=s.U++;const f=Ye(s.I);te(f,"SID",s.K),te(f,"RID",h),te(f,"AID",s.T),Vn(s,f),s.m&&s.o&&ts(f,s.m,s.o),h=new ft(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),l&&(s.i=l.D.concat(s.i)),l=ba(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),es(s.h,h),Xi(h,f,l)}function Vn(s,l){s.H&&J(s.H,function(h,f){te(l,f,h)}),s.l&&ca({},function(h,f){te(l,f,h)})}function ba(s,l,h){h=Math.min(s.i.length,h);var f=s.l?A(s.l.Na,s.l,s):null;e:{var R=s.i;let C=-1;for(;;){const V=["count="+h];C==-1?0<h?(C=R[0].g,V.push("ofs="+C)):C=0:V.push("ofs="+C);let Z=!0;for(let ye=0;ye<h;ye++){let K=R[ye].g;const Re=R[ye].map;if(K-=C,0>K)C=Math.max(0,R[ye].g-100),Z=!1;else try{ud(Re,V,"req"+K+"_")}catch{f&&f(Re)}}if(Z){f=V.join("&");break e}}}return s=s.i.splice(0,h),l.D=s,f}function Sa(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Ie||G(),Y||(Ie(),Y=!0),fe.add(l,s),s.v=0}}function rs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=bn(A(s.Fa,s),ka(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Ca(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=bn(A(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),Pr(this),Ca(this))};function is(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Ca(s){s.g=new ft(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Ye(s.qa);te(l,"RID","rpc"),te(l,"SID",s.K),te(l,"AID",s.T),te(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&te(l,"TO",s.ja),te(l,"TYPE","xmlhttp"),Vn(s,l),s.m&&s.o&&ts(l,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=Rr(Ye(l)),h.m=null,h.P=!0,ta(h,s)}n.Za=function(){this.C!=null&&(this.C=null,Pr(this),rs(this),Ne(19))};function xr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Pa(s,l){var h=null;if(s.g==l){xr(s),is(s),s.g=null;var f=2}else if(Zi(s.h,l))h=l.D,aa(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=s.B;f=vr(),xe(f,new Jo(f,h)),kr(s)}else Sa(s);else if(R=l.s,R==3||R==0&&0<l.X||!(f==1&&pd(s,l)||f==2&&rs(s)))switch(h&&0<h.length&&(l=s.h,l.i=l.i.concat(h)),R){case 1:Ot(s,5);break;case 4:Ot(s,10);break;case 3:Ot(s,6);break;default:Ot(s,2)}}}function ka(s,l){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*l}function Ot(s,l){if(s.j.info("Error code "+l),l==2){var h=A(s.fb,s),f=s.Xa;const R=!f;f=new Dt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ir(f,"https"),Rr(f),R?ad(f.toString(),h):ld(f.toString(),h)}else Ne(2);s.G=0,s.l&&s.l.sa(l),xa(s),Aa(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function xa(s){if(s.G=0,s.ka=[],s.l){const l=la(s.h);(l.length!=0||s.i.length!=0)&&(k(s.ka,l),k(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Na(s,l,h){var f=h instanceof Dt?Ye(h):new Dt(h);if(f.g!="")l&&(f.g=l+"."+f.g),Ar(f,f.s);else{var R=c.location;f=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new Dt(null);f&&Ir(C,f),l&&(C.g=l),R&&Ar(C,R),h&&(C.l=h),f=C}return h=s.D,l=s.ya,h&&l&&te(f,h,l),te(f,"VER",s.la),Vn(s,f),f}function Da(s,l,h){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ae(new br({eb:h})):new ae(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}n=Oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Nr(){}Nr.prototype.g=function(s,l){return new Me(s,l)};function Me(s,l){Ae.call(this),this.g=new Ia(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!M(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Zt(this)}S(Me,Ae),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){ns(this.g)},Me.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=qi(s),s=h);l.i.push(new Jh(l.Ya++,s)),l.G==3&&kr(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,ns(this.g),delete this.g,Me.aa.N.call(this)};function Va(s){Wi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const h in l){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}S(Va,Wi);function La(){Ki.call(this),this.status=1}S(La,Ki);function Zt(s){this.g=s}S(Zt,Oa),Zt.prototype.ua=function(){xe(this.g,"a")},Zt.prototype.ta=function(s){xe(this.g,new Va(s))},Zt.prototype.sa=function(s){xe(this.g,new La)},Zt.prototype.ra=function(){xe(this.g,"b")},Nr.prototype.createWebChannel=Nr.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,Pc=function(){return new Nr},Cc=function(){return vr()},Sc=xt,Ss={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,qr=Er,Yo.COMPLETE="complete",bc=Yo,Ko.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,jn=Ko,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Rc=ae}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});const Ya="@firebase/firestore",Za="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ce.UNAUTHENTICATED=new Ce(null),Ce.GOOGLE_CREDENTIALS=new Ce("google-credentials-uid"),Ce.FIRST_PARTY=new Ce("first-party-uid"),Ce.MOCK_USER=new Ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new wi("@firebase/firestore");function tn(){return $t.logLevel}function F(n,...e){if($t.logLevel<=z.DEBUG){const t=e.map(Xs);$t.debug(`Firestore (${yn}): ${n}`,...t)}}function Ht(n,...e){if($t.logLevel<=z.ERROR){const t=e.map(Xs);$t.error(`Firestore (${yn}): ${n}`,...t)}}function Ii(n,...e){if($t.logLevel<=z.WARN){const t=e.map(Xs);$t.warn(`Firestore (${yn}): ${n}`,...t)}}function Xs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function q(n="Unexpected state"){const e=`FIRESTORE (${yn}) INTERNAL ASSERTION FAILED: `+n;throw Ht(e),new Error(e)}function ce(n,e){n||q()}function ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ce.UNAUTHENTICATED))}shutdown(){}}class pp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mp{constructor(e){this.t=e,this.currentUser=Ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ft,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ft)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ce(e)}}class gp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ce.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class _p{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new gp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class el{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yp{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ze(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ce(this.o===void 0);const r=o=>{o.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new el(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ce(typeof t.token=="string"),this.R=t.token,new el(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=vp(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function un(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=-62135596800,nl=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*nl);return new ge(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tl)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nl}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-tl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new ge(0,0))}static max(){return new ne(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="__name__";class qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(),r===void 0?r=e.length-t:r>e.length-t&&q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=qe.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=qe.isNumericId(e),i=qe.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?qe.extractNumericId(e).compare(qe.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qs.fromString(e.substring(4,e.length-2))}}class le extends qe{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Ep=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends qe{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return Ep.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rl}static keyField(){return new Te([rl])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new U(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new U(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new U(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(le.fromString(e))}static fromName(e){return new $(le.fromString(e).popFirst(5))}static empty(){return new $(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new le(e.slice()))}}/**
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
 */const Qn=-1;function Tp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new Rt(i,$.empty(),e)}function wp(n){return new Rt(n.readTime,n.key,Qn)}class Rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rt(ne.min(),$.empty(),Qn)}static max(){return new Rt(ne.max(),$.empty(),Qn)}}function Ip(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Ap)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},u=>r(u))}),a=!0,o===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new x((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function bp(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function sr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ys{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ys.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=-1;function eo(n){return n==null}function ri(n){return n===0&&1/n==-1/0}function Sp(n){return typeof n=="number"&&Number.isInteger(n)&&!ri(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="";function Cp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=il(e)),e=Pp(n.get(t),e);return il(e)}function Pp(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Nc:t+="";break;default:t+=o}}return t}function il(n){return n+Nc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new Le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new Le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lr(this.root,e,this.comparator,!0)}}class Lr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??ve.RED,this.left=i??ve.EMPTY,this.right=o??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new ve(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,r,i,o){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new Le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ol(this.data.getIterator())}getIteratorFrom(e){return new ol(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class ol{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new $e([])}unionWith(e){let t=new we(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new $e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return un(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new kp("Invalid base64 string: "+o):o}}(e);return new Ge(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const xp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(n){if(ce(!!n),typeof n=="string"){let e=0;const t=xp.exec(n);if(ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?Ge.fromBase64String(n):Ge.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="server_timestamp",Vc="__type__",Lc="__previous_value__",Mc="__local_write_time__";function to(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Vc])===null||t===void 0?void 0:t.stringValue)===Oc}function no(n){const e=n.mapValue.fields[Lc];return to(e)?no(e):e}function ii(n){const e=qt(n.mapValue.fields[Mc].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,r,i,o,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const si="(default)";class oi{constructor(e,t){this.projectId=e,this.database=t||si}static empty(){return new oi("","")}get isDefaultDatabase(){return this.database===si}isEqual(e){return e instanceof oi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="__type__",Dp="__max__",Mr={mapValue:{}},Uc="__vector__",Cs="value";function zt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?to(n)?4:Vp(n)?9007199254740991:Op(n)?10:11:q()}function Qe(n,e){if(n===e)return!0;const t=zt(n);if(t!==zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ii(n).isEqual(ii(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=qt(i.timestampValue),c=qt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return hn(i.bytesValue).isEqual(hn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Ee(i.geoPointValue.latitude)===Ee(o.geoPointValue.latitude)&&Ee(i.geoPointValue.longitude)===Ee(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ee(i.integerValue)===Ee(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Ee(i.doubleValue),c=Ee(o.doubleValue);return a===c?ri(a)===ri(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return un(n.arrayValue.values||[],e.arrayValue.values||[],Qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(sl(a)!==sl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Qe(a[u],c[u])))return!1;return!0}(n,e);default:return q()}}function Xn(n,e){return(n.values||[]).find(t=>Qe(t,e))!==void 0}function dn(n,e){if(n===e)return 0;const t=zt(n),r=zt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=Ee(o.integerValue||o.doubleValue),u=Ee(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return al(n.timestampValue,e.timestampValue);case 4:return al(ii(n),ii(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(o,a){const c=hn(o),u=hn(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=Q(c[d],u[d]);if(m!==0)return m}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Q(Ee(o.latitude),Ee(a.latitude));return c!==0?c:Q(Ee(o.longitude),Ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ll(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,u,d,m;const v=o.fields||{},A=a.fields||{},b=(c=v[Cs])===null||c===void 0?void 0:c.arrayValue,S=(u=A[Cs])===null||u===void 0?void 0:u.arrayValue,O=Q(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((m=S==null?void 0:S.values)===null||m===void 0?void 0:m.length)||0);return O!==0?O:ll(b,S)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Mr.mapValue&&a===Mr.mapValue)return 0;if(o===Mr.mapValue)return 1;if(a===Mr.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let v=0;v<u.length&&v<m.length;++v){const A=Q(u[v],m[v]);if(A!==0)return A;const b=dn(c[u[v]],d[m[v]]);if(b!==0)return b}return Q(u.length,m.length)}(n.mapValue,e.mapValue);default:throw q()}}function al(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=qt(n),r=qt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function ll(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=dn(t[i],r[i]);if(o)return o}return Q(t.length,r.length)}function fn(n){return Ps(n)}function Ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return $.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ps(t.fields[a])}`;return i+"}"}(n.mapValue):q()}function zr(n){switch(zt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=no(n);return e?16+zr(e):16;case 5:return 2*n.stringValue.length;case 6:return hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+zr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return vn(r.fields,(o,a)=>{i+=o.length+zr(a)}),i}(n.mapValue);default:throw q()}}function ks(n){return!!n&&"integerValue"in n}function ro(n){return!!n&&"arrayValue"in n}function Wr(n){return!!n&&"mapValue"in n}function Op(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fc])===null||t===void 0?void 0:t.stringValue)===Uc}function Bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return vn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Bn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bn(t)}setAll(e){let t=Te.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Bn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){vn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Be(Bn(this.value))}}function jc(n){const e=[];return vn(n.fields,(t,r)=>{const i=new Te([t]);if(Wr(r)){const o=jc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new $e(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,r,i,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new je(e,0,ne.min(),ne.min(),ne.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new je(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new je(e,2,t,ne.min(),ne.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,ne.min(),ne.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ai{constructor(e,t){this.position=e,this.inclusive=t}}function cl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),t.key):r=dn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ul(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Qe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class li{constructor(e,t="asc"){this.field=e,this.dir=t}}function Lp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Bc{}class me extends Bc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Fp(e,t,r):t==="array-contains"?new Bp(e,r):t==="in"?new $p(e,r):t==="not-in"?new Hp(e,r):t==="array-contains-any"?new qp(e,r):new me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Up(e,r):new jp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(dn(t,this.value)):t!==null&&zt(this.value)===zt(t)&&this.matchesComparison(dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bt extends Bc{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new bt(e,t)}matches(e){return $c(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function $c(n){return n.op==="and"}function Hc(n){return Mp(n)&&$c(n)}function Mp(n){for(const e of n.filters)if(e instanceof bt)return!1;return!0}function xs(n){if(n instanceof me)return n.field.canonicalString()+n.op.toString()+fn(n.value);if(Hc(n))return n.filters.map(e=>xs(e)).join(",");{const e=n.filters.map(t=>xs(t)).join(",");return`${n.op}(${e})`}}function qc(n,e){return n instanceof me?function(r,i){return i instanceof me&&r.op===i.op&&r.field.isEqual(i.field)&&Qe(r.value,i.value)}(n,e):n instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&qc(a,i.filters[c]),!0):!1}(n,e):void q()}function zc(n){return n instanceof me?function(t){return`${t.field.canonicalString()} ${t.op} ${fn(t.value)}`}(n):n instanceof bt?function(t){return t.op.toString()+" {"+t.getFilters().map(zc).join(" ,")+"}"}(n):"Filter"}class Fp extends me{constructor(e,t,r){super(e,t,r),this.key=$.fromName(r.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class Up extends me{constructor(e,t){super(e,"in",t),this.keys=Wc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jp extends me{constructor(e,t){super(e,"not-in",t),this.keys=Wc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Wc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>$.fromName(r.referenceValue))}class Bp extends me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ro(t)&&Xn(t.arrayValue,this.value)}}class $p extends me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xn(this.value.arrayValue,t)}}class Hp extends me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xn(this.value.arrayValue,t)}}class qp extends me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Xn(this.value.arrayValue,r))}}/**
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
 */class zp{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function hl(n,e=null,t=[],r=[],i=null,o=null,a=null){return new zp(n,e,t,r,i,o,a)}function io(n){const e=ee(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fn(r)).join(",")),e.le=t}return e.le}function so(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Lp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ul(n.startAt,e.startAt)&&ul(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Wp(n,e,t,r,i,o,a,c){return new Ai(n,e,t,r,i,o,a,c)}function Kp(n){return new Ai(n)}function dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gp(n){return n.collectionGroup!==null}function $n(n){const e=ee(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new we(Te.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new li(o,r))}),t.has(Te.keyField().canonicalString())||e.he.push(new li(Te.keyField(),r))}return e.he}function Ut(n){const e=ee(n);return e.Pe||(e.Pe=Qp(e,$n(n))),e.Pe}function Qp(n,e){if(n.limitType==="F")return hl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new li(i.field,o)});const t=n.endAt?new ai(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ai(n.startAt.position,n.startAt.inclusive):null;return hl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ns(n,e,t){return new Ai(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kc(n,e){return so(Ut(n),Ut(e))&&n.limitType===e.limitType}function Gc(n){return`${io(Ut(n))}|lt:${n.limitType}`}function Mn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>zc(i)).join(", ")}]`),eo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>fn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>fn(i)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function oo(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of $n(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,$n(r),i)||r.endAt&&!function(a,c,u){const d=cl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,$n(r),i))}(n,e)}function Xp(n){return(e,t)=>{let r=!1;for(const i of $n(n)){const o=Jp(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Jp(n,e,t){const r=n.field.isKeyField()?$.comparator(e.key,t.key):function(o,a,c){const u=a.data.field(o),d=c.data.field(o);return u!==null&&d!==null?dn(u,d):q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Dc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=new Le($.comparator);function ci(){return Yp}const Qc=new Le($.comparator);function Fr(...n){let e=Qc;for(const t of n)e=e.insert(t.key,t);return e}function Xc(n){let e=Qc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Lt(){return Hn()}function Jc(){return Hn()}function Hn(){return new Kt(n=>n.toString(),(n,e)=>n.isEqual(e))}const Zp=new Le($.comparator),em=new we($.comparator);function Pe(...n){let e=em;for(const t of n)e=e.add(t);return e}const tm=new we(Q);function nm(){return tm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ri(e)?"-0":e}}function Yc(n){return{integerValue:""+n}}function rm(n,e){return Sp(e)?Yc(e):ao(n,e)}/**
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
 */class Ri{constructor(){this._=void 0}}function im(n,e,t){return n instanceof ui?function(i,o){const a={fields:{[Vc]:{stringValue:Oc},[Mc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&to(o)&&(o=no(o)),o&&(a.fields[Lc]=o),{mapValue:a}}(t,e):n instanceof Jn?eu(n,e):n instanceof Yn?tu(n,e):function(i,o){const a=Zc(i,o),c=fl(a)+fl(i.Ie);return ks(a)&&ks(i.Ie)?Yc(c):ao(i.serializer,c)}(n,e)}function sm(n,e,t){return n instanceof Jn?eu(n,e):n instanceof Yn?tu(n,e):t}function Zc(n,e){return n instanceof hi?function(r){return ks(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ui extends Ri{}class Jn extends Ri{constructor(e){super(),this.elements=e}}function eu(n,e){const t=nu(e);for(const r of n.elements)t.some(i=>Qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Yn extends Ri{constructor(e){super(),this.elements=e}}function tu(n,e){let t=nu(e);for(const r of n.elements)t=t.filter(i=>!Qe(i,r));return{arrayValue:{values:t}}}class hi extends Ri{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function fl(n){return Ee(n.integerValue||n.doubleValue)}function nu(n){return ro(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function om(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Jn&&i instanceof Jn||r instanceof Yn&&i instanceof Yn?un(r.elements,i.elements,Qe):r instanceof hi&&i instanceof hi?Qe(r.Ie,i.Ie):r instanceof ui&&i instanceof ui}(n.transform,e.transform)}class am{constructor(e,t){this.version=e,this.transformResults=t}}class it{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bi{}function ru(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new su(n.key,it.none()):new or(n.key,n.data,it.none());{const t=n.data,r=Be.empty();let i=new we(Te.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Gt(n.key,r,new $e(i.toArray()),it.none())}}function lm(n,e,t){n instanceof or?function(i,o,a){const c=i.value.clone(),u=ml(i.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Gt?function(i,o,a){if(!Kr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ml(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(iu(i)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function qn(n,e,t,r){return n instanceof or?function(o,a,c,u){if(!Kr(o.precondition,a))return c;const d=o.value.clone(),m=gl(o.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Gt?function(o,a,c,u){if(!Kr(o.precondition,a))return c;const d=gl(o.fieldTransforms,u,a),m=a.data;return m.setAll(iu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,e,t,r):function(o,a,c){return Kr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function cm(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Zc(r.transform,i||null);o!=null&&(t===null&&(t=Be.empty()),t.set(r.field,o))}return t||null}function pl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&un(r,i,(o,a)=>om(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class or extends bi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gt extends bi{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function iu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ml(n,e,t){const r=new Map;ce(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,sm(a,c,t[i]))}return r}function gl(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,im(o,a,e))}return r}class su extends bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class um extends bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&lm(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=qn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=qn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Jc();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const u=ru(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&un(this.mutations,e.mutations,(t,r)=>pl(t,r))&&un(this.baseMutations,e.baseMutations,(t,r)=>pl(t,r))}}class lo{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ce(e.mutations.length===r.length);let i=function(){return Zp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new lo(e,t,r,i)}}/**
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
 */class dm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var he,W;function fm(n){switch(n){case D.OK:return q();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return q()}}function pm(n){if(n===void 0)return Ht("GRPC error has no .code"),D.UNKNOWN;switch(n){case he.OK:return D.OK;case he.CANCELLED:return D.CANCELLED;case he.UNKNOWN:return D.UNKNOWN;case he.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case he.INTERNAL:return D.INTERNAL;case he.UNAVAILABLE:return D.UNAVAILABLE;case he.UNAUTHENTICATED:return D.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case he.NOT_FOUND:return D.NOT_FOUND;case he.ALREADY_EXISTS:return D.ALREADY_EXISTS;case he.PERMISSION_DENIED:return D.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case he.ABORTED:return D.ABORTED;case he.OUT_OF_RANGE:return D.OUT_OF_RANGE;case he.UNIMPLEMENTED:return D.UNIMPLEMENTED;case he.DATA_LOSS:return D.DATA_LOSS;default:return q()}}(W=he||(he={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Qs([4294967295,4294967295],0);class mm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ds(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _m(n,e){return Ds(n,e.toTimestamp())}function on(n){return ce(!!n),ne.fromTimestamp(function(t){const r=qt(t);return new ge(r.seconds,r.nanos)}(n))}function ou(n,e){return Os(n,e).canonicalString()}function Os(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ym(n){const e=le.fromString(n);return ce(bm(e)),e}function Vs(n,e){return ou(n.databaseId,e.path)}function vm(n){const e=ym(n);return e.length===4?le.emptyPath():Tm(e)}function Em(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tm(n){return ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _l(n,e,t){return{name:Vs(n,e),fields:t.value.mapValue.fields}}function wm(n,e){let t;if(e instanceof or)t={update:_l(n,e.key,e.value)};else if(e instanceof su)t={delete:Vs(n,e.key)};else if(e instanceof Gt)t={update:_l(n,e.key,e.data),updateMask:Rm(e.fieldMask)};else{if(!(e instanceof um))return q();t={verify:Vs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof ui)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Jn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Yn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:_m(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:q()}(n,e.precondition)),t}function Im(n,e){return n&&n.length>0?(ce(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?on(i.updateTime):on(o);return a.isEqual(ne.min())&&(a=on(o)),new am(a,i.transformResults||[])}(t,e))):[]}function Am(n){let e=vm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ce(r===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(v){const A=au(v);return A instanceof bt&&Hc(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(v){return v.map(A=>function(S){return new li(nn(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(v){let A;return A=typeof v=="object"?v.value:v,eo(A)?null:A}(t.limit));let u=null;t.startAt&&(u=function(v){const A=!!v.before,b=v.values||[];return new ai(b,A)}(t.startAt));let d=null;return t.endAt&&(d=function(v){const A=!v.before,b=v.values||[];return new ai(b,A)}(t.endAt)),Wp(e,i,a,o,c,"F",u,d)}function au(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=nn(t.unaryFilter.field);return me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=nn(t.unaryFilter.field);return me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=nn(t.unaryFilter.field);return me.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nn(t.unaryFilter.field);return me.create(a,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(n):n.fieldFilter!==void 0?function(t){return me.create(nn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return bt.create(t.compositeFilter.filters.map(r=>au(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(n):q()}function nn(n){return Te.fromServerFormat(n.fieldPath)}function Rm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.Tt=e}}function Cm(n){const e=Am({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ns(e,e.limit,"L"):e}/**
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
 */class Pm{constructor(){this.Tn=new km}addToCollectionParentIndex(e,t){return this.Tn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(Rt.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class km{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new we(le.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new we(le.comparator)).toArray()}}/**
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
 */const yl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lu=41943040;class Oe{static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(lu,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new pn(0)}static Un(){return new pn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="LruGarbageCollector",xm=1048576;function El([n,e],[t,r]){const i=Q(n,t);return i===0?Q(e,r):i}class Nm{constructor(e){this.Hn=e,this.buffer=new we(El),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();El(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){F(vl,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){sr(t)?F(vl,"Ignoring IndexedDB error during garbage collection: ",t):await Js(t)}await this.er(3e5)})}}class Om{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Ys.ae);const r=new Nm(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(yl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yl):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,o,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,a=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,c=Date.now(),this.removeTargets(e,r,t))).next(v=>(o=v,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(d=Date.now(),tn()<=z.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(u-c)+`ms
	Removed ${v} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v})))}}function Vm(n,e){return new Om(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.changes=new Kt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&qn(r.mutation,i,$e.empty(),ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Pe()){const i=Lt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Fr();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Lt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Pe()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=ci();const a=Hn(),c=function(){return Hn()}();return t.forEach((u,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Gt)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),qn(m.mutation,d,m.mutation.getFieldMask(),ge.now())):a.set(d.key,$e.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var v;return c.set(d,new Mm(m,(v=a.get(d))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Hn();let i=new Le((a,c)=>a-c),o=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||$e.empty();m=c.applyToLocalView(d,m),r.set(u,m);const v=(i.get(c.batchId)||Pe()).add(u);i=i.insert(c.batchId,v)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,v=Jc();m.forEach(A=>{if(!o.has(A)){const b=ru(t.get(A),r.get(A));b!==null&&v.set(A,b),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):x.resolve(Lt());let c=Qn,u=o;return a.next(d=>x.forEach(d,(m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(m)?x.resolve():this.remoteDocumentCache.getEntry(e,m).next(A=>{u=u.insert(m,A)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,Pe())).next(m=>({batchId:c,changes:Xc(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next(r=>{let i=Fr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Fr();return this.indexManager.getCollectionParents(e,o).next(c=>x.forEach(c,u=>{const d=function(v,A){return new Ai(A,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((v,A)=>{a=a.insert(v,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,je.newInvalidDocument(m)))});let c=Fr();return a.forEach((u,d)=>{const m=o.get(u);m!==void 0&&qn(m.mutation,d,$e.empty(),ge.now()),oo(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return x.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:Cm(i.bundledQuery),readTime:on(i.readTime)}}(t)),x.resolve()}}/**
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
 */class jm{constructor(){this.overlays=new Le($.comparator),this.Rr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Lt();return x.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Et(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Lt(),o=t.length+1,a=new $(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Le((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Lt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Lt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return x.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dm(t,r));let o=this.Rr.get(t);o===void 0&&(o=Pe(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
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
 */class Bm{constructor(){this.sessionToken=Ge.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.Vr=new we(pe.mr),this.gr=new we(pe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new pe(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new $(new le([])),r=new pe(t,e),i=new pe(t,e+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new $(new le([])),r=new pe(t,e),i=new pe(t,e+1);let o=Pe();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new pe(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return $.comparator(e.key,t.key)||Q(e.Cr,t.Cr)}static pr(e,t){return Q(e.Cr,t.Cr)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new we(pe.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hm(o,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new pe(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Zs:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),i=new pe(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);o.push(c)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new we(Q);return t.forEach(i=>{const o=new pe(i,0),a=new pe(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{r=r.add(c.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new pe(new $(o),0);let c=new we(Q);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Cr)),!0)},a),x.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ce(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(t.mutations,i=>{const o=new pe(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new pe(t,0),i=this.Mr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.kr=e,this.docs=function(){return new Le($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=ci();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():je.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=ci();const a=t.path,c=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ip(wp(m),r)<=0||(i.has(m.key)||oo(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,r,i){q()}qr(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qm(this)}getSize(e){return x.resolve(this.size)}}class qm extends Lm{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.persistence=e,this.Qr=new Kt(t=>io(t),so),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.$r=0,this.Kr=new co,this.targetCount=0,this.Ur=pn.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),x.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new pn(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.zn(t),x.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),x.waitFor(o).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ys(0),this.zr=!1,this.zr=!0,this.jr=new Bm,this.referenceDelegate=e(this),this.Hr=new zm(this),this.indexManager=new Pm,this.remoteDocumentCache=function(i){return new Hm(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Sm(t),this.Yr=new Um(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new $m(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new Wm(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(e,t){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class Wm extends Rp{constructor(e){super(),this.currentSequenceNumber=e}}class uo{constructor(e){this.persistence=e,this.ti=new co,this.ni=null}static ri(e){return new uo(e)}get ii(){if(this.ni)return this.ni;throw q()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),x.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const i=$.fromPath(r);return this.si(e,i).next(o=>{o||t.removeEntry(i,ne.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return x.or([()=>x.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class di{constructor(e,t){this.persistence=e,this.oi=new Kt(r=>Cp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Vm(this,t)}static ri(e,t){return new di(e,t)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return x.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(o=>o?x.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,o.removeEntry(a,ne.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),x.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zr(e.data.value)),t}ar(e,t,r){return x.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=Pe(),i=Pe();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ho(e,t.fromCache,r,i)}}/**
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
 */class Km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Gm{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return $d()?8:bp(ke())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.rs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Km;return this._s(e,t,a).next(c=>{if(o.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>o.result)}us(e,t,r,i){return r.documentReadCount<this.es?(tn()<=z.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(tn()<=z.DEBUG&&F("QueryEngine","Query:",Mn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(tn()<=z.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ut(t))):x.resolve())}rs(e,t){if(dl(t))return x.resolve(null);let r=Ut(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ns(t,null,"F"),r=Ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Pe(...o);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,a,u.readTime)?this.rs(e,Ns(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,i){return dl(t)||i.isEqual(ne.min())?x.resolve(null):this.ns.getDocuments(e,r).next(o=>{const a=this.cs(t,o);return this.ls(t,a,r,i)?x.resolve(null):(tn()<=z.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(t)),this.hs(e,a,t,Tp(i,Qn)).next(c=>c))})}cs(e,t){let r=new we(Xp(e));return t.forEach((i,o)=>{oo(e,o)&&(r=r.add(o))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(e,t,r){return tn()<=z.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.ns.getDocumentsMatchingQuery(e,t,Rt.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="LocalStore";class Xm{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Le(Q),this.Is=new Kt(o=>io(o),so),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fm(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Jm(n,e,t,r){return new Xm(n,e,t,r)}async function uu(n,e){const t=ee(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let u=Pe();for(const d of i){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Ym(n,e){const t=ee(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const v=d.batch,A=v.keys();let b=x.resolve();return A.forEach(S=>{b=b.next(()=>m.getEntry(u,S)).next(O=>{const k=d.docVersions.get(S);ce(k!==null),O.version.compareTo(k)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),b.next(()=>c.mutationQueue.removeMutationBatch(u,v))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=Pe();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Zm(n){const e=ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function eg(n,e){const t=ee(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Tl{constructor(){this.activeTargetIds=nm()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tg{constructor(){this.ho=new Tl,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Tl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ng{To(e){}shutdown(){}}/**
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
 */const wl="ConnectivityMonitor";class Il{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){F(wl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){F(wl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ur=null;function Ls(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RestConnection",rg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ig{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===si?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,t,r,i,o){const a=Ls(),c=this.So(e,t.toUriEncodedString());F(fs,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,o),this.vo(e,c,u,r).then(d=>(F(fs,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ii(fs,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,o,a){return this.bo(e,t,r,i,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}So(e,t){const r=rg[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="WebChannelConnection";class og extends ig{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const o=Ls();return new Promise((a,c)=>{const u=new Rc;u.setWithCredentials(!0),u.listenOnce(bc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case qr.NO_ERROR:const m=u.getResponseJson();F(Se,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case qr.TIMEOUT:F(Se,`RPC '${e}' ${o} timed out`),c(new U(D.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const v=u.getStatus();if(F(Se,`RPC '${e}' ${o} failed with status:`,v,"response text:",u.getResponseText()),v>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const b=A==null?void 0:A.error;if(b&&b.status&&b.message){const S=function(k){const N=k.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(N)>=0?N:D.UNKNOWN}(b.status);c(new U(S,b.message))}else c(new U(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new U(D.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{F(Se,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);F(Se,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=Ls(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pc(),c=Cc(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=o.join("");F(Se,`Creating RPC '${e}' stream ${i}: ${m}`,u);const v=a.createWebChannel(m,u);let A=!1,b=!1;const S=new sg({Fo:k=>{b?F(Se,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(A||(F(Se,`Opening RPC '${e}' stream ${i} transport.`),v.open(),A=!0),F(Se,`RPC '${e}' stream ${i} sending:`,k),v.send(k))},Mo:()=>v.close()}),O=(k,N,M)=>{k.listen(N,L=>{try{M(L)}catch(B){setTimeout(()=>{throw B},0)}})};return O(v,jn.EventType.OPEN,()=>{b||(F(Se,`RPC '${e}' stream ${i} transport opened.`),S.Qo())}),O(v,jn.EventType.CLOSE,()=>{b||(b=!0,F(Se,`RPC '${e}' stream ${i} transport closed`),S.Ko())}),O(v,jn.EventType.ERROR,k=>{b||(b=!0,Ii(Se,`RPC '${e}' stream ${i} transport errored:`,k),S.Ko(new U(D.UNAVAILABLE,"The operation could not be completed")))}),O(v,jn.EventType.MESSAGE,k=>{var N;if(!b){const M=k.data[0];ce(!!M);const L=M,B=(L==null?void 0:L.error)||((N=L[0])===null||N===void 0?void 0:N.error);if(B){F(Se,`RPC '${e}' stream ${i} received error:`,B);const X=B.status;let J=function(y){const T=he[y];if(T!==void 0)return pm(T)}(X),I=B.message;J===void 0&&(J=D.INTERNAL,I="Unknown error status: "+X+" with message "+B.message),b=!0,S.Ko(new U(J,I)),v.close()}else F(Se,`RPC '${e}' stream ${i} received:`,M),S.Uo(M)}}),O(c,Sc.STAT_EVENT,k=>{k.stat===Ss.PROXY?F(Se,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Ss.NOPROXY&&F(Se,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.$o()},0),S}}function ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n){return new mm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="PersistentStream";class ag{constructor(e,t,r,i,o,a,c,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new hu(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Ht(t.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new U(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return F(Al,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(F(Al,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lg extends ag{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Im(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=Em(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wm(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{}class ug extends cg{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.bo(e,Os(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(D.UNKNOWN,o.toString())})}Co(e,t,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,Os(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(D.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class hg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ht(t),this.N_=!1):F("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="RemoteStore";class dg{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{cr(this)&&(F(ar,"Restarting streams for network reachability change."),await async function(u){const d=ee(u);d.W_.add(4),await lr(d),d.j_.set("Unknown"),d.W_.delete(4),await Ci(d)}(this))})}),this.j_=new hg(r,i)}}async function Ci(n){if(cr(n))for(const e of n.G_)await e(!0)}async function lr(n){for(const e of n.G_)await e(!1)}function cr(n){return ee(n).W_.size===0}async function du(n,e,t){if(!sr(e))throw e;n.W_.add(1),await lr(n),n.j_.set("Offline"),t||(t=()=>Zm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(ar,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ci(n)})}function fu(n,e){return e().catch(t=>du(n,t,e))}async function Pi(n){const e=ee(n),t=St(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Zs;for(;fg(e);)try{const i=await eg(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,pg(e,i)}catch(i){await du(e,i)}pu(e)&&mu(e)}function fg(n){return cr(n)&&n.K_.length<10}function pg(n,e){n.K_.push(e);const t=St(n);t.c_()&&t.b_&&t.S_(e.mutations)}function pu(n){return cr(n)&&!St(n).u_()&&n.K_.length>0}function mu(n){St(n).start()}async function mg(n){St(n).C_()}async function gg(n){const e=St(n);for(const t of n.K_)e.S_(t.mutations)}async function _g(n,e,t){const r=n.K_.shift(),i=lo.from(r,e,t);await fu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Pi(n)}async function yg(n,e){e&&St(n).b_&&await async function(r,i){if(function(a){return fm(a)&&a!==D.ABORTED}(i.code)){const o=r.K_.shift();St(r).h_(),await fu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Pi(r)}}(n,e),pu(n)&&mu(n)}async function Rl(n,e){const t=ee(n);t.asyncQueue.verifyOperationInProgress(),F(ar,"RemoteStore received new credentials");const r=cr(t);t.W_.add(3),await lr(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ci(t)}async function vg(n,e){const t=ee(n);e?(t.W_.delete(2),await Ci(t)):e||(t.W_.add(2),await lr(t),t.j_.set("Unknown"))}function St(n){return n.Y_||(n.Y_=function(t,r,i){const o=ee(t);return o.M_(),new lg(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:mg.bind(null,n),Lo:yg.bind(null,n),D_:gg.bind(null,n),v_:_g.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Pi(n)):(await n.Y_.stop(),n.K_.length>0&&(F(ar,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,c=new fo(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(n,e){if(Ht("AsyncQueue",`${e}: ${n}`),sr(n))return new U(D.UNAVAILABLE,`${e}: ${n}`);throw n}class Eg{constructor(){this.queries=bl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=ee(t),o=i.queries;i.queries=bl(),o.forEach((a,c)=>{for(const u of c.ta)u.onError(r)})})(this,new U(D.ABORTED,"Firestore shutting down"))}}function bl(){return new Kt(n=>Gc(n),Kc)}function Tg(n){n.ia.forEach(e=>{e.next()})}var Sl,Cl;(Cl=Sl||(Sl={}))._a="default",Cl.Cache="cache";const wg="SyncEngine";class Ig{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Kt(c=>Gc(c),Kc),this.qa=new Map,this.Qa=new Set,this.$a=new Le($.comparator),this.Ka=new Map,this.Ua=new co,this.Wa={},this.Ga=new Map,this.za=pn.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ag(n,e,t){const r=Cg(n);try{const i=await function(a,c){const u=ee(a),d=ge.now(),m=c.reduce((b,S)=>b.add(S.key),Pe());let v,A;return u.persistence.runTransaction("Locally write mutations","readwrite",b=>{let S=ci(),O=Pe();return u.ds.getEntries(b,m).next(k=>{S=k,S.forEach((N,M)=>{M.isValidDocument()||(O=O.add(N))})}).next(()=>u.localDocuments.getOverlayedDocuments(b,S)).next(k=>{v=k;const N=[];for(const M of c){const L=cm(M,v.get(M.key).overlayedDocument);L!=null&&N.push(new Gt(M.key,L,jc(L.value.mapValue),it.exists(!0)))}return u.mutationQueue.addMutationBatch(b,d,N,c)}).next(k=>{A=k;const N=k.applyToLocalDocumentSet(v,O);return u.documentOverlayCache.saveOverlays(b,k.batchId,N)})}).then(()=>({batchId:A.batchId,changes:Xc(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Wa[a.currentUser.toKey()];d||(d=new Le(Q)),d=d.insert(c,u),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,t),await ki(r,i.changes),await Pi(r.remoteStore)}catch(i){const o=gu(i,"Failed to persist write");t.reject(o)}}function Pl(n,e,t){const r=ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((o,a)=>{const c=a.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=ee(a);u.onlineState=c;let d=!1;u.queries.forEach((m,v)=>{for(const A of v.ta)A.sa(c)&&(d=!0)}),d&&Tg(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rg(n,e){const t=ee(n),r=e.batch.batchId;try{const i=await Ym(t.localStore,e);yu(t,r,null),_u(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,i)}catch(i){await Js(i)}}async function bg(n,e,t){const r=ee(n);try{const i=await function(a,c){const u=ee(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(v=>(ce(v!==null),m=v.keys(),u.mutationQueue.removeMutationBatch(d,v))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);yu(r,e,t),_u(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,i)}catch(i){await Js(i)}}function _u(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function yu(n,e,t){const r=ee(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}async function ki(n,e,t){const r=ee(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{a.push(r.Ha(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(m=void 0)===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(d){i.push(d);const v=ho.Yi(u.targetId,d);o.push(v)}}))}),await Promise.all(a),r.La.p_(i),await async function(u,d){const m=ee(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>x.forEach(d,A=>x.forEach(A.Hi,b=>m.persistence.referenceDelegate.addReference(v,A.targetId,b)).next(()=>x.forEach(A.Ji,b=>m.persistence.referenceDelegate.removeReference(v,A.targetId,b)))))}catch(v){if(!sr(v))throw v;F(Qm,"Failed to update sequence numbers: "+v)}for(const v of d){const A=v.targetId;if(!v.fromCache){const b=m.Ts.get(A),S=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(S);m.Ts=m.Ts.insert(A,O)}}}(r.localStore,o))}async function Sg(n,e){const t=ee(n);if(!t.currentUser.isEqual(e)){F(wg,"User change. New user:",e.toKey());const r=await uu(t.localStore,e);t.currentUser=e,function(o,a){o.Ga.forEach(c=>{c.forEach(u=>{u.reject(new U(D.CANCELLED,a))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Rs)}}function Cg(n){const e=ee(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bg.bind(null,e),e}class fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Si(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Jm(this.persistence,new Gm,e.initialUser,this.serializer)}Xa(e){return new cu(uo.ri,this.serializer)}Za(e){return new tg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fi.provider={build:()=>new fi};class Pg extends fi{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ce(this.persistence.referenceDelegate instanceof di);const r=this.persistence.referenceDelegate.garbageCollector;return new Dm(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new cu(r=>di.ri(r,t),this.serializer)}}class Ms{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sg.bind(null,this.syncEngine),await vg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Eg}()}createDatastore(e){const t=Si(e.databaseInfo.databaseId),r=function(o){return new og(o)}(e.databaseInfo);return function(o,a,c,u){return new ug(o,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new dg(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Pl(this.syncEngine,t,0),function(){return Il.D()?new Il:new ng}())}createSyncEngine(e,t){return function(i,o,a,c,u,d,m){const v=new Ig(i,o,a,c,u,d);return m&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=ee(i);F(ar,"RemoteStore shutting down."),o.W_.add(5),await lr(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ms.provider={build:()=>new Ms};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="FirestoreClient";class kg{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ce.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{F(Ct,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F(Ct,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=gu(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ms(n,e){n.asyncQueue.verifyOperationInProgress(),F(Ct,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await uu(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xg(n);F(Ct,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Rl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Rl(e.remoteStore,i)),n._onlineComponents=e}async function xg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(Ct,"Using user provided OfflineComponentProvider");try{await ms(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ii("Error using user provided cache. Falling back to memory cache: "+t),await ms(n,new fi)}}else F(Ct,"Using default OfflineComponentProvider"),await ms(n,new Pg(void 0));return n._offlineComponents}async function Ng(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(Ct,"Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(F(Ct,"Using default OnlineComponentProvider"),await kl(n,new Ms))),n._onlineComponents}function Dg(n){return Ng(n).then(e=>e.syncEngine)}/**
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
 */function vu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,e,t){if(!t)throw new U(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Og(n,e,t,r){if(e===!0&&r===!0)throw new U(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nl(n){if(!$.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Dl(n){if($.isDocumentKey(n))throw new U(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function po(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q()}function Tu(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=po(n);throw new U(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu="firestore.googleapis.com",Ol=!0;class Vl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wu,this.ssl=Ol}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ol;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xm)throw new U(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Og("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new U(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fp;switch(r.type){case"firstParty":return new _p(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=xl.get(t);r&&(F("ComponentProvider","Removing Datastore"),xl.delete(t),r.terminate())}(this),Promise.resolve()}}function Vg(n,e,t,r={}){var i;const o=(n=Tu(n,xi))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;o.host!==wu&&o.host!==c&&Ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!Bt(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Ce.MOCK_USER;else{d=Vd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new U(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ce(v)}n._authCredentials=new pp(new kc(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mo(this.firestore,e,this._query)}}class st{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}}class It extends mo{constructor(e,t,r){super(e,t,Kp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new $(e))}withConverter(e){return new It(this.firestore,e,this._path)}}function Lg(n,e,...t){if(n=Fe(n),Eu("collection","path",e),n instanceof xi){const r=le.fromString(e,...t);return Dl(r),new It(n,null,r)}{if(!(n instanceof st||n instanceof It))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Dl(r),new It(n.firestore,null,r)}}function Mg(n,e,...t){if(n=Fe(n),arguments.length===1&&(e=xc.newId()),Eu("doc","path",e),n instanceof xi){const r=le.fromString(e,...t);return Nl(r),new st(n,null,new $(r))}{if(!(n instanceof st||n instanceof It))throw new U(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Nl(r),new st(n.firestore,n instanceof It?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="AsyncQueue";class Ml{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new hu(this,"async_queue_retry"),this.bu=()=>{const r=ps();r&&F(Ll,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=ps();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ps();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ft;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!sr(e))throw e;F(Ll,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ht("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=fo.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&q()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Iu extends xi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Ml,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ml(e),this._firestoreClient=void 0,await e}}}function Fg(n,e){const t=typeof n=="object"?n:Gs(),r=typeof n=="string"?n:si,i=ir(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Od("firestore");o&&Vg(i,...o)}return i}function Ug(n){if(n._terminated)throw new U(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jg(n),n._firestoreClient}function jg(n){var e,t,r;const i=n._freezeSettings(),o=function(c,u,d,m){return new Np(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,vu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new kg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(Ge.fromBase64String(e))}catch(t){throw new U(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Zn(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */class Su{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=/^__.*__$/;class $g{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new or(e,this.data,t,this.fieldTransforms)}}function Cu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class go{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new go(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return pi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Cu(this.Lu)&&Bg.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Hg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Si(e)}ju(e,t,r,i=!1){return new go({Lu:e,methodName:t,zu:r,path:Te.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qg(n){const e=n._freezeSettings(),t=Si(n._databaseId);return new Hg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zg(n,e,t,r,i,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,e,t,i);Nu("Data must be an object, but it was:",a,r);const c=ku(r,a);let u,d;if(o.merge)u=new $e(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const v of o.mergeFields){const A=Wg(e,v,t);if(!a.contains(A))throw new U(D.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Qg(m,A)||m.push(A)}u=new $e(m),d=a.fieldTransforms.filter(v=>u.covers(v.field))}else u=null,d=a.fieldTransforms;return new $g(new Be(c),u,d)}function Pu(n,e){if(xu(n=Fe(n)))return Nu("Unsupported field value:",e,n),ku(n,e);if(n instanceof Ru)return function(r,i){if(!Cu(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let u=Pu(c,i.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ge.fromDate(r);return{timestampValue:Ds(i.serializer,o)}}if(r instanceof ge){const o=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ds(i.serializer,o)}}if(r instanceof bu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:gm(i.serializer,r._byteString)};if(r instanceof st){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ou(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Su)return function(a,c){return{mapValue:{fields:{[Fc]:{stringValue:Uc},[Cs]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return ao(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${po(r)}`)}(n,e)}function ku(n,e){const t={};return Dc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vn(n,(r,i)=>{const o=Pu(i,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function xu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof bu||n instanceof Zn||n instanceof st||n instanceof Ru||n instanceof Su)}function Nu(n,e,t){if(!xu(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=po(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function Wg(n,e,t){if((e=Fe(e))instanceof Au)return e._internalPath;if(typeof e=="string")return Gg(n,e);throw pi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Kg=new RegExp("[~\\*/\\[\\]]");function Gg(n,e,t){if(e.search(Kg)>=0)throw pi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Au(...e.split("."))._internalPath}catch{throw pi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new U(D.INVALID_ARGUMENT,c+n+u)}function Qg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function Jg(n,e){const t=Tu(n.firestore,Iu),r=Mg(n),i=Xg(n.converter,e);return Yg(t,[zg(qg(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then(()=>r)}function Yg(n,e){return function(r,i){const o=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Ag(await Dg(r),i,o)),o.promise}(Ug(n),e)}(function(e,t=!0){(function(i){yn=i})(_n),At(new at("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Iu(new mp(r.getProvider("auth-internal")),new yp(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oi(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),rt(Ya,Za,e),rt(Ya,Za,"esm2017")})();function _o(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Du(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zg=Du,Ou=new gn("auth","Firebase",Du());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new wi("@firebase/auth");function e_(n,...e){mi.logLevel<=z.WARN&&mi.warn(`Auth (${_n}): ${n}`,...e)}function Gr(n,...e){mi.logLevel<=z.ERROR&&mi.error(`Auth (${_n}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw yo(n,...e)}function We(n,...e){return yo(n,...e)}function Vu(n,e,t){const r=Object.assign(Object.assign({},Zg()),{[e]:t});return new gn("auth","Firebase",r).create(e,{appName:n.name})}function jt(n){return Vu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ou.create(n,...e)}function j(n,e,...t){if(!n)throw yo(e,...t)}function et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gr(e),new Error(e)}function ut(n,e){n||et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function t_(){return Fl()==="http:"||Fl()==="https:"}function Fl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(t_()||Ud()||"connection"in navigator)?navigator.onLine:!0}function r_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=Ld()||jd()}get(){return n_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(n,e){ut(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new ur(3e4,6e4);function Eo(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function En(n,e,t,r,i={}){return Mu(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=rr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},o);return Fd()||(d.referrerPolicy="no-referrer"),Lu.fetch()(Fu(n,n.config.apiHost,t,c),d)})}async function Mu(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},i_),e);try{const i=new a_(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw jr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw jr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw jr(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Vu(n,m,d);ct(n,m)}}catch(i){if(i instanceof ht)throw i;ct(n,"network-request-failed",{message:String(i)})}}async function o_(n,e,t,r,i={}){const o=await En(n,e,t,r,i);return"mfaPendingCredential"in o&&ct(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Fu(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?vo(n.config,i):`${n.config.apiScheme}://${i}`}class a_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(We(this.auth,"network-request-failed")),s_.get())})}}function jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=We(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(n,e){return En(n,"POST","/v1/accounts:delete",e)}async function Uu(n,e){return En(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c_(n,e=!1){const t=Fe(n),r=await t.getIdToken(e),i=To(r);j(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:zn(gs(i.auth_time)),issuedAtTime:zn(gs(i.iat)),expirationTime:zn(gs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function gs(n){return Number(n)*1e3}function To(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=mc(t);return i?JSON.parse(i):(Gr("Failed to decode base64 JWT payload"),null)}catch(i){return Gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ul(n){const e=To(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ht&&u_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function u_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await er(n,Uu(t,{idToken:r}));j(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?ju(o.providerUserInfo):[],c=f_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Us(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,v)}async function d_(n){const e=Fe(n);await gi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ju(n){return n.map(e=>{var{providerId:t}=e,r=_o(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(n,e){const t=await Mu(n,{},async()=>{const r=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Fu(n,i,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Lu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function m_(n,e){return En(n,"POST","/v2/accounts:revokeToken",Eo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=Ul(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await p_(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new an;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(j(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new an,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=_o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Us(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await er(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c_(this,e)}reload(){return d_(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await gi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(jt(this.auth));const e=await this.getIdToken();return await er(this,l_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,c,u,d,m;const v=(r=t.displayName)!==null&&r!==void 0?r:void 0,A=(i=t.email)!==null&&i!==void 0?i:void 0,b=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:L,emailVerified:B,isAnonymous:X,providerData:J,stsTokenManager:I}=t;j(L&&I,e,"internal-error");const _=an.fromJSON(this.name,I);j(typeof L=="string",e,"internal-error"),gt(v,e.name),gt(A,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof X=="boolean",e,"internal-error"),gt(b,e.name),gt(S,e.name),gt(O,e.name),gt(k,e.name),gt(N,e.name),gt(M,e.name);const y=new tt({uid:L,auth:e,email:A,emailVerified:B,displayName:v,isAnonymous:X,photoURL:S,phoneNumber:b,tenantId:O,stsTokenManager:_,createdAt:N,lastLoginAt:M});return J&&Array.isArray(J)&&(y.providerData=J.map(T=>Object.assign({},T))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const i=new an;i.updateFromServerResponse(t);const o=new tt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];j(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ju(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new an;c.updateFromIdToken(r);const u=new tt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Us(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new Map;function nt(n){ut(n instanceof Function,"Expected a class definition");let e=jl.get(n);return e?(ut(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,jl.set(n,e),e)}/**
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
 */class Bu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bu.type="NONE";const Bl=Bu;/**
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
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class ln{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Qr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ln(nt(Bl),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||nt(Bl);const a=Qr(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){const v=tt._fromJSON(e,m);d!==o&&(c=v),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new ln(o,e,r):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new ln(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($u(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ku(e))return"Blackberry";if(Gu(e))return"Webos";if(Hu(e))return"Safari";if((e.includes("chrome/")||qu(e))&&!e.includes("edge/"))return"Chrome";if(Wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $u(n=ke()){return/firefox\//i.test(n)}function Hu(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qu(n=ke()){return/crios\//i.test(n)}function zu(n=ke()){return/iemobile/i.test(n)}function Wu(n=ke()){return/android/i.test(n)}function Ku(n=ke()){return/blackberry/i.test(n)}function Gu(n=ke()){return/webos/i.test(n)}function wo(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function g_(n=ke()){var e;return wo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function __(){return Bd()&&document.documentMode===10}function Qu(n=ke()){return wo(n)||Wu(n)||Gu(n)||Ku(n)||/windows phone/i.test(n)||zu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(n,e=[]){let t;switch(n){case"Browser":t=$l(ke());break;case"Worker":t=`${$l(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_n}/${r}`}/**
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
 */class y_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function v_(n,e={}){return En(n,"GET","/v2/passwordPolicy",Eo(n,e))}/**
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
 */const E_=6;class T_{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:E_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hl(this),this.idTokenSubscription=new Hl(this),this.beforeStateQueue=new y_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ou,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nt(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Uu(this,{idToken:e}),r=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=r_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(jt(this));const t=e?Fe(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v_(this),t=new T_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await m_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&nt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[nt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ze(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&e_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Io(n){return Fe(n)}class Hl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gd(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I_(n){Ao=n}function A_(n){return Ao.loadJS(n)}function R_(){return Ao.gapiScript}function b_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n,e){const t=ir(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Bt(o,e??{}))return i;ct(i,"already-initialized")}return t.initialize({options:e})}function C_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(nt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function P_(n,e,t){const r=Io(n);j(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Ju(e),{host:a,port:c}=k_(e),u=c===null?"":`:${c}`,d={url:`${o}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){j(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),j(Bt(d,r.config.emulator)&&Bt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,x_()}function Ju(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function k_(n){const e=Ju(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ql(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ql(a)}}}function ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function x_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(n,e){return o_(n,"POST","/v1/accounts:signInWithIdp",Eo(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="http://localhost";class Wt extends Yu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=_o(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Wt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return cn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,cn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,cn(e,t)}buildRequest(){const e={requestUri:N_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hr extends Zu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends hr{constructor(){super("facebook.com")}static credential(e){return Wt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends hr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yt.credential(t,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends hr{constructor(){super("github.com")}static credential(e){return Wt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends hr{constructor(){super("twitter.com")}static credential(e,t){return Wt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Et.credential(t,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await tt._fromIdTokenResponse(e,r,i),a=zl(r);return new mn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=zl(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function zl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends ht{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_i.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new _i(e,t,r,i)}}function eh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_i._fromErrorAndOperation(n,o,e,r):o})}async function D_(n,e,t=!1){const r=await er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",r)}/**
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
 */async function O_(n,e,t=!1){const{auth:r}=n;if(ze(r.app))return Promise.reject(jt(r));const i="reauthenticate";try{const o=await er(n,eh(r,i,e,n),t);j(o.idToken,r,"internal-error");const a=To(o.idToken);j(a,r,"internal-error");const{sub:c}=a;return j(n.uid===c,r,"user-mismatch"),mn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(n,e,t=!1){if(ze(n.app))return Promise.reject(jt(n));const r="signIn",i=await eh(n,r,e),o=await mn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function L_(n,e,t,r){return Fe(n).onIdTokenChanged(e,t,r)}function M_(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}const yi="__sak";/**
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
 */class th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yi,"1"),this.storage.removeItem(yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=1e3,U_=10;class nh extends th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);__()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,U_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},F_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nh.type="LOCAL";const j_=nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rh.type="SESSION";const ih=rh;/**
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
 */function B_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ni(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,o)),u=await B_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const d=Ro("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const A=v;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(A.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function H_(n){Ke().location.href=n}/**
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
 */function sh(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function q_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function z_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function W_(){return sh()?self:null}/**
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
 */const oh="firebaseLocalStorageDb",K_=1,vi="firebaseLocalStorage",ah="fbase_key";class dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Di(n,e){return n.transaction([vi],e?"readwrite":"readonly").objectStore(vi)}function G_(){const n=indexedDB.deleteDatabase(oh);return new dr(n).toPromise()}function js(){const n=indexedDB.open(oh,K_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vi,{keyPath:ah})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vi)?e(r):(r.close(),await G_(),e(await js()))})})}async function Wl(n,e,t){const r=Di(n,!0).put({[ah]:e,value:t});return new dr(r).toPromise()}async function Q_(n,e){const t=Di(n,!1).get(e),r=await new dr(t).toPromise();return r===void 0?null:r.value}function Kl(n,e){const t=Di(n,!0).delete(e);return new dr(t).toPromise()}const X_=800,J_=3;class lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await js(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>J_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(W_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await q_(),!this.activeServiceWorker)return;this.sender=new $_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||z_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await js();return await Wl(e,yi,"1"),await Kl(e,yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Q_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Di(i,!1).getAll();return new dr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),X_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lh.type="LOCAL";const Y_=lh;new ur(3e4,6e4);/**
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
 */function Z_(n,e){return e?nt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bo extends Yu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return cn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ey(n){return V_(n.auth,new bo(n),n.bypassAuthState)}function ty(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),O_(t,new bo(n),n.bypassAuthState)}async function ny(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),D_(t,new bo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ey;case"linkViaPopup":case"linkViaRedirect":return ny;case"reauthViaPopup":case"reauthViaRedirect":return ty;default:ct(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new ur(2e3,1e4);class rn extends ch{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,rn.currentPopupAction&&rn.currentPopupAction.cancel(),rn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ry.get())};e()}}rn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="pendingRedirect",Xr=new Map;class sy extends ch{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Xr.get(this.auth._key());if(!e){try{const r=await oy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Xr.set(this.auth._key(),e)}return this.bypassAuthState||Xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oy(n,e){const t=cy(e),r=ly(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function ay(n,e){Xr.set(n._key(),e)}function ly(n){return nt(n._redirectPersistence)}function cy(n){return Qr(iy,n.config.apiKey,n.name)}async function uy(n,e,t=!1){if(ze(n.app))return Promise.reject(jt(n));const r=Io(n),i=Z_(r,e),a=await new sy(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=10*60*1e3;class dy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(We(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gl(e))}saveEventToCache(e){this.cachedEventUids.add(Gl(e)),this.lastProcessedEventTime=Date.now()}}function Gl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(n,e={}){return En(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gy=/^https?/;async function _y(n){if(n.config.emulator)return;const{authorizedDomains:e}=await py(n);for(const t of e)try{if(yy(t))return}catch{}ct(n,"unauthorized-domain")}function yy(n){const e=Fs(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!gy.test(t))return!1;if(my.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vy=new ur(3e4,6e4);function Ql(){const n=Ke().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ey(n){return new Promise((e,t)=>{var r,i,o;function a(){Ql(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ql(),t(We(n,"network-request-failed"))},timeout:vy.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Ke().gapi)===null||o===void 0)&&o.load)a();else{const c=b_("iframefcb");return Ke()[c]=()=>{gapi.load?a():t(We(n,"network-request-failed"))},A_(`${R_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Jr=null,e})}let Jr=null;function Ty(n){return Jr=Jr||Ey(n),Jr}/**
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
 */const wy=new ur(5e3,15e3),Iy="__/auth/iframe",Ay="emulator/auth/iframe",Ry={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},by=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sy(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vo(e,Ay):`https://${n.config.authDomain}/${Iy}`,r={apiKey:e.apiKey,appName:n.name,v:_n},i=by.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${rr(r).slice(1)}`}async function Cy(n){const e=await Ty(n),t=Ke().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:Sy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ry,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=We(n,"network-request-failed"),c=Ke().setTimeout(()=>{o(a)},wy.get());function u(){Ke().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Py={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ky=500,xy=600,Ny="_blank",Dy="http://localhost";class Xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oy(n,e,t,r=ky,i=xy){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Py),{width:r.toString(),height:i.toString(),top:o,left:a}),d=ke().toLowerCase();t&&(c=qu(d)?Ny:t),$u(d)&&(e=e||Dy,u.scrollbars="yes");const m=Object.entries(u).reduce((A,[b,S])=>`${A}${b}=${S},`,"");if(g_(d)&&c!=="_self")return Vy(e||"",c),new Xl(null);const v=window.open(e||"",c,m);j(v,n,"popup-blocked");try{v.focus()}catch{}return new Xl(v)}function Vy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Ly="__/auth/handler",My="emulator/auth/handler",Fy=encodeURIComponent("fac");async function Jl(n,e,t,r,i,o){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:_n,eventId:i};if(e instanceof Zu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Kd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))a[m]=v}if(e instanceof hr){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Fy}=${encodeURIComponent(u)}`:"";return`${Uy(n)}?${rr(c).slice(1)}${d}`}function Uy({config:n}){return n.emulator?vo(n,My):`https://${n.authDomain}/${Ly}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="webStorageSupport";class jy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ih,this._completeRedirectFn=uy,this._overrideRedirectResult=ay}async _openPopup(e,t,r,i){var o;ut((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Jl(e,t,r,Fs(),i);return Oy(e,a,Ro())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Jl(e,t,r,Fs(),i);return H_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(ut(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Cy(e),r=new dy(e);return t.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_s,{type:_s},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[_s];a!==void 0&&t(!!a),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_y(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qu()||Hu()||wo()}}const By=jy;var Yl="@firebase/auth",Zl="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qy(n){At(new at("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xu(n)},d=new w_(r,i,o,u);return C_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),At(new at("auth-internal",e=>{const t=Io(e.getProvider("auth").getImmediate());return(r=>new $y(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(Yl,Zl,Hy(n)),rt(Yl,Zl,"esm2017")}/**
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
 */const zy=5*60,Wy=vc("authIdTokenMaxAge")||zy;let ec=null;const Ky=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Wy)return;const i=t==null?void 0:t.token;ec!==i&&(ec=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gy(n=Gs()){const e=ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=S_(n,{popupRedirectResolver:By,persistence:[Y_,j_,ih]}),r=vc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Ky(o.toString());M_(t,a,()=>a(t.currentUser)),L_(t,c=>a(c))}}const i=_c("auth");return i&&P_(t,`http://${i}`),t}function Qy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}I_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=We("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Qy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qy("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,hh={activated:!1,tokenObservers:[]},Xy={initialized:!1,enabled:!1};function de(n){return Bs.get(n)||Object.assign({},hh)}function Jy(n,e){return Bs.set(n,e),Bs.get(n)}function Oi(){return Xy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="https://content-firebaseappcheck.googleapis.com/v1",Yy="exchangeRecaptchaV3Token",Zy="exchangeDebugToken",tc={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},ev=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r,i,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Kn,this.pending.promise.catch(t=>{}),await nv(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Kn,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function nv(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Ve=new gn("appCheck","AppCheck",rv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function So(n){if(!de(n).activated)throw Ve.create("use-before-activation",{appName:n.name})}function fh(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),o=e-t*3600*24-r*3600-i*60;let a="";return t&&(a+=Br(t)+"d:"),r&&(a+=Br(r)+"h:"),a+=Br(i)+"m:"+Br(o)+"s",a}function Br(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const v=await i.getHeartbeatsHeader();v&&(r["X-Firebase-Client"]=v)}const o={method:"POST",body:JSON.stringify(e),headers:r};let a;try{a=await fetch(n,o)}catch(v){throw Ve.create("fetch-network-error",{originalErrorMessage:v==null?void 0:v.message})}if(a.status!==200)throw Ve.create("fetch-status-error",{httpStatus:a.status});let c;try{c=await a.json()}catch(v){throw Ve.create("fetch-parse-error",{originalErrorMessage:v==null?void 0:v.message})}const u=c.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw Ve.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const d=Number(u[1])*1e3,m=Date.now();return{token:c.token,expireTimeMillis:m+d,issuedAtTimeMillis:m}}function iv(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${dh}/projects/${t}/apps/${r}:${Yy}?key=${i}`,body:{recaptcha_v3_token:e}}}function ph(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${dh}/projects/${t}/apps/${r}:${Zy}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="firebase-app-check-database",ov=1,tr="firebase-app-check-store",mh="debug-token";let $r=null;function gh(){return $r||($r=new Promise((n,e)=>{try{const t=indexedDB.open(sv,ov);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Ve.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(tr,{keyPath:"compositeKey"})}}}catch(t){e(Ve.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),$r)}function av(n){return yh(vh(n))}function lv(n,e){return _h(vh(n),e)}function cv(n){return _h(mh,n)}function uv(){return yh(mh)}async function _h(n,e){const r=(await gh()).transaction(tr,"readwrite"),o=r.objectStore(tr).put({compositeKey:n,value:e});return new Promise((a,c)=>{o.onsuccess=u=>{a()},r.onerror=u=>{var d;c(Ve.create("storage-set",{originalErrorMessage:(d=u.target.error)===null||d===void 0?void 0:d.message}))}})}async function yh(n){const t=(await gh()).transaction(tr,"readonly"),i=t.objectStore(tr).get(n);return new Promise((o,a)=>{i.onsuccess=c=>{const u=c.target.result;o(u?u.value:void 0)},t.onerror=c=>{var u;a(Ve.create("storage-get",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function vh(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new wi("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(n){if(Ws()){let e;try{e=await av(n)}catch(t){Mt.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function ys(n,e){return Ws()?lv(n,e).catch(t=>{Mt.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function dv(){let n;try{n=await uv()}catch{}if(n)return n;{const e=crypto.randomUUID();return cv(e).catch(t=>Mt.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return Oi().enabled}async function ko(){const n=Oi();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function fv(){const n=gc(),e=Oi();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Kn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(dv())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={error:"UNKNOWN_ERROR"};function mv(n){return zs.encodeString(JSON.stringify(n),!1)}async function $s(n,e=!1){const t=n.app;So(t);const r=de(t);let i=r.token,o;if(i&&!sn(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(sn(u)?i=u:await ys(t,void 0))}if(!e&&i&&sn(i))return{token:i.token};let a=!1;if(Po())try{r.exchangeTokenPromise||(r.exchangeTokenPromise=Co(ph(t,await ko()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const u=await r.exchangeTokenPromise;return await ys(t,u),r.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"?Mt.warn(u.message):Mt.error(u),vs(u)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await de(t).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"?Mt.warn(u.message):Mt.error(u),o=u}let c;return i?o?sn(i)?c={token:i.token,internalError:o}:c=vs(o):(c={token:i.token},r.token=i,await ys(t,i)):c=vs(o),a&&wh(t,c),c}async function gv(n){const e=n.app;So(e);const{provider:t}=de(e);if(Po()){const r=await ko(),{token:i}=await Co(ph(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function Eh(n,e,t,r){const{app:i}=n,o=de(i),a={next:t,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&sn(o.token)){const c=o.token;Promise.resolve().then(()=>{t({token:c.token}),rc(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>rc(n))}function Th(n,e){const t=de(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function rc(n){const{app:e}=n,t=de(e);let r=t.tokenRefresher;r||(r=_v(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function _v(n){const{app:e}=n;return new tv(async()=>{const t=de(e);let r;if(t.token?r=await $s(n,!0):r=await $s(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=de(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},tc.RETRIAL_MIN_WAIT,tc.RETRIAL_MAX_WAIT)}function wh(n,e){const t=de(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function sn(n){return n.expireTimeMillis-Date.now()>0}function vs(n){return{token:mv(pv),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=de(this.app);for(const t of e)Th(this.app,t.next);return Promise.resolve()}}function vv(n,e){return new yv(n,e)}function Ev(n){return{getToken:e=>$s(n,e),getLimitedUseToken:()=>gv(n),addTokenListener:e=>Eh(n,"INTERNAL",e),removeTokenListener:e=>Th(n.app,e)}}const Tv="@firebase/app-check",wv="0.8.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="https://www.google.com/recaptcha/api.js";function Av(n,e){const t=new Kn,r=de(n);r.reCAPTCHAState={initialized:t};const i=Rv(n),o=nc(!1);return o?ic(n,e,o,i,t):Cv(()=>{const a=nc(!1);if(!a)throw new Error("no recaptcha");ic(n,e,a,i,t)}),t.promise}function ic(n,e,t,r,i){t.ready(()=>{Sv(n,e,t,r),i.resolve(t)})}function Rv(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function bv(n){So(n);const t=await de(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const o=de(n).reCAPTCHAState;t.ready(()=>{r(t.execute(o.widgetId,{action:"fire_app_check"}))})})}function Sv(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{de(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{de(n).reCAPTCHAState.succeeded=!1}}),o=de(n);o.reCAPTCHAState=Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}function Cv(n){const e=document.createElement("script");e.src=Iv,e.onload=n,document.head.appendChild(e)}/**
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
 */class xo{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,r;kv(this._throttleData);const i=await bv(this._app).catch(a=>{throw Ve.create("recaptcha-error")});if(!(!((e=de(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Ve.create("recaptcha-error");let o;try{o=await Co(iv(this._app,i),this._heartbeatServiceProvider)}catch(a){throw!((t=a.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=Pv(Number((r=a.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Ve.create("throttled",{time:fh(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,o}initialize(e){this._app=e,this._heartbeatServiceProvider=ir(e,"heartbeat"),Av(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof xo?this._siteKey===e._siteKey:!1}}function Pv(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+ev,httpStatus:n};{const t=e?e.backoffCount:0,r=tf(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function kv(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Ve.create("throttled",{time:fh(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n=Gs(),e){n=Fe(n);const t=ir(n,"app-check");if(Oi().initialized||fv(),Po()&&ko().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return i;throw Ve.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return Nv(n,e.provider,e.isTokenAutoRefreshEnabled),de(n).isTokenAutoRefreshEnabled&&Eh(r,"INTERNAL",()=>{}),r}function Nv(n,e,t){const r=Jy(n,Object.assign({},hh));r.activated=!0,r.provider=e,r.cachedTokenPromise=hv(n).then(i=>(i&&sn(i)&&(r.token=i,wh(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,r.provider.initialize(n)}const Dv="app-check",sc="app-check-internal";function Ov(){At(new at(Dv,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return vv(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(sc).initialize()})),At(new at(sc,n=>{const e=n.getProvider("app-check").getImmediate();return Ev(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),rt(Tv,wv)}Ov();const Vv={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.appspot.com",messagingSenderId:"410453365556",appId:"1:410453365556:web:670182c618218ca1220b61"},No=wc(Vv);xv(No,{provider:new xo("6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi"),isTokenAutoRefreshEnabled:!0});const Lv=Fg(No);Gy(No);var Fn={},oc;function Mv(){if(oc)return Fn;oc=1,Object.defineProperty(Fn,"__esModule",{value:!0}),Fn.parse=a,Fn.serialize=d;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,o=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function a(A,b){const S=new o,O=A.length;if(O<2)return S;const k=(b==null?void 0:b.decode)||m;let N=0;do{const M=A.indexOf("=",N);if(M===-1)break;const L=A.indexOf(";",N),B=L===-1?O:L;if(M>B){N=A.lastIndexOf(";",M-1)+1;continue}const X=c(A,N,M),J=u(A,M,X),I=A.slice(X,J);if(S[I]===void 0){let _=c(A,M+1,B),y=u(A,B,_);const T=k(A.slice(_,y));S[I]=T}N=B+1}while(N<O);return S}function c(A,b,S){do{const O=A.charCodeAt(b);if(O!==32&&O!==9)return b}while(++b<S);return S}function u(A,b,S){for(;b>S;){const O=A.charCodeAt(--b);if(O!==32&&O!==9)return b+1}return S}function d(A,b,S){const O=(S==null?void 0:S.encode)||encodeURIComponent;if(!n.test(A))throw new TypeError(`argument name is invalid: ${A}`);const k=O(b);if(!e.test(k))throw new TypeError(`argument val is invalid: ${b}`);let N=A+"="+k;if(!S)return N;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);N+="; Max-Age="+S.maxAge}if(S.domain){if(!t.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);N+="; Domain="+S.domain}if(S.path){if(!r.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);N+="; Path="+S.path}if(S.expires){if(!v(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);N+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(N+="; HttpOnly"),S.secure&&(N+="; Secure"),S.partitioned&&(N+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return N}function m(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function v(A){return i.call(A)==="[object Date]"}return Fn}Mv();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ac="popstate";function Fv(n={}){function e(i,o){let{pathname:a="/",search:c="",hash:u=""}=Qt(i.location.hash.substring(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Hs("",{pathname:a,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){let a=i.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=i.location.href,d=u.indexOf("#");c=d===-1?u:u.slice(0,d)}return c+"#"+(typeof o=="string"?o:nr(o))}function r(i,o){He(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return jv(e,t,r,n)}function se(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function He(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uv(){return Math.random().toString(36).substring(2,10)}function lc(n,e){return{usr:n.state,key:n.key,idx:e}}function Hs(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Qt(e):e,state:t,key:e&&e.key||r||Uv()}}function nr({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Qt(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function jv(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,c="POP",u=null,d=m();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function m(){return(a.state||{idx:null}).idx}function v(){c="POP";let k=m(),N=k==null?null:k-d;d=k,u&&u({action:c,location:O.location,delta:N})}function A(k,N){c="PUSH";let M=Hs(O.location,k,N);t&&t(M,k),d=m()+1;let L=lc(M,d),B=O.createHref(M);try{a.pushState(L,"",B)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;i.location.assign(B)}o&&u&&u({action:c,location:O.location,delta:1})}function b(k,N){c="REPLACE";let M=Hs(O.location,k,N);t&&t(M,k),d=m();let L=lc(M,d),B=O.createHref(M);a.replaceState(L,"",B),o&&u&&u({action:c,location:O.location,delta:0})}function S(k){let N=i.location.origin!=="null"?i.location.origin:i.location.href,M=typeof k=="string"?k:nr(k);return M=M.replace(/ $/,"%20"),se(N,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,N)}let O={get action(){return c},get location(){return n(i,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(ac,v),u=k,()=>{i.removeEventListener(ac,v),u=null}},createHref(k){return e(i,k)},createURL:S,encodeLocation(k){let N=S(k);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:A,replace:b,go(k){return a.go(k)}};return O}function Ih(n,e,t="/"){return Bv(n,e,t,!1)}function Bv(n,e,t,r){let i=typeof e=="string"?Qt(e):e,o=Pt(i.pathname||"/",t);if(o==null)return null;let a=Ah(n);$v(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let d=Zv(o);c=Jv(a[u],d,r)}return c}function Ah(n,e=[],t=[],r=""){let i=(o,a,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(se(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let d=ot([r,u.relativePath]),m=t.concat(u);o.children&&o.children.length>0&&(se(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Ah(o.children,e,m,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:Qv(d,o.index),routesMeta:m})};return n.forEach((o,a)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,a);else for(let u of Rh(o.path))i(o,a,u)}),e}function Rh(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Rh(r.join("/")),c=[];return c.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function $v(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Xv(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Hv=/^:[\w-]+$/,qv=3,zv=2,Wv=1,Kv=10,Gv=-2,cc=n=>n==="*";function Qv(n,e){let t=n.split("/"),r=t.length;return t.some(cc)&&(r+=Gv),e&&(r+=zv),t.filter(i=>!cc(i)).reduce((i,o)=>i+(Hv.test(o)?qv:o===""?Wv:Kv),r)}function Xv(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function Jv(n,e,t=!1){let{routesMeta:r}=n,i={},o="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=o==="/"?e:e.slice(o.length)||"/",v=Ei({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),A=u.route;if(!v&&d&&t&&!r[r.length-1].route.index&&(v=Ei({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!v)return null;Object.assign(i,v.params),a.push({params:i,pathname:ot([o,v.pathname]),pathnameBase:rE(ot([o,v.pathnameBase])),route:A}),v.pathnameBase!=="/"&&(o=ot([o,v.pathnameBase]))}return a}function Ei(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Yv(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:v},A)=>{if(m==="*"){let S=c[A]||"";a=o.slice(0,o.length-S.length).replace(/(.)\/+$/,"$1")}const b=c[A];return v&&!b?d[m]=void 0:d[m]=(b||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:n}}function Yv(n,e=!1,t=!0){He(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Zv(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return He(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Pt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function eE(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?Qt(n):n;return{pathname:t?t.startsWith("/")?t:tE(t,e):e,search:iE(r),hash:sE(i)}}function tE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Es(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bh(n){let e=nE(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Sh(n,e,t,r=!1){let i;typeof n=="string"?i=Qt(n):(i={...n},se(!i.pathname||!i.pathname.includes("?"),Es("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Es("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Es("#","search","hash",i)));let o=n===""||i.pathname==="",a=o?"/":i.pathname,c;if(a==null)c=t;else{let v=e.length-1;if(!r&&a.startsWith("..")){let A=a.split("/");for(;A[0]==="..";)A.shift(),v-=1;i.pathname=A.join("/")}c=v>=0?e[v]:"/"}let u=eE(i,c),d=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var ot=n=>n.join("/").replace(/\/\/+/g,"/"),rE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),iE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,sE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function oE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ch=["POST","PUT","PATCH","DELETE"];new Set(Ch);var aE=["GET",...Ch];new Set(aE);var Tn=P.createContext(null);Tn.displayName="DataRouter";var Vi=P.createContext(null);Vi.displayName="DataRouterState";var Ph=P.createContext({isTransitioning:!1});Ph.displayName="ViewTransition";var lE=P.createContext(new Map);lE.displayName="Fetchers";var cE=P.createContext(null);cE.displayName="Await";var Xe=P.createContext(null);Xe.displayName="Navigation";var fr=P.createContext(null);fr.displayName="Location";var dt=P.createContext({outlet:null,matches:[],isDataRoute:!1});dt.displayName="Route";var Do=P.createContext(null);Do.displayName="RouteError";function uE(n,{relative:e}={}){se(pr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=P.useContext(Xe),{hash:i,pathname:o,search:a}=mr(n,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:ot([t,o])),r.createHref({pathname:c,search:a,hash:i})}function pr(){return P.useContext(fr)!=null}function Xt(){return se(pr(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(fr).location}var kh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xh(n){P.useContext(Xe).static||P.useLayoutEffect(n)}function hE(){let{isDataRoute:n}=P.useContext(dt);return n?AE():dE()}function dE(){se(pr(),"useNavigate() may be used only in the context of a <Router> component.");let n=P.useContext(Tn),{basename:e,navigator:t}=P.useContext(Xe),{matches:r}=P.useContext(dt),{pathname:i}=Xt(),o=JSON.stringify(bh(r)),a=P.useRef(!1);return xh(()=>{a.current=!0}),P.useCallback((u,d={})=>{if(He(a.current,kh),!a.current)return;if(typeof u=="number"){t.go(u);return}let m=Sh(u,JSON.parse(o),i,d.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ot([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,o,i,n])}P.createContext(null);function mr(n,{relative:e}={}){let{matches:t}=P.useContext(dt),{pathname:r}=Xt(),i=JSON.stringify(bh(t));return P.useMemo(()=>Sh(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function fE(n,e){return Nh(n,e)}function Nh(n,e,t,r){var M;se(pr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:o}=P.useContext(Xe),{matches:a}=P.useContext(dt),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",v=c&&c.route;{let L=v&&v.path||"";Dh(d,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let A=Xt(),b;if(e){let L=typeof e=="string"?Qt(e):e;se(m==="/"||((M=L.pathname)==null?void 0:M.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${L.pathname}" was given in the \`location\` prop.`),b=L}else b=A;let S=b.pathname||"/",O=S;if(m!=="/"){let L=m.replace(/^\//,"").split("/");O="/"+S.replace(/^\//,"").split("/").slice(L.length).join("/")}let k=!o&&t&&t.matches&&t.matches.length>0?t.matches:Ih(n,{pathname:O});He(v||k!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),He(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=yE(k&&k.map(L=>Object.assign({},L,{params:Object.assign({},u,L.params),pathname:ot([m,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?m:ot([m,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),a,t,r);return e&&N?P.createElement(fr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},N):N}function pE(){let n=IE(),e=oE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:o},"ErrorBoundary")," or"," ",P.createElement("code",{style:o},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),t?P.createElement("pre",{style:i},t):null,a)}var mE=P.createElement(pE,null),gE=class extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?P.createElement(dt.Provider,{value:this.props.routeContext},P.createElement(Do.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _E({routeContext:n,match:e,children:t}){let r=P.useContext(Tn);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(dt.Provider,{value:n},t)}function yE(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,o=t==null?void 0:t.errors;if(o!=null){let u=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);se(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let a=!1,c=-1;if(t)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:m,errors:v}=t,A=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!v||v[d.route.id]===void 0);if(d.route.lazy||A){a=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,d,m)=>{let v,A=!1,b=null,S=null;t&&(v=o&&d.route.id?o[d.route.id]:void 0,b=d.route.errorElement||mE,a&&(c<0&&m===0?(Dh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,S=null):c===m&&(A=!0,S=d.route.hydrateFallbackElement||null)));let O=e.concat(i.slice(0,m+1)),k=()=>{let N;return v?N=b:A?N=S:d.route.Component?N=P.createElement(d.route.Component,null):d.route.element?N=d.route.element:N=u,P.createElement(_E,{match:d,routeContext:{outlet:u,matches:O,isDataRoute:t!=null},children:N})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?P.createElement(gE,{location:t.location,revalidation:t.revalidation,component:b,error:v,children:k(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):k()},null)}function Oo(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vE(n){let e=P.useContext(Tn);return se(e,Oo(n)),e}function EE(n){let e=P.useContext(Vi);return se(e,Oo(n)),e}function TE(n){let e=P.useContext(dt);return se(e,Oo(n)),e}function Vo(n){let e=TE(n),t=e.matches[e.matches.length-1];return se(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function wE(){return Vo("useRouteId")}function IE(){var r;let n=P.useContext(Do),e=EE("useRouteError"),t=Vo("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function AE(){let{router:n}=vE("useNavigate"),e=Vo("useNavigate"),t=P.useRef(!1);return xh(()=>{t.current=!0}),P.useCallback(async(i,o={})=>{He(t.current,kh),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...o}))},[n,e])}var uc={};function Dh(n,e,t){!e&&!uc[n]&&(uc[n]=!0,He(!1,t))}P.memo(RE);function RE({routes:n,future:e,state:t}){return Nh(n,void 0,t,e)}function Yr(n){se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function bE({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:o=!1}){se(!pr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof t=="string"&&(t=Qt(t));let{pathname:u="/",search:d="",hash:m="",state:v=null,key:A="default"}=t,b=P.useMemo(()=>{let S=Pt(u,a);return S==null?null:{location:{pathname:S,search:d,hash:m,state:v,key:A},navigationType:r}},[a,u,d,m,v,A,r]);return He(b!=null,`<Router basename="${a}"> is not able to match the URL "${u}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:P.createElement(Xe.Provider,{value:c},P.createElement(fr.Provider,{children:e,value:b}))}function SE({children:n,location:e}){return fE(qs(n),e)}function qs(n,e=[]){let t=[];return P.Children.forEach(n,(r,i)=>{if(!P.isValidElement(r))return;let o=[...e,i];if(r.type===P.Fragment){t.push.apply(t,qs(r.props.children,o));return}se(r.type===Yr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),se(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=qs(r.props.children,o)),t.push(a)}),t}var Zr="get",ei="application/x-www-form-urlencoded";function Li(n){return n!=null&&typeof n.tagName=="string"}function CE(n){return Li(n)&&n.tagName.toLowerCase()==="button"}function PE(n){return Li(n)&&n.tagName.toLowerCase()==="form"}function kE(n){return Li(n)&&n.tagName.toLowerCase()==="input"}function xE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function NE(n,e){return n.button===0&&(!e||e==="_self")&&!xE(n)}var Hr=null;function DE(){if(Hr===null)try{new FormData(document.createElement("form"),0),Hr=!1}catch{Hr=!0}return Hr}var OE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ts(n){return n!=null&&!OE.has(n)?(He(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ei}"`),null):n}function VE(n,e){let t,r,i,o,a;if(PE(n)){let c=n.getAttribute("action");r=c?Pt(c,e):null,t=n.getAttribute("method")||Zr,i=Ts(n.getAttribute("enctype"))||ei,o=new FormData(n)}else if(CE(n)||kE(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||c.getAttribute("action");if(r=u?Pt(u,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||Zr,i=Ts(n.getAttribute("formenctype"))||Ts(c.getAttribute("enctype"))||ei,o=new FormData(c,n),!DE()){let{name:d,type:m,value:v}=n;if(m==="image"){let A=d?`${d}.`:"";o.append(`${A}x`,"0"),o.append(`${A}y`,"0")}else d&&o.append(d,v)}}else{if(Li(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Zr,r=null,i=ei,a=n}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:o,body:a}}function Lo(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function LE(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ME(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function FE(n,e,t){let r=await Promise.all(n.map(async i=>{let o=e.routes[i.route.id];if(o){let a=await LE(o,t);return a.links?a.links():[]}return[]}));return $E(r.flat(1).filter(ME).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function hc(n,e,t,r,i,o){let a=(u,d)=>t[d]?u.route.id!==t[d].route.id:!0,c=(u,d)=>{var m;return t[d].pathname!==u.pathname||((m=t[d].route.path)==null?void 0:m.endsWith("*"))&&t[d].params["*"]!==u.params["*"]};return o==="assets"?e.filter((u,d)=>a(u,d)||c(u,d)):o==="data"?e.filter((u,d)=>{var v;let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(a(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let A=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function UE(n,e,{includeHydrateFallback:t}={}){return jE(n.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),t&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function jE(n){return[...new Set(n)]}function BE(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function $E(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let o=JSON.stringify(BE(i));return t.has(o)||(t.add(o),r.push({key:o,link:i})),r},[])}function HE(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function qE(){let n=P.useContext(Tn);return Lo(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function zE(){let n=P.useContext(Vi);return Lo(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Mo=P.createContext(void 0);Mo.displayName="FrameworkContext";function Oh(){let n=P.useContext(Mo);return Lo(n,"You must render this element inside a <HydratedRouter> element"),n}function WE(n,e){let t=P.useContext(Mo),[r,i]=P.useState(!1),[o,a]=P.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:v}=e,A=P.useRef(null);P.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let O=N=>{N.forEach(M=>{a(M.isIntersecting)})},k=new IntersectionObserver(O,{threshold:.5});return A.current&&k.observe(A.current),()=>{k.disconnect()}}},[n]),P.useEffect(()=>{if(r){let O=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(O)}}},[r]);let b=()=>{i(!0)},S=()=>{i(!1),a(!1)};return t?n!=="intent"?[o,A,{}]:[o,A,{onFocus:Un(c,b),onBlur:Un(u,S),onMouseEnter:Un(d,b),onMouseLeave:Un(m,S),onTouchStart:Un(v,b)}]:[!1,A,{}]}function Un(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function KE({page:n,...e}){let{router:t}=qE(),r=P.useMemo(()=>Ih(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?P.createElement(QE,{page:n,matches:r,...e}):null}function GE(n){let{manifest:e,routeModules:t}=Oh(),[r,i]=P.useState([]);return P.useEffect(()=>{let o=!1;return FE(n,e,t).then(a=>{o||i(a)}),()=>{o=!0}},[n,e,t]),r}function QE({page:n,matches:e,...t}){let r=Xt(),{manifest:i,routeModules:o}=Oh(),{loaderData:a,matches:c}=zE(),u=P.useMemo(()=>hc(n,e,c,i,r,"data"),[n,e,c,i,r]),d=P.useMemo(()=>hc(n,e,c,i,r,"assets"),[n,e,c,i,r]),m=P.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let b=new Set,S=!1;if(e.forEach(k=>{var M;let N=i.routes[k.route.id];!N||!N.hasLoader||(!u.some(L=>L.route.id===k.route.id)&&k.route.id in a&&((M=o[k.route.id])!=null&&M.shouldRevalidate)||N.hasClientLoader?S=!0:b.add(k.route.id))}),b.size===0)return[];let O=HE(n);return S&&b.size>0&&O.searchParams.set("_routes",e.filter(k=>b.has(k.route.id)).map(k=>k.route.id).join(",")),[O.pathname+O.search]},[a,r,i,u,e,n,o]),v=P.useMemo(()=>UE(d,i),[d,i]),A=GE(d);return P.createElement(P.Fragment,null,m.map(b=>P.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),v.map(b=>P.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),A.map(({key:b,link:S})=>P.createElement("link",{key:b,...S})))}function XE(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vh&&(window.__reactRouterVersion="7.2.0")}catch{}function JE({basename:n,children:e,window:t}){let r=P.useRef();r.current==null&&(r.current=Fv({window:t,v5Compat:!0}));let i=r.current,[o,a]=P.useState({action:i.action,location:i.location}),c=P.useCallback(u=>{P.startTransition(()=>a(u))},[a]);return P.useLayoutEffect(()=>i.listen(c),[i,c]),P.createElement(bE,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:i})}var Lh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=P.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:c,target:u,to:d,preventScrollReset:m,viewTransition:v,...A},b){let{basename:S}=P.useContext(Xe),O=typeof d=="string"&&Lh.test(d),k,N=!1;if(typeof d=="string"&&O&&(k=d,Vh))try{let y=new URL(window.location.href),T=d.startsWith("//")?new URL(y.protocol+d):new URL(d),p=Pt(T.pathname,S);T.origin===y.origin&&p!=null?d=p+T.search+T.hash:N=!0}catch{He(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=uE(d,{relative:i}),[L,B,X]=WE(r,A),J=tT(d,{replace:a,state:c,target:u,preventScrollReset:m,relative:i,viewTransition:v});function I(y){e&&e(y),y.defaultPrevented||J(y)}let _=P.createElement("a",{...A,...X,href:k||M,onClick:N||o?e:I,ref:XE(b,B),target:u,"data-discover":!O&&t==="render"?"true":void 0});return L&&!O?P.createElement(P.Fragment,null,_,P.createElement(KE,{page:M})):_});Wn.displayName="Link";var YE=P.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:c,children:u,...d},m){let v=mr(a,{relative:d.relative}),A=Xt(),b=P.useContext(Vi),{navigator:S,basename:O}=P.useContext(Xe),k=b!=null&&oT(v)&&c===!0,N=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,M=A.pathname,L=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(M=M.toLowerCase(),L=L?L.toLowerCase():null,N=N.toLowerCase()),L&&O&&(L=Pt(L,O)||L);const B=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let X=M===N||!i&&M.startsWith(N)&&M.charAt(B)==="/",J=L!=null&&(L===N||!i&&L.startsWith(N)&&L.charAt(N.length)==="/"),I={isActive:X,isPending:J,isTransitioning:k},_=X?e:void 0,y;typeof r=="function"?y=r(I):y=[r,X?"active":null,J?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let T=typeof o=="function"?o(I):o;return P.createElement(Wn,{...d,"aria-current":_,className:y,ref:m,style:T,to:a,viewTransition:c},typeof u=="function"?u(I):u)});YE.displayName="NavLink";var ZE=P.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:o,method:a=Zr,action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:v,...A},b)=>{let S=iT(),O=sT(c,{relative:d}),k=a.toLowerCase()==="get"?"get":"post",N=typeof c=="string"&&Lh.test(c),M=L=>{if(u&&u(L),L.defaultPrevented)return;L.preventDefault();let B=L.nativeEvent.submitter,X=(B==null?void 0:B.getAttribute("formmethod"))||a;S(B||L.currentTarget,{fetcherKey:e,method:X,navigate:t,replace:i,state:o,relative:d,preventScrollReset:m,viewTransition:v})};return P.createElement("form",{ref:b,method:k,action:O,onSubmit:r?u:M,...A,"data-discover":!N&&n==="render"?"true":void 0})});ZE.displayName="Form";function eT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mh(n){let e=P.useContext(Tn);return se(e,eT(n)),e}function tT(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let c=hE(),u=Xt(),d=mr(n,{relative:o});return P.useCallback(m=>{if(NE(m,e)){m.preventDefault();let v=t!==void 0?t:nr(u)===nr(d);c(n,{replace:v,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[u,c,d,t,r,e,n,i,o,a])}var nT=0,rT=()=>`__${String(++nT)}__`;function iT(){let{router:n}=Mh("useSubmit"),{basename:e}=P.useContext(Xe),t=wE();return P.useCallback(async(r,i={})=>{let{action:o,method:a,encType:c,formData:u,body:d}=VE(r,e);if(i.navigate===!1){let m=i.fetcherKey||rT();await n.fetch(m,t,i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||c,flushSync:i.flushSync})}else await n.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function sT(n,{relative:e}={}){let{basename:t}=P.useContext(Xe),r=P.useContext(dt);se(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...mr(n||".",{relative:e})},a=Xt();if(n==null){o.search=a.search;let c=new URLSearchParams(o.search),u=c.getAll("index");if(u.some(m=>m==="")){c.delete("index"),u.filter(v=>v).forEach(v=>c.append("index",v));let m=c.toString();o.search=m?`?${m}`:""}}return(!n||n===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:ot([t,o.pathname])),nr(o)}function oT(n,e={}){let t=P.useContext(Ph);se(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Mh("useViewTransitionState"),i=mr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Pt(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=Pt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ei(i.pathname,a)!=null||Ei(i.pathname,o)!=null}new TextEncoder;function aT(){return E.jsx("div",{style:{justifyContent:"center",minHeight:"100vh",width:"100vw",margin:0,padding:"0",boxSizing:"border-box"},children:E.jsxs("div",{style:{width:"70%",margin:"0 auto",color:"#fff",padding:"40px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",fontFamily:"Arial, sans-serif",lineHeight:1.6},children:[E.jsx("header",{style:{textAlign:"left",marginBottom:"40px",borderBottom:"2px solid #f0f0f0",paddingBottom:"20px"},children:E.jsx("h1",{style:{marginBottom:"10px"},children:"Metodología"})}),E.jsxs("section",{style:{marginBottom:"40px"},children:[E.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Elecciones parlamentarias"}),E.jsxs("p",{style:{marginBottom:"20px"},children:["Para determinar la posición de los partidos en las elecciones parlamentarias, seguí estos pasos:",E.jsx("br",{}),"1. Busqué los documentos que contienen las votaciones para propuestas legislativas polarizantes (",E.jsx("a",{href:"https://leyes.congreso.gob.pe/",target:"_blank",rel:"noopener noreferrer",style:{color:"#00CED1"},children:"Perú"}),";"," ",E.jsx("a",{href:"https://www.camara.cl/legislacion/sala_sesiones/votaciones.aspx",target:"_blank",rel:"noopener noreferrer",style:{color:"#00CED1"},children:"Chile"}),")",E.jsx("br",{}),"2. Extraje los nombres de los parlamentarios presentes en esas votaciones, y le asigné a cada persona el partido político actual.",E.jsx("br",{}),"3. Extraje el voto de cada parlamentario (a favor, en contra, abstención, ausencia), y los combiné por partido político.",E.jsx("br",{}),"4. La aplicación compara los votos de cada parlamentario y con los votos del usuario, y determina qué tan similares son."]}),E.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Elecciones presidenciales"}),E.jsxs("p",{style:{marginBottom:"20px"},children:["Para las elecciones presidenciales, hice lo siguiente:",E.jsx("br",{}),"1. Busqué entrevistas, reportajes y programas del gobierno de los candidatos presidenciales.",E.jsx("br",{}),"2. Determiné los temas más presentes en el discurso de los candidatos en los cuales no están de acuerdo.",E.jsx("br",{}),"3. Le asigné a cada candidato una posición (A favor, En contra, Abstención) en cada tema.",E.jsx("br",{}),"4. La aplicación compara las respuestas del usuario con las de los candidatos, y determina qué tan alineadas están."]})]})]})})}function lT(){return E.jsx("div",{style:{justifyContent:"center",minHeight:"100vh",width:"100vw",margin:0,padding:"0",boxSizing:"border-box"},children:E.jsxs("div",{style:{width:"70%",margin:"0 auto",color:"#fff",padding:"40px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",fontFamily:"Arial, sans-serif",lineHeight:1.6},children:[E.jsx("header",{style:{textAlign:"left",marginBottom:"40px",borderBottom:"2px solid #f0f0f0",paddingBottom:"20px"},children:E.jsx("h2",{style:{marginBottom:"10px"},children:"Información de contacto"})}),E.jsxs("section",{style:{marginBottom:"40px"},children:[E.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Sobre mí"}),E.jsxs("p",{style:{marginBottom:"20px"},children:["Soy Jose Valqui Pastor, y estudié sociología en Heidelberg. Decidí crear esta página porque para votar en la elección de Heidelberg, usé una aplicación parecida (Wahl-O-Mat).",E.jsx("br",{}),"La idea es contribuir a que la gente vote por partidos que están alineados con sus intereses y opiniones, sin necesidad de invertir muchas horas en investigar las posiciones de todos los partidos inscritos en una elección.",E.jsx("br",{}),"La meta de la aplicación no es convencer a nadie de votar por un partido específico, sino ayudar a que las personas tengan una primera idea de cuáles partidos están alineados con sus opiniones, para que luego puedan informarse más antes de votar."]}),E.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Contacto"}),E.jsxs("p",{children:["Si tienes ideas, sugerencia o comentarios sobre la aplicación, me alegraría leerlos en este correo: ",E.jsx("br",{}),E.jsx("a",{href:"mailto:decid.es@outlook.com",style:{color:"#00CED1"},children:"decid.es@outlook.com"})]})]})]})})}function cT({open:n,onClose:e}){return n?E.jsx("div",{className:"menu-panel",children:E.jsxs("ul",{style:{textDecoration:"none",listStyle:"none",margin:0,padding:10},children:[E.jsx("li",{className:"menu-list-item",children:E.jsx(Wn,{to:"/",onClick:e,children:"Encuesta"})}),E.jsx("li",{className:"menu-list-item",children:E.jsx(Wn,{to:"/metodologia",onClick:e,children:"Metodología"})}),E.jsx("li",{className:"menu-list-item",children:E.jsx(Wn,{to:"/contacto",onClick:e,children:"Contacto"})})]})}):null}function uT(){const[n,e]=P.useState(null),{state:t,dispatch:r,config:i,electionConfigs:o}=bd(n),a=i.resultTypes||[],[c,u]=P.useState(!1),[d,m]=P.useState(window.innerWidth<768);P.useEffect(()=>{const p=()=>m(window.innerWidth<768);return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]);const[v,A]=P.useState(a[0]||null),[b,S]=P.useState(null),O=(p,w)=>{const g=w==="party"?p.party:p.name;S(re=>{const H=re===g;return H||y(p,w),H?null:g})},k=({inline:p=!1})=>{if(!t.selectedEntity)return null;const w=p?"entity-details-inline":"entity-details-container",{candidate_meta:g,party_meta:re,details:H}=t.entityDetails;return E.jsxs("div",{className:w,children:[E.jsx("h2",{style:{margin:p?"4px 0":"8px 0"},children:t.selectedEntity.name||t.selectedEntity.party}),g&&E.jsxs(E.Fragment,{children:[!i.isPresidentialElection&&E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Edad:"})," ",g.age,E.jsx("br",{}),E.jsx("strong",{children:"Asistencia:"})," ",g.attendance||"N/A",E.jsx("br",{})]}),E.jsx("strong",{children:"Partido:"})," ",g.party,E.jsx("br",{}),E.jsx("br",{})]}),re&&i.name!=="chile"&&!i.isPresidentialElection&&E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Edad promedio:"})," ",re.average_age,E.jsx("br",{}),E.jsx("strong",{children:"Asistencia promedio:"})," ",re.average_attendance_percentage||"N/A","%",E.jsx("br",{}),E.jsx("br",{})]}),H&&H.length>0?t.questionDetails.length>0?t.questionDetails.map((_e,Ie)=>{const Y=H.find(G=>G.id===_e.id);if(!Y)return null;const fe=_e.source;return E.jsxs("div",{style:{marginBottom:p?"4px":"2px",lineHeight:"1.2"},children:[E.jsxs("p",{style:{margin:"2px 0"},children:[E.jsx("strong",{children:"Tema:"})," ",_e.question,E.jsx("br",{}),i.showLawInfo&&_e.law&&E.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[E.jsx("strong",{children:"Proyecto de ley:"})," ",_e.law]})]}),i.showLawInfo&&!i.isPresidentialElection&&E.jsxs("p",{style:{margin:"2px 0"},children:[E.jsx("strong",{children:"Fecha:"})," ",Y.date||"N/A",E.jsx("br",{})]}),E.jsxs("p",{style:{margin:"2px 0"},children:[E.jsx("strong",{children:"Tu respuesta:"})," ",N[t.answers[Ie]]||"Sin respuesta",E.jsx("br",{})]}),E.jsx("p",{style:{margin:"2px 0"},children:re?Y.vote_counts?E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Votos del partido:"})," A favor: ",Y.vote_counts["A favor"]||0,", En contra: ",Y.vote_counts["En contra"]||0,", Abstención: ",Y.vote_counts.Abstención||0,E.jsx("br",{})]}):E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Voto más común:"})," ",Y.vote||"N/A",E.jsx("br",{})]}):i.isPresidentialElection?E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Opinión del candidato:"})," ",Y.vote==="1"?"A favor":Y.vote==="0.5"?"Neutral":"En contra",E.jsx("br",{}),Y.comment&&E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Comentario:"})," ",Y.comment,E.jsx("br",{})]}),Y.source&&E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Fuente:"})," ",E.jsxs("a",{href:Y.source,target:"_blank",rel:"noopener noreferrer",children:[Y.source.slice(0,40),"…"]}),E.jsx("br",{})]})]}):E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Voto del congresista:"})," ",Y.vote,E.jsx("br",{})]})}),fe&&fe.startsWith("http")&&E.jsx("p",{style:{margin:"2px 0"},children:i.showLawInfo?E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Documento y noticias:"})," ",E.jsxs("a",{href:fe,target:"_blank",rel:"noopener noreferrer",children:[new URL(fe).hostname.replace("www.",""),"…"]}),E.jsx("br",{})]}):E.jsxs(E.Fragment,{children:[E.jsx("strong",{children:"Noticias:"})," ",E.jsxs("a",{href:fe,target:"_blank",rel:"noopener noreferrer",children:[new URL(fe).hostname.replace("www.",""),"…"]}),E.jsx("br",{})]})}),E.jsx("br",{})]},Ie)}):E.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):E.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]})};P.useEffect(()=>{a.length&&A(a[0])},[a]);const N={"Estoy de acuerdo":"A favor","No tengo una opinión sobre este tema":"Neutral","No estoy de acuerdo":"En contra"};P.useEffect(()=>{if(!t.comparisonResults)return;o[n];const p=t.showIndividualResults?t.comparisonResults.individual_results:t.comparisonResults.party_results;if(p&&p.length>0){const w=t.showIndividualResults?"individual":"party";y(p[0],w)}},[t.comparisonResults,t.showIndividualResults,o,n]);const M=p=>r({type:"SET_CURRENT_QUESTION_INDEX",payload:p}),L=()=>M(t.currentQuestionIndex+1),B=()=>M(t.currentQuestionIndex-1),X=p=>{r({type:"ANSWER",index:t.currentQuestionIndex,answer:p}),t.currentQuestionIndex<t.questions.length-1&&M(t.currentQuestionIndex+1)},J=()=>{const p=t.questions.map((w,g)=>({id:w.id,question:w.question,answer:t.answers[g]||"Sin respuesta",weight:t.weights[g]}));console.log("Submitted answers:",p)},I=async()=>{const p=t.questions.reduce((g,re,H)=>(g[re.id]={answer:t.answers[H]||"Sin respuesta",weight:t.weights[H]},g),{}),w={userId:localStorage.getItem("userId")||Date.now(),responses:p,createdAt:new Date};localStorage.setItem("userId",w.userId);try{const g=await Jg(Lg(Lv,"quizAnswers"),w);console.log("Document written with ID:",g.id)}catch(g){console.error("Error adding document:",g)}},_=()=>{J(),I(),r({type:"SET_SELECTED_ENTITY",payload:null}),r({type:"SET_SHOW_INDIVIDUAL_RESULTS",payload:i.isPresidentialElection}),r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.questions.length});const p="/votometro/";console.log("Parliamentary votes URL:",p+i.parlVotesFile),console.log("Presidential votes URL: ",p+i.presVotesFile);const w={};t.questions.forEach((H,_e)=>{const Ie=t.answers[_e]||"No tengo una opinión sobre este tema",Y=Ie.trim().toLowerCase();let G={"estoy de acuerdo":1,"no tengo una opinión sobre este tema":.5,"no estoy de acuerdo":0}[Y];G===void 0&&(console.log(`Mapping failed for answer: "${Ie}". Falling back to 0.5.`),G=.5),H.polarity==="-"&&(G=G===1?0:G===0?1:G),w[H.id]={answer:G,weight:t.weights[_e]}});const g=i.questionTypes.includes("parliamentary")?fetch(p+i.parlVotesFile).then(H=>{if(!H.ok)throw new Error("Parl fetch failed");return H.json()}):Promise.resolve(null),re=i.questionTypes.includes("presidential")&&i.presVotesFile?fetch(p+i.presVotesFile).then(H=>{if(!H.ok)throw new Error("Pres fetch failed");return H.json()}):Promise.resolve(null);Promise.all([g,re]).then(([H,_e])=>{const Ie=H?Object.values(H.candidates.processed||{}).map(G=>{var ie;let ue=0,oe=0;return Object.entries(G.votes).forEach(([wn,Je])=>{const kt=i.processCandidateVote(Je),De=w[wn];De!=null&&!Number.isNaN(kt)&&(ue+=Math.abs(De.answer-kt)*De.weight,oe+=De.weight)}),{name:G.name,party:G.party||((ie=G.candidate_meta)==null?void 0:ie.party),similarity_score:oe?Math.round((1-ue/oe)*100):0}}).sort((G,ue)=>ue.similarity_score-G.similarity_score):[],Y=i.resultTypes.includes("party")?(()=>{const G={};return Ie.forEach(({party:ue,similarity_score:oe})=>{G[ue]||(G[ue]={total:0,count:0}),G[ue].total+=oe,G[ue].count+=1}),Object.entries(G).map(([ue,oe])=>({party:ue,average_similarity_score:Math.round(oe.total/oe.count)})).sort((ue,oe)=>oe.average_similarity_score-ue.average_similarity_score)})():[],fe=_e?Object.entries(_e.candidates).map(([G,ue])=>{let oe=0,ie=0;return Object.entries(ue.votes).forEach(([wn,Je])=>{const kt=parseFloat(Je.vote),De=w[wn];De!=null&&!Number.isNaN(kt)&&(oe+=Math.abs(De.answer-kt)*De.weight,ie+=De.weight)}),{name:G,party:ue.party,similarity_score:ie?Math.round((1-oe/ie)*100):0}}).sort((G,ue)=>ue.similarity_score-G.similarity_score):[];r({type:"SET_COMPARISON_RESULTS",payload:{individual_results:Ie,party_results:Y,presidential_results:fe}})}).catch(H=>console.error("Error fetching votes:",H))},y=(p,w)=>{r({type:"SET_SELECTED_ENTITY",payload:p});const g="/votometro/",re=w==="presidential"?i.presVotesFile:i.parlVotesFile;fetch(g+re).then(H=>{if(!H.ok)throw new Error(`Fetch failed for ${re}`);return H.json()}).then(H=>{if(w==="presidential"){const _e=H.candidates[p.name];if(!_e){console.error("No candidate data for",p.name);return}const Ie=Object.entries(_e.votes).map(([Y,fe])=>({id:Y,question:fe.question,vote:fe.vote,comment:fe.comment,source:fe.source}));r({type:"SET_ENTITY_DETAILS",payload:{candidate_meta:{party:_e.party},details:Ie}})}else r(w==="party"?{type:"SET_ENTITY_DETAILS",payload:{party_meta:H.parties.meta[p.party]||{},details:H.parties.details[p.party]||[]}}:{type:"SET_ENTITY_DETAILS",payload:H.candidates.details[p.name]||{}})}).catch(H=>console.error("Error fetching votes:",H))};P.useEffect(()=>{if(!t.comparisonResults||!v)return;let p=[],w="";v==="party"?(p=t.comparisonResults.party_results,w="party"):v==="parliamentaryCandidates"?(p=t.comparisonResults.individual_results,w="individual"):v==="presidentialCandidates"&&(p=t.comparisonResults.presidential_results,w="presidential"),p.length>0&&y(p[0],w)},[t.comparisonResults,v]);const T=()=>{e(null),r({type:"RESET"})};return E.jsx(JE,{children:E.jsxs(E.Fragment,{children:[E.jsx("button",{className:"menu-button",onClick:()=>u(!c),children:"Menu"}),E.jsx(cT,{open:c,onClose:()=>u(!1)}),E.jsxs(SE,{children:[E.jsx(Yr,{path:"/",element:E.jsx("div",{className:"main-container",children:n?E.jsxs("div",{className:"election-content-area",children:[n&&E.jsx("button",{onClick:T,className:"reset-button",children:"Reiniciar"}),t.questions.length===0?E.jsx("h2",{children:"Cargando..."}):t.currentQuestionIndex<t.questions.length?E.jsxs(E.Fragment,{children:[E.jsx("div",{children:E.jsxs("h3",{children:[t.currentQuestionIndex+1," / ",t.questions.length]})}),E.jsxs("div",{children:[E.jsx("label",{children:"Qué tan importante te parece este tema?"}),E.jsx("br",{}),E.jsxs("div",{className:"importance-slider-container",children:[E.jsx("span",{children:"Poco importante"}),E.jsx("input",{type:"range",min:"1",max:"5",value:t.weights[t.currentQuestionIndex],onChange:p=>r({type:"SET_WEIGHTS",index:t.currentQuestionIndex,weight:Number(p.target.value)})}),E.jsx("span",{children:"Muy importante"})]})]}),E.jsx("div",{className:"question-text-container",children:E.jsx("h2",{children:t.questions[t.currentQuestionIndex].question})}),E.jsx("div",{children:t.questions[t.currentQuestionIndex].options.map((p,w)=>E.jsx("button",{className:"option-button",onClick:g=>{X(p),g.currentTarget.blur()},onMouseEnter:()=>r({type:"SET_HOVERED_OPTION",payload:p}),onMouseLeave:()=>r({type:"SET_HOVERED_OPTION",payload:null}),style:{backgroundColor:t.answers[t.currentQuestionIndex]===p||t.hoveredOption===p?"#20292e":"darkslategrey"},children:p},w))}),E.jsxs("div",{children:[E.jsx("button",{className:"back-and-skip-buttons",onClick:B,disabled:t.currentQuestionIndex===0,children:"Volver"}),E.jsx("button",{className:"back-and-skip-buttons",onClick:()=>{t.currentQuestionIndex===t.questions.length-1?_():L()},children:t.currentQuestionIndex===t.questions.length-1?"Terminar encuesta":"Saltar"})]})]}):E.jsxs(E.Fragment,{children:[E.jsx("div",{id:"recaptcha-container"}),E.jsx("h2",{children:"Resultados"}),a.length>1&&E.jsx("div",{className:"results-toggle-container",children:a.map(p=>E.jsxs("button",{className:"toggle-option-button",onClick:()=>A(p),onMouseEnter:()=>r({type:"SET_HOVERED_OPTION",payload:p}),onMouseLeave:()=>r({type:"SET_HOVERED_OPTION",payload:null}),style:{backgroundColor:v===p||t.hoveredOption===p?"#20292e":"darkslategrey"},children:[p==="party"&&"Partidos políticos",p==="parliamentaryCandidates"&&"Diputados",p==="presidentialCandidates"&&"Candidatos presidenciales"]},p))}),E.jsxs("div",{style:{display:"flex",flexDirection:d?"column":"row",width:"100%"},children:[E.jsx("div",{style:{flex:1},children:t.comparisonResults&&E.jsxs(E.Fragment,{children:[v==="party"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"candidate-party-similarity-header",children:[E.jsx("span",{children:"Partido"}),E.jsx("span",{children:"Similaridad"})]}),E.jsx("ul",{className:"parties-and-candidates-list",style:{textAlign:"left"},children:t.comparisonResults.party_results.map((p,w)=>E.jsxs(as.Fragment,{children:[E.jsxs("li",{className:`candidate-party-similarity-item ${b===p.party?"open":""}`,onClick:()=>d?O(p,"party"):y(p,"party"),children:[E.jsx("span",{children:p.party}),E.jsxs("span",{className:"result-score",children:[p.average_similarity_score,"%"]})]}),d&&b===p.party&&E.jsx(k,{inline:!0})]},w))})]}),v==="parliamentaryCandidates"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"candidate-party-similarity-header",children:[E.jsx("span",{children:"Candidatos parlamentarios"}),E.jsx("span",{children:"Similaridad"})]}),E.jsx("ul",{className:"parties-and-candidates-list",children:t.comparisonResults.individual_results.map((p,w)=>{var g;return E.jsxs(as.Fragment,{children:[E.jsxs("li",{className:`candidate-party-similarity-item ${b===p.name?"open":""}`,onClick:()=>d?O(p,"individual"):y(p,"individual"),children:[E.jsx("span",{children:((g=p.names)==null?void 0:g.join(", "))||p.name}),E.jsxs("span",{className:"result-score",children:[p.similarity_score,"%"]})]}),d&&b===p.name&&E.jsx(k,{inline:!0})]},w)})})]}),v==="presidentialCandidates"&&E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"candidate-party-similarity-header",children:[E.jsx("span",{children:"Candidatos presidenciales"}),E.jsx("span",{children:"Similaridad"})]}),E.jsx("ul",{className:"parties-and-candidates-list",children:t.comparisonResults.presidential_results.map((p,w)=>E.jsxs(as.Fragment,{children:[E.jsxs("li",{className:`candidate-party-similarity-item ${b===p.name?"open":""}`,onClick:()=>d?O(p,"presidential"):y(p,"presidential"),children:[E.jsx("span",{children:p.name}),E.jsxs("span",{className:"result-score",children:[p.similarity_score,"%"]})]}),d&&b===p.name&&E.jsx(k,{inline:!0})]},w))})]})]})}),E.jsx(k,{})]}),E.jsx("div",{children:E.jsx("button",{className:"back-to-survey-button",onClick:()=>r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.questions.length-1}),onMouseEnter:p=>p.target.style.backgroundColor="#20292e",onMouseLeave:p=>p.target.style.backgroundColor="darkslategrey",style:{backgroundColor:"darkslategrey",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})]}):E.jsxs("div",{className:"election-selection-container",children:[E.jsx("h2",{children:"Elecciones"}),E.jsx("button",{onClick:()=>e("chile_2025"),children:"Chile: Elecciones generales (15.11.2025)"}),E.jsx("button",{onClick:()=>e("peru_parl_2026"),children:"Perú: Elección parlamentaria (12.04.2026)"})]})})}),E.jsx(Yr,{path:"/metodologia",element:E.jsx(aT,{})}),E.jsx(Yr,{path:"/contacto",element:E.jsx(lT,{})})]})]})})}Ed.createRoot(document.getElementById("root")).render(E.jsx(P.StrictMode,{children:E.jsx(uT,{})}));
