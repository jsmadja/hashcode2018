const Files = require('./utils/files');
const Main = require('./main2');
const Output = require('./models/output');

const FILE = process.argv[2];

const algoInput = Files.fileReader(`./data/${FILE}.in`);

const solution = Main.calcSolution(algoInput);

Output.writeFile(('./' + FILE + '.out'), Output.write(solution));
