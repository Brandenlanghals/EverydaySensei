var mysql = require("mysql");

//1)create connection object with JAWS for Heroku
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ocemack10",
    database: "sensei"
  });
};


//2)connect
connection.connect(function(err) {
  if(err)throw err;
  console.log("connected as id: " + connection.threadId);
});


module.exports = connection;
