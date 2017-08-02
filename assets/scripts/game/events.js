'use strict'

const logic = require('./logic.js')

const game = new logic.TicTacToe()

const validMove = function (box) {
  if (box.html() === '') {
    return true
  }
  return false
}

const makeMove = function (id) {
  const $box = $('#' + id)
  const valid = validMove($box)

  if (valid) {
    game.makeMove(id)
    console.log(game.board)
  }
}

module.exports = {
  makeMove
}
