const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

console.log("Tabuada do " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
