import {fileReader, fileWriter} from './utils/files';

let videos, endpoints, requests;
[videos, endpoints, requests] = fileReader('./data/example.in');

console.log(videos);
console.log(endpoints);
console.log(requests);