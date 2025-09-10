const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 1; i <= 10; i++) {
    let num = parseFloat(prompt(`Digite o ${i}º número: `));
    numeros.push(num);
}

let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("O maior número digitado foi:", maior);
console.log("O menor número digitado foi:", menor);
