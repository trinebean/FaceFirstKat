var request = require('superagent');
// var expect = require('expect.js');

var assert = require('assert'),
    http = require('http');


describe('/userform', function () {
  it('should return userform page with album name', function (done) {
    http.get('http://lambda-face-recognition.p.mashape.com/album?album=FaceFirstMaster&albumkey=0d1a139f200fe0c384889988c4f1100653bae670d7cb58c974a72c16cdbfa961', function (res) {
      assert.equal(200, res.status);
      done();
    });
  });
});
