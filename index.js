'use strict';

const reactiveStreamdeck = require('reactive-streamdeck')
const pagedStreamDeck = reactiveStreamdeck.getPagedStreamdeck()

const expressApp = require('express')()
const expressServer = require('http').createServer(expressApp)
const webSocketServer = new (require('ws')).Server({ server: expressServer })

const pinButtons = require('./pages/pin.js')
const audioButtons = require('./buttons/audio.js')()
const lightButtons = require('./buttons/light.js')()
const lockButton = require('./buttons/lock.js')({pagedStreamDeck,pinButtons})

addPage("main", require("./pages/main.js")({pagedStreamDeck, audioButtons, lockButton}))
addPage("web", require("./pages/web.js")({pagedStreamDeck}))
addPage("others", require("./pages/others.js")({pagedStreamDeck}))
addPage("lights", require("./pages/lights.js")({pagedStreamDeck, lightButtons}))
addPage("lightsWithText", require("./pages/lightsWithText.js")({pagedStreamDeck, lightButtons}))
addPage("icons", require("./pages/icons.js")({pagedStreamDeck}))
addPage("alarm", require("./pages/alarm.js")({pagedStreamDeck, expressApp}))
addPage("pin", pinButtons.buttons)
addPage("blankScreen", require("./pages/blankScreen.js")({pagedStreamDeck}))

pagedStreamDeck.onError((err) => {
    console.error("pagedStreamDeck error: "+err)
})
pagedStreamDeck.changePage("main")
pagedStreamDeck.setBrightness(100)
pagedStreamDeck.registerExpressWebview(expressApp, webSocketServer)
expressServer.listen(8080)

function addPage(name, buttons) {
	pagedStreamDeck.addPage({name,buttons})
}
