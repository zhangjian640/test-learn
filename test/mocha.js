const {should, expect, assert} = require('chai')
const {add, mul} = require('../src/math')

describe('#math', () => {
  describe('add', () => {
    it('2 + 3 = 5', () => {
      assert.equal(add(2, 3), 5)
    });
  });
  describe('mul', () => {
    it('2 * 3 = 6', () => {
      assert.equal(mul(2, 3), 6)
    });
  });
});