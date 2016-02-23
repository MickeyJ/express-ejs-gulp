/* Dependencies */
var express = require('express');
var ejs = require('ejs');


/* Create App */
var app = express();


/* Setup Views */
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


/* Home Page */
app.get('/', function(req, res, next){
  res.render('index', {
    message: 'This is a home page'
  })
});

/* About Page */
app.get('/about', function(req, res, next){
  res.render('about', {
    message: 'This is an about page'
  })
});


/* Create Server */
var port = 9000;
app.listen(port, function(){
  console.log('listening on port: '+ port)
});