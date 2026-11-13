const btnIndovina = document.getElementById("btnIndovina");
const btnGioca = document.getElementById("btnGioca");
const numero = document.getElementById("numero");
const tentativi = document.getElementById("tentativi");
const info = document.getElementById("info");
const cronologia = document.getElementById("cronologia");
const errore = document.getElementById("errore");
const giocaContainer = document.getElementById("giocaContainer");
const erroreTesto = document.getElementById("erroreTesto");
const infoBtn = document.getElementById("infoBtn");
const infoTesto = document.getElementById("infoTesto");

let tentativiIniziali = 7;
let tentativiRimasti = 0;
let numeroDaIndovinare = 0;
const cronologiaInserimenti = [];

function resetGioco() {
    numeroDaIndovinare = Math.floor(Math.random() * 101);

    console.log("Il numero da indovinare è: " + numeroDaIndovinare);

    tentativiRimasti = tentativiIniziali;
    cronologiaInserimenti.length = 0;

    numero.value = "";
    numero.disabled = false;
    btnIndovina.disabled = false;
    errore.classList.add("d-none");
    tentativi.textContent = tentativiRimasti;
    info.textContent = "in attesa di un numero...";
    cronologia.textContent = "nessun numero";
}

infoBtn.addEventListener("click", function () {
    infoTesto.classList.toggle("d-none");
});

btnGioca.addEventListener("click", function () {
    resetGioco();
    giocaContainer.classList.remove("d-none");
});

btnIndovina.addEventListener("click", function () {
    const numeroInserito = Number(numero.value);

    if (numero.value === "" || Number.isNaN(numeroInserito) || numeroInserito < 0 || numeroInserito > 100) {
        errore.classList.remove("d-none");
        erroreTesto.textContent = "numero non valido";
        return;
    }

    errore.classList.add("d-none");
    cronologiaInserimenti.push(numeroInserito);
    cronologia.textContent = cronologiaInserimenti.join(", ");
    tentativiRimasti--;
    tentativi.textContent = tentativiRimasti;

    if (numeroInserito === numeroDaIndovinare) {
        info.textContent = "Hai vinto! Il numero era " + numeroDaIndovinare;
        numero.disabled = true;
        btnIndovina.disabled = true;
        return;
    }

    if (numeroInserito < numeroDaIndovinare) {
        info.textContent = "Più alto";
    } else {
        info.textContent = "Più basso";
    }

    if (tentativiRimasti <= 0) {
        info.textContent = "Hai perso! Il numero era " + numeroDaIndovinare;
        numero.disabled = true;
        btnIndovina.disabled = true;
    }
});