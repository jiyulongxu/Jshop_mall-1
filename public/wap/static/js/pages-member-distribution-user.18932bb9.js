(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-user"],{1625:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cpr"},[i("v-uni-view",{staticClass:"color-9"},[e._v("吉海科技 © jihainet.com")]),i("v-uni-view",{staticClass:"color-9"},[e._v("版权所有")])],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"35bc":function(e,t,i){"use strict";i.r(t);var n=i("46c5"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"46c5":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("87c5")),o=i("9afa"),s=i("52b4"),r={components:{jihaiCopyright:a.default},mixins:[o.checkLogin],data:function(){return{orderItems:{freeze:{name:"冻结金额",nums:"0"},settlement:{name:"已结算金额",nums:"0"},current_month_order:{name:"本月订单数",nums:"0"}},utilityMenus:{invite:{name:"我的邀请",icon:"../../../static/image/ic-me-invite.png",router:"../invite/list"},order:{name:"推广订单",icon:"../../../static/image/extension_order.png",router:"./order"},balance:{name:"我的佣金",icon:"../../../static/image/ic-me-balance.png",router:"../balance/details?status=5"},my_store:{name:"我的店铺",icon:"../../../static/image/my_store.png",router:"./my_store"},store_setting:{name:"店铺设置",icon:"../../../static/image/me-ic-set.png",router:"./store_setting"}},info:{}}},onShow:function(){var e=this;"1"!=e.$store.state.config.distribution_store&&(delete this.utilityMenus.my_store,delete this.utilityMenus.store_setting),e.$api.getDistributioninfo({},function(t){t.status?(e.info=t.data,1!=t.data.verify&&e.$common.redirectTo("/pages/member/distribution/index"),e.orderItems.freeze.nums=e.info.freeze_amount,e.orderItems.settlement.nums=e.info.settlement_amount,e.orderItems.current_month_order.nums=e.info.current_month_order,"1"==e.$store.state.config.distribution_store&&(e.utilityMenus.my_store.router="./my_store?store="+e.info.store)):e.$common.errorToShow(t.msg)})},methods:{navigateToHandle:function(e){this.$common.navigateTo(e)},orderNavigateHandle:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.hasLogin)return this.checkIsLogin();this.$store.commit("orderTab",t),this.$common.navigateTo(e)},goAfterSaleList:function(){if(!this.hasLogin)return this.checkIsLogin();this.$common.navigateTo("../after_sale/list")},createPoster:function(){var e=this,t={type:4,id:this.info.store},i=getCurrentPages(),n=(i[i.length-1],"/pages/share/jump");t.source=1,t.return_url=s.apiBaseUrl+"wap/#"+n;var a=this.$db.get("userToken");a&&(t.token=a),this.$api.createPoster(t,function(t){t.status?e.$common.navigateTo("/pages/share?poster="+t.data):e.$common.errorToShow(t.msg)})}},onShareAppMessage:function(){var e=this.myShareCode?this.myShareCode:"",t=this.$common.shareParameterDecode("type=3&invite="+e),i="/pages/share/jump?scene="+t;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:i}}};t.default=r},5501:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".member-top[data-v-a40de47a]{position:relative;width:100%;height:%?340?%;background-color:#ff7159}.bg-img[data-v-a40de47a]{position:absolute;width:100%;height:100%}.member-top-c[data-v-a40de47a]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.user-head-img[data-v-a40de47a]{display:block;width:%?160?%;height:%?160?%;border-radius:50%;overflow:hidden;background-color:hsla(0,0%,100%,.7)}.user-name[data-v-a40de47a]{font-size:%?30?%;color:#fff}.member-grid[data-v-a40de47a]{background-color:#fff;border-top:%?2?% solid #eee;padding:%?20?% 0}.margin-cell-group[data-v-a40de47a]{margin:%?20?% 0;color:#666}.badge[data-v-a40de47a]{left:%?80?%;top:%?-6?%}uni-button.cell-item-hd[data-v-a40de47a]{background-color:#fff;padding:0;line-height:1.4;color:#333}uni-button.cell-item-hd[data-v-a40de47a]:after{border:none}.login-btn[data-v-a40de47a]{color:#fff;width:%?160?%;height:%?50?%;line-height:%?50?%;border-radius:%?25?%;background:#ff7159;font-size:12px;margin-top:%?16?%}",""])},5768:function(e,t,i){"use strict";i.r(t);var n=i("dec6"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"60a6":function(e,t,i){"use strict";var n=i("8c3e"),a=i.n(n);a.a},"87c5":function(e,t,i){"use strict";i.r(t);var n=i("1625"),a=i("5768");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("f640");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"49262e00",null);t["default"]=r.exports},"8c3e":function(e,t,i){var n=i("5501");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1c70ce49",n,!0,{sourceMap:!1,shadowMode:!1})},9831:function(e,t,i){var n=i("d214");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("76e1b9be",n,!0,{sourceMap:!1,shadowMode:!1})},"9afa":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.checkLogin=t.jumpBackPage=t.goBack=t.goods=t.orders=void 0;var a=n(i("a4bb")),o={mounted:function(){},methods:{orderDetail:function(e){this.$common.navigateTo("/pages/member/order/orderdetail?order_id="+e)},toPay:function(e){this.$common.navigateTo("/pages/goods/payment/index?order_id="+e+"&type=1")},toEvaluate:function(e){this.$common.navigateTo("/pages/member/order/evaluate?order_id="+e)},showExpress:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=encodeURIComponent("code="+e+"&no="+t+"&add="+i);this.$common.navigateTo("/pages/member/order/express_delivery?params="+n)}}};t.orders=o;var s={mounted:function(){},methods:{goodsDetail:function(e){this.$common.navigateTo("/pages/goods/index/index?id="+e)},goodsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="/pages/classify/index";(0,a.default)(e).length&&(t=this.$common.builderUrlParams(t,e)),this.$common.navigateTo(t)},groupDetail:function(e,t){this.$common.navigateTo("/pages/goods/index/group?id="+e+"&group_id="+t)},pintuanDetail:function(e,t){t?this.$common.navigateTo("/pages/goods/index/pintuan?id="+e+"&team_id="+t):this.$common.navigateTo("/pages/goods/index/pintuan?id="+e)}}};t.goods=s;var r={onBackPress:function(e){if("navigateBack"===e.from)return!1;var t=["/pages/cart/index/index","/pages/member/index/index"],i=this.$store.state.redirectPage;return t.indexOf(i)>-1?(this.$store.commit({type:"redirect",page:""}),uni.switchTab({url:"/pages/index/index"}),!0):void 0}};t.goBack=r;var c={methods:{handleBack:function(){var e=this.$store.state.redirectPage;this.$store.commit({type:"redirect",page:""});var t=["/pages/index/index","/pages/member/index/index"];t.indexOf(e)>-1?uni.switchTab({url:e}):e?uni.redirectTo({url:e}):uni.switchTab({url:"/pages/index/index"})}}};t.jumpBackPage=c;var u={methods:{checkIsLogin:function(){uni.showToast({title:"请先登录!",icon:"none",duration:800,success:function(e){setTimeout(function(){uni.hideToast(),uni.navigateTo({url:"/pages/login/login/index1"})},800)}})}}};t.checkLogin=u},aa3c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"member-top"},[i("v-uni-view",{staticClass:"member-top-c"},[i("v-uni-view",{staticClass:"fsz50 color-f"},[e._v(e._s(e.info.total_settlement_amount))]),i("v-uni-view",{staticClass:"fsz26 color-d"},[e._v("累计收入")])],1)],1),i("v-uni-view",{staticClass:"member-grid"},e._l(e.orderItems,function(t,n){return i("v-uni-view",{key:n,staticClass:"member-item"},[i("v-uni-text",{staticClass:"member-item-text"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"color-o fsz38"},[e._v(e._s(t.nums))])],1)}),1),i("v-uni-view",{staticClass:"cell-group margin-cell-group right-img"},[e._l(e.utilityMenus,function(t,n){return i("v-uni-view",{key:n,staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(i){i=e.$handleEvent(i),e.navigateToHandle(t.router)}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:t.icon}}),i("v-uni-view",{staticClass:"cell-hd-title"},[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})],1)],1)}),i("v-uni-view",{staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd",on:{click:function(t){t=e.$handleEvent(t),e.createPoster()}}},[i("v-uni-image",{staticClass:"cell-hd-icon",attrs:{src:"../../../static/image/extension.png"}}),i("v-uni-view",{staticClass:"cell-hd-title"},[e._v("我要推广")])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})],1)],1)],2),i("jihaiCopyright")],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},b719:function(e,t,i){"use strict";i.r(t);var n=i("aa3c"),a=i("35bc");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("60a6");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"a40de47a",null);t["default"]=r.exports},d214:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".cpr[data-v-49262e00]{text-align:center;font-size:%?24?%;margin:%?20?% 0}",""])},dec6:function(e,t,i){},f640:function(e,t,i){"use strict";var n=i("9831"),a=i.n(n);a.a}}]);