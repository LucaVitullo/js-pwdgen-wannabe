const Nome = prompt('Digita il tuo nome');
const Cognome = prompt('Digita il tuo cognome');
const colorePreferito = prompt('Qualè il tuo colore preferito?');
const allInfo = Nome + Cognome + colorePreferito + '21'

console.log(Nome + Cognome + colorePreferito + '21')

document.getElementById('info').innerText = allInfo;