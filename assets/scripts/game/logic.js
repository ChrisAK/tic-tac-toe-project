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
  this.xWins = 0
  this.losses = 0
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

TicTacToe.prototype.compareWinStates = function (playerArray, winArrays) { // checks arrays to look for match
  return winArrays.every((e) => {
    const included = (playerArray.indexOf(e) >= 0)
    return included
  })
}

TicTacToe.prototype.checkForWin = function () { // checks for a winner
  const moves = this.getMoves()
  let winner = null

  if (this.fullBoard()) {
    winner = 'tie'
    this.gameEnd = true
  }

  for (let i = 0; i < this.winState.length; i++) {
    const won = this.compareWinStates(moves, this.winState[i])

    if (won === true) {
      winner = this.player
      this.gameEnd = true
    }
  }
  return winner
}

TicTacToe.prototype.winCount = function () {
  const winner = this.checkForWin()
  if (winner === 'x') {
    this.xWins++
  } else if (winner === 'o') {
    this.losses++
  }
}

TicTacToe.prototype.reset = function () { // resets the game
  this.gameEnd = false
  this.player = 'x'
  this.turn = 0
  this.board = this.newBoard.slice()
}
// TODO look up CSS Grids & FlexBox

module.exports = {
  TicTacToe
}
