const Files = require('./utils/files');
const Main = require('./main');
const Output = require('./models/output');

FILE = 'a_example';
const algoInput = Files.fileReader(`./data/${FILE}.in`);

const solution = Main.calcSolution(algoInput);

Output.writeFile(('./' + FILE + '.out'), Output.write(solution));
