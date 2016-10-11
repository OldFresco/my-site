var express = require('express')
var app = express()
var router = express.Router()

var path = __dirname + '/views/'

app.use(express.static('views'))
app.use('/', router)

router.use(function(req, res, next) {
    next()
})

router.get('/', function(req, res) {
    res.sendFile(path + 'index.html')
})

app.use('*', function(req, res) {
    res.sendFile(path + '404.html')
})

app.listen(3000, function() {
    console.log('Live at Port 3000')
})