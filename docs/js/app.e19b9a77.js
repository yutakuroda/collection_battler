(function(t){function e(e){for(var o,r,s=e[0],i=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},c={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"17fd4d2b"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({about:"about"}[t]||t)+"."+{about:"6bdf876d"}[t]+".css",c=i.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var l=a[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===c))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===o||u===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||c,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=a);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}c[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/collection_battler/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"20ed":function(t,e,n){"use strict";var o=n("8db5"),r=n.n(o);r.a},2241:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"logo"},[o("img",{attrs:{alt:"logo",src:n("cf05")}})])}],c={name:"Logo",props:{msg:String}},a=c,s=(n("a86e"),n("2877")),i=Object(s["a"])(a,o,r,!1,null,"06ec8638",null);e["a"]=i.exports},3646:function(t,e,n){},"4b4f":function(t,e,n){"use strict";var o=n("e732"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Logo",{attrs:{msg:"収蔵品バトラー"}}),n("router-view")],1)},c=[],a=(n("034f"),n("2877")),s={},i=Object(a["a"])(s,r,c,!1,null,null,null),l=i.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Logo",{attrs:{msg:"収蔵品バトラー"}}),t._m(0),n("div",{staticClass:"parent_flex"},[n("div",{staticClass:"first_container"},[n("p",{staticClass:"player"},[t._v("Player A")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.first_search_text,expression:"first_search_text"}],staticClass:"search_form",attrs:{placeholder:"検索ワードを入力してください"},domProps:{value:t.first_search_text},on:{input:function(e){e.target.composing||(t.first_search_text=e.target.value)}}}),n("button",{staticClass:"search_button",on:{click:function(e){return t.fetchCollections("first")}}},[t._v("検索する")]),n("ul",{staticClass:"demo",attrs:{id:"v-for-object"}},t._l(t.first_collections,(function(e){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.first_picked,expression:"first_picked"}],attrs:{id:e.id,type:"radio",name:"rate"},domProps:{value:e,checked:t._q(t.first_picked,e)},on:{change:function(n){t.first_picked=e}}}),n("label",{attrs:{for:e.id}},[n("BattlerIconSet",{attrs:{url:e.common.thumbnailUrl,icon_title:e.common.title}})],1)])})),0)]),n("p",{staticClass:"vs"},[t._v("VS")]),n("div",{staticClass:"second_container"},[n("p",{staticClass:"player"},[t._v("Player B")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.second_search_text,expression:"second_search_text"}],staticClass:"search_form",attrs:{placeholder:"検索ワードを入力してください"},domProps:{value:t.second_search_text},on:{input:function(e){e.target.composing||(t.second_search_text=e.target.value)}}}),n("button",{staticClass:"search_button",on:{click:function(e){return t.fetchCollections("second")}}},[t._v("検索する")]),n("ul",{staticClass:"demo",attrs:{id:"v-for-object"}},t._l(t.second_collections,(function(e){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.second_picked,expression:"second_picked"}],attrs:{id:e.id,type:"radio",name:"rate"},domProps:{value:e,checked:t._q(t.second_picked,e)},on:{change:function(n){t.second_picked=e}}}),n("label",{attrs:{for:e.id}},[n("BattlerIconSet",{attrs:{url:e.common.thumbnailUrl,icon_title:e.common.title}})],1)])})),0)])]),n("Button",{staticClass:"button_buttle",on:{click:t.gotoAbout}},[t._v("戦闘開始")])],1)},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("audio",{attrs:{autoplay:"",loop:""}},[o("source",{attrs:{src:n("e192")}}),t._v("\nあなたのブラウザーは "),o("code",[t._v("audio")]),t._v(" 要素をサポートしていません。\n  ")])}],d=n("2241"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text_input"},[n("p",{staticClass:"title_text"},[t._v(t._s(t.title_text))]),n("input",{staticClass:"input",attrs:{type:"text"}}),n("p",{staticClass:"attention_text"},[t._v(t._s(t.attention_text))])])},_=[],h={name:"TextInput",props:{title_text:String,attention_text:String}},v=h,b=(n("20ed"),Object(a["a"])(v,m,_,!1,null,"479b8457",null)),g=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button_two_column_green"},[t._v("\n  "+t._s(t.text)+"\n")])},x=[],C={name:"ButtonTwoColumnGreen",props:{text:String}},w=C,j=(n("a4ea"),Object(a["a"])(w,y,x,!1,null,"580cca06",null)),k=j.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button_two_column_green"},[t._v("\n  "+t._s(t.text)+"\n")])},O=[],E={name:"ButtonTwoColumnGreen",props:{text:String,link:String}},P=E,A=(n("4b4f"),Object(a["a"])(P,S,O,!1,null,"3ec851de",null)),T=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"battler_icon_set"},[n("img",{staticClass:"img",attrs:{alt:"",src:t.url}}),n("figcaption",{staticClass:"icon_title"},[t._v(t._s(t.icon_title))])])},$=[],I={name:"BattlerIconzset",props:{icon_title:String,url:String}},L=I,N=(n("71fc"),Object(a["a"])(L,B,$,!1,null,"e07c44d8",null)),U=N.exports,q=function(t,e,n){var o=function(t){var e=0,n=0;for(n=0;n<t.length;n++)"-"!=t.charAt(n)&&"_"!=t.charAt(n)&&t.charAt(n)!=/A-Z/||e++,e++;return e},r=function(t,e){var n=[[1,1,1,1,1,1,1,1,1,1],[1,2,1,1,"a",1,1,2,2,1],[2,1,1,1,1,"a",1,1,1,1],[1,1,2,1,2,1,1,"a",1,"a"],[1,"a",1,2,1,1,1,1,1,1],[1,2,1,1,1,1,"a",1,"a",1],[1,1,1,"a",1,1,1,1,1,1],[1,1,1,2,1,1,1,"a",2,1],[1,2,1,1,"a","a",1,1,1,2],[1,1,"a",1,1,1,"a",1,1,1]];console.log(t),console.log(t.type),console.log(e.type);var o="";return o="a"==n[t.type][e.type]?t.power/2>e.power:t.power*n[t.type][e.type]>e.power,o?t:e},c={type:"",power:o(t.common.id),id:t.common.id},a={type:"",power:o(e.common.title),id:e.common.id};fetch("https://lab.ndl.go.jp/ndc/api/predict?bib=".concat(t.common.title),{method:"POST"}).then((function(t){return t.json()})).then((function(t){c.type=t[0].value.charAt(0),fetch("https://lab.ndl.go.jp/ndc/api/predict?bib=".concat(e.common.title),{method:"POST"}).then((function(t){return t.json()})).then((function(t){a.type=t[0].value.charAt(0),n(c,a,r(c,a))}))}))},M={name:"home",components:{Logo:d["a"],TextInput:g,ButtonGreen:k,SearchButton:T,BattlerIconSet:U},methods:{fetchCollections:function(t){var e=this;"first"===t?fetch(encodeURI("https://jpsearch.go.jp/api/item/search/jps-cross?f-contents=thumb&fc-db=-dignl&keyword=".concat(this.first_search_text))).then((function(t){return t.json()})).then((function(t){console.log(t.list),e.first_collections=t.list})).catch((function(t){e.collections=t})):"second"===t&&fetch(encodeURI("https://jpsearch.go.jp/api/item/search/jps-cross?f-contents=thumb&fc-db=-dignl&keyword=".concat(this.second_search_text))).then((function(t){return t.json()})).then((function(t){console.log(t.list),e.second_collections=t.list})).catch((function(t){e.collections=t}))},gotoAbout:function(){var t=this;q(this.first_picked,this.second_picked,(function(e,n,o){var r=o.id,c=o.power,a=o.type;t.$router.push("/about?".concat(r,"&").concat(c,"&").concat(a))}))}},data:function(){return{first_search_text:"",first_collections:{},first_picked:"",second_search_text:"",second_collections:{},second_picked:""}}},G=M,D=(n("cccb"),Object(a["a"])(G,p,f,!1,null,null,null)),J=D.exports;o["a"].use(u["a"]);var R=new u["a"]({mode:"history",base:"/collection_battler/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].config.productionTip=!1,new o["a"]({router:R,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"71fc":function(t,e,n){"use strict";var o=n("9b68"),r=n.n(o);r.a},"8db5":function(t,e,n){},"9b68":function(t,e,n){},a4ea:function(t,e,n){"use strict";var o=n("e011"),r=n.n(o);r.a},a86e:function(t,e,n){"use strict";var o=n("3646"),r=n.n(o);r.a},cccb:function(t,e,n){"use strict";var o=n("d563"),r=n.n(o);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.2bd87009.png"},d563:function(t,e,n){},e011:function(t,e,n){},e192:function(t,e,n){t.exports=n.p+"media/b8d_toys.4bec2ead.mp3"},e732:function(t,e,n){}});
//# sourceMappingURL=app.e19b9a77.js.map