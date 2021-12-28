'use strict';

module.exports = (({pagedStreamDeck, pinButtons}) => {
const dataObject = {
	isLocked: false
}
return {
	icon: {
		type: 'image',
		relativePath: 'fixtures/lock.png'
	},
	onClick: () => {
		if (!(dataObject.isLocked)) {
			dataObject.isLocked = true
			pinButtons.setPin("12345")
			pinButtons.setOnSuccess(() => {
				pagedStreamDeck.goBackToLastPage()
				dataObject.isLocked = false
			})
			pinButtons.setOnFailure(() => {
				pagedStreamDeck.setBrightness(0)
				pagedStreamDeck.changePage("blankScreen")
			})
			pagedStreamDeck.setBrightness(0)
			pagedStreamDeck.addToPageStack("pin")
			pagedStreamDeck.changePage("blankScreen")
		}
	},
}
})
