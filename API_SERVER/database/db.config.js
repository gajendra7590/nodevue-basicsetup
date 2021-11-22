var mysql = require('mysql'); 
const env = process.env;

//Make Connection
var connection = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
});  

connection.connect(function(error) {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }  
}); 


module.exports = connection;
 