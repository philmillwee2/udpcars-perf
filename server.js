"use strict";

const listener = require("./src/lib/listener");

let queue = [];
let startTime, stopTime;

listener.start(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.time("time");
    console.log("[server] UDP services started successfully");
  }
});

listener.setEvent("message", function(clientMsg) {
  let timestamp = (new Date()).toISOString();
  if(queue.length < 1000) {
    queue.push({
      timestamp: timestamp,
      buffer: clientMsg
    });
  } else {
    listener.stop(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.timeEnd("time");
        console.log(queue.length);
        console.log("Server shutdown successfully.");
      }
    });
  }
});
