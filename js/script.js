// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Buon lavoro!





// 1. Chiedere all'utente il numero di chilometri
const kilometers = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// 2. Chiedere l'età del passeggero
const age = parseInt(prompt("Quanti anni hai?"));

// 3. Definire il prezzo base del biglietto (0.21 € al km)
const pricePerKm = 0.21;
let totalPrice = kilometers * pricePerKm;

// 4. Applicare sconto del 20% per i minorenni
if (age < 18) {
  totalPrice -= totalPrice * 0.20; // Sottrai il 20% dal totale
}

// 5. Applicare sconto del 40% per gli over 65
else if (age > 65) {
  totalPrice -= totalPrice * 0.40; // Sottrai il 40% dal totale
}

// 6. Formattare il prezzo finale con massimo due decimali
const formattedPrice = totalPrice.toFixed(2);

// 7. Mostrare il risultato all'utente
alert(`Il prezzo finale del tuo biglietto è: €${formattedPrice}`);