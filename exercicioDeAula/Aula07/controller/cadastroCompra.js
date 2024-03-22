const connection =require("../db");


exports.cadastrarCompra = (req,res)=>{

    console.log()
    let cliente =req.body.Cliente
    let produto =req.body.Produto
    let data =req.body.Data
    let quantidade =req.body.Quantidade

    connection.query(`insert into Compras values('${cliente}','${produto}','${data}','${quantidade}')`, (err,result,field)=>{


        res.send("Bem Sucedido")
    })



}