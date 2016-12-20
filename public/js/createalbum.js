
var unirest = require('unirest');

unirest.post("https://lambda-face-recognition.p.mashape.com/album")
    .header("X-Mashape-Key", "jq6jkxYds1mshIiphJyX9dlQIJlOp1GKJfajsnnNb30I8NA4VB")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("album=FaceFirstTest9000")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });
