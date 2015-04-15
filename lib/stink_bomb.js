'use strict';

var moment = require('moment');

var _configuration = {
  raise: false
};

var StinkBomb = {
  create: function (date, options) {
    options = options || {};

    var now = moment();
    if (now.isAfter(date)) {
      if (_configuration.raise) {
        var message = options.message || 'Your code stinks!';
        throw message;
      }
    }
  },

  configure: function (myConfiguration) {
    var keys = Object.keys(Object(myConfiguration));

    for (var i = 0; i < keys.length; i++) {
      _configuration[keys[i]] = myConfiguration[keys[i]];
    }
  }
};

module.exports = StinkBomb;
