import{h as t,r as i,H as e}from"./p-ccfcf823.js";import"./p-d7e83d64.js";import{l as a}from"./p-f67a156d.js";import"./p-7005d10f.js";import"./p-4b404e74.js";import"./p-7e1544ef.js";import{X as r}from"./p-a00d7d5e.js";import"./p-75af3351.js";import"./p-8d2be523.js";import{a as s,R as d,B as o,b as n,P as l,S as p,T as h,E as c,M as b}from"./p-27addd86.js";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const g=i=>{const{name:e,issuerDnLink:r}=i;if(!e||!e.length)return null;const o=a.getString("issuerName");return[t(s,{value:r?t("peculiar-link",{href:r,type:"h6"},o):o}),e.map(i=>t(d,{name:i.name||i.type,value:i.value}))]},m=class{constructor(t){i(this,t),this.isDecodeInProcess=!0,this.getAuthKeyIdParentLink=t=>{var i;return null===(i=this.authKeyIdParentLink)||void 0===i?void 0:i.replace("{{authKeyId}}",t)},this.getAuthKeyIdSiblingsLink=t=>{var i;return null===(i=this.authKeyIdSiblingsLink)||void 0===i?void 0:i.replace("{{authKeyId}}",t)},this.getSubjectKeyIdChildrenLink=t=>{var i;return null===(i=this.subjectKeyIdChildrenLink)||void 0===i?void 0:i.replace("{{subjectKeyId}}",t)},this.getSubjectKeyIdSiblingsLink=t=>{var i;return null===(i=this.subjectKeyIdSiblingsLink)||void 0===i?void 0:i.replace("{{subjectKeyId}}",t)}}componentWillLoad(){this.decodeCertificate(this.certificate)}async decodeCertificate(t){this.isDecodeInProcess=!0;try{if(t instanceof r)this.certificateDecoded=t;else{if("string"!=typeof t)return;this.certificateDecoded=new r(t)}this.certificateDecoded.parseExtensions(),await this.certificateDecoded.getThumbprint("SHA-1"),await this.certificateDecoded.getThumbprint("SHA-256")}catch(i){this.certificateDecodeError=i,console.error("Error certificate parse:",i)}this.isDecodeInProcess=!1}watchCertificateAndDecode(t,i){"string"!=typeof t||"string"!=typeof i?t instanceof r&&i instanceof r&&t.serialNumber!==i.serialNumber&&this.decodeCertificate(t):t!==i&&this.decodeCertificate(t)}getLEILink(t){return"https://search.gleif.org/#/record/"+t}getDNSNameLink(t){return"https://censys.io/ipv4?q="+t}getIPAddressLink(t){return"https://censys.io/ipv4?q="+t}getIssuerDnLink(){return this.issuerDnLink}renderErrorState(){return t("div",{class:"status_wrapper"},t("peculiar-typography",{type:"b1",class:"interaction_text"},"There is error for certificate decode."))}renderEmptyState(){return t("div",{class:"status_wrapper"},t("peculiar-typography",{type:"b1",class:"interaction_text"},"There is no certificate available."))}render(){return this.certificateDecodeError?this.renderErrorState():this.certificateDecoded?t(e,{"data-view":this.view},t("table",null,t(o,Object.assign({},this.certificateDecoded)),t(n,{name:this.certificateDecoded.subject}),t(g,{name:this.certificateDecoded.issuer,issuerDnLink:this.getIssuerDnLink()}),t(l,{publicKey:this.certificateDecoded.publicKey}),t(p,{signature:this.certificateDecoded.signature}),t(h,{thumbprints:this.certificateDecoded.thumbprints}),t(c,{extensions:this.certificateDecoded.extensions,getLEILink:this.getLEILink,getDNSNameLink:this.getDNSNameLink,getIPAddressLink:this.getIPAddressLink,getAuthKeyIdParentLink:this.getAuthKeyIdParentLink,getAuthKeyIdSiblingsLink:this.getAuthKeyIdSiblingsLink,getSubjectKeyIdChildrenLink:this.getSubjectKeyIdChildrenLink,getSubjectKeyIdSiblingsLink:this.getSubjectKeyIdSiblingsLink}),this.download&&t(b,{certificate:this.certificateDecoded}))):this.renderEmptyState()}static get watchers(){return{certificate:["watchCertificateAndDecode"]}}};m.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block;width:100%;word-wrap:break-word;position:relative;min-width:280px;min-height:300px;background:white;background:rgba(var(--pv-color-light-rgb), 1)}th,td{border:none}table{width:100%;margin-bottom:30px;border-spacing:0;border-collapse:collapse}table .title td{border-color:rgba(209, 213, 217, 0.5);border-color:rgba(var(--pv-color-grey_3-rgb), 0.5);padding-top:60px;padding-bottom:15px;border-bottom-width:1px;border-bottom-style:solid}table td:first-child{padding-left:30px;width:130px;padding-right:10px}table td:last-child{padding-right:30px;width:calc(100% - 130px)}table td{vertical-align:top;padding-top:5px;padding-bottom:5px}table td.vertical_align_middle{vertical-align:middle}table .title:first-child td{padding-top:15px}table .title+tr td{padding-top:15px}table td.monospace{max-width:0}table .divider{padding-top:15px;padding-bottom:15px}.divider .bg_fill{background-color:rgba(209, 213, 217, 0.5);background-color:rgba(var(--pv-color-grey_3-rgb), 0.5)}table tr:last-child .divider{padding-top:0;opacity:0}.divider span{display:block;height:1px}.status_wrapper{min-height:inherit;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.interaction_text{padding:15px 0;width:300px;margin:auto;text-align:center}@media (max-width: 900px){table,tr,td{display:block}table td:last-child,table td:first-child{padding-right:15px;padding-left:15px;width:100%}table .title+tr td{padding-top:5px}table .title+tr td:first-child{padding-top:15px}table td.monospace{width:100%;max-width:none}}:host([data-view=mobile]) table,:host([data-view=mobile]) tr,:host([data-view=mobile]) td{display:block}:host([data-view=mobile]) table td:last-child,:host([data-view=mobile]) table td:first-child{padding-right:15px;padding-left:15px;width:100%}:host([data-view=mobile]) table .title+tr td{padding-top:5px}:host([data-view=mobile]) table .title+tr td:first-child{padding-top:15px}:host([data-view=mobile]) table td.monospace{width:100%;max-width:none}";export{m as peculiar_certificate_viewer}