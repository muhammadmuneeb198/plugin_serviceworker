!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var r={createResponseSkeleton:function(e){var t={status:e.status,statusText:e.statusText,headers:{"X-ServedByServiceWorker":"true"}};if(e.headers.forEach((function(e,r){t.headers[r]=e})),t.headers["x-sf-cc-cachetime"]){var r=t.headers["x-sf-cc-cachetime"].replace(/\D+/g,""),n=t.headers["x-sf-cc-cachetime"].indexOf("h")>-1?"hours":"minutes",a=(new Date).getTime(),c=0;c="hours"===n?a+60*r*60*1e3:a+60*r*1e3,t.headers["x-sf-cc-cache-validto"]=c}return t},replacePartialPlaceholder:function(e,t,r){for(var n,a=e,c=0;c<t.length;c++){var o="$sw"+t[c].cachekey+"$";a.indexOf(o)>-1&&(n=!0),a=a.replace(o,t[c].content)}return self.canLazyLoadImages&&(a=a.replace(/(<img.*?\s)src=(?:'|")([^'">]+)(?:'|")/g,'$1data-lazysrc="$2"')),(n||r)&&(a=a.replace(/\$swcached\$/g,"true")),a},pushOnStream:function(e,t){const r=e.getReader();return r.read().then((function e(n){if(!n.done)return t.enqueue(n.value),r.read().then(e)}))},reloadHeader:async function(e,t){var r=await fetch(e),n=r.clone(),a=await n.text(),c=new Response(a.replace(/\$swcached\$/g,"true"));return t.put(e,c),r},isCacheExpired:function(e){var t=0;return e.headers.forEach((function(e,r){"x-sf-cc-cache-validto"===r&&(t=e)})),t<=Date.now()},buildPartialSkipUrl:function(e,t){var r=e.request.url;if("GET"===e.request.method&&"reload"!==e.request.cache){var n=[];n.push("swskipheader","true");for(var a=(new Date).getTime(),c=0;c<t.length;c++)t[c].invalidationTime>a&&n.push("sw"+t[c].cachekey+"=skip");r=e.request.url+(e.request.url.indexOf("?")>-1?"&":"?")+n.join("&")}return r},buildCacheableURL:function(e,t){var r=e.request.url;if("GET"===e.request.method&&"reload"!==e.request.cache){var n=[];n.push("swskipheader","true");for(var a=(new Date).getTime(),c=0;c<t.length;c++)t[c].invalidationTime>a&&t[c].clearOnUrls.length>0&&n.push("sw"+t[c].cachekey+"=skip");r=e.request.url+(e.request.url.indexOf("?")>-1?"&":"?")+n.join("&")}return r},recreateDBStores:function(e){var t=e.result||{result:e},r=t.result.objectStoreNames;Array.from(r).forEach(t.result.deleteObjectStore),t.result.createObjectStore("caches",{keyPath:"cachekey"}).createIndex("context, contextid",["context","contextid"]),t.result.createObjectStore("urlmapping",{keyPath:"url"}).createIndex("contextid","contextid",{unique:!1})},storeHttpHeaderInDB:function(e,t){var r=indexedDB.open("PartialPageCache");r.onupgradeneeded=this.recreateDBStores,r.onsuccess=function(){try{var n=r.result.transaction("urlmapping","readwrite").objectStore("urlmapping"),a="";if(t.headers.forEach((function(e,t){"x-sf-cc-cachecontext"===t&&(a=e)})),a){var c={url:e,contextid:a};n.put(c)}}catch(e){console&&console.error("Cannot write URL mapping to indexed DB",e)}r.result.close()}}};t.utils=r}]);