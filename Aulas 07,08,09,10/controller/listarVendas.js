const connection = require("../db");

const sql = "select tbl_compras.*,tbl_clientes.Nome as Cliente,tbl_produtos.Modelo as Produto,tbl_produtos.Valor from tbl_compras inner join tbl_produtos on tbl_compras.ID_PRODUTO= tbl_produtos.ID_PRODUTO inner join tbl_clientes on tbl_compras.ID_CLIENTES = tbl_clientes.ID_CLIENTES"


exports.listarPorData=(req,res)=>{

    const {dataInicio,dataFim} = req.query

    connection.query(`${sql} where Data_Compra between '${dataInicio}' and '${dataFim}'`, (err,result)=>{

         res.json(result)
    })}

    exports.listarPorCpf=(req,res)=>{

        const {cpf} = req.query
    
        connection.query(`${sql} where tbl_clientes.CPF='${cpf}' `, (err,result)=>{
    
             res.json(result)
        })}


        exports.listarPorMarca=(req,res)=>{

            const {marca} = req.query

            connection.query(`${sql} where tbl_produtos.Marca = '${marca}'`, (err,result)=>{

            res.json(result)

            })
        
        }