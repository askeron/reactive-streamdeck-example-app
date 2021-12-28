'use strict';

module.exports = function ({pagedStreamDeck, expressApp}) {
	const util = require('../util.js')({pagedStreamDeck})

	const dataObject = {
		color: {
			r: 255,
            g: 0,
			b: 0,
		}
	}
	
	expressApp.get('/alarm', function(req, res, next) {
		processRequest(req, res, 255, 0, 0)
	})

	function processRequest(req, res, r, g, b) {
		dataObject.color.r = req.params.r || r
		dataObject.color.g = req.params.g || g
		dataObject.color.b = req.params.b || b
		if (pagedStreamDeck.getCurrentPageName() != "alarm") {
			pagedStreamDeck.changePage("alarm")
		}
		res.send('OK')
	}
	
	const alarmButton = {
		icon: {
			type: 'iconFunction',
			iconFunction: () => {
				const valueToogle = new Date().valueOf() % 1200 >= 600
				return {
					type: 'square',
					color: {
						r: valueToogle ? dataObject.color.r : 0,
						g: valueToogle ? dataObject.color.g : 0,
						b: valueToogle ? dataObject.color.b : 0,
					},
				}
			}
		},
		onClick: () => {
			pagedStreamDeck.goBackToLastPage()
		},
	}
		
	return util.getArrayFilledWithOneElement(pagedStreamDeck.MAX_KEYS, alarmButton)
}