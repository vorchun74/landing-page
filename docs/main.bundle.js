(self.webpackChunk=self.webpackChunk||[]).push([[179],{134:function(e,t,o){"use strict";var n=o(260),r=Object.create(null),s="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function i(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(u(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var o=e.cloneNode();o.isLoaded=!1,o.addEventListener("load",(function(){o.isLoaded||(o.isLoaded=!0,e.parentNode.removeChild(e))})),o.addEventListener("error",(function(){o.isLoaded||(o.isLoaded=!0,e.parentNode.removeChild(e))})),o.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(o,e.nextSibling):e.parentNode.appendChild(o)}}function l(e){if(!e)return!1;var t=document.querySelectorAll("link"),o=!1;return c.call(t,(function(t){if(t.href){var r=function(e,t){var o;return e=n(e,{stripWWW:!1}),t.some((function(n){e.indexOf(t)>-1&&(o=n)})),o}(t.href,e);u(r)&&!0!==t.visited&&r&&(i(t,r),o=!0)}})),o}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&i(e)}))}function u(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(s)return console.log("no window.document found, will not HMR CSS"),a;var o,c,i,u=function(e){var t=r[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var o=document.getElementsByTagName("script"),s=o[o.length-1];s&&(t=s.src)}r[e]=t}return function(e){if(!t)return null;var o=t.split(/([^\\/]+)\.js$/),r=o&&o[1];return r&&e?e.split(",").map((function(e){var o=new RegExp("".concat(r,"\\.js$"),"g");return n(t.replace(o,"".concat(e.replace(/{fileName}/g,r),".css")))})):[t.replace(".js",".css")]}}(e);return o=function(){var e=u(t.filename),o=l(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();o?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,i=0,function(){var e=this,t=arguments,n=function(){return o.apply(e,t)};clearTimeout(i),i=setTimeout(n,c)}}},260:function(e){"use strict";e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",o=e.replace(new RegExp(t,"i"),"").split("/"),n=o[0].toLowerCase().replace(/\.$/,"");return o[0]="",t+n+o.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},90:function(e,t,o){"use strict";var n=o(134)(e.id,{publicPath:"D:\\Projects\\Landos\\docs",locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},845:function(e,t,o){"use strict";var n=o(134)(e.id,{publicPath:"D:\\Projects\\Landos\\docs",locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},855:function(){const e={intro:0,about:667,skills:1302,works:1852,contact:2406};document.addEventListener("click",(function(t){if(t.target.dataset.filter)!function(e){e.preventDefault();const t=document.querySelectorAll("[data-category]");let o=e.target.dataset.filter;t.forEach((e=>{o===e.dataset.category||"all"===o?e.classList.remove("hide"):e.classList.add("hide")}))}(t);else if("modalProject"===t.target.dataset.modal)!function(e){e.preventDefault(),document.getElementById("modalProject").classList.add("show"),document.querySelector("body").classList.add("no-scroll")}(t);else if(t.target.dataset.close)!function(e){e.preventDefault(),e.target.closest(".show").classList.remove("show"),document.querySelector("body").classList.remove("no-scroll")}(t);else if(t.target.closest(".burger"))!function(e){e.preventDefault(),document.querySelector(".burger").classList.toggle("active"),document.querySelector(".header").classList.toggle("active")}(t);else{if(!t.target.dataset.navigation)return;!function(t){let o;t.preventDefault();let n=e[t.target.dataset.navigation];0===pageYOffset?o=n:pageYOffset>0&&pageYOffset<n?o=n-pageYOffset:pageYOffset>n&&(o=0-pageYOffset+n);window.scrollBy({top:o,behavior:"smooth"})}(t)}})),window.addEventListener("scroll",(()=>{pageYOffset>=2372?document.querySelector(".header").classList.add("hide"):document.querySelector(".header").classList.remove("hide")}))},46:function(){const e=document.querySelector(".loadbar");window.onload=()=>{e.style.width="100%",setTimeout((()=>{e.style.height="0"}),400)}},10:function(e,t,o){"use strict";o(90),o(845),o(46),o(855)}},0,[[10,666]]]);