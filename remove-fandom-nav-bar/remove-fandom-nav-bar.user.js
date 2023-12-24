// ==UserScript==
// @name         remove-fandom-nav-bar
// @namespace    https://cksum.co.uk
// @version      0.1.0
// @description  Remove fandom nav bar
// @author       Sam Lee, sam@cksum.co.uk
// @homepageURL  https://github.com/samlee/userscripts/tree/main/remove-fandom-nav-bar
// @downloadURL  https://github.com/samlee/userscripts/raw/main/remove-fandom-nav-bar/remove-fandom-nav-bar.user.js
// @updateURL    https://github.com/samlee/userscripts/raw/main/remove-fandom-nav-bar/remove-fandom-nav-bar.user.js
// @include      https://*.fandom.com/*
// @grant        none
// ==/UserScript==
const navBar =  document.querySelector(".global-navigation");
if (navBar) navBar.parentNode.removeChild(navBar);
