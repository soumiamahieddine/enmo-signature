var __extends=this&&this.__extends||function(){var t=function(e,r){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)if(e.hasOwnProperty(r))t[r]=e[r]};return t(e,r)};return function(e,r){t(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{u(n.next(t))}catch(e){o(e)}}function a(t){try{u(n["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):i(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;i=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(s[0]===6&&r.label<o[1]){r.label=o[1];o=s;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(s);break}if(o[2])r.ops.pop();r.trys.pop();continue}s=e.call(t,r)}catch(a){s=[6,a];i=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-9a06c37e.system.js","./p-50e9a8af.system.js","./p-91a27287.system.js","./p-1c4a40aa.system.js"],(function(t){"use strict";var e,r,n,i,o,s,a,u,c,f,l,p,h,b,m;return{setters:[function(t){e=t.A;r=t.d;n=t.N;i=t.E;o=t.e;s=t.f;a=t.g;u=t.R;c=t.h;f=t.j;l=t.k},function(t){p=t.d},function(t){h=t.l;b=t.f},function(t){m=t.i}],execute:function(){
/**
             * @license
             * Copyright (c) Peculiar Ventures, LLC.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
var y=function(t){__extends(e,t);function e(e){var i=t.call(this,r(e),h)||this;i.thumbprints={};var o=i.asn.tbsCertificate;i.serialNumber=m.Convert.ToHex(o.serialNumber);i.subject=new n(o.subject).toJSON();i.issuer=new n(o.issuer).toJSON();i.version=o.version+1;var s=o.validity.notBefore.utcTime||o.validity.notBefore.generalTime;if(!s){throw new Error("Cannot get 'notBefore' value")}i.notBefore=s;var a=o.validity.notAfter.utcTime||o.validity.notAfter.generalTime;if(!a){throw new Error("Cannot get 'notAfter' value")}i.notAfter=a;i.validity=p(i.notBefore,i.notAfter);return i}e.prototype.parseExtensions=function(){var t=this.asn.tbsCertificate;if(t.extensions){this.extensions=t.extensions.map((function(t){return new i(b.serialize(t))}))}};Object.defineProperty(e.prototype,"publicKey",{get:function(){var t=this.asn.tbsCertificate.subjectPublicKeyInfo,e=t.subjectPublicKey,r=t.algorithm;var n;if(r.algorithm===o&&r.parameters){n=b.parse(r.parameters,s)}if(r.algorithm===a){n=b.parse(e,u)}var i=b.serialize(this.asn.tbsCertificate.subjectPublicKeyInfo);return{params:n,value:i,algorithm:r.algorithm}},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"signature",{get:function(){var t=this.asn,e=t.signatureValue,r=t.signatureAlgorithm;return{value:e,algorithm:r.algorithm}},enumerable:false,configurable:true});e.prototype.exportAsBase64=function(){return m.Convert.ToBase64(this.raw)};e.prototype.exportAsHexFormatted=function(){return c(m.Convert.ToHex(this.raw))};e.prototype.exportAsPemFormatted=function(){return"-----BEGIN CERTIFICATE-----\n"+f(this.exportAsBase64())+"\n-----END CERTIFICATE-----"};e.prototype.getThumbprint=function(t){if(t===void 0){t="SHA-1"}return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(n){switch(n.label){case 0:n.trys.push([0,2,,3]);return[4,l(t,this.raw)];case 1:e=n.sent();this.thumbprints[t["name"]||t]=m.Convert.ToHex(e);return[3,3];case 2:r=n.sent();console.error("Error thumbprint get:",r);return[3,3];case 3:return[2]}}))}))};Object.defineProperty(e.prototype,"commonName",{get:function(){if(!this.subject){return""}for(var t=0;t<this.subject.length;t+=1){var e=this.subject[t];if(e.shortName==="CN"||e.shortName==="E"||e.shortName==="O"){return e.value}}return""},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"issuerCommonName",{get:function(){if(!this.issuer){return""}for(var t=0;t<this.issuer.length;t+=1){var e=this.issuer[t];if(e.shortName==="CN"){return e.value}if(e.shortName==="E"){return e.value}}return""},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"isRoot",{get:function(){return JSON.stringify(this.issuer)===JSON.stringify(this.subject)},enumerable:false,configurable:true});e.prototype.subjectToString=function(){if(!this.subject){return""}return this.subject.map((function(t){return t.shortName+"="+t.value})).join(", ")};e.prototype.issuerToString=function(){if(!this.issuer){return""}return this.issuer.map((function(t){return t.shortName+"="+t.value})).join(", ")};return e}(e);t("X",y)}}}));