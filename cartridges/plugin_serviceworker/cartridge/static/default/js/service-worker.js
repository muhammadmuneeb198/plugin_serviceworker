!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}({9:function(e,t){var r=self.serverConstructedUrls.offlineUrl,n=self.serverConstructedUrls.headerUrl,a=self.serverConstructedUrls.shell;self.addEventListener("install",(function(e){self.skipWaiting();var t=new Promise((async function(e){let t=await caches.open("offline"),s=[],i=[];t.addAll([r]);let u=await caches.open("v1"),l=await fetch(n);l.headers.forEach((function(e,t){"x-sf-cc-cacheclearurls"===t&&(s=JSON.parse(e)),"x-sf-cc-skipheader"===t&&(i=JSON.parse(e))}));var c=await caches.open("clearers");s.forEach(e=>{c.put(e,new Response("true"))});var o=await caches.open("skippers");i.forEach(e=>{o.put(e,new Response("true"))});var f=await l.text(),d=new Response(f.replace(/\$swcached\$/g,"true"));u.put(n,d),e(await u.addAll(a))}));e.waitUntil(t)})),self.addEventListener("activate",(function(e){e.waitUntil(self.clients.claim().then((function(){return self.clients.matchAll({type:"window"})})))})),self.addEventListener("fetch",(function(e){if(0===e.request.url.indexOf(this.location.origin)&&-1===e.request.url.indexOf("demandware.servlet")&&-1===e.request.url.indexOf("/s/-/dw/data/")&&-1===e.request.url.indexOf("/dw/bm/v1")&&-1===e.request.url.indexOf("/Sites-Site/")&&-1===e.request.url.indexOf("/__Analytics-Start")&&-1===e.request.url.indexOf("__SYSTEM__"))if(-1===e.request.url.indexOf("demandware.static"))if("cors"!==e.request.mode&&"reload"!==e.request.cache)e.respondWith(self.pagepartials.createPageStream(e.request,e));else{var t=new Promise((async function(t){var r=await self.pagepartials.generatePageResponse(e),a=await caches.open("clearers");if(await a.match(e.request.url)){var s=await caches.open("v1");await s.add(n)}t(r)}));e.respondWith(t)}else-1===e.request.url.indexOf(".css")&&-1===e.request.url.indexOf(".js")&&-1===e.request.url.indexOf(".svg")&&-1===e.request.url.indexOf(".png")&&-1===e.request.url.indexOf(".jpg")&&-1===e.request.url.indexOf(".woff2")||e.respondWith(caches.open("v1").then((function(t){return t.match(e.request).then((function(r){return r&&"reload"!==e.request.cache?r:fetch(e.request).then((function(r){return t.put(e.request,r.clone()),r}))}))})))})),self.addEventListener("message",(function(e){var t=e.data;"setUrl"===t.command&&(self.currentFullPageUrl=t.message),"canLazyLoadImages"===t.command&&(self.canLazyLoadImages=t.message)}))}});
