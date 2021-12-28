'use strict';

const open = require('open');

module.exports = function ({pagedStreamDeck}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	function getWebButton(iconFileName, url) {
		return {
			icon: {
				type: 'image',
				relativePath: 'fixtures/'+iconFileName
			},
			onClick: () => {
				open(url)
				pagedStreamDeck.goBackToLastPage()
			},
		}
	}
	
	return [
		getWebButton('github.png','https://www.github.com/'),
		getWebButton('slack.png','https://www.slack.com/'),
		getWebButton('youtube.png','https://www.youtube.com/'),
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		,
		util.getBackButton(),
	]
}