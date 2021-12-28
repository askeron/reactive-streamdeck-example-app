'use strict';

const pinObject = {
	pin: "12345",
	currentTry : "",
	onSuccess: () => {},
	onFailure: () => {},
}

function addPinDigit(digit) {
	pinObject.currentTry = pinObject.currentTry + digit
	if (pinObject.pin.length === pinObject.currentTry.length) {
		setTimeout(() => {
			if (pinObject.pin === pinObject.currentTry) {
				pinObject.currentTry = ""
				pinObject.onSuccess()
			} else {
				pinObject.currentTry = ""
				pinObject.onFailure()
			}
		}, 250)
	}
}

const buttons = [
	{
		icon: {
			type: 'iconFunction',
			iconFunction: () => {
				return {
					type: 'text',
					text: (pinObject.currentTry.length >= 1 ? '*' : '_')
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
					text: (pinObject.currentTry.length >= 2 ? '*' : '_')
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
					text: (pinObject.currentTry.length >= 3 ? '*' : '_')
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
					text: (pinObject.currentTry.length >= 4 ? '*' : '_')
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
					text: (pinObject.currentTry.length >= 5 ? '*' : '_')
				}
			}
		},
	},
	{
		icon: {
			type: 'text',
			text: '1'
		},
		onClick: () => addPinDigit(1),
	},
	{
		icon: {
			type: 'text',
			text: '2'
		},
		onClick: () => addPinDigit(2),
	},
	{
		icon: {
			type: 'text',
			text: '3'
		},
		onClick: () => addPinDigit(3),
	},
	{
		icon: {
			type: 'text',
			text: '4'
		},
		onClick: () => addPinDigit(4),
	},
	{
		icon: {
			type: 'text',
			text: '5'
		},
		onClick: () => addPinDigit(5),
	},
	{
		icon: {
			type: 'text',
			text: '6'
		},
		onClick: () => addPinDigit(6),
	},
	{
		icon: {
			type: 'text',
			text: '7'
		},
		onClick: () => addPinDigit(7),
	},
	{
		icon: {
			type: 'text',
			text: '8'
		},
		onClick: () => addPinDigit(8),
	},
	{
		icon: {
			type: 'text',
			text: '9'
		},
		onClick: () => addPinDigit(9),
	},
	{
		icon: {
			type: 'text',
			text: '0'
		},
		onClick: () => addPinDigit(0),
	},
]

module.exports = {
	buttons,
	setPin: (x => pinObject.pin = x),
	setOnSuccess: (x => pinObject.onSuccess = x),
	setOnFailure: (x => pinObject.onFailure = x),
}