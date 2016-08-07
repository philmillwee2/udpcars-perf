"use strict";

const listener = require("./src/lib/listener");

listener.start(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("[server] UDP services started successfully");
  }
});

listener.setEvent("message", function(clientMsg) {
  console.log(clientMsg);
});

console.log("Server shutdown successfully.");
