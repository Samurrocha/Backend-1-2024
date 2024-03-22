const express = require("express")
const route = express.Router()
const { criarCliente } = require("./controller/criarCliente")
const { pesquisar } = require("./controller/pesquisarCliente")
const { atualizar } = require("./controller/atualizarDados")
const { cadastrarCompra } = require("./controller/cadastroCompra")


//rota para criar cliente
route.get("/criar/:nome/:sexo/:cpf/:data/:uf", criarCliente)

//rota para pesquisar um cliente por CPF
route.get("/pesquisar/:cpf", pesquisar)

//rota para atualizar um dado de um determinado cliente pelo CPF
route.get("/atualizar/:coluna/:dadoNovo/:cpf", atualizar)


//cadastrar compras
route.post("/cadastrarCompras" , cadastrarCompra)


module.exports = route