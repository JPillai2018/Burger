// Declaring Node dependency
var mysql = require("mysql");
var connection;

// For Heroku deployment and Local deployment (depending on the URL)
console.log("JAWSDB_URL=" + process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

// Exports the connection
module.exports = connection;




