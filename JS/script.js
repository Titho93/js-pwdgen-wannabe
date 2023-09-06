/*
1.  Chiedi all’utente il suo nome,
2.  Chiedi il suo cognome,
3.  Chiedi il suo colore preferito
4.  Scrivi sulla pagina nomecognomecolorepreferito23
*/

const name = prompt('Inserire il nome');
const lastname = prompt('Inserire il cognome');
const color = prompt('Inserire il colore preferito');

const message =  name + lastname + color + '23'

document.getElementById('output').innerHTML = message;