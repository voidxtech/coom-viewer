(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #000;\r\n}\r\n\r\n#navbar {\r\n  width: 100%;\r\n  height: 25px;\r\n\r\n  background-color: #454545;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.navbar-btn {\r\n  max-width: 300px;\r\n  height: 18px;\r\n  margin-left: 10px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n  color: white;\r\n  background-color: cornflowerblue;\r\n  cursor: pointer;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  border-radius: 9px;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  width: 100vw;\r\n  height: calc(100vh - 25px);\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  border: 1px solid #202020;\r\n}\r\n\r\n.add-btn {\r\n  width: 50px;\r\n  height: 50px;\r\n\r\n  color: cornflowerblue;\r\n  cursor: pointer;\r\n}\r\n\r\n.add-video-popup {\r\n  position: absolute;\r\n  width: 1200px;\r\n  height: 150px;\r\n\r\n  left: calc(50% - 1200px / 2);\r\n  top: calc(50% - 150px / 2);\r\n  \r\n  background-color: #000;\r\n  border: 1px solid #555555;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.add-video-popup input {\r\n  width: 70%;\r\n  height: 20px;\r\n\r\n  background-color: black;\r\n  border: 1px solid #555555;\r\n  color: white;\r\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],d=n.base?a[0]+n.base:a[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=c(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:m(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function m(e,n){var t,r,o;if(n.singleton){var i=f++;t=h||(h=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var d=a(e,n),l=0;l<t.length;l++){var s=c(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);function o(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function i(e){const n=document.createElement("div");return n.classList.add("add-btn"),n.onclick=n=>{!function(e){a();const n=document.createElement("div");n.classList.add("add-video-popup");const t=document.createElement("input");t.id="video-link",n.appendChild(t);const r=document.createElement("div");r.innerHTML="ADD",r.classList.add("navbar-btn"),r.onclick=n=>{!function(e,n){if(0!=(n=n.trim()).length){const t=document.body.querySelector(`#${e}`);if(t){const e=document.createElement("iframe");let r;if(e.scrolling="no",e.allowFullscreen=!0,e.width="100%",e.height="100%",e.frameBorder=0,r=n.match(/^(https?:\/\/)?(www.)?redtube.com\/(\w+)/)){const n=r[3];n&&(e.src=`https://embed.redtube.com/?id=${n}`,o(t),t.appendChild(e))}else if(r=n.match(/^(https?:\/\/)?(www.)?xvideos.com\/video(\w+)/)){const n=r[3];n&&(e.src=`https://www.xvideos.com/embedframe/${n}`,o(t),t.appendChild(e))}else if(r=n.match(/^(https?:\/\/)?(www.)?ashemaletube.com\/embed\/(\w+\/\w+)/)){const n=r[0];n&&(e.width="90%",e.src=n,o(t),t.appendChild(e))}else if(r=n.match(/^(https?:\/\/)?(www.)?pornhub.com\/view_video.php\?viewkey\=(\w+)/)){const n=r[3];n&&(e.src=`https://www.pornhub.com/embed/${n}`,o(t),t.appendChild(e))}else if(r=n.match(/^(https?:\/\/)?(www.)?xhamster.com\/embed\/(\w+)/)){const n=r[0];n&&(e.src=n,o(t),t.appendChild(e))}else if(r=n.match(/^(https?:\/\/)?(www.)?youtube.com\/watch\?v\=(\w+)/)){const n=r[3];n&&(e.src=`https://www.youtube.com/embed/${n}`,o(t),t.appendChild(e))}}}}(e,t.value),a()},n.appendChild(r),document.body.appendChild(n)}(e)},n.innerHTML='<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-plus fa-w-14 fa-5x"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" class=""></path></svg>',n}function c(e,n,t){o(e);const r=100/n+"%",c=100/t+"%";for(let o=0;o<t;o++){const t=document.createElement("div");t.classList.add("row"),t.style.flexBasis=c;for(let e=0;e<n;e++){let c=`cell${o*n+e+1}`;const a=document.createElement("div");a.id=c,a.classList.add("cell"),a.style.flexBasis=r,a.appendChild(i(c)),t.appendChild(a)}e.appendChild(t)}}function a(){const e=document.body.querySelectorAll(".add-video-popup");e&&e.forEach((e=>document.body.removeChild(e)))}n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,console.log("CoomViewer initialized!"),function(){const e=document.createElement("div");e.id="navbar";const n=document.createElement("div");n.id="container";const t=document.createElement("div");t.innerHTML="CLEAR",t.classList.add("navbar-btn"),t.onclick=e=>{document.body.querySelectorAll(".cell").forEach((e=>{o(e),e.appendChild(i(e.id))}))},e.appendChild(t);const r=document.createElement("div");r.innerHTML="FULLSCREEN",r.classList.add("navbar-btn"),r.onclick=e=>{document.fullscreenElement?document.exitFullscreen().then((()=>console.log("Exited fullscreen mode"))).catch((e=>console.error(e))):document.body.requestFullscreen?document.body.requestFullscreen():document.body.webkitRequestFullscreen?document.body.webkitRequestFullscreen():document.body.msRequestFullscreen&&document.body.msRequestFullscreen()},e.appendChild(r),function(e,n){[{w:2,h:2},{w:3,h:3},{w:4,h:4},{w:5,h:5}].map((t=>{const r=document.createElement("div");r.innerHTML=`${t.w}x${t.h}`,r.classList.add("navbar-btn"),r.onclick=e=>{c(n,t.w,t.h)},e.appendChild(r)}))}(e,n),c(n,3,3),document.body.appendChild(e),document.body.appendChild(n)}()})()})();