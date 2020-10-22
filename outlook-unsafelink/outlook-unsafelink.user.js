// ==UserScript==
// @name         outlook-unsafelink
// @namespace    https://cksum.co.uk
// @version      0.1.1
// @description  Remove outlook safelink junk from message body
// @author       Sam Lee, sam@cksum.co.uk
// @homepageURL  https://github.com/samlee/userscripts/tree/main/outlook-unsafelink
// @downloadURL  https://github.com/samlee/userscripts/raw/main/outlook-unsafelink/outlook-unsafelink.user.js
// @updateURL    https://github.com/samlee/userscripts/raw/main/outlook-unsafelink/outlook-unsafelink.user.js
// @include      https://outlook.office.com/*
// @grant        none
// ==/UserScript==

const identifier = "safelinks.protection.outlook.com";
const beginMarker = "?url=";
const endMarker = "&";

const removeSafeLink = (link) => {
  if (link.href.includes(identifier)) {
    const urlIndex = link.href.indexOf(beginMarker);
    const endIndex = link.href.indexOf(endMarker);
    if (urlIndex === -1 || endIndex === -1) { return; }
    const newLink = decodeURIComponent(link.href.substring(urlIndex + beginMarker.length, endIndex));
    link.href = newLink;
    if (link.textContent.includes(identifier)) { link.textContent = newLink; }
  }
};

document.addEventListener('DOMNodeInserted', (event) => {
	if (!event || !event.target || !(event.target instanceof HTMLElement)) return;
  if (event.target instanceof HTMLAnchorElement) removeSafeLink(event.target);
  Array.from(event.target.getElementsByTagName('a')).forEach(removeSafeLink);
}, false);

Array.from(document.getElementsByTagName('a')).forEach(removeSafeLink);
