'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const gameEvents = require('./game/events')
const ui = require('./ui')
const authEvents = require('./game/events')

$(() => {
  // ui.checkSignIn()
  $('.cell').on('click', function () {
    gameEvents.makeMove(this.id)
  })
  $('.navBtn').click(function () {
    ui.toggleMenu()
  })
  $('#reset').on('click', function () {
    gameEvents.reset()
  })
  $('#start-game').on('click', function () {
    gameEvents.onCreateGame()
    $('#board').removeClass('hidden')
    $('#start-game').addClass('hidden')
  })
  $('#get-games').on('click', function () {
    gameEvents.onGetGame()
  })
  authEvents.addHandlers()
})
