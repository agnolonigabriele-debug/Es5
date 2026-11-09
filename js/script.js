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

let tentativiIniziali = 10;
let tentativiRimasti = 0;
let numeroDaIndovinare = 0;
const cronologiaInserimenti = [];

info.addEventListener("click", function(){
    infoTesto.classList.toggle(d-none);
});

btnGioca.addEventListener("click", function () {
    numeroDaIndovinare = Math.floor(Math.random() * 101);
    console.log(numeroDaIndovinare);

    giocaContainer.classList.remove("d-none");
});

btnIndovina.addEventListener("click", function () {
    let numeroInserito = numero.value;
    if (isNaN(numeroInserito)) {
        errore.classList.remove("d-none");
        erroreTesto.innerText = "numero non valido";
    }
    errore.classList.add("d-none");
    

});