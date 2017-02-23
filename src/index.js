import {fileReader, fileWriter} from './utils/files';
import {calcSolution} from './main';

let [videosInput, endpointsInput, cachesInput, requestsInput ] = fileReader('./data/example.in');

console.log(videosInput);
console.log(endpointsInput);
console.log(cachesInput);
console.log(requestsInput);

const solution = calcSolution(videosInput, endpointsInput, cachesInput, requestsInput);

console.log(solution)