(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-share-jump"],{"0e9c":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view")},n=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n})},b36f:function(e,t,o){"use strict";o.r(t);var i=o("0e9c"),n=o("cc9f");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);var r=o("2877"),a=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},cc9f:function(e,t,o){"use strict";o.r(t);var i=o("fcfb"),n=o.n(i);for(var s in i)"default"!==s&&function(e){o.d(t,e,function(){return i[e]})}(s);t["default"]=n.a},fcfb:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("28a5");var i={data:function(){return{}},onLoad:function(e){for(var t=this.$common.shareParameterEncode(e.scene),o=t.split("&"),i="",n="",s="",r="",a="",c="",d="",u=0;u<o.length;u++){var f=o[u].split("=")[0];"type"==f&&(i=o[u].split("=")[1]),"invite"==f&&(n=o[u].split("=")[1]),"page_code"==f&&(s=o[u].split("=")[1]),"id"==f&&(r=o[u].split("=")[1]),"id_type"==f&&(a=o[u].split("=")[1]),"group_id"==f&&(c=o[u].split("=")[1]),"team_id"==f&&(d=o[u].split("=")[1])}switch(this.saveInviteCode(n),i){case"1":this.gotoIndex();break;case"2":this.gotoGoods(r);break;case"3":this.gotoIndex();break;case"4":this.gotoArticle(r,a);break;case"5":this.gotoPinTuan(r,d);break;case"6":this.gotoGroup(r,c);break;case"7":break;case"8":this.gotoCustom(s);break;case"9":this.gotoStore(r);break;case"10":this.gotoForm(r);break;default:this.gotoIndex();break}},methods:{saveInviteCode:function(e){e&&""!=e&&this.$db.set("invitecode",e)},gotoIndex:function(){uni.switchTab({url:"/pages/index/index"})},gotoGoods:function(e){if(e&&""!=e){var t="/pages/goods/index/index?id="+e;this.$common.redirectTo(t)}else this.gotoIndex()},gotoArticle:function(e,t){if(e&&""!=e){var o="/pages/article/index?id="+e+"&id_type="+t;this.$common.redirectTo(o)}else this.gotoIndex()},gotoPinTuan:function(e,t){if(e&&""!=e){var o="/pages/goods/index/pintuan?id="+e+"&team_id="+t;this.$common.redirectTo(o)}else this.gotoIndex()},gotoGroup:function(e,t){if(e&&""!=e){var o="/pages/goods/index/group?id="+e+"&group_id="+t;this.$common.redirectTo(o)}else this.gotoIndex()},gotoCustom:function(e){if(e&&""!=e){var t="/pages/index/custom?page_code="+e;this.$common.redirectTo(t)}else this.gotoIndex()},gotoStore:function(e){if(e&&""!=e){var t="/pages/member/distribution/my_store?store="+e;this.$common.redirectTo(t)}else this.gotoIndex()},gotoForm:function(e){if(e&&""!=e){var t="/pages/form/detail/form?id="+e;this.$common.redirectTo(t)}else this.gotoIndex()}}};t.default=i}}]);