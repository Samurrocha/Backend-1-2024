const express = require("express")
const root = express.Router();
const criarArquivo = require("./controller/criarArquivo");
const ordenação  = require("./controller/ordenação");


root.get("/criar/:nome/:x", criarArquivo.criarArquivo)

root.get("/ordenar/:arquivo", ordenação.ordenar)



module.exports = root