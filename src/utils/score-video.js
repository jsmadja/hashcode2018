const _ = require('lodash');

module.exports = {

  scoreVideo: (endpoints, videos, x = 1, y = 1, z = 1) => {

    _.each(videos, video => {

      video.score = 0;
    });

    _.each(endpoints, endpoint => {

      _.mapKeys(endpoint.requests, (value, key) => {

        const video = _.find(videos, video => video.id === parseInt(key, 10));
        video.score += (x * parseInt(value, 10)) / (y * parseInt(video.size, 10) * z * parseInt(endpoint.datacenterLatency, 10));
      });
    });

    return _.sortBy(videos, video => -video.score);

  }
};