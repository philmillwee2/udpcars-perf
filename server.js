"use strict";

const listener = require("./src/lib/listener");

let queue = [];

listener.start(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("[server] UDP services started successfully");
  }
});

listener.setEvent("message", function(clientMsg) {
  let timestamp = (new Date()).toISOString();
  console.log(timestamp, clientMsg);
});

console.log("Server shutdown successfully.");
