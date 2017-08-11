'use strict'

const logic = require('./game/logic')
const app = require('./app')

const game = new logic.TicTacToe()

const drawMove = function (box, player) {
  box.html(player)
}

const promptSignIn = function () {
  console.log('Not Signed In!')
  $('#prompt-sign-in').removeClass('hidden')
}

const checkSignIn = function () {
  if (app.user) {
  }
}

const toggleMenu = function () {
  $('header').toggleClass('toggle')
  $('.main').toggleClass('push')
  $('.overlay').toggleClass('block')
  $('#social, .logo').toggleClass('reveal')
}

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app)
  $('#sign-in, #sign-up, #prompt-sign-in').addClass('hidden')
  $('#start-game').removeClass('hidden')
  $('.counters').removeClass('hidden')
  $('#get-games').removeClass('hidden')
  $('#reset').removeClass('hidden')
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
  $('.win-time').html('')
  $('.cell').html('')
  game.reset()
  $('.wins, .turns, .losses').html('0')
  $('#sign-in, #sign-up').removeClass('hidden')
  $('#start-game').addClass('hidden')
  $('#board').addClass('hidden')
  $('#games-played').html('')
  $('.counters').addClass('hidden')
  $('#get-games').addClass('hidden')
  $('#reset').addClass('hidden')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const success = (data) => {
  console.log(data)
  $('#sign-up-error').addClass('hidden')
}

const failure = (error) => {
  console.error(error)
  $('#sign-up-error').removeClass('hidden')
}

const createGameSuccess = (data) => {
  console.log(data)
  app.game = data.game
  app.game.id = data.game.id
}

const updateGameSuccess = function () {
  console.log('You did it!')
}

const getGameSuccess = function (data) {
  $('#games-played').html(data.games.length)
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  drawMove,
  promptSignIn,
  checkSignIn,
  toggleMenu,
  createGameSuccess,
  updateGameSuccess,
  getGameSuccess
}
