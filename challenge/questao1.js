const prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ").toLowerCase();
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
        contador++;
    }
}

console.log("A letra 'a' aparece " + contador + " vezes na frase.");
