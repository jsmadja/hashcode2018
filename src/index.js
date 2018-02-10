const Files = require('./utils/files');
const Main = require('./main');
const Output = require('./models/output');

FILE = 'example';
const [data] = Files.fileReader(`./data/${FILE}.in`);

const solution = Main.calcSolution(data);

Output.writeFile(('./' + FILE + '.out'), Output.write(solution));
