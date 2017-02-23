const _ = require('lodash');

module.exports = {

  scoreVideo: (endpoints, videos, x = 1, y = 1, z = 1) => {

    _.each(videos, video => {

      video.score = 0;
    });

    _.each(endpoints, endpoint => {
      _.each(endpoint.requests, request => {
        const video = videos[request.videoId];
        video.score += x * request.numberOfRequests / y * video.size * z * endpoint.latency;
      });
    });

    return _.sortBy(videos, video => -video.score);

  }
};