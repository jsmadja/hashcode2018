const fs = require('fs');
module.exports = {

  fileReader: filePath => {
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let splittedContent = fileContent.split('\n');
    console.log('IN');
    console.log(splittedContent);
    return [splittedContent];
  },

};
