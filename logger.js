var fs = require('fs');

function lumberyard() {

  this.init = function(fileName, callback) {
    fs.writeFile(fileName, 'Hello World', function(err) {
      callback();
    });
  };
}

module.exports = lumberyard;
