!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({3:function(e,t,n){"use strict";n.r(t);t.default=class{invalidateCache(){caches&&caches.delete("v1");var e=(window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB).open("PartialPageCache");e.onsuccess=function(){e.result.transaction("urlmapping","readwrite").objectStore("urlmapping").clear().onsuccess=function(){e.result.transaction("caches","readwrite").objectStore("caches").clear().onsuccess=function(){e.result.close()}}}}async checkCacheInvalidation(){if(window.performance&&window.performance.navigation&&window.performance.navigation.type===PerformanceNavigation.TYPE_RELOAD)this.invalidateCache();else{var e=document.querySelector("link[rel=fetch-cache-hash]"),t=e?e.getAttribute("href"):null;if(t){var n=await fetch(t),r=await n.json();localStorage.swCacheHash&&localStorage.swCacheHash!==r.hash&&this.invalidateCache(),localStorage.swCacheHash=r.hash}}}}}});