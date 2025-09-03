const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;
if (media >= 7) {
console.log("Aprovado! Média: " + media);
} else {
console.log("Reprovado! Média: " + media);
}