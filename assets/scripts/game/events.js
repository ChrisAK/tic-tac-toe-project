'use strict'

const logic = require('./logic')
const ui = require('../ui')
const store = require('../store')

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

  if (valid /* && ready */) {
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
    $('.win-time').html(winner.toUpperCase() + ' has won!')
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

module.exports = {
  makeMove,
  game,
  winMessage,
  reset
}
