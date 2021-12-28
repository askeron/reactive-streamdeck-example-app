'use strict';

module.exports = function ({pagedStreamDeck}) {
	function getBackButton() {
		return {
			icon: {
				type: 'image',
				relativePath: 'fixtures/back.png'
			},
			onClick: () => {
				pagedStreamDeck.goBackToLastPage()
			},
		}
	}
	
	function getArrayFilledWithOneElement(count, element) {
		const result = []
		for (let i = 0; i < count; i++) {
			result.push(element);
		}
		return result
	}
	
	const scrollProfiles = [
		{
			numKeys: 6,
			backButtonDefined: true,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "fill",
					"up", "down", "back",
				],
				scrollInterval: 1,
			},
		},
		{
			numKeys: 6,
			backButtonDefined: false,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "up",
					"fill", "fill", "down",
				],
				scrollInterval: 2,
			},
		},
		{
			numKeys: 15,
			backButtonDefined: true,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "fill", "fill", "up",
					"fill", "fill", "fill", "fill", "down",
					"fill", "fill", "fill", "fill", "back",
				],
				scrollInterval: 4,
			},
		},
		{
			numKeys: 15,
			backButtonDefined: false,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "fill", "fill", "up",
					"fill", "fill", "fill", "fill", "blank",
					"fill", "fill", "fill", "fill", "down",
				],
			},
			scrollInterval: 4,
		},
		{
			numKeys: 32,
			backButtonDefined: true,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "up",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "blank",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "down",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "back",
				],
				scrollInterval: 7,
			},
		},
		{
			numKeys: 32,
			backButtonDefined: false,
			scrollInformation: {
				buttonNames: [
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "up",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "blank",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "blank",
					"fill", "fill", "fill", "fill", "fill", "fill", "fill", "down",
				],
				scrollInterval: 7,
			},
		},
	]

	function getScrollInformation(backButton) {
		const numkeys = pagedStreamDeck.NUM_KEYS
		const filteredScrollProfiles = scrollProfiles
			.filter(x => x.numKeys == numkeys && x.backButtonDefined == (typeof backButton !== 'undefined'))
		if (filteredScrollProfiles.length != 1) {
			throw new Error("could not determine exatly one scrollProfile")
		}
		return filteredScrollProfiles[0].scrollInformation
	}

	function getScrolledButtons(buttons, backButton) {
		return getScrolledButtonsByScrollInformation({
			buttons,
			scrollInformation: getScrollInformation(backButton),
			fixedButtons: {
				back: backButton
			},
		})
	}

    function getScrolledButtonsByScrollInformation({buttons, scrollInformation, fixedButtons}) {
		const fillButtonsLength = scrollInformation.buttonNames.filter(x => x == "fill").length
		const upIcon = {
			type: 'image',
			relativePath: 'fixtures/up.png'
		}
		const downIcon = {
			type: 'image',
			relativePath: 'fixtures/down.png'
		}

		const dataObj = {
			lineOffset: 0
		}

		const result = []
		let fillCount = 0;

		for (let buttonName of scrollInformation.buttonNames) {
			if (buttonName == "fill") {
				result.push(getScrolledButton(buttons, dataObj, scrollInformation, fillCount))
				fillCount++
			} else if (buttonName == "blank") {
				result.push({
					icon: {
						type: 'blank',
					},
				})
			} else if (buttonName == "up") {
				result.push({
					icon: upIcon,
					onClick: () => {
						if (dataObj.lineOffset > 0) {
							dataObj.lineOffset--
						}
					},
				})
			} else if (buttonName == "down") {
				result.push({
					icon: downIcon,
					onClick: () => {
						if (dataObj.lineOffset < ((buttons.length-fillButtonsLength)/scrollInformation.scrollInterval)) {
							dataObj.lineOffset++
						}
					},
				})
			} else if (fixedButtons[buttonName] != undefined) {
				result.push(fixedButtons[buttonName])
			} else {
				throw new Error("invalid buttonName: "+buttonName)
			}
		}

		return result
	}
	
	function getScrolledButton(buttons, dataObj, scrollInformation, scrolledButtonIndex) {
		return {
			icon: {
				type: 'iconFunction',
				iconFunction: () => {
					const buttonIndex = scrolledButtonIndex + (dataObj.lineOffset * scrollInformation.scrollInterval)
					if (buttons[buttonIndex]) {
						return buttons[buttonIndex].icon
					} else {
						return { type: "blank" }
					}
				}
			},
			onClick: () => {
				const buttonIndex = scrolledButtonIndex + (dataObj.lineOffset * scrollInformation.scrollInterval)
				if (buttons[buttonIndex] && buttons[buttonIndex].onClick) {
					return buttons[buttonIndex].onClick()
				}
			},
		}
	}

	return {
		getBackButton,
		getArrayFilledWithOneElement,
		getScrolledButtons,
		getScrolledButtonsByScrollInformation,
	}
}