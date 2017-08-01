'use strict'

// TODO Empty array or filled with null/undefined?

// needs a way to check for wins and ties
//

// constructor to make a game board! this.newBoard will be used for reset
// this.board will be used for actual play.
// this.winState is all of the possible ways to win
// this.gameEnd says whether the game is over or not
// project said to assume x went first (this.currentPlayer = 'x')

const TicTacToe = function () {
  this.newBoard = [null, null, null, null, null, null, null, null, null]
  this.board = this.newBoard.slice()
  this.winState = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  this.gameEnd = false
  this.player = 'x'
  this.turn = 0
}

TicTacToe.prototype.fullBoard = function () { // says if the board is full or not
  return !this.board.includes(null)
}

TicTacToe.prototype.changePlayer = function () { // changes the current player (use ternary?)
  if (this.player === 'x') {
    this.player = 'o'
  } else {
    this.player = 'x'
  }
}

TicTacToe.prototype.makeMove = function (square) { // get square from html ids
  this.board[square] = this.player
}

TicTacToe.prototype.turnCount = function () { // Works now! lets you know what turn it is
  let count = 0
  for (let i = 0; i < this.board.length; i++) {
    if (this.board[i] === 'x' || this.board[i] === 'o') {
      count++
    }
  }
  this.turn = count
}

TicTacToe.prototype.getMoves = function () {
  const moves = []
  for (let i = 0; i < this.board.length; i++) {
    if (this.board[i] === this.player) {
      moves.push(i)
    }
  }
  return moves
}
/*
TicTacToe.prototype.checkWinStates = function (moves) { // Doesn't work
  for (let i = 0; i < this.winState.length; i++) {
    moves.includes(this.winState[i].every())
  }
}

TicTacToe.prototype.checkWinStates = function (moves) { // Also doesn't work
  for (let i = 0; i < this.winState.length; i++) {
    this.winStates[i].every((val) => moves.includes(val))
  }
}
*/
/*
TicTacToe.prototype.checkWinStates = function (moves) { // Really doesn't work
  return this.winState.every((e) => {
    const included = (moves.indexOf(e) >= 0)
    return included
  })
}
*/

TicTacToe.prototype.checkWinStates = function () {
  for (let i = 0; i < this.winState.length; i++) {
    if (this.getMoves.includes(this.winState[i])) {
      return true
    } else {
      return false
    }
  }
}
// TODO look up CSS Grids & FlexBox

module.exports = {
  TicTacToe
}
