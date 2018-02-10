const fs = require('fs');
const _ = require('lodash');

module.exports = {
  write: data => {
    return data;
  },

  writeFile: (filename, content) => {
    console.log('OUT');
    console.log(content);
    fs.writeFileSync(filename, content);
  }
};