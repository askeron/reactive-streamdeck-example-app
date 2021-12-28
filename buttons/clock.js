'use strict';

const moment = require('moment');

const dataObj = {
	extended: false
}

module.exports = {
	icon: {
		type: 'iconFunction',
		iconFunction: () => {
			return {
				type: 'text',
				text: moment().format(dataObj.extended ? "HH:mm[\n]:ss" : "HH:mm")
			}
		}
	},
	onClick: () => {
		dataObj.extended = !dataObj.extended
	},
}