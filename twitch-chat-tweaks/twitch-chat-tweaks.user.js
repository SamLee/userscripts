// ==UserScript==
// @name         twitch-chat-tweaks
// @namespace    https://cksum.co.uk
// @version      0.1.0
// @description  Make twitch chat better
// @author       Sam Lee, sam@cksum.co.uk
// @homepageURL  https://github.com/samlee/userscripts/tree/main/twitch-chat-tweaks
// @downloadURL  https://github.com/samlee/userscripts/raw/main/twitch-chat-tweaks/twitch-chat-tweaks.user.js
// @updateURL    https://github.com/samlee/userscripts/raw/main/twitch-chat-tweaks/twitch-chat-tweaks.user.js
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==


const removeLeaderboard = () => {
    const element = document.querySelector('[aria-label="Expand Top Gifters Leaderboard"]');

    if (element) {
        const grandparent = element.parentElement?.parentElement;

        if (grandparent) {
            grandparent.remove();
        }
    }
};

removeLeaderboard();

const observer = new MutationObserver(() => removeLeaderboard());
observer.observe(document.body, { childList: true, subtree: true });
