'use strict';

class RequestDescription {
  //videoId;
  //endpointId;
  //numberOfRequests;

  constructor(videoId, endpointId, numberOfRequests) {
    this.videoId = videoId;
    this.endpointId = endpointId;
    this.numberOfRequests = numberOfRequests;
  }

  static computeMapRequest(requestDescriptions) {
    const r = {};
    for (let rd of requestDescriptions) {
      r[rd.videoId] = rd.numberOfRequests;
    }
    return r;
  }

}

module.exports = RequestDescription;