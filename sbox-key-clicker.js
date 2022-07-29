// ==UserScript==
// @name         S&box key clicker
// @namespace    https://github.com/Shark-vil
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://asset.party/~get
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
	'use strict';

	setInterval(() => {
			const button = $('button.button.is-primary');
			if (button == undefined) {
					console.error('Check button not found');
					return;
			}
			if (button.text() == 'No Slots Left') {
					const controls = button.closest('controls');
					if (controls == undefined) {
							console.error('Controls not found');
							return;
					}
					controls.click();
			}
	}, 500);
})();