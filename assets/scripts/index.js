'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const gameLogic = require('./game/logic')
const gameEvents = require('./game/events')
const ui = require('./ui')

$(() => {
  // ui.checkSignIn()
  $('.cell').on('click', function () {
    gameEvents.makeMove(this.id)
  })
  $('.navBtn').click(function () {
    ui.toggleMenu()
  })
})
