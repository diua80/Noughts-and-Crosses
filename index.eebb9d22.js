var n={};n=function n(e,t,o){function r(c,s){if(!t[c]){if(!e[c]){var a=void 0;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[c]={exports:{}};e[c][0].call(u.exports,(function(n){return r(e[c][1][n]||n)}),u,u.exports,n,e,t,o)}return t[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(n,e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=n.trim(),!0===e?t.children:t.firstChild},r=function(n,e){var t=n.children;return 1===t.length&&t[0].tagName===e},i=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};t.visible=i,t.create=function(n,e){var t=function(n,e){var t=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return i.appendChild(n)}));var c=r(i,"IMG"),s=r(i,"VIDEO"),a=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===s&&t.classList.add("basicLightbox--video"),!0===a&&t.classList.add("basicLightbox--iframe"),t}(n=function(n){var e="string"==typeof n,t=n instanceof HTMLElement==1;if(!1===e&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(e)),c=function(n){return!1!==e.onClose(s)&&function(n,e){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(n)||n.parentElement.removeChild(n),e()}),410),!0}(t,(function(){if("function"==typeof n)return n(s)}))};!0===e.closable&&t.addEventListener("click",(function(n){n.target===t&&c()}));var s={element:function(){return t},visible:function(){return i(t)},show:function(n){return!1!==e.onShow(s)&&function(n,e){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),e()}))}),10),!0}(t,(function(){if("function"==typeof n)return n(s)}))},close:c};return s}},{}]},{},[1])(1);const e=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[1,5,9],[3,5,7],[3,6,9]],t=[],o=[];let r="X";const i=document.querySelector(".content");function c(){let n="";for(let e=1;e<=9;e+=1)n+=`<div class = "item" data-id = "${e}"></div>`;i.innerHTML=n}function s(n){return e.find((e=>e.every((e=>n.includes(e)))))||null}function a(){c(),r="X",o.splice(0),t.splice(0)}c(),i.addEventListener("click",(function(e){if(e.target.textContent||e.target===e.currentTarget)return;const i=Number(e.target.dataset.id);let c=null;"X"===r?(t.push(i),c=t.length>=3?s(t):null):(o.push(i),c=o.length>=3?s(o):null);if(e.target.textContent=r,c)return setTimeout((()=>function(e){const t=n.create(`\n        <div class="mbox">\n            <h1 class="headText">\n                <p style="font-size: 60px; margin: 0; padding: 0;">${e}</p>\n                <p>Is winner!</p>\n            </h1>\n        </div>\n    `);t.show(),a(),setTimeout((()=>{t.close()}),2e3)}(r)),1e3),void c.forEach((n=>{document.querySelector(`[data-id = "${n}"]`).classList.add("win")}));if(o.length+t.length===9){return n.create('\n            <div class = "mbox">\n            <h1 class = "headText">\n            <p style = "font-size: 40px; margin: 0; padding: 0;">Friendship won!</p>            \n            </h1>\n            </div>\n            ').show(),void a()}r="X"===r?"O":"X"}));
//# sourceMappingURL=index.eebb9d22.js.map
