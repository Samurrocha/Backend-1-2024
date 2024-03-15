const express = require("express")
const { criarCliente } = require("./controller/criarCliente")
const { pesquisar } = require("./controller/pesquisarCliente")
const { atualizar } = require("./controller/atualizarDados")
const route = express.Router()

//rota para criar cliente
route.get("/criar/:nome/:cpf/:data/:sexo/:uf", criarCliente)

//rota para pesquisar um cliente por CPF
route.get("/pesquisar/:cpf", pesquisar)

//rota para atualizar um dado de um determinado cliente pelo CPF
route.get("/atualizar/:coluna/:dadoNovo/:cpf", atualizar)


module.exports = route