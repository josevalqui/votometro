import{r as lc,a as pd}from"./vendor-B4Q6vpuu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var rs={exports:{}},Nn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da;function md(){if(Da)return Nn;Da=1;var n=lc(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(c,u,d){var m,y={},I=null,S=null;d!==void 0&&(I=""+d),u.key!==void 0&&(I=""+u.key),u.ref!==void 0&&(S=u.ref);for(m in u)r.call(u,m)&&!o.hasOwnProperty(m)&&(y[m]=u[m]);if(c&&c.defaultProps)for(m in u=c.defaultProps,u)y[m]===void 0&&(y[m]=u[m]);return{$$typeof:e,type:c,key:I,ref:S,props:y,_owner:i.current}}return Nn.Fragment=t,Nn.jsx=a,Nn.jsxs=a,Nn}var Oa;function gd(){return Oa||(Oa=1,rs.exports=md()),rs.exports}var T=gd(),P=lc(),xr={},Va;function _d(){if(Va)return xr;Va=1;var n=pd();return xr.createRoot=n.createRoot,xr.hydrateRoot=n.hydrateRoot,xr}var yd=_d();const vd={name:"peru",parlQuestionsFile:"combined_questions_peru_2026.json",parlVotesFile:"combined_votes_peru_2026.json",processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary"],resultTypes:["party","parliamentaryCandidates"]},Ed={name:"chile",parlQuestionsFile:"combined_questions_chile_parl_2025.json",parlVotesFile:"combined_votes_chile_parl_2025.json",processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary"],resultTypes:["party","parliamentaryCandidates"]},Td={name:"chile_presidencial_2025",presVotesFile:"combined_votes_chile_pres_2025.json",processCandidateVote:n=>n,showLawInfo:!1,isPresidentialElection:!0,questionTypes:["presidential"],resultTypes:["presidentialCandidates"]},wd={name:"chile_2025",parlQuestionsFile:"combined_questions_chile_parl_2025.json",parlVotesFile:"combined_votes_chile_parl_2025.json",presVotesFile:"combined_votes_chile_pres_2025.json",isPresidentialElection:!0,processCandidateVote:n=>n,showLawInfo:!0,questionTypes:["parliamentary","presidential"],resultTypes:["party","parliamentaryCandidates","presidentialCandidates"]},La={peru_parl_2026:vd,chile_diputados_2025:Ed,chile_presidencial_2025:Td,chile_2025:wd},cc={questions:[],questionDetails:[],currentQuestionIndex:0,answers:[],weights:[],comparisonResults:null,selectedEntity:null,entityDetails:{},hoveredOption:null,showIndividualResults:!1};function Id(n,e){switch(e.type){case"SET_QUESTIONS":return{...n,questions:e.payload,questionDetails:e.payload,answers:Array(e.payload.length).fill(null),weights:Array(e.payload.length).fill(3)};case"SET_CURRENT_QUESTION_INDEX":return{...n,currentQuestionIndex:e.payload};case"ANSWER":const t=[...n.answers];return t[e.index]=e.answer,{...n,answers:t};case"SET_WEIGHTS":const r=[...n.weights];return r[e.index]=e.weight,{...n,weights:r};case"SET_COMPARISON_RESULTS":return{...n,comparisonResults:e.payload};case"SET_SELECTED_ENTITY":return{...n,selectedEntity:e.payload};case"SET_ENTITY_DETAILS":return{...n,entityDetails:e.payload};case"SET_HOVERED_OPTION":return{...n,hoveredOption:e.payload};case"SET_SHOW_INDIVIDUAL_RESULTS":return{...n,showIndividualResults:e.payload};case"RESET":return cc;default:return n}}function Ad(n){const e=P.useMemo(()=>n?La[n]:{},[n]),[t,r]=P.useReducer(Id,cc);return P.useEffect(()=>{if(!n)return;const i=e.questionTypes.includes("parliamentary")?fetch("/votometro/"+e.parlQuestionsFile).then(a=>a.json()):Promise.resolve([]),o=e.questionTypes.includes("presidential")?fetch("/votometro/"+e.presVotesFile).then(a=>a.json()).then(a=>{const c=Object.values(a.candidates)[0].votes;return Object.entries(c).map(([u,d])=>({id:u,question:d.question,options:["Estoy de acuerdo","No tengo una opinión sobre este tema","No estoy de acuerdo"],polarity:""}))}):Promise.resolve([]);Promise.all([i,o]).then(([a,c])=>r({type:"SET_QUESTIONS",payload:[...a,...c]})).catch(a=>console.error("Error loading questions:",a))},[n,e.questionsFile,e.votesFile,e.questionTypes]),{state:t,dispatch:r,config:e,electionConfigs:La}}const Rd=()=>{};var Ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},bd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=o>>2,y=(o&3)<<4|c>>4;let I=(c&15)<<2|d>>6,S=d&63;u||(S=64,a||(I=64)),r.push(t[m],t[y],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||c==null||d==null||y==null)throw new Sd;const I=o<<2|c>>4;if(r.push(I),d!==64){const S=c<<4&240|d>>2;if(r.push(S),y!==64){const b=d<<6&192|y;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(n){const e=uc(n);return Bs.encodeByteArray(e,!0)},Yr=function(n){return Cd(n).replace(/\./g,"")},hc=function(n){try{return Bs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pd=()=>dc().__FIREBASE_DEFAULTS__,kd=()=>{if(typeof process>"u"||typeof Ma>"u")return;const n=Ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hc(n[1]);return e&&JSON.parse(e)},yi=()=>{try{return Rd()||Pd()||kd()||xd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fc=n=>{var e,t;return(t=(e=yi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nd=n=>{const e=fc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pc=()=>{var n;return(n=yi())===null||n===void 0?void 0:n.config},mc=n=>{var e;return(e=yi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Yr(JSON.stringify(t)),Yr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Vd(){var n;const e=(n=yi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ld(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Md(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Fd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ud(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jd(){return!Vd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $s(){try{return typeof indexedDB=="object"}catch{return!1}}function Bd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="FirebaseError";class ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$d,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Hd(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ot(i,c,r)}}function Hd(n,e){return n.replace(qd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qd=/\{\$([^}]+)}/g;function zd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Mt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Fa(o)&&Fa(a)){if(!Mt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Fa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wd(n,e){const t=new Kd(n,e);return t.subscribe.bind(t)}class Kd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Gd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=is),i.error===void 0&&(i.error=is),i.complete===void 0&&(i.complete=is);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function is(){}/**
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
 */const Qd=1e3,Xd=2,Jd=4*60*60*1e3,Yd=.5;function Zd(n,e=Qd,t=Xd){const r=e*Math.pow(t,n),i=Math.round(Yd*r*(Math.random()-.5)*2);return Math.min(Jd,r+i)}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xt="[DEFAULT]";/**
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
 */class ef{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hn;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nf(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tf(n){return n===xt?void 0:n}function nf(n){return n.instantiationMode==="EAGER"}/**
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
 */class rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ef(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const sf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},of=W.INFO,af={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},lf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=af[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vi{constructor(e){this.name=e,this._logLevel=of,this._logHandler=lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const cf=(n,e)=>e.some(t=>n instanceof t);let Ua,ja;function uf(){return Ua||(Ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hf(){return ja||(ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,ys=new WeakMap,_c=new WeakMap,ss=new WeakMap,Hs=new WeakMap;function df(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(yt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gc.set(t,n)}).catch(()=>{}),Hs.set(e,n),e}function ff(n){if(ys.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ys.set(n,e)}let vs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ys.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_c.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pf(n){vs=n(vs)}function mf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(os(this),e,...t);return _c.set(r,e.sort?e.sort():[e]),yt(r)}:hf().includes(n)?function(...e){return n.apply(os(this),e),yt(gc.get(this))}:function(...e){return yt(n.apply(os(this),e))}}function gf(n){return typeof n=="function"?mf(n):(n instanceof IDBTransaction&&ff(n),cf(n,uf())?new Proxy(n,vs):n)}function yt(n){if(n instanceof IDBRequest)return df(n);if(ss.has(n))return ss.get(n);const e=gf(n);return e!==n&&(ss.set(n,e),Hs.set(e,n)),e}const os=n=>Hs.get(n);function _f(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),c=yt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(yt(a.result),u.oldVersion,u.newVersion,yt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const yf=["get","getKey","getAll","getAllKeys","count"],vf=["put","add","delete","clear"],as=new Map;function Ba(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(as.get(e))return as.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=vf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yf.includes(t)))return;const o=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return as.set(e,o),o}pf(n=>({...n,get:(e,t,r)=>Ba(e,t)||n.get(e,t,r),has:(e,t)=>!!Ba(e,t)||n.has(e,t)}));/**
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
 */class Ef{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Tf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Tf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",$a="0.11.2";/**
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
 */const rt=new vi("@firebase/app"),wf="@firebase/app-compat",If="@firebase/analytics-compat",Af="@firebase/analytics",Rf="@firebase/app-check-compat",bf="@firebase/app-check",Sf="@firebase/auth",Cf="@firebase/auth-compat",Pf="@firebase/database",kf="@firebase/data-connect",xf="@firebase/database-compat",Nf="@firebase/functions",Df="@firebase/functions-compat",Of="@firebase/installations",Vf="@firebase/installations-compat",Lf="@firebase/messaging",Mf="@firebase/messaging-compat",Ff="@firebase/performance",Uf="@firebase/performance-compat",jf="@firebase/remote-config",Bf="@firebase/remote-config-compat",$f="@firebase/storage",Hf="@firebase/storage-compat",qf="@firebase/firestore",zf="@firebase/vertexai",Wf="@firebase/firestore-compat",Kf="firebase",Gf="11.4.0";/**
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
 */const Ts="[DEFAULT]",Qf={[Es]:"fire-core",[wf]:"fire-core-compat",[Af]:"fire-analytics",[If]:"fire-analytics-compat",[bf]:"fire-app-check",[Rf]:"fire-app-check-compat",[Sf]:"fire-auth",[Cf]:"fire-auth-compat",[Pf]:"fire-rtdb",[kf]:"fire-data-connect",[xf]:"fire-rtdb-compat",[Nf]:"fire-fn",[Df]:"fire-fn-compat",[Of]:"fire-iid",[Vf]:"fire-iid-compat",[Lf]:"fire-fcm",[Mf]:"fire-fcm-compat",[Ff]:"fire-perf",[Uf]:"fire-perf-compat",[jf]:"fire-rc",[Bf]:"fire-rc-compat",[$f]:"fire-gcs",[Hf]:"fire-gcs-compat",[qf]:"fire-fst",[Wf]:"fire-fst-compat",[zf]:"fire-vertex","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
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
 */const Zr=new Map,Xf=new Map,ws=new Map;function Ha(n,e){try{n.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Tt(n){const e=n.name;if(ws.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;ws.set(e,n);for(const t of Zr.values())Ha(t,n);for(const t of Xf.values())Ha(t,n);return!0}function er(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Jf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new dn("app","Firebase",Jf);/**
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
 */class Yf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const fn=Gf;function yc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ts,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(t||(t=pc()),!t)throw vt.create("no-options");const o=Zr.get(i);if(o){if(Mt(t,o.options)&&Mt(r,o.config))return o;throw vt.create("duplicate-app",{appName:i})}const a=new rf(i);for(const u of ws.values())a.addComponent(u);const c=new Yf(t,r,a);return Zr.set(i,c),c}function qs(n=Ts){const e=Zr.get(n);if(!e&&n===Ts&&pc())return yc();if(!e)throw vt.create("no-app",{appName:n});return e}function Ye(n,e,t){var r;let i=(r=Qf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(c.join(" "));return}Tt(new nt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Zf="firebase-heartbeat-database",ep=1,qn="firebase-heartbeat-store";let ls=null;function vc(){return ls||(ls=_f(Zf,ep,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),ls}async function tp(n){try{const t=(await vc()).transaction(qn),r=await t.objectStore(qn).get(Ec(n));return await t.done,r}catch(e){if(e instanceof ot)rt.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function qa(n,e){try{const r=(await vc()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,Ec(n)),await r.done}catch(t){if(t instanceof ot)rt.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(r.message)}}}function Ec(n){return`${n.name}!${n.options.appId}`}/**
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
 */const np=1024,rp=30;class ip{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new op(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=za();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>rp){const a=ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=za(),{heartbeatsToSend:r,unsentEntries:i}=sp(this._heartbeatsCache.heartbeats),o=Yr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return rt.warn(t),""}}}function za(){return new Date().toISOString().substring(0,10)}function sp(n,e=np){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Wa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class op{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $s()?Bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wa(n){return Yr(JSON.stringify({version:2,heartbeats:n})).length}function ap(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function lp(n){Tt(new nt("platform-logger",e=>new Ef(e),"PRIVATE")),Tt(new nt("heartbeat",e=>new ip(e),"PRIVATE")),Ye(Es,$a,n),Ye(Es,$a,"esm2017"),Ye("fire-js","")}lp("");var cp="firebase",up="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye(cp,up,"app");var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function _(){}_.prototype=p.prototype,E.D=p.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,w,A){for(var g=Array(arguments.length-2),X=2;X<arguments.length;X++)g[X-2]=arguments[X];return p.prototype[w].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,_){_||(_=0);var v=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)v[w]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(w=0;16>w;++w)v[w]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=E.g[0],_=E.g[1],w=E.g[2];var A=E.g[3],g=p+(A^_&(w^A))+v[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(w^p&(_^w))+v[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=w+(_^A&(p^_))+v[2]+606105819&4294967295,w=A+(g<<17&4294967295|g>>>15),g=_+(p^w&(A^p))+v[3]+3250441966&4294967295,_=w+(g<<22&4294967295|g>>>10),g=p+(A^_&(w^A))+v[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(w^p&(_^w))+v[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=w+(_^A&(p^_))+v[6]+2821735955&4294967295,w=A+(g<<17&4294967295|g>>>15),g=_+(p^w&(A^p))+v[7]+4249261313&4294967295,_=w+(g<<22&4294967295|g>>>10),g=p+(A^_&(w^A))+v[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(w^p&(_^w))+v[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=w+(_^A&(p^_))+v[10]+4294925233&4294967295,w=A+(g<<17&4294967295|g>>>15),g=_+(p^w&(A^p))+v[11]+2304563134&4294967295,_=w+(g<<22&4294967295|g>>>10),g=p+(A^_&(w^A))+v[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(w^p&(_^w))+v[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=w+(_^A&(p^_))+v[14]+2792965006&4294967295,w=A+(g<<17&4294967295|g>>>15),g=_+(p^w&(A^p))+v[15]+1236535329&4294967295,_=w+(g<<22&4294967295|g>>>10),g=p+(w^A&(_^w))+v[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^w&(p^_))+v[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=w+(p^_&(A^p))+v[11]+643717713&4294967295,w=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(w^A))+v[0]+3921069994&4294967295,_=w+(g<<20&4294967295|g>>>12),g=p+(w^A&(_^w))+v[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^w&(p^_))+v[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=w+(p^_&(A^p))+v[15]+3634488961&4294967295,w=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(w^A))+v[4]+3889429448&4294967295,_=w+(g<<20&4294967295|g>>>12),g=p+(w^A&(_^w))+v[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^w&(p^_))+v[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=w+(p^_&(A^p))+v[3]+4107603335&4294967295,w=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(w^A))+v[8]+1163531501&4294967295,_=w+(g<<20&4294967295|g>>>12),g=p+(w^A&(_^w))+v[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^w&(p^_))+v[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=w+(p^_&(A^p))+v[7]+1735328473&4294967295,w=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(w^A))+v[12]+2368359562&4294967295,_=w+(g<<20&4294967295|g>>>12),g=p+(_^w^A)+v[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^w)+v[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=w+(A^p^_)+v[11]+1839030562&4294967295,w=A+(g<<16&4294967295|g>>>16),g=_+(w^A^p)+v[14]+4259657740&4294967295,_=w+(g<<23&4294967295|g>>>9),g=p+(_^w^A)+v[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^w)+v[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=w+(A^p^_)+v[7]+4139469664&4294967295,w=A+(g<<16&4294967295|g>>>16),g=_+(w^A^p)+v[10]+3200236656&4294967295,_=w+(g<<23&4294967295|g>>>9),g=p+(_^w^A)+v[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^w)+v[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=w+(A^p^_)+v[3]+3572445317&4294967295,w=A+(g<<16&4294967295|g>>>16),g=_+(w^A^p)+v[6]+76029189&4294967295,_=w+(g<<23&4294967295|g>>>9),g=p+(_^w^A)+v[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^w)+v[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=w+(A^p^_)+v[15]+530742520&4294967295,w=A+(g<<16&4294967295|g>>>16),g=_+(w^A^p)+v[2]+3299628645&4294967295,_=w+(g<<23&4294967295|g>>>9),g=p+(w^(_|~A))+v[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~w))+v[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=w+(p^(A|~_))+v[14]+2878612391&4294967295,w=A+(g<<15&4294967295|g>>>17),g=_+(A^(w|~p))+v[5]+4237533241&4294967295,_=w+(g<<21&4294967295|g>>>11),g=p+(w^(_|~A))+v[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~w))+v[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=w+(p^(A|~_))+v[10]+4293915773&4294967295,w=A+(g<<15&4294967295|g>>>17),g=_+(A^(w|~p))+v[1]+2240044497&4294967295,_=w+(g<<21&4294967295|g>>>11),g=p+(w^(_|~A))+v[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~w))+v[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=w+(p^(A|~_))+v[6]+2734768916&4294967295,w=A+(g<<15&4294967295|g>>>17),g=_+(A^(w|~p))+v[13]+1309151649&4294967295,_=w+(g<<21&4294967295|g>>>11),g=p+(w^(_|~A))+v[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~w))+v[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=w+(p^(A|~_))+v[2]+718787259&4294967295,w=A+(g<<15&4294967295|g>>>17),g=_+(A^(w|~p))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(w+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var _=p-this.blockSize,v=this.B,w=this.h,A=0;A<p;){if(w==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<p;)if(v[w++]=E.charCodeAt(A++),w==this.blockSize){i(this,v),w=0;break}}else for(;A<p;)if(v[w++]=E[A++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var _=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=_&255,_/=256;for(this.u(E),E=Array(16),p=_=0;4>p;++p)for(var v=0;32>v;v+=8)E[_++]=this.g[p]>>>v&255;return E};function o(E,p){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=p(E)}function a(E,p){this.h=p;for(var _=[],v=!0,w=E.length-1;0<=w;w--){var A=E[w]|0;v&&A==p||(_[w]=A,v=!1)}this.g=_}var c={};function u(E){return-128<=E&&128>E?o(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return k(d(-E));for(var p=[],_=1,v=0;E>=_;v++)p[v]=E/_|0,_*=4294967296;return new a(p,0)}function m(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(m(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),v=y,w=0;w<E.length;w+=8){var A=Math.min(8,E.length-w),g=parseInt(E.substring(w,w+A),p);8>A?(A=d(Math.pow(p,A)),v=v.j(A).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var y=u(0),I=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-k(this).m();for(var E=0,p=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b(this))return"0";if(V(this))return"-"+k(this).toString(E);for(var p=d(Math.pow(E,6)),_=this,v="";;){var w=N(_,p).g;_=D(_,w.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=w,b(_))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function b(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=D(this,E),V(E)?-1:b(E)?0:1};function k(E){for(var p=E.g.length,_=[],v=0;v<p;v++)_[v]=~E.g[v];return new a(_,~E.h).add(I)}n.abs=function(){return V(this)?k(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],v=0,w=0;w<=p;w++){var A=v+(this.i(w)&65535)+(E.i(w)&65535),g=(A>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=g>>>16,A&=65535,g&=65535,_[w]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function D(E,p){return E.add(k(p))}n.j=function(E){if(b(this)||b(E))return y;if(V(this))return V(E)?k(this).j(k(E)):k(k(this).j(E));if(V(E))return k(this.j(k(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,_=[],v=0;v<2*p;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var A=this.i(v)>>>16,g=this.i(v)&65535,X=E.i(w)>>>16,oe=E.i(w)&65535;_[2*v+2*w]+=g*oe,F(_,2*v+2*w),_[2*v+2*w+1]+=A*oe,F(_,2*v+2*w+1),_[2*v+2*w+1]+=g*X,F(_,2*v+2*w+1),_[2*v+2*w+2]+=A*X,F(_,2*v+2*w+2)}for(v=0;v<p;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=p;v<2*p;v++)_[v]=0;return new a(_,0)};function F(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function M(E,p){this.g=E,this.h=p}function N(E,p){if(b(p))throw Error("division by zero");if(b(E))return new M(y,y);if(V(E))return p=N(k(E),p),new M(k(p.g),k(p.h));if(V(p))return p=N(E,k(p)),new M(k(p.g),p.h);if(30<E.g.length){if(V(E)||V(p))throw Error("slowDivide_ only works with positive integers.");for(var _=I,v=p;0>=v.l(E);)_=B(_),v=B(v);var w=U(_,1),A=U(v,1);for(v=U(v,2),_=U(_,2);!b(v);){var g=A.add(v);0>=g.l(E)&&(w=w.add(_),A=g),v=U(v,1),_=U(_,1)}return p=D(E,w.j(p)),new M(w,p)}for(w=y;0<=E.l(p);){for(_=Math.max(1,Math.floor(E.m()/p.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(_),g=A.j(p);V(g)||0<g.l(E);)_-=v,A=d(_),g=A.j(p);b(A)&&(A=I),w=w.add(A),E=D(E,g)}return new M(w,E)}n.A=function(E){return N(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),_=[],v=0;v<p;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function B(E){for(var p=E.g.length+1,_=[],v=0;v<p;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function U(E,p){var _=p>>5;p%=32;for(var v=E.g.length-_,w=[],A=0;A<v;A++)w[A]=0<p?E.i(A+_)>>>p|E.i(A+_+1)<<32-p:E.i(A+_);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,zs=a}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});var Nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tc,Ln,wc,Br,Is,Ic,Ac,Rc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,h){return s==Array.prototype||s==Object.prototype||(s[l]=h.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nr=="object"&&Nr];for(var l=0;l<s.length;++l){var h=s[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var h=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var R=s[f];if(!(R in h))break e;h=h[R]}s=s[s.length-1],f=h[s],l=l(f),l!=f&&l!=null&&e(h,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var h=0,f=!1,R={next:function(){if(!f&&h<s.length){var C=h++;return{value:l(C,s[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function m(s,l,h){return s.call.apply(s.bind,arguments)}function y(s,l,h){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),s.apply(l,R)}}return function(){return s.apply(l,arguments)}}function I(s,l,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,I.apply(null,arguments)}function S(s,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function b(s,l){function h(){}h.prototype=l.prototype,s.aa=l.prototype,s.prototype=new h,s.prototype.constructor=s,s.Qb=function(f,R,C){for(var L=Array(arguments.length-2),J=2;J<arguments.length;J++)L[J-2]=arguments[J];return l.prototype[R].apply(f,L)}}function V(s){const l=s.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=s[f];return h}return[]}function k(s,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const R=s.length||0,C=f.length||0;s.length=R+C;for(let L=0;L<C;L++)s[R+L]=f[L]}else s.push(f)}}class D{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(s){return/^[\s\xa0]*$/.test(s)}function M(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var B=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function U(s,l,h){for(const f in s)l.call(h,s[f],f,s)}function E(s,l){for(const h in s)l.call(void 0,s[h],h,s)}function p(s){const l={};for(const h in s)l[h]=s[h];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let h,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(h in f)s[h]=f[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(f,h)&&(s[h]=f[h])}}function w(s){var l=1;s=s.split(":");const h=[];for(;0<l&&s.length;)h.push(s.shift()),l--;return s.length&&h.push(s.join(":")),h}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=We;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class X{constructor(){this.h=this.g=null}add(l,h){const f=oe.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var oe=new D(()=>new lt,s=>s.reset());class lt{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,ze=!1,We=new X,ke=()=>{const s=c.Promise.resolve(void 0);qe=()=>{s.then(Oh)}};var Oh=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(h){A(h)}var l=oe;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}ze=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Vh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return s}();function yn(s,l){if(ge.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var h=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(B){e:{try{N(l.nodeName);var R=!0;break e}catch{}R=!1}R||(l=null)}}else h=="mouseover"?l=s.fromElement:h=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Lh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&yn.aa.h.call(this)}}b(yn,ge);var Lh={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var dr="closure_listenable_"+(1e6*Math.random()|0),Mh=0;function Fh(s,l,h,f,R){this.listener=s,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=R,this.key=++Mh,this.da=this.fa=!1}function fr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pr(s){this.src=s,this.g={},this.h=0}pr.prototype.add=function(s,l,h,f,R){var C=s.toString();s=this.g[C],s||(s=this.g[C]=[],this.h++);var L=Vi(s,l,f,R);return-1<L?(l=s[L],h||(l.fa=!1)):(l=new Fh(l,this.src,C,!!f,R),l.fa=h,s.push(l)),l};function Oi(s,l){var h=l.type;if(h in s.g){var f=s.g[h],R=Array.prototype.indexOf.call(f,l,void 0),C;(C=0<=R)&&Array.prototype.splice.call(f,R,1),C&&(fr(l),s.g[h].length==0&&(delete s.g[h],s.h--))}}function Vi(s,l,h,f){for(var R=0;R<s.length;++R){var C=s[R];if(!C.da&&C.listener==l&&C.capture==!!h&&C.ha==f)return R}return-1}var Li="closure_lm_"+(1e6*Math.random()|0),Mi={};function Oo(s,l,h,f,R){if(Array.isArray(l)){for(var C=0;C<l.length;C++)Oo(s,l[C],h,f,R);return null}return h=Mo(h),s&&s[dr]?s.K(l,h,d(f)?!!f.capture:!1,R):Uh(s,l,h,!1,f,R)}function Uh(s,l,h,f,R,C){if(!l)throw Error("Invalid event type");var L=d(R)?!!R.capture:!!R,J=Ui(s);if(J||(s[Li]=J=new pr(s)),h=J.add(l,h,f,L,C),h.proxy)return h;if(f=jh(),h.proxy=f,f.src=s,f.listener=h,s.addEventListener)Vh||(R=L),R===void 0&&(R=!1),s.addEventListener(l.toString(),f,R);else if(s.attachEvent)s.attachEvent(Lo(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function jh(){function s(h){return l.call(s.src,s.listener,h)}const l=Bh;return s}function Vo(s,l,h,f,R){if(Array.isArray(l))for(var C=0;C<l.length;C++)Vo(s,l[C],h,f,R);else f=d(f)?!!f.capture:!!f,h=Mo(h),s&&s[dr]?(s=s.i,l=String(l).toString(),l in s.g&&(C=s.g[l],h=Vi(C,h,f,R),-1<h&&(fr(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete s.g[l],s.h--)))):s&&(s=Ui(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Vi(l,h,f,R)),(h=-1<s?l[s]:null)&&Fi(h))}function Fi(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[dr])Oi(l.i,s);else{var h=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(h,f,s.capture):l.detachEvent?l.detachEvent(Lo(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Ui(l))?(Oi(h,s),h.h==0&&(h.src=null,l[Li]=null)):fr(s)}}}function Lo(s){return s in Mi?Mi[s]:Mi[s]="on"+s}function Bh(s,l){if(s.da)s=!0;else{l=new yn(l,this);var h=s.listener,f=s.ha||s.src;s.fa&&Fi(s),s=h.call(f,l)}return s}function Ui(s){return s=s[Li],s instanceof pr?s:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(s){return typeof s=="function"?s:(s[ji]||(s[ji]=function(l){return s.handleEvent(l)}),s[ji])}function _e(){ct.call(this),this.i=new pr(this),this.M=this,this.F=null}b(_e,ct),_e.prototype[dr]=!0,_e.prototype.removeEventListener=function(s,l,h,f){Vo(this,s,l,h,f)};function Ae(s,l){var h,f=s.F;if(f)for(h=[];f;f=f.F)h.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new ge(l,s);else if(l instanceof ge)l.target=l.target||s;else{var R=l;l=new ge(f,s),v(l,R)}if(R=!0,h)for(var C=h.length-1;0<=C;C--){var L=l.g=h[C];R=mr(L,f,!0,l)&&R}if(L=l.g=s,R=mr(L,f,!0,l)&&R,R=mr(L,f,!1,l)&&R,h)for(C=0;C<h.length;C++)L=l.g=h[C],R=mr(L,f,!1,l)&&R}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var h=s.g[l],f=0;f<h.length;f++)fr(h[f]);delete s.g[l],s.h--}}this.F=null},_e.prototype.K=function(s,l,h,f){return this.i.add(String(s),l,!1,h,f)},_e.prototype.L=function(s,l,h,f){return this.i.add(String(s),l,!0,h,f)};function mr(s,l,h,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var R=!0,C=0;C<l.length;++C){var L=l[C];if(L&&!L.da&&L.capture==h){var J=L.listener,he=L.ha||L.src;L.fa&&Oi(s.i,L),R=J.call(he,f)!==!1&&R}}return R&&!f.defaultPrevented}function Fo(s,l,h){if(typeof s=="function")h&&(s=I(s,h));else if(s&&typeof s.handleEvent=="function")s=I(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(s,l||0)}function Uo(s){s.g=Fo(()=>{s.g=null,s.i&&(s.i=!1,Uo(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class $h extends ct{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Uo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(s){ct.call(this),this.h=s,this.g={}}b(vn,ct);var jo=[];function Bo(s){U(s.g,function(l,h){this.g.hasOwnProperty(h)&&Fi(l)},s),s.g={}}vn.prototype.N=function(){vn.aa.N.call(this),Bo(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bi=c.JSON.stringify,Hh=c.JSON.parse,qh=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function $i(){}$i.prototype.h=null;function $o(s){return s.h||(s.h=s.i())}function Ho(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){ge.call(this,"d")}b(Hi,ge);function qi(){ge.call(this,"c")}b(qi,ge);var St={},qo=null;function gr(){return qo=qo||new _e}St.La="serverreachability";function zo(s){ge.call(this,St.La,s)}b(zo,ge);function Tn(s){const l=gr();Ae(l,new zo(l))}St.STAT_EVENT="statevent";function Wo(s,l){ge.call(this,St.STAT_EVENT,s),this.stat=l}b(Wo,ge);function Re(s){const l=gr();Ae(l,new Wo(l,s))}St.Ma="timingevent";function Ko(s,l){ge.call(this,St.Ma,s),this.size=l}b(Ko,ge);function wn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},l)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function zh(s,l,h,f,R,C){s.info(function(){if(s.g)if(C)for(var L="",J=C.split("&"),he=0;he<J.length;he++){var G=J[he].split("=");if(1<G.length){var ye=G[0];G=G[1];var ve=ye.split("_");L=2<=ve.length&&ve[1]=="type"?L+(ye+"="+G+"&"):L+(ye+"=redacted&")}}else L=null;else L=C;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+l+`
`+h+`
`+L})}function Wh(s,l,h,f,R,C,L){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+l+`
`+h+`
`+C+" "+L})}function Kt(s,l,h,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Gh(s,h)+(f?" "+f:"")})}function Kh(s,l){s.info(function(){return"TIMEOUT: "+l})}In.prototype.info=function(){};function Gh(s,l){if(!s.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(s=0;s<h.length;s++)if(Array.isArray(h[s])){var f=h[s];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var L=1;L<R.length;L++)R[L]=""}}}}return Bi(h)}catch{return l}}var _r={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Go={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zi;function yr(){}b(yr,$i),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},zi=new yr;function ut(s,l,h,f){this.j=s,this.i=l,this.l=h,this.R=f||1,this.U=new vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var Xo={},Wi={};function Ki(s,l,h){s.L=1,s.v=wr(Ke(l)),s.m=h,s.P=!0,Jo(s,null)}function Jo(s,l){s.F=Date.now(),vr(s),s.A=Ke(s.v);var h=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ha(h.i,"t",f),s.C=0,h=s.j.J,s.h=new Qo,s.g=Pa(s.j,h?l:null,!s.m),0<s.O&&(s.M=new $h(I(s.Y,s,s.g),s.O)),l=s.U,h=s.g,f=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(jo[0]=R.toString()),R=jo);for(var C=0;C<R.length;C++){var L=Oo(h,R[C],f||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Tn(),zh(s.i,s.u,s.A,s.l,s.R,s.m)}ut.prototype.ca=function(s){s=s.target;const l=this.M;l&&Ge(s)==3?l.j():this.Y(s)},ut.prototype.Y=function(s){try{if(s==this.g)e:{const ve=Ge(this.g);var l=this.g.Ba();const Xt=this.g.Z();if(!(3>ve)&&(ve!=3||this.g&&(this.h.h||this.g.oa()||ya(this.g)))){this.J||ve!=4||l==7||(l==8||0>=Xt?Tn(3):Tn(2)),Gi(this);var h=this.g.Z();this.X=h;t:if(Yo(this)){var f=ya(this.g);s="";var R=f.length,C=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),An(this);var L="";break t}this.h.i=new c.TextDecoder}for(l=0;l<R;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(C&&l==R-1)});f.length=0,this.h.g+=s,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=h==200,Wh(this.i,this.u,this.A,this.l,this.R,ve,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,he=this.g;if((J=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(J)){var G=J;break t}}G=null}if(h=G)Kt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qi(this,h);else{this.o=!1,this.s=3,Re(12),Ct(this),An(this);break e}}if(this.P){h=!0;let Ne;for(;!this.J&&this.C<L.length;)if(Ne=Qh(this,L),Ne==Wi){ve==4&&(this.s=4,Re(14),h=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Xo){this.s=4,Re(15),Kt(this.i,this.l,L,"[Invalid Chunk]"),h=!1;break}else Kt(this.i,this.l,Ne,null),Qi(this,Ne);if(Yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||L.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)Kt(this.i,this.l,L,"[Invalid Chunked Response]"),Ct(this),An(this);else if(0<L.length&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.ba&&!ye.M&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),ts(ye),ye.M=!0,Re(11))}}else Kt(this.i,this.l,L,null),Qi(this,L);ve==4&&Ct(this),this.o&&!this.J&&(ve==4?Ra(this.j,this):(this.o=!1,vr(this)))}else dd(this.g),h==400&&0<L.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),Ct(this),An(this)}}}catch{}finally{}};function Yo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Qh(s,l){var h=s.C,f=l.indexOf(`
`,h);return f==-1?Wi:(h=Number(l.substring(h,f)),isNaN(h)?Xo:(f+=1,f+h>l.length?Wi:(l=l.slice(f,f+h),s.C=f+h,l)))}ut.prototype.cancel=function(){this.J=!0,Ct(this)};function vr(s){s.S=Date.now()+s.I,Zo(s,s.I)}function Zo(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=wn(I(s.ba,s),l)}function Gi(s){s.B&&(c.clearTimeout(s.B),s.B=null)}ut.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Kh(this.i,this.A),this.L!=2&&(Tn(),Re(17)),Ct(this),this.s=2,An(this)):Zo(this,this.S-s)};function An(s){s.j.G==0||s.J||Ra(s.j,s)}function Ct(s){Gi(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,Bo(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function Qi(s,l){try{var h=s.j;if(h.G!=0&&(h.g==s||Xi(h.h,s))){if(!s.K&&Xi(h.h,s)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<s.F)Cr(h),br(h);else break e;es(h),Re(18)}}else h.za=R[1],0<h.za-h.T&&37500>R[2]&&h.F&&h.v==0&&!h.C&&(h.C=wn(I(h.Za,h),6e3));if(1>=na(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else kt(h,11)}else if((s.K||h.g==s)&&Cr(h),!F(l))for(R=h.Da.g.parse(l),l=0;l<R.length;l++){let G=R[l];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const ye=G[3];ye!=null&&(h.la=ye,h.j.info("VER="+h.la));const ve=G[4];ve!=null&&(h.Aa=ve,h.j.info("SVER="+h.Aa));const Xt=G[5];Xt!=null&&typeof Xt=="number"&&0<Xt&&(f=1.5*Xt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Ne=s.g;if(Ne){const kr=Ne.g?Ne.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var C=f.h;C.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ji(C,C.h),C.h=null))}if(f.D){const ns=Ne.g?Ne.g.getResponseHeader("X-HTTP-Session-Id"):null;ns&&(f.ya=ns,Z(f.I,f.D,ns))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-s.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var L=s;if(f.qa=Ca(f,f.J?f.ia:null,f.W),L.K){ra(f.h,L);var J=L,he=f.L;he&&(J.I=he),J.B&&(Gi(J),vr(J)),f.g=L}else Ia(f);0<h.i.length&&Sr(h)}else G[0]!="stop"&&G[0]!="close"||kt(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?kt(h,7):Zi(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}Tn(4)}catch{}}var Xh=class{constructor(s,l){this.g=s,this.map=l}};function ea(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ta(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function na(s){return s.h?1:s.g?s.g.size:0}function Xi(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Ji(s,l){s.g?s.g.add(l):s.h=l}function ra(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}ea.prototype.cancel=function(){if(this.i=ia(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ia(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const h of s.g.values())l=l.concat(h.D);return l}return V(s.i)}function Jh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(u(s)){for(var l=[],h=s.length,f=0;f<h;f++)l.push(s[f]);return l}l=[],h=0;for(f in s)l[h++]=s[f];return l}function Yh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(u(s)||typeof s=="string"){var l=[];s=s.length;for(var h=0;h<s;h++)l.push(h);return l}l=[],h=0;for(const f in s)l[h++]=f;return l}}}function sa(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(u(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var h=Yh(s),f=Jh(s),R=f.length,C=0;C<R;C++)l.call(void 0,f[C],h&&h[C],s)}var oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zh(s,l){if(s){s=s.split("&");for(var h=0;h<s.length;h++){var f=s[h].indexOf("="),R=null;if(0<=f){var C=s[h].substring(0,f);R=s[h].substring(f+1)}else C=s[h];l(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Pt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Pt){this.h=s.h,Er(this,s.j),this.o=s.o,this.g=s.g,Tr(this,s.s),this.l=s.l;var l=s.i,h=new Sn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),aa(this,h),this.m=s.m}else s&&(l=String(s).match(oa))?(this.h=!1,Er(this,l[1]||"",!0),this.o=Rn(l[2]||""),this.g=Rn(l[3]||"",!0),Tr(this,l[4]),this.l=Rn(l[5]||"",!0),aa(this,l[6]||"",!0),this.m=Rn(l[7]||"")):(this.h=!1,this.i=new Sn(null,this.h))}Pt.prototype.toString=function(){var s=[],l=this.j;l&&s.push(bn(l,la,!0),":");var h=this.g;return(h||l=="file")&&(s.push("//"),(l=this.o)&&s.push(bn(l,la,!0),"@"),s.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&s.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&s.push("/"),s.push(bn(h,h.charAt(0)=="/"?nd:td,!0))),(h=this.i.toString())&&s.push("?",h),(h=this.m)&&s.push("#",bn(h,id)),s.join("")};function Ke(s){return new Pt(s)}function Er(s,l,h){s.j=h?Rn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function Tr(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function aa(s,l,h){l instanceof Sn?(s.i=l,sd(s.i,s.h)):(h||(l=bn(l,rd)),s.i=new Sn(l,s.h))}function Z(s,l,h){s.i.set(l,h)}function wr(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Rn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function bn(s,l,h){return typeof s=="string"?(s=encodeURI(s).replace(l,ed),h&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ed(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var la=/[#\/\?@]/g,td=/[#\?:]/g,nd=/[#\?]/g,rd=/[#\?@]/g,id=/#/g;function Sn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function ht(s){s.g||(s.g=new Map,s.h=0,s.i&&Zh(s.i,function(l,h){s.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=Sn.prototype,n.add=function(s,l){ht(this),this.i=null,s=Gt(this,s);var h=this.g.get(s);return h||this.g.set(s,h=[]),h.push(l),this.h+=1,this};function ca(s,l){ht(s),l=Gt(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function ua(s,l){return ht(s),l=Gt(s,l),s.g.has(l)}n.forEach=function(s,l){ht(this),this.g.forEach(function(h,f){h.forEach(function(R){s.call(l,R,f,this)},this)},this)},n.na=function(){ht(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const R=s[f];for(let C=0;C<R.length;C++)h.push(l[f])}return h},n.V=function(s){ht(this);let l=[];if(typeof s=="string")ua(this,s)&&(l=l.concat(this.g.get(Gt(this,s))));else{s=Array.from(this.g.values());for(let h=0;h<s.length;h++)l=l.concat(s[h])}return l},n.set=function(s,l){return ht(this),this.i=null,s=Gt(this,s),ua(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function ha(s,l,h){ca(s,l),0<h.length&&(s.i=null,s.g.set(Gt(s,l),V(h)),s.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const C=encodeURIComponent(String(f)),L=this.V(f);for(f=0;f<L.length;f++){var R=C;L[f]!==""&&(R+="="+encodeURIComponent(String(L[f]))),s.push(R)}}return this.i=s.join("&")};function Gt(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function sd(s,l){l&&!s.j&&(ht(s),s.i=null,s.g.forEach(function(h,f){var R=f.toLowerCase();f!=R&&(ca(this,f),ha(this,R,h))},s)),s.j=l}function od(s,l){const h=new In;if(c.Image){const f=new Image;f.onload=S(dt,h,"TestLoadImage: loaded",!0,l,f),f.onerror=S(dt,h,"TestLoadImage: error",!1,l,f),f.onabort=S(dt,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=S(dt,h,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function ad(s,l){const h=new In,f=new AbortController,R=setTimeout(()=>{f.abort(),dt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(C=>{clearTimeout(R),C.ok?dt(h,"TestPingServer: ok",!0,l):dt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(R),dt(h,"TestPingServer: error",!1,l)})}function dt(s,l,h,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(h)}catch{}}function ld(){this.g=new qh}function cd(s,l,h){const f=h||"";try{sa(s,function(R,C){let L=R;d(R)&&(L=Bi(R)),l.push(f+C+"="+encodeURIComponent(L))})}catch(R){throw l.push(f+"type="+encodeURIComponent("_badmap")),R}}function Ir(s){this.l=s.Ub||null,this.j=s.eb||!1}b(Ir,$i),Ir.prototype.g=function(){return new Ar(this.l,this.j)},Ir.prototype.i=function(s){return function(){return s}}({});function Ar(s,l){_e.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Ar,_e),n=Ar.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Pn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;da(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function da(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?Cn(this):Pn(this),this.readyState==3&&da(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Cn(this))},n.Qa=function(s){this.g&&(this.response=s,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Pn(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,s.push(h[0]+": "+h[1]),h=l.next();return s.join(`\r
`)};function Pn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function fa(s){let l="";return U(s,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Yi(s,l,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=fa(h),typeof s=="string"?h!=null&&encodeURIComponent(String(h)):Z(s,l,h))}function ne(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ne,_e);var ud=/^https?$/i,hd=["POST","PUT"];n=ne.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zi.g(),this.v=this.o?$o(this.o):$o(zi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(C){pa(this,C);return}if(s=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)h.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(hd,l,void 0))||f||R||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of h)this.g.setRequestHeader(C,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_a(this),this.u=!0,this.g.send(s),this.u=!1}catch(C){pa(this,C)}};function pa(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,ma(s),Rr(s)}function ma(s){s.A||(s.A=!0,Ae(s,"complete"),Ae(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ae(this,"complete"),Ae(this,"abort"),Rr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rr(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ga(this):this.bb())},n.bb=function(){ga(this)};function ga(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ge(s)!=4||s.Z()!=2)){if(s.u&&Ge(s)==4)Fo(s.Ea,0,s);else if(Ae(s,"readystatechange"),Ge(s)==4){s.h=!1;try{const L=s.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var f;if(f=L===0){var R=String(s.D).match(oa)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),f=!ud.test(R?R.toLowerCase():"")}h=f}if(h)Ae(s,"complete"),Ae(s,"success");else{s.m=6;try{var C=2<Ge(s)?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.Z()+"]",ma(s)}}finally{Rr(s)}}}}function Rr(s,l){if(s.g){_a(s);const h=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Ae(s,"ready");try{h.onreadystatechange=f}catch{}}}function _a(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ge(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Hh(l)}};function ya(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function dd(s){const l={};s=(s.g&&2<=Ge(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(F(s[f]))continue;var h=w(s[f]);const R=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=l[R]||[];l[R]=C,C.push(h)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(s,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[s]||l}function va(s){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kn("baseRetryDelayMs",5e3,s),this.cb=kn("retryDelaySeedMs",1e4,s),this.Wa=kn("forwardChannelMaxRetries",2,s),this.wa=kn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ea(s&&s.concurrentRequestLimit),this.Da=new ld,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=va.prototype,n.la=8,n.G=1,n.connect=function(s,l,h,f){Re(0),this.W=s,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Ca(this,null,this.W),Sr(this)};function Zi(s){if(Ea(s),s.G==3){var l=s.U++,h=Ke(s.I);if(Z(h,"SID",s.K),Z(h,"RID",l),Z(h,"TYPE","terminate"),xn(s,h),l=new ut(s,s.j,l),l.L=2,l.v=wr(Ke(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Pa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),vr(l)}Sa(s)}function br(s){s.g&&(ts(s),s.g.cancel(),s.g=null)}function Ea(s){br(s),s.u&&(c.clearTimeout(s.u),s.u=null),Cr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Sr(s){if(!ta(s.h)&&!s.s){s.s=!0;var l=s.Ga;qe||ke(),ze||(qe(),ze=!0),We.add(l,s),s.B=0}}function fd(s,l){return na(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=wn(I(s.Ga,s,l),ba(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new ut(this,this.j,s);let C=this.o;if(this.S&&(C?(C=p(C),v(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=wa(this,R,l),h=Ke(this.I),Z(h,"RID",s),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),xn(this,h),C&&(this.O?l="headers="+encodeURIComponent(String(fa(C)))+"&"+l:this.m&&Yi(h,this.m,C)),Ji(this.h,R),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",l),Z(h,"SID","null"),R.T=!0,Ki(R,h,null)):Ki(R,h,l),this.G=2}}else this.G==3&&(s?Ta(this,s):this.i.length==0||ta(this.h)||Ta(this))};function Ta(s,l){var h;l?h=l.l:h=s.U++;const f=Ke(s.I);Z(f,"SID",s.K),Z(f,"RID",h),Z(f,"AID",s.T),xn(s,f),s.m&&s.o&&Yi(f,s.m,s.o),h=new ut(s,s.j,h,s.B+1),s.m===null&&(h.H=s.o),l&&(s.i=l.D.concat(s.i)),l=wa(s,h,1e3),h.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ji(s.h,h),Ki(h,f,l)}function xn(s,l){s.H&&U(s.H,function(h,f){Z(l,f,h)}),s.l&&sa({},function(h,f){Z(l,f,h)})}function wa(s,l,h){h=Math.min(s.i.length,h);var f=s.l?I(s.l.Na,s.l,s):null;e:{var R=s.i;let C=-1;for(;;){const L=["count="+h];C==-1?0<h?(C=R[0].g,L.push("ofs="+C)):C=0:L.push("ofs="+C);let J=!0;for(let he=0;he<h;he++){let G=R[he].g;const ye=R[he].map;if(G-=C,0>G)C=Math.max(0,R[he].g-100),J=!1;else try{cd(ye,L,"req"+G+"_")}catch{f&&f(ye)}}if(J){f=L.join("&");break e}}}return s=s.i.splice(0,h),l.D=s,f}function Ia(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;qe||ke(),ze||(qe(),ze=!0),We.add(l,s),s.v=0}}function es(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=wn(I(s.Fa,s),ba(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Aa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=wn(I(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),br(this),Aa(this))};function ts(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Aa(s){s.g=new ut(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=Ke(s.qa);Z(l,"RID","rpc"),Z(l,"SID",s.K),Z(l,"AID",s.T),Z(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(l,"TO",s.ja),Z(l,"TYPE","xmlhttp"),xn(s,l),s.m&&s.o&&Yi(l,s.m,s.o),s.L&&(s.g.I=s.L);var h=s.g;s=s.ia,h.L=1,h.v=wr(Ke(l)),h.m=null,h.P=!0,Jo(h,s)}n.Za=function(){this.C!=null&&(this.C=null,br(this),es(this),Re(19))};function Cr(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ra(s,l){var h=null;if(s.g==l){Cr(s),ts(s),s.g=null;var f=2}else if(Xi(s.h,l))h=l.D,ra(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var R=s.B;f=gr(),Ae(f,new Ko(f,h)),Sr(s)}else Ia(s);else if(R=l.s,R==3||R==0&&0<l.X||!(f==1&&fd(s,l)||f==2&&es(s)))switch(h&&0<h.length&&(l=s.h,l.i=l.i.concat(h)),R){case 1:kt(s,5);break;case 4:kt(s,10);break;case 3:kt(s,6);break;default:kt(s,2)}}}function ba(s,l){let h=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(h*=2),h*l}function kt(s,l){if(s.j.info("Error code "+l),l==2){var h=I(s.fb,s),f=s.Xa;const R=!f;f=new Pt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Er(f,"https"),wr(f),R?od(f.toString(),h):ad(f.toString(),h)}else Re(2);s.G=0,s.l&&s.l.sa(l),Sa(s),Ea(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function Sa(s){if(s.G=0,s.ka=[],s.l){const l=ia(s.h);(l.length!=0||s.i.length!=0)&&(k(s.ka,l),k(s.ka,s.i),s.h.i.length=0,V(s.i),s.i.length=0),s.l.ra()}}function Ca(s,l,h){var f=h instanceof Pt?Ke(h):new Pt(h);if(f.g!="")l&&(f.g=l+"."+f.g),Tr(f,f.s);else{var R=c.location;f=R.protocol,l=l?l+"."+R.hostname:R.hostname,R=+R.port;var C=new Pt(null);f&&Er(C,f),l&&(C.g=l),R&&Tr(C,R),h&&(C.l=h),f=C}return h=s.D,l=s.ya,h&&l&&Z(f,h,l),Z(f,"VER",s.la),xn(s,f),f}function Pa(s,l,h){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ne(new Ir({eb:h})):new ne(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ka(){}n=ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Pr(){}Pr.prototype.g=function(s,l){return new Pe(s,l)};function Pe(s,l){_e.call(this),this.g=new va(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!F(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Qt(this)}b(Pe,_e),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){Zi(this.g)},Pe.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var h={};h.__data__=s,s=h}else this.u&&(h={},h.__data__=Bi(s),s=h);l.i.push(new Xh(l.Ya++,s)),l.G==3&&Sr(l)},Pe.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,Pe.aa.N.call(this)};function xa(s){Hi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const h in l){s=h;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}b(xa,Hi);function Na(){qi.call(this),this.status=1}b(Na,qi);function Qt(s){this.g=s}b(Qt,ka),Qt.prototype.ua=function(){Ae(this.g,"a")},Qt.prototype.ta=function(s){Ae(this.g,new xa(s))},Qt.prototype.sa=function(s){Ae(this.g,new Na)},Qt.prototype.ra=function(){Ae(this.g,"b")},Pr.prototype.createWebChannel=Pr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,Rc=function(){return new Pr},Ac=function(){return gr()},Ic=St,Is={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_r.NO_ERROR=0,_r.TIMEOUT=8,_r.HTTP_ERROR=6,Br=_r,Go.COMPLETE="complete",wc=Go,Ho.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",_e.prototype.listen=_e.prototype.K,Ln=Ho,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,Tc=ne}).apply(typeof Nr<"u"?Nr:typeof self<"u"?self:typeof window<"u"?window:{});const Ga="@firebase/firestore",Qa="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let pn="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new vi("@firebase/firestore");function Jt(){return Ft.logLevel}function j(n,...e){if(Ft.logLevel<=W.DEBUG){const t=e.map(Ws);Ft.debug(`Firestore (${pn}): ${n}`,...t)}}function Ut(n,...e){if(Ft.logLevel<=W.ERROR){const t=e.map(Ws);Ft.error(`Firestore (${pn}): ${n}`,...t)}}function Ei(n,...e){if(Ft.logLevel<=W.WARN){const t=e.map(Ws);Ft.warn(`Firestore (${pn}): ${n}`,...t)}}function Ws(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function z(n="Unexpected state"){const e=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: `+n;throw Ut(e),new Error(e)}function ie(n,e){n||z()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class dp{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fp{constructor(e){this.t=e,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let o=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ot,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ot)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new bc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Te(e)}}class pp{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mp{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new pp(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gp{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Fe(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0);const r=o=>{o.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Xa(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new Xa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_p(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Q(n,e){return n<e?-1:n>e?1:0}function on(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=-62135596800,Ya=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ya);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ja)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ya}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ja;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ue(0,0))}static max(){return new ee(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="__name__";class Me{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(),r===void 0?r=e.length-t:r>e.length-t&&z(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Me.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Me?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Me.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Me.isNumericId(e),i=Me.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Me.extractNumericId(e).compare(Me.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return zs.fromString(e.substring(4,e.length-2))}}class re extends Me{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const yp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Me{construct(e,t,r){return new pe(e,t,r)}static isValidIdentifier(e){return yp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Za}static keyField(){return new pe([Za])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(re.fromString(e))}static fromName(e){return new q(re.fromString(e).popFirst(5))}static empty(){return new q(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new re(e.slice()))}}/**
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
 */const zn=-1;function vp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new wt(i,q.empty(),e)}function Ep(n){return new wt(n.readTime,n.key,zn)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(ee.min(),q.empty(),zn)}static max(){return new wt(ee.max(),q.empty(),zn)}}function Tp(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ip{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==wp)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,r)=>{t(e)})}static reject(e){return new x((t,r)=>{r(e)})}static waitFor(e){return new x((t,r)=>{let i=0,o=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++o,a&&o===i&&t()},u=>r(u))}),a=!0,o===i&&t()})}static or(e){let t=x.resolve(!1);for(const r of e)t=t.next(i=>i?x.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new x((r,i)=>{const o=e.length,a=new Array(o);let c=0;for(let u=0;u<o;u++){const d=u;t(e[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new x((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Ap(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function tr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.oe(r),this._e=r=>t.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Gs.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function Xs(n){return n==null}function ei(n){return n===0&&1/n==-1/0}function Rp(n){return typeof n=="number"&&Number.isInteger(n)&&!ei(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="";function bp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=el(e)),e=Sp(n.get(t),e);return el(e)}function Sp(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case Cc:t+="";break;default:t+=o}}return t}function el(n){return n+Cc+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dr(this.root,e,this.comparator,!0)}}class Dr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new de(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,t,r,i,o){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nl(this.data.getIterator())}getIteratorFrom(e){return new nl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class nl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ve([])}unionWith(e){let t=new me(pe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ve(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Cp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Cp("Invalid base64 string: "+o):o}}(e);return new Be(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new Be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Pp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(ie(!!n),typeof n=="string"){let e=0;const t=Pp.exec(n);if(ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function an(n){return typeof n=="string"?Be.fromBase64String(n):Be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc="server_timestamp",xc="__type__",Nc="__previous_value__",Dc="__local_write_time__";function Js(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[xc])===null||t===void 0?void 0:t.stringValue)===kc}function Ys(n){const e=n.mapValue.fields[Nc];return Js(e)?Ys(e):e}function ti(n){const e=jt(n.mapValue.fields[Dc].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,t,r,i,o,a,c,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}const ni="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||ni}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="__type__",xp="__max__",Or={mapValue:{}},Vc="__vector__",As="value";function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Js(n)?4:Dp(n)?9007199254740991:Np(n)?10:11:z()}function $e(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=jt(i.timestampValue),c=jt(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return an(i.bytesValue).isEqual(an(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return fe(i.geoPointValue.latitude)===fe(o.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return fe(i.integerValue)===fe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=fe(i.doubleValue),c=fe(o.doubleValue);return a===c?ei(a)===ei(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],$e);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},c=o.mapValue.fields||{};if(tl(a)!==tl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!$e(a[u],c[u])))return!1;return!0}(n,e);default:return z()}}function Wn(n,e){return(n.values||[]).find(t=>$e(t,e))!==void 0}function ln(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return Q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const c=fe(o.integerValue||o.doubleValue),u=fe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return rl(n.timestampValue,e.timestampValue);case 4:return rl(ti(n),ti(e));case 5:return Q(n.stringValue,e.stringValue);case 6:return function(o,a){const c=an(o),u=an(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const c=o.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=Q(c[d],u[d]);if(m!==0)return m}return Q(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const c=Q(fe(o.latitude),fe(a.latitude));return c!==0?c:Q(fe(o.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return il(n.arrayValue,e.arrayValue);case 10:return function(o,a){var c,u,d,m;const y=o.fields||{},I=a.fields||{},S=(c=y[As])===null||c===void 0?void 0:c.arrayValue,b=(u=I[As])===null||u===void 0?void 0:u.arrayValue,V=Q(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=b==null?void 0:b.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:il(S,b)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Or.mapValue&&a===Or.mapValue)return 0;if(o===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const c=o.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const I=Q(u[y],m[y]);if(I!==0)return I;const S=ln(c[u[y]],d[m[y]]);if(S!==0)return S}return Q(u.length,m.length)}(n.mapValue,e.mapValue);default:throw z()}}function rl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Q(n,e);const t=jt(n),r=jt(e),i=Q(t.seconds,r.seconds);return i!==0?i:Q(t.nanos,r.nanos)}function il(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=ln(t[i],r[i]);if(o)return o}return Q(t.length,r.length)}function cn(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return an(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Rs(t.fields[a])}`;return i+"}"}(n.mapValue):z()}function $r(n){switch(Bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ys(n);return e?16+$r(e):16;case 5:return 2*n.stringValue.length;case 6:return an(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+$r(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return mn(r.fields,(o,a)=>{i+=o.length+$r(a)}),i}(n.mapValue);default:throw z()}}function bs(n){return!!n&&"integerValue"in n}function Zs(n){return!!n&&"arrayValue"in n}function Hr(n){return!!n&&"mapValue"in n}function Np(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Oc])===null||t===void 0?void 0:t.stringValue)===Vc}function Mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Mn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Dp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mn(t)}setAll(e){let t=pe.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Mn(a):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());Hr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $e(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Hr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Oe(Mn(this.value))}}function Lc(n){const e=[];return mn(n.fields,(t,r)=>{const i=new pe([t]);if(Hr(r)){const o=Lc(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Ve(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,r,i,o,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(e){return new De(e,0,ee.min(),ee.min(),ee.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,i){return new De(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new De(e,2,t,ee.min(),ee.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,ee.min(),ee.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ii{constructor(e,t){this.position=e,this.inclusive=t}}function sl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=ln(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ol(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$e(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class si{constructor(e,t="asc"){this.field=e,this.dir=t}}function Op(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Mc{}class ce extends Mc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Lp(e,t,r):t==="array-contains"?new Up(e,r):t==="in"?new jp(e,r):t==="not-in"?new Bp(e,r):t==="array-contains-any"?new $p(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mp(e,r):new Fp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(ln(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(ln(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends Mc{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new It(e,t)}matches(e){return Fc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Fc(n){return n.op==="and"}function Uc(n){return Vp(n)&&Fc(n)}function Vp(n){for(const e of n.filters)if(e instanceof It)return!1;return!0}function Ss(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(Uc(n))return n.filters.map(e=>Ss(e)).join(",");{const e=n.filters.map(t=>Ss(t)).join(",");return`${n.op}(${e})`}}function jc(n,e){return n instanceof ce?function(r,i){return i instanceof ce&&r.op===i.op&&r.field.isEqual(i.field)&&$e(r.value,i.value)}(n,e):n instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,c)=>o&&jc(a,i.filters[c]),!0):!1}(n,e):void z()}function Bc(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${cn(t.value)}`}(n):n instanceof It?function(t){return t.op.toString()+" {"+t.getFilters().map(Bc).join(" ,")+"}"}(n):"Filter"}class Lp extends ce{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mp extends ce{constructor(e,t){super(e,"in",t),this.keys=$c("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fp extends ce{constructor(e,t){super(e,"not-in",t),this.keys=$c("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $c(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class Up extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zs(t)&&Wn(t.arrayValue,this.value)}}class jp extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wn(this.value.arrayValue,t)}}class Bp extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wn(this.value.arrayValue,t)}}class $p extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wn(this.value.arrayValue,r))}}/**
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
 */class Hp{constructor(e,t=null,r=[],i=[],o=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=c,this.le=null}}function al(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Hp(n,e,t,r,i,o,a)}function eo(n){const e=Y(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ss(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cn(r)).join(",")),e.le=t}return e.le}function to(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Op(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ol(n.startAt,e.startAt)&&ol(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t=null,r=[],i=[],o=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=u,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function qp(n,e,t,r,i,o,a,c){return new Ti(n,e,t,r,i,o,a,c)}function zp(n){return new Ti(n)}function ll(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wp(n){return n.collectionGroup!==null}function Fn(n){const e=Y(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new me(pe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new si(o,r))}),t.has(pe.keyField().canonicalString())||e.he.push(new si(pe.keyField(),r))}return e.he}function Vt(n){const e=Y(n);return e.Pe||(e.Pe=Kp(e,Fn(n))),e.Pe}function Kp(n,e){if(n.limitType==="F")return al(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new si(i.field,o)});const t=n.endAt?new ii(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ii(n.startAt.position,n.startAt.inclusive):null;return al(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Cs(n,e,t){return new Ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hc(n,e){return to(Vt(n),Vt(e))&&n.limitType===e.limitType}function qc(n){return`${eo(Vt(n))}|lt:${n.limitType}`}function Dn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Bc(i)).join(", ")}]`),Xs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>cn(i)).join(",")),`Target(${r})`}(Vt(n))}; limitType=${n.limitType})`}function no(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Fn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d<=0:d<0}(r.startAt,Fn(r),i)||r.endAt&&!function(a,c,u){const d=sl(a,c,u);return a.inclusive?d>=0:d>0}(r.endAt,Fn(r),i))}(n,e)}function Gp(n){return(e,t)=>{let r=!1;for(const i of Fn(n)){const o=Qp(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Qp(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(o,a,c){const u=a.data.field(o),d=c.data.field(o);return u!==null&&d!==null?ln(u,d):z()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return Pc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Ce(q.comparator);function oi(){return Xp}const zc=new Ce(q.comparator);function Vr(...n){let e=zc;for(const t of n)e=e.insert(t.key,t);return e}function Wc(n){let e=zc;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nt(){return Un()}function Kc(){return Un()}function Un(){return new Ht(n=>n.toString(),(n,e)=>n.isEqual(e))}const Jp=new Ce(q.comparator),Yp=new me(q.comparator);function we(...n){let e=Yp;for(const t of n)e=e.add(t);return e}const Zp=new me(Q);function em(){return Zp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ei(e)?"-0":e}}function Gc(n){return{integerValue:""+n}}function tm(n,e){return Rp(e)?Gc(e):ro(n,e)}/**
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
 */class wi{constructor(){this._=void 0}}function nm(n,e,t){return n instanceof ai?function(i,o){const a={fields:{[xc]:{stringValue:kc},[Dc]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Js(o)&&(o=Ys(o)),o&&(a.fields[Nc]=o),{mapValue:a}}(t,e):n instanceof Kn?Xc(n,e):n instanceof Gn?Jc(n,e):function(i,o){const a=Qc(i,o),c=cl(a)+cl(i.Ie);return bs(a)&&bs(i.Ie)?Gc(c):ro(i.serializer,c)}(n,e)}function rm(n,e,t){return n instanceof Kn?Xc(n,e):n instanceof Gn?Jc(n,e):t}function Qc(n,e){return n instanceof li?function(r){return bs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ai extends wi{}class Kn extends wi{constructor(e){super(),this.elements=e}}function Xc(n,e){const t=Yc(e);for(const r of n.elements)t.some(i=>$e(i,r))||t.push(r);return{arrayValue:{values:t}}}class Gn extends wi{constructor(e){super(),this.elements=e}}function Jc(n,e){let t=Yc(e);for(const r of n.elements)t=t.filter(i=>!$e(i,r));return{arrayValue:{values:t}}}class li extends wi{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function cl(n){return fe(n.integerValue||n.doubleValue)}function Yc(n){return Zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function im(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Kn&&i instanceof Kn||r instanceof Gn&&i instanceof Gn?on(r.elements,i.elements,$e):r instanceof li&&i instanceof li?$e(r.Ie,i.Ie):r instanceof ai&&i instanceof ai}(n.transform,e.transform)}class sm{constructor(e,t){this.version=e,this.transformResults=t}}class Ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ii{}function Zc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tu(n.key,Ze.none()):new nr(n.key,n.data,Ze.none());{const t=n.data,r=Oe.empty();let i=new me(pe.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new qt(n.key,r,new Ve(i.toArray()),Ze.none())}}function om(n,e,t){n instanceof nr?function(i,o,a){const c=i.value.clone(),u=hl(i.fieldTransforms,o,a.transformResults);c.setAll(u),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(i,o,a){if(!qr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const c=hl(i.fieldTransforms,o,a.transformResults),u=o.data;u.setAll(eu(i)),u.setAll(c),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function jn(n,e,t,r){return n instanceof nr?function(o,a,c,u){if(!qr(o.precondition,a))return c;const d=o.value.clone(),m=dl(o.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(o,a,c,u){if(!qr(o.precondition,a))return c;const d=dl(o.fieldTransforms,u,a),m=a.data;return m.setAll(eu(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,c){return qr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function am(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Qc(r.transform,i||null);o!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,o))}return t||null}function ul(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&on(r,i,(o,a)=>im(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class nr extends Ii{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qt extends Ii{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function eu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function hl(n,e,t){const r=new Map;ie(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,c=e.data.field(o.field);r.set(o.field,rm(a,c,t[i]))}return r}function dl(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,nm(o,a,e))}return r}class tu extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lm extends Ii{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&om(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kc();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=t.has(i.key)?null:c;const u=Zc(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),we())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,r)=>ul(t,r))&&on(this.baseMutations,e.baseMutations,(t,r)=>ul(t,r))}}class io{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ie(e.mutations.length===r.length);let i=function(){return Jp}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new io(e,t,r,i)}}/**
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
 */class um{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var se,K;function hm(n){switch(n){case O.OK:return z();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return z()}}function dm(n){if(n===void 0)return Ut("GRPC error has no .code"),O.UNKNOWN;switch(n){case se.OK:return O.OK;case se.CANCELLED:return O.CANCELLED;case se.UNKNOWN:return O.UNKNOWN;case se.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case se.INTERNAL:return O.INTERNAL;case se.UNAVAILABLE:return O.UNAVAILABLE;case se.UNAUTHENTICATED:return O.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case se.NOT_FOUND:return O.NOT_FOUND;case se.ALREADY_EXISTS:return O.ALREADY_EXISTS;case se.PERMISSION_DENIED:return O.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case se.ABORTED:return O.ABORTED;case se.OUT_OF_RANGE:return O.OUT_OF_RANGE;case se.UNIMPLEMENTED:return O.UNIMPLEMENTED;case se.DATA_LOSS:return O.DATA_LOSS;default:return z()}}(K=se||(se={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new zs([4294967295,4294967295],0);class fm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mm(n,e){return Ps(n,e.toTimestamp())}function tn(n){return ie(!!n),ee.fromTimestamp(function(t){const r=jt(t);return new ue(r.seconds,r.nanos)}(n))}function nu(n,e){return ks(n,e).canonicalString()}function ks(n,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gm(n){const e=re.fromString(n);return ie(Am(e)),e}function xs(n,e){return nu(n.databaseId,e.path)}function _m(n){const e=gm(n);return e.length===4?re.emptyPath():vm(e)}function ym(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function vm(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fl(n,e,t){return{name:xs(n,e),fields:t.value.mapValue.fields}}function Em(n,e){let t;if(e instanceof nr)t={update:fl(n,e.key,e.value)};else if(e instanceof tu)t={delete:xs(n,e.key)};else if(e instanceof qt)t={update:fl(n,e.key,e.data),updateMask:Im(e.fieldMask)};else{if(!(e instanceof lm))return z();t={verify:xs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof ai)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Kn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Gn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof li)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw z()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:mm(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z()}(n,e.precondition)),t}function Tm(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(i,o){let a=i.updateTime?tn(i.updateTime):tn(o);return a.isEqual(ee.min())&&(a=tn(o)),new sm(a,i.transformResults||[])}(t,e))):[]}function wm(n){let e=_m(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ie(r===1);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(y){const I=ru(y);return I instanceof It&&Uc(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(b){return new si(Yt(b.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(y){let I;return I=typeof y=="object"?y.value:y,Xs(I)?null:I}(t.limit));let u=null;t.startAt&&(u=function(y){const I=!!y.before,S=y.values||[];return new ii(S,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const I=!y.before,S=y.values||[];return new ii(S,I)}(t.endAt)),qp(e,i,a,o,c,"F",u,d)}function ru(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yt(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yt(t.unaryFilter.field);return ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Yt(t.unaryFilter.field);return ce.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Yt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return It.create(t.compositeFilter.filters.map(r=>ru(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z()}}(t.compositeFilter.op))}(n):z()}function Yt(n){return pe.fromServerFormat(n.fieldPath)}function Im(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Am(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.Tt=e}}function bm(n){const e=wm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cs(e,e.limit,"L"):e}/**
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
 */class Sm{constructor(){this.Tn=new Cm}addToCollectionParentIndex(e,t){return this.Tn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(wt.min())}updateCollectionGroup(e,t,r){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Cm{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new me(re.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(re.comparator)).toArray()}}/**
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
 */const pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iu=41943040;class be{static withCacheSize(e){return new be(e,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be.DEFAULT_COLLECTION_PERCENTILE=10,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,be.DEFAULT=new be(iu,be.DEFAULT_COLLECTION_PERCENTILE,be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),be.DISABLED=new be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new un(0)}static Un(){return new un(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="LruGarbageCollector",Pm=1048576;function gl([n,e],[t,r]){const i=Q(n,t);return i===0?Q(e,r):i}class km{constructor(e){this.Hn=e,this.buffer=new me(gl),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xm{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){j(ml,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tr(t)?j(ml,"Ignoring IndexedDB error during garbage collection: ",t):await Ks(t)}await this.er(3e5)})}}class Nm{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Gs.ae);const r=new km(t);return this.tr.forEachTarget(e,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(e,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(pl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pl):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,i,o,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(o=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Jt()<=W.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${o} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y})))}}function Dm(n,e){return new Nm(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.changes=new Ht(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?x.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&jn(r.mutation,i,Ve.empty(),ue.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,t,r=we()){const i=Nt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Vr();return o.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,we()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let o=oi();const a=Un(),c=function(){return Un()}();return t.forEach((u,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof qt)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),jn(m.mutation,d,m.mutation.getFieldMask(),ue.now())):a.set(d.key,Ve.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var y;return c.set(d,new Vm(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Un();let i=new Ce((a,c)=>a-c),o=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ve.empty();m=c.applyToLocalView(d,m),r.set(u,m);const y=(i.get(c.batchId)||we()).add(u);i=i.insert(c.batchId,y)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=Kc();m.forEach(I=>{if(!o.has(I)){const S=Zc(t.get(I),r.get(I));S!==null&&y.set(I,S),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return x.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):x.resolve(Nt());let c=zn,u=o;return a.next(d=>x.forEach(d,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),o.get(m)?x.resolve():this.remoteDocumentCache.getEntry(e,m).next(I=>{u=u.insert(m,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,we())).next(m=>({batchId:c,changes:Wc(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let i=Vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Vr();return this.indexManager.getCollectionParents(e,o).next(c=>x.forEach(c,u=>{const d=function(y,I){return new Ti(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,De.newInvalidDocument(m)))});let c=Vr();return a.forEach((u,d)=>{const m=o.get(u);m!==void 0&&jn(m.mutation,d,Ve.empty(),ue.now()),no(t,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return x.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(i){return{name:i.name,query:bm(i.bundledQuery),readTime:tn(i.readTime)}}(t)),x.resolve()}}/**
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
 */class Fm{constructor(){this.overlays=new Ce(q.comparator),this.Rr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nt();return x.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.Et(e,t,o)}),x.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),x.resolve()}getOverlaysForCollection(e,t,r){const i=Nt(),o=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Ce((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Nt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Nt(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=i)););return x.resolve(c)}Et(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new um(t,r));let o=this.Rr.get(t);o===void 0&&(o=we(),this.Rr.set(t,o)),this.Rr.set(t,o.add(r.key))}}/**
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
 */class Um{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.Vr=new me(le.mr),this.gr=new me(le.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const r=new le(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.wr(new le(e,t))}br(e,t){e.forEach(r=>this.removeReference(r,t))}Sr(e){const t=new q(new re([])),r=new le(t,e),i=new le(t,e+1),o=[];return this.gr.forEachInRange([r,i],a=>{this.wr(a),o.push(a.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new q(new re([])),r=new le(t,e),i=new le(t,e+1);let o=we();return this.gr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new le(e,0),r=this.Vr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class le{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return q.comparator(e.key,t.key)||Q(e.Cr,t.Cr)}static pr(e,t){return Q(e.Cr,t.Cr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new me(le.mr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cm(o,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Mr=this.Mr.add(new le(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Nr(r),o=i<0?0:i;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Qs:this.Fr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new le(t,0),i=new le(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],a=>{const c=this.Or(a.Cr);o.push(c)}),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(Q);return t.forEach(i=>{const o=new le(i,0),a=new le(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,a],c=>{r=r.add(c.Cr)})}),x.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new le(new q(o),0);let c=new me(Q);return this.Mr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Cr)),!0)},a),x.resolve(this.Br(c))}Br(e){const t=[];return e.forEach(r=>{const i=this.Or(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ie(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return x.forEach(t.mutations,i=>{const o=new le(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){const r=new le(t,0),i=this.Mr.firstAfterOrEqual(r);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.kr=e,this.docs=function(){return new Ce(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return x.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=oi();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():De.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=oi();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Tp(Ep(m),r)<=0||(i.has(m.key)||no(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,r,i){z()}qr(e,t){return x.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $m(this)}getSize(e){return x.resolve(this.size)}}class $m extends Om{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Ir.addEntry(e,i)):this.Ir.removeEntry(r)}),x.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.persistence=e,this.Qr=new Ht(t=>eo(t),to),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.$r=0,this.Kr=new so,this.targetCount=0,this.Ur=un.Kn()}forEachTarget(e,t){return this.Qr.forEach((r,i)=>t(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),x.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new un(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.zn(t),x.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Qr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),x.waitFor(o).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const r=this.Qr.get(t)||null;return x.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),x.resolve()}removeMatchingKeys(e,t,r){this.Kr.br(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Kr.vr(t);return x.resolve(r)}containsKey(e,t){return x.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Gs(0),this.zr=!1,this.zr=!0,this.jr=new Um,this.referenceDelegate=e(this),this.Hr=new Hm(this),this.indexManager=new Sm,this.remoteDocumentCache=function(i){return new Bm(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new Rm(t),this.Yr=new Mm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new jm(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new qm(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(e,t){return x.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class qm extends Ip{constructor(e){super(),this.currentSequenceNumber=e}}class oo{constructor(e){this.persistence=e,this.ti=new so,this.ni=null}static ri(e){return new oo(e)}get ii(){if(this.ni)return this.ni;throw z()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),x.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),x.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ii,r=>{const i=q.fromPath(r);return this.si(e,i).next(o=>{o||t.removeEntry(i,ee.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(r=>{r?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return x.or([()=>x.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ci{constructor(e,t){this.persistence=e,this.oi=new Ht(r=>bp(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Dm(this,t)}static ri(e,t){return new ci(e,t)}Zr(){}Xr(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}sr(e){let t=0;return this.rr(e,r=>{t++}).next(()=>t)}rr(e,t){return x.forEach(this.oi,(r,i)=>this.ar(e,r,i).next(o=>o?x.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(e,a=>this.ar(e,a,t).next(c=>{c||(r++,o.removeEntry(a,ee.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),x.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$r(e.data.value)),t}ar(e,t,r){return x.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.oi.get(t);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=i}static Yi(e,t){let r=we(),i=we();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ao(e,t.fromCache,r,i)}}/**
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
 */class zm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wm{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return jd()?8:Ap(Ie())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.rs(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ss(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new zm;return this._s(e,t,a).next(c=>{if(o.result=c,this.Xi)return this.us(e,t,a,c.size)})}).next(()=>o.result)}us(e,t,r,i){return r.documentReadCount<this.es?(Jt()<=W.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Dn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),x.resolve()):(Jt()<=W.DEBUG&&j("QueryEngine","Query:",Dn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Jt()<=W.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Dn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(t))):x.resolve())}rs(e,t){if(ll(t))return x.resolve(null);let r=Vt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Cs(t,null,"F"),r=Vt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=we(...o);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.cs(t,c);return this.ls(t,d,a,u.readTime)?this.rs(e,Cs(t,null,"F")):this.hs(e,d,t,u)}))})))}ss(e,t,r,i){return ll(t)||i.isEqual(ee.min())?x.resolve(null):this.ns.getDocuments(e,r).next(o=>{const a=this.cs(t,o);return this.ls(t,a,r,i)?x.resolve(null):(Jt()<=W.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dn(t)),this.hs(e,a,t,vp(i,zn)).next(c=>c))})}cs(e,t){let r=new me(Gp(e));return t.forEach((i,o)=>{no(e,o)&&(r=r.add(o))}),r}ls(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(e,t,r){return Jt()<=W.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Dn(t)),this.ns.getDocumentsMatchingQuery(e,t,wt.min(),r)}hs(e,t,r,i){return this.ns.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="LocalStore";class Gm{constructor(e,t,r,i){this.persistence=e,this.Ps=t,this.serializer=i,this.Ts=new Ce(Q),this.Is=new Ht(o=>eo(o),to),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lm(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Qm(n,e,t,r){return new Gm(n,e,t,r)}async function ou(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.As(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let u=we();for(const d of i){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Rs:d,removedBatchIds:a,addedBatchIds:c}))})})}function Xm(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(c,u,d,m){const y=d.batch,I=y.keys();let S=x.resolve();return I.forEach(b=>{S=S.next(()=>m.getEntry(u,b)).next(V=>{const k=d.docVersions.get(b);ie(k!==null),V.version.compareTo(k)<0&&(y.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=we();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Jm(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Ym(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class _l{constructor(){this.activeTargetIds=em()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zm{constructor(){this.ho=new _l,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new _l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eg{To(e){}shutdown(){}}/**
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
 */const yl="ConnectivityMonitor";class vl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){j(yl,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){j(yl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lr=null;function Ns(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RestConnection",tg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ng{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===ni?`project_id=${r}`:`project_id=${r}&database_id=${i}`}bo(e,t,r,i,o){const a=Ns(),c=this.So(e,t.toUriEncodedString());j(cs,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(u,i,o),this.vo(e,c,u,r).then(d=>(j(cs,`Received RPC '${e}' ${a}: `,d),d),d=>{throw Ei(cs,`RPC '${e}' ${a} failed with error: `,d,"url: ",c,"request:",r),d})}Co(e,t,r,i,o,a){return this.bo(e,t,r,i,o)}Do(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}So(e,t){const r=tg[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class ig extends ng{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,i){const o=Ns();return new Promise((a,c)=>{const u=new Tc;u.setWithCredentials(!0),u.listenOnce(wc.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Br.NO_ERROR:const m=u.getResponseJson();j(Ee,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),a(m);break;case Br.TIMEOUT:j(Ee,`RPC '${e}' ${o} timed out`),c(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case Br.HTTP_ERROR:const y=u.getStatus();if(j(Ee,`RPC '${e}' ${o} failed with status:`,y,"response text:",u.getResponseText()),y>0){let I=u.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I==null?void 0:I.error;if(S&&S.status&&S.message){const b=function(k){const D=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(D)>=0?D:O.UNKNOWN}(S.status);c(new $(b,S.message))}else c(new $(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new $(O.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{j(Ee,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);j(Ee,`RPC '${e}' ${o} sending request:`,i),u.send(t,"POST",d,r,15)})}Wo(e,t,r){const i=Ns(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Rc(),c=Ac(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=o.join("");j(Ee,`Creating RPC '${e}' stream ${i}: ${m}`,u);const y=a.createWebChannel(m,u);let I=!1,S=!1;const b=new rg({Fo:k=>{S?j(Ee,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(I||(j(Ee,`Opening RPC '${e}' stream ${i} transport.`),y.open(),I=!0),j(Ee,`RPC '${e}' stream ${i} sending:`,k),y.send(k))},Mo:()=>y.close()}),V=(k,D,F)=>{k.listen(D,M=>{try{F(M)}catch(N){setTimeout(()=>{throw N},0)}})};return V(y,Ln.EventType.OPEN,()=>{S||(j(Ee,`RPC '${e}' stream ${i} transport opened.`),b.Qo())}),V(y,Ln.EventType.CLOSE,()=>{S||(S=!0,j(Ee,`RPC '${e}' stream ${i} transport closed`),b.Ko())}),V(y,Ln.EventType.ERROR,k=>{S||(S=!0,Ei(Ee,`RPC '${e}' stream ${i} transport errored:`,k),b.Ko(new $(O.UNAVAILABLE,"The operation could not be completed")))}),V(y,Ln.EventType.MESSAGE,k=>{var D;if(!S){const F=k.data[0];ie(!!F);const M=F,N=(M==null?void 0:M.error)||((D=M[0])===null||D===void 0?void 0:D.error);if(N){j(Ee,`RPC '${e}' stream ${i} received error:`,N);const B=N.status;let U=function(_){const v=se[_];if(v!==void 0)return dm(v)}(B),E=N.message;U===void 0&&(U=O.INTERNAL,E="Unknown error status: "+B+" with message "+N.message),S=!0,b.Ko(new $(U,E)),y.close()}else j(Ee,`RPC '${e}' stream ${i} received:`,F),b.Uo(F)}}),V(c,Ic.STAT_EVENT,k=>{k.stat===Is.PROXY?j(Ee,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Is.NOPROXY&&j(Ee,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.$o()},0),b}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){return new fm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="PersistentStream";class sg{constructor(e,t,r,i,o,a,c,u){this.Ti=e,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new au(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===t&&this.V_(r,i)},r=>{e(()=>{const i=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(e,t){const r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return j(El,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(j(El,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class og extends sg{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Tm(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.v_(r,t)}C_(){const e={};e.database=ym(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Em(this.serializer,r))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{}class lg extends ag{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.bo(e,ks(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(O.UNKNOWN,o.toString())})}Co(e,t,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,ks(t,r),i,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(O.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class cg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ut(t),this.N_=!1):j("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="RemoteStore";class ug{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(a=>{r.enqueueAndForget(async()=>{sr(this)&&(j(rr,"Restarting streams for network reachability change."),await async function(u){const d=Y(u);d.W_.add(4),await ir(d),d.j_.set("Unknown"),d.W_.delete(4),await Ri(d)}(this))})}),this.j_=new cg(r,i)}}async function Ri(n){if(sr(n))for(const e of n.G_)await e(!0)}async function ir(n){for(const e of n.G_)await e(!1)}function sr(n){return Y(n).W_.size===0}async function lu(n,e,t){if(!tr(e))throw e;n.W_.add(1),await ir(n),n.j_.set("Offline"),t||(t=()=>Jm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j(rr,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Ri(n)})}function cu(n,e){return e().catch(t=>lu(n,t,e))}async function bi(n){const e=Y(n),t=At(e);let r=e.K_.length>0?e.K_[e.K_.length-1].batchId:Qs;for(;hg(e);)try{const i=await Ym(e.localStore,r);if(i===null){e.K_.length===0&&t.P_();break}r=i.batchId,dg(e,i)}catch(i){await lu(e,i)}uu(e)&&hu(e)}function hg(n){return sr(n)&&n.K_.length<10}function dg(n,e){n.K_.push(e);const t=At(n);t.c_()&&t.b_&&t.S_(e.mutations)}function uu(n){return sr(n)&&!At(n).u_()&&n.K_.length>0}function hu(n){At(n).start()}async function fg(n){At(n).C_()}async function pg(n){const e=At(n);for(const t of n.K_)e.S_(t.mutations)}async function mg(n,e,t){const r=n.K_.shift(),i=io.from(r,e,t);await cu(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bi(n)}async function gg(n,e){e&&At(n).b_&&await async function(r,i){if(function(a){return hm(a)&&a!==O.ABORTED}(i.code)){const o=r.K_.shift();At(r).h_(),await cu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await bi(r)}}(n,e),uu(n)&&hu(n)}async function Tl(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),j(rr,"RemoteStore received new credentials");const r=sr(t);t.W_.add(3),await ir(t),r&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Ri(t)}async function _g(n,e){const t=Y(n);e?(t.W_.delete(2),await Ri(t)):e||(t.W_.add(2),await ir(t),t.j_.set("Unknown"))}function At(n){return n.Y_||(n.Y_=function(t,r,i){const o=Y(t);return o.M_(),new og(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:fg.bind(null,n),Lo:gg.bind(null,n),D_:pg.bind(null,n),v_:mg.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await bi(n)):(await n.Y_.stop(),n.K_.length>0&&(j(rr,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,c=new lo(e,t,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function du(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),tr(n))return new $(O.UNAVAILABLE,`${e}: ${n}`);throw n}class yg{constructor(){this.queries=wl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,r){const i=Y(t),o=i.queries;i.queries=wl(),o.forEach((a,c)=>{for(const u of c.ta)u.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function wl(){return new Ht(n=>qc(n),Hc)}function vg(n){n.ia.forEach(e=>{e.next()})}var Il,Al;(Al=Il||(Il={}))._a="default",Al.Cache="cache";const Eg="SyncEngine";class Tg{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Ht(c=>qc(c),Hc),this.qa=new Map,this.Qa=new Set,this.$a=new Ce(q.comparator),this.Ka=new Map,this.Ua=new so,this.Wa={},this.Ga=new Map,this.za=un.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function wg(n,e,t){const r=bg(n);try{const i=await function(a,c){const u=Y(a),d=ue.now(),m=c.reduce((S,b)=>S.add(b.key),we());let y,I;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let b=oi(),V=we();return u.ds.getEntries(S,m).next(k=>{b=k,b.forEach((D,F)=>{F.isValidDocument()||(V=V.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,b)).next(k=>{y=k;const D=[];for(const F of c){const M=am(F,y.get(F.key).overlayedDocument);M!=null&&D.push(new qt(F.key,M,Lc(M.value.mapValue),Ze.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,D,c)}).next(k=>{I=k;const D=k.applyToLocalDocumentSet(y,V);return u.documentOverlayCache.saveOverlays(S,k.batchId,D)})}).then(()=>({batchId:I.batchId,changes:Wc(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,u){let d=a.Wa[a.currentUser.toKey()];d||(d=new Ce(Q)),d=d.insert(c,u),a.Wa[a.currentUser.toKey()]=d}(r,i.batchId,t),await Si(r,i.changes),await bi(r.remoteStore)}catch(i){const o=du(i,"Failed to persist write");t.reject(o)}}function Rl(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ka.forEach((o,a)=>{const c=a.view.sa(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const u=Y(a);u.onlineState=c;let d=!1;u.queries.forEach((m,y)=>{for(const I of y.ta)I.sa(c)&&(d=!0)}),d&&vg(u)}(r.eventManager,e),i.length&&r.La.p_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ig(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await Xm(t.localStore,e);pu(t,r,null),fu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Si(t,i)}catch(i){await Ks(i)}}async function Ag(n,e,t){const r=Y(n);try{const i=await function(a,c){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next(y=>(ie(y!==null),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);pu(r,e,t),fu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Si(r,i)}catch(i){await Ks(i)}}function fu(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function pu(n,e,t){const r=Y(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Wa[r.currentUser.toKey()]=i}}async function Si(n,e,t){const r=Y(n),i=[],o=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,u)=>{a.push(r.Ha(u,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=void 0)===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=ao.Yi(u.targetId,d);o.push(y)}}))}),await Promise.all(a),r.La.p_(i),await async function(u,d){const m=Y(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>x.forEach(d,I=>x.forEach(I.Hi,S=>m.persistence.referenceDelegate.addReference(y,I.targetId,S)).next(()=>x.forEach(I.Ji,S=>m.persistence.referenceDelegate.removeReference(y,I.targetId,S)))))}catch(y){if(!tr(y))throw y;j(Km,"Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const S=m.Ts.get(I),b=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(b);m.Ts=m.Ts.insert(I,V)}}}(r.localStore,o))}async function Rg(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){j(Eg,"User change. New user:",e.toKey());const r=await ou(t.localStore,e);t.currentUser=e,function(o,a){o.Ga.forEach(c=>{c.forEach(u=>{u.reject(new $(O.CANCELLED,a))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Si(t,r.Rs)}}function bg(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ig.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ag.bind(null,e),e}class ui{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ai(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Qm(this.persistence,new Wm,e.initialUser,this.serializer)}Xa(e){return new su(oo.ri,this.serializer)}Za(e){return new Zm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ui.provider={build:()=>new ui};class Sg extends ui{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ie(this.persistence.referenceDelegate instanceof ci);const r=this.persistence.referenceDelegate.garbageCollector;return new xm(r,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?be.withCacheSize(this.cacheSizeBytes):be.DEFAULT;return new su(r=>ci.ri(r,t),this.serializer)}}class Ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rg.bind(null,this.syncEngine),await _g(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yg}()}createDatastore(e){const t=Ai(e.databaseInfo.databaseId),r=function(o){return new ig(o)}(e.databaseInfo);return function(o,a,c,u){return new lg(o,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,c){return new ug(r,i,o,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rl(this.syncEngine,t,0),function(){return vl.D()?new vl:new eg}())}createSyncEngine(e,t){return function(i,o,a,c,u,d,m){const y=new Tg(i,o,a,c,u,d);return m&&(y.ja=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=Y(i);j(rr,"RemoteStore shutting down."),o.W_.add(5),await ir(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ds.provider={build:()=>new Ds};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="FirestoreClient";class Cg{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=Sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{j(Rt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(j(Rt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=du(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hs(n,e){n.asyncQueue.verifyOperationInProgress(),j(Rt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ou(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Pg(n);j(Rt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Tl(e.remoteStore,i)),n._onlineComponents=e}async function Pg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Rt,"Using user provided OfflineComponentProvider");try{await hs(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ei("Error using user provided cache. Falling back to memory cache: "+t),await hs(n,new ui)}}else j(Rt,"Using default OfflineComponentProvider"),await hs(n,new Sg(void 0));return n._offlineComponents}async function kg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Rt,"Using user provided OnlineComponentProvider"),await bl(n,n._uninitializedComponentsProvider._online)):(j(Rt,"Using default OnlineComponentProvider"),await bl(n,new Ds))),n._onlineComponents}function xg(n){return kg(n).then(e=>e.syncEngine)}/**
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
 */function mu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n,e,t){if(!t)throw new $(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ng(n,e,t,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Cl(n){if(!q.isDocumentKey(n))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Pl(n){if(q.isDocumentKey(n))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z()}function _u(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=co(n);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="firestore.googleapis.com",kl=!0;class xl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yu,this.ssl=kl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:kl;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iu;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Pm)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ng("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ci{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hp;switch(r.type){case"firstParty":return new mp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Sl.get(t);r&&(j("ComponentProvider","Removing Datastore"),Sl.delete(t),r.terminate())}(this),Promise.resolve()}}function Dg(n,e,t,r={}){var i;const o=(n=_u(n,Ci))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;o.host!==yu&&o.host!==c&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!Mt(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Te.MOCK_USER;else{d=Dd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Te(y)}n._authCredentials=new dp(new bc(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uo(this.firestore,e,this._query)}}class et{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new et(this.firestore,e,this._key)}}class Et extends uo{constructor(e,t,r){super(e,t,zp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new et(this.firestore,null,new q(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function Og(n,e,...t){if(n=xe(n),gu("collection","path",e),n instanceof Ci){const r=re.fromString(e,...t);return Pl(r),new Et(n,null,r)}{if(!(n instanceof et||n instanceof Et))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return Pl(r),new Et(n.firestore,null,r)}}function Vg(n,e,...t){if(n=xe(n),arguments.length===1&&(e=Sc.newId()),gu("doc","path",e),n instanceof Ci){const r=re.fromString(e,...t);return Cl(r),new et(n,null,new q(r))}{if(!(n instanceof et||n instanceof Et))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return Cl(r),new et(n.firestore,n instanceof Et?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="AsyncQueue";class Dl{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new au(this,"async_queue_retry"),this.bu=()=>{const r=us();r&&j(Nl,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.Su=e;const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=us();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ot;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!tr(e))throw e;j(Nl,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const i=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw Ut("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.Su=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const i=lo.createAndSchedule(this,e,t,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&z()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class vu extends Ci{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Dl,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dl(e),this._firestoreClient=void 0,await e}}}function Lg(n,e){const t=typeof n=="object"?n:qs(),r=typeof n=="string"?n:ni,i=er(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Nd("firestore");o&&Dg(i,...o)}return i}function Mg(n){if(n._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Fg(n),n._firestoreClient}function Fg(n){var e,t,r;const i=n._freezeSettings(),o=function(c,u,d,m){return new kp(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,mu(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Cg(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Be.fromBase64String(e))}catch(t){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qn(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
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
 */class Iu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/^__.*__$/;class jg{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new nr(e,this.data,t,this.fieldTransforms)}}function Au(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ho{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ho(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.$u(e),i}Ku(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return hi(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Au(this.Lu)&&Ug.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Bg{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ai(e)}ju(e,t,r,i=!1){return new ho({Lu:e,methodName:t,zu:r,path:pe.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $g(n){const e=n._freezeSettings(),t=Ai(n._databaseId);return new Bg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hg(n,e,t,r,i,o={}){const a=n.ju(o.merge||o.mergeFields?2:0,e,t,i);Cu("Data must be an object, but it was:",a,r);const c=bu(r,a);let u,d;if(o.merge)u=new Ve(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const y of o.mergeFields){const I=qg(e,y,t);if(!a.contains(I))throw new $(O.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Kg(m,I)||m.push(I)}u=new Ve(m),d=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=a.fieldTransforms;return new jg(new Oe(c),u,d)}function Ru(n,e){if(Su(n=xe(n)))return Cu("Unsupported field value:",e,n),bu(n,e);if(n instanceof Tu)return function(r,i){if(!Au(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const c of r){let u=Ru(c,i.Uu(a));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ue.fromDate(r);return{timestampValue:Ps(i.serializer,o)}}if(r instanceof ue){const o=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ps(i.serializer,o)}}if(r instanceof wu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:pm(i.serializer,r._byteString)};if(r instanceof et){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:nu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Iu)return function(a,c){return{mapValue:{fields:{[Oc]:{stringValue:Vc},[As]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Wu("VectorValues must only contain numeric values.");return ro(c.serializer,d)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${co(r)}`)}(n,e)}function bu(n,e){const t={};return Pc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,i)=>{const o=Ru(i,e.qu(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Su(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof wu||n instanceof Qn||n instanceof et||n instanceof Tu||n instanceof Iu)}function Cu(n,e,t){if(!Su(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=co(t);throw r==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+r)}}function qg(n,e,t){if((e=xe(e))instanceof Eu)return e._internalPath;if(typeof e=="string")return Wg(n,e);throw hi("Field path arguments must be of type string or ",n,!1,void 0,t)}const zg=new RegExp("[~\\*/\\[\\]]");function Wg(n,e,t){if(e.search(zg)>=0)throw hi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Eu(...e.split("."))._internalPath}catch{throw hi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function hi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(o||a)&&(u+=" (found",o&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new $(O.INVALID_ARGUMENT,c+n+u)}function Kg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}function Qg(n,e){const t=_u(n.firestore,vu),r=Vg(n),i=Gg(n.converter,e);return Xg(t,[Hg($g(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Ze.exists(!1))]).then(()=>r)}function Xg(n,e){return function(r,i){const o=new Ot;return r.asyncQueue.enqueueAndForget(async()=>wg(await xg(r),i,o)),o.promise}(Mg(n),e)}(function(e,t=!0){(function(i){pn=i})(fn),Tt(new nt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new vu(new fp(r.getProvider("auth-internal")),new gp(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(d.options.projectId,m)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ye(Ga,Qa,e),Ye(Ga,Qa,"esm2017")})();function fo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Pu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jg=Pu,ku=new dn("auth","Firebase",Pu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new vi("@firebase/auth");function Yg(n,...e){di.logLevel<=W.WARN&&di.warn(`Auth (${fn}): ${n}`,...e)}function zr(n,...e){di.logLevel<=W.ERROR&&di.error(`Auth (${fn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,...e){throw po(n,...e)}function Ue(n,...e){return po(n,...e)}function xu(n,e,t){const r=Object.assign(Object.assign({},Jg()),{[e]:t});return new dn("auth","Firebase",r).create(e,{appName:n.name})}function Lt(n){return xu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function po(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ku.create(n,...e)}function H(n,e,...t){if(!n)throw po(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zr(e),new Error(e)}function st(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zg(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zg()||Md()||"connection"in navigator)?navigator.onLine:!0}function t_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t){this.shortDelay=e,this.longDelay=t,st(t>e,"Short delay should be less than long delay!"),this.isMobile=Od()||Fd()}get(){return e_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n,e){st(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new or(3e4,6e4);function go(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gn(n,e,t,r,i={}){return Du(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=Zn(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},o);return Ld()||(d.referrerPolicy="no-referrer"),Nu.fetch()(Ou(n,n.config.apiHost,t,c),d)})}async function Du(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},n_),e);try{const i=new s_(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Mr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Mr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Mr(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xu(n,m,d);it(n,m)}}catch(i){if(i instanceof ot)throw i;it(n,"network-request-failed",{message:String(i)})}}async function i_(n,e,t,r,i={}){const o=await gn(n,e,t,r,i);return"mfaPendingCredential"in o&&it(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Ou(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?mo(n.config,i):`${n.config.apiScheme}://${i}`}class s_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),r_.get())})}}function Mr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Ue(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e){return gn(n,"POST","/v1/accounts:delete",e)}async function Vu(n,e){return gn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a_(n,e=!1){const t=xe(n),r=await t.getIdToken(e),i=_o(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bn(ds(i.auth_time)),issuedAtTime:Bn(ds(i.iat)),expirationTime:Bn(ds(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ds(n){return Number(n)*1e3}function _o(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=hc(t);return i?JSON.parse(i):(zr("Failed to decode base64 JWT payload"),null)}catch(i){return zr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vl(n){const e=_o(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ot&&l_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function l_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Xn(n,Vu(t,{idToken:r}));H(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Lu(o.providerUserInfo):[],c=h_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Vs(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function u_(n){const e=xe(n);await fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lu(n){return n.map(e=>{var{providerId:t}=e,r=fo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(n,e){const t=await Du(n,{},async()=>{const r=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Ou(n,i,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Nu.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function f_(n,e){return gn(n,"POST","/v2/accounts:revokeToken",go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Vl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await d_(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new nn;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(H(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=fo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Xn(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return a_(this,e)}reload(){return u_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Xn(this,o_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,c,u,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(i=t.email)!==null&&i!==void 0?i:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,F=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:M,emailVerified:N,isAnonymous:B,providerData:U,stsTokenManager:E}=t;H(M&&E,e,"internal-error");const p=nn.fromJSON(this.name,E);H(typeof M=="string",e,"internal-error"),ft(y,e.name),ft(I,e.name),H(typeof N=="boolean",e,"internal-error"),H(typeof B=="boolean",e,"internal-error"),ft(S,e.name),ft(b,e.name),ft(V,e.name),ft(k,e.name),ft(D,e.name),ft(F,e.name);const _=new Xe({uid:M,auth:e,email:I,emailVerified:N,displayName:y,isAnonymous:B,photoURL:b,phoneNumber:S,tenantId:V,stsTokenManager:p,createdAt:D,lastLoginAt:F});return U&&Array.isArray(U)&&(_.providerData=U.map(v=>Object.assign({},v))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new nn;i.updateFromServerResponse(t);const o=new Xe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Lu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new nn;c.updateFromIdToken(r);const u=new Xe({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=new Map;function Je(n){st(n instanceof Function,"Expected a class definition");let e=Ll.get(n);return e?(st(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ll.set(n,e),e)}/**
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
 */class Mu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mu.type="NONE";const Ml=Mu;/**
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
 */function Wr(n,e,t){return`firebase:${n}:${e}:${t}`}class rn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Wr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Wr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new rn(Je(Ml),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Je(Ml);const a=Wr(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){const y=Xe._fromJSON(e,m);d!==o&&(c=y),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new rn(o,e,r):(o=u[0],c&&await o._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new rn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hu(e))return"Blackberry";if(qu(e))return"Webos";if(Uu(e))return"Safari";if((e.includes("chrome/")||ju(e))&&!e.includes("edge/"))return"Chrome";if($u(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fu(n=Ie()){return/firefox\//i.test(n)}function Uu(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ju(n=Ie()){return/crios\//i.test(n)}function Bu(n=Ie()){return/iemobile/i.test(n)}function $u(n=Ie()){return/android/i.test(n)}function Hu(n=Ie()){return/blackberry/i.test(n)}function qu(n=Ie()){return/webos/i.test(n)}function yo(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function p_(n=Ie()){var e;return yo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m_(){return Ud()&&document.documentMode===10}function zu(n=Ie()){return yo(n)||$u(n)||qu(n)||Hu(n)||/windows phone/i.test(n)||Bu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n,e=[]){let t;switch(n){case"Browser":t=Fl(Ie());break;case"Worker":t=`${Fl(Ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fn}/${r}`}/**
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
 */class g_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,c)=>{try{const u=e(o);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function __(n,e={}){return gn(n,"GET","/v2/passwordPolicy",go(n,e))}/**
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
 */const y_=6;class v_{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:y_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ul(this),this.idTokenSubscription=new Ul(this),this.beforeStateQueue=new g_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ku,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vu(this,{idToken:e}),r=await Xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Fe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await fi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(Lt(this));const t=e?xe(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await __(this),t=new v_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await f_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Yg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vo(n){return xe(n)}class Ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wd(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function T_(n){Eo=n}function w_(n){return Eo.loadJS(n)}function I_(){return Eo.gapiScript}function A_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n,e){const t=er(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Mt(o,e??{}))return i;it(i,"already-initialized")}return t.initialize({options:e})}function b_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Je);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function S_(n,e,t){const r=vo(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Ku(e),{host:a,port:c}=C_(e),u=c===null?"":`:${c}`,d={url:`${o}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(Mt(d,r.config.emulator)&&Mt(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,P_()}function Ku(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function C_(n){const e=Ku(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:jl(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:jl(a)}}}function jl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function P_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(n,e){return i_(n,"POST","/v1/accounts:signInWithIdp",go(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="http://localhost";class $t extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):it("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=fo(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return sn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,sn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,sn(e,t)}buildRequest(){const e={requestUri:k_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ar extends Qu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends ar{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ar{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return mt.credential(t,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends ar{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ar{constructor(){super("twitter.com")}static credential(e,t){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return _t.credential(t,r)}catch{return null}}}_t.TWITTER_SIGN_IN_METHOD="twitter.com";_t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Xe._fromIdTokenResponse(e,r,i),a=Bl(r);return new hn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Bl(r);return new hn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Bl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends ot{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new pi(e,t,r,i)}}function Xu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?pi._fromErrorAndOperation(n,o,e,r):o})}async function x_(n,e,t=!1){const r=await Xn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hn._forOperation(n,"link",r)}/**
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
 */async function N_(n,e,t=!1){const{auth:r}=n;if(Fe(r.app))return Promise.reject(Lt(r));const i="reauthenticate";try{const o=await Xn(n,Xu(r,i,e,n),t);H(o.idToken,r,"internal-error");const a=_o(o.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(n.uid===c,r,"user-mismatch"),hn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&it(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e,t=!1){if(Fe(n.app))return Promise.reject(Lt(n));const r="signIn",i=await Xu(n,r,e),o=await hn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function O_(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function V_(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}const mi="__sak";/**
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
 */class Ju{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=1e3,M_=10;class Yu extends Ju{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);m_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,M_):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},L_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yu.type="LOCAL";const F_=Yu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends Ju{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zu.type="SESSION";const eh=Zu;/**
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
 */function U_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(t.origin,o)),u=await U_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class j_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,u)=>{const d=To("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(I.data.response);break;default:clearTimeout(m),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function B_(n){je().location.href=n}/**
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
 */function th(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function $_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function q_(){return th()?self:null}/**
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
 */const nh="firebaseLocalStorageDb",z_=1,gi="firebaseLocalStorage",rh="fbase_key";class lr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(n,e){return n.transaction([gi],e?"readwrite":"readonly").objectStore(gi)}function W_(){const n=indexedDB.deleteDatabase(nh);return new lr(n).toPromise()}function Ls(){const n=indexedDB.open(nh,z_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(gi,{keyPath:rh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(gi)?e(r):(r.close(),await W_(),e(await Ls()))})})}async function $l(n,e,t){const r=ki(n,!0).put({[rh]:e,value:t});return new lr(r).toPromise()}async function K_(n,e){const t=ki(n,!1).get(e),r=await new lr(t).toPromise();return r===void 0?null:r.value}function Hl(n,e){const t=ki(n,!0).delete(e);return new lr(t).toPromise()}const G_=800,Q_=3;class ih{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ls(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Q_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(q_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $_(),!this.activeServiceWorker)return;this.sender=new j_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ls();return await $l(e,mi,"1"),await Hl(e,mi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$l(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>K_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=ki(i,!1).getAll();return new lr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ih.type="LOCAL";const X_=ih;new or(3e4,6e4);/**
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
 */function J_(n,e){return e?Je(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wo extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return sn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Y_(n){return D_(n.auth,new wo(n),n.bypassAuthState)}function Z_(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),N_(t,new wo(n),n.bypassAuthState)}async function ey(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),x_(t,new wo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y_;case"linkViaPopup":case"linkViaRedirect":return ey;case"reauthViaPopup":case"reauthViaRedirect":return Z_;default:it(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new or(2e3,1e4);class Zt extends sh{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=To();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ty.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="pendingRedirect",Kr=new Map;class ry extends sh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const r=await iy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iy(n,e){const t=ay(e),r=oy(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function sy(n,e){Kr.set(n._key(),e)}function oy(n){return Je(n._redirectPersistence)}function ay(n){return Wr(ny,n.config.apiKey,n.name)}async function ly(n,e,t=!1){if(Fe(n.app))return Promise.reject(Lt(n));const r=vo(n),i=J_(r,e),a=await new ry(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=10*60*1e3;class uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!oh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ue(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(ql(e))}saveEventToCache(e){this.cachedEventUids.add(ql(e)),this.lastProcessedEventTime=Date.now()}}function ql(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(n,e={}){return gn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,py=/^https?/;async function my(n){if(n.config.emulator)return;const{authorizedDomains:e}=await dy(n);for(const t of e)try{if(gy(t))return}catch{}it(n,"unauthorized-domain")}function gy(n){const e=Os(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!py.test(t))return!1;if(fy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _y=new or(3e4,6e4);function zl(){const n=je().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function yy(n){return new Promise((e,t)=>{var r,i,o;function a(){zl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zl(),t(Ue(n,"network-request-failed"))},timeout:_y.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=je().gapi)===null||o===void 0)&&o.load)a();else{const c=A_("iframefcb");return je()[c]=()=>{gapi.load?a():t(Ue(n,"network-request-failed"))},w_(`${I_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gr=null,e})}let Gr=null;function vy(n){return Gr=Gr||yy(n),Gr}/**
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
 */const Ey=new or(5e3,15e3),Ty="__/auth/iframe",wy="emulator/auth/iframe",Iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ay=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ry(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mo(e,wy):`https://${n.config.authDomain}/${Ty}`,r={apiKey:e.apiKey,appName:n.name,v:fn},i=Ay.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Zn(r).slice(1)}`}async function by(n){const e=await vy(n),t=je().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Ry(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Iy,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Ue(n,"network-request-failed"),c=je().setTimeout(()=>{o(a)},Ey.get());function u(){je().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{o(a)})}))}/**
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
 */const Sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cy=500,Py=600,ky="_blank",xy="http://localhost";class Wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ny(n,e,t,r=Cy,i=Py){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Sy),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ie().toLowerCase();t&&(c=ju(d)?ky:t),Fu(d)&&(e=e||xy,u.scrollbars="yes");const m=Object.entries(u).reduce((I,[S,b])=>`${I}${S}=${b},`,"");if(p_(d)&&c!=="_self")return Dy(e||"",c),new Wl(null);const y=window.open(e||"",c,m);H(y,n,"popup-blocked");try{y.focus()}catch{}return new Wl(y)}function Dy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Oy="__/auth/handler",Vy="emulator/auth/handler",Ly=encodeURIComponent("fac");async function Kl(n,e,t,r,i,o){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:fn,eventId:i};if(e instanceof Qu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))a[m]=y}if(e instanceof ar){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Ly}=${encodeURIComponent(u)}`:"";return`${My(n)}?${Zn(c).slice(1)}${d}`}function My({config:n}){return n.emulator?mo(n,Vy):`https://${n.authDomain}/${Oy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class Fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eh,this._completeRedirectFn=ly,this._overrideRedirectResult=sy}async _openPopup(e,t,r,i){var o;st((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await Kl(e,t,r,Os(),i);return Ny(e,a,To())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Kl(e,t,r,Os(),i);return B_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(st(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await by(e),r=new uy(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fs,{type:fs},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fs];a!==void 0&&t(!!a),it(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=my(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zu()||Uu()||yo()}}const Uy=Fy;var Gl="@firebase/auth",Ql="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $y(n){Tt(new nt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wu(n)},d=new E_(r,i,o,u);return b_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Tt(new nt("auth-internal",e=>{const t=vo(e.getProvider("auth").getImmediate());return(r=>new jy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(Gl,Ql,By(n)),Ye(Gl,Ql,"esm2017")}/**
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
 */const Hy=5*60,qy=mc("authIdTokenMaxAge")||Hy;let Xl=null;const zy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>qy)return;const i=t==null?void 0:t.token;Xl!==i&&(Xl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wy(n=qs()){const e=er(n,"auth");if(e.isInitialized())return e.getImmediate();const t=R_(n,{popupRedirectResolver:Uy,persistence:[X_,F_,eh]}),r=mc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=zy(o.toString());V_(t,a,()=>a(t.currentUser)),O_(t,c=>a(c))}}const i=fc("auth");return i&&S_(t,`http://${i}`),t}function Ky(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}T_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Ue("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Ky().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$y("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new Map,ah={activated:!1,tokenObservers:[]},Gy={initialized:!1,enabled:!1};function ae(n){return Ms.get(n)||Object.assign({},ah)}function Qy(n,e){return Ms.set(n,e),Ms.get(n)}function xi(){return Gy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="https://content-firebaseappcheck.googleapis.com/v1",Xy="exchangeRecaptchaV3Token",Jy="exchangeDebugToken",Jl={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Yy=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,t,r,i,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=i,i>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Hn,this.pending.promise.catch(t=>{}),await ev(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Hn,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function ev(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Se=new dn("appCheck","AppCheck",tv);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Io(n){if(!ae(n).activated)throw Se.create("use-before-activation",{appName:n.name})}function ch(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),o=e-t*3600*24-r*3600-i*60;let a="";return t&&(a+=Fr(t)+"d:"),r&&(a+=Fr(r)+"h:"),a+=Fr(i)+"m:"+Fr(o)+"s",a}function Fr(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const y=await i.getHeartbeatsHeader();y&&(r["X-Firebase-Client"]=y)}const o={method:"POST",body:JSON.stringify(e),headers:r};let a;try{a=await fetch(n,o)}catch(y){throw Se.create("fetch-network-error",{originalErrorMessage:y==null?void 0:y.message})}if(a.status!==200)throw Se.create("fetch-status-error",{httpStatus:a.status});let c;try{c=await a.json()}catch(y){throw Se.create("fetch-parse-error",{originalErrorMessage:y==null?void 0:y.message})}const u=c.ttl.match(/^([\d.]+)(s)$/);if(!u||!u[2]||isNaN(Number(u[1])))throw Se.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${c.ttl}`});const d=Number(u[1])*1e3,m=Date.now();return{token:c.token,expireTimeMillis:m+d,issuedAtTimeMillis:m}}function nv(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${lh}/projects/${t}/apps/${r}:${Xy}?key=${i}`,body:{recaptcha_v3_token:e}}}function uh(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${lh}/projects/${t}/apps/${r}:${Jy}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebase-app-check-database",iv=1,Jn="firebase-app-check-store",hh="debug-token";let Ur=null;function dh(){return Ur||(Ur=new Promise((n,e)=>{try{const t=indexedDB.open(rv,iv);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Se.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Jn,{keyPath:"compositeKey"})}}}catch(t){e(Se.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ur)}function sv(n){return ph(mh(n))}function ov(n,e){return fh(mh(n),e)}function av(n){return fh(hh,n)}function lv(){return ph(hh)}async function fh(n,e){const r=(await dh()).transaction(Jn,"readwrite"),o=r.objectStore(Jn).put({compositeKey:n,value:e});return new Promise((a,c)=>{o.onsuccess=u=>{a()},r.onerror=u=>{var d;c(Se.create("storage-set",{originalErrorMessage:(d=u.target.error)===null||d===void 0?void 0:d.message}))}})}async function ph(n){const t=(await dh()).transaction(Jn,"readonly"),i=t.objectStore(Jn).get(n);return new Promise((o,a)=>{i.onsuccess=c=>{const u=c.target.result;o(u?u.value:void 0)},t.onerror=c=>{var u;a(Se.create("storage-get",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function mh(n){return`${n.options.appId}-${n.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new vi("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(n){if($s()){let e;try{e=await sv(n)}catch(t){Dt.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function ps(n,e){return $s()?ov(n,e).catch(t=>{Dt.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function uv(){let n;try{n=await lv()}catch{}if(n)return n;{const e=crypto.randomUUID();return av(e).catch(t=>Dt.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return xi().enabled}async function bo(){const n=xi();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function hv(){const n=dc(),e=xi();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Hn;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(uv())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={error:"UNKNOWN_ERROR"};function fv(n){return Bs.encodeString(JSON.stringify(n),!1)}async function Fs(n,e=!1){const t=n.app;Io(t);const r=ae(t);let i=r.token,o;if(i&&!en(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(en(u)?i=u:await ps(t,void 0))}if(!e&&i&&en(i))return{token:i.token};let a=!1;if(Ro())try{r.exchangeTokenPromise||(r.exchangeTokenPromise=Ao(uh(t,await bo()),n.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),a=!0);const u=await r.exchangeTokenPromise;return await ps(t,u),r.token=u,{token:u.token}}catch(u){return u.code==="appCheck/throttled"?Dt.warn(u.message):Dt.error(u),ms(u)}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await ae(t).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"?Dt.warn(u.message):Dt.error(u),o=u}let c;return i?o?en(i)?c={token:i.token,internalError:o}:c=ms(o):(c={token:i.token},r.token=i,await ps(t,i)):c=ms(o),a&&yh(t,c),c}async function pv(n){const e=n.app;Io(e);const{provider:t}=ae(e);if(Ro()){const r=await bo(),{token:i}=await Ao(uh(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function gh(n,e,t,r){const{app:i}=n,o=ae(i),a={next:t,error:r,type:e};if(o.tokenObservers=[...o.tokenObservers,a],o.token&&en(o.token)){const c=o.token;Promise.resolve().then(()=>{t({token:c.token}),Zl(n)}).catch(()=>{})}o.cachedTokenPromise.then(()=>Zl(n))}function _h(n,e){const t=ae(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function Zl(n){const{app:e}=n,t=ae(e);let r=t.tokenRefresher;r||(r=mv(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function mv(n){const{app:e}=n;return new Zy(async()=>{const t=ae(e);let r;if(t.token?r=await Fs(n,!0):r=await Fs(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=ae(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},Jl.RETRIAL_MIN_WAIT,Jl.RETRIAL_MAX_WAIT)}function yh(n,e){const t=ae(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function en(n){return n.expireTimeMillis-Date.now()>0}function ms(n){return{token:fv(dv),error:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=ae(this.app);for(const t of e)_h(this.app,t.next);return Promise.resolve()}}function _v(n,e){return new gv(n,e)}function yv(n){return{getToken:e=>Fs(n,e),getLimitedUseToken:()=>pv(n),addTokenListener:e=>gh(n,"INTERNAL",e),removeTokenListener:e=>_h(n.app,e)}}const vv="@firebase/app-check",Ev="0.8.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="https://www.google.com/recaptcha/api.js";function wv(n,e){const t=new Hn,r=ae(n);r.reCAPTCHAState={initialized:t};const i=Iv(n),o=Yl(!1);return o?ec(n,e,o,i,t):bv(()=>{const a=Yl(!1);if(!a)throw new Error("no recaptcha");ec(n,e,a,i,t)}),t.promise}function ec(n,e,t,r,i){t.ready(()=>{Rv(n,e,t,r),i.resolve(t)})}function Iv(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function Av(n){Io(n);const t=await ae(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const o=ae(n).reCAPTCHAState;t.ready(()=>{r(t.execute(o.widgetId,{action:"fire_app_check"}))})})}function Rv(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{ae(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ae(n).reCAPTCHAState.succeeded=!1}}),o=ae(n);o.reCAPTCHAState=Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}function bv(n){const e=document.createElement("script");e.src=Tv,e.onload=n,document.head.appendChild(e)}/**
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
 */class So{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,r;Cv(this._throttleData);const i=await Av(this._app).catch(a=>{throw Se.create("recaptcha-error")});if(!(!((e=ae(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Se.create("recaptcha-error");let o;try{o=await Ao(nv(this._app,i),this._heartbeatServiceProvider)}catch(a){throw!((t=a.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=Sv(Number((r=a.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Se.create("throttled",{time:ch(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,o}initialize(e){this._app=e,this._heartbeatServiceProvider=er(e,"heartbeat"),wv(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof So?this._siteKey===e._siteKey:!1}}function Sv(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Yy,httpStatus:n};{const t=e?e.backoffCount:0,r=Zd(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function Cv(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Se.create("throttled",{time:ch(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n=qs(),e){n=xe(n);const t=er(n,"app-check");if(xi().initialized||hv(),Ro()&&bo().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(o.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&o.provider.isEqual(e.provider))return i;throw Se.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return kv(n,e.provider,e.isTokenAutoRefreshEnabled),ae(n).isTokenAutoRefreshEnabled&&gh(r,"INTERNAL",()=>{}),r}function kv(n,e,t){const r=Qy(n,Object.assign({},ah));r.activated=!0,r.provider=e,r.cachedTokenPromise=cv(n).then(i=>(i&&en(i)&&(r.token=i,yh(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t===void 0?n.automaticDataCollectionEnabled:t,r.provider.initialize(n)}const xv="app-check",tc="app-check-internal";function Nv(){Tt(new nt(xv,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return _v(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(tc).initialize()})),Tt(new nt(tc,n=>{const e=n.getProvider("app-check").getImmediate();return yv(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Ye(vv,Ev)}Nv();const Dv={apiKey:"AIzaSyD73NUn3dESrSkAFBQfywqJmAjyDKDGzeE",authDomain:"votometro-5dec8.firebaseapp.com",projectId:"votometro-5dec8",storageBucket:"votometro-5dec8.appspot.com",messagingSenderId:"410453365556",appId:"1:410453365556:web:670182c618218ca1220b61"},Co=yc(Dv);Pv(Co,{provider:new So("6LegC-4qAAAAAD_uSa8RMbWNYBh2wDbQ8HCPELAi"),isTokenAutoRefreshEnabled:!0});const Ov=Lg(Co);Wy(Co);var On={},nc;function Vv(){if(nc)return On;nc=1,Object.defineProperty(On,"__esModule",{value:!0}),On.parse=a,On.serialize=d;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,o=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function a(I,S){const b=new o,V=I.length;if(V<2)return b;const k=(S==null?void 0:S.decode)||m;let D=0;do{const F=I.indexOf("=",D);if(F===-1)break;const M=I.indexOf(";",D),N=M===-1?V:M;if(F>N){D=I.lastIndexOf(";",F-1)+1;continue}const B=c(I,D,F),U=u(I,F,B),E=I.slice(B,U);if(b[E]===void 0){let p=c(I,F+1,N),_=u(I,N,p);const v=k(I.slice(p,_));b[E]=v}D=N+1}while(D<V);return b}function c(I,S,b){do{const V=I.charCodeAt(S);if(V!==32&&V!==9)return S}while(++S<b);return b}function u(I,S,b){for(;S>b;){const V=I.charCodeAt(--S);if(V!==32&&V!==9)return S+1}return b}function d(I,S,b){const V=(b==null?void 0:b.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const k=V(S);if(!e.test(k))throw new TypeError(`argument val is invalid: ${S}`);let D=I+"="+k;if(!b)return D;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);D+="; Max-Age="+b.maxAge}if(b.domain){if(!t.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);D+="; Domain="+b.domain}if(b.path){if(!r.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);D+="; Path="+b.path}if(b.expires){if(!y(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);D+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(D+="; HttpOnly"),b.secure&&(D+="; Secure"),b.partitioned&&(D+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":D+="; Priority=Low";break;case"medium":D+="; Priority=Medium";break;case"high":D+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":D+="; SameSite=Strict";break;case"lax":D+="; SameSite=Lax";break;case"none":D+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return D}function m(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function y(I){return i.call(I)==="[object Date]"}return On}Vv();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rc="popstate";function Lv(n={}){function e(i,o){let{pathname:a="/",search:c="",hash:u=""}=zt(i.location.hash.substring(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Us("",{pathname:a,search:c,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){let a=i.document.querySelector("base"),c="";if(a&&a.getAttribute("href")){let u=i.location.href,d=u.indexOf("#");c=d===-1?u:u.slice(0,d)}return c+"#"+(typeof o=="string"?o:Yn(o))}function r(i,o){Le(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return Fv(e,t,r,n)}function te(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Le(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mv(){return Math.random().toString(36).substring(2,10)}function ic(n,e){return{usr:n.state,key:n.key,idx:e}}function Us(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?zt(e):e,state:t,key:e&&e.key||r||Mv()}}function Yn({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function zt(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Fv(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,c="POP",u=null,d=m();d==null&&(d=0,a.replaceState({...a.state,idx:d},""));function m(){return(a.state||{idx:null}).idx}function y(){c="POP";let k=m(),D=k==null?null:k-d;d=k,u&&u({action:c,location:V.location,delta:D})}function I(k,D){c="PUSH";let F=Us(V.location,k,D);t&&t(F,k),d=m()+1;let M=ic(F,d),N=V.createHref(F);try{a.pushState(M,"",N)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(N)}o&&u&&u({action:c,location:V.location,delta:1})}function S(k,D){c="REPLACE";let F=Us(V.location,k,D);t&&t(F,k),d=m();let M=ic(F,d),N=V.createHref(F);a.replaceState(M,"",N),o&&u&&u({action:c,location:V.location,delta:0})}function b(k){let D=i.location.origin!=="null"?i.location.origin:i.location.href,F=typeof k=="string"?k:Yn(k);return F=F.replace(/ $/,"%20"),te(D,`No window.location.(origin|href) available to create URL for href: ${F}`),new URL(F,D)}let V={get action(){return c},get location(){return n(i,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(rc,y),u=k,()=>{i.removeEventListener(rc,y),u=null}},createHref(k){return e(i,k)},createURL:b,encodeLocation(k){let D=b(k);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:I,replace:S,go(k){return a.go(k)}};return V}function vh(n,e,t="/"){return Uv(n,e,t,!1)}function Uv(n,e,t,r){let i=typeof e=="string"?zt(e):e,o=bt(i.pathname||"/",t);if(o==null)return null;let a=Eh(n);jv(a);let c=null;for(let u=0;c==null&&u<a.length;++u){let d=Jv(o);c=Qv(a[u],d,r)}return c}function Eh(n,e=[],t=[],r=""){let i=(o,a,c)=>{let u={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(te(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let d=tt([r,u.relativePath]),m=t.concat(u);o.children&&o.children.length>0&&(te(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),Eh(o.children,e,m,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:Kv(d,o.index),routesMeta:m})};return n.forEach((o,a)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,a);else for(let u of Th(o.path))i(o,a,u)}),e}function Th(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),o=t.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=Th(r.join("/")),c=[];return c.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&c.push(...a),c.map(u=>n.startsWith("/")&&u===""?"/":u)}function jv(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Gv(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var Bv=/^:[\w-]+$/,$v=3,Hv=2,qv=1,zv=10,Wv=-2,sc=n=>n==="*";function Kv(n,e){let t=n.split("/"),r=t.length;return t.some(sc)&&(r+=Wv),e&&(r+=Hv),t.filter(i=>!sc(i)).reduce((i,o)=>i+(Bv.test(o)?$v:o===""?qv:zv),r)}function Gv(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function Qv(n,e,t=!1){let{routesMeta:r}=n,i={},o="/",a=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,m=o==="/"?e:e.slice(o.length)||"/",y=_i({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},m),I=u.route;if(!y&&d&&t&&!r[r.length-1].route.index&&(y=_i({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},m)),!y)return null;Object.assign(i,y.params),a.push({params:i,pathname:tt([o,y.pathname]),pathnameBase:tE(tt([o,y.pathnameBase])),route:I}),y.pathnameBase!=="/"&&(o=tt([o,y.pathnameBase]))}return a}function _i(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Xv(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((d,{paramName:m,isOptional:y},I)=>{if(m==="*"){let b=c[I]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const S=c[I];return y&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:a,pattern:n}}function Xv(n,e=!1,t=!0){Le(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Jv(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Le(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function bt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Yv(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?zt(n):n;return{pathname:t?t.startsWith("/")?t:Zv(t,e):e,search:nE(r),hash:rE(i)}}function Zv(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function gs(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wh(n){let e=eE(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Ih(n,e,t,r=!1){let i;typeof n=="string"?i=zt(n):(i={...n},te(!i.pathname||!i.pathname.includes("?"),gs("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),gs("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),gs("#","search","hash",i)));let o=n===""||i.pathname==="",a=o?"/":i.pathname,c;if(a==null)c=t;else{let y=e.length-1;if(!r&&a.startsWith("..")){let I=a.split("/");for(;I[0]==="..";)I.shift(),y-=1;i.pathname=I.join("/")}c=y>=0?e[y]:"/"}let u=Yv(i,c),d=a&&a!=="/"&&a.endsWith("/"),m=(o||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}var tt=n=>n.join("/").replace(/\/\/+/g,"/"),tE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,rE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function iE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ah=["POST","PUT","PATCH","DELETE"];new Set(Ah);var sE=["GET",...Ah];new Set(sE);var _n=P.createContext(null);_n.displayName="DataRouter";var Ni=P.createContext(null);Ni.displayName="DataRouterState";var Rh=P.createContext({isTransitioning:!1});Rh.displayName="ViewTransition";var oE=P.createContext(new Map);oE.displayName="Fetchers";var aE=P.createContext(null);aE.displayName="Await";var He=P.createContext(null);He.displayName="Navigation";var cr=P.createContext(null);cr.displayName="Location";var at=P.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var Po=P.createContext(null);Po.displayName="RouteError";function lE(n,{relative:e}={}){te(ur(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=P.useContext(He),{hash:i,pathname:o,search:a}=hr(n,{relative:e}),c=o;return t!=="/"&&(c=o==="/"?t:tt([t,o])),r.createHref({pathname:c,search:a,hash:i})}function ur(){return P.useContext(cr)!=null}function Wt(){return te(ur(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(cr).location}var bh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sh(n){P.useContext(He).static||P.useLayoutEffect(n)}function cE(){let{isDataRoute:n}=P.useContext(at);return n?wE():uE()}function uE(){te(ur(),"useNavigate() may be used only in the context of a <Router> component.");let n=P.useContext(_n),{basename:e,navigator:t}=P.useContext(He),{matches:r}=P.useContext(at),{pathname:i}=Wt(),o=JSON.stringify(wh(r)),a=P.useRef(!1);return Sh(()=>{a.current=!0}),P.useCallback((u,d={})=>{if(Le(a.current,bh),!a.current)return;if(typeof u=="number"){t.go(u);return}let m=Ih(u,JSON.parse(o),i,d.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:tt([e,m.pathname])),(d.replace?t.replace:t.push)(m,d.state,d)},[e,t,o,i,n])}P.createContext(null);function hr(n,{relative:e}={}){let{matches:t}=P.useContext(at),{pathname:r}=Wt(),i=JSON.stringify(wh(t));return P.useMemo(()=>Ih(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function hE(n,e){return Ch(n,e)}function Ch(n,e,t,r){var F;te(ur(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:o}=P.useContext(He),{matches:a}=P.useContext(at),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",m=c?c.pathnameBase:"/",y=c&&c.route;{let M=y&&y.path||"";Ph(d,!y||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let I=Wt(),S;if(e){let M=typeof e=="string"?zt(e):e;te(m==="/"||((F=M.pathname)==null?void 0:F.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${M.pathname}" was given in the \`location\` prop.`),S=M}else S=I;let b=S.pathname||"/",V=b;if(m!=="/"){let M=m.replace(/^\//,"").split("/");V="/"+b.replace(/^\//,"").split("/").slice(M.length).join("/")}let k=!o&&t&&t.matches&&t.matches.length>0?t.matches:vh(n,{pathname:V});Le(y||k!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Le(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=gE(k&&k.map(M=>Object.assign({},M,{params:Object.assign({},u,M.params),pathname:tt([m,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?m:tt([m,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),a,t,r);return e&&D?P.createElement(cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},D):D}function dE(){let n=TE(),e=iE(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:o},"ErrorBoundary")," or"," ",P.createElement("code",{style:o},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),t?P.createElement("pre",{style:i},t):null,a)}var fE=P.createElement(dE,null),pE=class extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?P.createElement(at.Provider,{value:this.props.routeContext},P.createElement(Po.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function mE({routeContext:n,match:e,children:t}){let r=P.useContext(_n);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(at.Provider,{value:n},t)}function gE(n,e=[],t=null,r=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let i=n,o=t==null?void 0:t.errors;if(o!=null){let u=i.findIndex(d=>d.route.id&&(o==null?void 0:o[d.route.id])!==void 0);te(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,u+1))}let a=!1,c=-1;if(t)for(let u=0;u<i.length;u++){let d=i[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:m,errors:y}=t,I=d.route.loader&&!m.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||I){a=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((u,d,m)=>{let y,I=!1,S=null,b=null;t&&(y=o&&d.route.id?o[d.route.id]:void 0,S=d.route.errorElement||fE,a&&(c<0&&m===0?(Ph("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,b=null):c===m&&(I=!0,b=d.route.hydrateFallbackElement||null)));let V=e.concat(i.slice(0,m+1)),k=()=>{let D;return y?D=S:I?D=b:d.route.Component?D=P.createElement(d.route.Component,null):d.route.element?D=d.route.element:D=u,P.createElement(mE,{match:d,routeContext:{outlet:u,matches:V,isDataRoute:t!=null},children:D})};return t&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?P.createElement(pE,{location:t.location,revalidation:t.revalidation,component:S,error:y,children:k(),routeContext:{outlet:null,matches:V,isDataRoute:!0}}):k()},null)}function ko(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _E(n){let e=P.useContext(_n);return te(e,ko(n)),e}function yE(n){let e=P.useContext(Ni);return te(e,ko(n)),e}function vE(n){let e=P.useContext(at);return te(e,ko(n)),e}function xo(n){let e=vE(n),t=e.matches[e.matches.length-1];return te(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function EE(){return xo("useRouteId")}function TE(){var r;let n=P.useContext(Po),e=yE("useRouteError"),t=xo("useRouteError");return n!==void 0?n:(r=e.errors)==null?void 0:r[t]}function wE(){let{router:n}=_E("useNavigate"),e=xo("useNavigate"),t=P.useRef(!1);return Sh(()=>{t.current=!0}),P.useCallback(async(i,o={})=>{Le(t.current,bh),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...o}))},[n,e])}var oc={};function Ph(n,e,t){!e&&!oc[n]&&(oc[n]=!0,Le(!1,t))}P.memo(IE);function IE({routes:n,future:e,state:t}){return Ch(n,void 0,t,e)}function Qr(n){te(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function AE({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:o=!1}){te(!ur(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),c=P.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof t=="string"&&(t=zt(t));let{pathname:u="/",search:d="",hash:m="",state:y=null,key:I="default"}=t,S=P.useMemo(()=>{let b=bt(u,a);return b==null?null:{location:{pathname:b,search:d,hash:m,state:y,key:I},navigationType:r}},[a,u,d,m,y,I,r]);return Le(S!=null,`<Router basename="${a}"> is not able to match the URL "${u}${d}${m}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:P.createElement(He.Provider,{value:c},P.createElement(cr.Provider,{children:e,value:S}))}function RE({children:n,location:e}){return hE(js(n),e)}function js(n,e=[]){let t=[];return P.Children.forEach(n,(r,i)=>{if(!P.isValidElement(r))return;let o=[...e,i];if(r.type===P.Fragment){t.push.apply(t,js(r.props.children,o));return}te(r.type===Qr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),te(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=js(r.props.children,o)),t.push(a)}),t}var Xr="get",Jr="application/x-www-form-urlencoded";function Di(n){return n!=null&&typeof n.tagName=="string"}function bE(n){return Di(n)&&n.tagName.toLowerCase()==="button"}function SE(n){return Di(n)&&n.tagName.toLowerCase()==="form"}function CE(n){return Di(n)&&n.tagName.toLowerCase()==="input"}function PE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function kE(n,e){return n.button===0&&(!e||e==="_self")&&!PE(n)}var jr=null;function xE(){if(jr===null)try{new FormData(document.createElement("form"),0),jr=!1}catch{jr=!0}return jr}var NE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _s(n){return n!=null&&!NE.has(n)?(Le(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jr}"`),null):n}function DE(n,e){let t,r,i,o,a;if(SE(n)){let c=n.getAttribute("action");r=c?bt(c,e):null,t=n.getAttribute("method")||Xr,i=_s(n.getAttribute("enctype"))||Jr,o=new FormData(n)}else if(bE(n)||CE(n)&&(n.type==="submit"||n.type==="image")){let c=n.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||c.getAttribute("action");if(r=u?bt(u,e):null,t=n.getAttribute("formmethod")||c.getAttribute("method")||Xr,i=_s(n.getAttribute("formenctype"))||_s(c.getAttribute("enctype"))||Jr,o=new FormData(c,n),!xE()){let{name:d,type:m,value:y}=n;if(m==="image"){let I=d?`${d}.`:"";o.append(`${I}x`,"0"),o.append(`${I}y`,"0")}else d&&o.append(d,y)}}else{if(Di(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xr,r=null,i=Jr,a=n}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:o,body:a}}function No(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function OE(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VE(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function LE(n,e,t){let r=await Promise.all(n.map(async i=>{let o=e.routes[i.route.id];if(o){let a=await OE(o,t);return a.links?a.links():[]}return[]}));return jE(r.flat(1).filter(VE).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function ac(n,e,t,r,i,o){let a=(u,d)=>t[d]?u.route.id!==t[d].route.id:!0,c=(u,d)=>{var m;return t[d].pathname!==u.pathname||((m=t[d].route.path)==null?void 0:m.endsWith("*"))&&t[d].params["*"]!==u.params["*"]};return o==="assets"?e.filter((u,d)=>a(u,d)||c(u,d)):o==="data"?e.filter((u,d)=>{var y;let m=r.routes[u.route.id];if(!m||!m.hasLoader)return!1;if(a(u,d)||c(u,d))return!0;if(u.route.shouldRevalidate){let I=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((y=t[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function ME(n,e,{includeHydrateFallback:t}={}){return FE(n.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),t&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function FE(n){return[...new Set(n)]}function UE(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function jE(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let o=JSON.stringify(UE(i));return t.has(o)||(t.add(o),r.push({key:o,link:i})),r},[])}function BE(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function $E(){let n=P.useContext(_n);return No(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function HE(){let n=P.useContext(Ni);return No(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Do=P.createContext(void 0);Do.displayName="FrameworkContext";function kh(){let n=P.useContext(Do);return No(n,"You must render this element inside a <HydratedRouter> element"),n}function qE(n,e){let t=P.useContext(Do),[r,i]=P.useState(!1),[o,a]=P.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:d,onMouseLeave:m,onTouchStart:y}=e,I=P.useRef(null);P.useEffect(()=>{if(n==="render"&&a(!0),n==="viewport"){let V=D=>{D.forEach(F=>{a(F.isIntersecting)})},k=new IntersectionObserver(V,{threshold:.5});return I.current&&k.observe(I.current),()=>{k.disconnect()}}},[n]),P.useEffect(()=>{if(r){let V=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(V)}}},[r]);let S=()=>{i(!0)},b=()=>{i(!1),a(!1)};return t?n!=="intent"?[o,I,{}]:[o,I,{onFocus:Vn(c,S),onBlur:Vn(u,b),onMouseEnter:Vn(d,S),onMouseLeave:Vn(m,b),onTouchStart:Vn(y,S)}]:[!1,I,{}]}function Vn(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function zE({page:n,...e}){let{router:t}=$E(),r=P.useMemo(()=>vh(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?P.createElement(KE,{page:n,matches:r,...e}):null}function WE(n){let{manifest:e,routeModules:t}=kh(),[r,i]=P.useState([]);return P.useEffect(()=>{let o=!1;return LE(n,e,t).then(a=>{o||i(a)}),()=>{o=!0}},[n,e,t]),r}function KE({page:n,matches:e,...t}){let r=Wt(),{manifest:i,routeModules:o}=kh(),{loaderData:a,matches:c}=HE(),u=P.useMemo(()=>ac(n,e,c,i,r,"data"),[n,e,c,i,r]),d=P.useMemo(()=>ac(n,e,c,i,r,"assets"),[n,e,c,i,r]),m=P.useMemo(()=>{if(n===r.pathname+r.search+r.hash)return[];let S=new Set,b=!1;if(e.forEach(k=>{var F;let D=i.routes[k.route.id];!D||!D.hasLoader||(!u.some(M=>M.route.id===k.route.id)&&k.route.id in a&&((F=o[k.route.id])!=null&&F.shouldRevalidate)||D.hasClientLoader?b=!0:S.add(k.route.id))}),S.size===0)return[];let V=BE(n);return b&&S.size>0&&V.searchParams.set("_routes",e.filter(k=>S.has(k.route.id)).map(k=>k.route.id).join(",")),[V.pathname+V.search]},[a,r,i,u,e,n,o]),y=P.useMemo(()=>ME(d,i),[d,i]),I=WE(d);return P.createElement(P.Fragment,null,m.map(S=>P.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),y.map(S=>P.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),I.map(({key:S,link:b})=>P.createElement("link",{key:S,...b})))}function GE(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xh&&(window.__reactRouterVersion="7.2.0")}catch{}function QE({basename:n,children:e,window:t}){let r=P.useRef();r.current==null&&(r.current=Lv({window:t,v5Compat:!0}));let i=r.current,[o,a]=P.useState({action:i.action,location:i.location}),c=P.useCallback(u=>{P.startTransition(()=>a(u))},[a]);return P.useLayoutEffect(()=>i.listen(c),[i,c]),P.createElement(AE,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:i})}var Nh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$n=P.forwardRef(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:c,target:u,to:d,preventScrollReset:m,viewTransition:y,...I},S){let{basename:b}=P.useContext(He),V=typeof d=="string"&&Nh.test(d),k,D=!1;if(typeof d=="string"&&V&&(k=d,xh))try{let _=new URL(window.location.href),v=d.startsWith("//")?new URL(_.protocol+d):new URL(d),w=bt(v.pathname,b);v.origin===_.origin&&w!=null?d=w+v.search+v.hash:D=!0}catch{Le(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let F=lE(d,{relative:i}),[M,N,B]=qE(r,I),U=ZE(d,{replace:a,state:c,target:u,preventScrollReset:m,relative:i,viewTransition:y});function E(_){e&&e(_),_.defaultPrevented||U(_)}let p=P.createElement("a",{...I,...B,href:k||F,onClick:D||o?e:E,ref:GE(S,N),target:u,"data-discover":!V&&t==="render"?"true":void 0});return M&&!V?P.createElement(P.Fragment,null,p,P.createElement(zE,{page:F})):p});$n.displayName="Link";var XE=P.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:c,children:u,...d},m){let y=hr(a,{relative:d.relative}),I=Wt(),S=P.useContext(Ni),{navigator:b,basename:V}=P.useContext(He),k=S!=null&&iT(y)&&c===!0,D=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,F=I.pathname,M=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(F=F.toLowerCase(),M=M?M.toLowerCase():null,D=D.toLowerCase()),M&&V&&(M=bt(M,V)||M);const N=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let B=F===D||!i&&F.startsWith(D)&&F.charAt(N)==="/",U=M!=null&&(M===D||!i&&M.startsWith(D)&&M.charAt(D.length)==="/"),E={isActive:B,isPending:U,isTransitioning:k},p=B?e:void 0,_;typeof r=="function"?_=r(E):_=[r,B?"active":null,U?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let v=typeof o=="function"?o(E):o;return P.createElement($n,{...d,"aria-current":p,className:_,ref:m,style:v,to:a,viewTransition:c},typeof u=="function"?u(E):u)});XE.displayName="NavLink";var JE=P.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:o,method:a=Xr,action:c,onSubmit:u,relative:d,preventScrollReset:m,viewTransition:y,...I},S)=>{let b=nT(),V=rT(c,{relative:d}),k=a.toLowerCase()==="get"?"get":"post",D=typeof c=="string"&&Nh.test(c),F=M=>{if(u&&u(M),M.defaultPrevented)return;M.preventDefault();let N=M.nativeEvent.submitter,B=(N==null?void 0:N.getAttribute("formmethod"))||a;b(N||M.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:i,state:o,relative:d,preventScrollReset:m,viewTransition:y})};return P.createElement("form",{ref:S,method:k,action:V,onSubmit:r?u:F,...I,"data-discover":!D&&n==="render"?"true":void 0})});JE.displayName="Form";function YE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dh(n){let e=P.useContext(_n);return te(e,YE(n)),e}function ZE(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let c=cE(),u=Wt(),d=hr(n,{relative:o});return P.useCallback(m=>{if(kE(m,e)){m.preventDefault();let y=t!==void 0?t:Yn(u)===Yn(d);c(n,{replace:y,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[u,c,d,t,r,e,n,i,o,a])}var eT=0,tT=()=>`__${String(++eT)}__`;function nT(){let{router:n}=Dh("useSubmit"),{basename:e}=P.useContext(He),t=EE();return P.useCallback(async(r,i={})=>{let{action:o,method:a,encType:c,formData:u,body:d}=DE(r,e);if(i.navigate===!1){let m=i.fetcherKey||tT();await n.fetch(m,t,i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||c,flushSync:i.flushSync})}else await n.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||a,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function rT(n,{relative:e}={}){let{basename:t}=P.useContext(He),r=P.useContext(at);te(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...hr(n||".",{relative:e})},a=Wt();if(n==null){o.search=a.search;let c=new URLSearchParams(o.search),u=c.getAll("index");if(u.some(m=>m==="")){c.delete("index"),u.filter(y=>y).forEach(y=>c.append("index",y));let m=c.toString();o.search=m?`?${m}`:""}}return(!n||n===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:tt([t,o.pathname])),Yn(o)}function iT(n,e={}){let t=P.useContext(Rh);te(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Dh("useViewTransitionState"),i=hr(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=bt(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=bt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return _i(i.pathname,a)!=null||_i(i.pathname,o)!=null}new TextEncoder;function sT(){return T.jsx("div",{style:{justifyContent:"center",minHeight:"100vh",width:"100vw",margin:0,padding:"0",boxSizing:"border-box"},children:T.jsxs("div",{style:{width:"70%",margin:"0 auto",color:"#fff",padding:"40px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",fontFamily:"Arial, sans-serif",lineHeight:1.6},children:[T.jsx("header",{style:{textAlign:"left",marginBottom:"40px",borderBottom:"2px solid #f0f0f0",paddingBottom:"20px"},children:T.jsx("h1",{style:{marginBottom:"10px"},children:"Metodología"})}),T.jsxs("section",{style:{marginBottom:"40px"},children:[T.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Elecciones parlamentarias"}),T.jsxs("p",{style:{marginBottom:"20px"},children:["Para determinar la posición de los partidos en las elecciones parlamentarias, seguí estos pasos:",T.jsx("br",{}),"1. Busqué los documentos que contienen las votaciones para propuestas legislativas polarizantes (",T.jsx("a",{href:"https://leyes.congreso.gob.pe/",target:"_blank",rel:"noopener noreferrer",style:{color:"#00CED1"},children:"Perú"}),";"," ",T.jsx("a",{href:"https://www.camara.cl/legislacion/sala_sesiones/votaciones.aspx",target:"_blank",rel:"noopener noreferrer",style:{color:"#00CED1"},children:"Chile"}),")",T.jsx("br",{}),"2. Extraje los nombres de los parlamentarios presentes en esas votaciones, y le asigné a cada persona el partido político actual.",T.jsx("br",{}),"3. Extraje el voto de cada parlamentario (a favor, en contra, abstención, ausencia), y los combiné por partido político.",T.jsx("br",{}),"4. La aplicación compara los votos de cada parlamentario y con los votos del usuario, y determina qué tan similares son."]}),T.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Elecciones presidenciales"}),T.jsxs("p",{style:{marginBottom:"20px"},children:["Para las elecciones presidenciales, hice lo siguiente:",T.jsx("br",{}),"1. Busqué entrevistas, reportajes y programas del gobierno de los candidatos presidenciales.",T.jsx("br",{}),"2. Determiné los temas más presentes en el discurso de los candidatos en los cuales no están de acuerdo.",T.jsx("br",{}),"3. Le asigné a cada candidato una posición (A favor, En contra, Abstención) en cada tema.",T.jsx("br",{}),"4. La aplicación compara las respuestas del usuario con las de los candidatos, y determina qué tan alineadas están."]})]})]})})}function oT(){return T.jsx("div",{style:{justifyContent:"center",minHeight:"100vh",width:"100vw",margin:0,padding:"0",boxSizing:"border-box"},children:T.jsxs("div",{style:{width:"70%",margin:"0 auto",color:"#fff",padding:"40px 20px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",fontFamily:"Arial, sans-serif",lineHeight:1.6},children:[T.jsx("header",{style:{textAlign:"left",marginBottom:"40px",borderBottom:"2px solid #f0f0f0",paddingBottom:"20px"},children:T.jsx("h2",{style:{marginBottom:"10px"},children:"Información de contacto"})}),T.jsxs("section",{style:{marginBottom:"40px"},children:[T.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Sobre mí"}),T.jsxs("p",{style:{marginBottom:"20px"},children:["Soy Jose Valqui Pastor, y estudié sociología en Heidelberg. Decidí crear esta página porque para votar en la elección de Heidelberg, usé una aplicación parecida (Wahl-O-Mat).",T.jsx("br",{}),"La idea es contribuir a que la gente vote por partidos que están alineados con sus intereses y opiniones, sin necesidad de invertir muchas horas en investigar las posiciones de todos los partidos inscritos en una elección.",T.jsx("br",{}),"La meta de la aplicación no es convencer a nadie de votar por un partido específico, sino ayudar a que las personas tengan una primera idea de cuáles partidos están alineados con sus opiniones, para que luego puedan informarse más antes de votar."]}),T.jsx("h2",{style:{fontSize:"1.5em",marginBottom:"10px"},children:"Contacto"}),T.jsxs("p",{children:["Si tienes ideas, sugerencia o comentarios sobre la aplicación, me alegraría leerlos en este correo: ",T.jsx("br",{}),T.jsx("a",{href:"mailto:decid.es@outlook.com",style:{color:"#00CED1"},children:"decid.es@outlook.com"})]})]})]})})}function aT(){const[n,e]=P.useState(null),{state:t,dispatch:r,config:i,electionConfigs:o}=Ad(n),a=i.resultTypes||[],[c,u]=P.useState(!1),[d,m]=P.useState(a[0]||null);P.useEffect(()=>{a.length&&m(a[0])},[a]);const y={"Estoy de acuerdo":"A favor","No tengo una opinión sobre este tema":"Neutral","No estoy de acuerdo":"En contra"};P.useEffect(()=>{if(!t.comparisonResults)return;o[n];const N=t.showIndividualResults?t.comparisonResults.individual_results:t.comparisonResults.party_results;if(N&&N.length>0){const B=t.showIndividualResults?"individual":"party";F(N[0],B)}},[t.comparisonResults,t.showIndividualResults,o,n]);const I=N=>{r({type:"ANSWER",index:t.currentQuestionIndex,answer:N}),t.currentQuestionIndex<t.questions.length-1&&r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.currentQuestionIndex+1})},S=()=>{t.currentQuestionIndex<t.questions.length-1&&r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.currentQuestionIndex+1})},b=()=>{t.currentQuestionIndex>0&&r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.currentQuestionIndex-1})},V=()=>{const N=t.questions.map((B,U)=>({id:B.id,question:B.question,answer:t.answers[U]||"Sin respuesta",weight:t.weights[U]}));console.log("Submitted answers:",N)},k=async()=>{const N=t.questions.reduce((U,E,p)=>(U[E.id]={answer:t.answers[p]||"Sin respuesta",weight:t.weights[p]},U),{}),B={userId:localStorage.getItem("userId")||Date.now(),responses:N,createdAt:new Date};localStorage.setItem("userId",B.userId);try{const U=await Qg(Og(Ov,"quizAnswers"),B);console.log("Document written with ID:",U.id)}catch(U){console.error("Error adding document:",U)}},D=()=>{V(),k(),r({type:"SET_SELECTED_ENTITY",payload:null}),r({type:"SET_SHOW_INDIVIDUAL_RESULTS",payload:i.isPresidentialElection}),r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.questions.length});const N="/votometro/";console.log("Parliamentary votes URL:",N+i.parlVotesFile),console.log("Presidential votes URL: ",N+i.presVotesFile);const B={};t.questions.forEach((p,_)=>{const v=t.answers[_]||"No tengo una opinión sobre este tema",w=v.trim().toLowerCase();let g={"estoy de acuerdo":1,"no tengo una opinión sobre este tema":.5,"no estoy de acuerdo":0}[w];g===void 0&&(console.log(`Mapping failed for answer: "${v}". Falling back to 0.5.`),g=.5),p.polarity==="-"&&(g=g===1?0:g===0?1:g),B[p.id]={answer:g,weight:t.weights[_]}});const U=i.questionTypes.includes("parliamentary")?fetch(N+i.parlVotesFile).then(p=>{if(!p.ok)throw new Error("Parl fetch failed");return p.json()}):Promise.resolve(null),E=i.questionTypes.includes("presidential")&&i.presVotesFile?fetch(N+i.presVotesFile).then(p=>{if(!p.ok)throw new Error("Pres fetch failed");return p.json()}):Promise.resolve(null);Promise.all([U,E]).then(([p,_])=>{const v=p?Object.values(p.candidates.processed||{}).map(g=>{var lt;let X=0,oe=0;return Object.entries(g.votes).forEach(([qe,ze])=>{const We=i.processCandidateVote(ze),ke=B[qe];ke!=null&&!Number.isNaN(We)&&(X+=Math.abs(ke.answer-We)*ke.weight,oe+=ke.weight)}),{name:g.name,party:g.party||((lt=g.candidate_meta)==null?void 0:lt.party),similarity_score:oe?Math.round((1-X/oe)*100):0}}).sort((g,X)=>X.similarity_score-g.similarity_score):[],w=i.resultTypes.includes("party")?(()=>{const g={};return v.forEach(({party:X,similarity_score:oe})=>{g[X]||(g[X]={total:0,count:0}),g[X].total+=oe,g[X].count+=1}),Object.entries(g).map(([X,oe])=>({party:X,average_similarity_score:Math.round(oe.total/oe.count)})).sort((X,oe)=>oe.average_similarity_score-X.average_similarity_score)})():[],A=_?Object.entries(_.candidates).map(([g,X])=>{let oe=0,lt=0;return Object.entries(X.votes).forEach(([qe,ze])=>{const We=parseFloat(ze.vote),ke=B[qe];ke!=null&&!Number.isNaN(We)&&(oe+=Math.abs(ke.answer-We)*ke.weight,lt+=ke.weight)}),{name:g,party:X.party,similarity_score:lt?Math.round((1-oe/lt)*100):0}}).sort((g,X)=>X.similarity_score-g.similarity_score):[];r({type:"SET_COMPARISON_RESULTS",payload:{individual_results:v,party_results:w,presidential_results:A}})}).catch(p=>console.error("Error fetching votes:",p))},F=(N,B)=>{r({type:"SET_SELECTED_ENTITY",payload:N});const U="/votometro/",E=B==="presidential"?i.presVotesFile:i.parlVotesFile;fetch(U+E).then(p=>{if(!p.ok)throw new Error(`Fetch failed for ${E}`);return p.json()}).then(p=>{if(B==="presidential"){const _=p.candidates[N.name];if(!_){console.error("No candidate data for",N.name);return}const v=Object.entries(_.votes).map(([w,A])=>({id:w,question:A.question,vote:A.vote,comment:A.comment,source:A.source}));r({type:"SET_ENTITY_DETAILS",payload:{candidate_meta:{party:_.party},details:v}})}else r(B==="party"?{type:"SET_ENTITY_DETAILS",payload:{party_meta:p.parties.meta[N.party]||{},details:p.parties.details[N.party]||[]}}:{type:"SET_ENTITY_DETAILS",payload:p.candidates.details[N.name]||{}})}).catch(p=>console.error("Error fetching votes:",p))};P.useEffect(()=>{if(!t.comparisonResults||!d)return;let N=[],B="";d==="party"?(N=t.comparisonResults.party_results,B="party"):d==="parliamentaryCandidates"?(N=t.comparisonResults.individual_results,B="individual"):d==="presidentialCandidates"&&(N=t.comparisonResults.presidential_results,B="presidential"),N.length>0&&F(N[0],B)},[t.comparisonResults,d]);const M=()=>{e(null),r({type:"RESET"})};return T.jsx(QE,{children:T.jsxs(T.Fragment,{children:[T.jsx("button",{className:"menu-button",onClick:()=>u(!c),children:"Menu"}),c&&T.jsx("div",{className:"menu-panel",children:T.jsxs("ul",{style:{listStyle:"none",margin:0,padding:"10px"},children:[T.jsx("li",{className:"menu-list-item",children:T.jsx($n,{to:"/",onClick:()=>u(!1),style:{color:"inherit",textDecoration:"none"},children:"Encuesta"})}),T.jsx("li",{className:"menu-list-item",children:T.jsx($n,{to:"/metodologia",onClick:()=>u(!1),style:{color:"inherit",textDecoration:"none"},children:"Metodología"})}),T.jsx("li",{className:"menu-list-item",children:T.jsx($n,{to:"/contacto",onClick:()=>u(!1),style:{color:"inherit",textDecoration:"none"},children:"Contacto"})})]})}),T.jsxs(RE,{children:[T.jsx(Qr,{path:"/",element:T.jsx("div",{className:"main-container",children:n?T.jsxs("div",{className:"election-content-area",children:[n&&T.jsx("button",{onClick:M,className:"reset-button",children:"Reiniciar"}),t.questions.length===0?T.jsx("h2",{children:"Cargando..."}):t.currentQuestionIndex<t.questions.length?T.jsxs(T.Fragment,{children:[T.jsx("div",{children:T.jsxs("h3",{children:[t.currentQuestionIndex+1," / ",t.questions.length]})}),T.jsxs("div",{children:[T.jsx("label",{children:"Qué tan importante te parece este tema?"}),T.jsx("br",{}),T.jsxs("div",{className:"importance-slider-container",children:[T.jsx("span",{children:"Poco importante"}),T.jsx("input",{type:"range",min:"1",max:"5",value:t.weights[t.currentQuestionIndex],onChange:N=>r({type:"SET_WEIGHTS",index:t.currentQuestionIndex,weight:Number(N.target.value)})}),T.jsx("span",{children:"Muy importante"})]})]}),T.jsx("div",{className:"question-text-container",children:T.jsx("h2",{children:t.questions[t.currentQuestionIndex].question})}),T.jsx("div",{children:t.questions[t.currentQuestionIndex].options.map((N,B)=>T.jsx("button",{className:"option-button",onClick:()=>I(N),onMouseEnter:()=>r({type:"SET_HOVERED_OPTION",payload:N}),onMouseLeave:()=>r({type:"SET_HOVERED_OPTION",payload:null}),style:{backgroundColor:t.answers[t.currentQuestionIndex]===N||t.hoveredOption===N?"#20292e":"darkslategrey"},children:N},B))}),T.jsxs("div",{children:[T.jsx("button",{className:"back-and-skip-buttons",onClick:b,disabled:t.currentQuestionIndex===0,children:"Volver"}),T.jsx("button",{className:"back-and-skip-buttons",onClick:()=>{t.currentQuestionIndex===t.questions.length-1?D():S()},children:t.currentQuestionIndex===t.questions.length-1?"Terminar encuesta":"Saltar"})]})]}):T.jsxs(T.Fragment,{children:[T.jsx("div",{id:"recaptcha-container"}),T.jsx("h2",{children:"Resultados"}),a.length>1&&T.jsx("div",{className:"results-toggle-container",children:a.map(N=>T.jsxs("button",{className:"option-button",onClick:()=>m(N),onMouseEnter:()=>r({type:"SET_HOVERED_OPTION",payload:N}),onMouseLeave:()=>r({type:"SET_HOVERED_OPTION",payload:null}),style:{backgroundColor:d===N||t.hoveredOption===N?"#20292e":"darkslategrey"},children:[N==="party"&&"Partidos políticos",N==="parliamentaryCandidates"&&"Candidatos parlamentarios",N==="presidentialCandidates"&&"Candidatos presidenciales"]},N))}),T.jsxs("div",{style:{display:"flex",width:"100%"},children:[T.jsx("div",{style:{flex:1},children:t.comparisonResults&&T.jsxs(T.Fragment,{children:[d==="party"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"candidate-party-similarity-header",children:[T.jsx("span",{children:"Partido"}),T.jsx("span",{children:"Similaridad"})]}),T.jsx("ul",{style:{listStyleType:"none",padding:0,textAlign:"left",width:"100%"},children:t.comparisonResults.party_results.map((N,B)=>T.jsx("li",{className:"candidate-party-similarity-item",onClick:()=>F(N,"party"),children:T.jsxs("div",{className:"candidate-party-similarity-item",children:[T.jsx("span",{children:T.jsx("strong",{children:N.party})}),T.jsxs("span",{className:"result-score",children:[N.average_similarity_score,"%"]})]})},B))})]}),d==="parliamentaryCandidates"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"candidate-party-similarity-header",children:[T.jsx("span",{children:"Candidatos parlamentarios"}),T.jsx("span",{children:"Similaridad"})]}),T.jsx("ul",{className:"parties-and-candidates-list",children:t.comparisonResults.individual_results.map((N,B)=>{var U;return T.jsxs("li",{className:"candidate-party-similarity-item",onClick:()=>F(N,"individual"),children:[T.jsx("span",{children:((U=N.names)==null?void 0:U.join(", "))||N.name}),T.jsxs("span",{className:"result-score",children:[N.similarity_score,"%"]})]},B)})})]}),d==="presidentialCandidates"&&T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"candidate-party-similarity-header",children:[T.jsx("span",{children:"Candidatos presidenciales"}),T.jsx("span",{children:"Similaridad"})]}),T.jsx("ul",{className:"parties-and-candidates-list",children:t.comparisonResults.presidential_results.map((N,B)=>T.jsxs("li",{className:"candidate-party-similarity-item",onClick:()=>F(N,"presidential"),children:[T.jsx("span",{children:N.name}),T.jsxs("span",{className:"result-score",children:[N.similarity_score,"%"]})]},B))})]})]})}),T.jsx("div",{className:"entity-details-container",children:t.selectedEntity?T.jsxs(T.Fragment,{children:[T.jsx("h2",{style:{margin:"8px 0"},children:t.selectedEntity.name?t.selectedEntity.name:t.selectedEntity.party}),t.entityDetails.candidate_meta&&T.jsx("div",{style:{marginBottom:"4px"},children:T.jsx("p",{style:{margin:"2px 0"},children:T.jsxs(T.Fragment,{children:[!i.isPresidentialElection&&T.jsxs(T.Fragment,{children:[T.jsx("strong",{children:"Edad:"})," ",t.entityDetails.candidate_meta.age,T.jsx("br",{}),T.jsx("strong",{children:"Asistencia:"})," ",t.entityDetails.candidate_meta.attendance||"N/A",T.jsx("br",{})]}),T.jsx("strong",{children:"Partido:"})," ",t.entityDetails.candidate_meta.party,T.jsx("br",{}),T.jsx("br",{})]})})}),t.entityDetails.party_meta&&i.name!=="chile"&&T.jsxs("div",{style:{marginBottom:"4px"},children:[T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Edad promedio:"})," ",t.entityDetails.party_meta.average_age,T.jsx("br",{}),T.jsx("strong",{children:"Asistencia promedio:"})," ",t.entityDetails.party_meta.average_attendance_percentage||"N/A","%",T.jsx("br",{})]}),T.jsx("br",{})]}),t.entityDetails.details&&t.entityDetails.details.length>0?t.questionDetails.length>0?t.questionDetails.map((N,B)=>{const U=t.entityDetails.details.find(p=>p.id===N.id);if(!U)return null;const E=N.source;return T.jsxs("div",{style:{marginBottom:"2px",lineHeight:"1.2"},children:[T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Opinión:"})," ",N.question," ",T.jsx("br",{}),i.showLawInfo&&N.law&&T.jsxs("small",{style:{color:"gray",fontSize:"0.9em"},children:[T.jsx("strong",{children:"Proyecto de ley:"})," ",N.law]})]}),i.showLawInfo&&T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Fecha de la votación:"})," ",U.date||"N/A"," ",T.jsx("br",{})]}),T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Tu respuesta:"})," ",y[t.answers[B]]||"Sin respuesta"]}),T.jsx("p",{style:{margin:"2px 0"},children:t.entityDetails.party_meta?U.vote_counts?T.jsxs(T.Fragment,{children:[T.jsx("strong",{children:"Votos del partido:"})," A favor: ",U.vote_counts["A favor"]||0,","," ","En contra: ",U.vote_counts["En contra"]||0,","," ","Abstención: ",U.vote_counts.Abstención||0,T.jsx("br",{})]}):T.jsxs(T.Fragment,{children:[T.jsx("strong",{children:"Voto más común del partido:"})," ",U.vote||"N/A"," ",T.jsx("br",{})]}):T.jsx(T.Fragment,{children:i.isPresidentialElection?T.jsxs(T.Fragment,{children:[T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Opinión del candidato:"})," ",U.vote==="1"?"A favor":U.vote==="0.5"?"Neutral":U.vote==="0"?"En contra":U.vote]}),U.comment&&T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Comentario:"})," ",U.comment]}),U.source&&T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Fuente:"})," ",T.jsx("a",{href:U.source,target:"_blank",rel:"noopener noreferrer",children:U.source.slice(0,40)+(U.source.length>30?"...":"")})]})]}):T.jsxs("p",{style:{margin:"2px 0"},children:[T.jsx("strong",{children:"Voto del congresista:"})," ",U.vote," ",T.jsx("br",{})]})})}),E&&E.startsWith("http")&&T.jsx("p",{style:{margin:"2px 0"},children:i.showLawInfo?T.jsxs(T.Fragment,{children:[T.jsx("strong",{children:"Documento y noticias:"})," ",T.jsx("a",{href:E,target:"_blank",rel:"noopener noreferrer",children:new URL(E).hostname.replace("www.","")+"/..."})]}):T.jsxs(T.Fragment,{children:[T.jsx("strong",{children:"Noticias:"})," ",T.jsx("a",{href:E,target:"_blank",rel:"noopener noreferrer",children:new URL(E).hostname.replace("www.","")+"/..."})]})}),T.jsx("br",{})]},B)}):T.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."}):T.jsx("p",{style:{margin:"2px 0"},children:"No vote details available."})]}):T.jsx("p",{children:" "})})]}),T.jsx("div",{children:T.jsx("button",{className:"back-to-survey-button",onClick:()=>r({type:"SET_CURRENT_QUESTION_INDEX",payload:t.questions.length-1}),onMouseEnter:N=>N.target.style.backgroundColor="#20292e",onMouseLeave:N=>N.target.style.backgroundColor="darkslategrey",style:{backgroundColor:"darkslategrey",transition:"background-color 0.2s ease-in-out"},children:"Volver a la encuesta"})})]})]}):T.jsxs("div",{className:"election-selection-container",children:[T.jsx("h2",{children:"Selecciona una elección"}),T.jsx("button",{onClick:()=>e("chile_2025"),children:"Chile: Elecciones generales (15.11.2025)"}),T.jsx("button",{onClick:()=>e("peru_parl_2026"),children:"Perú: Elección parlamentaria (12.04.2026)"})]})})}),T.jsx(Qr,{path:"/metodologia",element:T.jsx(sT,{})}),T.jsx(Qr,{path:"/contacto",element:T.jsx(oT,{})})]})]})})}yd.createRoot(document.getElementById("root")).render(T.jsx(P.StrictMode,{children:T.jsx(aT,{})}));
