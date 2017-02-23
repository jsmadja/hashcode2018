const _ = require('lodash');

module.exports = {

  scoreVideo: (videos, endpoints, requests, x = 1, y = 1, z = 1) => {

    _.each(videos, video => {

      video.score = 0
    });

    _.each(requests, request => {

      const video = videos[request.videoId];
      const endpoint = endpoints[request.endpointId];

      video.score += x * request.numberOfRequests / y * video.size * z * endpoint.latency;
    });

    return _.sortBy(videos, video => -video.score);

  }
};