/*!
 * test/_amd.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'pre-flight/pre-flight'
], function (assert, sinon, preflight) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('amd - pre-flight.js', function () {

  it('Should expose preflight function.', function () {
    assert.isFunction(preflight);
  });

});


});