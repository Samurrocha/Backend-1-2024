const express = require("express")
const routes = express.Router();
const vendedores = require("./controller/vendedores")



routes.post("/create", vendedores.createVendedor)
routes.get("/read", vendedores.readVendedor)
routes.post("/update", vendedores.updateVendedor)
routes.get("/delete/:coluna/:valor", vendedores.deleteVendedor)
routes.get("/listar", vendedores.listarOrdenado)





module.exports = routes