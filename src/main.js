'use strict';

const filterVideos = v => {
  return v.slice(0, 5);
};

const timeSaved = (video, cache) => {
  if (cache.size < video.size) {
    return 0;
  }
  return cache.endpointInfos.reduce((total, endpointInfo) => {
    const numberOfRequests = endpointInfo.endpoint.requests[video.id];
    return total + numberOfRequests * (endpointInfo.endpoint.latency - endpointInfo.latency);
  }, 0);
};

module.exports = {

  calcSolution: (videosInput, endpointsInput, cachesInput, requestsInput) => {

    let areCachesFull = false;
    const result = [];

    while (!areCachesFull) {
      let bestScore = 0;
      let bestCache = null;
      let bestVideo = null;

      const weightedVideos = filterVideos(videosInput);

      weightedVideos.forEach((video) => {
        cachesInput.forEach((cache) => {
          const score = timeSaved(video, cache);
          if (score > bestScore) {
            bestCache = cache;
            bestScore = score;
            bestVideo = video;
          }
        })
      });

      if (bestScore === 0) {
        return result;
      }

      result.push({
        video: bestVideo.id,
        cache: bestCache.id,
      });

      bestCache.size -= bestVideo.size;
      bestCache.endpointInfos.forEach(({endpoint}) => {
        if (endpoint.requests[bestVideo.id]) {
          delete endpoint.requests[bestVideo.id];
        }
      });
    }
  },


};

