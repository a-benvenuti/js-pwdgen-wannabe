var firstName = prompt("Come ti chiami?");
var surname = prompt("Qual'è il tuo cognome?");
var color = prompt("Colore preferito?");
var space = " ";
var result = firstName + space + surname + space + color + space + "27";

document.getElementById('stamp').innerHTML = result;
