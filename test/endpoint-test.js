'use strict';

const assert = require('assert');
const _ = require('lodash');
const RequestDescription = require('../src/models/request-description');

describe('Endpoint', () => {

  it('compute map of 1 request', () => {
    const requestDescriptions = [{
      videoId: 0,
      numberOfRequests: 1
    }];
    const map = RequestDescription.computeMapRequest(requestDescriptions);
    assert.deepEqual(map, {
      0: 1
    });
  });

  it('compute map of 2 requests', () => {
    const requestDescriptions = [
      {
        videoId: 0,
        numberOfRequests: 1
      },
      {
        videoId: 2,
        numberOfRequests: 100
      }];
    const map = RequestDescription.computeMapRequest(requestDescriptions);
    assert.deepEqual(map, {
      0: 1,
      2: 100
    });
  });

});