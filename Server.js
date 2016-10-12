var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/'

app.use(express.static('views'));
app.use(express.static('index.html'));
app.use('/', router);

router.use(function(req, res, next) {
    next()
});

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.use('*', function(req, res) {
    res.sendFile(path + '404.html')
});

app.listen(1337, function() {
    console.log('Live at Port 1337')
});