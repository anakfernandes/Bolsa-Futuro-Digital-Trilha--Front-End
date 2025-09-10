const prompt = require('prompt-sync')();

let palavra = prompt("Digite uma palavra: ").toLowerCase();

// Invertemos a palavra
let invertida = palavra.split("").reverse().join("");

// Comparação
if (palavra === invertida) {
    console.log("É um palíndromo!");
} else {
    console.log("Não é um palíndromo.");
}
