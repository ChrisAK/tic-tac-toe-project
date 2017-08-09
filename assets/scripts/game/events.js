'use strict'

const logic = require('./logic')
const ui = require('../ui')
const store = require('../store')
const api = require('../auth/api')
const getFormFields = require('../../../lib/get-form-fields.js')

const game = new logic.TicTacToe()

const validMove = function (box) {
  if (box.html() === '' && game.gameEnd === false) {
    return true
  }
  return false
}

const readyUser = function () {
  if (!store.user) {
    ui.promptSignIn()
    return false
  }
}

const makeMove = function (id) {
  const $box = $('#' + id)
  const valid = validMove($box)
  const ready = readyUser()

  if (valid /*&& ready*/) {
    game.makeMove(id)
    ui.drawMove($box, game.player)
    game.turnCount()
    $('.turns').html(game.turn)
    console.log(game.board) // for testing
    console.log(game.turn) // for testing

    if (game.turn >= 5) {
      game.checkForWin()
      winMessage()
      game.winCount()
      $('.wins').html(game.xWins)
      $('.losses').html(game.losses)
    }
    game.changePlayer()
  }
}

const winMessage = function () {
  const winner = game.checkForWin()
  if (game.gameEnd && !game.fullBoard()) {
    $('.win-time').html('It\'s a ' + winner.toUpperCase() + '!')
  } else if (game.gameEnd && game.fullBoard()) {
    $('.win-time').html('It\'s a ' + winner.toUpperCase() + '!')
  }
}

const reset = function (event) {
  $('.win-time').html('')
  $('.cell').html('')
  game.reset()
  $('.turns').html(game.turn)
  console.log(game.board)
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  makeMove,
  game,
  winMessage,
  addHandlers,
  reset
}
