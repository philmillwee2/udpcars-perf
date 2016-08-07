"use strict";

const {createSocket} = require("dgram");

let socket = createSocket("udp4");

function stop(callback) {
  socket.close(callback);
}

function start(callback) {
  socket.bind(5606, callback);
}

function setEvent(type, callback) {
  socket.on(type, callback);
}

function getState() {
  return socket;
}

module.exports = {
  stop,
  start,
  setEvent,
  getState
};
