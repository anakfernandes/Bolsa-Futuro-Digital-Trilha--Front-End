const prompt = require("prompt-sync")();

let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
let valorFinal;

if (valorCompra < 100) {
valorFinal = valorCompra;
} else if (valorCompra <= 200) {
valorFinal = valorCompra * 0.9;
} else {
valorFinal = valorCompra * 0.8;
}
console.log("Valor final da compra: R$ " + valorFinal.toFixed(2));