export default class RequestDescription {

  videoId;
  endpointId;
  numberOfRequests;

  constructor(videoId, endpointId, numberOfRequests) {

    this.videoId = videoId;
    this.endpointId = endpointId;
    this.numberOfRequests = numberOfRequests;
  }
}