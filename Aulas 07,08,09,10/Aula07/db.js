const mysql = require("mysql")

const connection = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "12345",
    database: "backend"

    

});


module.exports = connection