const { json } = require("express");
const fs = require("fs");
const path = require("path");


exports.ordenar = (req, res) => {
    let nome = req.params.arquivo
    let metodo = req.query.metodo


    fs.readFile(path.join(__dirname + "/" + `${nome}`), 'utf8', (err,
        data) => {

        //let dados = []

        if (err) throw err

        data = JSON.parse(data)
        dados = data[0].dados

        let start, end;



        if (metodo === 'bubbleSort') {

            start = new Date

            bubbleSort(dados)
            res.json({'pelo método bubbleSort' : dados })

            end = new Date

        } else {
            start = new Date

            selectionSort(dados)
            res.json({ 'pelo método selectSort': dados })

            end = new Date
        }


        console.log('Tempo de processamento : ' + (end.getTime() - start.getTime()) + ' milisegundos')

     });

}




function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {

                let aux = array[i];

                array[i] = array[j];

                array[j] = aux;

            }

        }

    }

}









function selectionSort(Arr) {

    let n = Arr.length;

    for (let i = 0; i < n - 1; i++) {

        // Idenficando o menor elemento

        let min = i;

        for (let j = i + 1; j < n; j++) {

            if (Arr[j] < Arr[min]) {

                min = j;

            }

        }

        if (min != i) {

            // Trocando os elementos

            let tmp = Arr[i];

            Arr[i] = Arr[min];

            Arr[min] = tmp;

        }

    }
};