'use strict';

module.exports = function ({pagedStreamDeck}) {
	const util = require('../util.js')({pagedStreamDeck})
	
	return [
		{
			icon: {
				type: 'text',
				text: 'Hello World'
			},
		},
		{
			icon: {
				type: 'text',
				text: 'Hello\nWorld',
				textColor: 'black',
				backgroundColor: 'white'
			},
		},
		{
			icon: {
				type: 'blank'
			},
		},
		{
			icon: {
				type: 'image',
				relativePath: 'fixtures/github.png'
			},
		},
		{
			icon: {
				type: 'square',
				color: {
					r: 0,
					g: 255,
					b: 0,
				}
			},
		},
		{
			icon: {
				type: 'image',
				labels: [
					{
						text: "Label1",
						color: 'black',
						position: {
							top: 0.1,
							bottom: 0.25,
							left: 0,
							right: 1,
						},
					},
					{
						text: "Label2",
						position: {
							top: 0.8,
							bottom: 0.95,
							left: 0,
							right: 1,
						},
					},
				],
				relativePath: 'fixtures/github.png'
			},
		},
		{
			icon: {
				type: 'iconFunction',
				iconFunction: () => {
					return {
						type: 'text',
						text: 'Text von\nfunction'
					}
				}
			},
		},
		{
			icon: {
				type: 'iconFunction',
				iconFunction: () => {
					return {
						type: 'text',
						text: new Date().toLocaleString('de-DE').replace(" ","\n")
					}
				}
			},
		},
		,
		,
		,
		,
		,
		,
		util.getBackButton(),
	]
}