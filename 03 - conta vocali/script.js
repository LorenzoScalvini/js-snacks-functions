/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function countVowels(string) {
  //Dichiaro un array per la verifica delle vocali
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  // Converto la stringa in minuscolo e la attraversa carattere per carattere. Per ogni lettera, verifica se è presente nell'array
  for (let letter of string.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

// Invoca la funzione qui e stampa il risultato in console
const result = countVowels(word);
console.log(word + ' : ' + result);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
