const connection = require("../db")

exports.cadastrarCliente = (req, res) => {

    let { nome } = req.params
    let { sexo } = req.params
    let { cpf } = req.params
    let { data } = req.params
    let { uf } = req.params

    connection.query(`insert into tbl_clientes(Nome,Sexo,CPF,Data_Nascimento,ID_UF) values('${nome}','${sexo}','${cpf}','${data}',(SELECT ID_UF FROM tbl_uf WHERE UF = '${uf}'))`, (err, result,field) => {

        res.send("Cliente Criado com sucesso")
    
    })


}
