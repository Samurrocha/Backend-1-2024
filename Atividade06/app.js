const express = require("express");
const roots = require("./roots")
const app = express();
const PORT = 3000

app.use(roots)

app.listen(PORT, ()=>{

    console.log(`rodando na porta ${PORT}`)
})