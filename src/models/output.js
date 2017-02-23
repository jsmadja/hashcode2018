'use strict';

const _ = require('lodash');

const toCacheLine = cache => `${cache.id} ${_.join(cache.videos, ' ')}`;

module.exports = {
    write: caches => (caches.length + '\n' + _.map(caches, toCacheLine).join('\n')).trim()
};