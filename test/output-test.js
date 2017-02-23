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
            video: 0
        }];
        const text = Output.write(caches);
        assert.equal(text, `1
0 0`);
    });

    it('should output 3 caches', () => {
        const caches = [
            {
                id: 0,
                video: 2
            },
            {
                id: 1,
                video: 3
            },
            {
                id: 1,
                video: 1
            },
            {
                id: 2,
                video: 0
            },
            {
                id: 2,
                video: 1
            }
        ];
        const text = Output.write(caches);
        assert.equal(text, `3
0 2
1 3 1
2 0 1`);
    });

    it('should output 1 cache (merged version)', () => {
        const caches = [
            {
                id: 0,
                video: 1
            },
            {
                id: 0,
                video: 2
            }
        ];
        const text = Output.write(caches);
        assert.equal(text, `1
0 1 2`);
    });


});