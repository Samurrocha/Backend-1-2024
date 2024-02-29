const express = require("express");
const app = express();

//GET '/'

app.get("/", (req, res) => {

    res.send("Dever de Casa 02 – Aluno : Samuel Rodrigues")


});

//GET "/sobre"

app.get("*sobre*", (req, res) => {

    res.send("Dados da página SOBRE e suas derivações")

});

//GET "pesquisar usuário"

app.get("/search/user", (req, res) => {


    
    const strName = req.query.name;
    const strEmail = req.query.email;


    res.json({

        Nome: strName,
        Email: strEmail,
        Id:10
        
    }
    )

});


//PORTA

app.listen(3000, () => {

    console.log("alright")
});
