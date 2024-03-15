const connection = require("../db")



exports.atualizar = (req, res) => {

    let { cpf } = req.params
    let { coluna } = req.params
    let { dadoNovo } = req.params


    connection.query(`update tbl_clientes2 set ${coluna} = '${dadoNovo}' where CPF = '${cpf}'`, (err, result) => {

        console.log("atualizou")
        res.send("atualizado com sucesso")
    })
}