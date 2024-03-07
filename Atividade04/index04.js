const express = require("express")
const app = express()
app.use(express.json());

app.use((req, res, next) => {
    console.log("Metodo HTTP : ", req.method, "|| URL : ", req.url)
    next()
})

app.get("/", (req, res) => {
    res.send("Bem-vindo ao nosso servidor express!")
})

app.get("/status", (req, res) => {
    data = new Date()
    h = data.getHours();
    m = (data.getMinutes()).toString().padStart(2, '0');
    res.json({ status: "ok", time: `${h}:${m}` })
})

app.get("/echo/:message", (req, res) => {
    let { message } = req.params
    res.json({ echo: `${message}` })
})

app.use((req, res) => {
    res.status(404).json({ error: "Not Found", StatusCode: 404 })
})

//app.listen(3000, () => {console.log("Rodando na porta 3000")})