import{r as o,h as r,H as t,g as e}from"./p-ccfcf823.js";import{g as l}from"./p-eaa13968.js";const a=class{constructor(r){o(this,r)}render(){return r(t,{class:{["box_fill_"+this.fill]:!!this.fill,["box_stroke_"+this.stroke]:!!this.stroke}},r("slot",null))}};a.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}:host([stroke]){border-width:1px;border-style:solid}:host([fill=dark]){background-color:#40484f;background-color:rgba(var(--pv-color-dark-rgb), 1)}:host([stroke=dark]){border-color:#40484f;border-color:rgba(var(--pv-color-dark-rgb), 1)}:host([fill=light]){background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1)}:host([stroke=light]){border-color:white;border-color:rgba(var(--pv-color-light-rgb), 1)}:host([fill=grey_1]){background-color:#faf9f9;background-color:rgba(var(--pv-color-grey_1-rgb), 1)}:host([stroke=grey_1]){border-color:#faf9f9;border-color:rgba(var(--pv-color-grey_1-rgb), 1)}:host([fill=grey_2]){background-color:#eef4f7;background-color:rgba(var(--pv-color-grey_2-rgb), 1)}:host([stroke=grey_2]){border-color:#eef4f7;border-color:rgba(var(--pv-color-grey_2-rgb), 1)}:host([fill=grey_3]){background-color:#e1e4e6;background-color:rgba(var(--pv-color-grey_3-rgb), 1)}:host([stroke=grey_3]){border-color:#e1e4e6;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}:host([fill=grey_4]){background-color:#b6c3cc;background-color:rgba(var(--pv-color-grey_4-rgb), 1)}:host([stroke=grey_4]){border-color:#b6c3cc;border-color:rgba(var(--pv-color-grey_4-rgb), 1)}:host([fill=grey_5]){background-color:#6d7d87;background-color:rgba(var(--pv-color-grey_5-rgb), 1)}:host([stroke=grey_5]){border-color:#6d7d87;border-color:rgba(var(--pv-color-grey_5-rgb), 1)}:host([fill=secondary]){background-color:#0abe65;background-color:rgba(var(--pv-color-secondary-rgb), 1)}:host([stroke=secondary]){border-color:#0abe65;border-color:rgba(var(--pv-color-secondary-rgb), 1)}:host([fill=primary]){background-color:#0680ff;background-color:rgba(var(--pv-color-primary-rgb), 1)}:host([stroke=primary]){border-color:#0680ff;border-color:rgba(var(--pv-color-primary-rgb), 1)}:host([fill=attention]){background-color:#f7a831;background-color:rgba(var(--pv-color-attention-rgb), 1)}:host([stroke=attention]){border-color:#f7a831;border-color:rgba(var(--pv-color-attention-rgb), 1)}:host([fill=footer]){background-color:#40484f;background-color:rgba(var(--pv-color-footer-rgb), 1)}:host([stroke=footer]){border-color:#40484f;border-color:rgba(var(--pv-color-footer-rgb), 1)}:host([fill=footer-text]){background-color:white;background-color:rgba(var(--pv-color-footer-text-rgb), 1)}:host([stroke=footer-text]){border-color:white;border-color:rgba(var(--pv-color-footer-text-rgb), 1)}";const i=class{constructor(r){o(this,r),this.bgType="stroke",this.color="grey_4",this.colorText="grey_5",this.type="button",this.target="_blank",this.handleClick=o=>{if(this.disabled)return o.preventDefault(),void o.stopPropagation();if("submit"===this.type&&(r=this.el).shadowRoot&&r.attachShadow){const r=this.el.closest("form");if(r){o.preventDefault();const t=document.createElement("button");return t.type=this.type,t.style.display="none",r.appendChild(t),t.click(),void t.remove()}}var r;this.onClick&&this.onClick(o)}}render(){const o=!!this.href;return r(o?"a":"button",{class:{button:!0,["button_color_"+this.colorText]:!0,["button_fill_"+this.color]:"fill"===this.bgType,["button_stroke_"+this.color]:"clear"!==this.bgType,button_small:"small"===this.size,button_disabled:this.disabled},disabled:this.disabled,type:!o&&this.type,href:o&&this.href,target:o&&this.target?this.target:null,rel:o&&"noreferrer noopener",onClick:this.handleClick,part:"base"},r("span",{part:"label",class:"button_label"},r("slot",{name:"icon"}),r("slot",null)))}get el(){return e(this)}};i.style=':host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:inline-block;width:auto;cursor:pointer;position:relative;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-drag:none;-ms-content-zooming:none;word-wrap:break-word;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none;text-size-adjust:none;--pv-border-radius:3px;--pv-button-height:40px;--pv-button-padding-end:26px;--pv-button-padding-start:26px}.button{font-family:"Open Sans", "Arial", sans-serif;font-family:var(--pv-font-family);font-size:13px;font-size:var(--pv-font-size-b3);letter-spacing:0.03em;letter-spacing:var(--pv-letter-spacing-normal);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;border-style:solid;border-width:1px;font-weight:400;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;vertical-align:middle;cursor:inherit;height:40px;height:var(--pv-button-height);line-height:var(--pv-button-height);border-radius:var(--pv-border-radius);padding:0 12px;padding:0 var(--pv-button-padding-end) 0 var(--pv-button-padding-start);min-width:var(--pv-button-height);background:transparent;border-color:transparent}.button::-moz-focus-inner{border:0}.button:focus{outline:none;-webkit-box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1);box-shadow:0 4px 10px 0 rgba(var(--pv-color-dark-rgb), 0.1)}.button[disabled]{opacity:0.5;cursor:not-allowed}.button_color_dark{color:#40484f;color:rgba(var(--pv-color-dark-rgb), 1)}.button_color_light{color:white;color:rgba(var(--pv-color-light-rgb), 1)}.button_color_grey_1{color:#faf9f9;color:rgba(var(--pv-color-grey_1-rgb), 1)}.button_color_grey_2{color:#eef4f7;color:rgba(var(--pv-color-grey_2-rgb), 1)}.button_color_grey_3{color:#e1e4e6;color:rgba(var(--pv-color-grey_3-rgb), 1)}.button_color_grey_4{color:#b6c3cc;color:rgba(var(--pv-color-grey_4-rgb), 1)}.button_color_grey_5{color:#6d7d87;color:rgba(var(--pv-color-grey_5-rgb), 1)}.button_color_secondary{color:#0abe65;color:rgba(var(--pv-color-secondary-rgb), 1)}.button_color_primary{color:#0680ff;color:rgba(var(--pv-color-primary-rgb), 1)}.button_color_attention{color:#f7a831;color:rgba(var(--pv-color-attention-rgb), 1)}.button_color_footer{color:#40484f;color:rgba(var(--pv-color-footer-rgb), 1)}.button_color_footer-text{color:white;color:rgba(var(--pv-color-footer-text-rgb), 1)}.button_fill_dark{background-color:#40484f;background-color:rgba(var(--pv-color-dark-rgb), 1)}.button_fill_light{background-color:white;background-color:rgba(var(--pv-color-light-rgb), 1)}.button_fill_grey_1{background-color:#faf9f9;background-color:rgba(var(--pv-color-grey_1-rgb), 1)}.button_fill_grey_2{background-color:#eef4f7;background-color:rgba(var(--pv-color-grey_2-rgb), 1)}.button_fill_grey_3{background-color:#e1e4e6;background-color:rgba(var(--pv-color-grey_3-rgb), 1)}.button_fill_grey_4{background-color:#b6c3cc;background-color:rgba(var(--pv-color-grey_4-rgb), 1)}.button_fill_grey_5{background-color:#6d7d87;background-color:rgba(var(--pv-color-grey_5-rgb), 1)}.button_fill_secondary{background-color:#0abe65;background-color:rgba(var(--pv-color-secondary-rgb), 1)}.button_fill_primary{background-color:#0680ff;background-color:rgba(var(--pv-color-primary-rgb), 1)}.button_fill_attention{background-color:#f7a831;background-color:rgba(var(--pv-color-attention-rgb), 1)}.button_fill_footer{background-color:#40484f;background-color:rgba(var(--pv-color-footer-rgb), 1)}.button_fill_footer-text{background-color:white;background-color:rgba(var(--pv-color-footer-text-rgb), 1)}.button_stroke_dark{border-color:#40484f;border-color:rgba(var(--pv-color-dark-rgb), 1)}.button_stroke_light{border-color:white;border-color:rgba(var(--pv-color-light-rgb), 1)}.button_stroke_grey_1{border-color:#faf9f9;border-color:rgba(var(--pv-color-grey_1-rgb), 1)}.button_stroke_grey_2{border-color:#eef4f7;border-color:rgba(var(--pv-color-grey_2-rgb), 1)}.button_stroke_grey_3{border-color:#e1e4e6;border-color:rgba(var(--pv-color-grey_3-rgb), 1)}.button_stroke_grey_4{border-color:#b6c3cc;border-color:rgba(var(--pv-color-grey_4-rgb), 1)}.button_stroke_grey_5{border-color:#6d7d87;border-color:rgba(var(--pv-color-grey_5-rgb), 1)}.button_stroke_secondary{border-color:#0abe65;border-color:rgba(var(--pv-color-secondary-rgb), 1)}.button_stroke_primary{border-color:#0680ff;border-color:rgba(var(--pv-color-primary-rgb), 1)}.button_stroke_attention{border-color:#f7a831;border-color:rgba(var(--pv-color-attention-rgb), 1)}.button_stroke_footer{border-color:#40484f;border-color:rgba(var(--pv-color-footer-rgb), 1)}.button_stroke_footer-text{border-color:white;border-color:rgba(var(--pv-color-footer-text-rgb), 1)}.button_small{--pv-button-height:30px;--pv-button-padding-end:12px;--pv-button-padding-start:12px}.button_label{-webkit-transition:opacity 200ms;transition:opacity 200ms}.button:hover .button_label{opacity:0.7}::slotted([slot=icon]){margin-right:3px;display:inline-block;vertical-align:middle;width:24px;height:24px;margin-top:-3px}';const c=class{constructor(r){o(this,r)}render(){return r("slot",null)}};c.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}peculiar-fortify-button-group{display:inline-block}peculiar-fortify-button:not(:first-child){margin-left:10px}";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the BSD 3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
const n=o=>r("svg",Object.assign({},o,{width:"78",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),r("g",{"clip-path":"url(#fortify_logo_full-clip_0)",fill:"none"},r("path",{d:"M7.012 15.099s.413-4.109.447-4.798a1.762 1.762 0 01-.913-1.549c0-.973.78-1.76 1.74-1.76.962 0 1.74.787 1.74 1.76 0 .671-.371 1.256-.917 1.552.035.683.451 4.794.451 4.794H7.012zm8.525-12.05l-.175-.002-.105-.002A10.15 10.15 0 018.287 0 10.137 10.137 0 01.05 3L0 3.003v5.079c0 5.685 3.287 10.593 8.043 12.882l.118.056a.317.317 0 00.247 0c4.823-2.264 8.165-7.205 8.165-12.938V3.005l-.07-.001c-.317.03-.64.047-.966.047v-.002z",fill:"url(#fortify_logo_full-paint_linear_0)"}),r("path",{"clip-rule":"evenodd",d:"M7.28 10.399a1.94 1.94 0 01-.906-1.647c0-1.07.856-1.936 1.912-1.936 1.057 0 1.913.866 1.913 1.936 0 .682-.352 1.301-.911 1.65.024.348.096 1.138.203 2.233l.015.158c.048.51.102 1.049.155 1.58l.053.513.019.193.02.193H6.82l.02-.194.019-.192.05-.511.155-1.578.016-.165c.105-1.096.176-1.885.2-2.236v.003zM.052 3.178v-.002h.003-.003v.002zm.12.01v4.893c0 5.49 3.133 10.408 7.945 12.725l.105.05a.168.168 0 00.114.006c4.877-2.291 8.064-7.243 8.064-12.78V3.188c-.29.024-.577.036-.863.036l-.133-.001h-.044c-.026-.002-.026-.002-.053-.002h-.055A10.314 10.314 0 018.286.245a10.298 10.298 0 01-7.25 2.98c-.083 0-.167 0-.256-.004a10.753 10.753 0 01-.607-.033v0z",stroke:"url(#fortify_logo_full-paint_linear_1)","stroke-width":".5"})),r("path",{d:"M31.942 3.836v1.512c-1.57-.131-2.355.526-2.355 2.039v.263h2.355v1.446h-2.355v7.365h-1.505V9.096h-1.439V7.65h1.44v-.263c0-1.184.326-2.104.98-2.696.655-.658 1.636-.92 2.879-.855zM41.034 8.767c-.916-.92-2.028-1.38-3.27-1.38-1.244 0-2.421.46-3.271 1.38-.916.921-1.374 2.039-1.374 3.288 0 1.25.458 2.433 1.374 3.288.915.92 2.027 1.38 3.27 1.38 1.243 0 2.42-.46 3.27-1.38.917-.92 1.374-2.039 1.374-3.288 0-1.315-.457-2.367-1.373-3.288zm-1.112 5.59a3.107 3.107 0 01-2.224.92c-.85 0-1.636-.329-2.224-.92a3.14 3.14 0 01-.916-2.236c0-.92.327-1.644.916-2.236.589-.592 1.308-.92 2.224-.92.85 0 1.635.328 2.224.92a3.14 3.14 0 01.916 2.236c0 .855-.328 1.578-.916 2.236zM46.267 7.65v1.446c.523-1.118 1.439-1.644 2.747-1.644v1.644c-.785-.066-1.374.197-1.962.592-.524.46-.785 1.118-.785 2.104v4.734h-1.505V7.65h1.505zM56.21 7.65v1.446h-2.355v4.8c0 .46.065.723.261.92.196.198.458.264.785.264h1.308v1.38c-1.373.198-2.354.066-2.943-.328-.589-.395-.916-1.118-.916-2.236v-4.8h-1.766V7.65h1.766V5.61l1.505-.46V7.65h2.354zM59.087 6.006c-.327 0-.523-.132-.719-.329-.196-.197-.327-.46-.327-.723 0-.263.13-.526.327-.724.196-.197.458-.328.72-.328.261 0 .523.131.719.328.196.198.327.46.327.724 0 .263-.13.526-.327.723-.196.263-.393.329-.72.329zM59.872 7.65h-1.504v8.876h1.504V7.65zM67.133 3.836v1.512c-1.57-.131-2.355.526-2.355 2.039v.263h2.355v1.446h-2.355v7.365h-1.504V9.096h-1.44V7.65h1.44v-.263c0-1.184.327-2.105.98-2.696.72-.658 1.702-.92 2.88-.855zM73.085 14.62l2.552-6.97h1.635l-3.598 9.402c-.392.987-.916 1.776-1.57 2.302s-1.439.789-2.355.723V18.63c1.113.066 1.898-.526 2.355-1.84l.131-.33-3.794-8.81h1.636l3.008 6.97z",fill:"currentColor"}),r("defs",null,r("linearGradient",{id:"fortify_logo_full-paint_linear_0",x1:"8.286",y1:"0",x2:"8.286",y2:"21.044",gradientUnits:"userSpaceOnUse"},r("stop",{"stop-color":"#4DA3FC"}),r("stop",{offset:"1","stop-color":"#027EFF"})),r("linearGradient",{id:"fortify_logo_full-paint_linear_1",x1:"8.226",y1:"20.869",x2:"8.226",y2:".246",gradientUnits:"userSpaceOnUse"},r("stop",{"stop-color":"#49A1FC"}),r("stop",{offset:"1","stop-color":"#0680FF"})),r("clipPath",{id:"fortify_logo_full-clip_0"},r("path",{d:"M0 0h16.573v21.044H0V0z",fill:"#fff"})))),s=class{constructor(r){o(this,r)}render(){return r("peculiar-fortify-box",{fill:"footer",class:"footer"},r("peculiar-fortify-typography",{color:"inherit",type:"c1"},l("copyright")),r("a",{href:"https://fortifyapp.com/",target:"_blank",rel:"noopener noreferrer",class:"link"},r(n,{class:"logo"})))}};s.style=":host{-webkit-box-sizing:border-box;box-sizing:border-box}:host *,:host *:before,:host *:after{-webkit-box-sizing:inherit;box-sizing:inherit}:host{height:45px;display:block;font-size:0;border-radius:0 0 3px 3px;overflow:hidden;color:white;color:rgba(var(--pv-color-footer-text-rgb), 1)}.footer{padding:13px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;width:100%;height:100%}.link{color:inherit}.logo{height:22px;width:78px;display:block}";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the BSD 3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */
const b=o=>r("svg",Object.assign({},o,{width:"30",height:"38",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),r("g",{"clip-path":"url(#fortify_logo-clip_0)"},r("path",{d:"M12.694 27.19s.747-7.399.808-8.64a3.17 3.17 0 01-1.652-2.79A3.16 3.16 0 0115 12.59a3.16 3.16 0 013.15 3.17 3.171 3.171 0 01-1.66 2.795c.063 1.23.816 8.633.816 8.633h-4.612v.002zm15.431-21.7c-.155 0-.235-.002-.316-.003l-.192-.004A18.418 18.418 0 0115 0C11.648 3.392 7.005 5.49 1.875 5.49a18.23 18.23 0 01-.829-.018 16.832 16.832 0 01-.954-.068L0 5.406v9.146a25.686 25.686 0 0014.56 23.197l.213.101a.629.629 0 00.227.045.579.579 0 00.22-.043A25.683 25.683 0 0030 14.552v-9.14c-.043 0-.084 0-.125-.003-.575.055-1.16.084-1.75.084v-.002z",fill:"url(#fortify_logo-paint_linear_0)"}),r("path",{"clip-rule":"evenodd",d:"M13.179 18.726a3.488 3.488 0 01-1.642-2.966c0-1.926 1.55-3.486 3.463-3.486s3.462 1.56 3.462 3.486a3.492 3.492 0 01-1.65 2.971c.046.628.175 2.05.368 4.022.012.143.012.143.027.285.088.919.185 1.888.282 2.845l.095.922.035.35.035.346h-5.306l.034-.348.036-.348.092-.92c.095-.955.19-1.923.279-2.841.016-.148.016-.148.03-.297.19-1.973.318-3.394.362-4.026l-.002.005zM.094 5.722V5.72H.1.094v.002zm.218.019v8.812c0 9.887 5.67 18.741 14.382 22.914l.19.09a.334.334 0 00.206.01c8.829-4.125 14.598-13.042 14.598-23.014v-8.81c-.525.043-1.046.065-1.563.065-.091 0-.142 0-.24-.003h-.08c-.047-.002-.047-.002-.096-.002l-.1-.003A18.718 18.718 0 0115 .442 18.691 18.691 0 011.875 5.808c-.15 0-.302 0-.462-.006a18.799 18.799 0 01-1.1-.06v-.001z",stroke:"url(#fortify_logo-paint_linear_1)","stroke-width":".5"})),r("defs",null,r("linearGradient",{id:"fortify_logo-paint_linear_0",x1:"15",y1:"0",x2:"15",y2:"37.895",gradientUnits:"userSpaceOnUse"},r("stop",{"stop-color":"#4DA3FC"}),r("stop",{offset:"1","stop-color":"#027EFF"})),r("linearGradient",{id:"fortify_logo-paint_linear_1",x1:"14.891",y1:"37.58",x2:"14.891",y2:".442",gradientUnits:"userSpaceOnUse"},r("stop",{"stop-color":"#49A1FC"}),r("stop",{offset:"1","stop-color":"#0680FF"})),r("clipPath",{id:"fortify_logo-clip_0"},r("path",{d:"M0 0h30v37.895H0V0z",fill:"#fff"})))),g=class{constructor(r){o(this,r),this.type="page"}render(){let o=null;switch(this.type){case"dialog":o=[r("div",{class:"content_dialog"},r("peculiar-fortify-typography",{type:"h4"},this.titleValue),r("div",{class:"dialog_content"},this.slotDialogContent)),r("div",{class:"buttons_container m_around"},r("slot",null))];break;case"message":o=[r("div",{class:"content_message"},r(b,{class:"logo"}),this.slotTitleAbove,r("peculiar-fortify-typography",{type:"h4",align:"center"},this.titleValue),this.slotTitleBelow,r("peculiar-fortify-typography",{color:"grey_4",align:"center",class:"description"},this.descriptionValue)),r("peculiar-fortify-button-group",{class:"buttons_container"},r("slot",null))];break;default:o=[r("peculiar-fortify-box",{fill:"light",class:"content_page"},r("slot",null)),r("peculiar-fortify-footer",{class:"footer"})]}return r(t,null,o)}};g.style=".sc-peculiar-fortify-layout-h{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-peculiar-fortify-layout-h *.sc-peculiar-fortify-layout,.sc-peculiar-fortify-layout-h *.sc-peculiar-fortify-layout:before,.sc-peculiar-fortify-layout-h *.sc-peculiar-fortify-layout:after{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-peculiar-fortify-layout-h{display:block;height:100%;width:100%}[type=page].sc-peculiar-fortify-layout-h{min-width:300px}[hide-footer].sc-peculiar-fortify-layout-h .content_page.sc-peculiar-fortify-layout{height:100%}[hide-footer].sc-peculiar-fortify-layout-h .footer.sc-peculiar-fortify-layout{display:none}.content_message.sc-peculiar-fortify-layout{height:calc(100% - 68px);padding-top:34px}.content_dialog.sc-peculiar-fortify-layout{height:calc(100% - 68px);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.content_page.sc-peculiar-fortify-layout{overflow:hidden;border-radius:3px 3px 0 0;padding:34px 50px 46px;position:relative;height:calc(100% - 45px)}.buttons_container.sc-peculiar-fortify-layout{text-align:center;margin-top:28px;height:40px;display:block}.buttons_container.m_around.sc-peculiar-fortify-layout{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.logo.sc-peculiar-fortify-layout{display:block;height:38px;width:30px;margin:0 auto 40px}.dialog_content.sc-peculiar-fortify-layout{min-height:300px;overflow:auto;margin-top:28px;-ms-flex:1;flex:1}.description.sc-peculiar-fortify-layout{margin-top:25px}";export{a as peculiar_fortify_box,i as peculiar_fortify_button,c as peculiar_fortify_button_group,s as peculiar_fortify_footer,g as peculiar_fortify_layout}