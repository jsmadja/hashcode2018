const fs = require('fs');
const _ = require('lodash');

module.exports = {

  fileReader: filePath => {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let splittedContent = fileContent.trim().split('\n');
    let firstLine = splittedContent[0];
    const dataFirstLine = _.map(firstLine.split(' '), d => parseInt(d));
    const algoInput = {
      grid: {
        x: dataFirstLine[0],
        y: dataFirstLine[1]
      },
      vehicles: dataFirstLine[2],
      bonus: dataFirstLine[4],
      steps: dataFirstLine[5],
      rides: [],
    };
    for (let i = 1; i <= dataFirstLine[3]; i++) {
      let rideLine = splittedContent[i];
      const rideFirstLine = _.map(rideLine.split(' '), d => parseInt(d));
      algoInput.rides.push(
        {
          start: {
            x: rideFirstLine[0],
            y: rideFirstLine[1],
            time: rideFirstLine[4],
          },
          finish: {
            x: rideFirstLine[2],
            y: rideFirstLine[3],
            time: rideFirstLine[5],
          },
        }
      );
    }
    return [algoInput];
  },

};