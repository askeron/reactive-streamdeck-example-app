'use strict';

module.exports = function ({pagedStreamDeck, lightButtons}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	return [
		{icon: {type: 'text', text: 'Küche'}},
		lightButtons.getLightButton('kueche'),
		{icon: {type: 'text', text: 'Wohn-\nzimmer\nFernseher'}},
		lightButtons.getLightButton('wohnzimmer-fernseher'),
		{icon: {type: 'text', text: 'Arbeits-\nzimmer'}},
		{icon: {type: 'text', text: 'Eingang'}},
		lightButtons.getLightButton('eingang'),
		{icon: {type: 'text', text: 'Flur'}},
		lightButtons.getLightButton('flur'),
		lightButtons.getLightButton('arbeitszimmer'),
		{icon: {type: 'text', text: 'Wohn-\nzimmer\nEsstisch'}},
		lightButtons.getLightButton('wohnzimmer-esstisch'),
		{icon: {type: 'text', text: 'Schlaf-\nzimmer'}},
		lightButtons.getLightButton('schlafzimmer'),
		util.getBackButton(),
	]
}