import{h as e,r,H as t}from"./p-ccfcf823.js";import{I as i}from"./p-4cc50b31.js";
/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the BSD 3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */const s=r=>e("svg",Object.assign({},r,{width:"10",height:"10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.71 3.124a1 1 0 01.763 1.644L5.77 6.794a1 1 0 01-1.53 0L2.53 4.764a1 1 0 01.766-1.643l3.412.003z",fill:"#C4C8CC"})),o=class{constructor(e){r(this,e),this.handleChange=e=>{const r=e.target;r&&this.ponChange&&this.ponChange(e,r.value,r.name,this.isValueValid())}}componentDidLoad(){this.ponDidLoad&&this.ponDidLoad(this.nativeSelect,this.nativeSelect.value,this.nativeSelect.name,this.isValueValid())}isValueValid(e=this.nativeSelect){return!(e.required&&!e.value)}renderIconRequired(){return this.required?e(i,{class:"icon_required"}):null}static renderIconArrowDown(){return e(s,{class:"icon_arrow_down"})}render(){return e(t,null,e("label",null,e("peculiar-fortify-typography",{type:"c1",color:"grey_4",class:"label"},this.label),e("div",{class:"select_container"},e("select",{ref:e=>{this.nativeSelect=e},name:this.name,disabled:this.disabled,required:this.required,class:{select:!0},onChange:this.handleChange},this.options.map(r=>e("option",{key:r.value,value:r.value},r.name))),this.renderIconRequired(),o.renderIconArrowDown())))}};o.style='.sc-peculiar-fortify-select-h{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-peculiar-fortify-select-h *.sc-peculiar-fortify-select,.sc-peculiar-fortify-select-h *.sc-peculiar-fortify-select:before,.sc-peculiar-fortify-select-h *.sc-peculiar-fortify-select:after{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-peculiar-fortify-select-h{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[disabled].sc-peculiar-fortify-select-h *.sc-peculiar-fortify-select{cursor:not-allowed}[disabled].sc-peculiar-fortify-select-h{opacity:0.7}.select.sc-peculiar-fortify-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-style:solid;border-radius:3px;padding:0 26px 0 10px;height:30px;width:100%;font-family:"Open Sans", "Arial", sans-serif;font-family:var(--pv-font-family);font-size:11px;font-size:var(--pv-font-size-c1);border-color:#e1e4e6;border-color:rgba(var(--pv-color-grey_3-rgb), 1);color:#40484f;color:rgba(var(--pv-color-dark-rgb), 1)}.select_container.sc-peculiar-fortify-select{position:relative}.icon_required.sc-peculiar-fortify-select{position:absolute;top:2px;right:2px;pointer-events:none;display:block;width:6px;height:6px}.icon_arrow_down.sc-peculiar-fortify-select{position:absolute;right:8px;pointer-events:none;display:block;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:10px;height:10px}.label.sc-peculiar-fortify-select{margin-bottom:6px}';export{o as peculiar_fortify_select}