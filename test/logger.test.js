var Logger = require('../logger.js');
var expect = require('chai').expect;
var fs = require('fs');

describe('The great lumberjack', function() {

  it('Should create a new file', function(done) {
    var log = new Logger();
    var fileName = 'logger.log';
    log.init('logger.log', function(err) {
      fs.stat(fileName, function(err, data) {
        if (err || !data.isFile()) {
          done(err);
        } else {
          expect(data.isFile()).to.equal(true);
          done();
        }
      });
    });
  });

  it('Should prepend LOG to argument');

  it('Should prepend INFO to argument and save file');
});
