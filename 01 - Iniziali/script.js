/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function getFirstChar(names) {
  const firstChar = [];
  // Costrutto for che cicla attraverso ogni nome nell'array
  for (let i = 0; i < names.length; i++) {
    const name = names[i]; // Prendi il nome corrente
    const currentElement = name.split(" "); // Divide il nome in parole
    let firstNameChars = ""; // Inizializza una stringa per memorizzare le iniziali del nome corrente

    // Cicla attraverso ogni parola nel nome
    for (let j = 0; j < currentElement.length; j++) {
      firstNameChars += currentElement[j].charAt(0);
    }
    firstChar.push(firstNameChars);
  }
  // Restituisce l'array contenente tutte le iniziali
  return firstChar;
}
// Invoca la funzione qui e stampa il risultato in console
const initialsArray = getFirstChar(names);
console.log(names);
console.log(initialsArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
//Pero' un ora di dario moccia andava bene, non mi dispiaceva
