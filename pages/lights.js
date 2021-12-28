'use strict';

module.exports = function ({pagedStreamDeck, lightButtons}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	return [
		lightButtons.getLightButton('kueche'),
		,
		,
		lightButtons.getLightButton('arbeitszimmer'),
		,
		lightButtons.getLightButton('eingang'),
		lightButtons.getLightButton('wohnzimmer-esstisch'),
		lightButtons.getLightButton('wohnzimmer-fernseher'),
		lightButtons.getLightButton('flur'),
		lightButtons.getLightButton('schlafzimmer'),
		{
			icon: {
				type: 'text',
				text: 'alle\nan'
			},
			onClick: () => {
				lightButtons.switchAllLights(true)
			},
		},
		{
			icon: {
				type: 'text',
				text: 'alle\naus'
			},
			onClick: () => {
				lightButtons.switchAllLights(false)
			},
		},
		{
			icon: {
				type: 'text',
				text: 'mit\nText'
			},
			onClick: () => {
				pagedStreamDeck.changePage("lightsWithText")
			},
		},
		,
		util.getBackButton(),
	]
}