(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,n,e){var r=e("4588"),i=e("be13");t.exports=function(t){return function(n,e){var o,c,u=String(i(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):o:t?u.slice(a,a+2):c-56320+(o-55296<<10)+65536)}}},"0390":function(t,n,e){"use strict";var r=e("02f4")(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},"07e3":function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},"0bfb":function(t,n,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"0fc9":function(t,n,e){var r=e("3a38"),i=Math.max,o=Math.min;t.exports=function(t,n){return t=r(t),t<0?i(t+n,0):o(t,n)}},1654:function(t,n,e){"use strict";var r=e("71c1")(!0);e("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"1af6":function(t,n,e){var r=e("63b6");r(r.S,"Array",{isArray:e("9003")})},"1bc3":function(t,n,e){var r=e("f772");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,n,e){var r=e("f772"),i=e("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"214f":function(t,n,e){"use strict";e("b0c5");var r=e("2aba"),i=e("32e9"),o=e("79e5"),c=e("be13"),u=e("2b4c"),a=e("520a"),s=u("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=u(t),v=!o((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),d=v?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n})):void 0;if(!v||!d||"replace"===t&&!f||"split"===t&&!l){var g=/./[p],b=e(c,p,""[t],(function(t,n,e,r,i){return n.exec===a?v&&!i?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),h=b[0],x=b[1];r(String.prototype,t,h),i(RegExp.prototype,p,2==n?function(t,n){return x.call(t,this,n)}:function(t){return x.call(t,this)})}}},"241e":function(t,n,e){var r=e("25eb");t.exports=function(t){return Object(r(t))}},"25eb":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"28a5":function(t,n,e){"use strict";var r=e("aae3"),i=e("cb7c"),o=e("ebd6"),c=e("0390"),u=e("9def"),a=e("5f1b"),s=e("520a"),f=e("79e5"),l=Math.min,p=[].push,v="split",d="length",g="lastIndex",b=4294967295,h=!f((function(){RegExp(b,"y")}));e("214f")("split",2,(function(t,n,e,f){var x;return x="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[d]||2!="ab"[v](/(?:ab)*/)[d]||4!="."[v](/(.?)(.?)/)[d]||"."[v](/()()/)[d]>1||""[v](/.?/)[d]?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);var o,c,u,a=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,v=void 0===n?b:n>>>0,h=new RegExp(t.source,f+"g");while(o=s.call(h,i)){if(c=h[g],c>l&&(a.push(i.slice(l,o.index)),o[d]>1&&o.index<i[d]&&p.apply(a,o.slice(1)),u=o[0][d],l=c,a[d]>=v))break;h[g]===o.index&&h[g]++}return l===i[d]?!u&&h.test("")||a.push(""):a.push(i.slice(l)),a[d]>v?a.slice(0,v):a}:"0"[v](void 0,0)[d]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=void 0==e?void 0:e[n];return void 0!==o?o.call(e,i,r):x.call(String(i),e,r)},function(t,n){var r=f(x,t,this,n,x!==e);if(r.done)return r.value;var s=i(t),p=String(this),v=o(s,RegExp),d=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(h?"y":"g"),y=new v(h?s:"^(?:"+s.source+")",g),m=void 0===n?b:n>>>0;if(0===m)return[];if(0===p.length)return null===a(y,p)?[p]:[];var w=0,_=0,S=[];while(_<p.length){y.lastIndex=h?_:0;var j,O=a(y,h?p:p.slice(_));if(null===O||(j=l(u(y.lastIndex+(h?0:_)),p.length))===w)_=c(p,_,d);else{if(S.push(p.slice(w,_)),S.length===m)return S;for(var k=1;k<=O.length-1;k++)if(S.push(O[k]),S.length===m)return S;_=w=j}}return S.push(p.slice(w)),S}]}))},"294c":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"2b3c":function(t,n,e){},"30f1":function(t,n,e){"use strict";var r=e("b8e3"),i=e("63b6"),o=e("9138"),c=e("35e8"),u=e("481b"),a=e("8f60"),s=e("45f2"),f=e("53e2"),l=e("5168")("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",d="keys",g="values",b=function(){return this};t.exports=function(t,n,e,h,x,y,m){a(e,n,h);var w,_,S,j=function(t){if(!p&&t in L)return L[t];switch(t){case d:return function(){return new e(this,t)};case g:return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",k=x==g,E=!1,L=t.prototype,T=L[l]||L[v]||x&&L[x],C=T||j(x),A=x?k?j("entries"):C:void 0,I="Array"==n&&L.entries||T;if(I&&(S=f(I.call(new t)),S!==Object.prototype&&S.next&&(s(S,O,!0),r||"function"==typeof S[l]||c(S,l,b))),k&&T&&T.name!==g&&(E=!0,C=function(){return T.call(this)}),r&&!m||!p&&!E&&L[l]||c(L,l,C),u[n]=C,u[O]=b,x)if(w={values:k?C:j(g),keys:y?C:j(d),entries:A},m)for(_ in w)_ in L||o(L,_,w[_]);else i(i.P+i.F*(p||E),n,w);return w}},"32fc":function(t,n,e){var r=e("e53d").document;t.exports=r&&r.documentElement},"335c":function(t,n,e){var r=e("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},"35e8":function(t,n,e){var r=e("d9f6"),i=e("aebd");t.exports=e("8e60")?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"35fb":function(t,n,e){t.exports=e.p+"img/gengo.c6d414cc.png"},"36c3":function(t,n,e){var r=e("335c"),i=e("25eb");t.exports=function(t){return r(i(t))}},"386d":function(t,n,e){"use strict";var r=e("cb7c"),i=e("83a1"),o=e("5f1b");e("214f")("search",1,(function(t,n,e,c){return[function(e){var r=t(this),i=void 0==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=c(e,t,this);if(n.done)return n.value;var u=r(t),a=String(this),s=u.lastIndex;i(s,0)||(u.lastIndex=0);var f=o(u,a);return i(u.lastIndex,s)||(u.lastIndex=s),null===f?-1:f.index}]}))},"3a38":function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},"40c3":function(t,n,e){var r=e("6b4c"),i=e("5168")("toStringTag"),o="Arguments"==r(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=c(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},"45f2":function(t,n,e){var r=e("d9f6").f,i=e("07e3"),o=e("5168")("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},"469f":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("7d7b")},"481b":function(t,n){t.exports={}},"50ed":function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},5168:function(t,n,e){var r=e("dbdb")("wks"),i=e("62a0"),o=e("e53d").Symbol,c="function"==typeof o,u=t.exports=function(t){return r[t]||(r[t]=c&&o[t]||(c?o:i)("Symbol."+t))};u.store=r},"520a":function(t,n,e){"use strict";var r=e("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,u="lastIndex",a=function(){var t=/a/,n=/b*/g;return i.call(t,"a"),i.call(n,"a"),0!==t[u]||0!==n[u]}(),s=void 0!==/()??/.exec("")[1],f=a||s;f&&(c=function(t){var n,e,c,f,l=this;return s&&(e=new RegExp("^"+l.source+"$(?!\\s)",r.call(l))),a&&(n=l[u]),c=i.call(l,t),a&&c&&(l[u]=l.global?c.index+c[0].length:n),s&&c&&c.length>1&&o.call(c[0],e,(function(){for(f=1;f<arguments.length-2;f++)void 0===arguments[f]&&(c[f]=void 0)})),c}),t.exports=c},"53e2":function(t,n,e){var r=e("07e3"),i=e("241e"),o=e("5559")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},5559:function(t,n,e){var r=e("dbdb")("keys"),i=e("62a0");t.exports=function(t){return r[t]||(r[t]=i(t))}},"584a":function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},"5b4e":function(t,n,e){var r=e("36c3"),i=e("b447"),o=e("0fc9");t.exports=function(t){return function(n,e,c){var u,a=r(n),s=i(a.length),f=o(c,s);if(t&&e!=e){while(s>f)if(u=a[f++],u!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},"5d73":function(t,n,e){t.exports=e("469f")},"5f1b":function(t,n,e){"use strict";var r=e("23c6"),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var o=e.call(t,n);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},"62a0":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},"63b6":function(t,n,e){var r=e("e53d"),i=e("584a"),o=e("d864"),c=e("35e8"),u=e("07e3"),a="prototype",s=function(t,n,e){var f,l,p,v=t&s.F,d=t&s.G,g=t&s.S,b=t&s.P,h=t&s.B,x=t&s.W,y=d?i:i[n]||(i[n]={}),m=y[a],w=d?r:g?r[n]:(r[n]||{})[a];for(f in d&&(e=n),e)l=!v&&w&&void 0!==w[f],l&&u(y,f)||(p=l?w[f]:e[f],y[f]=d&&"function"!=typeof w[f]?e[f]:h&&l?o(p,r):x&&w[f]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[a]=t[a],n}(p):b&&"function"==typeof p?o(Function.call,p):p,b&&((y.virtual||(y.virtual={}))[f]=p,t&s.R&&m&&!m[f]&&c(m,f,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"6abb":function(t,n,e){t.exports=e.p+"img/shizennkagaku.6c22e161.jpg"},"6b4c":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"6c1c":function(t,n,e){e("c367");for(var r=e("e53d"),i=e("35e8"),o=e("481b"),c=e("5168")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var s=u[a],f=r[s],l=f&&f.prototype;l&&!l[c]&&i(l,c,s),o[s]=o.Array}},"71c1":function(t,n,e){var r=e("3a38"),i=e("25eb");t.exports=function(t){return function(n,e){var o,c,u=String(i(n)),a=r(e),s=u.length;return a<0||a>=s?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):o:t?u.slice(a,a+2):c-56320+(o-55296<<10)+65536)}}},"794b":function(t,n,e){t.exports=!e("8e60")&&!e("294c")((function(){return 7!=Object.defineProperty(e("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7cd6":function(t,n,e){var r=e("40c3"),i=e("5168")("iterator"),o=e("481b");t.exports=e("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},"7d7b":function(t,n,e){var r=e("e4ae"),i=e("7cd6");t.exports=e("584a").getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},"7e41":function(t,n,e){t.exports=e.p+"img/rekishi.19b42fa3.png"},"7e90":function(t,n,e){var r=e("d9f6"),i=e("e4ae"),o=e("c3a1");t.exports=e("8e60")?Object.defineProperties:function(t,n){i(t);var e,c=o(n),u=c.length,a=0;while(u>a)r.f(t,e=c[a++],n[e]);return t}},"83a1":function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},8436:function(t,n){t.exports=function(){}},"8b9b":function(t,n,e){t.exports=e.p+"img/bungaku.e433000d.png"},"8e60":function(t,n,e){t.exports=!e("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8f60":function(t,n,e){"use strict";var r=e("a159"),i=e("aebd"),o=e("45f2"),c={};e("35e8")(c,e("5168")("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(c,{next:i(1,e)}),o(t,n+" Iterator")}},9003:function(t,n,e){var r=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},9138:function(t,n,e){t.exports=e("35e8")},9305:function(t,n,e){"use strict";var r=e("cd6c"),i=e.n(r);i.a},"95d5":function(t,n,e){var r=e("40c3"),i=e("5168")("iterator"),o=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[i]||"@@iterator"in n||o.hasOwnProperty(r(n))}},"98ea":function(t,n,e){t.exports=e.p+"media/victory.d8ce95b4.mp3"},a159:function(t,n,e){var r=e("e4ae"),i=e("7e90"),o=e("1691"),c=e("5559")("IE_PROTO"),u=function(){},a="prototype",s=function(){var t,n=e("1ec9")("iframe"),r=o.length,i="<",c=">";n.style.display="none",e("32fc").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),s=t.F;while(r--)delete s[a][o[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(u[a]=r(t),e=new u,u[a]=null,e[c]=t):e=s(),void 0===n?e:i(e,n)}},a745:function(t,n,e){t.exports=e("f410")},aae3:function(t,n,e){var r=e("d3f4"),i=e("2d95"),o=e("2b4c")("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},aebd:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},b0c5:function(t,n,e){"use strict";var r=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b447:function(t,n,e){var r=e("3a38"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},b8e3:function(t,n){t.exports=!0},c367:function(t,n,e){"use strict";var r=e("8436"),i=e("50ed"),o=e("481b"),c=e("36c3");t.exports=e("30f1")(Array,"Array",(function(t,n){this._t=c(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},c3a1:function(t,n,e){var r=e("e6f3"),i=e("1691");t.exports=Object.keys||function(t){return r(t,i)}},c8bb:function(t,n,e){t.exports=e("54a1")},c9bd:function(t,n,e){t.exports=e.p+"img/gijutu.40bfb704.jpg"},cd6c:function(t,n,e){},d446:function(t,n,e){t.exports=e.p+"img/tetsugaku.19d1ef2e.png"},d4e0:function(t,n,e){t.exports=e.p+"img/sangyou.a4d499f7.jpg"},d864:function(t,n,e){var r=e("79aa");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},d9f6:function(t,n,e){var r=e("e4ae"),i=e("794b"),o=e("1bc3"),c=Object.defineProperty;n.f=e("8e60")?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return c(t,n,e)}catch(u){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},dbdb:function(t,n,e){var r=e("584a"),i=e("e53d"),o="__core-js_shared__",c=i[o]||(i[o]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,n,e){var r=e("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},e6f3:function(t,n,e){var r=e("07e3"),i=e("36c3"),o=e("5b4e")(!1),c=e("5559")("IE_PROTO");t.exports=function(t,n){var e,u=i(t),a=0,s=[];for(e in u)e!=c&&r(u,e)&&s.push(e);while(n.length>a)r(u,e=n[a++])&&(~o(s,e)||s.push(e));return s}},e76e:function(t,n,e){"use strict";var r=e("2b3c"),i=e.n(r);i.a},e8ec:function(t,n,e){t.exports=e.p+"img/souki.ef914ff0.jpg"},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray},f587:function(t,n,e){t.exports=e.p+"img/geijutsu.ac08a873.png"},f772:function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},f820:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[t._m(0),r("div",{staticClass:"about"},[r("Logo",{}),r("div",{staticClass:"fireback"},[r("h1",[t._v(t._s(t.collection.common.title)+"の勝ち!")]),r("h1",[t._v("戦闘力"+t._s(t.power))])]),r("div",{staticClass:"winner_img"},[r("WinnerIconSet",{attrs:{icon_title:t.collection.common.title,url:t.collection.common.thumbnailUrl}}),r("p",{staticClass:"type"},[t._v("属性(NDC):"+t._s(t.type))])],1)],1),r("div",{staticClass:"back"}),r("div",{staticClass:"win_type_img"},["総起"===t.type?r("div",[r("img",{attrs:{src:e("e8ec")}})]):"哲学"==t.type?r("div",[r("img",{attrs:{src:e("d446")}})]):"歴史"==t.type?r("div",[r("img",{attrs:{src:e("7e41")}})]):"社会化学"==t.type?r("div",[r("img",{attrs:{src:e("fa88")}})]):"自然科学"==t.type?r("div",[r("img",{attrs:{src:e("6abb")}})]):"技術工学"==t.type?r("div",[r("img",{attrs:{src:e("c9bd")}})]):"産業"==t.type?r("div",[r("img",{attrs:{src:e("d4e0")}})]):"芸術"==t.type?r("div",[r("img",{attrs:{src:e("f587")}})]):"言語"==t.type?r("div",[r("img",{attrs:{src:e("35fb")}})]):"文学"==t.type?r("div",[r("img",{attrs:{src:e("8b9b")}})]):r("div",[t._v("\n      該当するtypeがありません\n    ")])]),r("router-link",{attrs:{to:"/"}},[t._v("Back to Home")])],1)},i=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("audio",{attrs:{autoplay:"",loop:""}},[r("source",{attrs:{src:e("98ea")}}),t._v("\nあなたのブラウザーは "),r("code",[t._v("audio")]),t._v(" 要素をサポートしていません。\n  ")])}],o=(e("386d"),e("28a5"),e("a745")),c=e.n(o);function u(t){if(c()(t))return t}var a=e("5d73"),s=e.n(a),f=e("c8bb"),l=e.n(f);function p(t,n){if(l()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=s()(t);!(r=(c=u.next()).done);r=!0)if(e.push(c.value),n&&e.length===n)break}catch(a){i=!0,o=a}finally{try{r||null==u["return"]||u["return"]()}finally{if(i)throw o}}return e}}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(t,n){return u(t)||p(t,n)||v()}var g=e("2241"),b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("figure",{staticClass:"winner_icon_set"},[e("img",{staticClass:"img",attrs:{alt:"",src:t.url}}),e("figcaption",{staticClass:"icon_title"},[t._v(t._s(t.icon_title))])])},h=[],x={name:"WinnerIconzset",props:{icon_title:String,url:String}},y=x,m=(e("9305"),e("2877")),w=Object(m["a"])(y,b,h,!1,null,"298b5a75",null),_=w.exports,S={name:"about",components:{Logo:g["a"],WinnerIconSet:_},methods:{},created:function(){var t=this,n=location.search.slice(1).split("&"),e=d(n,3),r=e[0],i=e[1],o=e[2],c={0:"総記",1:"哲学",2:"歴史",3:"社会科学",4:"自然科学",5:"技術工学",6:"産業",7:"芸術",8:"言語",9:"文学"};this.type=c[r],this.power=1e4*i,fetch(encodeURI("https://jpsearch.go.jp/api/item/".concat(o))).then((function(t){return t.json()})).then((function(n){console.log(t),t.collection=n})).catch((function(n){t.collection=n}))},data:function(){return{collection:{},type:"",power:0}}},j=S,O=(e("e76e"),Object(m["a"])(j,r,i,!1,null,null,null));n["default"]=O.exports},fa88:function(t,n,e){t.exports=e.p+"img/syakaikagaku.2367edae.jpg"}}]);
//# sourceMappingURL=about.17fd4d2b.js.map