/*!
 * test/pre-flight.js
 * 
 * Copyright (c) 2014
 */

define([
  'proclaim',
  'sinon',
  'pre-flight'
], function (assert, sinon, preflight) {


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
    this.options.type = 'GET';
    
    assert.equal(preflight(this.options).data, this.options.data);
  });

  it('Should not alter DELETE.', function () {
    this.options.type = 'DELETE';
    
    assert.equal(preflight(this.options).data, this.options.data);
  });

  it('Should stringify POST.', function () {
    this.options.type = 'POST';
    
    assert.equal(preflight(this.options).data, '{"key":"value"}');
  });

  it('Should stringify PUT.', function () {
    this.options.type = 'PUT';
    
    assert.equal(preflight(this.options).data, '{"key":"value"}');
  });

});


});