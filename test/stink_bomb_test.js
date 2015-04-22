'use strict';

var chai = require('chai');
chai.use(require('dirty-chai'));
var expect = chai.expect;

var moment = require('moment');
var StinkBomb = require('../lib/stink_bomb');

describe('stink_bomb', function () {
  it('does nothing by default', function () {
    expect(function () {
      StinkBomb.create('1990-03-15', { message: 'Boo!' });
    }).not.to.throw();
  });

  describe('when raise is configured to true', function () {
    beforeEach(function () {
      StinkBomb.configure({ raise: true });
    });

    it('raises the specified error when day is before now', function () {
      expect(function () {
        StinkBomb.create('1990-03-15', { message: 'Boo!' });
      }).to.throw('Boo!');
    });

    it('raises a generic error when no error specified', function () {
      expect(function () {
        StinkBomb.create('1990-03-15');
      }).to.throw('Your code stinks!');
    });

    it('does not raise if given day is now or after', function () {
      expect(function () {
        StinkBomb.create(moment());
      }).not.to.throw();
    });
  });
});
