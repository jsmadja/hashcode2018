import fs from 'fs';

import RequestDescription from '../models/request-description';
import Cache from '../models/cache';
import Endpoint from '../models/endpoint';
export Video from '../models/video';

export function fileReader(filePath) {

    const videos = [];
    const endpoints = [];
    const requests = [];
    let numberOfVideos = 0;
    let numberOfEndpoints = 0;
    let numberOfRequestDescriptions = 0;
    let numberOfCaches = 0;
    let cacheSize = 0;

    const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
    let splittedContent = fileContent.split('\n');
    [numberOfVideos, numberOfEndpoints, numberOfRequestDescriptions, numberOfCaches, cacheSize] = splittedContent[0].split(' ').map((number) => parseInt(number));
    splittedContent[1].split(' ').forEach((videoSize, index) => {
        const video = new Video(index, videoSize);
        videos.push(video);
    });
    splittedContent = splittedContent.slice(2, splittedContent.length);

    let lineIndex = 0;

    for (let endpointIndex = 0; endpointIndex < numberOfEndpoints; endpointIndex++) {
        let endpointLatency, numberOfCaches;
        [endpointLatency, numberOfCaches] = splittedContent[lineIndex].split(' ');
        const endpoint = new Endpoint(endpointLatency);
        endpoints.push(endpoint);
        lineIndex++;
        for (let cacheIndex = 0; cacheIndex < numberOfCaches; cacheIndex++) {
            let cacheId, cacheLatency;
            [cacheId, cacheLatency] = splittedContent[lineIndex].split(' ');
            const cache = new Cache(cacheId, cacheLatency, cacheSize);
            endpoint.caches.push(cache);
            lineIndex++;
        }
    }

    splittedContent = splittedContent.slice(lineIndex, splittedContent.length);
    for (let requestIndex = 0; requestIndex < numberOfRequestDescriptions; requestIndex++) {
        let requestId, endpointId, numberOfRequests;
        [requestId, endpointId, numberOfRequests] = splittedContent[requestIndex].split(' ');
        const request = new RequestDescription(requestId, endpointId, numberOfRequests);
        requests.push(request);
    }

    return [videos, endpoints, requests];
}

export function fileWriter(fileName, content) {

    fs.writeFileSync(fileName, content);

}
