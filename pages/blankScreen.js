'use strict';

module.exports = function ({pagedStreamDeck}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	return util.getArrayFilledWithOneElement(pagedStreamDeck.MAX_KEYS, {
		icon: {
			type: 'blank',
		},
		onClick: () => {
			pagedStreamDeck.setBrightness(100)
			pagedStreamDeck.goBackToLastPage()
		},
	})
}