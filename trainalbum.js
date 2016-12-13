
var unirest = require('unirest');

unirest.post("https://lambda-face-recognition.p.mashape.com/album_train")
    .header("X-Mashape-Key", "jq6jkxYds1mshIiphJyX9dlQIJlOp1GKJfajsnnNb30I8NA4VB")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .header("Accept", "application/json")
    .send("album=FaceFirstTest3")
    .send("albumkey=57776432e147bb61b6f560d52794086f1206aadadc534384b7074bec426ec5c4")
    .send("entryid=Test2")
    .send("urls=http://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });