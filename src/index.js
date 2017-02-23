const Files = require('./utils/files');
const Main = require('./main');
const Output = require('./models/output');

FILE = 'example';
let [videosInput, endpointsInput, cachesInput, requestsInput] = Files.fileReader('./data/' + FILE + '.in');

console.log(videosInput);
console.log(endpointsInput);
console.log(cachesInput);
console.log(requestsInput);

const solution = Main.calcSolution(videosInput, endpointsInput, cachesInput, requestsInput);

console.log(solution);
console.log(Output.writeFile(('./' + FILE + '.out'), Output.write(solution)));