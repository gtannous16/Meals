var express = require('express');
var router = express.Router();

//import the model burger.js
var meals = require('../models/burger.js');

//create routes & logic
router.get('/', function(req,res){
    meals.selectAll(function(data){
        var mealObject = {
            meals: data
        };
        res.render('index', mealObject);
    });
});

router.post('/meals', function(req, res){
    meals.insertOne([
        'meal_name'
    ], [
        req.body.meal_name
    ], function(data){
        res.redirect('/');
    });
});

router.put('/meals/:id', function(req,res){
    var condition = 'id = ' + req.params.id;
    meals.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect('/');
    });
});

//export route for server.js
module.exports = router;