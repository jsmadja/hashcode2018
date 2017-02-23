import fs from 'fs';

export function fileReader(filePath) {

    const videos = [];
    const endpoints = [];
    const requests = [];
    const caches = [];
    let numberOfVideos = 0;
    let numberOfEndpoints = 0;
    let numberOfRequests = 0;
    let numberOfCaches = 0;
    let cacheSize = 0;
    
    const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});
    let splittedContent = fileContent.split('\n');
    [numberOfVideos, numberOfEndpoints, numberOfRequests, numberOfCaches, cacheSize] = splittedContent[0].split(' ').map((number) => parseInt(number));
    splittedContent[1].split(' ').forEach((videoSize, index) => {
        videos.push({
            id: index,
            size: videoSize
        });
    });
    splittedContent = splittedContent.slice(2, splittedContent.length);

    let inEndpointDescription = false;
    let endpointIndex = 0;
    let numberOfCachesAlreadyDescribed = 0;

    while(true) {
        if(!inEndpointDescription){
            if(splittedContent[endpointIndex] == '') {
                break;
            }
            // Get Endpoint description line
            let endpointLatency = 0
            let numberOfCaches = 0;
            [endpointLatency, numberOfCaches] = splittedContent[endpointIndex].split(' ');
            numberOfCachesAlreadyDescribed = numberOfCaches;
            inEndpointDescription = true;
        } else {
            for(let cacheIndex = 1; cacheIndex <= numberOfCaches; cacheIndex++){
                let cacheId = 0;
                let latency = 0;
                [cacheId, latency] = splittedContent[endpointIndex+cacheIndex].split(' ');
                caches.push({
                    cacheId,
                    latency
                })
                numberOfCachesAlreadyDescribed--;
            }
            inEndpointDescription = false;
        }
        endpointIndex += numberOfCaches;
    }

    return caches;
}

export function fileWriter(fileName, content) {
    
    fs.writeFileSync(fileName, content);

}
