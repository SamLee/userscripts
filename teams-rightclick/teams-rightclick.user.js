// ==UserScript==
// @name         teams-rightclick
// @namespace    https://cksum.co.uk
// @version      0.1.0
// @description  Some of the teams right click menus are ass
// @author       Sam Lee, sam@cksum.co.uk
// @homepageURL  https://github.com/samlee/userscripts/tree/main/teams-rightclick
// @downloadURL  https://github.com/samlee/userscripts/raw/main/teams-rightclick/teams-rightclick.user.js
// @updateURL    https://github.com/samlee/userscripts/raw/main/teams-rightclick/teams-rightclick.user.js
// @match        https://teams.microsoft.com/*
// @match        https://teams.cloud.microsoft/*
// @grant        none
// ==/UserScript==

window.addEventListener('contextmenu', function(e) {
    const hasSelection = window.getSelection().toString().length > 0;
    const isLink = e.target.closest('a');

    if (hasSelection || isLink) {
        e.stopPropagation();
    }
}, true);
