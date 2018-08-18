

// Node dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create Routes
// Default Router
router.get('/', function (req, res){
    res.redirect('/index');
});

// Index Page (render all burgers to DOM)
router.get('/index', function (req, res){
    burger.selectAll(function(data){
        var yummyBurgers = {burgers: data};
        //console.log(yummyBurgers);
        res.render('index', yummyBurgers);
    });
});

// Add new Burger Selection 
router.post('/burger/create', function (req, res){
    var burgerName = req.body.burger_name;
    burgerName = toTitleCase(burgerName);
    burger.insertOne(burgerName, function(){
        res.redirect('/index');
    });
});

// Devour a Burger
router.post('/burger/eat/:id', function(req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect('/index');
    });
});

// Cleanup the Burger from the Plate
router.post('/burger/cleanup/:id', function(req, res){
    burger.deleteOne(req.params.id, function(){
        res.redirect('/index');
    });
});

// Convert String to Title Case
var toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

module.exports = router;