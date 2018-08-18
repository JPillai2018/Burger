// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

//Handlebars
var exprssHandlebars = require('express-handlebars');
app.engine('handlebars', exprssHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burger_controller.js');
app.use('/', router);

// Listen to Server PORT
var port = process.env.PORT || 8080;
console.log("Running At PORT:" + port);
app.listen(port);