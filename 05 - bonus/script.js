/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";
const time = new Date().getHours();
let welcome = "";

// Dichiara la funzione qui.
function welcomeByTime(name) {
  if (time < 13) {
    welcome = "Buongiornsss";
  } else if (time < 17) {
    welcome = "Buon pomeriggio";
  } else {
    welcome = "Buona sera";
  }
  return `${welcome}, ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(welcomeByTime(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
