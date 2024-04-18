const sql = require("mssql")
const config = require("../configs/db")

exports.createVendedor = (req, res) => {

    let { nome, CPF, dataInicio, dataFim } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`insert into tbl_Vendedor values('${nome}','${CPF}','${dataInicio}','${dataFim}')`, (erro) => {


            if (erro) { res.status(400).json({ error: erro }) }

            res.status(201).json("vendedor criado com sucesso")
        })

    })
}


exports.readVendedor = (req, res) => {

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`select * from tbl_Vendedor`, (erro, result) => {

            if (erro) { res.status(500).json({ error: erro }) }

            console.log("read feito com sucesso")

            res.status(200).json({ resultado: result.recordset })

        })

    })
}


exports.updateVendedor = (req, res) => {

    let { coluna, valor, colunaCondição, valorCondição } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update tbl_Vendedor set ${coluna} = '${valor}' where ${colunaCondição} = '${valorCondição}'`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}




exports.deleteVendedor = (req, res) => {

    let { coluna, valor } = req.params

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta") }

console.lo
        sql.query(`delete from tbl_Vendedor where ${coluna} = '${valor}'`, (erro) => {

            if (erro) { res.status(400).send("erro ao deletar") }


            res.status(200).send("delete bem sucedido")

        })

    })
}
