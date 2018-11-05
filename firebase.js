/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
var firebase=function(){var e=void 0===e?self:e;return function(t){function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}var n=e.webpackJsonpFirebase;e.webpackJsonpFirebase=function(e,o,a){for(var c,s,u,f=0,l=[];f<e.length;f++)s=e[f],i[s]&&l.push(i[s][0]),i[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);for(n&&n(e,o,a);l.length;)l.shift()();if(a)for(f=0;f<a.length;f++)u=r(r.s=a[f]);return u};var o={},i={5:0};return r.e=function(e){function t(){c.onerror=c.onload=null,clearTimeout(s);var t=i[e];0!==t&&(t&&t[1](Error("Loading chunk "+e+" failed.")),i[e]=void 0)}var n=i[e];if(0===n)return new Promise(function(e){e()});if(n)return n[2];var o=new Promise(function(t,r){n=i[e]=[t,r]});n[2]=o;var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,r.nc&&c.setAttribute("nonce",r.nc),c.src=r.p+""+e+".js";var s=setTimeout(t,12e4);return c.onerror=c.onload=t,a.appendChild(c),o},r.m=t,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e},r(r.s=57)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(28);t.assert=n.assert,t.assertionError=n.assertionError;var o=r(29);t.base64=o.base64,t.base64Decode=o.base64Decode,t.base64Encode=o.base64Encode;var i=r(20);t.CONSTANTS=i.CONSTANTS;var a=r(65);t.deepCopy=a.deepCopy,t.deepExtend=a.deepExtend,t.patchProperty=a.patchProperty;var c=r(66);t.Deferred=c.Deferred;var s=r(67);t.getUA=s.getUA,t.isMobileCordova=s.isMobileCordova,t.isNodeSdk=s.isNodeSdk,t.isReactNative=s.isReactNative;var u=r(68);t.ErrorFactory=u.ErrorFactory,t.FirebaseError=u.FirebaseError,t.patchCapture=u.patchCapture;var f=r(30);t.jsonEval=f.jsonEval,t.stringify=f.stringify;var l=r(69);t.decode=l.decode,t.isAdmin=l.isAdmin,t.issuedAtTime=l.issuedAtTime,t.isValidFormat=l.isValidFormat,t.isValidTimestamp=l.isValidTimestamp;var h=r(31);t.clone=h.clone,t.contains=h.contains,t.every=h.every,t.extend=h.extend,t.findKey=h.findKey,t.findValue=h.findValue,t.forEach=h.forEach,t.getAnyKey=h.getAnyKey,t.getCount=h.getCount,t.getValues=h.getValues,t.isEmpty=h.isEmpty,t.isNonNullObject=h.isNonNullObject,t.map=h.map,t.safeGet=h.safeGet;var p=r(70);t.querystring=p.querystring,t.querystringDecode=p.querystringDecode;var d=r(71);t.Sha1=d.Sha1;var v=r(73);t.async=v.async,t.createSubscribe=v.createSubscribe;var y=r(74);t.errorPrefix=y.errorPrefix,t.validateArgCount=y.validateArgCount,t.validateCallback=y.validateCallback,t.validateContextObject=y.validateContextObject,t.validateNamespace=y.validateNamespace;var b=r(75);t.stringLength=b.stringLength,t.stringToByteArray=b.stringToByteArray},,,,,,function(e,t,r){"use strict";function n(){function e(e){h(d[e],"delete"),delete d[e]}function t(e){return e=e||c,a(d,e)||o("no-app",{name:e}),d[e]}function r(e,t){void 0===t?t=c:"string"==typeof t&&""!==t||o("bad-app-name",{name:t+""}),a(d,t)&&o("duplicate-app",{name:t});var r=new u(e,t,b);return d[t]=r,h(r,"create"),r}function s(){return Object.keys(d).map(function(e){return d[e]})}function f(e,r,n,a,c){v[e]&&o("duplicate-service",{name:e}),v[e]=r,a&&(y[e]=a,s().forEach(function(e){a("create",e)}));var f=function(r){return void 0===r&&(r=t()),"function"!=typeof r[e]&&o("invalid-app-argument",{name:e}),r[e]()};return void 0!==n&&Object(i.deepExtend)(f,n),b[e]=f,u.prototype[e]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return this.t.bind(this,e).apply(this,c?t:[])},f}function l(e){Object(i.deepExtend)(b,e)}function h(e,t){Object.keys(v).forEach(function(r){var n=p(e,r);null!==n&&y[n]&&y[n](t,e)})}function p(e,t){if("serverAuth"===t)return null;var r=t;return e.options,r}var d={},v={},y={},b={__esModule:!0,initializeApp:r,app:t,apps:null,Promise:Promise,SDK_VERSION:"4.9.1",INTERNAL:{registerService:f,createFirebaseNamespace:n,extendNamespace:l,createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,removeApp:e,factories:v,useAsService:p,Promise:Promise,deepExtend:i.deepExtend}};return Object(i.patchProperty)(b,"default",b),Object.defineProperty(b,"apps",{get:s}),Object(i.patchProperty)(t,"App",u),b}function o(e,t){throw l.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c="[DEFAULT]",s=[],u=function(){function e(e,t,r){this.r=r,this.a=!1,this.u={},this.f=t,this.h=Object(i.deepCopy)(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){s.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){s=s.filter(function(t){return t!==e})}}}return Object.defineProperty(e.prototype,"name",{get:function(){return this.v(),this.f},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.v(),this.h},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise(function(t){e.v(),t()}).then(function(){e.r.INTERNAL.removeApp(e.f);var t=[];return Object.keys(e.u).forEach(function(r){Object.keys(e.u[r]).forEach(function(n){t.push(e.u[r][n])})}),Promise.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.a=!0,e.u={}})},e.prototype.t=function(e,t){if(void 0===t&&(t=c),this.v(),this.u[e]||(this.u[e]={}),!this.u[e][t]){var r=t!==c?t:void 0,n=this.r.INTERNAL.factories[e](this,this.extendApp.bind(this),r);this.u[e][t]=n}return this.u[e][t]},e.prototype.extendApp=function(e){var t=this;Object(i.deepExtend)(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(s.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),s=[])},e.prototype.v=function(){this.a&&o("app-deleted",{name:this.f})},e}();u.prototype.name&&u.prototype.options||u.prototype.delete||console.log("dc");var f={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},l=new i.ErrorFactory("app","Firebase",f);r.d(t,"firebase",function(){return h});var h=n();t.default=h},,,,,,function(t,r){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof e&&(n=e)}t.exports=n},,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONSTANTS={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"}},,,,,,,function(e,t){function r(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?d=p.concat(d):y=-1,d.length&&c())}function c(){if(!v){var e=o(a);v=!0;for(var t=d.length;t;){for(p=d,d=[];++y<t;)p&&p[y].run();y=-1,t=d.length}p=null,v=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var f,l,h=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var p,d=[],v=!1,y=-1;h.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];d.push(new s(e,t)),1!==d.length||v||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.prependListener=u,h.prependOnceListener=u,h.listeners=function(e){return[]},h.binding=function(e){throw Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(20);t.assert=function(e,r){if(!e)throw t.assertionError(r)},t.assertionError=function(e){return Error("Firebase Database ("+n.CONSTANTS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},o=function(e){for(var t=[],r=0,n=0;r<e.length;){var o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=e[r++];t[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var i=e[r++],a=e[r++],c=e[r++],s=((7&o)<<18|(63&i)<<12|(63&a)<<6|63&c)-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{var i=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")};t.base64={y:null,b:null,_:null,g:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.A();for(var r=t?this._:this.y,n=[],o=0;o<e.length;o+=3){var i=e[o],a=o+1<e.length,c=a?e[o+1]:0,s=o+2<e.length,u=s?e[o+2]:0,f=i>>2,l=(3&i)<<4|c>>4,h=(15&c)<<2|u>>6,p=63&u;s||(p=64,a||(h=64)),n.push(r[f],r[l],r[h],r[p])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(n(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.A();for(var r=t?this.g:this.b,n=[],o=0;o<e.length;){var i=r[e.charAt(o++)],a=o<e.length,c=a?r[e.charAt(o)]:0;++o;var s=o<e.length,u=s?r[e.charAt(o)]:64;++o;var f=o<e.length,l=f?r[e.charAt(o)]:64;if(++o,null==i||null==c||null==u||null==l)throw Error();var h=i<<2|c>>4;if(n.push(h),64!=u){var p=c<<4&240|u>>2;if(n.push(p),64!=l){var d=u<<6&192|l;n.push(d)}}}return n},A:function(){if(!this.y){this.y={},this.b={},this._={},this.g={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.y[e]=this.ENCODED_VALS.charAt(e),this.b[this.y[e]]=e,this._[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.g[this._[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.b[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.g[this.ENCODED_VALS.charAt(e)]=e)}}},t.base64Encode=function(e){var r=n(e);return t.base64.encodeByteArray(r,!0)},t.base64Decode=function(e){try{return t.base64.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}},function(e,t,r){"use strict";function n(e){return JSON.parse(e)}function o(e){return JSON.stringify(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.jsonEval=n,t.stringify=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.contains=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.safeGet=function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},t.forEach=function(e,t){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])},t.extend=function(e,r){return t.forEach(r,function(t,r){e[t]=r}),e},t.clone=function(e){return t.extend({},e)},t.isNonNullObject=function(e){return"object"==typeof e&&null!==e},t.isEmpty=function(e){for(var t in e)return!1;return!0},t.getCount=function(e){var t=0;for(var r in e)t++;return t},t.map=function(e,t,r){var n={};for(var o in e)n[o]=t.call(r,e[o],o,e);return n},t.findKey=function(e,t,r){for(var n in e)if(t.call(r,e[n],n,e))return n},t.findValue=function(e,r,n){var o=t.findKey(e,r,n);return o&&e[o]},t.getAnyKey=function(e){for(var t in e)return t},t.getValues=function(e){var t=[],r=0;for(var n in e)t[r++]=e[n];return t},t.every=function(e,t){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&!t(r,e[r]))return!1;return!0}},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){r(58),e.exports=r(6).default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(59),o=(r.n(n),r(63)),i=(r.n(o),r(64));r.n(i)},function(t,r,n){(function(t){var r=function(){if(void 0!==t)return t;if(void 0!==e)return e;if("undefined"!=typeof self)return self;throw Error("unable to locate global object")}();"undefined"==typeof Promise&&(r.Promise=Promise=n(60))}).call(r,n(12))},function(e,t,r){(function(t){!function(r){function n(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this.O=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e.O.push(t);e._handled=!0,i.T(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._state?c:s)(t.promise,e._value);var n;try{n=r(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,n)})}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var r=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof r)return void l(o(r,t),e)}e._state=1,e._value=t,u(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e.O.length&&i.T(function(){e._handled||i.j(e._value)});for(var t=0,r=e.O.length;t<r;t++)a(e,e.O[t]);e.O=null}function f(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function l(e,t){var r=!1;try{e(function(e){r||(r=!0,c(t,e))},function(e){r||(r=!0,s(t,e))})}catch(e){if(r)return;r=!0,s(t,e)}}var h=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(n);return a(this,new f(e,t,r)),r},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,r){function n(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(e){n(i,e)},r)}t[i]=a,0==--o&&e(t)}catch(e){r(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)n(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,r){r(e)})},i.race=function(e){return new i(function(t,r){for(var n=0,o=e.length;n<o;n++)e[n].then(t,r)})},i.T="function"==typeof t&&function(e){t(e)}||function(e){h(e,0)},i.j=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i.S=function(e){i.T=e},i.C=function(e){i.j=e},void 0!==e&&e.exports?e.exports=i:r.Promise||(r.Promise=i)}(this)}).call(t,r(61).setImmediate)},function(t,r,n){function o(e,t){this.N=e,this._clearFn=t}var i=Function.prototype.apply;r.setTimeout=function(){return new o(i.call(setTimeout,e,arguments),clearTimeout)},r.setInterval=function(){return new o(i.call(setInterval,e,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(e,this.N)},r.enroll=function(e,t){clearTimeout(e.w),e.P=t},r.unenroll=function(e){clearTimeout(e.w),e.P=-1},r.k=r.active=function(e){clearTimeout(e.w);var t=e.P;t>=0&&(e.w=setTimeout(function(){e.M&&e.M()},t))},n(62),r.setImmediate=setImmediate,r.clearImmediate=clearImmediate},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){"function"!=typeof e&&(e=Function(""+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return u[s]=n,c(s),s++}function o(e){delete u[e]}function i(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}function a(e){if(f)setTimeout(a,0,e);else{var t=u[e];if(t){f=!0;try{i(t)}finally{o(e),f=!1}}}}if(!e.setImmediate){var c,s=1,u={},f=!1,l=e.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(e);h=h&&h.setTimeout?h:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}()?function(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&a(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),c=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;c=function(t){var r=l.createElement("script");r.onreadystatechange=function(){a(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}():function(){c=function(e){setTimeout(a,0,e)}}(),h.setImmediate=n,h.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,r(12),r(27))},function(e,t){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var i=t[o];if(e.call(n,i,o,t))return i;o++}}})},function(e,t){Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),r=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<r;){var i=t[o];if(e.call(n,i,o,t))return o;o++}return-1}})},function(e,t,r){"use strict";function n(e){return o(void 0,e)}function o(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:var r=t;return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=o(e[n],t[n]));return e}function i(e,t,r){e[t]=r}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCopy=n,t.deepExtend=o,t.patchProperty=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.promise=new Promise(function(t,r){e.resolve=t,e.reject=r})}return e.prototype.wrapCallback=function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch(function(){}),1===e.length?e(r):e(r,n))}},e}();t.Deferred=n},function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=n(20);r.getUA=function(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""},r.isMobileCordova=function(){return void 0!==e&&!!(e.cordova||e.phonegap||e.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(r.getUA())},r.isReactNative=function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},r.isNodeSdk=function(){return!0===o.CONSTANTS.NODE_CLIENT||!0===o.CONSTANTS.NODE_ADMIN}},function(e,t,r){"use strict";function n(e){var t=i;return i=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o="FirebaseError",i=Error.captureStackTrace;t.patchCapture=n;var a=function(){function e(e,t){if(this.code=e,this.message=t,i)i(this,c.prototype.create);else{var r=Error.apply(this,arguments);this.name=o,Object.defineProperty(this,"stack",{get:function(){return r.stack}})}}return e}();t.FirebaseError=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a.prototype.name=o;var c=function(){function e(e,t,r){this.service=e,this.serviceName=t,this.errors=r,this.pattern=/\{\$([^}]+)}/g}return e.prototype.create=function(e,t){void 0===t&&(t={});var r,n=this.errors[e],o=this.service+"/"+e;r=void 0===n?"Error":n.replace(this.pattern,function(e,r){var n=t[r];return void 0!==n?""+n:"<"+r+"?>"}),r=this.serviceName+": "+r+" ("+o+").";var i=new a(o,r);for(var c in t)t.hasOwnProperty(c)&&"_"!==c.slice(-1)&&(i[c]=t[c]);return i},e}();t.ErrorFactory=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(29),o=r(30);t.decode=function(e){var t={},r={},i={},a="";try{var c=e.split(".");t=o.jsonEval(n.base64Decode(c[0])||""),r=o.jsonEval(n.base64Decode(c[1])||""),a=c[2],i=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:i,signature:a}},t.isValidTimestamp=function(e){var r,n,o=t.decode(e).claims,i=Math.floor((new Date).getTime()/1e3);return"object"==typeof o&&(o.hasOwnProperty("nbf")?r=o.nbf:o.hasOwnProperty("iat")&&(r=o.iat),n=o.hasOwnProperty("exp")?o.exp:r+86400),i&&r&&n&&i>=r&&i<=n},t.issuedAtTime=function(e){var r=t.decode(e).claims;return"object"==typeof r&&r.hasOwnProperty("iat")?r.iat:null},t.isValidFormat=function(e){var r=t.decode(e),n=r.claims;return!!r.signature&&!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},t.isAdmin=function(e){var r=t.decode(e).claims;return"object"==typeof r&&!0===r.admin}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(31);t.querystring=function(e){var t=[];return n.forEach(e,function(e,r){Array.isArray(r)?r.forEach(function(r){t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}),t.length?"&"+t.join("&"):""},t.querystringDecode=function(e){var t={};return e.replace(/^\?/,"").split("&").forEach(function(e){if(e){var r=e.split("=");t[r[0]]=r[1]}}),t}},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(72),i=function(e){function t(){var t=e.call(this)||this;t.D=[],t.x=[],t.F=[],t.I=[],t.L=0,t.R=0,t.blockSize=64,t.I[0]=128;for(var r=1;r<t.blockSize;++r)t.I[r]=0;return t.reset(),t}return n(t,e),t.prototype.reset=function(){this.D[0]=1732584193,this.D[1]=4023233417,this.D[2]=2562383102,this.D[3]=271733878,this.D[4]=3285377520,this.L=0,this.R=0},t.prototype.V=function(e,t){t||(t=0);var r=this.F;if("string"==typeof e)for(var n=0;n<16;n++)r[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var n=0;n<16;n++)r[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var n=16;n<80;n++){var o=r[n-3]^r[n-8]^r[n-14]^r[n-16];r[n]=4294967295&(o<<1|o>>>31)}for(var i,a,c=this.D[0],s=this.D[1],u=this.D[2],f=this.D[3],l=this.D[4],n=0;n<80;n++){n<40?n<20?(i=f^s&(u^f),a=1518500249):(i=s^u^f,a=1859775393):n<60?(i=s&u|f&(s|u),a=2400959708):(i=s^u^f,a=3395469782);var o=(c<<5|c>>>27)+i+l+a+r[n]&4294967295;l=f,f=u,u=4294967295&(s<<30|s>>>2),s=c,c=o}this.D[0]=this.D[0]+c&4294967295,this.D[1]=this.D[1]+s&4294967295,this.D[2]=this.D[2]+u&4294967295,this.D[3]=this.D[3]+f&4294967295,this.D[4]=this.D[4]+l&4294967295},t.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=0,o=this.x,i=this.L;n<t;){if(0==i)for(;n<=r;)this.V(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(o[i]=e.charCodeAt(n),++i,++n,i==this.blockSize){this.V(o),i=0;break}}else for(;n<t;)if(o[i]=e[n],++i,++n,i==this.blockSize){this.V(o),i=0;break}}this.L=i,this.R+=t}},t.prototype.digest=function(){var e=[],t=8*this.R;this.L<56?this.update(this.I,56-this.L):this.update(this.I,this.blockSize-(this.L-56));for(var r=this.blockSize-1;r>=56;r--)this.x[r]=255&t,t/=256;this.V(this.x);for(var n=0,r=0;r<5;r++)for(var o=24;o>=0;o-=8)e[n]=this.D[r]>>o&255,++n;return e},t}(o.Hash);t.Sha1=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.blockSize=-1}return e}();t.Hash=n},function(e,t,r){"use strict";function n(e,t){var r=new c(e,t);return r.subscribe.bind(r)}function o(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];Promise.resolve(!0).then(function(){e.apply(void 0,r)}).catch(function(e){t&&t(e)})}}function i(e,t){if("object"!=typeof e||null===e)return!1;for(var r=0,n=t;r<n.length;r++){var o=n[r];if(o in e&&"function"==typeof e[o])return!0}return!1}function a(){}Object.defineProperty(t,"__esModule",{value:!0}),t.createSubscribe=n;var c=function(){function e(e,t){var r=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(function(){e(r)}).catch(function(e){r.error(e)})}return e.prototype.next=function(e){this.forEachObserver(function(t){t.next(e)})},e.prototype.error=function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)},e.prototype.complete=function(){this.forEachObserver(function(e){e.complete()}),this.close()},e.prototype.subscribe=function(e,t,r){var n,o=this;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");n=i(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=a),void 0===n.error&&(n.error=a),void 0===n.complete&&(n.complete=a);var c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}}),this.observers.push(n),c},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var r=this;this.task.then(function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))},e}();t.async=o},function(e,t,r){"use strict";function n(e,t,r){var n="";switch(t){case 1:n=r?"first":"First";break;case 2:n=r?"second":"Second";break;case 3:n=r?"third":"Third";break;case 4:n=r?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}var o=e+" failed: ";return o+=n+" argument "}function o(e,t,r,o){if((!o||r)&&"string"!=typeof r)throw Error(n(e,t,o)+"must be a valid firebase namespace.")}function i(e,t,r,o){if((!o||r)&&"function"!=typeof r)throw Error(n(e,t,o)+"must be a valid function.")}function a(e,t,r,o){if((!o||r)&&("object"!=typeof r||null===r))throw Error(n(e,t,o)+"must be a valid context object.")}Object.defineProperty(t,"__esModule",{value:!0}),t.validateArgCount=function(e,t,r,n){var o;if(n<t?o="at least "+t:n>r&&(o=0===r?"none":"no more than "+r),o){var i=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+o+".";throw Error(i)}},t.errorPrefix=n,t.validateNamespace=o,t.validateCallback=i,t.validateContextObject=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(28);t.stringToByteArray=function(e){for(var t=[],r=0,o=0;o<e.length;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319){var a=i-55296;o++,n.assert(o<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(o)-56320)}i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):i<65536?(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},t.stringLength=function(e){for(var t=0,r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t}}])}().default;

/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
try {
  webpackJsonpFirebase([4], {76:function(va, Wb, Xb) {
    Xb(77);
  }, 77:function(va, Wb, Xb) {
    (function(va) {
      (function() {
        function x(a) {
          return "string" == typeof a;
        }
        function va(a) {
          return "boolean" == typeof a;
        }
        function Y() {
        }
        function Oa(a) {
          var b = typeof a;
          if ("object" == b) {
            if (!a) {
              return "null";
            }
            if (a instanceof Array) {
              return "array";
            }
            if (a instanceof Object) {
              return b;
            }
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) {
              return "object";
            }
            if ("[object Array]" == c || "number" == typeof a.length && void 0 !== a.splice && void 0 !== a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
              return "array";
            }
            if ("[object Function]" == c || void 0 !== a.call && void 0 !== a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
              return "function";
            }
          } else {
            if ("function" == b && void 0 === a.call) {
              return "object";
            }
          }
          return b;
        }
        function Wb(a) {
          return null === a;
        }
        function la(a) {
          return "array" == Oa(a);
        }
        function nb(a) {
          var b = Oa(a);
          return "array" == b || "object" == b && "number" == typeof a.length;
        }
        function G(a) {
          return "function" == Oa(a);
        }
        function O(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b;
        }
        function xi(a, b, c) {
          return a.call.apply(a.bind, arguments);
        }
        function yi(a, b, c) {
          if (!a) {
            throw Error();
          }
          if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
              var c = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(c, d), a.apply(b, c);
            };
          }
          return function() {
            return a.apply(b, arguments);
          };
        }
        function n(a, b, c) {
          return n = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? xi : yi, n.apply(null, arguments);
        }
        function Yb(a, b) {
          var c = Array.prototype.slice.call(arguments, 1);
          return function() {
            var b = c.slice();
            return b.push.apply(b, arguments), a.apply(this, b);
          };
        }
        function u(a, b) {
          function c() {
          }
          c.prototype = b.prototype;
          a.ib = b.prototype;
          a.prototype = new c;
          a.prototype.constructor = a;
          a.Rc = function(a, c, g) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
              d[e - 2] = arguments[e];
            }
            return b.prototype[c].apply(a, d);
          };
        }
        function L(a) {
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, L);
          } else {
            var b = Error().stack;
            b && (this.stack = b);
          }
          a && (this.message = a + "");
        }
        function Tc(a, b) {
          for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
            d += c.shift() + e.shift();
          }
          return d + c.join("%s");
        }
        function Uc(a) {
          return zi.test(a) ? (-1 != a.indexOf("&") && (a = a.replace(Ai, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Bi, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Ci, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Di, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ei, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Fi, "&#0;")), a) : a;
        }
        function w(a, b) {
          return -1 != a.indexOf(b);
        }
        function Vc(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }
        function Wc(a, b) {
          b.unshift(a);
          L.call(this, Tc.apply(null, b));
          b.shift();
        }
        function ob(a, b) {
          throw new Wc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        }
        function Gi(a, b) {
          var c = a.length, d = x(a) ? a.split("") : a;
          for (--c; 0 <= c; --c) {
            c in d && b.call(void 0, d[c], c, a);
          }
        }
        function Hi(a) {
          a: {
            for (var b = Ii, c = a.length, d = x(a) ? a.split("") : a, e = 0; e < c; e++) {
              if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a;
              }
            }
            b = -1;
          }
          return 0 > b ? null : x(a) ? a.charAt(b) : a[b];
        }
        function wa(a, b) {
          return 0 <= We(a, b);
        }
        function $b(a, b) {
          b = We(a, b);
          var c;
          return (c = 0 <= b) && Array.prototype.splice.call(a, b, 1), c;
        }
        function Z(a, b) {
          var c = 0;
          Gi(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
          });
        }
        function Xc(a) {
          return Array.prototype.concat.apply([], arguments);
        }
        function xa(a) {
          var b = a.length;
          if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) {
              c[d] = a[d];
            }
            return c;
          }
          return [];
        }
        function C(a) {
          return w(pb, a);
        }
        function Xe(a, b) {
          for (var c in a) {
            b.call(void 0, a[c], c, a);
          }
        }
        function Ye(a) {
          var b, c = [], d = 0;
          for (b in a) {
            c[d++] = a[b];
          }
          return c;
        }
        function Ze(a) {
          var b, c = [], d = 0;
          for (b in a) {
            c[d++] = b;
          }
          return c;
        }
        function qb(a) {
          for (var b in a) {
            return !1;
          }
          return !0;
        }
        function rb(a) {
          var b, c = {};
          for (b in a) {
            c[b] = a[b];
          }
          return c;
        }
        function ma(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) {
              a[c] = d[c];
            }
            for (var g = 0; g < $e.length; g++) {
              c = $e[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
            }
          }
        }
        function Yc(a) {
          return Yc[" "](a), a;
        }
        function Ji(a, b) {
          var c = Ki;
          return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
        }
        function af() {
          var a = l.document;
          return a ? a.documentMode : void 0;
        }
        function bf(a) {
          return Ji(a, function() {
            for (var b = 0, c = cf(Zc + "").split("."), d = cf(a + "").split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
              var h = c[g] || "", f = d[g] || "";
              do {
                if (h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""], f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""], 0 == h[0].length && 0 == f[0].length) {
                  break;
                }
                b = Vc(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Vc(0 == h[2].length, 0 == f[2].length) || Vc(h[2], f[2]);
                h = h[3];
                f = f[3];
              } while (0 == b);
            }
            return 0 <= b;
          });
        }
        function df(a) {
          a.prototype.then = a.prototype.then;
          a.prototype.$goog_Thenable = !0;
        }
        function ef(a) {
          if (!a) {
            return !1;
          }
          try {
            return !!a.$goog_Thenable;
          } catch (b) {
            return !1;
          }
        }
        function $c(a, b, c) {
          this.f = c;
          this.c = a;
          this.g = b;
          this.b = 0;
          this.a = null;
        }
        function ff(a, b) {
          a.g(b);
          a.b < a.f && (a.b++, b.next = a.a, a.a = b);
        }
        function Li() {
          var a = gf, b = null;
          return a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null), b;
        }
        function ad() {
          this.next = this.b = this.a = null;
        }
        function hf(a) {
          l.setTimeout(function() {
            throw a;
          }, 0);
        }
        function Mi() {
          var a = l.MessageChannel;
          if (void 0 === a && "undefined" != typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = n(function(a) {
              "*" != d && a.origin != d || a.data != c || this.port1.onmessage();
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {postMessage:function() {
              b.postMessage(c, d);
            }};
          }), void 0 !== a && !C("Trident") && !C("MSIE")) {
            var b = new a, c = {}, d = c;
            return b.port1.onmessage = function() {
              if (void 0 !== c.next) {
                c = c.next;
                var a = c.pb;
                c.pb = null;
                a();
              }
            }, function(a) {
              d.next = {pb:a};
              d = d.next;
              b.port2.postMessage(0);
            };
          }
          return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = function() {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null;
            };
            document.documentElement.appendChild(b);
          } : function(a) {
            l.setTimeout(a, 0);
          };
        }
        function tb(a, b) {
          ac || Ni();
          bd || (ac(), bd = !0);
          var c = gf, d = jf.get();
          d.set(a, b);
          c.b ? c.b.next = d : c.a = d;
          c.b = d;
        }
        function Ni() {
          if (-1 != (l.Promise + "").indexOf("[native code]")) {
            var a = l.Promise.resolve(void 0);
            ac = function() {
              a.then(kf);
            };
          } else {
            ac = function() {
              var a = kf;
              !G(l.setImmediate) || l.Window && l.Window.prototype && !C("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (cd || (cd = Mi()), cd(a)) : l.setImmediate(a);
            };
          }
        }
        function kf() {
          for (var a; a = Li();) {
            try {
              a.a.call(a.b);
            } catch (b) {
              hf(b);
            }
            ff(jf, a);
          }
          bd = !1;
        }
        function t(a, b) {
          if (this.a = ya, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, a != Y) {
            try {
              var c = this;
              a.call(b, function(a) {
                za(c, ub, a);
              }, function(a) {
                if (!(a instanceof Pa)) {
                  try {
                    if (a instanceof Error) {
                      throw a;
                    }
                    throw Error("Promise rejected.");
                  } catch (e) {
                  }
                }
                za(c, fa, a);
              });
            } catch (d) {
              za(this, fa, d);
            }
          }
        }
        function lf() {
          this.next = this.f = this.b = this.g = this.a = null;
          this.c = !1;
        }
        function dd(a, b, c) {
          var d = mf.get();
          return d.g = a, d.b = b, d.f = c, d;
        }
        function p(a) {
          if (a instanceof t) {
            return a;
          }
          var b = new t(Y);
          return za(b, ub, a), b;
        }
        function z(a) {
          return new t(function(b, c) {
            c(a);
          });
        }
        function nf(a, b, c) {
          of(a, b, c, null) || tb(Yb(b, a));
        }
        function Oi(a) {
          return new t(function(b, c) {
            var d = a.length, e = [];
            if (d) {
              for (var g, h = function(a, c) {
                d--;
                e[a] = c;
                0 == d && b(e);
              }, f = function(a) {
                c(a);
              }, k = 0; k < a.length; k++) {
                g = a[k], nf(g, Yb(h, k), f);
              }
            } else {
              b(e);
            }
          });
        }
        function Pi(a) {
          return new t(function(b) {
            var c = a.length, d = [];
            if (c) {
              for (var e, g = function(a, e, g) {
                c--;
                d[a] = e ? {Ub:!0, value:g} : {Ub:!1, reason:g};
                0 == c && b(d);
              }, h = 0; h < a.length; h++) {
                e = a[h], nf(e, Yb(g, h, !0), Yb(g, h, !1));
              }
            } else {
              b(d);
            }
          });
        }
        function Qa(a, b) {
          return b = dd(b, b, void 0), b.c = !0, fd(a, b), a;
        }
        function pf(a, b) {
          if (a.a == ya) {
            if (a.c) {
              var c = a.c;
              if (c.b) {
                for (var d = 0, e = null, g = null, h = c.b; h && (h.c || (d++, h.a == a && (e = h), !(e && 1 < d))); h = h.next) {
                  e || (g = h);
                }
                e && (c.a == ya && 1 == d ? pf(c, b) : (g ? (d = g, d.next == c.f && (c.f = d), d.next = d.next.next) : qf(c), rf(c, e, fa, b)));
              }
              a.c = null;
            } else {
              za(a, fa, b);
            }
          }
        }
        function fd(a, b) {
          a.b || a.a != ub && a.a != fa || a.h || (a.h = !0, tb(a.Qb, a));
          a.f ? a.f.next = b : a.b = b;
          a.f = b;
        }
        function sf(a, b, c, d) {
          var e = dd(null, null, null);
          return e.a = new t(function(a, h) {
            e.g = b ? function(c) {
              try {
                var e = b.call(d, c);
                a(e);
              } catch (ed) {
                h(ed);
              }
            } : a;
            e.b = c ? function(b) {
              try {
                var e = c.call(d, b);
                void 0 === e && b instanceof Pa ? h(b) : a(e);
              } catch (ed) {
                h(ed);
              }
            } : h;
          }), e.a.c = a, fd(a, e), e.a;
        }
        function za(a, b, c) {
          a.a == ya && (a === c && (b = fa, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, of(c, a.Ac, a.Bc, a) || (a.i = c, a.a = b, a.c = null, a.h || (a.h = !0, tb(a.Qb, a)), b != fa || c instanceof Pa || Qi(a, c)));
        }
        function of(a, b, c, d) {
          if (a instanceof t) {
            return fd(a, dd(b || Y, c || null, d)), !0;
          }
          if (ef(a)) {
            return a.then(b, c, d), !0;
          }
          if (O(a)) {
            try {
              var e = a.then;
              if (G(e)) {
                return Ri(a, e, b, c, d), !0;
              }
            } catch (g) {
              return c.call(d, g), !0;
            }
          }
          return !1;
        }
        function Ri(a, b, c, d, e) {
          function g(a) {
            f || (f = !0, d.call(e, a));
          }
          function h(a) {
            f || (f = !0, c.call(e, a));
          }
          var f = !1;
          try {
            b.call(a, h, g);
          } catch (sb) {
            g(sb);
          }
        }
        function qf(a) {
          var b = null;
          return a.b && (b = a.b, a.b = b.next, b.next = null), a.b || (a.f = null), b;
        }
        function rf(a, b, c, d) {
          if (c == fa && b.b && !b.c) {
            for (; a && a.g; a = a.c) {
              a.g = !1;
            }
          }
          if (b.a) {
            b.a.c = null, tf(b, c, d);
          } else {
            try {
              b.c ? b.g.call(b.f) : tf(b, c, d);
            } catch (e) {
              uf.call(null, e);
            }
          }
          ff(mf, b);
        }
        function tf(a, b, c) {
          b == ub ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
        }
        function Qi(a, b) {
          a.g = !0;
          tb(function() {
            a.g && uf.call(null, b);
          });
        }
        function Pa(a) {
          L.call(this, a);
        }
        function Aa() {
          this.a = "";
          this.b = vf;
        }
        function wf(a) {
          return a instanceof Aa && a.constructor === Aa && a.b === vf ? a.a : (ob("expected object of type Const, got '" + a + "'"), "type_error:Const");
        }
        function vb(a) {
          var b = new Aa;
          return b.a = a, b;
        }
        function Ra() {
          this.a = "";
          this.b = xf;
        }
        function yf(a) {
          return a instanceof Ra && a.constructor === Ra && a.b === xf ? a.a : (ob("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Oa(a)), "type_error:TrustedResourceUrl");
        }
        function gd(a, b) {
          return a = Si(a, b), b = new Ra, b.a = a, b;
        }
        function Si(a, b) {
          var c = wf(a);
          if (!Ti.test(c)) {
            throw Error("Invalid TrustedResourceUrl format: " + c);
          }
          return c.replace(Ui, function(a, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) {
              throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            }
            return a = b[e], a instanceof Aa ? wf(a) : encodeURIComponent(a + "");
          });
        }
        function aa() {
          this.a = "";
          this.b = zf;
        }
        function bc(a) {
          return a instanceof aa && a.constructor === aa && a.b === zf ? a.a : (ob("expected object of type SafeUrl, got '" + a + "' of type " + Oa(a)), "type_error:SafeUrl");
        }
        function Af(a) {
          return a instanceof aa ? a : (a = a.la ? a.ja() : a + "", Bf.test(a) || (a = "about:invalid#zClosurez"), hd(a));
        }
        function hd(a) {
          var b = new aa;
          return b.a = a, b;
        }
        function Sa() {
          this.a = "";
          this.b = Cf;
        }
        function cc(a) {
          var b = new Sa;
          return b.a = a, b;
        }
        function dc(a) {
          var b = document;
          return x(a) ? b.getElementById(a) : a;
        }
        function Df(a, b) {
          Xe(b, function(b, d) {
            b && b.la && (b = b.ja());
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ef.hasOwnProperty(d) ? a.setAttribute(Ef[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
          });
        }
        function Vi(a, b, c) {
          var d = arguments, e = document, g = d[0] + "", h = d[1];
          if (!Wi && h && (h.name || h.type)) {
            if (g = ["<", g], h.name && g.push(' name="', Uc(h.name), '"'), h.type) {
              g.push(' type="', Uc(h.type), '"');
              var f = {};
              ma(f, h);
              delete f.type;
              h = f;
            }
            g.push(">");
            g = g.join("");
          }
          return g = e.createElement(g), h && (x(h) ? g.className = h : la(h) ? g.className = h.join(" ") : Df(g, h)), 2 < d.length && Xi(e, g, d), g;
        }
        function Xi(a, b, c) {
          function d(c) {
            c && b.appendChild(x(c) ? a.createTextNode(c) : c);
          }
          for (var e = 2; e < c.length; e++) {
            var g = c[e];
            !nb(g) || O(g) && 0 < g.nodeType ? d(g) : M(Yi(g) ? xa(g) : g, d);
          }
        }
        function Yi(a) {
          if (a && "number" == typeof a.length) {
            if (O(a)) {
              return "function" == typeof a.item || "string" == typeof a.item;
            }
            if (G(a)) {
              return "function" == typeof a.item;
            }
          }
          return !1;
        }
        function Ff(a) {
          var b = [];
          return id(new Zi, a, b), b.join("");
        }
        function Zi() {
        }
        function id(a, b, c) {
          if (null == b) {
            c.push("null");
          } else {
            if ("object" == typeof b) {
              if (la(b)) {
                var d = b;
                b = d.length;
                c.push("[");
                for (var e = "", g = 0; g < b; g++) {
                  c.push(e), id(a, d[g], c), e = ",";
                }
                return void c.push("]");
              }
              if (!(b instanceof String || b instanceof Number || b instanceof Boolean)) {
                c.push("{");
                e = "";
                for (d in b) {
                  Object.prototype.hasOwnProperty.call(b, d) && "function" != typeof(g = b[d]) && (c.push(e), Gf(d, c), c.push(":"), id(a, g, c), e = ",");
                }
                return void c.push("}");
              }
              b = b.valueOf();
            }
            switch(typeof b) {
              case "string":
                Gf(b, c);
                break;
              case "number":
                c.push(isFinite(b) && !isNaN(b) ? b + "" : "null");
                break;
              case "boolean":
                c.push(b + "");
                break;
              case "function":
                c.push("null");
                break;
              default:
                throw Error("Unknown type: " + typeof b);
            }
          }
        }
        function Gf(a, b) {
          b.push('"', a.replace($i, function(a) {
            var b = Hf[a];
            return b || (b = "\\u" + (65536 | a.charCodeAt(0)).toString(16).substr(1), Hf[a] = b), b;
          }), '"');
        }
        function ec() {
          0 != If && (Jf[this[fc] || (this[fc] = ++Kf)] = this);
          this.oa = this.oa;
          this.Fa = this.Fa;
        }
        function Lf(a) {
          a.oa || (a.oa = !0, a.ta(), 0 != If && (a = a[fc] || (a[fc] = ++Kf), delete Jf[a]));
        }
        function P(a, b) {
          this.type = a;
          this.b = this.target = b;
          this.Bb = !0;
        }
        function Ba(a, b) {
          if (P.call(this, a ? a.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, a) {
            var c = this.type = a.type, d = a.changedTouches ? a.changedTouches[0] : null;
            if (this.target = a.target || a.srcElement, this.b = b, b = a.relatedTarget) {
              if (Mf) {
                a: {
                  try {
                    Yc(b.nodeName);
                    c = !0;
                    break a;
                  } catch (e) {
                  }
                  c = !1;
                }
                c || (b = null);
              }
            } else {
              "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            }
            this.relatedTarget = b;
            null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = x(a.pointerType) ? a.pointerType : aj[a.pointerType] || "";
            this.a = a;
            a.defaultPrevented && this.c();
          }
        }
        function bj(a, b, c, d, e) {
          this.listener = a;
          this.a = null;
          this.src = b;
          this.type = c;
          this.capture = !!d;
          this.La = e;
          this.key = ++cj;
          this.ma = this.Ha = !1;
        }
        function gc(a) {
          a.ma = !0;
          a.listener = null;
          a.a = null;
          a.src = null;
          a.La = null;
        }
        function jd(a) {
          this.src = a;
          this.a = {};
          this.b = 0;
        }
        function kd(a, b, c, d, e, g) {
          var h = "" + b;
          (b = a.a[h]) || (b = a.a[h] = [], a.b++);
          var f = ld(b, c, e, g);
          return -1 < f ? (a = b[f], d || (a.Ha = !1)) : (a = new bj(c, a.src, h, !!e, g), a.Ha = d, b.push(a)), a;
        }
        function md(a, b) {
          var c = b.type;
          c in a.a && $b(a.a[c], b) && (gc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        }
        function ld(a, b, c, d) {
          for (var e = 0; e < a.length; ++e) {
            var g = a[e];
            if (!g.ma && g.listener == b && g.capture == !!c && g.La == d) {
              return e;
            }
          }
          return -1;
        }
        function na(a, b, c, d, e) {
          if (d && d.once) {
            nd(a, b, c, d, e);
          } else {
            if (la(b)) {
              for (var g = 0; g < b.length; g++) {
                na(a, b[g], c, d, e);
              }
            } else {
              c = od(c), a && a[wb] ? Nf(a, b, c, O(d) ? !!d.capture : !!d, e) : Of(a, b, c, !1, d, e);
            }
          }
        }
        function Of(a, b, c, d, e, g) {
          if (!b) {
            throw Error("Invalid event type");
          }
          var h = O(e) ? !!e.capture : !!e, f = hc(a);
          if (f || (a[pd] = f = new jd(a)), c = kd(f, b, c, d, h, g), !c.a) {
            if (d = dj(), c.a = d, d.src = a, d.listener = c, a.addEventListener) {
              ej || (e = h), void 0 === e && (e = !1), a.addEventListener("" + b, d, e);
            } else {
              if (!a.attachEvent) {
                throw Error("addEventListener and attachEvent are unavailable.");
              }
              a.attachEvent(Pf("" + b), d);
            }
            Qf++;
          }
        }
        function dj() {
          var a = fj, b = Rf ? function(c) {
            return a.call(b.src, b.listener, c);
          } : function(c) {
            if (!(c = a.call(b.src, b.listener, c))) {
              return c;
            }
          };
          return b;
        }
        function nd(a, b, c, d, e) {
          if (la(b)) {
            for (var g = 0; g < b.length; g++) {
              nd(a, b[g], c, d, e);
            }
          } else {
            c = od(c), a && a[wb] ? qd(a, b, c, O(d) ? !!d.capture : !!d, e) : Of(a, b, c, !0, d, e);
          }
        }
        function R(a, b, c, d, e) {
          if (la(b)) {
            for (var g = 0; g < b.length; g++) {
              R(a, b[g], c, d, e);
            }
          } else {
            d = O(d) ? !!d.capture : !!d, c = od(c), a && a[wb] ? (a = a.u, (b += "") in a.a && (g = a.a[b], -1 < (c = ld(g, c, d, e)) && (gc(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.a[b], a.b--)))) : a && (a = hc(a)) && (b = a.a["" + b], a = -1, b && (a = ld(b, c, d, e)), (c = -1 < a ? b[a] : null) && Sf(c));
          }
        }
        function Sf(a) {
          if ("number" != typeof a && a && !a.ma) {
            var b = a.src;
            if (b && b[wb]) {
              md(b.u, a);
            } else {
              var c = a.type, d = a.a;
              b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Pf(c), d);
              Qf--;
              (c = hc(b)) ? (md(c, a), 0 == c.b && (c.src = null, b[pd] = null)) : gc(a);
            }
          }
        }
        function Pf(a) {
          return a in rd ? rd[a] : rd[a] = "on" + a;
        }
        function Tf(a, b, c, d) {
          var e = !0;
          if ((a = hc(a)) && (b = a.a["" + b])) {
            for (b = b.concat(), a = 0; a < b.length; a++) {
              var g = b[a];
              g && g.capture == c && !g.ma && (g = Uf(g, d), e = e && !1 !== g);
            }
          }
          return e;
        }
        function Uf(a, b) {
          var c = a.listener, d = a.La || a.src;
          return a.Ha && Sf(a), c.call(d, b);
        }
        function fj(a, b) {
          if (a.ma) {
            return !0;
          }
          if (!Rf) {
            if (!b) {
              a: {
                b = ["window", "event"];
                for (var c = l, d = 0; d < b.length; d++) {
                  if (null == (c = c[b[d]])) {
                    b = null;
                    break a;
                  }
                }
                b = c;
              }
            }
            if (d = b, b = new Ba(d, this), c = !0, !(0 > d.keyCode || void 0 != d.returnValue)) {
              a: {
                var e = !1;
                if (0 == d.keyCode) {
                  try {
                    d.keyCode = -1;
                    break a;
                  } catch (h) {
                    e = !0;
                  }
                }
                (e || void 0 == d.returnValue) && (d.returnValue = !0);
              }
              d = [];
              for (e = b.b; e; e = e.parentNode) {
                d.push(e);
              }
              a = a.type;
              for (e = d.length - 1; 0 <= e; e--) {
                b.b = d[e];
                var g = Tf(d[e], a, !0, b);
                c = c && g;
              }
              for (e = 0; e < d.length; e++) {
                b.b = d[e], g = Tf(d[e], a, !1, b), c = c && g;
              }
            }
            return c;
          }
          return Uf(a, new Ba(b, this));
        }
        function hc(a) {
          return a = a[pd], a instanceof jd ? a : null;
        }
        function od(a) {
          return G(a) ? a : (a[sd] || (a[sd] = function(b) {
            return a.handleEvent(b);
          }), a[sd]);
        }
        function S() {
          ec.call(this);
          this.u = new jd(this);
          this.Ib = this;
          this.Ra = null;
        }
        function E(a, b) {
          var c, d = a.Ra;
          if (d) {
            for (c = []; d; d = d.Ra) {
              c.push(d);
            }
          }
          if (a = a.Ib, d = b.type || b, x(b)) {
            b = new P(b, a);
          } else {
            if (b instanceof P) {
              b.target = b.target || a;
            } else {
              var e = b;
              b = new P(d, a);
              ma(b, e);
            }
          }
          if (e = !0, c) {
            for (var g = c.length - 1; 0 <= g; g--) {
              var h = b.b = c[g];
              e = ic(h, d, !0, b) && e;
            }
          }
          if (h = b.b = a, e = ic(h, d, !0, b) && e, e = ic(h, d, !1, b) && e, c) {
            for (g = 0; g < c.length; g++) {
              h = b.b = c[g], e = ic(h, d, !1, b) && e;
            }
          }
        }
        function Nf(a, b, c, d, e) {
          kd(a.u, b + "", c, !1, d, e);
        }
        function qd(a, b, c, d, e) {
          kd(a.u, b + "", c, !0, d, e);
        }
        function ic(a, b, c, d) {
          if (!(b = a.u.a[b + ""])) {
            return !0;
          }
          b = b.concat();
          for (var e = !0, g = 0; g < b.length; ++g) {
            var h = b[g];
            if (h && !h.ma && h.capture == c) {
              var f = h.listener, k = h.La || h.src;
              h.Ha && md(a.u, h);
              e = !1 !== f.call(k, d) && e;
            }
          }
          return e && 0 != d.Bb;
        }
        function td(a, b, c) {
          if (G(a)) {
            c && (a = n(a, c));
          } else {
            if (!a || "function" != typeof a.handleEvent) {
              throw Error("Invalid listener argument");
            }
            a = n(a.handleEvent, a);
          }
          return 2147483647 < +b ? -1 : l.setTimeout(a, b || 0);
        }
        function Ca(a) {
          var b = null;
          return (new t(function(c, d) {
            -1 == (b = td(function() {
              c(void 0);
            }, a)) && d(Error("Failed to schedule timer."));
          })).s(function(a) {
            throw l.clearTimeout(b), a;
          });
        }
        function ud(a, b, c, d, e) {
          this.reset(a, b, c, d, e);
        }
        function vd(a) {
          this.f = a;
          this.b = this.c = this.a = null;
        }
        function jc(a, b) {
          this.name = a;
          this.value = b;
        }
        function Vf(a) {
          return a.c ? a.c : a.a ? Vf(a.a) : (ob("Root logger has no level set."), null);
        }
        function Wf(a) {
          kc || (kc = new vd(""), wd[""] = kc, kc.c = gj);
          var b;
          if (!(b = wd[a])) {
            b = new vd(a);
            var c = a.lastIndexOf("."), d = a.substr(c + 1);
            c = Wf(a.substr(0, c));
            c.b || (c.b = {});
            c.b[d] = b;
            b.a = c;
            wd[a] = b;
          }
          return b;
        }
        function Ta(a, b) {
          this.b = {};
          this.a = [];
          this.c = 0;
          var c = arguments.length;
          if (1 < c) {
            if (c % 2) {
              throw Error("Uneven number of arguments");
            }
            for (var d = 0; d < c; d += 2) {
              this.set(arguments[d], arguments[d + 1]);
            }
          } else {
            if (a) {
              a instanceof Ta ? (c = a.S(), d = a.P()) : (c = Ze(a), d = Ye(a));
              for (var e = 0; e < c.length; e++) {
                this.set(c[e], d[e]);
              }
            }
          }
        }
        function xd(a) {
          if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
              var d = a.a[b];
              Da(a.b, d) && (a.a[c++] = d);
              b++;
            }
            a.a.length = c;
          }
          if (a.c != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) {
              d = a.a[b], Da(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            }
            a.a.length = c;
          }
        }
        function Da(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b);
        }
        function Q(a, b) {
          a && a.log(hj, b, void 0);
        }
        function ij(a) {
          return yd(a, function(a) {
            return a = a.toString(16), 1 < a.length ? a : "0" + a;
          }).join("");
        }
        function jj(a) {
          var b = "";
          return kj(a, function(a) {
            b += String.fromCharCode(a);
          }), b;
        }
        function kj(a, b) {
          function c(b) {
            for (; d < a.length;) {
              var c = a.charAt(d++), e = lc[c];
              if (null != e) {
                return e;
              }
              if (!/^[\s\xa0]*$/.test(c)) {
                throw Error("Unknown base64 encoding at char: " + c);
              }
            }
            return b;
          }
          lj();
          for (var d = 0;;) {
            var e = c(-1), g = c(0), h = c(64), f = c(64);
            if (64 === f && -1 === e) {
              break;
            }
            b(e << 2 | g >> 4);
            64 != h && (b(g << 4 & 240 | h >> 2), 64 != f && b(h << 6 & 192 | f));
          }
        }
        function lj() {
          if (!mc) {
            mc = {};
            lc = {};
            for (var a = 0; 65 > a; a++) {
              mc[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), lc[mc[a]] = a, 62 <= a && (lc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
            }
          }
        }
        function oa(a, b) {
          this.g = [];
          this.v = a;
          this.o = b || null;
          this.f = this.a = !1;
          this.c = void 0;
          this.u = this.w = this.i = !1;
          this.h = 0;
          this.b = null;
          this.l = 0;
        }
        function xb(a, b, c) {
          a.a = !0;
          a.c = c;
          a.f = !b;
          Xf(a);
        }
        function nc(a) {
          if (a.a) {
            if (!a.u) {
              throw new oc;
            }
            a.u = !1;
          }
        }
        function mj(a, b) {
          zd(a, null, b, void 0);
        }
        function zd(a, b, c, d) {
          a.g.push([b, c, d]);
          a.a && Xf(a);
        }
        function Yf(a) {
          return nj(a.g, function(a) {
            return G(a[1]);
          });
        }
        function Xf(a) {
          if (a.h && a.a && Yf(a)) {
            var b = a.h, c = pc[b];
            c && (l.clearTimeout(c.a), delete pc[b]);
            a.h = 0;
          }
          a.b && (a.b.l--, delete a.b);
          b = a.c;
          for (var d = c = !1; a.g.length && !a.i;) {
            var e = a.g.shift(), g = e[0], h = e[1];
            if (e = e[2], g = a.f ? h : g) {
              try {
                var f = g.call(e || a.o, b);
                void 0 !== f && (a.f = a.f && (f == b || f instanceof Error), a.c = b = f);
                (ef(b) || "function" == typeof l.Promise && b instanceof l.Promise) && (d = !0, a.i = !0);
              } catch (sb) {
                b = sb, a.f = !0, Yf(a) || (c = !0);
              }
            }
          }
          a.c = b;
          d && (f = n(a.m, a, !0), d = n(a.m, a, !1), b instanceof oa ? (zd(b, f, d), b.w = !0) : b.then(f, d));
          c && (b = new Zf(b), pc[b.a] = b, a.h = b.a);
        }
        function oc() {
          L.call(this);
        }
        function yb() {
          L.call(this);
        }
        function Zf(a) {
          this.a = l.setTimeout(n(this.c, this), 0);
          this.b = a;
        }
        function qc(a, b) {
          this.b = -1;
          this.b = $f;
          this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
          this.g = this.c = 0;
          this.a = [];
          this.i = a;
          this.h = b;
          this.l = l.Int32Array ? new Int32Array(64) : Array(64);
          Ad || (Ad = l.Int32Array ? new Int32Array(ag) : ag);
          this.reset();
        }
        function Bd(a) {
          for (var b = a.f, c = a.l, d = 0, e = 0; e < b.length;) {
            c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
          }
          for (b = 16; 64 > b; b++) {
            e = 0 | c[b - 15];
            d = 0 | c[b - 2];
            var g = (0 | c[b - 16]) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0, h = (0 | c[b - 7]) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = g + h | 0;
          }
          d = 0 | a.a[0];
          e = 0 | a.a[1];
          var f = 0 | a.a[2], k = 0 | a.a[3], l = 0 | a.a[4], m = 0 | a.a[5], n = 0 | a.a[6];
          g = 0 | a.a[7];
          for (b = 0; 64 > b; b++) {
            var p = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & f ^ e & f) | 0;
            h = l & m ^ ~l & n;
            g = g + ((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) | 0;
            h = h + (0 | Ad[b]) | 0;
            h = g + (h + (0 | c[b]) | 0) | 0;
            g = n;
            n = m;
            m = l;
            l = k + h | 0;
            k = f;
            f = e;
            e = d;
            d = h + p | 0;
          }
          a.a[0] = a.a[0] + d | 0;
          a.a[1] = a.a[1] + e | 0;
          a.a[2] = a.a[2] + f | 0;
          a.a[3] = a.a[3] + k | 0;
          a.a[4] = a.a[4] + l | 0;
          a.a[5] = a.a[5] + m | 0;
          a.a[6] = a.a[6] + n | 0;
          a.a[7] = a.a[7] + g | 0;
        }
        function Cd(a, b, c) {
          void 0 === c && (c = b.length);
          var d = 0, e = a.c;
          if (x(b)) {
            for (; d < c;) {
              a.f[e++] = b.charCodeAt(d++), e == a.b && (Bd(a), e = 0);
            }
          } else {
            if (!nb(b)) {
              throw Error("message must be string or array");
            }
            for (; d < c;) {
              var g = b[d++];
              if (!("number" == typeof g && 0 <= g && 255 >= g && g == (0 | g))) {
                throw Error("message must be a byte array");
              }
              a.f[e++] = g;
              e == a.b && (Bd(a), e = 0);
            }
          }
          a.c = e;
          a.g += c;
        }
        function bg() {
          qc.call(this, 8, oj);
        }
        function cg(a) {
          if (a.P && "function" == typeof a.P) {
            return a.P();
          }
          if (x(a)) {
            return a.split("");
          }
          if (nb(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) {
              b.push(a[d]);
            }
            return b;
          }
          return Ye(a);
        }
        function dg(a) {
          if (a.S && "function" == typeof a.S) {
            return a.S();
          }
          if (!a.P || "function" != typeof a.P) {
            if (nb(a) || x(a)) {
              var b = [];
              a = a.length;
              for (var c = 0; c < a; c++) {
                b.push(c);
              }
              return b;
            }
            return Ze(a);
          }
        }
        function pj(a, b) {
          if (a.forEach && "function" == typeof a.forEach) {
            a.forEach(b, void 0);
          } else {
            if (nb(a) || x(a)) {
              M(a, b, void 0);
            } else {
              for (var c = dg(a), d = cg(a), e = d.length, g = 0; g < e; g++) {
                b.call(void 0, d[g], c && c[g], a);
              }
            }
          }
        }
        function qj(a, b) {
          if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
              var d = a[c].indexOf("="), e = null;
              if (0 <= d) {
                var g = a[c].substring(0, d);
                e = a[c].substring(d + 1);
              } else {
                g = a[c];
              }
              b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
            }
          }
        }
        function Ua(a, b) {
          if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, a instanceof Ua) {
            this.f = void 0 !== b ? b : a.f;
            Dd(this, a.c);
            this.l = a.l;
            this.b = a.b;
            eg(this, a.i);
            this.g = a.g;
            b = a.a;
            var c = new Va;
            c.c = b.c;
            b.a && (c.a = new Ta(b.a), c.b = b.b);
            fg(this, c);
            this.h = a.h;
          } else {
            a && (c = (a + "").match(gg)) ? (this.f = !!b, Dd(this, c[1] || "", !0), this.l = zb(c[2] || ""), this.b = zb(c[3] || "", !0), eg(this, c[4]), this.g = zb(c[5] || "", !0), fg(this, c[6] || "", !0), this.h = zb(c[7] || "")) : (this.f = !!b, this.a = new Va(null, 0, this.f));
          }
        }
        function Dd(a, b, c) {
          a.c = c ? zb(b, !0) : b;
          a.c && (a.c = a.c.replace(/:$/, ""));
        }
        function eg(a, b) {
          if (b) {
            if (b = +b, isNaN(b) || 0 > b) {
              throw Error("Bad port number " + b);
            }
            a.i = b;
          } else {
            a.i = null;
          }
        }
        function fg(a, b, c) {
          b instanceof Va ? (a.a = b, rj(a.a, a.f)) : (c || (b = Ab(b, sj)), a.a = new Va(b, 0, a.f));
        }
        function A(a, b, c) {
          a.a.set(b, c);
        }
        function Wa(a, b) {
          return a.a.get(b);
        }
        function pa(a) {
          return a instanceof Ua ? new Ua(a) : new Ua(a, void 0);
        }
        function hg(a, b) {
          var c = new Ua(null, void 0);
          return Dd(c, "https"), a && (c.b = a), b && (c.g = b), c;
        }
        function zb(a, b) {
          return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
        }
        function Ab(a, b, c) {
          return x(a) ? (a = encodeURI(a).replace(b, tj), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
        }
        function tj(a) {
          return a = a.charCodeAt(0), "%" + (a >> 4 & 15).toString(16) + (15 & a).toString(16);
        }
        function Va(a, b, c) {
          this.b = this.a = null;
          this.c = a || null;
          this.f = !!c;
        }
        function qa(a) {
          a.a || (a.a = new Ta, a.b = 0, a.c && qj(a.c, function(b, c) {
            ig(a, decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
        }
        function jg(a) {
          var b = dg(a);
          if (void 0 === b) {
            throw Error("Keys are undefined");
          }
          var c = new Va(null, 0, void 0);
          a = cg(a);
          for (var d = 0; d < b.length; d++) {
            var e = b[d], g = a[d];
            la(g) ? kg(c, e, g) : ig(c, e, g);
          }
          return c;
        }
        function ig(a, b, c) {
          qa(a);
          a.c = null;
          b = Xa(a, b);
          var d = a.a.get(b);
          d || a.a.set(b, d = []);
          d.push(c);
          a.b += 1;
        }
        function ha(a, b) {
          qa(a);
          b = Xa(a, b);
          Da(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, Da(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && xd(a)));
        }
        function lg(a, b) {
          return qa(a), b = Xa(a, b), Da(a.a.b, b);
        }
        function kg(a, b, c) {
          ha(a, b);
          0 < c.length && (a.c = null, a.a.set(Xa(a, b), xa(c)), a.b += c.length);
        }
        function Xa(a, b) {
          return b += "", a.f && (b = b.toLowerCase()), b;
        }
        function rj(a, b) {
          b && !a.f && (qa(a), a.c = null, a.a.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && (ha(this, b), kg(this, c, a));
          }, a));
          a.f = b;
        }
        function rc() {
        }
        function uj(a) {
          return a.c || (a.c = a.b());
        }
        function sc() {
        }
        function mg(a) {
          if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; 4 > c; c++) {
              var d = b[c];
              try {
                return new ActiveXObject(d), a.f = d;
              } catch (e) {
              }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
          }
          return a.f;
        }
        function Ea(a) {
          S.call(this);
          this.headers = new Ta;
          this.w = a || null;
          this.b = !1;
          this.v = this.a = null;
          this.g = this.I = this.i = "";
          this.c = this.G = this.h = this.A = !1;
          this.f = 0;
          this.m = null;
          this.l = ng;
          this.o = this.N = !1;
        }
        function vj(a, b, c, d, e) {
          if (a.a) {
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.i + "; newUri=" + b);
          }
          c = c ? c.toUpperCase() : "GET";
          a.i = b;
          a.g = "";
          a.I = c;
          a.A = !1;
          a.b = !0;
          a.a = a.w ? a.w.a() : og.a();
          a.v = uj(a.w ? a.w : og);
          a.a.onreadystatechange = n(a.Ab, a);
          try {
            Q(a.J, ia(a, "Opening Xhr")), a.G = !0, a.a.open(c, b + "", !0), a.G = !1;
          } catch (h) {
            return Q(a.J, ia(a, "Error opening Xhr: " + h.message)), void pg(a, h);
          }
          b = d || "";
          var g = new Ta(a.headers);
          e && pj(e, function(a, b) {
            g.set(b, a);
          });
          e = Hi(g.S());
          d = l.FormData && b instanceof l.FormData;
          !wa(wj, c) || e || d || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
          g.forEach(function(a, b) {
            this.a.setRequestHeader(b, a);
          }, a);
          a.l && (a.a.responseType = a.l);
          "withCredentials" in a.a && a.a.withCredentials !== a.N && (a.a.withCredentials = a.N);
          try {
            qg(a), 0 < a.f && (a.o = xj(a.a), Q(a.J, ia(a, "Will abort after " + a.f + "ms if incomplete, xhr2 " + a.o)), a.o ? (a.a.timeout = a.f, a.a.ontimeout = n(a.Ea, a)) : a.m = td(a.Ea, a.f, a)), Q(a.J, ia(a, "Sending request")), a.h = !0, a.a.send(b), a.h = !1;
          } catch (h) {
            Q(a.J, ia(a, "Send error: " + h.message)), pg(a, h);
          }
        }
        function xj(a) {
          return T && bf(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
        }
        function Ii(a) {
          return "content-type" == a.toLowerCase();
        }
        function pg(a, b) {
          a.b = !1;
          a.a && (a.c = !0, a.a.abort(), a.c = !1);
          a.g = b;
          rg(a);
          tc(a);
        }
        function rg(a) {
          a.A || (a.A = !0, E(a, "complete"), E(a, "error"));
        }
        function sg(a) {
          if (a.b && void 0 !== Ed) {
            if (a.v[1] && 4 == Bb(a) && 2 == uc(a)) {
              Q(a.J, ia(a, "Local request error detected and ignored"));
            } else {
              if (a.h && 4 == Bb(a)) {
                td(a.Ab, 0, a);
              } else {
                if (E(a, "readystatechange"), 4 == Bb(a)) {
                  Q(a.J, ia(a, "Request complete"));
                  a.b = !1;
                  try {
                    var b = uc(a);
                    a: {
                      switch(b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                          var c = !0;
                          break a;
                        default:
                          c = !1;
                      }
                    }
                    var d;
                    if (!(d = c)) {
                      var e;
                      if (e = 0 === b) {
                        var g = (a.i + "").match(gg)[1] || null;
                        if (!g && l.self && l.self.location) {
                          var h = l.self.location.protocol;
                          g = h.substr(0, h.length - 1);
                        }
                        e = !yj.test(g ? g.toLowerCase() : "");
                      }
                      d = e;
                    }
                    if (d) {
                      E(a, "complete"), E(a, "success");
                    } else {
                      try {
                        var f = 2 < Bb(a) ? a.a.statusText : "";
                      } catch (sb) {
                        Q(a.J, "Can not get status: " + sb.message), f = "";
                      }
                      a.g = f + " [" + uc(a) + "]";
                      rg(a);
                    }
                  } finally {
                    tc(a);
                  }
                }
              }
            }
          }
        }
        function tc(a, b) {
          if (a.a) {
            qg(a);
            var c = a.a, d = a.v[0] ? Y : null;
            a.a = null;
            a.v = null;
            b || E(a, "ready");
            try {
              c.onreadystatechange = d;
            } catch (e) {
              (a = a.J) && a.log(tg, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
            }
          }
        }
        function qg(a) {
          a.a && a.o && (a.a.ontimeout = null);
          "number" == typeof a.m && (l.clearTimeout(a.m), a.m = null);
        }
        function Bb(a) {
          return a.a ? a.a.readyState : 0;
        }
        function uc(a) {
          try {
            return 2 < Bb(a) ? a.a.status : -1;
          } catch (b) {
            return -1;
          }
        }
        function zj(a) {
          try {
            return a.a ? a.a.responseText : "";
          } catch (b) {
            return Q(a.J, "Can not get responseText: " + b.message), "";
          }
        }
        function ia(a, b) {
          return b + " [" + a.I + " " + a.i + " " + uc(a) + "]";
        }
        function Fd(a) {
          var b = {}, c = b.document || document, d = yf(a), e = document.createElement("SCRIPT"), g = {Cb:e, Ea:void 0}, h = new oa(Aj, g), f = null, k = null != b.timeout ? b.timeout : 5E3;
          return 0 < k && (f = window.setTimeout(function() {
            vc(e, !0);
            var a = new Gd(Bj, "Timeout reached for loading script " + d);
            nc(h);
            xb(h, !1, a);
          }, k), g.Ea = f), e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (vc(e, b.Sc || !1, f), h.A(null));
          }, e.onerror = function() {
            vc(e, !0, f);
            var a = new Gd(Cj, "Error while loading script " + d);
            nc(h);
            xb(h, !1, a);
          }, g = b.attributes || {}, ma(g, {type:"text/javascript", charset:"UTF-8"}), Df(e, g), e.src = yf(a), Dj(c).appendChild(e), h;
        }
        function Dj(a) {
          var b;
          return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
        }
        function Aj() {
          if (this && this.Cb) {
            var a = this.Cb;
            a && "SCRIPT" == a.tagName && vc(a, !0, this.Ea);
          }
        }
        function vc(a, b, c) {
          null != c && l.clearTimeout(c);
          a.onload = Y;
          a.onerror = Y;
          a.onreadystatechange = Y;
          b && window.setTimeout(function() {
            a && a.parentNode && a.parentNode.removeChild(a);
          }, 0);
        }
        function Gd(a, b) {
          var c = "Jsloader error (code #" + a + ")";
          b && (c += ": " + b);
          L.call(this, c);
          this.code = a;
        }
        function wc() {
        }
        function ug() {
          this.a = new XDomainRequest;
          this.readyState = 0;
          this.onreadystatechange = null;
          this.responseText = "";
          this.status = -1;
          this.statusText = this.responseXML = null;
          this.a.onload = n(this.Wb, this);
          this.a.onerror = n(this.xb, this);
          this.a.onprogress = n(this.Xb, this);
          this.a.ontimeout = n(this.Yb, this);
        }
        function Hd() {
          var a = F();
          return T && !!ra && 11 == ra || /Edge\/\d+/.test(a);
        }
        function xc() {
          return l.window && l.window.location.href || "";
        }
        function vg(a, b) {
          b = b || l.window;
          var c = "about:blank";
          a && (c = bc(Af(a)));
          b.location.href = c;
        }
        function wg(a, b) {
          var c, d = [];
          for (c in a) {
            if (c in b) {
              if (typeof a[c] != typeof b[c]) {
                d.push(c);
              } else {
                if (la(a[c])) {
                  a: {
                    var e = void 0;
                    var g = a[c], h = b[c];
                    for (e in g) {
                      if (!(e in h) || g[e] !== h[e]) {
                        e = !1;
                        break a;
                      }
                    }
                    for (e in h) {
                      if (!(e in g)) {
                        e = !1;
                        break a;
                      }
                    }
                    e = !0;
                  }
                  e || d.push(c);
                } else {
                  "object" == typeof a[c] && null != a[c] && null != b[c] ? 0 < wg(a[c], b[c]).length && d.push(c) : a[c] !== b[c] && d.push(c);
                }
              }
            } else {
              d.push(c);
            }
          }
          for (c in b) {
            c in a || d.push(c);
          }
          return d;
        }
        function Ej() {
          var a = F();
          return !((a = Cb(a) != xg ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null) && 30 > a || T && ra && !(9 < ra));
        }
        function yg(a) {
          return a = (a || F()).toLowerCase(), !!(a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/));
        }
        function Fa(a) {
          a = a || l.window;
          try {
            a.close();
          } catch (b) {
          }
        }
        function zg(a, b, c) {
          var d = "" + Math.floor(1E9 * Math.random());
          b = b || 500;
          c = c || 600;
          var e = (window.screen.availHeight - c) / 2, g = (window.screen.availWidth - b) / 2;
          b = {width:b, height:c, top:0 < e ? e : 0, left:0 < g ? g : 0, location:!0, resizable:!0, statusbar:!0, toolbar:!1};
          c = F().toLowerCase();
          d && (b.target = d, w(c, "crios/") && (b.target = "_blank"));
          Cb(F()) == Id && (a = a || "http://localhost", b.scrollbars = !0);
          c = a || "";
          (d = b) || (d = {});
          a = window;
          b = c instanceof aa ? c : Af(void 0 !== c.href ? c.href : c + "");
          c = d.target || c.target;
          e = [];
          for (h in d) {
            switch(h) {
              case "width":
              case "height":
              case "top":
              case "left":
                e.push(h + "=" + d[h]);
                break;
              case "target":
              case "noreferrer":
                break;
              default:
                e.push(h + "=" + (d[h] ? 1 : 0));
            }
          }
          var h = e.join(",");
          if ((C("iPhone") && !C("iPod") && !C("iPad") || C("iPad") || C("iPod")) && a.navigator && a.navigator.standalone && c && "_self" != c ? (h = a.document.createElement("A"), b instanceof aa || b instanceof aa || (b = b.la ? b.ja() : b + "", Bf.test(b) || (b = "about:invalid#zClosurez"), b = hd(b)), h.href = bc(b), h.setAttribute("target", c), d.noreferrer && h.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, a, 1), h.dispatchEvent(d), 
          h = {}) : d.noreferrer ? (h = a.open("", c, h), a = bc(b), h && (Fj && w(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), h.opener = null, vb("b/12014412, meta tag with sanitized URL"), a = '<META HTTP-EQUIV="refresh" content="0; url=' + Uc(a) + '">', a = cc(a), h.document.write(a instanceof Sa && a.constructor === Sa && a.b === Cf ? a.a : (ob("expected object of type SafeHtml, got '" + a + "' of type " + Oa(a)), "type_error:SafeHtml")), h.document.close())) : h = a.open(bc(b), c, h), 
          h) {
            try {
              h.focus();
            } catch (Zb) {
            }
          }
          return h;
        }
        function Gj(a) {
          return new t(function(b) {
            function c() {
              Ca(2E3).then(function() {
                if (a && !a.closed) {
                  return c();
                }
                b();
              });
            }
            return c();
          });
        }
        function Jd() {
          var a = null;
          return (new t(function(b) {
            "complete" == l.document.readyState ? b() : (a = function() {
              b();
            }, nd(window, "load", a));
          })).s(function(b) {
            throw R(window, "load", a), b;
          });
        }
        function Hj() {
          return Kd(void 0) ? Jd().then(function() {
            return new t(function(a, b) {
              var c = l.document, d = setTimeout(function() {
                b(Error("Cordova framework is not ready."));
              }, 1E3);
              c.addEventListener("deviceready", function() {
                clearTimeout(d);
                a();
              }, !1);
            });
          }) : z(Error("Cordova must run in an Android or iOS file scheme."));
        }
        function Kd(a) {
          return a = a || F(), !("file:" !== Db() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
        }
        function Ld() {
          var a = l.window;
          try {
            return !(!a || a == a.top);
          } catch (b) {
            return !1;
          }
        }
        function U() {
          return q.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : q.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser";
        }
        function Ag() {
          var a = U();
          return "ReactNative" === a || "Node" === a;
        }
        function Cb(a) {
          var b = a.toLowerCase();
          return w(b, "opera/") || w(b, "opr/") || w(b, "opios/") ? "Opera" : w(b, "iemobile") ? "IEMobile" : w(b, "msie") || w(b, "trident/") ? "IE" : w(b, "edge/") ? "Edge" : w(b, "firefox/") ? Id : w(b, "silk/") ? "Silk" : w(b, "blackberry") ? "Blackberry" : w(b, "webos") ? "Webos" : !w(b, "safari/") || w(b, "chrome/") || w(b, "crios/") || w(b, "android") ? !w(b, "chrome/") && !w(b, "crios/") || w(b, "edge/") ? w(b, "android") ? "Android" : (a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == 
          a.length ? a[1] : "Other" : xg : "Safari";
        }
        function Ya(a, b) {
          b = b || [];
          var c, d = [], e = {};
          for (c in Bg) {
            e[Bg[c]] = !0;
          }
          for (c = 0; c < b.length; c++) {
            void 0 !== e[b[c]] && (delete e[b[c]], d.push(b[c]));
          }
          return d.sort(), b = d, b.length || (b = ["FirebaseCore-web"]), d = U(), ("Browser" === d ? Cb(F()) : d) + "/JsCore/" + a + "/" + b.join(",");
        }
        function F() {
          return l.navigator && l.navigator.userAgent || "";
        }
        function y(a, b) {
          a = a.split(".");
          b = b || l;
          for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) {
            b = b[a[c]];
          }
          return c != a.length && (b = void 0), b;
        }
        function Md() {
          try {
            var a = l.localStorage, b = Za();
            if (a) {
              return a.setItem(b, "1"), a.removeItem(b), !Hd() || !!l.indexedDB;
            }
          } catch (c) {
          }
          return !1;
        }
        function Ga() {
          return (yc() || "chrome-extension:" === Db() || Kd()) && !Ag() && Md();
        }
        function yc() {
          return "http:" === Db() || "https:" === Db();
        }
        function Db() {
          return l.location && l.location.protocol || null;
        }
        function Eb(a) {
          return a = a || F(), !yg(a) && Cb(a) != Id;
        }
        function Fb(a) {
          return void 0 === a ? null : Ff(a);
        }
        function Cg(a) {
          var b, c = {};
          for (b in a) {
            a.hasOwnProperty(b) && null !== a[b] && void 0 !== a[b] && (c[b] = a[b]);
          }
          return c;
        }
        function Gb(a) {
          if (null !== a) {
            return JSON.parse(a);
          }
        }
        function Za(a) {
          return a || "" + Math.floor(1E9 * Math.random());
        }
        function Dg(a) {
          return a = a || F(), "Safari" != Cb(a) && !a.toLowerCase().match(/iphone|ipad|ipod/);
        }
        function Eg() {
          var a = l.___jsl;
          if (a && a.H) {
            for (var b in a.H) {
              if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) {
                for (var c = 0; c < a.CP.length; c++) {
                  a.CP[c] = null;
                }
              }
            }
          }
        }
        function Nd() {
          var a = l.navigator;
          return !a || "boolean" != typeof a.onLine || !yc() && "chrome-extension:" !== Db() && void 0 === a.connection || a.onLine;
        }
        function Ha(a, b, c, d) {
          if (a > b) {
            throw Error("Short delay should be less than long delay!");
          }
          this.c = a;
          this.b = b;
          a = c || F();
          d = d || U();
          this.a = yg(a) || "ReactNative" === d;
        }
        function Od() {
          var a = l.document;
          return !a || void 0 === a.visibilityState || "visible" == a.visibilityState;
        }
        function Ij() {
          var a = l.document, b = null;
          return Od() || !a ? p() : (new t(function(c) {
            b = function() {
              Od() && (a.removeEventListener("visibilitychange", b, !1), c());
            };
            a.addEventListener("visibilitychange", b, !1);
          })).s(function(c) {
            throw a.removeEventListener("visibilitychange", b, !1), c;
          });
        }
        function Fg(a) {
          try {
            var b = new Date(parseInt(a, 10));
            if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) {
              return b.toUTCString();
            }
          } catch (c) {
          }
          return null;
        }
        function r(a, b, c) {
          Gg ? Object.defineProperty(a, b, {configurable:!0, enumerable:!0, value:c}) : a[b] = c;
        }
        function ba(a, b) {
          if (b) {
            for (var c in b) {
              b.hasOwnProperty(c) && r(a, c, b[c]);
            }
          }
        }
        function ja(a) {
          var b = {};
          return ba(b, a), b;
        }
        function Jj(a) {
          var b, c = {};
          for (b in a) {
            a.hasOwnProperty(b) && (c[b] = a[b]);
          }
          return c;
        }
        function Kj(a, b) {
          if (!b || !b.length) {
            return !0;
          }
          if (!a) {
            return !1;
          }
          for (var c = 0; c < b.length; c++) {
            var d = a[b[c]];
            if (void 0 === d || null === d || "" === d) {
              return !1;
            }
          }
          return !0;
        }
        function Pd(a) {
          var b = a;
          if ("object" == typeof a && null != a) {
            b = "length" in a ? [] : {};
            for (var c in a) {
              r(b, c, Pd(a[c]));
            }
          }
          return b;
        }
        function Lj(a) {
          var b = {}, c = a[Mj], d = a[Nj];
          if (a = a[Oj], !c || !a) {
            throw Error("Invalid provider user info!");
          }
          b[Pj] = d || null;
          b[Qj] = c;
          r(this, Rj, a);
          r(this, Sj, Pd(b));
        }
        function k(a, b) {
          this.code = Hb + a;
          this.message = b || Tj[a] || "";
        }
        function Hg(a) {
          var b = a && a.code;
          return b ? new k(b.substring(Hb.length), a.message) : null;
        }
        function Ig(a) {
          var b = a[Uj];
          if (void 0 === b) {
            throw new k("missing-continue-uri");
          }
          if ("string" != typeof b || "string" == typeof b && !b.length) {
            throw new k("invalid-continue-uri");
          }
          this.h = b;
          this.c = this.a = null;
          this.g = !1;
          var c = a[Jg];
          if (c && "object" == typeof c) {
            b = c[Kg];
            var d = c[Lg];
            if (c = c[Mg], "string" == typeof b && b.length) {
              if (this.a = b, void 0 !== d && "boolean" != typeof d) {
                throw new k("argument-error", Lg + " property must be a boolean when specified.");
              }
              if (this.g = !!d, void 0 !== c && ("string" != typeof c || "string" == typeof c && !c.length)) {
                throw new k("argument-error", Mg + " property must be a non empty string when specified.");
              }
              this.c = c || null;
            } else {
              if (void 0 !== b) {
                throw new k("argument-error", Kg + " property must be a non empty string when specified.");
              }
              if (void 0 !== d || void 0 !== c) {
                throw new k("missing-android-pkg-name");
              }
            }
          } else {
            if (void 0 !== c) {
              throw new k("argument-error", Jg + " property must be a non null object when specified.");
            }
          }
          if (this.b = null, (b = a[Ng]) && "object" == typeof b) {
            if ("string" == typeof(b = b[Og]) && b.length) {
              this.b = b;
            } else {
              if (void 0 !== b) {
                throw new k("argument-error", Og + " property must be a non empty string when specified.");
              }
            }
          } else {
            if (void 0 !== b) {
              throw new k("argument-error", Ng + " property must be a non null object when specified.");
            }
          }
          if (void 0 !== (a = a[Qd]) && "boolean" != typeof a) {
            throw new k("argument-error", Qd + " property must be a boolean when specified.");
          }
          if ((this.f = !!a) && !this.b && !this.a) {
            throw new k("argument-error", Qd + " property can't be true when no mobile application is provided.");
          }
        }
        function Pg(a) {
          var b = {};
          b.continueUrl = a.h;
          b.canHandleCodeInApp = a.f;
          (b.androidPackageName = a.a) && (b.androidMinimumVersion = a.c, b.androidInstallApp = a.g);
          b.iOSBundleId = a.b;
          for (var c in b) {
            null === b[c] && delete b[c];
          }
          return b;
        }
        function Vj(a) {
          this.b = a.sub;
          Ia();
          this.a = a.provider_id || a.firebase && a.firebase.sign_in_provider || null;
        }
        function Qg(a) {
          if (a = a.split("."), 3 != a.length) {
            return null;
          }
          a = a[1];
          for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) {
            a += ".";
          }
          try {
            var d = JSON.parse(jj(a));
            if (d.sub && d.iss && d.aud && d.exp) {
              return new Vj(d);
            }
          } catch (e) {
          }
          return null;
        }
        function Rd(a) {
          for (var b in Sd) {
            if (Sd[b].Na == a) {
              return Sd[b];
            }
          }
          return null;
        }
        function Td(a) {
          var b = {};
          b["facebook.com"] = Rg;
          b["google.com"] = Sg;
          b["github.com"] = Tg;
          b["twitter.com"] = Ug;
          var c = a && a[Vg];
          try {
            if (c) {
              return b[c] ? new b[c](a) : new ca(a);
            }
            if (void 0 !== a[Ud]) {
              return new Vd(a);
            }
          } catch (d) {
          }
          return null;
        }
        function Vd(a) {
          var b = a[Vg];
          if (!b && a[Ud]) {
            var c = Qg(a[Ud]);
            c && c.a && (b = c.a);
          }
          if (!b) {
            throw Error("Invalid additional user info!");
          }
          "anonymous" != b && "custom" != b || (b = null);
          c = !1;
          void 0 !== a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
          r(this, "providerId", b);
          r(this, "isNewUser", c);
        }
        function ca(a) {
          Vd.call(this, a);
          a = Gb(a.rawUserInfo || "{}");
          r(this, "profile", Pd(a || {}));
        }
        function Rg(a) {
          if (ca.call(this, a), "facebook.com" != this.providerId) {
            throw Error("Invalid provider ID!");
          }
        }
        function Tg(a) {
          if (ca.call(this, a), "github.com" != this.providerId) {
            throw Error("Invalid provider ID!");
          }
          r(this, "username", this.profile && this.profile.login || null);
        }
        function Sg(a) {
          if (ca.call(this, a), "google.com" != this.providerId) {
            throw Error("Invalid provider ID!");
          }
        }
        function Ug(a) {
          if (ca.call(this, a), "twitter.com" != this.providerId) {
            throw Error("Invalid provider ID!");
          }
          r(this, "username", a.screenName || null);
        }
        function zc(a, b) {
          return a.then(function(a) {
            if (a[V]) {
              var c = Qg(a[V]);
              if (!c || b != c.b) {
                throw new k("user-mismatch");
              }
              return a;
            }
            throw new k("user-mismatch");
          }).s(function(a) {
            throw a && a.code && a.code == Hb + "user-not-found" ? new k("user-mismatch") : a;
          });
        }
        function $a(a, b) {
          if (b.idToken || b.accessToken) {
            b.idToken && r(this, "idToken", b.idToken), b.accessToken && r(this, "accessToken", b.accessToken);
          } else {
            if (!b.oauthToken || !b.oauthTokenSecret) {
              throw new k("internal-error", "failed to construct a credential");
            }
            r(this, "accessToken", b.oauthToken);
            r(this, "secret", b.oauthTokenSecret);
          }
          r(this, "providerId", a);
        }
        function Wd(a) {
          var b = {};
          return a.idToken && (b.id_token = a.idToken), a.accessToken && (b.access_token = a.accessToken), a.secret && (b.oauth_token_secret = a.secret), b.providerId = a.providerId, {postBody:"" + jg(b), requestUri:"http://localhost"};
        }
        function Ib(a, b) {
          this.rc = b || [];
          ba(this, {providerId:a, isOAuthProvider:!0});
          this.rb = {};
          this.Wa = (Rd(a) || {}).Ma || null;
          this.Ua = null;
        }
        function N(a) {
          Ib.call(this, a, Ac);
          this.a = [];
        }
        function ab() {
          N.call(this, "facebook.com");
        }
        function Wg(a) {
          if (!a) {
            throw new k("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          }
          var b = a;
          return O(a) && (b = a.accessToken), (new ab).credential(null, b);
        }
        function bb() {
          N.call(this, "github.com");
        }
        function Xg(a) {
          if (!a) {
            throw new k("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          }
          var b = a;
          return O(a) && (b = a.accessToken), (new bb).credential(null, b);
        }
        function cb() {
          N.call(this, "google.com");
          this.sa("profile");
        }
        function Yg(a, b) {
          var c = a;
          return O(a) && (c = a.idToken, b = a.accessToken), (new cb).credential(c, b);
        }
        function Jb() {
          Ib.call(this, "twitter.com", Zg);
        }
        function $g(a, b) {
          var c = a;
          if (O(c) || (c = {oauthToken:a, oauthTokenSecret:b}), !c.oauthToken || !c.oauthTokenSecret) {
            throw new k("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
          }
          return new $a("twitter.com", c);
        }
        function Kb(a, b) {
          this.a = a;
          this.f = b;
          r(this, "providerId", "password");
        }
        function Xd() {
          ba(this, {providerId:"password", isOAuthProvider:!1});
        }
        function db(a) {
          if (!(a.Pa && a.Oa || a.Da && a.Y)) {
            throw new k("internal-error");
          }
          this.a = a;
          r(this, "providerId", "phone");
        }
        function Yd(a) {
          return a.a.Da && a.a.Y ? {temporaryProof:a.a.Da, phoneNumber:a.a.Y} : {sessionInfo:a.a.Pa, code:a.a.Oa};
        }
        function Ja(a) {
          try {
            this.a = a || q.auth();
          } catch (b) {
            throw new k("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
          }
          ba(this, {providerId:"phone", isOAuthProvider:!1});
        }
        function ah(a, b) {
          if (!a) {
            throw new k("missing-verification-id");
          }
          if (!b) {
            throw new k("missing-verification-code");
          }
          return new db({Pa:a, Oa:b});
        }
        function Bc(a) {
          if (a.temporaryProof && a.phoneNumber) {
            return new db({Da:a.temporaryProof, Y:a.phoneNumber});
          }
          var b = a && a.providerId;
          if (!b || "password" === b) {
            return null;
          }
          var c = a && a.oauthAccessToken, d = a && a.oauthTokenSecret;
          a = a && a.oauthIdToken;
          try {
            switch(b) {
              case "google.com":
                return Yg(a, c);
              case "facebook.com":
                return Wg(c);
              case "github.com":
                return Xg(c);
              case "twitter.com":
                return $g(c, d);
              default:
                return (new N(b)).credential(a, c);
            }
          } catch (e) {
            return null;
          }
        }
        function Zd(a) {
          if (!a.isOAuthProvider) {
            throw new k("invalid-oauth-provider");
          }
        }
        function ka(a, b, c, d, e) {
          if (this.b = a, this.c = b || null, this.f = c || null, this.g = d || null, this.a = e || null, !this.f && !this.a) {
            throw new k("invalid-auth-event");
          }
          if (this.f && this.a) {
            throw new k("invalid-auth-event");
          }
          if (this.f && !this.g) {
            throw new k("invalid-auth-event");
          }
        }
        function bh(a) {
          return a = a || {}, a.type ? new ka(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && Hg(a.error)) : null;
        }
        function $d() {
          this.b = null;
          this.a = [];
        }
        function ae(a) {
          var b = "unauthorized-domain", c = void 0, d = pa(a);
          a = d.b;
          d = d.c;
          "chrome-extension" == d ? c = Tc("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Tc("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
          k.call(this, b, c);
        }
        function Lb(a, b, c) {
          k.call(this, a, c);
          a = b || {};
          a.sb && r(this, "email", a.sb);
          a.Y && r(this, "phoneNumber", a.Y);
          a.credential && r(this, "credential", a.credential);
        }
        function Cc(a) {
          if (a.code) {
            var b = a.code || "";
            0 == b.indexOf(Hb) && (b = b.substring(Hb.length));
            var c = {credential:Bc(a)};
            if (a.email) {
              c.sb = a.email;
            } else {
              if (!a.phoneNumber) {
                return new k(b, a.message || void 0);
              }
              c.Y = a.phoneNumber;
            }
            return new Lb(b, c, a.message);
          }
          return null;
        }
        function Dc(a) {
          this.f = a;
        }
        function da(a, b, c) {
          var d = "Node" == U();
          if (!(d = l.XMLHttpRequest || d && q.INTERNAL.node && q.INTERNAL.node.XMLHttpRequest)) {
            throw new k("internal-error", "The XMLHttpRequest compatibility library was not found.");
          }
          this.b = a;
          a = b || {};
          this.i = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
          this.l = a.secureTokenTimeout || Wj;
          this.c = rb(a.secureTokenHeaders || Xj);
          this.g = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
          this.h = a.firebaseTimeout || Yj;
          this.a = rb(a.firebaseHeaders || Zj);
          c && (this.a["X-Client-Version"] = c, this.c["X-Client-Version"] = c);
          this.f = new wc;
          this.o = new Dc(d);
        }
        function ch(a, b) {
          b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
        }
        function dh(a, b) {
          b ? (a.a["X-Client-Version"] = b, a.c["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.c["X-Client-Version"]);
        }
        function eh(a, b, c, d, e, g, h) {
          Nd() ? (Ej() ? a = n(a.m, a) : (be || (be = new t(function(a, b) {
            ak(a, b);
          })), a = n(a.u, a)), a(b, c, d, e, g, h)) : c && c(null);
        }
        function ak(a, b) {
          ((window.gapi || {}).client || {}).request ? a() : (l[fh] = function() {
            ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
          }, mj(Fd(gd(bk, {onload:fh})), function() {
            b(Error("CORS_UNSUPPORTED"));
          }));
        }
        function ck(a, b) {
          return new t(function(c, d) {
            "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? eh(a, a.i + "?key=" + encodeURIComponent(a.b), function(a) {
              a ? a.error ? d(ce(a)) : a.access_token && a.refresh_token ? c(a) : d(new k("internal-error")) : d(new k("network-request-failed"));
            }, "POST", "" + jg(b), a.c, a.l.get()) : d(new k("internal-error"));
          });
        }
        function dk(a, b, c, d, e, g) {
          var h = pa(a.g + b);
          A(h, "key", a.b);
          g && A(h, "cb", "" + Ia());
          var f = "GET" == c;
          if (f) {
            for (var l in d) {
              d.hasOwnProperty(l) && A(h, l, d[l]);
            }
          }
          return new t(function(b, g) {
            eh(a, "" + h, function(a) {
              a ? a.error ? g(ce(a, e || {})) : b(a) : g(new k("network-request-failed"));
            }, c, f ? void 0 : Ff(Cg(d)), a.a, a.h.get());
          });
        }
        function Ec(a) {
          if (!ek.test(a.email)) {
            throw new k("invalid-email");
          }
        }
        function gh(a) {
          "email" in a && Ec(a);
        }
        function fk(a, b) {
          return v(a, gk, {identifier:b, continueUri:yc() ? xc() : "http://localhost"}).then(function(a) {
            return a.allProviders || [];
          });
        }
        function hk(a) {
          return v(a, ik, {}).then(function(a) {
            return a.authorizedDomains || [];
          });
        }
        function sa(a) {
          if (!a[V]) {
            throw new k("internal-error");
          }
        }
        function de(a) {
          if (a.phoneNumber || a.temporaryProof) {
            if (!a.phoneNumber || !a.temporaryProof) {
              throw new k("internal-error");
            }
          } else {
            if (!a.sessionInfo) {
              throw new k("missing-verification-id");
            }
            if (!a.code) {
              throw new k("missing-verification-code");
            }
          }
        }
        function jk(a, b) {
          return v(a, kk, b);
        }
        function lk(a, b, c) {
          return v(a, mk, {idToken:b, deleteProvider:c});
        }
        function ee(a) {
          if (!a.requestUri || !a.sessionId && !a.postBody) {
            throw new k("internal-error");
          }
        }
        function hh(a) {
          var b = null;
          if (a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Cc(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Cc(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = Cc(a)) : a.errorMessage && (b = ih(a.errorMessage)), b) {
            throw b;
          }
          if (!a[V]) {
            throw new k("internal-error");
          }
        }
        function jh(a, b) {
          return b.returnIdpCredential = !0, v(a, nk, b);
        }
        function kh(a, b) {
          return b.returnIdpCredential = !0, v(a, ok, b);
        }
        function lh(a, b) {
          return b.returnIdpCredential = !0, b.autoCreate = !1, v(a, pk, b);
        }
        function fe(a) {
          if (!a.oobCode) {
            throw new k("invalid-action-code");
          }
        }
        function v(a, b, c) {
          if (!Kj(c, b.ea)) {
            return z(new k("internal-error"));
          }
          var d, e = b.zb || "POST";
          return p(c).then(b.D).then(function() {
            return b.T && (c.returnSecureToken = !0), dk(a, b.endpoint, e, c, b.Pb, b.nb || !1);
          }).then(function(a) {
            return d = a;
          }).then(b.O).then(function() {
            if (!b.ga) {
              return d;
            }
            if (!(b.ga in d)) {
              throw new k("internal-error");
            }
            return d[b.ga];
          });
        }
        function ih(a) {
          return ce({error:{errors:[{message:a}], code:400, message:a}});
        }
        function ce(a, b) {
          var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "", d = {keyInvalid:"invalid-api-key", ipRefererBlocked:"app-not-authorized"};
          if (c = d[c] ? new k(d[c]) : null) {
            return c;
          }
          c = a.error && a.error.message || "";
          d = {INVALID_CUSTOM_TOKEN:"invalid-custom-token", CREDENTIAL_MISMATCH:"custom-token-mismatch", MISSING_CUSTOM_TOKEN:"internal-error", INVALID_IDENTIFIER:"invalid-email", MISSING_CONTINUE_URI:"internal-error", INVALID_EMAIL:"invalid-email", INVALID_PASSWORD:"wrong-password", USER_DISABLED:"user-disabled", MISSING_PASSWORD:"internal-error", EMAIL_EXISTS:"email-already-in-use", PASSWORD_LOGIN_DISABLED:"operation-not-allowed", INVALID_IDP_RESPONSE:"invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use", 
          INVALID_MESSAGE_PAYLOAD:"invalid-message-payload", INVALID_RECIPIENT_EMAIL:"invalid-recipient-email", INVALID_SENDER:"invalid-sender", EMAIL_NOT_FOUND:"user-not-found", EXPIRED_OOB_CODE:"expired-action-code", INVALID_OOB_CODE:"invalid-action-code", MISSING_OOB_CODE:"internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login", INVALID_ID_TOKEN:"invalid-user-token", TOKEN_EXPIRED:"user-token-expired", USER_NOT_FOUND:"user-token-expired", CORS_UNSUPPORTED:"cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated", 
          INVALID_APP_ID:"invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests", WEAK_PASSWORD:"weak-password", OPERATION_NOT_ALLOWED:"operation-not-allowed", USER_CANCELLED:"user-cancelled", CAPTCHA_CHECK_FAILED:"captcha-check-failed", INVALID_APP_CREDENTIAL:"invalid-app-credential", INVALID_CODE:"invalid-verification-code", INVALID_PHONE_NUMBER:"invalid-phone-number", INVALID_SESSION_INFO:"invalid-verification-id", INVALID_TEMPORARY_PROOF:"invalid-credential", MISSING_APP_CREDENTIAL:"missing-app-credential", 
          MISSING_CODE:"missing-verification-code", MISSING_PHONE_NUMBER:"missing-phone-number", MISSING_SESSION_INFO:"missing-verification-id", QUOTA_EXCEEDED:"quota-exceeded", SESSION_EXPIRED:"code-expired", INVALID_CONTINUE_URI:"invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name", MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id", UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id", INVALID_CERT_HASH:"invalid-cert-hash"};
          ma(d, b || {});
          b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;
          for (var e in d) {
            if (0 === c.indexOf(e)) {
              return new k(d[e], b);
            }
          }
          return !b && a && (b = Fb(a)), new k("internal-error", b);
        }
        function Mb(a) {
          for (var b in ge) {
            if (ge[b].id === a) {
              return a = ge[b], {firebaseEndpoint:a.Va, secureTokenEndpoint:a.ab};
            }
          }
          return null;
        }
        function qk(a) {
          this.b = a;
          this.a = null;
          this.Ya = rk(this);
        }
        function rk(a) {
          return sk().then(function() {
            return new t(function(b, c) {
              y("gapi.iframes.getContext")().open({where:document.body, url:a.b, messageHandlersFilter:y("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes:{style:{position:"absolute", top:"-100px", width:"1px", height:"1px"}}, dontclear:!0}, function(d) {
                function e() {
                  clearTimeout(g);
                  b();
                }
                a.a = d;
                a.a.restyle({setHideOnLeave:!1});
                var g = setTimeout(function() {
                  c(Error("Network Error"));
                }, tk.get());
                d.ping(e).then(e, function() {
                  c(Error("Network Error"));
                });
              });
            });
          });
        }
        function uk(a, b) {
          return a.Ya.then(function() {
            return new t(function(c) {
              a.a.send(b.type, b, c, y("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
            });
          });
        }
        function vk(a, b) {
          a.Ya.then(function() {
            a.a.register("authEvent", b, y("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
          });
        }
        function sk() {
          return he || (he = (new t(function(a, b) {
            if (Nd()) {
              var c = function() {
                Eg();
                y("gapi.load")("gapi.iframes", {callback:a, ontimeout:function() {
                  Eg();
                  b(Error("Network Error"));
                }, timeout:wk.get()});
              };
              if (y("gapi.iframes.Iframe")) {
                a();
              } else {
                if (y("gapi.load")) {
                  c();
                } else {
                  var d = "__iframefcb" + Math.floor(1E6 * Math.random());
                  l[d] = function() {
                    y("gapi.load") ? c() : b(Error("Network Error"));
                  };
                  d = gd(xk, {onload:d});
                  p(Fd(d)).s(function() {
                    b(Error("Network Error"));
                  });
                }
              }
            } else {
              b(Error("Network Error"));
            }
          })).s(function(a) {
            throw he = null, a;
          }));
        }
        function mh(a, b, c) {
          this.i = a;
          this.g = b;
          this.h = c;
          this.f = null;
          this.a = hg(this.i, "/__/auth/iframe");
          A(this.a, "apiKey", this.g);
          A(this.a, "appName", this.h);
          this.b = null;
          this.c = [];
        }
        function nh(a, b, c, d, e) {
          this.m = a;
          this.u = b;
          this.c = c;
          this.l = d;
          this.i = this.g = this.h = null;
          this.a = e;
          this.f = null;
        }
        function ie(a) {
          try {
            return q.app(a).auth().Ka();
          } catch (b) {
            return [];
          }
        }
        function oh(a, b, c, d, e) {
          this.u = a;
          this.f = b;
          this.b = c;
          this.c = d || null;
          this.h = e || null;
          this.m = this.o = this.v = null;
          this.g = [];
          this.l = this.a = null;
        }
        function ph(a) {
          var b = xc();
          return hk(a).then(function(a) {
            a: {
              var c = pa(b), e = c.c;
              c = c.b;
              for (var g = 0; g < a.length; g++) {
                var h = a[g], f = c, k = e;
                if (0 == h.indexOf("chrome-extension://") ? f = pa(h).b == f && "chrome-extension" == k : "http" != k && "https" != k ? f = !1 : yk.test(h) ? f = f == h : (h = h.split(".").join("\\."), f = RegExp("^(.+\\." + h + "|" + h + ")$", "i").test(f)), f) {
                  a = !0;
                  break a;
                }
              }
              a = !1;
            }
            if (!a) {
              throw new ae(xc());
            }
          });
        }
        function qh(a) {
          return a.l ? a.l : (a.l = Jd().then(function() {
            if (!a.o) {
              var b = a.c, c = a.h, d = ie(a.b), e = new mh(a.u, a.f, a.b);
              e.f = b;
              e.b = c;
              e.c = xa(d || []);
              a.o = "" + e;
            }
            a.i = new qk(a.o);
            zk(a);
          }), a.l);
        }
        function rh(a) {
          return a.m || (a.v = a.c ? Ya(a.c, ie(a.b)) : null, a.m = new da(a.f, Mb(a.h), a.v)), a.m;
        }
        function Nb(a, b, c, d, e, g, h, f, k, l) {
          return a = new nh(a, b, c, d, e), a.h = g, a.g = h, a.i = f, a.b = rb(k || null), a.f = l, "" + a;
        }
        function zk(a) {
          if (!a.i) {
            throw Error("IfcHandler must be initialized!");
          }
          vk(a.i, function(b) {
            var c = {};
            if (b && b.authEvent) {
              var d = !1;
              b = bh(b.authEvent);
              for (c = 0; c < a.g.length; c++) {
                d = a.g[c](b) || d;
              }
              return c = {}, c.status = d ? "ACK" : "ERROR", p(c);
            }
            return c.status = "ERROR", p(c);
          });
        }
        function Ak(a) {
          var b = {type:"webStorageSupport"};
          return qh(a).then(function() {
            return uk(a.i, b);
          }).then(function(a) {
            if (a && a.length && void 0 !== a[0].webStorageSupport) {
              return a[0].webStorageSupport;
            }
            throw Error();
          });
        }
        function sh(a) {
          if (this.a = a || q.INTERNAL.reactNative && q.INTERNAL.reactNative.AsyncStorage, !this.a) {
            throw new k("internal-error", "The React Native compatibility library was not found.");
          }
        }
        function Fc() {
          this.a = {};
        }
        function th(a, b, c, d, e, g) {
          try {
            var h = !!l.indexedDB;
          } catch (Zb) {
            h = !1;
          }
          if (!h) {
            throw new k("web-storage-unsupported");
          }
          this.u = a;
          this.h = b;
          this.g = c;
          this.l = d;
          this.m = e;
          this.f = {};
          this.c = [];
          this.a = 0;
          this.o = g || l.indexedDB;
        }
        function Bk(a) {
          return new t(function(b, c) {
            var d = a.o.open(a.u, a.m);
            d.onerror = function(a) {
              c(Error(a.target.errorCode));
            };
            d.onupgradeneeded = function(b) {
              b = b.target.result;
              try {
                b.createObjectStore(a.h, {keyPath:a.g});
              } catch (g) {
                c(g);
              }
            };
            d.onsuccess = function(a) {
              b(a.target.result);
            };
          });
        }
        function Gc(a) {
          return a.i || (a.i = Bk(a)), a.i;
        }
        function Ob(a, b) {
          return b.objectStore(a.h);
        }
        function Pb(a, b, c) {
          return b.transaction([a.h], c ? "readwrite" : "readonly");
        }
        function eb(a) {
          return new t(function(b, c) {
            a.onsuccess = function(a) {
              a && a.target ? b(a.target.result) : b();
            };
            a.onerror = function(a) {
              c(Error(a.target.errorCode));
            };
          });
        }
        function Ck(a) {
          function b() {
            return a.b = Ca(800).then(n(a.zc, a)).then(function(b) {
              0 < b.length && M(a.c, function(a) {
                a(b);
              });
            }).then(b).s(function(a) {
              "STOP_EVENT" != a.message && b();
            }), a.b;
          }
          a.b && a.b.cancel("STOP_EVENT");
          b();
        }
        function je() {
          if (!Dk()) {
            if ("Node" == U()) {
              throw new k("internal-error", "The LocalStorage compatibility library was not found.");
            }
            throw new k("web-storage-unsupported");
          }
          this.a = uh() || q.INTERNAL.node.localStorage;
        }
        function uh() {
          try {
            var a = l.localStorage, b = Za();
            return a && (a.setItem(b, "1"), a.removeItem(b)), a;
          } catch (c) {
            return null;
          }
        }
        function Dk() {
          var a = "Node" == U();
          if (!(a = uh() || a && q.INTERNAL.node && q.INTERNAL.node.localStorage)) {
            return !1;
          }
          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }
        function vh() {
        }
        function ke() {
          if (!Ek()) {
            if ("Node" == U()) {
              throw new k("internal-error", "The SessionStorage compatibility library was not found.");
            }
            throw new k("web-storage-unsupported");
          }
          this.a = wh() || q.INTERNAL.node.sessionStorage;
        }
        function wh() {
          try {
            var a = l.sessionStorage, b = Za();
            return a && (a.setItem(b, "1"), a.removeItem(b)), a;
          } catch (c) {
            return null;
          }
        }
        function Ek() {
          var a = "Node" == U();
          if (!(a = wh() || a && q.INTERNAL.node && q.INTERNAL.node.sessionStorage)) {
            return !1;
          }
          try {
            return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
          } catch (b) {
            return !1;
          }
        }
        function Fk() {
          var a = {};
          a.Browser = Gk;
          a.Node = Hk;
          a.ReactNative = Ik;
          this.a = a[U()];
        }
        function Jk(a) {
          var b = new k("invalid-persistence-type"), c = new k("unsupported-persistence-type");
          a: {
            for (d in fb) {
              if (fb[d] == a) {
                var d = !0;
                break a;
              }
            }
            d = !1;
          }
          if (!d || "string" != typeof a) {
            throw b;
          }
          switch(U()) {
            case "ReactNative":
              if ("session" === a) {
                throw c;
              }
              break;
            case "Node":
              if ("none" !== a) {
                throw c;
              }
              break;
            default:
              if (!Md() && "none" !== a) {
                throw c;
              }
          }
        }
        function Qb(a, b, c, d, e) {
          this.i = a;
          this.g = b;
          this.A = c;
          this.u = d;
          this.v = e;
          this.a = {};
          le || (le = new Fk);
          a = le;
          try {
            if (Hd()) {
              me || (me = new th("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));
              var g = me;
            } else {
              g = new a.a.C;
            }
            this.l = g;
          } catch (h) {
            this.l = new Fc, this.u = !0;
          }
          try {
            this.o = new a.a.jb;
          } catch (h) {
            this.o = new Fc;
          }
          this.w = new Fc;
          this.h = n(this.m, this);
          this.b = {};
        }
        function Rb() {
          return ne || (ne = new Qb("firebase", ":", !(Dg(F()) || !Ld()), Eb(), Md())), ne;
        }
        function gb(a, b) {
          switch(b) {
            case "session":
              return a.o;
            case "none":
              return a.w;
            default:
              return a.l;
          }
        }
        function Sb(a, b, c) {
          return a.i + a.g + b.name + (c ? a.g + c : "");
        }
        function hb(a, b, c) {
          return c = Sb(a, b, c), "local" == b.C && (a.b[c] = null), gb(a, b.C).X(c);
        }
        function xh(a, b, c, d) {
          b = Sb(a, b, c);
          a.v && (a.b[b] = l.localStorage.getItem(b));
          qb(a.a) && (gb(a, "local").ia(a.h), a.u || Hd() || !a.v || Kk(a));
          a.a[b] || (a.a[b] = []);
          a.a[b].push(d);
        }
        function Lk(a, b, c) {
          b = Sb(a, ea("local"), b);
          a.a[b] && (Z(a.a[b], function(a) {
            return a == c;
          }), 0 == a.a[b].length && delete a.a[b]);
          qb(a.a) && Mk(a);
        }
        function Kk(a) {
          oe(a);
          a.f = setInterval(function() {
            for (var b in a.a) {
              var c = l.localStorage.getItem(b), d = a.b[b];
              c != d && (a.b[b] = c, c = new Ba({type:"storage", key:b, target:window, oldValue:d, newValue:c, a:!0}), a.m(c));
            }
          }, 1E3);
        }
        function oe(a) {
          a.f && (clearInterval(a.f), a.f = null);
        }
        function Mk(a) {
          gb(a, "local").da(a.h);
          oe(a);
        }
        function Nk(a) {
          this.a = a;
          this.b = Rb();
        }
        function Ok(a) {
          return a.b.get(pe, a.a).then(function(a) {
            return bh(a);
          });
        }
        function Pk() {
          this.a = Rb();
        }
        function yh(a, b, c, d, e, g, h) {
          this.u = a;
          this.i = b;
          this.l = c;
          this.m = d || null;
          this.o = h || null;
          this.h = b + ":" + c;
          this.A = new Pk;
          this.g = new Nk(this.h);
          this.f = null;
          this.b = [];
          this.v = e || 500;
          this.w = g || 2E3;
          this.a = this.c = null;
        }
        function Hc(a) {
          return new k("invalid-cordova-configuration", a);
        }
        function Qk() {
          for (var a = 20, b = []; 0 < a;) {
            b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;
          }
          return b.join("");
        }
        function Rk(a) {
          var b = new bg;
          Cd(b, a);
          a = [];
          var c = 8 * b.g;
          56 > b.c ? Cd(b, zh, 56 - b.c) : Cd(b, zh, b.b - (b.c - 56));
          for (var d = 63; 56 <= d; d--) {
            b.f[d] = 255 & c, c /= 256;
          }
          Bd(b);
          for (d = c = 0; d < b.i; d++) {
            for (var e = 24; 0 <= e; e -= 8) {
              a[c++] = b.a[d] >> e & 255;
            }
          }
          return ij(a);
        }
        function Sk(a, b, c, d) {
          var e = Qk(), g = new ka(b, d, null, e, new k("no-auth-event")), h = y("BuildInfo.packageName", l);
          if ("string" != typeof h) {
            throw new k("invalid-cordova-configuration");
          }
          var f = y("BuildInfo.displayName", l), m = {};
          if (F().toLowerCase().match(/iphone|ipad|ipod/)) {
            m.ibi = h;
          } else {
            if (!F().toLowerCase().match(/android/)) {
              return z(new k("operation-not-supported-in-this-environment"));
            }
            m.apn = h;
          }
          f && (m.appDisplayName = f);
          e = Rk(e);
          m.sessionId = e;
          var n = Nb(a.u, a.i, a.l, b, c, null, d, a.m, m, a.o);
          return a.ba().then(function() {
            var b = a.h;
            return a.A.a.set(pe, g.B(), b);
          }).then(function() {
            var b = y("cordova.plugins.browsertab.isAvailable", l);
            if ("function" != typeof b) {
              throw new k("invalid-cordova-configuration");
            }
            var c = null;
            b(function(b) {
              if (b) {
                if ("function" != typeof(c = y("cordova.plugins.browsertab.openUrl", l))) {
                  throw new k("invalid-cordova-configuration");
                }
                c(n);
              } else {
                if ("function" != typeof(c = y("cordova.InAppBrowser.open", l))) {
                  throw new k("invalid-cordova-configuration");
                }
                b = F();
                b = !(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
                a.a = c(n, b ? "_blank" : "_system", "location=yes");
              }
            });
          });
        }
        function Ah(a, b) {
          for (var c = 0; c < a.b.length; c++) {
            try {
              a.b[c](b);
            } catch (d) {
            }
          }
        }
        function Bh(a) {
          return a.f || (a.f = a.ba().then(function() {
            return new t(function(b) {
              function c(d) {
                return b(d), a.Ja(c), !1;
              }
              a.ua(c);
              Tk(a);
            });
          })), a.f;
        }
        function qe(a) {
          var b = null;
          return Ok(a.g).then(function(c) {
            return b = c, c = a.g, hb(c.b, pe, c.a);
          }).then(function() {
            return b;
          });
        }
        function Tk(a) {
          function b(b) {
            d = !0;
            e && e.cancel();
            qe(a).then(function(d) {
              var e = c;
              if (d && b && b.url) {
                e = null;
                var g = b.url, h = pa(g), f = Wa(h, "link"), k = Wa(pa(f), "link");
                h = Wa(h, "deep_link_id");
                g = Wa(pa(h), "link") || h || k || f || g;
                -1 != g.indexOf("/__/auth/callback") && (e = pa(g), e = Gb(Wa(e, "firebaseError") || null), e = (e = "object" == typeof e ? Hg(e) : null) ? new ka(d.b, d.c, null, null, e) : new ka(d.b, d.c, g, d.g));
                e = e || c;
              }
              Ah(a, e);
            });
          }
          var c = new ka("unknown", null, null, null, new k("no-auth-event")), d = !1, e = Ca(a.v).then(function() {
            return qe(a).then(function() {
              d || Ah(a, c);
            });
          }), g = l.handleOpenURL;
          l.handleOpenURL = function(a) {
            if (0 == a.toLowerCase().indexOf(y("BuildInfo.packageName", l).toLowerCase() + "://") && b({url:a}), "function" == typeof g) {
              try {
                g(a);
              } catch (Zb) {
                console.error(Zb);
              }
            }
          };
          re || (re = new $d);
          re.subscribe(b);
        }
        function Uk(a) {
          this.a = a;
          this.b = Rb();
        }
        function Vk(a) {
          return a.b.set(se, "pending", a.a);
        }
        function te(a) {
          return hb(a.b, se, a.a);
        }
        function Wk(a) {
          return a.b.get(se, a.a).then(function(a) {
            return "pending" == a;
          });
        }
        function ta(a, b, c) {
          this.v = a;
          this.l = b;
          this.u = c;
          this.h = [];
          this.f = !1;
          this.i = n(this.m, this);
          this.c = new Ic;
          this.o = new Ch;
          this.g = new Uk(this.l + ":" + this.u);
          this.b = {};
          this.b.unknown = this.c;
          this.b.signInViaRedirect = this.c;
          this.b.linkViaRedirect = this.c;
          this.b.reauthViaRedirect = this.c;
          this.b.signInViaPopup = this.o;
          this.b.linkViaPopup = this.o;
          this.b.reauthViaPopup = this.o;
          this.a = Dh(this.v, this.l, this.u, Jc);
        }
        function Dh(a, b, c, d) {
          var e = q.SDK_VERSION || null;
          return Kd() ? new yh(a, b, c, e, void 0, void 0, d) : new oh(a, b, c, e, d);
        }
        function Eh(a) {
          a.f || (a.f = !0, a.a.ua(a.i));
          var b = a.a;
          return a.a.ba().s(function(c) {
            throw a.a == b && a.reset(), c;
          });
        }
        function Fh(a) {
          a.a.Db() && Eh(a).s(function(b) {
            var c = new ka("unknown", null, null, null, new k("operation-not-supported-in-this-environment"));
            ue(b) && a.m(c);
          });
          a.a.yb() || Gh(a.c);
        }
        function Hh(a, b, c, d, e, g) {
          return a.a.vb(b, c, d, function() {
            a.f || (a.f = !0, a.a.ua(a.i));
          }, function() {
            a.reset();
          }, e, g);
        }
        function ue(a) {
          return !(!a || "auth/cordova-not-ready" != a.code);
        }
        function Ih(a, b, c) {
          var d = b + ":" + c;
          return ve[d] || (ve[d] = new ta(a, b, c)), ve[d];
        }
        function Ic() {
          this.b = null;
          this.f = [];
          this.c = [];
          this.a = null;
          this.g = !1;
        }
        function Gh(a) {
          a.g || (a.g = !0, ib(a, !1, null, null));
        }
        function Xk(a, b, c) {
          c = c.va(b.b, b.c);
          var d = b.f, e = b.g, g = !!b.b.match(/Redirect$/);
          return c(d, e).then(function(b) {
            ib(a, g, b, null);
          }).s(function(b) {
            ib(a, g, null, b);
          });
        }
        function Yk(a, b) {
          if (a.b = function() {
            return z(b);
          }, a.c.length) {
            for (var c = 0; c < a.c.length; c++) {
              a.c[c](b);
            }
          }
        }
        function Jh(a, b) {
          if (a.b = function() {
            return p(b);
          }, a.f.length) {
            for (var c = 0; c < a.f.length; c++) {
              a.f[c](b);
            }
          }
        }
        function ib(a, b, c, d) {
          b ? d ? Yk(a, d) : Jh(a, c) : Jh(a, {user:null});
          a.f = [];
          a.c = [];
        }
        function Zk(a) {
          var b = new k("timeout");
          a.a && a.a.cancel();
          a.a = Ca($k.get()).then(function() {
            a.b || ib(a, !0, null, b);
          });
        }
        function Ch() {
        }
        function al(a, b) {
          var c = a.c, d = a.b;
          return b.va(d, c)(a.f, a.g).then(function(a) {
            b.fa(d, a, null, c);
          }).s(function(a) {
            b.fa(d, null, a, c);
          });
        }
        function we(a, b) {
          this.a = b;
          r(this, "verificationId", a);
        }
        function xe(a, b, c, d) {
          return (new Ja(a)).Qa(b, c).then(function(a) {
            return new we(a, d);
          });
        }
        function Kh(a, b, c, d, e, g) {
          if (this.h = a, this.i = b, this.g = c, this.c = d, this.f = e, this.l = !!g, this.b = null, this.a = this.c, this.f < this.c) {
            throw Error("Proactive refresh lower bound greater than upper bound!");
          }
        }
        function bl(a, b) {
          return b ? (a.a = a.c, a.g()) : (b = a.a, a.a *= 2, a.a > a.f && (a.a = a.f), b);
        }
        function ye(a, b) {
          ze(a);
          a.b = Ca(bl(a, b)).then(function() {
            return a.l ? p() : Ij();
          }).then(function() {
            return a.h();
          }).then(function() {
            ye(a, !0);
          }).s(function(b) {
            a.i(b) && ye(a, !1);
          });
        }
        function ze(a) {
          a.b && (a.b.cancel(), a.b = null);
        }
        function Ae(a) {
          this.f = a;
          this.b = this.a = null;
          this.c = 0;
        }
        function Lh(a, b) {
          var c = b[V], d = b.refreshToken;
          b = Mh(b.expiresIn);
          a.b = c;
          a.c = b;
          a.a = d;
        }
        function Mh(a) {
          return Ia() + 1E3 * parseInt(a, 10);
        }
        function cl(a, b) {
          return ck(a.f, b).then(function(b) {
            return a.b = b.access_token, a.c = Mh(b.expires_in), a.a = b.refresh_token, {accessToken:a.b, expirationTime:a.c, refreshToken:a.a};
          }).s(function(b) {
            throw "auth/user-token-expired" == b.code && (a.a = null), b;
          });
        }
        function Kc(a, b) {
          this.a = a || null;
          this.b = b || null;
          ba(this, {lastSignInTime:Fg(b || null), creationTime:Fg(a || null)});
        }
        function dl(a) {
          return new Kc(a.a, a.b);
        }
        function el(a, b, c, d, e, g) {
          ba(this, {uid:a, displayName:d || null, photoURL:e || null, email:c || null, phoneNumber:g || null, providerId:b});
        }
        function Tb(a, b) {
          P.call(this, a);
          for (var c in b) {
            this[c] = b[c];
          }
        }
        function W(a, b, c) {
          this.A = [];
          this.G = a.apiKey;
          this.o = a.appName;
          this.w = a.authDomain || null;
          a = q.SDK_VERSION ? Ya(q.SDK_VERSION) : null;
          this.c = new da(this.G, Mb(Jc), a);
          this.h = new Ae(this.c);
          Be(this, b[V]);
          Lh(this.h, b);
          r(this, "refreshToken", this.h.a);
          Nh(this, c || {});
          S.call(this);
          this.I = !1;
          this.w && Ga() && (this.a = Ih(this.w, this.G, this.o));
          this.N = [];
          this.i = null;
          this.l = fl(this);
          this.U = n(this.Ga, this);
          var d = this;
          this.ha = null;
          this.ra = function(a) {
            d.na(a.h);
          };
          this.W = null;
          this.R = [];
          this.qa = function(a) {
            Lc(d, a.f);
          };
          this.V = null;
        }
        function Ce(a, b) {
          a.W && R(a.W, "languageCodeChanged", a.ra);
          (a.W = b) && na(b, "languageCodeChanged", a.ra);
        }
        function Lc(a, b) {
          a.R = b;
          dh(a.c, q.SDK_VERSION ? Ya(q.SDK_VERSION, a.R) : null);
        }
        function De(a, b) {
          a.V && R(a.V, "frameworkChanged", a.qa);
          (a.V = b) && na(b, "frameworkChanged", a.qa);
        }
        function Oh(a) {
          try {
            return q.app(a.o).auth();
          } catch (b) {
            throw new k("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.o + "'!");
          }
        }
        function fl(a) {
          return new Kh(function() {
            return a.F(!0);
          }, function(a) {
            return !(!a || "auth/network-request-failed" != a.code);
          }, function() {
            var b = a.h.c - Ia() - 3E5;
            return 0 < b ? b : 0;
          }, 3E4, 96E4, !1);
        }
        function Ph(a) {
          a.m || a.l.b || (a.l.start(), R(a, "tokenChanged", a.U), na(a, "tokenChanged", a.U));
        }
        function Ee(a) {
          R(a, "tokenChanged", a.U);
          ze(a.l);
        }
        function Be(a, b) {
          a.pa = b;
          r(a, "_lat", b);
        }
        function gl(a, b) {
          Z(a.N, function(a) {
            return a == b;
          });
        }
        function Ka(a) {
          for (var b = [], c = 0; c < a.N.length; c++) {
            b.push(a.N[c](a));
          }
          return Pi(b).then(function() {
            return a;
          });
        }
        function Mc(a) {
          a.a && !a.I && (a.I = !0, a.a.subscribe(a));
        }
        function Nh(a, b) {
          ba(a, {uid:b.uid, displayName:b.displayName || null, photoURL:b.photoURL || null, email:b.email || null, emailVerified:b.emailVerified || !1, phoneNumber:b.phoneNumber || null, isAnonymous:b.isAnonymous || !1, metadata:new Kc(b.createdAt, b.lastLoginAt), providerData:[]});
        }
        function Qh() {
        }
        function Fe(a) {
          return p().then(function() {
            if (a.m) {
              throw new k("app-deleted");
            }
          });
        }
        function Ge(a) {
          return yd(a.providerData, function(a) {
            return a.providerId;
          });
        }
        function He(a, b) {
          b && (Rh(a, b.providerId), a.providerData.push(b));
        }
        function Rh(a, b) {
          Z(a.providerData, function(a) {
            return a.providerId == b;
          });
        }
        function ua(a, b, c) {
          ("uid" != b || c) && a.hasOwnProperty(b) && r(a, b, c);
        }
        function Sh(a, b) {
          a != b && (ba(a, {uid:b.uid, displayName:b.displayName, photoURL:b.photoURL, email:b.email, emailVerified:b.emailVerified, phoneNumber:b.phoneNumber, isAnonymous:b.isAnonymous, providerData:[]}), b.metadata ? r(a, "metadata", dl(b.metadata)) : r(a, "metadata", new Kc), M(b.providerData, function(b) {
            He(a, b);
          }), a.h = b.h, r(a, "refreshToken", a.h.a));
        }
        function Ie(a) {
          return a.F().then(function(b) {
            var c = a.isAnonymous;
            return hl(a, b).then(function() {
              return c || ua(a, "isAnonymous", !1), b;
            });
          });
        }
        function La(a, b) {
          b[V] && a.pa != b[V] && (Lh(a.h, b), E(a, new Tb("tokenChanged")), Be(a, b[V]), ua(a, "refreshToken", a.h.a));
        }
        function hl(a, b) {
          return v(a.c, il, {idToken:b}).then(n(a.kc, a));
        }
        function jl(a) {
          return (a = a.providerUserInfo) && a.length ? yd(a, function(a) {
            return new el(a.rawId, a.providerId, a.email, a.displayName, a.photoUrl, a.phoneNumber);
          }) : [];
        }
        function Nc(a, b) {
          return Ie(a).then(function() {
            if (wa(Ge(a), b)) {
              return Ka(a).then(function() {
                throw new k("provider-already-linked");
              });
            }
          });
        }
        function Oc(a, b, c) {
          var d = Bc(b);
          return b = Td(b), ja({user:a, credential:d, additionalUserInfo:b, operationType:c});
        }
        function Th(a, b) {
          return La(a, b), a.reload().then(function() {
            return a;
          });
        }
        function Uh(a, b, c, d, e) {
          if (!Ga()) {
            return z(new k("operation-not-supported-in-this-environment"));
          }
          if (a.i && !e) {
            return z(a.i);
          }
          var g = Rd(c.providerId), f = Za(a.uid + ":::"), l = null;
          (!Eb() || Ld()) && a.w && c.isOAuthProvider && (l = Nb(a.w, a.G, a.o, b, c, null, f, q.SDK_VERSION || null));
          var m = zg(l, g && g.za, g && g.ya);
          return d = d().then(function() {
            if (Vh(a), !e) {
              return a.F().then(function() {
              });
            }
          }).then(function() {
            return Hh(a.a, m, b, c, f, !!l);
          }).then(function() {
            return new t(function(c, d) {
              a.fa(b, null, new k("cancelled-popup-request"), a.g || null);
              a.f = c;
              a.v = d;
              a.g = f;
              a.b = a.a.Ca(a, b, m, f);
            });
          }).then(function(a) {
            return m && Fa(m), a ? ja(a) : null;
          }).s(function(a) {
            throw m && Fa(m), a;
          }), D(a, d, e);
        }
        function Wh(a, b, c, d, e) {
          if (!Ga()) {
            return z(new k("operation-not-supported-in-this-environment"));
          }
          if (a.i && !e) {
            return z(a.i);
          }
          var g = null, f = Za(a.uid + ":::");
          return d = d().then(function() {
            if (Vh(a), !e) {
              return a.F().then(function() {
              });
            }
          }).then(function() {
            return a.Z = f, Ka(a);
          }).then(function(b) {
            return a.ca && (b = a.ca, b = b.b.set(Je, a.B(), b.a)), b;
          }).then(function() {
            return a.a.Aa(b, c, f);
          }).s(function(b) {
            if (g = b, a.ca) {
              return Xh(a.ca);
            }
            throw g;
          }).then(function() {
            if (g) {
              throw g;
            }
          }), D(a, d, e);
        }
        function Vh(a) {
          if (!a.a || !a.I) {
            if (a.a && !a.I) {
              throw new k("internal-error");
            }
            throw new k("auth-domain-config-required");
          }
        }
        function D(a, b, c) {
          var d = kl(a, b, c);
          return a.A.push(d), Qa(d, function() {
            $b(a.A, d);
          }), d;
        }
        function kl(a, b, c) {
          return a.i && !c ? (b.cancel(), z(a.i)) : b.s(function(b) {
            throw !b || "auth/user-disabled" != b.code && "auth/user-token-expired" != b.code || (a.i || E(a, new Tb("userInvalidated")), a.i = b), b;
          });
        }
        function Yh(a) {
          if (!a.apiKey) {
            return null;
          }
          var b = {apiKey:a.apiKey, authDomain:a.authDomain, appName:a.appName}, c = {};
          if (!(a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime)) {
            return null;
          }
          c[V] = a.stsTokenManager.accessToken;
          c.refreshToken = a.stsTokenManager.refreshToken || null;
          c.expiresIn = (a.stsTokenManager.expirationTime - Ia()) / 1E3;
          var d = new W(b, c, a);
          return a.providerData && M(a.providerData, function(a) {
            a && He(d, ja(a));
          }), a.redirectEventId && (d.Z = a.redirectEventId), d;
        }
        function ll(a, b, c, d) {
          var e = new W(a, b);
          return c && (e.ca = c), d && Lc(e, d), e.reload().then(function() {
            return e;
          });
        }
        function ml(a) {
          this.a = a;
          this.b = Rb();
        }
        function Xh(a) {
          return hb(a.b, Je, a.a);
        }
        function nl(a, b) {
          return a.b.get(Je, a.a).then(function(a) {
            return a && b && (a.authDomain = b), Yh(a || {});
          });
        }
        function Ke(a, b) {
          this.a = a;
          this.b = b || Rb();
          this.c = null;
          this.f = ol(this);
          xh(this.b, ea("local"), this.a, n(this.g, this));
        }
        function Le(a, b) {
          var c, d = [];
          for (c in fb) {
            fb[c] !== b && d.push(hb(a.b, ea(fb[c]), a.a));
          }
          return d.push(hb(a.b, Me, a.a)), Oi(d);
        }
        function ol(a) {
          var b = ea("local"), c = ea("session"), d = ea("none");
          return a.b.get(c, a.a).then(function(e) {
            return e ? c : a.b.get(d, a.a).then(function(c) {
              return c ? d : a.b.get(b, a.a).then(function(c) {
                return c ? b : a.b.get(Me, a.a).then(function(a) {
                  return a ? ea(a) : b;
                });
              });
            });
          }).then(function(b) {
            return a.c = b, Le(a, b.C);
          }).s(function() {
            a.c || (a.c = b);
          });
        }
        function ea(a) {
          return {name:"authUser", C:a};
        }
        function pl(a) {
          return jb(a, function() {
            return a.b.set(Me, a.c.C, a.a);
          });
        }
        function Zh(a, b) {
          return jb(a, function() {
            return a.b.set(a.c, b.B(), a.a);
          });
        }
        function $h(a) {
          return jb(a, function() {
            return hb(a.b, a.c, a.a);
          });
        }
        function ai(a, b) {
          return jb(a, function() {
            return a.b.get(a.c, a.a).then(function(a) {
              return a && b && (a.authDomain = b), Yh(a || {});
            });
          });
        }
        function jb(a, b) {
          return a.f = a.f.then(b, b), a.f;
        }
        function X(a) {
          if (this.l = !1, r(this, "app", a), !this.app.options || !this.app.options.apiKey) {
            throw new k("invalid-api-key");
          }
          a = q.SDK_VERSION ? Ya(q.SDK_VERSION) : null;
          this.c = new da(this.app.options && this.app.options.apiKey, Mb(Jc), a);
          this.N = [];
          this.m = [];
          this.I = [];
          this.Kb = q.INTERNAL.createSubscribe(n(this.ac, this));
          this.R = void 0;
          this.Lb = q.INTERNAL.createSubscribe(n(this.bc, this));
          Ub(this, null);
          this.h = new Ke(this.app.options.apiKey + ":" + this.app.name);
          this.G = new ml(this.app.options.apiKey + ":" + this.app.name);
          this.U = B(this, ql(this));
          this.i = B(this, rl(this));
          this.W = !1;
          this.ha = n(this.yc, this);
          this.Ga = n(this.ka, this);
          this.pa = n(this.Tb, this);
          this.qa = n(this.Zb, this);
          this.ra = n(this.$b, this);
          sl(this);
          this.INTERNAL = {};
          this.INTERNAL["delete"] = n(this["delete"], this);
          this.INTERNAL.logFramework = n(this.gc, this);
          this.o = 0;
          S.call(this);
          tl(this);
          this.A = [];
        }
        function bi(a) {
          P.call(this, "languageCodeChanged");
          this.h = a;
        }
        function ci(a) {
          P.call(this, "frameworkChanged");
          this.f = a;
        }
        function tl(a) {
          Object.defineProperty(a, "lc", {get:function() {
            return this.$();
          }, set:function(a) {
            this.na(a);
          }, enumerable:!1});
          a.V = null;
        }
        function Ne(a) {
          return a.Jb || z(new k("auth-domain-config-required"));
        }
        function sl(a) {
          var b = a.app.options.authDomain, c = a.app.options.apiKey;
          b && Ga() && (a.Jb = a.U.then(function() {
            if (!a.l) {
              if (a.a = Ih(b, c, a.app.name), a.a.subscribe(a), a.currentUser && Mc(a.currentUser), a.w) {
                Mc(a.w);
                var d = a.w;
                d.na(a.$());
                Ce(d, a);
                d = a.w;
                Lc(d, a.A);
                De(d, a);
                a.w = null;
              }
              return a.a;
            }
          }));
        }
        function di(a, b) {
          var c = {};
          return c.apiKey = a.app.options.apiKey, c.authDomain = a.app.options.authDomain, c.appName = a.app.name, a.U.then(function() {
            return ll(c, b, a.G, a.Ka());
          }).then(function(b) {
            return a.currentUser && b.uid == a.currentUser.uid ? (Sh(a.currentUser, b), a.ka(b)) : (Ub(a, b), Mc(b), a.ka(b));
          }).then(function() {
            Pc(a);
          });
        }
        function Ub(a, b) {
          a.currentUser && (gl(a.currentUser, a.Ga), R(a.currentUser, "tokenChanged", a.pa), R(a.currentUser, "userDeleted", a.qa), R(a.currentUser, "userInvalidated", a.ra), Ee(a.currentUser));
          b && (b.N.push(a.Ga), na(b, "tokenChanged", a.pa), na(b, "userDeleted", a.qa), na(b, "userInvalidated", a.ra), 0 < a.o && Ph(b));
          r(a, "currentUser", b);
          b && (b.na(a.$()), Ce(b, a), Lc(b, a.A), De(b, a));
        }
        function ul(a) {
          var b = nl(a.G, a.app.options.authDomain).then(function(b) {
            return (a.w = b) && (b.ca = a.G), Xh(a.G);
          });
          return B(a, b);
        }
        function ql(a) {
          var b = a.app.options.authDomain, c = ul(a).then(function() {
            return ai(a.h, b);
          }).then(function(b) {
            return b ? (b.ca = a.G, a.w && (a.w.Z || null) == (b.Z || null) ? b : b.reload().then(function() {
              return Zh(a.h, b).then(function() {
                return b;
              });
            }).s(function(c) {
              return "auth/network-request-failed" == c.code ? b : $h(a.h);
            })) : null;
          }).then(function(b) {
            Ub(a, b || null);
          });
          return B(a, c);
        }
        function rl(a) {
          return a.U.then(function() {
            return a.aa();
          }).s(function() {
          }).then(function() {
            if (!a.l) {
              return a.ha();
            }
          }).s(function() {
          }).then(function() {
            if (!a.l) {
              a.W = !0;
              var b = a.h;
              xh(b.b, ea("local"), b.a, a.ha);
            }
          });
        }
        function Vb(a, b) {
          var c = null, d = null;
          return B(a, b.then(function(b) {
            return c = Bc(b), d = Td(b), di(a, b);
          }).then(function() {
            return ja({user:a.currentUser, credential:c, additionalUserInfo:d, operationType:"signIn"});
          }));
        }
        function Qc(a) {
          return a.currentUser && a.currentUser._lat || null;
        }
        function Pc(a) {
          if (a.W) {
            for (var b = 0; b < a.m.length; b++) {
              a.m[b] && a.m[b](Qc(a));
            }
            if (a.R !== a.getUid() && a.I.length) {
              for (a.R = a.getUid(), b = 0; b < a.I.length; b++) {
                a.I[b] && a.I[b](Qc(a));
              }
            }
          }
        }
        function vl(a, b) {
          a.I.push(b);
          B(a, a.i.then(function() {
            !a.l && wa(a.I, b) && a.R !== a.getUid() && (a.R = a.getUid(), b(Qc(a)));
          }));
        }
        function B(a, b) {
          return a.N.push(b), Qa(b, function() {
            $b(a.N, b);
          }), b;
        }
        function ei(a, b, c, d) {
          a: {
            c = Array.prototype.slice.call(c);
            for (var e = 0, g = !1, f = 0; f < b.length; f++) {
              if (b[f].optional) {
                g = !0;
              } else {
                if (g) {
                  throw new k("internal-error", "Argument validator encountered a required argument after an optional argument.");
                }
                e++;
              }
            }
            if (g = b.length, c.length < e || g < c.length) {
              d = "Expected " + (e == g ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + g + " arguments") + " but got " + c.length + ".";
            } else {
              for (e = 0; e < c.length; e++) {
                if (g = b[e].optional && void 0 === c[e], !b[e].M(c[e]) && !g) {
                  if (b = b[e], 0 > e || e >= fi.length) {
                    throw new k("internal-error", "Argument validator received an unsupported number of arguments.");
                  }
                  c = fi[e];
                  d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.K + ".";
                  break a;
                }
              }
              d = null;
            }
          }
          if (d) {
            throw new k("argument-error", a + " failed: " + d);
          }
        }
        function m(a, b) {
          return {name:a || "", K:"a valid string", optional:!!b, M:x};
        }
        function gi() {
          return {name:"opt_forceRefresh", K:"a boolean", optional:!0, M:va};
        }
        function H(a, b) {
          return {name:a || "", K:"a valid object", optional:!!b, M:O};
        }
        function kb(a, b) {
          return {name:a || "", K:"a function", optional:!!b, M:G};
        }
        function Ma(a, b) {
          return {name:a || "", K:"null", optional:!!b, M:Wb};
        }
        function wl() {
          return {name:"", K:"an HTML element", optional:!1, M:function(a) {
            return !!(a && a instanceof Element);
          }};
        }
        function xl() {
          return {name:"auth", K:"an instance of Firebase Auth", optional:!0, M:function(a) {
            return !!(a && a instanceof X);
          }};
        }
        function yl() {
          return {name:"app", K:"an instance of Firebase App", optional:!0, M:function(a) {
            return !!(a && a instanceof q.app.App);
          }};
        }
        function Na(a) {
          return {name:a ? a + "Credential" : "credential", K:a ? "a valid " + a + " credential" : "a valid credential", optional:!1, M:function(b) {
            if (!b) {
              return !1;
            }
            var c = !a || b.providerId === a;
            return !(!b.wa || !c);
          }};
        }
        function lb() {
          return {name:"authProvider", K:"a valid Auth provider", optional:!1, M:function(a) {
            return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
          }};
        }
        function Rc() {
          return {name:"applicationVerifier", K:"an implementation of firebase.auth.ApplicationVerifier", optional:!1, M:function(a) {
            return !!(a && x(a.type) && G(a.verify));
          }};
        }
        function I(a, b, c, d) {
          return {name:c || "", K:a.K + " or " + b.K, optional:!!d, M:function(c) {
            return a.M(c) || b.M(c);
          }};
        }
        function Oe(a, b, c, d, e, g) {
          if (r(this, "type", "recaptcha"), this.b = this.c = null, this.m = !1, this.l = b, this.a = c || {theme:"light", type:"image"}, this.g = [], this.a[hi]) {
            throw new k("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
          }
          if (this.h = "invisible" === this.a[zl], !dc(b) || !this.h && dc(b).hasChildNodes()) {
            throw new k("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
          }
          this.u = new da(a, g || null, e || null);
          this.o = d || function() {
            return null;
          };
          var f = this;
          this.i = [];
          var m = this.a[ii];
          this.a[ii] = function(a) {
            if (ji(f, a), "function" == typeof m) {
              m(a);
            } else {
              if ("string" == typeof m) {
                var b = y(m, l);
                "function" == typeof b && b(a);
              }
            }
          };
          var n = this.a[ki];
          this.a[ki] = function() {
            if (ji(f, null), "function" == typeof n) {
              n();
            } else {
              if ("string" == typeof n) {
                var a = y(n, l);
                "function" == typeof a && a();
              }
            }
          };
        }
        function ji(a, b) {
          for (var c = 0; c < a.i.length; c++) {
            try {
              a.i[c](b);
            } catch (d) {
            }
          }
        }
        function Al(a, b) {
          Z(a.i, function(a) {
            return a == b;
          });
        }
        function Pe(a, b) {
          return a.g.push(b), Qa(b, function() {
            $b(a.g, b);
          }), b;
        }
        function Sc(a) {
          if (a.m) {
            throw new k("internal-error", "RecaptchaVerifier instance has been destroyed.");
          }
        }
        function li() {
          this.b = l.grecaptcha ? 1 / 0 : 0;
          this.c = null;
          this.a = "__rcb" + Math.floor(1E6 * Math.random());
        }
        function Bl(a, b) {
          return new t(function(c, d) {
            if (Nd()) {
              if (!l.grecaptcha || b !== a.c && !a.b) {
                l[a.a] = function() {
                  if (l.grecaptcha) {
                    a.c = b;
                    var e = l.grecaptcha.render;
                    l.grecaptcha.render = function(b, c) {
                      return b = e(b, c), a.b++, b;
                    };
                    c();
                  } else {
                    d(new k("internal-error"));
                  }
                  delete l[a.a];
                };
                var e = gd(Cl, {onload:a.a, hl:b || ""});
                p(Fd(e)).s(function() {
                  d(new k("internal-error", "Unable to load external reCAPTCHA dependencies!"));
                });
              } else {
                c();
              }
            } else {
              d(new k("network-request-failed"));
            }
          });
        }
        function Qe(a, b, c) {
          try {
            this.f = c || q.app();
          } catch (g) {
            throw new k("argument-error", "No firebase.app.App instance is currently initialized.");
          }
          if (!this.f.options || !this.f.options.apiKey) {
            throw new k("invalid-api-key");
          }
          c = this.f.options.apiKey;
          var d = this, e = null;
          try {
            e = this.f.auth().Ka();
          } catch (g) {
          }
          e = q.SDK_VERSION ? Ya(q.SDK_VERSION, e) : null;
          Oe.call(this, c, a, b, function() {
            try {
              var a = d.f.auth().$();
            } catch (h) {
              a = null;
            }
            return a;
          }, e, Mb(Jc));
        }
        function J(a, b) {
          for (var c in b) {
            var d = b[c].name;
            a[d] = mi(d, a[c], b[c].j);
          }
        }
        function K(a, b, c, d) {
          a[b] = mi(b, c, d);
        }
        function mi(a, b, c) {
          function d() {
            var a = Array.prototype.slice.call(arguments);
            return ei(g, c, a), b.apply(this, a);
          }
          if (!c) {
            return b;
          }
          var e, g = Dl(a);
          for (e in b) {
            d[e] = b[e];
          }
          for (e in b.prototype) {
            d.prototype[e] = b.prototype[e];
          }
          return d;
        }
        function Dl(a) {
          return a = a.split("."), a[a.length - 1];
        }
        var q = Xb(6)["default"], Ed = Ed || {}, l = this, fc = "closure_uid_" + (1E9 * Math.random() >>> 0), Kf = 0, Ia = Date.now || function() {
          return +new Date;
        };
        u(L, Error);
        L.prototype.name = "CustomError";
        var cf = String.prototype.trim ? function(a) {
          return a.trim();
        } : function(a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        }, Ai = /&/g, Bi = /</g, Ci = />/g, Di = /"/g, Ei = /'/g, Fi = /\x00/g, zi = /[\x00&<>"']/;
        u(Wc, L);
        Wc.prototype.name = "AssertionError";
        var We = Array.prototype.indexOf ? function(a, b, c) {
          return Array.prototype.indexOf.call(a, b, c);
        } : function(a, b, c) {
          if (c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c, x(a)) {
            return x(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          }
          for (; c < a.length; c++) {
            if (c in a && a[c] === b) {
              return c;
            }
          }
          return -1;
        }, M = Array.prototype.forEach ? function(a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        } : function(a, b, c) {
          for (var d = a.length, e = x(a) ? a.split("") : a, g = 0; g < d; g++) {
            g in e && b.call(c, e[g], g, a);
          }
        }, yd = Array.prototype.map ? function(a, b, c) {
          return Array.prototype.map.call(a, b, c);
        } : function(a, b, c) {
          for (var d = a.length, e = Array(d), g = x(a) ? a.split("") : a, f = 0; f < d; f++) {
            f in g && (e[f] = b.call(c, g[f], f, a));
          }
          return e;
        }, nj = Array.prototype.some ? function(a, b, c) {
          return Array.prototype.some.call(a, b, c);
        } : function(a, b, c) {
          for (var d = a.length, e = x(a) ? a.split("") : a, g = 0; g < d; g++) {
            if (g in e && b.call(c, e[g], g, a)) {
              return !0;
            }
          }
          return !1;
        };
        a: {
          var ni = l.navigator;
          if (ni) {
            var oi = ni.userAgent;
            if (oi) {
              var pb = oi;
              break a;
            }
          }
          pb = "";
        }
        var $e = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
        Yc[" "] = Y;
        var El = C("Opera"), T = C("Trident") || C("MSIE"), pi = C("Edge"), Fj = pi || T, Mf = C("Gecko") && !(w(pb.toLowerCase(), "webkit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"), Fl = w(pb.toLowerCase(), "webkit") && !C("Edge");
        a: {
          var Re = "", Se = function() {
            var a = pb;
            return Mf ? /rv:([^\);]+)(\)|;)/.exec(a) : pi ? /Edge\/([\d\.]+)/.exec(a) : T ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a) : Fl ? /WebKit\/(\S+)/.exec(a) : El ? /(?:Version)[ \/]?(\S+)/.exec(a) : void 0;
          }();
          if (Se && (Re = Se ? Se[1] : ""), T) {
            var Te = af();
            if (null != Te && Te > parseFloat(Re)) {
              var Zc = Te + "";
              break a;
            }
          }
          Zc = Re;
        }
        var Ki = {}, qi = l.document;
        var ra = qi && T ? af() || ("CSS1Compat" == qi.compatMode ? parseInt(Zc, 10) : 5) : void 0;
        $c.prototype.get = function() {
          if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null;
          } else {
            a = this.c();
          }
          return a;
        };
        var jf = new $c(function() {
          return new ad;
        }, function(a) {
          a.reset();
        }, 100);
        ad.prototype.set = function(a, b) {
          this.a = a;
          this.b = b;
          this.next = null;
        };
        ad.prototype.reset = function() {
          this.next = this.b = this.a = null;
        };
        var cd, ac, bd = !1, gf = new function() {
          this.b = this.a = null;
        }, ya = 0, ub = 2, fa = 3;
        lf.prototype.reset = function() {
          this.f = this.b = this.g = this.a = null;
          this.c = !1;
        };
        var mf = new $c(function() {
          return new lf;
        }, function(a) {
          a.reset();
        }, 100);
        t.prototype.then = function(a, b, c) {
          return sf(this, G(a) ? a : null, G(b) ? b : null, c);
        };
        df(t);
        var f = t.prototype;
        f.s = function(a, b) {
          return sf(this, null, a, b);
        };
        f.cancel = function(a) {
          this.a == ya && tb(function() {
            pf(this, new Pa(a));
          }, this);
        };
        f.Ac = function(a) {
          this.a = ya;
          za(this, ub, a);
        };
        f.Bc = function(a) {
          this.a = ya;
          za(this, fa, a);
        };
        f.Qb = function() {
          for (var a; a = qf(this);) {
            rf(this, a, this.a, this.i);
          }
          this.h = !1;
        };
        var uf = hf;
        u(Pa, L);
        Pa.prototype.name = "cancel";
        var Wi = !T || 9 <= +ra;
        Aa.prototype.la = !0;
        Aa.prototype.ja = function() {
          return this.a;
        };
        Aa.prototype.toString = function() {
          return "Const{" + this.a + "}";
        };
        var vf = {};
        vb("");
        Ra.prototype.la = !0;
        Ra.prototype.ja = function() {
          return this.a;
        };
        Ra.prototype.toString = function() {
          return "TrustedResourceUrl{" + this.a + "}";
        };
        var Ui = /%{(\w+)}/g, Ti = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i, xf = {};
        aa.prototype.la = !0;
        aa.prototype.ja = function() {
          return this.a;
        };
        aa.prototype.toString = function() {
          return "SafeUrl{" + this.a + "}";
        };
        var Bf = /^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i, zf = {};
        hd("about:blank");
        Sa.prototype.la = !0;
        Sa.prototype.ja = function() {
          return this.a;
        };
        Sa.prototype.toString = function() {
          return "SafeHtml{" + this.a + "}";
        };
        var Cf = {};
        cc("<!DOCTYPE html>");
        cc("");
        cc("<br>");
        var Ef = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", nonce:"nonce", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"}, Hf = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $i = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g, If = 0, Jf = {};
        ec.prototype.oa = !1;
        ec.prototype.ta = function() {
          if (this.Fa) {
            for (; this.Fa.length;) {
              this.Fa.shift()();
            }
          }
        };
        var Gl = Object.freeze || function(a) {
          return a;
        }, Rf = !T || 9 <= +ra, Hl = T && !bf("9"), ej = function() {
          if (!l.addEventListener || !Object.defineProperty) {
            return !1;
          }
          var a = !1, b = Object.defineProperty({}, "passive", {get:function() {
            a = !0;
          }});
          return l.addEventListener("test", Y, b), l.removeEventListener("test", Y, b), a;
        }();
        P.prototype.c = function() {
          this.Bb = !1;
        };
        u(Ba, P);
        var aj = Gl({2:"touch", 3:"pen", 4:"mouse"});
        Ba.prototype.c = function() {
          Ba.ib.c.call(this);
          var a = this.a;
          if (a.preventDefault) {
            a.preventDefault();
          } else {
            if (a.returnValue = !1, Hl) {
              try {
                (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) && (a.keyCode = -1);
              } catch (b) {
              }
            }
          }
        };
        Ba.prototype.g = function() {
          return this.a;
        };
        var wb = "closure_listenable_" + (1E6 * Math.random() | 0), cj = 0, pd = "closure_lm_" + (1E6 * Math.random() | 0), rd = {}, Qf = 0, sd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
        u(S, ec);
        S.prototype[wb] = !0;
        S.prototype.removeEventListener = function(a, b, c, d) {
          R(this, a, b, c, d);
        };
        S.prototype.ta = function() {
          if (S.ib.ta.call(this), this.u) {
            var a, b = this.u, c = 0;
            for (a in b.a) {
              for (var d = b.a[a], e = 0; e < d.length; e++) {
                ++c, gc(d[e]);
              }
              delete b.a[a];
              b.b--;
            }
          }
          this.Ra = null;
        };
        ud.prototype.a = null;
        var Il = 0;
        ud.prototype.reset = function(a, b, c, d, e) {
          "number" == typeof e || Il++;
          d || Ia();
          this.b = b;
          delete this.a;
        };
        jc.prototype.toString = function() {
          return this.name;
        };
        var tg = new jc("SEVERE", 1E3), gj = new jc("CONFIG", 700), hj = new jc("FINE", 500);
        vd.prototype.log = function(a, b, c) {
          if (a.value >= Vf(this).value) {
            for (G(b) && (b = b()), a = new ud(a, b + "", this.f), c && (a.a = c), c = "log:" + a.b, (a = l.console) && a.timeStamp && a.timeStamp(c), (a = l.msWriteProfilerMark) && a(c), c = this; c;) {
              c = c.a;
            }
          }
        };
        var wd = {}, kc = null;
        f = Ta.prototype;
        f.P = function() {
          xd(this);
          for (var a = [], b = 0; b < this.a.length; b++) {
            a.push(this.b[this.a[b]]);
          }
          return a;
        };
        f.S = function() {
          return xd(this), this.a.concat();
        };
        f.clear = function() {
          this.b = {};
          this.c = this.a.length = 0;
        };
        f.get = function(a, b) {
          return Da(this.b, a) ? this.b[a] : b;
        };
        f.set = function(a, b) {
          Da(this.b, a) || (this.c++, this.a.push(a));
          this.b[a] = b;
        };
        f.forEach = function(a, b) {
          for (var c = this.S(), d = 0; d < c.length; d++) {
            var e = c[d], g = this.get(e);
            a.call(b, g, e, this);
          }
        };
        var mc = null, lc = null;
        oa.prototype.cancel = function(a) {
          if (this.a) {
            this.c instanceof oa && this.c.cancel();
          } else {
            if (this.b) {
              var b = this.b;
              delete this.b;
              a ? b.cancel(a) : 0 >= --b.l && b.cancel();
            }
            this.v ? this.v.call(this.o, this) : this.u = !0;
            this.a || (a = new yb, nc(this), xb(this, !1, a));
          }
        };
        oa.prototype.m = function(a, b) {
          this.i = !1;
          xb(this, a, b);
        };
        oa.prototype.A = function(a) {
          nc(this);
          xb(this, !0, a);
        };
        oa.prototype.then = function(a, b, c) {
          var d, e, g = new t(function(a, b) {
            d = a;
            e = b;
          });
          return zd(this, d, function(a) {
            a instanceof yb ? g.cancel() : e(a);
          }), g.then(a, b, c);
        };
        df(oa);
        u(oc, L);
        oc.prototype.message = "Deferred has already fired";
        oc.prototype.name = "AlreadyCalledError";
        u(yb, L);
        yb.prototype.message = "Deferred was canceled";
        yb.prototype.name = "CanceledError";
        Zf.prototype.c = function() {
          throw delete pc[this.a], this.b;
        };
        var Ad, pc = {};
        u(qc, function() {
          this.b = -1;
        });
        for (var $f = 64, Jl = $f - 1, ri = [], Ue = 0; Ue < Jl; Ue++) {
          ri[Ue] = 0;
        }
        var zh = Xc(128, ri);
        qc.prototype.reset = function() {
          this.g = this.c = 0;
          this.a = l.Int32Array ? new Int32Array(this.h) : xa(this.h);
        };
        var ag = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
        u(bg, qc);
        var oj = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], gg = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        Ua.prototype.toString = function() {
          var a = [], b = this.c;
          b && a.push(Ab(b, si, !0), ":");
          var c = this.b;
          return (c || "file" == b) && (a.push("//"), (b = this.l) && a.push(Ab(b, si, !0), "@"), a.push(encodeURIComponent(c + "").replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (c = this.i) && a.push(":", c + "")), (c = this.g) && (this.b && "/" != c.charAt(0) && a.push("/"), a.push(Ab(c, "/" == c.charAt(0) ? Kl : Ll, !0))), (c = "" + this.a) && a.push("?", c), (c = this.h) && a.push("#", Ab(c, Ml)), a.join("");
        };
        var si = /[#\/\?@]/g, Ll = /[#\?:]/g, Kl = /[#\?]/g, sj = /[#\?@]/g, Ml = /#/g;
        f = Va.prototype;
        f.clear = function() {
          this.a = this.c = null;
          this.b = 0;
        };
        f.forEach = function(a, b) {
          qa(this);
          this.a.forEach(function(c, d) {
            M(c, function(c) {
              a.call(b, c, d, this);
            }, this);
          }, this);
        };
        f.S = function() {
          qa(this);
          for (var a = this.a.P(), b = this.a.S(), c = [], d = 0; d < b.length; d++) {
            for (var e = a[d], g = 0; g < e.length; g++) {
              c.push(b[d]);
            }
          }
          return c;
        };
        f.P = function(a) {
          qa(this);
          var b = [];
          if (x(a)) {
            lg(this, a) && (b = Xc(b, this.a.get(Xa(this, a))));
          } else {
            a = this.a.P();
            for (var c = 0; c < a.length; c++) {
              b = Xc(b, a[c]);
            }
          }
          return b;
        };
        f.set = function(a, b) {
          return qa(this), this.c = null, a = Xa(this, a), lg(this, a) && (this.b -= this.a.get(a).length), this.a.set(a, [b]), this.b += 1, this;
        };
        f.get = function(a, b) {
          return a = a ? this.P(a) : [], 0 < a.length ? a[0] + "" : b;
        };
        f.toString = function() {
          if (this.c) {
            return this.c;
          }
          if (!this.a) {
            return "";
          }
          for (var a = [], b = this.a.S(), c = 0; c < b.length; c++) {
            var d = b[c], e = encodeURIComponent(d + "");
            d = this.P(d);
            for (var g = 0; g < d.length; g++) {
              var f = e;
              "" !== d[g] && (f += "=" + encodeURIComponent(d[g] + ""));
              a.push(f);
            }
          }
          return this.c = a.join("&");
        };
        rc.prototype.c = null;
        u(sc, rc);
        sc.prototype.a = function() {
          var a = mg(this);
          return a ? new ActiveXObject(a) : new XMLHttpRequest;
        };
        sc.prototype.b = function() {
          var a = {};
          return mg(this) && (a[0] = !0, a[1] = !0), a;
        };
        var og = new sc;
        u(Ea, S);
        var ng = "", Nl = Ea.prototype, Ol = Wf("goog.net.XhrIo");
        Nl.J = Ol;
        var yj = /^https?$/i, wj = ["POST", "PUT"];
        f = Ea.prototype;
        f.Ea = function() {
          void 0 !== Ed && this.a && (this.g = "Timed out after " + this.f + "ms, aborting", Q(this.J, ia(this, this.g)), E(this, "timeout"), this.abort(8));
        };
        f.abort = function() {
          this.a && this.b && (Q(this.J, ia(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, E(this, "complete"), E(this, "abort"), tc(this));
        };
        f.ta = function() {
          this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), tc(this, !0));
          Ea.ib.ta.call(this);
        };
        f.Ab = function() {
          this.oa || (this.G || this.h || this.c ? sg(this) : this.jc());
        };
        f.jc = function() {
          sg(this);
        };
        f.getResponse = function() {
          try {
            if (!this.a) {
              return null;
            }
            if ("response" in this.a) {
              return this.a.response;
            }
            switch(this.l) {
              case ng:
              case "text":
                return this.a.responseText;
              case "arraybuffer":
                if ("mozResponseArrayBuffer" in this.a) {
                  return this.a.mozResponseArrayBuffer;
                }
            }
            var a = this.J;
            return a && a.log(tg, "Response type " + this.l + " is not supported on this browser", void 0), null;
          } catch (b) {
            return Q(this.J, "Can not get response: " + b.message), null;
          }
        };
        var ek = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/, Cj = 0, Bj = 1;
        u(Gd, L);
        u(wc, rc);
        wc.prototype.a = function() {
          var a = new XMLHttpRequest;
          if ("withCredentials" in a) {
            return a;
          }
          if ("undefined" != typeof XDomainRequest) {
            return new ug;
          }
          throw Error("Unsupported browser");
        };
        wc.prototype.b = function() {
          return {};
        };
        f = ug.prototype;
        f.open = function(a, b, c) {
          if (null != c && !c) {
            throw Error("Only async requests are supported.");
          }
          this.a.open(a, b);
        };
        f.send = function(a) {
          if (a) {
            if ("string" != typeof a) {
              throw Error("Only string data is supported");
            }
            this.a.send(a);
          } else {
            this.a.send();
          }
        };
        f.abort = function() {
          this.a.abort();
        };
        f.setRequestHeader = function() {
        };
        f.getResponseHeader = function(a) {
          return "content-type" == a.toLowerCase() ? this.a.contentType : "";
        };
        f.Wb = function() {
          this.status = 200;
          this.responseText = this.a.responseText;
          this.readyState = 4;
          this.onreadystatechange && this.onreadystatechange();
        };
        f.xb = function() {
          this.status = 500;
          this.responseText = "";
          this.readyState = 4;
          this.onreadystatechange && this.onreadystatechange();
        };
        f.Yb = function() {
          this.xb();
        };
        f.Xb = function() {
          this.status = 200;
          this.readyState = 1;
          this.onreadystatechange && this.onreadystatechange();
        };
        f.getAllResponseHeaders = function() {
          return "content-type: " + this.a.contentType;
        };
        var yk = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, Id = "Firefox", xg = "Chrome", Bg = {Gc:"FirebaseCore-web", Ic:"FirebaseUI-web"};
        Ha.prototype.get = function() {
          return this.a ? this.b : this.c;
        };
        var ti = {};
        try {
          var Ve = {};
          Object.defineProperty(Ve, "abcd", {configurable:!0, enumerable:!0, value:1});
          Object.defineProperty(Ve, "abcd", {configurable:!0, enumerable:!0, value:2});
          var Gg = 2 == Ve.abcd;
        } catch (a) {
          Gg = !1;
        }
        var Mj = "email", Nj = "newEmail", Oj = "requestType", Qj = "email", Pj = "fromEmail", Sj = "data", Rj = "operation";
        u(k, Error);
        k.prototype.B = function() {
          return {code:this.code, message:this.message};
        };
        k.prototype.toJSON = function() {
          return this.B();
        };
        var Hb = "auth/", Tj = {"argument-error":"", "app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", 
        "code-expired":"The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready":"Cordova framework is not ready.", "cors-unsupported":"This browser is not supported.", "credential-already-in-use":"This credential is already associated with a different user account.", "custom-token-mismatch":"The custom token corresponds to a different audience.", "requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.", 
        "dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use":"The email address is already in use by another account.", "expired-action-code":"The action code has expired. ", "cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.", "internal-error":"An internal error has occurred.", "invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", 
        "invalid-app-id":"The mobile app identifier is not registed for the current project.", "invalid-user-token":"The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event":"An internal error has occurred.", "invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri":"The continue URL provided in the request is invalid.", 
        "invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token":"The custom token format is incorrect. Please check the documentation.", "invalid-email":"The email address is badly formatted.", "invalid-api-key":"Your API key is invalid, please check you have copied it correctly.", 
        "invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.", "invalid-credential":"The supplied auth credential is malformed or has expired.", "invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", 
        "invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password":"The password is invalid or the user does not have a password.", 
        "invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", 
        "invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", 
        "missing-verification-code":"The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri":"A continue URL must be provided in the request.", "missing-iframe-start":"An internal error has occurred.", "missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-phone-number":"To send verification codes, provide a phone number for the recipient.", "missing-verification-id":"The phone auth credential was created with an empty verification ID.", 
        "app-deleted":"This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event":"An internal error has occurred.", "no-such-provider":"User was not linked to an account with the given provider.", 
        "operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.", 
        "popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.", "provider-already-linked":"User can only be linked to one identity for the given provider.", "quota-exceeded":"The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending":"A redirect sign-in operation is already pending.", timeout:"The operation has timed out.", 
        "user-token-expired":"The user's credential is no longer valid. The user must sign in again.", "too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type":"The current environment does not support the specified persistence type.", "user-cancelled":"User did not grant your application the permissions it requested.", 
        "user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled":"The user account has been disabled by an administrator.", "user-mismatch":"The supplied credentials do not correspond to the previously signed in user.", "user-signed-out":"", "weak-password":"The password must be 6 characters long or more.", "web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."}, Jg = "android", 
        Qd = "handleCodeInApp", Ng = "iOS", Uj = "url", Lg = "installApp", Mg = "minimumVersion", Kg = "packageName", Og = "bundleId", Zg = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "), Ac = ["client_id", "response_type", "scope", "redirect_uri", "state"], Sd = {Hc:{Ma:"locale", za:500, ya:600, Na:"facebook.com", $a:Ac}, Jc:{Ma:null, za:500, ya:620, Na:"github.com", $a:Ac}, Kc:{Ma:"hl", za:515, ya:680, Na:"google.com", 
        $a:Ac}, Qc:{Ma:"lang", za:485, ya:705, Na:"twitter.com", $a:Zg}}, Ud = "idToken", Vg = "providerId";
        u(ca, Vd);
        u(Rg, ca);
        u(Tg, ca);
        u(Sg, ca);
        u(Ug, ca);
        $a.prototype.wa = function(a) {
          return jh(a, Wd(this));
        };
        $a.prototype.b = function(a, b) {
          var c = Wd(this);
          return c.idToken = b, kh(a, c);
        };
        $a.prototype.c = function(a, b) {
          return zc(lh(a, Wd(this)), b);
        };
        $a.prototype.B = function() {
          var a = {providerId:this.providerId};
          return this.idToken && (a.oauthIdToken = this.idToken), this.accessToken && (a.oauthAccessToken = this.accessToken), this.secret && (a.oauthTokenSecret = this.secret), a;
        };
        Ib.prototype.Ba = function(a) {
          return this.rb = rb(a), this;
        };
        u(N, Ib);
        N.prototype.sa = function(a) {
          return wa(this.a, a) || this.a.push(a), this;
        };
        N.prototype.wb = function() {
          return xa(this.a);
        };
        N.prototype.credential = function(a, b) {
          if (!a && !b) {
            throw new k("argument-error", "credential failed: must provide the ID token and/or the access token.");
          }
          return new $a(this.providerId, {idToken:a || null, accessToken:b || null});
        };
        u(ab, N);
        r(ab, "PROVIDER_ID", "facebook.com");
        u(bb, N);
        r(bb, "PROVIDER_ID", "github.com");
        u(cb, N);
        r(cb, "PROVIDER_ID", "google.com");
        u(Jb, Ib);
        r(Jb, "PROVIDER_ID", "twitter.com");
        Kb.prototype.wa = function(a) {
          return v(a, ui, {email:this.a, password:this.f});
        };
        Kb.prototype.b = function(a, b) {
          return v(a, vi, {idToken:b, email:this.a, password:this.f});
        };
        Kb.prototype.c = function(a, b) {
          return zc(this.wa(a), b);
        };
        Kb.prototype.B = function() {
          return {email:this.a, password:this.f};
        };
        ba(Xd, {PROVIDER_ID:"password"});
        db.prototype.wa = function(a) {
          return a.Qa(Yd(this));
        };
        db.prototype.b = function(a, b) {
          var c = Yd(this);
          return c.idToken = b, v(a, Pl, c);
        };
        db.prototype.c = function(a, b) {
          var c = Yd(this);
          return c.operation = "REAUTH", a = v(a, Ql, c), zc(a, b);
        };
        db.prototype.B = function() {
          var a = {providerId:"phone"};
          return this.a.Pa && (a.verificationId = this.a.Pa), this.a.Oa && (a.verificationCode = this.a.Oa), this.a.Da && (a.temporaryProof = this.a.Da), this.a.Y && (a.phoneNumber = this.a.Y), a;
        };
        Ja.prototype.Qa = function(a, b) {
          var c = this.a.c;
          return p(b.verify()).then(function(d) {
            if (!x(d)) {
              throw new k("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
            }
            switch(b.type) {
              case "recaptcha":
                return jk(c, {phoneNumber:a, recaptchaToken:d}).then(function(a) {
                  return "function" == typeof b.reset && b.reset(), a;
                }, function(a) {
                  throw "function" == typeof b.reset && b.reset(), a;
                });
              default:
                throw new k("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            }
          });
        };
        ba(Ja, {PROVIDER_ID:"phone"});
        ka.prototype.B = function() {
          return {type:this.b, eventId:this.c, urlResponse:this.f, sessionId:this.g, error:this.a && this.a.B()};
        };
        var re = null;
        $d.prototype.subscribe = function(a) {
          var b = this;
          this.a.push(a);
          this.b || (this.b = function(a) {
            for (var c = 0; c < b.a.length; c++) {
              b.a[c](a);
            }
          }, "function" == typeof(a = y("universalLinks.subscribe", l)) && a(null, this.b));
        };
        $d.prototype.unsubscribe = function(a) {
          Z(this.a, function(b) {
            return b == a;
          });
        };
        u(ae, k);
        u(Lb, k);
        Lb.prototype.B = function() {
          var a = {code:this.code, message:this.message};
          this.email && (a.email = this.email);
          this.phoneNumber && (a.phoneNumber = this.phoneNumber);
          var b = this.credential && this.credential.B();
          return b && ma(a, b), a;
        };
        Lb.prototype.toJSON = function() {
          return this.B();
        };
        u(Dc, rc);
        Dc.prototype.a = function() {
          return new this.f;
        };
        Dc.prototype.b = function() {
          return {};
        };
        var be, V = "idToken", Wj = new Ha(3E4, 6E4), Xj = {"Content-Type":"application/x-www-form-urlencoded"}, Yj = new Ha(3E4, 6E4), Zj = {"Content-Type":"application/json"};
        da.prototype.m = function(a, b, c, d, e, g) {
          var f = "Node" == U(), k = Ag() ? f ? new Ea(this.o) : new Ea : new Ea(this.f);
          if (g) {
            k.f = Math.max(0, g);
            var l = setTimeout(function() {
              E(k, "timeout");
            }, g);
          }
          Nf(k, "complete", function() {
            l && clearTimeout(l);
            var a = null;
            try {
              a = JSON.parse(zj(this)) || null;
            } catch (dm) {
              a = null;
            }
            b && b(a);
          });
          qd(k, "ready", function() {
            l && clearTimeout(l);
            Lf(this);
          });
          qd(k, "timeout", function() {
            l && clearTimeout(l);
            Lf(this);
            b && b(null);
          });
          vj(k, a, c, d, e);
        };
        var bk = vb("https://apis.google.com/js/client.js?onload=%{onload}"), fh = "__fcb" + Math.floor(1E6 * Math.random());
        da.prototype.u = function(a, b, c, d, e) {
          var g = this;
          be.then(function() {
            window.gapi.client.setApiKey(g.b);
            var f = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null);
            window.gapi.client.request({path:a, method:c, body:d, headers:e, authType:"none", callback:function(a) {
              window.gapi.auth.setToken(f);
              b && b(a);
            }});
          }).s(function(a) {
            b && b({error:{message:a && a.message || "CORS_UNSUPPORTED"}});
          });
        };
        da.prototype.gb = function() {
          return v(this, Rl, {});
        };
        da.prototype.kb = function(a, b) {
          return v(this, wi, {idToken:a, email:b});
        };
        da.prototype.lb = function(a, b) {
          return v(this, vi, {idToken:a, password:b});
        };
        var Sl = {displayName:"DISPLAY_NAME", photoUrl:"PHOTO_URL"};
        f = da.prototype;
        f.mb = function(a, b) {
          var c = {idToken:a}, d = [];
          return Xe(Sl, function(a, g) {
            var e = b[g];
            null === e ? d.push(a) : g in b && (c[g] = e);
          }), d.length && (c.deleteAttribute = d), v(this, wi, c);
        };
        f.cb = function(a, b) {
          return a = {requestType:"PASSWORD_RESET", email:a}, ma(a, b), v(this, Tl, a);
        };
        f.bb = function(a, b) {
          return a = {requestType:"VERIFY_EMAIL", idToken:a}, ma(a, b), v(this, Ul, a);
        };
        f.Qa = function(a) {
          return v(this, Vl, a);
        };
        f.Ta = function(a, b) {
          return v(this, Wl, {oobCode:a, newPassword:b});
        };
        f.Ia = function(a) {
          return v(this, Xl, {oobCode:a});
        };
        f.Sa = function(a) {
          return v(this, Yl, {oobCode:a});
        };
        var Yl = {endpoint:"setAccountInfo", D:fe, ga:"email"}, Xl = {endpoint:"resetPassword", D:fe, O:function(a) {
          if (!a.email || !a.requestType) {
            throw new k("internal-error");
          }
        }}, Zl = {endpoint:"signupNewUser", D:function(a) {
          if (Ec(a), !a.password) {
            throw new k("weak-password");
          }
        }, O:sa, T:!0}, gk = {endpoint:"createAuthUri"}, $l = {endpoint:"deleteAccount", ea:["idToken"]}, mk = {endpoint:"setAccountInfo", ea:["idToken", "deleteProvider"], D:function(a) {
          if (!la(a.deleteProvider)) {
            throw new k("internal-error");
          }
        }}, il = {endpoint:"getAccountInfo"}, Ul = {endpoint:"getOobConfirmationCode", ea:["idToken", "requestType"], D:function(a) {
          if ("VERIFY_EMAIL" != a.requestType) {
            throw new k("internal-error");
          }
        }, ga:"email"}, Tl = {endpoint:"getOobConfirmationCode", ea:["requestType"], D:function(a) {
          if ("PASSWORD_RESET" != a.requestType) {
            throw new k("internal-error");
          }
          Ec(a);
        }, ga:"email"}, ik = {nb:!0, endpoint:"getProjectConfig", zb:"GET"}, am = {nb:!0, endpoint:"getRecaptchaParam", zb:"GET", O:function(a) {
          if (!a.recaptchaSiteKey) {
            throw new k("internal-error");
          }
        }}, Wl = {endpoint:"resetPassword", D:fe, ga:"email"}, kk = {endpoint:"sendVerificationCode", ea:["phoneNumber", "recaptchaToken"], ga:"sessionInfo"}, wi = {endpoint:"setAccountInfo", ea:["idToken"], D:gh, T:!0}, vi = {endpoint:"setAccountInfo", ea:["idToken"], D:function(a) {
          if (gh(a), !a.password) {
            throw new k("weak-password");
          }
        }, O:sa, T:!0}, Rl = {endpoint:"signupNewUser", O:sa, T:!0}, nk = {endpoint:"verifyAssertion", D:ee, O:hh, T:!0}, pk = {endpoint:"verifyAssertion", D:ee, O:function(a) {
          if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) {
            throw new k("user-not-found");
          }
          if (a.errorMessage) {
            throw ih(a.errorMessage);
          }
          if (!a[V]) {
            throw new k("internal-error");
          }
        }, T:!0}, ok = {endpoint:"verifyAssertion", D:function(a) {
          if (ee(a), !a.idToken) {
            throw new k("internal-error");
          }
        }, O:hh, T:!0}, bm = {endpoint:"verifyCustomToken", D:function(a) {
          if (!a.token) {
            throw new k("invalid-custom-token");
          }
        }, O:sa, T:!0}, ui = {endpoint:"verifyPassword", D:function(a) {
          if (Ec(a), !a.password) {
            throw new k("wrong-password");
          }
        }, O:sa, T:!0}, Vl = {endpoint:"verifyPhoneNumber", D:de, O:sa}, Pl = {endpoint:"verifyPhoneNumber", D:function(a) {
          if (!a.idToken) {
            throw new k("internal-error");
          }
          de(a);
        }, O:function(a) {
          if (a.temporaryProof) {
            throw a.code = "credential-already-in-use", Cc(a);
          }
          sa(a);
        }}, Ql = {Pb:{USER_NOT_FOUND:"user-not-found"}, endpoint:"verifyPhoneNumber", D:de, O:sa}, ge = {Mc:{Va:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/", ab:"https://securetoken.googleapis.com/v1/token", id:"p"}, Oc:{Va:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", ab:"https://staging-securetoken.sandbox.googleapis.com/v1/token", id:"s"}, Pc:{Va:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", ab:"https://test-securetoken.sandbox.googleapis.com/v1/token", 
        id:"t"}};
        var Jc = Mb("__EID__") ? "__EID__" : void 0;
        var xk = vb("https://apis.google.com/js/api.js?onload=%{onload}"), wk = new Ha(3E4, 6E4), tk = new Ha(5E3, 15E3), he = null;
        mh.prototype.toString = function() {
          return this.f ? A(this.a, "v", this.f) : ha(this.a.a, "v"), this.b ? A(this.a, "eid", this.b) : ha(this.a.a, "eid"), this.c.length ? A(this.a, "fw", this.c.join(",")) : ha(this.a.a, "fw"), "" + this.a;
        };
        nh.prototype.toString = function() {
          var a = hg(this.m, "/__/auth/handler");
          if (A(a, "apiKey", this.u), A(a, "appName", this.c), A(a, "authType", this.l), this.a.isOAuthProvider) {
            var b = this.a;
            try {
              var c = q.app(this.c).auth().$();
            } catch (Zb) {
              c = null;
            }
            b.Ua = c;
            A(a, "providerId", this.a.providerId);
            b = this.a;
            c = Cg(b.rb);
            for (var d in c) {
              c[d] = "" + c[d];
            }
            d = b.rc;
            c = rb(c);
            for (var e = 0; e < d.length; e++) {
              var g = d[e];
              g in c && delete c[g];
            }
            b.Wa && b.Ua && !c[b.Wa] && (c[b.Wa] = b.Ua);
            qb(c) || A(a, "customParameters", Fb(c));
          }
          if ("function" == typeof this.a.wb && (b = this.a.wb(), b.length && A(a, "scopes", b.join(","))), this.h ? A(a, "redirectUrl", this.h) : ha(a.a, "redirectUrl"), this.g ? A(a, "eventId", this.g) : ha(a.a, "eventId"), this.i ? A(a, "v", this.i) : ha(a.a, "v"), this.b) {
            for (var f in this.b) {
              this.b.hasOwnProperty(f) && !Wa(a, f) && A(a, f, this.b[f]);
            }
          }
          return this.f ? A(a, "eid", this.f) : ha(a.a, "eid"), f = ie(this.c), f.length && A(a, "fw", f.join(",")), "" + a;
        };
        f = oh.prototype;
        f.Ca = function(a, b, c) {
          var d = new k("popup-closed-by-user"), e = new k("web-storage-unsupported"), g = this, f = !1;
          return this.ba().then(function() {
            Ak(g).then(function(c) {
              c || (a && Fa(a), b(e), f = !0);
            });
          }).s(function() {
          }).then(function() {
            if (!f) {
              return Gj(a);
            }
          }).then(function() {
            if (!f) {
              return Ca(c).then(function() {
                b(d);
              });
            }
          });
        };
        f.Db = function() {
          var a = F();
          return !Eb(a) && !Dg(a);
        };
        f.yb = function() {
          return !1;
        };
        f.vb = function(a, b, c, d, e, g, f) {
          if (!a) {
            return z(new k("popup-blocked"));
          }
          if (f && !Eb()) {
            return this.ba().s(function(b) {
              Fa(a);
              e(b);
            }), d(), p();
          }
          this.a || (this.a = ph(rh(this)));
          var h = this;
          return this.a.then(function() {
            var b = h.ba().s(function(b) {
              throw Fa(a), e(b), b;
            });
            return d(), b;
          }).then(function() {
            Zd(c);
            f || vg(Nb(h.u, h.f, h.b, b, c, null, g, h.c, void 0, h.h), a);
          }).s(function(a) {
            throw "auth/network-request-failed" == a.code && (h.a = null), a;
          });
        };
        f.Aa = function(a, b, c) {
          this.a || (this.a = ph(rh(this)));
          var d = this;
          return this.a.then(function() {
            Zd(b);
            vg(Nb(d.u, d.f, d.b, a, b, xc(), c, d.c, void 0, d.h));
          }).s(function(a) {
            throw "auth/network-request-failed" == a.code && (d.a = null), a;
          });
        };
        f.ba = function() {
          var a = this;
          return qh(this).then(function() {
            return a.i.Ya;
          }).s(function() {
            throw a.a = null, new k("network-request-failed");
          });
        };
        f.Hb = function() {
          return !0;
        };
        f.ua = function(a) {
          this.g.push(a);
        };
        f.Ja = function(a) {
          Z(this.g, function(b) {
            return b == a;
          });
        };
        f = sh.prototype;
        f.get = function(a) {
          return p(this.a.getItem(a)).then(function(a) {
            return a && Gb(a);
          });
        };
        f.set = function(a, b) {
          return p(this.a.setItem(a, Fb(b)));
        };
        f.X = function(a) {
          return p(this.a.removeItem(a));
        };
        f.ia = function() {
        };
        f.da = function() {
        };
        f = Fc.prototype;
        f.get = function(a) {
          return p(this.a[a]);
        };
        f.set = function(a, b) {
          return this.a[a] = b, p();
        };
        f.X = function(a) {
          return delete this.a[a], p();
        };
        f.ia = function() {
        };
        f.da = function() {
        };
        var me;
        f = th.prototype;
        f.set = function(a, b) {
          var c, d = !1, e = this;
          return Qa(Gc(this).then(function(b) {
            return c = b, b = Ob(e, Pb(e, c, !0)), eb(b.get(a));
          }).then(function(g) {
            var f = Ob(e, Pb(e, c, !0));
            return g ? (g.value = b, eb(f.put(g))) : (e.a++, d = !0, g = {}, g[e.g] = a, g[e.l] = b, eb(f.add(g)));
          }).then(function() {
            e.f[a] = b;
          }), function() {
            d && e.a--;
          });
        };
        f.get = function(a) {
          var b = this;
          return Gc(this).then(function(c) {
            return eb(Ob(b, Pb(b, c, !1)).get(a));
          }).then(function(a) {
            return a && a.value;
          });
        };
        f.X = function(a) {
          var b = !1, c = this;
          return Qa(Gc(this).then(function(d) {
            return b = !0, c.a++, eb(Ob(c, Pb(c, d, !0))["delete"](a));
          }).then(function() {
            delete c.f[a];
          }), function() {
            b && c.a--;
          });
        };
        f.zc = function() {
          var a = this;
          return Gc(this).then(function(b) {
            var c = Ob(a, Pb(a, b, !1));
            return c.getAll ? eb(c.getAll()) : new t(function(a, b) {
              var d = [], e = c.openCursor();
              e.onsuccess = function(b) {
                (b = b.target.result) ? (d.push(b.value), b["continue"]()) : a(d);
              };
              e.onerror = function(a) {
                b(Error(a.target.errorCode));
              };
            });
          }).then(function(b) {
            var c = {}, d = [];
            if (0 == a.a) {
              for (d = 0; d < b.length; d++) {
                c[b[d][a.g]] = b[d][a.l];
              }
              d = wg(a.f, c);
              a.f = c;
            }
            return d;
          });
        };
        f.ia = function(a) {
          0 == this.c.length && Ck(this);
          this.c.push(a);
        };
        f.da = function(a) {
          Z(this.c, function(b) {
            return b == a;
          });
          0 == this.c.length && this.b && this.b.cancel("STOP_EVENT");
        };
        f = je.prototype;
        f.get = function(a) {
          var b = this;
          return p().then(function() {
            return Gb(b.a.getItem(a));
          });
        };
        f.set = function(a, b) {
          var c = this;
          return p().then(function() {
            var d = Fb(b);
            null === d ? c.X(a) : c.a.setItem(a, d);
          });
        };
        f.X = function(a) {
          var b = this;
          return p().then(function() {
            b.a.removeItem(a);
          });
        };
        f.ia = function(a) {
          l.window && na(l.window, "storage", a);
        };
        f.da = function(a) {
          l.window && R(l.window, "storage", a);
        };
        f = vh.prototype;
        f.get = function() {
          return p(null);
        };
        f.set = function() {
          return p();
        };
        f.X = function() {
          return p();
        };
        f.ia = function() {
        };
        f.da = function() {
        };
        f = ke.prototype;
        f.get = function(a) {
          var b = this;
          return p().then(function() {
            return Gb(b.a.getItem(a));
          });
        };
        f.set = function(a, b) {
          var c = this;
          return p().then(function() {
            var d = Fb(b);
            null === d ? c.X(a) : c.a.setItem(a, d);
          });
        };
        f.X = function(a) {
          var b = this;
          return p().then(function() {
            b.a.removeItem(a);
          });
        };
        f.ia = function() {
        };
        f.da = function() {
        };
        var le, ne, Gk = {C:je, jb:ke}, Hk = {C:je, jb:ke}, Ik = {C:sh, jb:vh}, fb = {Lc:"local", NONE:"none", Nc:"session"};
        Qb.prototype.get = function(a, b) {
          return gb(this, a.C).get(Sb(this, a, b));
        };
        Qb.prototype.set = function(a, b, c) {
          var d = Sb(this, a, c), e = this, g = gb(this, a.C);
          return g.set(d, b).then(function() {
            return g.get(d);
          }).then(function(b) {
            "local" == a.C && (e.b[d] = b);
          });
        };
        Qb.prototype.m = function(a) {
          if (a && a.g) {
            var b = a.a.key;
            if (null == b) {
              for (var c in this.a) {
                var d = this.b[c];
                void 0 === d && (d = null);
                var e = l.localStorage.getItem(c);
                e !== d && (this.b[c] = e, this.c(c));
              }
            } else {
              if (0 == b.indexOf(this.i + this.g) && this.a[b]) {
                if (void 0 !== a.a.a ? gb(this, "local").da(this.h) : oe(this), this.A) {
                  if (c = l.localStorage.getItem(b), (d = a.a.newValue) !== c) {
                    null !== d ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);
                  } else {
                    if (this.b[b] === d && void 0 === a.a.a) {
                      return;
                    }
                  }
                }
                var g = this;
                c = function() {
                  void 0 === a.a.a && g.b[b] === l.localStorage.getItem(b) || (g.b[b] = l.localStorage.getItem(b), g.c(b));
                };
                T && ra && 10 == ra && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
              }
            }
          } else {
            M(a, n(this.c, this));
          }
        };
        Qb.prototype.c = function(a) {
          this.a[a] && M(this.a[a], function(a) {
            a();
          });
        };
        var pe = {name:"authEvent", C:"local"};
        f = yh.prototype;
        f.ba = function() {
          return this.xa ? this.xa : this.xa = Hj().then(function() {
            if ("function" != typeof y("universalLinks.subscribe", l)) {
              throw Hc("cordova-universal-links-plugin is not installed");
            }
            if (void 0 === y("BuildInfo.packageName", l)) {
              throw Hc("cordova-plugin-buildinfo is not installed");
            }
            if ("function" != typeof y("cordova.plugins.browsertab.openUrl", l)) {
              throw Hc("cordova-plugin-browsertab is not installed");
            }
            if ("function" != typeof y("cordova.InAppBrowser.open", l)) {
              throw Hc("cordova-plugin-inappbrowser is not installed");
            }
          }, function() {
            throw new k("cordova-not-ready");
          });
        };
        f.Ca = function(a, b) {
          return b(new k("operation-not-supported-in-this-environment")), p();
        };
        f.vb = function() {
          return z(new k("operation-not-supported-in-this-environment"));
        };
        f.Hb = function() {
          return !1;
        };
        f.Db = function() {
          return !0;
        };
        f.yb = function() {
          return !0;
        };
        f.Aa = function(a, b, c) {
          if (this.c) {
            return z(new k("redirect-operation-pending"));
          }
          var d = this, e = l.document, g = null, f = null, m = null, n = null;
          return this.c = Qa(p().then(function() {
            return Zd(b), Bh(d);
          }).then(function() {
            return Sk(d, a, b, c);
          }).then(function() {
            return (new t(function(a, b) {
              f = function() {
                var b = y("cordova.plugins.browsertab.close", l);
                return a(), "function" == typeof b && b(), d.a && "function" == typeof d.a.close && (d.a.close(), d.a = null), !1;
              };
              d.ua(f);
              m = function() {
                g || (g = Ca(d.w).then(function() {
                  b(new k("redirect-cancelled-by-user"));
                }));
              };
              n = function() {
                Od() && m();
              };
              e.addEventListener("resume", m, !1);
              F().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", n, !1);
            })).s(function(a) {
              return qe(d).then(function() {
                throw a;
              });
            });
          }), function() {
            m && e.removeEventListener("resume", m, !1);
            n && e.removeEventListener("visibilitychange", n, !1);
            g && g.cancel();
            f && d.Ja(f);
            d.c = null;
          });
        };
        f.ua = function(a) {
          this.b.push(a);
          Bh(this).s(function(b) {
            "auth/invalid-cordova-configuration" === b.code && (b = new ka("unknown", null, null, null, new k("no-auth-event")), a(b));
          });
        };
        f.Ja = function(a) {
          Z(this.b, function(b) {
            return b == a;
          });
        };
        var se = {name:"pendingRedirect", C:"session"};
        ta.prototype.reset = function() {
          this.f = !1;
          this.a.Ja(this.i);
          this.a = Dh(this.v, this.l, this.u);
        };
        ta.prototype.subscribe = function(a) {
          if (wa(this.h, a) || this.h.push(a), !this.f) {
            var b = this;
            Wk(this.g).then(function(a) {
              a ? te(b.g).then(function() {
                Eh(b).s(function(a) {
                  var c = new ka("unknown", null, null, null, new k("operation-not-supported-in-this-environment"));
                  ue(a) && b.m(c);
                });
              }) : Fh(b);
            }).s(function() {
              Fh(b);
            });
          }
        };
        ta.prototype.unsubscribe = function(a) {
          Z(this.h, function(b) {
            return b == a;
          });
        };
        ta.prototype.m = function(a) {
          if (!a) {
            throw new k("invalid-auth-event");
          }
          for (var b = !1, c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            if (d.ob(a.b, a.c)) {
              (b = this.b[a.b]) && b.h(a, d);
              b = !0;
              break;
            }
          }
          return Gh(this.c), b;
        };
        var cm = new Ha(2E3, 1E4), $k = new Ha(3E4, 6E4);
        ta.prototype.aa = function() {
          return this.c.aa();
        };
        ta.prototype.Aa = function(a, b, c) {
          var d, e = this;
          return Vk(this.g).then(function() {
            return e.a.Aa(a, b, c).s(function(a) {
              if (ue(a)) {
                throw new k("operation-not-supported-in-this-environment");
              }
              return d = a, te(e.g).then(function() {
                throw d;
              });
            }).then(function() {
              return e.a.Hb() ? new t(function() {
              }) : te(e.g).then(function() {
                return e.aa();
              }).then(function() {
              }).s(function() {
              });
            });
          });
        };
        ta.prototype.Ca = function(a, b, c, d) {
          return this.a.Ca(c, function(c) {
            a.fa(b, null, c, d);
          }, cm.get());
        };
        var ve = {};
        Ic.prototype.reset = function() {
          this.b = null;
          this.a && (this.a.cancel(), this.a = null);
        };
        Ic.prototype.h = function(a, b) {
          if (!a) {
            return z(new k("invalid-auth-event"));
          }
          this.reset();
          this.g = !0;
          var c = a.b, d = a.c, e = a.a && "auth/web-storage-unsupported" == a.a.code, g = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
          return "unknown" != c || e || g ? a.a ? (ib(this, !0, null, a.a), a = p()) : a = b.va(c, d) ? Xk(this, a, b) : z(new k("invalid-auth-event")) : (ib(this, !1, null, null), a = p()), a;
        };
        Ic.prototype.aa = function() {
          var a = this;
          return new t(function(b, c) {
            a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), Zk(a));
          });
        };
        Ch.prototype.h = function(a, b) {
          if (!a) {
            return z(new k("invalid-auth-event"));
          }
          var c = a.b, d = a.c;
          return a.a ? (b.fa(a.b, null, a.a, a.c), a = p()) : a = b.va(c, d) ? al(a, b) : z(new k("invalid-auth-event")), a;
        };
        we.prototype.confirm = function(a) {
          return a = ah(this.verificationId, a), this.a(a);
        };
        Kh.prototype.start = function() {
          this.a = this.c;
          ye(this, !0);
        };
        Ae.prototype.B = function() {
          return {apiKey:this.f.b, refreshToken:this.a, accessToken:this.b, expirationTime:this.c};
        };
        Ae.prototype.getToken = function(a) {
          return a = !!a, this.b && !this.a ? z(new k("user-token-expired")) : a || !this.b || Ia() > this.c - 3E4 ? this.a ? cl(this, {grant_type:"refresh_token", refresh_token:this.a}) : p(null) : p({accessToken:this.b, expirationTime:this.c, refreshToken:this.a});
        };
        Kc.prototype.B = function() {
          return {lastLoginAt:this.b, createdAt:this.a};
        };
        u(Tb, P);
        u(W, S);
        W.prototype.na = function(a) {
          this.ha = a;
          ch(this.c, a);
        };
        W.prototype.$ = function() {
          return this.ha;
        };
        W.prototype.Ka = function() {
          return xa(this.R);
        };
        W.prototype.Ga = function() {
          this.l.b && (ze(this.l), this.l.start());
        };
        r(W.prototype, "providerId", "firebase");
        f = W.prototype;
        f.reload = function() {
          var a = this;
          return D(this, Fe(this).then(function() {
            return Ie(a).then(function() {
              return Ka(a);
            }).then(Qh);
          }));
        };
        f.F = function(a) {
          var b = this;
          return D(this, Fe(this).then(function() {
            return b.h.getToken(a);
          }).then(function(a) {
            if (!a) {
              throw new k("internal-error");
            }
            return a.accessToken != b.pa && (Be(b, a.accessToken), E(b, new Tb("tokenChanged"))), ua(b, "refreshToken", a.refreshToken), a.accessToken;
          }));
        };
        f.getToken = function(a) {
          return ti["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (ti["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.")), this.F(a);
        };
        f.kc = function(a) {
          if (!(a = a.users) || !a.length) {
            throw new k("internal-error");
          }
          a = a[0];
          Nh(this, {uid:a.localId, displayName:a.displayName, photoURL:a.photoUrl, email:a.email, emailVerified:!!a.emailVerified, phoneNumber:a.phoneNumber, lastLoginAt:a.lastLoginAt, createdAt:a.createdAt});
          for (var b = jl(a), c = 0; c < b.length; c++) {
            He(this, b[c]);
          }
          ua(this, "isAnonymous", !(this.email && a.passwordHash || this.providerData && this.providerData.length));
        };
        f.Za = function(a) {
          var b = this, c = null;
          return D(this, a.c(this.c, this.uid).then(function(a) {
            return La(b, a), c = Oc(b, a, "reauthenticate"), b.i = null, b.reload();
          }).then(function() {
            return c;
          }), !0);
        };
        f.mc = function(a) {
          return this.Za(a).then(function() {
          });
        };
        f.Xa = function(a) {
          var b = this, c = null;
          return D(this, Nc(this, a.providerId).then(function() {
            return b.F();
          }).then(function(c) {
            return a.b(b.c, c);
          }).then(function(a) {
            return c = Oc(b, a, "link"), Th(b, a);
          }).then(function() {
            return c;
          }));
        };
        f.cc = function(a) {
          return this.Xa(a).then(function(a) {
            return a.user;
          });
        };
        f.dc = function(a, b) {
          var c = this;
          return D(this, Nc(this, "phone").then(function() {
            return xe(Oh(c), a, b, n(c.Xa, c));
          }));
        };
        f.nc = function(a, b) {
          var c = this;
          return D(this, p().then(function() {
            return xe(Oh(c), a, b, n(c.Za, c));
          }), !0);
        };
        f.kb = function(a) {
          var b = this;
          return D(this, this.F().then(function(c) {
            return b.c.kb(c, a);
          }).then(function(a) {
            return La(b, a), b.reload();
          }));
        };
        f.Dc = function(a) {
          var b = this;
          return D(this, this.F().then(function(c) {
            return a.b(b.c, c);
          }).then(function(a) {
            return La(b, a), b.reload();
          }));
        };
        f.lb = function(a) {
          var b = this;
          return D(this, this.F().then(function(c) {
            return b.c.lb(c, a);
          }).then(function(a) {
            return La(b, a), b.reload();
          }));
        };
        f.mb = function(a) {
          if (void 0 === a.displayName && void 0 === a.photoURL) {
            return Fe(this);
          }
          var b = this;
          return D(this, this.F().then(function(c) {
            return b.c.mb(c, {displayName:a.displayName, photoUrl:a.photoURL});
          }).then(function(a) {
            return La(b, a), ua(b, "displayName", a.displayName || null), ua(b, "photoURL", a.photoUrl || null), M(b.providerData, function(a) {
              "password" === a.providerId && (r(a, "displayName", b.displayName), r(a, "photoURL", b.photoURL));
            }), Ka(b);
          }).then(Qh));
        };
        f.Cc = function(a) {
          var b = this;
          return D(this, Ie(this).then(function(c) {
            return wa(Ge(b), a) ? lk(b.c, c, [a]).then(function(a) {
              var c = {};
              return M(a.providerUserInfo || [], function(a) {
                c[a.providerId] = !0;
              }), M(Ge(b), function(a) {
                c[a] || Rh(b, a);
              }), c[Ja.PROVIDER_ID] || r(b, "phoneNumber", null), Ka(b);
            }) : Ka(b).then(function() {
              throw new k("no-such-provider");
            });
          }));
        };
        f["delete"] = function() {
          var a = this;
          return D(this, this.F().then(function(b) {
            return v(a.c, $l, {idToken:b});
          }).then(function() {
            E(a, new Tb("userDeleted"));
          })).then(function() {
            for (var b = 0; b < a.A.length; b++) {
              a.A[b].cancel("app-deleted");
            }
            Ce(a, null);
            De(a, null);
            a.A = [];
            a.m = !0;
            Ee(a);
            r(a, "refreshToken", null);
            a.a && a.a.unsubscribe(a);
          });
        };
        f.ob = function(a, b) {
          return !!("linkViaPopup" == a && (this.g || null) == b && this.f || "reauthViaPopup" == a && (this.g || null) == b && this.f || "linkViaRedirect" == a && (this.Z || null) == b || "reauthViaRedirect" == a && (this.Z || null) == b);
        };
        f.fa = function(a, b, c, d) {
          "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.g || null) || (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
        };
        f.va = function(a, b) {
          return "linkViaPopup" == a && b == (this.g || null) ? n(this.tb, this) : "reauthViaPopup" == a && b == (this.g || null) ? n(this.ub, this) : "linkViaRedirect" == a && (this.Z || null) == b ? n(this.tb, this) : "reauthViaRedirect" == a && (this.Z || null) == b ? n(this.ub, this) : null;
        };
        f.ec = function(a) {
          var b = this;
          return Uh(this, "linkViaPopup", a, function() {
            return Nc(b, a.providerId).then(function() {
              return Ka(b);
            });
          }, !1);
        };
        f.oc = function(a) {
          return Uh(this, "reauthViaPopup", a, function() {
            return p();
          }, !0);
        };
        f.fc = function(a) {
          var b = this;
          return Wh(this, "linkViaRedirect", a, function() {
            return Nc(b, a.providerId);
          }, !1);
        };
        f.pc = function(a) {
          return Wh(this, "reauthViaRedirect", a, function() {
            return p();
          }, !0);
        };
        f.tb = function(a, b) {
          var c = this;
          this.b && (this.b.cancel(), this.b = null);
          var d = null;
          return D(this, this.F().then(function(d) {
            return kh(c.c, {requestUri:a, sessionId:b, idToken:d});
          }).then(function(a) {
            return d = Oc(c, a, "link"), Th(c, a);
          }).then(function() {
            return d;
          }));
        };
        f.ub = function(a, b) {
          var c = this;
          this.b && (this.b.cancel(), this.b = null);
          var d = null;
          return D(this, p().then(function() {
            return zc(lh(c.c, {requestUri:a, sessionId:b}), c.uid);
          }).then(function(a) {
            return d = Oc(c, a, "reauthenticate"), La(c, a), c.i = null, c.reload();
          }).then(function() {
            return d;
          }), !0);
        };
        f.bb = function(a) {
          var b = this, c = null;
          return D(this, this.F().then(function(b) {
            return c = b, void 0 === a || qb(a) ? {} : Pg(new Ig(a));
          }).then(function(a) {
            return b.c.bb(c, a);
          }).then(function(a) {
            if (b.email != a) {
              return b.reload();
            }
          }).then(function() {
          }));
        };
        f.toJSON = function() {
          return this.B();
        };
        f.B = function() {
          var a = {uid:this.uid, displayName:this.displayName, photoURL:this.photoURL, email:this.email, emailVerified:this.emailVerified, phoneNumber:this.phoneNumber, isAnonymous:this.isAnonymous, providerData:[], apiKey:this.G, appName:this.o, authDomain:this.w, stsTokenManager:this.h.B(), redirectEventId:this.Z || null};
          return this.metadata && ma(a, this.metadata.B()), M(this.providerData, function(b) {
            a.providerData.push(Jj(b));
          }), a;
        };
        var Je = {name:"redirectUser", C:"session"};
        Ke.prototype.g = function() {
          var a = this, b = ea("local");
          jb(this, function() {
            return p().then(function() {
              return a.c && "local" != a.c.C ? a.b.get(b, a.a) : null;
            }).then(function(c) {
              if (c) {
                return Le(a, "local").then(function() {
                  a.c = b;
                });
              }
            });
          });
        };
        var Me = {name:"persistence", C:"session"};
        Ke.prototype.eb = function(a) {
          var b = null, c = this;
          return Jk(a), jb(this, function() {
            return a != c.c.C ? c.b.get(c.c, c.a).then(function(d) {
              return b = d, Le(c, a);
            }).then(function() {
              if (c.c = ea(a), b) {
                return c.b.set(c.c, b, c.a);
              }
            }) : p();
          });
        };
        u(X, S);
        u(bi, P);
        u(ci, P);
        f = X.prototype;
        f.eb = function(a) {
          return a = this.h.eb(a), B(this, a);
        };
        f.na = function(a) {
          this.V === a || this.l || (this.V = a, ch(this.c, this.V), E(this, new bi(this.$())));
        };
        f.$ = function() {
          return this.V;
        };
        f.Ec = function() {
          var a = l.navigator;
          this.na(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
        };
        f.gc = function(a) {
          this.A.push(a);
          dh(this.c, q.SDK_VERSION ? Ya(q.SDK_VERSION, this.A) : null);
          E(this, new ci(this.A));
        };
        f.Ka = function() {
          return xa(this.A);
        };
        f.toJSON = function() {
          return {apiKey:this.app.options.apiKey, authDomain:this.app.options.authDomain, appName:this.app.name, currentUser:this.currentUser && this.currentUser.B()};
        };
        f.ob = function(a, b) {
          switch(a) {
            case "unknown":
            case "signInViaRedirect":
              return !0;
            case "signInViaPopup":
              return this.g == b && !!this.f;
            default:
              return !1;
          }
        };
        f.fa = function(a, b, c, d) {
          "signInViaPopup" == a && this.g == d && (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
        };
        f.va = function(a, b) {
          return "signInViaRedirect" == a || "signInViaPopup" == a && this.g == b && this.f ? n(this.Sb, this) : null;
        };
        f.Sb = function(a, b) {
          var c = this;
          a = {requestUri:a, sessionId:b};
          this.b && (this.b.cancel(), this.b = null);
          var d = null, e = null, f = jh(c.c, a).then(function(a) {
            return d = Bc(a), e = Td(a), a;
          });
          return a = c.U.then(function() {
            return f;
          }).then(function(a) {
            return di(c, a);
          }).then(function() {
            return ja({user:c.currentUser, credential:d, additionalUserInfo:e, operationType:"signIn"});
          }), B(this, a);
        };
        f.wc = function(a) {
          if (!Ga()) {
            return z(new k("operation-not-supported-in-this-environment"));
          }
          var b = this, c = Rd(a.providerId), d = Za(), e = null;
          (!Eb() || Ld()) && this.app.options.authDomain && a.isOAuthProvider && (e = Nb(this.app.options.authDomain, this.app.options.apiKey, this.app.name, "signInViaPopup", a, null, d, q.SDK_VERSION || null));
          var f = zg(e, c && c.za, c && c.ya);
          return c = Ne(this).then(function(b) {
            return Hh(b, f, "signInViaPopup", a, d, !!e);
          }).then(function() {
            return new t(function(a, c) {
              b.fa("signInViaPopup", null, new k("cancelled-popup-request"), b.g);
              b.f = a;
              b.v = c;
              b.g = d;
              b.b = b.a.Ca(b, "signInViaPopup", f, d);
            });
          }).then(function(a) {
            return f && Fa(f), a ? ja(a) : null;
          }).s(function(a) {
            throw f && Fa(f), a;
          }), B(this, c);
        };
        f.xc = function(a) {
          if (!Ga()) {
            return z(new k("operation-not-supported-in-this-environment"));
          }
          var b = this;
          return B(this, Ne(this).then(function() {
            return pl(b.h);
          }).then(function() {
            return b.a.Aa("signInViaRedirect", a);
          }));
        };
        f.aa = function() {
          if (!Ga()) {
            return z(new k("operation-not-supported-in-this-environment"));
          }
          var a = this;
          return B(this, Ne(this).then(function() {
            return a.a.aa();
          }).then(function(a) {
            return a ? ja(a) : null;
          }));
        };
        f.hb = function() {
          var a = this;
          return B(this, this.i.then(function() {
            return a.currentUser ? (Ub(a, null), $h(a.h).then(function() {
              Pc(a);
            })) : p();
          }));
        };
        f.yc = function() {
          var a = this;
          return ai(this.h, this.app.options.authDomain).then(function(b) {
            if (!a.l) {
              var c;
              if (c = a.currentUser && b) {
                c = a.currentUser.uid;
                var d = b.uid;
                c = void 0 !== c && null !== c && "" !== c && void 0 !== d && null !== d && "" !== d && c == d;
              }
              if (c) {
                return Sh(a.currentUser, b), a.currentUser.F();
              }
              (a.currentUser || b) && (Ub(a, b), b && (Mc(b), b.ca = a.G), a.a && a.a.subscribe(a), Pc(a));
            }
          });
        };
        f.ka = function(a) {
          return Zh(this.h, a);
        };
        f.Tb = function() {
          Pc(this);
          this.ka(this.currentUser);
        };
        f.Zb = function() {
          this.hb();
        };
        f.$b = function() {
          this.hb();
        };
        f.ac = function(a) {
          var b = this;
          this.addAuthTokenListener(function() {
            a.next(b.currentUser);
          });
        };
        f.bc = function(a) {
          var b = this;
          vl(this, function() {
            a.next(b.currentUser);
          });
        };
        f.ic = function(a, b, c) {
          var d = this;
          return this.W && q.Promise.resolve().then(function() {
            G(a) ? a(d.currentUser) : G(a.next) && a.next(d.currentUser);
          }), this.Kb(a, b, c);
        };
        f.hc = function(a, b, c) {
          var d = this;
          return this.W && q.Promise.resolve().then(function() {
            d.R = d.getUid();
            G(a) ? a(d.currentUser) : G(a.next) && a.next(d.currentUser);
          }), this.Lb(a, b, c);
        };
        f.Vb = function(a) {
          var b = this;
          return B(this, this.i.then(function() {
            return b.currentUser ? b.currentUser.F(a).then(function(a) {
              return {accessToken:a};
            }) : null;
          }));
        };
        f.tc = function(a) {
          return this.Eb(a).then(function(a) {
            return a.user;
          });
        };
        f.Eb = function(a) {
          var b = this;
          return this.i.then(function() {
            return Vb(b, v(b.c, bm, {token:a}));
          }).then(function(a) {
            var c = a.user;
            return ua(c, "isAnonymous", !1), b.ka(c), a;
          });
        };
        f.Fb = function(a, b) {
          var c = this;
          return this.i.then(function() {
            return Vb(c, v(c.c, ui, {email:a, password:b}));
          });
        };
        f.uc = function(a, b) {
          return this.Fb(a, b).then(function(a) {
            return a.user;
          });
        };
        f.Ob = function(a, b) {
          return this.qb(a, b).then(function(a) {
            return a.user;
          });
        };
        f.qb = function(a, b) {
          var c = this;
          return this.i.then(function() {
            return Vb(c, v(c.c, Zl, {email:a, password:b}));
          });
        };
        f.sc = function(a) {
          return this.fb(a).then(function(a) {
            return a.user;
          });
        };
        f.fb = function(a) {
          var b = this;
          return this.i.then(function() {
            return Vb(b, a.wa(b.c));
          });
        };
        f.gb = function() {
          return this.Gb().then(function(a) {
            return a.user;
          });
        };
        f.Gb = function() {
          var a = this;
          return this.i.then(function() {
            var b = a.currentUser;
            return b && b.isAnonymous ? ja({user:b, credential:null, additionalUserInfo:ja({providerId:null, isNewUser:!1}), operationType:"signIn"}) : Vb(a, a.c.gb()).then(function(b) {
              var c = b.user;
              return ua(c, "isAnonymous", !0), a.ka(c), b;
            });
          });
        };
        f.getUid = function() {
          return this.currentUser && this.currentUser.uid || null;
        };
        f.Mb = function(a) {
          this.addAuthTokenListener(a);
          0 < ++this.o && this.currentUser && Ph(this.currentUser);
        };
        f.qc = function(a) {
          var b = this;
          M(this.m, function(c) {
            c == a && b.o--;
          });
          0 > this.o && (this.o = 0);
          0 == this.o && this.currentUser && Ee(this.currentUser);
          this.removeAuthTokenListener(a);
        };
        f.addAuthTokenListener = function(a) {
          var b = this;
          this.m.push(a);
          B(this, this.i.then(function() {
            b.l || wa(b.m, a) && a(Qc(b));
          }));
        };
        f.removeAuthTokenListener = function(a) {
          Z(this.m, function(b) {
            return b == a;
          });
        };
        f["delete"] = function() {
          this.l = !0;
          for (var a = 0; a < this.N.length; a++) {
            this.N[a].cancel("app-deleted");
          }
          return this.N = [], this.h && (a = this.h, Lk(a.b, a.a, this.ha)), this.a && this.a.unsubscribe(this), q.Promise.resolve();
        };
        f.Rb = function(a) {
          return B(this, fk(this.c, a));
        };
        f.Fc = function(a) {
          return this.Ia(a).then(function(a) {
            return a.data.email;
          });
        };
        f.Ta = function(a, b) {
          return B(this, this.c.Ta(a, b).then(function() {
          }));
        };
        f.Ia = function(a) {
          return B(this, this.c.Ia(a).then(function(a) {
            return new Lj(a);
          }));
        };
        f.Sa = function(a) {
          return B(this, this.c.Sa(a).then(function() {
          }));
        };
        f.cb = function(a, b) {
          var c = this;
          return B(this, p().then(function() {
            return void 0 === b || qb(b) ? {} : Pg(new Ig(b));
          }).then(function(b) {
            return c.c.cb(a, b);
          }).then(function() {
          }));
        };
        f.vc = function(a, b) {
          return B(this, xe(this, a, b, n(this.fb, this)));
        };
        var fi = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "), ii = "callback", ki = "expired-callback", hi = "sitekey", zl = "size";
        f = Oe.prototype;
        f.xa = function() {
          var a = this;
          return this.c ? this.c : this.c = Pe(this, p().then(function() {
            if (yc()) {
              return Jd();
            }
            throw new k("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
          }).then(function() {
            return Bl((mb || (mb = new li), mb), a.o());
          }).then(function() {
            return v(a.u, am, {});
          }).then(function(b) {
            a.a[hi] = b.recaptchaSiteKey;
          }).s(function(b) {
            throw a.c = null, b;
          }));
        };
        f.render = function() {
          Sc(this);
          var a = this;
          return Pe(this, this.xa().then(function() {
            if (null === a.b) {
              var b = a.l;
              if (!a.h) {
                var c = dc(b);
                b = Vi("DIV");
                c.appendChild(b);
              }
              a.b = grecaptcha.render(b, a.a);
            }
            return a.b;
          }));
        };
        f.verify = function() {
          Sc(this);
          var a = this;
          return Pe(this, this.render().then(function(b) {
            return new t(function(c) {
              var d = grecaptcha.getResponse(b);
              if (d) {
                c(d);
              } else {
                var e = function(b) {
                  b && (Al(a, e), c(b));
                };
                a.i.push(e);
                a.h && grecaptcha.execute(a.b);
              }
            });
          }));
        };
        f.reset = function() {
          Sc(this);
          null !== this.b && grecaptcha.reset(this.b);
        };
        f.clear = function() {
          Sc(this);
          this.m = !0;
          (mb || (mb = new li), mb).b--;
          for (var a = 0; a < this.g.length; a++) {
            this.g[a].cancel("RecaptchaVerifier instance has been destroyed.");
          }
          if (!this.h) {
            a = dc(this.l);
            for (var b; b = a.firstChild;) {
              a.removeChild(b);
            }
          }
        };
        var Cl = vb("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"), mb = null;
        u(Qe, Oe);
        J(X.prototype, {Sa:{name:"applyActionCode", j:[m("code")]}, Ia:{name:"checkActionCode", j:[m("code")]}, Ta:{name:"confirmPasswordReset", j:[m("code"), m("newPassword")]}, Ob:{name:"createUserWithEmailAndPassword", j:[m("email"), m("password")]}, qb:{name:"createUserAndRetrieveDataWithEmailAndPassword", j:[m("email"), m("password")]}, Rb:{name:"fetchProvidersForEmail", j:[m("email")]}, aa:{name:"getRedirectResult", j:[]}, hc:{name:"onAuthStateChanged", j:[I(H(), kb(), "nextOrObserver"), kb("opt_error", 
        !0), kb("opt_completed", !0)]}, ic:{name:"onIdTokenChanged", j:[I(H(), kb(), "nextOrObserver"), kb("opt_error", !0), kb("opt_completed", !0)]}, cb:{name:"sendPasswordResetEmail", j:[m("email"), I(H("opt_actionCodeSettings", !0), Ma(null, !0), "opt_actionCodeSettings", !0)]}, eb:{name:"setPersistence", j:[m("persistence")]}, fb:{name:"signInAndRetrieveDataWithCredential", j:[Na()]}, gb:{name:"signInAnonymously", j:[]}, Gb:{name:"signInAnonymouslyAndRetrieveData", j:[]}, sc:{name:"signInWithCredential", 
        j:[Na()]}, tc:{name:"signInWithCustomToken", j:[m("token")]}, Eb:{name:"signInAndRetrieveDataWithCustomToken", j:[m("token")]}, uc:{name:"signInWithEmailAndPassword", j:[m("email"), m("password")]}, Fb:{name:"signInAndRetrieveDataWithEmailAndPassword", j:[m("email"), m("password")]}, vc:{name:"signInWithPhoneNumber", j:[m("phoneNumber"), Rc()]}, wc:{name:"signInWithPopup", j:[lb()]}, xc:{name:"signInWithRedirect", j:[lb()]}, hb:{name:"signOut", j:[]}, toJSON:{name:"toJSON", j:[m(null, !0)]}, 
        Ec:{name:"useDeviceLanguage", j:[]}, Fc:{name:"verifyPasswordResetCode", j:[m("code")]}});
        (function(a, b) {
          for (var c in b) {
            var d = b[c].name;
            if (d !== c) {
              var e = b[c].Nb;
              Object.defineProperty(a, d, {get:function() {
                return this[c];
              }, set:function(a) {
                ei(d, [e], [a], !0);
                this[c] = a;
              }, enumerable:!0});
            }
          }
        })(X.prototype, {lc:{name:"languageCode", Nb:I(m(), Ma(), "languageCode")}});
        X.Persistence = fb;
        X.Persistence.LOCAL = "local";
        X.Persistence.SESSION = "session";
        X.Persistence.NONE = "none";
        J(W.prototype, {"delete":{name:"delete", j:[]}, F:{name:"getIdToken", j:[gi()]}, getToken:{name:"getToken", j:[gi()]}, Xa:{name:"linkAndRetrieveDataWithCredential", j:[Na()]}, cc:{name:"linkWithCredential", j:[Na()]}, dc:{name:"linkWithPhoneNumber", j:[m("phoneNumber"), Rc()]}, ec:{name:"linkWithPopup", j:[lb()]}, fc:{name:"linkWithRedirect", j:[lb()]}, Za:{name:"reauthenticateAndRetrieveDataWithCredential", j:[Na()]}, mc:{name:"reauthenticateWithCredential", j:[Na()]}, nc:{name:"reauthenticateWithPhoneNumber", 
        j:[m("phoneNumber"), Rc()]}, oc:{name:"reauthenticateWithPopup", j:[lb()]}, pc:{name:"reauthenticateWithRedirect", j:[lb()]}, reload:{name:"reload", j:[]}, bb:{name:"sendEmailVerification", j:[I(H("opt_actionCodeSettings", !0), Ma(null, !0), "opt_actionCodeSettings", !0)]}, toJSON:{name:"toJSON", j:[m(null, !0)]}, Cc:{name:"unlink", j:[m("provider")]}, kb:{name:"updateEmail", j:[m("email")]}, lb:{name:"updatePassword", j:[m("password")]}, Dc:{name:"updatePhoneNumber", j:[Na("phone")]}, mb:{name:"updateProfile", 
        j:[H("profile")]}});
        J(t.prototype, {s:{name:"catch"}, then:{name:"then"}});
        J(we.prototype, {confirm:{name:"confirm", j:[m("verificationCode")]}});
        K(Xd, "credential", function(a, b) {
          return new Kb(a, b);
        }, [m("email"), m("password")]);
        J(ab.prototype, {sa:{name:"addScope", j:[m("scope")]}, Ba:{name:"setCustomParameters", j:[H("customOAuthParameters")]}});
        K(ab, "credential", Wg, [I(m(), H(), "token")]);
        J(bb.prototype, {sa:{name:"addScope", j:[m("scope")]}, Ba:{name:"setCustomParameters", j:[H("customOAuthParameters")]}});
        K(bb, "credential", Xg, [I(m(), H(), "token")]);
        J(cb.prototype, {sa:{name:"addScope", j:[m("scope")]}, Ba:{name:"setCustomParameters", j:[H("customOAuthParameters")]}});
        K(cb, "credential", Yg, [I(m(), I(H(), Ma()), "idToken"), I(m(), Ma(), "accessToken", !0)]);
        J(Jb.prototype, {Ba:{name:"setCustomParameters", j:[H("customOAuthParameters")]}});
        K(Jb, "credential", $g, [I(m(), H(), "token"), m("secret", !0)]);
        J(N.prototype, {sa:{name:"addScope", j:[m("scope")]}, credential:{name:"credential", j:[I(m(), Ma(), "idToken", !0), I(m(), Ma(), "accessToken", !0)]}, Ba:{name:"setCustomParameters", j:[H("customOAuthParameters")]}});
        K(Ja, "credential", ah, [m("verificationId"), m("verificationCode")]);
        J(Ja.prototype, {Qa:{name:"verifyPhoneNumber", j:[m("phoneNumber"), Rc()]}});
        J(k.prototype, {toJSON:{name:"toJSON", j:[m(null, !0)]}});
        J(Lb.prototype, {toJSON:{name:"toJSON", j:[m(null, !0)]}});
        J(ae.prototype, {toJSON:{name:"toJSON", j:[m(null, !0)]}});
        J(Qe.prototype, {clear:{name:"clear", j:[]}, render:{name:"render", j:[]}, verify:{name:"verify", j:[]}});
        (function() {
          if (void 0 === q || !q.INTERNAL || !q.INTERNAL.registerService) {
            throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
          }
          var a = {Auth:X, Error:k};
          K(a, "EmailAuthProvider", Xd, []);
          K(a, "FacebookAuthProvider", ab, []);
          K(a, "GithubAuthProvider", bb, []);
          K(a, "GoogleAuthProvider", cb, []);
          K(a, "TwitterAuthProvider", Jb, []);
          K(a, "OAuthProvider", N, [m("providerId")]);
          K(a, "PhoneAuthProvider", Ja, [xl()]);
          K(a, "RecaptchaVerifier", Qe, [I(m(), wl(), "recaptchaContainer"), H("recaptchaParameters", !0), yl()]);
          q.INTERNAL.registerService("auth", function(a, c) {
            return a = new X(a), c({INTERNAL:{getUid:n(a.getUid, a), getToken:n(a.Vb, a), addAuthTokenListener:n(a.Mb, a), removeAuthTokenListener:n(a.qc, a)}}), a;
          }, a, function(a, c) {
            if ("create" === a) {
              try {
                c.auth();
              } catch (d) {
              }
            }
          });
          q.INTERNAL.extendNamespace({User:W});
        })();
      }).call(void 0 !== va ? va : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }).call(Wb, Xb(12));
  }}, [76]);
} catch (va) {
  throw Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.");
};

/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
try{webpackJsonpFirebase([0],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),o=n(0),a=n(0),s=n(0),u=n(0),l=n(13),h=n(0);t.LUIDGenerator=function(){var e=1;return function(){return e++}}(),t.sha1=function(e){var t=s.stringToByteArray(e),n=new a.Sha1;n.update(t);var r=n.digest();return o.base64.encodeByteArray(r)};var c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n="",r=0;r<e.length;r++)Array.isArray(e[r])||e[r]&&"object"==typeof e[r]&&"number"==typeof e[r].length?n+=c.apply(null,e[r]):"object"==typeof e[r]?n+=u.stringify(e[r]):n+=e[r],n+=" ";return n};t.logger=null;var p=!0;t.enableLogging=function(e,n){r.assert(!n||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?("undefined"!=typeof console&&("function"==typeof console.log?t.logger=console.log.bind(console):"object"==typeof console.log&&(t.logger=function(e){console.log(e)})),n&&l.SessionStorage.set("logging_enabled",!0)):"function"==typeof e?t.logger=e:(t.logger=null,l.SessionStorage.remove("logging_enabled"))},t.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!0===p&&(p=!1,null===t.logger&&!0===l.SessionStorage.get("logging_enabled")&&t.enableLogging(!0)),t.logger){var r=c.apply(null,e);t.logger(r)}},t.logWrapper=function(e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];t.log.apply(void 0,[e].concat(n))}},t.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if("undefined"!=typeof console){var n="FIREBASE INTERNAL ERROR: "+c.apply(void 0,e);void 0!==console.error?console.error(n):console.log(n)}},t.fatal=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=c.apply(void 0,e);throw Error("FIREBASE FATAL ERROR: "+n)},t.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if("undefined"!=typeof console){var n="FIREBASE WARNING: "+c.apply(void 0,e);void 0!==console.warn?console.warn(n):console.log(n)}},t.warnIfPageIsSecure=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&t.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},t.warnAboutUnsupportedMethod=function(e){t.warn(e+" is unsupported and will likely change soon.  Please do not use.")},t.isInvalidJSONNumber=function(e){return"number"==typeof e&&(e!=e||e==Number.POSITIVE_INFINITY||e==Number.NEGATIVE_INFINITY)},t.executeWhenDOMReady=function(e){if(h.isNodeSdk()||"complete"===document.readyState)e();else{var t=!1,n=function(){if(!document.body)return void setTimeout(n,Math.floor(10));t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},t.MIN_NAME="[MIN_NAME]",t.MAX_NAME="[MAX_NAME]",t.nameCompare=function(e,n){if(e===n)return 0;if(e===t.MIN_NAME||n===t.MAX_NAME)return-1;if(n===t.MIN_NAME||e===t.MAX_NAME)return 1;var r=t.tryParseInt(e),i=t.tryParseInt(n);return null!==r?null!==i?r-i==0?e.length-n.length:r-i:-1:null!==i?1:e<n?-1:1},t.stringCompare=function(e,t){return e===t?0:e<t?-1:1},t.requireKey=function(e,t){if(t&&e in t)return t[e];throw Error("Missing required key ("+e+") in object: "+u.stringify(t))},t.ObjectToUniqueKey=function(e){if("object"!=typeof e||null===e)return u.stringify(e);var n=[];for(var r in e)n.push(r);n.sort();for(var i="{",o=0;o<n.length;o++)0!==o&&(i+=","),i+=u.stringify(n[o]),i+=":",i+=t.ObjectToUniqueKey(e[n[o]]);return i+="}"},t.splitStringBySize=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r},t.each=function(e,t){if(Array.isArray(e))for(var n=0;n<e.length;++n)t(n,e[n]);else i.forEach(e,function(e,n){return t(n,e)})},t.bindCallback=function(e,t){return t?e.bind(t):e},t.doubleToIEEE754String=function(e){r.assert(!t.isInvalidJSONNumber(e),"Invalid JSON number");var n,i,o,a,s,u,l;for(0===e?(i=0,o=0,n=1/e==-1/0?1:0):(n=e<0,e=Math.abs(e),e>=Math.pow(2,-1022)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),1023),i=a+1023,o=Math.round(e*Math.pow(2,52-a)-Math.pow(2,52))):(i=0,o=Math.round(e/Math.pow(2,-1074)))),u=[],s=52;s;s-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(s=11;s;s-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(n?1:0),u.reverse(),l=u.join("");var h="";for(s=0;s<64;s+=8){var c=parseInt(l.substr(s,8),2).toString(16);1===c.length&&(c="0"+c),h+=c}return h.toLowerCase()},t.isChromeExtensionContentScript=function(){return!("object"!=typeof window||!window.chrome||!window.chrome.extension||/^chrome/.test(window.location.href))},t.isWindowsStoreApp=function(){return"object"==typeof Windows&&"object"==typeof Windows.UI},t.errorForServerCode=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==e?n="Client doesn't have permission to access the desired data.":"unavailable"==e&&(n="The service is unavailable");var r=Error(e+" at "+t.path+": "+n);return r.code=e.toUpperCase(),r},t.e=RegExp("^-?\\d{1,10}$"),t.tryParseInt=function(e){if(t.e.test(e)){var n=+e;if(n>=-2147483648&&n<=2147483647)return n}return null},t.exceptionGuard=function(e){try{e()}catch(e){setTimeout(function(){var n=e.stack||"";throw t.warn("Exception was thrown by user callback.",n),e},Math.floor(0))}},t.callUserCallback=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];"function"==typeof e&&t.exceptionGuard(function(){e.apply(void 0,n)})},t.beingCrawled=function(){return("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},t.exportPropGetter=function(e,t,n){Object.defineProperty(e,t,{get:n})},t.setTimeoutNonBlocking=function(e,t){var n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),o=function(){function e(e,t){if(void 0===t){this.n=e.split("/");for(var n=0,r=0;r<this.n.length;r++)this.n[r].length>0&&(this.n[n]=this.n[r],n++);this.n.length=n,this.i=0}else this.n=e,this.i=t}return Object.defineProperty(e,"Empty",{get:function(){return new e("")},enumerable:!0,configurable:!0}),e.prototype.getFront=function(){return this.i>=this.n.length?null:this.n[this.i]},e.prototype.getLength=function(){return this.n.length-this.i},e.prototype.popFront=function(){var t=this.i;return t<this.n.length&&t++,new e(this.n,t)},e.prototype.getBack=function(){return this.i<this.n.length?this.n[this.n.length-1]:null},e.prototype.toString=function(){for(var e="",t=this.i;t<this.n.length;t++)""!==this.n[t]&&(e+="/"+this.n[t]);return e||"/"},e.prototype.toUrlEncodedString=function(){for(var e="",t=this.i;t<this.n.length;t++)""!==this.n[t]&&(e+="/"+encodeURIComponent(this.n[t]+""));return e||"/"},e.prototype.slice=function(e){return void 0===e&&(e=0),this.n.slice(this.i+e)},e.prototype.parent=function(){if(this.i>=this.n.length)return null;for(var t=[],n=this.i;n<this.n.length-1;n++)t.push(this.n[n]);return new e(t,0)},e.prototype.child=function(t){for(var n=[],r=this.i;r<this.n.length;r++)n.push(this.n[r]);if(t instanceof e)for(var r=t.i;r<t.n.length;r++)n.push(t.n[r]);else for(var i=t.split("/"),r=0;r<i.length;r++)i[r].length>0&&n.push(i[r]);return new e(n,0)},e.prototype.isEmpty=function(){return this.i>=this.n.length},e.relativePath=function(t,n){var r=t.getFront(),i=n.getFront();if(null===r)return n;if(r===i)return e.relativePath(t.popFront(),n.popFront());throw Error("INTERNAL ERROR: innerPath ("+n+") is not within outerPath ("+t+")")},e.comparePaths=function(e,t){for(var n=e.slice(),i=t.slice(),o=0;o<n.length&&o<i.length;o++){var a=r.nameCompare(n[o],i[o]);if(0!==a)return a}return n.length===i.length?0:n.length<i.length?-1:1},e.prototype.equals=function(e){if(this.getLength()!==e.getLength())return!1;for(var t=this.i,n=e.i;t<=this.n.length;t++,n++)if(this.n[t]!==e.n[n])return!1;return!0},e.prototype.contains=function(e){var t=this.i,n=e.i;if(this.getLength()>e.getLength())return!1;for(;t<this.n.length;){if(this.n[t]!==e.n[n])return!1;++t,++n}return!0},e}();t.Path=o;var a=function(){function e(e,t){this.o=t,this.u=e.slice(),this.l=Math.max(1,this.u.length);for(var n=0;n<this.u.length;n++)this.l+=i.stringLength(this.u[n]);this.f()}return Object.defineProperty(e,"MAX_PATH_DEPTH",{get:function(){return 32},enumerable:!0,configurable:!0}),Object.defineProperty(e,"MAX_PATH_LENGTH_BYTES",{get:function(){return 768},enumerable:!0,configurable:!0}),e.prototype.push=function(e){this.u.length>0&&(this.l+=1),this.u.push(e),this.l+=i.stringLength(e),this.f()},e.prototype.pop=function(){var e=this.u.pop();this.l-=i.stringLength(e),this.u.length>0&&(this.l-=1)},e.prototype.f=function(){if(this.l>e.MAX_PATH_LENGTH_BYTES)throw Error(this.o+"has a key path longer than "+e.MAX_PATH_LENGTH_BYTES+" bytes ("+this.l+").");if(this.u.length>e.MAX_PATH_DEPTH)throw Error(this.o+"path specified exceeds the maximum depth that can be written ("+e.MAX_PATH_DEPTH+") or object contains a cycle "+this.toErrorString())},e.prototype.toErrorString=function(){return 0==this.u.length?"":"in property '"+this.u.join(".")+"'"},e}();t.ValidationPath=a},function(e,t,n){"use strict";function r(e){a=e}function i(e){s=e}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a,s,u=n(15),l=n(1),h=n(5),c=n(16);t.setNodeFromJSON=r,t.setMaxNode=i;var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.compare=function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?l.nameCompare(e.name,t.name):i},t.prototype.isDefinedOn=function(e){return!e.getPriority().isEmpty()},t.prototype.indexedValueChanged=function(e,t){return!e.getPriority().equals(t.getPriority())},t.prototype.minPost=function(){return h.NamedNode.MIN},t.prototype.maxPost=function(){return new h.NamedNode(l.MAX_NAME,new c.LeafNode("[PRIORITY-POST]",s))},t.prototype.makePost=function(e,t){var n=a(e);return new h.NamedNode(t,new c.LeafNode("[PRIORITY-POST]",n))},t.prototype.toString=function(){return".priority"},t}(u.Index);t.PriorityIndex=p,t.PRIORITY_INDEX=new p},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(0),a=n(1),s=n(17),u=n(5),l=n(37),h=n(3),c=n(10),p=n(39),d=n(16),f=n(41),_=function(){function e(e,t,n){this._=e,this.y=t,this.g=n,this.m=null,this.y&&l.validatePriorityNode(this.y),this._.isEmpty()&&o.assert(!this.y||this.y.isEmpty(),"An empty node cannot have a priority")}return Object.defineProperty(e,"EMPTY_NODE",{get:function(){return i||(i=new e(new s.SortedMap(f.NAME_COMPARATOR),null,p.IndexMap.Default))},enumerable:!0,configurable:!0}),e.prototype.isLeafNode=function(){return!1},e.prototype.getPriority=function(){return this.y||i},e.prototype.updatePriority=function(t){return this._.isEmpty()?this:new e(this._,t,this.g)},e.prototype.getImmediateChild=function(e){if(".priority"===e)return this.getPriority();var t=this._.get(e);return null===t?i:t},e.prototype.getChild=function(e){var t=e.getFront();return null===t?this:this.getImmediateChild(t).getChild(e.popFront())},e.prototype.hasChild=function(e){return null!==this._.get(e)},e.prototype.updateImmediateChild=function(t,n){if(o.assert(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var r=new u.NamedNode(t,n),a=void 0,s=void 0,l=void 0;return n.isEmpty()?(a=this._.remove(t),s=this.g.removeFromIndexes(r,this._)):(a=this._.insert(t,n),s=this.g.addToIndexes(r,this._)),l=a.isEmpty()?i:this.y,new e(a,l,s)},e.prototype.updateChild=function(e,t){var n=e.getFront();if(null===n)return t;o.assert(".priority"!==e.getFront()||1===e.getLength(),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(e.popFront(),t);return this.updateImmediateChild(n,r)},e.prototype.isEmpty=function(){return this._.isEmpty()},e.prototype.numChildren=function(){return this._.count()},e.prototype.val=function(t){if(this.isEmpty())return null;var n={},r=0,i=0,o=!0;if(this.forEachChild(h.PRIORITY_INDEX,function(a,s){n[a]=s.val(t),r++,o&&e.e.test(a)?i=Math.max(i,+a):o=!1}),!t&&o&&i<2*r){var a=[];for(var s in n)a[s]=n[s];return a}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},e.prototype.hash=function(){if(null===this.m){var e="";this.getPriority().isEmpty()||(e+="priority:"+l.priorityHashText(this.getPriority().val())+":"),this.forEachChild(h.PRIORITY_INDEX,function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)}),this.m=""===e?"":a.sha1(e)}return this.m},e.prototype.getPredecessorChildName=function(e,t,n){var r=this.C(n);if(r){var i=r.getPredecessorKey(new u.NamedNode(e,t));return i?i.name:null}return this._.getPredecessorKey(e)},e.prototype.getFirstChildName=function(e){var t=this.C(e);if(t){var n=t.minKey();return n&&n.name}return this._.minKey()},e.prototype.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new u.NamedNode(t,this._.get(t)):null},e.prototype.getLastChildName=function(e){var t=this.C(e);if(t){var n=t.maxKey();return n&&n.name}return this._.maxKey()},e.prototype.getLastChild=function(e){var t=this.getLastChildName(e);return t?new u.NamedNode(t,this._.get(t)):null},e.prototype.forEachChild=function(e,t){var n=this.C(e);return n?n.inorderTraversal(function(e){return t(e.name,e.node)}):this._.inorderTraversal(t)},e.prototype.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},e.prototype.getIteratorFrom=function(e,t){var n=this.C(t);if(n)return n.getIteratorFrom(e,function(e){return e});for(var r=this._.getIteratorFrom(e.name,u.NamedNode.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r},e.prototype.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},e.prototype.getReverseIteratorFrom=function(e,t){var n=this.C(t);if(n)return n.getReverseIteratorFrom(e,function(e){return e});for(var r=this._.getReverseIteratorFrom(e.name,u.NamedNode.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r},e.prototype.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===t.MAX_NODE?-1:0},e.prototype.withIndex=function(t){if(t===c.KEY_INDEX||this.g.hasIndex(t))return this;var n=this.g.addIndex(t,this._);return new e(this._,this.y,n)},e.prototype.isIndexed=function(e){return e===c.KEY_INDEX||this.g.hasIndex(e)},e.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this._.count()===t._.count()){for(var n=this.getIterator(h.PRIORITY_INDEX),r=t.getIterator(h.PRIORITY_INDEX),i=n.getNext(),o=r.getNext();i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return null===i&&null===o}return!1}return!1},e.prototype.C=function(e){return e===c.KEY_INDEX?null:this.g.get(""+e)},e.e=/^(0|[1-9]\d*)$/,e}();t.ChildrenNode=_;var y=function(e){function t(){return e.call(this,new s.SortedMap(f.NAME_COMPARATOR),_.EMPTY_NODE,p.IndexMap.Default)||this}return r(t,e),t.prototype.compareTo=function(e){return e===this?0:1},t.prototype.equals=function(e){return e===this},t.prototype.getPriority=function(){return this},t.prototype.getImmediateChild=function(e){return _.EMPTY_NODE},t.prototype.isEmpty=function(){return!1},t}(_);t.MaxNode=y,t.MAX_NODE=new y,Object.defineProperties(u.NamedNode,{MIN:{value:new u.NamedNode(a.MIN_NAME,_.EMPTY_NODE)},MAX:{value:new u.NamedNode(a.MAX_NAME,t.MAX_NODE)}}),c.KeyIndex.__EMPTY_NODE=_.EMPTY_NODE,d.LeafNode.__childrenNodeConstructor=_,l.setMaxNode(t.MAX_NODE),h.setMaxNode(t.MAX_NODE)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.name=e,this.node=t}return e.Wrap=function(t,n){return new e(t,n)},e}();t.NamedNode=r},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(0),o=n(1),a=n(0),s=n(0);t.N=/[\[\].#$\/\u0000-\u001F\u007F]/,t.P=/[\[\].#$\u0000-\u001F\u007F]/,t.S=10485760,t.isValidKey=function(e){return"string"==typeof e&&0!==e.length&&!t.N.test(e)},t.isValidPathString=function(e){return"string"==typeof e&&0!==e.length&&!t.P.test(e)},t.isValidRootPathString=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),t.isValidPathString(e)},t.isValidPriority=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!o.isInvalidJSONNumber(e)||e&&"object"==typeof e&&i.contains(e,".sv")},t.validateFirebaseDataArg=function(e,n,r,i,o){o&&void 0===r||t.validateFirebaseData(a.errorPrefix(e,n,o),r,i)},t.validateFirebaseData=function(e,n,a){var u=a instanceof r.Path?new r.ValidationPath(a,e):a;if(void 0===n)throw Error(e+"contains undefined "+u.toErrorString());if("function"==typeof n)throw Error(e+"contains a function "+u.toErrorString()+" with contents = "+n);if(o.isInvalidJSONNumber(n))throw Error(e+"contains "+n+" "+u.toErrorString());if("string"==typeof n&&n.length>t.S/3&&s.stringLength(n)>t.S)throw Error(e+"contains a string greater than "+t.S+" utf8 bytes "+u.toErrorString()+" ('"+n.substring(0,50)+"...')");if(n&&"object"==typeof n){var l=!1,h=!1;if(i.forEach(n,function(n,r){if(".value"===n)l=!0;else if(".priority"!==n&&".sv"!==n&&(h=!0,!t.isValidKey(n)))throw Error(e+" contains an invalid key ("+n+") "+u.toErrorString()+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');u.push(n),t.validateFirebaseData(e,r,u),u.pop()}),l&&h)throw Error(e+' contains ".value" child '+u.toErrorString()+" in addition to actual children.")}},t.validateFirebaseMergePaths=function(e,n){var i,o;for(i=0;i<n.length;i++){o=n[i];for(var a=o.slice(),s=0;s<a.length;s++)if(".priority"===a[s]&&s===a.length-1);else if(!t.isValidKey(a[s]))throw Error(e+"contains an invalid key ("+a[s]+") in path "+o+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}n.sort(r.Path.comparePaths);var u=null;for(i=0;i<n.length;i++){if(o=n[i],null!==u&&u.contains(o))throw Error(e+"contains a path "+u+" that is ancestor of another path "+o);u=o}},t.validateFirebaseMergeDataArg=function(e,n,o,s,u){if(!u||void 0!==o){var l=a.errorPrefix(e,n,u);if(!o||"object"!=typeof o||Array.isArray(o))throw Error(l+" must be an object containing the children to replace.");var h=[];i.forEach(o,function(e,n){var i=new r.Path(e);if(t.validateFirebaseData(l,n,s.child(i)),".priority"===i.getBack()&&!t.isValidPriority(n))throw Error(l+"contains an invalid value for '"+i+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");h.push(i)}),t.validateFirebaseMergePaths(l,h)}},t.validatePriority=function(e,n,r,i){if(!i||void 0!==r){if(o.isInvalidJSONNumber(r))throw Error(a.errorPrefix(e,n,i)+"is "+r+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!t.isValidPriority(r))throw Error(a.errorPrefix(e,n,i)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},t.validateEventType=function(e,t,n,r){if(!r||void 0!==n)switch(n){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw Error(a.errorPrefix(e,t,r)+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}},t.validateKey=function(e,n,r,i){if(!(i&&void 0===r||t.isValidKey(r)))throw Error(a.errorPrefix(e,n,i)+'was an invalid key = "'+r+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},t.validatePathString=function(e,n,r,i){if(!(i&&void 0===r||t.isValidPathString(r)))throw Error(a.errorPrefix(e,n,i)+'was an invalid path = "'+r+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},t.validateRootPathString=function(e,n,r,i){r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),t.validatePathString(e,n,r,i)},t.validateWritablePath=function(e,t){if(".info"===t.getFront())throw Error(e+" failed = Can't modify data under /.info/")},t.validateUrl=function(e,n,r){var i=""+r.path;if("string"!=typeof r.repoInfo.host||0===r.repoInfo.host.length||!t.isValidKey(r.repoInfo.namespace)&&"localhost"!==r.repoInfo.host.split(":")[0]||0!==i.length&&!t.isValidRootPathString(i))throw Error(a.errorPrefix(e,n,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},t.validateCredential=function(e,t,n,r){if((!r||void 0!==n)&&"string"!=typeof n)throw Error(a.errorPrefix(e,t,r)+"must be a valid credential (a string).")},t.validateBoolean=function(e,t,n,r){if((!r||void 0!==n)&&"boolean"!=typeof n)throw Error(a.errorPrefix(e,t,r)+"must be a boolean.")},t.validateString=function(e,t,n,r){if((!r||void 0!==n)&&"string"!=typeof n)throw Error(a.errorPrefix(e,t,r)+"must be a valid string.")},t.validateObject=function(e,t,n,r){if(!(r&&void 0===n||n&&"object"==typeof n&&null!==n))throw Error(a.errorPrefix(e,t,r)+"must be a valid object.")},t.validateObjectContainsKey=function(e,t,n,r,o,s){if(!n||"object"!=typeof n||!i.contains(n,r)){if(o)return;throw Error(a.errorPrefix(e,t,o)+'must contain the key "'+r+'"')}if(s){var u=i.safeGet(n,r);if("number"===s&&"number"!=typeof u||"string"===s&&"string"!=typeof u||"boolean"===s&&"boolean"!=typeof u||"function"===s&&"function"!=typeof u||"object"===s&&"object"!=typeof u&&u)throw o?Error(a.errorPrefix(e,t,o)+'contains invalid value for key "'+r+'" (must be of type "'+s+'")'):Error(a.errorPrefix(e,t,o)+'must contain the key "'+r+'" with type "'+s+'"')}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(t.OperationType||(t.OperationType={}));var i=function(){function e(e,t,n,i){this.fromUser=e,this.fromServer=t,this.queryId=n,this.tagged=i,r.assert(!i||t,"Tagged queries must be from server.")}return e.User=new e(!0,!1,null,!1),e.Server=new e(!1,!0,null,!1),e.forServerTaggedQuery=function(t){return new e(!1,!0,t,!0)},e}();t.OperationSource=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n,r,i){this.type=e,this.snapshotNode=t,this.childName=n,this.oldSnap=r,this.prevName=i}return e.valueChange=function(t){return new e(e.VALUE,t)},e.childAddedChange=function(t,n){return new e(e.CHILD_ADDED,n,t)},e.childRemovedChange=function(t,n){return new e(e.CHILD_REMOVED,n,t)},e.childChangedChange=function(t,n,r){return new e(e.CHILD_CHANGED,n,t,r)},e.childMovedChange=function(t,n){return new e(e.CHILD_MOVED,n,t)},e.CHILD_ADDED="child_added",e.CHILD_REMOVED="child_removed",e.CHILD_CHANGED="child_changed",e.CHILD_MOVED="child_moved",e.VALUE="value",e}();t.Change=r},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(15),a=n(5),s=n(1),u=n(0),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t,"__EMPTY_NODE",{get:function(){return i},set:function(e){i=e},enumerable:!0,configurable:!0}),t.prototype.compare=function(e,t){return s.nameCompare(e.name,t.name)},t.prototype.isDefinedOn=function(e){throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")},t.prototype.indexedValueChanged=function(e,t){return!1},t.prototype.minPost=function(){return a.NamedNode.MIN},t.prototype.maxPost=function(){return new a.NamedNode(s.MAX_NAME,i)},t.prototype.makePost=function(e,t){return u.assert("string"==typeof e,"KeyIndex indexValue must always be a string."),new a.NamedNode(e,i)},t.prototype.toString=function(){return".key"},t}(o.Index);t.KeyIndex=l,t.KEY_INDEX=new l},function(e,t,n){"use strict";function r(e,t){if(void 0===t&&(t=null),null===e)return i.ChildrenNode.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),u.assert(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){var n=e;return new o.LeafNode(n,r(t))}if(e instanceof Array||!d){var f=i.ChildrenNode.EMPTY_NODE,_=e;return s.forEach(_,function(e,t){if(s.contains(_,e)&&"."!==e.substring(0,1)){var n=r(t);!n.isLeafNode()&&n.isEmpty()||(f=f.updateImmediateChild(e,n))}}),f.updatePriority(r(t))}var y=[],v=!1,g=e;if(s.forEach(g,function(e,t){if("string"!=typeof e||"."!==e.substring(0,1)){var n=r(g[e]);n.isEmpty()||(v=v||!n.getPriority().isEmpty(),y.push(new a.NamedNode(e,n)))}}),0==y.length)return i.ChildrenNode.EMPTY_NODE;var m=l.buildChildSet(y,h.NAME_ONLY_COMPARATOR,function(e){return e.name},h.NAME_COMPARATOR);if(v){var C=l.buildChildSet(y,p.PRIORITY_INDEX.getCompare());return new i.ChildrenNode(m,r(t),new c.IndexMap({".priority":C},{".priority":p.PRIORITY_INDEX}))}return new i.ChildrenNode(m,r(t),c.IndexMap.Default)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n(16),a=n(5),s=n(0),u=n(0),l=n(40),h=n(41),c=n(39),p=n(3),d=!0;t.nodeFromJSON=r,p.setNodeFromJSON(r)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(80),i=n(81),o=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new r.DOMStorageWrapper(t)}}catch(e){}return new i.MemoryStorage};t.PersistentStorage=o("localStorage"),t.SessionStorage=o("sessionStorage")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PROTOCOL_VERSION="5",t.VERSION_PARAM="v",t.TRANSPORT_SESSION_PARAM="s",t.REFERER_PARAM="r",t.FORGE_REF="f",t.FORGE_DOMAIN="firebaseio.com",t.LAST_SESSION_PARAM="ls",t.WEBSOCKET="websocket",t.LONG_POLLING="long_polling"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(1),o=function(){function e(){}return e.prototype.getCompare=function(){return this.compare.bind(this)},e.prototype.indexedValueChanged=function(e,t){var n=new r.NamedNode(i.MIN_NAME,e),o=new r.NamedNode(i.MIN_NAME,t);return 0!==this.compare(n,o)},e.prototype.minPost=function(){return r.NamedNode.MIN},e}();t.Index=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=n(1),a=n(37),s=function(){function e(t,n){void 0===n&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.T=t,this.y=n,this.m=null,i.assert(void 0!==this.T&&null!==this.T,"LeafNode shouldn't be created with null/undefined value."),a.validatePriorityNode(this.y)}return Object.defineProperty(e,"__childrenNodeConstructor",{get:function(){return r},set:function(e){r=e},enumerable:!0,configurable:!0}),e.prototype.isLeafNode=function(){return!0},e.prototype.getPriority=function(){return this.y},e.prototype.updatePriority=function(t){return new e(this.T,t)},e.prototype.getImmediateChild=function(t){return".priority"===t?this.y:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.getChild=function(t){return t.isEmpty()?this:".priority"===t.getFront()?this.y:e.__childrenNodeConstructor.EMPTY_NODE},e.prototype.hasChild=function(){return!1},e.prototype.getPredecessorChildName=function(e,t){return null},e.prototype.updateImmediateChild=function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.y)},e.prototype.updateChild=function(t,n){var r=t.getFront();return null===r?n:n.isEmpty()&&".priority"!==r?this:(i.assert(".priority"!==r||1===t.getLength(),".priority must be the last token in a path"),this.updateImmediateChild(r,e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(),n)))},e.prototype.isEmpty=function(){return!1},e.prototype.numChildren=function(){return 0},e.prototype.forEachChild=function(e,t){return!1},e.prototype.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},e.prototype.hash=function(){if(null===this.m){var e="";this.y.isEmpty()||(e+="priority:"+a.priorityHashText(this.y.val())+":");var t=typeof this.T;e+=t+":",e+="number"===t?o.doubleToIEEE754String(this.T):this.T,this.m=o.sha1(e)}return this.m},e.prototype.getValue=function(){return this.T},e.prototype.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(i.assert(t.isLeafNode(),"Unknown node type"),this.w(t))},e.prototype.w=function(t){var n=typeof t.T,r=typeof this.T,o=e.VALUE_TYPE_ORDER.indexOf(n),a=e.VALUE_TYPE_ORDER.indexOf(r);return i.assert(o>=0,"Unknown leaf type: "+n),i.assert(a>=0,"Unknown leaf type: "+r),o===a?"object"===r?0:this.T<t.T?-1:this.T===t.T?0:1:a-o},e.prototype.withIndex=function(){return this},e.prototype.isIndexed=function(){return!0},e.prototype.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.T===t.T&&this.y.equals(t.y)}return!1},e.VALUE_TYPE_ORDER=["object","boolean","number","string"],e}();t.LeafNode=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n,r,i){void 0===i&&(i=null),this.I=r,this.R=i,this.O=[];for(var o=1;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.I?e.left:e.right;else{if(0===o){this.O.push(e);break}this.O.push(e),e=this.I?e.right:e.left}}return e.prototype.getNext=function(){if(0===this.O.length)return null;var e,t=this.O.pop();if(e=this.R?this.R(t.key,t.value):{key:t.key,value:t.value},this.I)for(t=t.left;!t.isEmpty();)this.O.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.O.push(t),t=t.left;return e},e.prototype.hasNext=function(){return this.O.length>0},e.prototype.peek=function(){if(0===this.O.length)return null;var e=this.O[this.O.length-1];return this.R?this.R(e.key,e.value):{key:e.key,value:e.value}},e}();t.SortedMapIterator=r;var i=function(){function e(t,n,r,i,o){this.key=t,this.value=n,this.color=null!=r?r:e.RED,this.left=null!=i?i:a.EMPTY_NODE,this.right=null!=o?o:a.EMPTY_NODE}return e.prototype.copy=function(t,n,r,i,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},e.prototype.count=function(){return this.left.count()+1+this.right.count()},e.prototype.isEmpty=function(){return!1},e.prototype.inorderTraversal=function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)},e.prototype.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},e.prototype.A=function(){return this.left.isEmpty()?this:this.left.A()},e.prototype.minKey=function(){return this.A().key},e.prototype.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},e.prototype.insert=function(e,t,n){var r,i;return i=this,r=n(e,i.key),i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.D()},e.prototype.M=function(){if(this.left.isEmpty())return a.EMPTY_NODE;var e=this;return e.left.L()||e.left.left.L()||(e=e.F()),e=e.copy(null,null,null,e.left.M(),null),e.D()},e.prototype.remove=function(e,t){var n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.L()||n.left.left.L()||(n=n.F()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.L()&&(n=n.x()),n.right.isEmpty()||n.right.L()||n.right.left.L()||(n=n.k()),0===t(e,n.key)){if(n.right.isEmpty())return a.EMPTY_NODE;r=n.right.A(),n=n.copy(r.key,r.value,null,null,n.right.M())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.D()},e.prototype.L=function(){return this.color},e.prototype.D=function(){var e=this;return e.right.L()&&!e.left.L()&&(e=e.W()),e.left.L()&&e.left.left.L()&&(e=e.x()),e.left.L()&&e.right.L()&&(e=e.j()),e},e.prototype.F=function(){var e=this.j();return e.right.left.L()&&(e=e.copy(null,null,null,null,e.right.x()),e=e.W(),e=e.j()),e},e.prototype.k=function(){var e=this.j();return e.left.left.L()&&(e=e.x(),e=e.j()),e},e.prototype.W=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},e.prototype.x=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},e.prototype.j=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},e.prototype.V=function(){var e=this.Q();return Math.pow(2,e)<=this.count()+1},e.prototype.Q=function(){var e;if(this.L()&&this.left.L())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.L())throw Error("Right child of ("+this.key+","+this.value+") is red");if((e=this.left.Q())!==this.right.Q())throw Error("Black depths differ");return e+(this.L()?0:1)},e.RED=!0,e.BLACK=!1,e}();t.LLRBNode=i;var o=function(){function e(){}return e.prototype.copy=function(e,t,n,r,i){return this},e.prototype.insert=function(e,t,n){return new i(e,t,null)},e.prototype.remove=function(e,t){return this},e.prototype.count=function(){return 0},e.prototype.isEmpty=function(){return!0},e.prototype.inorderTraversal=function(e){return!1},e.prototype.reverseTraversal=function(e){return!1},e.prototype.minKey=function(){return null},e.prototype.maxKey=function(){return null},e.prototype.Q=function(){return 0},e.prototype.L=function(){return!1},e}();t.LLRBEmptyNode=o;var a=function(){function e(t,n){void 0===n&&(n=e.EMPTY_NODE),this.U=t,this.B=n}return e.prototype.insert=function(t,n){return new e(this.U,this.B.insert(t,n,this.U).copy(null,null,i.BLACK,null,null))},e.prototype.remove=function(t){return new e(this.U,this.B.remove(t,this.U).copy(null,null,i.BLACK,null,null))},e.prototype.get=function(e){for(var t,n=this.B;!n.isEmpty();){if(0===(t=this.U(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null},e.prototype.getPredecessorKey=function(e){for(var t,n=this.B,r=null;!n.isEmpty();){if(0===(t=this.U(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},e.prototype.isEmpty=function(){return this.B.isEmpty()},e.prototype.count=function(){return this.B.count()},e.prototype.minKey=function(){return this.B.minKey()},e.prototype.maxKey=function(){return this.B.maxKey()},e.prototype.inorderTraversal=function(e){return this.B.inorderTraversal(e)},e.prototype.reverseTraversal=function(e){return this.B.reverseTraversal(e)},e.prototype.getIterator=function(e){return new r(this.B,null,this.U,!1,e)},e.prototype.getIteratorFrom=function(e,t){return new r(this.B,e,this.U,!1,t)},e.prototype.getReverseIteratorFrom=function(e,t){return new r(this.B,e,this.U,!0,t)},e.prototype.getReverseIterator=function(e){return new r(this.B,null,this.U,!0,e)},e.EMPTY_NODE=new o,e}();t.SortedMap=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(43),i=n(11),o=n(2),a=n(44),s=n(86),u=n(97),l=n(0),h=n(1),c=n(0),p=n(98),d=n(25),f=n(100),_=n(49),y=n(101),v=n(50),g=n(106),m=n(32),C=function(){function e(e,t,n){var r=this;this.H=e,this.app=n,this.dataUpdateCount=0,this.G=null,this.K=new y.EventQueue,this.Y=1,this.X=null,this.z=new a.SparseSnapshotTree,this.J=null;var i=new p.AuthTokenProvider(n);if(this.$=d.StatsManager.getCollection(e),t||h.beingCrawled())this.Z=new g.ReadonlyRestClient(this.H,this.ee.bind(this),i),setTimeout(this.te.bind(this,!0),0);else{var o=n.options.databaseAuthVariableOverride;if(void 0!==o&&null!==o){if("object"!=typeof o)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{l.stringify(o)}catch(e){throw Error("Invalid authOverride provided: "+e)}}this.J=new v.PersistentConnection(this.H,this.ee.bind(this),this.te.bind(this),this.ne.bind(this),i,o),this.Z=this.J}i.addTokenChangeListener(function(e){r.Z.refreshAuthToken(e)}),this.re=d.StatsManager.getOrCreateReporter(e,function(){return new f.StatsReporter(r.$,r.Z)}),this.ie(),this.oe=new u.SnapshotHolder,this.ae=new s.SyncTree({startListening:function(e,t,n,i){var o=[],a=r.oe.getNode(e.path);return a.isEmpty()||(o=r.ae.applyServerOverwrite(e.path,a),setTimeout(function(){i("ok")},0)),o},stopListening:function(){}}),this.se("connected",!1),this.ue=new s.SyncTree({startListening:function(e,t,n,i){return r.Z.listen(e,n,t,function(t,n){var o=i(t,n);r.K.raiseEventsForChangedPath(e.path,o)}),[]},stopListening:function(e,t){r.Z.unlisten(e,t)}})}return e.prototype.toString=function(){return(this.H.secure?"https://":"http://")+this.H.host},e.prototype.name=function(){return this.H.namespace},e.prototype.serverTime=function(){var e=this.oe.getNode(new o.Path(".info/serverTimeOffset")),t=e.val()||0;return(new Date).getTime()+t},e.prototype.generateServerValues=function(){return r.generateWithValues({timestamp:this.serverTime()})},e.prototype.ee=function(e,t,n,r){this.dataUpdateCount++;var a=new o.Path(e);t=this.X?this.X(e,t):t;var s=[];if(r)if(n){var u=c.map(t,function(e){return i.nodeFromJSON(e)});s=this.ue.applyTaggedQueryMerge(a,u,r)}else{var l=i.nodeFromJSON(t);s=this.ue.applyTaggedQueryOverwrite(a,l,r)}else if(n){var h=c.map(t,function(e){return i.nodeFromJSON(e)});s=this.ue.applyServerMerge(a,h)}else{var p=i.nodeFromJSON(t);s=this.ue.applyServerOverwrite(a,p)}var d=a;s.length>0&&(d=this.le(a)),this.K.raiseEventsForChangedPath(d,s)},e.prototype.he=function(e){this.X=e},e.prototype.te=function(e){this.se("connected",e),!1===e&&this.ce()},e.prototype.ne=function(e){var t=this;h.each(e,function(e,n){t.se(n,e)})},e.prototype.se=function(e,t){var n=new o.Path("/.info/"+e),r=i.nodeFromJSON(t);this.oe.updateSnapshot(n,r);var a=this.ae.applyServerOverwrite(n,r);this.K.raiseEventsForChangedPath(n,a)},e.prototype.pe=function(){return this.Y++},e.prototype.setWithPriority=function(e,t,n,o){var a=this;this.de("set",{path:""+e,value:t,priority:n});var s=this.generateServerValues(),u=i.nodeFromJSON(t,n),l=r.resolveDeferredValueSnapshot(u,s),c=this.pe(),p=this.ue.applyUserOverwrite(e,l,c,!0);this.K.queueEvents(p),this.Z.put(""+e,u.val(!0),function(t,n){var r="ok"===t;r||h.warn("set at "+e+" failed: "+t);var i=a.ue.ackUserWrite(c,!r);a.K.raiseEventsForChangedPath(e,i),a.callOnCompleteCallback(o,t,n)});var d=this.fe(e);this.le(d),this.K.raiseEventsForChangedPath(d,[])},e.prototype.update=function(e,t,n){var o=this;this.de("update",{path:""+e,value:t});var a=!0,s=this.generateServerValues(),u={};if(c.forEach(t,function(e,t){a=!1;var n=i.nodeFromJSON(t);u[e]=r.resolveDeferredValueSnapshot(n,s)}),a)h.log("update() called with empty data.  Don't do anything."),this.callOnCompleteCallback(n,"ok");else{var l=this.pe(),p=this.ue.applyUserMerge(e,u,l);this.K.queueEvents(p),this.Z.merge(""+e,t,function(t,r){var i="ok"===t;i||h.warn("update at "+e+" failed: "+t);var a=o.ue.ackUserWrite(l,!i),s=a.length>0?o.le(e):e;o.K.raiseEventsForChangedPath(s,a),o.callOnCompleteCallback(n,t,r)}),c.forEach(t,function(t){var n=o.fe(e.child(t));o.le(n)}),this.K.raiseEventsForChangedPath(e,[])}},e.prototype.ce=function(){var e=this;this.de("onDisconnectEvents");var t=this.generateServerValues(),n=r.resolveDeferredValueTree(this.z,t),i=[];n.forEachTree(o.Path.Empty,function(t,n){i=i.concat(e.ue.applyServerOverwrite(t,n));var r=e.fe(t);e.le(r)}),this.z=new a.SparseSnapshotTree,this.K.raiseEventsForChangedPath(o.Path.Empty,i)},e.prototype.onDisconnectCancel=function(e,t){var n=this;this.Z.onDisconnectCancel(""+e,function(r,i){"ok"===r&&n.z.forget(e),n.callOnCompleteCallback(t,r,i)})},e.prototype.onDisconnectSet=function(e,t,n){var r=this,o=i.nodeFromJSON(t);this.Z.onDisconnectPut(""+e,o.val(!0),function(t,i){"ok"===t&&r.z.remember(e,o),r.callOnCompleteCallback(n,t,i)})},e.prototype.onDisconnectSetWithPriority=function(e,t,n,r){var o=this,a=i.nodeFromJSON(t,n);this.Z.onDisconnectPut(""+e,a.val(!0),function(t,n){"ok"===t&&o.z.remember(e,a),o.callOnCompleteCallback(r,t,n)})},e.prototype.onDisconnectUpdate=function(e,t,n){var r=this;if(c.isEmpty(t))return h.log("onDisconnect().update() called with empty data.  Don't do anything."),void this.callOnCompleteCallback(n,"ok");this.Z.onDisconnectMerge(""+e,t,function(o,a){"ok"===o&&c.forEach(t,function(t,n){var o=i.nodeFromJSON(n);r.z.remember(e.child(t),o)}),r.callOnCompleteCallback(n,o,a)})},e.prototype.addEventCallbackForQuery=function(e,t){var n;n=".info"===e.path.getFront()?this.ae.addEventRegistration(e,t):this.ue.addEventRegistration(e,t),this.K.raiseEventsAtPath(e.path,n)},e.prototype.removeEventCallbackForQuery=function(e,t){var n;n=".info"===e.path.getFront()?this.ae.removeEventRegistration(e,t):this.ue.removeEventRegistration(e,t),this.K.raiseEventsAtPath(e.path,n)},e.prototype.interrupt=function(){this.J&&this.J.interrupt("repo_interrupt")},e.prototype.resume=function(){this.J&&this.J.resume("repo_interrupt")},e.prototype.stats=function(e){if(void 0===e&&(e=!1),"undefined"!=typeof console){var t;e?(this.G||(this.G=new _.StatsListener(this.$)),t=this.G.get()):t=this.$.get();var n=Object.keys(t).reduce(function(e,t){return Math.max(t.length,e)},0);c.forEach(t,function(e,t){for(var r=e.length;r<n+2;r++)e+=" ";console.log(e+t)})}},e.prototype.statsIncrementCounter=function(e){this.$.incrementCounter(e),this.re.includeStat(e)},e.prototype.de=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="";this.J&&(n=this.J.id+":"),h.log.apply(void 0,[n].concat(e))},e.prototype.callOnCompleteCallback=function(e,t,n){e&&h.exceptionGuard(function(){if("ok"==t)e(null);else{var r=(t||"error").toUpperCase(),i=r;n&&(i+=": "+n);var o=Error(i);o.code=r,e(o)}})},Object.defineProperty(e.prototype,"database",{get:function(){return this.__database||(this.__database=new m.Database(this))},enumerable:!0,configurable:!0}),e}();t.Repo=C},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,n){this._e=e,this.ye=t,this.ve=n}return e.prototype.isFullyInitialized=function(){return this.ye},e.prototype.isFiltered=function(){return this.ve},e.prototype.isCompleteForPath=function(e){if(e.isEmpty())return this.isFullyInitialized()&&!this.ve;var t=e.getFront();return this.isCompleteForChild(t)},e.prototype.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.ve||this._e.hasChild(e)},e.prototype.getNode=function(){return this._e},e}();t.CacheNode=r},,function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),o=n(82),a=n(1),s=n(83),u=n(36),l=n(18),h=n(2),c=n(107),p=n(7),d=n(0),f=n(0),_=n(47),y=function(e){function t(t,n){if(!(t instanceof l.Repo))throw Error("new Reference() no longer supported - use app.database().");return e.call(this,t,n,c.QueryParams.DEFAULT,!1)||this}return r(t,e),t.prototype.getKey=function(){return d.validateArgCount("Reference.key",0,0,arguments.length),this.path.isEmpty()?null:this.path.getBack()},t.prototype.child=function(e){return d.validateArgCount("Reference.child",1,1,arguments.length),"number"==typeof e?e+="":e instanceof h.Path||(null===this.path.getFront()?p.validateRootPathString("Reference.child",1,e,!1):p.validatePathString("Reference.child",1,e,!1)),new t(this.repo,this.path.child(e))},t.prototype.getParent=function(){d.validateArgCount("Reference.parent",0,0,arguments.length);var e=this.path.parent();return null===e?null:new t(this.repo,e)},t.prototype.getRoot=function(){d.validateArgCount("Reference.root",0,0,arguments.length);for(var e=this;null!==e.getParent();)e=e.getParent();return e},t.prototype.databaseProp=function(){return this.repo.database},t.prototype.set=function(e,t){d.validateArgCount("Reference.set",1,2,arguments.length),p.validateWritablePath("Reference.set",this.path),p.validateFirebaseDataArg("Reference.set",1,e,this.path,!1),d.validateCallback("Reference.set",2,t,!0);var n=new f.Deferred;return this.repo.setWithPriority(this.path,e,null,n.wrapCallback(t)),n.promise},t.prototype.update=function(e,t){if(d.validateArgCount("Reference.update",1,2,arguments.length),p.validateWritablePath("Reference.update",this.path),Array.isArray(e)){for(var n={},r=0;r<e.length;++r)n[""+r]=e[r];e=n,a.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}p.validateFirebaseMergeDataArg("Reference.update",1,e,this.path,!1),d.validateCallback("Reference.update",2,t,!0);var i=new f.Deferred;return this.repo.update(this.path,e,i.wrapCallback(t)),i.promise},t.prototype.setWithPriority=function(e,t,n){if(d.validateArgCount("Reference.setWithPriority",2,3,arguments.length),p.validateWritablePath("Reference.setWithPriority",this.path),p.validateFirebaseDataArg("Reference.setWithPriority",1,e,this.path,!1),p.validatePriority("Reference.setWithPriority",2,t,!1),d.validateCallback("Reference.setWithPriority",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.setWithPriority failed: "+this.getKey()+" is a read-only object.";var r=new f.Deferred;return this.repo.setWithPriority(this.path,e,t,r.wrapCallback(n)),r.promise},t.prototype.remove=function(e){return d.validateArgCount("Reference.remove",0,1,arguments.length),p.validateWritablePath("Reference.remove",this.path),d.validateCallback("Reference.remove",1,e,!0),this.set(null,e)},t.prototype.transaction=function(e,t,n){if(d.validateArgCount("Reference.transaction",1,3,arguments.length),p.validateWritablePath("Reference.transaction",this.path),d.validateCallback("Reference.transaction",1,e,!1),d.validateCallback("Reference.transaction",2,t,!0),p.validateBoolean("Reference.transaction",3,n,!0),".length"===this.getKey()||".keys"===this.getKey())throw"Reference.transaction failed: "+this.getKey()+" is a read-only object.";void 0===n&&(n=!0);var r=new f.Deferred;"function"==typeof t&&r.promise.catch(function(){});var i=function(e,n,i){e?r.reject(e):r.resolve(new o.TransactionResult(n,i)),"function"==typeof t&&t(e,n,i)};return this.repo.startTransaction(this.path,e,i,n),r.promise},t.prototype.setPriority=function(e,t){d.validateArgCount("Reference.setPriority",1,2,arguments.length),p.validateWritablePath("Reference.setPriority",this.path),p.validatePriority("Reference.setPriority",1,e,!1),d.validateCallback("Reference.setPriority",2,t,!0);var n=new f.Deferred;return this.repo.setWithPriority(this.path.child(".priority"),e,null,n.wrapCallback(t)),n.promise},t.prototype.push=function(e,t){d.validateArgCount("Reference.push",0,2,arguments.length),p.validateWritablePath("Reference.push",this.path),p.validateFirebaseDataArg("Reference.push",1,e,this.path,!0),d.validateCallback("Reference.push",2,t,!0);var n,r=this.repo.serverTime(),i=s.nextPushId(r),o=this.child(i),a=this.child(i);return n=null!=e?o.set(e,t).then(function(){return a}):Promise.resolve(a),o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),"function"==typeof t&&n.catch(function(){}),o},t.prototype.onDisconnect=function(){return p.validateWritablePath("Reference.onDisconnect",this.path),new i.OnDisconnect(this.repo,this.path)},Object.defineProperty(t.prototype,"database",{get:function(){return this.databaseProp()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"key",{get:function(){return this.getKey()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this.getParent()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){return this.getRoot()},enumerable:!0,configurable:!0}),t}(u.Query);t.Reference=y,u.Query.__referenceConstructor=y,_.SyncPoint.__referenceConstructor=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(7),o=n(2),a=n(3),s=function(){function e(e,t,n){this._e=e,this.ge=t,this.me=n}return e.prototype.val=function(){return r.validateArgCount("DataSnapshot.val",0,0,arguments.length),this._e.val()},e.prototype.exportVal=function(){return r.validateArgCount("DataSnapshot.exportVal",0,0,arguments.length),this._e.val(!0)},e.prototype.toJSON=function(){return r.validateArgCount("DataSnapshot.toJSON",0,1,arguments.length),this.exportVal()},e.prototype.exists=function(){return r.validateArgCount("DataSnapshot.exists",0,0,arguments.length),!this._e.isEmpty()},e.prototype.child=function(t){r.validateArgCount("DataSnapshot.child",0,1,arguments.length),t+="",i.validatePathString("DataSnapshot.child",1,t,!1);var n=new o.Path(t),s=this.ge.child(n);return new e(this._e.getChild(n),s,a.PRIORITY_INDEX)},e.prototype.hasChild=function(e){r.validateArgCount("DataSnapshot.hasChild",1,1,arguments.length),i.validatePathString("DataSnapshot.hasChild",1,e,!1);var t=new o.Path(e);return!this._e.getChild(t).isEmpty()},e.prototype.getPriority=function(){return r.validateArgCount("DataSnapshot.getPriority",0,0,arguments.length),this._e.getPriority().val()},e.prototype.forEach=function(t){var n=this;return r.validateArgCount("DataSnapshot.forEach",1,1,arguments.length),r.validateCallback("DataSnapshot.forEach",1,t,!1),!this._e.isLeafNode()&&!!this._e.forEachChild(this.me,function(r,i){return t(new e(i,n.ge.child(r),a.PRIORITY_INDEX))})},e.prototype.hasChildren=function(){return r.validateArgCount("DataSnapshot.hasChildren",0,0,arguments.length),!this._e.isLeafNode()&&!this._e.isEmpty()},Object.defineProperty(e.prototype,"key",{get:function(){return this.ge.getKey()},enumerable:!0,configurable:!0}),e.prototype.numChildren=function(){return r.validateArgCount("DataSnapshot.numChildren",0,0,arguments.length),this._e.numChildren()},e.prototype.getRef=function(){return r.validateArgCount("DataSnapshot.ref",0,0,arguments.length),this.ge},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),e}();t.DataSnapshot=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(17),o=n(2),a=n(1),s=n(0),u=function(){return r||(r=new i.SortedMap(a.stringCompare)),r},l=function(){function e(e,t){void 0===t&&(t=u()),this.value=e,this.children=t}return e.fromObject=function(t){var n=e.Empty;return s.forEach(t,function(e,t){n=n.set(new o.Path(e),t)}),n},e.prototype.isEmpty=function(){return null===this.value&&this.children.isEmpty()},e.prototype.findRootMostMatchingPathAndValue=function(e,t){if(null!=this.value&&t(this.value))return{path:o.Path.Empty,value:this.value};if(e.isEmpty())return null;var n=e.getFront(),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(e.popFront(),t);return null!=i?{path:new o.Path(n).child(i.path),value:i.value}:null}return null},e.prototype.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,function(){return!0})},e.prototype.subtree=function(t){if(t.isEmpty())return this;var n=t.getFront(),r=this.children.get(n);return null!==r?r.subtree(t.popFront()):e.Empty},e.prototype.set=function(t,n){if(t.isEmpty())return new e(n,this.children);var r=t.getFront(),i=this.children.get(r)||e.Empty,o=i.set(t.popFront(),n),a=this.children.insert(r,o);return new e(this.value,a)},e.prototype.remove=function(t){if(t.isEmpty())return this.children.isEmpty()?e.Empty:new e(null,this.children);var n=t.getFront(),r=this.children.get(n);if(r){var i=r.remove(t.popFront()),o=void 0;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),null===this.value&&o.isEmpty()?e.Empty:new e(this.value,o)}return this},e.prototype.get=function(e){if(e.isEmpty())return this.value;var t=e.getFront(),n=this.children.get(t);return n?n.get(e.popFront()):null},e.prototype.setTree=function(t,n){if(t.isEmpty())return n;var r=t.getFront(),i=this.children.get(r)||e.Empty,o=i.setTree(t.popFront(),n),a=void 0;return a=o.isEmpty()?this.children.remove(r):this.children.insert(r,o),new e(this.value,a)},e.prototype.fold=function(e){return this.Ce(o.Path.Empty,e)},e.prototype.Ce=function(e,t){var n={};return this.children.inorderTraversal(function(r,i){n[r]=i.Ce(e.child(r),t)}),t(e,this.value,n)},e.prototype.findOnPath=function(e,t){return this.Ee(e,o.Path.Empty,t)},e.prototype.Ee=function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(e.isEmpty())return null;var i=e.getFront(),o=this.children.get(i);return o?o.Ee(e.popFront(),t.child(i),n):null},e.prototype.foreachOnPath=function(e,t){return this.Ne(e,o.Path.Empty,t)},e.prototype.Ne=function(t,n,r){if(t.isEmpty())return this;this.value&&r(n,this.value);var i=t.getFront(),o=this.children.get(i);return o?o.Ne(t.popFront(),n.child(i),r):e.Empty},e.prototype.foreach=function(e){this.Pe(o.Path.Empty,e)},e.prototype.Pe=function(e,t){this.children.inorderTraversal(function(n,r){r.Pe(e.child(n),t)}),this.value&&t(e,this.value)},e.prototype.foreachChild=function(e){this.children.inorderTraversal(function(t,n){n.value&&e(t,n.value)})},e.Empty=new e(null),e}();t.ImmutableTree=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(9),o=n(4),a=n(3),s=function(){function e(e){this.me=e}return e.prototype.updateChild=function(e,t,n,o,a,s){r.assert(e.isIndexed(this.me),"A node must be indexed if only a child is updated");var u=e.getImmediateChild(t);return u.getChild(o).equals(n.getChild(o))&&u.isEmpty()==n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(i.Change.childRemovedChange(t,u)):r.assert(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):u.isEmpty()?s.trackChildChange(i.Change.childAddedChange(t,n)):s.trackChildChange(i.Change.childChangedChange(t,n,u))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.me))},e.prototype.updateFullNode=function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(a.PRIORITY_INDEX,function(e,r){t.hasChild(e)||n.trackChildChange(i.Change.childRemovedChange(e,r))}),t.isLeafNode()||t.forEachChild(a.PRIORITY_INDEX,function(t,r){if(e.hasChild(t)){var o=e.getImmediateChild(t);o.equals(r)||n.trackChildChange(i.Change.childChangedChange(t,r,o))}else n.trackChildChange(i.Change.childAddedChange(t,r))})),t.withIndex(this.me)},e.prototype.updatePriority=function(e,t){return e.isEmpty()?o.ChildrenNode.EMPTY_NODE:e.updatePriority(t)},e.prototype.filtersNodes=function(){return!1},e.prototype.getIndexedFilter=function(){return this},e.prototype.getIndex=function(){return this.me},e}();t.IndexedFilter=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(99),i=function(){function e(){}return e.getCollection=function(e){var t=""+e;return this.be[t]||(this.be[t]=new r.StatsCollection),this.be[t]},e.getOrCreateReporter=function(e,t){var n=""+e;return this.Se[n]||(this.Se[n]=t()),this.Se[n]},e.be={},e.Se={},e}();t.StatsManager=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(18),o=n(1),a=n(33),s=n(7);n(109);var u,l=function(){function e(){this.Te={},this.we=!1}return e.getInstance=function(){return u||(u=new e),u},e.prototype.interrupt=function(){for(var e in this.Te)for(var t in this.Te[e])this.Te[e][t].interrupt()},e.prototype.resume=function(){for(var e in this.Te)for(var t in this.Te[e])this.Te[e][t].resume()},e.prototype.databaseFromApp=function(e,t){var n=t||e.options.databaseURL;void 0===n&&o.fatal("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.initializeApp().");var r=a.parseRepoInfo(n),i=r.repoInfo;return s.validateUrl("Invalid Firebase Database URL",1,r),r.path.isEmpty()||o.fatal("Database URL must point to the root of a Firebase Database (not including a child path)."),this.createRepo(i,e).database},e.prototype.deleteRepo=function(e){var t=r.safeGet(this.Te,e.app.name);t&&r.safeGet(t,e.H.toURLString())===e||o.fatal("Database "+e.app.name+"("+e.H+") has already been deleted."),e.interrupt(),delete t[e.H.toURLString()]},e.prototype.createRepo=function(e,t){var n=r.safeGet(this.Te,t.name);n||(n={},this.Te[t.name]=n);var a=r.safeGet(n,e.toURLString());return a&&o.fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new i.Repo(e,this.we,t),n[e.toURLString()]=a,a},e.prototype.forceRestClient=function(e){this.we=e},e}();t.RepoManager=l},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(33),o=n(2),a=n(21),s=n(18),u=n(26),l=n(0),h=n(7),c=function(){function e(e){this.Ie=e,e instanceof s.Repo||r.fatal("Don't call new Database() directly - please use firebase.database()."),this.B=new a.Reference(e,o.Path.Empty),this.INTERNAL=new p(this)}return Object.defineProperty(e.prototype,"app",{get:function(){return this.Ie.app},enumerable:!0,configurable:!0}),e.prototype.ref=function(e){return this.Re("ref"),l.validateArgCount("database.ref",0,1,arguments.length),void 0!==e?this.B.child(e):this.B},e.prototype.refFromURL=function(e){var t="database.refFromURL";this.Re(t),l.validateArgCount(t,1,1,arguments.length);var n=i.parseRepoInfo(e);h.validateUrl(t,1,n);var o=n.repoInfo;return o.host!==this.Ie.H.host&&r.fatal(t+": Host name does not match the current database: (found "+o.host+" but expected "+this.Ie.H.host+")"),this.ref(""+n.path)},e.prototype.Re=function(e){null===this.Ie&&r.fatal("Cannot call "+e+" on a deleted database.")},e.prototype.goOffline=function(){l.validateArgCount("database.goOffline",0,0,arguments.length),this.Re("goOffline"),this.Ie.interrupt()},e.prototype.goOnline=function(){l.validateArgCount("database.goOnline",0,0,arguments.length),this.Re("goOnline"),this.Ie.resume()},e.ServerValue={TIMESTAMP:{".sv":"timestamp"}},e}();t.Database=c;var p=function(){function e(e){this.database=e}return e.prototype.delete=function(){return this.database.Re("delete"),u.RepoManager.getInstance().deleteRepo(this.database.Ie),this.database.Ie=null,this.database.B=null,this.database.INTERNAL=null,this.database=null,Promise.resolve()},e}();t.DatabaseInternals=p},function(e,t,n){"use strict";function r(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=n(34),a=n(1);t.parseRepoInfo=function(e){var n=t.parseURL(e),r=n.subdomain;"firebase"===n.domain&&a.fatal(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!=r||"localhost"===n.domain||a.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||a.warnIfPageIsSecure();var s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new o.RepoInfo(n.host,n.secure,r,s),path:new i.Path(n.pathString)}},t.parseURL=function(e){var t="",n="",i="",o="",a=!0,s="https",u=443;if("string"==typeof e){var l=e.indexOf("//");l>=0&&(s=e.substring(0,l-1),e=e.substring(l+2));var h=e.indexOf("/");-1===h&&(h=e.length),t=e.substring(0,h),o=r(e.substring(h)),l=t.indexOf(":"),l>=0?(a="https"===s||"wss"===s,u=parseInt(t.substring(l+1),10)):l=e.length;var c=t.split(".");3===c.length?(n=c[1],i=c[0].toLowerCase()):2===c.length?n=c[0]:"localhost"===c[0].slice(0,l).toLowerCase()&&(n="localhost")}return{host:t,port:u,domain:n,subdomain:i,secure:a,scheme:s,pathString:o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),o=n(13),a=n(14),s=function(){function e(e,t,n,r,i){void 0===i&&(i=""),this.secure=t,this.namespace=n,this.webSocketOnly=r,this.persistenceKey=i,this.host=e.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.internalHost=o.PersistentStorage.get("host:"+e)||this.host}return e.prototype.needsQueryParam=function(){return this.host!==this.internalHost},e.prototype.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},e.prototype.isDemoHost=function(){return"firebaseio-demo.com"===this.domain},e.prototype.isCustomHost=function(){return"firebaseio.com"!==this.domain&&"firebaseio-demo.com"!==this.domain},e.prototype.updateHost=function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&o.PersistentStorage.set("host:"+this.host,this.internalHost))},e.prototype.connectionURL=function(e,t){r.assert("string"==typeof e,"typeof type must == string"),r.assert("object"==typeof t,"typeof params must == object");var n;if(e===a.WEBSOCKET)n=(this.secure?"wss://":"ws://")+this.internalHost+"/.ws?";else{if(e!==a.LONG_POLLING)throw Error("Unknown connection type: "+e);n=(this.secure?"https://":"http://")+this.internalHost+"/.lp?"}this.needsQueryParam()&&(t.ns=this.namespace);var o=[];return i.forEach(t,function(e,t){o.push(e+"="+t)}),n+o.join("&")},e.prototype.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},e.prototype.toURLString=function(){return(this.secure?"https://":"http://")+this.host},e}();t.RepoInfo=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(7),o=n(1),a=n(0),s=function(){function e(e,t){this.Ie=e,this.Oe=t}return e.prototype.cancel=function(e){r.validateArgCount("OnDisconnect.cancel",0,1,arguments.length),r.validateCallback("OnDisconnect.cancel",1,e,!0);var t=new a.Deferred;return this.Ie.onDisconnectCancel(this.Oe,t.wrapCallback(e)),t.promise},e.prototype.remove=function(e){r.validateArgCount("OnDisconnect.remove",0,1,arguments.length),i.validateWritablePath("OnDisconnect.remove",this.Oe),r.validateCallback("OnDisconnect.remove",1,e,!0);var t=new a.Deferred;return this.Ie.onDisconnectSet(this.Oe,null,t.wrapCallback(e)),t.promise},e.prototype.set=function(e,t){r.validateArgCount("OnDisconnect.set",1,2,arguments.length),i.validateWritablePath("OnDisconnect.set",this.Oe),i.validateFirebaseDataArg("OnDisconnect.set",1,e,this.Oe,!1),r.validateCallback("OnDisconnect.set",2,t,!0);var n=new a.Deferred;return this.Ie.onDisconnectSet(this.Oe,e,n.wrapCallback(t)),n.promise},e.prototype.setWithPriority=function(e,t,n){r.validateArgCount("OnDisconnect.setWithPriority",2,3,arguments.length),i.validateWritablePath("OnDisconnect.setWithPriority",this.Oe),i.validateFirebaseDataArg("OnDisconnect.setWithPriority",1,e,this.Oe,!1),i.validatePriority("OnDisconnect.setWithPriority",2,t,!1),r.validateCallback("OnDisconnect.setWithPriority",3,n,!0);var o=new a.Deferred;return this.Ie.onDisconnectSetWithPriority(this.Oe,e,t,o.wrapCallback(n)),o.promise},e.prototype.update=function(e,t){if(r.validateArgCount("OnDisconnect.update",1,2,arguments.length),i.validateWritablePath("OnDisconnect.update",this.Oe),Array.isArray(e)){for(var n={},s=0;s<e.length;++s)n[""+s]=e[s];e=n,o.warn("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}i.validateFirebaseMergeDataArg("OnDisconnect.update",1,e,this.Oe,!1),r.validateCallback("OnDisconnect.update",2,t,!0);var u=new a.Deferred;return this.Ie.onDisconnectUpdate(this.Oe,e,u.wrapCallback(t)),u.promise},e}();t.OnDisconnect=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=n(10),a=n(3),s=n(38),u=n(42),l=n(1),h=n(2),c=n(7),p=n(0),d=n(84),f=n(0),_=function(){function e(e,t,n,r){this.repo=e,this.path=t,this.Ae=n,this.De=r}return Object.defineProperty(e,"__referenceConstructor",{get:function(){return i.assert(r,"Reference.ts has not been loaded"),r},set:function(e){r=e},enumerable:!0,configurable:!0}),e.Me=function(e){var t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===o.KEY_INDEX){var r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",h="Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";if(e.hasStart()){if(e.getIndexStartName()!=l.MIN_NAME)throw Error(r);if("string"!=typeof t)throw Error(h)}if(e.hasEnd()){if(e.getIndexEndName()!=l.MAX_NAME)throw Error(r);if("string"!=typeof n)throw Error(h)}}else if(e.getIndex()===a.PRIORITY_INDEX){if(null!=t&&!c.isValidPriority(t)||null!=n&&!c.isValidPriority(n))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(i.assert(e.getIndex()instanceof u.PathIndex||e.getIndex()===s.VALUE_INDEX,"unknown index type."),null!=t&&"object"==typeof t||null!=n&&"object"==typeof n)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")},e.Le=function(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")},e.prototype.Fe=function(e){if(!0===this.De)throw Error(e+": You can't combine multiple orderBy calls.")},e.prototype.getQueryParams=function(){return this.Ae},e.prototype.getRef=function(){return p.validateArgCount("Query.ref",0,0,arguments.length),new e.__referenceConstructor(this.repo,this.path)},e.prototype.on=function(t,n,r,i){p.validateArgCount("Query.on",2,4,arguments.length),c.validateEventType("Query.on",1,t,!1),p.validateCallback("Query.on",2,n,!1);var o=e.xe("Query.on",r,i);if("value"===t)this.onValueEvent(n,o.cancel,o.context);else{var a={};a[t]=n,this.onChildEvent(a,o.cancel,o.context)}return n},e.prototype.onValueEvent=function(e,t,n){var r=new d.ValueEventRegistration(e,t||null,n||null);this.repo.addEventCallbackForQuery(this,r)},e.prototype.onChildEvent=function(e,t,n){var r=new d.ChildEventRegistration(e,t,n);this.repo.addEventCallbackForQuery(this,r)},e.prototype.off=function(e,t,n){p.validateArgCount("Query.off",0,3,arguments.length),c.validateEventType("Query.off",1,e,!0),p.validateCallback("Query.off",2,t,!0),p.validateContextObject("Query.off",3,n,!0);var r=null,i=null;if("value"===e){var o=t||null;r=new d.ValueEventRegistration(o,null,n||null)}else e&&(t&&(i={},i[e]=t),r=new d.ChildEventRegistration(i,null,n||null));this.repo.removeEventCallbackForQuery(this,r)},e.prototype.once=function(t,n,r,i){var o=this;p.validateArgCount("Query.once",1,4,arguments.length),c.validateEventType("Query.once",1,t,!1),p.validateCallback("Query.once",2,n,!0);var a=e.xe("Query.once",r,i),s=!0,u=new f.Deferred;u.promise.catch(function(){});var l=function(e){s&&(s=!1,o.off(t,l),n&&n.bind(a.context)(e),u.resolve(e))};return this.on(t,l,function(e){o.off(t,l),a.cancel&&a.cancel.bind(a.context)(e),u.reject(e)}),u.promise},e.prototype.limitToFirst=function(t){if(p.validateArgCount("Query.limitToFirst",1,1,arguments.length),"number"!=typeof t||Math.floor(t)!==t||t<=0)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.Ae.hasLimit())throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new e(this.repo,this.path,this.Ae.limitToFirst(t),this.De)},e.prototype.limitToLast=function(t){if(p.validateArgCount("Query.limitToLast",1,1,arguments.length),"number"!=typeof t||Math.floor(t)!==t||t<=0)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.Ae.hasLimit())throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new e(this.repo,this.path,this.Ae.limitToLast(t),this.De)},e.prototype.orderByChild=function(t){if(p.validateArgCount("Query.orderByChild",1,1,arguments.length),"$key"===t)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===t)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===t)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');c.validatePathString("Query.orderByChild",1,t,!1),this.Fe("Query.orderByChild");var n=new h.Path(t);if(n.isEmpty())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");var r=new u.PathIndex(n),i=this.Ae.orderBy(r);return e.Me(i),new e(this.repo,this.path,i,!0)},e.prototype.orderByKey=function(){p.validateArgCount("Query.orderByKey",0,0,arguments.length),this.Fe("Query.orderByKey");var t=this.Ae.orderBy(o.KEY_INDEX);return e.Me(t),new e(this.repo,this.path,t,!0)},e.prototype.orderByPriority=function(){p.validateArgCount("Query.orderByPriority",0,0,arguments.length),this.Fe("Query.orderByPriority");var t=this.Ae.orderBy(a.PRIORITY_INDEX);return e.Me(t),new e(this.repo,this.path,t,!0)},e.prototype.orderByValue=function(){p.validateArgCount("Query.orderByValue",0,0,arguments.length),this.Fe("Query.orderByValue");var t=this.Ae.orderBy(s.VALUE_INDEX);return e.Me(t),new e(this.repo,this.path,t,!0)},e.prototype.startAt=function(t,n){void 0===t&&(t=null),p.validateArgCount("Query.startAt",0,2,arguments.length),c.validateFirebaseDataArg("Query.startAt",1,t,this.path,!0),c.validateKey("Query.startAt",2,n,!0);var r=this.Ae.startAt(t,n);if(e.Le(r),e.Me(r),this.Ae.hasStart())throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return void 0===t&&(t=null,n=null),new e(this.repo,this.path,r,this.De)},e.prototype.endAt=function(t,n){void 0===t&&(t=null),p.validateArgCount("Query.endAt",0,2,arguments.length),c.validateFirebaseDataArg("Query.endAt",1,t,this.path,!0),c.validateKey("Query.endAt",2,n,!0);var r=this.Ae.endAt(t,n);if(e.Le(r),e.Me(r),this.Ae.hasEnd())throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new e(this.repo,this.path,r,this.De)},e.prototype.equalTo=function(e,t){if(p.validateArgCount("Query.equalTo",1,2,arguments.length),c.validateFirebaseDataArg("Query.equalTo",1,e,this.path,!1),c.validateKey("Query.equalTo",2,t,!0),this.Ae.hasStart())throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.Ae.hasEnd())throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.startAt(e,t).endAt(e,t)},e.prototype.toString=function(){return p.validateArgCount("Query.toString",0,0,arguments.length),""+this.repo+this.path.toUrlEncodedString()},e.prototype.toJSON=function(){return p.validateArgCount("Query.toJSON",0,1,arguments.length),""+this},e.prototype.queryObject=function(){return this.Ae.getQueryObject()},e.prototype.queryIdentifier=function(){var e=this.queryObject(),t=l.ObjectToUniqueKey(e);return"{}"===t?"default":t},e.prototype.isEqual=function(t){if(p.validateArgCount("Query.isEqual",1,1,arguments.length),!(t instanceof e))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var n=this.repo===t.repo,r=this.path.equals(t.path),i=this.queryIdentifier()===t.queryIdentifier();return n&&r&&i},e.xe=function(e,t,n){var r={cancel:null,context:null};if(t&&n)r.cancel=t,p.validateCallback(e,3,r.cancel,!0),r.context=n,p.validateContextObject(e,4,r.context,!0);else if(t)if("object"==typeof t&&null!==t)r.context=t;else{if("function"!=typeof t)throw Error(p.errorPrefix(e,3,!0)+" must either be a cancel callback or a context object.");r.cancel=t}return r},Object.defineProperty(e.prototype,"ref",{get:function(){return this.getRef()},enumerable:!0,configurable:!0}),e}();t.Query=_},function(e,t,n){"use strict";function r(e){i=e}Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(0),a=n(1),s=n(0);t.setMaxNode=r,t.priorityHashText=function(e){return"number"==typeof e?"number:"+a.doubleToIEEE754String(e):"string:"+e},t.validatePriorityNode=function(e){if(e.isLeafNode()){var t=e.val();o.assert("string"==typeof t||"number"==typeof t||"object"==typeof t&&s.contains(t,".sv"),"Priority must be a string or number.")}else o.assert(e===i||e.isEmpty(),"priority of unexpected type.");o.assert(e===i||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")}},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),o=n(5),a=n(1),s=n(11),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.compare=function(e,t){var n=e.node.compareTo(t.node);return 0===n?a.nameCompare(e.name,t.name):n},t.prototype.isDefinedOn=function(e){return!0},t.prototype.indexedValueChanged=function(e,t){return!e.equals(t)},t.prototype.minPost=function(){return o.NamedNode.MIN},t.prototype.maxPost=function(){return o.NamedNode.MAX},t.prototype.makePost=function(e,t){var n=s.nodeFromJSON(e);return new o.NamedNode(t,n)},t.prototype.toString=function(){return".value"},t}(i.Index);t.ValueIndex=u,t.VALUE_INDEX=new u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=n(40),a=n(0),s=n(5),u=n(3),l=n(10),h={},c=function(){function e(e,t){this.ke=e,this.We=t}return Object.defineProperty(e,"Default",{get:function(){return i.assert(h&&u.PRIORITY_INDEX,"ChildrenNode.ts has not been loaded"),r=r||new e({".priority":h},{".priority":u.PRIORITY_INDEX})},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var t=a.safeGet(this.ke,e);if(!t)throw Error("No index defined for "+e);return t===h?null:t},e.prototype.hasIndex=function(e){return a.contains(this.We,""+e)},e.prototype.addIndex=function(t,n){i.assert(t!==l.KEY_INDEX,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],u=!1,c=n.getIterator(s.NamedNode.Wrap),p=c.getNext();p;)u=u||t.isDefinedOn(p.node),r.push(p),p=c.getNext();var d;d=u?o.buildChildSet(r,t.getCompare()):h;var f=""+t,_=a.clone(this.We);_[f]=t;var y=a.clone(this.ke);return y[f]=d,new e(y,_)},e.prototype.addToIndexes=function(t,n){var r=this;return new e(a.map(this.ke,function(e,u){var l=a.safeGet(r.We,u);if(i.assert(l,"Missing index implementation for "+u),e===h){if(l.isDefinedOn(t.node)){for(var c=[],p=n.getIterator(s.NamedNode.Wrap),d=p.getNext();d;)d.name!=t.name&&c.push(d),d=p.getNext();return c.push(t),o.buildChildSet(c,l.getCompare())}return h}var f=n.get(t.name),_=e;return f&&(_=_.remove(new s.NamedNode(t.name,f))),_.insert(t,t.node)}),this.We)},e.prototype.removeFromIndexes=function(t,n){return new e(a.map(this.ke,function(e){if(e===h)return e;var r=n.get(t.name);return r?e.remove(new s.NamedNode(t.name,r)):e}),this.We)},e}();t.IndexMap=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(17),i=n(17),o=Math.log(2),a=function(){function e(e){this.count=function(e){return parseInt(Math.log(e)/o,10)}(e+1),this.je=this.count-1;var t=function(e){return parseInt(Array(e+1).join("1"),2)}(this.count);this.Ve=e+1&t}return e.prototype.nextBitIsOne=function(){var e=!(this.Ve&1<<this.je);return this.je--,e},e}();t.buildChildSet=function(e,t,n,o){e.sort(t);var s=function(t,i){var o,a,u=i-t;if(0==u)return null;if(1==u)return o=e[t],a=n?n(o):o,new r.LLRBNode(a,o.node,r.LLRBNode.BLACK,null,null);var l=parseInt(u/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new r.LLRBNode(a,o.node,r.LLRBNode.BLACK,h,c)},u=new a(e.length),l=function(t){for(var i=null,o=null,a=e.length,u=function(t,i){var o=a-t,u=a;a-=t;var h=s(o+1,u),c=e[o],p=n?n(c):c;l(new r.LLRBNode(p,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)},h=0;h<t.count;++h){var c=t.nextBitIsOne(),p=Math.pow(2,t.count-(h+1));c?u(p,r.LLRBNode.BLACK):(u(p,r.LLRBNode.BLACK),u(p,r.LLRBNode.RED))}return o}(u);return new i.SortedMap(o||t,l)}},function(e,t,n){"use strict";function r(e,t){return o.nameCompare(e.name,t.name)}function i(e,t){return o.nameCompare(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.NAME_ONLY_COMPARATOR=r,t.NAME_COMPARATOR=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(1),a=n(15),s=n(4),u=n(5),l=n(11),h=function(e){function t(t){var n=e.call(this)||this;return n.Qe=t,i.assert(!t.isEmpty()&&".priority"!==t.getFront(),"Can't create PathIndex with empty path or .priority key"),n}return r(t,e),t.prototype.extractChild=function(e){return e.getChild(this.Qe)},t.prototype.isDefinedOn=function(e){return!e.getChild(this.Qe).isEmpty()},t.prototype.compare=function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?o.nameCompare(e.name,t.name):i},t.prototype.makePost=function(e,t){var n=l.nodeFromJSON(e),r=s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe,n);return new u.NamedNode(t,r)},t.prototype.maxPost=function(){var e=s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe,s.MAX_NODE);return new u.NamedNode(o.MAX_NAME,e)},t.prototype.toString=function(){return this.Qe.slice().join("/")},t}(a.Index);t.PathIndex=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),o=n(44),a=n(16),s=n(11),u=n(3);t.generateWithValues=function(e){return e=e||{},e.timestamp=e.timestamp||(new Date).getTime(),e},t.resolveDeferredValue=function(e,t){return e&&"object"==typeof e?(r.assert(".sv"in e,"Unexpected leaf node or priority contents"),t[e[".sv"]]):e},t.resolveDeferredValueTree=function(e,n){var r=new o.SparseSnapshotTree;return e.forEachTree(new i.Path(""),function(e,i){r.remember(e,t.resolveDeferredValueSnapshot(i,n))}),r},t.resolveDeferredValueSnapshot=function(e,n){var r,i=e.getPriority().val(),o=t.resolveDeferredValue(i,n);if(e.isLeafNode()){var l=e,h=t.resolveDeferredValue(l.getValue(),n);return h!==l.getValue()||o!==l.getPriority().val()?new a.LeafNode(h,s.nodeFromJSON(o)):e}var c=e;return r=c,o!==c.getPriority().val()&&(r=r.updatePriority(new a.LeafNode(o))),c.forEachChild(u.PRIORITY_INDEX,function(e,i){var o=t.resolveDeferredValueSnapshot(i,n);o!==i&&(r=r.updateImmediateChild(e,o))}),r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(3),o=n(45),a=function(){function e(){this.T=null,this._=null}return e.prototype.find=function(e){if(null!=this.T)return this.T.getChild(e);if(e.isEmpty()||null==this._)return null;var t=e.getFront();return e=e.popFront(),this._.contains(t)?this._.get(t).find(e):null},e.prototype.remember=function(t,n){if(t.isEmpty())this.T=n,this._=null;else if(null!==this.T)this.T=this.T.updateChild(t,n);else{null==this._&&(this._=new o.CountedSet);var r=t.getFront();this._.contains(r)||this._.add(r,new e);var i=this._.get(r);t=t.popFront(),i.remember(t,n)}},e.prototype.forget=function(e){if(e.isEmpty())return this.T=null,this._=null,!0;if(null!==this.T){if(this.T.isLeafNode())return!1;var t=this.T;this.T=null;var n=this;return t.forEachChild(i.PRIORITY_INDEX,function(e,t){n.remember(new r.Path(e),t)}),this.forget(e)}if(null!==this._){var o=e.getFront();return e=e.popFront(),this._.contains(o)&&this._.get(o).forget(e)&&this._.remove(o),!!this._.isEmpty()&&(this._=null,!0)}return!0},e.prototype.forEachTree=function(e,t){null!==this.T?t(e,this.T):this.forEachChild(function(n,i){var o=new r.Path(e+"/"+n);i.forEachTree(o,t)})},e.prototype.forEachChild=function(e){null!==this._&&this._.each(function(t,n){e(t,n)})},e}();t.SparseSnapshotTree=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.set={}}return e.prototype.add=function(e,t){this.set[e]=null===t||t},e.prototype.contains=function(e){return r.contains(this.set,e)},e.prototype.get=function(e){return this.contains(e)?this.set[e]:void 0},e.prototype.remove=function(e){delete this.set[e]},e.prototype.clear=function(){this.set={}},e.prototype.isEmpty=function(){return r.isEmpty(this.set)},e.prototype.count=function(){return r.getCount(this.set)},e.prototype.each=function(e){r.forEach(this.set,function(t,n){return e(t,n)})},e.prototype.keys=function(){var e=[];return r.forEach(this.set,function(t){e.push(t)}),e},e}();t.CountedSet=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(2),o=function(){function e(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=r.OperationType.OVERWRITE}return e.prototype.operationForChild=function(t){return this.path.isEmpty()?new e(this.source,i.Path.Empty,this.snap.getImmediateChild(t)):new e(this.source,this.path.popFront(),this.snap)},e}();t.Overwrite=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(19),o=n(4),a=n(0),s=n(0),u=n(48),l=n(90),h=function(){function e(){this.qe={}}return Object.defineProperty(e,"__referenceConstructor",{get:function(){return a.assert(r,"Reference.ts has not been loaded"),r},set:function(e){a.assert(!r,"__referenceConstructor has already been defined"),r=e},enumerable:!0,configurable:!0}),e.prototype.isEmpty=function(){return s.isEmpty(this.qe)},e.prototype.applyOperation=function(e,t,n){var r=e.source.queryId;if(null!==r){var i=s.safeGet(this.qe,r);return a.assert(null!=i,"SyncTree gave us an op for an invalid query."),i.applyOperation(e,t,n)}var o=[];return s.forEach(this.qe,function(r,i){o=o.concat(i.applyOperation(e,t,n))}),o},e.prototype.addEventRegistration=function(e,t,n,r,a){var h=e.queryIdentifier(),c=s.safeGet(this.qe,h);if(!c){var p=n.calcCompleteEventCache(a?r:null),d=!1;p?d=!0:r instanceof o.ChildrenNode?(p=n.calcCompleteEventChildren(r),d=!1):(p=o.ChildrenNode.EMPTY_NODE,d=!1);var f=new u.ViewCache(new i.CacheNode(p,d,!1),new i.CacheNode(r,a,!1));c=new l.View(e,f),this.qe[h]=c}return c.addEventRegistration(t),c.getInitialEvents(t)},e.prototype.removeEventRegistration=function(t,n,r){var i=t.queryIdentifier(),o=[],a=[],u=this.hasCompleteView();if("default"===i){var l=this;s.forEach(this.qe,function(e,t){a=a.concat(t.removeEventRegistration(n,r)),t.isEmpty()&&(delete l.qe[e],t.getQuery().getQueryParams().loadsAllData()||o.push(t.getQuery()))})}else{var h=s.safeGet(this.qe,i);h&&(a=a.concat(h.removeEventRegistration(n,r)),h.isEmpty()&&(delete this.qe[i],h.getQuery().getQueryParams().loadsAllData()||o.push(h.getQuery())))}return u&&!this.hasCompleteView()&&o.push(new e.__referenceConstructor(t.repo,t.path)),{removed:o,events:a}},e.prototype.getQueryViews=function(){var e=this;return Object.keys(this.qe).map(function(t){return e.qe[t]}).filter(function(e){return!e.getQuery().getQueryParams().loadsAllData()})},e.prototype.getCompleteServerCache=function(e){var t=null;return s.forEach(this.qe,function(n,r){t=t||r.getCompleteServerCache(e)}),t},e.prototype.viewForQuery=function(e){if(e.getQueryParams().loadsAllData())return this.getCompleteView();var t=e.queryIdentifier();return s.safeGet(this.qe,t)},e.prototype.viewExistsForQuery=function(e){return null!=this.viewForQuery(e)},e.prototype.hasCompleteView=function(){return null!=this.getCompleteView()},e.prototype.getCompleteView=function(){return s.findValue(this.qe,function(e){return e.getQuery().getQueryParams().loadsAllData()})||null},e}();t.SyncPoint=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=n(19),o=function(){function e(e,t){this.Ue=e,this.Be=t}return e.prototype.updateEventSnap=function(t,n,r){return new e(new i.CacheNode(t,n,r),this.Be)},e.prototype.updateServerSnap=function(t,n,r){return new e(this.Ue,new i.CacheNode(t,n,r))},e.prototype.getEventCache=function(){return this.Ue},e.prototype.getCompleteEventSnap=function(){return this.Ue.isFullyInitialized()?this.Ue.getNode():null},e.prototype.getServerCache=function(){return this.Be},e.prototype.getCompleteServerSnap=function(){return this.Be.isFullyInitialized()?this.Be.getNode():null},e.Empty=new e(new i.CacheNode(r.ChildrenNode.EMPTY_NODE,!1,!1),new i.CacheNode(r.ChildrenNode.EMPTY_NODE,!1,!1)),e}();t.ViewCache=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e){this.He=e,this.Ge=null}return e.prototype.get=function(){var e=this.He.get(),t=r.clone(e);return this.Ge&&r.forEach(this.Ge,function(e,n){t[e]=t[e]-n}),this.Ge=e,t},e}();t.StatsListener=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=n(0),a=n(0),s=n(0),u=n(1),l=n(2),h=n(102),c=n(103),p=n(0),d=n(52),f=n(0),_=n(0),y=n(55),v=1e3,g=3e5,m=function(e){function t(n,r,i,o,a,s){var l=e.call(this)||this;if(l.H=n,l.ee=r,l.te=i,l.ne=o,l.Ke=a,l.Ye=s,l.id=t.Xe++,l.de=u.logWrapper("p:"+l.id+":"),l.ze={},l.Je={},l.$e=[],l.Ze=0,l.et=[],l.tt=!1,l.nt=v,l.rt=g,l.it=null,l.lastSessionId=null,l.ot=null,l.at=!1,l.st={},l.ut=0,l.lt=null,l.ht=null,l.ct=!1,l.pt=0,l.dt=!0,l.ft=null,l._t=null,s&&!_.isNodeSdk())throw Error("Auth override specified in options, but not supported on non Node.js platforms");return l.yt(0),h.VisibilityMonitor.getInstance().on("visible",l.vt,l),-1===n.host.indexOf("fblocal")&&c.OnlineMonitor.getInstance().on("online",l.gt,l),l}return r(t,e),t.prototype.sendRequest=function(e,t,n){var r=++this.ut,i={r:r,a:e,b:t};this.de(a.stringify(i)),s.assert(this.tt,"sendRequest call when we're not connected not allowed."),this.lt.sendRequest(i),n&&(this.st[r]=n)},t.prototype.listen=function(e,t,n,r){var i=e.queryIdentifier(),o=""+e.path;this.de("Listen called for "+o+" "+i),this.Je[o]=this.Je[o]||{},s.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"listen() called for non-default but complete query"),s.assert(!this.Je[o][i],"listen() called twice for same path/queryId.");var a={onComplete:r,hashFn:t,query:e,tag:n};this.Je[o][i]=a,this.tt&&this.mt(a)},t.prototype.mt=function(e){var n=this,r=e.query,i=""+r.path,o=r.queryIdentifier();this.de("Listen on "+i+" for "+o);var a={p:i};e.tag&&(a.q=r.queryObject(),a.t=e.tag),a.h=e.hashFn(),this.sendRequest("q",a,function(a){var s=a.d,u=a.s;t.Ct(s,r),(n.Je[i]&&n.Je[i][o])===e&&(n.de("listen response",a),"ok"!==u&&n.Et(i,o),e.onComplete&&e.onComplete(u,s))})},t.Ct=function(e,t){if(e&&"object"==typeof e&&o.contains(e,"w")){var n=o.safeGet(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t.getQueryParams().getIndex()+'"',i=""+t.path;u.warn("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+r+" at "+i+" to your security rules for better performance.")}}},t.prototype.refreshAuthToken=function(e){this.ht=e,this.de("Auth token refreshed"),this.ht?this.tryAuth():this.tt&&this.sendRequest("unauth",{},function(){}),this.Nt(e)},t.prototype.Nt=function(e){(e&&40===e.length||p.isAdmin(e))&&(this.de("Admin auth credential detected.  Reducing max reconnect time."),this.rt=3e4)},t.prototype.tryAuth=function(){var e=this;if(this.tt&&this.ht){var t=this.ht,n=p.isValidFormat(t)?"auth":"gauth",r={cred:t};null===this.Ye?r.noauth=!0:"object"==typeof this.Ye&&(r.authvar=this.Ye),this.sendRequest(n,r,function(n){var r=n.s,i=n.d||"error";e.ht===t&&("ok"===r?e.pt=0:e.Pt(r,i))})}},t.prototype.unlisten=function(e,t){var n=""+e.path,r=e.queryIdentifier();this.de("Unlisten called for "+n+" "+r),s.assert(e.getQueryParams().isDefault()||!e.getQueryParams().loadsAllData(),"unlisten() called for non-default but complete query"),this.Et(n,r)&&this.tt&&this.bt(n,r,e.queryObject(),t)},t.prototype.bt=function(e,t,n,r){this.de("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)},t.prototype.onDisconnectPut=function(e,t,n){this.tt?this.St("o",e,t,n):this.et.push({pathString:e,action:"o",data:t,onComplete:n})},t.prototype.onDisconnectMerge=function(e,t,n){this.tt?this.St("om",e,t,n):this.et.push({pathString:e,action:"om",data:t,onComplete:n})},t.prototype.onDisconnectCancel=function(e,t){this.tt?this.St("oc",e,null,t):this.et.push({pathString:e,action:"oc",data:null,onComplete:t})},t.prototype.St=function(e,t,n,r){var i={p:t,d:n};this.de("onDisconnect "+e,i),this.sendRequest(e,i,function(e){r&&setTimeout(function(){r(e.s,e.d)},Math.floor(0))})},t.prototype.put=function(e,t,n,r){this.putInternal("p",e,t,n,r)},t.prototype.merge=function(e,t,n,r){this.putInternal("m",e,t,n,r)},t.prototype.putInternal=function(e,t,n,r,i){var o={p:t,d:n};void 0!==i&&(o.h=i),this.$e.push({action:e,request:o,onComplete:r}),this.Ze++;var a=this.$e.length-1;this.tt?this.Tt(a):this.de("Buffering put: "+t)},t.prototype.Tt=function(e){var t=this,n=this.$e[e].action,r=this.$e[e].request,i=this.$e[e].onComplete;this.$e[e].queued=this.tt,this.sendRequest(n,r,function(r){t.de(n+" response",r),delete t.$e[e],t.Ze--,0===t.Ze&&(t.$e=[]),i&&i(r.s,r.d)})},t.prototype.reportStats=function(e){var t=this;if(this.tt){var n={c:e};this.de("reportStats",n),this.sendRequest("s",n,function(e){if("ok"!==e.s){var n=e.d;t.de("reportStats","Error sending stats: "+n)}})}},t.prototype.wt=function(e){if("r"in e){this.de("from server: "+a.stringify(e));var t=e.r,n=this.st[t];n&&(delete this.st[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.It(e.a,e.b)}},t.prototype.It=function(e,t){this.de("handleServerMessage",e,t),"d"===e?this.ee(t.p,t.d,!1,t.t):"m"===e?this.ee(t.p,t.d,!0,t.t):"c"===e?this.Rt(t.p,t.q):"ac"===e?this.Pt(t.s,t.d):"sd"===e?this.Ot(t):u.error("Unrecognized action received from server: "+a.stringify(e)+"\nAre you using the latest client?")},t.prototype.At=function(e,t){this.de("connection ready"),this.tt=!0,this._t=(new Date).getTime(),this.Dt(e),this.lastSessionId=t,this.dt&&this.Mt(),this.Lt(),this.dt=!1,this.te(!0)},t.prototype.yt=function(e){var t=this;s.assert(!this.lt,"Scheduling a connect when we're already connected/ing?"),this.ot&&clearTimeout(this.ot),this.ot=setTimeout(function(){t.ot=null,t.Ft()},Math.floor(e))},t.prototype.vt=function(e){e&&!this.at&&this.nt===this.rt&&(this.de("Window became visible.  Reducing delay."),this.nt=v,this.lt||this.yt(0)),this.at=e},t.prototype.gt=function(e){e?(this.de("Browser went online."),this.nt=v,this.lt||this.yt(0)):(this.de("Browser went offline.  Killing connection."),this.lt&&this.lt.close())},t.prototype.xt=function(){if(this.de("data client disconnected"),this.tt=!1,this.lt=null,this.kt(),this.st={},this.Wt()){if(this.at){if(this._t){var e=(new Date).getTime()-this._t;e>3e4&&(this.nt=v),this._t=null}}else this.de("Window isn't visible.  Delaying reconnect."),this.nt=this.rt,this.ft=(new Date).getTime();var t=(new Date).getTime()-this.ft,n=Math.max(0,this.nt-t);n=Math.random()*n,this.de("Trying to reconnect in "+n+"ms"),this.yt(n),this.nt=Math.min(this.rt,1.3*this.nt)}this.te(!1)},t.prototype.Ft=function(){if(this.Wt()){this.de("Making a connection attempt"),this.ft=(new Date).getTime(),this._t=null;var e=this.wt.bind(this),n=this.At.bind(this),r=this.xt.bind(this),i=this.id+":"+t.jt++,o=this,a=this.lastSessionId,l=!1,h=null,c=function(){h?h.close():(l=!0,r())},p=function(e){s.assert(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)};this.lt={close:c,sendRequest:p};var _=this.ct;this.ct=!1,this.Ke.getToken(_).then(function(t){l?u.log("getToken() completed but was canceled"):(u.log("getToken() completed. Creating connection."),o.ht=t&&t.accessToken,h=new d.Connection(i,o.H,e,n,r,function(e){u.warn(e+" ("+o.H+")"),o.interrupt("server_kill")},a))}).then(null,function(e){o.de("Failed to get token: "+e),l||(f.CONSTANTS.NODE_ADMIN&&u.warn(e),c())})}},t.prototype.interrupt=function(e){u.log("Interrupting connection for reason: "+e),this.ze[e]=!0,this.lt?this.lt.close():(this.ot&&(clearTimeout(this.ot),this.ot=null),this.tt&&this.xt())},t.prototype.resume=function(e){u.log("Resuming connection for reason: "+e),delete this.ze[e],o.isEmpty(this.ze)&&(this.nt=v,this.lt||this.yt(0))},t.prototype.Dt=function(e){var t=e-(new Date).getTime();this.ne({serverTimeOffset:t})},t.prototype.kt=function(){for(var e=0;e<this.$e.length;e++){var t=this.$e[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.$e[e],this.Ze--)}0===this.Ze&&(this.$e=[])},t.prototype.Rt=function(e,t){var n;n=t?t.map(function(e){return u.ObjectToUniqueKey(e)}).join("$"):"default";var r=this.Et(e,n);r&&r.onComplete&&r.onComplete("permission_denied")},t.prototype.Et=function(e,t){var n,r=""+new l.Path(e);return void 0!==this.Je[r]?(n=this.Je[r][t],delete this.Je[r][t],0===o.getCount(this.Je[r])&&delete this.Je[r]):n=void 0,n},t.prototype.Pt=function(e,t){u.log("Auth token revoked: "+e+"/"+t),this.ht=null,this.ct=!0,this.lt.close(),"invalid_token"!==e&&"permission_denied"!==e||++this.pt>=3&&(this.nt=3e4,this.Ke.notifyForInvalidToken())},t.prototype.Ot=function(e){this.it?this.it(e):"msg"in e&&"undefined"!=typeof console&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))},t.prototype.Lt=function(){var e=this;this.tryAuth(),o.forEach(this.Je,function(t,n){o.forEach(n,function(t,n){e.mt(n)})});for(var t=0;t<this.$e.length;t++)this.$e[t]&&this.Tt(t);for(;this.et.length;){var n=this.et.shift();this.St(n.action,n.pathString,n.data,n.onComplete)}},t.prototype.Mt=function(){var e={},t="js";f.CONSTANTS.NODE_ADMIN?t="admin_node":f.CONSTANTS.NODE_CLIENT&&(t="node"),e["sdk."+t+"."+i.default.SDK_VERSION.replace(/\./g,"-")]=1,_.isMobileCordova()?e["framework.cordova"]=1:_.isReactNative()&&(e["framework.reactnative"]=1),this.reportStats(e)},t.prototype.Wt=function(){var e=c.OnlineMonitor.getInstance().currentlyOnline();return o.isEmpty(this.ze)&&e},t.Xe=0,t.jt=0,t}(y.ServerActions);t.PersistentConnection=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e){this.Vt=e,this.Qt={},r.assert(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}return e.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Array.isArray(this.Qt[e]))for(var r=this.Qt[e].slice(),i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)},e.prototype.on=function(e,t,n){this.qt(e),this.Qt[e]=this.Qt[e]||[],this.Qt[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)},e.prototype.off=function(e,t,n){this.qt(e);for(var r=this.Qt[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)},e.prototype.qt=function(e){r.assert(this.Vt.find(function(t){return t===e}),"Unknown event: "+e)},e}();t.EventEmitter=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(13),o=n(14),a=n(104),s=function(){function e(e,t,n,i,o,s,u){this.id=e,this.H=t,this.Ut=n,this.At=i,this.z=o,this.Bt=s,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.Ht=0,this.de=r.logWrapper("c:"+this.id+":"),this.Gt=new a.TransportManager(t),this.de("Connection created"),this.Kt()}return e.prototype.Kt=function(){var e=this,t=this.Gt.initialTransport();this.Yt=new t(this.Xt(),this.H,void 0,this.lastSessionId),this.zt=t.responsesRequiredToBeHealthy||0;var n=this.Jt(this.Yt),i=this.$t(this.Yt);this.Zt=this.Yt,this.en=this.Yt,this.tn=null,this.nn=!1,setTimeout(function(){e.Yt&&e.Yt.open(n,i)},Math.floor(0));var o=t.healthyTimeout||0;o>0&&(this.rn=r.setTimeoutNonBlocking(function(){e.rn=null,e.nn||(e.Yt&&e.Yt.bytesReceived>102400?(e.de("Connection exceeded healthy timeout but has received "+e.Yt.bytesReceived+" bytes.  Marking connection healthy."),e.nn=!0,e.Yt.markConnectionHealthy()):e.Yt&&e.Yt.bytesSent>10240?e.de("Connection exceeded healthy timeout but has sent "+e.Yt.bytesSent+" bytes.  Leaving connection alive."):(e.de("Closing unhealthy connection after timeout."),e.close()))},Math.floor(o)))},e.prototype.Xt=function(){return"c:"+this.id+":"+this.connectionCount++},e.prototype.$t=function(e){var t=this;return function(n){e===t.Yt?t.in(n):e===t.tn?(t.de("Secondary connection lost."),t.an()):t.de("closing an old connection")}},e.prototype.Jt=function(e){var t=this;return function(n){2!=t.Ht&&(e===t.en?t.sn(n):e===t.tn?t.un(n):t.de("message on old connection"))}},e.prototype.sendRequest=function(e){var t={t:"d",d:e};this.ln(t)},e.prototype.tryCleanupConnection=function(){this.Zt===this.tn&&this.en===this.tn&&(this.de("cleaning up and promoting a connection: "+this.tn.connId),this.Yt=this.tn,this.tn=null)},e.prototype.hn=function(e){if("t"in e){var t=e.t;"a"===t?this.cn():"r"===t?(this.de("Got a reset on secondary, closing it"),this.tn.close(),this.Zt!==this.tn&&this.en!==this.tn||this.close()):"o"===t&&(this.de("got pong on secondary."),this.pn--,this.cn())}},e.prototype.un=function(e){var t=r.requireKey("t",e),n=r.requireKey("d",e);if("c"==t)this.hn(n);else{if("d"!=t)throw Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}},e.prototype.cn=function(){this.pn<=0?(this.de("Secondary connection is healthy."),this.nn=!0,this.tn.markConnectionHealthy(),this.dn()):(this.de("sending ping on secondary."),this.tn.send({t:"c",d:{t:"p",d:{}}}))},e.prototype.dn=function(){this.tn.start(),this.de("sending client ack on secondary"),this.tn.send({t:"c",d:{t:"a",d:{}}}),this.de("Ending transmission on primary"),this.Yt.send({t:"c",d:{t:"n",d:{}}}),this.Zt=this.tn,this.tryCleanupConnection()},e.prototype.sn=function(e){var t=r.requireKey("t",e),n=r.requireKey("d",e);"c"==t?this.fn(n):"d"==t&&this.wt(n)},e.prototype.wt=function(e){this._n(),this.Ut(e)},e.prototype._n=function(){this.nn||--this.zt<=0&&(this.de("Primary connection is healthy."),this.nn=!0,this.Yt.markConnectionHealthy())},e.prototype.fn=function(e){var t=r.requireKey("t",e);if("d"in e){var n=e.d;if("h"===t)this.yn(n);else if("n"===t){this.de("recvd end transmission on primary"),this.en=this.tn;for(var i=0;i<this.pendingDataMessages.length;++i)this.wt(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.vn(n):"r"===t?this.gn(n):"e"===t?r.error("Server Error: "+n):"o"===t?(this.de("got pong on primary."),this._n(),this.mn()):r.error("Unknown control packet command: "+t)}},e.prototype.yn=function(e){var t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.H.updateHost(i),0==this.Ht&&(this.Yt.start(),this.Cn(this.Yt,t),o.PROTOCOL_VERSION!==n&&r.warn("Protocol version mismatch detected"),this.En())},e.prototype.En=function(){var e=this.Gt.upgradeTransport();e&&this.Nn(e)},e.prototype.Nn=function(e){var t=this;this.tn=new e(this.Xt(),this.H,this.sessionId),this.pn=e.responsesRequiredToBeHealthy||0;var n=this.Jt(this.tn),i=this.$t(this.tn);this.tn.open(n,i),r.setTimeoutNonBlocking(function(){t.tn&&(t.de("Timed out trying to upgrade."),t.tn.close())},Math.floor(6e4))},e.prototype.gn=function(e){this.de("Reset packet received.  New host: "+e),this.H.updateHost(e),1===this.Ht?this.close():(this.Pn(),this.Kt())},e.prototype.Cn=function(e,t){var n=this;this.de("Realtime connection established."),this.Yt=e,this.Ht=1,this.At&&(this.At(t,this.sessionId),this.At=null),0===this.zt?(this.de("Primary connection is healthy."),this.nn=!0):r.setTimeoutNonBlocking(function(){n.mn()},Math.floor(5e3))},e.prototype.mn=function(){this.nn||1!==this.Ht||(this.de("sending ping on primary."),this.ln({t:"c",d:{t:"p",d:{}}}))},e.prototype.an=function(){var e=this.tn;this.tn=null,this.Zt!==e&&this.en!==e||this.close()},e.prototype.in=function(e){this.Yt=null,e||0!==this.Ht?1===this.Ht&&this.de("Realtime connection lost."):(this.de("Realtime connection failed."),this.H.isCacheableHost()&&(i.PersistentStorage.remove("host:"+this.H.host),this.H.internalHost=this.H.host)),this.close()},e.prototype.vn=function(e){this.de("Connection shutdown command received. Shutting down..."),this.Bt&&(this.Bt(e),this.Bt=null),this.z=null,this.close()},e.prototype.ln=function(e){if(1!==this.Ht)throw"Connection is not connected";this.Zt.send(e)},e.prototype.close=function(){2!==this.Ht&&(this.de("Closing realtime connection."),this.Ht=2,this.Pn(),this.z&&(this.z(),this.z=null))},e.prototype.Pn=function(){this.de("Shutting down all connections"),this.Yt&&(this.Yt.close(),this.Yt=null),this.tn&&(this.tn.close(),this.tn=null),this.rn&&(clearTimeout(this.rn),this.rn=null)},e}();t.Connection=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(45),o=n(25),a=n(105),s=n(14),u=n(0),l=n(0);t.FIREBASE_LONGPOLL_START_PARAM="start",t.FIREBASE_LONGPOLL_CLOSE_COMMAND="close",t.FIREBASE_LONGPOLL_COMMAND_CB_NAME="pLPCommand",t.FIREBASE_LONGPOLL_DATA_CB_NAME="pRTLPCB",t.FIREBASE_LONGPOLL_ID_PARAM="id",t.FIREBASE_LONGPOLL_PW_PARAM="pw",t.FIREBASE_LONGPOLL_SERIAL_PARAM="ser",t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM="cb",t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM="seg",t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET="ts",t.FIREBASE_LONGPOLL_DATA_PARAM="d",t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM="disconn",t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM="dframe";var h=function(){function e(e,t,n,i){this.connId=e,this.repoInfo=t,this.transportSessionId=n,this.lastSessionId=i,this.bytesSent=0,this.bytesReceived=0,this.bn=!1,this.de=r.logWrapper(e),this.$=o.StatsManager.getCollection(t),this.urlFn=function(e){return t.connectionURL(s.LONG_POLLING,e)}}return e.prototype.open=function(e,n){var i=this;this.curSegmentNum=0,this.z=n,this.myPacketOrderer=new a.PacketReceiver(e),this.Sn=!1,this.Tn=setTimeout(function(){i.de("Timed out trying to connect."),i.wn(),i.Tn=null},Math.floor(3e4)),r.executeWhenDOMReady(function(){if(!i.Sn){i.scriptTagHolder=new c(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=e[0],o=e[1],a=e[2];if(e[3],e[4],i.In(e),i.scriptTagHolder)if(i.Tn&&(clearTimeout(i.Tn),i.Tn=null),i.bn=!0,r==t.FIREBASE_LONGPOLL_START_PARAM)i.id=o,i.password=a;else{if(r!==t.FIREBASE_LONGPOLL_CLOSE_COMMAND)throw Error("Unrecognized command received: "+r);o?(i.scriptTagHolder.sendNewPolls=!1,i.myPacketOrderer.closeAfter(o,function(){i.wn()})):i.wn()}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],r=e[1];i.In(e),i.myPacketOrderer.handleResponse(n,r)},function(){i.wn()},i.urlFn);var e={};e[t.FIREBASE_LONGPOLL_START_PARAM]="t",e[t.FIREBASE_LONGPOLL_SERIAL_PARAM]=Math.floor(1e8*Math.random()),i.scriptTagHolder.uniqueCallbackIdentifier&&(e[t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM]=i.scriptTagHolder.uniqueCallbackIdentifier),e[s.VERSION_PARAM]=s.PROTOCOL_VERSION,i.transportSessionId&&(e[s.TRANSPORT_SESSION_PARAM]=i.transportSessionId),i.lastSessionId&&(e[s.LAST_SESSION_PARAM]=i.lastSessionId),!l.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(s.FORGE_DOMAIN)&&(e[s.REFERER_PARAM]=s.FORGE_REF);var n=i.urlFn(e);i.de("Connecting via long-poll to "+n),i.scriptTagHolder.addTag(n,function(){})}})},e.prototype.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.Rn=!0},e.forceDisallow=function(){e.On=!0},e.isAvailable=function(){return e.Rn||!e.On&&"undefined"!=typeof document&&null!=document.createElement&&!r.isChromeExtensionContentScript()&&!r.isWindowsStoreApp()&&!l.isNodeSdk()},e.prototype.markConnectionHealthy=function(){},e.prototype.An=function(){this.Sn=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.Tn&&(clearTimeout(this.Tn),this.Tn=null)},e.prototype.wn=function(){this.Sn||(this.de("Longpoll is closing itself"),this.An(),this.z&&(this.z(this.bn),this.z=null))},e.prototype.close=function(){this.Sn||(this.de("Longpoll is being closed."),this.An())},e.prototype.send=function(e){var t=u.stringify(e);this.bytesSent+=t.length,this.$.incrementCounter("bytes_sent",t.length);for(var n=u.base64Encode(t),i=r.splitStringBySize(n,1840),o=0;o<i.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[o]),this.curSegmentNum++},e.prototype.addDisconnectPingFrame=function(e,n){if(!l.isNodeSdk()){this.myDisconnFrame=document.createElement("iframe");var r={};r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM]="t",r[t.FIREBASE_LONGPOLL_ID_PARAM]=e,r[t.FIREBASE_LONGPOLL_PW_PARAM]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}},e.prototype.In=function(e){var t=u.stringify(e).length;this.bytesReceived+=t,this.$.incrementCounter("bytes_received",t)},e}();t.BrowserPollConnection=h;var c=function(){function e(n,o,a,s){if(this.onDisconnect=a,this.urlFn=s,this.outstandingRequests=new i.CountedSet,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,l.isNodeSdk())this.commandCB=n,this.onMessageCB=o;else{this.uniqueCallbackIdentifier=r.LUIDGenerator(),window[t.FIREBASE_LONGPOLL_COMMAND_CB_NAME+this.uniqueCallbackIdentifier]=n,window[t.FIREBASE_LONGPOLL_DATA_CB_NAME+this.uniqueCallbackIdentifier]=o,this.myIFrame=e.Dn();var u="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)&&(u='<script>document.domain="'+document.domain+'";<\/script>');var h="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(e){r.log("frame writing exception"),e.stack&&r.log(e.stack),r.log(e)}}}return e.Dn=function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||r.log("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e},e.prototype.close=function(){var n=this;if(this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(function(){null!==n.myIFrame&&(document.body.removeChild(n.myIFrame),n.myIFrame=null)},Math.floor(0))),l.isNodeSdk()&&this.myID){var r={};r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM]="t",r[t.FIREBASE_LONGPOLL_ID_PARAM]=this.myID,r[t.FIREBASE_LONGPOLL_PW_PARAM]=this.myPW;var i=this.urlFn(r);e.nodeRestRequest(i)}var o=this.onDisconnect;o&&(this.onDisconnect=null,o())},e.prototype.startLongPoll=function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.Mn(););},e.prototype.Mn=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.count()<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e[t.FIREBASE_LONGPOLL_ID_PARAM]=this.myID,e[t.FIREBASE_LONGPOLL_PW_PARAM]=this.myPW,e[t.FIREBASE_LONGPOLL_SERIAL_PARAM]=this.currentSerial;for(var n=this.urlFn(e),r="",i=0;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+30+r.length<=1870;){var o=this.pendingSegs.shift();r=r+"&"+t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM+i+"="+o.seg+"&"+t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET+i+"="+o.ts+"&"+t.FIREBASE_LONGPOLL_DATA_PARAM+i+"="+o.d,i++}return n+=r,this.Ln(n,this.currentSerial),!0}return!1},e.prototype.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.Mn()},e.prototype.Ln=function(e,t){var n=this;this.outstandingRequests.add(t,1);var r=function(){n.outstandingRequests.remove(t),n.Mn()},i=setTimeout(r,Math.floor(25e3)),o=function(){clearTimeout(i),r()};this.addTag(e,o)},e.prototype.addTag=function(e,t){var n=this;l.isNodeSdk()?this.doNodeLongPoll(e,t):setTimeout(function(){try{if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){r.log("Long-poll script failed to load: "+e),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}},Math.floor(1))},e}();t.FirebaseIFrameScriptHolder=c},function(e,t,n){"use strict";(function(e){function r(e){d=e}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=n(0),a=n(1),s=n(25),u=n(14),l=n(0),h=n(13),c=n(0),p=n(0),d=null;"undefined"!=typeof MozWebSocket?d=MozWebSocket:"undefined"!=typeof WebSocket&&(d=WebSocket),t.setWebSocketImpl=r;var f=function(){function t(e,n,r,i){this.connId=e,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.de=a.logWrapper(this.connId),this.$=s.StatsManager.getCollection(n),this.connURL=t.Fn(n,r,i)}return t.Fn=function(e,t,n){var r={};return r[u.VERSION_PARAM]=u.PROTOCOL_VERSION,!p.isNodeSdk()&&"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf(u.FORGE_DOMAIN)&&(r[u.REFERER_PARAM]=u.FORGE_REF),t&&(r[u.TRANSPORT_SESSION_PARAM]=t),n&&(r[u.LAST_SESSION_PARAM]=n),e.connectionURL(u.WEBSOCKET,r)},t.prototype.open=function(t,n){var r=this;this.onDisconnect=n,this.onMessage=t,this.de("Websocket connecting to "+this.connURL),this.bn=!1,h.PersistentStorage.set("previous_websocket_failure",!0);try{if(p.isNodeSdk()){var o=l.CONSTANTS.NODE_ADMIN?"AdminNode":"Node",a={headers:{"User-Agent":"Firebase/"+u.PROTOCOL_VERSION+"/"+i.default.SDK_VERSION+"/"+e.platform+"/"+o}},s=e.env,c=0==this.connURL.indexOf("wss://")?s.HTTPS_PROXY||s.https_proxy:s.HTTP_PROXY||s.http_proxy;c&&(a.proxy={origin:c}),this.mySock=new d(this.connURL,[],a)}else this.mySock=new d(this.connURL)}catch(e){this.de("Error instantiating WebSocket.");var f=e.message||e.data;return f&&this.de(f),void this.wn()}this.mySock.onopen=function(){r.de("Websocket connected."),r.bn=!0},this.mySock.onclose=function(){r.de("Websocket connection was disconnected."),r.mySock=null,r.wn()},this.mySock.onmessage=function(e){r.handleIncomingFrame(e)},this.mySock.onerror=function(e){r.de("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&r.de(t),r.wn()}},t.prototype.start=function(){},t.forceDisallow=function(){t.On=!0},t.isAvailable=function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&null!==d&&!t.On},t.previouslyFailed=function(){return h.PersistentStorage.isInMemoryStorage||!0===h.PersistentStorage.get("previous_websocket_failure")},t.prototype.markConnectionHealthy=function(){h.PersistentStorage.remove("previous_websocket_failure")},t.prototype.xn=function(e){if(this.frames.push(e),this.frames.length==this.totalFrames){var t=this.frames.join("");this.frames=null;var n=c.jsonEval(t);this.onMessage(n)}},t.prototype.kn=function(e){this.totalFrames=e,this.frames=[]},t.prototype.Wn=function(e){if(o.assert(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=+e;if(!isNaN(t))return this.kn(t),null}return this.kn(1),e},t.prototype.handleIncomingFrame=function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.$.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.xn(t);else{var n=this.Wn(t);null!==n&&this.xn(n)}}},t.prototype.send=function(e){this.resetKeepAlive();var t=c.stringify(e);this.bytesSent+=t.length,this.$.incrementCounter("bytes_sent",t.length);var n=a.splitStringBySize(t,16384);n.length>1&&this.jn(n.length+"");for(var r=0;r<n.length;r++)this.jn(n[r])},t.prototype.An=function(){this.Sn=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.prototype.wn=function(){this.Sn||(this.de("WebSocket is closing itself"),this.An(),this.onDisconnect&&(this.onDisconnect(this.bn),this.onDisconnect=null))},t.prototype.close=function(){this.Sn||(this.de("WebSocket is being closed"),this.An())},t.prototype.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(function(){e.mySock&&e.jn("0"),e.resetKeepAlive()},Math.floor(45e3))},t.prototype.jn=function(e){try{this.mySock.send(e)}catch(e){this.de("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.wn.bind(this),0)}},t.responsesRequiredToBeHealthy=2,t.healthyTimeout=3e4,t}();t.WebSocketConnection=f}).call(t,n(27))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.put=function(e,t,n,r){},e.prototype.merge=function(e,t,n,r){},e.prototype.refreshAuthToken=function(e){},e.prototype.onDisconnectPut=function(e,t,n){},e.prototype.onDisconnectMerge=function(e,t,n){},e.prototype.onDisconnectCancel=function(e,t){},e.prototype.reportStats=function(e){},e}();t.ServerActions=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(3),o=n(5),a=n(4),s=function(){function e(t){this.Vn=new r.IndexedFilter(t.getIndex()),this.me=t.getIndex(),this.Qn=e.qn(t),this.Un=e.Bn(t)}return e.prototype.getStartPost=function(){return this.Qn},e.prototype.getEndPost=function(){return this.Un},e.prototype.matches=function(e){return this.me.compare(this.getStartPost(),e)<=0&&this.me.compare(e,this.getEndPost())<=0},e.prototype.updateChild=function(e,t,n,r,i,s){return this.matches(new o.NamedNode(t,n))||(n=a.ChildrenNode.EMPTY_NODE),this.Vn.updateChild(e,t,n,r,i,s)},e.prototype.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=a.ChildrenNode.EMPTY_NODE);var r=t.withIndex(this.me);r=r.updatePriority(a.ChildrenNode.EMPTY_NODE);var s=this;return t.forEachChild(i.PRIORITY_INDEX,function(e,t){s.matches(new o.NamedNode(e,t))||(r=r.updateImmediateChild(e,a.ChildrenNode.EMPTY_NODE))}),this.Vn.updateFullNode(e,r,n)},e.prototype.updatePriority=function(e,t){return e},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.Vn},e.prototype.getIndex=function(){return this.me},e.qn=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()},e.Bn=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()},e}();t.RangedFilter=s},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(79)},function(e,t,n){"use strict";function r(t){var n=t.INTERNAL.registerService("database",function(e,t,n){return l.RepoManager.getInstance().databaseFromApp(e,n)},{Reference:s.Reference,Query:a.Query,Database:o.Database,enableLogging:u.enableLogging,INTERNAL:h,ServerValue:d,TEST_ACCESS:c},null,!0);p.isNodeSdk()&&(e.exports=n)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=n(32);t.Database=o.Database;var a=n(36);t.Query=a.Query;var s=n(21);t.Reference=s.Reference;var u=n(1);t.enableLogging=u.enableLogging;var l=n(26),h=n(111),c=n(112),p=n(0),d=o.Database.ServerValue;t.ServerValue=d,t.registerDatabase=r,r(i.default);var f=n(22);t.DataSnapshot=f.DataSnapshot;var _=n(35);t.OnDisconnect=_.OnDisconnect},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e){this.Hn=e,this.Gn="firebase:"}return e.prototype.set=function(e,t){null==t?this.Hn.removeItem(this.Kn(e)):this.Hn.setItem(this.Kn(e),r.stringify(t))},e.prototype.get=function(e){var t=this.Hn.getItem(this.Kn(e));return null==t?null:r.jsonEval(t)},e.prototype.remove=function(e){this.Hn.removeItem(this.Kn(e))},e.prototype.Kn=function(e){return this.Gn+e},e.prototype.toString=function(){return""+this.Hn},e}();t.DOMStorageWrapper=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){this.Yn={},this.isInMemoryStorage=!0}return e.prototype.set=function(e,t){null==t?delete this.Yn[e]:this.Yn[e]=t},e.prototype.get=function(e){return r.contains(this.Yn,e)?this.Yn[e]:null},e.prototype.remove=function(e){delete this.Yn[e]},e}();t.MemoryStorage=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e,t){this.committed=e,this.snapshot=t}return e.prototype.toJSON=function(){return r.validateArgCount("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}},e}();t.TransactionResult=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.nextPushId=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=0,n=[];return function(i){var o=i===t;t=i;var a,s=Array(8);for(a=7;a>=0;a--)s[a]=e.charAt(i%64),i=Math.floor(i/64);r.assert(0===i,"Cannot push at time == 0");var u=s.join("");if(o){for(a=11;a>=0&&63===n[a];a--)n[a]=0;n[a]++}else for(a=0;a<12;a++)n[a]=Math.floor(64*Math.random());for(a=0;a<12;a++)u+=e.charAt(n[a]);return r.assert(20===u.length,"nextPushId: Length should be 20."),u}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=n(85),o=n(0),a=n(0),s=function(){function e(e,t,n){this.Xn=e,this.zn=t,this.Jn=n}return e.prototype.respondsTo=function(e){return"value"===e},e.prototype.createEvent=function(e,t){var n=t.getQueryParams().getIndex();return new i.DataEvent("value",this,new r.DataSnapshot(e.snapshotNode,t.getRef(),n))},e.prototype.getEventRunner=function(e){var t=this.Jn;if("cancel"===e.getEventType()){a.assert(this.zn,"Raising a cancel event on a listener with no cancel callback");var n=this.zn;return function(){n.call(t,e.error)}}var r=this.Xn;return function(){r.call(t,e.snapshot)}},e.prototype.createCancelEvent=function(e,t){return this.zn?new i.CancelEvent(this,e,t):null},e.prototype.matches=function(t){return t instanceof e&&(!t.Xn||!this.Xn||t.Xn===this.Xn&&t.Jn===this.Jn)},e.prototype.hasAnyCallback=function(){return null!==this.Xn},e}();t.ValueEventRegistration=s;var u=function(){function e(e,t,n){this.$n=e,this.zn=t,this.Jn=n}return e.prototype.respondsTo=function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,o.contains(this.$n,t)},e.prototype.createCancelEvent=function(e,t){return this.zn?new i.CancelEvent(this,e,t):null},e.prototype.createEvent=function(e,t){a.assert(null!=e.childName,"Child events should have a childName.");var n=t.getRef().child(e.childName),o=t.getQueryParams().getIndex();return new i.DataEvent(e.type,this,new r.DataSnapshot(e.snapshotNode,n,o),e.prevName)},e.prototype.getEventRunner=function(e){var t=this.Jn;if("cancel"===e.getEventType()){a.assert(this.zn,"Raising a cancel event on a listener with no cancel callback");var n=this.zn;return function(){n.call(t,e.error)}}var r=this.$n[e.eventType];return function(){r.call(t,e.snapshot,e.prevName)}},e.prototype.matches=function(t){if(t instanceof e){if(!this.$n||!t.$n)return!0;if(this.Jn===t.Jn){var n=o.getCount(t.$n);if(n===o.getCount(this.$n)){if(1===n){var r=o.getAnyKey(t.$n),i=o.getAnyKey(this.$n);return!(i!==r||t.$n[r]&&this.$n[i]&&t.$n[r]!==this.$n[i])}return o.every(this.$n,function(e,n){return t.$n[e]===n})}}}return!1},e.prototype.hasAnyCallback=function(){return null!==this.$n},e}();t.ChildEventRegistration=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}return e.prototype.getPath=function(){var e=this.snapshot.getRef();return"value"===this.eventType?e.path:e.getParent().path},e.prototype.getEventType=function(){return this.eventType},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.getPath()+":"+this.eventType+":"+r.stringify(this.snapshot.exportVal())},e}();t.DataEvent=i;var o=function(){function e(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}return e.prototype.getPath=function(){return this.path},e.prototype.getEventType=function(){return"cancel"},e.prototype.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},e.prototype.toString=function(){return this.path+":cancel"},e}();t.CancelEvent=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(87),a=n(4),s=n(0),u=n(23),l=n(88),h=n(89),c=n(8),p=n(46),d=n(2),f=n(47),_=n(95),y=function(){function e(e){this.Zn=e,this.er=u.ImmutableTree.Empty,this.tr=new _.WriteTree,this.nr={},this.rr={}}return e.prototype.applyUserOverwrite=function(e,t,n,r){return this.tr.addOverwrite(e,t,n,r),r?this.ir(new p.Overwrite(c.OperationSource.User,e,t)):[]},e.prototype.applyUserMerge=function(e,t,n){this.tr.addMerge(e,t,n);var r=u.ImmutableTree.fromObject(t);return this.ir(new h.Merge(c.OperationSource.User,e,r))},e.prototype.ackUserWrite=function(e,t){void 0===t&&(t=!1);var n=this.tr.getWrite(e);if(this.tr.removeWrite(e)){var r=u.ImmutableTree.Empty;return null!=n.snap?r=r.set(d.Path.Empty,!0):s.forEach(n.children,function(e,t){r=r.set(new d.Path(e),t)}),this.ir(new o.AckUserWrite(n.path,r,t))}return[]},e.prototype.applyServerOverwrite=function(e,t){return this.ir(new p.Overwrite(c.OperationSource.Server,e,t))},e.prototype.applyServerMerge=function(e,t){var n=u.ImmutableTree.fromObject(t);return this.ir(new h.Merge(c.OperationSource.Server,e,n))},e.prototype.applyListenComplete=function(e){return this.ir(new l.ListenComplete(c.OperationSource.Server,e))},e.prototype.applyTaggedQueryOverwrite=function(t,n,r){var i=this.or(r);if(null!=i){var o=e.ar(i),a=o.path,s=o.queryId,u=d.Path.relativePath(a,t),l=new p.Overwrite(c.OperationSource.forServerTaggedQuery(s),u,n);return this.sr(a,l)}return[]},e.prototype.applyTaggedQueryMerge=function(t,n,r){var i=this.or(r);if(i){var o=e.ar(i),a=o.path,s=o.queryId,l=d.Path.relativePath(a,t),p=u.ImmutableTree.fromObject(n),f=new h.Merge(c.OperationSource.forServerTaggedQuery(s),l,p);return this.sr(a,f)}return[]},e.prototype.applyTaggedListenComplete=function(t,n){var r=this.or(n);if(r){var i=e.ar(r),o=i.path,a=i.queryId,s=d.Path.relativePath(o,t),u=new l.ListenComplete(c.OperationSource.forServerTaggedQuery(a),s);return this.sr(o,u)}return[]},e.prototype.addEventRegistration=function(t,n){var i=t.path,o=null,s=!1;this.er.foreachOnPath(i,function(e,t){var n=d.Path.relativePath(e,i);o=o||t.getCompleteServerCache(n),s=s||t.hasCompleteView()});var u=this.er.get(i);u?(s=s||u.hasCompleteView(),o=o||u.getCompleteServerCache(d.Path.Empty)):(u=new f.SyncPoint,this.er=this.er.set(i,u));var l;null!=o?l=!0:(l=!1,o=a.ChildrenNode.EMPTY_NODE,this.er.subtree(i).foreachChild(function(e,t){var n=t.getCompleteServerCache(d.Path.Empty);n&&(o=o.updateImmediateChild(e,n))}));var h=u.viewExistsForQuery(t);if(!h&&!t.getQueryParams().loadsAllData()){var c=e.ur(t);r.assert(!(c in this.rr),"View does not exist, but we have a tag");var p=e.lr();this.rr[c]=p,this.nr["_"+p]=c}var _=this.tr.childWrites(i),y=u.addEventRegistration(t,n,_,o,l);if(!h&&!s){var v=u.viewForQuery(t);y=y.concat(this.hr(t,v))}return y},e.prototype.removeEventRegistration=function(t,n,r){var i=this,o=t.path,a=this.er.get(o),s=[];if(a&&("default"===t.queryIdentifier()||a.viewExistsForQuery(t))){var u=a.removeEventRegistration(t,n,r);a.isEmpty()&&(this.er=this.er.remove(o));var l=u.removed;s=u.events;var h=-1!==l.findIndex(function(e){return e.getQueryParams().loadsAllData()}),c=this.er.findOnPath(o,function(e,t){return t.hasCompleteView()});if(h&&!c){var p=this.er.subtree(o);if(!p.isEmpty())for(var d=this.cr(p),f=0;f<d.length;++f){var _=d[f],y=_.getQuery(),v=this.pr(_);this.Zn.startListening(e.dr(y),this.fr(y),v.hashFn,v.onComplete)}}!c&&l.length>0&&!r&&(h?this.Zn.stopListening(e.dr(t),null):l.forEach(function(t){var n=i.rr[e.ur(t)];i.Zn.stopListening(e.dr(t),n)})),this._r(l)}return s},e.prototype.calcCompleteEventCache=function(e,t){var n=this.tr,r=this.er.findOnPath(e,function(t,n){var r=d.Path.relativePath(t,e),i=n.getCompleteServerCache(r);if(i)return i});return n.calcCompleteEventCache(e,r,t,!0)},e.prototype.cr=function(e){return e.fold(function(e,t,n){if(t&&t.hasCompleteView())return[t.getCompleteView()];var r=[];return t&&(r=t.getQueryViews()),s.forEach(n,function(e,t){r=r.concat(t)}),r})},e.prototype._r=function(t){for(var n=0;n<t.length;++n){var r=t[n];if(!r.getQueryParams().loadsAllData()){var i=e.ur(r),o=this.rr[i];delete this.rr[i],delete this.nr["_"+o]}}},e.dr=function(e){return e.getQueryParams().loadsAllData()&&!e.getQueryParams().isDefault()?e.getRef():e},e.prototype.hr=function(t,n){var i=t.path,o=this.fr(t),a=this.pr(n),u=this.Zn.startListening(e.dr(t),o,a.hashFn,a.onComplete),l=this.er.subtree(i);if(o)r.assert(!l.value.hasCompleteView(),"If we're adding a query, it shouldn't be shadowed");else for(var h=l.fold(function(e,t,n){if(!e.isEmpty()&&t&&t.hasCompleteView())return[t.getCompleteView().getQuery()];var r=[];return t&&(r=r.concat(t.getQueryViews().map(function(e){return e.getQuery()}))),s.forEach(n,function(e,t){r=r.concat(t)}),r}),c=0;c<h.length;++c){var p=h[c];this.Zn.stopListening(e.dr(p),this.fr(p))}return u},e.prototype.pr=function(e){var t=this,n=e.getQuery(),r=this.fr(n);return{hashFn:function(){return(e.getServerCache()||a.ChildrenNode.EMPTY_NODE).hash()},onComplete:function(e){if("ok"===e)return r?t.applyTaggedListenComplete(n.path,r):t.applyListenComplete(n.path);var o=i.errorForServerCode(e,n);return t.removeEventRegistration(n,null,o)}}},e.ur=function(e){return e.path+"$"+e.queryIdentifier()},e.ar=function(e){var t=e.indexOf("$");return r.assert(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new d.Path(e.substr(0,t))}},e.prototype.or=function(e){return this.nr["_"+e]},e.prototype.fr=function(t){var n=e.ur(t);return s.safeGet(this.rr,n)},e.lr=function(){return e.yr++},e.prototype.sr=function(e,t){var n=this.er.get(e);r.assert(n,"Missing sync point for query tag that we're tracking");var i=this.tr.childWrites(e);return n.applyOperation(t,i,null)},e.prototype.ir=function(e){return this.vr(e,this.er,null,this.tr.childWrites(d.Path.Empty))},e.prototype.vr=function(e,t,n,r){if(e.path.isEmpty())return this.gr(e,t,n,r);var i=t.get(d.Path.Empty);null==n&&null!=i&&(n=i.getCompleteServerCache(d.Path.Empty));var o=[],a=e.path.getFront(),s=e.operationForChild(a),u=t.children.get(a);if(u&&s){var l=n?n.getImmediateChild(a):null,h=r.child(a);o=o.concat(this.vr(s,u,l,h))}return i&&(o=o.concat(i.applyOperation(e,r,n))),o},e.prototype.gr=function(e,t,n,r){var i=this,o=t.get(d.Path.Empty);null==n&&null!=o&&(n=o.getCompleteServerCache(d.Path.Empty));var a=[];return t.children.inorderTraversal(function(t,o){var s=n?n.getImmediateChild(t):null,u=r.child(t),l=e.operationForChild(t);l&&(a=a.concat(i.gr(l,o,s,u)))}),o&&(a=a.concat(o.applyOperation(e,r,n))),a},e.yr=1,e}();t.SyncTree=y},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),o=n(8),a=function(){function e(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=o.OperationType.ACK_USER_WRITE,this.source=o.OperationSource.User}return e.prototype.operationForChild=function(t){if(this.path.isEmpty()){if(null!=this.affectedTree.value)return r.assert(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new i.Path(t));return new e(i.Path.Empty,n,this.revert)}return r.assert(this.path.getFront()===t,"operationForChild called for unrelated child."),new e(this.path.popFront(),this.affectedTree,this.revert)},e}();t.AckUserWrite=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(8),o=function(){function e(e,t){this.source=e,this.path=t,this.type=i.OperationType.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return this.path.isEmpty()?new e(this.source,r.Path.Empty):new e(this.source,this.path.popFront())},e}();t.ListenComplete=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(46),o=n(2),a=n(0),s=function(){function e(e,t,n){this.source=e,this.path=t,this.children=n,this.type=r.OperationType.MERGE}return e.prototype.operationForChild=function(t){if(this.path.isEmpty()){var n=this.children.subtree(new o.Path(t));return n.isEmpty()?null:n.value?new i.Overwrite(this.source,o.Path.Empty,n.value):new e(this.source,o.Path.Empty,n)}return a.assert(this.path.getFront()===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,this.path.popFront(),this.children)},e.prototype.toString=function(){return"Operation("+this.path+": "+this.source+" merge: "+this.children+")"},e}();t.Merge=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(91),o=n(4),a=n(19),s=n(48),u=n(94),l=n(0),h=n(8),c=n(9),p=n(3),d=function(){function e(e,t){this.mr=e,this.Cr=[];var n=this.mr.getQueryParams(),l=new r.IndexedFilter(n.getIndex()),h=n.getNodeFilter();this.Er=new i.ViewProcessor(h);var c=t.getServerCache(),p=t.getEventCache(),d=l.updateFullNode(o.ChildrenNode.EMPTY_NODE,c.getNode(),null),f=h.updateFullNode(o.ChildrenNode.EMPTY_NODE,p.getNode(),null),_=new a.CacheNode(d,c.isFullyInitialized(),l.filtersNodes()),y=new a.CacheNode(f,p.isFullyInitialized(),h.filtersNodes());this.Nr=new s.ViewCache(y,_),this.Pr=new u.EventGenerator(this.mr)}return e.prototype.getQuery=function(){return this.mr},e.prototype.getServerCache=function(){return this.Nr.getServerCache().getNode()},e.prototype.getCompleteServerCache=function(e){var t=this.Nr.getCompleteServerSnap();return t&&(this.mr.getQueryParams().loadsAllData()||!e.isEmpty()&&!t.getImmediateChild(e.getFront()).isEmpty())?t.getChild(e):null},e.prototype.isEmpty=function(){return 0===this.Cr.length},e.prototype.addEventRegistration=function(e){this.Cr.push(e)},e.prototype.removeEventRegistration=function(e,t){var n=[];if(t){l.assert(null==e,"A cancel should cancel all event registrations.");var r=this.mr.path;this.Cr.forEach(function(e){t=t;var i=e.createCancelEvent(t,r);i&&n.push(i)})}if(e){for(var i=[],o=0;o<this.Cr.length;++o){var a=this.Cr[o];if(a.matches(e)){if(e.hasAnyCallback()){i=i.concat(this.Cr.slice(o+1));break}}else i.push(a)}this.Cr=i}else this.Cr=[];return n},e.prototype.applyOperation=function(e,t,n){e.type===h.OperationType.MERGE&&null!==e.source.queryId&&(l.assert(this.Nr.getCompleteServerSnap(),"We should always have a full cache before handling merges"),l.assert(this.Nr.getCompleteEventSnap(),"Missing event cache, even though we have a server cache"));var r=this.Nr,i=this.Er.applyOperation(r,e,t,n);return this.Er.assertIndexed(i.viewCache),l.assert(i.viewCache.getServerCache().isFullyInitialized()||!r.getServerCache().isFullyInitialized(),"Once a server snap is complete, it should never go back"),this.Nr=i.viewCache,this.br(i.changes,i.viewCache.getEventCache().getNode(),null)},e.prototype.getInitialEvents=function(e){var t=this.Nr.getEventCache(),n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(p.PRIORITY_INDEX,function(e,t){n.push(c.Change.childAddedChange(e,t))}),t.isFullyInitialized()&&n.push(c.Change.valueChange(t.getNode())),this.br(n,t.getNode(),e)},e.prototype.br=function(e,t,n){var r=n?[n]:this.Cr;return this.Pr.generateEventsForChanges(e,t,r)},e}();t.View=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(0),o=n(92),a=n(9),s=n(4),u=n(10),l=n(23),h=n(2),c=n(93),p=function(){function e(e,t){this.viewCache=e,this.changes=t}return e}();t.ProcessorResult=p;var d=function(){function e(e){this.Sr=e}return e.prototype.assertIndexed=function(e){i.assert(e.getEventCache().getNode().isIndexed(this.Sr.getIndex()),"Event snap not indexed"),i.assert(e.getServerCache().getNode().isIndexed(this.Sr.getIndex()),"Server snap not indexed")},e.prototype.applyOperation=function(t,n,a,s){var u,l,h=new o.ChildChangeAccumulator;if(n.type===r.OperationType.OVERWRITE){var c=n;c.source.fromUser?u=this.Tr(t,c.path,c.snap,a,s,h):(i.assert(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.getServerCache().isFiltered()&&!c.path.isEmpty(),u=this.wr(t,c.path,c.snap,a,s,l,h))}else if(n.type===r.OperationType.MERGE){var d=n;d.source.fromUser?u=this.Ir(t,d.path,d.children,a,s,h):(i.assert(d.source.fromServer,"Unknown source."),l=d.source.tagged||t.getServerCache().isFiltered(),u=this.Rr(t,d.path,d.children,a,s,l,h))}else if(n.type===r.OperationType.ACK_USER_WRITE){var f=n;u=f.revert?this.Or(t,f.path,a,s,h):this.Ar(t,f.path,f.affectedTree,a,s,h)}else{if(n.type!==r.OperationType.LISTEN_COMPLETE)throw i.assertionError("Unknown operation type: "+n.type);u=this.Dr(t,n.path,a,h)}var _=h.getChanges();return e.Mr(t,u,_),new p(u,_)},e.Mr=function(e,t,n){var r=t.getEventCache();if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=e.getCompleteEventSnap();(n.length>0||!e.getEventCache().isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push(a.Change.valueChange(t.getCompleteEventSnap()))}},e.prototype.Lr=function(e,t,n,r,o){var a=e.getEventCache();if(null!=n.shadowingWrite(t))return e;var u=void 0,l=void 0;if(t.isEmpty())if(i.assert(e.getServerCache().isFullyInitialized(),"If change path is empty, we must have complete server data"),e.getServerCache().isFiltered()){var h=e.getCompleteServerSnap(),c=h instanceof s.ChildrenNode?h:s.ChildrenNode.EMPTY_NODE,p=n.calcCompleteEventChildren(c);u=this.Sr.updateFullNode(e.getEventCache().getNode(),p,o)}else{var d=n.calcCompleteEventCache(e.getCompleteServerSnap());u=this.Sr.updateFullNode(e.getEventCache().getNode(),d,o)}else{var f=t.getFront();if(".priority"==f){i.assert(1==t.getLength(),"Can't have a priority with additional path components");var _=a.getNode();l=e.getServerCache().getNode();var y=n.calcEventCacheAfterServerOverwrite(t,_,l);u=null!=y?this.Sr.updatePriority(_,y):a.getNode()}else{var v=t.popFront(),g=void 0;if(a.isCompleteForChild(f)){l=e.getServerCache().getNode();var m=n.calcEventCacheAfterServerOverwrite(t,a.getNode(),l);g=null!=m?a.getNode().getImmediateChild(f).updateChild(v,m):a.getNode().getImmediateChild(f)}else g=n.calcCompleteChild(f,e.getServerCache());u=null!=g?this.Sr.updateChild(a.getNode(),f,g,v,r,o):a.getNode()}}return e.updateEventSnap(u,a.isFullyInitialized()||t.isEmpty(),this.Sr.filtersNodes())},e.prototype.wr=function(e,t,n,r,i,o,a){var s,u=e.getServerCache(),l=o?this.Sr:this.Sr.getIndexedFilter();if(t.isEmpty())s=l.updateFullNode(u.getNode(),n,null);else if(l.filtersNodes()&&!u.isFiltered()){var h=u.getNode().updateChild(t,n);s=l.updateFullNode(u.getNode(),h,null)}else{var p=t.getFront();if(!u.isCompleteForPath(t)&&t.getLength()>1)return e;var d=t.popFront(),f=u.getNode().getImmediateChild(p),_=f.updateChild(d,n);s=".priority"==p?l.updatePriority(u.getNode(),_):l.updateChild(u.getNode(),p,_,d,c.NO_COMPLETE_CHILD_SOURCE,null)}var y=e.updateServerSnap(s,u.isFullyInitialized()||t.isEmpty(),l.filtersNodes()),v=new c.WriteTreeCompleteChildSource(r,y,i);return this.Lr(y,t,r,v,a)},e.prototype.Tr=function(e,t,n,r,i,o){var a,u,l=e.getEventCache(),h=new c.WriteTreeCompleteChildSource(r,e,i);if(t.isEmpty())u=this.Sr.updateFullNode(e.getEventCache().getNode(),n,o),a=e.updateEventSnap(u,!0,this.Sr.filtersNodes());else{var p=t.getFront();if(".priority"===p)u=this.Sr.updatePriority(e.getEventCache().getNode(),n),a=e.updateEventSnap(u,l.isFullyInitialized(),l.isFiltered());else{var d=t.popFront(),f=l.getNode().getImmediateChild(p),_=void 0;if(d.isEmpty())_=n;else{var y=h.getCompleteChild(p);_=null!=y?".priority"===d.getBack()&&y.getChild(d.parent()).isEmpty()?y:y.updateChild(d,n):s.ChildrenNode.EMPTY_NODE}if(f.equals(_))a=e;else{var v=this.Sr.updateChild(l.getNode(),p,_,d,h,o);a=e.updateEventSnap(v,l.isFullyInitialized(),this.Sr.filtersNodes())}}}return a},e.Fr=function(e,t){return e.getEventCache().isCompleteForChild(t)},e.prototype.Ir=function(t,n,r,i,o,a){var s=this,u=t;return r.foreach(function(r,l){var h=n.child(r);e.Fr(t,h.getFront())&&(u=s.Tr(u,h,l,i,o,a))}),r.foreach(function(r,l){var h=n.child(r);e.Fr(t,h.getFront())||(u=s.Tr(u,h,l,i,o,a))}),u},e.prototype.xr=function(e,t){return t.foreach(function(t,n){e=e.updateChild(t,n)}),e},e.prototype.Rr=function(e,t,n,r,i,o,a){var s=this;if(e.getServerCache().getNode().isEmpty()&&!e.getServerCache().isFullyInitialized())return e;var u,c=e;u=t.isEmpty()?n:l.ImmutableTree.Empty.setTree(t,n);var p=e.getServerCache().getNode();return u.children.inorderTraversal(function(t,n){if(p.hasChild(t)){var u=e.getServerCache().getNode().getImmediateChild(t),l=s.xr(u,n);c=s.wr(c,new h.Path(t),l,r,i,o,a)}}),u.children.inorderTraversal(function(t,n){var u=!e.getServerCache().isCompleteForChild(t)&&null==n.value;if(!p.hasChild(t)&&!u){var l=e.getServerCache().getNode().getImmediateChild(t),d=s.xr(l,n);c=s.wr(c,new h.Path(t),d,r,i,o,a)}}),c},e.prototype.Ar=function(e,t,n,r,i,o){if(null!=r.shadowingWrite(t))return e;var a=e.getServerCache().isFiltered(),s=e.getServerCache();if(null!=n.value){if(t.isEmpty()&&s.isFullyInitialized()||s.isCompleteForPath(t))return this.wr(e,t,s.getNode().getChild(t),r,i,a,o);if(t.isEmpty()){var c=l.ImmutableTree.Empty;return s.getNode().forEachChild(u.KEY_INDEX,function(e,t){c=c.set(new h.Path(e),t)}),this.Rr(e,t,c,r,i,a,o)}return e}var p=l.ImmutableTree.Empty;return n.foreach(function(e,n){var r=t.child(e);s.isCompleteForPath(r)&&(p=p.set(e,s.getNode().getChild(r)))}),this.Rr(e,t,p,r,i,a,o)},e.prototype.Dr=function(e,t,n,r){var i=e.getServerCache(),o=e.updateServerSnap(i.getNode(),i.isFullyInitialized()||t.isEmpty(),i.isFiltered());return this.Lr(o,t,n,c.NO_COMPLETE_CHILD_SOURCE,r)},e.prototype.Or=function(e,t,n,r,o){var a;if(null!=n.shadowingWrite(t))return e;var u=new c.WriteTreeCompleteChildSource(n,e,r),l=e.getEventCache().getNode(),p=void 0;if(t.isEmpty()||".priority"===t.getFront()){var d=void 0;if(e.getServerCache().isFullyInitialized())d=n.calcCompleteEventCache(e.getCompleteServerSnap());else{var f=e.getServerCache().getNode();i.assert(f instanceof s.ChildrenNode,"serverChildren would be complete if leaf node"),d=n.calcCompleteEventChildren(f)}d=d,p=this.Sr.updateFullNode(l,d,o)}else{var _=t.getFront(),y=n.calcCompleteChild(_,e.getServerCache());null==y&&e.getServerCache().isCompleteForChild(_)&&(y=l.getImmediateChild(_)),p=null!=y?this.Sr.updateChild(l,_,y,t.popFront(),u,o):e.getEventCache().getNode().hasChild(_)?this.Sr.updateChild(l,_,s.ChildrenNode.EMPTY_NODE,t.popFront(),u,o):l,p.isEmpty()&&e.getServerCache().isFullyInitialized()&&(a=n.calcCompleteEventCache(e.getCompleteServerSnap()),a.isLeafNode()&&(p=this.Sr.updateFullNode(p,a,o)))}return a=e.getServerCache().isFullyInitialized()||null!=n.shadowingWrite(h.Path.Empty),e.updateEventSnap(p,a,this.Sr.filtersNodes())},e}();t.ViewProcessor=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(9),o=n(0),a=function(){function e(){this.kr={}}return e.prototype.trackChildChange=function(e){var t=e.type,n=e.childName;o.assert(t==i.Change.CHILD_ADDED||t==i.Change.CHILD_CHANGED||t==i.Change.CHILD_REMOVED,"Only child changes supported for tracking"),o.assert(".priority"!==n,"Only non-priority child changes can be tracked.");var a=r.safeGet(this.kr,n);if(a){var s=a.type;if(t==i.Change.CHILD_ADDED&&s==i.Change.CHILD_REMOVED)this.kr[n]=i.Change.childChangedChange(n,e.snapshotNode,a.snapshotNode);else if(t==i.Change.CHILD_REMOVED&&s==i.Change.CHILD_ADDED)delete this.kr[n];else if(t==i.Change.CHILD_REMOVED&&s==i.Change.CHILD_CHANGED)this.kr[n]=i.Change.childRemovedChange(n,a.oldSnap);else if(t==i.Change.CHILD_CHANGED&&s==i.Change.CHILD_ADDED)this.kr[n]=i.Change.childAddedChange(n,e.snapshotNode);else{if(t!=i.Change.CHILD_CHANGED||s!=i.Change.CHILD_CHANGED)throw o.assertionError("Illegal combination of changes: "+e+" occurred after "+a);this.kr[n]=i.Change.childChangedChange(n,e.snapshotNode,a.oldSnap)}}else this.kr[n]=e},e.prototype.getChanges=function(){return r.getValues(this.kr)},e}();t.ChildChangeAccumulator=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(19),i=function(){function e(){}return e.prototype.getCompleteChild=function(e){return null},e.prototype.getChildAfterChild=function(e,t,n){return null},e}();t.Wr=i,t.NO_COMPLETE_CHILD_SOURCE=new i;var o=function(){function e(e,t,n){void 0===n&&(n=null),this.jr=e,this.Nr=t,this.Vr=n}return e.prototype.getCompleteChild=function(e){var t=this.Nr.getEventCache();if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.Vr?new r.CacheNode(this.Vr,!0,!1):this.Nr.getServerCache();return this.jr.calcCompleteChild(e,n)},e.prototype.getChildAfterChild=function(e,t,n){var r=null!=this.Vr?this.Vr:this.Nr.getCompleteServerSnap(),i=this.jr.calcIndexedSlice(r,t,1,n,e);return 0===i.length?null:i[0]},e}();t.WriteTreeCompleteChildSource=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(9),o=n(0),a=function(){function e(e){this.mr=e,this.me=this.mr.getQueryParams().getIndex()}return e.prototype.generateEventsForChanges=function(e,t,n){var r=this,o=[],a=[];return e.forEach(function(e){e.type===i.Change.CHILD_CHANGED&&r.me.indexedValueChanged(e.oldSnap,e.snapshotNode)&&a.push(i.Change.childMovedChange(e.childName,e.snapshotNode))}),this.Qr(o,i.Change.CHILD_REMOVED,e,n,t),this.Qr(o,i.Change.CHILD_ADDED,e,n,t),this.Qr(o,i.Change.CHILD_MOVED,a,n,t),this.Qr(o,i.Change.CHILD_CHANGED,e,n,t),this.Qr(o,i.Change.VALUE,e,n,t),o},e.prototype.Qr=function(e,t,n,r,i){var o=this,a=n.filter(function(e){return e.type===t});a.sort(this.qr.bind(this)),a.forEach(function(t){var n=o.Ur(t,i);r.forEach(function(r){r.respondsTo(t.type)&&e.push(r.createEvent(n,o.mr))})})},e.prototype.Ur=function(e,t){return"value"===e.type||"child_removed"===e.type?e:(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,this.me),e)},e.prototype.qr=function(e,t){if(null==e.childName||null==t.childName)throw o.assertionError("Should only compare child_ events.");var n=new r.NamedNode(e.childName,e.snapshotNode),i=new r.NamedNode(t.childName,t.snapshotNode);return this.me.compare(n,i)},e}();t.EventGenerator=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),o=n(2),a=n(96),s=n(3),u=n(4),l=function(){function e(){this.Br=a.CompoundWrite.Empty,this.Hr=[],this.Gr=-1}return e.prototype.childWrites=function(e){return new h(e,this)},e.prototype.addOverwrite=function(e,t,n,r){i.assert(n>this.Gr,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),this.Hr.push({path:e,snap:t,writeId:n,visible:r}),r&&(this.Br=this.Br.addWrite(e,t)),this.Gr=n},e.prototype.addMerge=function(e,t,n){i.assert(n>this.Gr,"Stacking an older merge on top of newer ones"),this.Hr.push({path:e,children:t,writeId:n,visible:!0}),this.Br=this.Br.addWrites(e,t),this.Gr=n},e.prototype.getWrite=function(e){for(var t=0;t<this.Hr.length;t++){var n=this.Hr[t];if(n.writeId===e)return n}return null},e.prototype.removeWrite=function(e){var t=this,n=this.Hr.findIndex(function(t){return t.writeId===e});i.assert(n>=0,"removeWrite called with nonexistent writeId.");var o=this.Hr[n];this.Hr.splice(n,1);for(var a=o.visible,s=!1,u=this.Hr.length-1;a&&u>=0;){var l=this.Hr[u];l.visible&&(u>=n&&this.Kr(l,o.path)?a=!1:o.path.contains(l.path)&&(s=!0)),u--}if(a){if(s)return this.Yr(),!0;if(o.snap)this.Br=this.Br.removeWrite(o.path);else{var h=o.children;r.forEach(h,function(e){t.Br=t.Br.removeWrite(o.path.child(e))})}return!0}return!1},e.prototype.getCompleteWriteData=function(e){return this.Br.getCompleteNode(e)},e.prototype.calcCompleteEventCache=function(t,n,r,i){if(r||i){var a=this.Br.childCompoundWrite(t);if(!i&&a.isEmpty())return n;if(i||null!=n||a.hasCompleteWrite(o.Path.Empty)){var s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(e.path.contains(t)||t.contains(e.path))},l=e.Xr(this.Hr,s,t),h=n||u.ChildrenNode.EMPTY_NODE;return l.apply(h)}return null}var c=this.Br.getCompleteNode(t);if(null!=c)return c;var p=this.Br.childCompoundWrite(t);if(p.isEmpty())return n;if(null!=n||p.hasCompleteWrite(o.Path.Empty)){var h=n||u.ChildrenNode.EMPTY_NODE;return p.apply(h)}return null},e.prototype.calcCompleteEventChildren=function(e,t){var n=u.ChildrenNode.EMPTY_NODE,r=this.Br.getCompleteNode(e);if(r)return r.isLeafNode()||r.forEachChild(s.PRIORITY_INDEX,function(e,t){n=n.updateImmediateChild(e,t)}),n;if(t){var i=this.Br.childCompoundWrite(e);return t.forEachChild(s.PRIORITY_INDEX,function(e,t){var r=i.childCompoundWrite(new o.Path(e)).apply(t);n=n.updateImmediateChild(e,r)}),i.getCompleteChildren().forEach(function(e){n=n.updateImmediateChild(e.name,e.node)}),n}return this.Br.childCompoundWrite(e).getCompleteChildren().forEach(function(e){n=n.updateImmediateChild(e.name,e.node)}),n},e.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n,r){i.assert(n||r,"Either existingEventSnap or existingServerSnap must exist");var o=e.child(t);if(this.Br.hasCompleteWrite(o))return null;var a=this.Br.childCompoundWrite(o);return a.isEmpty()?r.getChild(t):a.apply(r.getChild(t))},e.prototype.calcCompleteChild=function(e,t,n){var r=e.child(t),i=this.Br.getCompleteNode(r);return null!=i?i:n.isCompleteForChild(t)?this.Br.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)):null},e.prototype.shadowingWrite=function(e){return this.Br.getCompleteNode(e)},e.prototype.calcIndexedSlice=function(e,t,n,r,i,a){var s,u=this.Br.childCompoundWrite(e),l=u.getCompleteNode(o.Path.Empty);if(null!=l)s=l;else{if(null==t)return[];s=u.apply(t)}if(s=s.withIndex(a),s.isEmpty()||s.isLeafNode())return[];for(var h=[],c=a.getCompare(),p=i?s.getReverseIteratorFrom(n,a):s.getIteratorFrom(n,a),d=p.getNext();d&&h.length<r;)0!==c(d,n)&&h.push(d),d=p.getNext();return h},e.prototype.Kr=function(e,t){return e.snap?e.path.contains(t):!!r.findKey(e.children,function(n,r){return e.path.child(r).contains(t)})},e.prototype.Yr=function(){this.Br=e.Xr(this.Hr,e.zr,o.Path.Empty),this.Hr.length>0?this.Gr=this.Hr[this.Hr.length-1].writeId:this.Gr=-1},e.zr=function(e){return e.visible},e.Xr=function(e,t,n){for(var s=a.CompoundWrite.Empty,u=0;u<e.length;++u){var l=e[u];if(t(l)){var h=l.path,c=void 0;if(l.snap)n.contains(h)?(c=o.Path.relativePath(n,h),s=s.addWrite(c,l.snap)):h.contains(n)&&(c=o.Path.relativePath(h,n),s=s.addWrite(o.Path.Empty,l.snap.getChild(c)));else{if(!l.children)throw i.assertionError("WriteRecord should have .snap or .children");if(n.contains(h))c=o.Path.relativePath(n,h),s=s.addWrites(c,l.children);else if(h.contains(n))if(c=o.Path.relativePath(h,n),c.isEmpty())s=s.addWrites(o.Path.Empty,l.children);else{var p=r.safeGet(l.children,c.getFront());if(p){var d=p.getChild(c.popFront());s=s.addWrite(o.Path.Empty,d)}}}}}return s},e}();t.WriteTree=l;var h=function(){function e(e,t){this.Jr=e,this.$r=t}return e.prototype.calcCompleteEventCache=function(e,t,n){return this.$r.calcCompleteEventCache(this.Jr,e,t,n)},e.prototype.calcCompleteEventChildren=function(e){return this.$r.calcCompleteEventChildren(this.Jr,e)},e.prototype.calcEventCacheAfterServerOverwrite=function(e,t,n){return this.$r.calcEventCacheAfterServerOverwrite(this.Jr,e,t,n)},e.prototype.shadowingWrite=function(e){return this.$r.shadowingWrite(this.Jr.child(e))},e.prototype.calcIndexedSlice=function(e,t,n,r,i){return this.$r.calcIndexedSlice(this.Jr,e,t,n,r,i)},e.prototype.calcCompleteChild=function(e,t){return this.$r.calcCompleteChild(this.Jr,e,t)},e.prototype.child=function(t){return new e(this.Jr.child(t),this.$r)},e}();t.WriteTreeRef=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23),i=n(2),o=n(0),a=n(5),s=n(3),u=n(0),l=function(){function e(e){this.$r=e}return e.prototype.addWrite=function(t,n){if(t.isEmpty())return new e(new r.ImmutableTree(n));var o=this.$r.findRootMostValueAndPath(t);if(null!=o){var a=o.path,s=o.value,u=i.Path.relativePath(a,t);return s=s.updateChild(u,n),new e(this.$r.set(a,s))}var l=new r.ImmutableTree(n);return new e(this.$r.setTree(t,l))},e.prototype.addWrites=function(e,t){var n=this;return o.forEach(t,function(t,r){n=n.addWrite(e.child(t),r)}),n},e.prototype.removeWrite=function(t){return t.isEmpty()?e.Empty:new e(this.$r.setTree(t,r.ImmutableTree.Empty))},e.prototype.hasCompleteWrite=function(e){return null!=this.getCompleteNode(e)},e.prototype.getCompleteNode=function(e){var t=this.$r.findRootMostValueAndPath(e);return null!=t?this.$r.get(t.path).getChild(i.Path.relativePath(t.path,e)):null},e.prototype.getCompleteChildren=function(){var e=[],t=this.$r.value;return null!=t?t.isLeafNode()||t.forEachChild(s.PRIORITY_INDEX,function(t,n){e.push(new a.NamedNode(t,n))}):this.$r.children.inorderTraversal(function(t,n){null!=n.value&&e.push(new a.NamedNode(t,n.value))}),e},e.prototype.childCompoundWrite=function(t){if(t.isEmpty())return this;var n=this.getCompleteNode(t);return new e(null!=n?new r.ImmutableTree(n):this.$r.subtree(t))},e.prototype.isEmpty=function(){return this.$r.isEmpty()},e.prototype.apply=function(t){return e.Zr(i.Path.Empty,this.$r,t)},e.Empty=new e(new r.ImmutableTree(null)),e.Zr=function(t,n,r){if(null!=n.value)return r.updateChild(t,n.value);var i=null;return n.children.inorderTraversal(function(n,o){".priority"===n?(u.assert(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):r=e.Zr(t.child(n),o,r)}),r.getChild(t).isEmpty()||null===i||(r=r.updateChild(t.child(".priority"),i)),r},e}();t.CompoundWrite=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=function(){function e(){this.ei=r.ChildrenNode.EMPTY_NODE}return e.prototype.getNode=function(e){return this.ei.getChild(e)},e.prototype.updateSnapshot=function(e,t){this.ei=this.ei.updateChild(e,t)},e}();t.SnapshotHolder=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(e){this.ti=e}return e.prototype.getToken=function(e){return this.ti.INTERNAL.getToken(e).then(null,function(e){return e&&"auth/token-not-initialized"===e.code?(r.log("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})},e.prototype.addTokenChangeListener=function(e){this.ti.INTERNAL.addAuthTokenListener(e)},e.prototype.removeTokenChangeListener=function(e){this.ti.INTERNAL.removeAuthTokenListener(e)},e.prototype.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.ti.name+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.ti.options?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.ti.options?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',r.warn(e)},e}();t.AuthTokenProvider=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(0),o=function(){function e(){this.ni={}}return e.prototype.incrementCounter=function(e,t){void 0===t&&(t=1),i.contains(this.ni,e)||(this.ni[e]=0),this.ni[e]+=t},e.prototype.get=function(){return r.deepCopy(this.ni)},e}();t.StatsCollection=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(49),a=1e4,s=3e4,u=function(){function e(e,t){this.Z=t,this.ri={},this.G=new o.StatsListener(e);var n=a+(s-a)*Math.random();i.setTimeoutNonBlocking(this.ii.bind(this),Math.floor(n))}return e.prototype.includeStat=function(e){this.ri[e]=!0},e.prototype.ii=function(){var e=this,t=this.G.get(),n={},o=!1;r.forEach(t,function(t,i){i>0&&r.contains(e.ri,t)&&(n[t]=i,o=!0)}),o&&this.Z.reportStats(n),i.setTimeoutNonBlocking(this.ii.bind(this),Math.floor(2*Math.random()*3e5))},e}();t.StatsReporter=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(){this.oi=[],this.ai=0}return e.prototype.queueEvents=function(e){for(var t=null,n=0;n<e.length;n++){var r=e[n],i=r.getPath();null===t||i.equals(t.getPath())||(this.oi.push(t),t=null),null===t&&(t=new o(i)),t.add(r)}t&&this.oi.push(t)},e.prototype.raiseEventsAtPath=function(e,t){this.queueEvents(t),this.si(function(t){return t.equals(e)})},e.prototype.raiseEventsForChangedPath=function(e,t){this.queueEvents(t),this.si(function(t){return t.contains(e)||e.contains(t)})},e.prototype.si=function(e){this.ai++;for(var t=!0,n=0;n<this.oi.length;n++){var r=this.oi[n];r&&(e(r.getPath())?(this.oi[n].raise(),this.oi[n]=null):t=!1)}t&&(this.oi=[]),this.ai--},e}();t.EventQueue=i;var o=function(){function e(e){this.Oe=e,this.ui=[]}return e.prototype.add=function(e){this.ui.push(e)},e.prototype.raise=function(){for(var e=0;e<this.ui.length;e++){var t=this.ui[e];if(null!==t){this.ui[e]=null;var n=t.getEventRunner();r.logger&&r.log("event: "+t),r.exceptionGuard(n)}}},e.prototype.getPath=function(){return this.Oe},e}();t.EventList=o},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(51),o=n(0),a=function(e){function t(){var t,n,r=e.call(this,["visible"])||this;return"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(n="visibilitychange",t="hidden"):void 0!==document.mozHidden?(n="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(n="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(n="webkitvisibilitychange",t="webkitHidden")),r.at=!0,n&&document.addEventListener(n,function(){var e=!document[t];e!==r.at&&(r.at=e,r.trigger("visible",e))},!1),r}return r(t,e),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(e){return o.assert("visible"===e,"Unknown event type: "+e),[this.at]},t}(i.EventEmitter);t.VisibilityMonitor=a},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(51),a=n(0),s=function(e){function t(){var t=e.call(this,["online"])||this;return t.li=!0,"undefined"==typeof window||void 0===window.addEventListener||a.isMobileCordova()||(window.addEventListener("online",function(){t.li||(t.li=!0,t.trigger("online",!0))},!1),window.addEventListener("offline",function(){t.li&&(t.li=!1,t.trigger("online",!1))},!1)),t}return r(t,e),t.getInstance=function(){return new t},t.prototype.getInitialEvent=function(e){return i.assert("online"===e,"Unknown event type: "+e),[this.li]},t.prototype.currentlyOnline=function(){return this.li},t}(o.EventEmitter);t.OnlineMonitor=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(53),i=n(54),o=n(1),a=function(){function e(e){this.hi(e)}return Object.defineProperty(e,"ALL_TRANSPORTS",{get:function(){return[r.BrowserPollConnection,i.WebSocketConnection]},enumerable:!0,configurable:!0}),e.prototype.hi=function(t){var n=i.WebSocketConnection&&i.WebSocketConnection.isAvailable(),r=n&&!i.WebSocketConnection.previouslyFailed();if(t.webSocketOnly&&(n||o.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.ci=[i.WebSocketConnection];else{var a=this.ci=[];o.each(e.ALL_TRANSPORTS,function(e,t){t&&t.isAvailable()&&a.push(t)})}},e.prototype.initialTransport=function(){if(this.ci.length>0)return this.ci[0];throw Error("No transports available")},e.prototype.upgradeTransport=function(){return this.ci.length>1?this.ci[1]:null},e}();t.TransportManager=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(e){this.Ut=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e.prototype.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},e.prototype.handleResponse=function(e,t){var n=this;this.pendingResponses[e]=t;for(var i=this;this.pendingResponses[this.currentResponseNum]&&"break"!==function(){var e=i.pendingResponses[i.currentResponseNum];delete i.pendingResponses[i.currentResponseNum];for(var t=0;t<e.length;++t)!function(t){e[t]&&r.exceptionGuard(function(){n.Ut(e[t])})}(t);if(i.currentResponseNum===i.closeAfterResponse)return i.onClose&&(i.onClose(),i.onClose=null),"break";i.currentResponseNum++}(););},e}();t.PacketReceiver=i},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),o=n(1),a=n(0),s=n(0),u=n(0),l=n(55),h=function(e){function t(t,n,r){var i=e.call(this)||this;return i.H=t,i.ee=n,i.Ke=r,i.de=o.logWrapper("p:rest:"),i.Je={},i}return r(t,e),t.prototype.reportStats=function(e){throw Error("Method not implemented.")},t.pi=function(e,t){return void 0!==t?"tag$"+t:(i.assert(e.getQueryParams().isDefault(),"should have a tag if it's not a default query."),""+e.path)},t.prototype.listen=function(e,n,r,i){var o=this,a=""+e.path;this.de("Listen called for "+a+" "+e.queryIdentifier());var u=t.pi(e,r),l={};this.Je[u]=l;var h=e.getQueryParams().toRestQueryStringParameters();this.di(a+".json",h,function(e,t){var n=t;if(404===e&&(n=null,e=null),null===e&&o.ee(a,n,!1,r),s.safeGet(o.Je,u)===l){var h;h=e?401==e?"permission_denied":"rest_error:"+e:"ok",i(h,null)}})},t.prototype.unlisten=function(e,n){var r=t.pi(e,n);delete this.Je[r]},t.prototype.refreshAuthToken=function(e){},t.prototype.di=function(e,t,n){var r=this;void 0===t&&(t={}),t.format="export",this.Ke.getToken(!1).then(function(i){var s=i&&i.accessToken;s&&(t.auth=s);var l=(r.H.secure?"https://":"http://")+r.H.host+e+"?"+u.querystring(t);r.de("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(n&&4===h.readyState){r.de("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=a.jsonEval(h.responseText)}catch(e){o.warn("Failed to parse JSON response for "+l+": "+h.responseText)}n(null,e)}else 401!==h.status&&404!==h.status&&o.warn("Got unsuccessful REST response for "+l+" Status: "+h.status),n(h.status);n=null}},h.open("GET",l,!0),h.send()})},t}(l.ServerActions);t.ReadonlyRestClient=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(10),a=n(3),s=n(38),u=n(42),l=n(24),h=n(108),c=n(56),p=n(0),d=function(){function e(){this.fi=!1,this._i=!1,this.yi=!1,this.vi=!1,this.gi=!1,this.mi=0,this.Ci="",this.Ei=null,this.Ni="",this.Pi=null,this.bi="",this.me=a.PRIORITY_INDEX}return e.prototype.hasStart=function(){return this._i},e.prototype.isViewFromLeft=function(){return""===this.Ci?this._i:this.Ci===e.Si.VIEW_FROM_LEFT},e.prototype.getIndexStartValue=function(){return r.assert(this._i,"Only valid if start has been set"),this.Ei},e.prototype.getIndexStartName=function(){return r.assert(this._i,"Only valid if start has been set"),this.yi?this.Ni:i.MIN_NAME},e.prototype.hasEnd=function(){return this.vi},e.prototype.getIndexEndValue=function(){return r.assert(this.vi,"Only valid if end has been set"),this.Pi},e.prototype.getIndexEndName=function(){return r.assert(this.vi,"Only valid if end has been set"),this.gi?this.bi:i.MAX_NAME},e.prototype.hasLimit=function(){return this.fi},e.prototype.hasAnchoredLimit=function(){return this.fi&&""!==this.Ci},e.prototype.getLimit=function(){return r.assert(this.fi,"Only valid if limit has been set"),this.mi},e.prototype.getIndex=function(){return this.me},e.prototype.Ti=function(){var t=new e;return t.fi=this.fi,t.mi=this.mi,t._i=this._i,t.Ei=this.Ei,t.yi=this.yi,t.Ni=this.Ni,t.vi=this.vi,t.Pi=this.Pi,t.gi=this.gi,t.bi=this.bi,t.me=this.me,t.Ci=this.Ci,t},e.prototype.limit=function(e){var t=this.Ti();return t.fi=!0,t.mi=e,t.Ci="",t},e.prototype.limitToFirst=function(t){var n=this.Ti();return n.fi=!0,n.mi=t,n.Ci=e.Si.VIEW_FROM_LEFT,n},e.prototype.limitToLast=function(t){var n=this.Ti();return n.fi=!0,n.mi=t,n.Ci=e.Si.VIEW_FROM_RIGHT,n},e.prototype.startAt=function(e,t){var n=this.Ti();return n._i=!0,void 0===e&&(e=null),n.Ei=e,null!=t?(n.yi=!0,n.Ni=t):(n.yi=!1,n.Ni=""),n},e.prototype.endAt=function(e,t){var n=this.Ti();return n.vi=!0,void 0===e&&(e=null),n.Pi=e,void 0!==t?(n.gi=!0,n.bi=t):(n.gi=!1,n.bi=""),n},e.prototype.orderBy=function(e){var t=this.Ti();return t.me=e,t},e.prototype.getQueryObject=function(){var t=e.Si,n={};if(this._i&&(n[t.INDEX_START_VALUE]=this.Ei,this.yi&&(n[t.INDEX_START_NAME]=this.Ni)),this.vi&&(n[t.INDEX_END_VALUE]=this.Pi,this.gi&&(n[t.INDEX_END_NAME]=this.bi)),this.fi){n[t.LIMIT]=this.mi;var r=this.Ci;""===r&&(r=this.isViewFromLeft()?t.VIEW_FROM_LEFT:t.VIEW_FROM_RIGHT),n[t.VIEW_FROM]=r}return this.me!==a.PRIORITY_INDEX&&(n[t.INDEX]=""+this.me),n},e.prototype.loadsAllData=function(){return!(this._i||this.vi||this.fi)},e.prototype.isDefault=function(){return this.loadsAllData()&&this.me==a.PRIORITY_INDEX},e.prototype.getNodeFilter=function(){return this.loadsAllData()?new l.IndexedFilter(this.getIndex()):this.hasLimit()?new h.LimitedFilter(this):new c.RangedFilter(this)},e.prototype.toRestQueryStringParameters=function(){var t=e.wi,n={};if(this.isDefault())return n;var i;return this.me===a.PRIORITY_INDEX?i=t.PRIORITY_INDEX:this.me===s.VALUE_INDEX?i=t.VALUE_INDEX:this.me===o.KEY_INDEX?i=t.KEY_INDEX:(r.assert(this.me instanceof u.PathIndex,"Unrecognized index type!"),i=""+this.me),n[t.ORDER_BY]=p.stringify(i),this._i&&(n[t.START_AT]=p.stringify(this.Ei),this.yi&&(n[t.START_AT]+=","+p.stringify(this.Ni))),this.vi&&(n[t.END_AT]=p.stringify(this.Pi),this.gi&&(n[t.END_AT]+=","+p.stringify(this.bi))),this.fi&&(this.isViewFromLeft()?n[t.LIMIT_TO_FIRST]=this.mi:n[t.LIMIT_TO_LAST]=this.mi),n},e.Si={INDEX_START_VALUE:"sp",INDEX_START_NAME:"sn",INDEX_END_VALUE:"ep",INDEX_END_NAME:"en",LIMIT:"l",VIEW_FROM:"vf",VIEW_FROM_LEFT:"l",VIEW_FROM_RIGHT:"r",INDEX:"i"},e.wi={ORDER_BY:"orderBy",PRIORITY_INDEX:"$priority",VALUE_INDEX:"$value",KEY_INDEX:"$key",START_AT:"startAt",END_AT:"endAt",LIMIT_TO_FIRST:"limitToFirst",LIMIT_TO_LAST:"limitToLast"},e.DEFAULT=new e,e}();t.QueryParams=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56),i=n(4),o=n(5),a=n(0),s=n(9),u=function(){function e(e){this.Ii=new r.RangedFilter(e),this.me=e.getIndex(),this.mi=e.getLimit(),this.Ri=!e.isViewFromLeft()}return e.prototype.updateChild=function(e,t,n,r,a,s){return this.Ii.matches(new o.NamedNode(t,n))||(n=i.ChildrenNode.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.mi?this.Ii.getIndexedFilter().updateChild(e,t,n,r,a,s):this.Oi(e,t,n,a,s)},e.prototype.updateFullNode=function(e,t,n){var r;if(t.isLeafNode()||t.isEmpty())r=i.ChildrenNode.EMPTY_NODE.withIndex(this.me);else if(2*this.mi<t.numChildren()&&t.isIndexed(this.me)){r=i.ChildrenNode.EMPTY_NODE.withIndex(this.me);var o=void 0;o=this.Ri?t.getReverseIteratorFrom(this.Ii.getEndPost(),this.me):t.getIteratorFrom(this.Ii.getStartPost(),this.me);for(var a=0;o.hasNext()&&a<this.mi;){var s=o.getNext(),u=void 0;if(!(u=this.Ri?this.me.compare(this.Ii.getStartPost(),s)<=0:this.me.compare(s,this.Ii.getEndPost())<=0))break;r=r.updateImmediateChild(s.name,s.node),a++}}else{r=t.withIndex(this.me),r=r.updatePriority(i.ChildrenNode.EMPTY_NODE);var l=void 0,h=void 0,c=void 0,o=void 0;if(this.Ri){o=r.getReverseIterator(this.me),l=this.Ii.getEndPost(),h=this.Ii.getStartPost();var p=this.me.getCompare();c=function(e,t){return p(t,e)}}else o=r.getIterator(this.me),l=this.Ii.getStartPost(),h=this.Ii.getEndPost(),c=this.me.getCompare();for(var a=0,d=!1;o.hasNext();){var s=o.getNext();!d&&c(l,s)<=0&&(d=!0);var u=d&&a<this.mi&&c(s,h)<=0;u?a++:r=r.updateImmediateChild(s.name,i.ChildrenNode.EMPTY_NODE)}}return this.Ii.getIndexedFilter().updateFullNode(e,r,n)},e.prototype.updatePriority=function(e,t){return e},e.prototype.filtersNodes=function(){return!0},e.prototype.getIndexedFilter=function(){return this.Ii.getIndexedFilter()},e.prototype.getIndex=function(){return this.me},e.prototype.Oi=function(e,t,n,r,u){var l;if(this.Ri){var h=this.me.getCompare();l=function(e,t){return h(t,e)}}else l=this.me.getCompare();var c=e;a.assert(c.numChildren()==this.mi,"");var p=new o.NamedNode(t,n),d=this.Ri?c.getFirstChild(this.me):c.getLastChild(this.me),f=this.Ii.matches(p);if(c.hasChild(t)){for(var _=c.getImmediateChild(t),y=r.getChildAfterChild(this.me,d,this.Ri);null!=y&&(y.name==t||c.hasChild(y.name));)y=r.getChildAfterChild(this.me,y,this.Ri);var v=null==y?1:l(y,p);if(f&&!n.isEmpty()&&v>=0)return null!=u&&u.trackChildChange(s.Change.childChangedChange(t,n,_)),c.updateImmediateChild(t,n);null!=u&&u.trackChildChange(s.Change.childRemovedChange(t,_));var g=c.updateImmediateChild(t,i.ChildrenNode.EMPTY_NODE);return null!=y&&this.Ii.matches(y)?(null!=u&&u.trackChildChange(s.Change.childAddedChange(y.name,y.node)),g.updateImmediateChild(y.name,y.node)):g}return n.isEmpty()?e:f&&l(d,p)>=0?(null!=u&&(u.trackChildChange(s.Change.childRemovedChange(d.name,d.node)),u.trackChildChange(s.Change.childAddedChange(t,n))),c.updateImmediateChild(t,n).updateImmediateChild(d.name,i.ChildrenNode.EMPTY_NODE)):e},e}();t.LimitedFilter=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=n(21),a=n(22),s=n(2),u=n(110),l=n(3),h=n(1),c=n(43),p=n(7),d=n(0),f=n(11),_=n(4),y=n(18);!function(e){e[e.RUN=0]="RUN",e[e.SENT=1]="SENT",e[e.COMPLETED=2]="COMPLETED",e[e.SENT_NEEDS_ABORT=3]="SENT_NEEDS_ABORT",e[e.NEEDS_ABORT=4]="NEEDS_ABORT"}(r=t.TransactionStatus||(t.TransactionStatus={})),y.Repo.Ai=25,y.Repo.prototype.ie=function(){this.Di=new u.Tree},y.Repo.prototype.startTransaction=function(e,t,n,s){this.de("transaction on "+e);var u=function(){},y=new o.Reference(this,e);y.on("value",u);var v=function(){y.off("value",u)},g={path:e,update:t,onComplete:n,status:null,order:h.LUIDGenerator(),applyLocally:s,retryCount:0,unwatcher:v,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},m=this.Mi(e);g.currentInputSnapshot=m;var C=g.update(m.val());if(void 0===C){if(g.unwatcher(),g.currentOutputSnapshotRaw=null,g.currentOutputSnapshotResolved=null,g.onComplete){var E=new a.DataSnapshot(g.currentInputSnapshot,new o.Reference(this,g.path),l.PRIORITY_INDEX);g.onComplete(null,!1,E)}}else{p.validateFirebaseData("transaction failed: Data returned ",C,g.path),g.status=r.RUN;var N=this.Di.subTree(e),P=N.getValue()||[];P.push(g),N.setValue(P);var b=void 0;"object"==typeof C&&null!==C&&d.contains(C,".priority")?(b=d.safeGet(C,".priority"),i.assert(p.isValidPriority(b),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):b=(this.ue.calcCompleteEventCache(e)||_.ChildrenNode.EMPTY_NODE).getPriority().val(),b=b;var S=this.generateServerValues(),T=f.nodeFromJSON(C,b),w=c.resolveDeferredValueSnapshot(T,S);g.currentOutputSnapshotRaw=T,g.currentOutputSnapshotResolved=w,g.currentWriteId=this.pe();var I=this.ue.applyUserOverwrite(e,w,g.currentWriteId,g.applyLocally);this.K.raiseEventsForChangedPath(e,I),this.Li()}},y.Repo.prototype.Mi=function(e,t){return this.ue.calcCompleteEventCache(e,t)||_.ChildrenNode.EMPTY_NODE},y.Repo.prototype.Li=function(e){var t=this;if(void 0===e&&(e=this.Di),e||this.Fi(e),null!==e.getValue()){var n=this.xi(e);i.assert(n.length>0,"Sending zero length transaction queue"),n.every(function(e){return e.status===r.RUN})&&this.ki(e.path(),n)}else e.hasChildren()&&e.forEachChild(function(e){t.Li(e)})},y.Repo.prototype.ki=function(e,t){for(var n=this,u=t.map(function(e){return e.currentWriteId}),c=this.Mi(e,u),p=c,d=c.hash(),f=0;f<t.length;f++){var _=t[f];i.assert(_.status===r.RUN,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=r.SENT,_.retryCount++;var y=s.Path.relativePath(e,_.path);p=p.updateChild(y,_.currentOutputSnapshotRaw)}var v=p.val(!0),g=e;this.Z.put(""+g,v,function(i){n.de("transaction put response",{path:""+g,status:i});var s=[];if("ok"===i){for(var u=[],c=0;c<t.length;c++){if(t[c].status=r.COMPLETED,s=s.concat(n.ue.ackUserWrite(t[c].currentWriteId)),t[c].onComplete){var p=t[c].currentOutputSnapshotResolved,d=new o.Reference(n,t[c].path),f=new a.DataSnapshot(p,d,l.PRIORITY_INDEX);u.push(t[c].onComplete.bind(null,null,!0,f))}t[c].unwatcher()}n.Fi(n.Di.subTree(e)),n.Li(),n.K.raiseEventsForChangedPath(e,s);for(var c=0;c<u.length;c++)h.exceptionGuard(u[c])}else{if("datastale"===i)for(var c=0;c<t.length;c++)t[c].status===r.SENT_NEEDS_ABORT?t[c].status=r.NEEDS_ABORT:t[c].status=r.RUN;else{h.warn("transaction at "+g+" failed: "+i);for(var c=0;c<t.length;c++)t[c].status=r.NEEDS_ABORT,t[c].abortReason=i}n.le(e)}},d)},y.Repo.prototype.le=function(e){var t=this.Wi(e),n=t.path(),r=this.xi(t);return this.ji(r,n),n},y.Repo.prototype.ji=function(e,t){if(0!==e.length){for(var n=[],u=[],_=e.filter(function(e){return e.status===r.RUN}),v=_.map(function(e){return e.currentWriteId}),g=0;g<e.length;g++){var m=e[g],C=s.Path.relativePath(t,m.path),E=!1,N=void 0;if(i.assert(null!==C,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===r.NEEDS_ABORT)E=!0,N=m.abortReason,u=u.concat(this.ue.ackUserWrite(m.currentWriteId,!0));else if(m.status===r.RUN)if(m.retryCount>=y.Repo.Ai)E=!0,N="maxretry",u=u.concat(this.ue.ackUserWrite(m.currentWriteId,!0));else{var P=this.Mi(m.path,v);m.currentInputSnapshot=P;var b=e[g].update(P.val());if(void 0!==b){p.validateFirebaseData("transaction failed: Data returned ",b,m.path);var S=f.nodeFromJSON(b),T="object"==typeof b&&null!=b&&d.contains(b,".priority");T||(S=S.updatePriority(P.getPriority()));var w=m.currentWriteId,I=this.generateServerValues(),R=c.resolveDeferredValueSnapshot(S,I);m.currentOutputSnapshotRaw=S,m.currentOutputSnapshotResolved=R,m.currentWriteId=this.pe(),v.splice(v.indexOf(w),1),u=u.concat(this.ue.applyUserOverwrite(m.path,R,m.currentWriteId,m.applyLocally)),u=u.concat(this.ue.ackUserWrite(w,!0))}else E=!0,N="nodata",u=u.concat(this.ue.ackUserWrite(m.currentWriteId,!0))}if(this.K.raiseEventsForChangedPath(t,u),u=[],E&&(e[g].status=r.COMPLETED,function(e){setTimeout(e,Math.floor(0))}(e[g].unwatcher),e[g].onComplete))if("nodata"===N){var O=new o.Reference(this,e[g].path),A=e[g].currentInputSnapshot,D=new a.DataSnapshot(A,O,l.PRIORITY_INDEX);n.push(e[g].onComplete.bind(null,null,!1,D))}else n.push(e[g].onComplete.bind(null,Error(N),!1,null))}this.Fi(this.Di);for(var g=0;g<n.length;g++)h.exceptionGuard(n[g]);this.Li()}},y.Repo.prototype.Wi=function(e){for(var t,n=this.Di;null!==(t=e.getFront())&&null===n.getValue();)n=n.subTree(t),e=e.popFront();return n},y.Repo.prototype.xi=function(e){var t=[];return this.Vi(e,t),t.sort(function(e,t){return e.order-t.order}),t},y.Repo.prototype.Vi=function(e,t){var n=this,r=e.getValue();if(null!==r)for(var i=0;i<r.length;i++)t.push(r[i]);e.forEachChild(function(e){n.Vi(e,t)})},y.Repo.prototype.Fi=function(e){var t=this,n=e.getValue();if(n){for(var i=0,o=0;o<n.length;o++)n[o].status!==r.COMPLETED&&(n[i]=n[o],i++);n.length=i,e.setValue(n.length>0?n:null)}e.forEachChild(function(e){t.Fi(e)})},y.Repo.prototype.fe=function(e){var t=this,n=this.Wi(e).path(),r=this.Di.subTree(e);return r.forEachAncestor(function(e){t.Qi(e)}),this.Qi(r),r.forEachDescendant(function(e){t.Qi(e)}),n},y.Repo.prototype.Qi=function(e){var t=e.getValue();if(null!==t){for(var n=[],o=[],a=-1,s=0;s<t.length;s++)t[s].status===r.SENT_NEEDS_ABORT||(t[s].status===r.SENT?(i.assert(a===s-1,"All SENT items should be at beginning of queue."),a=s,t[s].status=r.SENT_NEEDS_ABORT,t[s].abortReason="set"):(i.assert(t[s].status===r.RUN,"Unexpected transaction status in abort"),t[s].unwatcher(),o=o.concat(this.ue.ackUserWrite(t[s].currentWriteId,!0)),t[s].onComplete&&n.push(t[s].onComplete.bind(null,Error("set"),!1,null))));-1===a?e.setValue(null):t.length=a+1,this.K.raiseEventsForChangedPath(e.path(),o);for(var s=0;s<n.length;s++)h.exceptionGuard(n[s])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),o=n(0),a=function(){function e(){this.children={},this.childCount=0,this.value=null}return e}();t.TreeNode=a;var s=function(){function e(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n=new a),this.qi=e,this.Ui=t,this._e=n}return e.prototype.subTree=function(t){for(var n,r=t instanceof i.Path?t:new i.Path(t),s=this;null!==(n=r.getFront());)s=new e(n,s,o.safeGet(s._e.children,n)||new a),r=r.popFront();return s},e.prototype.getValue=function(){return this._e.value},e.prototype.setValue=function(e){r.assert(void 0!==e,"Cannot set value to undefined"),this._e.value=e,this.Bi()},e.prototype.clear=function(){this._e.value=null,this._e.children={},this._e.childCount=0,this.Bi()},e.prototype.hasChildren=function(){return this._e.childCount>0},e.prototype.isEmpty=function(){return null===this.getValue()&&!this.hasChildren()},e.prototype.forEachChild=function(t){var n=this;o.forEach(this._e.children,function(r,i){t(new e(r,n,i))})},e.prototype.forEachDescendant=function(e,t,n){t&&!n&&e(this),this.forEachChild(function(t){t.forEachDescendant(e,!0,n)}),t&&n&&e(this)},e.prototype.forEachAncestor=function(e,t){for(var n=t?this:this.parent();null!==n;){if(e(n))return!0;n=n.parent()}return!1},e.prototype.forEachImmediateDescendantWithValue=function(e){this.forEachChild(function(t){null!==t.getValue()?e(t):t.forEachImmediateDescendantWithValue(e)})},e.prototype.path=function(){return new i.Path(null===this.Ui?this.qi:this.Ui.path()+"/"+this.qi)},e.prototype.name=function(){return this.qi},e.prototype.parent=function(){return this.Ui},e.prototype.Bi=function(){null!==this.Ui&&this.Ui.Hi(this.qi,this)},e.prototype.Hi=function(e,t){var n=t.isEmpty(),r=o.contains(this._e.children,e);n&&r?(delete this._e.children[e],this._e.childCount--,this.Bi()):n||r||(this._e.children[e]=t._e,this._e.childCount++,this.Bi())},e}();t.Tree=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),i=n(53);t.forceLongPolling=function(){r.WebSocketConnection.forceDisallow(),i.BrowserPollConnection.forceAllow()},t.forceWebSockets=function(){i.BrowserPollConnection.forceDisallow()},t.isWebSocketsAvailable=function(){return r.WebSocketConnection.isAvailable()},t.setSecurityDebugCallback=function(e,t){e.repo.J.it=t},t.stats=function(e,t){e.repo.stats(t)},t.statsIncrementCounter=function(e,t){e.repo.statsIncrementCounter(t)},t.dataUpdateCount=function(e){return e.repo.dataUpdateCount},t.interceptServerData=function(e,t){return e.repo.he(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),i=n(50),o=n(26),a=n(52);t.DataConnection=i.PersistentConnection,i.PersistentConnection.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},i.PersistentConnection.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},t.RealTimeConnection=a.Connection,t.hijackHash=function(e){var t=i.PersistentConnection.prototype.put;return i.PersistentConnection.prototype.put=function(n,r,i,o){void 0!==o&&(o=e()),t.call(this,n,r,i,o)},function(){i.PersistentConnection.prototype.put=t}},t.ConnectionTarget=r.RepoInfo,t.queryIdentifier=function(e){return e.queryIdentifier()},t.listens=function(e){return e.repo.J.Je},t.forceRestClient=function(e){o.RepoManager.getInstance().forceRestClient(e)}}],[78])}catch(e){throw Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.")}

/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
try{webpackJsonpFirebase([3],{116:function(e,t,r){r(117)},117:function(e,t,r){"use strict";function n(e){var t=new Uint8Array(e);return window.btoa(String.fromCharCode.apply(null,t))}function o(e){var t=function(e){return self&&"ServiceWorkerGlobalScope"in self?new A(e):new k(e)},r={Messaging:k};e.INTERNAL.registerService("messaging",t,r)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(0),a={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key"},c=(i={},i[a.AVAILABLE_IN_WINDOW]="This method is available in a Window context.",i[a.AVAILABLE_IN_SW]="This method is available in a service worker context.",i["should-be-overriden"]="This method should be overriden by extended classes.",i["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",i["permission-default"]="The required permissions were not granted and dismissed instead.",i["permission-blocked"]="The required permissions were not granted and blocked instead.",i["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",i["notifications-blocked"]="Notifications have been blocked.",i[a.FAILED_DEFAULT_REGISTRATION]="We are unable to register the default service worker. {$browserErrorMessage}",i["sw-registration-expected"]="A service worker registration was the expected input.",i["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",i["invalid-saved-token"]="Unable to access details of the saved token.",i["sw-reg-redundant"]="The service worker being used for push was made redundant.",i["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",i["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",i["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",i["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",i["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",i["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",i["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",i["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",i["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",i["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",i["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",i["failed-to-delete-token"]="Unable to delete the currently saved token.",i["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",i["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",i["bad-scope"]="The service worker scope must be a string with at least one character.",i["bad-vapid-key"]="The public VAPID key must be a string with at least one character.",i["bad-subscription"]="The subscription must be a valid PushSubscription.",i["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",i["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",i["failed-delete-vapid-key"]="The VAPID key could not be deleted.",i),u={codes:a,map:c},_=function(e){return n(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},d=[4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110],f={userVisibleOnly:!0,applicationServerKey:new Uint8Array(d)},h={ENDPOINT:"https://fcm.googleapis.com",APPLICATION_SERVER_KEY:d,SUBSCRIPTION_OPTIONS:f},p="fcm_token_object_Store",l=function(){function e(){this.e=new s.ErrorFactory("messaging","Messaging",u.map),this.t=null}return e.prototype.r=function(){return this.t?this.t:(this.t=new Promise(function(t,r){var n=indexedDB.open(e.DB_NAME,1);n.onerror=function(e){r(e.target.error)},n.onsuccess=function(e){t(e.target.result)},n.onupgradeneeded=function(e){var t=e.target.result,r=t.createObjectStore(p,{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})}}),this.t)},e.prototype.closeDatabase=function(){var e=this;return this.t?this.t.then(function(t){t.close(),e.t=null}):Promise.resolve()},e.prototype.getTokenDetailsFromToken=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=i.index("fcmToken"),a=s.get(e);a.onerror=function(e){n(e.target.error)},a.onsuccess=function(e){r(e.target.result)}})})},e.prototype.n=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=i.get(e);s.onerror=function(e){n(e.target.error)},s.onsuccess=function(e){r(e.target.result)}})})},e.prototype.o=function(e){return this.r().then(function(t){return new Promise(function(r,n){var o=t.transaction([p]),i=o.objectStore(p),s=[],a=i.openCursor();a.onerror=function(e){n(e.target.error)},a.onsuccess=function(t){var n=t.target.result;n?(n.value.fcmSenderId===e&&s.push(n.value),n.continue()):r(s)}})})},e.prototype.subscribeToFCM=function(e,t,r){var n=this,o=_(t.getKey("p256dh")),i=_(t.getKey("auth")),s="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+o+"&encryption_auth="+i;r&&(s+="&pushSet="+r);var a=new Headers;a.append("Content-Type","application/x-www-form-urlencoded");var c={method:"POST",headers:a,body:s};return fetch(h.ENDPOINT+"/fcm/connect/subscribe",c).then(function(e){return e.json()}).then(function(e){var t=e;if(t.error){var r=t.error.message;throw n.e.create(u.codes.TOKEN_SUBSCRIBE_FAILED,{message:r})}if(!t.token)throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_TOKEN);if(!t.pushSet)throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);return{token:t.token,pushSet:t.pushSet}})},e.prototype.i=function(e,t){return e.endpoint===t.endpoint&&_(e.getKey("auth"))===t.auth&&_(e.getKey("p256dh"))===t.p256dh},e.prototype.s=function(e,t,r,n,o){var i={swScope:t.scope,endpoint:r.endpoint,auth:_(r.getKey("auth")),p256dh:_(r.getKey("p256dh")),fcmToken:n,fcmPushSet:o,fcmSenderId:e};return this.r().then(function(e){return new Promise(function(t,r){var n=e.transaction([p],"readwrite"),o=n.objectStore(p),s=o.put(i);s.onerror=function(e){r(e.target.error)},s.onsuccess=function(e){t()}})})},e.prototype.getSavedToken=function(e,t){var r=this;return t instanceof ServiceWorkerRegistration?"string"!=typeof e||0===e.length?Promise.reject(this.e.create(u.codes.BAD_SENDER_ID)):this.o(e).then(function(r){if(0!==r.length){var n=r.findIndex(function(r){return t.scope===r.swScope&&e===r.fcmSenderId});if(-1!==n)return r[n]}}).then(function(e){if(e)return t.pushManager.getSubscription().catch(function(e){throw r.e.create(u.codes.GET_SUBSCRIPTION_FAILED)}).then(function(t){if(t&&r.i(t,e))return e.fcmToken})}):Promise.reject(this.e.create(u.codes.SW_REGISTRATION_EXPECTED))},e.prototype.createToken=function(e,t){var r=this;if("string"!=typeof e||0===e.length)return Promise.reject(this.e.create(u.codes.BAD_SENDER_ID));if(!(t instanceof ServiceWorkerRegistration))return Promise.reject(this.e.create(u.codes.SW_REGISTRATION_EXPECTED));var n,o;return t.pushManager.getSubscription().then(function(e){return e||t.pushManager.subscribe(h.SUBSCRIPTION_OPTIONS)}).then(function(t){return n=t,r.subscribeToFCM(e,n)}).then(function(i){return o=i,r.s(e,t,n,o.token,o.pushSet)}).then(function(){return o.token})},e.prototype.deleteToken=function(e){var t=this;return"string"!=typeof e||0===e.length?Promise.reject(this.e.create(u.codes.INVALID_DELETE_TOKEN)):this.getTokenDetailsFromToken(e).then(function(e){if(!e)throw t.e.create(u.codes.DELETE_TOKEN_NOT_FOUND);return t.r().then(function(r){return new Promise(function(n,o){var i=r.transaction([p],"readwrite"),s=i.objectStore(p),a=s.delete(e.swScope);a.onerror=function(e){o(e.target.error)},a.onsuccess=function(r){if(0===r.target.result)return void o(t.e.create(u.codes.FAILED_TO_DELETE_TOKEN));n(e)}})})})},e}(),g=l,E="messagingSenderId",T=function(){function e(e){var t=this;if(this.e=new s.ErrorFactory("messaging","Messaging",u.map),!e.options[E]||"string"!=typeof e.options[E])throw this.e.create(u.codes.BAD_SENDER_ID);this.a=e.options[E],this.c=new g,this.app=e,this.INTERNAL={},this.INTERNAL.delete=function(){return t.delete}}return e.prototype.getToken=function(){var e=this,t=this.u();return"granted"!==t?"denied"===t?Promise.reject(this.e.create(u.codes.NOTIFICATIONS_BLOCKED)):Promise.resolve(null):this._().then(function(t){return e.c.getSavedToken(e.a,t).then(function(r){return r||e.c.createToken(e.a,t)})})},e.prototype.deleteToken=function(e){var t=this;return this.c.deleteToken(e).then(function(){return t._().then(function(e){if(e)return e.pushManager.getSubscription()}).then(function(e){if(e)return e.unsubscribe()})})},e.prototype._=function(){throw this.e.create(u.codes.SHOULD_BE_INHERITED)},e.prototype.requestPermission=function(){throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)},e.prototype.useServiceWorker=function(e){throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)},e.prototype.onMessage=function(e,t,r){throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)},e.prototype.onTokenRefresh=function(e,t,r){throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)},e.prototype.setBackgroundMessageHandler=function(e){throw this.e.create(u.codes.AVAILABLE_IN_SW)},e.prototype.delete=function(){return this.c.closeDatabase()},e.prototype.u=function(){return Notification.permission},e.prototype.getTokenManager=function(){return this.c},e}(),S=T,b={TYPE_OF_MSG:"firebase-messaging-msg-type",DATA:"firebase-messaging-msg-data"},v={PUSH_MSG_RECEIVED:"push-msg-received",NOTIFICATION_CLICKED:"notification-clicked"},I=function(e,t){return r={},r[b.TYPE_OF_MSG]=e,r[b.DATA]=t,r;var r},m={PARAMS:b,TYPES_OF_MSG:v,createNewMsg:I},y={path:"/firebase-messaging-sw.js",scope:"/firebase-cloud-messaging-push-scope"},N=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),w=function(e){function t(t){var r=e.call(this,t)||this;return r.d=null,r.f=Object(s.createSubscribe)(function(e){r.d=e}),r.h=null,r.p=Object(s.createSubscribe)(function(e){r.h=e}),r.l(),r}return N(t,e),t.prototype.getToken=function(){var t=this;return this.g()?this.T().then(function(){return e.prototype.getToken.call(t)}):Promise.reject(this.e.create(u.codes.UNSUPPORTED_BROWSER))},t.prototype.T=function(){var e=this;if(this.S)return this.S;var t=document.querySelector('link[rel="manifest"]');return this.S=t?fetch(t.href).then(function(e){return e.json()}).catch(function(){return Promise.resolve()}).then(function(t){if(t&&t.gcm_sender_id&&"103953800507"!==t.gcm_sender_id)throw e.e.create(u.codes.INCORRECT_GCM_SENDER_ID)}):Promise.resolve(),this.S},t.prototype.requestPermission=function(){var e=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(t,r){var n=function(n){return"granted"===n?t():r("denied"===n?e.e.create(u.codes.PERMISSION_BLOCKED):e.e.create(u.codes.PERMISSION_DEFAULT))},o=Notification.requestPermission(function(e){o||n(e)});o&&o.then(n)})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw this.e.create(u.codes.SW_REGISTRATION_EXPECTED);if(void 0!==this.b)throw this.e.create(u.codes.USE_SW_BEFORE_GET_TOKEN);this.b=e},t.prototype.onMessage=function(e,t,r){return this.f(e,t,r)},t.prototype.onTokenRefresh=function(e,t,r){return this.p(e,t,r)},t.prototype.v=function(e){var t=this,r=e.installing||e.waiting||e.active;return new Promise(function(n,o){if(!r)return void o(t.e.create(u.codes.NO_SW_IN_REG));if("activated"===r.state)return void n(e);if("redundant"===r.state)return void o(t.e.create(u.codes.SW_REG_REDUNDANT));var i=function(){if("activated"===r.state)n(e);else{if("redundant"!==r.state)return;o(t.e.create(u.codes.SW_REG_REDUNDANT))}r.removeEventListener("statechange",i)};r.addEventListener("statechange",i)})},t.prototype._=function(){var e=this;return this.b?this.v(this.b):(this.b=null,navigator.serviceWorker.register(y.path,{scope:y.scope}).catch(function(t){throw e.e.create(u.codes.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:t.message})}).then(function(t){return e.v(t).then(function(){return e.b=t,t.update(),t})}))},t.prototype.l=function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[m.PARAMS.TYPE_OF_MSG]){var r=t.data;switch(r[m.PARAMS.TYPE_OF_MSG]){case m.TYPES_OF_MSG.PUSH_MSG_RECEIVED:case m.TYPES_OF_MSG.NOTIFICATION_CLICKED:var n=r[m.PARAMS.DATA];e.d.next(n)}}},!1)},t.prototype.g=function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")},t}(S),k=w,O=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),D=function(e){function t(t){var r=e.call(this,t)||this;return self.addEventListener("push",function(e){return r.I(e)},!1),self.addEventListener("pushsubscriptionchange",function(e){return r.m(e)},!1),self.addEventListener("notificationclick",function(e){return r.y(e)},!1),r.N=null,r}return O(t,e),t.prototype.I=function(e){var t,r=this;try{t=e.data.json()}catch(e){return}var n=this.w().then(function(e){if(e){if(t.notification||r.N)return r.k(t)}else{var n=r.O(t);if(n){var o=n.title||"";return self.registration.showNotification(o,n)}if(r.N)return r.N(t)}});e.waitUntil(n)},t.prototype.m=function(e){var t=this,r=this.getToken().then(function(e){if(!e)throw t.e.create(u.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);var r=null,n=t.getTokenManager();return n.getTokenDetailsFromToken(e).then(function(e){if(!(r=e))throw t.e.create(u.codes.INVALID_SAVED_TOKEN);return self.registration.pushManager.subscribe(h.SUBSCRIPTION_OPTIONS)}).then(function(e){return n.subscribeToFCM(r.fcmSenderId,e,r.fcmPushSet)}).catch(function(e){return n.deleteToken(r.fcmToken).then(function(){throw t.e.create(u.codes.UNABLE_TO_RESUBSCRIBE,{message:e})})})});e.waitUntil(r)},t.prototype.y=function(e){var t=this;if(e.notification&&e.notification.data&&e.notification.data.FCM_MSG){e.stopImmediatePropagation(),e.notification.close();var r=e.notification.data.FCM_MSG,n=r.notification.click_action;if(n){var o=this.D(n).then(function(e){return e||self.clients.openWindow(n)}).then(function(e){if(e){r.notification,delete r.notification;var n=m.createNewMsg(m.TYPES_OF_MSG.NOTIFICATION_CLICKED,r);return t.A(e,n)}});e.waitUntil(o)}}},t.prototype.O=function(e){if(e&&"object"==typeof e.notification){var t=Object.assign({},e.notification);return t.data=(r={},r.FCM_MSG=e,r),t;var r}},t.prototype.setBackgroundMessageHandler=function(e){if(e&&"function"!=typeof e)throw this.e.create(u.codes.BG_HANDLER_FUNCTION_EXPECTED);this.N=e},t.prototype.D=function(e){var t=new URL(e).href;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){for(var r=null,n=0;n<e.length;n++)if(new URL(e[n].url).href===t){r=e[n];break}if(r)return r.focus(),r})},t.prototype.A=function(e,t){var r=this;return new Promise(function(n,o){if(!e)return o(r.e.create(u.codes.NO_WINDOW_CLIENT_TO_MSG));e.postMessage(t),n()})},t.prototype.w=function(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){return e.some(function(e){return"visible"===e.visibilityState})})},t.prototype.k=function(e){var t=this;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(r){var n=m.createNewMsg(m.TYPES_OF_MSG.PUSH_MSG_RECEIVED,e);return Promise.all(r.map(function(e){return t.A(e,n)}))})},t.prototype._=function(){return Promise.resolve(self.registration)},t}(S),A=D,P=r(6);t.registerMessaging=o,o(P.firebase)}},[116])}catch(e){throw Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}

/*!
 * @license Firebase v4.9.1
 * Build: rev-631e1ad
 * Terms: https://firebase.google.com/terms/
 */
try{webpackJsonpFirebase([2],{118:function(t,e,n){n(119)},119:function(t,e,n){"use strict";function r(t){return"storage/"+t}function o(){return new te(ee.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function i(t){return new te(ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function a(t){return new te(ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function s(){return new te(ee.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function u(t){return new te(ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function c(){return new te(ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function l(){return new te(ee.CANCELED,"User canceled the upload/download.")}function h(t){return new te(ee.INVALID_URL,"Invalid URL '"+t+"'.")}function p(t){return new te(ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function f(){return new te(ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function d(){return new te(ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function _(){return new te(ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function v(t,e,n){return new te(ee.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+n)}function b(t,e,n,r){var o,i;return t===e?(o=t,i=1===t?"argument":"arguments"):(o="between "+t+" and "+e,i="arguments"),new te(ee.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+o+" "+i+", received "+r+".")}function m(){return new te(ee.APP_DELETED,"The Firebase app was deleted.")}function g(t){return new te(ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function y(t,e){return new te(ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function R(t){throw new te(ee.INTERNAL_ERROR,"Internal error: "+t)}function E(t){switch(t){case ne.RAW:case ne.BASE64:case ne.BASE64URL:case ne.DATA_URL:return;default:throw"Expected one of the event types: ["+ne.RAW+", "+ne.BASE64+", "+ne.BASE64URL+", "+ne.DATA_URL+"]."}}function w(t,e){switch(t){case ne.RAW:return new re(U(e));case ne.BASE64:case ne.BASE64URL:return new re(A(t,e));case ne.DATA_URL:return new re(N(e),O(e))}throw o()}function U(t){for(var e=[],n=0;n<t.length;n++){var r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){var o=n<t.length-1&&56320==(64512&t.charCodeAt(n+1));if(o){var i=r,a=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&a,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function T(t){var e;try{e=decodeURIComponent(t)}catch(t){throw y(ne.DATA_URL,"Malformed data URL.")}return U(e)}function A(t,e){switch(t){case ne.BASE64:var n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){var o=n?"-":"_";throw y(t,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case ne.BASE64URL:var i=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(i||a){var o=i?"+":"/";throw y(t,"Invalid character '"+o+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/")}var s;try{s=atob(e)}catch(e){throw y(t,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}function N(t){var e=new oe(t);return e.base64?A(ne.BASE64,e.rest):T(e.rest)}function O(t){return new oe(t).contentType}function C(t,e){return!!(t.length>=e.length)&&t.substring(t.length-e.length)===e}function S(t){switch(t){case ae.RUNNING:case ae.PAUSING:case ae.CANCELING:return se.RUNNING;case ae.PAUSED:return se.PAUSED;case ae.SUCCESS:return se.SUCCESS;case ae.CANCELED:return se.CANCELED;case ae.ERROR:default:return se.ERROR}}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function I(t,e){for(var n in t)k(t,n)&&e(n,t[n])}function L(t){if(null==t)return{};var e={};return I(t,function(t,n){e[t]=n}),e}function P(t){return new Promise(t)}function x(t){return Promise.resolve(t)}function D(t){return Promise.reject(t)}function M(t){return null!=t}function W(t){return void 0!==t}function B(t){return"function"==typeof t}function G(t){return"object"==typeof t}function j(t){return G(t)&&null!==t}function q(t){return G(t)&&!Array.isArray(t)}function F(t){return"string"==typeof t||t instanceof String}function H(t){return"number"==typeof t||t instanceof Number}function z(t){return X()&&t instanceof Blob}function X(){return"undefined"!=typeof Blob}function V(t){var e;try{e=JSON.parse(t)}catch(t){return null}return q(e)?e:null}function K(t){if(0==t.length)return null;var e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}function Z(t,e){var n=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?n:t+"/"+n}function J(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}function Q(t){return Vt+Zt+t}function Y(t){return Kt+Zt+t}function $(t){return Vt+Jt+t}function tt(t){var e=encodeURIComponent,n="?";return I(t,function(t,r){var o=e(t)+"="+e(r);n=n+o+"&"}),n=n.slice(0,-1)}function et(t,e){return e}function nt(t){return!F(t)||t.length<2?t:(t=t,J(t))}function rt(){function t(t,e){return nt(e)}function e(t,e){return M(e)?+e:e}function n(t,e){if(!(F(e)&&e.length>0))return[];var n=encodeURIComponent;return e.split(",").map(function(e){var r=t.bucket,o=t.fullPath;return Y("/b/"+n(r)+"/o/"+n(o))+tt({alt:"media",token:e})})}if(pe)return pe;var r=[];r.push(new he("bucket")),r.push(new he("generation")),r.push(new he("metageneration")),r.push(new he("name","fullPath",!0));var o=new he("name");o.xform=t,r.push(o);var i=new he("size");return i.xform=e,r.push(i),r.push(new he("timeCreated")),r.push(new he("updated")),r.push(new he("md5Hash",null,!0)),r.push(new he("cacheControl",null,!0)),r.push(new he("contentDisposition",null,!0)),r.push(new he("contentEncoding",null,!0)),r.push(new he("contentLanguage",null,!0)),r.push(new he("contentType",null,!0)),r.push(new he("metadata","customMetadata",!0)),r.push(new he("downloadTokens","downloadURLs",!1,n)),pe=r}function ot(t,e){function n(){var n=t.bucket,r=t.fullPath,o=new le(n,r);return e.makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function it(t,e,n){var r={};r.type="file";for(var o=n.length,i=0;i<o;i++){var a=n[i];r[a.local]=a.xform(r,e[a.server])}return ot(r,t),r}function at(t,e,n){var r=V(e);return null===r?null:it(t,r,n)}function st(t,e){for(var n={},r=e.length,o=0;o<r;o++){var i=e[o];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}function ut(t){if(!t||!G(t))throw"Expected Metadata object.";for(var e in t){var n=t[e];if("customMetadata"===e){if(!G(n))throw"Expected object for 'customMetadata' mapping."}else if(j(n))throw"Mapping for '"+e+"' cannot be an object."}}function ct(t,e,n){for(var r=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){r=i;break}if(!(r<=n.length&&n.length<=o))throw b(r,o,t,n.length);for(var i=0;i<n.length;i++)try{e[i].validator(n[i])}catch(e){throw e instanceof Error?v(i,t,e.message):v(i,t,e)}}function lt(t,e){return function(n){t(n),e(n)}}function ht(t,e){function n(t){if(!F(t))throw"Expected string."}var r;return r=t?lt(n,t):n,new fe(r,e)}function pt(){function t(t){if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||X()&&t instanceof Blob))throw"Expected Blob or File."}return new fe(t)}function ft(t){return new fe(ut,t)}function dt(){function t(t){if(!(H(t)&&t>=0))throw"Expected a number 0 or greater."}return new fe(t)}function _t(t,e){function n(e){if(!(null===e||M(e)&&e instanceof Object))throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new fe(n,e)}function vt(t){function e(t){if(null!==t&&!B(t))throw"Expected a Function."}return new fe(e,t)}function bt(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function mt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=bt();if(void 0!==n){for(var r=new n,o=0;o<t.length;o++)r.append(t[o]);return r.getBlob()}if(X())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function gt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function yt(t,e){return-1!==t.indexOf(e)}function Rt(t){return Array.prototype.slice.call(t)}function Et(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function wt(t){if(!t)throw o()}function Ut(t,e){function n(n,r){var o=at(t,r,e);return wt(null!==o),o}return n}function Tt(t){function e(e,n){var r;return r=401===e.getStatus()?s():402===e.getStatus()?a(t.bucket):403===e.getStatus()?u(t.path):n,r.setServerResponseProp(n.serverResponseProp()),r}return e}function At(t){function e(e,r){var o=n(e,r);return 404===e.getStatus()&&(o=i(t.path)),o.setServerResponseProp(r.serverResponseProp()),o}var n=Tt(t);return e}function Nt(t,e,n){var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new _e(o,"GET",Ut(t,n),i);return a.errorHandler=At(e),a}function Ot(t,e,n,r){var o=e.fullServerUrl(),i=Q(o),a=st(n,r),s={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime(),c=new _e(i,"PATCH",Ut(t,r),u);return c.headers=s,c.body=a,c.errorHandler=At(e),c}function Ct(t,e){function n(t,e){}var r=e.fullServerUrl(),o=Q(r),i=t.maxOperationRetryTime(),a=new _e(o,"DELETE",n,i);return a.successCodes=[200,204],a.errorHandler=At(e),a}function St(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kt(t,e,n){var r=L(n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=St(null,e)),r}function It(t,e,n,r,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var t="",e=0;e<2;e++)t+=(""+Math.random()).slice(2);return t}();a["Content-Type"]="multipart/related; boundary="+s;var u=kt(e,r,o),c=st(u,n),l="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",h="\r\n--"+s+"--",p=de.getBlob(l,r,h);if(null===p)throw f();var d={name:u.fullPath},_=$(i),v=t.maxUploadRetryTime(),b=new _e(_,"POST",Ut(t,n),v);return b.urlParams=d,b.headers=a,b.body=p.uploadData(),b.errorHandler=Tt(e),b}function Lt(t,e){var n;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(t){wt(!1)}return wt(yt(e||["active"],n)),n}function Pt(t,e,n,r,o){function i(t,e){Lt(t);var n;try{n=t.getResponseHeader("X-Goog-Upload-URL")}catch(t){wt(!1)}return wt(F(n)),n}var a=e.bucketOnlyServerUrl(),s=kt(e,r,o),u={name:s.fullPath},c=$(a),l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},h=st(s,n),p=t.maxUploadRetryTime(),f=new _e(c,"POST",i,p);return f.urlParams=u,f.headers=l,f.body=h,f.errorHandler=Tt(e),f}function xt(t,e,n,r){function o(t,e){var n,o=Lt(t,["active","final"]);try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(t){wt(!1)}var i=parseInt(n,10);return wt(!isNaN(i)),new ve(i,r.size(),"final"===o)}var i={"X-Goog-Upload-Command":"query"},a=t.maxUploadRetryTime(),s=new _e(n,"POST",o,a);return s.headers=i,s.errorHandler=Tt(e),s}function Dt(t,e,n,r,o,i,a,s){function u(t,n){var o,a=Lt(t,["active","final"]),s=c.current+h,u=r.size();return o="final"===a?Ut(e,i)(t,n):null,new ve(s,u,"final"===a,o)}var c=new ve(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw d();var l=c.total-c.current,h=l;o>0&&(h=Math.min(h,o));var p=c.current,_=p+h,v=h===l?"upload, finalize":"upload",b={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":c.current},m=r.slice(p,_);if(null===m)throw f();var g=e.maxUploadRetryTime(),y=new _e(n,"POST",u,g);return y.headers=b,y.body=m.uploadData(),y.progressCallback=s||null,y.errorHandler=Tt(t),y}function Mt(t){return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];x(!0).then(function(){t.apply(null,e)})}}function Wt(t,e,n){function r(){return 2===h}function o(){p||(p=!0,e.apply(null,arguments))}function i(e){c=setTimeout(function(){c=null,t(a,r())},e)}function a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!p){if(t)return void o.apply(null,arguments);if(r()||l)return void o.apply(null,arguments);u<64&&(u*=2);var a;1===h?(h=2,a=0):a=1e3*(u+Math.random()),i(a)}}function s(t){f||(f=!0,p||(null!==c?(t||(h=2),clearTimeout(c),i(0)):t||(h=1)))}var u=1,c=null,l=!1,h=0,p=!1,f=!1;return i(0),setTimeout(function(){l=!0,s(!0)},n),s}function Bt(t){t(!1)}function Gt(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}function jt(t){var e=void 0!==Xt.default?Xt.default.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function qt(t,e,n){var r=tt(t.urlParams),o=t.url+r,i=L(t.headers);return Gt(i,e),jt(i),new Ue(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n)}function Ft(t,e,n){return new Ae(t,new ce,n)}function Ht(t){var e={TaskState:se,TaskEvent:ie,StringFormat:ne,Storage:Ae,Reference:ye};t.INTERNAL.registerService(Oe,Ft,e,void 0,!0)}Object.defineProperty(e,"__esModule",{value:!0});var zt,Xt=n(6),Vt="https://firebasestorage.googleapis.com",Kt="https://firebasestorage.googleapis.com",Zt="/v0",Jt="/v0",Qt=12e4,Yt=6e4,$t=-9007199254740991,te=function(){function t(t,e){this.t=r(t),this.e="Firebase Storage: "+e,this.n=null,this.r="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return r(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.n},t.prototype.setServerResponseProp=function(t){this.n=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.n},enumerable:!0,configurable:!0}),t}(),ee={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"},ne={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},re=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}(),oe=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw y(ne.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=e[1]||null;null!=n&&(this.base64=C(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}return t}(),ie={STATE_CHANGED:"state_changed"},ae={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},se={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(zt||(zt={}));var ue=function(){function t(){var t=this;this.o=!1,this.i=new XMLHttpRequest,this.a=zt.NO_ERROR,this.s=P(function(e,n){t.i.addEventListener("abort",function(n){t.a=zt.ABORT,e(t)}),t.i.addEventListener("error",function(n){t.a=zt.NETWORK_ERROR,e(t)}),t.i.addEventListener("load",function(n){e(t)})})}return t.prototype.send=function(t,e,n,r){var o=this;if(this.o)throw R("cannot .send() more than once");return this.o=!0,this.i.open(e,t,!0),M(r)&&I(r,function(t,e){o.i.setRequestHeader(t,""+e)}),M(n)?this.i.send(n):this.i.send(),this.s},t.prototype.getErrorCode=function(){if(!this.o)throw R("cannot .getErrorCode() before sending");return this.a},t.prototype.getStatus=function(){if(!this.o)throw R("cannot .getStatus() before sending");try{return this.i.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.o)throw R("cannot .getResponseText() before sending");return this.i.responseText},t.prototype.abort=function(){this.i.abort()},t.prototype.getResponseHeader=function(t){return this.i.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){M(this.i.upload)&&this.i.upload.removeEventListener("progress",t)},t}(),ce=function(){function t(){}return t.prototype.createXhrIo=function(){return new ue},t}(),le=function(){function t(t,e){this.bucket=t,this.u=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.u},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var n;try{n=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===n.path)return n;throw p(e)},t.makeFromUrl=function(e){function n(t){"/"===t.path.charAt(t.path.length-1)&&(t.u=t.u.slice(0,-1))}function r(t){t.u=decodeURIComponent(t.path)}for(var o=null,i=RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$","i"),a={bucket:1,path:3},s=RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$","i"),u={bucket:1,path:3},c=[{regex:i,indices:a,postModify:n},{regex:s,indices:u,postModify:r}],l=0;l<c.length;l++){var p=c[l],f=p.regex.exec(e);if(f){var d=f[p.indices.bucket],_=f[p.indices.path];_||(_=""),o=new t(d,_),p.postModify(o);break}}if(null==o)throw h(e);return o},t}(),he=function(){function t(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||et}return t}(),pe=null,fe=function(){function t(t,e){var n=this;this.validator=function(e){n.optional&&!W(e)||t(e)},this.optional=!!e}return t}(),de=function(){function t(t,e){var n=0,r="";z(t)?(this.c=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.c=new Uint8Array(t):(this.c=new Uint8Array(t.byteLength),this.c.set(new Uint8Array(t))),n=this.c.length):t instanceof Uint8Array&&(e?this.c=t:(this.c=new Uint8Array(t.length),this.c.set(t)),n=t.length),this.l=n,this.h=r}return t.prototype.size=function(){return this.l},t.prototype.type=function(){return this.h},t.prototype.slice=function(e,n){if(z(this.c)){var r=this.c,o=gt(r,e,n);return null===o?null:new t(o)}return new t(new Uint8Array(this.c.buffer,e,n-e),!0)},t.getBlob=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(X()){var r=e.map(function(e){return e instanceof t?e.c:e});return new t(mt.apply(null,r))}var o=e.map(function(t){return F(t)?w(ne.RAW,t).data:t.c}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),s=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[s++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.c},t}(),_e=function(){function t(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}(),ve=function(){function t(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}return t}(),be=function(){function t(t,e,n){if(B(t)||M(e)||M(n))this.next=t,this.error=e||null,this.complete=n||null;else{var r=t;this.next=r.next||null,this.error=r.error||null,this.complete=r.complete||null}}return t}(),me=function(){function t(t,e,n,r,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=n,this.metadata=r,this.task=o,this.ref=i}return Object.defineProperty(t.prototype,"downloadURL",{get:function(){if(null!==this.metadata){var t=this.metadata.downloadURLs;return null!=t&&null!=t[0]?t[0]:null}return null},enumerable:!0,configurable:!0}),t}(),ge=function(){function t(t,e,n,r,o,i){void 0===i&&(i=null);var a=this;this.p=0,this.f=!1,this.d=!1,this._=[],this.v=null,this.b=null,this.m=null,this.g=1,this.y=null,this.R=null,this.w=t,this.U=e,this.T=n,this.A=o,this.N=i,this.O=r,this.C=this.S(this.A),this.k=ae.RUNNING,this.I=function(t){a.m=null,a.g=1,t.codeEquals(ee.CANCELED)?(a.f=!0,a.L()):(a.v=t,a.P(ae.ERROR))},this.x=function(t){a.m=null,t.codeEquals(ee.CANCELED)?a.L():(a.v=t,a.P(ae.ERROR))},this.D=P(function(t,e){a.y=t,a.R=e,a.M()}),this.D.then(null,function(){})}return t.prototype.W=function(){var t=this,e=this.p;return function(n,r){t.B(e+n)}},t.prototype.S=function(t){return t.size()>262144},t.prototype.M=function(){this.k===ae.RUNNING&&null===this.m&&(this.C?null===this.b?this.G():this.f?this.j():this.d?this.q():this.F():this.H())},t.prototype.z=function(t){var e=this;this.U.getAuthToken().then(function(n){switch(e.k){case ae.RUNNING:t(n);break;case ae.CANCELING:e.P(ae.CANCELED);break;case ae.PAUSING:e.P(ae.PAUSED)}})},t.prototype.G=function(){var t=this;this.z(function(e){var n=Pt(t.U,t.T,t.O,t.A,t.N),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.b=e,t.f=!1,t.L()},t.I)})},t.prototype.j=function(){var t=this,e=this.b;this.z(function(n){var r=xt(t.U,t.T,e,t.A),o=t.U.makeRequest(r,n);t.m=o,o.getPromise().then(function(e){e=e,t.m=null,t.B(e.current),t.f=!1,e.finalized&&(t.d=!0),t.L()},t.I)})},t.prototype.F=function(){var t=this,e=262144*this.g,n=new ve(this.p,this.A.size()),r=this.b;this.z(function(o){var i;try{i=Dt(t.T,t.U,r,t.A,e,t.O,n,t.W())}catch(e){return t.v=e,void t.P(ae.ERROR)}var a=t.U.makeRequest(i,o);t.m=a,a.getPromise().then(function(e){t.X(),t.m=null,t.B(e.current),e.finalized?(t.N=e.metadata,t.P(ae.SUCCESS)):t.L()},t.I)})},t.prototype.X=function(){262144*this.g<33554432&&(this.g*=2)},t.prototype.q=function(){var t=this;this.z(function(e){var n=Nt(t.U,t.T,t.O),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.N=e,t.P(ae.SUCCESS)},t.x)})},t.prototype.H=function(){var t=this;this.z(function(e){var n=It(t.U,t.T,t.O,t.A,t.N),r=t.U.makeRequest(n,e);t.m=r,r.getPromise().then(function(e){t.m=null,t.N=e,t.B(t.A.size()),t.P(ae.SUCCESS)},t.I)})},t.prototype.B=function(t){var e=this.p;this.p=t,this.p!==e&&this.V()},t.prototype.P=function(t){if(this.k!==t)switch(t){case ae.CANCELING:case ae.PAUSING:this.k=t,null!==this.m&&this.m.cancel();break;case ae.RUNNING:var e=this.k===ae.PAUSED;this.k=t,e&&(this.V(),this.M());break;case ae.PAUSED:this.k=t,this.V();break;case ae.CANCELED:this.v=l(),this.k=t,this.V();break;case ae.ERROR:case ae.SUCCESS:this.k=t,this.V()}},t.prototype.L=function(){switch(this.k){case ae.PAUSING:this.P(ae.PAUSED);break;case ae.CANCELING:this.P(ae.CANCELED);break;case ae.RUNNING:this.M()}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=S(this.k);return new me(this.p,this.A.size(),t,this.N,this,this.w)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,n,r){function o(e){if(t!==ie.STATE_CHANGED)throw"Expected one of the event types: ["+ie.STATE_CHANGED+"]."}function i(t){try{return void c(t)}catch(t){}try{if(l(t),!(W(t.next)||W(t.error)||W(t.complete)))throw"";return}catch(t){throw u}}function a(t){function e(e,n,o){null!==t&&ct("on",t,arguments);var i=new be(e,n,r);return h.K(i),function(){h.Z(i)}}return e}function s(t){if(null===t)throw u;i(t)}void 0===e&&(e=void 0),void 0===n&&(n=void 0),void 0===r&&(r=void 0);var u="Expected a function or an Object with one of `next`, `error`, `complete` properties.",c=vt(!0).validator,l=_t(null,!0).validator;ct("on",[ht(o),_t(i,!0),vt(!0),vt(!0)],arguments);var h=this,p=[_t(s),vt(!0),vt(!0)];return W(e)||W(n)||W(r)?a(null)(e,n,r):a(p)},t.prototype.then=function(t,e){return this.D.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.K=function(t){this._.push(t),this.J(t)},t.prototype.Z=function(t){Et(this._,t)},t.prototype.V=function(){var t=this;this.Q(),Rt(this._).forEach(function(e){t.J(e)})},t.prototype.Q=function(){if(null!==this.y){var t=!0;switch(S(this.k)){case se.SUCCESS:Mt(this.y.bind(null,this.snapshot))();break;case se.CANCELED:case se.ERROR:Mt(this.R.bind(null,this.v))();break;default:t=!1}t&&(this.y=null,this.R=null)}},t.prototype.J=function(t){switch(S(this.k)){case se.RUNNING:case se.PAUSED:null!==t.next&&Mt(t.next.bind(t,this.snapshot))();break;case se.SUCCESS:null!==t.complete&&Mt(t.complete.bind(t))();break;case se.CANCELED:case se.ERROR:null!==t.error&&Mt(t.error.bind(t,this.v))();break;default:null!==t.error&&Mt(t.error.bind(t,this.v))()}},t.prototype.resume=function(){ct("resume",[],arguments);var t=this.k===ae.PAUSED||this.k===ae.PAUSING;return t&&this.P(ae.RUNNING),t},t.prototype.pause=function(){ct("pause",[],arguments);var t=this.k===ae.RUNNING;return t&&this.P(ae.PAUSING),t},t.prototype.cancel=function(){ct("cancel",[],arguments);var t=this.k===ae.RUNNING||this.k===ae.PAUSING;return t&&this.P(ae.CANCELING),t},t}(),ye=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof le?e:le.makeFromUrl(e)}return t.prototype.toString=function(){return ct("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,n){return new t(e,n)},t.prototype.mappings=function(){return rt()},t.prototype.child=function(t){ct("child",[ht()],arguments);var e=Z(this.location.path,t),n=new le(this.location.bucket,e);return this.newRef(this.authWrapper,n)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=K(this.location.path);if(null===t)return null;var e=new le(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new le(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return J(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),ct("put",[pt(),ft(!0)],arguments),this.Y("put"),new ge(this,this.authWrapper,this.location,this.mappings(),new de(t),e)},t.prototype.putString=function(t,e,n){void 0===e&&(e=ne.RAW),ct("putString",[ht(),ht(E,!0),ft(!0)],arguments),this.Y("putString");var r=w(e,t),o=L(n);return!M(o.contentType)&&M(r.contentType)&&(o.contentType=r.contentType),new ge(this,this.authWrapper,this.location,this.mappings(),new de(r.data,!0),o)},t.prototype.delete=function(){ct("delete",[],arguments),this.Y("delete");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Ct(t.authWrapper,t.location);return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.getMetadata=function(){ct("getMetadata",[],arguments),this.Y("getMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(e){var n=Nt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(n,e).getPromise()})},t.prototype.updateMetadata=function(t){ct("updateMetadata",[ft()],arguments),this.Y("updateMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(n){var r=Ot(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(r,n).getPromise()})},t.prototype.getDownloadURL=function(){return ct("getDownloadURL",[],arguments),this.Y("getDownloadURL"),this.getMetadata().then(function(t){var e=t.downloadURLs[0];if(M(e))return e;throw _()})},t.prototype.Y=function(t){if(""===this.location.path)throw g(t)},t}(),Re=function(){function t(t){this.D=D(t)}return t.prototype.getPromise=function(){return this.D},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),Ee=function(){function t(){this.$={},this.tt=$t}return t.prototype.addRequest=function(t){function e(){delete r.$[n]}var n=this.tt;this.tt++,this.$[n]=t;var r=this;t.getPromise().then(e,e)},t.prototype.clear=function(){I(this.$,function(t,e){e&&e.cancel(!0)}),this.$={}},t}(),we=function(){function t(e,n,r,o,i){if(this.et=null,this.nt=!1,this.rt=e,null!==this.rt){var a=this.rt.options;M(a)&&(this.et=t.ot(a))}this.it=n,this.at=r,this.st=i,this.ut=o,this.ct=Qt,this.lt=Yt,this.ht=new Ee}return t.ot=function(t){var e=t.storageBucket||null;return null==e?null:le.makeFromBucketSpec(e).bucket},t.prototype.getAuthToken=function(){return null!==this.rt&&M(this.rt.INTERNAL)&&M(this.rt.INTERNAL.getToken)?this.rt.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(t){return null}):x(null)},t.prototype.bucket=function(){if(this.nt)throw m();return this.et},t.prototype.service=function(){return this.ut},t.prototype.makeStorageReference=function(t){return this.it(this,t)},t.prototype.makeRequest=function(t,e){if(this.nt)return new Re(m());var n=this.at(t,e,this.st);return this.ht.addRequest(n),n},t.prototype.deleteApp=function(){this.nt=!0,this.rt=null,this.ht.clear()},t.prototype.maxUploadRetryTime=function(){return this.lt},t.prototype.setMaxUploadRetryTime=function(t){this.lt=t},t.prototype.maxOperationRetryTime=function(){return this.ct},t.prototype.setMaxOperationRetryTime=function(t){this.ct=t},t}(),Ue=function(){function t(t,e,n,r,o,i,a,s,u,c,l){this.pt=null,this.ft=null,this.y=null,this.R=null,this.dt=!1,this._t=!1,this.vt=t,this.bt=e,this.mt=n,this.gt=r,this.yt=o.slice(),this.Rt=i.slice(),this.Et=a,this.wt=s,this.Ut=c,this.Tt=u,this.st=l;var h=this;this.D=P(function(t,e){h.y=t,h.R=e,h.M()})}return t.prototype.M=function(){function t(t,e){function r(t){var e=t.loaded,r=t.lengthComputable?t.total:-1;null!==n.Ut&&n.Ut(e,r)}if(e)return void t(!1,new Te(!1,null,!0));var o=n.st.createXhrIo();n.pt=o,null!==n.Ut&&o.addUploadProgressListener(r),o.send(n.vt,n.bt,n.gt,n.mt).then(function(e){null!==n.Ut&&e.removeUploadProgressListener(r),n.pt=null,e=e;var o=e.getErrorCode()===zt.NO_ERROR,i=e.getStatus();if(!o||n.At(i)){var a=e.getErrorCode()===zt.ABORT;return void t(!1,new Te(!1,null,a))}var s=yt(n.yt,i);t(!0,new Te(s,e))})}function e(t,e){var r=n.y,i=n.R,a=e.xhr;if(e.wasSuccessCode)try{var s=n.Et(a,a.getResponseText());W(s)?r(s):r()}catch(t){i(t)}else if(null!==a){var u=o();u.setServerResponseProp(a.getResponseText()),i(n.wt?n.wt(a,u):u)}else if(e.canceled){var u=n._t?m():l();i(u)}else{var u=c();i(u)}}var n=this;this.dt?e(!1,new Te(!1,null,!0)):this.ft=Wt(t,e,this.Tt)},t.prototype.getPromise=function(){return this.D},t.prototype.cancel=function(t){this.dt=!0,this._t=t||!1,null!==this.ft&&Bt(this.ft),null!==this.pt&&this.pt.abort()},t.prototype.At=function(t){var e=t>=500&&t<600,n=[408,429],r=yt(n,t),o=yt(this.Rt,t);return e||r||o},t}(),Te=function(){function t(t,e,n){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!n}return t}(),Ae=function(){function t(t,e,n){function r(t,e){return new ye(t,e)}if(this.et=null,this.U=new we(t,r,qt,this,e),this.rt=t,null!=n)this.et=le.makeFromBucketSpec(n);else{var o=this.U.bucket();null!=o&&(this.et=new le(o,""))}this.Nt=new Ne(this)}return t.prototype.ref=function(t){function e(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(ct("ref",[ht(e,!0)],arguments),null==this.et)throw Error("No Storage Bucket defined in Firebase Options.");var n=new ye(this.U,this.et);return null!=t?n.child(t):n},t.prototype.refFromURL=function(t){function e(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{le.makeFromUrl(t)}catch(t){throw"Expected valid full URL but got an invalid one."}}return ct("refFromURL",[ht(e,!1)],arguments),new ye(this.U,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.U.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){ct("setMaxUploadRetryTime",[dt()],arguments),this.U.setMaxUploadRetryTime(t)},Object.defineProperty(t.prototype,"maxOperationRetryTime",{get:function(){return this.U.maxOperationRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxOperationRetryTime=function(t){ct("setMaxOperationRetryTime",[dt()],arguments),this.U.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.rt},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.Nt},enumerable:!0,configurable:!0}),t}(),Ne=function(){function t(t){this.ut=t}return t.prototype.delete=function(){return this.ut.U.deleteApp(),x(void 0)},t}();e.registerStorage=Ht;var Oe="storage";Ht(Xt.default)}},[118])}catch(t){throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}

//# sourceMappingURL=firebase.js.map