'use strict';

const winAudio = require('win-audio');

function getAudioDeviceButton(iconPrefix, winAudioDevice) {
	return {
		icon: {
			type: 'iconFunction',
			iconFunction: () => {
				return {
					type: 'image',
					labels: [
						{
							text: winAudioDevice.get()+" %",
							position: {
								top: 0.8,
								bottom: 0.95,
								left: 0,
								right: 1,
							},
						},
					],
					relativePath: `fixtures/${iconPrefix}_${winAudioDevice.isMuted() ? "muted" : "unmuted"}.png`
				}
			}
		},
		onClick: () => {
			winAudioDevice.toggle()
		},
	}
}

const mic = getAudioDeviceButton("mic", winAudio.mic)
const speaker = getAudioDeviceButton("speaker", winAudio.speaker)

module.exports = (() => {
	return {
		mic,
		speaker,
		volumeDown: {
			icon: {
				type: 'image',
				relativePath: `fixtures/volumedown.png`
			},
			onClick: () => {
				winAudio.speaker.decrease(10)
			},
		},
		volumeUp: {
			icon: {
				type: 'image',
				relativePath: `fixtures/volumedown.png`
			},
			onClick: () => {
				winAudio.speaker.increase(10)
			},
		},
	}
})
