"use strict";

const {expect} = require("chai");
const {createSocket} = require("dgram");
const listener = require("../lib/listener");

describe("listener module", function() {

  beforeEach(function(done) {
    listener.start(done);
  });

  afterEach(function(done) {
    listener.stop(done);
  });

  it("should start successfully", function() {
    expect(listener.getState()).to.have.property("_bindState", 2);
  });
});
