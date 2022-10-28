const mainBtn = document.getElementById("pulsante-avvio")

mainBtn.addEventListener("click", function() {

    const kilometri = document.getElementById("numero").value;
    const eta = document.getElementById("età").value;   
    const nome = document.getElementById("nome-utente").value;

    const prezzoIniziale = kilometri*0.21;  

    console.log(nome)

    if (isNaN(kilometri)) { 

        alert("I dati inseriti non sono validi")    

    } else {    

        if (eta == 3) { 

            const sconto = prezzoIniziale*0.4;  

            const prezzoFinale = prezzoIniziale - sconto;   

            const prezzoArrotondato = Math.round(prezzoFinale*100)/100; 

            const paragrafo = document.getElementById("paragrafo");
            paragrafo.innerHTML = `${prezzoArrotondato}€`;

            const nomeUtente = document.getElementById("biglietto")
            nomeUtente.innerHTML = `${nome}`

            const tipoBiglietto = document.getElementById("tipo-biglietto")
            tipoBiglietto.innerHTML = `Biglietto scontato`

        } else if (eta == 2) {  

            const sconto = prezzoIniziale*0.2;  

            const prezzoFinale = prezzoIniziale - sconto;   

            const prezzoArrotondato = Math.round(prezzoFinale*100)/100; 

            const paragrafo = document.getElementById("paragrafo");
            paragrafo.innerHTML = `${prezzoArrotondato}€`;

            const nomeUtente = document.getElementById("biglietto")
            nomeUtente.innerHTML = `${nome}`

            const tipoBiglietto = document.getElementById("tipo-biglietto")
            tipoBiglietto.innerHTML = `Biglietto ridotto`

        } else if (eta == 1){    

            const sconto = 0;   

            const prezzoFinale = prezzoIniziale - sconto;   

            const prezzoArrotondato = Math.round(prezzoFinale*100)/100; 

            const paragrafo = document.getElementById("paragrafo");
            paragrafo.innerHTML = `${prezzoArrotondato}€`;

            const nomeUtente = document.getElementById("biglietto")
            nomeUtente.innerHTML = `${nome}`

            const tipoBiglietto = document.getElementById("tipo-biglietto")
            tipoBiglietto.innerHTML = `Biglietto standard`

        }
    }


} )