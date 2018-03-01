const fs = require('fs');
const _ = require('lodash');

module.exports = {
  // [{vehicle:1,rides:[1,2]}]
  write: vehicles => {
    let result = '';
    _.forEach(vehicles, vehicle => {
      result += `${vehicle.vehicle}`;
      _.forEach(vehicle.rides, ride => {
        result += ` ${ride}`;
      });
      result += '\n';
    });
    result = result.substr(0, result.length - 1);
    return result;
  },

  writeFile: (filename, content) => {
    console.log('OUT');
    console.log(content);
    fs.writeFileSync(filename, content);
  }
};
