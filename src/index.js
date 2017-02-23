const Files = require('./utils/files');
const Main = require('./main');
const Output = require('./models/output');

// FILE = 'me_at_the_zoo';
FILE = 'videos_worth_spreading';
let [videosInput, endpointsInput, cachesInput, requestsInput] = Files.fileReader(`./data/${FILE}.in`);

// console.log(videosInput);
// console.log(endpointsInput);
// console.log(cachesInput);
// console.log(requestsInput);

const solution = Main.calcSolution(videosInput, endpointsInput, cachesInput, requestsInput);

// console.log(solution);
Output.writeFile(('./' + FILE + '.out'), Output.write(solution));