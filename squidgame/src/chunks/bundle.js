System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js",[],(function(e){"use strict";return{execute:function(){function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(){return(t=e("extends",Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e})).apply(this,arguments)}function i(r,t){return(i=e("setPrototypeOf",Object.setPrototypeOf||function(e,r){return e.__proto__=r,e}))(r,t)}e({applyDecoratedDescriptor:function(e,r,t,i,n){var o={};Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},createClass:function(e,t,i){t&&r(e.prototype,t);i&&r(e,i);return e},defineProperty:function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e},extends:t,inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,i(e,r)},initializerDefineProperty:function(e,r,t,i){if(!t)return;Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})},setPrototypeOf:i})}}}));

System.register("chunks:///_virtual/MaxApiUtils2.ts",["./_rollupPluginModLoBabelHelpers.js"],(function(n){"use strict";var i;return{setters:[function(n){i=n.defineProperty}],execute:function(){var o=n("default",function(){function n(){}return n.registerScreenShot=function(n){window.MaxApi?window.MaxApi.listen("onScreenShot",(function(){n()})):n(null)},n.RegisterNoti=function(n){window.MaxApi?window.MaxApi.observer("DIS_RECEIVE_NOTI",(function(i){console.log("[DIS_RECEIVE_NOTI] "+i),n(i)})):n(null)},n.RegisterShaking=function(n){var i=this;window.MaxApi&&!this.isListeningShaking&&(this.UnRegisterShaking(),this.shakingCallback=n,window.MaxApi.registerShakeSensitivity(),window.MaxApi.listen("onShaker",(function(n){i.shakingCallback&&i.shakingCallback()})),this.isListeningShaking=!0)},n.UnRegisterShaking=function(){window.MaxApi&&this.isListeningShaking&&(window.MaxApi.unregisterShakeSensitivity(),this.isListeningShaking=!1,this.shakingCallback=null)},n.GetProfile=function(){return new Promise((function(n,i){window.MaxApi?window.MaxApi.getProfile((function(i){n(i)})):n()}))},n.UploadImage=function(n){return new Promise((function(i,o){var t={path:"base64-upload",files:n,options:{loading:!0}};window.MaxApi?window.MaxApi.uploadImage(t,(function(n){n.status;var o=n.response,t=o.url;t&&t.length>0&&t.indexOf("http")>=0?i(t):i(o)})):i(null)}))},n.GetDeviceInfo=function(){return new Promise((function(n,i){window.MaxApi?window.MaxApi.getDeviceInfo((function(i){n(i)})):n(null)}))},n.CheckHighPerformanceDevice=function(){return new Promise((function(n,i){window.MaxApi?window.MaxApi.isHighPerformanceDevice((function(i){n(i)})):n(!0)}))},n.closeGame=function(){window.MaxApi&&window.MaxApi.dismiss()},n.copyToClipboard=function(n,i){window.MaxApi&&window.MaxApi.copyToClipboard(n,i)},n.openWeb=function(n){window.MaxApi.openWeb({url:n})},n.startFeatureCode=function(n,i,o){window.MaxApi?window.MaxApi.startFeatureCode(n,i,o):o(!0)},n.checkPermission=function(n){return new Promise((function(i){window.MaxApi?window.MaxApi.checkPermission(n,(function(n){i(n)})):i("granted")}))},n.requestPermission=function(n){return new Promise((function(i){window.MaxApi?window.MaxApi.requestPermission(n,(function(n){i(n)})):i("granted")}))},n.getContacts=function(){return new Promise((function(n){if(window.MaxApi){window.MaxApi.getContacts({paramsContact:{allowNonMomo:!1,autoFocus:!0,isAllowMerchant:!1,showPopupNonMomo:!1,allowAgency:!1,allowMultipleSelection:!0},title:"MegaLuckyWheel"},(function(i){n(i)}))}else n([])}))},n.getAvatarEndPoint=function(){var n=this;return new Promise((function(i){window.MaxApi?(n.avatarEndpoint.length>0&&i(n.avatarEndpoint),window.MaxApi.getAvatarEndPoint((function(o){n.avatarEndpoint=o,i(o)}))):i("")}))},n.getContact=function(){return new Promise((function(n){window.MaxApi?window.MaxApi.getContact({},(function(i){n(i)})):n([])}))},n.goBack=function(){return new Promise((function(n){window.MaxApi?window.MaxApi.goBack((function(i){n(i)})):n("denied")}))},n.getScreenShot=function(n){window.MaxApi?window.MaxApi.getScreenShot(n):n("")},n.saveImage=function(n){return new Promise((function(i){window.MaxApi?window.MaxApi.requestPermission("storage",(function(o){"granted"===o?window.MaxApi.saveImage(n,(function(n){n?(window.MaxApi.showToast({duration:5e3,title:"Lưu hình ảnh thành công"}),i(!0)):(window.MaxApi.showToast({duration:5e3,title:"Lưu hình ảnh không thành công"}),i(!1))})):(window.MaxApi.showToast({duration:5e3,title:"Lưu hình ảnh không thành công"}),i(!1))})):i(!1)}))},n.shareFacebook=function(n,i){window.MaxApi?window.MaxApi.shareFacebook(n,i):i("")},n.facebookMsg=function(n){var i="fb-messenger://share/?link="+n;window.MaxApi&&window.MaxApi.openURL(i)},n.moreMenu=function(n,i,o,t){return new Promise((function(e){if(window.MaxApi){var a={title:n,message:o,url:t,subject:i};window.MaxApi.share(a,(function(n){e(n)}))}else e(!1)}))},n.copyLink=function(n){window.MaxApi&&window.MaxApi.copyToClipboard(n,"Đã sao chép")},n.trackEvent=function(n){window.MaxApi&&window.MaxApi.trackEvent("momo_jump",n)},n.showToast=function(n,i){void 0===i&&(i=3e3),window.MaxApi&&window.MaxApi.showToast({duration:i,title:n})},n}());i(o,"isListeningShaking",!1),i(o,"shakingCallback",null),i(o,"avatarEndpoint","")}}}));

System.register("chunks:///_virtual/bundle.mjs_cjs=&original=.js",["./cjs-loader.mjs","./bundle.js"],(function(e,t){"use strict";var r,s;return{setters:[function(e){r=e.default},function(t){s=t.__cjsMetaURL;var r={};r.__cjsMetaURL=t.__cjsMetaURL,r.default=t.default,e(r)}],execute:function(){s||r.throwInvalidWrapper("./bundle.js",t.meta.url),r.require(s)}}}));

System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(r){"use strict";return{execute:function(){r("default",new(function(){function r(){this._namedWrappers={},this._resolveCache={},this._moduleCache={}}var e=r.prototype;return e.define=function(r,e){this._namedWrappers[r]=e},e.require=function(r){return this._require(r)},e.createRequireWithReqMap=function(r,e){return function(t){var n=r[t];if(n)return e(n);throw new Error("Unresolved specifier "+t)}},e.throwInvalidWrapper=function(r,e){throw new Error("Module '"+r+"' imported from '"+e+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},e._require=function(r,e){var t=this._moduleCache[r];if(t)return t.exports;var n={id:r,exports:{}};return this._moduleCache[r]=n,this._tryModuleLoad(n,r),n.exports},e._resolve=function(r,e){return this._resolveFromInfos(r,e)||this._throwUnresolved(r,e)},e._resolveFromInfos=function(r,e){var t,n;return r in cjsInfos?r:e&&null!==(t=null===(n=cjsInfos[e])||void 0===n?void 0:n.resolveCache[r])&&void 0!==t?t:void 0},e._tryModuleLoad=function(r,e){var t=!0;try{this._load(r,e),t=!1}finally{t&&delete this._moduleCache[e]}},e._load=function(r,e){var t=this._loadWrapper(e),n=this._createRequire(r);t(r.exports,n,r)},e._loadWrapper=function(r){return r in this._namedWrappers?this._namedWrappers[r]:this._loadExternalWrapper(r)},e._loadExternalWrapper=function(r){return function(e){var t;try{t=URL.fileURLToPath(r)}catch(e){throw new Error(r+" is not a valid file URL")}var n=require(t);Object.assign(e,n)}},e._createRequire=function(r){var e=this;return function(t){return e._require(t,r)}},e._throwUnresolved=function(r,e){throw new Error("Unable to resolve "+r+" from "+parent+".")},r}()))}}}));

System.register("chunks:///_virtual/tigers.mjs_cjs=&original=.js",["./cjs-loader.mjs","./tigers.js"],(function(e,t){"use strict";var r,s;return{setters:[function(e){r=e.default},function(t){s=t.__cjsMetaURL;var r={};r.__cjsMetaURL=t.__cjsMetaURL,r.default=t.default,e(r)}],execute:function(){s||r.throwInvalidWrapper("./tigers.js",t.meta.url),r.require(s)}}}));

} }; });