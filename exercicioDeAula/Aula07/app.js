const express = require("express")
const routes = require("./routes")
const app = express()
app.use(express.json())
const PORT = 3000


app.use(routes)






app.listen(PORT, () => {
    console.log("Rodando na porta 3000")
})