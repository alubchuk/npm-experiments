'use strict';

/*global describe, it, before, beforeEach, after, afterEach */
const should = require('should');
const Greeter = require('../lib/tsCode.js');

describe("Typescript is compiled ok", () => {
    it("when this passed", () => {
        const greeter = new Greeter();
        greeter.greet("Yoda").should.equal("A type-scripting greeting to you, Yoda");
    });
});
