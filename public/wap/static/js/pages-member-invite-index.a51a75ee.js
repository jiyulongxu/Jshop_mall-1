(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-invite-index"],{"335c4":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-image",{staticClass:"invite-bg",attrs:{src:"../../../static/image/invite-bg.png",mode:""}}),e("v-uni-view",{staticClass:"invite-c"},[e("v-uni-view",{staticClass:"invite-w"},[e("v-uni-view",{staticClass:"invite-w-t"},[t._v("我的专属邀请码")]),e("v-uni-text",{staticClass:"invite-w-num"},[t._v(t._s(t.code))]),e("v-uni-view",{staticClass:"invite-w-detail"},[t._v("快去分享您的邀请码吧，让更多的好友加入到【"+t._s(t.appTitle)+"】，您也可以获得丰厚的奖励！")]),e("v-uni-view",{staticClass:"invite-w-bot"},[e("v-uni-view",{attrs:{bindtap:"commission"},on:{click:function(i){i=t.$handleEvent(i),t.toMoney(i)}}},[e("v-uni-image",{staticClass:"invite-w-bot-ic",attrs:{src:"../../../static/image/ic-earnings.png"}}),e("v-uni-text",{staticClass:"invite-w-bot-red"},[t._v("￥"+t._s(t.money)+"元")]),e("v-uni-text",{staticClass:"invite-w-bot-gray"},[t._v("邀请收益")])],1),e("v-uni-view",{attrs:{bindtap:"recommendlist"},on:{click:function(i){i=t.$handleEvent(i),t.toList(i)}}},[e("v-uni-image",{staticClass:"invite-w-bot-ic",attrs:{src:"../../../static/image/ic-number.png"}}),e("v-uni-text",{staticClass:"invite-w-bot-red"},[t._v(t._s(t.number)+"人")]),e("v-uni-text",{staticClass:"invite-w-bot-gray"},[t._v("邀请人数")])],1)],1)],1),t.is_superior?t._e():e("v-uni-view",{staticClass:"invite-w"},[e("v-uni-text",{staticClass:"invite-w-t-blue"},[t._v("谁推荐你的？")]),e("v-uni-input",{staticClass:"invite-w-input",attrs:{placeholder:"请输入推荐人邀请码"},model:{value:t.inviteKey,callback:function(i){t.inviteKey=i},expression:"inviteKey"}}),e("v-uni-view",{staticClass:"invite-w-btn",on:{click:function(i){i=t.$handleEvent(i),t.setMyInvite(i)}}},[t._v("提交")])],1),e("v-uni-view",{staticClass:"invite-btn"},[e("v-uni-button",{staticClass:"share btn",on:{click:function(i){i=t.$handleEvent(i),t.createPoster()}}},[e("v-uni-image",{attrs:{src:"../../../static/image/ic-img.png"}})],1)],1)],1)],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"4d35":function(t,i,e){var a=e("6430");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("26b224ef",a,!0,{sourceMap:!1,shadowMode:!1})},6430:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".invite[data-v-cef15f76]{width:100%;height:100%;background:-webkit-gradient(linear,left top,right top,from(#4c21d2),to(#4864f8));background:-o-linear-gradient(left,#4c21d2,#4864f8);background:linear-gradient(90deg,#4c21d2,#4864f8)}.invite-bg[data-v-cef15f76]{position:absolute;width:%?750?%;height:%?683?%;z-index:66}.invite-c[data-v-cef15f76]{position:relative;z-index:67;width:%?750?%;padding:0 %?30?%;top:%?488?%;background:-webkit-gradient(linear,left top,right top,from(#4c21d2),to(#4864f8));background:-o-linear-gradient(left,#4c21d2,#4864f8);background:linear-gradient(90deg,#4c21d2,#4864f8)}.invite-w[data-v-cef15f76]{background-color:#fff;width:%?690?%;text-align:center;padding:%?40?% %?100?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?30?%;margin-bottom:%?70?%;position:relative;top:%?-148?%}.invite-w-t[data-v-cef15f76]{width:70%;margin:0 auto;color:#fff;border-radius:%?50?%;font-size:%?30?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?10?%;display:block;background:-webkit-gradient(linear,left top,right top,from(#5f2ef6),to(#b945dd));background:-o-linear-gradient(left,#5f2ef6,#b945dd);background:linear-gradient(90deg,#5f2ef6,#b945dd)}.invite-w-num[data-v-cef15f76]{color:#5f2ef6;display:block;font-size:%?36?%;margin-top:%?20?%}.invite-w-detail[data-v-cef15f76]{color:#666;font-size:%?24?%;line-height:1.5;margin-top:%?20?%}.invite-w-bot[data-v-cef15f76]{margin:%?20?% 0 %?50?%}.invite-w-bot>uni-view[data-v-cef15f76]{width:49%;display:inline-block}.invite-w-bot-ic[data-v-cef15f76]{width:%?48?%;height:%?48?%}.invite-w-bot-red[data-v-cef15f76]{font-size:%?24?%;color:#ca0400;display:block}.invite-w-bot-gray[data-v-cef15f76]{font-size:%?24?%;color:#acacac;display:block}.invite-w-t-blue[data-v-cef15f76]{color:#348dfc;font-size:%?30?%;margin-bottom:%?50?%;display:block}.invite-w-input[data-v-cef15f76]{font-size:%?30?%;border-bottom:1px solid #dadada;margin-bottom:%?50?%;color:#999}.invite-w-btn[data-v-cef15f76]{background:-webkit-gradient(linear,left top,right top,from(#4a6af9),to(#28c4ff));background:-o-linear-gradient(left,#4a6af9,#28c4ff);background:linear-gradient(90deg,#4a6af9,#28c4ff);color:#fff;width:50%;margin:0 auto;border-radius:%?50?%;font-size:%?30?%;padding:%?10?% 0}.invite-btn[data-v-cef15f76]{position:relative;top:%?-150?%;text-align:center;width:%?690?%}.share[data-v-cef15f76]{background-color:none;position:relative;width:%?98?%;height:%?98?%;display:inline-block;border-radius:50%;padding:0;margin:0 %?40?% %?40?%}.invite-btn uni-image[data-v-cef15f76]{width:%?98?%;height:%?98?%}",""])},6779:function(t,i,e){"use strict";var a=e("4d35"),n=e.n(a);n.a},a935:function(t,i,e){"use strict";e.r(i);var a=e("335c4"),n=e("b8a6");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("6779");var r=e("2877"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"cef15f76",null);i["default"]=s.exports},b8a6:function(t,i,e){"use strict";e.r(i);var a=e("d316"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},d316:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("52b4"),n={data:function(){return{myShareCode:"",code:"",money:0,number:0,is_superior:!1,inviteKey:"",imageUrl:"/static/image/share_image.png"}},computed:{appTitle:function(){return this.$store.state.config.shop_name}},onShow:function(){this.getInviteData(),this.getMyShareCode()},methods:{getInviteData:function(){var t=this;this.$api.myInvite(function(i){t.code=i.data.code,t.money=i.data.money,t.number=i.data.number,t.is_superior=i.data.is_superior})},toMoney:function(){this.$common.navigateTo("../balance/details?status=5")},toList:function(){this.$common.navigateTo("./list")},setMyInvite:function(){var t=this,i={code:this.inviteKey};this.$api.setMyInvite(i,function(i){i.status?(t.$common.successToShow("邀请码填写成功"),t.is_superior=!0):t.$common.errorToShow(i.msg)})},createPoster:function(){var t=this,i={type:2},e=getCurrentPages(),n=(e[e.length-1],"/pages/share/jump");i.source=1,i.return_url=a.apiBaseUrl+"wap/#"+n;var o=this.$db.get("userToken");o&&(i.token=o),this.$api.createPoster(i,function(i){i.status?t.$common.navigateTo("/pages/share?poster="+i.data):t.$common.errorToShow(i.msg)})},getMyShareCode:function(){var t=this,i=this.$db.get("userToken");i&&""!=i&&this.$api.shareCode({},function(i){i.status&&(t.myShareCode=i.data?i.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",i=this.$common.shareParameterDecode("type=3&invite="+t),e="/pages/share/jump?scene="+i;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:e}}};i.default=n}}]);