'use strict';

const assert = require('assert');

const Output = require('../src/models/output');

describe('Ouput', () => {

    it('should output simple file', () => {
        const caches = [];
        const text = Output.write(caches);
        assert.equal(text, `0`);
    });

    it('should output 1 cache', () => {
        const caches = [{
            id: 0,
            videos: [0]
        }];
        const text = Output.write(caches);
        assert.equal(text, `1
0 0`);
    });

    it('should output 3 caches', () => {
        const caches = [
            {
                id: 0,
                videos: [2]
            },
            {
                id: 1,
                videos: [3, 1]
            },
            {
                id: 2,
                videos: [0, 1]
            }
        ];
        const text = Output.write(caches);
        assert.equal(text, `3
0 2
1 3 1
2 0 1`);
    });


});