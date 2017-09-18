const assert = require('assert');
const { describe, it } = require('mocha')
const { clans } = require('../../lib/bungie');

/* eslint-disable func-names, prefer-arrow-callback */
describe('Bungie API', function () {
  this.timeout(3000);

  describe('clans', function () {
    describe('search()', function () {
      it('should succed', function (next) {
        clans.search({ name: 'Kangar' }).then((res) => {
          assert.equal(res.data.ErrorCode, 1, res.data.message);

          next();
        }).catch(err => next(err));
      });
    });

    describe('members()', function () {
      it('should return members', function (next) {
        clans.members(2072048).then((res) => {
          assert.equal(res.data.ErrorCode, 1, res.data);

          next();
        }).catch(err => next(err));
      });
    });

    describe('getByName()', function () {
      it('should find clan by name', function (next) {
        clans.getByName('Polish Kangaroos').then((res) => {
          assert.equal(res.data.ErrorCode, 1);

          next();
        }).catch(err => next(err));
      });
    });
  });
});
