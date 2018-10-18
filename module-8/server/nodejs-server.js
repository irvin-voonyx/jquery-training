var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require("path");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/content', 'public')));

app.listen(8080);

app.get('/blueprint', function(req, res){
    res.sendFile('./content/blueprint.html',{root: __dirname});
});

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    console.log("Calling home");
    res.send('Home');
});

app.get('/json/:name', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "name":"' + req.params.name + '" }');
});

app.post('/identity', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var name = req.body.name;
    var firstname = req.body.firstname;
    var yearOfBirth = req.body.yearOfBirth;
    var id = Math.round (Math.random() * 1000);
    res.end('{ "person" : { "id":' + id + ', "name":"' + name + '", "firstName":"' + firstname + '", "yearOfBirth":"' + yearOfBirth + '" } }');
});

app.post('/identityJson', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    var name = req.body.name;
    var firstname = req.body.firstName;
    var yearOfBirth = req.body.yearOfBirth;
    var id = Math.round (Math.random() * 1000);
    res.end('{ "person" : { "id":' + id + ', "name":"' + name + '", "firstName":"' + firstname + '", "yearOfBirth":"' + yearOfBirth + '" } }');
});

