var orm = require('../config/orm.js');

//create meal
var meals = {
    //select all meal entries
    selectAll: function(cb) {
        orm.selectAll('meals',function(res){
            cb(res);
        });
    },
    // variables cols & vals are arrays
    insertOne: function(cols,vals, cb){
        orm.insertOne('meals', cols, vals, function(res){
            cb(res);
        });
    },
    //objColVals is an object which specifies columns as object keys with values that are assoiated
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('meals',objColVals, condition, function(res){
            cb(res);
        });
    }
};

//export th database functios for the burgercontroller.js

module.exports = meals;
