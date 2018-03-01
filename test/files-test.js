const assert = require('assert');
const Files = require('../src//utils/files');

describe('Files', () => {

  it('should parse a_example', () => {
    const data = Files.fileReader('./data/a_example.in');
    console.log(data);
  });

});