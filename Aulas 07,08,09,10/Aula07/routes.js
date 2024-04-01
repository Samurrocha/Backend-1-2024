const express = require("express")
const route = express.Router()
const { cadastrarCliente } = require("./controller/cadastrarCliente")
const { pesquisar } = require("./controller/pesquisarCliente")
const { atualizar } = require("./controller/atualizarDados")
const { cadastrarCompra } = require("./controller/cadastroCompra")
const { listarPorData, listarPorCpf, listarPorMarca } = require("./controller/listarVendas")




//rota para cadastrar cliente
route.get("/criar/:nome/:sexo/:cpf/:data/:uf", cadastrarCliente)

//rota para pesquisar um cliente por CPF
route.get("/pesquisar/:cpf", pesquisar)

//rota para atualizar um dado de um determinado cliente pelo CPF
route.get("/atualizar/:coluna/:dadoNovo/:cpf", atualizar)


//cadastrar compras
route.post("/cadastrarCompras" , cadastrarCompra)



//listar compras por Data

route.get("/listarPorData", listarPorData)

//listar compras por Cpf

route.get("/listarPorCpf", listarPorCpf)

//listar compras por Marca

route.get("/listarPorMarca", listarPorMarca)


module.exports = route