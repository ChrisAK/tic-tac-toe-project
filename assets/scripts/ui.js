const logic = require('./game/logic')
const events = require('./game/events')
const store = require('./store')
const gamm = events.game

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

module.exports = {
  drawMove,
  promptSignIn,
  checkSignIn
}
