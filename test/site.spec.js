'use strict';
/*global describe, it, before, beforeEach, after, afterEach */

// const obj = {
//     a: 1,
//     b: 2,
// };
const app = require("../");
const request = require('supertest');

describe("Our amazing site", () => {
    it('has a nice welcoming message', (done) => {
        request(app.listen())
            .get('/')
            .expect('Koa says Hi!')
            .end(done);
    });
});
