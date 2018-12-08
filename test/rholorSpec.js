const assert = require('assert');

const rh = require('../rholor');

describe('rholor', function () {
  const color = rh();
  it('should be okay', function () {
    assert.ok(color);
  });
});