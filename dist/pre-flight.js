(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], function () {
      return (root.returnExportsGlobal = factory());
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['preflight'] = factory();
  }
}(this, function () {

/*!
 * pre-flight.js
 * 
 * Copyright (c) 2014
 */
var preFlight;
preFlight = function (options) {
  if ((options.type === 'POST' || 'PUT') && options.data) {
    options.data = JSON.stringify(options.data);
  }
  return options;
};

return preFlight;


}));