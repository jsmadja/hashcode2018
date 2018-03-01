const assert = require('assert');
const Files = require('../src//utils/files');

describe('Files', () => {

  it('should parse a_example', () => {
    const data = Files.fileReader('./data/a_example.in');
    assert.deepEqual(data,
      {
        grid: {
          x: 3,
          y: 4,
        },
        vehicles: 2,
        bonus: 2,
        steps: 10,
        rides: [
          {
            start: {
              x: 0,
              y: 0,
              time: 2,
            },
            finish: {
              x: 1,
              y: 3,
              time: 9,
            }
          },
          {
            start: {
              x: 1,
              y: 2,
              time: 0,
            },
            finish: {
              x: 1,
              y: 0,
              time: 9,
            }
          },
          {
            start: {
              x: 2,
              y: 0,
              time: 0,
            },
            finish: {
              x: 2,
              y: 2,
              time: 9,
            }
          }
        ]
      });
  });

  it('should parse b_should_be_easy.in', () => {
    const data = Files.fileReader('./data/b_should_be_easy.in');
    assert.equal(data.rides.length, 300);
  });

  it('should parse c_no_hurry.in', () => {
    const data = Files.fileReader('./data/c_no_hurry.in');
    assert.equal(data.rides.length, 10000);
  });

  it('should parse d_metropolis.in', () => {
    const data = Files.fileReader('./data/d_metropolis.in');
    assert.equal(data.rides.length, 10000);
  });

  it('should parse e_high_bonus.in', () => {
    const data = Files.fileReader('./data/e_high_bonus.in');
    assert.equal(data.rides.length, 10000);
  });


});