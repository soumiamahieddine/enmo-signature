var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function s(e){try{a(n.next(e))}catch(t){o(t)}}function c(e){try{a(n["throw"](e))}catch(t){o(t)}}function a(e){e.done?i(e.value):r(e.value).then(s,c)}a((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,s;return s={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function c(e){return function(t){return a([e,t])}}function a(s){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;r=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=t.call(e,i)}catch(c){s=[6,c];r=0}finally{n=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-f0dd3588.system.js","./p-2e76ca07.system.js","./p-91a27287.system.js","./p-1c4a40aa.system.js","./p-8c7f3130.system.js","./p-7bcccf93.system.js"],(function(e){"use strict";var t,i,n,r,o,s,c;return{setters:[function(e){t=e.h;i=e.r;n=e.c;r=e.H},function(){},function(){},function(){},function(e){o=e.F},function(e){s=e.l;c=e.g}],execute:function(){
/**
             * @license
             * Copyright (c) Peculiar Ventures, LLC.
             *
             * This source code is licensed under the BSD 3-Clause license found in the
             * LICENSE file in the root directory of this source tree.
             */
var a=function(e){return t("svg",Object.assign({},e,{width:"24",height:"34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.11 11.877c.024.03.05.058.081.082l3.016 3.015a.5.5 0 10.707-.707l-1.952-1.952c-.144-.144-.454-.33-.454-.33s.313.083.499.083H16.5a.5.5 0 100-1H7.997c-.19 0-.508.078-.508.078s.311-.178.455-.322l1.97-1.97a.5.5 0 10-.707-.708l-3.121 3.121a.31.31 0 00-.017.05.497.497 0 00.017.531c0 .002.023.03.023.03z",fill:"#6D7D87"}))};var l=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;min-height:550px;height:550px}.container_details{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1)}.container_details_header{border-bottom-width:1px;border-bottom-style:solid;padding:10px 100px;position:relative;height:45px;border-color:#e1e4e6;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}.container_details_button{position:absolute;top:50%;left:8px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.container_details_content{height:calc(100% - 45px);overflow:auto}";
/**
             * @license
             * Copyright (c) Peculiar Ventures, LLC.
             *
             * This source code is licensed under the BSD 3-Clause license found in the
             * LICENSE file in the root directory of this source tree.
             */var h=undefined&&undefined.__classPrivateFieldGet||function(e,t){if(!t.has(e)){throw new TypeError("attempted to get private field on non-instance")}return t.get(e)};var d=undefined&&undefined.__classPrivateFieldSet||function(e,t,i){if(!t.has(e)){throw new TypeError("attempted to set private field on non-instance")}t.set(e,i);return i};var u;var f=e("peculiar_fortify_certificates",function(){function e(e){var t=this;i(this,e);this.cancel=n(this,"cancel",7);this.continue=n(this,"continue",7);u.set(this,void 0);this.filters={};this.providers=[];this.certificates=[];this.isFetching={connectionDetect:"pending"};this.onClickCancel=function(){t.cancel.emit()};this.onClickContinue=function(){var e=t.certificates.find((function(e){return e.index===t.certificateSelectedIndex}));if(e){t.continue.emit({certificateId:e.index,providerId:e.providerID,server:h(t,u).server,privateKeyId:e.privateKeyId})}};this.onClickUpdateCertificates=function(){t.tryGetData()};this.onClickTryAgain=function(){return __awaiter(t,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.tryLogin()];case 1:e=t.sent();if(!e){return[2]}return[4,this.tryGetData()];case 2:t.sent();return[2]}}))}))};this.onClickCloseDetails=function(){t.certificateBase64ForDetails=null};this.onClickCertificate=function(e){t.certificateSelectedIndex=e};this.onClickCertificateDetails=function(e,i){return __awaiter(t,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:t=this;return[4,h(this,u).getCertificateBodyById(e,i)];case 1:t.certificateBase64ForDetails=n.sent();return[2]}}))}))}}e.prototype.componentWillLoad=function(){s.setLocale(this.language)};e.prototype.componentDidLoad=function(){d(this,u,new o({onClose:this.onClose.bind(this),onProvidersAdded:this.tryGetData.bind(this),onProvidersRemoved:this.tryGetData.bind(this),filters:this.filters}));this.start()};e.prototype.componentDidUnload=function(){h(this,u).finish()};e.prototype.onClose=function(){this.providers=[];this.certificates=[];this.certificateSelectedIndex=undefined;this.certificateBase64ForDetails=undefined;this.setFetching("connectionDetect","rejected")};e.prototype.start=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(i){switch(i.label){case 0:this.setFetching("connectionDetect","pending");if(!h(this,u).isConnectionSupported()){this.setFetching("connectionSupport","rejected");return[2]}return[4,h(this,u).isConnectionDetected()];case 1:if(!i.sent()){this.setFetching("connectionDetect","rejected")}return[4,h(this,u).isConnectionDetectedAuto()];case 2:i.sent();this.setFetching("connectionDetect","pending");i.label=3;case 3:i.trys.push([3,5,,6]);return[4,h(this,u).connect()];case 4:i.sent();return[3,6];case 5:e=i.sent();console.error(e);if(e&&e.message){if(e.message.indexOf("update your client to the latest version")!==-1){this.setFetching("connectionClientUpdate","rejected")}}return[2];case 6:return[4,this.tryLogin()];case 7:t=i.sent();if(!t){return[2]}return[4,this.tryGetData()];case 8:i.sent();return[2]}}))}))};e.prototype.tryGetData=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i,n;return __generator(this,(function(r){switch(r.label){case 0:this.setFetching("providers","pending");this.certificateSelectedIndex=undefined;this.providers=[];this.certificates=[];r.label=1;case 1:r.trys.push([1,3,,4]);e=this;return[4,h(this,u).getProviders()];case 2:e.providers=r.sent();this.setFetching("providers","resolved");return[3,4];case 3:t=r.sent();this.setFetching("providers","rejected");return[2];case 4:this.setFetching("certificates","pending");r.label=5;case 5:r.trys.push([5,7,,8]);i=this;return[4,h(this,u).getCertificatesByProviders(this.providers)];case 6:i.certificates=r.sent();this.setFetching("certificates","resolved");return[3,8];case 7:n=r.sent();this.setFetching("certificates","rejected");return[3,8];case 8:return[2]}}))}))};e.prototype.tryLogin=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(i){switch(i.label){case 0:this.challenge=undefined;this.setFetching("connectionApprove","pending");i.label=1;case 1:i.trys.push([1,5,,6]);return[4,h(this,u).challenge()];case 2:e=i.sent();if(!e)return[3,4];this.challenge=e;return[4,h(this,u).login()];case 3:i.sent();i.label=4;case 4:this.setFetching("connectionApprove","resolved");return[3,6];case 5:t=i.sent();this.setFetching("connectionApprove","rejected");return[2,undefined];case 6:return[2,true]}}))}))};e.prototype.setFetching=function(e,t){var i;this.isFetching=Object.assign(Object.assign({},this.isFetching),(i={},i[e]=t,i))};e.renderConnecting=function(){return t("peculiar-fortify-connecting",null)};e.renderFortifyAuthorization=function(e){return t("peculiar-fortify-authorization",{pin:e})};e.prototype.renderFortifyNotDetected=function(){return t("peculiar-fortify-not-detected",{downloadAppLink:this.downloadAppLink})};e.prototype.renderFortifyClientUpdate=function(){return t("peculiar-fortify-client-update",{downloadAppLink:this.downloadAppLink})};e.renderFortifyNotSupported=function(){return t("peculiar-fortify-not-supported",null)};e.prototype.renderChallengeNotApproved=function(){return t("peculiar-fortify-challenge-not-approved",{onCancel:this.onClickCancel,onTryAgain:this.onClickTryAgain})};e.prototype.renderCertificates=function(){return t("peculiar-fortify-certificates-list",{certificates:this.certificates,certificateSelectedIndex:this.certificateSelectedIndex,onCertificate:this.onClickCertificate,onCertificateDetails:this.onClickCertificateDetails,onUpdate:this.onClickUpdateCertificates,onCancel:this.onClickCancel,onContinue:this.onClickContinue,loading:this.isFetching.certificates==="pending"||this.isFetching.providers==="pending",allowContinue:!!this.certificateSelectedIndex})};e.prototype.renderProvidersEmpty=function(){return t("peculiar-fortify-providers-empty",{onCancel:this.onClickCancel})};e.renderUnresolvedStatus=function(){return t("peculiar-fortify-layout",{type:"message",titleValue:"Someting went wrong for status",descriptionValue:"ERROR"})};e.prototype.render=function(){var e=null;switch(true){case this.isFetching.connectionClientUpdate==="rejected":e=this.renderFortifyClientUpdate();break;case this.isFetching.connectionSupport==="rejected":e=f.renderFortifyNotSupported();break;case this.isFetching.connectionDetect==="rejected":e=this.renderFortifyNotDetected();break;case this.isFetching.connectionApprove==="rejected":e=this.renderChallengeNotApproved();break;case this.isFetching.connectionApprove==="pending"&&!!this.challenge:e=f.renderFortifyAuthorization(this.challenge);break;case this.isFetching.providers==="resolved"&&!this.providers.length:e=this.renderProvidersEmpty();break;case this.isFetching.providers==="pending"&&!!this.providers.length:e=this.renderCertificates();break;case!!this.isFetching.certificates:e=this.renderCertificates();break;case this.isFetching.connectionDetect==="pending":case this.isFetching.connectionSupport==="pending":case this.isFetching.connectionApprove==="pending":case this.isFetching.providers==="pending":e=f.renderConnecting();break;default:e=f.renderUnresolvedStatus()}return t(r,null,t("peculiar-fortify-layout",{hideFooter:this.hideFooter},this.certificateBase64ForDetails&&t("div",{class:"container_details"},t("header",{class:"container_details_header"},t("peculiar-fortify-typography",{type:"h4",align:"center",ellipsis:true},c("details.title")),t("peculiar-fortify-button",{class:"container_details_button",onClick:this.onClickCloseDetails,"aria-label":"Close details",size:"small"},t(a,{slot:"icon"}),c("actions.back"))),t("div",{class:"container_details_content"},t("peculiar-certificate-viewer",{certificate:this.certificateBase64ForDetails,view:"mobile"}))),e))};return e}());u=new WeakMap;f.style=l}}}));