(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-after_sale-index"],{"1b2e":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("6b54"),i("87b3"),i("ac6a");var s=a(i("ef70")),n={data:function(){return{type_list:[{value:"1",name:"仅退款",checked:!0,disabled:!1},{value:"2",name:"退货退款",checked:!1,disabled:!1}],order_id:"",items:[],item_ids:[],aftersale_type:1,refund:0,refund_show:0,images:[],reason:"",image_max:5,refund_input_noedit:!0,mode:"aspectFill",submitStatus:!1}},components:{jhlable:s.default},computed:{isImage:function(){var t=this.image_max-this.images.length;return t>0}},methods:{radioChange:function(t){var e=this;this.type_list.forEach(function(i){i.value===t.target.value?(i.checked=!0,e.aftersale_type=t.target.value):i.checked=!1}),this.type_list[0].checked?this.refund_input_noedit=!0:this.refund_input_noedit=!1},getOrderInfo:function(){var t=this,e={order_id:this.order_id};this.$api.afterSalesStatus(e,function(e){if(e.status)if(1!=e.data.text_status&&6!=e.data.text_status&&7!=e.data.text_status){var i=t.type_list;2==e.data.text_status&&(i[1].disabled=!0);for(var a=0,s=0;s<e.data.items.length;s++)e.data.items[s].id=e.data.items[s].id.toString(),a=e.data.items[s].nums,e.data.items[s].checked=!0,t.item_ids=t.item_ids.concat({id:e.data.items[s].id,nums:a});t.items=e.data.items,t.refund=e.data.payed-e.data.refunded,t.refund_show=e.data.payed-e.data.refunded,t.type_list=i}else t.$common.errorToBack("订单不可以进行售后");else t.$common.errorToBack("没有找到此订单")})},checkboxChange:function(t){var e=0;this.item_ids=[];for(var i=0;i<t.detail.value.length;i++)for(var a=t.detail.value[i],s=0;s<this.items.length;s++)this.items[s].id==a&&this.items[s].sendnums>this.items[s].reship_nums&&(e=this.items[s].sendnums-this.items[s].reship_nums,this.item_ids=this.item_ids.concat({id:a,nums:e}))},submit:function(t){var e=this;this.submitStatus=!0;for(var i=[],a=0;a<this.images.length;a++)i=i.concat(this.images[a].image_id);var s=/^[0-9]+(.[0-9]{1,2})?$/;if(!s.test(this.refund))return this.$common.errorToShow("请输入正确金额"),this.submitStatus=!1,!1;if(this.refund>this.refund_show)return this.$common.errorToShow("退款金额过大"),this.submitStatus=!1,!1;var n={order_id:this.order_id,type:this.aftersale_type,items:this.item_ids,images:i,refund:this.refund,reason:this.reason};this.$api.addAfterSales(n,function(t){t.status?e.$common.successToShow("提交成功",function(t){e.submitStatus=!1,uni.navigateBack({delta:1})}):(e.$common.errorToShow(t.msg),e.submitStatus=!1)})},upImage:function(){var t=this,e=this.image_max-this.images.length;e>0&&this.$api.uploadImage(e,function(e){e.status?(t.images.push(e.data),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)})},delImage:function(t){for(var e=[],i=0;i<this.images.length;i++)this.images[i].image_id!=t.image_id&&e.push(this.images[i]);this.images=e},clickImg:function(t){uni.previewImage({urls:t.split()})}},onLoad:function(t){this.order_id=t.order_id,this.getOrderInfo()}};e.default=n},5292:function(t,e,i){"use strict";i.r(e);var a=i("1b2e"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"556e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){e=t.$handleEvent(e),t.submit(e)}}},[i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"img-list cart-list"},[i("v-uni-checkbox-group",{staticClass:"cart-checkbox",on:{change:function(e){e=t.$handleEvent(e),t.checkboxChange(e)}}},t._l(t.items,function(e,a){return i("v-uni-view",{key:a,staticClass:"cart-checkbox-item"},[i("v-uni-label",{staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"cart-checkbox-c"},[i("v-uni-checkbox",{attrs:{value:e.id,checked:e.checked,color:"#FF7159"}})],1),i("v-uni-view",{staticClass:"img-list-item"},[i("v-uni-image",{staticClass:"img-list-item-l little-img have-none",attrs:{src:e.image_url,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"img-list-item-r little-right"},[i("v-uni-view",{staticClass:"little-right-t"},[i("v-uni-view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"goods-item-c"},[i("v-uni-view",{staticClass:"goods-buy"},[i("v-uni-view",{staticClass:"goods-salesvolume"},[t._v(t._s(e.addon)+" x"+t._s(e.nums))])],1)],1)],1)],1)],1)],1)}),1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("服务类型")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-view",{staticClass:"uni-form-item uni-column invoice-type"},[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){e=t.$handleEvent(e),t.radioChange(e)}}},t._l(t.type_list,function(e,a){return i("v-uni-label",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"invoice-type-icon"},[i("v-uni-radio",{staticClass:"a-radio",attrs:{id:e.name,value:e.value,checked:e.checked,disabled:e.disabled}})],1),i("v-uni-view",{staticClass:"invoice-type-c"},[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:e.name}},[i("v-uni-text",[t._v(t._s(e.name))])],1)],1)],1)}),1)],1)],1)],1),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("退款金额")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-input",{staticClass:"cell-bd-input red-price",attrs:{disabled:t.refund_input_noedit},model:{value:t.refund,callback:function(e){t.refund=e},expression:"refund"}})],1)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("上传凭证")])],1)],1),i("v-uni-view",{},[i("v-uni-view",{staticClass:"evaluate-c-b"},[t._l(t.images,function(e,a){return i("v-uni-view",{key:a,staticClass:"goods-img-item"},[i("v-uni-image",{staticClass:"del",attrs:{src:"../../../static/image/del.png",mode:""},on:{click:function(i){i=t.$handleEvent(i),t.delImage(e)}}}),i("v-uni-image",{attrs:{src:e.url,mode:""},on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e.url)}}})],1)}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.isImage,expression:"isImage"}],staticClass:"upload-img",on:{click:function(e){e=t.$handleEvent(e),t.upImage(e)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/camera.png",mode:""}}),i("v-uni-view",{},[t._v("上传照片")])],1)],2)],1)],1),i("v-uni-view",{staticClass:"cell-group margin-cell-group"},[i("v-uni-view",{staticClass:"cell-item right-img"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("问题描述")])],1)],1),i("v-uni-view",{staticClass:"cell-textarea "},[i("v-uni-textarea",{attrs:{placeholder:"请您在此描述问题(最多200字)",maxlength:"200"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1)],1)],1),i("v-uni-view",{staticClass:"button-bottom"},[i("v-uni-button",{staticClass:"btn btn-b btn-square",attrs:{formType:"submit",disabled:t.submitStatus,loading:t.submitStatus}},[t._v("提交")])],1)],1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},6190:function(t,e,i){"use strict";i.r(e);var a=i("cba7"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},a194:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-radio-group",{staticClass:"uni-list",on:{change:function(e){e=t.$handleEvent(e),t.radioChange(e)}}},t._l(t.type_list,function(e,a){return i("v-uni-label",{key:a,staticClass:"uni-list-cell uni-list-cell-pd"},[i("v-uni-view",{staticClass:"invoice-type-icon"},[i("v-uni-radio",{staticClass:"a-radio",attrs:{id:e.name,value:e.value,checked:e.checked,disabled:e.disabled}})],1),i("v-uni-view",{staticClass:"invoice-type-c"},[i("v-uni-label",{staticClass:"label-2-text",attrs:{for:e.name}},[i("v-uni-text",[t._v(t._s(e.name))])],1)],1)],1)}),1)],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},cba7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a");var a={data:function(){return{type_list:[{value:"1",name:"仅退款",checked:!0,disabled:!1},{value:"2",name:"退货退款",checked:!1,disabled:!1}]}},methods:{radioChange:function(t){var e=this;this.type_list.forEach(function(i){i.value===t.target.value?(i.checked=!0,e.aftersale_type=t.target.value):i.checked=!1}),this.type_list[0].checked?this.refund_input_noedit=!0:this.refund_input_noedit=!1}}};e.default=a},e0b8:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".list-goods-name[data-v-48e5a41a]{width:100%!important}.cart-checkbox-item[data-v-48e5a41a]{position:relative}.invoice-type .uni-list-cell[data-v-48e5a41a]{display:inline-block;font-size:%?26?%;color:#333;position:relative;margin-left:%?50?%}.invoice-type .uni-list-cell>uni-view[data-v-48e5a41a]{display:inline-block}.invoice-type-icon[data-v-48e5a41a]{position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.invoice-type-c[data-v-48e5a41a]{margin-left:%?50?%;line-height:2}.cell-item-ft .cell-bd-input[data-v-48e5a41a]{text-align:right;width:%?500?%;font-size:%?28?%}.right-img[data-v-48e5a41a]{border-bottom:0}.cell-textarea[data-v-48e5a41a]{padding:0 %?26?% %?20?%}.cell-textarea uni-textarea[data-v-48e5a41a]{width:100%;height:%?200?%;font-size:%?26?%;color:#333}.evaluate-c-b[data-v-48e5a41a]{overflow:hidden;padding:0 %?20?%}.upload-img[data-v-48e5a41a]{width:%?146?%;height:%?146?%;margin:%?14?%;text-align:center;color:#999;font-size:%?22?%;border:%?2?% solid #e1e1e1;border-radius:%?4?%;display:inline-block;float:left;padding:%?24?% 0}.goods-img-item[data-v-48e5a41a]{width:%?174?%;height:%?174?%;padding:%?14?%;float:left;position:relative}.goods-img-item[data-v-48e5a41a]:nth-child(4n){margin-right:0}.goods-img-item uni-image[data-v-48e5a41a]{width:100%;height:100%}.del[data-v-48e5a41a]{width:%?30?%!important;height:%?30?%!important;position:absolute;right:0;top:0;z-index:999}\n",""])},e71e:function(t,e,i){var a=i("e0b8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("49f1e0ec",a,!0,{sourceMap:!1,shadowMode:!1})},ed1e:function(t,e,i){"use strict";var a=i("e71e"),s=i.n(a);s.a},ef70:function(t,e,i){"use strict";i.r(e);var a=i("a194"),s=i("6190");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var l=i("2877"),c=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"3411b31c",null);e["default"]=c.exports},f1da:function(t,e,i){"use strict";i.r(e);var a=i("556e"),s=i("5292");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("ed1e");var l=i("2877"),c=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"48e5a41a",null);e["default"]=c.exports}}]);