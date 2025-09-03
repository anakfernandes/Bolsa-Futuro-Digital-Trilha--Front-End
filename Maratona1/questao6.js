const prompt = require("prompt-sync")();

let temperatura = parseFloat(prompt("Digite a temperatura:"));
let escala = prompt("Digite a escala (C para Celsius, F para Fahrenheit):").toUpperCase();

if (escala === "C") {
let fahrenheit = (temperatura * 9/5) + 32;
console.log(temperatura + "°C = " + fahrenheit.toFixed(2) + "°F");
} else if (escala === "F") {
let celsius = (temperatura - 32) * 5/9;
console.log(temperatura + "°F = " + celsius.toFixed(2) + "°C");
} else {
console.log("Escala inválida!");
}