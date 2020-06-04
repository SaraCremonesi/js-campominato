// Chiedo all'utente di inserire un numero da 1 a 100
var numeroInserito = parseInt(prompt('Inserisci un numero da 1 a 100'));
console.log('Il numero inserito è:' , numeroInserito);

// Creo un ciclo while per generare 16 numeri casuali
var arrayNumeriRandom = [];
while (arrayNumeriRandom.length < 16) {
  // Genero i 16 numeri casuali tra 1 e 100
  var numeroGenerato = Math.floor(Math.random() * 100 + 1);
  // Invoco la funzione per la verifica dei doppioni e la valido in un if per poter inserire i numeri nell'array
  if (verificaPresenza(numeroGenerato, arrayNumeriRandom) === false) {
    arrayNumeriRandom.push(numeroGenerato);
  };
};
console.log('I numeri generati sono:' , arrayNumeriRandom);

// **********FUNZIONI*********
// Creo una funzione per verificare che non ci siano numeri ripetuti piu volte nell'array di numeri generati
function verificaPresenza(numero, array) {
  var presenza = false;
  for (var i = 0; i < 16; i++) {
    if (numero === array[i]) {
      presenza = true;
    };
  };
  return presenza;
};
