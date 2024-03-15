const fs = require("fs")
const path = require("path")

exports.criarArquivo = (req, res) => {

    let data = [{'dados' : null}];
    let a = []
    let x = req.params.x;
    let nomeArquivo = req.params.nome;

    for (let i = 0; i < x; i++) {
        a.push(parseInt((Math.random() * 9998)+1))
        
        
}

    data[0].dados = a
    dados = JSON.stringify(data)


    fs.writeFile(path.join(__dirname + '/' + nomeArquivo), dados, (err) => {

    })

    console.log('Criado com sucesso')
    res.send('criado com sucesso')

}
