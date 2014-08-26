/*!
 * pre-flight.js
 * 
 * Copyright (c) 2014
 */


define(function () {


/* -----------------------------------------------------------------------------
 * preflight
 * ---------------------------------------------------------------------------*/

/**
 * Tiny method to alter $.ajax to send JSON.stringified
 * body for POST and PUT requests.
 *
 * @example
 * $.ajax(preflight(options))
 *
 * @public
 *
 * @param {object} options - JQuery options object to alter.
 * @returns {object} options - passed object.
 */
return function (options) {
  var type = options.type;
  if ((type === 'POST' || type === 'PUT') && options.data) {
    options.data = JSON.stringify(options.data);
  }

  return options;
};


});