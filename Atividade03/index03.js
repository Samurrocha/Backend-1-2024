const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {

    res.status(200).send("Bem Vindo a Página de Cadastro");

});


var contatos = [];


//Receber dados e cadastrar novo usuario

app.post("/contatos", (req, res) => {

    contatos.push(req.body);

    res.status(201).send("Cadastrado com sucesso")

})


//Listar todos os contatos

app.get("/contatos", (req, res) => {

    res.status(200).json(contatos)
});


//Retornar dados de um determinado nome

app.get("/contatos/:Nome", (req, res) => {

    const nome = req.params.Nome;

    for (i = 0; i < contatos.length; i++) {

        if (nome === contatos[i].Nome) {

            return res.status(200).json(contatos[i])
        }
    }
    res.status(204).send("Não há a pessoa na base de dados.")


})


app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})