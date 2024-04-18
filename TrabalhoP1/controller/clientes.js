const sql = require("mssql")
const config = require("../configs/db")

exports.createCliente = (req, res) => {

    let { nomeSocial, nomeFantasia, CNPJ, contato,telefone,email } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`insert into tbl_Cliente values('${nomeSocial}','${nomeFantasia}','${CNPJ}','${contato}',${telefone},'${email}')`, (erro) => {


            if (erro) { res.status(400).json({ error: erro }) }

            res.status(201).json("Cliente criado com sucesso")
        })

    })
}


exports.readCliente = (req, res) => {

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`select * from tbl_Cliente`, (erro, result) => {

            if (erro) { res.status(500).json({ error: erro }) }

            console.log("read feito com sucesso")

            res.status(200).json({ resultado: result.recordset })

        })

    })
}


exports.updateCliente = (req, res) => {

    let { coluna, valor, colunaCondição, valorCondição } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update tbl_Cliente set ${coluna} = '${valor}' where ${colunaCondição} = '${valorCondição}'`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}




exports.deleteCliente = (req, res) => {

    let { coluna, valor } = req.query

    sql.connect(config, async (err) => {

        console.log(coluna + valor)

        if (err) { console.log("deu bosta") }


        sql.query(`delete from tbl_Cliente where ${coluna} = '${valor}'`, (erro, result) => {

            if (erro) { res.status(400).send("erro ao deletar") }


            res.status(200).send("delete bem sucedido")

        })

    })
}

