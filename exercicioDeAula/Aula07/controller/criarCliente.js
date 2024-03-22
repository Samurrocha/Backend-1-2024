const connection = require("../db")

exports.criarCliente = (req, res) => {

    let { nome } = req.params
    let { cpf } = req.params
    let { data } = req.params
    let { sexo } = req.params
    let { uf } = req.params

    connection.query(`insert into tbl_clientes values('${nome}','${sexo}','${cpf}','${data}','${uf}')`, (err, result, field) => {

        res.send(result)

        console.log("cliente criado")
        


    })

}