(function(root, factory) {
  if(typeof exports === 'object') {
    module.exports = factory(require('moment'));
  } else if(typeof define === 'function' && define.amd) {
    define(['moment'], factory);
  } else {
    root.StinkBomb = factory(root.moment);
  }
}(this, function(moment) {
  var require = function(name) {
    return {'moment': moment}[name];
  };
require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"stink-bomb":[function(require,module,exports){
'use strict';

var moment = require('moment');

var _configuration = {
  raise: false
};

function checkBombs(options) {
  if (_configuration.raise) {
    var message = options.message || 'Your code stinks!';
    throw message;
  }
}

var StinkBomb = {
  create: function (date, options) {
    options = options || {};

    var now = moment();
    if (now.isAfter(date)) {
      checkBombs(options);
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

},{"moment":"moment"}]},{},[]);
  return require('stink-bomb');
}))
