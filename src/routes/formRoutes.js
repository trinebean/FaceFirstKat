var express = require('express');
var unirest = require('unirest');

var formRouter = express.Router();

var userkey = "0d1a139f200fe0c384889988c4f1100653bae670d7cb58c974a72c16cdbfa961";

var userform = [];

unirest.get("https://lambda-face-recognition.p.mashape.com/album?album=FaceFirstMaster&albumkey=0d1a139f200fe0c384889988c4f1100653bae670d7cb58c974a72c16cdbfa961")
    .header("X-Mashape-Key", "U9YyuxSizGmshzptuwbjWm4D6IROp1b062Hjsnvxve8EbZ7X0c")
    .header("Accept", "application/json")
    .end(function (result) {
      userform = result.body;
});


formRouter.route('/')
    .get(function (req, res) {
        res.render('userform', {
            title: 'Userform',
            nav: [{
                Link: '/',
                Text: 'Home'
                }, {
                Link: '/userform',
                Text: 'User Form'
                }, {
                Link: '/album',
                Text: 'Album'
            }],
            userform: userform,
            userkey: userkey
        });
    });



module.exports = formRouter;
