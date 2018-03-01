const fs = require('fs');
const _ = require('lodash');

module.exports = {

  fileReader: filePath => {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let splittedContent = fileContent.trim().split('\n');
    return _(splittedContent).map(row => row.split(' '))
    .map(row => ({ R: row[0], C: row[1], F: row[2], N: row[3], B: row[4], T: row[5] }))
    .value();
  },

};
