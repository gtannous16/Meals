//importing mysql connection
var connection = require('./connection.js')

//help function to generate mysql syntax
function QuestionMarks(num){
    var array = [];
    
    for (var i = 0; i < num; i++){
        array.push("?");
    }
    return array.toString();
}

//help function to generate mysql syntax
function objectToSql(ob) {
    var array = [];

    for (var key in ob) {
        array.push(key + "=" + ob[key]);
    }
    return array.toString();
}

//create orm object to perform sql queries 
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }

            //return results in callback
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += QuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        // make the database query
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }

            //return results in callback
            cb(result);
        });
    },

    //function which updates a table entry
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            //return results in callback
            cb(result);
        });
    }
};

//export orm to use in other modules
module.exports = orm;