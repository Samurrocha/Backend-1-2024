const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()

const routes = require("./routes")




app.use(routes)

app.listen(process.env.PORT_SERVER, (err)=>{

    if (err) {console.log({errorServer : err})}

    console.log("server rodando")
        
})