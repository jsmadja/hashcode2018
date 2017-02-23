import {fileReader, fileWriter} from './utils/files';

let videos, endpoints, caches, requests;
[videos, endpoints, caches, requests] = fileReader('./data/example.in');

console.log(videos);
console.log(caches);
for(const cache of caches){
	console.log(cache.endpointInfos);
}
console.log(endpoints);
console.log(requests);