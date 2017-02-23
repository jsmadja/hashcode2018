'use strict';

const _ = require('lodash');

const toCacheLine = cache => `${cache[0].id} ${_(cache).map(c => c.video).join(' ')}`;

module.exports = {
    write: caches => {
        const cachesById = _.groupBy(caches, cache => cache.id);
        return (_.keys(cachesById).length + '\n' + _.map(cachesById, toCacheLine).join('\n')).trim();
    }
};