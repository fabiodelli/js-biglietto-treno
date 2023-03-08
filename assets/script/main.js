//Traccia

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/
 

//Procedimento

// Chiedo all'utente il numero di chilometri e l'età

/* Calcolo il prezzo base del biglietto:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
/*
/* Applico lo sconto in base all'età:
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.
*/
/*inserisco l'output del prezzo finale nel DOM in forma umana:
   - con massimo due decimali, per indicare centesimi sul prezzo.
*/



//Strumenti

// variables
// Number
// prompt
// console.log
// conditions
// toFixed
// getElementById


//Codice

// Chiedo all'utente il numero di chilometri e l'età
const km = Number(prompt("Quanti chilometri devi percorrere?"));
const age = Number(prompt("Quanti anni hai?"));
console.log(km)
console.log(age)

// Calcolo il prezzo base del biglietto
let ticketPrice = km * 0.21;
console.log(ticketPrice)

// Applico lo sconto in base all'età
if (age < 18) {
    ticketPrice = ticketPrice * 0.8;  
} else if (age >= 65) {
    ticketPrice = ticketPrice * 0.6;  
}
console.log(ticketPrice)

// inserisco l'output del prezzo finale nel DOM in forma umana
const priceFormatted = ticketPrice.toFixed(2);
document.getElementById("ticket_price").innerHTML = `Il prezzo del tuo biglietto è di: € ${priceFormatted}`
console.log(priceFormatted)