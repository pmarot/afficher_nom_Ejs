// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

var test = function(res) {
    var prenom = "pascal"
    var nom = "marot"
    res.render('pages/index', {prenom: prenom, nom: nom});
}

// index page 
app.get('/', function (req, res) {
    test(res)
});

app.listen(3005);
console.log('3005 is the magic port');
