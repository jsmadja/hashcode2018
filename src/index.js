const Files = require('./utils/files');
const Main = require('./main');

let [videosInput, endpointsInput, cachesInput, requestsInput] = Files.fileReader('./data/example.in');

console.log(videosInput);
console.log(endpointsInput);
console.log(cachesInput);
console.log(requestsInput);

const solution = Main.calcSolution(videosInput, endpointsInput, cachesInput, requestsInput);

console.log(solution);