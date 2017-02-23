'use strict';

class Endpoint {
  constructor(id, datacenterLatency) {
    this.id = id;
    this.caches = [];
    this.requests = {};
    this.datacenterLatency = datacenterLatency;
  }
}

module.exports = Endpoint;