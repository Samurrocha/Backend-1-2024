const connection =require("../db");


exports.cadastrarCompra = (req,res)=>{

    let data =req.body.Data
    let quantidade =req.body.Quantidade
    let marca_produto =req.body.Produto.Marca
    let modelo_produto = req.body.Produto.Modelo
    let cliente =req.body.Cliente
    console.log(data)
    console.log(quantidade)
    console.log(marca_produto)
    console.log(modelo_produto)
    console.log(cliente)




    

    connection.query(`insert into tbl_compras(Data_Compra,Quantidade,ID_PRODUTO,ID_CLIENTES) values('${data}','${quantidade}',(select ID_PRODUTO from tbl_produtos where Marca = '${marca_produto}' && Modelo = '${modelo_produto}'),(select ID_CLIENTES from tbl_clientes where Nome = '${cliente}'))`, (err,result,field)=>{


        res.send("Bem Sucedido")
    })



}