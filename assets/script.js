function salvaNome(){
    let nomeInserito = document.getElementById("name").value
    localStorage.setItem("nome", JSON.stringify(nomeInserito))
    mostraNomeSalvato()
}

function rimuoviNome(){
    localStorage.removeItem("nome")
    mostraNomeSalvato()
}

function mostraNomeSalvato(){
    let nomeSalvato = localStorage.getItem("nome")
    let casellaNomeSalvato = document.getElementById("nomeSalvato")
    if (nomeSalvato){
        casellaNomeSalvato.innerText = JSON.parse(nomeSalvato)
    } else {
        casellaNomeSalvato.innerText = ""
    }
}

mostraNomeSalvato()

function avviaTimer(){
    let timer = document.getElementById("timer")
    let iniziaTimer = sessionStorage.getItem("timer")
    
    if(!iniziaTimer){
        iniziaTimer = new Date().getTime()
        sessionStorage.setItem("timer", iniziaTimer)
    }

    function aggiornaTimer(){
        let tempoAttuale = new Date().getTime()
        let secondiTrascorsi = Math.floor((tempoAttuale - iniziaTimer)/1000)
        timer.innerText = secondiTrascorsi
    }

    setInterval(aggiornaTimer, 1000)
}

avviaTimer()
