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

});