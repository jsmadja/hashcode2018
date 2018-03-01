const assert = require('assert');
const Output = require('../src/models/output');

describe('Output', () => {

  it('should create output', () => {
    // WHEN
    let output = Output.write([{vehicle: 1, rides: [0]}, {vehicle: 2, rides: [2, 1]}]);
    // THEN
    assert.equal(output, "1 0\n2 2 1");
  });

});