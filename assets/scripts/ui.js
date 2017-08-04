'use strict'

const logic = require('./game/logic')
const events = require('./game/events')
const store = require('./store')
const app = require('./app')

const drawMove = function (box, player) {
  box.html(player)
}

const promptSignIn = function () {
  console.log('Not Signed In!')
}

const checkSignIn = function () {
  if (store.user) {
    $('#sign-in, #sign-up').addClass('hidden')
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
}

const signOutSuccess = () => {
  app.user = null
  console.log(app)
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
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
  toggleMenu
}
