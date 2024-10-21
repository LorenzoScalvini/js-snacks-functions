/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterWordsStartingBy(array, letter) {
  return array.filter((name) => name.startsWith(letter));
}

// Invoca la funzione qui e stampa il risultato in console
const letter = prompt("Scegli pari o dispari (scrivi 'pari' o 'dispari'):");
const result = filterWordsStartingBy(names, letter);
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
