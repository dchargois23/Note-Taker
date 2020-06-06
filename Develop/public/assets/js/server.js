var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
})

app.listen(3000);


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(fintion(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
