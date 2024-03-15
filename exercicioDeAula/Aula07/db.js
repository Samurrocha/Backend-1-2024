const mysql = require("mysql")

const connection = mysql.createConnection({

    host: "sql10.freemysqlhosting.net",
    user: "sql10690539",
    password: "krgrKMudl5",
    database: "sql10690539"

});


module.exports = connection