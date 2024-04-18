const express = require("express")
const routes = express.Router();
const clientes = require("./controller/clientes");
const vendedores = require("./controller/vendedores");
const visitas = require("./controller/visitas");



//crud para cliente

routes.post("/create", clientes.createCliente)
routes.get("/read", clientes.readCliente)
routes.post("/update", clientes.updateCliente)
routes.get("/delete/:coluna/:valor", clientes.deleteCliente)



//crud para vendedor

routes.post("/create", vendedores.createVendedor)
routes.get("/read", vendedores.readVendedor)
routes.post("/update", vendedores.updateVendedor)
routes.get("/delete/:coluna/:valor", vendedores.deleteVendedor)
routes.get("/listar", vendedores.listarOrdenado)





//crud para visitas

routes.post("/create", visitas.createVisitas)
routes.get("/read", visitas.readVisitas)
routes.post("/update", visitas.updateVisitas)
routes.get("/delete/:coluna/:valor", visitas.deleteVisitas)
routes.get("/listar", visitas.listarOrdenado)





module.exports = routes