(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)a=s[u],r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9190dafc"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"f51f4b6b"}[t]+".css",r=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===r))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===o||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.request=o,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[t]=0}));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise(function(e,n){o=r[t]=[e,n]});e.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",staticStyle:{"padding-bottom":"15%"},attrs:{id:"app"}},[n("div",{staticClass:"nav-fixed row bg-color box-shadow",attrs:{id:"nav"}},[n("div",{staticClass:"col"},[n("router-link",{attrs:{to:"/",tag:"div"}},[n("span",{staticClass:"glyphicon glyphicon-facetime-video"}),n("span",[t._v("票房排行")])])],1),n("div",{staticClass:"col"},[n("router-link",{attrs:{to:"/about",tag:"div"}},[n("span",{staticClass:"glyphicon glyphicon-facetime-video"}),t._v("\n                  百度音乐\n              ")])],1)]),n("router-view")],1)},r=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,a,r,!1,null,null,null),c=l.exports,u=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid",staticStyle:{padding:"0"}},[n("hello-world")],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-head"},[n("h3",{staticClass:"top-header content-position bg-color box-shadow"},[t._v("最新票房排行榜")]),t._m(0),t.flag?t._e():n("p",{staticStyle:{color:"white"}},[t._v("数据正在加载中。。。")]),t._l(t.movie,function(e){return t.flag?n("ul",{staticClass:"row list-unstyled list-content content-position bg-color box-shadow"},[n("li",{staticClass:"col-2"},[n("span",{staticClass:"bg-warning text-radius"},[t._v(t._s(e.Irank))])]),n("li",{staticClass:"col-4"},[t._v(t._s(t._f("msg")(e.MovieName)))]),n("li",{staticClass:"col-3 text-red"},[t._v(t._s(e.BoxOffice))]),n("li",{staticClass:"col-3"},[t._v(t._s(e.sumBoxOffice))])]):t._e()})],2)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"row list-unstyled list-header content-position bg-color"},[n("li",{staticClass:"col-2"},[t._v("排名")]),n("li",{staticClass:"col-4"},[t._v("电影名")]),n("li",{staticClass:"col-3"},[t._v("实时票房(万)")]),n("li",{staticClass:"col-3"},[t._v("累计票房(万)")])])}],h=(n("28a5"),{name:"HelloWorld",data:function(){return{movie:{},flag:!1}},created:function(){this.$http.jsonp("https://api.shenjian.io/?appid=f2a730eb54d4ee91a24fce84f8353e59").then(function(t){0!=t.body&&(this.movie=[{Irank:"数据加载失败，请稍后重试"}],this.flag=!0);var e=t.body.data.slice(0,10);this.movie=e,this.flag=!0})},filters:{msg:function(t){var e=t.split("：");return e[0]}}}),b=h,m=(n("eb5c"),Object(i["a"])(b,p,v,!1,null,"7eadbea2",null)),g=m.exports,y={name:"home",data:function(){return{movie:{},flag:!1}},components:{HelloWorld:g}},_=y,w=Object(i["a"])(_,f,d,!1,null,null,null),C=w.exports;o["a"].use(u["a"]);var x=new u["a"]({base:"",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"3b99"))}}]}),j=(n("7eb0"),n("7e7d")),O=n.n(j);o["a"].use(O.a),o["a"].config.productionTip=!1;var k=new o["a"];console.log(k),new o["a"]({router:x,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,n){},eb5c:function(t,e,n){"use strict";var o=n("fc82"),a=n.n(o);a.a},fc82:function(t,e,n){}});
//# sourceMappingURL=app.170422b5.js.map