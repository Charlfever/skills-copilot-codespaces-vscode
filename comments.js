// Create web server
// Run node comments.js
// Open browser and go to http://localhost:3000
// You can add comments by submitting the form

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [];
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index', {comments: comments});
});

app.post('/comment', function(req, res){
    comments.push(req.body.comment);
    res.redirect('/');
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});