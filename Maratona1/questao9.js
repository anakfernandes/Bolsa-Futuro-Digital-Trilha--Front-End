const prompt = require("prompt-sync")();

let usuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();
let opcoes = ["pedra", "papel", "tesoura"];
let computador = opcoes[Math.floor(Math.random() * 3)];

console.log("Você escolheu: " + usuario);
console.log("Computador escolheu: " + computador);
if (usuario === computador) {
console.log("Empate!");
} else if (
(usuario === "pedra" && computador === "tesoura") ||
(usuario === "papel" && computador === "pedra") ||
(usuario === "tesoura" && computador === "papel")
) {
console.log("Você venceu!");
} else {
console.log("Computador venceu!");
}