function valins() {
    let test = localStorage.getItem("utenteNome");
    document.querySelector('#soprainput').textContent = test
}
valins();

// Funzione per salvare il nome in localStorage
function salvaNome() {
    let inputNome = document.querySelector('#nomeinserito');
    let nome = inputNome.value;

    if (nome !== '') {
        localStorage.setItem('utenteNome', nome);
          /* mostraNomeSalvato() */;
    }
    valins()
}

function cancellanome() {
    localStorage.removeItem("utenteNome");
    document.querySelector('#soprainput').textContent = "Nome cancellato, inserisci uno nuovo"
}

// Aggiungi event listener per il pulsante "Salva Nome"
document.querySelector('#salvaBtn').addEventListener('click', salvaNome);


document.querySelector('#cancBtn').addEventListener('click', cancellanome);



function temposecondi(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} minuti e ${remainingSeconds} secondi`;
}


function aggiornatimer() {

    sectras++;


    sessionStorage.setItem('sectras', sectras);

    const timerElement = document.querySelector('#timer');


    timerElement.textContent = `Tempo trascorso: ${temposecondi(sectras)}`;
}


let sectras = parseInt(sessionStorage.getItem('sectras')) || 0;


setInterval(aggiornatimer, 1000);


aggiornatimer();


document.querySelector('#azzBtn').addEventListener('click', azzeratimer);


function azzeratimer() { sectras=0 }