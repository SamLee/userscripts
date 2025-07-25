// ==UserScript==
// @name         outlook-unsafelink
// @namespace    https://cksum.co.uk
// @version      0.1.2
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

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
  	    if (node instanceof HTMLAnchorElement) removeSafeLink(node);
	      node.querySelectorAll('a').forEach(removeSafeLink);
      }
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

Array.from(document.getElementsByTagName('a')).forEach(removeSafeLink);
