// ==UserScript==
// @name         reddit-fix-cdn
// @namespace    https://cksum.co.uk
// @version      0.2.0
// @description  Redirects to the actual image so you can zoom
// @author       Sam Lee, sam@cksum.co.uk
// @homepageURL  https://github.com/samlee/userscripts/tree/main/reddit-fix-cdn
// @downloadURL  https://github.com/samlee/userscripts/raw/main/reddit-fix-cdn/reddit-fix-cdn.user.js
// @updateURL    https://github.com/samlee/userscripts/raw/main/reddit-fix-cdn/reddit-fix-cdn.user.js
// @include      https://www.reddit.com/media**
// @grant        none
// ==/UserScript==
const image = document.querySelector('img[alt="CDN media"]');
if (image) {
  const url = new URL(image.src);
  url.search = '';
  url.host = url.host.replace('preview', 'i');
  image.src = url.href
  document.body.innerHTML = image.outerHTML;
}
