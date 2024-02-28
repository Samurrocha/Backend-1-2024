const express = require("express");

const app = express();

// GET: /

app.get("/", (req, res) => {

res.send("Olá mundo!");

});

// GET: /contato

app.get("/contato", (req, res) => {

res.send("Página de contato!");

});

// GET: /contato/:id?sit=query

//:id (params.id)

//?sit=valor (query.sit)

//http://127.0.0.1:3000/contato/EmpresaA?sit=ativo&param1=2&param3=3

app.get("/contato/:id", (req, res) => {

const id = req.params.id;

const sit = req.query.sit;

return res.json({

id: id,

nome: "Daniel",

sit: sit

});

});

app.listen(3000, () => {

console.log("Servidor iniciado na porta 3000!")

});