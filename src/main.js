'use strict';

const { scoreVideo } = require('./utils/score-video');

const filterVideos = v => {
  const total = v.length;
  const number = 10;
  const randomIndex = Math.floor(Math.random() * Math.max(total - number, 0));
  return v.slice(randomIndex, randomIndex + number);
};

const timeSaved = (video, cache) => {
  if (cache.size < video.size) {
    return 0;
  }
  return cache.endpointInfos.reduce((total, endpointInfo) => {
    const numberOfRequests = endpointInfo.endpoint.requests[video.id] || 0;
    return total + numberOfRequests * (parseInt(endpointInfo.endpoint.datacenterLatency, 10) - endpointInfo.latency);
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

      // console.log('weightedVideos')
      // console.log(weightedVideos)

      weightedVideos.forEach((video) => {
        cachesInput.forEach((cache) => {
          const score = timeSaved(video, cache);
          // console.log(`score for video ${video.id} in cache ${cache.id} :`)
          // console.log(score)
          if (score > bestScore) {
            bestCache = cache;
            bestScore = score;
            bestVideo = video;
          }
        })
      });

      if (bestScore === 0) {
        console.log('best score 0')
        return result;
      }

      result.push({
        video: bestVideo.id,
        id: bestCache.id,
      });

      // console.log('found result')
      // console.log('video ' + bestVideo.id)
      // console.log('cache ' + bestCache.id)

      bestCache.size -= bestVideo.size;
      bestCache.endpointInfos.forEach(({endpoint}) => {
        if (endpoint.requests[bestVideo.id]) {
          // console.log('deleted')
          delete endpoint.requests[bestVideo.id];
        }
      });
    }
  },


};

