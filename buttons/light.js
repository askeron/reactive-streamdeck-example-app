'use strict';

module.exports = (() => {

const lightNames = [
	'kueche'
	,
	'eingang'
	,
	'wohnzimmer-esstisch'
	,
	'wohnzimmer-fernseher'
	,
	'flur'
	,
	'arbeitszimmer'
	,
	'schlafzimmer'
]

const lights = lightNames.map(x => {
	return {
		name: x,
		value: false,
	}
})

function getLightButton(name) {
	const light = lights.filter(x => x.name === name)[0]
	return {
		icon: {
			type: 'iconFunction',
			iconFunction: () => {
				return {
					type: 'image',
					relativePath: `fixtures/bulb_${light.value ? "on" : "off"}.png`
				}
			}
		},
		onClick: () => {
			toogleLight(light)
		},
	}
}

function toogleLight(light) {
	switchLight(light, !(light.value))
}

function switchLight(light, value) {
	light.value = value
}

function switchAllLights(value) {
	for (let light of lights) {
		switchLight(light, value)
	}
}

return {
	lightNames,
	getLightButton,
	switchAllLights,
}

})
