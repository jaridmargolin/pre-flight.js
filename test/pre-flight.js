/*!
 * test/pre-flight.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'assist/jsonClone',
  'pre-flight'
], function (assert, sinon, jsonClone, preflight) {


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

describe('pre-flight.js', function () {

  beforeEach(function () {
    this.options = {
      data: { 'key': 'value' }
    };
  });

  it('Should not alter GET.', function () {
    var options = jsonClone(this.options);
    options.type = 'GET';
    
    assert.deepEqual(preflight(options).data, this.options.data);
  });

  it('Should not alter DELETE.', function () {
    var options = jsonClone(this.options);
    options.type = 'DELETE';
    
    
    assert.deepEqual(preflight(options).data, this.options.data);
  });

  it('Should stringify POST.', function () {
    var options = jsonClone(this.options);
    options.type = 'POST';
    
    assert.equal(preflight(options).data, '{"key":"value"}');
  });

  it('Should stringify PUT.', function () {
    var options = jsonClone(this.options);
    options.type = 'PUT';
    
    assert.equal(preflight(options).data, '{"key":"value"}');
  });

});


});