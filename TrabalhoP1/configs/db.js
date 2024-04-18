
const sql = require("mssql")
require("dotenv").config()

let {DB_SERVER,DB,DB_PASSWORD,DB_USER} = process.env

const config ={

    server : DB_SERVER,
    database : DB,
    password : DB_PASSWORD,
    user : DB_USER,


    options : {

        encrypt : false
    }
    
 }

 
module.exports = config