const sql = require("mssql")
const config = require("../configs/db")

exports.createVisitas = (req, res) => {

    let { data, vendedor, cliente, assunto } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`insert into tbl_Visitas values('${nome}','${CPF}','${dataInicio}','${dataFim}')`, (erro) => {


            if (erro) { res.status(400).json({ error: erro }) }

            res.status(201).json("Visitas criado com sucesso")
        })

    })
}


exports.readVisitas = (req, res) => {

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`select * from tbl_Visitas`, (erro, result) => {

            if (erro) { res.status(500).json({ error: erro }) }

            console.log("read feito com sucesso")

            res.status(200).json({ resultado: result.recordset })

        })

    })
}


exports.updateVisitas = (req, res) => {

    let { coluna, valor, colunaCondição, valorCondição } = req.body

    sql.connect(config, async (err) => {

        if (err) { console.log("deu bosta" + err) }

        sql.query(`update tbl_Visitas set ${coluna} = '${valor}' where ${colunaCondição} = '${valorCondição}'`, (erro) => {

            if (erro) { res.status(400) }

            res.status(200).send("atualizado com sucesso")

        })

    })
}



exports.deleteVisitas = (req, res) => {

    let { coluna, valor } = req.query

    sql.connect(config, async (err) => {

        console.log(coluna + valor)

        if (err) { console.log("deu bosta") }


        sql.query(`delete from tbl_Visitas where ${coluna} = '${valor}'`, (erro, result) => {

            if (erro) { res.status(400).send("erro ao deletar") }


            res.status(200).send("delete bem sucedido")

        })

    })
}



exports.listarOrdenado = (req,res)=>{

    let {filtro,dataInicio,dataFim} = req.query

    sql.connect(config, async(err)=>{

            if (err) {console.log(err)}

            switch (filtro) {
                case value:'periodo'
                    
                    break;

                    case value:''
                    
                    break;
            

                    case value:
                    
                    break;
            

                    case value:
                    
                    break;
            
            
                default:
                    break;
            }

            sql.query(`select * from tbl_Vendedor order by ${filtro} `, (erro,result)=>{

                if(erro){console.log({error:erro})}

                res.json({resutado : result.recordset})
            })

    })


    // Por período (data inicial e data final)
    // Por Cliente (CNPJ)
    // Por Vendedor (CPF)
    // OU
    // Por Próxima ação.


}