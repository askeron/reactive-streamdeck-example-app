'use strict';

const say = require('say')

module.exports = function ({pagedStreamDeck}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	return [
		{
			icon: {
				type: 'text',
				text: 'Say it'
			},
			onClick: () => {
				say.speak('Hallo, wie geht es dir', null, 1)
			},
		},
		{
			icon: {
				type: 'text',
				text: 'Icons'
			},
			onClick: () => {
				pagedStreamDeck.changePage("sample")
			},
		},
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
		,
		util.getBackButton(),
	]
}