// set-up
var express = require('express')
var app = express()

app.use(express.static(__dirname))

app.get('/', function (req, res) {
  res.sendFile('./index.html')
})

app.listen('8080')
console.log('App listening on port 8080')
