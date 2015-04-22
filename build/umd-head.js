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
