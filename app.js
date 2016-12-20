var express = require('express');
var app = express();

var port = 4000;

var formRouter = require('./src/routes/formRoutes');
// var path = require('path');

app.use(express.static('public'));
app.set('views','./src/views');

app.set('view engine', 'ejs');

app.use('/userform', formRouter);

app.get('/',function(req,res) {
    res.render('index', {
        title: 'Hello from render',
        nav:[{
            Link: '/',
            Text: 'Home'
            },{
            Link: '/userform',
            Text: 'User Form'
            },{
            Link: '/album',
            Text: 'Album'
        }]
    });
});



// app.get('/index.html', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.get('/cameratest.html', function(req, res) {
//     res.sendFile(path.join(__dirname + '/cameratest.html'));
// });


app.listen(port, function(){
    console.log("Server listening at port 4000");
});
