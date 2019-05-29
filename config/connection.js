var mysql = require('mysql');

//create MySQL connection 
var connection;

if (process.env.JAWSDB_URL) {
    //database is on heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    connection = mysql.createConnection({
        port:3306,
        host: 'localhost',
        user: 'root',
        password:'',
        database:'burgers_db'
    })

};

//make the connection
connection.connect(function(err){
    if (err) {
        console.error('ERROR: MySQL connection error --' + err.stack + '\n\n');
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

//export connection for ORM
module.exports = connection;