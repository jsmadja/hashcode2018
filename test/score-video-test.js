'use strict';

const assert = require('assert');

const ScoreVideo = require('../src/utils/score-video');

describe('Score videos', () => {

  it('should sort video', () => {

    // GIVEN

    // WHEN
    const scoredVideos = ScoreVideo.scoreVideo(
      [{latency: 1, requests: [{numberOfRequests: 1, videoId: 0}, {numberOfRequests: 2, videoId: 1}]}],
      [{id: 0, score: 9, size: 1}, {id: 1, score: 8, size: 1}]
    );

    // THEN
    assert.deepEqual([
      {id: 1, score: 2, size: 1},
      {id: 0, score: 1, size: 1},
    ], scoredVideos);
  });

});