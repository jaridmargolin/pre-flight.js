/*!
 * pre-flight.js
 * 
 * Copyright (c) 2014
 */





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
module.exports = function (options) {
  if ((options.type === 'POST' || 'PUT') && options.data) {
    options.data = JSON.stringify(options.data);
  }

  return options;
};


