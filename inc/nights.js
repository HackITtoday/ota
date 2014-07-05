
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
//! moment.js
//! version : 2.5.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function c(a,b){return function(c){return k(a.call(this,c),b)}}function d(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function e(){}function f(a){w(a),h(this,a)}function g(a){var b=q(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function i(a){var b,c={};for(b in a)a.hasOwnProperty(b)&&qb.hasOwnProperty(b)&&(c[b]=a[b]);return c}function j(a){return 0>a?Math.ceil(a):Math.floor(a)}function k(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function l(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&db.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function m(a){return"[object Array]"===Object.prototype.toString.call(a)}function n(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function o(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&s(a[d])!==s(b[d]))&&g++;return g+f}function p(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Tb[a]||Ub[b]||b}return a}function q(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=p(c),b&&(d[b]=a[c]));return d}function r(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}db[b]=function(e,f){var g,h,i=db.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=db().utc().set(d,a);return i.call(db.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function s(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function t(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function u(a){return v(a)?366:365}function v(a){return a%4===0&&a%100!==0||a%400===0}function w(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[jb]<0||a._a[jb]>11?jb:a._a[kb]<1||a._a[kb]>t(a._a[ib],a._a[jb])?kb:a._a[lb]<0||a._a[lb]>23?lb:a._a[mb]<0||a._a[mb]>59?mb:a._a[nb]<0||a._a[nb]>59?nb:a._a[ob]<0||a._a[ob]>999?ob:-1,a._pf._overflowDayOfYear&&(ib>b||b>kb)&&(b=kb),a._pf.overflow=b)}function x(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function y(a){return a?a.toLowerCase().replace("_","-"):a}function z(a,b){return b._isUTC?db(a).zone(b._offset||0):db(a).local()}function A(a,b){return b.abbr=a,pb[a]||(pb[a]=new e),pb[a].set(b),pb[a]}function B(a){delete pb[a]}function C(a){var b,c,d,e,f=0,g=function(a){if(!pb[a]&&rb)try{require("./lang/"+a)}catch(b){}return pb[a]};if(!a)return db.fn._lang;if(!m(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=y(a[f]).split("-"),b=e.length,d=y(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&o(e,d,!0)>=b-1)break;b--}f++}return db.fn._lang}function D(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function E(a){var b,c,d=a.match(vb);for(b=0,c=d.length;c>b;b++)d[b]=Yb[d[b]]?Yb[d[b]]:D(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function F(a,b){return a.isValid()?(b=G(b,a.lang()),Vb[b]||(Vb[b]=E(b)),Vb[b](a)):a.lang().invalidDate()}function G(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(wb.lastIndex=0;d>=0&&wb.test(a);)a=a.replace(wb,c),wb.lastIndex=0,d-=1;return a}function H(a,b){var c,d=b._strict;switch(a){case"DDDD":return Ib;case"YYYY":case"GGGG":case"gggg":return d?Jb:zb;case"Y":case"G":case"g":return Lb;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?Kb:Ab;case"S":if(d)return Gb;case"SS":if(d)return Hb;case"SSS":if(d)return Ib;case"DDD":return yb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Cb;case"a":case"A":return C(b._l)._meridiemParse;case"X":return Fb;case"Z":case"ZZ":return Db;case"T":return Eb;case"SSSS":return Bb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?Hb:xb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return xb;default:return c=new RegExp(P(O(a.replace("\\","")),"i"))}}function I(a){a=a||"";var b=a.match(Db)||[],c=b[b.length-1]||[],d=(c+"").match(Qb)||["-",0,0],e=+(60*d[1])+s(d[2]);return"+"===d[0]?-e:e}function J(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[jb]=s(b)-1);break;case"MMM":case"MMMM":d=C(c._l).monthsParse(b),null!=d?e[jb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[kb]=s(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=s(b));break;case"YY":e[ib]=s(b)+(s(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":e[ib]=s(b);break;case"a":case"A":c._isPm=C(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[lb]=s(b);break;case"m":case"mm":e[mb]=s(b);break;case"s":case"ss":e[nb]=s(b);break;case"S":case"SS":case"SSS":case"SSSS":e[ob]=s(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=I(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function K(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=M(a),a._w&&null==a._a[kb]&&null==a._a[jb]&&(f=function(b){var c=parseInt(b,10);return b?b.length<3?c>68?1900+c:2e3+c:c:null==a._a[ib]?db().weekYear():a._a[ib]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=Z(f(g.GG),g.W||1,g.E,4,1):(i=C(a._l),j=null!=g.d?V(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=Z(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[ib]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[ib]?d[ib]:a._a[ib],a._dayOfYear>u(e)&&(a._pf._overflowDayOfYear=!0),c=U(e,0,a._dayOfYear),a._a[jb]=c.getUTCMonth(),a._a[kb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[lb]+=s((a._tzm||0)/60),l[mb]+=s((a._tzm||0)%60),a._d=(a._useUTC?U:T).apply(null,l)}}function L(a){var b;a._d||(b=q(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],K(a))}function M(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function N(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=C(a._l),h=""+a._i,i=h.length,j=0;for(d=G(a._f,g).match(vb)||[],b=0;b<d.length;b++)e=d[b],c=(h.match(H(e,a))||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Yb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),J(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[lb]<12&&(a._a[lb]+=12),a._isPm===!1&&12===a._a[lb]&&(a._a[lb]=0),K(a),w(a)}function O(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function P(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Q(a){var c,d,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(f=0;f<a._f.length;f++)g=0,c=h({},a),c._pf=b(),c._f=a._f[f],N(c),x(c)&&(g+=c._pf.charsLeftOver,g+=10*c._pf.unusedTokens.length,c._pf.score=g,(null==e||e>g)&&(e=g,d=c));h(a,d||c)}function R(a){var b,c,d=a._i,e=Mb.exec(d);if(e){for(a._pf.iso=!0,b=0,c=Ob.length;c>b;b++)if(Ob[b][1].exec(d)){a._f=Ob[b][0]+(e[6]||" ");break}for(b=0,c=Pb.length;c>b;b++)if(Pb[b][1].exec(d)){a._f+=Pb[b][0];break}d.match(Db)&&(a._f+="Z"),N(a)}else a._d=new Date(d)}function S(b){var c=b._i,d=sb.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?R(b):m(c)?(b._a=c.slice(0),K(b)):n(c)?b._d=new Date(+c):"object"==typeof c?L(b):b._d=new Date(c)}function T(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function U(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function V(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function W(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function X(a,b,c){var d=hb(Math.abs(a)/1e3),e=hb(d/60),f=hb(e/60),g=hb(f/24),h=hb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",hb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,W.apply({},i)}function Y(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=db(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function Z(a,b,c,d,e){var f,g,h=U(a,0,1).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:u(a-1)+g}}function $(a){var b=a._i,c=a._f;return null===b?db.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=C().preparse(b)),db.isMoment(b)?(a=i(b),a._d=new Date(+b._d)):c?m(c)?Q(a):N(a):S(a),new f(a))}function _(a,b){db.fn[a]=db.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),db.updateOffset(this),this):this._d["get"+c+b]()}}function ab(a){db.duration.fn[a]=function(){return this._data[a]}}function bb(a,b){db.duration.fn["as"+a]=function(){return+this/b}}function cb(a){var b=!1,c=db;"undefined"==typeof ender&&(a?(gb.moment=function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)},h(gb.moment,c)):gb.moment=db)}for(var db,eb,fb="2.5.1",gb=this,hb=Math.round,ib=0,jb=1,kb=2,lb=3,mb=4,nb=5,ob=6,pb={},qb={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},rb="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,sb=/^\/?Date\((\-?\d+)/i,tb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ub=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,vb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,wb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,xb=/\d\d?/,yb=/\d{1,3}/,zb=/\d{1,4}/,Ab=/[+\-]?\d{1,6}/,Bb=/\d+/,Cb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Db=/Z|[\+\-]\d\d:?\d\d/gi,Eb=/T/i,Fb=/[\+\-]?\d+(\.\d{1,3})?/,Gb=/\d/,Hb=/\d\d/,Ib=/\d{3}/,Jb=/\d{4}/,Kb=/[+-]?\d{6}/,Lb=/[+-]?\d+/,Mb=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Nb="YYYY-MM-DDTHH:mm:ssZ",Ob=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Pb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Qb=/([\+\-]|\d\d)/gi,Rb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Sb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Tb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Ub={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Vb={},Wb="DDD w W M D d".split(" "),Xb="M D H h m s w W".split(" "),Yb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return k(this.year()%100,2)},YYYY:function(){return k(this.year(),4)},YYYYY:function(){return k(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+k(Math.abs(a),6)},gg:function(){return k(this.weekYear()%100,2)},gggg:function(){return k(this.weekYear(),4)},ggggg:function(){return k(this.weekYear(),5)},GG:function(){return k(this.isoWeekYear()%100,2)},GGGG:function(){return k(this.isoWeekYear(),4)},GGGGG:function(){return k(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return s(this.milliseconds()/100)},SS:function(){return k(s(this.milliseconds()/10),2)},SSS:function(){return k(this.milliseconds(),3)},SSSS:function(){return k(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+":"+k(s(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+k(s(a/60),2)+k(s(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Zb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Wb.length;)eb=Wb.pop(),Yb[eb+"o"]=d(Yb[eb],eb);for(;Xb.length;)eb=Xb.pop(),Yb[eb+eb]=c(Yb[eb],2);for(Yb.DDDD=c(Yb.DDD,3),h(e.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=db.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=db([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return Y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),db=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=c,g._f=d,g._l=e,g._strict=f,g._isUTC=!1,g._pf=b(),$(g)},db.utc=function(c,d,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=c,g._f=d,g._strict=f,g._pf=b(),$(g).utc()},db.unix=function(a){return db(1e3*a)},db.duration=function(a,b){var c,d,e,f=a,h=null;return db.isDuration(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(f={},b?f[b]=a:f.milliseconds=a):(h=tb.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:s(h[kb])*c,h:s(h[lb])*c,m:s(h[mb])*c,s:s(h[nb])*c,ms:s(h[ob])*c}):(h=ub.exec(a))&&(c="-"===h[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},f={y:e(h[2]),M:e(h[3]),d:e(h[4]),h:e(h[5]),m:e(h[6]),s:e(h[7]),w:e(h[8])}),d=new g(f),db.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},db.version=fb,db.defaultFormat=Nb,db.updateOffset=function(){},db.lang=function(a,b){var c;return a?(b?A(y(a),b):null===b?(B(a),a="en"):pb[a]||C(a),c=db.duration.fn._lang=db.fn._lang=C(a),c._abbr):db.fn._lang._abbr},db.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),C(a)},db.isMoment=function(a){return a instanceof f||null!=a&&a.hasOwnProperty("_isAMomentObject")},db.isDuration=function(a){return a instanceof g},eb=Zb.length-1;eb>=0;--eb)r(Zb[eb]);for(db.normalizeUnits=function(a){return p(a)},db.invalid=function(a){var b=db.utc(0/0);return null!=a?h(b._pf,a):b._pf.userInvalidated=!0,b},db.parseZone=function(a){return db(a).parseZone()},h(db.fn=f.prototype,{clone:function(){return db(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=db(this).utc();return 0<a.year()&&a.year()<=9999?F(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):F(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return x(this)},isDSTShifted:function(){return this._a?this.isValid()&&o(this._a,(this._isUTC?db.utc(this._a):db(this._a)).toArray())>0:!1},parsingFlags:function(){return h({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=F(this,a||db.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?db.duration(+b,a):db.duration(a,b),l(this,c,-1),this},diff:function(a,b,c){var d,e,f=z(a,this),g=6e4*(this.zone()-f.zone());return b=p(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-db(this).startOf("month")-(f-db(f).startOf("month")))/d,e-=6e4*(this.zone()-db(this).startOf("month").zone()-(f.zone()-db(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:j(e)},from:function(a,b){return db.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(db(),a)},calendar:function(){var a=z(db(),this).startOf("day"),b=this.diff(a,"days",!0),c=-6>b?"sameElse":-1>b?"lastWeek":0>b?"lastDay":1>b?"sameDay":2>b?"nextDay":7>b?"nextWeek":"sameElse";return this.format(this.lang().calendar(c,this))},isLeapYear:function(){return v(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=V(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),db.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=p(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=p(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+db(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+db(a).startOf(b)},isSame:function(a,b){return b=b||"ms",+this.clone().startOf(b)===+z(a,this).startOf(b)},min:function(a){return a=db.apply(null,arguments),this>a?this:a},max:function(a){return a=db.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=I(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&l(this,db.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?db(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return t(this.year(),this.month())},dayOfYear:function(a){var b=hb((db(this).startOf("day")-db(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=Y(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=Y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=Y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=p(a),this[a]()},set:function(a,b){return a=p(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=C(b),this)}}),eb=0;eb<Rb.length;eb++)_(Rb[eb].toLowerCase().replace(/s$/,""),Rb[eb]);_("year","FullYear"),db.fn.days=db.fn.day,db.fn.months=db.fn.month,db.fn.weeks=db.fn.week,db.fn.isoWeeks=db.fn.isoWeek,db.fn.toJSON=db.fn.toISOString,h(db.duration.fn=g.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,h=this._data;h.milliseconds=e%1e3,a=j(e/1e3),h.seconds=a%60,b=j(a/60),h.minutes=b%60,c=j(b/60),h.hours=c%24,f+=j(c/24),h.days=f%30,g+=j(f/30),h.months=g%12,d=j(g/12),h.years=d},weeks:function(){return j(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*s(this._months/12)},humanize:function(a){var b=+this,c=X(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=db.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=db.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=p(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=p(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:db.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(eb in Sb)Sb.hasOwnProperty(eb)&&(bb(eb,Sb[eb]),ab(eb.toLowerCase()));bb("Weeks",6048e5),db.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},db.lang("en",{ordinal:function(a){var b=a%10,c=1===s(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),rb?(module.exports=db,cb(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config&&d.config()&&d.config().noGlobal!==!0&&cb(d.config().noGlobal===a),db}):cb()}).call(this);
// Generated by CoffeeScript 1.4.0

/*
jQuery Credit Card Validator

Copyright 2012 Pawel Decowski

This work is licensed under the Creative Commons Attribution-ShareAlike 3.0
Unported License. To view a copy of this license, visit:

http://creativecommons.org/licenses/by-sa/3.0/

or send a letter to:

Creative Commons, 444 Castro Street, Suite 900,
Mountain View, California, 94041, USA.
*/


(function() {
  var $,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $ = jQuery;

  $.fn.validateCreditCard = function(callback, options) {
    var card, card_type, card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref, _ref1;
    card_types = [
      {
        name: 'amex',
        pattern: /^3[47]/,
        valid_length: [15]
      }, {
        name: 'diners_club_carte_blanche',
        pattern: /^30[0-5]/,
        valid_length: [14]
      }, {
        name: 'diners_club_international',
        pattern: /^36/,
        valid_length: [14]
      }, {
        name: 'jcb',
        pattern: /^35(2[89]|[3-8][0-9])/,
        valid_length: [16]
      }, {
        name: 'laser',
        pattern: /^(6304|670[69]|6771)/,
        valid_length: [16, 17, 18, 19]
      }, {
        name: 'visa_electron',
        pattern: /^(4026|417500|4508|4844|491(3|7))/,
        valid_length: [16]
      }, {
        name: 'visa',
        pattern: /^4/,
        valid_length: [16]
      }, {
        name: 'mastercard',
        pattern: /^5[1-5]/,
        valid_length: [16]
      }, {
        name: 'maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
        valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
      }, {
        name: 'discover',
        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
        valid_length: [16]
      }
    ];
    if (options == null) {
      options = {};
    }
    if ((_ref = options.accept) == null) {
      options.accept = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = card_types.length; _i < _len; _i++) {
          card = card_types[_i];
          _results.push(card.name);
        }
        return _results;
      })();
    }
    _ref1 = options.accept;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      card_type = _ref1[_i];
      if (__indexOf.call((function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
          card = card_types[_j];
          _results.push(card.name);
        }
        return _results;
      })(), card_type) < 0) {
        throw "Credit card type '" + card_type + "' is not supported";
      }
    }
    get_card_type = function(number) {
      var _j, _len1, _ref2;
      _ref2 = (function() {
        var _k, _len1, _ref2, _results;
        _results = [];
        for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
          card = card_types[_k];
          if (_ref2 = card.name, __indexOf.call(options.accept, _ref2) >= 0) {
            _results.push(card);
          }
        }
        return _results;
      })();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        card_type = _ref2[_j];
        if (number.match(card_type.pattern)) {
          return card_type;
        }
      }
      return null;
    };
    is_valid_luhn = function(number) {
      var digit, n, sum, _j, _len1, _ref2;
      sum = 0;
      _ref2 = number.split('').reverse();
      for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
        digit = _ref2[n];
        digit = +digit;
        if (n % 2) {
          digit *= 2;
          if (digit < 10) {
            sum += digit;
          } else {
            sum += digit - 9;
          }
        } else {
          sum += digit;
        }
      }
      return sum % 10 === 0;
    };
    is_valid_length = function(number, card_type) {
      var _ref2;
      return _ref2 = number.length, __indexOf.call(card_type.valid_length, _ref2) >= 0;
    };
    validate_number = function(number) {
      var length_valid, luhn_valid;
      card_type = get_card_type(number);
      luhn_valid = false;
      length_valid = false;
      if (card_type != null) {
        luhn_valid = is_valid_luhn(number);
        length_valid = is_valid_length(number, card_type);
      }
      return callback({
        card_type: card_type,
        luhn_valid: luhn_valid,
        length_valid: length_valid
      });
    };
    validate = function() {
      var number;
      number = normalize($(this).val());
      return validate_number(number);
    };
    normalize = function(number) {
      return number.replace(/[ -]/g, '');
    };
    this.bind('input', function() {
      $(this).unbind('keyup');
      return validate.call(this);
    });
    this.bind('keyup', function() {
      return validate.call(this);
    });
    if (this.length !== 0) {
      validate.call(this);
    }
    return this;
  };

}).call(this);

/*
* jQuery Cycle2; v20130502
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
(function(e){"use strict";function t(e){return(e||"").toLowerCase()}var i="20130409";e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,c,r=e(this),l=e.fn.cycle.log;if(!r.data("cycle.opts")){(r.data("cycle-log")===!1||i&&i.log===!1||s&&s.log===!1)&&(l=e.noop),l("--c2 init--"),n=r.data();for(var a in n)n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(c=n[a],o=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),l(o+":",c,"("+typeof c+")"),n[o]=c);s=e.extend({},e.fn.cycle.defaults,n,i||{}),s.timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=l,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(i)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort(function(){return Math.random()-.5}),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css("opacity",1).show(),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(i.pauseOnHover!==!0&&(n=e(i.pauseOnHover)),n.hover(function(){i.API.pause(!0)},function(){i.API.resume(!0)})),i.timeout&&(t=i.API.getSlideOpts(i.nextSlide),i.API.queueTransition(t,i.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(0>i._remainingTimeout||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount,c=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(){var t,n=e(this);i?s.container.prepend(n):s.container.append(n),s.slideCount++,t=s.API.buildSlideOpts(n),s.slides=i?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(t,n,--s._maxZ),n.data("cycle.opts",t),s.API.trigger("cycle-slide-added",[s,t,n])}),s.API.updateView(!0),c=s._preInitialized&&2>o&&s.slideCount>=1,c&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,0>t.nextSlide&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=0>t.nextSlide-1,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,c,r=this.opts();return 2>r.slideCount?(r.timeoutId=0,void 0):(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),c=r.API.calcTx(o,e),r._tx=c,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),c.before&&c.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(c.after&&c.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,c.transition?c.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)),void 0)},doTransition:function(t,i,n,s,o){var c=t,r=e(i),l=e(n),a=function(){l.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,o)};l.css(c.cssBefore||{}),r.animate(c.animOut||{},c.speed,c.easeOut||c.easing,function(){r.css(c.cssAfter||{}),c.sync||a()}),c.sync&&a()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0===--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),n.nextSlide=n.currSlide,void 0):(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))),void 0)},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,0>t.nextSlide?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),c=i.data()||{};for(var r in c)c.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=c[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),c[s]=n);c=e.extend({},e.fn.cycle.defaults,o,c),c.slideNum=o.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(l){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e){var t=this.opts();if(t._initialized){var i=t.API.getSlideOpts(),n=t.slides[t.currSlide];!e&&(t.API.trigger("cycle-update-view-before",[t,i,n]),0>t.updateView)||(t.slideActiveClass&&t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass),e&&t.hideNonActive&&t.slides.filter(":not(."+t.slideActiveClass+")").hide(),t.API.trigger("cycle-update-view",[t,i,n,e]),t.API.trigger("cycle-update-view-after",[t,i,n]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s=this.opts();t||(t=s.slides[s.currSlide],i=s.slides[s.nextSlide],n=!s.reverse),e(t).css("zIndex",s.maxZ);var o,c=s.maxZ-2,r=s.slideCount;if(n){for(o=s.currSlide+1;r>o;o++)e(s.slides[o]).css("zIndex",c--);for(o=0;s.currSlide>o;o++)e(s.slides[o]).css("zIndex",c--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",c--);for(o=r-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",c--)}e(i).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+i},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:-1},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})})(jQuery),function(e){"use strict";function t(t,n){var s,o,c,r=n.autoHeight;if("container"==r)o=e(n.slides[n.currSlide]).outerHeight(),n.container.height(o);else if(n._autoHeightRatio)n.container.height(n.container.width()/n._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if(c="calc"===r?i(t,n):r>=n.slides.length?0:r,c==n._sentinelIndex)return;n._sentinelIndex=c,n._sentinel&&n._sentinel.remove(),s=e(n.slides[c].cloneNode(!0)),s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),s.css({position:"static",visibility:"hidden",display:"block"}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),s.find("*").css("visibility","hidden"),n._sentinel=s}}function i(t,i){var n=0,s=-1;return i.slides.each(function(t){var i=e(this).height();i>s&&(s=i,n=t)}),n}function n(t,i,n,s){var o=e(s).outerHeight(),c=i.sync?i.speed/2:i.speed;i.container.animate({height:o},c)}function s(i,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",s),o.container.off("cycle-before",n),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0}),e(document).on("cycle-initialized",function(i,o){function c(){t(i,o)}var r,l=o.autoHeight,a=e.type(l),d=null;("string"===a||"number"===a)&&(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",s),"container"==l?o.container.on("cycle-before",n):"string"===a&&/\d+\:\d+/.test(l)&&(r=l.match(/(\d+)\:(\d+)/),r=r[1]/r[2],o._autoHeightRatio=r),"number"!==a&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(c,30))})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],function(){var e=this,t=n[e+"Template"],o=i.API.getComponent(e);o.length&&t?(o.html(i.API.tmpl(t,n,i,s)),o.show()):o.hide()})}),e(document).on("cycle-destroyed",function(t,i){var n;e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"];i[e]&&t&&(n=i.API.getComponent("caption"),n.empty())})})}(jQuery),function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each(function(){var r;return n=i,o=e(this).data("cycle.opts"),void 0===o?(t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'),void 0):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?(r=e.makeArray(c),r.shift(),s.apply(o.API,r)):(t.log("unknown command: ",n),void 0))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&0>e.currSlide+t||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){var e=this.opts();clearTimeout(e.timeoutId),e.timeoutId=0,e.API.stop(),e.API.trigger("cycle-destroyed",[e]).log("cycle-destroyed"),e.container.removeData("cycle.opts"),e.retainStylesOnDestroy||(e.container.removeAttr("style"),e.slides.removeAttr("style"),e.slides.removeClass("cycle-slide-active"))},jump:function(e){var t,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||0>n||n>=i.slides.length)return i.API.log("goto: invalid slide index: "+n),void 0;if(n==i.currSlide)return i.API.log("goto: skipping, already on slide",n),void 0;i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),t=i.currSlide<i.nextSlide,i.API.prepareTx(!0,t)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],c=1,r=0;s.slides.length>r;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide&&s.API.advanceSlide(1),s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))})}(jQuery),function(e){"use strict";function t(t,i){var n;return t._hashFence?(t._hashFence=!1,void 0):(n=window.location.hash.substring(1),t.slides.each(function(s){return e(this).data("cycle-hash")==n?(i===!0?t.startingSlide=s:(t.nextSlide=s,t.API.prepareTx(!0,!1)),!1):void 0}),void 0)}e(document).on("cycle-pre-initialize",function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,t,i){i.hash&&(t._hashFence=!0,window.location.hash=i.hash)}),e(document).on("cycle-destroyed",function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,i){function n(t,n){function o(t){var o;"wait"==i.loader?(r.push(t),0===a&&(r.sort(c),s.apply(i.API,[r,n]),i.container.removeClass("cycle-loading"))):(o=e(i.slides[i.currSlide]),s.apply(i.API,[t,n]),o.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var r=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var l=0;t.length>l;l++)t[l]=e(t[l])[0];t=e(t);var a=t.length;a&&(t.hide().appendTo("body").each(function(t){function c(){0===--l&&(--a,o(d))}var l=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),u.length?(l=u.length,u.each(function(){this.complete?c():e(this).load(function(){c()}).error(function(){0===--l&&(i.API.log("slide skipped; img not loaded:",this.src),0===--a&&"wait"==i.loader&&s.apply(i.API,[r,n]))})}),void 0):(--a,r.push(d),void 0)}),a&&i.container.addClass("cycle-loading"))}var s;i.loader&&(s=i.API.add,i.API.add=n)})}(jQuery),function(e){"use strict";function t(t,i,n){var s,o=t.API.getComponent("pager");o.each(function(){var o=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(c).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,function(e){e.preventDefault(),t.API.page(o,e.currentTarget)})})}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=n,o=s>i.currSlide;i.currSlide!=s&&(i.nextSlide=s,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,i,n){n.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)}),e(document).on("cycle-slide-removed",function(t,i,n){if(i.pager){var s=i.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[n]).remove()})}}),e(document).on("cycle-update-view",function(t,i){var n;i.pager&&(n=i.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var i;t.pager&&t.pagerTemplate&&(i=t.API.getComponent("pager"),i.empty())})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,function(){t.API.next()}),t.container.on(n,function(){t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),s=t.API.getComponent("prev"),o=t._prevBoundry||0,c=t._nextBoundry||t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===o?s.addClass(i).prop("disabled",!0):s.removeClass(i).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,i){if(i.progressive){var n,s,o=i.API,c=o.next,r=o.prev,l=o.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(s=e(i.progressive),n=e.trim(s.html()),!n)return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(d){return o.log("error parsing progressive slides",d),void 0}else n=n.split(RegExp(s.data("cycle-split")||"\n")),n[n.length-1]||n.pop()}l&&(o.prepareTx=function(e,t){var s,o;return e||0===n.length?(l.apply(i.API,[e,t]),void 0):(t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),i.API.add(o)):t||0!==i.currSlide?l.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),i.API.add(o,!0)),void 0)}),c&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,function(t,i){var n,o,c,r,l=i.split(".");for(n=0;s.length>n;n++)if(c=s[n]){if(l.length>1)for(r=c,o=0;l.length>o;o++)c=r,r=r[l[o]]||i;else r=c[i];if(e.isFunction(r))return r.apply(c,s);if(void 0!==r&&null!==r&&r!=i)return r}return i})}})}(jQuery);

function change_night(add) {

  var total_nights = (jQuery('#set_night_textbox').val() * 1) + (add * 1);

  if (total_nights >= (1 * jQuery('#set_night_textbox').attr("data-max-nights"))) {
    total_nights = 1 * jQuery('#set_night_textbox').attr("data-max-nights");
    // Disable +
    jQuery("a.nights-plus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable +
    jQuery("a.nights-plus").removeClass("ui-disabled");

  }
  if (total_nights <= jQuery('#set_night_textbox').attr("data-min-nights")) {
    total_nights = 1 * jQuery('#set_night_textbox').attr("data-min-nights");
    // Disable -
    jQuery("a.nights-minus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable -
    jQuery("a.nights-minus").removeClass("ui-disabled");
  }
  if (total_nights == 1) {
    jQuery("#set_night_display .ui-btn-text").text("1 Night");
  } else {
    jQuery("#set_night_display .ui-btn-text").text((total_nights * 1) + " Nights");
  }
  jQuery('#set_night_textbox').val((total_nights * 1));
}

function change_a(add) {

  var total_a = (jQuery('#set_a_textbox').val() * 1) + (add * 1);

  if (total_a >= (1 * jQuery('#set_a_textbox').attr("data-max-a"))) {
    total_a = 1 * jQuery('#set_a_textbox').attr("data-max-a");
    // Disable +
    jQuery("a.a-plus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable +
    jQuery("a.a-plus").removeClass("ui-disabled");

  }
  if (total_a <= jQuery('#set_a_textbox').attr("data-min-a")) {
    total_a = 1 * jQuery('#set_a_textbox').attr("data-min-a");
    // Disable -
    jQuery("a.a-minus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable -
    jQuery("a.a-minus").removeClass("ui-disabled");
  }
  if (total_a == 1) {
    jQuery("#set_a_display .ui-btn-text").text("1 Guest");
  } else {
    jQuery("#set_a_display .ui-btn-text").text((total_a * 1) + " Guests");
  }

//  jQuery("#set_a_display .ui-btn-text").text((total_a * 1));
  jQuery('#set_a_textbox').val((total_a * 1));
}

function change_r(add) {

  var total_r = (jQuery('#set_r_textbox').val() * 1) + (add * 1);

  if (total_r >= (1 * jQuery('#set_r_textbox').attr("data-max-r"))) {
    total_r = 1 * jQuery('#set_r_textbox').attr("data-max-r");
    // Disable +
    jQuery("a.r-plus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable +
    jQuery("a.r-plus").removeClass("ui-disabled");
  }
  if (total_r <= jQuery('#set_r_textbox').attr("data-min-r")) {
    total_r = 1 * jQuery('#set_r_textbox').attr("data-min-r");
    // Disable -
    jQuery("a.r-minus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable -
    jQuery("a.r-minus").removeClass("ui-disabled");
  }
  if (total_r == 1) {
    jQuery("#set_r_display .ui-btn-text").text("1 Room");
  } else {
    jQuery("#set_r_display .ui-btn-text").text((total_r * 1) + " Rooms");
  }

//  jQuery("#set_r_display .ui-btn-text").text((total_r * 1));
  jQuery('#set_r_textbox').val((total_r * 1));
}

function change_c(add) {

  var total_c = (jQuery('#set_c_textbox').val() * 1) + (add * 1);

  if (total_c >= (1 * jQuery('#set_c_textbox').attr("data-max-c"))) {
    total_c = 1 * jQuery('#set_c_textbox').attr("data-max-c");
    // Disable +
    jQuery("a.c-plus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable +
    jQuery("a.c-plus").removeClass("ui-disabled");

  }
  if (total_c <= jQuery('#set_c_textbox').attr("data-min-c")) {
    total_c = 1 * jQuery('#set_c_textbox').attr("data-min-c");
    // Disable -
    jQuery("a.c-minus").addClass("ui-disabled").removeClass("ui-focus");
  } else {
    // Enable -
    jQuery("a.c-minus").removeClass("ui-disabled");
  }

  jQuery("#set_c_display .ui-btn-text").text((total_c * 1));

  jQuery('#set_c_textbox').val((total_c * 1));
}
jQuery(document).ready(function () {

  if (jQuery("#set_night_display").is("#set_night_display")) {
    change_night(0);
    // add click events to -  +
    jQuery('a.nights-minus').click(function () {
      change_night(-1);
    });
    jQuery('a.nights-plus').click(function () {
      change_night(1);
    });
    setTimeout(function () {
      change_night(0)
    }, 300);
  }
  if (jQuery("#set_a_display").is("#set_a_display")) {
    change_a(0);
    // add click events to -  +
    jQuery('a.a-minus').click(function () {
      change_a(-1);
    });
    jQuery('a.a-plus').click(function () {
      change_a(1);
    });
    setTimeout(function () {
      change_a(0)
    }, 300);
  }
  if (jQuery("#set_r_display").is("#set_r_display")) {
    change_r(0);
    // add click events to -  +
    jQuery('a.r-minus').click(function () {
      change_r(-1);
    });
    jQuery('a.r-plus').click(function () {
      change_r(1);
    });
    setTimeout(function () {
      change_r(0)
    }, 300);
  }
  if (jQuery("#date-in").is("#date-in")) {

    jQuery("#date-in").change(function() {
        jQuery("#date").val(jQuery("#date-in").val());
        jQuery("#date-in").val( moment( 
              jQuery("#date").val().replace("/","-")
        ).calendar() );
    })
    moment.lang('en', {
      calendar : {
        sameDay : '[Tonight]',
        nextDay : '[Tomorrow]',
        nextWeek : '[this] dddd',
        sameElse : 'DD MMM YYYY'
      }
    });
  };
  if (jQuery("#set_c_display").is("#set_c_display")) {
    change_c(0);
    // add click events to -  +
    jQuery('a.c-minus').click(function () {
      change_c(-1);
    });
    jQuery('a.c-plus').click(function () {
      change_c(1);
    });
    setTimeout(function () {
      change_c(0)
    }, 300);
  };
});

/*! jQuery Mobile 1.4.0pre | Git HEAD hash: 34fab9f <> 2013-05-22T15:44:00Z | (c) 2010, 2013 jQuery Foundation, Inc. | jquery.org/license */
(function(e,t,i){"function"==typeof define&&define.amd?define(["jquery"],function(n){return i(n,e,t),n.mobile}):i(e.jQuery,e,t)})(this,document,function(e,t,i,n){(function(e){e.mobile={}})(e),function(e,t,n){var o={},a=e.find,s=/:jqmData\(([^)]*)\)/g;e.extend(e.mobile,{version:"1.4.0pre",ns:"",subPageUrlKey:"ui-page",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:!0,hashListeningEnabled:!0,linkBindingEnabled:!0,defaultPageTransition:"fade",maxTransitionWidth:!1,minScrollBack:250,touchOverflowEnabled:!1,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"e",phonegapNavigationEnabled:!1,autoInitializePage:!0,pushStateEnabled:!0,ignoreContentEnabled:!1,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:!0,pageContainer:e(),window:e(t),document:e(i),keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},behaviors:{},getAttribute:function(t,i,o){var a;return o&&(i="data-"+e.mobile.ns+i),a=t.getAttribute(i),"true"===a?!0:"false"===a?!1:null===a?n:a},silentScroll:function(i){"number"!==e.type(i)&&(i=e.mobile.defaultHomeScroll),e.event.special.scrollstart.enabled=!1,setTimeout(function(){t.scrollTo(0,i),e.mobile.document.trigger("silentscroll",{x:0,y:i})},20),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},nsNormalizeDict:o,nsNormalize:function(t){return o[t]||(o[t]=e.camelCase(e.mobile.ns+t))},getInheritedTheme:function(e,t){for(var i,n,o=e[0],a="",s=/ui-(bar|body|overlay)-([a-z])\b/;o&&(i=o.className||"",!(i&&(n=s.exec(i))&&(a=n[2])));)o=o.parentNode;return a||t||"a"},closestPageData:function(e){return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")},enhanceable:function(e){return this.haveParents(e,"enhance")},hijackable:function(e){return this.haveParents(e,"ajax")},haveParents:function(t,i){if(!e.mobile.ignoreContentEnabled)return t;var n,o,a,s,l,r=t.length,d=e();for(s=0;r>s;s++){for(o=t.eq(s),a=!1,n=t[s];n;){if(l=n.getAttribute?n.getAttribute("data-"+e.mobile.ns+i):"","false"===l){a=!0;break}n=n.parentNode}a||(d=d.add(o))}return d},getScreenHeight:function(){return t.innerHeight||e.mobile.window.height()}}),e.fn.jqmData=function(t,i){var o;return t!==n&&(t&&(t=e.mobile.nsNormalize(t)),o=2>arguments.length||i===n?this.data(t):this.data(t,i)),o},e.jqmData=function(t,i,o){var a;return i!==n&&(a=e.data(t,i?e.mobile.nsNormalize(i):i,o)),a},e.fn.jqmRemoveData=function(t){return this.removeData(e.mobile.nsNormalize(t))},e.jqmRemoveData=function(t,i){return e.removeData(t,e.mobile.nsNormalize(i))},e.fn.removeWithDependents=function(){e.removeWithDependents(this)},e.removeWithDependents=function(t){var i=e(t);(i.jqmData("dependents")||e()).remove(),i.remove()},e.fn.addDependents=function(t){e.addDependents(this,t)},e.addDependents=function(t,i){var n=e(t),o=n.jqmData("dependents")||e();n.jqmData("dependents",e(o).add(i))},e.fn.getEncodedText=function(){return e("<a>").text(e(this).text()).html()},e.fn.jqmEnhanceable=function(){return e.mobile.enhanceable(this)},e.fn.jqmHijackable=function(){return e.mobile.hijackable(this)},e.find=function(t,i,n,o){return t=t.replace(s,"[data-"+(e.mobile.ns||"")+"$1]"),a.call(this,t,i,n,o)},e.extend(e.find,a),e.find.matches=function(t,i){return e.find(t,null,null,i)},e.find.matchesSelector=function(t,i){return e.find(i,null,null,[t]).length>0}}(e,this),function(e,t){var i=0,n=Array.prototype.slice,o=e.cleanData;e.cleanData=function(t){for(var i,n=0;null!=(i=t[n]);n++)try{e(i).triggerHandler("remove")}catch(a){}o(t)},e.widget=function(i,n,o){var a,s,l,r,d={},h=i.split(".")[0];i=i.split(".")[1],a=h+"-"+i,o||(o=n,n=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[h]=e[h]||{},s=e[h][i],l=e[h][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new l(e,i)},e.extend(l,s,{version:o.version,_proto:e.extend({},o),_childConstructors:[]}),r=new n,r.options=e.widget.extend({},r.options),e.each(o,function(i,o){return e.isFunction(o)?(d[i]=function(){var e=function(){return n.prototype[i].apply(this,arguments)},t=function(e){return n.prototype[i].apply(this,e)};return function(){var i,n=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=o.apply(this,arguments),this._super=n,this._superApply=a,i}}(),t):(d[i]=o,t)}),l.prototype=e.widget.extend(r,{widgetEventPrefix:s?r.widgetEventPrefix:i},d,{constructor:l,namespace:h,widgetName:i,widgetFullName:a}),s?(e.each(s._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,l,i._proto)}),delete s._childConstructors):n._childConstructors.push(l),e.widget.bridge(i,l)},e.widget.extend=function(i){for(var o,a,s=n.call(arguments,1),l=0,r=s.length;r>l;l++)for(o in s[l])a=s[l][o],s[l].hasOwnProperty(o)&&a!==t&&(i[o]=e.isPlainObject(a)?e.isPlainObject(i[o])?e.widget.extend({},i[o],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,o){var a=o.prototype.widgetFullName||i;e.fn[i]=function(s){var l="string"==typeof s,r=n.call(arguments,1),d=this;return s=!l&&r.length?e.widget.extend.apply(null,[s].concat(r)):s,l?this.each(function(){var n,o=e.data(this,a);return o?e.isFunction(o[s])&&"_"!==s.charAt(0)?(n=o[s].apply(o,r),n!==o&&n!==t?(d=n&&n.jquery?d.pushStack(n.get()):n,!1):t):e.error("no such method '"+s+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+s+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(s||{})._init():e.data(this,a,new o(s,this))}),d}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,n){var o,a,s,l=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(l={},o=i.split("."),i=o.shift(),o.length){for(a=l[i]=e.widget.extend({},this.options[i]),s=0;o.length-1>s;s++)a[o[s]]=a[o[s]]||{},a=a[o[s]];if(i=o.pop(),n===t)return a[i]===t?null:a[i];a[i]=n}else{if(n===t)return this.options[i]===t?null:this.options[i];l[i]=n}return this._setOptions(l),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,n,o){var a,s=this;"boolean"!=typeof i&&(o=n,n=i,i=!1),o?(n=a=e(n),this.bindings=this.bindings.add(n)):(o=n,n=this.element,a=this.widget()),e.each(o,function(o,l){function r(){return i||s.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof l?s[l]:l).apply(s,arguments):t}"string"!=typeof l&&(r.guid=l.guid=l.guid||r.guid||e.guid++);var d=o.match(/^(\w+)\s*(.*)$/),h=d[1]+s.eventNamespace,c=d[2];c?a.delegate(c,h,r):n.bind(h,r)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var o,a,s=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(o in a)o in i||(i[o]=a[o]);return this.element.trigger(i,n),!(e.isFunction(s)&&s.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,o,a){"string"==typeof o&&(o={effect:o});var s,l=o?o===!0||"number"==typeof o?i:o.effect||i:t;o=o||{},"number"==typeof o&&(o={duration:o}),s=!e.isEmptyObject(o),o.complete=a,o.delay&&n.delay(o.delay),s&&e.effects&&e.effects.effect[l]?n[t](o):l!==t&&n[l]?n[l](o.duration,o.easing,a):n.queue(function(i){e(this)[t](),a&&a.call(n[0]),i()})}})}(e),function(e,t){e.widget("mobile.widget",{_getCreateOptions:function(){var i=this.element,n={};return e.each(this.options,function(o){var a=e.mobile.getAttribute(i[0],o.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),!0);a!==t&&(n[o]=a)}),n},enhanceWithin:function(t,i){this.enhance(e(e[this.namespace][this.widgetName].initSelector,e(t)),i)},enhance:function(t,i){var n,o,a=e(t);a=e.mobile.enhanceable(a),i&&a.length&&(n=e.mobile.closestPageData(a),o=n&&n.keepNativeSelector()||"",a=a.not(o)),a[this.widgetName]()},raise:function(e){throw"Widget ["+this.widgetName+"]: "+e}})}(e),function(e){e.extend(e.mobile,{loadingMessageTextVisible:n,loadingMessageTheme:n,loadingMessage:n,showPageLoadingMsg:function(t,i,n){e.mobile.loading("show",t,i,n)},hidePageLoadingMsg:function(){e.mobile.loading("hide")},loading:function(){this.loaderWidget.loader.apply(this.loaderWidget,arguments)}});var t="ui-loader",i=e("html"),o=e.mobile.window;e.widget("mobile.loader",{options:{theme:"a",textVisible:!1,html:"",text:"loading"},defaultHtml:"<div class='"+t+"'>"+"<span class='ui-icon ui-icon-loading'></span>"+"<h1></h1>"+"</div>",fakeFixLoader:function(){var t=e("."+e.mobile.activeBtnClass).first();this.element.css({top:e.support.scrollTop&&o.scrollTop()+o.height()/2||t.length&&t.offset().top||100})},checkLoaderPosition:function(){var t=this.element.offset(),i=o.scrollTop(),n=e.mobile.getScreenHeight();(i>t.top||t.top-i>n)&&(this.element.addClass("ui-loader-fakefix"),this.fakeFixLoader(),o.unbind("scroll",this.checkLoaderPosition).bind("scroll",e.proxy(this.fakeFixLoader,this)))},resetHtml:function(){this.element.html(e(this.defaultHtml).html())},show:function(a,s,l){var r,d,h;this.resetHtml(),"object"===e.type(a)?(h=e.extend({},this.options,a),a=h.theme||e.mobile.loadingMessageTheme):(h=this.options,a=a||e.mobile.loadingMessageTheme||h.theme),d=s||e.mobile.loadingMessage||h.text,i.addClass("ui-loading"),(e.mobile.loadingMessage!==!1||h.html)&&(r=e.mobile.loadingMessageTextVisible!==n?e.mobile.loadingMessageTextVisible:h.textVisible,this.element.attr("class",t+" ui-corner-all ui-body-"+a+" ui-loader-"+(r||s||a.text?"verbose":"default")+(h.textonly||l?" ui-loader-textonly":"")),h.html?this.element.html(h.html):this.element.find("h1").text(d),this.element.appendTo(e.mobile.pageContainer),this.checkLoaderPosition(),o.bind("scroll",e.proxy(this.checkLoaderPosition,this)))},hide:function(){i.removeClass("ui-loading"),e.mobile.loadingMessage&&this.element.removeClass("ui-loader-fakefix"),e.mobile.window.unbind("scroll",this.fakeFixLoader),e.mobile.window.unbind("scroll",this.checkLoaderPosition)}}),o.bind("pagecontainercreate",function(){e.mobile.loaderWidget=e.mobile.loaderWidget||e(e.mobile.loader.prototype.defaultHtml).loader()})}(e,this),function(e,t,n){function o(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var a,s="hashchange",l=i,r=e.event.special,d=l.documentMode,h="on"+s in t&&(d===n||d>7);e.fn[s]=function(e){return e?this.bind(s,e):this.trigger(s)},e.fn[s].delay=50,r[s]=e.extend(r[s],{setup:function(){return h?!1:(e(a.start),n)},teardown:function(){return h?!1:(e(a.stop),n)}}),a=function(){function i(){var n=o(),l=p(d);n!==d?(u(d=n,l),e(t).trigger(s)):l!==d&&(location.href=location.href.replace(/#.*/,"")+l),a=setTimeout(i,e.fn[s].delay)}var a,r={},d=o(),c=function(e){return e},u=c,p=c;return r.start=function(){a||i()},r.stop=function(){a&&clearTimeout(a),a=n},t.attachEvent&&!t.addEventListener&&!h&&function(){var t,n;r.start=function(){t||(n=e.fn[s].src,n=n&&n+o(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||u(o()),i()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow,l.onpropertychange=function(){try{"title"===event.propertyName&&(t.document.title=l.title)}catch(e){}})},r.stop=c,p=function(){return o(t.location.href)},u=function(i,n){var o=t.document,a=e.fn[s].domain;i!==n&&(o.title=l.title,o.open(),a&&o.write('<script>document.domain="'+a+'"</script>'),o.close(),t.location.hash=i)}}(),r}()}(e,this),function(e){t.matchMedia=t.matchMedia||function(e){var t,i=e.documentElement,n=i.firstElementChild||i.firstChild,o=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",o.style.background="none",o.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',i.insertBefore(o,n),t=42===a.offsetWidth,i.removeChild(o),{matches:t,media:e}}}(i),e.mobile.media=function(e){return t.matchMedia(e).matches}}(e),function(e){var t={touch:"ontouchend"in i};e.mobile.support=e.mobile.support||{},e.extend(e.support,t),e.extend(e.mobile.support,t)}(e),function(e){e.extend(e.support,{orientation:"orientation"in t&&"onorientationchange"in t})}(e),function(e,n){function o(e){var t,i=e.charAt(0).toUpperCase()+e.substr(1),o=(e+" "+m.join(i+" ")+i).split(" ");for(t in o)if(p[o[t]]!==n)return!0}function a(e,t,n){var o,a,s=i.createElement("div"),l=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},r=function(e){return""===e?"":"-"+e.charAt(0).toLowerCase()+e.substr(1)+"-"},d=function(i){var n=r(i)+e+": "+t+";",o=l(i),d=o+(""===o?e:l(e));s.setAttribute("style",n),s.style[d]&&(a=!0)},h=n?n:m;for(o=0;h.length>o;o++)d(h[o]);return!!a}function s(){var o,a,s,l="transform-3d",r=e.mobile.media("(-"+m.join("-"+l+"),(-")+"-"+l+"),("+l+")");if(r)return!!r;o=i.createElement("div"),a={MozTransform:"-moz-transform",transform:"transform"},u.append(o);for(s in a)o.style[s]!==n&&(o.style[s]="translate3d( 100px, 1px, 1px )",r=t.getComputedStyle(o).getPropertyValue(a[s]));return!!r&&"none"!==r}function l(){var t,i,n=location.protocol+"//"+location.host+location.pathname+"ui-dir/",o=e("head base"),a=null,s="";return o.length?s=o.attr("href"):o=a=e("<base>",{href:n}).appendTo("head"),t=e("<a href='testurl' />").prependTo(u),i=t[0].href,o[0].href=s||location.pathname,a&&a.remove(),0===i.indexOf(n)}function r(){var e,n=i.createElement("x"),o=i.documentElement,a=t.getComputedStyle;return"pointerEvents"in n.style?(n.style.pointerEvents="auto",n.style.pointerEvents="x",o.appendChild(n),e=a&&"auto"===a(n,"").pointerEvents,o.removeChild(n),!!e):!1}function d(){var e=i.createElement("div");return e.getBoundingClientRect!==n}function h(){var e=t,i=navigator.userAgent,n=navigator.platform,o=i.match(/AppleWebKit\/([0-9]+)/),a=!!o&&o[1],s=i.match(/Fennec\/([0-9]+)/),l=!!s&&s[1],r=i.match(/Opera Mobi\/([0-9]+)/),d=!!r&&r[1];return(n.indexOf("iPhone")>-1||n.indexOf("iPad")>-1||n.indexOf("iPod")>-1)&&a&&534>a||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||r&&7458>d||i.indexOf("Android")>-1&&a&&533>a||l&&6>l||"palmGetResource"in t&&a&&534>a||i.indexOf("MeeGo")>-1&&i.indexOf("NokiaBrowser/8.5.0")>-1?!1:!0}var c,u=e("<body>").prependTo("html"),p=u[0].style,m=["Webkit","Moz","O"],f="palmGetResource"in t,b=t.opera,g=t.operamini&&"[object OperaMini]"==={}.toString.call(t.operamini),v=t.blackberry&&!o("-webkit-transform");e.extend(e.mobile,{browser:{}}),e.mobile.browser.oldIE=function(){var e=3,t=i.createElement("div"),n=t.all||[];do t.innerHTML="<!--[if gt IE "+ ++e+"]><br><![endif]-->";while(n[0]);return e>4?e:!e}(),e.extend(e.support,{cssTransitions:"WebKitTransitionEvent"in t||a("transition","height 100ms linear",["Webkit","Moz",""])&&!e.mobile.browser.oldIE&&!b,pushState:"pushState"in history&&"replaceState"in history&&!(t.navigator.userAgent.indexOf("Firefox")>=0&&t.top!==t)&&-1===t.navigator.userAgent.search(/CriOS/),mediaquery:e.mobile.media("only all"),cssPseudoElement:!!o("content"),touchOverflow:!!o("overflowScrolling"),cssTransform3d:s(),boxShadow:!!o("boxShadow")&&!v,fixedPosition:h(),scrollTop:("pageXOffset"in t||"scrollTop"in i.documentElement||"scrollTop"in u[0])&&!f&&!g,dynamicBaseTag:l(),cssPointerEvents:r(),boundingRect:d()}),u.remove(),c=function(){var e=t.navigator.userAgent;return e.indexOf("Nokia")>-1&&(e.indexOf("Symbian/3")>-1||e.indexOf("Series60/5")>-1)&&e.indexOf("AppleWebKit")>-1&&e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)}(),e.mobile.gradeA=function(){return(e.support.mediaquery||e.mobile.browser.oldIE&&e.mobile.browser.oldIE>=7)&&(e.support.boundingRect||null!==e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))},e.mobile.ajaxBlacklist=t.blackberry&&!t.WebKitPoint||g||c,c&&e(function(){e("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")}),e.support.boxShadow||e("html").addClass("ui-mobile-nosupport-boxshadow")}(e),function(e,t){var i,n=e.mobile.window,o=function(){};e.event.special.beforenavigate={setup:function(){n.on("navigate",o)},teardown:function(){n.off("navigate",o)}},e.event.special.navigate=i={bound:!1,pushStateEnabled:!0,originalEventName:t,isPushStateEnabled:function(){return e.support.pushState&&e.mobile.pushStateEnabled===!0&&this.isHashChangeEnabled()},isHashChangeEnabled:function(){return e.mobile.hashListeningEnabled===!0},popstate:function(t){var i=new e.Event("navigate"),o=new e.Event("beforenavigate"),a=t.originalEvent.state||{};o.originalEvent=t,n.trigger(o),o.isDefaultPrevented()||(t.historyState&&e.extend(a,t.historyState),i.originalEvent=t,setTimeout(function(){n.trigger(i,{state:a})},0))},hashchange:function(t){var i=new e.Event("navigate"),o=new e.Event("beforenavigate");o.originalEvent=t,n.trigger(o),o.isDefaultPrevented()||(i.originalEvent=t,n.trigger(i,{state:t.hashchangeState||{}}))},setup:function(){i.bound||(i.bound=!0,i.isPushStateEnabled()?(i.originalEventName="popstate",n.bind("popstate.navigate",i.popstate)):i.isHashChangeEnabled()&&(i.originalEventName="hashchange",n.bind("hashchange.navigate",i.hashchange)))}}}(e),function(e,i){var n,o,a="&ui-state=dialog";e.mobile.path=n={uiStateKey:"&ui-state",urlParseRE:/^\s*(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,getLocation:function(e){var t=e?this.parseUrl(e):location,i=this.parseUrl(e||location.href).hash;return i="#"===i?"":i,t.protocol+"//"+t.host+t.pathname+t.search+i},parseLocation:function(){return this.parseUrl(this.getLocation())},parseUrl:function(t){if("object"===e.type(t))return t;var i=n.urlParseRE.exec(t||"")||[];return{href:i[0]||"",hrefNoHash:i[1]||"",hrefNoSearch:i[2]||"",domain:i[3]||"",protocol:i[4]||"",doubleSlash:i[5]||"",authority:i[6]||"",username:i[8]||"",password:i[9]||"",host:i[10]||"",hostname:i[11]||"",port:i[12]||"",pathname:i[13]||"",directory:i[14]||"",filename:i[15]||"",search:i[16]||"",hash:i[17]||""}},makePathAbsolute:function(e,t){var i,n,o,a;if(e&&"/"===e.charAt(0))return e;for(e=e||"",t=t?t.replace(/^\/|(\/[^\/]*|[^\/]+)$/g,""):"",i=t?t.split("/"):[],n=e.split("/"),o=0;n.length>o;o++)switch(a=n[o]){case".":break;case"..":i.length&&i.pop();break;default:i.push(a)}return"/"+i.join("/")},isSameDomain:function(e,t){return n.parseUrl(e).domain===n.parseUrl(t).domain},isRelativeUrl:function(e){return""===n.parseUrl(e).protocol},isAbsoluteUrl:function(e){return""!==n.parseUrl(e).protocol},makeUrlAbsolute:function(e,t){if(!n.isRelativeUrl(e))return e;t===i&&(t=this.documentBase);var o=n.parseUrl(e),a=n.parseUrl(t),s=o.protocol||a.protocol,l=o.protocol?o.doubleSlash:o.doubleSlash||a.doubleSlash,r=o.authority||a.authority,d=""!==o.pathname,h=n.makePathAbsolute(o.pathname||a.filename,a.pathname),c=o.search||!d&&a.search||"",u=o.hash;return s+l+r+h+c+u},addSearchParams:function(t,i){var o=n.parseUrl(t),a="object"==typeof i?e.param(i):i,s=o.search||"?";return o.hrefNoSearch+s+("?"!==s.charAt(s.length-1)?"&":"")+a+(o.hash||"")},convertUrlToDataUrl:function(e){var i=n.parseUrl(e);return n.isEmbeddedPage(i)?i.hash.split(a)[0].replace(/^#/,"").replace(/\?.*$/,""):n.isSameDomain(i,this.documentBase)?i.hrefNoHash.replace(this.documentBase.domain,"").split(a)[0]:t.decodeURIComponent(e)},get:function(e){return e===i&&(e=n.parseLocation().hash),n.stripHash(e).replace(/[^\/]*\.[^\/*]+$/,"")},set:function(e){location.hash=e},isPath:function(e){return/\//.test(e)},clean:function(e){return e.replace(this.documentBase.domain,"")},stripHash:function(e){return e.replace(/^#/,"")},stripQueryParams:function(e){return e.replace(/\?.*$/,"")},cleanHash:function(e){return n.stripHash(e.replace(/\?.*$/,"").replace(a,""))},isHashValid:function(e){return/^#[^#]+$/.test(e)},isExternal:function(e){var t=n.parseUrl(e);return t.protocol&&t.domain!==this.documentUrl.domain?!0:!1},hasProtocol:function(e){return/^(:?\w+:)/.test(e)},isEmbeddedPage:function(e){var t=n.parseUrl(e);return""!==t.protocol?!this.isPath(t.hash)&&t.hash&&(t.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&t.hrefNoHash===this.documentBase.hrefNoHash):/^#/.test(t.href)},squash:function(e,t){var i,o,a,s,l=this.isPath(e),r=this.parseUrl(e),d=r.hash,h="";return t=t||(n.isPath(e)?n.getLocation():n.getDocumentUrl()),o=l?n.stripHash(e):e,o=n.isPath(r.hash)?n.stripHash(r.hash):o,s=o.indexOf(this.uiStateKey),s>-1&&(h=o.slice(s),o=o.slice(0,s)),i=n.makeUrlAbsolute(o,t),a=this.parseUrl(i).search,l?((n.isPath(d)||0===d.replace("#","").indexOf(this.uiStateKey))&&(d=""),h&&-1===d.indexOf(this.uiStateKey)&&(d+=h),-1===d.indexOf("#")&&""!==d&&(d="#"+d),i=n.parseUrl(i),i=i.protocol+"//"+i.host+i.pathname+a+d):i+=i.indexOf("#")>-1?h:"#"+h,i},isPreservableHash:function(e){return 0===e.replace("#","").indexOf(this.uiStateKey)},hashToSelector:function(e){var t="#"===e.substring(0,1);return t&&(e=e.substring(1)),(t?"#":"")+e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")}},n.documentUrl=n.parseLocation(),o=e("head").find("base"),n.documentBase=o.length?n.parseUrl(n.makeUrlAbsolute(o.attr("href"),n.documentUrl.href)):n.documentUrl,n.documentBaseDiffers=n.documentUrl.hrefNoHash!==n.documentBase.hrefNoHash,n.getDocumentUrl=function(t){return t?e.extend({},n.documentUrl):n.documentUrl.href},n.getDocumentBase=function(t){return t?e.extend({},n.documentBase):n.documentBase.href}}(e),function(e,t){e.mobile.History=function(e,t){this.stack=e||[],this.activeIndex=t||0},e.extend(e.mobile.History.prototype,{getActive:function(){return this.stack[this.activeIndex]},getLast:function(){return this.stack[this.previousIndex]},getNext:function(){return this.stack[this.activeIndex+1]},getPrev:function(){return this.stack[this.activeIndex-1]},add:function(e,t){t=t||{},this.getNext()&&this.clearForward(),t.hash&&-1===t.hash.indexOf("#")&&(t.hash="#"+t.hash),t.url=e,this.stack.push(t),this.activeIndex=this.stack.length-1},clearForward:function(){this.stack=this.stack.slice(0,this.activeIndex+1)},find:function(e,t,i){t=t||this.stack;var n,o,a,s=t.length;for(o=0;s>o;o++)if(n=t[o],(decodeURIComponent(e)===decodeURIComponent(n.url)||decodeURIComponent(e)===decodeURIComponent(n.hash))&&(a=o,i))return a;return a},closest:function(e){var i,n=this.activeIndex;return i=this.find(e,this.stack.slice(0,n)),i===t&&(i=this.find(e,this.stack.slice(n),!0),i=i===t?i:i+n),i},direct:function(i){var n=this.closest(i.url),o=this.activeIndex;n!==t&&(this.activeIndex=n,this.previousIndex=o),o>n?(i.present||i.back||e.noop)(this.getActive(),"back"):n>o?(i.present||i.forward||e.noop)(this.getActive(),"forward"):n===t&&i.missing&&i.missing(this.getActive())}})}(e),function(e){var o=e.mobile.path,a=location.href;e.mobile.Navigator=function(t){this.history=t,this.ignoreInitialHashChange=!0,e.mobile.window.bind({"popstate.history":e.proxy(this.popstate,this),"hashchange.history":e.proxy(this.hashchange,this)})},e.extend(e.mobile.Navigator.prototype,{squash:function(n,a){var s,l,r=o.isPath(n)?o.stripHash(n):n;return l=o.squash(n),s=e.extend({hash:r,url:l},a),t.history.replaceState(s,s.title||i.title,l),s},hash:function(e,t){var i,n,a,s;return i=o.parseUrl(e),n=o.parseLocation(),n.pathname+n.search===i.pathname+i.search?a=i.hash?i.hash:i.pathname+i.search:o.isPath(e)?(s=o.parseUrl(t),a=s.pathname+s.search+(o.isPreservableHash(s.hash)?s.hash.replace("#",""):"")):a=e,a},go:function(n,a,s){var l,r,d,h,c=e.event.special.navigate.isPushStateEnabled();r=o.squash(n),d=this.hash(n,r),s&&d!==o.stripHash(o.parseLocation().hash)&&(this.preventNextHashChange=s),this.preventHashAssignPopState=!0,t.location.hash=d,this.preventHashAssignPopState=!1,l=e.extend({url:r,hash:d,title:i.title},a),c&&(h=new e.Event("popstate"),h.originalEvent={type:"popstate",state:null},this.squash(n,l),s||(this.ignorePopState=!0,e.mobile.window.trigger(h))),this.history.add(l.url,l)},popstate:function(t){var i,s;if(e.event.special.navigate.isPushStateEnabled())return this.preventHashAssignPopState?(this.preventHashAssignPopState=!1,t.stopImmediatePropagation(),n):this.ignorePopState?(this.ignorePopState=!1,n):!t.originalEvent.state&&1===this.history.stack.length&&this.ignoreInitialHashChange&&(this.ignoreInitialHashChange=!1,location.href===a)?(t.preventDefault(),n):(i=o.parseLocation().hash,!t.originalEvent.state&&i?(s=this.squash(i),this.history.add(s.url,s),t.historyState=s,n):(this.history.direct({url:(t.originalEvent.state||{}).url||i,present:function(i,n){t.historyState=e.extend({},i),t.historyState.direction=n}}),n))},hashchange:function(t){var a,s;if(e.event.special.navigate.isHashChangeEnabled()&&!e.event.special.navigate.isPushStateEnabled()){if(this.preventNextHashChange)return this.preventNextHashChange=!1,t.stopImmediatePropagation(),n;a=this.history,s=o.parseLocation().hash,this.history.direct({url:s,present:function(i,n){t.hashchangeState=e.extend({},i),t.hashchangeState.direction=n},missing:function(){a.add(s,{hash:s,title:i.title})}})}}})}(e),function(e){e.mobile.navigate=function(t,i,n){e.mobile.navigate.navigator.go(t,i,n)},e.mobile.navigate.history=new e.mobile.History,e.mobile.navigate.navigator=new e.mobile.Navigator(e.mobile.navigate.history);var t=e.mobile.path.parseLocation();e.mobile.navigate.history.add(t.href,{hash:t.hash})}(e),function(e,t,i,n){function o(e){for(;e&&e.originalEvent!==n;)e=e.originalEvent;return e}function a(t,i){var a,s,l,r,d,h,c,u,p,m=t.type;if(t=e.Event(t),t.type=i,a=t.originalEvent,s=e.event.props,m.search(/^(mouse|click)/)>-1&&(s=j),a)for(c=s.length,r;c;)r=s[--c],t[r]=a[r];if(m.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1),-1!==m.search(/^touch/)&&(l=o(a),m=l.touches,d=l.changedTouches,h=m&&m.length?m[0]:d&&d.length?d[0]:n))for(u=0,p=E.length;p>u;u++)r=E[u],t[r]=h[r];return t}function s(t){for(var i,n,o={};t;){i=e.data(t,k);for(n in i)i[n]&&(o[n]=o.hasVirtualBinding=!0);t=t.parentNode}return o}function l(t,i){for(var n;t;){if(n=e.data(t,k),n&&(!i||n[i]))return t;t=t.parentNode}return null}function r(){M=!1}function d(){M=!0}function h(){z=0,N.length=0,B=!1,d()}function c(){r()}function u(){p(),O=setTimeout(function(){O=0,h()},e.vmouse.resetTimerDuration)}function p(){O&&(clearTimeout(O),O=0)}function m(t,i,n){var o;return(n&&n[t]||!n&&l(i.target,t))&&(o=a(i,t),e(i.target).trigger(o)),o}function f(t){var i,n=e.data(t.target,P);B||z&&z===n||(i=m("v"+t.type,t),i&&(i.isDefaultPrevented()&&t.preventDefault(),i.isPropagationStopped()&&t.stopPropagation(),i.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function b(t){var i,n,a,l=o(t).touches;l&&1===l.length&&(i=t.target,n=s(i),n.hasVirtualBinding&&(z=U++,e.data(i,P,z),p(),c(),H=!1,a=o(t).touches[0],I=a.pageX,A=a.pageY,m("vmouseover",t,n),m("vmousedown",t,n)))}function g(e){M||(H||m("vmousecancel",e,s(e.target)),H=!0,u())}function v(t){if(!M){var i=o(t).touches[0],n=H,a=e.vmouse.moveDistanceThreshold,l=s(t.target);H=H||Math.abs(i.pageX-I)>a||Math.abs(i.pageY-A)>a,H&&!n&&m("vmousecancel",t,l),m("vmousemove",t,l),u()}}function _(e){if(!M){d();var t,i,n=s(e.target);m("vmouseup",e,n),H||(t=m("vclick",e,n),t&&t.isDefaultPrevented()&&(i=o(e).changedTouches[0],N.push({touchID:z,x:i.clientX,y:i.clientY}),B=!0)),m("vmouseout",e,n),H=!1,u()}}function C(t){var i,n=e.data(t,k);if(n)for(i in n)if(n[i])return!0;return!1}function x(){}function w(t){var i=t.substr(1);return{setup:function(){C(this)||e.data(this,k,{});var n=e.data(this,k);n[t]=!0,S[t]=(S[t]||0)+1,1===S[t]&&L.bind(i,f),e(this).bind(i,x),F&&(S.touchstart=(S.touchstart||0)+1,1===S.touchstart&&L.bind("touchstart",b).bind("touchend",_).bind("touchmove",v).bind("scroll",g))},teardown:function(){--S[t],S[t]||L.unbind(i,f),F&&(--S.touchstart,S.touchstart||L.unbind("touchstart",b).unbind("touchmove",v).unbind("touchend",_).unbind("scroll",g));var n=e(this),o=e.data(this,k);o&&(o[t]=!1),n.unbind(i,x),C(this)||n.removeData(k)}}}var y,T,k="virtualMouseBindings",P="virtualTouchID",D="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),E="clientX clientY pageX pageY screenX screenY".split(" "),q=e.event.mouseHooks?e.event.mouseHooks.props:[],j=e.event.props.concat(q),S={},O=0,I=0,A=0,H=!1,N=[],B=!1,M=!1,F="addEventListener"in i,L=e(i),U=1,z=0;for(e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500},T=0;D.length>T;T++)e.event.special[D[T]]=w(D[T]);F&&i.addEventListener("click",function(t){var i,o,a,s,l,r,d=N.length,h=t.target;if(d)for(i=t.clientX,o=t.clientY,y=e.vmouse.clickDistanceThreshold,a=h;a;){for(s=0;d>s;s++)if(l=N[s],r=0,a===h&&y>Math.abs(l.x-i)&&y>Math.abs(l.y-o)||e.data(a,P)===l.touchID)return t.preventDefault(),t.stopPropagation(),n;a=a.parentNode}},!0)}(e,t,i),function(e,t,n){function o(t,i,n){var o=n.type;n.type=i,e.event.dispatch.call(t,n),n.type=o}var a=e(i),s=e.mobile.support.touch,l="touchmove scroll",r=s?"touchstart":"mousedown",d=s?"touchend":"mouseup",h=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,i){e.fn[i]=function(e){return e?this.bind(i,e):this.trigger(i)},e.attrFn&&(e.attrFn[i]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function t(e,t){i=t,o(a,i?"scrollstart":"scrollstop",e)}var i,n,a=this,s=e(a);s.bind(l,function(o){e.event.special.scrollstart.enabled&&(i||t(o,!0),clearTimeout(n),n=setTimeout(function(){t(o,!1)},50))})},teardown:function(){e(this).unbind(l)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,i=e(t),n=!1;i.bind("vmousedown",function(s){function l(){clearTimeout(h)}function r(){l(),i.unbind("vclick",d).unbind("vmouseup",l),a.unbind("vmousecancel",r)
}function d(e){r(),n||c!==e.target?n&&e.stopPropagation():o(t,"tap",e)}if(n=!1,s.which&&1!==s.which)return!1;var h,c=s.target;i.bind("vmouseup",l).bind("vclick",d),a.bind("vmousecancel",r),h=setTimeout(function(){e.event.special.tap.emitTapOnTaphold&&(n=!0),o(t,"taphold",e.Event("taphold",{target:c}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),a.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(t){var i=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[i.pageX,i.pageY],origin:e(t.target)}},stop:function(e){var t=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[t.pageX,t.pageY]}},handleSwipe:function(t,i,n,a){if(i.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-i.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-i.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>i.coords[0]?"swipeleft":"swiperight";o(n,"swipe",e.Event("swipe",{target:a})),o(n,s,e.Event(s,{target:a}))}},setup:function(){var t=this,i=e(t);i.bind(r,function(o){function a(t){l&&(s=e.event.special.swipe.stop(t),Math.abs(l.coords[0]-s.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault())}var s,l=e.event.special.swipe.start(o),r=o.target;i.bind(h,a).one(d,function(){i.unbind(h,a),l&&s&&e.event.special.swipe.handleSwipe(l,s,t,r),l=s=n})})},teardown:function(){e(this).unbind(r).unbind(h).unbind(d)}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(t,i){e.event.special[t]={setup:function(){e(this).bind(i,e.noop)},teardown:function(){e(this).unbind(i)}}})}(e,this),function(e){e.event.special.throttledresize={setup:function(){e(this).bind("resize",a)},teardown:function(){e(this).unbind("resize",a)}};var t,i,n,o=250,a=function(){i=(new Date).getTime(),n=i-s,n>=o?(s=i,e(this).trigger("throttledresize")):(t&&clearTimeout(t),t=setTimeout(a,o-n))},s=0}(e),function(e,t){function o(){var e=a();e!==s&&(s=e,u.trigger(p))}var a,s,l,r,d,h,c,u=e(t),p="orientationchange",m={0:!0,180:!0};e.support.orientation&&(d=t.innerWidth||u.width(),h=t.innerHeight||u.height(),c=50,l=d>h&&d-h>c,r=m[t.orientation],(l&&r||!l&&!r)&&(m={"-90":!0,90:!0})),e.event.special.orientationchange=e.extend({},e.event.special.orientationchange,{setup:function(){return e.support.orientation&&!e.event.special.orientationchange.disabled?!1:(s=a(),u.bind("throttledresize",o),n)},teardown:function(){return e.support.orientation&&!e.event.special.orientationchange.disabled?!1:(u.unbind("throttledresize",o),n)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=a(),t.apply(this,arguments)}}}),e.event.special.orientationchange.orientation=a=function(){var n=!0,o=i.documentElement;return n=e.support.orientation?m[t.orientation]:o&&1.1>o.clientWidth/o.clientHeight,n?"portrait":"landscape"},e.fn[p]=function(e){return e?this.bind(p,e):this.trigger(p)},e.attrFn&&(e.attrFn[p]=!0)}(e,this),function(e){var t=e(i);e.mobile._Enhancer=function(){this._dependencies={}},e.extend(e.mobile._Enhancer.prototype,{_defaultCallback:function(t){var i=t.split("."),n=i[0],o=i[1],a=function(t){var i=e(e[n][o].prototype.options.initSelector||e[n][o].initSelector,t);i.length&&e[n][o].prototype.enhance(i,!0)};return a},add:function(e,t,i){var n=this._dependencies;return t||(t={dependencies:[]}),i||(i=this._defaultCallback(e)),n[e]={deps:t.dependencies,callback:i},this},_enhance:function(e,t,i){var n,o=this._dependencies[t];if(o&&!i[t]){for(n in o.deps)this._enhance(e,o.deps[n],i);o.callback(e),i[t]=!0}},enhance:function(e){var t,i={},n=this._dependencies;for(t in n)this._enhance(e,t,i);return this}}),e.mobile._enhancer=new e.mobile._Enhancer,t.bind("create",function(t){e.mobile._enhancer.enhance(t.target)})}(e),function(e,t){e.widget("mobile.page",e.mobile.widget,{options:{theme:"c",domCache:!1,keepNativeDefault:":jqmData(role='none'), :jqmData(role='nojs')",contentTheme:null},_createWidget:function(){e.Widget.prototype._createWidget.apply(this,arguments),this._trigger("init")},_create:function(){var i="data-"+e.mobile.ns,n=this;return this._trigger("beforecreate")===!1?!1:(this.element.attr("tabindex","0").addClass("ui-page ui-body-"+this.options.theme),this._on(this.element,{pagebeforehide:"removeContainerBackground",pagebeforeshow:"_handlePageBeforeShow"}),this.element.find("["+i+"role='content']").each(function(){var o=e(this),a=this.getAttribute(i+"theme")||t;n.options.contentTheme=a||n.options.contentTheme||"dialog"===n.element.jqmData("role")&&n.options.theme,o.addClass("ui-content"),n.options.contentTheme&&o.addClass("ui-body-"+n.options.contentTheme),o.attr("role","main").addClass("ui-content")}),e.mobile._enhancer.enhance(this.element[0]),t)},_handlePageBeforeShow:function(){this.setContainerBackground()},removeContainerBackground:function(){e.mobile.pageContainer.removeClass("ui-overlay-"+e.mobile.getInheritedTheme(this.element.parent()))},setContainerBackground:function(t){this.options.theme&&e.mobile.pageContainer.addClass("ui-overlay-"+(t||this.options.theme))},keepNativeSelector:function(){var t=this.options,i=t.keepNative&&e.trim(t.keepNative);return i&&t.keepNative!==t.keepNativeDefault?[t.keepNative,t.keepNativeDefault].join(", "):t.keepNativeDefault}})}(e),function(e,n){function o(t){!g||g.closest("."+e.mobile.activePageClass).length&&!t||g.removeClass(e.mobile.activeBtnClass),g=null}function a(){x=!1,C.length>0&&e.mobile.changePage.apply(null,C.pop())}function s(t,i,n,o){i&&i.data("mobile-page")._trigger("beforehide",null,{nextPage:t}),t.data("mobile-page")._trigger("beforeshow",null,{prevPage:i||e("")}),e.mobile.hidePageLoadingMsg(),n=e.mobile._maybeDegradeTransition(n);var a=e.mobile.transitionHandlers[n||"default"]||e.mobile.defaultTransitionHandler,s=a(n,o,t,i);return s.done(function(){i&&i.data("mobile-page")._trigger("hide",null,{nextPage:t}),t.data("mobile-page")._trigger("show",null,{prevPage:i||e("")})}),s}function l(t,i){i&&t.attr("data-"+e.mobile.ns+"role",i),t.page()}function r(){var t=e.mobile.activePage&&h(e.mobile.activePage);return t||k.hrefNoHash}function d(e){for(;e&&("string"!=typeof e.nodeName||"a"!==e.nodeName.toLowerCase());)e=e.parentNode;return e}function h(t){var i=e(t).closest(".ui-page").jqmData("url"),n=k.hrefNoHash;return e.mobile.dynamicBaseEnabled&&i&&f.isPath(i)||(i=n),f.makeUrlAbsolute(i,n)}var c,u,p=e.mobile.window,m=e("head"),f=e.extend(e.mobile.path,{getFilePath:function(t){var i="&"+e.mobile.subPageUrlKey;return t&&t.split(i)[0].split(w)[0]},isFirstPageUrl:function(t){var i=f.parseUrl(f.makeUrlAbsolute(t,this.documentBase)),o=i.hrefNoHash===this.documentUrl.hrefNoHash||this.documentBaseDiffers&&i.hrefNoHash===this.documentBase.hrefNoHash,a=e.mobile.firstPage,s=a&&a[0]?a[0].id:n;return o&&(!i.hash||"#"===i.hash||s&&i.hash.replace(/^#/,"")===s)},isPermittedCrossDomainRequest:function(t,i){return e.mobile.allowCrossDomainPages&&"file:"===t.protocol&&-1!==i.search(/^https?:/)}}),b=null,g=null,v=e.Deferred(),_=e.mobile.navigate.history,C=[],x=!1,w="&ui-state=dialog",y=m.children("base"),T=f.documentUrl,k=f.documentBase,P=e.mobile.getScreenHeight,D={element:y.length?y:e("<base>",{href:k.hrefNoHash}).prependTo(m),linkSelector:"[src], link[href], a[rel='external'], :jqmData(ajax='false'), a[target]",set:function(t){e.mobile.dynamicBaseEnabled&&e.support.dynamicBaseTag&&D.element.attr("href",f.makeUrlAbsolute(t,k))},rewrite:function(t,i){if(e.mobile.dynamicBaseEnabled&&!e.support.dynamicBaseTag&&i){var n=f.get(t);i.find(D.linkSelector).each(function(t,i){var o=e(i).is("[href]")?"href":e(i).is("[src]")?"src":"action",a=e(i).attr(o);a=a.replace(location.protocol+"//"+location.host+location.pathname,""),/^(\w+:|#|\/)/.test(a)||e(i).attr(o,n+a)})}},reset:function(){D.element.attr("href",k.hrefNoSearch)}},E=!0;e.mobile.getDocumentUrl=f.getDocumentUrl,e.mobile.getDocumentBase=f.getDocumentBase,e.mobile.back=function(){var e=t.navigator;this.phonegapNavigationEnabled&&e&&e.app&&e.app.backHistory?e.app.backHistory():t.history.back()},e.mobile.focusPage=function(e){var t=e.find("[autofocus]"),i=e.find(".ui-title:eq(0)");return t.length?(t.focus(),n):(i.length?i.focus():e.focus(),n)},c=function(){if(E){var t,i=e.mobile.urlHistory.getActive();i&&(t=p.scrollTop(),i.lastScroll=e.mobile.minScrollBack>t?e.mobile.defaultHomeScroll:t)}},u=function(){setTimeout(c,100)},p.bind(e.support.pushState?"popstate":"hashchange",function(){E=!1}),p.one(e.support.pushState?"popstate":"hashchange",function(){E=!0}),p.one("pagecontainercreate",function(){e.mobile.pageContainer.bind("pagechange",function(){E=!0,p.unbind("scrollstop",u),p.bind("scrollstop",u)})}),p.bind("scrollstop",u),e.mobile._maybeDegradeTransition=e.mobile._maybeDegradeTransition||function(e){return e},e.mobile.resetActivePageHeight=function(t){var i=e("."+e.mobile.activePageClass),n=i.height(),o=i.outerHeight(!0);t="number"==typeof t?t:P(),i.css("min-height",t-(o-n))},e.fn.animationComplete=function(t){return e.support.cssTransitions?e(this).one("webkitAnimationEnd animationend",t):(setTimeout(t,0),e(this))},e.mobile.path=f,e.mobile.base=D,e.mobile.urlHistory=_,e.mobile.dialogHashKey=w,e.mobile.allowCrossDomainPages=!1,e.mobile._bindPageRemove=function(){var t=e(this);!t.data("mobile-page").options.domCache&&t.is(":jqmData(external-page='true')")&&t.bind("pagehide.remove",function(){var t=e(this),i=new e.Event("pageremove");t.trigger(i),i.isDefaultPrevented()||t.removeWithDependents()})},e.mobile.loadPage=function(t,i){var o,a,s,d,h,c,u,p=e.Deferred(),m=e.extend({},e.mobile.loadPage.defaults,i),b=null,g=null,v=f.makeUrlAbsolute(t,r());if(m.data&&"get"===m.type&&(v=f.addSearchParams(v,m.data),m.data=n),m.data&&"post"===m.type&&(m.reloadPage=!0),o=f.getFilePath(v),a=f.convertUrlToDataUrl(v),m.pageContainer=m.pageContainer||e.mobile.pageContainer,b=m.pageContainer.children("[data-"+e.mobile.ns+"url='"+a+"']"),0===b.length&&a&&!f.isPath(a)&&(b=m.pageContainer.children(f.hashToSelector("#"+a)).attr("data-"+e.mobile.ns+"url",a).jqmData("url",a)),0===b.length)if(e.mobile.firstPage&&f.isFirstPageUrl(o))e.mobile.firstPage.parent().length&&(b=e(e.mobile.firstPage));else if(f.isEmbeddedPage(o))return p.reject(v,i),p.promise();if(D.reset(),b.length){if(!m.reloadPage)return l(b,m.role),p.resolve(v,i,b),D&&!i.prefetch&&D.set(t),p.promise();g=b}return s=m.pageContainer,d=new e.Event("pagebeforeload"),h={url:t,absUrl:v,dataUrl:a,deferred:p,options:m},s.trigger(d,h),d.isDefaultPrevented()?p.promise():(m.showLoadMsg&&(c=setTimeout(function(){e.mobile.showPageLoadingMsg()},m.loadMsgDelay),u=function(){clearTimeout(c),e.mobile.hidePageLoadingMsg()}),!D||i!==n&&i.prefetch!==n||D.reset(),e.mobile.allowCrossDomainPages||f.isSameDomain(T,v)?e.ajax({url:o,type:m.type,data:m.data,contentType:m.contentType,dataType:"html",success:function(s,r,d){var c=e("<div></div>"),_=s.match(/<title[^>]*>([^<]*)/)&&RegExp.$1,C=RegExp("(<[^>]+\\bdata-"+e.mobile.ns+"role=[\"']?page[\"']?[^>]*>)"),x=RegExp("\\bdata-"+e.mobile.ns+"url=[\"']?([^\"'>]*)[\"']?");C.test(s)&&RegExp.$1&&x.test(RegExp.$1)&&RegExp.$1&&(t=o=f.getFilePath(e("<div>"+RegExp.$1+"</div>").text())),!D||i!==n&&i.prefetch!==n||D.set(o),c.get(0).innerHTML=s,b=c.find(":jqmData(role='page'), :jqmData(role='dialog')").first(),b.length||(b=e("<div data-"+e.mobile.ns+"role='page'>"+(s.split(/<\/?body[^>]*>/gim)[1]||"")+"</div>")),_&&!b.jqmData("title")&&(~_.indexOf("&")&&(_=e("<div>"+_+"</div>").text()),b.jqmData("title",_)),D.rewrite(o,b),b.attr("data-"+e.mobile.ns+"url",f.convertUrlToDataUrl(o)).attr("data-"+e.mobile.ns+"external-page",!0).appendTo(m.pageContainer),b.one("pagecreate",e.mobile._bindPageRemove),l(b,m.role),v.indexOf("&"+e.mobile.subPageUrlKey)>-1&&(b=m.pageContainer.children("[data-"+e.mobile.ns+"url='"+a+"']")),m.showLoadMsg&&u(),h.xhr=d,h.textStatus=r,h.page=b,m.pageContainer.trigger("pageload",h),p.resolve(v,i,b,g)},error:function(t,n,o){D.set(f.get()),h.xhr=t,h.textStatus=n,h.errorThrown=o;var a=new e.Event("pageloadfailed");m.pageContainer.trigger(a,h),a.isDefaultPrevented()||(m.showLoadMsg&&(u(),e.mobile.showPageLoadingMsg(e.mobile.pageLoadErrorMessageTheme,e.mobile.pageLoadErrorMessage,!0),setTimeout(e.mobile.hidePageLoadingMsg,1500)),p.reject(v,i))}}):p.reject(v,i),p.promise())},e.mobile.loadPage.defaults={type:"get",data:n,reloadPage:!1,role:n,showLoadMsg:!1,pageContainer:n,loadMsgDelay:50},e.mobile.changePage=function(t,d){if(x)return C.unshift(arguments),n;var h,c,u,p,m,b,g,v,y,k,P,D,E,q,j,S,O=e.extend({},e.mobile.changePage.defaults,d);if(O.pageContainer=O.pageContainer||e.mobile.pageContainer,O.fromPage=O.fromPage||e.mobile.activePage,h="string"==typeof t,c=O.pageContainer,u=new e.Event("pagebeforechange"),p={toPage:t,options:O},p.absUrl=h?f.makeUrlAbsolute(t,r()):t.data("absUrl"),c.trigger(u,p),!u.isDefaultPrevented()){if(t=p.toPage,h="string"==typeof t,x=!0,h)return O.target=t,e.mobile.loadPage(t,O).done(function(t,i,n,o){x=!1,i.duplicateCachedPage=o,n.data("absUrl",p.absUrl),e.mobile.changePage(n,i)}).fail(function(){o(!0),a(),O.pageContainer.trigger("pagechangefailed",p)}),n;if(t[0]!==e.mobile.firstPage[0]||O.dataUrl||(O.dataUrl=T.hrefNoHash),m=O.fromPage,b=O.dataUrl&&f.convertUrlToDataUrl(O.dataUrl)||t.jqmData("url"),g=b,v=f.getFilePath(b),y=_.getActive(),k=0===_.activeIndex,P=0,D=i.title,E="dialog"===O.role||"dialog"===t.jqmData("role"),m&&m[0]===t[0]&&!O.allowSamePageTransition)return x=!1,c.trigger("pagechange",p),O.fromHashChange&&_.direct({url:b}),n;l(t,O.role),O.fromHashChange&&(P="back"===d.direction?-1:1);try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()?e(i.activeElement).blur():e("input:focus, textarea:focus, select:focus").blur()}catch(I){}q=!1,E&&y&&(y.url&&y.url.indexOf(w)>-1&&e.mobile.activePage&&!e.mobile.activePage.hasClass("ui-dialog")&&_.activeIndex>0&&(O.changeHash=!1,q=!0),b=y.url||"",b+=!q&&b.indexOf("#")>-1?w:"#"+w,0===_.activeIndex&&b===_.initialDst&&(b+=w)),j=y?t.jqmData("title")||t.children(":jqmData(role='header')").find(".ui-title").text():D,j&&D===i.title&&(D=j),t.jqmData("title")||t.jqmData("title",D),O.transition=O.transition||(P&&!k?y.transition:n)||(E?e.mobile.defaultDialogTransition:e.mobile.defaultPageTransition),!P&&q&&(_.getActive().pageUrl=g),b&&!O.fromHashChange&&(!f.isPath(b)&&0>b.indexOf("#")&&(b="#"+b),S={transition:O.transition,title:D,pageUrl:g,role:O.role},O.changeHash!==!1&&e.mobile.hashListeningEnabled?e.mobile.navigate(b,S,!0):t[0]!==e.mobile.firstPage[0]&&e.mobile.navigate.history.add(b,S)),i.title=D,e.mobile.activePage=t,O.reverse=O.reverse||0>P,s(t,m,O.transition,O.reverse).done(function(i,n,s,l,r){o(),O.duplicateCachedPage&&O.duplicateCachedPage.remove(),r||e.mobile.focusPage(t),a(),c.trigger("pagechange",p)})}},e.mobile.changePage.defaults={transition:n,reverse:!1,changeHash:!0,fromHashChange:!1,role:n,duplicateCachedPage:n,pageContainer:n,showLoadMsg:!0,dataUrl:n,fromPage:n,allowSamePageTransition:!1},e.mobile.navreadyDeferred=e.Deferred(),e.mobile._registerInternalEvents=function(){var i=function(t,i){var o,a,s,l,r=!0;return!e.mobile.ajaxEnabled||t.is(":jqmData(ajax='false')")||!t.jqmHijackable().length||t.attr("target")?!1:(o=t.attr("action"),l=(t.attr("method")||"get").toLowerCase(),o||(o=h(t),"get"===l&&(o=f.parseUrl(o).hrefNoSearch),o===k.hrefNoHash&&(o=T.hrefNoSearch)),o=f.makeUrlAbsolute(o,h(t)),f.isExternal(o)&&!f.isPermittedCrossDomainRequest(T,o)?!1:(i||(a=t.serializeArray(),b&&b[0].form===t[0]&&(s=b.attr("name"),s&&(e.each(a,function(e,t){return t.name===s?(s="",!1):n}),s&&a.push({name:s,value:b.attr("value")}))),r={url:o,options:{type:l,data:e.param(a),transition:t.jqmData("transition"),reverse:"reverse"===t.jqmData("direction"),reloadPage:!0}}),r))};e.mobile.document.delegate("form","submit",function(t){var n=i(e(this));n&&(e.mobile.changePage(n.url,n.options),t.preventDefault())}),e.mobile.document.bind("vclick",function(t){var n,a,s=t.target,l=!1;if(!(t.which>1)&&e.mobile.linkBindingEnabled){if(b=e(s),e.data(s,"mobile-button")){if(!i(e(s).closest("form"),!0))return;s.parentNode&&(s=s.parentNode)}else{if(s=d(s),!s||"#"===f.parseUrl(s.getAttribute("href")||"#").hash)return;if(!e(s).jqmHijackable().length)return}~s.className.indexOf("ui-link-inherit")?s.parentNode&&(a=e.data(s.parentNode,"buttonElements")):a=e.data(s,"buttonElements"),a?s=a.outer:l=!0,n=e(s),l&&(n=n.closest(".ui-btn")),n.length>0&&!n.hasClass("ui-disabled")&&(o(!0),g=n,g.addClass(e.mobile.activeBtnClass))}}),e.mobile.document.bind("click",function(i){if(e.mobile.linkBindingEnabled&&!i.isDefaultPrevented()){var a,s,l,r,c,u,p,m,b=d(i.target),g=e(b);if(b&&!(i.which>1)&&g.jqmHijackable().length){if(a=function(){t.setTimeout(function(){o(!0)},200)},g.is(":jqmData(rel='back')"))return e.mobile.back(),!1;if(s=h(g),l=f.makeUrlAbsolute(g.attr("href")||"#",s),!e.mobile.ajaxEnabled&&!f.isEmbeddedPage(l))return a(),n;if(-1!==l.search("#")){if(l=l.replace(/[^#]*#/,""),!l)return i.preventDefault(),n;l=f.isPath(l)?f.makeUrlAbsolute(l,s):f.makeUrlAbsolute("#"+l,T.hrefNoHash)}if(r=g.is("[rel='external']")||g.is(":jqmData(ajax='false')")||g.is("[target]"),c=r||f.isExternal(l)&&!f.isPermittedCrossDomainRequest(T,l))return a(),n;u=g.jqmData("transition"),p="reverse"===g.jqmData("direction")||g.jqmData("back"),m=g.attr("data-"+e.mobile.ns+"rel")||n,e.mobile.changePage(l,{transition:u,reverse:p,role:m,link:g}),i.preventDefault()}}}),e.mobile.document.delegate(".ui-page","pageshow.prefetch",function(){var t=[];e(this).find("a:jqmData(prefetch)").each(function(){var i=e(this),n=i.attr("href");n&&-1===e.inArray(n,t)&&(t.push(n),e.mobile.loadPage(n,{role:i.attr("data-"+e.mobile.ns+"rel"),prefetch:!0}))})}),e.mobile._handleHashChange=function(i,o){var a,s=f.stripHash(i),l=0===e.mobile.urlHistory.stack.length?"none":n,r={changeHash:!1,fromHashChange:!0,reverse:"back"===o.direction};if(e.extend(r,o,{transition:(_.getLast()||{}).transition||l}),_.activeIndex>0&&s.indexOf(w)>-1&&_.initialDst!==s){if(e.mobile.activePage&&!e.mobile.activePage.hasClass("ui-dialog"))return"back"===o.direction?e.mobile.back():t.history.forward(),n;s=o.pageUrl,a=e.mobile.urlHistory.getActive(),e.extend(r,{role:a.role,transition:a.transition,reverse:"back"===o.direction})}s?(s=f.isPath(s)?s:f.makeUrlAbsolute("#"+s,k),s===f.makeUrlAbsolute("#"+_.initialDst,k)&&_.stack.length&&_.stack[0].url!==_.initialDst.replace(w,"")&&(s=e.mobile.firstPage),e.mobile.changePage(s,r)):e.mobile.changePage(e.mobile.firstPage,r)},p.bind("navigate",function(t,i){var n;t.originalEvent&&t.originalEvent.isDefaultPrevented()||(n=e.event.special.navigate.originalEventName.indexOf("hashchange")>-1?i.state.hash:i.state.url,n||(n=e.mobile.path.parseLocation().hash),n&&"#"!==n&&0!==n.indexOf("#"+e.mobile.path.uiStateKey)||(n=location.href),e.mobile._handleHashChange(n,i.state))}),e.mobile.document.bind("pageshow",e.mobile.resetActivePageHeight),e.mobile.window.bind("throttledresize",e.mobile.resetActivePageHeight)},e(function(){v.resolve()}),e.when(v,e.mobile.navreadyDeferred).done(function(){e.mobile._registerInternalEvents()})}(e),function(e,t){e.mobile.Transition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.Transition.prototype,{toPreClass:" ui-page-pre-in",init:function(t,i,n,o){e.extend(this,{name:t,reverse:i,$to:n,$from:o,deferred:new e.Deferred})},cleanFrom:function(){this.$from.removeClass(e.mobile.activePageClass+" out in reverse "+this.name).height("")},beforeDoneIn:function(){},beforeDoneOut:function(){},beforeStartOut:function(){},doneIn:function(){this.beforeDoneIn(),this.$to.removeClass("out in reverse "+this.name).height(""),this.toggleViewportClass(),e.mobile.window.scrollTop()!==this.toScroll&&this.scrollPage(),this.deferred.resolve(this.name,this.reverse,this.$to,this.$from,!0)},doneOut:function(e,t,i){this.beforeDoneOut(),this.startIn(e,t,i)},hideIn:function(e){this.$to.css("z-index",-10),e.call(this),this.$to.css("z-index","")},scrollPage:function(){e.event.special.scrollstart.enabled=!1,t.scrollTo(0,this.toScroll),setTimeout(function(){e.event.special.scrollstart.enabled=!0},150)},startIn:function(t,i,n){this.hideIn(function(){this.$to.addClass(e.mobile.activePageClass+this.toPreClass),e.mobile.focusPage(this.$to),this.$to.height(t+this.toScroll),this.scrollPage()}),n||this.$to.animationComplete(e.proxy(function(){this.doneIn()},this)),this.$to.removeClass(this.toPreClass).addClass(this.name+" in "+i),n&&this.doneIn()},startOut:function(t,i,n){this.beforeStartOut(t,i,n),this.$from.height(t+e.mobile.window.scrollTop()).addClass(this.name+" out"+i)},toggleViewportClass:function(){e.mobile.pageContainer.toggleClass("ui-mobile-viewport-transitioning viewport-"+this.name)},transition:function(){var t=this.reverse?" reverse":"",i=e.mobile.getScreenHeight(),n=e.mobile.maxTransitionWidth!==!1&&e.mobile.window.width()>e.mobile.maxTransitionWidth,o=!e.support.cssTransitions||n||!this.name||"none"===this.name||Math.max(e.mobile.window.scrollTop(),this.toScroll)>e.mobile.getMaxScrollForTransition();return this.toScroll=e.mobile.urlHistory.getActive().lastScroll||e.mobile.defaultHomeScroll,this.toggleViewportClass(),this.$from&&!o?this.startOut(i,t,o):this.doneOut(i,t,o),this.deferred.promise()}})}(e,this),function(e){e.mobile.SerialTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.SerialTransition.prototype,e.mobile.Transition.prototype,{sequential:!0,beforeDoneOut:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(t,i,n){this.$from.animationComplete(e.proxy(function(){this.doneOut(t,i,n)},this))}})}(e),function(e){e.mobile.ConcurrentTransition=function(){this.init.apply(this,arguments)},e.extend(e.mobile.ConcurrentTransition.prototype,e.mobile.Transition.prototype,{sequential:!1,beforeDoneIn:function(){this.$from&&this.cleanFrom()},beforeStartOut:function(e,t,i){this.doneOut(e,t,i)}})}(e),function(e){var t=function(){return 3*e.mobile.getScreenHeight()};e.mobile.transitionHandlers={"default":e.mobile.defaultTransitionHandler,sequential:function(t,i,n,o){return new e.mobile.SerialTransition(t,i,n,o).transition()},simultaneous:function(t,i,n,o){return new e.mobile.ConcurrentTransition(t,i,n,o).transition()}},e.mobile.defaultTransitionHandler=e.mobile.transitionHandlers.sequential,e.mobile.transitionHandlers["default"]=e.mobile.defaultTransitionHandler,e.mobile.transitionFallbacks={},e.mobile._maybeDegradeTransition=function(t){return t&&!e.support.cssTransform3d&&e.mobile.transitionFallbacks[t]&&(t=e.mobile.transitionFallbacks[t]),t},e.mobile.getMaxScrollForTransition=e.mobile.getMaxScrollForTransition||t}(e),function(e){e.mobile.transitionFallbacks.flip="fade"}(e,this),function(e){e.mobile.transitionFallbacks.flow="fade"}(e,this),function(e){e.mobile.transitionFallbacks.pop="fade"}(e,this),function(e){e.mobile.transitionHandlers.slide=e.mobile.transitionHandlers.simultaneous,e.mobile.transitionFallbacks.slide="fade"}(e,this),function(e){e.mobile.transitionFallbacks.slidedown="fade"}(e,this),function(e){e.mobile.transitionFallbacks.slidefade="fade"}(e,this),function(e){e.mobile.transitionFallbacks.slideup="fade"}(e,this),function(e){e.mobile.transitionFallbacks.turn="fade"}(e,this),function(e,t){e.mobile.page.prototype.options.degradeInputs={color:!1,date:!1,datetime:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:"number",search:"text",tel:!1,time:!1,url:!1,week:!1},e.mobile._enhancer.add("mobile.degradeinputs",t,function(t){var i,n=e(t),o=e.mobile.closestPageData(n);o&&(i=o.options,n.find("input").not(o.keepNativeSelector()).each(function(){var t,n,o,a,s=e(this),l=this.getAttribute("type"),r=i.degradeInputs[l]||"text";i.degradeInputs[l]&&(t=e("<div>").html(s.clone()).html(),n=t.indexOf(" type=")>-1,o=n?/\s+type=["']?\w+['"]?/:/\/?>/,a=' type="'+r+'" data-'+e.mobile.ns+'type="'+l+'"'+(n?"":">"),s.replaceWith(t.replace(o,a)))}))})}(e),function(e,t){e.mobile.behaviors.optionDemultiplexer={_setOption:function(e,i){var n="_set"+e.charAt(0).toUpperCase()+e.slice(1);this[n]!==t&&this[n](i),this._super(e,i)}}}(e),function(e){e.widget("mobile.dialog",e.mobile.widget,e.extend({options:{closeBtn:"left",closeBtnText:"Close",overlayTheme:"a",corners:!0},_handlePageBeforeShow:function(){this._isCloseable=!0,this.options.overlayTheme&&this.element.page("removeContainerBackground").page("setContainerBackground",this.options.overlayTheme)},_handlePageBeforeHide:function(){this._isCloseable=!1},_create:function(){var t=this.element,i=this.options.corners?" ui-corner-all":"",n=e("<div/>",{role:"dialog","class":"ui-dialog-contain ui-overlay-shadow"+i});t.addClass("ui-dialog ui-overlay-"+this.options.overlayTheme),t.wrapInner(n),t.bind("vclick submit",function(t){var i,n=e(t.target).closest("vclick"===t.type?"a":"form");n.length&&!n.jqmData("transition")&&(i=e.mobile.urlHistory.getActive()||{},n.attr("data-"+e.mobile.ns+"transition",i.transition||e.mobile.defaultDialogTransition).attr("data-"+e.mobile.ns+"direction","reverse"))}),this._on(t,{pagebeforeshow:"_handlePageBeforeShow",pagebeforehide:"_handlePageBeforeHide"}),this._setCloseBtn(this.options.closeBtn)},_setCorners:function(e){this.element.children().toggleClass("ui-corner-all",e)},_setOverlayTheme:function(t){this.element.removeClass("ui-overlay-"+this.options.overlayTheme).addClass("ui-overlay-"+t),e.mobile.activePage[0]===this.element[0]&&(this.options.overlayTheme=t,this._handlePageBeforeShow())},_setCloseBtnText:function(e){this.options.closeBtnText=e,this._setCloseBtn(this.options.closeBtn)},_setCloseBtn:function(t){var i,n,o=this;this._headerCloseButton&&(this._headerCloseButton.remove(),this._headerCloseButton=null),"none"!==t&&(n="left"===t?"left":"right",i=e("<a href='#' class='ui-btn-"+n+"' data-"+e.mobile.ns+"icon='delete' data-"+e.mobile.ns+"iconpos='notext'>"+this.options.closeBtnText+"</a>"),this.element.children().find(":jqmData(role='header')").first().prepend(i),e.fn.buttonMarkup&&i.buttonMarkup(),i.bind("click",function(){o.close()}),this._headerCloseButton=i)},close:function(){var t,i,n=e.mobile.navigate.history;this._isCloseable&&(this._isCloseable=!1,e.mobile.hashListeningEnabled&&n.activeIndex>0?e.mobile.back():(t=Math.max(0,n.activeIndex-1),i=n.stack[t].pageUrl||n.stack[t].url,n.previousIndex=n.activeIndex,n.activeIndex=t,e.mobile.path.isPath(i)||(i=e.mobile.path.makeUrlAbsolute("#"+i)),e.mobile.changePage(i,{direction:"back",changeHash:!1,fromHashChange:!0})))}},e.mobile.behaviors.optionDemultiplexer)),e.mobile.dialog.initSelector=":jqmData(role='dialog')",e.mobile.document.delegate(e.mobile.dialog.initSelector,"pagecreate",function(){e.mobile.dialog.prototype.enhance(this)})}(e,this),function(e,t){function n(e){for(var t;e&&(t="string"==typeof e.className&&e.className+" ",!(t&&t.indexOf("ui-btn ")>-1&&0>t.indexOf("ui-disabled ")));)e=e.parentNode;return e}function o(n,o,a,s,l){var r=e.data(n[0],"buttonElements");n.removeClass(o).addClass(a),r&&(r.bcls=e(i.createElement("div")).addClass(r.bcls+" "+a).removeClass(o).attr("class"),s!==t&&(r.hover=s),r.state=l)}var a=e.mobile.getAttribute,s=function(){var i,a,l=e.mobile.buttonMarkup.hoverDelay;e.mobile.document.bind({"vmousedown vmousecancel vmouseup vmouseover vmouseout focus blur scrollstart":function(s){var r,d=e(n(s.target)),h=s.originalEvent&&/^touch/.test(s.originalEvent.type),c=s.type;d.length&&(r=d.attr("data-"+e.mobile.ns+"theme"),"vmousedown"===c?h?i=setTimeout(function(){o(d,"ui-btn-up-"+r,"ui-btn-down-"+r,t,"down")},l):o(d,"ui-btn-up-"+r,"ui-btn-down-"+r,t,"down"):"vmousecancel"===c||"vmouseup"===c?o(d,"ui-btn-down-"+r,"ui-btn-up-"+r,t,"up"):"vmouseover"===c||"focus"===c?h?a=setTimeout(function(){o(d,"ui-btn-up-"+r,"ui-btn-hover-"+r,!0,"")},l):o(d,"ui-btn-up-"+r,"ui-btn-hover-"+r,!0,""):("vmouseout"===c||"blur"===c||"scrollstart"===c)&&(o(d,"ui-btn-hover-"+r+" ui-btn-down-"+r,"ui-btn-up-"+r,!1,"up"),i&&clearTimeout(i),a&&clearTimeout(a)))},"focusin focus":function(t){e(n(t.target)).addClass(e.mobile.focusClass)},"focusout blur":function(t){e(n(t.target)).removeClass(e.mobile.focusClass)}}),s=null};e.fn.buttonMarkup=function(n){var o,l,r,d,h,c,u,p,m,f,b,g=this,v="data-"+e.mobile.ns,_="ui-btn-inner",C="ui-btn-text",x=!1,w="up";for(n=n&&"object"===e.type(n)?n:{},l=0;g.length>l;l++){r=g.eq(l),d=r[0],h=e.extend({},e.fn.buttonMarkup.defaults,{icon:n.icon!==t?n.icon:a(d,"icon",!0),iconpos:n.iconpos!==t?n.iconpos:a(d,"iconpos",!0),theme:n.theme!==t?n.theme:a(d,"theme",!0)||e.mobile.getInheritedTheme(r,"c"),inline:n.inline!==t?n.inline:a(d,"inline",!0),shadow:n.shadow!==t?n.shadow:a(d,"shadow",!0),corners:n.corners!==t?n.corners:a(d,"corners",!0),iconshadow:n.iconshadow!==t?n.iconshadow:a(d,"iconshadow",!0),mini:n.mini!==t?n.mini:a(d,"mini",!0)},n),_="ui-btn-inner",C="ui-btn-text",x=!1,w="up";for(o in h)h[o]===t||null===h[o]?r.removeAttr(v+o):d.setAttribute(v+o,h[o]);for(b=e.data("INPUT"===d.tagName||"BUTTON"===d.tagName?d.parentNode:d,"buttonElements"),b?(d=b.outer,r=e(d),p=b.inner,m=b.text,e(b.icon).remove(),b.icon=null,x=b.hover,w=b.state):(p=i.createElement(h.wrapperEls),m=i.createElement(h.wrapperEls)),f=h.icon?i.createElement("span"):null,s&&!b&&s(),h.theme||(h.theme=e.mobile.getInheritedTheme(r,"c")),c="ui-btn ",c+=x?"ui-btn-hover-"+h.theme:"",c+=w?" ui-btn-"+w+"-"+h.theme:"",c+=h.shadow?" ui-shadow":"",c+=h.corners?" ui-btn-corner-all":"",h.mini!==t&&(c+=h.mini===!0?" ui-mini":" ui-fullsize"),h.inline!==t&&(c+=h.inline===!0?" ui-btn-inline":" ui-btn-block"),h.icon&&(h.icon="ui-icon-"+h.icon,h.iconpos=h.iconpos||"left",u="ui-icon "+h.icon,h.iconshadow&&(u+=" ui-icon-shadow")),h.iconpos&&(c+=" ui-btn-icon-"+h.iconpos,"notext"!==h.iconpos||r.attr("title")||r.attr("title",r.getEncodedText())),b&&r.removeClass(b.bcls||""),r.removeClass("ui-link").addClass(c),p.className=_,m.className=C,b||p.appendChild(m),f&&(f.className=u,b&&b.icon||(f.innerHTML="&#160;",p.appendChild(f)));d.firstChild&&!b;)m.appendChild(d.firstChild);b||d.appendChild(p),b={hover:x,state:w,bcls:c,outer:d,inner:p,text:m,icon:f},e.data(d,"buttonElements",b),e.data(p,"buttonElements",b),e.data(m,"buttonElements",b),f&&e.data(f,"buttonElements",b)}return this},e.fn.buttonMarkup.defaults={corners:!0,shadow:!0,iconshadow:!0,wrapperEls:"span"},e.mobile._enhancer.add("mobile.buttonmarkup",t,function(t){e(":jqmData(role='button'), .ui-bar > a, .ui-bar > :jqmData(role='controlgroup') > a",t).jqmEnhanceable().not("button, input, .ui-btn, :jqmData(role='none'), :jqmData(role='nojs')").buttonMarkup()})}(e),function(e,t){var i=e.mobile.getAttribute;e.widget("mobile.collapsible",e.mobile.widget,{options:{expandCueText:" click to expand contents",collapseCueText:" click to collapse contents",collapsed:!0,heading:"h1,h2,h3,h4,h5,h6,legend",collapsedIcon:"plus",expandedIcon:"minus",iconpos:"left",theme:null,contentTheme:null,inset:!0,corners:!0,mini:!1},_create:function(){var n=this.element,o=this.options,a=e.mobile.collapsibleset?", :mobile-collapsibleset":"",s=n.addClass("ui-collapsible"),l=n.children(o.heading).first(),r=s.wrapInner("<div class='ui-collapsible-content'></div>").children(".ui-collapsible-content"),d=n.closest(":jqmData(role='collapsible-set')"+a).addClass("ui-collapsible-set"),h="";l.is("legend")&&(l=e("<div role='heading'>"+l.html()+"</div>").insertBefore(l),l.next().remove()),d.length?(o.theme||(o.theme=i(d[0],"theme",!0)||e.mobile.getInheritedTheme(d,"c")),o.contentTheme||(o.contentTheme=i(d[0],"content-theme",!0)),o.collapsedIcon=i(n[0],"collapsed-icon",!0)||i(d[0],"collapsed-icon",!0)||o.collapsedIcon,o.expandedIcon=i(n[0],"expanded-icon",!0)||i(d[0],"expanded-icon",!0)||o.expandedIcon,o.iconpos=i(n[0],"iconpos",!0)||i(d[0],"iconpos",!0)||o.iconpos,o.inset=i(d[0],"inset",!0)!==t?i(d[0],"inset",!0):!0,o.corners=!1,o.mini||(o.mini=i(d[0],"mini",!0))):o.theme||(o.theme=e.mobile.getInheritedTheme(n,"c")),o.inset&&(h+=" ui-collapsible-inset",o.corners&&(h+=" ui-corner-all")),o.contentTheme&&(h+=" ui-collapsible-themed-content",r.addClass("ui-body-"+o.contentTheme)),""!==h&&s.addClass(h),l.insertBefore(r).addClass("ui-collapsible-heading").append("<span class='ui-collapsible-heading-status'></span>").wrapInner("<a href='#' class='ui-collapsible-heading-toggle'></a>").find("a").first().buttonMarkup({shadow:!1,corners:!1,iconpos:o.iconpos,icon:o.collapsedIcon,mini:o.mini,theme:o.theme}),e.extend(this,{_collapsibleHeading:l,_collapsibleContent:r}),this._on({expand:"_handleExpandCollapse",collapse:"_handleExpandCollapse"}),this._on(l,{tap:function(){l.find("a").first().addClass(e.mobile.activeBtnClass)
},click:function(e){var t=l.hasClass("ui-collapsible-heading-collapsed")?"expand":"collapse";s.trigger(t),e.preventDefault(),e.stopPropagation()}}),this._setOptions(this.options)},_handleExpandCollapse:function(t){var i,n=this.options;t.isDefaultPrevented()||(i="collapse"===t.type,t.preventDefault(),this._collapsibleHeading.toggleClass("ui-collapsible-heading-collapsed",i).find(".ui-collapsible-heading-status").text(i?n.expandCueText:n.collapseCueText).end().find(".ui-icon").toggleClass("ui-icon-"+n.expandedIcon,!i).toggleClass("ui-icon-"+n.collapsedIcon,i||n.expandedIcon===n.collapsedIcon).end().find("a").first().removeClass(e.mobile.activeBtnClass),this.element.toggleClass("ui-collapsible-collapsed",i),this._collapsibleContent.toggleClass("ui-collapsible-content-collapsed",i).attr("aria-hidden",i).trigger("updatelayout"))},_setOptions:function(e){var i=this.element;return e.collapsed!==t&&i.trigger(e.collapsed?"collapse":"expand"),this._super(e)}}),e.mobile.collapsible.initSelector=":jqmData(role='collapsible')",e.mobile._enhancer.add("mobile.collapsible",{dependencies:["mobile.page","mobile.toolbar"]})}(e),function(e){e.mobile.behaviors.addFirstLastClasses={_getVisibles:function(e,t){var i;return t?i=e.not(".ui-screen-hidden"):(i=e.filter(":visible"),0===i.length&&(i=e.not(".ui-screen-hidden"))),i},_addFirstLastClasses:function(e,t,i){e.removeClass("ui-first-child ui-last-child"),t.eq(0).addClass("ui-first-child").end().last().addClass("ui-last-child"),i||this.element.trigger("updatelayout")}}}(e),function(e,t){e.widget("mobile.collapsibleset",e.mobile.widget,e.extend({_create:function(){var i=this.element.addClass("ui-collapsible-set"),n=this.options;n.theme||(n.theme=e.mobile.getInheritedTheme(i,"c")),n.contentTheme||(n.contentTheme=i.jqmData("content-theme")),n.corners||(n.corners=i.jqmData("corners")),i.jqmData("inset")!==t&&(n.inset=i.jqmData("inset")),n.inset=n.inset!==t?n.inset:!0,n.corners=n.corners!==t?n.corners:!0,n.corners&&n.inset&&i.addClass("ui-corner-all"),i.jqmData("collapsiblebound")||i.jqmData("collapsiblebound",!0).bind("expand",function(t){var i=e(t.target).closest(".ui-collapsible");i.parent().is(":mobile-collapsibleset, :jqmData(role='collapsible-set')")&&i.siblings(".ui-collapsible:not(.ui-collapsible-collapsed)").trigger("collapse")})},_init:function(){var e=this.element,t=e.children(":mobile-collapsible, :jqmData(role='collapsible')"),i=t.filter(":jqmData(collapsed='false')");this._refresh("true"),i.trigger("expand")},_refresh:function(t){var i=this.element.children(":mobile-collapsible, :jqmData(role='collapsible')");e.mobile.collapsible.prototype.enhance(i.not(".ui-collapsible")),this._addFirstLastClasses(i,this._getVisibles(i,t),t)},refresh:function(){this._refresh(!1)}},e.mobile.behaviors.addFirstLastClasses)),e.mobile.collapsibleset.initSelector=":jqmData(role='collapsible-set')",e.mobile._enhancer.add("mobile.collapsibleset")}(e),function(e,t){e.fn.fieldcontain=function(){return this.addClass("ui-field-contain ui-body ui-br").contents().filter(function(){return 3===this.nodeType&&!/\S/.test(this.nodeValue)}).remove()},e.mobile._enhancer.add("mobile.fieldcontain",t,function(t){e(":jqmData(role='fieldcontain')",t).jqmEnhanceable().fieldcontain()})}(e),function(e){e.fn.grid=function(t){return this.each(function(){var i,n,o=e(this),a=e.extend({grid:null},t),s=o.children(),l={solo:1,a:2,b:3,c:4,d:5},r=a.grid;if(!r)if(5>=s.length)for(n in l)l[n]===s.length&&(r=n);else r="a",o.addClass("ui-grid-duo");i=l[r],o.addClass("ui-grid-"+r),s.filter(":nth-child("+i+"n+1)").addClass("ui-block-a"),i>1&&s.filter(":nth-child("+i+"n+2)").addClass("ui-block-b"),i>2&&s.filter(":nth-child("+i+"n+3)").addClass("ui-block-c"),i>3&&s.filter(":nth-child("+i+"n+4)").addClass("ui-block-d"),i>4&&s.filter(":nth-child("+i+"n+5)").addClass("ui-block-e")})}}(e),function(e,t){e.widget("mobile.navbar",e.mobile.widget,{options:{iconpos:"top",grid:null},_create:function(){var n=this.element,o=n.find("a"),a=o.filter(":jqmData(icon)").length?this.options.iconpos:t;n.addClass("ui-navbar ui-mini").attr("role","navigation").find("ul").jqmEnhanceable().grid({grid:this.options.grid}),o.buttonMarkup({corners:!1,shadow:!1,inline:!0,iconpos:a,theme:"a"}),n.delegate("a","vclick",function(t){var n,a=e(t.target).is("a")?e(this):e(this).parent("a");a.is(".ui-disabled, .ui-btn-active")||(o.removeClass(e.mobile.activeBtnClass),e(this).addClass(e.mobile.activeBtnClass),n=e(this),e(i).one("pagehide",function(){n.removeClass(e.mobile.activeBtnClass)}))}),n.closest(".ui-page").bind("pagebeforeshow",function(){o.filter(".ui-state-persist").addClass(e.mobile.activeBtnClass)})}}),e.mobile.navbar.initSelector=":jqmData(role='navbar')",e.mobile._enhancer.add("mobile.navbar")}(e),function(e){var t=e.mobile.getAttribute;e.widget("mobile.listview",e.mobile.widget,e.extend({options:{theme:null,countTheme:"c",headerTheme:"b",dividerTheme:"b",icon:"arrow-r",splitIcon:"arrow-r",splitTheme:"b",corners:!0,shadow:!0,inset:!1},_create:function(){var e=this,t="";t+=e.options.inset?" ui-listview-inset":"",e.options.inset&&(t+=e.options.corners?" ui-corner-all":"",t+=e.options.shadow?" ui-shadow":""),e.element.addClass(function(e,i){return i+" ui-listview"+t}),e.refresh(!0)},_findFirstElementByTagName:function(e,t,i,n){var o={};for(o[i]=o[n]=!0;e;){if(o[e.nodeName])return e;e=e[t]}return null},_getChildrenByTagName:function(t,i,n){var o=[],a={};for(a[i]=a[n]=!0,t=t.firstChild;t;)a[t.nodeName]&&o.push(t),t=t.nextSibling;return e(o)},_addThumbClasses:function(t){var i,n,o=t.length;for(i=0;o>i;i++)n=e(this._findFirstElementByTagName(t[i].firstChild,"nextSibling","img","IMG")),n.length&&(n.addClass("ui-li-thumb"),e(this._findFirstElementByTagName(n[0].parentNode,"parentNode","li","LI")).addClass(n.hasClass("ui-li-icon")?"ui-li-has-icon":"ui-li-has-thumb"))},refresh:function(n){var o,a,s,l,r,d,h,c,u,p,m,f,b,g,v,_=this.options,C=this.element,x=t(C[0],"dividertheme",!0)||_.dividerTheme,w=t(C[0],"splittheme",!0),y=t(C[0],"spliticon",!0),T=t(C[0],"icon",!0),k=this._getChildrenByTagName(C[0],"li","LI"),P=!!e.nodeName(C[0],"ol"),D=!e.support.cssPseudoElement,E=C.attr("start"),q={};for(P&&D&&C.find(".ui-li-dec").remove(),P&&(E||0===E?D?h=parseInt(E,10):(c=parseInt(E,10)-1,C.css("counter-reset","listnumbering "+c)):D&&(h=1)),_.theme||(_.theme=e.mobile.getInheritedTheme(this.element,"c")),b=0,g=k.length;g>b;b++)o=k.eq(b),a="ui-li",(n||!o.hasClass("ui-li"))&&(s=t(o[0],"theme",!0)||_.theme,l=this._getChildrenByTagName(o[0],"a","A"),v="list-divider"===t(o[0],"role",!0),l.length&&!v?(m=t(o[0],"icon",!0),o.buttonMarkup({wrapperEls:"div",shadow:!1,corners:!1,iconpos:"right",icon:l.length>1||m===!1?!1:m||T||_.icon,theme:s}),m!==!1&&1===l.length&&o.addClass("ui-li-has-arrow"),l.first().removeClass("ui-link").addClass("ui-link-inherit"),l.length>1&&(a+=" ui-li-has-alt",r=l.last(),d=w||t(r[0],"theme",!0)||_.splitTheme,f=t(r[0],"icon",!0),r.appendTo(o).attr("title",e.trim(r.getEncodedText())).addClass("ui-li-link-alt").empty().buttonMarkup({shadow:!1,corners:!1,theme:s,icon:!1,iconpos:"notext"}).find(".ui-btn-inner").append(e(i.createElement("span")).buttonMarkup({shadow:!0,corners:!0,theme:d,iconpos:"notext",icon:f||m||y||_.splitIcon})))):v?(a+=" ui-li-divider ui-bar-"+(t(o[0],"theme",!0)||x),o.attr("role","heading"),P&&(E||0===E?D?h=parseInt(E,10):(u=parseInt(E,10)-1,o.css("counter-reset","listnumbering "+u)):D&&(h=1))):a+=" ui-li-static ui-btn-up-"+s),P&&D&&0>a.indexOf("ui-li-divider")&&(p=a.indexOf("ui-li-static")>0?o:o.find(".ui-link-inherit"),p.addClass("ui-li-jsnumbering").prepend("<span class='ui-li-dec'>"+h++ +". </span>")),q[a]||(q[a]=[]),q[a].push(o[0]);for(a in q)e(q[a]).addClass(a).children(".ui-btn-inner").addClass(a);C.find("h1, h2, h3, h4, h5, h6").addClass("ui-li-heading").end().find("p, dl").addClass("ui-li-desc").end().find(".ui-li-aside").each(function(){var t=e(this);t.prependTo(t.parent())}).end().find(".ui-li-count").each(function(){e(this).closest("li").addClass("ui-li-has-count")}).addClass("ui-btn-up-"+(t(C[0],"counttheme",!0)||this.options.countTheme)+" ui-btn-corner-all"),this._addThumbClasses(k),this._addThumbClasses(C.find(".ui-link-inherit")),this._addFirstLastClasses(k,this._getVisibles(k,n),n),this._trigger("afterrefresh")}},e.mobile.behaviors.addFirstLastClasses)),e.mobile.listview.initSelector=":jqmData(role='listview')",e.mobile._enhancer.add("mobile.listview")}(e),function(e){var t=e("meta[name=viewport]"),i=t.attr("content"),n=i+",maximum-scale=1, user-scalable=no",o=i+",maximum-scale=10, user-scalable=yes",a=/(user-scalable[\s]*=[\s]*no)|(maximum-scale[\s]*=[\s]*1)[$,\s]/.test(i);e.mobile.zoom=e.extend({},{enabled:!a,locked:!1,disable:function(i){a||e.mobile.zoom.locked||(t.attr("content",n),e.mobile.zoom.enabled=!1,e.mobile.zoom.locked=i||!1)},enable:function(i){a||e.mobile.zoom.locked&&i!==!0||(t.attr("content",o),e.mobile.zoom.enabled=!0,e.mobile.zoom.locked=!1)},restore:function(){a||(t.attr("content",i),e.mobile.zoom.enabled=!0)}})}(e),function(e){e.widget("mobile.textinput",e.mobile.widget,{options:{theme:null,mini:!1,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,clearBtn:!1,clearBtnText:"clear text",disabled:!1},_create:function(){function t(){setTimeout(function(){o.toggleClass("ui-input-clear-hidden",!l.val())},0)}var i,o,a,s=this,l=this.element,r=this.options,d=r.theme||e.mobile.getInheritedTheme(this.element,"c"),h=" ui-body-"+d,c=r.mini?" ui-mini":"",u=l.is("[type='search'], :jqmData(type='search')"),p=r.clearBtnText,m=l.is("textarea, :jqmData(type='range')"),f=!!r.clearBtn&&!m,b=l.is("input")&&!l.is(":jqmData(type='range')"),g=15,v=100;e("label[for='"+l.attr("id")+"']").addClass("ui-input-text"),i=l.addClass("ui-input-text ui-body-"+d),l[0].autocorrect===n||e.support.touchOverflow||(l[0].setAttribute("autocorrect","off"),l[0].setAttribute("autocomplete","off")),u?i=l.wrap("<div class='ui-input-search ui-shadow-inset ui-btn-corner-all ui-btn-shadow ui-icon-searchfield"+h+c+"'></div>").parent():b&&(i=l.wrap("<div class='ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow"+h+c+"'></div>").parent()),f||u?(o=e("<a href='#' class='ui-input-clear' title='"+p+"'>"+p+"</a>").bind("click",function(e){l.val("").focus().trigger("change"),o.addClass("ui-input-clear-hidden"),e.preventDefault()}).appendTo(i).buttonMarkup({icon:"delete",iconpos:"notext",corners:!0,shadow:!0,mini:r.mini}),u||i.addClass("ui-input-has-clear"),t(),l.bind("paste cut keyup input focus change blur",t)):b||u||l.addClass("ui-corner-all ui-shadow-inset"+h+c),l.focus(function(){r.preventFocusZoom&&e.mobile.zoom.disable(!0),i.addClass(e.mobile.focusClass)}).blur(function(){i.removeClass(e.mobile.focusClass),r.preventFocusZoom&&e.mobile.zoom.enable(!0)}),l.is("textarea")&&(this._keyup=function(){var e,t,i,n=l[0].scrollHeight,o=l[0].clientHeight;n>o&&(e=parseFloat(l.css("padding-top")),t=parseFloat(l.css("padding-bottom")),i=e+t,l.height(n-i+g))},l.on("keyup change input paste",function(){clearTimeout(a),a=setTimeout(s._keyup,v)}),this._on(!0,e.mobile.document,{pagechange:"_keyup"}),e.trim(l.val())&&this._on(!0,e.mobile.window,{load:"_keyup"})),l.attr("disabled")&&this.disable()},disable:function(){var e,t=this.element.is("[type='search'], :jqmData(type='search')"),i=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),n=this.element.attr("disabled",!0)&&(i||t);return e=n?this.element.parent():this.element,e.addClass("ui-disabled"),this._setOption("disabled",!0)},enable:function(){var e,t=this.element.is("[type='search'], :jqmData(type='search')"),i=this.element.is("input")&&!this.element.is(":jqmData(type='range')"),n=this.element.attr("disabled",!1)&&(i||t);return e=n?this.element.parent():this.element,e.removeClass("ui-disabled"),this._setOption("disabled",!1)}}),e.mobile.textinput.initSelector="input[type='text'], input[type='search'], :jqmData(type='search'), input[type='number'], :jqmData(type='number'), input[type='password'], input[type='email'], input[type='url'], input[type='tel'], textarea, input[type='time'], input[type='date'], input[type='month'], input[type='week'], input[type='datetime'], input[type='datetime-local'], input[type='color'], input:not([type]), input[type='file']",e.mobile._enhancer.add("mobile.textinput")}(e),function(e){var t=function(e,t){return-1===(""+e).toLowerCase().indexOf(t)};e.widget("mobile.listview",e.mobile.listview,{options:{filter:!1,filterPlaceholder:"Filter items...",filterTheme:"c",filterReveal:!1,filterCallback:t},_onKeyUp:function(){var i,n,o=this._search,a=this.options,s=this.element,l=o[0].value.toLowerCase(),r=null,d=s.children(),h=o.jqmData("lastval")+"",c=!1,u="",p=a.filterCallback!==t;if(!h||h!==l){if(this._trigger("beforefilter","beforefilter",{input:o[0]}),o.jqmData("lastval",l),p||l.length<h.length||0!==l.indexOf(h)?r=s.children():(r=s.children(":not(.ui-screen-hidden)"),!r.length&&a.filterReveal&&(r=s.children(".ui-screen-hidden"))),l){for(n=r.length-1;n>=0;n--)i=e(r[n]),u=i.jqmData("filtertext")||i.text(),i.is("li:jqmData(role=list-divider)")?(i.toggleClass("ui-filter-hidequeue",!c),c=!1):a.filterCallback(u,l,i)?i.toggleClass("ui-filter-hidequeue",!0):c=!0;r.filter(":not(.ui-filter-hidequeue)").toggleClass("ui-screen-hidden",!1),r.filter(".ui-filter-hidequeue").toggleClass("ui-screen-hidden",!0).toggleClass("ui-filter-hidequeue",!1)}else r.toggleClass("ui-screen-hidden",!!a.filterReveal);this._addFirstLastClasses(d,this._getVisibles(d,!1),!1)}},_create:function(){var t,i,n,o=this.options;this._super(),o.filter&&(t=this.element,o.filterReveal&&t.children().addClass("ui-screen-hidden"),i=e("<form>",{"class":"ui-listview-filter ui-bar-"+o.filterTheme,role:"search"}).submit(function(){return n.blur(),!1}),n=e("<input>",{placeholder:o.filterPlaceholder}).attr("data-"+e.mobile.ns+"type","search").jqmData("lastval","").appendTo(i).textinput(),this._on(n,{keyup:"_onKeyUp",change:"_onKeyUp",input:"_onKeyUp"}),e.extend(this,{_search:n}),o.inset&&i.addClass("ui-listview-filter-inset"),i.insertBefore(t))}})}(e),function(e){function t(t){var i=e.trim(t.text())||null;return i?i=i.slice(0,1).toUpperCase():null}e.widget("mobile.listview",e.mobile.listview,{options:{autodividers:!1,autodividersSelector:t},_afterListviewRefresh:function(){var e=this.element;this._off(e,"listviewafterrefresh"),this._replaceDividers(),this.refresh(),this._on(e,{listviewafterrefresh:"_afterListviewRefresh"})},_replaceDividers:function(){var t,n,o,a,s,l=null,r=this.element;for(r.find("li:jqmData(role='list-divider')").remove(),n=r.find("li"),t=0;n.length>t;t++)o=n[t],a=this.options.autodividersSelector(e(o)),a&&l!==a&&(s=i.createElement("li"),s.appendChild(i.createTextNode(a)),s.setAttribute("data-"+e.mobile.ns+"role","list-divider"),o.parentNode.insertBefore(s,o)),l=a},_create:function(){this._super(),this.options.autodividers&&this._afterListviewRefresh()}})}(e),function(e,t){e.mobile._enhancer.add("mobile.nojs",t,function(t){e(":jqmData(role='nojs')",t).addClass("ui-nojs")})}(e),function(e){e.mobile.behaviors.formReset={_handleFormReset:function(){this._on(this.element.closest("form"),{reset:function(){this._delay("_reset")}})}}}(e),function(e){e.widget("mobile.checkboxradio",e.mobile.widget,e.extend({options:{theme:null,mini:!1},_create:function(){var t,n=this.element,o=this.options,a=function(e,t){return e.jqmData(t)||e.closest("form, fieldset").jqmData(t)},s=e(n).closest("label"),l=s.length?s:e(n).closest("form, fieldset, :jqmData(role='page'), :jqmData(role='dialog')").find("label").filter("[for='"+n[0].id+"']").first(),r=n[0].type,d=a(n,"mini")||o.mini,h=r+"-on",c=r+"-off",u=a(n,"iconpos"),p="ui-"+h,m="ui-"+c;("checkbox"===r||"radio"===r)&&(o.theme||(o.theme=e.mobile.getInheritedTheme(this.element,"c")),e.extend(this,{buttonMarkupOptions:{theme:o.theme,shadow:!1,mini:d,iconpos:u},label:l,inputtype:r,checkedClass:p,uncheckedClass:m,checkedicon:h,uncheckedicon:c}),t=i.createElement("div"),t.className="ui-"+r,n.add(l).wrapAll(t),this._on(l,{vmouseover:"_handleLabelVMouseOver",vclick:"_handleLabelVClick"}),this._on(n,{vmousedown:"_cacheVals",vclick:"_handleInputVClick",focus:"_handleInputFocus",blur:"_handleInputBlur"}),this._handleFormReset(),this.refresh())},_handleInputFocus:function(){this.label.addClass(e.mobile.focusClass)},_handleInputBlur:function(){this.label.removeClass(e.mobile.focusClass)},_handleInputVClick:function(){var e=this.element;e.is(":checked")?(e.prop("checked",!0),this._getInputSet().not(e).prop("checked",!1)):e.prop("checked",!1),this._updateAll()},_handleLabelVMouseOver:function(e){this.label.parent().hasClass("ui-disabled")&&e.stopPropagation()},_handleLabelVClick:function(e){var t=this.element;return t.is(":disabled")?(e.preventDefault(),n):(this._cacheVals(),t.prop("checked","radio"===this.inputtype&&!0||!t.prop("checked")),t.triggerHandler("click"),this._getInputSet().not(t).prop("checked",!1),this._updateAll(),!1)},_cacheVals:function(){this._getInputSet().each(function(){e(this).jqmData("cacheVal",this.checked)})},_getInputSet:function(){return"checkbox"===this.inputtype?this.element:this.element.closest("form, :jqmData(role='page'), :jqmData(role='dialog')").find("input[name='"+this.element[0].name+"'][type='"+this.inputtype+"']")},_updateAll:function(){var t=this;this._getInputSet().each(function(){var i=e(this);(this.checked||"checkbox"===t.inputtype)&&i.trigger("change")}).checkboxradio("refresh")},_reset:function(){this.refresh()},refresh:function(){var t=this.element[0],i=" "+e.mobile.activeBtnClass,n=this.checkedClass+(this.element.parents(".ui-controlgroup-horizontal").length?i:""),o=this.label,a=this.buttonMarkupOptions;t.checked?(a.icon=this.checkedicon,o.removeClass(this.uncheckedClass+i).addClass(n).buttonMarkup(a)):(a.icon=this.uncheckedicon,o.removeClass(n).addClass(this.uncheckedClass).buttonMarkup(a)),this.buttonMarkupOptions={},t.disabled?this.disable():this.enable()},_setTheme:function(e){this.label.buttonMarkup({theme:e})},_setMini:function(e){this.label.buttonMarkup({mini:!!e})},_setDisabled:function(e){e=!!e,this.element.prop("disabled",e).parent().toggleClass("ui-disabled",e)}},e.mobile.behaviors.formReset,e.mobile.behaviors.optionDemultiplexer)),e.mobile.checkboxradio.initSelector="input[type='checkbox'],input[type='radio']",e.mobile._enhancer.add("mobile.checkboxradio")}(e),function(e){function t(e){var t,i={btn:{},widget:{}};for(t in e)null!==e[t]&&("disabled"===t?(i.widget.disabled=e[t],i.haveWidget=!0):"initSelector"!==t&&(i.btn[t]=e[t],i.haveBtn=!0));return i}e.widget("mobile.button",e.mobile.widget,{options:{theme:null,icon:null,iconpos:null,corners:!0,shadow:!0,iconshadow:!0,inline:null,mini:null},_create:function(){var i,o=this.options,a=this.element,s="";return"A"===a[0].tagName?(a.hasClass("ui-btn")||a.buttonMarkup(),n):(o.theme||(o.theme=e.mobile.getInheritedTheme(a,"c")),o.disabled=a.prop("disabled"),o=t(o),~a[0].className.indexOf("ui-btn-left")&&(s="ui-btn-left"),~a[0].className.indexOf("ui-btn-right")&&(s="ui-btn-right"),("submit"===a.attr("type")||"reset"===a.attr("type"))&&(s?s+=" ui-submit":s="ui-submit"),e("label[for='"+a.attr("id")+"']").addClass("ui-submit"),this.button=e("<div></div>")[a.html()?"html":"text"](a.html()||a.val()).insertBefore(a).buttonMarkup(o.btn).addClass(s).append(a.addClass("ui-btn-hidden")),this._setOption("disabled",o.widget.disabled),i=this.button,this._on(a,{focus:function(){i.addClass(e.mobile.focusClass)},blur:function(){i.removeClass(e.mobile.focusClass)}}),n)},widget:function(){return this.button},_destroy:function(){var e=this.button;this.element.insertBefore(e),e.remove()},_setOptions:function(e){e=t(e),e.haveBtn&&this.button.buttonMarkup(e.btn),e.haveWidget&&this._super(e.widget)},_setOption:function(t,i){var n={};n[t]=i,"disabled"===t?(i=!!i,this.element.prop("disabled",i),this.button.toggleClass("ui-disabled",i)):"initSelector"!==t&&(this.button.buttonMarkup(n),this.element.attr("data-"+(e.mobile.ns||"")+t.replace(/([A-Z])/,"-$1").toLowerCase(),i)),this._super(t,i)},refresh:function(){var t=this.element;this._setOption("disabled",t.prop("disabled")),e(this.button.data("buttonElements").text)[t.html()?"html":"text"](t.html()||t.val())}}),e.mobile.button.initSelector="button, [type='button'], [type='submit'], [type='reset']",e.mobile._enhancer.add("mobile.button")}(e),function(e,n){e.widget("mobile.slider",e.mobile.widget,e.extend({widgetEventPrefix:"slide",options:{theme:null,trackTheme:null,mini:!1,highlight:!1},_create:function(){var o,a,s,l,r,d,h,c,u,p,m=this,f=this.element,b=e.mobile.getInheritedTheme(f,"c"),g=this.options.trackTheme||b,v=f[0].nodeName.toLowerCase(),_="select"===v,C=f.parent().is(":jqmData(role='rangeslider')"),x=_?"ui-slider-switch":"",w=f.attr("id"),y=e("[for='"+w+"']"),T=y.attr("id")||w+"-label",k=y.attr("id",T),P=_?0:parseFloat(f.attr("min")),D=_?f.find("option").length-1:parseFloat(f.attr("max")),E=t.parseFloat(f.attr("step")||1),q=this.options.mini||f.jqmData("mini")?" ui-mini":"",j=i.createElement("a"),S=e(j),O=i.createElement("div"),I=e(O),A=this.options.highlight&&!_?function(){var t=i.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(I)}():!1;if(this.isToggleSwitch=_,j.setAttribute("href","#"),O.setAttribute("role","application"),O.className=[this.isToggleSwitch?"ui-slider ":"ui-slider-track ",x," ui-btn-down-",g," ui-btn-corner-all",q].join(""),j.className="ui-slider-handle",O.appendChild(j),S.attr({role:"slider","aria-valuemin":P,"aria-valuemax":D,"aria-valuenow":this._value(),"aria-valuetext":this._value(),title:this._value(),"aria-labelledby":T}),e.extend(this,{slider:I,handle:S,type:v,step:E,max:D,min:P,valuebg:A,isRangeslider:C,dragging:!1,beforeStart:null,userModified:!1,mouseMoved:!1}),_){for(a=i.createElement("div"),a.className="ui-slider-inneroffset",s=0,l=O.childNodes.length;l>s;s++)a.appendChild(O.childNodes[s]);for(O.appendChild(a),S.addClass("ui-slider-handle-snapping"),o=f.find("option"),r=0,d=o.length;d>r;r++)h=r?"a":"b",c=r?" "+e.mobile.activeBtnClass:" ui-btn-down-"+g,u=i.createElement("div"),p=i.createElement("span"),p.className=["ui-slider-label ui-slider-label-",h,c," ui-btn-corner-all"].join(""),p.setAttribute("role","img"),p.appendChild(i.createTextNode(o[r].innerHTML)),e(p).prependTo(I);m._labels=e(".ui-slider-label",I)}k.addClass("ui-slider"),f.addClass(_?"ui-slider-switch":"ui-slider-input"),this._on(f,{change:"_controlChange",keyup:"_controlKeyup",blur:"_controlBlur",vmouseup:"_controlVMouseUp"}),I.bind("vmousedown",e.proxy(this._sliderVMouseDown,this)).bind("vclick",!1),this._on(i,{vmousemove:"_preventDocumentDrag"}),this._on(I.add(i),{vmouseup:"_sliderVMouseUp"}),I.insertAfter(f),_||C||(a=this.options.mini?"<div class='ui-slider ui-mini'>":"<div class='ui-slider'>",f.add(I).wrapAll(a)),_&&this.handle.bind({focus:function(){I.addClass(e.mobile.focusClass)},blur:function(){I.removeClass(e.mobile.focusClass)}}),this._on(this.handle,{vmousedown:"_handleVMouseDown",keydown:"_handleKeydown",keyup:"_handleKeyup"}),this.handle.bind("vclick",!1),this._handleFormReset(),this.refresh(n,n,!0)},_controlChange:function(e){return this._trigger("controlchange",e)===!1?!1:(this.mouseMoved||this.refresh(this._value(),!0),n)},_controlKeyup:function(){this.refresh(this._value(),!0,!0)},_controlBlur:function(){this.refresh(this._value(),!0)},_controlVMouseUp:function(){this._checkedRefresh()},_handleVMouseDown:function(){this.handle.focus()},_handleKeydown:function(t){var i=this._value();if(!this.options.disabled){switch(t.keyCode){case e.mobile.keyCode.HOME:case e.mobile.keyCode.END:case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:t.preventDefault(),this._keySliding||(this._keySliding=!0,this.handle.addClass("ui-state-active"))}switch(t.keyCode){case e.mobile.keyCode.HOME:this.refresh(this.min);break;case e.mobile.keyCode.END:this.refresh(this.max);break;case e.mobile.keyCode.PAGE_UP:case e.mobile.keyCode.UP:case e.mobile.keyCode.RIGHT:this.refresh(i+this.step);break;case e.mobile.keyCode.PAGE_DOWN:case e.mobile.keyCode.DOWN:case e.mobile.keyCode.LEFT:this.refresh(i-this.step)}}},_handleKeyup:function(){this._keySliding&&(this._keySliding=!1,this.handle.removeClass("ui-state-active"))},_sliderVMouseDown:function(e){return this.options.disabled||1!==e.which&&0!==e.which&&e.which!==n?!1:this._trigger("beforestart",e)===!1?!1:(this.dragging=!0,this.userModified=!1,this.mouseMoved=!1,this.isToggleSwitch&&(this.beforeStart=this.element[0].selectedIndex),this.refresh(e),this._trigger("start"),!1)},_sliderVMouseUp:function(){return this.dragging?(this.dragging=!1,this.isToggleSwitch&&(this.handle.addClass("ui-slider-handle-snapping"),this.mouseMoved?this.userModified?this.refresh(0===this.beforeStart?1:0):this.refresh(this.beforeStart):this.refresh(0===this.beforeStart?1:0)),this.mouseMoved=!1,this._trigger("stop"),!1):n},_preventDocumentDrag:function(e){return this._trigger("drag",e)===!1?!1:this.dragging&&!this.options.disabled?(this.mouseMoved=!0,this.isToggleSwitch&&this.handle.removeClass("ui-slider-handle-snapping"),this.refresh(e),this.userModified=this.beforeStart!==this.element[0].selectedIndex,!1):n},_checkedRefresh:function(){this.value!==this._value()&&this.refresh(this._value())},_value:function(){return this.isToggleSwitch?this.element[0].selectedIndex:parseFloat(this.element.val())},_reset:function(){this.refresh(n,!1,!0)},refresh:function(t,o,a){var s,l,r,d,h,c,u,p,m,f,b,g,v,_,C,x,w,y,T,k,P=this,D=e.mobile.getInheritedTheme(this.element,"c"),E=this.options.theme||D,q=this.options.trackTheme||D;if(P.slider[0].className=[this.isToggleSwitch?"ui-slider ui-slider-switch":"ui-slider-track"," ui-btn-down-"+q," ui-btn-corner-all",this.options.mini?" ui-mini":""].join(""),(this.options.disabled||this.element.prop("disabled"))&&this.disable(),this.value=this._value(),this.options.highlight&&!this.isToggleSwitch&&0===this.slider.find(".ui-slider-bg").length&&(this.valuebg=function(){var t=i.createElement("div");return t.className="ui-slider-bg "+e.mobile.activeBtnClass+" ui-btn-corner-all",e(t).prependTo(P.slider)}()),this.handle.buttonMarkup({corners:!0,theme:E,shadow:!0}),u=this.element,p=!this.isToggleSwitch,m=p?[]:u.find("option"),f=p?parseFloat(u.attr("min")):0,b=p?parseFloat(u.attr("max")):m.length-1,g=p&&parseFloat(u.attr("step"))>0?parseFloat(u.attr("step")):1,"object"==typeof t){if(r=t,d=8,s=this.slider.offset().left,l=this.slider.width(),h=l/((b-f)/g),!this.dragging||s-d>r.pageX||r.pageX>s+l+d)return;c=h>1?100*((r.pageX-s)/l):Math.round(100*((r.pageX-s)/l))}else null==t&&(t=p?parseFloat(u.val()||0):u[0].selectedIndex),c=100*((parseFloat(t)-f)/(b-f));if(!isNaN(c)&&(v=c/100*(b-f)+f,_=(v-f)%g,C=v-_,2*Math.abs(_)>=g&&(C+=_>0?g:-g),x=100/((b-f)/g),v=parseFloat(C.toFixed(5)),h===n&&(h=l/((b-f)/g)),h>1&&p&&(c=(v-f)*x*(1/g)),0>c&&(c=0),c>100&&(c=100),f>v&&(v=f),v>b&&(v=b),this.handle.css("left",c+"%"),this.handle[0].setAttribute("aria-valuenow",p?v:m.eq(v).attr("value")),this.handle[0].setAttribute("aria-valuetext",p?v:m.eq(v).getEncodedText()),this.handle[0].setAttribute("title",p?v:m.eq(v).getEncodedText()),this.valuebg&&this.valuebg.css("width",c+"%"),this._labels&&(w=100*(this.handle.width()/this.slider.width()),y=c&&w+(100-w)*c/100,T=100===c?0:Math.min(w+100-y,100),this._labels.each(function(){var t=e(this).hasClass("ui-slider-label-a");e(this).width((t?y:T)+"%")})),!a)){if(k=!1,p?(k=u.val()!==v,u.val(v)):(k=u[0].selectedIndex!==v,u[0].selectedIndex=v),this._trigger("beforechange",t)===!1)return!1;!o&&k&&u.trigger("change")}},_setHighlight:function(e){e=!!e,e?(this.options.highlight=!!e,this.refresh()):this.valuebg&&(this.valuebg.remove(),this.valuebg=!1)},_setMini:function(e){e=!!e,this.isToggleSwitch||this.isRangeslider||(this.slider.parent().toggleClass("ui-mini",e),this.element.toggleClass("ui-mini",e)),this.slider.toggleClass("ui-mini",e)},_setTheme:function(e){this.handle.buttonMarkup({theme:e})},_setTrackTheme:function(e){this.slider.removeClass("ui-btn-down-"+this.options.trackTheme).addClass("ui-btn-down-"+e)},_setDisabled:function(e){e=!!e,this.element.prop("disabled",e),this.slider.toggleClass("ui-disabled",e).attr("aria-disabled",e)}},e.mobile.behaviors.formReset,e.mobile.behaviors.optionDemultiplexer)),e.mobile.slider.initSelector="input[type='range'], :jqmData(type='range'), :jqmData(role='slider')",e.mobile._enhancer.add("mobile.slider")}(e),function(e){e.widget("mobile.rangeslider",e.mobile.widget,e.extend({options:{theme:null,trackTheme:null,mini:!1,highlight:!0},_create:function(){var t,i=this.element,n=this.options.mini?"ui-rangeslider ui-mini":"ui-rangeslider",o=i.find("input").first(),a=i.find("input").last(),s=i.find("label").first(),l=e.data(o.get(0),"mobile-slider").slider,r=e.data(a.get(0),"mobile-slider").slider,d=e.data(o.get(0),"mobile-slider").handle,h=e("<div class='ui-rangeslider-sliders' />").appendTo(i);i.find("label").length>1&&(t=i.find("label").last().hide()),o.addClass("ui-rangeslider-first"),a.addClass("ui-rangeslider-last"),i.addClass(n),l.appendTo(h),r.appendTo(h),s.prependTo(i),d.prependTo(r),e.extend(this,{_inputFirst:o,_inputLast:a,_sliderFirst:l,_sliderLast:r,_targetVal:null,_sliderTarget:!1,_sliders:h,_proxy:!1}),this.refresh(),this._on(this.element.find("input.ui-slider-input"),{slidebeforestart:"_slidebeforestart",slidestop:"_slidestop",slidedrag:"_slidedrag",slidebeforechange:"_change",blur:"_change",keyup:"_change"}),this._on({mousedown:"_change"}),this._on(this.element.closest("form"),{reset:"_handleReset"}),this._on(d,{vmousedown:"_dragFirstHandle"})},_handleReset:function(){var e=this;setTimeout(function(){e._updateHighlight()},0)},_dragFirstHandle:function(t){return e.data(this._inputFirst.get(0),"mobile-slider").dragging=!0,e.data(this._inputFirst.get(0),"mobile-slider").refresh(t),!1},_slidedrag:function(t){var i=e(t.target).is(this._inputFirst),o=i?this._inputLast:this._inputFirst;return this._sliderTarget=!1,"first"===this._proxy&&i||"last"===this._proxy&&!i?(e.data(o.get(0),"mobile-slider").dragging=!0,e.data(o.get(0),"mobile-slider").refresh(t),!1):n},_slidestop:function(t){var i=e(t.target).is(this._inputFirst);this._proxy=!1,this.element.find("input").trigger("vmouseup"),this._sliderFirst.css("z-index",i?1:"")},_slidebeforestart:function(t){this._sliderTarget=!1,e(t.originalEvent.target).hasClass("ui-slider-track")&&(this._sliderTarget=!0,this._targetVal=e(t.target).val())},_setOption:function(e){this._superApply(e),this.refresh()},refresh:function(){var e=this.element,t=this.options;e.find("input").slider({theme:t.theme,trackTheme:t.trackTheme,disabled:t.disabled,mini:t.mini,highlight:t.highlight}).slider("refresh"),this._updateHighlight()},_change:function(t){if("keyup"===t.type)return this._updateHighlight(),!1;var i=this,o=parseFloat(this._inputFirst.val(),10),a=parseFloat(this._inputLast.val(),10),s=e(t.target).hasClass("ui-rangeslider-first"),l=s?this._inputFirst:this._inputLast,r=s?this._inputLast:this._inputFirst;if(this._inputFirst.val()>this._inputLast.val()&&"mousedown"===t.type&&!e(t.target).hasClass("ui-slider-handle"))l.blur();else if("mousedown"===t.type)return;return o>a&&!this._sliderTarget?(l.val(s?a:o).slider("refresh"),this._trigger("normalize")):o>a&&(l.val(this._targetVal).slider("refresh"),setTimeout(function(){r.val(s?o:a).slider("refresh"),e.data(r.get(0),"mobile-slider").handle.focus(),i._sliderFirst.css("z-index",s?"":1),i._trigger("normalize")},0),this._proxy=s?"first":"last"),o===a?(e.data(l.get(0),"mobile-slider").handle.css("z-index",1),e.data(r.get(0),"mobile-slider").handle.css("z-index",0)):(e.data(r.get(0),"mobile-slider").handle.css("z-index",""),e.data(l.get(0),"mobile-slider").handle.css("z-index","")),this._updateHighlight(),o>=a?!1:n},_updateHighlight:function(){var t=parseInt(e.data(this._inputFirst.get(0),"mobile-slider").handle.get(0).style.left,10),i=parseInt(e.data(this._inputLast.get(0),"mobile-slider").handle.get(0).style.left,10),n=i-t;
this.element.find(".ui-slider-bg").css({"margin-left":t+"%",width:n+"%"})},_setTheme:function(e){this._inputFirst.slider("option","theme",e),this._inputLast.slider("option","theme",e)},_setTrackTheme:function(e){this._inputFirst.slider("option","trackTheme",e),this._inputLast.slider("option","trackTheme",e)},_setMini:function(e){this._inputFirst.slider("option","mini",e),this._inputLast.slider("option","mini",e),this.element.toggleClass("ui-mini",!!e)},_setHighlight:function(e){this._inputFirst.slider("option","highlight",e),this._inputLast.slider("option","highlight",e)},_destroy:function(){this.element.removeClass("ui-rangeslider ui-mini").find("label").show(),this._inputFirst.after(this._sliderFirst),this._inputLast.after(this._sliderLast),this._sliders.remove(),this.element.find("input").removeClass("ui-rangeslider-first ui-rangeslider-last").slider("destroy")}},e.mobile.behaviors.formReset,e.mobile.behaviors.optionDemultiplexer)),e.mobile.rangeslider.initSelector=":jqmData(role='rangeslider')",e.mobile._enhancer.add("mobile.rangeslider",{dependencies:["mobile.slider"]})}(e),function(e){e.widget("mobile.selectmenu",e.mobile.widget,e.extend({options:{theme:null,disabled:!1,icon:"arrow-d",iconpos:"right",inline:!1,corners:!0,shadow:!0,iconshadow:!0,overlayTheme:"a",dividerTheme:"b",hidePlaceholderMenuItems:!0,closeText:"Close",nativeMenu:!0,preventFocusZoom:/iPhone|iPad|iPod/.test(navigator.platform)&&navigator.userAgent.indexOf("AppleWebKit")>-1,mini:!1},_button:function(){return e("<div/>")},_setDisabled:function(e){return this.element.attr("disabled",e),this.button.attr("aria-disabled",e),this._setOption("disabled",e)},_focusButton:function(){var e=this;setTimeout(function(){e.button.focus()},40)},_selectOptions:function(){return this.select.find("option")},_preExtension:function(){var t="";~this.element[0].className.indexOf("ui-btn-left")&&(t=" ui-btn-left"),~this.element[0].className.indexOf("ui-btn-right")&&(t=" ui-btn-right"),this.select=this.element.removeClass("ui-btn-left ui-btn-right").wrap("<div class='ui-select"+t+"'>"),this.selectID=this.select.attr("id"),this.label=e("label[for='"+this.selectID+"']").addClass("ui-select"),this.isMultiple=this.select[0].multiple,this.options.theme||(this.options.theme=e.mobile.getInheritedTheme(this.select,"c"))},_destroy:function(){var e=this.element.parents(".ui-select");e.length>0&&(e.is(".ui-btn-left, .ui-btn-right")&&this.element.addClass(e.hasClass("ui-btn-left")?"ui-btn-left":"ui-btn-right"),this.element.insertAfter(e),e.remove())},_create:function(){this._preExtension(),this._trigger("beforeCreate"),this.button=this._button();var i=this,n=this.options,o=n.inline||this.select.jqmData("inline"),a=n.mini||this.select.jqmData("mini"),s=n.icon?n.iconpos||this.select.jqmData("iconpos"):!1,l=this.button.insertBefore(this.select).buttonMarkup({theme:n.theme,icon:n.icon,iconpos:s,inline:o,corners:n.corners,shadow:n.shadow,iconshadow:n.iconshadow,mini:a});this.setButtonText(),n.nativeMenu&&t.opera&&t.opera.version&&l.addClass("ui-select-nativeonly"),this.isMultiple&&(this.buttonCount=e("<span>").addClass("ui-li-count ui-btn-up-c ui-btn-corner-all").hide().appendTo(l.addClass("ui-li-has-count"))),(n.disabled||this.element.attr("disabled"))&&this.disable(),this.select.change(function(){i.refresh(),n.nativeMenu&&this.blur()}),this._handleFormReset(),this.build()},build:function(){var t=this;this.select.appendTo(t.button).bind("vmousedown",function(){t.button.addClass(e.mobile.activeBtnClass)}).bind("focus",function(){t.button.addClass(e.mobile.focusClass)}).bind("blur",function(){t.button.removeClass(e.mobile.focusClass)}).bind("focus vmouseover",function(){t.button.trigger("vmouseover")}).bind("vmousemove",function(){t.button.removeClass(e.mobile.activeBtnClass)}).bind("change blur vmouseout",function(){t.button.trigger("vmouseout").removeClass(e.mobile.activeBtnClass)}).bind("change blur",function(){t.button.removeClass("ui-btn-down-"+t.options.theme)}),t.button.bind("vmousedown",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.label.bind("click focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.select.bind("focus",function(){t.options.preventFocusZoom&&e.mobile.zoom.disable(!0)}),t.button.bind("mouseup",function(){t.options.preventFocusZoom&&setTimeout(function(){e.mobile.zoom.enable(!0)},0)}),t.select.bind("blur",function(){t.options.preventFocusZoom&&e.mobile.zoom.enable(!0)})},selected:function(){return this._selectOptions().filter(":selected")},selectedIndices:function(){var e=this;return this.selected().map(function(){return e._selectOptions().index(this)}).get()},setButtonText:function(){var t=this,n=this.selected(),o=this.placeholder,a=e(i.createElement("span"));this.button.find(".ui-btn-text").html(function(){return o=n.length?n.map(function(){return e(this).text()}).get().join(", "):t.placeholder,a.text(o).addClass(t.select.attr("class")).addClass(n.attr("class"))})},setButtonCount:function(){var e=this.selected();this.isMultiple&&this.buttonCount[e.length>1?"show":"hide"]().text(e.length)},_reset:function(){this.refresh()},refresh:function(){this.setButtonText(),this.setButtonCount()},open:e.noop,close:e.noop,disable:function(){this._setDisabled(!0),this.button.addClass("ui-disabled")},enable:function(){this._setDisabled(!1),this.button.removeClass("ui-disabled")}},e.mobile.behaviors.formReset)),e.mobile.selectmenu.initSelector="select:not( :jqmData(role='slider') )",e.mobile._enhancer.add("mobile.selectmenu")}(e),function(e,t){e.mobile._enhancer.add("mobile.links",t,function(t){e(t).find("a").jqmEnhanceable().filter(":jqmData(rel='popup')[href][href!='']").each(function(){var t=this,n=e(this).attr("href");t.setAttribute("aria-haspopup",!0),t.setAttribute("aria-owns",n),t.setAttribute("aria-expanded",!1),e(i).on("popupafteropen",n,function(){t.setAttribute("aria-expanded",!0)}).on("popupafterclose",n,function(){t.setAttribute("aria-expanded",!1)})}).end().not(".ui-btn, .ui-link-inherit, :jqmData(role='none'), :jqmData(role='nojs')").addClass("ui-link")})}(e),function(e,n){function o(e,t,i,n){var o=n;return o=t>e?i+(e-t)/2:Math.min(Math.max(i,n-t/2),i+e-t)}function a(){var i=e.mobile.window;return{x:i.scrollLeft(),y:i.scrollTop(),cx:t.innerWidth||i.width(),cy:t.innerHeight||i.height()}}e.widget("mobile.popup",e.mobile.widget,{options:{theme:null,overlayTheme:null,shadow:!0,corners:!0,transition:"none",positionTo:"origin",tolerance:null,initSelector:":jqmData(role='popup')",closeLinkSelector:"a:jqmData(rel='back')",closeLinkEvents:"click.popup",navigateEvents:"navigate.popup",closeEvents:"navigate.popup pagebeforechange.popup",dismissible:!0,history:!e.mobile.browser.oldIE},_eatEventAndClose:function(e){return e.preventDefault(),e.stopImmediatePropagation(),this.options.dismissible&&this.close(),!1},_resizeScreen:function(){var e=this._ui.container.outerHeight(!0);this._ui.screen.removeAttr("style"),e>this._ui.screen.height()&&this._ui.screen.height(e)},_handleWindowKeyUp:function(t){return this._isOpen&&t.keyCode===e.mobile.keyCode.ESCAPE?this._eatEventAndClose(t):n},_expectResizeEvent:function(){var t=a();if(this._resizeData){if(t.x===this._resizeData.winCoords.x&&t.y===this._resizeData.winCoords.y&&t.cx===this._resizeData.winCoords.cx&&t.cy===this._resizeData.winCoords.cy)return!1;clearTimeout(this._resizeData.timeoutId)}return this._resizeData={timeoutId:setTimeout(e.proxy(this,"_resizeTimeout"),200),winCoords:t},!0},_resizeTimeout:function(){this._isOpen?this._expectResizeEvent()||(this._ui.container.hasClass("ui-popup-hidden")&&(this._ui.container.removeClass("ui-popup-hidden"),this.reposition({positionTo:"window"}),this._ignoreResizeEvents()),this._resizeScreen(),this._resizeData=null,this._orientationchangeInProgress=!1):(this._resizeData=null,this._orientationchangeInProgress=!1)},_ignoreResizeEvents:function(){var e=this;this._ignoreResizeTo&&clearTimeout(this._ignoreResizeTo),this._ignoreResizeTo=setTimeout(function(){e._ignoreResizeTo=0},1e3)},_handleWindowResize:function(){this._isOpen&&0===this._ignoreResizeTo&&(!this._expectResizeEvent()&&!this._orientationchangeInProgress||this._ui.container.hasClass("ui-popup-hidden")||this._ui.container.addClass("ui-popup-hidden").removeAttr("style"))},_handleWindowOrientationchange:function(){!this._orientationchangeInProgress&&this._isOpen&&0===this._ignoreResizeTo&&(this._expectResizeEvent(),this._orientationchangeInProgress=!0)},_handleDocumentFocusIn:function(t){var n,o=t.target,a=this._ui;if(this._isOpen){if(o!==a.container[0]){if(n=e(t.target),0===n.parents().filter(a.container[0]).length)return e(i.activeElement).one("focus",function(){n.blur()}),a.focusElement.focus(),t.preventDefault(),t.stopImmediatePropagation(),!1;a.focusElement[0]===a.container[0]&&(a.focusElement=n)}this._ignoreResizeEvents()}},_create:function(){var t={screen:e("<div class='ui-screen-hidden ui-popup-screen'></div>"),placeholder:e("<div style='display: none;'><!-- placeholder --></div>"),container:e("<div class='ui-popup-container ui-popup-hidden'></div>")},i=this.element.closest(".ui-page"),n=this.element.attr("id"),o=this.options;o.history=o.history&&e.mobile.ajaxEnabled&&e.mobile.hashListeningEnabled,0===i.length&&(i=e("body")),i.append(t.screen),t.container.insertAfter(t.screen),t.placeholder.insertAfter(this.element),n&&(t.screen.attr("id",n+"-screen"),t.container.attr("id",n+"-popup"),t.placeholder.html("<!-- placeholder for "+n+" -->")),this.element.addClass("ui-popup").appendTo(t.container),t.focusElement=t.container,e.extend(this,{_scrollTop:0,_page:i,_ui:t,_fallbackTransition:"",_currentTransition:!1,_prereqs:null,_isOpen:!1,_tolerance:null,_resizeData:null,_ignoreResizeTo:0,_orientationchangeInProgress:!1}),this._setOptions(this.options),t.screen.bind("vclick",e.proxy(this,"_eatEventAndClose")),this._on(e.mobile.window,{orientationchange:e.proxy(this,"_handleWindowOrientationchange"),resize:e.proxy(this,"_handleWindowResize"),keyup:e.proxy(this,"_handleWindowKeyUp")}),this._on(e.mobile.document,{focusin:e.proxy(this,"_handleDocumentFocusIn")})},_applyTheme:function(e,t,i){for(var n,o=(e.attr("class")||"").split(" "),a=null,s=t+"";o.length>0;){if(a=o.pop(),n=RegExp("^ui-"+i+"-([a-z])$").exec(a),n&&n.length>1){a=n[1];break}a=null}t!==a&&(e.removeClass("ui-"+i+"-"+a),null!==t&&"none"!==t&&e.addClass("ui-"+i+"-"+s))},_applyTransition:function(t){this._ui.container.removeClass(this._fallbackTransition),t&&"none"!==t&&(this._fallbackTransition=e.mobile._maybeDegradeTransition(t),"none"===this._fallbackTransition&&(this._fallbackTransition=""),this._ui.container.addClass(this._fallbackTransition))},_setOptions:function(e){var t=this.element,i=this._ui.screen;e.theme!==n&&this._applyTheme(t,e.theme,"body"),e.overlayTheme!==n&&(this._applyTheme(i,e.overlayTheme,"overlay"),this._isOpen&&i.addClass("in")),e.shadow!==n&&t.toggleClass("ui-overlay-shadow",e.shadow),e.corners!==n&&t.toggleClass("ui-corner-all",e.corners),e.transition!==n&&(this._currentTransition||this._applyTransition(e.transition)),e.tolerance!==n&&this._setTolerance(e.tolerance),this._super(e)},_setTolerance:function(t){var i,o={t:30,r:15,b:30,l:15};if(t!==n)switch(i=(t+"").split(","),e.each(i,function(e,t){i[e]=parseInt(t,10)}),i.length){case 1:isNaN(i[0])||(o.t=o.r=o.b=o.l=i[0]);break;case 2:isNaN(i[0])||(o.t=o.b=i[0]),isNaN(i[1])||(o.l=o.r=i[1]);break;case 4:isNaN(i[0])||(o.t=i[0]),isNaN(i[1])||(o.r=i[1]),isNaN(i[2])||(o.b=i[2]),isNaN(i[3])||(o.l=i[3]);break;default:}this._tolerance=o},_clampPopupWidth:function(e){var t,i=a(),n={x:this._tolerance.l,y:i.y+this._tolerance.t,cx:i.cx-this._tolerance.l-this._tolerance.r,cy:i.cy-this._tolerance.t-this._tolerance.b};return e||this._ui.container.css("max-width",n.cx),t={cx:this._ui.container.outerWidth(!0),cy:this._ui.container.outerHeight(!0)},{rc:n,menuSize:t}},_calculateFinalLocation:function(e,t){var n,a=t.rc,s=t.menuSize,l=i.documentElement,r=i.body,d=Math.max(l.clientHeight,r.scrollHeight,r.offsetHeight,l.scrollHeight,l.offsetHeight);return n={x:o(a.cx,s.cx,a.x,e.x),y:o(a.cy,s.cy,a.y,e.y)},n.y=Math.max(0,n.y),n.y-=Math.min(n.y,Math.max(0,n.y+s.cy-d)),{left:n.x,top:n.y}},_placementCoords:function(e){return this._calculateFinalLocation(e,this._clampPopupWidth())},_createPrereqs:function(t,i,n){var o,a=this;o={screen:e.Deferred(),container:e.Deferred()},o.screen.then(function(){o===a._prereqs&&t()}),o.container.then(function(){o===a._prereqs&&i()}),e.when(o.screen,o.container).done(function(){o===a._prereqs&&(a._prereqs=null,n())}),a._prereqs=o},_animate:function(t){return this._ui.screen.removeClass(t.classToRemove).addClass(t.screenClassToAdd),t.prereqs.screen.resolve(),t.transition&&"none"!==t.transition&&(t.applyTransition&&this._applyTransition(t.transition),this._fallbackTransition)?(this._ui.container.animationComplete(e.proxy(t.prereqs.container,"resolve")).addClass(t.containerClassToAdd).removeClass(t.classToRemove),n):(this._ui.container.removeClass(t.classToRemove),t.prereqs.container.resolve(),n)},_desiredCoords:function(t){var i,n=null,o=a(),s=t.x,l=t.y,r=t.positionTo;if(r&&"origin"!==r)if("window"===r)s=o.cx/2+o.x,l=o.cy/2+o.y;else{try{n=e(r)}catch(d){n=null}n&&(n.filter(":visible"),0===n.length&&(n=null))}return n&&(i=n.offset(),s=i.left+n.outerWidth()/2,l=i.top+n.outerHeight()/2),("number"!==e.type(s)||isNaN(s))&&(s=o.cx/2+o.x),("number"!==e.type(l)||isNaN(l))&&(l=o.cy/2+o.y),{x:s,y:l}},_reposition:function(e){e={x:e.x,y:e.y,positionTo:e.positionTo},this._trigger("beforeposition",e),this._ui.container.offset(this._placementCoords(this._desiredCoords(e)))},reposition:function(e){this._isOpen&&this._reposition(e)},_openPrereqsComplete:function(){this._ui.container.addClass("ui-popup-active"),this._isOpen=!0,this._resizeScreen(),this._ui.container.attr("tabindex","0").focus(),this._ignoreResizeEvents(),this._trigger("afteropen")},_open:function(t){var i=e.extend({},this.options,t),n=function(){var e=navigator.userAgent,t=e.match(/AppleWebKit\/([0-9\.]+)/),i=!!t&&t[1],n=e.match(/Android (\d+(?:\.\d+))/),o=!!n&&n[1],a=e.indexOf("Chrome")>-1;return null!==n&&"4.0"===o&&i&&i>534.13&&!a?!0:!1}();this._createPrereqs(e.noop,e.noop,e.proxy(this,"_openPrereqsComplete")),this._currentTransition=i.transition,this._applyTransition(i.transition),this.options.theme||this._setOptions({theme:this._page.jqmData("theme")||e.mobile.getInheritedTheme(this._page,"c")}),this._ui.screen.removeClass("ui-screen-hidden"),this._ui.container.removeClass("ui-popup-hidden"),this._reposition(i),this.options.overlayTheme&&n&&this.element.closest(".ui-page").addClass("ui-popup-open"),this._animate({additionalCondition:!0,transition:i.transition,classToRemove:"",screenClassToAdd:"in",containerClassToAdd:"in",applyTransition:!1,prereqs:this._prereqs})},_closePrereqScreen:function(){this._ui.screen.removeClass("out").addClass("ui-screen-hidden")},_closePrereqContainer:function(){this._ui.container.removeClass("reverse out").addClass("ui-popup-hidden").removeAttr("style")},_closePrereqsDone:function(){var t=this._ui.container;t.removeAttr("tabindex"),e.mobile.popup.active=n,e(":focus",t[0]).add(t[0]).blur(),this._trigger("afterclose")},_close:function(t){this._ui.container.removeClass("ui-popup-active"),this._page.removeClass("ui-popup-open"),this._isOpen=!1,this._createPrereqs(e.proxy(this,"_closePrereqScreen"),e.proxy(this,"_closePrereqContainer"),e.proxy(this,"_closePrereqsDone")),this._animate({additionalCondition:this._ui.screen.hasClass("in"),transition:t?"none":this._currentTransition,classToRemove:"in",screenClassToAdd:"out",containerClassToAdd:"reverse out",applyTransition:!0,prereqs:this._prereqs})},_unenhance:function(){this._setOptions({theme:e.mobile.popup.prototype.options.theme}),this.element.detach().insertAfter(this._ui.placeholder).removeClass("ui-popup ui-overlay-shadow ui-corner-all"),this._ui.screen.remove(),this._ui.container.remove(),this._ui.placeholder.remove()},_destroy:function(){e.mobile.popup.active===this?(this.element.one("popupafterclose",e.proxy(this,"_unenhance")),this.close()):this._unenhance()},_closePopup:function(i,n){var o,a,s=this.options,l=!1;i&&i.isDefaultPrevented()||(t.scrollTo(0,this._scrollTop),i&&"pagebeforechange"===i.type&&n&&(o="string"==typeof n.toPage?n.toPage:n.toPage.jqmData("url"),o=e.mobile.path.parseUrl(o),a=o.pathname+o.search+o.hash,this._myUrl!==e.mobile.path.makeUrlAbsolute(a)?l=!0:i.preventDefault()),e.mobile.window.off(s.closeEvents),this.element.undelegate(s.closeLinkSelector,s.closeLinkEvents),this._close(l))},_bindContainerClose:function(){e.mobile.window.on(this.options.closeEvents,e.proxy(this,"_closePopup"))},open:function(t){var i,o,a,s,l,r,d=this,h=this.options;if(!e.mobile.popup.active){if(e.mobile.popup.active=this,this._scrollTop=e.mobile.window.scrollTop(),!h.history)return d._open(t),d._bindContainerClose(),d.element.delegate(h.closeLinkSelector,h.closeLinkEvents,function(e){d.close(),e.preventDefault()}),n;if(r=e.mobile.urlHistory,o=e.mobile.dialogHashKey,a=e.mobile.activePage,s=a?a.hasClass("ui-dialog"):!1,this._myUrl=i=r.getActive().url,l=i.indexOf(o)>-1&&!s&&r.activeIndex>0)return d._open(t),d._bindContainerClose(),n;-1!==i.indexOf(o)||s?i=e.mobile.path.parseLocation().hash+o:i+=i.indexOf("#")>-1?o:"#"+o,0===r.activeIndex&&i===r.initialDst&&(i+=o),e.mobile.window.one("beforenavigate",function(e){e.preventDefault(),d._open(t),d._bindContainerClose()}),this.urlAltered=!0,e.mobile.navigate(i,{role:"dialog"})}},close:function(){e.mobile.popup.active===this&&(this._scrollTop=e.mobile.window.scrollTop(),this.options.history&&this.urlAltered?(e.mobile.back(),this.urlAltered=!1):this._closePopup())}}),e.mobile.popup.handleLink=function(t){var i,n=t.closest(":jqmData(role='page')"),o=e.mobile.path,a=0===n.length?e("body"):n,s=e(o.hashToSelector(o.parseUrl(t.attr("href")).hash),a[0]);s.data("mobile-popup")&&(i=t.offset(),s.popup("open",{x:i.left+t.outerWidth()/2,y:i.top+t.outerHeight()/2,transition:t.jqmData("transition"),positionTo:t.jqmData("position-to")})),setTimeout(function(){var i=t.parent().parent();i.hasClass("ui-li")&&(t=i.parent()),t.removeClass(e.mobile.activeBtnClass)},300)},e.mobile.document.bind("pagebeforechange",function(t,i){"popup"===i.options.role&&(e.mobile.popup.handleLink(i.options.link),t.preventDefault())}),e.mobile.popup.initSelector=":jqmData(role='popup')",e.mobile._enhancer.add("mobile.popup")}(e),function(e,t){var n=function(n){var o,a,s,l=n._destroy,r=n.selectID,d=r?r:(e.mobile.ns||"")+"uuid-"+n.uuid,h=d+"-listbox",c=d+"-dialog",u=n.label,p=n.select.closest(".ui-page"),m=n._selectOptions(),f=n.isMultiple=n.select[0].multiple,b=r+"-button",g=r+"-menu",v=e("<div data-"+e.mobile.ns+"role='dialog' id='"+c+"' data-"+e.mobile.ns+"theme='"+n.options.theme+"' data-"+e.mobile.ns+"overlay-theme='"+n.options.overlayTheme+"'>"+"<div data-"+e.mobile.ns+"role='header'>"+"<div class='ui-title'>"+u.getEncodedText()+"</div>"+"</div>"+"<div data-"+e.mobile.ns+"role='content'></div>"+"</div>"),_=e("<div id='"+h+"' class='ui-selectmenu'>").insertAfter(n.select).popup({theme:n.options.overlayTheme}),C=e("<ul>",{"class":"ui-selectmenu-list",id:g,role:"listbox","aria-labelledby":b}).attr("data-"+e.mobile.ns+"theme",n.options.theme).attr("data-"+e.mobile.ns+"divider-theme",n.options.dividerTheme).appendTo(_),x=e("<div>",{"class":"ui-header ui-bar-"+n.options.theme}).prependTo(_),w=e("<h1>",{"class":"ui-title"}).appendTo(x);n.isMultiple&&(s=e("<a>",{text:n.options.closeText,href:"#","class":"ui-btn-left"}).attr("data-"+e.mobile.ns+"iconpos","notext").attr("data-"+e.mobile.ns+"icon","delete").appendTo(x).buttonMarkup()),e.extend(n,{select:n.select,selectID:r,buttonId:b,menuId:g,popupID:h,dialogID:c,thisPage:p,menuPage:v,label:u,selectOptions:m,isMultiple:f,theme:n.options.theme,listbox:_,list:C,header:x,headerTitle:w,headerClose:s,menuPageContent:o,menuPageClose:a,placeholder:"",build:function(){var i=this;i.refresh(),i._origTabIndex===t&&(i._origTabIndex=null===i.select[0].getAttribute("tabindex")?!1:i.select.attr("tabindex")),i.select.attr("tabindex","-1").focus(function(){e(this).blur(),i.button.focus()}),i.button.bind("vclick keydown",function(t){i.options.disabled||i.isOpen||("vclick"===t.type||t.keyCode&&(t.keyCode===e.mobile.keyCode.ENTER||t.keyCode===e.mobile.keyCode.SPACE))&&(i._decideFormat(),"overlay"===i.menuType?i.button.attr("href","#"+i.popupID).attr("data-"+(e.mobile.ns||"")+"rel","popup"):i.button.attr("href","#"+i.dialogID).attr("data-"+(e.mobile.ns||"")+"rel","dialog"),i.isOpen=!0)}),i.list.attr("role","listbox").bind("focusin",function(t){e(t.target).attr("tabindex","0").trigger("vmouseover")}).bind("focusout",function(t){e(t.target).attr("tabindex","-1").trigger("vmouseout")}).delegate("li:not(.ui-disabled, .ui-li-divider)","click",function(t){var o=i.select[0].selectedIndex,a=i.list.find("li:not(.ui-li-divider)").index(this),s=i._selectOptions().eq(a)[0];s.selected=i.isMultiple?!s.selected:!0,i.isMultiple&&e(this).find(".ui-icon").toggleClass("ui-icon-checkbox-on",s.selected).toggleClass("ui-icon-checkbox-off",!s.selected),(i.isMultiple||o!==a)&&i.select.trigger("change"),i.isMultiple?i.list.find("li:not(.ui-li-divider)").eq(a).addClass("ui-btn-down-"+n.options.theme).find("a").first().focus():i.close(),t.preventDefault()}).keydown(function(t){var i,o,a=e(t.target),s=a.closest("li");switch(t.keyCode){case 38:return i=s.prev().not(".ui-selectmenu-placeholder"),i.hasClass("ui-li-divider")&&(i=i.prev()),i.length&&(a.blur().attr("tabindex","-1"),i.addClass("ui-btn-down-"+n.options.theme).find("a").first().focus()),!1;case 40:return o=s.next(),o.hasClass("ui-li-divider")&&(o=o.next()),o.length&&(a.blur().attr("tabindex","-1"),o.addClass("ui-btn-down-"+n.options.theme).find("a").first().focus()),!1;case 13:case 32:return a.trigger("click"),!1}}),i.menuPage.bind("pagehide",function(){e.mobile._bindPageRemove.call(i.thisPage)}),i.listbox.bind("popupafterclose",function(){i.close()}),i.isMultiple&&i.headerClose.click(function(){return"overlay"===i.menuType?(i.close(),!1):t}),i.thisPage.addDependents(this.menuPage)},_isRebuildRequired:function(){var e=this.list.find("li"),t=this._selectOptions();return t.text()!==e.text()},selected:function(){return this._selectOptions().filter(":selected:not( :jqmData(placeholder='true') )")},refresh:function(t){var i,n=this;(t||this._isRebuildRequired())&&n._buildList(),i=this.selectedIndices(),n.setButtonText(),n.setButtonCount(),n.list.find("li:not(.ui-li-divider)").removeClass(e.mobile.activeBtnClass).attr("aria-selected",!1).each(function(t){if(e.inArray(t,i)>-1){var o=e(this);o.attr("aria-selected",!0),n.isMultiple?o.find(".ui-icon").removeClass("ui-icon-checkbox-off").addClass("ui-icon-checkbox-on"):o.hasClass("ui-selectmenu-placeholder")?o.next().addClass(e.mobile.activeBtnClass):o.addClass(e.mobile.activeBtnClass)}})},close:function(){if(!this.options.disabled&&this.isOpen){var e=this;"page"===e.menuType?(e.menuPage.dialog("close"),e.list.appendTo(e.listbox)):e.listbox.popup("close"),e._focusButton(),e.isOpen=!1}},open:function(){this.button.click()},_decideFormat:function(){function t(){var t=i.list.find("."+e.mobile.activeBtnClass+" a");0===t.length&&(t=i.list.find("li.ui-btn:not( :jqmData(placeholder='true') ) a")),t.first().focus().closest("li").addClass("ui-btn-down-"+n.options.theme)}var i=this,o=e.mobile.window,a=i.list.parent(),s=a.outerHeight(),l=o.scrollTop(),r=i.button.offset().top,d=o.height();s>d-80||!e.support.scrollTop?(i.menuPage.appendTo(e.mobile.pageContainer).page(),i.menuPageContent=v.find(".ui-content"),i.menuPageClose=v.find(".ui-header a"),i.thisPage.unbind("pagehide.remove"),0===l&&r>d&&i.thisPage.one("pagehide",function(){e(this).jqmData("lastScroll",r)}),i.menuPage.one("pageshow",function(){t()}).one("pagehide",function(){i.close()}),i.menuType="page",i.menuPageContent.append(i.list),i.menuPage.find("div .ui-title").text(i.label.text())):(i.menuType="overlay",i.listbox.one("popupafteropen",t))},_buildList:function(){var t,n,o,a,s,l,r,d,h,c,u,p,m,f,b=this,g=this.options,v=this.placeholder,_=!0,C=this.isMultiple?"checkbox-off":"false",x="data-"+e.mobile.ns,w=x+"option-index",y=x+"icon",T=x+"role",k=x+"placeholder",P=i.createDocumentFragment(),D=!1;for(b.list.empty().filter(".ui-listview").listview("destroy"),t=this.select.find("option"),n=t.length,o=this.select[0],s=0;n>s;s++,D=!1)l=t[s],r=e(l),d=l.parentNode,h=r.text(),c=i.createElement("a"),u=[],c.setAttribute("href","#"),c.appendChild(i.createTextNode(h)),d!==o&&"optgroup"===d.nodeName.toLowerCase()&&(p=d.getAttribute("label"),p!==a&&(m=i.createElement("li"),m.setAttribute(T,"list-divider"),m.setAttribute("role","option"),m.setAttribute("tabindex","-1"),m.appendChild(i.createTextNode(p)),P.appendChild(m),a=p)),!_||l.getAttribute("value")&&0!==h.length&&!r.jqmData("placeholder")||(_=!1,D=!0,null===l.getAttribute(k)&&(this._removePlaceholderAttr=!0),l.setAttribute(k,!0),g.hidePlaceholderMenuItems&&u.push("ui-selectmenu-placeholder"),v!==h&&(v=b.placeholder=h)),f=i.createElement("li"),l.disabled&&(u.push("ui-disabled"),f.setAttribute("aria-disabled",!0)),f.setAttribute(w,s),f.setAttribute(y,C),D&&f.setAttribute(k,!0),f.className=u.join(" "),f.setAttribute("role","option"),c.setAttribute("tabindex","-1"),f.appendChild(c),P.appendChild(f);b.list[0].appendChild(P),this.isMultiple||v.length?this.headerTitle.text(this.placeholder):this.header.hide(),b.list.listview()},_button:function(){return e("<a>",{href:"#",role:"button",id:this.buttonId,"aria-haspopup":"true","aria-owns":this.menuId})},_destroy:function(){this.close(),this._origTabIndex!==t&&(this._origTabIndex!==!1?this.select.attr("tabindex",this._origTabIndex):this.select.removeAttr("tabindex")),this._removePlaceholderAttr&&this._selectOptions().removeAttr("data-"+e.mobile.ns+"placeholder"),this.listbox.remove(),this.menuPage.remove(),l.apply(this,arguments)}})};e.mobile.document.bind("selectmenubeforecreate",function(t){var i=e(t.target).data("mobile-selectmenu");i.options.nativeMenu||0!==i.element.parents(":jqmData(role='popup')").length||n(i)})}(e),function(e,t){e.widget("mobile.controlgroup",e.mobile.widget,e.extend({options:{shadow:!1,corners:!0,excludeInvisible:!0,type:"vertical",mini:!1,initSelector:":jqmData(role='controlgroup')"},_create:function(){var t=this.element,i=e("<div class='ui-controlgroup-controls'></div>"),n=t.children("legend");t.wrapInner(i).addClass("ui-controlgroup"),n.length&&e("<div role='heading' class='ui-controlgroup-label'></div>").append(n).insertBefore(t.children(0)),e.extend(this,{_initialRefresh:!0}),this._setOptions(this.options)},_init:function(){this.refresh()},_setOptions:function(e){var i=this.element;return e.type!==t&&(i.removeClass("ui-controlgroup-horizontal ui-controlgroup-vertical").addClass("ui-controlgroup-"+e.type),this.refresh()),e.corners!==t&&i.toggleClass("ui-corner-all",e.corners),e.shadow!==t&&i.toggleClass("ui-shadow",e.shadow),e.mini!==t&&i.toggleClass("ui-mini",e.mini),this._super(e)},container:function(){return this.element.children(".ui-controlgroup-controls")},refresh:function(){var t=this.element,i=t.find(".ui-btn").not(".ui-slider-handle"),n=this._initialRefresh;e.mobile.checkboxradio&&t.find(":mobile-checkboxradio").checkboxradio("refresh"),this._addFirstLastClasses(i,this.options.excludeInvisible?this._getVisibles(i,n):i,n),this._initialRefresh=!1}},e.mobile.behaviors.addFirstLastClasses)),e.mobile.controlgroup.initSelector=":jqmData(role='controlgroup')",e.mobile._enhancer.add("mobile.controlgroup",{dependencies:["mobile.selectmenu","mobile.button","mobile.buttonmarkup","mobile.checkboxradio"]})}(e),function(e,t){e.widget("mobile.toolbar",e.mobile.widget,{options:{theme:"a",addBackBtn:!1,backBtnTheme:null,backBtnText:"Back"},_create:function(){var t,i,n,o=this.element.is(":jqmData(role='header')")?"header":"footer",a=this.element.closest(".ui-page");0===a.length&&(a=!1,this._on(e.mobile.document,{pageshow:"refresh"})),e.extend(this,{role:o,page:a,leftbtn:t,rightbtn:i,backBtn:n}),this.element.attr("role","header"===o?"banner":"contentinfo").addClass("ui-"+o),this.refresh(),this._setOptions(this.options)},_setOptions:function(i){i.addBackBtn!==t&&(this.options.addBackBtn&&"header"===this.role&&e(".ui-page").length>1&&this.page[0].getAttribute("data-"+e.mobile.ns+"url")!==e.mobile.path.stripHash(location.hash)&&!this.leftbtn?this._addBackButton():this.element.find(".ui-toolbar-back-btn").remove()),i.backBtnTheme!==t&&this.element.find(".ui-toolbar-back-btn").attr("data-"+e.mobile.ns+"theme",i.backBtnTheme).buttonMarkup({theme:i.backBtnTheme}),i.backBtnText!==t&&this.element.find(".ui-toolbar-back-btn .ui-btn-text").text(i.backBtnText),i.theme!==t&&this.element.removeClass("ui-bar-"+this.options.theme).addClass("ui-bar-"+i.theme),this._super(i)},refresh:function(){"header"===this.role&&this._addHeaderButtonClasses(),this.page||(e("[data-"+e.mobile.ns+"role='page']").css({position:"relative"}),"footer"===this.role&&this.element.appendTo("body")),this._addHeadingClasses(),this._btnMarkup()},_btnMarkup:function(){this.element.children("a").buttonMarkup()},_addHeaderButtonClasses:function(){var e=this.element.children("a, button");this.leftbtn=e.hasClass("ui-btn-left"),this.rightbtn=e.hasClass("ui-btn-right"),this.leftbtn=this.leftbtn||e.eq(0).not(".ui-btn-right").addClass("ui-btn-left").length,this.rightbtn=this.rightbtn||e.eq(1).addClass("ui-btn-right").length},_addBackButton:function(){this.backBtn=e("<a href='javascript:void(0);' class='ui-btn-left ui-toolbar-back-btn' data-"+e.mobile.ns+"rel='back' data-"+e.mobile.ns+"icon='arrow-l'>"+this.options.backBtnText+"</a>").attr("data-"+e.mobile.ns+"theme",this.options.backBtnTheme||this.options.theme).prependTo(this.element)},_addHeadingClasses:function(){this.element.children("h1, h2, h3, h4, h5, h6").addClass("ui-title").attr({role:"heading","aria-level":"1"})}}),e.mobile.toolbar.initSelector=":jqmData(role='footer'), :jqmData(role='header')",e.mobile._enhancer.add("mobile.toolbar")}(e),function(e,t){e.widget("mobile.toolbar",e.mobile.toolbar,{options:{position:null,visibleOnPageShow:!0,disablePageZoom:!0,transition:"slide",fullscreen:!1,tapToggle:!0,tapToggleBlacklist:"a, button, input, select, textarea, .ui-header-fixed, .ui-footer-fixed, .ui-popup, .ui-panel, .ui-panel-dismiss-open",hideDuringFocus:"input, textarea, select",updatePagePadding:!0,trackPersistentToolbars:!0,supportBlacklist:function(){return!e.support.fixedPosition}},_create:function(){this._super(),"fixed"!==this.options.position||this.options.supportBlacklist()||(this.element.addClass("ui-"+this.role+"-fixed"),this.updatePagePadding(),this._addTransitionClass(),this._bindPageEvents(),this._bindToggleHandlers(),this._setOptions(this.options))},_setOptions:function(i){if("fixed"===this.options.position&&!this.options.supportBlacklist()){var n=this.page?this.page:e(".ui-page-active").length>0?e(".ui-page-active"):e(".ui-page").eq(0);i.fullscreen!==t&&(i.fullscreen?(this.element.addClass("ui-"+this.role+"-fullscreen"),n.addClass("ui-page-"+this.role+"-fullscreen")):(this.element.removeClass("ui-"+this.role+"-fullscreen"),n.removeClass("ui-page-"+this.role+"-fullscreen").addClass("ui-page-"+this.role+"-fixed")))}this._super(i)},_addTransitionClass:function(){var e=this.options.transition;e&&"none"!==e&&("slide"===e&&(e=this.element.hasClass("ui-header")?"slidedown":"slideup"),this.element.addClass(e))},_bindPageEvents:function(){var t=this.page?this.element.closest(".ui-page"):e.mobile.document;this._on(t,{pagebeforeshow:"_handlePageBeforeShow",webkitAnimationStart:"_handleAnimationStart",animationstart:"_handleAnimationStart",updatelayout:"_handleAnimationStart",pageshow:"_handlePageShow",pagebeforehide:"_handlePageBeforeHide"})},_handlePageBeforeShow:function(){var t=this.options;t.disablePageZoom&&e.mobile.zoom.disable(!0),t.visibleOnPageShow||this.hide(!0)},_handleAnimationStart:function(){this.options.updatePagePadding&&this.updatePagePadding(this.page?this.page:".ui-page-active")},_handlePageShow:function(){this.updatePagePadding(this.page?this.page:".ui-page-active"),this.options.updatePagePadding&&this._on(e.mobile.window,{throttledresize:"updatePagePadding"})
},_handlePageBeforeHide:function(t,i){var n,o,a,s,l=this.options;l.disablePageZoom&&e.mobile.zoom.enable(!0),l.updatePagePadding&&this._off(e.mobile.window,"throttledresize"),l.trackPersistentToolbars&&(n=e(".ui-footer-fixed:jqmData(id)",this.page),o=e(".ui-header-fixed:jqmData(id)",this.page),a=n.length&&i.nextPage&&e(".ui-footer-fixed:jqmData(id='"+n.jqmData("id")+"')",i.nextPage)||e(),s=o.length&&i.nextPage&&e(".ui-header-fixed:jqmData(id='"+o.jqmData("id")+"')",i.nextPage)||e(),(a.length||s.length)&&(a.add(s).appendTo(e.mobile.pageContainer),i.nextPage.one("pageshow",function(){s.prependTo(this),a.appendTo(this)})))},_visible:!0,updatePagePadding:function(i){var n=this.element,o="header"===this.role,a=parseFloat(n.css(o?"top":"bottom"));this.options.fullscreen||(i=i&&i.type===t&&i||this.page||n.closest(".ui-page"),i=this.page?this.page:".ui-page-active",e(i).css("padding-"+(o?"top":"bottom"),n.outerHeight()+a))},_useTransition:function(t){var i=e.mobile.window,n=this.element,o=i.scrollTop(),a=n.height(),s=this.page?n.closest(".ui-page").height():e(".ui-page-active").height(),l=e.mobile.getScreenHeight();return!t&&(this.options.transition&&"none"!==this.options.transition&&("header"===this.role&&!this.options.fullscreen&&o>a||"footer"===this.role&&!this.options.fullscreen&&s-a>o+l)||this.options.fullscreen)},show:function(e){var t="ui-fixed-hidden",i=this.element;this._useTransition(e)?i.removeClass("out "+t).addClass("in").animationComplete(function(){i.removeClass("in")}):i.removeClass(t),this._visible=!0},hide:function(e){var t="ui-fixed-hidden",i=this.element,n="out"+("slide"===this.options.transition?" reverse":"");this._useTransition(e)?i.addClass(n).removeClass("in").animationComplete(function(){i.addClass(t).removeClass(n)}):i.addClass(t).removeClass(n),this._visible=!1},toggle:function(){this[this._visible?"hide":"show"]()},_bindToggleHandlers:function(){var t,i,n=this,o=n.options,a=!0,s=this.page?this.page:e(".ui-page");s.bind("vclick",function(t){o.tapToggle&&!e(t.target).closest(o.tapToggleBlacklist).length&&n.toggle()}).bind("focusin focusout",function(s){1025>screen.width&&e(s.target).is(o.hideDuringFocus)&&!e(s.target).closest(".ui-header-fixed, .ui-footer-fixed").length&&("focusout"!==s.type||a?"focusin"===s.type&&a&&(clearTimeout(t),a=!1,i=setTimeout(function(){n.hide()},0)):(a=!0,clearTimeout(i),t=setTimeout(function(){n.show()},0)))})},_destroy:function(){var e=this.element,t=e.hasClass("ui-header");e.closest(".ui-page").css("padding-"+(t?"top":"bottom"),""),e.removeClass("ui-header-fixed ui-footer-fixed ui-header-fullscreen ui-footer-fullscreen in out fade slidedown slideup ui-fixed-hidden"),e.closest(".ui-page").removeClass("ui-page-header-fixed ui-page-footer-fixed ui-page-header-fullscreen ui-page-footer-fullscreen")}})}(e),function(e){e.widget("mobile.toolbar",e.mobile.toolbar,{_create:function(){this._super(),this._workarounds()},_workarounds:function(){var e=navigator.userAgent,t=navigator.platform,i=e.match(/AppleWebKit\/([0-9]+)/),n=!!i&&i[1],o=null,a=this;if(t.indexOf("iPhone")>-1||t.indexOf("iPad")>-1||t.indexOf("iPod")>-1)o="ios";else{if(!(e.indexOf("Android")>-1))return;o="android"}if("ios"===o)a._bindScrollWorkaround();else{if(!("android"===o&&n&&534>n))return;a._bindScrollWorkaround(),a._bindListThumbWorkaround()}},_viewportOffset:function(){var t=this.element,i=t.hasClass("ui-header"),n=Math.abs(t.offset().top-e.mobile.window.scrollTop());return i||(n=Math.round(n-e.mobile.window.height()+t.outerHeight())-60),n},_bindScrollWorkaround:function(){var t=this;this._on(e.mobile.window,{scrollstop:function(){var e=t._viewportOffset();e>2&&t._visible&&t._triggerRedraw()}})},_bindListThumbWorkaround:function(){this.element.closest(".ui-page").addClass("ui-android-2x-fixed")},_triggerRedraw:function(){var t=parseFloat(e(".ui-page-active").css("padding-bottom"));e(".ui-page-active").css("padding-bottom",t+1+"px"),setTimeout(function(){e(".ui-page-active").css("padding-bottom",t+"px")},0)},destroy:function(){this._super(),this.element.closest(".ui-page-active").removeClass("ui-android-2x-fix")}})}(e),function(e,i){e.widget("mobile.panel",e.mobile.widget,{options:{classes:{panel:"ui-panel",panelOpen:"ui-panel-open",panelClosed:"ui-panel-closed",panelFixed:"ui-panel-fixed",panelInner:"ui-panel-inner",modal:"ui-panel-dismiss",modalOpen:"ui-panel-dismiss-open",pagePanel:"ui-page-panel",pagePanelOpen:"ui-page-panel-open",contentWrap:"ui-panel-content-wrap",contentWrapOpen:"ui-panel-content-wrap-open",contentWrapClosed:"ui-panel-content-wrap-closed",contentFixedToolbar:"ui-panel-content-fixed-toolbar",contentFixedToolbarOpen:"ui-panel-content-fixed-toolbar-open",contentFixedToolbarClosed:"ui-panel-content-fixed-toolbar-closed",animate:"ui-panel-animate"},animate:!0,theme:"c",position:"left",dismissible:!0,display:"reveal",swipeClose:!0,positionFixed:!1},_panelID:null,_closeLink:null,_page:null,_modal:null,_panelInner:null,_wrapper:null,_fixedToolbar:null,_create:function(){var t=this,i=t.element,n=i.closest(":jqmData(role='page')"),o=function(){var t=e.data(n[0],"mobile-page").options.theme,i="ui-body-"+t;return i},a=function(){var e=i.find("."+t.options.classes.panelInner);return 0===e.length&&(e=i.children().wrapAll("<div class='"+t.options.classes.panelInner+"' />").parent()),e},s=function(){var i=n.find("."+t.options.classes.contentWrap);return 0===i.length&&(i=n.children(".ui-header:not(:jqmData(position='fixed')), .ui-content:not(:jqmData(role='popup')), .ui-footer:not(:jqmData(position='fixed'))").wrapAll("<div class='"+t.options.classes.contentWrap+" "+o()+"' />").parent(),e.support.cssTransform3d&&t.options.animate&&i.addClass(t.options.classes.animate)),i},l=function(){var i=n.find("."+t.options.classes.contentFixedToolbar);return 0===i.length&&(i=n.find(".ui-header:jqmData(position='fixed'), .ui-footer:jqmData(position='fixed')").addClass(t.options.classes.contentFixedToolbar),e.support.cssTransform3d&&t.options.animate&&i.addClass(t.options.classes.animate)),i};e.extend(this,{_panelID:i.attr("id"),_closeLink:i.find(":jqmData(rel='close')"),_page:i.closest(":jqmData(role='page')"),_pageTheme:o(),_panelInner:a(),_wrapper:s(),_fixedToolbar:l()}),t._addPanelClasses(),t._wrapper.addClass(this.options.classes.contentWrapClosed),t._fixedToolbar.addClass(this.options.classes.contentFixedToolbarClosed),t._page.addClass(t.options.classes.pagePanel),e.support.cssTransform3d&&t.options.animate&&this.element.addClass(t.options.classes.animate),t._bindUpdateLayout(),t._bindCloseEvents(),t._bindLinkListeners(),t._bindPageEvents(),t.options.dismissible&&t._createModal(),t._bindSwipeEvents()},_createModal:function(){var t=this;t._modal=e("<div class='"+t.options.classes.modal+"' data-panelid='"+t._panelID+"'></div>").on("mousedown",function(){t.close()}).appendTo(this._page)},_getPosDisplayClasses:function(e){return e+"-position-"+this.options.position+" "+e+"-display-"+this.options.display},_getPanelClasses:function(){var e=this.options.classes.panel+" "+this._getPosDisplayClasses(this.options.classes.panel)+" "+this.options.classes.panelClosed;return this.options.theme&&(e+=" ui-body-"+this.options.theme),this.options.positionFixed&&(e+=" "+this.options.classes.panelFixed),e},_addPanelClasses:function(){this.element.addClass(this._getPanelClasses())},_bindCloseEvents:function(){var e=this;e._closeLink.on("click.panel",function(t){return t.preventDefault(),e.close(),!1}),e.element.on("click.panel","a:jqmData(ajax='false')",function(){e.close()})},_positionPanel:function(){var t=this,i=t._panelInner.outerHeight(),n=i>e.mobile.getScreenHeight();n||!t.options.positionFixed?(n&&(t._unfixPanel(),e.mobile.resetActivePageHeight(i)),t._scrollIntoView(i)):t._fixPanel()},_scrollIntoView:function(i){e(t).scrollTop()>i&&t.scrollTo(0,0)},_bindFixListener:function(){this._on(e(t),{throttledresize:"_positionPanel"})},_unbindFixListener:function(){this._off(e(t),"throttledresize")},_unfixPanel:function(){this.options.positionFixed&&e.support.fixedPosition&&this.element.removeClass(this.options.classes.panelFixed)},_fixPanel:function(){this.options.positionFixed&&e.support.fixedPosition&&this.element.addClass(this.options.classes.panelFixed)},_bindUpdateLayout:function(){var e=this;e.element.on("updatelayout",function(){e._open&&e._positionPanel()})},_bindLinkListeners:function(){var t=this;t._page.on("click.panel","a",function(n){if(this.href.split("#")[1]===t._panelID&&t._panelID!==i){n.preventDefault();var o,a=e(this);return a.hasClass("ui-link")||(o=a.parent().parent(),o.hasClass("ui-li")&&(a=o.parent()),a.addClass(e.mobile.activeBtnClass),t.element.one("panelopen panelclose",function(){a.removeClass(e.mobile.activeBtnClass)})),t.toggle(),!1}})},_bindSwipeEvents:function(){var e=this,t=e._modal?e.element.add(e._modal):e.element;e.options.swipeClose&&("left"===e.options.position?t.on("swipeleft.panel",function(){e.close()}):t.on("swiperight.panel",function(){e.close()}))},_bindPageEvents:function(){var e=this;e._page.on("panelbeforeopen",function(t){e._open&&t.target!==e.element[0]&&e.close()}).on("pagehide",function(){e._open&&e.close(!0)}).on("keyup.panel",function(t){27===t.keyCode&&e._open&&e.close()})},_open:!1,_contentWrapOpenClasses:null,_fixedToolbarOpenClasses:null,_modalOpenClasses:null,open:function(t){if(!this._open){var i=this,n=i.options,o=function(){i._page.off("panelclose"),i._page.jqmData("panel","open"),!t&&e.support.cssTransform3d&&n.animate?i.element.add(i._wrapper).on(i._transitionEndEvents,a):setTimeout(a,0),i.options.theme&&"overlay"!==i.options.display&&i._page.removeClass(i._pageTheme).addClass("ui-body-"+i.options.theme),i.element.removeClass(n.classes.panelClosed).addClass(n.classes.panelOpen),i._positionPanel(),i.options.theme&&"overlay"!==i.options.display&&i._wrapper.css("min-height",i._page.css("min-height")),i._contentWrapOpenClasses=i._getPosDisplayClasses(n.classes.contentWrap),i._wrapper.removeClass(n.classes.contentWrapClosed).addClass(i._contentWrapOpenClasses+" "+n.classes.contentWrapOpen),i._fixedToolbarOpenClasses=i._getPosDisplayClasses(n.classes.contentFixedToolbar),i._fixedToolbar.removeClass(n.classes.contentFixedToolbarClosed).addClass(i._fixedToolbarOpenClasses+" "+n.classes.contentFixedToolbarOpen),i._modalOpenClasses=i._getPosDisplayClasses(n.classes.modal)+" "+n.classes.modalOpen,i._modal&&i._modal.addClass(i._modalOpenClasses)},a=function(){i.element.add(i._wrapper).off(i._transitionEndEvents,a),i._page.addClass(n.classes.pagePanelOpen),i._bindFixListener(),i._trigger("open")};0>this.element.closest(".ui-page-active").length&&(t=!0),i._trigger("beforeopen"),"open"===i._page.jqmData("panel")?i._page.on("panelclose",function(){o()}):o(),i._open=!0}},close:function(t){if(this._open){var i=this.options,n=this,o=function(){!t&&e.support.cssTransform3d&&i.animate?n.element.add(n._wrapper).on(n._transitionEndEvents,a):setTimeout(a,0),n._page.removeClass(i.classes.pagePanelOpen),n.element.removeClass(i.classes.panelOpen),n._wrapper.removeClass(i.classes.contentWrapOpen),n._fixedToolbar.removeClass(i.classes.contentFixedToolbarOpen),n._modal&&n._modal.removeClass(n._modalOpenClasses)},a=function(){n.options.theme&&"overlay"!==n.options.display&&(n._page.removeClass("ui-body-"+n.options.theme).addClass(n._pageTheme),n._wrapper.css("min-height","")),n.element.add(n._wrapper).off(n._transitionEndEvents,a),n.element.addClass(i.classes.panelClosed),n._wrapper.removeClass(n._contentWrapOpenClasses).addClass(i.classes.contentWrapClosed),n._fixedToolbar.removeClass(n._fixedToolbarOpenClasses).addClass(i.classes.contentFixedToolbarClosed),n._fixPanel(),n._unbindFixListener(),e.mobile.resetActivePageHeight(),n._page.jqmRemoveData("panel"),n._trigger("close")};0>this.element.closest(".ui-page-active").length&&(t=!0),n._trigger("beforeclose"),o(),n._open=!1}},toggle:function(){this[this._open?"close":"open"]()},_transitionEndEvents:"webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd",_destroy:function(){var t=this.options.classes,i=this.options.theme,n=this.element.siblings("."+t.panel).length;n?this._open&&(this._wrapper.removeClass(t.contentWrapOpen),this._fixedToolbar.removeClass(t.contentFixedToolbarOpen),this._page.jqmRemoveData("panel"),this._page.removeClass(t.pagePanelOpen),i&&this._page.removeClass("ui-body-"+i).addClass(this._pageTheme)):(this._wrapper.children().unwrap(),this._page.find("a").unbind("panelopen panelclose"),this._page.removeClass(t.pagePanel),this._open&&(this._page.jqmRemoveData("panel"),this._page.removeClass(t.pagePanelOpen),i&&this._page.removeClass("ui-body-"+i).addClass(this._pageTheme),e.mobile.resetActivePageHeight())),this._panelInner.children().unwrap(),this.element.removeClass([this._getPanelClasses(),t.panelAnimate].join(" ")).off("swipeleft.panel swiperight.panel").off("panelbeforeopen").off("panelhide").off("keyup.panel").off("updatelayout"),this._closeLink.off("click.panel"),this._modal&&this._modal.remove(),this.element.off(this._transitionEndEvents).removeClass([t.panelUnfixed,t.panelClosed,t.panelOpen].join(" "))}}),e.mobile.panel.initSelector=":jqmData(role='panel')",e.mobile._enhancer.add("mobile.panel")}(e),function(e){e.widget("mobile.table",e.mobile.widget,{options:{classes:{table:"ui-table"}},_create:function(){var t=this.element,i=this.element.find("thead tr"),n=this.element.find("tr:eq(0)").children(),o=n.add(i.children());this.element.addClass(this.options.classes.table),e.extend(this,{headers:n,allHeaders:o}),i.each(function(){var n=0,o=e(this);o.children().each(function(){var o,a=e(this),s=parseInt(a.attr("colspan"),10),l=":nth-child("+(n+1)+")";if(a.jqmData("colstart",n+1),s)for(o=0;s-1>o;o++)n++,l+=", :nth-child("+(n+1)+")";a.jqmData("cells",t.find("tr").not(i.eq(0)).not(this).children(l)),n++})})}}),e.mobile.table.initSelector=":jqmData(role='table')",e.mobile._enhancer.add("mobile.table")}(e),function(e){e.widget("mobile.table",e.mobile.table,{options:{mode:"columntoggle",columnBtnTheme:null,columnPopupTheme:null,columnBtnText:"Columns...",classes:e.extend(e.mobile.table.prototype.options.classes,{popup:"ui-table-columntoggle-popup",columnBtn:"ui-table-columntoggle-btn",priorityPrefix:"ui-table-priority-",columnToggleTable:"ui-table-columntoggle"})},_create:function(){var t,i,n,o,a=this.element,s=this.options,l=e.mobile.ns,r=function(){var t=this.checked;e(this).jqmData("cells").toggleClass("ui-table-cell-hidden",!t).toggleClass("ui-table-cell-visible",t)};this._super(),"columntoggle"===s.mode&&(this.element.addClass(s.classes.columnToggleTable),t=(a.attr("id")||s.classes.popup)+"-popup",i=e("<a href='#"+t+"' class='"+s.classes.columnBtn+"' data-"+l+"rel='popup' data-"+l+"mini='true'>"+s.columnBtnText+"</a>"),n=e("<div data-"+l+"role='popup' data-"+l+"role='fieldcontain' class='"+s.classes.popup+"' id='"+t+"'></div>"),o=e("<fieldset data-"+l+"role='controlgroup'></fieldset>"),this.headers.not("td").each(function(){var t=e(this),i=t.jqmData("priority"),n=t.add(t.jqmData("cells"));i&&(n.addClass(s.classes.priorityPrefix+i),e("<label><input type='checkbox' checked />"+t.text()+"</label>").appendTo(o).children(0).jqmData("cells",n).checkboxradio({theme:s.columnPopupTheme}))}),o.appendTo(n),o.on("change","input",r),i.insertBefore(a).buttonMarkup({theme:s.columnBtnTheme}),n.insertBefore(a).popup(),this._on(e.mobile.window,{throttledresize:"refresh"}),e.extend(this,{_menu:o,_menuInputChange:r}),this.refresh())},_destroy:function(){this._menu.off("change","input",this._menuInputChange),this._super()},refresh:function(){this._menu.find("input").each(function(){var t=e(this);this.checked="table-cell"===t.jqmData("cells").eq(0).css("display"),t.checkboxradio("refresh")})}})}(e),function(e){e.widget("mobile.table",e.mobile.table,{options:{mode:"reflow",classes:e.extend(e.mobile.table.prototype.options.classes,{reflowTable:"ui-table-reflow",cellLabels:"ui-table-cell-label"})},_create:function(){var t=this.options;this._super(),"reflow"===t.mode&&(this.element.addClass(t.classes.reflowTable),e(this.allHeaders.get().reverse()).each(function(){var i,n,o=e(this).jqmData("cells"),a=e(this).jqmData("colstart"),s=o.not(this).filter("thead th").length&&" ui-table-cell-label-top",l=e(this).text();""!==l&&(s?(i=parseInt(e(this).attr("colspan"),10),n="",i&&(n="td:nth-child("+i+"n + "+a+")"),o.filter(n).prepend("<b class='"+t.classes.cellLabels+s+"'>"+l+"</b>")):o.prepend("<b class='"+t.classes.cellLabels+"'>"+l+"</b>"))}))}})}(e),function(e,t){function i(e){a=e.originalEvent,d=a.accelerationIncludingGravity,s=Math.abs(d.x),l=Math.abs(d.y),r=Math.abs(d.z),!t.orientation&&(s>7||(r>6&&8>l||8>r&&l>6)&&s>5)?o.enabled&&o.disable():o.enabled||o.enable()}e.mobile.iosorientationfixEnabled=!0;var o,a,s,l,r,d,h=navigator.userAgent;return/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(h)&&h.indexOf("AppleWebKit")>-1?(o=e.mobile.zoom,e.mobile.document.on("mobileinit",function(){e.mobile.iosorientationfixEnabled&&e.mobile.window.bind("orientationchange.iosorientationfix",o.enable).bind("devicemotion.iosorientationfix",i)}),n):(e.mobile.iosorientationfixEnabled=!1,n)}(e,this),function(e,t){function n(){o.removeClass("ui-mobile-rendering")}var o=e("html"),a=e.mobile.window;e(t.document).trigger("mobileinit"),e.mobile.gradeA()&&(e.mobile.ajaxBlacklist&&(e.mobile.ajaxEnabled=!1),o.addClass("ui-mobile ui-mobile-rendering"),setTimeout(n,5e3),e.extend(e.mobile,{initializePage:function(){var t=e.mobile.path,o=e(":jqmData(role='page'), :jqmData(role='dialog')"),s=t.stripHash(t.stripQueryParams(t.parseLocation().hash)),l=i.getElementById(s);o.length||(o=e("body").wrapInner("<div data-"+e.mobile.ns+"role='page'></div>").children(0)),o.each(function(){var t=e(this);t[0].getAttribute("data-"+e.mobile.ns+"url")||t.attr("data-"+e.mobile.ns+"url",t.attr("id")||location.pathname+location.search)}),e.mobile.firstPage=o.first(),e.mobile.pageContainer=e.mobile.firstPage.parent().addClass("ui-mobile-viewport"),e.mobile.navreadyDeferred.resolve(),a.trigger("pagecontainercreate"),e.mobile.showPageLoadingMsg(),n(),e.mobile.hashListeningEnabled&&e.mobile.path.isHashValid(location.hash)&&(e(l).is(":jqmData(role='page')")||e.mobile.path.isPath(s)||s===e.mobile.dialogHashKey)?e.event.special.navigate.isPushStateEnabled()?(e.mobile.navigate.history.stack=[],e.mobile.navigate(e.mobile.path.isPath(location.hash)?location.hash:location.href)):a.trigger("hashchange",[!0]):(e.mobile.path.isHashValid(location.hash)&&(e.mobile.urlHistory.initialDst=s.replace("#","")),e.event.special.navigate.isPushStateEnabled()&&e.mobile.navigate.navigator.squash(t.parseLocation().href),e.mobile.changePage(e.mobile.firstPage,{transition:"none",reverse:!0,changeHash:!1,fromHashChange:!0}))}}),e(function(){t.scrollTo(0,1),e.mobile.defaultHomeScroll=e.support.scrollTop&&1!==e.mobile.window.scrollTop()?1:0,e.mobile.autoInitializePage&&e.mobile.initializePage(),a.load(e.mobile.silentScroll),e.support.cssPointerEvents||e.mobile.document.delegate(".ui-disabled","vclick",function(e){e.preventDefault(),e.stopImmediatePropagation()})}))}(e,this)});
//@ sourceMappingURL=jquery.mobile.min.map

/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 */
(function(a){a.widget("mobile.datebox",a.mobile.widget,{options:{version:"2-1.3.0-2013040300",theme:false,themeDefault:"c",themeHeader:"a",mode:false,centerHoriz:false,centerVert:false,transition:"pop",useAnimation:true,hideInput:false,hideFixedToolbars:false,lockInput:true,enhanceInput:true,zindex:"500",clickEvent:"vclick",clickEventAlt:"click",resizeListener:true,defaultValue:false,dialogEnable:false,dialogForce:false,enablePopup:false,popupPosition:false,popupForceX:false,popupForceY:false,useModal:false,useInline:false,useInlineBlind:false,useHeader:true,useImmediate:false,useNewStyle:false,useAltIcon:false,overrideStyleClass:false,useButton:true,useFocus:false,useClearButton:false,useCollapsedBut:false,usePlaceholder:false,openCallback:false,openCallbackArgs:[],closeCallback:false,closeCallbackArgs:[],startOffsetYears:false,startOffsetMonths:false,startOffsetDays:false,afterToday:false,beforeToday:false,notToday:false,maxDays:false,minDays:false,maxYear:false,minYear:false,blackDates:false,blackDatesRec:false,blackDays:false,minHour:false,maxHour:false,minuteStep:1,minuteStepRound:0,rolloverMode:{m:true,d:true,h:true,i:true,s:true},useLang:"default",lang:{"default":{setDateButtonLabel:"Set Date",setTimeButtonLabel:"Set Time",setDurationButtonLabel:"Set Duration",calTodayButtonLabel:"Jump to Today",titleDateDialogLabel:"Set Date",titleTimeDialogLabel:"Set Time",daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysOfWeekShort:["Su","Mo","Tu","We","Th","Fr","Sa"],monthsOfYear:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsOfYearShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],durationLabel:["Days","Hours","Minutes","Seconds"],durationDays:["Day","Days"],timeFormat:24,headerFormat:"%A, %B %-d, %Y",tooltip:"Open Date Picker",nextMonth:"Next Month",prevMonth:"Previous Month",dateFieldOrder:["m","d","y"],timeFieldOrder:["h","i","a"],slideFieldOrder:["y","m","d"],dateFormat:"%Y-%m-%d",useArabicIndic:false,isRTL:false,calStartDay:0,clearButton:"Clear",durationOrder:["d","h","i","s"],meridiem:["AM","PM"],timeOutput:"%k:%M",durationFormat:"%Dd %DA, %Dl:%DM:%DS",calDateListLabel:"Other Dates"}}},_enhanceDate:function(){a.extend(this._date.prototype,{copy:function(c,b){if(typeof c==="undefined"){c=[0,0,0,0,0,0,0]}if(typeof b==="undefined"){b=[0,0,0,0,0,0,0]}while(c.length<7){c.push(0)}while(b.length<7){b.push(0)}return new Date(((b[0]>0)?b[0]:this.getFullYear()+c[0]),((b[1]>0)?b[1]:this.getMonth()+c[1]),((b[2]>0)?b[2]:this.getDate()+c[2]),((b[3]>0)?b[3]:this.getHours()+c[3]),((b[4]>0)?b[4]:this.getMinutes()+c[4]),((b[5]>0)?b[5]:this.getSeconds()+c[5]),((b[6]>0)?b[5]:this.getMilliseconds()+c[6]))},adj:function(c,b){if(typeof b!=="number"){throw new Error("Adjustment value not specified")}if(typeof c!=="number"){throw new Error("Adjustment type not specified")}switch(c){case 0:this.setFullYear(this.getFullYear()+b);break;case 1:this.setMonth(this.getMonth()+b);break;case 2:this.setDate(this.getDate()+b);break;case 3:this.setHours(this.getHours()+b);break;case 4:this.setMinutes(this.getMinutes()+b);break;case 5:this.setSeconds(this.getSeconds()+b);break;case 6:this.setMilliseconds(this.getMilliseconds()+b);break}return this},set:function(c,b){switch(c){case 0:this.setFullYear(b);break;case 1:this.setMonth(b);break;case 2:this.setDate(b);break;case 3:this.setHours(b);break;case 4:this.setMinutes(b);break;case 5:this.setSeconds(b);break;case 6:this.setMilliseconds(b);break}return this},get:function(b){switch(b){case 0:return this.getFullYear();case 1:return this.getMonth();case 2:return this.getDate();case 3:return this.getHours();case 4:return this.getMinutes();case 5:return this.getSeconds()}return false},iso:function(){return String(this.getFullYear())+"-"+((this.getMonth()<9)?"0":"")+String(this.getMonth()+1)+"-"+((this.getDate()<10)?"0":"")+String(this.getDate())},comp:function(){return parseInt(this.iso().replace(/-/g,""),10)},getEpoch:function(){return(this.getTime()-this.getMilliseconds())/1000},getArray:function(){return[this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds()]},setFirstDay:function(b){this.set(2,1).adj(2,(b-this.getDay()));if(this.get(2)>10){this.adj(2,7)}return this},setWeek:function(c,b){if(c===4){return this.set(1,0).set(2,1).setFirstDay(4).adj(2,-3).adj(2,(b-1)*7)}return this.set(1,0).set(2,1).setFirstDay(c).adj(2,(b-1)*7)},getWeek:function(c){var d,b;switch(c){case 0:d=this.copy([0,-1*this.getMonth()]).setFirstDay(0);return Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;case 1:d=this.copy([0,-1*this.getMonth()]).setFirstDay(1);return Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;case 4:if(this.getMonth()===11&&this.getDate()>28){return 1}d=this.copy([0,-1*this.getMonth()],true).setFirstDay(4).adj(2,-3);b=Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;if(b<1){d=this.copy([-1,-1*this.getMonth()]).setFirstDay(4).adj(2,-3);return Math.floor((this.getTime()-d.getTime())/604800000)+1}return b;default:return 0}}})},_event:function(d,c){var b=parseInt(a.mobile.version.replace(/\./g,""),10)>110?a(this).data("mobileDatebox"):a(this).data("datebox");if(!d.isPropagationStopped()){switch(c.method){case"close":b.close();break;case"open":b.open();break;case"set":a(this).val(c.value);a(this).trigger("change");break;case"doset":if(a.isFunction(b["_"+b.options.mode+"DoSet"])){b["_"+b.options.mode+"DoSet"].apply(b,[])}else{a(this).trigger("datebox",{method:"set",value:b._formatter(b.__fmt(),b.theDate),date:b.theDate})}break;case"dooffset":if(c.type){b._offset(c.type,c.amount,true)}break;case"dorefresh":b.refresh();break;case"doreset":b.hardreset();break;case"doclear":a(this).val("").trigger("change");break;case"clear":a(this).trigger("change")}}},_hoover:function(b){a(b).toggleClass("ui-btn-up-"+a(b).jqmData("theme")+" ui-btn-down-"+a(b).jqmData("theme"))},_ord:{"default":function(c){var b=c%10;if(c>9&&c<21){return"th"}if(b>3){return"th"}return["th","st","nd","rd"][b]}},__:function(d){var c=this.options,b="override"+d.charAt(0).toUpperCase()+d.slice(1);if(typeof c[b]!=="undefined"){return c[b]}if(typeof c.lang[c.useLang][d]!=="undefined"){return c.lang[c.useLang][d]}if(typeof c[c.mode+"lang"]!=="undefined"&&typeof c[c.mode+"lang"][d]!=="undefined"){return c[c.mode+"lang"][d]}return c.lang["default"][d]},__fmt:function(){var b=this,c=this.options;switch(c.mode){case"timebox":case"timeflipbox":return b.__("timeOutput");case"durationbox":case"durationflipbox":return b.__("durationFormat");default:return b.__("dateFormat")}},_zPad:function(b){return((b<10)?"0"+String(b):String(b))},_dRep:function(j,g){var h=48,b=57,c=1584,d=null,e=null,f="";if(g===-1){h+=c;b+=c;c=-1584}for(d=0;d<j.length;d++){e=j.charCodeAt(d);if(e>=h&&e<=b){f=f+String.fromCharCode(e+c)}else{f=f+String.fromCharCode(e)}}return f},_doIndic:function(){var b=this;b.d.intHTML.find("*").each(function(){if(a(this).children().length<1){a(this).text(b._dRep(a(this).text()))}else{if(a(this).hasClass("ui-datebox-slideday")){a(this).html(b._dRep(a(this).html()))}}});b.d.intHTML.find("input").each(function(){a(this).val(b._dRep(a(this).val()))})},_parser:{"default":function(b){return false}},_n:function(c,b){return(c<0)?b:c},_pa:function(b,c){if(typeof c==="boolean"){return new this._date(b[0],b[1],b[2],0,0,0,0)}return new this._date(c.getFullYear(),c.getMonth(),c.getDate(),b[0],b[1],b[2],0)},_makeDate:function(k){k=a.trim(((this.__("useArabicIndic")===true)?this._dRep(k,-1):k));var n=this,c=this.options,e=n.__fmt(),m=null,h=[],l=null,b=null,f=new n._date(),j={year:-1,mont:-1,date:-1,hour:-1,mins:-1,secs:-1,week:false,wtyp:4,wday:false,yday:false,meri:0},g;if(typeof c.mode==="undefined"){return f}if(typeof n._parser[c.mode]!=="undefined"){return n._parser[c.mode].apply(n,[k])}if(c.mode==="durationbox"||c.mode==="durationflipbox"){e=e.replace(/%D([a-z])/gi,function(d,o){switch(o){case"d":case"l":case"M":case"S":return"("+d+"|[0-9]+)";default:return".+?"}});e=new RegExp("^"+e+"$");m=e.exec(k);l=e.exec(n.__fmt());if(m===null||m.length!==l.length){if(typeof c.defaultValue==="number"&&c.defaultValue>0){return new n._date((n.initDate.getEpoch()+parseInt(c.defaultValue,10))*1000)}return new n._date(n.initDate.getTime())}b=n.initDate.getEpoch();for(g=0;g<m.length;g++){if(l[g].match(/^%Dd$/i)){b=b+(parseInt(m[g],10)*60*60*24)}if(l[g].match(/^%Dl$/i)){b=b+(parseInt(m[g],10)*60*60)}if(l[g].match(/^%DM$/i)){b=b+(parseInt(m[g],10)*60)}if(l[g].match(/^%DS$/i)){b=b+(parseInt(m[g],10))}}return new n._date((b*1000))}e=e.replace(/%(0|-)*([a-z])/gi,function(d,o,p){h.push(p);switch(p){case"p":case"P":case"b":case"B":return"("+d+"|.+?)";case"H":case"k":case"I":case"l":case"m":case"M":case"S":case"V":case"U":case"u":case"W":case"d":return"("+d+"|"+((o==="-")?"[0-9]{1,2}":"[0-9]{2}")+")";case"j":return"("+d+"|[0-9]{3})";case"s":return"("+d+"|[0-9]+)";case"g":case"y":return"("+d+"|[0-9]{2})";case"E":case"G":case"Y":return"("+d+"|[0-9]{1,4})";default:h.pop();return".+?"}});e=new RegExp("^"+e+"$");m=e.exec(k);l=e.exec(n.__fmt());if(m===null||m.length!==l.length){if(c.defaultValue!==false){switch(typeof c.defaultValue){case"object":if(c.defaultValue.length===3){f=n._pa(c.defaultValue,((c.mode==="timebox"||c.mode==="timeflipbox")?f:false))}break;case"number":f=new n._date(c.defaultValue*1000);break;case"string":if(c.mode==="timebox"||c.mode==="timeflipbox"){b=c.defaultValue.split(":");if(b.length===3){f=n._pa([b[0],b[1],b[2]],f)}else{if(b.length===2){f=n._pa([b[0],b[1],0],f)}}}else{b=c.defaultValue.split("-");if(b.length===3){f=n._pa([b[0],b[1]-1,b[2]],false)}}break}}if(isNaN(f.getDate())){f=new n._date()}}else{for(g=1;g<m.length;g++){switch(h[g-1]){case"s":return new n._date(parseInt(m[g],10)*1000);case"Y":case"G":j.year=parseInt(m[g],10);break;case"E":j.year=parseInt(m[g],10)-543;break;case"y":case"g":if(c.afterToday===true||parseInt(m[g],10)<38){j.year=parseInt("20"+m[g],10)}else{j.year=parseInt("19"+m[g],10)}break;case"m":j.mont=parseInt(m[g],10)-1;break;case"d":j.date=parseInt(m[g],10);break;case"H":case"k":case"I":case"l":j.hour=parseInt(m[g],10);break;case"M":j.mins=parseInt(m[g],10);break;case"S":j.secs=parseInt(m[g],10);break;case"u":j.wday=parseInt(m[g],10)-1;break;case"w":j.wday=parseInt(m[g],10);break;case"j":j.yday=parseInt(m[g],10);break;case"V":j.week=parseInt(m[g],10);j.wtyp=4;break;case"U":j.week=parseInt(m[g],10);j.wtyp=0;break;case"W":j.week=parseInt(m[g],10);j.wtyp=1;break;case"p":case"P":j.meri=((m[g].toLowerCase()===n.__("meridiem")[0].toLowerCase())?-1:1);break;case"b":b=a.inArray(m[g],n.__("monthsOfYearShort"));if(b>-1){j.mont=b}break;case"B":b=a.inArray(m[g],n.__("monthsOfYear"));if(b>-1){j.mont=b}break}}if(j.meri!==0){if(j.meri===-1&&j.hour===12){j.hour=0}if(j.meri===1&&j.hour!==12){j.hour=j.hour+12}}f=new n._date(n._n(j.year,0),n._n(j.mont,0),n._n(j.date,1),n._n(j.hour,0),n._n(j.mins,0),n._n(j.secs,0),0);if(j.year<100&&j.year!==-1){f.setFullYear(j.year)}if((j.mont>-1&&j.date>-1)||(j.hour>-1&&j.mins>-1&&j.secs>-1)){return f}if(j.week!==false){f.setWeek(j.wtyp,j.week);if(j.date>-1){f.setDate(j.date)}}if(j.yday!==false){f.set(1,0).set(2,1).adj(2,(j.yday-1))}if(j.wday!==false){f.adj(2,(j.wday-f.getDay()))}}return f},_customformat:{"default":function(c,b){return false}},_formatter:function(f,c){var b=this,g=this.options,d,e={part:[0,0,0,0],tp:0};if(g.mode==="durationbox"||g.mode==="durationflipbox"){e.tp=this.theDate.getEpoch()-this.initDate.getEpoch();e.part[0]=parseInt(e.tp/(60*60*24),10);e.tp-=(e.part[0]*60*60*24);e.part[1]=parseInt(e.tp/(60*60),10);e.tp-=(e.part[1]*60*60);e.part[2]=parseInt(e.tp/(60),10);e.tp-=(e.part[2]*60);e.part[3]=e.tp;if(!f.match(/%Dd/)){e.part[1]+=(e.part[0]*24)}if(!f.match(/%Dl/)){e.part[2]+=(e.part[1]*60)}if(!f.match(/%DM/)){e.part[3]+=(e.part[2]*60)}}f=f.replace(/%(D|X|0|-)*([1-9a-zA-Z])/g,function(h,j,k){if(j==="X"){if(typeof b._customformat[g.mode]!=="undefined"){return b._customformat[g.mode](k,c)}return h}if(j==="D"){switch(k){case"d":return e.part[0];case"l":return b._zPad(e.part[1]);case"M":return b._zPad(e.part[2]);case"S":return b._zPad(e.part[3]);case"A":return((e.part[0]>1)?b.__("durationDays")[1]:b.__("durationDays")[0]);default:return h}}switch(k){case"%":return"%";case"a":return b.__("daysOfWeekShort")[c.getDay()];case"A":return b.__("daysOfWeek")[c.getDay()];case"b":return b.__("monthsOfYearShort")[c.getMonth()];case"B":return b.__("monthsOfYear")[c.getMonth()];case"C":return c.getFullYear().toString().substr(0,2);case"d":return((j==="-")?c.getDate():b._zPad(c.getDate()));case"H":case"k":return((j==="-")?c.getHours():b._zPad(c.getHours()));case"I":case"l":return((j==="-")?((c.getHours()===0||c.getHours()===12)?12:((c.getHours()<12)?c.getHours():(c.getHours()-12))):b._zPad(((c.getHours()===0||c.getHours()===12)?12:((c.getHours()<12)?c.getHours():c.getHours()-12))));case"m":return((j==="-")?c.getMonth()+1:b._zPad(c.getMonth()+1));case"M":return((j==="-")?c.getMinutes():b._zPad(c.getMinutes()));case"p":return((c.getHours()<12)?b.__("meridiem")[0].toUpperCase():b.__("meridiem")[1].toUpperCase());case"P":return((c.getHours()<12)?b.__("meridiem")[0].toLowerCase():b.__("meridiem")[1].toLowerCase());case"s":return c.getEpoch();case"S":return((j==="-")?c.getSeconds():b._zPad(c.getSeconds()));case"u":return((j==="-")?c.getDay()+1:b._zPad(c.getDay()+1));case"w":return c.getDay();case"y":return c.getFullYear().toString().substr(2,2);case"Y":return c.getFullYear();case"E":return c.getFullYear()+543;case"V":return((j==="-")?c.getWeek(4):b._zPad(c.getWeek(4)));case"U":return((j==="-")?c.getWeek(0):b._zPad(c.getWeek(0)));case"W":return((j==="-")?c.getWeek(1):b._zPad(c.getWeek(1)));case"o":if(typeof b._ord[g.useLang]!=="undefined"){return b._ord[g.useLang](c.getDate())}return b._ord["default"](c.getDate());case"j":d=new Date(c.getFullYear(),0,1);d=Math.ceil((c-d)/86400000)+1;return((d<100)?((d<10)?"00":"0"):"")+String(d);case"G":if(c.getWeek(4)===1&&c.getMonth()>0){return c.getFullYear()+1}if(c.getWeek(4)>51&&c.getMonth()<11){return c.getFullYear()-1}return c.getFullYear();case"g":if(c.getWeek(4)===1&&c.getMonth()>0){return parseInt(c.getFullYear().toString().substr(2,2),10)+1}if(c.getWeek(4)>51&&c.getMonth()<11){return parseInt(c.getFullYear().toString().substr(2,2),10)-1}return c.getFullYear().toString().substr(2,2);default:return h}});if(b.__("useArabicIndic")===true){f=b._dRep(f)}return f},_btwn:function(d,b,c){return(d>b&&d<c)},_minStepFix:function(){var d=this.theDate.get(4),c,b=this,e=this.options;if(e.minuteStep>1&&d%e.minuteStep>0){if(e.minuteStepRound<0){d=d-(d%e.minuteStep)}else{if(e.minStepRound>0){d=d+(e.minuteStep-(d%e.minuteStep))}else{if(d%e.minuteStep<e.minuteStep/2){d=d-(d%e.minuteStep)}else{d=d+(e.minuteStep-(d%e.minuteStep))}}}b.theDate.setMinutes(d)}},_offset:function(f,d,g){var b=this,e=this.options,c=false;f=(f||"").toLowerCase();if(typeof(g)==="undefined"){g=true}b.d.input.trigger("datebox",{method:"offset",type:f,amount:d});if(f!=="a"&&(typeof e.rolloverMode[f]==="undefined"||e.rolloverMode[f]===true)){c=a.inArray(f,["y","m","d","h","i","s"])}else{switch(f){case"y":c=0;break;case"m":if(b._btwn(b.theDate.getMonth()+d,-1,12)){c=1}break;case"d":if(b._btwn(b.theDate.getDate()+d,0,(32-b.theDate.copy([0],[0,0,32,13]).getDate()+1))){c=2}break;case"h":if(b._btwn(b.theDate.getHours()+d,-1,24)){c=3}break;case"i":if(b._btwn(b.theDate.getMinutes()+d,-1,60)){c=4}break;case"s":if(b._btwn(b.theDate.getSeconds()+d,-1,60)){c=5}break;case"a":b._offset("h",((d>0)?1:-1)*12,false);break}}if(c!==false){b.theDate.adj(c,d)}if(g===true){b.refresh()}if(e.useImmediate){b.d.input.trigger("datebox",{method:"doset"})}},_startOffset:function(b){var c=this.options;if(c.startOffsetYears!==false){b.adj(0,c.startOffsetYears)}if(c.startOffsetMonths!==false){b.adj(1,c.startOffsetMonths)}if(c.startOffsetDays!==false){b.adj(2,c.startOffsetDays)}return b},_create:function(){a(document).trigger("dateboxcreate");var j=this,b=a.extend(this.options,(typeof this.element.jqmData("options")!=="undefined")?this.element.jqmData("options"):this._getLongOptions(this.element)),k=(b.theme===false&&typeof(a(this).jqmData("theme"))==="undefined")?((typeof(this.element.parentsUntil(":jqmData(theme)").parent().jqmData("theme"))==="undefined")?b.themeDefault:this.element.parentsUntil(":jqmData(theme)").parent().jqmData("theme")):b.theme,l=b.useAnimation?b.transition:"none",g=b.useNewStyle===false?{input:this.element,wrap:this.element.wrap('<div class="ui-input-datebox ui-shadow-inset ui-corner-all '+(this.element.jqmData("mini")===true?"ui-mini ":"")+"ui-body-"+k+'"></div>').parent(),mainWrap:a("<div>",{"class":"ui-datebox-container ui-overlay-shadow ui-corner-all ui-datebox-hidden "+l+" ui-body-"+k}).css("zIndex",b.zindex),intHTML:false}:{input:this.element,wrap:this.element,mainWrap:a("<div>",{"class":"ui-datebox-container ui-overlay-shadow ui-corner-all ui-datebox-hidden "+l+" ui-body-"+k}).css("zIndex",b.zindex),intHTML:false},e=(typeof window.ontouchstart!=="undefined"),f={eStart:(e?"touchstart":"mousedown")+".datebox",eMove:(e?"touchmove":"mousemove")+".datebox",eEnd:(e?"touchend":"mouseup")+".datebox",eEndA:(e?"mouseup.datebox touchend.datebox touchcancel.datebox touchmove.datebox":"mouseup.datebox"),move:false,start:false,end:false,pos:false,target:false,delta:false,tmp:false},c={},h=(typeof a.mobile.ns!=="undefined")?a.mobile.ns:"";a.extend(j,{d:g,ns:h,drag:f,touch:e});if(b.usePlaceholder!==false){if(b.usePlaceholder===true&&j._grabLabel()!==false){j.d.input.attr("placeholder",j._grabLabel())}if(typeof b.usePlaceholder==="string"){j.d.input.attr("placeholder",b.usePlaceholder)}}b.theme=k;j.clearFunc=false;j.disabled=false;j.runButton=false;j._date=window.Date;j._enhanceDate();j.baseID=j.d.input.attr("id");j.initDate=new j._date();j.theDate=(b.defaultValue)?j._makeDate(b.defaultValue):new j._date();j.initDone=false;if(b.useButton===true&&b.useInline===false&&b.useNewStyle===false){j.d.open=a('<a href="#" class="ui-input-clear" title="'+this.__("tooltip")+'">'+this.__("tooltip")+"</a>").on(b.clickEvent,function(d){d.preventDefault();if(!j.disabled){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.parent().removeClass("ui-focus")}setTimeout(function(){a(d.target).closest("a").removeClass(a.mobile.activeBtnClass)},300)}).appendTo(j.d.wrap).buttonMarkup({icon:"grid",iconpos:"notext",corners:true,shadow:true}).css({"vertical-align":"middle",display:"inline-block"})}j.d.screen=a("<div>",{"class":"ui-datebox-screen ui-datebox-hidden"+((b.useModal)?" ui-datebox-screen-modal":"")}).css({"z-index":b.zindex-1}).on(b.clickEventAlt,function(d){d.preventDefault();j.d.input.trigger("datebox",{method:"close"})});if(b.enhanceInput===true&&navigator.userAgent.match(/Android/i)){j.inputType="number"}else{j.inputType="text"}if(b.hideInput){j.d.wrap.hide()}a("label[for='"+j.d.input.attr("id")+"']").addClass("ui-input-text").css("verticalAlign","middle");j.d.wrap.on(b.clickEvent,function(){if(!j.disabled&&(b.noButtonFocusMode||b.focusMode)){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.removeClass("ui-focus")}});j.d.input.removeClass("ui-corner-all ui-shadow-inset").bind(j.touch?"touchend":"click",function(d){if(j.disabled===false&&b.useNewStyle===true&&b.useFocus===false){if(((j.touch?d.originalEvent.changedTouches[0].pageX:d.pageX)-d.target.offsetLeft)>(d.target.offsetWidth-20)){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.removeClass("ui-focus")}}}).focus(function(){if(j.disabled===false&&b.useFocus===true){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus")}if(b.useNewStyle===false){j.d.input.removeClass("ui-focus")}}).blur(function(){j.d.wrap.removeClass("ui-focus");j.d.input.removeClass("ui-focus")}).change(function(){j.theDate=j._makeDate(j.d.input.val());j.refresh()}).attr("readonly",b.lockInput).on("datebox",j._event);if(b.useNewStyle===true){j.d.input.addClass("ui-corner-all "+((b.useAltIcon===true)?"ui-icon-datebox-alt":"ui-icon-datebox"));if(b.overrideStyleClass!==false){j.d.input.addClass(b.overrideStyleClass)}}else{j.d.input.parent().css("border","none").removeClass("ui-shadow-inset")}if(typeof a.event.special.mousewheel!=="undefined"){j.wheelExists=true}if(j.d.input.is(":disabled")){j.disable()}if(b.useInline===true||b.useInlineBlind){j.open()}j.applyMinMax(false,false);a(document).trigger("dateboxaftercreate")},applyMinMax:function(e,d){var b=this,f=this.options,c={};if(typeof e==="undefined"){e=false}if(typeof d==="undefined"){d=true}if((d===true||f.minDays===false)&&typeof(b.d.input.attr("min"))!=="undefined"){c.today=new b._date();c.lod=24*60*60*1000;c.todayc=new b._date(c.today.getFullYear(),c.today.getMonth(),c.today.getDate(),0,0,0,0);c.fromel=b.d.input.attr("min").split("-");c.compdt=new b._date(c.fromel[0],c.fromel[1]-1,c.fromel[2],0,0,0,0);f.minDays=parseInt((((c.compdt.getTime()-c.todayc.getTime())/c.lod))*-1,10)}if((d===true||f.maxDays===false)&&typeof(b.d.input.attr("max"))!=="undefined"){c.today=new b._date();c.lod=24*60*60*1000;c.todayc=new b._date(c.today.getFullYear(),c.today.getMonth(),c.today.getDate(),0,0,0,0);c.fromel=b.d.input.attr("max").split("-");c.compdt=new b._date(c.fromel[0],c.fromel[1]-1,c.fromel[2],0,0,0,0);f.maxDays=parseInt((((c.compdt.getTime()-c.todayc.getTime())/c.lod)),10)}if(e===true){b.refresh()}},_build:{"default":function(){this.d.headerText="Error";this.d.intHTML=a("<div class='ui-body-e'><h2 style='text-align:center'>There is no mode by that name loaded / mode not given</h2></div>")}},_applyCoords:function(h){var b=h.widget,j=h.widget.options,f={h:a.mobile.activePage.find(".ui-header").jqmData("position"),f:a.mobile.activePage.find(".ui-footer").jqmData("position"),fh:a.mobile.activePage.find(".ui-footer").outerHeight(),hh:a.mobile.activePage.find(".ui-header").outerHeight()},c={x:b.d.wrap.offset().left+(b.d.wrap.outerWidth()/2),y:b.d.wrap.offset().top+(b.d.wrap.outerHeight()/2)},d={w:b.d.mainWrap.outerWidth(),h:b.d.mainWrap.outerHeight()},g={t:a(window).scrollTop(),h:a(window).height(),w:a.mobile.activePage.width(),ah:a(document).height()},k={y:(j.centerVert)?g.t+((g.h/2)-(d.h/2)):c.y-(d.h/2),x:(g.w<400||j.centerHoriz)?(g.w/2)-(d.w/2):c.x-(d.w/2)};if(j.centerVert===false){if(j.hideFixedToolbars===true&&(typeof f.f!=="undefined"||typeof f.h!=="undefined")){a.mobile.activePage.find(":jqmData(position='fixed')").fixedtoolbar("hide");f.f=undefined;f.h=undefined}if(typeof f.f!=="undefined"){if((k.y+d.h)>(g.h-f.fh-2)){k.y=g.h-f.fh-2-d.h}}else{if((k.y+d.h)>(g.ah-f.fh-2)){k.y=g.ah-f.fh-2-d.h}if((g.h+g.t)<(d.h+k.y+2)){k.y=g.h+g.t-d.h-2}}if(typeof f.h!=="undefined"){if((g.t+f.hh+2)>k.y){k.y=g.t+f.hh+2}}else{if(f.hh+2>k.y){k.y=f.hh+2}if(k.y<g.t+2){k.y=g.t+2}}}b.d.mainWrap.css({position:"absolute",top:k.y,left:k.x})},_drag:{"default":function(){return false}},open:function(){var b=this,g=this.options,e={},f={history:false},d="data-"+this.ns,c=g.useAnimation?g.transition:"none";if(g.useFocus===true&&b.fastReopen===true){b.d.input.blur();return false}if(b.clearFunc!==false){clearTimeout(b.clearFunc);b.clearFunc=false}if(g.openCallback!==false){if(!a.isFunction(g.openCallback)){if(typeof window[g.openCallback]!=="undefined"){g.openCallback=window[g.openCallback]}else{g.openCallback=new Function(g.openCallback)}}if(g.openCallback.apply(b,a.merge([b.theDate],g.openCallbackArgs))===false){return false}}b.theDate=b._makeDate(b.d.input.val());if(b.d.input.val()===""){b._startOffset(b.theDate)}b.d.input.blur();if(typeof b._build[g.mode]==="undefined"){b._build["default"].apply(b,[])}else{b._build[g.mode].apply(b,[])}if(typeof b._drag[g.mode]!=="undefined"){b._drag[g.mode].apply(b,[])}b.d.input.trigger("datebox",{method:"refresh"});if(b.__("useArabicIndic")===true){b._doIndic()}if((g.useInline===true||g.useInlineBlind===true)&&b.initDone===false){b.d.mainWrap.append(b.d.intHTML);b.d.input.parent().parent().append(b.d.mainWrap);b.d.mainWrap.removeClass("ui-datebox-hidden");if(g.useInline===true){b.d.mainWrap.addClass("ui-datebox-inline")}else{b.d.mainWrap.addClass("ui-datebox-inlineblind");b.d.mainWrap.hide()}b.initDone=false;b.d.input.trigger("datebox",{method:"postrefresh"})}if(g.useImmediate){b.d.input.trigger("datebox",{method:"doset"})}if(g.useInline){return true}if(g.useInlineBlind){if(b.initDone){b.d.mainWrap.slideDown()}else{b.initDone=true}return true}if(b.d.intHTML.is(":visible")){return false}if(g.enablePopup===true){b.d.dialogPage=false;b.d.mainWrap.empty();if(g.useHeader===true){b.d.headHTML=a('<div class="ui-header ui-bar-'+g.themeHeader+'"></div>');a("<a class='ui-btn-left' href='#'>Close</a>").appendTo(b.d.headHTML).buttonMarkup({theme:g.themeHeader,icon:"delete",iconpos:"notext",corners:true,shadow:true}).on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});a('<h1 class="ui-title">'+b.d.headerText+"</h1>").appendTo(b.d.headHTML);b.d.mainWrap.append(b.d.headHTML)}b.d.mainWrap.append(b.d.intHTML).css("zIndex",g.zindex);b.d.input.trigger("datebox",{method:"postrefresh"});if(g.useAnimation===true){e.transition=g.transition}else{e.transition="none"}if(g.popupForceX!==false&&g.popupForceY!==false){e.x=g.popupForceX;e.y=g.popupForceY}if(g.popupPosition!==false){e.positionTo=g.popupPosition}else{if(typeof b.baseID!==undefined){e.positionTo="#"+b.baseID}else{e.positionTo="window"}}if(g.useModal=true){f.overlayTheme="a"}b.d.mainWrap.removeClass("ui-datebox-hidden").popup(f).popup("open",e);b.refresh()}else{if(g.dialogForce||(g.dialogEnable&&window.width()<400)){b.d.dialogPage=a("<div "+d+"role='dialog' "+d+"theme='"+g.theme+"' ><div "+d+"role='header' "+d+"theme='"+g.themeHeader+"'><h1>"+b.d.headerText+"</h1></div><div "+d+"role='content'></div>").appendTo(a.mobile.pageContainer).page().css("minHeight","0px").addClass(c);b.d.dialogPage.find(".ui-header").find("a").off("click vclick").on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});b.d.mainWrap.append(b.d.intHTML).css({marginLeft:"auto",marginRight:"auto"}).removeClass("ui-datebox-hidden");b.d.dialogPage.find(".ui-content").append(b.d.mainWrap);b.d.input.trigger("datebox",{method:"postrefresh"});a.mobile.activePage.off("pagehide.remove");a.mobile.changePage(b.d.dialogPage,{transition:c})}else{b.d.dialogPage=false;b.d.mainWrap.empty();if(g.useHeader===true){b.d.headHTML=a('<div class="ui-header ui-bar-'+g.themeHeader+'"></div>');a("<a class='ui-btn-left' href='#'>Close</a>").appendTo(b.d.headHTML).buttonMarkup({theme:g.themeHeader,icon:"delete",iconpos:"notext",corners:true,shadow:true}).on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});a('<h1 class="ui-title">'+b.d.headerText+"</h1>").appendTo(b.d.headHTML);b.d.mainWrap.append(b.d.headHTML)}b.d.mainWrap.append(b.d.intHTML).css("zIndex",g.zindex);b.d.mainWrap.appendTo(a.mobile.activePage);b.d.screen.appendTo(a.mobile.activePage);b.d.input.trigger("datebox",{method:"postrefresh"});b._applyCoords({widget:b});if(g.useModal===true){if(g.useAnimation){b.d.screen.fadeIn("slow")}else{b.d.screen.show()}}else{setTimeout(function(){b.d.screen.removeClass("ui-datebox-hidden")},500)}b.d.mainWrap.addClass("ui-overlay-shadow in").removeClass("ui-datebox-hidden");a(document).on("orientationchange.datebox",{widget:b},function(h){b._applyCoords(h.data)});if(g.resizeListener===true){a(window).on("resize.datebox",{widget:b},function(h){b._applyCoords(h.data)})}}}},close:function(){var b=this,c=this.options;if(c.useInlineBlind===true){b.d.mainWrap.slideUp();return true}if(c.useInline===true||b.d.intHTML===false){return true}if(b.d.dialogPage!==false){a(b.d.dialogPage).dialog("close");if(!a.mobile.activePage.jqmData("page").options.domCache){a.mobile.activePage.on("pagehide.remove",function(){a(this).remove()})}b.d.intHTML.detach().empty();b.d.mainWrap.detach().empty();b.d.wrap.removeClass("ui-focus");b.clearFunc=setTimeout(function(){b.d.dialogPage.empty().remove();b.clearFunc=false},1500)}else{if(c.enablePopup===true){b.d.mainWrap.popup("close");b.d.wrap.removeClass("ui-focus")}else{if(c.useModal){if(c.useAnimation){b.d.screen.fadeOut("slow")}else{b.d.screen.hide()}}else{b.d.screen.addClass("ui-datebox-hidden")}b.d.screen.detach();b.d.mainWrap.addClass("ui-datebox-hidden").removeAttr("style").removeClass("in ui-overlay-shadow").empty().detach();b.d.intHTML.detach();b.d.wrap.removeClass("ui-focus");a(document).off("orientationchange.datebox");if(c.resizeListener===true){a(window).off("resize.datebox")}}}a(document).off(b.drag.eMove);a(document).off(b.drag.eEnd);a(document).off(b.drag.eEndA);if(c.useFocus){b.fastReopen=true;setTimeout(function(d){return function(){d.fastReopen=false}}(b),300)}if(c.closeCallback!==false){if(!a.isFunction(c.closeCallback)){if(typeof window[c.closeCallback]!=="undefined"){c.closeCallback=window[c.closeCallback]}else{c.closeCallback=new Function(c.closeCallback)}}c.closeCallback.apply(b,a.merge([b.theDate],c.closeCallbackArgs))}},refresh:function(){if(typeof this._build[this.options.mode]==="undefined"){this._build["default"].apply(this,[])}else{this._build[this.options.mode].apply(this,[])}if(this.__("useArabicIndic")===true){this._doIndic()}this.d.mainWrap.append(this.d.intHTML);this.d.input.trigger("datebox",{method:"postrefresh"})},_check:function(){var b=this,d=null,c=this.options;b.dateOK=true;if(c.afterToday!==false){d=new b._date();if(b.theDate<d){b.theDate=d}}if(c.beforeToday!==false){d=new b._date();if(b.theDate>d){b.theDate=d}}if(c.maxDays!==false){d=new b._date();d.adj(2,c.maxDays);if(b.theDate>d){b.theDate=d}}if(c.minDays!==false){d=new b._date();d.adj(2,-1*c.minDays);if(b.theDate<d){b.theDate=d}}if(c.minHour!==false){if(b.theDate.getHours()<c.minHour){b.theDate.setHours(c.minHour)}}if(c.maxHour!==false){if(b.theDate.getHours()>c.maxHour){b.theDate.setHours(c.maxHour)}}if(c.maxYear!==false){d=new b._date(c.maxYear,0,1);d.adj(2,-1);if(b.theDate>d){b.theDate=d}}if(c.minYear!==false){d=new b._date(c.minYear,0,1);if(b.theDate<d){b.theDate=d}}if(a.inArray(c.mode,["timebox","durationbox","durationflipbox","timeflipbox"])>-1){if(c.mode==="timeflipbox"&&c.validHours!==false){if(a.inArray(b.theDate.getHours(),c.validHours)<0){b.dateOK=false}}}else{if(c.blackDatesRec!==false){for(i=0;i<c.blackDatesRec.length;i++){if((c.blackDatesRec[i][0]===-1||c.blackDatesRec[i][0]===year)&&(c.blackDatesRec[i][1]===-1||c.blackDatesRec[i][1]===month)&&(c.blackDatesRec[i][2]===-1||c.blackDatesRec[i][2]===date)){b.dateOK=false}}}if(c.blackDates!==false){if(a.inArray(b.theDate.iso(),c.blackDates)>-1){b.dateOK=false}}if(c.blackDays!==false){if(a.inArray(b.theDate.getDay(),c.blackDays)>-1){b.dateOK=false}}}},_grabLabel:function(){var b=this,c=this.options;if(typeof c.overrideDialogLabel==="undefined"){if(typeof b.d.input.attr("placeholder")!=="undefined"){return b.d.input.attr("placeholder")}if(typeof b.d.input.attr("title")!=="undefined"){return b.d.input.attr("title")}if(b.d.wrap.parent().find("label[for='"+b.d.input.attr("id")+"']").text()!==""){return b.d.wrap.parent().find("label[for='"+b.d.input.attr("id")+"']").text()}return false}return c.overrideDialogLabel},_makeEl:function(d,e){var b=false,c=false;c=d.clone();if(typeof e.attr!=="undefined"){for(b in e.attr){if(e.attr.hasOwnProperty(b)){c.jqmData(b,e.attr[b])}}}return c},_getLongOptions:function(d){var c,e={},f,b;if(a.mobile.ns===""){f="datebox"}else{f=a.mobile.ns.substr(0,a.mobile.ns.length-1)+"Datebox"}for(c in d.data()){if(c.substr(0,f.length)===f&&c.length>f.length){b=c.substr(f.length);b=b.charAt(0).toLowerCase()+b.slice(1);e[b]=d.data(c)}}return e},disable:function(){this.d.input.attr("disabled",true);this.d.wrap.addClass("ui-disabled").blur();this.disabled=true;this.d.input.trigger("datebox",{method:"disable"})},enable:function(){this.d.input.attr("disabled",false);this.d.wrap.removeClass("ui-disabled");this.disabled=false;this.d.input.trigger("datebox",{method:"enable"})},_setOption:function(){a.Widget.prototype._setOption.apply(this,arguments);this.refresh()},getTheDate:function(){return this.theDate},getLastDur:function(){return this.lastDuration},setTheDate:function(b){this.theDate=b;this.refresh()},callFormat:function(c,b){return this._formatter(c,b)}});a(document).on("pagebeforecreate",function(b){a(":jqmData(role='datebox')",b.target).each(function(){a(this).prop("type","text")})});a(document).on("pagecreate create",function(b){a(document).trigger("dateboxbeforecreate");a(":jqmData(role='datebox')",b.target).each(function(){var c=parseInt(a.mobile.version.replace(/\./g,""),10)>111?typeof(a(this).data("mobileDatebox")):typeof(a(this).data("datebox"));if(c==="undefined"){a(this).datebox()}})})})(jQuery);

/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 */
(function(a){a.widget("mobile.datebox",a.mobile.widget,{options:{version:"2-1.4.0-2013070300",mobVer:parseInt(a.mobile.version.replace(/\./g,"")),theme:false,themeDefault:"a",themeHeader:"a",mode:false,centerHoriz:false,centerVert:false,transition:"pop",useAnimation:true,hideInput:false,hideFixedToolbars:false,lockInput:true,enhanceInput:true,zindex:"500",clickEvent:"vclick",clickEventAlt:"click",resizeListener:true,defaultValue:false,showInitialValue:false,dialogEnable:false,dialogForce:false,enablePopup:false,popupPosition:false,popupForceX:false,popupForceY:false,useModal:false,useInline:false,useInlineBlind:false,useHeader:true,useImmediate:false,useNewStyle:false,useAltIcon:false,overrideStyleClass:false,useButton:true,useFocus:false,useClearButton:false,useCollapsedBut:false,usePlaceholder:false,openCallback:false,openCallbackArgs:[],closeCallback:false,closeCallbackArgs:[],startOffsetYears:false,startOffsetMonths:false,startOffsetDays:false,afterToday:false,beforeToday:false,notToday:false,maxDays:false,minDays:false,maxYear:false,minYear:false,blackDates:false,blackDatesRec:false,blackDays:false,minHour:false,maxHour:false,minuteStep:1,minuteStepRound:0,rolloverMode:{m:true,d:true,h:true,i:true,s:true},useLang:"default",lang:{"default":{setDateButtonLabel:"Set Date",setTimeButtonLabel:"Set Time",setDurationButtonLabel:"Set Duration",calTodayButtonLabel:"Jump to Today",titleDateDialogLabel:"Set Date",titleTimeDialogLabel:"Set Time",daysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysOfWeekShort:["Su","Mo","Tu","We","Th","Fr","Sa"],monthsOfYear:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsOfYearShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],durationLabel:["Days","Hours","Minutes","Seconds"],durationDays:["Day","Days"],timeFormat:24,headerFormat:"%A, %B %-d, %Y",tooltip:"Open Date Picker",nextMonth:"Next Month",prevMonth:"Previous Month",dateFieldOrder:["m","d","y"],timeFieldOrder:["h","i","a"],slideFieldOrder:["y","m","d"],dateFormat:"%Y-%m-%d",useArabicIndic:false,isRTL:false,calStartDay:0,clearButton:"Clear",durationOrder:["d","h","i","s"],meridiem:["AM","PM"],timeOutput:"%k:%M",durationFormat:"%Dd %DA, %Dl:%DM:%DS",calDateListLabel:"Other Dates",calHeaderFormat:"%B %Y"}}},_enhanceDate:function(){a.extend(this._date.prototype,{copy:function(c,b){if(typeof c==="undefined"){c=[0,0,0,0,0,0,0]}if(typeof b==="undefined"){b=[0,0,0,0,0,0,0]}while(c.length<7){c.push(0)}while(b.length<7){b.push(0)}return new Date(((b[0]>0)?b[0]:this.getFullYear()+c[0]),((b[1]>0)?b[1]:this.getMonth()+c[1]),((b[2]>0)?b[2]:this.getDate()+c[2]),((b[3]>0)?b[3]:this.getHours()+c[3]),((b[4]>0)?b[4]:this.getMinutes()+c[4]),((b[5]>0)?b[5]:this.getSeconds()+c[5]),((b[6]>0)?b[5]:this.getMilliseconds()+c[6]))},adj:function(c,b){if(typeof b!=="number"){throw new Error("Adjustment value not specified")}if(typeof c!=="number"){throw new Error("Adjustment type not specified")}switch(c){case 0:this.setFullYear(this.getFullYear()+b);break;case 1:this.setMonth(this.getMonth()+b);break;case 2:this.setDate(this.getDate()+b);break;case 3:this.setHours(this.getHours()+b);break;case 4:this.setMinutes(this.getMinutes()+b);break;case 5:this.setSeconds(this.getSeconds()+b);break;case 6:this.setMilliseconds(this.getMilliseconds()+b);break}return this},setD:function(c,b){switch(c){case 0:this.setFullYear(b);break;case 1:this.setMonth(b);break;case 2:this.setDate(b);break;case 3:this.setHours(b);break;case 4:this.setMinutes(b);break;case 5:this.setSeconds(b);break;case 6:this.setMilliseconds(b);break}return this},get:function(b){switch(b){case 0:return this.getFullYear();case 1:return this.getMonth();case 2:return this.getDate();case 3:return this.getHours();case 4:return this.getMinutes();case 5:return this.getSeconds()}return false},iso:function(){return String(this.getFullYear())+"-"+((this.getMonth()<9)?"0":"")+String(this.getMonth()+1)+"-"+((this.getDate()<10)?"0":"")+String(this.getDate())},comp:function(){return parseInt(this.iso().replace(/-/g,""),10)},getEpoch:function(){return(this.getTime()-this.getMilliseconds())/1000},getArray:function(){return[this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds()]},setFirstDay:function(b){this.setD(2,1).adj(2,(b-this.getDay()));if(this.get(2)>10){this.adj(2,7)}return this},setDWeek:function(c,b){if(c===4){return this.setD(1,0).setD(2,1).setFirstDay(4).adj(2,-3).adj(2,(b-1)*7)}return this.setD(1,0).setD(2,1).setFirstDay(c).adj(2,(b-1)*7)},getDWeek:function(c){var d,b;switch(c){case 0:d=this.copy([0,-1*this.getMonth()]).setFirstDay(0);return Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;case 1:d=this.copy([0,-1*this.getMonth()]).setFirstDay(1);return Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;case 4:if(this.getMonth()===11&&this.getDate()>28){return 1}d=this.copy([0,-1*this.getMonth()],true).setFirstDay(4).adj(2,-3);b=Math.floor((this.getTime()-(d.getTime()+((this.getTimezoneOffset()-d.getTimezoneOffset())*60000)))/604800000)+1;if(b<1){d=this.copy([-1,-1*this.getMonth()]).setFirstDay(4).adj(2,-3);return Math.floor((this.getTime()-d.getTime())/604800000)+1}return b;default:return 0}}})},_event:function(d,c){var b=a(this).data(parseInt(a.mobile.version.replace(/\./g,""),10)>110?"mobile-datebox":"datebox");if(!d.isPropagationStopped()){switch(c.method){case"close":b.close();break;case"open":b.open();break;case"set":a(this).val(c.value);a(this).trigger("change");break;case"doset":if(a.isFunction(b["_"+b.options.mode+"DoSet"])){b["_"+b.options.mode+"DoSet"].apply(b,[])}else{a(this).trigger("datebox",{method:"set",value:b._formatter(b.__fmt(),b.theDate),date:b.theDate})}break;case"dooffset":if(c.type){b._offset(c.type,c.amount,true)}break;case"dorefresh":b.refresh();break;case"doreset":b.hardreset();break;case"doclear":a(this).val("").trigger("change");break;case"clear":a(this).trigger("change")}}},_hoover:function(b){a(b).toggleClass("ui-btn-up-"+a(b).jqmData("theme")+" ui-btn-down-"+a(b).jqmData("theme"))},_ord:{"default":function(c){var b=c%10;if(c>9&&c<21){return"th"}if(b>3){return"th"}return["th","st","nd","rd"][b]}},__:function(d){var c=this.options,b="override"+d.charAt(0).toUpperCase()+d.slice(1);if(typeof c[b]!=="undefined"){return c[b]}if(typeof c.lang[c.useLang][d]!=="undefined"){return c.lang[c.useLang][d]}if(typeof c[c.mode+"lang"]!=="undefined"&&typeof c[c.mode+"lang"][d]!=="undefined"){return c[c.mode+"lang"][d]}return c.lang["default"][d]},__fmt:function(){var b=this,c=this.options;switch(c.mode){case"timebox":case"timeflipbox":return b.__("timeOutput");case"durationbox":case"durationflipbox":return b.__("durationFormat");default:return b.__("dateFormat")}},_zPad:function(b){return((b<10)?"0"+String(b):String(b))},_dRep:function(j,g){var h=48,b=57,c=1584,d=null,e=null,f="";if(g===-1){h+=c;b+=c;c=-1584}for(d=0;d<j.length;d++){e=j.charCodeAt(d);if(e>=h&&e<=b){f=f+String.fromCharCode(e+c)}else{f=f+String.fromCharCode(e)}}return f},_doIndic:function(){var b=this;b.d.intHTML.find("*").each(function(){if(a(this).children().length<1){a(this).text(b._dRep(a(this).text()))}else{if(a(this).hasClass("ui-datebox-slideday")){a(this).html(b._dRep(a(this).html()))}}});b.d.intHTML.find("input").each(function(){a(this).val(b._dRep(a(this).val()))})},_parser:{"default":function(b){return false}},_n:function(c,b){return(c<0)?b:c},_pa:function(b,c){if(typeof c==="boolean"){return new this._date(b[0],b[1],b[2],0,0,0,0)}return new this._date(c.getFullYear(),c.getMonth(),c.getDate(),b[0],b[1],b[2],0)},_makeDate:function(k){k=a.trim(((this.__("useArabicIndic")===true)?this._dRep(k,-1):k));var n=this,c=this.options,e=n.__fmt(),m=null,h=[],l=null,b=null,f=new n._date(),j={year:-1,mont:-1,date:-1,hour:-1,mins:-1,secs:-1,week:false,wtyp:4,wday:false,yday:false,meri:0},g;if(typeof c.mode==="undefined"){return f}if(typeof n._parser[c.mode]!=="undefined"){return n._parser[c.mode].apply(n,[k])}if(c.mode==="durationbox"||c.mode==="durationflipbox"){e=e.replace(/%D([a-z])/gi,function(d,o){switch(o){case"d":case"l":case"M":case"S":return"("+d+"|[0-9]+)";default:return".+?"}});e=new RegExp("^"+e+"$");m=e.exec(k);l=e.exec(n.__fmt());if(m===null||m.length!==l.length){if(typeof c.defaultValue==="number"&&c.defaultValue>0){return new n._date((n.initDate.getEpoch()+parseInt(c.defaultValue,10))*1000)}return new n._date(n.initDate.getTime())}b=n.initDate.getEpoch();for(g=0;g<m.length;g++){if(l[g].match(/^%Dd$/i)){b=b+(parseInt(m[g],10)*60*60*24)}if(l[g].match(/^%Dl$/i)){b=b+(parseInt(m[g],10)*60*60)}if(l[g].match(/^%DM$/i)){b=b+(parseInt(m[g],10)*60)}if(l[g].match(/^%DS$/i)){b=b+(parseInt(m[g],10))}}return new n._date((b*1000))}e=e.replace(/%(0|-)*([a-z])/gi,function(d,o,p){h.push(p);switch(p){case"p":case"P":case"b":case"B":return"("+d+"|.+?)";case"H":case"k":case"I":case"l":case"m":case"M":case"S":case"V":case"U":case"u":case"W":case"d":return"("+d+"|"+((o==="-")?"[0-9]{1,2}":"[0-9]{2}")+")";case"j":return"("+d+"|[0-9]{3})";case"s":return"("+d+"|[0-9]+)";case"g":case"y":return"("+d+"|[0-9]{2})";case"E":case"G":case"Y":return"("+d+"|[0-9]{1,4})";default:h.pop();return".+?"}});e=new RegExp("^"+e+"$");m=e.exec(k);l=e.exec(n.__fmt());if(m===null||m.length!==l.length){if(c.defaultValue!==false){switch(typeof c.defaultValue){case"object":if(c.defaultValue.length===3){f=n._pa(c.defaultValue,((c.mode==="timebox"||c.mode==="timeflipbox")?f:false))}break;case"number":f=new n._date(c.defaultValue*1000);break;case"string":if(c.mode==="timebox"||c.mode==="timeflipbox"){b=c.defaultValue.split(":");if(b.length===3){f=n._pa([b[0],b[1],b[2]],f)}else{if(b.length===2){f=n._pa([b[0],b[1],0],f)}}}else{b=c.defaultValue.split("-");if(b.length===3){f=n._pa([b[0],b[1]-1,b[2]],false)}}break}}if(isNaN(f.getDate())){f=new n._date()}}else{for(g=1;g<m.length;g++){switch(h[g-1]){case"s":return new n._date(parseInt(m[g],10)*1000);case"Y":case"G":j.year=parseInt(m[g],10);break;case"E":j.year=parseInt(m[g],10)-543;break;case"y":case"g":if(c.afterToday===true||parseInt(m[g],10)<38){j.year=parseInt("20"+m[g],10)}else{j.year=parseInt("19"+m[g],10)}break;case"m":j.mont=parseInt(m[g],10)-1;break;case"d":j.date=parseInt(m[g],10);break;case"H":case"k":case"I":case"l":j.hour=parseInt(m[g],10);break;case"M":j.mins=parseInt(m[g],10);break;case"S":j.secs=parseInt(m[g],10);break;case"u":j.wday=parseInt(m[g],10)-1;break;case"w":j.wday=parseInt(m[g],10);break;case"j":j.yday=parseInt(m[g],10);break;case"V":j.week=parseInt(m[g],10);j.wtyp=4;break;case"U":j.week=parseInt(m[g],10);j.wtyp=0;break;case"W":j.week=parseInt(m[g],10);j.wtyp=1;break;case"p":case"P":j.meri=((m[g].toLowerCase()===n.__("meridiem")[0].toLowerCase())?-1:1);break;case"b":b=a.inArray(m[g],n.__("monthsOfYearShort"));if(b>-1){j.mont=b}break;case"B":b=a.inArray(m[g],n.__("monthsOfYear"));if(b>-1){j.mont=b}break}}if(j.meri!==0){if(j.meri===-1&&j.hour===12){j.hour=0}if(j.meri===1&&j.hour!==12){j.hour=j.hour+12}}f=new n._date(n._n(j.year,0),n._n(j.mont,0),n._n(j.date,1),n._n(j.hour,0),n._n(j.mins,0),n._n(j.secs,0),0);if(j.year<100&&j.year!==-1){f.setFullYear(j.year)}if((j.mont>-1&&j.date>-1)||(j.hour>-1&&j.mins>-1&&j.secs>-1)){return f}if(j.week!==false){f.setDWeek(j.wtyp,j.week);if(j.date>-1){f.setDate(j.date)}}if(j.yday!==false){f.setD(1,0).setD(2,1).adj(2,(j.yday-1))}if(j.wday!==false){f.adj(2,(j.wday-f.getDay()))}}return f},_customformat:{"default":function(c,b){return false}},_formatter:function(f,c){var b=this,g=this.options,d,e={part:[0,0,0,0],tp:0};if(g.mode==="durationbox"||g.mode==="durationflipbox"){e.tp=this.theDate.getEpoch()-this.initDate.getEpoch();e.part[0]=parseInt(e.tp/(60*60*24),10);e.tp-=(e.part[0]*60*60*24);e.part[1]=parseInt(e.tp/(60*60),10);e.tp-=(e.part[1]*60*60);e.part[2]=parseInt(e.tp/(60),10);e.tp-=(e.part[2]*60);e.part[3]=e.tp;if(!f.match(/%Dd/)){e.part[1]+=(e.part[0]*24)}if(!f.match(/%Dl/)){e.part[2]+=(e.part[1]*60)}if(!f.match(/%DM/)){e.part[3]+=(e.part[2]*60)}}f=f.replace(/%(D|X|0|-)*([1-9a-zA-Z])/g,function(h,j,k){if(j==="X"){if(typeof b._customformat[g.mode]!=="undefined"){return b._customformat[g.mode](k,c,g)}return h}if(j==="D"){switch(k){case"d":return e.part[0];case"l":return b._zPad(e.part[1]);case"M":return b._zPad(e.part[2]);case"S":return b._zPad(e.part[3]);case"A":return((e.part[0]>1)?b.__("durationDays")[1]:b.__("durationDays")[0]);default:return h}}switch(k){case"%":return"%";case"a":return b.__("daysOfWeekShort")[c.getDay()];case"A":return b.__("daysOfWeek")[c.getDay()];case"b":return b.__("monthsOfYearShort")[c.getMonth()];case"B":return b.__("monthsOfYear")[c.getMonth()];case"C":return c.getFullYear().toString().substr(0,2);case"d":return((j==="-")?c.getDate():b._zPad(c.getDate()));case"H":case"k":return((j==="-")?c.getHours():b._zPad(c.getHours()));case"I":case"l":return((j==="-")?((c.getHours()===0||c.getHours()===12)?12:((c.getHours()<12)?c.getHours():(c.getHours()-12))):b._zPad(((c.getHours()===0||c.getHours()===12)?12:((c.getHours()<12)?c.getHours():c.getHours()-12))));case"m":return((j==="-")?c.getMonth()+1:b._zPad(c.getMonth()+1));case"M":return((j==="-")?c.getMinutes():b._zPad(c.getMinutes()));case"p":return((c.getHours()<12)?b.__("meridiem")[0].toUpperCase():b.__("meridiem")[1].toUpperCase());case"P":return((c.getHours()<12)?b.__("meridiem")[0].toLowerCase():b.__("meridiem")[1].toLowerCase());case"s":return c.getEpoch();case"S":return((j==="-")?c.getSeconds():b._zPad(c.getSeconds()));case"u":return((j==="-")?c.getDay()+1:b._zPad(c.getDay()+1));case"w":return c.getDay();case"y":return c.getFullYear().toString().substr(2,2);case"Y":return c.getFullYear();case"E":return c.getFullYear()+543;case"V":return((j==="-")?c.getDWeek(4):b._zPad(c.getDWeek(4)));case"U":return((j==="-")?c.getDWeek(0):b._zPad(c.getDWeek(0)));case"W":return((j==="-")?c.getDWeek(1):b._zPad(c.getDWeek(1)));case"o":if(typeof b._ord[g.useLang]!=="undefined"){return b._ord[g.useLang](c.getDate())}return b._ord["default"](c.getDate());case"j":d=new Date(c.getFullYear(),0,1);d=Math.ceil((c-d)/86400000)+1;return((d<100)?((d<10)?"00":"0"):"")+String(d);case"G":if(c.getDWeek(4)===1&&c.getMonth()>0){return c.getFullYear()+1}if(c.getDWeek(4)>51&&c.getMonth()<11){return c.getFullYear()-1}return c.getFullYear();case"g":if(c.getDWeek(4)===1&&c.getMonth()>0){return parseInt(c.getFullYear().toString().substr(2,2),10)+1}if(c.getDWeek(4)>51&&c.getMonth()<11){return parseInt(c.getFullYear().toString().substr(2,2),10)-1}return c.getFullYear().toString().substr(2,2);default:return h}});if(b.__("useArabicIndic")===true){f=b._dRep(f)}return f},_btwn:function(d,b,c){return(d>b&&d<c)},_minStepFix:function(){var d=this.theDate.get(4),c,b=this,e=this.options;if(e.minuteStep>1&&d%e.minuteStep>0){if(e.minuteStepRound<0){d=d-(d%e.minuteStep)}else{if(e.minStepRound>0){d=d+(e.minuteStep-(d%e.minuteStep))}else{if(d%e.minuteStep<e.minuteStep/2){d=d-(d%e.minuteStep)}else{d=d+(e.minuteStep-(d%e.minuteStep))}}}b.theDate.setMinutes(d)}},_offset:function(f,d,g){var b=this,e=this.options,c=false;f=(f||"").toLowerCase();if(typeof(g)==="undefined"){g=true}b.d.input.trigger("datebox",{method:"offset",type:f,amount:d});if(f!=="a"&&(typeof e.rolloverMode[f]==="undefined"||e.rolloverMode[f]===true)){c=a.inArray(f,["y","m","d","h","i","s"])}else{switch(f){case"y":c=0;break;case"m":if(b._btwn(b.theDate.getMonth()+d,-1,12)){c=1}break;case"d":if(b._btwn(b.theDate.getDate()+d,0,(32-b.theDate.copy([0],[0,0,32,13]).getDate()+1))){c=2}break;case"h":if(b._btwn(b.theDate.getHours()+d,-1,24)){c=3}break;case"i":if(b._btwn(b.theDate.getMinutes()+d,-1,60)){c=4}break;case"s":if(b._btwn(b.theDate.getSeconds()+d,-1,60)){c=5}break;case"a":b._offset("h",((d>0)?1:-1)*12,false);break}}if(c!==false){b.theDate.adj(c,d)}if(g===true){b.refresh()}if(e.useImmediate){b.d.input.trigger("datebox",{method:"doset"})}},_startOffset:function(b){var c=this.options;if(c.startOffsetYears!==false){b.adj(0,c.startOffsetYears)}if(c.startOffsetMonths!==false){b.adj(1,c.startOffsetMonths)}if(c.startOffsetDays!==false){b.adj(2,c.startOffsetDays)}return b},_create:function(){a(document).trigger("dateboxcreate");var j=this,b=a.extend(this.options,(typeof this.element.jqmData("options")!=="undefined")?this.element.jqmData("options"):this._getLongOptions(this.element)),k=(b.theme===false&&typeof(a(this).jqmData("theme"))==="undefined")?((typeof(this.element.parentsUntil(":jqmData(theme)").parent().jqmData("theme"))==="undefined")?b.themeDefault:this.element.parentsUntil(":jqmData(theme)").parent().jqmData("theme")):b.theme,l=b.useAnimation?b.transition:"none",g=b.useNewStyle===false?{input:this.element,wrap:this.element.wrap('<div class="ui-input-datebox ui-shadow-inset ui-corner-all '+(this.element.jqmData("mini")===true?"ui-mini ":"")+"ui-body-"+k+'"></div>').parent(),mainWrap:a("<div>",{"class":"ui-datebox-container ui-overlay-shadow ui-corner-all ui-datebox-hidden "+l+" ui-body-"+k}).css("zIndex",b.zindex),intHTML:false}:{input:this.element,wrap:this.element,mainWrap:a("<div>",{"class":"ui-datebox-container ui-overlay-shadow ui-corner-all ui-datebox-hidden "+l+" ui-body-"+k}).css("zIndex",b.zindex),intHTML:false},e=(typeof window.ontouchstart!=="undefined"),f={eStart:(e?"touchstart":"mousedown")+".datebox",eMove:(e?"touchmove":"mousemove")+".datebox",eEnd:(e?"touchend":"mouseup")+".datebox",eEndA:(e?"mouseup.datebox touchend.datebox touchcancel.datebox touchmove.datebox":"mouseup.datebox"),move:false,start:false,end:false,pos:false,target:false,delta:false,tmp:false},c={},h=(typeof a.mobile.ns!=="undefined")?a.mobile.ns:"";a.extend(j,{d:g,ns:h,drag:f,touch:e});if(b.usePlaceholder!==false){if(b.usePlaceholder===true&&j._grabLabel()!==false){j.d.input.attr("placeholder",j._grabLabel())}if(typeof b.usePlaceholder==="string"){j.d.input.attr("placeholder",b.usePlaceholder)}}b.theme=k;j.clearFunc=false;j.disabled=false;j.runButton=false;j._date=window.Date;j._enhanceDate();j.baseID=j.d.input.attr("id");j.initDate=new j._date();j.theDate=(b.defaultValue)?j._makeDate(b.defaultValue):((j.d.input.val()!=="")?j._makeDate(j.d.input.val()):new j._date());j.initDone=false;if(b.showInitialValue===true){j.d.input.val(j._formatter(j.__fmt(),j.theDate))}if(b.useButton===true&&b.useInline===false&&b.useNewStyle===false){j.d.open=a('<a href="#" class="ui-input-clear" title="'+this.__("tooltip")+'">'+this.__("tooltip")+"</a>").on(b.clickEvent,function(d){d.preventDefault();if(!j.disabled){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.parent().addClass("ui-focus");j.d.input.parent().removeClass("ui-focus")}setTimeout(function(){a(d.target).closest("a").removeClass(a.mobile.activeBtnClass)},300)}).appendTo(j.d.wrap).buttonMarkup({icon:"grid",iconpos:"notext",corners:true,shadow:true}).css({"vertical-align":"middle",display:"inline-block"})}j.d.screen=a("<div>",{"class":"ui-datebox-screen ui-datebox-hidden"+((b.useModal)?" ui-datebox-screen-modal":"")}).css({"z-index":b.zindex-1}).on(b.clickEventAlt,function(d){d.preventDefault();j.d.input.trigger("datebox",{method:"close"})});if(b.enhanceInput===true&&navigator.userAgent.match(/Android/i)){j.inputType="number"}else{j.inputType="text"}if(b.hideInput){j.d.wrap.parent().hide()}if(b.mobVer<140){a("label[for='"+j.d.input.attr("id")+"']").addClass("ui-input-text").css("verticalAlign","middle")}j.d.wrap.on(b.clickEvent,function(){if(!j.disabled&&(b.noButtonFocusMode||b.focusMode)){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.removeClass("ui-focus")}});j.d.input.removeClass("ui-corner-all ui-shadow-inset").bind(j.touch?"touchend":"click",function(d){if(j.disabled===false&&b.useNewStyle===true&&b.useFocus===false){if(((j.touch?d.originalEvent.changedTouches[0].pageX:d.pageX)-d.target.offsetLeft)>(d.target.offsetWidth-20)){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.parent().addClass("ui-focus");j.d.input.removeClass("ui-focus")}}}).focus(function(){if(j.disabled===false&&b.useFocus===true){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.removeClass("ui-focus");if(b.useNewStyle===false){j.d.input.parent().removeClass("ui-focus");j.d.wrap.parent().addClass("ui-focus")}}if(b.useNewStyle===false){j.d.input.removeClass("ui-focus")}}).blur(function(){j.d.wrap.removeClass("ui-focus");j.d.input.removeClass("ui-focus")}).change(function(){j.theDate=j._makeDate(j.d.input.val());j.refresh()}).attr("readonly",b.lockInput).on("datebox",j._event);if(b.useNewStyle===true){j.d.input.addClass("ui-corner-all "+((b.useAltIcon===true)?"ui-icon-datebox-alt":"ui-icon-datebox"));if(b.overrideStyleClass!==false){j.d.input.addClass(b.overrideStyleClass)}}else{j.d.input.parent().css("border","none").removeClass("ui-shadow-inset")}j.d.wrap.parent().on(b.clickEvent,function(){if(!j.disabled&&b.useFocus===true&&b.useNewStyle===false){j.d.input.trigger("datebox",{method:"open"});j.d.wrap.addClass("ui-focus");j.d.input.removeClass("ui-focus");setTimeout(function(){j.d.wrap.removeClass("ui-focus");j.d.wrap.parent().addClass("ui-focus")},500)}});if(typeof a.event.special.mousewheel!=="undefined"){j.wheelExists=true}if(j.d.input.is(":disabled")){j.disable()}if(b.useInline===true||b.useInlineBlind){j.open()}j.applyMinMax(false,false);a(document).trigger("dateboxaftercreate")},applyMinMax:function(e,d){var b=this,f=this.options,c={};if(typeof e==="undefined"){e=false}if(typeof d==="undefined"){d=true}if((d===true||f.minDays===false)&&typeof(b.d.input.attr("min"))!=="undefined"){c.today=new b._date();c.lod=24*60*60*1000;c.todayc=new b._date(c.today.getFullYear(),c.today.getMonth(),c.today.getDate(),0,0,0,0);c.fromel=b.d.input.attr("min").split("-");c.compdt=new b._date(c.fromel[0],c.fromel[1]-1,c.fromel[2],0,0,0,0);f.minDays=parseInt((((c.compdt.getTime()-c.todayc.getTime())/c.lod))*-1,10)}if((d===true||f.maxDays===false)&&typeof(b.d.input.attr("max"))!=="undefined"){c.today=new b._date();c.lod=24*60*60*1000;c.todayc=new b._date(c.today.getFullYear(),c.today.getMonth(),c.today.getDate(),0,0,0,0);c.fromel=b.d.input.attr("max").split("-");c.compdt=new b._date(c.fromel[0],c.fromel[1]-1,c.fromel[2],0,0,0,0);f.maxDays=parseInt((((c.compdt.getTime()-c.todayc.getTime())/c.lod)),10)}if(e===true){b.refresh()}},_build:{"default":function(){this.d.headerText="Error";this.d.intHTML=a("<div class='ui-body-b'><h2 style='text-align:center'>There is no mode by that name loaded / mode not given</h2></div>")}},_applyCoords:function(h){var b=h.widget,j=h.widget.options,f={h:a.mobile.activePage.find(".ui-header").jqmData("position"),f:a.mobile.activePage.find(".ui-footer").jqmData("position"),fh:a.mobile.activePage.find(".ui-footer").outerHeight(),hh:a.mobile.activePage.find(".ui-header").outerHeight()},c={x:b.d.wrap.offset().left+(b.d.wrap.outerWidth()/2),y:b.d.wrap.offset().top+(b.d.wrap.outerHeight()/2)},d={w:b.d.mainWrap.outerWidth(),h:b.d.mainWrap.outerHeight()},g={t:a(window).scrollTop(),h:a(window).height(),w:a.mobile.activePage.width(),ah:a(document).height()},k={y:(j.centerVert)?g.t+((g.h/2)-(d.h/2)):c.y-(d.h/2),x:(g.w<400||j.centerHoriz)?(g.w/2)-(d.w/2):c.x-(d.w/2)};if(j.centerVert===false){if(j.hideFixedToolbars===true&&(typeof f.f!=="undefined"||typeof f.h!=="undefined")){a.mobile.activePage.find(":jqmData(position='fixed')").fixedtoolbar("hide");f.f=undefined;f.h=undefined}if(typeof f.f!=="undefined"){if((k.y+d.h)>(g.h-f.fh-2)){k.y=g.h-f.fh-2-d.h}}else{if((k.y+d.h)>(g.ah-f.fh-2)){k.y=g.ah-f.fh-2-d.h}if((g.h+g.t)<(d.h+k.y+2)){k.y=g.h+g.t-d.h-2}}if(typeof f.h!=="undefined"){if((g.t+f.hh+2)>k.y){k.y=g.t+f.hh+2}}else{if(f.hh+2>k.y){k.y=f.hh+2}if(k.y<g.t+2){k.y=g.t+2}}}b.d.mainWrap.css({position:"absolute",top:k.y,left:k.x})},_drag:{"default":function(){return false}},open:function(){var b=this,g=this.options,e={},f={history:false},d="data-"+this.ns,c=g.useAnimation?g.transition:"none";if(g.useFocus===true&&b.fastReopen===true){b.d.input.blur();return false}if(b.clearFunc!==false){clearTimeout(b.clearFunc);b.clearFunc=false}if(g.openCallback!==false){if(!a.isFunction(g.openCallback)){if(typeof window[g.openCallback]!=="undefined"){g.openCallback=window[g.openCallback]}else{g.openCallback=new Function(g.openCallback)}}if(g.openCallback.apply(b,a.merge([b.theDate],g.openCallbackArgs))===false){return false}}b.theDate=b._makeDate(b.d.input.val());if(b.d.input.val()===""){b._startOffset(b.theDate)}b.d.input.blur();if(typeof b._build[g.mode]==="undefined"){b._build["default"].apply(b,[])}else{b._build[g.mode].apply(b,[])}if(typeof b._drag[g.mode]!=="undefined"){b._drag[g.mode].apply(b,[])}b.d.input.trigger("datebox",{method:"refresh"});if(b.__("useArabicIndic")===true){b._doIndic()}if((g.useInline===true||g.useInlineBlind===true)&&b.initDone===false){b.d.mainWrap.append(b.d.intHTML);b.d.input.parent().parent().append(b.d.mainWrap);b.d.mainWrap.removeClass("ui-datebox-hidden");if(g.useInline===true){b.d.mainWrap.addClass("ui-datebox-inline")}else{b.d.mainWrap.addClass("ui-datebox-inlineblind");b.d.mainWrap.hide()}b.initDone=false;b.d.input.trigger("datebox",{method:"postrefresh"})}if(g.useImmediate){b.d.input.trigger("datebox",{method:"doset"})}if(g.useInline){return true}if(g.useInlineBlind){if(b.initDone){b.d.mainWrap.slideDown()}else{b.initDone=true}return true}if(b.d.intHTML.is(":visible")){return false}if(g.enablePopup===true){b.d.dialogPage=false;b.d.mainWrap.empty();if(g.useHeader===true){b.d.headHTML=a('<div class="ui-header ui-bar-'+g.themeHeader+'"></div>');a("<a class='ui-btn-left' href='#'>Close</a>").appendTo(b.d.headHTML).buttonMarkup({theme:g.themeHeader,icon:"delete",iconpos:"notext",corners:true,shadow:true}).on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});a('<h1 class="ui-title">'+b.d.headerText+"</h1>").appendTo(b.d.headHTML);b.d.mainWrap.append(b.d.headHTML)}b.d.mainWrap.append(b.d.intHTML).css("zIndex",g.zindex);b.d.input.trigger("datebox",{method:"postrefresh"});if(g.useAnimation===true){e.transition=g.transition}else{e.transition="none"}if(g.popupForceX!==false&&g.popupForceY!==false){e.x=g.popupForceX;e.y=g.popupForceY}if(g.popupPosition!==false){e.positionTo=g.popupPosition}else{if(typeof b.baseID!==undefined){e.positionTo="#"+b.baseID}else{e.positionTo="window"}}if(g.useModal===true){f.overlayTheme="a"}b.d.mainWrap.removeClass("ui-datebox-hidden").popup(f).popup("open",e);b.refresh()}else{if(g.dialogForce||(g.dialogEnable&&window.width()<400)){b.d.dialogPage=a("<div "+d+"role='dialog' "+d+"theme='"+g.theme+"' ><div "+d+"role='header' "+d+"theme='"+g.themeHeader+"'><h1>"+b.d.headerText+"</h1></div><div "+d+"role='content'></div>").appendTo(a.mobile.pageContainer).page().css("minHeight","0px").addClass(c);b.d.dialogPage.find(".ui-header").find("a").off("click vclick").on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});b.d.mainWrap.append(b.d.intHTML).css({marginLeft:"auto",marginRight:"auto"}).removeClass("ui-datebox-hidden");b.d.dialogPage.find(".ui-content").append(b.d.mainWrap);b.d.input.trigger("datebox",{method:"postrefresh"});a.mobile.activePage.off("pagehide.remove");a.mobile.changePage(b.d.dialogPage,{transition:c})}else{b.d.dialogPage=false;b.d.mainWrap.empty();if(g.useHeader===true){b.d.headHTML=a('<div class="ui-header ui-bar-'+g.themeHeader+'"></div>');a("<a class='ui-btn-left' href='#'>Close</a>").appendTo(b.d.headHTML).buttonMarkup({theme:g.themeHeader,icon:"delete",iconpos:"notext",corners:true,shadow:true}).on(g.clickEventAlt,function(h){h.preventDefault();b.d.input.trigger("datebox",{method:"close"})});a('<h1 class="ui-title">'+b.d.headerText+"</h1>").appendTo(b.d.headHTML);b.d.mainWrap.append(b.d.headHTML)}b.d.mainWrap.append(b.d.intHTML).css("zIndex",g.zindex);b.d.mainWrap.appendTo(a.mobile.activePage);b.d.screen.appendTo(a.mobile.activePage);b.d.input.trigger("datebox",{method:"postrefresh"});b._applyCoords({widget:b});if(g.useModal===true){if(g.useAnimation){b.d.screen.fadeIn("slow")}else{b.d.screen.show()}}else{setTimeout(function(){b.d.screen.removeClass("ui-datebox-hidden")},500)}b.d.mainWrap.addClass("ui-overlay-shadow in").removeClass("ui-datebox-hidden");a(document).on("orientationchange.datebox",{widget:b},function(h){b._applyCoords(h.data)});if(g.resizeListener===true){a(window).on("resize.datebox",{widget:b},function(h){b._applyCoords(h.data)})}}}},close:function(){var b=this,c=this.options;if(c.useInlineBlind===true){b.d.mainWrap.slideUp();return true}if(c.useInline===true||b.d.intHTML===false){return true}if(b.d.dialogPage!==false){a(b.d.dialogPage).dialog("close");if(!a.mobile.activePage.jqmData("mobile-page").options.domCache){a.mobile.activePage.on("pagehide.remove",function(){a(this).remove()})}b.d.intHTML.detach().empty();b.d.mainWrap.detach().empty();b.d.wrap.removeClass("ui-focus");b.clearFunc=setTimeout(function(){b.d.dialogPage.empty().remove();b.clearFunc=false},1500)}else{if(c.enablePopup===true){b.d.mainWrap.popup("close");b.d.wrap.removeClass("ui-focus")}else{if(c.useModal){if(c.useAnimation){b.d.screen.fadeOut("slow")}else{b.d.screen.hide()}}else{b.d.screen.addClass("ui-datebox-hidden")}b.d.screen.detach();b.d.mainWrap.addClass("ui-datebox-hidden").removeAttr("style").removeClass("in ui-overlay-shadow").empty().detach();b.d.intHTML.detach();b.d.wrap.removeClass("ui-focus");a(document).off("orientationchange.datebox");if(c.resizeListener===true){a(window).off("resize.datebox")}}}b.d.wrap.parent().removeClass("ui-focus");a(document).off(b.drag.eMove);a(document).off(b.drag.eEnd);a(document).off(b.drag.eEndA);if(c.useFocus){b.fastReopen=true;setTimeout(function(d){return function(){d.fastReopen=false}}(b),300)}if(c.closeCallback!==false){if(!a.isFunction(c.closeCallback)){if(typeof window[c.closeCallback]!=="undefined"){c.closeCallback=window[c.closeCallback]}else{c.closeCallback=new Function(c.closeCallback)}}c.closeCallback.apply(b,a.merge([b.theDate],c.closeCallbackArgs))}},refresh:function(){if(typeof this._build[this.options.mode]==="undefined"){this._build["default"].apply(this,[])}else{this._build[this.options.mode].apply(this,[])}if(this.__("useArabicIndic")===true){this._doIndic()}this.d.mainWrap.append(this.d.intHTML);this.d.input.trigger("datebox",{method:"postrefresh"})},_check:function(){var b=this,d=null,c=this.options;b.dateOK=true;if(c.afterToday!==false){d=new b._date();if(b.theDate<d){b.theDate=d}}if(c.beforeToday!==false){d=new b._date();if(b.theDate>d){b.theDate=d}}if(c.maxDays!==false){d=new b._date();d.adj(2,c.maxDays);if(b.theDate>d){b.theDate=d}}if(c.minDays!==false){d=new b._date();d.adj(2,-1*c.minDays);if(b.theDate<d){b.theDate=d}}if(c.minHour!==false){if(b.theDate.getHours()<c.minHour){b.theDate.setHours(c.minHour)}}if(c.maxHour!==false){if(b.theDate.getHours()>c.maxHour){b.theDate.setHours(c.maxHour)}}if(c.maxYear!==false){d=new b._date(c.maxYear,0,1);d.adj(2,-1);if(b.theDate>d){b.theDate=d}}if(c.minYear!==false){d=new b._date(c.minYear,0,1);if(b.theDate<d){b.theDate=d}}if(a.inArray(c.mode,["timebox","durationbox","durationflipbox","timeflipbox"])>-1){if(c.mode==="timeflipbox"&&c.validHours!==false){if(a.inArray(b.theDate.getHours(),c.validHours)<0){b.dateOK=false}}}else{if(c.blackDatesRec!==false){for(i=0;i<c.blackDatesRec.length;i++){if((c.blackDatesRec[i][0]===-1||c.blackDatesRec[i][0]===year)&&(c.blackDatesRec[i][1]===-1||c.blackDatesRec[i][1]===month)&&(c.blackDatesRec[i][2]===-1||c.blackDatesRec[i][2]===date)){b.dateOK=false}}}if(c.blackDates!==false){if(a.inArray(b.theDate.iso(),c.blackDates)>-1){b.dateOK=false}}if(c.blackDays!==false){if(a.inArray(b.theDate.getDay(),c.blackDays)>-1){b.dateOK=false}}}},_grabLabel:function(){var b=this,c=this.options;if(typeof c.overrideDialogLabel==="undefined"){if(typeof b.d.input.attr("placeholder")!=="undefined"){return b.d.input.attr("placeholder")}if(typeof b.d.input.attr("title")!=="undefined"){return b.d.input.attr("title")}if(b.d.wrap.parent().find("label[for='"+b.d.input.attr("id")+"']").text()!==""){return b.d.wrap.parent().find("label[for='"+b.d.input.attr("id")+"']").text()}return false}return c.overrideDialogLabel},_makeEl:function(d,e){var b=false,c=false;c=d.clone();if(typeof e.attr!=="undefined"){for(b in e.attr){if(e.attr.hasOwnProperty(b)){c.jqmData(b,e.attr[b])}}}return c},_getLongOptions:function(d){var c,e={},f,b;if(a.mobile.ns===""){f="datebox"}else{f=a.mobile.ns.substr(0,a.mobile.ns.length-1)+"Datebox"}for(c in d.data()){if(c.substr(0,f.length)===f&&c.length>f.length){b=c.substr(f.length);b=b.charAt(0).toLowerCase()+b.slice(1);e[b]=d.data(c)}}return e},disable:function(){this.d.input.attr("disabled",true);this.d.wrap.addClass("ui-disabled").blur();this.disabled=true;this.d.input.trigger("datebox",{method:"disable"})},enable:function(){this.d.input.attr("disabled",false);this.d.wrap.removeClass("ui-disabled");this.disabled=false;this.d.input.trigger("datebox",{method:"enable"})},_setOption:function(){a.Widget.prototype._setOption.apply(this,arguments);this.refresh()},getTheDate:function(){return this.theDate},getLastDur:function(){return this.lastDuration},setTheDate:function(b){this.theDate=b;this.refresh()},callFormat:function(c,b){return this._formatter(c,b)}});a(document).on("pagebeforecreate",function(b){a(":jqmData(role='datebox')",b.target).each(function(){a(this).prop("type","text")})});a(document).on("pagecreate create",function(b){a(document).trigger("dateboxbeforecreate");a(":jqmData(role='datebox')",b.target).each(function(){var c=typeof(a(this).data(parseInt(a.mobile.version.replace(/\./g,""),10)>111?"mobile-datebox":"datebox"));if(c==="undefined"){a(this).datebox()}})})})(jQuery);
/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notification.
 * https://github.com/jtsage/jquery-mobile-datebox
 */
(function(a){a.extend(a.mobile.datebox.prototype.options,{themeDateToday:"b",themeDayHigh:"b",themeDatePick:"b",themeDateHigh:"b",themeDateHighAlt:"b",themeDateHighRec:"b",themeDate:"a",calHighToday:true,calHighPick:true,calShowDays:true,calOnlyMonth:false,calWeekMode:false,calWeekModeDay:1,calWeekHigh:false,calControlGroup:false,calShowWeek:false,calUsePickers:false,calNoHeader:false,useTodayButton:false,useCollapsedBut:false,highDays:false,highDates:false,highDatesRec:false,highDatesAlt:false,enableDates:false,calDateList:false,calShowDateList:false,});a.extend(a.mobile.datebox.prototype,{_cal_gen:function(d,f,l,i,h){var b=0,e=0,k=1,g=1,c=[],m=[],j=false;for(b=0;b<=5;b++){if(j===false){m=[];for(e=0;e<=6;e++){if(b===0&&e<d){if(i===true){m.push([f+(e-d)+1,h-1])}else{m.push(false)}}else{if(b>3&&k>l){if(i===true){m.push([g,h+1]);g++}else{m.push(false)}j=true}else{m.push([k,h]);k++;if(k>l){j=true}}}}c.push(m)}}return c},_cal_check:function(b,h,f,d){var k=this,e,c=this.options,g={},j=new this._date(h,f,d,0,0,0,0).getDay();g.ok=true;g.iso=h+"-"+k._zPad(f+1)+"-"+k._zPad(d);g.comp=parseInt(g.iso.replace(/-/g,""),10);g.theme=c.themeDate;g.recok=true;g.rectheme=false;if(c.blackDatesRec!==false){for(e=0;e<c.blackDatesRec.length;e++){if((c.blackDatesRec[e][0]===-1||c.blackDatesRec[e][0]===h)&&(c.blackDatesRec[e][1]===-1||c.blackDatesRec[e][1]===f)&&(c.blackDatesRec[e][2]===-1||c.blackDatesRec[e][2]===d)){g.recok=false}}}if(a.isArray(c.enableDates)&&a.inArray(g.iso,c.enableDates)<0){g.ok=false}else{if(b.checkDates){if((g.recok!==true)||(c.afterToday===true&&b.thisDate.comp()>g.comp)||(c.beforeToday===true&&b.thisDate.comp()<g.comp)||(c.notToday===true&&b.thisDate.comp()===g.comp)||(c.maxDays!==false&&b.maxDate.comp()<g.comp)||(c.minDays!==false&&b.minDate.comp()>g.comp)||(a.isArray(c.blackDays)&&a.inArray(j,c.blackDays)>-1)||(a.isArray(c.blackDates)&&a.inArray(g.iso,c.blackDates)>-1)){g.ok=false}}}if(g.ok){if(c.highDatesRec!==false){for(e=0;e<c.highDatesRec.length;e++){if((c.highDatesRec[e][0]===-1||c.highDatesRec[e][0]===h)&&(c.highDatesRec[e][1]===-1||c.highDatesRec[e][1]===f)&&(c.highDatesRec[e][2]===-1||c.highDatesRec[e][2]===d)){g.rectheme=true}}}if(c.calHighPick&&d===b.presetDay&&(k.d.input.val()!==""|c.defaultValue!==false)){g.theme=c.themeDatePick}else{if(c.calHighToday&&g.comp===b.thisDate.comp()){g.theme=c.themeDateToday}else{if(a.isArray(c.highDatesAlt)&&(a.inArray(g.iso,c.highDatesAlt)>-1)){g.theme=c.themeDateHighAlt}else{if(a.isArray(c.highDates)&&(a.inArray(g.iso,c.highDates)>-1)){g.theme=c.themeDateHigh}else{if(a.isArray(c.highDays)&&(a.inArray(j,c.highDays)>-1)){g.theme=c.themeDayHigh}else{if(a.isArray(c.highDatesRec)&&g.rectheme===true){g.theme=c.themeDateHighRec}}}}}}}return g}});a.extend(a.mobile.datebox.prototype._build,{calbox:function(){var j=this,c=this.options,e,b=false,f="ui-datebox-",l=false,n=false,d=false,k=false,h=false;if(typeof j.d.intHTML!=="boolean"){j.d.intHTML.remove()}j.d.headerText=((j._grabLabel()!==false)?j._grabLabel():j.__("titleDateDialogLabel"));j.d.intHTML=a("<span>");a('<div class="'+f+'gridheader"><div class="'+f+'gridlabel"><h4>'+j._formatter(j.__("calHeaderFormat"),j.theDate)+"</h4></div></div>").appendTo(j.d.intHTML);a("<div class='"+f+"gridplus"+(j.__("isRTL")?"-rtl":"")+"'><a href='#'>"+j.__("nextMonth")+"</a></div>").prependTo(j.d.intHTML.find("."+f+"gridheader")).buttonMarkup({theme:c.themeDate,icon:"arrow-r",inline:true,iconpos:"notext",corners:true,shadow:true}).on(c.clickEventAlt,function(i){i.preventDefault();if(j.calNext){if(j.theDate.getDate()>28){j.theDate.setDate(1)}j._offset("m",1)}});a("<div class='"+f+"gridminus"+(j.__("isRTL")?"-rtl":"")+"'><a href='#'>"+j.__("prevMonth")+"</a></div>").prependTo(j.d.intHTML.find("."+f+"gridheader")).buttonMarkup({theme:c.themeDate,icon:"arrow-l",inline:true,iconpos:"notext",corners:true,shadow:true}).on(c.clickEventAlt,function(i){i.preventDefault();if(j.calPrev){if(j.theDate.getDate()>28){j.theDate.setDate(1)}j._offset("m",-1)}});if(c.calNoHeader===true){j.d.intHTML.find("."+f+"gridheader").remove()}b={today:-1,highlightDay:-1,presetDay:-1,startDay:j.__("calStartDay"),thisDate:new j._date(),maxDate:j.initDate.copy(),minDate:j.initDate.copy(),currentMonth:false,weekMode:0,weekDays:null};b.start=(j.theDate.copy([0],[0,0,1]).getDay()-j.__("calStartDay")+7)%7;b.thisMonth=j.theDate.getMonth();b.thisYear=j.theDate.getFullYear();b.wk=j.theDate.copy([0],[0,0,1]).adj(2,(-1*b.start)+(j.__("calStartDay")===0?1:0)).getDWeek(4);b.end=32-j.theDate.copy([0],[0,0,32,13]).getDate();b.lastend=32-j.theDate.copy([0,-1],[0,0,32,13]).getDate();b.presetDate=(j.d.input.val()==="")?j._startOffset(j._makeDate(j.d.input.val())):j._makeDate(j.d.input.val());b.thisDateArr=b.thisDate.getArray();b.theDateArr=j.theDate.getArray();b.checkDates=(a.inArray(false,[c.afterToday,c.beforeToday,c.notToday,c.maxDays,c.minDays,c.blackDates,c.blackDays])>-1);j.calNext=true;j.calPrev=true;if(b.thisDateArr[0]===b.theDateArr[0]&&b.thisDateArr[1]===b.theDateArr[1]){b.currentMonth=true}if(b.presetDate.comp()===j.theDate.comp()){b.presetDay=b.presetDate.getDate()}if(c.afterToday===true&&(b.currentMonth===true||(b.thisDateArr[1]>=b.theDateArr[1]&&b.theDateArr[0]===b.thisDateArr[0]))){j.calPrev=false}if(c.beforeToday===true&&(b.currentMonth===true||(b.thisDateArr[1]<=b.theDateArr[1]&&b.theDateArr[0]===b.thisDateArr[0]))){j.calNext=false}if(c.minDays!==false){b.minDate.adj(2,-1*c.minDays);if(b.theDateArr[0]===b.minDate.getFullYear()&&b.theDateArr[1]<=b.minDate.getMonth()){j.calPrev=false}}if(c.maxDays!==false){b.maxDate.adj(2,c.maxDays);if(b.theDateArr[0]===b.maxDate.getFullYear()&&b.theDateArr[1]>=b.maxDate.getMonth()){j.calNext=false}}if(c.calUsePickers===true){b.picker=a("<div>",{"class":"ui-grid-a ui-datebox-grid",style:"padding-top: 5px; padding-bottom: 5px;"});b.picker1=a('<div class="ui-block-a"><select name="pickmon"></select></div>').appendTo(b.picker).find("select");b.picker2=a('<div class="ui-block-b"><select name="pickyar"></select></div>').appendTo(b.picker).find("select");for(e=0;e<=11;e++){b.picker1.append(a('<option value="'+e+'"'+((b.thisMonth===e)?' selected="selected"':"")+">"+j.__("monthsOfYear")[e]+"</option>"))}for(e=(b.thisYear-6);e<=b.thisYear+6;e++){b.picker2.append(a('<option value="'+e+'"'+((b.thisYear===e)?' selected="selected"':"")+">"+e+"</option>"))}b.picker1.on("change",function(){j.theDate.setMonth(a(this).val());j.refresh()});b.picker2.on("change",function(){j.theDate.setFullYear(a(this).val());j.refresh()});b.picker.find("select").selectmenu({mini:true,nativeMenu:true});b.picker.appendTo(j.d.intHTML)}l=a('<div class="'+f+'grid">').appendTo(j.d.intHTML);if(c.calShowDays){j._cal_days=j.__("daysOfWeekShort").concat(j.__("daysOfWeekShort"));b.weekDays=a("<div>",{"class":f+"gridrow"}).appendTo(l);if(j.__("isRTL")===true){b.weekDays.css("direction","rtl")}if(c.calShowWeek){a("<div>").addClass(f+"griddate "+f+"griddate-empty "+f+"griddate-label").appendTo(b.weekDays)}for(e=0;e<=6;e++){a("<div>"+j._cal_days[(e+b.startDay)%7]+"</div>").addClass(f+"griddate "+f+"griddate-empty "+f+"griddate-label").appendTo(b.weekDays)}}b.gen=j._cal_gen(b.start,b.lastend,b.end,!c.calOnlyMonth,j.theDate.getMonth());for(var n=0,m=b.gen.length;n<m;n++){k=a("<div>",{"class":f+"gridrow"});if(j.__("isRTL")){k.css("direction","rtl")}if(c.calShowWeek){a("<div>",{"class":f+"griddate "+f+"griddate-empty"}).text("W"+b.wk).appendTo(k);b.wk++;if(b.wk>52&&typeof b.gen[parseInt(n,10)+1]!=="undefined"){b.wk=new Date(b.theDateArr[0],b.theDateArr[1],((j.__("calStartDay")===0)?b.gen[parseInt(n,10)+1][1][0]:b.gen[parseInt(n,10)+1][0][0])).getDWeek(4)}}for(var d=0,g=b.gen[n].length;d<g;d++){if(c.calWeekMode){b.weekMode=b.gen[n][c.calWeekModeDay][0]}if(typeof b.gen[n][d]==="boolean"){a("<div>",{"class":f+"griddate "+f+"griddate-empty"}).appendTo(k)}else{h=j._cal_check(b,b.theDateArr[0],b.gen[n][d][1],b.gen[n][d][0]);if(b.gen[n][d][0]){a("<div>"+String(b.gen[n][d][0])+"</div>").addClass(b.thisMonth===b.gen[n][d][1]?(f+"griddate ui-corner-all ui-btn ui-btn-"+(c.mobVer<140?"up-":"")+h.theme+(h.ok?"":" "+f+"griddate-disable")):(f+"griddate "+f+"griddate-empty")).jqmData("date",((c.calWeekMode)?b.weekMode:b.gen[n][d][0])).jqmData("theme",b.thisMonth===b.gen[n][d][1]?h.theme:"-").jqmData("enabled",h.ok).jqmData("month",b.gen[n][((c.calWeekMode)?c.calWeekModeDay:d)][1]).appendTo(k)}}}if(c.calControlGroup===true){k.find(".ui-corner-all").removeClass("ui-corner-all").eq(0).addClass("ui-corner-left").end().last().addClass("ui-corner-right").addClass("ui-controlgroup-last")}k.appendTo(l)}if(c.calShowWeek){l.find("."+f+"griddate").addClass(f+"griddate-week")}if(c.calShowDateList===true&&c.calDateList!==false){b.datelist=a("<div>");b.datelistpick=a('<select name="pickdate"></select>').appendTo(b.datelist);b.datelistpick.append('<option value="false" selected="selected">'+j.__("calDateListLabel")+"</option>");for(e=0;e<c.calDateList.length;e++){b.datelistpick.append(a('<option value="'+c.calDateList[e][0]+'">'+c.calDateList[e][1]+"</option>"))}b.datelistpick.on("change",function(){b.datelistdate=a(this).val().split("-");j.theDate=new j._date(b.datelistdate[0],b.datelistdate[1]-1,b.datelistdate[2],0,0,0,0);j.d.input.trigger("datebox",{method:"doset"})});b.datelist.find("select").selectmenu({mini:true,nativeMenu:true});b.datelist.appendTo(j.d.intHTML)}if(c.useTodayButton||c.useClearButton){k=a("<div>",{"class":f+"controls"});if(c.useTodayButton){a('<a href="#">'+j.__("calTodayButtonLabel")+"</a>").appendTo(k).buttonMarkup({theme:c.theme,icon:"check",iconpos:"left",corners:true,shadow:true}).on(c.clickEvent,function(i){i.preventDefault();j.theDate=new j._date();j.theDate=new j._date(j.theDate.getFullYear(),j.theDate.getMonth(),j.theDate.getDate(),0,0,0,0);j.d.input.trigger("datebox",{method:"doset"})})}if(c.useClearButton){a('<a href="#">'+j.__("clearButton")+"</a>").appendTo(k).buttonMarkup({theme:c.theme,icon:"delete",iconpos:"left",corners:true,shadow:true}).on(c.clickEventAlt,function(i){i.preventDefault();j.d.input.val("");j.d.input.trigger("datebox",{method:"clear"});j.d.input.trigger("datebox",{method:"close"})})}if(c.useCollapsedBut){k.addClass("ui-datebox-collapse")}k.appendTo(l)}j.d.intHTML.on(c.clickEventAlt+" vmouseover vmouseout","div."+f+"griddate",function(i){if(i.type===c.clickEventAlt){i.preventDefault();if(a(this).jqmData("enabled")){j.theDate.setD(2,1).setD(1,a(this).jqmData("month")).setD(2,a(this).jqmData("date"));j.d.input.trigger("datebox",{method:"set",value:j._formatter(j.__fmt(),j.theDate),date:j.theDate});j.d.input.trigger("datebox",{method:"close"})}}else{if(a(this).jqmData("enabled")&&typeof a(this).jqmData("theme")!=="undefined"&&c.mobVer<140){if(c.calWeekMode!==false&&c.calWeekHigh===true){a(this).parent().find("div").each(function(){j._hoover(this)})}else{j._hoover(this)}}}});j.d.intHTML.on("swipeleft",function(){if(j.calNext){j._offset("m",1)}}).on("swiperight",function(){if(j.calPrev){j._offset("m",-1)}});if(j.wheelExists){j.d.intHTML.on("mousewheel",function(i,o){i.preventDefault();if(o>0&&j.calNext){j.theDate.setD(2,1);j._offset("m",1)}if(o<0&&j.calPrev){j.theDate.setD(2,1);j._offset("m",-1)}})}}})})(jQuery);
/*
 * Parsley.js allows you to verify your form inputs frontend side, without writing a line of javascript. Or so..
 *
 * Author: Guillaume Potier - @guillaumepotier
*/

!function ($) {

  'use strict';

  /**
  * Validator class stores all constraints functions and associated messages.
  * Provides public interface to add, remove or modify them
  *
  * @class Validator
  * @constructor
  */
  var Validator = function ( options ) {
    /**
    * Error messages
    *
    * @property messages
    * @type {Object}
    */
    this.messages = {
        defaultMessage: "This value seems to be invalid."
      , type: {
            email:      "This value should be a valid email."
          , url:        "This value should be a valid url."
          , urlstrict:  "This value should be a valid url."
          , number:     "This value should be a valid number."
          , digits:     "This value should be digits."
          , dateIso:    "This value should be a valid date (YYYY-MM-DD)."
          , alphanum:   "This value should be alphanumeric."
          , phone:      "This value should be a valid phone number."
        }
      , notnull:        "This value should not be null."
      , notblank:       "This value should not be blank."
      , required:       "This value is required."
      , regexp:         "This value seems to be invalid."
      , min:            "This value should be greater than or equal to %s."
      , max:            "This value should be lower than or equal to %s."
      , range:          "This value should be between %s and %s."
      , minlength:      "This value is too short. It should have %s characters or more."
      , maxlength:      "This value is too long. It should have %s characters or less."
      , rangelength:    "This value length is invalid. It should be between %s and %s characters long."
      , mincheck:       "You must select at least %s choices."
      , maxcheck:       "You must select %s choices or less."
      , rangecheck:     "You must select between %s and %s choices."
      , equalto:        "This value should be the same."
    },

    this.init( options );
  };

  Validator.prototype = {

    constructor: Validator

    /**
    * Validator list. Built-in validators functions
    *
    * @property validators
    * @type {Object}
    */
    , validators: {
      notnull: function () {
        return {
          validate: function ( val ) {
            return val.length > 0;
          }
          , priority: 2
        }
      }
      , notblank: function () {
        return {
          validate: function ( val ) {
            return 'string' === typeof val && '' !== val.replace( /^\s+/g, '' ).replace( /\s+$/g, '' );
          }
          , priority: 2
        }
      }
      , required: function () {
        var that = this;
        return {
          validate: function ( val ) {
            // for checkboxes and select multiples. Check there is at least one required value
            if ( 'object' === typeof val ) {
              for ( var i in val ) {
                if ( that.required().validate( val[ i ] ) ) {
                  return true;
                }
              }

              return false;
            }

            return that.notnull().validate( val ) && that.notblank().validate( val );
          }
          , priority: 512
        }
      }
      , type: function () {
        return {
          validate: function ( val, type ) {
            var regExp;

            switch ( type ) {
              case 'number':
                regExp = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                break;
              case 'digits':
                regExp = /^\d+$/;
                break;
              case 'alphanum':
                regExp = /^\w+$/;
                break;
              case 'email':
                regExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
                break;
              case 'url':
                val = new RegExp( '(https?|s?ftp|git)', 'i' ).test( val ) ? val : 'http://' + val;
                /* falls through */
              case 'urlstrict':
                regExp = /^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                break;
              case 'dateIso':
                regExp = /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                break;
              case 'phone':
                regExp = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                break;
              default:
                return false;
            }

            // test regExp if not null
            return '' !== val ? regExp.test( val ) : false;
          }
          , priority: 256
        }
      }
      , regexp: function () {
        return {
          validate: function ( val, regExp, self ) {
            return new RegExp( regExp, self.options.regexpFlag || '' ).test( val );
          }
          , priority: 64
        }
      }
      , minlength: function () {
        return {
          validate: function ( val, min ) {
            return val.length >= min;
          }
          , priority: 32
        }
      }
      , maxlength: function () {
        return {
          validate: function ( val, max ) {
            return val.length <= max;
          }
          , priority: 32
        }
      }
      , rangelength: function () {
        var that = this;
        return {
          validate: function ( val, arrayRange ) {
            return that.minlength().validate( val, arrayRange[ 0 ] ) && that.maxlength().validate( val, arrayRange[ 1 ] );
          }
          , priority: 32
        }
      }
      , min: function () {
        return {
          validate: function ( val, min ) {
            return Number( val ) >= min;
          }
          , priority: 32
        }
      }
      , max: function () {
        return {
          validate: function ( val, max ) {
            return Number( val ) <= max;
          }
          , priority: 32
        }
      }
      , range: function () {
        var that = this;
        return {
          validate: function ( val, arrayRange ) {
            return that.min().validate( val, arrayRange[ 0 ] ) && that.max().validate( val, arrayRange[ 1 ] );
          }
          , priority: 32
        }
      }
      , equalto: function () {
        return {
          validate: function ( val, elem, self ) {
            self.options.validateIfUnchanged = true;
            return val === $( elem ).val();
          }
          , priority: 64
        }
      }
      , remote: function () {
        return {
          validate: function ( val, url, self ) {
            var result = null
              , data = {}
              , dataType = {};

            data[ self.$element.attr( 'name' ) ] = val;

            if ( 'undefined' !== typeof self.options.remoteDatatype )
              dataType = { dataType: self.options.remoteDatatype };

            var manage = function ( isConstraintValid, message ) {
              // remove error message if we got a server message, different from previous message
              if ( 'undefined' !== typeof message && 'undefined' !== typeof self.Validator.messages.remote && message !== self.Validator.messages.remote ) {
                $( self.UI.ulError + ' .remote' ).remove();
              }

              if (false === isConstraintValid) {
                  self.options.listeners.onFieldError( self.element, self.constraints, self );
              } else if (true === isConstraintValid && false === self.options.listeners.onFieldSuccess( self.element, self.constraints, self )) {
                  // if onFieldSuccess returns (bool) false, consider that field si invalid
                  isConstraintValid = false;
              }

              self.updtConstraint( { name: 'remote', valid: isConstraintValid }, message );
              self.manageValidationResult();
            };

            // transform string response into object
            var handleResponse = function ( response ) {
              if ( 'object' === typeof response ) {
                return response;
              }

              try {
                response = $.parseJSON( response );
              } catch ( err ) {}

              return response;
            }

            var manageErrorMessage = function ( response ) {
              return 'object' === typeof response && null !== response ? ( 'undefined' !== typeof response.error ? response.error : ( 'undefined' !== typeof response.message ? response.message : null ) ) : null;
            }

            $.ajax( $.extend( {}, {
                url: url
              , data: data
              , type: self.options.remoteMethod || 'GET'
              , success: function ( response ) {
                response = handleResponse( response );
                manage( 1 === response || true === response || ( 'object' === typeof response && null !== response && 'undefined' !== typeof response.success ), manageErrorMessage( response )
                );
              }
              , error: function ( response ) {
                response = handleResponse( response );
                manage( false, manageErrorMessage( response ) );
              }
            }, dataType ) );

            return result;
          }
          , priority: 64
        }
      }

      /**
      * Aliases for checkboxes constraints
      */
      , mincheck: function () {
        var that = this;
        return {
          validate: function ( obj, val ) { return that.minlength().validate( obj, val ) }
          , priority: 32
        }
      }
      , maxcheck: function () {
        var that = this;
        return {
          validate: function ( obj, val ) { return that.maxlength().validate( obj, val ) }
          , priority: 32
        }
      }
      , rangecheck: function () {
        var that = this;
        return {
          validate: function ( obj, arrayRange ) { return that.rangelength().validate( obj, arrayRange ) }
          , priority: 32
        }
      }
    }

    /*
    * Register custom validators and messages
    */
    , init: function ( options ) {
      var customValidators = options.validators
        , customMessages = options.messages
        , key;

      for ( key in customValidators ) {
        this.addValidator(key, customValidators[ key ]);
      }

      for ( key in customMessages ) {
        this.addMessage(key, customMessages[ key ]);
      }
    }

    /**
    * Replace %s placeholders by values
    *
    * @method formatMesssage
    * @param {String} message Message key
    * @param {Mixed} args Args passed by validators functions. Could be string, number or object
    * @return {String} Formatted string
    */
    , formatMesssage: function ( message, args ) {

      if ( 'object' === typeof args ) {
        for ( var i in args ) {
          message = this.formatMesssage( message, args[ i ] );
        }

        return message;
      }

      return 'string' === typeof message ? message.replace( new RegExp( '%s', 'i' ), args ) : '';
    }

    /**
    * Add / override a validator in validators list
    *
    * @method addValidator
    * @param {String} name Validator name.
    * @param {Function} fn Validator. Must return { validator: fn(), priority: int }
    */
    , addValidator: function ( name, fn ) {
      if ('undefined' === typeof fn().validate) {
        throw new Error( 'Validator `' + name + '` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general' );
      }

      // add default prioirty if not given.
      if ('undefined' === typeof fn().priority) {
        fn = {
            validate: fn().validate
          , priority: 32
        };

        // Warn if possible
        if (window.console && window.console.warn) {
          window.console.warn( 'Validator `' + name + '` should have a priority. Default priority 32 given' );
        }
      }

      this.validators[ name ] = fn;
    }

    /**
    * Add / override error message
    *
    * @method addMessage
    * @param {String} name Message name. Will automatically be binded to validator with same name
    * @param {String} message Message
    */
    , addMessage: function ( key, message, type ) {

      if ( 'undefined' !== typeof type && true === type ) {
        this.messages.type[ key ] = message;
        return;
      }

      // custom types messages are a bit tricky cuz' nested ;)
      if ( 'type' === key ) {
        for ( var i in message ) {
          this.messages.type[ i ] = message[ i ];
        }

        return;
      }

      this.messages[ key ] = message;
    }
  };

  var ParsleyUI = function ( ParsleyInstance ) {
    this.init( ParsleyInstance );
  };

  ParsleyUI.prototype = {

    constructor: ParsleyUI

    , init: function ( ParsleyInstance ) {
      this.ParsleyInstance = ParsleyInstance;
      this.hash = ParsleyInstance.hash;
      this.options = this.ParsleyInstance.options;
      this.errorClassHandler = this.options.errors.classHandler( this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox ) || this.ParsleyInstance.$element;
      this.ulErrorManagement();
    }

    /**
    * Manage ul error Container
    *
    * @private
    * @method ulErrorManagement
    */
    , ulErrorManagement: function () {
      this.ulError = '#' + this.hash;
      this.ulTemplate = $( this.options.errors.errorsWrapper ).attr( 'id', this.hash ).addClass( 'parsley-error-list' );
    }

    /**
    * Remove li / ul error
    *
    * @method removeError
    * @param  {String} constraintName Method Name
    * @return ParsleyUI
    */
    , removeError: function ( constraintName ) {
      var liError = this.ulError + ' .' + constraintName
        , that = this;

      this.options.animate ? $( liError ).fadeOut( this.options.animateDuration, function () {
        $( this ).remove();

        if ( that.ulError && $( that.ulError ).children().length === 0 ) {
          that.removeErrors();
        } } ) : $( liError ).remove();

        return this;
    }

    /**
    * Add li error
    *
    * @method addError
    * @param  {Object} { minlength: "error message for minlength constraint" }
    * @return ParsleyUI
    */
    , addError: function ( error ) {
      for ( var constraint in error ) {
        var liTemplate = $( this.options.errors.errorElem ).addClass( constraint );

        $( this.ulError ).append( this.options.animate ? $( liTemplate ).html( error[ constraint ] ).hide().fadeIn( this.options.animateDuration ) : $( liTemplate ).html( error[ constraint ] ) );
      }

      return this;
    }

    /**
    * Update existing error if text has changed
    *
    * @method updateError
    * @param  {Object} { minlength: "error message for minlength constraint" }
    * @return ParsleyUI
    */
    , updateError: function ( error ) {
      for ( var constraint in error ) {
        if ( error[ constraint ] !==  $( this.ulError +  " > li." + constraint ).html() ) {
          this.removeError( constraint ).addError( error );
        }
      }

      return this;
    }

    /**
    * Remove all ul / li errors
    *
    * @method removeErrors
    * @return ParsleyUI
    */
    , removeErrors: function () {
      this.options.animate ? $( this.ulError ).fadeOut( this.options.animateDuration, function () { $( this ).remove(); } ) : $( this.ulError ).remove();

      return this;
    }

    /**
    * Remove ul errors and parsley error or success classes
    *
    * @method reset
    * @return ParsleyUI
    */
    , reset: function () {
      this.ParsleyInstance.valid = null;
      this.removeErrors();
      this.ParsleyInstance.validatedOnce = false;
      this.errorClassHandler.removeClass( this.options.successClass ).removeClass( this.options.errorClass );

      for ( var constraint in this.constraints ) {
        this.constraints[ constraint ].valid = null;
      }

      return this;
    }

    /**
    * Add li / ul errors messages
    *
    * @method manageError
    * @param  {Object} constraint
    * @return ParsleyUI
    */
    , manageError: function ( constraint ) {
      // display ulError container if it has been removed previously (or never shown)
      if ( !$( this.ulError ).length ) {
        this.manageErrorContainer();
      }

      // TODO: refacto properly
      // if required constraint but field is not null, do not display
      if ( 'required' === constraint.name && null !== this.ParsleyInstance.getVal() && this.ParsleyInstance.getVal().length > 0 ) {
        return this;

      // if empty required field and non required constraint fails, do not display
      } else if ( this.ParsleyInstance.isRequired && 'required' !== constraint.name && ( null === this.ParsleyInstance.getVal() || 0 === this.ParsleyInstance.getVal().length ) ) {
        this.removeError( constraint.name );

        return this;
      }

      // TODO: refacto error name w/ proper & readable function
      var constraintName = constraint.name
        , liClass = false !== this.options.errorMessage ? 'custom-error-message' : constraintName
        , liError = {}
        , message = false !== this.options.errorMessage ? this.options.errorMessage : ( constraint.name === 'type' ?
            this.ParsleyInstance.Validator.messages[ constraintName ][ constraint.requirements ] : ( 'undefined' === typeof this.ParsleyInstance.Validator.messages[ constraintName ] ?
              this.ParsleyInstance.Validator.messages.defaultMessage : this.ParsleyInstance.Validator.formatMesssage( this.ParsleyInstance.Validator.messages[ constraintName ], constraint.requirements ) ) );

      liError[ liClass ] = message;

      // add liError if not shown. update if already exist
      !$( this.ulError + ' .' + liClass ).length ? this.addError( liError ) : this.updateError( liError );

      return this;
    }

    /**
    * Create ul error container
    *
    * @method manageErrorContainer
    * @return ParsleyUI
    */
    , manageErrorContainer: function () {
      var errorContainer = this.options.errorContainer || this.options.errors.container( this.ParsleyInstance.element, this.ParsleyInstance.isRadioOrCheckbox )
        , ulTemplate = this.options.animate ? this.ulTemplate.css('display', '') : this.ulTemplate;

      if ( 'undefined' !== typeof errorContainer ) {
        $( errorContainer ).append( ulTemplate );
        return;
      }

      !this.ParsleyInstance.isRadioOrCheckbox ? this.ParsleyInstance.$element.after( ulTemplate ) : this.ParsleyInstance.$element.parent().after( ulTemplate );

      return this;
    }
  };

  /**
  * ParsleyField class manage each form field inside a validated Parsley form.
  * Returns if field valid or not depending on its value and constraints
  * Manage field error display and behavior, event triggers and more
  *
  * @class ParsleyField
  * @constructor
  */
  var ParsleyField = function ( element, options, type ) {
    this.options = options;

    // if type is ParsleyFieldMultiple, just return this. used for clone
    if ( type === 'ParsleyFieldMultiple' ) {
      return this;
    }

    this.init( element, type || 'ParsleyField' );
  };

  ParsleyField.prototype = {

    constructor: ParsleyField

    /**
    * Set some properties, bind constraint validators and validation events
    *
    * @method init
    * @param {Object} element
    * @param {Object} options
    */
    , init: function ( element, type ) {
      this.type = type;
      this.valid = true;
      this.element = element;
      this.validatedOnce = false;
      this.$element = $( element );
      this.val = this.$element.val();
      this.Validator = new Validator( this.options );
      this.isRequired = false;
      this.constraints = {};

      // overriden by ParsleyItemMultiple if radio or checkbox input
      if ( 'undefined' === typeof this.isRadioOrCheckbox ) {
        this.isRadioOrCheckbox = false;
        this.hash = this.generateHash();
      }

      // error ul dom management done only once at init
      this.UI = new ParsleyUI( this );

      // bind some html5 properties
      if ( this.options.useHtml5Constraints ) {
        this.bindHtml5Constraints();
      }

      // bind validators to field
      this.addConstraints();

      // bind parsley events if validators have been registered
      if ( this.hasConstraints() ) {
        this.bindValidationEvents();
      }
    }

    , setParent: function ( elem ) {
      this.$parent = $( elem );
    }

    , getParent: function () {
      return this.$parent;
    }

    /**
    * Bind some extra html5 types / validators
    *
    * @private
    * @method bindHtml5Constraints
    */
    , bindHtml5Constraints: function () {
      // add html5 required support + class required support
      if ( this.$element.hasClass( 'required' ) || this.$element.attr( 'required' ) ) {
        this.options.required = true;
      }

      // add html5 supported types & options
      var type = this.$element.attr( 'type' );
      if ( 'undefined' !== typeof type && new RegExp( type, 'i' ).test( 'email url number range tel' ) ) {
        this.options.type = 'tel' === type ? 'phone' : type;

        // number and range types could have min and/or max values
        if ( new RegExp( this.options.type, 'i' ).test( 'number range' ) ) {
          this.options.type = 'number';

          // double condition to support jQuery and Zepto.. :(
          if ( 'undefined' !== typeof this.$element.attr( 'min' ) && this.$element.attr( 'min' ).length ) {
            this.options.min = this.$element.attr( 'min' );
          }

          if ( 'undefined' !== typeof this.$element.attr( 'max' ) && this.$element.attr( 'max' ).length ) {
            this.options.max = this.$element.attr( 'max' );
          }
        }
      }

      if ( 'string' === typeof this.$element.attr( 'pattern' ) && this.$element.attr( 'pattern' ).length ) {
          this.options.regexp = this.$element.attr( 'pattern' );
      }

    }

    /**
    * Attach field validators functions passed through data-api
    *
    * @private
    * @method addConstraints
    */
    , addConstraints: function () {
      for ( var constraint in this.options ) {
        var addConstraint = {};
        addConstraint[ constraint ] = this.options[ constraint ];
        this.addConstraint( addConstraint, true, false );
      }
    }

    /**
    * Dynamically add a new constraint to a field
    *
    * @method addConstraint
    * @param {Object} constraint { name: requirements }
    */
    , addConstraint: function ( constraint, doNotUpdateValidationEvents, sort ) {
        for ( var name in constraint ) {
          name = name.toLowerCase();

          if ( 'function' === typeof this.Validator.validators[ name ] ) {
            this.constraints[ name ] = {
                name: name
              , requirements: constraint[ name ]
              , valid: null
            }

            if ( name === 'required' ) {
              this.isRequired = true;
            }

            this.addCustomConstraintMessage( name );
          }
        }

        // force field validation next check and reset validation events
        if ( 'undefined' === typeof doNotUpdateValidationEvents ) {
          this.bindValidationEvents();
        }
    }

    /**
    * Dynamically update an existing constraint to a field.
    * Simple API: { name: requirements }
    *
    * @method updtConstraint
    * @param {Object} constraint
    */
    , updateConstraint: function ( constraint, message ) {
      for ( var name in constraint ) {
        this.updtConstraint( { name: name, requirements: constraint[ name ], valid: null }, message );
      }
    }

    /**
    * Dynamically update an existing constraint to a field.
    * Complex API: { name: name, requirements: requirements, valid: boolean }
    *
    * @method updtConstraint
    * @param {Object} constraint
    */
    , updtConstraint: function ( constraint, message ) {
      this.constraints[ constraint.name ] = $.extend( true, this.constraints[ constraint.name ], constraint );

      if ( 'string' === typeof message ) {
        if ( constraint.name ===  'type' )
          this.Validator.messages[ constraint.name ][ constraint.requirements ] = message ;
        else
          this.Validator.messages[ constraint.name ] = message ;
      }

      // force field validation next check and reset validation events
      this.bindValidationEvents();
    }

    /**
    * Dynamically remove an existing constraint to a field.
    *
    * @method removeConstraint
    * @param {String} constraintName
    */
    , removeConstraint: function ( constraintName ) {
      var constraintName = constraintName.toLowerCase();

      delete this.constraints[ constraintName ];

      if ( constraintName === 'required' ) {
        this.isRequired = false;
      }

      // if there are no more constraint, reset errors and validation state
      if ( !this.hasConstraints() ) {
        this.UI.reset();
        return;
      }

      this.bindValidationEvents();
    }

    /**
    * Add custom constraint message, passed through data-API
    *
    * @private
    * @method addCustomConstraintMessage
    * @param constraint
    */
    , addCustomConstraintMessage: function ( constraint ) {
      // custom message type data-type-email-message -> typeEmailMessage | data-minlength-error => minlengthMessage
      var customMessage = constraint
        + ( 'type' === constraint && 'undefined' !== typeof this.options[ constraint ] ? this.options[ constraint ].charAt( 0 ).toUpperCase() + this.options[ constraint ].substr( 1 ) : '' )
        + 'Message';

      if ( 'undefined' !== typeof this.options[ customMessage ] ) {
        this.Validator.addMessage( 'type' === constraint ? this.options[ constraint ] : constraint, this.options[ customMessage ], 'type' === constraint );
      }
    }

    /**
    * Bind validation events on a field
    *
    * @private
    * @method bindValidationEvents
    */
    , bindValidationEvents: function () {
      // this field has validation events, that means it has to be validated
      this.valid = null;
      this.$element.addClass( 'parsley-validated' );

      // remove eventually already binded events
      this.$element.off( '.' + this.type );

      // force add 'change' event if async remote validator here to have result before form submitting
      if ( this.options.remote && !new RegExp( 'change', 'i' ).test( this.options.trigger ) ) {
        this.options.trigger = !this.options.trigger ? 'change' : ' change';
      }

      // always bind keyup event, for better UX when a field is invalid
      var triggers = ( !this.options.trigger ? '' : this.options.trigger )
        + ( new RegExp( 'key', 'i' ).test( this.options.trigger ) ? '' : ' keyup' );

      // always bind change event, for better UX when a select is invalid
      if ( this.$element.is( 'select' ) ) {
        triggers += new RegExp( 'change', 'i' ).test( triggers ) ? '' : ' change';
      }

      // trim triggers to bind them correctly with .on()
      triggers = triggers.replace( /^\s+/g , '' ).replace( /\s+$/g , '' );

      this.$element.on( ( triggers + ' ' ).split( ' ' ).join( '.' + this.type + ' ' ), false, $.proxy( this.eventValidation, this ) );
    }

    /**
    * Hash management. Used for ul error
    *
    * @method generateHash
    * @returns {String} 5 letters unique hash
    */
    , generateHash: function () {
      return 'parsley-' + ( Math.random() + '' ).substring( 2 );
    }

    /**
    * Public getHash accessor
    *
    * @method getHash
    * @returns {String} hash
    */
    , getHash: function () {
      return this.hash;
    }

    /**
    * Returns field val needed for validation
    * Special treatment for radio & checkboxes
    *
    * @method getVal
    * @returns {String} val
    */
    , getVal: function () {
      if ('undefined' !== typeof this.$element.domApi( this.options.namespace )[ 'value' ]) {
        return this.$element.domApi( this.options.namespace )[ 'value' ];
      }

      return this.$element.val();
    }

    /**
    * Called when validation is triggered by an event
    * Do nothing if val.length < this.options.validationMinlength
    *
    * @method eventValidation
    * @param {Object} event jQuery event
    */
    , eventValidation: function ( event ) {
      var val = this.getVal();

      // do nothing on keypress event if not explicitely passed as data-trigger and if field has not already been validated once
      if ( event.type === 'keyup' && !/keyup/i.test( this.options.trigger ) && !this.validatedOnce ) {
        return true;
      }

      // do nothing on change event if not explicitely passed as data-trigger and if field has not already been validated once
      if ( event.type === 'change' && !/change/i.test( this.options.trigger ) && !this.validatedOnce ) {
        return true;
      }

      // start validation process only if field has enough chars and validation never started
      if ( !this.isRadioOrCheckbox && this.getLength(val) < this.options.validationMinlength && !this.validatedOnce ) {
        return true;
      }

      this.validate();
    }

    /**
     * Get the length of a given value
     *
     * @method getLength
     * @return {int} The length of the value
     */
    , getLength: function ( val ) {
      return !val || !val.hasOwnProperty( 'length' ) ? 0 : val.length;
    }

    /**
    * Return if field verify its constraints
    *
    * @method isValid
    * @return {Boolean} Is field valid or not
    */
    , isValid: function () {
      return this.validate( false );
    }

    /**
    * Return if field has constraints
    *
    * @method hasConstraints
    * @return {Boolean} Is field has constraints or not
    */
    , hasConstraints: function () {
      for ( var constraint in this.constraints ) {
        return true;
      }

      return false;
    }

    /**
    * Validate a field & display errors
    *
    * @method validate
    * @param {Boolean} errorBubbling set to false if you just want valid boolean without error bubbling next to fields
    * @return {Boolean} Is field valid or not
    */
    , validate: function ( errorBubbling ) {
      var val = this.getVal()
        , valid = null;

      // do not even bother trying validating a field w/o constraints
      if ( !this.hasConstraints() ) {
        return null;
      }

      // do not validate excluded fields
      if ( this.$element.is( this.options.excluded ) ) {
        return null;
      }

      // reset Parsley validation if onFieldValidate returns true, or if field is empty and not required
      if ( this.options.listeners.onFieldValidate( this.element, this ) || ( '' === val && !this.isRequired ) ) {
        this.UI.reset();
        return null;
      }

      // do not validate a field already validated and unchanged !
      if ( !this.needsValidation( val ) ) {
        return this.valid;
      }

      valid = this.applyValidators();

      if ( 'undefined' !== typeof errorBubbling ? errorBubbling : this.options.showErrors ) {
        this.manageValidationResult();
      }

      return valid;
    }

    /**
    * Check if value has changed since previous validation
    *
    * @method needsValidation
    * @param value
    * @return {Boolean}
    */
    , needsValidation: function ( val ) {
      if ( !this.options.validateIfUnchanged && this.valid !== null && this.val === val && this.validatedOnce ) {
        return false;
      }

      this.val = val;
      return this.validatedOnce = true;
    }

    /**
    * Loop through every fields validators
    * Adds errors after unvalid fields
    *
    * @method applyValidators
    * @return {Mixed} {Boolean} If field valid or not, null if not validated
    */
    , applyValidators: function () {
      var valid = null;

      for ( var constraint in this.constraints ) {
        var result = this.Validator.validators[ this.constraints[ constraint ].name ]().validate( this.val, this.constraints[ constraint ].requirements, this );

        if ( false === result ) {
          valid = false;
          this.constraints[ constraint ].valid = valid;
        } else if ( true === result ) {
          this.constraints[ constraint ].valid = true;
          valid = false !== valid;
        }
      }

      // listeners' ballet
      if (false === valid) {
        this.options.listeners.onFieldError( this.element, this.constraints, this );
      } else if (true === valid && false === this.options.listeners.onFieldSuccess( this.element, this.constraints, this )) {
        // if onFieldSuccess returns (bool) false, consider that field si invalid
        valid = false;
      }

      return valid;
    }

    /**
    * Fired when all validators have be executed
    * Returns true or false if field is valid or not
    * Display errors messages below failed fields
    * Adds parsley-success or parsley-error class on fields
    *
    * @method manageValidationResult
    * @return {Boolean} Is field valid or not
    */
    , manageValidationResult: function () {
      var valid = null
        , errors = [];

      for ( var constraint in this.constraints ) {
        if ( false === this.constraints[ constraint ].valid ) {
          errors.push( this.constraints[ constraint ]);
          valid = false;
        } else if ( true === this.constraints[ constraint ].valid ) {
          this.UI.removeError( this.constraints[ constraint ].name );
          valid = false !== valid;
        }
      }

      this.valid = valid;

      if ( true === this.valid ) {
        this.UI.removeErrors();
        this.UI.errorClassHandler.removeClass( this.options.errorClass ).addClass( this.options.successClass );

        return true;
      } else if ( false === this.valid ) {
        if ( true === this.options.priorityEnabled ) {
          var maxPriority = 0, constraint, priority;
          for ( var i = 0; i < errors.length; i++ ) {
            priority = this.Validator.validators[ errors[ i ].name ]().priority;

            if ( priority > maxPriority ) {
              constraint = errors[ i ];
              maxPriority = priority;
            }
          }
          this.UI.manageError( constraint );
        } else {
          for ( var i = 0; i < errors.length; i++ )
            this.UI.manageError( errors[ i ] );
        }

        this.UI.errorClassHandler.removeClass( this.options.successClass ).addClass( this.options.errorClass );
        return false;
      }

      // remove li error, and ul error if no more li inside
      if ( this.UI.ulError && $( this.ulError ).children().length === 0 ) {
        this.UI.removeErrors();
      }

      return valid;
    }

    /**
    * Add custom listeners
    *
    * @param {Object} { listener: function () {} }, eg { onFormValidate: function ( valid, event, focus ) { ... } }
    */
    , addListener: function ( object ) {
      for ( var listener in object ) {
        this.options.listeners[ listener ] = object[ listener ];
      }
    }

    /**
    * Destroy parsley field instance
    *
    * @private
    * @method destroy
    */
    , destroy: function () {
      this.$element.removeClass( 'parsley-validated' );
      this.UI.reset();
      this.$element.off( '.' + this.type ).removeData( this.type );
    }
  };

  /**
  * ParsleyFieldMultiple override ParsleyField for checkbox and radio inputs
  * Pseudo-heritance to manage divergent behavior from ParsleyItem in dedicated methods
  *
  * @class ParsleyFieldMultiple
  * @constructor
  */
  var ParsleyFieldMultiple = function ( element, options, type ) {
    this.initMultiple( element, options );
    this.inherit( element, options );
    this.Validator = new Validator( options );

    // call ParsleyField constructor
    this.init( element, type || 'ParsleyFieldMultiple' );
  };

  ParsleyFieldMultiple.prototype = {

    constructor: ParsleyFieldMultiple

    /**
    * Set some specific properties, call some extra methods to manage radio / checkbox
    *
    * @method init
    * @param {Object} element
    * @param {Object} options
    */
    , initMultiple: function ( element, options ) {
      this.element = element;
      this.$element = $( element );
      this.group = options.group || false;
      this.hash = this.getName();
      this.siblings = this.group ? '[' + options.namespace + 'group="' + this.group + '"]' : 'input[name="' + this.$element.attr( 'name' ) + '"]';
      this.isRadioOrCheckbox = true;
      this.isRadio = this.$element.is( 'input[type=radio]' );
      this.isCheckbox = this.$element.is( 'input[type=checkbox]' );
      this.errorClassHandler = options.errors.classHandler( element, this.isRadioOrCheckbox ) || this.$element.parent();
    }

    /**
    * Set specific constraints messages, do pseudo-heritance
    *
    * @private
    * @method inherit
    * @param {Object} element
    * @param {Object} options
    */
    , inherit: function ( element, options ) {
      var clone = new ParsleyField( element, options, 'ParsleyFieldMultiple' );

      for ( var property in clone ) {
        if ( 'undefined' === typeof this[ property ] ) {
          this[ property ] = clone [ property ];
        }
      }
    }

    /**
    * Set specific constraints messages, do pseudo-heritance
    *
    * @method getName
    * @returns {String} radio / checkbox hash is cleaned 'name' or data-group property
    */
   , getName: function () {
     if ( this.group ) {
       return 'parsley-' + this.group;
     }

     if ( 'undefined' === typeof this.$element.attr( 'name' ) ) {
       throw "A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";
     }

     return 'parsley-' + this.$element.attr( 'name' ).replace( /(:|\.|\[|\]|\$)/g, '' );
   }

   /**
   * Special treatment for radio & checkboxes
   * Returns checked radio or checkboxes values
   *
   * @method getVal
   * @returns {String} val
   */
   , getVal: function () {
      if ( this.isRadio ) {
        return $( this.siblings + ':checked' ).val() || '';
      }

      if ( this.isCheckbox ) {
        var values = [];

        $( this.siblings + ':checked' ).each( function () {
          values.push( $( this ).val() );
        } );

        return values;
      }
   }

   /**
   * Bind validation events on a field
   *
   * @private
   * @method bindValidationEvents
   */
   , bindValidationEvents: function () {
     // this field has validation events, that means it has to be validated
     this.valid = null;
     this.$element.addClass( 'parsley-validated' );

     // remove eventually already binded events
     this.$element.off( '.' + this.type );

      // always bind keyup event, for better UX when a field is invalid
      var self = this
        , triggers = ( !this.options.trigger ? '' : this.options.trigger )
        + ( new RegExp( 'change', 'i' ).test( this.options.trigger ) ? '' : ' change' );

      // trim triggers to bind them correctly with .on()
      triggers = triggers.replace( /^\s+/g , '' ).replace( /\s+$/g ,'' );

     // bind trigger event on every siblings
     $( this.siblings ).each(function () {
       $( this ).on( triggers.split( ' ' ).join( '.' + self.type + ' ' ) , false, $.proxy( self.eventValidation, self ) );
     } )
   }
  };

  /**
  * ParsleyForm class manage Parsley validated form.
  * Manage its fields and global validation
  *
  * @class ParsleyForm
  * @constructor
  */
  var ParsleyForm = function ( element, options, type ) {
    this.init( element, options, type || 'parsleyForm' );
  };

  ParsleyForm.prototype = {

    constructor: ParsleyForm

    /* init data, bind jQuery on() actions */
    , init: function ( element, options, type ) {
      this.type = type;
      this.items = [];
      this.$element = $( element );
      this.options = options;
      var self = this;

      this.$element.find( options.inputs ).each( function () {
        self.addItem( this );
      });

      this.$element.on( 'submit.' + this.type , false, $.proxy( this.validate, this ) );
    }

    /**
    * Add custom listeners
    *
    * @param {Object} { listener: function () {} }, eg { onFormValidate: function ( valid, event, focus ) { ... } }
    */
    , addListener: function ( object ) {
      for ( var listener in object ) {
        if ( new RegExp( 'Field' ).test( listener ) ) {
          for ( var item = 0; item < this.items.length; item++ ) {
            this.items[ item ].addListener( object );
          }
        } else {
          this.options.listeners[ listener ] = object[ listener ];
        }
      }
    }

    /**
    * Adds a new parsleyItem child to ParsleyForm
    *
    * @method addItem
    * @param elem
    */
    , addItem: function ( elem ) {
      var ParsleyField = $( elem ).parsley( this.options );
      ParsleyField.setParent( this );

      this.items.push( ParsleyField );
    }

    /**
    * Removes a parsleyItem child from ParsleyForm
    *
    * @method removeItem
    * @param elem
    * @return {Boolean}
    */
    , removeItem: function ( elem ) {
      var parsleyItem = $( elem ).parsley();

      // identify & remove item if same Parsley hash
      for ( var i = 0; i < this.items.length; i++ ) {
        if ( this.items[ i ].hash === parsleyItem.hash ) {
          this.items[ i ].destroy();
          this.items.splice( i, 1 );
          return true;
        }
      }

      return false;
    }

    /**
    * Process each form field validation
    * Display errors, call custom onFormValidate() function
    *
    * @method validate
    * @param {Object} event jQuery Event
    * @return {Boolean} Is form valid or not
    */
    , validate: function ( event ) {
      var valid = true;
      this.focusedField = false;

      for ( var item = 0; item < this.items.length; item++ ) {
        if ( 'undefined' !== typeof this.items[ item ] && false === this.items[ item ].validate() ) {
          valid = false;

          if ( !this.focusedField && 'first' === this.options.focus || 'last' === this.options.focus ) {
            this.focusedField = this.items[ item ].$element;
          }
        }
      }

      // form is invalid, focus an error field depending on focus policy
      if ( this.focusedField && !valid ) {
        // Scroll smoothly
        if ( this.options.scrollDuration > 0 ) {
          var that = this,
              top = this.focusedField.offset().top - $( window ).height() / 2; // Center the window on the field

          $( 'html, body' ).animate( {
              scrollTop: top
            },
            this.options.scrollDuration,
            function () {
              that.focusedField.focus();
            }
          );
        // Just focus on the field and let the browser do the rest
        } else {
          this.focusedField.focus();
        }
      }

      // if onFormValidate returns (bool) false, form won't be submitted, even if valid
      var onFormValidate = this.options.listeners.onFormValidate( valid, event, this );
      if ('undefined' !== typeof onFormValidate) {
        return onFormValidate;
      }

      return valid;
    }

    , isValid: function () {
      for ( var item = 0; item < this.items.length; item++ ) {
        if ( false === this.items[ item ].isValid() ) {
          return false;
        }
      }

      return true;
    }

    /**
    * Remove all errors ul under invalid fields
    *
    * @method removeErrors
    */
    , removeErrors: function () {
      for ( var item = 0; item < this.items.length; item++ ) {
        this.items[ item ].parsley( 'reset' );
      }
    }

    /**
    * destroy Parsley binded on the form and its fields
    *
    * @method destroy
    */
    , destroy: function () {
      for ( var item = 0; item < this.items.length; item++ ) {
        this.items[ item ].destroy();
      }

      this.$element.off( '.' + this.type ).removeData( this.type );
    }

    /**
    * reset Parsley binded on the form and its fields
    *
    * @method reset
    */
    , reset: function () {
      for ( var item = 0; item < this.items.length; item++ ) {
        this.items[ item ].UI.reset();
      }
    }
  };

  /**
  * Parsley plugin definition
  * Provides an interface to access public Validator, ParsleyForm and ParsleyField functions
  *
  * @class Parsley
  * @constructor
  * @param {Mixed} Options. {Object} to configure Parsley or {String} method name to call a public class method
  * @param {Function} Callback function
  * @return {Mixed} public class method return
  */
  $.fn.parsley = function ( option, fn ) {
    var namespace = { namespace: $( this ).data( 'parsleyNamespace' ) ? $( this ).data( 'parsleyNamespace' ) : ( 'undefined' !== typeof option && 'undefined' !== typeof option.namespace ? option.namespace : $.fn.parsley.defaults.namespace ) }
      , options = $.extend( true, {}, $.fn.parsley.defaults, 'undefined' !== typeof window.ParsleyConfig ? window.ParsleyConfig : {}, option, this.domApi( namespace.namespace ) )
      , newInstance = null
      , args = Array.prototype.slice.call(arguments, 1);

    function bind ( self, type ) {
      var parsleyInstance = $( self ).data( type );

      // if data never binded or we want to clone a build (for radio & checkboxes), bind it right now!
      if ( !parsleyInstance ) {
        switch ( type ) {
          case 'parsleyForm':
            parsleyInstance = new ParsleyForm( self, options, 'parsleyForm' );
            break;
          case 'parsleyField':
            parsleyInstance = new ParsleyField( self, options, 'parsleyField' );
            break;
          case 'parsleyFieldMultiple':
            parsleyInstance = new ParsleyFieldMultiple( self, options, 'parsleyFieldMultiple' );
            break;
          default:
            return;
        }

        $( self ).data( type, parsleyInstance );
      }

      // here is our parsley public function accessor
      if ( 'string' === typeof option && 'function' === typeof parsleyInstance[ option ] ) {
        var response = parsleyInstance[ option ].apply( parsleyInstance, args );

        return 'undefined' !== typeof response ? response : $( self );
      }

      return parsleyInstance;
    }

    // if a form elem is given, bind all its input children
    if ( $( this ).is( 'form' ) || 'undefined' !== typeof $( this ).domApi( namespace.namespace )[ 'bind' ] ) {
      newInstance = bind ( $( this ), 'parsleyForm' );

    // if it is a Parsley supported single element, bind it too, except inputs type hidden
    // add here a return instance, cuz' we could call public methods on single elems with data[ option ]() above
    } else if ( $( this ).is( options.inputs ) ) {
      newInstance = bind( $( this ), !$( this ).is( 'input[type=radio], input[type=checkbox]' ) ? 'parsleyField' : 'parsleyFieldMultiple' );
    }

    return 'function' === typeof fn ? fn() : newInstance;
  };

  /* PARSLEY auto-binding
  * =================================================== */
  $( window ).on( 'load', function () {
    $( '[parsley-validate], [data-parsley-validate]' ).each( function () {
      $( this ).parsley();
    } );
  } );

  /* PARSLEY DOM API
  * =================================================== */
  $.fn.domApi = function ( namespace ) {
    var attribute,
      obj = {}
      , regex = new RegExp("^" + namespace, 'i');

    if ( 'undefined' === typeof this[ 0 ] ) {
      return {};
    }

    for ( var i in this[ 0 ].attributes ) {
      attribute = this[ 0 ].attributes[ i ];

      if ( 'undefined' !== typeof attribute && null !== attribute && attribute.specified && regex.test( attribute.name ) ) {
        obj[ camelize( attribute.name.replace( namespace, '' ) ) ] = deserializeValue( attribute.value );
      }
    }

    return obj;
  };

  // Zepto deserializeValue function
  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // JSON    => parse if valid
  // String  => self
  var deserializeValue = function( value ) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !isNaN( num = Number( value ) ) ? num :
          /^[\[\{]/.test( value ) ? $.parseJSON( value ) :
          value )
        : value;
    } catch ( e ) {
      return value;
    }
  };

  // Zepto camelize function
  var camelize = function ( str ) {
    return str.replace( /-+(.)?/g, function ( match, chr ) {
      return chr ? chr.toUpperCase() : '';
    } )
  };

  // Zepto dasherize function
  var dasherize = function ( str ) {
    return str.replace( /::/g, '/' )
           .replace( /([A-Z]+)([A-Z][a-z])/g, '$1_$2' )
           .replace( /([a-z\d])([A-Z])/g, '$1_$2' )
           .replace( /_/g, '-' )
           .toLowerCase()
  };

  /**
  * Parsley plugin configuration
  *
  * @property $.fn.parsley.defaults
  * @type {Object}
  */
  $.fn.parsley.defaults = {
    // basic data-api overridable properties here..
    namespace: 'parsley-'                       // DOM-API, default 'parsley-'. W3C valid would be 'data-parsley-' but quite ugly
    , inputs: 'input, textarea, select'         // Default supported inputs.
    , excluded: 'input[type=hidden], input[type=file], :disabled' // Do not validate input[type=hidden] & :disabled.
    , priorityEnabled: true                     // Will display only one error at the time depending on validators priorities
    , trigger: false                            // $.Event() that will trigger validation. eg: keyup, change..
    , animate: true                             // fade in / fade out error messages
    , animateDuration: 300                      // fadein/fadout ms time
    , scrollDuration: 500                       // Duration in ms time of the window scroll when focusing on invalid field (0 = no scroll)
    , focus: 'first'                            // 'fist'|'last'|'none' which error field would have focus first on form validation
    , validationMinlength: 3                    // If trigger validation specified, only if value.length > validationMinlength
    , successClass: 'parsley-success'           // Class name on each valid input
    , errorClass: 'parsley-error'               // Class name on each invalid input
    , errorMessage: false                       // Customize an unique error message showed if one constraint fails
    , validators: {}                            // Add your custom validators functions
    , showErrors: true                          // Set to false if you don't want Parsley to display error messages
    , useHtml5Constraints: true                 // Set to false if you don't want Parsley to use html5 constraints
    , messages: {}                              // Add your own error messages here

    //some quite advanced configuration here..
    , validateIfUnchanged: false                                          // false: validate once by field value change
    , errors: {
        classHandler: function ( elem, isRadioOrCheckbox ) {}             // specify where parsley error-success classes are set
      , container: function ( elem, isRadioOrCheckbox ) {}                // specify an elem where errors will be **apened**
      , errorsWrapper: '<ul></ul>'                                        // do not set an id for this elem, it would have an auto-generated id
      , errorElem: '<li></li>'                                            // each field constraint fail in an li
      }
    , listeners: {
        onFieldValidate: function ( elem, ParsleyField ) { return false; } // Executed on validation. Return true to ignore field validation
      , onFormValidate: function ( isFormValid, event, ParsleyForm ) {}     // Executed once on form validation. Return (bool) false to block submit, even if valid
      , onFieldError: function ( elem, constraints, ParsleyField ) {}     // Executed when a field is detected as invalid
      , onFieldSuccess: function ( elem, constraints, ParsleyField ) {}   // Executed when a field passes validation
    }
  };

// This plugin works with jQuery or Zepto (with data extension built for Zepto.)
} ( window.jQuery || window.Zepto );
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };
    
    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);
// takes the form field value and returns true on valid number
function valid_credit_card(value) {
// accept only digits, dashes or spaces
if (/[^0-9-\s]+/.test(value)) return false;
 
// The Luhn Algorithm. It's so pretty.
var nCheck = 0, nDigit = 0, bEven = false;
value = value.replace(/\D/g, "");
 
for (var n = value.length - 1; n >= 0; n--) {
var cDigit = value.charAt(n),
nDigit = parseInt(cDigit, 10);
 
if (bEven) {
if ((nDigit *= 2) > 9) nDigit -= 9;
}
 
nCheck += nDigit;
bEven = !bEven;
}
 
return (nCheck % 10) == 0;
}
