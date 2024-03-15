const connection = require("../db")

exports.criarCliente = (req, res) => {

    let { nome } = req.params
    let { cpf } = req.params
    let { data } = req.params
    let { sexo } = req.params
    let { uf } = req.params

    connection.query(`insert into tbl_clientes2 (Nome,CPF,DataNascimento,Sexo,UF) values('${nome}','${cpf}','${data}','${sexo}','${uf}')`, (err, result, field) => {



        console.log("cliente criado")
        res.send("cliente criado")


    })

}