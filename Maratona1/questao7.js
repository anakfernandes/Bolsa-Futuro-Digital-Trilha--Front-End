const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Digite o lado 1:"));
let lado2 = parseFloat(prompt("Digite o lado 2:"));
let lado3 = parseFloat(prompt("Digite o lado 3:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
if (lado1 === lado2 && lado2 === lado3) {
console.log("Triângulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
console.log("Triângulo Isósceles");
} else {
console.log("Triângulo Escaleno");
}
} else {
console.log("Os valores não formam um triângulo.");
}