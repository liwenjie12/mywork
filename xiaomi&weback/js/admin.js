!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!y[e])return;for(var n in y[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--_&&0===g&&O()}(e,n),t&&t(e,n)};var n,i=!0,a="72750ecb5b5ee18a5b2a",r=1e4,o={},s=[],l=[];function d(e){var t=k[e];if(!t)return P;var i=function(i){return t.hot.active?(k[i]?-1===k[i].parents.indexOf(e)&&k[i].parents.push(e):(s=[e],n=i),-1===t.children.indexOf(i)&&t.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+e),s=[]),P(i)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}};for(var r in P)Object.prototype.hasOwnProperty.call(P,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(i,r,a(r));return i.e=function(e){return"ready"===p&&f("prepare"),g++,P.e(e).then(t,function(e){throw t(),e});function t(){g--,"prepare"===p&&(b[e]||j(e),0===g&&0===_&&O())}},i.t=function(e,t){return 1&t&&(e=i(e)),P.t(e,-2&t)},i}function c(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._acceptedDependencies[e[i]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:C,apply:E,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:o[e]};return n=void 0,t}var u=[],p="idle";function f(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var v,m,h,_=0,g=0,b={},y={},x={};function w(e){return+e+""===e?+e:e}function C(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),(t=r,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,r=P.p+""+a+".hot-update.json";i.open("GET",r,!0),i.timeout=t,i.send(null)}catch(e){return n(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+r+" timed out."));else if(404===i.status)e();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+r+" failed."));else{try{var t=JSON.parse(i.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;y={},b={},x=e.c,h=e.h,f("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});m={};return j(0),"prepare"===p&&0===g&&0===_&&O(),t});var t}function j(e){x[e]?(y[e]=!0,_++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+a+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function O(){f("ready");var e=v;if(v=null,e)if(i)Promise.resolve().then(function(){return E(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(w(n));e.resolve(t)}}function E(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,i,r,l,d;function c(e){for(var t=[e],n={},i=t.slice().map(function(e){return{chain:[e],id:e}});i.length>0;){var a=i.pop(),r=a.id,o=a.chain;if((l=k[r])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:r};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:r};for(var s=0;s<l.parents.length;s++){var d=l.parents[s],c=k[d];if(c){if(c.hot._declinedDependencies[r])return{type:"declined",chain:o.concat([d]),moduleId:r,parentId:d};-1===t.indexOf(d)&&(c.hot._acceptedDependencies[r]?(n[d]||(n[d]=[]),u(n[d],[r])):(delete n[d],t.push(d),i.push({chain:o.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];-1===e.indexOf(i)&&e.push(i)}}t=t||{};var v={},_=[],g={},b=function(){console.warn("[HMR] unexpected require("+C.moduleId+") to disposed module")};for(var y in m)if(Object.prototype.hasOwnProperty.call(m,y)){var C;d=w(y);var j=!1,O=!1,E=!1,M="";switch((C=m[y]?c(d):{type:"disposed",moduleId:y}).chain&&(M="\nUpdate propagation: "+C.chain.join(" -> ")),C.type){case"self-declined":t.onDeclined&&t.onDeclined(C),t.ignoreDeclined||(j=new Error("Aborted because of self decline: "+C.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(C),t.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+C.moduleId+" in "+C.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(C),t.ignoreUnaccepted||(j=new Error("Aborted because "+d+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(C),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(C),E=!0;break;default:throw new Error("Unexception type "+C.type)}if(j)return f("abort"),Promise.reject(j);if(O)for(d in g[d]=m[d],u(_,C.outdatedModules),C.outdatedDependencies)Object.prototype.hasOwnProperty.call(C.outdatedDependencies,d)&&(v[d]||(v[d]=[]),u(v[d],C.outdatedDependencies[d]));E&&(u(_,[C.moduleId]),g[d]=b)}var D,H=[];for(i=0;i<_.length;i++)d=_[i],k[d]&&k[d].hot._selfAccepted&&H.push({module:d,errorHandler:k[d].hot._selfAccepted});f("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var $,S,L=_.slice();L.length>0;)if(d=L.pop(),l=k[d]){var T={},I=l.hot._disposeHandlers;for(r=0;r<I.length;r++)(n=I[r])(T);for(o[d]=T,l.hot.active=!1,delete k[d],delete v[d],r=0;r<l.children.length;r++){var N=k[l.children[r]];N&&((D=N.parents.indexOf(d))>=0&&N.parents.splice(D,1))}}for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(l=k[d]))for(S=v[d],r=0;r<S.length;r++)$=S[r],(D=l.children.indexOf($))>=0&&l.children.splice(D,1);for(d in f("apply"),a=h,g)Object.prototype.hasOwnProperty.call(g,d)&&(e[d]=g[d]);var q=null;for(d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&(l=k[d])){S=v[d];var A=[];for(i=0;i<S.length;i++)if($=S[i],n=l.hot._acceptedDependencies[$]){if(-1!==A.indexOf(n))continue;A.push(n)}for(i=0;i<A.length;i++){n=A[i];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:S[i],error:e}),t.ignoreErrored||q||(q=e)}}}for(i=0;i<H.length;i++){var R=H[i];d=R.module,s=[d];try{P(d)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),t.ignoreErrored||q||(q=n),q||(q=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(_)}))}var k={};function P(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:c(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,d(t)),n.l=!0,n.exports}P.m=e,P.c=k,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)P.d(n,i,function(t){return e[t]}.bind(null,i));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return a},d(5)(P.s=5)}({"./app/components/admin/admin-index.vue":function(e,t,n){"use strict";n.r(t);var i=n("./app/components/admin/admin-index.vue?vue&type=template&id=4a99011a&scoped=true&"),a=n("./app/components/admin/admin-index.vue?vue&type=script&lang=js&");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=Object(o.a)(a.default,i.a,i.b,!1,null,"4a99011a",null);t.default=s.exports},"./app/components/admin/admin-index.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/admin-index.vue?vue&type=script&lang=js&"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=a.a},"./app/components/admin/admin-index.vue?vue&type=template&id=4a99011a&scoped=true&":function(e,t,n){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-box",staticStyle:{overflow:"hidden"}},[this.flag?t("shop-table",{attrs:{list:this.pageList,alldata:this.alldata}}):this._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"./app/components/admin/shop-table.vue":function(e,t,n){"use strict";n.r(t);var i=n("./app/components/admin/shop-table.vue?vue&type=template&id=346ea177&scoped=true&"),a=n("./app/components/admin/shop-table.vue?vue&type=script&lang=js&");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=Object(o.a)(a.default,i.a,i.b,!1,null,"346ea177",null);t.default=s.exports},"./app/components/admin/shop-table.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/shop-table.vue?vue&type=script&lang=js&"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=a.a},"./app/components/admin/shop-table.vue?vue&type=template&id=346ea177&scoped=true&":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",{staticClass:"table table-bordered text-center"},[e._m(0),e._v(" "),n("tbody",e._l(e.list,function(t){return n("tr",[n("td",{domProps:{innerHTML:e._s(t.id)}}),e._v(" "),n("td",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("td",{domProps:{innerHTML:e._s(t.newprice)}}),e._v(" "),n("td",{domProps:{innerHTML:e._s(t.class)}})])}),0)]),e._v(" "),n("ul",{staticClass:"list-inline text-center content-page"},[n("li",{on:{click:function(t){return e.preclic(e.id)}}},[e._v("<")]),e._v(" "),e._l(e.page,function(t){return n("li",{class:e.index==t?"bgcolor":"",domProps:{innerHTML:e._s(t)},on:{click:function(n){return e.change(t)}}})}),e._v(" "),n("li",{on:{click:function(t){return e.nextclic(e.id)}}},[e._v(">")])],2)])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",{staticClass:"bg-primary"},[t("tr",[t("th",[this._v("id")]),this._v(" "),t("th",[this._v("商品")]),this._v(" "),t("th",[this._v("价格")]),this._v(" "),t("th",[this._v("分类")])])])}];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"./app/components/admin/vue-add.vue":function(e,t,n){"use strict";n.r(t);var i=n("./app/components/admin/vue-add.vue?vue&type=template&id=1bd72d33&scoped=true&"),a=n("./app/components/admin/vue-add.vue?vue&type=script&lang=js&");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=Object(o.a)(a.default,i.a,i.b,!1,null,"1bd72d33",null);t.default=s.exports},"./app/components/admin/vue-add.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/vue-add.vue?vue&type=script&lang=js&"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=a.a},"./app/components/admin/vue-add.vue?vue&type=template&id=1bd72d33&scoped=true&":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-box",staticStyle:{overflow:"hidden"}},[n("p",[e._v("商品数据添加")]),e._v(" "),n("form",{staticClass:"form-horizontal",attrs:{role:"form",action:"./php/data.php",method:"post",enctype:"multipart/form-data",target:"add"}},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-lg-4 text-center",staticStyle:{margin:"0 auto"}},[n("input",{staticClass:"form-control btn btn-primary",attrs:{type:"submit"},on:{click:e.clear}})])])]),e._v(" "),n("iframe",{staticStyle:{display:"none"},attrs:{name:"add",id:"add"}})])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"title"}},[this._v("title:")]),this._v(" "),t("div",{staticClass:"col-lg-4"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"title",name:"title",placeholder:"请输入名字",required:""}})]),this._v(" "),t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"content"}},[this._v("content:")]),this._v(" "),t("div",{staticClass:"col-lg-6"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"content",name:"content",placeholder:"请输入名字"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"newprice"}},[this._v("newprice:")]),this._v(" "),t("div",{staticClass:"col-lg-4"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"newprice",name:"newprice",placeholder:"请输入名字",required:""}})]),this._v(" "),t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"oldprice"}},[this._v("oldprice:")]),this._v(" "),t("div",{staticClass:"col-lg-6"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"oldprice",name:"oldprice",placeholder:"请输入名字"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"biaoqian"}},[this._v("biaoqian:")]),this._v(" "),t("div",{staticClass:"col-lg-4"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"biaoqian",name:"biaoqian",placeholder:"请输入名字"}})]),this._v(" "),t("label",{staticClass:"col-lg-1 control-label",attrs:{for:"admin"}},[this._v("admin:")]),this._v(" "),t("div",{staticClass:"col-lg-6"},[t("input",{staticClass:"form-control",attrs:{type:"text",id:"admin",name:"admin",value:"add"}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-lg-1",attrs:{for:"pic"}},[e._v("picture")]),e._v(" "),n("div",{staticClass:"col-lg-4"},[n("input",{staticClass:"form-control",attrs:{type:"file",id:"pic",name:"pic"}})]),e._v(" "),n("label",{staticClass:"col-lg-1",attrs:{for:"name"}},[e._v("选择列表")]),e._v(" "),n("div",{staticClass:"col-lg-6"},[n("select",{staticClass:"form-control",attrs:{name:"class",id:"name"}},[n("option",{attrs:{value:"mix"}},[e._v("mix")]),e._v(" "),n("option",{attrs:{value:"redmi"}},[e._v("redmi")]),e._v(" "),n("option",{attrs:{value:"tv"}},[e._v("tv")]),e._v(" "),n("option",{attrs:{value:"pc"}},[e._v("pc")]),e._v(" "),n("option",{attrs:{value:"jiadian"}},[e._v("jiadian")]),e._v(" "),n("option",{attrs:{value:"new"}},[e._v("new")]),e._v(" "),n("option",{attrs:{value:"router"}},[e._v("router")]),e._v(" "),n("option",{attrs:{value:"zhineng"}},[e._v("zhineng")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group",staticStyle:{"margin-left":"0","margin-right":"0"}},[t("label",{staticClass:" control-label",attrs:{for:"description"}},[this._v("description:")]),this._v(" "),t("div",[t("input",{staticClass:"form-control",attrs:{id:"description",name:"description",required:"",type:"text"}})])])}];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"./app/components/admin/vue-manage.vue":function(e,t,n){"use strict";n.r(t);var i=n("./app/components/admin/vue-manage.vue?vue&type=template&id=0c14d196&scoped=true&"),a=n("./app/components/admin/vue-manage.vue?vue&type=script&lang=js&");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);var o=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),s=Object(o.a)(a.default,i.a,i.b,!1,null,"0c14d196",null);t.default=s.exports},"./app/components/admin/vue-manage.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";n.r(t);var i=n("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/vue-manage.vue?vue&type=script&lang=js&"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=a.a},"./app/components/admin/vue-manage.vue?vue&type=template&id=0c14d196&scoped=true&":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"manage-box",staticStyle:{overflow:"hidden",position:"relative"},attrs:{id:"manage-box"}},[n("p",[e._v("网站栏目管理")]),e._v(" "),e._m(0),e._v(" "),n("div",[n("table",{staticClass:"table table-bordered"},[e._m(1),e._v(" "),e.flag?n("tbody",{staticClass:"text-center"},e._l(e.imgList,function(t){return n("tr",[n("td",{domProps:{innerHTML:e._s(t.id)}}),e._v(" "),n("td",{domProps:{innerHTML:e._s(t.path)}}),e._v(" "),n("td",{domProps:{innerHTML:e._s(t.link)}}),e._v(" "),n("td",[n("button",{staticClass:"btn btn-primary",on:{click:function(n){return e.change(t.id)}}},[e._v("修改")]),e._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return e.delect(t.id)}}},[e._v("删除")])])])}),0):e._e()]),e._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:e.show}},[e._v("增加一条")]),e._v(" "),e.flag?n("ul",{staticClass:"list-inline text-center manage-page"},e._l(e.list,function(t){return n("li",{class:e.index==t?"bgcolor":"",on:{click:function(n){return e.bgcolor(t)}}},[e._v(e._s(t))])}),0):e._e()]),e._v(" "),e.window?n("div",{staticClass:"manage-add-img"},[n("form",{attrs:{role:"form",enctype:"multipart/form-data",method:"post",action:"./php/data.php",target:"data"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"id"}},[e._v("id")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",id:"id",placeholder:"请输入id",name:"id"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"btn btn-primary bg-primary text-center btn-block",attrs:{type:"submit",value:"添加"},on:{click:e.refresh}})])]),e._v(" "),n("iframe",{staticStyle:{display:"none"},attrs:{name:"data",id:"contentwindow"}})]):e._e(),e._v(" "),e.window1?n("div",{staticClass:"manage-change-img"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"id"}},[e._v("id")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.indexof,expression:"indexof"}],staticClass:"form-control",attrs:{type:"text",id:"id",placeholder:"请输入id",name:"id",required:""},domProps:{value:e.indexof},on:{input:function(t){t.target.composing||(e.indexof=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pic"}},[e._v("图片")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pic,expression:"pic"}],staticClass:"form-control",attrs:{type:"text",id:"pic",placeholder:"请上传图片",name:"pic",required:""},domProps:{value:e.pic},on:{input:function(t){t.target.composing||(e.pic=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"link"}},[e._v("链接")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text",id:"link",placeholder:"请输入地址",name:"link",required:""},domProps:{value:e.link},on:{input:function(t){t.target.composing||(e.link=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"btn btn-primary bg-primary text-center btn-block",attrs:{type:"submit",value:"修改"},on:{click:function(t){return e.set(e.indexof)}}})])]):e._e()])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"list-inline manage-list"},[t("li",{staticClass:"bg-primary"},[this._v("轮播图管理")]),this._v(" "),t("li",{staticClass:"bg-primary"},[this._v("轮播图管理")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",{staticClass:"bg-primary"},[t("tr",[t("th",[this._v("id")]),this._v(" "),t("th",[this._v("路径")]),this._v(" "),t("th",[this._v("链接")]),this._v(" "),t("th",[this._v("操作")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"file"}},[this._v("图片")]),this._v(" "),t("input",{staticClass:"form-control",attrs:{type:"file",id:"file",placeholder:"请上传图片",name:"pic"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"link"}},[this._v("链接")]),this._v(" "),t("input",{staticClass:"form-control",attrs:{type:"text",id:"link",placeholder:"请输入地址",name:"link"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("input",{staticClass:"form-control",attrs:{type:"hidden",id:"admin",name:"admin",value:"img"}})])}];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"./app/css/admin.css":function(e,t){},"./app/js/admin-index.js":function(e,t,n){"use strict";var i=o(n("./app/components/admin/admin-index.vue")),a=o(n("./app/components/admin/vue-add.vue")),r=o(n("./app/components/admin/vue-manage.vue"));function o(e){return e&&e.__esModule?e:{default:e}}var s=new VueRouter({routes:[{path:"/",component:i.default},{path:"/add",component:a.default},{path:"/manage",component:r.default}]});new Vue({el:"#box",components:{adminIndex:i.default,adminAdd:a.default,adminManage:r.default},router:s})},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/admin-index.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"admin-index",data:function(){return{alldata:"",flag:!1,pageList:""}},components:{shopTable:((i=n("./app/components/admin/shop-table.vue"))&&i.__esModule?i:{default:i}).default},created:function(){this.$http.post("./php/data.php",{admin:"all"},{emulateJSON:!0}).then(function(e){this.alldata=e.body,this.pageList=this.alldata.slice(0,10),this.flag=!0})}};t.default=a},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/shop-table.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"shop-table",props:["list","alldata"],methods:{change:function(e){if(this.index=e,this.id=e,e>this.leng)return!1;e>=5&&e<=this.leng-2?this.page=[1,"...",e-1,e,e+1,"..."]:e==this.leng-1?this.page=[1,"...",e-2,e-1,e,e+1]:e===this.leng?this.page=[1,"...",e-3,e-2,e-1,e]:this.page=[1,2,3,4,5,"..."],this.$parent.pageList=this.$parent.alldata.slice(10*(e-1),10*e)},nextclic:function(e){if(this.id=e+1,console.log(this.leng),this.id>this.leng)return this.id=this.leng,!1;this.change(this.id)},preclic:function(e){if(this.id<=1)return this.id=1,!1;this.id=e-1,this.change(this.id)}},data:function(){return{page:[],leng:"",id:1,index:1}},created:function(){this.leng=Math.ceil(this.alldata.length/10);for(var e=1;e<=this.leng;e++){if(e>5){this.page.push("...");break}this.page.push(e)}}};t.default=i},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/vue-add.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"vue-add",methods:{clear:function(){var e=document.getElementById("add"),t=e.contentWindow,n=document.getElementsByTagName("input");e.onload=function(){var e=t.document.body.innerText;alert(e);for(var i=0;i<n.length;i++)"add"!==n[i].value&&(n[i].value="")}}}};t.default=i},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./app/components/admin/vue-manage.vue?vue&type=script&lang=js&":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"vue-manage",data:function(){return{imgList:"",flag:!1,list:[],index:1,allList:"",id:"",window:!1,window1:!1,indexof:"",pic:"",link:""}},methods:{bgcolor:function(e){this.index=e,this.imgList=this.allList.slice(5*(e-1),5*e)},get:function(){this.$http.get("./data/imageShow.json?time="+new Date).then(function(e){this.allList=e.body,this.imgList=this.allList.slice(0,5),this.list=[];for(var t=1;t<=Math.ceil(this.allList.length/5);t++)this.list.push(t);this.flag=!0,this.id=this.allList.length+1})},show:function(){this.window=!this.window},refresh:function(){var e=document.getElementById("contentwindow"),t=e.contentWindow;e.onload=function(){"添加成功"==t.document.body.innerText?(this.flag=!1,this.get(),alert("数据添加完成")):alert("数据添加失败")}.bind(this)},change:function(e){this.window1=!this.window1,this.indexof=e},set:function(e){this.flag=!1,this.$http.post("./php/data.php",{admin:"imgchange",id:this.indexof,pic:this.pic,link:this.link},{emulateJSON:!0}).then(function(e){this.window1=!1,this.index=1,this.get()})},delect:function(e){this.flag=!1,this.$http.post("./php/data.php?time="+new Date,{admin:"delectimg",id:e},{emulateJSON:!0}).then(function(e){this.index=1,this.get()})}},created:function(){this.get()}};t.default=i},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(e,t,n){"use strict";function i(e,t,n,i,a,r,o,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}n.d(t,"a",function(){return i})},5:function(e,t,n){n("./app/js/admin-index.js"),e.exports=n("./app/css/admin.css")}});