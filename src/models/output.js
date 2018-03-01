const fs = require('fs');
const _ = require('lodash');

module.exports = {
  // [{vehicle:1,rides:[1,2]}]
  write: vehicles => {
    let result = '';
    _.forEach(vehicles, vehicle => {
      result += `${vehicle.rides.length} ${_.join(vehicle.rides, ' ')}\n`
    });
    result = result.substr(0, result.length - 1);
    return result;
  },

  writeFile: (filename, content) => {
    console.log(`Creating ${filename}`);
    fs.writeFileSync(filename, content);
  }
};
