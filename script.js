
// Chiedo all'utente di inserire un numero da 1 a 100
var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100'));
while (numeroInserito === '' || numeroInserito < 1 || numeroInserito > 100) {
  numeroInserito = parseInt(prompt('Errore. Inserisci un numero da 1 a 100'));
};
console.log('Il numero inserito è:' , numeroInserito);

// Creo un ciclo for per generare dei numeri casuali da 1 a 100 ed inserirli in un array
var numeriRandom = [];
for (var i = 0; i < 16; i++) {
  var numeroGenerato = Math.floor(Math.random() * 100 + 1);
  numeriRandom.push(numeroGenerato);
};
console.log(numeriRandom);
