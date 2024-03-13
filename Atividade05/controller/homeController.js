class contador {

    acesso = 0

    constructor() {

    }


    setIncrementar = (valor) => {
        this.acesso += valor

    }

    setDecrementar = (valor) => {
        this.acesso -= valor

    }

    setReset = () => {

        this.acesso = 0

        let d = new Date
        let hr = d.getDate()
        let min = d.getMinutes().toString().padStart(2, 0)
        let dia = d.getDate()
        let mes = (d.getMonth()).toString().padStart(2, 0)
        let ano = d.getFullYear();
        let data = dia + '/' + mes + '/' + ano
        let tempo = `${hr}:${min}`

        console.log(`Resetado no na data ${data} às ${tempo}`)
    }

    getExibir = () => {
        console.log(this.acesso)
    }
}

let a = new contador


a.setReset()













