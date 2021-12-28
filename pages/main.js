'use strict';

const say = require('say')

module.exports = function ({pagedStreamDeck, audioButtons, lockButton}) {
	const clockButton = require('../buttons/clock.js')

	return [
		{
			icon: {
				type: 'image',
				relativePath: 'fixtures/bulb_on.png'
			},
			onClick: () => {
				pagedStreamDeck.changePage("lights")
			},
		},
		{
			icon: {
				type: 'image',
				relativePath: 'fixtures/chrome.png'
			},
			onClick: () => {
				pagedStreamDeck.changePage("web")
			},
		},
		,
		,
		lockButton,
		{
			icon: {
				type: 'text',
				text: 'Icons'
			},
			onClick: () => {
				pagedStreamDeck.changePage("icons")
			},
		},
		{
			icon: {
				type: 'text',
				text: 'Say\nsomething'
			},
			onClick: () => {
				say.speak('Hello World', null, 1)
			},
		},
		,
		,
		{
			icon: {
				type: 'text',
				text: 'Blank\nScreen'
			},
			onClick: () => {
				pagedStreamDeck.changePage("blankScreen")
				pagedStreamDeck.setBrightness(0)
			},
		},
		audioButtons.mic,
		audioButtons.speaker,
		,
		,
		clockButton,
	]
}