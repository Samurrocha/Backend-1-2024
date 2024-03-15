const connection = require("../db")

exports.pesquisar = (req, res) => {

    let { cpf } = req.params

    connection.query(`select * from tbl_clientes2 where CPF = '${cpf}'`, (err, result) => {

        res.send(result)
        console.log("Pesquisa bem sucedida")
    })
}