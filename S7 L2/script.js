    // Aggiungi event listener per il pulsante "Salva Nome"
    document.querySelector('#salvaBtn').addEventListener('click', salvaNome);

    // Aggiungi event listener per il pulsante "Rimuovi Nome"
    document.querySelector('#rimuoviBtn').addEventListener('click', rimuoviNome);

    // Funzione per salvare il nome in localStorage
    function salvaNome() {
      var inputNome = document.querySelector('#name');
      var nome = inputNome.value.trim();

      if (nome !== '') {
        localStorage.setItem('utenteNome', nome);
        mostraNomeSalvato();
      }
    }

    // Funzione per rimuovere il nome da localStorage
    function rimuoviNome() {
      localStorage.removeItem('utenteNome');
      mostraNomeSalvato();
    }

    // Funzione per mostrare il nome salvato sopra l'input field
    function mostraNomeSalvato() {
      var nomeSalvatoElement = document.querySelector('#nomeSalvato');
      var nomeSalvato = localStorage.getItem('utenteNome');

      if (nomeSalvato) {
        nomeSalvatoElement.textContent = nomeSalvato;
      } else {
        nomeSalvatoElement.textContent = '';
      }
    }

    // Mostra il nome salvato al caricamento della pagina
    mostraNomeSalvato();
