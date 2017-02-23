'use strict';

class Cache {
  constructor(id, size) {
    this.id = id;
    this.size = size;
    this.endpointInfos = [];
  }
}

module.exports = Cache;